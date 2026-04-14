import { useCallback, useEffect } from 'react';
import { useCircuitStore } from '../store/circuitStore';
import { useSimulationStore } from '../store/simulationStore';

/**
 * Hook that auto-simulates the circuit whenever it changes.
 * Returns the current simulation state and controls.
 */
export function useSimulation() {
  const circuit = useCircuitStore((s) => s.circuit);
  const { simulate, reset, result, currentState, currentStep, setStep } = useSimulationStore();

  // Re-simulate whenever the circuit changes
  useEffect(() => {
    if (circuit.moments.length > 0) {
      simulate(circuit);
    } else {
      reset(circuit.numQubits);
    }
  }, [circuit, simulate, reset]);

  const stepForward = useCallback(() => {
    if (result && currentStep < result.steps.length - 1) {
      setStep(currentStep + 1);
    }
  }, [result, currentStep, setStep]);

  const stepBackward = useCallback(() => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  }, [currentStep, setStep]);

  return {
    result,
    currentState,
    currentStep,
    stepForward,
    stepBackward,
    totalSteps: result?.steps.length ?? 0,
  };
}
