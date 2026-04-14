import { Complex, c } from './complex';

/** A matrix is a 2D array of Complex numbers, row-major: matrix[row][col] */
export type Matrix = Complex[][];

/** Create an n×n identity matrix */
export function identity(n: number): Matrix {
  const I: Matrix = [];
  for (let i = 0; i < n; i++) {
    I[i] = [];
    for (let j = 0; j < n; j++) {
      I[i][j] = i === j ? Complex.ONE : Complex.ZERO;
    }
  }
  return I;
}

/** Matrix multiplication: A × B */
export function matmul(A: Matrix, B: Matrix): Matrix {
  const rowsA = A.length;
  const colsA = A[0].length;
  const colsB = B[0].length;
  const result: Matrix = [];

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      let sum = Complex.ZERO;
      for (let k = 0; k < colsA; k++) {
        sum = sum.add(A[i][k].mul(B[k][j]));
      }
      result[i][j] = sum;
    }
  }
  return result;
}

/** Matrix-vector multiplication: M × v */
export function matvec(M: Matrix, v: Complex[]): Complex[] {
  const n = M.length;
  const result: Complex[] = new Array(n);
  for (let i = 0; i < n; i++) {
    let sum = Complex.ZERO;
    for (let j = 0; j < v.length; j++) {
      sum = sum.add(M[i][j].mul(v[j]));
    }
    result[i] = sum;
  }
  return result;
}

/** Tensor (Kronecker) product: A ⊗ B */
export function tensor(A: Matrix, B: Matrix): Matrix {
  const rowsA = A.length, colsA = A[0].length;
  const rowsB = B.length, colsB = B[0].length;
  const result: Matrix = [];

  for (let i = 0; i < rowsA * rowsB; i++) {
    result[i] = [];
    for (let j = 0; j < colsA * colsB; j++) {
      const ai = Math.floor(i / rowsB);
      const bi = i % rowsB;
      const aj = Math.floor(j / colsB);
      const bj = j % colsB;
      result[i][j] = A[ai][aj].mul(B[bi][bj]);
    }
  }
  return result;
}

/** Conjugate transpose (adjoint / dagger) */
export function adjoint(M: Matrix): Matrix {
  const rows = M.length;
  const cols = M[0].length;
  const result: Matrix = [];
  for (let j = 0; j < cols; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = M[i][j].conjugate();
    }
  }
  return result;
}

/** Trace of a square matrix */
export function trace(M: Matrix): Complex {
  let sum = Complex.ZERO;
  for (let i = 0; i < M.length; i++) {
    sum = sum.add(M[i][i]);
  }
  return sum;
}

/**
 * Build the full n-qubit unitary for a gate acting on specific target qubits.
 * Uses bit-manipulation for efficiency instead of building huge tensor products.
 *
 * For a single-qubit gate U on qubit `target` in an n-qubit system:
 *   result[i][j] = product of U or I entries based on bit decomposition
 *
 * For multi-qubit gates, we use the direct index-mapping approach.
 */
export function expandGate(
  gate: Matrix,
  targets: number[],
  numQubits: number
): Matrix {
  const dim = 1 << numQubits;
  const gateSize = gate.length; // 2 for 1-qubit, 4 for 2-qubit, etc.
  const numGateQubits = Math.log2(gateSize);
  const result: Matrix = [];

  // Initialize to zero matrix
  for (let i = 0; i < dim; i++) {
    result[i] = new Array(dim).fill(Complex.ZERO);
  }

  // For each pair of basis states, check if they differ only on target qubits
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      // Extract the bits that are NOT target qubits
      let sameNonTarget = true;
      for (let q = 0; q < numQubits; q++) {
        if (!targets.includes(q)) {
          if (((i >> (numQubits - 1 - q)) & 1) !== ((j >> (numQubits - 1 - q)) & 1)) {
            sameNonTarget = false;
            break;
          }
        }
      }

      if (!sameNonTarget) continue;

      // Extract target qubit bits for i and j
      let targetBitsI = 0;
      let targetBitsJ = 0;
      for (let t = 0; t < numGateQubits; t++) {
        const q = targets[t];
        targetBitsI |= ((i >> (numQubits - 1 - q)) & 1) << (numGateQubits - 1 - t);
        targetBitsJ |= ((j >> (numQubits - 1 - q)) & 1) << (numGateQubits - 1 - t);
      }

      result[i][j] = gate[targetBitsI][targetBitsJ];
    }
  }

  return result;
}

