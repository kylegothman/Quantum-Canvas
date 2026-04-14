import { describe, it, expect } from 'vitest';
import { circuitToQasm, qasmToCircuit } from './qasm';
import { nextGateId } from './circuit';
import { H, X, CNOT, Rx, MEASURE, S, SWAP } from './gates';
import type { Circuit } from './circuit';

function bell(): Circuit {
  return {
    numQubits: 2,
    moments: [
      { gates: [{ id: nextGateId(), gate: H, targets: [0] }] },
      { gates: [{ id: nextGateId(), gate: CNOT, targets: [1], controls: [0] }] },
    ],
  };
}

describe('QASM', () => {
  describe('circuitToQasm', () => {
    it('serializes empty circuit', () => {
      const qasm = circuitToQasm({ numQubits: 2, moments: [] });
      expect(qasm).toContain('qreg q[2]');
      expect(qasm).toContain('creg c[2]');
    });

    it('serializes single-qubit gates', () => {
      const circuit: Circuit = {
        numQubits: 1,
        moments: [
          { gates: [{ id: nextGateId(), gate: H, targets: [0] }] },
          { gates: [{ id: nextGateId(), gate: X, targets: [0] }] },
        ],
      };
      const qasm = circuitToQasm(circuit);
      expect(qasm).toContain('h q[0];');
      expect(qasm).toContain('x q[0];');
    });

    it('serializes CNOT', () => {
      const qasm = circuitToQasm(bell());
      expect(qasm).toContain('cx q[0], q[1];');
    });

    it('serializes parametric gates with pi notation', () => {
      const circuit: Circuit = {
        numQubits: 1,
        moments: [
          { gates: [{ id: nextGateId(), gate: Rx, targets: [0], params: [Math.PI / 2] }] },
        ],
      };
      const qasm = circuitToQasm(circuit);
      expect(qasm).toContain('rx(pi/2) q[0];');
    });

    it('serializes measurement', () => {
      const circuit: Circuit = {
        numQubits: 1,
        moments: [
          { gates: [{ id: nextGateId(), gate: MEASURE, targets: [0] }] },
        ],
      };
      const qasm = circuitToQasm(circuit);
      expect(qasm).toContain('measure q[0] -> c[0];');
    });
  });

  describe('qasmToCircuit', () => {
    it('parses basic circuit', () => {
      const code = `
OPENQASM 2.0;
include "qelib1.inc";
qreg q[2];
creg c[2];
h q[0];
cx q[0], q[1];
`;
      const result = qasmToCircuit(code);
      expect(result.errors).toHaveLength(0);
      expect(result.circuit).not.toBeNull();
      expect(result.circuit!.numQubits).toBe(2);
      // H and CNOT don't conflict, but parser puts each in separate moment
      // or same moment if no conflict
      const totalGates = result.circuit!.moments.reduce((s, m) => s + m.gates.length, 0);
      expect(totalGates).toBe(2);
    });

    it('parses parametric gates', () => {
      const code = `
OPENQASM 2.0;
qreg q[1];
creg c[1];
rx(pi/4) q[0];
`;
      const result = qasmToCircuit(code);
      expect(result.errors).toHaveLength(0);
      const gate = result.circuit!.moments[0].gates[0];
      expect(gate.gate.name).toBe('Rx');
      expect(gate.params![0]).toBeCloseTo(Math.PI / 4);
    });

    it('parses measurement', () => {
      const code = `
OPENQASM 2.0;
qreg q[1];
creg c[1];
measure q[0] -> c[0];
`;
      const result = qasmToCircuit(code);
      expect(result.errors).toHaveLength(0);
      expect(result.circuit!.moments[0].gates[0].gate.name).toBe('Measure');
    });

    it('packs non-conflicting gates into same moment', () => {
      const code = `
OPENQASM 2.0;
qreg q[3];
creg c[3];
h q[0];
h q[1];
h q[2];
`;
      const result = qasmToCircuit(code);
      expect(result.errors).toHaveLength(0);
      // All 3 H gates act on different qubits → should pack into 1 moment
      expect(result.circuit!.moments.length).toBe(1);
      expect(result.circuit!.moments[0].gates.length).toBe(3);
    });

    it('separates conflicting gates into different moments', () => {
      const code = `
OPENQASM 2.0;
qreg q[1];
creg c[1];
h q[0];
x q[0];
`;
      const result = qasmToCircuit(code);
      expect(result.errors).toHaveLength(0);
      expect(result.circuit!.moments.length).toBe(2);
    });

    it('reports errors for invalid lines', () => {
      const code = `
OPENQASM 2.0;
qreg q[2];
creg c[2];
notareagate q[0];
`;
      const result = qasmToCircuit(code);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('reports error for qubit out of range', () => {
      const code = `
OPENQASM 2.0;
qreg q[2];
creg c[2];
h q[5];
`;
      const result = qasmToCircuit(code);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('handles comments and blank lines', () => {
      const code = `
OPENQASM 2.0;
// This is a comment
qreg q[1];
creg c[1];

// Another comment
h q[0];
`;
      const result = qasmToCircuit(code);
      expect(result.errors).toHaveLength(0);
      expect(result.circuit).not.toBeNull();
    });

    it('parses pi angle expressions', () => {
      const tests = [
        { input: 'pi', expected: Math.PI },
        { input: '-pi', expected: -Math.PI },
        { input: 'pi/2', expected: Math.PI / 2 },
        { input: 'pi/4', expected: Math.PI / 4 },
        { input: '3*pi/4', expected: 3 * Math.PI / 4 },
        { input: '2*pi', expected: 2 * Math.PI },
        { input: '1.5708', expected: 1.5708 },
      ];

      for (const t of tests) {
        const code = `OPENQASM 2.0;\nqreg q[1];\ncreg c[1];\nrx(${t.input}) q[0];`;
        const result = qasmToCircuit(code);
        expect(result.errors).toHaveLength(0);
        expect(result.circuit!.moments[0].gates[0].params![0]).toBeCloseTo(t.expected, 3);
      }
    });
  });

  describe('round-trip', () => {
    it('circuit → QASM → circuit preserves gate count', () => {
      const original = bell();
      const qasm = circuitToQasm(original);
      const parsed = qasmToCircuit(qasm);

      expect(parsed.errors).toHaveLength(0);
      expect(parsed.circuit!.numQubits).toBe(original.numQubits);

      const origGates = original.moments.reduce((s, m) => s + m.gates.length, 0);
      const parsedGates = parsed.circuit!.moments.reduce((s, m) => s + m.gates.length, 0);
      expect(parsedGates).toBe(origGates);
    });

    it('round-trip preserves gate types', () => {
      const circuit: Circuit = {
        numQubits: 2,
        moments: [
          { gates: [
            { id: nextGateId(), gate: H, targets: [0] },
            { id: nextGateId(), gate: S, targets: [1] },
          ]},
          { gates: [
            { id: nextGateId(), gate: CNOT, targets: [1], controls: [0] },
          ]},
        ],
      };

      const qasm = circuitToQasm(circuit);
      const parsed = qasmToCircuit(qasm);

      expect(parsed.errors).toHaveLength(0);
      const allGates = parsed.circuit!.moments.flatMap(m => m.gates);
      const gateNames = allGates.map(g => g.gate.name);
      expect(gateNames).toContain('H');
      expect(gateNames).toContain('S');
      expect(gateNames).toContain('CNOT');
    });
  });
});
