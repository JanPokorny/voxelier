var g={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var Qu="160";var G_=0,Hp=1,W_=2;var yg=1,td=2,bi=3,ln=0,We=1,zn=2;var Ki=0,Ns=1,Gp=2,Wp=3,Xp=4,X_=5,Lr=100,q_=101,Y_=102,qp=103,Yp=104,$_=200,j_=201,J_=202,Z_=203,gu=204,xu=205,K_=206,Q_=207,tv=208,ev=209,nv=210,iv=211,rv=212,sv=213,ov=214,av=0,cv=1,lv=2,Dc=3,hv=4,uv=5,dv=6,fv=7,ed=0,pv=1,mv=2,Qi=0,gv=1,xv=2,yv=3,_v=4,vv=5,bv=6;var _g=300,Bs=301,ks=302,yu=303,_u=304,rl=306,vu=1e3,Fn=1001,bu=1002,Qe=1003,$p=1004;var Fh=1005;var An=1006,Mv=1007;var Xo=1008;var tr=1009,Sv=1010,wv=1011,nd=1012,vg=1013,Ji=1014,Zi=1015,qo=1016,bg=1017,Mg=1018,Dr=1020,Ev=1021,Bn=1023,Tv=1024,Av=1025,Nr=1026,Vs=1027,Cv=1028,Sg=1029,Rv=1030,wg=1031,Eg=1033,Bh=33776,kh=33777,Vh=33778,Hh=33779,jp=35840,Jp=35841,Zp=35842,Kp=35843,Tg=36196,Qp=37492,tm=37496,em=37808,nm=37809,im=37810,rm=37811,sm=37812,om=37813,am=37814,cm=37815,lm=37816,hm=37817,um=37818,dm=37819,fm=37820,pm=37821,Gh=36492,mm=36494,gm=36495,Iv=36283,xm=36284,ym=36285,_m=36286;var Nc=2300,Oc=2301,Wh=2302,vm=2400,bm=2401,Mm=2402;var Ag=3e3,Or=3001,Lv=3200,Pv=3201,Cg=0,Uv=1,Cn="",ze="srgb",wi="srgb-linear",id="display-p3",sl="display-p3-linear",zc="linear",ae="srgb",Fc="rec709",Bc="p3";var gs=7680;var Sm=519,Dv=512,Nv=513,Ov=514,Rg=515,zv=516,Fv=517,Bv=518,kv=519,wm=35044;var Em="300 es",Mu=1035,Mi=2e3,kc=2001,er=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tm=1234567,Os=Math.PI/180,Yo=180/Math.PI;function $s(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function rd(n,t){return(n%t+t)%t}function Vv(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Hv(n,t,e){return n!==t?(e-n)/(t-n):0}function Ho(n,t,e){return(1-e)*n+e*t}function Gv(n,t,e,i){return Ho(n,t,1-Math.exp(-e*i))}function Wv(n,t=1){return t-Math.abs(rd(n,t*2)-t)}function Xv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function qv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Yv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $v(n,t){return n+Math.random()*(t-n)}function jv(n){return n*(.5-Math.random())}function Jv(n){n!==void 0&&(Tm=n);let t=Tm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zv(n){return n*Os}function Kv(n){return n*Yo}function Su(n){return(n&n-1)===0&&n!==0}function Qv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tb(n,t,e,i,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),x=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*x,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*x,o*l);break;case"ZYZ":n.set(c*x,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ig={DEG2RAD:Os,RAD2DEG:Yo,generateUUID:$s,clamp:tn,euclideanModulo:rd,mapLinear:Vv,inverseLerp:Hv,lerp:Ho,damp:Gv,pingpong:Wv,smoothstep:Xv,smootherstep:qv,randInt:Yv,randFloat:$v,randFloatSpread:jv,seededRandom:Jv,degToRad:Zv,radToDeg:Kv,isPowerOfTwo:Su,ceilPowerOfTwo:Qv,floorPowerOfTwo:Vc,setQuaternionFromProperEuler:tb,normalize:Ze,denormalize:Ps},$t=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class n{constructor(t,e,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],x=i[8],y=r[0],m=r[3],p=r[6],v=r[1],_=r[4],T=r[7],R=r[2],I=r[5],C=r[8];return s[0]=a*y+o*v+c*R,s[3]=a*m+o*_+c*I,s[6]=a*p+o*T+c*C,s[1]=l*y+h*v+u*R,s[4]=l*m+h*_+u*I,s[7]=l*p+h*T+u*C,s[2]=d*y+f*v+x*R,s[5]=d*m+f*_+x*I,s[8]=d*p+f*T+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,x=e*u+i*d+r*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(r*l-h*i)*y,t[2]=(o*i-r*a)*y,t[3]=d*y,t[4]=(h*e-r*c)*y,t[5]=(r*s-o*e)*y,t[6]=f*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xh.makeScale(t,e)),this}rotate(t){return this.premultiply(Xh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xh=new Ht;function Lg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eb(){let n=Hc("canvas");return n.style.display="block",n}var Am={};function Go(n){n in Am||(Am[n]=!0,console.warn(n))}var Cm=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ac={[wi]:{transfer:zc,primaries:Fc,toReference:n=>n,fromReference:n=>n},[ze]:{transfer:ae,primaries:Fc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sl]:{transfer:zc,primaries:Bc,toReference:n=>n.applyMatrix3(Rm),fromReference:n=>n.applyMatrix3(Cm)},[id]:{transfer:ae,primaries:Bc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rm),fromReference:n=>n.applyMatrix3(Cm).convertLinearToSRGB()}},nb=new Set([wi,sl]),Qt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=ac[t].toReference,r=ac[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ac[n].primaries},getTransfer:function(n){return n===Cn?zc:ac[n].transfer}};function zs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xs,Gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Hc("canvas")),xs.width=t.width,xs.height=t.height;let i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zs(e[i]/255)*255):e[i]=zs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ib=0,Wc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=$s(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yh(r[a].image)):s.push(Yh(r[a]))}else s=Yh(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function Yh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rb=0,kn=class n extends er{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Fn,r=Fn,s=An,a=Xo,o=Bn,c=tr,l=n.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=$s(),this.name="",this.source=new Wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Or?ze:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_g)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vu:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case bu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vu:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case bu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Or:Ag}set encoding(t){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Or?ze:Cn}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=_g;kn.DEFAULT_ANISOTROPY=1;var Pe=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],x=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,T=(f+1)/2,R=(p+1)/2,I=(h+d)/4,C=(u+y)/4,V=(x+m)/4;return _>T&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=I/i,s=C/i):T>R?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=I/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=V/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wu=class extends er{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let r={width:t,height:e,depth:1};i.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Or?ze:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends wu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Xc=class extends kn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Eu=class extends kn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],f=s[a+1],x=s[a+2],y=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==d||l!==f||h!==x){let m=1-o,p=c*d+l*f+h*x+u*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),I=Math.atan2(R,p*v);m=Math.sin(m*I)/R,o=Math.sin(o*I)/R}let T=o*v;if(c=c*m+d*T,l=l*m+f*T,h=h*m+x*T,u=u*m+y*T,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],x=s[a+3];return t[e]=o*x+h*u+c*f-l*d,t[e+1]=c*x+h*d+l*u-o*f,t[e+2]=l*x+h*f+o*d-c*u,t[e+3]=h*x-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),d=c(i/2),f=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"YZX":this._x=d*h*u+l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u-d*f*x;break;case"XZY":this._x=d*h*u-l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Im.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Im.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $h.copy(this).projectOnVector(t),this.sub($h)}reflect(t){return this.sub($h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$h=new P,Im=new nr,Ti=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cc.copy(i.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),lc.subVectors(this.max,Fo),ys.subVectors(t.a,Fo),_s.subVectors(t.b,Fo),vs.subVectors(t.c,Fo),Xi.subVectors(_s,ys),qi.subVectors(vs,_s),Tr.subVectors(ys,vs);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-Tr.z,Tr.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,Tr.z,0,-Tr.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-Tr.y,Tr.x,0];return!jh(e,ys,_s,vs,lc)||(e=[1,0,0,0,1,0,0,0,1],!jh(e,ys,_s,vs,lc))?!1:(hc.crossVectors(Xi,qi),e=[hc.x,hc.y,hc.z],jh(e,ys,_s,vs,lc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gi=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,cc=new Ti,ys=new P,_s=new P,vs=new P,Xi=new P,qi=new P,Tr=new P,Fo=new P,lc=new P,hc=new P,Ar=new P;function jh(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ar.fromArray(n,s);let o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),c=t.dot(Ar),l=e.dot(Ar),h=i.dot(Ar);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var sb=new Ti,Bo=new P,Jh=new P,Hs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):sb.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);let e=Bo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Jh)),this.expandByPoint(Bo.copy(t.center).sub(Jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new P,Zh=new P,uc=new P,Yi=new P,Kh=new P,dc=new P,Qh=new P,$o=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Zh.copy(t).add(e).multiplyScalar(.5),uc.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(Zh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(uc),o=Yi.dot(this.direction),c=-Yi.dot(uc),l=Yi.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*c-o,d=a*o-c,x=s*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zh).addScaledVector(uc,d),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,r,s){Kh.subVectors(e,t),dc.subVectors(i,t),Qh.crossVectors(Kh,dc);let a=this.direction.dot(Qh),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,t);let c=o*this.direction.dot(dc.crossVectors(Yi,dc));if(c<0)return null;let l=o*this.direction.dot(Kh.cross(Yi));if(l<0||c+l>a)return null;let h=-o*Yi.dot(Qh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class n{constructor(t,e,i,r,s,a,o,c,l,h,u,d,f,x,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,u,d,f,x,y,m)}set(t,e,i,r,s,a,o,c,l,h,u,d,f,x,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/bs.setFromMatrixColumn(t,0).length(),s=1/bs.setFromMatrixColumn(t,1).length(),a=1/bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,x=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+x*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=x+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,x=l*h,y=l*u;e[0]=d+y*o,e[4]=x*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,x=l*h,y=l*u;e[0]=d-y*o,e[4]=-a*u,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,x=o*h,y=o*u;e[0]=c*h,e[4]=x*l-f,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=f*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=y-d*u,e[8]=x*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*c,f=a*l,x=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-x,e[2]=x*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ob,t,ab)}lookAt(t,e,i){let r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),$i.crossVectors(i,xn),$i.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),$i.crossVectors(i,xn)),$i.normalize(),fc.crossVectors(xn,$i),r[0]=$i.x,r[4]=fc.x,r[8]=xn.x,r[1]=$i.y,r[5]=fc.y,r[9]=xn.y,r[2]=$i.z,r[6]=fc.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],x=i[2],y=i[6],m=i[10],p=i[14],v=i[3],_=i[7],T=i[11],R=i[15],I=r[0],C=r[4],V=r[8],M=r[12],E=r[1],D=r[5],X=r[9],$=r[13],A=r[2],O=r[6],G=r[10],Y=r[14],q=r[3],W=r[7],J=r[11],Z=r[15];return s[0]=a*I+o*E+c*A+l*q,s[4]=a*C+o*D+c*O+l*W,s[8]=a*V+o*X+c*G+l*J,s[12]=a*M+o*$+c*Y+l*Z,s[1]=h*I+u*E+d*A+f*q,s[5]=h*C+u*D+d*O+f*W,s[9]=h*V+u*X+d*G+f*J,s[13]=h*M+u*$+d*Y+f*Z,s[2]=x*I+y*E+m*A+p*q,s[6]=x*C+y*D+m*O+p*W,s[10]=x*V+y*X+m*G+p*J,s[14]=x*M+y*$+m*Y+p*Z,s[3]=v*I+_*E+T*A+R*q,s[7]=v*C+_*D+T*O+R*W,s[11]=v*V+_*X+T*G+R*J,s[15]=v*M+_*$+T*Y+R*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],x=t[3],y=t[7],m=t[11],p=t[15];return x*(+s*c*u-r*l*u-s*o*d+i*l*d+r*o*f-i*c*f)+y*(+e*c*f-e*l*d+s*a*d-r*a*f+r*l*h-s*c*h)+m*(+e*l*u-e*o*f-s*a*u+i*a*f+s*o*h-i*l*h)+p*(-r*o*h-e*c*u+e*o*d+r*a*u-i*a*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],x=t[12],y=t[13],m=t[14],p=t[15],v=u*m*l-y*d*l+y*c*f-o*m*f-u*c*p+o*d*p,_=x*d*l-h*m*l-x*c*f+a*m*f+h*c*p-a*d*p,T=h*y*l-x*u*l+x*o*f-a*y*f-h*o*p+a*u*p,R=x*u*c-h*y*c-x*o*d+a*y*d+h*o*m-a*u*m,I=e*v+i*_+r*T+s*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return t[0]=v*C,t[1]=(y*d*s-u*m*s-y*r*f+i*m*f+u*r*p-i*d*p)*C,t[2]=(o*m*s-y*c*s+y*r*l-i*m*l-o*r*p+i*c*p)*C,t[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*f-i*c*f)*C,t[4]=_*C,t[5]=(h*m*s-x*d*s+x*r*f-e*m*f-h*r*p+e*d*p)*C,t[6]=(x*c*s-a*m*s-x*r*l+e*m*l+a*r*p-e*c*p)*C,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*f+e*c*f)*C,t[8]=T*C,t[9]=(x*u*s-h*y*s-x*i*f+e*y*f+h*i*p-e*u*p)*C,t[10]=(a*y*s-x*o*s+x*i*l-e*y*l-a*i*p+e*o*p)*C,t[11]=(h*o*s-a*u*s-h*i*l+e*u*l+a*i*f-e*o*f)*C,t[12]=R*C,t[13]=(h*y*r-x*u*r+x*i*d-e*y*d-h*i*m+e*u*m)*C,t[14]=(x*o*r-a*y*r-x*i*c+e*y*c+a*i*m-e*o*m)*C,t[15]=(a*u*r-h*o*r+h*i*c-e*u*c-a*i*d+e*o*d)*C,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,x=s*u,y=a*h,m=a*u,p=o*u,v=c*l,_=c*h,T=c*u,R=i.x,I=i.y,C=i.z;return r[0]=(1-(y+p))*R,r[1]=(f+T)*R,r[2]=(x-_)*R,r[3]=0,r[4]=(f-T)*I,r[5]=(1-(d+p))*I,r[6]=(m+v)*I,r[7]=0,r[8]=(x+_)*C,r[9]=(m-v)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=bs.set(r[0],r[1],r[2]).length(),a=bs.set(r[4],r[5],r[6]).length(),o=bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Nn.copy(this);let l=1/s,h=1/a,u=1/o;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Mi){let c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r),f,x;if(o===Mi)f=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===kc)f=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Mi){let c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(a-s),d=(e+t)*l,f=(i+r)*h,x,y;if(o===Mi)x=(a+s)*u,y=-2*u;else if(o===kc)x=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},bs=new P,Nn=new Me,ob=new P(0,0,0),ab=new P(1,1,1),$i=new P,fc=new P,xn=new P,Lm=new Me,Pm=new nr,qc=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lm,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qc.DEFAULT_ORDER="XYZ";var jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cb=0,Um=new P,Ms=new nr,yi=new Me,pc=new P,ko=new P,lb=new P,hb=new nr,Dm=new P(1,0,0),Nm=new P(0,1,0),Om=new P(0,0,1),ub={type:"added"},db={type:"removed"},nn=class n extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new qc,i=new nr,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Ht}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Dm,t)}rotateY(t){return this.rotateOnAxis(Nm,t)}rotateZ(t){return this.rotateOnAxis(Om,t)}translateOnAxis(t,e){return Um.copy(t).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dm,t)}translateY(t){return this.translateOnAxis(Nm,t)}translateZ(t){return this.translateOnAxis(Om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pc.copy(t):pc.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ko,pc,this.up):yi.lookAt(pc,ko,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(yi),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ub)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(db)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,lb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};nn.DEFAULT_UP=new P(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new P,_i=new P,tu=new P,vi=new P,Ss=new P,ws=new P,zm=new P,eu=new P,nu=new P,iu=new P,mc=!1,Ur=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),On.subVectors(t,e),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){On.subVectors(r,e),_i.subVectors(i,e),tu.subVectors(t,e);let a=On.dot(On),o=On.dot(_i),c=On.dot(tu),l=_i.dot(_i),h=_i.dot(tu),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-f-x,x,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(t,e,i,r,s,a,o,c){return mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mc=!0),this.getInterpolation(t,e,i,r,s,a,o,c)}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static isFrontFacing(t,e,i,r){return On.subVectors(i,e),_i.subVectors(t,e),On.cross(_i).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),On.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mc=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,a,o;Ss.subVectors(r,i),ws.subVectors(s,i),eu.subVectors(t,i);let c=Ss.dot(eu),l=ws.dot(eu);if(c<=0&&l<=0)return e.copy(i);nu.subVectors(t,r);let h=Ss.dot(nu),u=ws.dot(nu);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Ss,a);iu.subVectors(t,s);let f=Ss.dot(iu),x=ws.dot(iu);if(x>=0&&f<=x)return e.copy(s);let y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(i).addScaledVector(ws,o);let m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return zm.subVectors(s,r),o=(u-h)/(u-h+(f-x)),e.copy(r).addScaledVector(zm,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(Ss,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},gc={h:0,s:0,l:0};function ru(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=rd(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ru(a,s,t+1/3),this.g=ru(a,s,t),this.b=ru(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=Pg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=qh(t.r),this.g=qh(t.g),this.b=qh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Qt.fromWorkingColorSpace(He.copy(this),t),Math.round(tn(He.r*255,0,255))*65536+Math.round(tn(He.g*255,0,255))*256+Math.round(tn(He.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(He.copy(this),e);let i=He.r,r=He.g,s=He.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ze){Qt.fromWorkingColorSpace(He.copy(this),t);let e=He.r,i=He.g,r=He.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(gc);let i=Ho(ji.h,gc.h,e),r=Ho(ji.s,gc.s,e),s=Ho(ji.l,gc.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Pt;Pt.NAMES=Pg;var fb=0,Ai=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Ns,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=xu,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gu&&(i.blendSrc=this.blendSrc),this.blendDst!==xu&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gs=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new P,xc=new $t,Xe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xc.fromBufferAttribute(this,e),xc.applyMatrix3(t),this.setXY(e,xc.x,xc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wm&&(t.usage=this.usage),t}};var Yc=class extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var $c=class extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var en=class extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}};var pb=0,Tn=new Me,su=new nn,Es=new P,yn=new Ti,Vo=new Ti,Le=new P,rn=class n extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lg(t)?$c:Yc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return su.lookAt(t),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Vo.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(yn.min,Vo.min),yn.expandByPoint(Le),Le.addVectors(yn.max,Vo.max),yn.expandByPoint(Le)):(yn.expandByPoint(Vo.min),yn.expandByPoint(Vo.max))}yn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Le));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Le.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(t,l),Le.add(Es)),r=Math.max(r,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new P,h[E]=new P;let u=new P,d=new P,f=new P,x=new $t,y=new $t,m=new $t,p=new P,v=new P;function _(E,D,X){u.fromArray(r,E*3),d.fromArray(r,D*3),f.fromArray(r,X*3),x.fromArray(a,E*2),y.fromArray(a,D*2),m.fromArray(a,X*2),d.sub(u),f.sub(u),y.sub(x),m.sub(x);let $=1/(y.x*m.y-m.x*y.y);isFinite($)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar($),v.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar($),l[E].add(p),l[D].add(p),l[X].add(p),h[E].add(v),h[D].add(v),h[X].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let E=0,D=T.length;E<D;++E){let X=T[E],$=X.start,A=X.count;for(let O=$,G=$+A;O<G;O+=3)_(i[O+0],i[O+1],i[O+2])}let R=new P,I=new P,C=new P,V=new P;function M(E){C.fromArray(s,E*3),V.copy(C);let D=l[E];R.copy(D),R.sub(C.multiplyScalar(C.dot(D))).normalize(),I.crossVectors(V,D);let $=I.dot(h[E])<0?-1:1;c[E*4]=R.x,c[E*4+1]=R.y,c[E*4+2]=R.z,c[E*4+3]=$}for(let E=0,D=T.length;E<D;++E){let X=T[E],$=X.start,A=X.count;for(let O=$,G=$+A;O<G;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let x=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,x=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)d[x++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,i);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fm=new Me,Cr=new $o,yc=new Hs,Bm=new P,Ts=new P,As=new P,Cs=new P,ou=new P,_c=new P,vc=new $t,bc=new $t,Mc=new $t,km=new P,Vm=new P,Hm=new P,Sc=new P,wc=new P,be=class extends nn{constructor(t=new rn,e=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){_c.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(ou.fromBufferAttribute(u,t),a?_c.addScaledVector(ou,h):_c.addScaledVector(ou.sub(e),h))}e.add(_c)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),Cr.copy(t.ray).recast(t.near),!(yc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(yc,Bm)===null||Cr.origin.distanceToSquared(Bm)>(t.far-t.near)**2))&&(Fm.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Cr)))}_computeIntersections(t,e,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=v,R=_;T<R;T+=3){let I=o.getX(T),C=o.getX(T+1),V=o.getX(T+2);r=Ec(this,p,t,i,l,h,u,I,C,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let v=o.getX(m),_=o.getX(m+1),T=o.getX(m+2);r=Ec(this,a,t,i,l,h,u,v,_,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let m=d[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let T=v,R=_;T<R;T+=3){let I=T,C=T+1,V=T+2;r=Ec(this,p,t,i,l,h,u,I,C,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let v=m,_=m+1,T=m+2;r=Ec(this,a,t,i,l,h,u,v,_,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function mb(n,t,e,i,r,s,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ln,o),c===null)return null;wc.copy(o),wc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(wc);return l<e.near||l>e.far?null:{distance:l,point:wc.clone(),object:n}}function Ec(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Ts),n.getVertexPosition(c,As),n.getVertexPosition(l,Cs);let h=mb(n,t,e,i,Ts,As,Cs,Sc);if(h){r&&(vc.fromBufferAttribute(r,o),bc.fromBufferAttribute(r,c),Mc.fromBufferAttribute(r,l),h.uv=Ur.getInterpolation(Sc,Ts,As,Cs,vc,bc,Mc,new $t)),s&&(vc.fromBufferAttribute(s,o),bc.fromBufferAttribute(s,c),Mc.fromBufferAttribute(s,l),h.uv1=Ur.getInterpolation(Sc,Ts,As,Cs,vc,bc,Mc,new $t),h.uv2=h.uv1),a&&(km.fromBufferAttribute(a,o),Vm.fromBufferAttribute(a,c),Hm.fromBufferAttribute(a,l),h.normal=Ur.getInterpolation(Sc,Ts,As,Cs,km,Vm,Hm,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Ur.getNormal(Ts,As,Cs,u.normal),h.face=u}return h}var $n=class n extends rn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,i,e,t,a,s,0),x("z","y","x",1,-1,i,e,-t,a,s,1),x("x","z","y",1,1,t,i,e,r,a,2),x("x","z","y",1,-1,t,i,-e,r,a,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function x(y,m,p,v,_,T,R,I,C,V,M){let E=T/C,D=R/V,X=T/2,$=R/2,A=I/2,O=C+1,G=V+1,Y=0,q=0,W=new P;for(let J=0;J<G;J++){let Z=J*D-$;for(let nt=0;nt<O;nt++){let B=nt*E-X;W[y]=B*v,W[m]=Z*_,W[p]=A,l.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[p]=I>0?1:-1,h.push(W.x,W.y,W.z),u.push(nt/C),u.push(1-J/V),Y+=1}}for(let J=0;J<V;J++)for(let Z=0;Z<C;Z++){let nt=d+Z+O*J,B=d+Z+O*(J+1),j=d+(Z+1)+O*(J+1),ot=d+(Z+1)+O*J;c.push(nt,B,ot),c.push(B,j,ot),q+=6}o.addGroup(f,q,M),f+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ws(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ke(n){let t={};for(let e=0;e<n.length;e++){let i=Ws(n[e]);for(let r in i)t[r]=i[r]}return t}function gb(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ug(n){return n.getRenderTarget()===null?n.outputColorSpace:Qt.workingColorSpace}var xb={clone:Ws,merge:Ke},yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=gb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},jc=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_n=class extends jc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Rs=-90,Is=1,Tu=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _n(Rs,Is,t,e);r.layers=this.layers,this.add(r);let s=new _n(Rs,Is,t,e);s.layers=this.layers,this.add(s);let a=new _n(Rs,Is,t,e);a.layers=this.layers,this.add(a);let o=new _n(Rs,Is,t,e);o.layers=this.layers,this.add(o);let c=new _n(Rs,Is,t,e);c.layers=this.layers,this.add(c);let l=new _n(Rs,Is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Jc=class extends kn{constructor(t,e,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Bs,super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Au=class extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Or?ze:Cn),this.texture=new Jc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $n(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:Ki});s.uniforms.tEquirect.value=e;let a=new be(r,s),o=e.minFilter;return e.minFilter===Xo&&(e.minFilter=An),new Tu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}},au=new P,vb=new P,bb=new Ht,Ge=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=au.subVectors(i,e).cross(vb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||bb.getNormalMatrix(t),r=this.coplanarPoint(au).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rr=new Hs,Tc=new P,Jo=class{constructor(t=new Ge,e=new Ge,i=new Ge,r=new Ge,s=new Ge,a=new Ge){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],f=r[8],x=r[9],y=r[10],m=r[11],p=r[12],v=r[13],_=r[14],T=r[15];if(i[0].setComponents(c-s,d-l,m-f,T-p).normalize(),i[1].setComponents(c+s,d+l,m+f,T+p).normalize(),i[2].setComponents(c+a,d+h,m+x,T+v).normalize(),i[3].setComponents(c-a,d-h,m-x,T-v).normalize(),i[4].setComponents(c-o,d-u,m-y,T-_).normalize(),e===Mi)i[5].setComponents(c+o,d+u,m+y,T+_).normalize();else if(e===kc)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Tc.x=r.normal.x>0?t.max.x:t.min.x,Tc.y=r.normal.y>0?t.max.y:t.min.y,Tc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dg(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Mb(n,t){let e=t.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,u){let d=h.array,f=h._updateRange,x=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&x.length===0&&n.bufferSubData(u,0,d),x.length!==0){for(let y=0,m=x.length;y<m;y++){let p=x[y];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Xs=class n extends rn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,d=e/c,f=[],x=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let _=0;_<l;_++){let T=_*u-s;x.push(T,-v,0),y.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let _=v+l*p,T=v+l*(p+1),R=v+1+l*(p+1),I=v+1+l*p;f.push(_,T,I),f.push(T,R,I)}this.setIndex(f),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
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
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rb=`#ifdef USE_AOMAP
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
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lb=`#ifdef USE_BATCHING
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
#endif`,Pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,zb=`#ifdef USE_BUMPMAP
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
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
} // validated`,Yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$b=`vec3 transformedNormal = objectNormal;
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
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",tM=`
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
}`,eM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
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
}`,uM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
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
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
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
#endif`,MM=`struct PhysicalMaterial {
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
}`,SM=`
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UM=`#if defined( USE_POINTS_UV )
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
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aS=`float getShadowMask() {
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
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lS=`#ifdef USE_SKINNING
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
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#ifdef USE_TRANSMISSION
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`#include <common>
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
}`,RS=`#if DEPTH_PACKING == 3200
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
}`,IS=`#define DISTANCE
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
}`,LS=`#define DISTANCE
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`uniform float scale;
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
}`,NS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,zS=`uniform vec3 diffuse;
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
}`,FS=`#define LAMBERT
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
}`,BS=`#define LAMBERT
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
}`,kS=`#define MATCAP
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
}`,VS=`#define MATCAP
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
}`,HS=`#define NORMAL
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
}`,GS=`#define NORMAL
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
}`,WS=`#define PHONG
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
}`,XS=`#define PHONG
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
}`,qS=`#define STANDARD
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
}`,YS=`#define STANDARD
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
}`,$S=`#define TOON
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
}`,jS=`#define TOON
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
}`,JS=`uniform float size;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,KS=`#include <common>
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
}`,QS=`uniform vec3 color;
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
}`,tw=`uniform float rotation;
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
}`,ew=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Sb,alphahash_pars_fragment:wb,alphamap_fragment:Eb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Cb,aomap_fragment:Rb,aomap_pars_fragment:Ib,batching_pars_vertex:Lb,batching_vertex:Pb,begin_vertex:Ub,beginnormal_vertex:Db,bsdfs:Nb,iridescence_fragment:Ob,bumpmap_pars_fragment:zb,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Bb,clipping_planes_pars_vertex:kb,clipping_planes_vertex:Vb,color_fragment:Hb,color_pars_fragment:Gb,color_pars_vertex:Wb,color_vertex:Xb,common:qb,cube_uv_reflection_fragment:Yb,defaultnormal_vertex:$b,displacementmap_pars_vertex:jb,displacementmap_vertex:Jb,emissivemap_fragment:Zb,emissivemap_pars_fragment:Kb,colorspace_fragment:Qb,colorspace_pars_fragment:tM,envmap_fragment:eM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:gM,envmap_vertex:sM,fog_vertex:oM,fog_pars_vertex:aM,fog_fragment:cM,fog_pars_fragment:lM,gradientmap_pars_fragment:hM,lightmap_fragment:uM,lightmap_pars_fragment:dM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:xM,lights_toon_pars_fragment:yM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:bM,lights_physical_pars_fragment:MM,lights_fragment_begin:SM,lights_fragment_maps:wM,lights_fragment_end:EM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:CM,logdepthbuf_vertex:RM,map_fragment:IM,map_pars_fragment:LM,map_particle_fragment:PM,map_particle_pars_fragment:UM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:NM,morphcolor_vertex:OM,morphnormal_vertex:zM,morphtarget_pars_vertex:FM,morphtarget_vertex:BM,normal_fragment_begin:kM,normal_fragment_maps:VM,normal_pars_fragment:HM,normal_pars_vertex:GM,normal_vertex:WM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:jM,opaque_fragment:JM,packing:ZM,premultiplied_alpha_fragment:KM,project_vertex:QM,dithering_fragment:tS,dithering_pars_fragment:eS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:rS,shadowmap_pars_vertex:sS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:cS,skinning_pars_vertex:lS,skinning_vertex:hS,skinnormal_vertex:uS,specularmap_fragment:dS,specularmap_pars_fragment:fS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:xS,uv_pars_fragment:yS,uv_pars_vertex:_S,uv_vertex:vS,worldpos_vertex:bS,background_vert:MS,background_frag:SS,backgroundCube_vert:wS,backgroundCube_frag:ES,cube_vert:TS,cube_frag:AS,depth_vert:CS,depth_frag:RS,distanceRGBA_vert:IS,distanceRGBA_frag:LS,equirect_vert:PS,equirect_frag:US,linedashed_vert:DS,linedashed_frag:NS,meshbasic_vert:OS,meshbasic_frag:zS,meshlambert_vert:FS,meshlambert_frag:BS,meshmatcap_vert:kS,meshmatcap_frag:VS,meshnormal_vert:HS,meshnormal_frag:GS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:qS,meshphysical_frag:YS,meshtoon_vert:$S,meshtoon_frag:jS,points_vert:JS,points_frag:ZS,shadow_vert:KS,shadow_frag:QS,sprite_vert:tw,sprite_frag:ew},lt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Yn={basic:{uniforms:Ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ke([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ke([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ke([lt.points,lt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ke([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ke([lt.common,lt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ke([lt.sprite,lt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ke([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ke([lt.lights,lt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Yn.physical={uniforms:Ke([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Ac={r:0,b:0,g:0};function nw(n,t,e,i,r,s,a){let o=new Pt(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function x(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?y(o,c):_&&_.isColor&&(y(_,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===rl)?(h===void 0&&(h=new be(new $n(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ws(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new be(new Xs(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ws(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Ac,Ug(n)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(o,c)},render:x}}function iw(n,t,e,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function u(A,O,G,Y,q){let W=!1;if(a){let J=y(Y,G,O);l!==J&&(l=J,f(l.object)),W=p(A,Y,G,q),W&&v(A,Y,G,q)}else{let J=O.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=J,W=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,V(A,O,G,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(A){return i.isWebGL2?n.bindVertexArray(A):s.bindVertexArrayOES(A)}function x(A){return i.isWebGL2?n.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function y(A,O,G){let Y=G.wireframe===!0,q=o[A.id];q===void 0&&(q={},o[A.id]=q);let W=q[O.id];W===void 0&&(W={},q[O.id]=W);let J=W[Y];return J===void 0&&(J=m(d()),W[Y]=J),J}function m(A){let O=[],G=[],Y=[];for(let q=0;q<r;q++)O[q]=0,G[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:Y,object:A,attributes:{},index:null}}function p(A,O,G,Y){let q=l.attributes,W=O.attributes,J=0,Z=G.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=q[nt],ot=W[nt];if(ot===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(ot=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(ot=A.instanceColor)),j===void 0||j.attribute!==ot||ot&&j.data!==ot.data)return!0;J++}return l.attributesNum!==J||l.index!==Y}function v(A,O,G,Y){let q={},W=O.attributes,J=0,Z=G.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=W[nt];j===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));let ot={};ot.attribute=j,j&&j.data&&(ot.data=j.data),q[nt]=ot,J++}l.attributes=q,l.attributesNum=J,l.index=Y}function _(){let A=l.newAttributes;for(let O=0,G=A.length;O<G;O++)A[O]=0}function T(A){R(A,0)}function R(A,O){let G=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;G[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),q[A]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,O),q[A]=O)}function I(){let A=l.newAttributes,O=l.enabledAttributes;for(let G=0,Y=O.length;G<Y;G++)O[G]!==A[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function C(A,O,G,Y,q,W,J){J===!0?n.vertexAttribIPointer(A,O,G,q,W):n.vertexAttribPointer(A,O,G,Y,q,W)}function V(A,O,G,Y){if(i.isWebGL2===!1&&(A.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=Y.attributes,W=G.getAttributes(),J=O.defaultAttributeValues;for(let Z in W){let nt=W[Z];if(nt.location>=0){let B=q[Z];if(B===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let j=B.normalized,ot=B.itemSize,tt=e.get(B);if(tt===void 0)continue;let st=tt.buffer,at=tt.type,ft=tt.bytesPerElement,gt=i.isWebGL2===!0&&(at===n.INT||at===n.UNSIGNED_INT||B.gpuType===vg);if(B.isInterleavedBufferAttribute){let vt=B.data,N=vt.stride,ce=B.offset;if(vt.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)R(nt.location+_t,vt.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<nt.locationSize;_t++)T(nt.location+_t);n.bindBuffer(n.ARRAY_BUFFER,st);for(let _t=0;_t<nt.locationSize;_t++)C(nt.location+_t,ot/nt.locationSize,at,j,N*ft,(ce+ot/nt.locationSize*_t)*ft,gt)}else{if(B.isInstancedBufferAttribute){for(let vt=0;vt<nt.locationSize;vt++)R(nt.location+vt,B.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let vt=0;vt<nt.locationSize;vt++)T(nt.location+vt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let vt=0;vt<nt.locationSize;vt++)C(nt.location+vt,ot/nt.locationSize,at,j,ot*ft,ot/nt.locationSize*vt*ft,gt)}}else if(J!==void 0){let j=J[Z];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(nt.location,j);break;case 3:n.vertexAttrib3fv(nt.location,j);break;case 4:n.vertexAttrib4fv(nt.location,j);break;default:n.vertexAttrib1fv(nt.location,j)}}}}I()}function M(){X();for(let A in o){let O=o[A];for(let G in O){let Y=O[G];for(let q in Y)x(Y[q].object),delete Y[q];delete O[G]}delete o[A]}}function E(A){if(o[A.id]===void 0)return;let O=o[A.id];for(let G in O){let Y=O[G];for(let q in Y)x(Y[q].object),delete Y[q];delete O[G]}delete o[A.id]}function D(A){for(let O in o){let G=o[O];if(G[A.id]===void 0)continue;let Y=G[A.id];for(let q in Y)x(Y[q].object),delete Y[q];delete G[A.id]}}function X(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:T,disableUnusedAttributes:I}}function rw(n,t,e,i){let r=i.isWebGL2,s;function a(h){s=h}function o(h,u){n.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,d){if(d===0)return;let f,x;if(r)f=n,x="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[x](s,h,u,d),e.update(u,s,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y];e.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function sw(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||t.has("OES_texture_float"),R=_&&T,I=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:I}}function ow(n){let t=this,e=null,i=0,r=!1,s=!1,a=new Ge,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||x===null||x.length===0||s&&!m)s?h(null):l();else{let v=s?0:i,_=v*4,T=p.clippingState||null;c.value=T,T=h(x,d,_,f);for(let R=0;R!==_;++R)T[R]=e[R];p.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,x!==!0||m===null){let p=f+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,T=f;_!==y;++_,T+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function aw(n){let t=new WeakMap;function e(a,o){return o===yu?a.mapping=Bs:o===_u&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===yu||o===_u)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Au(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var qs=class extends jc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Us=4,Gm=[.125,.215,.35,.446,.526,.582],Pr=20,cu=new qs,Wm=new Pt,lu=null,hu=0,uu=0,Ir=(1+Math.sqrt(5))/2,Ls=1/Ir,Xm=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ir,Ls),new P(0,Ir,-Ls),new P(Ls,0,Ir),new P(-Ls,0,Ir),new P(Ir,Ls,0),new P(-Ir,Ls,0)],Zc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){lu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,hu,uu),t.scissorTest=!1,Cc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:qo,format:Bn,colorSpace:wi,depthBuffer:!1},r=qm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=lw(s,t,e)}return r}_compileMaterial(t){let e=new be(this._lodPlanes[0],t);this._renderer.compile(e,cu)}_sceneToCubeUV(t,e,i,r){let o=new _n(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wm),h.toneMapping=Qi,h.autoClear=!1;let f=new Gs({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),x=new be(new $n,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(Wm),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Cc(r,v*_,p>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Bs||t.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Cc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,cu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xm[(r-1)%Xm.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new be(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pr-1),y=s/x,m=isFinite(s)?1+Math.floor(h*y):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);let p=[],v=0;for(let C=0;C<Pr;++C){let V=C/y,M=Math.exp(-V*V/2);p.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;let T=this._sizeLods[r],R=3*T*(r>_-Us?r-_+Us:0),I=4*(this._cubeSize-T);Cc(e,R,I,3*T,2*T),c.setRenderTarget(e),c.render(u,cu)}};function cw(n){let t=[],e=[],i=[],r=n,s=n-Us+1+Gm.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Us?c=Gm[a-n+Us-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,y=3,m=2,p=1,v=new Float32Array(y*x*f),_=new Float32Array(m*x*f),T=new Float32Array(p*x*f);for(let I=0;I<f;I++){let C=I%3*2/3-1,V=I>2?0:-1,M=[C,V,0,C+2/3,V,0,C+2/3,V+1,0,C,V,0,C+2/3,V+1,0,C,V+1,0];v.set(M,y*x*I),_.set(d,m*x*I);let E=[I,I,I,I,I,I];T.set(E,p*x*I)}let R=new rn;R.setAttribute("position",new Xe(v,y)),R.setAttribute("uv",new Xe(_,m)),R.setAttribute("faceIndex",new Xe(T,p)),t.push(R),r>Us&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function qm(n,t,e){let i=new Ei(n,t,e);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function lw(n,t,e){let i=new Float32Array(Pr),r=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ym(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function $m(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function hw(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===yu||c===_u,h=c===Bs||c===ks;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Zc(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new Zc(n));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function uw(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dw(n,t,e,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let x in f){let y=f[x];for(let m=0,p=y.length;m<p;m++)t.update(y[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,x=u.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let _=0,T=v.length;_<T;_+=3){let R=v[_+0],I=v[_+1],C=v[_+2];d.push(R,I,I,C,C,R)}}else if(x!==void 0){let v=x.array;y=x.version;for(let _=0,T=v.length/3-1;_<T;_+=3){let R=_+0,I=_+1,C=_+2;d.push(R,I,I,C,C,R)}}else return;let m=new(Lg(d)?$c:Yc)(d,1);m.version=y;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function fw(n,t,e,i){let r=i.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,x){n.drawElements(s,x,o,f*c),e.update(x,s,1)}function u(f,x,y){if(y===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,x,o,f*c,y),e.update(x,s,y)}function d(f,x,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/c,x[p]);else{m.multiDrawElementsWEBGL(s,x,0,o,f,0,y);let p=0;for(let v=0;v<y;v++)p+=x[v];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function pw(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function mw(n,t){return n[0]-t[0]}function gw(n,t){return Math.abs(t[1])-Math.abs(n[1])}function xw(n,t,e){let i={},r=new Float32Array(8),s=new WeakMap,a=new Pe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=f!==void 0?f.length:0,y=s.get(h);if(y===void 0||y.count!==x){let A=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",A)};y!==void 0&&y.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],V=0;v===!0&&(V=1),_===!0&&(V=2),T===!0&&(V=3);let M=h.attributes.position.count*V,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*E*4*x),X=new Xc(D,M,E,x);X.type=Zi,X.needsUpdate=!0;let $=V*4;for(let O=0;O<x;O++){let G=R[O],Y=I[O],q=C[O],W=M*E*4*O;for(let J=0;J<G.count;J++){let Z=J*$;v===!0&&(a.fromBufferAttribute(G,J),D[W+Z+0]=a.x,D[W+Z+1]=a.y,D[W+Z+2]=a.z,D[W+Z+3]=0),_===!0&&(a.fromBufferAttribute(Y,J),D[W+Z+4]=a.x,D[W+Z+5]=a.y,D[W+Z+6]=a.z,D[W+Z+7]=0),T===!0&&(a.fromBufferAttribute(q,J),D[W+Z+8]=a.x,D[W+Z+9]=a.y,D[W+Z+10]=a.z,D[W+Z+11]=q.itemSize===4?a.w:1)}}y={count:x,texture:X,size:new $t(M,E)},s.set(h,y),h.addEventListener("dispose",A)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=d===void 0?0:d.length,x=i[h.id];if(x===void 0||x.length!==f){x=[];for(let _=0;_<f;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<f;_++){let T=x[_];T[0]=_,T[1]=d[_]}x.sort(gw);for(let _=0;_<8;_++)_<f&&x[_][1]?(o[_][0]=x[_][0],o[_][1]=x[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(mw);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let T=o[_],R=T[0],I=T[1];R!==Number.MAX_SAFE_INTEGER&&I?(y&&h.getAttribute("morphTarget"+_)!==y[R]&&h.setAttribute("morphTarget"+_,y[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),r[_]=I,p+=I):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function yw(n,t,e,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var Kc=class extends kn{constructor(t,e,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:Nr,h!==Nr&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Nr&&(i=Ji),i===void 0&&h===Vs&&(i=Dr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ng=new kn,Og=new Kc(1,1);Og.compareFunction=Rg;var zg=new Xc,Fg=new Eu,Bg=new Jc,jm=[],Jm=[],Zm=new Float32Array(16),Km=new Float32Array(9),Qm=new Float32Array(4);function js(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=jm[r];if(s===void 0&&(s=new Float32Array(r),jm[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ol(n,t){let e=Jm[t];e===void 0&&(e=new Int32Array(t),Jm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _w(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function bw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function Mw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function Sw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Qm.set(i),n.uniformMatrix2fv(this.addr,!1,Qm),we(e,i)}}function ww(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Km.set(i),n.uniformMatrix3fv(this.addr,!1,Km),we(e,i)}}function Ew(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Zm.set(i),n.uniformMatrix4fv(this.addr,!1,Zm),we(e,i)}}function Tw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Aw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function Cw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function Rw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function Iw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Lw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function Pw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function Uw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function Dw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Og:Ng;e.setTexture2D(t||s,r)}function Nw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fg,r)}function Ow(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Bg,r)}function zw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||zg,r)}function Fw(n){switch(n){case 5126:return _w;case 35664:return vw;case 35665:return bw;case 35666:return Mw;case 35674:return Sw;case 35675:return ww;case 35676:return Ew;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Iw;case 36294:return Lw;case 36295:return Pw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return zw}}function Bw(n,t){n.uniform1fv(this.addr,t)}function kw(n,t){let e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function Vw(n,t){let e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function Hw(n,t){let e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function Gw(n,t){let e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ww(n,t){let e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Xw(n,t){let e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function qw(n,t){n.uniform1iv(this.addr,t)}function Yw(n,t){n.uniform2iv(this.addr,t)}function $w(n,t){n.uniform3iv(this.addr,t)}function jw(n,t){n.uniform4iv(this.addr,t)}function Jw(n,t){n.uniform1uiv(this.addr,t)}function Zw(n,t){n.uniform2uiv(this.addr,t)}function Kw(n,t){n.uniform3uiv(this.addr,t)}function Qw(n,t){n.uniform4uiv(this.addr,t)}function tE(n,t,e){let i=this.cache,r=t.length,s=ol(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ng,s[a])}function eE(n,t,e){let i=this.cache,r=t.length,s=ol(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Fg,s[a])}function nE(n,t,e){let i=this.cache,r=t.length,s=ol(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Bg,s[a])}function iE(n,t,e){let i=this.cache,r=t.length,s=ol(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||zg,s[a])}function rE(n){switch(n){case 5126:return Bw;case 35664:return kw;case 35665:return Vw;case 35666:return Hw;case 35674:return Gw;case 35675:return Ww;case 35676:return Xw;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return $w;case 35669:case 35673:return jw;case 5125:return Jw;case 36294:return Zw;case 36295:return Kw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}var Cu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fw(e.type)}},Ru=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rE(e.type)}},Iu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],i)}}},du=/(\w+)(\])?(\[|\.)?/g;function tg(n,t){n.seq.push(t),n.map[t.id]=t}function sE(n,t,e){let i=n.name,r=i.length;for(du.lastIndex=0;;){let s=du.exec(i),a=du.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){tg(e,l===void 0?new Cu(o,n,t):new Ru(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Iu(o),tg(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);sE(s,a,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&i.push(a)}return i}};function eg(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var oE=37297,aE=0;function cE(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function lE(n){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n),i;switch(t===e?i="":t===Bc&&e===Fc?i="LinearDisplayP3ToLinearSRGB":t===Fc&&e===Bc&&(i="LinearSRGBToLinearDisplayP3"),n){case wi:case sl:return[i,"LinearTransferOETF"];case ze:case id:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ng(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+cE(n.getShaderSource(t),a)}else return r}function hE(n,t){let e=lE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function uE(n,t){let e;switch(t){case gv:e="Linear";break;case xv:e="Reinhard";break;case yv:e="OptimizedCineon";break;case _v:e="ACESFilmic";break;case bv:e="AgX";break;case vv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function dE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function fE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function pE(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function mE(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ds(n){return n!==""}function ig(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rg(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(n){return n.replace(gE,yE)}var xE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yE(n,t){let e=Nt[t];if(e===void 0){let i=xE.get(t);if(i!==void 0)e=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lu(e)}var _E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(n){return n.replace(_E,vE)}function vE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function og(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yg?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===td?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function ME(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case ks:t="ENVMAP_TYPE_CUBE";break;case rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function wE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ed:t="ENVMAP_BLENDING_MULTIPLY";break;case pv:t="ENVMAP_BLENDING_MIX";break;case mv:t="ENVMAP_BLENDING_ADD";break}return t}function EE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function TE(n,t,e,i){let r=n.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=bE(e),l=ME(e),h=SE(e),u=wE(e),d=EE(e),f=e.isWebGL2?"":dE(e),x=fE(e),y=pE(s),m=r.createProgram(),p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ds).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ds).join(`
`),v.length>0&&(v+=`
`)):(p=[og(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),v=[f,og(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Qi?uE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,hE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Lu(a),a=ig(a,e),a=rg(a,e),o=Lu(o),o=ig(o,e),o=rg(o,e),a=sg(a),o=sg(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=_+p+a,R=_+v+o,I=eg(r,r.VERTEX_SHADER,T),C=eg(r,r.FRAGMENT_SHADER,R);r.attachShader(m,I),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function V(X){if(n.debug.checkShaderErrors){let $=r.getProgramInfoLog(m).trim(),A=r.getShaderInfoLog(I).trim(),O=r.getShaderInfoLog(C).trim(),G=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,I,C);else{let q=ng(r,I,"vertex"),W=ng(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+W)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(A===""||O==="")&&(Y=!1);Y&&(X.diagnostics={runnable:G,programLog:$,vertexShader:{log:A,prefix:p},fragmentShader:{log:O,prefix:v}})}r.deleteShader(I),r.deleteShader(C),M=new Fs(r,m),E=mE(r,m)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let E;this.getAttributes=function(){return E===void 0&&V(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,oE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aE++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=C,this}var AE=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Uu(t),e.set(t,i)),i}},Uu=class{constructor(t){this.id=AE++,this.code=t,this.usedTimes=0}};function CE(n,t,e,i,r,s,a){let o=new jo,c=new Pu,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,E,D,X,$){let A=X.fog,O=$.geometry,G=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),q=Y&&Y.mapping===rl?Y.image.height:null,W=x[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=J!==void 0?J.length:0,nt=0;O.morphAttributes.position!==void 0&&(nt=1),O.morphAttributes.normal!==void 0&&(nt=2),O.morphAttributes.color!==void 0&&(nt=3);let B,j,ot,tt;if(W){let je=Yn[W];B=je.vertexShader,j=je.fragmentShader}else B=M.vertexShader,j=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),tt=c.getFragmentShaderID(M);let st=n.getRenderTarget(),at=$.isInstancedMesh===!0,ft=$.isBatchedMesh===!0,gt=!!M.map,vt=!!M.matcap,N=!!Y,ce=!!M.aoMap,_t=!!M.lightMap,mt=!!M.bumpMap,rt=!!M.normalMap,ne=!!M.displacementMap,It=!!M.emissiveMap,w=!!M.metalnessMap,b=!!M.roughnessMap,z=M.anisotropy>0,et=M.clearcoat>0,Q=M.iridescence>0,it=M.sheen>0,bt=M.transmission>0,dt=z&&!!M.anisotropyMap,xt=et&&!!M.clearcoatMap,Tt=et&&!!M.clearcoatNormalMap,Ot=et&&!!M.clearcoatRoughnessMap,K=Q&&!!M.iridescenceMap,Kt=Q&&!!M.iridescenceThicknessMap,Gt=it&&!!M.sheenColorMap,Rt=it&&!!M.sheenRoughnessMap,St=!!M.specularMap,yt=!!M.specularColorMap,Dt=!!M.specularIntensityMap,Jt=bt&&!!M.transmissionMap,me=bt&&!!M.thicknessMap,kt=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,ht=!!M.alphaHash,ut=!!M.extensions,At=!!O.attributes.uv1,wt=!!O.attributes.uv2,ie=!!O.attributes.uv3,re=Qi;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(re=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:j,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ft,instancing:at,instancingColor:at&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:wi,map:gt,matcap:vt,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:_t,bumpMap:mt,normalMap:rt,displacementMap:d&&ne,emissiveMap:It,normalMapObjectSpace:rt&&M.normalMapType===Uv,normalMapTangentSpace:rt&&M.normalMapType===Cg,metalnessMap:w,roughnessMap:b,anisotropy:z,anisotropyMap:dt,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:yt,specularIntensityMap:Dt,transmission:bt,transmissionMap:Jt,thicknessMap:me,gradientMap:kt,opaque:M.transparent===!1&&M.blending===Ns,alphaMap:ct,alphaTest:L,alphaHash:ht,combine:M.combine,mapUv:gt&&y(M.map.channel),aoMapUv:ce&&y(M.aoMap.channel),lightMapUv:_t&&y(M.lightMap.channel),bumpMapUv:mt&&y(M.bumpMap.channel),normalMapUv:rt&&y(M.normalMap.channel),displacementMapUv:ne&&y(M.displacementMap.channel),emissiveMapUv:It&&y(M.emissiveMap.channel),metalnessMapUv:w&&y(M.metalnessMap.channel),roughnessMapUv:b&&y(M.roughnessMap.channel),anisotropyMapUv:dt&&y(M.anisotropyMap.channel),clearcoatMapUv:xt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&y(M.sheenRoughnessMap.channel),specularMapUv:St&&y(M.specularMap.channel),specularColorMapUv:yt&&y(M.specularColorMap.channel),specularIntensityMapUv:Dt&&y(M.specularIntensityMap.channel),transmissionMapUv:Jt&&y(M.transmissionMap.channel),thicknessMapUv:me&&y(M.thicknessMap.channel),alphaMapUv:ct&&y(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(rt||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:wt,vertexUv3s:ie,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(gt||ct),fog:!!A,useFog:M.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ut&&M.extensions.derivatives===!0,extensionFragDepth:ut&&M.extensions.fragDepth===!0,extensionDrawBuffers:ut&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(E,M),_(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function T(M){let E=x[M.type],D;if(E){let X=Yn[E];D=xb.clone(X.uniforms)}else D=M.uniforms;return D}function R(M,E){let D;for(let X=0,$=l.length;X<$;X++){let A=l[X];if(A.cacheKey===E){D=A,++D.usedTimes;break}}return D===void 0&&(D=new TE(n,E,M,s),l.push(D)),D}function I(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:R,releaseProgram:I,releaseShaderCache:C,programs:l,dispose:V}}function RE(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function IE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ag(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cg(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,d,f,x,y,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function o(u,d,f,x,y,m){let p=a(u,d,f,x,y,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function c(u,d,f,x,y,m){let p=a(u,d,f,x,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||IE),i.length>1&&i.sort(d||ag),r.length>1&&r.sort(d||ag)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function LE(){let n=new WeakMap;function t(i,r){let s=n.get(i),a;return s===void 0?(a=new cg,n.set(i,[a])):r>=s.length?(a=new cg,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function PE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Pt};break;case"SpotLight":e={position:new P,direction:new P,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function UE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var DE=0;function NE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function OE(n,t){let e=new PE,i=UE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);let s=new P,a=new Me,o=new Me;function c(h,u){let d=0,f=0,x=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,m=0,p=0,v=0,_=0,T=0,R=0,I=0,C=0,V=0,M=0;h.sort(NE);let E=u===!0?Math.PI:1;for(let X=0,$=h.length;X<$;X++){let A=h[X],O=A.color,G=A.intensity,Y=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=O.r*G*E,f+=O.g*G*E,x+=O.b*G*E;else if(A.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(A.sh.coefficients[W],G);M++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){let J=A.shadow,Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=q,r.directionalShadowMatrix[y]=A.shadow.matrix,T++}r.directional[y]=W,y++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(O).multiplyScalar(G*E),W.distance=Y,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,r.spot[p]=W;let J=A.shadow;if(A.map&&(r.spotLightMap[C]=A.map,C++,J.updateMatrices(A),A.castShadow&&V++),r.spotLightMatrix[p]=J.matrix,A.castShadow){let Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.spotShadow[p]=Z,r.spotShadowMap[p]=q,I++}p++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),r.rectArea[v]=W,v++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*E),W.distance=A.distance,W.decay=A.decay,A.castShadow){let J=A.shadow,Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=A.shadow.matrix,R++}r.point[m]=W,m++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(G*E),W.groundColor.copy(A.groundColor).multiplyScalar(G*E),r.hemi[_]=W,_++}}v>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=x;let D=r.hash;(D.directionalLength!==y||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==T||D.numPointShadows!==R||D.numSpotShadows!==I||D.numSpotMaps!==C||D.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=p,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=I+C-V,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=M,D.directionalLength=y,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=T,D.numPointShadows=R,D.numSpotShadows=I,D.numSpotMaps=C,D.numLightProbes=M,r.version=DE++)}function l(h,u){let d=0,f=0,x=0,y=0,m=0,p=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let T=h[v];if(T.isDirectionalLight){let R=r.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(T.isSpotLight){let R=r.spot[x];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(T.isRectAreaLight){let R=r.rectArea[y];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(T.isPointLight){let R=r.point[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let R=r.hemi[m];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:r}}function lg(n,t){let e=new OE(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function o(u){r.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function zE(n,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),c;return o===void 0?(c=new lg(n,t),e.set(s,[c])):a>=o.length?(c=new lg(n,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:i,dispose:r}}var Du=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nu=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
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
}`;function kE(n,t,e){let i=new Jo,r=new $t,s=new $t,a=new Pe,o=new Du({depthPacking:Pv}),c=new Nu,l={},h=e.maxTextureSize,u={[ln]:We,[We]:ln,[zn]:zn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:FE,fragmentShader:BE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new rn;x.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new be(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let p=this.type;this.render=function(I,C,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Ki),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let $=p!==bi&&this.type===bi,A=p===bi&&this.type!==bi;for(let O=0,G=I.length;O<G;O++){let Y=I[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let W=q.getFrameExtents();if(r.multiply(W),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,q.mapSize.y=s.y)),q.map===null||$===!0||A===!0){let Z=this.type!==bi?{minFilter:Qe,magFilter:Qe}:{};q.map!==null&&q.map.dispose(),q.map=new Ei(r.x,r.y,Z),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let J=q.getViewportCount();for(let Z=0;Z<J;Z++){let nt=q.getViewport(Z);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),X.viewport(a),q.updateMatrices(Y,Z),i=q.getFrustum(),T(C,V,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===bi&&v(q,V),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,D)};function v(I,C){let V=t.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ei(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(C,null,V,d,y,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(C,null,V,f,y,null)}function _(I,C,V,M){let E=null,D=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)E=D;else if(E=V.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=E.uuid,$=C.uuid,A=l[X];A===void 0&&(A={},l[X]=A);let O=A[$];O===void 0&&(O=E.clone(),A[$]=O,C.addEventListener("dispose",R)),E=O}if(E.visible=C.visible,E.wireframe=C.wireframe,M===bi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let X=n.properties.get(E);X.light=V}return E}function T(I,C,V,M,E){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===bi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);let $=t.update(I),A=I.material;if(Array.isArray(A)){let O=$.groups;for(let G=0,Y=O.length;G<Y;G++){let q=O[G],W=A[q.materialIndex];if(W&&W.visible){let J=_(I,W,M,E);I.onBeforeShadow(n,I,C,V,$,J,q),n.renderBufferDirect(V,null,$,J,I,q),I.onAfterShadow(n,I,C,V,$,J,q)}}}else if(A.visible){let O=_(I,A,M,E);I.onBeforeShadow(n,I,C,V,$,O,null),n.renderBufferDirect(V,null,$,O,I,null),I.onAfterShadow(n,I,C,V,$,O,null)}}let X=I.children;for(let $=0,A=X.length;$<A;$++)T(X[$],C,V,M,E)}function R(I){I.target.removeEventListener("dispose",R);for(let V in l){let M=l[V],E=I.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function VE(n,t,e){let i=e.isWebGL2;function r(){let L=!1,ht=new Pe,ut=null,At=new Pe(0,0,0,0);return{setMask:function(wt){ut!==wt&&!L&&(n.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){L=wt},setClear:function(wt,ie,re,Re,je){je===!0&&(wt*=Re,ie*=Re,re*=Re),ht.set(wt,ie,re,Re),At.equals(ht)===!1&&(n.clearColor(wt,ie,re,Re),At.copy(ht))},reset:function(){L=!1,ut=null,At.set(-1,0,0,0)}}}function s(){let L=!1,ht=null,ut=null,At=null;return{setTest:function(wt){wt?ft(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(wt){ht!==wt&&!L&&(n.depthMask(wt),ht=wt)},setFunc:function(wt){if(ut!==wt){switch(wt){case av:n.depthFunc(n.NEVER);break;case cv:n.depthFunc(n.ALWAYS);break;case lv:n.depthFunc(n.LESS);break;case Dc:n.depthFunc(n.LEQUAL);break;case hv:n.depthFunc(n.EQUAL);break;case uv:n.depthFunc(n.GEQUAL);break;case dv:n.depthFunc(n.GREATER);break;case fv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=wt}},setLocked:function(wt){L=wt},setClear:function(wt){At!==wt&&(n.clearDepth(wt),At=wt)},reset:function(){L=!1,ht=null,ut=null,At=null}}}function a(){let L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Re=null,je=null;return{setTest:function(se){L||(se?ft(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!L&&(n.stencilMask(se),ht=se)},setFunc:function(se,Je,qn){(ut!==se||At!==Je||wt!==qn)&&(n.stencilFunc(se,Je,qn),ut=se,At=Je,wt=qn)},setOp:function(se,Je,qn){(ie!==se||re!==Je||Re!==qn)&&(n.stencilOp(se,Je,qn),ie=se,re=Je,Re=qn)},setLocked:function(se){L=se},setClear:function(se){je!==se&&(n.clearStencil(se),je=se)},reset:function(){L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Re=null,je=null}}}let o=new r,c=new s,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},x=new WeakMap,y=[],m=null,p=!1,v=null,_=null,T=null,R=null,I=null,C=null,V=null,M=new Pt(0,0,0),E=0,D=!1,X=null,$=null,A=null,O=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let Z=null,nt={},B=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ot=new Pe().fromArray(B),tt=new Pe().fromArray(j);function st(L,ht,ut,At){let wt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<ut;re++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(ht+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return ie}let at={};at[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),c.setFunc(Dc),It(!1),w(Hp),ft(n.CULL_FACE),rt(Ki);function ft(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function gt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function vt(L,ht){return f[L]!==ht?(n.bindFramebuffer(L,ht),f[L]=ht,i&&(L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ht),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function N(L,ht){let ut=y,At=!1;if(L)if(ut=x.get(ht),ut===void 0&&(ut=[],x.set(ht,ut)),L.isWebGLMultipleRenderTargets){let wt=L.texture;if(ut.length!==wt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,re=wt.length;ie<re;ie++)ut[ie]=n.COLOR_ATTACHMENT0+ie;ut.length=wt.length,At=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,At=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function ce(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let _t={[Lr]:n.FUNC_ADD,[q_]:n.FUNC_SUBTRACT,[Y_]:n.FUNC_REVERSE_SUBTRACT};if(i)_t[qp]=n.MIN,_t[Yp]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(_t[qp]=L.MIN_EXT,_t[Yp]=L.MAX_EXT)}let mt={[$_]:n.ZERO,[j_]:n.ONE,[J_]:n.SRC_COLOR,[gu]:n.SRC_ALPHA,[nv]:n.SRC_ALPHA_SATURATE,[tv]:n.DST_COLOR,[K_]:n.DST_ALPHA,[Z_]:n.ONE_MINUS_SRC_COLOR,[xu]:n.ONE_MINUS_SRC_ALPHA,[ev]:n.ONE_MINUS_DST_COLOR,[Q_]:n.ONE_MINUS_DST_ALPHA,[iv]:n.CONSTANT_COLOR,[rv]:n.ONE_MINUS_CONSTANT_COLOR,[sv]:n.CONSTANT_ALPHA,[ov]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,ht,ut,At,wt,ie,re,Re,je,se){if(L===Ki){p===!0&&(gt(n.BLEND),p=!1);return}if(p===!1&&(ft(n.BLEND),p=!0),L!==X_){if(L!==v||se!==D){if((_!==Lr||I!==Lr)&&(n.blendEquation(n.FUNC_ADD),_=Lr,I=Lr),se)switch(L){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gp:n.blendFunc(n.ONE,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,R=null,C=null,V=null,M.set(0,0,0),E=0,v=L,D=se}return}wt=wt||ht,ie=ie||ut,re=re||At,(ht!==_||wt!==I)&&(n.blendEquationSeparate(_t[ht],_t[wt]),_=ht,I=wt),(ut!==T||At!==R||ie!==C||re!==V)&&(n.blendFuncSeparate(mt[ut],mt[At],mt[ie],mt[re]),T=ut,R=At,C=ie,V=re),(Re.equals(M)===!1||je!==E)&&(n.blendColor(Re.r,Re.g,Re.b,je),M.copy(Re),E=je),v=L,D=!1}function ne(L,ht){L.side===zn?gt(n.CULL_FACE):ft(n.CULL_FACE);let ut=L.side===We;ht&&(ut=!ut),It(ut),L.blending===Ns&&L.transparent===!1?rt(Ki):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);let At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(L){X!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),X=L)}function w(L){L!==G_?(ft(n.CULL_FACE),L!==$&&(L===Hp?n.cullFace(n.BACK):L===W_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),$=L}function b(L){L!==A&&(q&&n.lineWidth(L),A=L)}function z(L,ht,ut){L?(ft(n.POLYGON_OFFSET_FILL),(O!==ht||G!==ut)&&(n.polygonOffset(ht,ut),O=ht,G=ut)):gt(n.POLYGON_OFFSET_FILL)}function et(L){L?ft(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Q(L){L===void 0&&(L=n.TEXTURE0+Y-1),Z!==L&&(n.activeTexture(L),Z=L)}function it(L,ht,ut){ut===void 0&&(Z===null?ut=n.TEXTURE0+Y-1:ut=Z);let At=nt[ut];At===void 0&&(At={type:void 0,texture:void 0},nt[ut]=At),(At.type!==L||At.texture!==ht)&&(Z!==ut&&(n.activeTexture(ut),Z=ut),n.bindTexture(L,ht||at[L]),At.type=L,At.texture=ht)}function bt(){let L=nt[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Jt(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function me(L,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let At=ut.get(L);At===void 0&&(At=n.getUniformBlockIndex(ht,L.name),ut.set(L,At))}function kt(L,ht){let At=u.get(ht).get(L);h.get(ht)!==At&&(n.uniformBlockBinding(ht,At,L.__bindingPointIndex),h.set(ht,At))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,nt={},f={},x=new WeakMap,y=[],m=null,p=!1,v=null,_=null,T=null,R=null,I=null,C=null,V=null,M=new Pt(0,0,0),E=0,D=!1,X=null,$=null,A=null,O=null,G=null,ot.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ft,disable:gt,bindFramebuffer:vt,drawBuffers:N,useProgram:ce,setBlending:rt,setMaterial:ne,setFlipSided:It,setCullFace:w,setLineWidth:b,setPolygonOffset:z,setScissorTest:et,activeTexture:Q,bindTexture:it,unbindTexture:bt,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:St,texImage3D:yt,updateUBOMapping:me,uniformBlockBinding:kt,texStorage2D:Gt,texStorage3D:Rt,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:K,compressedTexSubImage3D:Kt,scissor:Dt,viewport:Jt,reset:ct}}function HE(n,t,e,i,r,s,a){let o=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,b){return f?new OffscreenCanvas(w,b):Hc("canvas")}function y(w,b,z,et){let Q=1;if((w.width>et||w.height>et)&&(Q=et/Math.max(w.width,w.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let it=b?Vc:Math.floor,bt=it(Q*w.width),dt=it(Q*w.height);u===void 0&&(u=x(bt,dt));let xt=z?x(bt,dt):u;return xt.width=bt,xt.height=dt,xt.getContext("2d").drawImage(w,0,0,bt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+bt+"x"+dt+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Su(w.width)&&Su(w.height)}function p(w){return o?!1:w.wrapS!==Fn||w.wrapT!==Fn||w.minFilter!==Qe&&w.minFilter!==An}function v(w,b){return w.generateMipmaps&&b&&w.minFilter!==Qe&&w.minFilter!==An}function _(w){n.generateMipmap(w)}function T(w,b,z,et,Q=!1){if(o===!1)return b;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let it=b;if(b===n.RED&&(z===n.FLOAT&&(it=n.R32F),z===n.HALF_FLOAT&&(it=n.R16F),z===n.UNSIGNED_BYTE&&(it=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(it=n.R8UI),z===n.UNSIGNED_SHORT&&(it=n.R16UI),z===n.UNSIGNED_INT&&(it=n.R32UI),z===n.BYTE&&(it=n.R8I),z===n.SHORT&&(it=n.R16I),z===n.INT&&(it=n.R32I)),b===n.RG&&(z===n.FLOAT&&(it=n.RG32F),z===n.HALF_FLOAT&&(it=n.RG16F),z===n.UNSIGNED_BYTE&&(it=n.RG8)),b===n.RGBA){let bt=Q?zc:Qt.getTransfer(et);z===n.FLOAT&&(it=n.RGBA32F),z===n.HALF_FLOAT&&(it=n.RGBA16F),z===n.UNSIGNED_BYTE&&(it=bt===ae?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(w,b,z){return v(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function I(w){return w===Qe||w===$p||w===Fh?n.NEAREST:n.LINEAR}function C(w){let b=w.target;b.removeEventListener("dispose",C),M(b),b.isVideoTexture&&h.delete(b)}function V(w){let b=w.target;b.removeEventListener("dispose",V),D(b)}function M(w){let b=i.get(w);if(b.__webglInit===void 0)return;let z=w.source,et=d.get(z);if(et){let Q=et[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(et).length===0&&d.delete(z)}i.remove(w)}function E(w){let b=i.get(w);n.deleteTexture(b.__webglTexture);let z=w.source,et=d.get(z);delete et[b.__cacheKey],a.memory.textures--}function D(w){let b=w.texture,z=i.get(w),et=i.get(b);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let it=0;it<z.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(z.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)n.deleteFramebuffer(z.__webglFramebuffer[Q]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,it=b.length;Q<it;Q++){let bt=i.get(b[Q]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),a.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(w)}let X=0;function $(){X=0}function A(){let w=X;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),X+=1,w}function O(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function G(w,b){let z=i.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(z,w,b);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function Y(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ot(z,w,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function q(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ot(z,w,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function W(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){tt(z,w,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}let J={[vu]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[bu]:n.MIRRORED_REPEAT},Z={[Qe]:n.NEAREST,[$p]:n.NEAREST_MIPMAP_NEAREST,[Fh]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Mv]:n.LINEAR_MIPMAP_NEAREST,[Xo]:n.LINEAR_MIPMAP_LINEAR},nt={[Dv]:n.NEVER,[kv]:n.ALWAYS,[Nv]:n.LESS,[Rg]:n.LEQUAL,[Ov]:n.EQUAL,[Bv]:n.GEQUAL,[zv]:n.GREATER,[Fv]:n.NOTEQUAL};function B(w,b,z){if(z?(n.texParameteri(w,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,J[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Z[b.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==Fn||b.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,I(b.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Qe&&b.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Qe||b.minFilter!==Fh&&b.minFilter!==Xo||b.type===Zi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===qo&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function j(w,b){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));let et=b.source,Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));let it=O(b);if(it!==w.__cacheKey){Q[it]===void 0&&(Q[it]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[it].usedTimes++;let bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&E(b)),w.__cacheKey=it,w.__webglTexture=Q[it].texture}return z}function ot(w,b,z){let et=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=n.TEXTURE_3D);let Q=j(w,b),it=b.source;e.bindTexture(et,w.__webglTexture,n.TEXTURE0+z);let bt=i.get(it);if(it.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);let dt=Qt.getPrimaries(Qt.workingColorSpace),xt=b.colorSpace===Cn?null:Qt.getPrimaries(b.colorSpace),Tt=b.colorSpace===Cn||dt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ot=p(b)&&m(b.image)===!1,K=y(b.image,Ot,!1,r.maxTextureSize);K=It(b,K);let Kt=m(K)||o,Gt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),St=T(b.internalFormat,Gt,Rt,b.colorSpace,b.isVideoTexture);B(et,b,Kt);let yt,Dt=b.mipmaps,Jt=o&&b.isVideoTexture!==!0&&St!==Tg,me=bt.__version===void 0||Q===!0,kt=R(b,K,Kt);if(b.isDepthTexture)St=n.DEPTH_COMPONENT,o?b.type===Zi?St=n.DEPTH_COMPONENT32F:b.type===Ji?St=n.DEPTH_COMPONENT24:b.type===Dr?St=n.DEPTH24_STENCIL8:St=n.DEPTH_COMPONENT16:b.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Nr&&St===n.DEPTH_COMPONENT&&b.type!==nd&&b.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ji,Rt=s.convert(b.type)),b.format===Vs&&St===n.DEPTH_COMPONENT&&(St=n.DEPTH_STENCIL,b.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Dr,Rt=s.convert(b.type))),me&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,St,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Gt,Rt,null));else if(b.isDataTexture)if(Dt.length>0&&Kt){Jt&&me&&e.texStorage2D(n.TEXTURE_2D,kt,St,Dt[0].width,Dt[0].height);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,Rt,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Gt,Rt,yt.data);b.generateMipmaps=!1}else Jt?(me&&e.texStorage2D(n.TEXTURE_2D,kt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Gt,Rt,K.data)):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Gt,Rt,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,St,Dt[0].width,Dt[0].height,K.depth);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],b.format!==Bn?Gt!==null?Jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Gt,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Gt,Rt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,Gt,Rt,yt.data)}else{Jt&&me&&e.texStorage2D(n.TEXTURE_2D,kt,St,Dt[0].width,Dt[0].height);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],b.format!==Bn?Gt!==null?Jt?e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,Rt,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Gt,Rt,yt.data)}else if(b.isDataArrayTexture)Jt?(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Gt,Rt,K.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,K.width,K.height,K.depth,0,Gt,Rt,K.data);else if(b.isData3DTexture)Jt?(me&&e.texStorage3D(n.TEXTURE_3D,kt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Gt,Rt,K.data)):e.texImage3D(n.TEXTURE_3D,0,St,K.width,K.height,K.depth,0,Gt,Rt,K.data);else if(b.isFramebufferTexture){if(me)if(Jt)e.texStorage2D(n.TEXTURE_2D,kt,St,K.width,K.height);else{let ct=K.width,L=K.height;for(let ht=0;ht<kt;ht++)e.texImage2D(n.TEXTURE_2D,ht,St,ct,L,0,Gt,Rt,null),ct>>=1,L>>=1}}else if(Dt.length>0&&Kt){Jt&&me&&e.texStorage2D(n.TEXTURE_2D,kt,St,Dt[0].width,Dt[0].height);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Gt,Rt,yt):e.texImage2D(n.TEXTURE_2D,ct,St,Gt,Rt,yt);b.generateMipmaps=!1}else Jt?(me&&e.texStorage2D(n.TEXTURE_2D,kt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,Rt,K)):e.texImage2D(n.TEXTURE_2D,0,St,Gt,Rt,K);v(b,Kt)&&_(et),bt.__version=it.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function tt(w,b,z){if(b.image.length!==6)return;let et=j(w,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let it=i.get(Q);if(Q.version!==it.__version||et===!0){e.activeTexture(n.TEXTURE0+z);let bt=Qt.getPrimaries(Qt.workingColorSpace),dt=b.colorSpace===Cn?null:Qt.getPrimaries(b.colorSpace),xt=b.colorSpace===Cn||bt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ct=0;ct<6;ct++)!Tt&&!Ot?K[ct]=y(b.image[ct],!1,!0,r.maxCubemapSize):K[ct]=Ot?b.image[ct].image:b.image[ct],K[ct]=It(b,K[ct]);let Kt=K[0],Gt=m(Kt)||o,Rt=s.convert(b.format,b.colorSpace),St=s.convert(b.type),yt=T(b.internalFormat,Rt,St,b.colorSpace),Dt=o&&b.isVideoTexture!==!0,Jt=it.__version===void 0||et===!0,me=R(b,Kt,Gt);B(n.TEXTURE_CUBE_MAP,b,Gt);let kt;if(Tt){Dt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,me,yt,Kt.width,Kt.height);for(let ct=0;ct<6;ct++){kt=K[ct].mipmaps;for(let L=0;L<kt.length;L++){let ht=kt[L];b.format!==Bn?Rt!==null?Dt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,Rt,St,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,Rt,St,ht.data)}}}else{kt=b.mipmaps,Dt&&Jt&&(kt.length>0&&me++,e.texStorage2D(n.TEXTURE_CUBE_MAP,me,yt,K[0].width,K[0].height));for(let ct=0;ct<6;ct++)if(Ot){Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,K[ct].width,K[ct].height,Rt,St,K[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,K[ct].width,K[ct].height,0,Rt,St,K[ct].data);for(let L=0;L<kt.length;L++){let ut=kt[L].image[ct].image;Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,ut.width,ut.height,Rt,St,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,ut.width,ut.height,0,Rt,St,ut.data)}}else{Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Rt,St,K[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,Rt,St,K[ct]);for(let L=0;L<kt.length;L++){let ht=kt[L];Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Rt,St,ht.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,Rt,St,ht.image[ct])}}}v(b,Gt)&&_(n.TEXTURE_CUBE_MAP),it.__version=Q.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function st(w,b,z,et,Q,it){let bt=s.convert(z.format,z.colorSpace),dt=s.convert(z.type),xt=T(z.internalFormat,bt,dt,z.colorSpace);if(!i.get(b).__hasExternalTextures){let Ot=Math.max(1,b.width>>it),K=Math.max(1,b.height>>it);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,it,xt,Ot,K,b.depth,0,bt,dt,null):e.texImage2D(Q,it,xt,Ot,K,0,bt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,i.get(z).__webglTexture,0,mt(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,i.get(z).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(w,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let et=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||rt(b)){let Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Zi?et=n.DEPTH_COMPONENT32F:Q.type===Ji&&(et=n.DEPTH_COMPONENT24));let it=mt(b);rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,et,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,et,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let et=mt(b);z&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let et=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<et.length;Q++){let it=et[Q],bt=s.convert(it.format,it.colorSpace),dt=s.convert(it.type),xt=T(it.internalFormat,bt,dt,it.colorSpace),Tt=mt(b);z&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,xt,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,xt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let et=i.get(b.depthTexture).__webglTexture,Q=mt(b);if(b.depthTexture.format===Nr)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===Vs)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function gt(w){let b=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,w)}else if(z){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]=n.createRenderbuffer(),at(b.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),at(b.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,b,z){let et=i.get(w);b!==void 0&&st(et.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&gt(w)}function N(w){let b=w.texture,z=i.get(w),et=i.get(b);w.addEventListener("dispose",V),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=b.version,a.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,it=w.isWebGLMultipleRenderTargets===!0,bt=m(w)||o;if(Q){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)z.__webglFramebuffer[dt][xt]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(it)if(r.drawBuffers){let dt=w.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let Ot=i.get(dt[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&rt(w)===!1){let dt=it?b:[b];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){let Tt=dt[xt];z.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);let Ot=s.convert(Tt.format,Tt.colorSpace),K=s.convert(Tt.type),Kt=T(Tt.internalFormat,Ot,K,Tt.colorSpace,w.isXRRenderTarget===!0),Gt=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Kt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),at(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),B(n.TEXTURE_CUBE_MAP,b,bt);for(let dt=0;dt<6;dt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(z.__webglFramebuffer[dt][xt],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else st(z.__webglFramebuffer[dt],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(b,bt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let dt=w.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let Ot=dt[xt],K=i.get(Ot);e.bindTexture(n.TEXTURE_2D,K.__webglTexture),B(n.TEXTURE_2D,Ot,bt),st(z.__webglFramebuffer,w,Ot,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),v(Ot,bt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,et.__webglTexture),B(dt,b,bt),o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(z.__webglFramebuffer[xt],w,b,n.COLOR_ATTACHMENT0,dt,xt);else st(z.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,dt,0);v(b,bt)&&_(dt),e.unbindTexture()}w.depthBuffer&&gt(w)}function ce(w){let b=m(w)||o,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,Q=z.length;et<Q;et++){let it=z[et];if(v(it,b)){let bt=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(it).__webglTexture;e.bindTexture(bt,dt),_(bt),e.unbindTexture()}}}function _t(w){if(o&&w.samples>0&&rt(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,et=w.height,Q=n.COLOR_BUFFER_BIT,it=[],bt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(w),xt=w.isWebGLMultipleRenderTargets===!0;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){it.push(n.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&it.push(bt);let Ot=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ot===!1&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]),Ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),xt){let K=i.get(b[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,z,et,0,0,z,et,Q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]);let Ot=i.get(b[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function mt(w){return Math.min(r.maxSamples,w.samples)}function rt(w){let b=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(w){let b=a.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function It(w,b){let z=w.colorSpace,et=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Mu||z!==wi&&z!==Cn&&(Qt.getTransfer(z)===ae?o===!1?t.has("EXT_sRGB")===!0&&et===Bn?(w.format=Mu,w.minFilter=An,w.generateMipmaps=!1):b=Gc.sRGBToLinear(b):(et!==Bn||Q!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=A,this.resetTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=vt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=rt}function GE(n,t,e){let i=e.isWebGL2;function r(s,a=Cn){let o,c=Qt.getTransfer(a);if(s===tr)return n.UNSIGNED_BYTE;if(s===bg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Mg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Sv)return n.BYTE;if(s===wv)return n.SHORT;if(s===nd)return n.UNSIGNED_SHORT;if(s===vg)return n.INT;if(s===Ji)return n.UNSIGNED_INT;if(s===Zi)return n.FLOAT;if(s===qo)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ev)return n.ALPHA;if(s===Bn)return n.RGBA;if(s===Tv)return n.LUMINANCE;if(s===Av)return n.LUMINANCE_ALPHA;if(s===Nr)return n.DEPTH_COMPONENT;if(s===Vs)return n.DEPTH_STENCIL;if(s===Mu)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Cv)return n.RED;if(s===Sg)return n.RED_INTEGER;if(s===Rv)return n.RG;if(s===wg)return n.RG_INTEGER;if(s===Eg)return n.RGBA_INTEGER;if(s===Bh||s===kh||s===Vh||s===Hh)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Bh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Bh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jp||s===Jp||s===Zp||s===Kp)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tg)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qp||s===tm)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qp)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===em||s===nm||s===im||s===rm||s===sm||s===om||s===am||s===cm||s===lm||s===hm||s===um||s===dm||s===fm||s===pm)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===em)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===im)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===om)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===am)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===um)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gh||s===mm||s===gm)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Gh)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Iv||s===xm||s===ym||s===_m)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Gh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ym)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_m)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Ou=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Si=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},WE={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},zu=class extends er{constructor(t,e){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,x=null,y=e.getContextAttributes(),m=null,p=null,v=[],_=[],T=new $t,R=null,I=new _n;I.layers.enable(1),I.viewport=new Pe;let C=new _n;C.layers.enable(2),C.viewport=new Pe;let V=[I,C],M=new Ou;M.layers.enable(1),M.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=v[B];return j===void 0&&(j=new Wo,v[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=v[B];return j===void 0&&(j=new Wo,v[B]=j),j.getGripSpace()},this.getHand=function(B){let j=v[B];return j===void 0&&(j=new Wo,v[B]=j),j.getHandSpace()};function X(B){let j=_.indexOf(B.inputSource);if(j===-1)return;let ot=v[j];ot!==void 0&&(ot.update(B.inputSource,B.frame,l||a),ot.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",A);for(let B=0;B<v.length;B++){let j=_[B];j!==null&&(_[B]=null,v[B].disconnect(j))}E=null,D=null,t.setRenderTarget(m),f=null,d=null,u=null,r=null,p=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",A),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ei(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:tr,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ot=null,tt=null;y.depth&&(tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=y.stencil?Vs:Nr,ot=y.stencil?Dr:Ji);let st={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(st),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Ei(d.textureWidth,d.textureHeight,{format:Bn,type:tr,depthTexture:new Kc(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let at=t.properties.get(p);at.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function A(B){for(let j=0;j<B.removed.length;j++){let ot=B.removed[j],tt=_.indexOf(ot);tt>=0&&(_[tt]=null,v[tt].disconnect(ot))}for(let j=0;j<B.added.length;j++){let ot=B.added[j],tt=_.indexOf(ot);if(tt===-1){for(let at=0;at<v.length;at++)if(at>=_.length){_.push(ot),tt=at;break}else if(_[at]===null){_[at]=ot,tt=at;break}if(tt===-1)break}let st=v[tt];st&&st.connect(ot)}}let O=new P,G=new P;function Y(B,j,ot){O.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ot.matrixWorld);let tt=O.distanceTo(G),st=j.projectionMatrix.elements,at=ot.projectionMatrix.elements,ft=st[14]/(st[10]-1),gt=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],N=(st[9]-1)/st[5],ce=(st[8]-1)/st[0],_t=(at[8]+1)/at[0],mt=ft*ce,rt=ft*_t,ne=tt/(-ce+_t),It=ne*-ce;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(It),B.translateZ(ne),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let w=ft+ne,b=gt+ne,z=mt-It,et=rt+(tt-It),Q=vt*gt/b*w,it=N*gt/b*w;B.projectionMatrix.makePerspective(z,et,Q,it,w,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=C.near=I.near=B.near,M.far=C.far=I.far=B.far,(E!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far);let j=B.parent,ot=M.cameras;q(M,j);for(let tt=0;tt<ot.length;tt++)q(ot[tt],j);ot.length===2?Y(M,I,C):M.projectionMatrix.copy(I.projectionMatrix),W(B,M,j)};function W(B,j,ot){ot===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ot.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Yo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let J=null;function Z(B,j){if(h=j.getViewerPose(l||a),x=j,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let tt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,tt=!0);for(let st=0;st<ot.length;st++){let at=ot[st],ft=null;if(f!==null)ft=f.getViewport(at);else{let vt=u.getViewSubImage(d,at);ft=vt.viewport,st===0&&(t.setRenderTargetTextures(p,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(p))}let gt=V[st];gt===void 0&&(gt=new _n,gt.layers.enable(st),gt.viewport=new Pe,V[st]=gt),gt.matrix.fromArray(at.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(at.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ft.x,ft.y,ft.width,ft.height),st===0&&(M.matrix.copy(gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),tt===!0&&M.cameras.push(gt)}}for(let ot=0;ot<v.length;ot++){let tt=_[ot],st=v[ot];tt!==null&&st!==void 0&&st.update(tt,j,l||a)}J&&J(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),x=null}let nt=new Dg;nt.setAnimationLoop(Z),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}};function XE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ug(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qE(n,t,e,i){let r={},s={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let T=_.program;i.uniformBlockBinding(v,T)}function l(v,_){let T=r[v.id];T===void 0&&(x(v),T=h(v),r[v.id]=T,v.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(v,R);let I=t.render.frame;s[v.id]!==I&&(d(v),s[v.id]=I)}function h(v){let _=u();v.__bindingPointIndex=_;let T=n.createBuffer(),R=v.__size,I=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=r[v.id],T=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let I=0,C=T.length;I<C;I++){let V=Array.isArray(T[I])?T[I]:[T[I]];for(let M=0,E=V.length;M<E;M++){let D=V[M];if(f(D,I,M,R)===!0){let X=D.__offset,$=Array.isArray(D.value)?D.value:[D.value],A=0;for(let O=0;O<$.length;O++){let G=$[O],Y=y(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,X+A,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,A),A+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,T,R){let I=v.value,C=_+"_"+T;if(R[C]===void 0)return typeof I=="number"||typeof I=="boolean"?R[C]=I:R[C]=I.clone(),!0;{let V=R[C];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return R[C]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function x(v){let _=v.uniforms,T=0,R=16;for(let C=0,V=_.length;C<V;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,D=M.length;E<D;E++){let X=M[E],$=Array.isArray(X.value)?X.value:[X.value];for(let A=0,O=$.length;A<O;A++){let G=$[A],Y=y(G),q=T%R;q!==0&&R-q<Y.boundary&&(T+=R-q),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=Y.storage}}}let I=T%R;return I>0&&(T+=R-I),v.__size=T,v.__cache={},this}function y(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Zo=class{constructor(t={}){let{canvas:e=eb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),x=new Int32Array(4),y=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;let _=this,T=!1,R=0,I=0,C=null,V=-1,M=null,E=new Pe,D=new Pe,X=null,$=new Pt(0),A=0,O=e.width,G=e.height,Y=1,q=null,W=null,J=new Pe(0,0,O,G),Z=new Pe(0,0,O,G),nt=!1,B=new Jo,j=!1,ot=!1,tt=null,st=new Me,at=new $t,ft=new P,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return C===null?Y:1}let N=i;function ce(S,U){for(let k=0;k<S.length;k++){let H=S[k],F=e.getContext(H,U);if(F!==null)return F}return null}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),N=ce(U,S),N===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,mt,rt,ne,It,w,b,z,et,Q,it,bt,dt,xt,Tt,Ot,K,Kt,Gt,Rt,St,yt,Dt,Jt;function me(){_t=new uw(N),mt=new sw(N,_t,t),_t.init(mt),yt=new GE(N,_t,mt),rt=new VE(N,_t,mt),ne=new pw(N),It=new RE,w=new HE(N,_t,rt,It,mt,yt,ne),b=new aw(_),z=new hw(_),et=new Mb(N,mt),Dt=new iw(N,_t,et,mt),Q=new dw(N,et,ne,Dt),it=new yw(N,Q,et,ne),Gt=new xw(N,mt,w),Ot=new ow(It),bt=new CE(_,b,z,_t,mt,Dt,Ot),dt=new XE(_,It),xt=new LE,Tt=new zE(_t,mt),Kt=new nw(_,b,z,rt,it,d,c),K=new kE(_,it,mt),Jt=new qE(N,ne,mt,rt),Rt=new rw(N,_t,ne,mt),St=new fw(N,_t,ne,mt),ne.programs=bt.programs,_.capabilities=mt,_.extensions=_t,_.properties=It,_.renderLists=xt,_.shadowMap=K,_.state=rt,_.info=ne}me();let kt=new zu(_,N);this.xr=kt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(O,G,!1))},this.getSize=function(S){return S.set(O,G)},this.setSize=function(S,U,k=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,G=U,e.width=Math.floor(S*Y),e.height=Math.floor(U*Y),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(O*Y,G*Y).floor()},this.setDrawingBufferSize=function(S,U,k){O=S,G=U,Y=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,U,k,H){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,U,k,H),rt.viewport(E.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,U,k,H){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,U,k,H),rt.scissor(D.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){rt.setScissorTest(nt=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let H=0;if(S){let F=!1;if(C!==null){let pt=C.texture.format;F=pt===Eg||pt===wg||pt===Sg}if(F){let pt=C.texture.type,Mt=pt===tr||pt===Ji||pt===nd||pt===Dr||pt===bg||pt===Mg,Et=Kt.getClearColor(),Ct=Kt.getClearAlpha(),zt=Et.r,Lt=Et.g,Ut=Et.b;Mt?(f[0]=zt,f[1]=Lt,f[2]=Ut,f[3]=Ct,N.clearBufferuiv(N.COLOR,0,f)):(x[0]=zt,x[1]=Lt,x[2]=Ut,x[3]=Ct,N.clearBufferiv(N.COLOR,0,x))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),k&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),xt.dispose(),Tt.dispose(),It.dispose(),b.dispose(),z.dispose(),it.dispose(),Dt.dispose(),Jt.dispose(),bt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",je),kt.removeEventListener("sessionend",se),tt&&(tt.dispose(),tt=null),Je.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let S=ne.autoReset,U=K.enabled,k=K.autoUpdate,H=K.needsUpdate,F=K.type;me(),ne.autoReset=S,K.enabled=U,K.autoUpdate=k,K.needsUpdate=H,K.type=F}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){let U=S.target;U.removeEventListener("dispose",ut),At(U)}function At(S){wt(S),It.remove(S)}function wt(S){let U=It.get(S).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,H,F,pt){U===null&&(U=gt);let Mt=F.isMesh&&F.matrixWorld.determinant()<0,Et=B_(S,U,k,H,F);rt.setMaterial(H,Mt);let Ct=k.index,zt=1;if(H.wireframe===!0){if(Ct=Q.getWireframeAttribute(k),Ct===void 0)return;zt=2}let Lt=k.drawRange,Ut=k.attributes.position,ye=Lt.start*zt,gn=(Lt.start+Lt.count)*zt;pt!==null&&(ye=Math.max(ye,pt.start*zt),gn=Math.min(gn,(pt.start+pt.count)*zt)),Ct!==null?(ye=Math.max(ye,0),gn=Math.min(gn,Ct.count)):Ut!=null&&(ye=Math.max(ye,0),gn=Math.min(gn,Ut.count));let Ie=gn-ye;if(Ie<0||Ie===1/0)return;Dt.setup(F,H,Et,k,Ct);let mi,fe=Rt;if(Ct!==null&&(mi=et.get(Ct),fe=St,fe.setIndex(mi)),F.isMesh)H.wireframe===!0?(rt.setLineWidth(H.wireframeLinewidth*vt()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(F.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),rt.setLineWidth(Vt*vt()),F.isLineSegments?fe.setMode(N.LINES):F.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else F.isPoints?fe.setMode(N.POINTS):F.isSprite&&fe.setMode(N.TRIANGLES);if(F.isBatchedMesh)fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)fe.renderInstances(ye,Ie,F.count);else if(k.isInstancedBufferGeometry){let Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Dh=Math.min(k.instanceCount,Vt);fe.renderInstances(ye,Ie,Dh)}else fe.render(ye,Ie)};function ie(S,U,k){S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,oc(S,U,k),S.side=ln,S.needsUpdate=!0,oc(S,U,k),S.side=zn):oc(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),m=Tt.get(k),m.init(),v.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(_._useLegacyLights);let H=new Set;return S.traverse(function(F){let pt=F.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let Et=pt[Mt];ie(Et,k,F),H.add(Et)}else ie(pt,k,F),H.add(pt)}),v.pop(),m=null,H},this.compileAsync=function(S,U,k=null){let H=this.compile(S,U,k);return new Promise(F=>{function pt(){if(H.forEach(function(Mt){It.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){F(S);return}setTimeout(pt,10)}_t.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function Re(S){re&&re(S)}function je(){Je.stop()}function se(){Je.start()}let Je=new Dg;Je.setAnimationLoop(Re),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(S){re=S,kt.setAnimationLoop(S),S===null?Je.stop():Je.start()},kt.addEventListener("sessionstart",je),kt.addEventListener("sessionend",se),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(U),U=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,C),m=Tt.get(S,v.length),m.init(),v.push(m),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(st),ot=this.localClippingEnabled,j=Ot.init(this.clippingPlanes,ot),y=xt.get(S,p.length),y.init(),p.push(y),qn(S,U,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(q,W),this.info.render.frame++,j===!0&&Ot.beginShadows();let k=m.state.shadowsArray;if(K.render(k,S,U),j===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(y,S),m.setupLights(_._useLegacyLights),U.isArrayCamera){let H=U.cameras;for(let F=0,pt=H.length;F<pt;F++){let Mt=H[F];Op(y,S,Mt,Mt.viewport)}}else Op(y,S,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,U),Dt.resetDefaultState(),V=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function qn(S,U,k,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){H&&ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);let Mt=it.update(S),Et=S.material;Et.visible&&y.push(S,Mt,Et,k,ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){let Mt=it.update(S),Et=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ft.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ft.copy(Mt.boundingSphere.center)),ft.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(Et)){let Ct=Mt.groups;for(let zt=0,Lt=Ct.length;zt<Lt;zt++){let Ut=Ct[zt],ye=Et[Ut.materialIndex];ye&&ye.visible&&y.push(S,Mt,ye,k,ft.z,Ut)}}else Et.visible&&y.push(S,Mt,Et,k,ft.z,null)}}let pt=S.children;for(let Mt=0,Et=pt.length;Mt<Et;Mt++)qn(pt[Mt],U,k,H)}function Op(S,U,k,H){let F=S.opaque,pt=S.transmissive,Mt=S.transparent;m.setupLightsView(k),j===!0&&Ot.setGlobalState(_.clippingPlanes,k),pt.length>0&&F_(F,pt,U,k),H&&rt.viewport(E.copy(H)),F.length>0&&sc(F,U,k),pt.length>0&&sc(pt,U,k),Mt.length>0&&sc(Mt,U,k),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function F_(S,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let pt=mt.isWebGL2;tt===null&&(tt=new Ei(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?qo:tr,minFilter:Xo,samples:pt?4:0})),_.getDrawingBufferSize(at),pt?tt.setSize(at.x,at.y):tt.setSize(Vc(at.x),Vc(at.y));let Mt=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor($),A=_.getClearAlpha(),A<1&&_.setClearColor(16777215,.5),_.clear();let Et=_.toneMapping;_.toneMapping=Qi,sc(S,k,H),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt);let Ct=!1;for(let zt=0,Lt=U.length;zt<Lt;zt++){let Ut=U[zt],ye=Ut.object,gn=Ut.geometry,Ie=Ut.material,mi=Ut.group;if(Ie.side===zn&&ye.layers.test(H.layers)){let fe=Ie.side;Ie.side=We,Ie.needsUpdate=!0,zp(ye,k,H,gn,Ie,mi),Ie.side=fe,Ie.needsUpdate=!0,Ct=!0}}Ct===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt)),_.setRenderTarget(Mt),_.setClearColor($,A),_.toneMapping=Et}function sc(S,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,pt=S.length;F<pt;F++){let Mt=S[F],Et=Mt.object,Ct=Mt.geometry,zt=H===null?Mt.material:H,Lt=Mt.group;Et.layers.test(k.layers)&&zp(Et,U,k,Ct,zt,Lt)}}function zp(S,U,k,H,F,pt){S.onBeforeRender(_,U,k,H,F,pt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,U,k,H,S,pt),F.transparent===!0&&F.side===zn&&F.forceSinglePass===!1?(F.side=We,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,S,pt),F.side=ln,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,S,pt),F.side=zn):_.renderBufferDirect(k,U,H,F,S,pt),S.onAfterRender(_,U,k,H,F,pt)}function oc(S,U,k){U.isScene!==!0&&(U=gt);let H=It.get(S),F=m.state.lights,pt=m.state.shadowsArray,Mt=F.state.version,Et=bt.getParameters(S,F.state,pt,U,k),Ct=bt.getProgramCacheKey(Et),zt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?z:b).get(S.envMap||H.environment),zt===void 0&&(S.addEventListener("dispose",ut),zt=new Map,H.programs=zt);let Lt=zt.get(Ct);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===Mt)return Bp(S,Et),Lt}else Et.uniforms=bt.getUniforms(S),S.onBuild(k,Et,_),S.onBeforeCompile(Et,_),Lt=bt.acquireProgram(Et,Ct),zt.set(Ct,Lt),H.uniforms=Et.uniforms;let Ut=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=Ot.uniform),Bp(S,Et),H.needsLights=V_(S),H.lightsStateVersion=Mt,H.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function Fp(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Fs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Bp(S,U){let k=It.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function B_(S,U,k,H,F){U.isScene!==!0&&(U=gt),w.resetTextureUnits();let pt=U.fog,Mt=H.isMeshStandardMaterial?U.environment:null,Et=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wi,Ct=(H.isMeshStandardMaterial?z:b).get(H.envMap||Mt),zt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!k.morphAttributes.position,ye=!!k.morphAttributes.normal,gn=!!k.morphAttributes.color,Ie=Qi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ie=_.toneMapping);let mi=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=mi!==void 0?mi.length:0,Vt=It.get(H),Dh=m.state.lights;if(j===!0&&(ot===!0||S!==M)){let En=S===M&&H.id===V;Ot.setState(H,S,En)}let ge=!1;H.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Dh.state.version||Vt.outputColorSpace!==Et||F.isBatchedMesh&&Vt.batching===!1||!F.isBatchedMesh&&Vt.batching===!0||F.isInstancedMesh&&Vt.instancing===!1||!F.isInstancedMesh&&Vt.instancing===!0||F.isSkinnedMesh&&Vt.skinning===!1||!F.isSkinnedMesh&&Vt.skinning===!0||F.isInstancedMesh&&Vt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Vt.instancingColor===!1&&F.instanceColor!==null||Vt.envMap!==Ct||H.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ot.numPlanes||Vt.numIntersection!==Ot.numIntersection)||Vt.vertexAlphas!==zt||Vt.vertexTangents!==Lt||Vt.morphTargets!==Ut||Vt.morphNormals!==ye||Vt.morphColors!==gn||Vt.toneMapping!==Ie||mt.isWebGL2===!0&&Vt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Vt.__version=H.version);let wr=Vt.currentProgram;ge===!0&&(wr=oc(H,U,F));let kp=!1,zo=!1,Nh=!1,ke=wr.getUniforms(),Er=Vt.uniforms;if(rt.useProgram(wr.program)&&(kp=!0,zo=!0,Nh=!0),H.id!==V&&(V=H.id,zo=!0),kp||M!==S){ke.setValue(N,"projectionMatrix",S.projectionMatrix),ke.setValue(N,"viewMatrix",S.matrixWorldInverse);let En=ke.map.cameraPosition;En!==void 0&&En.setValue(N,ft.setFromMatrixPosition(S.matrixWorld)),mt.logarithmicDepthBuffer&&ke.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ke.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,zo=!0,Nh=!0)}if(F.isSkinnedMesh){ke.setOptional(N,F,"bindMatrix"),ke.setOptional(N,F,"bindMatrixInverse");let En=F.skeleton;En&&(mt.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),ke.setValue(N,"boneTexture",En.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ke.setOptional(N,F,"batchingTexture"),ke.setValue(N,"batchingTexture",F._matricesTexture,w));let Oh=k.morphAttributes;if((Oh.position!==void 0||Oh.normal!==void 0||Oh.color!==void 0&&mt.isWebGL2===!0)&&Gt.update(F,k,wr),(zo||Vt.receiveShadow!==F.receiveShadow)&&(Vt.receiveShadow=F.receiveShadow,ke.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Er.envMap.value=Ct,Er.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),zo&&(ke.setValue(N,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&k_(Er,Nh),pt&&H.fog===!0&&dt.refreshFogUniforms(Er,pt),dt.refreshMaterialUniforms(Er,H,Y,G,tt),Fs.upload(N,Fp(Vt),Er,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fs.upload(N,Fp(Vt),Er,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ke.setValue(N,"center",F.center),ke.setValue(N,"modelViewMatrix",F.modelViewMatrix),ke.setValue(N,"normalMatrix",F.normalMatrix),ke.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let En=H.uniformsGroups;for(let zh=0,H_=En.length;zh<H_;zh++)if(mt.isWebGL2){let Vp=En[zh];Jt.update(Vp,wr),Jt.bind(Vp,wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wr}function k_(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function V_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,k){It.get(S.texture).__webglTexture=U,It.get(S.depthTexture).__webglTexture=k;let H=It.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){let k=It.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){C=S,R=U,I=k;let H=!0,F=null,pt=!1,Mt=!1;if(S){let Ct=It.get(S);Ct.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Ct.__webglFramebuffer===void 0?w.setupRenderTarget(S):Ct.__hasExternalTextures&&w.rebindTextures(S,It.get(S.texture).__webglTexture,It.get(S.depthTexture).__webglTexture);let zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);let Lt=It.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?F=Lt[U][k]:F=Lt[U],pt=!0):mt.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?F=It.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[k]:F=Lt,E.copy(S.viewport),D.copy(S.scissor),X=S.scissorTest}else E.copy(J).multiplyScalar(Y).floor(),D.copy(Z).multiplyScalar(Y).floor(),X=nt;if(rt.bindFramebuffer(N.FRAMEBUFFER,F)&&mt.drawBuffers&&H&&rt.drawBuffers(S,F),rt.viewport(E),rt.scissor(D),rt.setScissorTest(X),pt){let Ct=It.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,k)}else if(Mt){let Ct=It.get(S.texture),zt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,k||0,zt)}V=-1},this.readRenderTargetPixels=function(S,U,k,H,F,pt,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){rt.bindFramebuffer(N.FRAMEBUFFER,Et);try{let Ct=S.texture,zt=Ct.format,Lt=Ct.type;if(zt!==Bn&&yt.convert(zt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Lt===qo&&(_t.has("EXT_color_buffer_half_float")||mt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Lt!==tr&&yt.convert(Lt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===Zi&&(mt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&k>=0&&k<=S.height-F&&N.readPixels(U,k,H,F,yt.convert(zt),yt.convert(Lt),pt)}finally{let Ct=C!==null?It.get(C).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(S,U,k=0){let H=Math.pow(2,-k),F=Math.floor(U.image.width*H),pt=Math.floor(U.image.height*H);w.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,S.x,S.y,F,pt),rt.unbindTexture()},this.copyTextureToTexture=function(S,U,k,H=0){let F=U.image.width,pt=U.image.height,Mt=yt.convert(k.format),Et=yt.convert(k.type);w.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,F,pt,Mt,Et,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,Mt,Et,U.image),H===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k,H,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,Et=S.max.z-S.min.z+1,Ct=yt.convert(H.format),zt=yt.convert(H.type),Lt;if(H.isData3DTexture)w.setTexture3D(H,0),Lt=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),Lt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Ut=N.getParameter(N.UNPACK_ROW_LENGTH),ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ie=N.getParameter(N.UNPACK_SKIP_ROWS),mi=N.getParameter(N.UNPACK_SKIP_IMAGES),fe=k.isCompressedTexture?k.mipmaps[F]:k.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Lt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,zt,fe.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Lt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,fe.data)):N.texSubImage3D(Lt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,zt,fe),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mi),F===0&&H.generateMipmaps&&N.generateMipmap(Lt),rt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){R=0,I=0,C=null,rt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===id?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===sl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Or:Ag}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Or?ze:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Fu=class extends Zo{};Fu.prototype.isWebGL1Renderer=!0;var Qc=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ci=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hg=new P,ug=new P,dg=new Me,fu=new $o,Rc=new Hs,Bu=class extends nn{constructor(t=new rn,e=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)hg.fromBufferAttribute(e,r-1),ug.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=hg.distanceTo(ug);t.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,t.ray.intersectsSphere(Rc)===!1)return;dg.copy(r).invert(),fu.copy(t.ray).applyMatrix4(dg);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){let p=Math.max(0,a.start),v=Math.min(x.count,a.start+a.count);for(let _=p,T=v-1;_<T;_+=f){let R=x.getX(_),I=x.getX(_+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,I),fu.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let V=t.ray.origin.distanceTo(d);V<t.near||V>t.far||e.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=p,T=v-1;_<T;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),fu.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},fg=new P,pg=new P,ir=class extends Bu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)fg.fromBufferAttribute(e,r),pg.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fg.distanceTo(pg);t.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ic=new P,Lc=new P,pu=new P,Pc=new Ur,zr=class extends rn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(Os*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let x=0;x<c;x+=3){a?(l[0]=a.getX(x),l[1]=a.getX(x+1),l[2]=a.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);let{a:y,b:m,c:p}=Pc;if(y.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Pc.getNormal(pu),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let _=(v+1)%3,T=u[v],R=u[_],I=Pc[h[v]],C=Pc[h[_]],V=`${T}_${R}`,M=`${R}_${T}`;M in d&&d[M]?(pu.dot(d[M].normal)<=s&&(f.push(I.x,I.y,I.z),f.push(C.x,C.y,C.z)),d[M]=null):V in d||(d[V]={index0:l[v],index1:l[_],normal:pu.clone()})}}for(let x in d)if(d[x]){let{index0:y,index1:m}=d[x];Ic.fromBufferAttribute(o,y),Lc.fromBufferAttribute(o,m),f.push(Ic.x,Ic.y,Ic.z),f.push(Lc.x,Lc.y,Lc.z)}this.setAttribute("position",new en(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var tl=class extends Ai{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var rr=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Uc(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function YE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ys=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=e[++i],t<r)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ku=class extends Ys{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vm,endingEnd:vm}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case bm:s=t,o=2*e-i;break;case Mm:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case bm:a=t,c=2*i-e;break;case Mm:a=1,c=i+r[1]-r[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-e)/(r-e),y=x*x,m=y*x,p=-d*m+2*d*y-d*x,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*x+1,_=(-1-f)*m+(1.5+f)*y+.5*x,T=f*m-f*y;for(let R=0;R!==o;++R)s[R]=p*a[h+R]+v*a[l+R]+_*a[c+R]+T*a[u+R];return s}},Vu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Hu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Uc(e,this.TimeBufferType),this.values=Uc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Uc(t.times,Array),values:Uc(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ku(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nc:e=this.InterpolantFactoryMethodDiscrete;break;case Oc:e=this.InterpolantFactoryMethodLinear;break;case Wh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nc;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&YE(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wh,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(r)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let x=0;x!==i;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[f+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Oc;var Fr=class extends Hn{};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Nc;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gu=class extends Hn{};Gu.prototype.ValueTypeName="color";var Wu=class extends Hn{};Wu.prototype.ValueTypeName="number";var Xu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(r-e),l=t*o;for(let h=l+o;l!==h;l+=4)nr.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ko=class extends Hn{InterpolantFactoryMethodLinear(t){return new Xu(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.DefaultInterpolation=Oc;Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Hn{};Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Nc;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var qu=class extends Hn{};qu.prototype.ValueTypeName="vector";var Yu=class{constructor(t,e,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null}}},$E=new Yu,$u=class{constructor(t){this.manager=t!==void 0?t:$E,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$u.DEFAULT_MATERIAL_NAME="__DEFAULT";var el=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var mu=new Me,mg=new P,gg=new P,ju=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;mg.setFromMatrixPosition(t.matrixWorld),e.position.copy(mg),gg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gg),e.updateMatrixWorld(),mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ju=class extends ju{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Ju}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},nl=class extends el{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var od="\\[\\]\\.:\\/",jE=new RegExp("["+od+"]","g"),ad="[^"+od+"]",JE="[^"+od.replace("\\.","")+"]",ZE=/((?:WC+[\/:])*)/.source.replace("WC",ad),KE=/(WCOD+)?/.source.replace("WCOD",JE),QE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ad),t1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ad),e1=new RegExp("^"+ZE+KE+QE+t1+"$"),n1=["material","materials","bones","map"],Zu=class{constructor(t,e,i){let r=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jE,"")}static parseTrackName(t){let e=e1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);n1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Zu;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DR=new Float32Array(1);var il=class{constructor(t,e,i=0,r=1/0){this.ray=new $o(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Ku(t,this,i,e),i.sort(xg),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Ku(t[r],this,i,e);return i.sort(xg),i}};function xg(n,t){return n.distance-t.distance}function Ku(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)Ku(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);var qe=document.getElementById("c"),xe={w:1,h:1,x:0,y:0},Ri=new Zo({canvas:qe,antialias:!0});Ri.setPixelRatio(Math.min(devicePixelRatio,2));Ri.shadowMap.enabled=!0;Ri.shadowMap.type=td;Ri.localClippingEnabled=!0;var Ee=new Qc;Ee.background=new Pt("#7aa0c4");var i1=Math.atan(1/Math.SQRT2),Ft={azim:Math.PI/4,elev:i1,zoom:80,target:new P(30,15,23)},jt={azim:Ft.azim,elev:Ft.elev,zoom:Ft.zoom,target:Ft.target.clone()},Vg=900,al=2e3,Wt=new qs(-1,1,1,-1,.1,4e3),Hg={uGround:{value:1}},cd=new be(new Xs(2,2),new Vn({uniforms:Hg,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));cd.frustumCulled=!1;cd.renderOrder=-1e9;Ee.add(cd);function Gg(){Hg.uGround.value=Math.max(0,Math.min(1,(Ft.elev+.05)/.1))}Ee.add(new nl(16777215,.62));var vn=new Qo(16777215,.78);vn.castShadow=!0;vn.shadow.mapSize.set(4096,4096);vn.shadow.normalBias=.15;vn.shadow.bias=-2e-4;Ee.add(vn);Ee.add(vn.target);var Wg=new Qo(16777215,.16);Wg.position.set(-6,5,-7);Ee.add(Wg);var ta={tail:0},Rn=()=>{ta.tail=30},ld=new P,cl=new P,kg=new Map;function Js(n){let t=kg.get(n);return t||(t=new Pt().setHex(n),kg.set(n,t)),t}var hd=new rr({vertexColors:!0,side:ln}),ud=new rr({vertexColors:!0,transparent:!0,opacity:.55,side:ln,depthWrite:!1});ud.shadowSide=zn;var Xg=new Gs({colorWrite:!1,side:ln}),Vr=new be(new Xs(8e3,8e3),new tl({opacity:.32}));Vr.rotation.x=-Math.PI/2;Vr.position.y=-.1;Vr.receiveShadow=!0;Vr.renderOrder=-1;Ee.add(Vr);var jn=new Si;Ee.add(jn);var Ii=new Si;Ee.add(Ii);var bn=new ir(new zr(new $n(1,1,1)),new Ci({color:10994876,depthTest:!1}));bn.visible=!1;bn.renderOrder=999;Ee.add(bn);var Hr=new ir(new rn,new Ci({vertexColors:!0,transparent:!0,depthTest:!1}));Hr.renderOrder=998;Hr.visible=!1;Ee.add(Hr);var hn=new il,Jn=new $t,sr=new P,ea=new P;var Gr=(n,t,e)=>n+65536+(t+65536)*131072+(e+65536)*131072*131072,Zn=(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z});function ee(n,t){let{x:e,y:i,z:r}=n;switch(t&3){case 1:return{x:-r,y:i,z:e};case 2:return{x:-e,y:i,z:-r};case 3:return{x:r,y:i,z:-e};default:return{x:e,y:i,z:r}}}var Li=(n,t)=>({rot:n.rot+t.rot&3,off:Zn(ee(t.off,n.rot),n.off)}),dd=n=>{let t=4-(n.rot&3)&3,e=ee(n.off,t);return{rot:t,off:{x:-e.x,y:-e.y,z:-e.z}}},fd=n=>n.slice(1).reduce((t,e)=>Li(t,{off:e.pos,rot:e.rot}),{off:{x:0,y:0,z:0},rot:0}),Pi=n=>"#"+(n&16777215).toString(16).padStart(6,"0"),or=n=>n<0?-Math.round(-n):Math.round(n),r1=Math.floor(Math.random()*4294967296).toString(36),pd=1,Zs=()=>`n${pd++}.${r1}`,ll=()=>pd,hl=n=>{pd=n};var he=(n,t,e,i,r,s,a)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s,c:a}),na=(n,t,e,i)=>t>=n.x0&&t<n.x1&&e>=n.y0&&e<n.y1&&i>=n.z0&&i<n.z1,ia=(n,t,e,i)=>({x0:n.x0+t,y0:n.y0+e,z0:n.z0+i,x1:n.x1+t,y1:n.y1+e,z1:n.z1+i,c:n.c});function s1(n,t,e){let i=Math.max(n.x0,t.x0),r=Math.max(n.y0,t.y0),s=Math.max(n.z0,t.z0),a=Math.min(n.x1,t.x1),o=Math.min(n.y1,t.y1),c=Math.min(n.z1,t.z1);if(i>=a||r>=o||s>=c){e.push(n);return}let l=n.c;n.x0<i&&e.push({...n,x1:i}),a<n.x1&&e.push({...n,x0:a}),n.y0<r&&e.push({x0:i,y0:n.y0,z0:n.z0,x1:a,y1:r,z1:n.z1,c:l}),o<n.y1&&e.push({x0:i,y0:o,z0:n.z0,x1:a,y1:n.y1,z1:n.z1,c:l}),n.z0<s&&e.push({x0:i,y0:r,z0:n.z0,x1:a,y1:o,z1:s,c:l}),c<n.z1&&e.push({x0:i,y0:r,z0:c,x1:a,y1:o,z1:n.z1,c:l})}function Wr(n,t){let e=[];for(let i of n)s1(i,t,e);return e}function o1(n,t){for(let e=0;e<n.length;){let i=n[e];if(i.c!==t.c){e++;continue}let r=i.y0===t.y0&&i.y1===t.y1,s=i.z0===t.z0&&i.z1===t.z1,a=i.x0===t.x0&&i.x1===t.x1;if(r&&s&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(a&&s&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(a&&r&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{e++;continue}n.splice(e,1),e=0}n.push(t)}function md(n,t,e){let i=Wr(n,t);return o1(i,{...t,c:e}),i}function qg(n,t,e,i,r){let s=-1;for(let h=0;h<n.length;h++)if(na(n[h],t,e,i)){s=h;break}if(s===-1)return null;let a=n[s].c;if(a===r)return null;let o=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,f=h.y0<u.y1&&u.y0<h.y1,x=h.z0<u.z1&&u.z0<h.z1;return f&&x&&(h.x1===u.x0||u.x1===h.x0)||d&&x&&(h.y1===u.y0||u.y1===h.y0)||d&&f&&(h.z1===u.z0||u.z1===h.z0)},c=new Set([s]),l=[s];for(;l.length;){let h=n[l.pop()];for(let u=0;u<n.length;u++)!c.has(u)&&n[u].c===a&&o(h,n[u])&&(c.add(u),l.push(u))}return n.map((h,u)=>c.has(u)?{...h,c:r}:h)}function ra(n,t){let e=[];for(let i of n){let r=Math.max(i.x0,t.x0),s=Math.max(i.y0,t.y0),a=Math.max(i.z0,t.z0),o=Math.min(i.x1,t.x1),c=Math.min(i.y1,t.y1),l=Math.min(i.z1,t.z1);r<o&&s<c&&a<l&&e.push({x0:r,y0:s,z0:a,x1:o,y1:c,z1:l,c:i.c})}return e}function Yg(n,t){for(let e of n){let i=(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0);t.set(e.c,(t.get(e.c)||0)+i)}}function on(n,t){for(let e of n)e.x0<t.min.x&&(t.min.x=e.x0),e.y0<t.min.y&&(t.min.y=e.y0),e.z0<t.min.z&&(t.min.z=e.z0),e.x1>t.max.x&&(t.max.x=e.x1),e.y1>t.max.y&&(t.max.y=e.y1),e.z1>t.max.z&&(t.max.z=e.z1)}function Kn(n,t,e){let i=ee({x:n.x0,y:n.y0,z:n.z0},t),r=ee({x:n.x1-1,y:n.y1-1,z:n.z1-1},t);return{x0:Math.min(i.x,r.x)+e.x,y0:Math.min(i.y,r.y)+e.y,z0:Math.min(i.z,r.z)+e.z,x1:Math.max(i.x,r.x)+e.x+1,y1:Math.max(i.y,r.y)+e.y+1,z1:Math.max(i.z,r.z)+e.z+1,c:n.c}}var a1=16,sn=n=>Math.floor(n/a1);function $g(n){if(!n.length)return()=>!1;let t=1/0,e=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let y of n)y.x0<t&&(t=y.x0),y.y0<e&&(e=y.y0),y.z0<i&&(i=y.z0),y.x1>r&&(r=y.x1),y.y1>s&&(s=y.y1),y.z1>a&&(a=y.z1);let o=sn(t),c=sn(e),l=sn(i),h=sn(r-1)-o+1,u=sn(s-1)-c+1,d=sn(a-1)-l+1,f=Array.from({length:h*u*d},()=>[]),x=(y,m,p)=>((y-o)*u+(m-c))*d+(p-l);for(let y of n)for(let m=sn(y.x0);m<=sn(y.x1-1);m++)for(let p=sn(y.y0);p<=sn(y.y1-1);p++)for(let v=sn(y.z0);v<=sn(y.z1-1);v++)f[x(m,p,v)].push(y);return(y,m,p)=>{let v=sn(y),_=sn(m),T=sn(p);if(v<o||_<c||T<l||v-o>=h||_-c>=u||T-l>=d)return!1;for(let R of f[x(v,_,T)])if(na(R,y,m,p))return!0;return!1}}var jg=(n,t,e,i)=>n.some(r=>na(r,t,e,i));function sa(n,t,e,i,r){if(!n.length||!t.length)return!1;let s={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};on(n,s);let a=s.min.x+e,o=s.min.y+i,c=s.min.z+r,l=s.max.x+e,h=s.max.y+i,u=s.max.z+r;for(let d of t)if(a<d.x1&&d.x0<l&&o<d.y1&&d.y0<h&&c<d.z1&&d.z0<u&&n.some(f=>f.x0+e<d.x1&&d.x0<f.x1+e&&f.y0+i<d.y1&&d.y0<f.y1+i&&f.z0+r<d.z1&&d.z0<f.z1+r))return!0;return!1}var c1=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],Kg=3,oa=2,ar=Kg*oa,Jg=.5,aa=class{a=new Float32Array(4096);n=0;push3(t,e,i){if(this.n+3>this.a.length){let r=new Float32Array(this.a.length*2);r.set(this.a),this.a=r}this.a[this.n++]=t,this.a[this.n++]=e,this.a[this.n++]=i}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}};function Zg(n,t,e,i,r,s){let a=2*oa+1;for(let o=0;o<e;o++){let c=o*r,l=0;for(let h=0;h<=oa&&h<i;h++)l+=n[c+h*s];for(let h=0;h<i;h++){t[c+h*s]=l/a;let u=h+oa+1,d=h-oa;u<i&&(l+=n[c+u*s]),d>=0&&(l-=n[c+d*s])}}}function ul(n,t,e){let i=new aa,r=new aa,s=new aa,a=n.map(v=>[v.x0,v.y0,v.z0]),o=n.map(v=>[v.x1,v.y1,v.z1]),c=[0,1,2].map(()=>new Map),l=[0,1,2].map(()=>new Map),h=(v,_,T)=>{let R=v.get(_);R?R.push(T):v.set(_,[T])};for(let v=0;v<n.length;v++)for(let _=0;_<3;_++)h(c[_],a[v][_],v),h(l[_],o[v][_],v);let u=[],d=16,f=v=>Math.floor(v/d),x=[],y=[0,0,0],m=[0,0,0];if(e&&n.length){let v=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let T=0;T<n.length;T++)for(let R=0;R<3;R++)a[T][R]<v[R]&&(v[R]=a[T][R]),o[T][R]>_[R]&&(_[R]=o[T][R]);m=v.map(f),y=_.map((T,R)=>f(T-1)-m[R]+1),x=Array.from({length:y[0]*y[1]*y[2]},()=>[]);for(let T=0;T<n.length;T++)for(let R=f(a[T][0]);R<=f(o[T][0]-1);R++)for(let I=f(a[T][1]);I<=f(o[T][1]-1);I++)for(let C=f(a[T][2]);C<=f(o[T][2]-1);C++)x[((R-m[0])*y[1]+(I-m[1]))*y[2]+(C-m[2])].push(T)}for(let v=0;v<n.length;v++){let _=t(n[v].c),T=_.r,R=_.g,I=_.b,C=a[v],V=o[v];for(let M of c1){let{a:E,u:D,v:X}=M,$=M.hi?V[E]:C[E],A=M.hi?$:$-1,O=[];for(let tt of(M.hi?c:l)[E].get($)??u){let st=Math.max(a[tt][D],C[D]),at=Math.min(o[tt][D],V[D]),ft=Math.max(a[tt][X],C[X]),gt=Math.min(o[tt][X],V[X]);st<at&&ft<gt&&O.push([st,ft,at,gt])}let G=[[C[D],C[X],V[D],V[X]]];for(let tt of O){let st=[];for(let at of G){let ft=Math.max(at[0],tt[0]),gt=Math.max(at[1],tt[1]),vt=Math.min(at[2],tt[2]),N=Math.min(at[3],tt[3]);if(ft>=vt||gt>=N){st.push(at);continue}at[0]<ft&&st.push([at[0],at[1],ft,at[3]]),vt<at[2]&&st.push([vt,at[1],at[2],at[3]]),at[1]<gt&&st.push([ft,at[1],vt,gt]),N<at[3]&&st.push([ft,N,vt,at[3]])}if(G=st,!G.length)break}let Y=[0,0,0];Y[E]=$;let q=null,W=0,J=0,Z=0,nt=()=>{W=C[D]-ar,J=C[X]-ar;let tt=V[D]-C[D]+2*ar+1;Z=V[X]-C[X]+2*ar+1;let st=new Float32Array(tt*Z),at=f(A)-m[E],ft=!1;if(at>=0&&at<y[E]){let vt=[0,0,0];vt[E]=at;let N=Math.min(f(W+tt-1)-m[D],y[D]-1),ce=Math.min(f(J+Z-1)-m[X],y[X]-1);for(let _t=Math.max(f(W)-m[D],0);_t<=N;_t++){vt[D]=_t;for(let mt=Math.max(f(J)-m[X],0);mt<=ce;mt++){vt[X]=mt;for(let rt of x[(vt[0]*y[1]+vt[1])*y[2]+vt[2]]){if(a[rt][E]>A||o[rt][E]<=A)continue;let ne=Math.max(a[rt][D],W),It=Math.min(o[rt][D],W+tt),w=Math.max(a[rt][X],J),b=Math.min(o[rt][X],J+Z);for(let z=ne;z<It;z++)st.fill(1,(z-W)*Z+(w-J),(z-W)*Z+(b-J));ft=ft||ne<It&&w<b}}}}if(!ft)return q=st;let gt=new Float32Array(tt*Z);for(let vt=0;vt<Kg;vt++)Zg(st,gt,tt,Z,Z,1),Zg(gt,st,Z,tt,1,Z);return q=st},B=(tt,st)=>{if(!e)return 1;let ft=(q??nt())[(tt-W)*Z+(st-J)];return Jg+(1-Jg)*(1-ft)},j=(tt,st,at)=>{Y[D]=tt,Y[X]=st,i.push3(Y[0],Y[1],Y[2]),r.push3(M.n[0],M.n[1],M.n[2]),s.push3(T*at,R*at,I*at)},ot=(tt,st,at,ft)=>{let gt=B(tt,st),vt=B(at,st),N=B(at,ft),ce=B(tt,ft);j(tt,st,gt),j(at,st,vt),j(at,ft,N),j(tt,st,gt),j(at,ft,N),j(tt,ft,ce)};for(let tt of G){let[st,at,ft,gt]=tt;if(!e){ot(st,at,ft,gt);continue}let vt=st+ar,N=ft-ar,ce=at+ar,_t=gt-ar;if(vt>=N||ce>=_t){for(let mt=st;mt<ft;mt++)for(let rt=at;rt<gt;rt++)ot(mt,rt,mt+1,rt+1);continue}for(let mt=st;mt<ft;mt++){for(let rt=at;rt<ce;rt++)ot(mt,rt,mt+1,rt+1);for(let rt=_t;rt<gt;rt++)ot(mt,rt,mt+1,rt+1)}for(let mt=ce;mt<_t;mt++){for(let rt=st;rt<vt;rt++)ot(rt,mt,rt+1,mt+1);for(let rt=N;rt<ft;rt++)ot(rt,mt,rt+1,mt+1)}ot(vt,ce,N,_t)}}}if(!i.length)return null;let p=new rn;return p.setAttribute("position",new Xe(i.trimmed(),3)),p.setAttribute("normal",new Xe(r.trimmed(),3)),p.setAttribute("color",new Xe(s.trimmed(),3)),p}var dl=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],Qg={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},Xr=()=>({type:"object",id:Zs(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),Ui=(n="")=>({type:"scene",id:Zs(),name:n,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function cr(n){let t={id:Zs(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...t,boxes:n.boxes.map(e=>({...e}))}:{type:"scene",...t,children:n.children.map(cr)}}var Di=n=>g.context.children.find(t=>t.id===n);function Qn(n,t=g.root,e=[]){if(e.push(t),t===n)return e.slice();if(t.type==="scene")for(let i of t.children){let r=Qn(n,i,e);if(r)return r}return e.pop(),null}function ti(n,t=g.root){if(t.id===n)return t;if(t.type==="scene")for(let e of t.children){let i=ti(n,e);if(i)return i}return null}function In(n){let t=Qn(n);return t&&t.length>1?t[t.length-2]:null}function qr(n,t){return n===t?!0:n.type!=="scene"?!1:n.children.some(e=>qr(e,t))}var Ks=()=>fd(g.path),lr=n=>fd(Qn(n)||[g.root]),Ue=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),ei=n=>n.max.x<n.min.x;function ca(n,t,e,i){if(n.type==="object")for(let r of n.boxes)i.push(Kn(r,e,t));else for(let r of n.children)ca(r,Zn(t,ee(r.pos,e)),e+r.rot&3,i);return i}function ni(n,t,e,i){if(n.type==="object")on(n.boxes.map(r=>Kn(r,e,t)),i);else for(let r of n.children)ni(r,Zn(t,ee(r.pos,e)),e+r.rot&3,i);return i}function gd(n,t,e){e.length=0;let i=Math.max(1,Math.ceil((t-n)/6));for(let r=0;r<=i;r++)e.push(n+(t-n)*r/i)}var xd=(n,t)=>Math.max(1,Math.ceil((t-n)/6))+1,ex=n=>xd(n.x0,n.x1)*xd(n.y0,n.y1)*xd(n.z0,n.z1);function Yr(n,t,e,i){if(ex(n)<=1536){e.push(n),i.push(t);return}let r=n.x1-n.x0,s=n.y1-n.y0,a=n.z1-n.z0;if(r>=s&&r>=a){let o=n.x0+(r>>1);Yr({...n,x1:o},t,e,i),Yr({...n,x0:o},t,e,i)}else if(s>=a){let o=n.y0+(s>>1);Yr({...n,y1:o},t,e,i),Yr({...n,y0:o},t,e,i)}else{let o=n.z0+(a>>1);Yr({...n,z1:o},t,e,i),Yr({...n,z0:o},t,e,i)}}function l1(n,t,e,i){for(let r=0;r<n.length;r++){let s=n[r];if(s[0]<=t&&s[1]<=e&&s[2]<=i)return}for(let r=n.length-1;r>=0;r--){let s=n[r];t<=s[0]&&e<=s[1]&&i<=s[2]&&n.splice(r,1)}n.push([t,e,i])}function h1(n,t,e,i,r,s,a,o,c,l){let h=n.length,u=new Float64Array(h),d=new Float64Array(h),f=new Float64Array(h),x=new Float64Array(h),y=new Float64Array(h),m=new Float64Array(h),p=1/0,v=-1/0,_=1/0,T=-1/0,R=1/0,I=-1/0;for(let $=0;$<h;$++){let A=n[$];s.x>=0?(u[$]=A.x0,d[$]=A.x1):(u[$]=A.x1,d[$]=A.x0),s.y>=0?(f[$]=A.y0,x[$]=A.y1):(f[$]=A.y1,x[$]=A.y0),s.z>=0?(y[$]=A.z0,m[$]=A.z1):(y[$]=A.z1,m[$]=A.z0),A.x0<p&&(p=A.x0),A.x1>v&&(v=A.x1),A.y0<_&&(_=A.y0),A.y1>T&&(T=A.y1),A.z0<R&&(R=A.z0),A.z1>I&&(I=A.z1)}let C=s.x!==0?1/s.x:0,V=s.y!==0?1/s.y:0,M=s.z!==0?1/s.z:0,E=[],D=[],X=[];for(let $=i;$<r;$++){let A=t[$];if((s.x>0?v<=A.x0:s.x<0?p>=A.x1:v<=A.x0||p>=A.x1)||(s.y>0?T<=A.y0:s.y<0?_>=A.y1:T<=A.y0||_>=A.y1)||(s.z>0?I<=A.z0:s.z<0?R>=A.z1:I<=A.z0||R>=A.z1))continue;let O=e[$];gd(A.x0,A.x1,E),gd(A.y0,A.y1,D),gd(A.z0,A.z1,X);for(let G of E)for(let Y of D)for(let q of X){let W=1/0;if(C!==0&&(W=((s.x>0?O.x1:O.x0)-G)*C),V!==0){let nt=((s.y>0?O.y1:O.y0)-Y)*V;nt<W&&(W=nt)}if(M!==0){let nt=((s.z>0?O.z1:O.z0)-q)*M;nt<W&&(W=nt)}let J=1/0,Z=!1;for(let nt=0;nt<h;nt++){let B=-1/0,j=1/0;if(C===0){if(G<=u[nt]||G>=d[nt])continue}else{let ot=(u[nt]-G)*C,tt=(d[nt]-G)*C;ot>B&&(B=ot),tt<j&&(j=tt)}if(V===0){if(Y<=f[nt]||Y>=x[nt])continue}else{let ot=(f[nt]-Y)*V,tt=(x[nt]-Y)*V;ot>B&&(B=ot),tt<j&&(j=tt)}if(M===0){if(q<=y[nt]||q>=m[nt])continue}else{let ot=(y[nt]-q)*M,tt=(m[nt]-q)*M;ot>B&&(B=ot),tt<j&&(j=tt)}if(!(B>=j)){if(B>W+.001)B<J&&(J=B);else if(j>W+.001){Z=!0;break}}}Z||J===1/0||l1(l,Math.floor((G+J*s.x)*a),Math.floor((Y+J*s.y)*o),Math.floor((q+J*s.z)*c))}}}function tx(n,t){let e=[0],i=0;for(;i<n.length;){let s=n[i][t];do i++;while(i<n.length&&n[i][t]===s);e.push(i)}if(e.length<=48)return e;let r=new Set;for(let s=0;s<48;s++)r.add(e[Math.floor(s*(e.length-1)/47)]);return[...r]}function u1(n,t,e,i,r){let s={x:1/0,y:1/0,z:1/0};if(!n.length||!t.length)return s;t.sort((d,f)=>d[0]-f[0]||d[1]-f[1]||d[2]-f[2]);let a=[];t:for(let d of t){for(let f of a)if(f[1]<=d[1]&&f[2]<=d[2])continue t;a.push(d)}let o=n.map(d=>[Math.min(d.x0*e,d.x1*e),Math.max(d.x0*e,d.x1*e),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*r,d.z1*r),Math.max(d.z0*r,d.z1*r)]),c=(d,f,x)=>{let y=0;for(let m of o){let p=Math.min(m[1],d)-m[0];if(p<=0)continue;let v=Math.min(m[3],f)-m[2];if(v<=0)continue;let _=Math.min(m[5],x)-m[4];_>0&&(y+=p*v*_)}return y},l=a.slice().sort((d,f)=>f[0]-d[0]),h=-1,u={...s};for(let d of tx(l,0)){let f=d===0?1/0:l[d-1][0]-.01,x=l.slice(d).sort((m,p)=>p[2]-m[2]),y=new Array(x.length+1).fill(1/0);for(let m=x.length-1;m>=0;m--)y[m]=Math.min(y[m+1],x[m][1]);for(let m of tx(x,2)){let p=m===0?1/0:x[m-1][2]-.01,v=y[m]===1/0?1/0:y[m]-.01,_=c(f,v,p);_>h&&(h=_,u.x=f,u.y=v,u.z=p)}}return u}function nx(n,t,e,i,r,s){let a=[],o=[];for(let y of t)Yr(y,y,a,o);let c=[],l=0,h=0;for(let y=0;y<a.length;y++)h+=ex(a[y]),(h>=1536||y===a.length-1)&&(c.push([l,y+1]),l=y+1,h=0);let u=[];for(let y=0;y<n.length;y++)for(let m=0;m<e.length;m++)for(let p=0;p<c.length;p++)u.push([y,m,p]);let d=n.map(()=>[]),f=0,x=null;return{step(y){for(;f<u.length;){let[m,p,v]=u[f++],[_,T]=c[v];if(h1(n[m],a,o,_,T,e[p],i,r,s,d[m]),f<u.length&&y())return!1}return!0},cuts(){return x??=n.map((y,m)=>u1(y,d[m],i,r,s)),x}}}function fl(n,t){Jn.x=(n-xe.x)/xe.w*2-1,Jn.y=-((t-xe.y)/xe.h)*2+1}var yd=()=>g.pickMeshes.length?(hn.setFromCamera(Jn,Wt),hn.intersectObjects(g.pickMeshes,!1)[0]??null):null;function _d(){let n=yd();return n?n.object.userData.childId??null:null}var ix=new Ge(new P(0,1,0),0);function la(n){return hn.setFromCamera(Jn,Wt),ix.constant=-n,hn.ray.intersectPlane(ix,sr)?{x:Math.floor(sr.x),y:n,z:Math.floor(sr.z)}:null}var ox=(n,t)=>({x:Math.floor(n.x-t.x*.5),y:Math.floor(n.y-t.y*.5),z:Math.floor(n.z-t.z*.5)}),d1=new P;function $r(){let n=yd();if(!n)return null;let t=g.editXform.off,e=ee({x:n.point.x-t.x,y:n.point.y-t.y,z:n.point.z-t.z},-g.editXform.rot),i={x:0,y:1,z:0};if(n.face){let s=d1.copy(n.face.normal).transformDirection(n.object.matrixWorld);i=ee({x:s.x,y:s.y,z:s.z},-g.editXform.rot)}let r=ox(e,i);return{cell:r,addCell:{x:r.x+Math.round(i.x),y:r.y+Math.round(i.y),z:r.z+Math.round(i.z)}}}function ax(){let n=yd();return n?ox(n.point,n.face?n.face.normal:{x:0,y:1,z:0}):la(0)}function jr(n){let t=la(n+g.editXform.off.y);if(!t)return null;let e=ee({x:t.x-g.editXform.off.x,y:0,z:t.z-g.editXform.off.z},-g.editXform.rot);return{x:Math.round(e.x),y:n,z:Math.round(e.z)}}var rx=(n,t)=>({x:n===0?t:0,y:n===1?t:0,z:n===2?t:0}),sx=new Ge;function cx(n,t){let e=g.editXform.off,i=g.editXform.rot,r=ee(rx(n,1),i),s=Zn(ee(rx(n,t),i),e);if(hn.setFromCamera(Jn,Wt),sx.setComponents(r.x,r.y,r.z,-(r.x*s.x+r.y*s.y+r.z*s.z)),!hn.ray.intersectPlane(sx,sr))return null;let a=ee({x:sr.x-e.x,y:sr.y-e.y,z:sr.z-e.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};return n===0?o.x=t:n===1?o.y=t:o.z=t,o}var Ni=(n,t,e)=>{let i=ee({x:n,y:t,z:e},g.editXform.rot);return new P(i.x+g.editXform.off.x,i.y+g.editXform.off.y,i.z+g.editXform.off.z)};function vd(n=$r()){return g.tool==="add"?n?n.addCell:jr(0):n?n.cell:null}var f1=new Pt(10994876),p1=new Pt(6055805),m1=new Pt(13619151),ha=null,pl=[],bd=()=>{ha=null};function ri(){ii=null,g.liveMeas=null,hr()}function Md(){if(ha)return ha;let n=[],t;g.editObject?(n.push(...g.editObject.boxes),t=Ni):(ur(g.root,{x:0,y:0,z:0},0,null,null,(o,c,l,h)=>{if(h)for(let u of o.boxes)n.push(Kn(u,l,c))}),t=(o,c,l)=>new P(o,c,l));let e=Ue();on(n,e);let i=n.length===0,r={x:e.min.x,y:e.min.y,z:e.min.z},s={x:e.max.x-1,y:e.max.y-1,z:e.max.z-1};return ha={has:n.length>64?$g(n):(o,c,l)=>jg(n,o,c,l),mn:r,mx:s,toW:t,empty:i},ha}function lx(){let n=Md();if(n.empty)return null;let t=null;if(g.editObject){let e=$r();t=e?{...e.cell}:jr(0)}else t=ax();return t?{x:Math.max(n.mn.x,Math.min(n.mx.x,t.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,t.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,t.z))}:null}function g1(n){let t=Md(),e=["x","y","z"],i=[];for(let r=0;r<3;r++){let s=e[r],a=e[(r+1)%3],o=e[(r+2)%3],c=t.mn[s],l=t.mx[s],h=[n.x,n.y,n.z],u=f=>(h[r]=f,t.has(h[0],h[1],h[2])),d=c;for(;d<=l;){let f=u(d),x=d;for(;x+1<=l&&u(x+1)===f;)x++;let y=m=>{let p={};return p[s]=m,p[a]=n[a]+.5,p[o]=n[o]+.5,t.toW(p.x,p.y,p.z)};i.push({a:y(d),b:y(x+1),mid:y((d+x+1)/2),len:x-d+1,filled:f}),d=x+1}}return i}function Sd(n,t,e,i,r,s,a,o,c=!1){let l=i-n,h=r-t,u=s-e,d=(f,x,y,m,p,v,_,T)=>({a:a(f,x,y),b:a(m,p,v),mid:a((f+m)/2,(x+p)/2,(y+v)/2),len:_,filled:!0,nolabel:!T,gray:c});return[d(n,t,e,i,t,e,l,l>=o),d(n,t,e,n,t,s,u,u>=o),d(n,t,e,n,r,e,h,h>=o),d(i,t,e,i,t,s,0,!1),d(n,t,s,i,t,s,0,!1),d(n,r,e,i,r,e,0,!1),d(n,r,e,n,r,s,0,!1),d(i,r,e,i,r,s,0,!1),d(n,r,s,i,r,s,0,!1),d(i,t,e,i,r,e,0,!1),d(n,t,s,n,r,s,0,!1),d(i,t,s,i,r,s,0,!1)]}var ii=null;function hx(){let n=lx();n&&(ii=ii&&ii.x===n.x&&ii.y===n.y&&ii.z===n.z?null:n,ml())}function ux(){ii&&(ii=null,ml())}function x1(n,t){let e=Md();return Sd(Math.min(n.x,t.x),Math.min(n.y,t.y),Math.min(n.z,t.z),Math.max(n.x,t.x)+1,Math.max(n.y,t.y)+1,Math.max(n.z,t.z)+1,e.toW,1,!0)}function ml(){let n=lx();g.liveMeas=n?ii?x1(ii,n):g1(n):null,hr()}function hr(){let n=document.getElementById("measure");n.innerHTML="",pl=[];let t=[],e=[];if(g.liveMeas)for(let r of g.liveMeas){let s=r.gray?m1:r.filled?f1:p1;if(t.push(r.a.x,r.a.y,r.a.z,r.b.x,r.b.y,r.b.z),e.push(s.r,s.g,s.b,s.r,s.g,s.b),r.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(r.filled?"":" empty"),a.textContent=String(r.len),n.appendChild(a),pl.push({el:a,w:r.mid})}Hr.geometry.dispose();let i=new rn;i.setAttribute("position",new en(t,3)),i.setAttribute("color",new en(e,3)),Hr.geometry=i,Hr.visible=t.length>0}function dx(){if(pl.length)for(let n of pl){if(ea.copy(n.w).project(Wt),ea.z>1){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=(ea.x*.5+.5)*xe.w+"px",n.el.style.top=(-ea.y*.5+.5)*xe.h+"px"}}var wd=new P(40,150,30).normalize();function y1(n){if(ei(n))return;let t=(n.min.x+n.max.x)/2,e=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,r=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,s=r+130;vn.position.set(t+wd.x*s,e+wd.y*s,i+wd.z*s),vn.target.position.set(t,e,i),vn.target.updateMatrixWorld();let a=vn.shadow.camera;a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=Math.max(1,s-r-20),a.far=s+r+20,a.updateProjectionMatrix(),vn.shadow.normalBias=4*r/vn.shadow.mapSize.x}var Gn=[];function _1(){let n=new Set;for(let t of Gn){Ee.remove(t);let e=t.geometry;e&&!n.has(e)&&(e.dispose(),n.add(e))}Gn=[];for(let t of Ad)t.dispose();Ad=[],no=[],pr=null,dr.vox=-1,gl=[],Id(),jn.clear(),eo&&(cancelAnimationFrame(eo),eo=0),Mn=null}var gl=[],Mn=null,eo=0,Qs=null;function Id(){Qs&&(jn.remove(Qs),Qs.geometry.dispose(),Qs.material.dispose(),Qs=null)}function Ed(n,t,{tier:e="opaque",childId:i}={}){if(!n.length)return null;let r=e!=="opaque",s=ul(n,t,!r);if(!s)return null;let a=new be(s,e==="temp"?ud:hd);if(a.castShadow=!0,a.receiveShadow=!0,Ee.add(a),Gn.push(a),r){a.renderOrder=2;let o=new be(s,Xg);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,Ee.add(o),Gn.push(o)}return i!=null&&(a.userData.childId=i,g.pickMeshes.push(a),(g.childMeshes[i]||(g.childMeshes[i]=[])).push(a)),a}var no=[],Ad=[],Cd=[],dr={q:-1,b:-1,vox:-1},v1=6707534;function fx(n){let t=ul(n,Js,!0);if(!t)return;let e=[new Ge(new P(-1,0,0),1e9),new Ge(new P(0,-1,0),1e9),new Ge(new P(0,0,-1),1e9)],i=new rr({vertexColors:!0,side:ln,clippingPlanes:e,clipShadows:!0}),r=new be(t,i);r.castShadow=r.receiveShadow=!0,Ee.add(r),Gn.push(r);let s=new rr({color:v1,side:We,clippingPlanes:e}),a=new be(t,s);Ee.add(a),Gn.push(a),Ad.push(i,s);let o=Ue();on(n,o),no.push({boxes:n,aabb:o,planes:e})}var b1=8,px=6,fr=[-90,-60,-30,0,30,60,90],to=Math.PI/180,M1=5,pr=null;function S1(n,t){let e=n<=1?1:-1,i=n===0||n===3?1:-1,r=t>=3?1:-1,s=(c,l)=>{let h=Math.cos(l*to);return{x:h*Math.sin(c*to),y:Math.sin(l*to),z:h*Math.cos(c*to)}},a=[s(n*90,fr[t]),s(n*90,fr[t+1]),s(n*90+90,fr[t]),s(n*90+90,fr[t+1]),s(n*90+45,(fr[t]+fr[t+1])/2)],o=Cd;g.editObject&&(o=o.concat(g.editObject.boxes.map(c=>Kn(c,g.editXform.rot,g.editXform.off)))),pr={job:nx(no.map(c=>c.boxes),o,a,e,r,i),sgx:e,sgy:r,sgz:i}}function gx(){if(!no.length){pr=null;return}let n=(Ft.azim/to%360+360)%360,t=Ft.elev/to,{q:e,b:i}=dr,r=e*90+45;if((e<0||Math.abs(((n-r)%360+540)%360-180)>45+b1)&&(e=Math.min(3,Math.floor(n/90))),(i<0||t<fr[i]-px||t>fr[i+1]+px)&&(i=Math.max(0,Math.min(5,Math.floor((t+90)/30)))),(e!==dr.q||i!==dr.b||g.voxVer!==dr.vox)&&(dr.q=e,dr.b=i,dr.vox=g.voxVer,S1(e,i)),!pr)return;let s=performance.now();if(!pr.job.step(()=>performance.now()-s>M1)){Rn();return}let{sgx:a,sgy:o,sgz:c}=pr,l=pr.job.cuts();pr=null;for(let h=0;h<no.length;h++){let u=no[h],d=l[h],f=(x,y,m,p)=>Math.min(p,(x>0?m:-y)+4);u.planes[0].normal.set(-a,0,0),u.planes[0].constant=f(a,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-o,0),u.planes[1].constant=f(o,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-c),u.planes[2].constant=f(c,u.aabb.min.z,u.aabb.max.z,d.z)}Rn()}function ur(n,t,e,i,r,s){if(n===g.editObject||n.vis==="hidden")return;let a=r??(n.vis==="deemphasized"?n.id:null);if(n.type==="object")s(n,t,e,i,a);else for(let o of n.children)ur(o,Zn(t,ee(o.pos,e)),e+o.rot&3,n===g.context?o.id:i,a,s)}var Td=(n,t)=>{let e=n.get(t);return e||n.set(t,e=[]),e},mx=(n,t,e,i)=>{for(let r of n.boxes)i.push(Kn(r,e,t));return i};function xx(){let{off:n,rot:t}=g.editXform;if(jn.position.set(n.x,n.y,n.z),jn.rotation.set(0,-t*Math.PI/2,0),jn.updateMatrixWorld(!0),Mn){jn.remove(Mn),Mn.geometry.dispose();let s=Gn.indexOf(Mn);s>=0&&Gn.splice(s,1)}let e=g.sel3d,i=e&&e.lifted?g.editObject.boxes.concat(e.boxes):g.editObject.boxes,r=ul(i,Js,!0);Mn=r?new be(r,hd):null,Mn&&(Mn.castShadow=Mn.receiveShadow=!0,jn.add(Mn),Gn.push(Mn)),g.pickMeshes=Mn?[Mn,...gl]:[...gl],e?w1(e.region):Id()}function w1(n){Id();let t=new $n(n.x1-n.x0,n.y1-n.y0,n.z1-n.z0),e=new ir(new zr(t),new Ci({color:16766073,depthTest:!1}));t.dispose(),e.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2),e.renderOrder=1e3,jn.add(e),Qs=e}function mr(){eo||(eo=requestAnimationFrame(()=>{eo=0,xx(),Rn()}))}function xl(){g.voxVer++,bd(),mr()}function Ld(n,t){g.editObject.boxes=md(g.editObject.boxes,n,t),xl()}function ua(n){g.editObject.boxes=Wr(g.editObject.boxes,n),xl()}function yl(n){let t=g.editObject.boxes;for(let e of n)t=md(t,e,e.c);g.editObject.boxes=t,xl()}function yx(n,t){let e=qg(g.editObject.boxes,n.x,n.y,n.z,t);return e?(g.editObject.boxes=e,xl(),!0):!1}function _x(){if(!Gn.length)return null;hn.setFromCamera(Jn,Wt);let n=hn.intersectObjects(Gn,!1)[0];if(!n)return null;let t=hn.ray.direction,e=Math.floor(n.point.x+t.x*.5),i=Math.floor(n.point.y+t.y*.5),r=Math.floor(n.point.z+t.z*.5),s=(o,c,l)=>{let h=ee({x:e-c.x,y:i-c.y,z:r-c.z},-l);for(let u of o)if(na(u,h.x,h.y,h.z))return u.c;return null};if(g.editObject){let o=s(g.editObject.boxes,g.editXform.off,g.editXform.rot);if(o!=null)return o}let a=null;return ur(g.root,{x:0,y:0,z:0},0,null,null,(o,c,l)=>{a==null&&(a=s(o.boxes,c,l))}),a}var Rd=new Set;function gr(n){for(let t of Rd)if(n.has(t)!==g.selection.has(t)){ue();return}vx()}function ue(){_1(),g.pickMeshes=[],g.childMeshes={},g.childBox={},Rd.clear(),g.voxVer++,bd();let n={x:0,y:0,z:0},t=Ue();if(g.editObject){g.editXform=Li(Ks(),{off:g.editObject.pos,rot:g.editObject.rot});let e=[],i=new Map;ur(g.root,n,0,null,null,(s,a,o,c,l)=>mx(s,a,o,l?Td(i,l):e)),on(e,t);let r=Ed(e,Js,{tier:"temp"});gl=r?[r]:[];for(let s of i.values())on(s,t),fx(s);Cd=e,xx(),ni(g.editObject,g.editXform.off,g.editXform.rot,t)}else{let e=new Map,i=new Map,r=[],s=[];ur(g.root,n,0,null,null,(a,o,c,l,h)=>{let u=mx(a,o,c,[]);on(u,t);let d=h;l&&(d&&(Rd.add(l),g.selection.has(l)&&(d=null)),on(u,g.childBox[l]||(g.childBox[l]=Ue()))),d?Td(i,d).push(...u):(s.push(...u),l?Td(e,l).push(...u):r.push(...u))}),Ed(r,Js,{tier:"temp"});for(let[a,o]of e)Ed(o,Js,{childId:a});for(let a of i.values())fx(a);Cd=s}g.sceneBox=t,y1(t),vx(),Rn()}function E1(n,t,e){let i=new $n(t.x-n.x,t.y-n.y,t.z-n.z),r=new ir(new zr(i),new Ci({color:e,depthTest:!1}));return r.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),r.renderOrder=999,i.dispose(),r}function vx(){for(let n of Ii.children)n.geometry?.dispose?.();if(Ii.clear(),Ii.position.set(0,0,0),!g.editObject)for(let n of g.selection){let t=g.childBox[n];t&&!ei(t)&&Ii.add(E1(t.min,t.max,15787730))}}function oe(n,t={},...e){let i=document.createElement(n);return Object.assign(i,t),e.length&&i.append(...e),i}var da=new P,Pd=new P,Ud=new P,bx=new P,T1=new P(0,1,0);function Mx(n,t){let e=(Wt.top-Wt.bottom)/xe.h;Wt.getWorldDirection(Pd),Ud.crossVectors(Pd,T1).normalize(),bx.crossVectors(Ud,Pd).normalize(),jt.target.addScaledVector(Ud,-n*e),jt.target.addScaledVector(bx,t*e)}function Sx(n,t){jt.azim-=n*.012,jt.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,jt.elev+t*.012))}function _l(n){ei(n)||(jt.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),jt.zoom=Math.max(8,Math.min(al,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function Ln(){let n=Ue();if(g.editObject){if(ni(g.editObject,g.editXform.off,g.editXform.rot,n),ei(n)){let t=g.editXform.off;jt.target.set(t.x,t.y+6,t.z),jt.zoom=41;return}}else for(let t in g.childBox){let e=g.childBox[t];n.min.x=Math.min(n.min.x,e.min.x),n.min.y=Math.min(n.min.y,e.min.y),n.min.z=Math.min(n.min.z,e.min.z),n.max.x=Math.max(n.max.x,e.max.x),n.max.y=Math.max(n.max.y,e.max.y),n.max.z=Math.max(n.max.z,e.max.z)}if(ei(n)){jt.target.set(0,1,0),jt.zoom=23;return}_l(n)}function vl(n){if(n===g.root){Ln();return}let t=lr(n);_l(ni(n,t.off,t.rot,Ue()))}function wx(){Ft.azim+=(jt.azim-Ft.azim)*.22,Ft.elev+=(jt.elev-Ft.elev)*.22,Ft.zoom+=(jt.zoom-Ft.zoom)*.25,Ft.target.lerp(jt.target,.25);let n=Math.cos(Ft.elev),t=Math.sin(Ft.elev);da.set(n*Math.sin(Ft.azim),t,n*Math.cos(Ft.azim)),Wt.position.copy(Ft.target).addScaledVector(da,Vg);let e=Ig.clamp((Math.abs(Ft.elev)-1.45)/(Math.PI/2-1.45),0,1);cl.set(-Math.sin(Ft.azim),0,-Math.cos(Ft.azim)),Ft.elev<0&&cl.negate(),ld.set(0,1,0).lerp(cl,e),Wt.up.copy(ld.normalize()),Wt.lookAt(Ft.target);let i=xe.w/xe.h,r=Ft.zoom,s=r*i;Wt.left=-s/2,Wt.right=s/2,Wt.top=r/2,Wt.bottom=-r/2;let a=Wt.position,o=1/0,c=-1/0,l=(x,y,m)=>{let p=(a.x-x)*da.x+(a.y-y)*da.y+(a.z-m)*da.z;p<o&&(o=p),p>c&&(c=p)},h=g.sceneBox;if(h&&!ei(h))for(let x of[h.min.x,h.max.x])for(let y of[h.min.y,h.max.y])for(let m of[h.min.z,h.max.z])l(x,y,m);let u=Ft.target.x,d=Ft.target.z,f=4e3;for(let x of[-f,f])for(let y of[-f,f])l(u+x,0,d+y);o>c&&(o=.1,c=4e3),Wt.near=o-10,Wt.far=c+10,Wt.updateProjectionMatrix(),Vr.position.set(Ft.target.x,-.1,Ft.target.z),Gg()}var A1={0:["y","z"],1:["x","z"],2:["x","y"]};function C1(n){let t=[];for(let e of n)for(let i=e.x0;i<e.x1;i++)for(let r=e.y0;r<e.y1;r++)for(let s=e.z0;s<e.z1;s++)t.push({x:i,y:r,z:s,c:e.c});return t}function R1(n,t,e,i,r){let s=(e%360+360)%360;if(s>180&&(s-=360),s===0)return;let a=Math.round(s/90),o=(s-a*90)*Math.PI/180,c=(a%4+4)%4,l=Math.tan(o/2),h=Math.sin(o),[u,d]=A1[t];for(let f of n){let x=f[u]-i,y=f[d]-r;for(let m=0;m<c;m++){let p=-y,v=x;x=p,y=v}o&&(x-=Math.round(y*l),y+=Math.round(x*h),x-=Math.round(y*l)),f[u]=i+x,f[d]=r+y}}function I1(n){let t=new Map;for(let o of n)t.set(Gr(o.x,o.y,o.z),o.c);let e=(o,c,l,h)=>t.get(Gr(o,c,l))===h,i=(o,c,l,h,u)=>{for(let d=o;d<c;d++)if(!e(d,l,h,u))return!1;return!0},r=(o,c,l,h,u,d)=>{for(let f=l;f<h;f++)if(!i(o,c,u,f,d))return!1;return!0},s=n.slice().sort((o,c)=>o.y-c.y||o.z-c.z||o.x-c.x),a=[];for(let o of s){let c=o.x,l=o.y,h=o.z,u=o.c;if(!t.has(Gr(c,l,h)))continue;let d=c+1;for(;e(d,l,h,u);)d++;let f=h+1;for(;i(c,d,l,f,u);)f++;let x=l+1;for(;r(c,d,h,f,x,u);)x++;for(let y=l;y<x;y++)for(let m=h;m<f;m++)for(let p=c;p<d;p++)t.delete(Gr(p,y,m));a.push({x0:c,y0:l,z0:h,x1:d,y1:x,z1:f,c:u})}return a}function Ex(n,t,e,i,r,s){let a=C1(n);R1(a,e,t,Math.round(i),Math.round(r));for(let o of a){let c=s(o.x,o.y,o.z);o.x=c.x,o.y=c.y,o.z=c.z}return I1(a)}var Dd=null,Tx=[],Ax=[],io=()=>Dd;function Cx(n){Tx=n,n.length&&(Dd="node")}var bl=()=>Tx;function Rx(n){Ax=n,n.length&&(Dd="vox")}var Ml=()=>Ax;var Wn=[],si=-1;function fa(){Wn.length=0,si=-1}var Nd=()=>Wn[si];function Ix(n){Wn.length=si+1,Wn.push(n),Wn.length>200&&Wn.shift(),si=Wn.length-1}function Lx(n){si>=0&&(Wn[si]=n)}var Px=()=>si>0?Wn[--si]:null,Ux=()=>si<Wn.length-1?Wn[++si]:null;var Sl=!1,Dx=n=>({rootJSON:n,uid:ll(),pathIds:g.path.map(t=>t.id),selection:[...g.selection],editId:g.editObject?g.editObject.id:null,collapsed:[...g.collapsed]});function Nx(n){if(Sl)return;let t=Dx(n),e=Nd();e&&e.rootJSON===t.rootJSON||Ix(t)}function Ox(n){Sl||!Nd()||Lx(Dx(n))}function zx(n){Sl=!0,hl(n.uid),g.root=Jr(JSON.parse(n.rootJSON)),g.path=[];let t=g.root;for(let e of n.pathIds){let i=t.id===e?t:t.type==="scene"?t.children.find(r=>r.id===e):null;if(!i)break;t=i,g.path.push(t)}g.path.length||(g.path=[g.root]),g.editObject=n.editId?ti(n.editId):null,g.selection=new Set(n.selection.filter(e=>g.context.children.some(i=>i.id===e))),g.collapsed=new Set(n.collapsed),g.drag=null,g.sel3d=null,g.painting=!1,g.lastVox=null,ue(),Xt(),de(),Sl=!1}function wl(){Ye();let n=Px();n&&zx(n)}function pa(){Ye();let n=Ux();n&&zx(n)}var an=()=>new Map,El=n=>{let t=an();return n.forEach((e,i)=>{t.set(i,e)}),t},oi=(n,t,e)=>{let i=n.get(t);return i===void 0&&n.set(t,i=e()),i},Fx=(n,t)=>{let e=[];for(let[i,r]of n)e.push(t(r,i));return e},Bx=(n,t)=>{for(let[e,i]of n)if(t(i,e))return!0;return!1};var Oi=()=>new Set;var Tl=n=>n[n.length-1];var kx=(n,t)=>{for(let e=0;e<t.length;e++)n.push(t[e])},zi=Array.from,Al=(n,t)=>{for(let e=0;e<n.length;e++)if(!t(n[e],e,n))return!1;return!0},Cl=(n,t)=>{for(let e=0;e<n.length;e++)if(t(n[e],e,n))return!0;return!1};var Vx=(n,t)=>{let e=new Array(n);for(let i=0;i<n;i++)e[i]=t(i,e);return e};var Zr=Array.isArray;var Rl=class{constructor(){this._observers=an()}on(t,e){return oi(this._observers,t,Oi).add(e),e}once(t,e){let i=(...r)=>{this.off(t,i),e(...r)};this.on(t,i)}off(t,e){let i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return zi((this._observers.get(t)||an()).values()).forEach(i=>i(...e))}destroy(){this._observers=an()}};var cn=Math.floor;var Kr=Math.abs;var Il=(n,t)=>n<t?n:t,Fi=(n,t)=>n>t?n:t,I2=Number.isNaN;var Ll=n=>n!==0?n<0:1/n<0;var ro=Number.MAX_SAFE_INTEGER,zd=Number.MIN_SAFE_INTEGER,L2=1<<31;var Hx=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&cn(n)===n),P2=Number.isNaN,U2=Number.parseInt;var Bd=String.fromCharCode,L1=String.fromCodePoint,D2=Bd(65535),P1=n=>n.toLowerCase(),U1=/^\s*/g,D1=n=>n.replace(U1,""),N1=/([A-Z])/g,kd=(n,t)=>D1(n.replace(N1,e=>`${t}${P1(e)}`));var O1=n=>{let t=unescape(encodeURIComponent(n)),e=t.length,i=new Uint8Array(e);for(let r=0;r<e;r++)i[r]=t.codePointAt(r);return i},oo=typeof TextEncoder<"u"?new TextEncoder:null,z1=n=>oo.encode(n),Gx=oo?z1:O1;var so=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});so&&so.decode(new Uint8Array).length===1&&(so=null);var Wx=(n,t)=>Vx(t,()=>n).join("");var Qr=class{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}},_a=()=>new Qr;var F1=n=>{let t=n.cpos;for(let e=0;e<n.bufs.length;e++)t+=n.bufs[e].length;return t};var Xn=n=>{let t=new Uint8Array(F1(n)),e=0;for(let i=0;i<n.bufs.length;i++){let r=n.bufs[i];t.set(r,e),e+=r.length}return t.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),e),t},B1=(n,t)=>{let e=n.cbuf.length;e-n.cpos<t&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Fi(e,t)*2),n.cpos=0)},De=(n,t)=>{let e=n.cbuf.length;n.cpos===e&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(e*2),n.cpos=0),n.cbuf[n.cpos++]=t};var Dl=De;var Yt=(n,t)=>{for(;t>127;)De(n,128|127&t),t=cn(t/128);De(n,127&t)},Nl=(n,t)=>{let e=Ll(t);for(e&&(t=-t),De(n,(t>63?128:0)|(e?64:0)|63&t),t=cn(t/64);t>0;)De(n,(t>127?128:0)|127&t),t=cn(t/128)},Vd=new Uint8Array(3e4),k1=Vd.length/3,V1=(n,t)=>{if(t.length<k1){let e=oo.encodeInto(t,Vd).written||0;Yt(n,e);for(let i=0;i<e;i++)De(n,Vd[i])}else un(n,Gx(t))},H1=(n,t)=>{let e=unescape(encodeURIComponent(t)),i=e.length;Yt(n,i);for(let r=0;r<i;r++)De(n,e.codePointAt(r))},ts=oo&&oo.encodeInto?V1:H1;var va=(n,t)=>{let e=n.cbuf.length,i=n.cpos,r=Il(e-i,t.length),s=t.length-r;n.cbuf.set(t.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Fi(e*2,s)),n.cbuf.set(t.subarray(r)),n.cpos=s)},un=(n,t)=>{Yt(n,t.byteLength),va(n,t)},Hd=(n,t)=>{B1(n,t);let e=new DataView(n.cbuf.buffer,n.cpos,t);return n.cpos+=t,e},G1=(n,t)=>Hd(n,4).setFloat32(0,t,!1),W1=(n,t)=>Hd(n,8).setFloat64(0,t,!1),X1=(n,t)=>Hd(n,8).setBigInt64(0,t,!1);var qx=new DataView(new ArrayBuffer(4)),q1=n=>(qx.setFloat32(0,n),qx.getFloat32(0)===n),co=(n,t)=>{switch(typeof t){case"string":De(n,119),ts(n,t);break;case"number":Hx(t)&&Kr(t)<=2147483647?(De(n,125),Nl(n,t)):q1(t)?(De(n,124),G1(n,t)):(De(n,123),W1(n,t));break;case"bigint":De(n,122),X1(n,t);break;case"object":if(t===null)De(n,126);else if(Zr(t)){De(n,117),Yt(n,t.length);for(let e=0;e<t.length;e++)co(n,t[e])}else if(t instanceof Uint8Array)De(n,116),un(n,t);else{De(n,118);let e=Object.keys(t);Yt(n,e.length);for(let i=0;i<e.length;i++){let r=e[i];ts(n,r),co(n,t[r])}}break;case"boolean":De(n,t?120:121);break;default:De(n,127)}},ya=class extends Qr{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&Yt(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}};var Yx=n=>{n.count>0&&(Nl(n.encoder,n.count===1?n.s:-n.s),n.count>1&&Yt(n.encoder,n.count-2))},es=class{constructor(){this.encoder=new Qr,this.s=0,this.count=0}write(t){this.s===t?this.count++:(Yx(this),this.count=1,this.s=t)}toUint8Array(){return Yx(this),Xn(this.encoder)}};var $x=n=>{if(n.count>0){let t=n.diff*2+(n.count===1?0:1);Nl(n.encoder,t),n.count>1&&Yt(n.encoder,n.count-2)}},lo=class{constructor(){this.encoder=new Qr,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):($x(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return $x(this),Xn(this.encoder)}},Ul=class{constructor(){this.sarr=[],this.s="",this.lensE=new es}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){let t=new Qr;return this.sarr.push(this.s),this.s="",ts(t,this.sarr.join("")),va(t,this.lensE.toUint8Array()),Xn(t)}};var Sn=n=>new Error(n),wn=()=>{throw Sn("Method unimplemented")},dn=()=>{throw Sn("Unexpected case")};var jx=Sn("Unexpected end of array"),Jx=Sn("Integer out of Range"),ho=class{constructor(t){this.arr=t,this.pos=0}},ss=n=>new ho(n),Zx=n=>n.pos!==n.arr.length;var $1=(n,t)=>{let e=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,t);return n.pos+=t,e},fn=n=>$1(n,Bt(n));var ns=n=>n.arr[n.pos++];var Bt=n=>{let t=0,e=1,i=n.arr.length;for(;n.pos<i;){let r=n.arr[n.pos++];if(t=t+(r&127)*e,e*=128,r<128)return t;if(t>ro)throw Jx}throw jx},zl=n=>{let t=n.arr[n.pos++],e=t&63,i=64,r=(t&64)>0?-1:1;if((t&128)===0)return r*e;let s=n.arr.length;for(;n.pos<s;){if(t=n.arr[n.pos++],e=e+(t&127)*i,i*=128,t<128)return r*e;if(e>ro)throw Jx}throw jx};var j1=n=>{let t=Bt(n);if(t===0)return"";{let e=String.fromCodePoint(ns(n));if(--t<100)for(;t--;)e+=String.fromCodePoint(ns(n));else for(;t>0;){let i=t<1e4?t:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,e+=String.fromCodePoint.apply(null,r),t-=i}return decodeURIComponent(escape(e))}},J1=n=>so.decode(fn(n)),is=so?J1:j1;var Wd=(n,t)=>{let e=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,t);return n.pos+=t,e},Z1=n=>Wd(n,4).getFloat32(0,!1),K1=n=>Wd(n,8).getFloat64(0,!1),Q1=n=>Wd(n,8).getBigInt64(0,!1);var tT=[n=>{},n=>null,zl,Z1,K1,Q1,n=>!1,n=>!0,is,n=>{let t=Bt(n),e={};for(let i=0;i<t;i++){let r=is(n);e[r]=uo(n)}return e},n=>{let t=Bt(n),e=[];for(let i=0;i<t;i++)e.push(uo(n));return e},fn],uo=n=>tT[127-ns(n)](n),ba=class extends ho{constructor(t,e){super(t),this.reader=e,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),Zx(this)?this.count=Bt(this)+1:this.count=-1),this.count--,this.s}};var rs=class extends ho{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=zl(this);let t=Ll(this.s);this.count=1,t&&(this.s=-this.s,this.count=Bt(this)+2)}return this.count--,this.s}};var fo=class extends ho{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){let t=zl(this),e=t&1;this.diff=cn(t/2),this.count=1,e&&(this.count=Bt(this)+2)}return this.s+=this.diff,this.count--,this.s}},Ol=class{constructor(t){this.decoder=new rs(t),this.str=is(this.decoder),this.spos=0}read(){let t=this.spos+this.decoder.read(),e=this.str.slice(this.spos,t);return this.spos=t,e}};var z2=crypto.subtle,Kx=crypto.getRandomValues.bind(crypto);var Xd=()=>Kx(new Uint32Array(1))[0];var nT="10000000-1000-4000-8000"+-1e11,Qx=()=>nT.replace(/[018]/g,n=>(n^Xd()&15>>n/4).toString(16));var t0=Date.now;var qd=n=>new Promise(n);var k2=Promise.all.bind(Promise);var Yd=n=>n===void 0?null:n;var $d=class{constructor(){this.map=new Map}setItem(t,e){this.map.set(t,e)}getItem(t){return this.map.get(t)}},e0=new $d,aT=!0;try{typeof localStorage<"u"&&localStorage&&(e0=localStorage,aT=!1)}catch{}var n0=e0;var os=Symbol("Equality"),Fl=(n,t)=>n===t||!!n?.[os]?.(t)||!1;var i0=n=>typeof n=="object",r0=Object.assign,lT=Object.keys;var s0=(n,t)=>{for(let e in n)t(n[e],e)};var Ma=n=>lT(n).length;var o0=n=>{for(let t in n)return!1;return!0},po=(n,t)=>{for(let e in n)if(!t(n[e],e))return!1;return!0},Sa=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),Jd=(n,t)=>n===t||Ma(n)===Ma(t)&&po(n,(e,i)=>(e!==void 0||Sa(t,i))&&Fl(t[i],e)),hT=Object.freeze,Zd=n=>{for(let t in n){let e=n[t];(typeof e=="object"||typeof e=="function")&&Zd(n[t])}return hT(n)};var Ea=(n,t,e=0)=>{try{for(;e<n.length;e++)n[e](...t)}finally{e<n.length&&Ea(n,t,e+1)}};var a0=n=>n;var wa=(n,t)=>{if(n===t)return!0;if(n==null||t==null||n.constructor!==t.constructor&&(n.constructor||Object)!==(t.constructor||Object))return!1;if(n[os]!=null)return n[os](t);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),t=new Uint8Array(t);case Uint8Array:{if(n.byteLength!==t.byteLength)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;break}case Set:{if(n.size!==t.size)return!1;for(let e of n)if(!t.has(e))return!1;break}case Map:{if(n.size!==t.size)return!1;for(let e of n.keys())if(!t.has(e)||!wa(n.get(e),t.get(e)))return!1;break}case void 0:case Object:if(Ma(n)!==Ma(t))return!1;for(let e in n)if(!Sa(n,e)||!wa(n[e],t[e]))return!1;break;case Array:if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!wa(n[e],t[e]))return!1;break;default:return!1}return!0},c0=(n,t)=>t.includes(n);var Ta=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";var V2=typeof navigator<"u"?/Mac/.test(navigator.platform):!1,ai,uT=[],dT=()=>{if(ai===void 0)if(Ta){ai=an();let n=process.argv,t=null;for(let e=0;e<n.length;e++){let i=n[e];i[0]==="-"?(t!==null&&ai.set(t,""),t=i):t!==null?(ai.set(t,i),t=null):uT.push(i)}t!==null&&ai.set(t,"")}else typeof location=="object"?(ai=an(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){let[t,e]=n.split("=");ai.set(`--${kd(t,"-")}`,e),ai.set(`-${kd(t,"-")}`,e)}})):ai=an();return ai},tf=n=>dT().has(n);var Aa=n=>Ta?Yd(process.env[n.toUpperCase().replaceAll("-","_")]):Yd(n0.getItem(n));var l0=n=>tf("--"+n)||Aa(n)!==null,h0=l0("production"),fT=Ta&&c0(process.env.FORCE_COLOR,["true","1","2"]),u0=fT||!tf("--no-colors")&&!l0("no-color")&&(!Ta||process.stdout.isTTY)&&(!Ta||tf("--color")||Aa("COLORTERM")!==null||(Aa("TERM")||"").includes("color"));var pT=n=>new Uint8Array(n);var d0=n=>{let t=pT(n.byteLength);return t.set(n),t};var nf=class{constructor(t,e){this.left=t,this.right=e}},ci=(n,t)=>new nf(n,t);var rf=n=>n.next()>=.5,Bl=(n,t,e)=>cn(n.next()*(e+1-t)+t);var sf=(n,t,e)=>cn(n.next()*(e+1-t)+t);var of=(n,t,e)=>sf(n,t,e);var xT=n=>Bd(of(n,97,122)),f0=(n,t=0,e=20)=>{let i=of(n,t,e),r="";for(let s=0;s<i;s++)r+=xT(n);return r};var kl=(n,t)=>t[of(n,0,t.length-1)];var _T=Symbol("0schema"),af=class{constructor(){this._rerrs=[]}extend(t,e,i,r=null){this._rerrs.push({path:t,expected:e,has:i,message:r})}toString(){let t=[];for(let e=this._rerrs.length-1;e>0;e--){let i=this._rerrs[e];t.push(Wx(" ",(this._rerrs.length-e)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return t.join(`
`)}},cf=(n,t)=>n===t?!0:n==null||t==null||n.constructor!==t.constructor?!1:n[os]?Fl(n,t):Zr(n)?Al(n,e=>Cl(t,i=>cf(e,i))):i0(n)?po(n,(e,i)=>cf(e,t[i])):!1,Fe=class{static _dilutes=!1;extends(t){let[e,i]=[this.shape,t.shape];return this.constructor._dilutes&&([i,e]=[e,i]),cf(e,i)}equals(t){return this.constructor===t.constructor&&wa(this.shape,t.shape)}[_T](){return!0}[os](t){return this.equals(t)}validate(t){return this.check(t)}check(t,e){wn()}get nullable(){return _o(this,Kl)}get optional(){return new Vl(this)}cast(t){return p0(t,this),t}expect(t){return p0(t,this),t}},Ca=class extends Fe{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e=void 0){let i=t?.constructor===this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name,t?.constructor!==this.shape?"Constructor match failed":"Check failed"),i}},ve=(n,t=null)=>new Ca(n,t),G2=ve(Ca),Ra=class extends Fe{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape(t);return!i&&e?.extend(null,"custom prop",t?.constructor.name,"failed to check custom prop"),i}},Te=n=>new Ra(n),W2=ve(Ra),xo=class extends Fe{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape.some(r=>r===t);return!i&&e?.extend(null,this.shape.join(" | "),t.toString()),i}},Jl=(...n)=>new xo(n),m0=ve(xo),vT=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,t=>"\\"+t)),g0=n=>{if(yo.check(n))return[vT(n)];if(m0.check(n))return n.shape.map(t=>t+"");if(b0.check(n))return["[+-]?\\d+.?\\d*"];if(M0.check(n))return[".*"];if($l.check(n))return n.shape.map(g0).flat(1);dn()},lf=class extends Fe{constructor(t){super(),this.shape=t,this._r=new RegExp("^"+t.map(g0).map(e=>`(${e.join("|")})`).join("")+"$")}check(t,e){let i=this._r.exec(t)!=null;return!i&&e?.extend(null,this._r.toString(),t.toString(),"String doesn't match string template."),i}};var X2=ve(lf),bT=Symbol("optional"),Vl=class extends Fe{constructor(t){super(),this.shape=t}check(t,e){let i=t===void 0||this.shape.check(t);return!i&&e?.extend(null,"undefined (optional)","()"),i}get[bT](){return!0}},MT=ve(Vl),Hl=class extends Fe{check(t,e){return e?.extend(null,"never",typeof t),!1}},q2=new Hl,Y2=ve(Hl),Gl=class n extends Fe{constructor(t,e=!1){super(),this.shape=t,this._isPartial=e}static _dilutes=!0;get partial(){return new n(this.shape,!0)}check(t,e){return t==null?(e?.extend(null,"object","null"),!1):po(this.shape,(i,r)=>{let s=this._isPartial&&!Sa(t,r)||i.check(t[r],e);return!s&&e?.extend(r.toString(),i.toString(),typeof t[r],"Object property does not match"),s})}},ST=n=>new Gl(n),wT=ve(Gl),ET=Te(n=>n!=null&&(n.constructor===Object||n.constructor==null)),Wl=class extends Fe{constructor(t,e){super(),this.shape={keys:t,values:e}}check(t,e){return t!=null&&po(t,(i,r)=>{let s=this.shape.keys.check(r,e);return!s&&e?.extend(r+"","Record",typeof t,s?"Key doesn't match schema":"Value doesn't match value"),s&&this.shape.values.check(i,e)})}},x0=(n,t)=>new Wl(n,t),TT=ve(Wl),Xl=class extends Fe{constructor(t){super(),this.shape=t}check(t,e){return t!=null&&po(this.shape,(i,r)=>{let s=i.check(t[r],e);return!s&&e?.extend(r.toString(),"Tuple",typeof i),s})}},AT=(...n)=>new Xl(n),$2=ve(Xl),ql=class extends Fe{constructor(t){super(),this.shape=t.length===1?t[0]:new Ia(t)}check(t,e){let i=Zr(t)&&Al(t,r=>this.shape.check(r));return!i&&e?.extend(null,"Array",""),i}},y0=(...n)=>new ql(n),CT=ve(ql),RT=Te(n=>Zr(n)),Yl=class extends Fe{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e){let i=t instanceof this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name),i}},IT=(n,t=null)=>new Yl(n,t),j2=ve(Yl),LT=IT(Fe),hf=class extends Fe{constructor(t){super(),this.len=t.length-1,this.args=AT(...t.slice(-1)),this.res=t[this.len]}check(t,e){let i=t.constructor===Function&&t.length<=this.len;return!i&&e?.extend(null,"function",typeof t),i}};var PT=ve(hf),UT=Te(n=>typeof n=="function"),uf=class extends Fe{constructor(t){super(),this.shape=t}check(t,e){let i=Al(this.shape,r=>r.check(t,e));return!i&&e?.extend(null,"Intersectinon",typeof t),i}};var J2=ve(uf,n=>n.shape.length>0),Ia=class extends Fe{static _dilutes=!0;constructor(t){super(),this.shape=t}check(t,e){let i=Cl(this.shape,r=>r.check(t,e));return e?.extend(null,"Union",typeof t),i}},_o=(...n)=>n.findIndex(t=>$l.check(t))>=0?_o(...n.map(t=>La(t)).map(t=>$l.check(t)?t.shape:[t]).flat(1)):n.length===1?n[0]:new Ia(n),$l=ve(Ia),_0=()=>!0,jl=Te(_0),DT=ve(Ra,n=>n.shape===_0),ff=Te(n=>typeof n=="bigint"),NT=Te(n=>n===ff),v0=Te(n=>typeof n=="symbol"),Z2=Te(n=>n===v0),go=Te(n=>typeof n=="number"),b0=Te(n=>n===go),yo=Te(n=>typeof n=="string"),M0=Te(n=>n===yo),Zl=Te(n=>typeof n=="boolean"),OT=Te(n=>n===Zl),S0=Jl(void 0),K2=ve(xo,n=>n.shape.length===1&&n.shape[0]===void 0),Q2=Jl(void 0);var Kl=Jl(null),zT=ve(xo,n=>n.shape.length===1&&n.shape[0]===null),tI=ve(Uint8Array),eI=ve(Ca,n=>n.shape===Uint8Array),FT=_o(go,yo,Kl,S0,ff,Zl,v0),nI=(()=>{let n=y0(jl),t=x0(yo,jl),e=_o(go,yo,Kl,Zl,n,t);return n.shape=e,t.shape.values=e,e})(),La=n=>{if(LT.check(n))return n;if(ET.check(n)){let t={};for(let e in n)t[e]=La(n[e]);return ST(t)}else{if(RT.check(n))return _o(...n.map(La));if(FT.check(n))return Jl(n);if(UT.check(n))return ve(n)}dn()},p0=h0?()=>{}:(n,t)=>{let e=new af;if(!t.check(n,e))throw Sn(`Expected value to be of type ${t.constructor.name}.
${e.toString()}`)},df=class{constructor(t){this.patterns=[],this.$state=t}if(t,e){return this.patterns.push({if:La(t),h:e}),this}else(t){return this.if(jl,t)}done(){return(t,e)=>{for(let i=0;i<this.patterns.length;i++){let r=this.patterns[i];if(r.if.check(t))return r.h(t,e)}throw Sn("Unhandled pattern")}}},BT=n=>new df(n),w0=BT(jl).if(b0,(n,t)=>Bl(t,zd,ro)).if(M0,(n,t)=>f0(t)).if(OT,(n,t)=>rf(t)).if(NT,(n,t)=>BigInt(Bl(t,zd,ro))).if($l,(n,t)=>mo(t,kl(t,n.shape))).if(wT,(n,t)=>{let e={};for(let i in n.shape){let r=n.shape[i];if(MT.check(r)){if(rf(t))continue;r=r.shape}e[i]=w0(r,t)}return e}).if(CT,(n,t)=>{let e=[],i=sf(t,0,42);for(let r=0;r<i;r++)e.push(mo(t,n.shape));return e}).if(m0,(n,t)=>kl(t,n.shape)).if(zT,(n,t)=>null).if(PT,(n,t)=>{let e=mo(t,n.res);return()=>e}).if(DT,(n,t)=>mo(t,kl(t,[go,yo,Kl,S0,ff,Zl,y0(go),x0(_o("a","b","c"),go)]))).if(TT,(n,t)=>{let e={},i=Bl(t,0,3);for(let r=0;r<i;r++){let s=mo(t,n.shape.keys),a=mo(t,n.shape.values);e[s]=a}return e}).done(),mo=(n,t)=>w0(La(t),n);var as=typeof document<"u"?document:{};var iI=Te(n=>n.nodeType===WT);var rI=typeof DOMParser<"u"?new DOMParser:null;var sI=Te(n=>n.nodeType===VT);var oI=Te(n=>n.nodeType===HT);var E0=n=>Fx(n,(t,e)=>`${e}:${t};`).join("");var VT=as.ELEMENT_NODE,HT=as.TEXT_NODE,aI=as.CDATA_SECTION_NODE,cI=as.COMMENT_NODE,GT=as.DOCUMENT_NODE,lI=as.DOCUMENT_TYPE_NODE,WT=as.DOCUMENT_FRAGMENT_NODE,hI=Te(n=>n.nodeType===GT);var li=Symbol;var Pa=li(),Ua=li(),pf=li(),mf=li(),gf=li(),Da=li(),xf=li(),vo=li(),yf=li(),T0=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=0;for(;i<n.length;i++){let r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)t.push(r);else if(r.constructor===Object)break}for(i>0&&e.push(t.join(""));i<n.length;i++){let r=n[i];r instanceof Symbol||e.push(r)}return e};var uI=t0();var $T={[Pa]:ci("font-weight","bold"),[Ua]:ci("font-weight","normal"),[pf]:ci("color","blue"),[gf]:ci("color","green"),[mf]:ci("color","grey"),[Da]:ci("color","red"),[xf]:ci("color","purple"),[vo]:ci("color","orange"),[yf]:ci("color","black")},jT=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=an(),r=[],s=0;for(;s<n.length;s++){let a=n[s],o=$T[a];if(o!==void 0)i.set(o.left,o.right);else{if(a===void 0)break;if(a.constructor===String||a.constructor===Number){let c=E0(i);s>0||c.length>0?(t.push("%c"+a),e.push(c)):t.push(a)}else break}}for(s>0&&(r=e,r.unshift(t.join("")));s<n.length;s++){let a=n[s];a instanceof Symbol||r.push(a)}return r},A0=u0?jT:T0,C0=(...n)=>{console.log(...A0(n)),I0.forEach(t=>t.print(n))},R0=(...n)=>{console.warn(...A0(n)),n.unshift(vo),I0.forEach(t=>t.print(n))};var I0=Oi();var L0=n=>({[Symbol.iterator](){return this},next:n}),P0=(n,t)=>L0(()=>{let e;do e=n.next();while(!e.done&&!t(e.value));return e}),Ql=(n,t)=>L0(()=>{let{done:e,value:i}=n.next();return{done:e,value:e?void 0:t(i)}});var Oa=class{constructor(t,e){this.clock=t,this.len=e}},cs=class{constructor(){this.clients=new Map}},q0=(n,t,e)=>t.clients.forEach((i,r)=>{let s=n.doc.store.clients.get(r);for(let a=0;a<i.length;a++){let o=i[a];ey(n,s,o.clock,o.len,e)}}),tA=(n,t)=>{let e=0,i=n.length-1;for(;e<=i;){let r=cn((e+i)/2),s=n[r],a=s.clock;if(a<=t){if(t<a+s.len)return r;e=r+1}else i=r-1}return null},Y0=(n,t)=>{let e=n.clients.get(t.client);return e!==void 0&&tA(e,t.clock)!==null},Ff=n=>{n.clients.forEach(t=>{t.sort((r,s)=>r.clock-s.clock);let e,i;for(e=1,i=1;e<t.length;e++){let r=t[i-1],s=t[e];r.clock+r.len>=s.clock?r.len=Fi(r.len,s.clock+s.len-r.clock):(i<e&&(t[i]=s),i++)}t.length=i})},eA=n=>{let t=new cs;for(let e=0;e<n.length;e++)n[e].clients.forEach((i,r)=>{if(!t.clients.has(r)){let s=i.slice();for(let a=e+1;a<n.length;a++)kx(s,n[a].clients.get(r)||[]);t.clients.set(r,s)}});return Ff(t),t},sh=(n,t,e,i)=>{oi(n.clients,t,()=>[]).push(new Oa(e,i))},$0=()=>new cs,nA=n=>{let t=$0();return n.clients.forEach((e,i)=>{let r=[];for(let s=0;s<e.length;s++){let a=e[s];if(a.deleted){let o=a.id.clock,c=a.length;if(s+1<e.length)for(let l=e[s+1];s+1<e.length&&l.deleted;l=e[++s+1])c+=l.length;r.push(new Oa(o,c))}}r.length>0&&t.clients.set(i,r)}),t},Eo=(n,t)=>{Yt(n.restEncoder,t.clients.size),zi(t.clients.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{n.resetDsCurVal(),Yt(n.restEncoder,e);let r=i.length;Yt(n.restEncoder,r);for(let s=0;s<r;s++){let a=i[s];n.writeDsClock(a.clock),n.writeDsLen(a.len)}})},Bf=n=>{let t=new cs,e=Bt(n.restDecoder);for(let i=0;i<e;i++){n.resetDsCurVal();let r=Bt(n.restDecoder),s=Bt(n.restDecoder);if(s>0){let a=oi(t.clients,r,()=>[]);for(let o=0;o<s;o++)a.push(new Oa(n.readDsClock(),n.readDsLen()))}}return t},N0=(n,t,e)=>{let i=new cs,r=Bt(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();let a=Bt(n.restDecoder),o=Bt(n.restDecoder),c=e.clients.get(a)||[],l=Ne(e,a);for(let h=0;h<o;h++){let u=n.readDsClock(),d=u+n.readDsLen();if(u<l){l<d&&sh(i,a,l,d-l);let f=hi(c,u),x=c[f];for(!x.deleted&&x.id.clock<u&&(c.splice(f+1,0,ph(t,x,u-x.id.clock)),f++);f<c.length&&(x=c[f++],x.id.clock<d);)x.deleted||(d<x.id.clock+x.length&&c.splice(f,0,ph(t,x,d-x.id.clock)),x.delete(t))}else sh(i,a,u,d-u)}}if(i.clients.size>0){let s=new Bi;return Yt(s.restEncoder,0),Eo(s,i),s.toUint8Array()}return null};var j0=Xd,ls=class n extends Rl{constructor({guid:t=Qx(),collectionid:e=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:a=!1,shouldLoad:o=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=j0(),this.guid=t,this.collectionid=e,this.share=new Map,this.store=new ch,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=o,this.autoLoad=a,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=qd(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});let c=()=>qd(l=>{let h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),l())};this.on("sync",h)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){let t=this._item;t!==null&&!this.shouldLoad&&te(t.parent.doc,e=>{e.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(zi(this.subdocs).map(t=>t.guid))}transact(t,e=null){return te(this,t,e)}get(t,e=Ae){let i=oi(this.share,t,()=>{let s=new e;return s._integrate(this,null),s}),r=i.constructor;if(e!==Ae&&r!==e)if(r===Ae){let s=new e;s._map=i._map,i._map.forEach(a=>{for(;a!==null;a=a.left)a.parent=s}),s._start=i._start;for(let a=s._start;a!==null;a=a.right)a.parent=s;return s._length=i._length,this.share.set(t,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return i}getArray(t=""){return this.get(t,dh)}getText(t=""){return this.get(t,Ha)}getMap(t=""){return this.get(t,us)}getXmlElement(t=""){return this.get(t,Ga)}getXmlFragment(t=""){return this.get(t,So)}toJSON(){let t={};return this.share.forEach((e,i)=>{t[i]=e.toJSON()}),t}destroy(){this.isDestroyed=!0,zi(this.subdocs).forEach(e=>e.destroy());let t=this._item;if(t!==null){this._item=null;let e=t.content;e.doc=new n({guid:this.guid,...e.opts,shouldLoad:!1}),e.doc._item=t,te(t.parent.doc,i=>{let r=e.doc;t.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}},oh=class{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return Bt(this.restDecoder)}readDsLen(){return Bt(this.restDecoder)}},ah=class extends oh{readLeftID(){return qt(Bt(this.restDecoder),Bt(this.restDecoder))}readRightID(){return qt(Bt(this.restDecoder),Bt(this.restDecoder))}readClient(){return Bt(this.restDecoder)}readInfo(){return ns(this.restDecoder)}readString(){return is(this.restDecoder)}readParentInfo(){return Bt(this.restDecoder)===1}readTypeRef(){return Bt(this.restDecoder)}readLen(){return Bt(this.restDecoder)}readAny(){return uo(this.restDecoder)}readBuf(){return d0(fn(this.restDecoder))}readJSON(){return JSON.parse(is(this.restDecoder))}readKey(){return is(this.restDecoder)}},bf=class{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=Bt(this.restDecoder),this.dsCurrVal}readDsLen(){let t=Bt(this.restDecoder)+1;return this.dsCurrVal+=t,t}},br=class extends bf{constructor(t){super(t),this.keys=[],Bt(t),this.keyClockDecoder=new fo(fn(t)),this.clientDecoder=new rs(fn(t)),this.leftClockDecoder=new fo(fn(t)),this.rightClockDecoder=new fo(fn(t)),this.infoDecoder=new ba(fn(t),ns),this.stringDecoder=new Ol(fn(t)),this.parentInfoDecoder=new ba(fn(t),ns),this.typeRefDecoder=new rs(fn(t)),this.lenDecoder=new rs(fn(t))}readLeftID(){return new vr(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new vr(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return uo(this.restDecoder)}readBuf(){return fn(this.restDecoder)}readJSON(){return uo(this.restDecoder)}readKey(){let t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{let e=this.stringDecoder.read();return this.keys.push(e),e}}},Mf=class{constructor(){this.restEncoder=_a()}toUint8Array(){return Xn(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){Yt(this.restEncoder,t)}writeDsLen(t){Yt(this.restEncoder,t)}},hs=class extends Mf{writeLeftID(t){Yt(this.restEncoder,t.client),Yt(this.restEncoder,t.clock)}writeRightID(t){Yt(this.restEncoder,t.client),Yt(this.restEncoder,t.clock)}writeClient(t){Yt(this.restEncoder,t)}writeInfo(t){Dl(this.restEncoder,t)}writeString(t){ts(this.restEncoder,t)}writeParentInfo(t){Yt(this.restEncoder,t?1:0)}writeTypeRef(t){Yt(this.restEncoder,t)}writeLen(t){Yt(this.restEncoder,t)}writeAny(t){co(this.restEncoder,t)}writeBuf(t){un(this.restEncoder,t)}writeJSON(t){ts(this.restEncoder,JSON.stringify(t))}writeKey(t){ts(this.restEncoder,t)}},Sf=class{constructor(){this.restEncoder=_a(),this.dsCurrVal=0}toUint8Array(){return Xn(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){let e=t-this.dsCurrVal;this.dsCurrVal=t,Yt(this.restEncoder,e)}writeDsLen(t){t===0&&dn(),Yt(this.restEncoder,t-1),this.dsCurrVal+=t}},Bi=class extends Sf{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new lo,this.clientEncoder=new es,this.leftClockEncoder=new lo,this.rightClockEncoder=new lo,this.infoEncoder=new ya(Dl),this.stringEncoder=new Ul,this.parentInfoEncoder=new ya(Dl),this.typeRefEncoder=new es,this.lenEncoder=new es}toUint8Array(){let t=_a();return Yt(t,0),un(t,this.keyClockEncoder.toUint8Array()),un(t,this.clientEncoder.toUint8Array()),un(t,this.leftClockEncoder.toUint8Array()),un(t,this.rightClockEncoder.toUint8Array()),un(t,Xn(this.infoEncoder)),un(t,this.stringEncoder.toUint8Array()),un(t,Xn(this.parentInfoEncoder)),un(t,this.typeRefEncoder.toUint8Array()),un(t,this.lenEncoder.toUint8Array()),va(t,Xn(this.restEncoder)),Xn(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){co(this.restEncoder,t)}writeBuf(t){un(this.restEncoder,t)}writeJSON(t){co(this.restEncoder,t)}writeKey(t){let e=this.keyMap.get(t);e===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(e)}},iA=(n,t,e,i)=>{i=Fi(i,t[0].id.clock);let r=hi(t,i);Yt(n.restEncoder,t.length-r),n.writeClient(e),Yt(n.restEncoder,i);let s=t[r];s.write(n,i-s.id.clock);for(let a=r+1;a<t.length;a++)t[a].write(n,0)},kf=(n,t,e)=>{let i=new Map;e.forEach((r,s)=>{Ne(t,s)>r&&i.set(s,r)}),Vf(t).forEach((r,s)=>{e.has(s)||i.set(s,0)}),Yt(n.restEncoder,i.size),zi(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{iA(n,t.clients.get(r),r,s)})},rA=(n,t)=>{let e=an(),i=Bt(n.restDecoder);for(let r=0;r<i;r++){let s=Bt(n.restDecoder),a=new Array(s),o=n.readClient(),c=Bt(n.restDecoder);e.set(o,{i:0,refs:a});for(let l=0;l<s;l++){let h=n.readInfo();switch(31&h){case 0:{let u=n.readLen();a[l]=new pn(qt(o,c),u),c+=u;break}case 10:{let u=Bt(n.restDecoder);a[l]=new mn(qt(o,c),u),c+=u;break}default:{let u=(h&192)===0,d=new Oe(qt(o,c),null,(h&128)===128?n.readLeftID():null,null,(h&64)===64?n.readRightID():null,u?n.readParentInfo()?t.get(n.readString()):n.readLeftID():null,u&&(h&32)===32?n.readString():null,vy(n,h));a[l]=d,c+=d.length}}}}return e},sA=(n,t,e)=>{let i=[],r=zi(e.keys()).sort((f,x)=>f-x);if(r.length===0)return null;let s=()=>{if(r.length===0)return null;let f=e.get(r[r.length-1]);for(;f.refs.length===f.i;)if(r.pop(),r.length>0)f=e.get(r[r.length-1]);else return null;return f},a=s();if(a===null)return null;let o=new ch,c=new Map,l=(f,x)=>{let y=c.get(f);(y==null||y>x)&&c.set(f,x)},h=a.refs[a.i++],u=new Map,d=()=>{for(let f of i){let x=f.id.client,y=e.get(x);y?(y.i--,o.clients.set(x,y.refs.slice(y.i)),e.delete(x),y.i=0,y.refs=[]):o.clients.set(x,[f]),r=r.filter(m=>m!==x)}i.length=0};for(;;){if(h.constructor!==mn){let x=oi(u,h.id.client,()=>Ne(t,h.id.client))-h.id.clock;if(x<0)i.push(h),l(h.id.client,h.id.clock-1),d();else{let y=h.getMissing(n,t);if(y!==null){i.push(h);let m=e.get(y)||{refs:[],i:0};if(m.refs.length===m.i)l(y,Ne(t,y)),d();else{h=m.refs[m.i++];continue}}else(x===0||x<h.length)&&(h.integrate(n,x),u.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(a!==null&&a.i<a.refs.length)h=a.refs[a.i++];else{if(a=s(),a===null)break;h=a.refs[a.i++]}}if(o.clients.size>0){let f=new Bi;return kf(f,o,new Map),Yt(f.restEncoder,0),{missing:c,update:f.toUint8Array()}}return null},oA=(n,t)=>kf(n,t.doc.store,t.beforeState),aA=(n,t,e,i=new br(n))=>te(t,r=>{r.local=!1;let s=!1,a=r.doc,o=a.store,c=rA(i,a),l=sA(r,o,c),h=o.pendingStructs;if(h){for(let[d,f]of h.missing)if(f<Ne(o,d)){s=!0;break}if(l){for(let[d,f]of l.missing){let x=h.missing.get(d);(x==null||x>f)&&h.missing.set(d,f)}h.update=lh([h.update,l.update])}}else o.pendingStructs=l;let u=N0(i,r,o);if(o.pendingDs){let d=new br(ss(o.pendingDs));Bt(d.restDecoder);let f=N0(d,r,o);u&&f?o.pendingDs=lh([u,f]):o.pendingDs=u||f}else o.pendingDs=u;if(s){let d=o.pendingStructs.update;o.pendingStructs=null,J0(r.doc,d)}},e,!1);var J0=(n,t,e,i=br)=>{let r=ss(t);aA(r,n,e,new i(r))},mh=(n,t,e)=>J0(n,t,e,ah),cA=(n,t,e=new Map)=>{kf(n,t.store,e),Eo(n,nA(t.store))},lA=(n,t=new Uint8Array([0]),e=new Bi)=>{let i=K0(t);cA(e,n,i);let r=[e.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(vA(n.store.pendingStructs.update,t)),r.length>1){if(e.constructor===hs)return yA(r.map((s,a)=>a===0?s:MA(s)));if(e.constructor===Bi)return lh(r)}return r[0]},Z0=(n,t)=>lA(n,t,new hs),hA=n=>{let t=new Map,e=Bt(n.restDecoder);for(let i=0;i<e;i++){let r=Bt(n.restDecoder),s=Bt(n.restDecoder);t.set(r,s)}return t},K0=n=>hA(new oh(ss(n)));var wf=class{constructor(){this.l=[]}},O0=()=>new wf,z0=(n,t)=>n.l.push(t),F0=(n,t)=>{let e=n.l,i=e.length;n.l=e.filter(r=>t!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},Q0=(n,t,e)=>Ea(n.l,[t,e]),vr=class{constructor(t,e){this.client=t,this.clock=e}},th=(n,t)=>n===t||n!==null&&t!==null&&n.client===t.client&&n.clock===t.clock,qt=(n,t)=>new vr(n,t);var uA=n=>{for(let[t,e]of n.doc.share.entries())if(e===n)return t;throw dn()};var Ef=class{constructor(t,e){this.ds=t,this.sv=e}};var dA=(n,t)=>new Ef(n,t),MI=dA($0(),new Map);var bo=(n,t)=>t===void 0?!n.deleted:t.sv.has(n.id.client)&&(t.sv.get(n.id.client)||0)>n.id.clock&&!Y0(t.ds,n.id),Tf=(n,t)=>{let e=oi(n.meta,Tf,Oi),i=n.doc.store;e.has(t)||(t.sv.forEach((r,s)=>{r<Ne(i,s)&&Mr(n,qt(s,r))}),q0(n,t.ds,r=>{}),e.add(t))};var ch=class{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}},Vf=n=>{let t=new Map;return n.clients.forEach((e,i)=>{let r=e[e.length-1];t.set(i,r.id.clock+r.length)}),t},Ne=(n,t)=>{let e=n.clients.get(t);if(e===void 0)return 0;let i=e[e.length-1];return i.id.clock+i.length},ty=(n,t)=>{let e=n.clients.get(t.id.client);if(e===void 0)e=[],n.clients.set(t.id.client,e);else{let i=e[e.length-1];if(i.id.clock+i.length!==t.id.clock)throw dn()}e.push(t)},hi=(n,t)=>{let e=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===t)return i;let a=cn(t/(s+r.length-1)*i);for(;e<=i;){if(r=n[a],s=r.id.clock,s<=t){if(t<s+r.length)return a;e=a+1}else i=a-1;a=cn((e+i)/2)}throw dn()},fA=(n,t)=>{let e=n.clients.get(t.client);return e[hi(e,t.clock)]},_f=fA,Af=(n,t,e)=>{let i=hi(t,e),r=t[i];return r.id.clock<e&&r instanceof Oe?(t.splice(i+1,0,ph(n,r,e-r.id.clock)),i+1):i},Mr=(n,t)=>{let e=n.doc.store.clients.get(t.client);return e[Af(n,e,t.clock)]},B0=(n,t,e)=>{let i=t.clients.get(e.client),r=hi(i,e.clock),s=i[r];return e.clock!==s.id.clock+s.length-1&&s.constructor!==pn&&i.splice(r+1,0,ph(n,s,e.clock-s.id.clock+1)),s},pA=(n,t,e)=>{let i=n.clients.get(t.id.client);i[hi(i,t.id.clock)]=e},ey=(n,t,e,i,r)=>{if(i===0)return;let s=e+i,a=Af(n,t,e),o;do o=t[a++],s<o.id.clock+o.length&&Af(n,t,s),r(o);while(a<t.length&&t[a].id.clock<s)},Cf=class{constructor(t,e,i){this.doc=t,this.deleteSet=new cs,this.beforeState=Vf(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=e,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}},k0=(n,t)=>t.deleteSet.clients.size===0&&!Bx(t.afterState,(e,i)=>t.beforeState.get(i)!==e)?!1:(Ff(t.deleteSet),oA(n,t),Eo(n,t.deleteSet),!0),V0=(n,t,e)=>{let i=t._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&oi(n.changed,t,Oi).add(e)},ih=(n,t)=>{let e=n[t],i=n[t-1],r=t;for(;r>0;e=i,i=n[--r-1]){if(i.deleted===e.deleted&&i.constructor===e.constructor&&i.mergeWith(e)){e instanceof Oe&&e.parentSub!==null&&e.parent._map.get(e.parentSub)===e&&e.parent._map.set(e.parentSub,i);continue}break}let s=t-r;return s&&n.splice(t+1-s,s),s},mA=(n,t,e)=>{for(let[i,r]of n.clients.entries()){let s=t.clients.get(i);for(let a=r.length-1;a>=0;a--){let o=r[a],c=o.clock+o.len;for(let l=hi(s,o.clock),h=s[l];l<s.length&&h.id.clock<c;h=s[++l]){let u=s[l];if(o.clock+o.len<=u.id.clock)break;u instanceof Oe&&u.deleted&&!u.keep&&e(u)&&u.gc(t,!1)}}}},gA=(n,t)=>{n.clients.forEach((e,i)=>{let r=t.clients.get(i);for(let s=e.length-1;s>=0;s--){let a=e[s],o=Il(r.length-1,1+hi(r,a.clock+a.len-1));for(let c=o,l=r[c];c>0&&l.id.clock>=a.clock;l=r[c])c-=1+ih(r,c)}})};var ny=(n,t)=>{if(t<n.length){let e=n[t],i=e.doc,r=i.store,s=e.deleteSet,a=e._mergeStructs;try{Ff(s),e.afterState=Vf(e.doc.store),i.emit("beforeObserverCalls",[e,i]);let o=[];e.changed.forEach((c,l)=>o.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(e,c)})),o.push(()=>{e.changedParentTypes.forEach((c,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(c=c.filter(h=>h.target._item===null||!h.target._item.deleted),c.forEach(h=>{h.currentTarget=l,h._path=null}),c.sort((h,u)=>h.path.length-u.path.length),Q0(l._dEH,c,e))})}),o.push(()=>i.emit("afterTransaction",[e,i])),Ea(o,[]),e._needFormattingCleanup&&UA(e)}finally{i.gc&&mA(s,r,i.gcFilter),gA(s,r),e.afterState.forEach((h,u)=>{let d=e.beforeState.get(u)||0;if(d!==h){let f=r.clients.get(u),x=Fi(hi(f,d),1);for(let y=f.length-1;y>=x;)y-=1+ih(f,y)}});for(let h=a.length-1;h>=0;h--){let{client:u,clock:d}=a[h].id,f=r.clients.get(u),x=hi(f,d);x+1<f.length&&ih(f,x+1)>1||x>0&&ih(f,x)}if(!e.local&&e.afterState.get(i.clientID)!==e.beforeState.get(i.clientID)&&(C0(vo,Pa,"[yjs] ",Ua,Da,"Changed the client-id because another client seems to be using it."),i.clientID=j0()),i.emit("afterTransactionCleanup",[e,i]),i._observers.has("update")){let h=new hs;k0(h,e)&&i.emit("update",[h.toUint8Array(),e.origin,i,e])}if(i._observers.has("updateV2")){let h=new Bi;k0(h,e)&&i.emit("updateV2",[h.toUint8Array(),e.origin,i,e])}let{subdocsAdded:o,subdocsLoaded:c,subdocsRemoved:l}=e;(o.size>0||l.size>0||c.size>0)&&(o.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),l.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:c,added:o,removed:l},i,e]),l.forEach(h=>h.destroy())),n.length<=t+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):ny(n,t+1)}}},te=(n,t,e=null,i=!0)=>{let r=n._transactionCleanups,s=!1,a=null;n._transaction===null&&(s=!0,n._transaction=new Cf(n,e,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{a=t(n._transaction)}finally{if(s){let o=n._transaction===r[0];n._transaction=null,o&&ny(r,0)}}return a};function*xA(n){let t=Bt(n.restDecoder);for(let e=0;e<t;e++){let i=Bt(n.restDecoder),r=n.readClient(),s=Bt(n.restDecoder);for(let a=0;a<i;a++){let o=n.readInfo();if(o===10){let c=Bt(n.restDecoder);yield new mn(qt(r,s),c),s+=c}else if((31&o)!==0){let c=(o&192)===0,l=new Oe(qt(r,s),null,(o&128)===128?n.readLeftID():null,null,(o&64)===64?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(o&32)===32?n.readString():null,vy(n,o));yield l,s+=l.length}else{let c=n.readLen();yield new pn(qt(r,s),c),s+=c}}}}var za=class{constructor(t,e){this.gen=xA(t),this.curr=null,this.done=!1,this.filterSkips=e,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===mn);return this.curr}};var Fa=class{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}},yA=n=>lh(n,ah,hs);var _A=(n,t)=>{if(n.constructor===pn){let{client:e,clock:i}=n.id;return new pn(qt(e,i+t),n.length-t)}else if(n.constructor===mn){let{client:e,clock:i}=n.id;return new mn(qt(e,i+t),n.length-t)}else{let e=n,{client:i,clock:r}=e.id;return new Oe(qt(i,r+t),null,qt(i,r+t-1),null,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t))}},lh=(n,t=br,e=Bi)=>{if(n.length===1)return n[0];let i=n.map(h=>new t(ss(h))),r=i.map(h=>new za(h,!0)),s=null,a=new e,o=new Fa(a);for(;r=r.filter(d=>d.curr!==null),r.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){let x=d.curr.id.clock-f.curr.id.clock;return x===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===mn?1:-1:x}else return f.curr.id.client-d.curr.id.client}),r.length!==0;){let h=r[0],u=h.curr.id.client;if(s!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(u!==s.struct.id.client)yr(o,s.struct,s.offset),s={struct:d,offset:0},h.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===mn)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{yr(o,s.struct,s.offset);let x=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new mn(qt(u,s.struct.id.clock+s.struct.length),x),offset:0}}else{let x=s.struct.id.clock+s.struct.length-d.id.clock;x>0&&(s.struct.constructor===mn?s.struct.length-=x:d=_A(d,x)),s.struct.mergeWith(d)||(yr(o,s.struct,s.offset),s={struct:d,offset:0},h.next())}}else s={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==mn;d=h.next())yr(o,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(yr(o,s.struct,s.offset),s=null),Hf(o);let c=i.map(h=>Bf(h)),l=eA(c);return Eo(a,l),a.toUint8Array()},vA=(n,t,e=br,i=Bi)=>{let r=K0(t),s=new i,a=new Fa(s),o=new e(ss(n)),c=new za(o,!1);for(;c.curr;){let h=c.curr,u=h.id.client,d=r.get(u)||0;if(c.curr.constructor===mn){c.next();continue}if(h.id.clock+h.length>d)for(yr(a,h,Fi(d-h.id.clock,0)),c.next();c.curr&&c.curr.id.client===u;)yr(a,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===u&&c.curr.id.clock+c.curr.length<=d;)c.next()}Hf(a);let l=Bf(o);return Eo(s,l),s.toUint8Array()};var iy=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:Xn(n.encoder.restEncoder)}),n.encoder.restEncoder=_a(),n.written=0)},yr=(n,t,e)=>{n.written>0&&n.currClient!==t.id.client&&iy(n),n.written===0&&(n.currClient=t.id.client,n.encoder.writeClient(t.id.client),Yt(n.encoder.restEncoder,t.id.clock+e)),t.write(n.encoder,e),n.written++},Hf=n=>{iy(n);let t=n.encoder.restEncoder;Yt(t,n.clientStructs.length);for(let e=0;e<n.clientStructs.length;e++){let i=n.clientStructs[e];Yt(t,i.written),va(t,i.restEncoder)}},bA=(n,t,e,i)=>{let r=new e(ss(n)),s=new za(r,!1),a=new i,o=new Fa(a);for(let l=s.curr;l!==null;l=s.next())yr(o,t(l),0);Hf(o);let c=Bf(r);return Eo(a,c),a.toUint8Array()};var MA=n=>bA(n,a0,br,hs),H0="You must not compute changes after the event-handler fired.",Mo=class{constructor(t,e){this.target=t,this.currentTarget=t,this.transaction=e,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=SA(this.currentTarget,this.target))}deletes(t){return Y0(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Sn(H0);let t=new Map,e=this.target;this.transaction.changed.get(e).forEach(r=>{if(r!==null){let s=e._map.get(r),a,o;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))a="delete",o=Tl(c.content.getContent());else return;else c!==null&&this.deletes(c)?(a="update",o=Tl(c.content.getContent())):(a="add",o=void 0)}else if(this.deletes(s))a="delete",o=Tl(s.content.getContent());else return;t.set(r,{action:a,oldValue:o})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw Sn(H0);let e=this.target,i=Oi(),r=Oi(),s=[];if(t={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(e).has(null)){let o=null,c=()=>{o&&s.push(o)};for(let l=e._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((o===null||o.delete===void 0)&&(c(),o={delete:0}),o.delete+=l.length,r.add(l)):this.adds(l)?((o===null||o.insert===void 0)&&(c(),o={insert:[]}),o.insert=o.insert.concat(l.content.getContent()),i.add(l)):((o===null||o.retain===void 0)&&(c(),o={retain:0}),o.retain+=l.length);o!==null&&o.retain===void 0&&c()}this._changes=t}return t}},SA=(n,t)=>{let e=[];for(;t._item!==null&&t!==n;){if(t._item.parentSub!==null)e.unshift(t._item.parentSub);else{let i=0,r=t._item.parent._start;for(;r!==t._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;e.unshift(i)}t=t._item.parent}return e},$e=()=>{R0("Invalid access: Add Yjs type to a document before reading data.")},ry=80,Gf=0,Rf=class{constructor(t,e){t.marker=!0,this.p=t,this.index=e,this.timestamp=Gf++}},wA=n=>{n.timestamp=Gf++},sy=(n,t,e)=>{n.p.marker=!1,n.p=t,t.marker=!0,n.index=e,n.timestamp=Gf++},EA=(n,t,e)=>{if(n.length>=ry){let i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return sy(i,t,e),i}else{let i=new Rf(t,e);return n.push(i),i}},gh=(n,t)=>{if(n._start===null||t===0||n._searchMarker===null)return null;let e=n._searchMarker.length===0?null:n._searchMarker.reduce((s,a)=>Kr(t-s.index)<Kr(t-a.index)?s:a),i=n._start,r=0;for(e!==null&&(i=e.p,r=e.index,wA(e));i.right!==null&&r<t;){if(!i.deleted&&i.countable){if(t<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>t;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return e!==null&&Kr(e.index-r)<i.parent.length/ry?(sy(e,i,r),e):EA(n._searchMarker,i,r)},Ba=(n,t,e)=>{for(let i=n.length-1;i>=0;i--){let r=n[i];if(e>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(t<r.index||e>0&&t===r.index)&&(r.index=Fi(t,r.index+e))}};var xh=(n,t,e)=>{let i=n,r=t.changedParentTypes;for(;oi(r,n,()=>[]).push(e),n._item!==null;)n=n._item.parent;Q0(i._eH,e,t)},Ae=class{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=O0(),this._dEH=O0(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,e){this.doc=t,this._item=e}_copy(){throw wn()}clone(){throw wn()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,e){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){z0(this._eH,t)}observeDeep(t){z0(this._dEH,t)}unobserve(t){F0(this._eH,t)}unobserveDeep(t){F0(this._dEH,t)}toJSON(){}},oy=(n,t,e)=>{n.doc??$e(),t<0&&(t=n._length+t),e<0&&(e=n._length+e);let i=e-t,r=[],s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){let a=s.content.getContent();if(a.length<=t)t-=a.length;else{for(let o=t;o<a.length&&i>0;o++)r.push(a[o]),i--;t=0}}s=s.right}return r},ay=n=>{n.doc??$e();let t=[],e=n._start;for(;e!==null;){if(e.countable&&!e.deleted){let i=e.content.getContent();for(let r=0;r<i.length;r++)t.push(i[r])}e=e.right}return t};var ka=(n,t)=>{let e=0,i=n._start;for(n.doc??$e();i!==null;){if(i.countable&&!i.deleted){let r=i.content.getContent();for(let s=0;s<r.length;s++)t(r[s],e++,n)}i=i.right}},cy=(n,t)=>{let e=[];return ka(n,(i,r)=>{e.push(t(i,r,n))}),e},TA=n=>{let t=n._start,e=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(e===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};e=t.content.getContent(),i=0,t=t.right}let r=e[i++];return e.length<=i&&(e=null),{done:!1,value:r}}}},ly=(n,t)=>{n.doc??$e();let e=gh(n,t),i=n._start;for(e!==null&&(i=e.p,t-=e.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(t<i.length)return i.content.getContent()[t];t-=i.length}},hh=(n,t,e,i)=>{let r=e,s=n.doc,a=s.clientID,o=s.store,c=e===null?t._start:e.right,l=[],h=()=>{l.length>0&&(r=new Oe(qt(a,Ne(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new wo(l)),r.integrate(n,0),l=[])};i.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:r=new Oe(qt(a,Ne(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Xa(new Uint8Array(u))),r.integrate(n,0);break;case ls:r=new Oe(qt(a,Ne(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new qa(u)),r.integrate(n,0);break;default:if(u instanceof Ae)r=new Oe(qt(a,Ne(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Vi(u)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},hy=()=>Sn("Length exceeded!"),uy=(n,t,e,i)=>{if(e>t._length)throw hy();if(e===0)return t._searchMarker&&Ba(t._searchMarker,e,i.length),hh(n,t,null,i);let r=e,s=gh(t,e),a=t._start;for(s!==null&&(a=s.p,e-=s.index,e===0&&(a=a.prev,e+=a&&a.countable&&!a.deleted?a.length:0));a!==null;a=a.right)if(!a.deleted&&a.countable){if(e<=a.length){e<a.length&&Mr(n,qt(a.id.client,a.id.clock+e));break}e-=a.length}return t._searchMarker&&Ba(t._searchMarker,r,i.length),hh(n,t,a,i)},AA=(n,t,e)=>{let r=(t._searchMarker||[]).reduce((s,a)=>a.index>s.index?a:s,{index:0,p:t._start}).p;if(r)for(;r.right;)r=r.right;return hh(n,t,r,e)},dy=(n,t,e,i)=>{if(i===0)return;let r=e,s=i,a=gh(t,e),o=t._start;for(a!==null&&(o=a.p,e-=a.index);o!==null&&e>0;o=o.right)!o.deleted&&o.countable&&(e<o.length&&Mr(n,qt(o.id.client,o.id.clock+e)),e-=o.length);for(;i>0&&o!==null;)o.deleted||(i<o.length&&Mr(n,qt(o.id.client,o.id.clock+i)),o.delete(n),i-=o.length),o=o.right;if(i>0)throw hy();t._searchMarker&&Ba(t._searchMarker,r,-s+i)},uh=(n,t,e)=>{let i=t._map.get(e);i!==void 0&&i.delete(n)},Wf=(n,t,e,i)=>{let r=t._map.get(e)||null,s=n.doc,a=s.clientID,o;if(i==null)o=new wo([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:o=new wo([i]);break;case Uint8Array:o=new Xa(i);break;case ls:o=new qa(i);break;default:if(i instanceof Ae)o=new Vi(i);else throw new Error("Unexpected content type")}new Oe(qt(a,Ne(s.store,a)),r,r&&r.lastId,null,null,t,e,o).integrate(n,0)},Xf=(n,t)=>{n.doc??$e();let e=n._map.get(t);return e!==void 0&&!e.deleted?e.content.getContent()[e.length-1]:void 0},fy=n=>{let t={};return n.doc??$e(),n._map.forEach((e,i)=>{e.deleted||(t[i]=e.content.getContent()[e.length-1])}),t},py=(n,t)=>{n.doc??$e();let e=n._map.get(t);return e!==void 0&&!e.deleted};var CA=(n,t)=>{let e={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!t.sv.has(s.id.client)||s.id.clock>=(t.sv.get(s.id.client)||0));)s=s.left;s!==null&&bo(s,t)&&(e[r]=s.content.getContent()[s.length-1])}),e},eh=n=>(n.doc??$e(),P0(n._map.entries(),t=>!t[1].deleted)),If=class extends Mo{},dh=class n extends Ae{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){let e=new n;return e.push(t),e}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Ae?e.clone():e)),t}get length(){return this.doc??$e(),this._length}_callObserver(t,e){super._callObserver(t,e),xh(this,t,new If(this,t))}insert(t,e){this.doc!==null?te(this.doc,i=>{uy(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}push(t){this.doc!==null?te(this.doc,e=>{AA(e,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,e=1){this.doc!==null?te(this.doc,i=>{dy(i,this,t,e)}):this._prelimContent.splice(t,e)}get(t){return ly(this,t)}toArray(){return ay(this)}slice(t=0,e=this.length){return oy(this,t,e)}toJSON(){return this.map(t=>t instanceof Ae?t.toJSON():t)}map(t){return cy(this,t)}forEach(t){ka(this,t)}[Symbol.iterator](){return TA(this)}_write(t){t.writeTypeRef(JA)}},RA=n=>new dh,Lf=class extends Mo{constructor(t,e,i){super(t,e),this.keysChanged=i}},us=class n extends Ae{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,e){super._integrate(t,e),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return this.forEach((e,i)=>{t.set(i,e instanceof Ae?e.clone():e)}),t}_callObserver(t,e){xh(this,t,new Lf(this,t,e))}toJSON(){this.doc??$e();let t={};return this._map.forEach((e,i)=>{if(!e.deleted){let r=e.content.getContent()[e.length-1];t[i]=r instanceof Ae?r.toJSON():r}}),t}get size(){return[...eh(this)].length}keys(){return Ql(eh(this),t=>t[0])}values(){return Ql(eh(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return Ql(eh(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??$e(),this._map.forEach((e,i)=>{e.deleted||t(e.content.getContent()[e.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?te(this.doc,e=>{uh(e,this,t)}):this._prelimContent.delete(t)}set(t,e){return this.doc!==null?te(this.doc,i=>{Wf(i,this,t,e)}):this._prelimContent.set(t,e),e}get(t){return Xf(this,t)}has(t){return py(this,t)}clear(){this.doc!==null?te(this.doc,t=>{this.forEach(function(e,i,r){uh(t,r,i)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(ZA)}},IA=n=>new us,_r=(n,t)=>n===t||typeof n=="object"&&typeof t=="object"&&n&&t&&Jd(n,t),Va=class{constructor(t,e,i,r){this.left=t,this.right=e,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&dn(),this.right.content.constructor){case Ce:this.right.deleted||To(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}},G0=(n,t,e)=>{for(;t.right!==null&&e>0;){switch(t.right.content.constructor){case Ce:t.right.deleted||To(t.currentAttributes,t.right.content);break;default:t.right.deleted||(e<t.right.length&&Mr(n,qt(t.right.id.client,t.right.id.clock+e)),t.index+=t.right.length,e-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},nh=(n,t,e,i)=>{let r=new Map,s=i?gh(t,e):null;if(s){let a=new Va(s.p.left,s.p,s.index,r);return G0(n,a,e-s.index)}else{let a=new Va(null,t._start,0,r);return G0(n,a,e)}},my=(n,t,e,i)=>{for(;e.right!==null&&(e.right.deleted===!0||e.right.content.constructor===Ce&&_r(i.get(e.right.content.key),e.right.content.value));)e.right.deleted||i.delete(e.right.content.key),e.forward();let r=n.doc,s=r.clientID;i.forEach((a,o)=>{let c=e.left,l=e.right,h=new Oe(qt(s,Ne(r.store,s)),c,c&&c.lastId,l,l&&l.id,t,null,new Ce(o,a));h.integrate(n,0),e.right=h,e.forward()})},To=(n,t)=>{let{key:e,value:i}=t;i===null?n.delete(e):n.set(e,i)},gy=(n,t)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===Ce&&_r(t[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},xy=(n,t,e,i)=>{let r=n.doc,s=r.clientID,a=new Map;for(let o in i){let c=i[o],l=e.currentAttributes.get(o)??null;if(!_r(l,c)){a.set(o,l);let{left:h,right:u}=e;e.right=new Oe(qt(s,Ne(r.store,s)),h,h&&h.lastId,u,u&&u.id,t,null,new Ce(o,c)),e.right.integrate(n,0),e.forward()}}return a},vf=(n,t,e,i,r)=>{e.currentAttributes.forEach((d,f)=>{r[f]===void 0&&(r[f]=null)});let s=n.doc,a=s.clientID;gy(e,r);let o=xy(n,t,e,r),c=i.constructor===String?new ki(i):i instanceof Ae?new Vi(i):new ds(i),{left:l,right:h,index:u}=e;t._searchMarker&&Ba(t._searchMarker,e.index,c.getLength()),h=new Oe(qt(a,Ne(s.store,a)),l,l&&l.lastId,h,h&&h.id,t,null,c),h.integrate(n,0),e.right=h,e.index=u,e.forward(),my(n,t,e,o)},W0=(n,t,e,i,r)=>{let s=n.doc,a=s.clientID;gy(e,r);let o=xy(n,t,e,r);t:for(;e.right!==null&&(i>0||o.size>0&&(e.right.deleted||e.right.content.constructor===Ce));){if(!e.right.deleted)switch(e.right.content.constructor){case Ce:{let{key:c,value:l}=e.right.content,h=r[c];if(h!==void 0){if(_r(h,l))o.delete(c);else{if(i===0)break t;o.set(c,l)}e.right.delete(n)}else e.currentAttributes.set(c,l);break}default:i<e.right.length&&Mr(n,qt(e.right.id.client,e.right.id.clock+i)),i-=e.right.length;break}e.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;e.right=new Oe(qt(a,Ne(s.store,a)),e.left,e.left&&e.left.lastId,e.right,e.right&&e.right.id,t,null,new ki(c)),e.right.integrate(n,0),e.forward()}my(n,t,e,o)},yy=(n,t,e,i,r)=>{let s=t,a=an();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===Ce){let l=s.content;a.set(l.key,l)}s=s.right}let o=0,c=!1;for(;t!==s;){if(e===t&&(c=!0),!t.deleted){let l=t.content;switch(l.constructor){case Ce:{let{key:h,value:u}=l,d=i.get(h)??null;(a.get(h)!==l||d===u)&&(t.delete(n),o++,!c&&(r.get(h)??null)===u&&d!==u&&(d===null?r.delete(h):r.set(h,d))),!c&&!t.deleted&&To(r,l);break}}}t=t.right}return o},LA=(n,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;let e=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===Ce){let i=t.content.key;e.has(i)?t.delete(n):e.add(i)}t=t.left}},PA=n=>{let t=0;return te(n.doc,e=>{let i=n._start,r=n._start,s=an(),a=El(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case Ce:To(a,r.content);break;default:t+=yy(e,i,r,s,a),s=El(a),i=r;break}r=r.right}}),t},UA=n=>{let t=new Set,e=n.doc;for(let[i,r]of n.afterState.entries()){let s=n.beforeState.get(i)||0;r!==s&&ey(n,e.store.clients.get(i),s,r,a=>{!a.deleted&&a.content.constructor===Ce&&a.constructor!==pn&&t.add(a.parent)})}te(e,i=>{q0(n,n.deleteSet,r=>{if(r instanceof pn||!r.parent._hasFormatting||t.has(r.parent))return;let s=r.parent;r.content.constructor===Ce?t.add(s):LA(i,r)});for(let r of t)PA(r)})},X0=(n,t,e)=>{let i=e,r=El(t.currentAttributes),s=t.right;for(;e>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case Vi:case ds:case ki:e<t.right.length&&Mr(n,qt(t.right.id.client,t.right.id.clock+e)),e-=t.right.length,t.right.delete(n);break}t.forward()}s&&yy(n,s,t.right,r,t.currentAttributes);let a=(t.left||t.right).parent;return a._searchMarker&&Ba(a._searchMarker,t.index,-i+e),t},Pf=class extends Mo{constructor(t,e,i){super(t,e),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){let t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){let t=this.target.doc,e=[];te(t,i=>{let r=new Map,s=new Map,a=this.target._start,o=null,c={},l="",h=0,u=0,d=()=>{if(o!==null){let f=null;switch(o){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(f={insert:l},r.size>0&&(f.attributes={},r.forEach((x,y)=>{x!==null&&(f.attributes[y]=x)}))),l="";break;case"retain":h>0&&(f={retain:h},o0(c)||(f.attributes=r0({},c))),h=0;break}f&&e.push(f),o=null}};for(;a!==null;){switch(a.content.constructor){case Vi:case ds:this.adds(a)?this.deletes(a)||(d(),o="insert",l=a.content.getContent()[0],d()):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),u+=1):a.deleted||(o!=="retain"&&(d(),o="retain"),h+=1);break;case ki:this.adds(a)?this.deletes(a)||(o!=="insert"&&(d(),o="insert"),l+=a.content.str):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),u+=a.length):a.deleted||(o!=="retain"&&(d(),o="retain"),h+=a.length);break;case Ce:{let{key:f,value:x}=a.content;if(this.adds(a)){if(!this.deletes(a)){let y=r.get(f)??null;_r(y,x)?x!==null&&a.delete(i):(o==="retain"&&d(),_r(x,s.get(f)??null)?delete c[f]:c[f]=x)}}else if(this.deletes(a)){s.set(f,x);let y=r.get(f)??null;_r(y,x)||(o==="retain"&&d(),c[f]=y)}else if(!a.deleted){s.set(f,x);let y=c[f];y!==void 0&&(_r(y,x)?y!==null&&a.delete(i):(o==="retain"&&d(),x===null?delete c[f]:c[f]=x))}a.deleted||(o==="insert"&&d(),To(r,a.content));break}}a=a.right}for(d();e.length>0;){let f=e[e.length-1];if(f.retain!==void 0&&f.attributes===void 0)e.pop();else break}}),this._delta=e}return this._delta}},Ha=class n extends Ae{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??$e(),this._length}_integrate(t,e){super._integrate(t,e);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}_callObserver(t,e){super._callObserver(t,e);let i=new Pf(this,t,e);xh(this,t,i),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??$e();let t="",e=this._start;for(;e!==null;)!e.deleted&&e.countable&&e.content.constructor===ki&&(t+=e.content.str),e=e.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:e=!0}={}){this.doc!==null?te(this.doc,i=>{let r=new Va(null,this._start,0,new Map);for(let s=0;s<t.length;s++){let a=t[s];if(a.insert!==void 0){let o=!e&&typeof a.insert=="string"&&s===t.length-1&&r.right===null&&a.insert.slice(-1)===`
`?a.insert.slice(0,-1):a.insert;(typeof o!="string"||o.length>0)&&vf(i,this,r,o,a.attributes||{})}else a.retain!==void 0?W0(i,this,r,a.retain,a.attributes||{}):a.delete!==void 0&&X0(i,r,a.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,e,i){this.doc??$e();let r=[],s=new Map,a=this.doc,o="",c=this._start;function l(){if(o.length>0){let u={},d=!1;s.forEach((x,y)=>{d=!0,u[y]=x});let f={insert:o};d&&(f.attributes=u),r.push(f),o=""}}let h=()=>{for(;c!==null;){if(bo(c,t)||e!==void 0&&bo(c,e))switch(c.content.constructor){case ki:{let u=s.get("ychange");t!==void 0&&!bo(c,t)?(u===void 0||u.user!==c.id.client||u.type!=="removed")&&(l(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):e!==void 0&&!bo(c,e)?(u===void 0||u.user!==c.id.client||u.type!=="added")&&(l(),s.set("ychange",i?i("added",c.id):{type:"added"})):u!==void 0&&(l(),s.delete("ychange")),o+=c.content.str;break}case Vi:case ds:{l();let u={insert:c.content.getContent()[0]};if(s.size>0){let d={};u.attributes=d,s.forEach((f,x)=>{d[x]=f})}r.push(u);break}case Ce:bo(c,t)&&(l(),To(s,c.content));break}c=c.right}l()};return t||e?te(a,u=>{t&&Tf(u,t),e&&Tf(u,e),h()},"cleanup"):h(),r}insert(t,e,i){if(e.length<=0)return;let r=this.doc;r!==null?te(r,s=>{let a=nh(s,this,t,!i);i||(i={},a.currentAttributes.forEach((o,c)=>{i[c]=o})),vf(s,this,a,e,i)}):this._pending.push(()=>this.insert(t,e,i))}insertEmbed(t,e,i){let r=this.doc;r!==null?te(r,s=>{let a=nh(s,this,t,!i);vf(s,this,a,e,i||{})}):this._pending.push(()=>this.insertEmbed(t,e,i||{}))}delete(t,e){if(e===0)return;let i=this.doc;i!==null?te(i,r=>{X0(r,nh(r,this,t,!0),e)}):this._pending.push(()=>this.delete(t,e))}format(t,e,i){if(e===0)return;let r=this.doc;r!==null?te(r,s=>{let a=nh(s,this,t,!1);a.right!==null&&W0(s,this,a,e,i)}):this._pending.push(()=>this.format(t,e,i))}removeAttribute(t){this.doc!==null?te(this.doc,e=>{uh(e,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Wf(i,this,t,e)}):this._pending.push(()=>this.setAttribute(t,e))}getAttribute(t){return Xf(this,t)}getAttributes(){return fy(this)}_write(t){t.writeTypeRef(KA)}},DA=n=>new Ha,Na=class{constructor(t,e=()=>!0){this._filter=e,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??$e()}[Symbol.iterator](){return this}next(){let t=this._currentNode,e=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(e)))do if(e=t.content.type,!t.deleted&&(e.constructor===Ga||e.constructor===So)&&e._start!==null)t=e._start;else for(;t!==null;)if(t.right!==null){t=t.right;break}else t.parent===this._root?t=null:t=t.parent._item;while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}},So=class n extends Ae{constructor(){super(),this._prelimContent=[]}get firstChild(){let t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Ae?e.clone():e)),t}get length(){return this.doc??$e(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new Na(this,t)}querySelector(t){t=t.toUpperCase();let i=new Na(this,r=>r.nodeName&&r.nodeName.toUpperCase()===t).next();return i.done?null:i.value}querySelectorAll(t){return t=t.toUpperCase(),zi(new Na(this,e=>e.nodeName&&e.nodeName.toUpperCase()===t))}_callObserver(t,e){xh(this,t,new Uf(this,e,t))}toString(){return cy(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,e={},i){let r=t.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),ka(this,s=>{r.insertBefore(s.toDOM(t,e,i),null)}),r}insert(t,e){this.doc!==null?te(this.doc,i=>{uy(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}insertAfter(t,e){if(this.doc!==null)te(this.doc,i=>{let r=t&&t instanceof Ae?t._item:t;hh(i,this,r,e)});else{let i=this._prelimContent,r=t===null?0:i.findIndex(s=>s===t)+1;if(r===0&&t!==null)throw Sn("Reference item not found");i.splice(r,0,...e)}}delete(t,e=1){this.doc!==null?te(this.doc,i=>{dy(i,this,t,e)}):this._prelimContent.splice(t,e)}toArray(){return ay(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return ly(this,t)}slice(t=0,e=this.length){return oy(this,t,e)}forEach(t){ka(this,t)}_write(t){t.writeTypeRef(tC)}},NA=n=>new So,Ga=class n extends So{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,e){super._integrate(t,e),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new n(this.nodeName)}clone(){let t=new n(this.nodeName),e=this.getAttributes();return s0(e,(i,r)=>{typeof i=="string"&&t.setAttribute(r,i)}),t.insert(0,this.toArray().map(i=>i instanceof Ae?i.clone():i)),t}toString(){let t=this.getAttributes(),e=[],i=[];for(let o in t)i.push(o);i.sort();let r=i.length;for(let o=0;o<r;o++){let c=i[o];e.push(c+'="'+t[c]+'"')}let s=this.nodeName.toLocaleLowerCase(),a=e.length>0?" "+e.join(" "):"";return`<${s}${a}>${super.toString()}</${s}>`}removeAttribute(t){this.doc!==null?te(this.doc,e=>{uh(e,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Wf(i,this,t,e)}):this._prelimAttrs.set(t,e)}getAttribute(t){return Xf(this,t)}hasAttribute(t){return py(this,t)}getAttributes(t){return t?CA(this,t):fy(this)}toDOM(t=document,e={},i){let r=t.createElement(this.nodeName),s=this.getAttributes();for(let a in s){let o=s[a];typeof o=="string"&&r.setAttribute(a,o)}return ka(this,a=>{r.appendChild(a.toDOM(t,e,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(t){t.writeTypeRef(QA),t.writeKey(this.nodeName)}},OA=n=>new Ga(n.readKey()),Uf=class extends Mo{constructor(t,e,i){super(t,i),this.childListChanged=!1,this.attributesChanged=new Set,e.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}},Df=class n extends us{constructor(t){super(),this.hookName=t}_copy(){return new n(this.hookName)}clone(){let t=new n(this.hookName);return this.forEach((e,i)=>{t.set(i,e)}),t}toDOM(t=document,e={},i){let r=e[this.hookName],s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(t){t.writeTypeRef(eC),t.writeKey(this.hookName)}},zA=n=>new Df(n.readKey()),Nf=class n extends Ha{get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}toDOM(t=document,e,i){let r=t.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(t=>{let e=[];for(let r in t.attributes){let s=[];for(let a in t.attributes[r])s.push({key:a,value:t.attributes[r][a]});s.sort((a,o)=>a.key<o.key?-1:1),e.push({nodeName:r,attrs:s})}e.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<e.length;r++){let s=e[r];i+=`<${s.nodeName}`;for(let a=0;a<s.attrs.length;a++){let o=s.attrs[a];i+=` ${o.key}="${o.value}"`}i+=">"}i+=t.insert;for(let r=e.length-1;r>=0;r--)i+=`</${e[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(nC)}},FA=n=>new Nf,Wa=class{constructor(t,e){this.id=t,this.length=e}get deleted(){throw wn()}mergeWith(t){return!1}write(t,e,i){throw wn()}integrate(t,e){throw wn()}},BA=0,pn=class extends Wa{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){e>0&&(this.id.clock+=e,this.length-=e),ty(t.doc.store,this)}write(t,e){t.writeInfo(BA),t.writeLen(this.length-e)}getMissing(t,e){return null}},Xa=class n{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new n(this.content)}splice(t){throw wn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeBuf(this.content)}getRef(){return 3}},kA=n=>new Xa(n.readBuf()),fh=class n{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.len)}splice(t){let e=new n(this.len-t);return this.len=t,e}mergeWith(t){return this.len+=t.len,!0}integrate(t,e){sh(t.deleteSet,e.id.client,e.id.clock,this.len),e.markDeleted()}delete(t){}gc(t){}write(t,e){t.writeLen(this.len-e)}getRef(){return 1}},VA=n=>new fh(n.readLen()),_y=(n,t)=>new ls({guid:n,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1}),qa=class n{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;let e={};this.opts=e,t.gc||(e.gc=!1),t.autoLoad&&(e.autoLoad=!0),t.meta!==null&&(e.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new n(_y(this.doc.guid,this.opts))}splice(t){throw wn()}mergeWith(t){return!1}integrate(t,e){this.doc._item=e,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,e){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}},HA=n=>new qa(_y(n.readString(),n.readAny())),ds=class n{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new n(this.embed)}splice(t){throw wn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeJSON(this.embed)}getRef(){return 5}},GA=n=>new ds(n.readJSON()),Ce=class n{constructor(t,e){this.key=t,this.value=e}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.key,this.value)}splice(t){throw wn()}mergeWith(t){return!1}integrate(t,e){let i=e.parent;i._searchMarker=null,i._hasFormatting=!0}delete(t){}gc(t){}write(t,e){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}},WA=n=>new Ce(n.readKey(),n.readJSON()),Of=class n{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}},XA=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++){let r=n.readString();r==="undefined"?e.push(void 0):e.push(JSON.parse(r))}return new Of(e)},qA=Aa("node_env")==="development",wo=class n{constructor(t){this.arr=t,qA&&Zd(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeAny(s)}}getRef(){return 8}},YA=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++)e.push(n.readAny());return new wo(e)},ki=class n{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new n(this.str)}splice(t){let e=new n(this.str.slice(t));this.str=this.str.slice(0,t);let i=this.str.charCodeAt(t-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,t-1)+"\uFFFD",e.str="\uFFFD"+e.str.slice(1)),e}mergeWith(t){return this.str+=t.str,!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeString(e===0?this.str:this.str.slice(e))}getRef(){return 4}},$A=n=>new ki(n.readString()),jA=[RA,IA,DA,OA,NA,zA,FA],JA=0,ZA=1,KA=2,QA=3,tC=4,eC=5,nC=6,Vi=class n{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new n(this.type._copy())}splice(t){throw wn()}mergeWith(t){return!1}integrate(t,e){this.type._integrate(t.doc,e)}delete(t){let e=this.type._start;for(;e!==null;)e.deleted?e.id.clock<(t.beforeState.get(e.id.client)||0)&&t._mergeStructs.push(e):e.delete(t),e=e.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(t.beforeState.get(i.id.client)||0)&&t._mergeStructs.push(i):i.delete(t)}),t.changed.delete(this.type)}gc(t){let e=this.type._start;for(;e!==null;)e.gc(t,!0),e=e.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(t,!0),i=i.left}),this.type._map=new Map}write(t,e){this.type._write(t)}getRef(){return 7}},iC=n=>new Vi(jA[n.readTypeRef()](n));var ph=(n,t,e)=>{let{client:i,clock:r}=t.id,s=new Oe(qt(i,r+e),t,qt(i,r+e-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e));return t.deleted&&s.markDeleted(),t.keep&&(s.keep=!0),t.redone!==null&&(s.redone=qt(t.redone.client,t.redone.clock+e)),t.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),t.length=e,s};var Oe=class n extends Wa{constructor(t,e,i,r,s,a,o,c){super(t,c.getLength()),this.origin=i,this.left=e,this.right=r,this.rightOrigin=s,this.parent=a,this.parentSub=o,this.redone=null,this.content=c,this.info=this.content.isCountable()?2:0}set marker(t){(this.info&8)>0!==t&&(this.info^=8)}get marker(){return(this.info&8)>0}get keep(){return(this.info&1)>0}set keep(t){this.keep!==t&&(this.info^=1)}get countable(){return(this.info&2)>0}get deleted(){return(this.info&4)>0}set deleted(t){this.deleted!==t&&(this.info^=4)}markDeleted(){this.info|=4}getMissing(t,e){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=Ne(e,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=Ne(e,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===vr&&this.id.client!==this.parent.client&&this.parent.clock>=Ne(e,this.parent.client))return this.parent.client;if(this.origin&&(this.left=B0(t,e,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=Mr(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===pn||this.right&&this.right.constructor===pn)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===n&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===n&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===vr){let i=_f(e,this.parent);i.constructor===pn?this.parent=null:this.parent=i.content.type}return null}integrate(t,e){if(e>0&&(this.id.clock+=e,this.left=B0(t,t.doc.store,qt(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(e),this.length-=e),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;let s=new Set,a=new Set;for(;r!==null&&r!==this.right;){if(a.add(r),s.add(r),th(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(th(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&a.has(_f(t.doc.store,r.origin)))s.has(_f(t.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){let i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),ty(t.doc.store,this),this.content.integrate(t,this),V0(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new pn(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:qt(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&th(t.origin,this.lastId)&&this.right===t&&th(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){let e=this.parent._searchMarker;return e&&e.forEach(i=>{i.p===t&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){let e=this.parent;this.countable&&this.parentSub===null&&(e._length-=this.length),this.markDeleted(),sh(t.deleteSet,this.id.client,this.id.clock,this.length),V0(t,e,this.parentSub),this.content.delete(t)}}gc(t,e){if(!this.deleted)throw dn();this.content.gc(t),e?pA(t,this,new pn(this.id,this.length)):this.content=new fh(this.length)}write(t,e){let i=e>0?qt(this.id.client,this.id.clock+e-1):this.origin,r=this.rightOrigin,s=this.parentSub,a=this.content.getRef()&31|(i===null?0:128)|(r===null?0:64)|(s===null?0:32);if(t.writeInfo(a),i!==null&&t.writeLeftID(i),r!==null&&t.writeRightID(r),i===null&&r===null){let o=this.parent;if(o._item!==void 0){let c=o._item;if(c===null){let l=uA(o);t.writeParentInfo(!0),t.writeString(l)}else t.writeParentInfo(!1),t.writeLeftID(c.id)}else o.constructor===String?(t.writeParentInfo(!0),t.writeString(o)):o.constructor===vr?(t.writeParentInfo(!1),t.writeLeftID(o)):dn();s!==null&&t.writeString(s)}this.content.write(t,e)}},vy=(n,t)=>rC[t&31](n),rC=[()=>{dn()},VA,XA,kA,$A,GA,WA,iC,YA,HA,()=>{dn()}],sC=10,mn=class extends Wa{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){dn()}write(t,e){t.writeInfo(sC),Yt(t.restEncoder,this.length-e)}getMissing(t,e){return null}},by=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},My="__ $YJS$ __";by[My]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");by[My]=!0;var oC="nodes",aC="doc",Ya="",wy=n=>n.getMap(oC),Ey=n=>n.getMap(aC),cC=n=>n.map(t=>[t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.c]),lC=n=>n.map(t=>({x0:t[0],y0:t[1],z0:t[2],x1:t[3],y1:t[4],z1:t[5],c:t[6]})),Hi=(n,t,e)=>n.get(t)===e?!1:(n.set(t,e),!0),hC=(n,t)=>{let e=cC(t),i=n.get("b");return i&&JSON.stringify(i)===JSON.stringify(e)?!1:(n.set("b",e),!0)};function uC(n){let t=[],e=(i,r,s)=>{t.push({node:i,parent:r,ord:s}),i.type==="scene"&&i.children.forEach((a,o)=>e(a,i.id,o))};return e(n,Ya,0),t}function Yf(n,t,e){let i=wy(n),r=uC(t),s=new Set(r.map(o=>o.node.id)),a=!1;return te(n,()=>{let o=Ey(n);o.get("root")!==t.id&&(o.set("root",t.id),a=!0);for(let c of[...i.keys()])s.has(c)||(i.delete(c),a=!0);for(let c of r){let l=i.get(c.node.id);l||(l=new us,i.set(c.node.id,l),a=!0);let h=c.node;a=Hi(l,"t",h.type==="object"?"o":"s")||a,a=Hi(l,"p",c.parent)||a,a=Hi(l,"o",c.ord)||a,a=Hi(l,"nm",h.name)||a,a=Hi(l,"px",h.pos.x)||a,a=Hi(l,"py",h.pos.y)||a,a=Hi(l,"pz",h.pos.z)||a,a=Hi(l,"r",h.rot)||a,a=Hi(l,"vs",h.vis)||a,h.type==="object"&&(a=hC(l,h.boxes)||a)}},e),a}var dC=n=>((typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):0)%4+4)%4,qf=n=>typeof n=="number"&&Number.isFinite(n)?Math.round(n):0,fC=n=>typeof n=="number"&&Number.isFinite(n)?n:0,pC=["visible","deemphasized","hidden"],mC=n=>pC.includes(n)?n:"visible";function gC(n,t){let e=new Map(n);for(let i of e.keys()){let r=new Set([i]),s=i;for(;;){let a=e.get(s);if(a===void 0||a===Ya||!e.has(a))break;if(r.has(a)){let o=[a];for(let l=e.get(a);l!==a;l=e.get(l))o.push(l);o.sort();let c=o[o.length-1];e.set(c,c===t?Ya:t);break}r.add(a),s=a}}return e}var xC=(n,t)=>n[1]-t[1]||(n[0]<t[0]?-1:n[0]>t[0]?1:0);function Ao(n){let t=wy(n),e=new Map;if(t.forEach((c,l)=>{let h=c.get("p");e.set(l,typeof h=="string"?h:Ya)}),!e.size)return null;let i=Ey(n).get("root")??"";if(t.has(i)||(i=[...e].find(([,c])=>c===Ya)?.[0]??""),!i)return null;let r=gC(e,i),s=new Map;for(let[c,l]of r){if(c===i)continue;let h=fC(t.get(c)?.get("o")),u=s.get(l);u?u.push([c,h]):s.set(l,[[c,h]])}for(let c of s.values())c.sort(xC);let a=c=>{let l=t.get(c);if(!l)return null;let h={id:c,name:typeof l.get("nm")=="string"?l.get("nm"):"",pos:{x:qf(l.get("px")),y:qf(l.get("py")),z:qf(l.get("pz"))},rot:dC(l.get("r")),vis:mC(l.get("vs"))};if(l.get("t")==="o"){let u=l.get("b");return{type:"object",...h,boxes:Array.isArray(u)?lC(u):[]}}return{type:"scene",...h,children:(s.get(c)??[]).map(([u])=>a(u)).filter(u=>u!==null)}},o=a(i);return o&&o.type==="scene"?o:null}var $a=()=>new ls;function Ty(n){let t=$a();return Yf(t,n),t}var $f=n=>Z0(n);var yC="voxelier";var ja="meta",Ja="data",Co=null;function _C(){return Co||(Co=new Promise((n,t)=>{let e=indexedDB.open(yC,1);e.onupgradeneeded=()=>{let i=e.result;i.objectStoreNames.contains(ja)||i.createObjectStore(ja),i.objectStoreNames.contains(Ja)||i.createObjectStore(Ja)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Co.catch(()=>{Co=null}),Co)}function Ro(n,t,e){return _C().then(i=>new Promise((r,s)=>{let a=i.transaction(n,t),o=e(a.objectStore(n));o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error),a.onabort=()=>s(a.error)}))}var Ay=(n,t)=>Ro(Ja,"readwrite",e=>e.put(t,n)).then(()=>{}),Cy=n=>Ro(Ja,"readonly",t=>t.get(n)).then(t=>t instanceof Uint8Array?t:null),Ry=n=>Ro(Ja,"readwrite",t=>t.delete(n)).then(()=>{}),Iy=n=>Ro(ja,"readwrite",t=>t.put(n,n.id)).then(()=>{}),Ly=n=>Ro(ja,"readwrite",t=>t.delete(n)).then(()=>{}),jf=()=>Ro(ja,"readonly",n=>n.getAll()).then(n=>n.filter(t=>t&&typeof t.id=="string")).then(n=>n.sort((t,e)=>(e.updated??0)-(t.updated??0)));var _h=Symbol("remote"),vC=Symbol("local"),ui=$a(),yh=null,Za=null,Zf=null,Py=()=>ui,Uy=()=>yh,Dy=n=>{Zf=n},Kf=n=>`doc:${n}`,bC=n=>`voxelier:doc:${n}`,Io="";function vh(){if(yh===null)return;let n=yh;Ay(Kf(n),$f(ui)).catch(()=>{}),Iy({id:n,name:Io,updated:Date.now()}).catch(()=>{})}function Qf(n){ui.off("update",Jf),ui=n,ui.on("update",Jf)}function Jf(n,t){t!==_h&&Ny({k:"u",b:n})}ui.on("update",Jf);function Ny(n){try{Za?.postMessage(n)}catch{}}async function tp(n){Za?.close(),Za=null,yh=n,typeof BroadcastChannel<"u"&&(Za=new BroadcastChannel(bC(n)),Za.onmessage=e=>{let i=e.data;!i||i.k!=="u"&&i.k!=="r"||!(i.b instanceof Uint8Array)||(i.k==="r"?SC(i.b):MC(i.b))});let t=null;try{t=await Cy(Kf(n))}catch{return null}if(!t)return null;try{let e=$a();mh(e,t,_h);let i=Ao(e);return i?(Qf(e),Io=i.name,i):null}catch{return null}}async function Oy(n){await Promise.all([Ry(Kf(n)).catch(()=>{}),Ly(n).catch(()=>{})])}function MC(n){try{mh(ui,n,_h);let t=Ao(ui);return t&&(Io=t.name,Zf?.(t),vh()),t}catch{return null}}function SC(n){try{let t=$a();mh(t,n,_h);let e=Ao(t);return e?(Qf(t),Io=e.name,Zf?.(e),vh(),e):null}catch{return null}}function ep(n){return Io=n.name,Yf(ui,n,vC)?(vh(),!0):!1}function np(n){Qf(Ty(n)),Io=n.name,vh(),Ny({k:"r",b:$f(ui)})}var wC="voxelier-v11",zy="voxelier-ui-v1";function Sr(n){let t={id:n.id,nm:n.name,p:n.pos,r:n.rot,vs:n.vis};return n.type==="object"?{t:"o",...t,b:n.boxes.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c])}:{t:"s",...t,c:n.children.map(Sr)}}var EC={transparent:"deemphasized",invisible:"hidden"};function Jr(n){let t={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:EC[n.vs]||n.vs||"visible"};return n.t==="o"?{type:"object",...t,boxes:n.b.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]}))}:{type:"scene",...t,children:n.c.map(Jr)}}var Ka;function TC(){try{localStorage.setItem(zy,JSON.stringify([...g.collapsed]))}catch{}}function Ye(){clearTimeout(Ka),Ka=void 0,Nx(JSON.stringify(Sr(g.root))),ep(g.root),TC()}function ip(){Ka===void 0&&(Ox(JSON.stringify(Sr(g.root))),ep(g.root))}function de(){clearTimeout(Ka),Ka=setTimeout(Ye,250)}function rp(n){return!n||!n.root?null:(hl(n.uid||1),Jr(n.root))}function bh(n){g.root=n,fa()}var Fy=()=>{try{let n=JSON.parse(localStorage.getItem(zy));return Array.isArray(n)?n:[]}catch{return[]}};function By(){try{return rp(JSON.parse(localStorage.getItem(wC)))}catch{return null}}var AC=2;function Qa(n){let t=Ue();return on(n,t),{mn:t.min,mx:t.max}}var Mh=n=>{let{mn:t,mx:e}=Qa(n);return{x0:t.x,y0:t.y,z0:t.z,x1:e.x,y1:e.y,z1:e.z}};function Vy(n){if(!n.length)return[];let{mn:t}=Qa(n);return n.map(e=>ia(e,-t.x,-t.y,-t.z))}function Hy(n){let t=ra(g.editObject.boxes,n);g.sel3d={region:t.length?Mh(t):{...n},boxes:t,lifted:!1},mr()}function sp(){let n=g.sel3d;!n||n.lifted||(Ye(),n.lifted=!0,ua(n.region))}function op(){RC();let n=g.sel3d;!n||!n.lifted||(n.lifted=!1,yl(n.boxes),n.boxes=ra(g.editObject.boxes,n.region),de())}function Gi(){let n=g.sel3d;n&&(g.sel3d=null,n.lifted?(yl(n.boxes),de()):mr())}function ap(){let n=g.sel3d;if(!n)return;let t=n.region,e=n.lifted;g.sel3d=null,e?mr():ua(t),de()}function cp(){g.sel3d&&g.sel3d.boxes.length&&Rx(Vy(g.sel3d.boxes))}function Gy(){cp(),ap()}function Wy(n){if(!n.length)return;Gi();let t=Vy(n),e=0,i=0,r=0,s=g.editObject.boxes;if(s.length){let{mn:o,mx:c}=Qa(s);e=c.x+AC,i=o.y,r=o.z}let a=t.map(o=>ia(o,e,i,r));g.sel3d={region:Mh(a),boxes:a,lifted:!1},yl(a),de()}function Xy(n,t,e){let i=g.sel3d;if(!i||!n&&!t&&!e)return;let r=i.region;r.x0+=n,r.x1+=n,r.y0+=t,r.y1+=t,r.z0+=e,r.z1+=e,i.boxes=i.boxes.map(s=>ia(s,n,t,e)),mr()}function ky(n,t,e){let{x:i,y:r,z:s}=n;for(let a=(e%4+4)%4;a>0;a--)if(t===0){let o=-s,c=r;r=o,s=c}else if(t===1){let o=-s,c=i;i=o,s=c}else{let o=-r,c=i;i=o,r=c}return{x:i,y:r,z:s}}function CC(n,t,e){let i=ky({x:n.x0,y:n.y0,z:n.z0},t,e),r=ky({x:n.x1-1,y:n.y1-1,z:n.z1-1},t,e);return{x0:Math.min(i.x,r.x),y0:Math.min(i.y,r.y),z0:Math.min(i.z,r.z),x1:Math.max(i.x,r.x)+1,y1:Math.max(i.y,r.y)+1,z1:Math.max(i.z,r.z)+1,c:n.c}}function qy(){let n=Wt.matrixWorld.elements,t=ee({x:n[0],y:0,z:n[2]},-g.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var Sh=null;function lp(){let n=g.sel3d;if(!n)return;let t=Qa(n.boxes);Sh={boxes:n.boxes.map(e=>({...e})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function RC(){Sh=null}function Yy(n,t){let e=g.sel3d,i=Sh;if(!e||!i||!i.boxes.length)return;let r=(n%4+4)%4,s;if(!r)s=i.boxes.map(a=>({...a}));else{let a=t?qy():1;s=i.boxes.map(u=>CC(u,a,r));let o=Qa(s),c=or(i.cx-(o.mn.x+o.mx.x)/2),l=or(i.cy-(o.mn.y+o.mx.y)/2),h=or(i.cz-(o.mn.z+o.mx.z)/2);s=s.map(u=>ia(u,c,l,h))}e.boxes=s,e.region=Mh(s),mr()}function $y(n,t){let e=g.sel3d,i=Sh;if(!e||!i||!i.boxes.length)return;let r=t?qy():1,[s,a]=r===0?[i.cy,i.cz]:r===1?[i.cx,i.cz]:[i.cx,i.cy];e.boxes=Ex(i.boxes,n,r,s,a,(o,c,l)=>({x:o,y:c,z:l})),e.region=Mh(e.boxes),mr()}function IC(){let n=g.sel3d;if(!n)return null;let t=n.region,e=new Ti;for(let i of[t.x0,t.x1])for(let r of[t.y0,t.y1])for(let s of[t.z0,t.z1])e.expandByPoint(Ni(i,r,s));return e}function hp(){let n=IC();return n?(hn.setFromCamera(Jn,Wt),hn.ray.intersectsBox(n)):!1}function LC(n){if(!n.length)return[];let t=[[],[],[]];for(let _ of n)t[0].push(_.x0,_.x1),t[1].push(_.y0,_.y1),t[2].push(_.z0,_.z1);let e=t.map(_=>[...new Set(_)].sort((T,R)=>T-R)),i=e.map(_=>_.length-1),[r,s,a]=i;if(r*s*a>8e6)return n;let o=e.map(_=>new Map(_.map((T,R)=>[T,R]))),c=(_,T,R)=>(_*s+T)*a+R,l=new Int32Array(r*s*a);for(let _ of n){let T=o[0].get(_.x1),R=o[1].get(_.y1),I=o[2].get(_.z1);for(let C=o[0].get(_.x0);C<T;C++)for(let V=o[1].get(_.y0);V<R;V++)for(let M=o[2].get(_.z0);M<I;M++)l[c(C,V,M)]=_.c+1}let h=[],u=[],d=[],f=[];for(let _=0;_<r;_++)for(let T=0;T<s;T++)for(let R=0;R<a;R++)l[c(_,T,R)]&&(h.push(c(_,T,R)),u.push(_),d.push(T),f.push(R));let x=[u,d,f],y=new Uint8Array(r*s*a),m=_=>{y.fill(0);let T=Array.from({length:h.length},(V,M)=>M).sort((V,M)=>x[_[2]][V]-x[_[2]][M]||x[_[1]][V]-x[_[1]][M]||x[_[0]][V]-x[_[0]][M]),R=[0,0,0],I=(V,M,E,D)=>{if(M[E]>=i[E])return!1;let X=(E+1)%3,$=(E+2)%3;R[E]=M[E];for(let A=V[X];A<M[X];A++){R[X]=A;for(let O=V[$];O<M[$];O++){R[$]=O;let G=c(R[0],R[1],R[2]);if(y[G]||l[G]!==D)return!1}}return!0},C=[];for(let V of T){let M=h[V];if(y[M])continue;let E=l[M],D=[u[V],d[V],f[V]],X=[u[V]+1,d[V]+1,f[V]+1];for(let $ of _)for(;I(D,X,$,E);)X[$]++;for(let $=D[0];$<X[0];$++)for(let A=D[1];A<X[1];A++)for(let O=D[2];O<X[2];O++)y[c($,A,O)]=1;C.push({x0:e[0][D[0]],y0:e[1][D[1]],z0:e[2][D[2]],x1:e[0][X[0]],y1:e[1][X[1]],z1:e[2][X[2]],c:E-1})}return C},p=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],v=null;for(let _ of p){let T=m(_);(!v||T.length<v.length)&&(v=T)}return v}var PC=24,jy=n=>n.reduce((t,e)=>t+(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0),0),up=new WeakSet;function dp(n){if(n.boxes.length<PC||up.has(n.boxes))return!1;let t=LC(n.boxes);return t.length<n.boxes.length&&jy(t)===jy(n.boxes)?(n.boxes=t,up.add(t),!0):(up.add(n.boxes),!1)}var fp=(n,t,e)=>{let i=new Set(g.selection);Gi(),e&&dp(e)&&ip(),g.selection=new Set([n]),g.editObject=null,ri(),g.context!==t||e?ue():gr(i),Xt()};function UC(){if(g.path.length<=1)return;let n=g.context,t=g.editObject;fp(g.path.pop().id,n,t)}function DC(){fp(g.editObject.id,g.context,g.editObject)}function Jy(){g.editObject?DC():UC()}function di(n){let t=Qn(n);if(!t)return;let e=g.context,i=g.editObject;g.path=t.slice(0,-1),fp(n.id,e,i)}function fs(n,t){let e=Qn(n);if(!e)return;let i=g.editObject;Gi(),i&&i!==n&&dp(i)&&ip(),n.type==="scene"?(g.path=e,g.editObject=null):(g.path=e.slice(0,-1),g.editObject=n),g.selection.clear(),g.tool="view",ri(),ue(),Xt(),t&&Ln()}var fi=null,Be=null,tc=null,Lo=null,Un=null,NC={visible:"\u25C9",deemphasized:"\u25D0",hidden:"\u29B0"},pp=(n,t)=>{let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,r=Math.min(255,(n&255)*t)|0;return`rgb(${e},${i},${r})`},wh=new Map;function Zy(n){return n.type==="object"?"o"+n.boxes.map(t=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+n.children.map(t=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${Zy(t)}`).join()}function OC(n){let t=wh.get(n.id);if(n===g.editObject&&t)return t.cv;let e=Zy(n);if(t&&t.sig===e)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let r=i.getContext("2d");r.fillStyle="#0f1115",r.fillRect(0,0,52,52);let s=ca(n,{x:0,y:0,z:0},0,[]);if(s.length){let a=Ue();on(s,a);let{x:o,y:c,z:l}=a.min,{x:h,y:u,z:d}=a.max,f=40/Math.max(h-o,u-c,d-l,1),x=26-((o+h)/2-(l+d)/2)*f*.5,y=28+(c+u)/2*f*.6-((o+h)/2+(l+d)/2)*f*.28,m=(v,_,T)=>[x+(v-T)*f*.5,y-_*f*.6+(v+T)*f*.28],p=(v,_)=>{r.fillStyle=v,r.beginPath(),r.moveTo(_[0][0],_[0][1]);for(let T=1;T<_.length;T++)r.lineTo(_[T][0],_[T][1]);r.closePath(),r.fill()};s.sort((v,_)=>v.x0+v.x1+v.y0+v.y1+v.z0+v.z1-(_.x0+_.x1+_.y0+_.y1+_.z0+_.z1));for(let v of s)p(pp(v.c,.78),[m(v.x1,v.y0,v.z0),m(v.x1,v.y1,v.z0),m(v.x1,v.y1,v.z1),m(v.x1,v.y0,v.z1)]),p(pp(v.c,.6),[m(v.x0,v.y0,v.z1),m(v.x1,v.y0,v.z1),m(v.x1,v.y1,v.z1),m(v.x0,v.y1,v.z1)]),p(pp(v.c,1),[m(v.x0,v.y1,v.z0),m(v.x1,v.y1,v.z0),m(v.x1,v.y1,v.z1),m(v.x0,v.y1,v.z1)])}return wh.set(n.id,{sig:e,cv:i}),i}var ps=null;function mp(n){ps=n}function zC(n){if(n===g.root||In(n)!==g.context||g.editObject)di(n);else{let t=new Set(g.selection);g.selection.has(n.id)?g.selection.delete(n.id):g.selection.add(n.id),gr(t),Xt()}ps=n.id}function FC(n){let t=g.context.children,e=ps?t.findIndex(o=>o.id===ps):-1,i=t.findIndex(o=>o.id===n.id);if(n===g.root||g.editObject||e<0||i<0){di(n),ps=n.id;return}let r=new Set(g.selection),s=Math.min(e,i),a=Math.max(e,i);g.selection=new Set(t.slice(s,a+1).map(o=>o.id)),gr(r),Xt()}function BC(n,t){if(t.shiftKey||t.ctrlKey||t.metaKey){Un&&(clearTimeout(Un.timer),Un=null),t.shiftKey?FC(n):zC(n);return}if(Un&&Un.node===n){clearTimeout(Un.timer),Un=null,fs(n,!0);return}Un&&clearTimeout(Un.timer),n===g.root?fs(n):di(n),ps=n===g.root?null:n.id,Un={node:n,timer:setTimeout(()=>Un=null,300)}}function Do(n){Eh();let e=document.querySelector(`#tree .trow[data-id="${n.id}"]`)?.querySelector(".nm");if(!e)return;let i=oe("input",{className:"nminput",value:n.name});i.placeholder=n===g.root?"Project":n.type==="scene"?"group":"object";let r=!1,s=a=>{r||(r=!0,a&&(n.name=i.value.trim(),de()),Xt())};i.addEventListener("keydown",a=>{a.stopPropagation(),a.key==="Enter"?s(!0):a.key==="Escape"&&s(!1)}),i.addEventListener("blur",()=>s(!0)),e.replaceWith(i),i.focus(),i.select()}function kC(n){let t=OC(n);if(t.className="thumb",t.onclick=null,t.title="",n!==g.root&&n.type==="scene"&&n.children.length){let e=g.collapsed.has(n.id);t.classList.add("group"),e&&t.classList.add("collapsed"),t.title=e?"Expand group":"Collapse group",t.onclick=i=>{i.stopPropagation(),e?g.collapsed.delete(n.id):g.collapsed.add(n.id),gp()}}return t}function VC(n,t){n.draggable=t!==g.root,t!==g.root&&n.addEventListener("dragstart",e=>{if(e.stopPropagation(),fi=t.id,e.dataTransfer){e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain",t.id)}catch{}}}),n.addEventListener("dragend",Po),n.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation(),HC(e,t,n)}),n.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation(),e_()})}function gp(){let n=document.getElementById("tree");n.innerHTML="";let t=(i,r)=>{let s=i===g.root,a=!s&&g.context.children.includes(i)&&g.selection.has(i.id),o=i.vis,c=oe("div",{className:"trow"+(s?" root":"")+(a?" sel":"")+(i===g.context&&!g.editObject?" ctx":"")+(i===g.editObject?" edit":"")+(!s&&o!=="visible"?" dim":"")});c.style.paddingLeft=4+r*13+"px",c.dataset.id=i.id;let l=kC(i),h=oe("span",{className:"nm"});if(s?h.textContent=i.name||"Project":i.name?h.textContent=i.name:h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>",h.onclick=u=>{!Un&&!g.editObject&&!s&&g.selection.size===1&&g.selection.has(i.id)&&(u.stopPropagation(),Do(i))},c.append(l,h),s||c.append(oe("button",{className:"tb"+(o==="visible"?" on":""),textContent:NC[o],title:"visible \u2192 deemphasized \u2192 hidden",onclick:u=>{u.stopPropagation(),n_(i)}})),c.onclick=u=>BC(i,u),c.oncontextmenu=u=>{u.preventDefault(),u.stopPropagation();let d=!s&&!g.editObject&&In(i)===g.context&&g.selection.has(i.id);!s&&!d&&di(i),Qy(i,u.clientX,u.clientY)},VC(c,i),n.appendChild(c),i.type==="scene"&&(s||!g.collapsed.has(i.id)))for(let u of i.children)t(u,r+1)};t(g.root,0);let e=new Set;(function i(r){e.add(r.id),r.type==="scene"&&r.children.forEach(i)})(g.root);for(let i of wh.keys())e.has(i)||wh.delete(i)}function Eh(){Lo&&(Lo.remove(),Lo=null,window.removeEventListener("pointerdown",Ky,!0))}function Ky(n){Lo&&!Lo.contains(n.target)&&Eh()}function Qy(n,t,e){Eh();let i=oe("div",{className:"ctxmenu"}),r=(c,l,h)=>i.appendChild(oe("div",{className:"ctxitem"+(h?" "+h:""),textContent:c,onclick:()=>{Eh(),l()}})),s=()=>i.appendChild(oe("div",{className:"ctxdiv"})),a=n!==g.root&&In(n)===g.context&&g.selection.size>1&&g.selection.has(n.id);a||(r("Rename",()=>Do(n)),r("Locate",()=>vl(n)),s()),n!==g.root&&(r("Copy",()=>nc()),r("Duplicate",()=>a?Th():o_(n)),r("Delete objects",()=>a?ec():a_(n),"danger"),s()),a?r("Group",()=>s_(n)):n.type==="scene"?(n!==g.root&&r("Ungroup",()=>c_(n)),io()&&r("Paste",()=>Ah(n)),r("New object",()=>l_(n)),r("New group",()=>h_(n))):r("New group",()=>r_(n)),document.body.appendChild(i),Lo=i;let o=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-o.width-4)+"px",i.style.top=Math.min(e,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",Ky,!0),0)}function Po(){tc&&tc.classList.remove("drop-into","drop-before","drop-after"),tc=null,Be=null}function t_(){let n=fi&&ti(fi);return!n||g.editObject||In(n)!==g.context||!g.selection.has(n.id)||g.selection.size<=1?null:g.context.children.filter(t=>g.selection.has(t.id))}function HC(n,t,e){let i=fi&&ti(fi);if(!i||i===t){Po();return}let r=t_();if(r?r.some(u=>u===t||qr(u,t)):qr(i,t)){Po();return}if(Po(),tc=e,t===g.root){Be={parent:g.root,index:g.root.children.length},e.classList.add("drop-into");return}let a=e.getBoundingClientRect(),o=n.clientY-a.top,c=a.height,l=In(t),h=l?l.children.indexOf(t):0;o>c*.28&&o<c*.72&&(t.type==="scene"||!r)?(t.type==="scene"?Be={parent:t,index:t.children.length}:Be={wrap:t},e.classList.add("drop-into")):o<c*.5?(Be={parent:l,index:h},e.classList.add("drop-before")):(Be={parent:l,index:h+1},e.classList.add("drop-after"))}function e_(){let n=fi&&ti(fi);if(n&&Be){let t=Be.parent?t_():null;if(t){let e=Be.parent,i=Be.index,r=!1;for(let s of t)Uo(s,e,i)&&(i=e.children.indexOf(s)+1,r=!0);if(r){g.collapsed.delete(e.id);let s=Qn(e);s&&(g.path=s),g.editObject=null,g.selection=new Set(t.map(a=>a.id)),ue(),Xt(),de()}}else Be.wrap?i_(Be.wrap,n):Be.parent&&Uo(n,Be.parent,Be.index)&&(g.collapsed.delete(Be.parent.id),di(n),de())}Po(),fi=null}{let n=document.getElementById("tree");n.addEventListener("dragover",t=>{if(t.target===n&&fi){t.preventDefault(),Po(),Be={parent:g.root,index:g.root.children.length};let e=[...n.querySelectorAll(".trow")].filter(r=>r.dataset.id!==fi),i=e[e.length-1];i&&(i.classList.add("drop-after"),tc=i)}}),n.addEventListener("drop",t=>{t.target===n&&(t.preventDefault(),e_())})}document.getElementById("side").addEventListener("click",n=>{if(n.target.closest(".trow, button, input")||!g.selection.size)return;let t=new Set(g.selection);g.selection.clear(),ps=null,gr(t),Xt()});document.getElementById("side").addEventListener("contextmenu",n=>{n.target.closest(".trow, button, input")||(n.preventDefault(),Qy(g.root,n.clientX,n.clientY))});var pi=()=>{ue(),Xt(),de()};function n_(n){n.vis=Qg[n.vis],pi()}var xp=()=>[...g.selection].map(n=>Di(n)).filter(n=>!!n),u_=(n,t)=>{let e=Xr();e.pos={x:Math.round(jt.target.x),y:0,z:Math.round(jt.target.z)},n.children.push(e),g.collapsed.delete(n.id),fs(e,t),de(),Do(e)};function d_(){u_(g.context,!0)}function ec(){g.selection.size&&(g.context.children=g.context.children.filter(n=>!g.selection.has(n.id)),g.selection.clear(),pi())}function Th(){let n=xp().map(cr);n.length&&(g.context.children.push(...n),g.selection=new Set(n.map(t=>t.id)),pi())}function nc(){let n=xp().map(cr);n.length&&Cx(n)}function f_(){nc(),ec()}function Ah(n=g.context){if(io()==="vox"){GC(n);return}let t=bl().map(cr);t.length&&(n.children.push(...t),p_(n),g.selection=new Set(t.map(e=>e.id)),pi())}function GC(n){let t=Ml();if(!t.length)return;let e=Xr();e.boxes=t.map(s=>({...s}));let i=lr(n),r=ee({x:jt.target.x-i.off.x,y:0,z:jt.target.z-i.off.z},-i.rot);e.pos={x:Math.round(r.x),y:0,z:Math.round(r.z)},n.children.push(e),p_(n),g.selection=new Set([e.id]),pi()}function p_(n){g.collapsed.delete(n.id),n!==g.context&&(g.path=Qn(n)??g.path,g.editObject=null)}function Uo(n,t,e){if(n===t||qr(n,t))return!1;let i=In(n);if(!i)return!1;let r=Li(lr(i),{off:{...n.pos},rot:n.rot}),s=Li(dd(lr(t)),r),a=i.children.indexOf(n);return i.children.splice(a,1),i===t&&a<e&&e--,n.pos={x:Math.round(s.off.x),y:Math.round(s.off.y),z:Math.round(s.off.z)},n.rot=s.rot&3,t.children.splice(Math.max(0,Math.min(e,t.children.length)),0,n),!0}function m_(n){let t=In(n);if(!t)return null;let e=t.children.indexOf(n),i=Ui("Group");return i.pos={...n.pos},i.rot=n.rot,t.children.splice(e,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function i_(n,t){if(t===n||qr(t,n))return!1;let e=m_(n);return e?(Uo(t,e,e.children.length),g.collapsed.delete(e.id),g.selection=new Set([e.id]),pi(),!0):!1}function r_(n){let t=m_(n);t&&(g.collapsed.delete(t.id),di(t),de(),Do(t))}function s_(n){let t=xp();if(t.length<2)return;let e=Ui("Group");e.pos={...n.pos},e.rot=n.rot;let i=g.context.children.indexOf(n);g.context.children.splice(Math.max(0,i),0,e);for(let r of t)Uo(r,e,e.children.length);g.collapsed.delete(e.id),g.selection=new Set([e.id]),pi()}function o_(n){let t=In(n);if(!t)return;let e=cr(n);t.children.splice(t.children.indexOf(n)+1,0,e),di(e),de()}function a_(n){let t=In(n);t&&(t.children=t.children.filter(e=>e!==n),g.selection.delete(n.id),g.editObject===n&&(g.editObject=null),pi())}function c_(n){let t=In(n);if(!t)return;let e=[...n.children],i=t.children.indexOf(n);for(let r of e)Uo(r,t,i),i=t.children.indexOf(r)+1;t.children=t.children.filter(r=>r!==n),g.selection=new Set(e.map(r=>r.id)),pi()}function l_(n){u_(n,!1)}function h_(n){let t=Ui("Group");n.children.push(t),g.collapsed.delete(n.id),di(t),de(),Do(t)}function yp(n){let t=[...g.selection];if(!t.length)return;let e=n<0?3:1,i=Ks(),r=dd(i),s=a=>ni(a,Zn(i.off,ee(a.pos,i.rot)),i.rot+a.rot&3,Ue());for(let a=0;a<Math.abs(n);a++){let o=Ue();for(let d of t){let f=s(Di(d));f.min.x<o.min.x&&(o.min.x=f.min.x),f.min.z<o.min.z&&(o.min.z=f.min.z),f.max.x>o.max.x&&(o.max.x=f.max.x),f.max.z>o.max.z&&(o.max.z=f.max.z)}let c=(o.min.x+o.max.x)/2,l=(o.min.z+o.max.z)/2,h=ee({x:c,y:0,z:l},e),u={rot:e,off:{x:c-h.x,y:0,z:l-h.z}};for(let d of t){let f=Di(d);if(!f)continue;let x=Li(i,{off:f.pos,rot:f.rot}),y=Li(r,Li(u,x));f.pos={x:or(y.off.x),y:or(y.off.y),z:or(y.off.z)},f.rot=y.rot&3}}ue()}function g_(){g.selection.size&&(yp(1),Xt(),de())}function _p(n){for(let t of g.selection){let e=Di(t);e&&(e.pos.y+=n)}g.selection.size&&pi()}var Zt=n=>Math.floor(n/10),pe=dl,No=(n,t)=>{let e=Xr();return e.name=n,e.boxes=t,e},vp=(n,t,e,i,r,s)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s});function bp(){let n=Zt(4465),t=Zt(2985),e=Zt(2700),i=Zt(150),r=No("Floor",[he(0,0,0,n,1,t,pe[9])]),s=Zt(800),a=Zt(2100),o=n-Zt(515)-s,c=n-Zt(900)-s,l=[he(0,1,0,n,e+1,i,pe[5]),he(0,1,t-i,n,e+1,t,pe[5]),he(0,1,i,i,e+1,t-i,pe[5]),he(n-i,1,i,n,e+1,t-i,pe[5])];l=Wr(l,vp(o,1,0,o+s,a+1,i)),l=Wr(l,vp(c,1,t-i,c+s,a+1,t)),l=Wr(l,vp(0,Zt(900),Zt(600),i,Zt(2100),t-Zt(600)));let h=No("Walls",l);h.vis="deemphasized";let u=Zt(1500),d=Zt(2e3),f=No("Bed",[he(0,0,0,8,14,8,pe[7]),he(u-8,0,0,u,14,8,pe[7]),he(0,0,d-8,8,14,d,pe[7]),he(u-8,0,d-8,u,14,d,pe[7]),he(0,14,0,u,20,d,pe[6]),he(2,20,0,u-2,24,d-Zt(400),pe[10])]);f.pos={x:i+3,y:1,z:t-i-d};let x=Zt(1400),y=Zt(700),m=Zt(740),p=No("Desk",[he(0,m-4,0,x,m,y,pe[8]),he(0,0,0,6,m-4,6,pe[7]),he(x-6,0,0,x,m-4,6,pe[7]),he(0,0,y-6,6,m-4,y,pe[7]),he(x-6,0,y-6,x,m-4,y,pe[7])]),v=Zt(600),_=v-30>>1,T=v>>1,R=No("Computer",[he(_,0,0,_+30,2,18,pe[11]),he(T-2,2,7,T+2,Zt(160),11,pe[11]),he(0,Zt(160),6,v,Zt(520),9,pe[13])]);R.pos={x:Zt(400),y:m,z:Zt(420)};let I=Ui();I.name="Desk + Computer",I.pos={x:n-i,y:1,z:Zt(900)},I.rot=1,I.children=[p,R];let C=D=>No(D,[he(-10,0,-10,11,30,11,pe[4]),he(-2,30,-2,3,54,3,pe[14]),he(-16,54,-16,17,78,17,pe[14]),he(-12,78,-12,13,92,13,pe[14])]),V=C("Plant"),M=C("Plant");V.pos={x:n-i-Zt(300),y:1,z:i+Zt(300)},M.pos={x:i+Zt(300),y:1,z:i+Zt(300)};let E=Ui();return E.children=[r,h,f,I,V,M],E}var Mp="voxelier-last",x_="doc",Sp=jf,WC=()=>{let n=new Uint8Array(8);return crypto.getRandomValues(n),[...n].map(t=>t.toString(36).padStart(2,"0")).join("")},y_=()=>new URLSearchParams(location.hash.replace(/^#/,""));function XC(){let n=y_().get(x_);return n&&/^[0-9a-z]{4,32}$/.test(n)?n:null}function wp(n){let t=y_();t.set(x_,n),history.replaceState(null,"",`#${t.toString()}`)}var Ep=n=>{try{localStorage.setItem(Mp,n)}catch{}},__=()=>{try{return localStorage.getItem(Mp)}catch{return null}};async function Oo(n){let t=await tp(n);return t?(Ep(n),wp(n),t):null}async function qC(n){let t=await Oo(n);if(t)return t;let e=bp();return np(e),Ep(n),wp(n),e}async function ms(n){let t=WC();await tp(t);let e=n??bp();return np(e),Ep(t),wp(t),e}async function v_(n){if(await Oy(n),__()===n)try{localStorage.removeItem(Mp)}catch{}}var b_=()=>Uy();async function M_(n){let t=XC();if(t)return await qC(t);let e=__();if(e){let i=await Oo(e);if(i)return i}try{let[i]=await jf();if(i){let r=await Oo(i.id);if(r)return r}}catch{}return await ms(n()??void 0)}function Tp(){return JSON.stringify({uid:ll(),root:Sr(g.root),collapsed:[...g.collapsed]})}function S_(){let n=Tp(),t=URL.createObjectURL(new Blob([n],{type:"application/json"})),e=g.root.name||"Project",i=o=>String(o).padStart(2,"0"),r=new Date,s=`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())} ${i(r.getHours())}h${i(r.getMinutes())}m${i(r.getSeconds())}s`,a=document.createElement("a");a.href=t,a.download=`${e} -- ${s}.voxelier.json`,a.click(),URL.revokeObjectURL(t)}async function Ap(n){let t=rp(JSON.parse(n));if(!t)throw new Error("not a Voxelier scene file");g.root=await ms(t),g.collapsed=new Set,g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.tool==="measure"&&(g.tool="view"),ri(),ue(),Xt(),Ln(),fa(),Ye()}function w_(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let t=n.files&&n.files[0];if(!t)return;let e=new FileReader;e.onload=async()=>{try{await Ap(e.result)}catch(i){alert("Import failed: "+i.message)}},e.readAsText(t)},n.click()}var Lh={view:"\u{1F441}",add:"\uFF0B",erase:"\uFF0D",paint:"\u{1FAA3}",eyedropper:"\u{1F4A7}",select:"\u2B1A",measure:"\u{1F4CF}"},YC=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],E_=(n,t,e,i)=>oe("button",{className:"tool"+(e?" active":""),innerHTML:`<span class="ic">${n}</span>${t}`,onclick:i});function T_(n){g.tool!==n&&(Gi(),g.tool=n,g.eyedropReturn=null,bn.visible=!1,ri(),Xt())}function Xt(){let n=document.getElementById("tools");n.innerHTML="",!g.editObject&&g.tool!=="measure"&&(g.tool="view");let t=oe("div",{className:"toolgroup"}),e=g.editObject?YC:[{id:"view",label:"View"}];for(let i of e)t.appendChild(E_(Lh[i.id],i.label,g.tool===i.id,()=>T_(i.id)));if(t.appendChild(E_(Lh.measure,"Measure",g.tool==="measure",()=>T_("measure"))),g.editObject&&t.appendChild(nR()),n.append(t),Rh(),g.tool==="view"){let i=document.getElementById("toolcursor");i&&(i.style.display="none")}gp()}document.getElementById("btn-save").onclick=S_;document.getElementById("btn-load").onclick=w_;var $C=document.getElementById("btn-docs"),rc=document.getElementById("docslist"),jC=document.getElementById("docname");function Cp(n){bh(n),g.collapsed=new Set,g.path=[n],g.editObject=null,g.sel3d=null,g.selection.clear(),g.tool==="measure"&&(g.tool="view"),ri(),ue(),Xt(),Ln(),Ye()}function Rh(){jC.textContent=g.root&&g.root.name||"Project"}async function Ih(){let n=b_(),t=[];try{t=await Sp()}catch{}rc.innerHTML="";for(let e of t){let i=oe("div",{className:"docrow"+(e.id===n?" here":"")});i.append(oe("button",{className:"docopen",textContent:e.name||"Project",title:new Date(e.updated).toLocaleString(),onclick:async()=>{if(e.id===n)return;let r=await Oo(e.id);r&&Cp(r),await Ih(),Rh()}})),i.append(oe("button",{className:"docdel",textContent:"\u2715",title:"Delete this document",onclick:async()=>{if(confirm(`Delete "${e.name||"Project"}"? This cannot be undone.`)){if(await v_(e.id),e.id===n){let[r]=await Sp().catch(()=>[]),s=r?await Oo(r.id)??await ms():await ms();Cp(s),Rh()}await Ih()}}})),rc.append(i)}rc.append(oe("button",{className:"docnew",textContent:"\uFF0B New document",onclick:async()=>{Cp(await ms()),Rh(),await Ih()}}))}$C.onclick=async()=>{let n=rc.hasAttribute("hidden");rc.hidden=!n,n&&await Ih()};var Ch={ver:-1,cols:[]};function JC(){if(Ch.ver===g.voxVer)return Ch.cols;let n=new Map;return function t(e){e.type==="object"?Yg(e.boxes,n):e.children.forEach(t)}(g.root),Ch={ver:g.voxVer,cols:[...n.entries()].sort((t,e)=>e[1]-t[1]).map(t=>t[0])},Ch.cols}var Rp=[];function Ph(n){Rp=[n,...Rp.filter(t=>t!==n)].slice(0,6)}function Ip(n){g.selColor=n,Xt()}function ZC(){let n=[];for(let t of[...Rp,...JC(),...dl])if(n.includes(t)||n.push(t),n.length>=6)break;return n}var KC=n=>{let t=oe("div",{className:"sw"+(n===g.selColor?" active":""),title:Pi(n),onclick:()=>Ip(n)});return t.style.background=Pi(n),t};function QC(){g.tool!=="eyedropper"&&(g.eyedropReturn=g.tool,Gi(),g.tool="eyedropper",Xt())}function tR(n){let t=(n>>16&255)/255,e=(n>>8&255)/255,i=(n&255)/255,r=Math.max(t,e,i),s=Math.min(t,e,i),a=r-s,o=0;return a&&(r===t?o=(e-i)/a%6:r===e?o=(i-t)/a+2:o=(t-e)/a+4,o=(o*60+360)%360),[Math.round(o),Math.round((r?a/r:0)*100),Math.round(r*100)]}function ic(n,t,e){t/=100,e/=100;let i=e*t,r=i*(1-Math.abs(n/60%2-1)),s=e-i,[a,o,c]=n<60?[i,r,0]:n<120?[r,i,0]:n<180?[0,i,r]:n<240?[0,r,i]:n<300?[r,0,i]:[i,0,r],l=h=>Math.round((h+s)*255);return l(a)<<16|l(o)<<8|l(c)}var eR=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function nR(){let n=oe("div",{className:"colorctl"}),t=oe("div",{className:"colorbtn",title:"Draw colour \u2014 hover for recent colours / sliders"});t.style.background=Pi(g.selColor);let e=oe("div",{className:"colorflyout"}),i=oe("div",{className:"sliders"}),r={},[s,a,o]=tR(g.selColor),c={h:s,s:a,v:o},l=()=>{r.s.style.background=`linear-gradient(to right,${Pi(ic(c.h,0,c.v))},${Pi(ic(c.h,100,c.v))})`,r.v.style.background=`linear-gradient(to right,${Pi(ic(c.h,c.s,0))},${Pi(ic(c.h,c.s,100))})`},h=()=>{c.h=+r.h.value,c.s=+r.s.value,c.v=+r.v.value,g.selColor=ic(c.h,c.s,c.v),t.style.background=Pi(g.selColor),l()};for(let f of eR){let x=oe("div",{className:"sliderline"}),y=oe("input",{type:"range",className:"csl",title:f.title});y.min="0",y.max=String(f.max),y.value=String(c[f.key]),r[f.key]=y,y.addEventListener("input",h),x.append(oe("span",{className:"lbl",textContent:f.label,title:f.title}),y),i.appendChild(x)}r.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",l();let u=oe("div",{className:"sliderrow"});u.append(i,oe("div",{className:"sw more",textContent:"\u{1F4A7}",title:"Pick a colour from a voxel (eyedropper)",onclick:QC}));let d=oe("div",{className:"swrow"});for(let f of ZC())d.appendChild(KC(f));return e.append(u,d),n.append(t,e),n}{let n=document.getElementById("app"),t=e=>{n.classList.toggle("side-hidden",e),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||g.drag||g.painting)return;let t=n.key.toLowerCase();if(n.ctrlKey||n.metaKey){if(t==="z"){n.preventDefault(),n.shiftKey?pa():wl();return}if(t==="y"){n.preventDefault(),pa();return}if(g.editObject){t==="c"?(cp(),n.preventDefault()):t==="x"?(Gy(),n.preventDefault()):t==="v"&&(iR(),n.preventDefault());return}let i={c:nc,x:f_,v:Ah,d:Th}[t];i&&(i(),n.preventDefault());return}switch(t){case"f":Ln();break;case"escape":Jy();break;case"n":g.editObject||d_();break;case"r":g.editObject||g_();break;case"[":g.editObject||_p(-1);break;case"]":g.editObject||_p(1);break;case"delete":case"backspace":n.preventDefault(),g.editObject?ap():ec();break}});function iR(){let n=[];if(io()==="node")for(let t of bl())ca(t,t.pos,t.rot,n);else n.push(...Ml());n.length&&(g.tool="select",Wy(n),Xt())}function rR(n){let t=n?ti(n):g.root;if(!t)throw new Error(`unknown node id: ${n}`);let e=lr(t),i=ni(t,e.off,e.rot,Ue());return ei(i)?null:i}function sR(n){let t=new Set,e=i=>{if(!i.id)return"node without an id";if(t.has(i.id))return`duplicate node id ${i.id}`;if(t.add(i.id),!i.pos||![i.pos.x,i.pos.y,i.pos.z].every(Number.isInteger))return`node ${i.id} has a non-integer or non-finite position`;if(i.type==="scene"){for(let s of i.children){let a=e(s);if(a)return a}return null}let r=`object ${i.id}${i.name?` "${i.name}"`:""}`;for(let s=0;s<i.boxes.length;s++){let a=i.boxes[s];if(![a.x0,a.y0,a.z0,a.x1,a.y1,a.z1].every(Number.isInteger))return`box ${s} of ${r} has a non-integer or non-finite coordinate`;if(a.x1<=a.x0||a.y1<=a.y0||a.z1<=a.z0)return`box ${s} of ${r} is empty or inverted`;for(let o=s+1;o<i.boxes.length;o++)if(sa([a],[i.boxes[o]],0,0,0))return`boxes ${s} and ${o} of ${r} overlap`}return null};return e(n)}function oR(n){g.root=Jr(JSON.parse(n)),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.drag=null,g.painting=!1,g.lastVox=null,ri(),ue(),Xt()}function aR(){let n=g.path.map(e=>e.id);g.path=[g.root];for(let e of n.slice(1)){let i=g.context.children.find(r=>r.id===e);if(!i||i.type!=="scene")break;g.path.push(i)}let t=g.editObject&&g.context.children.find(e=>e.id===g.editObject.id);g.editObject=t&&t.type==="object"?t:null,g.sel3d&&(g.editObject?g.sel3d.boxes=ra(g.editObject.boxes,g.sel3d.region):g.sel3d=null),g.selection=new Set([...g.selection].filter(e=>g.context.children.some(i=>i.id===e)))}var Lp=!1;function cR(n){if(Lp||g.drag||g.painting)throw new Error("edit is unavailable mid-gesture or inside another edit");Ye();let t=JSON.stringify(Sr(g.root));Lp=!0;try{n(g.root);let e=sR(g.root);if(e)throw new Error(`edit rejected: ${e}; restored the document`);aR(),ue(),Xt(),Ye()}catch(e){throw oR(t),e}finally{Lp=!1}}var A_={iso:[Math.PI/4,Math.atan(1/Math.SQRT2)],top:[Math.PI/4,Math.PI/2],front:[0,0],side:[Math.PI/2,0]};function lR(n){if(!Object.hasOwn(A_,n))throw new Error(`unknown view "${n}": use iso, top, front or side`);let t=A_[n];jt.azim=Ft.azim=t[0],jt.elev=Ft.elev=t[1],Rn()}var hR={coordinates:"Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",nodes:"S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique \u2014 mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",api:"S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON(), edit(fn), undo(), redo(), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), uid(), newObject(), newScene(name?), help.",edit:"edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step and persists; on an invalid result (missing or duplicate node ids, non-integer positions, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows. Node references go stale after undo, load or a rejected edit \u2014 look them up again inside fn.",example:"await voxelier.load(json); voxelier.edit(() => { const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56');"},uR={S:g,ser:Sr,de:Jr,uid:Zs,newObject:Xr,newScene:Ui,findById:ti,worldBounds:rR,load:Ap,exportJSON:Tp,edit:cR,undo:wl,redo:pa,frameView:Ln,fitNode:vl,frameBox:_l,view:lR,help:hR};function C_(){Object.assign(window,{voxelier:uR})}var Uh=n=>Math.abs(n.clientX-g.drag.sx)+Math.abs(n.clientY-g.drag.sy)>3,Wi=document.createElement("div");Wi.id="toolcursor";Wi.style.display="none";document.body.appendChild(Wi);function dR(n){if(g.tool==="view"){Wi.style.display="none";return}Wi.textContent=Lh[g.tool],Wi.style.left=n.clientX+"px",Wi.style.top=n.clientY+"px",Wi.style.display="block"}function fR(){g.tool!=="measure"||g.painting||g.drag&&g.drag.mode==="box"||ml()}function Pp(){let n=(Wt.top-Wt.bottom)/xe.h,t=Math.abs(Wt.matrixWorldInverse.elements[5]);return n/Math.max(t,.15)}function pR(n){let t=g.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let e=n.clientX-t.x,i=n.clientY-t.y;return t.x=n.clientX,t.y=n.clientY,(t.mode==="pan"?Mx:Sx)(e,i),!0}function mR(){let n=[],t=[];ur(g.root,{x:0,y:0,z:0},0,null,null,(r,s,a,o)=>{let c=o&&g.selection.has(o)?t:n;for(let l of r.boxes)c.push(Kn(l,a,s))});let e=1/0,i=-1/0;for(let r of t)r.y0<e&&(e=r.y0),r.y1>i&&(i=r.y1);return{occ:n,sel:t,minY:e,hgt:t.length?i-e:0}}var gR=(n,t,e,i)=>{if(sa(n.sel??[],n.occ??[],t,e,i))return!0;let r=n.minY??1/0;return r+e<Math.min(0,r)};function xR(n){let t=g.drag,e=(i,r,s)=>n.altKey||!gR(t,i,r,s);if(n.shiftKey){t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=t.dyUser??0);let i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*Pp());e(t.dx,i,t.dz)&&(t.dyUser=i,t.dy=i)}else{t.shiftAnchorY=null;let i=t.dx,r=t.dz,s=la(0);s&&t.start&&(i=s.x-t.start.x,r=s.z-t.start.z);let a=t.dyUser??0,o=Math.floor(.1*(t.hgt??0)),c=!1;for(let l=0;l<=o;l++)if(e(i,a+l,r)){t.dx=i,t.dz=r,t.dy=a+l,c=!0;break}c||(e(i,a,t.dz)&&(t.dx=i),e(t.dx,a,r)&&(t.dz=r),t.dy=a)}for(let i of g.selection)for(let r of g.childMeshes[i]||[])r.position.set(t.dx,t.dy,t.dz),r.castShadow=!1;Ii.position.set(t.dx,t.dy,t.dz)}function yR(n){let t=g.drag,e=Ks(),i=ee({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-e.rot),r=Math.round(t.dy);if(n){let s=[];for(let a of g.selection){let o=Di(a);if(!o)continue;let c=cr(o);c.pos={x:o.pos.x+i.x,y:o.pos.y+r,z:o.pos.z+i.z},s.push(c)}g.context.children.push(...s),g.selection=new Set(s.map(a=>a.id))}else for(let s of g.selection){let a=Di(s);a&&(a.pos.x+=i.x,a.pos.y+=r,a.pos.z+=i.z)}Ii.position.set(0,0,0),ue(),Xt(),de()}function _R(n){let t=g.drag,e=Math.round((t.sx-n.clientX)/70);e!==t.steps&&(yp(e-t.steps),t.steps=e,t.dirty=!0)}function vR(){let n=_x();n!=null&&(g.eyedropReturn!=null&&(g.tool=g.eyedropReturn,g.eyedropReturn=null),Ip(n))}function I_(n){let t=$r(),e=vd(t);if(!e)return;let i=Gr(e.x,e.y,e.z);i!==g.lastVox&&(n?(Ld({x0:e.x,y0:e.y,z0:e.z,x1:e.x+1,y1:e.y+1,z1:e.z+1},g.selColor),Ph(g.selColor)):yx(e,g.selColor)&&Ph(g.selColor),g.lastVox=i),L_(t)}function L_(n=$r()){let t=vd(n);if(!t){bn.visible=!1;return}let e=Ni(t.x+.5,t.y+.5,t.z+.5);bn.visible=!0,bn.material.color.set(g.tool==="erase"?11895693:10994876),bn.position.copy(e)}var Up=n=>n===0?[1,2]:n===1?[0,2]:[0,1];function P_(n,t,e,i){let[r,s]=Up(n.na),a=[0,0,0],o=[0,0,0],c=(l,h,u)=>{a[l]=Math.min(h,u),o[l]=Math.max(h,u)};return c(n.na,n.s[n.na],n.s[n.na]+i),c(r,n.s[r],t),c(s,n.s[s],e),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var Dp=n=>{let[t,e]=Up(n.na);return P_(n,n.c[t],n.c[e],n.hy)};function R_(n){let t=$r(),e,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,e=g.tool==="add"?t.addCell:t.cell;else{let r=jr(0);if(!r)return;e=r,i=1}g.drag={...n,mode:"box",shiftAnchorY:null,box:{s:[e.x,e.y,e.z],c:[e.x,e.y,e.z],na:i,hy:0},occ:g.tool==="add"?g.editObject.boxes.slice():void 0},bn.visible=!1,U_()}function bR(n){let t=g.drag,e=t.box,[i,r]=Up(e.na),s=g.tool==="add"&&!n.altKey,a=(o,c,l)=>!s||!sa([P_(e,o,c,l)],t.occ??[],0,0,0);if(n.shiftKey){t.shiftAnchorY===null&&(t.shiftAnchorX=n.clientX,t.shiftAnchorY=n.clientY,t.hyBase=e.hy);let o=Ni(e.s[0],e.s[1],e.s[2]),c=e.s.slice();c[e.na]+=1;let l=Ni(c[0],c[1],c[2]),h=l.x-o.x,u=l.y-o.y,d=l.z-o.z,f=Wt.matrixWorld.elements,x=h*f[0]+u*f[1]+d*f[2],y=h*f[4]+u*f[5]+d*f[6],m=x*x+y*y,p=xe.h/(Wt.top-Wt.bottom),v=x*p,_=-y*p,T=n.clientX-t.shiftAnchorX,R=n.clientY-t.shiftAnchorY,I=t.hyBase+(m>.02?Math.round((T*v+R*_)/(v*v+_*_)):Math.round((t.shiftAnchorY-n.clientY)*Pp()));a(e.c[i],e.c[r],I)&&(e.hy=I)}else{t.shiftAnchorY=null;let o=cx(e.na,e.s[e.na]);if(o){let c=[o.x,o.y,o.z];a(c[i],e.c[r],e.hy)&&(e.c[i]=c[i]),a(e.c[i],c[r],e.hy)&&(e.c[r]=c[r])}}U_()}function MR(){let n=Dp(g.drag.box);g.tool==="add"?(Ld(n,g.selColor),Ph(g.selColor)):ua(n),g.liveMeas=null,hr(),Xt(),de()}function U_(){let n=Dp(g.drag.box);g.liveMeas=Sd(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,Ni,2),hr()}function SR(n){let t=g.sel3d.region.y0;g.drag={...n,mode:"selmove",start:jr(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function wR(n){g.drag={...n,mode:"selrot",steps:0}}function ER(n){let t=g.drag,e=t.dx,i=t.dy,r=t.dz;if(n.shiftKey)t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=i),i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*Pp());else{t.shiftAnchorY=null;let s=jr(t.start.y);s&&(e=s.x-t.start.x,r=s.z-t.start.z)}(e!==t.dx||i!==t.dy||r!==t.dz)&&(g.sel3d.lifted||sp(),Xy(e-t.dx,i-t.dy,r-t.dz),t.dx=e,t.dy=i,t.dz=r)}function TR(n){let t=g.drag,e=n.altKey;e!==!!t.fine&&(t.fine=e,g.sel3d.lifted&&(lp(),t.sx=n.clientX,t.steps=0,t.deg=0));let i=()=>{g.sel3d.lifted||(sp(),lp())};if(e){let r=Math.round((t.sx-n.clientX)/25)*15;if(r===(t.deg??0))return;i(),t.deg=r,$y(r,n.shiftKey)}else{let r=Math.round((t.sx-n.clientX)/70);if(r===t.steps)return;i(),t.steps=r,Yy(r,n.shiftKey)}}function AR(n){g.liveMeas=null,hr(),n&&Hy(Dp(g.drag.box)),Xt()}qe.addEventListener("pointerdown",n=>{if(g.drag||g.painting)return;qe.setPointerCapture(n.pointerId),fl(n.clientX,n.clientY);let t={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(n.button===1){g.drag={...t,mode:"pan"};return}if(g.editObject){n.button===0?g.tool==="view"||g.tool==="measure"?g.drag={...t,mode:"pan"}:g.tool==="select"?g.sel3d&&hp()?SR(t):(Gi(),R_(t)):g.tool==="add"||g.tool==="erase"?R_(t):g.tool==="eyedropper"?vR():(g.painting=!0,g.lastVox=null,I_(n.shiftKey)):n.button===2&&(g.tool==="select"&&g.sel3d&&hp()?wR(t):g.drag={...t,mode:"orbit"});return}let e=_d(),i=e&&g.selection.has(e);n.button===0?g.tool==="measure"?g.drag={...t,mode:"pan"}:i?g.drag={...t,mode:"move",start:la(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...mR()}:g.drag={...t,mode:"pan",clickId:e}:n.button===2&&(i&&g.tool!=="measure"?g.drag={...t,mode:"rotobj",steps:0}:g.drag={...t,mode:"orbit"})});qe.addEventListener("pointermove",n=>{fl(n.clientX,n.clientY),g.editObject&&g.painting?I_(n.shiftKey):g.drag?pR(n)||(g.drag.mode==="move"?xR(n):g.drag.mode==="rotobj"?_R(n):g.drag.mode==="box"?bR(n):g.drag.mode==="selmove"?ER(n):g.drag.mode==="selrot"&&TR(n)):g.editObject&&g.tool!=="select"&&g.tool!=="view"&&g.tool!=="measure"?L_():bn.visible=!1,fR(),dR(n)});qe.addEventListener("pointerup",n=>{try{qe.releasePointerCapture(n.pointerId)}catch{}if(g.tool==="measure"&&g.drag&&!Uh(n)){if(n.button===0){hx(),g.drag=null;return}if(n.button===2){ux(),g.drag=null;return}}if(g.editObject){g.painting?(g.painting=!1,Xt(),de()):g.drag&&g.drag.mode==="box"?g.tool==="select"?AR(Uh(n)):MR():g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot")&&op(),g.drag=null;return}if(g.drag)if(g.drag.mode==="pan"&&!Uh(n)&&n.button===0){let t=g.drag.clickId,e=n.shiftKey||n.ctrlKey||n.metaKey,i=new Set(g.selection);t?(e?g.selection.has(t)?g.selection.delete(t):g.selection.add(t):g.selection=new Set([t]),mp(t)):e||(g.selection.clear(),mp(null)),gr(i),Xt()}else g.drag.mode==="move"?yR(Uh(n)&&(n.ctrlKey||n.metaKey)):g.drag.mode==="rotobj"&&g.drag.dirty&&(Xt(),de());g.drag=null});qe.addEventListener("pointercancel",()=>{if(!g.drag&&!g.painting)return;let n=g.painting;g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot")&&op(),g.drag=null,g.painting=!1,g.liveMeas=null,hr(),ue(),n&&(Xt(),de())});qe.addEventListener("pointerleave",()=>{bn.visible=!1,Wi.style.display="none",g.tool==="measure"&&!g.drag&&!g.painting&&g.liveMeas&&(g.liveMeas=null,hr())});qe.addEventListener("contextmenu",n=>n.preventDefault());qe.addEventListener("wheel",n=>{n.preventDefault(),jt.zoom*=n.deltaY>0?1/.95:.95,jt.zoom=Math.max(6,Math.min(al,jt.zoom))},{passive:!1});qe.addEventListener("dblclick",n=>{if(g.editObject)return;fl(n.clientX,n.clientY);let t=_d();t&&fs(Di(t),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,Rn,{passive:!0,capture:!0});var CR=()=>Math.abs(jt.azim-Ft.azim)<.001&&Math.abs(jt.elev-Ft.elev)<.001&&Math.abs(jt.zoom-Ft.zoom)<.001&&Ft.target.distanceToSquared(jt.target)<1e-6;function D_(){let n=qe.getBoundingClientRect();xe.w=n.width,xe.h=n.height,xe.x=n.left,xe.y=n.top}function N_(){let n=Math.max(1,Math.round(xe.w)),t=Math.max(1,Math.round(xe.h)),e=Math.min(devicePixelRatio,2);Ri.getPixelRatio()!==e&&Ri.setPixelRatio(e),(qe.width!==Math.floor(n*e)||qe.height!==Math.floor(t*e))&&(Ri.setSize(n,t,!1),Rn())}window.addEventListener("resize",()=>{D_(),N_()});var Np=!1;function RR(){Np=!0,g.drag?Rn():O_()}function O_(){Np=!1;let n=Ao(Py());n&&(bh(n),ue(),Xt(),Ye(),Rn())}function z_(){requestAnimationFrame(z_),Np&&!g.drag&&O_(),N_(),wx(),(ta.tail>0||!CR())&&(gx(),Ri.render(Ee,Wt),dx(),ta.tail>0&&ta.tail--)}async function IR(){Dy(RR),g.root=await M_(By),g.collapsed=new Set(Fy()),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),ue(),Xt(),Ln(),Ye(),C_(),D_(),z_()}IR();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
