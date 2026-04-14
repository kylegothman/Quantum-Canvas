import { describe, it, expect, beforeEach } from 'vitest';
import { useCircuitStore } from '../store/circuitStore';
import { GATE_REGISTRY, H, X, Y, Z, S, T, Rx, Ry, Rz, CNOT, CZ, SWAP, TOFFOLI, MEASURE } from '../core/gates';
import { PRESETS } from '../core/presets';
import { simulateCircuit } from '../core/simulator';
import { Statevector } from '../core/statevector';

// Helper to reset the store before each test
function resetStore(numQubits = 3) {
  const store = useCircuitStore.getState();
  store.clearCircuit();
  store.setNumQubits(numQubits);
}

function getCircuit() {
  return useCircuitStore.getState().circuit;
}

function totalGates() {
  return getCircuit().moments.reduce((s, m) => s + m.gates.length, 0);
}

describe('Circuit Builder Features', () => {
  beforeEach(() => resetStore(3));

  // ─── Gate placement from sidebar (drag-and-drop simulation) ────

  describe('gate placement', () => {
    it('places a single-qubit gate (H)', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      expect(totalGates()).toBe(1);
      expect(getCircuit().moments[0].gates[0].gate.name).toBe('H');
      expect(getCircuit().moments[0].gates[0].targets).toEqual([0]);
    });

    it('places gates on different qubits in the same moment', () => {
      const { addGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(0, 1, X);
      addGate(0, 2, Y);
      expect(getCircuit().moments[0].gates.length).toBe(3);
    });

    it('places gates in different moments', () => {
      const { addGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(1, 0, X);
      addGate(2, 0, Z);
      expect(getCircuit().moments.length).toBe(3);
      expect(totalGates()).toBe(3);
    });

    it('rejects placement on occupied qubit in same moment', () => {
      const { addGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(0, 0, X); // Same moment, same qubit
      expect(getCircuit().moments[0].gates.length).toBe(1);
      expect(getCircuit().moments[0].gates[0].gate.name).toBe('H');
    });

    it('extends moments array when placing in a future moment', () => {
      useCircuitStore.getState().addGate(5, 0, H);
      expect(getCircuit().moments.length).toBe(6);
      expect(getCircuit().moments[5].gates.length).toBe(1);
    });

    it('places Measure gate correctly', () => {
      useCircuitStore.getState().addGate(0, 1, MEASURE);
      expect(totalGates()).toBe(1);
      expect(getCircuit().moments[0].gates[0].gate.name).toBe('Measure');
    });

    it('places every single-qubit gate type', () => {
      const singleGates = [H, X, Y, Z, S, T];
      singleGates.forEach((gate, i) => {
        useCircuitStore.getState().addGate(i, 0, gate);
      });
      expect(totalGates()).toBe(6);
    });

    it('places parametric gates with parameters', () => {
      useCircuitStore.getState().addGate(0, 0, Rx, [Math.PI / 4]);
      const placed = getCircuit().moments[0].gates[0];
      expect(placed.gate.name).toBe('Rx');
      expect(placed.params).toEqual([Math.PI / 4]);
    });

    it('places Ry and Rz parametric gates', () => {
      const { addGate } = useCircuitStore.getState();
      addGate(0, 0, Ry, [Math.PI / 2]);
      addGate(1, 0, Rz, [Math.PI]);
      expect(getCircuit().moments[0].gates[0].gate.name).toBe('Ry');
      expect(getCircuit().moments[1].gates[0].gate.name).toBe('Rz');
      expect(getCircuit().moments[0].gates[0].params![0]).toBeCloseTo(Math.PI / 2);
    });
  });

  // ─── Multi-qubit gate placement ────────────────────────────────

  describe('multi-qubit gate placement', () => {
    it('places CNOT with control and target', () => {
      useCircuitStore.getState().addMultiQubitGate(0, [0, 1], CNOT);
      const gate = getCircuit().moments[0].gates[0];
      expect(gate.gate.name).toBe('CNOT');
      expect(gate.controls).toEqual([0]);
      expect(gate.targets).toEqual([1]);
    });

    it('places CZ gate', () => {
      useCircuitStore.getState().addMultiQubitGate(0, [0, 2], CZ);
      const gate = getCircuit().moments[0].gates[0];
      expect(gate.gate.name).toBe('CZ');
      expect(gate.targets).toEqual([0, 2]);
    });

    it('places SWAP gate', () => {
      useCircuitStore.getState().addMultiQubitGate(0, [1, 2], SWAP);
      const gate = getCircuit().moments[0].gates[0];
      expect(gate.gate.name).toBe('SWAP');
      expect(gate.targets).toEqual([1, 2]);
    });

    it('rejects multi-qubit gate if any target qubit is occupied', () => {
      const { addGate, addMultiQubitGate } = useCircuitStore.getState();
      addGate(0, 0, H); // Occupy qubit 0
      addMultiQubitGate(0, [0, 1], CNOT); // Try CNOT on qubit 0,1
      // Should only have the H gate
      expect(getCircuit().moments[0].gates.length).toBe(1);
    });

    it('allows multi-qubit gate on non-adjacent qubits', () => {
      useCircuitStore.getState().addMultiQubitGate(0, [0, 2], CNOT);
      const gate = getCircuit().moments[0].gates[0];
      expect(gate.controls).toEqual([0]);
      expect(gate.targets).toEqual([2]);
    });
  });

  // ─── Gate deletion ─────────────────────────────────────────────

  describe('gate deletion', () => {
    it('removes a gate by ID', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().removeGate(gateId);
      expect(totalGates()).toBe(0);
    });

    it('removes empty moments after deletion', () => {
      const { addGate, removeGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(1, 0, X);
      const hId = getCircuit().moments[0].gates[0].id;
      removeGate(hId);
      // Only the X moment remains
      expect(getCircuit().moments.length).toBe(1);
      expect(getCircuit().moments[0].gates[0].gate.name).toBe('X');
    });

    it('keeps other gates in the same moment when one is deleted', () => {
      const { addGate, removeGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(0, 1, X);
      addGate(0, 2, Y);
      const xId = getCircuit().moments[0].gates.find(g => g.gate.name === 'X')!.id;
      removeGate(xId);
      expect(getCircuit().moments[0].gates.length).toBe(2);
      const names = getCircuit().moments[0].gates.map(g => g.gate.name);
      expect(names).toContain('H');
      expect(names).toContain('Y');
      expect(names).not.toContain('X');
    });

    it('clears selection when selected gate is deleted', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().selectGate(gateId);
      expect(useCircuitStore.getState().selectedGateId).toBe(gateId);
      useCircuitStore.getState().removeGate(gateId);
      expect(useCircuitStore.getState().selectedGateId).toBeNull();
    });

    it('does nothing for nonexistent gate ID', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      useCircuitStore.getState().removeGate('nonexistent');
      expect(totalGates()).toBe(1);
    });
  });

  // ─── Gate rearrangement (moveGate) ─────────────────────────────

  describe('gate rearrangement', () => {
    it('moves a gate to a different moment', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().moveGate(gateId, 3, 0);
      // Interior empty moments are preserved (this prevents other gates from jumping)
      expect(getCircuit().moments.length).toBe(4);
      expect(getCircuit().moments[3].gates[0].gate.name).toBe('H');
      expect(getCircuit().moments[0].gates.length).toBe(0); // Old slot is empty
    });

    it('moves a gate to a different qubit', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().moveGate(gateId, 0, 2);
      expect(getCircuit().moments[0].gates[0].targets).toEqual([2]);
    });

    it('moves a gate to a different moment AND qubit', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().moveGate(gateId, 2, 1);
      // Gate moved to moment 2, qubit 1; interior gaps preserved
      expect(getCircuit().moments.length).toBe(3);
      expect(getCircuit().moments[2].gates[0].targets).toEqual([1]);
    });

    it('rejects move to occupied slot', () => {
      const { addGate, moveGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(1, 0, X);
      const hId = getCircuit().moments[0].gates[0].id;
      moveGate(hId, 1, 0); // Move H to where X is
      // Both gates should still be in their original positions
      expect(totalGates()).toBe(2);
    });

    it('rejects move for nonexistent gate ID', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      useCircuitStore.getState().moveGate('nonexistent', 5, 0);
      // Nothing should change
      expect(totalGates()).toBe(1);
      expect(getCircuit().moments[0].gates[0].targets).toEqual([0]);
    });

    it('rejects move to out-of-range qubit', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().moveGate(gateId, 0, 10); // Out of range
      // Should not have moved
      expect(getCircuit().moments[0].gates[0].targets).toEqual([0]);
    });
  });

  // ─── Gate selection ────────────────────────────────────────────

  describe('gate selection', () => {
    it('selects a gate by ID', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().selectGate(gateId);
      expect(useCircuitStore.getState().selectedGateId).toBe(gateId);
    });

    it('deselects with null', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().selectGate(gateId);
      useCircuitStore.getState().selectGate(null);
      expect(useCircuitStore.getState().selectedGateId).toBeNull();
    });
  });

  // ─── Clear circuit ─────────────────────────────────────────────

  describe('clear circuit', () => {
    it('removes all gates', () => {
      const { addGate, clearCircuit } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(1, 1, X);
      addGate(2, 2, Y);
      clearCircuit();
      expect(getCircuit().moments.length).toBe(0);
      expect(totalGates()).toBe(0);
    });

    it('preserves qubit count', () => {
      useCircuitStore.getState().setNumQubits(5);
      useCircuitStore.getState().addGate(0, 0, H);
      useCircuitStore.getState().clearCircuit();
      expect(getCircuit().numQubits).toBe(5);
    });

    it('clears selection', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const gateId = getCircuit().moments[0].gates[0].id;
      useCircuitStore.getState().selectGate(gateId);
      useCircuitStore.getState().clearCircuit();
      expect(useCircuitStore.getState().selectedGateId).toBeNull();
    });
  });

  // ─── Qubit count changes ───────────────────────────────────────

  describe('qubit count changes', () => {
    it('changes qubit count', () => {
      useCircuitStore.getState().setNumQubits(5);
      expect(getCircuit().numQubits).toBe(5);
    });

    it('removes gates on qubits beyond the new count', () => {
      const { addGate, setNumQubits } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(0, 1, X);
      addGate(0, 2, Y);
      setNumQubits(2); // Removes qubit 2
      expect(totalGates()).toBe(2);
      const names = getCircuit().moments[0].gates.map(g => g.gate.name);
      expect(names).toContain('H');
      expect(names).toContain('X');
      expect(names).not.toContain('Y');
    });

    it('removes multi-qubit gates if any qubit goes out of range', () => {
      useCircuitStore.getState().addMultiQubitGate(0, [0, 2], CNOT);
      useCircuitStore.getState().setNumQubits(2); // Qubit 2 gone
      expect(totalGates()).toBe(0);
    });

    it('keeps gates within range when reducing', () => {
      const { addGate, setNumQubits } = useCircuitStore.getState();
      addGate(0, 0, H);
      addGate(1, 0, X);
      setNumQubits(1);
      expect(totalGates()).toBe(2);
    });
  });

  // ─── Preset loading ────────────────────────────────────────────

  describe('preset loading', () => {
    for (const preset of PRESETS) {
      it(`loads preset "${preset.name}" without error`, () => {
        const circuit = preset.build();
        useCircuitStore.getState().loadCircuit(circuit);
        expect(getCircuit().numQubits).toBe(circuit.numQubits);
        expect(getCircuit().moments.length).toBe(circuit.moments.length);
      });

      it(`preset "${preset.name}" simulates without error`, () => {
        const circuit = preset.build();
        const result = simulateCircuit(circuit);
        expect(result.finalState).toBeDefined();
        // Final state probabilities should sum to ~1
        const sum = result.finalState.probabilities().reduce((a, b) => a + b, 0);
        expect(sum).toBeCloseTo(1, 5);
      });
    }
  });

  // ─── Gate registry lookup (the Measure/Toffoli bug) ────────────

  describe('gate registry drag-and-drop lookup', () => {
    // This simulates the exact flow: sidebar sends gate.name, canvas looks it up
    const allPaletteGates = [
      ...Object.values(GATE_REGISTRY),
    ];

    for (const gate of allPaletteGates) {
      it(`dragging "${gate.name}" from palette resolves in GATE_REGISTRY`, () => {
        const looked = GATE_REGISTRY[gate.name];
        expect(looked).toBeDefined();
        expect(looked.name).toBe(gate.name);
      });
    }
  });

  // ─── Simulation integration ────────────────────────────────────

  describe('circuit simulation integration', () => {
    it('empty circuit produces |000⟩', () => {
      const result = simulateCircuit(getCircuit());
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(1);
    });

    it('H on q0 produces equal superposition on q0', () => {
      useCircuitStore.getState().addGate(0, 0, H);
      const result = simulateCircuit(getCircuit());
      // |000⟩ and |100⟩ should each have 50% probability
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(0.5);
      expect(result.finalState.amplitudes[4].abs2()).toBeCloseTo(0.5); // |100⟩ = index 4 for 3 qubits
    });

    it('CNOT after H creates entanglement', () => {
      resetStore(2);
      const { addGate, addMultiQubitGate } = useCircuitStore.getState();
      addGate(0, 0, H);
      addMultiQubitGate(1, [0, 1], CNOT);
      const result = simulateCircuit(getCircuit());
      // Bell state: |00⟩ and |11⟩ each ~50%
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(0.5);
      expect(result.finalState.amplitudes[3].abs2()).toBeCloseTo(0.5);
    });

    it('Measurement of |0⟩ always gives 0', () => {
      resetStore(1);
      useCircuitStore.getState().addGate(0, 0, MEASURE);
      const result = simulateCircuit(getCircuit());
      expect(result.classicalBits.get(0)).toBe(0);
    });

    it('X then Measure always gives 1', () => {
      resetStore(1);
      const { addGate } = useCircuitStore.getState();
      addGate(0, 0, X);
      addGate(1, 0, MEASURE);
      const result = simulateCircuit(getCircuit());
      expect(result.classicalBits.get(0)).toBe(1);
    });

    it('parametric Rx(π) flips from |0⟩ to |1⟩ (up to global phase)', () => {
      resetStore(1);
      useCircuitStore.getState().addGate(0, 0, Rx, [Math.PI]);
      const result = simulateCircuit(getCircuit());
      expect(result.finalState.amplitudes[1].abs2()).toBeCloseTo(1, 5);
    });
  });
});
