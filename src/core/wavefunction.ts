/**
 * Hydrogen atom wavefunction computations.
 *
 * ψ_nlm(r,θ,φ) = R_nl(r) · Y_lm(θ,φ)
 *
 * where:
 *   R_nl = radial wavefunction (associated Laguerre polynomials)
 *   Y_lm = spherical harmonic (associated Legendre polynomials)
 *   n = principal quantum number (1, 2, 3, ...)
 *   l = angular momentum quantum number (0, 1, ..., n-1)
 *   m = magnetic quantum number (-l, ..., 0, ..., l)
 *
 * We sample |ψ|² to create a 3D probability cloud.
 */

// Bohr radius in our units (scaled for visualization)
const A0 = 1.0;

// ─── Factorials and combinatorics ──────────────────────────────────

const FACTORIAL_CACHE: number[] = [1, 1];
function factorial(n: number): number {
  if (n < 0) return 1;
  if (FACTORIAL_CACHE[n] !== undefined) return FACTORIAL_CACHE[n];
  let result = FACTORIAL_CACHE[FACTORIAL_CACHE.length - 1];
  for (let i = FACTORIAL_CACHE.length; i <= n; i++) {
    result *= i;
    FACTORIAL_CACHE[i] = result;
  }
  return result;
}

// ─── Associated Laguerre polynomial L_p^k(x) ──────────────────────
// Using the recurrence relation:
//   L_0^k(x) = 1
//   L_1^k(x) = 1 + k - x
//   (p+1) L_{p+1}^k(x) = (2p + 1 + k - x) L_p^k(x) - (p + k) L_{p-1}^k(x)

function assocLaguerre(p: number, k: number, x: number): number {
  if (p === 0) return 1;
  if (p === 1) return 1 + k - x;

  let Lm1 = 1; // L_0
  let L = 1 + k - x; // L_1

  for (let i = 1; i < p; i++) {
    const Lnext = ((2 * i + 1 + k - x) * L - (i + k) * Lm1) / (i + 1);
    Lm1 = L;
    L = Lnext;
  }
  return L;
}

// ─── Associated Legendre polynomial P_l^m(x) ──────────────────────
// For m >= 0, using recurrence:
//   P_m^m(x) = (-1)^m (2m-1)!! (1-x²)^(m/2)
//   P_{m+1}^m(x) = x(2m+1) P_m^m(x)
//   (l-m) P_l^m(x) = x(2l-1) P_{l-1}^m(x) - (l+m-1) P_{l-2}^m(x)

function assocLegendre(l: number, m: number, x: number): number {
  const absm = Math.abs(m);

  // Start with P_m^m
  let pmm = 1;
  if (absm > 0) {
    const sqrtFactor = Math.sqrt(1 - x * x);
    let fact = 1;
    for (let i = 1; i <= absm; i++) {
      pmm *= -fact * sqrtFactor;
      fact += 2;
    }
  }

  if (l === absm) return pmm;

  // P_{m+1}^m
  let pmm1 = x * (2 * absm + 1) * pmm;
  if (l === absm + 1) return pmm1;

  // Recurrence for higher l
  let P = 0;
  for (let ll = absm + 2; ll <= l; ll++) {
    P = (x * (2 * ll - 1) * pmm1 - (ll + absm - 1) * pmm) / (ll - absm);
    pmm = pmm1;
    pmm1 = P;
  }
  return P;
}

// ─── Radial wavefunction R_nl(r) ───────────────────────────────────

function radialWavefunction(n: number, l: number, r: number): number {
  const rho = (2 * r) / (n * A0);
  const norm = Math.sqrt(
    ((2 / (n * A0)) ** 3 * factorial(n - l - 1)) /
    (2 * n * factorial(n + l))
  );
  return norm * Math.exp(-rho / 2) * Math.pow(rho, l) * assocLaguerre(n - l - 1, 2 * l + 1, rho);
}

