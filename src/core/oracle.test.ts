import { describe, it, expect } from 'vitest';
import { Complex } from './complex';
import { matmul, adjoint } from './matrix';
import {
  createOracleGate,
  bernsteinVaziraniOracle,
  simonsOracle,
  groverOracle,
  deutschJozsaOracle,
  customOracle,
  type OracleConfig,
} from './oracle';

/** Check that a matrix is unitary: U†U = I */
function expectUnitary(config: OracleConfig) {
  const gate = createOracleGate(config);
  const M = gate.matrix();
  const dim = M.length;
  const UdagU = matmul(adjoint(M), M);
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      const expected = i === j ? 1 : 0;
      expect(UdagU[i][j].re).toBeCloseTo(expected, 6);
      expect(UdagU[i][j].im).toBeCloseTo(0, 6);
    }
  }
}

/** Verify U_f|x⟩|y⟩ = |x⟩|y ⊕ f(x)⟩ for all basis states */
function expectCorrectOracle(config: OracleConfig) {
  const gate = createOracleGate(config);
  const M = gate.matrix();
  const { inputBits, outputBits, functionTable } = config;
  const totalQubits = inputBits + outputBits;
  const dim = 1 << totalQubits;

  for (let x = 0; x < (1 << inputBits); x++) {
    const fx = functionTable[x] & ((1 << outputBits) - 1);
    for (let y = 0; y < (1 << outputBits); y++) {
      // Input basis state |x⟩|y⟩
      const inIdx = (x << outputBits) | y;
      // Expected output |x⟩|y ⊕ f(x)⟩
      const outIdx = (x << outputBits) | (y ^ fx);

      // Column inIdx should have a 1 at row outIdx
      for (let row = 0; row < dim; row++) {
        const expected = row === outIdx ? 1 : 0;
        expect(M[row][inIdx].re).toBeCloseTo(expected, 8);
        expect(M[row][inIdx].im).toBeCloseTo(0, 8);
      }
    }
  }
}

