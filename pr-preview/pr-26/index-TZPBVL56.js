var g={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var ad="160";var hv=0,tm=1,uv=2;var Ig=1,cd=2,Ci=3,pn=0,$e=1,Xn=2;var ir=0,Fs=1,em=2,nm=3,im=4,dv=5,Nr=100,fv=101,pv=102,rm=103,sm=104,mv=200,gv=201,xv=202,yv=203,wu=204,Eu=205,_v=206,vv=207,bv=208,Mv=209,Sv=210,wv=211,Ev=212,Tv=213,Av=214,Cv=0,Rv=1,Iv=2,Fc=3,Lv=4,Pv=5,Uv=6,Dv=7,ld=0,Nv=1,Ov=2,rr=0,zv=1,Fv=2,kv=3,Bv=4,Vv=5,Hv=6;var Lg=300,Hs=301,Gs=302,Tu=303,Au=304,cl=306,Cu=1e3,qn=1001,Ru=1002,nn=1003,om=1004;var qh=1005;var Pn=1006,Gv=1007;var jo=1008;var sr=1009,Wv=1010,Xv=1011,hd=1012,Pg=1013,er=1014,nr=1015,Jo=1016,Ug=1017,Dg=1018,Fr=1020,qv=1021,$n=1023,$v=1024,Yv=1025,kr=1026,Ws=1027,jv=1028,Ng=1029,Jv=1030,Og=1031,zg=1033,$h=33776,Yh=33777,jh=33778,Jh=33779,am=35840,cm=35841,lm=35842,hm=35843,Fg=36196,um=37492,dm=37496,fm=37808,pm=37809,mm=37810,gm=37811,xm=37812,ym=37813,_m=37814,vm=37815,bm=37816,Mm=37817,Sm=37818,wm=37819,Em=37820,Tm=37821,Zh=36492,Am=36494,Cm=36495,Zv=36283,Rm=36284,Im=36285,Lm=36286;var kc=2300,Bc=2301,Kh=2302,Pm=2400,Um=2401,Dm=2402;var kg=3e3,Br=3001,Kv=3200,Qv=3201,Bg=0,tb=1,Un="",ke="srgb",Li="srgb-linear",ud="display-p3",ll="display-p3-linear",Vc="linear",ae="srgb",Hc="rec709",Gc="p3";var _s=7680;var Nm=519,eb=512,nb=513,ib=514,Vg=515,rb=516,sb=517,ob=518,ab=519,Om=35044;var zm="300 es",Iu=1035,Ri=2e3,Wc=2001,or=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fm=1234567,ks=Math.PI/180,Zo=180/Math.PI;function Js(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function rn(n,t,e){return Math.max(t,Math.min(e,n))}function dd(n,t){return(n%t+t)%t}function cb(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function lb(n,t,e){return n!==t?(e-n)/(t-n):0}function qo(n,t,e){return(1-e)*n+e*t}function hb(n,t,e,i){return qo(n,t,1-Math.exp(-e*i))}function ub(n,t=1){return t-Math.abs(dd(n,t*2)-t)}function db(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fb(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function pb(n,t){return n+Math.floor(Math.random()*(t-n+1))}function mb(n,t){return n+Math.random()*(t-n)}function gb(n){return n*(.5-Math.random())}function xb(n){n!==void 0&&(Fm=n);let t=Fm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yb(n){return n*ks}function _b(n){return n*Zo}function Lu(n){return(n&n-1)===0&&n!==0}function vb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bb(n,t,e,i,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),x=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*x,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*x,o*l);break;case"ZYZ":n.set(c*x,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ns(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var hl={DEG2RAD:ks,RAD2DEG:Zo,generateUUID:Js,clamp:rn,euclideanModulo:dd,mapLinear:cb,inverseLerp:lb,lerp:qo,damp:hb,pingpong:ub,smoothstep:db,smootherstep:fb,randInt:pb,randFloat:mb,randFloatSpread:gb,seededRandom:xb,degToRad:yb,radToDeg:_b,isPowerOfTwo:Lu,ceilPowerOfTwo:vb,floorPowerOfTwo:Xc,setQuaternionFromProperEuler:bb,normalize:tn,denormalize:Ns},Yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class n{constructor(t,e,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],x=i[8],y=r[0],m=r[3],p=r[6],v=r[1],_=r[4],S=r[7],A=r[2],C=r[5],R=r[8];return s[0]=a*y+o*v+c*A,s[3]=a*m+o*_+c*C,s[6]=a*p+o*S+c*R,s[1]=l*y+h*v+u*A,s[4]=l*m+h*_+u*C,s[7]=l*p+h*S+u*R,s[2]=d*y+f*v+x*A,s[5]=d*m+f*_+x*C,s[8]=d*p+f*S+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,x=e*u+i*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(r*l-h*i)*y,t[2]=(o*i-r*a)*y,t[3]=d*y,t[4]=(h*e-r*c)*y,t[5]=(r*s-o*e)*y,t[6]=f*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qh.makeScale(t,e)),this}rotate(t){return this.premultiply(Qh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qh=new Ht;function Hg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mb(){let n=qc("canvas");return n.style.display="block",n}var km={};function $o(n){n in km||(km[n]=!0,console.warn(n))}var Bm=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vm=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uc={[Li]:{transfer:Vc,primaries:Hc,toReference:n=>n,fromReference:n=>n},[ke]:{transfer:ae,primaries:Hc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ll]:{transfer:Vc,primaries:Gc,toReference:n=>n.applyMatrix3(Vm),fromReference:n=>n.applyMatrix3(Bm)},[ud]:{transfer:ae,primaries:Gc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vm),fromReference:n=>n.applyMatrix3(Bm).convertLinearToSRGB()}},Sb=new Set([Li,ll]),Qt={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=uc[t].toReference,r=uc[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return uc[n].primaries},getTransfer:function(n){return n===Un?Vc:uc[n].transfer}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vs,$c=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=qc("canvas")),vs.width=t.width,vs.height=t.height;let i=vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bs(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bs(e[i]/255)*255):e[i]=Bs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wb=0,Yc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Js(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function eu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$c.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eb=0,Yn=class n extends or{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=qn,r=qn,s=Pn,a=jo,o=$n,c=sr,l=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Js(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:($o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Br?ke:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cu:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Ru:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cu:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Ru:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Br:kg}set encoding(t){$o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Br?ke:Un}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Lg;Yn.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],x=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,S=(f+1)/2,A=(p+1)/2,C=(h+d)/4,R=(u+y)/4,z=(x+m)/4;return _>S&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=R/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=z/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=z/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pu=class extends or{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let r={width:t,height:e,depth:1};i.encoding!==void 0&&($o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Br?ke:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Pu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},jc=class extends Yn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uu=class extends Yn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],f=s[a+1],x=s[a+2],y=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==d||l!==f||h!==x){let m=1-o,p=c*d+l*f+h*x+u*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let A=Math.sqrt(_),C=Math.atan2(A,p*v);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}let S=o*v;if(c=c*m+d*S,l=l*m+f*S,h=h*m+x*S,u=u*m+y*S,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],x=s[a+3];return t[e]=o*x+h*u+c*f-l*d,t[e+1]=c*x+h*d+l*u-o*f,t[e+2]=l*x+h*f+o*d-c*u,t[e+3]=h*x-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),d=c(i/2),f=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"YZX":this._x=d*h*u+l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u-d*f*x;break;case"XZY":this._x=d*h*u-l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nu.copy(this).projectOnVector(t),this.sub(nu)}reflect(t){return this.sub(nu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nu=new P,Hm=new ar,Pi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(t.matrixWorld),this.union(dc)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),fc.subVectors(this.max,Ho),bs.subVectors(t.a,Ho),Ms.subVectors(t.b,Ho),Ss.subVectors(t.c,Ho),Ji.subVectors(Ms,bs),Zi.subVectors(Ss,Ms),Ir.subVectors(bs,Ss);let e=[0,-Ji.z,Ji.y,0,-Zi.z,Zi.y,0,-Ir.z,Ir.y,Ji.z,0,-Ji.x,Zi.z,0,-Zi.x,Ir.z,0,-Ir.x,-Ji.y,Ji.x,0,-Zi.y,Zi.x,0,-Ir.y,Ir.x,0];return!iu(e,bs,Ms,Ss,fc)||(e=[1,0,0,0,1,0,0,0,1],!iu(e,bs,Ms,Ss,fc))?!1:(pc.crossVectors(Ji,Zi),e=[pc.x,pc.y,pc.z],iu(e,bs,Ms,Ss,fc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Si=[new P,new P,new P,new P,new P,new P,new P,new P],Hn=new P,dc=new Pi,bs=new P,Ms=new P,Ss=new P,Ji=new P,Zi=new P,Ir=new P,Ho=new P,fc=new P,pc=new P,Lr=new P;function iu(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Lr.fromArray(n,s);let o=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=t.dot(Lr),l=e.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Tb=new Pi,Go=new P,ru=new P,Xs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Tb.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);let e=Go.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ru.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(ru)),this.expandByPoint(Go.copy(t.center).sub(ru))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new P,su=new P,mc=new P,Ki=new P,ou=new P,gc=new P,au=new P,Ko=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){su.copy(t).add(e).multiplyScalar(.5),mc.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(su);let s=t.distanceTo(e)*.5,a=-this.direction.dot(mc),o=Ki.dot(this.direction),c=-Ki.dot(mc),l=Ki.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*c-o,d=a*o-c,x=s*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(su).addScaledVector(mc,d),f}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,r,s){ou.subVectors(e,t),gc.subVectors(i,t),au.crossVectors(ou,gc);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,t);let c=o*this.direction.dot(gc.crossVectors(Ki,gc));if(c<0)return null;let l=o*this.direction.dot(ou.cross(Ki));if(l<0||c+l>a)return null;let h=-o*Ki.dot(au);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(t,e,i,r,s,a,o,c,l,h,u,d,f,x,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,u,d,f,x,y,m)}set(t,e,i,r,s,a,o,c,l,h,u,d,f,x,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/ws.setFromMatrixColumn(t,0).length(),s=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,x=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+x*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=x+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,x=l*h,y=l*u;e[0]=d+y*o,e[4]=x*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,x=l*h,y=l*u;e[0]=d-y*o,e[4]=-a*u,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,x=o*h,y=o*u;e[0]=c*h,e[4]=x*l-f,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=f*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=y-d*u,e[8]=x*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*c,f=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ab,t,Cb)}lookAt(t,e,i){let r=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Qi.crossVectors(i,Mn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Qi.crossVectors(i,Mn)),Qi.normalize(),xc.crossVectors(Mn,Qi),r[0]=Qi.x,r[4]=xc.x,r[8]=Mn.x,r[1]=Qi.y,r[5]=xc.y,r[9]=Mn.y,r[2]=Qi.z,r[6]=xc.z,r[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],x=i[2],y=i[6],m=i[10],p=i[14],v=i[3],_=i[7],S=i[11],A=i[15],C=r[0],R=r[4],z=r[8],M=r[12],T=r[1],N=r[5],W=r[9],G=r[13],I=r[2],U=r[6],X=r[10],Y=r[14],$=r[3],q=r[7],J=r[11],Z=r[15];return s[0]=a*C+o*T+c*I+l*$,s[4]=a*R+o*N+c*U+l*q,s[8]=a*z+o*W+c*X+l*J,s[12]=a*M+o*G+c*Y+l*Z,s[1]=h*C+u*T+d*I+f*$,s[5]=h*R+u*N+d*U+f*q,s[9]=h*z+u*W+d*X+f*J,s[13]=h*M+u*G+d*Y+f*Z,s[2]=x*C+y*T+m*I+p*$,s[6]=x*R+y*N+m*U+p*q,s[10]=x*z+y*W+m*X+p*J,s[14]=x*M+y*G+m*Y+p*Z,s[3]=v*C+_*T+S*I+A*$,s[7]=v*R+_*N+S*U+A*q,s[11]=v*z+_*W+S*X+A*J,s[15]=v*M+_*G+S*Y+A*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],y=t[7],m=t[11],p=t[15];return x*(+s*c*u-r*l*u-s*o*d+i*l*d+r*o*f-i*c*f)+y*(+e*c*f-e*l*d+s*a*d-r*a*f+r*l*h-s*c*h)+m*(+e*l*u-e*o*f-s*a*u+i*a*f+s*o*h-i*l*h)+p*(-r*o*h-e*c*u+e*o*d+r*a*u-i*a*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],y=t[13],m=t[14],p=t[15],v=u*m*l-y*d*l+y*c*f-o*m*f-u*c*p+o*d*p,_=x*d*l-h*m*l-x*c*f+a*m*f+h*c*p-a*d*p,S=h*y*l-x*u*l+x*o*f-a*y*f-h*o*p+a*u*p,A=x*u*c-h*y*c-x*o*d+a*y*d+h*o*m-a*u*m,C=e*v+i*_+r*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=v*R,t[1]=(y*d*s-u*m*s-y*r*f+i*m*f+u*r*p-i*d*p)*R,t[2]=(o*m*s-y*c*s+y*r*l-i*m*l-o*r*p+i*c*p)*R,t[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*f-i*c*f)*R,t[4]=_*R,t[5]=(h*m*s-x*d*s+x*r*f-e*m*f-h*r*p+e*d*p)*R,t[6]=(x*c*s-a*m*s-x*r*l+e*m*l+a*r*p-e*c*p)*R,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*f+e*c*f)*R,t[8]=S*R,t[9]=(x*u*s-h*y*s-x*i*f+e*y*f+h*i*p-e*u*p)*R,t[10]=(a*y*s-x*o*s+x*i*l-e*y*l-a*i*p+e*o*p)*R,t[11]=(h*o*s-a*u*s-h*i*l+e*u*l+a*i*f-e*o*f)*R,t[12]=A*R,t[13]=(h*y*r-x*u*r+x*i*d-e*y*d-h*i*m+e*u*m)*R,t[14]=(x*o*r-a*y*r-x*i*c+e*y*c+a*i*m-e*o*m)*R,t[15]=(a*u*r-h*o*r+h*i*c-e*u*c-a*i*d+e*o*d)*R,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,x=s*u,y=a*h,m=a*u,p=o*u,v=c*l,_=c*h,S=c*u,A=i.x,C=i.y,R=i.z;return r[0]=(1-(y+p))*A,r[1]=(f+S)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(f-S)*C,r[5]=(1-(d+p))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(x+_)*R,r[9]=(m-v)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=ws.set(r[0],r[1],r[2]).length(),a=ws.set(r[4],r[5],r[6]).length(),o=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Gn.copy(this);let l=1/s,h=1/a,u=1/o;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Ri){let c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r),f,x;if(o===Ri)f=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Wc)f=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ri){let c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(a-s),d=(e+t)*l,f=(i+r)*h,x,y;if(o===Ri)x=(a+s)*u,y=-2*u;else if(o===Wc)x=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ws=new P,Gn=new Ee,Ab=new P(0,0,0),Cb=new P(1,1,1),Qi=new P,xc=new P,Mn=new P,Gm=new Ee,Wm=new ar,Jc=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gm,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jc.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rb=0,Xm=new P,Es=new ar,Ei=new Ee,yc=new P,Wo=new P,Ib=new P,Lb=new ar,qm=new P(1,0,0),$m=new P(0,1,0),Ym=new P(0,0,1),Pb={type:"added"},Ub={type:"removed"},an=class n extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Jc,i=new ar,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Ht}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(qm,t)}rotateY(t){return this.rotateOnAxis($m,t)}rotateZ(t){return this.rotateOnAxis(Ym,t)}translateOnAxis(t,e){return Xm.copy(t).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qm,t)}translateY(t){return this.translateOnAxis($m,t)}translateZ(t){return this.translateOnAxis(Ym,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yc.copy(t):yc.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Wo,yc,this.up):Ei.lookAt(yc,Wo,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Ei),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ub)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,Ib),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Lb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};an.DEFAULT_UP=new P(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new P,Ti=new P,cu=new P,Ai=new P,Ts=new P,As=new P,jm=new P,lu=new P,hu=new P,uu=new P,_c=!1,zr=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Wn.subVectors(t,e),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Wn.subVectors(r,e),Ti.subVectors(i,e),cu.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(Ti),c=Wn.dot(cu),l=Ti.dot(Ti),h=Ti.dot(cu),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-f-x,x,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(t,e,i,r,s,a,o,c){return _c===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_c=!0),this.getInterpolation(t,e,i,r,s,a,o,c)}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(a,Ai.y),c.addScaledVector(o,Ai.z),c)}static isFrontFacing(t,e,i,r){return Wn.subVectors(i,e),Ti.subVectors(t,e),Wn.cross(Ti).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Wn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return _c===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_c=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,a,o;Ts.subVectors(r,i),As.subVectors(s,i),lu.subVectors(t,i);let c=Ts.dot(lu),l=As.dot(lu);if(c<=0&&l<=0)return e.copy(i);hu.subVectors(t,r);let h=Ts.dot(hu),u=As.dot(hu);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Ts,a);uu.subVectors(t,s);let f=Ts.dot(uu),x=As.dot(uu);if(x>=0&&f<=x)return e.copy(s);let y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(i).addScaledVector(As,o);let m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return jm.subVectors(s,r),o=(u-h)/(u-h+(f-x)),e.copy(r).addScaledVector(jm,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(Ts,a).addScaledVector(As,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},vc={h:0,s:0,l:0};function du(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=dd(t,1),e=rn(e,0,1),i=rn(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=du(a,s,t+1/3),this.g=du(a,s,t),this.b=du(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let i=Gg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=tu(t.r),this.g=tu(t.g),this.b=tu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Qt.fromWorkingColorSpace(qe.copy(this),t),Math.round(rn(qe.r*255,0,255))*65536+Math.round(rn(qe.g*255,0,255))*256+Math.round(rn(qe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(qe.copy(this),e);let i=qe.r,r=qe.g,s=qe.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=ke){Qt.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,r=qe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(vc);let i=qo(tr.h,vc.h,e),r=qo(tr.s,vc.s,e),s=qo(tr.l,vc.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Rt;Rt.NAMES=Gg;var Db=0,Ui=class extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Fs,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Eu,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Eu&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qs=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new P,bc=new Yt,Ye=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Om,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bc.fromBufferAttribute(this,e),bc.applyMatrix3(t),this.setXY(e,bc.x,bc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Om&&(t.usage=this.usage),t}};var Zc=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Kc=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var on=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Nb=0,Ln=new Ee,fu=new an,Cs=new P,Sn=new Pi,Xo=new Pi,Ue=new P,cn=class n extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hg(t)?Kc:Zc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return fu.lookAt(t),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Xo.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(Sn.min,Xo.min),Sn.expandByPoint(Ue),Ue.addVectors(Sn.max,Xo.max),Sn.expandByPoint(Ue)):(Sn.expandByPoint(Xo.min),Sn.expandByPoint(Xo.max))}Sn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(Cs.fromBufferAttribute(t,l),Ue.add(Cs)),r=Math.max(r,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<o;T++)l[T]=new P,h[T]=new P;let u=new P,d=new P,f=new P,x=new Yt,y=new Yt,m=new Yt,p=new P,v=new P;function _(T,N,W){u.fromArray(r,T*3),d.fromArray(r,N*3),f.fromArray(r,W*3),x.fromArray(a,T*2),y.fromArray(a,N*2),m.fromArray(a,W*2),d.sub(u),f.sub(u),y.sub(x),m.sub(x);let G=1/(y.x*m.y-m.x*y.y);isFinite(G)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(G),v.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(G),l[T].add(p),l[N].add(p),l[W].add(p),h[T].add(v),h[N].add(v),h[W].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,N=S.length;T<N;++T){let W=S[T],G=W.start,I=W.count;for(let U=G,X=G+I;U<X;U+=3)_(i[U+0],i[U+1],i[U+2])}let A=new P,C=new P,R=new P,z=new P;function M(T){R.fromArray(s,T*3),z.copy(R);let N=l[T];A.copy(N),A.sub(R.multiplyScalar(R.dot(N))).normalize(),C.crossVectors(z,N);let G=C.dot(h[T])<0?-1:1;c[T*4]=A.x,c[T*4+1]=A.y,c[T*4+2]=A.z,c[T*4+3]=G}for(let T=0,N=S.length;T<N;++T){let W=S[T],G=W.start,I=W.count;for(let U=G,X=G+I;U<X;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,x=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)d[x++]=l[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,i);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jm=new Ee,Pr=new Ko,Mc=new Xs,Zm=new P,Rs=new P,Is=new P,Ls=new P,pu=new P,Sc=new P,wc=new Yt,Ec=new Yt,Tc=new Yt,Km=new P,Qm=new P,tg=new P,Ac=new P,Cc=new P,we=class extends an{constructor(t=new cn,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){Sc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(pu.fromBufferAttribute(u,t),a?Sc.addScaledVector(pu,h):Sc.addScaledVector(pu.sub(e),h))}e.add(Sc)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Mc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Mc,Zm)===null||Pr.origin.distanceToSquared(Zm)>(t.far-t.near)**2))&&(Jm.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,A=_;S<A;S+=3){let C=o.getX(S),R=o.getX(S+1),z=o.getX(S+2);r=Rc(this,p,t,i,l,h,u,C,R,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let v=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);r=Rc(this,a,t,i,l,h,u,v,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,A=_;S<A;S+=3){let C=S,R=S+1,z=S+2;r=Rc(this,p,t,i,l,h,u,C,R,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let v=m,_=m+1,S=m+2;r=Rc(this,a,t,i,l,h,u,v,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Ob(n,t,e,i,r,s,a,o){let c;if(t.side===$e?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===pn,o),c===null)return null;Cc.copy(o),Cc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Cc);return l<e.near||l>e.far?null:{distance:l,point:Cc.clone(),object:n}}function Rc(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Rs),n.getVertexPosition(c,Is),n.getVertexPosition(l,Ls);let h=Ob(n,t,e,i,Rs,Is,Ls,Ac);if(h){r&&(wc.fromBufferAttribute(r,o),Ec.fromBufferAttribute(r,c),Tc.fromBufferAttribute(r,l),h.uv=zr.getInterpolation(Ac,Rs,Is,Ls,wc,Ec,Tc,new Yt)),s&&(wc.fromBufferAttribute(s,o),Ec.fromBufferAttribute(s,c),Tc.fromBufferAttribute(s,l),h.uv1=zr.getInterpolation(Ac,Rs,Is,Ls,wc,Ec,Tc,new Yt),h.uv2=h.uv1),a&&(Km.fromBufferAttribute(a,o),Qm.fromBufferAttribute(a,c),tg.fromBufferAttribute(a,l),h.normal=zr.getInterpolation(Ac,Rs,Is,Ls,Km,Qm,tg,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};zr.getNormal(Rs,Is,Ls,u.normal),h.face=u}return h}var si=class n extends cn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,i,e,t,a,s,0),x("z","y","x",1,-1,i,e,-t,a,s,1),x("x","z","y",1,1,t,i,e,r,a,2),x("x","z","y",1,-1,t,i,-e,r,a,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(u,2));function x(y,m,p,v,_,S,A,C,R,z,M){let T=S/R,N=A/z,W=S/2,G=A/2,I=C/2,U=R+1,X=z+1,Y=0,$=0,q=new P;for(let J=0;J<X;J++){let Z=J*N-G;for(let nt=0;nt<U;nt++){let B=nt*T-W;q[y]=B*v,q[m]=Z*_,q[p]=I,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=C>0?1:-1,h.push(q.x,q.y,q.z),u.push(nt/R),u.push(1-J/z),Y+=1}}for(let J=0;J<z;J++)for(let Z=0;Z<R;Z++){let nt=d+Z+U*J,B=d+Z+U*(J+1),j=d+(Z+1)+U*(J+1),ot=d+(Z+1)+U*J;c.push(nt,B,ot),c.push(B,j,ot),$+=6}o.addGroup(f,$,M),f+=$,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function en(n){let t={};for(let e=0;e<n.length;e++){let i=$s(n[e]);for(let r in i)t[r]=i[r]}return t}function zb(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Wg(n){return n.getRenderTarget()===null?n.outputColorSpace:Qt.workingColorSpace}var Fb={clone:$s,merge:en},kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kb,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=zb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Qc=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sn=class extends Qc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ks*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ps=-90,Us=1,Du=class extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Ps,Us,t,e);r.layers=this.layers,this.add(r);let s=new sn(Ps,Us,t,e);s.layers=this.layers,this.add(s);let a=new sn(Ps,Us,t,e);a.layers=this.layers,this.add(a);let o=new sn(Ps,Us,t,e);o.layers=this.layers,this.add(o);let c=new sn(Ps,Us,t,e);c.layers=this.layers,this.add(c);let l=new sn(Ps,Us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},tl=class extends Yn{constructor(t,e,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Nu=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&($o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Br?ke:Un),this.texture=new tl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new si(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:ir});s.uniforms.tEquirect.value=e;let a=new we(r,s),o=e.minFilter;return e.minFilter===jo&&(e.minFilter=Pn),new Du(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}},mu=new P,Vb=new P,Hb=new Ht,De=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=mu.subVectors(i,e).cross(Vb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Hb.getNormalMatrix(t),r=this.coplanarPoint(mu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Xs,Ic=new P,ta=class{constructor(t=new De,e=new De,i=new De,r=new De,s=new De,a=new De){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],f=r[8],x=r[9],y=r[10],m=r[11],p=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,m-f,S-p).normalize(),i[1].setComponents(c+s,d+l,m+f,S+p).normalize(),i[2].setComponents(c+a,d+h,m+x,S+v).normalize(),i[3].setComponents(c-a,d-h,m-x,S-v).normalize(),i[4].setComponents(c-o,d-u,m-y,S-_).normalize(),e===Ri)i[5].setComponents(c+o,d+u,m+y,S+_).normalize();else if(e===Wc)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ic.x=r.normal.x>0?t.max.x:t.min.x,Ic.y=r.normal.y>0?t.max.y:t.min.y,Ic.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xg(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Gb(n,t){let e=t.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,u){let d=h.array,f=h._updateRange,x=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&x.length===0&&n.bufferSubData(u,0,d),x.length!==0){for(let y=0,m=x.length;y<m;y++){let p=x[y];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ys=class n extends cn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,d=e/c,f=[],x=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let _=0;_<l;_++){let S=_*u-s;x.push(S,-v,0),y.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let _=v+l*p,S=v+l*(p+1),A=v+1+l*(p+1),C=v+1+l*p;f.push(_,S,C),f.push(S,A,C)}this.setIndex(f),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xb=`#ifdef USE_ALPHAHASH
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
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jb=`#ifdef USE_AOMAP
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
#endif`,Zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
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
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iM=`#ifdef USE_IRIDESCENCE
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
#endif`,rM=`#ifdef USE_BUMPMAP
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mM=`vec3 transformedNormal = objectNormal;
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
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`
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
}`,MM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
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
#endif`,GM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,WM=`
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tS=`#if defined( USE_POINTS_UV )
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
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IS=`#ifdef USE_SKINNING
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
#endif`,LS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,ZS=`#define DISTANCE
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
}`,KS=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iw=`#include <common>
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
}`,rw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sw=`#define LAMBERT
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
}`,ow=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aw=`#define MATCAP
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
}`,cw=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lw=`#define NORMAL
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
}`,hw=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uw=`#define PHONG
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
}`,dw=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fw=`#define STANDARD
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
}`,pw=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mw=`#define TOON
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
}`,gw=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xw=`uniform float size;
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
}`,yw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_w=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,vw=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,Mw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ot={alphahash_fragment:Wb,alphahash_pars_fragment:Xb,alphamap_fragment:qb,alphamap_pars_fragment:$b,alphatest_fragment:Yb,alphatest_pars_fragment:jb,aomap_fragment:Jb,aomap_pars_fragment:Zb,batching_pars_vertex:Kb,batching_vertex:Qb,begin_vertex:tM,beginnormal_vertex:eM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:cM,color_fragment:lM,color_pars_fragment:hM,color_pars_vertex:uM,color_vertex:dM,common:fM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:xM,emissivemap_fragment:yM,emissivemap_pars_fragment:_M,colorspace_fragment:vM,colorspace_pars_fragment:bM,envmap_fragment:MM,envmap_common_pars_fragment:SM,envmap_pars_fragment:wM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:zM,envmap_vertex:TM,fog_vertex:AM,fog_pars_vertex:CM,fog_fragment:RM,fog_pars_fragment:IM,gradientmap_pars_fragment:LM,lightmap_fragment:PM,lightmap_pars_fragment:UM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:FM,lights_toon_pars_fragment:kM,lights_phong_fragment:BM,lights_phong_pars_fragment:VM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:WM,lights_fragment_maps:XM,lights_fragment_end:qM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:JM,map_fragment:ZM,map_pars_fragment:KM,map_particle_fragment:QM,map_particle_pars_fragment:tS,metalnessmap_fragment:eS,metalnessmap_pars_fragment:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:cS,normal_pars_fragment:lS,normal_pars_vertex:hS,normal_vertex:uS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:xS,packing:yS,premultiplied_alpha_fragment:_S,project_vertex:vS,dithering_fragment:bS,dithering_pars_fragment:MS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:ES,shadowmap_pars_vertex:TS,shadowmap_vertex:AS,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:IS,skinning_vertex:LS,skinnormal_vertex:PS,specularmap_fragment:US,specularmap_pars_fragment:DS,tonemapping_fragment:NS,tonemapping_pars_fragment:OS,transmission_fragment:zS,transmission_pars_fragment:FS,uv_pars_fragment:kS,uv_pars_vertex:BS,uv_vertex:VS,worldpos_vertex:HS,background_vert:GS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:qS,cube_vert:$S,cube_frag:YS,depth_vert:jS,depth_frag:JS,distanceRGBA_vert:ZS,distanceRGBA_frag:KS,equirect_vert:QS,equirect_frag:tw,linedashed_vert:ew,linedashed_frag:nw,meshbasic_vert:iw,meshbasic_frag:rw,meshlambert_vert:sw,meshlambert_frag:ow,meshmatcap_vert:aw,meshmatcap_frag:cw,meshnormal_vert:lw,meshnormal_frag:hw,meshphong_vert:uw,meshphong_frag:dw,meshphysical_vert:fw,meshphysical_frag:pw,meshtoon_vert:mw,meshtoon_frag:gw,points_vert:xw,points_frag:yw,shadow_vert:_w,shadow_frag:vw,sprite_vert:bw,sprite_frag:Mw},lt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ri={basic:{uniforms:en([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:en([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:en([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:en([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:en([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:en([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:en([lt.points,lt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:en([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:en([lt.common,lt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:en([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:en([lt.sprite,lt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:en([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:en([lt.lights,lt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Lc={r:0,b:0,g:0};function Sw(n,t,e,i,r,s,a){let o=new Rt(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function x(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?y(o,c):_&&_.isColor&&(y(_,1),v=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===cl)?(h===void 0&&(h=new we(new si(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:$s(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new we(new Ys(2,2),new Jn({name:"BackgroundMaterial",uniforms:$s(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Lc,Wg(n)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(o,c)},render:x}}function ww(n,t,e,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function u(I,U,X,Y,$){let q=!1;if(a){let J=y(Y,X,U);l!==J&&(l=J,f(l.object)),q=p(I,Y,X,$),q&&v(I,Y,X,$)}else{let J=U.wireframe===!0;(l.geometry!==Y.id||l.program!==X.id||l.wireframe!==J)&&(l.geometry=Y.id,l.program=X.id,l.wireframe=J,q=!0)}$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,z(I,U,X,Y),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,U,X){let Y=X.wireframe===!0,$=o[I.id];$===void 0&&($={},o[I.id]=$);let q=$[U.id];q===void 0&&(q={},$[U.id]=q);let J=q[Y];return J===void 0&&(J=m(d()),q[Y]=J),J}function m(I){let U=[],X=[],Y=[];for(let $=0;$<r;$++)U[$]=0,X[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,U,X,Y){let $=l.attributes,q=U.attributes,J=0,Z=X.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=$[nt],ot=q[nt];if(ot===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor)),j===void 0||j.attribute!==ot||ot&&j.data!==ot.data)return!0;J++}return l.attributesNum!==J||l.index!==Y}function v(I,U,X,Y){let $={},q=U.attributes,J=0,Z=X.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=q[nt];j===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let ot={};ot.attribute=j,j&&j.data&&(ot.data=j.data),$[nt]=ot,J++}l.attributes=$,l.attributesNum=J,l.index=Y}function _(){let I=l.newAttributes;for(let U=0,X=I.length;U<X;U++)I[U]=0}function S(I){A(I,0)}function A(I,U){let X=l.newAttributes,Y=l.enabledAttributes,$=l.attributeDivisors;X[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),$[I]!==U&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),$[I]=U)}function C(){let I=l.newAttributes,U=l.enabledAttributes;for(let X=0,Y=U.length;X<Y;X++)U[X]!==I[X]&&(n.disableVertexAttribArray(X),U[X]=0)}function R(I,U,X,Y,$,q,J){J===!0?n.vertexAttribIPointer(I,U,X,$,q):n.vertexAttribPointer(I,U,X,Y,$,q)}function z(I,U,X,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let $=Y.attributes,q=X.getAttributes(),J=U.defaultAttributeValues;for(let Z in q){let nt=q[Z];if(nt.location>=0){let B=$[Z];if(B===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(B=I.instanceColor)),B!==void 0){let j=B.normalized,ot=B.itemSize,tt=e.get(B);if(tt===void 0)continue;let st=tt.buffer,at=tt.type,ft=tt.bytesPerElement,gt=i.isWebGL2===!0&&(at===n.INT||at===n.UNSIGNED_INT||B.gpuType===Pg);if(B.isInterleavedBufferAttribute){let vt=B.data,O=vt.stride,le=B.offset;if(vt.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)A(nt.location+_t,vt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<nt.locationSize;_t++)S(nt.location+_t);n.bindBuffer(n.ARRAY_BUFFER,st);for(let _t=0;_t<nt.locationSize;_t++)R(nt.location+_t,ot/nt.locationSize,at,j,O*ft,(le+ot/nt.locationSize*_t)*ft,gt)}else{if(B.isInstancedBufferAttribute){for(let vt=0;vt<nt.locationSize;vt++)A(nt.location+vt,B.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let vt=0;vt<nt.locationSize;vt++)S(nt.location+vt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let vt=0;vt<nt.locationSize;vt++)R(nt.location+vt,ot/nt.locationSize,at,j,ot*ft,ot/nt.locationSize*vt*ft,gt)}}else if(J!==void 0){let j=J[Z];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(nt.location,j);break;case 3:n.vertexAttrib3fv(nt.location,j);break;case 4:n.vertexAttrib4fv(nt.location,j);break;default:n.vertexAttrib1fv(nt.location,j)}}}}C()}function M(){W();for(let I in o){let U=o[I];for(let X in U){let Y=U[X];for(let $ in Y)x(Y[$].object),delete Y[$];delete U[X]}delete o[I]}}function T(I){if(o[I.id]===void 0)return;let U=o[I.id];for(let X in U){let Y=U[X];for(let $ in Y)x(Y[$].object),delete Y[$];delete U[X]}delete o[I.id]}function N(I){for(let U in o){let X=o[U];if(X[I.id]===void 0)continue;let Y=X[I.id];for(let $ in Y)x(Y[$].object),delete Y[$];delete X[I.id]}}function W(){G(),h=!0,l!==c&&(l=c,f(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:G,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:S,disableUnusedAttributes:C}}function Ew(n,t,e,i){let r=i.isWebGL2,s;function a(h){s=h}function o(h,u){n.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,d){if(d===0)return;let f,x;if(r)f=n,x="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](s,h,u,d),e.update(u,s,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y];e.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Tw(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=a||t.has("OES_texture_float"),A=_&&S,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:C}}function Aw(n){let t=this,e=null,i=0,r=!1,s=!1,a=new De,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||x===null||x.length===0||s&&!m)s?h(null):l();else{let v=s?0:i,_=v*4,S=p.clippingState||null;c.value=S,S=h(x,d,_,f);for(let A=0;A!==_;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,x!==!0||m===null){let p=f+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==y;++_,S+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Cw(n){let t=new WeakMap;function e(a,o){return o===Tu?a.mapping=Hs:o===Au&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tu||o===Au)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Nu(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var cr=class extends Qc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Os=4,eg=[.125,.215,.35,.446,.526,.582],Or=20,gu=new cr,ng=new Rt,xu=null,yu=0,_u=0,Dr=(1+Math.sqrt(5))/2,Ds=1/Dr,ig=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Dr,Ds),new P(0,Dr,-Ds),new P(Ds,0,Dr),new P(-Ds,0,Dr),new P(Dr,Ds,0),new P(-Dr,Ds,0)],el=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xu,yu,_u),t.scissorTest=!1,Pc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Jo,format:$n,colorSpace:Li,depthBuffer:!1},r=rg(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rw(s)),this._blurMaterial=Iw(s,t,e)}return r}_compileMaterial(t){let e=new we(this._lodPlanes[0],t);this._renderer.compile(e,gu)}_sceneToCubeUV(t,e,i,r){let o=new sn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ng),h.toneMapping=rr,h.autoClear=!1;let f=new qs({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),x=new we(new si,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(ng),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Pc(r,v*_,p>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Hs||t.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Pc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,gu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ig[(r-1)%ig.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Or-1),y=s/x,m=isFinite(s)?1+Math.floor(h*y):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);let p=[],v=0;for(let R=0;R<Or;++R){let z=R/y,M=Math.exp(-z*z/2);p.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;let S=this._sizeLods[r],A=3*S*(r>_-Os?r-_+Os:0),C=4*(this._cubeSize-S);Pc(e,A,C,3*S,2*S),c.setRenderTarget(e),c.render(u,gu)}};function Rw(n){let t=[],e=[],i=[],r=n,s=n-Os+1+eg.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Os?c=eg[a-n+Os-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,y=3,m=2,p=1,v=new Float32Array(y*x*f),_=new Float32Array(m*x*f),S=new Float32Array(p*x*f);for(let C=0;C<f;C++){let R=C%3*2/3-1,z=C>2?0:-1,M=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];v.set(M,y*x*C),_.set(d,m*x*C);let T=[C,C,C,C,C,C];S.set(T,p*x*C)}let A=new cn;A.setAttribute("position",new Ye(v,y)),A.setAttribute("uv",new Ye(_,m)),A.setAttribute("faceIndex",new Ye(S,p)),t.push(A),r>Os&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rg(n,t,e){let i=new jn(n,t,e);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Iw(n,t,e){let i=new Float32Array(Or),r=new P(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fd(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function sg(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function og(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function Lw(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Tu||c===Au,h=c===Hs||c===Gs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new el(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new el(n));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Pw(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Uw(n,t,e,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let y=f[x];for(let m=0,p=y.length;m<p;m++)t.update(y[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,x=u.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let _=0,S=v.length;_<S;_+=3){let A=v[_+0],C=v[_+1],R=v[_+2];d.push(A,C,C,R,R,A)}}else if(x!==void 0){let v=x.array;y=x.version;for(let _=0,S=v.length/3-1;_<S;_+=3){let A=_+0,C=_+1,R=_+2;d.push(A,C,C,R,R,A)}}else return;let m=new(Hg(d)?Kc:Zc)(d,1);m.version=y;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Dw(n,t,e,i){let r=i.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,x){n.drawElements(s,x,o,f*c),e.update(x,s,1)}function u(f,x,y){if(y===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,x,o,f*c,y),e.update(x,s,y)}function d(f,x,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/c,x[p]);else{m.multiDrawElementsWEBGL(s,x,0,o,f,0,y);let p=0;for(let v=0;v<y;v++)p+=x[v];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Nw(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ow(n,t){return n[0]-t[0]}function zw(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Fw(n,t,e){let i={},r=new Float32Array(8),s=new WeakMap,a=new Ne,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=f!==void 0?f.length:0,y=s.get(h);if(y===void 0||y.count!==x){let I=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],z=0;v===!0&&(z=1),_===!0&&(z=2),S===!0&&(z=3);let M=h.attributes.position.count*z,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*T*4*x),W=new jc(N,M,T,x);W.type=nr,W.needsUpdate=!0;let G=z*4;for(let U=0;U<x;U++){let X=A[U],Y=C[U],$=R[U],q=M*T*4*U;for(let J=0;J<X.count;J++){let Z=J*G;v===!0&&(a.fromBufferAttribute(X,J),N[q+Z+0]=a.x,N[q+Z+1]=a.y,N[q+Z+2]=a.z,N[q+Z+3]=0),_===!0&&(a.fromBufferAttribute(Y,J),N[q+Z+4]=a.x,N[q+Z+5]=a.y,N[q+Z+6]=a.z,N[q+Z+7]=0),S===!0&&(a.fromBufferAttribute($,J),N[q+Z+8]=a.x,N[q+Z+9]=a.y,N[q+Z+10]=a.z,N[q+Z+11]=$.itemSize===4?a.w:1)}}y={count:x,texture:W,size:new Yt(M,T)},s.set(h,y),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=d===void 0?0:d.length,x=i[h.id];if(x===void 0||x.length!==f){x=[];for(let _=0;_<f;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<f;_++){let S=x[_];S[0]=_,S[1]=d[_]}x.sort(zw);for(let _=0;_<8;_++)_<f&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Ow);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let S=o[_],A=S[0],C=S[1];A!==Number.MAX_SAFE_INTEGER&&C?(y&&h.getAttribute("morphTarget"+_)!==y[A]&&h.setAttribute("morphTarget"+_,y[A]),m&&h.getAttribute("morphNormal"+_)!==m[A]&&h.setAttribute("morphNormal"+_,m[A]),r[_]=C,p+=C):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function kw(n,t,e,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var nl=class extends Yn{constructor(t,e,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:kr,h!==kr&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===kr&&(i=er),i===void 0&&h===Ws&&(i=Fr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qg=new Yn,$g=new nl(1,1);$g.compareFunction=Vg;var Yg=new jc,jg=new Uu,Jg=new tl,ag=[],cg=[],lg=new Float32Array(16),hg=new Float32Array(9),ug=new Float32Array(4);function Zs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=ag[r];if(s===void 0&&(s=new Float32Array(r),ag[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ul(n,t){let e=cg[t];e===void 0&&(e=new Int32Array(t),cg[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Bw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function Hw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function Gw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function Ww(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;ug.set(i),n.uniformMatrix2fv(this.addr,!1,ug),Ae(e,i)}}function Xw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;hg.set(i),n.uniformMatrix3fv(this.addr,!1,hg),Ae(e,i)}}function qw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;lg.set(i),n.uniformMatrix4fv(this.addr,!1,lg),Ae(e,i)}}function $w(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Yw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function jw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function Jw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function Zw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Kw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function Qw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function t1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function e1(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?$g:qg;e.setTexture2D(t||s,r)}function n1(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||jg,r)}function i1(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Jg,r)}function r1(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Yg,r)}function s1(n){switch(n){case 5126:return Bw;case 35664:return Vw;case 35665:return Hw;case 35666:return Gw;case 35674:return Ww;case 35675:return Xw;case 35676:return qw;case 5124:case 35670:return $w;case 35667:case 35671:return Yw;case 35668:case 35672:return jw;case 35669:case 35673:return Jw;case 5125:return Zw;case 36294:return Kw;case 36295:return Qw;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}function o1(n,t){n.uniform1fv(this.addr,t)}function a1(n,t){let e=Zs(t,this.size,2);n.uniform2fv(this.addr,e)}function c1(n,t){let e=Zs(t,this.size,3);n.uniform3fv(this.addr,e)}function l1(n,t){let e=Zs(t,this.size,4);n.uniform4fv(this.addr,e)}function h1(n,t){let e=Zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function u1(n,t){let e=Zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function d1(n,t){let e=Zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function f1(n,t){n.uniform1iv(this.addr,t)}function p1(n,t){n.uniform2iv(this.addr,t)}function m1(n,t){n.uniform3iv(this.addr,t)}function g1(n,t){n.uniform4iv(this.addr,t)}function x1(n,t){n.uniform1uiv(this.addr,t)}function y1(n,t){n.uniform2uiv(this.addr,t)}function _1(n,t){n.uniform3uiv(this.addr,t)}function v1(n,t){n.uniform4uiv(this.addr,t)}function b1(n,t,e){let i=this.cache,r=t.length,s=ul(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||qg,s[a])}function M1(n,t,e){let i=this.cache,r=t.length,s=ul(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||jg,s[a])}function S1(n,t,e){let i=this.cache,r=t.length,s=ul(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Jg,s[a])}function w1(n,t,e){let i=this.cache,r=t.length,s=ul(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Yg,s[a])}function E1(n){switch(n){case 5126:return o1;case 35664:return a1;case 35665:return c1;case 35666:return l1;case 35674:return h1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return x1;case 36294:return y1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return w1}}var Ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=s1(e.type)}},zu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E1(e.type)}},Fu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],i)}}},vu=/(\w+)(\])?(\[|\.)?/g;function dg(n,t){n.seq.push(t),n.map[t.id]=t}function T1(n,t,e){let i=n.name,r=i.length;for(vu.lastIndex=0;;){let s=vu.exec(i),a=vu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){dg(e,l===void 0?new Ou(o,n,t):new zu(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Fu(o),dg(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);T1(s,a,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&i.push(a)}return i}};function fg(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var A1=37297,C1=0;function R1(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function I1(n){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n),i;switch(t===e?i="":t===Gc&&e===Hc?i="LinearDisplayP3ToLinearSRGB":t===Hc&&e===Gc&&(i="LinearSRGBToLinearDisplayP3"),n){case Li:case ll:return[i,"LinearTransferOETF"];case ke:case ud:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pg(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+R1(n.getShaderSource(t),a)}else return r}function L1(n,t){let e=I1(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function P1(n,t){let e;switch(t){case zv:e="Linear";break;case Fv:e="Reinhard";break;case kv:e="OptimizedCineon";break;case Bv:e="ACESFilmic";break;case Hv:e="AgX";break;case Vv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function U1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function D1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function N1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function O1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function zs(n){return n!==""}function mg(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gg(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(n){return n.replace(z1,k1)}var F1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k1(n,t){let e=Ot[t];if(e===void 0){let i=F1.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ku(e)}var B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(n){return n.replace(B1,V1)}function V1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yg(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function H1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ig?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function G1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function X1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ld:t="ENVMAP_BLENDING_MULTIPLY";break;case Nv:t="ENVMAP_BLENDING_MIX";break;case Ov:t="ENVMAP_BLENDING_ADD";break}return t}function q1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $1(n,t,e,i){let r=n.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=H1(e),l=G1(e),h=W1(e),u=X1(e),d=q1(e),f=e.isWebGL2?"":U1(e),x=D1(e),y=N1(s),m=r.createProgram(),p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(zs).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(zs).join(`
`),v.length>0&&(v+=`
`)):(p=[yg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),v=[f,yg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rr?"#define TONE_MAPPING":"",e.toneMapping!==rr?Ot.tonemapping_pars_fragment:"",e.toneMapping!==rr?P1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,L1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=ku(a),a=mg(a,e),a=gg(a,e),o=ku(o),o=mg(o,e),o=gg(o,e),a=xg(a),o=xg(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=_+p+a,A=_+v+o,C=fg(r,r.VERTEX_SHADER,S),R=fg(r,r.FRAGMENT_SHADER,A);r.attachShader(m,C),r.attachShader(m,R),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(W){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(C).trim(),U=r.getShaderInfoLog(R).trim(),X=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,C,R);else{let $=pg(r,C,"vertex"),q=pg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+$+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(I===""||U==="")&&(Y=!1);Y&&(W.diagnostics={runnable:X,programLog:G,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:v}})}r.deleteShader(C),r.deleteShader(R),M=new Vs(r,m),T=O1(r,m)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,A1)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C1++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}var Y1=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vu(t),e.set(t,i)),i}},Vu=class{constructor(t){this.id=Y1++,this.code=t,this.usedTimes=0}};function j1(n,t,e,i,r,s,a){let o=new Qo,c=new Bu,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,T,N,W,G){let I=W.fog,U=G.geometry,X=M.isMeshStandardMaterial?W.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),$=Y&&Y.mapping===cl?Y.image.height:null,q=x[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Z=J!==void 0?J.length:0,nt=0;U.morphAttributes.position!==void 0&&(nt=1),U.morphAttributes.normal!==void 0&&(nt=2),U.morphAttributes.color!==void 0&&(nt=3);let B,j,ot,tt;if(q){let Ke=ri[q];B=Ke.vertexShader,j=Ke.fragmentShader}else B=M.vertexShader,j=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),tt=c.getFragmentShaderID(M);let st=n.getRenderTarget(),at=G.isInstancedMesh===!0,ft=G.isBatchedMesh===!0,gt=!!M.map,vt=!!M.matcap,O=!!Y,le=!!M.aoMap,_t=!!M.lightMap,mt=!!M.bumpMap,rt=!!M.normalMap,ne=!!M.displacementMap,Lt=!!M.emissiveMap,E=!!M.metalnessMap,b=!!M.roughnessMap,F=M.anisotropy>0,et=M.clearcoat>0,Q=M.iridescence>0,it=M.sheen>0,bt=M.transmission>0,dt=F&&!!M.anisotropyMap,xt=et&&!!M.clearcoatMap,Tt=et&&!!M.clearcoatNormalMap,zt=et&&!!M.clearcoatRoughnessMap,K=Q&&!!M.iridescenceMap,Kt=Q&&!!M.iridescenceThicknessMap,Gt=it&&!!M.sheenColorMap,It=it&&!!M.sheenRoughnessMap,St=!!M.specularMap,yt=!!M.specularColorMap,Nt=!!M.specularIntensityMap,Jt=bt&&!!M.transmissionMap,xe=bt&&!!M.thicknessMap,Bt=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,ht=!!M.alphaHash,ut=!!M.extensions,At=!!U.attributes.uv1,wt=!!U.attributes.uv2,ie=!!U.attributes.uv3,re=rr;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(re=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:j,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ft,instancing:at,instancingColor:at&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Li,map:gt,matcap:vt,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:$,aoMap:le,lightMap:_t,bumpMap:mt,normalMap:rt,displacementMap:d&&ne,emissiveMap:Lt,normalMapObjectSpace:rt&&M.normalMapType===tb,normalMapTangentSpace:rt&&M.normalMapType===Bg,metalnessMap:E,roughnessMap:b,anisotropy:F,anisotropyMap:dt,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:It,specularMap:St,specularColorMap:yt,specularIntensityMap:Nt,transmission:bt,transmissionMap:Jt,thicknessMap:xe,gradientMap:Bt,opaque:M.transparent===!1&&M.blending===Fs,alphaMap:ct,alphaTest:L,alphaHash:ht,combine:M.combine,mapUv:gt&&y(M.map.channel),aoMapUv:le&&y(M.aoMap.channel),lightMapUv:_t&&y(M.lightMap.channel),bumpMapUv:mt&&y(M.bumpMap.channel),normalMapUv:rt&&y(M.normalMap.channel),displacementMapUv:ne&&y(M.displacementMap.channel),emissiveMapUv:Lt&&y(M.emissiveMap.channel),metalnessMapUv:E&&y(M.metalnessMap.channel),roughnessMapUv:b&&y(M.roughnessMap.channel),anisotropyMapUv:dt&&y(M.anisotropyMap.channel),clearcoatMapUv:xt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(M.sheenRoughnessMap.channel),specularMapUv:St&&y(M.specularMap.channel),specularColorMapUv:yt&&y(M.specularColorMap.channel),specularIntensityMapUv:Nt&&y(M.specularIntensityMap.channel),transmissionMapUv:Jt&&y(M.transmissionMap.channel),thicknessMapUv:xe&&y(M.thicknessMap.channel),alphaMapUv:ct&&y(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(rt||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:wt,vertexUv3s:ie,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(gt||ct),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===$e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ut&&M.extensions.derivatives===!0,extensionFragDepth:ut&&M.extensions.fragDepth===!0,extensionDrawBuffers:ut&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(T,M),_(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){let T=x[M.type],N;if(T){let W=ri[T];N=Fb.clone(W.uniforms)}else N=M.uniforms;return N}function A(M,T){let N;for(let W=0,G=l.length;W<G;W++){let I=l[W];if(I.cacheKey===T){N=I,++N.usedTimes;break}}return N===void 0&&(N=new $1(n,T,M,s),l.push(N)),N}function C(M){if(--M.usedTimes===0){let T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:z}}function J1(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function Z1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _g(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vg(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,d,f,x,y,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function o(u,d,f,x,y,m){let p=a(u,d,f,x,y,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function c(u,d,f,x,y,m){let p=a(u,d,f,x,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Z1),i.length>1&&i.sort(d||_g),r.length>1&&r.sort(d||_g)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function K1(){let n=new WeakMap;function t(i,r){let s=n.get(i),a;return s===void 0?(a=new vg,n.set(i,[a])):r>=s.length?(a=new vg,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Q1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Rt};break;case"SpotLight":e={position:new P,direction:new P,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function tE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var eE=0;function nE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function iE(n,t){let e=new Q1,i=tE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);let s=new P,a=new Ee,o=new Ee;function c(h,u){let d=0,f=0,x=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,m=0,p=0,v=0,_=0,S=0,A=0,C=0,R=0,z=0,M=0;h.sort(nE);let T=u===!0?Math.PI:1;for(let W=0,G=h.length;W<G;W++){let I=h[W],U=I.color,X=I.intensity,Y=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=U.r*X*T,f+=U.g*X*T,x+=U.b*X*T;else if(I.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(I.sh.coefficients[q],X);M++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){let J=I.shadow,Z=i.get(I);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=I.shadow.matrix,S++}r.directional[y]=q,y++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(U).multiplyScalar(X*T),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,r.spot[p]=q;let J=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,J.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[p]=J.matrix,I.castShadow){let Z=i.get(I);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.spotShadow[p]=Z,r.spotShadowMap[p]=$,C++}p++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(U).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=q,v++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*T),q.distance=I.distance,q.decay=I.decay,I.castShadow){let J=I.shadow,Z=i.get(I);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=I.shadow.matrix,A++}r.point[m]=q,m++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(X*T),q.groundColor.copy(I.groundColor).multiplyScalar(X*T),r.hemi[_]=q,_++}}v>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=x;let N=r.hash;(N.directionalLength!==y||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==S||N.numPointShadows!==A||N.numSpotShadows!==C||N.numSpotMaps!==R||N.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=p,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+R-z,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=M,N.directionalLength=y,N.pointLength=m,N.spotLength=p,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=S,N.numPointShadows=A,N.numSpotShadows=C,N.numSpotMaps=R,N.numLightProbes=M,r.version=eE++)}function l(h,u){let d=0,f=0,x=0,y=0,m=0,p=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let S=h[v];if(S.isDirectionalLight){let A=r.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(S.isSpotLight){let A=r.spot[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),x++}else if(S.isRectAreaLight){let A=r.rectArea[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let A=r.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let A=r.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:r}}function bg(n,t){let e=new iE(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function o(u){r.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function rE(n,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),c;return o===void 0?(c=new bg(n,t),e.set(s,[c])):a>=o.length?(c=new bg(n,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:i,dispose:r}}var Hu=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gu=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`;function aE(n,t,e){let i=new ta,r=new Yt,s=new Yt,a=new Ne,o=new Hu({depthPacking:Qv}),c=new Gu,l={},h=e.maxTextureSize,u={[pn]:$e,[$e]:pn,[Xn]:Xn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:sE,fragmentShader:oE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new cn;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new we(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let p=this.type;this.render=function(C,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ir),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let G=p!==Ci&&this.type===Ci,I=p===Ci&&this.type!==Ci;for(let U=0,X=C.length;U<X;U++){let Y=C[U],$=Y.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let q=$.getFrameExtents();if(r.multiply(q),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,$.mapSize.y=s.y)),$.map===null||G===!0||I===!0){let Z=this.type!==Ci?{minFilter:nn,magFilter:nn}:{};$.map!==null&&$.map.dispose(),$.map=new jn(r.x,r.y,Z),$.map.texture.name=Y.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let J=$.getViewportCount();for(let Z=0;Z<J;Z++){let nt=$.getViewport(Z);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),W.viewport(a),$.updateMatrices(Y,Z),i=$.getFrustum(),S(R,z,$.camera,Y,this.type)}$.isPointLightShadow!==!0&&this.type===Ci&&v($,z),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,T,N)};function v(C,R){let z=t.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new jn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,z,d,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,z,f,y,null)}function _(C,R,z,M){let T=null,N=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)T=N;else if(T=z.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=T.uuid,G=R.uuid,I=l[W];I===void 0&&(I={},l[W]=I);let U=I[G];U===void 0&&(U=T.clone(),I[G]=U,R.addEventListener("dispose",A)),T=U}if(T.visible=R.visible,T.wireframe=R.wireframe,M===Ci?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let W=n.properties.get(T);W.light=z}return T}function S(C,R,z,M,T){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Ci)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let G=t.update(C),I=C.material;if(Array.isArray(I)){let U=G.groups;for(let X=0,Y=U.length;X<Y;X++){let $=U[X],q=I[$.materialIndex];if(q&&q.visible){let J=_(C,q,M,T);C.onBeforeShadow(n,C,R,z,G,J,$),n.renderBufferDirect(z,null,G,J,C,$),C.onAfterShadow(n,C,R,z,G,J,$)}}}else if(I.visible){let U=_(C,I,M,T);C.onBeforeShadow(n,C,R,z,G,U,null),n.renderBufferDirect(z,null,G,U,C,null),C.onAfterShadow(n,C,R,z,G,U,null)}}let W=C.children;for(let G=0,I=W.length;G<I;G++)S(W[G],R,z,M,T)}function A(C){C.target.removeEventListener("dispose",A);for(let z in l){let M=l[z],T=C.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function cE(n,t,e){let i=e.isWebGL2;function r(){let L=!1,ht=new Ne,ut=null,At=new Ne(0,0,0,0);return{setMask:function(wt){ut!==wt&&!L&&(n.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){L=wt},setClear:function(wt,ie,re,Le,Ke){Ke===!0&&(wt*=Le,ie*=Le,re*=Le),ht.set(wt,ie,re,Le),At.equals(ht)===!1&&(n.clearColor(wt,ie,re,Le),At.copy(ht))},reset:function(){L=!1,ut=null,At.set(-1,0,0,0)}}}function s(){let L=!1,ht=null,ut=null,At=null;return{setTest:function(wt){wt?ft(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(wt){ht!==wt&&!L&&(n.depthMask(wt),ht=wt)},setFunc:function(wt){if(ut!==wt){switch(wt){case Cv:n.depthFunc(n.NEVER);break;case Rv:n.depthFunc(n.ALWAYS);break;case Iv:n.depthFunc(n.LESS);break;case Fc:n.depthFunc(n.LEQUAL);break;case Lv:n.depthFunc(n.EQUAL);break;case Pv:n.depthFunc(n.GEQUAL);break;case Uv:n.depthFunc(n.GREATER);break;case Dv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=wt}},setLocked:function(wt){L=wt},setClear:function(wt){At!==wt&&(n.clearDepth(wt),At=wt)},reset:function(){L=!1,ht=null,ut=null,At=null}}}function a(){let L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Le=null,Ke=null;return{setTest:function(se){L||(se?ft(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!L&&(n.stencilMask(se),ht=se)},setFunc:function(se,Qe,ii){(ut!==se||At!==Qe||wt!==ii)&&(n.stencilFunc(se,Qe,ii),ut=se,At=Qe,wt=ii)},setOp:function(se,Qe,ii){(ie!==se||re!==Qe||Le!==ii)&&(n.stencilOp(se,Qe,ii),ie=se,re=Qe,Le=ii)},setLocked:function(se){L=se},setClear:function(se){Ke!==se&&(n.clearStencil(se),Ke=se)},reset:function(){L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Le=null,Ke=null}}}let o=new r,c=new s,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},x=new WeakMap,y=[],m=null,p=!1,v=null,_=null,S=null,A=null,C=null,R=null,z=null,M=new Rt(0,0,0),T=0,N=!1,W=null,G=null,I=null,U=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,q=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=q>=2);let Z=null,nt={},B=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ot=new Ne().fromArray(B),tt=new Ne().fromArray(j);function st(L,ht,ut,At){let wt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<ut;re++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(ht+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return ie}let at={};at[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),c.setFunc(Fc),Lt(!1),E(tm),ft(n.CULL_FACE),rt(ir);function ft(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function gt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function vt(L,ht){return f[L]!==ht?(n.bindFramebuffer(L,ht),f[L]=ht,i&&(L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ht),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function O(L,ht){let ut=y,At=!1;if(L)if(ut=x.get(ht),ut===void 0&&(ut=[],x.set(ht,ut)),L.isWebGLMultipleRenderTargets){let wt=L.texture;if(ut.length!==wt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,re=wt.length;ie<re;ie++)ut[ie]=n.COLOR_ATTACHMENT0+ie;ut.length=wt.length,At=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,At=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function le(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let _t={[Nr]:n.FUNC_ADD,[fv]:n.FUNC_SUBTRACT,[pv]:n.FUNC_REVERSE_SUBTRACT};if(i)_t[rm]=n.MIN,_t[sm]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(_t[rm]=L.MIN_EXT,_t[sm]=L.MAX_EXT)}let mt={[mv]:n.ZERO,[gv]:n.ONE,[xv]:n.SRC_COLOR,[wu]:n.SRC_ALPHA,[Sv]:n.SRC_ALPHA_SATURATE,[bv]:n.DST_COLOR,[_v]:n.DST_ALPHA,[yv]:n.ONE_MINUS_SRC_COLOR,[Eu]:n.ONE_MINUS_SRC_ALPHA,[Mv]:n.ONE_MINUS_DST_COLOR,[vv]:n.ONE_MINUS_DST_ALPHA,[wv]:n.CONSTANT_COLOR,[Ev]:n.ONE_MINUS_CONSTANT_COLOR,[Tv]:n.CONSTANT_ALPHA,[Av]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,ht,ut,At,wt,ie,re,Le,Ke,se){if(L===ir){p===!0&&(gt(n.BLEND),p=!1);return}if(p===!1&&(ft(n.BLEND),p=!0),L!==dv){if(L!==v||se!==N){if((_!==Nr||C!==Nr)&&(n.blendEquation(n.FUNC_ADD),_=Nr,C=Nr),se)switch(L){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case em:n.blendFunc(n.ONE,n.ONE);break;case nm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case im:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case em:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case im:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,A=null,R=null,z=null,M.set(0,0,0),T=0,v=L,N=se}return}wt=wt||ht,ie=ie||ut,re=re||At,(ht!==_||wt!==C)&&(n.blendEquationSeparate(_t[ht],_t[wt]),_=ht,C=wt),(ut!==S||At!==A||ie!==R||re!==z)&&(n.blendFuncSeparate(mt[ut],mt[At],mt[ie],mt[re]),S=ut,A=At,R=ie,z=re),(Le.equals(M)===!1||Ke!==T)&&(n.blendColor(Le.r,Le.g,Le.b,Ke),M.copy(Le),T=Ke),v=L,N=!1}function ne(L,ht){L.side===Xn?gt(n.CULL_FACE):ft(n.CULL_FACE);let ut=L.side===$e;ht&&(ut=!ut),Lt(ut),L.blending===Fs&&L.transparent===!1?rt(ir):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);let At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){W!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),W=L)}function E(L){L!==hv?(ft(n.CULL_FACE),L!==G&&(L===tm?n.cullFace(n.BACK):L===uv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),G=L}function b(L){L!==I&&($&&n.lineWidth(L),I=L)}function F(L,ht,ut){L?(ft(n.POLYGON_OFFSET_FILL),(U!==ht||X!==ut)&&(n.polygonOffset(ht,ut),U=ht,X=ut)):gt(n.POLYGON_OFFSET_FILL)}function et(L){L?ft(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Q(L){L===void 0&&(L=n.TEXTURE0+Y-1),Z!==L&&(n.activeTexture(L),Z=L)}function it(L,ht,ut){ut===void 0&&(Z===null?ut=n.TEXTURE0+Y-1:ut=Z);let At=nt[ut];At===void 0&&(At={type:void 0,texture:void 0},nt[ut]=At),(At.type!==L||At.texture!==ht)&&(Z!==ut&&(n.activeTexture(ut),Z=ut),n.bindTexture(L,ht||at[L]),At.type=L,At.texture=ht)}function bt(){let L=nt[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Jt(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function xe(L,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let At=ut.get(L);At===void 0&&(At=n.getUniformBlockIndex(ht,L.name),ut.set(L,At))}function Bt(L,ht){let At=u.get(ht).get(L);h.get(ht)!==At&&(n.uniformBlockBinding(ht,At,L.__bindingPointIndex),h.set(ht,At))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,nt={},f={},x=new WeakMap,y=[],m=null,p=!1,v=null,_=null,S=null,A=null,C=null,R=null,z=null,M=new Rt(0,0,0),T=0,N=!1,W=null,G=null,I=null,U=null,X=null,ot.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ft,disable:gt,bindFramebuffer:vt,drawBuffers:O,useProgram:le,setBlending:rt,setMaterial:ne,setFlipSided:Lt,setCullFace:E,setLineWidth:b,setPolygonOffset:F,setScissorTest:et,activeTexture:Q,bindTexture:it,unbindTexture:bt,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:St,texImage3D:yt,updateUBOMapping:xe,uniformBlockBinding:Bt,texStorage2D:Gt,texStorage3D:It,texSubImage2D:Tt,texSubImage3D:zt,compressedTexSubImage2D:K,compressedTexSubImage3D:Kt,scissor:Nt,viewport:Jt,reset:ct}}function lE(n,t,e,i,r,s,a){let o=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,b){return f?new OffscreenCanvas(E,b):qc("canvas")}function y(E,b,F,et){let Q=1;if((E.width>et||E.height>et)&&(Q=et/Math.max(E.width,E.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let it=b?Xc:Math.floor,bt=it(Q*E.width),dt=it(Q*E.height);u===void 0&&(u=x(bt,dt));let xt=F?x(bt,dt):u;return xt.width=bt,xt.height=dt,xt.getContext("2d").drawImage(E,0,0,bt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+bt+"x"+dt+")."),xt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Lu(E.width)&&Lu(E.height)}function p(E){return o?!1:E.wrapS!==qn||E.wrapT!==qn||E.minFilter!==nn&&E.minFilter!==Pn}function v(E,b){return E.generateMipmaps&&b&&E.minFilter!==nn&&E.minFilter!==Pn}function _(E){n.generateMipmap(E)}function S(E,b,F,et,Q=!1){if(o===!1)return b;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let it=b;if(b===n.RED&&(F===n.FLOAT&&(it=n.R32F),F===n.HALF_FLOAT&&(it=n.R16F),F===n.UNSIGNED_BYTE&&(it=n.R8)),b===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(it=n.R8UI),F===n.UNSIGNED_SHORT&&(it=n.R16UI),F===n.UNSIGNED_INT&&(it=n.R32UI),F===n.BYTE&&(it=n.R8I),F===n.SHORT&&(it=n.R16I),F===n.INT&&(it=n.R32I)),b===n.RG&&(F===n.FLOAT&&(it=n.RG32F),F===n.HALF_FLOAT&&(it=n.RG16F),F===n.UNSIGNED_BYTE&&(it=n.RG8)),b===n.RGBA){let bt=Q?Vc:Qt.getTransfer(et);F===n.FLOAT&&(it=n.RGBA32F),F===n.HALF_FLOAT&&(it=n.RGBA16F),F===n.UNSIGNED_BYTE&&(it=bt===ae?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function A(E,b,F){return v(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function C(E){return E===nn||E===om||E===qh?n.NEAREST:n.LINEAR}function R(E){let b=E.target;b.removeEventListener("dispose",R),M(b),b.isVideoTexture&&h.delete(b)}function z(E){let b=E.target;b.removeEventListener("dispose",z),N(b)}function M(E){let b=i.get(E);if(b.__webglInit===void 0)return;let F=E.source,et=d.get(F);if(et){let Q=et[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(et).length===0&&d.delete(F)}i.remove(E)}function T(E){let b=i.get(E);n.deleteTexture(b.__webglTexture);let F=E.source,et=d.get(F);delete et[b.__cacheKey],a.memory.textures--}function N(E){let b=E.texture,F=i.get(E),et=i.get(b);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let it=0;it<F.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(F.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)n.deleteFramebuffer(F.__webglFramebuffer[Q]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,it=b.length;Q<it;Q++){let bt=i.get(b[Q]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),a.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(E)}let W=0;function G(){W=0}function I(){let E=W;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),W+=1,E}function U(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function X(E,b){let F=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,E,b);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+b)}function Y(E,b){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+b)}function $(E,b){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,b);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+b)}function q(E,b){let F=i.get(E);if(E.version>0&&F.__version!==E.version){tt(F,E,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+b)}let J={[Cu]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Ru]:n.MIRRORED_REPEAT},Z={[nn]:n.NEAREST,[om]:n.NEAREST_MIPMAP_NEAREST,[qh]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Gv]:n.LINEAR_MIPMAP_NEAREST,[jo]:n.LINEAR_MIPMAP_LINEAR},nt={[eb]:n.NEVER,[ab]:n.ALWAYS,[nb]:n.LESS,[Vg]:n.LEQUAL,[ib]:n.EQUAL,[ob]:n.GEQUAL,[rb]:n.GREATER,[sb]:n.NOTEQUAL};function B(E,b,F){if(F?(n.texParameteri(E,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,J[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Z[b.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==qn||b.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,C(b.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==nn&&b.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===nn||b.minFilter!==qh&&b.minFilter!==jo||b.type===nr&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Jo&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function j(E,b){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R));let et=b.source,Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));let it=U(b);if(it!==E.__cacheKey){Q[it]===void 0&&(Q[it]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[it].usedTimes++;let bt=Q[E.__cacheKey];bt!==void 0&&(Q[E.__cacheKey].usedTimes--,bt.usedTimes===0&&T(b)),E.__cacheKey=it,E.__webglTexture=Q[it].texture}return F}function ot(E,b,F){let et=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=n.TEXTURE_3D);let Q=j(E,b),it=b.source;e.bindTexture(et,E.__webglTexture,n.TEXTURE0+F);let bt=i.get(it);if(it.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+F);let dt=Qt.getPrimaries(Qt.workingColorSpace),xt=b.colorSpace===Un?null:Qt.getPrimaries(b.colorSpace),Tt=b.colorSpace===Un||dt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let zt=p(b)&&m(b.image)===!1,K=y(b.image,zt,!1,r.maxTextureSize);K=Lt(b,K);let Kt=m(K)||o,Gt=s.convert(b.format,b.colorSpace),It=s.convert(b.type),St=S(b.internalFormat,Gt,It,b.colorSpace,b.isVideoTexture);B(et,b,Kt);let yt,Nt=b.mipmaps,Jt=o&&b.isVideoTexture!==!0&&St!==Fg,xe=bt.__version===void 0||Q===!0,Bt=A(b,K,Kt);if(b.isDepthTexture)St=n.DEPTH_COMPONENT,o?b.type===nr?St=n.DEPTH_COMPONENT32F:b.type===er?St=n.DEPTH_COMPONENT24:b.type===Fr?St=n.DEPTH24_STENCIL8:St=n.DEPTH_COMPONENT16:b.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===kr&&St===n.DEPTH_COMPONENT&&b.type!==hd&&b.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=er,It=s.convert(b.type)),b.format===Ws&&St===n.DEPTH_COMPONENT&&(St=n.DEPTH_STENCIL,b.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Fr,It=s.convert(b.type))),xe&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,St,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Gt,It,null));else if(b.isDataTexture)if(Nt.length>0&&Kt){Jt&&xe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,Nt[0].width,Nt[0].height);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,It,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Gt,It,yt.data);b.generateMipmaps=!1}else Jt?(xe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Gt,It,K.data)):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Gt,It,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,St,Nt[0].width,Nt[0].height,K.depth);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],b.format!==$n?Gt!==null?Jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Gt,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Gt,It,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,Gt,It,yt.data)}else{Jt&&xe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,Nt[0].width,Nt[0].height);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],b.format!==$n?Gt!==null?Jt?e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,It,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Gt,It,yt.data)}else if(b.isDataArrayTexture)Jt?(xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Gt,It,K.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,K.width,K.height,K.depth,0,Gt,It,K.data);else if(b.isData3DTexture)Jt?(xe&&e.texStorage3D(n.TEXTURE_3D,Bt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Gt,It,K.data)):e.texImage3D(n.TEXTURE_3D,0,St,K.width,K.height,K.depth,0,Gt,It,K.data);else if(b.isFramebufferTexture){if(xe)if(Jt)e.texStorage2D(n.TEXTURE_2D,Bt,St,K.width,K.height);else{let ct=K.width,L=K.height;for(let ht=0;ht<Bt;ht++)e.texImage2D(n.TEXTURE_2D,ht,St,ct,L,0,Gt,It,null),ct>>=1,L>>=1}}else if(Nt.length>0&&Kt){Jt&&xe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,Nt[0].width,Nt[0].height);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Gt,It,yt):e.texImage2D(n.TEXTURE_2D,ct,St,Gt,It,yt);b.generateMipmaps=!1}else Jt?(xe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,It,K)):e.texImage2D(n.TEXTURE_2D,0,St,Gt,It,K);v(b,Kt)&&_(et),bt.__version=it.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function tt(E,b,F){if(b.image.length!==6)return;let et=j(E,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let it=i.get(Q);if(Q.version!==it.__version||et===!0){e.activeTexture(n.TEXTURE0+F);let bt=Qt.getPrimaries(Qt.workingColorSpace),dt=b.colorSpace===Un?null:Qt.getPrimaries(b.colorSpace),xt=b.colorSpace===Un||bt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,zt=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ct=0;ct<6;ct++)!Tt&&!zt?K[ct]=y(b.image[ct],!1,!0,r.maxCubemapSize):K[ct]=zt?b.image[ct].image:b.image[ct],K[ct]=Lt(b,K[ct]);let Kt=K[0],Gt=m(Kt)||o,It=s.convert(b.format,b.colorSpace),St=s.convert(b.type),yt=S(b.internalFormat,It,St,b.colorSpace),Nt=o&&b.isVideoTexture!==!0,Jt=it.__version===void 0||et===!0,xe=A(b,Kt,Gt);B(n.TEXTURE_CUBE_MAP,b,Gt);let Bt;if(Tt){Nt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xe,yt,Kt.width,Kt.height);for(let ct=0;ct<6;ct++){Bt=K[ct].mipmaps;for(let L=0;L<Bt.length;L++){let ht=Bt[L];b.format!==$n?It!==null?Nt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,It,St,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,It,St,ht.data)}}}else{Bt=b.mipmaps,Nt&&Jt&&(Bt.length>0&&xe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,xe,yt,K[0].width,K[0].height));for(let ct=0;ct<6;ct++)if(zt){Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,K[ct].width,K[ct].height,It,St,K[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,K[ct].width,K[ct].height,0,It,St,K[ct].data);for(let L=0;L<Bt.length;L++){let ut=Bt[L].image[ct].image;Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,ut.width,ut.height,It,St,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,ut.width,ut.height,0,It,St,ut.data)}}else{Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,St,K[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,It,St,K[ct]);for(let L=0;L<Bt.length;L++){let ht=Bt[L];Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,It,St,ht.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,It,St,ht.image[ct])}}}v(b,Gt)&&_(n.TEXTURE_CUBE_MAP),it.__version=Q.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function st(E,b,F,et,Q,it){let bt=s.convert(F.format,F.colorSpace),dt=s.convert(F.type),xt=S(F.internalFormat,bt,dt,F.colorSpace);if(!i.get(b).__hasExternalTextures){let zt=Math.max(1,b.width>>it),K=Math.max(1,b.height>>it);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,it,xt,zt,K,b.depth,0,bt,dt,null):e.texImage2D(Q,it,xt,zt,K,0,bt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,i.get(F).__webglTexture,0,mt(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,i.get(F).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(E,b,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let et=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||rt(b)){let Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===nr?et=n.DEPTH_COMPONENT32F:Q.type===er&&(et=n.DEPTH_COMPONENT24));let it=mt(b);rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,et,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,et,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){let et=mt(b);F&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let et=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<et.length;Q++){let it=et[Q],bt=s.convert(it.format,it.colorSpace),dt=s.convert(it.type),xt=S(it.internalFormat,bt,dt,it.colorSpace),Tt=mt(b);F&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,xt,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,xt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let et=i.get(b.depthTexture).__webglTexture,Q=mt(b);if(b.depthTexture.format===kr)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===Ws)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function gt(E){let b=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,E)}else if(F){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]=n.createRenderbuffer(),at(b.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),at(b.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(E,b,F){let et=i.get(E);b!==void 0&&st(et.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&gt(E)}function O(E){let b=E.texture,F=i.get(E),et=i.get(b);E.addEventListener("dispose",z),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=b.version,a.memory.textures++);let Q=E.isWebGLCubeRenderTarget===!0,it=E.isWebGLMultipleRenderTargets===!0,bt=m(E)||o;if(Q){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)F.__webglFramebuffer[dt][xt]=n.createFramebuffer()}else F.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)F.__webglFramebuffer[dt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(it)if(r.drawBuffers){let dt=E.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let zt=i.get(dt[xt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&rt(E)===!1){let dt=it?b:[b];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){let Tt=dt[xt];F.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[xt]);let zt=s.convert(Tt.format,Tt.colorSpace),K=s.convert(Tt.type),Kt=S(Tt.internalFormat,zt,K,Tt.colorSpace,E.isXRRenderTarget===!0),Gt=mt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Kt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,F.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),at(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),B(n.TEXTURE_CUBE_MAP,b,bt);for(let dt=0;dt<6;dt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(F.__webglFramebuffer[dt][xt],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else st(F.__webglFramebuffer[dt],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(b,bt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let dt=E.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let zt=dt[xt],K=i.get(zt);e.bindTexture(n.TEXTURE_2D,K.__webglTexture),B(n.TEXTURE_2D,zt,bt),st(F.__webglFramebuffer,E,zt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),v(zt,bt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?dt=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,et.__webglTexture),B(dt,b,bt),o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(F.__webglFramebuffer[xt],E,b,n.COLOR_ATTACHMENT0,dt,xt);else st(F.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,dt,0);v(b,bt)&&_(dt),e.unbindTexture()}E.depthBuffer&&gt(E)}function le(E){let b=m(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,Q=F.length;et<Q;et++){let it=F[et];if(v(it,b)){let bt=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(it).__webglTexture;e.bindTexture(bt,dt),_(bt),e.unbindTexture()}}}function _t(E){if(o&&E.samples>0&&rt(E)===!1){let b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,et=E.height,Q=n.COLOR_BUFFER_BIT,it=[],bt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(E),xt=E.isWebGLMultipleRenderTargets===!0;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){it.push(n.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&it.push(bt);let zt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(zt===!1&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]),zt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),xt){let K=i.get(b[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,F,et,0,0,F,et,Q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]);let zt=i.get(b[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function mt(E){return Math.min(r.maxSamples,E.samples)}function rt(E){let b=i.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(E){let b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function Lt(E,b){let F=E.colorSpace,et=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Iu||F!==Li&&F!==Un&&(Qt.getTransfer(F)===ae?o===!1?t.has("EXT_sRGB")===!0&&et===$n?(E.format=Iu,E.minFilter=Pn,E.generateMipmaps=!1):b=$c.sRGBToLinear(b):(et!==$n||Q!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=I,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=vt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=rt}function hE(n,t,e){let i=e.isWebGL2;function r(s,a=Un){let o,c=Qt.getTransfer(a);if(s===sr)return n.UNSIGNED_BYTE;if(s===Ug)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Dg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return n.BYTE;if(s===Xv)return n.SHORT;if(s===hd)return n.UNSIGNED_SHORT;if(s===Pg)return n.INT;if(s===er)return n.UNSIGNED_INT;if(s===nr)return n.FLOAT;if(s===Jo)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qv)return n.ALPHA;if(s===$n)return n.RGBA;if(s===$v)return n.LUMINANCE;if(s===Yv)return n.LUMINANCE_ALPHA;if(s===kr)return n.DEPTH_COMPONENT;if(s===Ws)return n.DEPTH_STENCIL;if(s===Iu)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jv)return n.RED;if(s===Ng)return n.RED_INTEGER;if(s===Jv)return n.RG;if(s===Og)return n.RG_INTEGER;if(s===zg)return n.RGBA_INTEGER;if(s===$h||s===Yh||s===jh||s===Jh)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===$h)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$h)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===am||s===cm||s===lm||s===hm)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===am)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fg)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===um||s===dm)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===um)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===dm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fm||s===pm||s===mm||s===gm||s===xm||s===ym||s===_m||s===vm||s===bm||s===Mm||s===Sm||s===wm||s===Em||s===Tm)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===fm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ym)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_m)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Em)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zh||s===Am||s===Cm)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Zh)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Am)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zv||s===Rm||s===Im||s===Lm)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Zh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Rm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Im)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fr?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Wu=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ii=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},uE={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xu=class extends or{constructor(t,e){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,x=null,y=e.getContextAttributes(),m=null,p=null,v=[],_=[],S=new Yt,A=null,C=new sn;C.layers.enable(1),C.viewport=new Ne;let R=new sn;R.layers.enable(2),R.viewport=new Ne;let z=[C,R],M=new Wu;M.layers.enable(1),M.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=v[B];return j===void 0&&(j=new Yo,v[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=v[B];return j===void 0&&(j=new Yo,v[B]=j),j.getGripSpace()},this.getHand=function(B){let j=v[B];return j===void 0&&(j=new Yo,v[B]=j),j.getHandSpace()};function W(B){let j=_.indexOf(B.inputSource);if(j===-1)return;let ot=v[j];ot!==void 0&&(ot.update(B.inputSource,B.frame,l||a),ot.dispatchEvent({type:B.type,data:B.inputSource}))}function G(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",I);for(let B=0;B<v.length;B++){let j=_[B];j!==null&&(_[B]=null,v[B].disconnect(j))}T=null,N=null,t.setRenderTarget(m),f=null,d=null,u=null,r=null,p=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",G),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(S),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new jn(f.framebufferWidth,f.framebufferHeight,{format:$n,type:sr,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ot=null,tt=null;y.depth&&(tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=y.stencil?Ws:kr,ot=y.stencil?Fr:er);let st={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(st),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new jn(d.textureWidth,d.textureHeight,{format:$n,type:sr,depthTexture:new nl(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let at=t.properties.get(p);at.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(B){for(let j=0;j<B.removed.length;j++){let ot=B.removed[j],tt=_.indexOf(ot);tt>=0&&(_[tt]=null,v[tt].disconnect(ot))}for(let j=0;j<B.added.length;j++){let ot=B.added[j],tt=_.indexOf(ot);if(tt===-1){for(let at=0;at<v.length;at++)if(at>=_.length){_.push(ot),tt=at;break}else if(_[at]===null){_[at]=ot,tt=at;break}if(tt===-1)break}let st=v[tt];st&&st.connect(ot)}}let U=new P,X=new P;function Y(B,j,ot){U.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(ot.matrixWorld);let tt=U.distanceTo(X),st=j.projectionMatrix.elements,at=ot.projectionMatrix.elements,ft=st[14]/(st[10]-1),gt=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],O=(st[9]-1)/st[5],le=(st[8]-1)/st[0],_t=(at[8]+1)/at[0],mt=ft*le,rt=ft*_t,ne=tt/(-le+_t),Lt=ne*-le;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Lt),B.translateZ(ne),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let E=ft+ne,b=gt+ne,F=mt-Lt,et=rt+(tt-Lt),Q=vt*gt/b*E,it=O*gt/b*E;B.projectionMatrix.makePerspective(F,et,Q,it,E,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function $(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=R.near=C.near=B.near,M.far=R.far=C.far=B.far,(T!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,N=M.far);let j=B.parent,ot=M.cameras;$(M,j);for(let tt=0;tt<ot.length;tt++)$(ot[tt],j);ot.length===2?Y(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),q(B,M,j)};function q(B,j,ot){ot===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ot.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let J=null;function Z(B,j){if(h=j.getViewerPose(l||a),x=j,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let tt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,tt=!0);for(let st=0;st<ot.length;st++){let at=ot[st],ft=null;if(f!==null)ft=f.getViewport(at);else{let vt=u.getViewSubImage(d,at);ft=vt.viewport,st===0&&(t.setRenderTargetTextures(p,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(p))}let gt=z[st];gt===void 0&&(gt=new sn,gt.layers.enable(st),gt.viewport=new Ne,z[st]=gt),gt.matrix.fromArray(at.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(at.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ft.x,ft.y,ft.width,ft.height),st===0&&(M.matrix.copy(gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),tt===!0&&M.cameras.push(gt)}}for(let ot=0;ot<v.length;ot++){let tt=_[ot],st=v[ot];tt!==null&&st!==void 0&&st.update(tt,j,l||a)}J&&J(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),x=null}let nt=new Xg;nt.setAnimationLoop(Z),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}};function dE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fE(n,t,e,i){let r={},s={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let S=_.program;i.uniformBlockBinding(v,S)}function l(v,_){let S=r[v.id];S===void 0&&(x(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",m));let A=_.program;i.updateUBOMapping(v,A);let C=t.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function h(v){let _=u();v.__bindingPointIndex=_;let S=n.createBuffer(),A=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=r[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,R=S.length;C<R;C++){let z=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,T=z.length;M<T;M++){let N=z[M];if(f(N,C,M,A)===!0){let W=N.__offset,G=Array.isArray(N.value)?N.value:[N.value],I=0;for(let U=0;U<G.length;U++){let X=G[U],Y=y(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,W+I,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,S,A){let C=v.value,R=_+"_"+S;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{let z=A[R];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return A[R]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function x(v){let _=v.uniforms,S=0,A=16;for(let R=0,z=_.length;R<z;R++){let M=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,N=M.length;T<N;T++){let W=M[T],G=Array.isArray(W.value)?W.value:[W.value];for(let I=0,U=G.length;I<U;I++){let X=G[I],Y=y(X),$=S%A;$!==0&&A-$<Y.boundary&&(S+=A-$),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Y.storage}}}let C=S%A;return C>0&&(S+=A-C),v.__size=S,v.__cache={},this}function y(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var ea=class{constructor(t={}){let{canvas:e=Mb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),x=new Int32Array(4),y=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;let _=this,S=!1,A=0,C=0,R=null,z=-1,M=null,T=new Ne,N=new Ne,W=null,G=new Rt(0),I=0,U=e.width,X=e.height,Y=1,$=null,q=null,J=new Ne(0,0,U,X),Z=new Ne(0,0,U,X),nt=!1,B=new ta,j=!1,ot=!1,tt=null,st=new Ee,at=new Yt,ft=new P,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return R===null?Y:1}let O=i;function le(w,D){for(let V=0;V<w.length;V++){let H=w[V],k=e.getContext(H,D);if(k!==null)return k}return null}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ad}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){let D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),O=le(D,w),O===null)throw le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _t,mt,rt,ne,Lt,E,b,F,et,Q,it,bt,dt,xt,Tt,zt,K,Kt,Gt,It,St,yt,Nt,Jt;function xe(){_t=new Pw(O),mt=new Tw(O,_t,t),_t.init(mt),yt=new hE(O,_t,mt),rt=new cE(O,_t,mt),ne=new Nw(O),Lt=new J1,E=new lE(O,_t,rt,Lt,mt,yt,ne),b=new Cw(_),F=new Lw(_),et=new Gb(O,mt),Nt=new ww(O,_t,et,mt),Q=new Uw(O,et,ne,Nt),it=new kw(O,Q,et,ne),Gt=new Fw(O,mt,E),zt=new Aw(Lt),bt=new j1(_,b,F,_t,mt,Nt,zt),dt=new dE(_,Lt),xt=new K1,Tt=new rE(_t,mt),Kt=new Sw(_,b,F,rt,it,d,c),K=new aE(_,it,mt),Jt=new fE(O,ne,mt,rt),It=new Ew(O,_t,ne,mt),St=new Dw(O,_t,ne,mt),ne.programs=bt.programs,_.capabilities=mt,_.extensions=_t,_.properties=Lt,_.renderLists=xt,_.shadowMap=K,_.state=rt,_.info=ne}xe();let Bt=new Xu(_,O);this.xr=Bt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=_t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=_t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(U,X,!1))},this.getSize=function(w){return w.set(U,X)},this.setSize=function(w,D,V=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,X=D,e.width=Math.floor(w*Y),e.height=Math.floor(D*Y),V===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(U*Y,X*Y).floor()},this.setDrawingBufferSize=function(w,D,V){U=w,X=D,Y=V,e.width=Math.floor(w*V),e.height=Math.floor(D*V),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,D,V,H){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,D,V,H),rt.viewport(T.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,D,V,H){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,D,V,H),rt.scissor(N.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){rt.setScissorTest(nt=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(w=!0,D=!0,V=!0){let H=0;if(w){let k=!1;if(R!==null){let pt=R.texture.format;k=pt===zg||pt===Og||pt===Ng}if(k){let pt=R.texture.type,Mt=pt===sr||pt===er||pt===hd||pt===Fr||pt===Ug||pt===Dg,Et=Kt.getClearColor(),Ct=Kt.getClearAlpha(),Ft=Et.r,Pt=Et.g,Ut=Et.b;Mt?(f[0]=Ft,f[1]=Pt,f[2]=Ut,f[3]=Ct,O.clearBufferuiv(O.COLOR,0,f)):(x[0]=Ft,x[1]=Pt,x[2]=Ut,x[3]=Ct,O.clearBufferiv(O.COLOR,0,x))}else H|=O.COLOR_BUFFER_BIT}D&&(H|=O.DEPTH_BUFFER_BIT),V&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),xt.dispose(),Tt.dispose(),Lt.dispose(),b.dispose(),F.dispose(),it.dispose(),Nt.dispose(),Jt.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Ke),Bt.removeEventListener("sessionend",se),tt&&(tt.dispose(),tt=null),Qe.stop()};function ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let w=ne.autoReset,D=K.enabled,V=K.autoUpdate,H=K.needsUpdate,k=K.type;xe(),ne.autoReset=w,K.enabled=D,K.autoUpdate=V,K.needsUpdate=H,K.type=k}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){let D=w.target;D.removeEventListener("dispose",ut),At(D)}function At(w){wt(w),Lt.remove(w)}function wt(w){let D=Lt.get(w).programs;D!==void 0&&(D.forEach(function(V){bt.releaseProgram(V)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,V,H,k,pt){D===null&&(D=gt);let Mt=k.isMesh&&k.matrixWorld.determinant()<0,Et=ov(w,D,V,H,k);rt.setMaterial(H,Mt);let Ct=V.index,Ft=1;if(H.wireframe===!0){if(Ct=Q.getWireframeAttribute(V),Ct===void 0)return;Ft=2}let Pt=V.drawRange,Ut=V.attributes.position,ve=Pt.start*Ft,bn=(Pt.start+Pt.count)*Ft;pt!==null&&(ve=Math.max(ve,pt.start*Ft),bn=Math.min(bn,(pt.start+pt.count)*Ft)),Ct!==null?(ve=Math.max(ve,0),bn=Math.min(bn,Ct.count)):Ut!=null&&(ve=Math.max(ve,0),bn=Math.min(bn,Ut.count));let Pe=bn-ve;if(Pe<0||Pe===1/0)return;Nt.setup(k,H,Et,V,Ct);let Mi,me=It;if(Ct!==null&&(Mi=et.get(Ct),me=St,me.setIndex(Mi)),k.isMesh)H.wireframe===!0?(rt.setLineWidth(H.wireframeLinewidth*vt()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(k.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),rt.setLineWidth(Vt*vt()),k.isLineSegments?me.setMode(O.LINES):k.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else k.isPoints?me.setMode(O.POINTS):k.isSprite&&me.setMode(O.TRIANGLES);if(k.isBatchedMesh)me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)me.renderInstances(ve,Pe,k.count);else if(V.isInstancedBufferGeometry){let Vt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Hh=Math.min(V.instanceCount,Vt);me.renderInstances(ve,Pe,Hh)}else me.render(ve,Pe)};function ie(w,D,V){w.transparent===!0&&w.side===Xn&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,hc(w,D,V),w.side=pn,w.needsUpdate=!0,hc(w,D,V),w.side=Xn):hc(w,D,V)}this.compile=function(w,D,V=null){V===null&&(V=w),m=Tt.get(V),m.init(),v.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);let H=new Set;return w.traverse(function(k){let pt=k.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let Et=pt[Mt];ie(Et,V,k),H.add(Et)}else ie(pt,V,k),H.add(pt)}),v.pop(),m=null,H},this.compileAsync=function(w,D,V=null){let H=this.compile(w,D,V);return new Promise(k=>{function pt(){if(H.forEach(function(Mt){Lt.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){k(w);return}setTimeout(pt,10)}_t.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function Le(w){re&&re(w)}function Ke(){Qe.stop()}function se(){Qe.start()}let Qe=new Xg;Qe.setAnimationLoop(Le),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(w){re=w,Bt.setAnimationLoop(w),w===null?Qe.stop():Qe.start()},Bt.addEventListener("sessionstart",Ke),Bt.addEventListener("sessionend",se),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(D),D=Bt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,D,R),m=Tt.get(w,v.length),m.init(),v.push(m),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(st),ot=this.localClippingEnabled,j=zt.init(this.clippingPlanes,ot),y=xt.get(w,p.length),y.init(),p.push(y),ii(w,D,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort($,q),this.info.render.frame++,j===!0&&zt.beginShadows();let V=m.state.shadowsArray;if(K.render(V,w,D),j===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(y,w),m.setupLights(_._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let k=0,pt=H.length;k<pt;k++){let Mt=H[k];Yp(y,w,Mt,Mt.viewport)}}else Yp(y,w,D);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,D),Nt.resetDefaultState(),z=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function ii(w,D,V,H){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){H&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);let Mt=it.update(w),Et=w.material;Et.visible&&y.push(w,Mt,Et,V,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){let Mt=it.update(w),Et=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ft.copy(Mt.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(Et)){let Ct=Mt.groups;for(let Ft=0,Pt=Ct.length;Ft<Pt;Ft++){let Ut=Ct[Ft],ve=Et[Ut.materialIndex];ve&&ve.visible&&y.push(w,Mt,ve,V,ft.z,Ut)}}else Et.visible&&y.push(w,Mt,Et,V,ft.z,null)}}let pt=w.children;for(let Mt=0,Et=pt.length;Mt<Et;Mt++)ii(pt[Mt],D,V,H)}function Yp(w,D,V,H){let k=w.opaque,pt=w.transmissive,Mt=w.transparent;m.setupLightsView(V),j===!0&&zt.setGlobalState(_.clippingPlanes,V),pt.length>0&&sv(k,pt,D,V),H&&rt.viewport(T.copy(H)),k.length>0&&lc(k,D,V),pt.length>0&&lc(pt,D,V),Mt.length>0&&lc(Mt,D,V),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function sv(w,D,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let pt=mt.isWebGL2;tt===null&&(tt=new jn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Jo:sr,minFilter:jo,samples:pt?4:0})),_.getDrawingBufferSize(at),pt?tt.setSize(at.x,at.y):tt.setSize(Xc(at.x),Xc(at.y));let Mt=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor(G),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Et=_.toneMapping;_.toneMapping=rr,lc(w,V,H),E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt);let Ct=!1;for(let Ft=0,Pt=D.length;Ft<Pt;Ft++){let Ut=D[Ft],ve=Ut.object,bn=Ut.geometry,Pe=Ut.material,Mi=Ut.group;if(Pe.side===Xn&&ve.layers.test(H.layers)){let me=Pe.side;Pe.side=$e,Pe.needsUpdate=!0,jp(ve,V,H,bn,Pe,Mi),Pe.side=me,Pe.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt)),_.setRenderTarget(Mt),_.setClearColor(G,I),_.toneMapping=Et}function lc(w,D,V){let H=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pt=w.length;k<pt;k++){let Mt=w[k],Et=Mt.object,Ct=Mt.geometry,Ft=H===null?Mt.material:H,Pt=Mt.group;Et.layers.test(V.layers)&&jp(Et,D,V,Ct,Ft,Pt)}}function jp(w,D,V,H,k,pt){w.onBeforeRender(_,D,V,H,k,pt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,D,V,H,w,pt),k.transparent===!0&&k.side===Xn&&k.forceSinglePass===!1?(k.side=$e,k.needsUpdate=!0,_.renderBufferDirect(V,D,H,k,w,pt),k.side=pn,k.needsUpdate=!0,_.renderBufferDirect(V,D,H,k,w,pt),k.side=Xn):_.renderBufferDirect(V,D,H,k,w,pt),w.onAfterRender(_,D,V,H,k,pt)}function hc(w,D,V){D.isScene!==!0&&(D=gt);let H=Lt.get(w),k=m.state.lights,pt=m.state.shadowsArray,Mt=k.state.version,Et=bt.getParameters(w,k.state,pt,D,V),Ct=bt.getProgramCacheKey(Et),Ft=H.programs;H.environment=w.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(w.isMeshStandardMaterial?F:b).get(w.envMap||H.environment),Ft===void 0&&(w.addEventListener("dispose",ut),Ft=new Map,H.programs=Ft);let Pt=Ft.get(Ct);if(Pt!==void 0){if(H.currentProgram===Pt&&H.lightsStateVersion===Mt)return Zp(w,Et),Pt}else Et.uniforms=bt.getUniforms(w),w.onBuild(V,Et,_),w.onBeforeCompile(Et,_),Pt=bt.acquireProgram(Et,Ct),Ft.set(Ct,Pt),H.uniforms=Et.uniforms;let Ut=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=zt.uniform),Zp(w,Et),H.needsLights=cv(w),H.lightsStateVersion=Mt,H.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Pt,H.uniformsList=null,Pt}function Jp(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Vs.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Zp(w,D){let V=Lt.get(w);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function ov(w,D,V,H,k){D.isScene!==!0&&(D=gt),E.resetTextureUnits();let pt=D.fog,Mt=H.isMeshStandardMaterial?D.environment:null,Et=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Li,Ct=(H.isMeshStandardMaterial?F:b).get(H.envMap||Mt),Ft=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!V.morphAttributes.position,ve=!!V.morphAttributes.normal,bn=!!V.morphAttributes.color,Pe=rr;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let Mi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=Mi!==void 0?Mi.length:0,Vt=Lt.get(H),Hh=m.state.lights;if(j===!0&&(ot===!0||w!==M)){let In=w===M&&H.id===z;zt.setState(H,w,In)}let ye=!1;H.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Hh.state.version||Vt.outputColorSpace!==Et||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||Vt.envMap!==Ct||H.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==zt.numPlanes||Vt.numIntersection!==zt.numIntersection)||Vt.vertexAlphas!==Ft||Vt.vertexTangents!==Pt||Vt.morphTargets!==Ut||Vt.morphNormals!==ve||Vt.morphColors!==bn||Vt.toneMapping!==Pe||mt.isWebGL2===!0&&Vt.morphTargetsCount!==me)&&(ye=!0):(ye=!0,Vt.__version=H.version);let Cr=Vt.currentProgram;ye===!0&&(Cr=hc(H,D,k));let Kp=!1,Vo=!1,Gh=!1,We=Cr.getUniforms(),Rr=Vt.uniforms;if(rt.useProgram(Cr.program)&&(Kp=!0,Vo=!0,Gh=!0),H.id!==z&&(z=H.id,Vo=!0),Kp||M!==w){We.setValue(O,"projectionMatrix",w.projectionMatrix),We.setValue(O,"viewMatrix",w.matrixWorldInverse);let In=We.map.cameraPosition;In!==void 0&&In.setValue(O,ft.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&We.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&We.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Vo=!0,Gh=!0)}if(k.isSkinnedMesh){We.setOptional(O,k,"bindMatrix"),We.setOptional(O,k,"bindMatrixInverse");let In=k.skeleton;In&&(mt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),We.setValue(O,"boneTexture",In.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(We.setOptional(O,k,"batchingTexture"),We.setValue(O,"batchingTexture",k._matricesTexture,E));let Wh=V.morphAttributes;if((Wh.position!==void 0||Wh.normal!==void 0||Wh.color!==void 0&&mt.isWebGL2===!0)&&Gt.update(k,V,Cr),(Vo||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,We.setValue(O,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Rr.envMap.value=Ct,Rr.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Vo&&(We.setValue(O,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&av(Rr,Gh),pt&&H.fog===!0&&dt.refreshFogUniforms(Rr,pt),dt.refreshMaterialUniforms(Rr,H,Y,X,tt),Vs.upload(O,Jp(Vt),Rr,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Vs.upload(O,Jp(Vt),Rr,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&We.setValue(O,"center",k.center),We.setValue(O,"modelViewMatrix",k.modelViewMatrix),We.setValue(O,"normalMatrix",k.normalMatrix),We.setValue(O,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let In=H.uniformsGroups;for(let Xh=0,lv=In.length;Xh<lv;Xh++)if(mt.isWebGL2){let Qp=In[Xh];Jt.update(Qp,Cr),Jt.bind(Qp,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function av(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function cv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,V){Lt.get(w.texture).__webglTexture=D,Lt.get(w.depthTexture).__webglTexture=V;let H=Lt.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){let V=Lt.get(w);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,V=0){R=w,A=D,C=V;let H=!0,k=null,pt=!1,Mt=!1;if(w){let Ct=Lt.get(w);Ct.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Ct.__webglFramebuffer===void 0?E.setupRenderTarget(w):Ct.__hasExternalTextures&&E.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);let Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);let Pt=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?k=Pt[D][V]:k=Pt[D],pt=!0):mt.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?k=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[V]:k=Pt,T.copy(w.viewport),N.copy(w.scissor),W=w.scissorTest}else T.copy(J).multiplyScalar(Y).floor(),N.copy(Z).multiplyScalar(Y).floor(),W=nt;if(rt.bindFramebuffer(O.FRAMEBUFFER,k)&&mt.drawBuffers&&H&&rt.drawBuffers(w,k),rt.viewport(T),rt.scissor(N),rt.setScissorTest(W),pt){let Ct=Lt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ct.__webglTexture,V)}else if(Mt){let Ct=Lt.get(w.texture),Ft=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,V||0,Ft)}z=-1},this.readRenderTargetPixels=function(w,D,V,H,k,pt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){rt.bindFramebuffer(O.FRAMEBUFFER,Et);try{let Ct=w.texture,Ft=Ct.format,Pt=Ct.type;if(Ft!==$n&&yt.convert(Ft)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Pt===Jo&&(_t.has("EXT_color_buffer_half_float")||mt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Pt!==sr&&yt.convert(Pt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===nr&&(mt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-H&&V>=0&&V<=w.height-k&&O.readPixels(D,V,H,k,yt.convert(Ft),yt.convert(Pt),pt)}finally{let Ct=R!==null?Lt.get(R).__webglFramebuffer:null;rt.bindFramebuffer(O.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(w,D,V=0){let H=Math.pow(2,-V),k=Math.floor(D.image.width*H),pt=Math.floor(D.image.height*H);E.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,w.x,w.y,k,pt),rt.unbindTexture()},this.copyTextureToTexture=function(w,D,V,H=0){let k=D.image.width,pt=D.image.height,Mt=yt.convert(V.format),Et=yt.convert(V.type);E.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,w.x,w.y,k,pt,Mt,Et,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,Mt,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,w.x,w.y,Mt,Et,D.image),H===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,V,H,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,Et=w.max.z-w.min.z+1,Ct=yt.convert(H.format),Ft=yt.convert(H.type),Pt;if(H.isData3DTexture)E.setTexture3D(H,0),Pt=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Pt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Ut=O.getParameter(O.UNPACK_ROW_LENGTH),ve=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=O.getParameter(O.UNPACK_SKIP_PIXELS),Pe=O.getParameter(O.UNPACK_SKIP_ROWS),Mi=O.getParameter(O.UNPACK_SKIP_IMAGES),me=V.isCompressedTexture?V.mipmaps[k]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(Pt,k,D.x,D.y,D.z,pt,Mt,Et,Ct,Ft,me.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pt,k,D.x,D.y,D.z,pt,Mt,Et,Ct,me.data)):O.texSubImage3D(Pt,k,D.x,D.y,D.z,pt,Mt,Et,Ct,Ft,me),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mi),k===0&&H.generateMipmaps&&O.generateMipmap(Pt),rt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),rt.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,rt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ud?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ll?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Br:kg}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Br?ke:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},qu=class extends ea{};qu.prototype.isWebGL1Renderer=!0;var il=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Di=class extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mg=new P,Sg=new P,wg=new Ee,bu=new Ko,Uc=new Xs,$u=class extends an{constructor(t=new cn,e=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Mg.fromBufferAttribute(e,r-1),Sg.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Mg.distanceTo(Sg);t.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(r),Uc.radius+=s,t.ray.intersectsSphere(Uc)===!1)return;wg.copy(r).invert(),bu.copy(t.ray).applyMatrix4(wg);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){let p=Math.max(0,a.start),v=Math.min(x.count,a.start+a.count);for(let _=p,S=v-1;_<S;_+=f){let A=x.getX(_),C=x.getX(_+1);if(l.fromBufferAttribute(m,A),h.fromBufferAttribute(m,C),bu.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let z=t.ray.origin.distanceTo(d);z<t.near||z>t.far||e.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=p,S=v-1;_<S;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),bu.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Eg=new P,Tg=new P,lr=class extends $u{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Eg.fromBufferAttribute(e,r),Tg.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eg.distanceTo(Tg);t.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Dc=new P,Nc=new P,Mu=new P,Oc=new zr,Vr=class extends cn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(ks*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let x=0;x<c;x+=3){a?(l[0]=a.getX(x),l[1]=a.getX(x+1),l[2]=a.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);let{a:y,b:m,c:p}=Oc;if(y.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Oc.getNormal(Mu),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let _=(v+1)%3,S=u[v],A=u[_],C=Oc[h[v]],R=Oc[h[_]],z=`${S}_${A}`,M=`${A}_${S}`;M in d&&d[M]?(Mu.dot(d[M].normal)<=s&&(f.push(C.x,C.y,C.z),f.push(R.x,R.y,R.z)),d[M]=null):z in d||(d[z]={index0:l[v],index1:l[_],normal:Mu.clone()})}}for(let x in d)if(d[x]){let{index0:y,index1:m}=d[x];Dc.fromBufferAttribute(o,y),Nc.fromBufferAttribute(o,m),f.push(Dc.x,Dc.y,Dc.z),f.push(Nc.x,Nc.y,Nc.z)}this.setAttribute("position",new on(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var rl=class extends Ui{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Rt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var hr=class extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bg,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function zc(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function pE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var js=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=e[++i],t<r)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yu=class extends js{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pm,endingEnd:Pm}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Um:s=t,o=2*e-i;break;case Dm:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Um:a=t,c=2*i-e;break;case Dm:a=1,c=i+r[1]-r[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-e)/(r-e),y=x*x,m=y*x,p=-d*m+2*d*y-d*x,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*x+1,_=(-1-f)*m+(1.5+f)*y+.5*x,S=f*m-f*y;for(let A=0;A!==o;++A)s[A]=p*a[h+A]+v*a[l+A]+_*a[c+A]+S*a[u+A];return s}},ju=class extends js{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Ju=class extends js{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zc(e,this.TimeBufferType),this.values=zc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:zc(t.times,Array),values:zc(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ju(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ju(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kc:e=this.InterpolantFactoryMethodDiscrete;break;case Bc:e=this.InterpolantFactoryMethodLinear;break;case Kh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kc;case this.InterpolantFactoryMethodLinear:return Bc;case this.InterpolantFactoryMethodSmooth:return Kh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&pE(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Kh,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(r)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let x=0;x!==i;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[f+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Bc;var Hr=class extends Zn{};Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=kc;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zu=class extends Zn{};Zu.prototype.ValueTypeName="color";var Ku=class extends Zn{};Ku.prototype.ValueTypeName="number";var Qu=class extends js{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(r-e),l=t*o;for(let h=l+o;l!==h;l+=4)ar.slerpFlat(s,0,a,l-o,a,l,c);return s}},na=class extends Zn{InterpolantFactoryMethodLinear(t){return new Qu(this.times,this.values,this.getValueSize(),t)}};na.prototype.ValueTypeName="quaternion";na.prototype.DefaultInterpolation=Bc;na.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends Zn{};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=kc;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var td=class extends Zn{};td.prototype.ValueTypeName="vector";var ed=class{constructor(t,e,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},mE=new ed,nd=class{constructor(t){this.manager=t!==void 0?t:mE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nd.DEFAULT_MATERIAL_NAME="__DEFAULT";var sl=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Su=new Ee,Ag=new P,Cg=new P,id=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ag.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ag),Cg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cg),e.updateMatrixWorld(),Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Su)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rd=class extends id{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new rd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ol=class extends sl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var pd="\\[\\]\\.:\\/",gE=new RegExp("["+pd+"]","g"),md="[^"+pd+"]",xE="[^"+pd.replace("\\.","")+"]",yE=/((?:WC+[\/:])*)/.source.replace("WC",md),_E=/(WCOD+)?/.source.replace("WCOD",xE),vE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",md),bE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",md),ME=new RegExp("^"+yE+_E+vE+bE+"$"),SE=["material","materials","bones","map"],sd=class{constructor(t,e,i){let r=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gE,"")}static parseTrackName(t){let e=ME.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);SE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=sd;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m2=new Float32Array(1);var al=class{constructor(t,e,i=0,r=1/0){this.ray=new Ko(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return od(t,this,i,e),i.sort(Rg),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)od(t[r],this,i,e);return i.sort(Rg),i}};function Rg(n,t){return n.distance-t.distance}function od(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)od(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);var je=document.getElementById("c"),_e={w:1,h:1,x:0,y:0},be=new ea({canvas:je,antialias:!0});be.setPixelRatio(Math.min(devicePixelRatio,2));be.shadowMap.enabled=!0;be.shadowMap.type=cd;be.localClippingEnabled=!0;var ce=new il;ce.background=new Rt("#7aa0c4");var wE=Math.atan(1/Math.SQRT2),Dt={azim:Math.PI/4,elev:wE,zoom:80,target:new P(30,15,23)},jt={azim:Dt.azim,elev:Dt.elev,zoom:Dt.zoom,target:Dt.target.clone()},Kg=900,dl=2e3,Wt=new cr(-1,1,1,-1,.1,4e3),Qg={uGround:{value:1}},ra=new we(new Ys(2,2),new Jn({uniforms:Qg,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));ra.frustumCulled=!1;ra.renderOrder=-1e9;ce.add(ra);function tx(){Qg.uGround.value=Math.max(0,Math.min(1,(Dt.elev+.05)/.1))}ce.add(new ol(16777215,.62));var wn=new ia(16777215,.78);wn.castShadow=!0;wn.shadow.mapSize.set(4096,4096);wn.shadow.normalBias=.15;wn.shadow.bias=-2e-4;ce.add(wn);ce.add(wn.target);var ex=new ia(16777215,.16);ex.position.set(-6,5,-7);ce.add(ex);var sa={tail:0},Dn=()=>{sa.tail=30},gd=new P,fl=new P,Zg=new Map;function Ks(n){let t=Zg.get(n);return t||(t=new Rt().setHex(n),Zg.set(n,t)),t}var xd=new hr({vertexColors:!0,side:pn}),yd=new hr({vertexColors:!0,transparent:!0,opacity:.55,side:pn,depthWrite:!1});yd.shadowSide=Xn;var nx=new qs({colorWrite:!1,side:pn}),Ni=new we(new Ys(8e3,8e3),new rl({opacity:.32}));Ni.rotation.x=-Math.PI/2;Ni.position.y=-.1;Ni.receiveShadow=!0;Ni.renderOrder=-1;ce.add(Ni);var Nn=new Ii;ce.add(Nn);var Kn=new Ii;ce.add(Kn);var ln=new lr(new Vr(new si(1,1,1)),new Di({color:10994876,depthTest:!1}));ln.visible=!1;ln.renderOrder=999;ce.add(ln);var Oi=new lr(new cn,new Di({vertexColors:!0,transparent:!0,depthTest:!1}));Oi.renderOrder=998;Oi.visible=!1;ce.add(Oi);var mn=new al,oi=new Yt,dr=new P,oa=new P;var Wr=(n,t,e)=>n+65536+(t+65536)*131072+(e+65536)*131072*131072,ai=(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z});function ee(n,t){let{x:e,y:i,z:r}=n;switch(t&3){case 1:return{x:-r,y:i,z:e};case 2:return{x:-e,y:i,z:-r};case 3:return{x:r,y:i,z:-e};default:return{x:e,y:i,z:r}}}var Qn=(n,t)=>({rot:n.rot+t.rot&3,off:ai(ee(t.off,n.rot),n.off)}),_d=n=>{let t=4-(n.rot&3)&3,e=ee(n.off,t);return{rot:t,off:{x:-e.x,y:-e.y,z:-e.z}}},vd=n=>n.slice(1).reduce((t,e)=>Qn(t,{off:e.pos,rot:e.rot}),{off:{x:0,y:0,z:0},rot:0}),zi=n=>"#"+(n&16777215).toString(16).padStart(6,"0"),fr=n=>n<0?-Math.round(-n):Math.round(n),EE=Math.floor(Math.random()*4294967296).toString(36),bd=1,Qs=()=>`n${bd++}.${EE}`,pl=()=>bd,ml=n=>{bd=n};var ue=(n,t,e,i,r,s,a)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s,c:a}),aa=(n,t,e,i)=>t>=n.x0&&t<n.x1&&e>=n.y0&&e<n.y1&&i>=n.z0&&i<n.z1,ca=(n,t,e,i)=>({x0:n.x0+t,y0:n.y0+e,z0:n.z0+i,x1:n.x1+t,y1:n.y1+e,z1:n.z1+i,c:n.c});function TE(n,t,e){let i=Math.max(n.x0,t.x0),r=Math.max(n.y0,t.y0),s=Math.max(n.z0,t.z0),a=Math.min(n.x1,t.x1),o=Math.min(n.y1,t.y1),c=Math.min(n.z1,t.z1);if(i>=a||r>=o||s>=c){e.push(n);return}let l=n.c;n.x0<i&&e.push({...n,x1:i}),a<n.x1&&e.push({...n,x0:a}),n.y0<r&&e.push({x0:i,y0:n.y0,z0:n.z0,x1:a,y1:r,z1:n.z1,c:l}),o<n.y1&&e.push({x0:i,y0:o,z0:n.z0,x1:a,y1:n.y1,z1:n.z1,c:l}),n.z0<s&&e.push({x0:i,y0:r,z0:n.z0,x1:a,y1:o,z1:s,c:l}),c<n.z1&&e.push({x0:i,y0:r,z0:c,x1:a,y1:o,z1:n.z1,c:l})}function Xr(n,t){let e=[];for(let i of n)TE(i,t,e);return e}function AE(n,t){for(let e=0;e<n.length;){let i=n[e];if(i.c!==t.c){e++;continue}let r=i.y0===t.y0&&i.y1===t.y1,s=i.z0===t.z0&&i.z1===t.z1,a=i.x0===t.x0&&i.x1===t.x1;if(r&&s&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(a&&s&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(a&&r&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{e++;continue}n.splice(e,1),e=0}n.push(t)}function Md(n,t,e){let i=Xr(n,t);return AE(i,{...t,c:e}),i}function ix(n,t,e,i,r){let s=-1;for(let h=0;h<n.length;h++)if(aa(n[h],t,e,i)){s=h;break}if(s===-1)return null;let a=n[s].c;if(a===r)return null;let o=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,f=h.y0<u.y1&&u.y0<h.y1,x=h.z0<u.z1&&u.z0<h.z1;return f&&x&&(h.x1===u.x0||u.x1===h.x0)||d&&x&&(h.y1===u.y0||u.y1===h.y0)||d&&f&&(h.z1===u.z0||u.z1===h.z0)},c=new Set([s]),l=[s];for(;l.length;){let h=n[l.pop()];for(let u=0;u<n.length;u++)!c.has(u)&&n[u].c===a&&o(h,n[u])&&(c.add(u),l.push(u))}return n.map((h,u)=>c.has(u)?{...h,c:r}:h)}function Sd(n,t){let e=[];for(let i of n){let r=Math.max(i.x0,t.x0),s=Math.max(i.y0,t.y0),a=Math.max(i.z0,t.z0),o=Math.min(i.x1,t.x1),c=Math.min(i.y1,t.y1),l=Math.min(i.z1,t.z1);r<o&&s<c&&a<l&&e.push({x0:r,y0:s,z0:a,x1:o,y1:c,z1:l,c:i.c})}return e}function rx(n,t){for(let e of n){let i=(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0);t.set(e.c,(t.get(e.c)||0)+i)}}function Be(n,t){for(let e of n)e.x0<t.min.x&&(t.min.x=e.x0),e.y0<t.min.y&&(t.min.y=e.y0),e.z0<t.min.z&&(t.min.z=e.z0),e.x1>t.max.x&&(t.max.x=e.x1),e.y1>t.max.y&&(t.max.y=e.y1),e.z1>t.max.z&&(t.max.z=e.z1)}function On(n,t,e){let i=ee({x:n.x0,y:n.y0,z:n.z0},t),r=ee({x:n.x1-1,y:n.y1-1,z:n.z1-1},t);return{x0:Math.min(i.x,r.x)+e.x,y0:Math.min(i.y,r.y)+e.y,z0:Math.min(i.z,r.z)+e.z,x1:Math.max(i.x,r.x)+e.x+1,y1:Math.max(i.y,r.y)+e.y+1,z1:Math.max(i.z,r.z)+e.z+1,c:n.c}}var CE=16,hn=n=>Math.floor(n/CE);function sx(n){if(!n.length)return()=>!1;let t=1/0,e=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let y of n)y.x0<t&&(t=y.x0),y.y0<e&&(e=y.y0),y.z0<i&&(i=y.z0),y.x1>r&&(r=y.x1),y.y1>s&&(s=y.y1),y.z1>a&&(a=y.z1);let o=hn(t),c=hn(e),l=hn(i),h=hn(r-1)-o+1,u=hn(s-1)-c+1,d=hn(a-1)-l+1,f=Array.from({length:h*u*d},()=>[]),x=(y,m,p)=>((y-o)*u+(m-c))*d+(p-l);for(let y of n)for(let m=hn(y.x0);m<=hn(y.x1-1);m++)for(let p=hn(y.y0);p<=hn(y.y1-1);p++)for(let v=hn(y.z0);v<=hn(y.z1-1);v++)f[x(m,p,v)].push(y);return(y,m,p)=>{let v=hn(y),_=hn(m),S=hn(p);if(v<o||_<c||S<l||v-o>=h||_-c>=u||S-l>=d)return!1;for(let A of f[x(v,_,S)])if(aa(A,y,m,p))return!0;return!1}}var ox=(n,t,e,i)=>n.some(r=>aa(r,t,e,i));function qr(n,t,e,i,r){if(!n.length||!t.length)return!1;let s={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};Be(n,s);let a=s.min.x+e,o=s.min.y+i,c=s.min.z+r,l=s.max.x+e,h=s.max.y+i,u=s.max.z+r;for(let d of t)if(a<d.x1&&d.x0<l&&o<d.y1&&d.y0<h&&c<d.z1&&d.z0<u&&n.some(f=>f.x0+e<d.x1&&d.x0<f.x1+e&&f.y0+i<d.y1&&d.y0<f.y1+i&&f.z0+r<d.z1&&d.z0<f.z1+r))return!0;return!1}var RE=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],lx=3,la=2,pr=lx*la,ax=.5,ha=class{a=new Float32Array(4096);n=0;push3(t,e,i){if(this.n+3>this.a.length){let r=new Float32Array(this.a.length*2);r.set(this.a),this.a=r}this.a[this.n++]=t,this.a[this.n++]=e,this.a[this.n++]=i}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}};function cx(n,t,e,i,r,s){let a=2*la+1;for(let o=0;o<e;o++){let c=o*r,l=0;for(let h=0;h<=la&&h<i;h++)l+=n[c+h*s];for(let h=0;h<i;h++){t[c+h*s]=l/a;let u=h+la+1,d=h-la;u<i&&(l+=n[c+u*s]),d>=0&&(l-=n[c+d*s])}}}function gl(n,t,e){let i=new ha,r=new ha,s=new ha,a=n.map(v=>[v.x0,v.y0,v.z0]),o=n.map(v=>[v.x1,v.y1,v.z1]),c=[0,1,2].map(()=>new Map),l=[0,1,2].map(()=>new Map),h=(v,_,S)=>{let A=v.get(_);A?A.push(S):v.set(_,[S])};for(let v=0;v<n.length;v++)for(let _=0;_<3;_++)h(c[_],a[v][_],v),h(l[_],o[v][_],v);let u=[],d=16,f=v=>Math.floor(v/d),x=[],y=[0,0,0],m=[0,0,0];if(e&&n.length){let v=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let S=0;S<n.length;S++)for(let A=0;A<3;A++)a[S][A]<v[A]&&(v[A]=a[S][A]),o[S][A]>_[A]&&(_[A]=o[S][A]);m=v.map(f),y=_.map((S,A)=>f(S-1)-m[A]+1),x=Array.from({length:y[0]*y[1]*y[2]},()=>[]);for(let S=0;S<n.length;S++)for(let A=f(a[S][0]);A<=f(o[S][0]-1);A++)for(let C=f(a[S][1]);C<=f(o[S][1]-1);C++)for(let R=f(a[S][2]);R<=f(o[S][2]-1);R++)x[((A-m[0])*y[1]+(C-m[1]))*y[2]+(R-m[2])].push(S)}for(let v=0;v<n.length;v++){let _=t(n[v].c),S=_.r,A=_.g,C=_.b,R=a[v],z=o[v];for(let M of RE){let{a:T,u:N,v:W}=M,G=M.hi?z[T]:R[T],I=M.hi?G:G-1,U=[];for(let tt of(M.hi?c:l)[T].get(G)??u){let st=Math.max(a[tt][N],R[N]),at=Math.min(o[tt][N],z[N]),ft=Math.max(a[tt][W],R[W]),gt=Math.min(o[tt][W],z[W]);st<at&&ft<gt&&U.push([st,ft,at,gt])}let X=[[R[N],R[W],z[N],z[W]]];for(let tt of U){let st=[];for(let at of X){let ft=Math.max(at[0],tt[0]),gt=Math.max(at[1],tt[1]),vt=Math.min(at[2],tt[2]),O=Math.min(at[3],tt[3]);if(ft>=vt||gt>=O){st.push(at);continue}at[0]<ft&&st.push([at[0],at[1],ft,at[3]]),vt<at[2]&&st.push([vt,at[1],at[2],at[3]]),at[1]<gt&&st.push([ft,at[1],vt,gt]),O<at[3]&&st.push([ft,O,vt,at[3]])}if(X=st,!X.length)break}let Y=[0,0,0];Y[T]=G;let $=null,q=0,J=0,Z=0,nt=()=>{q=R[N]-pr,J=R[W]-pr;let tt=z[N]-R[N]+2*pr+1;Z=z[W]-R[W]+2*pr+1;let st=new Float32Array(tt*Z),at=f(I)-m[T],ft=!1;if(at>=0&&at<y[T]){let vt=[0,0,0];vt[T]=at;let O=Math.min(f(q+tt-1)-m[N],y[N]-1),le=Math.min(f(J+Z-1)-m[W],y[W]-1);for(let _t=Math.max(f(q)-m[N],0);_t<=O;_t++){vt[N]=_t;for(let mt=Math.max(f(J)-m[W],0);mt<=le;mt++){vt[W]=mt;for(let rt of x[(vt[0]*y[1]+vt[1])*y[2]+vt[2]]){if(a[rt][T]>I||o[rt][T]<=I)continue;let ne=Math.max(a[rt][N],q),Lt=Math.min(o[rt][N],q+tt),E=Math.max(a[rt][W],J),b=Math.min(o[rt][W],J+Z);for(let F=ne;F<Lt;F++)st.fill(1,(F-q)*Z+(E-J),(F-q)*Z+(b-J));ft=ft||ne<Lt&&E<b}}}}if(!ft)return $=st;let gt=new Float32Array(tt*Z);for(let vt=0;vt<lx;vt++)cx(st,gt,tt,Z,Z,1),cx(gt,st,Z,tt,1,Z);return $=st},B=(tt,st)=>{if(!e)return 1;let ft=($??nt())[(tt-q)*Z+(st-J)];return ax+(1-ax)*(1-ft)},j=(tt,st,at)=>{Y[N]=tt,Y[W]=st,i.push3(Y[0],Y[1],Y[2]),r.push3(M.n[0],M.n[1],M.n[2]),s.push3(S*at,A*at,C*at)},ot=(tt,st,at,ft)=>{let gt=B(tt,st),vt=B(at,st),O=B(at,ft),le=B(tt,ft);j(tt,st,gt),j(at,st,vt),j(at,ft,O),j(tt,st,gt),j(at,ft,O),j(tt,ft,le)};for(let tt of X){let[st,at,ft,gt]=tt;if(!e){ot(st,at,ft,gt);continue}let vt=st+pr,O=ft-pr,le=at+pr,_t=gt-pr;if(vt>=O||le>=_t){for(let mt=st;mt<ft;mt++)for(let rt=at;rt<gt;rt++)ot(mt,rt,mt+1,rt+1);continue}for(let mt=st;mt<ft;mt++){for(let rt=at;rt<le;rt++)ot(mt,rt,mt+1,rt+1);for(let rt=_t;rt<gt;rt++)ot(mt,rt,mt+1,rt+1)}for(let mt=le;mt<_t;mt++){for(let rt=st;rt<vt;rt++)ot(rt,mt,rt+1,mt+1);for(let rt=O;rt<ft;rt++)ot(rt,mt,rt+1,mt+1)}ot(vt,le,O,_t)}}}if(!i.length)return null;let p=new cn;return p.setAttribute("position",new Ye(i.trimmed(),3)),p.setAttribute("normal",new Ye(r.trimmed(),3)),p.setAttribute("color",new Ye(s.trimmed(),3)),p}var xl=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],hx={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},$r=()=>({type:"object",id:Qs(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),Fi=(n="")=>({type:"scene",id:Qs(),name:n,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function mr(n){let t={id:Qs(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...t,boxes:n.boxes.map(e=>({...e}))}:{type:"scene",...t,children:n.children.map(mr)}}var ki=n=>g.context.children.find(t=>t.id===n);function En(n,t=g.root,e=[]){if(e.push(t),t===n)return e.slice();if(t.type==="scene")for(let i of t.children){let r=En(n,i,e);if(r)return r}return e.pop(),null}function un(n,t=g.root){if(t.id===n)return t;if(t.type==="scene")for(let e of t.children){let i=un(n,e);if(i)return i}return null}function zn(n){let t=En(n);return t&&t.length>1?t[t.length-2]:null}function Yr(n,t){return n===t?!0:n.type!=="scene"?!1:n.children.some(e=>Yr(e,t))}var to=()=>vd(g.path),ci=n=>vd(En(n)||[g.root]),de=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),Ve=n=>n.max.x<n.min.x;function jr(n,t,e,i){if(n.type==="object")for(let r of n.boxes)i.push(On(r,e,t));else for(let r of n.children)jr(r,ai(t,ee(r.pos,e)),e+r.rot&3,i);return i}function Tn(n,t,e,i){if(n.type==="object")Be(n.boxes.map(r=>On(r,e,t)),i);else for(let r of n.children)Tn(r,ai(t,ee(r.pos,e)),e+r.rot&3,i);return i}function wd(n,t,e){e.length=0;let i=Math.max(1,Math.ceil((t-n)/6));for(let r=0;r<=i;r++)e.push(n+(t-n)*r/i)}var Ed=(n,t)=>Math.max(1,Math.ceil((t-n)/6))+1,dx=n=>Ed(n.x0,n.x1)*Ed(n.y0,n.y1)*Ed(n.z0,n.z1);function Jr(n,t,e,i){if(dx(n)<=1536){e.push(n),i.push(t);return}let r=n.x1-n.x0,s=n.y1-n.y0,a=n.z1-n.z0;if(r>=s&&r>=a){let o=n.x0+(r>>1);Jr({...n,x1:o},t,e,i),Jr({...n,x0:o},t,e,i)}else if(s>=a){let o=n.y0+(s>>1);Jr({...n,y1:o},t,e,i),Jr({...n,y0:o},t,e,i)}else{let o=n.z0+(a>>1);Jr({...n,z1:o},t,e,i),Jr({...n,z0:o},t,e,i)}}function IE(n,t,e,i){for(let r=0;r<n.length;r++){let s=n[r];if(s[0]<=t&&s[1]<=e&&s[2]<=i)return}for(let r=n.length-1;r>=0;r--){let s=n[r];t<=s[0]&&e<=s[1]&&i<=s[2]&&n.splice(r,1)}n.push([t,e,i])}function LE(n,t,e,i,r,s,a,o,c,l){let h=n.length,u=new Float64Array(h),d=new Float64Array(h),f=new Float64Array(h),x=new Float64Array(h),y=new Float64Array(h),m=new Float64Array(h),p=1/0,v=-1/0,_=1/0,S=-1/0,A=1/0,C=-1/0;for(let G=0;G<h;G++){let I=n[G];s.x>=0?(u[G]=I.x0,d[G]=I.x1):(u[G]=I.x1,d[G]=I.x0),s.y>=0?(f[G]=I.y0,x[G]=I.y1):(f[G]=I.y1,x[G]=I.y0),s.z>=0?(y[G]=I.z0,m[G]=I.z1):(y[G]=I.z1,m[G]=I.z0),I.x0<p&&(p=I.x0),I.x1>v&&(v=I.x1),I.y0<_&&(_=I.y0),I.y1>S&&(S=I.y1),I.z0<A&&(A=I.z0),I.z1>C&&(C=I.z1)}let R=s.x!==0?1/s.x:0,z=s.y!==0?1/s.y:0,M=s.z!==0?1/s.z:0,T=[],N=[],W=[];for(let G=i;G<r;G++){let I=t[G];if((s.x>0?v<=I.x0:s.x<0?p>=I.x1:v<=I.x0||p>=I.x1)||(s.y>0?S<=I.y0:s.y<0?_>=I.y1:S<=I.y0||_>=I.y1)||(s.z>0?C<=I.z0:s.z<0?A>=I.z1:C<=I.z0||A>=I.z1))continue;let U=e[G];wd(I.x0,I.x1,T),wd(I.y0,I.y1,N),wd(I.z0,I.z1,W);for(let X of T)for(let Y of N)for(let $ of W){let q=1/0;if(R!==0&&(q=((s.x>0?U.x1:U.x0)-X)*R),z!==0){let nt=((s.y>0?U.y1:U.y0)-Y)*z;nt<q&&(q=nt)}if(M!==0){let nt=((s.z>0?U.z1:U.z0)-$)*M;nt<q&&(q=nt)}let J=1/0,Z=!1;for(let nt=0;nt<h;nt++){let B=-1/0,j=1/0;if(R===0){if(X<=u[nt]||X>=d[nt])continue}else{let ot=(u[nt]-X)*R,tt=(d[nt]-X)*R;ot>B&&(B=ot),tt<j&&(j=tt)}if(z===0){if(Y<=f[nt]||Y>=x[nt])continue}else{let ot=(f[nt]-Y)*z,tt=(x[nt]-Y)*z;ot>B&&(B=ot),tt<j&&(j=tt)}if(M===0){if($<=y[nt]||$>=m[nt])continue}else{let ot=(y[nt]-$)*M,tt=(m[nt]-$)*M;ot>B&&(B=ot),tt<j&&(j=tt)}if(!(B>=j)){if(B>q+.001)B<J&&(J=B);else if(j>q+.001){Z=!0;break}}}Z||J===1/0||IE(l,Math.floor((X+J*s.x)*a),Math.floor((Y+J*s.y)*o),Math.floor(($+J*s.z)*c))}}}function ux(n,t){let e=[0],i=0;for(;i<n.length;){let s=n[i][t];do i++;while(i<n.length&&n[i][t]===s);e.push(i)}if(e.length<=48)return e;let r=new Set;for(let s=0;s<48;s++)r.add(e[Math.floor(s*(e.length-1)/47)]);return[...r]}function PE(n,t,e,i,r){let s={x:1/0,y:1/0,z:1/0};if(!n.length||!t.length)return s;t.sort((d,f)=>d[0]-f[0]||d[1]-f[1]||d[2]-f[2]);let a=[];t:for(let d of t){for(let f of a)if(f[1]<=d[1]&&f[2]<=d[2])continue t;a.push(d)}let o=n.map(d=>[Math.min(d.x0*e,d.x1*e),Math.max(d.x0*e,d.x1*e),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*r,d.z1*r),Math.max(d.z0*r,d.z1*r)]),c=(d,f,x)=>{let y=0;for(let m of o){let p=Math.min(m[1],d)-m[0];if(p<=0)continue;let v=Math.min(m[3],f)-m[2];if(v<=0)continue;let _=Math.min(m[5],x)-m[4];_>0&&(y+=p*v*_)}return y},l=a.slice().sort((d,f)=>f[0]-d[0]),h=-1,u={...s};for(let d of ux(l,0)){let f=d===0?1/0:l[d-1][0]-.01,x=l.slice(d).sort((m,p)=>p[2]-m[2]),y=new Array(x.length+1).fill(1/0);for(let m=x.length-1;m>=0;m--)y[m]=Math.min(y[m+1],x[m][1]);for(let m of ux(x,2)){let p=m===0?1/0:x[m-1][2]-.01,v=y[m]===1/0?1/0:y[m]-.01,_=c(f,v,p);_>h&&(h=_,u.x=f,u.y=v,u.z=p)}}return u}function fx(n,t,e,i,r,s){let a=[],o=[];for(let y of t)Jr(y,y,a,o);let c=[],l=0,h=0;for(let y=0;y<a.length;y++)h+=dx(a[y]),(h>=1536||y===a.length-1)&&(c.push([l,y+1]),l=y+1,h=0);let u=[];for(let y=0;y<n.length;y++)for(let m=0;m<e.length;m++)for(let p=0;p<c.length;p++)u.push([y,m,p]);let d=n.map(()=>[]),f=0,x=null;return{step(y){for(;f<u.length;){let[m,p,v]=u[f++],[_,S]=c[v];if(LE(n[m],a,o,_,S,e[p],i,r,s,d[m]),f<u.length&&y())return!1}return!0},cuts(){return x??=n.map((y,m)=>PE(y,d[m],i,r,s)),x}}}function yl(n,t){oi.x=(n-_e.x)/_e.w*2-1,oi.y=-((t-_e.y)/_e.h)*2+1}var Td=()=>g.pickMeshes.length?(mn.setFromCamera(oi,Wt),mn.intersectObjects(g.pickMeshes,!1)[0]??null):null;function Ad(){let n=Td();return n?n.object.userData.childId??null:null}var px=new De(new P(0,1,0),0);function ua(n){return mn.setFromCamera(oi,Wt),px.constant=-n,mn.ray.intersectPlane(px,dr)?{x:Math.floor(dr.x),y:n,z:Math.floor(dr.z)}:null}var xx=(n,t)=>({x:Math.floor(n.x-t.x*.5),y:Math.floor(n.y-t.y*.5),z:Math.floor(n.z-t.z*.5)}),UE=new P;function Zr(){let n=Td();if(!n)return null;let t=g.editXform.off,e=ee({x:n.point.x-t.x,y:n.point.y-t.y,z:n.point.z-t.z},-g.editXform.rot),i={x:0,y:1,z:0};if(n.face){let s=UE.copy(n.face.normal).transformDirection(n.object.matrixWorld);i=ee({x:s.x,y:s.y,z:s.z},-g.editXform.rot)}let r=xx(e,i);return{cell:r,addCell:{x:r.x+Math.round(i.x),y:r.y+Math.round(i.y),z:r.z+Math.round(i.z)}}}function yx(){let n=Td();return n?xx(n.point,n.face?n.face.normal:{x:0,y:1,z:0}):ua(0)}function Kr(n){let t=ua(n+g.editXform.off.y);if(!t)return null;let e=ee({x:t.x-g.editXform.off.x,y:0,z:t.z-g.editXform.off.z},-g.editXform.rot);return{x:Math.round(e.x),y:n,z:Math.round(e.z)}}var mx=(n,t)=>({x:n===0?t:0,y:n===1?t:0,z:n===2?t:0}),gx=new De;function _x(n,t){let e=g.editXform.off,i=g.editXform.rot,r=ee(mx(n,1),i),s=ai(ee(mx(n,t),i),e);if(mn.setFromCamera(oi,Wt),gx.setComponents(r.x,r.y,r.z,-(r.x*s.x+r.y*s.y+r.z*s.z)),!mn.ray.intersectPlane(gx,dr))return null;let a=ee({x:dr.x-e.x,y:dr.y-e.y,z:dr.z-e.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};return n===0?o.x=t:n===1?o.y=t:o.z=t,o}var Bi=(n,t,e)=>{let i=ee({x:n,y:t,z:e},g.editXform.rot);return new P(i.x+g.editXform.off.x,i.y+g.editXform.off.y,i.z+g.editXform.off.z)};function Cd(n=Zr()){return g.tool==="add"?n?n.addCell:Kr(0):n?n.cell:null}var DE=new Rt(10994876),NE=new Rt(6055805),OE=new Rt(13619151),da=null,_l=[],Rd=()=>{da=null};function hi(){li=null,g.liveMeas=null,gr()}function Id(){if(da)return da;let n=[],t;g.editObject?(n.push(...g.editObject.boxes),t=Bi):(ui(g.root,{x:0,y:0,z:0},0,null,null,(o,c,l,h)=>{if(h)for(let u of o.boxes)n.push(On(u,l,c))}),t=(o,c,l)=>new P(o,c,l));let e=de();Be(n,e);let i=n.length===0,r={x:e.min.x,y:e.min.y,z:e.min.z},s={x:e.max.x-1,y:e.max.y-1,z:e.max.z-1};return da={has:n.length>64?sx(n):(o,c,l)=>ox(n,o,c,l),mn:r,mx:s,toW:t,empty:i},da}function vx(){let n=Id();if(n.empty)return null;let t=null;if(g.editObject){let e=Zr();t=e?{...e.cell}:Kr(0)}else t=yx();return t?{x:Math.max(n.mn.x,Math.min(n.mx.x,t.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,t.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,t.z))}:null}function zE(n){let t=Id(),e=["x","y","z"],i=[];for(let r=0;r<3;r++){let s=e[r],a=e[(r+1)%3],o=e[(r+2)%3],c=t.mn[s],l=t.mx[s],h=[n.x,n.y,n.z],u=f=>(h[r]=f,t.has(h[0],h[1],h[2])),d=c;for(;d<=l;){let f=u(d),x=d;for(;x+1<=l&&u(x+1)===f;)x++;let y=m=>{let p={};return p[s]=m,p[a]=n[a]+.5,p[o]=n[o]+.5,t.toW(p.x,p.y,p.z)};i.push({a:y(d),b:y(x+1),mid:y((d+x+1)/2),len:x-d+1,filled:f}),d=x+1}}return i}function Ld(n,t,e,i,r,s,a,o,c=!1){let l=i-n,h=r-t,u=s-e,d=(f,x,y,m,p,v,_,S)=>({a:a(f,x,y),b:a(m,p,v),mid:a((f+m)/2,(x+p)/2,(y+v)/2),len:_,filled:!0,nolabel:!S,gray:c});return[d(n,t,e,i,t,e,l,l>=o),d(n,t,e,n,t,s,u,u>=o),d(n,t,e,n,r,e,h,h>=o),d(i,t,e,i,t,s,0,!1),d(n,t,s,i,t,s,0,!1),d(n,r,e,i,r,e,0,!1),d(n,r,e,n,r,s,0,!1),d(i,r,e,i,r,s,0,!1),d(n,r,s,i,r,s,0,!1),d(i,t,e,i,r,e,0,!1),d(n,t,s,n,r,s,0,!1),d(i,t,s,i,r,s,0,!1)]}var li=null;function bx(){let n=vx();n&&(li=li&&li.x===n.x&&li.y===n.y&&li.z===n.z?null:n,vl())}function Mx(){li&&(li=null,vl())}function FE(n,t){let e=Id();return Ld(Math.min(n.x,t.x),Math.min(n.y,t.y),Math.min(n.z,t.z),Math.max(n.x,t.x)+1,Math.max(n.y,t.y)+1,Math.max(n.z,t.z)+1,e.toW,1,!0)}function vl(){let n=vx();g.liveMeas=n?li?FE(li,n):zE(n):null,gr()}function gr(){let n=document.getElementById("measure");n.innerHTML="",_l=[];let t=[],e=[];if(g.liveMeas)for(let r of g.liveMeas){let s=r.gray?OE:r.filled?DE:NE;if(t.push(r.a.x,r.a.y,r.a.z,r.b.x,r.b.y,r.b.z),e.push(s.r,s.g,s.b,s.r,s.g,s.b),r.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(r.filled?"":" empty"),a.textContent=String(r.len),n.appendChild(a),_l.push({el:a,w:r.mid})}Oi.geometry.dispose();let i=new cn;i.setAttribute("position",new on(t,3)),i.setAttribute("color",new on(e,3)),Oi.geometry=i,Oi.visible=t.length>0}function Sx(){if(_l.length)for(let n of _l){if(oa.copy(n.w).project(Wt),oa.z>1){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=(oa.x*.5+.5)*_e.w+"px",n.el.style.top=(-oa.y*.5+.5)*_e.h+"px"}}var Pd=new P(40,150,30).normalize();function kE(n){if(Ve(n))return;let t=(n.min.x+n.max.x)/2,e=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,r=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,s=r+130;wn.position.set(t+Pd.x*s,e+Pd.y*s,i+Pd.z*s),wn.target.position.set(t,e,i),wn.target.updateMatrixWorld();let a=wn.shadow.camera;a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=Math.max(1,s-r-20),a.far=s+r+20,a.updateProjectionMatrix(),wn.shadow.normalBias=4*r/wn.shadow.mapSize.x}var ti=[];function BE(){let n=new Set;for(let t of ti){ce.remove(t);let e=t.geometry;e&&!n.has(e)&&(e.dispose(),n.add(e))}ti=[];for(let t of Nd)t.dispose();Nd=[],ro=[],_r=null,xr.vox=-1,bl=[],Fd(),Nn.clear(),io&&(cancelAnimationFrame(io),io=0),An=null}var bl=[],An=null,io=0,eo=null;function Fd(){eo&&(Nn.remove(eo),eo.geometry.dispose(),eo.material.dispose(),eo=null)}function Ud(n,t,{tier:e="opaque",childId:i}={}){if(!n.length)return null;let r=e!=="opaque",s=gl(n,t,!r);if(!s)return null;let a=new we(s,e==="temp"?yd:xd);if(a.castShadow=!0,a.receiveShadow=!0,ce.add(a),ti.push(a),r){a.renderOrder=2;let o=new we(s,nx);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,ce.add(o),ti.push(o)}return i!=null&&(a.userData.childId=i,g.pickMeshes.push(a),(g.childMeshes[i]||(g.childMeshes[i]=[])).push(a)),a}var ro=[],Nd=[],Od=[],xr={q:-1,b:-1,vox:-1},VE=6707534;function wx(n){let t=gl(n,Ks,!0);if(!t)return;let e=[new De(new P(-1,0,0),1e9),new De(new P(0,-1,0),1e9),new De(new P(0,0,-1),1e9)],i=new hr({vertexColors:!0,side:pn,clippingPlanes:e,clipShadows:!0}),r=new we(t,i);r.castShadow=r.receiveShadow=!0,ce.add(r),ti.push(r);let s=new hr({color:VE,side:$e,clippingPlanes:e}),a=new we(t,s);r.userData.cut=a.userData.cut=!0,ce.add(a),ti.push(a),Nd.push(i,s);let o=de();Be(n,o),ro.push({boxes:n,aabb:o,planes:e})}var HE=8,Ex=6,yr=[-90,-60,-30,0,30,60,90],no=Math.PI/180,GE=5,_r=null;function WE(n,t){let e=n<=1?1:-1,i=n===0||n===3?1:-1,r=t>=3?1:-1,s=(c,l)=>{let h=Math.cos(l*no);return{x:h*Math.sin(c*no),y:Math.sin(l*no),z:h*Math.cos(c*no)}},a=[s(n*90,yr[t]),s(n*90,yr[t+1]),s(n*90+90,yr[t]),s(n*90+90,yr[t+1]),s(n*90+45,(yr[t]+yr[t+1])/2)],o=Od;g.editObject&&(o=o.concat(g.editObject.boxes.map(c=>On(c,g.editXform.rot,g.editXform.off)))),_r={job:fx(ro.map(c=>c.boxes),o,a,e,r,i),sgx:e,sgy:r,sgz:i}}function Ax(){if(!ro.length){_r=null;return}let n=(Dt.azim/no%360+360)%360,t=Dt.elev/no,{q:e,b:i}=xr,r=e*90+45;if((e<0||Math.abs(((n-r)%360+540)%360-180)>45+HE)&&(e=Math.min(3,Math.floor(n/90))),(i<0||t<yr[i]-Ex||t>yr[i+1]+Ex)&&(i=Math.max(0,Math.min(5,Math.floor((t+90)/30)))),(e!==xr.q||i!==xr.b||g.voxVer!==xr.vox)&&(xr.q=e,xr.b=i,xr.vox=g.voxVer,WE(e,i)),!_r)return;let s=performance.now();if(!_r.job.step(()=>performance.now()-s>GE)){Dn();return}let{sgx:a,sgy:o,sgz:c}=_r,l=_r.job.cuts();_r=null;for(let h=0;h<ro.length;h++){let u=ro[h],d=l[h],f=(x,y,m,p)=>Math.min(p,(x>0?m:-y)+4);u.planes[0].normal.set(-a,0,0),u.planes[0].constant=f(a,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-o,0),u.planes[1].constant=f(o,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-c),u.planes[2].constant=f(c,u.aabb.min.z,u.aabb.max.z,d.z)}Dn()}function ui(n,t,e,i,r,s){if(n===g.editObject||n.vis==="hidden")return;let a=r??(n.vis==="deemphasized"?n.id:null);if(n.type==="object")s(n,t,e,i,a);else for(let o of n.children)ui(o,ai(t,ee(o.pos,e)),e+o.rot&3,n===g.context?o.id:i,a,s)}var Dd=(n,t)=>{let e=n.get(t);return e||n.set(t,e=[]),e},Tx=(n,t,e,i)=>{for(let r of n.boxes)i.push(On(r,e,t));return i};function Cx(){let{off:n,rot:t}=g.editXform;if(Nn.position.set(n.x,n.y,n.z),Nn.rotation.set(0,-t*Math.PI/2,0),Nn.updateMatrixWorld(!0),An){Nn.remove(An),An.geometry.dispose();let s=ti.indexOf(An);s>=0&&ti.splice(s,1)}let e=g.sel3d,i=e&&e.lifted?g.editObject.boxes.concat(e.boxes):g.editObject.boxes,r=gl(i,Ks,!0);An=r?new we(r,xd):null,An&&(An.castShadow=An.receiveShadow=!0,Nn.add(An),ti.push(An)),g.pickMeshes=An?[An,...bl]:[...bl],e?XE(e.region):Fd()}function XE(n){Fd();let t=new si(n.x1-n.x0,n.y1-n.y0,n.z1-n.z0),e=new lr(new Vr(t),new Di({color:16766073,depthTest:!1}));t.dispose(),e.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2),e.renderOrder=1e3,Nn.add(e),eo=e}function vr(){io||(io=requestAnimationFrame(()=>{io=0,Cx(),Dn()}))}function Ml(){g.voxVer++,Rd(),vr()}function kd(n,t){g.editObject.boxes=Md(g.editObject.boxes,n,t),Ml()}function fa(n){g.editObject.boxes=Xr(g.editObject.boxes,n),Ml()}function Sl(n){let t=g.editObject.boxes;for(let e of n)t=Md(t,e,e.c);g.editObject.boxes=t,Ml()}function Rx(n,t){let e=ix(g.editObject.boxes,n.x,n.y,n.z,t);return e?(g.editObject.boxes=e,Ml(),!0):!1}function Ix(){if(!ti.length)return null;mn.setFromCamera(oi,Wt);let n=mn.intersectObjects(ti,!1)[0];if(!n)return null;let t=mn.ray.direction,e=Math.floor(n.point.x+t.x*.5),i=Math.floor(n.point.y+t.y*.5),r=Math.floor(n.point.z+t.z*.5),s=(o,c,l)=>{let h=ee({x:e-c.x,y:i-c.y,z:r-c.z},-l);for(let u of o)if(aa(u,h.x,h.y,h.z))return u.c;return null};if(g.editObject){let o=s(g.editObject.boxes,g.editXform.off,g.editXform.rot);if(o!=null)return o}let a=null;return ui(g.root,{x:0,y:0,z:0},0,null,null,(o,c,l)=>{a==null&&(a=s(o.boxes,c,l))}),a}var zd=new Set;function br(n){for(let t of zd)if(n.has(t)!==g.selection.has(t)){fe();return}Lx()}function fe(){BE(),g.pickMeshes=[],g.childMeshes={},g.childBox={},zd.clear(),g.voxVer++,Rd();let n={x:0,y:0,z:0},t=de();if(g.editObject){g.editXform=Qn(to(),{off:g.editObject.pos,rot:g.editObject.rot});let e=[],i=new Map;ui(g.root,n,0,null,null,(s,a,o,c,l)=>Tx(s,a,o,l?Dd(i,l):e)),Be(e,t);let r=Ud(e,Ks,{tier:"temp"});bl=r?[r]:[];for(let s of i.values())Be(s,t),wx(s);Od=e,Cx(),Tn(g.editObject,g.editXform.off,g.editXform.rot,t)}else{let e=new Map,i=new Map,r=[],s=[];ui(g.root,n,0,null,null,(a,o,c,l,h)=>{let u=Tx(a,o,c,[]);Be(u,t);let d=h;l&&(d&&(zd.add(l),g.selection.has(l)&&(d=null)),Be(u,g.childBox[l]||(g.childBox[l]=de()))),d?Dd(i,d).push(...u):(s.push(...u),l?Dd(e,l).push(...u):r.push(...u))}),Ud(r,Ks,{tier:"temp"});for(let[a,o]of e)Ud(o,Ks,{childId:a});for(let a of i.values())wx(a);Od=s}g.sceneBox=t,kE(t),Lx(),Dn()}function qE(n,t,e){let i=new si(t.x-n.x,t.y-n.y,t.z-n.z),r=new lr(new Vr(i),new Di({color:e,depthTest:!1}));return r.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),r.renderOrder=999,i.dispose(),r}function Lx(){for(let n of Kn.children)n.geometry?.dispose?.();if(Kn.clear(),Kn.position.set(0,0,0),!g.editObject)for(let n of g.selection){let t=g.childBox[n];t&&!Ve(t)&&Kn.add(qE(t.min,t.max,15787730))}}function oe(n,t={},...e){let i=document.createElement(n);return Object.assign(i,t),e.length&&i.append(...e),i}var pa=new P,Bd=new P,Vd=new P,Px=new P,$E=new P(0,1,0);function Ux(n,t){let e=(Wt.top-Wt.bottom)/_e.h;Wt.getWorldDirection(Bd),Vd.crossVectors(Bd,$E).normalize(),Px.crossVectors(Vd,Bd).normalize(),jt.target.addScaledVector(Vd,-n*e),jt.target.addScaledVector(Px,t*e)}function Dx(n,t){jt.azim-=n*.012,jt.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,jt.elev+t*.012))}function wl(n){Ve(n)||(jt.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),jt.zoom=Math.max(8,Math.min(dl,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function Fn(){let n=de();if(g.editObject){if(Tn(g.editObject,g.editXform.off,g.editXform.rot,n),Ve(n)){let t=g.editXform.off;jt.target.set(t.x,t.y+6,t.z),jt.zoom=41;return}}else for(let t in g.childBox){let e=g.childBox[t];n.min.x=Math.min(n.min.x,e.min.x),n.min.y=Math.min(n.min.y,e.min.y),n.min.z=Math.min(n.min.z,e.min.z),n.max.x=Math.max(n.max.x,e.max.x),n.max.y=Math.max(n.max.y,e.max.y),n.max.z=Math.max(n.max.z,e.max.z)}if(Ve(n)){jt.target.set(0,1,0),jt.zoom=23;return}wl(n)}function El(n){if(n===g.root){Fn();return}let t=ci(n);wl(Tn(n,t.off,t.rot,de()))}function Nx(){Dt.azim+=(jt.azim-Dt.azim)*.22,Dt.elev+=(jt.elev-Dt.elev)*.22,Dt.zoom+=(jt.zoom-Dt.zoom)*.25,Dt.target.lerp(jt.target,.25);let n=Math.cos(Dt.elev),t=Math.sin(Dt.elev);pa.set(n*Math.sin(Dt.azim),t,n*Math.cos(Dt.azim)),Wt.position.copy(Dt.target).addScaledVector(pa,Kg);let e=hl.clamp((Math.abs(Dt.elev)-1.45)/(Math.PI/2-1.45),0,1);fl.set(-Math.sin(Dt.azim),0,-Math.cos(Dt.azim)),Dt.elev<0&&fl.negate(),gd.set(0,1,0).lerp(fl,e),Wt.up.copy(gd.normalize()),Wt.lookAt(Dt.target);let i=_e.w/_e.h,r=Dt.zoom,s=r*i;Wt.left=-s/2,Wt.right=s/2,Wt.top=r/2,Wt.bottom=-r/2;let a=Wt.position,o=1/0,c=-1/0,l=(x,y,m)=>{let p=(a.x-x)*pa.x+(a.y-y)*pa.y+(a.z-m)*pa.z;p<o&&(o=p),p>c&&(c=p)},h=g.sceneBox;if(h&&!Ve(h))for(let x of[h.min.x,h.max.x])for(let y of[h.min.y,h.max.y])for(let m of[h.min.z,h.max.z])l(x,y,m);let u=Dt.target.x,d=Dt.target.z,f=4e3;for(let x of[-f,f])for(let y of[-f,f])l(u+x,0,d+y);o>c&&(o=.1,c=4e3),Wt.near=o-10,Wt.far=c+10,Wt.updateProjectionMatrix(),Ni.position.set(Dt.target.x,-.1,Dt.target.z),tx()}var YE={0:["y","z"],1:["x","z"],2:["x","y"]};function jE(n){let t=[];for(let e of n)for(let i=e.x0;i<e.x1;i++)for(let r=e.y0;r<e.y1;r++)for(let s=e.z0;s<e.z1;s++)t.push({x:i,y:r,z:s,c:e.c});return t}function JE(n,t,e,i,r){let s=(e%360+360)%360;if(s>180&&(s-=360),s===0)return;let a=Math.round(s/90),o=(s-a*90)*Math.PI/180,c=(a%4+4)%4,l=Math.tan(o/2),h=Math.sin(o),[u,d]=YE[t];for(let f of n){let x=f[u]-i,y=f[d]-r;for(let m=0;m<c;m++){let p=-y,v=x;x=p,y=v}o&&(x-=Math.round(y*l),y+=Math.round(x*h),x-=Math.round(y*l)),f[u]=i+x,f[d]=r+y}}function ZE(n){let t=new Map;for(let o of n)t.set(Wr(o.x,o.y,o.z),o.c);let e=(o,c,l,h)=>t.get(Wr(o,c,l))===h,i=(o,c,l,h,u)=>{for(let d=o;d<c;d++)if(!e(d,l,h,u))return!1;return!0},r=(o,c,l,h,u,d)=>{for(let f=l;f<h;f++)if(!i(o,c,u,f,d))return!1;return!0},s=n.slice().sort((o,c)=>o.y-c.y||o.z-c.z||o.x-c.x),a=[];for(let o of s){let c=o.x,l=o.y,h=o.z,u=o.c;if(!t.has(Wr(c,l,h)))continue;let d=c+1;for(;e(d,l,h,u);)d++;let f=h+1;for(;i(c,d,l,f,u);)f++;let x=l+1;for(;r(c,d,h,f,x,u);)x++;for(let y=l;y<x;y++)for(let m=h;m<f;m++)for(let p=c;p<d;p++)t.delete(Wr(p,y,m));a.push({x0:c,y0:l,z0:h,x1:d,y1:x,z1:f,c:u})}return a}function Ox(n,t,e,i,r,s){let a=jE(n);JE(a,e,t,Math.round(i),Math.round(r));for(let o of a){let c=s(o.x,o.y,o.z);o.x=c.x,o.y=c.y,o.z=c.z}return ZE(a)}var Hd=null,zx=[],Fx=[],so=()=>Hd;function kx(n){zx=n,n.length&&(Hd="node")}var Tl=()=>zx;function Bx(n){Fx=n,n.length&&(Hd="vox")}var Al=()=>Fx;var ei=[],di=-1;function ma(){ei.length=0,di=-1}var Gd=()=>ei[di];function Vx(n){ei.length=di+1,ei.push(n),ei.length>200&&ei.shift(),di=ei.length-1}function Hx(n){di>=0&&(ei[di]=n)}var Gx=()=>di>0?ei[--di]:null,Wx=()=>di<ei.length-1?ei[++di]:null;var Cl=!1,Xx=n=>({rootJSON:n,uid:pl(),pathIds:g.path.map(t=>t.id),selection:[...g.selection],editId:g.editObject?g.editObject.id:null,collapsed:[...g.collapsed]});function qx(n){if(Cl)return;let t=Xx(n),e=Gd();e&&e.rootJSON===t.rootJSON||Vx(t)}function $x(n){Cl||!Gd()||Hx(Xx(n))}function Yx(n){Cl=!0,ml(n.uid),g.root=Qr(JSON.parse(n.rootJSON)),g.path=[];let t=g.root;for(let e of n.pathIds){let i=t.id===e?t:t.type==="scene"?t.children.find(r=>r.id===e):null;if(!i)break;t=i,g.path.push(t)}g.path.length||(g.path=[g.root]),g.editObject=n.editId?un(n.editId):null,g.selection=new Set(n.selection.filter(e=>g.context.children.some(i=>i.id===e))),g.collapsed=new Set(n.collapsed),g.drag=null,g.sel3d=null,g.painting=!1,g.lastVox=null,fe(),Xt(),pe(),Cl=!1}function Rl(){Je();let n=Gx();n&&Yx(n)}function ga(){Je();let n=Wx();n&&Yx(n)}var dn=()=>new Map,Il=n=>{let t=dn();return n.forEach((e,i)=>{t.set(i,e)}),t},fi=(n,t,e)=>{let i=n.get(t);return i===void 0&&n.set(t,i=e()),i},jx=(n,t)=>{let e=[];for(let[i,r]of n)e.push(t(r,i));return e},Jx=(n,t)=>{for(let[e,i]of n)if(t(i,e))return!0;return!1};var Vi=()=>new Set;var Ll=n=>n[n.length-1];var Zx=(n,t)=>{for(let e=0;e<t.length;e++)n.push(t[e])},Hi=Array.from,Pl=(n,t)=>{for(let e=0;e<n.length;e++)if(!t(n[e],e,n))return!1;return!0},Ul=(n,t)=>{for(let e=0;e<n.length;e++)if(t(n[e],e,n))return!0;return!1};var Kx=(n,t)=>{let e=new Array(n);for(let i=0;i<n;i++)e[i]=t(i,e);return e};var ts=Array.isArray;var Dl=class{constructor(){this._observers=dn()}on(t,e){return fi(this._observers,t,Vi).add(e),e}once(t,e){let i=(...r)=>{this.off(t,i),e(...r)};this.on(t,i)}off(t,e){let i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return Hi((this._observers.get(t)||dn()).values()).forEach(i=>i(...e))}destroy(){this._observers=dn()}};var fn=Math.floor;var es=Math.abs;var Nl=(n,t)=>n<t?n:t,Gi=(n,t)=>n>t?n:t,uI=Number.isNaN;var Ol=n=>n!==0?n<0:1/n<0;var oo=Number.MAX_SAFE_INTEGER,Xd=Number.MIN_SAFE_INTEGER,dI=1<<31;var Qx=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&fn(n)===n),fI=Number.isNaN,pI=Number.parseInt;var $d=String.fromCharCode,KE=String.fromCodePoint,mI=$d(65535),QE=n=>n.toLowerCase(),tT=/^\s*/g,eT=n=>n.replace(tT,""),nT=/([A-Z])/g,Yd=(n,t)=>eT(n.replace(nT,e=>`${t}${QE(e)}`));var iT=n=>{let t=unescape(encodeURIComponent(n)),e=t.length,i=new Uint8Array(e);for(let r=0;r<e;r++)i[r]=t.codePointAt(r);return i},co=typeof TextEncoder<"u"?new TextEncoder:null,rT=n=>co.encode(n),t0=co?rT:iT;var ao=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});ao&&ao.decode(new Uint8Array).length===1&&(ao=null);var e0=(n,t)=>Kx(t,()=>n).join("");var ns=class{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}},ba=()=>new ns;var sT=n=>{let t=n.cpos;for(let e=0;e<n.bufs.length;e++)t+=n.bufs[e].length;return t};var ni=n=>{let t=new Uint8Array(sT(n)),e=0;for(let i=0;i<n.bufs.length;i++){let r=n.bufs[i];t.set(r,e),e+=r.length}return t.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),e),t},oT=(n,t)=>{let e=n.cbuf.length;e-n.cpos<t&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Gi(e,t)*2),n.cpos=0)},Oe=(n,t)=>{let e=n.cbuf.length;n.cpos===e&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(e*2),n.cpos=0),n.cbuf[n.cpos++]=t};var kl=Oe;var $t=(n,t)=>{for(;t>127;)Oe(n,128|127&t),t=fn(t/128);Oe(n,127&t)},Bl=(n,t)=>{let e=Ol(t);for(e&&(t=-t),Oe(n,(t>63?128:0)|(e?64:0)|63&t),t=fn(t/64);t>0;)Oe(n,(t>127?128:0)|127&t),t=fn(t/128)},jd=new Uint8Array(3e4),aT=jd.length/3,cT=(n,t)=>{if(t.length<aT){let e=co.encodeInto(t,jd).written||0;$t(n,e);for(let i=0;i<e;i++)Oe(n,jd[i])}else gn(n,t0(t))},lT=(n,t)=>{let e=unescape(encodeURIComponent(t)),i=e.length;$t(n,i);for(let r=0;r<i;r++)Oe(n,e.codePointAt(r))},is=co&&co.encodeInto?cT:lT;var Ma=(n,t)=>{let e=n.cbuf.length,i=n.cpos,r=Nl(e-i,t.length),s=t.length-r;n.cbuf.set(t.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Gi(e*2,s)),n.cbuf.set(t.subarray(r)),n.cpos=s)},gn=(n,t)=>{$t(n,t.byteLength),Ma(n,t)},Jd=(n,t)=>{oT(n,t);let e=new DataView(n.cbuf.buffer,n.cpos,t);return n.cpos+=t,e},hT=(n,t)=>Jd(n,4).setFloat32(0,t,!1),uT=(n,t)=>Jd(n,8).setFloat64(0,t,!1),dT=(n,t)=>Jd(n,8).setBigInt64(0,t,!1);var i0=new DataView(new ArrayBuffer(4)),fT=n=>(i0.setFloat32(0,n),i0.getFloat32(0)===n),ho=(n,t)=>{switch(typeof t){case"string":Oe(n,119),is(n,t);break;case"number":Qx(t)&&es(t)<=2147483647?(Oe(n,125),Bl(n,t)):fT(t)?(Oe(n,124),hT(n,t)):(Oe(n,123),uT(n,t));break;case"bigint":Oe(n,122),dT(n,t);break;case"object":if(t===null)Oe(n,126);else if(ts(t)){Oe(n,117),$t(n,t.length);for(let e=0;e<t.length;e++)ho(n,t[e])}else if(t instanceof Uint8Array)Oe(n,116),gn(n,t);else{Oe(n,118);let e=Object.keys(t);$t(n,e.length);for(let i=0;i<e.length;i++){let r=e[i];is(n,r),ho(n,t[r])}}break;case"boolean":Oe(n,t?120:121);break;default:Oe(n,127)}},va=class extends ns{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&$t(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}};var r0=n=>{n.count>0&&(Bl(n.encoder,n.count===1?n.s:-n.s),n.count>1&&$t(n.encoder,n.count-2))},rs=class{constructor(){this.encoder=new ns,this.s=0,this.count=0}write(t){this.s===t?this.count++:(r0(this),this.count=1,this.s=t)}toUint8Array(){return r0(this),ni(this.encoder)}};var s0=n=>{if(n.count>0){let t=n.diff*2+(n.count===1?0:1);Bl(n.encoder,t),n.count>1&&$t(n.encoder,n.count-2)}},uo=class{constructor(){this.encoder=new ns,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(s0(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return s0(this),ni(this.encoder)}},Fl=class{constructor(){this.sarr=[],this.s="",this.lensE=new rs}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){let t=new ns;return this.sarr.push(this.s),this.s="",is(t,this.sarr.join("")),Ma(t,this.lensE.toUint8Array()),ni(t)}};var Cn=n=>new Error(n),Rn=()=>{throw Cn("Method unimplemented")},xn=()=>{throw Cn("Unexpected case")};var o0=Cn("Unexpected end of array"),a0=Cn("Integer out of Range"),fo=class{constructor(t){this.arr=t,this.pos=0}},cs=n=>new fo(n),c0=n=>n.pos!==n.arr.length;var mT=(n,t)=>{let e=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,t);return n.pos+=t,e},yn=n=>mT(n,kt(n));var ss=n=>n.arr[n.pos++];var kt=n=>{let t=0,e=1,i=n.arr.length;for(;n.pos<i;){let r=n.arr[n.pos++];if(t=t+(r&127)*e,e*=128,r<128)return t;if(t>oo)throw a0}throw o0},Hl=n=>{let t=n.arr[n.pos++],e=t&63,i=64,r=(t&64)>0?-1:1;if((t&128)===0)return r*e;let s=n.arr.length;for(;n.pos<s;){if(t=n.arr[n.pos++],e=e+(t&127)*i,i*=128,t<128)return r*e;if(e>oo)throw a0}throw o0};var gT=n=>{let t=kt(n);if(t===0)return"";{let e=String.fromCodePoint(ss(n));if(--t<100)for(;t--;)e+=String.fromCodePoint(ss(n));else for(;t>0;){let i=t<1e4?t:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,e+=String.fromCodePoint.apply(null,r),t-=i}return decodeURIComponent(escape(e))}},xT=n=>ao.decode(yn(n)),os=ao?xT:gT;var Kd=(n,t)=>{let e=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,t);return n.pos+=t,e},yT=n=>Kd(n,4).getFloat32(0,!1),_T=n=>Kd(n,8).getFloat64(0,!1),vT=n=>Kd(n,8).getBigInt64(0,!1);var bT=[n=>{},n=>null,Hl,yT,_T,vT,n=>!1,n=>!0,os,n=>{let t=kt(n),e={};for(let i=0;i<t;i++){let r=os(n);e[r]=po(n)}return e},n=>{let t=kt(n),e=[];for(let i=0;i<t;i++)e.push(po(n));return e},yn],po=n=>bT[127-ss(n)](n),Sa=class extends fo{constructor(t,e){super(t),this.reader=e,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),c0(this)?this.count=kt(this)+1:this.count=-1),this.count--,this.s}};var as=class extends fo{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=Hl(this);let t=Ol(this.s);this.count=1,t&&(this.s=-this.s,this.count=kt(this)+2)}return this.count--,this.s}};var mo=class extends fo{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){let t=Hl(this),e=t&1;this.diff=fn(t/2),this.count=1,e&&(this.count=kt(this)+2)}return this.s+=this.diff,this.count--,this.s}},Vl=class{constructor(t){this.decoder=new as(t),this.str=os(this.decoder),this.spos=0}read(){let t=this.spos+this.decoder.read(),e=this.str.slice(this.spos,t);return this.spos=t,e}};var yI=crypto.subtle,l0=crypto.getRandomValues.bind(crypto);var Qd=()=>l0(new Uint32Array(1))[0];var ST="10000000-1000-4000-8000"+-1e11,h0=()=>ST.replace(/[018]/g,n=>(n^Qd()&15>>n/4).toString(16));var u0=Date.now;var tf=n=>new Promise(n);var bI=Promise.all.bind(Promise);var ef=n=>n===void 0?null:n;var nf=class{constructor(){this.map=new Map}setItem(t,e){this.map.set(t,e)}getItem(t){return this.map.get(t)}},d0=new nf,CT=!0;try{typeof localStorage<"u"&&localStorage&&(d0=localStorage,CT=!1)}catch{}var f0=d0;var ls=Symbol("Equality"),Gl=(n,t)=>n===t||!!n?.[ls]?.(t)||!1;var p0=n=>typeof n=="object",m0=Object.assign,IT=Object.keys;var g0=(n,t)=>{for(let e in n)t(n[e],e)};var wa=n=>IT(n).length;var x0=n=>{for(let t in n)return!1;return!0},go=(n,t)=>{for(let e in n)if(!t(n[e],e))return!1;return!0},Ea=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),sf=(n,t)=>n===t||wa(n)===wa(t)&&go(n,(e,i)=>(e!==void 0||Ea(t,i))&&Gl(t[i],e)),LT=Object.freeze,of=n=>{for(let t in n){let e=n[t];(typeof e=="object"||typeof e=="function")&&of(n[t])}return LT(n)};var Aa=(n,t,e=0)=>{try{for(;e<n.length;e++)n[e](...t)}finally{e<n.length&&Aa(n,t,e+1)}};var y0=n=>n;var Ta=(n,t)=>{if(n===t)return!0;if(n==null||t==null||n.constructor!==t.constructor&&(n.constructor||Object)!==(t.constructor||Object))return!1;if(n[ls]!=null)return n[ls](t);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),t=new Uint8Array(t);case Uint8Array:{if(n.byteLength!==t.byteLength)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;break}case Set:{if(n.size!==t.size)return!1;for(let e of n)if(!t.has(e))return!1;break}case Map:{if(n.size!==t.size)return!1;for(let e of n.keys())if(!t.has(e)||!Ta(n.get(e),t.get(e)))return!1;break}case void 0:case Object:if(wa(n)!==wa(t))return!1;for(let e in n)if(!Ea(n,e)||!Ta(n[e],t[e]))return!1;break;case Array:if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!Ta(n[e],t[e]))return!1;break;default:return!1}return!0},_0=(n,t)=>t.includes(n);var Ca=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";var MI=typeof navigator<"u"?/Mac/.test(navigator.platform):!1,pi,PT=[],UT=()=>{if(pi===void 0)if(Ca){pi=dn();let n=process.argv,t=null;for(let e=0;e<n.length;e++){let i=n[e];i[0]==="-"?(t!==null&&pi.set(t,""),t=i):t!==null?(pi.set(t,i),t=null):PT.push(i)}t!==null&&pi.set(t,"")}else typeof location=="object"?(pi=dn(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){let[t,e]=n.split("=");pi.set(`--${Yd(t,"-")}`,e),pi.set(`-${Yd(t,"-")}`,e)}})):pi=dn();return pi},lf=n=>UT().has(n);var Ra=n=>Ca?ef(process.env[n.toUpperCase().replaceAll("-","_")]):ef(f0.getItem(n));var v0=n=>lf("--"+n)||Ra(n)!==null,b0=v0("production"),DT=Ca&&_0(process.env.FORCE_COLOR,["true","1","2"]),M0=DT||!lf("--no-colors")&&!v0("no-color")&&(!Ca||process.stdout.isTTY)&&(!Ca||lf("--color")||Ra("COLORTERM")!==null||(Ra("TERM")||"").includes("color"));var NT=n=>new Uint8Array(n);var S0=n=>{let t=NT(n.byteLength);return t.set(n),t};var uf=class{constructor(t,e){this.left=t,this.right=e}},mi=(n,t)=>new uf(n,t);var df=n=>n.next()>=.5,Wl=(n,t,e)=>fn(n.next()*(e+1-t)+t);var ff=(n,t,e)=>fn(n.next()*(e+1-t)+t);var pf=(n,t,e)=>ff(n,t,e);var FT=n=>$d(pf(n,97,122)),w0=(n,t=0,e=20)=>{let i=pf(n,t,e),r="";for(let s=0;s<i;s++)r+=FT(n);return r};var Xl=(n,t)=>t[pf(n,0,t.length-1)];var BT=Symbol("0schema"),mf=class{constructor(){this._rerrs=[]}extend(t,e,i,r=null){this._rerrs.push({path:t,expected:e,has:i,message:r})}toString(){let t=[];for(let e=this._rerrs.length-1;e>0;e--){let i=this._rerrs[e];t.push(e0(" ",(this._rerrs.length-e)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return t.join(`
`)}},gf=(n,t)=>n===t?!0:n==null||t==null||n.constructor!==t.constructor?!1:n[ls]?Gl(n,t):ts(n)?Pl(n,e=>Ul(t,i=>gf(e,i))):p0(n)?go(n,(e,i)=>gf(e,t[i])):!1,He=class{static _dilutes=!1;extends(t){let[e,i]=[this.shape,t.shape];return this.constructor._dilutes&&([i,e]=[e,i]),gf(e,i)}equals(t){return this.constructor===t.constructor&&Ta(this.shape,t.shape)}[BT](){return!0}[ls](t){return this.equals(t)}validate(t){return this.check(t)}check(t,e){Rn()}get nullable(){return bo(this,ih)}get optional(){return new ql(this)}cast(t){return E0(t,this),t}expect(t){return E0(t,this),t}},Ia=class extends He{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e=void 0){let i=t?.constructor===this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name,t?.constructor!==this.shape?"Constructor match failed":"Check failed"),i}},Se=(n,t=null)=>new Ia(n,t),wI=Se(Ia),La=class extends He{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape(t);return!i&&e?.extend(null,"custom prop",t?.constructor.name,"failed to check custom prop"),i}},Ce=n=>new La(n),EI=Se(La),_o=class extends He{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape.some(r=>r===t);return!i&&e?.extend(null,this.shape.join(" | "),t.toString()),i}},eh=(...n)=>new _o(n),T0=Se(_o),VT=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,t=>"\\"+t)),A0=n=>{if(vo.check(n))return[VT(n)];if(T0.check(n))return n.shape.map(t=>t+"");if(P0.check(n))return["[+-]?\\d+.?\\d*"];if(U0.check(n))return[".*"];if(Ql.check(n))return n.shape.map(A0).flat(1);xn()},xf=class extends He{constructor(t){super(),this.shape=t,this._r=new RegExp("^"+t.map(A0).map(e=>`(${e.join("|")})`).join("")+"$")}check(t,e){let i=this._r.exec(t)!=null;return!i&&e?.extend(null,this._r.toString(),t.toString(),"String doesn't match string template."),i}};var TI=Se(xf),HT=Symbol("optional"),ql=class extends He{constructor(t){super(),this.shape=t}check(t,e){let i=t===void 0||this.shape.check(t);return!i&&e?.extend(null,"undefined (optional)","()"),i}get[HT](){return!0}},GT=Se(ql),$l=class extends He{check(t,e){return e?.extend(null,"never",typeof t),!1}},AI=new $l,CI=Se($l),Yl=class n extends He{constructor(t,e=!1){super(),this.shape=t,this._isPartial=e}static _dilutes=!0;get partial(){return new n(this.shape,!0)}check(t,e){return t==null?(e?.extend(null,"object","null"),!1):go(this.shape,(i,r)=>{let s=this._isPartial&&!Ea(t,r)||i.check(t[r],e);return!s&&e?.extend(r.toString(),i.toString(),typeof t[r],"Object property does not match"),s})}},WT=n=>new Yl(n),XT=Se(Yl),qT=Ce(n=>n!=null&&(n.constructor===Object||n.constructor==null)),jl=class extends He{constructor(t,e){super(),this.shape={keys:t,values:e}}check(t,e){return t!=null&&go(t,(i,r)=>{let s=this.shape.keys.check(r,e);return!s&&e?.extend(r+"","Record",typeof t,s?"Key doesn't match schema":"Value doesn't match value"),s&&this.shape.values.check(i,e)})}},C0=(n,t)=>new jl(n,t),$T=Se(jl),Jl=class extends He{constructor(t){super(),this.shape=t}check(t,e){return t!=null&&go(this.shape,(i,r)=>{let s=i.check(t[r],e);return!s&&e?.extend(r.toString(),"Tuple",typeof i),s})}},YT=(...n)=>new Jl(n),RI=Se(Jl),Zl=class extends He{constructor(t){super(),this.shape=t.length===1?t[0]:new Pa(t)}check(t,e){let i=ts(t)&&Pl(t,r=>this.shape.check(r));return!i&&e?.extend(null,"Array",""),i}},R0=(...n)=>new Zl(n),jT=Se(Zl),JT=Ce(n=>ts(n)),Kl=class extends He{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e){let i=t instanceof this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name),i}},ZT=(n,t=null)=>new Kl(n,t),II=Se(Kl),KT=ZT(He),yf=class extends He{constructor(t){super(),this.len=t.length-1,this.args=YT(...t.slice(-1)),this.res=t[this.len]}check(t,e){let i=t.constructor===Function&&t.length<=this.len;return!i&&e?.extend(null,"function",typeof t),i}};var QT=Se(yf),tA=Ce(n=>typeof n=="function"),_f=class extends He{constructor(t){super(),this.shape=t}check(t,e){let i=Pl(this.shape,r=>r.check(t,e));return!i&&e?.extend(null,"Intersectinon",typeof t),i}};var LI=Se(_f,n=>n.shape.length>0),Pa=class extends He{static _dilutes=!0;constructor(t){super(),this.shape=t}check(t,e){let i=Ul(this.shape,r=>r.check(t,e));return e?.extend(null,"Union",typeof t),i}},bo=(...n)=>n.findIndex(t=>Ql.check(t))>=0?bo(...n.map(t=>Ua(t)).map(t=>Ql.check(t)?t.shape:[t]).flat(1)):n.length===1?n[0]:new Pa(n),Ql=Se(Pa),I0=()=>!0,th=Ce(I0),eA=Se(La,n=>n.shape===I0),bf=Ce(n=>typeof n=="bigint"),nA=Ce(n=>n===bf),L0=Ce(n=>typeof n=="symbol"),PI=Ce(n=>n===L0),yo=Ce(n=>typeof n=="number"),P0=Ce(n=>n===yo),vo=Ce(n=>typeof n=="string"),U0=Ce(n=>n===vo),nh=Ce(n=>typeof n=="boolean"),iA=Ce(n=>n===nh),D0=eh(void 0),UI=Se(_o,n=>n.shape.length===1&&n.shape[0]===void 0),DI=eh(void 0);var ih=eh(null),rA=Se(_o,n=>n.shape.length===1&&n.shape[0]===null),NI=Se(Uint8Array),OI=Se(Ia,n=>n.shape===Uint8Array),sA=bo(yo,vo,ih,D0,bf,nh,L0),zI=(()=>{let n=R0(th),t=C0(vo,th),e=bo(yo,vo,ih,nh,n,t);return n.shape=e,t.shape.values=e,e})(),Ua=n=>{if(KT.check(n))return n;if(qT.check(n)){let t={};for(let e in n)t[e]=Ua(n[e]);return WT(t)}else{if(JT.check(n))return bo(...n.map(Ua));if(sA.check(n))return eh(n);if(tA.check(n))return Se(n)}xn()},E0=b0?()=>{}:(n,t)=>{let e=new mf;if(!t.check(n,e))throw Cn(`Expected value to be of type ${t.constructor.name}.
${e.toString()}`)},vf=class{constructor(t){this.patterns=[],this.$state=t}if(t,e){return this.patterns.push({if:Ua(t),h:e}),this}else(t){return this.if(th,t)}done(){return(t,e)=>{for(let i=0;i<this.patterns.length;i++){let r=this.patterns[i];if(r.if.check(t))return r.h(t,e)}throw Cn("Unhandled pattern")}}},oA=n=>new vf(n),N0=oA(th).if(P0,(n,t)=>Wl(t,Xd,oo)).if(U0,(n,t)=>w0(t)).if(iA,(n,t)=>df(t)).if(nA,(n,t)=>BigInt(Wl(t,Xd,oo))).if(Ql,(n,t)=>xo(t,Xl(t,n.shape))).if(XT,(n,t)=>{let e={};for(let i in n.shape){let r=n.shape[i];if(GT.check(r)){if(df(t))continue;r=r.shape}e[i]=N0(r,t)}return e}).if(jT,(n,t)=>{let e=[],i=ff(t,0,42);for(let r=0;r<i;r++)e.push(xo(t,n.shape));return e}).if(T0,(n,t)=>Xl(t,n.shape)).if(rA,(n,t)=>null).if(QT,(n,t)=>{let e=xo(t,n.res);return()=>e}).if(eA,(n,t)=>xo(t,Xl(t,[yo,vo,ih,D0,bf,nh,R0(yo),C0(bo("a","b","c"),yo)]))).if($T,(n,t)=>{let e={},i=Wl(t,0,3);for(let r=0;r<i;r++){let s=xo(t,n.shape.keys),a=xo(t,n.shape.values);e[s]=a}return e}).done(),xo=(n,t)=>N0(Ua(t),n);var hs=typeof document<"u"?document:{};var FI=Ce(n=>n.nodeType===uA);var kI=typeof DOMParser<"u"?new DOMParser:null;var BI=Ce(n=>n.nodeType===cA);var VI=Ce(n=>n.nodeType===lA);var O0=n=>jx(n,(t,e)=>`${e}:${t};`).join("");var cA=hs.ELEMENT_NODE,lA=hs.TEXT_NODE,HI=hs.CDATA_SECTION_NODE,GI=hs.COMMENT_NODE,hA=hs.DOCUMENT_NODE,WI=hs.DOCUMENT_TYPE_NODE,uA=hs.DOCUMENT_FRAGMENT_NODE,XI=Ce(n=>n.nodeType===hA);var gi=Symbol;var Da=gi(),Na=gi(),Mf=gi(),Sf=gi(),wf=gi(),Oa=gi(),Ef=gi(),Mo=gi(),Tf=gi(),z0=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=0;for(;i<n.length;i++){let r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)t.push(r);else if(r.constructor===Object)break}for(i>0&&e.push(t.join(""));i<n.length;i++){let r=n[i];r instanceof Symbol||e.push(r)}return e};var qI=u0();var mA={[Da]:mi("font-weight","bold"),[Na]:mi("font-weight","normal"),[Mf]:mi("color","blue"),[wf]:mi("color","green"),[Sf]:mi("color","grey"),[Oa]:mi("color","red"),[Ef]:mi("color","purple"),[Mo]:mi("color","orange"),[Tf]:mi("color","black")},gA=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=dn(),r=[],s=0;for(;s<n.length;s++){let a=n[s],o=mA[a];if(o!==void 0)i.set(o.left,o.right);else{if(a===void 0)break;if(a.constructor===String||a.constructor===Number){let c=O0(i);s>0||c.length>0?(t.push("%c"+a),e.push(c)):t.push(a)}else break}}for(s>0&&(r=e,r.unshift(t.join("")));s<n.length;s++){let a=n[s];a instanceof Symbol||r.push(a)}return r},F0=M0?gA:z0,k0=(...n)=>{console.log(...F0(n)),V0.forEach(t=>t.print(n))},B0=(...n)=>{console.warn(...F0(n)),n.unshift(Mo),V0.forEach(t=>t.print(n))};var V0=Vi();var H0=n=>({[Symbol.iterator](){return this},next:n}),G0=(n,t)=>H0(()=>{let e;do e=n.next();while(!e.done&&!t(e.value));return e}),rh=(n,t)=>H0(()=>{let{done:e,value:i}=n.next();return{done:e,value:e?void 0:t(i)}});var Fa=class{constructor(t,e){this.clock=t,this.len=e}},us=class{constructor(){this.clients=new Map}},iy=(n,t,e)=>t.clients.forEach((i,r)=>{let s=n.doc.store.clients.get(r);for(let a=0;a<i.length;a++){let o=i[a];dy(n,s,o.clock,o.len,e)}}),bA=(n,t)=>{let e=0,i=n.length-1;for(;e<=i;){let r=fn((e+i)/2),s=n[r],a=s.clock;if(a<=t){if(t<a+s.len)return r;e=r+1}else i=r-1}return null},ry=(n,t)=>{let e=n.clients.get(t.client);return e!==void 0&&bA(e,t.clock)!==null},qf=n=>{n.clients.forEach(t=>{t.sort((r,s)=>r.clock-s.clock);let e,i;for(e=1,i=1;e<t.length;e++){let r=t[i-1],s=t[e];r.clock+r.len>=s.clock?r.len=Gi(r.len,s.clock+s.len-r.clock):(i<e&&(t[i]=s),i++)}t.length=i})},MA=n=>{let t=new us;for(let e=0;e<n.length;e++)n[e].clients.forEach((i,r)=>{if(!t.clients.has(r)){let s=i.slice();for(let a=e+1;a<n.length;a++)Zx(s,n[a].clients.get(r)||[]);t.clients.set(r,s)}});return qf(t),t},hh=(n,t,e,i)=>{fi(n.clients,t,()=>[]).push(new Fa(e,i))},sy=()=>new us,SA=n=>{let t=sy();return n.clients.forEach((e,i)=>{let r=[];for(let s=0;s<e.length;s++){let a=e[s];if(a.deleted){let o=a.id.clock,c=a.length;if(s+1<e.length)for(let l=e[s+1];s+1<e.length&&l.deleted;l=e[++s+1])c+=l.length;r.push(new Fa(o,c))}}r.length>0&&t.clients.set(i,r)}),t},Ao=(n,t)=>{$t(n.restEncoder,t.clients.size),Hi(t.clients.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{n.resetDsCurVal(),$t(n.restEncoder,e);let r=i.length;$t(n.restEncoder,r);for(let s=0;s<r;s++){let a=i[s];n.writeDsClock(a.clock),n.writeDsLen(a.len)}})},$f=n=>{let t=new us,e=kt(n.restDecoder);for(let i=0;i<e;i++){n.resetDsCurVal();let r=kt(n.restDecoder),s=kt(n.restDecoder);if(s>0){let a=fi(t.clients,r,()=>[]);for(let o=0;o<s;o++)a.push(new Fa(n.readDsClock(),n.readDsLen()))}}return t},q0=(n,t,e)=>{let i=new us,r=kt(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();let a=kt(n.restDecoder),o=kt(n.restDecoder),c=e.clients.get(a)||[],l=ze(e,a);for(let h=0;h<o;h++){let u=n.readDsClock(),d=u+n.readDsLen();if(u<l){l<d&&hh(i,a,l,d-l);let f=xi(c,u),x=c[f];for(!x.deleted&&x.id.clock<u&&(c.splice(f+1,0,_h(t,x,u-x.id.clock)),f++);f<c.length&&(x=c[f++],x.id.clock<d);)x.deleted||(d<x.id.clock+x.length&&c.splice(f,0,_h(t,x,d-x.id.clock)),x.delete(t))}else hh(i,a,u,d-u)}}if(i.clients.size>0){let s=new Wi;return $t(s.restEncoder,0),Ao(s,i),s.toUint8Array()}return null};var oy=Qd,ds=class n extends Dl{constructor({guid:t=h0(),collectionid:e=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:a=!1,shouldLoad:o=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=oy(),this.guid=t,this.collectionid=e,this.share=new Map,this.store=new fh,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=o,this.autoLoad=a,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=tf(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});let c=()=>tf(l=>{let h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),l())};this.on("sync",h)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){let t=this._item;t!==null&&!this.shouldLoad&&te(t.parent.doc,e=>{e.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Hi(this.subdocs).map(t=>t.guid))}transact(t,e=null){return te(this,t,e)}get(t,e=Re){let i=fi(this.share,t,()=>{let s=new e;return s._integrate(this,null),s}),r=i.constructor;if(e!==Re&&r!==e)if(r===Re){let s=new e;s._map=i._map,i._map.forEach(a=>{for(;a!==null;a=a.left)a.parent=s}),s._start=i._start;for(let a=s._start;a!==null;a=a.right)a.parent=s;return s._length=i._length,this.share.set(t,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return i}getArray(t=""){return this.get(t,xh)}getText(t=""){return this.get(t,Wa)}getMap(t=""){return this.get(t,ps)}getXmlElement(t=""){return this.get(t,Xa)}getXmlFragment(t=""){return this.get(t,Eo)}toJSON(){let t={};return this.share.forEach((e,i)=>{t[i]=e.toJSON()}),t}destroy(){this.isDestroyed=!0,Hi(this.subdocs).forEach(e=>e.destroy());let t=this._item;if(t!==null){this._item=null;let e=t.content;e.doc=new n({guid:this.guid,...e.opts,shouldLoad:!1}),e.doc._item=t,te(t.parent.doc,i=>{let r=e.doc;t.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}},uh=class{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return kt(this.restDecoder)}readDsLen(){return kt(this.restDecoder)}},dh=class extends uh{readLeftID(){return qt(kt(this.restDecoder),kt(this.restDecoder))}readRightID(){return qt(kt(this.restDecoder),kt(this.restDecoder))}readClient(){return kt(this.restDecoder)}readInfo(){return ss(this.restDecoder)}readString(){return os(this.restDecoder)}readParentInfo(){return kt(this.restDecoder)===1}readTypeRef(){return kt(this.restDecoder)}readLen(){return kt(this.restDecoder)}readAny(){return po(this.restDecoder)}readBuf(){return S0(yn(this.restDecoder))}readJSON(){return JSON.parse(os(this.restDecoder))}readKey(){return os(this.restDecoder)}},Rf=class{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=kt(this.restDecoder),this.dsCurrVal}readDsLen(){let t=kt(this.restDecoder)+1;return this.dsCurrVal+=t,t}},Tr=class extends Rf{constructor(t){super(t),this.keys=[],kt(t),this.keyClockDecoder=new mo(yn(t)),this.clientDecoder=new as(yn(t)),this.leftClockDecoder=new mo(yn(t)),this.rightClockDecoder=new mo(yn(t)),this.infoDecoder=new Sa(yn(t),ss),this.stringDecoder=new Vl(yn(t)),this.parentInfoDecoder=new Sa(yn(t),ss),this.typeRefDecoder=new as(yn(t)),this.lenDecoder=new as(yn(t))}readLeftID(){return new Er(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Er(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return po(this.restDecoder)}readBuf(){return yn(this.restDecoder)}readJSON(){return po(this.restDecoder)}readKey(){let t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{let e=this.stringDecoder.read();return this.keys.push(e),e}}},If=class{constructor(){this.restEncoder=ba()}toUint8Array(){return ni(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){$t(this.restEncoder,t)}writeDsLen(t){$t(this.restEncoder,t)}},fs=class extends If{writeLeftID(t){$t(this.restEncoder,t.client),$t(this.restEncoder,t.clock)}writeRightID(t){$t(this.restEncoder,t.client),$t(this.restEncoder,t.clock)}writeClient(t){$t(this.restEncoder,t)}writeInfo(t){kl(this.restEncoder,t)}writeString(t){is(this.restEncoder,t)}writeParentInfo(t){$t(this.restEncoder,t?1:0)}writeTypeRef(t){$t(this.restEncoder,t)}writeLen(t){$t(this.restEncoder,t)}writeAny(t){ho(this.restEncoder,t)}writeBuf(t){gn(this.restEncoder,t)}writeJSON(t){is(this.restEncoder,JSON.stringify(t))}writeKey(t){is(this.restEncoder,t)}},Lf=class{constructor(){this.restEncoder=ba(),this.dsCurrVal=0}toUint8Array(){return ni(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){let e=t-this.dsCurrVal;this.dsCurrVal=t,$t(this.restEncoder,e)}writeDsLen(t){t===0&&xn(),$t(this.restEncoder,t-1),this.dsCurrVal+=t}},Wi=class extends Lf{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new uo,this.clientEncoder=new rs,this.leftClockEncoder=new uo,this.rightClockEncoder=new uo,this.infoEncoder=new va(kl),this.stringEncoder=new Fl,this.parentInfoEncoder=new va(kl),this.typeRefEncoder=new rs,this.lenEncoder=new rs}toUint8Array(){let t=ba();return $t(t,0),gn(t,this.keyClockEncoder.toUint8Array()),gn(t,this.clientEncoder.toUint8Array()),gn(t,this.leftClockEncoder.toUint8Array()),gn(t,this.rightClockEncoder.toUint8Array()),gn(t,ni(this.infoEncoder)),gn(t,this.stringEncoder.toUint8Array()),gn(t,ni(this.parentInfoEncoder)),gn(t,this.typeRefEncoder.toUint8Array()),gn(t,this.lenEncoder.toUint8Array()),Ma(t,ni(this.restEncoder)),ni(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){ho(this.restEncoder,t)}writeBuf(t){gn(this.restEncoder,t)}writeJSON(t){ho(this.restEncoder,t)}writeKey(t){let e=this.keyMap.get(t);e===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(e)}},wA=(n,t,e,i)=>{i=Gi(i,t[0].id.clock);let r=xi(t,i);$t(n.restEncoder,t.length-r),n.writeClient(e),$t(n.restEncoder,i);let s=t[r];s.write(n,i-s.id.clock);for(let a=r+1;a<t.length;a++)t[a].write(n,0)},Yf=(n,t,e)=>{let i=new Map;e.forEach((r,s)=>{ze(t,s)>r&&i.set(s,r)}),jf(t).forEach((r,s)=>{e.has(s)||i.set(s,0)}),$t(n.restEncoder,i.size),Hi(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{wA(n,t.clients.get(r),r,s)})},EA=(n,t)=>{let e=dn(),i=kt(n.restDecoder);for(let r=0;r<i;r++){let s=kt(n.restDecoder),a=new Array(s),o=n.readClient(),c=kt(n.restDecoder);e.set(o,{i:0,refs:a});for(let l=0;l<s;l++){let h=n.readInfo();switch(31&h){case 0:{let u=n.readLen();a[l]=new _n(qt(o,c),u),c+=u;break}case 10:{let u=kt(n.restDecoder);a[l]=new vn(qt(o,c),u),c+=u;break}default:{let u=(h&192)===0,d=new Fe(qt(o,c),null,(h&128)===128?n.readLeftID():null,null,(h&64)===64?n.readRightID():null,u?n.readParentInfo()?t.get(n.readString()):n.readLeftID():null,u&&(h&32)===32?n.readString():null,Ly(n,h));a[l]=d,c+=d.length}}}}return e},TA=(n,t,e)=>{let i=[],r=Hi(e.keys()).sort((f,x)=>f-x);if(r.length===0)return null;let s=()=>{if(r.length===0)return null;let f=e.get(r[r.length-1]);for(;f.refs.length===f.i;)if(r.pop(),r.length>0)f=e.get(r[r.length-1]);else return null;return f},a=s();if(a===null)return null;let o=new fh,c=new Map,l=(f,x)=>{let y=c.get(f);(y==null||y>x)&&c.set(f,x)},h=a.refs[a.i++],u=new Map,d=()=>{for(let f of i){let x=f.id.client,y=e.get(x);y?(y.i--,o.clients.set(x,y.refs.slice(y.i)),e.delete(x),y.i=0,y.refs=[]):o.clients.set(x,[f]),r=r.filter(m=>m!==x)}i.length=0};for(;;){if(h.constructor!==vn){let x=fi(u,h.id.client,()=>ze(t,h.id.client))-h.id.clock;if(x<0)i.push(h),l(h.id.client,h.id.clock-1),d();else{let y=h.getMissing(n,t);if(y!==null){i.push(h);let m=e.get(y)||{refs:[],i:0};if(m.refs.length===m.i)l(y,ze(t,y)),d();else{h=m.refs[m.i++];continue}}else(x===0||x<h.length)&&(h.integrate(n,x),u.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(a!==null&&a.i<a.refs.length)h=a.refs[a.i++];else{if(a=s(),a===null)break;h=a.refs[a.i++]}}if(o.clients.size>0){let f=new Wi;return Yf(f,o,new Map),$t(f.restEncoder,0),{missing:c,update:f.toUint8Array()}}return null},AA=(n,t)=>Yf(n,t.doc.store,t.beforeState),CA=(n,t,e,i=new Tr(n))=>te(t,r=>{r.local=!1;let s=!1,a=r.doc,o=a.store,c=EA(i,a),l=TA(r,o,c),h=o.pendingStructs;if(h){for(let[d,f]of h.missing)if(f<ze(o,d)){s=!0;break}if(l){for(let[d,f]of l.missing){let x=h.missing.get(d);(x==null||x>f)&&h.missing.set(d,f)}h.update=ph([h.update,l.update])}}else o.pendingStructs=l;let u=q0(i,r,o);if(o.pendingDs){let d=new Tr(cs(o.pendingDs));kt(d.restDecoder);let f=q0(d,r,o);u&&f?o.pendingDs=ph([u,f]):o.pendingDs=u||f}else o.pendingDs=u;if(s){let d=o.pendingStructs.update;o.pendingStructs=null,ay(r.doc,d)}},e,!1);var ay=(n,t,e,i=Tr)=>{let r=cs(t);CA(r,n,e,new i(r))},vh=(n,t,e)=>ay(n,t,e,dh),RA=(n,t,e=new Map)=>{Yf(n,t.store,e),Ao(n,SA(t.store))},IA=(n,t=new Uint8Array([0]),e=new Wi)=>{let i=ly(t);RA(e,n,i);let r=[e.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(VA(n.store.pendingStructs.update,t)),r.length>1){if(e.constructor===fs)return kA(r.map((s,a)=>a===0?s:GA(s)));if(e.constructor===Wi)return ph(r)}return r[0]},cy=(n,t)=>IA(n,t,new fs),LA=n=>{let t=new Map,e=kt(n.restDecoder);for(let i=0;i<e;i++){let r=kt(n.restDecoder),s=kt(n.restDecoder);t.set(r,s)}return t},ly=n=>LA(new uh(cs(n)));var Pf=class{constructor(){this.l=[]}},$0=()=>new Pf,Y0=(n,t)=>n.l.push(t),j0=(n,t)=>{let e=n.l,i=e.length;n.l=e.filter(r=>t!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},hy=(n,t,e)=>Aa(n.l,[t,e]),Er=class{constructor(t,e){this.client=t,this.clock=e}},sh=(n,t)=>n===t||n!==null&&t!==null&&n.client===t.client&&n.clock===t.clock,qt=(n,t)=>new Er(n,t);var PA=n=>{for(let[t,e]of n.doc.share.entries())if(e===n)return t;throw xn()};var Uf=class{constructor(t,e){this.ds=t,this.sv=e}};var UA=(n,t)=>new Uf(n,t),iL=UA(sy(),new Map);var So=(n,t)=>t===void 0?!n.deleted:t.sv.has(n.id.client)&&(t.sv.get(n.id.client)||0)>n.id.clock&&!ry(t.ds,n.id),Df=(n,t)=>{let e=fi(n.meta,Df,Vi),i=n.doc.store;e.has(t)||(t.sv.forEach((r,s)=>{r<ze(i,s)&&Ar(n,qt(s,r))}),iy(n,t.ds,r=>{}),e.add(t))};var fh=class{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}},jf=n=>{let t=new Map;return n.clients.forEach((e,i)=>{let r=e[e.length-1];t.set(i,r.id.clock+r.length)}),t},ze=(n,t)=>{let e=n.clients.get(t);if(e===void 0)return 0;let i=e[e.length-1];return i.id.clock+i.length},uy=(n,t)=>{let e=n.clients.get(t.id.client);if(e===void 0)e=[],n.clients.set(t.id.client,e);else{let i=e[e.length-1];if(i.id.clock+i.length!==t.id.clock)throw xn()}e.push(t)},xi=(n,t)=>{let e=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===t)return i;let a=fn(t/(s+r.length-1)*i);for(;e<=i;){if(r=n[a],s=r.id.clock,s<=t){if(t<s+r.length)return a;e=a+1}else i=a-1;a=fn((e+i)/2)}throw xn()},DA=(n,t)=>{let e=n.clients.get(t.client);return e[xi(e,t.clock)]},Af=DA,Nf=(n,t,e)=>{let i=xi(t,e),r=t[i];return r.id.clock<e&&r instanceof Fe?(t.splice(i+1,0,_h(n,r,e-r.id.clock)),i+1):i},Ar=(n,t)=>{let e=n.doc.store.clients.get(t.client);return e[Nf(n,e,t.clock)]},J0=(n,t,e)=>{let i=t.clients.get(e.client),r=xi(i,e.clock),s=i[r];return e.clock!==s.id.clock+s.length-1&&s.constructor!==_n&&i.splice(r+1,0,_h(n,s,e.clock-s.id.clock+1)),s},NA=(n,t,e)=>{let i=n.clients.get(t.id.client);i[xi(i,t.id.clock)]=e},dy=(n,t,e,i,r)=>{if(i===0)return;let s=e+i,a=Nf(n,t,e),o;do o=t[a++],s<o.id.clock+o.length&&Nf(n,t,s),r(o);while(a<t.length&&t[a].id.clock<s)},Of=class{constructor(t,e,i){this.doc=t,this.deleteSet=new us,this.beforeState=jf(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=e,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}},Z0=(n,t)=>t.deleteSet.clients.size===0&&!Jx(t.afterState,(e,i)=>t.beforeState.get(i)!==e)?!1:(qf(t.deleteSet),AA(n,t),Ao(n,t.deleteSet),!0),K0=(n,t,e)=>{let i=t._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&fi(n.changed,t,Vi).add(e)},ch=(n,t)=>{let e=n[t],i=n[t-1],r=t;for(;r>0;e=i,i=n[--r-1]){if(i.deleted===e.deleted&&i.constructor===e.constructor&&i.mergeWith(e)){e instanceof Fe&&e.parentSub!==null&&e.parent._map.get(e.parentSub)===e&&e.parent._map.set(e.parentSub,i);continue}break}let s=t-r;return s&&n.splice(t+1-s,s),s},OA=(n,t,e)=>{for(let[i,r]of n.clients.entries()){let s=t.clients.get(i);for(let a=r.length-1;a>=0;a--){let o=r[a],c=o.clock+o.len;for(let l=xi(s,o.clock),h=s[l];l<s.length&&h.id.clock<c;h=s[++l]){let u=s[l];if(o.clock+o.len<=u.id.clock)break;u instanceof Fe&&u.deleted&&!u.keep&&e(u)&&u.gc(t,!1)}}}},zA=(n,t)=>{n.clients.forEach((e,i)=>{let r=t.clients.get(i);for(let s=e.length-1;s>=0;s--){let a=e[s],o=Nl(r.length-1,1+xi(r,a.clock+a.len-1));for(let c=o,l=r[c];c>0&&l.id.clock>=a.clock;l=r[c])c-=1+ch(r,c)}})};var fy=(n,t)=>{if(t<n.length){let e=n[t],i=e.doc,r=i.store,s=e.deleteSet,a=e._mergeStructs;try{qf(s),e.afterState=jf(e.doc.store),i.emit("beforeObserverCalls",[e,i]);let o=[];e.changed.forEach((c,l)=>o.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(e,c)})),o.push(()=>{e.changedParentTypes.forEach((c,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(c=c.filter(h=>h.target._item===null||!h.target._item.deleted),c.forEach(h=>{h.currentTarget=l,h._path=null}),c.sort((h,u)=>h.path.length-u.path.length),hy(l._dEH,c,e))})}),o.push(()=>i.emit("afterTransaction",[e,i])),Aa(o,[]),e._needFormattingCleanup&&tC(e)}finally{i.gc&&OA(s,r,i.gcFilter),zA(s,r),e.afterState.forEach((h,u)=>{let d=e.beforeState.get(u)||0;if(d!==h){let f=r.clients.get(u),x=Gi(xi(f,d),1);for(let y=f.length-1;y>=x;)y-=1+ch(f,y)}});for(let h=a.length-1;h>=0;h--){let{client:u,clock:d}=a[h].id,f=r.clients.get(u),x=xi(f,d);x+1<f.length&&ch(f,x+1)>1||x>0&&ch(f,x)}if(!e.local&&e.afterState.get(i.clientID)!==e.beforeState.get(i.clientID)&&(k0(Mo,Da,"[yjs] ",Na,Oa,"Changed the client-id because another client seems to be using it."),i.clientID=oy()),i.emit("afterTransactionCleanup",[e,i]),i._observers.has("update")){let h=new fs;Z0(h,e)&&i.emit("update",[h.toUint8Array(),e.origin,i,e])}if(i._observers.has("updateV2")){let h=new Wi;Z0(h,e)&&i.emit("updateV2",[h.toUint8Array(),e.origin,i,e])}let{subdocsAdded:o,subdocsLoaded:c,subdocsRemoved:l}=e;(o.size>0||l.size>0||c.size>0)&&(o.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),l.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:c,added:o,removed:l},i,e]),l.forEach(h=>h.destroy())),n.length<=t+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):fy(n,t+1)}}},te=(n,t,e=null,i=!0)=>{let r=n._transactionCleanups,s=!1,a=null;n._transaction===null&&(s=!0,n._transaction=new Of(n,e,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{a=t(n._transaction)}finally{if(s){let o=n._transaction===r[0];n._transaction=null,o&&fy(r,0)}}return a};function*FA(n){let t=kt(n.restDecoder);for(let e=0;e<t;e++){let i=kt(n.restDecoder),r=n.readClient(),s=kt(n.restDecoder);for(let a=0;a<i;a++){let o=n.readInfo();if(o===10){let c=kt(n.restDecoder);yield new vn(qt(r,s),c),s+=c}else if((31&o)!==0){let c=(o&192)===0,l=new Fe(qt(r,s),null,(o&128)===128?n.readLeftID():null,null,(o&64)===64?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(o&32)===32?n.readString():null,Ly(n,o));yield l,s+=l.length}else{let c=n.readLen();yield new _n(qt(r,s),c),s+=c}}}}var ka=class{constructor(t,e){this.gen=FA(t),this.curr=null,this.done=!1,this.filterSkips=e,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===vn);return this.curr}};var Ba=class{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}},kA=n=>ph(n,dh,fs);var BA=(n,t)=>{if(n.constructor===_n){let{client:e,clock:i}=n.id;return new _n(qt(e,i+t),n.length-t)}else if(n.constructor===vn){let{client:e,clock:i}=n.id;return new vn(qt(e,i+t),n.length-t)}else{let e=n,{client:i,clock:r}=e.id;return new Fe(qt(i,r+t),null,qt(i,r+t-1),null,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t))}},ph=(n,t=Tr,e=Wi)=>{if(n.length===1)return n[0];let i=n.map(h=>new t(cs(h))),r=i.map(h=>new ka(h,!0)),s=null,a=new e,o=new Ba(a);for(;r=r.filter(d=>d.curr!==null),r.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){let x=d.curr.id.clock-f.curr.id.clock;return x===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===vn?1:-1:x}else return f.curr.id.client-d.curr.id.client}),r.length!==0;){let h=r[0],u=h.curr.id.client;if(s!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(u!==s.struct.id.client)Sr(o,s.struct,s.offset),s={struct:d,offset:0},h.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===vn)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{Sr(o,s.struct,s.offset);let x=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new vn(qt(u,s.struct.id.clock+s.struct.length),x),offset:0}}else{let x=s.struct.id.clock+s.struct.length-d.id.clock;x>0&&(s.struct.constructor===vn?s.struct.length-=x:d=BA(d,x)),s.struct.mergeWith(d)||(Sr(o,s.struct,s.offset),s={struct:d,offset:0},h.next())}}else s={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==vn;d=h.next())Sr(o,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(Sr(o,s.struct,s.offset),s=null),Jf(o);let c=i.map(h=>$f(h)),l=MA(c);return Ao(a,l),a.toUint8Array()},VA=(n,t,e=Tr,i=Wi)=>{let r=ly(t),s=new i,a=new Ba(s),o=new e(cs(n)),c=new ka(o,!1);for(;c.curr;){let h=c.curr,u=h.id.client,d=r.get(u)||0;if(c.curr.constructor===vn){c.next();continue}if(h.id.clock+h.length>d)for(Sr(a,h,Gi(d-h.id.clock,0)),c.next();c.curr&&c.curr.id.client===u;)Sr(a,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===u&&c.curr.id.clock+c.curr.length<=d;)c.next()}Jf(a);let l=$f(o);return Ao(s,l),s.toUint8Array()};var py=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:ni(n.encoder.restEncoder)}),n.encoder.restEncoder=ba(),n.written=0)},Sr=(n,t,e)=>{n.written>0&&n.currClient!==t.id.client&&py(n),n.written===0&&(n.currClient=t.id.client,n.encoder.writeClient(t.id.client),$t(n.encoder.restEncoder,t.id.clock+e)),t.write(n.encoder,e),n.written++},Jf=n=>{py(n);let t=n.encoder.restEncoder;$t(t,n.clientStructs.length);for(let e=0;e<n.clientStructs.length;e++){let i=n.clientStructs[e];$t(t,i.written),Ma(t,i.restEncoder)}},HA=(n,t,e,i)=>{let r=new e(cs(n)),s=new ka(r,!1),a=new i,o=new Ba(a);for(let l=s.curr;l!==null;l=s.next())Sr(o,t(l),0);Jf(o);let c=$f(r);return Ao(a,c),a.toUint8Array()};var GA=n=>HA(n,y0,Tr,fs),Q0="You must not compute changes after the event-handler fired.",wo=class{constructor(t,e){this.target=t,this.currentTarget=t,this.transaction=e,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=WA(this.currentTarget,this.target))}deletes(t){return ry(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Cn(Q0);let t=new Map,e=this.target;this.transaction.changed.get(e).forEach(r=>{if(r!==null){let s=e._map.get(r),a,o;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))a="delete",o=Ll(c.content.getContent());else return;else c!==null&&this.deletes(c)?(a="update",o=Ll(c.content.getContent())):(a="add",o=void 0)}else if(this.deletes(s))a="delete",o=Ll(s.content.getContent());else return;t.set(r,{action:a,oldValue:o})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw Cn(Q0);let e=this.target,i=Vi(),r=Vi(),s=[];if(t={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(e).has(null)){let o=null,c=()=>{o&&s.push(o)};for(let l=e._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((o===null||o.delete===void 0)&&(c(),o={delete:0}),o.delete+=l.length,r.add(l)):this.adds(l)?((o===null||o.insert===void 0)&&(c(),o={insert:[]}),o.insert=o.insert.concat(l.content.getContent()),i.add(l)):((o===null||o.retain===void 0)&&(c(),o={retain:0}),o.retain+=l.length);o!==null&&o.retain===void 0&&c()}this._changes=t}return t}},WA=(n,t)=>{let e=[];for(;t._item!==null&&t!==n;){if(t._item.parentSub!==null)e.unshift(t._item.parentSub);else{let i=0,r=t._item.parent._start;for(;r!==t._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;e.unshift(i)}t=t._item.parent}return e},Ze=()=>{B0("Invalid access: Add Yjs type to a document before reading data.")},my=80,Zf=0,zf=class{constructor(t,e){t.marker=!0,this.p=t,this.index=e,this.timestamp=Zf++}},XA=n=>{n.timestamp=Zf++},gy=(n,t,e)=>{n.p.marker=!1,n.p=t,t.marker=!0,n.index=e,n.timestamp=Zf++},qA=(n,t,e)=>{if(n.length>=my){let i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return gy(i,t,e),i}else{let i=new zf(t,e);return n.push(i),i}},bh=(n,t)=>{if(n._start===null||t===0||n._searchMarker===null)return null;let e=n._searchMarker.length===0?null:n._searchMarker.reduce((s,a)=>es(t-s.index)<es(t-a.index)?s:a),i=n._start,r=0;for(e!==null&&(i=e.p,r=e.index,XA(e));i.right!==null&&r<t;){if(!i.deleted&&i.countable){if(t<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>t;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return e!==null&&es(e.index-r)<i.parent.length/my?(gy(e,i,r),e):qA(n._searchMarker,i,r)},Va=(n,t,e)=>{for(let i=n.length-1;i>=0;i--){let r=n[i];if(e>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(t<r.index||e>0&&t===r.index)&&(r.index=Gi(t,r.index+e))}};var Mh=(n,t,e)=>{let i=n,r=t.changedParentTypes;for(;fi(r,n,()=>[]).push(e),n._item!==null;)n=n._item.parent;hy(i._eH,e,t)},Re=class{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=$0(),this._dEH=$0(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,e){this.doc=t,this._item=e}_copy(){throw Rn()}clone(){throw Rn()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,e){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){Y0(this._eH,t)}observeDeep(t){Y0(this._dEH,t)}unobserve(t){j0(this._eH,t)}unobserveDeep(t){j0(this._dEH,t)}toJSON(){}},xy=(n,t,e)=>{n.doc??Ze(),t<0&&(t=n._length+t),e<0&&(e=n._length+e);let i=e-t,r=[],s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){let a=s.content.getContent();if(a.length<=t)t-=a.length;else{for(let o=t;o<a.length&&i>0;o++)r.push(a[o]),i--;t=0}}s=s.right}return r},yy=n=>{n.doc??Ze();let t=[],e=n._start;for(;e!==null;){if(e.countable&&!e.deleted){let i=e.content.getContent();for(let r=0;r<i.length;r++)t.push(i[r])}e=e.right}return t};var Ha=(n,t)=>{let e=0,i=n._start;for(n.doc??Ze();i!==null;){if(i.countable&&!i.deleted){let r=i.content.getContent();for(let s=0;s<r.length;s++)t(r[s],e++,n)}i=i.right}},_y=(n,t)=>{let e=[];return Ha(n,(i,r)=>{e.push(t(i,r,n))}),e},$A=n=>{let t=n._start,e=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(e===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};e=t.content.getContent(),i=0,t=t.right}let r=e[i++];return e.length<=i&&(e=null),{done:!1,value:r}}}},vy=(n,t)=>{n.doc??Ze();let e=bh(n,t),i=n._start;for(e!==null&&(i=e.p,t-=e.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(t<i.length)return i.content.getContent()[t];t-=i.length}},mh=(n,t,e,i)=>{let r=e,s=n.doc,a=s.clientID,o=s.store,c=e===null?t._start:e.right,l=[],h=()=>{l.length>0&&(r=new Fe(qt(a,ze(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new To(l)),r.integrate(n,0),l=[])};i.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:r=new Fe(qt(a,ze(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new $a(new Uint8Array(u))),r.integrate(n,0);break;case ds:r=new Fe(qt(a,ze(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Ya(u)),r.integrate(n,0);break;default:if(u instanceof Re)r=new Fe(qt(a,ze(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new qi(u)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},by=()=>Cn("Length exceeded!"),My=(n,t,e,i)=>{if(e>t._length)throw by();if(e===0)return t._searchMarker&&Va(t._searchMarker,e,i.length),mh(n,t,null,i);let r=e,s=bh(t,e),a=t._start;for(s!==null&&(a=s.p,e-=s.index,e===0&&(a=a.prev,e+=a&&a.countable&&!a.deleted?a.length:0));a!==null;a=a.right)if(!a.deleted&&a.countable){if(e<=a.length){e<a.length&&Ar(n,qt(a.id.client,a.id.clock+e));break}e-=a.length}return t._searchMarker&&Va(t._searchMarker,r,i.length),mh(n,t,a,i)},YA=(n,t,e)=>{let r=(t._searchMarker||[]).reduce((s,a)=>a.index>s.index?a:s,{index:0,p:t._start}).p;if(r)for(;r.right;)r=r.right;return mh(n,t,r,e)},Sy=(n,t,e,i)=>{if(i===0)return;let r=e,s=i,a=bh(t,e),o=t._start;for(a!==null&&(o=a.p,e-=a.index);o!==null&&e>0;o=o.right)!o.deleted&&o.countable&&(e<o.length&&Ar(n,qt(o.id.client,o.id.clock+e)),e-=o.length);for(;i>0&&o!==null;)o.deleted||(i<o.length&&Ar(n,qt(o.id.client,o.id.clock+i)),o.delete(n),i-=o.length),o=o.right;if(i>0)throw by();t._searchMarker&&Va(t._searchMarker,r,-s+i)},gh=(n,t,e)=>{let i=t._map.get(e);i!==void 0&&i.delete(n)},Kf=(n,t,e,i)=>{let r=t._map.get(e)||null,s=n.doc,a=s.clientID,o;if(i==null)o=new To([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:o=new To([i]);break;case Uint8Array:o=new $a(i);break;case ds:o=new Ya(i);break;default:if(i instanceof Re)o=new qi(i);else throw new Error("Unexpected content type")}new Fe(qt(a,ze(s.store,a)),r,r&&r.lastId,null,null,t,e,o).integrate(n,0)},Qf=(n,t)=>{n.doc??Ze();let e=n._map.get(t);return e!==void 0&&!e.deleted?e.content.getContent()[e.length-1]:void 0},wy=n=>{let t={};return n.doc??Ze(),n._map.forEach((e,i)=>{e.deleted||(t[i]=e.content.getContent()[e.length-1])}),t},Ey=(n,t)=>{n.doc??Ze();let e=n._map.get(t);return e!==void 0&&!e.deleted};var jA=(n,t)=>{let e={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!t.sv.has(s.id.client)||s.id.clock>=(t.sv.get(s.id.client)||0));)s=s.left;s!==null&&So(s,t)&&(e[r]=s.content.getContent()[s.length-1])}),e},oh=n=>(n.doc??Ze(),G0(n._map.entries(),t=>!t[1].deleted)),Ff=class extends wo{},xh=class n extends Re{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){let e=new n;return e.push(t),e}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Re?e.clone():e)),t}get length(){return this.doc??Ze(),this._length}_callObserver(t,e){super._callObserver(t,e),Mh(this,t,new Ff(this,t))}insert(t,e){this.doc!==null?te(this.doc,i=>{My(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}push(t){this.doc!==null?te(this.doc,e=>{YA(e,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,e=1){this.doc!==null?te(this.doc,i=>{Sy(i,this,t,e)}):this._prelimContent.splice(t,e)}get(t){return vy(this,t)}toArray(){return yy(this)}slice(t=0,e=this.length){return xy(this,t,e)}toJSON(){return this.map(t=>t instanceof Re?t.toJSON():t)}map(t){return _y(this,t)}forEach(t){Ha(this,t)}[Symbol.iterator](){return $A(this)}_write(t){t.writeTypeRef(xC)}},JA=n=>new xh,kf=class extends wo{constructor(t,e,i){super(t,e),this.keysChanged=i}},ps=class n extends Re{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,e){super._integrate(t,e),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return this.forEach((e,i)=>{t.set(i,e instanceof Re?e.clone():e)}),t}_callObserver(t,e){Mh(this,t,new kf(this,t,e))}toJSON(){this.doc??Ze();let t={};return this._map.forEach((e,i)=>{if(!e.deleted){let r=e.content.getContent()[e.length-1];t[i]=r instanceof Re?r.toJSON():r}}),t}get size(){return[...oh(this)].length}keys(){return rh(oh(this),t=>t[0])}values(){return rh(oh(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return rh(oh(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??Ze(),this._map.forEach((e,i)=>{e.deleted||t(e.content.getContent()[e.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?te(this.doc,e=>{gh(e,this,t)}):this._prelimContent.delete(t)}set(t,e){return this.doc!==null?te(this.doc,i=>{Kf(i,this,t,e)}):this._prelimContent.set(t,e),e}get(t){return Qf(this,t)}has(t){return Ey(this,t)}clear(){this.doc!==null?te(this.doc,t=>{this.forEach(function(e,i,r){gh(t,r,i)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(yC)}},ZA=n=>new ps,wr=(n,t)=>n===t||typeof n=="object"&&typeof t=="object"&&n&&t&&sf(n,t),Ga=class{constructor(t,e,i,r){this.left=t,this.right=e,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&xn(),this.right.content.constructor){case Ie:this.right.deleted||Co(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}},ty=(n,t,e)=>{for(;t.right!==null&&e>0;){switch(t.right.content.constructor){case Ie:t.right.deleted||Co(t.currentAttributes,t.right.content);break;default:t.right.deleted||(e<t.right.length&&Ar(n,qt(t.right.id.client,t.right.id.clock+e)),t.index+=t.right.length,e-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},ah=(n,t,e,i)=>{let r=new Map,s=i?bh(t,e):null;if(s){let a=new Ga(s.p.left,s.p,s.index,r);return ty(n,a,e-s.index)}else{let a=new Ga(null,t._start,0,r);return ty(n,a,e)}},Ty=(n,t,e,i)=>{for(;e.right!==null&&(e.right.deleted===!0||e.right.content.constructor===Ie&&wr(i.get(e.right.content.key),e.right.content.value));)e.right.deleted||i.delete(e.right.content.key),e.forward();let r=n.doc,s=r.clientID;i.forEach((a,o)=>{let c=e.left,l=e.right,h=new Fe(qt(s,ze(r.store,s)),c,c&&c.lastId,l,l&&l.id,t,null,new Ie(o,a));h.integrate(n,0),e.right=h,e.forward()})},Co=(n,t)=>{let{key:e,value:i}=t;i===null?n.delete(e):n.set(e,i)},Ay=(n,t)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===Ie&&wr(t[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},Cy=(n,t,e,i)=>{let r=n.doc,s=r.clientID,a=new Map;for(let o in i){let c=i[o],l=e.currentAttributes.get(o)??null;if(!wr(l,c)){a.set(o,l);let{left:h,right:u}=e;e.right=new Fe(qt(s,ze(r.store,s)),h,h&&h.lastId,u,u&&u.id,t,null,new Ie(o,c)),e.right.integrate(n,0),e.forward()}}return a},Cf=(n,t,e,i,r)=>{e.currentAttributes.forEach((d,f)=>{r[f]===void 0&&(r[f]=null)});let s=n.doc,a=s.clientID;Ay(e,r);let o=Cy(n,t,e,r),c=i.constructor===String?new Xi(i):i instanceof Re?new qi(i):new ms(i),{left:l,right:h,index:u}=e;t._searchMarker&&Va(t._searchMarker,e.index,c.getLength()),h=new Fe(qt(a,ze(s.store,a)),l,l&&l.lastId,h,h&&h.id,t,null,c),h.integrate(n,0),e.right=h,e.index=u,e.forward(),Ty(n,t,e,o)},ey=(n,t,e,i,r)=>{let s=n.doc,a=s.clientID;Ay(e,r);let o=Cy(n,t,e,r);t:for(;e.right!==null&&(i>0||o.size>0&&(e.right.deleted||e.right.content.constructor===Ie));){if(!e.right.deleted)switch(e.right.content.constructor){case Ie:{let{key:c,value:l}=e.right.content,h=r[c];if(h!==void 0){if(wr(h,l))o.delete(c);else{if(i===0)break t;o.set(c,l)}e.right.delete(n)}else e.currentAttributes.set(c,l);break}default:i<e.right.length&&Ar(n,qt(e.right.id.client,e.right.id.clock+i)),i-=e.right.length;break}e.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;e.right=new Fe(qt(a,ze(s.store,a)),e.left,e.left&&e.left.lastId,e.right,e.right&&e.right.id,t,null,new Xi(c)),e.right.integrate(n,0),e.forward()}Ty(n,t,e,o)},Ry=(n,t,e,i,r)=>{let s=t,a=dn();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===Ie){let l=s.content;a.set(l.key,l)}s=s.right}let o=0,c=!1;for(;t!==s;){if(e===t&&(c=!0),!t.deleted){let l=t.content;switch(l.constructor){case Ie:{let{key:h,value:u}=l,d=i.get(h)??null;(a.get(h)!==l||d===u)&&(t.delete(n),o++,!c&&(r.get(h)??null)===u&&d!==u&&(d===null?r.delete(h):r.set(h,d))),!c&&!t.deleted&&Co(r,l);break}}}t=t.right}return o},KA=(n,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;let e=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===Ie){let i=t.content.key;e.has(i)?t.delete(n):e.add(i)}t=t.left}},QA=n=>{let t=0;return te(n.doc,e=>{let i=n._start,r=n._start,s=dn(),a=Il(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case Ie:Co(a,r.content);break;default:t+=Ry(e,i,r,s,a),s=Il(a),i=r;break}r=r.right}}),t},tC=n=>{let t=new Set,e=n.doc;for(let[i,r]of n.afterState.entries()){let s=n.beforeState.get(i)||0;r!==s&&dy(n,e.store.clients.get(i),s,r,a=>{!a.deleted&&a.content.constructor===Ie&&a.constructor!==_n&&t.add(a.parent)})}te(e,i=>{iy(n,n.deleteSet,r=>{if(r instanceof _n||!r.parent._hasFormatting||t.has(r.parent))return;let s=r.parent;r.content.constructor===Ie?t.add(s):KA(i,r)});for(let r of t)QA(r)})},ny=(n,t,e)=>{let i=e,r=Il(t.currentAttributes),s=t.right;for(;e>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case qi:case ms:case Xi:e<t.right.length&&Ar(n,qt(t.right.id.client,t.right.id.clock+e)),e-=t.right.length,t.right.delete(n);break}t.forward()}s&&Ry(n,s,t.right,r,t.currentAttributes);let a=(t.left||t.right).parent;return a._searchMarker&&Va(a._searchMarker,t.index,-i+e),t},Bf=class extends wo{constructor(t,e,i){super(t,e),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){let t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){let t=this.target.doc,e=[];te(t,i=>{let r=new Map,s=new Map,a=this.target._start,o=null,c={},l="",h=0,u=0,d=()=>{if(o!==null){let f=null;switch(o){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(f={insert:l},r.size>0&&(f.attributes={},r.forEach((x,y)=>{x!==null&&(f.attributes[y]=x)}))),l="";break;case"retain":h>0&&(f={retain:h},x0(c)||(f.attributes=m0({},c))),h=0;break}f&&e.push(f),o=null}};for(;a!==null;){switch(a.content.constructor){case qi:case ms:this.adds(a)?this.deletes(a)||(d(),o="insert",l=a.content.getContent()[0],d()):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),u+=1):a.deleted||(o!=="retain"&&(d(),o="retain"),h+=1);break;case Xi:this.adds(a)?this.deletes(a)||(o!=="insert"&&(d(),o="insert"),l+=a.content.str):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),u+=a.length):a.deleted||(o!=="retain"&&(d(),o="retain"),h+=a.length);break;case Ie:{let{key:f,value:x}=a.content;if(this.adds(a)){if(!this.deletes(a)){let y=r.get(f)??null;wr(y,x)?x!==null&&a.delete(i):(o==="retain"&&d(),wr(x,s.get(f)??null)?delete c[f]:c[f]=x)}}else if(this.deletes(a)){s.set(f,x);let y=r.get(f)??null;wr(y,x)||(o==="retain"&&d(),c[f]=y)}else if(!a.deleted){s.set(f,x);let y=c[f];y!==void 0&&(wr(y,x)?y!==null&&a.delete(i):(o==="retain"&&d(),x===null?delete c[f]:c[f]=x))}a.deleted||(o==="insert"&&d(),Co(r,a.content));break}}a=a.right}for(d();e.length>0;){let f=e[e.length-1];if(f.retain!==void 0&&f.attributes===void 0)e.pop();else break}}),this._delta=e}return this._delta}},Wa=class n extends Re{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Ze(),this._length}_integrate(t,e){super._integrate(t,e);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}_callObserver(t,e){super._callObserver(t,e);let i=new Bf(this,t,e);Mh(this,t,i),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??Ze();let t="",e=this._start;for(;e!==null;)!e.deleted&&e.countable&&e.content.constructor===Xi&&(t+=e.content.str),e=e.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:e=!0}={}){this.doc!==null?te(this.doc,i=>{let r=new Ga(null,this._start,0,new Map);for(let s=0;s<t.length;s++){let a=t[s];if(a.insert!==void 0){let o=!e&&typeof a.insert=="string"&&s===t.length-1&&r.right===null&&a.insert.slice(-1)===`
`?a.insert.slice(0,-1):a.insert;(typeof o!="string"||o.length>0)&&Cf(i,this,r,o,a.attributes||{})}else a.retain!==void 0?ey(i,this,r,a.retain,a.attributes||{}):a.delete!==void 0&&ny(i,r,a.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,e,i){this.doc??Ze();let r=[],s=new Map,a=this.doc,o="",c=this._start;function l(){if(o.length>0){let u={},d=!1;s.forEach((x,y)=>{d=!0,u[y]=x});let f={insert:o};d&&(f.attributes=u),r.push(f),o=""}}let h=()=>{for(;c!==null;){if(So(c,t)||e!==void 0&&So(c,e))switch(c.content.constructor){case Xi:{let u=s.get("ychange");t!==void 0&&!So(c,t)?(u===void 0||u.user!==c.id.client||u.type!=="removed")&&(l(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):e!==void 0&&!So(c,e)?(u===void 0||u.user!==c.id.client||u.type!=="added")&&(l(),s.set("ychange",i?i("added",c.id):{type:"added"})):u!==void 0&&(l(),s.delete("ychange")),o+=c.content.str;break}case qi:case ms:{l();let u={insert:c.content.getContent()[0]};if(s.size>0){let d={};u.attributes=d,s.forEach((f,x)=>{d[x]=f})}r.push(u);break}case Ie:So(c,t)&&(l(),Co(s,c.content));break}c=c.right}l()};return t||e?te(a,u=>{t&&Df(u,t),e&&Df(u,e),h()},"cleanup"):h(),r}insert(t,e,i){if(e.length<=0)return;let r=this.doc;r!==null?te(r,s=>{let a=ah(s,this,t,!i);i||(i={},a.currentAttributes.forEach((o,c)=>{i[c]=o})),Cf(s,this,a,e,i)}):this._pending.push(()=>this.insert(t,e,i))}insertEmbed(t,e,i){let r=this.doc;r!==null?te(r,s=>{let a=ah(s,this,t,!i);Cf(s,this,a,e,i||{})}):this._pending.push(()=>this.insertEmbed(t,e,i||{}))}delete(t,e){if(e===0)return;let i=this.doc;i!==null?te(i,r=>{ny(r,ah(r,this,t,!0),e)}):this._pending.push(()=>this.delete(t,e))}format(t,e,i){if(e===0)return;let r=this.doc;r!==null?te(r,s=>{let a=ah(s,this,t,!1);a.right!==null&&ey(s,this,a,e,i)}):this._pending.push(()=>this.format(t,e,i))}removeAttribute(t){this.doc!==null?te(this.doc,e=>{gh(e,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Kf(i,this,t,e)}):this._pending.push(()=>this.setAttribute(t,e))}getAttribute(t){return Qf(this,t)}getAttributes(){return wy(this)}_write(t){t.writeTypeRef(_C)}},eC=n=>new Wa,za=class{constructor(t,e=()=>!0){this._filter=e,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??Ze()}[Symbol.iterator](){return this}next(){let t=this._currentNode,e=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(e)))do if(e=t.content.type,!t.deleted&&(e.constructor===Xa||e.constructor===Eo)&&e._start!==null)t=e._start;else for(;t!==null;)if(t.right!==null){t=t.right;break}else t.parent===this._root?t=null:t=t.parent._item;while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}},Eo=class n extends Re{constructor(){super(),this._prelimContent=[]}get firstChild(){let t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Re?e.clone():e)),t}get length(){return this.doc??Ze(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new za(this,t)}querySelector(t){t=t.toUpperCase();let i=new za(this,r=>r.nodeName&&r.nodeName.toUpperCase()===t).next();return i.done?null:i.value}querySelectorAll(t){return t=t.toUpperCase(),Hi(new za(this,e=>e.nodeName&&e.nodeName.toUpperCase()===t))}_callObserver(t,e){Mh(this,t,new Vf(this,e,t))}toString(){return _y(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,e={},i){let r=t.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Ha(this,s=>{r.insertBefore(s.toDOM(t,e,i),null)}),r}insert(t,e){this.doc!==null?te(this.doc,i=>{My(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}insertAfter(t,e){if(this.doc!==null)te(this.doc,i=>{let r=t&&t instanceof Re?t._item:t;mh(i,this,r,e)});else{let i=this._prelimContent,r=t===null?0:i.findIndex(s=>s===t)+1;if(r===0&&t!==null)throw Cn("Reference item not found");i.splice(r,0,...e)}}delete(t,e=1){this.doc!==null?te(this.doc,i=>{Sy(i,this,t,e)}):this._prelimContent.splice(t,e)}toArray(){return yy(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return vy(this,t)}slice(t=0,e=this.length){return xy(this,t,e)}forEach(t){Ha(this,t)}_write(t){t.writeTypeRef(bC)}},nC=n=>new Eo,Xa=class n extends Eo{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,e){super._integrate(t,e),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new n(this.nodeName)}clone(){let t=new n(this.nodeName),e=this.getAttributes();return g0(e,(i,r)=>{typeof i=="string"&&t.setAttribute(r,i)}),t.insert(0,this.toArray().map(i=>i instanceof Re?i.clone():i)),t}toString(){let t=this.getAttributes(),e=[],i=[];for(let o in t)i.push(o);i.sort();let r=i.length;for(let o=0;o<r;o++){let c=i[o];e.push(c+'="'+t[c]+'"')}let s=this.nodeName.toLocaleLowerCase(),a=e.length>0?" "+e.join(" "):"";return`<${s}${a}>${super.toString()}</${s}>`}removeAttribute(t){this.doc!==null?te(this.doc,e=>{gh(e,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Kf(i,this,t,e)}):this._prelimAttrs.set(t,e)}getAttribute(t){return Qf(this,t)}hasAttribute(t){return Ey(this,t)}getAttributes(t){return t?jA(this,t):wy(this)}toDOM(t=document,e={},i){let r=t.createElement(this.nodeName),s=this.getAttributes();for(let a in s){let o=s[a];typeof o=="string"&&r.setAttribute(a,o)}return Ha(this,a=>{r.appendChild(a.toDOM(t,e,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(t){t.writeTypeRef(vC),t.writeKey(this.nodeName)}},iC=n=>new Xa(n.readKey()),Vf=class extends wo{constructor(t,e,i){super(t,i),this.childListChanged=!1,this.attributesChanged=new Set,e.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}},Hf=class n extends ps{constructor(t){super(),this.hookName=t}_copy(){return new n(this.hookName)}clone(){let t=new n(this.hookName);return this.forEach((e,i)=>{t.set(i,e)}),t}toDOM(t=document,e={},i){let r=e[this.hookName],s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(t){t.writeTypeRef(MC),t.writeKey(this.hookName)}},rC=n=>new Hf(n.readKey()),Gf=class n extends Wa{get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}toDOM(t=document,e,i){let r=t.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(t=>{let e=[];for(let r in t.attributes){let s=[];for(let a in t.attributes[r])s.push({key:a,value:t.attributes[r][a]});s.sort((a,o)=>a.key<o.key?-1:1),e.push({nodeName:r,attrs:s})}e.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<e.length;r++){let s=e[r];i+=`<${s.nodeName}`;for(let a=0;a<s.attrs.length;a++){let o=s.attrs[a];i+=` ${o.key}="${o.value}"`}i+=">"}i+=t.insert;for(let r=e.length-1;r>=0;r--)i+=`</${e[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(SC)}},sC=n=>new Gf,qa=class{constructor(t,e){this.id=t,this.length=e}get deleted(){throw Rn()}mergeWith(t){return!1}write(t,e,i){throw Rn()}integrate(t,e){throw Rn()}},oC=0,_n=class extends qa{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){e>0&&(this.id.clock+=e,this.length-=e),uy(t.doc.store,this)}write(t,e){t.writeInfo(oC),t.writeLen(this.length-e)}getMissing(t,e){return null}},$a=class n{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new n(this.content)}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeBuf(this.content)}getRef(){return 3}},aC=n=>new $a(n.readBuf()),yh=class n{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.len)}splice(t){let e=new n(this.len-t);return this.len=t,e}mergeWith(t){return this.len+=t.len,!0}integrate(t,e){hh(t.deleteSet,e.id.client,e.id.clock,this.len),e.markDeleted()}delete(t){}gc(t){}write(t,e){t.writeLen(this.len-e)}getRef(){return 1}},cC=n=>new yh(n.readLen()),Iy=(n,t)=>new ds({guid:n,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1}),Ya=class n{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;let e={};this.opts=e,t.gc||(e.gc=!1),t.autoLoad&&(e.autoLoad=!0),t.meta!==null&&(e.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new n(Iy(this.doc.guid,this.opts))}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){this.doc._item=e,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,e){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}},lC=n=>new Ya(Iy(n.readString(),n.readAny())),ms=class n{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new n(this.embed)}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeJSON(this.embed)}getRef(){return 5}},hC=n=>new ms(n.readJSON()),Ie=class n{constructor(t,e){this.key=t,this.value=e}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.key,this.value)}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){let i=e.parent;i._searchMarker=null,i._hasFormatting=!0}delete(t){}gc(t){}write(t,e){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}},uC=n=>new Ie(n.readKey(),n.readJSON()),Wf=class n{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}},dC=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++){let r=n.readString();r==="undefined"?e.push(void 0):e.push(JSON.parse(r))}return new Wf(e)},fC=Ra("node_env")==="development",To=class n{constructor(t){this.arr=t,fC&&of(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeAny(s)}}getRef(){return 8}},pC=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++)e.push(n.readAny());return new To(e)},Xi=class n{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new n(this.str)}splice(t){let e=new n(this.str.slice(t));this.str=this.str.slice(0,t);let i=this.str.charCodeAt(t-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,t-1)+"\uFFFD",e.str="\uFFFD"+e.str.slice(1)),e}mergeWith(t){return this.str+=t.str,!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeString(e===0?this.str:this.str.slice(e))}getRef(){return 4}},mC=n=>new Xi(n.readString()),gC=[JA,ZA,eC,iC,nC,rC,sC],xC=0,yC=1,_C=2,vC=3,bC=4,MC=5,SC=6,qi=class n{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new n(this.type._copy())}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){this.type._integrate(t.doc,e)}delete(t){let e=this.type._start;for(;e!==null;)e.deleted?e.id.clock<(t.beforeState.get(e.id.client)||0)&&t._mergeStructs.push(e):e.delete(t),e=e.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(t.beforeState.get(i.id.client)||0)&&t._mergeStructs.push(i):i.delete(t)}),t.changed.delete(this.type)}gc(t){let e=this.type._start;for(;e!==null;)e.gc(t,!0),e=e.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(t,!0),i=i.left}),this.type._map=new Map}write(t,e){this.type._write(t)}getRef(){return 7}},wC=n=>new qi(gC[n.readTypeRef()](n));var _h=(n,t,e)=>{let{client:i,clock:r}=t.id,s=new Fe(qt(i,r+e),t,qt(i,r+e-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e));return t.deleted&&s.markDeleted(),t.keep&&(s.keep=!0),t.redone!==null&&(s.redone=qt(t.redone.client,t.redone.clock+e)),t.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),t.length=e,s};var Fe=class n extends qa{constructor(t,e,i,r,s,a,o,c){super(t,c.getLength()),this.origin=i,this.left=e,this.right=r,this.rightOrigin=s,this.parent=a,this.parentSub=o,this.redone=null,this.content=c,this.info=this.content.isCountable()?2:0}set marker(t){(this.info&8)>0!==t&&(this.info^=8)}get marker(){return(this.info&8)>0}get keep(){return(this.info&1)>0}set keep(t){this.keep!==t&&(this.info^=1)}get countable(){return(this.info&2)>0}get deleted(){return(this.info&4)>0}set deleted(t){this.deleted!==t&&(this.info^=4)}markDeleted(){this.info|=4}getMissing(t,e){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=ze(e,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=ze(e,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Er&&this.id.client!==this.parent.client&&this.parent.clock>=ze(e,this.parent.client))return this.parent.client;if(this.origin&&(this.left=J0(t,e,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=Ar(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===_n||this.right&&this.right.constructor===_n)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===n&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===n&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Er){let i=Af(e,this.parent);i.constructor===_n?this.parent=null:this.parent=i.content.type}return null}integrate(t,e){if(e>0&&(this.id.clock+=e,this.left=J0(t,t.doc.store,qt(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(e),this.length-=e),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;let s=new Set,a=new Set;for(;r!==null&&r!==this.right;){if(a.add(r),s.add(r),sh(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(sh(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&a.has(Af(t.doc.store,r.origin)))s.has(Af(t.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){let i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),uy(t.doc.store,this),this.content.integrate(t,this),K0(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new _n(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:qt(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&sh(t.origin,this.lastId)&&this.right===t&&sh(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){let e=this.parent._searchMarker;return e&&e.forEach(i=>{i.p===t&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){let e=this.parent;this.countable&&this.parentSub===null&&(e._length-=this.length),this.markDeleted(),hh(t.deleteSet,this.id.client,this.id.clock,this.length),K0(t,e,this.parentSub),this.content.delete(t)}}gc(t,e){if(!this.deleted)throw xn();this.content.gc(t),e?NA(t,this,new _n(this.id,this.length)):this.content=new yh(this.length)}write(t,e){let i=e>0?qt(this.id.client,this.id.clock+e-1):this.origin,r=this.rightOrigin,s=this.parentSub,a=this.content.getRef()&31|(i===null?0:128)|(r===null?0:64)|(s===null?0:32);if(t.writeInfo(a),i!==null&&t.writeLeftID(i),r!==null&&t.writeRightID(r),i===null&&r===null){let o=this.parent;if(o._item!==void 0){let c=o._item;if(c===null){let l=PA(o);t.writeParentInfo(!0),t.writeString(l)}else t.writeParentInfo(!1),t.writeLeftID(c.id)}else o.constructor===String?(t.writeParentInfo(!0),t.writeString(o)):o.constructor===Er?(t.writeParentInfo(!1),t.writeLeftID(o)):xn();s!==null&&t.writeString(s)}this.content.write(t,e)}},Ly=(n,t)=>EC[t&31](n),EC=[()=>{xn()},cC,dC,aC,mC,hC,uC,wC,pC,lC,()=>{xn()}],TC=10,vn=class extends qa{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){xn()}write(t,e){t.writeInfo(TC),$t(t.restEncoder,this.length-e)}getMissing(t,e){return null}},Py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Uy="__ $YJS$ __";Py[Uy]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Py[Uy]=!0;var AC="nodes",CC="doc",ja="",Ny=n=>n.getMap(AC),Oy=n=>n.getMap(CC),RC=n=>n.map(t=>[t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.c]),IC=n=>n.map(t=>({x0:t[0],y0:t[1],z0:t[2],x1:t[3],y1:t[4],z1:t[5],c:t[6]})),$i=(n,t,e)=>n.get(t)===e?!1:(n.set(t,e),!0),LC=(n,t)=>{let e=RC(t),i=n.get("b");return i&&JSON.stringify(i)===JSON.stringify(e)?!1:(n.set("b",e),!0)};function PC(n){let t=[],e=(i,r,s)=>{t.push({node:i,parent:r,ord:s}),i.type==="scene"&&i.children.forEach((a,o)=>e(a,i.id,o))};return e(n,ja,0),t}function ep(n,t,e){let i=Ny(n),r=PC(t),s=new Set(r.map(o=>o.node.id)),a=!1;return te(n,()=>{let o=Oy(n);o.get("root")!==t.id&&(o.set("root",t.id),a=!0);for(let c of[...i.keys()])s.has(c)||(i.delete(c),a=!0);for(let c of r){let l=i.get(c.node.id);l||(l=new ps,i.set(c.node.id,l),a=!0);let h=c.node;a=$i(l,"t",h.type==="object"?"o":"s")||a,a=$i(l,"p",c.parent)||a,a=$i(l,"o",c.ord)||a,a=$i(l,"nm",h.name)||a,a=$i(l,"px",h.pos.x)||a,a=$i(l,"py",h.pos.y)||a,a=$i(l,"pz",h.pos.z)||a,a=$i(l,"r",h.rot)||a,a=$i(l,"vs",h.vis)||a,h.type==="object"&&(a=LC(l,h.boxes)||a)}},e),a}var UC=n=>((typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):0)%4+4)%4,tp=n=>typeof n=="number"&&Number.isFinite(n)?Math.round(n):0,DC=n=>typeof n=="number"&&Number.isFinite(n)?n:0,NC=["visible","deemphasized","hidden"],OC=n=>NC.includes(n)?n:"visible";function zC(n,t){let e=new Map(n);for(let i of e.keys()){let r=new Set([i]),s=i;for(;;){let a=e.get(s);if(a===void 0||a===ja||!e.has(a))break;if(r.has(a)){let o=[a];for(let l=e.get(a);l!==a;l=e.get(l))o.push(l);o.sort();let c=o[o.length-1];e.set(c,c===t?ja:t);break}r.add(a),s=a}}return e}var FC=(n,t)=>n[1]-t[1]||(n[0]<t[0]?-1:n[0]>t[0]?1:0);function Ro(n){let t=Ny(n),e=new Map;if(t.forEach((c,l)=>{let h=c.get("p");e.set(l,typeof h=="string"?h:ja)}),!e.size)return null;let i=Oy(n).get("root")??"";if(t.has(i)||(i=[...e].find(([,c])=>c===ja)?.[0]??""),!i)return null;let r=zC(e,i),s=new Map;for(let[c,l]of r){if(c===i)continue;let h=DC(t.get(c)?.get("o")),u=s.get(l);u?u.push([c,h]):s.set(l,[[c,h]])}for(let c of s.values())c.sort(FC);let a=c=>{let l=t.get(c);if(!l)return null;let h={id:c,name:typeof l.get("nm")=="string"?l.get("nm"):"",pos:{x:tp(l.get("px")),y:tp(l.get("py")),z:tp(l.get("pz"))},rot:UC(l.get("r")),vis:OC(l.get("vs"))};if(l.get("t")==="o"){let u=l.get("b");return{type:"object",...h,boxes:Array.isArray(u)?IC(u):[]}}return{type:"scene",...h,children:(s.get(c)??[]).map(([u])=>a(u)).filter(u=>u!==null)}},o=a(i);return o&&o.type==="scene"?o:null}var Ja=()=>new ds;function zy(n){let t=Ja();return ep(t,n),t}var np=n=>cy(n);var kC="voxelier";var Za="meta",Ka="data",Io=null;function BC(){return Io||(Io=new Promise((n,t)=>{let e=indexedDB.open(kC,1);e.onupgradeneeded=()=>{let i=e.result;i.objectStoreNames.contains(Za)||i.createObjectStore(Za),i.objectStoreNames.contains(Ka)||i.createObjectStore(Ka)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Io.catch(()=>{Io=null}),Io)}function Lo(n,t,e){return BC().then(i=>new Promise((r,s)=>{let a=i.transaction(n,t),o=e(a.objectStore(n));o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error),a.onabort=()=>s(a.error)}))}var Fy=(n,t)=>Lo(Ka,"readwrite",e=>e.put(t,n)).then(()=>{}),ky=n=>Lo(Ka,"readonly",t=>t.get(n)).then(t=>t instanceof Uint8Array?t:null),By=n=>Lo(Ka,"readwrite",t=>t.delete(n)).then(()=>{}),Vy=n=>Lo(Za,"readwrite",t=>t.put(n,n.id)).then(()=>{}),Hy=n=>Lo(Za,"readwrite",t=>t.delete(n)).then(()=>{}),ip=()=>Lo(Za,"readonly",n=>n.getAll()).then(n=>n.filter(t=>t&&typeof t.id=="string")).then(n=>n.sort((t,e)=>(e.updated??0)-(t.updated??0)));var wh=Symbol("remote"),VC=Symbol("local"),yi=Ja(),Sh=null,Qa=null,sp=null,Gy=()=>yi,Wy=()=>Sh,Xy=n=>{sp=n},op=n=>`doc:${n}`,HC=n=>`voxelier:doc:${n}`,Po="";function Eh(){if(Sh===null)return;let n=Sh;Fy(op(n),np(yi)).catch(()=>{}),Vy({id:n,name:Po,updated:Date.now()}).catch(()=>{})}function ap(n){yi.off("update",rp),yi=n,yi.on("update",rp)}function rp(n,t){t!==wh&&qy({k:"u",b:n})}yi.on("update",rp);function qy(n){try{Qa?.postMessage(n)}catch{}}async function cp(n){Qa?.close(),Qa=null,Sh=n,typeof BroadcastChannel<"u"&&(Qa=new BroadcastChannel(HC(n)),Qa.onmessage=e=>{let i=e.data;!i||i.k!=="u"&&i.k!=="r"||!(i.b instanceof Uint8Array)||(i.k==="r"?WC(i.b):GC(i.b))});let t=null;try{t=await ky(op(n))}catch{return null}if(!t)return null;try{let e=Ja();vh(e,t,wh);let i=Ro(e);return i?(ap(e),Po=i.name,i):null}catch{return null}}async function $y(n){await Promise.all([By(op(n)).catch(()=>{}),Hy(n).catch(()=>{})])}function GC(n){try{vh(yi,n,wh);let t=Ro(yi);return t&&(Po=t.name,sp?.(t),Eh()),t}catch{return null}}function WC(n){try{let t=Ja();vh(t,n,wh);let e=Ro(t);return e?(ap(t),Po=e.name,sp?.(e),Eh(),e):null}catch{return null}}function lp(n){return Po=n.name,ep(yi,n,VC)?(Eh(),!0):!1}function hp(n){ap(zy(n)),Po=n.name,Eh(),qy({k:"r",b:np(yi)})}var XC="voxelier-v11",Yy="voxelier-ui-v1";function Bn(n){let t={id:n.id,nm:n.name,p:n.pos,r:n.rot,vs:n.vis};return n.type==="object"?{t:"o",...t,b:n.boxes.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c])}:{t:"s",...t,c:n.children.map(Bn)}}var qC={transparent:"deemphasized",invisible:"hidden"};function Qr(n){let t={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:qC[n.vs]||n.vs||"visible"};return n.t==="o"?{type:"object",...t,boxes:n.b.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]}))}:{type:"scene",...t,children:n.c.map(Qr)}}var tc;function $C(){try{localStorage.setItem(Yy,JSON.stringify([...g.collapsed]))}catch{}}function Je(){clearTimeout(tc),tc=void 0,qx(JSON.stringify(Bn(g.root))),lp(g.root),$C()}function up(){tc===void 0&&($x(JSON.stringify(Bn(g.root))),lp(g.root))}function pe(){clearTimeout(tc),tc=setTimeout(Je,250)}function dp(n){return!n||!n.root?null:(ml(n.uid||1),Qr(n.root))}function Th(n){g.root=n,ma()}var jy=()=>{try{let n=JSON.parse(localStorage.getItem(Yy));return Array.isArray(n)?n:[]}catch{return[]}};function Jy(){try{return dp(JSON.parse(localStorage.getItem(XC)))}catch{return null}}var YC=2;function ec(n){let t=de();return Be(n,t),{mn:t.min,mx:t.max}}var Ah=n=>{let{mn:t,mx:e}=ec(n);return{x0:t.x,y0:t.y,z0:t.z,x1:e.x,y1:e.y,z1:e.z}};function Ky(n){if(!n.length)return[];let{mn:t}=ec(n);return n.map(e=>ca(e,-t.x,-t.y,-t.z))}function Qy(n){let t=Sd(g.editObject.boxes,n);g.sel3d={region:t.length?Ah(t):{...n},boxes:t,lifted:!1},vr()}function fp(){let n=g.sel3d;!n||n.lifted||(Je(),n.lifted=!0,fa(n.region))}function pp(){JC();let n=g.sel3d;!n||!n.lifted||(n.lifted=!1,Sl(n.boxes),n.boxes=Sd(g.editObject.boxes,n.region),pe())}function Yi(){let n=g.sel3d;n&&(g.sel3d=null,n.lifted?(Sl(n.boxes),pe()):vr())}function mp(){let n=g.sel3d;if(!n)return;let t=n.region,e=n.lifted;g.sel3d=null,e?vr():fa(t),pe()}function gp(){g.sel3d&&g.sel3d.boxes.length&&Bx(Ky(g.sel3d.boxes))}function t_(){gp(),mp()}function e_(n){if(!n.length)return;Yi();let t=Ky(n),e=0,i=0,r=0,s=g.editObject.boxes;if(s.length){let{mn:o,mx:c}=ec(s);e=c.x+YC,i=o.y,r=o.z}let a=t.map(o=>ca(o,e,i,r));g.sel3d={region:Ah(a),boxes:a,lifted:!1},Sl(a),pe()}function n_(n,t,e){let i=g.sel3d;if(!i||!n&&!t&&!e)return;let r=i.region;r.x0+=n,r.x1+=n,r.y0+=t,r.y1+=t,r.z0+=e,r.z1+=e,i.boxes=i.boxes.map(s=>ca(s,n,t,e)),vr()}function Zy(n,t,e){let{x:i,y:r,z:s}=n;for(let a=(e%4+4)%4;a>0;a--)if(t===0){let o=-s,c=r;r=o,s=c}else if(t===1){let o=-s,c=i;i=o,s=c}else{let o=-r,c=i;i=o,r=c}return{x:i,y:r,z:s}}function jC(n,t,e){let i=Zy({x:n.x0,y:n.y0,z:n.z0},t,e),r=Zy({x:n.x1-1,y:n.y1-1,z:n.z1-1},t,e);return{x0:Math.min(i.x,r.x),y0:Math.min(i.y,r.y),z0:Math.min(i.z,r.z),x1:Math.max(i.x,r.x)+1,y1:Math.max(i.y,r.y)+1,z1:Math.max(i.z,r.z)+1,c:n.c}}function i_(){let n=Wt.matrixWorld.elements,t=ee({x:n[0],y:0,z:n[2]},-g.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var Ch=null;function xp(){let n=g.sel3d;if(!n)return;let t=ec(n.boxes);Ch={boxes:n.boxes.map(e=>({...e})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function JC(){Ch=null}function r_(n,t){let e=g.sel3d,i=Ch;if(!e||!i||!i.boxes.length)return;let r=(n%4+4)%4,s;if(!r)s=i.boxes.map(a=>({...a}));else{let a=t?i_():1;s=i.boxes.map(u=>jC(u,a,r));let o=ec(s),c=fr(i.cx-(o.mn.x+o.mx.x)/2),l=fr(i.cy-(o.mn.y+o.mx.y)/2),h=fr(i.cz-(o.mn.z+o.mx.z)/2);s=s.map(u=>ca(u,c,l,h))}e.boxes=s,e.region=Ah(s),vr()}function s_(n,t){let e=g.sel3d,i=Ch;if(!e||!i||!i.boxes.length)return;let r=t?i_():1,[s,a]=r===0?[i.cy,i.cz]:r===1?[i.cx,i.cz]:[i.cx,i.cy];e.boxes=Ox(i.boxes,n,r,s,a,(o,c,l)=>({x:o,y:c,z:l})),e.region=Ah(e.boxes),vr()}function ZC(){let n=g.sel3d;if(!n)return null;let t=n.region,e=new Pi;for(let i of[t.x0,t.x1])for(let r of[t.y0,t.y1])for(let s of[t.z0,t.z1])e.expandByPoint(Bi(i,r,s));return e}function yp(){let n=ZC();return n?(mn.setFromCamera(oi,Wt),mn.ray.intersectsBox(n)):!1}function KC(n){if(!n.length)return[];let t=[[],[],[]];for(let _ of n)t[0].push(_.x0,_.x1),t[1].push(_.y0,_.y1),t[2].push(_.z0,_.z1);let e=t.map(_=>[...new Set(_)].sort((S,A)=>S-A)),i=e.map(_=>_.length-1),[r,s,a]=i;if(r*s*a>8e6)return n;let o=e.map(_=>new Map(_.map((S,A)=>[S,A]))),c=(_,S,A)=>(_*s+S)*a+A,l=new Int32Array(r*s*a);for(let _ of n){let S=o[0].get(_.x1),A=o[1].get(_.y1),C=o[2].get(_.z1);for(let R=o[0].get(_.x0);R<S;R++)for(let z=o[1].get(_.y0);z<A;z++)for(let M=o[2].get(_.z0);M<C;M++)l[c(R,z,M)]=_.c+1}let h=[],u=[],d=[],f=[];for(let _=0;_<r;_++)for(let S=0;S<s;S++)for(let A=0;A<a;A++)l[c(_,S,A)]&&(h.push(c(_,S,A)),u.push(_),d.push(S),f.push(A));let x=[u,d,f],y=new Uint8Array(r*s*a),m=_=>{y.fill(0);let S=Array.from({length:h.length},(z,M)=>M).sort((z,M)=>x[_[2]][z]-x[_[2]][M]||x[_[1]][z]-x[_[1]][M]||x[_[0]][z]-x[_[0]][M]),A=[0,0,0],C=(z,M,T,N)=>{if(M[T]>=i[T])return!1;let W=(T+1)%3,G=(T+2)%3;A[T]=M[T];for(let I=z[W];I<M[W];I++){A[W]=I;for(let U=z[G];U<M[G];U++){A[G]=U;let X=c(A[0],A[1],A[2]);if(y[X]||l[X]!==N)return!1}}return!0},R=[];for(let z of S){let M=h[z];if(y[M])continue;let T=l[M],N=[u[z],d[z],f[z]],W=[u[z]+1,d[z]+1,f[z]+1];for(let G of _)for(;C(N,W,G,T);)W[G]++;for(let G=N[0];G<W[0];G++)for(let I=N[1];I<W[1];I++)for(let U=N[2];U<W[2];U++)y[c(G,I,U)]=1;R.push({x0:e[0][N[0]],y0:e[1][N[1]],z0:e[2][N[2]],x1:e[0][W[0]],y1:e[1][W[1]],z1:e[2][W[2]],c:T-1})}return R},p=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],v=null;for(let _ of p){let S=m(_);(!v||S.length<v.length)&&(v=S)}return v}var QC=24,o_=n=>n.reduce((t,e)=>t+(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0),0),_p=new WeakSet;function vp(n){if(n.boxes.length<QC||_p.has(n.boxes))return!1;let t=KC(n.boxes);return t.length<n.boxes.length&&o_(t)===o_(n.boxes)?(n.boxes=t,_p.add(t),!0):(_p.add(n.boxes),!1)}var bp=(n,t,e)=>{let i=new Set(g.selection);Yi(),e&&vp(e)&&up(),g.selection=new Set([n]),g.editObject=null,hi(),g.context!==t||e?fe():br(i),Xt()};function tR(){if(g.path.length<=1)return;let n=g.context,t=g.editObject;bp(g.path.pop().id,n,t)}function eR(){bp(g.editObject.id,g.context,g.editObject)}function a_(){g.editObject?eR():tR()}function _i(n){let t=En(n);if(!t)return;let e=g.context,i=g.editObject;g.path=t.slice(0,-1),bp(n.id,e,i)}function gs(n,t){let e=En(n);if(!e)return;let i=g.editObject;Yi(),i&&i!==n&&vp(i)&&up(),n.type==="scene"?(g.path=e,g.editObject=null):(g.path=e.slice(0,-1),g.editObject=n),g.selection.clear(),g.tool="view",hi(),fe(),Xt(),t&&Fn()}var vi=null,Ge=null,nc=null,Uo=null,Vn=null,nR={visible:"\u25C9",deemphasized:"\u25D0",hidden:"\u29B0"},Mp=(n,t)=>{let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,r=Math.min(255,(n&255)*t)|0;return`rgb(${e},${i},${r})`},Rh=new Map;function c_(n){return n.type==="object"?"o"+n.boxes.map(t=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+n.children.map(t=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${c_(t)}`).join()}function iR(n){let t=Rh.get(n.id);if(n===g.editObject&&t)return t.cv;let e=c_(n);if(t&&t.sig===e)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let r=i.getContext("2d");r.fillStyle="#0f1115",r.fillRect(0,0,52,52);let s=jr(n,{x:0,y:0,z:0},0,[]);if(s.length){let a=de();Be(s,a);let{x:o,y:c,z:l}=a.min,{x:h,y:u,z:d}=a.max,f=40/Math.max(h-o,u-c,d-l,1),x=26-((o+h)/2-(l+d)/2)*f*.5,y=28+(c+u)/2*f*.6-((o+h)/2+(l+d)/2)*f*.28,m=(v,_,S)=>[x+(v-S)*f*.5,y-_*f*.6+(v+S)*f*.28],p=(v,_)=>{r.fillStyle=v,r.beginPath(),r.moveTo(_[0][0],_[0][1]);for(let S=1;S<_.length;S++)r.lineTo(_[S][0],_[S][1]);r.closePath(),r.fill()};s.sort((v,_)=>v.x0+v.x1+v.y0+v.y1+v.z0+v.z1-(_.x0+_.x1+_.y0+_.y1+_.z0+_.z1));for(let v of s)p(Mp(v.c,.78),[m(v.x1,v.y0,v.z0),m(v.x1,v.y1,v.z0),m(v.x1,v.y1,v.z1),m(v.x1,v.y0,v.z1)]),p(Mp(v.c,.6),[m(v.x0,v.y0,v.z1),m(v.x1,v.y0,v.z1),m(v.x1,v.y1,v.z1),m(v.x0,v.y1,v.z1)]),p(Mp(v.c,1),[m(v.x0,v.y1,v.z0),m(v.x1,v.y1,v.z0),m(v.x1,v.y1,v.z1),m(v.x0,v.y1,v.z1)])}return Rh.set(n.id,{sig:e,cv:i}),i}var xs=null;function Sp(n){xs=n}function rR(n){if(n===g.root||zn(n)!==g.context||g.editObject)_i(n);else{let t=new Set(g.selection);g.selection.has(n.id)?g.selection.delete(n.id):g.selection.add(n.id),br(t),Xt()}xs=n.id}function sR(n){let t=g.context.children,e=xs?t.findIndex(o=>o.id===xs):-1,i=t.findIndex(o=>o.id===n.id);if(n===g.root||g.editObject||e<0||i<0){_i(n),xs=n.id;return}let r=new Set(g.selection),s=Math.min(e,i),a=Math.max(e,i);g.selection=new Set(t.slice(s,a+1).map(o=>o.id)),br(r),Xt()}function oR(n,t){if(t.shiftKey||t.ctrlKey||t.metaKey){Vn&&(clearTimeout(Vn.timer),Vn=null),t.shiftKey?sR(n):rR(n);return}if(Vn&&Vn.node===n){clearTimeout(Vn.timer),Vn=null,gs(n,!0);return}Vn&&clearTimeout(Vn.timer),n===g.root?gs(n):_i(n),xs=n===g.root?null:n.id,Vn={node:n,timer:setTimeout(()=>Vn=null,300)}}function Oo(n){Ih();let e=document.querySelector(`#tree .trow[data-id="${n.id}"]`)?.querySelector(".nm");if(!e)return;let i=oe("input",{className:"nminput",value:n.name});i.placeholder=n===g.root?"Project":n.type==="scene"?"group":"object";let r=!1,s=a=>{r||(r=!0,a&&(n.name=i.value.trim(),pe()),Xt())};i.addEventListener("keydown",a=>{a.stopPropagation(),a.key==="Enter"?s(!0):a.key==="Escape"&&s(!1)}),i.addEventListener("blur",()=>s(!0)),e.replaceWith(i),i.focus(),i.select()}function aR(n){let t=iR(n);if(t.className="thumb",t.onclick=null,t.title="",n!==g.root&&n.type==="scene"&&n.children.length){let e=g.collapsed.has(n.id);t.classList.add("group"),e&&t.classList.add("collapsed"),t.title=e?"Expand group":"Collapse group",t.onclick=i=>{i.stopPropagation(),e?g.collapsed.delete(n.id):g.collapsed.add(n.id),wp()}}return t}function cR(n,t){n.draggable=t!==g.root,t!==g.root&&n.addEventListener("dragstart",e=>{if(e.stopPropagation(),vi=t.id,e.dataTransfer){e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain",t.id)}catch{}}}),n.addEventListener("dragend",Do),n.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation(),lR(e,t,n)}),n.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation(),d_()})}function wp(){let n=document.getElementById("tree");n.innerHTML="";let t=(i,r)=>{let s=i===g.root,a=!s&&g.context.children.includes(i)&&g.selection.has(i.id),o=i.vis,c=oe("div",{className:"trow"+(s?" root":"")+(a?" sel":"")+(i===g.context&&!g.editObject?" ctx":"")+(i===g.editObject?" edit":"")+(!s&&o!=="visible"?" dim":"")});c.style.paddingLeft=4+r*13+"px",c.dataset.id=i.id;let l=aR(i),h=oe("span",{className:"nm"});if(s?h.textContent=i.name||"Project":i.name?h.textContent=i.name:h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>",h.onclick=u=>{!Vn&&!g.editObject&&!s&&g.selection.size===1&&g.selection.has(i.id)&&(u.stopPropagation(),Oo(i))},c.append(l,h),s||c.append(oe("button",{className:"tb"+(o==="visible"?" on":""),textContent:nR[o],title:"visible \u2192 deemphasized \u2192 hidden",onclick:u=>{u.stopPropagation(),f_(i)}})),c.onclick=u=>oR(i,u),c.oncontextmenu=u=>{u.preventDefault(),u.stopPropagation();let d=!s&&!g.editObject&&zn(i)===g.context&&g.selection.has(i.id);!s&&!d&&_i(i),h_(i,u.clientX,u.clientY)},cR(c,i),n.appendChild(c),i.type==="scene"&&(s||!g.collapsed.has(i.id)))for(let u of i.children)t(u,r+1)};t(g.root,0);let e=new Set;(function i(r){e.add(r.id),r.type==="scene"&&r.children.forEach(i)})(g.root);for(let i of Rh.keys())e.has(i)||Rh.delete(i)}function Ih(){Uo&&(Uo.remove(),Uo=null,window.removeEventListener("pointerdown",l_,!0))}function l_(n){Uo&&!Uo.contains(n.target)&&Ih()}function h_(n,t,e){Ih();let i=oe("div",{className:"ctxmenu"}),r=(c,l,h)=>i.appendChild(oe("div",{className:"ctxitem"+(h?" "+h:""),textContent:c,onclick:()=>{Ih(),l()}})),s=()=>i.appendChild(oe("div",{className:"ctxdiv"})),a=n!==g.root&&zn(n)===g.context&&g.selection.size>1&&g.selection.has(n.id);a||(r("Rename",()=>Oo(n)),r("Locate",()=>El(n)),s()),n!==g.root&&(r("Copy",()=>rc()),r("Duplicate",()=>a?Lh():x_(n)),r("Delete objects",()=>a?ic():y_(n),"danger"),s()),a?r("Group",()=>g_(n)):n.type==="scene"?(n!==g.root&&r("Ungroup",()=>__(n)),so()&&r("Paste",()=>Ph(n)),r("New object",()=>v_(n)),r("New group",()=>b_(n))):r("New group",()=>m_(n)),document.body.appendChild(i),Uo=i;let o=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-o.width-4)+"px",i.style.top=Math.min(e,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",l_,!0),0)}function Do(){nc&&nc.classList.remove("drop-into","drop-before","drop-after"),nc=null,Ge=null}function u_(){let n=vi&&un(vi);return!n||g.editObject||zn(n)!==g.context||!g.selection.has(n.id)||g.selection.size<=1?null:g.context.children.filter(t=>g.selection.has(t.id))}function lR(n,t,e){let i=vi&&un(vi);if(!i||i===t){Do();return}let r=u_();if(r?r.some(u=>u===t||Yr(u,t)):Yr(i,t)){Do();return}if(Do(),nc=e,t===g.root){Ge={parent:g.root,index:g.root.children.length},e.classList.add("drop-into");return}let a=e.getBoundingClientRect(),o=n.clientY-a.top,c=a.height,l=zn(t),h=l?l.children.indexOf(t):0;o>c*.28&&o<c*.72&&(t.type==="scene"||!r)?(t.type==="scene"?Ge={parent:t,index:t.children.length}:Ge={wrap:t},e.classList.add("drop-into")):o<c*.5?(Ge={parent:l,index:h},e.classList.add("drop-before")):(Ge={parent:l,index:h+1},e.classList.add("drop-after"))}function d_(){let n=vi&&un(vi);if(n&&Ge){let t=Ge.parent?u_():null;if(t){let e=Ge.parent,i=Ge.index,r=!1;for(let s of t)No(s,e,i)&&(i=e.children.indexOf(s)+1,r=!0);if(r){g.collapsed.delete(e.id);let s=En(e);s&&(g.path=s),g.editObject=null,g.selection=new Set(t.map(a=>a.id)),fe(),Xt(),pe()}}else Ge.wrap?p_(Ge.wrap,n):Ge.parent&&No(n,Ge.parent,Ge.index)&&(g.collapsed.delete(Ge.parent.id),_i(n),pe())}Do(),vi=null}{let n=document.getElementById("tree");n.addEventListener("dragover",t=>{if(t.target===n&&vi){t.preventDefault(),Do(),Ge={parent:g.root,index:g.root.children.length};let e=[...n.querySelectorAll(".trow")].filter(r=>r.dataset.id!==vi),i=e[e.length-1];i&&(i.classList.add("drop-after"),nc=i)}}),n.addEventListener("drop",t=>{t.target===n&&(t.preventDefault(),d_())})}document.getElementById("side").addEventListener("click",n=>{if(n.target.closest(".trow, button, input")||!g.selection.size)return;let t=new Set(g.selection);g.selection.clear(),xs=null,br(t),Xt()});document.getElementById("side").addEventListener("contextmenu",n=>{n.target.closest(".trow, button, input")||(n.preventDefault(),h_(g.root,n.clientX,n.clientY))});var bi=()=>{fe(),Xt(),pe()};function f_(n){n.vis=hx[n.vis],bi()}var Ep=()=>[...g.selection].map(n=>ki(n)).filter(n=>!!n),M_=(n,t)=>{let e=$r();e.pos={x:Math.round(jt.target.x),y:0,z:Math.round(jt.target.z)},n.children.push(e),g.collapsed.delete(n.id),gs(e,t),pe(),Oo(e)};function S_(){M_(g.context,!0)}function ic(){g.selection.size&&(g.context.children=g.context.children.filter(n=>!g.selection.has(n.id)),g.selection.clear(),bi())}function Lh(){let n=Ep().map(mr);n.length&&(g.context.children.push(...n),g.selection=new Set(n.map(t=>t.id)),bi())}function rc(){let n=Ep().map(mr);n.length&&kx(n)}function w_(){rc(),ic()}function Ph(n=g.context){if(so()==="vox"){hR(n);return}let t=Tl().map(mr);t.length&&(n.children.push(...t),E_(n),g.selection=new Set(t.map(e=>e.id)),bi())}function hR(n){let t=Al();if(!t.length)return;let e=$r();e.boxes=t.map(s=>({...s}));let i=ci(n),r=ee({x:jt.target.x-i.off.x,y:0,z:jt.target.z-i.off.z},-i.rot);e.pos={x:Math.round(r.x),y:0,z:Math.round(r.z)},n.children.push(e),E_(n),g.selection=new Set([e.id]),bi()}function E_(n){g.collapsed.delete(n.id),n!==g.context&&(g.path=En(n)??g.path,g.editObject=null)}function No(n,t,e){if(n===t||Yr(n,t))return!1;let i=zn(n);if(!i)return!1;let r=Qn(ci(i),{off:{...n.pos},rot:n.rot}),s=Qn(_d(ci(t)),r),a=i.children.indexOf(n);return i.children.splice(a,1),i===t&&a<e&&e--,n.pos={x:Math.round(s.off.x),y:Math.round(s.off.y),z:Math.round(s.off.z)},n.rot=s.rot&3,t.children.splice(Math.max(0,Math.min(e,t.children.length)),0,n),!0}function T_(n){let t=zn(n);if(!t)return null;let e=t.children.indexOf(n),i=Fi("Group");return i.pos={...n.pos},i.rot=n.rot,t.children.splice(e,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function p_(n,t){if(t===n||Yr(t,n))return!1;let e=T_(n);return e?(No(t,e,e.children.length),g.collapsed.delete(e.id),g.selection=new Set([e.id]),bi(),!0):!1}function m_(n){let t=T_(n);t&&(g.collapsed.delete(t.id),_i(t),pe(),Oo(t))}function g_(n){let t=Ep();if(t.length<2)return;let e=Fi("Group");e.pos={...n.pos},e.rot=n.rot;let i=g.context.children.indexOf(n);g.context.children.splice(Math.max(0,i),0,e);for(let r of t)No(r,e,e.children.length);g.collapsed.delete(e.id),g.selection=new Set([e.id]),bi()}function x_(n){let t=zn(n);if(!t)return;let e=mr(n);t.children.splice(t.children.indexOf(n)+1,0,e),_i(e),pe()}function y_(n){let t=zn(n);t&&(t.children=t.children.filter(e=>e!==n),g.selection.delete(n.id),g.editObject===n&&(g.editObject=null),bi())}function __(n){let t=zn(n);if(!t)return;let e=[...n.children],i=t.children.indexOf(n);for(let r of e)No(r,t,i),i=t.children.indexOf(r)+1;t.children=t.children.filter(r=>r!==n),g.selection=new Set(e.map(r=>r.id)),bi()}function v_(n){M_(n,!1)}function b_(n){let t=Fi("Group");n.children.push(t),g.collapsed.delete(n.id),_i(t),pe(),Oo(t)}function Tp(n){let t=[...g.selection];if(!t.length)return;let e=n<0?3:1,i=to(),r=_d(i),s=a=>Tn(a,ai(i.off,ee(a.pos,i.rot)),i.rot+a.rot&3,de());for(let a=0;a<Math.abs(n);a++){let o=de();for(let d of t){let f=s(ki(d));f.min.x<o.min.x&&(o.min.x=f.min.x),f.min.z<o.min.z&&(o.min.z=f.min.z),f.max.x>o.max.x&&(o.max.x=f.max.x),f.max.z>o.max.z&&(o.max.z=f.max.z)}let c=(o.min.x+o.max.x)/2,l=(o.min.z+o.max.z)/2,h=ee({x:c,y:0,z:l},e),u={rot:e,off:{x:c-h.x,y:0,z:l-h.z}};for(let d of t){let f=ki(d);if(!f)continue;let x=Qn(i,{off:f.pos,rot:f.rot}),y=Qn(r,Qn(u,x));f.pos={x:fr(y.off.x),y:fr(y.off.y),z:fr(y.off.z)},f.rot=y.rot&3}}fe()}function A_(){g.selection.size&&(Tp(1),Xt(),pe())}function Ap(n){for(let t of g.selection){let e=ki(t);e&&(e.pos.y+=n)}g.selection.size&&bi()}var Zt=n=>Math.floor(n/10),ge=xl,zo=(n,t)=>{let e=$r();return e.name=n,e.boxes=t,e},Cp=(n,t,e,i,r,s)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s});function Rp(){let n=Zt(4465),t=Zt(2985),e=Zt(2700),i=Zt(150),r=zo("Floor",[ue(0,0,0,n,1,t,ge[9])]),s=Zt(800),a=Zt(2100),o=n-Zt(515)-s,c=n-Zt(900)-s,l=[ue(0,1,0,n,e+1,i,ge[5]),ue(0,1,t-i,n,e+1,t,ge[5]),ue(0,1,i,i,e+1,t-i,ge[5]),ue(n-i,1,i,n,e+1,t-i,ge[5])];l=Xr(l,Cp(o,1,0,o+s,a+1,i)),l=Xr(l,Cp(c,1,t-i,c+s,a+1,t)),l=Xr(l,Cp(0,Zt(900),Zt(600),i,Zt(2100),t-Zt(600)));let h=zo("Walls",l);h.vis="deemphasized";let u=Zt(1500),d=Zt(2e3),f=zo("Bed",[ue(0,0,0,8,14,8,ge[7]),ue(u-8,0,0,u,14,8,ge[7]),ue(0,0,d-8,8,14,d,ge[7]),ue(u-8,0,d-8,u,14,d,ge[7]),ue(0,14,0,u,20,d,ge[6]),ue(2,20,0,u-2,24,d-Zt(400),ge[10])]);f.pos={x:i+3,y:1,z:t-i-d};let x=Zt(1400),y=Zt(700),m=Zt(740),p=zo("Desk",[ue(0,m-4,0,x,m,y,ge[8]),ue(0,0,0,6,m-4,6,ge[7]),ue(x-6,0,0,x,m-4,6,ge[7]),ue(0,0,y-6,6,m-4,y,ge[7]),ue(x-6,0,y-6,x,m-4,y,ge[7])]),v=Zt(600),_=v-30>>1,S=v>>1,A=zo("Computer",[ue(_,0,0,_+30,2,18,ge[11]),ue(S-2,2,7,S+2,Zt(160),11,ge[11]),ue(0,Zt(160),6,v,Zt(520),9,ge[13])]);A.pos={x:Zt(400),y:m,z:Zt(420)};let C=Fi();C.name="Desk + Computer",C.pos={x:n-i,y:1,z:Zt(900)},C.rot=1,C.children=[p,A];let R=N=>zo(N,[ue(-10,0,-10,11,30,11,ge[4]),ue(-2,30,-2,3,54,3,ge[14]),ue(-16,54,-16,17,78,17,ge[14]),ue(-12,78,-12,13,92,13,ge[14])]),z=R("Plant"),M=R("Plant");z.pos={x:n-i-Zt(300),y:1,z:i+Zt(300)},M.pos={x:i+Zt(300),y:1,z:i+Zt(300)};let T=Fi();return T.children=[r,h,f,C,z,M],T}var Ip="voxelier-last",C_="doc",Lp=ip,uR=()=>{let n=new Uint8Array(8);return crypto.getRandomValues(n),[...n].map(t=>t.toString(36).padStart(2,"0")).join("")},R_=()=>new URLSearchParams(location.hash.replace(/^#/,""));function dR(){let n=R_().get(C_);return n&&/^[0-9a-z]{4,32}$/.test(n)?n:null}function Pp(n){let t=R_();t.set(C_,n),history.replaceState(null,"",`#${t.toString()}`)}var Up=n=>{try{localStorage.setItem(Ip,n)}catch{}},I_=()=>{try{return localStorage.getItem(Ip)}catch{return null}};async function Fo(n){let t=await cp(n);return t?(Up(n),Pp(n),t):null}async function fR(n){let t=await Fo(n);if(t)return t;let e=Rp();return hp(e),Up(n),Pp(n),e}async function ys(n){let t=uR();await cp(t);let e=n??Rp();return hp(e),Up(t),Pp(t),e}async function L_(n){if(await $y(n),I_()===n)try{localStorage.removeItem(Ip)}catch{}}var P_=()=>Wy();async function U_(n){let t=dR();if(t)return await fR(t);let e=I_();if(e){let i=await Fo(e);if(i)return i}try{let[i]=await ip();if(i){let r=await Fo(i.id);if(r)return r}}catch{}return await ys(n()??void 0)}function Dp(){return JSON.stringify({uid:pl(),root:Bn(g.root),collapsed:[...g.collapsed]})}function D_(){let n=Dp(),t=URL.createObjectURL(new Blob([n],{type:"application/json"})),e=g.root.name||"Project",i=o=>String(o).padStart(2,"0"),r=new Date,s=`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())} ${i(r.getHours())}h${i(r.getMinutes())}m${i(r.getSeconds())}s`,a=document.createElement("a");a.href=t,a.download=`${e} -- ${s}.voxelier.json`,a.click(),URL.revokeObjectURL(t)}async function Np(n){let t=dp(JSON.parse(n));if(!t)throw new Error("not a Voxelier scene file");g.root=await ys(t),g.collapsed=new Set,g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.tool==="measure"&&(g.tool="view"),hi(),fe(),Xt(),Fn(),ma(),Je()}function N_(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let t=n.files&&n.files[0];if(!t)return;let e=new FileReader;e.onload=async()=>{try{await Np(e.result)}catch(i){alert("Import failed: "+i.message)}},e.readAsText(t)},n.click()}var Oh={view:"\u{1F441}",add:"\uFF0B",erase:"\uFF0D",paint:"\u{1FAA3}",eyedropper:"\u{1F4A7}",select:"\u2B1A",measure:"\u{1F4CF}"},pR=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],O_=(n,t,e,i)=>oe("button",{className:"tool"+(e?" active":""),innerHTML:`<span class="ic">${n}</span>${t}`,onclick:i});function z_(n){g.tool!==n&&(Yi(),g.tool=n,g.eyedropReturn=null,ln.visible=!1,hi(),Xt())}function Xt(){let n=document.getElementById("tools");n.innerHTML="",!g.editObject&&g.tool!=="measure"&&(g.tool="view");let t=oe("div",{className:"toolgroup"}),e=g.editObject?pR:[{id:"view",label:"View"}];for(let i of e)t.appendChild(O_(Oh[i.id],i.label,g.tool===i.id,()=>z_(i.id)));if(t.appendChild(O_(Oh.measure,"Measure",g.tool==="measure",()=>z_("measure"))),g.editObject&&t.appendChild(SR()),n.append(t),Dh(),g.tool==="view"){let i=document.getElementById("toolcursor");i&&(i.style.display="none")}wp()}document.getElementById("btn-save").onclick=D_;document.getElementById("btn-load").onclick=N_;var mR=document.getElementById("btn-docs"),oc=document.getElementById("docslist"),gR=document.getElementById("docname");function Op(n){Th(n),g.collapsed=new Set,g.path=[n],g.editObject=null,g.sel3d=null,g.selection.clear(),g.tool==="measure"&&(g.tool="view"),hi(),fe(),Xt(),Fn(),Je()}function Dh(){gR.textContent=g.root&&g.root.name||"Project"}async function Nh(){let n=P_(),t=[];try{t=await Lp()}catch{}oc.innerHTML="";for(let e of t){let i=oe("div",{className:"docrow"+(e.id===n?" here":"")});i.append(oe("button",{className:"docopen",textContent:e.name||"Project",title:new Date(e.updated).toLocaleString(),onclick:async()=>{if(e.id===n)return;let r=await Fo(e.id);r&&Op(r),await Nh(),Dh()}})),i.append(oe("button",{className:"docdel",textContent:"\u2715",title:"Delete this document",onclick:async()=>{if(confirm(`Delete "${e.name||"Project"}"? This cannot be undone.`)){if(await L_(e.id),e.id===n){let[r]=await Lp().catch(()=>[]),s=r?await Fo(r.id)??await ys():await ys();Op(s),Dh()}await Nh()}}})),oc.append(i)}oc.append(oe("button",{className:"docnew",textContent:"\uFF0B New document",onclick:async()=>{Op(await ys()),Dh(),await Nh()}}))}mR.onclick=async()=>{let n=oc.hasAttribute("hidden");oc.hidden=!n,n&&await Nh()};var Uh={ver:-1,cols:[]};function xR(){if(Uh.ver===g.voxVer)return Uh.cols;let n=new Map;return function t(e){e.type==="object"?rx(e.boxes,n):e.children.forEach(t)}(g.root),Uh={ver:g.voxVer,cols:[...n.entries()].sort((t,e)=>e[1]-t[1]).map(t=>t[0])},Uh.cols}var zp=[];function zh(n){zp=[n,...zp.filter(t=>t!==n)].slice(0,6)}function Fp(n){g.selColor=n,Xt()}function yR(){let n=[];for(let t of[...zp,...xR(),...xl])if(n.includes(t)||n.push(t),n.length>=6)break;return n}var _R=n=>{let t=oe("div",{className:"sw"+(n===g.selColor?" active":""),title:zi(n),onclick:()=>Fp(n)});return t.style.background=zi(n),t};function vR(){g.tool!=="eyedropper"&&(g.eyedropReturn=g.tool,Yi(),g.tool="eyedropper",Xt())}function bR(n){let t=(n>>16&255)/255,e=(n>>8&255)/255,i=(n&255)/255,r=Math.max(t,e,i),s=Math.min(t,e,i),a=r-s,o=0;return a&&(r===t?o=(e-i)/a%6:r===e?o=(i-t)/a+2:o=(t-e)/a+4,o=(o*60+360)%360),[Math.round(o),Math.round((r?a/r:0)*100),Math.round(r*100)]}function sc(n,t,e){t/=100,e/=100;let i=e*t,r=i*(1-Math.abs(n/60%2-1)),s=e-i,[a,o,c]=n<60?[i,r,0]:n<120?[r,i,0]:n<180?[0,i,r]:n<240?[0,r,i]:n<300?[r,0,i]:[i,0,r],l=h=>Math.round((h+s)*255);return l(a)<<16|l(o)<<8|l(c)}var MR=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function SR(){let n=oe("div",{className:"colorctl"}),t=oe("div",{className:"colorbtn",title:"Draw colour \u2014 hover for recent colours / sliders"});t.style.background=zi(g.selColor);let e=oe("div",{className:"colorflyout"}),i=oe("div",{className:"sliders"}),r={},[s,a,o]=bR(g.selColor),c={h:s,s:a,v:o},l=()=>{r.s.style.background=`linear-gradient(to right,${zi(sc(c.h,0,c.v))},${zi(sc(c.h,100,c.v))})`,r.v.style.background=`linear-gradient(to right,${zi(sc(c.h,c.s,0))},${zi(sc(c.h,c.s,100))})`},h=()=>{c.h=+r.h.value,c.s=+r.s.value,c.v=+r.v.value,g.selColor=sc(c.h,c.s,c.v),t.style.background=zi(g.selColor),l()};for(let f of MR){let x=oe("div",{className:"sliderline"}),y=oe("input",{type:"range",className:"csl",title:f.title});y.min="0",y.max=String(f.max),y.value=String(c[f.key]),r[f.key]=y,y.addEventListener("input",h),x.append(oe("span",{className:"lbl",textContent:f.label,title:f.title}),y),i.appendChild(x)}r.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",l();let u=oe("div",{className:"sliderrow"});u.append(i,oe("div",{className:"sw more",textContent:"\u{1F4A7}",title:"Pick a colour from a voxel (eyedropper)",onclick:vR}));let d=oe("div",{className:"swrow"});for(let f of yR())d.appendChild(_R(f));return e.append(u,d),n.append(t,e),n}{let n=document.getElementById("app"),t=e=>{n.classList.toggle("side-hidden",e),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||g.drag||g.painting)return;let t=n.key.toLowerCase();if(n.ctrlKey||n.metaKey){if(t==="z"){n.preventDefault(),n.shiftKey?ga():Rl();return}if(t==="y"){n.preventDefault(),ga();return}if(g.editObject){t==="c"?(gp(),n.preventDefault()):t==="x"?(t_(),n.preventDefault()):t==="v"&&(wR(),n.preventDefault());return}let i={c:rc,x:w_,v:Ph,d:Lh}[t];i&&(i(),n.preventDefault());return}switch(t){case"f":Fn();break;case"escape":a_();break;case"n":g.editObject||S_();break;case"r":g.editObject||A_();break;case"[":g.editObject||Ap(-1);break;case"]":g.editObject||Ap(1);break;case"delete":case"backspace":n.preventDefault(),g.editObject?mp():ic();break}});function wR(){let n=[];if(so()==="node")for(let t of Tl())jr(t,t.pos,t.rot,n);else n.push(...Al());n.length&&(g.tool="select",e_(n),Xt())}var H_={x:0,y:0,z:0},kh=["x","y","z"],Vp=n=>`x${n.min.x}..${n.max.x} y${n.min.y}..${n.max.y} z${n.min.z}..${n.max.z}`,Bh=n=>`(${n.max.x-n.min.x}x${n.max.y-n.min.y}x${n.max.z-n.min.z})`,G_=n=>n==="visible"?"":` [${n}]`,Bp=(n,t)=>{n.min.x=Math.min(n.min.x,t.min.x),n.min.y=Math.min(n.min.y,t.min.y),n.min.z=Math.min(n.min.z,t.min.z),n.max.x=Math.max(n.max.x,t.max.x),n.max.y=Math.max(n.max.y,t.max.y),n.max.z=Math.max(n.max.z,t.max.z)};function cc(n){let t=n?un(n):g.root;if(!t)throw new Error(`unknown node id: ${n}`);let e=ci(t),i=Tn(t,e.off,e.rot,de());return Ve(i)?null:i}var F_=n=>{let t=ci(n);return jr(n,t.off,t.rot,[])};function ER(n,t,e=!1){let i=`${n.id} ${n.type==="scene"?"S":"O"} "${n.name}"${G_(n.vis)}`;return e?`${i}${n.type==="scene"&&n.children.length?` (${n.children.length} children)`:""}`:!t||Ve(t)?`${i} [empty]`:`${i} ${Vp(t)} ${Bh(t)}${n.rot?` rot${n.rot*90}`:""}`}function W_(n,{depth:t=2,hidden:e=!1}={}){let i=n?un(n):g.root;if(!i)throw new Error(`unknown node id: ${n}`);let r=[],s=(a,o)=>{let c=ci(a),l=Tn(a,c.off,c.rot,de()),h=a.vis==="hidden"&&!e;if(r.push("  ".repeat(o)+ER(a,l,h)),!(h||a.type==="object"||o>=t))for(let u of a.children)s(u,o+1)};return s(i,0),r.join(`
`)}var TR=n=>(En(n)??[]).every(t=>t.vis!=="hidden"),AR=()=>{let n=[],t=e=>{e.vis!=="hidden"&&(n.push(e),e.type==="scene"&&e.children.forEach(t))};return t(g.root),n},k_=n=>/wall/i.test(n.name);function CR(n){if(n!==void 0)return(typeof n=="string"?[n]:n).map(i=>{let r=un(i);if(!r)throw new Error(`unknown node id: ${i}`);return r}).filter(TR);let t=[];for(let e of g.root.children)if(e.vis!=="hidden")if(e.type==="scene"&&e.name==="Immutable")for(let i of e.children)i.vis!=="hidden"&&t.push(i);else t.push(e);return t}var Bo=(n,t,e,i)=>t<=e?e-t:i<=n?n-i:0;function RR(n,t,e){let i=-1,r=[1/0,1/0,1/0];for(let a of n)for(let o of t){let c=[a.x0<o.x1&&o.x0<a.x1,a.y0<o.y1&&o.y0<a.y1,a.z0<o.z1&&o.z0<a.z1];if(c[0]&&c[1]&&c[2])return null;let l=[Bo(a.x0,a.x1,o.x0,o.x1),Bo(a.y0,a.y1,o.y0,o.y1),Bo(a.z0,a.z1,o.z0,o.z1)];for(let h=0;h<3;h++)!c[(h+1)%3]||!c[(h+2)%3]||(l[h]===0?i=h:l[h]<=e&&(r[h]=Math.min(r[h],l[h])))}if(i>=0)return{kind:"touch",axis:i,gap:0};let s=-1;for(let a=0;a<3;a++)r[a]<1/0&&(s<0||r[a]<r[s])&&(s=a);return s<0?null:{kind:"gap",axis:s,gap:r[s]}}function IR(n,t,e,i,r){let s=[n.min.x<t.max.x&&t.min.x<n.max.x,n.min.y<t.max.y&&t.min.y<n.max.y,n.min.z<t.max.z&&t.min.z<n.max.z];if(s[0]&&s[1]&&s[2])return RR(i,r,e);let a=[Bo(n.min.x,n.max.x,t.min.x,t.max.x),Bo(n.min.y,n.max.y,t.min.y,t.max.y),Bo(n.min.z,n.max.z,t.min.z,t.max.z)],o=null;for(let c=0;c<3;c++)if(!(!s[(c+1)%3]||!s[(c+2)%3])){if(a[c]===0)return{kind:"touch",axis:c,gap:0};a[c]<=e&&(!o||a[c]<o.gap)&&(o={kind:"gap",axis:c,gap:a[c]})}return o}function LR(n,t){let e=0;for(let i of n)for(let r of t){let s=Math.max(i.x0,r.x0),a=Math.max(i.y0,r.y0),o=Math.max(i.z0,r.z0),c=Math.min(i.x1,r.x1),l=Math.min(i.y1,r.y1),h=Math.min(i.z1,r.z1);s<c&&a<l&&o<h&&(e+=(c-s)*(l-a)*(h-o))}return e}function PR(n,t){let e=1/0;for(let i of n)for(let r of t){let s=Math.max(i.x0-r.x1,r.x0-i.x1,0),a=Math.max(i.y0-r.y1,r.y0-i.y1,0),o=Math.max(i.z0-r.z1,r.z0-i.z1,0),c=Math.hypot(s,a,o);c<e&&(e=c)}return e}var ac=n=>`${n.id} "${n.name}"`;function X_(n,{within:t=60}={}){let i=CR(n).map(a=>({n:a,boxes:F_(a)})),r=[];for(let a=0;a<i.length;a++)for(let o=a+1;o<i.length;o++){let c=i[a],l=i[o];if(!c.boxes.length||!l.boxes.length)continue;if(qr(c.boxes,l.boxes,0,0,0)){r.push(`${ac(c.n)} ~ ${ac(l.n)}: overlap ${LR(c.boxes,l.boxes)} cm\xB3`);continue}let h=cc(c.n.id),u=cc(l.n.id),d=IR(h,u,t,c.boxes,l.boxes);d&&r.push(`${ac(c.n)} | ${ac(l.n)}: ${kh[d.axis]} ${d.kind} ${d.gap}`.replace(/ (touch|gap) 0$/," $1"))}let s=AR().filter(k_).flatMap(F_);for(let{n:a,boxes:o}of i){if(k_(a)||!s.length)continue;let c=PR(o,s);Number.isFinite(c)&&r.push(`${ac(a)} wall gap ${Math.round(c)}`)}return r.join(`
`)}var UR=n=>({x0:n[0],y0:n[1],z0:n[2],x1:n[3],y1:n[4],z1:n[5],c:n[6]});function B_(n){let t=new Map,e=(i,r,s)=>{let a=Qn({off:r,rot:s},{off:i.p,rot:i.r}),o=de();if(i.t==="o")for(let c of i.b)Be([On(UR(c),a.rot,a.off)],o);else for(let c of i.c){let l=e(c,a.off,a.rot);Ve(l)||Bp(o,l)}return t.set(i.id,{node:i,box:o}),o};return e(n,H_,0),t}var kp=n=>{let t=JSON.parse(n);return t&&t.root?t.root:t};function V_(n,t){let e=`${n.id} ${n.t==="s"?"S":"O"} "${n.nm}"${G_(n.vs)}`;return Ve(t)?`${e} [empty]`:`${e} ${Vp(t)} ${Bh(t)}${n.r?` rot${n.r*90}`:""}`}var q_="";function Hp(n){q_=n}function Gp(n){let t=n??q_;if(!t)return"";let e=B_(kp(t)),i=B_(Bn(g.root)),r=[],s=o=>{let c=i.get(o.id),l=e.get(o.id);if(!l){r.push(`+ ${V_(o,c.box)}`);return}let h=[],u={x:o.p.x-l.node.p.x,y:o.p.y-l.node.p.y,z:o.p.z-l.node.p.z};if(u.x||u.y||u.z){let d=[u.x,u.y,u.z].map((f,x)=>f?`\u0394${kh[x]}${f>0?"+":""}${f}`:"").filter(Boolean).join(" ");h.push(`moved ${d} (now ${Vp(c.box)})`)}if(o.r!==l.node.r&&h.push(`rotated to ${o.r*90}\xB0`),o.vs!==l.node.vs&&h.push(`${l.node.vs}\u2192${o.vs}`),o.t==="o"&&l.node.t==="o"&&JSON.stringify(o.b)!==JSON.stringify(l.node.b)&&h.push(`resized ${Bh(l.box)} \u2192 ${Bh(c.box)}`),h.length&&r.push(`~ ${o.id} "${o.nm}" ${h.join("; ")}`),o.t==="s")for(let d of o.c)s(d)};s(kp(JSON.stringify(Bn(g.root))));let a=o=>{if(!i.has(o.id)){r.push(`- ${V_(o,e.get(o.id).box)}`);return}if(o.t==="s")for(let c of o.c)a(c)};return a(kp(t)),r.join(`
`)}var DR=new Set(["top","front","back","left","right","iso"]),NR={top:[0,2],front:[0,1],back:[0,1],left:[2,1],right:[2,1]};function OR(n,t){let e=new P((t.min.x+t.max.x)/2,(t.min.y+t.max.y)/2,(t.min.z+t.max.z)/2),i=Math.max(1,t.max.x-t.min.x),r=Math.max(1,t.max.y-t.min.y),s=Math.max(1,t.max.z-t.min.z),a=Math.hypot(i,r,s);if(n==="iso"){let p=.5*a,v=p/Math.sin(hl.degToRad(35/2))*1.08,_=Math.atan(1/Math.SQRT2),S=Dt.azim,A=new P(Math.cos(_)*Math.sin(S),Math.sin(_),Math.cos(_)*Math.cos(S)),C=new sn(35,1,Math.max(.1,v-p*2.5),v+p*2.5);return C.position.copy(e).addScaledVector(A,v),C.lookAt(e),C.updateMatrixWorld(),C.updateProjectionMatrix(),{camera:C,half:0}}let c=Math.max(...{top:[i,s],front:[i,r],back:[i,r],left:[s,r],right:[s,r]}[n])/2*1.12+2,l=a*2+100,h=new cr(-c,c,c,-c,.1,l+a*2),u={top:[0,1,0,[0,0,-1]],front:[0,0,1,[0,1,0]],back:[0,0,-1,[0,1,0]],left:[-1,0,0,[0,1,0]],right:[1,0,0,[0,1,0]]},[d,f,x,y]=u[n];return h.position.copy(e).add(new P(d,f,x).multiplyScalar(l)),h.up.set(y[0],y[1],y[2]),h.lookAt(e),h.updateMatrixWorld(),h.updateProjectionMatrix(),{camera:h,half:c}}var Fh=new Uint8Array(256);for(let n=0;n<256;n++){let t=n/255,e=t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055;Fh[n]=Math.round(Math.min(1,Math.max(0,e))*255)}function ko(n,t,e,i,r){let s=new P(e,i,r).project(n);return{x:(s.x*.5+.5)*t,y:(1-(s.y*.5+.5))*t}}function zR(n,t,e,i,r,s){let[a,o]=NR[e],c=new P((r.min.x+r.max.x)/2,(r.min.y+r.max.y)/2,(r.min.z+r.max.z)/2),l=c.getComponent(a)-s,h=c.getComponent(a)+s,u=c.getComponent(o)-s,d=c.getComponent(o)+s,f=(G,I)=>{let U=[0,0,0];return U[a]=G,U[o]=I,ko(t,i,U[0],U[1],U[2])};for(let G=Math.ceil(u/5)*5;G<=d;G+=5){let I=f(l,G),U=f(h,G);n.strokeStyle=G%10===0?"rgba(0,0,0,0.26)":"rgba(0,0,0,0.10)",n.lineWidth=G%10===0?1.2:.6,n.beginPath(),n.moveTo(I.x,I.y),n.lineTo(U.x,U.y),n.stroke()}for(let G=Math.ceil(l/5)*5;G<=h;G+=5){let I=f(G,u),U=f(G,d);n.strokeStyle=G%10===0?"rgba(0,0,0,0.26)":"rgba(0,0,0,0.10)",n.lineWidth=G%10===0?1.2:.6,n.beginPath(),n.moveTo(I.x,I.y),n.lineTo(U.x,U.y),n.stroke()}let x=[c.x,c.y,c.z],y=[...x];y[a]+=10;let m=ko(t,i,x[0],x[1],x[2]),p=ko(t,i,y[0],y[1],y[2]),v=Math.hypot(p.x-m.x,p.y-m.y)||1,_=10;for(let G of[5,10,20,50,100,200,500,1e3,2e3])if(_=G,v*G/10>=80)break;let S=v*_/10,A=18,C=i-22;n.strokeStyle="rgba(0,0,0,0.8)",n.lineWidth=2,n.beginPath(),n.moveTo(A,C-4),n.lineTo(A,C),n.lineTo(A+S,C),n.lineTo(A+S,C-4),n.stroke(),n.font="bold 12px ui-monospace, monospace",n.textAlign="left",n.textBaseline="bottom",n.strokeStyle="#fff",n.lineWidth=3;let R=_===100?"1 m":`${_} cm`;n.strokeText(R,A,C-7),n.fillStyle="#111",n.fillText(R,A,C-7);let z=ko(t,i,y[0],y[1],y[2]),M=`${kh[a]}${z.x>=m.x?" \u2192":" \u2190"}`;n.strokeStyle="#fff",n.lineWidth=3,n.textBaseline="top",n.strokeText(M,12,10),n.fillStyle="#111",n.fillText(M,12,10);let T=[...x];T[o]+=10;let N=ko(t,i,T[0],T[1],T[2]),W=`${kh[o]}${N.y<=m.y?" \u2191":" \u2193"}`;n.strokeText(W,12,26),n.fillText(W,12,26)}function FR(n,t,e,i){n.font="bold 11px ui-monospace, monospace",n.textAlign="center",n.textBaseline="middle",n.lineWidth=3,n.strokeStyle="rgba(255,255,255,0.92)",n.fillStyle="#111";for(let{id:r,box:s}of i){let a=ko(t,e,(s.min.x+s.max.x)/2,(s.min.y+s.max.y)/2,(s.min.z+s.max.z)/2);a.x<0||a.y<0||a.x>e||a.y>e||(n.strokeText(r,a.x,a.y),n.fillText(r,a.x,a.y))}}function $_(n,t={}){if(!DR.has(n))throw new Error(`unknown view "${n}": use top, front, back, left, right or iso`);let e=Math.max(64,Math.min(2048,Math.round(t.size??900))),i=t.focus===void 0?[]:typeof t.focus=="string"?[t.focus]:t.focus,r=de();if(i.length){for(let S of i){let A=cc(S);A&&Bp(r,A)}if(Ve(r))throw new Error(`focus has no geometry: ${i.join(",")}`)}else{let S=g.sceneBox;S&&!Ve(S)?r=S:(r=de(),Bp(r,{min:{x:-20,y:0,z:-20},max:{x:20,y:40,z:20}}))}let{camera:s,half:a}=OR(n,r),o=null;if(t.isolate&&i.length){o=new Set;for(let S of i){let A=un(S),C=En(A);if(!C||A===g.root||A===g.context){o=null;break}let R=C.indexOf(g.context),z=R>=0?C[R+1]:void 0;if(!z){o=null;break}o.add(z.id)}}let c=[];if(ui(g.root,H_,0,null,null,(S,A,C,R,z)=>{if(z||o&&(!R||!o.has(R)))return;let M=Tn(S,A,C,de());Ve(M)||c.push({id:S.id,box:M})}),g.editObject){let S=Tn(g.editObject,g.editXform.off,g.editXform.rot,de());!Ve(S)&&(!o||i.includes(g.editObject.id))&&c.push({id:g.editObject.id,box:S})}let l=be.getRenderTarget(),h=be.clippingPlanes,u=be.shadowMap.enabled,d=ce.background,f=[],x=S=>{S.visible&&(f.push([S,S.visible]),S.visible=!1)};x(ra),x(Ni),x(Kn),x(ln),x(Oi),ce.traverse(S=>{if((S.userData.cut||S.isLineSegments)&&x(S),o&&S.isMesh&&S.parent!==Nn){let A=S.userData.childId;(!A||!o.has(A))&&x(S)}});let y=new jn(e,e),m=new Uint8Array(e*e*4);try{ce.background=new Rt(16777215),be.shadowMap.enabled=!1;let S=t.cutY??(n==="top"?150:void 0);be.clippingPlanes=S===void 0?[]:[new De(new P(0,-1,0),S)],be.setRenderTarget(y),be.render(ce,s),be.readRenderTargetPixels(y,0,0,e,e,m)}finally{be.setRenderTarget(l),be.clippingPlanes=h,be.shadowMap.enabled=u,ce.background=d;for(let[S,A]of f)S.visible=A;y.dispose()}let p=document.createElement("canvas");p.width=p.height=e;let v=p.getContext("2d"),_=v.createImageData(e,e);for(let S=0;S<e;S++){let A=(e-1-S)*e*4;for(let C=0;C<e;C++){let R=A+C*4,z=(S*e+C)*4;_.data[z]=Fh[m[R]],_.data[z+1]=Fh[m[R+1]],_.data[z+2]=Fh[m[R+2]],_.data[z+3]=255}}return v.putImageData(_,0,0),n!=="iso"&&t.grid!==!1&&zR(v,s,n,e,r,a),t.labels!==!1&&FR(v,s,e,c),Promise.resolve(p.toDataURL("image/png"))}function kR(n){let t=new Set,e=i=>{if(!i.id)return"node without an id";if(t.has(i.id))return`duplicate node id ${i.id}`;if(t.add(i.id),i.type==="scene"){for(let s of i.children){let a=e(s);if(a)return a}return null}let r=`object ${i.id}${i.name?` "${i.name}"`:""}`;for(let s=0;s<i.boxes.length;s++){let a=i.boxes[s];if(![a.x0,a.y0,a.z0,a.x1,a.y1,a.z1].every(Number.isInteger))return`box ${s} of ${r} has a non-integer or non-finite coordinate`;if(a.x1<=a.x0||a.y1<=a.y0||a.z1<=a.z0)return`box ${s} of ${r} is empty or inverted`;for(let o=s+1;o<i.boxes.length;o++)if(qr([a],[i.boxes[o]],0,0,0))return`boxes ${s} and ${o} of ${r} overlap`}return null};return e(n)}function BR(n){g.root=Qr(JSON.parse(n)),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.drag=null,g.painting=!1,g.lastVox=null,hi(),fe(),Xt()}function VR(){let n=g.path.map(e=>e.id);g.path=[g.root];for(let e of n.slice(1)){let i=g.context.children.find(r=>r.id===e);if(!i||i.type!=="scene")break;g.path.push(i)}let t=g.editObject&&un(g.editObject.id);g.editObject=t&&t.type==="object"?t:null,g.selection=new Set([...g.selection].filter(e=>g.context.children.some(i=>i.id===e)))}function HR(n){Je();let t=JSON.stringify(Bn(g.root));try{n(g.root);let i=kR(g.root);if(i)throw new Error(`edit rejected: ${i}; restored the document`)}catch(i){throw BR(t),i}VR(),fe(),Xt(),Je();let e=Gp(t);return Hp(t),e}async function GR(n){await Np(n),Hp(JSON.stringify(Bn(g.root)))}var Y_={iso:[Math.PI/4,Math.atan(1/Math.SQRT2)],top:[Math.PI/4,Math.PI/2],front:[0,0],side:[Math.PI/2,0]};function WR(n){if(!Object.hasOwn(Y_,n))throw new Error(`unknown view "${n}": use iso, top, front or side`);let t=Y_[n];jt.azim=Dt.azim=t[0],jt.elev=Dt.elev=t[1],Dn()}var XR={coordinates:"Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",nodes:"S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique \u2014 mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",api:"S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON(), edit(fn) -> compact diff, undo(), redo(), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}), relations(ids?, {within=60}), render('top'|'front'|'back'|'left'|'right'|'iso', {focus, isolate, labels, grid, size=900, cutY}) -> Promise<PNG dataURL>, diff(before?), uid(), newObject(), newScene(name?), help.",edit:"edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step and persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows.",example:"await voxelier.load(json); const o = voxelier.findById('n56'); voxelier.edit(() => { o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56');"},qR={S:g,ser:Bn,de:Qr,uid:Qs,newObject:$r,newScene:Fi,findById:un,worldBounds:cc,load:GR,exportJSON:Dp,edit:HR,diff:Gp,outline:W_,relations:X_,render:$_,undo:Rl,redo:ga,frameView:Fn,fitNode:El,frameBox:wl,view:WR,help:XR};function j_(){Object.assign(window,{voxelier:qR})}var Vh=n=>Math.abs(n.clientX-g.drag.sx)+Math.abs(n.clientY-g.drag.sy)>3,ji=document.createElement("div");ji.id="toolcursor";ji.style.display="none";document.body.appendChild(ji);function $R(n){if(g.tool==="view"){ji.style.display="none";return}ji.textContent=Oh[g.tool],ji.style.left=n.clientX+"px",ji.style.top=n.clientY+"px",ji.style.display="block"}function YR(){g.tool!=="measure"||g.painting||g.drag&&g.drag.mode==="box"||vl()}function Wp(){let n=(Wt.top-Wt.bottom)/_e.h,t=Math.abs(Wt.matrixWorldInverse.elements[5]);return n/Math.max(t,.15)}function jR(n){let t=g.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let e=n.clientX-t.x,i=n.clientY-t.y;return t.x=n.clientX,t.y=n.clientY,(t.mode==="pan"?Ux:Dx)(e,i),!0}function JR(){let n=[],t=[];ui(g.root,{x:0,y:0,z:0},0,null,null,(r,s,a,o)=>{let c=o&&g.selection.has(o)?t:n;for(let l of r.boxes)c.push(On(l,a,s))});let e=1/0,i=-1/0;for(let r of t)r.y0<e&&(e=r.y0),r.y1>i&&(i=r.y1);return{occ:n,sel:t,minY:e,hgt:t.length?i-e:0}}var ZR=(n,t,e,i)=>{if(qr(n.sel??[],n.occ??[],t,e,i))return!0;let r=n.minY??1/0;return r+e<Math.min(0,r)};function KR(n){let t=g.drag,e=(i,r,s)=>n.altKey||!ZR(t,i,r,s);if(n.shiftKey){t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=t.dyUser??0);let i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*Wp());e(t.dx,i,t.dz)&&(t.dyUser=i,t.dy=i)}else{t.shiftAnchorY=null;let i=t.dx,r=t.dz,s=ua(0);s&&t.start&&(i=s.x-t.start.x,r=s.z-t.start.z);let a=t.dyUser??0,o=Math.floor(.1*(t.hgt??0)),c=!1;for(let l=0;l<=o;l++)if(e(i,a+l,r)){t.dx=i,t.dz=r,t.dy=a+l,c=!0;break}c||(e(i,a,t.dz)&&(t.dx=i),e(t.dx,a,r)&&(t.dz=r),t.dy=a)}for(let i of g.selection)for(let r of g.childMeshes[i]||[])r.position.set(t.dx,t.dy,t.dz),r.castShadow=!1;Kn.position.set(t.dx,t.dy,t.dz)}function QR(n){let t=g.drag,e=to(),i=ee({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-e.rot),r=Math.round(t.dy);if(n){let s=[];for(let a of g.selection){let o=ki(a);if(!o)continue;let c=mr(o);c.pos={x:o.pos.x+i.x,y:o.pos.y+r,z:o.pos.z+i.z},s.push(c)}g.context.children.push(...s),g.selection=new Set(s.map(a=>a.id))}else for(let s of g.selection){let a=ki(s);a&&(a.pos.x+=i.x,a.pos.y+=r,a.pos.z+=i.z)}Kn.position.set(0,0,0),fe(),Xt(),pe()}function t2(n){let t=g.drag,e=Math.round((t.sx-n.clientX)/70);e!==t.steps&&(Tp(e-t.steps),t.steps=e,t.dirty=!0)}function e2(){let n=Ix();n!=null&&(g.eyedropReturn!=null&&(g.tool=g.eyedropReturn,g.eyedropReturn=null),Fp(n))}function Z_(n){let t=Zr(),e=Cd(t);if(!e)return;let i=Wr(e.x,e.y,e.z);i!==g.lastVox&&(n?(kd({x0:e.x,y0:e.y,z0:e.z,x1:e.x+1,y1:e.y+1,z1:e.z+1},g.selColor),zh(g.selColor)):Rx(e,g.selColor)&&zh(g.selColor),g.lastVox=i),K_(t)}function K_(n=Zr()){let t=Cd(n);if(!t){ln.visible=!1;return}let e=Bi(t.x+.5,t.y+.5,t.z+.5);ln.visible=!0,ln.material.color.set(g.tool==="erase"?11895693:10994876),ln.position.copy(e)}var Xp=n=>n===0?[1,2]:n===1?[0,2]:[0,1];function Q_(n,t,e,i){let[r,s]=Xp(n.na),a=[0,0,0],o=[0,0,0],c=(l,h,u)=>{a[l]=Math.min(h,u),o[l]=Math.max(h,u)};return c(n.na,n.s[n.na],n.s[n.na]+i),c(r,n.s[r],t),c(s,n.s[s],e),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var qp=n=>{let[t,e]=Xp(n.na);return Q_(n,n.c[t],n.c[e],n.hy)};function J_(n){let t=Zr(),e,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,e=g.tool==="add"?t.addCell:t.cell;else{let r=Kr(0);if(!r)return;e=r,i=1}g.drag={...n,mode:"box",shiftAnchorY:null,box:{s:[e.x,e.y,e.z],c:[e.x,e.y,e.z],na:i,hy:0},occ:g.tool==="add"?g.editObject.boxes.slice():void 0},ln.visible=!1,tv()}function n2(n){let t=g.drag,e=t.box,[i,r]=Xp(e.na),s=g.tool==="add"&&!n.altKey,a=(o,c,l)=>!s||!qr([Q_(e,o,c,l)],t.occ??[],0,0,0);if(n.shiftKey){t.shiftAnchorY===null&&(t.shiftAnchorX=n.clientX,t.shiftAnchorY=n.clientY,t.hyBase=e.hy);let o=Bi(e.s[0],e.s[1],e.s[2]),c=e.s.slice();c[e.na]+=1;let l=Bi(c[0],c[1],c[2]),h=l.x-o.x,u=l.y-o.y,d=l.z-o.z,f=Wt.matrixWorld.elements,x=h*f[0]+u*f[1]+d*f[2],y=h*f[4]+u*f[5]+d*f[6],m=x*x+y*y,p=_e.h/(Wt.top-Wt.bottom),v=x*p,_=-y*p,S=n.clientX-t.shiftAnchorX,A=n.clientY-t.shiftAnchorY,C=t.hyBase+(m>.02?Math.round((S*v+A*_)/(v*v+_*_)):Math.round((t.shiftAnchorY-n.clientY)*Wp()));a(e.c[i],e.c[r],C)&&(e.hy=C)}else{t.shiftAnchorY=null;let o=_x(e.na,e.s[e.na]);if(o){let c=[o.x,o.y,o.z];a(c[i],e.c[r],e.hy)&&(e.c[i]=c[i]),a(e.c[i],c[r],e.hy)&&(e.c[r]=c[r])}}tv()}function i2(){let n=qp(g.drag.box);g.tool==="add"?(kd(n,g.selColor),zh(g.selColor)):fa(n),g.liveMeas=null,gr(),Xt(),pe()}function tv(){let n=qp(g.drag.box);g.liveMeas=Ld(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,Bi,2),gr()}function r2(n){let t=g.sel3d.region.y0;g.drag={...n,mode:"selmove",start:Kr(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function s2(n){g.drag={...n,mode:"selrot",steps:0}}function o2(n){let t=g.drag,e=t.dx,i=t.dy,r=t.dz;if(n.shiftKey)t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=i),i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*Wp());else{t.shiftAnchorY=null;let s=Kr(t.start.y);s&&(e=s.x-t.start.x,r=s.z-t.start.z)}(e!==t.dx||i!==t.dy||r!==t.dz)&&(g.sel3d.lifted||fp(),n_(e-t.dx,i-t.dy,r-t.dz),t.dx=e,t.dy=i,t.dz=r)}function a2(n){let t=g.drag,e=n.altKey;e!==!!t.fine&&(t.fine=e,g.sel3d.lifted&&(xp(),t.sx=n.clientX,t.steps=0,t.deg=0));let i=()=>{g.sel3d.lifted||(fp(),xp())};if(e){let r=Math.round((t.sx-n.clientX)/25)*15;if(r===(t.deg??0))return;i(),t.deg=r,s_(r,n.shiftKey)}else{let r=Math.round((t.sx-n.clientX)/70);if(r===t.steps)return;i(),t.steps=r,r_(r,n.shiftKey)}}function c2(n){g.liveMeas=null,gr(),n&&Qy(qp(g.drag.box)),Xt()}je.addEventListener("pointerdown",n=>{if(g.drag||g.painting)return;je.setPointerCapture(n.pointerId),yl(n.clientX,n.clientY);let t={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(n.button===1){g.drag={...t,mode:"pan"};return}if(g.editObject){n.button===0?g.tool==="view"||g.tool==="measure"?g.drag={...t,mode:"pan"}:g.tool==="select"?g.sel3d&&yp()?r2(t):(Yi(),J_(t)):g.tool==="add"||g.tool==="erase"?J_(t):g.tool==="eyedropper"?e2():(g.painting=!0,g.lastVox=null,Z_(n.shiftKey)):n.button===2&&(g.tool==="select"&&g.sel3d&&yp()?s2(t):g.drag={...t,mode:"orbit"});return}let e=Ad(),i=e&&g.selection.has(e);n.button===0?g.tool==="measure"?g.drag={...t,mode:"pan"}:i?g.drag={...t,mode:"move",start:ua(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...JR()}:g.drag={...t,mode:"pan",clickId:e}:n.button===2&&(i&&g.tool!=="measure"?g.drag={...t,mode:"rotobj",steps:0}:g.drag={...t,mode:"orbit"})});je.addEventListener("pointermove",n=>{yl(n.clientX,n.clientY),g.editObject&&g.painting?Z_(n.shiftKey):g.drag?jR(n)||(g.drag.mode==="move"?KR(n):g.drag.mode==="rotobj"?t2(n):g.drag.mode==="box"?n2(n):g.drag.mode==="selmove"?o2(n):g.drag.mode==="selrot"&&a2(n)):g.editObject&&g.tool!=="select"&&g.tool!=="view"&&g.tool!=="measure"?K_():ln.visible=!1,YR(),$R(n)});je.addEventListener("pointerup",n=>{try{je.releasePointerCapture(n.pointerId)}catch{}if(g.tool==="measure"&&g.drag&&!Vh(n)){if(n.button===0){bx(),g.drag=null;return}if(n.button===2){Mx(),g.drag=null;return}}if(g.editObject){g.painting?(g.painting=!1,Xt(),pe()):g.drag&&g.drag.mode==="box"?g.tool==="select"?c2(Vh(n)):i2():g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot")&&pp(),g.drag=null;return}if(g.drag)if(g.drag.mode==="pan"&&!Vh(n)&&n.button===0){let t=g.drag.clickId,e=n.shiftKey||n.ctrlKey||n.metaKey,i=new Set(g.selection);t?(e?g.selection.has(t)?g.selection.delete(t):g.selection.add(t):g.selection=new Set([t]),Sp(t)):e||(g.selection.clear(),Sp(null)),br(i),Xt()}else g.drag.mode==="move"?QR(Vh(n)&&(n.ctrlKey||n.metaKey)):g.drag.mode==="rotobj"&&g.drag.dirty&&(Xt(),pe());g.drag=null});je.addEventListener("pointercancel",()=>{if(!g.drag&&!g.painting)return;let n=g.painting;g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot")&&pp(),g.drag=null,g.painting=!1,g.liveMeas=null,gr(),fe(),n&&(Xt(),pe())});je.addEventListener("pointerleave",()=>{ln.visible=!1,ji.style.display="none",g.tool==="measure"&&!g.drag&&!g.painting&&g.liveMeas&&(g.liveMeas=null,gr())});je.addEventListener("contextmenu",n=>n.preventDefault());je.addEventListener("wheel",n=>{n.preventDefault(),jt.zoom*=n.deltaY>0?1/.95:.95,jt.zoom=Math.max(6,Math.min(dl,jt.zoom))},{passive:!1});je.addEventListener("dblclick",n=>{if(g.editObject)return;yl(n.clientX,n.clientY);let t=Ad();t&&gs(ki(t),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,Dn,{passive:!0,capture:!0});var l2=()=>Math.abs(jt.azim-Dt.azim)<.001&&Math.abs(jt.elev-Dt.elev)<.001&&Math.abs(jt.zoom-Dt.zoom)<.001&&Dt.target.distanceToSquared(jt.target)<1e-6;function ev(){let n=je.getBoundingClientRect();_e.w=n.width,_e.h=n.height,_e.x=n.left,_e.y=n.top}function nv(){let n=Math.max(1,Math.round(_e.w)),t=Math.max(1,Math.round(_e.h)),e=Math.min(devicePixelRatio,2);be.getPixelRatio()!==e&&be.setPixelRatio(e),(je.width!==Math.floor(n*e)||je.height!==Math.floor(t*e))&&(be.setSize(n,t,!1),Dn())}window.addEventListener("resize",()=>{ev(),nv()});var $p=!1;function h2(){$p=!0,g.drag?Dn():iv()}function iv(){$p=!1;let n=Ro(Gy());n&&(Th(n),fe(),Xt(),Je(),Dn())}function rv(){requestAnimationFrame(rv),$p&&!g.drag&&iv(),nv(),Nx(),(sa.tail>0||!l2())&&(Ax(),be.render(ce,Wt),Sx(),sa.tail>0&&sa.tail--)}async function u2(){Xy(h2),g.root=await U_(Jy),g.collapsed=new Set(jy()),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),fe(),Xt(),Fn(),Je(),j_(),ev(),rv()}u2();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
