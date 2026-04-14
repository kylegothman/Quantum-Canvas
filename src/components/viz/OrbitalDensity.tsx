import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useSimulationStore } from '../../store/simulationStore';
import { useCircuitStore } from '../../store/circuitStore';
import { Statevector } from '../../core/statevector';
import {
  sampleOrbitalCloud,
  basisToQuantumNumbers,
  phaseVelocity,
  type OrbitalParticle,
} from '../../core/wavefunction';
import { phaseToColor } from '../../utils/colors';
import { ResizableInfoPanel } from '../shared/ResizableInfoPanel';

const PARTICLE_COUNT = 15000;
const VISUAL_SCALE = 0.6; // Scale positions for nice framing

// ─── Sunset color ramp as RGB array ────────────────────────────────

function sunsetRGB(t: number): [number, number, number] {
  t = Math.max(0, Math.min(1, t));
  const colors: [number, number, number][] = [
    [0.102, 0.020, 0.200],
    [0.420, 0.114, 0.369],
    [0.788, 0.259, 0.467],
    [0.949, 0.541, 0.180],
    [0.992, 0.906, 0.298],
  ];
  const idx = t * (colors.length - 1);
  const i = Math.min(Math.floor(idx), colors.length - 2);
  const f = idx - i;
  return [
    colors[i][0] + (colors[i + 1][0] - colors[i][0]) * f,
    colors[i][1] + (colors[i + 1][1] - colors[i][1]) * f,
    colors[i][2] + (colors[i + 1][2] - colors[i][2]) * f,
  ];
}

// ─── Particle cloud component ──────────────────────────────────────

const OrbitalCloud: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const positionsRef = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3));
  const colorsRef = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3));
  const sizesRef = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT));
  const metaRef = useRef<{ particles: OrbitalParticle[]; spherical: Float32Array }>(
    { particles: [], spherical: new Float32Array(0) }
  );
  const timeRef = useRef(0);
  const prevStateIdRef = useRef('');

  // Track smooth transition
  const transitionRef = useRef(0);
  const targetPositions = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3));
  const targetColors = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3));

  useFrame((_, delta) => {
    timeRef.current += delta;

    // Read state imperatively
    const { currentState } = useSimulationStore.getState();
    const numQubits = useCircuitStore.getState().circuit.numQubits;
    const state = currentState || new Statevector(numQubits);

    // Check if state changed
    const stateId = state.amplitudes.map(a => `${a.re.toFixed(4)},${a.im.toFixed(4)}`).join('|');
    if (stateId !== prevStateIdRef.current) {
      prevStateIdRef.current = stateId;
      transitionRef.current = 0; // Start transition

      // Sample new particle cloud
      const particles = sampleOrbitalCloud(state.amplitudes, state.numQubits, PARTICLE_COUNT);
      metaRef.current.particles = particles;

      // Store spherical coordinates for phase animation
      const spherical = new Float32Array(particles.length * 3);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const r = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
        const theta = r > 0.001 ? Math.acos(Math.max(-1, Math.min(1, p.y / r))) : 0;
        const phi = Math.atan2(p.z, p.x);
        spherical[i * 3] = r;
        spherical[i * 3 + 1] = theta;
        spherical[i * 3 + 2] = phi;
      }
      metaRef.current.spherical = spherical;

      // Build target positions and colors
      const tPos = targetPositions.current;
      const tCol = targetColors.current;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        if (i < particles.length) {
          const p = particles[i];
          tPos[i * 3] = p.x * VISUAL_SCALE;
          tPos[i * 3 + 1] = p.y * VISUAL_SCALE;
          tPos[i * 3 + 2] = p.z * VISUAL_SCALE;

          // Color by phase through sunset ramp
          const phaseNorm = ((p.phase % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI);
          const [cr, cg, cb] = sunsetRGB(phaseNorm);
          tCol[i * 3] = cr;
          tCol[i * 3 + 1] = cg;
          tCol[i * 3 + 2] = cb;
        } else {
          // Extra particles: fade to origin
          tPos[i * 3] = tPos[i * 3 + 1] = tPos[i * 3 + 2] = 0;
          tCol[i * 3] = tCol[i * 3 + 1] = tCol[i * 3 + 2] = 0;
        }
      }
    }

    // Smooth transition
    const alpha = 1 - Math.exp(-delta / 0.2);
    transitionRef.current = Math.min(1, transitionRef.current + delta * 2);

    const positions = positionsRef.current;
    const colors = colorsRef.current;
    const sizes = sizesRef.current;
    const particles = metaRef.current.particles;
    const spherical = metaRef.current.spherical;
    const tPos = targetPositions.current;
    const tCol = targetColors.current;

    // Phase-driven rotation: particles with m ≠ 0 rotate in φ
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (i < particles.length) {
        const p = particles[i];
        const r = spherical[i * 3];
        const theta = spherical[i * 3 + 1];
        let phi = spherical[i * 3 + 2];

        // Probability current: rotate in φ direction
        if (p.orbitalM !== 0) {
          const sinTheta = Math.sin(theta);
          const vPhi = phaseVelocity(p.orbitalM, r, sinTheta);
          phi += vPhi * delta;
          spherical[i * 3 + 2] = phi;

          // Update target position from rotated spherical coords
          tPos[i * 3] = r * Math.sin(theta) * Math.cos(phi) * VISUAL_SCALE;
          tPos[i * 3 + 1] = r * Math.cos(theta) * VISUAL_SCALE;
          tPos[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi) * VISUAL_SCALE;

          // Update phase color
          const phaseNorm = (((p.phase + p.orbitalM * phi) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI);
          const [cr, cg, cb] = sunsetRGB(phaseNorm);
          tCol[i * 3] = cr;
          tCol[i * 3 + 1] = cg;
          tCol[i * 3 + 2] = cb;
        }

        // Lerp toward target
        positions[i * 3] += (tPos[i * 3] - positions[i * 3]) * alpha;
        positions[i * 3 + 1] += (tPos[i * 3 + 1] - positions[i * 3 + 1]) * alpha;
        positions[i * 3 + 2] += (tPos[i * 3 + 2] - positions[i * 3 + 2]) * alpha;

        colors[i * 3] += (tCol[i * 3] - colors[i * 3]) * alpha;
        colors[i * 3 + 1] += (tCol[i * 3 + 1] - colors[i * 3 + 1]) * alpha;
        colors[i * 3 + 2] += (tCol[i * 3 + 2] - colors[i * 3 + 2]) * alpha;

        sizes[i] = 0.02 + p.amplitude * 0.01;
      } else {
        // Fade extras
        positions[i * 3] *= 0.95;
        positions[i * 3 + 1] *= 0.95;
        positions[i * 3 + 2] *= 0.95;
        sizes[i] = 0.005;
      }
    }

    // Update geometry
    if (pointsRef.current) {
      const geom = pointsRef.current.geometry;
      (geom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (geom.attributes.color as THREE.BufferAttribute).needsUpdate = true;
      (geom.attributes.size as THREE.BufferAttribute).needsUpdate = true;
    }
  });

  // Initialize buffers
  useEffect(() => {
    const sizes = sizesRef.current;
    for (let i = 0; i < PARTICLE_COUNT; i++) sizes[i] = 0.015;
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positionsRef.current}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colorsRef.current}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizesRef.current}
          count={PARTICLE_COUNT}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.025}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// ─── Nucleus glow ──────────────────────────────────────────────────

