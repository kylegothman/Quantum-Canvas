import { describe, it, expect } from 'vitest';
import { H, X, Y, Z, S, T, Rx, Ry, Rz, CNOT, CZ, SWAP, TOFFOLI } from './gates';
import { matmul, adjoint } from './matrix';
import type { Matrix } from './matrix';

/** Check that a matrix is unitary: U†U = I */
function expectUnitary(U: Matrix, dim: number) {
  const UdagU = matmul(adjoint(U), U);
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      const expected = i === j ? 1 : 0;
      expect(UdagU[i][j].re).toBeCloseTo(expected, 8);
      expect(UdagU[i][j].im).toBeCloseTo(0, 8);
    }
  }
}

describe('Gates', () => {
  describe('unitarity', () => {
    it('H is unitary', () => expectUnitary(H.matrix(), 2));
    it('X is unitary', () => expectUnitary(X.matrix(), 2));
    it('Y is unitary', () => expectUnitary(Y.matrix(), 2));
    it('Z is unitary', () => expectUnitary(Z.matrix(), 2));
    it('S is unitary', () => expectUnitary(S.matrix(), 2));
    it('T is unitary', () => expectUnitary(T.matrix(), 2));
    it('CNOT is unitary', () => expectUnitary(CNOT.matrix(), 4));
    it('CZ is unitary', () => expectUnitary(CZ.matrix(), 4));
    it('SWAP is unitary', () => expectUnitary(SWAP.matrix(), 4));
    it('Toffoli is unitary', () => expectUnitary(TOFFOLI.matrix(), 8));
  });

  describe('involutions', () => {
    it('X² = I', () => {
      const R = matmul(X.matrix(), X.matrix());
      expect(R[0][0].re).toBeCloseTo(1);
      expect(R[1][1].re).toBeCloseTo(1);
    });

    it('H² = I', () => {
      const R = matmul(H.matrix(), H.matrix());
      expect(R[0][0].re).toBeCloseTo(1);
      expect(R[0][1].re).toBeCloseTo(0);
    });

    it('Z² = I', () => {
      const R = matmul(Z.matrix(), Z.matrix());
      expect(R[0][0].re).toBeCloseTo(1);
      expect(R[1][1].re).toBeCloseTo(1);
    });

    it('S² = Z', () => {
      const SS = matmul(S.matrix(), S.matrix());
      const Zm = Z.matrix();
      for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++)
          expect(SS[i][j].re).toBeCloseTo(Zm[i][j].re, 8);
    });
  });

  describe('parametric gates', () => {
    it('Rx(π) = -iX', () => {
      const R = Rx.matrix([Math.PI]);
      // Rx(π) = [[0, -i], [-i, 0]]
      expect(R[0][0].abs()).toBeCloseTo(0, 6);
      expect(R[0][1].im).toBeCloseTo(-1, 6);
      expect(R[1][0].im).toBeCloseTo(-1, 6);
      expect(R[1][1].abs()).toBeCloseTo(0, 6);
    });

    it('Ry(π) = -iY (up to global phase)', () => {
      const R = Ry.matrix([Math.PI]);
      // Ry(π) = [[0, -1], [1, 0]]
      expect(R[0][0].abs()).toBeCloseTo(0, 6);
      expect(R[0][1].re).toBeCloseTo(-1, 6);
      expect(R[1][0].re).toBeCloseTo(1, 6);
      expect(R[1][1].abs()).toBeCloseTo(0, 6);
    });

    it('Rz(0) = I', () => {
      const R = Rz.matrix([0]);
      expect(R[0][0].abs()).toBeCloseTo(1);
      expect(R[1][1].abs()).toBeCloseTo(1);
      expect(R[0][1].abs()).toBeCloseTo(0);
    });

    it('Rx(θ) is unitary for arbitrary θ', () => {
      expectUnitary(Rx.matrix([1.234]), 2);
      expectUnitary(Rx.matrix([-0.5]), 2);
      expectUnitary(Rx.matrix([Math.PI / 3]), 2);
    });

    it('Ry(θ) is unitary for arbitrary θ', () => {
      expectUnitary(Ry.matrix([2.718]), 2);
    });

    it('Rz(θ) is unitary for arbitrary θ', () => {
      expectUnitary(Rz.matrix([0.777]), 2);
    });
  });

  describe('multi-qubit properties', () => {
    it('SWAP is symmetric', () => {
      const M = SWAP.matrix();
      for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
          expect(M[i][j].re).toBeCloseTo(M[j][i].re);
    });

    it('SWAP² = I', () => {
      const R = matmul(SWAP.matrix(), SWAP.matrix());
      for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
          expect(R[i][j].re).toBeCloseTo(i === j ? 1 : 0, 8);
    });

    it('CNOT² = I', () => {
      const R = matmul(CNOT.matrix(), CNOT.matrix());
      for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
          expect(R[i][j].re).toBeCloseTo(i === j ? 1 : 0, 8);
    });
  });
});
