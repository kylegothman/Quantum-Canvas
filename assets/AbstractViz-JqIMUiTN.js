import{j as e,a as S,u as N,S as z,r as p,R as F,b as R}from"./index-B4HpRCi3.js";import{C as W,a as T,O as A,V as g,u as b,b as V,D,A as w,B as j}from"./OrbitControls-4WzGmbQn.js";import{L as C,H as y}from"./Line-D4VZrqLg.js";const _=`
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
`,E=`
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
`,P=`
  varying vec3 vNormal;
  varying vec3 vViewPos;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vViewPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,M=`
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
`,I=`
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
`,k=`
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
`;function G(t){let s=0;for(;t;)s+=t&1,t>>=1;return s}const f=1.4;function O(t,s){const n=t.length,h=new Map;for(let r=0;r<n;r++){const o=G(r);h.has(o)||h.set(o,[]),h.get(o).push(r)}const l=[],a=new Array(n);for(const[r,o]of h){const u=Math.PI*r/s,v=o.length;o.forEach((c,m)=>{const d=v===1?0:2*Math.PI*m/v,x=new g(f*Math.sin(u)*Math.cos(d),f*Math.cos(u),f*Math.sin(u)*Math.sin(d));a[c]=x,l.push({index:c,label:"|"+c.toString(2).padStart(s,"0")+"⟩",probability:t[c].abs2(),phase:t[c].phase(),position:x,hammingW:r})})}const i=[];for(let r=0;r<n;r++)for(let o=0;o<s;o++){const u=r^1<<o;if(u<=r)continue;const v=t[r].abs2(),c=t[u].abs2(),m=Math.sqrt(v*c);m>.003&&i.push({from:a[r],to:a[u],coherence:m,phaseI:t[r].phase(),phaseJ:t[u].phase()})}return{points:l,lines:i}}const q=({point:t})=>{const s=p.useRef(null),n=p.useRef(null),h=p.useRef(null),l=p.useRef(0),a=p.useRef(t.probability),i=p.useRef(t.phase),{camera:r}=V();return b((o,u)=>{l.current+=u;const v=1-Math.exp(-u/.12);a.current+=(t.probability-a.current)*v,i.current+=(t.phase-i.current)*v;const c=Math.max(.02,Math.sqrt(a.current)*.3);h.current&&h.current.scale.setScalar(c);const m={uTime:l.current,uPhase:i.current,uProbability:a.current,uCameraPos:r.position};s.current&&Object.entries(m).forEach(([d,x])=>{s.current.uniforms[d]&&(s.current.uniforms[d].value=x)}),n.current&&(n.current.uniforms.uTime.value=l.current,n.current.uniforms.uPhase.value=i.current,n.current.uniforms.uProbability.value=a.current)}),t.probability<.001?null:e.jsxs("group",{position:t.position,children:[e.jsxs("group",{ref:h,scale:Math.sqrt(t.probability)*.3,children:[e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[1,48,48]}),e.jsx("shaderMaterial",{ref:s,vertexShader:_,fragmentShader:E,transparent:!0,depthWrite:!1,uniforms:{uPhase:{value:t.phase},uProbability:{value:t.probability},uTime:{value:0},uCameraPos:{value:new g}}})]}),e.jsxs("mesh",{scale:[1.8,1.8,1.8],children:[e.jsx("sphereGeometry",{args:[1,24,24]}),e.jsx("shaderMaterial",{ref:n,vertexShader:P,fragmentShader:M,transparent:!0,depthWrite:!1,side:j,blending:w,uniforms:{uPhase:{value:t.phase},uProbability:{value:t.probability},uTime:{value:0}}})]}),e.jsxs("mesh",{scale:[2.8,2.8,2.8],children:[e.jsx("sphereGeometry",{args:[1,16,16]}),e.jsx("shaderMaterial",{vertexShader:P,fragmentShader:M,transparent:!0,depthWrite:!1,side:j,blending:w,uniforms:{uPhase:{value:t.phase},uProbability:{value:t.probability*.2},uTime:{value:0}}})]})]}),t.probability>.01&&e.jsx(y,{position:[0,Math.sqrt(t.probability)*.38+.1,0],center:!0,children:e.jsxs("div",{style:{fontSize:"11px",fontFamily:'"JetBrains Mono", monospace',color:"rgba(200,200,220,0.7)",userSelect:"none",pointerEvents:"none",textShadow:"0 0 12px rgba(0,0,0,0.95)",whiteSpace:"nowrap",textAlign:"center",lineHeight:1.3},children:[e.jsx("div",{children:t.label}),e.jsxs("div",{style:{fontSize:"9px",color:"rgba(150,150,170,0.5)"},children:[(t.probability*100).toFixed(1),"%"]})]})})]})},L=({line:t})=>{const s=p.useRef(null),n=p.useRef(Math.random()*100),h=p.useMemo(()=>{const i=[],{from:r,to:o}=t,u=new g().addVectors(r,o).multiplyScalar(.5).multiplyScalar(.65);for(let v=0;v<=40;v++){const c=v/40,m=1-c;i.push([m*m*r.x+2*m*c*u.x+c*c*o.x,m*m*r.y+2*m*c*u.y+c*c*o.y,m*m*r.z+2*m*c*u.z+c*c*o.z])}return i},[t.from,t.to]),l=R((t.phaseI+t.phaseJ)/2);return b((a,i)=>{var r;n.current+=i,(r=s.current)!=null&&r.material&&(s.current.material.dashOffset=-n.current*2.5,s.current.material.opacity=t.coherence*(.4+.3*Math.sin(n.current*2.5)))}),t.coherence<.005?null:e.jsx(C,{ref:s,points:h,color:l,lineWidth:.8+t.coherence*3.5,transparent:!0,opacity:t.coherence*.5,dashed:!0,dashScale:5,dashSize:.12,gapSize:.06})},H=({numQubits:t})=>{const s=p.useRef(null),n=p.useRef(null),{camera:h}=V(),l=p.useRef(0);b((i,r)=>{l.current+=r,s.current&&(s.current.uniforms.uTime.value=l.current,s.current.uniforms.uCameraPos.value=h.position),n.current&&(n.current.rotation.y+=r*.02)});const a=p.useMemo(()=>{const r=[];for(let o=0;o<=t;o++){const u=Math.PI*o/t,v=[];for(let c=0;c<=72;c++){const m=2*Math.PI*c/72;v.push([f*Math.sin(u)*Math.cos(m),f*Math.cos(u),f*Math.sin(u)*Math.sin(m)])}r.push({points:v,weight:o})}return r},[t]);return e.jsxs("group",{ref:n,children:[e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[f,64,64]}),e.jsx("shaderMaterial",{ref:s,vertexShader:I,fragmentShader:k,transparent:!0,depthWrite:!1,side:D,uniforms:{uTime:{value:0},uCameraPos:{value:new g}}})]}),a.map(i=>e.jsx(C,{points:i.points,color:"#8899aa",lineWidth:i.weight===0||i.weight===t?1:.6,transparent:!0,opacity:i.weight===0||i.weight===t?.12:.05},`lat-${i.weight}`)),e.jsx(y,{position:[0,f*1.3,0],center:!0,children:e.jsxs("span",{style:{fontSize:"12px",fontFamily:'"JetBrains Mono", monospace',color:"rgba(150,160,180,0.5)",userSelect:"none",pointerEvents:"none",textShadow:"0 0 8px rgba(0,0,0,0.9)"},children:["|","0".repeat(t),"⟩"]})}),e.jsx(y,{position:[0,-f*1.3,0],center:!0,children:e.jsxs("span",{style:{fontSize:"12px",fontFamily:'"JetBrains Mono", monospace',color:"rgba(150,160,180,0.5)",userSelect:"none",pointerEvents:"none",textShadow:"0 0 8px rgba(0,0,0,0.9)"},children:["|","1".repeat(t),"⟩"]})})]})},B=()=>{const t=p.useRef(null),{positions:s,count:n}=p.useMemo(()=>{const l=new Float32Array(900);for(let a=0;a<300;a++){const i=2+Math.random()*4,r=Math.random()*Math.PI,o=Math.random()*Math.PI*2;l[a*3]=i*Math.sin(r)*Math.cos(o),l[a*3+1]=i*Math.cos(r),l[a*3+2]=i*Math.sin(r)*Math.sin(o)}return{positions:l,count:300}},[]);return b((h,l)=>{t.current&&(t.current.rotation.y+=l*.008,t.current.rotation.x+=l*.003)}),e.jsxs("points",{ref:t,children:[e.jsx("bufferGeometry",{children:e.jsx("bufferAttribute",{attach:"attributes-position",array:s,count:n,itemSize:3})}),e.jsx("pointsMaterial",{color:"#556677",size:.012,transparent:!0,opacity:.35,sizeAttenuation:!0,depthWrite:!1})]})},J=()=>{const t=S(a=>a.currentState),s=N(a=>a.circuit.numQubits),n=t||new z(s),{points:h,lines:l}=p.useMemo(()=>O(n.amplitudes,n.numQubits),[n.amplitudes,n.numQubits]);return e.jsxs(e.Fragment,{children:[e.jsx("ambientLight",{intensity:.2}),e.jsx("directionalLight",{position:[3,5,2],intensity:.3}),e.jsx(B,{}),e.jsx(H,{numQubits:s}),h.map(a=>e.jsx(q,{point:a},a.index)),l.map((a,i)=>e.jsx(L,{line:a},`c-${i}`)),e.jsx(A,{enableDamping:!0,dampingFactor:.06,rotateSpeed:.4,zoomSpeed:.7,minDistance:2,maxDistance:8,enablePan:!1,autoRotate:!0,autoRotateSpeed:.25})]})},U=()=>{const t=S(r=>r.currentState),s=N(r=>r.circuit.numQubits),h=(t||new z(s)).probabilities(),l=h.filter(r=>r>.001).length,a=Math.max(...h),i=-h.reduce((r,o)=>o>0?r+o*Math.log2(o):r,0);return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Q-Sphere",position:"top-left",defaultWidth:300,defaultHeight:200,children:e.jsxs("div",{className:"text-[12px] text-white/[0.75] font-mono space-y-1.5 leading-relaxed",children:[e.jsx("div",{children:"Exact statevector on a unit sphere."}),e.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Latitude = Hamming weight of basis state"}),e.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Orb size = probability |c_k|²"}),e.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Orb color = complex phase arg(c_k)"}),e.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Arcs = coherence |c_i·c_j*| (Hamming dist 1)"}),e.jsxs("div",{className:"mt-2 pt-2 border-t border-white/[0.08] text-[11px] text-white/[0.6] space-y-0.5",children:[e.jsxs("div",{children:[l," of ",1<<s," states occupied"]}),e.jsxs("div",{children:["Max probability: ",(a*100).toFixed(1),"%"]}),e.jsxs("div",{children:["von Neumann entropy: ",i.toFixed(2)," bits"]})]})]})}),e.jsxs("div",{className:"absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-white/[0.08]",children:[e.jsx("div",{className:"text-[11px] text-white/[0.5] font-mono mb-1.5",children:"Phase → Color"}),e.jsx("div",{className:"flex items-center gap-px",children:Array.from({length:28},(r,o)=>e.jsx("div",{className:"w-2 h-3 rounded-sm",style:{backgroundColor:R(-Math.PI+2*Math.PI*o/27)}},o))}),e.jsxs("div",{className:"flex justify-between text-[9px] text-white/[0.2] font-mono mt-0.5",children:[e.jsx("span",{children:"−π"}),e.jsx("span",{children:"0"}),e.jsx("span",{children:"π"})]})]}),e.jsx("div",{className:"absolute bottom-2 right-2 text-[9px] text-white/[0.12] font-mono",children:"drag to rotate · scroll to zoom"})]})},Z=()=>e.jsxs("div",{className:"w-full h-full relative",children:[e.jsx(W,{camera:{position:[2,1.5,3],fov:38,near:.1,far:50},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:T,toneMappingExposure:1.3},style:{background:"#040407"},children:e.jsx(J,{})}),e.jsx(U,{})]});export{Z as AbstractViz};
