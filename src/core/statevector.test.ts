import { describe, it, expect } from 'vitest';
import { Statevector } from './statevector';
import { Complex, c } from './complex';
import { H, X, Y, Z, CNOT } from './gates';

const SQRT2_INV = 1 / Math.sqrt(2);

describe('Statevector', () => {
  describe('initialization', () => {
    it('defaults to |0⟩ for 1 qubit', () => {
      const sv = new Statevector(1);
      expect(sv.amplitudes[0].re).toBeCloseTo(1);
      expect(sv.amplitudes[1].re).toBeCloseTo(0);
    });

    it('defaults to |00⟩ for 2 qubits', () => {
      const sv = new Statevector(2);
      expect(sv.dim).toBe(4);
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(1);
      for (let i = 1; i < 4; i++) {
        expect(sv.amplitudes[i].abs2()).toBeCloseTo(0);
      }
    });

    it('accepts custom amplitudes', () => {
      const sv = new Statevector(1, [c(SQRT2_INV), c(SQRT2_INV)]);
      expect(sv.amplitudes[0].re).toBeCloseTo(SQRT2_INV);
      expect(sv.amplitudes[1].re).toBeCloseTo(SQRT2_INV);
    });

    it('throws on wrong dimension', () => {
      expect(() => new Statevector(2, [Complex.ONE])).toThrow();
    });

    it('clone creates independent copy', () => {
      const sv = new Statevector(1);
      const cl = sv.clone();
      expect(cl.amplitudes[0].re).toBe(sv.amplitudes[0].re);
      expect(cl).not.toBe(sv);
    });
  });

  describe('gate application', () => {
    it('X|0⟩ = |1⟩', () => {
      const sv = new Statevector(1).applyGate(X, [0]);
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(0);
      expect(sv.amplitudes[1].abs2()).toBeCloseTo(1);
    });

    it('X|1⟩ = |0⟩', () => {
      const sv = new Statevector(1, [Complex.ZERO, Complex.ONE]).applyGate(X, [0]);
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(1);
      expect(sv.amplitudes[1].abs2()).toBeCloseTo(0);
    });

    it('H|0⟩ = |+⟩', () => {
      const sv = new Statevector(1).applyGate(H, [0]);
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(0.5);
      expect(sv.amplitudes[1].abs2()).toBeCloseTo(0.5);
    });

    it('HH|0⟩ = |0⟩', () => {
      const sv = new Statevector(1).applyGate(H, [0]).applyGate(H, [0]);
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(1);
      expect(sv.amplitudes[1].abs2()).toBeCloseTo(0);
    });

    it('Z|0⟩ = |0⟩', () => {
      const sv = new Statevector(1).applyGate(Z, [0]);
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(1);
    });

    it('Z|1⟩ = -|1⟩', () => {
      const sv = new Statevector(1, [Complex.ZERO, Complex.ONE]).applyGate(Z, [0]);
      expect(sv.amplitudes[1].re).toBeCloseTo(-1);
    });

    it('CNOT creates Bell state from H|0⟩⊗|0⟩', () => {
      const sv = new Statevector(2)
        .applyGate(H, [0])
        .applyGate(CNOT, [0, 1]);
      // Should be (|00⟩ + |11⟩)/√2
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(0.5); // |00⟩
      expect(sv.amplitudes[1].abs2()).toBeCloseTo(0);    // |01⟩
      expect(sv.amplitudes[2].abs2()).toBeCloseTo(0);    // |10⟩
      expect(sv.amplitudes[3].abs2()).toBeCloseTo(0.5); // |11⟩
    });

    it('gate on qubit 1 of 2-qubit system', () => {
      const sv = new Statevector(2).applyGate(X, [1]);
      // |00⟩ → |01⟩
      expect(sv.amplitudes[0].abs2()).toBeCloseTo(0);
      expect(sv.amplitudes[1].abs2()).toBeCloseTo(1);
    });
  });

  describe('probabilities and phases', () => {
    it('|0⟩ has probability [1, 0]', () => {
      const probs = new Statevector(1).probabilities();
      expect(probs[0]).toBeCloseTo(1);
      expect(probs[1]).toBeCloseTo(0);
    });

    it('|+⟩ has probability [0.5, 0.5]', () => {
      const probs = new Statevector(1).applyGate(H, [0]).probabilities();
      expect(probs[0]).toBeCloseTo(0.5);
      expect(probs[1]).toBeCloseTo(0.5);
    });

    it('probabilities sum to 1', () => {
      const sv = new Statevector(3).applyGate(H, [0]).applyGate(H, [1]).applyGate(X, [2]);
      const sum = sv.probabilities().reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(1);
    });
  });

  describe('measurement', () => {
    it('measuring |0⟩ always gives 0', () => {
      for (let i = 0; i < 10; i++) {
        const { bit } = new Statevector(1).measure(0);
        expect(bit).toBe(0);
      }
    });

    it('measuring |1⟩ always gives 1', () => {
      const sv = new Statevector(1, [Complex.ZERO, Complex.ONE]);
      for (let i = 0; i < 10; i++) {
        const { bit } = sv.measure(0);
        expect(bit).toBe(1);
      }
    });

    it('post-measurement state is normalized', () => {
      const sv = new Statevector(1).applyGate(H, [0]);
      const { state } = sv.measure(0);
      const sum = state.probabilities().reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(1);
    });

    it('measuring qubit 0 of Bell state collapses qubit 1', () => {
      const sv = new Statevector(2).applyGate(H, [0]).applyGate(CNOT, [0, 1]);
      const { bit, state } = sv.measure(0);
      // If bit=0, state should be |00⟩. If bit=1, state should be |11⟩
      if (bit === 0) {
        expect(state.amplitudes[0].abs2()).toBeCloseTo(1);
      } else {
        expect(state.amplitudes[3].abs2()).toBeCloseTo(1);
      }
    });
  });

  describe('interpolation', () => {
    it('interpolate(a, b, 0) ≈ a', () => {
      const a = new Statevector(1); // |0⟩
      const b = new Statevector(1, [Complex.ZERO, Complex.ONE]); // |1⟩
      const r = Statevector.interpolate(a, b, 0);
      expect(r.amplitudes[0].abs2()).toBeCloseTo(1);
    });

    it('interpolate(a, b, 1) ≈ b', () => {
      const a = new Statevector(1);
      const b = new Statevector(1, [Complex.ZERO, Complex.ONE]);
      const r = Statevector.interpolate(a, b, 1);
      expect(r.amplitudes[1].abs2()).toBeCloseTo(1);
    });

    it('interpolate(a, b, 0.5) is normalized', () => {
      const a = new Statevector(1);
      const b = new Statevector(1, [Complex.ZERO, Complex.ONE]);
      const r = Statevector.interpolate(a, b, 0.5);
      const sum = r.probabilities().reduce((s, p) => s + p, 0);
      expect(sum).toBeCloseTo(1);
    });

    it('interpolation is smooth (probabilities change monotonically)', () => {
      const a = new Statevector(1);
      const b = new Statevector(1, [Complex.ZERO, Complex.ONE]);
      let prevProb0 = 1;
      for (let t = 0; t <= 1; t += 0.1) {
        const r = Statevector.interpolate(a, b, t);
        const p0 = r.amplitudes[0].abs2();
        expect(p0).toBeLessThanOrEqual(prevProb0 + 0.01);
        prevProb0 = p0;
      }
    });
  });

  describe('normalize', () => {
    it('normalizes unnormalized state', () => {
      const sv = new Statevector(1, [c(3), c(4)]).normalize();
      const sum = sv.probabilities().reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(1);
    });
  });

  describe('basisLabel', () => {
    it('formats labels correctly', () => {
      expect(Statevector.basisLabel(0, 2)).toBe('|00⟩');
      expect(Statevector.basisLabel(3, 2)).toBe('|11⟩');
      expect(Statevector.basisLabel(5, 3)).toBe('|101⟩');
    });
  });
});
