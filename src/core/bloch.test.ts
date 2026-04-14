import { describe, it, expect } from 'vitest';
import { computeBlochVectors } from './bloch';
import { Complex, c } from './complex';

const SQRT2_INV = 1 / Math.sqrt(2);

describe('Bloch vectors', () => {
  describe('single qubit', () => {
    it('|0⟩ → north pole (0, 0, 1)', () => {
      const [v] = computeBlochVectors([Complex.ONE, Complex.ZERO], 1);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(0);
      expect(v.z).toBeCloseTo(1);
      expect(v.purity).toBeCloseTo(1);
    });

    it('|1⟩ → south pole (0, 0, -1)', () => {
      const [v] = computeBlochVectors([Complex.ZERO, Complex.ONE], 1);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(0);
      expect(v.z).toBeCloseTo(-1);
      expect(v.purity).toBeCloseTo(1);
    });

    it('|+⟩ → (1, 0, 0)', () => {
      const [v] = computeBlochVectors([c(SQRT2_INV), c(SQRT2_INV)], 1);
      expect(v.x).toBeCloseTo(1);
      expect(v.y).toBeCloseTo(0);
      expect(v.z).toBeCloseTo(0);
    });

    it('|−⟩ → (-1, 0, 0)', () => {
      const [v] = computeBlochVectors([c(SQRT2_INV), c(-SQRT2_INV)], 1);
      expect(v.x).toBeCloseTo(-1);
      expect(v.y).toBeCloseTo(0);
      expect(v.z).toBeCloseTo(0);
    });

    it('|+i⟩ → (0, 1, 0)', () => {
      const [v] = computeBlochVectors([c(SQRT2_INV), c(0, SQRT2_INV)], 1);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(1);
      expect(v.z).toBeCloseTo(0);
    });

    it('pure states have purity 1', () => {
      const [v] = computeBlochVectors([c(SQRT2_INV), c(SQRT2_INV)], 1);
      expect(v.purity).toBeCloseTo(1);
    });

    it('Bloch vector has unit length for pure states', () => {
      const [v] = computeBlochVectors([c(0.6), c(0.8)], 1);
      const len = Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
      expect(len).toBeCloseTo(1);
    });
  });

  describe('multi-qubit (partial trace)', () => {
    it('|00⟩: both qubits at north pole', () => {
      const amps = [Complex.ONE, Complex.ZERO, Complex.ZERO, Complex.ZERO];
      const vecs = computeBlochVectors(amps, 2);
      expect(vecs[0].z).toBeCloseTo(1);
      expect(vecs[1].z).toBeCloseTo(1);
    });

    it('|01⟩: q0 at north, q1 at south', () => {
      const amps = [Complex.ZERO, Complex.ONE, Complex.ZERO, Complex.ZERO];
      const vecs = computeBlochVectors(amps, 2);
      expect(vecs[0].z).toBeCloseTo(1);  // q0 is still |0⟩
      expect(vecs[1].z).toBeCloseTo(-1); // q1 is |1⟩
    });

    it('Bell state: both qubits are mixed (inside sphere)', () => {
      // (|00⟩ + |11⟩)/√2
      const amps = [c(SQRT2_INV), Complex.ZERO, Complex.ZERO, c(SQRT2_INV)];
      const vecs = computeBlochVectors(amps, 2);
      // Reduced density matrix is I/2 → Bloch vector is (0,0,0)
      const len0 = Math.sqrt(vecs[0].x ** 2 + vecs[0].y ** 2 + vecs[0].z ** 2);
      const len1 = Math.sqrt(vecs[1].x ** 2 + vecs[1].y ** 2 + vecs[1].z ** 2);
      expect(len0).toBeCloseTo(0, 1);
      expect(len1).toBeCloseTo(0, 1);
      // Purity ≈ 0.5 (maximally mixed single qubit)
      expect(vecs[0].purity).toBeCloseTo(0.5, 1);
    });

    it('product state |+0⟩: q0 on equator, q1 at pole', () => {
      // |+⟩⊗|0⟩ = (|00⟩ + |10⟩)/√2
      const amps = [c(SQRT2_INV), Complex.ZERO, c(SQRT2_INV), Complex.ZERO];
      const vecs = computeBlochVectors(amps, 2);
      expect(vecs[0].x).toBeCloseTo(1);  // q0 is |+⟩
      expect(vecs[0].z).toBeCloseTo(0);
      expect(vecs[1].z).toBeCloseTo(1);  // q1 is |0⟩
      expect(vecs[1].purity).toBeCloseTo(1);
    });
  });
});
