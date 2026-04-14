import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface EntanglementLineProps {
  from: [number, number, number];
  to: [number, number, number];
  strength: number; // 0-1 concurrence
}

export const EntanglementLine: React.FC<EntanglementLineProps> = ({
  from,
  to,
  strength,
}) => {
  const lineRef = useRef<any>(null);
  const timeRef = useRef(0);

  // Build curved path between spheres with a gentle sag
  const points = useMemo((): [number, number, number][] => {
    const segments = 40;
    const pts: [number, number, number][] = [];

    const [fx, fy, fz] = from;
    const [tx, ty, tz] = to;
    // Control point: midpoint with downward sag
    const mx = (fx + tx) / 2;
    const my = (fy + ty) / 2 - 0.5;
    const mz = (fz + tz) / 2;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const t1 = 1 - t;
      // Quadratic bezier
      const x = t1 * t1 * fx + 2 * t1 * t * mx + t * t * tx;
      const y = t1 * t1 * fy + 2 * t1 * t * my + t * t * ty;
      const z = t1 * t1 * fz + 2 * t1 * t * mz + t * t * tz;
      pts.push([x, y, z]);
    }

    return pts;
  }, [from, to]);

  // Animate the line's dash offset for flowing energy effect
  useFrame((_, delta) => {
    timeRef.current += delta;
    if (lineRef.current?.material) {
      const mat = lineRef.current.material;
      if (mat.dashOffset !== undefined) {
        mat.dashOffset = -timeRef.current * 2;
      }
      // Pulse opacity
      const pulse = 0.5 + 0.3 * Math.sin(timeRef.current * 3);
      mat.opacity = strength * pulse;
    }
  });

  if (strength < 0.03) return null;

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#ff2e63"
      lineWidth={1.5 + strength * 2}
      transparent
      opacity={strength * 0.6}
      dashed
      dashScale={8}
      dashSize={0.3}
      gapSize={0.15}
    />
  );
};
