/**
 * Immutable complex number representation.
 * All quantum amplitudes are complex numbers.
 */
export class Complex {
  constructor(
    public readonly re: number,
    public readonly im: number = 0
  ) {}

  static readonly ZERO = new Complex(0, 0);
  static readonly ONE = new Complex(1, 0);
  static readonly I = new Complex(0, 1);
  static readonly MINUS_I = new Complex(0, -1);

  /** Create from polar form: r * e^(iθ) */
  static polar(r: number, theta: number): Complex {
    return new Complex(r * Math.cos(theta), r * Math.sin(theta));
  }

  add(other: Complex): Complex {
    return new Complex(this.re + other.re, this.im + other.im);
  }

  sub(other: Complex): Complex {
    return new Complex(this.re - other.re, this.im - other.im);
  }

  mul(other: Complex): Complex {
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    );
  }

  scale(s: number): Complex {
    return new Complex(this.re * s, this.im * s);
  }

  div(other: Complex): Complex {
    const denom = other.re * other.re + other.im * other.im;
    return new Complex(
      (this.re * other.re + this.im * other.im) / denom,
      (this.im * other.re - this.re * other.im) / denom
    );
  }

  conjugate(): Complex {
    return new Complex(this.re, -this.im);
  }

  /** |z|² — avoids sqrt when you only need magnitude squared */
  abs2(): number {
    return this.re * this.re + this.im * this.im;
  }

  /** |z| */
  abs(): number {
    return Math.sqrt(this.abs2());
  }

  /** Phase angle arg(z) in [-π, π] */
  phase(): number {
    return Math.atan2(this.im, this.re);
  }

  /** Check near-equality with tolerance */
  approxEquals(other: Complex, eps = 1e-10): boolean {
    return Math.abs(this.re - other.re) < eps && Math.abs(this.im - other.im) < eps;
  }

  toString(): string {
    if (Math.abs(this.im) < 1e-10) return this.re.toFixed(4);
    if (Math.abs(this.re) < 1e-10) return `${this.im.toFixed(4)}i`;
    const sign = this.im >= 0 ? '+' : '-';
    return `${this.re.toFixed(4)}${sign}${Math.abs(this.im).toFixed(4)}i`;
  }
}

/** Shorthand constructors */
export const c = (re: number, im = 0) => new Complex(re, im);
export const ci = (im: number) => new Complex(0, im);
