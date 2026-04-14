import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import type { BlochCoords } from '../../core/bloch';
import {
  blochGlowVertexShader,
  blochGlowFragmentShader,
  atmosphereVertexShader,
  atmosphereFragmentShader,
} from '../../shaders/blochShaders';

interface SingleBlochSphereProps {
  coords: BlochCoords;
  label: string;
  position: [number, number, number];
}

const SPHERE_RADIUS = 1;

// ─── Reference circles ─────────────────────────────────────────────

const ReferenceCircles: React.FC = () => {
  const segments = 64;

  const makeCircle = (axis: 'xy' | 'xz' | 'yz'): [number, number, number][] => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      const c = Math.cos(t) * SPHERE_RADIUS;
      const s = Math.sin(t) * SPHERE_RADIUS;
      if (axis === 'xy') pts.push([c, s, 0]);
      if (axis === 'xz') pts.push([c, 0, s]);
      if (axis === 'yz') pts.push([0, c, s]);
    }
    return pts;
  };

  return (
    <group>
      {/* Equator (XZ plane) — most prominent */}
      <Line points={makeCircle('xz')} color="#2a2a40" lineWidth={1} transparent opacity={0.5} />
      {/* XY meridian */}
      <Line points={makeCircle('xy')} color="#2a2a40" lineWidth={1} transparent opacity={0.25} />
      {/* YZ meridian */}
      <Line points={makeCircle('yz')} color="#2a2a40" lineWidth={1} transparent opacity={0.25} />
    </group>
  );
};

// ─── Axis lines and labels ─────────────────────────────────────────

const AxisMarkers: React.FC = () => {
  const len = SPHERE_RADIUS * 1.3;
  const labelOff = SPHERE_RADIUS * 1.65;

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontFamily: '"JetBrains Mono", monospace',
    fontWeight: 600,
    userSelect: 'none',
    pointerEvents: 'none',
    textShadow: '0 0 6px rgba(0,0,0,0.9)',
  };

  return (
    <group>
      {/* X axis */}
      <Line points={[[-len, 0, 0], [len, 0, 0]]} color="#4a4a60" lineWidth={1} transparent opacity={0.35} />
      <Html position={[labelOff, 0, 0]} center>
        <span style={{ ...labelStyle, color: '#7a7a90' }}>X</span>
      </Html>

      {/* Y axis (poles: |0⟩ at top, |1⟩ at bottom) */}
      <Line points={[[0, -len, 0], [0, len, 0]]} color="#4a4a60" lineWidth={1} transparent opacity={0.35} />
      <Html position={[0, labelOff, 0]} center>
        <span style={{ ...labelStyle, color: '#9999b0' }}>|0⟩</span>
      </Html>
      <Html position={[0, -labelOff, 0]} center>
        <span style={{ ...labelStyle, color: '#9999b0' }}>|1⟩</span>
      </Html>

      {/* Z axis */}
      <Line points={[[0, 0, -len], [0, 0, len]]} color="#4a4a60" lineWidth={1} transparent opacity={0.35} />
      <Html position={[0, 0, labelOff]} center>
        <span style={{ ...labelStyle, color: '#7a7a90' }}>Y</span>
      </Html>
    </group>
  );
};

// ─── State vector arrow ────────────────────────────────────────────

