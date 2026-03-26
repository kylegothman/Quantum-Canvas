import{r as i,a as z,u as B,S as O,j as r,b as G,R as Q}from"./index-CSh4dgNx.js";const Y=`
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,H=`
  precision highp float;

  uniform float uTime;
  uniform int uNumQubits;
  uniform int uDim;           // 2^numQubits

  // Statevector: real and imaginary parts as separate arrays
  // Max 64 amplitudes (6 qubits)
  uniform float uAmpsRe[64];
  uniform float uAmpsIm[64];
  uniform float uScale;       // Zoom level
  uniform float uBrightness;  // Overall brightness multiplier

  varying vec2 vUv;

  // ─── Sunset color ramp ───────────────────────────────────────────

  vec3 sunsetRamp(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 c0 = vec3(0.0, 0.0, 0.02);       // Near black
    vec3 c1 = vec3(0.102, 0.020, 0.200);   // Deep purple
    vec3 c2 = vec3(0.420, 0.114, 0.369);   // Magenta
    vec3 c3 = vec3(0.788, 0.259, 0.467);   // Coral
    vec3 c4 = vec3(0.949, 0.541, 0.180);   // Orange
    vec3 c5 = vec3(0.992, 0.906, 0.298);   // Gold
    vec3 c6 = vec3(1.0, 1.0, 0.95);        // Near white (hotspot)

    if (t < 0.05) return mix(c0, c1, t / 0.05);
    if (t < 0.15) return mix(c1, c2, (t - 0.05) / 0.1);
    if (t < 0.3)  return mix(c2, c3, (t - 0.15) / 0.15);
    if (t < 0.5)  return mix(c3, c4, (t - 0.3) / 0.2);
    if (t < 0.75) return mix(c4, c5, (t - 0.5) / 0.25);
    return mix(c5, c6, (t - 0.75) / 0.25);
  }

  // ─── Spatial mode functions ──────────────────────────────────────
  // These map each computational basis state |k⟩ to a hydrogen-like
  // orbital shape φ_k(x, y). Not physically rigorous for qubits,
  // but creates stunning interference patterns in superpositions.

  // Gaussian radial envelope
  float radialEnvelope(float r, float n) {
    float a = 1.5 + n * 0.8;  // "Bohr radius" scaling with quantum number
    return exp(-r / a);
  }

  // Associated Laguerre-like polynomial (simplified)
  float laguerreApprox(float x, int n, int l) {
    if (n == 0) return 1.0;
    if (n == 1) return 1.0 - x;
    if (n == 2) return 1.0 - 2.0 * x + 0.5 * x * x;
    return 1.0 - float(n) * x + float(n * (n - 1)) / 6.0 * x * x;
  }

  // Spherical harmonic angular part (real, for 2D cross-section)
  // θ = angle from z-axis, we're in the xz plane so φ = 0 or π
  vec2 angularMode(float cosTheta, float sinTheta, int l, int m) {
    // Returns (real, imag) of Y_l^m evaluated in xz plane

    if (l == 0) return vec2(0.2821, 0.0);  // Y_0^0

    if (l == 1) {
      if (m == 0) return vec2(0.4886 * cosTheta, 0.0);         // Y_1^0
      if (m == 1) return vec2(-0.3455 * sinTheta, 0.0);        // Y_1^1 (real part in xz)
      return vec2(0.3455 * sinTheta, 0.0);                      // Y_1^-1
    }

    if (l == 2) {
      if (m == 0) return vec2(0.3154 * (3.0 * cosTheta * cosTheta - 1.0), 0.0);
      if (m == 1) return vec2(-0.3862 * sinTheta * cosTheta, 0.0);
      if (m == 2) return vec2(0.3862 * sinTheta * sinTheta, 0.0);
      return vec2(0.3862 * sinTheta * cosTheta, 0.0);
    }

    if (l == 3) {
      if (m == 0) return vec2(0.3732 * cosTheta * (5.0 * cosTheta * cosTheta - 3.0) / 2.0, 0.0);
      if (m == 1) return vec2(-0.3232 * sinTheta * (5.0 * cosTheta * cosTheta - 1.0), 0.0);
      return vec2(0.3232 * sinTheta * sinTheta * cosTheta, 0.0);
    }

    return vec2(0.2821, 0.0);
  }

  // Map basis state index to quantum numbers (n, l, m)
  // Creative mapping that produces visually interesting orbitals
  vec3 basisToQuantumNumbers(int idx, int dim) {
    // For small systems, hand-craft the mapping
    if (dim <= 2) {
      // 1 qubit: |0⟩ → (1,0,0) s-orbital, |1⟩ → (2,1,0) p-orbital
      if (idx == 0) return vec3(1.0, 0.0, 0.0);
      return vec3(2.0, 1.0, 0.0);
    }

    if (dim <= 4) {
      // 2 qubits: s, p, d-like, f-like
      if (idx == 0) return vec3(1.0, 0.0, 0.0);  // 1s
      if (idx == 1) return vec3(2.0, 1.0, 0.0);  // 2p
      if (idx == 2) return vec3(3.0, 1.0, 1.0);  // 3p (m=1)
      return vec3(3.0, 2.0, 0.0);                  // 3d
    }

    if (dim <= 8) {
      // 3 qubits
      if (idx == 0) return vec3(1.0, 0.0, 0.0);
      if (idx == 1) return vec3(2.0, 1.0, 0.0);
      if (idx == 2) return vec3(2.0, 1.0, 1.0);
      if (idx == 3) return vec3(3.0, 0.0, 0.0);
      if (idx == 4) return vec3(3.0, 1.0, 0.0);
      if (idx == 5) return vec3(3.0, 2.0, 0.0);
      if (idx == 6) return vec3(3.0, 2.0, 1.0);
      return vec3(4.0, 3.0, 1.0);
    }

    // General case: distribute across shells
    float n = floor(sqrt(float(idx))) + 1.0;
    float l = mod(float(idx), n);
    float m = mod(float(idx), max(1.0, l * 2.0 + 1.0)) - l;
    return vec3(n, l, abs(m));
  }

  // Evaluate a single orbital mode at position (x, z) in the xz plane
  vec2 evaluateMode(vec2 pos, vec3 nlm) {
    float n = nlm.x;
    float l = nlm.y;
    float m = nlm.z;

    float r = length(pos) + 0.001;
    float cosT = pos.y / r;  // z in our 2D corresponds to y-up
    float sinT = sqrt(max(0.0, 1.0 - cosT * cosT));

    // Radial part: r^l * exp(-r/n) * L_{n-l-1}^{2l+1}(2r/n)
    float radial = pow(r, l) * radialEnvelope(r, n);
    radial *= laguerreApprox(2.0 * r / max(1.0, n), int(n - 1.0 - l), int(2.0 * l + 1.0));

    // Angular part
    vec2 angular = angularMode(cosT, sinT, int(l), int(m));

    // Combine: sqrt(4π) * r * R(r) * Y(θ,φ)
    float scale = 3.5449 * r;  // sqrt(4π) ≈ 3.5449
    return angular * radial * scale;
  }

  // ─── Main ────────────────────────────────────────────────────────

  void main() {
    // Map UV to spatial coordinates centered at origin
    vec2 pos = (vUv - 0.5) * 2.0 * uScale;

    // Compute superposition: ψ(x,z) = Σ_k c_k * φ_k(x,z)
    vec2 psi = vec2(0.0);  // (real, imag)

    for (int k = 0; k < 64; k++) {
      if (k >= uDim) break;

      float re = uAmpsRe[k];
      float im = uAmpsIm[k];

      // Skip negligible amplitudes
      if (abs(re) + abs(im) < 0.001) continue;

      // Get quantum numbers for this basis state
      vec3 nlm = basisToQuantumNumbers(k, uDim);

      // Evaluate spatial mode
      vec2 mode = evaluateMode(pos, nlm);

      // Complex multiply: c_k * φ_k
      psi.x += re * mode.x - im * mode.y;
      psi.y += re * mode.y + im * mode.x;
    }

    // Probability density |ψ|²
    float density = psi.x * psi.x + psi.y * psi.y;

    // Phase of ψ — the complex argument at this spatial point
    float phase = atan(psi.y, psi.x);

    // ── Scientifically correct color mapping ──────────────────────
    //   Hue = phase arg(ψ) through sunset ramp
    //   Brightness = |ψ|² probability density

    // Phase → color
    float phaseNorm = (phase + 3.14159265) / (2.0 * 3.14159265);
    vec3 phaseColor = sunsetRamp(phaseNorm);

    // Density → brightness with perceptual tone curve
    float brightness = pow(density * uBrightness, 0.32);
    brightness = clamp(brightness, 0.0, 1.0);

    // Combine
    vec3 color = phaseColor * brightness;

    // Bloom at density peaks — hot white core that preserves phase hue
    float bloom = smoothstep(0.6, 1.0, brightness);
    color += vec3(0.9, 0.88, 0.82) * bloom * 0.35;
    color += phaseColor * bloom * 0.15; // Phase-tinted bloom

    // Subtle radial grid for spatial context (scientific visualization style)
    float r = length(pos);
    float gridR = smoothstep(0.04, 0.0, abs(fract(r / 3.0) - 0.5) - 0.49);
    float gridAngle = smoothstep(0.02, 0.0, abs(fract(atan(pos.y, pos.x) / 0.7854) - 0.5) - 0.49);
    float grid = max(gridR, gridAngle) * 0.02 * (1.0 - brightness * 0.8);
    color += vec3(0.3, 0.35, 0.4) * grid;

    // Subtle vignette
    float vignette = 1.0 - 0.2 * length(vUv - 0.5);
    color *= vignette;

    // Film-like tone mapping for richer shadows
    color = color / (color + vec3(0.8)) * 1.2;

    gl_FragColor = vec4(color, 1.0);
  }
