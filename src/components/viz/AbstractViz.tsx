import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useSimulationStore } from '../../store/simulationStore';
import { useCircuitStore } from '../../store/circuitStore';
import { Statevector } from '../../core/statevector';
import { phaseToColor } from '../../utils/colors';
import { ResizableInfoPanel } from '../shared/ResizableInfoPanel';
import {
  glassOrbVertexShader, glassOrbFragmentShader,
  glassAtmosphereVertex, glassAtmosphereFragment,
  glassShellVertex, glassShellFragment,
} from '../../shaders/qsphereShaders';

// ─── Q-Sphere math (exact) ─────────────────────────────────────────

function hammingWeight(n: number): number {
  let count = 0;
  while (n) { count += n & 1; n >>= 1; }
  return count;
}

interface QSpherePoint {
  index: number; label: string; probability: number; phase: number;
  position: THREE.Vector3; hammingW: number;
}

interface CoherenceLine {
  from: THREE.Vector3; to: THREE.Vector3;
  coherence: number; phaseI: number; phaseJ: number;
}

const SPHERE_R = 1.4;

function computeQSphere(amplitudes: { re: number; im: number; abs2: () => number; phase: () => number }[], numQubits: number) {
  const dim = amplitudes.length;
  const byWeight: Map<number, number[]> = new Map();
  for (let k = 0; k < dim; k++) {
    const w = hammingWeight(k);
    if (!byWeight.has(w)) byWeight.set(w, []);
    byWeight.get(w)!.push(k);
  }

  const points: QSpherePoint[] = [];
  const positions: THREE.Vector3[] = new Array(dim);

  for (const [weight, indices] of byWeight) {
    const theta = Math.PI * weight / numQubits;
    const count = indices.length;
    indices.forEach((k, i) => {
      const phi = count === 1 ? 0 : (2 * Math.PI * i) / count;
      const pos = new THREE.Vector3(
        SPHERE_R * Math.sin(theta) * Math.cos(phi),
        SPHERE_R * Math.cos(theta),
        SPHERE_R * Math.sin(theta) * Math.sin(phi)
      );
      positions[k] = pos;
      points.push({
        index: k,
        label: '|' + k.toString(2).padStart(numQubits, '0') + '⟩',
        probability: amplitudes[k].abs2(),
        phase: amplitudes[k].phase(),
        position: pos,
        hammingW: weight,
      });
    });
  }

  const lines: CoherenceLine[] = [];
  for (let i = 0; i < dim; i++) {
    for (let bit = 0; bit < numQubits; bit++) {
      const j = i ^ (1 << bit);
      if (j <= i) continue;
      const pi = amplitudes[i].abs2();
      const pj = amplitudes[j].abs2();
      const coherence = Math.sqrt(pi * pj);
      if (coherence > 0.003) {
        lines.push({ from: positions[i], to: positions[j], coherence,
          phaseI: amplitudes[i].phase(), phaseJ: amplitudes[j].phase() });
      }
    }
  }
  return { points, lines };
}

// ─── Glass state orb ───────────────────────────────────────────────

