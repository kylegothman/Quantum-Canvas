import type { GateDefinition } from './gates';

/** A gate placed on specific qubits in the circuit */
export interface PlacedGate {
  id: string;
  gate: GateDefinition;
  targets: number[];     // Target qubit indices
  controls?: number[];   // Control qubits (for controlled gates)
  params?: number[];     // Parameters for parametric gates (Rx, Ry, Rz angles)
}

/** A moment (column) in the circuit — gates that execute simultaneously */
export interface Moment {
  gates: PlacedGate[];
}

/** The complete circuit */
export interface Circuit {
  numQubits: number;
  moments: Moment[];
}

/** Create an empty circuit */
export function createCircuit(numQubits: number): Circuit {
  return { numQubits, moments: [] };
}

/** Generate a unique gate ID */
let gateIdCounter = 0;
export function nextGateId(): string {
  return `gate_${++gateIdCounter}`;
}

/** Add a gate to a specific moment, creating the moment if needed */
export function addGateToCircuit(
  circuit: Circuit,
  momentIndex: number,
  gate: GateDefinition,
  targets: number[],
  params?: number[]
): Circuit {
  const newMoments = [...circuit.moments];

  // Extend moments array if needed
  while (newMoments.length <= momentIndex) {
    newMoments.push({ gates: [] });
  }

  const newGate: PlacedGate = {
    id: nextGateId(),
    gate,
    targets,
    params,
  };

  // For multi-qubit gates with controls, split targets/controls
  if (gate.numQubits === 2 && targets.length === 2 && gate.name === 'CNOT') {
    newGate.controls = [targets[0]];
    newGate.targets = [targets[1]];
  }

  newMoments[momentIndex] = {
    gates: [...newMoments[momentIndex].gates, newGate],
  };

  return { ...circuit, moments: newMoments };
}

/** Remove a gate by ID */
export function removeGateFromCircuit(circuit: Circuit, gateId: string): Circuit {
  return {
    ...circuit,
    moments: circuit.moments.map(m => ({
      gates: m.gates.filter(g => g.id !== gateId),
    })).filter(m => m.gates.length > 0),
  };
}

/** Check if a qubit is occupied in a given moment */
export function isQubitOccupied(moment: Moment, qubit: number): boolean {
  return moment.gates.some(g => {
    const allQubits = [...g.targets, ...(g.controls || [])];
    return allQubits.includes(qubit);
  });
}

/** Get all qubits used by a gate */
export function getGateQubits(gate: PlacedGate): number[] {
  return [...(gate.controls || []), ...gate.targets];
}
