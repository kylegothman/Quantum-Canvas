import { describe, it, expect } from 'vitest';
import { simulateCircuit, getStateAtStep } from './simulator';
import type { Circuit } from './circuit';
import { nextGateId } from './circuit';
import { H, X, CNOT, MEASURE } from './gates';

function makeCircuit(numQubits: number, ...momentGates: Array<Array<{ gate: typeof H; targets: number[]; controls?: number[] }>>): Circuit {
  return {
    numQubits,
    moments: momentGates.map(gates => ({
      gates: gates.map(g => ({
        id: nextGateId(),
        gate: g.gate,
        targets: g.targets,
        controls: g.controls,
      })),
    })),
  };
}

describe('Simulator', () => {
  describe('simulateCircuit', () => {
    it('empty circuit gives |0...0⟩', () => {
      const result = simulateCircuit({ numQubits: 2, moments: [] });
      expect(result.steps.length).toBe(0);
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(1);
    });

    it('single H gate', () => {
      const circuit = makeCircuit(1, [{ gate: H, targets: [0] }]);
      const result = simulateCircuit(circuit);
      expect(result.steps.length).toBe(1);
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(0.5);
      expect(result.finalState.amplitudes[1].abs2()).toBeCloseTo(0.5);
    });

    it('X then X returns to |0⟩', () => {
      const circuit = makeCircuit(1,
        [{ gate: X, targets: [0] }],
        [{ gate: X, targets: [0] }],
      );
      const result = simulateCircuit(circuit);
      expect(result.steps.length).toBe(2);
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(1);
    });

    it('Bell state circuit', () => {
      const circuit = makeCircuit(2,
        [{ gate: H, targets: [0] }],
        [{ gate: CNOT, targets: [1], controls: [0] }],
      );
      const result = simulateCircuit(circuit);
      expect(result.steps.length).toBe(2);
      // Bell state: (|00⟩ + |11⟩)/√2
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(0.5);
      expect(result.finalState.amplitudes[3].abs2()).toBeCloseTo(0.5);
    });

    it('3-qubit GHZ state', () => {
      const circuit = makeCircuit(3,
        [{ gate: H, targets: [0] }],
        [{ gate: CNOT, targets: [1], controls: [0] }],
        [{ gate: CNOT, targets: [2], controls: [1] }],
      );
      const result = simulateCircuit(circuit);
      // GHZ: (|000⟩ + |111⟩)/√2
      expect(result.finalState.amplitudes[0].abs2()).toBeCloseTo(0.5);
      expect(result.finalState.amplitudes[7].abs2()).toBeCloseTo(0.5);
    });

    it('parallel gates in one moment', () => {
      const circuit = makeCircuit(3,
        [
          { gate: H, targets: [0] },
          { gate: H, targets: [1] },
          { gate: H, targets: [2] },
        ],
      );
      const result = simulateCircuit(circuit);
      // All 8 basis states with equal probability 1/8
      for (let i = 0; i < 8; i++) {
        expect(result.finalState.amplitudes[i].abs2()).toBeCloseTo(1 / 8);
      }
    });

    it('tracks intermediate states at each step', () => {
      const circuit = makeCircuit(1,
        [{ gate: H, targets: [0] }],
        [{ gate: X, targets: [0] }],
      );
      const result = simulateCircuit(circuit);

      // Before anything: |0⟩
      expect(result.steps[0].stateBefore.amplitudes[0].abs2()).toBeCloseTo(1);
      // After H: |+⟩
      expect(result.steps[0].stateAfter.amplitudes[0].abs2()).toBeCloseTo(0.5);
      // After X on |+⟩: still |+⟩ (X|+⟩ = |+⟩)
      expect(result.steps[1].stateAfter.amplitudes[0].abs2()).toBeCloseTo(0.5);
    });
  });

  describe('getStateAtStep', () => {
    it('returns before state at t=0', () => {
      const circuit = makeCircuit(1, [{ gate: X, targets: [0] }]);
      const result = simulateCircuit(circuit);
      const state = getStateAtStep(result, 0, 0);
      expect(state.amplitudes[0].abs2()).toBeCloseTo(1); // |0⟩ before X
    });

    it('returns after state at t=1', () => {
      const circuit = makeCircuit(1, [{ gate: X, targets: [0] }]);
      const result = simulateCircuit(circuit);
      const state = getStateAtStep(result, 0, 1);
      expect(state.amplitudes[1].abs2()).toBeCloseTo(1); // |1⟩ after X
    });

    it('returns interpolated state at t=0.5', () => {
      const circuit = makeCircuit(1, [{ gate: X, targets: [0] }]);
      const result = simulateCircuit(circuit);
      const state = getStateAtStep(result, 0, 0.5);
      // Should be between |0⟩ and |1⟩ — both have nonzero probability
      expect(state.amplitudes[0].abs2()).toBeGreaterThan(0.01);
      expect(state.amplitudes[1].abs2()).toBeGreaterThan(0.01);
      // And normalized
      const sum = state.probabilities().reduce((a, b) => a + b, 0);
      expect(sum).toBeCloseTo(1);
    });
  });

  describe('measurement in circuit', () => {
    it('measurement of |0⟩ gives classical 0', () => {
      const circuit = makeCircuit(1,
        [{ gate: MEASURE, targets: [0] }],
      );
      const result = simulateCircuit(circuit);
      expect(result.classicalBits.get(0)).toBe(0);
    });

    it('measurement of |1⟩ gives classical 1', () => {
      const circuit = makeCircuit(1,
        [{ gate: X, targets: [0] }],
        [{ gate: MEASURE, targets: [0] }],
      );
      const result = simulateCircuit(circuit);
      expect(result.classicalBits.get(0)).toBe(1);
    });
  });
});
