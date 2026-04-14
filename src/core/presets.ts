import type { Circuit, PlacedGate } from './circuit';
import { nextGateId } from './circuit';
import { H, X, Z, S, T, CNOT, CZ, SWAP, MEASURE, Rz } from './gates';
import type { GateDefinition } from './gates';
import { simonsOracle, bernsteinVaziraniOracle, createOracleGate } from './oracle';

export interface PresetCircuit {
  name: string;
  description: string;
  category: 'basics' | 'algorithms' | 'error-correction';
  build: () => Circuit;
}

function sg(gate: GateDefinition, target: number, params?: number[]): PlacedGate {
  return { id: nextGateId(), gate, targets: [target], params };
}

function cnot(control: number, target: number): PlacedGate {
  return { id: nextGateId(), gate: CNOT, targets: [target], controls: [control] };
}

function swap(a: number, b: number): PlacedGate {
  return { id: nextGateId(), gate: SWAP, targets: [a, b] };
}

export const PRESETS: PresetCircuit[] = [
  // ─── Basics ────────────────────────────────────────────────────
  {
    name: 'Bell State',
    description: 'Maximally entangled (|00⟩+|11⟩)/√2',
    category: 'basics',
    build: () => ({
      numQubits: 2,
      moments: [
        { gates: [sg(H, 0)] },
        { gates: [cnot(0, 1)] },
      ],
    }),
  },
  {
    name: 'GHZ State',
    description: '3-qubit entanglement (|000⟩+|111⟩)/√2',
    category: 'basics',
    build: () => ({
      numQubits: 3,
      moments: [
        { gates: [sg(H, 0)] },
        { gates: [cnot(0, 1)] },
        { gates: [cnot(1, 2)] },
      ],
    }),
  },
  {
    name: 'Superposition',
    description: 'Equal superposition of all basis states',
    category: 'basics',
    build: () => ({
      numQubits: 3,
      moments: [
        { gates: [sg(H, 0), sg(H, 1), sg(H, 2)] },
      ],
    }),
  },
  {
    name: 'Bell Measurement',
    description: 'Create and measure a Bell pair',
    category: 'basics',
    build: () => ({
      numQubits: 2,
      moments: [
        { gates: [sg(H, 0)] },
        { gates: [cnot(0, 1)] },
        { gates: [sg(MEASURE, 0), sg(MEASURE, 1)] },
      ],
    }),
  },

  // ─── Algorithms ────────────────────────────────────────────────
  {
    name: 'Deutsch-Jozsa',
    description: 'Determines if oracle is constant or balanced',
    category: 'algorithms',
    build: () => ({
      numQubits: 2,
      moments: [
        { gates: [sg(X, 1)] },
        { gates: [sg(H, 0), sg(H, 1)] },
        { gates: [cnot(0, 1)] },
        { gates: [sg(H, 0)] },
        { gates: [sg(MEASURE, 0)] },
      ],
    }),
  },
  {
    name: 'Quantum Teleportation',
    description: 'Teleport q0 state to q2 via entangled pair',
    category: 'algorithms',
    build: () => ({
      numQubits: 3,
      moments: [
        // Prepare state to teleport on q0
        { gates: [sg(Rz, 0, [Math.PI / 3])] },
        // Create Bell pair on q1, q2
        { gates: [sg(H, 1)] },
        { gates: [cnot(1, 2)] },
        // Bell measurement on q0, q1
        { gates: [cnot(0, 1)] },
        { gates: [sg(H, 0)] },
        { gates: [sg(MEASURE, 0), sg(MEASURE, 1)] },
        // Corrections on q2
        { gates: [cnot(1, 2)] },
        { gates: [cnot(0, 2)] },
      ],
    }),
  },
  {
    name: 'QFT (3-qubit)',
    description: 'Quantum Fourier Transform on 3 qubits',
    category: 'algorithms',
    build: () => ({
      numQubits: 3,
      moments: [
        { gates: [sg(H, 0)] },
        { gates: [sg(S, 0), sg(H, 1)] },
        { gates: [sg(T, 0)] },
        { gates: [sg(S, 1)] },
        { gates: [sg(H, 2)] },
        { gates: [swap(0, 2)] },
      ],
    }),
  },
  {
    name: 'Grover (2-qubit)',
    description: 'Search for |11⟩ — one Grover iteration',
    category: 'algorithms',
    build: () => ({
      numQubits: 2,
      moments: [
        // Superposition
        { gates: [sg(H, 0), sg(H, 1)] },
        // Oracle: mark |11⟩ with phase flip (CZ)
        { gates: [{ id: nextGateId(), gate: CZ, targets: [0, 1] }] },
        // Diffusion operator
        { gates: [sg(H, 0), sg(H, 1)] },
        { gates: [sg(X, 0), sg(X, 1)] },
        { gates: [sg(H, 1)] },
        { gates: [cnot(0, 1)] },
        { gates: [sg(H, 1)] },
        { gates: [sg(X, 0), sg(X, 1)] },
        { gates: [sg(H, 0), sg(H, 1)] },
      ],
    }),
  },
  {
    name: 'Swap Test',
    description: 'Test if q1 and q2 are in the same state',
    category: 'algorithms',
    build: () => ({
      numQubits: 3,
      moments: [
        { gates: [sg(H, 0)] },
        // Controlled-SWAP (Fredkin-like via CNOTs)
        { gates: [cnot(0, 1)] },
        { gates: [cnot(0, 2)] },
        { gates: [sg(H, 0)] },
        { gates: [sg(MEASURE, 0)] },
      ],
    }),
  },

  {
    name: "Simon's Algorithm",
    description: "Find hidden period s=11 using Simon's oracle (4 qubits)",
    category: 'algorithms',
    build: () => {
      const oracleGate = createOracleGate(simonsOracle(0b11, 2));
      return {
        numQubits: 4,
        moments: [
          // H on input register (q0, q1)
          { gates: [sg(H, 0), sg(H, 1)] },
          // Oracle Uf on all 4 qubits
          { gates: [{ id: nextGateId(), gate: oracleGate, targets: [0, 1, 2, 3] }] },
          // H on input register
          { gates: [sg(H, 0), sg(H, 1)] },
          // Measure input register
          { gates: [sg(MEASURE, 0), sg(MEASURE, 1)] },
        ],
      };
    },
  },
  {
    name: 'Bernstein-Vazirani',
    description: 'Find secret string s=101 in one query (4 qubits)',
    category: 'algorithms',
    build: () => {
      const oracleGate = createOracleGate(bernsteinVaziraniOracle(0b101, 3));
      return {
        numQubits: 4,
        moments: [
          // Prepare output qubit in |−⟩
          { gates: [sg(X, 3)] },
          // H on all qubits
          { gates: [sg(H, 0), sg(H, 1), sg(H, 2), sg(H, 3)] },
          // Oracle Uf
          { gates: [{ id: nextGateId(), gate: oracleGate, targets: [0, 1, 2, 3] }] },
          // H on input register
          { gates: [sg(H, 0), sg(H, 1), sg(H, 2)] },
          // Measure input register
          { gates: [sg(MEASURE, 0), sg(MEASURE, 1), sg(MEASURE, 2)] },
        ],
      };
    },
  },

  // ─── Error Correction ──────────────────────────────────────────
  {
    name: 'Bit Flip Code',
    description: 'Encode q0 into 3-qubit repetition code',
    category: 'error-correction',
    build: () => ({
      numQubits: 3,
      moments: [
        { gates: [sg(H, 0)] },
        { gates: [cnot(0, 1)] },
        { gates: [cnot(0, 2)] },
      ],
    }),
  },
  {
    name: 'Phase Flip Code',
    description: '3-qubit phase error correction encoding',
    category: 'error-correction',
    build: () => ({
      numQubits: 3,
      moments: [
        { gates: [sg(H, 0)] },
        { gates: [cnot(0, 1)] },
        { gates: [cnot(0, 2)] },
        { gates: [sg(H, 0), sg(H, 1), sg(H, 2)] },
      ],
    }),
  },
];