`,W=()=>{const o=i.useRef(null),f=i.useRef(null),p=i.useRef(null),l=i.useRef(null),h=i.useRef(0),L=i.useRef(Date.now()),[b,P]=i.useState(10),[y,D]=i.useState(80),A=i.useRef(b),S=i.useRef(y);A.current=b,S.current=y;const w=i.useRef(new Float32Array(64)),R=i.useRef(new Float32Array(64)),T=i.useRef(Date.now()),U=.15,k=i.useCallback(()=>{const t=o.current;if(!t)return;const e=t.getContext("webgl",{antialias:!1,premultipliedAlpha:!1});if(!e)return;p.current=e;const s=F(e,e.VERTEX_SHADER,Y),u=F(e,e.FRAGMENT_SHADER,H);if(!s||!u)return;const n=e.createProgram();if(e.attachShader(n,s),e.attachShader(n,u),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){console.error("Orbital shader link error:",e.getProgramInfoLog(n));return}l.current=n;const x=new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]),v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,x,e.STATIC_DRAW);const m=e.getAttribLocation(n,"position"),c=e.getAttribLocation(n,"uv");e.enableVertexAttribArray(m),e.enableVertexAttribArray(c),e.vertexAttribPointer(m,2,e.FLOAT,!1,16,0),e.vertexAttribPointer(c,2,e.FLOAT,!1,16,8)},[]),d=i.useCallback(()=>{const t=p.current,e=l.current,s=o.current,u=f.current;if(!t||!e||!s||!u){h.current=requestAnimationFrame(d);return}const n=u.getBoundingClientRect(),x=Math.min(window.devicePixelRatio,2),v=n.width*x,m=n.height*x;(s.width!==v||s.height!==m)&&(s.width=v,s.height=m,s.style.width=`${n.width}px`,s.style.height=`${n.height}px`),t.viewport(0,0,s.width,s.height),t.useProgram(e);const c=Date.now(),E=Math.min((c-T.current)/1e3,.1);T.current=c;const N=1-Math.exp(-E/U),I=(c-L.current)/1e3;t.uniform1f(t.getUniformLocation(e,"uTime"),I);const{currentState:M}=z.getState(),q=B.getState().circuit.numQubits,g=M||new O(q),j=g.dim;t.uniform1i(t.getUniformLocation(e,"uNumQubits"),g.numQubits),t.uniform1i(t.getUniformLocation(e,"uDim"),j),t.uniform1f(t.getUniformLocation(e,"uScale"),A.current),t.uniform1f(t.getUniformLocation(e,"uBrightness"),S.current);const _=new Float32Array(64),C=new Float32Array(64);for(let a=0;a<j&&a<64;a++)_[a]=g.amplitudes[a].re,C[a]=g.amplitudes[a].im;for(let a=0;a<64;a++)w.current[a]+=(_[a]-w.current[a])*N,R.current[a]+=(C[a]-R.current[a])*N;t.uniform1fv(t.getUniformLocation(e,"uAmpsRe"),w.current),t.uniform1fv(t.getUniformLocation(e,"uAmpsIm"),R.current),t.drawArrays(t.TRIANGLE_STRIP,0,4),h.current=requestAnimationFrame(d)},[]);return i.useEffect(()=>(k(),T.current=Date.now(),h.current=requestAnimationFrame(d),()=>cancelAnimationFrame(h.current)),[k,d]),r.jsxs("div",{ref:f,className:"w-full h-full relative bg-black",children:[r.jsx("canvas",{ref:o,className:"w-full h-full"}),r.jsxs("div",{className:"absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-white/[0.08]",children:[r.jsxs("div",{className:"flex items-center gap-5",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-[11px] text-white/[0.45] font-mono",children:"Zoom"}),r.jsx("input",{type:"range",min:3,max:30,step:.5,value:b,onChange:t=>P(parseFloat(t.target.value)),className:"w-24 h-[3px] accent-gray-500 cursor-pointer"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-[11px] text-white/[0.45] font-mono",children:"Brightness"}),r.jsx("input",{type:"range",min:5,max:200,step:1,value:y,onChange:t=>D(parseFloat(t.target.value)),className:"w-24 h-[3px] accent-gray-500 cursor-pointer"})]})]}),r.jsxs("div",{className:"mt-2 pt-2 border-t border-white/[0.04]",children:[r.jsx("div",{className:"text-[11px] text-white/[0.45] font-mono mb-1",children:"Phase arg(ψ) → Color"}),r.jsx("div",{className:"flex items-center gap-px",children:Array.from({length:28},(t,e)=>r.jsx("div",{className:"w-2 h-3 rounded-sm",style:{backgroundColor:G(-Math.PI+2*Math.PI*e/27)}},e))}),r.jsxs("div",{className:"flex justify-between text-[9px] text-white/[0.2] font-mono mt-0.5",children:[r.jsx("span",{children:"−π"}),r.jsx("span",{children:"0"}),r.jsx("span",{children:"π"})]})]})]}),r.jsx(Q,{title:"Orbital Density",position:"top-right",defaultWidth:300,defaultHeight:160,children:r.jsxs("div",{className:"text-[12px] text-white/[0.75] font-mono space-y-1.5 leading-relaxed",children:[r.jsx("div",{children:"Spatial wavefunction |ψ(x,z)|² in the xz cross-section."}),r.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Each basis state |k⟩ maps to a hydrogen-like spatial mode function φₖ(x,z)."}),r.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Color = complex phase arg(ψ) at each point."}),r.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Brightness = probability density |ψ|²."}),r.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Interference patterns between modes reveal quantum superposition."})]})})]})};function F(o,f,p){const l=o.createShader(f);return l?(o.shaderSource(l,p),o.compileShader(l),o.getShaderParameter(l,o.COMPILE_STATUS)?l:(console.error("Shader compile error:",o.getShaderInfoLog(l)),o.deleteShader(l),null)):null}export{W as OrbitalDensity};