const StateArrow: React.FC<{
  target: [number, number, number];
  purity: number;
}> = ({ target, purity }) => {
  const [tx, ty, tz] = target;
  const len = Math.sqrt(tx * tx + ty * ty + tz * tz);

  const dir = len > 0.001
    ? new THREE.Vector3(tx, ty, tz).normalize()
    : new THREE.Vector3(0, 1, 0);
  const arrowLen = len * SPHERE_RADIUS;

  const quaternion = useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    return q;
  }, [dir.x, dir.y, dir.z]);

  if (len < 0.01) return null;

  const opacity = 0.3 + purity * 0.7;

  return (
    <group quaternion={quaternion}>
      {/* Shaft */}
      <mesh position={[0, arrowLen * 0.4, 0]}>
        <cylinderGeometry args={[0.022, 0.022, arrowLen * 0.8, 8]} />
        <meshBasicMaterial color="#e8e8f0" transparent opacity={opacity} />
      </mesh>
      {/* Arrowhead cone */}
      <mesh position={[0, arrowLen * 0.85, 0]}>
        <coneGeometry args={[0.055, 0.14, 8]} />
        <meshBasicMaterial color="#e8e8f0" transparent opacity={opacity + 0.1} />
      </mesh>
      {/* Bright tip dot */}
      <mesh position={[0, arrowLen, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#fde74c" />
      </mesh>
    </group>
  );
};

// ─── Main Bloch Sphere ─────────────────────────────────────────────

export const SingleBlochSphere: React.FC<SingleBlochSphereProps> = ({
  coords,
  label,
  position,
}) => {
  const glowRef = useRef<THREE.ShaderMaterial>(null);
  const atmoRef = useRef<THREE.ShaderMaterial>(null);
  const timeRef = useRef(0);

  // Smoothly interpolated values
  const smoothRef = useRef({
    x: coords.x, y: coords.y, z: coords.z,
    purity: coords.purity,
  });

  useFrame((_, delta) => {
    timeRef.current += delta;

    // Exponential smooth interpolation
    const lerp = 1 - Math.pow(0.0005, delta);
    const s = smoothRef.current;
    s.x += (coords.x - s.x) * lerp;
    s.y += (coords.y - s.y) * lerp;
    s.z += (coords.z - s.z) * lerp;
    s.purity += (coords.purity - s.purity) * lerp;

    // Phase from azimuthal angle of Bloch vector
    const phase = Math.atan2(s.z, s.x);

    if (glowRef.current) {
      const u = glowRef.current.uniforms;
      u.uTime.value = timeRef.current;
      u.uPurity.value = s.purity;
      u.uPhase.value = phase;
      u.uBlochVector.value.set(s.x, s.y, s.z);
    }

    if (atmoRef.current) {
      const u = atmoRef.current.uniforms;
      u.uPurity.value = s.purity;
      u.uPhase.value = phase;
    }
  });

  // Map Bloch vector to Three.js coords
  // Convention: Bloch z → Three.js Y (poles), Bloch x → Three.js X, Bloch y → Three.js Z
  const arrowTarget: [number, number, number] = [coords.x, coords.z, coords.y];
  const blochMag = Math.sqrt(coords.x ** 2 + coords.y ** 2 + coords.z ** 2);

  return (
    <group position={position}>
      {/* Qubit label */}
      <Html position={[0, SPHERE_RADIUS * 1.95, 0]} center>
        <span style={{
          fontSize: '14px',
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 500,
          color: '#9a9ab0',
          userSelect: 'none',
          pointerEvents: 'none',
          textShadow: '0 0 10px rgba(0,0,0,0.9)',
        }}>
          {label}
        </span>
      </Html>

      {/* Bloch vector coordinates — positioned to the right to avoid |1⟩ overlap */}
      <Html position={[SPHERE_RADIUS * 1.5, -SPHERE_RADIUS * 1.2, 0]} center>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          userSelect: 'none',
          pointerEvents: 'none',
          textShadow: '0 0 8px rgba(0,0,0,0.9)',
          textAlign: 'left',
          lineHeight: 1.5,
          whiteSpace: 'nowrap',
        }}>
          <div style={{ fontSize: '10px', color: '#9898b0' }}>
            r = ({coords.x.toFixed(2)}, {coords.y.toFixed(2)}, {coords.z.toFixed(2)})
          </div>
          <div style={{ fontSize: '9px', color: blochMag > 0.95 ? '#8a9a7a' : blochMag < 0.1 ? '#9a7a7a' : '#7a7a90' }}>
            |r⃗| = {blochMag.toFixed(3)}{blochMag > 0.95 ? '  pure' : blochMag < 0.1 ? '  mixed' : ''}
          </div>
        </div>
      </Html>

      {/* Reference geometry */}
      <ReferenceCircles />
      <AxisMarkers />

      {/* Main glowing sphere */}
      <mesh>
        <sphereGeometry args={[SPHERE_RADIUS, 48, 48]} />
        <shaderMaterial
          ref={glowRef}
          vertexShader={blochGlowVertexShader}
          fragmentShader={blochGlowFragmentShader}
          transparent
          depthWrite={false}
          side={THREE.FrontSide}
          uniforms={{
            uTime: { value: 0 },
            uPurity: { value: coords.purity },
            uPhase: { value: 0 },
            uBlochVector: { value: new THREE.Vector3(coords.x, coords.y, coords.z) },
            uOpacity: { value: 1.0 },
          }}
        />
      </mesh>

      {/* Outer atmosphere */}
      <mesh scale={[1.18, 1.18, 1.18]}>
        <sphereGeometry args={[SPHERE_RADIUS, 32, 32]} />
        <shaderMaterial
          ref={atmoRef}
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uPurity: { value: coords.purity },
            uPhase: { value: 0 },
            uOpacity: { value: 0.5 },
          }}
        />
      </mesh>

      {/* State vector arrow */}
      <StateArrow target={arrowTarget} purity={coords.purity} />
    </group>
  );
};