// ─── Spherical harmonic Y_lm(θ,φ) ─────────────────────────────────
// Returns { re, im } of Y_lm

function sphericalHarmonic(l: number, m: number, theta: number, phi: number): { re: number; im: number } {
  const absm = Math.abs(m);
  const norm = Math.sqrt(
    ((2 * l + 1) / (4 * Math.PI)) *
    factorial(l - absm) / factorial(l + absm)
  );

  const Plm = assocLegendre(l, absm, Math.cos(theta));
  let val = norm * Plm;

  // Negative m adjustment
  if (m < 0) {
    val *= (absm % 2 === 0 ? 1 : -1);
  }

  return {
    re: val * Math.cos(m * phi),
    im: val * Math.sin(m * phi),
  };
}

// ─── Full wavefunction ψ_nlm(r,θ,φ) ───────────────────────────────

export function psi(n: number, l: number, m: number, r: number, theta: number, phi: number): { re: number; im: number } {
  const R = radialWavefunction(n, l, r);
  const Y = sphericalHarmonic(l, m, theta, phi);
  return { re: R * Y.re, im: R * Y.im };
}

// ─── Probability density |ψ|² ──────────────────────────────────────

export function probabilityDensity(n: number, l: number, m: number, r: number, theta: number): number {
  const R = radialWavefunction(n, l, r);
  const absm = Math.abs(m);
  const norm = Math.sqrt(
    ((2 * l + 1) / (4 * Math.PI)) *
    factorial(l - absm) / factorial(l + absm)
  );
  const Plm = assocLegendre(l, absm, Math.cos(theta));
  let Y = norm * Plm;
  if (m < 0) Y *= (absm % 2 === 0 ? 1 : -1);

  // |ψ|² = R² |Y|², and |Y_lm|² doesn't depend on φ
  return R * R * Y * Y;
}

// ─── CDF sampling ──────────────────────────────────────────────────
// Given a probability distribution, build a CDF and sample from it.

function buildCDF(values: number[], weights: number[]): { values: number[]; cdf: number[] } {
  const cdf: number[] = [];
  let sum = 0;
  for (const w of weights) {
    sum += w;
    cdf.push(sum);
  }
  // Normalize
  for (let i = 0; i < cdf.length; i++) cdf[i] /= sum;
  return { values, cdf };
}

function sampleCDF(cdf: { values: number[]; cdf: number[] }): number {
  const u = Math.random();
  // Binary search
  let lo = 0, hi = cdf.cdf.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (cdf.cdf[mid] < u) lo = mid + 1;
    else hi = mid;
  }
  return cdf.values[lo];
}

// ─── Quantum number mapping ────────────────────────────────────────
// Map basis state index to (n, l, m) quantum numbers.
// We fill orbitals in order: 1s, 2s, 2p(-1,0,1), 3s, 3p, 3d, etc.

export interface QuantumNumbers {
  n: number;
  l: number;
  m: number;
}

const ORBITAL_ORDER: QuantumNumbers[] = [];
(function buildOrder() {
  for (let n = 1; n <= 6; n++) {
    for (let l = 0; l < n; l++) {
      for (let m = -l; m <= l; m++) {
        ORBITAL_ORDER.push({ n, l, m: m || 0 }); // Avoid -0
      }
    }
  }
})();

export function basisToQuantumNumbers(index: number): QuantumNumbers {
  if (index < ORBITAL_ORDER.length) return ORBITAL_ORDER[index];
  // Fallback for high indices
  return { n: 1, l: 0, m: 0 };
}

// ─── Sample particle positions for a superposition ─────────────────
// Given a statevector, sample 3D points from the combined |ψ|².
// Each point also carries phase info for probability current animation.

export interface OrbitalParticle {
  x: number;
  y: number;
  z: number;
  phase: number;      // arg(c_k * ψ_k) at this point
  amplitude: number;  // |c_k|² weight (for color intensity)
  orbitalM: number;   // m quantum number (for rotation velocity)
}

