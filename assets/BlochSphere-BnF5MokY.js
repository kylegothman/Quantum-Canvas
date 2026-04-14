import{p as R,t as S,C as x,r as v,j as t,u as O,R as q,a as D,S as L}from"./index-B4HpRCi3.js";import{u as E,V as P,F as G,A as _,B as U,Q as Z,C as H,O as I}from"./OrbitControls-4WzGmbQn.js";import{H as w,L as j}from"./Line-D4VZrqLg.js";const T=[[x.ZERO,x.ONE],[x.ONE,x.ZERO]],k=[[x.ZERO,x.MINUS_I],[x.I,x.ZERO]],$=[[x.ONE,x.ZERO],[x.ZERO,new x(-1)]];function z(e,r){return[[e[0][0].mul(r[0][0]).add(e[0][1].mul(r[1][0])),e[0][0].mul(r[0][1]).add(e[0][1].mul(r[1][1]))],[e[1][0].mul(r[0][0]).add(e[1][1].mul(r[1][0])),e[1][0].mul(r[0][1]).add(e[1][1].mul(r[1][1]))]]}function N(e){const r=S(z(e,T)).re,o=S(z(e,k)).re,a=S(z(e,$)).re,i=S(z(e,e)).re;return{x:r,y:o,z:a,purity:i}}function A(e,r){const o=[];for(let a=0;a<r;a++)if(r===1){const i=[[e[0].mul(e[0].conjugate()),e[0].mul(e[1].conjugate())],[e[1].mul(e[0].conjugate()),e[1].mul(e[1].conjugate())]];o.push(N(i))}else{const i=[];for(let u=0;u<r;u++)u!==a&&i.push(u);const n=R(e,i,r);o.push(N(n))}return o}const J=`
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Q=`
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
`,X=`
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Y=`
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
`,d=1,K=()=>{const r=o=>{const a=[];for(let i=0;i<=64;i++){const n=i/64*Math.PI*2,u=Math.cos(n)*d,m=Math.sin(n)*d;o==="xy"&&a.push([u,m,0]),o==="xz"&&a.push([u,0,m]),o==="yz"&&a.push([0,u,m])}return a};return t.jsxs("group",{children:[t.jsx(j,{points:r("xz"),color:"#2a2a40",lineWidth:1,transparent:!0,opacity:.5}),t.jsx(j,{points:r("xy"),color:"#2a2a40",lineWidth:1,transparent:!0,opacity:.25}),t.jsx(j,{points:r("yz"),color:"#2a2a40",lineWidth:1,transparent:!0,opacity:.25})]})},ee=()=>{const e=d*1.3,r=d*1.65,o={fontSize:"13px",fontFamily:'"JetBrains Mono", monospace',fontWeight:600,userSelect:"none",pointerEvents:"none",textShadow:"0 0 6px rgba(0,0,0,0.9)"};return t.jsxs("group",{children:[t.jsx(j,{points:[[-e,0,0],[e,0,0]],color:"#4a4a60",lineWidth:1,transparent:!0,opacity:.35}),t.jsx(w,{position:[r,0,0],center:!0,children:t.jsx("span",{style:{...o,color:"#7a7a90"},children:"X"})}),t.jsx(j,{points:[[0,-e,0],[0,e,0]],color:"#4a4a60",lineWidth:1,transparent:!0,opacity:.35}),t.jsx(w,{position:[0,r,0],center:!0,children:t.jsx("span",{style:{...o,color:"#9999b0"},children:"|0⟩"})}),t.jsx(w,{position:[0,-r,0],center:!0,children:t.jsx("span",{style:{...o,color:"#9999b0"},children:"|1⟩"})}),t.jsx(j,{points:[[0,0,-e],[0,0,e]],color:"#4a4a60",lineWidth:1,transparent:!0,opacity:.35}),t.jsx(w,{position:[0,0,r],center:!0,children:t.jsx("span",{style:{...o,color:"#7a7a90"},children:"Y"})})]})},te=({target:e,purity:r})=>{const[o,a,i]=e,n=Math.sqrt(o*o+a*a+i*i),u=n>.001?new P(o,a,i).normalize():new P(0,1,0),m=n*d,h=v.useMemo(()=>{const c=new Z;return c.setFromUnitVectors(new P(0,1,0),u),c},[u.x,u.y,u.z]);if(n<.01)return null;const s=.3+r*.7;return t.jsxs("group",{quaternion:h,children:[t.jsxs("mesh",{position:[0,m*.4,0],children:[t.jsx("cylinderGeometry",{args:[.022,.022,m*.8,8]}),t.jsx("meshBasicMaterial",{color:"#e8e8f0",transparent:!0,opacity:s})]}),t.jsxs("mesh",{position:[0,m*.85,0],children:[t.jsx("coneGeometry",{args:[.055,.14,8]}),t.jsx("meshBasicMaterial",{color:"#e8e8f0",transparent:!0,opacity:s+.1})]}),t.jsxs("mesh",{position:[0,m,0],children:[t.jsx("sphereGeometry",{args:[.045,12,12]}),t.jsx("meshBasicMaterial",{color:"#fde74c"})]})]})},re=({coords:e,label:r,position:o})=>{const a=v.useRef(null),i=v.useRef(null),n=v.useRef(0),u=v.useRef({x:e.x,y:e.y,z:e.z,purity:e.purity});E((s,c)=>{n.current+=c;const p=1-Math.pow(5e-4,c),l=u.current;l.x+=(e.x-l.x)*p,l.y+=(e.y-l.y)*p,l.z+=(e.z-l.z)*p,l.purity+=(e.purity-l.purity)*p;const b=Math.atan2(l.z,l.x);if(a.current){const g=a.current.uniforms;g.uTime.value=n.current,g.uPurity.value=l.purity,g.uPhase.value=b,g.uBlochVector.value.set(l.x,l.y,l.z)}if(i.current){const g=i.current.uniforms;g.uPurity.value=l.purity,g.uPhase.value=b}});const m=[e.x,e.z,e.y],h=Math.sqrt(e.x**2+e.y**2+e.z**2);return t.jsxs("group",{position:o,children:[t.jsx(w,{position:[0,d*1.95,0],center:!0,children:t.jsx("span",{style:{fontSize:"14px",fontFamily:'"JetBrains Mono", monospace',fontWeight:500,color:"#9a9ab0",userSelect:"none",pointerEvents:"none",textShadow:"0 0 10px rgba(0,0,0,0.9)"},children:r})}),t.jsx(w,{position:[d*1.5,-d*1.2,0],center:!0,children:t.jsxs("div",{style:{fontFamily:'"JetBrains Mono", monospace',userSelect:"none",pointerEvents:"none",textShadow:"0 0 8px rgba(0,0,0,0.9)",textAlign:"left",lineHeight:1.5,whiteSpace:"nowrap"},children:[t.jsxs("div",{style:{fontSize:"10px",color:"#9898b0"},children:["r = (",e.x.toFixed(2),", ",e.y.toFixed(2),", ",e.z.toFixed(2),")"]}),t.jsxs("div",{style:{fontSize:"9px",color:h>.95?"#8a9a7a":h<.1?"#9a7a7a":"#7a7a90"},children:["|r⃗| = ",h.toFixed(3),h>.95?"  pure":h<.1?"  mixed":""]})]})}),t.jsx(K,{}),t.jsx(ee,{}),t.jsxs("mesh",{children:[t.jsx("sphereGeometry",{args:[d,48,48]}),t.jsx("shaderMaterial",{ref:a,vertexShader:J,fragmentShader:Q,transparent:!0,depthWrite:!1,side:G,uniforms:{uTime:{value:0},uPurity:{value:e.purity},uPhase:{value:0},uBlochVector:{value:new P(e.x,e.y,e.z)},uOpacity:{value:1}}})]}),t.jsxs("mesh",{scale:[1.18,1.18,1.18],children:[t.jsx("sphereGeometry",{args:[d,32,32]}),t.jsx("shaderMaterial",{ref:i,vertexShader:X,fragmentShader:Y,transparent:!0,depthWrite:!1,side:U,blending:_,uniforms:{uPurity:{value:e.purity},uPhase:{value:0},uOpacity:{value:.5}}})]}),t.jsx(te,{target:m,purity:e.purity})]})},oe=({from:e,to:r,strength:o})=>{const a=v.useRef(null),i=v.useRef(0),n=v.useMemo(()=>{const m=[],[h,s,c]=e,[p,l,b]=r,g=(h+p)/2,F=(s+l)/2-.5,V=(c+b)/2;for(let M=0;M<=40;M++){const f=M/40,y=1-f,B=y*y*h+2*y*f*g+f*f*p,C=y*y*s+2*y*f*F+f*f*l,W=y*y*c+2*y*f*V+f*f*b;m.push([B,C,W])}return m},[e,r]);return E((u,m)=>{var h;if(i.current+=m,(h=a.current)!=null&&h.material){const s=a.current.material;s.dashOffset!==void 0&&(s.dashOffset=-i.current*2);const c=.5+.3*Math.sin(i.current*3);s.opacity=o*c}}),o<.03?null:t.jsx(j,{ref:a,points:n,color:"#ff2e63",lineWidth:1.5+o*2,transparent:!0,opacity:o*.6,dashed:!0,dashScale:8,dashSize:.3,gapSize:.15})};function ne(e,r,o,a){if(a<2)return 0;const i=[];for(let s=0;s<a;s++)s!==r&&i.push(s);const n=R(e,i,a),u=[[n[0][0].mul(n[0][0]).add(n[0][1].mul(n[1][0])),n[0][0].mul(n[0][1]).add(n[0][1].mul(n[1][1]))],[n[1][0].mul(n[0][0]).add(n[1][1].mul(n[1][0])),n[1][0].mul(n[0][1]).add(n[1][1].mul(n[1][1]))]],h=1-S(u).re;return Math.min(1,h*2)}const ae=()=>{const e=D(s=>s.currentState),r=O(s=>s.circuit.numQubits),o=e||new L(r),a=v.useMemo(()=>A(o.amplitudes,o.numQubits),[o.amplitudes,o.numQubits]),i=v.useMemo(()=>{if(r<2)return[];const s=[];for(let c=0;c<r;c++)for(let p=c+1;p<r;p++){const l=ne(o.amplitudes,c,p,r);l>.02&&s.push({q1:c,q2:p,strength:l})}return s},[o.amplitudes,r]),n=r<=3?3.5:r<=5?3:2.6,m=-((r-1)*n)/2,h=v.useMemo(()=>Array.from({length:r},(s,c)=>[m+c*n,0,0]),[r,m,n]);return t.jsxs(t.Fragment,{children:[t.jsx("ambientLight",{intensity:.3}),a.map((s,c)=>t.jsx(re,{coords:s,label:`q${c}`,position:h[c]},`bloch-${c}`)),i.map(({q1:s,q2:c,strength:p})=>t.jsx(oe,{from:h[s],to:h[c],strength:p},`ent-${s}-${c}`)),t.jsx(I,{enableDamping:!0,dampingFactor:.08,rotateSpeed:.5,zoomSpeed:.8,minDistance:3,maxDistance:20,enablePan:!1})]})},le=()=>{const e=O(o=>o.circuit.numQubits),r=e<=2?5:e<=4?7:9;return t.jsxs("div",{className:"w-full h-full relative",children:[t.jsx(H,{camera:{position:[2,2,r],fov:45,near:.1,far:100},gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},style:{background:"#0a0a0f"},children:t.jsx(ae,{})}),t.jsx(q,{title:"Bloch Spheres",position:"top-left",defaultWidth:280,defaultHeight:160,children:t.jsxs("div",{className:"text-[12px] text-white/[0.75] font-mono space-y-1 leading-relaxed",children:[t.jsx("div",{children:"One sphere per qubit via partial trace of the full statevector."}),t.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Arrow = Bloch vector (rₓ, rᵧ, rz)"}),t.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"|r⃗| < 1 → qubit is entangled (mixed state)"}),t.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"|r⃗| = 1 → qubit is in a pure state"}),t.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Pink arcs = quantum coherence between qubits"}),t.jsx("div",{className:"text-[11px] text-white/[0.55]",children:"Coordinates shown below each sphere"})]})}),t.jsx("div",{className:"absolute bottom-2 right-2 text-[9px] text-white/[0.12] font-mono",children:"drag to rotate · scroll to zoom"})]})};export{le as BlochSphere};