const Nucleus: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial
          color="#ffaa44"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

// ─── Scene ─────────────────────────────────────────────────────────

const OrbitalScene: React.FC = () => (
  <>
    <ambientLight intensity={0.1} />
    <Nucleus />
    <OrbitalCloud />
    <OrbitControls
      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.5}
      zoomSpeed={0.8}
      minDistance={1}
      maxDistance={12}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.15}
    />
  </>
);

// ─── Orbital info ──────────────────────────────────────────────────

const OrbitalInfo: React.FC = () => {
  const state = useSimulationStore((s) => s.currentState);
  const numQubits = useCircuitStore((s) => s.circuit.numQubits);
  const sv = state || new Statevector(numQubits);

  // Compute which orbitals are occupied
  const occupied = useMemo(() => {
    const result: { n: number; l: number; m: number; prob: number; label: string }[] = [];
    const orbitLabels = ['s', 'p', 'd', 'f', 'g', 'h'];
    for (let k = 0; k < sv.dim; k++) {
      const p = sv.amplitudes[k].abs2();
      if (p < 0.001) continue;
      const { n, l, m } = basisToQuantumNumbers(k);
      const lLabel = l < orbitLabels.length ? orbitLabels[l] : `l=${l}`;
      result.push({ n, l, m, prob: p, label: `${n}${lLabel} (m=${m})` });
    }
    return result;
  }, [sv]);

  return (
    <>
      <ResizableInfoPanel title="Orbital Cloud" position="top-right" defaultWidth={310} defaultHeight={200}>
        <div className="text-[12px] text-white/[0.75] font-mono space-y-1.5 leading-relaxed">
          <div>3D probability cloud |ψ(r,θ,φ)|² from exact hydrogen wavefunctions.</div>
          <div className="text-[11px] text-white/[0.55]">Each dot = possible electron position</div>
          <div className="text-[11px] text-white/[0.55]">Color = complex phase of wavefunction</div>
          <div className="text-[11px] text-white/[0.55]">Rotation = probability current (m ≠ 0)</div>
          <div className="text-[11px] text-white/[0.55]">Still cloud = standing wave (m = 0)</div>

          {occupied.length > 0 && (
            <div className="mt-2 pt-2 border-t border-white/[0.08]">
              <div className="text-[10px] text-white/[0.4] mb-1">Active orbitals:</div>
              {occupied.slice(0, 6).map((o, i) => (
                <div key={i} className="text-[10px] text-white/[0.55]">
                  {o.label}: {(o.prob * 100).toFixed(1)}%
                </div>
              ))}
            </div>
          )}
        </div>
      </ResizableInfoPanel>

      {/* Phase legend */}
      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-white/[0.08]">
        <div className="text-[11px] text-white/[0.45] font-mono mb-1.5">Phase → Color</div>
        <div className="flex items-center gap-px">
          {Array.from({ length: 28 }, (_, i) => (
            <div key={i} className="w-2 h-3 rounded-sm"
              style={{ backgroundColor: phaseToColor(-Math.PI + (2 * Math.PI * i) / 27) }} />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-white/[0.2] font-mono mt-0.5">
          <span>−π</span><span>0</span><span>π</span>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 text-[9px] text-white/[0.12] font-mono">
        drag to rotate · scroll to zoom
      </div>
    </>
  );
};

// ─── Export ────────────────────────────────────────────────────────

export const OrbitalDensity: React.FC = () => (
  <div className="w-full h-full relative">
    <Canvas
      camera={{ position: [3, 2, 3], fov: 40, near: 0.01, far: 50 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      style={{ background: '#030306' }}
    >
      <OrbitalScene />
    </Canvas>
    <OrbitalInfo />
  </div>
);
