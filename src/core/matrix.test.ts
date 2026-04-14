import { describe, it, expect } from 'vitest';
import { Complex, c } from './complex';
import {
  identity, matmul, matvec, tensor, adjoint, trace,
  applySingleQubitGate, applyTwoQubitGate, partialTrace,
} from './matrix';

const SQRT2_INV = 1 / Math.sqrt(2);
const H_MATRIX = [
  [c(SQRT2_INV), c(SQRT2_INV)],
  [c(SQRT2_INV), c(-SQRT2_INV)],
];
const X_MATRIX = [
  [Complex.ZERO, Complex.ONE],
  [Complex.ONE, Complex.ZERO],
];

describe('Matrix', () => {
  describe('identity', () => {
    it('creates 2x2 identity', () => {
      const I = identity(2);
      expect(I[0][0].re).toBe(1);
      expect(I[0][1].re).toBe(0);
      expect(I[1][0].re).toBe(0);
      expect(I[1][1].re).toBe(1);
    });

    it('creates 4x4 identity', () => {
      const I = identity(4);
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          expect(I[i][j].re).toBe(i === j ? 1 : 0);
        }
      }
    });
  });

  describe('matmul', () => {
    it('I * A = A', () => {
      const I = identity(2);
      const R = matmul(I, H_MATRIX);
      expect(R[0][0].re).toBeCloseTo(SQRT2_INV);
      expect(R[0][1].re).toBeCloseTo(SQRT2_INV);
    });

    it('X * X = I', () => {
      const R = matmul(X_MATRIX, X_MATRIX);
      expect(R[0][0].re).toBeCloseTo(1);
      expect(R[0][1].re).toBeCloseTo(0);
      expect(R[1][0].re).toBeCloseTo(0);
      expect(R[1][1].re).toBeCloseTo(1);
    });

    it('H * H = I', () => {
      const R = matmul(H_MATRIX, H_MATRIX);
      expect(R[0][0].re).toBeCloseTo(1);
      expect(R[0][1].re).toBeCloseTo(0);
      expect(R[1][0].re).toBeCloseTo(0);
      expect(R[1][1].re).toBeCloseTo(1);
    });
  });

  describe('matvec', () => {
    it('I * |0⟩ = |0⟩', () => {
      const r = matvec(identity(2), [Complex.ONE, Complex.ZERO]);
      expect(r[0].re).toBeCloseTo(1);
      expect(r[1].re).toBeCloseTo(0);
    });

    it('X * |0⟩ = |1⟩', () => {
      const r = matvec(X_MATRIX, [Complex.ONE, Complex.ZERO]);
      expect(r[0].re).toBeCloseTo(0);
      expect(r[1].re).toBeCloseTo(1);
    });

    it('H * |0⟩ = |+⟩', () => {
      const r = matvec(H_MATRIX, [Complex.ONE, Complex.ZERO]);
      expect(r[0].re).toBeCloseTo(SQRT2_INV);
      expect(r[1].re).toBeCloseTo(SQRT2_INV);
    });
  });

  describe('tensor', () => {
    it('I ⊗ I = 4x4 identity', () => {
      const I = identity(2);
      const R = tensor(I, I);
      expect(R.length).toBe(4);
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          expect(R[i][j].re).toBeCloseTo(i === j ? 1 : 0);
        }
      }
    });

    it('X ⊗ I has correct structure', () => {
      const R = tensor(X_MATRIX, identity(2));
      // X ⊗ I swaps blocks: |00⟩↔|10⟩, |01⟩↔|11⟩
      expect(R[0][2].re).toBeCloseTo(1); // |00⟩ → |10⟩
      expect(R[2][0].re).toBeCloseTo(1); // |10⟩ → |00⟩
    });
  });

  describe('adjoint', () => {
    it('adjoint of real symmetric is itself', () => {
      const A = adjoint(H_MATRIX);
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          expect(A[i][j].re).toBeCloseTo(H_MATRIX[i][j].re);
        }
      }
    });

    it('adjoint conjugates imaginary parts', () => {
      const M = [[c(1, 2), c(3, 4)], [c(5, 6), c(7, 8)]];
      const A = adjoint(M);
      expect(A[0][0].im).toBeCloseTo(-2);
      expect(A[0][1].im).toBeCloseTo(-6); // transposed from [1][0]
      expect(A[1][0].im).toBeCloseTo(-4); // transposed from [0][1]
    });
  });

  describe('trace', () => {
    it('Tr(I) = 2', () => {
      expect(trace(identity(2)).re).toBeCloseTo(2);
    });

    it('Tr(I₄) = 4', () => {
      expect(trace(identity(4)).re).toBeCloseTo(4);
    });
  });

  describe('applySingleQubitGate', () => {
    it('X on qubit 0 of |00⟩ gives |10⟩', () => {
      const state = [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO];
      const result = applySingleQubitGate(state, X_MATRIX, 0, 2);
      expect(result[0].abs2()).toBeCloseTo(0);
      expect(result[2].abs2()).toBeCloseTo(1); // |10⟩
    });

    it('X on qubit 1 of |00⟩ gives |01⟩', () => {
      const state = [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO];
      const result = applySingleQubitGate(state, X_MATRIX, 1, 2);
      expect(result[0].abs2()).toBeCloseTo(0);
      expect(result[1].abs2()).toBeCloseTo(1); // |01⟩
    });

    it('H on |0⟩ gives equal superposition', () => {
      const state = [Complex.ONE, Complex.ZERO];
      const result = applySingleQubitGate(state, H_MATRIX, 0, 1);
      expect(result[0].abs2()).toBeCloseTo(0.5);
      expect(result[1].abs2()).toBeCloseTo(0.5);
    });
  });

  describe('applyTwoQubitGate', () => {
    const CNOT = [
      [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO],
      [Complex.ZERO, Complex.ONE, Complex.ZERO, Complex.ZERO],
      [Complex.ZERO, Complex.ZERO, Complex.ZERO, Complex.ONE],
      [Complex.ZERO, Complex.ZERO, Complex.ONE, Complex.ZERO],
    ];

    it('CNOT on |10⟩ gives |11⟩', () => {
      const state = [Complex.ZERO, Complex.ZERO, Complex.ONE, Complex.ZERO];
      const result = applyTwoQubitGate(state, CNOT, 0, 1, 2);
      expect(result[3].abs2()).toBeCloseTo(1); // |11⟩
    });

    it('CNOT on |00⟩ gives |00⟩', () => {
      const state = [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO];
      const result = applyTwoQubitGate(state, CNOT, 0, 1, 2);
      expect(result[0].abs2()).toBeCloseTo(1);
    });
  });

  describe('partialTrace', () => {
    it('tracing out one qubit of |00⟩ gives pure |0⟩', () => {
      const state = [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO];
      const rho = partialTrace(state, [1], 2);
      expect(rho[0][0].re).toBeCloseTo(1);
      expect(rho[1][1].re).toBeCloseTo(0);
    });

    it('tracing out one qubit of Bell state gives maximally mixed state', () => {
      // |Φ+⟩ = (|00⟩ + |11⟩)/√2
      const state = [c(SQRT2_INV), Complex.ZERO, Complex.ZERO, c(SQRT2_INV)];
      const rho = partialTrace(state, [1], 2);
      expect(rho[0][0].re).toBeCloseTo(0.5);
      expect(rho[1][1].re).toBeCloseTo(0.5);
      expect(rho[0][1].abs()).toBeCloseTo(0);
    });
  });
});