describe('Oracle', () => {
  describe('Bernstein-Vazirani oracle', () => {
    it('is unitary for s=11 (2 bits)', () => {
      expectUnitary(bernsteinVaziraniOracle(0b11, 2));
    });

    it('is unitary for s=101 (3 bits)', () => {
      expectUnitary(bernsteinVaziraniOracle(0b101, 3));
    });

    it('implements correct U_f for s=11', () => {
      const config = bernsteinVaziraniOracle(0b11, 2);
      expectCorrectOracle(config);
      // f(00)=0, f(01)=1, f(10)=1, f(11)=0
      expect(config.functionTable[0b00]).toBe(0);
      expect(config.functionTable[0b01]).toBe(1);
      expect(config.functionTable[0b10]).toBe(1);
      expect(config.functionTable[0b11]).toBe(0);
    });

    it('f(x) = s·x mod 2 for s=10', () => {
      const config = bernsteinVaziraniOracle(0b10, 2);
      // s=10: f(00)=0, f(01)=0, f(10)=1, f(11)=1
      expect(config.functionTable[0b00]).toBe(0);
      expect(config.functionTable[0b01]).toBe(0);
      expect(config.functionTable[0b10]).toBe(1);
      expect(config.functionTable[0b11]).toBe(1);
    });

    it('creates correct gate definition', () => {
      const gate = createOracleGate(bernsteinVaziraniOracle(0b11, 2));
      expect(gate.numQubits).toBe(3); // 2 input + 1 output
      expect(gate.symbol).toBe('Uf');
    });
  });

  describe("Simon's oracle", () => {
    it('is unitary for s=11 (2 bits)', () => {
      expectUnitary(simonsOracle(0b11, 2));
    });

    it('is unitary for s=10 (2 bits)', () => {
      expectUnitary(simonsOracle(0b10, 2));
    });

    it('is 2-to-1: f(x) = f(x ⊕ s)', () => {
      const s = 0b11;
      const config = simonsOracle(s, 2);
      for (let x = 0; x < 4; x++) {
        const partner = x ^ s;
        expect(config.functionTable[x]).toBe(config.functionTable[partner]);
      }
    });

    it('is 1-to-1 when s=0', () => {
      const config = simonsOracle(0, 2);
      const outputs = new Set(config.functionTable);
      expect(outputs.size).toBe(4); // All distinct
    });

    it('implements correct U_f', () => {
      expectCorrectOracle(simonsOracle(0b11, 2));
    });

    it('creates gate with correct qubit count', () => {
      const gate = createOracleGate(simonsOracle(0b101, 3));
      expect(gate.numQubits).toBe(6); // 3 input + 3 output
    });
  });

  describe('Grover oracle', () => {
    it('is unitary for target=11 (2 bits)', () => {
      expectUnitary(groverOracle(0b11, 2));
    });

    it('marks only the target state', () => {
      const target = 0b10;
      const config = groverOracle(target, 2);
      for (let x = 0; x < 4; x++) {
        expect(config.functionTable[x]).toBe(x === target ? 1 : 0);
      }
    });

    it('implements correct U_f', () => {
      expectCorrectOracle(groverOracle(0b11, 2));
    });

    it('creates gate with correct qubit count', () => {
      const gate = createOracleGate(groverOracle(0b11, 2));
      expect(gate.numQubits).toBe(3); // 2 input + 1 output
    });
  });

  describe('Deutsch-Jozsa oracle', () => {
    it('constant-0 is unitary', () => {
      expectUnitary(deutschJozsaOracle('constant-0', 2));
    });

    it('constant-1 is unitary', () => {
      expectUnitary(deutschJozsaOracle('constant-1', 2));
    });

    it('balanced is unitary', () => {
      expectUnitary(deutschJozsaOracle('balanced', 2));
    });

    it('constant-0: all outputs are 0', () => {
      const config = deutschJozsaOracle('constant-0', 2);
      expect(config.functionTable.every(v => v === 0)).toBe(true);
    });

    it('constant-1: all outputs are 1', () => {
      const config = deutschJozsaOracle('constant-1', 2);
      expect(config.functionTable.every(v => v === 1)).toBe(true);
    });

    it('balanced: exactly half 0s and half 1s', () => {
      const config = deutschJozsaOracle('balanced', 3);
      const zeros = config.functionTable.filter(v => v === 0).length;
      const ones = config.functionTable.filter(v => v === 1).length;
      expect(zeros).toBe(ones);
    });

    it('implements correct U_f', () => {
      expectCorrectOracle(deutschJozsaOracle('balanced', 2));
    });
  });

  describe('Custom oracle', () => {
    it('is unitary for a valid function table', () => {
      expectUnitary(customOracle('Test', 2, 1, [0, 1, 1, 0]));
    });

    it('implements correct U_f for identity-like function', () => {
      // f(x) = x for 2-bit input, 2-bit output
      expectCorrectOracle(customOracle('Id', 2, 2, [0, 1, 2, 3]));
    });

    it('implements correct U_f for constant function', () => {
      expectCorrectOracle(customOracle('Const', 2, 1, [1, 1, 1, 1]));
    });
  });

  describe('Gate creation', () => {
    it('all oracle gates have symbol "Uf"', () => {
      const configs = [
        bernsteinVaziraniOracle(0b11, 2),
        simonsOracle(0b10, 2),
        groverOracle(0b11, 2),
        deutschJozsaOracle('balanced', 2),
      ];
      for (const config of configs) {
        const gate = createOracleGate(config);
        expect(gate.symbol).toBe('Uf');
        expect(gate.parametric).toBe(false);
      }
    });

    it('oracle matrix is a permutation matrix (all entries 0 or 1)', () => {
      const gate = createOracleGate(simonsOracle(0b11, 2));
      const M = gate.matrix();
      for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
          const val = M[i][j].re;
          expect(val === 0 || val === 1).toBe(true);
          expect(M[i][j].im).toBeCloseTo(0);
        }
      }
    });

    it('each column of oracle matrix has exactly one 1', () => {
      const gate = createOracleGate(groverOracle(0b10, 2));
      const M = gate.matrix();
      for (let col = 0; col < M[0].length; col++) {
        let count = 0;
        for (let row = 0; row < M.length; row++) {
          if (M[row][col].re > 0.5) count++;
        }
        expect(count).toBe(1);
      }
    });
  });
});
