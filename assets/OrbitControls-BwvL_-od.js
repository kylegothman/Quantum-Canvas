import{r as Ae,g as Qx,j as Ai,c as $x}from"./index-CXYg6GAu.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="165",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yv=0,$f=1,xv=2,eS=3,Sv=0,xu=1,Sa=2,Ei=3,mr=0,kn=1,Ti=2,dr=0,Ss=1,ed=2,td=3,nd=4,Mv=5,zr=100,wv=101,Ev=102,Av=103,bv=104,Tv=200,Cv=201,Rv=202,Pv=203,hu=204,fu=205,Iv=206,Lv=207,Dv=208,Uv=209,Nv=210,Ov=211,Fv=212,zv=213,Bv=214,kv=0,Hv=1,Vv=2,ba=3,Gv=4,Wv=5,Xv=6,Yv=7,ja=0,qv=1,Zv=2,Yi=0,jv=1,Jv=2,Kv=3,Wd=4,Qv=5,$v=6,e_=7,id="attached",t_="detached",Su=300,gr=301,Br=302,Ta=303,Ca=304,Uo=306,Ra=1e3,vi=1001,Pa=1002,gn=1003,Xd=1004,tS=1004,Mo=1005,nS=1005,sn=1006,Ma=1007,iS=1007,Wi=1008,rS=1008,ji=1009,n_=1010,i_=1011,Ia=1012,Yd=1013,Ts=1014,ii=1015,Ja=1016,qd=1017,Zd=1018,Cs=1020,r_=35902,s_=1021,o_=1022,Bn=1023,a_=1024,l_=1025,Ms=1026,Rs=1027,jd=1028,Jd=1029,c_=1030,Kd=1031,Qd=1033,iu=33776,ru=33777,su=33778,ou=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,cd=37492,ud=37496,hd=37808,fd=37809,dd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,yd=37816,xd=37817,Sd=37818,Md=37819,wd=37820,Ed=37821,au=36492,Ad=36494,bd=36495,u_=36283,Td=36284,Cd=36285,Rd=36286,h_=2200,f_=2201,d_=2202,La=2300,du=2301,lu=2302,vs=2400,_s=2401,Da=2402,Mu=2500,$d=2501,sS=0,oS=1,aS=2,p_=3200,m_=3201,Hr=0,g_=1,ur="",gi="srgb",_r="srgb-linear",wu="display-p3",Ka="display-p3-linear",Ua="linear",kt="srgb",Na="rec709",Oa="p3",lS=0,ps=7680,cS=7681,uS=7682,hS=7683,fS=34055,dS=34056,pS=5386,mS=512,gS=513,vS=514,_S=515,yS=516,xS=517,SS=518,Pd=519,v_=512,__=513,y_=514,ep=515,x_=516,S_=517,M_=518,w_=519,Fa=35044,MS=35048,wS=35040,ES=35045,AS=35049,bS=35041,TS=35046,CS=35050,RS=35042,PS="100",Id="300 es",Xi=2e3,za=2001;let yr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}};const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mg=1234567;const ws=Math.PI/180,Ro=180/Math.PI;function si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function jt(r,e,t){return Math.max(e,Math.min(t,r))}function tp(r,e){return(r%e+e)%e}function IS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function LS(r,e,t){return r!==e?(t-r)/(e-r):0}function wa(r,e,t){return(1-t)*r+t*e}function DS(r,e,t,n){return wa(r,e,1-Math.exp(-t*n))}function US(r,e=1){return e-Math.abs(tp(r,e*2)-e)}function NS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function OS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function FS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zS(r,e){return r+Math.random()*(e-r)}function BS(r){return r*(.5-Math.random())}function kS(r){r!==void 0&&(mg=r);let e=mg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HS(r){return r*ws}function VS(r){return r*Ro}function GS(r){return(r&r-1)===0&&r!==0}function WS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function XS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function YS(r,e,t,n,i){const s=Math.cos,l=Math.sin,c=s(t/2),u=l(t/2),h=s((e+n)/2),f=l((e+n)/2),p=s((e-n)/2),m=l((e-n)/2),g=s((n-e)/2),y=l((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:ws,RAD2DEG:Ro,generateUUID:si,clamp:jt,euclideanModulo:tp,mapLinear:IS,inverseLerp:LS,lerp:wa,damp:DS,pingpong:US,smoothstep:NS,smootherstep:OS,randInt:FS,randFloat:zS,randFloatSpread:BS,seededRandom:kS,degToRad:HS,radToDeg:VS,isPowerOfTwo:GS,ceilPowerOfTwo:WS,floorPowerOfTwo:XS,setQuaternionFromProperEuler:YS,normalize:mt,denormalize:zn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,i,s,l,c,u,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,u,h)}set(e,t,n,i,s,l,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=l,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],M=i[0],x=i[3],_=i[6],E=i[1],w=i[4],b=i[7],N=i[2],R=i[5],L=i[8];return s[0]=l*M+c*E+u*N,s[3]=l*x+c*w+u*R,s[6]=l*_+c*b+u*L,s[1]=h*M+f*E+p*N,s[4]=h*x+f*w+p*R,s[7]=h*_+f*b+p*L,s[2]=m*M+g*E+y*N,s[5]=m*x+g*w+y*R,s[8]=m*_+g*b+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*l*f-t*c*h-n*s*f+n*c*u+i*s*h-i*l*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*l-c*h,m=c*u-f*s,g=h*s-l*u,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=p*M,e[1]=(i*h-f*n)*M,e[2]=(c*n-i*l)*M,e[3]=m*M,e[4]=(f*t-i*u)*M,e[5]=(i*s-c*t)*M,e[6]=g*M,e[7]=(n*u-h*t)*M,e[8]=(l*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*l+h*c)+l+e,-i*h,i*u,-i*(-h*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply($h.makeScale(e,t)),this}rotate(e){return this.premultiply($h.makeRotation(-e)),this}translate(e,t){return this.premultiply($h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $h=new pt;function A_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const qS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function wo(r,e){return new qS[r](e)}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b_(){const r=Ba("canvas");return r.style.display="block",r}const gg={};function np(r){r in gg||(gg[r]=!0,console.warn(r))}function ZS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const vg=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_g=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sc={[_r]:{transfer:Ua,primaries:Na,toReference:r=>r,fromReference:r=>r},[gi]:{transfer:kt,primaries:Na,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Ua,primaries:Oa,toReference:r=>r.applyMatrix3(_g),fromReference:r=>r.applyMatrix3(vg)},[wu]:{transfer:kt,primaries:Oa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(_g),fromReference:r=>r.applyMatrix3(vg).convertLinearToSRGB()}},jS=new Set([_r,Ka]),Ut={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!jS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=sc[e].toReference,i=sc[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return sc[r].primaries},getTransfer:function(r){return r===ur?Ua:sc[r].transfer}};function Co(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ef(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class T_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=Ba("canvas")),js.width=e.width,js.height=e.height;const n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=Co(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Co(t[n]/255)*255):t[n]=Co(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class ys{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,c=i.length;l<c;l++)i[l].isDataTexture?s.push(tf(i[l].image)):s.push(tf(i[l]))}else s=tf(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?T_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KS=0;class Jt extends yr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=vi,i=vi,s=sn,l=Wi,c=Bn,u=ji,h=Jt.DEFAULT_ANISOTROPY,f=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=si(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Su;Jt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],M=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,b=(g+1)/2,N=(_+1)/2,R=(f+m)/4,L=(p+M)/4,O=(y+x)/4;return w>b&&w>N?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=R/n,s=L/n):b>N?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=R/i,s=O/i):N<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(N),n=L/s,i=O/s),this.set(n,i,s,t),this}let E=Math.sqrt((x-y)*(x-y)+(p-M)*(p-M)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(x-y)/E,this.y=(p-M)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ys(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends C_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eu extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends Ci{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Eu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ip extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $S extends Ci{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ip(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[l+0],g=s[l+1],y=s[l+2],M=s[l+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(p!==M||u!==m||h!==g||f!==y){let x=1-c;const _=u*m+h*g+f*y+p*M,E=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const N=Math.sqrt(w),R=Math.atan2(N,_*E);x=Math.sin(x*R)/N,c=Math.sin(c*R)/N}const b=c*E;if(u=u*x+m*b,h=h*x+g*b,f=f*x+y*b,p=p*x+M*b,x===1-c){const N=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=N,h*=N,f*=N,p*=N}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,l){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[l],m=s[l+1],g=s[l+2],y=s[l+3];return e[t]=c*y+f*p+u*g-h*m,e[t+1]=u*y+f*m+h*p-c*g,e[t+2]=h*y+f*g+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,l=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),y=u(s/2);switch(l){case"XYZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"YZX":this._x=m*f*p+h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p-m*g*y;break;case"XZY":this._x=m*f*p-h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(l-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+l)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+l)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(l-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+l*c+i*h-s*u,this._y=i*f+l*u+s*c-n*h,this._z=s*f+l*h+n*u-i*c,this._w=l*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let c=l*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=l*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,c=e.z,u=e.w,h=2*(l*i-c*n),f=2*(c*t-s*i),p=2*(s*n-l*t);return this.x=t+u*h+l*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*l-n*u,this.z=n*c-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new U,yg=new Pn;class vn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Si):Si.fromBufferAttribute(s,l),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),ac.subVectors(this.max,sa),Js.subVectors(e.a,sa),Ks.subVectors(e.b,sa),Qs.subVectors(e.c,sa),Pr.subVectors(Ks,Js),Ir.subVectors(Qs,Ks),es.subVectors(Js,Qs);let t=[0,-Pr.z,Pr.y,0,-Ir.z,Ir.y,0,-es.z,es.y,Pr.z,0,-Pr.x,Ir.z,0,-Ir.x,es.z,0,-es.x,-Pr.y,Pr.x,0,-Ir.y,Ir.x,0,-es.y,es.x,0];return!rf(t,Js,Ks,Qs,ac)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,Js,Ks,Qs,ac))?!1:(lc.crossVectors(Pr,Ir),t=[lc.x,lc.y,lc.z],rf(t,Js,Ks,Qs,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new U,new U,new U,new U,new U,new U,new U,new U],Si=new U,oc=new vn,Js=new U,Ks=new U,Qs=new U,Pr=new U,Ir=new U,es=new U,sa=new U,ac=new U,lc=new U,ts=new U;function rf(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){ts.fromArray(r,s);const c=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),u=e.dot(ts),h=t.dot(ts),f=n.dot(ts);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const eM=new vn,oa=new U,sf=new U;class _n{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):eM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(sf)),this.expandByPoint(oa.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rr=new U,of=new U,cc=new U,Lr=new U,af=new U,uc=new U,lf=new U;class Is{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){of.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(of);const s=e.distanceTo(t)*.5,l=-this.direction.dot(cc),c=Lr.dot(this.direction),u=-Lr.dot(cc),h=Lr.lengthSq(),f=Math.abs(1-l*l);let p,m,g,y;if(f>0)if(p=l*u-c,m=l*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const M=1/f;p*=M,m*=M,g=p*(p+l*m+2*c)+m*(l*p+m+2*u)+h}else m=s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-l*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(l*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=l>0?-s:s,p=Math.max(0,-(l*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(of).addScaledVector(cc,m),g}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,l=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,l=(e.min.y-m.y)*f),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,i,s){af.subVectors(t,e),uc.subVectors(n,e),lf.crossVectors(af,uc);let l=this.direction.dot(lf),c;if(l>0){if(i)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Lr.subVectors(this.origin,e);const u=c*this.direction.dot(uc.crossVectors(Lr,uc));if(u<0)return null;const h=c*this.direction.dot(af.cross(Lr));if(h<0||u+h>l)return null;const f=-c*Lr.dot(lf);return f<0?null:this.at(f/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,s,l,c,u,h,f,p,m,g,y,M,x){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,l,c,u,h,f,p,m,g,y,M,x)}set(e,t,n,i,s,l,c,u,h,f,p,m,g,y,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=l,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),l=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=l*f,g=l*p,y=c*f,M=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+y*h,t[5]=m-M*h,t[9]=-c*u,t[2]=M-m*h,t[6]=y+g*h,t[10]=l*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m+M*c,t[4]=y*c-g,t[8]=l*h,t[1]=l*p,t[5]=l*f,t[9]=-c,t[2]=g*c-y,t[6]=M+m*c,t[10]=l*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,y=h*f,M=h*p;t[0]=m-M*c,t[4]=-l*p,t[8]=y+g*c,t[1]=g+y*c,t[5]=l*f,t[9]=M-m*c,t[2]=-l*h,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const m=l*f,g=l*p,y=c*f,M=c*p;t[0]=u*f,t[4]=y*h-g,t[8]=m*h+M,t[1]=u*p,t[5]=M*h+m,t[9]=g*h-y,t[2]=-h,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const m=l*u,g=l*h,y=c*u,M=c*h;t[0]=u*f,t[4]=M-m*p,t[8]=y*p+g,t[1]=p,t[5]=l*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+y,t[10]=m-M*p}else if(e.order==="XZY"){const m=l*u,g=l*h,y=c*u,M=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+M,t[5]=l*f,t[9]=g*p-y,t[2]=y*p-g,t[6]=c*f,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,t,n){const i=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Dr.crossVectors(n,ei),Dr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Dr.crossVectors(n,ei)),Dr.normalize(),hc.crossVectors(ei,Dr),i[0]=Dr.x,i[4]=hc.x,i[8]=ei.x,i[1]=Dr.y,i[5]=hc.y,i[9]=ei.y,i[2]=Dr.z,i[6]=hc.z,i[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],M=n[6],x=n[10],_=n[14],E=n[3],w=n[7],b=n[11],N=n[15],R=i[0],L=i[4],O=i[8],C=i[12],T=i[1],D=i[5],q=i[9],W=i[13],Q=i[2],se=i[6],K=i[10],fe=i[14],F=i[3],j=i[7],Z=i[11],re=i[15];return s[0]=l*R+c*T+u*Q+h*F,s[4]=l*L+c*D+u*se+h*j,s[8]=l*O+c*q+u*K+h*Z,s[12]=l*C+c*W+u*fe+h*re,s[1]=f*R+p*T+m*Q+g*F,s[5]=f*L+p*D+m*se+g*j,s[9]=f*O+p*q+m*K+g*Z,s[13]=f*C+p*W+m*fe+g*re,s[2]=y*R+M*T+x*Q+_*F,s[6]=y*L+M*D+x*se+_*j,s[10]=y*O+M*q+x*K+_*Z,s[14]=y*C+M*W+x*fe+_*re,s[3]=E*R+w*T+b*Q+N*F,s[7]=E*L+w*D+b*se+N*j,s[11]=E*O+w*q+b*K+N*Z,s[15]=E*C+w*W+b*fe+N*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],y=e[3],M=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+M*(+t*u*g-t*h*m+s*l*m-i*l*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*l*p+n*l*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*l*p-n*l*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],y=e[12],M=e[13],x=e[14],_=e[15],E=p*x*h-M*m*h+M*u*g-c*x*g-p*u*_+c*m*_,w=y*m*h-f*x*h-y*u*g+l*x*g+f*u*_-l*m*_,b=f*M*h-y*p*h+y*c*g-l*M*g-f*c*_+l*p*_,N=y*p*u-f*M*u-y*c*m+l*M*m+f*c*x-l*p*x,R=t*E+n*w+i*b+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=E*L,e[1]=(M*m*s-p*x*s-M*i*g+n*x*g+p*i*_-n*m*_)*L,e[2]=(c*x*s-M*u*s+M*i*h-n*x*h-c*i*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*L,e[4]=w*L,e[5]=(f*x*s-y*m*s+y*i*g-t*x*g-f*i*_+t*m*_)*L,e[6]=(y*u*s-l*x*s-y*i*h+t*x*h+l*i*_-t*u*_)*L,e[7]=(l*m*s-f*u*s+f*i*h-t*m*h-l*i*g+t*u*g)*L,e[8]=b*L,e[9]=(y*p*s-f*M*s-y*n*g+t*M*g+f*n*_-t*p*_)*L,e[10]=(l*M*s-y*c*s+y*n*h-t*M*h-l*n*_+t*c*_)*L,e[11]=(f*c*s-l*p*s-f*n*h+t*p*h+l*n*g-t*c*g)*L,e[12]=N*L,e[13]=(f*M*i-y*p*i+y*n*m-t*M*m-f*n*x+t*p*x)*L,e[14]=(y*c*i-l*M*i-y*n*u+t*M*u+l*n*x-t*c*x)*L,e[15]=(l*p*i-f*c*i+f*n*u-t*p*u-l*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,c=e.y,u=e.z,h=s*l,f=s*c;return this.set(h*l+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*l,0,h*u-i*c,f*u+i*l,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,c=t._z,u=t._w,h=s+s,f=l+l,p=c+c,m=s*h,g=s*f,y=s*p,M=l*f,x=l*p,_=c*p,E=u*h,w=u*f,b=u*p,N=n.x,R=n.y,L=n.z;return i[0]=(1-(M+_))*N,i[1]=(g+b)*N,i[2]=(y-w)*N,i[3]=0,i[4]=(g-b)*R,i[5]=(1-(m+_))*R,i[6]=(x+E)*R,i[7]=0,i[8]=(y+w)*L,i[9]=(x-E)*L,i[10]=(1-(m+M))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$s.set(i[0],i[1],i[2]).length();const l=$s.set(i[4],i[5],i[6]).length(),c=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mi.copy(this);const h=1/s,f=1/l,p=1/c;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=f,Mi.elements[5]*=f,Mi.elements[6]*=f,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,t.setFromRotationMatrix(Mi),n.x=s,n.y=l,n.z=c,this}makePerspective(e,t,n,i,s,l,c=Xi){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(c===Xi)g=-(l+s)/(l-s),y=-2*l*s/(l-s);else if(c===za)g=-l/(l-s),y=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,l,c=Xi){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(l-s),m=(t+e)*h,g=(n+i)*f;let y,M;if(c===Xi)y=(l+s)*p,M=-2*p;else if(c===za)y=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new U,Mi=new st,tM=new U(0,0,0),nM=new U(1,1,1),Dr=new U,hc=new U,ei=new U,xg=new st,Sg=new Pn;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Es{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const Mg=new U,eo=new Pn,sr=new st,fc=new U,aa=new U,rM=new U,sM=new Pn,wg=new U(1,0,0),Eg=new U(0,1,0),Ag=new U(0,0,1),bg={type:"added"},oM={type:"removed"},to={type:"childadded",child:null},cf={type:"childremoved",child:null};class Dt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new U,t=new oi,n=new Pn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new pt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,t){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fc.copy(e):fc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(aa,fc,this.up):sr.lookAt(fc,aa,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(sr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bg),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oM),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++){const c=i[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),h=l(e.textures),f=l(e.images),p=l(e.shapes),m=l(e.skeletons),g=l(e.animations),y=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function l(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new U(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new U,or=new U,uf=new U,ar=new U,no=new U,io=new U,Tg=new U,hf=new U,ff=new U,df=new U;class ni{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),or.subVectors(n,t),uf.subVectors(e,t);const l=wi.dot(wi),c=wi.dot(or),u=wi.dot(uf),h=or.dot(or),f=or.dot(uf),p=l*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,y=(l*f-c*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,l,c,u){return this.getBarycoord(e,t,n,i,ar)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ar.x),u.addScaledVector(l,ar.y),u.addScaledVector(c,ar.z),u)}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),or.subVectors(e,t),wi.cross(or).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),wi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,c;no.subVectors(i,n),io.subVectors(s,n),hf.subVectors(e,n);const u=no.dot(hf),h=io.dot(hf);if(u<=0&&h<=0)return t.copy(n);ff.subVectors(e,i);const f=no.dot(ff),p=io.dot(ff);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return l=u/(u-f),t.copy(n).addScaledVector(no,l);df.subVectors(e,s);const g=no.dot(df),y=io.dot(df);if(y>=0&&g<=y)return t.copy(s);const M=g*h-u*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(io,c);const x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return Tg.subVectors(s,i),c=(p-f)/(p-f+(g-y)),t.copy(i).addScaledVector(Tg,c);const _=1/(x+M+m);return l=M*_,c=m*_,t.copy(n).addScaledVector(no,l).addScaledVector(io,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},dc={h:0,s:0,l:0};function pf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ut.workingColorSpace){if(e=tp(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=pf(l,s,e+1/3),this.g=pf(l,s,e),this.b=pf(l,s,e-1/3)}return Ut.toWorkingColorSpace(this,i),this}setStyle(e,t=gi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],c=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const n=R_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=ef(e.r),this.g=ef(e.g),this.b=ef(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Ut.fromWorkingColorSpace(Cn.copy(this),e),Math.round(jt(Cn.r*255,0,255))*65536+Math.round(jt(Cn.g*255,0,255))*256+Math.round(jt(Cn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b,l=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+l)/2;if(c===l)u=0,h=0;else{const p=l-c;switch(h=f<=.5?p/(l+c):p/(2-l-c),l){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=gi){Ut.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,n=Cn.g,i=Cn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(dc);const n=wa(Ur.h,dc.h,t),i=wa(Ur.s,dc.s,t),s=wa(Ur.l,dc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ve;Ve.NAMES=R_;let aM=0;class In extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Ss,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=fu,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==fu&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vr extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=lM();function lM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)l[u]=u<<23;l[31]=1199570944,l[32]=2147483648;for(let u=33;u<63;++u)l[u]=2147483648+(u-32<<23);l[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:l,offsetTable:c}}function qn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=jt(r,-65504,65504),hr.floatView[0]=r;const e=hr.uint32View[0],t=e>>23&511;return hr.baseTable[t]+((e&8388607)>>hr.shiftTable[t])}function ya(r){const e=r>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[e]+(r&1023)]+hr.exponentTable[e],hr.floatView[0]}const cM={toHalfFloat:qn,fromHalfFloat:ya},rn=new U,pc=new ue;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return np("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class uM extends Ot{constructor(e,t,n){super(new Int8Array(e),t,n)}}class hM extends Ot{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class fM extends Ot{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class dM extends Ot{constructor(e,t,n){super(new Int16Array(e),t,n)}}class rp extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pM extends Ot{constructor(e,t,n){super(new Int32Array(e),t,n)}}class sp extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mM extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ya(this.array[e*this.itemSize]);return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=qn(t),this}getY(e){let t=ya(this.array[e*this.itemSize+1]);return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=qn(t),this}getZ(e){let t=ya(this.array[e*this.itemSize+2]);return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=qn(t),this}getW(e){let t=ya(this.array[e*this.itemSize+3]);return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=qn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(i),this.array[e+3]=qn(s),this}}class qe extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gM=0;const mi=new st,mf=new Dt,ro=new U,ti=new vn,la=new vn,mn=new U;class yt extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A_(e)?sp:rp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const c=t[s];la.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(ti.min,la.min),ti.expandByPoint(mn),mn.addVectors(ti.max,la.max),ti.expandByPoint(mn)):(ti.expandByPoint(la.min),ti.expandByPoint(la.max))}ti.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,l=t.length;s<l;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)mn.fromBufferAttribute(c,h),u&&(ro.fromBufferAttribute(e,h),mn.add(ro)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let O=0;O<n.count;O++)c[O]=new U,u[O]=new U;const h=new U,f=new U,p=new U,m=new ue,g=new ue,y=new ue,M=new U,x=new U;function _(O,C,T){h.fromBufferAttribute(n,O),f.fromBufferAttribute(n,C),p.fromBufferAttribute(n,T),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,C),y.fromBufferAttribute(s,T),f.sub(h),p.sub(h),g.sub(m),y.sub(m);const D=1/(g.x*y.y-y.x*g.y);isFinite(D)&&(M.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(D),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(D),c[O].add(M),c[C].add(M),c[T].add(M),u[O].add(x),u[C].add(x),u[T].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,C=E.length;O<C;++O){const T=E[O],D=T.start,q=T.count;for(let W=D,Q=D+q;W<Q;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new U,b=new U,N=new U,R=new U;function L(O){N.fromBufferAttribute(i,O),R.copy(N);const C=c[O];w.copy(C),w.sub(N.multiplyScalar(N.dot(C))).normalize(),b.crossVectors(R,C);const D=b.dot(u[O])<0?-1:1;l.setXYZW(O,w.x,w.y,w.z,D)}for(let O=0,C=E.length;O<C;++O){const T=E[O],D=T.start,q=T.count;for(let W=D,Q=D+q;W<Q;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new U,s=new U,l=new U,c=new U,u=new U,h=new U,f=new U,p=new U;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,x),f.subVectors(l,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),f.subVectors(l,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,y=0;for(let M=0,x=u.length;M<x;M++){c.isInterleavedBufferAttribute?g=u[M]*c.data.stride+c.offset:g=u[M]*f;for(let _=0;_<f;_++)m[y++]=h[g++]}return new Ot(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,f=l.length;h<f;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new st,ns=new Is,mc=new _n,Rg=new U,so=new U,oo=new U,ao=new U,gf=new U,gc=new U,vc=new ue,_c=new ue,yc=new ue,Pg=new U,Ig=new U,Lg=new U,xc=new U,Sc=new U;class $t extends Dt{constructor(e=new yt,t=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){gc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(gf.fromBufferAttribute(p,e),l?gc.addScaledVector(gf,f):gc.addScaledVector(gf.sub(t),f))}t.add(gc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),ns.copy(e.ray).recast(e.near),!(mc.containsPoint(ns.origin)===!1&&(ns.intersectSphere(mc,Rg)===null||ns.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),ns.copy(e.ray).applyMatrix4(Cg),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i;const s=this.geometry,l=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(l))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=l[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let b=E,N=w;b<N;b+=3){const R=c.getX(b),L=c.getX(b+1),O=c.getX(b+2);i=Mc(this,_,e,n,h,f,p,R,L,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=c.getX(x),w=c.getX(x+1),b=c.getX(x+2);i=Mc(this,l,e,n,h,f,p,E,w,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,M=m.length;y<M;y++){const x=m[y],_=l[x.materialIndex],E=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let b=E,N=w;b<N;b+=3){const R=b,L=b+1,O=b+2;i=Mc(this,_,e,n,h,f,p,R,L,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let x=y,_=M;x<_;x+=3){const E=x,w=x+1,b=x+2;i=Mc(this,l,e,n,h,f,p,E,w,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function vM(r,e,t,n,i,s,l,c){let u;if(e.side===kn?u=n.intersectTriangle(l,s,i,!0,c):u=n.intersectTriangle(i,s,l,e.side===mr,c),u===null)return null;Sc.copy(c),Sc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Sc);return h<t.near||h>t.far?null:{distance:h,point:Sc.clone(),object:r}}function Mc(r,e,t,n,i,s,l,c,u,h){r.getVertexPosition(c,so),r.getVertexPosition(u,oo),r.getVertexPosition(h,ao);const f=vM(r,e,t,n,so,oo,ao,xc);if(f){i&&(vc.fromBufferAttribute(i,c),_c.fromBufferAttribute(i,u),yc.fromBufferAttribute(i,h),f.uv=ni.getInterpolation(xc,so,oo,ao,vc,_c,yc,new ue)),s&&(vc.fromBufferAttribute(s,c),_c.fromBufferAttribute(s,u),yc.fromBufferAttribute(s,h),f.uv1=ni.getInterpolation(xc,so,oo,ao,vc,_c,yc,new ue)),l&&(Pg.fromBufferAttribute(l,c),Ig.fromBufferAttribute(l,u),Lg.fromBufferAttribute(l,h),f.normal=ni.getInterpolation(xc,so,oo,ao,Pg,Ig,Lg,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:c,b:u,c:h,normal:new U,materialIndex:0};ni.getNormal(so,oo,ao,p.normal),f.face=p}return f}class Ls extends yt{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const c=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const u=[],h=[],f=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,l,s,0),y("z","y","x",1,-1,n,t,-e,l,s,1),y("x","z","y",1,1,e,n,t,i,l,2),y("x","z","y",1,-1,e,n,-t,i,l,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(p,2));function y(M,x,_,E,w,b,N,R,L,O,C){const T=b/L,D=N/O,q=b/2,W=N/2,Q=R/2,se=L+1,K=O+1;let fe=0,F=0;const j=new U;for(let Z=0;Z<K;Z++){const re=Z*D-W;for(let Se=0;Se<se;Se++){const Ue=Se*T-q;j[M]=Ue*E,j[x]=re*w,j[_]=Q,h.push(j.x,j.y,j.z),j[M]=0,j[x]=0,j[_]=R>0?1:-1,f.push(j.x,j.y,j.z),p.push(Se/L),p.push(1-Z/O),fe+=1}}for(let Z=0;Z<O;Z++)for(let re=0;re<L;re++){const Se=m+re+se*Z,Ue=m+re+se*(Z+1),ne=m+(re+1)+se*(Z+1),me=m+(re+1)+se*Z;u.push(Se,Ue,me),u.push(Ue,ne,me),F+=6}c.addGroup(g,F,C),g+=F,m+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Fn(r){const e={};for(let t=0;t<r.length;t++){const n=Po(r[t]);for(const i in n)e[i]=n[i]}return e}function _M(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function P_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const pu={clone:Po,merge:Fn};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qa extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new U,Dg=new ue,Ug=new ue;class Xt extends Qa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Dg,Ug),t.subVectors(Ug,Dg)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;s+=l.offsetX*i/u,t-=l.offsetY*n/h,i*=l.width/u,n*=l.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,co=1;class I_ extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(lo,co,e,t);i.layers=this.layers,this.add(i);const s=new Xt(lo,co,e,t);s.layers=this.layers,this.add(s);const l=new Xt(lo,co,e,t);l.layers=this.layers,this.add(l);const c=new Xt(lo,co,e,t);c.layers=this.layers,this.add(c);const u=new Xt(lo,co,e,t);u.layers=this.layers,this.add(u);const h=new Xt(lo,co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,l,c,u]=t;for(const h of t)this.remove(h);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class $a extends Jt{constructor(e,t,n,i,s,l,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,s,l,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $a(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ls(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:dr});s.uniforms.tEquirect.value=t;const l=new $t(i,s),c=t.minFilter;return t.minFilter===Wi&&(t.minFilter=sn),new I_(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}const vf=new U,SM=new U,MM=new pt;class cr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vf.subVectors(n,t).cross(SM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||MM.getNormalMatrix(e),i=this.coplanarPoint(vf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new _n,wc=new U;class el{constructor(e=new cr,t=new cr,n=new cr,i=new cr,s=new cr,l=new cr){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,s=i[0],l=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],y=i[9],M=i[10],x=i[11],_=i[12],E=i[13],w=i[14],b=i[15];if(n[0].setComponents(u-s,m-h,x-g,b-_).normalize(),n[1].setComponents(u+s,m+h,x+g,b+_).normalize(),n[2].setComponents(u+l,m+f,x+y,b+E).normalize(),n[3].setComponents(u-l,m-f,x-y,b-E).normalize(),n[4].setComponents(u-c,m-p,x-M,b-w).normalize(),t===Xi)n[5].setComponents(u+c,m+p,x+M,b+w).normalize();else if(t===za)n[5].setComponents(c,p,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wc.x=i.normal.x>0?e.max.x:e.min.x,wc.y=i.normal.y>0?e.max.y:e.min.y,wc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D_(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function wM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&m.length===0&&r.bufferSubData(h,0,f),m.length!==0){for(let g=0,y=m.length;g<y;g++){const M=m[g];r.bufferSubData(h,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}u.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:l}}class No extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],y=[],M=[],x=[];for(let _=0;_<f;_++){const E=_*m-l;for(let w=0;w<h;w++){const b=w*p-s;y.push(b,-E,0),M.push(0,0,1),x.push(w/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const w=E+h*_,b=E+h*(_+1),N=E+1+h*(_+1),R=E+1+h*_;g.push(w,b,R),g.push(b,N,R)}this.setIndex(g),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(M,3)),this.setAttribute("uv",new qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,qM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ww=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,I1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:EM,alphahash_pars_fragment:AM,alphamap_fragment:bM,alphamap_pars_fragment:TM,alphatest_fragment:CM,alphatest_pars_fragment:RM,aomap_fragment:PM,aomap_pars_fragment:IM,batching_pars_vertex:LM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:NM,bsdfs:OM,iridescence_fragment:FM,bumpmap_pars_fragment:zM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:VM,color_fragment:GM,color_pars_fragment:WM,color_pars_vertex:XM,color_vertex:YM,common:qM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:jM,displacementmap_pars_vertex:JM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:$M,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:rw,envmap_pars_vertex:sw,envmap_physical_pars_fragment:gw,envmap_vertex:ow,fog_vertex:aw,fog_pars_vertex:lw,fog_fragment:cw,fog_pars_fragment:uw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:fw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:vw,lights_toon_pars_fragment:_w,lights_phong_fragment:yw,lights_phong_pars_fragment:xw,lights_physical_fragment:Sw,lights_physical_pars_fragment:Mw,lights_fragment_begin:ww,lights_fragment_maps:Ew,lights_fragment_end:Aw,logdepthbuf_fragment:bw,logdepthbuf_pars_fragment:Tw,logdepthbuf_pars_vertex:Cw,logdepthbuf_vertex:Rw,map_fragment:Pw,map_pars_fragment:Iw,map_particle_fragment:Lw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Uw,metalnessmap_pars_fragment:Nw,morphinstance_vertex:Ow,morphcolor_vertex:Fw,morphnormal_vertex:zw,morphtarget_pars_vertex:Bw,morphtarget_vertex:kw,normal_fragment_begin:Hw,normal_fragment_maps:Vw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:Xw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:qw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:jw,iridescence_pars_fragment:Jw,opaque_fragment:Kw,packing:Qw,premultiplied_alpha_fragment:$w,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:u1,skinning_vertex:h1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:_1,uv_pars_fragment:y1,uv_pars_vertex:x1,uv_vertex:S1,worldpos_vertex:M1,background_vert:w1,background_frag:E1,backgroundCube_vert:A1,backgroundCube_frag:b1,cube_vert:T1,cube_frag:C1,depth_vert:R1,depth_frag:P1,distanceRGBA_vert:I1,distanceRGBA_frag:L1,equirect_vert:D1,equirect_frag:U1,linedashed_vert:N1,linedashed_frag:O1,meshbasic_vert:F1,meshbasic_frag:z1,meshlambert_vert:B1,meshlambert_frag:k1,meshmatcap_vert:H1,meshmatcap_frag:V1,meshnormal_vert:G1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:Z1,meshtoon_vert:j1,meshtoon_frag:J1,points_vert:K1,points_frag:Q1,shadow_vert:$1,shadow_frag:eE,sprite_vert:tE,sprite_frag:nE},Fe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},bi={basic:{uniforms:Fn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Fn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Fn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Fn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Fn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Fn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Fn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Fn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Fn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Fn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Fn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Fn([Fe.common,Fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Fn([Fe.lights,Fe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};bi.physical={uniforms:Fn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ec={r:0,b:0,g:0},rs=new oi,iE=new st;function rE(r,e,t,n,i,s,l){const c=new Ve(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function M(E){let w=!1;const b=y(E);b===null?_(c,u):b&&b.isColor&&(_(b,1),w=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(E,w){const b=y(w);b&&(b.isCubeTexture||b.mapping===Uo)?(f===void 0&&(f=new $t(new Ls(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Po(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),rs.copy(w.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(iE.makeRotationFromEuler(rs)),f.material.toneMapped=Ut.getTransfer(b.colorSpace)!==kt,(p!==b||m!==b.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=b,m=b.version,g=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new $t(new No(2,2),new _i({name:"BackgroundMaterial",uniforms:Po(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(b.colorSpace)!==kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||m!==b.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=b,m=b.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,w){E.getRGB(Ec,P_(r)),n.buffers.color.setClear(Ec.r,Ec.g,Ec.b,w,l)}return{getClearColor:function(){return c},setClearColor:function(E,w=1){c.set(E),u=w,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:M,addToRenderList:x}}function sE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,l=!1;function c(T,D,q,W,Q){let se=!1;const K=p(W,q,D);s!==K&&(s=K,h(s.object)),se=g(T,W,q,Q),se&&y(T,W,q,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(se||l)&&(l=!1,b(T,D,q,W),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function f(T){return r.deleteVertexArray(T)}function p(T,D,q){const W=q.wireframe===!0;let Q=n[T.id];Q===void 0&&(Q={},n[T.id]=Q);let se=Q[D.id];se===void 0&&(se={},Q[D.id]=se);let K=se[W];return K===void 0&&(K=m(u()),se[W]=K),K}function m(T){const D=[],q=[],W=[];for(let Q=0;Q<t;Q++)D[Q]=0,q[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:W,object:T,attributes:{},index:null}}function g(T,D,q,W){const Q=s.attributes,se=D.attributes;let K=0;const fe=q.getAttributes();for(const F in fe)if(fe[F].location>=0){const Z=Q[F];let re=se[F];if(re===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;K++}return s.attributesNum!==K||s.index!==W}function y(T,D,q,W){const Q={},se=D.attributes;let K=0;const fe=q.getAttributes();for(const F in fe)if(fe[F].location>=0){let Z=se[F];Z===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),Q[F]=re,K++}s.attributes=Q,s.attributesNum=K,s.index=W}function M(){const T=s.newAttributes;for(let D=0,q=T.length;D<q;D++)T[D]=0}function x(T){_(T,0)}function _(T,D){const q=s.newAttributes,W=s.enabledAttributes,Q=s.attributeDivisors;q[T]=1,W[T]===0&&(r.enableVertexAttribArray(T),W[T]=1),Q[T]!==D&&(r.vertexAttribDivisor(T,D),Q[T]=D)}function E(){const T=s.newAttributes,D=s.enabledAttributes;for(let q=0,W=D.length;q<W;q++)D[q]!==T[q]&&(r.disableVertexAttribArray(q),D[q]=0)}function w(T,D,q,W,Q,se,K){K===!0?r.vertexAttribIPointer(T,D,q,Q,se):r.vertexAttribPointer(T,D,q,W,Q,se)}function b(T,D,q,W){M();const Q=W.attributes,se=q.getAttributes(),K=D.defaultAttributeValues;for(const fe in se){const F=se[fe];if(F.location>=0){let j=Q[fe];if(j===void 0&&(fe==="instanceMatrix"&&T.instanceMatrix&&(j=T.instanceMatrix),fe==="instanceColor"&&T.instanceColor&&(j=T.instanceColor)),j!==void 0){const Z=j.normalized,re=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const Ue=Se.buffer,ne=Se.type,me=Se.bytesPerElement,Ce=ne===r.INT||ne===r.UNSIGNED_INT||j.gpuType===Yd;if(j.isInterleavedBufferAttribute){const Me=j.data,$e=Me.stride,ot=j.offset;if(Me.isInstancedInterleavedBuffer){for(let We=0;We<F.locationSize;We++)_(F.location+We,Me.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let We=0;We<F.locationSize;We++)x(F.location+We);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let We=0;We<F.locationSize;We++)w(F.location+We,re/F.locationSize,ne,Z,$e*me,(ot+re/F.locationSize*We)*me,Ce)}else{if(j.isInstancedBufferAttribute){for(let Me=0;Me<F.locationSize;Me++)_(F.location+Me,j.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<F.locationSize;Me++)x(F.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Me=0;Me<F.locationSize;Me++)w(F.location+Me,re/F.locationSize,ne,Z,re*me,re/F.locationSize*Me*me,Ce)}}else if(K!==void 0){const Z=K[fe];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(F.location,Z);break;case 3:r.vertexAttrib3fv(F.location,Z);break;case 4:r.vertexAttrib4fv(F.location,Z);break;default:r.vertexAttrib1fv(F.location,Z)}}}}E()}function N(){O();for(const T in n){const D=n[T];for(const q in D){const W=D[q];for(const Q in W)f(W[Q].object),delete W[Q];delete D[q]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const q in D){const W=D[q];for(const Q in W)f(W[Q].object),delete W[Q];delete D[q]}delete n[T.id]}function L(T){for(const D in n){const q=n[D];if(q[T.id]===void 0)continue;const W=q[T.id];for(const Q in W)f(W[Q].object),delete W[Q];delete q[T.id]}}function O(){C(),l=!0,s!==i&&(s=i,h(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:O,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function oE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function l(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];t.update(g,n,1)}}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)l(h[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let M=0;M<p;M++)y+=f[M];for(let M=0;M<m.length;M++)t.update(y,n,m[M])}}this.setMode=i,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function aE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(R){return!(R!==Bn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const L=R===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ji&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ii&&!L)}function u(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:b,maxSamples:N}}function lE(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new cr,c=new pt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const E=s?0:n,w=E*4;let b=_.clippingState||null;u.value=b,b=f(y,m,w,g);for(let N=0;N!==w;++N)b[N]=t[N];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,y){const M=p!==null?p.length:0;let x=null;if(M!==0){if(x=u.value,y!==!0||x===null){const _=g+M*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,b=g;w!==M;++w,b+=4)l.copy(p[w]).applyMatrix4(E,c),l.normal.toArray(x,b),x[b+3]=l.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function cE(r){let e=new WeakMap;function t(l,c){return c===Ta?l.mapping=gr:c===Ca&&(l.mapping=Br),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ta||c===Ca)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new L_(u.height);return h.fromEquirectangularTexture(r,l),e.set(l,h),l.addEventListener("dispose",i),t(h.texture,l.mapping)}else return null}}return l}function i(l){const c=l.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qi extends Qa{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,l=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Eo=4,Ng=[.125,.215,.35,.446,.526,.582],gs=20,_f=new qi,Og=new Ve;let yf=null,xf=0,Sf=0,Mf=!1;const ms=(1+Math.sqrt(5))/2,uo=1/ms,Fg=[new U(-ms,uo,0),new U(ms,uo,0),new U(-uo,0,ms),new U(uo,0,ms),new U(0,ms,-uo),new U(0,ms,uo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){yf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,xf,Sf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ja,format:Bn,colorSpace:_r,depthBuffer:!1},i=zg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uE(s)),this._blurMaterial=hE(s,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,_f)}_sceneToCubeUV(e,t,n,i){const c=new Xt(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Og),f.toneMapping=Yi,f.autoClear=!1;const g=new Vr({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new $t(new Ls,g);let M=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,M=!0):(g.color.copy(Og),M=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const w=this._cubeSize;Ac(i,E*w,_>2?w:0,w,w),f.setRenderTarget(i),M&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===Br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new $t(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Ac(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,_f)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Fg[(i-s-1)%Fg.length];this._blur(e,s-1,s,l,c)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,c){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new $t(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*gs-1),M=s/y,x=isFinite(s)?1+Math.floor(f*M):gs;x>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gs}`);const _=[];let E=0;for(let L=0;L<gs;++L){const O=L/M,C=Math.exp(-O*O/2);_.push(C),L===0?E+=C:L<x&&(E+=2*C)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:w}=this;m.dTheta.value=y,m.mipInt.value=w-n;const b=this._sizeLods[i],N=3*b*(i>w-Eo?i-w+Eo:0),R=4*(this._cubeSize-b);Ac(t,N,R,3*b,2*b),u.setRenderTarget(t),u.render(p,_f)}}function uE(r){const e=[],t=[],n=[];let i=r;const s=r-Eo+1+Ng.length;for(let l=0;l<s;l++){const c=Math.pow(2,i);t.push(c);let u=1/c;l>r-Eo?u=Ng[l-r+Eo-1]:l===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,M=3,x=2,_=1,E=new Float32Array(M*y*g),w=new Float32Array(x*y*g),b=new Float32Array(_*y*g);for(let R=0;R<g;R++){const L=R%3*2/3-1,O=R>2?0:-1,C=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];E.set(C,M*y*R),w.set(m,x*y*R);const T=[R,R,R,R,R,R];b.set(T,_*y*R)}const N=new yt;N.setAttribute("position",new Ot(E,M)),N.setAttribute("uv",new Ot(w,x)),N.setAttribute("faceIndex",new Ot(b,_)),e.push(N),i>Eo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zg(r,e,t){const n=new Ci(r,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ac(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function hE(r,e,t){const n=new Float32Array(gs),i=new U(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Bg(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function kg(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fE(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ta||u===Ca,f=u===gr||u===Br;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new Ld(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new Ld(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function dE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&np("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pE(r,e,t,n){const i={},s=new WeakMap;function l(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const M=m.morphAttributes[y];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}m.removeEventListener("dispose",l),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",l),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const M=g[y];for(let x=0,_=M.length;x<_;x++)e.update(M[x],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,y=p.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let w=0,b=E.length;w<b;w+=3){const N=E[w+0],R=E[w+1],L=E[w+2];m.push(N,R,R,L,L,N)}}else if(y!==void 0){const E=y.array;M=y.version;for(let w=0,b=E.length/3-1;w<b;w+=3){const N=w+0,R=w+1,L=w+2;m.push(N,R,R,L,L,N)}}else return;const x=new(A_(m)?sp:rp)(m,1);x.version=M;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function mE(r,e,t){let n;function i(m){n=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*l),t.update(g,n,1)}function h(m,g,y){y!==0&&(r.drawElementsInstanced(n,g,s,m*l,y),t.update(g,n,y))}function f(m,g,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y;x++)this.render(m[x]/l,g[x]);else{M.multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}}function p(m,g,y,M){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/l,g[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,M,0,y);let _=0;for(let E=0;E<y;E++)_+=g[E];for(let E=0;E<M.length;E++)t.update(_,n,M[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function gE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,c){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vE(r,e,t){const n=new WeakMap,i=new At;function s(l,c,u){const h=l.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let C=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",C)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let b=c.attributes.position.count*w,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*N*4*p),L=new Eu(R,b,N,p);L.type=ii,L.needsUpdate=!0;const O=w*4;for(let T=0;T<p;T++){const D=x[T],q=_[T],W=E[T],Q=b*N*4*T;for(let se=0;se<D.count;se++){const K=se*O;g===!0&&(i.fromBufferAttribute(D,se),R[Q+K+0]=i.x,R[Q+K+1]=i.y,R[Q+K+2]=i.z,R[Q+K+3]=0),y===!0&&(i.fromBufferAttribute(q,se),R[Q+K+4]=i.x,R[Q+K+5]=i.y,R[Q+K+6]=i.z,R[Q+K+7]=0),M===!0&&(i.fromBufferAttribute(W,se),R[Q+K+8]=i.x,R[Q+K+9]=i.y,R[Q+K+10]=i.z,R[Q+K+11]=W.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new ue(b,N)},n.set(c,m),c.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let g=0;for(let M=0;M<h.length;M++)g+=h[M];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function _E(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function l(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:l}}class ap extends Jt{constructor(e,t,n,i,s,l,c,u,h,f=Ms){if(f!==Ms&&f!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ms&&(n=Ts),n===void 0&&f===Rs&&(n=Cs),super(null,i,s,l,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:gn,this.minFilter=u!==void 0?u:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const U_=new Jt,N_=new ap(1,1);N_.compareFunction=ep;const O_=new Eu,F_=new ip,z_=new $a,Hg=[],Vg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function Oo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Hg[i];if(s===void 0&&(s=new Float32Array(i),Hg[i]=s),e!==0){n.toArray(s,0);for(let l=1,c=0;l!==e;++l)c+=t,r[l].toArray(s,c)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Au(r,e){let t=Vg[e];t===void 0&&(t=new Int32Array(e),Vg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function SE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function wE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Xg.set(n),r.uniformMatrix2fv(this.addr,!1,Xg),hn(t,n)}}function EE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Wg.set(n),r.uniformMatrix3fv(this.addr,!1,Wg),hn(t,n)}}function AE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Gg.set(n),r.uniformMatrix4fv(this.addr,!1,Gg),hn(t,n)}}function bE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function TE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function CE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function RE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function PE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function IE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function LE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function DE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function UE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?N_:U_;t.setTexture2D(e||s,i)}function NE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||F_,i)}function OE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||z_,i)}function FE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||O_,i)}function zE(r){switch(r){case 5126:return yE;case 35664:return xE;case 35665:return SE;case 35666:return ME;case 35674:return wE;case 35675:return EE;case 35676:return AE;case 5124:case 35670:return bE;case 35667:case 35671:return TE;case 35668:case 35672:return CE;case 35669:case 35673:return RE;case 5125:return PE;case 36294:return IE;case 36295:return LE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return FE}}function BE(r,e){r.uniform1fv(this.addr,e)}function kE(r,e){const t=Oo(e,this.size,2);r.uniform2fv(this.addr,t)}function HE(r,e){const t=Oo(e,this.size,3);r.uniform3fv(this.addr,t)}function VE(r,e){const t=Oo(e,this.size,4);r.uniform4fv(this.addr,t)}function GE(r,e){const t=Oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function WE(r,e){const t=Oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function XE(r,e){const t=Oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function YE(r,e){r.uniform1iv(this.addr,e)}function qE(r,e){r.uniform2iv(this.addr,e)}function ZE(r,e){r.uniform3iv(this.addr,e)}function jE(r,e){r.uniform4iv(this.addr,e)}function JE(r,e){r.uniform1uiv(this.addr,e)}function KE(r,e){r.uniform2uiv(this.addr,e)}function QE(r,e){r.uniform3uiv(this.addr,e)}function $E(r,e){r.uniform4uiv(this.addr,e)}function eA(r,e,t){const n=this.cache,i=e.length,s=Au(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||U_,s[l])}function tA(r,e,t){const n=this.cache,i=e.length,s=Au(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||F_,s[l])}function nA(r,e,t){const n=this.cache,i=e.length,s=Au(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||z_,s[l])}function iA(r,e,t){const n=this.cache,i=e.length,s=Au(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||O_,s[l])}function rA(r){switch(r){case 5126:return BE;case 35664:return kE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return YE;case 35667:case 35671:return qE;case 35668:case 35672:return ZE;case 35669:case 35673:return jE;case 5125:return JE;case 36294:return KE;case 36295:return QE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zE(t.type)}}class oA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rA(t.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function Yg(r,e){r.seq.push(e),r.map[e.id]=e}function lA(r,e,t){const n=r.name,i=n.length;for(wf.lastIndex=0;;){const s=wf.exec(n),l=wf.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&l+2===i){Yg(t,h===void 0?new sA(c,r,e):new oA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new aA(c),Yg(t,p)),t=p}}}class cu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);lA(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function qg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const cA=37297;let uA=0;function hA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function fA(r){const e=Ut.getPrimaries(Ut.workingColorSpace),t=Ut.getPrimaries(r);let n;switch(e===t?n="":e===Oa&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===Oa&&(n="LinearSRGBToLinearDisplayP3"),r){case _r:case Ka:return[n,"LinearTransferOETF"];case gi:case wu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+hA(r.getShaderSource(e),l)}else return i}function dA(r,e){const t=fA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pA(r,e){let t;switch(e){case jv:t="Linear";break;case Jv:t="Reinhard";break;case Kv:t="OptimizedCineon";break;case Wd:t="ACESFilmic";break;case $v:t="AgX";break;case e_:t="Neutral";break;case Qv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function gA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:c}}return t}function xa(r){return r!==""}function jg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(r){return r.replace(_A,xA)}const yA=new Map;function xA(r,e){let t=gt[e];if(t===void 0){const n=yA.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(r){return r.replace(SA,MA)}function MA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sa?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function EA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case Br:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case qv:e="ENVMAP_BLENDING_MIX";break;case Zv:e="ENVMAP_BLENDING_ADD";break}return e}function TA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CA(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=wA(t),h=EA(t),f=AA(t),p=bA(t),m=TA(t),g=mA(t),y=gA(s),M=i.createProgram();let x,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xa).join(`
`),_.length>0&&(_+=`
`)):(x=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),_=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?pA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,dA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),l=Dd(l),l=jg(l,t),l=Jg(l,t),c=Dd(c),c=jg(c,t),c=Jg(c,t),l=Kg(l),c=Kg(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=E+x+l,b=E+_+c,N=qg(i,i.VERTEX_SHADER,w),R=qg(i,i.FRAGMENT_SHADER,b);i.attachShader(M,N),i.attachShader(M,R),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function L(D){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(M).trim(),W=i.getShaderInfoLog(N).trim(),Q=i.getShaderInfoLog(R).trim();let se=!0,K=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,N,R);else{const fe=Zg(i,N,"vertex"),F=Zg(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+fe+`
`+F)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||Q==="")&&(K=!1);K&&(D.diagnostics={runnable:se,programLog:q,vertexShader:{log:W,prefix:x},fragmentShader:{log:Q,prefix:_}})}i.deleteShader(N),i.deleteShader(R),O=new cu(i,M),C=vA(i,M)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(M,cA)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=R,this}let RA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new IA(e),t.set(e,n)),n}}class IA{constructor(e){this.id=RA++,this.code=e,this.usedTimes=0}}function LA(r,e,t,n,i,s,l){const c=new Es,u=new PA,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,T,D,q,W){const Q=q.fog,se=W.geometry,K=C.isMeshStandardMaterial?q.environment:null,fe=(C.isMeshStandardMaterial?t:e).get(C.envMap||K),F=fe&&fe.mapping===Uo?fe.image.height:null,j=y[C.type];C.precision!==null&&(g=i.getMaxPrecision(C.precision),g!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",g,"instead."));const Z=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,re=Z!==void 0?Z.length:0;let Se=0;se.morphAttributes.position!==void 0&&(Se=1),se.morphAttributes.normal!==void 0&&(Se=2),se.morphAttributes.color!==void 0&&(Se=3);let Ue,ne,me,Ce;if(j){const wt=bi[j];Ue=wt.vertexShader,ne=wt.fragmentShader}else Ue=C.vertexShader,ne=C.fragmentShader,u.update(C),me=u.getVertexShaderID(C),Ce=u.getFragmentShaderID(C);const Me=r.getRenderTarget(),$e=W.isInstancedMesh===!0,ot=W.isBatchedMesh===!0,We=!!C.map,H=!!C.matcap,he=!!fe,ce=!!C.aoMap,we=!!C.lightMap,_e=!!C.bumpMap,Ee=!!C.normalMap,Le=!!C.displacementMap,Oe=!!C.emissiveMap,et=!!C.metalnessMap,B=!!C.roughnessMap,P=C.anisotropy>0,te=C.clearcoat>0,ge=C.dispersion>0,de=C.iridescence>0,ye=C.sheen>0,Ze=C.transmission>0,Re=P&&!!C.anisotropyMap,De=te&&!!C.clearcoatMap,ct=te&&!!C.clearcoatNormalMap,Te=te&&!!C.clearcoatRoughnessMap,Xe=de&&!!C.iridescenceMap,vt=de&&!!C.iridescenceThicknessMap,at=ye&&!!C.sheenColorMap,ze=ye&&!!C.sheenRoughnessMap,ut=!!C.specularMap,V=!!C.specularColorMap,ve=!!C.specularIntensityMap,k=Ze&&!!C.transmissionMap,xe=Ze&&!!C.thicknessMap,oe=!!C.gradientMap,pe=!!C.alphaMap,be=C.alphaTest>0,lt=!!C.alphaHash,Mt=!!C.extensions;let bt=Yi;C.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(bt=r.toneMapping);const Nt={shaderID:j,shaderType:C.type,shaderName:C.name,vertexShader:Ue,fragmentShader:ne,defines:C.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:g,batching:ot,batchingColor:ot&&W._colorsTexture!==null,instancing:$e,instancingColor:$e&&W.instanceColor!==null,instancingMorph:$e&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:_r,alphaToCoverage:!!C.alphaToCoverage,map:We,matcap:H,envMap:he,envMapMode:he&&fe.mapping,envMapCubeUVHeight:F,aoMap:ce,lightMap:we,bumpMap:_e,normalMap:Ee,displacementMap:m&&Le,emissiveMap:Oe,normalMapObjectSpace:Ee&&C.normalMapType===g_,normalMapTangentSpace:Ee&&C.normalMapType===Hr,metalnessMap:et,roughnessMap:B,anisotropy:P,anisotropyMap:Re,clearcoat:te,clearcoatMap:De,clearcoatNormalMap:ct,clearcoatRoughnessMap:Te,dispersion:ge,iridescence:de,iridescenceMap:Xe,iridescenceThicknessMap:vt,sheen:ye,sheenColorMap:at,sheenRoughnessMap:ze,specularMap:ut,specularColorMap:V,specularIntensityMap:ve,transmission:Ze,transmissionMap:k,thicknessMap:xe,gradientMap:oe,opaque:C.transparent===!1&&C.blending===Ss&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:be,alphaHash:lt,combine:C.combine,mapUv:We&&M(C.map.channel),aoMapUv:ce&&M(C.aoMap.channel),lightMapUv:we&&M(C.lightMap.channel),bumpMapUv:_e&&M(C.bumpMap.channel),normalMapUv:Ee&&M(C.normalMap.channel),displacementMapUv:Le&&M(C.displacementMap.channel),emissiveMapUv:Oe&&M(C.emissiveMap.channel),metalnessMapUv:et&&M(C.metalnessMap.channel),roughnessMapUv:B&&M(C.roughnessMap.channel),anisotropyMapUv:Re&&M(C.anisotropyMap.channel),clearcoatMapUv:De&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:ct&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:at&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(C.sheenRoughnessMap.channel),specularMapUv:ut&&M(C.specularMap.channel),specularColorMapUv:V&&M(C.specularColorMap.channel),specularIntensityMapUv:ve&&M(C.specularIntensityMap.channel),transmissionMapUv:k&&M(C.transmissionMap.channel),thicknessMapUv:xe&&M(C.thicknessMap.channel),alphaMapUv:pe&&M(C.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ee||P),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!se.attributes.uv&&(We||pe),fog:!!Q,useFog:C.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:bt,decodeVideoTexture:We&&C.map.isVideoTexture===!0&&Ut.getTransfer(C.map.colorSpace)===kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ti,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Mt&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Mt&&C.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Nt.vertexUv1s=h.has(1),Nt.vertexUv2s=h.has(2),Nt.vertexUv3s=h.has(3),h.clear(),Nt}function _(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const D in C.defines)T.push(D),T.push(C.defines[D]);return C.isRawShaderMaterial===!1&&(E(T,C),w(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function E(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function w(C,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.skinning&&c.enable(4),T.morphTargets&&c.enable(5),T.morphNormals&&c.enable(6),T.morphColors&&c.enable(7),T.premultipliedAlpha&&c.enable(8),T.shadowMapEnabled&&c.enable(9),T.doubleSided&&c.enable(10),T.flipSided&&c.enable(11),T.useDepthPacking&&c.enable(12),T.dithering&&c.enable(13),T.transmission&&c.enable(14),T.sheen&&c.enable(15),T.opaque&&c.enable(16),T.pointsUvs&&c.enable(17),T.decodeVideoTexture&&c.enable(18),T.alphaToCoverage&&c.enable(19),C.push(c.mask)}function b(C){const T=y[C.type];let D;if(T){const q=bi[T];D=pu.clone(q.uniforms)}else D=C.uniforms;return D}function N(C,T){let D;for(let q=0,W=f.length;q<W;q++){const Q=f[q];if(Q.cacheKey===T){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new CA(r,T,C,s),f.push(D)),D}function R(C){if(--C.usedTimes===0){const T=f.indexOf(C);f[T]=f[f.length-1],f.pop(),C.destroy()}}function L(C){u.remove(C)}function O(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:b,acquireProgram:N,releaseProgram:R,releaseShaderCache:L,programs:f,dispose:O}}function DA(){let r=new WeakMap;function e(s){let l=r.get(s);return l===void 0&&(l={},r.set(s,l)),l}function t(s){r.delete(s)}function n(s,l,c){r.get(s)[l]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function UA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $g(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function e0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(p,m,g,y,M,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:M,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=M,_.group=x),e++,_}function c(p,m,g,y,M,x){const _=l(p,m,g,y,M,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,y,M,x){const _=l(p,m,g,y,M,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||UA),n.length>1&&n.sort(m||$g),i.length>1&&i.sort(m||$g)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function NA(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new e0,r.set(n,[l])):i>=s.length?(l=new e0,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function OA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function FA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zA=0;function BA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kA(r){const e=new OA,t=FA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const i=new U,s=new st,l=new st;function c(h){let f=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let g=0,y=0,M=0,x=0,_=0,E=0,w=0,b=0,N=0,R=0,L=0;h.sort(BA);for(let C=0,T=h.length;C<T;C++){const D=h[C],q=D.color,W=D.intensity,Q=D.distance,se=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=q.r*W,p+=q.g*W,m+=q.b*W;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],W);L++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,F=t.get(D);F.shadowBias=fe.bias,F.shadowNormalBias=fe.normalBias,F.shadowRadius=fe.radius,F.shadowMapSize=fe.mapSize,n.directionalShadow[g]=F,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=D.shadow.matrix,E++}n.directional[g]=K,g++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(q).multiplyScalar(W),K.distance=Q,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[M]=K;const fe=D.shadow;if(D.map&&(n.spotLightMap[N]=D.map,N++,fe.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[M]=fe.matrix,D.castShadow){const F=t.get(D);F.shadowBias=fe.bias,F.shadowNormalBias=fe.normalBias,F.shadowRadius=fe.radius,F.shadowMapSize=fe.mapSize,n.spotShadow[M]=F,n.spotShadowMap[M]=se,b++}M++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(q).multiplyScalar(W),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=K,x++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const fe=D.shadow,F=t.get(D);F.shadowBias=fe.bias,F.shadowNormalBias=fe.normalBias,F.shadowRadius=fe.radius,F.shadowMapSize=fe.mapSize,F.shadowCameraNear=fe.camera.near,F.shadowCameraFar=fe.camera.far,n.pointShadow[y]=F,n.pointShadowMap[y]=se,n.pointShadowMatrix[y]=D.shadow.matrix,w++}n.point[y]=K,y++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(W),K.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[_]=K,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const O=n.hash;(O.directionalLength!==g||O.pointLength!==y||O.spotLength!==M||O.rectAreaLength!==x||O.hemiLength!==_||O.numDirectionalShadows!==E||O.numPointShadows!==w||O.numSpotShadows!==b||O.numSpotMaps!==N||O.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,O.directionalLength=g,O.pointLength=y,O.spotLength=M,O.rectAreaLength=x,O.hemiLength=_,O.numDirectionalShadows=E,O.numPointShadows=w,O.numSpotShadows=b,O.numSpotMaps=N,O.numLightProbes=L,n.version=zA++)}function u(h,f){let p=0,m=0,g=0,y=0,M=0;const x=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const w=h[_];if(w.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),p++}else if(w.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),l.identity(),s.copy(w.matrixWorld),s.premultiply(x),l.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),y++}else if(w.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const b=n.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(x),M++}}}return{setup:c,setupView:u,state:n}}function t0(r){const e=new kA(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function l(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:l}}function HA(r){let e=new WeakMap;function t(i,s=0){const l=e.get(i);let c;return l===void 0?(c=new t0(r),e.set(i,[c])):s>=l.length?(c=new t0(r),l.push(c)):c=l[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class lp extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cp extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WA(r,e,t){let n=new el;const i=new ue,s=new ue,l=new At,c=new lp({depthPacking:m_}),u=new cp,h={},f=t.maxTextureSize,p={[mr]:kn,[kn]:mr,[Ti]:Ti},m=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:VA,fragmentShader:GA}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new yt;y.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $t(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let _=this.type;this.render=function(R,L,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),q=r.state;q.setBlending(dr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=_!==Ei&&this.type===Ei,Q=_===Ei&&this.type!==Ei;for(let se=0,K=R.length;se<K;se++){const fe=R[se],F=fe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const j=F.getFrameExtents();if(i.multiply(j),s.copy(F.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/j.x),i.x=s.x*j.x,F.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/j.y),i.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null||W===!0||Q===!0){const re=this.type!==Ei?{minFilter:gn,magFilter:gn}:{};F.map!==null&&F.map.dispose(),F.map=new Ci(i.x,i.y,re),F.map.texture.name=fe.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const Z=F.getViewportCount();for(let re=0;re<Z;re++){const Se=F.getViewport(re);l.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),q.viewport(l),F.updateMatrices(fe,re),n=F.getFrustum(),b(L,O,F.camera,fe,this.type)}F.isPointLightShadow!==!0&&this.type===Ei&&E(F,O),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(C,T,D)};function E(R,L){const O=e.update(M);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ci(i.x,i.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(L,null,O,m,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(L,null,O,g,M,null)}function w(R,L,O,C){let T=null;const D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)T=D;else if(T=O.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=T.uuid,W=L.uuid;let Q=h[q];Q===void 0&&(Q={},h[q]=Q);let se=Q[W];se===void 0&&(se=T.clone(),Q[W]=se,L.addEventListener("dispose",N)),T=se}if(T.visible=L.visible,T.wireframe=L.wireframe,C===Ei?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:p[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=r.properties.get(T);q.light=O}return T}function b(R,L,O,C,T){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Ei)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const W=e.update(R),Q=R.material;if(Array.isArray(Q)){const se=W.groups;for(let K=0,fe=se.length;K<fe;K++){const F=se[K],j=Q[F.materialIndex];if(j&&j.visible){const Z=w(R,j,C,T);R.onBeforeShadow(r,R,L,O,W,Z,F),r.renderBufferDirect(O,null,W,Z,R,F),R.onAfterShadow(r,R,L,O,W,Z,F)}}}else if(Q.visible){const se=w(R,Q,C,T);R.onBeforeShadow(r,R,L,O,W,se,null),r.renderBufferDirect(O,null,W,se,R,null),R.onAfterShadow(r,R,L,O,W,se,null)}}const q=R.children;for(let W=0,Q=q.length;W<Q;W++)b(q[W],L,O,C,T)}function N(R){R.target.removeEventListener("dispose",N);for(const O in h){const C=h[O],T=R.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function XA(r){function e(){let k=!1;const xe=new At;let oe=null;const pe=new At(0,0,0,0);return{setMask:function(be){oe!==be&&!k&&(r.colorMask(be,be,be,be),oe=be)},setLocked:function(be){k=be},setClear:function(be,lt,Mt,bt,Nt){Nt===!0&&(be*=bt,lt*=bt,Mt*=bt),xe.set(be,lt,Mt,bt),pe.equals(xe)===!1&&(r.clearColor(be,lt,Mt,bt),pe.copy(xe))},reset:function(){k=!1,oe=null,pe.set(-1,0,0,0)}}}function t(){let k=!1,xe=null,oe=null,pe=null;return{setTest:function(be){be?Ce(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(be){xe!==be&&!k&&(r.depthMask(be),xe=be)},setFunc:function(be){if(oe!==be){switch(be){case kv:r.depthFunc(r.NEVER);break;case Hv:r.depthFunc(r.ALWAYS);break;case Vv:r.depthFunc(r.LESS);break;case ba:r.depthFunc(r.LEQUAL);break;case Gv:r.depthFunc(r.EQUAL);break;case Wv:r.depthFunc(r.GEQUAL);break;case Xv:r.depthFunc(r.GREATER);break;case Yv:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=be}},setLocked:function(be){k=be},setClear:function(be){pe!==be&&(r.clearDepth(be),pe=be)},reset:function(){k=!1,xe=null,oe=null,pe=null}}}function n(){let k=!1,xe=null,oe=null,pe=null,be=null,lt=null,Mt=null,bt=null,Nt=null;return{setTest:function(wt){k||(wt?Ce(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(wt){xe!==wt&&!k&&(r.stencilMask(wt),xe=wt)},setFunc:function(wt,on,an){(oe!==wt||pe!==on||be!==an)&&(r.stencilFunc(wt,on,an),oe=wt,pe=on,be=an)},setOp:function(wt,on,an){(lt!==wt||Mt!==on||bt!==an)&&(r.stencilOp(wt,on,an),lt=wt,Mt=on,bt=an)},setLocked:function(wt){k=wt},setClear:function(wt){Nt!==wt&&(r.clearStencil(wt),Nt=wt)},reset:function(){k=!1,xe=null,oe=null,pe=null,be=null,lt=null,Mt=null,bt=null,Nt=null}}}const i=new e,s=new t,l=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,y=!1,M=null,x=null,_=null,E=null,w=null,b=null,N=null,R=new Ve(0,0,0),L=0,O=!1,C=null,T=null,D=null,q=null,W=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,K=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(fe)[1]),se=K>=1):fe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),se=K>=2);let F=null,j={};const Z=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),Se=new At().fromArray(Z),Ue=new At().fromArray(re);function ne(k,xe,oe,pe){const be=new Uint8Array(4),lt=r.createTexture();r.bindTexture(k,lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Mt=0;Mt<oe;Mt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(xe+Mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return lt}const me={};me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),l.setClear(0),Ce(r.DEPTH_TEST),s.setFunc(ba),_e(!1),Ee($f),Ce(r.CULL_FACE),ce(dr);function Ce(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function Me(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function $e(k,xe){return f[k]!==xe?(r.bindFramebuffer(k,xe),f[k]=xe,k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=xe),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function ot(k,xe){let oe=m,pe=!1;if(k){oe=p.get(xe),oe===void 0&&(oe=[],p.set(xe,oe));const be=k.textures;if(oe.length!==be.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Mt=be.length;lt<Mt;lt++)oe[lt]=r.COLOR_ATTACHMENT0+lt;oe.length=be.length,pe=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,pe=!0);pe&&r.drawBuffers(oe)}function We(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const H={[zr]:r.FUNC_ADD,[wv]:r.FUNC_SUBTRACT,[Ev]:r.FUNC_REVERSE_SUBTRACT};H[Av]=r.MIN,H[bv]=r.MAX;const he={[Tv]:r.ZERO,[Cv]:r.ONE,[Rv]:r.SRC_COLOR,[hu]:r.SRC_ALPHA,[Nv]:r.SRC_ALPHA_SATURATE,[Dv]:r.DST_COLOR,[Iv]:r.DST_ALPHA,[Pv]:r.ONE_MINUS_SRC_COLOR,[fu]:r.ONE_MINUS_SRC_ALPHA,[Uv]:r.ONE_MINUS_DST_COLOR,[Lv]:r.ONE_MINUS_DST_ALPHA,[Ov]:r.CONSTANT_COLOR,[Fv]:r.ONE_MINUS_CONSTANT_COLOR,[zv]:r.CONSTANT_ALPHA,[Bv]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(k,xe,oe,pe,be,lt,Mt,bt,Nt,wt){if(k===dr){y===!0&&(Me(r.BLEND),y=!1);return}if(y===!1&&(Ce(r.BLEND),y=!0),k!==Mv){if(k!==M||wt!==O){if((x!==zr||w!==zr)&&(r.blendEquation(r.FUNC_ADD),x=zr,w=zr),wt)switch(k){case Ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ed:r.blendFunc(r.ONE,r.ONE);break;case td:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ed:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case td:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,E=null,b=null,N=null,R.set(0,0,0),L=0,M=k,O=wt}return}be=be||xe,lt=lt||oe,Mt=Mt||pe,(xe!==x||be!==w)&&(r.blendEquationSeparate(H[xe],H[be]),x=xe,w=be),(oe!==_||pe!==E||lt!==b||Mt!==N)&&(r.blendFuncSeparate(he[oe],he[pe],he[lt],he[Mt]),_=oe,E=pe,b=lt,N=Mt),(bt.equals(R)===!1||Nt!==L)&&(r.blendColor(bt.r,bt.g,bt.b,Nt),R.copy(bt),L=Nt),M=k,O=!1}function we(k,xe){k.side===Ti?Me(r.CULL_FACE):Ce(r.CULL_FACE);let oe=k.side===kn;xe&&(oe=!oe),_e(oe),k.blending===Ss&&k.transparent===!1?ce(dr):ce(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),i.setMask(k.colorWrite);const pe=k.stencilWrite;l.setTest(pe),pe&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Oe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function Ee(k){k!==yv?(Ce(r.CULL_FACE),k!==T&&(k===$f?r.cullFace(r.BACK):k===xv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),T=k}function Le(k){k!==D&&(se&&r.lineWidth(k),D=k)}function Oe(k,xe,oe){k?(Ce(r.POLYGON_OFFSET_FILL),(q!==xe||W!==oe)&&(r.polygonOffset(xe,oe),q=xe,W=oe)):Me(r.POLYGON_OFFSET_FILL)}function et(k){k?Ce(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function B(k){k===void 0&&(k=r.TEXTURE0+Q-1),F!==k&&(r.activeTexture(k),F=k)}function P(k,xe,oe){oe===void 0&&(F===null?oe=r.TEXTURE0+Q-1:oe=F);let pe=j[oe];pe===void 0&&(pe={type:void 0,texture:void 0},j[oe]=pe),(pe.type!==k||pe.texture!==xe)&&(F!==oe&&(r.activeTexture(oe),F=oe),r.bindTexture(k,xe||me[k]),pe.type=k,pe.texture=xe)}function te(){const k=j[F];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(k){Se.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Se.copy(k))}function ze(k){Ue.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ue.copy(k))}function ut(k,xe){let oe=u.get(xe);oe===void 0&&(oe=new WeakMap,u.set(xe,oe));let pe=oe.get(k);pe===void 0&&(pe=r.getUniformBlockIndex(xe,k.name),oe.set(k,pe))}function V(k,xe){const pe=u.get(xe).get(k);c.get(xe)!==pe&&(r.uniformBlockBinding(xe,pe,k.__bindingPointIndex),c.set(xe,pe))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},F=null,j={},f={},p=new WeakMap,m=[],g=null,y=!1,M=null,x=null,_=null,E=null,w=null,b=null,N=null,R=new Ve(0,0,0),L=0,O=!1,C=null,T=null,D=null,q=null,W=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),l.reset()}return{buffers:{color:i,depth:s,stencil:l},enable:Ce,disable:Me,bindFramebuffer:$e,drawBuffers:ot,useProgram:We,setBlending:ce,setMaterial:we,setFlipSided:_e,setCullFace:Ee,setLineWidth:Le,setPolygonOffset:Oe,setScissorTest:et,activeTexture:B,bindTexture:P,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:de,texImage2D:Xe,texImage3D:vt,updateUBOMapping:ut,uniformBlockBinding:V,texStorage2D:ct,texStorage3D:Te,texSubImage2D:ye,texSubImage3D:Ze,compressedTexSubImage2D:Re,compressedTexSubImage3D:De,scissor:at,viewport:ze,reset:ve}}function YA(r,e,t,n,i,s,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ue,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(B,P){return g?new OffscreenCanvas(B,P):Ba("canvas")}function M(B,P,te){let ge=1;const de=et(B);if((de.width>te||de.height>te)&&(ge=te/Math.max(de.width,de.height)),ge<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ye=Math.floor(ge*de.width),Ze=Math.floor(ge*de.height);p===void 0&&(p=y(ye,Ze));const Re=P?y(ye,Ze):p;return Re.width=ye,Re.height=Ze,Re.getContext("2d").drawImage(B,0,0,ye,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ye+"x"+Ze+")."),Re}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),B;return B}function x(B){return B.generateMipmaps&&B.minFilter!==gn&&B.minFilter!==sn}function _(B){r.generateMipmap(B)}function E(B,P,te,ge,de=!1){if(B!==null){if(r[B]!==void 0)return r[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ye=P;if(P===r.RED&&(te===r.FLOAT&&(ye=r.R32F),te===r.HALF_FLOAT&&(ye=r.R16F),te===r.UNSIGNED_BYTE&&(ye=r.R8)),P===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(ye=r.R8UI),te===r.UNSIGNED_SHORT&&(ye=r.R16UI),te===r.UNSIGNED_INT&&(ye=r.R32UI),te===r.BYTE&&(ye=r.R8I),te===r.SHORT&&(ye=r.R16I),te===r.INT&&(ye=r.R32I)),P===r.RG&&(te===r.FLOAT&&(ye=r.RG32F),te===r.HALF_FLOAT&&(ye=r.RG16F),te===r.UNSIGNED_BYTE&&(ye=r.RG8)),P===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(ye=r.RG8UI),te===r.UNSIGNED_SHORT&&(ye=r.RG16UI),te===r.UNSIGNED_INT&&(ye=r.RG32UI),te===r.BYTE&&(ye=r.RG8I),te===r.SHORT&&(ye=r.RG16I),te===r.INT&&(ye=r.RG32I)),P===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(ye=r.RGB9_E5),P===r.RGBA){const Ze=de?Ua:Ut.getTransfer(ge);te===r.FLOAT&&(ye=r.RGBA32F),te===r.HALF_FLOAT&&(ye=r.RGBA16F),te===r.UNSIGNED_BYTE&&(ye=Ze===kt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function w(B,P){let te;return B?P===null||P===Ts||P===Cs?te=r.DEPTH24_STENCIL8:P===ii?te=r.DEPTH32F_STENCIL8:P===Ia&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Ts||P===Cs?te=r.DEPTH_COMPONENT24:P===ii?te=r.DEPTH_COMPONENT32F:P===Ia&&(te=r.DEPTH_COMPONENT16),te}function b(B,P){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==gn&&B.minFilter!==sn?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function N(B){const P=B.target;P.removeEventListener("dispose",N),L(P),P.isVideoTexture&&f.delete(P)}function R(B){const P=B.target;P.removeEventListener("dispose",R),C(P)}function L(B){const P=n.get(B);if(P.__webglInit===void 0)return;const te=B.source,ge=m.get(te);if(ge){const de=ge[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&O(B),Object.keys(ge).length===0&&m.delete(te)}n.remove(B)}function O(B){const P=n.get(B);r.deleteTexture(P.__webglTexture);const te=B.source,ge=m.get(te);delete ge[P.__cacheKey],l.memory.textures--}function C(B){const P=n.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(P.__webglFramebuffer[ge]))for(let de=0;de<P.__webglFramebuffer[ge].length;de++)r.deleteFramebuffer(P.__webglFramebuffer[ge][de]);else r.deleteFramebuffer(P.__webglFramebuffer[ge]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[ge])}else{if(Array.isArray(P.__webglFramebuffer))for(let ge=0;ge<P.__webglFramebuffer.length;ge++)r.deleteFramebuffer(P.__webglFramebuffer[ge]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ge=0;ge<P.__webglColorRenderbuffer.length;ge++)P.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[ge]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const te=B.textures;for(let ge=0,de=te.length;ge<de;ge++){const ye=n.get(te[ge]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),l.memory.textures--),n.remove(te[ge])}n.remove(B)}let T=0;function D(){T=0}function q(){const B=T;return B>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+i.maxTextures),T+=1,B}function W(B){const P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function Q(B,P){const te=n.get(B);if(B.isVideoTexture&&Le(B),B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){const ge=B.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(te,B,P);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+P)}function se(B,P){const te=n.get(B);if(B.version>0&&te.__version!==B.version){Ue(te,B,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+P)}function K(B,P){const te=n.get(B);if(B.version>0&&te.__version!==B.version){Ue(te,B,P);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+P)}function fe(B,P){const te=n.get(B);if(B.version>0&&te.__version!==B.version){ne(te,B,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+P)}const F={[Ra]:r.REPEAT,[vi]:r.CLAMP_TO_EDGE,[Pa]:r.MIRRORED_REPEAT},j={[gn]:r.NEAREST,[Xd]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[Ma]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},Z={[v_]:r.NEVER,[w_]:r.ALWAYS,[__]:r.LESS,[ep]:r.LEQUAL,[y_]:r.EQUAL,[M_]:r.GEQUAL,[x_]:r.GREATER,[S_]:r.NOTEQUAL};function re(B,P){if(P.type===ii&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===sn||P.magFilter===Ma||P.magFilter===Mo||P.magFilter===Wi||P.minFilter===sn||P.minFilter===Ma||P.minFilter===Mo||P.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,F[P.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,F[P.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,F[P.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,j[P.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,j[P.minFilter]),P.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,Z[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===gn||P.minFilter!==Mo&&P.minFilter!==Wi||P.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Se(B,P){let te=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",N));const ge=P.source;let de=m.get(ge);de===void 0&&(de={},m.set(ge,de));const ye=W(P);if(ye!==B.__cacheKey){de[ye]===void 0&&(de[ye]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,te=!0),de[ye].usedTimes++;const Ze=de[B.__cacheKey];Ze!==void 0&&(de[B.__cacheKey].usedTimes--,Ze.usedTimes===0&&O(P)),B.__cacheKey=ye,B.__webglTexture=de[ye].texture}return te}function Ue(B,P,te){let ge=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ge=r.TEXTURE_3D);const de=Se(B,P),ye=P.source;t.bindTexture(ge,B.__webglTexture,r.TEXTURE0+te);const Ze=n.get(ye);if(ye.version!==Ze.__version||de===!0){t.activeTexture(r.TEXTURE0+te);const Re=Ut.getPrimaries(Ut.workingColorSpace),De=P.colorSpace===ur?null:Ut.getPrimaries(P.colorSpace),ct=P.colorSpace===ur||Re===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Te=M(P.image,!1,i.maxTextureSize);Te=Oe(P,Te);const Xe=s.convert(P.format,P.colorSpace),vt=s.convert(P.type);let at=E(P.internalFormat,Xe,vt,P.colorSpace,P.isVideoTexture);re(ge,P);let ze;const ut=P.mipmaps,V=P.isVideoTexture!==!0,ve=Ze.__version===void 0||de===!0,k=ye.dataReady,xe=b(P,Te);if(P.isDepthTexture)at=w(P.format===Rs,P.type),ve&&(V?t.texStorage2D(r.TEXTURE_2D,1,at,Te.width,Te.height):t.texImage2D(r.TEXTURE_2D,0,at,Te.width,Te.height,0,Xe,vt,null));else if(P.isDataTexture)if(ut.length>0){V&&ve&&t.texStorage2D(r.TEXTURE_2D,xe,at,ut[0].width,ut[0].height);for(let oe=0,pe=ut.length;oe<pe;oe++)ze=ut[oe],V?k&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ze.width,ze.height,Xe,vt,ze.data):t.texImage2D(r.TEXTURE_2D,oe,at,ze.width,ze.height,0,Xe,vt,ze.data);P.generateMipmaps=!1}else V?(ve&&t.texStorage2D(r.TEXTURE_2D,xe,at,Te.width,Te.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,Xe,vt,Te.data)):t.texImage2D(r.TEXTURE_2D,0,at,Te.width,Te.height,0,Xe,vt,Te.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,at,ut[0].width,ut[0].height,Te.depth);for(let oe=0,pe=ut.length;oe<pe;oe++)if(ze=ut[oe],P.format!==Bn)if(Xe!==null)if(V){if(k)if(P.layerUpdates.size>0){for(const be of P.layerUpdates){const lt=ze.width*ze.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,be,ze.width,ze.height,1,Xe,ze.data.slice(lt*be,lt*(be+1)),0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Te.depth,Xe,ze.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,at,ze.width,ze.height,Te.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Te.depth,Xe,vt,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,at,ze.width,ze.height,Te.depth,0,Xe,vt,ze.data)}else{V&&ve&&t.texStorage2D(r.TEXTURE_2D,xe,at,ut[0].width,ut[0].height);for(let oe=0,pe=ut.length;oe<pe;oe++)ze=ut[oe],P.format!==Bn?Xe!==null?V?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,ze.width,ze.height,Xe,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,at,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?k&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ze.width,ze.height,Xe,vt,ze.data):t.texImage2D(r.TEXTURE_2D,oe,at,ze.width,ze.height,0,Xe,vt,ze.data)}else if(P.isDataArrayTexture)if(V){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,at,Te.width,Te.height,Te.depth),k)if(P.layerUpdates.size>0){let oe;switch(vt){case r.UNSIGNED_BYTE:switch(Xe){case r.ALPHA:oe=1;break;case r.LUMINANCE:oe=1;break;case r.LUMINANCE_ALPHA:oe=2;break;case r.RGB:oe=3;break;case r.RGBA:oe=4;break;default:throw new Error(`Unknown texel size for format ${Xe}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:oe=1;break;default:throw new Error(`Unknown texel size for type ${vt}.`)}const pe=Te.width*Te.height*oe;for(const be of P.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,Te.width,Te.height,1,Xe,vt,Te.data.slice(pe*be,pe*(be+1)));P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Xe,vt,Te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,at,Te.width,Te.height,Te.depth,0,Xe,vt,Te.data);else if(P.isData3DTexture)V?(ve&&t.texStorage3D(r.TEXTURE_3D,xe,at,Te.width,Te.height,Te.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Xe,vt,Te.data)):t.texImage3D(r.TEXTURE_3D,0,at,Te.width,Te.height,Te.depth,0,Xe,vt,Te.data);else if(P.isFramebufferTexture){if(ve)if(V)t.texStorage2D(r.TEXTURE_2D,xe,at,Te.width,Te.height);else{let oe=Te.width,pe=Te.height;for(let be=0;be<xe;be++)t.texImage2D(r.TEXTURE_2D,be,at,oe,pe,0,Xe,vt,null),oe>>=1,pe>>=1}}else if(ut.length>0){if(V&&ve){const oe=et(ut[0]);t.texStorage2D(r.TEXTURE_2D,xe,at,oe.width,oe.height)}for(let oe=0,pe=ut.length;oe<pe;oe++)ze=ut[oe],V?k&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Xe,vt,ze):t.texImage2D(r.TEXTURE_2D,oe,at,Xe,vt,ze);P.generateMipmaps=!1}else if(V){if(ve){const oe=et(Te);t.texStorage2D(r.TEXTURE_2D,xe,at,oe.width,oe.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Xe,vt,Te)}else t.texImage2D(r.TEXTURE_2D,0,at,Xe,vt,Te);x(P)&&_(ge),Ze.__version=ye.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function ne(B,P,te){if(P.image.length!==6)return;const ge=Se(B,P),de=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+te);const ye=n.get(de);if(de.version!==ye.__version||ge===!0){t.activeTexture(r.TEXTURE0+te);const Ze=Ut.getPrimaries(Ut.workingColorSpace),Re=P.colorSpace===ur?null:Ut.getPrimaries(P.colorSpace),De=P.colorSpace===ur||Ze===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const ct=P.isCompressedTexture||P.image[0].isCompressedTexture,Te=P.image[0]&&P.image[0].isDataTexture,Xe=[];for(let pe=0;pe<6;pe++)!ct&&!Te?Xe[pe]=M(P.image[pe],!0,i.maxCubemapSize):Xe[pe]=Te?P.image[pe].image:P.image[pe],Xe[pe]=Oe(P,Xe[pe]);const vt=Xe[0],at=s.convert(P.format,P.colorSpace),ze=s.convert(P.type),ut=E(P.internalFormat,at,ze,P.colorSpace),V=P.isVideoTexture!==!0,ve=ye.__version===void 0||ge===!0,k=de.dataReady;let xe=b(P,vt);re(r.TEXTURE_CUBE_MAP,P);let oe;if(ct){V&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,ut,vt.width,vt.height);for(let pe=0;pe<6;pe++){oe=Xe[pe].mipmaps;for(let be=0;be<oe.length;be++){const lt=oe[be];P.format!==Bn?at!==null?V?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,lt.width,lt.height,at,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,lt.width,lt.height,at,ze,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ut,lt.width,lt.height,0,at,ze,lt.data)}}}else{if(oe=P.mipmaps,V&&ve){oe.length>0&&xe++;const pe=et(Xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,ut,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Te){V?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe[pe].width,Xe[pe].height,at,ze,Xe[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Xe[pe].width,Xe[pe].height,0,at,ze,Xe[pe].data);for(let be=0;be<oe.length;be++){const Mt=oe[be].image[pe].image;V?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,Mt.width,Mt.height,at,ze,Mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ut,Mt.width,Mt.height,0,at,ze,Mt.data)}}else{V?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,at,ze,Xe[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,at,ze,Xe[pe]);for(let be=0;be<oe.length;be++){const lt=oe[be];V?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,at,ze,lt.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ut,at,ze,lt.image[pe])}}}x(P)&&_(r.TEXTURE_CUBE_MAP),ye.__version=de.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function me(B,P,te,ge,de,ye){const Ze=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),De=E(te.internalFormat,Ze,Re,te.colorSpace);if(!n.get(P).__hasExternalTextures){const Te=Math.max(1,P.width>>ye),Xe=Math.max(1,P.height>>ye);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,ye,De,Te,Xe,P.depth,0,Ze,Re,null):t.texImage2D(de,ye,De,Te,Xe,0,Ze,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,B),Ee(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,de,n.get(te).__webglTexture,0,_e(P)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,de,n.get(te).__webglTexture,ye),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(B,P,te){if(r.bindRenderbuffer(r.RENDERBUFFER,B),P.depthBuffer){const ge=P.depthTexture,de=ge&&ge.isDepthTexture?ge.type:null,ye=w(P.stencilBuffer,de),Ze=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=_e(P);Ee(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,ye,P.width,P.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ye,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ye,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ze,r.RENDERBUFFER,B)}else{const ge=P.textures;for(let de=0;de<ge.length;de++){const ye=ge[de],Ze=s.convert(ye.format,ye.colorSpace),Re=s.convert(ye.type),De=E(ye.internalFormat,Ze,Re,ye.colorSpace),ct=_e(P);te&&Ee(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,De,P.width,P.height):Ee(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,De,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,De,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Q(P.depthTexture,0);const ge=n.get(P.depthTexture).__webglTexture,de=_e(P);if(P.depthTexture.format===Ms)Ee(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(P.depthTexture.format===Rs)Ee(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function $e(B){const P=n.get(B),te=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Me(P.__webglFramebuffer,B)}else if(te){P.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[ge]),P.__webglDepthbuffer[ge]=r.createRenderbuffer(),Ce(P.__webglDepthbuffer[ge],B,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),Ce(P.__webglDepthbuffer,B,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(B,P,te){const ge=n.get(B);P!==void 0&&me(ge.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&$e(B)}function We(B){const P=B.texture,te=n.get(B),ge=n.get(P);B.addEventListener("dispose",R);const de=B.textures,ye=B.isWebGLCubeRenderTarget===!0,Ze=de.length>1;if(Ze||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=P.version,l.memory.textures++),ye){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let De=0;De<P.mipmaps.length;De++)te.__webglFramebuffer[Re][De]=r.createFramebuffer()}else te.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<P.mipmaps.length;Re++)te.__webglFramebuffer[Re]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ze)for(let Re=0,De=de.length;Re<De;Re++){const ct=n.get(de[Re]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),l.memory.textures++)}if(B.samples>0&&Ee(B)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<de.length;Re++){const De=de[Re];te.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const ct=s.convert(De.format,De.colorSpace),Te=s.convert(De.type),Xe=E(De.internalFormat,ct,Te,De.colorSpace,B.isXRRenderTarget===!0),vt=_e(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Xe,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(te.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ye){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),re(r.TEXTURE_CUBE_MAP,P);for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0)for(let De=0;De<P.mipmaps.length;De++)me(te.__webglFramebuffer[Re][De],B,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,De);else me(te.__webglFramebuffer[Re],B,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(P)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Re=0,De=de.length;Re<De;Re++){const ct=de[Re],Te=n.get(ct);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),re(r.TEXTURE_2D,ct),me(te.__webglFramebuffer,B,ct,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),x(ct)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Re=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,ge.__webglTexture),re(Re,P),P.mipmaps&&P.mipmaps.length>0)for(let De=0;De<P.mipmaps.length;De++)me(te.__webglFramebuffer[De],B,P,r.COLOR_ATTACHMENT0,Re,De);else me(te.__webglFramebuffer,B,P,r.COLOR_ATTACHMENT0,Re,0);x(P)&&_(Re),t.unbindTexture()}B.depthBuffer&&$e(B)}function H(B){const P=B.textures;for(let te=0,ge=P.length;te<ge;te++){const de=P[te];if(x(de)){const ye=B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ze=n.get(de).__webglTexture;t.bindTexture(ye,Ze),_(ye),t.unbindTexture()}}}const he=[],ce=[];function we(B){if(B.samples>0){if(Ee(B)===!1){const P=B.textures,te=B.width,ge=B.height;let de=r.COLOR_BUFFER_BIT;const ye=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ze=n.get(B),Re=P.length>1;if(Re)for(let De=0;De<P.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let De=0;De<P.length;De++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[De]);const ct=n.get(P[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,te,ge,0,0,te,ge,de,r.NEAREST),u===!0&&(he.length=0,ce.length=0,he.push(r.COLOR_ATTACHMENT0+De),B.depthBuffer&&B.resolveDepthBuffer===!1&&(he.push(ye),ce.push(ye),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ce)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let De=0;De<P.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Ze.__webglColorRenderbuffer[De]);const ct=n.get(P[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&u){const P=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function _e(B){return Math.min(i.maxSamples,B.samples)}function Ee(B){const P=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Le(B){const P=l.render.frame;f.get(B)!==P&&(f.set(B,P),B.update())}function Oe(B,P){const te=B.colorSpace,ge=B.format,de=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||te!==_r&&te!==ur&&(Ut.getTransfer(te)===kt?(ge!==Bn||de!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),P}function et(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=D,this.setTexture2D=Q,this.setTexture2DArray=se,this.setTexture3D=K,this.setTextureCube=fe,this.rebindTextures=ot,this.setupRenderTarget=We,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ee}function B_(r,e){function t(n,i=ur){let s;const l=Ut.getTransfer(i);if(n===ji)return r.UNSIGNED_BYTE;if(n===qd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===r_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===n_)return r.BYTE;if(n===i_)return r.SHORT;if(n===Ia)return r.UNSIGNED_SHORT;if(n===Yd)return r.INT;if(n===Ts)return r.UNSIGNED_INT;if(n===ii)return r.FLOAT;if(n===Ja)return r.HALF_FLOAT;if(n===s_)return r.ALPHA;if(n===o_)return r.RGB;if(n===Bn)return r.RGBA;if(n===a_)return r.LUMINANCE;if(n===l_)return r.LUMINANCE_ALPHA;if(n===Ms)return r.DEPTH_COMPONENT;if(n===Rs)return r.DEPTH_STENCIL;if(n===jd)return r.RED;if(n===Jd)return r.RED_INTEGER;if(n===c_)return r.RG;if(n===Kd)return r.RG_INTEGER;if(n===Qd)return r.RGBA_INTEGER;if(n===iu||n===ru||n===su||n===ou)if(l===kt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ou)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rd||n===sd||n===od||n===ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ld||n===cd||n===ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ld||n===cd)return l===kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ud)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hd||n===fd||n===dd||n===pd||n===md||n===gd||n===vd||n===_d||n===yd||n===xd||n===Sd||n===Md||n===wd||n===Ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===md)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_d)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Md)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wd)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ed)return l===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===au||n===Ad||n===bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===au)return l===kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ad)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===u_||n===Td||n===Cd||n===Rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===au)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class k_ extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),_=this._getHandJoint(h,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:ZA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new No(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class KA extends yr{constructor(e,t){super();const n=this;let i=null,s=1,l=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,y=null;const M=new JA,x=t.getContextAttributes();let _=null,E=null;const w=[],b=[],N=new ue;let R=null;const L=new Xt;L.layers.enable(1),L.viewport=new At;const O=new Xt;O.layers.enable(2),O.viewport=new At;const C=[L,O],T=new k_;T.layers.enable(1),T.layers.enable(2);let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=w[ne];return me===void 0&&(me=new Ef,w[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=w[ne];return me===void 0&&(me=new Ef,w[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=w[ne];return me===void 0&&(me=new Ef,w[ne]=me),me.getHandSpace()};function W(ne){const me=b.indexOf(ne.inputSource);if(me===-1)return;const Ce=w[me];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,h||l),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",se);for(let ne=0;ne<w.length;ne++){const me=b[ne];me!==null&&(b[ne]=null,w[ne].disconnect(me))}D=null,q=null,M.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ci(g.framebufferWidth,g.framebufferHeight,{format:Bn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let me=null,Ce=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?Rs:Ms,Ce=x.stencil?Cs:Ts);const $e={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer($e),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ci(m.textureWidth,m.textureHeight,{format:Bn,type:ji,depthTexture:new ap(m.textureWidth,m.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await i.requestReferenceSpace(c),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function se(ne){for(let me=0;me<ne.removed.length;me++){const Ce=ne.removed[me],Me=b.indexOf(Ce);Me>=0&&(b[Me]=null,w[Me].disconnect(Ce))}for(let me=0;me<ne.added.length;me++){const Ce=ne.added[me];let Me=b.indexOf(Ce);if(Me===-1){for(let ot=0;ot<w.length;ot++)if(ot>=b.length){b.push(Ce),Me=ot;break}else if(b[ot]===null){b[ot]=Ce,Me=ot;break}if(Me===-1)break}const $e=w[Me];$e&&$e.connect(Ce)}}const K=new U,fe=new U;function F(ne,me,Ce){K.setFromMatrixPosition(me.matrixWorld),fe.setFromMatrixPosition(Ce.matrixWorld);const Me=K.distanceTo(fe),$e=me.projectionMatrix.elements,ot=Ce.projectionMatrix.elements,We=$e[14]/($e[10]-1),H=$e[14]/($e[10]+1),he=($e[9]+1)/$e[5],ce=($e[9]-1)/$e[5],we=($e[8]-1)/$e[0],_e=(ot[8]+1)/ot[0],Ee=We*we,Le=We*_e,Oe=Me/(-we+_e),et=Oe*-we;me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(et),ne.translateZ(Oe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const B=We+Oe,P=H+Oe,te=Ee-et,ge=Le+(Me-et),de=he*H/P*B,ye=ce*H/P*B;ne.projectionMatrix.makePerspective(te,ge,de,ye,B,P),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function j(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;M.texture!==null&&(ne.near=M.depthNear,ne.far=M.depthFar),T.near=O.near=L.near=ne.near,T.far=O.far=L.far=ne.far,(D!==T.near||q!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,q=T.far,L.near=D,L.far=q,O.near=D,O.far=q,L.updateProjectionMatrix(),O.updateProjectionMatrix(),ne.updateProjectionMatrix());const me=ne.parent,Ce=T.cameras;j(T,me);for(let Me=0;Me<Ce.length;Me++)j(Ce[Me],me);Ce.length===2?F(T,L,O):T.projectionMatrix.copy(L.projectionMatrix),Z(ne,T,me)};function Z(ne,me,Ce){Ce===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ro*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let re=null;function Se(ne,me){if(f=me.getViewerPose(h||l),y=me,f!==null){const Ce=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Me=!1;Ce.length!==T.cameras.length&&(T.cameras.length=0,Me=!0);for(let ot=0;ot<Ce.length;ot++){const We=Ce[ot];let H=null;if(g!==null)H=g.getViewport(We);else{const ce=p.getViewSubImage(m,We);H=ce.viewport,ot===0&&(e.setRenderTargetTextures(E,ce.colorTexture,m.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(E))}let he=C[ot];he===void 0&&(he=new Xt,he.layers.enable(ot),he.viewport=new At,C[ot]=he),he.matrix.fromArray(We.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(We.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(H.x,H.y,H.width,H.height),ot===0&&(T.matrix.copy(he.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Me===!0&&T.cameras.push(he)}const $e=i.enabledFeatures;if($e&&$e.includes("depth-sensing")){const ot=p.getDepthInformation(Ce[0]);ot&&ot.isValid&&ot.texture&&M.init(e,ot,i.renderState)}}for(let Ce=0;Ce<w.length;Ce++){const Me=b[Ce],$e=w[Ce];Me!==null&&$e!==void 0&&$e.update(Me,me,h||l)}re&&re(ne,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),y=null}const Ue=new D_;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}}const ss=new oi,QA=new st;function $A(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,P_(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,E,w,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,b)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),M(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,E,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===kn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===kn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=e.get(_),w=E.envMap,b=E.envMapRotation;w&&(x.envMap.value=w,ss.copy(b),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),x.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(ss)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const E=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eb(r,e,t,n){let i={},s={},l=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,w){const b=w.program;n.uniformBlockBinding(E,b)}function h(E,w){let b=i[E.id];b===void 0&&(y(E),b=f(E),i[E.id]=b,E.addEventListener("dispose",x));const N=w.program;n.updateUBOMapping(E,N);const R=e.render.frame;s[E.id]!==R&&(m(E),s[E.id]=R)}function f(E){const w=p();E.__bindingPointIndex=w;const b=r.createBuffer(),N=E.__size,R=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,N,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function p(){for(let E=0;E<c;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const w=i[E.id],b=E.uniforms,N=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let R=0,L=b.length;R<L;R++){const O=Array.isArray(b[R])?b[R]:[b[R]];for(let C=0,T=O.length;C<T;C++){const D=O[C];if(g(D,R,C,N)===!0){const q=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let se=0;se<W.length;se++){const K=W[se],fe=M(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,q+Q,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,Q),Q+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,w,b,N){const R=E.value,L=w+"_"+b;if(N[L]===void 0)return typeof R=="number"||typeof R=="boolean"?N[L]=R:N[L]=R.clone(),!0;{const O=N[L];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return N[L]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function y(E){const w=E.uniforms;let b=0;const N=16;for(let L=0,O=w.length;L<O;L++){const C=Array.isArray(w[L])?w[L]:[w[L]];for(let T=0,D=C.length;T<D;T++){const q=C[T],W=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,se=W.length;Q<se;Q++){const K=W[Q],fe=M(K),F=b%N;F!==0&&N-F<fe.boundary&&(b+=N-F),q.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=fe.storage}}}const R=b%N;return R>0&&(b+=N-R),E.__size=b,E.__cache={},this}function M(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function x(E){const w=E.target;w.removeEventListener("dispose",x);const b=l.indexOf(w.__bindingPointIndex);l.splice(b,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);l=[],i={},s={}}return{bind:u,update:h,dispose:_}}class H_{constructor(e={}){const{canvas:t=b_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=l;const g=new Uint32Array(4),y=new Int32Array(4);let M=null,x=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this.toneMapping=Yi,this.toneMappingExposure=1;const w=this;let b=!1,N=0,R=0,L=null,O=-1,C=null;const T=new At,D=new At;let q=null;const W=new Ve(0);let Q=0,se=t.width,K=t.height,fe=1,F=null,j=null;const Z=new At(0,0,se,K),re=new At(0,0,se,K);let Se=!1;const Ue=new el;let ne=!1,me=!1;const Ce=new st,Me=new U,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function We(){return L===null?fe:1}let H=n;function he(I,X){return t.getContext(I,X)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),H===null){const X="webgl2";if(H=he(X,I),H===null)throw he(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ce,we,_e,Ee,Le,Oe,et,B,P,te,ge,de,ye,Ze,Re,De,ct,Te,Xe,vt,at,ze,ut,V;function ve(){ce=new dE(H),ce.init(),ze=new B_(H,ce),we=new aE(H,ce,e,ze),_e=new XA(H),Ee=new gE(H),Le=new DA,Oe=new YA(H,ce,_e,Le,we,ze,Ee),et=new cE(w),B=new fE(w),P=new wM(H),ut=new sE(H,P),te=new pE(H,P,Ee,ut),ge=new _E(H,te,P,Ee),Xe=new vE(H,we,Oe),De=new lE(Le),de=new LA(w,et,B,ce,we,ut,De),ye=new $A(w,Le),Ze=new NA,Re=new HA(ce),Te=new rE(w,et,B,_e,ge,m,u),ct=new WA(w,ge,we),V=new eb(H,Ee,we,_e),vt=new oE(H,ce,Ee),at=new mE(H,ce,Ee),Ee.programs=de.programs,w.capabilities=we,w.extensions=ce,w.properties=Le,w.renderLists=Ze,w.shadowMap=ct,w.state=_e,w.info=Ee}ve();const k=new KA(w,H);this.xr=k,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const I=ce.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ce.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(I){I!==void 0&&(fe=I,this.setSize(se,K,!1))},this.getSize=function(I){return I.set(se,K)},this.setSize=function(I,X,ee=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=I,K=X,t.width=Math.floor(I*fe),t.height=Math.floor(X*fe),ee===!0&&(t.style.width=I+"px",t.style.height=X+"px"),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(se*fe,K*fe).floor()},this.setDrawingBufferSize=function(I,X,ee){se=I,K=X,fe=ee,t.width=Math.floor(I*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,I,X)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(Z)},this.setViewport=function(I,X,ee,ie){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,X,ee,ie),_e.viewport(T.copy(Z).multiplyScalar(fe).round())},this.getScissor=function(I){return I.copy(re)},this.setScissor=function(I,X,ee,ie){I.isVector4?re.set(I.x,I.y,I.z,I.w):re.set(I,X,ee,ie),_e.scissor(D.copy(re).multiplyScalar(fe).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(I){_e.setScissorTest(Se=I)},this.setOpaqueSort=function(I){F=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(I=!0,X=!0,ee=!0){let ie=0;if(I){let J=!1;if(L!==null){const Ie=L.texture.format;J=Ie===Qd||Ie===Kd||Ie===Jd}if(J){const Ie=L.texture.type,He=Ie===ji||Ie===Ts||Ie===Ia||Ie===Cs||Ie===qd||Ie===Zd,Ye=Te.getClearColor(),je=Te.getClearAlpha(),rt=Ye.r,tt=Ye.g,Qe=Ye.b;He?(g[0]=rt,g[1]=tt,g[2]=Qe,g[3]=je,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=rt,y[1]=tt,y[2]=Qe,y[3]=je,H.clearBufferiv(H.COLOR,0,y))}else ie|=H.COLOR_BUFFER_BIT}X&&(ie|=H.DEPTH_BUFFER_BIT),ee&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ze.dispose(),Re.dispose(),Le.dispose(),et.dispose(),B.dispose(),ge.dispose(),ut.dispose(),V.dispose(),de.dispose(),k.dispose(),k.removeEventListener("sessionstart",on),k.removeEventListener("sessionend",an),Vn.stop()};function xe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=Ee.autoReset,X=ct.enabled,ee=ct.autoUpdate,ie=ct.needsUpdate,J=ct.type;ve(),Ee.autoReset=I,ct.enabled=X,ct.autoUpdate=ee,ct.needsUpdate=ie,ct.type=J}function pe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function be(I){const X=I.target;X.removeEventListener("dispose",be),lt(X)}function lt(I){Mt(I),Le.remove(I)}function Mt(I){const X=Le.get(I).programs;X!==void 0&&(X.forEach(function(ee){de.releaseProgram(ee)}),I.isShaderMaterial&&de.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,ee,ie,J,Ie){X===null&&(X=$e);const He=J.isMesh&&J.matrixWorld.determinant()<0,Ye=Yu(I,X,ee,ie,J);_e.setMaterial(ie,He);let je=ee.index,rt=1;if(ie.wireframe===!0){if(je=te.getWireframeAttribute(ee),je===void 0)return;rt=2}const tt=ee.drawRange,Qe=ee.attributes.position;let Tt=tt.start*rt,Vt=(tt.start+tt.count)*rt;Ie!==null&&(Tt=Math.max(Tt,Ie.start*rt),Vt=Math.min(Vt,(Ie.start+Ie.count)*rt)),je!==null?(Tt=Math.max(Tt,0),Vt=Math.min(Vt,je.count)):Qe!=null&&(Tt=Math.max(Tt,0),Vt=Math.min(Vt,Qe.count));const zt=Vt-Tt;if(zt<0||zt===1/0)return;ut.setup(J,ie,Ye,ee,je);let en,St=vt;if(je!==null&&(en=P.get(je),St=at,St.setIndex(en)),J.isMesh)ie.wireframe===!0?(_e.setLineWidth(ie.wireframeLinewidth*We()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(J.isLine){let Ne=ie.linewidth;Ne===void 0&&(Ne=1),_e.setLineWidth(Ne*We()),J.isLineSegments?St.setMode(H.LINES):J.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else J.isPoints?St.setMode(H.POINTS):J.isSprite&&St.setMode(H.TRIANGLES);if(J.isBatchedMesh)J._multiDrawInstances!==null?St.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances):St.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)St.renderInstances(Tt,zt,J.count);else if(ee.isInstancedBufferGeometry){const Ne=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,dt=Math.min(ee.instanceCount,Ne);St.renderInstances(Tt,zt,dt)}else St.render(Tt,zt)};function bt(I,X,ee){I.transparent===!0&&I.side===Ti&&I.forceSinglePass===!1?(I.side=kn,I.needsUpdate=!0,Ii(I,X,ee),I.side=mr,I.needsUpdate=!0,Ii(I,X,ee),I.side=Ti):Ii(I,X,ee)}this.compile=function(I,X,ee=null){ee===null&&(ee=I),x=Re.get(ee),x.init(X),E.push(x),ee.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),I!==ee&&I.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ie=new Set;return I.traverse(function(J){const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const Ye=Ie[He];bt(Ye,ee,J),ie.add(Ye)}else bt(Ie,ee,J),ie.add(Ie)}),E.pop(),x=null,ie},this.compileAsync=function(I,X,ee=null){const ie=this.compile(I,X,ee);return new Promise(J=>{function Ie(){if(ie.forEach(function(He){Le.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){J(I);return}setTimeout(Ie,10)}ce.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Nt=null;function wt(I){Nt&&Nt(I)}function on(){Vn.stop()}function an(){Vn.start()}const Vn=new D_;Vn.setAnimationLoop(wt),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(I){Nt=I,k.setAnimationLoop(I),I===null?Vn.stop():Vn.start()},k.addEventListener("sessionstart",on),k.addEventListener("sessionend",an),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(X),X=k.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,X,L),x=Re.get(I,E.length),x.init(X),E.push(x),Ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ue.setFromProjectionMatrix(Ce),me=this.localClippingEnabled,ne=De.init(this.clippingPlanes,me),M=Ze.get(I,_.length),M.init(),_.push(M),k.enabled===!0&&k.isPresenting===!0){const Ie=w.xr.getDepthSensingMesh();Ie!==null&&zo(Ie,X,-1/0,w.sortObjects)}zo(I,X,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(F,j),ot=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,ot&&Te.addToRenderList(M,I),this.info.render.frame++,ne===!0&&De.beginShadows();const ee=x.state.shadowsArray;ct.render(ee,I,X),ne===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=M.opaque,J=M.transmissive;if(x.setupLights(),X.isArrayCamera){const Ie=X.cameras;if(J.length>0)for(let He=0,Ye=Ie.length;He<Ye;He++){const je=Ie[He];Bo(ie,J,I,je)}ot&&Te.render(I);for(let He=0,Ye=Ie.length;He<Ye;He++){const je=Ie[He];ll(M,I,je,je.viewport)}}else J.length>0&&Bo(ie,J,I,X),ot&&Te.render(I),ll(M,I,X);L!==null&&(Oe.updateMultisampleRenderTarget(L),Oe.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(w,I,X),ut.resetDefaultState(),O=-1,C=null,E.pop(),E.length>0?(x=E[E.length-1],ne===!0&&De.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?M=_[_.length-1]:M=null};function zo(I,X,ee,ie){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ue.intersectsSprite(I)){ie&&Me.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ce);const He=ge.update(I),Ye=I.material;Ye.visible&&M.push(I,He,Ye,ee,Me.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ue.intersectsObject(I))){const He=ge.update(I),Ye=I.material;if(ie&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Me.copy(I.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Me.copy(He.boundingSphere.center)),Me.applyMatrix4(I.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ye)){const je=He.groups;for(let rt=0,tt=je.length;rt<tt;rt++){const Qe=je[rt],Tt=Ye[Qe.materialIndex];Tt&&Tt.visible&&M.push(I,He,Tt,ee,Me.z,Qe)}}else Ye.visible&&M.push(I,He,Ye,ee,Me.z,null)}}const Ie=I.children;for(let He=0,Ye=Ie.length;He<Ye;He++)zo(Ie[He],X,ee,ie)}function ll(I,X,ee,ie){const J=I.opaque,Ie=I.transmissive,He=I.transparent;x.setupLightsView(ee),ne===!0&&De.setGlobalState(w.clippingPlanes,ee),ie&&_e.viewport(T.copy(ie)),J.length>0&&xr(J,X,ee),Ie.length>0&&xr(Ie,X,ee),He.length>0&&xr(He,X,ee),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Bo(I,X,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ie.id]===void 0&&(x.state.transmissionRenderTarget[ie.id]=new Ci(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Ja:ji,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ie=x.state.transmissionRenderTarget[ie.id],He=ie.viewport||T;Ie.setSize(He.z,He.w);const Ye=w.getRenderTarget();w.setRenderTarget(Ie),w.getClearColor(W),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),ot?Te.render(ee):w.clear();const je=w.toneMapping;w.toneMapping=Yi;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),x.setupLightsView(ie),ne===!0&&De.setGlobalState(w.clippingPlanes,ie),xr(I,ee,ie),Oe.updateMultisampleRenderTarget(Ie),Oe.updateRenderTargetMipmap(Ie),ce.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Qe=0,Tt=X.length;Qe<Tt;Qe++){const Vt=X[Qe],zt=Vt.object,en=Vt.geometry,St=Vt.material,Ne=Vt.group;if(St.side===Ti&&zt.layers.test(ie.layers)){const dt=St.side;St.side=kn,St.needsUpdate=!0,cl(zt,ee,ie,en,St,Ne),St.side=dt,St.needsUpdate=!0,tt=!0}}tt===!0&&(Oe.updateMultisampleRenderTarget(Ie),Oe.updateRenderTargetMipmap(Ie))}w.setRenderTarget(Ye),w.setClearColor(W,Q),rt!==void 0&&(ie.viewport=rt),w.toneMapping=je}function xr(I,X,ee){const ie=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Ie=I.length;J<Ie;J++){const He=I[J],Ye=He.object,je=He.geometry,rt=ie===null?He.material:ie,tt=He.group;Ye.layers.test(ee.layers)&&cl(Ye,X,ee,je,rt,tt)}}function cl(I,X,ee,ie,J,Ie){I.onBeforeRender(w,X,ee,ie,J,Ie),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(w,X,ee,ie,I,Ie),J.transparent===!0&&J.side===Ti&&J.forceSinglePass===!1?(J.side=kn,J.needsUpdate=!0,w.renderBufferDirect(ee,X,ie,J,I,Ie),J.side=mr,J.needsUpdate=!0,w.renderBufferDirect(ee,X,ie,J,I,Ie),J.side=Ti):w.renderBufferDirect(ee,X,ie,J,I,Ie),I.onAfterRender(w,X,ee,ie,J,Ie)}function Ii(I,X,ee){X.isScene!==!0&&(X=$e);const ie=Le.get(I),J=x.state.lights,Ie=x.state.shadowsArray,He=J.state.version,Ye=de.getParameters(I,J.state,Ie,X,ee),je=de.getProgramCacheKey(Ye);let rt=ie.programs;ie.environment=I.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(I.isMeshStandardMaterial?B:et).get(I.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&I.envMap===null?X.environmentRotation:I.envMapRotation,rt===void 0&&(I.addEventListener("dispose",be),rt=new Map,ie.programs=rt);let tt=rt.get(je);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===He)return hl(I,Ye),tt}else Ye.uniforms=de.getUniforms(I),I.onBuild(ee,Ye,w),I.onBeforeCompile(Ye,w),tt=de.acquireProgram(Ye,je),rt.set(je,tt),ie.uniforms=Ye.uniforms;const Qe=ie.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qe.clippingPlanes=De.uniform),hl(I,Ye),ie.needsLights=Zu(I),ie.lightsStateVersion=He,ie.needsLights&&(Qe.ambientLightColor.value=J.state.ambient,Qe.lightProbe.value=J.state.probe,Qe.directionalLights.value=J.state.directional,Qe.directionalLightShadows.value=J.state.directionalShadow,Qe.spotLights.value=J.state.spot,Qe.spotLightShadows.value=J.state.spotShadow,Qe.rectAreaLights.value=J.state.rectArea,Qe.ltc_1.value=J.state.rectAreaLTC1,Qe.ltc_2.value=J.state.rectAreaLTC2,Qe.pointLights.value=J.state.point,Qe.pointLightShadows.value=J.state.pointShadow,Qe.hemisphereLights.value=J.state.hemi,Qe.directionalShadowMap.value=J.state.directionalShadowMap,Qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qe.spotShadowMap.value=J.state.spotShadowMap,Qe.spotLightMatrix.value=J.state.spotLightMatrix,Qe.spotLightMap.value=J.state.spotLightMap,Qe.pointShadowMap.value=J.state.pointShadowMap,Qe.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function ul(I){if(I.uniformsList===null){const X=I.currentProgram.getUniforms();I.uniformsList=cu.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function hl(I,X){const ee=Le.get(I);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Yu(I,X,ee,ie,J){X.isScene!==!0&&(X=$e),Oe.resetTextureUnits();const Ie=X.fog,He=ie.isMeshStandardMaterial?X.environment:null,Ye=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_r,je=(ie.isMeshStandardMaterial?B:et).get(ie.envMap||He),rt=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,tt=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!ee.morphAttributes.position,Tt=!!ee.morphAttributes.normal,Vt=!!ee.morphAttributes.color;let zt=Yi;ie.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(zt=w.toneMapping);const en=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,St=en!==void 0?en.length:0,Ne=Le.get(ie),dt=x.state.lights;if(ne===!0&&(me===!0||I!==C)){const Dn=I===C&&ie.id===O;De.setState(ie,I,Dn)}let Et=!1;ie.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==dt.state.version||Ne.outputColorSpace!==Ye||J.isBatchedMesh&&Ne.batching===!1||!J.isBatchedMesh&&Ne.batching===!0||J.isBatchedMesh&&Ne.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ne.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ne.instancing===!1||!J.isInstancedMesh&&Ne.instancing===!0||J.isSkinnedMesh&&Ne.skinning===!1||!J.isSkinnedMesh&&Ne.skinning===!0||J.isInstancedMesh&&Ne.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ne.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ne.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ne.instancingMorph===!1&&J.morphTexture!==null||Ne.envMap!==je||ie.fog===!0&&Ne.fog!==Ie||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==De.numPlanes||Ne.numIntersection!==De.numIntersection)||Ne.vertexAlphas!==rt||Ne.vertexTangents!==tt||Ne.morphTargets!==Qe||Ne.morphNormals!==Tt||Ne.morphColors!==Vt||Ne.toneMapping!==zt||Ne.morphTargetsCount!==St)&&(Et=!0):(Et=!0,Ne.__version=ie.version);let Bt=Ne.currentProgram;Et===!0&&(Bt=Ii(ie,X,J));let ln=!1,Ln=!1,Li=!1;const Ct=Bt.getUniforms(),jn=Ne.uniforms;if(_e.useProgram(Bt.program)&&(ln=!0,Ln=!0,Li=!0),ie.id!==O&&(O=ie.id,Ln=!0),ln||C!==I){Ct.setValue(H,"projectionMatrix",I.projectionMatrix),Ct.setValue(H,"viewMatrix",I.matrixWorldInverse);const Dn=Ct.map.cameraPosition;Dn!==void 0&&Dn.setValue(H,Me.setFromMatrixPosition(I.matrixWorld)),we.logarithmicDepthBuffer&&Ct.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ct.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,Ln=!0,Li=!0)}if(J.isSkinnedMesh){Ct.setOptional(H,J,"bindMatrix"),Ct.setOptional(H,J,"bindMatrixInverse");const Dn=J.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Ct.setValue(H,"boneTexture",Dn.boneTexture,Oe))}J.isBatchedMesh&&(Ct.setOptional(H,J,"batchingTexture"),Ct.setValue(H,"batchingTexture",J._matricesTexture,Oe),Ct.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(H,"batchingColorTexture",J._colorsTexture,Oe));const Os=ee.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Xe.update(J,ee,Bt),(Ln||Ne.receiveShadow!==J.receiveShadow)&&(Ne.receiveShadow=J.receiveShadow,Ct.setValue(H,"receiveShadow",J.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(jn.envMap.value=je,jn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(jn.envMapIntensity.value=X.environmentIntensity),Ln&&(Ct.setValue(H,"toneMappingExposure",w.toneMappingExposure),Ne.needsLights&&qu(jn,Li),Ie&&ie.fog===!0&&ye.refreshFogUniforms(jn,Ie),ye.refreshMaterialUniforms(jn,ie,fe,K,x.state.transmissionRenderTarget[I.id]),cu.upload(H,ul(Ne),jn,Oe)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(cu.upload(H,ul(Ne),jn,Oe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ct.setValue(H,"center",J.center),Ct.setValue(H,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(H,"normalMatrix",J.normalMatrix),Ct.setValue(H,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Dn=ie.uniformsGroups;for(let Sr=0,fl=Dn.length;Sr<fl;Sr++){const Gn=Dn[Sr];V.update(Gn,Bt),V.bind(Gn,Bt)}}return Bt}function qu(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function Zu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,X,ee){Le.get(I.texture).__webglTexture=X,Le.get(I.depthTexture).__webglTexture=ee;const ie=Le.get(I);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ee===void 0,ie.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,X){const ee=Le.get(I);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,ee=0){L=I,N=X,R=ee;let ie=!0,J=null,Ie=!1,He=!1;if(I){const je=Le.get(I);je.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1):je.__webglFramebuffer===void 0?Oe.setupRenderTarget(I):je.__hasExternalTextures&&Oe.rebindTextures(I,Le.get(I.texture).__webglTexture,Le.get(I.depthTexture).__webglTexture);const rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(He=!0);const tt=Le.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?J=tt[X][ee]:J=tt[X],Ie=!0):I.samples>0&&Oe.useMultisampledRTT(I)===!1?J=Le.get(I).__webglMultisampledFramebuffer:Array.isArray(tt)?J=tt[ee]:J=tt,T.copy(I.viewport),D.copy(I.scissor),q=I.scissorTest}else T.copy(Z).multiplyScalar(fe).floor(),D.copy(re).multiplyScalar(fe).floor(),q=Se;if(_e.bindFramebuffer(H.FRAMEBUFFER,J)&&ie&&_e.drawBuffers(I,J),_e.viewport(T),_e.scissor(D),_e.setScissorTest(q),Ie){const je=Le.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,je.__webglTexture,ee)}else if(He){const je=Le.get(I.texture),rt=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.__webglTexture,ee||0,rt)}O=-1},this.readRenderTargetPixels=function(I,X,ee,ie,J,Ie,He){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){_e.bindFramebuffer(H.FRAMEBUFFER,Ye);try{const je=I.texture,rt=je.format,tt=je.type;if(!we.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-ie&&ee>=0&&ee<=I.height-J&&H.readPixels(X,ee,ie,J,ze.convert(rt),ze.convert(tt),Ie)}finally{const je=L!==null?Le.get(L).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(I,X,ee,ie,J,Ie,He){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&(Ye=Ye[He]),Ye){_e.bindFramebuffer(H.FRAMEBUFFER,Ye);try{const je=I.texture,rt=je.format,tt=je.type;if(!we.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=I.width-ie&&ee>=0&&ee<=I.height-J){const Qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.bufferData(H.PIXEL_PACK_BUFFER,Ie.byteLength,H.STREAM_READ),H.readPixels(X,ee,ie,J,ze.convert(rt),ze.convert(tt),0),H.flush();const Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await ZS(H,Tt,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ie)}finally{H.deleteBuffer(Qe),H.deleteSync(Tt)}return Ie}}finally{const je=L!==null?Le.get(L).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(I,X=null,ee=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,I=arguments[1]);const ie=Math.pow(2,-ee),J=Math.floor(I.image.width*ie),Ie=Math.floor(I.image.height*ie),He=X!==null?X.x:0,Ye=X!==null?X.y:0;Oe.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,He,Ye,J,Ie),_e.unbindTexture()},this.copyTextureToTexture=function(I,X,ee=null,ie=null,J=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,I=arguments[1],X=arguments[2],J=arguments[3]||0,ee=null);let Ie,He,Ye,je,rt,tt;ee!==null?(Ie=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,Ye=ee.min.x,je=ee.min.y):(Ie=I.image.width,He=I.image.height,Ye=0,je=0),ie!==null?(rt=ie.x,tt=ie.y):(rt=0,tt=0);const Qe=ze.convert(X.format),Tt=ze.convert(X.type);Oe.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Vt=H.getParameter(H.UNPACK_ROW_LENGTH),zt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),en=H.getParameter(H.UNPACK_SKIP_PIXELS),St=H.getParameter(H.UNPACK_SKIP_ROWS),Ne=H.getParameter(H.UNPACK_SKIP_IMAGES),dt=I.isCompressedTexture?I.mipmaps[J]:I.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,dt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,dt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ye),H.pixelStorei(H.UNPACK_SKIP_ROWS,je),I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,J,rt,tt,Ie,He,Qe,Tt,dt.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,J,rt,tt,dt.width,dt.height,Qe,dt.data):H.texSubImage2D(H.TEXTURE_2D,J,rt,tt,Qe,Tt,dt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,en),H.pixelStorei(H.UNPACK_SKIP_ROWS,St),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ne),J===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(I,X,ee=null,ie=null,J=0){I.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ie=arguments[1]||null,I=arguments[2],X=arguments[3],J=arguments[4]||0);let Ie,He,Ye,je,rt,tt,Qe,Tt,Vt;const zt=I.isCompressedTexture?I.mipmaps[J]:I.image;ee!==null?(Ie=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,Ye=ee.max.z-ee.min.z,je=ee.min.x,rt=ee.min.y,tt=ee.min.z):(Ie=zt.width,He=zt.height,Ye=zt.depth,je=0,rt=0,tt=0),ie!==null?(Qe=ie.x,Tt=ie.y,Vt=ie.z):(Qe=0,Tt=0,Vt=0);const en=ze.convert(X.format),St=ze.convert(X.type);let Ne;if(X.isData3DTexture)Oe.setTexture3D(X,0),Ne=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Oe.setTexture2DArray(X,0),Ne=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const dt=H.getParameter(H.UNPACK_ROW_LENGTH),Et=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Bt=H.getParameter(H.UNPACK_SKIP_PIXELS),ln=H.getParameter(H.UNPACK_SKIP_ROWS),Ln=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,je),H.pixelStorei(H.UNPACK_SKIP_ROWS,rt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,tt),I.isDataTexture||I.isData3DTexture?H.texSubImage3D(Ne,J,Qe,Tt,Vt,Ie,He,Ye,en,St,zt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Ne,J,Qe,Tt,Vt,Ie,He,Ye,en,zt.data):H.texSubImage3D(Ne,J,Qe,Tt,Vt,Ie,He,Ye,en,St,zt),H.pixelStorei(H.UNPACK_ROW_LENGTH,dt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Bt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ln),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ln),J===0&&X.generateMipmaps&&H.generateMipmap(Ne),_e.unbindTexture()},this.initRenderTarget=function(I){Le.get(I).__webglFramebuffer===void 0&&Oe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Oe.setTextureCube(I,0):I.isData3DTexture?Oe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Oe.setTexture2DArray(I,0):Oe.setTexture2D(I,0),_e.unbindTexture()},this.resetState=function(){N=0,R=0,L=null,_e.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wu?"display-p3":"srgb",t.unpackColorSpace=Ut.workingColorSpace===Ka?"display-p3":"srgb"}}class bu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new bu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Tu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class up extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return np("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new U;class ri{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ri(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hp extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ho;const ca=new U,fo=new U,po=new U,mo=new ue,ua=new ue,V_=new st,bc=new U,ha=new U,Tc=new U,n0=new ue,Af=new ue,i0=new ue;class G_ extends Dt{constructor(e=new hp){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cu(t,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new ri(n,3,0,!1)),ho.setAttribute("uv",new ri(n,2,3,!1))}this.geometry=ho,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fo.setFromMatrixScale(this.matrixWorld),V_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),po.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fo.multiplyScalar(-po.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const l=this.center;Cc(bc.set(-.5,-.5,0),po,l,fo,i,s),Cc(ha.set(.5,-.5,0),po,l,fo,i,s),Cc(Tc.set(.5,.5,0),po,l,fo,i,s),n0.set(0,0),Af.set(1,0),i0.set(1,1);let c=e.ray.intersectTriangle(bc,ha,Tc,!1,ca);if(c===null&&(Cc(ha.set(-.5,.5,0),po,l,fo,i,s),Af.set(0,1),c=e.ray.intersectTriangle(bc,Tc,ha,!1,ca),c===null))return;const u=e.ray.origin.distanceTo(ca);u<e.near||u>e.far||t.push({distance:u,point:ca.clone(),uv:ni.getInterpolation(ca,bc,ha,Tc,n0,Af,i0,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cc(r,e,t,n,i,s){mo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ua.x=s*mo.x-i*mo.y,ua.y=i*mo.x+s*mo.y):ua.copy(mo),r.copy(e),r.x+=ua.x,r.y+=ua.y,r.applyMatrix4(V_)}const Rc=new U,r0=new U;class W_ extends Dt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Rc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Rc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Rc.setFromMatrixPosition(e.matrixWorld),r0.setFromMatrixPosition(this.matrixWorld);const n=Rc.distanceTo(r0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let l=t[i].distance;if(t[i].object.visible&&(l-=l*t[i].hysteresis),n>=l)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const l=n[i];t.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return t}}const s0=new U,o0=new At,a0=new At,tb=new U,l0=new st,Pc=new U,bf=new _n,c0=new st,Tf=new Is;class X_ extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=id,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingBox.expandByPoint(Pc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pc),this.boundingSphere.expandByPoint(Pc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bf.copy(this.boundingSphere),bf.applyMatrix4(i),e.ray.intersectsSphere(bf)!==!1&&(c0.copy(i).invert(),Tf.copy(e.ray).applyMatrix4(c0),!(this.boundingBox!==null&&Tf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===t_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;o0.fromBufferAttribute(i.attributes.skinIndex,e),a0.fromBufferAttribute(i.attributes.skinWeight,e),s0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const l=a0.getComponent(s);if(l!==0){const c=o0.getComponent(s);l0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(tb.copy(s0).applyMatrix4(l0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fp extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pr extends Jt{constructor(e=null,t=1,n=1,i,s,l,c,u,h=gn,f=gn,p,m){super(null,l,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const u0=new st,nb=new st;class Ru{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,l=e.length;s<l;s++){const c=e[s]?e[s].matrixWorld:nb;u0.multiplyMatrices(c,t[s]),u0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pr(t,e,e,Bn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let l=t[s];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),l=new fp),this.bones.push(l),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const l=t[i];e.bones.push(l.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Io extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const go=new st,h0=new st,Ic=[],f0=new vn,ib=new st,fa=new $t,da=new _n;class Y_ extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ib)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,go),f0.copy(e.boundingBox).applyMatrix4(go),this.boundingBox.union(f0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,go),da.copy(e.boundingSphere).applyMatrix4(go),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,l=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[l+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,go),h0.multiplyMatrices(n,go),fa.matrixWorld=h0,fa.raycast(e,Ic);for(let l=0,c=Ic.length;l<c;l++){const u=Ic[l];u.instanceId=s,u.object=this,t.push(u)}Ic.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Io(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(i*this.count),i,this.count,jd,ii));const s=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function rb(r,e){return r.z-e.z}function sb(r,e){return e.z-r.z}class ob{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const vo="batchId",Or=new st,Cf=new st,ab=new st,lb=new Ve(1,1,1),d0=new st,Rf=new el,Lc=new vn,os=new _n,pa=new U,p0=new U,cb=new U,Pf=new ob,Rn=new $t,Dc=[];function ub(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let l=0;l<n;l++)e.setComponent(s+t,l,r.getComponent(s,l))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class q_ extends $t{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new yt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture(),this._colorsTexture=null}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new pr(t,e,e,Bn,ii);this._matricesTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxGeometryCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new pr(t,e,e,Bn,ii);n.colorSpace=Ut.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const c in e.attributes){const u=e.getAttribute(c),{array:h,itemSize:f,normalized:p}=u,m=new h.constructor(n*f),g=new Ot(m,f,p);t.setAttribute(c,g)}if(e.getIndex()!==null){const c=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Ot(c,1))}const l=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(vo,new Ot(l,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(vo))throw new Error(`BatchedMesh: Geometry cannot use attribute "${vo}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===vo)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Or),this.getBoundingBoxAt(i,Lc).applyMatrix4(Or),t.union(Lc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Or),this.getBoundingSphereAt(i,os).applyMatrix4(Or),t.union(os))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const l=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=l[l.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._visibility,m=this._active,g=this._matricesTexture,y=this._matricesTexture.image.data,M=this._colorsTexture;p.push(!0),m.push(!0);const x=this._geometryCount;this._geometryCount++,ab.toArray(y,x*16),g.needsUpdate=!0,M!==null&&(lb.toArray(M.image.data,x*4),M.needsUpdate=!0),l.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new vn,sphereInitialized:!1,sphere:new _n});const _=this.geometry.getAttribute(vo);for(let E=0;E<i.vertexCount;E++)_.setX(i.vertexStart+E,x);return _.needsUpdate=!0,this.setGeometryAt(x,e),x}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),l=t.getIndex(),c=this._reservedRanges[e];if(i&&l.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){if(g===vo)continue;const y=t.getAttribute(g),M=n.getAttribute(g);ub(y,M,u);const x=y.itemSize;for(let _=y.count,E=h;_<E;_++){const w=u+_;for(let b=0;b<x;b++)M.setComponent(w,b,0)}M.needsUpdate=!0,M.addUpdateRange(u*x,h*x)}if(i){const g=c.indexStart;for(let y=0;y<l.count;y++)s.setX(g+y,u+l.getX(y));for(let y=l.count,M=c.indexCount;y<M;y++)s.setX(g+y,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?l.count:m.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.box,l=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const c=l.index,u=l.attributes.position,h=this._drawRanges[e];for(let f=h.start,p=h.start+h.count;f<p;f++){let m=f;c&&(m=c.getX(m)),s.expandByPoint(pa.fromBufferAttribute(u,m))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.sphere,l=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,Lc),Lc.getCenter(s.center);const c=l.index,u=l.attributes.position,h=this._drawRanges[e];let f=0;for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;c&&(g=c.getX(g)),pa.fromBufferAttribute(u,g),f=Math.max(f,s.center.distanceToSquared(pa))}s.radius=Math.sqrt(f),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,l=this._geometryCount;return e>=l||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._active,i=this._colorsTexture,s=this._colorsTexture.image.data,l=this._geometryCount;return e>=l||n[e]===!1?this:(t.toArray(s,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){const n=this._active,i=this._colorsTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,l=this._geometryCount,c=this.matrixWorld,u=this.geometry;Rn.material=this.material,Rn.geometry.index=u.index,Rn.geometry.attributes=u.attributes,Rn.geometry.boundingBox===null&&(Rn.geometry.boundingBox=new vn),Rn.geometry.boundingSphere===null&&(Rn.geometry.boundingSphere=new _n);for(let h=0;h<l;h++){if(!n[h]||!i[h])continue;const f=s[h];Rn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(h,Rn.matrixWorld).premultiply(c),this.getBoundingBoxAt(h,Rn.geometry.boundingBox),this.getBoundingSphereAt(h,Rn.geometry.boundingSphere),Rn.raycast(e,Dc);for(let p=0,m=Dc.length;p<m;p++){const g=Dc[p];g.object=this,g.batchId=h,t.push(g)}Dc.length=0}Rn.material=null,Rn.geometry.index=null,Rn.geometry.attributes={},Rn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=i.getIndex(),c=l===null?1:l.array.BYTES_PER_ELEMENT,u=this._active,h=this._visibility,f=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(d0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Rf.setFromProjectionMatrix(d0,e.coordinateSystem));let y=0;if(this.sortObjects){Cf.copy(this.matrixWorld).invert(),pa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Cf),p0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Cf);for(let _=0,E=h.length;_<E;_++)if(h[_]&&u[_]){this.getMatrixAt(_,Or),this.getBoundingSphereAt(_,os).applyMatrix4(Or);let w=!1;if(g&&(w=!Rf.intersectsSphere(os)),!w){const b=cb.subVectors(os.center,pa).dot(p0);Pf.push(m[_],b)}}const M=Pf.list,x=this.customSort;x===null?M.sort(s.transparent?sb:rb):x.call(this,M,n);for(let _=0,E=M.length;_<E;_++){const w=M[_];f[y]=w.start*c,p[y]=w.count,y++}Pf.reset()}else for(let M=0,x=h.length;M<x;M++)if(h[M]&&u[M]){let _=!1;if(g&&(this.getMatrixAt(M,Or),this.getBoundingSphereAt(M,os).applyMatrix4(Or),_=!Rf.intersectsSphere(os)),!_){const E=m[M];f[y]=E.start*c,p[y]=E.count,y++}}this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,l){this.onBeforeRender(e,null,i,s,l)}}class Hn extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new U,gu=new U,m0=new st,ma=new Is,Uc=new _n,If=new U,g0=new U;let kr=class extends Dt{constructor(e=new yt,t=new Hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mu.fromBufferAttribute(t,i-1),gu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=s,e.ray.intersectsSphere(Uc)===!1)return;m0.copy(i).invert(),ma.copy(e.ray).applyMatrix4(m0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,l.start),y=Math.min(f.count,l.start+l.count);for(let M=g,x=y-1;M<x;M+=h){const _=f.getX(M),E=f.getX(M+1),w=Nc(this,e,ma,u,_,E);w&&t.push(w)}if(this.isLineLoop){const M=f.getX(y-1),x=f.getX(g),_=Nc(this,e,ma,u,M,x);_&&t.push(_)}}else{const g=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let M=g,x=y-1;M<x;M+=h){const _=Nc(this,e,ma,u,M,M+1);_&&t.push(_)}if(this.isLineLoop){const M=Nc(this,e,ma,u,y-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function Nc(r,e,t,n,i,s){const l=r.geometry.attributes.position;if(mu.fromBufferAttribute(l,i),gu.fromBufferAttribute(l,s),t.distanceSqToSegment(mu,gu,If,g0)>n)return;If.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(If);if(!(u<e.near||u>e.far))return{distance:u,point:g0.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const v0=new U,_0=new U;class Ji extends kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)v0.fromBufferAttribute(t,i),_0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+v0.distanceTo(_0);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Z_ extends kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dp extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new st,Ud=new Is,Oc=new _n,Fc=new U;class j_ extends Dt{constructor(e=new yt,t=new dp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(i),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;y0.copy(i).invert(),Ud.copy(e.ray).applyMatrix4(y0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,l.start),g=Math.min(h.count,l.start+l.count);for(let y=m,M=g;y<M;y++){const x=h.getX(y);Fc.fromBufferAttribute(p,x),x0(Fc,x,u,i,e,t,this)}}else{const m=Math.max(0,l.start),g=Math.min(p.count,l.start+l.count);for(let y=m,M=g;y<M;y++)Fc.fromBufferAttribute(p,y),x0(Fc,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function x0(r,e,t,n,i,s,l){const c=Ud.distanceSqToPoint(r);if(c<t){const u=new U;Ud.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:l})}}class hb extends Jt{constructor(e,t,n,i,s,l,c,u,h){super(e,t,n,i,s,l,c,u,h),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:sn,this.magFilter=s!==void 0?s:sn,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class fb extends Jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=gn,this.minFilter=gn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Pu extends Jt{constructor(e,t,n,i,s,l,c,u,h,f,p,m){super(null,l,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class db extends Pu{constructor(e,t,n,i,s,l){super(e,t,n,s,l),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=vi,this.layerUpdates=new Set}addLayerUpdates(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pb extends Pu{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,gr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class mb extends Jt{constructor(e,t,n,i,s,l,c,u,h){super(e,t,n,i,s,l,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let l;t?l=t:l=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-l,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===l)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(l-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const l=this.getPoint(i),c=this.getPoint(s),u=t||(l.isVector2?new ue:new U);return u.copy(c).sub(l).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],s=[],l=[],c=new U,u=new st;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new U)}s[0]=new U,l[0]=new U;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),l[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),l[g]=l[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(jt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,y))}l[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(jt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),l[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Iu extends Ri{constructor(e=0,t=0,n=1,i=1,s=0,l=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=l,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const l=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(l?s=0:s=i),this.aClockwise===!0&&!l&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class J_ extends Iu{constructor(e,t,n,i,s,l){super(e,t,n,n,i,s,l),this.isArcCurve=!0,this.type="ArcCurve"}}function pp(){let r=0,e=0,t=0,n=0;function i(s,l,c,u){r=s,e=c,t=-3*s+3*l-2*c-u,n=2*s-2*l+c+u}return{initCatmullRom:function(s,l,c,u,h){i(l,c,h*(c-s),h*(u-l))},initNonuniformCatmullRom:function(s,l,c,u,h,f,p){let m=(l-s)/h-(c-s)/(h+f)+(c-l)/f,g=(c-l)/f-(u-l)/(f+p)+(u-c)/p;m*=f,g*=f,i(l,c,m,g)},calc:function(s){const l=s*s,c=l*s;return r+e*s+t*l+n*c}}}const zc=new U,Lf=new pp,Df=new pp,Uf=new pp;class K_ extends Ri{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,l=(s-(this.closed?0:1))*e;let c=Math.floor(l),u=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(zc.subVectors(i[0],i[1]).add(i[0]),h=zc);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(zc.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=zc),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),M=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);M<1e-4&&(M=1),y<1e-4&&(y=M),x<1e-4&&(x=M),Lf.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,M,x),Df.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,M,x),Uf.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,M,x)}else this.curveType==="catmullrom"&&(Lf.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Df.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Uf.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(Lf.calc(u),Df.calc(u),Uf.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function S0(r,e,t,n,i){const s=(n-e)*.5,l=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+l)*u+(-3*t+3*n-2*s-l)*c+s*r+t}function gb(r,e){const t=1-r;return t*t*e}function vb(r,e){return 2*(1-r)*r*e}function _b(r,e){return r*r*e}function Ea(r,e,t,n){return gb(r,e)+vb(r,t)+_b(r,n)}function yb(r,e){const t=1-r;return t*t*t*e}function xb(r,e){const t=1-r;return 3*t*t*r*e}function Sb(r,e){return 3*(1-r)*r*r*e}function Mb(r,e){return r*r*r*e}function Aa(r,e,t,n,i){return yb(r,e)+xb(r,t)+Sb(r,n)+Mb(r,i)}class mp extends Ri{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,l=this.v2,c=this.v3;return n.set(Aa(e,i.x,s.x,l.x,c.x),Aa(e,i.y,s.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Q_ extends Ri{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,l=this.v2,c=this.v3;return n.set(Aa(e,i.x,s.x,l.x,c.x),Aa(e,i.y,s.y,l.y,c.y),Aa(e,i.z,s.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gp extends Ri{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $_ extends Ri{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vp extends Ri{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,s=this.v1,l=this.v2;return n.set(Ea(e,i.x,s.x,l.x),Ea(e,i.y,s.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _p extends Ri{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,l=this.v2;return n.set(Ea(e,i.x,s.x,l.x),Ea(e,i.y,s.y,l.y),Ea(e,i.z,s.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yp extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,s=(i.length-1)*e,l=Math.floor(s),c=s-l,u=i[l===0?l:l-1],h=i[l],f=i[l>i.length-2?i.length-1:l+1],p=i[l>i.length-3?i.length-1:l+2];return n.set(S0(c,u.x,h.x,f.x,p.x),S0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var vu=Object.freeze({__proto__:null,ArcCurve:J_,CatmullRomCurve3:K_,CubicBezierCurve:mp,CubicBezierCurve3:Q_,EllipseCurve:Iu,LineCurve:gp,LineCurve3:$_,QuadraticBezierCurve:vp,QuadraticBezierCurve3:_p,SplineCurve:yp});class ey extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const l=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-l/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const l=s[i],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,u=l.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new vu[i.type]().fromJSON(i))}return this}}class ka extends ey{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gp(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new vp(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,l){const c=new mp(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,l),this}absarc(e,t,n,i,s,l){return this.absellipse(e,t,n,n,i,s,l),this}ellipse(e,t,n,i,s,l,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,l,c,u),this}absellipse(e,t,n,i,s,l,c,u){const h=new Iu(e,t,n,i,s,l,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class tl extends yt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=jt(i,0,Math.PI*2);const s=[],l=[],c=[],u=[],h=[],f=1/t,p=new U,m=new ue,g=new U,y=new U,M=new U;let x=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(M.x,M.y,M.z);break;default:x=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(y)}for(let E=0;E<=t;E++){const w=n+E*f*i,b=Math.sin(w),N=Math.cos(w);for(let R=0;R<=e.length-1;R++){p.x=e[R].x*b,p.y=e[R].y,p.z=e[R].x*N,l.push(p.x,p.y,p.z),m.x=E/t,m.y=R/(e.length-1),c.push(m.x,m.y);const L=u[3*R+0]*b,O=u[3*R+1],C=u[3*R+0]*N;h.push(L,O,C)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const b=w+E*e.length,N=b,R=b+e.length,L=b+e.length+1,O=b+1;s.push(N,R,O),s.push(L,O,R)}this.setIndex(s),this.setAttribute("position",new qe(l,3)),this.setAttribute("uv",new qe(c,2)),this.setAttribute("normal",new qe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.points,e.segments,e.phiStart,e.phiLength)}}class Lu extends tl{constructor(e=1,t=1,n=4,i=8){const s=new ka;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Lu(e.radius,e.length,e.capSegments,e.radialSegments)}}class Du extends yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],l=[],c=[],u=[],h=new U,f=new ue;l.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),l.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(l[m]/e+1)/2,f.y=(l[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fo extends yt{constructor(e=1,t=1,n=1,i=32,s=1,l=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:l,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let y=0;const M=[],x=n/2;let _=0;E(),l===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function E(){const b=new U,N=new U;let R=0;const L=(t-e)/n;for(let O=0;O<=s;O++){const C=[],T=O/s,D=T*(t-e)+e;for(let q=0;q<=i;q++){const W=q/i,Q=W*u+c,se=Math.sin(Q),K=Math.cos(Q);N.x=D*se,N.y=-T*n+x,N.z=D*K,p.push(N.x,N.y,N.z),b.set(se,L,K).normalize(),m.push(b.x,b.y,b.z),g.push(W,1-T),C.push(y++)}M.push(C)}for(let O=0;O<i;O++)for(let C=0;C<s;C++){const T=M[C][O],D=M[C+1][O],q=M[C+1][O+1],W=M[C][O+1];f.push(T,D,W),f.push(D,q,W),R+=6}h.addGroup(_,R,0),_+=R}function w(b){const N=y,R=new ue,L=new U;let O=0;const C=b===!0?e:t,T=b===!0?1:-1;for(let q=1;q<=i;q++)p.push(0,x*T,0),m.push(0,T,0),g.push(.5,.5),y++;const D=y;for(let q=0;q<=i;q++){const Q=q/i*u+c,se=Math.cos(Q),K=Math.sin(Q);L.x=C*K,L.y=x*T,L.z=C*se,p.push(L.x,L.y,L.z),m.push(0,T,0),R.x=se*.5+.5,R.y=K*.5*T+.5,g.push(R.x,R.y),y++}for(let q=0;q<i;q++){const W=N+q,Q=D+q;b===!0?f.push(Q,Q+1,W):f.push(Q+1,Q,W),O+=3}h.addGroup(_,O,b===!0?1:2),_+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uu extends Fo{constructor(e=1,t=1,n=32,i=1,s=!1,l=0,c=Math.PI*2){super(0,e,t,n,i,s,l,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:l,thetaLength:c}}static fromJSON(e){return new Uu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],l=[];c(i),h(n),f(),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(s.slice(),3)),this.setAttribute("uv",new qe(l,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const w=new U,b=new U,N=new U;for(let R=0;R<t.length;R+=3)g(t[R+0],w),g(t[R+1],b),g(t[R+2],N),u(w,b,N,E)}function u(E,w,b,N){const R=N+1,L=[];for(let O=0;O<=R;O++){L[O]=[];const C=E.clone().lerp(b,O/R),T=w.clone().lerp(b,O/R),D=R-O;for(let q=0;q<=D;q++)q===0&&O===R?L[O][q]=C:L[O][q]=C.clone().lerp(T,q/D)}for(let O=0;O<R;O++)for(let C=0;C<2*(R-O)-1;C++){const T=Math.floor(C/2);C%2===0?(m(L[O][T+1]),m(L[O+1][T]),m(L[O][T])):(m(L[O][T+1]),m(L[O+1][T+1]),m(L[O+1][T]))}}function h(E){const w=new U;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(E),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function f(){const E=new U;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const b=x(E)/2/Math.PI+.5,N=_(E)/Math.PI+.5;l.push(b,1-N)}y(),p()}function p(){for(let E=0;E<l.length;E+=6){const w=l[E+0],b=l[E+2],N=l[E+4],R=Math.max(w,b,N),L=Math.min(w,b,N);R>.9&&L<.1&&(w<.2&&(l[E+0]+=1),b<.2&&(l[E+2]+=1),N<.2&&(l[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,w){const b=E*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function y(){const E=new U,w=new U,b=new U,N=new U,R=new ue,L=new ue,O=new ue;for(let C=0,T=0;C<s.length;C+=9,T+=6){E.set(s[C+0],s[C+1],s[C+2]),w.set(s[C+3],s[C+4],s[C+5]),b.set(s[C+6],s[C+7],s[C+8]),R.set(l[T+0],l[T+1]),L.set(l[T+2],l[T+3]),O.set(l[T+4],l[T+5]),N.copy(E).add(w).add(b).divideScalar(3);const D=x(N);M(R,T+0,E,D),M(L,T+2,w,D),M(O,T+4,b,D)}}function M(E,w,b,N){N<0&&E.x===1&&(l[w]=E.x-1),b.x===0&&b.z===0&&(l[w]=N/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.vertices,e.indices,e.radius,e.details)}}class Nu extends Gr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,l,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nu(e.radius,e.detail)}}const Bc=new U,kc=new U,Nf=new U,Hc=new ni;class ty extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(ws*t),l=e.getIndex(),c=e.getAttribute("position"),u=l?l.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){l?(h[0]=l.getX(y),h[1]=l.getX(y+1),h[2]=l.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:x,c:_}=Hc;if(M.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),Hc.getNormal(Nf),p[0]=`${Math.round(M.x*i)},${Math.round(M.y*i)},${Math.round(M.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const w=(E+1)%3,b=p[E],N=p[w],R=Hc[f[E]],L=Hc[f[w]],O=`${b}_${N}`,C=`${N}_${b}`;C in m&&m[C]?(Nf.dot(m[C].normal)<=s&&(g.push(R.x,R.y,R.z),g.push(L.x,L.y,L.z)),m[C]=null):O in m||(m[O]={index0:h[E],index1:h[w],normal:Nf.clone()})}}for(const y in m)if(m[y]){const{index0:M,index1:x}=m[y];Bc.fromBufferAttribute(c,M),kc.fromBufferAttribute(c,x),g.push(Bc.x,Bc.y,Bc.z),g.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new qe(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class As extends ka{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ka().fromJSON(i))}return this}}const wb={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ny(r,0,i,t,!0);const l=[];if(!s||s.next===s.prev)return l;let c,u,h,f,p,m,g;if(n&&(s=Cb(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return Ha(s,l,t,c,u,g,0),l}};function ny(r,e,t,n,i){let s,l;if(i===Bb(r,e,t,n)>0)for(s=e;s<t;s+=n)l=M0(s,r[s],r[s+1],l);else for(s=t-n;s>=e;s-=n)l=M0(s,r[s],r[s+1],l);return l&&Ou(l,l.next)&&(Ga(l),l=l.next),l}function Ps(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ou(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(r,e,t,n,i,s,l){if(!r)return;!l&&s&&Db(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?Ab(r,n,i,s):Eb(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),Ga(r),r=h.next,c=h.next;continue}if(r=h,r===c){l?l===1?(r=bb(Ps(r),e,t),Ha(r,e,t,n,i,s,2)):l===2&&Tb(r,e,t,n,i,s):Ha(Ps(r),e,t,n,i,s,1);break}}}function Eb(r){const e=r.prev,t=r,n=r.next;if(Yt(e,t,n)>=0)return!1;const i=e.x,s=t.x,l=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<l?i:l:s<l?s:l,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>l?i:l:s>l?s:l,g=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&bo(i,c,s,u,l,h,y.x,y.y)&&Yt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Ab(r,e,t,n){const i=r.prev,s=r,l=r.next;if(Yt(i,s,l)>=0)return!1;const c=i.x,u=s.x,h=l.x,f=i.y,p=s.y,m=l.y,g=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,M=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=Nd(g,y,e,t,n),E=Nd(M,x,e,t,n);let w=r.prevZ,b=r.nextZ;for(;w&&w.z>=_&&b&&b.z<=E;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==l&&bo(c,f,u,p,h,m,w.x,w.y)&&Yt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=g&&b.x<=M&&b.y>=y&&b.y<=x&&b!==i&&b!==l&&bo(c,f,u,p,h,m,b.x,b.y)&&Yt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=_;){if(w.x>=g&&w.x<=M&&w.y>=y&&w.y<=x&&w!==i&&w!==l&&bo(c,f,u,p,h,m,w.x,w.y)&&Yt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=E;){if(b.x>=g&&b.x<=M&&b.y>=y&&b.y<=x&&b!==i&&b!==l&&bo(c,f,u,p,h,m,b.x,b.y)&&Yt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function bb(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ou(i,s)&&iy(i,n,n.next,s)&&Va(i,s)&&Va(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ga(n),Ga(n.next),n=r=s),n=n.next}while(n!==r);return Ps(n)}function Tb(r,e,t,n,i,s){let l=r;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&Ob(l,c)){let u=ry(l,c);l=Ps(l,l.next),u=Ps(u,u.next),Ha(l,e,t,n,i,s,0),Ha(u,e,t,n,i,s,0);return}c=c.next}l=l.next}while(l!==r)}function Cb(r,e,t,n){const i=[];let s,l,c,u,h;for(s=0,l=e.length;s<l;s++)c=e[s]*n,u=s<l-1?e[s+1]*n:r.length,h=ny(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(Nb(h));for(i.sort(Rb),s=0;s<i.length;s++)t=Pb(i[s],t);return t}function Rb(r,e){return r.x-e.x}function Pb(r,e){const t=Ib(r,e);if(!t)return e;const n=ry(t,r);return Ps(n,n.next),Ps(t,t.next)}function Ib(r,e){let t=e,n=-1/0,i;const s=r.x,l=r.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const m=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&bo(l<h?s:n,l,u,h,l<h?n:s,l,t.x,t.y)&&(p=Math.abs(l-t.y)/(s-t.x),Va(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&Lb(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function Lb(r,e){return Yt(r.prev,r,e.prev)<0&&Yt(e.next,r,r.next)<0}function Db(r,e,t,n){let i=r;do i.z===0&&(i.z=Nd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Ub(i)}function Ub(r){let e,t,n,i,s,l,c,u,h=1;do{for(t=r,r=null,s=null,l=0;t;){for(l++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(l>1);return r}function Nd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Nb(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function bo(r,e,t,n,i,s,l,c){return(i-l)*(e-c)>=(r-l)*(s-c)&&(r-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(s-c)>=(i-l)*(n-c)}function Ob(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Fb(r,e)&&(Va(r,e)&&Va(e,r)&&zb(r,e)&&(Yt(r.prev,r,e.prev)||Yt(r,e.prev,e))||Ou(r,e)&&Yt(r.prev,r,r.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ou(r,e){return r.x===e.x&&r.y===e.y}function iy(r,e,t,n){const i=Gc(Yt(r,e,t)),s=Gc(Yt(r,e,n)),l=Gc(Yt(t,n,r)),c=Gc(Yt(t,n,e));return!!(i!==s&&l!==c||i===0&&Vc(r,t,e)||s===0&&Vc(r,n,e)||l===0&&Vc(t,r,n)||c===0&&Vc(t,e,n))}function Vc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Gc(r){return r>0?1:r<0?-1:0}function Fb(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&iy(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Va(r,e){return Yt(r.prev,r,r.next)<0?Yt(r,e,r.next)>=0&&Yt(r,r.prev,e)>=0:Yt(r,e,r.prev)<0||Yt(r,r.next,e)<0}function zb(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ry(r,e){const t=new Od(r.i,r.x,r.y),n=new Od(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function M0(r,e,t,n){const i=new Od(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ga(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Od(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bb(r,e,t,n){let i=0;for(let s=e,l=t-n;s<t;s+=n)i+=(r[l]-r[s])*(r[s+1]+r[l+1]),l=s;return i}class Zi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Zi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];w0(e),E0(n,e);let l=e.length;t.forEach(w0);for(let u=0;u<t.length;u++)i.push(l),l+=t[u].length,E0(n,t[u]);const c=wb.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function w0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function E0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Fu extends yt{constructor(e=new As([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];l(h)}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals();function l(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:kb;let w,b=!1,N,R,L,O;_&&(w=_.getSpacedPoints(f),b=!0,m=!1,N=_.computeFrenetFrames(f,!1),R=new U,L=new U,O=new U),m||(x=0,g=0,y=0,M=0);const C=c.extractPoints(h);let T=C.shape;const D=C.holes;if(!Zi.isClockWise(T)){T=T.reverse();for(let he=0,ce=D.length;he<ce;he++){const we=D[he];Zi.isClockWise(we)&&(D[he]=we.reverse())}}const W=Zi.triangulateShape(T,D),Q=T;for(let he=0,ce=D.length;he<ce;he++){const we=D[he];T=T.concat(we)}function se(he,ce,we){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(ce,we)}const K=T.length,fe=W.length;function F(he,ce,we){let _e,Ee,Le;const Oe=he.x-ce.x,et=he.y-ce.y,B=we.x-he.x,P=we.y-he.y,te=Oe*Oe+et*et,ge=Oe*P-et*B;if(Math.abs(ge)>Number.EPSILON){const de=Math.sqrt(te),ye=Math.sqrt(B*B+P*P),Ze=ce.x-et/de,Re=ce.y+Oe/de,De=we.x-P/ye,ct=we.y+B/ye,Te=((De-Ze)*P-(ct-Re)*B)/(Oe*P-et*B);_e=Ze+Oe*Te-he.x,Ee=Re+et*Te-he.y;const Xe=_e*_e+Ee*Ee;if(Xe<=2)return new ue(_e,Ee);Le=Math.sqrt(Xe/2)}else{let de=!1;Oe>Number.EPSILON?B>Number.EPSILON&&(de=!0):Oe<-Number.EPSILON?B<-Number.EPSILON&&(de=!0):Math.sign(et)===Math.sign(P)&&(de=!0),de?(_e=-et,Ee=Oe,Le=Math.sqrt(te)):(_e=Oe,Ee=et,Le=Math.sqrt(te/2))}return new ue(_e/Le,Ee/Le)}const j=[];for(let he=0,ce=Q.length,we=ce-1,_e=he+1;he<ce;he++,we++,_e++)we===ce&&(we=0),_e===ce&&(_e=0),j[he]=F(Q[he],Q[we],Q[_e]);const Z=[];let re,Se=j.concat();for(let he=0,ce=D.length;he<ce;he++){const we=D[he];re=[];for(let _e=0,Ee=we.length,Le=Ee-1,Oe=_e+1;_e<Ee;_e++,Le++,Oe++)Le===Ee&&(Le=0),Oe===Ee&&(Oe=0),re[_e]=F(we[_e],we[Le],we[Oe]);Z.push(re),Se=Se.concat(re)}for(let he=0;he<x;he++){const ce=he/x,we=g*Math.cos(ce*Math.PI/2),_e=y*Math.sin(ce*Math.PI/2)+M;for(let Ee=0,Le=Q.length;Ee<Le;Ee++){const Oe=se(Q[Ee],j[Ee],_e);Me(Oe.x,Oe.y,-we)}for(let Ee=0,Le=D.length;Ee<Le;Ee++){const Oe=D[Ee];re=Z[Ee];for(let et=0,B=Oe.length;et<B;et++){const P=se(Oe[et],re[et],_e);Me(P.x,P.y,-we)}}}const Ue=y+M;for(let he=0;he<K;he++){const ce=m?se(T[he],Se[he],Ue):T[he];b?(L.copy(N.normals[0]).multiplyScalar(ce.x),R.copy(N.binormals[0]).multiplyScalar(ce.y),O.copy(w[0]).add(L).add(R),Me(O.x,O.y,O.z)):Me(ce.x,ce.y,0)}for(let he=1;he<=f;he++)for(let ce=0;ce<K;ce++){const we=m?se(T[ce],Se[ce],Ue):T[ce];b?(L.copy(N.normals[he]).multiplyScalar(we.x),R.copy(N.binormals[he]).multiplyScalar(we.y),O.copy(w[he]).add(L).add(R),Me(O.x,O.y,O.z)):Me(we.x,we.y,p/f*he)}for(let he=x-1;he>=0;he--){const ce=he/x,we=g*Math.cos(ce*Math.PI/2),_e=y*Math.sin(ce*Math.PI/2)+M;for(let Ee=0,Le=Q.length;Ee<Le;Ee++){const Oe=se(Q[Ee],j[Ee],_e);Me(Oe.x,Oe.y,p+we)}for(let Ee=0,Le=D.length;Ee<Le;Ee++){const Oe=D[Ee];re=Z[Ee];for(let et=0,B=Oe.length;et<B;et++){const P=se(Oe[et],re[et],_e);b?Me(P.x,P.y+w[f-1].y,w[f-1].x+we):Me(P.x,P.y,p+we)}}}ne(),me();function ne(){const he=i.length/3;if(m){let ce=0,we=K*ce;for(let _e=0;_e<fe;_e++){const Ee=W[_e];$e(Ee[2]+we,Ee[1]+we,Ee[0]+we)}ce=f+x*2,we=K*ce;for(let _e=0;_e<fe;_e++){const Ee=W[_e];$e(Ee[0]+we,Ee[1]+we,Ee[2]+we)}}else{for(let ce=0;ce<fe;ce++){const we=W[ce];$e(we[2],we[1],we[0])}for(let ce=0;ce<fe;ce++){const we=W[ce];$e(we[0]+K*f,we[1]+K*f,we[2]+K*f)}}n.addGroup(he,i.length/3-he,0)}function me(){const he=i.length/3;let ce=0;Ce(Q,ce),ce+=Q.length;for(let we=0,_e=D.length;we<_e;we++){const Ee=D[we];Ce(Ee,ce),ce+=Ee.length}n.addGroup(he,i.length/3-he,1)}function Ce(he,ce){let we=he.length;for(;--we>=0;){const _e=we;let Ee=we-1;Ee<0&&(Ee=he.length-1);for(let Le=0,Oe=f+x*2;Le<Oe;Le++){const et=K*Le,B=K*(Le+1),P=ce+_e+et,te=ce+Ee+et,ge=ce+Ee+B,de=ce+_e+B;ot(P,te,ge,de)}}}function Me(he,ce,we){u.push(he),u.push(ce),u.push(we)}function $e(he,ce,we){We(he),We(ce),We(we);const _e=i.length/3,Ee=E.generateTopUV(n,i,_e-3,_e-2,_e-1);H(Ee[0]),H(Ee[1]),H(Ee[2])}function ot(he,ce,we,_e){We(he),We(ce),We(_e),We(ce),We(we),We(_e);const Ee=i.length/3,Le=E.generateSideWallUV(n,i,Ee-6,Ee-3,Ee-2,Ee-1);H(Le[0]),H(Le[1]),H(Le[3]),H(Le[1]),H(Le[2]),H(Le[3])}function We(he){i.push(u[he*3+0]),i.push(u[he*3+1]),i.push(u[he*3+2])}function H(he){s.push(he.x),s.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,l=e.shapes.length;s<l;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vu[i.type]().fromJSON(i)),new Fu(n,e.options)}}const kb={generateTopUV:function(r,e,t,n,i){const s=e[t*3],l=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new ue(s,l),new ue(c,u),new ue(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const l=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],M=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(l-h)?[new ue(l,1-u),new ue(h,1-p),new ue(m,1-y),new ue(M,1-_)]:[new ue(c,1-u),new ue(f,1-p),new ue(g,1-y),new ue(x,1-_)]}};function Hb(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zu extends Gr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zu(e.radius,e.detail)}}class nl extends Gr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nl(e.radius,e.detail)}}class Bu extends yt{constructor(e=.5,t=1,n=32,i=1,s=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:l},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new U,y=new ue;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const _=s+x/n*l;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let M=0;M<i;M++){const x=M*(n+1);for(let _=0;_<n;_++){const E=_+x,w=E,b=E+n+1,N=E+n+2,R=E+1;c.push(w,b,R),c.push(b,N,R)}}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ku extends yt{constructor(e=new As([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],l=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new qe(i,3)),this.setAttribute("normal",new qe(s,3)),this.setAttribute("uv",new qe(l,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const y=m.holes;Zi.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,_=y.length;x<_;x++){const E=y[x];Zi.isClockWise(E)===!0&&(y[x]=E.reverse())}const M=Zi.triangulateShape(g,y);for(let x=0,_=y.length;x<_;x++){const E=y[x];g=g.concat(E)}for(let x=0,_=g.length;x<_;x++){const E=g[x];i.push(E.x,E.y,0),s.push(0,0,1),l.push(E.x,E.y)}for(let x=0,_=M.length;x<_;x++){const E=M[x],w=E[0]+p,b=E[1]+p,N=E[2]+p;n.push(w,b,N),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Vb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const l=t[e.shapes[i]];n.push(l)}return new ku(n,e.curveSegments)}}function Vb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class il extends yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(l+c,Math.PI);let h=0;const f=[],p=new U,m=new U,g=[],y=[],M=[],x=[];for(let _=0;_<=n;_++){const E=[],w=_/n;let b=0;_===0&&l===0?b=.5/t:_===n&&u===Math.PI&&(b=-.5/t);for(let N=0;N<=t;N++){const R=N/t;p.x=-e*Math.cos(i+R*s)*Math.sin(l+w*c),p.y=e*Math.cos(l+w*c),p.z=e*Math.sin(i+R*s)*Math.sin(l+w*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),x.push(R+b,1-w),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const w=f[_][E+1],b=f[_][E],N=f[_+1][E],R=f[_+1][E+1];(_!==0||l>0)&&g.push(w,b,R),(_!==n-1||u<Math.PI)&&g.push(b,N,R)}this.setIndex(g),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(M,3)),this.setAttribute("uv",new qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hu extends Gr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hu(e.radius,e.detail)}}class Vu extends yt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],f=new U,p=new U,m=new U;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const M=y/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(M),p.y=(e+t*Math.cos(x))*Math.sin(M),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const M=(i+1)*g+y-1,x=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,E=(i+1)*g+y;l.push(M,x,E),l.push(x,_,E)}this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gu extends yt{constructor(e=1,t=.4,n=64,i=8,s=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:l},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new U,m=new U,g=new U,y=new U,M=new U,x=new U,_=new U;for(let w=0;w<=n;++w){const b=w/n*s*Math.PI*2;E(b,s,l,e,g),E(b+.01,s,l,e,y),x.subVectors(y,g),_.addVectors(y,g),M.crossVectors(x,_),_.crossVectors(M,x),M.normalize(),_.normalize();for(let N=0;N<=i;++N){const R=N/i*Math.PI*2,L=-t*Math.cos(R),O=t*Math.sin(R);p.x=g.x+(L*_.x+O*M.x),p.y=g.y+(L*_.y+O*M.y),p.z=g.z+(L*_.z+O*M.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(w/n),f.push(N/i)}}for(let w=1;w<=n;w++)for(let b=1;b<=i;b++){const N=(i+1)*(w-1)+(b-1),R=(i+1)*w+(b-1),L=(i+1)*w+b,O=(i+1)*(w-1)+b;c.push(N,R,O),c.push(R,L,O)}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function E(w,b,N,R,L){const O=Math.cos(w),C=Math.sin(w),T=N/b*w,D=Math.cos(T);L.x=R*(2+D)*.5*O,L.y=R*(2+D)*C*.5,L.z=R*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Wu extends yt{constructor(e=new _p(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const l=e.computeFrenetFrames(t,s);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new U,u=new U,h=new ue;let f=new U;const p=[],m=[],g=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function M(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),E(),_()}function x(w){f=e.getPointAt(w/t,f);const b=l.normals[w],N=l.binormals[w];for(let R=0;R<=i;R++){const L=R/i*Math.PI*2,O=Math.sin(L),C=-Math.cos(L);u.x=C*b.x+O*N.x,u.y=C*b.y+O*N.y,u.z=C*b.z+O*N.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let w=1;w<=t;w++)for(let b=1;b<=i;b++){const N=(i+1)*(w-1)+(b-1),R=(i+1)*w+(b-1),L=(i+1)*w+b,O=(i+1)*(w-1)+b;y.push(N,R,O),y.push(R,L,O)}}function E(){for(let w=0;w<=t;w++)for(let b=0;b<=i;b++)h.x=w/t,h.y=b/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wu(new vu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xp extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const l=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let y=m,M=m+g;y<M;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),E=c.getX(y+(x+1)%3);i.fromBufferAttribute(l,_),s.fromBufferAttribute(l,E),A0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const l=e.attributes.position;for(let c=0,u=l.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(l,f),s.fromBufferAttribute(l,p),A0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function A0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var b0=Object.freeze({__proto__:null,BoxGeometry:Ls,CapsuleGeometry:Lu,CircleGeometry:Du,ConeGeometry:Uu,CylinderGeometry:Fo,DodecahedronGeometry:Nu,EdgesGeometry:ty,ExtrudeGeometry:Fu,IcosahedronGeometry:zu,LatheGeometry:tl,OctahedronGeometry:nl,PlaneGeometry:No,PolyhedronGeometry:Gr,RingGeometry:Bu,ShapeGeometry:ku,SphereGeometry:il,TetrahedronGeometry:Hu,TorusGeometry:Vu,TorusKnotGeometry:Gu,TubeGeometry:Wu,WireframeGeometry:xp});class sy extends In{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class oy extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sp extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ay extends Sp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ly extends In{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cy extends In{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class uy extends In{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class hy extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fy extends In{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dy extends Hn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function xs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function py(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function my(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Fd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,l=0;l!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[l++]=r[c+u]}return i}function Mp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let l=s[n];if(l!==void 0)if(Array.isArray(l))do l=s[n],l!==void 0&&(e.push(s.time),t.push.apply(t,l)),s=r[i++];while(s!==void 0);else if(l.toArray!==void 0)do l=s[n],l!==void 0&&(e.push(s.time),l.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do l=s[n],l!==void 0&&(e.push(s.time),t.push(l)),s=r[i++];while(s!==void 0)}function Gb(r,e,t,n,i=30){const s=r.clone();s.name=e;const l=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let M=0;M<f;++M)m.push(h.values[g*f+M])}}p.length!==0&&(h.times=xs(p,h.times.constructor),h.values=xs(m,h.values.constructor),l.push(h))}s.tracks=l;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function Wb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let l=0;l<i;++l){const c=t.tracks[l],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=c.times.length-1;let M;if(s<=c.times[0]){const _=f,E=p-f;M=c.values.slice(_,E)}else if(s>=c.times[y]){const _=y*p+f,E=_+p-f;M=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,w=p-f;_.evaluate(s),M=_.resultBuffer.slice(E,w)}u==="quaternion"&&new Pn().fromArray(M).normalize().conjugate().toArray(M);const x=h.times.length;for(let _=0;_<x;++_){const E=_*g+m;if(u==="quaternion")Pn.multiplyQuaternionsFlat(h.values,E,M,0,h.values,E);else{const w=g-m*2;for(let b=0;b<w;++b)h.values[E+b]-=M[b]}}}return r.blendMode=$d,r}const Xb={convertArray:xs,isTypedArray:py,getKeyframeOrder:my,sortedArray:Fd,flattenJSON:Mp,subclip:Gb,makeClipAdditive:Wb};class rl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let l;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}l=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let l=0;l!==i;++l)t[l]=n[s+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gy extends rl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,l=e+1,c=i[s],u=i[l];if(c===void 0)switch(this.getSettings_().endingStart){case _s:s=e,c=2*t-n;break;case Da:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case _s:l=e,u=2*n-t;break;case Da:l=1,u=n+i[1]-i[0];break;default:l=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=l*f}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),M=y*y,x=M*y,_=-m*x+2*m*M-m*y,E=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*y+1,w=(-1-g)*x+(1.5+g)*M+.5*y,b=g*x-g*M;for(let N=0;N!==c;++N)s[N]=_*l[f+N]+E*l[h+N]+w*l[u+N]+b*l[p+N];return s}}class wp extends rl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=l[h+m]*p+l[u+m]*f;return s}}class vy extends rl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xs(t,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xs(e.times,Array),values:xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case du:t=this.InterpolantFactoryMethodLinear;break;case lu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return du;case this.InterpolantFactoryMethodSmooth:return lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,l=i-1;for(;s!==i&&n[s]<e;)++s;for(;l!==-1&&n[l]>t;)--l;if(++l,s!==0||l!==i){s>=l&&(l=Math.max(l,1),s=l-1);const c=this.getValueSize();this.times=n.slice(s,l),this.values=this.values.slice(s*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,l),e=!1;break}l=u}if(i!==void 0&&py(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lu,s=e.length-1;let l=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const M=t[p+y];if(M!==t[m+y]||M!==t[g+y]){u=!0;break}}}if(u){if(c!==l){e[l]=e[c];const p=c*n,m=l*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++l}}if(s>0){e[l]=e[s];for(let c=s*n,u=l*n,h=0;h!==n;++h)t[u+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=du;class Ds extends Pi{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=La;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends Pi{}Ep.prototype.ValueTypeName="color";class Wa extends Pi{}Wa.prototype.ValueTypeName="number";class _y extends rl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Pn.slerpFlat(s,0,l,h-c,l,h,u);return s}}class sl extends Pi{InterpolantFactoryMethodLinear(e){return new _y(this.times,this.values,this.getValueSize(),e)}}sl.prototype.ValueTypeName="quaternion";sl.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Pi{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=La;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Xa extends Pi{}Xa.prototype.ValueTypeName="vector";class Ya{constructor(e="",t=-1,n=[],i=Mu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(qb(n[l]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,l=n.length;s!==l;++s)t.push(Pi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,l=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=my(u);u=Fd(u,1,f),h=Fd(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),l.push(new Wa(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const l=[];for(const c in i)l.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,M){if(g.length!==0){const x=[],_=[];Mp(g,x,_,y),x.length!==0&&M.push(new p(m,x,_))}},i=[],s=e.name||"default",l=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let M=0;M<m[y].morphTargets.length;M++)g[m[y].morphTargets[M]]=-1;for(const M in g){const x=[],_=[];for(let E=0;E!==m[y].morphTargets.length;++E){const w=m[y];x.push(w.time),_.push(w.morphTarget===M?1:0)}i.push(new Wa(".morphTargetInfluence["+M+"]",x,_))}u=g.length*l}else{const g=".bones["+t[p].name+"]";n(Xa,g+".position",m,"pos",i),n(sl,g+".quaternion",m,"rot",i),n(Xa,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wa;case"vector":case"vector2":case"vector3":case"vector4":return Xa;case"color":return Ep;case"quaternion":return sl;case"bool":case"boolean":return Ds;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function qb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yb(r.type);if(r.times===void 0){const t=[],n=[];Mp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ap{constructor(e,t,n){const i=this;let s=!1,l=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,l,c),s=!0},this.itemEnd=function(f){l++,i.onProgress!==void 0&&i.onProgress(f,l,c),l===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const yy=new Ap;class Zn{constructor(e){this.manager=e!==void 0?e:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr={};class Zb extends Error{constructor(e,t){super(e),this.response=t}}class vr extends Zn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(lr[e]!==void 0){lr[e].push({onLoad:t,onProgress:n,onError:i});return}lr[e]=[],lr[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=lr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let M=0;const x=new ReadableStream({start(_){E();function E(){p.read().then(({done:w,value:b})=>{if(w)_.close();else{M+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:g});for(let R=0,L=f.length;R<L;R++){const O=f[R];O.onProgress&&O.onProgress(N)}_.enqueue(b),E()}},w=>{_.error(w)})}}});return new Response(x)}else throw new Zb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{fr.add(e,h);const f=lr[e];delete lr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=lr[e];if(f===void 0)throw this.manager.itemError(e),h;delete lr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jb extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new vr(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ya.parse(e[n]);t.push(i)}return t}}class Jb extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=[],c=new Pu,u=new vr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);l[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=sn),c.image=l,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){l[y]={mipmaps:[]};for(let M=0;M<m.mipmapCount;M++)l[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+M]),l[y].format=m.format,l[y].width=m.width,l[y].height=m.height}c.image=l}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=sn),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class qa extends Zn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=fr.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const c=Ba("img");function u(){f(),fr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Kb extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=new $a;s.colorSpace=gi;const l=new qa(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function u(h){l.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class Qb extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new pr,c=new vr(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?l.image=h.image:h.data!==void 0&&(l.image.width=h.width,l.image.height=h.height,l.image.data=h.data),l.wrapS=h.wrapS!==void 0?h.wrapS:vi,l.wrapT=h.wrapT!==void 0?h.wrapT:vi,l.magFilter=h.magFilter!==void 0?h.magFilter:sn,l.minFilter=h.minFilter!==void 0?h.minFilter:sn,l.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(l.colorSpace=h.colorSpace),h.flipY!==void 0&&(l.flipY=h.flipY),h.format!==void 0&&(l.format=h.format),h.type!==void 0&&(l.type=h.type),h.mipmaps!==void 0&&(l.mipmaps=h.mipmaps,l.minFilter=Wi),h.mipmapCount===1&&(l.minFilter=sn),h.generateMipmaps!==void 0&&(l.generateMipmaps=h.generateMipmaps),l.needsUpdate=!0,t&&t(l,h)},n,i),l}}class $b extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,l=new qa(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Wr extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xy extends Wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Of=new st,T0=new U,C0=new U;class bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;T0.setFromMatrixPosition(e.matrixWorld),t.position.copy(T0),C0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C0),t.updateMatrixWorld(),Of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eT extends bp{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ro*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sy extends Wr{constructor(e,t,n=0,i=Math.PI/3,s=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new eT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const R0=new st,ga=new U,Ff=new U;class tT extends bp{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(ga),Ff.copy(n.position),Ff.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ff),n.updateMatrixWorld(),i.makeTranslation(-ga.x,-ga.y,-ga.z),R0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R0)}}class My extends Wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nT extends bp{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wy extends Wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new nT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ey extends Wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ay extends Wr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class by{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.282095),t.addScaledVector(l[1],.488603*i),t.addScaledVector(l[2],.488603*s),t.addScaledVector(l[3],.488603*n),t.addScaledVector(l[4],1.092548*(n*i)),t.addScaledVector(l[5],1.092548*(i*s)),t.addScaledVector(l[6],.315392*(3*s*s-1)),t.addScaledVector(l[7],1.092548*(n*s)),t.addScaledVector(l[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.886227),t.addScaledVector(l[1],2*.511664*i),t.addScaledVector(l[2],2*.511664*s),t.addScaledVector(l[3],2*.511664*n),t.addScaledVector(l[4],2*.429043*n*i),t.addScaledVector(l[5],2*.429043*i*s),t.addScaledVector(l[6],.743125*s*s-.247708),t.addScaledVector(l[7],2*.429043*n*s),t.addScaledVector(l[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Ty extends Wr{constructor(e=new by,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Xu extends Zn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,l=new vr(s.manager);l.setPath(s.path),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Xu.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(i.uniforms[s]={},l.type){case"t":i.uniforms[s].value=n(l.value);break;case"c":i.uniforms[s].value=new Ve().setHex(l.value);break;case"v2":i.uniforms[s].value=new ue().fromArray(l.value);break;case"v3":i.uniforms[s].value=new U().fromArray(l.value);break;case"v4":i.uniforms[s].value=new At().fromArray(l.value);break;case"m3":i.uniforms[s].value=new pt().fromArray(l.value);break;case"m4":i.uniforms[s].value=new st().fromArray(l.value);break;default:i.uniforms[s].value=l.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ue().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:sy,SpriteMaterial:hp,RawShaderMaterial:oy,ShaderMaterial:_i,PointsMaterial:dp,MeshPhysicalMaterial:ay,MeshStandardMaterial:Sp,MeshPhongMaterial:ly,MeshToonMaterial:cy,MeshNormalMaterial:uy,MeshLambertMaterial:hy,MeshDepthMaterial:lp,MeshDistanceMaterial:cp,MeshBasicMaterial:Vr,MeshMatcapMaterial:fy,LineDashedMaterial:dy,LineBasicMaterial:Hn,Material:In};return new t[e]}}class zd{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tp extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Cy extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new vr(s.manager);l.setPath(s.path),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const x=g.interleavedBuffers[y],_=s(g,x.buffer),E=wo(x.type,_),w=new Cu(E,x.stride);return w.uuid=x.uuid,t[y]=w,w}function s(g,y){if(n[y]!==void 0)return n[y];const x=g.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const l=e.isInstancedBufferGeometry?new Tp:new yt,c=e.data.index;if(c!==void 0){const g=wo(c.type,c.array);l.setIndex(new Ot(g,1))}const u=e.data.attributes;for(const g in u){const y=u[g];let M;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);M=new ri(x,y.itemSize,y.offset,y.normalized)}else{const x=wo(y.type,y.array),_=y.isInstancedBufferAttribute?Io:Ot;M=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),l.setAttribute(g,M)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],M=[];for(let x=0,_=y.length;x<_;x++){const E=y[x];let w;if(E.isInterleavedBufferAttribute){const b=i(e.data,E.data);w=new ri(b,E.itemSize,E.offset,E.normalized)}else{const b=wo(E.type,E.array);w=new Ot(b,E.itemSize,E.normalized)}E.name!==void 0&&(w.name=E.name),M.push(w)}l.morphAttributes[g]=M}e.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const M=p[g];l.addGroup(M.start,M.count,M.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new U;m.center!==void 0&&g.fromArray(m.center),l.boundingSphere=new _n(g,m.radius)}return e.name&&(l.name=e.name),e.userData&&(l.userData=e.userData),l}}class iT extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=this.path===""?zd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||l;const c=new vr(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?zd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new vr(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const l=await s.loadAsync(e,t),c=JSON.parse(l),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),l=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,l),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),t!==void 0){let p=!1;for(const m in l)if(l[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),l=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,l),u=this.parseObject(e.object,i,c,l,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new As().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,l=e.length;s<l;s++){const c=new Ru().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Cy;for(let s=0,l=e.length;s<l;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in b0?c=b0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Xu;s.setTextures(t);for(let l=0,c=e.length;l<c;l++){const u=e[l];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ya.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function l(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return l(f)}else return u.data?{data:wo(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new Ap(t);s=new qa(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new pr(_.data,_.width,_.height)))}i[p.uuid]=new ys(g)}else{const g=c(p.url);i[p.uuid]=new ys(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return l.data?{data:wo(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){i=new qa(this.manager),i.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const u=e[l],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=await s(g);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new pr(y.data,y.width,y.height)))}n[u.uuid]=new ys(f)}else{const f=await s(u.url);n[u.uuid]=new ys(f)}}}return n}parseTextures(e,t){function n(s,l){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),l[s])}const i={};if(e!==void 0)for(let s=0,l=e.length;s<l;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new $a,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new pr:f=new Jt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,rT)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],P0),f.wrapT=n(c.wrap[1],P0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,I0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,I0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let l;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,M=m.length;y<M;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":l=new up,e.background!==void 0&&(Number.isInteger(e.background)?l.background=new Ve(e.background):l.background=h(e.background)),e.environment!==void 0&&(l.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?l.fog=new Tu(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(l.fog=new bu(e.fog.color,e.fog.density)),e.fog.name!==""&&(l.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(l.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(l.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&l.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":l=new Xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(l.focus=e.focus),e.zoom!==void 0&&(l.zoom=e.zoom),e.filmGauge!==void 0&&(l.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(l.filmOffset=e.filmOffset),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"OrthographicCamera":l=new qi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(l.zoom=e.zoom),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"AmbientLight":l=new Ey(e.color,e.intensity);break;case"DirectionalLight":l=new wy(e.color,e.intensity);break;case"PointLight":l=new My(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":l=new Ay(e.color,e.intensity,e.width,e.height);break;case"SpotLight":l=new Sy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":l=new xy(e.color,e.groundColor,e.intensity);break;case"LightProbe":l=new Ty().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),l=new X_(f,p),e.bindMode!==void 0&&(l.bindMode=e.bindMode),e.bindMatrix!==void 0&&l.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(l.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),l=new $t(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;l=new Y_(f,p,m),l.instanceMatrix=new Io(new Float32Array(g.array),16),y!==void 0&&(l.instanceColor=new Io(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),l=new q_(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,p),l.geometry=f,l.perObjectFrustumCulled=e.perObjectFrustumCulled,l.sortObjects=e.sortObjects,l._drawRanges=e.drawRanges,l._reservedRanges=e.reservedRanges,l._visibility=e.visibility,l._active=e.active,l._bounds=e.bounds.map(M=>{const x=new vn;x.min.fromArray(M.boxMin),x.max.fromArray(M.boxMax);const _=new _n;return _.radius=M.sphereRadius,_.center.fromArray(M.sphereCenter),{boxInitialized:M.boxInitialized,box:x,sphereInitialized:M.sphereInitialized,sphere:_}}),l._maxGeometryCount=e.maxGeometryCount,l._maxVertexCount=e.maxVertexCount,l._maxIndexCount=e.maxIndexCount,l._geometryInitialized=e.geometryInitialized,l._geometryCount=e.geometryCount,l._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(l._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":l=new W_;break;case"Line":l=new kr(c(e.geometry),u(e.material));break;case"LineLoop":l=new Z_(c(e.geometry),u(e.material));break;case"LineSegments":l=new Ji(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":l=new j_(c(e.geometry),u(e.material));break;case"Sprite":l=new G_(u(e.material));break;case"Group":l=new Ao;break;case"Bone":l=new fp;break;default:l=new Dt}if(l.uuid=e.uuid,e.name!==void 0&&(l.name=e.name),e.matrix!==void 0?(l.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=e.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(e.position!==void 0&&l.position.fromArray(e.position),e.rotation!==void 0&&l.rotation.fromArray(e.rotation),e.quaternion!==void 0&&l.quaternion.fromArray(e.quaternion),e.scale!==void 0&&l.scale.fromArray(e.scale)),e.up!==void 0&&l.up.fromArray(e.up),e.castShadow!==void 0&&(l.castShadow=e.castShadow),e.receiveShadow!==void 0&&(l.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(l.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(l.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(l.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(l.visible=e.visible),e.frustumCulled!==void 0&&(l.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(l.renderOrder=e.renderOrder),e.userData!==void 0&&(l.userData=e.userData),e.layers!==void 0&&(l.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)l.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];l.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(l.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],M=l.getObjectByProperty("uuid",y.object);M!==void 0&&l.addLevel(M,y.distance,y.hysteresis)}}return l}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const rT={UVMapping:Su,CubeReflectionMapping:gr,CubeRefractionMapping:Br,EquirectangularReflectionMapping:Ta,EquirectangularRefractionMapping:Ca,CubeUVReflectionMapping:Uo},P0={RepeatWrapping:Ra,ClampToEdgeWrapping:vi,MirroredRepeatWrapping:Pa},I0={NearestFilter:gn,NearestMipmapNearestFilter:Xd,NearestMipmapLinearFilter:Mo,LinearFilter:sn,LinearMipmapNearestFilter:Ma,LinearMipmapLinearFilter:Wi};class sT extends Zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=fr.get(e);if(l!==void 0){if(s.manager.itemStart(e),l.then){l.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),fr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});fr.add(e,u),s.manager.itemStart(e)}}let Wc;class Cp{static getContext(){return Wc===void 0&&(Wc=new(window.AudioContext||window.webkitAudioContext)),Wc}static setContext(e){Wc=e}}class oT extends Zn{constructor(e){super(e)}load(e,t,n,i){const s=this,l=new vr(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{const h=u.slice(0);Cp.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const L0=new st,D0=new st,as=new st;class aT{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,as.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,l=t.near*Math.tan(ws*t.fov*.5)/t.zoom;let c,u;D0.elements[12]=-i,L0.elements[12]=i,c=-l*t.aspect+s,u=l*t.aspect+s,as.elements[0]=2*t.near/(u-c),as.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(as),c=-l*t.aspect-s,u=l*t.aspect-s,as.elements[0]=2*t.near/(u-c),as.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(as)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(D0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(L0)}}class Rp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=U0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=U0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function U0(){return(typeof performance>"u"?Date:performance).now()}const ls=new U,N0=new Pn,lT=new U,cs=new U;class cT extends Dt{constructor(){super(),this.type="AudioListener",this.context=Cp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Rp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ls,N0,lT),cs.set(0,0,-1).applyQuaternion(N0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ls.x,i),t.positionY.linearRampToValueAtTime(ls.y,i),t.positionZ.linearRampToValueAtTime(ls.z,i),t.forwardX.linearRampToValueAtTime(cs.x,i),t.forwardY.linearRampToValueAtTime(cs.y,i),t.forwardZ.linearRampToValueAtTime(cs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ls.x,ls.y,ls.z),t.setOrientation(cs.x,cs.y,cs.z,n.x,n.y,n.z)}}class Ry extends Dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const us=new U,O0=new Pn,uT=new U,hs=new U;class hT extends Ry{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(us,O0,uT),hs.set(0,0,1).applyQuaternion(O0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(us.x,n),t.positionY.linearRampToValueAtTime(us.y,n),t.positionZ.linearRampToValueAtTime(us.z,n),t.orientationX.linearRampToValueAtTime(hs.x,n),t.orientationY.linearRampToValueAtTime(hs.y,n),t.orientationZ.linearRampToValueAtTime(hs.z,n)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(hs.x,hs.y,hs.z)}}class fT{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Py{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,l;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==i;++c)n[s+c]=n[c];l=t}else{l+=t;const c=t/l;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,l=i;s!==l;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let l=0;l!==s;++l)e[t+l]=e[n+l]}_slerp(e,t,n,i){Pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const l=this._workIndex*s;Pn.multiplyQuaternionsFlat(e,l,e,t,e,n),Pn.slerpFlat(e,t,e,t,e,l,i)}_lerp(e,t,n,i,s){const l=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*l+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let l=0;l!==s;++l){const c=t+l;e[c]=e[c]+e[n+l]*i}}}const Pp="\\[\\]\\.:\\/",dT=new RegExp("["+Pp+"]","g"),Ip="[^"+Pp+"]",pT="[^"+Pp.replace("\\.","")+"]",mT=/((?:WC+[\/:])*)/.source.replace("WC",Ip),gT=/(WCOD+)?/.source.replace("WCOD",pT),vT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ip),_T=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ip),yT=new RegExp("^"+mT+gT+vT+_T+"$"),xT=["material","materials","bones","map"];class ST{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dT,"")}static parseTrackName(e){const t=yT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);xT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let l=0;l<s.length;l++){const c=s[l];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[i];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=s}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=ST;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class MT{constructor(){this.isAnimationObjectGroup=!0,this.uuid=si(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,l=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let y=t[g];if(y===void 0){y=u++,t[g]=y,e.push(m);for(let M=0,x=l;M!==x;++M)s[M].push(new Rt(m,n[M],i[M]))}else if(y<h){c=e[y];const M=--h,x=e[M];t[x.uuid]=y,e[y]=x,t[g]=M,e[M]=m;for(let _=0,E=l;_!==E;++_){const w=s[_],b=w[M];let N=w[y];w[y]=b,N===void 0&&(N=new Rt(m,n[_],i[_])),w[M]=N}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const u=arguments[l],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,y=i;g!==y;++g){const M=n[g],x=M[p],_=M[f];M[f]=x,M[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,l=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],y=--l,M=e[y];t[g.uuid]=p,e[p]=g,t[M.uuid]=m,e[m]=M,e.pop();for(let x=0,_=i;x!==_;++x){const E=n[x],w=E[m],b=E[y];E[p]=w,E[m]=b,E.pop()}}else{const m=--l,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,M=i;y!==M;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const l=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,l.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const y=u[m];p[m]=new Rt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,l=this._bindings,c=l.length-1,u=l[c],h=e[c];t[h]=n,l[n]=u,l.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class Iy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,l=s.length,c=new Array(l),u={endingStart:vs,endingEnd:vs};for(let h=0;h!==l;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=f_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,l=s/i,c=i/s;e.warp(1,l,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const l=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case $d:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(l),h[f].accumulateAdditive(c);break;case Mu:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(l),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const l=n===d_;if(e===0)return s===-1?i:l&&(s&1)===1?t-i:i;if(n===h_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(l&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:vs:i.endingStart=Da,t?i.endingEnd=this.zeroSlopeAtEnd?_s:vs:i.endingEnd=Da)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,u=l.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const wT=new Float32Array(1);class ET extends yr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,l=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let y=f[g];if(y!==void 0)++y.referenceCount,l[p]=y;else{if(y=l[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,g));continue}const M=t&&t._propertyBindings[p].binding.parsedPath;y=new Py(Rt.create(n,g,M),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,g),l[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let l=s[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=l;else{const c=l.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,l=this._actionsByClip,c=l[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete l[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let l=i[t];l===void 0&&(l={},i[t]=l),l[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,l=this._bindingsByRootAndName,c=l[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete l[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new wp(new Float32Array(2),new Float32Array(2),1,wT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let l=typeof e=="string"?Ya.findByName(i,e):e;const c=l!==null?l.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(l!==null?n=l.blendMode:n=Mu),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const f=new Iy(this,l,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ya.findByName(n,e):e,l=s?s.uuid:e,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,l);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const l=s.knownActions;for(let c=0,u=l.length;c!==u;++c){const h=l[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const l in s){const c=s[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Lp{constructor(e){this.value=e}clone(){return new Lp(this.value.clone===void 0?this.value:this.value.clone())}}let AT=0;class bT extends yr{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:AT++}),this.name="",this.usage=Fa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let l=0;l<s.length;l++)this.uniforms.push(s[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class _u extends Cu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class TT{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const F0=new st;class Ly{constructor(e,t,n=0,i=1/0){this.ray=new Is(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return F0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F0),this}intersectObject(e,t=!0,n=[]){return Bd(e,this,n,t),n.sort(z0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bd(e[i],this,n,t);return n.sort(z0),n}}function z0(r,e){return r.distance-e.distance}function Bd(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let l=0,c=s.length;l<c;l++)Bd(s[l],e,t,!0)}}class kd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class CT{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const B0=new ue;class RT{constructor(e=new ue(1/0,1/0),t=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=B0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,B0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const k0=new U,Xc=new U;class Dy{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){k0.subVectors(e,this.start),Xc.subVectors(this.end,this.start);const n=Xc.dot(Xc);let s=Xc.dot(k0)/n;return t&&(s=jt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const H0=new U;class PT extends Dt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new yt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,u=32;l<u;l++,c++){const h=l/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new qe(i,3));const s=new Hn({fog:!1,toneMapped:!1});this.cone=new Ji(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),H0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(H0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Fr=new U,Yc=new st,zf=new st;class IT extends Ji{constructor(e){const t=Uy(e),n=new yt,i=[],s=[],l=new Ve(0,0,1),c=new Ve(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(l.r,l.g,l.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new qe(i,3)),n.setAttribute("color",new qe(s,3));const u=new Hn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");zf.copy(this.root.matrixWorld).invert();for(let s=0,l=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(Yc.multiplyMatrices(zf,c.matrixWorld),Fr.setFromMatrixPosition(Yc),i.setXYZ(l,Fr.x,Fr.y,Fr.z),Yc.multiplyMatrices(zf,c.parent.matrixWorld),Fr.setFromMatrixPosition(Yc),i.setXYZ(l+1,Fr.x,Fr.y,Fr.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Uy(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Uy(r.children[t]));return e}class LT extends $t{constructor(e,t,n){const i=new il(t,4,2),s=new Vr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const DT=new U,V0=new Ve,G0=new Ve;class UT extends Dt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new nl(t);i.rotateY(Math.PI*.5),this.material=new Vr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),l=new Float32Array(s.count*3);i.setAttribute("color",new Ot(l,3)),this.add(new $t(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");V0.copy(this.light.color),G0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?V0:G0;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(DT.setFromMatrixPosition(this.light.matrixWorld).negate())}}class NT extends Ji{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);const s=t/2,l=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,y=-c;m<=t;m++,y+=l){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const M=m===s?n:i;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const f=new yt;f.setAttribute("position",new qe(u,3)),f.setAttribute("color",new qe(h,3));const p=new Hn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class OT extends Ji{constructor(e=10,t=16,n=8,i=64,s=4473924,l=8947848){s=new Ve(s),l=new Ve(l);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,y);const M=p&1?s:l;u.push(M.r,M.g,M.b),u.push(M.r,M.g,M.b)}for(let p=0;p<n;p++){const m=p&1?s:l,g=e-e/n*p;for(let y=0;y<i;y++){let M=y/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g;c.push(x,0,_),u.push(m.r,m.g,m.b),M=(y+1)/i*(Math.PI*2),x=Math.sin(M)*g,_=Math.cos(M)*g,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new yt;h.setAttribute("position",new qe(c,3)),h.setAttribute("color",new qe(u,3));const f=new Hn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const W0=new U,qc=new U,X0=new U;class FT extends Dt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new yt;i.setAttribute("position",new qe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Hn({fog:!1,toneMapped:!1});this.lightPlane=new kr(i,s),this.add(this.lightPlane),i=new yt,i.setAttribute("position",new qe([0,0,0,0,0,1],3)),this.targetLine=new kr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),W0.setFromMatrixPosition(this.light.matrixWorld),qc.setFromMatrixPosition(this.light.target.matrixWorld),X0.subVectors(qc,W0),this.lightPlane.lookAt(qc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(qc),this.targetLine.scale.z=X0.length()}}const Zc=new U,Zt=new Qa;class zT extends Ji{constructor(e){const t=new yt,n=new Hn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){u(y),u(M)}function u(y){i.push(0,0,0),s.push(0,0,0),l[y]===void 0&&(l[y]=[]),l[y].push(i.length/3-1)}t.setAttribute("position",new qe(i,3)),t.setAttribute("color",new qe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const h=new Ve(16755200),f=new Ve(16711680),p=new Ve(43775),m=new Ve(16777215),g=new Ve(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Zt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Qt("c",t,e,Zt,0,0,-1),Qt("t",t,e,Zt,0,0,1),Qt("n1",t,e,Zt,-n,-i,-1),Qt("n2",t,e,Zt,n,-i,-1),Qt("n3",t,e,Zt,-n,i,-1),Qt("n4",t,e,Zt,n,i,-1),Qt("f1",t,e,Zt,-n,-i,1),Qt("f2",t,e,Zt,n,-i,1),Qt("f3",t,e,Zt,-n,i,1),Qt("f4",t,e,Zt,n,i,1),Qt("u1",t,e,Zt,n*.7,i*1.1,-1),Qt("u2",t,e,Zt,-n*.7,i*1.1,-1),Qt("u3",t,e,Zt,0,i*2,-1),Qt("cf1",t,e,Zt,-n,0,1),Qt("cf2",t,e,Zt,n,0,1),Qt("cf3",t,e,Zt,0,-i,1),Qt("cf4",t,e,Zt,0,i,1),Qt("cn1",t,e,Zt,-n,0,-1),Qt("cn2",t,e,Zt,n,0,-1),Qt("cn3",t,e,Zt,0,-i,-1),Qt("cn4",t,e,Zt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qt(r,e,t,n,i,s,l){Zc.set(i,s,l).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],Zc.x,Zc.y,Zc.z)}}const jc=new vn;class BT extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new yt;s.setIndex(new Ot(n,1)),s.setAttribute("position",new Ot(i,3)),super(s,new Hn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&jc.setFromObject(this.object),jc.isEmpty())return;const t=jc.min,n=jc.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kT extends Ji{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new yt;s.setIndex(new Ot(n,1)),s.setAttribute("position",new qe(i,3)),super(s,new Hn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class HT extends kr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new yt;l.setAttribute("position",new qe(s,3)),l.computeBoundingSphere(),super(l,new Hn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new yt;u.setAttribute("position",new qe(c,3)),u.computeBoundingSphere(),this.add(new $t(u,new Vr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Y0=new U;let Jc,Bf;class VT extends Dt{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*.2,l=s*.2){super(),this.type="ArrowHelper",Jc===void 0&&(Jc=new yt,Jc.setAttribute("position",new qe([0,0,0,0,1,0],3)),Bf=new Fo(0,.5,1,5,1),Bf.translate(0,-.5,0)),this.position.copy(t),this.line=new kr(Jc,new Hn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(Bf,new Vr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,l)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Y0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Y0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class GT extends Ji{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new yt;i.setAttribute("position",new qe(t,3)),i.setAttribute("color",new qe(n,3));const s=new Hn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ve,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class WT{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ka,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,l){return this.currentPath.bezierCurveTo(e,t,n,i,s,l),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let w=0,b=_.length;w<b;w++){const N=_[w],R=new As;R.curves=N.curves,E.push(R)}return E}function n(_,E){const w=E.length;let b=!1;for(let N=w-1,R=0;R<w;N=R++){let L=E[N],O=E[R],C=O.x-L.x,T=O.y-L.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(L=E[R],C=-C,O=E[N],T=-T),_.y<L.y||_.y>O.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const D=T*(_.x-L.x)-C*(_.y-L.y);if(D===0)return!0;if(D<0)continue;b=!b}}else{if(_.y!==L.y)continue;if(O.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=O.x)return!0}}return b}const i=Zi.isClockWise,s=this.subPaths;if(s.length===0)return[];let l,c,u;const h=[];if(s.length===1)return c=s[0],u=new As,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],y=0,M;m[y]=void 0,g[y]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],M=c.getPoints(),l=i(M),l=e?!l:l,l?(!f&&m[y]&&y++,m[y]={s:new As,p:M},m[y].s.curves=c.curves,f&&y++,g[y]=[]):g[y].push({h:c,p:M[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let w=0,b=m.length;w<b;w++)p[w]=[];for(let w=0,b=m.length;w<b;w++){const N=g[w];for(let R=0;R<N.length;R++){const L=N[R];let O=!0;for(let C=0;C<m.length;C++)n(L.p,m[C].p)&&(w!==C&&E++,O?(O=!1,p[C].push(L)):_=!0);O&&p[w].push(L)}}E>0&&_===!1&&(g=p)}let x;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),x=g[_];for(let w=0,b=x.length;w<b;w++)u.holes.push(x[w].h)}return h}}class XT extends Ci{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const YT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Wd,AddEquation:zr,AddOperation:Zv,AdditiveAnimationBlendMode:$d,AdditiveBlending:ed,AgXToneMapping:$v,AlphaFormat:s_,AlwaysCompare:w_,AlwaysDepth:Hv,AlwaysStencilFunc:Pd,AmbientLight:Ey,AnimationAction:Iy,AnimationClip:Ya,AnimationLoader:jb,AnimationMixer:ET,AnimationObjectGroup:MT,AnimationUtils:Xb,ArcCurve:J_,ArrayCamera:k_,ArrowHelper:VT,AttachedBindMode:id,Audio:Ry,AudioAnalyser:fT,AudioContext:Cp,AudioListener:cT,AudioLoader:oT,AxesHelper:GT,BackSide:kn,BasicDepthPacking:p_,BasicShadowMap:Sv,BatchedMesh:q_,Bone:fp,BooleanKeyframeTrack:Ds,Box2:RT,Box3:vn,Box3Helper:kT,BoxGeometry:Ls,BoxHelper:BT,BufferAttribute:Ot,BufferGeometry:yt,BufferGeometryLoader:Cy,ByteType:n_,Cache:fr,Camera:Qa,CameraHelper:zT,CanvasTexture:mb,CapsuleGeometry:Lu,CatmullRomCurve3:K_,CineonToneMapping:Kv,CircleGeometry:Du,ClampToEdgeWrapping:vi,Clock:Rp,Color:Ve,ColorKeyframeTrack:Ep,ColorManagement:Ut,CompressedArrayTexture:db,CompressedCubeTexture:pb,CompressedTexture:Pu,CompressedTextureLoader:Jb,ConeGeometry:Uu,ConstantAlphaFactor:zv,ConstantColorFactor:Ov,CubeCamera:I_,CubeReflectionMapping:gr,CubeRefractionMapping:Br,CubeTexture:$a,CubeTextureLoader:Kb,CubeUVReflectionMapping:Uo,CubicBezierCurve:mp,CubicBezierCurve3:Q_,CubicInterpolant:gy,CullFaceBack:$f,CullFaceFront:xv,CullFaceFrontBack:eS,CullFaceNone:yv,Curve:Ri,CurvePath:ey,CustomBlending:Mv,CustomToneMapping:Qv,CylinderGeometry:Fo,Cylindrical:CT,Data3DTexture:ip,DataArrayTexture:Eu,DataTexture:pr,DataTextureLoader:Qb,DataUtils:cM,DecrementStencilOp:hS,DecrementWrapStencilOp:dS,DefaultLoadingManager:yy,DepthFormat:Ms,DepthStencilFormat:Rs,DepthTexture:ap,DetachedBindMode:t_,DirectionalLight:wy,DirectionalLightHelper:FT,DiscreteInterpolant:vy,DisplayP3ColorSpace:wu,DodecahedronGeometry:Nu,DoubleSide:Ti,DstAlphaFactor:Iv,DstColorFactor:Dv,DynamicCopyUsage:CS,DynamicDrawUsage:MS,DynamicReadUsage:AS,EdgesGeometry:ty,EllipseCurve:Iu,EqualCompare:y_,EqualDepth:Gv,EqualStencilFunc:vS,EquirectangularReflectionMapping:Ta,EquirectangularRefractionMapping:Ca,Euler:oi,EventDispatcher:yr,ExtrudeGeometry:Fu,FileLoader:vr,Float16BufferAttribute:mM,Float32BufferAttribute:qe,FloatType:ii,Fog:Tu,FogExp2:bu,FramebufferTexture:fb,FrontSide:mr,Frustum:el,GLBufferAttribute:TT,GLSL1:PS,GLSL3:Id,GreaterCompare:x_,GreaterDepth:Xv,GreaterEqualCompare:M_,GreaterEqualDepth:Wv,GreaterEqualStencilFunc:SS,GreaterStencilFunc:yS,GridHelper:NT,Group:Ao,HalfFloatType:Ja,HemisphereLight:xy,HemisphereLightHelper:UT,IcosahedronGeometry:zu,ImageBitmapLoader:sT,ImageLoader:qa,ImageUtils:T_,IncrementStencilOp:uS,IncrementWrapStencilOp:fS,InstancedBufferAttribute:Io,InstancedBufferGeometry:Tp,InstancedInterleavedBuffer:_u,InstancedMesh:Y_,Int16BufferAttribute:dM,Int32BufferAttribute:pM,Int8BufferAttribute:uM,IntType:Yd,InterleavedBuffer:Cu,InterleavedBufferAttribute:ri,Interpolant:rl,InterpolateDiscrete:La,InterpolateLinear:du,InterpolateSmooth:lu,InvertStencilOp:pS,KeepStencilOp:ps,KeyframeTrack:Pi,LOD:W_,LatheGeometry:tl,Layers:Es,LessCompare:__,LessDepth:Vv,LessEqualCompare:ep,LessEqualDepth:ba,LessEqualStencilFunc:_S,LessStencilFunc:gS,Light:Wr,LightProbe:Ty,Line:kr,Line3:Dy,LineBasicMaterial:Hn,LineCurve:gp,LineCurve3:$_,LineDashedMaterial:dy,LineLoop:Z_,LineSegments:Ji,LinearDisplayP3ColorSpace:Ka,LinearFilter:sn,LinearInterpolant:wp,LinearMipMapLinearFilter:rS,LinearMipMapNearestFilter:iS,LinearMipmapLinearFilter:Wi,LinearMipmapNearestFilter:Ma,LinearSRGBColorSpace:_r,LinearToneMapping:jv,LinearTransfer:Ua,Loader:Zn,LoaderUtils:zd,LoadingManager:Ap,LoopOnce:h_,LoopPingPong:d_,LoopRepeat:f_,LuminanceAlphaFormat:l_,LuminanceFormat:a_,MOUSE:fs,Material:In,MaterialLoader:Xu,MathUtils:E_,Matrix3:pt,Matrix4:st,MaxEquation:bv,Mesh:$t,MeshBasicMaterial:Vr,MeshDepthMaterial:lp,MeshDistanceMaterial:cp,MeshLambertMaterial:hy,MeshMatcapMaterial:fy,MeshNormalMaterial:uy,MeshPhongMaterial:ly,MeshPhysicalMaterial:ay,MeshStandardMaterial:Sp,MeshToonMaterial:cy,MinEquation:Av,MirroredRepeatWrapping:Pa,MixOperation:qv,MultiplyBlending:nd,MultiplyOperation:ja,NearestFilter:gn,NearestMipMapLinearFilter:nS,NearestMipMapNearestFilter:tS,NearestMipmapLinearFilter:Mo,NearestMipmapNearestFilter:Xd,NeutralToneMapping:e_,NeverCompare:v_,NeverDepth:kv,NeverStencilFunc:mS,NoBlending:dr,NoColorSpace:ur,NoToneMapping:Yi,NormalAnimationBlendMode:Mu,NormalBlending:Ss,NotEqualCompare:S_,NotEqualDepth:Yv,NotEqualStencilFunc:xS,NumberKeyframeTrack:Wa,Object3D:Dt,ObjectLoader:iT,ObjectSpaceNormalMap:g_,OctahedronGeometry:nl,OneFactor:Cv,OneMinusConstantAlphaFactor:Bv,OneMinusConstantColorFactor:Fv,OneMinusDstAlphaFactor:Lv,OneMinusDstColorFactor:Uv,OneMinusSrcAlphaFactor:fu,OneMinusSrcColorFactor:Pv,OrthographicCamera:qi,P3Primaries:Oa,PCFShadowMap:xu,PCFSoftShadowMap:Sa,PMREMGenerator:Ld,Path:ka,PerspectiveCamera:Xt,Plane:cr,PlaneGeometry:No,PlaneHelper:HT,PointLight:My,PointLightHelper:LT,Points:j_,PointsMaterial:dp,PolarGridHelper:OT,PolyhedronGeometry:Gr,PositionalAudio:hT,PropertyBinding:Rt,PropertyMixer:Py,QuadraticBezierCurve:vp,QuadraticBezierCurve3:_p,Quaternion:Pn,QuaternionKeyframeTrack:sl,QuaternionLinearInterpolant:_y,RED_GREEN_RGTC2_Format:Cd,RED_RGTC1_Format:u_,REVISION:Za,RGBADepthPacking:m_,RGBAFormat:Bn,RGBAIntegerFormat:Qd,RGBA_ASTC_10x10_Format:Md,RGBA_ASTC_10x5_Format:yd,RGBA_ASTC_10x6_Format:xd,RGBA_ASTC_10x8_Format:Sd,RGBA_ASTC_12x10_Format:wd,RGBA_ASTC_12x12_Format:Ed,RGBA_ASTC_4x4_Format:hd,RGBA_ASTC_5x4_Format:fd,RGBA_ASTC_5x5_Format:dd,RGBA_ASTC_6x5_Format:pd,RGBA_ASTC_6x6_Format:md,RGBA_ASTC_8x5_Format:gd,RGBA_ASTC_8x6_Format:vd,RGBA_ASTC_8x8_Format:_d,RGBA_BPTC_Format:au,RGBA_ETC2_EAC_Format:ud,RGBA_PVRTC_2BPPV1_Format:ad,RGBA_PVRTC_4BPPV1_Format:od,RGBA_S3TC_DXT1_Format:ru,RGBA_S3TC_DXT3_Format:su,RGBA_S3TC_DXT5_Format:ou,RGBFormat:o_,RGB_BPTC_SIGNED_Format:Ad,RGB_BPTC_UNSIGNED_Format:bd,RGB_ETC1_Format:ld,RGB_ETC2_Format:cd,RGB_PVRTC_2BPPV1_Format:sd,RGB_PVRTC_4BPPV1_Format:rd,RGB_S3TC_DXT1_Format:iu,RGFormat:c_,RGIntegerFormat:Kd,RawShaderMaterial:oy,Ray:Is,Raycaster:Ly,Rec709Primaries:Na,RectAreaLight:Ay,RedFormat:jd,RedIntegerFormat:Jd,ReinhardToneMapping:Jv,RenderTarget:C_,RepeatWrapping:Ra,ReplaceStencilOp:cS,ReverseSubtractEquation:Ev,RingGeometry:Bu,SIGNED_RED_GREEN_RGTC2_Format:Rd,SIGNED_RED_RGTC1_Format:Td,SRGBColorSpace:gi,SRGBTransfer:kt,Scene:up,ShaderChunk:gt,ShaderLib:bi,ShaderMaterial:_i,ShadowMaterial:sy,Shape:As,ShapeGeometry:ku,ShapePath:WT,ShapeUtils:Zi,ShortType:i_,Skeleton:Ru,SkeletonHelper:IT,SkinnedMesh:X_,Source:ys,Sphere:_n,SphereGeometry:il,Spherical:kd,SphericalHarmonics3:by,SplineCurve:yp,SpotLight:Sy,SpotLightHelper:PT,Sprite:G_,SpriteMaterial:hp,SrcAlphaFactor:hu,SrcAlphaSaturateFactor:Nv,SrcColorFactor:Rv,StaticCopyUsage:TS,StaticDrawUsage:Fa,StaticReadUsage:ES,StereoCamera:aT,StreamCopyUsage:RS,StreamDrawUsage:wS,StreamReadUsage:bS,StringKeyframeTrack:Us,SubtractEquation:wv,SubtractiveBlending:td,TOUCH:ds,TangentSpaceNormalMap:Hr,TetrahedronGeometry:Hu,Texture:Jt,TextureLoader:$b,TorusGeometry:Vu,TorusKnotGeometry:Gu,Triangle:ni,TriangleFanDrawMode:aS,TriangleStripDrawMode:oS,TrianglesDrawMode:sS,TubeGeometry:Wu,UVMapping:Su,Uint16BufferAttribute:rp,Uint32BufferAttribute:sp,Uint8BufferAttribute:hM,Uint8ClampedBufferAttribute:fM,Uniform:Lp,UniformsGroup:bT,UniformsLib:Fe,UniformsUtils:pu,UnsignedByteType:ji,UnsignedInt248Type:Cs,UnsignedInt5999Type:r_,UnsignedIntType:Ts,UnsignedShort4444Type:qd,UnsignedShort5551Type:Zd,UnsignedShortType:Ia,VSMShadowMap:Ei,Vector2:ue,Vector3:U,Vector4:At,VectorKeyframeTrack:Xa,VideoTexture:hb,WebGL3DRenderTarget:$S,WebGLArrayRenderTarget:QS,WebGLCoordinateSystem:Xi,WebGLCubeRenderTarget:L_,WebGLMultipleRenderTargets:XT,WebGLRenderTarget:Ci,WebGLRenderer:H_,WebGLUtils:B_,WebGPUCoordinateSystem:za,WireframeGeometry:xp,WrapAroundEnding:Da,ZeroCurvatureEnding:vs,ZeroFactor:Tv,ZeroSlopeEnding:_s,ZeroStencilOp:lS,createCanvasElement:b_},Symbol.toStringTag,{value:"Module"}));var Ny={exports:{}},Ns={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ns.ConcurrentRoot=1;Ns.ContinuousEventPriority=4;Ns.DefaultEventPriority=16;Ns.DiscreteEventPriority=1;Ns.IdleEventPriority=536870912;Ns.LegacyRoot=0;Ny.exports=Ns;var To=Ny.exports;function qT(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const y=f(e);if(!p(m,y)){const M=m;h(m=y,M)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const ZT=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),q0=ZT?Ae.useEffect:Ae.useLayoutEffect;function jT(r){const e=typeof r=="function"?qT(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=Ae.useReducer(x=>x+1,0),l=e.getState(),c=Ae.useRef(l),u=Ae.useRef(n),h=Ae.useRef(i),f=Ae.useRef(!1),p=Ae.useRef();p.current===void 0&&(p.current=n(l));let m,g=!1;(c.current!==l||u.current!==n||h.current!==i||f.current)&&(m=n(l),g=!i(p.current,m)),q0(()=>{g&&(p.current=m),c.current=l,u.current=n,h.current=i,f.current=!1});const y=Ae.useRef(l);q0(()=>{const x=()=>{try{const E=e.getState(),w=u.current(E);h.current(p.current,w)||(c.current=E,p.current=w,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const M=g?m:p.current;return Ae.useDebugValue(M),M};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}var Oy={exports:{}},kf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function JT(){return Z0||(Z0=1,function(r){function e(F,j){var Z=F.length;F.push(j);e:for(;0<Z;){var re=Z-1>>>1,Se=F[re];if(0<i(Se,j))F[re]=j,F[Z]=Se,Z=re;else break e}}function t(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var j=F[0],Z=F.pop();if(Z!==j){F[0]=Z;e:for(var re=0,Se=F.length,Ue=Se>>>1;re<Ue;){var ne=2*(re+1)-1,me=F[ne],Ce=ne+1,Me=F[Ce];if(0>i(me,Z))Ce<Se&&0>i(Me,me)?(F[re]=Me,F[Ce]=Z,re=Ce):(F[re]=me,F[ne]=Z,re=ne);else if(Ce<Se&&0>i(Me,Z))F[re]=Me,F[Ce]=Z,re=Ce;else break e}}return j}function i(F,j){var Z=F.sortIndex-j.sortIndex;return Z!==0?Z:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var j=t(h);j!==null;){if(j.callback===null)n(h);else if(j.startTime<=F)n(h),j.sortIndex=j.expirationTime,e(u,j);else break;j=t(h)}}function b(F){if(M=!1,w(F),!y)if(t(u)!==null)y=!0,K(N);else{var j=t(h);j!==null&&fe(b,j.startTime-F)}}function N(F,j){y=!1,M&&(M=!1,_(O),O=-1),g=!0;var Z=m;try{for(w(j),p=t(u);p!==null&&(!(p.expirationTime>j)||F&&!D());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var Se=re(p.expirationTime<=j);j=r.unstable_now(),typeof Se=="function"?p.callback=Se:p===t(u)&&n(u),w(j)}else n(u);p=t(u)}if(p!==null)var Ue=!0;else{var ne=t(h);ne!==null&&fe(b,ne.startTime-j),Ue=!1}return Ue}finally{p=null,m=Z,g=!1}}var R=!1,L=null,O=-1,C=5,T=-1;function D(){return!(r.unstable_now()-T<C)}function q(){if(L!==null){var F=r.unstable_now();T=F;var j=!0;try{j=L(!0,F)}finally{j?W():(R=!1,L=null)}}else R=!1}var W;if(typeof E=="function")W=function(){E(q)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,se=Q.port2;Q.port1.onmessage=q,W=function(){se.postMessage(null)}}else W=function(){x(q,0)};function K(F){L=F,R||(R=!0,W())}function fe(F,j){O=x(function(){F(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,K(N))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(F){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var Z=m;m=j;try{return F()}finally{m=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=m;m=F;try{return j()}finally{m=Z}},r.unstable_scheduleCallback=function(F,j,Z){var re=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,F={id:f++,callback:j,priorityLevel:F,startTime:Z,expirationTime:Se,sortIndex:-1},Z>re?(F.sortIndex=Z,e(h,F),t(u)===null&&F===t(h)&&(M?(_(O),O=-1):M=!0,fe(b,Z-re))):(F.sortIndex=Se,e(u,F),y||g||(y=!0,K(N))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var j=m;return function(){var Z=m;m=j;try{return F.apply(this,arguments)}finally{m=Z}}}}(Hf)),Hf}var j0;function KT(){return j0||(j0=1,kf.exports=JT()),kf.exports}/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=function(e){var t={},n=Ae,i=KT(),s=Object.assign;function l(o){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),N=Symbol.iterator;function R(o){return o===null||typeof o!="object"?null:(o=N&&o[N]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case y:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case M:var a=o.render;return o=o.displayName,o||(o=a.displayName||a.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return a=o.displayName||null,a!==null?a:L(o.type)||"Memo";case w:a=o._payload,o=o._init;try{return L(o(a))}catch{}}return null}function O(o){var a=o.type;switch(o.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=a.render,o=o.displayName||o.name||"",a.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(a);case 8:return a===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function C(o){var a=o,d=o;if(o.alternate)for(;a.return;)a=a.return;else{o=a;do a=o,a.flags&4098&&(d=a.return),o=a.return;while(o)}return a.tag===3?d:null}function T(o){if(C(o)!==o)throw Error(l(188))}function D(o){var a=o.alternate;if(!a){if(a=C(o),a===null)throw Error(l(188));return a!==o?null:o}for(var d=o,v=a;;){var S=d.return;if(S===null)break;var A=S.alternate;if(A===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===A.child){for(A=S.child;A;){if(A===d)return T(S),o;if(A===v)return T(S),a;A=A.sibling}throw Error(l(188))}if(d.return!==v.return)d=S,v=A;else{for(var z=!1,G=S.child;G;){if(G===d){z=!0,d=S,v=A;break}if(G===v){z=!0,v=S,d=A;break}G=G.sibling}if(!z){for(G=A.child;G;){if(G===d){z=!0,d=A,v=S;break}if(G===v){z=!0,v=A,d=S;break}G=G.sibling}if(!z)throw Error(l(189))}}if(d.alternate!==v)throw Error(l(190))}if(d.tag!==3)throw Error(l(188));return d.stateNode.current===d?o:a}function q(o){return o=D(o),o!==null?W(o):null}function W(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var a=W(o);if(a!==null)return a;o=o.sibling}return null}function Q(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var a=Q(o);if(a!==null)return a}o=o.sibling}return null}var se=Array.isArray,K=e.getPublicInstance,fe=e.getRootHostContext,F=e.getChildHostContext,j=e.prepareForCommit,Z=e.resetAfterCommit,re=e.createInstance,Se=e.appendInitialChild,Ue=e.finalizeInitialChildren,ne=e.prepareUpdate,me=e.shouldSetTextContent,Ce=e.createTextInstance,Me=e.scheduleTimeout,$e=e.cancelTimeout,ot=e.noTimeout,We=e.isPrimaryRenderer,H=e.supportsMutation,he=e.supportsPersistence,ce=e.supportsHydration,we=e.getInstanceFromNode,_e=e.preparePortalMount,Ee=e.getCurrentEventPriority,Le=e.detachDeletedInstance,Oe=e.supportsMicrotasks,et=e.scheduleMicrotask,B=e.supportsTestSelectors,P=e.findFiberRoot,te=e.getBoundingRect,ge=e.getTextContent,de=e.isHiddenSubtree,ye=e.matchAccessibilityRole,Ze=e.setFocusIfFocusable,Re=e.setupIntersectionObserver,De=e.appendChild,ct=e.appendChildToContainer,Te=e.commitTextUpdate,Xe=e.commitMount,vt=e.commitUpdate,at=e.insertBefore,ze=e.insertInContainerBefore,ut=e.removeChild,V=e.removeChildFromContainer,ve=e.resetTextContent,k=e.hideInstance,xe=e.hideTextInstance,oe=e.unhideInstance,pe=e.unhideTextInstance,be=e.clearContainer,lt=e.cloneInstance,Mt=e.createContainerChildSet,bt=e.appendChildToContainerChildSet,Nt=e.finalizeContainerChildren,wt=e.replaceContainerChildren,on=e.cloneHiddenInstance,an=e.cloneHiddenTextInstance,Vn=e.canHydrateInstance,zo=e.canHydrateTextInstance,ll=e.canHydrateSuspenseInstance,Bo=e.isSuspenseInstancePending,xr=e.isSuspenseInstanceFallback,cl=e.registerSuspenseInstanceRetry,Ii=e.getNextHydratableSibling,ul=e.getFirstHydratableChild,hl=e.getFirstHydratableChildWithinContainer,Yu=e.getFirstHydratableChildWithinSuspenseInstance,qu=e.hydrateInstance,Zu=e.hydrateTextInstance,I=e.hydrateSuspenseInstance,X=e.getNextHydratableInstanceAfterSuspenseInstance,ee=e.commitHydratedContainer,ie=e.commitHydratedSuspenseInstance,J=e.clearSuspenseBoundary,Ie=e.clearSuspenseBoundaryFromContainer,He=e.shouldDeleteUnhydratedTailInstances,Ye=e.didNotMatchHydratedContainerTextInstance,je=e.didNotMatchHydratedTextInstance,rt;function tt(o){if(rt===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);rt=a&&a[1]||""}return`
`+rt+o}var Qe=!1;function Tt(o,a){if(!o||Qe)return"";Qe=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(Pe){var v=Pe}Reflect.construct(o,[],a)}else{try{a.call()}catch(Pe){v=Pe}o.call(a.prototype)}else{try{throw Error()}catch(Pe){v=Pe}o()}}catch(Pe){if(Pe&&v&&typeof Pe.stack=="string"){for(var S=Pe.stack.split(`
`),A=v.stack.split(`
`),z=S.length-1,G=A.length-1;1<=z&&0<=G&&S[z]!==A[G];)G--;for(;1<=z&&0<=G;z--,G--)if(S[z]!==A[G]){if(z!==1||G!==1)do if(z--,G--,0>G||S[z]!==A[G]){var le=`
`+S[z].replace(" at new "," at ");return o.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",o.displayName)),le}while(1<=z&&0<=G);break}}}finally{Qe=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?tt(o):""}var Vt=Object.prototype.hasOwnProperty,zt=[],en=-1;function St(o){return{current:o}}function Ne(o){0>en||(o.current=zt[en],zt[en]=null,en--)}function dt(o,a){en++,zt[en]=o.current,o.current=a}var Et={},Bt=St(Et),ln=St(!1),Ln=Et;function Li(o,a){var d=o.type.contextTypes;if(!d)return Et;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===a)return v.__reactInternalMemoizedMaskedChildContext;var S={},A;for(A in d)S[A]=a[A];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=a,o.__reactInternalMemoizedMaskedChildContext=S),S}function Ct(o){return o=o.childContextTypes,o!=null}function jn(){Ne(ln),Ne(Bt)}function Os(o,a,d){if(Bt.current!==Et)throw Error(l(168));dt(Bt,a),dt(ln,d)}function Dn(o,a,d){var v=o.stateNode;if(a=a.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in a))throw Error(l(108,O(o)||"Unknown",S));return s({},d,v)}function Sr(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Et,Ln=Bt.current,dt(Bt,o),dt(ln,ln.current),!0}function fl(o,a,d){var v=o.stateNode;if(!v)throw Error(l(169));d?(o=Dn(o,a,Ln),v.__reactInternalMemoizedMergedChildContext=o,Ne(ln),Ne(Bt),dt(Bt,o)):Ne(ln),dt(ln,d)}var Gn=Math.clz32?Math.clz32:cx,ax=Math.log,lx=Math.LN2;function cx(o){return o>>>=0,o===0?32:31-(ax(o)/lx|0)|0}var dl=64,pl=4194304;function ko(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function ml(o,a){var d=o.pendingLanes;if(d===0)return 0;var v=0,S=o.suspendedLanes,A=o.pingedLanes,z=d&268435455;if(z!==0){var G=z&~S;G!==0?v=ko(G):(A&=z,A!==0&&(v=ko(A)))}else z=d&~S,z!==0?v=ko(z):A!==0&&(v=ko(A));if(v===0)return 0;if(a!==0&&a!==v&&!(a&S)&&(S=v&-v,A=a&-a,S>=A||S===16&&(A&4194240)!==0))return a;if(v&4&&(v|=d&16),a=o.entangledLanes,a!==0)for(o=o.entanglements,a&=v;0<a;)d=31-Gn(a),S=1<<d,v|=o[d],a&=~S;return v}function ux(o,a){switch(o){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hx(o,a){for(var d=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,A=o.pendingLanes;0<A;){var z=31-Gn(A),G=1<<z,le=S[z];le===-1?(!(G&d)||G&v)&&(S[z]=ux(G,a)):le<=a&&(o.expiredLanes|=G),A&=~G}}function ju(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Ju(o){for(var a=[],d=0;31>d;d++)a.push(o);return a}function Ho(o,a,d){o.pendingLanes|=a,a!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,a=31-Gn(a),o[a]=d}function fx(o,a){var d=o.pendingLanes&~a;o.pendingLanes=a,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=a,o.mutableReadLanes&=a,o.entangledLanes&=a,a=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-Gn(d),A=1<<S;a[S]=0,v[S]=-1,o[S]=-1,d&=~A}}function Ku(o,a){var d=o.entangledLanes|=a;for(o=o.entanglements;d;){var v=31-Gn(d),S=1<<v;S&a|o[v]&a&&(o[v]|=a),d&=~S}}var Pt=0;function zp(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Qu=i.unstable_scheduleCallback,Bp=i.unstable_cancelCallback,dx=i.unstable_shouldYield,px=i.unstable_requestPaint,fn=i.unstable_now,$u=i.unstable_ImmediatePriority,mx=i.unstable_UserBlockingPriority,eh=i.unstable_NormalPriority,gx=i.unstable_IdlePriority,gl=null,Di=null;function vx(o){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(gl,o,void 0,(o.current.flags&128)===128)}catch{}}function _x(o,a){return o===a&&(o!==0||1/o===1/a)||o!==o&&a!==a}var Ui=typeof Object.is=="function"?Object.is:_x,Ki=null,vl=!1,th=!1;function kp(o){Ki===null?Ki=[o]:Ki.push(o)}function yx(o){vl=!0,kp(o)}function Ni(){if(!th&&Ki!==null){th=!0;var o=0,a=Pt;try{var d=Ki;for(Pt=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}Ki=null,vl=!1}catch(S){throw Ki!==null&&(Ki=Ki.slice(o+1)),Qu($u,Ni),S}finally{Pt=a,th=!1}}return null}var xx=c.ReactCurrentBatchConfig;function _l(o,a){if(Ui(o,a))return!0;if(typeof o!="object"||o===null||typeof a!="object"||a===null)return!1;var d=Object.keys(o),v=Object.keys(a);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!Vt.call(a,S)||!Ui(o[S],a[S]))return!1}return!0}function Sx(o){switch(o.tag){case 5:return tt(o.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 2:case 15:return o=Tt(o.type,!1),o;case 11:return o=Tt(o.type.render,!1),o;case 1:return o=Tt(o.type,!0),o;default:return""}}function yi(o,a){if(o&&o.defaultProps){a=s({},a),o=o.defaultProps;for(var d in o)a[d]===void 0&&(a[d]=o[d]);return a}return a}var yl=St(null),xl=null,Fs=null,nh=null;function ih(){nh=Fs=xl=null}function Hp(o,a,d){We?(dt(yl,a._currentValue),a._currentValue=d):(dt(yl,a._currentValue2),a._currentValue2=d)}function rh(o){var a=yl.current;Ne(yl),We?o._currentValue=a:o._currentValue2=a}function sh(o,a,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&a)!==a?(o.childLanes|=a,v!==null&&(v.childLanes|=a)):v!==null&&(v.childLanes&a)!==a&&(v.childLanes|=a),o===d)break;o=o.return}}function zs(o,a){xl=o,nh=Fs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&a&&(Qn=!0),o.firstContext=null)}function ai(o){var a=We?o._currentValue:o._currentValue2;if(nh!==o)if(o={context:o,memoizedValue:a,next:null},Fs===null){if(xl===null)throw Error(l(308));Fs=o,xl.dependencies={lanes:0,firstContext:o}}else Fs=Fs.next=o;return a}var Oi=null,Mr=!1;function oh(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(o,a){o=o.updateQueue,a.updateQueue===o&&(a.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function Qi(o,a){return{eventTime:o,lane:a,tag:0,payload:null,callback:null,next:null}}function wr(o,a){var d=o.updateQueue;d!==null&&(d=d.shared,tn!==null&&o.mode&1&&!(xt&2)?(o=d.interleaved,o===null?(a.next=a,Oi===null?Oi=[d]:Oi.push(d)):(a.next=o.next,o.next=a),d.interleaved=a):(o=d.pending,o===null?a.next=a:(a.next=o.next,o.next=a),d.pending=a))}function Sl(o,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var v=a.lanes;v&=o.pendingLanes,d|=v,a.lanes=d,Ku(o,d)}}function Gp(o,a){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,A=null;if(d=d.firstBaseUpdate,d!==null){do{var z={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};A===null?S=A=z:A=A.next=z,d=d.next}while(d!==null);A===null?S=A=a:A=A.next=a}else S=A=a;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:A,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=a:o.next=a,d.lastBaseUpdate=a}function Ml(o,a,d,v){var S=o.updateQueue;Mr=!1;var A=S.firstBaseUpdate,z=S.lastBaseUpdate,G=S.shared.pending;if(G!==null){S.shared.pending=null;var le=G,Pe=le.next;le.next=null,z===null?A=Pe:z.next=Pe,z=le;var Ge=o.alternate;Ge!==null&&(Ge=Ge.updateQueue,G=Ge.lastBaseUpdate,G!==z&&(G===null?Ge.firstBaseUpdate=Pe:G.next=Pe,Ge.lastBaseUpdate=le))}if(A!==null){var ht=S.baseState;z=0,Ge=Pe=le=null,G=A;do{var nt=G.lane,Ft=G.eventTime;if((v&nt)===nt){Ge!==null&&(Ge=Ge.next={eventTime:Ft,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var Ke=o,bn=G;switch(nt=a,Ft=d,bn.tag){case 1:if(Ke=bn.payload,typeof Ke=="function"){ht=Ke.call(Ft,ht,nt);break e}ht=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=bn.payload,nt=typeof Ke=="function"?Ke.call(Ft,ht,nt):Ke,nt==null)break e;ht=s({},ht,nt);break e;case 2:Mr=!0}}G.callback!==null&&G.lane!==0&&(o.flags|=64,nt=S.effects,nt===null?S.effects=[G]:nt.push(G))}else Ft={eventTime:Ft,lane:nt,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Ge===null?(Pe=Ge=Ft,le=ht):Ge=Ge.next=Ft,z|=nt;if(G=G.next,G===null){if(G=S.shared.pending,G===null)break;nt=G,G=nt.next,nt.next=null,S.lastBaseUpdate=nt,S.shared.pending=null}}while(!0);if(Ge===null&&(le=ht),S.baseState=le,S.firstBaseUpdate=Pe,S.lastBaseUpdate=Ge,a=S.shared.interleaved,a!==null){S=a;do z|=S.lane,S=S.next;while(S!==a)}else A===null&&(S.shared.lanes=0);qs|=z,o.lanes=z,o.memoizedState=ht}}function Wp(o,a,d){if(o=a.effects,a.effects=null,o!==null)for(a=0;a<o.length;a++){var v=o[a],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(l(191,S));S.call(v)}}}var Xp=new n.Component().refs;function ah(o,a,d,v){a=o.memoizedState,d=d(v,a),d=d==null?a:s({},a,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var wl={isMounted:function(o){return(o=o._reactInternals)?C(o)===o:!1},enqueueSetState:function(o,a,d){o=o._reactInternals;var v=Nn(),S=br(o),A=Qi(v,S);A.payload=a,d!=null&&(A.callback=d),wr(o,A),a=fi(o,S,v),a!==null&&Sl(a,o,S)},enqueueReplaceState:function(o,a,d){o=o._reactInternals;var v=Nn(),S=br(o),A=Qi(v,S);A.tag=1,A.payload=a,d!=null&&(A.callback=d),wr(o,A),a=fi(o,S,v),a!==null&&Sl(a,o,S)},enqueueForceUpdate:function(o,a){o=o._reactInternals;var d=Nn(),v=br(o),S=Qi(d,v);S.tag=2,a!=null&&(S.callback=a),wr(o,S),a=fi(o,v,d),a!==null&&Sl(a,o,v)}};function Yp(o,a,d,v,S,A,z){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,A,z):a.prototype&&a.prototype.isPureReactComponent?!_l(d,v)||!_l(S,A):!0}function qp(o,a,d){var v=!1,S=Et,A=a.contextType;return typeof A=="object"&&A!==null?A=ai(A):(S=Ct(a)?Ln:Bt.current,v=a.contextTypes,A=(v=v!=null)?Li(o,S):Et),a=new a(d,A),o.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=wl,o.stateNode=a,a._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=A),a}function Zp(o,a,d,v){o=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,v),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,v),a.state!==o&&wl.enqueueReplaceState(a,a.state,null)}function lh(o,a,d,v){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=Xp,oh(o);var A=a.contextType;typeof A=="object"&&A!==null?S.context=ai(A):(A=Ct(a)?Ln:Bt.current,S.context=Li(o,A)),S.state=o.memoizedState,A=a.getDerivedStateFromProps,typeof A=="function"&&(ah(o,a,A,d),S.state=o.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(a=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),a!==S.state&&wl.enqueueReplaceState(S,S.state,null),Ml(o,d,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var Bs=[],ks=0,El=null,Al=0,li=[],ci=0,Xr=null,$i=1,er="";function Yr(o,a){Bs[ks++]=Al,Bs[ks++]=El,El=o,Al=a}function jp(o,a,d){li[ci++]=$i,li[ci++]=er,li[ci++]=Xr,Xr=o;var v=$i;o=er;var S=32-Gn(v)-1;v&=~(1<<S),d+=1;var A=32-Gn(a)+S;if(30<A){var z=S-S%5;A=(v&(1<<z)-1).toString(32),v>>=z,S-=z,$i=1<<32-Gn(a)+S|d<<S|v,er=A+o}else $i=1<<A|d<<S|v,er=o}function ch(o){o.return!==null&&(Yr(o,1),jp(o,1,0))}function uh(o){for(;o===El;)El=Bs[--ks],Bs[ks]=null,Al=Bs[--ks],Bs[ks]=null;for(;o===Xr;)Xr=li[--ci],li[ci]=null,er=li[--ci],li[ci]=null,$i=li[--ci],li[ci]=null}var Jn=null,Kn=null,Gt=!1,Vo=!1,xi=null;function Jp(o,a){var d=di(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=o,a=o.deletions,a===null?(o.deletions=[d],o.flags|=16):a.push(d)}function Kp(o,a){switch(o.tag){case 5:return a=Vn(a,o.type,o.pendingProps),a!==null?(o.stateNode=a,Jn=o,Kn=ul(a),!0):!1;case 6:return a=zo(a,o.pendingProps),a!==null?(o.stateNode=a,Jn=o,Kn=null,!0):!1;case 13:if(a=ll(a),a!==null){var d=Xr!==null?{id:$i,overflow:er}:null;return o.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=di(18,null,null,0),d.stateNode=a,d.return=o,o.child=d,Jn=o,Kn=null,!0}return!1;default:return!1}}function hh(o){return(o.mode&1)!==0&&(o.flags&128)===0}function fh(o){if(Gt){var a=Kn;if(a){var d=a;if(!Kp(o,a)){if(hh(o))throw Error(l(418));a=Ii(d);var v=Jn;a&&Kp(o,a)?Jp(v,d):(o.flags=o.flags&-4097|2,Gt=!1,Jn=o)}}else{if(hh(o))throw Error(l(418));o.flags=o.flags&-4097|2,Gt=!1,Jn=o}}}function Qp(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;Jn=o}function Go(o){if(!ce||o!==Jn)return!1;if(!Gt)return Qp(o),Gt=!0,!1;if(o.tag!==3&&(o.tag!==5||He(o.type)&&!me(o.type,o.memoizedProps))){var a=Kn;if(a){if(hh(o)){for(o=Kn;o;)o=Ii(o);throw Error(l(418))}for(;a;)Jp(o,a),a=Ii(a)}}if(Qp(o),o.tag===13){if(!ce)throw Error(l(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));Kn=X(o)}else Kn=Jn?Ii(o.stateNode):null;return!0}function Hs(){ce&&(Kn=Jn=null,Vo=Gt=!1)}function dh(o){xi===null?xi=[o]:xi.push(o)}function Wo(o,a,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(l(309));var v=d.stateNode}if(!v)throw Error(l(147,o));var S=v,A=""+o;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===A?a.ref:(a=function(z){var G=S.refs;G===Xp&&(G=S.refs={}),z===null?delete G[A]:G[A]=z},a._stringRef=A,a)}if(typeof o!="string")throw Error(l(284));if(!d._owner)throw Error(l(290,o))}return o}function bl(o,a){throw o=Object.prototype.toString.call(a),Error(l(31,o==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":o))}function $p(o){var a=o._init;return a(o._payload)}function em(o){function a($,Y){if(o){var ae=$.deletions;ae===null?($.deletions=[Y],$.flags|=16):ae.push(Y)}}function d($,Y){if(!o)return null;for(;Y!==null;)a($,Y),Y=Y.sibling;return null}function v($,Y){for($=new Map;Y!==null;)Y.key!==null?$.set(Y.key,Y):$.set(Y.index,Y),Y=Y.sibling;return $}function S($,Y){return $=Cr($,Y),$.index=0,$.sibling=null,$}function A($,Y,ae){return $.index=ae,o?(ae=$.alternate,ae!==null?(ae=ae.index,ae<Y?($.flags|=2,Y):ae):($.flags|=2,Y)):($.flags|=1048576,Y)}function z($){return o&&$.alternate===null&&($.flags|=2),$}function G($,Y,ae,ke){return Y===null||Y.tag!==6?(Y=Jh(ae,$.mode,ke),Y.return=$,Y):(Y=S(Y,ae),Y.return=$,Y)}function le($,Y,ae,ke){var Je=ae.type;return Je===f?Ge($,Y,ae.props.children,ke,ae.key):Y!==null&&(Y.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===w&&$p(Je)===Y.type)?(ke=S(Y,ae.props),ke.ref=Wo($,Y,ae),ke.return=$,ke):(ke=ic(ae.type,ae.key,ae.props,null,$.mode,ke),ke.ref=Wo($,Y,ae),ke.return=$,ke)}function Pe($,Y,ae,ke){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ae.containerInfo||Y.stateNode.implementation!==ae.implementation?(Y=Kh(ae,$.mode,ke),Y.return=$,Y):(Y=S(Y,ae.children||[]),Y.return=$,Y)}function Ge($,Y,ae,ke,Je){return Y===null||Y.tag!==7?(Y=$r(ae,$.mode,ke,Je),Y.return=$,Y):(Y=S(Y,ae),Y.return=$,Y)}function ht($,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Jh(""+Y,$.mode,ae),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case u:return ae=ic(Y.type,Y.key,Y.props,null,$.mode,ae),ae.ref=Wo($,null,Y),ae.return=$,ae;case h:return Y=Kh(Y,$.mode,ae),Y.return=$,Y;case w:var ke=Y._init;return ht($,ke(Y._payload),ae)}if(se(Y)||R(Y))return Y=$r(Y,$.mode,ae,null),Y.return=$,Y;bl($,Y)}return null}function nt($,Y,ae,ke){var Je=Y!==null?Y.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Je!==null?null:G($,Y,""+ae,ke);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case u:return ae.key===Je?le($,Y,ae,ke):null;case h:return ae.key===Je?Pe($,Y,ae,ke):null;case w:return Je=ae._init,nt($,Y,Je(ae._payload),ke)}if(se(ae)||R(ae))return Je!==null?null:Ge($,Y,ae,ke,null);bl($,ae)}return null}function Ft($,Y,ae,ke,Je){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return $=$.get(ae)||null,G(Y,$,""+ke,Je);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case u:return $=$.get(ke.key===null?ae:ke.key)||null,le(Y,$,ke,Je);case h:return $=$.get(ke.key===null?ae:ke.key)||null,Pe(Y,$,ke,Je);case w:var _t=ke._init;return Ft($,Y,ae,_t(ke._payload),Je)}if(se(ke)||R(ke))return $=$.get(ae)||null,Ge(Y,$,ke,Je,null);bl(Y,ke)}return null}function Ke($,Y,ae,ke){for(var Je=null,_t=null,ft=Y,It=Y=0,pn=null;ft!==null&&It<ae.length;It++){ft.index>It?(pn=ft,ft=null):pn=ft.sibling;var Lt=nt($,ft,ae[It],ke);if(Lt===null){ft===null&&(ft=pn);break}o&&ft&&Lt.alternate===null&&a($,ft),Y=A(Lt,Y,It),_t===null?Je=Lt:_t.sibling=Lt,_t=Lt,ft=pn}if(It===ae.length)return d($,ft),Gt&&Yr($,It),Je;if(ft===null){for(;It<ae.length;It++)ft=ht($,ae[It],ke),ft!==null&&(Y=A(ft,Y,It),_t===null?Je=ft:_t.sibling=ft,_t=ft);return Gt&&Yr($,It),Je}for(ft=v($,ft);It<ae.length;It++)pn=Ft(ft,$,It,ae[It],ke),pn!==null&&(o&&pn.alternate!==null&&ft.delete(pn.key===null?It:pn.key),Y=A(pn,Y,It),_t===null?Je=pn:_t.sibling=pn,_t=pn);return o&&ft.forEach(function(Rr){return a($,Rr)}),Gt&&Yr($,It),Je}function bn($,Y,ae,ke){var Je=R(ae);if(typeof Je!="function")throw Error(l(150));if(ae=Je.call(ae),ae==null)throw Error(l(151));for(var _t=Je=null,ft=Y,It=Y=0,pn=null,Lt=ae.next();ft!==null&&!Lt.done;It++,Lt=ae.next()){ft.index>It?(pn=ft,ft=null):pn=ft.sibling;var Rr=nt($,ft,Lt.value,ke);if(Rr===null){ft===null&&(ft=pn);break}o&&ft&&Rr.alternate===null&&a($,ft),Y=A(Rr,Y,It),_t===null?Je=Rr:_t.sibling=Rr,_t=Rr,ft=pn}if(Lt.done)return d($,ft),Gt&&Yr($,It),Je;if(ft===null){for(;!Lt.done;It++,Lt=ae.next())Lt=ht($,Lt.value,ke),Lt!==null&&(Y=A(Lt,Y,It),_t===null?Je=Lt:_t.sibling=Lt,_t=Lt);return Gt&&Yr($,It),Je}for(ft=v($,ft);!Lt.done;It++,Lt=ae.next())Lt=Ft(ft,$,It,Lt.value,ke),Lt!==null&&(o&&Lt.alternate!==null&&ft.delete(Lt.key===null?It:Lt.key),Y=A(Lt,Y,It),_t===null?Je=Lt:_t.sibling=Lt,_t=Lt);return o&&ft.forEach(function(Kx){return a($,Kx)}),Gt&&Yr($,It),Je}function pi($,Y,ae,ke){if(typeof ae=="object"&&ae!==null&&ae.type===f&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case u:e:{for(var Je=ae.key,_t=Y;_t!==null;){if(_t.key===Je){if(Je=ae.type,Je===f){if(_t.tag===7){d($,_t.sibling),Y=S(_t,ae.props.children),Y.return=$,$=Y;break e}}else if(_t.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===w&&$p(Je)===_t.type){d($,_t.sibling),Y=S(_t,ae.props),Y.ref=Wo($,_t,ae),Y.return=$,$=Y;break e}d($,_t);break}else a($,_t);_t=_t.sibling}ae.type===f?(Y=$r(ae.props.children,$.mode,ke,ae.key),Y.return=$,$=Y):(ke=ic(ae.type,ae.key,ae.props,null,$.mode,ke),ke.ref=Wo($,Y,ae),ke.return=$,$=ke)}return z($);case h:e:{for(_t=ae.key;Y!==null;){if(Y.key===_t)if(Y.tag===4&&Y.stateNode.containerInfo===ae.containerInfo&&Y.stateNode.implementation===ae.implementation){d($,Y.sibling),Y=S(Y,ae.children||[]),Y.return=$,$=Y;break e}else{d($,Y);break}else a($,Y);Y=Y.sibling}Y=Kh(ae,$.mode,ke),Y.return=$,$=Y}return z($);case w:return _t=ae._init,pi($,Y,_t(ae._payload),ke)}if(se(ae))return Ke($,Y,ae,ke);if(R(ae))return bn($,Y,ae,ke);bl($,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,Y!==null&&Y.tag===6?(d($,Y.sibling),Y=S(Y,ae),Y.return=$,$=Y):(d($,Y),Y=Jh(ae,$.mode,ke),Y.return=$,$=Y),z($)):d($,Y)}return pi}var Vs=em(!0),tm=em(!1),Xo={},ui=St(Xo),Yo=St(Xo),Gs=St(Xo);function Fi(o){if(o===Xo)throw Error(l(174));return o}function ph(o,a){dt(Gs,a),dt(Yo,o),dt(ui,Xo),o=fe(a),Ne(ui),dt(ui,o)}function Ws(){Ne(ui),Ne(Yo),Ne(Gs)}function nm(o){var a=Fi(Gs.current),d=Fi(ui.current);a=F(d,o.type,a),d!==a&&(dt(Yo,o),dt(ui,a))}function mh(o){Yo.current===o&&(Ne(ui),Ne(Yo))}var Wt=St(0);function Tl(o){for(var a=o;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Bo(d)||xr(d)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var gh=[];function vh(){for(var o=0;o<gh.length;o++){var a=gh[o];We?a._workInProgressVersionPrimary=null:a._workInProgressVersionSecondary=null}gh.length=0}var Cl=c.ReactCurrentDispatcher,hi=c.ReactCurrentBatchConfig,Xs=0,qt=null,wn=null,dn=null,Rl=!1,qo=!1,Zo=0,Mx=0;function En(){throw Error(l(321))}function _h(o,a){if(a===null)return!1;for(var d=0;d<a.length&&d<o.length;d++)if(!Ui(o[d],a[d]))return!1;return!0}function yh(o,a,d,v,S,A){if(Xs=A,qt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Cl.current=o===null||o.memoizedState===null?bx:Tx,o=d(v,S),qo){A=0;do{if(qo=!1,Zo=0,25<=A)throw Error(l(301));A+=1,dn=wn=null,a.updateQueue=null,Cl.current=Cx,o=d(v,S)}while(qo)}if(Cl.current=Ul,a=wn!==null&&wn.next!==null,Xs=0,dn=wn=qt=null,Rl=!1,a)throw Error(l(300));return o}function xh(){var o=Zo!==0;return Zo=0,o}function tr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?qt.memoizedState=dn=o:dn=dn.next=o,dn}function zi(){if(wn===null){var o=qt.alternate;o=o!==null?o.memoizedState:null}else o=wn.next;var a=dn===null?qt.memoizedState:dn.next;if(a!==null)dn=a,wn=o;else{if(o===null)throw Error(l(310));wn=o,o={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},dn===null?qt.memoizedState=dn=o:dn=dn.next=o}return dn}function qr(o,a){return typeof a=="function"?a(o):a}function Pl(o){var a=zi(),d=a.queue;if(d===null)throw Error(l(311));d.lastRenderedReducer=o;var v=wn,S=v.baseQueue,A=d.pending;if(A!==null){if(S!==null){var z=S.next;S.next=A.next,A.next=z}v.baseQueue=S=A,d.pending=null}if(S!==null){A=S.next,v=v.baseState;var G=z=null,le=null,Pe=A;do{var Ge=Pe.lane;if((Xs&Ge)===Ge)le!==null&&(le=le.next={lane:0,action:Pe.action,hasEagerState:Pe.hasEagerState,eagerState:Pe.eagerState,next:null}),v=Pe.hasEagerState?Pe.eagerState:o(v,Pe.action);else{var ht={lane:Ge,action:Pe.action,hasEagerState:Pe.hasEagerState,eagerState:Pe.eagerState,next:null};le===null?(G=le=ht,z=v):le=le.next=ht,qt.lanes|=Ge,qs|=Ge}Pe=Pe.next}while(Pe!==null&&Pe!==A);le===null?z=v:le.next=G,Ui(v,a.memoizedState)||(Qn=!0),a.memoizedState=v,a.baseState=z,a.baseQueue=le,d.lastRenderedState=v}if(o=d.interleaved,o!==null){S=o;do A=S.lane,qt.lanes|=A,qs|=A,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function Il(o){var a=zi(),d=a.queue;if(d===null)throw Error(l(311));d.lastRenderedReducer=o;var v=d.dispatch,S=d.pending,A=a.memoizedState;if(S!==null){d.pending=null;var z=S=S.next;do A=o(A,z.action),z=z.next;while(z!==S);Ui(A,a.memoizedState)||(Qn=!0),a.memoizedState=A,a.baseQueue===null&&(a.baseState=A),d.lastRenderedState=A}return[A,v]}function im(){}function rm(o,a){var d=qt,v=zi(),S=a(),A=!Ui(v.memoizedState,S);if(A&&(v.memoizedState=S,Qn=!0),v=v.queue,Jo(am.bind(null,d,v,o),[o]),v.getSnapshot!==a||A||dn!==null&&dn.memoizedState.tag&1){if(d.flags|=2048,jo(9,om.bind(null,d,v,S,a),void 0,null),tn===null)throw Error(l(349));Xs&30||sm(d,a,S)}return S}function sm(o,a,d){o.flags|=16384,o={getSnapshot:a,value:d},a=qt.updateQueue,a===null?(a={lastEffect:null,stores:null},qt.updateQueue=a,a.stores=[o]):(d=a.stores,d===null?a.stores=[o]:d.push(o))}function om(o,a,d,v){a.value=d,a.getSnapshot=v,lm(a)&&fi(o,1,-1)}function am(o,a,d){return d(function(){lm(a)&&fi(o,1,-1)})}function lm(o){var a=o.getSnapshot;o=o.value;try{var d=a();return!Ui(o,d)}catch{return!0}}function Sh(o){var a=tr();return typeof o=="function"&&(o=o()),a.memoizedState=a.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:o},a.queue=o,o=o.dispatch=Ax.bind(null,qt,o),[a.memoizedState,o]}function jo(o,a,d,v){return o={tag:o,create:a,destroy:d,deps:v,next:null},a=qt.updateQueue,a===null?(a={lastEffect:null,stores:null},qt.updateQueue=a,a.lastEffect=o.next=o):(d=a.lastEffect,d===null?a.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,a.lastEffect=o)),o}function cm(){return zi().memoizedState}function Ll(o,a,d,v){var S=tr();qt.flags|=o,S.memoizedState=jo(1|a,d,void 0,v===void 0?null:v)}function Dl(o,a,d,v){var S=zi();v=v===void 0?null:v;var A=void 0;if(wn!==null){var z=wn.memoizedState;if(A=z.destroy,v!==null&&_h(v,z.deps)){S.memoizedState=jo(a,d,A,v);return}}qt.flags|=o,S.memoizedState=jo(1|a,d,A,v)}function Mh(o,a){return Ll(8390656,8,o,a)}function Jo(o,a){return Dl(2048,8,o,a)}function um(o,a){return Dl(4,2,o,a)}function hm(o,a){return Dl(4,4,o,a)}function fm(o,a){if(typeof a=="function")return o=o(),a(o),function(){a(null)};if(a!=null)return o=o(),a.current=o,function(){a.current=null}}function dm(o,a,d){return d=d!=null?d.concat([o]):null,Dl(4,4,fm.bind(null,a,o),d)}function wh(){}function pm(o,a){var d=zi();a=a===void 0?null:a;var v=d.memoizedState;return v!==null&&a!==null&&_h(a,v[1])?v[0]:(d.memoizedState=[o,a],o)}function mm(o,a){var d=zi();a=a===void 0?null:a;var v=d.memoizedState;return v!==null&&a!==null&&_h(a,v[1])?v[0]:(o=o(),d.memoizedState=[o,a],o)}function wx(o,a){var d=Pt;Pt=d!==0&&4>d?d:4,o(!0);var v=hi.transition;hi.transition={};try{o(!1),a()}finally{Pt=d,hi.transition=v}}function gm(){return zi().memoizedState}function Ex(o,a,d){var v=br(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},vm(o)?_m(a,d):(ym(o,a,d),d=Nn(),o=fi(o,v,d),o!==null&&xm(o,a,v))}function Ax(o,a,d){var v=br(o),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(vm(o))_m(a,S);else{ym(o,a,S);var A=o.alternate;if(o.lanes===0&&(A===null||A.lanes===0)&&(A=a.lastRenderedReducer,A!==null))try{var z=a.lastRenderedState,G=A(z,d);if(S.hasEagerState=!0,S.eagerState=G,Ui(G,z))return}catch{}finally{}d=Nn(),o=fi(o,v,d),o!==null&&xm(o,a,v)}}function vm(o){var a=o.alternate;return o===qt||a!==null&&a===qt}function _m(o,a){qo=Rl=!0;var d=o.pending;d===null?a.next=a:(a.next=d.next,d.next=a),o.pending=a}function ym(o,a,d){tn!==null&&o.mode&1&&!(xt&2)?(o=a.interleaved,o===null?(d.next=d,Oi===null?Oi=[a]:Oi.push(a)):(d.next=o.next,o.next=d),a.interleaved=d):(o=a.pending,o===null?d.next=d:(d.next=o.next,o.next=d),a.pending=d)}function xm(o,a,d){if(d&4194240){var v=a.lanes;v&=o.pendingLanes,d|=v,a.lanes=d,Ku(o,d)}}var Ul={readContext:ai,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},bx={readContext:ai,useCallback:function(o,a){return tr().memoizedState=[o,a===void 0?null:a],o},useContext:ai,useEffect:Mh,useImperativeHandle:function(o,a,d){return d=d!=null?d.concat([o]):null,Ll(4194308,4,fm.bind(null,a,o),d)},useLayoutEffect:function(o,a){return Ll(4194308,4,o,a)},useInsertionEffect:function(o,a){return Ll(4,2,o,a)},useMemo:function(o,a){var d=tr();return a=a===void 0?null:a,o=o(),d.memoizedState=[o,a],o},useReducer:function(o,a,d){var v=tr();return a=d!==void 0?d(a):a,v.memoizedState=v.baseState=a,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:a},v.queue=o,o=o.dispatch=Ex.bind(null,qt,o),[v.memoizedState,o]},useRef:function(o){var a=tr();return o={current:o},a.memoizedState=o},useState:Sh,useDebugValue:wh,useDeferredValue:function(o){var a=Sh(o),d=a[0],v=a[1];return Mh(function(){var S=hi.transition;hi.transition={};try{v(o)}finally{hi.transition=S}},[o]),d},useTransition:function(){var o=Sh(!1),a=o[0];return o=wx.bind(null,o[1]),tr().memoizedState=o,[a,o]},useMutableSource:function(){},useSyncExternalStore:function(o,a,d){var v=qt,S=tr();if(Gt){if(d===void 0)throw Error(l(407));d=d()}else{if(d=a(),tn===null)throw Error(l(349));Xs&30||sm(v,a,d)}S.memoizedState=d;var A={value:d,getSnapshot:a};return S.queue=A,Mh(am.bind(null,v,A,o),[o]),v.flags|=2048,jo(9,om.bind(null,v,A,d,a),void 0,null),d},useId:function(){var o=tr(),a=tn.identifierPrefix;if(Gt){var d=er,v=$i;d=(v&~(1<<32-Gn(v)-1)).toString(32)+d,a=":"+a+"R"+d,d=Zo++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=Mx++,a=":"+a+"r"+d.toString(32)+":";return o.memoizedState=a},unstable_isNewReconciler:!1},Tx={readContext:ai,useCallback:pm,useContext:ai,useEffect:Jo,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:hm,useMemo:mm,useReducer:Pl,useRef:cm,useState:function(){return Pl(qr)},useDebugValue:wh,useDeferredValue:function(o){var a=Pl(qr),d=a[0],v=a[1];return Jo(function(){var S=hi.transition;hi.transition={};try{v(o)}finally{hi.transition=S}},[o]),d},useTransition:function(){var o=Pl(qr)[0],a=zi().memoizedState;return[o,a]},useMutableSource:im,useSyncExternalStore:rm,useId:gm,unstable_isNewReconciler:!1},Cx={readContext:ai,useCallback:pm,useContext:ai,useEffect:Jo,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:hm,useMemo:mm,useReducer:Il,useRef:cm,useState:function(){return Il(qr)},useDebugValue:wh,useDeferredValue:function(o){var a=Il(qr),d=a[0],v=a[1];return Jo(function(){var S=hi.transition;hi.transition={};try{v(o)}finally{hi.transition=S}},[o]),d},useTransition:function(){var o=Il(qr)[0],a=zi().memoizedState;return[o,a]},useMutableSource:im,useSyncExternalStore:rm,useId:gm,unstable_isNewReconciler:!1};function Eh(o,a){try{var d="",v=a;do d+=Sx(v),v=v.return;while(v);var S=d}catch(A){S=`
Error generating stack: `+A.message+`
`+A.stack}return{value:o,source:a,stack:S}}function Ah(o,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function Sm(o,a,d){d=Qi(-1,d),d.tag=3,d.payload={element:null};var v=a.value;return d.callback=function(){Jl||(Jl=!0,Gh=v),Ah(o,a)},d}function Mm(o,a,d){d=Qi(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=a.value;d.payload=function(){return v(S)},d.callback=function(){Ah(o,a)}}var A=o.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(d.callback=function(){Ah(o,a),typeof v!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var z=a.stack;this.componentDidCatch(a.value,{componentStack:z!==null?z:""})}),d}function wm(o,a,d){var v=o.pingCache;if(v===null){v=o.pingCache=new Rx;var S=new Set;v.set(a,S)}else S=v.get(a),S===void 0&&(S=new Set,v.set(a,S));S.has(d)||(S.add(d),o=Gx.bind(null,o,a,d),a.then(o,o))}function Em(o){do{var a;if((a=o.tag===13)&&(a=o.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return o;o=o.return}while(o!==null);return null}function Am(o,a,d,v,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===a?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=Qi(-1,1),a.tag=2,wr(d,a))),d.lanes|=1),o)}function Bi(o){o.flags|=4}function bm(o,a){if(o!==null&&o.child===a.child)return!0;if(a.flags&16)return!1;for(o=a.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var Ko,Qo,Nl,Ol;if(H)Ko=function(o,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)Se(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Qo=function(){},Nl=function(o,a,d,v,S){if(o=o.memoizedProps,o!==v){var A=a.stateNode,z=Fi(ui.current);d=ne(A,d,o,v,S,z),(a.updateQueue=d)&&Bi(a)}},Ol=function(o,a,d,v){d!==v&&Bi(a)};else if(he){Ko=function(o,a,d,v){for(var S=a.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&v&&(A=on(A,S.type,S.memoizedProps,S)),Se(o,A)}else if(S.tag===6)A=S.stateNode,d&&v&&(A=an(A,S.memoizedProps,S)),Se(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),Ko(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===a)break;for(;S.sibling===null;){if(S.return===null||S.return===a)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var Tm=function(o,a,d,v){for(var S=a.child;S!==null;){if(S.tag===5){var A=S.stateNode;d&&v&&(A=on(A,S.type,S.memoizedProps,S)),bt(o,A)}else if(S.tag===6)A=S.stateNode,d&&v&&(A=an(A,S.memoizedProps,S)),bt(o,A);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)A=S.child,A!==null&&(A.return=S),Tm(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===a)break;for(;S.sibling===null;){if(S.return===null||S.return===a)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};Qo=function(o,a){var d=a.stateNode;if(!bm(o,a)){o=d.containerInfo;var v=Mt(o);Tm(v,a,!1,!1),d.pendingChildren=v,Bi(a),Nt(o,v)}},Nl=function(o,a,d,v,S){var A=o.stateNode,z=o.memoizedProps;if((o=bm(o,a))&&z===v)a.stateNode=A;else{var G=a.stateNode,le=Fi(ui.current),Pe=null;z!==v&&(Pe=ne(G,d,z,v,S,le)),o&&Pe===null?a.stateNode=A:(A=lt(A,Pe,d,z,v,a,o,G),Ue(A,d,v,S,le)&&Bi(a),a.stateNode=A,o?Bi(a):Ko(A,a,!1,!1))}},Ol=function(o,a,d,v){d!==v?(o=Fi(Gs.current),d=Fi(ui.current),a.stateNode=Ce(v,o,d,a),Bi(a)):a.stateNode=o.stateNode}}else Qo=function(){},Nl=function(){},Ol=function(){};function $o(o,a){if(!Gt)switch(o.tailMode){case"hidden":a=o.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?a||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function An(o){var a=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(a)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=d,a}function Px(o,a,d){var v=a.pendingProps;switch(uh(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(a),null;case 1:return Ct(a.type)&&jn(),An(a),null;case 3:return v=a.stateNode,Ws(),Ne(ln),Ne(Bt),vh(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(Go(a)?Bi(a):o===null||o.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,xi!==null&&(Yh(xi),xi=null))),Qo(o,a),An(a),null;case 5:mh(a),d=Fi(Gs.current);var S=a.type;if(o!==null&&a.stateNode!=null)Nl(o,a,S,v,d),o.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!v){if(a.stateNode===null)throw Error(l(166));return An(a),null}if(o=Fi(ui.current),Go(a)){if(!ce)throw Error(l(175));o=qu(a.stateNode,a.type,a.memoizedProps,d,o,a,!Vo),a.updateQueue=o,o!==null&&Bi(a)}else{var A=re(S,v,d,o,a);Ko(A,a,!1,!1),a.stateNode=A,Ue(A,S,v,d,o)&&Bi(a)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return An(a),null;case 6:if(o&&a.stateNode!=null)Ol(o,a,o.memoizedProps,v);else{if(typeof v!="string"&&a.stateNode===null)throw Error(l(166));if(o=Fi(Gs.current),d=Fi(ui.current),Go(a)){if(!ce)throw Error(l(176));if(o=a.stateNode,v=a.memoizedProps,(d=Zu(o,v,a,!Vo))&&(S=Jn,S!==null))switch(A=(S.mode&1)!==0,S.tag){case 3:Ye(S.stateNode.containerInfo,o,v,A);break;case 5:je(S.type,S.memoizedProps,S.stateNode,o,v,A)}d&&Bi(a)}else a.stateNode=Ce(v,o,d,a)}return An(a),null;case 13:if(Ne(Wt),v=a.memoizedState,Gt&&Kn!==null&&a.mode&1&&!(a.flags&128)){for(o=Kn;o;)o=Ii(o);return Hs(),a.flags|=98560,a}if(v!==null&&v.dehydrated!==null){if(v=Go(a),o===null){if(!v)throw Error(l(318));if(!ce)throw Error(l(344));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));I(o,a)}else Hs(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;return An(a),null}return xi!==null&&(Yh(xi),xi=null),a.flags&128?(a.lanes=d,a):(v=v!==null,d=!1,o===null?Go(a):d=o.memoizedState!==null,v&&!d&&(a.child.flags|=8192,a.mode&1&&(o===null||Wt.current&1?cn===0&&(cn=3):Zh())),a.updateQueue!==null&&(a.flags|=4),An(a),null);case 4:return Ws(),Qo(o,a),o===null&&_e(a.stateNode.containerInfo),An(a),null;case 10:return rh(a.type._context),An(a),null;case 17:return Ct(a.type)&&jn(),An(a),null;case 19:if(Ne(Wt),S=a.memoizedState,S===null)return An(a),null;if(v=(a.flags&128)!==0,A=S.rendering,A===null)if(v)$o(S,!1);else{if(cn!==0||o!==null&&o.flags&128)for(o=a.child;o!==null;){if(A=Tl(o),A!==null){for(a.flags|=128,$o(S,!1),o=A.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),a.subtreeFlags=0,o=d,v=a.child;v!==null;)d=v,S=o,d.flags&=14680066,A=d.alternate,A===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=A.childLanes,d.lanes=A.lanes,d.child=A.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=A.memoizedProps,d.memoizedState=A.memoizedState,d.updateQueue=A.updateQueue,d.type=A.type,S=A.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return dt(Wt,Wt.current&1|2),a.child}o=o.sibling}S.tail!==null&&fn()>Vh&&(a.flags|=128,v=!0,$o(S,!1),a.lanes=4194304)}else{if(!v)if(o=Tl(A),o!==null){if(a.flags|=128,v=!0,o=o.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),$o(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Gt)return An(a),null}else 2*fn()-S.renderingStartTime>Vh&&d!==1073741824&&(a.flags|=128,v=!0,$o(S,!1),a.lanes=4194304);S.isBackwards?(A.sibling=a.child,a.child=A):(o=S.last,o!==null?o.sibling=A:a.child=A,S.last=A)}return S.tail!==null?(a=S.tail,S.rendering=a,S.tail=a.sibling,S.renderingStartTime=fn(),a.sibling=null,o=Wt.current,dt(Wt,v?o&1|2:o&1),a):(An(a),null);case 22:case 23:return qh(),v=a.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(a.flags|=8192),v&&a.mode&1?$n&1073741824&&(An(a),H&&a.subtreeFlags&6&&(a.flags|=8192)):An(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}var Ix=c.ReactCurrentOwner,Qn=!1;function Un(o,a,d,v){a.child=o===null?tm(a,null,d,v):Vs(a,o.child,d,v)}function Cm(o,a,d,v,S){d=d.render;var A=a.ref;return zs(a,S),v=yh(o,a,d,v,A,S),d=xh(),o!==null&&!Qn?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~S,nr(o,a,S)):(Gt&&d&&ch(a),a.flags|=1,Un(o,a,v,S),a.child)}function Rm(o,a,d,v,S){if(o===null){var A=d.type;return typeof A=="function"&&!jh(A)&&A.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=A,Pm(o,a,A,v,S)):(o=ic(d.type,null,v,a,a.mode,S),o.ref=a.ref,o.return=a,a.child=o)}if(A=o.child,!(o.lanes&S)){var z=A.memoizedProps;if(d=d.compare,d=d!==null?d:_l,d(z,v)&&o.ref===a.ref)return nr(o,a,S)}return a.flags|=1,o=Cr(A,v),o.ref=a.ref,o.return=a,a.child=o}function Pm(o,a,d,v,S){if(o!==null&&_l(o.memoizedProps,v)&&o.ref===a.ref)if(Qn=!1,(o.lanes&S)!==0)o.flags&131072&&(Qn=!0);else return a.lanes=o.lanes,nr(o,a,S);return bh(o,a,d,v,S)}function Im(o,a,d){var v=a.pendingProps,S=v.children,A=o!==null?o.memoizedState:null;if(v.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null},dt(Ys,$n),$n|=d;else if(d&1073741824)a.memoizedState={baseLanes:0,cachePool:null},v=A!==null?A.baseLanes:d,dt(Ys,$n),$n|=v;else return o=A!==null?A.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:o,cachePool:null},a.updateQueue=null,dt(Ys,$n),$n|=o,null;else A!==null?(v=A.baseLanes|d,a.memoizedState=null):v=d,dt(Ys,$n),$n|=v;return Un(o,a,S,d),a.child}function Lm(o,a){var d=a.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function bh(o,a,d,v,S){var A=Ct(d)?Ln:Bt.current;return A=Li(a,A),zs(a,S),d=yh(o,a,d,v,A,S),v=xh(),o!==null&&!Qn?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~S,nr(o,a,S)):(Gt&&v&&ch(a),a.flags|=1,Un(o,a,d,S),a.child)}function Dm(o,a,d,v,S){if(Ct(d)){var A=!0;Sr(a)}else A=!1;if(zs(a,S),a.stateNode===null)o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),qp(a,d,v),lh(a,d,v,S),v=!0;else if(o===null){var z=a.stateNode,G=a.memoizedProps;z.props=G;var le=z.context,Pe=d.contextType;typeof Pe=="object"&&Pe!==null?Pe=ai(Pe):(Pe=Ct(d)?Ln:Bt.current,Pe=Li(a,Pe));var Ge=d.getDerivedStateFromProps,ht=typeof Ge=="function"||typeof z.getSnapshotBeforeUpdate=="function";ht||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(G!==v||le!==Pe)&&Zp(a,z,v,Pe),Mr=!1;var nt=a.memoizedState;z.state=nt,Ml(a,v,z,S),le=a.memoizedState,G!==v||nt!==le||ln.current||Mr?(typeof Ge=="function"&&(ah(a,d,Ge,v),le=a.memoizedState),(G=Mr||Yp(a,d,G,v,nt,le,Pe))?(ht||typeof z.UNSAFE_componentWillMount!="function"&&typeof z.componentWillMount!="function"||(typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount()),typeof z.componentDidMount=="function"&&(a.flags|=4194308)):(typeof z.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=v,a.memoizedState=le),z.props=v,z.state=le,z.context=Pe,v=G):(typeof z.componentDidMount=="function"&&(a.flags|=4194308),v=!1)}else{z=a.stateNode,Vp(o,a),G=a.memoizedProps,Pe=a.type===a.elementType?G:yi(a.type,G),z.props=Pe,ht=a.pendingProps,nt=z.context,le=d.contextType,typeof le=="object"&&le!==null?le=ai(le):(le=Ct(d)?Ln:Bt.current,le=Li(a,le));var Ft=d.getDerivedStateFromProps;(Ge=typeof Ft=="function"||typeof z.getSnapshotBeforeUpdate=="function")||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(G!==ht||nt!==le)&&Zp(a,z,v,le),Mr=!1,nt=a.memoizedState,z.state=nt,Ml(a,v,z,S);var Ke=a.memoizedState;G!==ht||nt!==Ke||ln.current||Mr?(typeof Ft=="function"&&(ah(a,d,Ft,v),Ke=a.memoizedState),(Pe=Mr||Yp(a,d,Pe,v,nt,Ke,le)||!1)?(Ge||typeof z.UNSAFE_componentWillUpdate!="function"&&typeof z.componentWillUpdate!="function"||(typeof z.componentWillUpdate=="function"&&z.componentWillUpdate(v,Ke,le),typeof z.UNSAFE_componentWillUpdate=="function"&&z.UNSAFE_componentWillUpdate(v,Ke,le)),typeof z.componentDidUpdate=="function"&&(a.flags|=4),typeof z.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof z.componentDidUpdate!="function"||G===o.memoizedProps&&nt===o.memoizedState||(a.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||G===o.memoizedProps&&nt===o.memoizedState||(a.flags|=1024),a.memoizedProps=v,a.memoizedState=Ke),z.props=v,z.state=Ke,z.context=le,v=Pe):(typeof z.componentDidUpdate!="function"||G===o.memoizedProps&&nt===o.memoizedState||(a.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||G===o.memoizedProps&&nt===o.memoizedState||(a.flags|=1024),v=!1)}return Th(o,a,d,v,A,S)}function Th(o,a,d,v,S,A){Lm(o,a);var z=(a.flags&128)!==0;if(!v&&!z)return S&&fl(a,d,!1),nr(o,a,A);v=a.stateNode,Ix.current=a;var G=z&&typeof d.getDerivedStateFromError!="function"?null:v.render();return a.flags|=1,o!==null&&z?(a.child=Vs(a,o.child,null,A),a.child=Vs(a,null,G,A)):Un(o,a,G,A),a.memoizedState=v.state,S&&fl(a,d,!0),a.child}function Um(o){var a=o.stateNode;a.pendingContext?Os(o,a.pendingContext,a.pendingContext!==a.context):a.context&&Os(o,a.context,!1),ph(o,a.containerInfo)}function Nm(o,a,d,v,S){return Hs(),dh(S),a.flags|=256,Un(o,a,d,v),a.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function zl(o){return{baseLanes:o,cachePool:null}}function Om(o,a,d){var v=a.pendingProps,S=Wt.current,A=!1,z=(a.flags&128)!==0,G;if((G=z)||(G=o!==null&&o.memoizedState===null?!1:(S&2)!==0),G?(A=!0,a.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),dt(Wt,S&1),o===null)return fh(a),o=a.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(a.mode&1?xr(o)?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(S=v.children,o=v.fallback,A?(v=a.mode,A=a.child,S={mode:"hidden",children:S},!(v&1)&&A!==null?(A.childLanes=0,A.pendingProps=S):A=rc(S,v,0,null),o=$r(o,v,d,null),A.return=a,o.return=a,A.sibling=o,a.child=A,a.child.memoizedState=zl(d),a.memoizedState=Fl,o):Ch(a,S));if(S=o.memoizedState,S!==null){if(G=S.dehydrated,G!==null){if(z)return a.flags&256?(a.flags&=-257,Bl(o,a,d,Error(l(422)))):a.memoizedState!==null?(a.child=o.child,a.flags|=128,null):(A=v.fallback,S=a.mode,v=rc({mode:"visible",children:v.children},S,0,null),A=$r(A,S,d,null),A.flags|=2,v.return=a,A.return=a,v.sibling=A,a.child=v,a.mode&1&&Vs(a,o.child,null,d),a.child.memoizedState=zl(d),a.memoizedState=Fl,A);if(!(a.mode&1))a=Bl(o,a,d,null);else if(xr(G))a=Bl(o,a,d,Error(l(419)));else if(v=(d&o.childLanes)!==0,Qn||v){if(v=tn,v!==null){switch(d&-d){case 4:A=2;break;case 16:A=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:A=32;break;case 536870912:A=268435456;break;default:A=0}v=A&(v.suspendedLanes|d)?0:A,v!==0&&v!==S.retryLane&&(S.retryLane=v,fi(o,v,-1))}Zh(),a=Bl(o,a,d,Error(l(421)))}else Bo(G)?(a.flags|=128,a.child=o.child,a=Wx.bind(null,o),cl(G,a),a=null):(d=S.treeContext,ce&&(Kn=Yu(G),Jn=a,Gt=!0,xi=null,Vo=!1,d!==null&&(li[ci++]=$i,li[ci++]=er,li[ci++]=Xr,$i=d.id,er=d.overflow,Xr=a)),a=Ch(a,a.pendingProps.children),a.flags|=4096);return a}return A?(v=zm(o,a,v.children,v.fallback,d),A=a.child,S=o.child.memoizedState,A.memoizedState=S===null?zl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,a.memoizedState=Fl,v):(d=Fm(o,a,v.children,d),a.memoizedState=null,d)}return A?(v=zm(o,a,v.children,v.fallback,d),A=a.child,S=o.child.memoizedState,A.memoizedState=S===null?zl(d):{baseLanes:S.baseLanes|d,cachePool:null},A.childLanes=o.childLanes&~d,a.memoizedState=Fl,v):(d=Fm(o,a,v.children,d),a.memoizedState=null,d)}function Ch(o,a){return a=rc({mode:"visible",children:a},o.mode,0,null),a.return=o,o.child=a}function Fm(o,a,d,v){var S=o.child;return o=S.sibling,d=Cr(S,{mode:"visible",children:d}),!(a.mode&1)&&(d.lanes=v),d.return=a,d.sibling=null,o!==null&&(v=a.deletions,v===null?(a.deletions=[o],a.flags|=16):v.push(o)),a.child=d}function zm(o,a,d,v,S){var A=a.mode;o=o.child;var z=o.sibling,G={mode:"hidden",children:d};return!(A&1)&&a.child!==o?(d=a.child,d.childLanes=0,d.pendingProps=G,a.deletions=null):(d=Cr(o,G),d.subtreeFlags=o.subtreeFlags&14680064),z!==null?v=Cr(z,v):(v=$r(v,A,S,null),v.flags|=2),v.return=a,d.return=a,d.sibling=v,a.child=d,v}function Bl(o,a,d,v){return v!==null&&dh(v),Vs(a,o.child,null,d),o=Ch(a,a.pendingProps.children),o.flags|=2,a.memoizedState=null,o}function Bm(o,a,d){o.lanes|=a;var v=o.alternate;v!==null&&(v.lanes|=a),sh(o.return,a,d)}function Rh(o,a,d,v,S){var A=o.memoizedState;A===null?o.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(A.isBackwards=a,A.rendering=null,A.renderingStartTime=0,A.last=v,A.tail=d,A.tailMode=S)}function km(o,a,d){var v=a.pendingProps,S=v.revealOrder,A=v.tail;if(Un(o,a,v.children,d),v=Wt.current,v&2)v=v&1|2,a.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=a.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&Bm(o,d,a);else if(o.tag===19)Bm(o,d,a);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if(dt(Wt,v),!(a.mode&1))a.memoizedState=null;else switch(S){case"forwards":for(d=a.child,S=null;d!==null;)o=d.alternate,o!==null&&Tl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=a.child,a.child=null):(S=d.sibling,d.sibling=null),Rh(a,!1,S,d,A);break;case"backwards":for(d=null,S=a.child,a.child=null;S!==null;){if(o=S.alternate,o!==null&&Tl(o)===null){a.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}Rh(a,!0,d,null,A);break;case"together":Rh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function nr(o,a,d){if(o!==null&&(a.dependencies=o.dependencies),qs|=a.lanes,!(d&a.childLanes))return null;if(o!==null&&a.child!==o.child)throw Error(l(153));if(a.child!==null){for(o=a.child,d=Cr(o,o.pendingProps),a.child=d,d.return=a;o.sibling!==null;)o=o.sibling,d=d.sibling=Cr(o,o.pendingProps),d.return=a;d.sibling=null}return a.child}function Lx(o,a,d){switch(a.tag){case 3:Um(a),Hs();break;case 5:nm(a);break;case 1:Ct(a.type)&&Sr(a);break;case 4:ph(a,a.stateNode.containerInfo);break;case 10:Hp(a,a.type._context,a.memoizedProps.value);break;case 13:var v=a.memoizedState;if(v!==null)return v.dehydrated!==null?(dt(Wt,Wt.current&1),a.flags|=128,null):d&a.child.childLanes?Om(o,a,d):(dt(Wt,Wt.current&1),o=nr(o,a,d),o!==null?o.sibling:null);dt(Wt,Wt.current&1);break;case 19:if(v=(d&a.childLanes)!==0,o.flags&128){if(v)return km(o,a,d);a.flags|=128}var S=a.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),dt(Wt,Wt.current),v)break;return null;case 22:case 23:return a.lanes=0,Im(o,a,d)}return nr(o,a,d)}function Dx(o,a){switch(uh(a),a.tag){case 1:return Ct(a.type)&&jn(),o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 3:return Ws(),Ne(ln),Ne(Bt),vh(),o=a.flags,o&65536&&!(o&128)?(a.flags=o&-65537|128,a):null;case 5:return mh(a),null;case 13:if(Ne(Wt),o=a.memoizedState,o!==null&&o.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Hs()}return o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 19:return Ne(Wt),null;case 4:return Ws(),null;case 10:return rh(a.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var kl=!1,Zr=!1,Ux=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Hl(o,a){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Yn(o,a,v)}else d.current=null}function Ph(o,a,d){try{d()}catch(v){Yn(o,a,v)}}var Hm=!1;function Nx(o,a){for(j(o.containerInfo),Be=a;Be!==null;)if(o=Be,a=o.child,(o.subtreeFlags&1028)!==0&&a!==null)a.return=o,Be=a;else for(;Be!==null;){o=Be;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,A=o.stateNode,z=A.getSnapshotBeforeUpdate(o.elementType===o.type?v:yi(o.type,v),S);A.__reactInternalSnapshotBeforeUpdate=z}break;case 3:H&&be(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(G){Yn(o,o.return,G)}if(a=o.sibling,a!==null){a.return=o.return,Be=a;break}Be=o.return}return d=Hm,Hm=!1,d}function jr(o,a,d){var v=a.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var A=S.destroy;S.destroy=void 0,A!==void 0&&Ph(a,d,A)}S=S.next}while(S!==v)}}function ea(o,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==a)}}function Ih(o){var a=o.ref;if(a!==null){var d=o.stateNode;switch(o.tag){case 5:o=K(d);break;default:o=d}typeof a=="function"?a(o):a.current=o}}function Vm(o,a,d){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(gl,a)}catch{}switch(a.tag){case 0:case 11:case 14:case 15:if(o=a.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,A=S.destroy;S=S.tag,A!==void 0&&(S&2||S&4)&&Ph(a,d,A),v=v.next}while(v!==o)}break;case 1:if(Hl(a,d),o=a.stateNode,typeof o.componentWillUnmount=="function")try{o.props=a.memoizedProps,o.state=a.memoizedState,o.componentWillUnmount()}catch(z){Yn(a,d,z)}break;case 5:Hl(a,d);break;case 4:H?Zm(o,a,d):he&&he&&(a=a.stateNode.containerInfo,d=Mt(a),wt(a,d))}}function Gm(o,a,d){for(var v=a;;)if(Vm(o,v,d),v.child===null||H&&v.tag===4){if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function Wm(o){var a=o.alternate;a!==null&&(o.alternate=null,Wm(a)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(a=o.stateNode,a!==null&&Le(a)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function Xm(o){return o.tag===5||o.tag===3||o.tag===4}function Ym(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||Xm(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function qm(o){if(H){e:{for(var a=o.return;a!==null;){if(Xm(a))break e;a=a.return}throw Error(l(160))}var d=a;switch(d.tag){case 5:a=d.stateNode,d.flags&32&&(ve(a),d.flags&=-33),d=Ym(o),Dh(o,d,a);break;case 3:case 4:a=d.stateNode.containerInfo,d=Ym(o),Lh(o,d,a);break;default:throw Error(l(161))}}}function Lh(o,a,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,a?ze(d,o,a):ct(d,o);else if(v!==4&&(o=o.child,o!==null))for(Lh(o,a,d),o=o.sibling;o!==null;)Lh(o,a,d),o=o.sibling}function Dh(o,a,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,a?at(d,o,a):De(d,o);else if(v!==4&&(o=o.child,o!==null))for(Dh(o,a,d),o=o.sibling;o!==null;)Dh(o,a,d),o=o.sibling}function Zm(o,a,d){for(var v=a,S=!1,A,z;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(l(160));switch(A=S.stateNode,S.tag){case 5:z=!1;break e;case 3:A=A.containerInfo,z=!0;break e;case 4:A=A.containerInfo,z=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)Gm(o,v,d),z?V(A,v.stateNode):ut(A,v.stateNode);else if(v.tag===18)z?Ie(A,v.stateNode):J(A,v.stateNode);else if(v.tag===4){if(v.child!==null){A=v.stateNode.containerInfo,z=!0,v.child.return=v,v=v.child;continue}}else if(Vm(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function Uh(o,a){if(H){switch(a.tag){case 0:case 11:case 14:case 15:jr(3,a,a.return),ea(3,a),jr(5,a,a.return);return;case 1:return;case 5:var d=a.stateNode;if(d!=null){var v=a.memoizedProps;o=o!==null?o.memoizedProps:v;var S=a.type,A=a.updateQueue;a.updateQueue=null,A!==null&&vt(d,A,S,o,v,a)}return;case 6:if(a.stateNode===null)throw Error(l(162));d=a.memoizedProps,Te(a.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:ce&&o!==null&&o.memoizedState.isDehydrated&&ee(a.stateNode.containerInfo);return;case 12:return;case 13:Vl(a);return;case 19:Vl(a);return;case 17:return}throw Error(l(163))}switch(a.tag){case 0:case 11:case 14:case 15:jr(3,a,a.return),ea(3,a),jr(5,a,a.return);return;case 12:return;case 13:Vl(a);return;case 19:Vl(a);return;case 3:ce&&o!==null&&o.memoizedState.isDehydrated&&ee(a.stateNode.containerInfo);break;case 22:case 23:return}e:if(he){switch(a.tag){case 1:case 5:case 6:break e;case 3:case 4:a=a.stateNode,wt(a.containerInfo,a.pendingChildren);break e}throw Error(l(163))}}function Vl(o){var a=o.updateQueue;if(a!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Ux),a.forEach(function(v){var S=Xx.bind(null,o,v);d.has(v)||(d.add(v),v.then(S,S))})}}function Ox(o,a){for(Be=a;Be!==null;){a=Be;var d=a.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var A=o;H?Zm(A,S,a):Gm(A,S,a);var z=S.alternate;z!==null&&(z.return=null),S.return=null}catch(Je){Yn(S,a,Je)}}if(d=a.child,a.subtreeFlags&12854&&d!==null)d.return=a,Be=d;else for(;Be!==null;){a=Be;try{var G=a.flags;if(G&32&&H&&ve(a.stateNode),G&512){var le=a.alternate;if(le!==null){var Pe=le.ref;Pe!==null&&(typeof Pe=="function"?Pe(null):Pe.current=null)}}if(G&8192)switch(a.tag){case 13:if(a.memoizedState!==null){var Ge=a.alternate;(Ge===null||Ge.memoizedState===null)&&(Hh=fn())}break;case 22:var ht=a.memoizedState!==null,nt=a.alternate,Ft=nt!==null&&nt.memoizedState!==null;if(d=a,H){e:if(v=d,S=ht,A=null,H)for(var Ke=v;;){if(Ke.tag===5){if(A===null){A=Ke;var bn=Ke.stateNode;S?k(bn):oe(Ke.stateNode,Ke.memoizedProps)}}else if(Ke.tag===6){if(A===null){var pi=Ke.stateNode;S?xe(pi):pe(pi,Ke.memoizedProps)}}else if((Ke.tag!==22&&Ke.tag!==23||Ke.memoizedState===null||Ke===v)&&Ke.child!==null){Ke.child.return=Ke,Ke=Ke.child;continue}if(Ke===v)break;for(;Ke.sibling===null;){if(Ke.return===null||Ke.return===v)break e;A===Ke&&(A=null),Ke=Ke.return}A===Ke&&(A=null),Ke.sibling.return=Ke.return,Ke=Ke.sibling}}if(ht&&!Ft&&d.mode&1){Be=d;for(var $=d.child;$!==null;){for(d=Be=$;Be!==null;){v=Be;var Y=v.child;switch(v.tag){case 0:case 11:case 14:case 15:jr(4,v,v.return);break;case 1:Hl(v,v.return);var ae=v.stateNode;if(typeof ae.componentWillUnmount=="function"){var ke=v.return;try{ae.props=v.memoizedProps,ae.state=v.memoizedState,ae.componentWillUnmount()}catch(Je){Yn(v,ke,Je)}}break;case 5:Hl(v,v.return);break;case 22:if(v.memoizedState!==null){Km(d);continue}}Y!==null?(Y.return=v,Be=Y):Km(d)}$=$.sibling}}}switch(G&4102){case 2:qm(a),a.flags&=-3;break;case 6:qm(a),a.flags&=-3,Uh(a.alternate,a);break;case 4096:a.flags&=-4097;break;case 4100:a.flags&=-4097,Uh(a.alternate,a);break;case 4:Uh(a.alternate,a)}}catch(Je){Yn(a,a.return,Je)}if(d=a.sibling,d!==null){d.return=a.return,Be=d;break}Be=a.return}}}function Fx(o,a,d){Be=o,jm(o)}function jm(o,a,d){for(var v=(o.mode&1)!==0;Be!==null;){var S=Be,A=S.child;if(S.tag===22&&v){var z=S.memoizedState!==null||kl;if(!z){var G=S.alternate,le=G!==null&&G.memoizedState!==null||Zr;G=kl;var Pe=Zr;if(kl=z,(Zr=le)&&!Pe)for(Be=S;Be!==null;)z=Be,le=z.child,z.tag===22&&z.memoizedState!==null?Qm(S):le!==null?(le.return=z,Be=le):Qm(S);for(;A!==null;)Be=A,jm(A),A=A.sibling;Be=S,kl=G,Zr=Pe}Jm(o)}else S.subtreeFlags&8772&&A!==null?(A.return=S,Be=A):Jm(o)}}function Jm(o){for(;Be!==null;){var a=Be;if(a.flags&8772){var d=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:Zr||ea(5,a);break;case 1:var v=a.stateNode;if(a.flags&4&&!Zr)if(d===null)v.componentDidMount();else{var S=a.elementType===a.type?d.memoizedProps:yi(a.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var A=a.updateQueue;A!==null&&Wp(a,A,v);break;case 3:var z=a.updateQueue;if(z!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=K(a.child.stateNode);break;case 1:d=a.child.stateNode}Wp(a,z,d)}break;case 5:var G=a.stateNode;d===null&&a.flags&4&&Xe(G,a.type,a.memoizedProps,a);break;case 6:break;case 4:break;case 12:break;case 13:if(ce&&a.memoizedState===null){var le=a.alternate;if(le!==null){var Pe=le.memoizedState;if(Pe!==null){var Ge=Pe.dehydrated;Ge!==null&&ie(Ge)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(l(163))}Zr||a.flags&512&&Ih(a)}catch(ht){Yn(a,a.return,ht)}}if(a===o){Be=null;break}if(d=a.sibling,d!==null){d.return=a.return,Be=d;break}Be=a.return}}function Km(o){for(;Be!==null;){var a=Be;if(a===o){Be=null;break}var d=a.sibling;if(d!==null){d.return=a.return,Be=d;break}Be=a.return}}function Qm(o){for(;Be!==null;){var a=Be;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{ea(4,a)}catch(le){Yn(a,d,le)}break;case 1:var v=a.stateNode;if(typeof v.componentDidMount=="function"){var S=a.return;try{v.componentDidMount()}catch(le){Yn(a,S,le)}}var A=a.return;try{Ih(a)}catch(le){Yn(a,A,le)}break;case 5:var z=a.return;try{Ih(a)}catch(le){Yn(a,z,le)}}}catch(le){Yn(a,a.return,le)}if(a===o){Be=null;break}var G=a.sibling;if(G!==null){G.return=a.return,Be=G;break}Be=a.return}}var Gl=0,Wl=1,Xl=2,Yl=3,ql=4;if(typeof Symbol=="function"&&Symbol.for){var ta=Symbol.for;Gl=ta("selector.component"),Wl=ta("selector.has_pseudo_class"),Xl=ta("selector.role"),Yl=ta("selector.test_id"),ql=ta("selector.text")}function Nh(o){var a=we(o);if(a!=null){if(typeof a.memoizedProps["data-testname"]!="string")throw Error(l(364));return a}if(o=P(o),o===null)throw Error(l(362));return o.stateNode.current}function Oh(o,a){switch(a.$$typeof){case Gl:if(o.type===a.value)return!0;break;case Wl:e:{a=a.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],S=o[d++],A=a[S];if(v.tag!==5||!de(v)){for(;A!=null&&Oh(v,A);)S++,A=a[S];if(S===a.length){a=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}a=!1}return a;case Xl:if(o.tag===5&&ye(o.stateNode,a.value))return!0;break;case ql:if((o.tag===5||o.tag===6)&&(o=ge(o),o!==null&&0<=o.indexOf(a.value)))return!0;break;case Yl:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===a.value.toLowerCase()))return!0;break;default:throw Error(l(365))}return!1}function Fh(o){switch(o.$$typeof){case Gl:return"<"+(L(o.value)||"Unknown")+">";case Wl:return":has("+(Fh(o)||"")+")";case Xl:return'[role="'+o.value+'"]';case ql:return'"'+o.value+'"';case Yl:return'[data-testname="'+o.value+'"]';default:throw Error(l(365))}}function $m(o,a){var d=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],A=o[v++],z=a[A];if(S.tag!==5||!de(S)){for(;z!=null&&Oh(S,z);)A++,z=a[A];if(A===a.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,A),S=S.sibling}}return d}function zh(o,a){if(!B)throw Error(l(363));o=Nh(o),o=$m(o,a),a=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)de(v)||a.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return a}var zx=Math.ceil,Zl=c.ReactCurrentDispatcher,Bh=c.ReactCurrentOwner,Kt=c.ReactCurrentBatchConfig,xt=0,tn=null,nn=null,yn=0,$n=0,Ys=St(0),cn=0,na=null,qs=0,jl=0,kh=0,ia=null,Wn=null,Hh=0,Vh=1/0;function Zs(){Vh=fn()+500}var Jl=!1,Gh=null,Er=null,Kl=!1,Ar=null,Ql=0,ra=0,Wh=null,$l=-1,ec=0;function Nn(){return xt&6?fn():$l!==-1?$l:$l=fn()}function br(o){return o.mode&1?xt&2&&yn!==0?yn&-yn:xx.transition!==null?(ec===0&&(o=dl,dl<<=1,!(dl&4194240)&&(dl=64),ec=o),ec):(o=Pt,o!==0?o:Ee()):1}function fi(o,a,d){if(50<ra)throw ra=0,Wh=null,Error(l(185));var v=tc(o,a);return v===null?null:(Ho(v,a,d),(!(xt&2)||v!==tn)&&(v===tn&&(!(xt&2)&&(jl|=a),cn===4&&Tr(v,yn)),Xn(v,d),a===1&&xt===0&&!(o.mode&1)&&(Zs(),vl&&Ni())),v)}function tc(o,a){o.lanes|=a;var d=o.alternate;for(d!==null&&(d.lanes|=a),d=o,o=o.return;o!==null;)o.childLanes|=a,d=o.alternate,d!==null&&(d.childLanes|=a),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Xn(o,a){var d=o.callbackNode;hx(o,a);var v=ml(o,o===tn?yn:0);if(v===0)d!==null&&Bp(d),o.callbackNode=null,o.callbackPriority=0;else if(a=v&-v,o.callbackPriority!==a){if(d!=null&&Bp(d),a===1)o.tag===0?yx(tg.bind(null,o)):kp(tg.bind(null,o)),Oe?et(function(){xt===0&&Ni()}):Qu($u,Ni),d=null;else{switch(zp(v)){case 1:d=$u;break;case 4:d=mx;break;case 16:d=eh;break;case 536870912:d=gx;break;default:d=eh}d=ug(d,eg.bind(null,o))}o.callbackPriority=a,o.callbackNode=d}}function eg(o,a){if($l=-1,ec=0,xt&6)throw Error(l(327));var d=o.callbackNode;if(Qr()&&o.callbackNode!==d)return null;var v=ml(o,o===tn?yn:0);if(v===0)return null;if(v&30||v&o.expiredLanes||a)a=nc(o,v);else{a=v;var S=xt;xt|=2;var A=rg();(tn!==o||yn!==a)&&(Zs(),Jr(o,a));do try{Hx();break}catch(G){ig(o,G)}while(!0);ih(),Zl.current=A,xt=S,nn!==null?a=0:(tn=null,yn=0,a=cn)}if(a!==0){if(a===2&&(S=ju(o),S!==0&&(v=S,a=Xh(o,S))),a===1)throw d=na,Jr(o,0),Tr(o,v),Xn(o,fn()),d;if(a===6)Tr(o,v);else{if(S=o.current.alternate,!(v&30)&&!Bx(S)&&(a=nc(o,v),a===2&&(A=ju(o),A!==0&&(v=A,a=Xh(o,A))),a===1))throw d=na,Jr(o,0),Tr(o,v),Xn(o,fn()),d;switch(o.finishedWork=S,o.finishedLanes=v,a){case 0:case 1:throw Error(l(345));case 2:Kr(o,Wn);break;case 3:if(Tr(o,v),(v&130023424)===v&&(a=Hh+500-fn(),10<a)){if(ml(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Nn(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=Me(Kr.bind(null,o,Wn),a);break}Kr(o,Wn);break;case 4:if(Tr(o,v),(v&4194240)===v)break;for(a=o.eventTimes,S=-1;0<v;){var z=31-Gn(v);A=1<<z,z=a[z],z>S&&(S=z),v&=~A}if(v=S,v=fn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*zx(v/1960))-v,10<v){o.timeoutHandle=Me(Kr.bind(null,o,Wn),v);break}Kr(o,Wn);break;case 5:Kr(o,Wn);break;default:throw Error(l(329))}}}return Xn(o,fn()),o.callbackNode===d?eg.bind(null,o):null}function Xh(o,a){var d=ia;return o.current.memoizedState.isDehydrated&&(Jr(o,a).flags|=256),o=nc(o,a),o!==2&&(a=Wn,Wn=d,a!==null&&Yh(a)),o}function Yh(o){Wn===null?Wn=o:Wn.push.apply(Wn,o)}function Bx(o){for(var a=o;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],A=S.getSnapshot;S=S.value;try{if(!Ui(A(),S))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Tr(o,a){for(a&=~kh,a&=~jl,o.suspendedLanes|=a,o.pingedLanes&=~a,o=o.expirationTimes;0<a;){var d=31-Gn(a),v=1<<d;o[d]=-1,a&=~v}}function tg(o){if(xt&6)throw Error(l(327));Qr();var a=ml(o,0);if(!(a&1))return Xn(o,fn()),null;var d=nc(o,a);if(o.tag!==0&&d===2){var v=ju(o);v!==0&&(a=v,d=Xh(o,v))}if(d===1)throw d=na,Jr(o,0),Tr(o,a),Xn(o,fn()),d;if(d===6)throw Error(l(345));return o.finishedWork=o.current.alternate,o.finishedLanes=a,Kr(o,Wn),Xn(o,fn()),null}function ng(o){Ar!==null&&Ar.tag===0&&!(xt&6)&&Qr();var a=xt;xt|=1;var d=Kt.transition,v=Pt;try{if(Kt.transition=null,Pt=1,o)return o()}finally{Pt=v,Kt.transition=d,xt=a,!(xt&6)&&Ni()}}function qh(){$n=Ys.current,Ne(Ys)}function Jr(o,a){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==ot&&(o.timeoutHandle=ot,$e(d)),nn!==null)for(d=nn.return;d!==null;){var v=d;switch(uh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&jn();break;case 3:Ws(),Ne(ln),Ne(Bt),vh();break;case 5:mh(v);break;case 4:Ws();break;case 13:Ne(Wt);break;case 19:Ne(Wt);break;case 10:rh(v.type._context);break;case 22:case 23:qh()}d=d.return}if(tn=o,nn=o=Cr(o.current,null),yn=$n=a,cn=0,na=null,kh=jl=qs=0,Wn=ia=null,Oi!==null){for(a=0;a<Oi.length;a++)if(d=Oi[a],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,A=d.pending;if(A!==null){var z=A.next;A.next=S,v.next=z}d.pending=v}Oi=null}return o}function ig(o,a){do{var d=nn;try{if(ih(),Cl.current=Ul,Rl){for(var v=qt.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}Rl=!1}if(Xs=0,dn=wn=qt=null,qo=!1,Zo=0,Bh.current=null,d===null||d.return===null){cn=1,na=a,nn=null;break}e:{var A=o,z=d.return,G=d,le=a;if(a=yn,G.flags|=32768,le!==null&&typeof le=="object"&&typeof le.then=="function"){var Pe=le,Ge=G,ht=Ge.tag;if(!(Ge.mode&1)&&(ht===0||ht===11||ht===15)){var nt=Ge.alternate;nt?(Ge.updateQueue=nt.updateQueue,Ge.memoizedState=nt.memoizedState,Ge.lanes=nt.lanes):(Ge.updateQueue=null,Ge.memoizedState=null)}var Ft=Em(z);if(Ft!==null){Ft.flags&=-257,Am(Ft,z,G,A,a),Ft.mode&1&&wm(A,Pe,a),a=Ft,le=Pe;var Ke=a.updateQueue;if(Ke===null){var bn=new Set;bn.add(le),a.updateQueue=bn}else Ke.add(le);break e}else{if(!(a&1)){wm(A,Pe,a),Zh();break e}le=Error(l(426))}}else if(Gt&&G.mode&1){var pi=Em(z);if(pi!==null){!(pi.flags&65536)&&(pi.flags|=256),Am(pi,z,G,A,a),dh(le);break e}}A=le,cn!==4&&(cn=2),ia===null?ia=[A]:ia.push(A),le=Eh(le,G),G=z;do{switch(G.tag){case 3:G.flags|=65536,a&=-a,G.lanes|=a;var $=Sm(G,le,a);Gp(G,$);break e;case 1:A=le;var Y=G.type,ae=G.stateNode;if(!(G.flags&128)&&(typeof Y.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Er===null||!Er.has(ae)))){G.flags|=65536,a&=-a,G.lanes|=a;var ke=Mm(G,A,a);Gp(G,ke);break e}}G=G.return}while(G!==null)}og(d)}catch(Je){a=Je,nn===d&&d!==null&&(nn=d=d.return);continue}break}while(!0)}function rg(){var o=Zl.current;return Zl.current=Ul,o===null?Ul:o}function Zh(){(cn===0||cn===3||cn===2)&&(cn=4),tn===null||!(qs&268435455)&&!(jl&268435455)||Tr(tn,yn)}function nc(o,a){var d=xt;xt|=2;var v=rg();tn===o&&yn===a||Jr(o,a);do try{kx();break}catch(S){ig(o,S)}while(!0);if(ih(),xt=d,Zl.current=v,nn!==null)throw Error(l(261));return tn=null,yn=0,cn}function kx(){for(;nn!==null;)sg(nn)}function Hx(){for(;nn!==null&&!dx();)sg(nn)}function sg(o){var a=cg(o.alternate,o,$n);o.memoizedProps=o.pendingProps,a===null?og(o):nn=a,Bh.current=null}function og(o){var a=o;do{var d=a.alternate;if(o=a.return,a.flags&32768){if(d=Dx(d,a),d!==null){d.flags&=32767,nn=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{cn=6,nn=null;return}}else if(d=Px(d,a,$n),d!==null){nn=d;return}if(a=a.sibling,a!==null){nn=a;return}nn=a=o}while(a!==null);cn===0&&(cn=5)}function Kr(o,a){var d=Pt,v=Kt.transition;try{Kt.transition=null,Pt=1,Vx(o,a,d)}finally{Kt.transition=v,Pt=d}return null}function Vx(o,a,d){do Qr();while(Ar!==null);if(xt&6)throw Error(l(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(l(177));o.callbackNode=null,o.callbackPriority=0;var A=v.lanes|v.childLanes;if(fx(o,A),o===tn&&(nn=tn=null,yn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||Kl||(Kl=!0,ug(eh,function(){return Qr(),null})),A=(v.flags&15990)!==0,v.subtreeFlags&15990||A){A=Kt.transition,Kt.transition=null;var z=Pt;Pt=1;var G=xt;xt|=4,Bh.current=null,Nx(o,v),Ox(o,v),Z(o.containerInfo),o.current=v,Fx(v),px(),xt=G,Pt=z,Kt.transition=A}else o.current=v;if(Kl&&(Kl=!1,Ar=o,Ql=S),A=o.pendingLanes,A===0&&(Er=null),vx(v.stateNode),Xn(o,fn()),a!==null)for(d=o.onRecoverableError,v=0;v<a.length;v++)d(a[v]);if(Jl)throw Jl=!1,o=Gh,Gh=null,o;return Ql&1&&o.tag!==0&&Qr(),A=o.pendingLanes,A&1?o===Wh?ra++:(ra=0,Wh=o):ra=0,Ni(),null}function Qr(){if(Ar!==null){var o=zp(Ql),a=Kt.transition,d=Pt;try{if(Kt.transition=null,Pt=16>o?16:o,Ar===null)var v=!1;else{if(o=Ar,Ar=null,Ql=0,xt&6)throw Error(l(331));var S=xt;for(xt|=4,Be=o.current;Be!==null;){var A=Be,z=A.child;if(Be.flags&16){var G=A.deletions;if(G!==null){for(var le=0;le<G.length;le++){var Pe=G[le];for(Be=Pe;Be!==null;){var Ge=Be;switch(Ge.tag){case 0:case 11:case 15:jr(8,Ge,A)}var ht=Ge.child;if(ht!==null)ht.return=Ge,Be=ht;else for(;Be!==null;){Ge=Be;var nt=Ge.sibling,Ft=Ge.return;if(Wm(Ge),Ge===Pe){Be=null;break}if(nt!==null){nt.return=Ft,Be=nt;break}Be=Ft}}}var Ke=A.alternate;if(Ke!==null){var bn=Ke.child;if(bn!==null){Ke.child=null;do{var pi=bn.sibling;bn.sibling=null,bn=pi}while(bn!==null)}}Be=A}}if(A.subtreeFlags&2064&&z!==null)z.return=A,Be=z;else e:for(;Be!==null;){if(A=Be,A.flags&2048)switch(A.tag){case 0:case 11:case 15:jr(9,A,A.return)}var $=A.sibling;if($!==null){$.return=A.return,Be=$;break e}Be=A.return}}var Y=o.current;for(Be=Y;Be!==null;){z=Be;var ae=z.child;if(z.subtreeFlags&2064&&ae!==null)ae.return=z,Be=ae;else e:for(z=Y;Be!==null;){if(G=Be,G.flags&2048)try{switch(G.tag){case 0:case 11:case 15:ea(9,G)}}catch(Je){Yn(G,G.return,Je)}if(G===z){Be=null;break e}var ke=G.sibling;if(ke!==null){ke.return=G.return,Be=ke;break e}Be=G.return}}if(xt=S,Ni(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(gl,o)}catch{}v=!0}return v}finally{Pt=d,Kt.transition=a}}return!1}function ag(o,a,d){a=Eh(d,a),a=Sm(o,a,1),wr(o,a),a=Nn(),o=tc(o,1),o!==null&&(Ho(o,1,a),Xn(o,a))}function Yn(o,a,d){if(o.tag===3)ag(o,o,d);else for(;a!==null;){if(a.tag===3){ag(a,o,d);break}else if(a.tag===1){var v=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v))){o=Eh(d,o),o=Mm(a,o,1),wr(a,o),o=Nn(),a=tc(a,1),a!==null&&(Ho(a,1,o),Xn(a,o));break}}a=a.return}}function Gx(o,a,d){var v=o.pingCache;v!==null&&v.delete(a),a=Nn(),o.pingedLanes|=o.suspendedLanes&d,tn===o&&(yn&d)===d&&(cn===4||cn===3&&(yn&130023424)===yn&&500>fn()-Hh?Jr(o,0):kh|=d),Xn(o,a)}function lg(o,a){a===0&&(o.mode&1?(a=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):a=1);var d=Nn();o=tc(o,a),o!==null&&(Ho(o,a,d),Xn(o,d))}function Wx(o){var a=o.memoizedState,d=0;a!==null&&(d=a.retryLane),lg(o,d)}function Xx(o,a){var d=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(l(314))}v!==null&&v.delete(a),lg(o,d)}var cg;cg=function(o,a,d){if(o!==null)if(o.memoizedProps!==a.pendingProps||ln.current)Qn=!0;else{if(!(o.lanes&d)&&!(a.flags&128))return Qn=!1,Lx(o,a,d);Qn=!!(o.flags&131072)}else Qn=!1,Gt&&a.flags&1048576&&jp(a,Al,a.index);switch(a.lanes=0,a.tag){case 2:var v=a.type;o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps;var S=Li(a,Bt.current);zs(a,d),S=yh(null,a,v,o,S,d);var A=xh();return a.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Ct(v)?(A=!0,Sr(a)):A=!1,a.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,oh(a),S.updater=wl,a.stateNode=S,S._reactInternals=a,lh(a,v,o,d),a=Th(null,a,v,!0,A,d)):(a.tag=0,Gt&&A&&ch(a),Un(null,a,S,d),a=a.child),a;case 16:v=a.elementType;e:{switch(o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),o=a.pendingProps,S=v._init,v=S(v._payload),a.type=v,S=a.tag=qx(v),o=yi(v,o),S){case 0:a=bh(null,a,v,o,d);break e;case 1:a=Dm(null,a,v,o,d);break e;case 11:a=Cm(null,a,v,o,d);break e;case 14:a=Rm(null,a,v,yi(v.type,o),d);break e}throw Error(l(306,v,""))}return a;case 0:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:yi(v,S),bh(o,a,v,S,d);case 1:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:yi(v,S),Dm(o,a,v,S,d);case 3:e:{if(Um(a),o===null)throw Error(l(387));v=a.pendingProps,A=a.memoizedState,S=A.element,Vp(o,a),Ml(a,v,null,d);var z=a.memoizedState;if(v=z.element,ce&&A.isDehydrated)if(A={element:v,isDehydrated:!1,cache:z.cache,transitions:z.transitions},a.updateQueue.baseState=A,a.memoizedState=A,a.flags&256){S=Error(l(423)),a=Nm(o,a,v,d,S);break e}else if(v!==S){S=Error(l(424)),a=Nm(o,a,v,d,S);break e}else for(ce&&(Kn=hl(a.stateNode.containerInfo),Jn=a,Gt=!0,xi=null,Vo=!1),d=tm(a,null,v,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Hs(),v===S){a=nr(o,a,d);break e}Un(o,a,v,d)}a=a.child}return a;case 5:return nm(a),o===null&&fh(a),v=a.type,S=a.pendingProps,A=o!==null?o.memoizedProps:null,z=S.children,me(v,S)?z=null:A!==null&&me(v,A)&&(a.flags|=32),Lm(o,a),Un(o,a,z,d),a.child;case 6:return o===null&&fh(a),null;case 13:return Om(o,a,d);case 4:return ph(a,a.stateNode.containerInfo),v=a.pendingProps,o===null?a.child=Vs(a,null,v,d):Un(o,a,v,d),a.child;case 11:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:yi(v,S),Cm(o,a,v,S,d);case 7:return Un(o,a,a.pendingProps,d),a.child;case 8:return Un(o,a,a.pendingProps.children,d),a.child;case 12:return Un(o,a,a.pendingProps.children,d),a.child;case 10:e:{if(v=a.type._context,S=a.pendingProps,A=a.memoizedProps,z=S.value,Hp(a,v,z),A!==null)if(Ui(A.value,z)){if(A.children===S.children&&!ln.current){a=nr(o,a,d);break e}}else for(A=a.child,A!==null&&(A.return=a);A!==null;){var G=A.dependencies;if(G!==null){z=A.child;for(var le=G.firstContext;le!==null;){if(le.context===v){if(A.tag===1){le=Qi(-1,d&-d),le.tag=2;var Pe=A.updateQueue;if(Pe!==null){Pe=Pe.shared;var Ge=Pe.pending;Ge===null?le.next=le:(le.next=Ge.next,Ge.next=le),Pe.pending=le}}A.lanes|=d,le=A.alternate,le!==null&&(le.lanes|=d),sh(A.return,d,a),G.lanes|=d;break}le=le.next}}else if(A.tag===10)z=A.type===a.type?null:A.child;else if(A.tag===18){if(z=A.return,z===null)throw Error(l(341));z.lanes|=d,G=z.alternate,G!==null&&(G.lanes|=d),sh(z,d,a),z=A.sibling}else z=A.child;if(z!==null)z.return=A;else for(z=A;z!==null;){if(z===a){z=null;break}if(A=z.sibling,A!==null){A.return=z.return,z=A;break}z=z.return}A=z}Un(o,a,S.children,d),a=a.child}return a;case 9:return S=a.type,v=a.pendingProps.children,zs(a,d),S=ai(S),v=v(S),a.flags|=1,Un(o,a,v,d),a.child;case 14:return v=a.type,S=yi(v,a.pendingProps),S=yi(v.type,S),Rm(o,a,v,S,d);case 15:return Pm(o,a,a.type,a.pendingProps,d);case 17:return v=a.type,S=a.pendingProps,S=a.elementType===v?S:yi(v,S),o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2),a.tag=1,Ct(v)?(o=!0,Sr(a)):o=!1,zs(a,d),qp(a,v,S),lh(a,v,S,d),Th(null,a,v,!0,o,d);case 19:return km(o,a,d);case 22:return Im(o,a,d)}throw Error(l(156,a.tag))};function ug(o,a){return Qu(o,a)}function Yx(o,a,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(o,a,d,v){return new Yx(o,a,d,v)}function jh(o){return o=o.prototype,!(!o||!o.isReactComponent)}function qx(o){if(typeof o=="function")return jh(o)?1:0;if(o!=null){if(o=o.$$typeof,o===M)return 11;if(o===E)return 14}return 2}function Cr(o,a){var d=o.alternate;return d===null?(d=di(o.tag,a,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=a,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,a=o.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function ic(o,a,d,v,S,A){var z=2;if(v=o,typeof o=="function")jh(o)&&(z=1);else if(typeof o=="string")z=5;else e:switch(o){case f:return $r(d.children,S,A,a);case p:z=8,S|=8;break;case m:return o=di(12,d,a,S|2),o.elementType=m,o.lanes=A,o;case x:return o=di(13,d,a,S),o.elementType=x,o.lanes=A,o;case _:return o=di(19,d,a,S),o.elementType=_,o.lanes=A,o;case b:return rc(d,S,A,a);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:z=10;break e;case y:z=9;break e;case M:z=11;break e;case E:z=14;break e;case w:z=16,v=null;break e}throw Error(l(130,o==null?o:typeof o,""))}return a=di(z,d,a,S),a.elementType=o,a.type=v,a.lanes=A,a}function $r(o,a,d,v){return o=di(7,o,v,a),o.lanes=d,o}function rc(o,a,d,v){return o=di(22,o,v,a),o.elementType=b,o.lanes=d,o.stateNode={},o}function Jh(o,a,d){return o=di(6,o,null,a),o.lanes=d,o}function Kh(o,a,d){return a=di(4,o.children!==null?o.children:[],o.key,a),a.lanes=d,a.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},a}function Zx(o,a,d,v,S){this.tag=a,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=ot,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=v,this.onRecoverableError=S,ce&&(this.mutableSourceEagerHydrationData=null)}function hg(o,a,d,v,S,A,z,G,le){return o=new Zx(o,a,d,G,le),a===1?(a=1,A===!0&&(a|=8)):a=0,A=di(3,null,null,a),o.current=A,A.stateNode=o,A.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},oh(A),o}function fg(o){if(!o)return Et;o=o._reactInternals;e:{if(C(o)!==o||o.tag!==1)throw Error(l(170));var a=o;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Ct(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(o.tag===1){var d=o.type;if(Ct(d))return Dn(o,d,a)}return a}function dg(o){var a=o._reactInternals;if(a===void 0)throw typeof o.render=="function"?Error(l(188)):(o=Object.keys(o).join(","),Error(l(268,o)));return o=q(a),o===null?null:o.stateNode}function pg(o,a){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<a?d:a}}function Qh(o,a){pg(o,a),(o=o.alternate)&&pg(o,a)}function jx(o){return o=q(o),o===null?null:o.stateNode}function Jx(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var a=Nn();fi(o,134217728,a),Qh(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var a=Nn(),d=br(o);fi(o,d,a),Qh(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var a=o.stateNode;if(a.current.memoizedState.isDehydrated){var d=ko(a.pendingLanes);d!==0&&(Ku(a,d|1),Xn(a,fn()),!(xt&6)&&(Zs(),Ni()))}break;case 13:var v=Nn();ng(function(){return fi(o,1,v)}),Qh(o,1)}},t.batchedUpdates=function(o,a){var d=xt;xt|=1;try{return o(a)}finally{xt=d,xt===0&&(Zs(),vl&&Ni())}},t.createComponentSelector=function(o){return{$$typeof:Gl,value:o}},t.createContainer=function(o,a,d,v,S,A,z){return hg(o,a,!1,null,d,v,S,A,z)},t.createHasPseudoClassSelector=function(o){return{$$typeof:Wl,value:o}},t.createHydrationContainer=function(o,a,d,v,S,A,z,G,le){return o=hg(d,v,!0,o,S,A,z,G,le),o.context=fg(null),d=o.current,v=Nn(),S=br(d),A=Qi(v,S),A.callback=a??null,wr(d,A),o.current.lanes=S,Ho(o,S,v),Xn(o,v),o},t.createPortal=function(o,a,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:a,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:Xl,value:o}},t.createTestNameSelector=function(o){return{$$typeof:Yl,value:o}},t.createTextSelector=function(o){return{$$typeof:ql,value:o}},t.deferredUpdates=function(o){var a=Pt,d=Kt.transition;try{return Kt.transition=null,Pt=16,o()}finally{Pt=a,Kt.transition=d}},t.discreteUpdates=function(o,a,d,v,S){var A=Pt,z=Kt.transition;try{return Kt.transition=null,Pt=1,o(a,d,v,S)}finally{Pt=A,Kt.transition=z,xt===0&&Zs()}},t.findAllNodes=zh,t.findBoundingRects=function(o,a){if(!B)throw Error(l(363));a=zh(o,a),o=[];for(var d=0;d<a.length;d++)o.push(te(a[d]));for(a=o.length-1;0<a;a--){d=o[a];for(var v=d.x,S=v+d.width,A=d.y,z=A+d.height,G=a-1;0<=G;G--)if(a!==G){var le=o[G],Pe=le.x,Ge=Pe+le.width,ht=le.y,nt=ht+le.height;if(v>=Pe&&A>=ht&&S<=Ge&&z<=nt){o.splice(a,1);break}else if(v!==Pe||d.width!==le.width||nt<A||ht>z){if(!(A!==ht||d.height!==le.height||Ge<v||Pe>S)){Pe>v&&(le.width+=Pe-v,le.x=v),Ge<S&&(le.width=S-Pe),o.splice(a,1);break}}else{ht>A&&(le.height+=ht-A,le.y=A),nt<z&&(le.height=z-ht),o.splice(a,1);break}}}return o},t.findHostInstance=dg,t.findHostInstanceWithNoPortals=function(o){return o=D(o),o=o!==null?Q(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return dg(o)},t.flushControlled=function(o){var a=xt;xt|=1;var d=Kt.transition,v=Pt;try{Kt.transition=null,Pt=1,o()}finally{Pt=v,Kt.transition=d,xt=a,xt===0&&(Zs(),Ni())}},t.flushPassiveEffects=Qr,t.flushSync=ng,t.focusWithin=function(o,a){if(!B)throw Error(l(363));for(o=Nh(o),a=$m(o,a),a=Array.from(a),o=0;o<a.length;){var d=a[o++];if(!de(d)){if(d.tag===5&&Ze(d.stateNode))return!0;for(d=d.child;d!==null;)a.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Pt},t.getFindAllNodesFailureDescription=function(o,a){if(!B)throw Error(l(363));var d=0,v=[];o=[Nh(o),0];for(var S=0;S<o.length;){var A=o[S++],z=o[S++],G=a[z];if((A.tag!==5||!de(A))&&(Oh(A,G)&&(v.push(Fh(G)),z++,z>d&&(d=z)),z<a.length))for(A=A.child;A!==null;)o.push(A,z),A=A.sibling}if(d<a.length){for(o=[];d<a.length;d++)o.push(Fh(a[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return K(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:jx,findFiberByHostInstance:o.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(a.isDisabled||!a.supportsFiber)o=!0;else{try{gl=a.inject(o),Di=a}catch{}o=!!a.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,a,d,v){if(!B)throw Error(l(363));o=zh(o,a);var S=Re(o,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,a){var d=a._getVersion;d=d(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,d]:o.mutableSourceEagerHydrationData.push(a,d)},t.runWithPriority=function(o,a){var d=Pt;try{return Pt=o,a()}finally{Pt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,a,d,v){var S=a.current,A=Nn(),z=br(S);return d=fg(d),a.context===null?a.context=d:a.pendingContext=d,a=Qi(A,z),a.payload={element:o},v=v===void 0?null:v,v!==null&&(a.callback=v),wr(S,a),o=fi(S,z,A),o!==null&&Sl(o,S,z),z},t};Oy.exports=QT;var $T=Oy.exports;const eC=Qx($T);var Fy={exports:{}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(F,j){var Z=F.length;F.push(j);e:for(;0<Z;){var re=Z-1>>>1,Se=F[re];if(0<i(Se,j))F[re]=j,F[Z]=Se,Z=re;else break e}}function t(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var j=F[0],Z=F.pop();if(Z!==j){F[0]=Z;e:for(var re=0,Se=F.length,Ue=Se>>>1;re<Ue;){var ne=2*(re+1)-1,me=F[ne],Ce=ne+1,Me=F[Ce];if(0>i(me,Z))Ce<Se&&0>i(Me,me)?(F[re]=Me,F[Ce]=Z,re=Ce):(F[re]=me,F[ne]=Z,re=ne);else if(Ce<Se&&0>i(Me,Z))F[re]=Me,F[Ce]=Z,re=Ce;else break e}}return j}function i(F,j){var Z=F.sortIndex-j.sortIndex;return Z!==0?Z:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();r.unstable_now=function(){return l.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var j=t(h);j!==null;){if(j.callback===null)n(h);else if(j.startTime<=F)n(h),j.sortIndex=j.expirationTime,e(u,j);else break;j=t(h)}}function b(F){if(M=!1,w(F),!y)if(t(u)!==null)y=!0,K(N);else{var j=t(h);j!==null&&fe(b,j.startTime-F)}}function N(F,j){y=!1,M&&(M=!1,_(O),O=-1),g=!0;var Z=m;try{for(w(j),p=t(u);p!==null&&(!(p.expirationTime>j)||F&&!D());){var re=p.callback;if(typeof re=="function"){p.callback=null,m=p.priorityLevel;var Se=re(p.expirationTime<=j);j=r.unstable_now(),typeof Se=="function"?p.callback=Se:p===t(u)&&n(u),w(j)}else n(u);p=t(u)}if(p!==null)var Ue=!0;else{var ne=t(h);ne!==null&&fe(b,ne.startTime-j),Ue=!1}return Ue}finally{p=null,m=Z,g=!1}}var R=!1,L=null,O=-1,C=5,T=-1;function D(){return!(r.unstable_now()-T<C)}function q(){if(L!==null){var F=r.unstable_now();T=F;var j=!0;try{j=L(!0,F)}finally{j?W():(R=!1,L=null)}}else R=!1}var W;if(typeof E=="function")W=function(){E(q)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,se=Q.port2;Q.port1.onmessage=q,W=function(){se.postMessage(null)}}else W=function(){x(q,0)};function K(F){L=F,R||(R=!0,W())}function fe(F,j){O=x(function(){F(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,K(N))},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(F){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var Z=m;m=j;try{return F()}finally{m=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=m;m=F;try{return j()}finally{m=Z}},r.unstable_scheduleCallback=function(F,j,Z){var re=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,F={id:f++,callback:j,priorityLevel:F,startTime:Z,expirationTime:Se,sortIndex:-1},Z>re?(F.sortIndex=Z,e(h,F),t(u)===null&&F===t(h)&&(M?(_(O),O=-1):M=!0,fe(b,Z-re))):(F.sortIndex=Se,e(u,F),y||g||(y=!0,K(N))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var j=m;return function(){var Z=m;m=j;try{return F.apply(this,arguments)}finally{m=Z}}}})(zy);Fy.exports=zy;var J0=Fy.exports;const Dp={},tC=r=>void Object.assign(Dp,r);function nC(r,e){function t(f,{args:p=[],attach:m,...g},y){let M=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;x=xo(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=Dp[M];if(!_)throw new Error(`R3F: ${M} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=xo(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x.isBufferGeometry?x.__r3f.attach="geometry":x.isMaterial&&(x.__r3f.attach="material")),M!=="inject"&&Wf(x,g),x}function n(f,p){let m=!1;if(p){var g,y;(g=p.__r3f)!=null&&g.attach?Gf(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||xo(p,{}),p.__r3f.parent=f,Vd(p),So(p)}}function i(f,p,m){let g=!1;if(p){var y,M;if((y=p.__r3f)!=null&&y.attach)Gf(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(E=>E!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],g=!0}g||(M=f.__r3f)==null||M.objects.push(p),p.__r3f||xo(p,{}),p.__r3f.parent=f,Vd(p),So(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>l(p,g,m))}function l(f,p,m){if(p){var g,y,M;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(b=>b!==p)),(y=p.__r3f)!=null&&y.attach)tv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&cC(uu(p),p)}const E=(M=p.__r3f)==null?void 0:M.primitive,w=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,w),s(p.children,p,w)}if(delete p.__r3f,w&&p.dispose&&p.type!=="Scene"){const b=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?J0.unstable_scheduleCallback(J0.unstable_IdlePriority,b):b()}So(f)}}function c(f,p,m,g){var y;const M=(y=f.__r3f)==null?void 0:y.parent;if(!M)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||l(M,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(M,x),x.raycast&&x.__r3f.eventCount&&uu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:eC({createInstance:t,removeChild:l,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&l(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:_,...E}=g,{args:w=[],children:b,...N}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((L,O)=>L!==w[O]))return[!0];const R=Xy(f,E,N,!0);return R.changes.length?[!1,R]:null}},commitUpdate(f,[p,m],g,y,M,x){p?c(f,g,M,x):Wf(f,m)},commitMount(f,p,m,g){var y;const M=(y=f.__r3f)!=null?y:{};f.raycast&&M.handlers&&M.eventCount&&uu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>xo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&tv(g,f,m),f.isObject3D&&(f.visible=!1),So(f)},unhideInstance(f,p){var m;const{attach:g,parent:y}=(m=f.__r3f)!=null?m:{};g&&y&&Gf(y,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),So(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():To.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Ht.fun(performance.now)?performance.now:Ht.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Ht.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Ht.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Wf}}var K0,Q0;const Vf=r=>"colorSpace"in r||"outputColorSpace"in r,By=()=>{var r;return(r=Dp.ColorManagement)!=null?r:null},ky=r=>r&&r.isOrthographicCamera,iC=r=>r&&r.hasOwnProperty("current"),ol=typeof window<"u"&&((K0=window.document)!=null&&K0.createElement||((Q0=window.navigator)==null?void 0:Q0.product)==="ReactNative")?Ae.useLayoutEffect:Ae.useEffect;function Hy(r){const e=Ae.useRef(r);return ol(()=>void(e.current=r),[r]),e}function rC({set:r}){return ol(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class Vy extends Ae.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}Vy.getDerivedStateFromError=()=>({error:!0});const Gy="__default",$0=new Map,sC=r=>r&&!!r.memoized&&!!r.changes;function Wy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const va=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function uu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Ht={obj:r=>r===Object(r)&&!Ht.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Ht.str(r)||Ht.num(r)||Ht.boo(r))return r===e;const s=Ht.obj(r);if(s&&n==="reference")return r===e;const l=Ht.arr(r);if(l&&t==="reference")return r===e;if((l||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Ht.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Ht.und(c)){if(l&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function oC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function xo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function Hd(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,l)=>s[l],r),{target:t,key:i}}else return{target:t,key:e}}const ev=/-\d+$/;function Gf(r,e,t){if(Ht.str(t)){if(ev.test(t)){const s=t.replace(ev,""),{target:l,key:c}=Hd(r,s);Array.isArray(l[c])||(l[c]=[])}const{target:n,key:i}=Hd(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function tv(r,e,t){var n,i;if(Ht.str(t)){const{target:s,key:l}=Hd(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[l]:s[l]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Xy(r,{children:e,key:t,ref:n,...i},{children:s,key:l,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let M=0;M<y.length;M++)i.hasOwnProperty(y[M])||p.unshift([y[M],Gy+"remove"])}p.forEach(([y,M])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||Ht.equ(M,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,M,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,M,!1,_]);for(const E in i){const w=i[E];E.startsWith(`${y}-`)&&m.push([E,w,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Wf(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:l,changes:c}=sC(e)?e:Xy(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=l);for(let m=0;m<c.length;m++){let[g,y,M,x]=c[m];if(Vf(r)){const b="srgb",N="srgb-linear";g==="encoding"?(g="colorSpace",y=y===3001?b:N):g==="outputEncoding"&&(g="outputColorSpace",y=y===3001?b:N)}let _=r,E=_[g];if(x.length&&(E=x.reduce((w,b)=>w[b],r),!(E&&E.set))){const[w,...b]=x.reverse();_=b.reverse().reduce((N,R)=>N[R],r),g=w}if(y===Gy+"remove")if(_.constructor){let w=$0.get(_.constructor);w||(w=new _.constructor,$0.set(_.constructor,w)),y=w[g]}else y=0;if(M&&n)y?n.handlers[g]=y:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof Es)){if(Array.isArray(y))E.fromArray?E.fromArray(y):E.set(...y);else if(E.copy&&y&&y.constructor&&E.constructor===y.constructor)E.copy(y);else if(y!==void 0){var h;const w=(h=E)==null?void 0:h.isColor;!w&&E.setScalar?E.setScalar(y):E instanceof Es&&y instanceof Es?E.mask=y.mask:E.set(y),!By()&&s&&!s.linear&&w&&E.convertSRGBToLinear()}}else{var f;if(_[g]=y,(f=_[g])!=null&&f.isTexture&&_[g].format===Bn&&_[g].type===ji&&s){const w=_[g];Vf(w)&&Vf(s.gl)?w.colorSpace=s.gl.outputColorSpace:w.encoding=s.gl.outputEncoding}}So(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=uu(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&Vd(r),r}function So(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function Vd(r){r.onUpdate==null||r.onUpdate(r)}function aC(r,e){r.manual||(ky(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function Kc(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function lC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return To.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return To.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return To.ContinuousEventPriority;default:return To.DefaultEventPriority}}function Yy(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function cC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Yy(t.capturedMap,e,n,i)})}function uC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=va(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const E=va(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var w;E.events.compute==null||E.events.compute(u,E,(w=E.previousRoot)==null?void 0:w.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let M=g.flatMap(y).sort((_,E)=>{const w=va(_.object),b=va(E.object);return!w||!b?_.distance-E.distance:b.events.priority-w.events.priority||_.distance-E.distance}).filter(_=>{const E=Kc(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(M=f.events.filter(M,f));for(const _ of M){let E=_.object;for(;E;){var x;(x=E.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(Kc(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const y of u){const M=va(y.object)||m,{raycaster:x,pointer:_,camera:E,internal:w}=M,b=new U(_.x,_.y,0).unproject(E),N=T=>{var D,q;return(D=(q=w.capturedMap.get(T))==null?void 0:q.has(y.eventObject))!=null?D:!1},R=T=>{const D={intersection:y,target:h.target};w.capturedMap.has(T)?w.capturedMap.get(T).set(y.eventObject,D):w.capturedMap.set(T,new Map([[y.eventObject,D]])),h.target.setPointerCapture(T)},L=T=>{const D=w.capturedMap.get(T);D&&Yy(w.capturedMap,y.eventObject,D,T)};let O={};for(let T in h){let D=h[T];typeof D!="function"&&(O[T]=D)}let C={...y,...O,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:b,ray:x.ray,camera:E,stopPropagation(){const T="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!T||T.has(y.eventObject))&&(C.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(D=>D.eventObject===y.eventObject))){const D=u.slice(0,u.indexOf(y));s([...D,y])}},target:{hasPointerCapture:N,setPointerCapture:R,releasePointerCapture:L},currentTarget:{hasPointerCapture:N,setPointerCapture:R,releasePointerCapture:L},nativeEvent:h};if(p(C),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(Kc(f)),m!=null&&m.eventCount){const y={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function l(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(w=>w.eventObject)),y&&!x.length&&_<=2&&(l(f,m.interaction),p&&p(f)),g&&s(x);function E(w){const b=w.eventObject,N=b.__r3f,R=N==null?void 0:N.handlers;if(N!=null&&N.eventCount)if(g){if(R.onPointerOver||R.onPointerEnter||R.onPointerOut||R.onPointerLeave){const L=Kc(w),O=m.hovered.get(L);O?O.stopped&&w.stopPropagation():(m.hovered.set(L,w),R.onPointerOver==null||R.onPointerOver(w),R.onPointerEnter==null||R.onPointerEnter(w))}R.onPointerMove==null||R.onPointerMove(w)}else{const L=R[u];L?(!y||m.initialHits.includes(b))&&(l(f,m.interaction.filter(O=>!m.initialHits.includes(O))),L(w)):y&&m.initialHits.includes(b)&&l(f,m.interaction.filter(O=>!m.initialHits.includes(O)))}}i(x,f,_,E)}}return{handlePointer:c}}const qy=r=>!!(r!=null&&r.render),Zy=Ae.createContext(null),hC=(r,e)=>{const t=jT((c,u)=>{const h=new U,f=new U,p=new U;function m(_=u().camera,E=f,w=u().size){const{width:b,height:N,top:R,left:L}=w,O=b/N;E.isVector3?p.copy(E):p.set(...E);const C=_.getWorldPosition(h).distanceTo(p);if(ky(_))return{width:b/_.zoom,height:N/_.zoom,top:R,left:L,factor:1,distance:C,aspect:O};{const T=_.fov*Math.PI/180,D=2*Math.tan(T/2)*C,q=D*(b/N);return{width:q,height:D,top:R,left:L,factor:b/q,distance:C,aspect:O}}}let g;const y=_=>c(E=>({performance:{...E.performance,current:_}})),M=new ue;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Rp,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,w,b,N)=>{const R=u().camera,L={width:_,height:E,top:b||0,left:N||0,updateStyle:w};c(O=>({size:L,viewport:{...O.viewport,...m(R,f,L)}}))},setDpr:_=>c(E=>{const w=Wy(_);return{viewport:{...E.viewport,dpr:w,initialDpr:E.viewport.initialDpr||w}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:Ae.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,w)=>{const b=u().internal;return b.priority=b.priority+(E>0?1:0),b.subscribers.push({ref:_,priority:E,store:w}),b.subscribers=b.subscribers.sort((N,R)=>N.priority-R.priority),()=>{const N=u().internal;N!=null&&N.subscribers&&(N.priority=N.priority-(E>0?1:0),N.subscribers=N.subscribers.filter(R=>R.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,l=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,aC(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==l&&(l=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let Qc,fC=new Set,dC=new Set,pC=new Set;function Xf(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function _a(r,e){switch(r){case"before":return Xf(fC,e);case"after":return Xf(dC,e);case"tail":return Xf(pC,e)}}let Yf,qf;function Zf(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Yf=e.internal.subscribers,Qc=0;Qc<Yf.length;Qc++)qf=Yf[Qc],qf.ref.current(qf.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function mC(r){let e=!1,t=!1,n,i,s;function l(h){i=requestAnimationFrame(l),e=!0,n=0,_a("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=Zf(h,s))}if(t=!1,_a("after",h),n===0)return _a("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(l)))}function u(h,f=!0,p,m){if(f&&_a("before",h),p)Zf(h,p,m);else for(const g of r.values())Zf(h,g.store.getState());f&&_a("after",h)}return{loop:l,invalidate:c,advance:u}}function jy(){const r=Ae.useContext(Zy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function Vi(r=t=>t,e){return jy()(r,e)}function Jy(r,e=0){const t=jy(),n=t.getState().internal.subscribe,i=Hy(r);return ol(()=>n(i,e,t),[e,n,t]),null}const Lo=new Map,{invalidate:nv,advance:iv}=mC(Lo),{reconciler:yu,applyProps:_o}=nC(Lo,lC),yo={objects:"shallow",strict:!1},gC=(r,e)=>{const t=typeof r=="function"?r(e):r;return qy(t)?t:new H_({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function vC(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:l,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:l,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:l}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:l,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function _C(r){const e=Lo.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||hC(nv,iv),l=t||yu.createContainer(s,To.ConcurrentRoot,null,!1,null,"",i,null);e||Lo.set(r,{fiber:l,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:y,onCreated:M,shadows:x=!1,linear:_=!1,flat:E=!1,legacy:w=!1,orthographic:b=!1,frameloop:N="always",dpr:R=[1,2],performance:L,raycaster:O,camera:C,onPointerMissed:T}=f,D=s.getState(),q=D.gl;D.gl||D.set({gl:q=gC(p,r)});let W=D.raycaster;W||D.set({raycaster:W=new Ly});const{params:Q,...se}=O||{};if(Ht.equ(se,W,yo)||_o(W,{...se}),Ht.equ(Q,W.params,yo)||_o(W,{params:{...W.params,...Q}}),!D.camera||D.camera===h&&!Ht.equ(h,C,yo)){h=C;const Z=C instanceof Qa,re=Z?C:b?new qi(0,0,0,0,.1,1e3):new Xt(75,0,.1,1e3);Z||(re.position.z=5,C&&(_o(re,C),("aspect"in C||"left"in C||"right"in C||"bottom"in C||"top"in C)&&(re.manual=!0,re.updateProjectionMatrix())),!D.camera&&!(C!=null&&C.rotation)&&re.lookAt(0,0,0)),D.set({camera:re}),W.camera=re}if(!D.scene){let Z;g!=null&&g.isScene?Z=g:(Z=new up,g&&_o(Z,g)),D.set({scene:xo(Z)})}if(!D.xr){var K;const Z=(Ue,ne)=>{const me=s.getState();me.frameloop!=="never"&&iv(Ue,!0,me,ne)},re=()=>{const Ue=s.getState();Ue.gl.xr.enabled=Ue.gl.xr.isPresenting,Ue.gl.xr.setAnimationLoop(Ue.gl.xr.isPresenting?Z:null),Ue.gl.xr.isPresenting||nv(Ue)},Se={connect(){const Ue=s.getState().gl;Ue.xr.addEventListener("sessionstart",re),Ue.xr.addEventListener("sessionend",re)},disconnect(){const Ue=s.getState().gl;Ue.xr.removeEventListener("sessionstart",re),Ue.xr.removeEventListener("sessionend",re)}};typeof((K=q.xr)==null?void 0:K.addEventListener)=="function"&&Se.connect(),D.set({xr:Se})}if(q.shadowMap){const Z=q.shadowMap.enabled,re=q.shadowMap.type;if(q.shadowMap.enabled=!!x,Ht.boo(x))q.shadowMap.type=Sa;else if(Ht.str(x)){var fe;const Se={basic:Sv,percentage:xu,soft:Sa,variance:Ei};q.shadowMap.type=(fe=Se[x])!=null?fe:Sa}else Ht.obj(x)&&Object.assign(q.shadowMap,x);(Z!==q.shadowMap.enabled||re!==q.shadowMap.type)&&(q.shadowMap.needsUpdate=!0)}const F=By();F&&("enabled"in F?F.enabled=!w:"legacyMode"in F&&(F.legacyMode=w)),u||_o(q,{outputEncoding:_?3e3:3001,toneMapping:E?Yi:Wd}),D.legacy!==w&&D.set(()=>({legacy:w})),D.linear!==_&&D.set(()=>({linear:_})),D.flat!==E&&D.set(()=>({flat:E})),p&&!Ht.fun(p)&&!qy(p)&&!Ht.equ(p,q,yo)&&_o(q,p),y&&!D.events.handlers&&D.set({events:y(s)});const j=vC(r,m);return Ht.equ(j,D.size,yo)||D.setSize(j.width,j.height,j.updateStyle,j.top,j.left),R&&D.viewport.dpr!==Wy(R)&&D.setDpr(R),D.frameloop!==N&&D.setFrameloop(N),D.onPointerMissed||D.set({onPointerMissed:T}),L&&!Ht.equ(L,D.performance,yo)&&D.set(Z=>({performance:{...Z.performance,...L}})),c=M,u=!0,this},render(f){return u||this.configure(),yu.updateContainer(Ai.jsx(yC,{store:s,children:f,onCreated:c,rootElement:r}),l,null,()=>{}),s},unmount(){Ky(r)}}}function yC({store:r,children:e,onCreated:t,rootElement:n}){return ol(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),Ai.jsx(Zy.Provider,{value:r,children:e})}function Ky(r,e){const t=Lo.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),yu.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,l,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(l=s.renderLists)==null||l.dispose==null||l.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),oC(i),Lo.delete(r)}catch{}},500)})}}yu.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Ae.version});const jf={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function xC(r){const{handlePointer:e}=uC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(jf).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(l=>({events:{...l.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([l,c])=>{const[u,h]=jf[l];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,l])=>{if(n&&n.connected instanceof HTMLElement){const[c]=jf[s];n.connected.removeEventListener(c,l)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function rv(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function SC({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,l]=Ae.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=Ae.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=Ae.useRef(!1);Ae.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=Ae.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:E,top:w,width:b,height:N,bottom:R,right:L,x:O,y:C}=c.current.element.getBoundingClientRect(),T={left:E,top:w,width:b,height:N,bottom:R,right:L,x:O,y:C};c.current.element instanceof HTMLElement&&n&&(T.height=c.current.element.offsetHeight,T.width=c.current.element.offsetWidth),Object.freeze(T),f.current&&!AC(c.current.lastBounds,T)&&l(c.current.lastBounds=T)};return[_,h?rv(_,h):_,u?rv(_,u):_]},[l,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=Qy(_),M())};return wC(g,!!e),MC(m),Ae.useEffect(()=>{y(),M()},[e,g,m]),Ae.useEffect(()=>y,[]),[x,s,p]}function MC(r){Ae.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function wC(r,e){Ae.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Qy(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Qy(r.parentElement)]}const EC=["x","y","top","bottom","left","right","width","height"],AC=(r,e)=>EC.every(t=>r[t]===e[t]);var bC=Object.defineProperty,TC=Object.defineProperties,CC=Object.getOwnPropertyDescriptors,sv=Object.getOwnPropertySymbols,RC=Object.prototype.hasOwnProperty,PC=Object.prototype.propertyIsEnumerable,ov=(r,e,t)=>e in r?bC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,av=(r,e)=>{for(var t in e||(e={}))RC.call(e,t)&&ov(r,t,e[t]);if(sv)for(var t of sv(e))PC.call(e,t)&&ov(r,t,e[t]);return r},IC=(r,e)=>TC(r,CC(e)),lv,cv;typeof window<"u"&&((lv=window.document)!=null&&lv.createElement||((cv=window.navigator)==null?void 0:cv.product)==="ReactNative")?Ae.useLayoutEffect:Ae.useEffect;function $y(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=$y(n,e,t);if(i)return i;n=n.sibling}}function ex(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const uv=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=uv;return}return uv.apply(this,arguments)};const Up=ex(Ae.createContext(null));class tx extends Ae.Component{render(){return Ae.createElement(Up.Provider,{value:this._reactInternals},this.props.children)}}function LC(){const r=Ae.useContext(Up);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=Ae.useId();return Ae.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=$y(n,!1,s=>{let l=s.memoizedState;for(;l;){if(l.memoizedState===e)return!0;l=l.next}});if(i)return i}},[r,e])}function DC(){const r=LC(),[e]=Ae.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==Up&&!e.has(i)&&e.set(i,Ae.useContext(ex(i)))}t=t.return}return e}function UC(){const r=DC();return Ae.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>Ae.createElement(e,null,Ae.createElement(t.Provider,IC(av({},n),{value:r.get(t)}))),e=>Ae.createElement(tx,av({},e))),[r])}const NC=Ae.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:l=xC,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,onPointerMissed:b,onCreated:N,...R},L){Ae.useMemo(()=>tC(YT),[]);const O=UC(),[C,T]=SC({scroll:!0,debounce:{scroll:50,resize:0},...n}),D=Ae.useRef(null),q=Ae.useRef(null);Ae.useImperativeHandle(L,()=>D.current);const W=Hy(b),[Q,se]=Ae.useState(!1),[K,fe]=Ae.useState(!1);if(Q)throw Q;if(K)throw K;const F=Ae.useRef(null);ol(()=>{const Z=D.current;T.width>0&&T.height>0&&Z&&(F.current||(F.current=_C(Z)),F.current.configure({gl:s,events:l,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:M,performance:x,raycaster:_,camera:E,scene:w,size:T,onPointerMissed:(...re)=>W.current==null?void 0:W.current(...re),onCreated:re=>{re.events.connect==null||re.events.connect(c?iC(c)?c.current:c:q.current),u&&re.setEvents({compute:(Se,Ue)=>{const ne=Se[u+"X"],me=Se[u+"Y"];Ue.pointer.set(ne/Ue.size.width*2-1,-(me/Ue.size.height)*2+1),Ue.raycaster.setFromCamera(Ue.pointer,Ue.camera)}}),N==null||N(re)}}),F.current.render(Ai.jsx(O,{children:Ai.jsx(Vy,{set:fe,children:Ai.jsx(Ae.Suspense,{fallback:Ai.jsx(rC,{set:se}),children:e??null})})})))}),Ae.useEffect(()=>{const Z=D.current;if(Z)return()=>Ky(Z)},[]);const j=c?"none":"auto";return Ai.jsx("div",{ref:q,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:j,...i},...R,children:Ai.jsx("div",{ref:C,style:{width:"100%",height:"100%"},children:Ai.jsx("canvas",{ref:D,style:{display:"block"},children:t})})})}),sR=Ae.forwardRef(function(e,t){return Ai.jsx(tx,{children:Ai.jsx(NC,{...e,ref:t})})});function Do(){return Do=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Do.apply(null,arguments)}const al=new U,Np=new U,OC=new U,hv=new ue;function FC(r,e,t){const n=al.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]}function zC(r,e){const t=al.setFromMatrixPosition(r.matrixWorld),n=Np.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(OC);return i.angleTo(s)>Math.PI/2}function BC(r,e,t,n){const i=al.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),hv.set(s.x,s.y),t.setFromCamera(hv,e);const l=t.intersectObjects(n,!0);if(l.length){const c=l[0].distance;return i.distanceTo(t.ray.origin)<c}return!0}function kC(r,e){if(e instanceof qi)return e.zoom;if(e instanceof Xt){const t=al.setFromMatrixPosition(r.matrixWorld),n=Np.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function HC(r,e,t){if(e instanceof Xt||e instanceof qi){const n=al.setFromMatrixPosition(r.matrixWorld),i=Np.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),l=(t[1]-t[0])/(e.far-e.near),c=t[1]-l*e.far;return Math.round(l*s+c)}}const Gd=r=>Math.abs(r)<1e-10?0:r;function nx(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=Gd(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const VC=(r=>e=>nx(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),GC=(r=>(e,t)=>nx(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function WC(r){return r&&typeof r=="object"&&"current"in r}const oR=Ae.forwardRef(({children:r,eps:e=.001,style:t,className:n,prepend:i,center:s,fullscreen:l,portal:c,distanceFactor:u,sprite:h=!1,transform:f=!1,occlude:p,onOcclude:m,castShadow:g,receiveShadow:y,material:M,geometry:x,zIndexRange:_=[16777271,0],calculatePosition:E=FC,as:w="div",wrapperClass:b,pointerEvents:N="auto",...R},L)=>{const{gl:O,camera:C,scene:T,size:D,raycaster:q,events:W,viewport:Q}=Vi(),[se]=Ae.useState(()=>document.createElement(w)),K=Ae.useRef(),fe=Ae.useRef(null),F=Ae.useRef(0),j=Ae.useRef([0,0]),Z=Ae.useRef(null),re=Ae.useRef(null),Se=(c==null?void 0:c.current)||W.connected||O.domElement.parentNode,Ue=Ae.useRef(null),ne=Ae.useRef(!1),me=Ae.useMemo(()=>p&&p!=="blending"||Array.isArray(p)&&p.length&&WC(p[0]),[p]);Ae.useLayoutEffect(()=>{const We=O.domElement;p&&p==="blending"?(We.style.zIndex=`${Math.floor(_[0]/2)}`,We.style.position="absolute",We.style.pointerEvents="none"):(We.style.zIndex=null,We.style.position=null,We.style.pointerEvents=null)},[p]),Ae.useLayoutEffect(()=>{if(fe.current){const We=K.current=$x(se);if(T.updateMatrixWorld(),f)se.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const H=E(fe.current,C,D);se.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${H[0]}px,${H[1]}px,0);transform-origin:0 0;`}return Se&&(i?Se.prepend(se):Se.appendChild(se)),()=>{Se&&Se.removeChild(se),We.unmount()}}},[Se,f]),Ae.useLayoutEffect(()=>{b&&(se.className=b)},[b]);const Ce=Ae.useMemo(()=>f?{position:"absolute",top:0,left:0,width:D.width,height:D.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...l&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...t},[t,s,l,D,f]),Me=Ae.useMemo(()=>({position:"absolute",pointerEvents:N}),[N]);Ae.useLayoutEffect(()=>{if(ne.current=!1,f){var We;(We=K.current)==null||We.render(Ae.createElement("div",{ref:Z,style:Ce},Ae.createElement("div",{ref:re,style:Me},Ae.createElement("div",{ref:L,className:n,style:t,children:r}))))}else{var H;(H=K.current)==null||H.render(Ae.createElement("div",{ref:L,style:Ce,className:n,children:r}))}});const $e=Ae.useRef(!0);Jy(We=>{if(fe.current){C.updateMatrixWorld(),fe.current.updateWorldMatrix(!0,!1);const H=f?j.current:E(fe.current,C,D);if(f||Math.abs(F.current-C.zoom)>e||Math.abs(j.current[0]-H[0])>e||Math.abs(j.current[1]-H[1])>e){const he=zC(fe.current,C);let ce=!1;me&&(Array.isArray(p)?ce=p.map(Le=>Le.current):p!=="blending"&&(ce=[T]));const we=$e.current;if(ce){const Le=BC(fe.current,C,q,ce);$e.current=Le&&!he}else $e.current=!he;we!==$e.current&&(m?m(!$e.current):se.style.display=$e.current?"block":"none");const _e=Math.floor(_[0]/2),Ee=p?me?[_[0],_e]:[_e-1,0]:_;if(se.style.zIndex=`${HC(fe.current,C,Ee)}`,f){const[Le,Oe]=[D.width/2,D.height/2],et=C.projectionMatrix.elements[5]*Oe,{isOrthographicCamera:B,top:P,left:te,bottom:ge,right:de}=C,ye=VC(C.matrixWorldInverse),Ze=B?`scale(${et})translate(${Gd(-(de+te)/2)}px,${Gd((P+ge)/2)}px)`:`translateZ(${et}px)`;let Re=fe.current.matrixWorld;h&&(Re=C.matrixWorldInverse.clone().transpose().copyPosition(Re).scale(fe.current.scale),Re.elements[3]=Re.elements[7]=Re.elements[11]=0,Re.elements[15]=1),se.style.width=D.width+"px",se.style.height=D.height+"px",se.style.perspective=B?"":`${et}px`,Z.current&&re.current&&(Z.current.style.transform=`${Ze}${ye}translate(${Le}px,${Oe}px)`,re.current.style.transform=GC(Re,1/((u||10)/400)))}else{const Le=u===void 0?1:kC(fe.current,C)*u;se.style.transform=`translate3d(${H[0]}px,${H[1]}px,0) scale(${Le})`}j.current=H,F.current=C.zoom}}if(!me&&Ue.current&&!ne.current)if(f){if(Z.current){const H=Z.current.children[0];if(H!=null&&H.clientWidth&&H!=null&&H.clientHeight){const{isOrthographicCamera:he}=C;if(he||x)R.scale&&(Array.isArray(R.scale)?R.scale instanceof U?Ue.current.scale.copy(R.scale.clone().divideScalar(1)):Ue.current.scale.set(1/R.scale[0],1/R.scale[1],1/R.scale[2]):Ue.current.scale.setScalar(1/R.scale));else{const ce=(u||10)/400,we=H.clientWidth*ce,_e=H.clientHeight*ce;Ue.current.scale.set(we,_e,1)}ne.current=!0}}}else{const H=se.children[0];if(H!=null&&H.clientWidth&&H!=null&&H.clientHeight){const he=1/Q.factor,ce=H.clientWidth*he,we=H.clientHeight*he;Ue.current.scale.set(ce,we,1),ne.current=!0}Ue.current.lookAt(We.camera.position)}});const ot=Ae.useMemo(()=>({vertexShader:f?void 0:`
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
      `}),[f]);return Ae.createElement("group",Do({},R,{ref:fe}),p&&!me&&Ae.createElement("mesh",{castShadow:g,receiveShadow:y,ref:Ue},x||Ae.createElement("planeGeometry",null),M||Ae.createElement("shaderMaterial",{side:Ti,vertexShader:ot.vertexShader,fragmentShader:ot.fragmentShader})))}),ix=parseInt(Za.replace(/\D+/g,"")),rx=ix>=125?"uv1":"uv2";var XC=Object.defineProperty,YC=(r,e,t)=>e in r?XC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,qC=(r,e,t)=>(YC(r,e+"",t),t);class ZC{constructor(){qC(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}var jC=Object.defineProperty,JC=(r,e,t)=>e in r?jC(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,it=(r,e,t)=>(JC(r,typeof e!="symbol"?e+"":e,t),t);const $c=new Is,fv=new cr,KC=Math.cos(70*(Math.PI/180)),dv=(r,e)=>(r%e+e)%e;let QC=class extends ZC{constructor(e,t){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new U),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN}),it(this,"touches",{ONE:ds.ROTATE,TWO:ds.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=V=>{let ve=dv(V,2*Math.PI),k=f.phi;k<0&&(k+=2*Math.PI),ve<0&&(ve+=2*Math.PI);let xe=Math.abs(ve-k);2*Math.PI-xe<xe&&(ve<k?ve+=2*Math.PI:k+=2*Math.PI),p.phi=ve-k,n.update()},this.setAzimuthalAngle=V=>{let ve=dv(V,2*Math.PI),k=f.theta;k<0&&(k+=2*Math.PI),ve<0&&(ve+=2*Math.PI);let xe=Math.abs(ve-k);2*Math.PI-xe<xe&&(ve<k?ve+=2*Math.PI:k+=2*Math.PI),p.theta=ve-k,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=V=>{V.addEventListener("keydown",De),this._domElementKeyEvents=V},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),u=c.NONE},this.update=(()=>{const V=new U,ve=new U(0,1,0),k=new Pn().setFromUnitVectors(e.up,ve),xe=k.clone().invert(),oe=new U,pe=new Pn,be=2*Math.PI;return function(){const Mt=n.object.position;k.setFromUnitVectors(e.up,ve),xe.copy(k).invert(),V.copy(Mt).sub(n.target),V.applyQuaternion(k),f.setFromVector3(V),n.autoRotate&&u===c.NONE&&Q(q()),n.enableDamping?(f.theta+=p.theta*n.dampingFactor,f.phi+=p.phi*n.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let bt=n.minAzimuthAngle,Nt=n.maxAzimuthAngle;isFinite(bt)&&isFinite(Nt)&&(bt<-Math.PI?bt+=be:bt>Math.PI&&(bt-=be),Nt<-Math.PI?Nt+=be:Nt>Math.PI&&(Nt-=be),bt<=Nt?f.theta=Math.max(bt,Math.min(Nt,f.theta)):f.theta=f.theta>(bt+Nt)/2?Math.max(bt,f.theta):Math.min(Nt,f.theta)),f.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,f.phi)),f.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.zoomToCursor&&C||n.object.isOrthographicCamera?f.radius=Ue(f.radius):f.radius=Ue(f.radius*m),V.setFromSpherical(f),V.applyQuaternion(xe),Mt.copy(n.target).add(V),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let wt=!1;if(n.zoomToCursor&&C){let on=null;if(n.object instanceof Xt&&n.object.isPerspectiveCamera){const an=V.length();on=Ue(an*m);const Vn=an-on;n.object.position.addScaledVector(L,Vn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const an=new U(O.x,O.y,0);an.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix(),wt=!0;const Vn=new U(O.x,O.y,0);Vn.unproject(n.object),n.object.position.sub(Vn).add(an),n.object.updateMatrixWorld(),on=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;on!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(on).add(n.object.position):($c.origin.copy(n.object.position),$c.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($c.direction))<KC?e.lookAt(n.target):(fv.setFromNormalAndCoplanarPoint(n.object.up,n.target),$c.intersectPlane(fv,n.target))))}else n.object instanceof qi&&n.object.isOrthographicCamera&&(wt=m!==1,wt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix()));return m=1,C=!1,wt||oe.distanceToSquared(n.object.position)>h||8*(1-pe.dot(n.object.quaternion))>h?(n.dispatchEvent(i),oe.copy(n.object.position),pe.copy(n.object.quaternion),wt=!1,!0):!1}})(),this.connect=V=>{n.domElement=V,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",Xe),n.domElement.addEventListener("pointerdown",te),n.domElement.addEventListener("pointercancel",de),n.domElement.addEventListener("wheel",Re)},this.dispose=()=>{var V,ve,k,xe,oe,pe;n.domElement&&(n.domElement.style.touchAction="auto"),(V=n.domElement)==null||V.removeEventListener("contextmenu",Xe),(ve=n.domElement)==null||ve.removeEventListener("pointerdown",te),(k=n.domElement)==null||k.removeEventListener("pointercancel",de),(xe=n.domElement)==null||xe.removeEventListener("wheel",Re),(oe=n.domElement)==null||oe.ownerDocument.removeEventListener("pointermove",ge),(pe=n.domElement)==null||pe.ownerDocument.removeEventListener("pointerup",de),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",De)};const n=this,i={type:"change"},s={type:"start"},l={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const h=1e-6,f=new kd,p=new kd;let m=1;const g=new U,y=new ue,M=new ue,x=new ue,_=new ue,E=new ue,w=new ue,b=new ue,N=new ue,R=new ue,L=new U,O=new ue;let C=!1;const T=[],D={};function q(){return 2*Math.PI/60/60*n.autoRotateSpeed}function W(){return Math.pow(.95,n.zoomSpeed)}function Q(V){n.reverseOrbit||n.reverseHorizontalOrbit?p.theta+=V:p.theta-=V}function se(V){n.reverseOrbit||n.reverseVerticalOrbit?p.phi+=V:p.phi-=V}const K=(()=>{const V=new U;return function(k,xe){V.setFromMatrixColumn(xe,0),V.multiplyScalar(-k),g.add(V)}})(),fe=(()=>{const V=new U;return function(k,xe){n.screenSpacePanning===!0?V.setFromMatrixColumn(xe,1):(V.setFromMatrixColumn(xe,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(k),g.add(V)}})(),F=(()=>{const V=new U;return function(k,xe){const oe=n.domElement;if(oe&&n.object instanceof Xt&&n.object.isPerspectiveCamera){const pe=n.object.position;V.copy(pe).sub(n.target);let be=V.length();be*=Math.tan(n.object.fov/2*Math.PI/180),K(2*k*be/oe.clientHeight,n.object.matrix),fe(2*xe*be/oe.clientHeight,n.object.matrix)}else oe&&n.object instanceof qi&&n.object.isOrthographicCamera?(K(k*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),fe(xe*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function j(V){n.object instanceof Xt&&n.object.isPerspectiveCamera||n.object instanceof qi&&n.object.isOrthographicCamera?m=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(V){j(m/V)}function re(V){j(m*V)}function Se(V){if(!n.zoomToCursor||!n.domElement)return;C=!0;const ve=n.domElement.getBoundingClientRect(),k=V.clientX-ve.left,xe=V.clientY-ve.top,oe=ve.width,pe=ve.height;O.x=k/oe*2-1,O.y=-(xe/pe)*2+1,L.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ue(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function ne(V){y.set(V.clientX,V.clientY)}function me(V){Se(V),b.set(V.clientX,V.clientY)}function Ce(V){_.set(V.clientX,V.clientY)}function Me(V){M.set(V.clientX,V.clientY),x.subVectors(M,y).multiplyScalar(n.rotateSpeed);const ve=n.domElement;ve&&(Q(2*Math.PI*x.x/ve.clientHeight),se(2*Math.PI*x.y/ve.clientHeight)),y.copy(M),n.update()}function $e(V){N.set(V.clientX,V.clientY),R.subVectors(N,b),R.y>0?Z(W()):R.y<0&&re(W()),b.copy(N),n.update()}function ot(V){E.set(V.clientX,V.clientY),w.subVectors(E,_).multiplyScalar(n.panSpeed),F(w.x,w.y),_.copy(E),n.update()}function We(V){Se(V),V.deltaY<0?re(W()):V.deltaY>0&&Z(W()),n.update()}function H(V){let ve=!1;switch(V.code){case n.keys.UP:F(0,n.keyPanSpeed),ve=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),ve=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),ve=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),ve=!0;break}ve&&(V.preventDefault(),n.update())}function he(){if(T.length==1)y.set(T[0].pageX,T[0].pageY);else{const V=.5*(T[0].pageX+T[1].pageX),ve=.5*(T[0].pageY+T[1].pageY);y.set(V,ve)}}function ce(){if(T.length==1)_.set(T[0].pageX,T[0].pageY);else{const V=.5*(T[0].pageX+T[1].pageX),ve=.5*(T[0].pageY+T[1].pageY);_.set(V,ve)}}function we(){const V=T[0].pageX-T[1].pageX,ve=T[0].pageY-T[1].pageY,k=Math.sqrt(V*V+ve*ve);b.set(0,k)}function _e(){n.enableZoom&&we(),n.enablePan&&ce()}function Ee(){n.enableZoom&&we(),n.enableRotate&&he()}function Le(V){if(T.length==1)M.set(V.pageX,V.pageY);else{const k=ut(V),xe=.5*(V.pageX+k.x),oe=.5*(V.pageY+k.y);M.set(xe,oe)}x.subVectors(M,y).multiplyScalar(n.rotateSpeed);const ve=n.domElement;ve&&(Q(2*Math.PI*x.x/ve.clientHeight),se(2*Math.PI*x.y/ve.clientHeight)),y.copy(M)}function Oe(V){if(T.length==1)E.set(V.pageX,V.pageY);else{const ve=ut(V),k=.5*(V.pageX+ve.x),xe=.5*(V.pageY+ve.y);E.set(k,xe)}w.subVectors(E,_).multiplyScalar(n.panSpeed),F(w.x,w.y),_.copy(E)}function et(V){const ve=ut(V),k=V.pageX-ve.x,xe=V.pageY-ve.y,oe=Math.sqrt(k*k+xe*xe);N.set(0,oe),R.set(0,Math.pow(N.y/b.y,n.zoomSpeed)),Z(R.y),b.copy(N)}function B(V){n.enableZoom&&et(V),n.enablePan&&Oe(V)}function P(V){n.enableZoom&&et(V),n.enableRotate&&Le(V)}function te(V){var ve,k;n.enabled!==!1&&(T.length===0&&((ve=n.domElement)==null||ve.ownerDocument.addEventListener("pointermove",ge),(k=n.domElement)==null||k.ownerDocument.addEventListener("pointerup",de)),vt(V),V.pointerType==="touch"?ct(V):ye(V))}function ge(V){n.enabled!==!1&&(V.pointerType==="touch"?Te(V):Ze(V))}function de(V){var ve,k,xe;at(V),T.length===0&&((ve=n.domElement)==null||ve.releasePointerCapture(V.pointerId),(k=n.domElement)==null||k.ownerDocument.removeEventListener("pointermove",ge),(xe=n.domElement)==null||xe.ownerDocument.removeEventListener("pointerup",de)),n.dispatchEvent(l),u=c.NONE}function ye(V){let ve;switch(V.button){case 0:ve=n.mouseButtons.LEFT;break;case 1:ve=n.mouseButtons.MIDDLE;break;case 2:ve=n.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case fs.DOLLY:if(n.enableZoom===!1)return;me(V),u=c.DOLLY;break;case fs.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;Ce(V),u=c.PAN}else{if(n.enableRotate===!1)return;ne(V),u=c.ROTATE}break;case fs.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;ne(V),u=c.ROTATE}else{if(n.enablePan===!1)return;Ce(V),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function Ze(V){if(n.enabled!==!1)switch(u){case c.ROTATE:if(n.enableRotate===!1)return;Me(V);break;case c.DOLLY:if(n.enableZoom===!1)return;$e(V);break;case c.PAN:if(n.enablePan===!1)return;ot(V);break}}function Re(V){n.enabled===!1||n.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(V.preventDefault(),n.dispatchEvent(s),We(V),n.dispatchEvent(l))}function De(V){n.enabled===!1||n.enablePan===!1||H(V)}function ct(V){switch(ze(V),T.length){case 1:switch(n.touches.ONE){case ds.ROTATE:if(n.enableRotate===!1)return;he(),u=c.TOUCH_ROTATE;break;case ds.PAN:if(n.enablePan===!1)return;ce(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(n.touches.TWO){case ds.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(),u=c.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&n.dispatchEvent(s)}function Te(V){switch(ze(V),u){case c.TOUCH_ROTATE:if(n.enableRotate===!1)return;Le(V),n.update();break;case c.TOUCH_PAN:if(n.enablePan===!1)return;Oe(V),n.update();break;case c.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(V),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(V),n.update();break;default:u=c.NONE}}function Xe(V){n.enabled!==!1&&V.preventDefault()}function vt(V){T.push(V)}function at(V){delete D[V.pointerId];for(let ve=0;ve<T.length;ve++)if(T[ve].pointerId==V.pointerId){T.splice(ve,1);return}}function ze(V){let ve=D[V.pointerId];ve===void 0&&(ve=new ue,D[V.pointerId]=ve),ve.set(V.pageX,V.pageY)}function ut(V){const ve=V.pointerId===T[0].pointerId?T[1]:T[0];return D[ve.pointerId]}this.dollyIn=(V=W())=>{re(V),n.update()},this.dollyOut=(V=W())=>{Z(V),n.update()},this.getScale=()=>m,this.setScale=V=>{j(V),n.update()},this.getZoomScale=()=>W(),t!==void 0&&this.connect(t),this.update()}};const pv=new vn,eu=new U;class Op extends Tp{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new _u(t,6,1);return this.setAttribute("instanceStart",new ri(n,3,0)),this.setAttribute("instanceEnd",new ri(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new _u(n,t*2,1);return this.setAttribute("instanceColorStart",new ri(i,t,0)),this.setAttribute("instanceColorEnd",new ri(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),pv.setFromBufferAttribute(t),this.boundingBox.union(pv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)eu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(eu)),eu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(eu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class sx extends Op{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Fp extends _i{constructor(e){super({type:"LineMaterial",uniforms:pu.clone(pu.merge([Fe.common,Fe.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ue(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${ix>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Jf=new At,mv=new U,gv=new U,xn=new At,Sn=new At,ki=new At,Kf=new U,Qf=new st,Mn=new Dy,vv=new U,tu=new vn,nu=new _n,Hi=new At;let Gi,bs;function _v(r,e,t){return Hi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Hi.multiplyScalar(1/Hi.w),Hi.x=bs/t.width,Hi.y=bs/t.height,Hi.applyMatrix4(r.projectionMatrixInverse),Hi.multiplyScalar(1/Hi.w),Math.abs(Math.max(Hi.x,Hi.y))}function $C(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,l=Math.min(n.instanceCount,i.count);for(let c=0,u=l;c<u;c++){Mn.start.fromBufferAttribute(i,c),Mn.end.fromBufferAttribute(s,c),Mn.applyMatrix4(t);const h=new U,f=new U;Gi.distanceSqToSegment(Mn.start,Mn.end,f,h),f.distanceTo(h)<bs*.5&&e.push({point:f,pointOnLine:h,distance:Gi.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[rx]:null})}}function eR(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,l=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Gi.at(1,ki),ki.w=1,ki.applyMatrix4(e.matrixWorldInverse),ki.applyMatrix4(n),ki.multiplyScalar(1/ki.w),ki.x*=s.x/2,ki.y*=s.y/2,ki.z=0,Kf.copy(ki),Qf.multiplyMatrices(e.matrixWorldInverse,l);for(let m=0,g=f;m<g;m++){if(xn.fromBufferAttribute(u,m),Sn.fromBufferAttribute(h,m),xn.w=1,Sn.w=1,xn.applyMatrix4(Qf),Sn.applyMatrix4(Qf),xn.z>p&&Sn.z>p)continue;if(xn.z>p){const w=xn.z-Sn.z,b=(xn.z-p)/w;xn.lerp(Sn,b)}else if(Sn.z>p){const w=Sn.z-xn.z,b=(Sn.z-p)/w;Sn.lerp(xn,b)}xn.applyMatrix4(n),Sn.applyMatrix4(n),xn.multiplyScalar(1/xn.w),Sn.multiplyScalar(1/Sn.w),xn.x*=s.x/2,xn.y*=s.y/2,Sn.x*=s.x/2,Sn.y*=s.y/2,Mn.start.copy(xn),Mn.start.z=0,Mn.end.copy(Sn),Mn.end.z=0;const M=Mn.closestPointToPointParameter(Kf,!0);Mn.at(M,vv);const x=E_.lerp(xn.z,Sn.z,M),_=x>=-1&&x<=1,E=Kf.distanceTo(vv)<bs*.5;if(_&&E){Mn.start.fromBufferAttribute(u,m),Mn.end.fromBufferAttribute(h,m),Mn.start.applyMatrix4(l),Mn.end.applyMatrix4(l);const w=new U,b=new U;Gi.distanceSqToSegment(Mn.start,Mn.end,b,w),t.push({point:b,pointOnLine:w,distance:Gi.origin.distanceTo(b),object:r,face:null,faceIndex:m,uv:null,[rx]:null})}}}class ox extends $t{constructor(e=new Op,t=new Fp({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let l=0,c=0,u=t.count;l<u;l++,c+=2)mv.fromBufferAttribute(t,l),gv.fromBufferAttribute(n,l),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+mv.distanceTo(gv);const s=new _u(i,2,1);return e.setAttribute("instanceDistanceStart",new ri(s,1,0)),e.setAttribute("instanceDistanceEnd",new ri(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Gi=e.ray;const l=this.matrixWorld,c=this.geometry,u=this.material;bs=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),nu.copy(c.boundingSphere).applyMatrix4(l);let h;if(n)h=bs*.5;else{const p=Math.max(i.near,nu.distanceToPoint(Gi.origin));h=_v(i,p,u.resolution)}if(nu.radius+=h,Gi.intersectsSphere(nu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),tu.copy(c.boundingBox).applyMatrix4(l);let f;if(n)f=bs*.5;else{const p=Math.max(i.near,tu.distanceToPoint(Gi.origin));f=_v(i,p,u.resolution)}tu.expandByScalar(f),Gi.intersectsBox(tu)!==!1&&(n?$C(this,t):eR(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Jf),this.material.uniforms.resolution.value.set(Jf.z,Jf.w))}}class tR extends ox{constructor(e=new sx,t=new Fp({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const lR=Ae.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:l,dashed:c,...u},h){var f,p;const m=Vi(_=>_.size),g=Ae.useMemo(()=>l?new ox:new tR,[l]),[y]=Ae.useState(()=>new Fp),M=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=Ae.useMemo(()=>{const _=l?new Op:new sx,E=e.map(w=>{const b=Array.isArray(w);return w instanceof U||w instanceof At?[w.x,w.y,w.z]:w instanceof ue?[w.x,w.y,0]:b&&w.length===3?[w[0],w[1],w[2]]:b&&w.length===2?[w[0],w[1],0]:w});if(_.setPositions(E.flat()),n){t=16777215;const w=n.map(b=>b instanceof Ve?b.toArray():b);_.setColors(w.flat(),M)}return _},[e,l,n,M]);return Ae.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),Ae.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),Ae.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),Ae.createElement("primitive",Do({object:g,ref:h},u),Ae.createElement("primitive",{object:x,attach:"geometry"}),Ae.createElement("primitive",Do({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:M===4},u)))}),cR=Ae.forwardRef(({makeDefault:r,camera:e,regress:t,domElement:n,enableDamping:i=!0,keyEvents:s=!1,onChange:l,onStart:c,onEnd:u,...h},f)=>{const p=Vi(R=>R.invalidate),m=Vi(R=>R.camera),g=Vi(R=>R.gl),y=Vi(R=>R.events),M=Vi(R=>R.setEvents),x=Vi(R=>R.set),_=Vi(R=>R.get),E=Vi(R=>R.performance),w=e||m,b=n||y.connected||g.domElement,N=Ae.useMemo(()=>new QC(w),[w]);return Jy(()=>{N.enabled&&N.update()},-1),Ae.useEffect(()=>(s&&N.connect(s===!0?b:s),N.connect(b),()=>void N.dispose()),[s,b,t,N,p]),Ae.useEffect(()=>{const R=C=>{p(),t&&E.regress(),l&&l(C)},L=C=>{c&&c(C)},O=C=>{u&&u(C)};return N.addEventListener("change",R),N.addEventListener("start",L),N.addEventListener("end",O),()=>{N.removeEventListener("start",L),N.removeEventListener("end",O),N.removeEventListener("change",R)}},[l,c,u,N,p,M]),Ae.useEffect(()=>{if(r){const R=_().controls;return x({controls:N}),()=>x({controls:R})}},[r,N]),Ae.createElement("primitive",Do({ref:f,object:N,enableDamping:i},h))});export{ed as A,kn as B,sR as C,Ti as D,mr as F,oR as H,lR as L,cR as O,Pn as Q,U as V,Wd as a,Vi as b,Jy as u};
