import { Complex, c } from './complex';
import type { Matrix } from './matrix';

const SQRT2_INV = 1 / Math.sqrt(2);

export interface GateDefinition {
  name: string;
  symbol: string;
  numQubits: number;
  parametric: boolean;
  paramNames?: string[];
  matrix: (params?: number[]) => Matrix;
  color: string;
  description: string;
}

// ─── Single-Qubit Gates ────────────────────────────────────────────

export const H: GateDefinition = {
  name: 'H',
  symbol: 'H',
  numQubits: 1,
  parametric: false,
  color: '#ff6b35',
  description: 'Hadamard gate — creates superposition',
  matrix: () => [
    [c(SQRT2_INV), c(SQRT2_INV)],
    [c(SQRT2_INV), c(-SQRT2_INV)],
  ],
};

export const X: GateDefinition = {
  name: 'X',
  symbol: 'X',
  numQubits: 1,
  parametric: false,
  color: '#ff2e63',
  description: 'Pauli-X (NOT) gate — bit flip',
  matrix: () => [
    [Complex.ZERO, Complex.ONE],
    [Complex.ONE, Complex.ZERO],
  ],
};

export const Y: GateDefinition = {
  name: 'Y',
  symbol: 'Y',
  numQubits: 1,
  parametric: false,
  color: '#08d9d6',
  description: 'Pauli-Y gate',
  matrix: () => [
    [Complex.ZERO, Complex.MINUS_I],
    [Complex.I, Complex.ZERO],
  ],
};

export const Z: GateDefinition = {
  name: 'Z',
  symbol: 'Z',
  numQubits: 1,
  parametric: false,
  color: '#6b5ce7',
  description: 'Pauli-Z gate — phase flip',
  matrix: () => [
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, c(-1)],
  ],
};

export const S: GateDefinition = {
  name: 'S',
  symbol: 'S',
  numQubits: 1,
  parametric: false,
  color: '#38b764',
  description: 'S gate (√Z) — π/2 phase',
  matrix: () => [
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.I],
  ],
};

export const T: GateDefinition = {
  name: 'T',
  symbol: 'T',
  numQubits: 1,
  parametric: false,
  color: '#38b764',
  description: 'T gate (√S) — π/4 phase',
  matrix: () => [
    [Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.polar(1, Math.PI / 4)],
  ],
};

export const Rx: GateDefinition = {
  name: 'Rx',
  symbol: 'Rx',
  numQubits: 1,
  parametric: true,
  paramNames: ['θ'],
  color: '#ff6b35',
  description: 'X-rotation by angle θ',
  matrix: (params = [Math.PI]) => {
    const theta = params[0];
    const cos = Math.cos(theta / 2);
    const sin = Math.sin(theta / 2);
    return [
      [c(cos), c(0, -sin)],
      [c(0, -sin), c(cos)],
    ];
  },
};

export const Ry: GateDefinition = {
  name: 'Ry',
  symbol: 'Ry',
  numQubits: 1,
  parametric: true,
  paramNames: ['θ'],
  color: '#ff6b35',
  description: 'Y-rotation by angle θ',
  matrix: (params = [Math.PI]) => {
    const theta = params[0];
    const cos = Math.cos(theta / 2);
    const sin = Math.sin(theta / 2);
    return [
      [c(cos), c(-sin)],
      [c(sin), c(cos)],
    ];
  },
};

export const Rz: GateDefinition = {
  name: 'Rz',
  symbol: 'Rz',
  numQubits: 1,
  parametric: true,
  paramNames: ['θ'],
  color: '#ff6b35',
  description: 'Z-rotation by angle θ',
  matrix: (params = [Math.PI]) => {
    const theta = params[0];
    return [
      [Complex.polar(1, -theta / 2), Complex.ZERO],
      [Complex.ZERO, Complex.polar(1, theta / 2)],
    ];
  },
};

// ─── Multi-Qubit Gates ─────────────────────────────────────────────

export const CNOT: GateDefinition = {
  name: 'CNOT',
  symbol: '⊕',
  numQubits: 2,
  parametric: false,
  color: '#ff2e63',
  description: 'Controlled-NOT (CX) gate',
  matrix: () => [
    [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO],
    [Complex.ZERO, Complex.ONE, Complex.ZERO, Complex.ZERO],
    [Complex.ZERO, Complex.ZERO, Complex.ZERO, Complex.ONE],
    [Complex.ZERO, Complex.ZERO, Complex.ONE, Complex.ZERO],
  ],
};

export const CZ: GateDefinition = {
  name: 'CZ',
  symbol: 'CZ',
  numQubits: 2,
  parametric: false,
  color: '#6b5ce7',
  description: 'Controlled-Z gate',
  matrix: () => [
    [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO],
    [Complex.ZERO, Complex.ONE, Complex.ZERO, Complex.ZERO],
    [Complex.ZERO, Complex.ZERO, Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.ZERO, Complex.ZERO, c(-1)],
  ],
};

export const SWAP: GateDefinition = {
  name: 'SWAP',
  symbol: '×',
  numQubits: 2,
  parametric: false,
  color: '#08d9d6',
  description: 'SWAP gate — exchanges two qubits',
  matrix: () => [
    [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO],
    [Complex.ZERO, Complex.ZERO, Complex.ONE, Complex.ZERO],
    [Complex.ZERO, Complex.ONE, Complex.ZERO, Complex.ZERO],
    [Complex.ZERO, Complex.ZERO, Complex.ZERO, Complex.ONE],
  ],
};

export const TOFFOLI: GateDefinition = {
  name: 'Toffoli',
  symbol: '⊕',
  numQubits: 3,
  parametric: false,
  color: '#ff2e63',
  description: 'Toffoli (CCX) gate — double-controlled NOT',
  matrix: () => {
    const dim = 8;
    const m: Matrix = [];
    for (let i = 0; i < dim; i++) {
      m[i] = new Array(dim).fill(Complex.ZERO);
      m[i][i] = Complex.ONE;
    }
    // Swap |110⟩ and |111⟩
    m[6][6] = Complex.ZERO;
    m[7][7] = Complex.ZERO;
    m[6][7] = Complex.ONE;
    m[7][6] = Complex.ONE;
    return m;
  },
};

// ─── Measurement (pseudo-gate for circuit model) ───────────────────

export const MEASURE: GateDefinition = {
  name: 'Measure',
  symbol: 'M',
  numQubits: 1,
  parametric: false,
  color: '#8888a0',
  description: 'Projective measurement in computational basis',
  matrix: () => [[Complex.ONE, Complex.ZERO], [Complex.ZERO, Complex.ONE]], // Identity placeholder
};

// ─── Gate Registry ─────────────────────────────────────────────────
// Keys MUST match gate.name exactly — the drag-and-drop system
// sends gate.name and looks it up here.

export const GATE_REGISTRY: Record<string, GateDefinition> = {
  H, X, Y, Z, S, T, Rx, Ry, Rz,
  CNOT, CZ, SWAP,
  Toffoli: TOFFOLI,
  Measure: MEASURE,
};

/** Gates grouped for the palette UI */
export const GATE_PALETTE = {
  single: [H, X, Y, Z, S, T],
  parametric: [Rx, Ry, Rz],
  multi: [CNOT, CZ, SWAP, TOFFOLI],
  other: [MEASURE],
};
