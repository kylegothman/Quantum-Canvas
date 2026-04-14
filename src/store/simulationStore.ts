import { create } from 'zustand';
import { simulateCircuit, getStateAtStep } from '../core/simulator';
import { Statevector } from '../core/statevector';
import type { SimulationResult } from '../core/simulator';
import type { Circuit } from '../core/circuit';

interface SimulationState {
  result: SimulationResult | null;
  currentStep: number;
  interpolationT: number; // 0-1 within current step
  currentState: Statevector;
  isSimulated: boolean;

  // Actions
  simulate: (circuit: Circuit) => void;
  setStep: (step: number) => void;
  setInterpolationT: (t: number) => void;
  reset: (numQubits: number) => void;
}

export const useSimulationStore = create<SimulationState>((set, get) => ({
  result: null,
  currentStep: -1,
  interpolationT: 1,
  currentState: new Statevector(3),
  isSimulated: false,

  simulate: (circuit) => {
    const result = simulateCircuit(circuit);
    const finalState = result.finalState;
    set({
      result,
      currentStep: result.steps.length - 1,
      interpolationT: 1,
      currentState: finalState,
      isSimulated: true,
    });
  },

  setStep: (step) => {
    const { result } = get();
    if (!result) return;
    const state = getStateAtStep(result, step, 1);
    set({ currentStep: step, interpolationT: 1, currentState: state });
  },

  setInterpolationT: (t) => {
    const { result, currentStep } = get();
    if (!result) return;
    const state = getStateAtStep(result, currentStep, t);
    set({ interpolationT: t, currentState: state });
  },

  reset: (numQubits) => set({
    result: null,
    currentStep: -1,
    interpolationT: 1,
    currentState: new Statevector(numQubits),
    isSimulated: false,
  }),
}));
