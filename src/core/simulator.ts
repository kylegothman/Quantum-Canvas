import { Statevector } from './statevector';
import type { Circuit, PlacedGate, Moment } from './circuit';
import { MEASURE } from './gates';

export interface SimulationStep {
  momentIndex: number;
  stateBefore: Statevector;
  stateAfter: Statevector;
  gatesApplied: PlacedGate[];
  measurements: Map<number, number>; // qubit -> measured bit
}

export interface SimulationResult {
  steps: SimulationStep[];
  finalState: Statevector;
  classicalBits: Map<number, number>; // qubit -> last measured value
}

/**
 * Simulate an entire circuit, producing intermediate states at each moment.
 * This is the core engine that drives all visualizations.
 */
export function simulateCircuit(circuit: Circuit): SimulationResult {
  let currentState = new Statevector(circuit.numQubits);
  const steps: SimulationStep[] = [];
  const classicalBits = new Map<number, number>();

  for (let i = 0; i < circuit.moments.length; i++) {
    const moment = circuit.moments[i];
    const stateBefore = currentState.clone();
    const measurements = new Map<number, number>();

    // Apply each gate in the moment
    for (const placedGate of moment.gates) {
      if (placedGate.gate.name === MEASURE.name) {
        // Measurement: collapse the state
        const qubit = placedGate.targets[0];
        const result = currentState.measure(qubit);
        currentState = result.state;
        measurements.set(qubit, result.bit);
        classicalBits.set(qubit, result.bit);
      } else {
        // Unitary gate: apply to statevector
        const allTargets = [...(placedGate.controls || []), ...placedGate.targets];
        currentState = currentState.applyGate(placedGate.gate, allTargets, placedGate.params);
      }
    }

    steps.push({
      momentIndex: i,
      stateBefore,
      stateAfter: currentState.clone(),
      gatesApplied: moment.gates,
      measurements,
    });
  }

  return {
    steps,
    finalState: currentState,
    classicalBits,
  };
}

/**
 * Get the statevector at a specific step in the simulation.
 * If t is between 0 and 1, interpolate between before and after.
 */
export function getStateAtStep(result: SimulationResult, step: number, t: number = 1): Statevector {
  if (result.steps.length === 0) {
    return new Statevector(1); // Fallback
  }

  const clampedStep = Math.max(0, Math.min(step, result.steps.length - 1));
  const simStep = result.steps[clampedStep];

  if (t >= 1) return simStep.stateAfter;
  if (t <= 0) return simStep.stateBefore;

  // Smooth interpolation for animation
  return Statevector.interpolate(simStep.stateBefore, simStep.stateAfter, t);
}
