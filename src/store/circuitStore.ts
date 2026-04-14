import { create } from 'zustand';
import type { Circuit, PlacedGate, Moment } from '../core/circuit';
import { createCircuit, nextGateId } from '../core/circuit';
import type { GateDefinition } from '../core/gates';
import { DEFAULT_QUBITS } from '../utils/constants';

const MAX_UNDO = 20;

interface CircuitState {
  circuit: Circuit;
  selectedGateId: string | null;
  hoveredSlot: { moment: number; qubit: number } | null;

  // Undo history
  history: Circuit[];
  historyIndex: number;

  // Actions
  setNumQubits: (n: number) => void;
  addGate: (momentIndex: number, qubit: number, gate: GateDefinition, params?: number[]) => void;
  addMultiQubitGate: (momentIndex: number, targets: number[], gate: GateDefinition, params?: number[]) => void;
  addOracleGate: (gate: GateDefinition, totalQubits: number) => void;
  removeGate: (gateId: string) => void;
  moveGate: (gateId: string, toMoment: number, toQubit: number) => void;
  clearCircuit: () => void;
  selectGate: (gateId: string | null) => void;
  setHoveredSlot: (slot: { moment: number; qubit: number } | null) => void;
  loadCircuit: (circuit: Circuit) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
}

// ─── Helpers ───────────────────────────────────────────────────────

function findGate(circuit: Circuit, gateId: string): { gate: PlacedGate; momentIndex: number } | null {
  for (let mi = 0; mi < circuit.moments.length; mi++) {
    const gate = circuit.moments[mi].gates.find(g => g.id === gateId);
    if (gate) return { gate, momentIndex: mi };
  }
  return null;
}

/** Remove a gate but keep the moment slot (preserves indices) */
function removePlacedGate(moments: Moment[], gateId: string): Moment[] {
  return moments.map(m => ({
    gates: m.gates.filter(g => g.id !== gateId),
  }));
}

/** Remove trailing empty moments only. Interior gaps are preserved. */
function trimTrailingEmpty(moments: Moment[]): Moment[] {
  const result = [...moments];
  while (result.length > 0 && result[result.length - 1].gates.length === 0) {
    result.pop();
  }
  return result;
}

/** Remove ALL empty moments (used for delete, clear, qubit count change) */
function compactMoments(moments: Moment[]): Moment[] {
  return moments.filter(m => m.gates.length > 0);
}

/** Deep clone a circuit for history */
function cloneCircuit(c: Circuit): Circuit {
  return {
    numQubits: c.numQubits,
    moments: c.moments.map(m => ({
      gates: m.gates.map(g => ({ ...g })),
    })),
  };
}

// ─── Store ─────────────────────────────────────────────────────────