const GlassOrb: React.FC<{ point: QSpherePoint }> = ({ point }) => {
  const coreRef = useRef<THREE.ShaderMaterial>(null);
  const atmoRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const smoothProb = useRef(point.probability);
  const smoothPhase = useRef(point.phase);
  const { camera } = useThree();

  useFrame((_, delta) => {
    timeRef.current += delta;
    const alpha = 1 - Math.exp(-delta / 0.12);
    smoothProb.current += (point.probability - smoothProb.current) * alpha;
    smoothPhase.current += (point.phase - smoothPhase.current) * alpha;

    const s = Math.max(0.02, Math.sqrt(smoothProb.current) * 0.3);
    if (groupRef.current) groupRef.current.scale.setScalar(s);

    const uniforms = { uTime: timeRef.current, uPhase: smoothPhase.current,
      uProbability: smoothProb.current, uCameraPos: camera.position };

    if (coreRef.current) {
      Object.entries(uniforms).forEach(([k, v]) => {
        if (coreRef.current!.uniforms[k]) coreRef.current!.uniforms[k].value = v;
      });
    }
    if (atmoRef.current) {
      atmoRef.current.uniforms.uTime.value = timeRef.current;
      atmoRef.current.uniforms.uPhase.value = smoothPhase.current;
      atmoRef.current.uniforms.uProbability.value = smoothProb.current;
    }
  });

  if (point.probability < 0.001) return null;

  return (
    <group position={point.position}>
      <group ref={groupRef} scale={Math.sqrt(point.probability) * 0.3}>
        {/* Glass core */}
        <mesh>
          <sphereGeometry args={[1, 48, 48]} />
          <shaderMaterial
            ref={coreRef}
            vertexShader={glassOrbVertexShader}
            fragmentShader={glassOrbFragmentShader}
            transparent depthWrite={false}
            uniforms={{
              uPhase: { value: point.phase },
              uProbability: { value: point.probability },
              uTime: { value: 0 },
              uCameraPos: { value: new THREE.Vector3() },
            }}
          />
        </mesh>

        {/* Atmosphere glow */}
        <mesh scale={[1.8, 1.8, 1.8]}>
          <sphereGeometry args={[1, 24, 24]} />
          <shaderMaterial
            ref={atmoRef}
            vertexShader={glassAtmosphereVertex}
            fragmentShader={glassAtmosphereFragment}
            transparent depthWrite={false}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            uniforms={{
              uPhase: { value: point.phase },
              uProbability: { value: point.probability },
              uTime: { value: 0 },
            }}
          />
        </mesh>

        {/* Wide soft halo */}
        <mesh scale={[2.8, 2.8, 2.8]}>
          <sphereGeometry args={[1, 16, 16]} />
          <shaderMaterial
            vertexShader={glassAtmosphereVertex}
            fragmentShader={glassAtmosphereFragment}
            transparent depthWrite={false}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            uniforms={{
              uPhase: { value: point.phase },
              uProbability: { value: point.probability * 0.2 },
              uTime: { value: 0 },
            }}
          />
        </mesh>
      </group>

      {/* Label */}
      {point.probability > 0.01 && (
        <Html position={[0, Math.sqrt(point.probability) * 0.38 + 0.1, 0]} center>
          <div style={{
            fontSize: '11px', fontFamily: '"JetBrains Mono", monospace',
            color: 'rgba(200,200,220,0.7)', userSelect: 'none', pointerEvents: 'none',
            textShadow: '0 0 12px rgba(0,0,0,0.95)', whiteSpace: 'nowrap',
            textAlign: 'center', lineHeight: 1.3,
          }}>
            <div>{point.label}</div>
            <div style={{ fontSize: '9px', color: 'rgba(150,150,170,0.5)' }}>
              {(point.probability * 100).toFixed(1)}%
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

// ─── Flowing coherence arc ─────────────────────────────────────────

const CoherenceArc: React.FC<{ line: CoherenceLine }> = ({ line }) => {
  const lineRef = useRef<any>(null);
  const timeRef = useRef(Math.random() * 100);

  const points = useMemo((): [number, number, number][] => {
    const segments = 40;
    const pts: [number, number, number][] = [];
    const { from, to } = line;
    const mid = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5).multiplyScalar(0.65);
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const t1 = 1 - t;
      pts.push([
        t1 * t1 * from.x + 2 * t1 * t * mid.x + t * t * to.x,
        t1 * t1 * from.y + 2 * t1 * t * mid.y + t * t * to.y,
        t1 * t1 * from.z + 2 * t1 * t * mid.z + t * t * to.z,
      ]);
    }
    return pts;
  }, [line.from, line.to]);

  const color = phaseToColor((line.phaseI + line.phaseJ) / 2);

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (lineRef.current?.material) {
      lineRef.current.material.dashOffset = -timeRef.current * 2.5;
      lineRef.current.material.opacity = line.coherence * (0.4 + 0.3 * Math.sin(timeRef.current * 2.5));
    }
  });

  if (line.coherence < 0.005) return null;

  return (
    <Line ref={lineRef} points={points} color={color}
      lineWidth={0.8 + line.coherence * 3.5}
      transparent opacity={line.coherence * 0.5}
      dashed dashScale={5} dashSize={0.12} gapSize={0.06} />
  );
};

// ─── Glass reference shell ─────────────────────────────────────────