export function sampleOrbitalCloud(
  amplitudes: { re: number; im: number; abs2: () => number; phase: () => number }[],
  numQubits: number,
  totalParticles: number,
): OrbitalParticle[] {
  const dim = amplitudes.length;
  const particles: OrbitalParticle[] = [];

  // Determine how many particles each basis state gets (proportional to |c_k|²)
  const probs = amplitudes.map(a => a.abs2());
  const totalProb = probs.reduce((s, p) => s + p, 0);
  if (totalProb < 1e-10) {
    // All zero — return ground state
    return sampleSingleOrbital(1, 0, 0, 0, 1.0, totalParticles);
  }

  for (let k = 0; k < dim; k++) {
    if (probs[k] < 0.001) continue;
    const count = Math.round((probs[k] / totalProb) * totalParticles);
    if (count === 0) continue;

    const { n, l, m } = basisToQuantumNumbers(k);
    const phase = amplitudes[k].phase();
    const pts = sampleSingleOrbital(n, l, m, phase, probs[k], count);
    particles.push(...pts);
  }

  return particles;
}

function sampleSingleOrbital(
  n: number, l: number, m: number,
  globalPhase: number, prob: number, count: number,
): OrbitalParticle[] {
  const particles: OrbitalParticle[] = [];

  // Build radial CDF
  const rMax = n * n * A0 * 4; // Reasonable cutoff
  const rSteps = 200;
  const rValues: number[] = [];
  const rWeights: number[] = [];
  for (let i = 1; i <= rSteps; i++) {
    const r = (i / rSteps) * rMax;
    rValues.push(r);
    const R = radialWavefunction(n, l, r);
    // Radial probability ∝ r² |R(r)|²
    rWeights.push(r * r * R * R);
  }
  const radialCDF = buildCDF(rValues, rWeights);

  // Build theta CDF (depends on l, m)
  const thetaSteps = 100;
  const thetaValues: number[] = [];
  const thetaWeights: number[] = [];
  const absm = Math.abs(m);
  const Ynorm = Math.sqrt(
    ((2 * l + 1) / (4 * Math.PI)) *
    factorial(l - absm) / factorial(l + absm)
  );
  for (let i = 0; i < thetaSteps; i++) {
    const theta = ((i + 0.5) / thetaSteps) * Math.PI;
    thetaValues.push(theta);
    const Plm = assocLegendre(l, absm, Math.cos(theta));
    const Ysq = Ynorm * Ynorm * Plm * Plm;
    // Angular probability ∝ |Y|² sin(θ) (Jacobian)
    thetaWeights.push(Ysq * Math.sin(theta));
  }
  const thetaCDF = buildCDF(thetaValues, thetaWeights);

  // Sample particles
  for (let i = 0; i < count; i++) {
    const r = sampleCDF(radialCDF);
    const theta = sampleCDF(thetaCDF);
    const phi = Math.random() * 2 * Math.PI; // Uniform in φ

    // Convert to Cartesian
    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.cos(theta); // Y-up
    const z = r * Math.sin(theta) * Math.sin(phi);

    particles.push({
      x, y, z,
      phase: globalPhase + m * phi, // Phase includes orbital angular momentum
      amplitude: prob,
      orbitalM: m,
    });
  }

  return particles;
}

// ─── Probability current velocity for phase animation ──────────────
// v_φ = m ħ / (m_e r sin θ) — in our units, simplified to:
// Angular velocity ∝ m / (r sin θ)
// We rotate particles in φ direction at this rate.

export function phaseVelocity(m: number, r: number, sinTheta: number): number {
  if (r < 0.01 || Math.abs(sinTheta) < 0.01) return 0;
  return (m * 0.3) / (r * sinTheta); // 0.3 = visual speed factor
}