export const useCircuitStore = create<CircuitState>((set, get) => {
  /** Push current circuit to history before making a change */
  function pushHistory(state: CircuitState): Partial<CircuitState> {
    const newHistory = [
      ...state.history.slice(0, state.historyIndex + 1),
      cloneCircuit(state.circuit),
    ].slice(-MAX_UNDO);
    return {
      history: newHistory,
      historyIndex: newHistory.length - 1,
    };
  }

  return {
    circuit: createCircuit(DEFAULT_QUBITS),
    selectedGateId: null,
    hoveredSlot: null,
    history: [],
    historyIndex: -1,

    setNumQubits: (n) => set((state) => {
      const hist = pushHistory(state);
      const newCircuit = { ...state.circuit, numQubits: n };
      newCircuit.moments = compactMoments(newCircuit.moments.map(m => ({
        gates: m.gates.filter(g => {
          const allQubits = [...g.targets, ...(g.controls || [])];
          return allQubits.every(q => q < n);
        }),
      })));
      return { ...hist, circuit: newCircuit };
    }),

    addGate: (momentIndex, qubit, gate, params) => set((state) => {
      const hist = pushHistory(state);
      const newMoments = [...state.circuit.moments];
      while (newMoments.length <= momentIndex) {
        newMoments.push({ gates: [] });
      }

      const moment = newMoments[momentIndex];
      const occupied = moment.gates.some(g => {
        const allQ = [...g.targets, ...(g.controls || [])];
        return allQ.includes(qubit);
      });
      if (occupied) return state;

      const newGate: PlacedGate = {
        id: nextGateId(),
        gate,
        targets: [qubit],
        params,
      };

      newMoments[momentIndex] = { gates: [...moment.gates, newGate] };
      return { ...hist, circuit: { ...state.circuit, moments: newMoments } };
    }),

    addMultiQubitGate: (momentIndex, targets, gate, params) => set((state) => {
      const hist = pushHistory(state);
      const newMoments = [...state.circuit.moments];
      while (newMoments.length <= momentIndex) {
        newMoments.push({ gates: [] });
      }

      const moment = newMoments[momentIndex];
      const occupied = moment.gates.some(g => {
        const existing = [...g.targets, ...(g.controls || [])];
        return targets.some(t => existing.includes(t));
      });
      if (occupied) return state;

      const newGate: PlacedGate = {
        id: nextGateId(),
        gate,
        targets: gate.name === 'CNOT' ? [targets[targets.length - 1]] : targets,
        controls: gate.name === 'CNOT' ? targets.slice(0, -1) : undefined,
        params,
      };

      newMoments[momentIndex] = { gates: [...moment.gates, newGate] };
      return { ...hist, circuit: { ...state.circuit, moments: newMoments } };
    }),

    addOracleGate: (gate, totalQubits) => set((state) => {
      const hist = pushHistory(state);
      const numQubits = Math.max(state.circuit.numQubits, totalQubits);
      const targets = Array.from({ length: totalQubits }, (_, i) => i);

      let momentIndex = 0;
      const moments = [...state.circuit.moments];
      while (momentIndex < moments.length) {
        const moment = moments[momentIndex];
        const anyOccupied = moment.gates.some(g => {
          const qubits = [...g.targets, ...(g.controls || [])];
          return targets.some(t => qubits.includes(t));
        });
        if (!anyOccupied) break;
        momentIndex++;
      }

      while (moments.length <= momentIndex) {
        moments.push({ gates: [] });
      }

      const newGate: PlacedGate = { id: nextGateId(), gate, targets };
      moments[momentIndex] = { gates: [...moments[momentIndex].gates, newGate] };
      return { ...hist, circuit: { numQubits, moments } };
    }),

    removeGate: (gateId) => set((state) => {
      const hist = pushHistory(state);
      return {
        ...hist,
        circuit: {
          ...state.circuit,
          // Compact: remove ALL empty moments so the circuit stays tidy
          moments: compactMoments(
            state.circuit.moments.map(m => ({
              gates: m.gates.filter(g => g.id !== gateId),
            }))
          ),
        },
        selectedGateId: state.selectedGateId === gateId ? null : state.selectedGateId,
      };
    }),

    moveGate: (gateId, toMoment, toQubit) => set((state) => {
      const found = findGate(state.circuit, gateId);
      if (!found) return state;

      const { gate } = found;
      const isMultiQubit = (gate.controls?.length ?? 0) + gate.targets.length > 1;

      // Remove from current position (keep empty slot to preserve indices)
      let newMoments = removePlacedGate(
        state.circuit.moments.map(m => ({ gates: [...m.gates] })),
        gateId
      );

      // Extend moments if needed
      while (newMoments.length <= toMoment) {
        newMoments.push({ gates: [] });
      }

      // Build the moved gate
      let movedGate: PlacedGate;
      if (isMultiQubit) {
        const oldPrimaryQubit = gate.targets[0];
        const qubitDelta = toQubit - oldPrimaryQubit;
        movedGate = {
          ...gate,
          targets: gate.targets.map(q => q + qubitDelta),
          controls: gate.controls?.map(q => q + qubitDelta),
        };

        const allQ = [...movedGate.targets, ...(movedGate.controls || [])];
        if (allQ.some(q => q < 0 || q >= state.circuit.numQubits)) return state;
      } else {
        if (toQubit < 0 || toQubit >= state.circuit.numQubits) return state;
        movedGate = { ...gate, targets: [toQubit] };
      }

      // Check destination isn't occupied (by OTHER gates — the moved gate was already removed)
      const destMoment = newMoments[toMoment];
      const allNewQubits = [...movedGate.targets, ...(movedGate.controls || [])];
      const destOccupied = destMoment.gates.some(g => {
        const existing = [...g.targets, ...(g.controls || [])];
        return allNewQubits.some(q => existing.includes(q));
      });
      if (destOccupied) return state;

      // Save history ONLY on successful move
      const hist = pushHistory(state);

      // Place gate in new position
      newMoments[toMoment] = { gates: [...destMoment.gates, movedGate] };

      // ONLY trim trailing empty moments — interior gaps stay put
      // This prevents other gates from jumping when you move one
      newMoments = trimTrailingEmpty(newMoments);

      return { ...hist, circuit: { ...state.circuit, moments: newMoments } };
    }),

    clearCircuit: () => set((state) => {
      const hist = pushHistory(state);
      return {
        ...hist,
        circuit: createCircuit(state.circuit.numQubits),
        selectedGateId: null,
      };
    }),

    selectGate: (gateId) => set({ selectedGateId: gateId }),
    setHoveredSlot: (slot) => set({ hoveredSlot: slot }),

    loadCircuit: (circuit) => set((state) => {
      const hist = pushHistory(state);
      return { ...hist, circuit, selectedGateId: null };
    }),

    undo: () => set((state) => {
      if (state.historyIndex < 0) return state;
      const restored = cloneCircuit(state.history[state.historyIndex]);
      return {
        circuit: restored,
        historyIndex: state.historyIndex - 1,
        selectedGateId: null,
      };
    }),

    redo: () => set((state) => {
      if (state.historyIndex >= state.history.length - 1) return state;
      const next = cloneCircuit(state.history[state.historyIndex + 1]);
      // We also need to store the "current" state for the next undo...
      // Actually redo after undo: historyIndex+1 is the state we undid FROM
      // This simple model: undo pops, redo pushes back
      return {
        circuit: next,
        historyIndex: state.historyIndex + 1,
        selectedGateId: null,
      };
    }),

    canUndo: () => get().historyIndex >= 0,
    canRedo: () => get().historyIndex < get().history.length - 1,
  };
});
