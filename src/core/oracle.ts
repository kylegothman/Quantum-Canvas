import { Complex } from './complex';
import type { Matrix } from './matrix';
import type { GateDefinition } from './gates';

/**
 * Oracle gate builder.
 *
 * An oracle U_f implements the standard quantum oracle transformation:
 *   U_f |x⟩|y⟩ = |x⟩|y ⊕ f(x)⟩
 *
 * where:
 *   x is an n-bit input register
 *   y is an m-bit output register
 *   f: {0,1}^n → {0,1}^m is a classical function
 *   ⊕ is bitwise XOR
 *
 * The resulting unitary is a (n+m)-qubit permutation matrix.
 * This is the standard construction used in Deutsch-Jozsa, Simon's,
 * Bernstein-Vazirani, Grover, and other oracle-based algorithms.
 */

export interface OracleConfig {
  name: string;
  description: string;
  inputBits: number;   // n
  outputBits: number;  // m
  functionTable: number[]; // f(x) for x = 0, 1, ..., 2^n - 1
}

/**
 * Build the unitary matrix for U_f from a function table.
 *
 * For n input bits and m output bits, this is a 2^(n+m) × 2^(n+m) matrix.
 * It's a permutation matrix: U_f|x⟩|y⟩ = |x⟩|y ⊕ f(x)⟩
 */
function buildOracleMatrix(config: OracleConfig): Matrix {
  const { inputBits, outputBits, functionTable } = config;
  const totalQubits = inputBits + outputBits;
  const dim = 1 << totalQubits;

  // Initialize to zero matrix
  const M: Matrix = [];
  for (let i = 0; i < dim; i++) {
    M[i] = new Array(dim).fill(Complex.ZERO);
  }

  // For each basis state |x⟩|y⟩:
  //   col = (x << outputBits) | y
  //   row = (x << outputBits) | (y ^ f(x))
  for (let x = 0; x < (1 << inputBits); x++) {
    const fx = functionTable[x] & ((1 << outputBits) - 1); // Mask to output bits
    for (let y = 0; y < (1 << outputBits); y++) {
      const col = (x << outputBits) | y;
      const row = (x << outputBits) | (y ^ fx);
      M[row][col] = Complex.ONE;
    }
  }

  return M;
}

/**
 * Create a GateDefinition from an oracle configuration.
 */
export function createOracleGate(config: OracleConfig): GateDefinition {
  const totalQubits = config.inputBits + config.outputBits;
  const matrix = buildOracleMatrix(config);

  return {
    name: config.name,
    symbol: 'Uf',
    numQubits: totalQubits,
    parametric: false,
    color: '#b088f9',
    description: config.description,
    matrix: () => matrix,
  };
}

// ─── Preset oracle builders ────────────────────────────────────────

/**
 * Bernstein-Vazirani oracle: f(x) = s·x (bitwise dot product mod 2)
 * Used in the Bernstein-Vazirani algorithm to find secret string s.
 */
export function bernsteinVaziraniOracle(secretString: number, numBits: number): OracleConfig {
  const table: number[] = [];
  for (let x = 0; x < (1 << numBits); x++) {
    // f(x) = popcount(x & s) mod 2
    let dot = 0;
    let bits = x & secretString;
    while (bits) { dot ^= bits & 1; bits >>= 1; }
    table.push(dot);
  }

  const sStr = secretString.toString(2).padStart(numBits, '0');
  return {
    name: `BV(${sStr})`,
    description: `Bernstein-Vazirani oracle: f(x) = ${sStr}·x mod 2`,
    inputBits: numBits,
    outputBits: 1,
    functionTable: table,
  };
}

/**
 * Simon's oracle: f(x) = f(x ⊕ s) for secret period s.
 * Maps n-bit inputs to n-bit outputs with a 2-to-1 structure.
 *
 * Construction: assign random unique output to each pair {x, x⊕s}.
 */
export function simonsOracle(secretPeriod: number, numBits: number): OracleConfig {
  const dim = 1 << numBits;
  const table: number[] = new Array(dim).fill(-1);
  let nextOutput = 0;

  for (let x = 0; x < dim; x++) {
    if (table[x] !== -1) continue;
    const partner = x ^ secretPeriod;

    if (secretPeriod === 0) {
      // 1-to-1 function
      table[x] = nextOutput++;
    } else {
      // 2-to-1: f(x) = f(x ⊕ s)
      table[x] = nextOutput;
      if (partner !== x && partner < dim) {
        table[partner] = nextOutput;
      }
      nextOutput++;
    }
  }

  const sStr = secretPeriod.toString(2).padStart(numBits, '0');
  return {
    name: `Simon(${sStr})`,
    description: `Simon's oracle: f(x) = f(x ⊕ ${sStr}), period s = ${sStr}`,
    inputBits: numBits,
    outputBits: numBits,
    functionTable: table,
  };
}

/**
 * Grover oracle: marks a specific target state with a phase flip.
 * Implemented as U_f|x⟩|y⟩ = |x⟩|y ⊕ f(x)⟩ where f(x) = 1 if x = target, 0 otherwise.
 * When y = |−⟩, this produces a phase kickback on |target⟩.
 */
export function groverOracle(target: number, numBits: number): OracleConfig {
  const table: number[] = [];
  for (let x = 0; x < (1 << numBits); x++) {
    table.push(x === target ? 1 : 0);
  }

  const tStr = target.toString(2).padStart(numBits, '0');
  return {
    name: `Grover(${tStr})`,
    description: `Grover oracle: f(x) = 1 if x = ${tStr}`,
    inputBits: numBits,
    outputBits: 1,
    functionTable: table,
  };
}

/**
 * Deutsch-Jozsa oracle: either constant (all 0 or all 1) or balanced.
 */
export function deutschJozsaOracle(type: 'constant-0' | 'constant-1' | 'balanced', numBits: number): OracleConfig {
  const table: number[] = [];
  const dim = 1 << numBits;

  if (type === 'constant-0') {
    for (let x = 0; x < dim; x++) table.push(0);
  } else if (type === 'constant-1') {
    for (let x = 0; x < dim; x++) table.push(1);
  } else {
    // Balanced: first half outputs 0, second half outputs 1
    for (let x = 0; x < dim; x++) table.push(x < dim / 2 ? 0 : 1);
  }

  return {
    name: `DJ(${type})`,
    description: `Deutsch-Jozsa ${type} oracle on ${numBits} bits`,
    inputBits: numBits,
    outputBits: 1,
    functionTable: table,
  };
}

/**
 * Custom oracle from a user-provided truth table.
 */
export function customOracle(
  name: string,
  inputBits: number,
  outputBits: number,
  functionTable: number[]
): OracleConfig {
  return {
    name,
    description: `Custom oracle: ${inputBits}→${outputBits} bits`,
    inputBits,
    outputBits,
    functionTable,
  };
}
