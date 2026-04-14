// Liquid glass state orb shaders.
// Phase → color is EXACT (sunset ramp on arg(c_k)).
// Glass aesthetic: fresnel reflection, chromatic aberration,
// subsurface glow, caustic-like highlights.

export const glassOrbVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewPos = mvPos.xyz;
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
    gl_Position = projectionMatrix * mvPos;
  }
`;

export const glassOrbFragmentShader = /* glsl */ `
  precision highp float;

  uniform float uPhase;
  uniform float uProbability;
  uniform float uTime;
  uniform vec3 uCameraPos;

  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;
  varying vec2 vUv;

  vec3 sunsetRamp(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 c0 = vec3(0.102, 0.020, 0.200);
    vec3 c1 = vec3(0.420, 0.114, 0.369);
    vec3 c2 = vec3(0.788, 0.259, 0.467);
    vec3 c3 = vec3(0.949, 0.541, 0.180);
    vec3 c4 = vec3(0.992, 0.906, 0.298);

    if (t < 0.25) return mix(c0, c1, t / 0.25);
    if (t < 0.5)  return mix(c1, c2, (t - 0.25) / 0.25);
    if (t < 0.75) return mix(c2, c3, (t - 0.5) / 0.25);
    return mix(c3, c4, (t - 0.75) / 0.25);
  }

  // Schlick fresnel approximation
  float fresnelSchlick(float cosTheta, float F0) {
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
  }

  void main() {
    vec3 viewDir = normalize(uCameraPos - vWorldPos);
    vec3 N = normalize(vWorldNormal);
    float NdotV = max(dot(N, viewDir), 0.0);

    // Phase → base color (EXACT quantum information)
    float phaseNorm = (uPhase + 3.14159265) / (2.0 * 3.14159265);
    vec3 baseColor = sunsetRamp(phaseNorm);

    // ── Liquid glass effect ──────────────────────────────────────

    // Fresnel: strong reflection at edges, transparent at center
    float fresnel = fresnelSchlick(NdotV, 0.04);

    // Chromatic aberration: shift color channels slightly based on angle
    // This creates rainbow caustic-like edges
    float aberration = pow(1.0 - NdotV, 4.0) * 0.3;
    vec3 chromaticShift = vec3(
      sunsetRamp(fract(phaseNorm + aberration * 0.15)).r,
      sunsetRamp(phaseNorm).g,
      sunsetRamp(fract(phaseNorm - aberration * 0.15)).b
    );

    // Subsurface scattering: light passing through the orb
    // Approximated as a backlight effect
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
    float subsurface = pow(max(dot(-viewDir, N + lightDir * 0.5), 0.0), 3.0) * 0.4;

    // Internal glow — strongest at center, colored by phase
    float coreGlow = pow(NdotV, 2.5) * 0.7;

    // Specular highlight — sharp, glassy
    vec3 halfVec = normalize(viewDir + lightDir);
    float spec = pow(max(dot(N, halfVec), 0.0), 80.0) * 0.6;
    float spec2 = pow(max(dot(N, halfVec), 0.0), 20.0) * 0.15;

    // Rim light — bright edge for glass feel
    float rim = pow(1.0 - NdotV, 3.0) * 0.5;

    // Gentle time pulse synced to phase
    float pulse = 1.0 + 0.05 * sin(uTime * 2.0 + uPhase * 2.0);

    // ── Compose final color ──────────────────────────────────────

    vec3 color = vec3(0.0);

    // Core: phase color visible through the glass
    color += baseColor * coreGlow * pulse;

    // Subsurface: warm transmission
    color += baseColor * subsurface * 0.8;

    // Chromatic rim: rainbow caustics at edges
    color += chromaticShift * rim * 0.6;

    // Fresnel reflection: subtle bright edge
    color += vec3(0.8, 0.85, 0.9) * fresnel * 0.3;

    // Specular: sharp glass highlights
    color += vec3(1.0, 0.98, 0.95) * spec;
    color += baseColor * spec2;

    // Alpha: glass-like — transparent center, opaque rim
    float alpha = 0.15 + coreGlow * 0.5 + rim * 0.6 + fresnel * 0.3 + subsurface * 0.3;
    alpha *= min(1.0, uProbability * 3.0 + 0.4);

    gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.95));
  }
`;

// ─── Glass atmosphere (outer glow layer) ───────────────────────────

export const glassAtmosphereVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPos;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vViewPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const glassAtmosphereFragment = /* glsl */ `
  uniform float uPhase;
  uniform float uProbability;
  uniform float uTime;

  varying vec3 vNormal;
  varying vec3 vViewPos;

  vec3 sunsetRamp(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 c0 = vec3(0.102, 0.020, 0.200);
    vec3 c1 = vec3(0.420, 0.114, 0.369);
    vec3 c2 = vec3(0.788, 0.259, 0.467);
    vec3 c3 = vec3(0.949, 0.541, 0.180);
    vec3 c4 = vec3(0.992, 0.906, 0.298);

    if (t < 0.25) return mix(c0, c1, t / 0.25);
    if (t < 0.5)  return mix(c1, c2, (t - 0.25) / 0.25);
    if (t < 0.75) return mix(c2, c3, (t - 0.5) / 0.25);
    return mix(c3, c4, (t - 0.75) / 0.25);
  }

  void main() {
    vec3 viewDir = normalize(-vViewPos);
    float fresnel = 1.0 - abs(dot(viewDir, vNormal));

    float phaseNorm = (uPhase + 3.14159265) / (2.0 * 3.14159265);
    vec3 color = sunsetRamp(phaseNorm);

    // Softer, wider glow for liquid glass feel
    float glow = pow(fresnel, 2.0) * 0.5;
    float pulse = 1.0 + 0.08 * sin(uTime * 1.5 + uPhase);

    gl_FragColor = vec4(color * 1.3, glow * uProbability * pulse);
  }
`;

// ─── Glass reference sphere shell ──────────────────────────────────

export const glassShellVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vViewPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const glassShellFragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec3 uCameraPos;

  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;

  float fresnelSchlick(float cosTheta, float F0) {
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
  }

  void main() {
    vec3 viewDir = normalize(uCameraPos - vWorldPos);
    vec3 N = normalize(vWorldNormal);
    float NdotV = max(dot(N, viewDir), 0.0);

    float fresnel = fresnelSchlick(NdotV, 0.02);

    // Very subtle glass shell — mostly invisible, faint edge
    float rim = pow(1.0 - NdotV, 4.0);

    // Faint grid lines on the shell (latitude markers)
    float lat = acos(clamp(N.y, -1.0, 1.0));
    float gridLat = smoothstep(0.015, 0.0, abs(fract(lat / 0.628) - 0.5) - 0.48);

    vec3 color = vec3(0.5, 0.6, 0.7);
    float alpha = rim * 0.06 + fresnel * 0.04 + gridLat * 0.03;

    // Subtle time shimmer
    alpha *= 1.0 + 0.1 * sin(uTime * 0.5 + lat * 3.0);

    gl_FragColor = vec4(color, alpha);
  }
`;
