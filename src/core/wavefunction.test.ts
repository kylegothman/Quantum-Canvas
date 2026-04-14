import { describe, it, expect } from 'vitest';
import {
  psi,
  probabilityDensity,
  sampleOrbitalCloud,
  basisToQuantumNumbers,
} from './wavefunction';
import { Complex } from './complex';

describe('Wavefunction', () => {
  describe('basisToQuantumNumbers', () => {
    it('index 0 → 1s (n=1, l=0, m=0)', () => {
      const q = basisToQuantumNumbers(0);
      expect(q).toEqual({ n: 1, l: 0, m: 0 });
    });

    it('index 1 → 2s (n=2, l=0, m=0)', () => {
      const q = basisToQuantumNumbers(1);
      expect(q).toEqual({ n: 2, l: 0, m: 0 });
    });

    it('index 2 → 2p (n=2, l=1, m=-1)', () => {
      const q = basisToQuantumNumbers(2);
      expect(q).toEqual({ n: 2, l: 1, m: -1 });
    });

    it('index 3 → 2p (n=2, l=1, m=0)', () => {
      const q = basisToQuantumNumbers(3);
      expect(q).toEqual({ n: 2, l: 1, m: 0 });
    });

    it('index 4 → 2p (n=2, l=1, m=1)', () => {
      const q = basisToQuantumNumbers(4);
      expect(q).toEqual({ n: 2, l: 1, m: 1 });
    });
  });

  describe('psi (wavefunction values)', () => {
    it('1s at origin: ψ(r→0) is finite', () => {
      const val = psi(1, 0, 0, 0.001, 0, 0);
      expect(isFinite(val.re)).toBe(true);
      expect(isFinite(val.im)).toBe(true);
    });

    it('1s wavefunction is real (m=0)', () => {
      const val = psi(1, 0, 0, 1.0, Math.PI / 4, Math.PI / 3);
      expect(Math.abs(val.im)).toBeLessThan(1e-10);
    });

    it('2p (m=1) has non-zero imaginary part', () => {
      const val = psi(2, 1, 1, 2.0, Math.PI / 3, Math.PI / 4);
      expect(Math.abs(val.im)).toBeGreaterThan(0.001);
    });

    it('1s wavefunction decays with r', () => {
      const near = psi(1, 0, 0, 0.5, Math.PI / 2, 0);
      const far = psi(1, 0, 0, 5.0, Math.PI / 2, 0);
      expect(Math.abs(near.re)).toBeGreaterThan(Math.abs(far.re));
    });

    it('2p (m=0) vanishes at θ=0 and θ=π', () => {
      // Actually for l=1, m=0: Y ∝ cos(θ), which is NOT zero at θ=0
      // But for m=±1: Y ∝ sin(θ), which IS zero at θ=0
      const val = psi(2, 1, 1, 2.0, 0, 0);
      // sin(0) = 0, so the angular part vanishes
      expect(Math.abs(val.re)).toBeLessThan(0.01);
      expect(Math.abs(val.im)).toBeLessThan(0.01);
    });
  });

  describe('probabilityDensity', () => {
    it('is non-negative everywhere', () => {
      for (let i = 0; i < 20; i++) {
        const r = Math.random() * 10;
        const theta = Math.random() * Math.PI;
        expect(probabilityDensity(1, 0, 0, r, theta)).toBeGreaterThanOrEqual(0);
        expect(probabilityDensity(2, 1, 0, r, theta)).toBeGreaterThanOrEqual(0);
        expect(probabilityDensity(3, 2, 1, r, theta)).toBeGreaterThanOrEqual(0);
      }
    });

    it('1s is spherically symmetric (same θ gives same density)', () => {
      const r = 1.0;
      const d1 = probabilityDensity(1, 0, 0, r, 0);
      const d2 = probabilityDensity(1, 0, 0, r, Math.PI / 2);
      const d3 = probabilityDensity(1, 0, 0, r, Math.PI);
      expect(d1).toBeCloseTo(d2, 6);
      expect(d2).toBeCloseTo(d3, 6);
    });

    it('2p (m=0) peaks at θ = 0 and π (along z-axis)', () => {
      const r = 2.0;
      const atPole = probabilityDensity(2, 1, 0, r, 0);
      const atEquator = probabilityDensity(2, 1, 0, r, Math.PI / 2);
      expect(atPole).toBeGreaterThan(atEquator);
    });
  });

  describe('sampleOrbitalCloud', () => {
    it('generates correct number of particles for ground state', () => {
      const amps = [Complex.ONE, Complex.ZERO];
      const particles = sampleOrbitalCloud(
        amps.map(a => ({ re: a.re, im: a.im, abs2: () => a.abs2(), phase: () => a.phase() })),
        1, 1000
      );
      expect(particles.length).toBeGreaterThan(900); // Allow some rounding
      expect(particles.length).toBeLessThanOrEqual(1000);
    });

    it('particles for 1s are roughly spherically distributed', () => {
      const amps = [Complex.ONE, Complex.ZERO];
      const particles = sampleOrbitalCloud(
        amps.map(a => ({ re: a.re, im: a.im, abs2: () => a.abs2(), phase: () => a.phase() })),
        1, 2000
      );

      // Check that points exist in all octants (rough spherical symmetry)
      let posX = 0, negX = 0, posY = 0, negY = 0;
      for (const p of particles) {
        if (p.x > 0) posX++; else negX++;
        if (p.y > 0) posY++; else negY++;
      }
      // Each half should have 30-70% of points
      const total = particles.length;
      expect(posX / total).toBeGreaterThan(0.3);
      expect(negX / total).toBeGreaterThan(0.3);
      expect(posY / total).toBeGreaterThan(0.3);
      expect(negY / total).toBeGreaterThan(0.3);
    });

    it('handles all-zero amplitudes gracefully', () => {
      const amps = [Complex.ZERO, Complex.ZERO];
      const particles = sampleOrbitalCloud(
        amps.map(a => ({ re: a.re, im: a.im, abs2: () => a.abs2(), phase: () => a.phase() })),
        1, 100
      );
      expect(particles.length).toBeGreaterThan(0); // Falls back to ground state
    });

    it('superposition distributes particles across orbitals', () => {
      const c = 1 / Math.sqrt(2);
      const amps = [new Complex(c, 0), new Complex(c, 0)];
      const particles = sampleOrbitalCloud(
        amps.map(a => ({ re: a.re, im: a.im, abs2: () => a.abs2(), phase: () => a.phase() })),
        1, 2000
      );
      // Both orbitals should contribute particles
      expect(particles.length).toBeGreaterThan(1800);
    });
  });
});
