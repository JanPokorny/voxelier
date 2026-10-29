var g={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var ed="160";var tv=0,Yp=1,ev=2;var Sg=1,nd=2,wi=3,pn=0,qe=1,Hn=2;var nr=0,Os=1,$p=2,jp=3,Jp=4,nv=5,Nr=100,iv=101,rv=102,Zp=103,Kp=104,sv=200,ov=201,av=202,cv=203,yu=204,_u=205,lv=206,hv=207,uv=208,dv=209,fv=210,pv=211,mv=212,gv=213,xv=214,yv=0,_v=1,vv=2,Nc=3,bv=4,Mv=5,Sv=6,wv=7,id=0,Ev=1,Tv=2,ir=0,Av=1,Cv=2,Rv=3,Iv=4,Lv=5,Pv=6;var wg=300,ks=301,Vs=302,vu=303,bu=304,sl=306,Mu=1e3,Gn=1001,Su=1002,en=1003,Qp=1004;var kh=1005;var Pn=1006,Uv=1007;var $o=1008;var rr=1009,Dv=1010,Nv=1011,rd=1012,Eg=1013,tr=1014,er=1015,jo=1016,Tg=1017,Ag=1018,Fr=1020,Ov=1021,Wn=1023,zv=1024,Fv=1025,Br=1026,Hs=1027,Bv=1028,Cg=1029,kv=1030,Rg=1031,Ig=1033,Vh=33776,Hh=33777,Gh=33778,Wh=33779,tm=35840,em=35841,nm=35842,im=35843,Lg=36196,rm=37492,sm=37496,om=37808,am=37809,cm=37810,lm=37811,hm=37812,um=37813,dm=37814,fm=37815,pm=37816,mm=37817,gm=37818,xm=37819,ym=37820,_m=37821,Xh=36492,vm=36494,bm=36495,Vv=36283,Mm=36284,Sm=36285,wm=36286;var Oc=2300,zc=2301,qh=2302,Em=2400,Tm=2401,Am=2402;var Pg=3e3,kr=3001,Hv=3200,Gv=3201,Ug=0,Wv=1,Un="",Be="srgb",Ai="srgb-linear",sd="display-p3",ol="display-p3-linear",Fc="linear",ae="srgb",Bc="rec709",kc="p3";var xs=7680;var Cm=519,Xv=512,qv=513,Yv=514,Dg=515,$v=516,jv=517,Jv=518,Zv=519,Rm=35044;var Im="300 es",wu=1035,Ei=2e3,Vc=2001,sr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lm=1234567,zs=Math.PI/180,Jo=180/Math.PI;function $s(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function nn(n,t,e){return Math.max(t,Math.min(e,n))}function od(n,t){return(n%t+t)%t}function Kv(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Qv(n,t,e){return n!==t?(e-n)/(t-n):0}function Xo(n,t,e){return(1-e)*n+e*t}function tb(n,t,e,i){return Xo(n,t,1-Math.exp(-e*i))}function eb(n,t=1){return t-Math.abs(od(n,t*2)-t)}function nb(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ib(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function rb(n,t){return n+Math.floor(Math.random()*(t-n+1))}function sb(n,t){return n+Math.random()*(t-n)}function ob(n){return n*(.5-Math.random())}function ab(n){n!==void 0&&(Lm=n);let t=Lm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cb(n){return n*zs}function lb(n){return n*Jo}function Eu(n){return(n&n-1)===0&&n!==0}function hb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ub(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),y=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*y,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*y,a*l);break;case"ZYZ":n.set(c*y,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var al={DEG2RAD:zs,RAD2DEG:Jo,generateUUID:$s,clamp:nn,euclideanModulo:od,mapLinear:Kv,inverseLerp:Qv,lerp:Xo,damp:tb,pingpong:eb,smoothstep:nb,smootherstep:ib,randInt:rb,randFloat:sb,randFloatSpread:ob,seededRandom:ab,degToRad:cb,radToDeg:lb,isPowerOfTwo:Eu,ceilPowerOfTwo:hb,floorPowerOfTwo:Hc,setQuaternionFromProperEuler:ub,normalize:Qe,denormalize:Us},Wt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class n{constructor(t,e,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],y=i[8],x=r[0],p=r[3],m=r[6],v=r[1],_=r[4],E=r[7],R=r[2],I=r[5],C=r[8];return s[0]=o*x+a*v+c*R,s[3]=o*p+a*_+c*I,s[6]=o*m+a*E+c*C,s[1]=l*x+h*v+u*R,s[4]=l*p+h*_+u*I,s[7]=l*m+h*E+u*C,s[2]=d*x+f*v+y*R,s[5]=d*p+f*_+y*I,s[8]=d*m+f*E+y*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,y=e*u+i*d+r*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return t[0]=u*x,t[1]=(r*l-h*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yh.makeScale(t,e)),this}rotate(t){return this.premultiply(Yh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yh=new Ht;function Ng(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Gc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function db(){let n=Gc("canvas");return n.style.display="block",n}var Pm={};function qo(n){n in Pm||(Pm[n]=!0,console.warn(n))}var Um=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dm=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cc={[Ai]:{transfer:Fc,primaries:Bc,toReference:n=>n,fromReference:n=>n},[Be]:{transfer:ae,primaries:Bc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ol]:{transfer:Fc,primaries:kc,toReference:n=>n.applyMatrix3(Dm),fromReference:n=>n.applyMatrix3(Um)},[sd]:{transfer:ae,primaries:kc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dm),fromReference:n=>n.applyMatrix3(Um).convertLinearToSRGB()}},fb=new Set([Ai,ol]),Qt={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=cc[t].toReference,r=cc[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return cc[n].primaries},getTransfer:function(n){return n===Un?Fc:cc[n].transfer}};function Fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $h(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ys,Wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ys===void 0&&(ys=Gc("canvas")),ys.width=t.width,ys.height=t.height;let i=ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fs(e[i]/255)*255):e[i]=Fs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pb=0,Xc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=$s(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jh(r[o].image)):s.push(jh(r[o]))}else s=jh(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mb=0,Xn=class n extends sr{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Gn,r=Gn,s=Pn,o=$o,a=Wn,c=rr,l=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=$s(),this.name="",this.source=new Xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kr?Be:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mu:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Su:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mu:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Su:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?kr:Pg}set encoding(t){qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===kr?Be:Un}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=wg;Xn.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],y=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(y+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,E=(f+1)/2,R=(m+1)/2,I=(h+d)/4,C=(u+x)/4,V=(y+p)/4;return _>E&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=I/i,s=C/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=I/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=V/s),this.set(i,r,s,e),this}let v=Math.sqrt((p-y)*(p-y)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends sr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let r={width:t,height:e,depth:1};i.encoding!==void 0&&(qo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?Be:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends Tu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},qc=class extends Xn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Au=class extends Xn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],y=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=y,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==y){let p=1-a,m=c*d+l*f+h*y+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let R=Math.sqrt(_),I=Math.atan2(R,m*v);p=Math.sin(p*I)/R,a=Math.sin(a*I)/R}let E=a*v;if(c=c*p+d*E,l=l*p+f*E,h=h*p+y*E,u=u*p+x*E,p===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],y=s[o+3];return t[e]=a*y+h*u+c*f-l*d,t[e+1]=c*y+h*d+l*u-a*f,t[e+2]=l*y+h*f+a*d-c*u,t[e+3]=h*y-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),f=c(r/2),y=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*y,this._y=l*f*u-d*h*y,this._z=l*h*y+d*f*u,this._w=l*h*u-d*f*y;break;case"YXZ":this._x=d*h*u+l*f*y,this._y=l*f*u-d*h*y,this._z=l*h*y-d*f*u,this._w=l*h*u+d*f*y;break;case"ZXY":this._x=d*h*u-l*f*y,this._y=l*f*u+d*h*y,this._z=l*h*y+d*f*u,this._w=l*h*u-d*f*y;break;case"ZYX":this._x=d*h*u-l*f*y,this._y=l*f*u+d*h*y,this._z=l*h*y-d*f*u,this._w=l*h*u+d*f*y;break;case"YZX":this._x=d*h*u+l*f*y,this._y=l*f*u+d*h*y,this._z=l*h*y-d*f*u,this._w=l*h*u-d*f*y;break;case"XZY":this._x=d*h*u-l*f*y,this._y=l*f*u-d*h*y,this._z=l*h*y+d*f*u,this._w=l*h*u+d*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jh.copy(this).projectOnVector(t),this.sub(Jh)}reflect(t){return this.sub(Jh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jh=new P,Nm=new or,Ri=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lc.copy(i.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),hc.subVectors(this.max,Vo),_s.subVectors(t.a,Vo),vs.subVectors(t.b,Vo),bs.subVectors(t.c,Vo),ji.subVectors(vs,_s),Ji.subVectors(bs,vs),Ir.subVectors(_s,bs);let e=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-Ir.z,Ir.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,Ir.z,0,-Ir.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-Ir.y,Ir.x,0];return!Zh(e,_s,vs,bs,hc)||(e=[1,0,0,0,1,0,0,0,1],!Zh(e,_s,vs,bs,hc))?!1:(uc.crossVectors(ji,Ji),e=[uc.x,uc.y,uc.z],Zh(e,_s,vs,bs,hc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_i=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,lc=new Ri,_s=new P,vs=new P,bs=new P,ji=new P,Ji=new P,Ir=new P,Vo=new P,hc=new P,uc=new P,Lr=new P;function Zh(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Lr.fromArray(n,s);let a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=t.dot(Lr),l=e.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var gb=new Ri,Ho=new P,Kh=new P,Gs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gb.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);let e=Ho.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(Kh)),this.expandByPoint(Ho.copy(t.center).sub(Kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new P,Qh=new P,dc=new P,Zi=new P,tu=new P,fc=new P,eu=new P,Zo=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Qh.copy(t).add(e).multiplyScalar(.5),dc.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Qh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(dc),a=Zi.dot(this.direction),c=-Zi.dot(dc),l=Zi.lengthSq(),h=Math.abs(1-o*o),u,d,f,y;if(h>0)if(u=o*c-a,d=o*a-c,y=s*h,u>=0)if(d>=-y)if(d<=y){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-y?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=y?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qh).addScaledVector(dc,d),f}intersectSphere(t,e){vi.subVectors(t.center,this.origin);let i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,r,s){tu.subVectors(e,t),fc.subVectors(i,t),eu.crossVectors(tu,fc);let o=this.direction.dot(eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);let c=a*this.direction.dot(fc.crossVectors(Zi,fc));if(c<0)return null;let l=a*this.direction.dot(tu.cross(Zi));if(l<0||c+l>o)return null;let h=-a*Zi.dot(eu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(t,e,i,r,s,o,a,c,l,h,u,d,f,y,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,u,d,f,y,x,p)}set(t,e,i,r,s,o,a,c,l,h,u,d,f,y,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=y,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/Ms.setFromMatrixColumn(t,0).length(),s=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,y=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+y*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=y+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,y=l*h,x=l*u;e[0]=d+x*a,e[4]=y*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-y,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,y=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=y+f*a,e[1]=f+y*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,y=a*h,x=a*u;e[0]=c*h,e[4]=y*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-y,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,y=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=y*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+y,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,y=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-y,e[2]=y*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xb,t,yb)}lookAt(t,e,i){let r=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ki.crossVectors(i,wn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ki.crossVectors(i,wn)),Ki.normalize(),pc.crossVectors(wn,Ki),r[0]=Ki.x,r[4]=pc.x,r[8]=wn.x,r[1]=Ki.y,r[5]=pc.y,r[9]=wn.y,r[2]=Ki.z,r[6]=pc.z,r[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],y=i[2],x=i[6],p=i[10],m=i[14],v=i[3],_=i[7],E=i[11],R=i[15],I=r[0],C=r[4],V=r[8],M=r[12],T=r[1],D=r[5],X=r[9],$=r[13],A=r[2],O=r[6],G=r[10],Y=r[14],q=r[3],W=r[7],J=r[11],Z=r[15];return s[0]=o*I+a*T+c*A+l*q,s[4]=o*C+a*D+c*O+l*W,s[8]=o*V+a*X+c*G+l*J,s[12]=o*M+a*$+c*Y+l*Z,s[1]=h*I+u*T+d*A+f*q,s[5]=h*C+u*D+d*O+f*W,s[9]=h*V+u*X+d*G+f*J,s[13]=h*M+u*$+d*Y+f*Z,s[2]=y*I+x*T+p*A+m*q,s[6]=y*C+x*D+p*O+m*W,s[10]=y*V+x*X+p*G+m*J,s[14]=y*M+x*$+p*Y+m*Z,s[3]=v*I+_*T+E*A+R*q,s[7]=v*C+_*D+E*O+R*W,s[11]=v*V+_*X+E*G+R*J,s[15]=v*M+_*$+E*Y+R*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],y=t[3],x=t[7],p=t[11],m=t[15];return y*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*f-i*c*f)+x*(+e*c*f-e*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+p*(+e*l*u-e*a*f-s*o*u+i*o*f+s*a*h-i*l*h)+m*(-r*a*h-e*c*u+e*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],y=t[12],x=t[13],p=t[14],m=t[15],v=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,_=y*d*l-h*p*l-y*c*f+o*p*f+h*c*m-o*d*m,E=h*x*l-y*u*l+y*a*f-o*x*f-h*a*m+o*u*m,R=y*u*c-h*x*c-y*a*d+o*x*d+h*a*p-o*u*p,I=e*v+i*_+r*E+s*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return t[0]=v*C,t[1]=(x*d*s-u*p*s-x*r*f+i*p*f+u*r*m-i*d*m)*C,t[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*m+i*c*m)*C,t[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*f-i*c*f)*C,t[4]=_*C,t[5]=(h*p*s-y*d*s+y*r*f-e*p*f-h*r*m+e*d*m)*C,t[6]=(y*c*s-o*p*s-y*r*l+e*p*l+o*r*m-e*c*m)*C,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*f+e*c*f)*C,t[8]=E*C,t[9]=(y*u*s-h*x*s-y*i*f+e*x*f+h*i*m-e*u*m)*C,t[10]=(o*x*s-y*a*s+y*i*l-e*x*l-o*i*m+e*a*m)*C,t[11]=(h*a*s-o*u*s-h*i*l+e*u*l+o*i*f-e*a*f)*C,t[12]=R*C,t[13]=(h*x*r-y*u*r+y*i*d-e*x*d-h*i*p+e*u*p)*C,t[14]=(y*a*r-o*x*r-y*i*c+e*x*c+o*i*p-e*a*p)*C,t[15]=(o*u*r-h*a*r+h*i*c-e*u*c-o*i*d+e*a*d)*C,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,y=s*u,x=o*h,p=o*u,m=a*u,v=c*l,_=c*h,E=c*u,R=i.x,I=i.y,C=i.z;return r[0]=(1-(x+m))*R,r[1]=(f+E)*R,r[2]=(y-_)*R,r[3]=0,r[4]=(f-E)*I,r[5]=(1-(d+m))*I,r[6]=(p+v)*I,r[7]=0,r[8]=(y+_)*C,r[9]=(p-v)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=Ms.set(r[0],r[1],r[2]).length(),o=Ms.set(r[4],r[5],r[6]).length(),a=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],kn.copy(this);let l=1/s,h=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Ei){let c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r),f,y;if(a===Ei)f=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Vc)f=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Ei){let c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(o-s),d=(e+t)*l,f=(i+r)*h,y,x;if(a===Ei)y=(o+s)*u,x=-2*u;else if(a===Vc)y=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ms=new P,kn=new Ee,xb=new P(0,0,0),yb=new P(1,1,1),Ki=new P,pc=new P,wn=new P,Om=new Ee,zm=new or,Yc=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Om.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Om,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zm.setFromEuler(this),this.setFromQuaternion(zm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yc.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_b=0,Fm=new P,Ss=new or,bi=new Ee,mc=new P,Go=new P,vb=new P,bb=new or,Bm=new P(1,0,0),km=new P(0,1,0),Vm=new P(0,0,1),Mb={type:"added"},Sb={type:"removed"},on=class n extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Yc,i=new or,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Ht}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Bm,t)}rotateY(t){return this.rotateOnAxis(km,t)}rotateZ(t){return this.rotateOnAxis(Vm,t)}translateOnAxis(t,e){return Fm.copy(t).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bm,t)}translateY(t){return this.translateOnAxis(km,t)}translateZ(t){return this.translateOnAxis(Vm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mc.copy(t):mc.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Go,mc,this.up):bi.lookAt(mc,Go,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(bi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Mb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sb)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,bb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),y=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};on.DEFAULT_UP=new P(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new P,Mi=new P,nu=new P,Si=new P,ws=new P,Es=new P,Hm=new P,iu=new P,ru=new P,su=new P,gc=!1,zr=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Vn.subVectors(t,e),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Vn.subVectors(r,e),Mi.subVectors(i,e),nu.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(Mi),c=Vn.dot(nu),l=Mi.dot(Mi),h=Mi.dot(nu),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,y=(o*h-a*c)*d;return s.set(1-f-y,y,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(t,e,i,r,s,o,a,c){return gc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gc=!0),this.getInterpolation(t,e,i,r,s,o,a,c)}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static isFrontFacing(t,e,i,r){return Vn.subVectors(i,e),Mi.subVectors(t,e),Vn.cross(Mi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Vn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return gc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gc=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;ws.subVectors(r,i),Es.subVectors(s,i),iu.subVectors(t,i);let c=ws.dot(iu),l=Es.dot(iu);if(c<=0&&l<=0)return e.copy(i);ru.subVectors(t,r);let h=ws.dot(ru),u=Es.dot(ru);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(ws,o);su.subVectors(t,s);let f=ws.dot(su),y=Es.dot(su);if(y>=0&&f<=y)return e.copy(s);let x=f*l-c*y;if(x<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(i).addScaledVector(Es,a);let p=h*y-f*u;if(p<=0&&u-h>=0&&f-y>=0)return Hm.subVectors(s,r),a=(u-h)/(u-h+(f-y)),e.copy(r).addScaledVector(Hm,a);let m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(ws,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},xc={h:0,s:0,l:0};function ou(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=od(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ou(o,s,t+1/3),this.g=ou(o,s,t),this.b=ou(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Be){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let i=Og[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=$h(t.r),this.g=$h(t.g),this.b=$h(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Qt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(nn(Xe.r*255,0,255))*65536+Math.round(nn(Xe.g*255,0,255))*256+Math.round(nn(Xe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Xe.copy(this),e);let i=Xe.r,r=Xe.g,s=Xe.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Be){Qt.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,i=Xe.g,r=Xe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(xc);let i=Xo(Qi.h,xc.h,e),r=Xo(Qi.s,xc.s,e),s=Xo(Qi.l,xc.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Rt;Rt.NAMES=Og;var wb=0,Ii=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Os,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=_u,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yu&&(i.blendSrc=this.blendSrc),this.blendDst!==_u&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ws=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new P,yc=new Wt,Ye=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yc.fromBufferAttribute(this,e),yc.applyMatrix3(t),this.setXY(e,yc.x,yc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rm&&(t.usage=this.usage),t}};var $c=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var jc=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var sn=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Eb=0,Ln=new Ee,au=new on,Ts=new P,En=new Ri,Wo=new Ri,Ue=new P,an=class n extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ng(t)?jc:$c)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return au.lookAt(t),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(En.min,Wo.min),En.expandByPoint(Ue),Ue.addVectors(En.max,Wo.max),En.expandByPoint(Ue)):(En.expandByPoint(Wo.min),En.expandByPoint(Wo.max))}En.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(t,l),Ue.add(Ts)),r=Math.max(r,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new P,h[T]=new P;let u=new P,d=new P,f=new P,y=new Wt,x=new Wt,p=new Wt,m=new P,v=new P;function _(T,D,X){u.fromArray(r,T*3),d.fromArray(r,D*3),f.fromArray(r,X*3),y.fromArray(o,T*2),x.fromArray(o,D*2),p.fromArray(o,X*2),d.sub(u),f.sub(u),x.sub(y),p.sub(y);let $=1/(x.x*p.y-p.x*x.y);isFinite($)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar($),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar($),l[T].add(m),l[D].add(m),l[X].add(m),h[T].add(v),h[D].add(v),h[X].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,D=E.length;T<D;++T){let X=E[T],$=X.start,A=X.count;for(let O=$,G=$+A;O<G;O+=3)_(i[O+0],i[O+1],i[O+2])}let R=new P,I=new P,C=new P,V=new P;function M(T){C.fromArray(s,T*3),V.copy(C);let D=l[T];R.copy(D),R.sub(C.multiplyScalar(C.dot(D))).normalize(),I.crossVectors(V,D);let $=I.dot(h[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=$}for(let T=0,D=E.length;T<D;++T){let X=E[T],$=X.start,A=X.count;for(let O=$,G=$+A;O<G;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let y=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,y=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[y++]=l[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,i);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gm=new Ee,Pr=new Zo,_c=new Gs,Wm=new P,As=new P,Cs=new P,Rs=new P,cu=new P,vc=new P,bc=new Wt,Mc=new Wt,Sc=new Wt,Xm=new P,qm=new P,Ym=new P,wc=new P,Ec=new P,we=class extends on{constructor(t=new an,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){vc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(cu.fromBufferAttribute(u,t),o?vc.addScaledVector(cu,h):vc.addScaledVector(cu.sub(e),h))}e.add(vc)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(_c.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(_c,Wm)===null||Pr.origin.distanceToSquared(Wm)>(t.far-t.near)**2))&&(Gm.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=d.length;y<x;y++){let p=d[y],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=v,R=_;E<R;E+=3){let I=a.getX(E),C=a.getX(E+1),V=a.getX(E+2);r=Tc(this,m,t,i,l,h,u,I,C,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let y=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=y,m=x;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),E=a.getX(p+2);r=Tc(this,o,t,i,l,h,u,v,_,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,x=d.length;y<x;y++){let p=d[y],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let E=v,R=_;E<R;E+=3){let I=E,C=E+1,V=E+2;r=Tc(this,m,t,i,l,h,u,I,C,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let y=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=y,m=x;p<m;p+=3){let v=p,_=p+1,E=p+2;r=Tc(this,o,t,i,l,h,u,v,_,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function Tb(n,t,e,i,r,s,o,a){let c;if(t.side===qe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===pn,a),c===null)return null;Ec.copy(a),Ec.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ec);return l<e.near||l>e.far?null:{distance:l,point:Ec.clone(),object:n}}function Tc(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,As),n.getVertexPosition(c,Cs),n.getVertexPosition(l,Rs);let h=Tb(n,t,e,i,As,Cs,Rs,wc);if(h){r&&(bc.fromBufferAttribute(r,a),Mc.fromBufferAttribute(r,c),Sc.fromBufferAttribute(r,l),h.uv=zr.getInterpolation(wc,As,Cs,Rs,bc,Mc,Sc,new Wt)),s&&(bc.fromBufferAttribute(s,a),Mc.fromBufferAttribute(s,c),Sc.fromBufferAttribute(s,l),h.uv1=zr.getInterpolation(wc,As,Cs,Rs,bc,Mc,Sc,new Wt),h.uv2=h.uv1),o&&(Xm.fromBufferAttribute(o,a),qm.fromBufferAttribute(o,c),Ym.fromBufferAttribute(o,l),h.normal=zr.getInterpolation(wc,As,Cs,Rs,Xm,qm,Ym,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};zr.getNormal(As,Cs,Rs,u.normal),h.face=u}return h}var ei=class n extends an{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;y("z","y","x",-1,-1,i,e,t,o,s,0),y("z","y","x",1,-1,i,e,-t,o,s,1),y("x","z","y",1,1,t,i,e,r,o,2),y("x","z","y",1,-1,t,i,-e,r,o,3),y("x","y","z",1,-1,t,e,i,r,s,4),y("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function y(x,p,m,v,_,E,R,I,C,V,M){let T=E/C,D=R/V,X=E/2,$=R/2,A=I/2,O=C+1,G=V+1,Y=0,q=0,W=new P;for(let J=0;J<G;J++){let Z=J*D-$;for(let nt=0;nt<O;nt++){let B=nt*T-X;W[x]=B*v,W[p]=Z*_,W[m]=A,l.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=I>0?1:-1,h.push(W.x,W.y,W.z),u.push(nt/C),u.push(1-J/V),Y+=1}}for(let J=0;J<V;J++)for(let Z=0;Z<C;Z++){let nt=d+Z+O*J,B=d+Z+O*(J+1),j=d+(Z+1)+O*(J+1),ot=d+(Z+1)+O*J;c.push(nt,B,ot),c.push(B,j,ot),q+=6}a.addGroup(f,q,M),f+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function tn(n){let t={};for(let e=0;e<n.length;e++){let i=Xs(n[e]);for(let r in i)t[r]=i[r]}return t}function Ab(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zg(n){return n.getRenderTarget()===null?n.outputColorSpace:Qt.workingColorSpace}var Cb={clone:Xs,merge:tn},Rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rb,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Ab(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Jc=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends Jc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=-90,Ls=1,Cu=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(Is,Ls,t,e);r.layers=this.layers,this.add(r);let s=new rn(Is,Ls,t,e);s.layers=this.layers,this.add(s);let o=new rn(Is,Ls,t,e);o.layers=this.layers,this.add(o);let a=new rn(Is,Ls,t,e);a.layers=this.layers,this.add(a);let c=new rn(Is,Ls,t,e);c.layers=this.layers,this.add(c);let l=new rn(Is,Ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Zc=class extends Xn{constructor(t,e,i,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ru=class extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(qo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===kr?Be:Un),this.texture=new Zc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ei(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:nr});s.uniforms.tEquirect.value=e;let o=new we(r,s),a=e.minFilter;return e.minFilter===$o&&(e.minFilter=Pn),new Cu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},lu=new P,Lb=new P,Pb=new Ht,De=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=lu.subVectors(i,e).cross(Lb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pb.getNormalMatrix(t),r=this.coplanarPoint(lu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Gs,Ac=new P,Qo=class{constructor(t=new De,e=new De,i=new De,r=new De,s=new De,o=new De){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei){let i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],f=r[8],y=r[9],x=r[10],p=r[11],m=r[12],v=r[13],_=r[14],E=r[15];if(i[0].setComponents(c-s,d-l,p-f,E-m).normalize(),i[1].setComponents(c+s,d+l,p+f,E+m).normalize(),i[2].setComponents(c+o,d+h,p+y,E+v).normalize(),i[3].setComponents(c-o,d-h,p-y,E-v).normalize(),i[4].setComponents(c-a,d-u,p-x,E-_).normalize(),e===Ei)i[5].setComponents(c+a,d+u,p+x,E+_).normalize();else if(e===Vc)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ac.x=r.normal.x>0?t.max.x:t.min.x,Ac.y=r.normal.y>0?t.max.y:t.min.y,Ac.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fg(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Ub(n,t){let e=t.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=u.byteLength,y=n.createBuffer();n.bindBuffer(h,y),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,u){let d=h.array,f=h._updateRange,y=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&y.length===0&&n.bufferSubData(u,0,d),y.length!==0){for(let x=0,p=y.length;x<p;x++){let m=y[x];e?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var qs=class n extends an{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,f=[],y=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let _=0;_<l;_++){let E=_*u-s;y.push(E,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let _=v+l*m,E=v+l*(m+1),R=v+1+l*(m+1),I=v+1+l*m;f.push(_,E,I),f.push(E,R,I)}this.setIndex(f),this.setAttribute("position",new sn(y,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
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
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hb=`#ifdef USE_BATCHING
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
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
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
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`
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
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,MM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
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
#endif`,AM=`#ifdef USE_ENVMAP
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
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
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
#endif`,UM=`struct PhysicalMaterial {
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
}`,DM=`
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
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
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,JM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
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
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,bS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,SS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ES=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DS=`uniform sampler2D t2D;
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`#include <common>
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
}`,kS=`#if DEPTH_PACKING == 3200
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
}`,VS=`#define DISTANCE
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
}`,HS=`#define DISTANCE
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`uniform float scale;
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
}`,qS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,$S=`uniform vec3 diffuse;
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
}`,jS=`#define LAMBERT
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
}`,JS=`#define LAMBERT
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
}`,ZS=`#define MATCAP
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
}`,KS=`#define MATCAP
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
}`,QS=`#define NORMAL
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
}`,tw=`#define NORMAL
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
}`,ew=`#define PHONG
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
}`,nw=`#define PHONG
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
}`,iw=`#define STANDARD
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
}`,rw=`#define STANDARD
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
}`,sw=`#define TOON
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
}`,ow=`#define TOON
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
}`,aw=`uniform float size;
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
}`,cw=`uniform vec3 diffuse;
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
}`,lw=`#include <common>
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
}`,hw=`uniform vec3 color;
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
}`,uw=`uniform float rotation;
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
}`,dw=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Db,alphahash_pars_fragment:Nb,alphamap_fragment:Ob,alphamap_pars_fragment:zb,alphatest_fragment:Fb,alphatest_pars_fragment:Bb,aomap_fragment:kb,aomap_pars_fragment:Vb,batching_pars_vertex:Hb,batching_vertex:Gb,begin_vertex:Wb,beginnormal_vertex:Xb,bsdfs:qb,iridescence_fragment:Yb,bumpmap_pars_fragment:$b,clipping_planes_fragment:jb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Kb,color_fragment:Qb,color_pars_fragment:tM,color_pars_vertex:eM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:cM,emissivemap_pars_fragment:lM,colorspace_fragment:hM,colorspace_pars_fragment:uM,envmap_fragment:dM,envmap_common_pars_fragment:fM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:_M,fog_pars_fragment:vM,gradientmap_pars_fragment:bM,lightmap_fragment:MM,lightmap_pars_fragment:SM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:EM,lights_pars_begin:TM,lights_toon_fragment:CM,lights_toon_pars_fragment:RM,lights_phong_fragment:IM,lights_phong_pars_fragment:LM,lights_physical_fragment:PM,lights_physical_pars_fragment:UM,lights_fragment_begin:DM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:kM,map_fragment:VM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:qM,morphcolor_vertex:YM,morphnormal_vertex:$M,morphtarget_pars_vertex:jM,morphtarget_vertex:JM,normal_fragment_begin:ZM,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:tS,normal_vertex:eS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:oS,opaque_fragment:aS,packing:cS,premultiplied_alpha_fragment:lS,project_vertex:hS,dithering_fragment:uS,dithering_pars_fragment:dS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:xS,shadowmask_pars_fragment:yS,skinbase_vertex:_S,skinning_pars_vertex:vS,skinning_vertex:bS,skinnormal_vertex:MS,specularmap_fragment:SS,specularmap_pars_fragment:wS,tonemapping_fragment:ES,tonemapping_pars_fragment:TS,transmission_fragment:AS,transmission_pars_fragment:CS,uv_pars_fragment:RS,uv_pars_vertex:IS,uv_vertex:LS,worldpos_vertex:PS,background_vert:US,background_frag:DS,backgroundCube_vert:NS,backgroundCube_frag:OS,cube_vert:zS,cube_frag:FS,depth_vert:BS,depth_frag:kS,distanceRGBA_vert:VS,distanceRGBA_frag:HS,equirect_vert:GS,equirect_frag:WS,linedashed_vert:XS,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:$S,meshlambert_vert:jS,meshlambert_frag:JS,meshmatcap_vert:ZS,meshmatcap_frag:KS,meshnormal_vert:QS,meshnormal_frag:tw,meshphong_vert:ew,meshphong_frag:nw,meshphysical_vert:iw,meshphysical_frag:rw,meshtoon_vert:sw,meshtoon_frag:ow,points_vert:aw,points_frag:cw,shadow_vert:lw,shadow_frag:hw,sprite_vert:uw,sprite_frag:dw},lt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ti={basic:{uniforms:tn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:tn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:tn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:tn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:tn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:tn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:tn([lt.points,lt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:tn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:tn([lt.common,lt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:tn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:tn([lt.sprite,lt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:tn([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:tn([lt.lights,lt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Cc={r:0,b:0,g:0};function fw(n,t,e,i,r,s,o){let a=new Rt(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function y(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===sl)?(h===void 0&&(h=new we(new ei(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Xs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new we(new qs(2,2),new qn({name:"BackgroundMaterial",uniforms:Xs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(Cc,zg(n)),i.buffers.color.setClear(Cc.r,Cc.g,Cc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:y}}function pw(n,t,e,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,h=!1;function u(A,O,G,Y,q){let W=!1;if(o){let J=x(Y,G,O);l!==J&&(l=J,f(l.object)),W=m(A,Y,G,q),W&&v(A,Y,G,q)}else{let J=O.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=J,W=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,V(A,O,G,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(A){return i.isWebGL2?n.bindVertexArray(A):s.bindVertexArrayOES(A)}function y(A){return i.isWebGL2?n.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function x(A,O,G){let Y=G.wireframe===!0,q=a[A.id];q===void 0&&(q={},a[A.id]=q);let W=q[O.id];W===void 0&&(W={},q[O.id]=W);let J=W[Y];return J===void 0&&(J=p(d()),W[Y]=J),J}function p(A){let O=[],G=[],Y=[];for(let q=0;q<r;q++)O[q]=0,G[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:Y,object:A,attributes:{},index:null}}function m(A,O,G,Y){let q=l.attributes,W=O.attributes,J=0,Z=G.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=q[nt],ot=W[nt];if(ot===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(ot=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(ot=A.instanceColor)),j===void 0||j.attribute!==ot||ot&&j.data!==ot.data)return!0;J++}return l.attributesNum!==J||l.index!==Y}function v(A,O,G,Y){let q={},W=O.attributes,J=0,Z=G.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=W[nt];j===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));let ot={};ot.attribute=j,j&&j.data&&(ot.data=j.data),q[nt]=ot,J++}l.attributes=q,l.attributesNum=J,l.index=Y}function _(){let A=l.newAttributes;for(let O=0,G=A.length;O<G;O++)A[O]=0}function E(A){R(A,0)}function R(A,O){let G=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;G[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),q[A]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,O),q[A]=O)}function I(){let A=l.newAttributes,O=l.enabledAttributes;for(let G=0,Y=O.length;G<Y;G++)O[G]!==A[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function C(A,O,G,Y,q,W,J){J===!0?n.vertexAttribIPointer(A,O,G,q,W):n.vertexAttribPointer(A,O,G,Y,q,W)}function V(A,O,G,Y){if(i.isWebGL2===!1&&(A.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=Y.attributes,W=G.getAttributes(),J=O.defaultAttributeValues;for(let Z in W){let nt=W[Z];if(nt.location>=0){let B=q[Z];if(B===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let j=B.normalized,ot=B.itemSize,tt=e.get(B);if(tt===void 0)continue;let st=tt.buffer,at=tt.type,ft=tt.bytesPerElement,gt=i.isWebGL2===!0&&(at===n.INT||at===n.UNSIGNED_INT||B.gpuType===Eg);if(B.isInterleavedBufferAttribute){let vt=B.data,N=vt.stride,le=B.offset;if(vt.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)R(nt.location+_t,vt.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<nt.locationSize;_t++)E(nt.location+_t);n.bindBuffer(n.ARRAY_BUFFER,st);for(let _t=0;_t<nt.locationSize;_t++)C(nt.location+_t,ot/nt.locationSize,at,j,N*ft,(le+ot/nt.locationSize*_t)*ft,gt)}else{if(B.isInstancedBufferAttribute){for(let vt=0;vt<nt.locationSize;vt++)R(nt.location+vt,B.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let vt=0;vt<nt.locationSize;vt++)E(nt.location+vt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let vt=0;vt<nt.locationSize;vt++)C(nt.location+vt,ot/nt.locationSize,at,j,ot*ft,ot/nt.locationSize*vt*ft,gt)}}else if(J!==void 0){let j=J[Z];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(nt.location,j);break;case 3:n.vertexAttrib3fv(nt.location,j);break;case 4:n.vertexAttrib4fv(nt.location,j);break;default:n.vertexAttrib1fv(nt.location,j)}}}}I()}function M(){X();for(let A in a){let O=a[A];for(let G in O){let Y=O[G];for(let q in Y)y(Y[q].object),delete Y[q];delete O[G]}delete a[A]}}function T(A){if(a[A.id]===void 0)return;let O=a[A.id];for(let G in O){let Y=O[G];for(let q in Y)y(Y[q].object),delete Y[q];delete O[G]}delete a[A.id]}function D(A){for(let O in a){let G=a[O];if(G[A.id]===void 0)continue;let Y=G[A.id];for(let q in Y)y(Y[q].object),delete Y[q];delete G[A.id]}}function X(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:E,disableUnusedAttributes:I}}function mw(n,t,e,i){let r=i.isWebGL2,s;function o(h){s=h}function a(h,u){n.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,d){if(d===0)return;let f,y;if(r)f=n,y="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[y](s,h,u,d),e.update(u,s,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let y=0;for(let x=0;x<d;x++)y+=u[x];e.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function gw(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,E=o||t.has("OES_texture_float"),R=_&&E,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:I}}function xw(n){let t=this,e=null,i=0,r=!1,s=!1,o=new De,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let y=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!r||y===null||y.length===0||s&&!p)s?h(null):l();else{let v=s?0:i,_=v*4,E=m.clippingState||null;c.value=E,E=h(y,d,_,f);for(let R=0;R!==_;++R)E[R]=e[R];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,y){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,y!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,E=f;_!==x;++_,E+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function yw(n){let t=new WeakMap;function e(o,a){return a===vu?o.mapping=ks:a===bu&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vu||a===bu)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ru(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var ar=class extends Jc{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ds=4,$m=[.125,.215,.35,.446,.526,.582],Or=20,hu=new ar,jm=new Rt,uu=null,du=0,fu=0,Dr=(1+Math.sqrt(5))/2,Ps=1/Dr,Jm=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Dr,Ps),new P(0,Dr,-Ps),new P(Ps,0,Dr),new P(-Ps,0,Dr),new P(Dr,Ps,0),new P(-Dr,Ps,0)],Kc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uu,du,fu),t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:jo,format:Wn,colorSpace:Ai,depthBuffer:!1},r=Zm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_w(s)),this._blurMaterial=vw(s,t,e)}return r}_compileMaterial(t){let e=new we(this._lodPlanes[0],t);this._renderer.compile(e,hu)}_sceneToCubeUV(t,e,i,r){let a=new rn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jm),h.toneMapping=ir,h.autoClear=!1;let f=new Ws({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),y=new we(new ei,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(jm),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;Rc(r,v*_,m>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===ks||t.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Rc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,hu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jm[(r-1)%Jm.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Or-1),x=s/y,p=isFinite(s)?1+Math.floor(h*x):Or;p>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Or}`);let m=[],v=0;for(let C=0;C<Or;++C){let V=C/x,M=Math.exp(-V*V/2);m.push(M),C===0?v+=M:C<p&&(v+=2*M)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;let E=this._sizeLods[r],R=3*E*(r>_-Ds?r-_+Ds:0),I=4*(this._cubeSize-E);Rc(e,R,I,3*E,2*E),c.setRenderTarget(e),c.render(u,hu)}};function _w(n){let t=[],e=[],i=[],r=n,s=n-Ds+1+$m.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Ds?c=$m[o-n+Ds-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,y=6,x=3,p=2,m=1,v=new Float32Array(x*y*f),_=new Float32Array(p*y*f),E=new Float32Array(m*y*f);for(let I=0;I<f;I++){let C=I%3*2/3-1,V=I>2?0:-1,M=[C,V,0,C+2/3,V,0,C+2/3,V+1,0,C,V,0,C+2/3,V+1,0,C,V+1,0];v.set(M,x*y*I),_.set(d,p*y*I);let T=[I,I,I,I,I,I];E.set(T,m*y*I)}let R=new an;R.setAttribute("position",new Ye(v,x)),R.setAttribute("uv",new Ye(_,p)),R.setAttribute("faceIndex",new Ye(E,m)),t.push(R),r>Ds&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zm(n,t,e){let i=new Ci(n,t,e);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function vw(n,t,e){let i=new Float32Array(Or),r=new P(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ad(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Km(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Qm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}function bw(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===vu||c===bu,h=c===ks||c===Vs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Kc(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new Kc(n));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Mw(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sw(n,t,e,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let x=d.morphAttributes[y];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let y in d)t.update(d[y],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let y in f){let x=f[y];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,y=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,E=v.length;_<E;_+=3){let R=v[_+0],I=v[_+1],C=v[_+2];d.push(R,I,I,C,C,R)}}else if(y!==void 0){let v=y.array;x=y.version;for(let _=0,E=v.length/3-1;_<E;_+=3){let R=_+0,I=_+1,C=_+2;d.push(R,I,I,C,C,R)}}else return;let p=new(Ng(d)?jc:$c)(d,1);p.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ww(n,t,e,i){let r=i.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,y){n.drawElements(s,y,a,f*c),e.update(y,s,1)}function u(f,y,x){if(x===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,y,a,f*c,x),e.update(y,s,x)}function d(f,y,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,y[m]);else{p.multiDrawElementsWEBGL(s,y,0,a,f,0,x);let m=0;for(let v=0;v<x;v++)m+=y[v];e.update(m,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ew(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Tw(n,t){return n[0]-t[0]}function Aw(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Cw(n,t,e){let i={},r=new Float32Array(8),s=new WeakMap,o=new Ne,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=f!==void 0?f.length:0,x=s.get(h);if(x===void 0||x.count!==y){let A=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",A)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],V=0;v===!0&&(V=1),_===!0&&(V=2),E===!0&&(V=3);let M=h.attributes.position.count*V,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*T*4*y),X=new qc(D,M,T,y);X.type=er,X.needsUpdate=!0;let $=V*4;for(let O=0;O<y;O++){let G=R[O],Y=I[O],q=C[O],W=M*T*4*O;for(let J=0;J<G.count;J++){let Z=J*$;v===!0&&(o.fromBufferAttribute(G,J),D[W+Z+0]=o.x,D[W+Z+1]=o.y,D[W+Z+2]=o.z,D[W+Z+3]=0),_===!0&&(o.fromBufferAttribute(Y,J),D[W+Z+4]=o.x,D[W+Z+5]=o.y,D[W+Z+6]=o.z,D[W+Z+7]=0),E===!0&&(o.fromBufferAttribute(q,J),D[W+Z+8]=o.x,D[W+Z+9]=o.y,D[W+Z+10]=o.z,D[W+Z+11]=q.itemSize===4?o.w:1)}}x={count:y,texture:X,size:new Wt(M,T)},s.set(h,x),h.addEventListener("dispose",A)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,y=i[h.id];if(y===void 0||y.length!==f){y=[];for(let _=0;_<f;_++)y[_]=[_,0];i[h.id]=y}for(let _=0;_<f;_++){let E=y[_];E[0]=_,E[1]=d[_]}y.sort(Aw);for(let _=0;_<8;_++)_<f&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Tw);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let E=a[_],R=E[0],I=E[1];R!==Number.MAX_SAFE_INTEGER&&I?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),p&&h.getAttribute("morphNormal"+_)!==p[R]&&h.setAttribute("morphNormal"+_,p[R]),r[_]=I,m+=I):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}let v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Rw(n,t,e,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Qc=class extends Xn{constructor(t,e,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:Br,h!==Br&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Br&&(i=tr),i===void 0&&h===Hs&&(i=Fr),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bg=new Xn,kg=new Qc(1,1);kg.compareFunction=Dg;var Vg=new qc,Hg=new Au,Gg=new Zc,tg=[],eg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function js(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cl(n,t){let e=eg[t];e===void 0&&(e=new Int32Array(t),eg[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Iw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function Pw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function Uw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function Dw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;rg.set(i),n.uniformMatrix2fv(this.addr,!1,rg),Ae(e,i)}}function Nw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),Ae(e,i)}}function Ow(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),Ae(e,i)}}function zw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function Bw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function kw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function Vw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function Gw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function Ww(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function Xw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?kg:Bg;e.setTexture2D(t||s,r)}function qw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Hg,r)}function Yw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Gg,r)}function $w(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Vg,r)}function jw(n){switch(n){case 5126:return Iw;case 35664:return Lw;case 35665:return Pw;case 35666:return Uw;case 35674:return Dw;case 35675:return Nw;case 35676:return Ow;case 5124:case 35670:return zw;case 35667:case 35671:return Fw;case 35668:case 35672:return Bw;case 35669:case 35673:return kw;case 5125:return Vw;case 36294:return Hw;case 36295:return Gw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return $w}}function Jw(n,t){n.uniform1fv(this.addr,t)}function Zw(n,t){let e=js(t,this.size,2);n.uniform2fv(this.addr,e)}function Kw(n,t){let e=js(t,this.size,3);n.uniform3fv(this.addr,e)}function Qw(n,t){let e=js(t,this.size,4);n.uniform4fv(this.addr,e)}function tE(n,t){let e=js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function eE(n,t){let e=js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function nE(n,t){let e=js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iE(n,t){n.uniform1iv(this.addr,t)}function rE(n,t){n.uniform2iv(this.addr,t)}function sE(n,t){n.uniform3iv(this.addr,t)}function oE(n,t){n.uniform4iv(this.addr,t)}function aE(n,t){n.uniform1uiv(this.addr,t)}function cE(n,t){n.uniform2uiv(this.addr,t)}function lE(n,t){n.uniform3uiv(this.addr,t)}function hE(n,t){n.uniform4uiv(this.addr,t)}function uE(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Bg,s[o])}function dE(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Hg,s[o])}function fE(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gg,s[o])}function pE(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Vg,s[o])}function mE(n){switch(n){case 5126:return Jw;case 35664:return Zw;case 35665:return Kw;case 35666:return Qw;case 35674:return tE;case 35675:return eE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return cE;case 36295:return lE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return pE}}var Iu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jw(e.type)}},Lu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mE(e.type)}},Pu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},pu=/(\w+)(\])?(\[|\.)?/g;function sg(n,t){n.seq.push(t),n.map[t.id]=t}function gE(n,t,e){let i=n.name,r=i.length;for(pu.lastIndex=0;;){let s=pu.exec(i),o=pu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){sg(e,l===void 0?new Iu(a,n,t):new Lu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Pu(a),sg(e,u)),e=u}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);gE(s,o,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function og(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xE=37297,yE=0;function _E(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function vE(n){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n),i;switch(t===e?i="":t===kc&&e===Bc?i="LinearDisplayP3ToLinearSRGB":t===Bc&&e===kc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case ol:return[i,"LinearTransferOETF"];case Be:case sd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ag(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+_E(n.getShaderSource(t),o)}else return r}function bE(n,t){let e=vE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ME(n,t){let e;switch(t){case Av:e="Linear";break;case Cv:e="Reinhard";break;case Rv:e="OptimizedCineon";break;case Iv:e="ACESFilmic";break;case Pv:e="AgX";break;case Lv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function SE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function wE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function EE(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function TE(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ns(n){return n!==""}function cg(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lg(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(n){return n.replace(AE,RE)}var CE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RE(n,t){let e=Ot[t];if(e===void 0){let i=CE.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uu(e)}var IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(n){return n.replace(IE,LE)}function LE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ug(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function PE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sg?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function UE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Vs:t="ENVMAP_TYPE_CUBE";break;case sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function NE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case id:t="ENVMAP_BLENDING_MULTIPLY";break;case Ev:t="ENVMAP_BLENDING_MIX";break;case Tv:t="ENVMAP_BLENDING_ADD";break}return t}function OE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function zE(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=PE(e),l=UE(e),h=DE(e),u=NE(e),d=OE(e),f=e.isWebGL2?"":SE(e),y=wE(e),x=EE(s),p=r.createProgram(),m,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),v.length>0&&(v+=`
`)):(m=[ug(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),v=[f,ug(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ir?"#define TONE_MAPPING":"",e.toneMapping!==ir?Ot.tonemapping_pars_fragment:"",e.toneMapping!==ir?ME("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,bE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Uu(o),o=cg(o,e),o=lg(o,e),a=Uu(a),a=cg(a,e),a=lg(a,e),o=hg(o),a=hg(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=_+m+o,R=_+v+a,I=og(r,r.VERTEX_SHADER,E),C=og(r,r.FRAGMENT_SHADER,R);r.attachShader(p,I),r.attachShader(p,C),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function V(X){if(n.debug.checkShaderErrors){let $=r.getProgramInfoLog(p).trim(),A=r.getShaderInfoLog(I).trim(),O=r.getShaderInfoLog(C).trim(),G=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,I,C);else{let q=ag(r,I,"vertex"),W=ag(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+W)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(A===""||O==="")&&(Y=!1);Y&&(X.diagnostics={runnable:G,programLog:$,vertexShader:{log:A,prefix:m},fragmentShader:{log:O,prefix:v}})}r.deleteShader(I),r.deleteShader(C),M=new Bs(r,p),T=TE(r,p)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let T;this.getAttributes=function(){return T===void 0&&V(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(p,xE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yE++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=C,this}var FE=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nu(t),e.set(t,i)),i}},Nu=class{constructor(t){this.id=FE++,this.code=t,this.usedTimes=0}};function BE(n,t,e,i,r,s,o){let a=new Ko,c=new Du,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,T,D,X,$){let A=X.fog,O=$.geometry,G=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),q=Y&&Y.mapping===sl?Y.image.height:null,W=y[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=J!==void 0?J.length:0,nt=0;O.morphAttributes.position!==void 0&&(nt=1),O.morphAttributes.normal!==void 0&&(nt=2),O.morphAttributes.color!==void 0&&(nt=3);let B,j,ot,tt;if(W){let Ze=ti[W];B=Ze.vertexShader,j=Ze.fragmentShader}else B=M.vertexShader,j=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),tt=c.getFragmentShaderID(M);let st=n.getRenderTarget(),at=$.isInstancedMesh===!0,ft=$.isBatchedMesh===!0,gt=!!M.map,vt=!!M.matcap,N=!!Y,le=!!M.aoMap,_t=!!M.lightMap,mt=!!M.bumpMap,rt=!!M.normalMap,ne=!!M.displacementMap,Lt=!!M.emissiveMap,w=!!M.metalnessMap,b=!!M.roughnessMap,z=M.anisotropy>0,et=M.clearcoat>0,Q=M.iridescence>0,it=M.sheen>0,bt=M.transmission>0,dt=z&&!!M.anisotropyMap,xt=et&&!!M.clearcoatMap,Tt=et&&!!M.clearcoatNormalMap,zt=et&&!!M.clearcoatRoughnessMap,K=Q&&!!M.iridescenceMap,Kt=Q&&!!M.iridescenceThicknessMap,Gt=it&&!!M.sheenColorMap,It=it&&!!M.sheenRoughnessMap,St=!!M.specularMap,yt=!!M.specularColorMap,Nt=!!M.specularIntensityMap,Jt=bt&&!!M.transmissionMap,ge=bt&&!!M.thicknessMap,kt=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,ht=!!M.alphaHash,ut=!!M.extensions,At=!!O.attributes.uv1,wt=!!O.attributes.uv2,ie=!!O.attributes.uv3,re=ir;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(re=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:j,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ft,instancing:at,instancingColor:at&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ai,map:gt,matcap:vt,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:q,aoMap:le,lightMap:_t,bumpMap:mt,normalMap:rt,displacementMap:d&&ne,emissiveMap:Lt,normalMapObjectSpace:rt&&M.normalMapType===Wv,normalMapTangentSpace:rt&&M.normalMapType===Ug,metalnessMap:w,roughnessMap:b,anisotropy:z,anisotropyMap:dt,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:It,specularMap:St,specularColorMap:yt,specularIntensityMap:Nt,transmission:bt,transmissionMap:Jt,thicknessMap:ge,gradientMap:kt,opaque:M.transparent===!1&&M.blending===Os,alphaMap:ct,alphaTest:L,alphaHash:ht,combine:M.combine,mapUv:gt&&x(M.map.channel),aoMapUv:le&&x(M.aoMap.channel),lightMapUv:_t&&x(M.lightMap.channel),bumpMapUv:mt&&x(M.bumpMap.channel),normalMapUv:rt&&x(M.normalMap.channel),displacementMapUv:ne&&x(M.displacementMap.channel),emissiveMapUv:Lt&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:dt&&x(M.anisotropyMap.channel),clearcoatMapUv:xt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(M.sheenRoughnessMap.channel),specularMapUv:St&&x(M.specularMap.channel),specularColorMapUv:yt&&x(M.specularColorMap.channel),specularIntensityMapUv:Nt&&x(M.specularIntensityMap.channel),transmissionMapUv:Jt&&x(M.transmissionMap.channel),thicknessMapUv:ge&&x(M.thicknessMap.channel),alphaMapUv:ct&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(rt||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:wt,vertexUv3s:ie,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(gt||ct),fog:!!A,useFog:M.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ut&&M.extensions.derivatives===!0,extensionFragDepth:ut&&M.extensions.fragDepth===!0,extensionDrawBuffers:ut&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(T,M),_(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){let T=y[M.type],D;if(T){let X=ti[T];D=Cb.clone(X.uniforms)}else D=M.uniforms;return D}function R(M,T){let D;for(let X=0,$=l.length;X<$;X++){let A=l[X];if(A.cacheKey===T){D=A,++D.usedTimes;break}}return D===void 0&&(D=new zE(n,T,M,s),l.push(D)),D}function I(M){if(--M.usedTimes===0){let T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:R,releaseProgram:I,releaseShaderCache:C,programs:l,dispose:V}}function kE(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function VE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function dg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fg(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,d,f,y,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:y,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,y,x,p){let m=o(u,d,f,y,x,p);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):e.push(m)}function c(u,d,f,y,x,p){let m=o(u,d,f,y,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||VE),i.length>1&&i.sort(d||dg),r.length>1&&r.sort(d||dg)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function HE(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new fg,n.set(i,[o])):r>=s.length?(o=new fg,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function GE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Rt};break;case"SpotLight":e={position:new P,direction:new P,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function WE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var XE=0;function qE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function YE(n,t){let e=new GE,i=WE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);let s=new P,o=new Ee,a=new Ee;function c(h,u){let d=0,f=0,y=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,p=0,m=0,v=0,_=0,E=0,R=0,I=0,C=0,V=0,M=0;h.sort(qE);let T=u===!0?Math.PI:1;for(let X=0,$=h.length;X<$;X++){let A=h[X],O=A.color,G=A.intensity,Y=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=O.r*G*T,f+=O.g*G*T,y+=O.b*G*T;else if(A.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(A.sh.coefficients[W],G);M++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*T),A.castShadow){let J=A.shadow,Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=A.shadow.matrix,E++}r.directional[x]=W,x++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(O).multiplyScalar(G*T),W.distance=Y,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,r.spot[m]=W;let J=A.shadow;if(A.map&&(r.spotLightMap[C]=A.map,C++,J.updateMatrices(A),A.castShadow&&V++),r.spotLightMatrix[m]=J.matrix,A.castShadow){let Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.spotShadow[m]=Z,r.spotShadowMap[m]=q,I++}m++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),r.rectArea[v]=W,v++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*T),W.distance=A.distance,W.decay=A.decay,A.castShadow){let J=A.shadow,Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=A.shadow.matrix,R++}r.point[p]=W,p++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(G*T),W.groundColor.copy(A.groundColor).multiplyScalar(G*T),r.hemi[_]=W,_++}}v>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=y;let D=r.hash;(D.directionalLength!==x||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==E||D.numPointShadows!==R||D.numSpotShadows!==I||D.numSpotMaps!==C||D.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=I+C-V,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=M,D.directionalLength=x,D.pointLength=p,D.spotLength=m,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=E,D.numPointShadows=R,D.numSpotShadows=I,D.numSpotMaps=C,D.numLightProbes=M,r.version=XE++)}function l(h,u){let d=0,f=0,y=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let E=h[v];if(E.isDirectionalLight){let R=r.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),d++}else if(E.isSpotLight){let R=r.spot[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),y++}else if(E.isRectAreaLight){let R=r.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(E.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let R=r.point[f];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let R=r.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:r}}function pg(n,t){let e=new YE(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function $E(n,t){let e=new WeakMap;function i(s,o=0){let a=e.get(s),c;return a===void 0?(c=new pg(n,t),e.set(s,[c])):o>=a.length?(c=new pg(n,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ou=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zu=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
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
}`;function ZE(n,t,e){let i=new Qo,r=new Wt,s=new Wt,o=new Ne,a=new Ou({depthPacking:Gv}),c=new zu,l={},h=e.maxTextureSize,u={[pn]:qe,[qe]:pn,[Hn]:Hn},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:jE,fragmentShader:JE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new an;y.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sg;let m=this.type;this.render=function(I,C,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let M=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(nr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let $=m!==wi&&this.type===wi,A=m===wi&&this.type!==wi;for(let O=0,G=I.length;O<G;O++){let Y=I[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let W=q.getFrameExtents();if(r.multiply(W),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,q.mapSize.y=s.y)),q.map===null||$===!0||A===!0){let Z=this.type!==wi?{minFilter:en,magFilter:en}:{};q.map!==null&&q.map.dispose(),q.map=new Ci(r.x,r.y,Z),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let J=q.getViewportCount();for(let Z=0;Z<J;Z++){let nt=q.getViewport(Z);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),X.viewport(o),q.updateMatrices(Y,Z),i=q.getFrustum(),E(C,V,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===wi&&v(q,V),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(M,T,D)};function v(I,C){let V=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ci(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(C,null,V,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(C,null,V,f,x,null)}function _(I,C,V,M){let T=null,D=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)T=D;else if(T=V.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=T.uuid,$=C.uuid,A=l[X];A===void 0&&(A={},l[X]=A);let O=A[$];O===void 0&&(O=T.clone(),A[$]=O,C.addEventListener("dispose",R)),T=O}if(T.visible=C.visible,T.wireframe=C.wireframe,M===wi?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let X=n.properties.get(T);X.light=V}return T}function E(I,C,V,M,T){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);let $=t.update(I),A=I.material;if(Array.isArray(A)){let O=$.groups;for(let G=0,Y=O.length;G<Y;G++){let q=O[G],W=A[q.materialIndex];if(W&&W.visible){let J=_(I,W,M,T);I.onBeforeShadow(n,I,C,V,$,J,q),n.renderBufferDirect(V,null,$,J,I,q),I.onAfterShadow(n,I,C,V,$,J,q)}}}else if(A.visible){let O=_(I,A,M,T);I.onBeforeShadow(n,I,C,V,$,O,null),n.renderBufferDirect(V,null,$,O,I,null),I.onAfterShadow(n,I,C,V,$,O,null)}}let X=I.children;for(let $=0,A=X.length;$<A;$++)E(X[$],C,V,M,T)}function R(I){I.target.removeEventListener("dispose",R);for(let V in l){let M=l[V],T=I.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function KE(n,t,e){let i=e.isWebGL2;function r(){let L=!1,ht=new Ne,ut=null,At=new Ne(0,0,0,0);return{setMask:function(wt){ut!==wt&&!L&&(n.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){L=wt},setClear:function(wt,ie,re,Le,Ze){Ze===!0&&(wt*=Le,ie*=Le,re*=Le),ht.set(wt,ie,re,Le),At.equals(ht)===!1&&(n.clearColor(wt,ie,re,Le),At.copy(ht))},reset:function(){L=!1,ut=null,At.set(-1,0,0,0)}}}function s(){let L=!1,ht=null,ut=null,At=null;return{setTest:function(wt){wt?ft(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(wt){ht!==wt&&!L&&(n.depthMask(wt),ht=wt)},setFunc:function(wt){if(ut!==wt){switch(wt){case yv:n.depthFunc(n.NEVER);break;case _v:n.depthFunc(n.ALWAYS);break;case vv:n.depthFunc(n.LESS);break;case Nc:n.depthFunc(n.LEQUAL);break;case bv:n.depthFunc(n.EQUAL);break;case Mv:n.depthFunc(n.GEQUAL);break;case Sv:n.depthFunc(n.GREATER);break;case wv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=wt}},setLocked:function(wt){L=wt},setClear:function(wt){At!==wt&&(n.clearDepth(wt),At=wt)},reset:function(){L=!1,ht=null,ut=null,At=null}}}function o(){let L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Le=null,Ze=null;return{setTest:function(se){L||(se?ft(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!L&&(n.stencilMask(se),ht=se)},setFunc:function(se,Ke,Qn){(ut!==se||At!==Ke||wt!==Qn)&&(n.stencilFunc(se,Ke,Qn),ut=se,At=Ke,wt=Qn)},setOp:function(se,Ke,Qn){(ie!==se||re!==Ke||Le!==Qn)&&(n.stencilOp(se,Ke,Qn),ie=se,re=Ke,Le=Qn)},setLocked:function(se){L=se},setClear:function(se){Ze!==se&&(n.clearStencil(se),Ze=se)},reset:function(){L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Le=null,Ze=null}}}let a=new r,c=new s,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},y=new WeakMap,x=[],p=null,m=!1,v=null,_=null,E=null,R=null,I=null,C=null,V=null,M=new Rt(0,0,0),T=0,D=!1,X=null,$=null,A=null,O=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let Z=null,nt={},B=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ot=new Ne().fromArray(B),tt=new Ne().fromArray(j);function st(L,ht,ut,At){let wt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<ut;re++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(ht+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return ie}let at={};at[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),c.setFunc(Nc),Lt(!1),w(Yp),ft(n.CULL_FACE),rt(nr);function ft(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function gt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function vt(L,ht){return f[L]!==ht?(n.bindFramebuffer(L,ht),f[L]=ht,i&&(L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ht),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function N(L,ht){let ut=x,At=!1;if(L)if(ut=y.get(ht),ut===void 0&&(ut=[],y.set(ht,ut)),L.isWebGLMultipleRenderTargets){let wt=L.texture;if(ut.length!==wt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,re=wt.length;ie<re;ie++)ut[ie]=n.COLOR_ATTACHMENT0+ie;ut.length=wt.length,At=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,At=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function le(L){return p!==L?(n.useProgram(L),p=L,!0):!1}let _t={[Nr]:n.FUNC_ADD,[iv]:n.FUNC_SUBTRACT,[rv]:n.FUNC_REVERSE_SUBTRACT};if(i)_t[Zp]=n.MIN,_t[Kp]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(_t[Zp]=L.MIN_EXT,_t[Kp]=L.MAX_EXT)}let mt={[sv]:n.ZERO,[ov]:n.ONE,[av]:n.SRC_COLOR,[yu]:n.SRC_ALPHA,[fv]:n.SRC_ALPHA_SATURATE,[uv]:n.DST_COLOR,[lv]:n.DST_ALPHA,[cv]:n.ONE_MINUS_SRC_COLOR,[_u]:n.ONE_MINUS_SRC_ALPHA,[dv]:n.ONE_MINUS_DST_COLOR,[hv]:n.ONE_MINUS_DST_ALPHA,[pv]:n.CONSTANT_COLOR,[mv]:n.ONE_MINUS_CONSTANT_COLOR,[gv]:n.CONSTANT_ALPHA,[xv]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,ht,ut,At,wt,ie,re,Le,Ze,se){if(L===nr){m===!0&&(gt(n.BLEND),m=!1);return}if(m===!1&&(ft(n.BLEND),m=!0),L!==nv){if(L!==v||se!==D){if((_!==Nr||I!==Nr)&&(n.blendEquation(n.FUNC_ADD),_=Nr,I=Nr),se)switch(L){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.ONE,n.ONE);break;case jp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $p:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,R=null,C=null,V=null,M.set(0,0,0),T=0,v=L,D=se}return}wt=wt||ht,ie=ie||ut,re=re||At,(ht!==_||wt!==I)&&(n.blendEquationSeparate(_t[ht],_t[wt]),_=ht,I=wt),(ut!==E||At!==R||ie!==C||re!==V)&&(n.blendFuncSeparate(mt[ut],mt[At],mt[ie],mt[re]),E=ut,R=At,C=ie,V=re),(Le.equals(M)===!1||Ze!==T)&&(n.blendColor(Le.r,Le.g,Le.b,Ze),M.copy(Le),T=Ze),v=L,D=!1}function ne(L,ht){L.side===Hn?gt(n.CULL_FACE):ft(n.CULL_FACE);let ut=L.side===qe;ht&&(ut=!ut),Lt(ut),L.blending===Os&&L.transparent===!1?rt(nr):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){X!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),X=L)}function w(L){L!==tv?(ft(n.CULL_FACE),L!==$&&(L===Yp?n.cullFace(n.BACK):L===ev?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),$=L}function b(L){L!==A&&(q&&n.lineWidth(L),A=L)}function z(L,ht,ut){L?(ft(n.POLYGON_OFFSET_FILL),(O!==ht||G!==ut)&&(n.polygonOffset(ht,ut),O=ht,G=ut)):gt(n.POLYGON_OFFSET_FILL)}function et(L){L?ft(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Q(L){L===void 0&&(L=n.TEXTURE0+Y-1),Z!==L&&(n.activeTexture(L),Z=L)}function it(L,ht,ut){ut===void 0&&(Z===null?ut=n.TEXTURE0+Y-1:ut=Z);let At=nt[ut];At===void 0&&(At={type:void 0,texture:void 0},nt[ut]=At),(At.type!==L||At.texture!==ht)&&(Z!==ut&&(n.activeTexture(ut),Z=ut),n.bindTexture(L,ht||at[L]),At.type=L,At.texture=ht)}function bt(){let L=nt[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Jt(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function ge(L,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let At=ut.get(L);At===void 0&&(At=n.getUniformBlockIndex(ht,L.name),ut.set(L,At))}function kt(L,ht){let At=u.get(ht).get(L);h.get(ht)!==At&&(n.uniformBlockBinding(ht,At,L.__bindingPointIndex),h.set(ht,At))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,nt={},f={},y=new WeakMap,x=[],p=null,m=!1,v=null,_=null,E=null,R=null,I=null,C=null,V=null,M=new Rt(0,0,0),T=0,D=!1,X=null,$=null,A=null,O=null,G=null,ot.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ft,disable:gt,bindFramebuffer:vt,drawBuffers:N,useProgram:le,setBlending:rt,setMaterial:ne,setFlipSided:Lt,setCullFace:w,setLineWidth:b,setPolygonOffset:z,setScissorTest:et,activeTexture:Q,bindTexture:it,unbindTexture:bt,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:St,texImage3D:yt,updateUBOMapping:ge,uniformBlockBinding:kt,texStorage2D:Gt,texStorage3D:It,texSubImage2D:Tt,texSubImage3D:zt,compressedTexSubImage2D:K,compressedTexSubImage3D:Kt,scissor:Nt,viewport:Jt,reset:ct}}function QE(n,t,e,i,r,s,o){let a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,b){return f?new OffscreenCanvas(w,b):Gc("canvas")}function x(w,b,z,et){let Q=1;if((w.width>et||w.height>et)&&(Q=et/Math.max(w.width,w.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let it=b?Hc:Math.floor,bt=it(Q*w.width),dt=it(Q*w.height);u===void 0&&(u=y(bt,dt));let xt=z?y(bt,dt):u;return xt.width=bt,xt.height=dt,xt.getContext("2d").drawImage(w,0,0,bt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+bt+"x"+dt+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Eu(w.width)&&Eu(w.height)}function m(w){return a?!1:w.wrapS!==Gn||w.wrapT!==Gn||w.minFilter!==en&&w.minFilter!==Pn}function v(w,b){return w.generateMipmaps&&b&&w.minFilter!==en&&w.minFilter!==Pn}function _(w){n.generateMipmap(w)}function E(w,b,z,et,Q=!1){if(a===!1)return b;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let it=b;if(b===n.RED&&(z===n.FLOAT&&(it=n.R32F),z===n.HALF_FLOAT&&(it=n.R16F),z===n.UNSIGNED_BYTE&&(it=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(it=n.R8UI),z===n.UNSIGNED_SHORT&&(it=n.R16UI),z===n.UNSIGNED_INT&&(it=n.R32UI),z===n.BYTE&&(it=n.R8I),z===n.SHORT&&(it=n.R16I),z===n.INT&&(it=n.R32I)),b===n.RG&&(z===n.FLOAT&&(it=n.RG32F),z===n.HALF_FLOAT&&(it=n.RG16F),z===n.UNSIGNED_BYTE&&(it=n.RG8)),b===n.RGBA){let bt=Q?Fc:Qt.getTransfer(et);z===n.FLOAT&&(it=n.RGBA32F),z===n.HALF_FLOAT&&(it=n.RGBA16F),z===n.UNSIGNED_BYTE&&(it=bt===ae?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(w,b,z){return v(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function I(w){return w===en||w===Qp||w===kh?n.NEAREST:n.LINEAR}function C(w){let b=w.target;b.removeEventListener("dispose",C),M(b),b.isVideoTexture&&h.delete(b)}function V(w){let b=w.target;b.removeEventListener("dispose",V),D(b)}function M(w){let b=i.get(w);if(b.__webglInit===void 0)return;let z=w.source,et=d.get(z);if(et){let Q=et[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(w),Object.keys(et).length===0&&d.delete(z)}i.remove(w)}function T(w){let b=i.get(w);n.deleteTexture(b.__webglTexture);let z=w.source,et=d.get(z);delete et[b.__cacheKey],o.memory.textures--}function D(w){let b=w.texture,z=i.get(w),et=i.get(b);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let it=0;it<z.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(z.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)n.deleteFramebuffer(z.__webglFramebuffer[Q]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,it=b.length;Q<it;Q++){let bt=i.get(b[Q]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(w)}let X=0;function $(){X=0}function A(){let w=X;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),X+=1,w}function O(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function G(w,b){let z=i.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(z,w,b);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function Y(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ot(z,w,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function q(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ot(z,w,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function W(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){tt(z,w,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}let J={[Mu]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[Su]:n.MIRRORED_REPEAT},Z={[en]:n.NEAREST,[Qp]:n.NEAREST_MIPMAP_NEAREST,[kh]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Uv]:n.LINEAR_MIPMAP_NEAREST,[$o]:n.LINEAR_MIPMAP_LINEAR},nt={[Xv]:n.NEVER,[Zv]:n.ALWAYS,[qv]:n.LESS,[Dg]:n.LEQUAL,[Yv]:n.EQUAL,[Jv]:n.GEQUAL,[$v]:n.GREATER,[jv]:n.NOTEQUAL};function B(w,b,z){if(z?(n.texParameteri(w,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,J[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Z[b.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==Gn||b.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,I(b.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==en&&b.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===en||b.minFilter!==kh&&b.minFilter!==$o||b.type===er&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===jo&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function j(w,b){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));let et=b.source,Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));let it=O(b);if(it!==w.__cacheKey){Q[it]===void 0&&(Q[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[it].usedTimes++;let bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&T(b)),w.__cacheKey=it,w.__webglTexture=Q[it].texture}return z}function ot(w,b,z){let et=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=n.TEXTURE_3D);let Q=j(w,b),it=b.source;e.bindTexture(et,w.__webglTexture,n.TEXTURE0+z);let bt=i.get(it);if(it.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);let dt=Qt.getPrimaries(Qt.workingColorSpace),xt=b.colorSpace===Un?null:Qt.getPrimaries(b.colorSpace),Tt=b.colorSpace===Un||dt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let zt=m(b)&&p(b.image)===!1,K=x(b.image,zt,!1,r.maxTextureSize);K=Lt(b,K);let Kt=p(K)||a,Gt=s.convert(b.format,b.colorSpace),It=s.convert(b.type),St=E(b.internalFormat,Gt,It,b.colorSpace,b.isVideoTexture);B(et,b,Kt);let yt,Nt=b.mipmaps,Jt=a&&b.isVideoTexture!==!0&&St!==Lg,ge=bt.__version===void 0||Q===!0,kt=R(b,K,Kt);if(b.isDepthTexture)St=n.DEPTH_COMPONENT,a?b.type===er?St=n.DEPTH_COMPONENT32F:b.type===tr?St=n.DEPTH_COMPONENT24:b.type===Fr?St=n.DEPTH24_STENCIL8:St=n.DEPTH_COMPONENT16:b.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Br&&St===n.DEPTH_COMPONENT&&b.type!==rd&&b.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=tr,It=s.convert(b.type)),b.format===Hs&&St===n.DEPTH_COMPONENT&&(St=n.DEPTH_STENCIL,b.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Fr,It=s.convert(b.type))),ge&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,St,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Gt,It,null));else if(b.isDataTexture)if(Nt.length>0&&Kt){Jt&&ge&&e.texStorage2D(n.TEXTURE_2D,kt,St,Nt[0].width,Nt[0].height);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,It,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Gt,It,yt.data);b.generateMipmaps=!1}else Jt?(ge&&e.texStorage2D(n.TEXTURE_2D,kt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Gt,It,K.data)):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Gt,It,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,St,Nt[0].width,Nt[0].height,K.depth);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],b.format!==Wn?Gt!==null?Jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Gt,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Gt,It,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,Gt,It,yt.data)}else{Jt&&ge&&e.texStorage2D(n.TEXTURE_2D,kt,St,Nt[0].width,Nt[0].height);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],b.format!==Wn?Gt!==null?Jt?e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Gt,It,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Gt,It,yt.data)}else if(b.isDataArrayTexture)Jt?(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,kt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Gt,It,K.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,K.width,K.height,K.depth,0,Gt,It,K.data);else if(b.isData3DTexture)Jt?(ge&&e.texStorage3D(n.TEXTURE_3D,kt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Gt,It,K.data)):e.texImage3D(n.TEXTURE_3D,0,St,K.width,K.height,K.depth,0,Gt,It,K.data);else if(b.isFramebufferTexture){if(ge)if(Jt)e.texStorage2D(n.TEXTURE_2D,kt,St,K.width,K.height);else{let ct=K.width,L=K.height;for(let ht=0;ht<kt;ht++)e.texImage2D(n.TEXTURE_2D,ht,St,ct,L,0,Gt,It,null),ct>>=1,L>>=1}}else if(Nt.length>0&&Kt){Jt&&ge&&e.texStorage2D(n.TEXTURE_2D,kt,St,Nt[0].width,Nt[0].height);for(let ct=0,L=Nt.length;ct<L;ct++)yt=Nt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Gt,It,yt):e.texImage2D(n.TEXTURE_2D,ct,St,Gt,It,yt);b.generateMipmaps=!1}else Jt?(ge&&e.texStorage2D(n.TEXTURE_2D,kt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Gt,It,K)):e.texImage2D(n.TEXTURE_2D,0,St,Gt,It,K);v(b,Kt)&&_(et),bt.__version=it.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function tt(w,b,z){if(b.image.length!==6)return;let et=j(w,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let it=i.get(Q);if(Q.version!==it.__version||et===!0){e.activeTexture(n.TEXTURE0+z);let bt=Qt.getPrimaries(Qt.workingColorSpace),dt=b.colorSpace===Un?null:Qt.getPrimaries(b.colorSpace),xt=b.colorSpace===Un||bt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,zt=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ct=0;ct<6;ct++)!Tt&&!zt?K[ct]=x(b.image[ct],!1,!0,r.maxCubemapSize):K[ct]=zt?b.image[ct].image:b.image[ct],K[ct]=Lt(b,K[ct]);let Kt=K[0],Gt=p(Kt)||a,It=s.convert(b.format,b.colorSpace),St=s.convert(b.type),yt=E(b.internalFormat,It,St,b.colorSpace),Nt=a&&b.isVideoTexture!==!0,Jt=it.__version===void 0||et===!0,ge=R(b,Kt,Gt);B(n.TEXTURE_CUBE_MAP,b,Gt);let kt;if(Tt){Nt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,yt,Kt.width,Kt.height);for(let ct=0;ct<6;ct++){kt=K[ct].mipmaps;for(let L=0;L<kt.length;L++){let ht=kt[L];b.format!==Wn?It!==null?Nt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,It,St,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,It,St,ht.data)}}}else{kt=b.mipmaps,Nt&&Jt&&(kt.length>0&&ge++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,yt,K[0].width,K[0].height));for(let ct=0;ct<6;ct++)if(zt){Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,K[ct].width,K[ct].height,It,St,K[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,K[ct].width,K[ct].height,0,It,St,K[ct].data);for(let L=0;L<kt.length;L++){let ut=kt[L].image[ct].image;Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,ut.width,ut.height,It,St,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,ut.width,ut.height,0,It,St,ut.data)}}else{Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,St,K[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,It,St,K[ct]);for(let L=0;L<kt.length;L++){let ht=kt[L];Nt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,It,St,ht.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,It,St,ht.image[ct])}}}v(b,Gt)&&_(n.TEXTURE_CUBE_MAP),it.__version=Q.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function st(w,b,z,et,Q,it){let bt=s.convert(z.format,z.colorSpace),dt=s.convert(z.type),xt=E(z.internalFormat,bt,dt,z.colorSpace);if(!i.get(b).__hasExternalTextures){let zt=Math.max(1,b.width>>it),K=Math.max(1,b.height>>it);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,it,xt,zt,K,b.depth,0,bt,dt,null):e.texImage2D(Q,it,xt,zt,K,0,bt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,i.get(z).__webglTexture,0,mt(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,i.get(z).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(w,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let et=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||rt(b)){let Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===er?et=n.DEPTH_COMPONENT32F:Q.type===tr&&(et=n.DEPTH_COMPONENT24));let it=mt(b);rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,et,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,et,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let et=mt(b);z&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let et=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<et.length;Q++){let it=et[Q],bt=s.convert(it.format,it.colorSpace),dt=s.convert(it.type),xt=E(it.internalFormat,bt,dt,it.colorSpace),Tt=mt(b);z&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,xt,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,xt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let et=i.get(b.depthTexture).__webglTexture,Q=mt(b);if(b.depthTexture.format===Br)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===Hs)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function gt(w){let b=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,w)}else if(z){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]=n.createRenderbuffer(),at(b.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),at(b.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,b,z){let et=i.get(w);b!==void 0&&st(et.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&gt(w)}function N(w){let b=w.texture,z=i.get(w),et=i.get(b);w.addEventListener("dispose",V),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=b.version,o.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,it=w.isWebGLMultipleRenderTargets===!0,bt=p(w)||a;if(Q){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)z.__webglFramebuffer[dt][xt]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(it)if(r.drawBuffers){let dt=w.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let zt=i.get(dt[xt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&rt(w)===!1){let dt=it?b:[b];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){let Tt=dt[xt];z.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);let zt=s.convert(Tt.format,Tt.colorSpace),K=s.convert(Tt.type),Kt=E(Tt.internalFormat,zt,K,Tt.colorSpace,w.isXRRenderTarget===!0),Gt=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Kt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),at(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),B(n.TEXTURE_CUBE_MAP,b,bt);for(let dt=0;dt<6;dt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(z.__webglFramebuffer[dt][xt],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else st(z.__webglFramebuffer[dt],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(b,bt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let dt=w.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let zt=dt[xt],K=i.get(zt);e.bindTexture(n.TEXTURE_2D,K.__webglTexture),B(n.TEXTURE_2D,zt,bt),st(z.__webglFramebuffer,w,zt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),v(zt,bt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,et.__webglTexture),B(dt,b,bt),a&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(z.__webglFramebuffer[xt],w,b,n.COLOR_ATTACHMENT0,dt,xt);else st(z.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,dt,0);v(b,bt)&&_(dt),e.unbindTexture()}w.depthBuffer&&gt(w)}function le(w){let b=p(w)||a,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,Q=z.length;et<Q;et++){let it=z[et];if(v(it,b)){let bt=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(it).__webglTexture;e.bindTexture(bt,dt),_(bt),e.unbindTexture()}}}function _t(w){if(a&&w.samples>0&&rt(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,et=w.height,Q=n.COLOR_BUFFER_BIT,it=[],bt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(w),xt=w.isWebGLMultipleRenderTargets===!0;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){it.push(n.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&it.push(bt);let zt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]),zt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),xt){let K=i.get(b[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,z,et,0,0,z,et,Q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]);let zt=i.get(b[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function mt(w){return Math.min(r.maxSamples,w.samples)}function rt(w){let b=i.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(w){let b=o.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function Lt(w,b){let z=w.colorSpace,et=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===wu||z!==Ai&&z!==Un&&(Qt.getTransfer(z)===ae?a===!1?t.has("EXT_sRGB")===!0&&et===Wn?(w.format=wu,w.minFilter=Pn,w.generateMipmaps=!1):b=Wc.sRGBToLinear(b):(et!==Wn||Q!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=A,this.resetTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=vt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=rt}function t1(n,t,e){let i=e.isWebGL2;function r(s,o=Un){let a,c=Qt.getTransfer(o);if(s===rr)return n.UNSIGNED_BYTE;if(s===Tg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ag)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Dv)return n.BYTE;if(s===Nv)return n.SHORT;if(s===rd)return n.UNSIGNED_SHORT;if(s===Eg)return n.INT;if(s===tr)return n.UNSIGNED_INT;if(s===er)return n.FLOAT;if(s===jo)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ov)return n.ALPHA;if(s===Wn)return n.RGBA;if(s===zv)return n.LUMINANCE;if(s===Fv)return n.LUMINANCE_ALPHA;if(s===Br)return n.DEPTH_COMPONENT;if(s===Hs)return n.DEPTH_STENCIL;if(s===wu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Bv)return n.RED;if(s===Cg)return n.RED_INTEGER;if(s===kv)return n.RG;if(s===Rg)return n.RG_INTEGER;if(s===Ig)return n.RGBA_INTEGER;if(s===Vh||s===Hh||s===Gh||s===Wh)if(c===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tm||s===em||s===nm||s===im)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===tm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===em)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lg)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rm||s===sm)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rm)return c===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===om||s===am||s===cm||s===lm||s===hm||s===um||s===dm||s===fm||s===pm||s===mm||s===gm||s===xm||s===ym||s===_m)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===om)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===am)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===um)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xm)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ym)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_m)return c===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xh||s===vm||s===bm)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Xh)return c===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vv||s===Mm||s===Sm||s===wm)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fr?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Fu=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ti=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},e1={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,y=.005;l.inputState.pinching&&d>f+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bu=class extends sr{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,y=null,x=e.getContextAttributes(),p=null,m=null,v=[],_=[],E=new Wt,R=null,I=new rn;I.layers.enable(1),I.viewport=new Ne;let C=new rn;C.layers.enable(2),C.viewport=new Ne;let V=[I,C],M=new Fu;M.layers.enable(1),M.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=v[B];return j===void 0&&(j=new Yo,v[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=v[B];return j===void 0&&(j=new Yo,v[B]=j),j.getGripSpace()},this.getHand=function(B){let j=v[B];return j===void 0&&(j=new Yo,v[B]=j),j.getHandSpace()};function X(B){let j=_.indexOf(B.inputSource);if(j===-1)return;let ot=v[j];ot!==void 0&&(ot.update(B.inputSource,B.frame,l||o),ot.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",A);for(let B=0;B<v.length;B++){let j=_[B];j!==null&&(_[B]=null,v[B].disconnect(j))}T=null,D=null,t.setRenderTarget(p),f=null,d=null,u=null,r=null,m=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",A),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Ci(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:rr,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,ot=null,tt=null;x.depth&&(tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=x.stencil?Hs:Br,ot=x.stencil?Fr:tr);let st={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(st),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Ci(d.textureWidth,d.textureHeight,{format:Wn,type:rr,depthTexture:new Qc(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let at=t.properties.get(m);at.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function A(B){for(let j=0;j<B.removed.length;j++){let ot=B.removed[j],tt=_.indexOf(ot);tt>=0&&(_[tt]=null,v[tt].disconnect(ot))}for(let j=0;j<B.added.length;j++){let ot=B.added[j],tt=_.indexOf(ot);if(tt===-1){for(let at=0;at<v.length;at++)if(at>=_.length){_.push(ot),tt=at;break}else if(_[at]===null){_[at]=ot,tt=at;break}if(tt===-1)break}let st=v[tt];st&&st.connect(ot)}}let O=new P,G=new P;function Y(B,j,ot){O.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ot.matrixWorld);let tt=O.distanceTo(G),st=j.projectionMatrix.elements,at=ot.projectionMatrix.elements,ft=st[14]/(st[10]-1),gt=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],N=(st[9]-1)/st[5],le=(st[8]-1)/st[0],_t=(at[8]+1)/at[0],mt=ft*le,rt=ft*_t,ne=tt/(-le+_t),Lt=ne*-le;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Lt),B.translateZ(ne),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let w=ft+ne,b=gt+ne,z=mt-Lt,et=rt+(tt-Lt),Q=vt*gt/b*w,it=N*gt/b*w;B.projectionMatrix.makePerspective(z,et,Q,it,w,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=C.near=I.near=B.near,M.far=C.far=I.far=B.far,(T!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,D=M.far);let j=B.parent,ot=M.cameras;q(M,j);for(let tt=0;tt<ot.length;tt++)q(ot[tt],j);ot.length===2?Y(M,I,C):M.projectionMatrix.copy(I.projectionMatrix),W(B,M,j)};function W(B,j,ot){ot===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ot.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Jo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let J=null;function Z(B,j){if(h=j.getViewerPose(l||o),y=j,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let tt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,tt=!0);for(let st=0;st<ot.length;st++){let at=ot[st],ft=null;if(f!==null)ft=f.getViewport(at);else{let vt=u.getViewSubImage(d,at);ft=vt.viewport,st===0&&(t.setRenderTargetTextures(m,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(m))}let gt=V[st];gt===void 0&&(gt=new rn,gt.layers.enable(st),gt.viewport=new Ne,V[st]=gt),gt.matrix.fromArray(at.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(at.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ft.x,ft.y,ft.width,ft.height),st===0&&(M.matrix.copy(gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),tt===!0&&M.cameras.push(gt)}}for(let ot=0;ot<v.length;ot++){let tt=_[ot],st=v[ot];tt!==null&&st!==void 0&&st.update(tt,j,l||o)}J&&J(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),y=null}let nt=new Fg;nt.setAnimationLoop(Z),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}};function n1(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,zg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,_,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),y(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i1(n,t,e,i){let r={},s={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let E=_.program;i.uniformBlockBinding(v,E)}function l(v,_){let E=r[v.id];E===void 0&&(y(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",p));let R=_.program;i.updateUBOMapping(v,R);let I=t.render.frame;s[v.id]!==I&&(d(v),s[v.id]=I)}function h(v){let _=u();v.__bindingPointIndex=_;let E=n.createBuffer(),R=v.__size,I=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=r[v.id],E=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let I=0,C=E.length;I<C;I++){let V=Array.isArray(E[I])?E[I]:[E[I]];for(let M=0,T=V.length;M<T;M++){let D=V[M];if(f(D,I,M,R)===!0){let X=D.__offset,$=Array.isArray(D.value)?D.value:[D.value],A=0;for(let O=0;O<$.length;O++){let G=$[O],Y=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,X+A,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,A),A+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,E,R){let I=v.value,C=_+"_"+E;if(R[C]===void 0)return typeof I=="number"||typeof I=="boolean"?R[C]=I:R[C]=I.clone(),!0;{let V=R[C];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return R[C]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function y(v){let _=v.uniforms,E=0,R=16;for(let C=0,V=_.length;C<V;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let T=0,D=M.length;T<D;T++){let X=M[T],$=Array.isArray(X.value)?X.value:[X.value];for(let A=0,O=$.length;A<O;A++){let G=$[A],Y=x(G),q=E%R;q!==0&&R-q<Y.boundary&&(E+=R-q),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=Y.storage}}}let I=E%R;return I>0&&(E+=R-I),v.__size=E,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(let v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var ta=class{constructor(t={}){let{canvas:e=db(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),y=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;let _=this,E=!1,R=0,I=0,C=null,V=-1,M=null,T=new Ne,D=new Ne,X=null,$=new Rt(0),A=0,O=e.width,G=e.height,Y=1,q=null,W=null,J=new Ne(0,0,O,G),Z=new Ne(0,0,O,G),nt=!1,B=new Qo,j=!1,ot=!1,tt=null,st=new Ee,at=new Wt,ft=new P,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return C===null?Y:1}let N=i;function le(S,U){for(let k=0;k<S.length;k++){let H=S[k],F=e.getContext(H,U);if(F!==null)return F}return null}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ed}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),N=le(U,S),N===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,mt,rt,ne,Lt,w,b,z,et,Q,it,bt,dt,xt,Tt,zt,K,Kt,Gt,It,St,yt,Nt,Jt;function ge(){_t=new Mw(N),mt=new gw(N,_t,t),_t.init(mt),yt=new t1(N,_t,mt),rt=new KE(N,_t,mt),ne=new Ew(N),Lt=new kE,w=new QE(N,_t,rt,Lt,mt,yt,ne),b=new yw(_),z=new bw(_),et=new Ub(N,mt),Nt=new pw(N,_t,et,mt),Q=new Sw(N,et,ne,Nt),it=new Rw(N,Q,et,ne),Gt=new Cw(N,mt,w),zt=new xw(Lt),bt=new BE(_,b,z,_t,mt,Nt,zt),dt=new n1(_,Lt),xt=new HE,Tt=new $E(_t,mt),Kt=new fw(_,b,z,rt,it,d,c),K=new ZE(_,it,mt),Jt=new i1(N,ne,mt,rt),It=new mw(N,_t,ne,mt),St=new ww(N,_t,ne,mt),ne.programs=bt.programs,_.capabilities=mt,_.extensions=_t,_.properties=Lt,_.renderLists=xt,_.shadowMap=K,_.state=rt,_.info=ne}ge();let kt=new Bu(_,N);this.xr=kt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(O,G,!1))},this.getSize=function(S){return S.set(O,G)},this.setSize=function(S,U,k=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,G=U,e.width=Math.floor(S*Y),e.height=Math.floor(U*Y),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(O*Y,G*Y).floor()},this.setDrawingBufferSize=function(S,U,k){O=S,G=U,Y=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,U,k,H){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,U,k,H),rt.viewport(T.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,U,k,H){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,U,k,H),rt.scissor(D.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){rt.setScissorTest(nt=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let H=0;if(S){let F=!1;if(C!==null){let pt=C.texture.format;F=pt===Ig||pt===Rg||pt===Cg}if(F){let pt=C.texture.type,Mt=pt===rr||pt===tr||pt===rd||pt===Fr||pt===Tg||pt===Ag,Et=Kt.getClearColor(),Ct=Kt.getClearAlpha(),Ft=Et.r,Pt=Et.g,Ut=Et.b;Mt?(f[0]=Ft,f[1]=Pt,f[2]=Ut,f[3]=Ct,N.clearBufferuiv(N.COLOR,0,f)):(y[0]=Ft,y[1]=Pt,y[2]=Ut,y[3]=Ct,N.clearBufferiv(N.COLOR,0,y))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),k&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),xt.dispose(),Tt.dispose(),Lt.dispose(),b.dispose(),z.dispose(),it.dispose(),Nt.dispose(),Jt.dispose(),bt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ze),kt.removeEventListener("sessionend",se),tt&&(tt.dispose(),tt=null),Ke.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=ne.autoReset,U=K.enabled,k=K.autoUpdate,H=K.needsUpdate,F=K.type;ge(),ne.autoReset=S,K.enabled=U,K.autoUpdate=k,K.needsUpdate=H,K.type=F}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){let U=S.target;U.removeEventListener("dispose",ut),At(U)}function At(S){wt(S),Lt.remove(S)}function wt(S){let U=Lt.get(S).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,H,F,pt){U===null&&(U=gt);let Mt=F.isMesh&&F.matrixWorld.determinant()<0,Et=J_(S,U,k,H,F);rt.setMaterial(H,Mt);let Ct=k.index,Ft=1;if(H.wireframe===!0){if(Ct=Q.getWireframeAttribute(k),Ct===void 0)return;Ft=2}let Pt=k.drawRange,Ut=k.attributes.position,_e=Pt.start*Ft,Sn=(Pt.start+Pt.count)*Ft;pt!==null&&(_e=Math.max(_e,pt.start*Ft),Sn=Math.min(Sn,(pt.start+pt.count)*Ft)),Ct!==null?(_e=Math.max(_e,0),Sn=Math.min(Sn,Ct.count)):Ut!=null&&(_e=Math.max(_e,0),Sn=Math.min(Sn,Ut.count));let Pe=Sn-_e;if(Pe<0||Pe===1/0)return;Nt.setup(F,H,Et,k,Ct);let yi,pe=It;if(Ct!==null&&(yi=et.get(Ct),pe=St,pe.setIndex(yi)),F.isMesh)H.wireframe===!0?(rt.setLineWidth(H.wireframeLinewidth*vt()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(F.isLine){let Vt=H.linewidth;Vt===void 0&&(Vt=1),rt.setLineWidth(Vt*vt()),F.isLineSegments?pe.setMode(N.LINES):F.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else F.isPoints?pe.setMode(N.POINTS):F.isSprite&&pe.setMode(N.TRIANGLES);if(F.isBatchedMesh)pe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)pe.renderInstances(_e,Pe,F.count);else if(k.isInstancedBufferGeometry){let Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Oh=Math.min(k.instanceCount,Vt);pe.renderInstances(_e,Pe,Oh)}else pe.render(_e,Pe)};function ie(S,U,k){S.transparent===!0&&S.side===Hn&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,ac(S,U,k),S.side=pn,S.needsUpdate=!0,ac(S,U,k),S.side=Hn):ac(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=Tt.get(k),p.init(),v.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(_._useLegacyLights);let H=new Set;return S.traverse(function(F){let pt=F.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let Et=pt[Mt];ie(Et,k,F),H.add(Et)}else ie(pt,k,F),H.add(pt)}),v.pop(),p=null,H},this.compileAsync=function(S,U,k=null){let H=this.compile(S,U,k);return new Promise(F=>{function pt(){if(H.forEach(function(Mt){Lt.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){F(S);return}setTimeout(pt,10)}_t.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function Le(S){re&&re(S)}function Ze(){Ke.stop()}function se(){Ke.start()}let Ke=new Fg;Ke.setAnimationLoop(Le),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(S){re=S,kt.setAnimationLoop(S),S===null?Ke.stop():Ke.start()},kt.addEventListener("sessionstart",Ze),kt.addEventListener("sessionend",se),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(U),U=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,C),p=Tt.get(S,v.length),p.init(),v.push(p),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(st),ot=this.localClippingEnabled,j=zt.init(this.clippingPlanes,ot),x=xt.get(S,m.length),x.init(),m.push(x),Qn(S,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,W),this.info.render.frame++,j===!0&&zt.beginShadows();let k=p.state.shadowsArray;if(K.render(k,S,U),j===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(x,S),p.setupLights(_._useLegacyLights),U.isArrayCamera){let H=U.cameras;for(let F=0,pt=H.length;F<pt;F++){let Mt=H[F];Vp(x,S,Mt,Mt.viewport)}}else Vp(x,S,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,U),Nt.resetDefaultState(),V=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Qn(S,U,k,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){H&&ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);let Mt=it.update(S),Et=S.material;Et.visible&&x.push(S,Mt,Et,k,ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){let Mt=it.update(S),Et=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ft.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ft.copy(Mt.boundingSphere.center)),ft.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(Et)){let Ct=Mt.groups;for(let Ft=0,Pt=Ct.length;Ft<Pt;Ft++){let Ut=Ct[Ft],_e=Et[Ut.materialIndex];_e&&_e.visible&&x.push(S,Mt,_e,k,ft.z,Ut)}}else Et.visible&&x.push(S,Mt,Et,k,ft.z,null)}}let pt=S.children;for(let Mt=0,Et=pt.length;Mt<Et;Mt++)Qn(pt[Mt],U,k,H)}function Vp(S,U,k,H){let F=S.opaque,pt=S.transmissive,Mt=S.transparent;p.setupLightsView(k),j===!0&&zt.setGlobalState(_.clippingPlanes,k),pt.length>0&&j_(F,pt,U,k),H&&rt.viewport(T.copy(H)),F.length>0&&oc(F,U,k),pt.length>0&&oc(pt,U,k),Mt.length>0&&oc(Mt,U,k),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function j_(S,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let pt=mt.isWebGL2;tt===null&&(tt=new Ci(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?jo:rr,minFilter:$o,samples:pt?4:0})),_.getDrawingBufferSize(at),pt?tt.setSize(at.x,at.y):tt.setSize(Hc(at.x),Hc(at.y));let Mt=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor($),A=_.getClearAlpha(),A<1&&_.setClearColor(16777215,.5),_.clear();let Et=_.toneMapping;_.toneMapping=ir,oc(S,k,H),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt);let Ct=!1;for(let Ft=0,Pt=U.length;Ft<Pt;Ft++){let Ut=U[Ft],_e=Ut.object,Sn=Ut.geometry,Pe=Ut.material,yi=Ut.group;if(Pe.side===Hn&&_e.layers.test(H.layers)){let pe=Pe.side;Pe.side=qe,Pe.needsUpdate=!0,Hp(_e,k,H,Sn,Pe,yi),Pe.side=pe,Pe.needsUpdate=!0,Ct=!0}}Ct===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt)),_.setRenderTarget(Mt),_.setClearColor($,A),_.toneMapping=Et}function oc(S,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,pt=S.length;F<pt;F++){let Mt=S[F],Et=Mt.object,Ct=Mt.geometry,Ft=H===null?Mt.material:H,Pt=Mt.group;Et.layers.test(k.layers)&&Hp(Et,U,k,Ct,Ft,Pt)}}function Hp(S,U,k,H,F,pt){S.onBeforeRender(_,U,k,H,F,pt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,U,k,H,S,pt),F.transparent===!0&&F.side===Hn&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,S,pt),F.side=pn,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,S,pt),F.side=Hn):_.renderBufferDirect(k,U,H,F,S,pt),S.onAfterRender(_,U,k,H,F,pt)}function ac(S,U,k){U.isScene!==!0&&(U=gt);let H=Lt.get(S),F=p.state.lights,pt=p.state.shadowsArray,Mt=F.state.version,Et=bt.getParameters(S,F.state,pt,U,k),Ct=bt.getProgramCacheKey(Et),Ft=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?z:b).get(S.envMap||H.environment),Ft===void 0&&(S.addEventListener("dispose",ut),Ft=new Map,H.programs=Ft);let Pt=Ft.get(Ct);if(Pt!==void 0){if(H.currentProgram===Pt&&H.lightsStateVersion===Mt)return Wp(S,Et),Pt}else Et.uniforms=bt.getUniforms(S),S.onBuild(k,Et,_),S.onBeforeCompile(Et,_),Pt=bt.acquireProgram(Et,Ct),Ft.set(Ct,Pt),H.uniforms=Et.uniforms;let Ut=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=zt.uniform),Wp(S,Et),H.needsLights=K_(S),H.lightsStateVersion=Mt,H.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Pt,H.uniformsList=null,Pt}function Gp(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Bs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Wp(S,U){let k=Lt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function J_(S,U,k,H,F){U.isScene!==!0&&(U=gt),w.resetTextureUnits();let pt=U.fog,Mt=H.isMeshStandardMaterial?U.environment:null,Et=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,Ct=(H.isMeshStandardMaterial?z:b).get(H.envMap||Mt),Ft=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!k.morphAttributes.position,_e=!!k.morphAttributes.normal,Sn=!!k.morphAttributes.color,Pe=ir;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let yi=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=yi!==void 0?yi.length:0,Vt=Lt.get(H),Oh=p.state.lights;if(j===!0&&(ot===!0||S!==M)){let In=S===M&&H.id===V;zt.setState(H,S,In)}let xe=!1;H.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Oh.state.version||Vt.outputColorSpace!==Et||F.isBatchedMesh&&Vt.batching===!1||!F.isBatchedMesh&&Vt.batching===!0||F.isInstancedMesh&&Vt.instancing===!1||!F.isInstancedMesh&&Vt.instancing===!0||F.isSkinnedMesh&&Vt.skinning===!1||!F.isSkinnedMesh&&Vt.skinning===!0||F.isInstancedMesh&&Vt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Vt.instancingColor===!1&&F.instanceColor!==null||Vt.envMap!==Ct||H.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==zt.numPlanes||Vt.numIntersection!==zt.numIntersection)||Vt.vertexAlphas!==Ft||Vt.vertexTangents!==Pt||Vt.morphTargets!==Ut||Vt.morphNormals!==_e||Vt.morphColors!==Sn||Vt.toneMapping!==Pe||mt.isWebGL2===!0&&Vt.morphTargetsCount!==pe)&&(xe=!0):(xe=!0,Vt.__version=H.version);let Cr=Vt.currentProgram;xe===!0&&(Cr=ac(H,U,F));let Xp=!1,ko=!1,zh=!1,Ge=Cr.getUniforms(),Rr=Vt.uniforms;if(rt.useProgram(Cr.program)&&(Xp=!0,ko=!0,zh=!0),H.id!==V&&(V=H.id,ko=!0),Xp||M!==S){Ge.setValue(N,"projectionMatrix",S.projectionMatrix),Ge.setValue(N,"viewMatrix",S.matrixWorldInverse);let In=Ge.map.cameraPosition;In!==void 0&&In.setValue(N,ft.setFromMatrixPosition(S.matrixWorld)),mt.logarithmicDepthBuffer&&Ge.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ge.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ko=!0,zh=!0)}if(F.isSkinnedMesh){Ge.setOptional(N,F,"bindMatrix"),Ge.setOptional(N,F,"bindMatrixInverse");let In=F.skeleton;In&&(mt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Ge.setValue(N,"boneTexture",In.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Ge.setOptional(N,F,"batchingTexture"),Ge.setValue(N,"batchingTexture",F._matricesTexture,w));let Fh=k.morphAttributes;if((Fh.position!==void 0||Fh.normal!==void 0||Fh.color!==void 0&&mt.isWebGL2===!0)&&Gt.update(F,k,Cr),(ko||Vt.receiveShadow!==F.receiveShadow)&&(Vt.receiveShadow=F.receiveShadow,Ge.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Rr.envMap.value=Ct,Rr.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ko&&(Ge.setValue(N,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&Z_(Rr,zh),pt&&H.fog===!0&&dt.refreshFogUniforms(Rr,pt),dt.refreshMaterialUniforms(Rr,H,Y,G,tt),Bs.upload(N,Gp(Vt),Rr,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bs.upload(N,Gp(Vt),Rr,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ge.setValue(N,"center",F.center),Ge.setValue(N,"modelViewMatrix",F.modelViewMatrix),Ge.setValue(N,"normalMatrix",F.normalMatrix),Ge.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let In=H.uniformsGroups;for(let Bh=0,Q_=In.length;Bh<Q_;Bh++)if(mt.isWebGL2){let qp=In[Bh];Jt.update(qp,Cr),Jt.bind(qp,Cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cr}function Z_(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function K_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,k){Lt.get(S.texture).__webglTexture=U,Lt.get(S.depthTexture).__webglTexture=k;let H=Lt.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){let k=Lt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){C=S,R=U,I=k;let H=!0,F=null,pt=!1,Mt=!1;if(S){let Ct=Lt.get(S);Ct.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Ct.__webglFramebuffer===void 0?w.setupRenderTarget(S):Ct.__hasExternalTextures&&w.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);let Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);let Pt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?F=Pt[U][k]:F=Pt[U],pt=!0):mt.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?F=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[k]:F=Pt,T.copy(S.viewport),D.copy(S.scissor),X=S.scissorTest}else T.copy(J).multiplyScalar(Y).floor(),D.copy(Z).multiplyScalar(Y).floor(),X=nt;if(rt.bindFramebuffer(N.FRAMEBUFFER,F)&&mt.drawBuffers&&H&&rt.drawBuffers(S,F),rt.viewport(T),rt.scissor(D),rt.setScissorTest(X),pt){let Ct=Lt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,k)}else if(Mt){let Ct=Lt.get(S.texture),Ft=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,k||0,Ft)}V=-1},this.readRenderTargetPixels=function(S,U,k,H,F,pt,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){rt.bindFramebuffer(N.FRAMEBUFFER,Et);try{let Ct=S.texture,Ft=Ct.format,Pt=Ct.type;if(Ft!==Wn&&yt.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Pt===jo&&(_t.has("EXT_color_buffer_half_float")||mt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Pt!==rr&&yt.convert(Pt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===er&&(mt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&k>=0&&k<=S.height-F&&N.readPixels(U,k,H,F,yt.convert(Ft),yt.convert(Pt),pt)}finally{let Ct=C!==null?Lt.get(C).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(S,U,k=0){let H=Math.pow(2,-k),F=Math.floor(U.image.width*H),pt=Math.floor(U.image.height*H);w.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,S.x,S.y,F,pt),rt.unbindTexture()},this.copyTextureToTexture=function(S,U,k,H=0){let F=U.image.width,pt=U.image.height,Mt=yt.convert(k.format),Et=yt.convert(k.type);w.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,F,pt,Mt,Et,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,Mt,Et,U.image),H===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k,H,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,Et=S.max.z-S.min.z+1,Ct=yt.convert(H.format),Ft=yt.convert(H.type),Pt;if(H.isData3DTexture)w.setTexture3D(H,0),Pt=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),Pt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Ut=N.getParameter(N.UNPACK_ROW_LENGTH),_e=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Pe=N.getParameter(N.UNPACK_SKIP_ROWS),yi=N.getParameter(N.UNPACK_SKIP_IMAGES),pe=k.isCompressedTexture?k.mipmaps[F]:k.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Pt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,Ft,pe.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,pe.data)):N.texSubImage3D(Pt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,Ft,pe),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yi),F===0&&H.generateMipmaps&&N.generateMipmap(Pt),rt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){R=0,I=0,C=null,rt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===sd?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ol?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?kr:Pg}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===kr?Be:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ku=class extends ta{};ku.prototype.isWebGL1Renderer=!0;var tl=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Li=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},mg=new P,gg=new P,xg=new Ee,mu=new Zo,Ic=new Gs,Vu=class extends on{constructor(t=new an,e=new Li){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)mg.fromBufferAttribute(e,r-1),gg.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=mg.distanceTo(gg);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ic.copy(i.boundingSphere),Ic.applyMatrix4(r),Ic.radius+=s,t.ray.intersectsSphere(Ic)===!1)return;xg.copy(r).invert(),mu.copy(t.ray).applyMatrix4(xg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,y=i.index,p=i.attributes.position;if(y!==null){let m=Math.max(0,o.start),v=Math.min(y.count,o.start+o.count);for(let _=m,E=v-1;_<E;_+=f){let R=y.getX(_),I=y.getX(_+1);if(l.fromBufferAttribute(p,R),h.fromBufferAttribute(p,I),mu.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let V=t.ray.origin.distanceTo(d);V<t.near||V>t.far||e.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=m,E=v-1;_<E;_+=f){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),mu.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},yg=new P,_g=new P,cr=class extends Vu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)yg.fromBufferAttribute(e,r),_g.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+yg.distanceTo(_g);t.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Lc=new P,Pc=new P,gu=new P,Uc=new zr,Vr=class extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(zs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let y=0;y<c;y+=3){o?(l[0]=o.getX(y),l[1]=o.getX(y+1),l[2]=o.getX(y+2)):(l[0]=y,l[1]=y+1,l[2]=y+2);let{a:x,b:p,c:m}=Uc;if(x.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Uc.getNormal(gu),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let _=(v+1)%3,E=u[v],R=u[_],I=Uc[h[v]],C=Uc[h[_]],V=`${E}_${R}`,M=`${R}_${E}`;M in d&&d[M]?(gu.dot(d[M].normal)<=s&&(f.push(I.x,I.y,I.z),f.push(C.x,C.y,C.z)),d[M]=null):V in d||(d[V]={index0:l[v],index1:l[_],normal:gu.clone()})}}for(let y in d)if(d[y]){let{index0:x,index1:p}=d[y];Lc.fromBufferAttribute(a,x),Pc.fromBufferAttribute(a,p),f.push(Lc.x,Lc.y,Lc.z),f.push(Pc.x,Pc.y,Pc.z)}this.setAttribute("position",new sn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var el=class extends Ii{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Rt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var lr=class extends Ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Dc(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function r1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ys=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let o;n:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Em,endingEnd:Em}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tm:s=t,a=2*e-i;break;case Am:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Tm:o=t,c=2*i-e;break;case Am:o=1,c=i+r[1]-r[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,y=(i-e)/(r-e),x=y*y,p=x*y,m=-d*p+2*d*x-d*y,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*y+1,_=(-1-f)*p+(1.5+f)*x+.5*y,E=f*p-f*x;for(let R=0;R!==a;++R)s[R]=m*o[h+R]+v*o[l+R]+_*o[c+R]+E*o[u+R];return s}},Gu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Wu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Yn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dc(e,this.TimeBufferType),this.values=Dc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Dc(t.times,Array),values:Dc(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Wu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Oc:e=this.InterpolantFactoryMethodDiscrete;break;case zc:e=this.InterpolantFactoryMethodLinear;break;case qh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oc;case this.InterpolantFactoryMethodLinear:return zc;case this.InterpolantFactoryMethodSmooth:return qh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&r1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qh,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let y=0;y!==i;++y){let x=e[u+y];if(x!==e[d+y]||x!==e[f+y]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=zc;var Hr=class extends Yn{};Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Oc;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xu=class extends Yn{};Xu.prototype.ValueTypeName="color";var qu=class extends Yn{};qu.prototype.ValueTypeName="number";var Yu=class extends Ys{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)or.slerpFlat(s,0,o,l-a,o,l,c);return s}},ea=class extends Yn{InterpolantFactoryMethodLinear(t){return new Yu(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.DefaultInterpolation=zc;ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends Yn{};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Oc;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var $u=class extends Yn{};$u.prototype.ValueTypeName="vector";var ju=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],y=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return y}return null}}},s1=new ju,Ju=class{constructor(t){this.manager=t!==void 0?t:s1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ju.DEFAULT_MATERIAL_NAME="__DEFAULT";var nl=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var xu=new Ee,vg=new P,bg=new P,Zu=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qo,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;vg.setFromMatrixPosition(t.matrixWorld),e.position.copy(vg),bg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bg),e.updateMatrixWorld(),xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ku=class extends Zu{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Ku}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},il=class extends nl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cd="\\[\\]\\.:\\/",o1=new RegExp("["+cd+"]","g"),ld="[^"+cd+"]",a1="[^"+cd.replace("\\.","")+"]",c1=/((?:WC+[\/:])*)/.source.replace("WC",ld),l1=/(WCOD+)?/.source.replace("WCOD",a1),h1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ld),u1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ld),d1=new RegExp("^"+c1+l1+h1+u1+"$"),f1=["material","materials","bones","map"],Qu=class{constructor(t,e,i){let r=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o1,"")}static parseTrackName(t){let e=d1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);f1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Qu;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QR=new Float32Array(1);var rl=class{constructor(t,e,i=0,r=1/0){this.ray=new Zo(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return td(t,this,i,e),i.sort(Mg),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)td(t[r],this,i,e);return i.sort(Mg),i}};function Mg(n,t){return n.distance-t.distance}function td(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)td(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);var $e=document.getElementById("c"),ye={w:1,h:1,x:0,y:0},ve=new ta({canvas:$e,antialias:!0});ve.setPixelRatio(Math.min(devicePixelRatio,2));ve.shadowMap.enabled=!0;ve.shadowMap.type=nd;ve.localClippingEnabled=!0;var ce=new tl;ce.background=new Rt("#7aa0c4");var p1=Math.atan(1/Math.SQRT2),Dt={azim:Math.PI/4,elev:p1,zoom:80,target:new P(30,15,23)},jt={azim:Dt.azim,elev:Dt.elev,zoom:Dt.zoom,target:Dt.target.clone()},Xg=900,ll=2e3,Xt=new ar(-1,1,1,-1,.1,4e3),qg={uGround:{value:1}},hd=new we(new qs(2,2),new qn({uniforms:qg,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));hd.frustumCulled=!1;hd.renderOrder=-1e9;ce.add(hd);function Yg(){qg.uGround.value=Math.max(0,Math.min(1,(Dt.elev+.05)/.1))}ce.add(new il(16777215,.62));var Tn=new na(16777215,.78);Tn.castShadow=!0;Tn.shadow.mapSize.set(4096,4096);Tn.shadow.normalBias=.15;Tn.shadow.bias=-2e-4;ce.add(Tn);ce.add(Tn.target);var $g=new na(16777215,.16);$g.position.set(-6,5,-7);ce.add($g);var ia={tail:0},mn=()=>{ia.tail=30},ud=new P,hl=new P,Wg=new Map;function Js(n){let t=Wg.get(n);return t||(t=new Rt().setHex(n),Wg.set(n,t)),t}var dd=new lr({vertexColors:!0,side:pn}),fd=new lr({vertexColors:!0,transparent:!0,opacity:.55,side:pn,depthWrite:!1});fd.shadowSide=Hn;var jg=new Ws({colorWrite:!1,side:pn}),Pi=new we(new qs(8e3,8e3),new el({opacity:.32}));Pi.rotation.x=-Math.PI/2;Pi.position.y=-.1;Pi.receiveShadow=!0;Pi.renderOrder=-1;ce.add(Pi);var Dn=new Ti;ce.add(Dn);var $n=new Ti;ce.add($n);var cn=new cr(new Vr(new ei(1,1,1)),new Li({color:10994876,depthTest:!1}));cn.visible=!1;cn.renderOrder=999;ce.add(cn);var Ui=new cr(new an,new Li({vertexColors:!0,transparent:!0,depthTest:!1}));Ui.renderOrder=998;Ui.visible=!1;ce.add(Ui);var gn=new rl,ni=new Wt,ur=new P,ra=new P;var Wr=(n,t,e)=>n+65536+(t+65536)*131072+(e+65536)*131072*131072,ii=(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z});function ee(n,t){let{x:e,y:i,z:r}=n;switch(t&3){case 1:return{x:-r,y:i,z:e};case 2:return{x:-e,y:i,z:-r};case 3:return{x:r,y:i,z:-e};default:return{x:e,y:i,z:r}}}var Di=(n,t)=>({rot:n.rot+t.rot&3,off:ii(ee(t.off,n.rot),n.off)}),pd=n=>{let t=4-(n.rot&3)&3,e=ee(n.off,t);return{rot:t,off:{x:-e.x,y:-e.y,z:-e.z}}},Zs=n=>n.slice(1).reduce((t,e)=>Di(t,{off:e.pos,rot:e.rot}),{off:{x:0,y:0,z:0},rot:0}),Ni=n=>"#"+(n&16777215).toString(16).padStart(6,"0"),dr=n=>n<0?-Math.round(-n):Math.round(n),g1=Math.floor(Math.random()*4294967296).toString(36),md=1,Ks=()=>`n${md++}.${g1}`,ul=()=>md,dl=n=>{md=n};var ue=(n,t,e,i,r,s,o)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s,c:o}),sa=(n,t,e,i)=>t>=n.x0&&t<n.x1&&e>=n.y0&&e<n.y1&&i>=n.z0&&i<n.z1,oa=(n,t,e,i)=>({x0:n.x0+t,y0:n.y0+e,z0:n.z0+i,x1:n.x1+t,y1:n.y1+e,z1:n.z1+i,c:n.c});function x1(n,t,e){let i=Math.max(n.x0,t.x0),r=Math.max(n.y0,t.y0),s=Math.max(n.z0,t.z0),o=Math.min(n.x1,t.x1),a=Math.min(n.y1,t.y1),c=Math.min(n.z1,t.z1);if(i>=o||r>=a||s>=c){e.push(n);return}let l=n.c;n.x0<i&&e.push({...n,x1:i}),o<n.x1&&e.push({...n,x0:o}),n.y0<r&&e.push({x0:i,y0:n.y0,z0:n.z0,x1:o,y1:r,z1:n.z1,c:l}),a<n.y1&&e.push({x0:i,y0:a,z0:n.z0,x1:o,y1:n.y1,z1:n.z1,c:l}),n.z0<s&&e.push({x0:i,y0:r,z0:n.z0,x1:o,y1:a,z1:s,c:l}),c<n.z1&&e.push({x0:i,y0:r,z0:c,x1:o,y1:a,z1:n.z1,c:l})}function Xr(n,t){let e=[];for(let i of n)x1(i,t,e);return e}function y1(n,t){for(let e=0;e<n.length;){let i=n[e];if(i.c!==t.c){e++;continue}let r=i.y0===t.y0&&i.y1===t.y1,s=i.z0===t.z0&&i.z1===t.z1,o=i.x0===t.x0&&i.x1===t.x1;if(r&&s&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(o&&s&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(o&&r&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{e++;continue}n.splice(e,1),e=0}n.push(t)}function gd(n,t,e){let i=Xr(n,t);return y1(i,{...t,c:e}),i}function Jg(n,t,e,i,r){let s=-1;for(let h=0;h<n.length;h++)if(sa(n[h],t,e,i)){s=h;break}if(s===-1)return null;let o=n[s].c;if(o===r)return null;let a=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,f=h.y0<u.y1&&u.y0<h.y1,y=h.z0<u.z1&&u.z0<h.z1;return f&&y&&(h.x1===u.x0||u.x1===h.x0)||d&&y&&(h.y1===u.y0||u.y1===h.y0)||d&&f&&(h.z1===u.z0||u.z1===h.z0)},c=new Set([s]),l=[s];for(;l.length;){let h=n[l.pop()];for(let u=0;u<n.length;u++)!c.has(u)&&n[u].c===o&&a(h,n[u])&&(c.add(u),l.push(u))}return n.map((h,u)=>c.has(u)?{...h,c:r}:h)}function xd(n,t){let e=[];for(let i of n){let r=Math.max(i.x0,t.x0),s=Math.max(i.y0,t.y0),o=Math.max(i.z0,t.z0),a=Math.min(i.x1,t.x1),c=Math.min(i.y1,t.y1),l=Math.min(i.z1,t.z1);r<a&&s<c&&o<l&&e.push({x0:r,y0:s,z0:o,x1:a,y1:c,z1:l,c:i.c})}return e}function Zg(n,t){for(let e of n){let i=(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0);t.set(e.c,(t.get(e.c)||0)+i)}}function hn(n,t){for(let e of n)e.x0<t.min.x&&(t.min.x=e.x0),e.y0<t.min.y&&(t.min.y=e.y0),e.z0<t.min.z&&(t.min.z=e.z0),e.x1>t.max.x&&(t.max.x=e.x1),e.y1>t.max.y&&(t.max.y=e.y1),e.z1>t.max.z&&(t.max.z=e.z1)}function ri(n,t,e){let i=ee({x:n.x0,y:n.y0,z:n.z0},t),r=ee({x:n.x1-1,y:n.y1-1,z:n.z1-1},t);return{x0:Math.min(i.x,r.x)+e.x,y0:Math.min(i.y,r.y)+e.y,z0:Math.min(i.z,r.z)+e.z,x1:Math.max(i.x,r.x)+e.x+1,y1:Math.max(i.y,r.y)+e.y+1,z1:Math.max(i.z,r.z)+e.z+1,c:n.c}}var _1=16,ln=n=>Math.floor(n/_1);function Kg(n){if(!n.length)return()=>!1;let t=1/0,e=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let x of n)x.x0<t&&(t=x.x0),x.y0<e&&(e=x.y0),x.z0<i&&(i=x.z0),x.x1>r&&(r=x.x1),x.y1>s&&(s=x.y1),x.z1>o&&(o=x.z1);let a=ln(t),c=ln(e),l=ln(i),h=ln(r-1)-a+1,u=ln(s-1)-c+1,d=ln(o-1)-l+1,f=Array.from({length:h*u*d},()=>[]),y=(x,p,m)=>((x-a)*u+(p-c))*d+(m-l);for(let x of n)for(let p=ln(x.x0);p<=ln(x.x1-1);p++)for(let m=ln(x.y0);m<=ln(x.y1-1);m++)for(let v=ln(x.z0);v<=ln(x.z1-1);v++)f[y(p,m,v)].push(x);return(x,p,m)=>{let v=ln(x),_=ln(p),E=ln(m);if(v<a||_<c||E<l||v-a>=h||_-c>=u||E-l>=d)return!1;for(let R of f[y(v,_,E)])if(sa(R,x,p,m))return!0;return!1}}var Qg=(n,t,e,i)=>n.some(r=>sa(r,t,e,i));function aa(n,t,e,i,r){if(!n.length||!t.length)return!1;let s={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};hn(n,s);let o=s.min.x+e,a=s.min.y+i,c=s.min.z+r,l=s.max.x+e,h=s.max.y+i,u=s.max.z+r;for(let d of t)if(o<d.x1&&d.x0<l&&a<d.y1&&d.y0<h&&c<d.z1&&d.z0<u&&n.some(f=>f.x0+e<d.x1&&d.x0<f.x1+e&&f.y0+i<d.y1&&d.y0<f.y1+i&&f.z0+r<d.z1&&d.z0<f.z1+r))return!0;return!1}var v1=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],nx=3,ca=2,fr=nx*ca,tx=.5,la=class{a=new Float32Array(4096);n=0;push3(t,e,i){if(this.n+3>this.a.length){let r=new Float32Array(this.a.length*2);r.set(this.a),this.a=r}this.a[this.n++]=t,this.a[this.n++]=e,this.a[this.n++]=i}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}};function ex(n,t,e,i,r,s){let o=2*ca+1;for(let a=0;a<e;a++){let c=a*r,l=0;for(let h=0;h<=ca&&h<i;h++)l+=n[c+h*s];for(let h=0;h<i;h++){t[c+h*s]=l/o;let u=h+ca+1,d=h-ca;u<i&&(l+=n[c+u*s]),d>=0&&(l-=n[c+d*s])}}}function fl(n,t,e){let i=new la,r=new la,s=new la,o=n.map(v=>[v.x0,v.y0,v.z0]),a=n.map(v=>[v.x1,v.y1,v.z1]),c=[0,1,2].map(()=>new Map),l=[0,1,2].map(()=>new Map),h=(v,_,E)=>{let R=v.get(_);R?R.push(E):v.set(_,[E])};for(let v=0;v<n.length;v++)for(let _=0;_<3;_++)h(c[_],o[v][_],v),h(l[_],a[v][_],v);let u=[],d=16,f=v=>Math.floor(v/d),y=[],x=[0,0,0],p=[0,0,0];if(e&&n.length){let v=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let E=0;E<n.length;E++)for(let R=0;R<3;R++)o[E][R]<v[R]&&(v[R]=o[E][R]),a[E][R]>_[R]&&(_[R]=a[E][R]);p=v.map(f),x=_.map((E,R)=>f(E-1)-p[R]+1),y=Array.from({length:x[0]*x[1]*x[2]},()=>[]);for(let E=0;E<n.length;E++)for(let R=f(o[E][0]);R<=f(a[E][0]-1);R++)for(let I=f(o[E][1]);I<=f(a[E][1]-1);I++)for(let C=f(o[E][2]);C<=f(a[E][2]-1);C++)y[((R-p[0])*x[1]+(I-p[1]))*x[2]+(C-p[2])].push(E)}for(let v=0;v<n.length;v++){let _=t(n[v].c),E=_.r,R=_.g,I=_.b,C=o[v],V=a[v];for(let M of v1){let{a:T,u:D,v:X}=M,$=M.hi?V[T]:C[T],A=M.hi?$:$-1,O=[];for(let tt of(M.hi?c:l)[T].get($)??u){let st=Math.max(o[tt][D],C[D]),at=Math.min(a[tt][D],V[D]),ft=Math.max(o[tt][X],C[X]),gt=Math.min(a[tt][X],V[X]);st<at&&ft<gt&&O.push([st,ft,at,gt])}let G=[[C[D],C[X],V[D],V[X]]];for(let tt of O){let st=[];for(let at of G){let ft=Math.max(at[0],tt[0]),gt=Math.max(at[1],tt[1]),vt=Math.min(at[2],tt[2]),N=Math.min(at[3],tt[3]);if(ft>=vt||gt>=N){st.push(at);continue}at[0]<ft&&st.push([at[0],at[1],ft,at[3]]),vt<at[2]&&st.push([vt,at[1],at[2],at[3]]),at[1]<gt&&st.push([ft,at[1],vt,gt]),N<at[3]&&st.push([ft,N,vt,at[3]])}if(G=st,!G.length)break}let Y=[0,0,0];Y[T]=$;let q=null,W=0,J=0,Z=0,nt=()=>{W=C[D]-fr,J=C[X]-fr;let tt=V[D]-C[D]+2*fr+1;Z=V[X]-C[X]+2*fr+1;let st=new Float32Array(tt*Z),at=f(A)-p[T],ft=!1;if(at>=0&&at<x[T]){let vt=[0,0,0];vt[T]=at;let N=Math.min(f(W+tt-1)-p[D],x[D]-1),le=Math.min(f(J+Z-1)-p[X],x[X]-1);for(let _t=Math.max(f(W)-p[D],0);_t<=N;_t++){vt[D]=_t;for(let mt=Math.max(f(J)-p[X],0);mt<=le;mt++){vt[X]=mt;for(let rt of y[(vt[0]*x[1]+vt[1])*x[2]+vt[2]]){if(o[rt][T]>A||a[rt][T]<=A)continue;let ne=Math.max(o[rt][D],W),Lt=Math.min(a[rt][D],W+tt),w=Math.max(o[rt][X],J),b=Math.min(a[rt][X],J+Z);for(let z=ne;z<Lt;z++)st.fill(1,(z-W)*Z+(w-J),(z-W)*Z+(b-J));ft=ft||ne<Lt&&w<b}}}}if(!ft)return q=st;let gt=new Float32Array(tt*Z);for(let vt=0;vt<nx;vt++)ex(st,gt,tt,Z,Z,1),ex(gt,st,Z,tt,1,Z);return q=st},B=(tt,st)=>{if(!e)return 1;let ft=(q??nt())[(tt-W)*Z+(st-J)];return tx+(1-tx)*(1-ft)},j=(tt,st,at)=>{Y[D]=tt,Y[X]=st,i.push3(Y[0],Y[1],Y[2]),r.push3(M.n[0],M.n[1],M.n[2]),s.push3(E*at,R*at,I*at)},ot=(tt,st,at,ft)=>{let gt=B(tt,st),vt=B(at,st),N=B(at,ft),le=B(tt,ft);j(tt,st,gt),j(at,st,vt),j(at,ft,N),j(tt,st,gt),j(at,ft,N),j(tt,ft,le)};for(let tt of G){let[st,at,ft,gt]=tt;if(!e){ot(st,at,ft,gt);continue}let vt=st+fr,N=ft-fr,le=at+fr,_t=gt-fr;if(vt>=N||le>=_t){for(let mt=st;mt<ft;mt++)for(let rt=at;rt<gt;rt++)ot(mt,rt,mt+1,rt+1);continue}for(let mt=st;mt<ft;mt++){for(let rt=at;rt<le;rt++)ot(mt,rt,mt+1,rt+1);for(let rt=_t;rt<gt;rt++)ot(mt,rt,mt+1,rt+1)}for(let mt=le;mt<_t;mt++){for(let rt=st;rt<vt;rt++)ot(rt,mt,rt+1,mt+1);for(let rt=N;rt<ft;rt++)ot(rt,mt,rt+1,mt+1)}ot(vt,le,N,_t)}}}if(!i.length)return null;let m=new an;return m.setAttribute("position",new Ye(i.trimmed(),3)),m.setAttribute("normal",new Ye(r.trimmed(),3)),m.setAttribute("color",new Ye(s.trimmed(),3)),m}var pl=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],ix={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},qr=()=>({type:"object",id:Ks(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),Oi=(n="")=>({type:"scene",id:Ks(),name:n,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function pr(n){let t={id:Ks(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...t,boxes:n.boxes.map(e=>({...e}))}:{type:"scene",...t,children:n.children.map(pr)}}var zi=n=>g.context.children.find(t=>t.id===n);function un(n,t=g.root,e=[]){if(e.push(t),t===n)return e.slice();if(t.type==="scene")for(let i of t.children){let r=un(n,i,e);if(r)return r}return e.pop(),null}function ke(n,t=g.root){if(t.id===n)return t;if(t.type==="scene")for(let e of t.children){let i=ke(n,e);if(i)return i}return null}function Nn(n){let t=un(n);return t&&t.length>1?t[t.length-2]:null}function Yr(n,t){return n===t?!0:n.type!=="scene"?!1:n.children.some(e=>Yr(e,t))}var Qs=()=>Zs(g.path),to=n=>Zs(un(n)||[g.root]),Me=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),xn=n=>n.max.x<n.min.x;function $r(n,t,e,i){if(n.type==="object")for(let r of n.boxes)i.push(ri(r,e,t));else for(let r of n.children)$r(r,ii(t,ee(r.pos,e)),e+r.rot&3,i);return i}function jn(n,t,e,i){if(n.type==="object")hn(n.boxes.map(r=>ri(r,e,t)),i);else for(let r of n.children)jn(r,ii(t,ee(r.pos,e)),e+r.rot&3,i);return i}function yd(n,t,e){e.length=0;let i=Math.max(1,Math.ceil((t-n)/6));for(let r=0;r<=i;r++)e.push(n+(t-n)*r/i)}var _d=(n,t)=>Math.max(1,Math.ceil((t-n)/6))+1,sx=n=>_d(n.x0,n.x1)*_d(n.y0,n.y1)*_d(n.z0,n.z1);function jr(n,t,e,i){if(sx(n)<=1536){e.push(n),i.push(t);return}let r=n.x1-n.x0,s=n.y1-n.y0,o=n.z1-n.z0;if(r>=s&&r>=o){let a=n.x0+(r>>1);jr({...n,x1:a},t,e,i),jr({...n,x0:a},t,e,i)}else if(s>=o){let a=n.y0+(s>>1);jr({...n,y1:a},t,e,i),jr({...n,y0:a},t,e,i)}else{let a=n.z0+(o>>1);jr({...n,z1:a},t,e,i),jr({...n,z0:a},t,e,i)}}function M1(n,t,e,i){for(let r=0;r<n.length;r++){let s=n[r];if(s[0]<=t&&s[1]<=e&&s[2]<=i)return}for(let r=n.length-1;r>=0;r--){let s=n[r];t<=s[0]&&e<=s[1]&&i<=s[2]&&n.splice(r,1)}n.push([t,e,i])}function S1(n,t,e,i,r,s,o,a,c,l){let h=n.length,u=new Float64Array(h),d=new Float64Array(h),f=new Float64Array(h),y=new Float64Array(h),x=new Float64Array(h),p=new Float64Array(h),m=1/0,v=-1/0,_=1/0,E=-1/0,R=1/0,I=-1/0;for(let $=0;$<h;$++){let A=n[$];s.x>=0?(u[$]=A.x0,d[$]=A.x1):(u[$]=A.x1,d[$]=A.x0),s.y>=0?(f[$]=A.y0,y[$]=A.y1):(f[$]=A.y1,y[$]=A.y0),s.z>=0?(x[$]=A.z0,p[$]=A.z1):(x[$]=A.z1,p[$]=A.z0),A.x0<m&&(m=A.x0),A.x1>v&&(v=A.x1),A.y0<_&&(_=A.y0),A.y1>E&&(E=A.y1),A.z0<R&&(R=A.z0),A.z1>I&&(I=A.z1)}let C=s.x!==0?1/s.x:0,V=s.y!==0?1/s.y:0,M=s.z!==0?1/s.z:0,T=[],D=[],X=[];for(let $=i;$<r;$++){let A=t[$];if((s.x>0?v<=A.x0:s.x<0?m>=A.x1:v<=A.x0||m>=A.x1)||(s.y>0?E<=A.y0:s.y<0?_>=A.y1:E<=A.y0||_>=A.y1)||(s.z>0?I<=A.z0:s.z<0?R>=A.z1:I<=A.z0||R>=A.z1))continue;let O=e[$];yd(A.x0,A.x1,T),yd(A.y0,A.y1,D),yd(A.z0,A.z1,X);for(let G of T)for(let Y of D)for(let q of X){let W=1/0;if(C!==0&&(W=((s.x>0?O.x1:O.x0)-G)*C),V!==0){let nt=((s.y>0?O.y1:O.y0)-Y)*V;nt<W&&(W=nt)}if(M!==0){let nt=((s.z>0?O.z1:O.z0)-q)*M;nt<W&&(W=nt)}let J=1/0,Z=!1;for(let nt=0;nt<h;nt++){let B=-1/0,j=1/0;if(C===0){if(G<=u[nt]||G>=d[nt])continue}else{let ot=(u[nt]-G)*C,tt=(d[nt]-G)*C;ot>B&&(B=ot),tt<j&&(j=tt)}if(V===0){if(Y<=f[nt]||Y>=y[nt])continue}else{let ot=(f[nt]-Y)*V,tt=(y[nt]-Y)*V;ot>B&&(B=ot),tt<j&&(j=tt)}if(M===0){if(q<=x[nt]||q>=p[nt])continue}else{let ot=(x[nt]-q)*M,tt=(p[nt]-q)*M;ot>B&&(B=ot),tt<j&&(j=tt)}if(!(B>=j)){if(B>W+.001)B<J&&(J=B);else if(j>W+.001){Z=!0;break}}}Z||J===1/0||M1(l,Math.floor((G+J*s.x)*o),Math.floor((Y+J*s.y)*a),Math.floor((q+J*s.z)*c))}}}function rx(n,t){let e=[0],i=0;for(;i<n.length;){let s=n[i][t];do i++;while(i<n.length&&n[i][t]===s);e.push(i)}if(e.length<=48)return e;let r=new Set;for(let s=0;s<48;s++)r.add(e[Math.floor(s*(e.length-1)/47)]);return[...r]}function w1(n,t,e,i,r){let s={x:1/0,y:1/0,z:1/0};if(!n.length||!t.length)return s;t.sort((d,f)=>d[0]-f[0]||d[1]-f[1]||d[2]-f[2]);let o=[];t:for(let d of t){for(let f of o)if(f[1]<=d[1]&&f[2]<=d[2])continue t;o.push(d)}let a=n.map(d=>[Math.min(d.x0*e,d.x1*e),Math.max(d.x0*e,d.x1*e),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*r,d.z1*r),Math.max(d.z0*r,d.z1*r)]),c=(d,f,y)=>{let x=0;for(let p of a){let m=Math.min(p[1],d)-p[0];if(m<=0)continue;let v=Math.min(p[3],f)-p[2];if(v<=0)continue;let _=Math.min(p[5],y)-p[4];_>0&&(x+=m*v*_)}return x},l=o.slice().sort((d,f)=>f[0]-d[0]),h=-1,u={...s};for(let d of rx(l,0)){let f=d===0?1/0:l[d-1][0]-.01,y=l.slice(d).sort((p,m)=>m[2]-p[2]),x=new Array(y.length+1).fill(1/0);for(let p=y.length-1;p>=0;p--)x[p]=Math.min(x[p+1],y[p][1]);for(let p of rx(y,2)){let m=p===0?1/0:y[p-1][2]-.01,v=x[p]===1/0?1/0:x[p]-.01,_=c(f,v,m);_>h&&(h=_,u.x=f,u.y=v,u.z=m)}}return u}function ox(n,t,e,i,r,s){let o=[],a=[];for(let x of t)jr(x,x,o,a);let c=[],l=0,h=0;for(let x=0;x<o.length;x++)h+=sx(o[x]),(h>=1536||x===o.length-1)&&(c.push([l,x+1]),l=x+1,h=0);let u=[];for(let x=0;x<n.length;x++)for(let p=0;p<e.length;p++)for(let m=0;m<c.length;m++)u.push([x,p,m]);let d=n.map(()=>[]),f=0,y=null;return{step(x){for(;f<u.length;){let[p,m,v]=u[f++],[_,E]=c[v];if(S1(n[p],o,a,_,E,e[m],i,r,s,d[p]),f<u.length&&x())return!1}return!0},cuts(){return y??=n.map((x,p)=>w1(x,d[p],i,r,s)),y}}}function ml(n,t){ni.x=(n-ye.x)/ye.w*2-1,ni.y=-((t-ye.y)/ye.h)*2+1}var vd=()=>g.pickMeshes.length?(gn.setFromCamera(ni,Xt),gn.intersectObjects(g.pickMeshes,!1)[0]??null):null;function bd(){let n=vd();return n?n.object.userData.childId??null:null}var ax=new De(new P(0,1,0),0);function ha(n){return gn.setFromCamera(ni,Xt),ax.constant=-n,gn.ray.intersectPlane(ax,ur)?{x:Math.floor(ur.x),y:n,z:Math.floor(ur.z)}:null}var hx=(n,t)=>({x:Math.floor(n.x-t.x*.5),y:Math.floor(n.y-t.y*.5),z:Math.floor(n.z-t.z*.5)}),E1=new P;function Jr(){let n=vd();if(!n)return null;let t=g.editXform.off,e=ee({x:n.point.x-t.x,y:n.point.y-t.y,z:n.point.z-t.z},-g.editXform.rot),i={x:0,y:1,z:0};if(n.face){let s=E1.copy(n.face.normal).transformDirection(n.object.matrixWorld);i=ee({x:s.x,y:s.y,z:s.z},-g.editXform.rot)}let r=hx(e,i);return{cell:r,addCell:{x:r.x+Math.round(i.x),y:r.y+Math.round(i.y),z:r.z+Math.round(i.z)}}}function ux(){let n=vd();return n?hx(n.point,n.face?n.face.normal:{x:0,y:1,z:0}):ha(0)}function Zr(n){let t=ha(n+g.editXform.off.y);if(!t)return null;let e=ee({x:t.x-g.editXform.off.x,y:0,z:t.z-g.editXform.off.z},-g.editXform.rot);return{x:Math.round(e.x),y:n,z:Math.round(e.z)}}var cx=(n,t)=>({x:n===0?t:0,y:n===1?t:0,z:n===2?t:0}),lx=new De;function dx(n,t){let e=g.editXform.off,i=g.editXform.rot,r=ee(cx(n,1),i),s=ii(ee(cx(n,t),i),e);if(gn.setFromCamera(ni,Xt),lx.setComponents(r.x,r.y,r.z,-(r.x*s.x+r.y*s.y+r.z*s.z)),!gn.ray.intersectPlane(lx,ur))return null;let o=ee({x:ur.x-e.x,y:ur.y-e.y,z:ur.z-e.z},-i),a={x:Math.round(o.x),y:Math.round(o.y),z:Math.round(o.z)};return n===0?a.x=t:n===1?a.y=t:a.z=t,a}var Fi=(n,t,e)=>{let i=ee({x:n,y:t,z:e},g.editXform.rot);return new P(i.x+g.editXform.off.x,i.y+g.editXform.off.y,i.z+g.editXform.off.z)};function Md(n=Jr()){return g.tool==="add"?n?n.addCell:Zr(0):n?n.cell:null}var T1=new Rt(10994876),A1=new Rt(6055805),C1=new Rt(13619151),ua=null,gl=[],Sd=()=>{ua=null};function oi(){si=null,g.liveMeas=null,mr()}function wd(){if(ua)return ua;let n=[],t;g.editObject?(n.push(...g.editObject.boxes),t=Fi):(ai(g.root,{x:0,y:0,z:0},0,null,null,(a,c,l,h)=>{if(h)for(let u of a.boxes)n.push(ri(u,l,c))}),t=(a,c,l)=>new P(a,c,l));let e=Me();hn(n,e);let i=n.length===0,r={x:e.min.x,y:e.min.y,z:e.min.z},s={x:e.max.x-1,y:e.max.y-1,z:e.max.z-1};return ua={has:n.length>64?Kg(n):(a,c,l)=>Qg(n,a,c,l),mn:r,mx:s,toW:t,empty:i},ua}function fx(){let n=wd();if(n.empty)return null;let t=null;if(g.editObject){let e=Jr();t=e?{...e.cell}:Zr(0)}else t=ux();return t?{x:Math.max(n.mn.x,Math.min(n.mx.x,t.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,t.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,t.z))}:null}function R1(n){let t=wd(),e=["x","y","z"],i=[];for(let r=0;r<3;r++){let s=e[r],o=e[(r+1)%3],a=e[(r+2)%3],c=t.mn[s],l=t.mx[s],h=[n.x,n.y,n.z],u=f=>(h[r]=f,t.has(h[0],h[1],h[2])),d=c;for(;d<=l;){let f=u(d),y=d;for(;y+1<=l&&u(y+1)===f;)y++;let x=p=>{let m={};return m[s]=p,m[o]=n[o]+.5,m[a]=n[a]+.5,t.toW(m.x,m.y,m.z)};i.push({a:x(d),b:x(y+1),mid:x((d+y+1)/2),len:y-d+1,filled:f}),d=y+1}}return i}function Ed(n,t,e,i,r,s,o,a,c=!1){let l=i-n,h=r-t,u=s-e,d=(f,y,x,p,m,v,_,E)=>({a:o(f,y,x),b:o(p,m,v),mid:o((f+p)/2,(y+m)/2,(x+v)/2),len:_,filled:!0,nolabel:!E,gray:c});return[d(n,t,e,i,t,e,l,l>=a),d(n,t,e,n,t,s,u,u>=a),d(n,t,e,n,r,e,h,h>=a),d(i,t,e,i,t,s,0,!1),d(n,t,s,i,t,s,0,!1),d(n,r,e,i,r,e,0,!1),d(n,r,e,n,r,s,0,!1),d(i,r,e,i,r,s,0,!1),d(n,r,s,i,r,s,0,!1),d(i,t,e,i,r,e,0,!1),d(n,t,s,n,r,s,0,!1),d(i,t,s,i,r,s,0,!1)]}var si=null;function px(){let n=fx();n&&(si=si&&si.x===n.x&&si.y===n.y&&si.z===n.z?null:n,xl())}function mx(){si&&(si=null,xl())}function I1(n,t){let e=wd();return Ed(Math.min(n.x,t.x),Math.min(n.y,t.y),Math.min(n.z,t.z),Math.max(n.x,t.x)+1,Math.max(n.y,t.y)+1,Math.max(n.z,t.z)+1,e.toW,1,!0)}function xl(){let n=fx();g.liveMeas=n?si?I1(si,n):R1(n):null,mr()}function mr(){let n=document.getElementById("measure");n.innerHTML="",gl=[];let t=[],e=[];if(g.liveMeas)for(let r of g.liveMeas){let s=r.gray?C1:r.filled?T1:A1;if(t.push(r.a.x,r.a.y,r.a.z,r.b.x,r.b.y,r.b.z),e.push(s.r,s.g,s.b,s.r,s.g,s.b),r.nolabel)continue;let o=document.createElement("div");o.className="mlab"+(r.filled?"":" empty"),o.textContent=String(r.len),n.appendChild(o),gl.push({el:o,w:r.mid})}Ui.geometry.dispose();let i=new an;i.setAttribute("position",new sn(t,3)),i.setAttribute("color",new sn(e,3)),Ui.geometry=i,Ui.visible=t.length>0}function gx(){if(gl.length)for(let n of gl){if(ra.copy(n.w).project(Xt),ra.z>1){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=(ra.x*.5+.5)*ye.w+"px",n.el.style.top=(-ra.y*.5+.5)*ye.h+"px"}}var Td=new P(40,150,30).normalize();function L1(n){if(xn(n))return;let t=(n.min.x+n.max.x)/2,e=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,r=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,s=r+130;Tn.position.set(t+Td.x*s,e+Td.y*s,i+Td.z*s),Tn.target.position.set(t,e,i),Tn.target.updateMatrixWorld();let o=Tn.shadow.camera;o.left=-r,o.right=r,o.top=r,o.bottom=-r,o.near=Math.max(1,s-r-20),o.far=s+r+20,o.updateProjectionMatrix(),Tn.shadow.normalBias=4*r/Tn.shadow.mapSize.x}var Jn=[];function P1(){let n=new Set;for(let t of Jn){ce.remove(t);let e=t.geometry;e&&!n.has(e)&&(e.dispose(),n.add(e))}Jn=[];for(let t of Rd)t.dispose();Rd=[],ro=[],yr=null,gr.vox=-1,yl=[],Pd(),Dn.clear(),io&&(cancelAnimationFrame(io),io=0),An=null}var yl=[],An=null,io=0,eo=null;function Pd(){eo&&(Dn.remove(eo),eo.geometry.dispose(),eo.material.dispose(),eo=null)}function Ad(n,t,{tier:e="opaque",childId:i}={}){if(!n.length)return null;let r=e!=="opaque",s=fl(n,t,!r);if(!s)return null;let o=new we(s,e==="temp"?fd:dd);if(o.castShadow=!0,o.receiveShadow=!0,ce.add(o),Jn.push(o),r){o.renderOrder=2;let a=new we(s,jg);a.renderOrder=1,a.castShadow=!1,a.receiveShadow=!1,ce.add(a),Jn.push(a)}return i!=null&&(o.userData.childId=i,g.pickMeshes.push(o),(g.childMeshes[i]||(g.childMeshes[i]=[])).push(o)),o}var ro=[],Rd=[],Id=[],gr={q:-1,b:-1,vox:-1},U1=6707534;function xx(n){let t=fl(n,Js,!0);if(!t)return;let e=[new De(new P(-1,0,0),1e9),new De(new P(0,-1,0),1e9),new De(new P(0,0,-1),1e9)],i=new lr({vertexColors:!0,side:pn,clippingPlanes:e,clipShadows:!0}),r=new we(t,i);r.castShadow=r.receiveShadow=!0,ce.add(r),Jn.push(r);let s=new lr({color:U1,side:qe,clippingPlanes:e}),o=new we(t,s);ce.add(o),Jn.push(o),Rd.push(i,s);let a=Me();hn(n,a),ro.push({boxes:n,aabb:a,planes:e})}var D1=8,yx=6,xr=[-90,-60,-30,0,30,60,90],no=Math.PI/180,N1=5,yr=null;function O1(n,t){let e=n<=1?1:-1,i=n===0||n===3?1:-1,r=t>=3?1:-1,s=(c,l)=>{let h=Math.cos(l*no);return{x:h*Math.sin(c*no),y:Math.sin(l*no),z:h*Math.cos(c*no)}},o=[s(n*90,xr[t]),s(n*90,xr[t+1]),s(n*90+90,xr[t]),s(n*90+90,xr[t+1]),s(n*90+45,(xr[t]+xr[t+1])/2)],a=Id;g.editObject&&(a=a.concat(g.editObject.boxes.map(c=>ri(c,g.editXform.rot,g.editXform.off)))),yr={job:ox(ro.map(c=>c.boxes),a,o,e,r,i),sgx:e,sgy:r,sgz:i}}function vx(){if(!ro.length){yr=null;return}let n=(Dt.azim/no%360+360)%360,t=Dt.elev/no,{q:e,b:i}=gr,r=e*90+45;if((e<0||Math.abs(((n-r)%360+540)%360-180)>45+D1)&&(e=Math.min(3,Math.floor(n/90))),(i<0||t<xr[i]-yx||t>xr[i+1]+yx)&&(i=Math.max(0,Math.min(5,Math.floor((t+90)/30)))),(e!==gr.q||i!==gr.b||g.voxVer!==gr.vox)&&(gr.q=e,gr.b=i,gr.vox=g.voxVer,O1(e,i)),!yr)return;let s=performance.now();if(!yr.job.step(()=>performance.now()-s>N1)){mn();return}let{sgx:o,sgy:a,sgz:c}=yr,l=yr.job.cuts();yr=null;for(let h=0;h<ro.length;h++){let u=ro[h],d=l[h],f=(y,x,p,m)=>Math.min(m,(y>0?p:-x)+4);u.planes[0].normal.set(-o,0,0),u.planes[0].constant=f(o,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-a,0),u.planes[1].constant=f(a,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-c),u.planes[2].constant=f(c,u.aabb.min.z,u.aabb.max.z,d.z)}mn()}function ai(n,t,e,i,r,s){if(n===g.editObject||n.vis==="hidden")return;let o=r??(n.vis==="deemphasized"?n.id:null);if(n.type==="object")s(n,t,e,i,o);else for(let a of n.children)ai(a,ii(t,ee(a.pos,e)),e+a.rot&3,n===g.context?a.id:i,o,s)}var Cd=(n,t)=>{let e=n.get(t);return e||n.set(t,e=[]),e},_x=(n,t,e,i)=>{for(let r of n.boxes)i.push(ri(r,e,t));return i};function bx(){let{off:n,rot:t}=g.editXform;if(Dn.position.set(n.x,n.y,n.z),Dn.rotation.set(0,-t*Math.PI/2,0),Dn.updateMatrixWorld(!0),An){Dn.remove(An),An.geometry.dispose();let s=Jn.indexOf(An);s>=0&&Jn.splice(s,1)}let e=g.sel3d,i=e&&e.lifted?g.editObject.boxes.concat(e.boxes):g.editObject.boxes,r=fl(i,Js,!0);An=r?new we(r,dd):null,An&&(An.castShadow=An.receiveShadow=!0,Dn.add(An),Jn.push(An)),g.pickMeshes=An?[An,...yl]:[...yl],e?z1(e.region):Pd()}function z1(n){Pd();let t=new ei(n.x1-n.x0,n.y1-n.y0,n.z1-n.z0),e=new cr(new Vr(t),new Li({color:16766073,depthTest:!1}));t.dispose(),e.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2),e.renderOrder=1e3,Dn.add(e),eo=e}function _r(){io||(io=requestAnimationFrame(()=>{io=0,bx(),mn()}))}function _l(){g.voxVer++,Sd(),_r()}function Ud(n,t){g.editObject.boxes=gd(g.editObject.boxes,n,t),_l()}function da(n){g.editObject.boxes=Xr(g.editObject.boxes,n),_l()}function vl(n){let t=g.editObject.boxes;for(let e of n)t=gd(t,e,e.c);g.editObject.boxes=t,_l()}function Mx(n,t){let e=Jg(g.editObject.boxes,n.x,n.y,n.z,t);return e?(g.editObject.boxes=e,_l(),!0):!1}function Sx(){if(!Jn.length)return null;gn.setFromCamera(ni,Xt);let n=gn.intersectObjects(Jn,!1)[0];if(!n)return null;let t=gn.ray.direction,e=Math.floor(n.point.x+t.x*.5),i=Math.floor(n.point.y+t.y*.5),r=Math.floor(n.point.z+t.z*.5),s=(a,c,l)=>{let h=ee({x:e-c.x,y:i-c.y,z:r-c.z},-l);for(let u of a)if(sa(u,h.x,h.y,h.z))return u.c;return null};if(g.editObject){let a=s(g.editObject.boxes,g.editXform.off,g.editXform.rot);if(a!=null)return a}let o=null;return ai(g.root,{x:0,y:0,z:0},0,null,null,(a,c,l)=>{o==null&&(o=s(a.boxes,c,l))}),o}var Ld=new Set;function vr(n){for(let t of Ld)if(n.has(t)!==g.selection.has(t)){de();return}wx()}function de(){P1(),g.pickMeshes=[],g.childMeshes={},g.childBox={},Ld.clear(),g.voxVer++,Sd();let n={x:0,y:0,z:0},t=Me();if(g.editObject){g.editXform=Di(Qs(),{off:g.editObject.pos,rot:g.editObject.rot});let e=[],i=new Map;ai(g.root,n,0,null,null,(s,o,a,c,l)=>_x(s,o,a,l?Cd(i,l):e)),hn(e,t);let r=Ad(e,Js,{tier:"temp"});yl=r?[r]:[];for(let s of i.values())hn(s,t),xx(s);Id=e,bx(),jn(g.editObject,g.editXform.off,g.editXform.rot,t)}else{let e=new Map,i=new Map,r=[],s=[];ai(g.root,n,0,null,null,(o,a,c,l,h)=>{let u=_x(o,a,c,[]);hn(u,t);let d=h;l&&(d&&(Ld.add(l),g.selection.has(l)&&(d=null)),hn(u,g.childBox[l]||(g.childBox[l]=Me()))),d?Cd(i,d).push(...u):(s.push(...u),l?Cd(e,l).push(...u):r.push(...u))}),Ad(r,Js,{tier:"temp"});for(let[o,a]of e)Ad(a,Js,{childId:o});for(let o of i.values())xx(o);Id=s}g.sceneBox=t,L1(t),wx(),mn()}function F1(n,t,e){let i=new ei(t.x-n.x,t.y-n.y,t.z-n.z),r=new cr(new Vr(i),new Li({color:e,depthTest:!1}));return r.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),r.renderOrder=999,i.dispose(),r}function wx(){for(let n of $n.children)n.geometry?.dispose?.();if($n.clear(),$n.position.set(0,0,0),!g.editObject)for(let n of g.selection){let t=g.childBox[n];t&&!xn(t)&&$n.add(F1(t.min,t.max,15787730))}}function oe(n,t={},...e){let i=document.createElement(n);return Object.assign(i,t),e.length&&i.append(...e),i}var fa=new P,Dd=new P,Nd=new P,Ex=new P,B1=new P(0,1,0);function Tx(n,t){let e=(Xt.top-Xt.bottom)/ye.h;Xt.getWorldDirection(Dd),Nd.crossVectors(Dd,B1).normalize(),Ex.crossVectors(Nd,Dd).normalize(),jt.target.addScaledVector(Nd,-n*e),jt.target.addScaledVector(Ex,t*e)}function Ax(n,t){jt.azim-=n*.012,jt.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,jt.elev+t*.012))}function bl(n){xn(n)||(jt.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),jt.zoom=Math.max(8,Math.min(ll,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function On(){let n=Me();if(g.editObject){if(jn(g.editObject,g.editXform.off,g.editXform.rot,n),xn(n)){let t=g.editXform.off;jt.target.set(t.x,t.y+6,t.z),jt.zoom=41;return}}else for(let t in g.childBox){let e=g.childBox[t];n.min.x=Math.min(n.min.x,e.min.x),n.min.y=Math.min(n.min.y,e.min.y),n.min.z=Math.min(n.min.z,e.min.z),n.max.x=Math.max(n.max.x,e.max.x),n.max.y=Math.max(n.max.y,e.max.y),n.max.z=Math.max(n.max.z,e.max.z)}if(xn(n)){jt.target.set(0,1,0),jt.zoom=23;return}bl(n)}function Ml(n){if(n===g.root){On();return}let t=to(n);bl(jn(n,t.off,t.rot,Me()))}function Cx(){Dt.azim+=(jt.azim-Dt.azim)*.22,Dt.elev+=(jt.elev-Dt.elev)*.22,Dt.zoom+=(jt.zoom-Dt.zoom)*.25,Dt.target.lerp(jt.target,.25);let n=Math.cos(Dt.elev),t=Math.sin(Dt.elev);fa.set(n*Math.sin(Dt.azim),t,n*Math.cos(Dt.azim)),Xt.position.copy(Dt.target).addScaledVector(fa,Xg);let e=al.clamp((Math.abs(Dt.elev)-1.45)/(Math.PI/2-1.45),0,1);hl.set(-Math.sin(Dt.azim),0,-Math.cos(Dt.azim)),Dt.elev<0&&hl.negate(),ud.set(0,1,0).lerp(hl,e),Xt.up.copy(ud.normalize()),Xt.lookAt(Dt.target);let i=ye.w/ye.h,r=Dt.zoom,s=r*i;Xt.left=-s/2,Xt.right=s/2,Xt.top=r/2,Xt.bottom=-r/2;let o=Xt.position,a=1/0,c=-1/0,l=(y,x,p)=>{let m=(o.x-y)*fa.x+(o.y-x)*fa.y+(o.z-p)*fa.z;m<a&&(a=m),m>c&&(c=m)},h=g.sceneBox;if(h&&!xn(h))for(let y of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let p of[h.min.z,h.max.z])l(y,x,p);let u=Dt.target.x,d=Dt.target.z,f=4e3;for(let y of[-f,f])for(let x of[-f,f])l(u+y,0,d+x);a>c&&(a=.1,c=4e3),Xt.near=a-10,Xt.far=c+10,Xt.updateProjectionMatrix(),Pi.position.set(Dt.target.x,-.1,Dt.target.z),Yg()}var k1={0:["y","z"],1:["x","z"],2:["x","y"]};function V1(n){let t=[];for(let e of n)for(let i=e.x0;i<e.x1;i++)for(let r=e.y0;r<e.y1;r++)for(let s=e.z0;s<e.z1;s++)t.push({x:i,y:r,z:s,c:e.c});return t}function H1(n,t,e,i,r){let s=(e%360+360)%360;if(s>180&&(s-=360),s===0)return;let o=Math.round(s/90),a=(s-o*90)*Math.PI/180,c=(o%4+4)%4,l=Math.tan(a/2),h=Math.sin(a),[u,d]=k1[t];for(let f of n){let y=f[u]-i,x=f[d]-r;for(let p=0;p<c;p++){let m=-x,v=y;y=m,x=v}a&&(y-=Math.round(x*l),x+=Math.round(y*h),y-=Math.round(x*l)),f[u]=i+y,f[d]=r+x}}function G1(n){let t=new Map;for(let a of n)t.set(Wr(a.x,a.y,a.z),a.c);let e=(a,c,l,h)=>t.get(Wr(a,c,l))===h,i=(a,c,l,h,u)=>{for(let d=a;d<c;d++)if(!e(d,l,h,u))return!1;return!0},r=(a,c,l,h,u,d)=>{for(let f=l;f<h;f++)if(!i(a,c,u,f,d))return!1;return!0},s=n.slice().sort((a,c)=>a.y-c.y||a.z-c.z||a.x-c.x),o=[];for(let a of s){let c=a.x,l=a.y,h=a.z,u=a.c;if(!t.has(Wr(c,l,h)))continue;let d=c+1;for(;e(d,l,h,u);)d++;let f=h+1;for(;i(c,d,l,f,u);)f++;let y=l+1;for(;r(c,d,h,f,y,u);)y++;for(let x=l;x<y;x++)for(let p=h;p<f;p++)for(let m=c;m<d;m++)t.delete(Wr(m,x,p));o.push({x0:c,y0:l,z0:h,x1:d,y1:y,z1:f,c:u})}return o}function Rx(n,t,e,i,r,s){let o=V1(n);H1(o,e,t,Math.round(i),Math.round(r));for(let a of o){let c=s(a.x,a.y,a.z);a.x=c.x,a.y=c.y,a.z=c.z}return G1(o)}var Od=null,Ix=[],Lx=[],so=()=>Od;function Px(n){Ix=n,n.length&&(Od="node")}var Sl=()=>Ix;function Ux(n){Lx=n,n.length&&(Od="vox")}var wl=()=>Lx;var Zn=[],ci=-1;function pa(){Zn.length=0,ci=-1}var zd=()=>Zn[ci];function Dx(n){Zn.length=ci+1,Zn.push(n),Zn.length>200&&Zn.shift(),ci=Zn.length-1}function Nx(n){ci>=0&&(Zn[ci]=n)}var Ox=()=>ci>0?Zn[--ci]:null,zx=()=>ci<Zn.length-1?Zn[++ci]:null;var El=!1,Fx=n=>({rootJSON:n,uid:ul(),pathIds:g.path.map(t=>t.id),selection:[...g.selection],editId:g.editObject?g.editObject.id:null,collapsed:[...g.collapsed]});function Bx(n){if(El)return;let t=Fx(n),e=zd();e&&e.rootJSON===t.rootJSON||Dx(t)}function kx(n){El||!zd()||Nx(Fx(n))}function Vx(n){El=!0,dl(n.uid),g.root=Bi(JSON.parse(n.rootJSON)),g.path=[];let t=g.root;for(let e of n.pathIds){let i=t.id===e?t:t.type==="scene"?t.children.find(r=>r.id===e):null;if(!i)break;t=i,g.path.push(t)}g.path.length||(g.path=[g.root]),g.editObject=n.editId?ke(n.editId):null,g.selection=new Set(n.selection.filter(e=>g.context.children.some(i=>i.id===e))),g.collapsed=new Set(n.collapsed),g.drag=null,g.sel3d=null,g.painting=!1,g.lastVox=null,de(),qt(),fe(),El=!1}function Tl(){je();let n=Ox();n&&Vx(n)}function ma(){je();let n=zx();n&&Vx(n)}var dn=()=>new Map,Al=n=>{let t=dn();return n.forEach((e,i)=>{t.set(i,e)}),t},li=(n,t,e)=>{let i=n.get(t);return i===void 0&&n.set(t,i=e()),i},Hx=(n,t)=>{let e=[];for(let[i,r]of n)e.push(t(r,i));return e},Gx=(n,t)=>{for(let[e,i]of n)if(t(i,e))return!0;return!1};var ki=()=>new Set;var Cl=n=>n[n.length-1];var Wx=(n,t)=>{for(let e=0;e<t.length;e++)n.push(t[e])},Vi=Array.from,Rl=(n,t)=>{for(let e=0;e<n.length;e++)if(!t(n[e],e,n))return!1;return!0},Il=(n,t)=>{for(let e=0;e<n.length;e++)if(t(n[e],e,n))return!0;return!1};var Xx=(n,t)=>{let e=new Array(n);for(let i=0;i<n;i++)e[i]=t(i,e);return e};var Kr=Array.isArray;var Ll=class{constructor(){this._observers=dn()}on(t,e){return li(this._observers,t,ki).add(e),e}once(t,e){let i=(...r)=>{this.off(t,i),e(...r)};this.on(t,i)}off(t,e){let i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return Vi((this._observers.get(t)||dn()).values()).forEach(i=>i(...e))}destroy(){this._observers=dn()}};var fn=Math.floor;var Qr=Math.abs;var Pl=(n,t)=>n<t?n:t,Hi=(n,t)=>n>t?n:t,Y2=Number.isNaN;var Ul=n=>n!==0?n<0:1/n<0;var oo=Number.MAX_SAFE_INTEGER,Bd=Number.MIN_SAFE_INTEGER,$2=1<<31;var qx=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&fn(n)===n),j2=Number.isNaN,J2=Number.parseInt;var Vd=String.fromCharCode,W1=String.fromCodePoint,Z2=Vd(65535),X1=n=>n.toLowerCase(),q1=/^\s*/g,Y1=n=>n.replace(q1,""),$1=/([A-Z])/g,Hd=(n,t)=>Y1(n.replace($1,e=>`${t}${X1(e)}`));var j1=n=>{let t=unescape(encodeURIComponent(n)),e=t.length,i=new Uint8Array(e);for(let r=0;r<e;r++)i[r]=t.codePointAt(r);return i},co=typeof TextEncoder<"u"?new TextEncoder:null,J1=n=>co.encode(n),Yx=co?J1:j1;var ao=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});ao&&ao.decode(new Uint8Array).length===1&&(ao=null);var $x=(n,t)=>Xx(t,()=>n).join("");var ts=class{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}},va=()=>new ts;var Z1=n=>{let t=n.cpos;for(let e=0;e<n.bufs.length;e++)t+=n.bufs[e].length;return t};var Kn=n=>{let t=new Uint8Array(Z1(n)),e=0;for(let i=0;i<n.bufs.length;i++){let r=n.bufs[i];t.set(r,e),e+=r.length}return t.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),e),t},K1=(n,t)=>{let e=n.cbuf.length;e-n.cpos<t&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Hi(e,t)*2),n.cpos=0)},Oe=(n,t)=>{let e=n.cbuf.length;n.cpos===e&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(e*2),n.cpos=0),n.cbuf[n.cpos++]=t};var Ol=Oe;var $t=(n,t)=>{for(;t>127;)Oe(n,128|127&t),t=fn(t/128);Oe(n,127&t)},zl=(n,t)=>{let e=Ul(t);for(e&&(t=-t),Oe(n,(t>63?128:0)|(e?64:0)|63&t),t=fn(t/64);t>0;)Oe(n,(t>127?128:0)|127&t),t=fn(t/128)},Gd=new Uint8Array(3e4),Q1=Gd.length/3,tT=(n,t)=>{if(t.length<Q1){let e=co.encodeInto(t,Gd).written||0;$t(n,e);for(let i=0;i<e;i++)Oe(n,Gd[i])}else yn(n,Yx(t))},eT=(n,t)=>{let e=unescape(encodeURIComponent(t)),i=e.length;$t(n,i);for(let r=0;r<i;r++)Oe(n,e.codePointAt(r))},es=co&&co.encodeInto?tT:eT;var ba=(n,t)=>{let e=n.cbuf.length,i=n.cpos,r=Pl(e-i,t.length),s=t.length-r;n.cbuf.set(t.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Hi(e*2,s)),n.cbuf.set(t.subarray(r)),n.cpos=s)},yn=(n,t)=>{$t(n,t.byteLength),ba(n,t)},Wd=(n,t)=>{K1(n,t);let e=new DataView(n.cbuf.buffer,n.cpos,t);return n.cpos+=t,e},nT=(n,t)=>Wd(n,4).setFloat32(0,t,!1),iT=(n,t)=>Wd(n,8).setFloat64(0,t,!1),rT=(n,t)=>Wd(n,8).setBigInt64(0,t,!1);var Jx=new DataView(new ArrayBuffer(4)),sT=n=>(Jx.setFloat32(0,n),Jx.getFloat32(0)===n),ho=(n,t)=>{switch(typeof t){case"string":Oe(n,119),es(n,t);break;case"number":qx(t)&&Qr(t)<=2147483647?(Oe(n,125),zl(n,t)):sT(t)?(Oe(n,124),nT(n,t)):(Oe(n,123),iT(n,t));break;case"bigint":Oe(n,122),rT(n,t);break;case"object":if(t===null)Oe(n,126);else if(Kr(t)){Oe(n,117),$t(n,t.length);for(let e=0;e<t.length;e++)ho(n,t[e])}else if(t instanceof Uint8Array)Oe(n,116),yn(n,t);else{Oe(n,118);let e=Object.keys(t);$t(n,e.length);for(let i=0;i<e.length;i++){let r=e[i];es(n,r),ho(n,t[r])}}break;case"boolean":Oe(n,t?120:121);break;default:Oe(n,127)}},_a=class extends ts{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&$t(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}};var Zx=n=>{n.count>0&&(zl(n.encoder,n.count===1?n.s:-n.s),n.count>1&&$t(n.encoder,n.count-2))},ns=class{constructor(){this.encoder=new ts,this.s=0,this.count=0}write(t){this.s===t?this.count++:(Zx(this),this.count=1,this.s=t)}toUint8Array(){return Zx(this),Kn(this.encoder)}};var Kx=n=>{if(n.count>0){let t=n.diff*2+(n.count===1?0:1);zl(n.encoder,t),n.count>1&&$t(n.encoder,n.count-2)}},uo=class{constructor(){this.encoder=new ts,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(Kx(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return Kx(this),Kn(this.encoder)}},Nl=class{constructor(){this.sarr=[],this.s="",this.lensE=new ns}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){let t=new ts;return this.sarr.push(this.s),this.s="",es(t,this.sarr.join("")),ba(t,this.lensE.toUint8Array()),Kn(t)}};var Cn=n=>new Error(n),Rn=()=>{throw Cn("Method unimplemented")},_n=()=>{throw Cn("Unexpected case")};var Qx=Cn("Unexpected end of array"),t0=Cn("Integer out of Range"),fo=class{constructor(t){this.arr=t,this.pos=0}},os=n=>new fo(n),e0=n=>n.pos!==n.arr.length;var aT=(n,t)=>{let e=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,t);return n.pos+=t,e},vn=n=>aT(n,Bt(n));var is=n=>n.arr[n.pos++];var Bt=n=>{let t=0,e=1,i=n.arr.length;for(;n.pos<i;){let r=n.arr[n.pos++];if(t=t+(r&127)*e,e*=128,r<128)return t;if(t>oo)throw t0}throw Qx},Bl=n=>{let t=n.arr[n.pos++],e=t&63,i=64,r=(t&64)>0?-1:1;if((t&128)===0)return r*e;let s=n.arr.length;for(;n.pos<s;){if(t=n.arr[n.pos++],e=e+(t&127)*i,i*=128,t<128)return r*e;if(e>oo)throw t0}throw Qx};var cT=n=>{let t=Bt(n);if(t===0)return"";{let e=String.fromCodePoint(is(n));if(--t<100)for(;t--;)e+=String.fromCodePoint(is(n));else for(;t>0;){let i=t<1e4?t:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,e+=String.fromCodePoint.apply(null,r),t-=i}return decodeURIComponent(escape(e))}},lT=n=>ao.decode(vn(n)),rs=ao?lT:cT;var qd=(n,t)=>{let e=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,t);return n.pos+=t,e},hT=n=>qd(n,4).getFloat32(0,!1),uT=n=>qd(n,8).getFloat64(0,!1),dT=n=>qd(n,8).getBigInt64(0,!1);var fT=[n=>{},n=>null,Bl,hT,uT,dT,n=>!1,n=>!0,rs,n=>{let t=Bt(n),e={};for(let i=0;i<t;i++){let r=rs(n);e[r]=po(n)}return e},n=>{let t=Bt(n),e=[];for(let i=0;i<t;i++)e.push(po(n));return e},vn],po=n=>fT[127-is(n)](n),Ma=class extends fo{constructor(t,e){super(t),this.reader=e,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),e0(this)?this.count=Bt(this)+1:this.count=-1),this.count--,this.s}};var ss=class extends fo{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=Bl(this);let t=Ul(this.s);this.count=1,t&&(this.s=-this.s,this.count=Bt(this)+2)}return this.count--,this.s}};var mo=class extends fo{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){let t=Bl(this),e=t&1;this.diff=fn(t/2),this.count=1,e&&(this.count=Bt(this)+2)}return this.s+=this.diff,this.count--,this.s}},Fl=class{constructor(t){this.decoder=new ss(t),this.str=rs(this.decoder),this.spos=0}read(){let t=this.spos+this.decoder.read(),e=this.str.slice(this.spos,t);return this.spos=t,e}};var tI=crypto.subtle,n0=crypto.getRandomValues.bind(crypto);var Yd=()=>n0(new Uint32Array(1))[0];var mT="10000000-1000-4000-8000"+-1e11,i0=()=>mT.replace(/[018]/g,n=>(n^Yd()&15>>n/4).toString(16));var r0=Date.now;var $d=n=>new Promise(n);var iI=Promise.all.bind(Promise);var jd=n=>n===void 0?null:n;var Jd=class{constructor(){this.map=new Map}setItem(t,e){this.map.set(t,e)}getItem(t){return this.map.get(t)}},s0=new Jd,vT=!0;try{typeof localStorage<"u"&&localStorage&&(s0=localStorage,vT=!1)}catch{}var o0=s0;var as=Symbol("Equality"),kl=(n,t)=>n===t||!!n?.[as]?.(t)||!1;var a0=n=>typeof n=="object",c0=Object.assign,MT=Object.keys;var l0=(n,t)=>{for(let e in n)t(n[e],e)};var Sa=n=>MT(n).length;var h0=n=>{for(let t in n)return!1;return!0},go=(n,t)=>{for(let e in n)if(!t(n[e],e))return!1;return!0},wa=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),Kd=(n,t)=>n===t||Sa(n)===Sa(t)&&go(n,(e,i)=>(e!==void 0||wa(t,i))&&kl(t[i],e)),ST=Object.freeze,Qd=n=>{for(let t in n){let e=n[t];(typeof e=="object"||typeof e=="function")&&Qd(n[t])}return ST(n)};var Ta=(n,t,e=0)=>{try{for(;e<n.length;e++)n[e](...t)}finally{e<n.length&&Ta(n,t,e+1)}};var u0=n=>n;var Ea=(n,t)=>{if(n===t)return!0;if(n==null||t==null||n.constructor!==t.constructor&&(n.constructor||Object)!==(t.constructor||Object))return!1;if(n[as]!=null)return n[as](t);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),t=new Uint8Array(t);case Uint8Array:{if(n.byteLength!==t.byteLength)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;break}case Set:{if(n.size!==t.size)return!1;for(let e of n)if(!t.has(e))return!1;break}case Map:{if(n.size!==t.size)return!1;for(let e of n.keys())if(!t.has(e)||!Ea(n.get(e),t.get(e)))return!1;break}case void 0:case Object:if(Sa(n)!==Sa(t))return!1;for(let e in n)if(!wa(n,e)||!Ea(n[e],t[e]))return!1;break;case Array:if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!Ea(n[e],t[e]))return!1;break;default:return!1}return!0},d0=(n,t)=>t.includes(n);var Aa=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";var rI=typeof navigator<"u"?/Mac/.test(navigator.platform):!1,hi,wT=[],ET=()=>{if(hi===void 0)if(Aa){hi=dn();let n=process.argv,t=null;for(let e=0;e<n.length;e++){let i=n[e];i[0]==="-"?(t!==null&&hi.set(t,""),t=i):t!==null?(hi.set(t,i),t=null):wT.push(i)}t!==null&&hi.set(t,"")}else typeof location=="object"?(hi=dn(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){let[t,e]=n.split("=");hi.set(`--${Hd(t,"-")}`,e),hi.set(`-${Hd(t,"-")}`,e)}})):hi=dn();return hi},nf=n=>ET().has(n);var Ca=n=>Aa?jd(process.env[n.toUpperCase().replaceAll("-","_")]):jd(o0.getItem(n));var f0=n=>nf("--"+n)||Ca(n)!==null,p0=f0("production"),TT=Aa&&d0(process.env.FORCE_COLOR,["true","1","2"]),m0=TT||!nf("--no-colors")&&!f0("no-color")&&(!Aa||process.stdout.isTTY)&&(!Aa||nf("--color")||Ca("COLORTERM")!==null||(Ca("TERM")||"").includes("color"));var AT=n=>new Uint8Array(n);var g0=n=>{let t=AT(n.byteLength);return t.set(n),t};var sf=class{constructor(t,e){this.left=t,this.right=e}},ui=(n,t)=>new sf(n,t);var of=n=>n.next()>=.5,Vl=(n,t,e)=>fn(n.next()*(e+1-t)+t);var af=(n,t,e)=>fn(n.next()*(e+1-t)+t);var cf=(n,t,e)=>af(n,t,e);var IT=n=>Vd(cf(n,97,122)),x0=(n,t=0,e=20)=>{let i=cf(n,t,e),r="";for(let s=0;s<i;s++)r+=IT(n);return r};var Hl=(n,t)=>t[cf(n,0,t.length-1)];var PT=Symbol("0schema"),lf=class{constructor(){this._rerrs=[]}extend(t,e,i,r=null){this._rerrs.push({path:t,expected:e,has:i,message:r})}toString(){let t=[];for(let e=this._rerrs.length-1;e>0;e--){let i=this._rerrs[e];t.push($x(" ",(this._rerrs.length-e)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return t.join(`
`)}},hf=(n,t)=>n===t?!0:n==null||t==null||n.constructor!==t.constructor?!1:n[as]?kl(n,t):Kr(n)?Rl(n,e=>Il(t,i=>hf(e,i))):a0(n)?go(n,(e,i)=>hf(e,t[i])):!1,Ve=class{static _dilutes=!1;extends(t){let[e,i]=[this.shape,t.shape];return this.constructor._dilutes&&([i,e]=[e,i]),hf(e,i)}equals(t){return this.constructor===t.constructor&&Ea(this.shape,t.shape)}[PT](){return!0}[as](t){return this.equals(t)}validate(t){return this.check(t)}check(t,e){Rn()}get nullable(){return bo(this,th)}get optional(){return new Gl(this)}cast(t){return y0(t,this),t}expect(t){return y0(t,this),t}},Ra=class extends Ve{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e=void 0){let i=t?.constructor===this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name,t?.constructor!==this.shape?"Constructor match failed":"Check failed"),i}},Se=(n,t=null)=>new Ra(n,t),oI=Se(Ra),Ia=class extends Ve{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape(t);return!i&&e?.extend(null,"custom prop",t?.constructor.name,"failed to check custom prop"),i}},Ce=n=>new Ia(n),aI=Se(Ia),_o=class extends Ve{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape.some(r=>r===t);return!i&&e?.extend(null,this.shape.join(" | "),t.toString()),i}},Kl=(...n)=>new _o(n),_0=Se(_o),UT=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,t=>"\\"+t)),v0=n=>{if(vo.check(n))return[UT(n)];if(_0.check(n))return n.shape.map(t=>t+"");if(E0.check(n))return["[+-]?\\d+.?\\d*"];if(T0.check(n))return[".*"];if(Jl.check(n))return n.shape.map(v0).flat(1);_n()},uf=class extends Ve{constructor(t){super(),this.shape=t,this._r=new RegExp("^"+t.map(v0).map(e=>`(${e.join("|")})`).join("")+"$")}check(t,e){let i=this._r.exec(t)!=null;return!i&&e?.extend(null,this._r.toString(),t.toString(),"String doesn't match string template."),i}};var cI=Se(uf),DT=Symbol("optional"),Gl=class extends Ve{constructor(t){super(),this.shape=t}check(t,e){let i=t===void 0||this.shape.check(t);return!i&&e?.extend(null,"undefined (optional)","()"),i}get[DT](){return!0}},NT=Se(Gl),Wl=class extends Ve{check(t,e){return e?.extend(null,"never",typeof t),!1}},lI=new Wl,hI=Se(Wl),Xl=class n extends Ve{constructor(t,e=!1){super(),this.shape=t,this._isPartial=e}static _dilutes=!0;get partial(){return new n(this.shape,!0)}check(t,e){return t==null?(e?.extend(null,"object","null"),!1):go(this.shape,(i,r)=>{let s=this._isPartial&&!wa(t,r)||i.check(t[r],e);return!s&&e?.extend(r.toString(),i.toString(),typeof t[r],"Object property does not match"),s})}},OT=n=>new Xl(n),zT=Se(Xl),FT=Ce(n=>n!=null&&(n.constructor===Object||n.constructor==null)),ql=class extends Ve{constructor(t,e){super(),this.shape={keys:t,values:e}}check(t,e){return t!=null&&go(t,(i,r)=>{let s=this.shape.keys.check(r,e);return!s&&e?.extend(r+"","Record",typeof t,s?"Key doesn't match schema":"Value doesn't match value"),s&&this.shape.values.check(i,e)})}},b0=(n,t)=>new ql(n,t),BT=Se(ql),Yl=class extends Ve{constructor(t){super(),this.shape=t}check(t,e){return t!=null&&go(this.shape,(i,r)=>{let s=i.check(t[r],e);return!s&&e?.extend(r.toString(),"Tuple",typeof i),s})}},kT=(...n)=>new Yl(n),uI=Se(Yl),$l=class extends Ve{constructor(t){super(),this.shape=t.length===1?t[0]:new La(t)}check(t,e){let i=Kr(t)&&Rl(t,r=>this.shape.check(r));return!i&&e?.extend(null,"Array",""),i}},M0=(...n)=>new $l(n),VT=Se($l),HT=Ce(n=>Kr(n)),jl=class extends Ve{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e){let i=t instanceof this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name),i}},GT=(n,t=null)=>new jl(n,t),dI=Se(jl),WT=GT(Ve),df=class extends Ve{constructor(t){super(),this.len=t.length-1,this.args=kT(...t.slice(-1)),this.res=t[this.len]}check(t,e){let i=t.constructor===Function&&t.length<=this.len;return!i&&e?.extend(null,"function",typeof t),i}};var XT=Se(df),qT=Ce(n=>typeof n=="function"),ff=class extends Ve{constructor(t){super(),this.shape=t}check(t,e){let i=Rl(this.shape,r=>r.check(t,e));return!i&&e?.extend(null,"Intersectinon",typeof t),i}};var fI=Se(ff,n=>n.shape.length>0),La=class extends Ve{static _dilutes=!0;constructor(t){super(),this.shape=t}check(t,e){let i=Il(this.shape,r=>r.check(t,e));return e?.extend(null,"Union",typeof t),i}},bo=(...n)=>n.findIndex(t=>Jl.check(t))>=0?bo(...n.map(t=>Pa(t)).map(t=>Jl.check(t)?t.shape:[t]).flat(1)):n.length===1?n[0]:new La(n),Jl=Se(La),S0=()=>!0,Zl=Ce(S0),YT=Se(Ia,n=>n.shape===S0),mf=Ce(n=>typeof n=="bigint"),$T=Ce(n=>n===mf),w0=Ce(n=>typeof n=="symbol"),pI=Ce(n=>n===w0),yo=Ce(n=>typeof n=="number"),E0=Ce(n=>n===yo),vo=Ce(n=>typeof n=="string"),T0=Ce(n=>n===vo),Ql=Ce(n=>typeof n=="boolean"),jT=Ce(n=>n===Ql),A0=Kl(void 0),mI=Se(_o,n=>n.shape.length===1&&n.shape[0]===void 0),gI=Kl(void 0);var th=Kl(null),JT=Se(_o,n=>n.shape.length===1&&n.shape[0]===null),xI=Se(Uint8Array),yI=Se(Ra,n=>n.shape===Uint8Array),ZT=bo(yo,vo,th,A0,mf,Ql,w0),_I=(()=>{let n=M0(Zl),t=b0(vo,Zl),e=bo(yo,vo,th,Ql,n,t);return n.shape=e,t.shape.values=e,e})(),Pa=n=>{if(WT.check(n))return n;if(FT.check(n)){let t={};for(let e in n)t[e]=Pa(n[e]);return OT(t)}else{if(HT.check(n))return bo(...n.map(Pa));if(ZT.check(n))return Kl(n);if(qT.check(n))return Se(n)}_n()},y0=p0?()=>{}:(n,t)=>{let e=new lf;if(!t.check(n,e))throw Cn(`Expected value to be of type ${t.constructor.name}.
${e.toString()}`)},pf=class{constructor(t){this.patterns=[],this.$state=t}if(t,e){return this.patterns.push({if:Pa(t),h:e}),this}else(t){return this.if(Zl,t)}done(){return(t,e)=>{for(let i=0;i<this.patterns.length;i++){let r=this.patterns[i];if(r.if.check(t))return r.h(t,e)}throw Cn("Unhandled pattern")}}},KT=n=>new pf(n),C0=KT(Zl).if(E0,(n,t)=>Vl(t,Bd,oo)).if(T0,(n,t)=>x0(t)).if(jT,(n,t)=>of(t)).if($T,(n,t)=>BigInt(Vl(t,Bd,oo))).if(Jl,(n,t)=>xo(t,Hl(t,n.shape))).if(zT,(n,t)=>{let e={};for(let i in n.shape){let r=n.shape[i];if(NT.check(r)){if(of(t))continue;r=r.shape}e[i]=C0(r,t)}return e}).if(VT,(n,t)=>{let e=[],i=af(t,0,42);for(let r=0;r<i;r++)e.push(xo(t,n.shape));return e}).if(_0,(n,t)=>Hl(t,n.shape)).if(JT,(n,t)=>null).if(XT,(n,t)=>{let e=xo(t,n.res);return()=>e}).if(YT,(n,t)=>xo(t,Hl(t,[yo,vo,th,A0,mf,Ql,M0(yo),b0(bo("a","b","c"),yo)]))).if(BT,(n,t)=>{let e={},i=Vl(t,0,3);for(let r=0;r<i;r++){let s=xo(t,n.shape.keys),o=xo(t,n.shape.values);e[s]=o}return e}).done(),xo=(n,t)=>C0(Pa(t),n);var cs=typeof document<"u"?document:{};var vI=Ce(n=>n.nodeType===iA);var bI=typeof DOMParser<"u"?new DOMParser:null;var MI=Ce(n=>n.nodeType===tA);var SI=Ce(n=>n.nodeType===eA);var R0=n=>Hx(n,(t,e)=>`${e}:${t};`).join("");var tA=cs.ELEMENT_NODE,eA=cs.TEXT_NODE,wI=cs.CDATA_SECTION_NODE,EI=cs.COMMENT_NODE,nA=cs.DOCUMENT_NODE,TI=cs.DOCUMENT_TYPE_NODE,iA=cs.DOCUMENT_FRAGMENT_NODE,AI=Ce(n=>n.nodeType===nA);var di=Symbol;var Ua=di(),Da=di(),gf=di(),xf=di(),yf=di(),Na=di(),_f=di(),Mo=di(),vf=di(),I0=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=0;for(;i<n.length;i++){let r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)t.push(r);else if(r.constructor===Object)break}for(i>0&&e.push(t.join(""));i<n.length;i++){let r=n[i];r instanceof Symbol||e.push(r)}return e};var CI=r0();var aA={[Ua]:ui("font-weight","bold"),[Da]:ui("font-weight","normal"),[gf]:ui("color","blue"),[yf]:ui("color","green"),[xf]:ui("color","grey"),[Na]:ui("color","red"),[_f]:ui("color","purple"),[Mo]:ui("color","orange"),[vf]:ui("color","black")},cA=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=dn(),r=[],s=0;for(;s<n.length;s++){let o=n[s],a=aA[o];if(a!==void 0)i.set(a.left,a.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){let c=R0(i);s>0||c.length>0?(t.push("%c"+o),e.push(c)):t.push(o)}else break}}for(s>0&&(r=e,r.unshift(t.join("")));s<n.length;s++){let o=n[s];o instanceof Symbol||r.push(o)}return r},L0=m0?cA:I0,P0=(...n)=>{console.log(...L0(n)),D0.forEach(t=>t.print(n))},U0=(...n)=>{console.warn(...L0(n)),n.unshift(Mo),D0.forEach(t=>t.print(n))};var D0=ki();var N0=n=>({[Symbol.iterator](){return this},next:n}),O0=(n,t)=>N0(()=>{let e;do e=n.next();while(!e.done&&!t(e.value));return e}),eh=(n,t)=>N0(()=>{let{done:e,value:i}=n.next();return{done:e,value:e?void 0:t(i)}});var za=class{constructor(t,e){this.clock=t,this.len=e}},ls=class{constructor(){this.clients=new Map}},J0=(n,t,e)=>t.clients.forEach((i,r)=>{let s=n.doc.store.clients.get(r);for(let o=0;o<i.length;o++){let a=i[o];sy(n,s,a.clock,a.len,e)}}),fA=(n,t)=>{let e=0,i=n.length-1;for(;e<=i;){let r=fn((e+i)/2),s=n[r],o=s.clock;if(o<=t){if(t<o+s.len)return r;e=r+1}else i=r-1}return null},Z0=(n,t)=>{let e=n.clients.get(t.client);return e!==void 0&&fA(e,t.clock)!==null},kf=n=>{n.clients.forEach(t=>{t.sort((r,s)=>r.clock-s.clock);let e,i;for(e=1,i=1;e<t.length;e++){let r=t[i-1],s=t[e];r.clock+r.len>=s.clock?r.len=Hi(r.len,s.clock+s.len-r.clock):(i<e&&(t[i]=s),i++)}t.length=i})},pA=n=>{let t=new ls;for(let e=0;e<n.length;e++)n[e].clients.forEach((i,r)=>{if(!t.clients.has(r)){let s=i.slice();for(let o=e+1;o<n.length;o++)Wx(s,n[o].clients.get(r)||[]);t.clients.set(r,s)}});return kf(t),t},ah=(n,t,e,i)=>{li(n.clients,t,()=>[]).push(new za(e,i))},K0=()=>new ls,mA=n=>{let t=K0();return n.clients.forEach((e,i)=>{let r=[];for(let s=0;s<e.length;s++){let o=e[s];if(o.deleted){let a=o.id.clock,c=o.length;if(s+1<e.length)for(let l=e[s+1];s+1<e.length&&l.deleted;l=e[++s+1])c+=l.length;r.push(new za(a,c))}}r.length>0&&t.clients.set(i,r)}),t},Ao=(n,t)=>{$t(n.restEncoder,t.clients.size),Vi(t.clients.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{n.resetDsCurVal(),$t(n.restEncoder,e);let r=i.length;$t(n.restEncoder,r);for(let s=0;s<r;s++){let o=i[s];n.writeDsClock(o.clock),n.writeDsLen(o.len)}})},Vf=n=>{let t=new ls,e=Bt(n.restDecoder);for(let i=0;i<e;i++){n.resetDsCurVal();let r=Bt(n.restDecoder),s=Bt(n.restDecoder);if(s>0){let o=li(t.clients,r,()=>[]);for(let a=0;a<s;a++)o.push(new za(n.readDsClock(),n.readDsLen()))}}return t},B0=(n,t,e)=>{let i=new ls,r=Bt(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();let o=Bt(n.restDecoder),a=Bt(n.restDecoder),c=e.clients.get(o)||[],l=ze(e,o);for(let h=0;h<a;h++){let u=n.readDsClock(),d=u+n.readDsLen();if(u<l){l<d&&ah(i,o,l,d-l);let f=fi(c,u),y=c[f];for(!y.deleted&&y.id.clock<u&&(c.splice(f+1,0,gh(t,y,u-y.id.clock)),f++);f<c.length&&(y=c[f++],y.id.clock<d);)y.deleted||(d<y.id.clock+y.length&&c.splice(f,0,gh(t,y,d-y.id.clock)),y.delete(t))}else ah(i,o,u,d-u)}}if(i.clients.size>0){let s=new Gi;return $t(s.restEncoder,0),Ao(s,i),s.toUint8Array()}return null};var Q0=Yd,hs=class n extends Ll{constructor({guid:t=i0(),collectionid:e=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=Q0(),this.guid=t,this.collectionid=e,this.share=new Map,this.store=new hh,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=$d(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});let c=()=>$d(l=>{let h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),l())};this.on("sync",h)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){let t=this._item;t!==null&&!this.shouldLoad&&te(t.parent.doc,e=>{e.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Vi(this.subdocs).map(t=>t.guid))}transact(t,e=null){return te(this,t,e)}get(t,e=Re){let i=li(this.share,t,()=>{let s=new e;return s._integrate(this,null),s}),r=i.constructor;if(e!==Re&&r!==e)if(r===Re){let s=new e;s._map=i._map,i._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=s}),s._start=i._start;for(let o=s._start;o!==null;o=o.right)o.parent=s;return s._length=i._length,this.share.set(t,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return i}getArray(t=""){return this.get(t,ph)}getText(t=""){return this.get(t,Ga)}getMap(t=""){return this.get(t,ds)}getXmlElement(t=""){return this.get(t,Wa)}getXmlFragment(t=""){return this.get(t,Eo)}toJSON(){let t={};return this.share.forEach((e,i)=>{t[i]=e.toJSON()}),t}destroy(){this.isDestroyed=!0,Vi(this.subdocs).forEach(e=>e.destroy());let t=this._item;if(t!==null){this._item=null;let e=t.content;e.doc=new n({guid:this.guid,...e.opts,shouldLoad:!1}),e.doc._item=t,te(t.parent.doc,i=>{let r=e.doc;t.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}},ch=class{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return Bt(this.restDecoder)}readDsLen(){return Bt(this.restDecoder)}},lh=class extends ch{readLeftID(){return Yt(Bt(this.restDecoder),Bt(this.restDecoder))}readRightID(){return Yt(Bt(this.restDecoder),Bt(this.restDecoder))}readClient(){return Bt(this.restDecoder)}readInfo(){return is(this.restDecoder)}readString(){return rs(this.restDecoder)}readParentInfo(){return Bt(this.restDecoder)===1}readTypeRef(){return Bt(this.restDecoder)}readLen(){return Bt(this.restDecoder)}readAny(){return po(this.restDecoder)}readBuf(){return g0(vn(this.restDecoder))}readJSON(){return JSON.parse(rs(this.restDecoder))}readKey(){return rs(this.restDecoder)}},Sf=class{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=Bt(this.restDecoder),this.dsCurrVal}readDsLen(){let t=Bt(this.restDecoder)+1;return this.dsCurrVal+=t,t}},Er=class extends Sf{constructor(t){super(t),this.keys=[],Bt(t),this.keyClockDecoder=new mo(vn(t)),this.clientDecoder=new ss(vn(t)),this.leftClockDecoder=new mo(vn(t)),this.rightClockDecoder=new mo(vn(t)),this.infoDecoder=new Ma(vn(t),is),this.stringDecoder=new Fl(vn(t)),this.parentInfoDecoder=new Ma(vn(t),is),this.typeRefDecoder=new ss(vn(t)),this.lenDecoder=new ss(vn(t))}readLeftID(){return new wr(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new wr(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return po(this.restDecoder)}readBuf(){return vn(this.restDecoder)}readJSON(){return po(this.restDecoder)}readKey(){let t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{let e=this.stringDecoder.read();return this.keys.push(e),e}}},wf=class{constructor(){this.restEncoder=va()}toUint8Array(){return Kn(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){$t(this.restEncoder,t)}writeDsLen(t){$t(this.restEncoder,t)}},us=class extends wf{writeLeftID(t){$t(this.restEncoder,t.client),$t(this.restEncoder,t.clock)}writeRightID(t){$t(this.restEncoder,t.client),$t(this.restEncoder,t.clock)}writeClient(t){$t(this.restEncoder,t)}writeInfo(t){Ol(this.restEncoder,t)}writeString(t){es(this.restEncoder,t)}writeParentInfo(t){$t(this.restEncoder,t?1:0)}writeTypeRef(t){$t(this.restEncoder,t)}writeLen(t){$t(this.restEncoder,t)}writeAny(t){ho(this.restEncoder,t)}writeBuf(t){yn(this.restEncoder,t)}writeJSON(t){es(this.restEncoder,JSON.stringify(t))}writeKey(t){es(this.restEncoder,t)}},Ef=class{constructor(){this.restEncoder=va(),this.dsCurrVal=0}toUint8Array(){return Kn(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){let e=t-this.dsCurrVal;this.dsCurrVal=t,$t(this.restEncoder,e)}writeDsLen(t){t===0&&_n(),$t(this.restEncoder,t-1),this.dsCurrVal+=t}},Gi=class extends Ef{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new uo,this.clientEncoder=new ns,this.leftClockEncoder=new uo,this.rightClockEncoder=new uo,this.infoEncoder=new _a(Ol),this.stringEncoder=new Nl,this.parentInfoEncoder=new _a(Ol),this.typeRefEncoder=new ns,this.lenEncoder=new ns}toUint8Array(){let t=va();return $t(t,0),yn(t,this.keyClockEncoder.toUint8Array()),yn(t,this.clientEncoder.toUint8Array()),yn(t,this.leftClockEncoder.toUint8Array()),yn(t,this.rightClockEncoder.toUint8Array()),yn(t,Kn(this.infoEncoder)),yn(t,this.stringEncoder.toUint8Array()),yn(t,Kn(this.parentInfoEncoder)),yn(t,this.typeRefEncoder.toUint8Array()),yn(t,this.lenEncoder.toUint8Array()),ba(t,Kn(this.restEncoder)),Kn(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){ho(this.restEncoder,t)}writeBuf(t){yn(this.restEncoder,t)}writeJSON(t){ho(this.restEncoder,t)}writeKey(t){let e=this.keyMap.get(t);e===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(e)}},gA=(n,t,e,i)=>{i=Hi(i,t[0].id.clock);let r=fi(t,i);$t(n.restEncoder,t.length-r),n.writeClient(e),$t(n.restEncoder,i);let s=t[r];s.write(n,i-s.id.clock);for(let o=r+1;o<t.length;o++)t[o].write(n,0)},Hf=(n,t,e)=>{let i=new Map;e.forEach((r,s)=>{ze(t,s)>r&&i.set(s,r)}),Gf(t).forEach((r,s)=>{e.has(s)||i.set(s,0)}),$t(n.restEncoder,i.size),Vi(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{gA(n,t.clients.get(r),r,s)})},xA=(n,t)=>{let e=dn(),i=Bt(n.restDecoder);for(let r=0;r<i;r++){let s=Bt(n.restDecoder),o=new Array(s),a=n.readClient(),c=Bt(n.restDecoder);e.set(a,{i:0,refs:o});for(let l=0;l<s;l++){let h=n.readInfo();switch(31&h){case 0:{let u=n.readLen();o[l]=new bn(Yt(a,c),u),c+=u;break}case 10:{let u=Bt(n.restDecoder);o[l]=new Mn(Yt(a,c),u),c+=u;break}default:{let u=(h&192)===0,d=new Fe(Yt(a,c),null,(h&128)===128?n.readLeftID():null,null,(h&64)===64?n.readRightID():null,u?n.readParentInfo()?t.get(n.readString()):n.readLeftID():null,u&&(h&32)===32?n.readString():null,wy(n,h));o[l]=d,c+=d.length}}}}return e},yA=(n,t,e)=>{let i=[],r=Vi(e.keys()).sort((f,y)=>f-y);if(r.length===0)return null;let s=()=>{if(r.length===0)return null;let f=e.get(r[r.length-1]);for(;f.refs.length===f.i;)if(r.pop(),r.length>0)f=e.get(r[r.length-1]);else return null;return f},o=s();if(o===null)return null;let a=new hh,c=new Map,l=(f,y)=>{let x=c.get(f);(x==null||x>y)&&c.set(f,y)},h=o.refs[o.i++],u=new Map,d=()=>{for(let f of i){let y=f.id.client,x=e.get(y);x?(x.i--,a.clients.set(y,x.refs.slice(x.i)),e.delete(y),x.i=0,x.refs=[]):a.clients.set(y,[f]),r=r.filter(p=>p!==y)}i.length=0};for(;;){if(h.constructor!==Mn){let y=li(u,h.id.client,()=>ze(t,h.id.client))-h.id.clock;if(y<0)i.push(h),l(h.id.client,h.id.clock-1),d();else{let x=h.getMissing(n,t);if(x!==null){i.push(h);let p=e.get(x)||{refs:[],i:0};if(p.refs.length===p.i)l(x,ze(t,x)),d();else{h=p.refs[p.i++];continue}}else(y===0||y<h.length)&&(h.integrate(n,y),u.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(o!==null&&o.i<o.refs.length)h=o.refs[o.i++];else{if(o=s(),o===null)break;h=o.refs[o.i++]}}if(a.clients.size>0){let f=new Gi;return Hf(f,a,new Map),$t(f.restEncoder,0),{missing:c,update:f.toUint8Array()}}return null},_A=(n,t)=>Hf(n,t.doc.store,t.beforeState),vA=(n,t,e,i=new Er(n))=>te(t,r=>{r.local=!1;let s=!1,o=r.doc,a=o.store,c=xA(i,o),l=yA(r,a,c),h=a.pendingStructs;if(h){for(let[d,f]of h.missing)if(f<ze(a,d)){s=!0;break}if(l){for(let[d,f]of l.missing){let y=h.missing.get(d);(y==null||y>f)&&h.missing.set(d,f)}h.update=uh([h.update,l.update])}}else a.pendingStructs=l;let u=B0(i,r,a);if(a.pendingDs){let d=new Er(os(a.pendingDs));Bt(d.restDecoder);let f=B0(d,r,a);u&&f?a.pendingDs=uh([u,f]):a.pendingDs=u||f}else a.pendingDs=u;if(s){let d=a.pendingStructs.update;a.pendingStructs=null,ty(r.doc,d)}},e,!1);var ty=(n,t,e,i=Er)=>{let r=os(t);vA(r,n,e,new i(r))},xh=(n,t,e)=>ty(n,t,e,lh),bA=(n,t,e=new Map)=>{Hf(n,t.store,e),Ao(n,mA(t.store))},MA=(n,t=new Uint8Array([0]),e=new Gi)=>{let i=ny(t);bA(e,n,i);let r=[e.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(UA(n.store.pendingStructs.update,t)),r.length>1){if(e.constructor===us)return LA(r.map((s,o)=>o===0?s:NA(s)));if(e.constructor===Gi)return uh(r)}return r[0]},ey=(n,t)=>MA(n,t,new us),SA=n=>{let t=new Map,e=Bt(n.restDecoder);for(let i=0;i<e;i++){let r=Bt(n.restDecoder),s=Bt(n.restDecoder);t.set(r,s)}return t},ny=n=>SA(new ch(os(n)));var Tf=class{constructor(){this.l=[]}},k0=()=>new Tf,V0=(n,t)=>n.l.push(t),H0=(n,t)=>{let e=n.l,i=e.length;n.l=e.filter(r=>t!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},iy=(n,t,e)=>Ta(n.l,[t,e]),wr=class{constructor(t,e){this.client=t,this.clock=e}},nh=(n,t)=>n===t||n!==null&&t!==null&&n.client===t.client&&n.clock===t.clock,Yt=(n,t)=>new wr(n,t);var wA=n=>{for(let[t,e]of n.doc.share.entries())if(e===n)return t;throw _n()};var Af=class{constructor(t,e){this.ds=t,this.sv=e}};var EA=(n,t)=>new Af(n,t),BI=EA(K0(),new Map);var So=(n,t)=>t===void 0?!n.deleted:t.sv.has(n.id.client)&&(t.sv.get(n.id.client)||0)>n.id.clock&&!Z0(t.ds,n.id),Cf=(n,t)=>{let e=li(n.meta,Cf,ki),i=n.doc.store;e.has(t)||(t.sv.forEach((r,s)=>{r<ze(i,s)&&Tr(n,Yt(s,r))}),J0(n,t.ds,r=>{}),e.add(t))};var hh=class{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}},Gf=n=>{let t=new Map;return n.clients.forEach((e,i)=>{let r=e[e.length-1];t.set(i,r.id.clock+r.length)}),t},ze=(n,t)=>{let e=n.clients.get(t);if(e===void 0)return 0;let i=e[e.length-1];return i.id.clock+i.length},ry=(n,t)=>{let e=n.clients.get(t.id.client);if(e===void 0)e=[],n.clients.set(t.id.client,e);else{let i=e[e.length-1];if(i.id.clock+i.length!==t.id.clock)throw _n()}e.push(t)},fi=(n,t)=>{let e=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===t)return i;let o=fn(t/(s+r.length-1)*i);for(;e<=i;){if(r=n[o],s=r.id.clock,s<=t){if(t<s+r.length)return o;e=o+1}else i=o-1;o=fn((e+i)/2)}throw _n()},TA=(n,t)=>{let e=n.clients.get(t.client);return e[fi(e,t.clock)]},bf=TA,Rf=(n,t,e)=>{let i=fi(t,e),r=t[i];return r.id.clock<e&&r instanceof Fe?(t.splice(i+1,0,gh(n,r,e-r.id.clock)),i+1):i},Tr=(n,t)=>{let e=n.doc.store.clients.get(t.client);return e[Rf(n,e,t.clock)]},G0=(n,t,e)=>{let i=t.clients.get(e.client),r=fi(i,e.clock),s=i[r];return e.clock!==s.id.clock+s.length-1&&s.constructor!==bn&&i.splice(r+1,0,gh(n,s,e.clock-s.id.clock+1)),s},AA=(n,t,e)=>{let i=n.clients.get(t.id.client);i[fi(i,t.id.clock)]=e},sy=(n,t,e,i,r)=>{if(i===0)return;let s=e+i,o=Rf(n,t,e),a;do a=t[o++],s<a.id.clock+a.length&&Rf(n,t,s),r(a);while(o<t.length&&t[o].id.clock<s)},If=class{constructor(t,e,i){this.doc=t,this.deleteSet=new ls,this.beforeState=Gf(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=e,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}},W0=(n,t)=>t.deleteSet.clients.size===0&&!Gx(t.afterState,(e,i)=>t.beforeState.get(i)!==e)?!1:(kf(t.deleteSet),_A(n,t),Ao(n,t.deleteSet),!0),X0=(n,t,e)=>{let i=t._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&li(n.changed,t,ki).add(e)},sh=(n,t)=>{let e=n[t],i=n[t-1],r=t;for(;r>0;e=i,i=n[--r-1]){if(i.deleted===e.deleted&&i.constructor===e.constructor&&i.mergeWith(e)){e instanceof Fe&&e.parentSub!==null&&e.parent._map.get(e.parentSub)===e&&e.parent._map.set(e.parentSub,i);continue}break}let s=t-r;return s&&n.splice(t+1-s,s),s},CA=(n,t,e)=>{for(let[i,r]of n.clients.entries()){let s=t.clients.get(i);for(let o=r.length-1;o>=0;o--){let a=r[o],c=a.clock+a.len;for(let l=fi(s,a.clock),h=s[l];l<s.length&&h.id.clock<c;h=s[++l]){let u=s[l];if(a.clock+a.len<=u.id.clock)break;u instanceof Fe&&u.deleted&&!u.keep&&e(u)&&u.gc(t,!1)}}}},RA=(n,t)=>{n.clients.forEach((e,i)=>{let r=t.clients.get(i);for(let s=e.length-1;s>=0;s--){let o=e[s],a=Pl(r.length-1,1+fi(r,o.clock+o.len-1));for(let c=a,l=r[c];c>0&&l.id.clock>=o.clock;l=r[c])c-=1+sh(r,c)}})};var oy=(n,t)=>{if(t<n.length){let e=n[t],i=e.doc,r=i.store,s=e.deleteSet,o=e._mergeStructs;try{kf(s),e.afterState=Gf(e.doc.store),i.emit("beforeObserverCalls",[e,i]);let a=[];e.changed.forEach((c,l)=>a.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(e,c)})),a.push(()=>{e.changedParentTypes.forEach((c,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(c=c.filter(h=>h.target._item===null||!h.target._item.deleted),c.forEach(h=>{h.currentTarget=l,h._path=null}),c.sort((h,u)=>h.path.length-u.path.length),iy(l._dEH,c,e))})}),a.push(()=>i.emit("afterTransaction",[e,i])),Ta(a,[]),e._needFormattingCleanup&&qA(e)}finally{i.gc&&CA(s,r,i.gcFilter),RA(s,r),e.afterState.forEach((h,u)=>{let d=e.beforeState.get(u)||0;if(d!==h){let f=r.clients.get(u),y=Hi(fi(f,d),1);for(let x=f.length-1;x>=y;)x-=1+sh(f,x)}});for(let h=o.length-1;h>=0;h--){let{client:u,clock:d}=o[h].id,f=r.clients.get(u),y=fi(f,d);y+1<f.length&&sh(f,y+1)>1||y>0&&sh(f,y)}if(!e.local&&e.afterState.get(i.clientID)!==e.beforeState.get(i.clientID)&&(P0(Mo,Ua,"[yjs] ",Da,Na,"Changed the client-id because another client seems to be using it."),i.clientID=Q0()),i.emit("afterTransactionCleanup",[e,i]),i._observers.has("update")){let h=new us;W0(h,e)&&i.emit("update",[h.toUint8Array(),e.origin,i,e])}if(i._observers.has("updateV2")){let h=new Gi;W0(h,e)&&i.emit("updateV2",[h.toUint8Array(),e.origin,i,e])}let{subdocsAdded:a,subdocsLoaded:c,subdocsRemoved:l}=e;(a.size>0||l.size>0||c.size>0)&&(a.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),l.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:c,added:a,removed:l},i,e]),l.forEach(h=>h.destroy())),n.length<=t+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):oy(n,t+1)}}},te=(n,t,e=null,i=!0)=>{let r=n._transactionCleanups,s=!1,o=null;n._transaction===null&&(s=!0,n._transaction=new If(n,e,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{o=t(n._transaction)}finally{if(s){let a=n._transaction===r[0];n._transaction=null,a&&oy(r,0)}}return o};function*IA(n){let t=Bt(n.restDecoder);for(let e=0;e<t;e++){let i=Bt(n.restDecoder),r=n.readClient(),s=Bt(n.restDecoder);for(let o=0;o<i;o++){let a=n.readInfo();if(a===10){let c=Bt(n.restDecoder);yield new Mn(Yt(r,s),c),s+=c}else if((31&a)!==0){let c=(a&192)===0,l=new Fe(Yt(r,s),null,(a&128)===128?n.readLeftID():null,null,(a&64)===64?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(a&32)===32?n.readString():null,wy(n,a));yield l,s+=l.length}else{let c=n.readLen();yield new bn(Yt(r,s),c),s+=c}}}}var Fa=class{constructor(t,e){this.gen=IA(t),this.curr=null,this.done=!1,this.filterSkips=e,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Mn);return this.curr}};var Ba=class{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}},LA=n=>uh(n,lh,us);var PA=(n,t)=>{if(n.constructor===bn){let{client:e,clock:i}=n.id;return new bn(Yt(e,i+t),n.length-t)}else if(n.constructor===Mn){let{client:e,clock:i}=n.id;return new Mn(Yt(e,i+t),n.length-t)}else{let e=n,{client:i,clock:r}=e.id;return new Fe(Yt(i,r+t),null,Yt(i,r+t-1),null,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t))}},uh=(n,t=Er,e=Gi)=>{if(n.length===1)return n[0];let i=n.map(h=>new t(os(h))),r=i.map(h=>new Fa(h,!0)),s=null,o=new e,a=new Ba(o);for(;r=r.filter(d=>d.curr!==null),r.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){let y=d.curr.id.clock-f.curr.id.clock;return y===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===Mn?1:-1:y}else return f.curr.id.client-d.curr.id.client}),r.length!==0;){let h=r[0],u=h.curr.id.client;if(s!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(u!==s.struct.id.client)Mr(a,s.struct,s.offset),s={struct:d,offset:0},h.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===Mn)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{Mr(a,s.struct,s.offset);let y=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new Mn(Yt(u,s.struct.id.clock+s.struct.length),y),offset:0}}else{let y=s.struct.id.clock+s.struct.length-d.id.clock;y>0&&(s.struct.constructor===Mn?s.struct.length-=y:d=PA(d,y)),s.struct.mergeWith(d)||(Mr(a,s.struct,s.offset),s={struct:d,offset:0},h.next())}}else s={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==Mn;d=h.next())Mr(a,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(Mr(a,s.struct,s.offset),s=null),Wf(a);let c=i.map(h=>Vf(h)),l=pA(c);return Ao(o,l),o.toUint8Array()},UA=(n,t,e=Er,i=Gi)=>{let r=ny(t),s=new i,o=new Ba(s),a=new e(os(n)),c=new Fa(a,!1);for(;c.curr;){let h=c.curr,u=h.id.client,d=r.get(u)||0;if(c.curr.constructor===Mn){c.next();continue}if(h.id.clock+h.length>d)for(Mr(o,h,Hi(d-h.id.clock,0)),c.next();c.curr&&c.curr.id.client===u;)Mr(o,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===u&&c.curr.id.clock+c.curr.length<=d;)c.next()}Wf(o);let l=Vf(a);return Ao(s,l),s.toUint8Array()};var ay=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:Kn(n.encoder.restEncoder)}),n.encoder.restEncoder=va(),n.written=0)},Mr=(n,t,e)=>{n.written>0&&n.currClient!==t.id.client&&ay(n),n.written===0&&(n.currClient=t.id.client,n.encoder.writeClient(t.id.client),$t(n.encoder.restEncoder,t.id.clock+e)),t.write(n.encoder,e),n.written++},Wf=n=>{ay(n);let t=n.encoder.restEncoder;$t(t,n.clientStructs.length);for(let e=0;e<n.clientStructs.length;e++){let i=n.clientStructs[e];$t(t,i.written),ba(t,i.restEncoder)}},DA=(n,t,e,i)=>{let r=new e(os(n)),s=new Fa(r,!1),o=new i,a=new Ba(o);for(let l=s.curr;l!==null;l=s.next())Mr(a,t(l),0);Wf(a);let c=Vf(r);return Ao(o,c),o.toUint8Array()};var NA=n=>DA(n,u0,Er,us),q0="You must not compute changes after the event-handler fired.",wo=class{constructor(t,e){this.target=t,this.currentTarget=t,this.transaction=e,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=OA(this.currentTarget,this.target))}deletes(t){return Z0(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Cn(q0);let t=new Map,e=this.target;this.transaction.changed.get(e).forEach(r=>{if(r!==null){let s=e._map.get(r),o,a;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))o="delete",a=Cl(c.content.getContent());else return;else c!==null&&this.deletes(c)?(o="update",a=Cl(c.content.getContent())):(o="add",a=void 0)}else if(this.deletes(s))o="delete",a=Cl(s.content.getContent());else return;t.set(r,{action:o,oldValue:a})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw Cn(q0);let e=this.target,i=ki(),r=ki(),s=[];if(t={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(e).has(null)){let a=null,c=()=>{a&&s.push(a)};for(let l=e._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((a===null||a.delete===void 0)&&(c(),a={delete:0}),a.delete+=l.length,r.add(l)):this.adds(l)?((a===null||a.insert===void 0)&&(c(),a={insert:[]}),a.insert=a.insert.concat(l.content.getContent()),i.add(l)):((a===null||a.retain===void 0)&&(c(),a={retain:0}),a.retain+=l.length);a!==null&&a.retain===void 0&&c()}this._changes=t}return t}},OA=(n,t)=>{let e=[];for(;t._item!==null&&t!==n;){if(t._item.parentSub!==null)e.unshift(t._item.parentSub);else{let i=0,r=t._item.parent._start;for(;r!==t._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;e.unshift(i)}t=t._item.parent}return e},Je=()=>{U0("Invalid access: Add Yjs type to a document before reading data.")},cy=80,Xf=0,Lf=class{constructor(t,e){t.marker=!0,this.p=t,this.index=e,this.timestamp=Xf++}},zA=n=>{n.timestamp=Xf++},ly=(n,t,e)=>{n.p.marker=!1,n.p=t,t.marker=!0,n.index=e,n.timestamp=Xf++},FA=(n,t,e)=>{if(n.length>=cy){let i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return ly(i,t,e),i}else{let i=new Lf(t,e);return n.push(i),i}},yh=(n,t)=>{if(n._start===null||t===0||n._searchMarker===null)return null;let e=n._searchMarker.length===0?null:n._searchMarker.reduce((s,o)=>Qr(t-s.index)<Qr(t-o.index)?s:o),i=n._start,r=0;for(e!==null&&(i=e.p,r=e.index,zA(e));i.right!==null&&r<t;){if(!i.deleted&&i.countable){if(t<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>t;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return e!==null&&Qr(e.index-r)<i.parent.length/cy?(ly(e,i,r),e):FA(n._searchMarker,i,r)},ka=(n,t,e)=>{for(let i=n.length-1;i>=0;i--){let r=n[i];if(e>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(t<r.index||e>0&&t===r.index)&&(r.index=Hi(t,r.index+e))}};var _h=(n,t,e)=>{let i=n,r=t.changedParentTypes;for(;li(r,n,()=>[]).push(e),n._item!==null;)n=n._item.parent;iy(i._eH,e,t)},Re=class{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=k0(),this._dEH=k0(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,e){this.doc=t,this._item=e}_copy(){throw Rn()}clone(){throw Rn()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,e){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){V0(this._eH,t)}observeDeep(t){V0(this._dEH,t)}unobserve(t){H0(this._eH,t)}unobserveDeep(t){H0(this._dEH,t)}toJSON(){}},hy=(n,t,e)=>{n.doc??Je(),t<0&&(t=n._length+t),e<0&&(e=n._length+e);let i=e-t,r=[],s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){let o=s.content.getContent();if(o.length<=t)t-=o.length;else{for(let a=t;a<o.length&&i>0;a++)r.push(o[a]),i--;t=0}}s=s.right}return r},uy=n=>{n.doc??Je();let t=[],e=n._start;for(;e!==null;){if(e.countable&&!e.deleted){let i=e.content.getContent();for(let r=0;r<i.length;r++)t.push(i[r])}e=e.right}return t};var Va=(n,t)=>{let e=0,i=n._start;for(n.doc??Je();i!==null;){if(i.countable&&!i.deleted){let r=i.content.getContent();for(let s=0;s<r.length;s++)t(r[s],e++,n)}i=i.right}},dy=(n,t)=>{let e=[];return Va(n,(i,r)=>{e.push(t(i,r,n))}),e},BA=n=>{let t=n._start,e=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(e===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};e=t.content.getContent(),i=0,t=t.right}let r=e[i++];return e.length<=i&&(e=null),{done:!1,value:r}}}},fy=(n,t)=>{n.doc??Je();let e=yh(n,t),i=n._start;for(e!==null&&(i=e.p,t-=e.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(t<i.length)return i.content.getContent()[t];t-=i.length}},dh=(n,t,e,i)=>{let r=e,s=n.doc,o=s.clientID,a=s.store,c=e===null?t._start:e.right,l=[],h=()=>{l.length>0&&(r=new Fe(Yt(o,ze(a,o)),r,r&&r.lastId,c,c&&c.id,t,null,new To(l)),r.integrate(n,0),l=[])};i.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:r=new Fe(Yt(o,ze(a,o)),r,r&&r.lastId,c,c&&c.id,t,null,new qa(new Uint8Array(u))),r.integrate(n,0);break;case hs:r=new Fe(Yt(o,ze(a,o)),r,r&&r.lastId,c,c&&c.id,t,null,new Ya(u)),r.integrate(n,0);break;default:if(u instanceof Re)r=new Fe(Yt(o,ze(a,o)),r,r&&r.lastId,c,c&&c.id,t,null,new Xi(u)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},py=()=>Cn("Length exceeded!"),my=(n,t,e,i)=>{if(e>t._length)throw py();if(e===0)return t._searchMarker&&ka(t._searchMarker,e,i.length),dh(n,t,null,i);let r=e,s=yh(t,e),o=t._start;for(s!==null&&(o=s.p,e-=s.index,e===0&&(o=o.prev,e+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(e<=o.length){e<o.length&&Tr(n,Yt(o.id.client,o.id.clock+e));break}e-=o.length}return t._searchMarker&&ka(t._searchMarker,r,i.length),dh(n,t,o,i)},kA=(n,t,e)=>{let r=(t._searchMarker||[]).reduce((s,o)=>o.index>s.index?o:s,{index:0,p:t._start}).p;if(r)for(;r.right;)r=r.right;return dh(n,t,r,e)},gy=(n,t,e,i)=>{if(i===0)return;let r=e,s=i,o=yh(t,e),a=t._start;for(o!==null&&(a=o.p,e-=o.index);a!==null&&e>0;a=a.right)!a.deleted&&a.countable&&(e<a.length&&Tr(n,Yt(a.id.client,a.id.clock+e)),e-=a.length);for(;i>0&&a!==null;)a.deleted||(i<a.length&&Tr(n,Yt(a.id.client,a.id.clock+i)),a.delete(n),i-=a.length),a=a.right;if(i>0)throw py();t._searchMarker&&ka(t._searchMarker,r,-s+i)},fh=(n,t,e)=>{let i=t._map.get(e);i!==void 0&&i.delete(n)},qf=(n,t,e,i)=>{let r=t._map.get(e)||null,s=n.doc,o=s.clientID,a;if(i==null)a=new To([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:a=new To([i]);break;case Uint8Array:a=new qa(i);break;case hs:a=new Ya(i);break;default:if(i instanceof Re)a=new Xi(i);else throw new Error("Unexpected content type")}new Fe(Yt(o,ze(s.store,o)),r,r&&r.lastId,null,null,t,e,a).integrate(n,0)},Yf=(n,t)=>{n.doc??Je();let e=n._map.get(t);return e!==void 0&&!e.deleted?e.content.getContent()[e.length-1]:void 0},xy=n=>{let t={};return n.doc??Je(),n._map.forEach((e,i)=>{e.deleted||(t[i]=e.content.getContent()[e.length-1])}),t},yy=(n,t)=>{n.doc??Je();let e=n._map.get(t);return e!==void 0&&!e.deleted};var VA=(n,t)=>{let e={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!t.sv.has(s.id.client)||s.id.clock>=(t.sv.get(s.id.client)||0));)s=s.left;s!==null&&So(s,t)&&(e[r]=s.content.getContent()[s.length-1])}),e},ih=n=>(n.doc??Je(),O0(n._map.entries(),t=>!t[1].deleted)),Pf=class extends wo{},ph=class n extends Re{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){let e=new n;return e.push(t),e}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Re?e.clone():e)),t}get length(){return this.doc??Je(),this._length}_callObserver(t,e){super._callObserver(t,e),_h(this,t,new Pf(this,t))}insert(t,e){this.doc!==null?te(this.doc,i=>{my(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}push(t){this.doc!==null?te(this.doc,e=>{kA(e,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,e=1){this.doc!==null?te(this.doc,i=>{gy(i,this,t,e)}):this._prelimContent.splice(t,e)}get(t){return fy(this,t)}toArray(){return uy(this)}slice(t=0,e=this.length){return hy(this,t,e)}toJSON(){return this.map(t=>t instanceof Re?t.toJSON():t)}map(t){return dy(this,t)}forEach(t){Va(this,t)}[Symbol.iterator](){return BA(this)}_write(t){t.writeTypeRef(lC)}},HA=n=>new ph,Uf=class extends wo{constructor(t,e,i){super(t,e),this.keysChanged=i}},ds=class n extends Re{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,e){super._integrate(t,e),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return this.forEach((e,i)=>{t.set(i,e instanceof Re?e.clone():e)}),t}_callObserver(t,e){_h(this,t,new Uf(this,t,e))}toJSON(){this.doc??Je();let t={};return this._map.forEach((e,i)=>{if(!e.deleted){let r=e.content.getContent()[e.length-1];t[i]=r instanceof Re?r.toJSON():r}}),t}get size(){return[...ih(this)].length}keys(){return eh(ih(this),t=>t[0])}values(){return eh(ih(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return eh(ih(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??Je(),this._map.forEach((e,i)=>{e.deleted||t(e.content.getContent()[e.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?te(this.doc,e=>{fh(e,this,t)}):this._prelimContent.delete(t)}set(t,e){return this.doc!==null?te(this.doc,i=>{qf(i,this,t,e)}):this._prelimContent.set(t,e),e}get(t){return Yf(this,t)}has(t){return yy(this,t)}clear(){this.doc!==null?te(this.doc,t=>{this.forEach(function(e,i,r){fh(t,r,i)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(hC)}},GA=n=>new ds,Sr=(n,t)=>n===t||typeof n=="object"&&typeof t=="object"&&n&&t&&Kd(n,t),Ha=class{constructor(t,e,i,r){this.left=t,this.right=e,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&_n(),this.right.content.constructor){case Ie:this.right.deleted||Co(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}},Y0=(n,t,e)=>{for(;t.right!==null&&e>0;){switch(t.right.content.constructor){case Ie:t.right.deleted||Co(t.currentAttributes,t.right.content);break;default:t.right.deleted||(e<t.right.length&&Tr(n,Yt(t.right.id.client,t.right.id.clock+e)),t.index+=t.right.length,e-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},rh=(n,t,e,i)=>{let r=new Map,s=i?yh(t,e):null;if(s){let o=new Ha(s.p.left,s.p,s.index,r);return Y0(n,o,e-s.index)}else{let o=new Ha(null,t._start,0,r);return Y0(n,o,e)}},_y=(n,t,e,i)=>{for(;e.right!==null&&(e.right.deleted===!0||e.right.content.constructor===Ie&&Sr(i.get(e.right.content.key),e.right.content.value));)e.right.deleted||i.delete(e.right.content.key),e.forward();let r=n.doc,s=r.clientID;i.forEach((o,a)=>{let c=e.left,l=e.right,h=new Fe(Yt(s,ze(r.store,s)),c,c&&c.lastId,l,l&&l.id,t,null,new Ie(a,o));h.integrate(n,0),e.right=h,e.forward()})},Co=(n,t)=>{let{key:e,value:i}=t;i===null?n.delete(e):n.set(e,i)},vy=(n,t)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===Ie&&Sr(t[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},by=(n,t,e,i)=>{let r=n.doc,s=r.clientID,o=new Map;for(let a in i){let c=i[a],l=e.currentAttributes.get(a)??null;if(!Sr(l,c)){o.set(a,l);let{left:h,right:u}=e;e.right=new Fe(Yt(s,ze(r.store,s)),h,h&&h.lastId,u,u&&u.id,t,null,new Ie(a,c)),e.right.integrate(n,0),e.forward()}}return o},Mf=(n,t,e,i,r)=>{e.currentAttributes.forEach((d,f)=>{r[f]===void 0&&(r[f]=null)});let s=n.doc,o=s.clientID;vy(e,r);let a=by(n,t,e,r),c=i.constructor===String?new Wi(i):i instanceof Re?new Xi(i):new fs(i),{left:l,right:h,index:u}=e;t._searchMarker&&ka(t._searchMarker,e.index,c.getLength()),h=new Fe(Yt(o,ze(s.store,o)),l,l&&l.lastId,h,h&&h.id,t,null,c),h.integrate(n,0),e.right=h,e.index=u,e.forward(),_y(n,t,e,a)},$0=(n,t,e,i,r)=>{let s=n.doc,o=s.clientID;vy(e,r);let a=by(n,t,e,r);t:for(;e.right!==null&&(i>0||a.size>0&&(e.right.deleted||e.right.content.constructor===Ie));){if(!e.right.deleted)switch(e.right.content.constructor){case Ie:{let{key:c,value:l}=e.right.content,h=r[c];if(h!==void 0){if(Sr(h,l))a.delete(c);else{if(i===0)break t;a.set(c,l)}e.right.delete(n)}else e.currentAttributes.set(c,l);break}default:i<e.right.length&&Tr(n,Yt(e.right.id.client,e.right.id.clock+i)),i-=e.right.length;break}e.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;e.right=new Fe(Yt(o,ze(s.store,o)),e.left,e.left&&e.left.lastId,e.right,e.right&&e.right.id,t,null,new Wi(c)),e.right.integrate(n,0),e.forward()}_y(n,t,e,a)},My=(n,t,e,i,r)=>{let s=t,o=dn();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===Ie){let l=s.content;o.set(l.key,l)}s=s.right}let a=0,c=!1;for(;t!==s;){if(e===t&&(c=!0),!t.deleted){let l=t.content;switch(l.constructor){case Ie:{let{key:h,value:u}=l,d=i.get(h)??null;(o.get(h)!==l||d===u)&&(t.delete(n),a++,!c&&(r.get(h)??null)===u&&d!==u&&(d===null?r.delete(h):r.set(h,d))),!c&&!t.deleted&&Co(r,l);break}}}t=t.right}return a},WA=(n,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;let e=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===Ie){let i=t.content.key;e.has(i)?t.delete(n):e.add(i)}t=t.left}},XA=n=>{let t=0;return te(n.doc,e=>{let i=n._start,r=n._start,s=dn(),o=Al(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case Ie:Co(o,r.content);break;default:t+=My(e,i,r,s,o),s=Al(o),i=r;break}r=r.right}}),t},qA=n=>{let t=new Set,e=n.doc;for(let[i,r]of n.afterState.entries()){let s=n.beforeState.get(i)||0;r!==s&&sy(n,e.store.clients.get(i),s,r,o=>{!o.deleted&&o.content.constructor===Ie&&o.constructor!==bn&&t.add(o.parent)})}te(e,i=>{J0(n,n.deleteSet,r=>{if(r instanceof bn||!r.parent._hasFormatting||t.has(r.parent))return;let s=r.parent;r.content.constructor===Ie?t.add(s):WA(i,r)});for(let r of t)XA(r)})},j0=(n,t,e)=>{let i=e,r=Al(t.currentAttributes),s=t.right;for(;e>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case Xi:case fs:case Wi:e<t.right.length&&Tr(n,Yt(t.right.id.client,t.right.id.clock+e)),e-=t.right.length,t.right.delete(n);break}t.forward()}s&&My(n,s,t.right,r,t.currentAttributes);let o=(t.left||t.right).parent;return o._searchMarker&&ka(o._searchMarker,t.index,-i+e),t},Df=class extends wo{constructor(t,e,i){super(t,e),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){let t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){let t=this.target.doc,e=[];te(t,i=>{let r=new Map,s=new Map,o=this.target._start,a=null,c={},l="",h=0,u=0,d=()=>{if(a!==null){let f=null;switch(a){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(f={insert:l},r.size>0&&(f.attributes={},r.forEach((y,x)=>{y!==null&&(f.attributes[x]=y)}))),l="";break;case"retain":h>0&&(f={retain:h},h0(c)||(f.attributes=c0({},c))),h=0;break}f&&e.push(f),a=null}};for(;o!==null;){switch(o.content.constructor){case Xi:case fs:this.adds(o)?this.deletes(o)||(d(),a="insert",l=o.content.getContent()[0],d()):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=1):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=1);break;case Wi:this.adds(o)?this.deletes(o)||(a!=="insert"&&(d(),a="insert"),l+=o.content.str):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=o.length):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=o.length);break;case Ie:{let{key:f,value:y}=o.content;if(this.adds(o)){if(!this.deletes(o)){let x=r.get(f)??null;Sr(x,y)?y!==null&&o.delete(i):(a==="retain"&&d(),Sr(y,s.get(f)??null)?delete c[f]:c[f]=y)}}else if(this.deletes(o)){s.set(f,y);let x=r.get(f)??null;Sr(x,y)||(a==="retain"&&d(),c[f]=x)}else if(!o.deleted){s.set(f,y);let x=c[f];x!==void 0&&(Sr(x,y)?x!==null&&o.delete(i):(a==="retain"&&d(),y===null?delete c[f]:c[f]=y))}o.deleted||(a==="insert"&&d(),Co(r,o.content));break}}o=o.right}for(d();e.length>0;){let f=e[e.length-1];if(f.retain!==void 0&&f.attributes===void 0)e.pop();else break}}),this._delta=e}return this._delta}},Ga=class n extends Re{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Je(),this._length}_integrate(t,e){super._integrate(t,e);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}_callObserver(t,e){super._callObserver(t,e);let i=new Df(this,t,e);_h(this,t,i),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??Je();let t="",e=this._start;for(;e!==null;)!e.deleted&&e.countable&&e.content.constructor===Wi&&(t+=e.content.str),e=e.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:e=!0}={}){this.doc!==null?te(this.doc,i=>{let r=new Ha(null,this._start,0,new Map);for(let s=0;s<t.length;s++){let o=t[s];if(o.insert!==void 0){let a=!e&&typeof o.insert=="string"&&s===t.length-1&&r.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&Mf(i,this,r,a,o.attributes||{})}else o.retain!==void 0?$0(i,this,r,o.retain,o.attributes||{}):o.delete!==void 0&&j0(i,r,o.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,e,i){this.doc??Je();let r=[],s=new Map,o=this.doc,a="",c=this._start;function l(){if(a.length>0){let u={},d=!1;s.forEach((y,x)=>{d=!0,u[x]=y});let f={insert:a};d&&(f.attributes=u),r.push(f),a=""}}let h=()=>{for(;c!==null;){if(So(c,t)||e!==void 0&&So(c,e))switch(c.content.constructor){case Wi:{let u=s.get("ychange");t!==void 0&&!So(c,t)?(u===void 0||u.user!==c.id.client||u.type!=="removed")&&(l(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):e!==void 0&&!So(c,e)?(u===void 0||u.user!==c.id.client||u.type!=="added")&&(l(),s.set("ychange",i?i("added",c.id):{type:"added"})):u!==void 0&&(l(),s.delete("ychange")),a+=c.content.str;break}case Xi:case fs:{l();let u={insert:c.content.getContent()[0]};if(s.size>0){let d={};u.attributes=d,s.forEach((f,y)=>{d[y]=f})}r.push(u);break}case Ie:So(c,t)&&(l(),Co(s,c.content));break}c=c.right}l()};return t||e?te(o,u=>{t&&Cf(u,t),e&&Cf(u,e),h()},"cleanup"):h(),r}insert(t,e,i){if(e.length<=0)return;let r=this.doc;r!==null?te(r,s=>{let o=rh(s,this,t,!i);i||(i={},o.currentAttributes.forEach((a,c)=>{i[c]=a})),Mf(s,this,o,e,i)}):this._pending.push(()=>this.insert(t,e,i))}insertEmbed(t,e,i){let r=this.doc;r!==null?te(r,s=>{let o=rh(s,this,t,!i);Mf(s,this,o,e,i||{})}):this._pending.push(()=>this.insertEmbed(t,e,i||{}))}delete(t,e){if(e===0)return;let i=this.doc;i!==null?te(i,r=>{j0(r,rh(r,this,t,!0),e)}):this._pending.push(()=>this.delete(t,e))}format(t,e,i){if(e===0)return;let r=this.doc;r!==null?te(r,s=>{let o=rh(s,this,t,!1);o.right!==null&&$0(s,this,o,e,i)}):this._pending.push(()=>this.format(t,e,i))}removeAttribute(t){this.doc!==null?te(this.doc,e=>{fh(e,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{qf(i,this,t,e)}):this._pending.push(()=>this.setAttribute(t,e))}getAttribute(t){return Yf(this,t)}getAttributes(){return xy(this)}_write(t){t.writeTypeRef(uC)}},YA=n=>new Ga,Oa=class{constructor(t,e=()=>!0){this._filter=e,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??Je()}[Symbol.iterator](){return this}next(){let t=this._currentNode,e=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(e)))do if(e=t.content.type,!t.deleted&&(e.constructor===Wa||e.constructor===Eo)&&e._start!==null)t=e._start;else for(;t!==null;)if(t.right!==null){t=t.right;break}else t.parent===this._root?t=null:t=t.parent._item;while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}},Eo=class n extends Re{constructor(){super(),this._prelimContent=[]}get firstChild(){let t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Re?e.clone():e)),t}get length(){return this.doc??Je(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new Oa(this,t)}querySelector(t){t=t.toUpperCase();let i=new Oa(this,r=>r.nodeName&&r.nodeName.toUpperCase()===t).next();return i.done?null:i.value}querySelectorAll(t){return t=t.toUpperCase(),Vi(new Oa(this,e=>e.nodeName&&e.nodeName.toUpperCase()===t))}_callObserver(t,e){_h(this,t,new Nf(this,e,t))}toString(){return dy(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,e={},i){let r=t.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Va(this,s=>{r.insertBefore(s.toDOM(t,e,i),null)}),r}insert(t,e){this.doc!==null?te(this.doc,i=>{my(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}insertAfter(t,e){if(this.doc!==null)te(this.doc,i=>{let r=t&&t instanceof Re?t._item:t;dh(i,this,r,e)});else{let i=this._prelimContent,r=t===null?0:i.findIndex(s=>s===t)+1;if(r===0&&t!==null)throw Cn("Reference item not found");i.splice(r,0,...e)}}delete(t,e=1){this.doc!==null?te(this.doc,i=>{gy(i,this,t,e)}):this._prelimContent.splice(t,e)}toArray(){return uy(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return fy(this,t)}slice(t=0,e=this.length){return hy(this,t,e)}forEach(t){Va(this,t)}_write(t){t.writeTypeRef(fC)}},$A=n=>new Eo,Wa=class n extends Eo{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,e){super._integrate(t,e),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new n(this.nodeName)}clone(){let t=new n(this.nodeName),e=this.getAttributes();return l0(e,(i,r)=>{typeof i=="string"&&t.setAttribute(r,i)}),t.insert(0,this.toArray().map(i=>i instanceof Re?i.clone():i)),t}toString(){let t=this.getAttributes(),e=[],i=[];for(let a in t)i.push(a);i.sort();let r=i.length;for(let a=0;a<r;a++){let c=i[a];e.push(c+'="'+t[c]+'"')}let s=this.nodeName.toLocaleLowerCase(),o=e.length>0?" "+e.join(" "):"";return`<${s}${o}>${super.toString()}</${s}>`}removeAttribute(t){this.doc!==null?te(this.doc,e=>{fh(e,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{qf(i,this,t,e)}):this._prelimAttrs.set(t,e)}getAttribute(t){return Yf(this,t)}hasAttribute(t){return yy(this,t)}getAttributes(t){return t?VA(this,t):xy(this)}toDOM(t=document,e={},i){let r=t.createElement(this.nodeName),s=this.getAttributes();for(let o in s){let a=s[o];typeof a=="string"&&r.setAttribute(o,a)}return Va(this,o=>{r.appendChild(o.toDOM(t,e,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(t){t.writeTypeRef(dC),t.writeKey(this.nodeName)}},jA=n=>new Wa(n.readKey()),Nf=class extends wo{constructor(t,e,i){super(t,i),this.childListChanged=!1,this.attributesChanged=new Set,e.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}},Of=class n extends ds{constructor(t){super(),this.hookName=t}_copy(){return new n(this.hookName)}clone(){let t=new n(this.hookName);return this.forEach((e,i)=>{t.set(i,e)}),t}toDOM(t=document,e={},i){let r=e[this.hookName],s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(t){t.writeTypeRef(pC),t.writeKey(this.hookName)}},JA=n=>new Of(n.readKey()),zf=class n extends Ga{get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}toDOM(t=document,e,i){let r=t.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(t=>{let e=[];for(let r in t.attributes){let s=[];for(let o in t.attributes[r])s.push({key:o,value:t.attributes[r][o]});s.sort((o,a)=>o.key<a.key?-1:1),e.push({nodeName:r,attrs:s})}e.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<e.length;r++){let s=e[r];i+=`<${s.nodeName}`;for(let o=0;o<s.attrs.length;o++){let a=s.attrs[o];i+=` ${a.key}="${a.value}"`}i+=">"}i+=t.insert;for(let r=e.length-1;r>=0;r--)i+=`</${e[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(mC)}},ZA=n=>new zf,Xa=class{constructor(t,e){this.id=t,this.length=e}get deleted(){throw Rn()}mergeWith(t){return!1}write(t,e,i){throw Rn()}integrate(t,e){throw Rn()}},KA=0,bn=class extends Xa{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){e>0&&(this.id.clock+=e,this.length-=e),ry(t.doc.store,this)}write(t,e){t.writeInfo(KA),t.writeLen(this.length-e)}getMissing(t,e){return null}},qa=class n{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new n(this.content)}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeBuf(this.content)}getRef(){return 3}},QA=n=>new qa(n.readBuf()),mh=class n{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.len)}splice(t){let e=new n(this.len-t);return this.len=t,e}mergeWith(t){return this.len+=t.len,!0}integrate(t,e){ah(t.deleteSet,e.id.client,e.id.clock,this.len),e.markDeleted()}delete(t){}gc(t){}write(t,e){t.writeLen(this.len-e)}getRef(){return 1}},tC=n=>new mh(n.readLen()),Sy=(n,t)=>new hs({guid:n,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1}),Ya=class n{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;let e={};this.opts=e,t.gc||(e.gc=!1),t.autoLoad&&(e.autoLoad=!0),t.meta!==null&&(e.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new n(Sy(this.doc.guid,this.opts))}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){this.doc._item=e,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,e){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}},eC=n=>new Ya(Sy(n.readString(),n.readAny())),fs=class n{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new n(this.embed)}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeJSON(this.embed)}getRef(){return 5}},nC=n=>new fs(n.readJSON()),Ie=class n{constructor(t,e){this.key=t,this.value=e}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.key,this.value)}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){let i=e.parent;i._searchMarker=null,i._hasFormatting=!0}delete(t){}gc(t){}write(t,e){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}},iC=n=>new Ie(n.readKey(),n.readJSON()),Ff=class n{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}},rC=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++){let r=n.readString();r==="undefined"?e.push(void 0):e.push(JSON.parse(r))}return new Ff(e)},sC=Ca("node_env")==="development",To=class n{constructor(t){this.arr=t,sC&&Qd(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeAny(s)}}getRef(){return 8}},oC=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++)e.push(n.readAny());return new To(e)},Wi=class n{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new n(this.str)}splice(t){let e=new n(this.str.slice(t));this.str=this.str.slice(0,t);let i=this.str.charCodeAt(t-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,t-1)+"\uFFFD",e.str="\uFFFD"+e.str.slice(1)),e}mergeWith(t){return this.str+=t.str,!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeString(e===0?this.str:this.str.slice(e))}getRef(){return 4}},aC=n=>new Wi(n.readString()),cC=[HA,GA,YA,jA,$A,JA,ZA],lC=0,hC=1,uC=2,dC=3,fC=4,pC=5,mC=6,Xi=class n{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new n(this.type._copy())}splice(t){throw Rn()}mergeWith(t){return!1}integrate(t,e){this.type._integrate(t.doc,e)}delete(t){let e=this.type._start;for(;e!==null;)e.deleted?e.id.clock<(t.beforeState.get(e.id.client)||0)&&t._mergeStructs.push(e):e.delete(t),e=e.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(t.beforeState.get(i.id.client)||0)&&t._mergeStructs.push(i):i.delete(t)}),t.changed.delete(this.type)}gc(t){let e=this.type._start;for(;e!==null;)e.gc(t,!0),e=e.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(t,!0),i=i.left}),this.type._map=new Map}write(t,e){this.type._write(t)}getRef(){return 7}},gC=n=>new Xi(cC[n.readTypeRef()](n));var gh=(n,t,e)=>{let{client:i,clock:r}=t.id,s=new Fe(Yt(i,r+e),t,Yt(i,r+e-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e));return t.deleted&&s.markDeleted(),t.keep&&(s.keep=!0),t.redone!==null&&(s.redone=Yt(t.redone.client,t.redone.clock+e)),t.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),t.length=e,s};var Fe=class n extends Xa{constructor(t,e,i,r,s,o,a,c){super(t,c.getLength()),this.origin=i,this.left=e,this.right=r,this.rightOrigin=s,this.parent=o,this.parentSub=a,this.redone=null,this.content=c,this.info=this.content.isCountable()?2:0}set marker(t){(this.info&8)>0!==t&&(this.info^=8)}get marker(){return(this.info&8)>0}get keep(){return(this.info&1)>0}set keep(t){this.keep!==t&&(this.info^=1)}get countable(){return(this.info&2)>0}get deleted(){return(this.info&4)>0}set deleted(t){this.deleted!==t&&(this.info^=4)}markDeleted(){this.info|=4}getMissing(t,e){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=ze(e,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=ze(e,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===wr&&this.id.client!==this.parent.client&&this.parent.clock>=ze(e,this.parent.client))return this.parent.client;if(this.origin&&(this.left=G0(t,e,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=Tr(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===bn||this.right&&this.right.constructor===bn)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===n&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===n&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===wr){let i=bf(e,this.parent);i.constructor===bn?this.parent=null:this.parent=i.content.type}return null}integrate(t,e){if(e>0&&(this.id.clock+=e,this.left=G0(t,t.doc.store,Yt(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(e),this.length-=e),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;let s=new Set,o=new Set;for(;r!==null&&r!==this.right;){if(o.add(r),s.add(r),nh(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(nh(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&o.has(bf(t.doc.store,r.origin)))s.has(bf(t.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){let i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),ry(t.doc.store,this),this.content.integrate(t,this),X0(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new bn(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:Yt(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&nh(t.origin,this.lastId)&&this.right===t&&nh(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){let e=this.parent._searchMarker;return e&&e.forEach(i=>{i.p===t&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){let e=this.parent;this.countable&&this.parentSub===null&&(e._length-=this.length),this.markDeleted(),ah(t.deleteSet,this.id.client,this.id.clock,this.length),X0(t,e,this.parentSub),this.content.delete(t)}}gc(t,e){if(!this.deleted)throw _n();this.content.gc(t),e?AA(t,this,new bn(this.id,this.length)):this.content=new mh(this.length)}write(t,e){let i=e>0?Yt(this.id.client,this.id.clock+e-1):this.origin,r=this.rightOrigin,s=this.parentSub,o=this.content.getRef()&31|(i===null?0:128)|(r===null?0:64)|(s===null?0:32);if(t.writeInfo(o),i!==null&&t.writeLeftID(i),r!==null&&t.writeRightID(r),i===null&&r===null){let a=this.parent;if(a._item!==void 0){let c=a._item;if(c===null){let l=wA(a);t.writeParentInfo(!0),t.writeString(l)}else t.writeParentInfo(!1),t.writeLeftID(c.id)}else a.constructor===String?(t.writeParentInfo(!0),t.writeString(a)):a.constructor===wr?(t.writeParentInfo(!1),t.writeLeftID(a)):_n();s!==null&&t.writeString(s)}this.content.write(t,e)}},wy=(n,t)=>xC[t&31](n),xC=[()=>{_n()},tC,rC,QA,aC,nC,iC,gC,oC,eC,()=>{_n()}],yC=10,Mn=class extends Xa{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){_n()}write(t,e){t.writeInfo(yC),$t(t.restEncoder,this.length-e)}getMissing(t,e){return null}},Ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Ty="__ $YJS$ __";Ey[Ty]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Ey[Ty]=!0;var _C="nodes",vC="doc",$a="",Cy=n=>n.getMap(_C),Ry=n=>n.getMap(vC),bC=n=>n.map(t=>[t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.c]),MC=n=>n.map(t=>({x0:t[0],y0:t[1],z0:t[2],x1:t[3],y1:t[4],z1:t[5],c:t[6]})),qi=(n,t,e)=>n.get(t)===e?!1:(n.set(t,e),!0),SC=(n,t)=>{let e=bC(t),i=n.get("b");return i&&JSON.stringify(i)===JSON.stringify(e)?!1:(n.set("b",e),!0)};function wC(n){let t=[],e=(i,r,s)=>{t.push({node:i,parent:r,ord:s}),i.type==="scene"&&i.children.forEach((o,a)=>e(o,i.id,a))};return e(n,$a,0),t}function jf(n,t,e){let i=Cy(n),r=wC(t),s=new Set(r.map(a=>a.node.id)),o=!1;return te(n,()=>{let a=Ry(n);a.get("root")!==t.id&&(a.set("root",t.id),o=!0);for(let c of[...i.keys()])s.has(c)||(i.delete(c),o=!0);for(let c of r){let l=i.get(c.node.id);l||(l=new ds,i.set(c.node.id,l),o=!0);let h=c.node;o=qi(l,"t",h.type==="object"?"o":"s")||o,o=qi(l,"p",c.parent)||o,o=qi(l,"o",c.ord)||o,o=qi(l,"nm",h.name)||o,o=qi(l,"px",h.pos.x)||o,o=qi(l,"py",h.pos.y)||o,o=qi(l,"pz",h.pos.z)||o,o=qi(l,"r",h.rot)||o,o=qi(l,"vs",h.vis)||o,h.type==="object"&&(o=SC(l,h.boxes)||o)}},e),o}var EC=n=>((typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):0)%4+4)%4,$f=n=>typeof n=="number"&&Number.isFinite(n)?Math.round(n):0,TC=n=>typeof n=="number"&&Number.isFinite(n)?n:0,AC=["visible","deemphasized","hidden"],CC=n=>AC.includes(n)?n:"visible";function RC(n,t){let e=new Map(n);for(let i of e.keys()){let r=new Set([i]),s=i;for(;;){let o=e.get(s);if(o===void 0||o===$a||!e.has(o))break;if(r.has(o)){let a=[o];for(let l=e.get(o);l!==o;l=e.get(l))a.push(l);a.sort();let c=a[a.length-1];e.set(c,c===t?$a:t);break}r.add(o),s=o}}return e}var IC=(n,t)=>n[1]-t[1]||(n[0]<t[0]?-1:n[0]>t[0]?1:0);function Ro(n){let t=Cy(n),e=new Map;if(t.forEach((c,l)=>{let h=c.get("p");e.set(l,typeof h=="string"?h:$a)}),!e.size)return null;let i=Ry(n).get("root")??"";if(t.has(i)||(i=[...e].find(([,c])=>c===$a)?.[0]??""),!i)return null;let r=RC(e,i),s=new Map;for(let[c,l]of r){if(c===i)continue;let h=TC(t.get(c)?.get("o")),u=s.get(l);u?u.push([c,h]):s.set(l,[[c,h]])}for(let c of s.values())c.sort(IC);let o=c=>{let l=t.get(c);if(!l)return null;let h={id:c,name:typeof l.get("nm")=="string"?l.get("nm"):"",pos:{x:$f(l.get("px")),y:$f(l.get("py")),z:$f(l.get("pz"))},rot:EC(l.get("r")),vis:CC(l.get("vs"))};if(l.get("t")==="o"){let u=l.get("b");return{type:"object",...h,boxes:Array.isArray(u)?MC(u):[]}}return{type:"scene",...h,children:(s.get(c)??[]).map(([u])=>o(u)).filter(u=>u!==null)}},a=o(i);return a&&a.type==="scene"?a:null}var ja=()=>new hs;function Iy(n){let t=ja();return jf(t,n),t}var Jf=n=>ey(n);var LC="voxelier";var Ja="meta",Za="data",Io=null;function PC(){return Io||(Io=new Promise((n,t)=>{let e=indexedDB.open(LC,1);e.onupgradeneeded=()=>{let i=e.result;i.objectStoreNames.contains(Ja)||i.createObjectStore(Ja),i.objectStoreNames.contains(Za)||i.createObjectStore(Za)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Io.catch(()=>{Io=null}),Io)}function Lo(n,t,e){return PC().then(i=>new Promise((r,s)=>{let o=i.transaction(n,t),a=e(o.objectStore(n));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error),o.onabort=()=>s(o.error)}))}var Ly=(n,t)=>Lo(Za,"readwrite",e=>e.put(t,n)).then(()=>{}),Py=n=>Lo(Za,"readonly",t=>t.get(n)).then(t=>t instanceof Uint8Array?t:null),Uy=n=>Lo(Za,"readwrite",t=>t.delete(n)).then(()=>{}),Dy=n=>Lo(Ja,"readwrite",t=>t.put(n,n.id)).then(()=>{}),Ny=n=>Lo(Ja,"readwrite",t=>t.delete(n)).then(()=>{}),Zf=()=>Lo(Ja,"readonly",n=>n.getAll()).then(n=>n.filter(t=>t&&typeof t.id=="string")).then(n=>n.sort((t,e)=>(e.updated??0)-(t.updated??0)));var bh=Symbol("remote"),UC=Symbol("local"),pi=ja(),vh=null,Ka=null,Qf=null,Oy=()=>pi,zy=()=>vh,Fy=n=>{Qf=n},tp=n=>`doc:${n}`,DC=n=>`voxelier:doc:${n}`,Po="";function Mh(){if(vh===null)return;let n=vh;Ly(tp(n),Jf(pi)).catch(()=>{}),Dy({id:n,name:Po,updated:Date.now()}).catch(()=>{})}function ep(n){pi.off("update",Kf),pi=n,pi.on("update",Kf)}function Kf(n,t){t!==bh&&By({k:"u",b:n})}pi.on("update",Kf);function By(n){try{Ka?.postMessage(n)}catch{}}async function np(n){Ka?.close(),Ka=null,vh=n,typeof BroadcastChannel<"u"&&(Ka=new BroadcastChannel(DC(n)),Ka.onmessage=e=>{let i=e.data;!i||i.k!=="u"&&i.k!=="r"||!(i.b instanceof Uint8Array)||(i.k==="r"?OC(i.b):NC(i.b))});let t=null;try{t=await Py(tp(n))}catch{return null}if(!t)return null;try{let e=ja();xh(e,t,bh);let i=Ro(e);return i?(ep(e),Po=i.name,i):null}catch{return null}}async function ky(n){await Promise.all([Uy(tp(n)).catch(()=>{}),Ny(n).catch(()=>{})])}function NC(n){try{xh(pi,n,bh);let t=Ro(pi);return t&&(Po=t.name,Qf?.(t),Mh()),t}catch{return null}}function OC(n){try{let t=ja();xh(t,n,bh);let e=Ro(t);return e?(ep(t),Po=e.name,Qf?.(e),Mh(),e):null}catch{return null}}function ip(n){return Po=n.name,jf(pi,n,UC)?(Mh(),!0):!1}function rp(n){ep(Iy(n)),Po=n.name,Mh(),By({k:"r",b:Jf(pi)})}var zC="voxelier-v11",Vy="voxelier-ui-v1";function Ar(n){let t={id:n.id,nm:n.name,p:n.pos,r:n.rot,vs:n.vis};return n.type==="object"?{t:"o",...t,b:n.boxes.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c])}:{t:"s",...t,c:n.children.map(Ar)}}var FC={transparent:"deemphasized",invisible:"hidden"};function Bi(n){let t={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:FC[n.vs]||n.vs||"visible"};return n.t==="o"?{type:"object",...t,boxes:n.b.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]}))}:{type:"scene",...t,children:n.c.map(Bi)}}var Qa;function BC(){try{localStorage.setItem(Vy,JSON.stringify([...g.collapsed]))}catch{}}function je(){clearTimeout(Qa),Qa=void 0,Bx(JSON.stringify(Ar(g.root))),ip(g.root),BC()}function sp(){Qa===void 0&&(kx(JSON.stringify(Ar(g.root))),ip(g.root))}function fe(){clearTimeout(Qa),Qa=setTimeout(je,250)}function op(n){return!n||!n.root?null:(dl(n.uid||1),Bi(n.root))}function Sh(n){g.root=n,pa()}var Hy=()=>{try{let n=JSON.parse(localStorage.getItem(Vy));return Array.isArray(n)?n:[]}catch{return[]}};function Gy(){try{return op(JSON.parse(localStorage.getItem(zC)))}catch{return null}}var kC=2;function tc(n){let t=Me();return hn(n,t),{mn:t.min,mx:t.max}}var wh=n=>{let{mn:t,mx:e}=tc(n);return{x0:t.x,y0:t.y,z0:t.z,x1:e.x,y1:e.y,z1:e.z}};function Xy(n){if(!n.length)return[];let{mn:t}=tc(n);return n.map(e=>oa(e,-t.x,-t.y,-t.z))}function qy(n){let t=xd(g.editObject.boxes,n);g.sel3d={region:t.length?wh(t):{...n},boxes:t,lifted:!1},_r()}function ap(){let n=g.sel3d;!n||n.lifted||(je(),n.lifted=!0,da(n.region))}function cp(){HC();let n=g.sel3d;!n||!n.lifted||(n.lifted=!1,vl(n.boxes),n.boxes=xd(g.editObject.boxes,n.region),fe())}function Yi(){let n=g.sel3d;n&&(g.sel3d=null,n.lifted?(vl(n.boxes),fe()):_r())}function lp(){let n=g.sel3d;if(!n)return;let t=n.region,e=n.lifted;g.sel3d=null,e?_r():da(t),fe()}function hp(){g.sel3d&&g.sel3d.boxes.length&&Ux(Xy(g.sel3d.boxes))}function Yy(){hp(),lp()}function $y(n){if(!n.length)return;Yi();let t=Xy(n),e=0,i=0,r=0,s=g.editObject.boxes;if(s.length){let{mn:a,mx:c}=tc(s);e=c.x+kC,i=a.y,r=a.z}let o=t.map(a=>oa(a,e,i,r));g.sel3d={region:wh(o),boxes:o,lifted:!1},vl(o),fe()}function jy(n,t,e){let i=g.sel3d;if(!i||!n&&!t&&!e)return;let r=i.region;r.x0+=n,r.x1+=n,r.y0+=t,r.y1+=t,r.z0+=e,r.z1+=e,i.boxes=i.boxes.map(s=>oa(s,n,t,e)),_r()}function Wy(n,t,e){let{x:i,y:r,z:s}=n;for(let o=(e%4+4)%4;o>0;o--)if(t===0){let a=-s,c=r;r=a,s=c}else if(t===1){let a=-s,c=i;i=a,s=c}else{let a=-r,c=i;i=a,r=c}return{x:i,y:r,z:s}}function VC(n,t,e){let i=Wy({x:n.x0,y:n.y0,z:n.z0},t,e),r=Wy({x:n.x1-1,y:n.y1-1,z:n.z1-1},t,e);return{x0:Math.min(i.x,r.x),y0:Math.min(i.y,r.y),z0:Math.min(i.z,r.z),x1:Math.max(i.x,r.x)+1,y1:Math.max(i.y,r.y)+1,z1:Math.max(i.z,r.z)+1,c:n.c}}function Jy(){let n=Xt.matrixWorld.elements,t=ee({x:n[0],y:0,z:n[2]},-g.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var Eh=null;function up(){let n=g.sel3d;if(!n)return;let t=tc(n.boxes);Eh={boxes:n.boxes.map(e=>({...e})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function HC(){Eh=null}function Zy(n,t){let e=g.sel3d,i=Eh;if(!e||!i||!i.boxes.length)return;let r=(n%4+4)%4,s;if(!r)s=i.boxes.map(o=>({...o}));else{let o=t?Jy():1;s=i.boxes.map(u=>VC(u,o,r));let a=tc(s),c=dr(i.cx-(a.mn.x+a.mx.x)/2),l=dr(i.cy-(a.mn.y+a.mx.y)/2),h=dr(i.cz-(a.mn.z+a.mx.z)/2);s=s.map(u=>oa(u,c,l,h))}e.boxes=s,e.region=wh(s),_r()}function Ky(n,t){let e=g.sel3d,i=Eh;if(!e||!i||!i.boxes.length)return;let r=t?Jy():1,[s,o]=r===0?[i.cy,i.cz]:r===1?[i.cx,i.cz]:[i.cx,i.cy];e.boxes=Rx(i.boxes,n,r,s,o,(a,c,l)=>({x:a,y:c,z:l})),e.region=wh(e.boxes),_r()}function GC(){let n=g.sel3d;if(!n)return null;let t=n.region,e=new Ri;for(let i of[t.x0,t.x1])for(let r of[t.y0,t.y1])for(let s of[t.z0,t.z1])e.expandByPoint(Fi(i,r,s));return e}function dp(){let n=GC();return n?(gn.setFromCamera(ni,Xt),gn.ray.intersectsBox(n)):!1}function WC(n){if(!n.length)return[];let t=[[],[],[]];for(let _ of n)t[0].push(_.x0,_.x1),t[1].push(_.y0,_.y1),t[2].push(_.z0,_.z1);let e=t.map(_=>[...new Set(_)].sort((E,R)=>E-R)),i=e.map(_=>_.length-1),[r,s,o]=i;if(r*s*o>8e6)return n;let a=e.map(_=>new Map(_.map((E,R)=>[E,R]))),c=(_,E,R)=>(_*s+E)*o+R,l=new Int32Array(r*s*o);for(let _ of n){let E=a[0].get(_.x1),R=a[1].get(_.y1),I=a[2].get(_.z1);for(let C=a[0].get(_.x0);C<E;C++)for(let V=a[1].get(_.y0);V<R;V++)for(let M=a[2].get(_.z0);M<I;M++)l[c(C,V,M)]=_.c+1}let h=[],u=[],d=[],f=[];for(let _=0;_<r;_++)for(let E=0;E<s;E++)for(let R=0;R<o;R++)l[c(_,E,R)]&&(h.push(c(_,E,R)),u.push(_),d.push(E),f.push(R));let y=[u,d,f],x=new Uint8Array(r*s*o),p=_=>{x.fill(0);let E=Array.from({length:h.length},(V,M)=>M).sort((V,M)=>y[_[2]][V]-y[_[2]][M]||y[_[1]][V]-y[_[1]][M]||y[_[0]][V]-y[_[0]][M]),R=[0,0,0],I=(V,M,T,D)=>{if(M[T]>=i[T])return!1;let X=(T+1)%3,$=(T+2)%3;R[T]=M[T];for(let A=V[X];A<M[X];A++){R[X]=A;for(let O=V[$];O<M[$];O++){R[$]=O;let G=c(R[0],R[1],R[2]);if(x[G]||l[G]!==D)return!1}}return!0},C=[];for(let V of E){let M=h[V];if(x[M])continue;let T=l[M],D=[u[V],d[V],f[V]],X=[u[V]+1,d[V]+1,f[V]+1];for(let $ of _)for(;I(D,X,$,T);)X[$]++;for(let $=D[0];$<X[0];$++)for(let A=D[1];A<X[1];A++)for(let O=D[2];O<X[2];O++)x[c($,A,O)]=1;C.push({x0:e[0][D[0]],y0:e[1][D[1]],z0:e[2][D[2]],x1:e[0][X[0]],y1:e[1][X[1]],z1:e[2][X[2]],c:T-1})}return C},m=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],v=null;for(let _ of m){let E=p(_);(!v||E.length<v.length)&&(v=E)}return v}var XC=24,Qy=n=>n.reduce((t,e)=>t+(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0),0),fp=new WeakSet;function pp(n){if(n.boxes.length<XC||fp.has(n.boxes))return!1;let t=WC(n.boxes);return t.length<n.boxes.length&&Qy(t)===Qy(n.boxes)?(n.boxes=t,fp.add(t),!0):(fp.add(n.boxes),!1)}var mp=(n,t,e)=>{let i=new Set(g.selection);Yi(),e&&pp(e)&&sp(),g.selection=new Set([n]),g.editObject=null,oi(),g.context!==t||e?de():vr(i),qt()};function qC(){if(g.path.length<=1)return;let n=g.context,t=g.editObject;mp(g.path.pop().id,n,t)}function YC(){mp(g.editObject.id,g.context,g.editObject)}function t_(){g.editObject?YC():qC()}function mi(n){let t=un(n);if(!t)return;let e=g.context,i=g.editObject;g.path=t.slice(0,-1),mp(n.id,e,i)}function ps(n,t){let e=un(n);if(!e)return;let i=g.editObject;Yi(),i&&i!==n&&pp(i)&&sp(),n.type==="scene"?(g.path=e,g.editObject=null):(g.path=e.slice(0,-1),g.editObject=n),g.selection.clear(),g.tool="view",oi(),de(),qt(),t&&On()}var gi=null,He=null,ec=null,Uo=null,Fn=null,$C={visible:"\u25C9",deemphasized:"\u25D0",hidden:"\u29B0"},gp=(n,t)=>{let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,r=Math.min(255,(n&255)*t)|0;return`rgb(${e},${i},${r})`},Th=new Map;function e_(n){return n.type==="object"?"o"+n.boxes.map(t=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+n.children.map(t=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${e_(t)}`).join()}function jC(n){let t=Th.get(n.id);if(n===g.editObject&&t)return t.cv;let e=e_(n);if(t&&t.sig===e)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let r=i.getContext("2d");r.fillStyle="#0f1115",r.fillRect(0,0,52,52);let s=$r(n,{x:0,y:0,z:0},0,[]);if(s.length){let o=Me();hn(s,o);let{x:a,y:c,z:l}=o.min,{x:h,y:u,z:d}=o.max,f=40/Math.max(h-a,u-c,d-l,1),y=26-((a+h)/2-(l+d)/2)*f*.5,x=28+(c+u)/2*f*.6-((a+h)/2+(l+d)/2)*f*.28,p=(v,_,E)=>[y+(v-E)*f*.5,x-_*f*.6+(v+E)*f*.28],m=(v,_)=>{r.fillStyle=v,r.beginPath(),r.moveTo(_[0][0],_[0][1]);for(let E=1;E<_.length;E++)r.lineTo(_[E][0],_[E][1]);r.closePath(),r.fill()};s.sort((v,_)=>v.x0+v.x1+v.y0+v.y1+v.z0+v.z1-(_.x0+_.x1+_.y0+_.y1+_.z0+_.z1));for(let v of s)m(gp(v.c,.78),[p(v.x1,v.y0,v.z0),p(v.x1,v.y1,v.z0),p(v.x1,v.y1,v.z1),p(v.x1,v.y0,v.z1)]),m(gp(v.c,.6),[p(v.x0,v.y0,v.z1),p(v.x1,v.y0,v.z1),p(v.x1,v.y1,v.z1),p(v.x0,v.y1,v.z1)]),m(gp(v.c,1),[p(v.x0,v.y1,v.z0),p(v.x1,v.y1,v.z0),p(v.x1,v.y1,v.z1),p(v.x0,v.y1,v.z1)])}return Th.set(n.id,{sig:e,cv:i}),i}var ms=null;function xp(n){ms=n}function JC(n){if(n===g.root||Nn(n)!==g.context||g.editObject)mi(n);else{let t=new Set(g.selection);g.selection.has(n.id)?g.selection.delete(n.id):g.selection.add(n.id),vr(t),qt()}ms=n.id}function ZC(n){let t=g.context.children,e=ms?t.findIndex(a=>a.id===ms):-1,i=t.findIndex(a=>a.id===n.id);if(n===g.root||g.editObject||e<0||i<0){mi(n),ms=n.id;return}let r=new Set(g.selection),s=Math.min(e,i),o=Math.max(e,i);g.selection=new Set(t.slice(s,o+1).map(a=>a.id)),vr(r),qt()}function KC(n,t){if(t.shiftKey||t.ctrlKey||t.metaKey){Fn&&(clearTimeout(Fn.timer),Fn=null),t.shiftKey?ZC(n):JC(n);return}if(Fn&&Fn.node===n){clearTimeout(Fn.timer),Fn=null,ps(n,!0);return}Fn&&clearTimeout(Fn.timer),n===g.root?ps(n):mi(n),ms=n===g.root?null:n.id,Fn={node:n,timer:setTimeout(()=>Fn=null,300)}}function Oo(n){Ah();let e=document.querySelector(`#tree .trow[data-id="${n.id}"]`)?.querySelector(".nm");if(!e)return;let i=oe("input",{className:"nminput",value:n.name});i.placeholder=n===g.root?"Project":n.type==="scene"?"group":"object";let r=!1,s=o=>{r||(r=!0,o&&(n.name=i.value.trim(),fe()),qt())};i.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Enter"?s(!0):o.key==="Escape"&&s(!1)}),i.addEventListener("blur",()=>s(!0)),e.replaceWith(i),i.focus(),i.select()}function QC(n){let t=jC(n);if(t.className="thumb",t.onclick=null,t.title="",n!==g.root&&n.type==="scene"&&n.children.length){let e=g.collapsed.has(n.id);t.classList.add("group"),e&&t.classList.add("collapsed"),t.title=e?"Expand group":"Collapse group",t.onclick=i=>{i.stopPropagation(),e?g.collapsed.delete(n.id):g.collapsed.add(n.id),yp()}}return t}function tR(n,t){n.draggable=t!==g.root,t!==g.root&&n.addEventListener("dragstart",e=>{if(e.stopPropagation(),gi=t.id,e.dataTransfer){e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain",t.id)}catch{}}}),n.addEventListener("dragend",Do),n.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation(),eR(e,t,n)}),n.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation(),s_()})}function yp(){let n=document.getElementById("tree");n.innerHTML="";let t=(i,r)=>{let s=i===g.root,o=!s&&g.context.children.includes(i)&&g.selection.has(i.id),a=i.vis,c=oe("div",{className:"trow"+(s?" root":"")+(o?" sel":"")+(i===g.context&&!g.editObject?" ctx":"")+(i===g.editObject?" edit":"")+(!s&&a!=="visible"?" dim":"")});c.style.paddingLeft=4+r*13+"px",c.dataset.id=i.id;let l=QC(i),h=oe("span",{className:"nm"});if(s?h.textContent=i.name||"Project":i.name?h.textContent=i.name:h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>",h.onclick=u=>{!Fn&&!g.editObject&&!s&&g.selection.size===1&&g.selection.has(i.id)&&(u.stopPropagation(),Oo(i))},c.append(l,h),s||c.append(oe("button",{className:"tb"+(a==="visible"?" on":""),textContent:$C[a],title:"visible \u2192 deemphasized \u2192 hidden",onclick:u=>{u.stopPropagation(),o_(i)}})),c.onclick=u=>KC(i,u),c.oncontextmenu=u=>{u.preventDefault(),u.stopPropagation();let d=!s&&!g.editObject&&Nn(i)===g.context&&g.selection.has(i.id);!s&&!d&&mi(i),i_(i,u.clientX,u.clientY)},tR(c,i),n.appendChild(c),i.type==="scene"&&(s||!g.collapsed.has(i.id)))for(let u of i.children)t(u,r+1)};t(g.root,0);let e=new Set;(function i(r){e.add(r.id),r.type==="scene"&&r.children.forEach(i)})(g.root);for(let i of Th.keys())e.has(i)||Th.delete(i)}function Ah(){Uo&&(Uo.remove(),Uo=null,window.removeEventListener("pointerdown",n_,!0))}function n_(n){Uo&&!Uo.contains(n.target)&&Ah()}function i_(n,t,e){Ah();let i=oe("div",{className:"ctxmenu"}),r=(c,l,h)=>i.appendChild(oe("div",{className:"ctxitem"+(h?" "+h:""),textContent:c,onclick:()=>{Ah(),l()}})),s=()=>i.appendChild(oe("div",{className:"ctxdiv"})),o=n!==g.root&&Nn(n)===g.context&&g.selection.size>1&&g.selection.has(n.id);o||(r("Rename",()=>Oo(n)),r("Locate",()=>Ml(n)),s()),n!==g.root&&(r("Copy",()=>ic()),r("Duplicate",()=>o?Ch():h_(n)),r("Delete objects",()=>o?nc():u_(n),"danger"),s()),o?r("Group",()=>l_(n)):n.type==="scene"?(n!==g.root&&r("Ungroup",()=>d_(n)),so()&&r("Paste",()=>Rh(n)),r("New object",()=>f_(n)),r("New group",()=>p_(n))):r("New group",()=>c_(n)),document.body.appendChild(i),Uo=i;let a=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-a.width-4)+"px",i.style.top=Math.min(e,innerHeight-a.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",n_,!0),0)}function Do(){ec&&ec.classList.remove("drop-into","drop-before","drop-after"),ec=null,He=null}function r_(){let n=gi&&ke(gi);return!n||g.editObject||Nn(n)!==g.context||!g.selection.has(n.id)||g.selection.size<=1?null:g.context.children.filter(t=>g.selection.has(t.id))}function eR(n,t,e){let i=gi&&ke(gi);if(!i||i===t){Do();return}let r=r_();if(r?r.some(u=>u===t||Yr(u,t)):Yr(i,t)){Do();return}if(Do(),ec=e,t===g.root){He={parent:g.root,index:g.root.children.length},e.classList.add("drop-into");return}let o=e.getBoundingClientRect(),a=n.clientY-o.top,c=o.height,l=Nn(t),h=l?l.children.indexOf(t):0;a>c*.28&&a<c*.72&&(t.type==="scene"||!r)?(t.type==="scene"?He={parent:t,index:t.children.length}:He={wrap:t},e.classList.add("drop-into")):a<c*.5?(He={parent:l,index:h},e.classList.add("drop-before")):(He={parent:l,index:h+1},e.classList.add("drop-after"))}function s_(){let n=gi&&ke(gi);if(n&&He){let t=He.parent?r_():null;if(t){let e=He.parent,i=He.index,r=!1;for(let s of t)No(s,e,i)&&(i=e.children.indexOf(s)+1,r=!0);if(r){g.collapsed.delete(e.id);let s=un(e);s&&(g.path=s),g.editObject=null,g.selection=new Set(t.map(o=>o.id)),de(),qt(),fe()}}else He.wrap?a_(He.wrap,n):He.parent&&No(n,He.parent,He.index)&&(g.collapsed.delete(He.parent.id),mi(n),fe())}Do(),gi=null}{let n=document.getElementById("tree");n.addEventListener("dragover",t=>{if(t.target===n&&gi){t.preventDefault(),Do(),He={parent:g.root,index:g.root.children.length};let e=[...n.querySelectorAll(".trow")].filter(r=>r.dataset.id!==gi),i=e[e.length-1];i&&(i.classList.add("drop-after"),ec=i)}}),n.addEventListener("drop",t=>{t.target===n&&(t.preventDefault(),s_())})}document.getElementById("side").addEventListener("click",n=>{if(n.target.closest(".trow, button, input")||!g.selection.size)return;let t=new Set(g.selection);g.selection.clear(),ms=null,vr(t),qt()});document.getElementById("side").addEventListener("contextmenu",n=>{n.target.closest(".trow, button, input")||(n.preventDefault(),i_(g.root,n.clientX,n.clientY))});var xi=()=>{de(),qt(),fe()};function o_(n){n.vis=ix[n.vis],xi()}var _p=()=>[...g.selection].map(n=>zi(n)).filter(n=>!!n),m_=(n,t)=>{let e=qr();e.pos={x:Math.round(jt.target.x),y:0,z:Math.round(jt.target.z)},n.children.push(e),g.collapsed.delete(n.id),ps(e,t),fe(),Oo(e)};function g_(){m_(g.context,!0)}function nc(){g.selection.size&&(g.context.children=g.context.children.filter(n=>!g.selection.has(n.id)),g.selection.clear(),xi())}function Ch(){let n=_p().map(pr);n.length&&(g.context.children.push(...n),g.selection=new Set(n.map(t=>t.id)),xi())}function ic(){let n=_p().map(pr);n.length&&Px(n)}function x_(){ic(),nc()}function Rh(n=g.context){if(so()==="vox"){nR(n);return}let t=Sl().map(pr);t.length&&(n.children.push(...t),y_(n),g.selection=new Set(t.map(e=>e.id)),xi())}function nR(n){let t=wl();if(!t.length)return;let e=qr();e.boxes=t.map(s=>({...s}));let i=to(n),r=ee({x:jt.target.x-i.off.x,y:0,z:jt.target.z-i.off.z},-i.rot);e.pos={x:Math.round(r.x),y:0,z:Math.round(r.z)},n.children.push(e),y_(n),g.selection=new Set([e.id]),xi()}function y_(n){g.collapsed.delete(n.id),n!==g.context&&(g.path=un(n)??g.path,g.editObject=null)}function No(n,t,e){if(n===t||Yr(n,t))return!1;let i=Nn(n);if(!i)return!1;let r=Di(to(i),{off:{...n.pos},rot:n.rot}),s=Di(pd(to(t)),r),o=i.children.indexOf(n);return i.children.splice(o,1),i===t&&o<e&&e--,n.pos={x:Math.round(s.off.x),y:Math.round(s.off.y),z:Math.round(s.off.z)},n.rot=s.rot&3,t.children.splice(Math.max(0,Math.min(e,t.children.length)),0,n),!0}function __(n){let t=Nn(n);if(!t)return null;let e=t.children.indexOf(n),i=Oi("Group");return i.pos={...n.pos},i.rot=n.rot,t.children.splice(e,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function a_(n,t){if(t===n||Yr(t,n))return!1;let e=__(n);return e?(No(t,e,e.children.length),g.collapsed.delete(e.id),g.selection=new Set([e.id]),xi(),!0):!1}function c_(n){let t=__(n);t&&(g.collapsed.delete(t.id),mi(t),fe(),Oo(t))}function l_(n){let t=_p();if(t.length<2)return;let e=Oi("Group");e.pos={...n.pos},e.rot=n.rot;let i=g.context.children.indexOf(n);g.context.children.splice(Math.max(0,i),0,e);for(let r of t)No(r,e,e.children.length);g.collapsed.delete(e.id),g.selection=new Set([e.id]),xi()}function h_(n){let t=Nn(n);if(!t)return;let e=pr(n);t.children.splice(t.children.indexOf(n)+1,0,e),mi(e),fe()}function u_(n){let t=Nn(n);t&&(t.children=t.children.filter(e=>e!==n),g.selection.delete(n.id),g.editObject===n&&(g.editObject=null),xi())}function d_(n){let t=Nn(n);if(!t)return;let e=[...n.children],i=t.children.indexOf(n);for(let r of e)No(r,t,i),i=t.children.indexOf(r)+1;t.children=t.children.filter(r=>r!==n),g.selection=new Set(e.map(r=>r.id)),xi()}function f_(n){m_(n,!1)}function p_(n){let t=Oi("Group");n.children.push(t),g.collapsed.delete(n.id),mi(t),fe(),Oo(t)}function vp(n){let t=[...g.selection];if(!t.length)return;let e=n<0?3:1,i=Qs(),r=pd(i),s=o=>jn(o,ii(i.off,ee(o.pos,i.rot)),i.rot+o.rot&3,Me());for(let o=0;o<Math.abs(n);o++){let a=Me();for(let d of t){let f=s(zi(d));f.min.x<a.min.x&&(a.min.x=f.min.x),f.min.z<a.min.z&&(a.min.z=f.min.z),f.max.x>a.max.x&&(a.max.x=f.max.x),f.max.z>a.max.z&&(a.max.z=f.max.z)}let c=(a.min.x+a.max.x)/2,l=(a.min.z+a.max.z)/2,h=ee({x:c,y:0,z:l},e),u={rot:e,off:{x:c-h.x,y:0,z:l-h.z}};for(let d of t){let f=zi(d);if(!f)continue;let y=Di(i,{off:f.pos,rot:f.rot}),x=Di(r,Di(u,y));f.pos={x:dr(x.off.x),y:dr(x.off.y),z:dr(x.off.z)},f.rot=x.rot&3}}de()}function v_(){g.selection.size&&(vp(1),qt(),fe())}function bp(n){for(let t of g.selection){let e=zi(t);e&&(e.pos.y+=n)}g.selection.size&&xi()}var Zt=n=>Math.floor(n/10),me=pl,zo=(n,t)=>{let e=qr();return e.name=n,e.boxes=t,e},Mp=(n,t,e,i,r,s)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s});function Sp(){let n=Zt(4465),t=Zt(2985),e=Zt(2700),i=Zt(150),r=zo("Floor",[ue(0,0,0,n,1,t,me[9])]),s=Zt(800),o=Zt(2100),a=n-Zt(515)-s,c=n-Zt(900)-s,l=[ue(0,1,0,n,e+1,i,me[5]),ue(0,1,t-i,n,e+1,t,me[5]),ue(0,1,i,i,e+1,t-i,me[5]),ue(n-i,1,i,n,e+1,t-i,me[5])];l=Xr(l,Mp(a,1,0,a+s,o+1,i)),l=Xr(l,Mp(c,1,t-i,c+s,o+1,t)),l=Xr(l,Mp(0,Zt(900),Zt(600),i,Zt(2100),t-Zt(600)));let h=zo("Walls",l);h.vis="deemphasized";let u=Zt(1500),d=Zt(2e3),f=zo("Bed",[ue(0,0,0,8,14,8,me[7]),ue(u-8,0,0,u,14,8,me[7]),ue(0,0,d-8,8,14,d,me[7]),ue(u-8,0,d-8,u,14,d,me[7]),ue(0,14,0,u,20,d,me[6]),ue(2,20,0,u-2,24,d-Zt(400),me[10])]);f.pos={x:i+3,y:1,z:t-i-d};let y=Zt(1400),x=Zt(700),p=Zt(740),m=zo("Desk",[ue(0,p-4,0,y,p,x,me[8]),ue(0,0,0,6,p-4,6,me[7]),ue(y-6,0,0,y,p-4,6,me[7]),ue(0,0,x-6,6,p-4,x,me[7]),ue(y-6,0,x-6,y,p-4,x,me[7])]),v=Zt(600),_=v-30>>1,E=v>>1,R=zo("Computer",[ue(_,0,0,_+30,2,18,me[11]),ue(E-2,2,7,E+2,Zt(160),11,me[11]),ue(0,Zt(160),6,v,Zt(520),9,me[13])]);R.pos={x:Zt(400),y:p,z:Zt(420)};let I=Oi();I.name="Desk + Computer",I.pos={x:n-i,y:1,z:Zt(900)},I.rot=1,I.children=[m,R];let C=D=>zo(D,[ue(-10,0,-10,11,30,11,me[4]),ue(-2,30,-2,3,54,3,me[14]),ue(-16,54,-16,17,78,17,me[14]),ue(-12,78,-12,13,92,13,me[14])]),V=C("Plant"),M=C("Plant");V.pos={x:n-i-Zt(300),y:1,z:i+Zt(300)},M.pos={x:i+Zt(300),y:1,z:i+Zt(300)};let T=Oi();return T.children=[r,h,f,I,V,M],T}var wp="voxelier-last",b_="doc",Ep=Zf,iR=()=>{let n=new Uint8Array(8);return crypto.getRandomValues(n),[...n].map(t=>t.toString(36).padStart(2,"0")).join("")},M_=()=>new URLSearchParams(location.hash.replace(/^#/,""));function rR(){let n=M_().get(b_);return n&&/^[0-9a-z]{4,32}$/.test(n)?n:null}function Tp(n){let t=M_();t.set(b_,n),history.replaceState(null,"",`#${t.toString()}`)}var Ap=n=>{try{localStorage.setItem(wp,n)}catch{}},S_=()=>{try{return localStorage.getItem(wp)}catch{return null}};async function Fo(n){let t=await np(n);return t?(Ap(n),Tp(n),t):null}async function sR(n){let t=await Fo(n);if(t)return t;let e=Sp();return rp(e),Ap(n),Tp(n),e}async function gs(n){let t=iR();await np(t);let e=n??Sp();return rp(e),Ap(t),Tp(t),e}async function w_(n){if(await ky(n),S_()===n)try{localStorage.removeItem(wp)}catch{}}var E_=()=>zy();async function T_(n){let t=rR();if(t)return await sR(t);let e=S_();if(e){let i=await Fo(e);if(i)return i}try{let[i]=await Zf();if(i){let r=await Fo(i.id);if(r)return r}}catch{}return await gs(n()??void 0)}function Cp(){return JSON.stringify({uid:ul(),root:Ar(g.root),collapsed:[...g.collapsed]})}function A_(){let n=Cp(),t=URL.createObjectURL(new Blob([n],{type:"application/json"})),e=g.root.name||"Project",i=a=>String(a).padStart(2,"0"),r=new Date,s=`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())} ${i(r.getHours())}h${i(r.getMinutes())}m${i(r.getSeconds())}s`,o=document.createElement("a");o.href=t,o.download=`${e} -- ${s}.voxelier.json`,o.click(),URL.revokeObjectURL(t)}async function Rp(n){let t=op(JSON.parse(n));if(!t)throw new Error("not a Voxelier scene file");g.root=await gs(t),g.collapsed=new Set,g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.tool==="measure"&&(g.tool="view"),oi(),de(),qt(),On(),pa(),je()}function C_(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let t=n.files&&n.files[0];if(!t)return;let e=new FileReader;e.onload=async()=>{try{await Rp(e.result)}catch(i){alert("Import failed: "+i.message)}},e.readAsText(t)},n.click()}var Uh={view:"\u{1F441}",add:"\uFF0B",erase:"\uFF0D",paint:"\u{1FAA3}",eyedropper:"\u{1F4A7}",select:"\u2B1A",measure:"\u{1F4CF}"},oR=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],R_=(n,t,e,i)=>oe("button",{className:"tool"+(e?" active":""),innerHTML:`<span class="ic">${n}</span>${t}`,onclick:i});function I_(n){g.tool!==n&&(Yi(),g.tool=n,g.eyedropReturn=null,cn.visible=!1,oi(),qt())}function qt(){let n=document.getElementById("tools");n.innerHTML="",!g.editObject&&g.tool!=="measure"&&(g.tool="view");let t=oe("div",{className:"toolgroup"}),e=g.editObject?oR:[{id:"view",label:"View"}];for(let i of e)t.appendChild(R_(Uh[i.id],i.label,g.tool===i.id,()=>I_(i.id)));if(t.appendChild(R_(Uh.measure,"Measure",g.tool==="measure",()=>I_("measure"))),g.editObject&&t.appendChild(mR()),n.append(t),Lh(),g.tool==="view"){let i=document.getElementById("toolcursor");i&&(i.style.display="none")}yp()}document.getElementById("btn-save").onclick=A_;document.getElementById("btn-load").onclick=C_;var aR=document.getElementById("btn-docs"),sc=document.getElementById("docslist"),cR=document.getElementById("docname");function Ip(n){Sh(n),g.collapsed=new Set,g.path=[n],g.editObject=null,g.sel3d=null,g.selection.clear(),g.tool==="measure"&&(g.tool="view"),oi(),de(),qt(),On(),je()}function Lh(){cR.textContent=g.root&&g.root.name||"Project"}async function Ph(){let n=E_(),t=[];try{t=await Ep()}catch{}sc.innerHTML="";for(let e of t){let i=oe("div",{className:"docrow"+(e.id===n?" here":"")});i.append(oe("button",{className:"docopen",textContent:e.name||"Project",title:new Date(e.updated).toLocaleString(),onclick:async()=>{if(e.id===n)return;let r=await Fo(e.id);r&&Ip(r),await Ph(),Lh()}})),i.append(oe("button",{className:"docdel",textContent:"\u2715",title:"Delete this document",onclick:async()=>{if(confirm(`Delete "${e.name||"Project"}"? This cannot be undone.`)){if(await w_(e.id),e.id===n){let[r]=await Ep().catch(()=>[]),s=r?await Fo(r.id)??await gs():await gs();Ip(s),Lh()}await Ph()}}})),sc.append(i)}sc.append(oe("button",{className:"docnew",textContent:"\uFF0B New document",onclick:async()=>{Ip(await gs()),Lh(),await Ph()}}))}aR.onclick=async()=>{let n=sc.hasAttribute("hidden");sc.hidden=!n,n&&await Ph()};var Ih={ver:-1,cols:[]};function lR(){if(Ih.ver===g.voxVer)return Ih.cols;let n=new Map;return function t(e){e.type==="object"?Zg(e.boxes,n):e.children.forEach(t)}(g.root),Ih={ver:g.voxVer,cols:[...n.entries()].sort((t,e)=>e[1]-t[1]).map(t=>t[0])},Ih.cols}var Lp=[];function Dh(n){Lp=[n,...Lp.filter(t=>t!==n)].slice(0,6)}function Pp(n){g.selColor=n,qt()}function hR(){let n=[];for(let t of[...Lp,...lR(),...pl])if(n.includes(t)||n.push(t),n.length>=6)break;return n}var uR=n=>{let t=oe("div",{className:"sw"+(n===g.selColor?" active":""),title:Ni(n),onclick:()=>Pp(n)});return t.style.background=Ni(n),t};function dR(){g.tool!=="eyedropper"&&(g.eyedropReturn=g.tool,Yi(),g.tool="eyedropper",qt())}function fR(n){let t=(n>>16&255)/255,e=(n>>8&255)/255,i=(n&255)/255,r=Math.max(t,e,i),s=Math.min(t,e,i),o=r-s,a=0;return o&&(r===t?a=(e-i)/o%6:r===e?a=(i-t)/o+2:a=(t-e)/o+4,a=(a*60+360)%360),[Math.round(a),Math.round((r?o/r:0)*100),Math.round(r*100)]}function rc(n,t,e){t/=100,e/=100;let i=e*t,r=i*(1-Math.abs(n/60%2-1)),s=e-i,[o,a,c]=n<60?[i,r,0]:n<120?[r,i,0]:n<180?[0,i,r]:n<240?[0,r,i]:n<300?[r,0,i]:[i,0,r],l=h=>Math.round((h+s)*255);return l(o)<<16|l(a)<<8|l(c)}var pR=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function mR(){let n=oe("div",{className:"colorctl"}),t=oe("div",{className:"colorbtn",title:"Draw colour \u2014 hover for recent colours / sliders"});t.style.background=Ni(g.selColor);let e=oe("div",{className:"colorflyout"}),i=oe("div",{className:"sliders"}),r={},[s,o,a]=fR(g.selColor),c={h:s,s:o,v:a},l=()=>{r.s.style.background=`linear-gradient(to right,${Ni(rc(c.h,0,c.v))},${Ni(rc(c.h,100,c.v))})`,r.v.style.background=`linear-gradient(to right,${Ni(rc(c.h,c.s,0))},${Ni(rc(c.h,c.s,100))})`},h=()=>{c.h=+r.h.value,c.s=+r.s.value,c.v=+r.v.value,g.selColor=rc(c.h,c.s,c.v),t.style.background=Ni(g.selColor),l()};for(let f of pR){let y=oe("div",{className:"sliderline"}),x=oe("input",{type:"range",className:"csl",title:f.title});x.min="0",x.max=String(f.max),x.value=String(c[f.key]),r[f.key]=x,x.addEventListener("input",h),y.append(oe("span",{className:"lbl",textContent:f.label,title:f.title}),x),i.appendChild(y)}r.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",l();let u=oe("div",{className:"sliderrow"});u.append(i,oe("div",{className:"sw more",textContent:"\u{1F4A7}",title:"Pick a colour from a voxel (eyedropper)",onclick:dR}));let d=oe("div",{className:"swrow"});for(let f of hR())d.appendChild(uR(f));return e.append(u,d),n.append(t,e),n}{let n=document.getElementById("app"),t=e=>{n.classList.toggle("side-hidden",e),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||g.drag||g.painting)return;let t=n.key.toLowerCase();if(n.ctrlKey||n.metaKey){if(t==="z"){n.preventDefault(),n.shiftKey?ma():Tl();return}if(t==="y"){n.preventDefault(),ma();return}if(g.editObject){t==="c"?(hp(),n.preventDefault()):t==="x"?(Yy(),n.preventDefault()):t==="v"&&(gR(),n.preventDefault());return}let i={c:ic,x:x_,v:Rh,d:Ch}[t];i&&(i(),n.preventDefault());return}switch(t){case"f":On();break;case"escape":t_();break;case"n":g.editObject||g_();break;case"r":g.editObject||v_();break;case"[":g.editObject||bp(-1);break;case"]":g.editObject||bp(1);break;case"delete":case"backspace":n.preventDefault(),g.editObject?lp():nc();break}});function gR(){let n=[];if(so()==="node")for(let t of Sl())$r(t,t.pos,t.rot,n);else n.push(...wl());n.length&&(g.tool="select",$y(n),qt())}var L_=["x","y","z"],P_={x:0,y:0,z:0},U_=n=>`x${n.min.x}..${n.max.x} y${n.min.y}..${n.max.y} z${n.min.z}..${n.max.z}`,D_=n=>`(${n.max.x-n.min.x}x${n.max.y-n.min.y}x${n.max.z-n.min.z})`,xR=n=>n==="visible"?"":` [${n}]`,Up=n=>`${n.id} ${n.type==="scene"?"S":"O"} "${n.name}"${xR(n.vis)}`,Bo=(n,t)=>{let e=un(t,n),i=e?Zs(e):{off:P_,rot:0},r=jn(t,i.off,i.rot,Me());return xn(r)?null:r},Np=n=>{let t=n?ke(n):g.root;if(!t)throw new Error(`unknown node id: ${n}`);return Bo(g.root,t)},yR=n=>{let t=Zs(un(n));return $r(n,t.off,t.rot,[])},Dp=(n,t)=>!t||xn(t)?`${Up(n)} [empty]`:`${Up(n)} ${U_(t)} ${D_(t)}${n.rot?` rot${n.rot*90}`:""}`;function N_(n,{depth:t=2,hidden:e=!1}={}){let i=n?ke(n):g.root;if(!i)throw new Error(`unknown node id: ${n}`);let r=[],s=(o,a)=>{let c=o.vis==="hidden"&&!e,l=c&&o.type==="scene"&&o.children.length?` (${o.children.length} children)`:"";if(r.push("  ".repeat(a)+(c?Up(o)+l:Dp(o,Bo(i,o)))),!(c||o.type==="object"||a>=t))for(let h of o.children)s(h,a+1)};return s(i,0),r.join(`
`)}function _R(n,t){let e=null;for(let i of n)for(let r of t){let s=[i.x0<r.x1&&r.x0<i.x1,i.y0<r.y1&&r.y0<i.y1,i.z0<r.z1&&r.z0<i.z1];if(s[0]&&s[1]&&s[2])return{kind:"overlap",axis:-1,gap:0};let o=[Math.max(i.x0-r.x1,r.x0-i.x1,0),Math.max(i.y0-r.y1,r.y0-i.y1,0),Math.max(i.z0-r.z1,r.z0-i.z1,0)],a=Math.max(...o);(!e||a<e.gap)&&(e=a===0?{kind:"touch",axis:s.indexOf(!1),gap:0}:{kind:"gap",axis:o.indexOf(a),gap:a})}return e}function O_(n,{within:t=60}={}){let e;n!==void 0?e=(typeof n=="string"?[n]:n).map(s=>{let o=ke(s);if(!o)throw new Error(`unknown node id: ${s}`);return o}):e=g.root.children.flatMap(s=>s.vis==="hidden"?[]:s.type==="scene"&&s.name==="Immutable"?s.children.filter(o=>o.vis!=="hidden"):[s]);let i=e.filter(s=>(un(s)??[]).every(o=>o.vis!=="hidden")).map(s=>({n:s,boxes:yR(s)})).filter(s=>s.boxes.length),r=[];for(let[s,o]of i.entries())for(let a of i.slice(s+1)){let c=_R(o.boxes,a.boxes);if(!c||c.kind==="gap"&&c.gap>t)continue;let l=c.kind==="overlap"?"overlap":`${L_[c.axis]} ${c.kind}${c.gap?` ${c.gap}`:""}`;r.push(`${o.n.id} "${o.n.name}" ${c.kind==="overlap"?"~":"|"} ${a.n.id} "${a.n.name}": ${l}`)}return r.join(`
`)}function Op(n){let t=JSON.parse(n),e=Bi(t.root??t),i=[],r=o=>{let a=ke(o.id,e);if(!a)return void i.push(`+ ${Dp(o,Bo(g.root,o))}`);let c=[],l=o.pos.x-a.pos.x,h=o.pos.y-a.pos.y,u=o.pos.z-a.pos.z;if(l||h||u){let d=Bo(g.root,o),f=[l,h,u].map((y,x)=>y?`\u0394${L_[x]}${y>0?"+":""}${y}`:"").filter(Boolean).join(" ");c.push(`moved ${f} (now ${d?U_(d):"[empty]"})`)}if(o.rot!==a.rot&&c.push(`rotated to ${o.rot*90}\xB0`),o.vis!==a.vis&&c.push(`${a.vis}\u2192${o.vis}`),o.type==="object"&&a.type==="object"){let d=Bo(g.root,o);JSON.stringify(o.boxes)!==JSON.stringify(a.boxes)&&d&&c.push(`resized ${D_(d)}`)}if(c.length&&i.push(`~ ${o.id} "${o.name}" ${c.join("; ")}`),o.type==="scene")for(let d of o.children)r(d)};r(g.root);let s=o=>{if(!ke(o.id,g.root))return void i.push(`- ${Dp(o,Bo(e,o))}`);if(o.type==="scene")for(let a of o.children)s(a)};return s(e),i.join(`
`)}var vR=new Set(["top","front","side","iso"]);function bR(n,t){let e=new P((t.min.x+t.max.x)/2,(t.min.y+t.max.y)/2,(t.min.z+t.max.z)/2),i=Math.max(1,t.max.x-t.min.x),r=Math.max(1,t.max.y-t.min.y),s=Math.max(1,t.max.z-t.min.z),o=[i,r,s],a=Math.hypot(i,r,s),c=a*2+100;if(n==="iso"){let y=a/2,x=y/Math.sin(al.degToRad(35/2))*1.08,p=Math.atan(1/Math.SQRT2),m=Dt.azim,v=new rn(35,1,x-y*3,x+y*3);return v.position.copy(e).add(new P(Math.cos(p)*Math.sin(m),Math.sin(p),Math.cos(p)*Math.cos(m)).multiplyScalar(x)),v.lookAt(e),{camera:v,half:0}}let l=n==="top"?[0,2]:n==="front"?[0,1]:[2,1],h=Math.max(o[l[0]],o[l[1]])/2*1.12+2,u=n==="top"?[0,1,0]:n==="front"?[0,0,1]:[1,0,0],d=new ar(-h,h,h,-h,.1,c+a*2);return d.position.copy(e).add(new P(u[0],u[1],u[2]).normalize().multiplyScalar(c)),n==="top"&&d.up.set(0,0,-1),d.lookAt(e),{camera:d,half:h}}function MR(n,t,e,i){let r=t/(2*i),s=t/2,o=(e.min.x+e.max.x)/2,a=(e.min.z+e.max.z)/2;n.strokeStyle="rgba(0,0,0,0.14)",n.lineWidth=1;for(let c=Math.ceil((o-i)/5)*5;c<=o+i;c+=5){let l=s+(c-o)*r;n.beginPath(),n.moveTo(l,0),n.lineTo(l,t),n.stroke()}for(let c=Math.ceil((a-i)/5)*5;c<=a+i;c+=5){let l=s+(c-a)*r;n.beginPath(),n.moveTo(0,l),n.lineTo(t,l),n.stroke()}n.strokeStyle="#111",n.lineWidth=2,n.beginPath(),n.moveTo(18,t-20),n.lineTo(18+10*r,t-20),n.stroke(),n.font="12px ui-monospace, monospace",n.fillStyle="#111",n.fillText("1 m",18,t-26)}function SR(n,t,e,i){n.font="bold 11px ui-monospace, monospace",n.textAlign="center",n.textBaseline="middle";for(let{id:r,b:s}of i){let o=new P((s.min.x+s.max.x)/2,(s.min.y+s.max.y)/2,(s.min.z+s.max.z)/2).project(t),a=(o.x*.5+.5)*e,c=(1-(o.y*.5+.5))*e;a<0||c<0||a>e||c>e||(n.lineWidth=3,n.strokeStyle="#fff",n.strokeText(r,a,c),n.fillStyle="#111",n.fillText(r,a,c))}}function z_(n,t={}){if(!vR.has(n))throw new Error(`unknown view "${n}": use top, front, side or iso`);let e=Math.max(64,Math.min(2048,Math.round(t.size??900))),i=t.focus===void 0?[]:typeof t.focus=="string"?[t.focus]:t.focus,r=Me();if(i.length){for(let x of i){let p=Np(x);p&&(r.min.x=Math.min(r.min.x,p.min.x),r.min.y=Math.min(r.min.y,p.min.y),r.min.z=Math.min(r.min.z,p.min.z),r.max.x=Math.max(r.max.x,p.max.x),r.max.y=Math.max(r.max.y,p.max.y),r.max.z=Math.max(r.max.z,p.max.z))}if(xn(r))throw new Error(`focus has no geometry: ${i}`)}else Object.assign(r,g.sceneBox&&!xn(g.sceneBox)?g.sceneBox:{min:{x:-20,y:0,z:-20},max:{x:20,y:40,z:20}});let{camera:s,half:o}=bR(n,r),a=t.isolate&&i.length?new Set:null;if(a)for(let x of i){let p=un(ke(x)),m=p?.[p.indexOf(g.context)+1];m&&a.add(m.id)}let c=[];ai(g.root,P_,0,null,null,(x,p,m,v,_)=>{if(_||a&&(!v||!a.has(v)))return;let E=jn(x,p,m,Me());xn(E)||c.push({id:x.id,b:E})});let l=[],h=x=>{x.visible&&(x.visible=!1,l.push(x))};for(let x of[Pi,$n,cn,Ui])h(x);ce.traverse(x=>{let p=x,m=p.material;(p.isMesh&&m?.clippingPlanes?.length||x.isLineSegments||x.renderOrder<-1e8)&&h(x),a&&p.isMesh&&x.parent!==Dn&&(!x.userData.childId||!a.has(x.userData.childId))&&h(x)});let u=ve.getSize(new Wt),d=ve.clippingPlanes,f=ve.shadowMap.enabled,y=ce.background;try{ce.background=new Rt(16777215),ve.shadowMap.enabled=!1;let x=t.cutY??(n==="top"?150:void 0);ve.clippingPlanes=x===void 0?[]:[new De(new P(0,-1,0),x)],ve.setSize(e,e,!1),ve.render(ce,s);let p=document.createElement("canvas");p.width=p.height=e;let m=p.getContext("2d");return m.drawImage(ve.domElement,0,0,e,e),n==="top"&&t.grid!==!1&&MR(m,e,r,o),t.labels!==!1&&SR(m,s,e,c),Promise.resolve(p.toDataURL("image/png"))}finally{ve.setSize(u.x,u.y,!1),ve.clippingPlanes=d,ve.shadowMap.enabled=f,ce.background=y;for(let x of l)x.visible=!0;mn()}}function wR(n){let t=new Set,e=i=>{if(!i.id)return"node without an id";if(t.has(i.id))return`duplicate node id ${i.id}`;if(t.add(i.id),i.type==="scene"){for(let s of i.children){let o=e(s);if(o)return o}return null}let r=`object ${i.id}${i.name?` "${i.name}"`:""}`;for(let s=0;s<i.boxes.length;s++){let o=i.boxes[s];if(![o.x0,o.y0,o.z0,o.x1,o.y1,o.z1].every(Number.isInteger))return`box ${s} of ${r} has a non-integer or non-finite coordinate`;if(o.x1<=o.x0||o.y1<=o.y0||o.z1<=o.z0)return`box ${s} of ${r} is empty or inverted`;for(let a=s+1;a<i.boxes.length;a++)if(aa([o],[i.boxes[a]],0,0,0))return`boxes ${s} and ${a} of ${r} overlap`}return null};return e(n)}function ER(n){g.root=Bi(JSON.parse(n)),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.drag=null,g.painting=!1,g.lastVox=null,oi(),de(),qt()}function TR(){let n=g.path.map(e=>e.id);g.path=[g.root];for(let e of n.slice(1)){let i=g.context.children.find(r=>r.id===e);if(!i||i.type!=="scene")break;g.path.push(i)}let t=g.editObject&&ke(g.editObject.id);g.editObject=t&&t.type==="object"?t:null,g.selection=new Set([...g.selection].filter(e=>g.context.children.some(i=>i.id===e)))}function AR(n){je();let t=JSON.stringify(Ar(g.root));try{n(g.root);let e=wR(g.root);if(e)throw new Error(`edit rejected: ${e}; restored the document`)}catch(e){throw ER(t),e}return TR(),de(),qt(),je(),Op(t)}var F_={iso:[Math.PI/4,Math.atan(1/Math.SQRT2)],top:[Math.PI/4,Math.PI/2],front:[0,0],side:[Math.PI/2,0]};function CR(n){if(!Object.hasOwn(F_,n))throw new Error(`unknown view "${n}": use iso, top, front or side`);let t=F_[n];jt.azim=Dt.azim=t[0],jt.elev=Dt.elev=t[1],mn()}var RR={coordinates:"Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",nodes:"S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique \u2014 mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",api:"S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON(), edit(fn) -> compact diff, undo(), redo(), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}), relations(ids?, {within=60}), render('top'|'front'|'side'|'iso', {focus, isolate, labels, grid, size=900, cutY}) -> Promise<PNG dataURL>, diff(before), uid(), newObject(), newScene(name?), help.",edit:"edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step and persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows.",example:"await voxelier.load(json); const o = voxelier.findById('n56'); voxelier.edit(() => { o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56');"},IR={S:g,ser:Ar,de:Bi,uid:Ks,newObject:qr,newScene:Oi,findById:ke,worldBounds:Np,load:Rp,exportJSON:Cp,edit:AR,diff:Op,outline:N_,relations:O_,render:z_,undo:Tl,redo:ma,frameView:On,fitNode:Ml,frameBox:bl,view:CR,help:RR};function B_(){Object.assign(window,{voxelier:IR})}var Nh=n=>Math.abs(n.clientX-g.drag.sx)+Math.abs(n.clientY-g.drag.sy)>3,$i=document.createElement("div");$i.id="toolcursor";$i.style.display="none";document.body.appendChild($i);function LR(n){if(g.tool==="view"){$i.style.display="none";return}$i.textContent=Uh[g.tool],$i.style.left=n.clientX+"px",$i.style.top=n.clientY+"px",$i.style.display="block"}function PR(){g.tool!=="measure"||g.painting||g.drag&&g.drag.mode==="box"||xl()}function zp(){let n=(Xt.top-Xt.bottom)/ye.h,t=Math.abs(Xt.matrixWorldInverse.elements[5]);return n/Math.max(t,.15)}function UR(n){let t=g.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let e=n.clientX-t.x,i=n.clientY-t.y;return t.x=n.clientX,t.y=n.clientY,(t.mode==="pan"?Tx:Ax)(e,i),!0}function DR(){let n=[],t=[];ai(g.root,{x:0,y:0,z:0},0,null,null,(r,s,o,a)=>{let c=a&&g.selection.has(a)?t:n;for(let l of r.boxes)c.push(ri(l,o,s))});let e=1/0,i=-1/0;for(let r of t)r.y0<e&&(e=r.y0),r.y1>i&&(i=r.y1);return{occ:n,sel:t,minY:e,hgt:t.length?i-e:0}}var NR=(n,t,e,i)=>{if(aa(n.sel??[],n.occ??[],t,e,i))return!0;let r=n.minY??1/0;return r+e<Math.min(0,r)};function OR(n){let t=g.drag,e=(i,r,s)=>n.altKey||!NR(t,i,r,s);if(n.shiftKey){t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=t.dyUser??0);let i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*zp());e(t.dx,i,t.dz)&&(t.dyUser=i,t.dy=i)}else{t.shiftAnchorY=null;let i=t.dx,r=t.dz,s=ha(0);s&&t.start&&(i=s.x-t.start.x,r=s.z-t.start.z);let o=t.dyUser??0,a=Math.floor(.1*(t.hgt??0)),c=!1;for(let l=0;l<=a;l++)if(e(i,o+l,r)){t.dx=i,t.dz=r,t.dy=o+l,c=!0;break}c||(e(i,o,t.dz)&&(t.dx=i),e(t.dx,o,r)&&(t.dz=r),t.dy=o)}for(let i of g.selection)for(let r of g.childMeshes[i]||[])r.position.set(t.dx,t.dy,t.dz),r.castShadow=!1;$n.position.set(t.dx,t.dy,t.dz)}function zR(n){let t=g.drag,e=Qs(),i=ee({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-e.rot),r=Math.round(t.dy);if(n){let s=[];for(let o of g.selection){let a=zi(o);if(!a)continue;let c=pr(a);c.pos={x:a.pos.x+i.x,y:a.pos.y+r,z:a.pos.z+i.z},s.push(c)}g.context.children.push(...s),g.selection=new Set(s.map(o=>o.id))}else for(let s of g.selection){let o=zi(s);o&&(o.pos.x+=i.x,o.pos.y+=r,o.pos.z+=i.z)}$n.position.set(0,0,0),de(),qt(),fe()}function FR(n){let t=g.drag,e=Math.round((t.sx-n.clientX)/70);e!==t.steps&&(vp(e-t.steps),t.steps=e,t.dirty=!0)}function BR(){let n=Sx();n!=null&&(g.eyedropReturn!=null&&(g.tool=g.eyedropReturn,g.eyedropReturn=null),Pp(n))}function V_(n){let t=Jr(),e=Md(t);if(!e)return;let i=Wr(e.x,e.y,e.z);i!==g.lastVox&&(n?(Ud({x0:e.x,y0:e.y,z0:e.z,x1:e.x+1,y1:e.y+1,z1:e.z+1},g.selColor),Dh(g.selColor)):Mx(e,g.selColor)&&Dh(g.selColor),g.lastVox=i),H_(t)}function H_(n=Jr()){let t=Md(n);if(!t){cn.visible=!1;return}let e=Fi(t.x+.5,t.y+.5,t.z+.5);cn.visible=!0,cn.material.color.set(g.tool==="erase"?11895693:10994876),cn.position.copy(e)}var Fp=n=>n===0?[1,2]:n===1?[0,2]:[0,1];function G_(n,t,e,i){let[r,s]=Fp(n.na),o=[0,0,0],a=[0,0,0],c=(l,h,u)=>{o[l]=Math.min(h,u),a[l]=Math.max(h,u)};return c(n.na,n.s[n.na],n.s[n.na]+i),c(r,n.s[r],t),c(s,n.s[s],e),{x0:o[0],y0:o[1],z0:o[2],x1:a[0]+1,y1:a[1]+1,z1:a[2]+1,c:0}}var Bp=n=>{let[t,e]=Fp(n.na);return G_(n,n.c[t],n.c[e],n.hy)};function k_(n){let t=Jr(),e,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,e=g.tool==="add"?t.addCell:t.cell;else{let r=Zr(0);if(!r)return;e=r,i=1}g.drag={...n,mode:"box",shiftAnchorY:null,box:{s:[e.x,e.y,e.z],c:[e.x,e.y,e.z],na:i,hy:0},occ:g.tool==="add"?g.editObject.boxes.slice():void 0},cn.visible=!1,W_()}function kR(n){let t=g.drag,e=t.box,[i,r]=Fp(e.na),s=g.tool==="add"&&!n.altKey,o=(a,c,l)=>!s||!aa([G_(e,a,c,l)],t.occ??[],0,0,0);if(n.shiftKey){t.shiftAnchorY===null&&(t.shiftAnchorX=n.clientX,t.shiftAnchorY=n.clientY,t.hyBase=e.hy);let a=Fi(e.s[0],e.s[1],e.s[2]),c=e.s.slice();c[e.na]+=1;let l=Fi(c[0],c[1],c[2]),h=l.x-a.x,u=l.y-a.y,d=l.z-a.z,f=Xt.matrixWorld.elements,y=h*f[0]+u*f[1]+d*f[2],x=h*f[4]+u*f[5]+d*f[6],p=y*y+x*x,m=ye.h/(Xt.top-Xt.bottom),v=y*m,_=-x*m,E=n.clientX-t.shiftAnchorX,R=n.clientY-t.shiftAnchorY,I=t.hyBase+(p>.02?Math.round((E*v+R*_)/(v*v+_*_)):Math.round((t.shiftAnchorY-n.clientY)*zp()));o(e.c[i],e.c[r],I)&&(e.hy=I)}else{t.shiftAnchorY=null;let a=dx(e.na,e.s[e.na]);if(a){let c=[a.x,a.y,a.z];o(c[i],e.c[r],e.hy)&&(e.c[i]=c[i]),o(e.c[i],c[r],e.hy)&&(e.c[r]=c[r])}}W_()}function VR(){let n=Bp(g.drag.box);g.tool==="add"?(Ud(n,g.selColor),Dh(g.selColor)):da(n),g.liveMeas=null,mr(),qt(),fe()}function W_(){let n=Bp(g.drag.box);g.liveMeas=Ed(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,Fi,2),mr()}function HR(n){let t=g.sel3d.region.y0;g.drag={...n,mode:"selmove",start:Zr(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function GR(n){g.drag={...n,mode:"selrot",steps:0}}function WR(n){let t=g.drag,e=t.dx,i=t.dy,r=t.dz;if(n.shiftKey)t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=i),i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*zp());else{t.shiftAnchorY=null;let s=Zr(t.start.y);s&&(e=s.x-t.start.x,r=s.z-t.start.z)}(e!==t.dx||i!==t.dy||r!==t.dz)&&(g.sel3d.lifted||ap(),jy(e-t.dx,i-t.dy,r-t.dz),t.dx=e,t.dy=i,t.dz=r)}function XR(n){let t=g.drag,e=n.altKey;e!==!!t.fine&&(t.fine=e,g.sel3d.lifted&&(up(),t.sx=n.clientX,t.steps=0,t.deg=0));let i=()=>{g.sel3d.lifted||(ap(),up())};if(e){let r=Math.round((t.sx-n.clientX)/25)*15;if(r===(t.deg??0))return;i(),t.deg=r,Ky(r,n.shiftKey)}else{let r=Math.round((t.sx-n.clientX)/70);if(r===t.steps)return;i(),t.steps=r,Zy(r,n.shiftKey)}}function qR(n){g.liveMeas=null,mr(),n&&qy(Bp(g.drag.box)),qt()}$e.addEventListener("pointerdown",n=>{if(g.drag||g.painting)return;$e.setPointerCapture(n.pointerId),ml(n.clientX,n.clientY);let t={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(n.button===1){g.drag={...t,mode:"pan"};return}if(g.editObject){n.button===0?g.tool==="view"||g.tool==="measure"?g.drag={...t,mode:"pan"}:g.tool==="select"?g.sel3d&&dp()?HR(t):(Yi(),k_(t)):g.tool==="add"||g.tool==="erase"?k_(t):g.tool==="eyedropper"?BR():(g.painting=!0,g.lastVox=null,V_(n.shiftKey)):n.button===2&&(g.tool==="select"&&g.sel3d&&dp()?GR(t):g.drag={...t,mode:"orbit"});return}let e=bd(),i=e&&g.selection.has(e);n.button===0?g.tool==="measure"?g.drag={...t,mode:"pan"}:i?g.drag={...t,mode:"move",start:ha(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...DR()}:g.drag={...t,mode:"pan",clickId:e}:n.button===2&&(i&&g.tool!=="measure"?g.drag={...t,mode:"rotobj",steps:0}:g.drag={...t,mode:"orbit"})});$e.addEventListener("pointermove",n=>{ml(n.clientX,n.clientY),g.editObject&&g.painting?V_(n.shiftKey):g.drag?UR(n)||(g.drag.mode==="move"?OR(n):g.drag.mode==="rotobj"?FR(n):g.drag.mode==="box"?kR(n):g.drag.mode==="selmove"?WR(n):g.drag.mode==="selrot"&&XR(n)):g.editObject&&g.tool!=="select"&&g.tool!=="view"&&g.tool!=="measure"?H_():cn.visible=!1,PR(),LR(n)});$e.addEventListener("pointerup",n=>{try{$e.releasePointerCapture(n.pointerId)}catch{}if(g.tool==="measure"&&g.drag&&!Nh(n)){if(n.button===0){px(),g.drag=null;return}if(n.button===2){mx(),g.drag=null;return}}if(g.editObject){g.painting?(g.painting=!1,qt(),fe()):g.drag&&g.drag.mode==="box"?g.tool==="select"?qR(Nh(n)):VR():g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot")&&cp(),g.drag=null;return}if(g.drag)if(g.drag.mode==="pan"&&!Nh(n)&&n.button===0){let t=g.drag.clickId,e=n.shiftKey||n.ctrlKey||n.metaKey,i=new Set(g.selection);t?(e?g.selection.has(t)?g.selection.delete(t):g.selection.add(t):g.selection=new Set([t]),xp(t)):e||(g.selection.clear(),xp(null)),vr(i),qt()}else g.drag.mode==="move"?zR(Nh(n)&&(n.ctrlKey||n.metaKey)):g.drag.mode==="rotobj"&&g.drag.dirty&&(qt(),fe());g.drag=null});$e.addEventListener("pointercancel",()=>{if(!g.drag&&!g.painting)return;let n=g.painting;g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot")&&cp(),g.drag=null,g.painting=!1,g.liveMeas=null,mr(),de(),n&&(qt(),fe())});$e.addEventListener("pointerleave",()=>{cn.visible=!1,$i.style.display="none",g.tool==="measure"&&!g.drag&&!g.painting&&g.liveMeas&&(g.liveMeas=null,mr())});$e.addEventListener("contextmenu",n=>n.preventDefault());$e.addEventListener("wheel",n=>{n.preventDefault(),jt.zoom*=n.deltaY>0?1/.95:.95,jt.zoom=Math.max(6,Math.min(ll,jt.zoom))},{passive:!1});$e.addEventListener("dblclick",n=>{if(g.editObject)return;ml(n.clientX,n.clientY);let t=bd();t&&ps(zi(t),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,mn,{passive:!0,capture:!0});var YR=()=>Math.abs(jt.azim-Dt.azim)<.001&&Math.abs(jt.elev-Dt.elev)<.001&&Math.abs(jt.zoom-Dt.zoom)<.001&&Dt.target.distanceToSquared(jt.target)<1e-6;function X_(){let n=$e.getBoundingClientRect();ye.w=n.width,ye.h=n.height,ye.x=n.left,ye.y=n.top}function q_(){let n=Math.max(1,Math.round(ye.w)),t=Math.max(1,Math.round(ye.h)),e=Math.min(devicePixelRatio,2);ve.getPixelRatio()!==e&&ve.setPixelRatio(e),($e.width!==Math.floor(n*e)||$e.height!==Math.floor(t*e))&&(ve.setSize(n,t,!1),mn())}window.addEventListener("resize",()=>{X_(),q_()});var kp=!1;function $R(){kp=!0,g.drag?mn():Y_()}function Y_(){kp=!1;let n=Ro(Oy());n&&(Sh(n),de(),qt(),je(),mn())}function $_(){requestAnimationFrame($_),kp&&!g.drag&&Y_(),q_(),Cx(),(ia.tail>0||!YR())&&(vx(),ve.render(ce,Xt),gx(),ia.tail>0&&ia.tail--)}async function jR(){Fy($R),g.root=await T_(Gy),g.collapsed=new Set(Hy()),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),de(),qt(),On(),je(),B_(),X_(),$_()}jR();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
