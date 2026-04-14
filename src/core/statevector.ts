import { Complex } from './complex';
import { applySingleQubitGate, applyTwoQubitGate, expandGate, matvec } from './matrix';
import type { GateDefinition } from './gates';

export class Statevector {
  public amplitudes: Complex[];
  public readonly numQubits: number;

  constructor(numQubits: number, amplitudes?: Complex[]) {
    this.numQubits = numQubits;
    const dim = 1 << numQubits;

    if (amplitudes) {
      if (amplitudes.length !== dim) {
        throw new Error(`Expected ${dim} amplitudes, got ${amplitudes.length}`);
      }
      this.amplitudes = [...amplitudes];
    } else {
      // Initialize to |00...0⟩
      this.amplitudes = new Array(dim).fill(Complex.ZERO);
      this.amplitudes[0] = Complex.ONE;
    }
  }

  /** Deep clone */
  clone(): Statevector {
    return new Statevector(this.numQubits, this.amplitudes);
  }

  /** Get the dimension (2^n) */
  get dim(): number {
    return this.amplitudes.length;
  }

  /** Apply a gate to specific target qubits */
  applyGate(gate: GateDefinition, targets: number[], params?: number[]): Statevector {
    const matrix = gate.matrix(params);

    if (gate.numQubits === 1 && targets.length === 1) {
      return new Statevector(
        this.numQubits,
        applySingleQubitGate(this.amplitudes, matrix, targets[0], this.numQubits)
      );
    }

    if (gate.numQubits === 2 && targets.length === 2) {
      return new Statevector(
        this.numQubits,
        applyTwoQubitGate(this.amplitudes, matrix, targets[0], targets[1], this.numQubits)
      );
    }

    // General case: build full matrix and multiply
    const fullMatrix = expandGate(matrix, targets, this.numQubits);
    return new Statevector(this.numQubits, matvec(fullMatrix, this.amplitudes));
  }

  /** Get probability of each basis state */
  probabilities(): number[] {
    return this.amplitudes.map(a => a.abs2());
  }

  /** Get phases of each basis state */
  phases(): number[] {
    return this.amplitudes.map(a => a.phase());
  }

  /** Measure a single qubit, returning { bit, newState } */
  measure(qubit: number): { bit: number; state: Statevector } {
    const step = 1 << (this.numQubits - 1 - qubit);
    let prob0 = 0;

    // Calculate P(qubit = 0)
    for (let i = 0; i < this.dim; i++) {
      if (!(i & step)) {
        prob0 += this.amplitudes[i].abs2();
      }
    }

    // Randomly choose outcome
    const bit = Math.random() < prob0 ? 0 : 1;
    const probChosen = bit === 0 ? prob0 : 1 - prob0;
    const normFactor = 1 / Math.sqrt(probChosen);

    // Collapse and renormalize
    const newAmps = this.amplitudes.map((amp, i) => {
      const qubitBit = (i & step) ? 1 : 0;
      return qubitBit === bit ? amp.scale(normFactor) : Complex.ZERO;
    });

    return { bit, state: new Statevector(this.numQubits, newAmps) };
  }

  /** Normalize the statevector (useful after interpolation) */
  normalize(): Statevector {
    let normSq = 0;
    for (const amp of this.amplitudes) {
      normSq += amp.abs2();
    }
    const factor = 1 / Math.sqrt(normSq);
    return new Statevector(
      this.numQubits,
      this.amplitudes.map(a => a.scale(factor))
    );
  }

  /** Linear interpolation between two statevectors (for animation) */
  static interpolate(a: Statevector, b: Statevector, t: number): Statevector {
    if (a.numQubits !== b.numQubits) throw new Error('Qubit count mismatch');

    // cos(πt/2)|a⟩ + sin(πt/2)|b⟩, matching the Mathematica animation style
    const c1 = Math.cos((Math.PI / 2) * t);
    const c2 = Math.sin((Math.PI / 2) * t);

    const amps = a.amplitudes.map((ai, i) =>
      ai.scale(c1).add(b.amplitudes[i].scale(c2))
    );

    return new Statevector(a.numQubits, amps).normalize();
  }

  /** Get the label for a basis state index (e.g., 5 → "|101⟩" for 3 qubits) */
  static basisLabel(index: number, numQubits: number): string {
    return '|' + index.toString(2).padStart(numQubits, '0') + '⟩';
  }
}
