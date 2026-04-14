import { describe, it, expect } from 'vitest';
import { Complex, c, ci } from './complex';

describe('Complex', () => {
  describe('constructors', () => {
    it('creates real numbers', () => {
      const z = new Complex(3);
      expect(z.re).toBe(3);
      expect(z.im).toBe(0);
    });

    it('creates complex numbers', () => {
      const z = new Complex(3, 4);
      expect(z.re).toBe(3);
      expect(z.im).toBe(4);
    });

    it('shorthand c() works', () => {
      expect(c(2, 3).re).toBe(2);
      expect(c(2, 3).im).toBe(3);
      expect(c(5).im).toBe(0);
    });

    it('shorthand ci() works', () => {
      expect(ci(7).re).toBe(0);
      expect(ci(7).im).toBe(7);
    });

    it('has correct constants', () => {
      expect(Complex.ZERO.re).toBe(0);
      expect(Complex.ZERO.im).toBe(0);
      expect(Complex.ONE.re).toBe(1);
      expect(Complex.I.im).toBe(1);
      expect(Complex.MINUS_I.im).toBe(-1);
    });
  });

  describe('arithmetic', () => {
    it('adds', () => {
      const r = c(1, 2).add(c(3, 4));
      expect(r.re).toBe(4);
      expect(r.im).toBe(6);
    });

    it('subtracts', () => {
      const r = c(5, 3).sub(c(2, 1));
      expect(r.re).toBe(3);
      expect(r.im).toBe(2);
    });

    it('multiplies', () => {
      // (1+2i)(3+4i) = 3+4i+6i+8i² = 3+10i-8 = -5+10i
      const r = c(1, 2).mul(c(3, 4));
      expect(r.re).toBe(-5);
      expect(r.im).toBe(10);
    });

    it('multiplies by i correctly', () => {
      // i * i = -1
      const r = Complex.I.mul(Complex.I);
      expect(r.re).toBeCloseTo(-1);
      expect(r.im).toBeCloseTo(0);
    });

    it('scales', () => {
      const r = c(3, 4).scale(2);
      expect(r.re).toBe(6);
      expect(r.im).toBe(8);
    });

    it('divides', () => {
      // (1+2i)/(3+4i) = (1+2i)(3-4i)/25 = (3-4i+6i-8i²)/25 = (11+2i)/25
      const r = c(1, 2).div(c(3, 4));
      expect(r.re).toBeCloseTo(11 / 25);
      expect(r.im).toBeCloseTo(2 / 25);
    });
  });

  describe('properties', () => {
    it('conjugate', () => {
      const r = c(3, 4).conjugate();
      expect(r.re).toBe(3);
      expect(r.im).toBe(-4);
    });

    it('abs2', () => {
      expect(c(3, 4).abs2()).toBe(25);
    });

    it('abs', () => {
      expect(c(3, 4).abs()).toBe(5);
    });

    it('phase', () => {
      expect(c(1, 0).phase()).toBeCloseTo(0);
      expect(c(0, 1).phase()).toBeCloseTo(Math.PI / 2);
      expect(c(-1, 0).phase()).toBeCloseTo(Math.PI);
      expect(c(0, -1).phase()).toBeCloseTo(-Math.PI / 2);
    });

    it('approxEquals', () => {
      expect(c(1, 2).approxEquals(c(1, 2))).toBe(true);
      expect(c(1, 2).approxEquals(c(1 + 1e-11, 2))).toBe(true);
      expect(c(1, 2).approxEquals(c(1.001, 2))).toBe(false);
      expect(c(1, 2).approxEquals(c(2, 2))).toBe(false);
      // Custom epsilon
      expect(c(1, 2).approxEquals(c(1.01, 2), 0.1)).toBe(true);
    });
  });

  describe('polar form', () => {
    it('creates from polar', () => {
      const z = Complex.polar(2, Math.PI / 4);
      expect(z.re).toBeCloseTo(Math.SQRT2);
      expect(z.im).toBeCloseTo(Math.SQRT2);
    });

    it('polar(1, 0) = 1', () => {
      const z = Complex.polar(1, 0);
      expect(z.re).toBeCloseTo(1);
      expect(z.im).toBeCloseTo(0);
    });

    it('polar(1, pi) = -1', () => {
      const z = Complex.polar(1, Math.PI);
      expect(z.re).toBeCloseTo(-1);
      expect(z.im).toBeCloseTo(0);
    });
  });
});
