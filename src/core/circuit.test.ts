import { describe, it, expect } from 'vitest';
import { createCircuit, addGateToCircuit, removeGateFromCircuit, isQubitOccupied } from './circuit';
import { H, X, CNOT } from './gates';

describe('Circuit model', () => {
  describe('createCircuit', () => {
    it('creates empty circuit with correct qubit count', () => {
      const c = createCircuit(3);
      expect(c.numQubits).toBe(3);
      expect(c.moments).toHaveLength(0);
    });
  });

  describe('addGateToCircuit', () => {
    it('adds a gate to a new moment', () => {
      const c = addGateToCircuit(createCircuit(2), 0, H, [0]);
      expect(c.moments.length).toBe(1);
      expect(c.moments[0].gates.length).toBe(1);
      expect(c.moments[0].gates[0].gate.name).toBe('H');
      expect(c.moments[0].gates[0].targets).toEqual([0]);
    });

    it('extends moments array when needed', () => {
      const c = addGateToCircuit(createCircuit(2), 5, X, [1]);
      expect(c.moments.length).toBe(6);
      // Moments 0-4 should be empty
      for (let i = 0; i < 5; i++) {
        expect(c.moments[i].gates.length).toBe(0);
      }
      expect(c.moments[5].gates.length).toBe(1);
    });

    it('adds multiple gates to same moment', () => {
      let c = addGateToCircuit(createCircuit(3), 0, H, [0]);
      c = addGateToCircuit(c, 0, X, [1]);
      expect(c.moments[0].gates.length).toBe(2);
    });
  });

  describe('removeGateFromCircuit', () => {
    it('removes a gate by ID', () => {
      let c = addGateToCircuit(createCircuit(2), 0, H, [0]);
      const gateId = c.moments[0].gates[0].id;
      c = removeGateFromCircuit(c, gateId);
      // Empty moments get filtered out
      expect(c.moments.length).toBe(0);
    });

    it('keeps other gates when removing one', () => {
      let c = addGateToCircuit(createCircuit(3), 0, H, [0]);
      c = addGateToCircuit(c, 0, X, [1]);
      const hGateId = c.moments[0].gates.find(g => g.gate.name === 'H')!.id;
      c = removeGateFromCircuit(c, hGateId);
      expect(c.moments[0].gates.length).toBe(1);
      expect(c.moments[0].gates[0].gate.name).toBe('X');
    });

    it('no-op for nonexistent ID', () => {
      let c = addGateToCircuit(createCircuit(2), 0, H, [0]);
      const before = c.moments[0].gates.length;
      c = removeGateFromCircuit(c, 'nonexistent');
      expect(c.moments[0].gates.length).toBe(before);
    });
  });

  describe('isQubitOccupied', () => {
    it('returns false for empty moment', () => {
      expect(isQubitOccupied({ gates: [] }, 0)).toBe(false);
    });

    it('returns true for occupied qubit', () => {
      const c = addGateToCircuit(createCircuit(2), 0, H, [0]);
      expect(isQubitOccupied(c.moments[0], 0)).toBe(true);
      expect(isQubitOccupied(c.moments[0], 1)).toBe(false);
    });
  });
});
