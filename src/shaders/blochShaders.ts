// Vertex and fragment shaders for the Bloch sphere glow effect.
// These are imported as strings and compiled at runtime by Three.js.

export const blochGlowVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const blochGlowFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uPurity;       // 0 = maximally mixed, 1 = pure state
  uniform float uPhase;        // Phase angle [-pi, pi] mapped to hue
  uniform vec3 uBlochVector;   // (rx, ry, rz) Bloch vector
  uniform float uOpacity;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  // Sunset color ramp matching the Mathematica SunsetColors palette
  vec3 sunsetRamp(float t) {
    // 5-stop gradient: deep purple → magenta → coral → orange → gold
    vec3 c0 = vec3(0.102, 0.020, 0.200);  // #1a0533
    vec3 c1 = vec3(0.420, 0.114, 0.369);  // #6b1d5e
    vec3 c2 = vec3(0.788, 0.259, 0.467);  // #c94277
    vec3 c3 = vec3(0.949, 0.541, 0.180);  // #f28a2e
    vec3 c4 = vec3(0.992, 0.906, 0.298);  // #fde74c

    t = clamp(t, 0.0, 1.0);
    if (t < 0.25) return mix(c0, c1, t / 0.25);
    if (t < 0.5)  return mix(c1, c2, (t - 0.25) / 0.25);
    if (t < 0.75) return mix(c2, c3, (t - 0.5) / 0.25);
    return mix(c3, c4, (t - 0.75) / 0.25);
  }

  void main() {
    // View direction
    vec3 viewDir = normalize(-vPosition);
    float fresnel = 1.0 - abs(dot(viewDir, vNormal));

    // Phase-based color from sunset ramp
    float phaseNorm = (uPhase + 3.14159265) / (2.0 * 3.14159265);
    vec3 baseColor = sunsetRamp(phaseNorm);

    // Purity drives overall glow intensity
    float glowStrength = 0.3 + uPurity * 0.7;

    // Fresnel-based rim glow — stronger at edges
    float rimGlow = pow(fresnel, 2.5) * glowStrength;

    // Inner core glow based on Bloch vector alignment with view
    float blochLen = length(uBlochVector);
    vec3 blochDir = blochLen > 0.001 ? normalize(uBlochVector) : vec3(0.0, 0.0, 1.0);

    // Subtle time-varying shimmer
    float shimmer = 0.02 * sin(uTime * 2.0 + vUv.x * 12.0) * sin(uTime * 1.5 + vUv.y * 10.0);

    // Combine: base surface + rim glow + shimmer
    float alpha = (0.08 + rimGlow * 0.6 + shimmer) * uOpacity;
    vec3 color = baseColor * (0.6 + rimGlow * 0.8);

    // Add a bright core highlight where the Bloch vector points
    float coreDot = dot(vNormal, blochDir);
    float coreHighlight = smoothstep(0.7, 1.0, coreDot) * blochLen * 0.4;
    color += vec3(1.0, 0.95, 0.9) * coreHighlight;

    // Add subtle latitude/longitude grid lines
    float lat = acos(clamp(vNormal.y, -1.0, 1.0));
    float lon = atan(vNormal.z, vNormal.x);
    float gridLat = smoothstep(0.02, 0.0, abs(fract(lat / 0.5236) - 0.5) - 0.47); // every 30°
    float gridLon = smoothstep(0.02, 0.0, abs(fract(lon / 0.5236) - 0.5) - 0.47);
    float grid = max(gridLat, gridLon) * 0.08 * uOpacity;
    color += vec3(0.5, 0.5, 0.7) * grid;

    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── Outer atmosphere glow (additive blend, larger sphere) ─────────

export const atmosphereVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const atmosphereFragmentShader = /* glsl */ `
  uniform float uPurity;
  uniform float uPhase;
  uniform float uOpacity;

  varying vec3 vNormal;
  varying vec3 vPosition;

  vec3 sunsetRamp(float t) {
    vec3 c0 = vec3(0.102, 0.020, 0.200);
    vec3 c1 = vec3(0.420, 0.114, 0.369);
    vec3 c2 = vec3(0.788, 0.259, 0.467);
    vec3 c3 = vec3(0.949, 0.541, 0.180);
    vec3 c4 = vec3(0.992, 0.906, 0.298);

    t = clamp(t, 0.0, 1.0);
    if (t < 0.25) return mix(c0, c1, t / 0.25);
    if (t < 0.5)  return mix(c1, c2, (t - 0.25) / 0.25);
    if (t < 0.75) return mix(c2, c3, (t - 0.5) / 0.25);
    return mix(c3, c4, (t - 0.75) / 0.25);
  }

  void main() {
    vec3 viewDir = normalize(-vPosition);
    float fresnel = 1.0 - abs(dot(viewDir, vNormal));

    float phaseNorm = (uPhase + 3.14159265) / (2.0 * 3.14159265);
    vec3 color = sunsetRamp(phaseNorm);

    float intensity = pow(fresnel, 3.0) * uPurity * 0.5 * uOpacity;

    gl_FragColor = vec4(color, intensity);
  }
`;

// ─── Entanglement tendril shader ───────────────────────────────────

export const entanglementVertexShader = /* glsl */ `
  attribute float aProgress; // 0-1 along the curve
  varying float vProgress;
  varying vec3 vPos;

  void main() {
    vProgress = aProgress;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const entanglementFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uStrength;    // Entanglement strength (concurrence)
  uniform vec3 uColor;

  varying float vProgress;
  varying vec3 vPos;

  void main() {
    // Flowing energy pulse along the tendril
    float pulse = sin(vProgress * 20.0 - uTime * 4.0) * 0.5 + 0.5;
    pulse = pow(pulse, 3.0);

    // Fade at endpoints
    float edgeFade = smoothstep(0.0, 0.1, vProgress) * smoothstep(1.0, 0.9, vProgress);

    float alpha = (0.15 + pulse * 0.5) * uStrength * edgeFade;
    vec3 color = uColor * (0.6 + pulse * 0.4);

    gl_FragColor = vec4(color, alpha);
  }
`;
