import{b as De,u as et,V as w,_ as le,D as tt,c as fe,P as Te,d as Re,R as nt,I as it,e as Me,f as ce,g as G,W as st,h as ue,S as We,i as ot,U as Le,j as Ae,M as rt,k as $,L as at,l as lt,m as ct,n as dt}from"./OrbitControls-4WzGmbQn.js";import{r,c as ft}from"./index-B4HpRCi3.js";const Z=new w,he=new w,ut=new w,Pe=new fe;function ht(o,e,t){const s=Z.setFromMatrixPosition(o.matrixWorld);s.project(e);const n=t.width/2,i=t.height/2;return[s.x*n+n,-(s.y*i)+i]}function pt(o,e){const t=Z.setFromMatrixPosition(o.matrixWorld),s=he.setFromMatrixPosition(e.matrixWorld),n=t.sub(s),i=e.getWorldDirection(ut);return n.angleTo(i)>Math.PI/2}function mt(o,e,t,s){const n=Z.setFromMatrixPosition(o.matrixWorld),i=n.clone();i.project(e),Pe.set(i.x,i.y),t.setFromCamera(Pe,e);const l=t.intersectObjects(s,!0);if(l.length){const a=l[0].distance;return n.distanceTo(t.ray.origin)<a}return!0}function vt(o,e){if(e instanceof Re)return e.zoom;if(e instanceof Te){const t=Z.setFromMatrixPosition(o.matrixWorld),s=he.setFromMatrixPosition(e.matrixWorld),n=e.fov*Math.PI/180,i=t.distanceTo(s);return 1/(2*Math.tan(n/2)*i)}else return 1}function gt(o,e,t){if(e instanceof Te||e instanceof Re){const s=Z.setFromMatrixPosition(o.matrixWorld),n=he.setFromMatrixPosition(e.matrixWorld),i=s.distanceTo(n),l=(t[1]-t[0])/(e.far-e.near),a=t[1]-l*e.far;return Math.round(l*i+a)}}const de=o=>Math.abs(o)<1e-10?0:o;function je(o,e,t=""){let s="matrix3d(";for(let n=0;n!==16;n++)s+=de(e[n]*o.elements[n])+(n!==15?",":")");return t+s}const yt=(o=>e=>je(e,o))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),xt=(o=>(e,t)=>je(e,o(t),"translate(-50%,-50%)"))(o=>[1/o,1/o,1/o,1,-1/o,-1/o,-1/o,-1,1/o,1/o,1/o,1,1,1,1,1]);function St(o){return o&&typeof o=="object"&&"current"in o}const Lt=r.forwardRef(({children:o,eps:e=.001,style:t,className:s,prepend:n,center:i,fullscreen:l,portal:a,distanceFactor:h,sprite:y=!1,transform:f=!1,occlude:c,onOcclude:b,castShadow:R,receiveShadow:O,material:D,geometry:z,zIndexRange:M=[16777271,0],calculatePosition:N=ht,as:d="div",wrapperClass:p,pointerEvents:ve="auto",...C},ge)=>{const{gl:ye,camera:x,scene:xe,size:E,raycaster:Fe,events:Ge,viewport:$e}=De(),[S]=r.useState(()=>document.createElement(d)),ne=r.useRef(),L=r.useRef(null),Se=r.useRef(0),J=r.useRef([0,0]),k=r.useRef(null),ie=r.useRef(null),V=(a==null?void 0:a.current)||Ge.connected||ye.domElement.parentNode,T=r.useRef(null),X=r.useRef(!1),K=r.useMemo(()=>c&&c!=="blending"||Array.isArray(c)&&c.length&&St(c[0]),[c]);r.useLayoutEffect(()=>{const _=ye.domElement;c&&c==="blending"?(_.style.zIndex=`${Math.floor(M[0]/2)}`,_.style.position="absolute",_.style.pointerEvents="none"):(_.style.zIndex=null,_.style.position=null,_.style.pointerEvents=null)},[c]),r.useLayoutEffect(()=>{if(L.current){const _=ne.current=ft(S);if(xe.updateMatrixWorld(),f)S.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const u=N(L.current,x,E);S.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${u[0]}px,${u[1]}px,0);transform-origin:0 0;`}return V&&(n?V.prepend(S):V.appendChild(S)),()=>{V&&V.removeChild(S),_.unmount()}}},[V,f]),r.useLayoutEffect(()=>{p&&(S.className=p)},[p]);const we=r.useMemo(()=>f?{position:"absolute",top:0,left:0,width:E.width,height:E.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:i?"translate3d(-50%,-50%,0)":"none",...l&&{top:-E.height/2,left:-E.width/2,width:E.width,height:E.height},...t},[t,i,l,E,f]),ke=r.useMemo(()=>({position:"absolute",pointerEvents:ve}),[ve]);r.useLayoutEffect(()=>{if(X.current=!1,f){var _;(_=ne.current)==null||_.render(r.createElement("div",{ref:k,style:we},r.createElement("div",{ref:ie,style:ke},r.createElement("div",{ref:ge,className:s,style:t,children:o}))))}else{var u;(u=ne.current)==null||u.render(r.createElement("div",{ref:ge,style:we,className:s,children:o}))}});const F=r.useRef(!0);et(_=>{if(L.current){x.updateMatrixWorld(),L.current.updateWorldMatrix(!0,!1);const u=f?J.current:N(L.current,x,E);if(f||Math.abs(Se.current-x.zoom)>e||Math.abs(J.current[0]-u[0])>e||Math.abs(J.current[1]-u[1])>e){const W=pt(L.current,x);let B=!1;K&&(Array.isArray(c)?B=c.map(j=>j.current):c!=="blending"&&(B=[xe]));const q=F.current;if(B){const j=mt(L.current,x,Fe,B);F.current=j&&!W}else F.current=!W;q!==F.current&&(b?b(!F.current):S.style.display=F.current?"block":"none");const Q=Math.floor(M[0]/2),qe=c?K?[M[0],Q]:[Q-1,0]:M;if(S.style.zIndex=`${gt(L.current,x,qe)}`,f){const[j,Ee]=[E.width/2,E.height/2],se=x.projectionMatrix.elements[5]*Ee,{isOrthographicCamera:_e,top:Ze,left:Je,bottom:Xe,right:Ke}=x,Qe=yt(x.matrixWorldInverse),Ye=_e?`scale(${se})translate(${de(-(Ke+Je)/2)}px,${de((Ze+Xe)/2)}px)`:`translateZ(${se}px)`;let H=L.current.matrixWorld;y&&(H=x.matrixWorldInverse.clone().transpose().copyPosition(H).scale(L.current.scale),H.elements[3]=H.elements[7]=H.elements[11]=0,H.elements[15]=1),S.style.width=E.width+"px",S.style.height=E.height+"px",S.style.perspective=_e?"":`${se}px`,k.current&&ie.current&&(k.current.style.transform=`${Ye}${Qe}translate(${j}px,${Ee}px)`,ie.current.style.transform=xt(H,1/((h||10)/400)))}else{const j=h===void 0?1:vt(L.current,x)*h;S.style.transform=`translate3d(${u[0]}px,${u[1]}px,0) scale(${j})`}J.current=u,Se.current=x.zoom}}if(!K&&T.current&&!X.current)if(f){if(k.current){const u=k.current.children[0];if(u!=null&&u.clientWidth&&u!=null&&u.clientHeight){const{isOrthographicCamera:W}=x;if(W||z)C.scale&&(Array.isArray(C.scale)?C.scale instanceof w?T.current.scale.copy(C.scale.clone().divideScalar(1)):T.current.scale.set(1/C.scale[0],1/C.scale[1],1/C.scale[2]):T.current.scale.setScalar(1/C.scale));else{const B=(h||10)/400,q=u.clientWidth*B,Q=u.clientHeight*B;T.current.scale.set(q,Q,1)}X.current=!0}}}else{const u=S.children[0];if(u!=null&&u.clientWidth&&u!=null&&u.clientHeight){const W=1/$e.factor,B=u.clientWidth*W,q=u.clientHeight*W;T.current.scale.set(B,q,1),X.current=!0}T.current.lookAt(_.camera.position)}});const be=r.useMemo(()=>({vertexShader:f?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[f]);return r.createElement("group",le({},C,{ref:L}),c&&!K&&r.createElement("mesh",{castShadow:R,receiveShadow:O,ref:T},z||r.createElement("planeGeometry",null),D||r.createElement("shaderMaterial",{side:tt,vertexShader:be.vertexShader,fragmentShader:be.fragmentShader})))}),He=parseInt(nt.replace(/\D+/g,"")),Ie=He>=125?"uv1":"uv2",Ue=new ue,Y=new w;class pe extends it{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new Me(e,3)),this.setAttribute("uv",new Me(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,s=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),s.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const s=new ce(t,6,1);return this.setAttribute("instanceStart",new G(s,3,0)),this.setAttribute("instanceEnd",new G(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let s;e instanceof Float32Array?s=e:Array.isArray(e)&&(s=new Float32Array(e));const n=new ce(s,t*2,1);return this.setAttribute("instanceColorStart",new G(n,t,0)),this.setAttribute("instanceColorEnd",new G(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new st(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ue);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ue.setFromBufferAttribute(t),this.boundingBox.union(Ue))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let n=0;for(let i=0,l=e.count;i<l;i++)Y.fromBufferAttribute(e,i),n=Math.max(n,s.distanceToSquared(Y)),Y.fromBufferAttribute(t,i),n=Math.max(n,s.distanceToSquared(Y));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Ne extends pe{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,s=new Float32Array(2*t);for(let n=0;n<t;n+=3)s[2*n]=e[n],s[2*n+1]=e[n+1],s[2*n+2]=e[n+2],s[2*n+3]=e[n+3],s[2*n+4]=e[n+4],s[2*n+5]=e[n+5];return super.setPositions(s),this}setColors(e,t=3){const s=e.length-t,n=new Float32Array(2*s);if(t===3)for(let i=0;i<s;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<s;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class me extends ot{constructor(e){super({type:"LineMaterial",uniforms:Le.clone(Le.merge([Ae.common,Ae.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${He>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const oe=new $,Oe=new w,ze=new w,m=new $,v=new $,A=new $,re=new w,ae=new lt,g=new at,Ce=new w,ee=new ue,te=new We,P=new $;let U,I;function Be(o,e,t){return P.set(0,0,-e,1).applyMatrix4(o.projectionMatrix),P.multiplyScalar(1/P.w),P.x=I/t.width,P.y=I/t.height,P.applyMatrix4(o.projectionMatrixInverse),P.multiplyScalar(1/P.w),Math.abs(Math.max(P.x,P.y))}function wt(o,e){const t=o.matrixWorld,s=o.geometry,n=s.attributes.instanceStart,i=s.attributes.instanceEnd,l=Math.min(s.instanceCount,n.count);for(let a=0,h=l;a<h;a++){g.start.fromBufferAttribute(n,a),g.end.fromBufferAttribute(i,a),g.applyMatrix4(t);const y=new w,f=new w;U.distanceSqToSegment(g.start,g.end,f,y),f.distanceTo(y)<I*.5&&e.push({point:f,pointOnLine:y,distance:U.origin.distanceTo(f),object:o,face:null,faceIndex:a,uv:null,[Ie]:null})}}function bt(o,e,t){const s=e.projectionMatrix,i=o.material.resolution,l=o.matrixWorld,a=o.geometry,h=a.attributes.instanceStart,y=a.attributes.instanceEnd,f=Math.min(a.instanceCount,h.count),c=-e.near;U.at(1,A),A.w=1,A.applyMatrix4(e.matrixWorldInverse),A.applyMatrix4(s),A.multiplyScalar(1/A.w),A.x*=i.x/2,A.y*=i.y/2,A.z=0,re.copy(A),ae.multiplyMatrices(e.matrixWorldInverse,l);for(let b=0,R=f;b<R;b++){if(m.fromBufferAttribute(h,b),v.fromBufferAttribute(y,b),m.w=1,v.w=1,m.applyMatrix4(ae),v.applyMatrix4(ae),m.z>c&&v.z>c)continue;if(m.z>c){const d=m.z-v.z,p=(m.z-c)/d;m.lerp(v,p)}else if(v.z>c){const d=v.z-m.z,p=(v.z-c)/d;v.lerp(m,p)}m.applyMatrix4(s),v.applyMatrix4(s),m.multiplyScalar(1/m.w),v.multiplyScalar(1/v.w),m.x*=i.x/2,m.y*=i.y/2,v.x*=i.x/2,v.y*=i.y/2,g.start.copy(m),g.start.z=0,g.end.copy(v),g.end.z=0;const D=g.closestPointToPointParameter(re,!0);g.at(D,Ce);const z=ct.lerp(m.z,v.z,D),M=z>=-1&&z<=1,N=re.distanceTo(Ce)<I*.5;if(M&&N){g.start.fromBufferAttribute(h,b),g.end.fromBufferAttribute(y,b),g.start.applyMatrix4(l),g.end.applyMatrix4(l);const d=new w,p=new w;U.distanceSqToSegment(g.start,g.end,p,d),t.push({point:p,pointOnLine:d,distance:U.origin.distanceTo(p),object:o,face:null,faceIndex:b,uv:null,[Ie]:null})}}}class Ve extends rt{constructor(e=new pe,t=new me({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,s=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let l=0,a=0,h=t.count;l<h;l++,a+=2)Oe.fromBufferAttribute(t,l),ze.fromBufferAttribute(s,l),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Oe.distanceTo(ze);const i=new ce(n,2,1);return e.setAttribute("instanceDistanceStart",new G(i,1,0)),e.setAttribute("instanceDistanceEnd",new G(i,1,1)),this}raycast(e,t){const s=this.material.worldUnits,n=e.camera;n===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;U=e.ray;const l=this.matrixWorld,a=this.geometry,h=this.material;I=h.linewidth+i,a.boundingSphere===null&&a.computeBoundingSphere(),te.copy(a.boundingSphere).applyMatrix4(l);let y;if(s)y=I*.5;else{const c=Math.max(n.near,te.distanceToPoint(U.origin));y=Be(n,c,h.resolution)}if(te.radius+=y,U.intersectsSphere(te)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ee.copy(a.boundingBox).applyMatrix4(l);let f;if(s)f=I*.5;else{const c=Math.max(n.near,ee.distanceToPoint(U.origin));f=Be(n,c,h.resolution)}ee.expandByScalar(f),U.intersectsBox(ee)!==!1&&(s?wt(this,t):bt(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(oe),this.material.uniforms.resolution.value.set(oe.z,oe.w))}}class Et extends Ve{constructor(e=new Ne,t=new me({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const At=r.forwardRef(function({points:e,color:t=16777215,vertexColors:s,linewidth:n,lineWidth:i,segments:l,dashed:a,...h},y){var f,c;const b=De(M=>M.size),R=r.useMemo(()=>l?new Ve:new Et,[l]),[O]=r.useState(()=>new me),D=(s==null||(f=s[0])==null?void 0:f.length)===4?4:3,z=r.useMemo(()=>{const M=l?new pe:new Ne,N=e.map(d=>{const p=Array.isArray(d);return d instanceof w||d instanceof $?[d.x,d.y,d.z]:d instanceof fe?[d.x,d.y,0]:p&&d.length===3?[d[0],d[1],d[2]]:p&&d.length===2?[d[0],d[1],0]:d});if(M.setPositions(N.flat()),s){t=16777215;const d=s.map(p=>p instanceof dt?p.toArray():p);M.setColors(d.flat(),D)}return M},[e,l,s,D]);return r.useLayoutEffect(()=>{R.computeLineDistances()},[e,R]),r.useLayoutEffect(()=>{a?O.defines.USE_DASH="":delete O.defines.USE_DASH,O.needsUpdate=!0},[a,O]),r.useEffect(()=>()=>{z.dispose(),O.dispose()},[z]),r.createElement("primitive",le({object:R,ref:y},h),r.createElement("primitive",{object:z,attach:"geometry"}),r.createElement("primitive",le({object:O,attach:"material",color:t,vertexColors:!!s,resolution:[b.width,b.height],linewidth:(c=n??i)!==null&&c!==void 0?c:1,dashed:a,transparent:D===4},h)))});export{Lt as H,At as L};
