import { describe, it, expect } from 'vitest';
import {
  GATE_REGISTRY, GATE_PALETTE,
  H, X, Y, Z, S, T, Rx, Ry, Rz,
  CNOT, CZ, SWAP, TOFFOLI, MEASURE,
} from './gates';

describe('Gate Registry', () => {
  describe('every gate.name resolves in GATE_REGISTRY', () => {
    const allGates = [H, X, Y, Z, S, T, Rx, Ry, Rz, CNOT, CZ, SWAP, TOFFOLI, MEASURE];

    for (const gate of allGates) {
      it(`GATE_REGISTRY["${gate.name}"] returns the correct gate`, () => {
        const found = GATE_REGISTRY[gate.name];
        expect(found).toBeDefined();
        expect(found.name).toBe(gate.name);
        expect(found.numQubits).toBe(gate.numQubits);
      });
    }
  });

  describe('every palette gate resolves in GATE_REGISTRY', () => {
    const paletteGates = [
      ...GATE_PALETTE.single,
      ...GATE_PALETTE.parametric,
      ...GATE_PALETTE.multi,
      ...GATE_PALETTE.other,
    ];

    for (const gate of paletteGates) {
      it(`palette gate "${gate.name}" is in GATE_REGISTRY`, () => {
        expect(GATE_REGISTRY[gate.name]).toBeDefined();
      });
    }
  });

  describe('registry has no extra or missing entries', () => {
    it('registry contains exactly the expected gates', () => {
      const expectedNames = ['H', 'X', 'Y', 'Z', 'S', 'T', 'Rx', 'Ry', 'Rz',
        'CNOT', 'CZ', 'SWAP', 'Toffoli', 'Measure'];
      const registryNames = Object.keys(GATE_REGISTRY).sort();
      expect(registryNames).toEqual(expectedNames.sort());
    });
  });
});