/**
 * Optimized: apply a single-qubit gate to a statevector without building
 * the full 2^n × 2^n matrix. O(2^n) instead of O(2^2n).
 */
export function applySingleQubitGate(
  state: Complex[],
  gate: Matrix,
  target: number,
  numQubits: number
): Complex[] {
  const dim = state.length;
  const result = [...state];
  const step = 1 << (numQubits - 1 - target);

  for (let i = 0; i < dim; i++) {
    if (i & step) continue; // Only process pairs once
    const i0 = i;            // Bit at target position = 0
    const i1 = i | step;     // Bit at target position = 1

    const a = state[i0];
    const b = state[i1];

    result[i0] = gate[0][0].mul(a).add(gate[0][1].mul(b));
    result[i1] = gate[1][0].mul(a).add(gate[1][1].mul(b));
  }

  return result;
}

/**
 * Optimized: apply a two-qubit gate to a statevector.
 * O(2^n) instead of O(2^2n).
 */
export function applyTwoQubitGate(
  state: Complex[],
  gate: Matrix,
  target0: number,
  target1: number,
  numQubits: number
): Complex[] {
  const dim = state.length;
  const result = new Array<Complex>(dim).fill(Complex.ZERO);
  const step0 = 1 << (numQubits - 1 - target0);
  const step1 = 1 << (numQubits - 1 - target1);

  for (let i = 0; i < dim; i++) {
    // Extract the two target bits
    const bit0 = (i & step0) ? 1 : 0;
    const bit1 = (i & step1) ? 1 : 0;
    const gateRow = (bit0 << 1) | bit1;

    // Sum over the 4 gate columns
    for (let col = 0; col < 4; col++) {
      const col0 = (col >> 1) & 1;
      const col1 = col & 1;
      // Compute the index j with target bits set to col0, col1
      let j = i;
      j = col0 ? (j | step0) : (j & ~step0);
      j = col1 ? (j | step1) : (j & ~step1);
      result[i] = result[i].add(gate[gateRow][col].mul(state[j]));
    }
  }

  return result;
}

/**
 * Compute the partial trace over specified qubits to get a reduced density matrix.
 * Returns the density matrix for the remaining qubits.
 */
export function partialTrace(
  state: Complex[],
  traceOutQubits: number[],
  numQubits: number
): Matrix {
  const keepQubits = [];
  for (let q = 0; q < numQubits; q++) {
    if (!traceOutQubits.includes(q)) keepQubits.push(q);
  }
  const keepDim = 1 << keepQubits.length;
  const traceDim = 1 << traceOutQubits.length;
  const rho: Matrix = [];

  for (let i = 0; i < keepDim; i++) {
    rho[i] = new Array(keepDim).fill(Complex.ZERO);
  }

  for (let ki = 0; ki < keepDim; ki++) {
    for (let kj = 0; kj < keepDim; kj++) {
      let sum = Complex.ZERO;
      for (let t = 0; t < traceDim; t++) {
        // Reconstruct full indices from keep bits and trace bits
        let fullI = 0, fullJ = 0;
        for (let b = 0; b < keepQubits.length; b++) {
          const q = keepQubits[b];
          if ((ki >> (keepQubits.length - 1 - b)) & 1) fullI |= (1 << (numQubits - 1 - q));
          if ((kj >> (keepQubits.length - 1 - b)) & 1) fullJ |= (1 << (numQubits - 1 - q));
        }
        for (let b = 0; b < traceOutQubits.length; b++) {
          const q = traceOutQubits[b];
          if ((t >> (traceOutQubits.length - 1 - b)) & 1) {
            fullI |= (1 << (numQubits - 1 - q));
            fullJ |= (1 << (numQubits - 1 - q));
          }
        }
        sum = sum.add(state[fullI].mul(state[fullJ].conjugate()));
      }
      rho[ki][kj] = sum;
    }
  }

  return rho;
}