const GlassShell: React.FC<{ numQubits: number }> = ({ numQubits }) => {
  const shellRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (shellRef.current) {
      shellRef.current.uniforms.uTime.value = timeRef.current;
      shellRef.current.uniforms.uCameraPos.value = camera.position;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  // Latitude rings
  const rings = useMemo(() => {
    const segments = 72;
    const result: { points: [number, number, number][]; weight: number }[] = [];
    for (let w = 0; w <= numQubits; w++) {
      const theta = Math.PI * w / numQubits;
      const pts: [number, number, number][] = [];
      for (let i = 0; i <= segments; i++) {
        const phi = (2 * Math.PI * i) / segments;
        pts.push([
          SPHERE_R * Math.sin(theta) * Math.cos(phi),
          SPHERE_R * Math.cos(theta),
          SPHERE_R * Math.sin(theta) * Math.sin(phi),
        ]);
      }
      result.push({ points: pts, weight: w });
    }
    return result;
  }, [numQubits]);

  return (
    <group ref={groupRef}>
      {/* Translucent glass sphere */}
      <mesh>
        <sphereGeometry args={[SPHERE_R, 64, 64]} />
        <shaderMaterial
          ref={shellRef}
          vertexShader={glassShellVertex}
          fragmentShader={glassShellFragment}
          transparent depthWrite={false}
          side={THREE.DoubleSide}
          uniforms={{
            uTime: { value: 0 },
            uCameraPos: { value: new THREE.Vector3() },
          }}
        />
      </mesh>

      {/* Latitude rings — glass-etched look */}
      {rings.map((ring) => (
        <Line key={`lat-${ring.weight}`} points={ring.points}
          color="#8899aa" lineWidth={ring.weight === 0 || ring.weight === numQubits ? 1 : 0.6}
          transparent opacity={ring.weight === 0 || ring.weight === numQubits ? 0.12 : 0.05} />
      ))}

      {/* Pole labels */}
      <Html position={[0, SPHERE_R * 1.3, 0]} center>
        <span style={{ fontSize: '12px', fontFamily: '"JetBrains Mono", monospace',
          color: 'rgba(150,160,180,0.5)', userSelect: 'none', pointerEvents: 'none',
          textShadow: '0 0 8px rgba(0,0,0,0.9)' }}>
          |{'0'.repeat(numQubits)}⟩
        </span>
      </Html>
      <Html position={[0, -SPHERE_R * 1.3, 0]} center>
        <span style={{ fontSize: '12px', fontFamily: '"JetBrains Mono", monospace',
          color: 'rgba(150,160,180,0.5)', userSelect: 'none', pointerEvents: 'none',
          textShadow: '0 0 8px rgba(0,0,0,0.9)' }}>
          |{'1'.repeat(numQubits)}⟩
        </span>
      </Html>
    </group>
  );
};

// ─── Particles ─────────────────────────────────────────────────────

const Particles: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const { positions, count } = useMemo(() => {
    const n = 300;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 2.0 + Math.random() * 4;
      const theta = Math.random() * Math.PI;
      const phi = Math.random() * Math.PI * 2;
      pos[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = r * Math.cos(theta);
      pos[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi);
    }
    return { positions: pos, count: n };
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.008;
      ref.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#556677" size={0.012} transparent opacity={0.35}
        sizeAttenuation depthWrite={false} />
    </points>
  );
};

// ─── Scene ─────────────────────────────────────────────────────────

const QSphereScene: React.FC = () => {
  const currentState = useSimulationStore((s) => s.currentState);
  const numQubits = useCircuitStore((s) => s.circuit.numQubits);
  const state = currentState || new Statevector(numQubits);

  const { points, lines } = useMemo(
    () => computeQSphere(state.amplitudes, state.numQubits),
    [state.amplitudes, state.numQubits]
  );

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 5, 2]} intensity={0.3} />
      <Particles />
      <GlassShell numQubits={numQubits} />
      {points.map((p) => <GlassOrb key={p.index} point={p} />)}
      {lines.map((l, i) => <CoherenceArc key={`c-${i}`} line={l} />)}
      <OrbitControls enableDamping dampingFactor={0.06} rotateSpeed={0.4}
        zoomSpeed={0.7} minDistance={2} maxDistance={8}
        enablePan={false} autoRotate autoRotateSpeed={0.25} />
    </>
  );
};

// ─── Info overlay ──────────────────────────────────────────────────

const InfoOverlay: React.FC = () => {
  const state = useSimulationStore((s) => s.currentState);
  const numQubits = useCircuitStore((s) => s.circuit.numQubits);
  const sv = state || new Statevector(numQubits);
  const probs = sv.probabilities();
  const nonZero = probs.filter(p => p > 0.001).length;
  const maxProb = Math.max(...probs);
  const entropy = -probs.reduce((s, p) => p > 0 ? s + p * Math.log2(p) : s, 0);

  return (
    <>
      {/* State info — top left, resizable */}
      <ResizableInfoPanel title="Q-Sphere" position="top-left" defaultWidth={300} defaultHeight={200}>
        <div className="text-[12px] text-white/[0.75] font-mono space-y-1.5 leading-relaxed">
          <div>Exact statevector on a unit sphere.</div>
          <div className="text-[11px] text-white/[0.55]">Latitude = Hamming weight of basis state</div>
          <div className="text-[11px] text-white/[0.55]">Orb size = probability |c_k|²</div>
          <div className="text-[11px] text-white/[0.55]">Orb color = complex phase arg(c_k)</div>
          <div className="text-[11px] text-white/[0.55]">Arcs = coherence |c_i·c_j*| (Hamming dist 1)</div>
          <div className="mt-2 pt-2 border-t border-white/[0.08] text-[11px] text-white/[0.6] space-y-0.5">
            <div>{nonZero} of {1 << numQubits} states occupied</div>
            <div>Max probability: {(maxProb * 100).toFixed(1)}%</div>
            <div>von Neumann entropy: {entropy.toFixed(2)} bits</div>
          </div>
        </div>
      </ResizableInfoPanel>

      {/* Phase legend — bottom left */}
      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-white/[0.08]">
        <div className="text-[11px] text-white/[0.5] font-mono mb-1.5">Phase → Color</div>
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

export const AbstractViz: React.FC = () => (
  <div className="w-full h-full relative">
    <Canvas
      camera={{ position: [2, 1.5, 3], fov: 38, near: 0.1, far: 50 }}
      gl={{
        antialias: true, alpha: true, powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.3,
      }}
      style={{ background: '#040407' }}
    >
      <QSphereScene />
    </Canvas>
    <InfoOverlay />
  </div>
);
