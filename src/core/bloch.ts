import { Complex } from './complex';
import { partialTrace, trace } from './matrix';
import type { Matrix } from './matrix';

export interface BlochCoords {
  x: number; // Tr[ρσx]
  y: number; // Tr[ρσy]
  z: number; // Tr[ρσz]
  purity: number; // Tr[ρ²], 1 for pure states, 0.5 for maximally mixed
}

/** Pauli matrices */
const sigmaX: Matrix = [
  [Complex.ZERO, Complex.ONE],
  [Complex.ONE, Complex.ZERO],
];

const sigmaY: Matrix = [
  [Complex.ZERO, Complex.MINUS_I],
  [Complex.I, Complex.ZERO],
];

const sigmaZ: Matrix = [
  [Complex.ONE, Complex.ZERO],
  [Complex.ZERO, new Complex(-1)],
];

/** Multiply two 2×2 matrices */
function mul2x2(A: Matrix, B: Matrix): Matrix {
  return [
    [A[0][0].mul(B[0][0]).add(A[0][1].mul(B[1][0])), A[0][0].mul(B[0][1]).add(A[0][1].mul(B[1][1]))],
    [A[1][0].mul(B[0][0]).add(A[1][1].mul(B[1][0])), A[1][0].mul(B[0][1]).add(A[1][1].mul(B[1][1]))],
  ];
}

/** Compute Bloch vector from a single-qubit density matrix */
function blochFromDensity(rho: Matrix): BlochCoords {
  const rx = trace(mul2x2(rho, sigmaX)).re;
  const ry = trace(mul2x2(rho, sigmaY)).re;
  const rz = trace(mul2x2(rho, sigmaZ)).re;
  const purity = trace(mul2x2(rho, rho)).re;

  return { x: rx, y: ry, z: rz, purity };
}

/**
 * Compute Bloch coordinates for each qubit given a full statevector.
 * For multi-qubit states, traces out all other qubits to get the reduced
 * density matrix for each individual qubit.
 */
export function computeBlochVectors(amplitudes: Complex[], numQubits: number): BlochCoords[] {
  const vectors: BlochCoords[] = [];

  for (let q = 0; q < numQubits; q++) {
    if (numQubits === 1) {
      // Direct: ρ = |ψ⟩⟨ψ|
      const rho: Matrix = [
        [amplitudes[0].mul(amplitudes[0].conjugate()), amplitudes[0].mul(amplitudes[1].conjugate())],
        [amplitudes[1].mul(amplitudes[0].conjugate()), amplitudes[1].mul(amplitudes[1].conjugate())],
      ];
      vectors.push(blochFromDensity(rho));
    } else {
      // Partial trace over all qubits except q
      const traceOut = [];
      for (let i = 0; i < numQubits; i++) {
        if (i !== q) traceOut.push(i);
      }
      const rho = partialTrace(amplitudes, traceOut, numQubits);
      vectors.push(blochFromDensity(rho));
    }
  }

  return vectors;
}
