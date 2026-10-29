var p={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var sh=2;var gs=0,rh=1,oh=2;class Li{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=1234567,fs=Math.PI/180,js=180/Math.PI;function xs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[e&255]+Ut[e>>8&255]+Ut[e>>16&255]+Ut[e>>24&255]+"-"+Ut[t&255]+Ut[t>>8&255]+"-"+Ut[t>>16&15|64]+Ut[t>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ht(e,t,n){return Math.max(t,Math.min(n,e))}function Oa(e,t){return(e%t+t)%t}function yf(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function vf(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function Ys(e,t,n){return(1-n)*e+n*t}function bf(e,t,n,i){return Ys(e,t,1-Math.exp(-n*i))}function Mf(e,t=1){return t-Math.abs(Oa(e,t*2)-t)}function Sf(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function Ef(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function wf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Tf(e,t){return e+Math.random()*(t-e)}function Af(e){return e*(0.5-Math.random())}function Rf(e){if(e!==void 0)dc=e;let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(e){return e*fs}function Pf(e){return e*js}function Ia(e){return(e&e-1)===0&&e!==0}function Lf(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ho(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function If(e,t,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),m=r((i-t)/2),y=a((i-t)/2);switch(s){case"XYX":e.set(o*h,l*u,l*d,o*c);break;case"YZY":e.set(l*d,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*d,o*h,o*c);break;case"XZX":e.set(o*h,l*y,l*m,o*c);break;case"YXY":e.set(l*m,o*h,l*y,o*c);break;case"ZYZ":e.set(l*y,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function Bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var fo={DEG2RAD:fs,RAD2DEG:js,generateUUID:xs,clamp:Ht,euclideanModulo:Oa,mapLinear:yf,inverseLerp:vf,lerp:Ys,damp:bf,pingpong:Mf,smoothstep:Sf,smootherstep:Ef,randInt:wf,randFloat:Tf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:Ia,ceilPowerOfTwo:Lf,floorPowerOfTwo:ho,setQuaternionFromProperEuler:If,normalize:Bt,denormalize:hs};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,r,a,o,l){if(He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],m=n[8],y=i[0],x=i[3],f=i[6],g=i[1],_=i[4],v=i[7],A=i[2],C=i[5],T=i[8];return s[0]=r*y+a*g+o*A,s[3]=r*x+a*_+o*C,s[6]=r*f+a*v+o*T,s[1]=l*y+c*g+h*A,s[4]=l*x+c*_+h*C,s[7]=l*f+c*v+h*T,s[2]=u*y+d*g+m*A,s[5]=u*x+d*_+m*C,s[8]=u*f+d*v+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=c*r-a*l,u=a*o-c*s,d=l*s-r*o,m=t*h+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=h*y,e[1]=(i*l-c*n)*y,e[2]=(a*n-i*r)*y,e[3]=u*y,e[4]=(c*t-i*o)*y,e[5]=(i*s-a*t)*y,e[6]=d*y,e[7]=(n*o-l*t)*y,e[8]=(r*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var aa=new He;function ah(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function uo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Nf(){let e=uo("canvas");return e.style.display="block",e}var fc={};function $s(e){if(e in fc)return;fc[e]=!0,console.warn(e)}var pc=new He().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),mc=new He().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),Or={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(e)=>e,fromReference:(e)=>e},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(e)=>e.convertSRGBToLinear(),fromReference:(e)=>e.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(e)=>e.applyMatrix3(mc),fromReference:(e)=>e.applyMatrix3(pc)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(e)=>e.convertSRGBToLinear().applyMatrix3(mc),fromReference:(e)=>e.applyMatrix3(pc).convertLinearToSRGB()}},Df=new Set(["srgb-linear","display-p3-linear"]),et={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Df.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=Or[t].toReference,s=Or[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Or[e].primaries},getTransfer:function(e){if(e==="")return"linear";return Or[e].transfer}};function ps(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function la(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Ji;class za{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{if(Ji===void 0)Ji=uo("canvas");Ji.width=e.width,Ji.height=e.height;let n=Ji.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);t=Ji}if(t.width>2048||t.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",0.6);else return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ps(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(ps(t[n]/255)*255);else t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Uf=0;class Fa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=xs(),this.data=e,this.version=0}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(ca(i[r].image));else s.push(ca(i[r]))}else s=ca(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function ca(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return za.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Of=0;class en extends Li{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=en.DEFAULT_ANISOTROPY,c=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=xs(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c==="string")this.colorSpace=c;else $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(e){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===3001?"srgb":""}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=300;en.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,i=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],m=o[9],y=o[2],x=o[6],f=o[10];if(Math.abs(c-u)<0.01&&Math.abs(h-y)<0.01&&Math.abs(m-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+y)<0.1&&Math.abs(m+x)<0.1&&Math.abs(l+d+f-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(d+1)/2,A=(f+1)/2,C=(c+u)/4,T=(h+y)/4,I=(m+x)/4;if(_>v&&_>A)if(_<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(_),i=C/n,s=T/n;else if(v>A)if(v<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(v),n=C/i,s=I/i;else if(A<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(A),n=T/s,i=I/s;return this.set(n,i,s,t),this}let g=Math.sqrt((x-m)*(x-m)+(h-y)*(h-y)+(u-c)*(u-c));if(Math.abs(g)<0.001)g=1;return this.x=(x-m)/g,this.y=(h-y)/g,this.z=(u-c)/g,this.w=Math.acos((l+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lh extends Li{constructor(e=1,t=1,n={}){super();this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let i={width:e,height:t,depth:1};if(n.encoding!==void 0)$s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?"srgb":"";n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n)this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose();this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);if(this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends lh{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class Ba extends en{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ch extends en{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],d=s[r+1],m=s[r+2],y=s[r+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=y;return}if(h!==y||o!==u||l!==d||c!==m){let x=1-a,f=o*u+l*d+c*m+h*y,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let A=Math.sqrt(_),C=Math.atan2(A,f*g);x=Math.sin(x*C)/A,a=Math.sin(a*C)/A}let v=a*g;if(o=o*x+u*v,l=l*x+d*v,c=c*x+m*v,h=h*x+y*v,x===1-a){let A=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=A,l*=A,c*=A,h*=A}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],u=s[r+1],d=s[r+2],m=s[r+3];return e[t]=a*m+c*h+o*d-l*u,e[t+1]=o*m+c*u+l*h-a*d,e[t+2]=l*m+c*d+a*u-o*h,e[t+3]=c*m-a*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),u=o(n/2),d=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"YXZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"ZXY":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"ZYX":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"YZX":this._x=u*c*h+l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h-u*d*m;break;case"XZY":this._x=u*c*h-l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=n+a+h;if(u>0){let d=0.5/Math.sqrt(u+1);this._w=0.25/d,this._x=(c-o)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(c-o)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(o+c)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<Number.EPSILON)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0)this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a;else this.copy(e);if(a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let o=1-a*a;if(o<=Number.EPSILON){let d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),h=2*(s*n-r*t);return this.x=t+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-0.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ha=new N,gc=new Ii;class li{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,pn);else pn.fromBufferAttribute(s,r);pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();zr.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();zr.copy(n.boundingBox)}zr.applyMatrix4(e.matrixWorld),this.union(zr)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z?!1:!0}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z?!1:!0}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Fr.subVectors(this.max,Ws),ji.subVectors(e.a,Ws),Zi.subVectors(e.b,Ws),Ki.subVectors(e.c,Ws),ti.subVectors(Zi,ji),ni.subVectors(Ki,Zi),wi.subVectors(ji,Ki);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-wi.z,wi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,wi.z,0,-wi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-wi.y,wi.x,0];if(!ua(t,ji,Zi,Ki,Fr))return!1;if(t=[1,0,0,0,1,0,0,0,1],!ua(t,ji,Zi,Ki,Fr))return!1;return Br.crossVectors(ti,ni),t=[Br.x,Br.y,Br.z],ua(t,ji,Zi,Ki,Fr)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(pn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}var zn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,zr=new li,ji=new N,Zi=new N,Ki=new N,ti=new N,ni=new N,wi=new N,Ws=new N,Fr=new N,Br=new N,Ti=new N;function ua(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Ti.fromArray(e,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=n.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zf=new li,Vs=new N,da=new N;class Zs{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else zf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(da)),this.expandByPoint(Vs.copy(e.center).sub(da));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Fn=new N,fa=new N,kr=new N,ii=new N,pa=new N,Hr=new N,ma=new N;class po{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){fa.copy(e).add(t).multiplyScalar(0.5),kr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(fa);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(kr),a=ii.dot(this.direction),o=-ii.dot(kr),l=ii.lengthSq(),c=Math.abs(1-r*r),h,u,d,m;if(c>0)if(h=r*o-a,u=r*a-o,m=s*c,h>=0)if(u>=-m)if(u<=m){let y=1/c;h*=y,u*=y,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else if(u<=-m)h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else if(u<=m)h=0,u=Math.min(Math.max(-s,-o),s),d=u*(u+2*o)+l;else h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(fa).addScaledVector(kr,u);return d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);let n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l;else n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l;if(c>=0)s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c;else s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h;else a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,s){pa.subVectors(t,e),Hr.subVectors(n,e),ma.crossVectors(pa,Hr);let r=this.direction.dot(ma),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,e);let o=a*this.direction.dot(Hr.crossVectors(ii,Hr));if(o<0)return null;let l=a*this.direction.dot(pa.cross(ii));if(l<0)return null;if(o+l>r)return null;let c=-a*ii.dot(ma);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,i,s,r,a,o,l,c,h,u,d,m,y,x){if(yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,h,u,d,m,y,x)}set(e,t,n,i,s,r,a,o,l,c,h,u,d,m,y,x){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=h,f[14]=u,f[3]=d,f[7]=m,f[11]=y,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),r=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=r*c,d=r*h,m=a*c,y=a*h;t[0]=o*c,t[4]=-o*h,t[8]=l,t[1]=d+m*l,t[5]=u-y*l,t[9]=-a*o,t[2]=y-u*l,t[6]=m+d*l,t[10]=r*o}else if(e.order==="YXZ"){let u=o*c,d=o*h,m=l*c,y=l*h;t[0]=u+y*a,t[4]=m*a-d,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-a,t[2]=d*a-m,t[6]=y+u*a,t[10]=r*o}else if(e.order==="ZXY"){let u=o*c,d=o*h,m=l*c,y=l*h;t[0]=u-y*a,t[4]=-r*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=r*c,t[9]=y-u*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let u=r*c,d=r*h,m=a*c,y=a*h;t[0]=o*c,t[4]=m*l-d,t[8]=u*l+y,t[1]=o*h,t[5]=y*l+u,t[9]=d*l-m,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let u=r*o,d=r*l,m=a*o,y=a*l;t[0]=o*c,t[4]=y-u*h,t[8]=m*h+d,t[1]=h,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=d*h+m,t[10]=u-y*h}else if(e.order==="XZY"){let u=r*o,d=r*l,m=a*o,y=a*l;t[0]=o*c,t[4]=-h,t[8]=l*c,t[1]=u*h+y,t[5]=r*c,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*c,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Bf)}lookAt(e,t,n){let i=this.elements;if(Kt.subVectors(e,t),Kt.lengthSq()===0)Kt.z=1;if(Kt.normalize(),si.crossVectors(n,Kt),si.lengthSq()===0){if(Math.abs(n.z)===1)Kt.x+=0.0001;else Kt.z+=0.0001;Kt.normalize(),si.crossVectors(n,Kt)}return si.normalize(),Gr.crossVectors(Kt,si),i[0]=si.x,i[4]=Gr.x,i[8]=Kt.x,i[1]=si.y,i[5]=Gr.y,i[9]=Kt.y,i[2]=si.z,i[6]=Gr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],m=n[2],y=n[6],x=n[10],f=n[14],g=n[3],_=n[7],v=n[11],A=n[15],C=i[0],T=i[4],I=i[8],z=i[12],b=i[1],E=i[5],D=i[9],q=i[13],J=i[2],R=i[6],B=i[10],V=i[14],j=i[3],X=i[7],W=i[11],Z=i[15];return s[0]=r*C+a*b+o*J+l*j,s[4]=r*T+a*E+o*R+l*X,s[8]=r*I+a*D+o*B+l*W,s[12]=r*z+a*q+o*V+l*Z,s[1]=c*C+h*b+u*J+d*j,s[5]=c*T+h*E+u*R+d*X,s[9]=c*I+h*D+u*B+d*W,s[13]=c*z+h*q+u*V+d*Z,s[2]=m*C+y*b+x*J+f*j,s[6]=m*T+y*E+x*R+f*X,s[10]=m*I+y*D+x*B+f*W,s[14]=m*z+y*q+x*V+f*Z,s[3]=g*C+_*b+v*J+A*j,s[7]=g*T+_*E+v*R+A*X,s[11]=g*I+_*D+v*B+A*W,s[15]=g*z+_*q+v*V+A*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],h=e[6],u=e[10],d=e[14],m=e[3],y=e[7],x=e[11],f=e[15];return m*(+s*o*h-i*l*h-s*a*u+n*l*u+i*a*d-n*o*d)+y*(+t*o*d-t*l*u+s*r*u-i*r*d+i*l*c-s*o*c)+x*(+t*l*h-t*a*d-s*r*h+n*r*d+s*a*c-n*l*c)+f*(-i*a*c-t*o*h+t*a*u+i*r*h-n*r*u+n*o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11],m=e[12],y=e[13],x=e[14],f=e[15],g=h*x*l-y*u*l+y*o*d-a*x*d-h*o*f+a*u*f,_=m*u*l-c*x*l-m*o*d+r*x*d+c*o*f-r*u*f,v=c*y*l-m*h*l+m*a*d-r*y*d-c*a*f+r*h*f,A=m*h*o-c*y*o-m*a*u+r*y*u+c*a*x-r*h*x,C=t*g+n*_+i*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=g*T,e[1]=(y*u*s-h*x*s-y*i*d+n*x*d+h*i*f-n*u*f)*T,e[2]=(a*x*s-y*o*s+y*i*l-n*x*l-a*i*f+n*o*f)*T,e[3]=(h*o*s-a*u*s-h*i*l+n*u*l+a*i*d-n*o*d)*T,e[4]=_*T,e[5]=(c*x*s-m*u*s+m*i*d-t*x*d-c*i*f+t*u*f)*T,e[6]=(m*o*s-r*x*s-m*i*l+t*x*l+r*i*f-t*o*f)*T,e[7]=(r*u*s-c*o*s+c*i*l-t*u*l-r*i*d+t*o*d)*T,e[8]=v*T,e[9]=(m*h*s-c*y*s-m*n*d+t*y*d+c*n*f-t*h*f)*T,e[10]=(r*y*s-m*a*s+m*n*l-t*y*l-r*n*f+t*a*f)*T,e[11]=(c*a*s-r*h*s-c*n*l+t*h*l+r*n*d-t*a*d)*T,e[12]=A*T,e[13]=(c*y*i-m*h*i+m*n*u-t*y*u-c*n*x+t*h*x)*T,e[14]=(m*a*i-r*y*i-m*n*o+t*y*o+r*n*x-t*a*x)*T,e[15]=(r*h*i-c*a*i+c*n*o-t*h*o-r*n*u+t*a*u)*T,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,h=a+a,u=s*l,d=s*c,m=s*h,y=r*c,x=r*h,f=a*h,g=o*l,_=o*c,v=o*h,{x:A,y:C,z:T}=n;return i[0]=(1-(y+f))*A,i[1]=(d+v)*A,i[2]=(m-_)*A,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(u+f))*C,i[6]=(x+g)*C,i[7]=0,i[8]=(m+_)*T,i[9]=(x-g)*T,i[10]=(1-(u+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Qi.set(i[0],i[1],i[2]).length(),r=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);let l=1/s,c=1/r,h=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=2000){let o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d,m;if(a===2000)d=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===2001)d=-r/(r-s),m=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000){let o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,m,y;if(a===2000)m=(r+s)*h,y=-2*h;else if(a===2001)m=s*h,y=-1*h;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=y,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var Qi=new N,mn=new yt,Ff=new N(0,0,0),Bf=new N(1,1,1),si=new N,Gr=new N,Kt=new N,xc=new yt,_c=new Ii;class mo{constructor(e=0,t=0,n=0,i=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(t){case"XYZ":if(this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,d),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,d),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Ht(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,d);break;case"XZY":if(this._z=Math.asin(-Ht(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,d),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _c.setFromEuler(this),this.setFromQuaternion(_c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var kf=0,yc=new N,es=new Ii,Bn=new yt,Wr=new N,Xs=new N,Hf=new N,Gf=new Ii,vc=new N(1,0,0),bc=new N(0,1,0),Mc=new N(0,0,1),Wf={type:"added"},Vf={type:"removed"};class Pt extends Li{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();let e=new N,t=new mo,n=new Ii,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Wr.copy(e);else Wr.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Bn.lookAt(Xs,Wr,this.up);else Bn.lookAt(Wr,Xs,this.up);if(this.quaternion.setFromRotationMatrix(Bn),i)Bn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Bn),this.quaternion.premultiply(es.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D){if(e.parent!==null)e.parent.remove(e);e.parent=this,this.children.push(e),e.dispatchEvent(Wf)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf);return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld);return e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.matrixWorldAutoUpdate===!0||e===!0)s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(t===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++){let a=i[s];if(a.matrixWorldAutoUpdate===!0)a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((a)=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),u=r(e.skeletons),d=r(e.animations),m=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(d.length>0)n.animations=d;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new N(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new N,kn=new N,ga=new N,Hn=new N,ts=new N,ns=new N,Sc=new N,xa=new N,_a=new N,ya=new N,Vr=!1;class cn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),kn.subVectors(n,t),ga.subVectors(e,t);let r=gn.dot(gn),a=gn.dot(kn),o=gn.dot(ga),l=kn.dot(kn),c=kn.dot(ga),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(l*o-a*c)*u,m=(r*c-a*o)*u;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,Hn)===null)return!1;return Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,n,i,s,r,a,o){if(Vr===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0;return this.getInterpolation(e,t,n,i,s,r,a,o)}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,Hn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Hn.x),o.addScaledVector(r,Hn.y),o.addScaledVector(a,Hn.z),o}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),kn.subVectors(e,t),gn.cross(kn).dot(i)<0?!0:!1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){if(Vr===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0;return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;ts.subVectors(i,n),ns.subVectors(s,n),xa.subVectors(e,n);let o=ts.dot(xa),l=ns.dot(xa);if(o<=0&&l<=0)return t.copy(n);_a.subVectors(e,i);let c=ts.dot(_a),h=ns.dot(_a);if(c>=0&&h<=c)return t.copy(i);let u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return r=o/(o-c),t.copy(n).addScaledVector(ts,r);ya.subVectors(e,s);let d=ts.dot(ya),m=ns.dot(ya);if(m>=0&&d<=m)return t.copy(s);let y=d*l-o*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(ns,a);let x=c*m-d*h;if(x<=0&&h-c>=0&&d-m>=0)return Sc.subVectors(s,i),a=(h-c)/(h-c+(d-m)),t.copy(i).addScaledVector(Sc,a);let f=1/(x+y+u);return r=y*f,a=u*f,t.copy(n).addScaledVector(ts,r).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}var hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function va(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Oa(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=va(r,s,e+0.3333333333333333),this.g=va(r,s,e),this.b=va(r,s,e-0.3333333333333333)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=hh[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else console.warn("THREE.Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return et.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ht(Ot.r*255,0,255))*65536+Math.round(Ht(Ot.g*255,0,255))*256+Math.round(Ht(Ot.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ot.copy(this),t);let{r:n,g:i,b:s}=Ot,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e="srgb"){et.fromWorkingColorSpace(Ot.copy(this),e);let{r:t,g:n,b:i}=Ot;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Xr);let n=Ys(ri.h,Xr.h,t),i=Ys(ri.s,Xr.s,t),s=Ys(ri.l,Xr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ot=new Pe;Pe.NAMES=hh;var Xf=0;class ci extends Li{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Ks extends ci{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var xt=new N,qr=new Ve;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=hs(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=Bt(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=hs(t,this.array);return t}setX(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=hs(t,this.array);return t}setY(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=hs(t,this.array);return t}setZ(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=hs(t,this.array);return t}setW(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}}class ka extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ha extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var qf=0,ln=new yt,ba=new Pt,is=new N,Qt=new li,qs=new li,At=new N;class Wt extends Li{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((ah(e))?Ha:ka)(e,1);else this.index=e;return this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new li;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Qt.setFromBufferAttribute(s),this.morphTargetsRelative)At.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(At);else this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Zs;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(qs.setFromBufferAttribute(a),this.morphTargetsRelative)At.addVectors(Qt.min,qs.min),Qt.expandByPoint(At),At.addVectors(Qt.max,qs.max),Qt.expandByPoint(At);else Qt.expandByPoint(qs.min),Qt.expandByPoint(qs.max)}Qt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(At.fromBufferAttribute(a,l),o)is.fromBufferAttribute(e,l),At.add(is);i=Math.max(i,n.distanceToSquared(At))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));let o=this.getAttribute("tangent").array,l=[],c=[];for(let b=0;b<a;b++)l[b]=new N,c[b]=new N;let h=new N,u=new N,d=new N,m=new Ve,y=new Ve,x=new Ve,f=new N,g=new N;function _(b,E,D){h.fromArray(i,b*3),u.fromArray(i,E*3),d.fromArray(i,D*3),m.fromArray(r,b*2),y.fromArray(r,E*2),x.fromArray(r,D*2),u.sub(h),d.sub(h),y.sub(m),x.sub(m);let q=1/(y.x*x.y-x.x*y.y);if(!isFinite(q))return;f.copy(u).multiplyScalar(x.y).addScaledVector(d,-y.y).multiplyScalar(q),g.copy(d).multiplyScalar(y.x).addScaledVector(u,-x.x).multiplyScalar(q),l[b].add(f),l[E].add(f),l[D].add(f),c[b].add(g),c[E].add(g),c[D].add(g)}let v=this.groups;if(v.length===0)v=[{start:0,count:n.length}];for(let b=0,E=v.length;b<E;++b){let D=v[b],{start:q,count:J}=D;for(let R=q,B=q+J;R<B;R+=3)_(n[R+0],n[R+1],n[R+2])}let A=new N,C=new N,T=new N,I=new N;function z(b){T.fromArray(s,b*3),I.copy(T);let E=l[b];A.copy(E),A.sub(T.multiplyScalar(T.dot(E))).normalize(),C.crossVectors(I,E);let q=C.dot(c[b])<0?-1:1;o[b*4]=A.x,o[b*4+1]=A.y,o[b*4+2]=A.z,o[b*4+3]=q}for(let b=0,E=v.length;b<E;++b){let D=v[b],{start:q,count:J}=D;for(let R=q,B=q+J;R<B;R+=3)z(n[R+0]),z(n[R+1]),z(n[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new N,s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),y=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,x),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:h}=a,u=new l.constructor(o.length*c),d=0,m=0;for(let y=0,x=o.length;y<x;y++){if(a.isInterleavedBufferAttribute)d=o[y]*a.data.stride+a.offset;else d=o[y]*c;for(let f=0;f<c;f++)u[m++]=l[d++]}return new Gt(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Wt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let u=l[c],d=e(u,n);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];c.push(d.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere={center:a.center.toArray(),radius:a.radius};return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Ec=new yt,Ai=new po,Yr=new Zs,wc=new N,ss=new N,rs=new N,os=new N,Ma=new N,$r=new N,Jr=new Ve,jr=new Ve,Zr=new Ve,Tc=new N,Ac=new N,Rc=new N,Kr=new N,Qr=new N;class _t extends Pt{constructor(e=new Wt,t=new Ks){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(Ma.fromBufferAttribute(h,e),r)$r.addScaledVector(Ma,c);else $r.addScaledVector(Ma.sub(t),c)}t.add($r)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),Yr.containsPoint(Ai.origin)===!1){if(Ai.intersectSphere(Yr,wc)===null)return;if(Ai.origin.distanceToSquared(wc)>(e.far-e.near)**2)return}if(Ec.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Ec),n.boundingBox!==null){if(Ai.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Ai)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:u,drawRange:d}=s;if(a!==null)if(Array.isArray(r))for(let m=0,y=u.length;m<y;m++){let x=u[m],f=r[x.materialIndex],g=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=g,A=_;v<A;v+=3){let C=a.getX(v),T=a.getX(v+1),I=a.getX(v+2);if(i=eo(this,f,e,n,l,c,h,C,T,I),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,t.push(i)}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=m,f=y;x<f;x+=3){let g=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);if(i=eo(this,r,e,n,l,c,h,g,_,v),i)i.faceIndex=Math.floor(x/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,y=u.length;m<y;m++){let x=u[m],f=r[x.materialIndex],g=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=g,A=_;v<A;v+=3){let C=v,T=v+1,I=v+2;if(i=eo(this,f,e,n,l,c,h,C,T,I),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,t.push(i)}}else{let m=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=m,f=y;x<f;x+=3){let g=x,_=x+1,v=x+2;if(i=eo(this,r,e,n,l,c,h,g,_,v),i)i.faceIndex=Math.floor(x/3),t.push(i)}}}}function Yf(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;Qr.copy(o),Qr.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Qr);if(c<n.near||c>n.far)return null;return{distance:c,point:Qr.clone(),object:e}}function eo(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,ss),e.getVertexPosition(l,rs),e.getVertexPosition(c,os);let h=Yf(e,t,n,i,ss,rs,os,Kr);if(h){if(s)Jr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),Zr.fromBufferAttribute(s,c),h.uv=cn.getInterpolation(Kr,ss,rs,os,Jr,jr,Zr,new Ve);if(r)Jr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Zr.fromBufferAttribute(r,c),h.uv1=cn.getInterpolation(Kr,ss,rs,os,Jr,jr,Zr,new Ve),h.uv2=h.uv1;if(a){if(Tc.fromBufferAttribute(a,o),Ac.fromBufferAttribute(a,l),Rc.fromBufferAttribute(a,c),h.normal=cn.getInterpolation(Kr,ss,rs,os,Tc,Ac,Rc,new N),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new N,materialIndex:0};cn.getNormal(ss,rs,os,u.normal),h.face=u}return h}class En extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2));function m(y,x,f,g,_,v,A,C,T,I,z){let b=v/T,E=A/I,D=v/2,q=A/2,J=C/2,R=T+1,B=I+1,V=0,j=0,X=new N;for(let W=0;W<B;W++){let Z=W*E-q;for(let K=0;K<R;K++){let U=K*b-D;X[y]=U*g,X[x]=Z*_,X[f]=J,l.push(X.x,X.y,X.z),X[y]=0,X[x]=0,X[f]=C>0?1:-1,c.push(X.x,X.y,X.z),h.push(K/T),h.push(1-W/I),V+=1}}for(let W=0;W<I;W++)for(let Z=0;Z<T;Z++){let K=u+Z+R*W,U=u+Z+R*(W+1),Y=u+(Z+1)+R*(W+1),ie=u+(Z+1)+R*W;o.push(K,U,ie),o.push(U,Y,ie),j+=6}a.addGroup(d,j,z),d+=j,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))t[n][i]=s.slice();else t[n][i]=s}}return t}function kt(e){let t={};for(let n=0;n<e.length;n++){let i=ms(e[n]);for(let s in i)t[s]=i[s]}return t}function $f(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function uh(e){if(e.getRenderTarget()===null)return e.outputColorSpace;return et.workingColorSpace}var Jf={clone:ms,merge:kt},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ci{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=$f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}}class Ga extends Pt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=2000}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Ga{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(fs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}var as=-90,ls=1;class dh extends Pt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new zt(as,ls,e,t);i.layers=this.layers,this.add(i);let s=new zt(as,ls,e,t);s.layers=this.layers,this.add(s);let r=new zt(as,ls,e,t);r.layers=this.layers,this.add(r);let a=new zt(as,ls,e,t);a.layers=this.layers,this.add(a);let o=new zt(as,ls,e,t);o.layers=this.layers,this.add(o);let l=new zt(as,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,o),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wa extends en{constructor(e,t,n,i,s,r,a,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:301;super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fh extends ai{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];if(t.encoding!==void 0)$s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?"srgb":"";this.texture=new Wa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new En(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let r=new _t(i,s),a=t.minFilter;if(t.minFilter===1008)t.minFilter=1006;return new dh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var Sa=new N,Kf=new N,Qf=new He;class Ct{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sa.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sa),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qf.getNormalMatrix(e),i=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Ri=new Zs,to=new N;class xo{constructor(e=new Ct,t=new Ct,n=new Ct,i=new Ct,s=new Ct,r=new Ct){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000){let n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],m=i[9],y=i[10],x=i[11],f=i[12],g=i[13],_=i[14],v=i[15];if(n[0].setComponents(o-s,u-l,x-d,v-f).normalize(),n[1].setComponents(o+s,u+l,x+d,v+f).normalize(),n[2].setComponents(o+r,u+c,x+m,v+g).normalize(),n[3].setComponents(o-r,u-c,x-m,v-g).normalize(),n[4].setComponents(o-a,u-h,x-y,v-_).normalize(),t===2000)n[5].setComponents(o+a,u+h,x+y,v+_).normalize();else if(t===2001)n[5].setComponents(a,h,y,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=0.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ph(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){if(t===!0)return;if(n===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ep(e,t){let n=t.isWebGL2,i=new WeakMap;function s(c,h){let{array:u,usage:d}=c,m=u.byteLength,y=e.createBuffer();e.bindBuffer(h,y),e.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=e.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=e.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=e.SHORT;else if(u instanceof Uint32Array)x=e.UNSIGNED_INT;else if(u instanceof Int32Array)x=e.INT;else if(u instanceof Int8Array)x=e.BYTE;else if(u instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let{array:d,_updateRange:m,updateRanges:y}=h;if(e.bindBuffer(u,c),m.count===-1&&y.length===0)e.bufferSubData(u,0,d);if(y.length!==0){for(let x=0,f=y.length;x<f;x++){let g=y[x];if(n)e.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count);else e.bufferSubData(u,g.start*d.BYTES_PER_ELEMENT,d.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}if(m.count!==-1){if(n)e.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count);else e.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count));m.count=-1}h.onUploadCallback()}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;return i.get(c)}function o(c){if(c.isInterleavedBufferAttribute)c=c.data;let h=i.get(c);if(h)e.deleteBuffer(h.buffer),i.delete(c)}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);if(!d||d.version<c.version)i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}if(c.isInterleavedBufferAttribute)c=c.data;let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class _s extends Wt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=e/a,u=t/o,d=[],m=[],y=[],x=[];for(let f=0;f<c;f++){let g=f*u-r;for(let _=0;_<l;_++){let v=_*h-s;m.push(v,-g,0),y.push(0,0,1),x.push(_/a),x.push(1-f/o)}}for(let f=0;f<o;f++)for(let g=0;g<a;g++){let _=g+l*f,v=g+l*(f+1),A=g+1+l*(f+1),C=g+1+l*f;d.push(_,v,C),d.push(v,A,C)}this.setIndex(d),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`
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
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,em=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`;var um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:yp,color_fragment:vp,color_pars_fragment:bp,color_pars_vertex:Mp,color_vertex:Sp,common:Ep,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Ip,envmap_fragment:Np,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Up,envmap_pars_vertex:Op,envmap_physical_pars_fragment:$p,envmap_vertex:zp,fog_vertex:Fp,fog_pars_vertex:Bp,fog_fragment:kp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Gp,lightmap_fragment:Wp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:qp,lights_pars_begin:Yp,lights_toon_fragment:Jp,lights_toon_pars_fragment:jp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Kp,lights_physical_fragment:Qp,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:xm,normal_fragment_begin:_m,normal_fragment_maps:ym,normal_pars_fragment:vm,normal_pars_vertex:bm,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Im,dithering_pars_fragment:Nm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:zm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Bm,skinbase_vertex:km,skinning_pars_vertex:Hm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Vm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:$m,transmission_pars_fragment:Jm,uv_pars_fragment:jm,uv_pars_vertex:Zm,uv_vertex:Km,worldpos_vertex:Qm,background_vert:eg,background_frag:tg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:yg,meshnormal_vert:vg,meshnormal_frag:bg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:Eg,meshphysical_frag:wg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Ig,sprite_frag:Ng},ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ve(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:kt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:kt([ae.lights,ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Mn.physical={uniforms:kt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var no={r:0,b:0,g:0};function Dg(e,t,n,i,s,r,a){let o=new Pe(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function y(f,g){let _=!1,v=g.isScene===!0?g.background:null;if(v&&v.isTexture)v=(g.backgroundBlurriness>0?n:t).get(v);if(v===null)x(o,l);else if(v&&v.isColor)x(v,1),_=!0;let A=e.xr.getEnvironmentBlendMode();if(A==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(A==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||_)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(v&&(v.isCubeTexture||v.mapping===306)){if(h===void 0)h=new _t(new En(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ms(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=et.getTransfer(v.colorSpace)!=="srgb",u!==v||d!==v.version||m!==e.toneMapping)h.material.needsUpdate=!0,u=v,d=v.version,m=e.toneMapping;h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)}else if(v&&v.isTexture){if(c===void 0)c=new _t(new _s(2,2),new Sn({name:"BackgroundMaterial",uniforms:ms(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c);if(c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!=="srgb",v.matrixAutoUpdate===!0)v.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(v.matrix),u!==v||d!==v.version||m!==e.toneMapping)c.material.needsUpdate=!0,u=v,d=v.version,m=e.toneMapping;c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)}}function x(f,g){f.getRGB(no,uh(e)),i.buffers.color.setClear(no.r,no.g,no.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),l=g,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(o,l)},render:y}}function Ug(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null),c=l,h=!1;function u(R,B,V,j,X){let W=!1;if(a){let Z=x(j,V,B);if(c!==Z)c=Z,m(c.object);if(W=g(R,j,V,X),W)_(R,j,V,X)}else{let Z=B.wireframe===!0;if(c.geometry!==j.id||c.program!==V.id||c.wireframe!==Z)c.geometry=j.id,c.program=V.id,c.wireframe=Z,W=!0}if(X!==null)n.update(X,e.ELEMENT_ARRAY_BUFFER);if(W||h){if(h=!1,z(R,B,V,j),X!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(X).buffer)}}function d(){if(i.isWebGL2)return e.createVertexArray();return r.createVertexArrayOES()}function m(R){if(i.isWebGL2)return e.bindVertexArray(R);return r.bindVertexArrayOES(R)}function y(R){if(i.isWebGL2)return e.deleteVertexArray(R);return r.deleteVertexArrayOES(R)}function x(R,B,V){let j=V.wireframe===!0,X=o[R.id];if(X===void 0)X={},o[R.id]=X;let W=X[B.id];if(W===void 0)W={},X[B.id]=W;let Z=W[j];if(Z===void 0)Z=f(d()),W[j]=Z;return Z}function f(R){let B=[],V=[],j=[];for(let X=0;X<s;X++)B[X]=0,V[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:j,object:R,attributes:{},index:null}}function g(R,B,V,j){let X=c.attributes,W=B.attributes,Z=0,K=V.getAttributes();for(let U in K)if(K[U].location>=0){let ie=X[U],se=W[U];if(se===void 0){if(U==="instanceMatrix"&&R.instanceMatrix)se=R.instanceMatrix;if(U==="instanceColor"&&R.instanceColor)se=R.instanceColor}if(ie===void 0)return!0;if(ie.attribute!==se)return!0;if(se&&ie.data!==se.data)return!0;Z++}if(c.attributesNum!==Z)return!0;if(c.index!==j)return!0;return!1}function _(R,B,V,j){let X={},W=B.attributes,Z=0,K=V.getAttributes();for(let U in K)if(K[U].location>=0){let ie=W[U];if(ie===void 0){if(U==="instanceMatrix"&&R.instanceMatrix)ie=R.instanceMatrix;if(U==="instanceColor"&&R.instanceColor)ie=R.instanceColor}let se={};if(se.attribute=ie,ie&&ie.data)se.data=ie.data;X[U]=se,Z++}c.attributes=X,c.attributesNum=Z,c.index=j}function v(){let R=c.newAttributes;for(let B=0,V=R.length;B<V;B++)R[B]=0}function A(R){C(R,0)}function C(R,B){let V=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;if(V[R]=1,j[R]===0)e.enableVertexAttribArray(R),j[R]=1;if(X[R]!==B)(i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),X[R]=B}function T(){let R=c.newAttributes,B=c.enabledAttributes;for(let V=0,j=B.length;V<j;V++)if(B[V]!==R[V])e.disableVertexAttribArray(V),B[V]=0}function I(R,B,V,j,X,W,Z){if(Z===!0)e.vertexAttribIPointer(R,B,V,X,W);else e.vertexAttribPointer(R,B,V,j,X,W)}function z(R,B,V,j){if(i.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)){if(t.get("ANGLE_instanced_arrays")===null)return}v();let X=j.attributes,W=V.getAttributes(),Z=B.defaultAttributeValues;for(let K in W){let U=W[K];if(U.location>=0){let Y=X[K];if(Y===void 0){if(K==="instanceMatrix"&&R.instanceMatrix)Y=R.instanceMatrix;if(K==="instanceColor"&&R.instanceColor)Y=R.instanceColor}if(Y!==void 0){let ie=Y.normalized,se=Y.itemSize,re=n.get(Y);if(re===void 0)continue;let{buffer:ce,type:le,bytesPerElement:ue}=re,we=i.isWebGL2===!0&&(le===e.INT||le===e.UNSIGNED_INT||Y.gpuType===1013);if(Y.isInterleavedBufferAttribute){let L=Y.data,Ke=L.stride,Le=Y.offset;if(L.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)C(U.location+xe,L.meshPerAttribute);if(R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0)j._maxInstanceCount=L.meshPerAttribute*L.count}else for(let xe=0;xe<U.locationSize;xe++)A(U.location+xe);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let xe=0;xe<U.locationSize;xe++)I(U.location+xe,se/U.locationSize,le,ie,Ke*ue,(Le+se/U.locationSize*xe)*ue,we)}else{if(Y.isInstancedBufferAttribute){for(let L=0;L<U.locationSize;L++)C(U.location+L,Y.meshPerAttribute);if(R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0)j._maxInstanceCount=Y.meshPerAttribute*Y.count}else for(let L=0;L<U.locationSize;L++)A(U.location+L);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let L=0;L<U.locationSize;L++)I(U.location+L,se/U.locationSize,le,ie,se*ue,se/U.locationSize*L*ue,we)}}else if(Z!==void 0){let ie=Z[K];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(U.location,ie);break;case 3:e.vertexAttrib3fv(U.location,ie);break;case 4:e.vertexAttrib4fv(U.location,ie);break;default:e.vertexAttrib1fv(U.location,ie)}}}}T()}function b(){q();for(let R in o){let B=o[R];for(let V in B){let j=B[V];for(let X in j)y(j[X].object),delete j[X];delete B[V]}delete o[R]}}function E(R){if(o[R.id]===void 0)return;let B=o[R.id];for(let V in B){let j=B[V];for(let X in j)y(j[X].object),delete j[X];delete B[V]}delete o[R.id]}function D(R){for(let B in o){let V=o[B];if(V[R.id]===void 0)continue;let j=V[R.id];for(let X in j)y(j[X].object),delete j[X];delete V[R.id]}}function q(){if(J(),h=!0,c===l)return;c=l,m(c.object)}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:A,disableUnusedAttributes:T}}function Og(e,t,n,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){e.drawArrays(r,h,u),n.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,y;if(s)m=e,y="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](r,h,u,d),n.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let y=0;for(let x=0;x<d;x++)y+=u[x];n.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function zg(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let a=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=n.precision!==void 0?n.precision:"highp",l=r(o);if(l!==o)console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l;let c=a||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||t.has("OES_texture_float"),C=v&&A,T=a?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:T}}function Fg(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Ct,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,m){let{clippingPlanes:y,clipIntersection:x,clipShadows:f}=u,g=e.get(u);if(!s||y===null||y.length===0||r&&!f)if(r)h(null);else c();else{let _=r?0:i,v=_*4,A=g.clippingState||null;l.value=A,A=h(y,d,v,m);for(let C=0;C!==v;++C)A[C]=n[C];g.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function h(u,d,m,y){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=l.value,y!==!0||f===null){let g=m+x*4,_=d.matrixWorldInverse;if(o.getNormalMatrix(_),f===null||f.length<g)f=new Float32Array(g);for(let v=0,A=m;v!==x;++v,A+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function Bg(e){let t=new WeakMap;function n(a,o){if(o===303)a.mapping=301;else if(o===304)a.mapping=302;return a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===303||o===304)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fh(l.height/2);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);if(l!==void 0)t.delete(o),l.dispose()}function r(){t=new WeakMap}return{get:i,dispose:r}}class Qs extends Ga{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var us=4,Cc=[0.125,0.215,0.35,0.446,0.526,0.582],Pi=20,Ea=new Qs,Pc=new Pe,wa=null,Ta=0,Aa=0,Ci=(1+Math.sqrt(5))/2,cs=1/Ci,Lc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ci,cs),new N(0,Ci,-cs),new N(cs,0,Ci),new N(-cs,0,Ci),new N(Ci,cs,0),new N(-Ci,cs,0)];class Na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=0.1,i=100){wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0)this._blur(s,0,0,t);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ta,Aa),e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===301||e.mapping===302)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=Ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Ic(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(s)),this._blurMaterial=Hg(s,e,t)}return i}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,i){let a=new zt(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,{autoClear:h,toneMapping:u}=c;c.getClearColor(Pc),c.toneMapping=0,c.autoClear=!1;let d=new Ks({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new _t(new En,d),y=!1,x=e.background;if(x){if(x.isColor)d.color.copy(x),e.background=null,y=!0}else d.color.copy(Pc),y=!0;for(let f=0;f<6;f++){let g=f%3;if(g===0)a.up.set(0,o[f],0),a.lookAt(l[f],0,0);else if(g===1)a.up.set(0,0,o[f]),a.lookAt(0,l[f],0);else a.up.set(0,o[f],0),a.lookAt(0,0,l[f]);let _=this._cubeSize;if(io(i,g*_,f>2?_:0,_,_),c.setRenderTarget(i),y)c.render(m,a);c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===301||e.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Dc();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Nc();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let o=this._cubeSize;io(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(r,Ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Lc[(i-1)%Lc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new _t(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),y=s/m,x=isFinite(s)?1+Math.floor(c*y):Pi;if(x>Pi)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pi}`);let f=[],g=0;for(let T=0;T<Pi;++T){let I=T/y,z=Math.exp(-I*I/2);if(f.push(z),T===0)g+=z;else if(T<x)g+=2*z}for(let T=0;T<f.length;T++)f[T]=f[T]/g;if(u.envMap.value=e.texture,u.samples.value=x,u.weights.value=f,u.latitudinal.value=r==="latitudinal",a)u.poleAxis.value=a;let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;let v=this._sizeLods[i],A=3*v*(i>_-us?i-_+us:0),C=4*(this._cubeSize-v);io(t,A,C,3*v,2*v),o.setRenderTarget(t),o.render(h,Ea)}}function kg(e){let t=[],n=[],i=[],s=e,r=e-us+1+Cc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;if(a>e-us)l=Cc[a-e+us-1];else if(a===0)l=0;i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,y=6,x=3,f=2,g=1,_=new Float32Array(x*y*m),v=new Float32Array(f*y*m),A=new Float32Array(g*y*m);for(let T=0;T<m;T++){let I=T%3*2/3-1,z=T>2?0:-1,b=[I,z,0,I+0.6666666666666666,z,0,I+0.6666666666666666,z+1,0,I,z,0,I+0.6666666666666666,z+1,0,I,z+1,0];_.set(b,x*y*T),v.set(d,f*y*T);let E=[T,T,T,T,T,T];A.set(E,g*y*T)}let C=new Wt;if(C.setAttribute("position",new Gt(_,x)),C.setAttribute("uv",new Gt(v,f)),C.setAttribute("faceIndex",new Gt(A,g)),t.push(C),s>us)s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ic(e,t,n){let i=new ai(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Hg(e,t,n){let i=new Float32Array(Pi),s=new N(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Va(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Gg(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);if(n===null)n=new Na(e);return u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),t.set(o,u),u.texture}else if(t.has(o))return t.get(o).texture;else{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){if(n===null)n=new Na(e);let d=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)if(o[h]!==void 0)l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);if(c!==void 0)t.delete(l),c.dispose()}function a(){if(t=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:a}}function Wg(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){if(i.isWebGL2)n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance");else n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays");n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);if(s===null)console.warn("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function Vg(e,t,n,i){let s={},r=new WeakMap;function a(u){let d=u.target;if(d.index!==null)t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let x=d.morphAttributes[y];for(let f=0,g=x.length;f<g;f++)t.remove(x[f])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);if(m)t.remove(m),r.delete(d);if(i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;n.memory.geometries--}function o(u,d){if(s[d.id]===!0)return d;return d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++,d}function l(u){let d=u.attributes;for(let y in d)t.update(d[y],e.ARRAY_BUFFER);let m=u.morphAttributes;for(let y in m){let x=m[y];for(let f=0,g=x.length;f<g;f++)t.update(x[f],e.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,y=u.attributes.position,x=0;if(m!==null){let _=m.array;x=m.version;for(let v=0,A=_.length;v<A;v+=3){let C=_[v+0],T=_[v+1],I=_[v+2];d.push(C,T,T,I,I,C)}}else if(y!==void 0){let _=y.array;x=y.version;for(let v=0,A=_.length/3-1;v<A;v+=3){let C=v+0,T=v+1,I=v+2;d.push(C,T,T,I,I,C)}}else return;let f=new((ah(d))?Ha:ka)(d,1);f.version=x;let g=r.get(u);if(g)t.remove(g);r.set(u,f)}function h(u){let d=r.get(u);if(d){let m=u.index;if(m!==null){if(d.version<m.version)c(u)}}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xg(e,t,n,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,y){e.drawElements(r,y,o,m*l),n.update(y,r,1)}function u(m,y,x){if(x===0)return;let f,g;if(s)f=e,g="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,y,o,m*l,x),n.update(y,r,x)}function d(m,y,x){if(x===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<x;g++)this.render(m[g]/l,y[g]);else{f.multiDrawElementsWEBGL(r,y,0,o,m,0,x);let g=0;for(let _=0;_<x;_++)g+=y[_];n.update(g,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function qg(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Yg(e,t){return e[0]-t[0]}function $g(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Jg(e,t,n){let i={},s=new Float32Array(8),r=new WeakMap,a=new Rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==y){let R=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};if(x!==void 0)x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],z=0;if(_===!0)z=1;if(v===!0)z=2;if(A===!0)z=3;let b=h.attributes.position.count*z,E=1;if(b>t.maxTextureSize)E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize;let D=new Float32Array(b*E*4*y),q=new Ba(D,b,E,y);q.type=1015,q.needsUpdate=!0;let J=z*4;for(let B=0;B<y;B++){let V=C[B],j=T[B],X=I[B],W=b*E*4*B;for(let Z=0;Z<V.count;Z++){let K=Z*J;if(_===!0)a.fromBufferAttribute(V,Z),D[W+K+0]=a.x,D[W+K+1]=a.y,D[W+K+2]=a.z,D[W+K+3]=0;if(v===!0)a.fromBufferAttribute(j,Z),D[W+K+4]=a.x,D[W+K+5]=a.y,D[W+K+6]=a.z,D[W+K+7]=0;if(A===!0)a.fromBufferAttribute(X,Z),D[W+K+8]=a.x,D[W+K+9]=a.y,D[W+K+10]=a.z,D[W+K+11]=X.itemSize===4?a.w:1}}x={count:y,texture:q,size:new Ve(b,E)},r.set(h,x),h.addEventListener("dispose",R)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];let g=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(e,"morphTargetBaseInfluence",g),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",x.texture,n),u.getUniforms().setValue(e,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,y=i[h.id];if(y===void 0||y.length!==m){y=[];for(let v=0;v<m;v++)y[v]=[v,0];i[h.id]=y}for(let v=0;v<m;v++){let A=y[v];A[0]=v,A[1]=d[v]}y.sort($g);for(let v=0;v<8;v++)if(v<m&&y[v][1])o[v][0]=y[v][0],o[v][1]=y[v][1];else o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0;o.sort(Yg);let x=h.morphAttributes.position,f=h.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let A=o[v],C=A[0],T=A[1];if(C!==Number.MAX_SAFE_INTEGER&&T){if(x&&h.getAttribute("morphTarget"+v)!==x[C])h.setAttribute("morphTarget"+v,x[C]);if(f&&h.getAttribute("morphNormal"+v)!==f[C])h.setAttribute("morphNormal"+v,f[C]);s[v]=T,g+=T}else{if(x&&h.hasAttribute("morphTarget"+v)===!0)h.deleteAttribute("morphTarget"+v);if(f&&h.hasAttribute("morphNormal"+v)===!0)h.deleteAttribute("morphNormal"+v);s[v]=0}}let _=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(e,"morphTargetBaseInfluence",_),u.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:l}}function jg(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c)t.update(u),s.set(u,c);if(l.isInstancedMesh){if(l.hasEventListener("dispose",o)===!1)l.addEventListener("dispose",o);if(s.get(l)!==c){if(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,e.ARRAY_BUFFER);s.set(l,c)}}if(l.isSkinnedMesh){let d=l.skeleton;if(s.get(d)!==c)d.update(),s.set(d,c)}return u}function a(){s=new WeakMap}function o(l){let c=l.target;if(c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null)n.remove(c.instanceColor)}return{update:r,dispose:a}}class Xa extends en{constructor(e,t,n,i,s,r,a,o,l,c){if(c=c!==void 0?c:1026,c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&c===1026)n=1014;if(n===void 0&&c===1027)n=1020;super(null,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);if(this.compareFunction!==null)t.compareFunction=this.compareFunction;return t}}var mh=new en,gh=new Xa(1,1);gh.compareFunction=515;var xh=new Ba,_h=new ch,yh=new Wa,Uc=[],Oc=[],zc=new Float32Array(16),Fc=new Float32Array(9),Bc=new Float32Array(4);function ys(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Uc[s];if(r===void 0)r=new Float32Array(s),Uc[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function bt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Mt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function _o(e,t){let n=Oc[t];if(n===void 0)n=new Int32Array(t),Oc[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Zg(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function Kg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(bt(n,t))return;e.uniform2fv(this.addr,t),Mt(n,t)}}function Qg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(bt(n,t))return;e.uniform3fv(this.addr,t),Mt(n,t)}}function ex(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(bt(n,t))return;e.uniform4fv(this.addr,t),Mt(n,t)}}function tx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(bt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mt(n,t)}else{if(bt(n,i))return;Bc.set(i),e.uniformMatrix2fv(this.addr,!1,Bc),Mt(n,i)}}function nx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(bt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mt(n,t)}else{if(bt(n,i))return;Fc.set(i),e.uniformMatrix3fv(this.addr,!1,Fc),Mt(n,i)}}function ix(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(bt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mt(n,t)}else{if(bt(n,i))return;zc.set(i),e.uniformMatrix4fv(this.addr,!1,zc),Mt(n,i)}}function sx(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function rx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(bt(n,t))return;e.uniform2iv(this.addr,t),Mt(n,t)}}function ox(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(bt(n,t))return;e.uniform3iv(this.addr,t),Mt(n,t)}}function ax(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(bt(n,t))return;e.uniform4iv(this.addr,t),Mt(n,t)}}function lx(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function cx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(bt(n,t))return;e.uniform2uiv(this.addr,t),Mt(n,t)}}function hx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(bt(n,t))return;e.uniform3uiv(this.addr,t),Mt(n,t)}}function ux(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(bt(n,t))return;e.uniform4uiv(this.addr,t),Mt(n,t)}}function dx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r=this.type===e.SAMPLER_2D_SHADOW?gh:mh;n.setTexture2D(t||r,s)}function fx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||_h,s)}function px(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(t||yh,s)}function mx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||xh,s)}function gx(e){switch(e){case 5126:return Zg;case 35664:return Kg;case 35665:return Qg;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function xx(e,t){e.uniform1fv(this.addr,t)}function _x(e,t){let n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function yx(e,t){let n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function vx(e,t){let n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function bx(e,t){let n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Mx(e,t){let n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sx(e,t){let n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ex(e,t){e.uniform1iv(this.addr,t)}function wx(e,t){e.uniform2iv(this.addr,t)}function Tx(e,t){e.uniform3iv(this.addr,t)}function Ax(e,t){e.uniform4iv(this.addr,t)}function Rx(e,t){e.uniform1uiv(this.addr,t)}function Cx(e,t){e.uniform2uiv(this.addr,t)}function Px(e,t){e.uniform3uiv(this.addr,t)}function Lx(e,t){e.uniform4uiv(this.addr,t)}function Ix(e,t,n){let i=this.cache,s=t.length,r=_o(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTexture2D(t[a]||mh,r[a])}function Nx(e,t,n){let i=this.cache,s=t.length,r=_o(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||_h,r[a])}function Dx(e,t,n){let i=this.cache,s=t.length,r=_o(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTextureCube(t[a]||yh,r[a])}function Ux(e,t,n){let i=this.cache,s=t.length,r=_o(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||xh,r[a])}function Ox(e){switch(e){case 5126:return xx;case 35664:return _x;case 35665:return yx;case 35666:return vx;case 35674:return bx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return Ex;case 35667:case 35671:return wx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}class vh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}}class bh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ox(t.type)}}class Mh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var Ra=/(\w+)(\])?(\[|\.)?/g;function kc(e,t){e.seq.push(t),e.map[t.id]=t}function zx(e,t,n){let i=e.name,s=i.length;Ra.lastIndex=0;while(!0){let r=Ra.exec(i),a=Ra.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){kc(n,c===void 0?new vh(o,e,t):new bh(o,e,t));break}else{let u=n.map[o];if(u===void 0)u=new Mh(o),kc(n,u);n=u}}}class Js{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);zx(s,r,this)}}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Hc(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Fx=37297,Bx=0;function kx(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Hx(e){let t=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(e),i;if(t===n)i="";else if(t==="p3"&&n==="rec709")i="LinearDisplayP3ToLinearSRGB";else if(t==="rec709"&&n==="p3")i="LinearSRGBToLinearDisplayP3";switch(e){case"srgb-linear":case"display-p3-linear":return[i,"LinearTransferOETF"];case"srgb":case"display-p3":return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Gc(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+kx(e.getShaderSource(t),a)}else return s}function Gx(e,t){let n=Hx(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Wx(e,t){let n;switch(t){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Vx(e){return[e.extensionDerivatives||!!e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function Xx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function qx(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Yx(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ds(e){return e!==""}function Wc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(e){return e.replace($x,jx)}var Jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jx(e,t){let n=ze[t];if(n===void 0){let i=Jx.get(t);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw Error("Can not resolve #include <"+t+">")}return Da(n)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(e){return e.replace(Zx,Kx)}function Kx(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}function Qx(e){let t="SHADOWMAP_TYPE_BASIC";if(e.shadowMapType===1)t="SHADOWMAP_TYPE_PCF";else if(e.shadowMapType===2)t="SHADOWMAP_TYPE_PCF_SOFT";else if(e.shadowMapType===3)t="SHADOWMAP_TYPE_VSM";return t}function e0(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t0(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function i0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function s0(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Qx(n),c=e0(n),h=t0(n),u=n0(n),d=i0(n),m=n.isWebGL2?"":Vx(n),y=Xx(n),x=qx(r),f=s.createProgram(),g,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ds).join(`
`),g.length>0)g+=`
`;if(_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ds).join(`
`),_.length>0)_+=`
`}else g=[qc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),_=[m,qc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ze.tonemapping_pars_fragment:"",n.toneMapping!==0?Wx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Gx("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ds).join(`
`);if(a=Da(a),a=Wc(a,n),a=Vc(a,n),o=Da(o),o=Wc(o,n),o=Vc(o,n),a=Xc(a),o=Xc(o),n.isWebGL2&&n.isRawShaderMaterial!==!0)v=`#version 300 es
`,g=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_;let A=v+g+a,C=v+_+o,T=Hc(s,s.VERTEX_SHADER,A),I=Hc(s,s.FRAGMENT_SHADER,C);if(s.attachShader(f,T),s.attachShader(f,I),n.index0AttributeName!==void 0)s.bindAttribLocation(f,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(f,0,"position");s.linkProgram(f);function z(q){if(e.debug.checkShaderErrors){let J=s.getProgramInfoLog(f).trim(),R=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(I).trim(),V=!0,j=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,f,T,I);else{let X=Gc(s,T,"vertex"),W=Gc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+X+`
`+W)}else if(J!=="")console.warn("THREE.WebGLProgram: Program Info Log:",J);else if(R===""||B==="")j=!1;if(j)q.diagnostics={runnable:V,programLog:J,vertexShader:{log:R,prefix:g},fragmentShader:{log:B,prefix:_}}}s.deleteShader(T),s.deleteShader(I),b=new Js(s,f),E=Yx(s,f)}let b;this.getUniforms=function(){if(b===void 0)z(this);return b};let E;this.getAttributes=function(){if(E===void 0)z(this);return E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(D===!1)D=s.getProgramParameter(f,Fx);return D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=I,this}var r0=0;class Sh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:t,fragmentShader:n}=e,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new Eh(e),t.set(e,n);return n}}class Eh{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}}function o0(e,t,n,i,s,r,a){let o=new go,l=new Sh,c=[],{isWebGL2:h,logarithmicDepthBuffer:u,vertexTextures:d,precision:m}=s,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){if(b===0)return"uv";return`uv${b}`}function f(b,E,D,q,J){let R=q.fog,B=J.geometry,V=b.isMeshStandardMaterial?q.environment:null,j=(b.isMeshStandardMaterial?n:t).get(b.envMap||V),X=!!j&&j.mapping===306?j.image.height:null,W=y[b.type];if(b.precision!==null){if(m=s.getMaxPrecision(b.precision),m!==b.precision)console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead.")}let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=Z!==void 0?Z.length:0,U=0;if(B.morphAttributes.position!==void 0)U=1;if(B.morphAttributes.normal!==void 0)U=2;if(B.morphAttributes.color!==void 0)U=3;let Y,ie,se,re;if(W){let Ft=Mn[W];Y=Ft.vertexShader,ie=Ft.fragmentShader}else Y=b.vertexShader,ie=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),re=l.getFragmentShaderID(b);let ce=e.getRenderTarget(),le=J.isInstancedMesh===!0,ue=J.isBatchedMesh===!0,we=!!b.map,L=!!b.matcap,Ke=!!j,Le=!!b.aoMap,xe=!!b.lightMap,me=!!b.bumpMap,de=!!b.normalMap,Fe=!!b.displacementMap,Ne=!!b.emissiveMap,w=!!b.metalnessMap,M=!!b.roughnessMap,F=b.anisotropy>0,ne=b.clearcoat>0,Q=b.iridescence>0,te=b.sheen>0,Ee=b.transmission>0,fe=F&&!!b.anisotropyMap,_e=ne&&!!b.clearcoatMap,Me=ne&&!!b.clearcoatNormalMap,Oe=ne&&!!b.clearcoatRoughnessMap,ee=Q&&!!b.iridescenceMap,gt=Q&&!!b.iridescenceThicknessMap,Ge=te&&!!b.sheenColorMap,Ce=te&&!!b.sheenRoughnessMap,ye=!!b.specularMap,ve=!!b.specularColorMap,We=!!b.specularIntensityMap,tt=Ee&&!!b.transmissionMap,qe=Ee&&!!b.thicknessMap,nt=!!b.gradientMap,oe=!!b.alphaMap,P=b.alphaTest>0,he=!!b.alphaHash,pe=!!b.extensions,Ae=!!B.attributes.uv1,Se=!!B.attributes.uv2,it=!!B.attributes.uv3,rt=0;if(b.toneMapped){if(ce===null||ce.isXRRenderTarget===!0)rt=e.toneMapping}return{isWebGL2:h,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:Y,fragmentShader:ie,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ue,instancing:le,instancingColor:le&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?e.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:"srgb-linear",map:we,matcap:L,envMap:Ke,envMapMode:Ke&&j.mapping,envMapCubeUVHeight:X,aoMap:Le,lightMap:xe,bumpMap:me,normalMap:de,displacementMap:d&&Fe,emissiveMap:Ne,normalMapObjectSpace:de&&b.normalMapType===1,normalMapTangentSpace:de&&b.normalMapType===0,metalnessMap:w,roughnessMap:M,anisotropy:F,anisotropyMap:fe,clearcoat:ne,clearcoatMap:_e,clearcoatNormalMap:Me,clearcoatRoughnessMap:Oe,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:gt,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:ve,specularIntensityMap:We,transmission:Ee,transmissionMap:tt,thicknessMap:qe,gradientMap:nt,opaque:b.transparent===!1&&b.blending===1,alphaMap:oe,alphaTest:P,alphaHash:he,combine:b.combine,mapUv:we&&x(b.map.channel),aoMapUv:Le&&x(b.aoMap.channel),lightMapUv:xe&&x(b.lightMap.channel),bumpMapUv:me&&x(b.bumpMap.channel),normalMapUv:de&&x(b.normalMap.channel),displacementMapUv:Fe&&x(b.displacementMap.channel),emissiveMapUv:Ne&&x(b.emissiveMap.channel),metalnessMapUv:w&&x(b.metalnessMap.channel),roughnessMapUv:M&&x(b.roughnessMap.channel),anisotropyMapUv:fe&&x(b.anisotropyMap.channel),clearcoatMapUv:_e&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(b.sheenRoughnessMap.channel),specularMapUv:ye&&x(b.specularMap.channel),specularColorMapUv:ve&&x(b.specularColorMap.channel),specularIntensityMapUv:We&&x(b.specularIntensityMap.channel),transmissionMapUv:tt&&x(b.transmissionMap.channel),thicknessMapUv:qe&&x(b.thicknessMap.channel),alphaMapUv:oe&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:it,pointsUvs:J.isPoints===!0&&!!B.attributes.uv&&(we||oe),fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:U,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:rt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)==="srgb",premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pe&&b.extensions.derivatives===!0,extensionFragDepth:pe&&b.extensions.fragDepth===!0,extensionDrawBuffers:pe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function g(b){let E=[];if(b.shaderID)E.push(b.shaderID);else E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID);if(b.defines!==void 0)for(let D in b.defines)E.push(D),E.push(b.defines[D]);if(b.isRawShaderMaterial===!1)_(E,b),v(E,b),E.push(e.outputColorSpace);return E.push(b.customProgramCacheKey),E.join()}function _(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){if(o.disableAll(),E.isWebGL2)o.enable(0);if(E.supportsVertexTextures)o.enable(1);if(E.instancing)o.enable(2);if(E.instancingColor)o.enable(3);if(E.matcap)o.enable(4);if(E.envMap)o.enable(5);if(E.normalMapObjectSpace)o.enable(6);if(E.normalMapTangentSpace)o.enable(7);if(E.clearcoat)o.enable(8);if(E.iridescence)o.enable(9);if(E.alphaTest)o.enable(10);if(E.vertexColors)o.enable(11);if(E.vertexAlphas)o.enable(12);if(E.vertexUv1s)o.enable(13);if(E.vertexUv2s)o.enable(14);if(E.vertexUv3s)o.enable(15);if(E.vertexTangents)o.enable(16);if(E.anisotropy)o.enable(17);if(E.alphaHash)o.enable(18);if(E.batching)o.enable(19);if(b.push(o.mask),o.disableAll(),E.fog)o.enable(0);if(E.useFog)o.enable(1);if(E.flatShading)o.enable(2);if(E.logarithmicDepthBuffer)o.enable(3);if(E.skinning)o.enable(4);if(E.morphTargets)o.enable(5);if(E.morphNormals)o.enable(6);if(E.morphColors)o.enable(7);if(E.premultipliedAlpha)o.enable(8);if(E.shadowMapEnabled)o.enable(9);if(E.useLegacyLights)o.enable(10);if(E.doubleSided)o.enable(11);if(E.flipSided)o.enable(12);if(E.useDepthPacking)o.enable(13);if(E.dithering)o.enable(14);if(E.transmission)o.enable(15);if(E.sheen)o.enable(16);if(E.opaque)o.enable(17);if(E.pointsUvs)o.enable(18);if(E.decodeVideoTexture)o.enable(19);b.push(o.mask)}function A(b){let E=y[b.type],D;if(E){let q=Mn[E];D=Jf.clone(q.uniforms)}else D=b.uniforms;return D}function C(b,E){let D;for(let q=0,J=c.length;q<J;q++){let R=c[q];if(R.cacheKey===E){D=R,++D.usedTimes;break}}if(D===void 0)D=new s0(e,E,b,r),c.push(D);return D}function T(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function I(b){l.remove(b)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:A,acquireProgram:C,releaseProgram:T,releaseShaderCache:I,programs:c,dispose:z}}function a0(){let e=new WeakMap;function t(r){let a=e.get(r);if(a===void 0)a={},e.set(r,a);return a}function n(r){e.delete(r)}function i(r,a,o){e.get(r)[a]=o}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function l0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Yc(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function $c(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u,d,m,y,x,f){let g=e[t];if(g===void 0)g={id:u.id,object:u,geometry:d,material:m,groupOrder:y,renderOrder:u.renderOrder,z:x,group:f},e[t]=g;else g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.groupOrder=y,g.renderOrder=u.renderOrder,g.z=x,g.group=f;return t++,g}function o(u,d,m,y,x,f){let g=a(u,d,m,y,x,f);if(m.transmission>0)i.push(g);else if(m.transparent===!0)s.push(g);else n.push(g)}function l(u,d,m,y,x,f){let g=a(u,d,m,y,x,f);if(m.transmission>0)i.unshift(g);else if(m.transparent===!0)s.unshift(g);else n.unshift(g)}function c(u,d){if(n.length>1)n.sort(u||l0);if(i.length>1)i.sort(d||Yc);if(s.length>1)s.sort(d||Yc)}function h(){for(let u=t,d=e.length;u<d;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function c0(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new $c,e.set(i,[a]);else if(s>=r.length)a=new $c,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function h0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Pe};break;case"SpotLight":n={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":n={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function u0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var d0=0;function f0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function p0(e,t){let n=new h0,i=u0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,a=new yt,o=new yt;function l(h,u){let d=0,m=0,y=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let x=0,f=0,g=0,_=0,v=0,A=0,C=0,T=0,I=0,z=0,b=0;h.sort(f0);let E=u===!0?Math.PI:1;for(let q=0,J=h.length;q<J;q++){let R=h[q],{color:B,intensity:V,distance:j}=R,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=B.r*V*E,m+=B.g*V*E,y+=B.b*V*E;else if(R.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(R.sh.coefficients[W],V);b++}else if(R.isDirectionalLight){let W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){let Z=R.shadow,K=i.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.directionalShadow[x]=K,s.directionalShadowMap[x]=X,s.directionalShadowMatrix[x]=R.shadow.matrix,A++}s.directional[x]=W,x++}else if(R.isSpotLight){let W=n.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(V*E),W.distance=j,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,s.spot[g]=W;let Z=R.shadow;if(R.map){if(s.spotLightMap[I]=R.map,I++,Z.updateMatrices(R),R.castShadow)z++}if(s.spotLightMatrix[g]=Z.matrix,R.castShadow){let K=i.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.spotShadow[g]=K,s.spotShadowMap[g]=X,T++}g++}else if(R.isRectAreaLight){let W=n.get(R);W.color.copy(B).multiplyScalar(V),W.halfWidth.set(R.width*0.5,0,0),W.halfHeight.set(0,R.height*0.5,0),s.rectArea[_]=W,_++}else if(R.isPointLight){let W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*E),W.distance=R.distance,W.decay=R.decay,R.castShadow){let Z=R.shadow,K=i.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,s.pointShadow[f]=K,s.pointShadowMap[f]=X,s.pointShadowMatrix[f]=R.shadow.matrix,C++}s.point[f]=W,f++}else if(R.isHemisphereLight){let W=n.get(R);W.skyColor.copy(R.color).multiplyScalar(V*E),W.groundColor.copy(R.groundColor).multiplyScalar(V*E),s.hemi[v]=W,v++}}if(_>0)if(t.isWebGL2)if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2;else s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2;else if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2;else if(e.has("OES_texture_half_float_linear")===!0)s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=y;let D=s.hash;if(D.directionalLength!==x||D.pointLength!==f||D.spotLength!==g||D.rectAreaLength!==_||D.hemiLength!==v||D.numDirectionalShadows!==A||D.numPointShadows!==C||D.numSpotShadows!==T||D.numSpotMaps!==I||D.numLightProbes!==b)s.directional.length=x,s.spot.length=g,s.rectArea.length=_,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=b,D.directionalLength=x,D.pointLength=f,D.spotLength=g,D.rectAreaLength=_,D.hemiLength=v,D.numDirectionalShadows=A,D.numPointShadows=C,D.numSpotShadows=T,D.numSpotMaps=I,D.numLightProbes=b,s.version=d0++}function c(h,u){let d=0,m=0,y=0,x=0,f=0,g=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let A=h[_];if(A.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),d++}else if(A.isSpotLight){let C=s.spot[y];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),y++}else if(A.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),C.halfWidth.set(A.width*0.5,0,0),C.halfHeight.set(0,A.height*0.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let C=s.point[m];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){let C=s.hemi[f];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(g),f++}}}return{setup:l,setupView:c,state:s}}function Jc(e,t){let n=new p0(e,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function m0(e,t){let n=new WeakMap;function i(r,a=0){let o=n.get(r),l;if(o===void 0)l=new Jc(e,t),n.set(r,[l]);else if(a>=o.length)l=new Jc(e,t),o.push(l);else l=o[a];return l}function s(){n=new WeakMap}return{get:i,dispose:s}}class wh extends ci{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Th extends ci{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}var g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`;function _0(e,t,n){let i=new xo,s=new Ve,r=new Ve,a=new Rt,o=new wh({depthPacking:3201}),l=new Th,c={},h=n.maxTextureSize,u={[0]:1,[1]:0,[2]:2},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:g0,fragmentShader:x0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new Wt;y.setAttribute("position",new Gt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new _t(y,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;this.render=function(T,I,z){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(T.length===0)return;let b=e.getRenderTarget(),E=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),q=e.state;q.setBlending(0),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let J=g!==3&&this.type===3,R=g===3&&this.type!==3;for(let B=0,V=T.length;B<V;B++){let j=T[B],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y}if(X.map===null||J===!0||R===!0){let K=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(X.map!==null)X.map.dispose();X.map=new ai(s.x,s.y,K),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();let Z=X.getViewportCount();for(let K=0;K<Z;K++){let U=X.getViewport(K);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),q.viewport(a),X.updateMatrices(j,K),i=X.getFrustum(),A(I,z,X.camera,j,this.type)}if(X.isPointLightShadow!==!0&&this.type===3)_(X,z);X.needsUpdate=!1}g=this.type,f.needsUpdate=!1,e.setRenderTarget(b,E,D)};function _(T,I){let z=t.update(x);if(d.defines.VSM_SAMPLES!==T.blurSamples)d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new ai(s.x,s.y);d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(I,null,z,d,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(I,null,z,m,x,null)}function v(T,I,z,b){let E=null,D=z.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=z.isPointLight===!0?l:o,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let q=E.uuid,J=I.uuid,R=c[q];if(R===void 0)R={},c[q]=R;let B=R[J];if(B===void 0)B=E.clone(),R[J]=B,I.addEventListener("dispose",C);E=B}if(E.visible=I.visible,E.wireframe=I.wireframe,b===3)E.side=I.shadowSide!==null?I.shadowSide:I.side;else E.side=I.shadowSide!==null?I.shadowSide:u[I.side];if(E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let q=e.properties.get(E);q.light=z}return E}function A(T,I,z,b,E){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&E===3)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld);let J=t.update(T),R=T.material;if(Array.isArray(R)){let B=J.groups;for(let V=0,j=B.length;V<j;V++){let X=B[V],W=R[X.materialIndex];if(W&&W.visible){let Z=v(T,W,b,E);T.onBeforeShadow(e,T,I,z,J,Z,X),e.renderBufferDirect(z,null,J,Z,T,X),T.onAfterShadow(e,T,I,z,J,Z,X)}}}else if(R.visible){let B=v(T,R,b,E);T.onBeforeShadow(e,T,I,z,J,B,null),e.renderBufferDirect(z,null,J,B,T,null),T.onAfterShadow(e,T,I,z,J,B,null)}}}let q=T.children;for(let J=0,R=q.length;J<R;J++)A(q[J],I,z,b,E)}function C(T){T.target.removeEventListener("dispose",C);for(let z in c){let b=c[z],E=T.target.uuid;if(E in b)b[E].dispose(),delete b[E]}}}function y0(e,t,n){let i=n.isWebGL2;function s(){let P=!1,he=new Rt,pe=null,Ae=new Rt(0,0,0,0);return{setMask:function(Se){if(pe!==Se&&!P)e.colorMask(Se,Se,Se,Se),pe=Se},setLocked:function(Se){P=Se},setClear:function(Se,it,rt,vt,Ft){if(Ft===!0)Se*=vt,it*=vt,rt*=vt;if(he.set(Se,it,rt,vt),Ae.equals(he)===!1)e.clearColor(Se,it,rt,vt),Ae.copy(he)},reset:function(){P=!1,pe=null,Ae.set(-1,0,0,0)}}}function r(){let P=!1,he=null,pe=null,Ae=null;return{setTest:function(Se){if(Se)ue(e.DEPTH_TEST);else we(e.DEPTH_TEST)},setMask:function(Se){if(he!==Se&&!P)e.depthMask(Se),he=Se},setFunc:function(Se){if(pe!==Se){switch(Se){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=Se}},setLocked:function(Se){P=Se},setClear:function(Se){if(Ae!==Se)e.clearDepth(Se),Ae=Se},reset:function(){P=!1,he=null,pe=null,Ae=null}}}function a(){let P=!1,he=null,pe=null,Ae=null,Se=null,it=null,rt=null,vt=null,Ft=null;return{setTest:function(Ye){if(!P)if(Ye)ue(e.STENCIL_TEST);else we(e.STENCIL_TEST)},setMask:function(Ye){if(he!==Ye&&!P)e.stencilMask(Ye),he=Ye},setFunc:function(Ye,vn,bn){if(pe!==Ye||Ae!==vn||Se!==bn)e.stencilFunc(Ye,vn,bn),pe=Ye,Ae=vn,Se=bn},setOp:function(Ye,vn,bn){if(it!==Ye||rt!==vn||vt!==bn)e.stencilOp(Ye,vn,bn),it=Ye,rt=vn,vt=bn},setLocked:function(Ye){P=Ye},setClear:function(Ye){if(Ft!==Ye)e.clearStencil(Ye),Ft=Ye},reset:function(){P=!1,he=null,pe=null,Ae=null,Se=null,it=null,rt=null,vt=null,Ft=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},m={},y=new WeakMap,x=[],f=null,g=!1,_=null,v=null,A=null,C=null,T=null,I=null,z=null,b=new Pe(0,0,0),E=0,D=!1,q=null,J=null,R=null,B=null,V=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,Z=e.getParameter(e.VERSION);if(Z.indexOf("WebGL")!==-1)W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=W>=1;else if(Z.indexOf("OpenGL ES")!==-1)W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=W>=2;let K=null,U={},Y=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),se=new Rt().fromArray(Y),re=new Rt().fromArray(ie);function ce(P,he,pe,Ae){let Se=new Uint8Array(4),it=e.createTexture();e.bindTexture(P,it),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let rt=0;rt<pe;rt++)if(i&&(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY))e.texImage3D(he,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,Se);else e.texImage2D(he+rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Se);return it}let le={};if(le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i)le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1);o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(e.DEPTH_TEST),l.setFunc(3),Ne(!1),w(1),ue(e.CULL_FACE),de(0);function ue(P){if(d[P]!==!0)e.enable(P),d[P]=!0}function we(P){if(d[P]!==!1)e.disable(P),d[P]=!1}function L(P,he){if(m[P]!==he){if(e.bindFramebuffer(P,he),m[P]=he,i){if(P===e.DRAW_FRAMEBUFFER)m[e.FRAMEBUFFER]=he;if(P===e.FRAMEBUFFER)m[e.DRAW_FRAMEBUFFER]=he}return!0}return!1}function Ke(P,he){let pe=x,Ae=!1;if(P){if(pe=y.get(he),pe===void 0)pe=[],y.set(he,pe);if(P.isWebGLMultipleRenderTargets){let Se=P.texture;if(pe.length!==Se.length||pe[0]!==e.COLOR_ATTACHMENT0){for(let it=0,rt=Se.length;it<rt;it++)pe[it]=e.COLOR_ATTACHMENT0+it;pe.length=Se.length,Ae=!0}}else if(pe[0]!==e.COLOR_ATTACHMENT0)pe[0]=e.COLOR_ATTACHMENT0,Ae=!0}else if(pe[0]!==e.BACK)pe[0]=e.BACK,Ae=!0;if(Ae)if(n.isWebGL2)e.drawBuffers(pe);else t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe)}function Le(P){if(f!==P)return e.useProgram(P),f=P,!0;return!1}let xe={[100]:e.FUNC_ADD,[101]:e.FUNC_SUBTRACT,[102]:e.FUNC_REVERSE_SUBTRACT};if(i)xe[103]=e.MIN,xe[104]=e.MAX;else{let P=t.get("EXT_blend_minmax");if(P!==null)xe[103]=P.MIN_EXT,xe[104]=P.MAX_EXT}let me={[200]:e.ZERO,[201]:e.ONE,[202]:e.SRC_COLOR,[204]:e.SRC_ALPHA,[210]:e.SRC_ALPHA_SATURATE,[208]:e.DST_COLOR,[206]:e.DST_ALPHA,[203]:e.ONE_MINUS_SRC_COLOR,[205]:e.ONE_MINUS_SRC_ALPHA,[209]:e.ONE_MINUS_DST_COLOR,[207]:e.ONE_MINUS_DST_ALPHA,[211]:e.CONSTANT_COLOR,[212]:e.ONE_MINUS_CONSTANT_COLOR,[213]:e.CONSTANT_ALPHA,[214]:e.ONE_MINUS_CONSTANT_ALPHA};function de(P,he,pe,Ae,Se,it,rt,vt,Ft,Ye){if(P===0){if(g===!0)we(e.BLEND),g=!1;return}if(g===!1)ue(e.BLEND),g=!0;if(P!==5){if(P!==_||Ye!==D){if(v!==100||T!==100)e.blendEquation(e.FUNC_ADD),v=100,T=100;if(Ye)switch(P){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,C=null,I=null,z=null,b.set(0,0,0),E=0,_=P,D=Ye}return}if(Se=Se||he,it=it||pe,rt=rt||Ae,he!==v||Se!==T)e.blendEquationSeparate(xe[he],xe[Se]),v=he,T=Se;if(pe!==A||Ae!==C||it!==I||rt!==z)e.blendFuncSeparate(me[pe],me[Ae],me[it],me[rt]),A=pe,C=Ae,I=it,z=rt;if(vt.equals(b)===!1||Ft!==E)e.blendColor(vt.r,vt.g,vt.b,Ft),b.copy(vt),E=Ft;_=P,D=!1}function Fe(P,he){P.side===2?we(e.CULL_FACE):ue(e.CULL_FACE);let pe=P.side===1;if(he)pe=!pe;Ne(pe),P.blending===1&&P.transparent===!1?de(0):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Ae=P.stencilWrite;if(c.setTest(Ae),Ae)c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):we(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){if(q!==P){if(P)e.frontFace(e.CW);else e.frontFace(e.CCW);q=P}}function w(P){if(P!==0){if(ue(e.CULL_FACE),P!==J)if(P===1)e.cullFace(e.BACK);else if(P===2)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else we(e.CULL_FACE);J=P}function M(P){if(P!==R){if(X)e.lineWidth(P);R=P}}function F(P,he,pe){if(P){if(ue(e.POLYGON_OFFSET_FILL),B!==he||V!==pe)e.polygonOffset(he,pe),B=he,V=pe}else we(e.POLYGON_OFFSET_FILL)}function ne(P){if(P)ue(e.SCISSOR_TEST);else we(e.SCISSOR_TEST)}function Q(P){if(P===void 0)P=e.TEXTURE0+j-1;if(K!==P)e.activeTexture(P),K=P}function te(P,he,pe){if(pe===void 0)if(K===null)pe=e.TEXTURE0+j-1;else pe=K;let Ae=U[pe];if(Ae===void 0)Ae={type:void 0,texture:void 0},U[pe]=Ae;if(Ae.type!==P||Ae.texture!==he){if(K!==pe)e.activeTexture(pe),K=pe;e.bindTexture(P,he||le[P]),Ae.type=P,Ae.texture=he}}function Ee(){let P=U[K];if(P!==void 0&&P.type!==void 0)e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function fe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){if(se.equals(P)===!1)e.scissor(P.x,P.y,P.z,P.w),se.copy(P)}function tt(P){if(re.equals(P)===!1)e.viewport(P.x,P.y,P.z,P.w),re.copy(P)}function qe(P,he){let pe=u.get(he);if(pe===void 0)pe=new WeakMap,u.set(he,pe);let Ae=pe.get(P);if(Ae===void 0)Ae=e.getUniformBlockIndex(he,P.name),pe.set(P,Ae)}function nt(P,he){let Ae=u.get(he).get(P);if(h.get(he)!==Ae)e.uniformBlockBinding(he,Ae,P.__bindingPointIndex),h.set(he,Ae)}function oe(){if(e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0)e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null);e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},K=null,U={},m={},y=new WeakMap,x=[],f=null,g=!1,_=null,v=null,A=null,C=null,T=null,I=null,z=null,b=new Pe(0,0,0),E=0,D=!1,q=null,J=null,R=null,B=null,V=null,se.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:we,bindFramebuffer:L,drawBuffers:Ke,useProgram:Le,setBlending:de,setMaterial:Fe,setFlipSided:Ne,setCullFace:w,setLineWidth:M,setPolygonOffset:F,setScissorTest:ne,activeTexture:Q,bindTexture:te,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:ye,texImage3D:ve,updateUBOMapping:qe,uniformBlockBinding:nt,texStorage2D:Ge,texStorage3D:Ce,texSubImage2D:Me,texSubImage3D:Oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:gt,scissor:We,viewport:tt,reset:oe}}function v0(e,t,n,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function y(w,M){return m?new OffscreenCanvas(w,M):uo("canvas")}function x(w,M,F,ne){let Q=1;if(w.width>ne||w.height>ne)Q=ne/Math.max(w.width,w.height);if(Q<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let te=M?ho:Math.floor,Ee=te(Q*w.width),fe=te(Q*w.height);if(u===void 0)u=y(Ee,fe);let _e=F?y(Ee,fe):u;return _e.width=Ee,_e.height=fe,_e.getContext("2d").drawImage(w,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+fe+")."),_e}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+").");return w}return w}function f(w){return Ia(w.width)&&Ia(w.height)}function g(w){if(o)return!1;return w.wrapS!==1001||w.wrapT!==1001||w.minFilter!==1003&&w.minFilter!==1006}function _(w,M){return w.generateMipmaps&&M&&w.minFilter!==1003&&w.minFilter!==1006}function v(w){e.generateMipmap(w)}function A(w,M,F,ne,Q=!1){if(o===!1)return M;if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=M;if(M===e.RED){if(F===e.FLOAT)te=e.R32F;if(F===e.HALF_FLOAT)te=e.R16F;if(F===e.UNSIGNED_BYTE)te=e.R8}if(M===e.RED_INTEGER){if(F===e.UNSIGNED_BYTE)te=e.R8UI;if(F===e.UNSIGNED_SHORT)te=e.R16UI;if(F===e.UNSIGNED_INT)te=e.R32UI;if(F===e.BYTE)te=e.R8I;if(F===e.SHORT)te=e.R16I;if(F===e.INT)te=e.R32I}if(M===e.RG){if(F===e.FLOAT)te=e.RG32F;if(F===e.HALF_FLOAT)te=e.RG16F;if(F===e.UNSIGNED_BYTE)te=e.RG8}if(M===e.RGBA){let Ee=Q?"linear":et.getTransfer(ne);if(F===e.FLOAT)te=e.RGBA32F;if(F===e.HALF_FLOAT)te=e.RGBA16F;if(F===e.UNSIGNED_BYTE)te=Ee==="srgb"?e.SRGB8_ALPHA8:e.RGBA8;if(F===e.UNSIGNED_SHORT_4_4_4_4)te=e.RGBA4;if(F===e.UNSIGNED_SHORT_5_5_5_1)te=e.RGB5_A1}if(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)t.get("EXT_color_buffer_float");return te}function C(w,M,F){if(_(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006)return Math.log2(Math.max(M.width,M.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return M.mipmaps.length;else return 1}function T(w){if(w===1003||w===1004||w===1005)return e.NEAREST;return e.LINEAR}function I(w){let M=w.target;if(M.removeEventListener("dispose",I),b(M),M.isVideoTexture)h.delete(M)}function z(w){let M=w.target;M.removeEventListener("dispose",z),D(M)}function b(w){let M=i.get(w);if(M.__webglInit===void 0)return;let F=w.source,ne=d.get(F);if(ne){let Q=ne[M.__cacheKey];if(Q.usedTimes--,Q.usedTimes===0)E(w);if(Object.keys(ne).length===0)d.delete(F)}i.remove(w)}function E(w){let M=i.get(w);e.deleteTexture(M.__webglTexture);let F=w.source,ne=d.get(F);delete ne[M.__cacheKey],a.memory.textures--}function D(w){let M=w.texture,F=i.get(w),ne=i.get(M);if(ne.__webglTexture!==void 0)e.deleteTexture(ne.__webglTexture),a.memory.textures--;if(w.depthTexture)w.depthTexture.dispose();if(w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let te=0;te<F.__webglFramebuffer[Q].length;te++)e.deleteFramebuffer(F.__webglFramebuffer[Q][te]);else e.deleteFramebuffer(F.__webglFramebuffer[Q]);if(F.__webglDepthbuffer)e.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)e.deleteFramebuffer(F.__webglFramebuffer[Q]);else e.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer)e.deleteRenderbuffer(F.__webglDepthbuffer);if(F.__webglMultisampledFramebuffer)e.deleteFramebuffer(F.__webglMultisampledFramebuffer);if(F.__webglColorRenderbuffer){for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)if(F.__webglColorRenderbuffer[Q])e.deleteRenderbuffer(F.__webglColorRenderbuffer[Q])}if(F.__webglDepthRenderbuffer)e.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=M.length;Q<te;Q++){let Ee=i.get(M[Q]);if(Ee.__webglTexture)e.deleteTexture(Ee.__webglTexture),a.memory.textures--;i.remove(M[Q])}i.remove(M),i.remove(w)}let q=0;function J(){q=0}function R(){let w=q;if(w>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures);return q+=1,w}function B(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function V(w,M){let F=i.get(w);if(w.isVideoTexture)Fe(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,w,M);return}}n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+M)}function j(w,M){let F=i.get(w);if(w.version>0&&F.__version!==w.version){se(F,w,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+M)}function X(w,M){let F=i.get(w);if(w.version>0&&F.__version!==w.version){se(F,w,M);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+M)}function W(w,M){let F=i.get(w);if(w.version>0&&F.__version!==w.version){re(F,w,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+M)}let Z={[1000]:e.REPEAT,[1001]:e.CLAMP_TO_EDGE,[1002]:e.MIRRORED_REPEAT},K={[1003]:e.NEAREST,[1004]:e.NEAREST_MIPMAP_NEAREST,[1005]:e.NEAREST_MIPMAP_LINEAR,[1006]:e.LINEAR,[1007]:e.LINEAR_MIPMAP_NEAREST,[1008]:e.LINEAR_MIPMAP_LINEAR},U={[512]:e.NEVER,[519]:e.ALWAYS,[513]:e.LESS,[515]:e.LEQUAL,[514]:e.EQUAL,[518]:e.GEQUAL,[516]:e.GREATER,[517]:e.NOTEQUAL};function Y(w,M,F){if(F){if(e.texParameteri(w,e.TEXTURE_WRAP_S,Z[M.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,Z[M.wrapT]),w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)e.texParameteri(w,e.TEXTURE_WRAP_R,Z[M.wrapR]);e.texParameteri(w,e.TEXTURE_MAG_FILTER,K[M.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,K[M.minFilter])}else{if(e.texParameteri(w,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(w,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)e.texParameteri(w,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE);if(M.wrapS!==1001||M.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(e.texParameteri(w,e.TEXTURE_MAG_FILTER,T(M.magFilter)),e.texParameteri(w,e.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==1003&&M.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(M.compareFunction)e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,U[M.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){let ne=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===1003)return;if(M.minFilter!==1005&&M.minFilter!==1008)return;if(M.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(o===!1&&(M.type===1016&&t.has("OES_texture_half_float_linear")===!1))return;if(M.anisotropy>1||i.get(M).__currentAnisotropy)e.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}function ie(w,M){let F=!1;if(w.__webglInit===void 0)w.__webglInit=!0,M.addEventListener("dispose",I);let ne=M.source,Q=d.get(ne);if(Q===void 0)Q={},d.set(ne,Q);let te=B(M);if(te!==w.__cacheKey){if(Q[te]===void 0)Q[te]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,F=!0;Q[te].usedTimes++;let Ee=Q[w.__cacheKey];if(Ee!==void 0){if(Q[w.__cacheKey].usedTimes--,Ee.usedTimes===0)E(M)}w.__cacheKey=te,w.__webglTexture=Q[te].texture}return F}function se(w,M,F){let ne=e.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)ne=e.TEXTURE_2D_ARRAY;if(M.isData3DTexture)ne=e.TEXTURE_3D;let Q=ie(w,M),te=M.source;n.bindTexture(ne,w.__webglTexture,e.TEXTURE0+F);let Ee=i.get(te);if(te.version!==Ee.__version||Q===!0){n.activeTexture(e.TEXTURE0+F);let fe=et.getPrimaries(et.workingColorSpace),_e=M.colorSpace===""?null:et.getPrimaries(M.colorSpace),Me=M.colorSpace===""||fe===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Oe=g(M)&&f(M.image)===!1,ee=x(M.image,Oe,!1,s.maxTextureSize);ee=Ne(M,ee);let gt=f(ee)||o,Ge=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),ye=A(M.internalFormat,Ge,Ce,M.colorSpace,M.isVideoTexture);Y(ne,M,gt);let ve,We=M.mipmaps,tt=o&&M.isVideoTexture!==!0&&ye!==36196,qe=Ee.__version===void 0||Q===!0,nt=C(M,ee,gt);if(M.isDepthTexture){if(ye=e.DEPTH_COMPONENT,o)if(M.type===1015)ye=e.DEPTH_COMPONENT32F;else if(M.type===1014)ye=e.DEPTH_COMPONENT24;else if(M.type===1020)ye=e.DEPTH24_STENCIL8;else ye=e.DEPTH_COMPONENT16;else if(M.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(M.format===1026&&ye===e.DEPTH_COMPONENT){if(M.type!==1012&&M.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=1014,Ce=r.convert(M.type)}if(M.format===1027&&ye===e.DEPTH_COMPONENT){if(ye=e.DEPTH_STENCIL,M.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=1020,Ce=r.convert(M.type)}if(qe)if(tt)n.texStorage2D(e.TEXTURE_2D,1,ye,ee.width,ee.height);else n.texImage2D(e.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ge,Ce,null)}else if(M.isDataTexture)if(We.length>0&&gt){if(tt&&qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],tt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,Ce,ve.data);else n.texImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,Ge,Ce,ve.data);M.generateMipmaps=!1}else if(tt){if(qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,ee.width,ee.height);n.texSubImage2D(e.TEXTURE_2D,0,0,0,ee.width,ee.height,Ge,Ce,ee.data)}else n.texImage2D(e.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ge,Ce,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(tt&&qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,ye,We[0].width,We[0].height,ee.depth);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],M.format!==1023)if(Ge!==null)if(tt)n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,Ge,ve.data,0,0);else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,oe,ye,ve.width,ve.height,ee.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(tt)n.texSubImage3D(e.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,Ge,Ce,ve.data);else n.texImage3D(e.TEXTURE_2D_ARRAY,oe,ye,ve.width,ve.height,ee.depth,0,Ge,Ce,ve.data)}else{if(tt&&qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],M.format!==1023)if(Ge!==null)if(tt)n.compressedTexSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,ve.data);else n.compressedTexImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,ve.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(tt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,Ce,ve.data);else n.texImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,Ge,Ce,ve.data)}else if(M.isDataArrayTexture)if(tt){if(qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,ye,ee.width,ee.height,ee.depth);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Ce,ee.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,Ge,Ce,ee.data);else if(M.isData3DTexture)if(tt){if(qe)n.texStorage3D(e.TEXTURE_3D,nt,ye,ee.width,ee.height,ee.depth);n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Ce,ee.data)}else n.texImage3D(e.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,Ge,Ce,ee.data);else if(M.isFramebufferTexture){if(qe)if(tt)n.texStorage2D(e.TEXTURE_2D,nt,ye,ee.width,ee.height);else{let oe=ee.width,P=ee.height;for(let he=0;he<nt;he++)n.texImage2D(e.TEXTURE_2D,he,ye,oe,P,0,Ge,Ce,null),oe>>=1,P>>=1}}else if(We.length>0&&gt){if(tt&&qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],tt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,Ge,Ce,ve);else n.texImage2D(e.TEXTURE_2D,oe,ye,Ge,Ce,ve);M.generateMipmaps=!1}else if(tt){if(qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,ee.width,ee.height);n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ge,Ce,ee)}else n.texImage2D(e.TEXTURE_2D,0,ye,Ge,Ce,ee);if(_(M,gt))v(ne);if(Ee.__version=te.version,M.onUpdate)M.onUpdate(M)}w.__version=M.version}function re(w,M,F){if(M.image.length!==6)return;let ne=ie(w,M),Q=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+F);let te=i.get(Q);if(Q.version!==te.__version||ne===!0){n.activeTexture(e.TEXTURE0+F);let Ee=et.getPrimaries(et.workingColorSpace),fe=M.colorSpace===""?null:et.getPrimaries(M.colorSpace),_e=M.colorSpace===""||Ee===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Me=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++){if(!Me&&!Oe)ee[oe]=x(M.image[oe],!1,!0,s.maxCubemapSize);else ee[oe]=Oe?M.image[oe].image:M.image[oe];ee[oe]=Ne(M,ee[oe])}let gt=ee[0],Ge=f(gt)||o,Ce=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),ve=A(M.internalFormat,Ce,ye,M.colorSpace),We=o&&M.isVideoTexture!==!0,tt=te.__version===void 0||ne===!0,qe=C(M,gt,Ge);Y(e.TEXTURE_CUBE_MAP,M,Ge);let nt;if(Me){if(We&&tt)n.texStorage2D(e.TEXTURE_CUBE_MAP,qe,ve,gt.width,gt.height);for(let oe=0;oe<6;oe++){nt=ee[oe].mipmaps;for(let P=0;P<nt.length;P++){let he=nt[P];if(M.format!==1023)if(Ce!==null)if(We)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,he.width,he.height,Ce,he.data);else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,ve,he.width,he.height,0,he.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,he.width,he.height,Ce,ye,he.data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,ve,he.width,he.height,0,Ce,ye,he.data)}}}else{if(nt=M.mipmaps,We&&tt){if(nt.length>0)qe++;n.texStorage2D(e.TEXTURE_CUBE_MAP,qe,ve,ee[0].width,ee[0].height)}for(let oe=0;oe<6;oe++)if(Oe){if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Ce,ye,ee[oe].data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,ee[oe].width,ee[oe].height,0,Ce,ye,ee[oe].data);for(let P=0;P<nt.length;P++){let pe=nt[P].image[oe].image;if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,pe.width,pe.height,Ce,ye,pe.data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,ve,pe.width,pe.height,0,Ce,ye,pe.data)}}else{if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce,ye,ee[oe]);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,Ce,ye,ee[oe]);for(let P=0;P<nt.length;P++){let he=nt[P];if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,Ce,ye,he.image[oe]);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,ve,Ce,ye,he.image[oe])}}}if(_(M,Ge))v(e.TEXTURE_CUBE_MAP);if(te.__version=Q.version,M.onUpdate)M.onUpdate(M)}w.__version=M.version}function ce(w,M,F,ne,Q,te){let Ee=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),_e=A(F.internalFormat,Ee,fe,F.colorSpace);if(!i.get(M).__hasExternalTextures){let Oe=Math.max(1,M.width>>te),ee=Math.max(1,M.height>>te);if(Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY)n.texImage3D(Q,te,_e,Oe,ee,M.depth,0,Ee,fe,null);else n.texImage2D(Q,te,_e,Oe,ee,0,Ee,fe,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,w),de(M))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,Q,i.get(F).__webglTexture,0,me(M));else if(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ne,Q,i.get(F).__webglTexture,te);n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(w,M,F){if(e.bindRenderbuffer(e.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ne=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(F||de(M)){let Q=M.depthTexture;if(Q&&Q.isDepthTexture){if(Q.type===1015)ne=e.DEPTH_COMPONENT32F;else if(Q.type===1014)ne=e.DEPTH_COMPONENT24}let te=me(M);if(de(M))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,ne,M.width,M.height);else e.renderbufferStorageMultisample(e.RENDERBUFFER,te,ne,M.width,M.height)}else e.renderbufferStorage(e.RENDERBUFFER,ne,M.width,M.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let ne=me(M);if(F&&de(M)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,ne,e.DEPTH24_STENCIL8,M.width,M.height);else if(de(M))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ne,e.DEPTH24_STENCIL8,M.width,M.height);else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,M.width,M.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,w)}else{let ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<ne.length;Q++){let te=ne[Q],Ee=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),_e=A(te.internalFormat,Ee,fe,te.colorSpace),Me=me(M);if(F&&de(M)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,_e,M.width,M.height);else if(de(M))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me,_e,M.width,M.height);else e.renderbufferStorage(e.RENDERBUFFER,_e,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ue(w,M){if(M&&M.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;V(M.depthTexture,0);let ne=i.get(M.depthTexture).__webglTexture,Q=me(M);if(M.depthTexture.format===1026)if(de(M))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0);else if(M.depthTexture.format===1027)if(de(M))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0);else throw Error("Unknown depthTexture format")}function we(w){let M=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,w)}else if(F){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=e.createRenderbuffer(),le(M.__webglDepthbuffer[ne],w,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=e.createRenderbuffer(),le(M.__webglDepthbuffer,w,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(w,M,F){let ne=i.get(w);if(M!==void 0)ce(ne.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(F!==void 0)we(w)}function Ke(w){let M=w.texture,F=i.get(w),ne=i.get(M);if(w.addEventListener("dispose",z),w.isWebGLMultipleRenderTargets!==!0){if(ne.__webglTexture===void 0)ne.__webglTexture=e.createTexture();ne.__version=M.version,a.memory.textures++}let Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,Ee=f(w)||o;if(Q){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)F.__webglFramebuffer[fe][_e]=e.createFramebuffer()}else F.__webglFramebuffer[fe]=e.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)F.__webglFramebuffer[fe]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(te)if(s.drawBuffers){let fe=w.texture;for(let _e=0,Me=fe.length;_e<Me;_e++){let Oe=i.get(fe[_e]);if(Oe.__webglTexture===void 0)Oe.__webglTexture=e.createTexture(),a.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&de(w)===!1){let fe=te?M:[M];F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){let Me=fe[_e];F.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[_e]);let Oe=r.convert(Me.format,Me.colorSpace),ee=r.convert(Me.type),gt=A(Me.internalFormat,Oe,ee,Me.colorSpace,w.isXRRenderTarget===!0),Ge=me(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ge,gt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,F.__webglColorRenderbuffer[_e])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer)F.__webglDepthRenderbuffer=e.createRenderbuffer(),le(F.__webglDepthRenderbuffer,w,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Q){n.bindTexture(e.TEXTURE_CUBE_MAP,ne.__webglTexture),Y(e.TEXTURE_CUBE_MAP,M,Ee);for(let fe=0;fe<6;fe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)ce(F.__webglFramebuffer[fe][_e],w,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else ce(F.__webglFramebuffer[fe],w,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);if(_(M,Ee))v(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(te){let fe=w.texture;for(let _e=0,Me=fe.length;_e<Me;_e++){let Oe=fe[_e],ee=i.get(Oe);if(n.bindTexture(e.TEXTURE_2D,ee.__webglTexture),Y(e.TEXTURE_2D,Oe,Ee),ce(F.__webglFramebuffer,w,Oe,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,0),_(Oe,Ee))v(e.TEXTURE_2D)}n.unbindTexture()}else{let fe=e.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)if(o)fe=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(n.bindTexture(fe,ne.__webglTexture),Y(fe,M,Ee),o&&M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)ce(F.__webglFramebuffer[_e],w,M,e.COLOR_ATTACHMENT0,fe,_e);else ce(F.__webglFramebuffer,w,M,e.COLOR_ATTACHMENT0,fe,0);if(_(M,Ee))v(fe);n.unbindTexture()}if(w.depthBuffer)we(w)}function Le(w){let M=f(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,Q=F.length;ne<Q;ne++){let te=F[ne];if(_(te,M)){let Ee=w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,fe=i.get(te).__webglTexture;n.bindTexture(Ee,fe),v(Ee),n.unbindTexture()}}}function xe(w){if(o&&w.samples>0&&de(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],{width:F,height:ne}=w,Q=e.COLOR_BUFFER_BIT,te=[],Ee=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(w),_e=w.isWebGLMultipleRenderTargets===!0;if(_e)for(let Me=0;Me<M.length;Me++)n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(te.push(e.COLOR_ATTACHMENT0+Me),w.depthBuffer)te.push(Ee);let Oe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Oe===!1){if(w.depthBuffer)Q|=e.DEPTH_BUFFER_BIT;if(w.stencilBuffer)Q|=e.STENCIL_BUFFER_BIT}if(_e)e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[Me]);if(Oe===!0)e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Ee]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Ee]);if(_e){let ee=i.get(M[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ee,0)}if(e.blitFramebuffer(0,0,F,ne,0,0,F,ne,Q,e.NEAREST),c)e.invalidateFramebuffer(e.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<M.length;Me++){n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,fe.__webglColorRenderbuffer[Me]);let Oe=i.get(M[Me]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,Oe,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function me(w){return Math.min(s.maxSamples,w.samples)}function de(w){let M=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(w){let M=a.render.frame;if(h.get(w)!==M)h.set(w,M),w.update()}function Ne(w,M){let{colorSpace:F,format:ne,type:Q}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===1035)return M;if(F!=="srgb-linear"&&F!=="")if(et.getTransfer(F)==="srgb"){if(o===!1)if(t.has("EXT_sRGB")===!0&&ne===1023)w.format=1035,w.minFilter=1006,w.generateMipmaps=!1;else M=za.sRGBToLinear(M);else if(ne!==1023||Q!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",F);return M}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=L,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=de}function b0(e,t,n){let i=n.isWebGL2;function s(r,a=""){let o,l=et.getTransfer(a);if(r===1009)return e.UNSIGNED_BYTE;if(r===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return e.BYTE;if(r===1011)return e.SHORT;if(r===1012)return e.UNSIGNED_SHORT;if(r===1013)return e.INT;if(r===1014)return e.UNSIGNED_INT;if(r===1015)return e.FLOAT;if(r===1016){if(i)return e.HALF_FLOAT;if(o=t.get("OES_texture_half_float"),o!==null)return o.HALF_FLOAT_OES;else return null}if(r===1021)return e.ALPHA;if(r===1023)return e.RGBA;if(r===1024)return e.LUMINANCE;if(r===1025)return e.LUMINANCE_ALPHA;if(r===1026)return e.DEPTH_COMPONENT;if(r===1027)return e.DEPTH_STENCIL;if(r===1035)if(o=t.get("EXT_sRGB"),o!==null)return o.SRGB_ALPHA_EXT;else return null;if(r===1028)return e.RED;if(r===1029)return e.RED_INTEGER;if(r===1030)return e.RG;if(r===1031)return e.RG_INTEGER;if(r===1033)return e.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(l==="srgb")if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)if(o=t.get("WEBGL_compressed_texture_etc1"),o!==null)return o.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(r===37492||r===37496)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===37492)return l==="srgb"?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===37496)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===37808)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===36492)return l==="srgb"?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===1020){if(i)return e.UNSIGNED_INT_24_8;if(o=t.get("WEBGL_depth_texture"),o!==null)return o.UNSIGNED_INT_24_8_WEBGL;else return null}return e[r]!==void 0?e[r]:null}return{convert:s}}class Ah extends zt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class oi extends Pt{constructor(){super();this.isGroup=!0,this.type="Group"}}var M0={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),f=this._getHandJoint(l,y);if(x!==null)f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius;f.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=0.02,m=0.005;if(l.inputState.pinching&&u>d+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=d-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(M0)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rh extends Li{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,m=null,y=t.getContextAttributes(),x=null,f=null,g=[],_=[],v=new Ve,A=null,C=new zt;C.layers.enable(1),C.viewport=new Rt;let T=new zt;T.layers.enable(2),T.viewport=new Rt;let I=[C,T],z=new Ah;z.layers.enable(1),z.layers.enable(2);let b=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Y=g[U];if(Y===void 0)Y=new co,g[U]=Y;return Y.getTargetRaySpace()},this.getControllerGrip=function(U){let Y=g[U];if(Y===void 0)Y=new co,g[U]=Y;return Y.getGripSpace()},this.getHand=function(U){let Y=g[U];if(Y===void 0)Y=new co,g[U]=Y;return Y.getHandSpace()};function D(U){let Y=_.indexOf(U.inputSource);if(Y===-1)return;let ie=g[Y];if(ie!==void 0)ie.update(U.inputSource,U.frame,l||r),ie.dispatchEvent({type:U.type,data:U.inputSource})}function q(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",J);for(let U=0;U<g.length;U++){let Y=_[U];if(Y===null)continue;_[U]=null,g[U].disconnect(Y)}b=null,E=null,e.setRenderTarget(x),d=null,u=null,h=null,i=null,f=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){if(s=U,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){if(a=U,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",q),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0)await t.makeXRCompatible();if(A=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new ai(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,ie=null,se=null;if(y.depth)se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=y.stencil?1027:1026,ie=y.stencil?1020:1014;let re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(re),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new ai(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Xa(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ce=e.properties.get(f);ce.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function J(U){for(let Y=0;Y<U.removed.length;Y++){let ie=U.removed[Y],se=_.indexOf(ie);if(se>=0)_[se]=null,g[se].disconnect(ie)}for(let Y=0;Y<U.added.length;Y++){let ie=U.added[Y],se=_.indexOf(ie);if(se===-1){for(let ce=0;ce<g.length;ce++)if(ce>=_.length){_.push(ie),se=ce;break}else if(_[ce]===null){_[ce]=ie,se=ce;break}if(se===-1)break}let re=g[se];if(re)re.connect(ie)}}let R=new N,B=new N;function V(U,Y,ie){R.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);let se=R.distanceTo(B),re=Y.projectionMatrix.elements,ce=ie.projectionMatrix.elements,le=re[14]/(re[10]-1),ue=re[14]/(re[10]+1),we=(re[9]+1)/re[5],L=(re[9]-1)/re[5],Ke=(re[8]-1)/re[0],Le=(ce[8]+1)/ce[0],xe=le*Ke,me=le*Le,de=se/(-Ke+Le),Fe=de*-Ke;Y.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Fe),U.translateZ(de),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let Ne=le+de,w=ue+de,M=xe-Fe,F=me+(se-Fe),ne=we*ue/w*Ne,Q=L*ue/w*Ne;U.projectionMatrix.makePerspective(M,F,ne,Q,Ne,w),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function j(U,Y){if(Y===null)U.matrixWorld.copy(U.matrix);else U.matrixWorld.multiplyMatrices(Y.matrixWorld,U.matrix);U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;if(z.near=T.near=C.near=U.near,z.far=T.far=C.far=U.far,b!==z.near||E!==z.far)i.updateRenderState({depthNear:z.near,depthFar:z.far}),b=z.near,E=z.far;let Y=U.parent,ie=z.cameras;j(z,Y);for(let se=0;se<ie.length;se++)j(ie[se],Y);if(ie.length===2)V(z,C,T);else z.projectionMatrix.copy(C.projectionMatrix);X(U,z,Y)};function X(U,Y,ie){if(ie===null)U.matrix.copy(Y.matrixWorld);else U.matrix.copy(ie.matrixWorld),U.matrix.invert(),U.matrix.multiply(Y.matrixWorld);if(U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse),U.isPerspectiveCamera)U.fov=js*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(u===null&&d===null)return;return o},this.setFoveation=function(U){if(o=U,u!==null)u.fixedFoveation=U;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=U};let W=null;function Z(U,Y){if(c=Y.getViewerPose(l||r),m=Y,c!==null){let ie=c.views;if(d!==null)e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f);let se=!1;if(ie.length!==z.cameras.length)z.cameras.length=0,se=!0;for(let re=0;re<ie.length;re++){let ce=ie[re],le=null;if(d!==null)le=d.getViewport(ce);else{let we=h.getViewSubImage(u,ce);if(le=we.viewport,re===0)e.setRenderTargetTextures(f,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f)}let ue=I[re];if(ue===void 0)ue=new zt,ue.layers.enable(re),ue.viewport=new Rt,I[re]=ue;if(ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(le.x,le.y,le.width,le.height),re===0)z.matrix.copy(ue.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(se===!0)z.cameras.push(ue)}}for(let ie=0;ie<g.length;ie++){let se=_[ie],re=g[ie];if(se!==null&&re!==void 0)re.update(se,Y,l||r)}if(W)W(U,Y);if(Y.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:Y});m=null}let K=new ph;K.setAnimationLoop(Z),this.setAnimationLoop=function(U){W=U},this.dispose=function(){}}}function S0(e,t){function n(f,g){if(f.matrixAutoUpdate===!0)f.updateMatrix();g.value.copy(f.matrix)}function i(f,g){if(g.color.getRGB(f.fogColor.value,uh(e)),g.isFog)f.fogNear.value=g.near,f.fogFar.value=g.far;else if(g.isFogExp2)f.fogDensity.value=g.density}function s(f,g,_,v,A){if(g.isMeshBasicMaterial)r(f,g);else if(g.isMeshLambertMaterial)r(f,g);else if(g.isMeshToonMaterial)r(f,g),u(f,g);else if(g.isMeshPhongMaterial)r(f,g),h(f,g);else if(g.isMeshStandardMaterial){if(r(f,g),d(f,g),g.isMeshPhysicalMaterial)m(f,g,A)}else if(g.isMeshMatcapMaterial)r(f,g),y(f,g);else if(g.isMeshDepthMaterial)r(f,g);else if(g.isMeshDistanceMaterial)r(f,g),x(f,g);else if(g.isMeshNormalMaterial)r(f,g);else if(g.isLineBasicMaterial){if(a(f,g),g.isLineDashedMaterial)o(f,g)}else if(g.isPointsMaterial)l(f,g,_,v);else if(g.isSpriteMaterial)c(f,g);else if(g.isShadowMaterial)f.color.value.copy(g.color),f.opacity.value=g.opacity;else if(g.isShaderMaterial)g.uniformsNeedUpdate=!1}function r(f,g){if(f.opacity.value=g.opacity,g.color)f.diffuse.value.copy(g.color);if(g.emissive)f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity);if(g.map)f.map.value=g.map,n(g.map,f.mapTransform);if(g.alphaMap)f.alphaMap.value=g.alphaMap,n(g.alphaMap,f.alphaMapTransform);if(g.bumpMap){if(f.bumpMap.value=g.bumpMap,n(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===1)f.bumpScale.value*=-1}if(g.normalMap){if(f.normalMap.value=g.normalMap,n(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===1)f.normalScale.value.negate()}if(g.displacementMap)f.displacementMap.value=g.displacementMap,n(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias;if(g.emissiveMap)f.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,f.emissiveMapTransform);if(g.specularMap)f.specularMap.value=g.specularMap,n(g.specularMap,f.specularMapTransform);if(g.alphaTest>0)f.alphaTest.value=g.alphaTest;let _=t.get(g).envMap;if(_)f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio;if(g.lightMap){f.lightMap.value=g.lightMap;let v=e._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=g.lightMapIntensity*v,n(g.lightMap,f.lightMapTransform)}if(g.aoMap)f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,f.aoMapTransform)}function a(f,g){if(f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map)f.map.value=g.map,n(g.map,f.mapTransform)}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,_,v){if(f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*_,f.scale.value=v*0.5,g.map)f.map.value=g.map,n(g.map,f.uvTransform);if(g.alphaMap)f.alphaMap.value=g.alphaMap,n(g.alphaMap,f.alphaMapTransform);if(g.alphaTest>0)f.alphaTest.value=g.alphaTest}function c(f,g){if(f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map)f.map.value=g.map,n(g.map,f.mapTransform);if(g.alphaMap)f.alphaMap.value=g.alphaMap,n(g.alphaMap,f.alphaMapTransform);if(g.alphaTest>0)f.alphaTest.value=g.alphaTest}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,0.0001)}function u(f,g){if(g.gradientMap)f.gradientMap.value=g.gradientMap}function d(f,g){if(f.metalness.value=g.metalness,g.metalnessMap)f.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,f.metalnessMapTransform);if(f.roughness.value=g.roughness,g.roughnessMap)f.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,f.roughnessMapTransform);if(t.get(g).envMap)f.envMapIntensity.value=g.envMapIntensity}function m(f,g,_){if(f.ior.value=g.ior,g.sheen>0){if(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap)f.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,f.sheenColorMapTransform);if(g.sheenRoughnessMap)f.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,f.sheenRoughnessMapTransform)}if(g.clearcoat>0){if(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap)f.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,f.clearcoatMapTransform);if(g.clearcoatRoughnessMap)f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform);if(g.clearcoatNormalMap){if(f.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===1)f.clearcoatNormalScale.value.negate()}}if(g.iridescence>0){if(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap)f.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,f.iridescenceMapTransform);if(g.iridescenceThicknessMap)f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform)}if(g.transmission>0){if(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap)f.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,f.transmissionMapTransform);if(f.thickness.value=g.thickness,g.thicknessMap)f.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,f.thicknessMapTransform);f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)}if(g.anisotropy>0){if(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap)f.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,f.anisotropyMapTransform)}if(f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap)f.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,f.specularColorMapTransform);if(g.specularIntensityMap)f.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,f.specularIntensityMapTransform)}function y(f,g){if(g.matcap)f.matcap.value=g.matcap}function x(f,g){let _=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function E0(e,t,n,i){let s={},r={},a=[],o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let A=v.program;i.uniformBlockBinding(_,A)}function c(_,v){let A=s[_.id];if(A===void 0)y(_),A=h(_),s[_.id]=A,_.addEventListener("dispose",f);let C=v.program;i.updateUBOMapping(_,C);let T=t.render.frame;if(r[_.id]!==T)d(_),r[_.id]=T}function h(_){let v=u();_.__bindingPointIndex=v;let A=e.createBuffer(),{__size:C,usage:T}=_;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,C,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,A),A}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],{uniforms:A,__cache:C}=_;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let T=0,I=A.length;T<I;T++){let z=Array.isArray(A[T])?A[T]:[A[T]];for(let b=0,E=z.length;b<E;b++){let D=z[b];if(m(D,T,b,C)===!0){let q=D.__offset,J=Array.isArray(D.value)?D.value:[D.value],R=0;for(let B=0;B<J.length;B++){let V=J[B],j=x(V);if(typeof V==="number"||typeof V==="boolean")D.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,q+R,D.__data);else if(V.isMatrix3)D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0;else V.toArray(D.__data,R),R+=j.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,q,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(_,v,A,C){let T=_.value,I=v+"_"+A;if(C[I]===void 0){if(typeof T==="number"||typeof T==="boolean")C[I]=T;else C[I]=T.clone();return!0}else{let z=C[I];if(typeof T==="number"||typeof T==="boolean"){if(z!==T)return C[I]=T,!0}else if(z.equals(T)===!1)return z.copy(T),!0}return!1}function y(_){let v=_.uniforms,A=0,C=16;for(let I=0,z=v.length;I<z;I++){let b=Array.isArray(v[I])?v[I]:[v[I]];for(let E=0,D=b.length;E<D;E++){let q=b[E],J=Array.isArray(q.value)?q.value:[q.value];for(let R=0,B=J.length;R<B;R++){let V=J[R],j=x(V),X=A%C;if(X!==0&&C-X<j.boundary)A+=C-X;q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=j.storage}}}let T=A%C;if(T>0)A+=C-T;return _.__size=A,_.__cache={},this}function x(_){let v={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")v.boundary=4,v.storage=4;else if(_.isVector2)v.boundary=8,v.storage=8;else if(_.isVector3||_.isColor)v.boundary=16,v.storage=12;else if(_.isVector4)v.boundary=16,v.storage=16;else if(_.isMatrix3)v.boundary=48,v.storage=48;else if(_.isMatrix4)v.boundary=64,v.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return v}function f(_){let v=_.target;v.removeEventListener("dispose",f);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let _ in s)e.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}class yo{constructor(e={}){let{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null)u=n.getContextAttributes().alpha;else u=r;let d=new Uint32Array(4),m=new Int32Array(4),y=null,x=null,f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let _=this,v=!1,A=0,C=0,T=null,I=-1,z=null,b=new Rt,E=new Rt,D=null,q=new Pe(0),J=0,{width:R,height:B}=t,V=1,j=null,X=null,W=new Rt(0,0,R,B),Z=new Rt(0,0,R,B),K=!1,U=new xo,Y=!1,ie=!1,se=null,re=new yt,ce=new Ve,le=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return T===null?V:1}let L=n;function Ke(S,O){for(let H=0;H<S.length;H++){let G=S[H],k=t.getContext(G,O);if(k!==null)return k}return null}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine","three.js r160");if(t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",P,!1),L===null){let O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0)O.shift();if(L=Ke(O,S),L===null)if(Ke(O))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(L.getShaderPrecisionFormat===void 0)L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Le,xe,me,de,Fe,Ne,w,M,F,ne,Q,te,Ee,fe,_e,Me,Oe,ee,gt,Ge,Ce,ye,ve,We;function tt(){Le=new Wg(L),xe=new zg(L,Le,e),Le.init(xe),ye=new b0(L,Le,xe),me=new y0(L,Le,xe),de=new qg(L),Fe=new a0,Ne=new v0(L,Le,me,Fe,xe,ye,de),w=new Bg(_),M=new Gg(_),F=new ep(L,xe),ve=new Ug(L,Le,F,xe),ne=new Vg(L,F,de,ve),Q=new jg(L,ne,F,de),gt=new Jg(L,xe,Ne),Me=new Fg(Fe),te=new o0(_,w,M,Le,xe,ve,Me),Ee=new S0(_,Fe),fe=new c0,_e=new m0(Le,xe),ee=new Dg(_,w,M,me,Q,u,o),Oe=new _0(_,Q,xe),We=new E0(L,de,xe,me),Ge=new Og(L,Le,de,xe),Ce=new Xg(L,Le,de,xe),de.programs=te.programs,_.capabilities=xe,_.extensions=Le,_.properties=Fe,_.renderLists=fe,_.shadowMap=Oe,_.state=me,_.info=de}tt();let qe=new Rh(_,L);this.xr=qe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=Le.get("WEBGL_lose_context");if(S)S.loseContext()},this.forceContextRestore=function(){let S=Le.get("WEBGL_lose_context");if(S)S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){if(S===void 0)return;V=S,this.setSize(R,B,!1)},this.getSize=function(S){return S.set(R,B)},this.setSize=function(S,O,H=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(R=S,B=O,t.width=Math.floor(S*V),t.height=Math.floor(O*V),H===!0)t.style.width=S+"px",t.style.height=O+"px";this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(R*V,B*V).floor()},this.setDrawingBufferSize=function(S,O,H){R=S,B=O,V=H,t.width=Math.floor(S*H),t.height=Math.floor(O*H),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,O,H,G){if(S.isVector4)W.set(S.x,S.y,S.z,S.w);else W.set(S,O,H,G);me.viewport(b.copy(W).multiplyScalar(V).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,O,H,G){if(S.isVector4)Z.set(S.x,S.y,S.z,S.w);else Z.set(S,O,H,G);me.scissor(E.copy(Z).multiplyScalar(V).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){me.setScissorTest(K=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,O=!0,H=!0){let G=0;if(S){let k=!1;if(T!==null){let ge=T.texture.format;k=ge===1033||ge===1031||ge===1029}if(k){let ge=T.texture.type,be=ge===1009||ge===1014||ge===1012||ge===1020||ge===1017||ge===1018,Te=ee.getClearColor(),Re=ee.getClearAlpha(),{r:Be,g:Ie,b:De}=Te;if(be)d[0]=Be,d[1]=Ie,d[2]=De,d[3]=Re,L.clearBufferuiv(L.COLOR,0,d);else m[0]=Be,m[1]=Ie,m[2]=De,m[3]=Re,L.clearBufferiv(L.COLOR,0,m)}else G|=L.COLOR_BUFFER_BIT}if(O)G|=L.DEPTH_BUFFER_BIT;if(H)G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if(t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",P,!1),fe.dispose(),_e.dispose(),Fe.dispose(),w.dispose(),M.dispose(),Q.dispose(),ve.dispose(),We.dispose(),te.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",vt),qe.removeEventListener("sessionend",Ft),se)se.dispose(),se=null;Ye.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let S=de.autoReset,O=Oe.enabled,H=Oe.autoUpdate,G=Oe.needsUpdate,k=Oe.type;tt(),de.autoReset=S,Oe.enabled=O,Oe.autoUpdate=H,Oe.needsUpdate=G,Oe.type=k}function P(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){let O=S.target;O.removeEventListener("dispose",he),pe(O)}function pe(S){Ae(S),Fe.remove(S)}function Ae(S){let O=Fe.get(S).programs;if(O!==void 0){if(O.forEach(function(H){te.releaseProgram(H)}),S.isShaderMaterial)te.releaseShaderCache(S)}}this.renderBufferDirect=function(S,O,H,G,k,ge){if(O===null)O=ue;let be=k.isMesh&&k.matrixWorld.determinant()<0,Te=mf(S,O,H,G,k);me.setMaterial(G,be);let Re=H.index,Be=1;if(G.wireframe===!0){if(Re=ne.getWireframeAttribute(H),Re===void 0)return;Be=2}let Ie=H.drawRange,De=H.attributes.position,pt=Ie.start*Be,Zt=(Ie.start+Ie.count)*Be;if(ge!==null)pt=Math.max(pt,ge.start*Be),Zt=Math.min(Zt,(ge.start+ge.count)*Be);if(Re!==null)pt=Math.max(pt,0),Zt=Math.min(Zt,Re.count);else if(De!==void 0&&De!==null)pt=Math.max(pt,0),Zt=Math.min(Zt,De.count);let Tt=Zt-pt;if(Tt<0||Tt===1/0)return;ve.setup(k,G,Te,H,Re);let On,lt=Ge;if(Re!==null)On=F.get(Re),lt=Ce,lt.setIndex(On);if(k.isMesh)if(G.wireframe===!0)me.setLineWidth(G.wireframeLinewidth*we()),lt.setMode(L.LINES);else lt.setMode(L.TRIANGLES);else if(k.isLine){let ke=G.linewidth;if(ke===void 0)ke=1;if(me.setLineWidth(ke*we()),k.isLineSegments)lt.setMode(L.LINES);else if(k.isLineLoop)lt.setMode(L.LINE_LOOP);else lt.setMode(L.LINE_STRIP)}else if(k.isPoints)lt.setMode(L.POINTS);else if(k.isSprite)lt.setMode(L.TRIANGLES);if(k.isBatchedMesh)lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)lt.renderInstances(pt,Tt,k.count);else if(H.isInstancedBufferGeometry){let ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ia=Math.min(H.instanceCount,ke);lt.renderInstances(pt,Tt,ia)}else lt.render(pt,Tt)};function Se(S,O,H){if(S.transparent===!0&&S.side===2&&S.forceSinglePass===!1)S.side=1,S.needsUpdate=!0,Ur(S,O,H),S.side=0,S.needsUpdate=!0,Ur(S,O,H),S.side=2;else Ur(S,O,H)}this.compile=function(S,O,H=null){if(H===null)H=S;if(x=_e.get(H),x.init(),g.push(x),H.traverseVisible(function(k){if(k.isLight&&k.layers.test(O.layers)){if(x.pushLight(k),k.castShadow)x.pushShadow(k)}}),S!==H)S.traverseVisible(function(k){if(k.isLight&&k.layers.test(O.layers)){if(x.pushLight(k),k.castShadow)x.pushShadow(k)}});x.setupLights(_._useLegacyLights);let G=new Set;return S.traverse(function(k){let ge=k.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Te=ge[be];Se(Te,H,k),G.add(Te)}else Se(ge,H,k),G.add(ge)}),g.pop(),x=null,G},this.compileAsync=function(S,O,H=null){let G=this.compile(S,O,H);return new Promise((k)=>{function ge(){if(G.forEach(function(be){if(Fe.get(be).currentProgram.isReady())G.delete(be)}),G.size===0){k(S);return}setTimeout(ge,10)}if(Le.get("KHR_parallel_shader_compile")!==null)ge();else setTimeout(ge,10)})};let it=null;function rt(S){if(it)it(S)}function vt(){Ye.stop()}function Ft(){Ye.start()}let Ye=new ph;if(Ye.setAnimationLoop(rt),typeof self<"u")Ye.setContext(self);this.setAnimationLoop=function(S){it=S,qe.setAnimationLoop(S),S===null?Ye.stop():Ye.start()},qe.addEventListener("sessionstart",vt),qe.addEventListener("sessionend",Ft),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(O.parent===null&&O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(qe.enabled===!0&&qe.isPresenting===!0){if(qe.cameraAutoUpdate===!0)qe.updateCamera(O);O=qe.getCamera()}if(S.isScene===!0)S.onBeforeRender(_,S,O,T);if(x=_e.get(S,g.length),x.init(),g.push(x),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),U.setFromProjectionMatrix(re),ie=this.localClippingEnabled,Y=Me.init(this.clippingPlanes,ie),y=fe.get(S,f.length),y.init(),f.push(y),vn(S,O,0,_.sortObjects),y.finish(),_.sortObjects===!0)y.sort(j,X);if(this.info.render.frame++,Y===!0)Me.beginShadows();let H=x.state.shadowsArray;if(Oe.render(H,S,O),Y===!0)Me.endShadows();if(this.info.autoReset===!0)this.info.reset();if(ee.render(y,S),x.setupLights(_._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let k=0,ge=G.length;k<ge;k++){let be=G[k];bn(y,S,be,be.viewport)}}else bn(y,S,O);if(T!==null)Ne.updateMultisampleRenderTarget(T),Ne.updateRenderTargetMipmap(T);if(S.isScene===!0)S.onAfterRender(_,S,O);if(ve.resetDefaultState(),I=-1,z=null,g.pop(),g.length>0)x=g[g.length-1];else x=null;if(f.pop(),f.length>0)y=f[f.length-1];else y=null};function vn(S,O,H,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD){if(S.autoUpdate===!0)S.update(O)}else if(S.isLight){if(x.pushLight(S),S.castShadow)x.pushShadow(S)}else if(S.isSprite){if(!S.frustumCulled||U.intersectsSprite(S)){if(G)le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(re);let be=Q.update(S),Te=S.material;if(Te.visible)y.push(S,be,Te,H,le.z,null)}}else if(S.isMesh||S.isLine||S.isPoints){if(!S.frustumCulled||U.intersectsObject(S)){let be=Q.update(S),Te=S.material;if(G){if(S.boundingSphere!==void 0){if(S.boundingSphere===null)S.computeBoundingSphere();le.copy(S.boundingSphere.center)}else{if(be.boundingSphere===null)be.computeBoundingSphere();le.copy(be.boundingSphere.center)}le.applyMatrix4(S.matrixWorld).applyMatrix4(re)}if(Array.isArray(Te)){let Re=be.groups;for(let Be=0,Ie=Re.length;Be<Ie;Be++){let De=Re[Be],pt=Te[De.materialIndex];if(pt&&pt.visible)y.push(S,be,pt,H,le.z,De)}}else if(Te.visible)y.push(S,be,Te,H,le.z,null)}}}let ge=S.children;for(let be=0,Te=ge.length;be<Te;be++)vn(ge[be],O,H,G)}function bn(S,O,H,G){let{opaque:k,transmissive:ge,transparent:be}=S;if(x.setupLightsView(H),Y===!0)Me.setGlobalState(_.clippingPlanes,H);if(ge.length>0)pf(k,ge,O,H);if(G)me.viewport(b.copy(G));if(k.length>0)Dr(k,O,H);if(ge.length>0)Dr(ge,O,H);if(be.length>0)Dr(be,O,H);me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function pf(S,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ge=xe.isWebGL2;if(se===null)se=new ai(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:ge?4:0});if(_.getDrawingBufferSize(ce),ge)se.setSize(ce.x,ce.y);else se.setSize(ho(ce.x),ho(ce.y));let be=_.getRenderTarget();if(_.setRenderTarget(se),_.getClearColor(q),J=_.getClearAlpha(),J<1)_.setClearColor(16777215,0.5);_.clear();let Te=_.toneMapping;_.toneMapping=0,Dr(S,H,G),Ne.updateMultisampleRenderTarget(se),Ne.updateRenderTargetMipmap(se);let Re=!1;for(let Be=0,Ie=O.length;Be<Ie;Be++){let De=O[Be],{object:pt,geometry:Zt,material:Tt,group:On}=De;if(Tt.side===2&&pt.layers.test(G.layers)){let lt=Tt.side;Tt.side=1,Tt.needsUpdate=!0,ac(pt,H,G,Zt,Tt,On),Tt.side=lt,Tt.needsUpdate=!0,Re=!0}}if(Re===!0)Ne.updateMultisampleRenderTarget(se),Ne.updateRenderTargetMipmap(se);_.setRenderTarget(be),_.setClearColor(q,J),_.toneMapping=Te}function Dr(S,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ge=S.length;k<ge;k++){let be=S[k],{object:Te,geometry:Re}=be,Be=G===null?be.material:G,Ie=be.group;if(Te.layers.test(H.layers))ac(Te,O,H,Re,Be,Ie)}}function ac(S,O,H,G,k,ge){if(S.onBeforeRender(_,O,H,G,k,ge),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(_,O,H,G,S,ge),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1)k.side=1,k.needsUpdate=!0,_.renderBufferDirect(H,O,G,k,S,ge),k.side=0,k.needsUpdate=!0,_.renderBufferDirect(H,O,G,k,S,ge),k.side=2;else _.renderBufferDirect(H,O,G,k,S,ge);S.onAfterRender(_,O,H,G,k,ge)}function Ur(S,O,H){if(O.isScene!==!0)O=ue;let G=Fe.get(S),k=x.state.lights,ge=x.state.shadowsArray,be=k.state.version,Te=te.getParameters(S,k.state,ge,O,H),Re=te.getProgramCacheKey(Te),Be=G.programs;if(G.environment=S.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(S.isMeshStandardMaterial?M:w).get(S.envMap||G.environment),Be===void 0)S.addEventListener("dispose",he),Be=new Map,G.programs=Be;let Ie=Be.get(Re);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===be)return cc(S,Te),Ie}else Te.uniforms=te.getUniforms(S),S.onBuild(H,Te,_),S.onBeforeCompile(Te,_),Ie=te.acquireProgram(Te,Re),Be.set(Re,Ie),G.uniforms=Te.uniforms;let De=G.uniforms;if(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)De.clippingPlanes=Me.uniform;if(cc(S,Te),G.needsLights=xf(S),G.lightsStateVersion=be,G.needsLights)De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix;return G.currentProgram=Ie,G.uniformsList=null,Ie}function lc(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function cc(S,O){let H=Fe.get(S);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function mf(S,O,H,G,k){if(O.isScene!==!0)O=ue;Ne.resetTextureUnits();let ge=O.fog,be=G.isMeshStandardMaterial?O.environment:null,Te=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:"srgb-linear",Re=(G.isMeshStandardMaterial?M:w).get(G.envMap||be),Be=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!H.morphAttributes.position,pt=!!H.morphAttributes.normal,Zt=!!H.morphAttributes.color,Tt=0;if(G.toneMapped){if(T===null||T.isXRRenderTarget===!0)Tt=_.toneMapping}let On=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=On!==void 0?On.length:0,ke=Fe.get(G),ia=x.state.lights;if(Y===!0){if(ie===!0||S!==z){let an=S===z&&G.id===I;Me.setState(G,S,an)}}let ht=!1;if(G.version===ke.__version){if(ke.needsLights&&ke.lightsStateVersion!==ia.state.version)ht=!0;else if(ke.outputColorSpace!==Te)ht=!0;else if(k.isBatchedMesh&&ke.batching===!1)ht=!0;else if(!k.isBatchedMesh&&ke.batching===!0)ht=!0;else if(k.isInstancedMesh&&ke.instancing===!1)ht=!0;else if(!k.isInstancedMesh&&ke.instancing===!0)ht=!0;else if(k.isSkinnedMesh&&ke.skinning===!1)ht=!0;else if(!k.isSkinnedMesh&&ke.skinning===!0)ht=!0;else if(k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null)ht=!0;else if(k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null)ht=!0;else if(ke.envMap!==Re)ht=!0;else if(G.fog===!0&&ke.fog!==ge)ht=!0;else if(ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection))ht=!0;else if(ke.vertexAlphas!==Be)ht=!0;else if(ke.vertexTangents!==Ie)ht=!0;else if(ke.morphTargets!==De)ht=!0;else if(ke.morphNormals!==pt)ht=!0;else if(ke.morphColors!==Zt)ht=!0;else if(ke.toneMapping!==Tt)ht=!0;else if(xe.isWebGL2===!0&&ke.morphTargetsCount!==lt)ht=!0}else ht=!0,ke.__version=G.version;let Si=ke.currentProgram;if(ht===!0)Si=Ur(G,O,k);let hc=!1,Gs=!1,sa=!1,Dt=Si.getUniforms(),Ei=ke.uniforms;if(me.useProgram(Si.program))hc=!0,Gs=!0,sa=!0;if(G.id!==I)I=G.id,Gs=!0;if(hc||z!==S){Dt.setValue(L,"projectionMatrix",S.projectionMatrix),Dt.setValue(L,"viewMatrix",S.matrixWorldInverse);let an=Dt.map.cameraPosition;if(an!==void 0)an.setValue(L,le.setFromMatrixPosition(S.matrixWorld));if(xe.logarithmicDepthBuffer)Dt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2));if(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)Dt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0);if(z!==S)z=S,Gs=!0,sa=!0}if(k.isSkinnedMesh){Dt.setOptional(L,k,"bindMatrix"),Dt.setOptional(L,k,"bindMatrixInverse");let an=k.skeleton;if(an)if(xe.floatVertexTextures){if(an.boneTexture===null)an.computeBoneTexture();Dt.setValue(L,"boneTexture",an.boneTexture,Ne)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}if(k.isBatchedMesh)Dt.setOptional(L,k,"batchingTexture"),Dt.setValue(L,"batchingTexture",k._matricesTexture,Ne);let ra=H.morphAttributes;if(ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&xe.isWebGL2===!0)gt.update(k,H,Si);if(Gs||ke.receiveShadow!==k.receiveShadow)ke.receiveShadow=k.receiveShadow,Dt.setValue(L,"receiveShadow",k.receiveShadow);if(G.isMeshGouraudMaterial&&G.envMap!==null)Ei.envMap.value=Re,Ei.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1;if(Gs){if(Dt.setValue(L,"toneMappingExposure",_.toneMappingExposure),ke.needsLights)gf(Ei,sa);if(ge&&G.fog===!0)Ee.refreshFogUniforms(Ei,ge);Ee.refreshMaterialUniforms(Ei,G,V,B,se),Js.upload(L,lc(ke),Ei,Ne)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0)Js.upload(L,lc(ke),Ei,Ne),G.uniformsNeedUpdate=!1;if(G.isSpriteMaterial)Dt.setValue(L,"center",k.center);if(Dt.setValue(L,"modelViewMatrix",k.modelViewMatrix),Dt.setValue(L,"normalMatrix",k.normalMatrix),Dt.setValue(L,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let an=G.uniformsGroups;for(let oa=0,_f=an.length;oa<_f;oa++)if(xe.isWebGL2){let uc=an[oa];We.update(uc,Si),We.bind(uc,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function gf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function xf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}if(this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,O,H){Fe.get(S.texture).__webglTexture=O,Fe.get(S.depthTexture).__webglTexture=H;let G=Fe.get(S);if(G.__hasExternalTextures=!0,G.__hasExternalTextures){if(G.__autoAllocateDepthBuffer=H===void 0,!G.__autoAllocateDepthBuffer){if(Le.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(S,O){let H=Fe.get(S);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,H=0){T=S,A=O,C=H;let G=!0,k=null,ge=!1,be=!1;if(S){let Re=Fe.get(S);if(Re.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)Ne.setupRenderTarget(S);else if(Re.__hasExternalTextures)Ne.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);let Be=S.texture;if(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)be=!0;let Ie=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget){if(Array.isArray(Ie[O]))k=Ie[O][H];else k=Ie[O];ge=!0}else if(xe.isWebGL2&&S.samples>0&&Ne.useMultisampledRTT(S)===!1)k=Fe.get(S).__webglMultisampledFramebuffer;else if(Array.isArray(Ie))k=Ie[H];else k=Ie;b.copy(S.viewport),E.copy(S.scissor),D=S.scissorTest}else b.copy(W).multiplyScalar(V).floor(),E.copy(Z).multiplyScalar(V).floor(),D=K;if(me.bindFramebuffer(L.FRAMEBUFFER,k)&&xe.drawBuffers&&G)me.drawBuffers(S,k);if(me.viewport(b),me.scissor(E),me.setScissorTest(D),ge){let Re=Fe.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,H)}else if(be){let Re=Fe.get(S.texture),Be=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Be)}I=-1},this.readRenderTargetPixels=function(S,O,H,G,k,ge,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0)Te=Te[be];if(Te){me.bindFramebuffer(L.FRAMEBUFFER,Te);try{let Re=S.texture,{format:Be,type:Ie}=Re;if(Be!==1023&&ye.convert(Be)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let De=Ie===1016&&(Le.has("EXT_color_buffer_half_float")||xe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ie!==1009&&ye.convert(Ie)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===1015&&(xe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(O>=0&&O<=S.width-G&&(H>=0&&H<=S.height-k))L.readPixels(O,H,G,k,ye.convert(Be),ye.convert(Ie),ge)}finally{let Re=T!==null?Fe.get(T).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,O,H=0){let G=Math.pow(2,-H),k=Math.floor(O.image.width*G),ge=Math.floor(O.image.height*G);Ne.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,S.x,S.y,k,ge),me.unbindTexture()},this.copyTextureToTexture=function(S,O,H,G=0){let k=O.image.width,ge=O.image.height,be=ye.convert(H.format),Te=ye.convert(H.type);if(Ne.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture)L.texSubImage2D(L.TEXTURE_2D,G,S.x,S.y,k,ge,be,Te,O.image.data);else if(O.isCompressedTexture)L.compressedTexSubImage2D(L.TEXTURE_2D,G,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data);else L.texSubImage2D(L.TEXTURE_2D,G,S.x,S.y,be,Te,O.image);if(G===0&&H.generateMipmaps)L.generateMipmap(L.TEXTURE_2D);me.unbindTexture()},this.copyTextureToTexture3D=function(S,O,H,G,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=S.max.x-S.min.x+1,be=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Re=ye.convert(G.format),Be=ye.convert(G.type),Ie;if(G.isData3DTexture)Ne.setTexture3D(G,0),Ie=L.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Ne.setTexture2DArray(G,0),Ie=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);let De=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zt=L.getParameter(L.UNPACK_SKIP_PIXELS),Tt=L.getParameter(L.UNPACK_SKIP_ROWS),On=L.getParameter(L.UNPACK_SKIP_IMAGES),lt=H.isCompressedTexture?H.mipmaps[k]:H.image;if(L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,S.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,S.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture)L.texSubImage3D(Ie,k,O.x,O.y,O.z,ge,be,Te,Re,Be,lt.data);else if(H.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ie,k,O.x,O.y,O.z,ge,be,Te,Re,lt.data);else L.texSubImage3D(Ie,k,O.x,O.y,O.z,ge,be,Te,Re,Be,lt);if(L.pixelStorei(L.UNPACK_ROW_LENGTH,De),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,On),k===0&&G.generateMipmaps)L.generateMipmap(Ie);me.unbindTexture()},this.initTexture=function(S){if(S.isCubeTexture)Ne.setTextureCube(S,0);else if(S.isData3DTexture)Ne.setTexture3D(S,0);else if(S.isDataArrayTexture||S.isCompressedArrayTexture)Ne.setTexture2DArray(S,0);else Ne.setTexture2D(S,0);me.unbindTexture()},this.resetState=function(){A=0,C=0,T=null,me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e==="display-p3"?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ch extends yo{}Ch.prototype.isWebGL1Renderer=!0;class er extends Pt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)t.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)t.object.backgroundIntensity=this.backgroundIntensity;return t}}class hi extends ci{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var jc=new N,Zc=new N,Kc=new yt,Ca=new po,so=new Zs;class Ph extends Pt{constructor(e=new Wt,t=new hi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)jc.fromBufferAttribute(t,i-1),Zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=jc.distanceTo(Zc);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Kc.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Kc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new N,c=new N,h=new N,u=new N,d=this.isLineSegments?2:1,m=n.index,x=n.attributes.position;if(m!==null){let f=Math.max(0,r.start),g=Math.min(m.count,r.start+r.count);for(let _=f,v=g-1;_<v;_+=d){let A=m.getX(_),C=m.getX(_+1);if(l.fromBufferAttribute(x,A),c.fromBufferAttribute(x,C),Ca.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(u);if(I<e.near||I>e.far)continue;t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,r.start),g=Math.min(x.count,r.start+r.count);for(let _=f,v=g-1;_<v;_+=d){if(l.fromBufferAttribute(x,_),c.fromBufferAttribute(x,_+1),Ca.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(u);if(C<e.near||C>e.far)continue;t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}var Qc=new N,eh=new N;class Ni extends Ph{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qc.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(eh);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}var ro=new N,oo=new N,Pa=new N,ao=new cn;class vs extends Wt{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(fs*t),r=e.getIndex(),a=e.getAttribute("position"),o=r?r.count:a.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u={},d=[];for(let m=0;m<o;m+=3){if(r)l[0]=r.getX(m),l[1]=r.getX(m+1),l[2]=r.getX(m+2);else l[0]=m,l[1]=m+1,l[2]=m+2;let{a:y,b:x,c:f}=ao;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),ao.getNormal(Pa),h[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let g=0;g<3;g++){let _=(g+1)%3,v=h[g],A=h[_],C=ao[c[g]],T=ao[c[_]],I=`${v}_${A}`,z=`${A}_${v}`;if(z in u&&u[z]){if(Pa.dot(u[z].normal)<=s)d.push(C.x,C.y,C.z),d.push(T.x,T.y,T.z);u[z]=null}else if(!(I in u))u[I]={index0:l[g],index1:l[_],normal:Pa.clone()}}}for(let m in u)if(u[m]){let{index0:y,index1:x}=u[m];ro.fromBufferAttribute(a,y),oo.fromBufferAttribute(a,x),d.push(ro.x,ro.y,ro.z),d.push(oo.x,oo.y,oo.z)}this.setAttribute("position",new Yt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qa extends ci{constructor(e){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Di extends ci{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function lo(e,t,n){if(!e||!n&&e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function w0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}class tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Lh extends tr{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),y=m*m,x=y*m,f=-u*x+2*u*y-u*m,g=(1+u)*x+(-1.5-2*u)*y+(-0.5+u)*m+1,_=(-1-d)*x+(1.5+d)*y+0.5*m,v=d*x-d*y;for(let A=0;A!==a;++A)s[A]=f*r[c+A]+g*r[l+A]+_*r[o+A]+v*r[h+A];return s}}class Ih extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),h=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*h+r[o+u]*c;return s}}class Nh extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(w0(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let h=a*n,u=h-n,d=h+n;for(let m=0;m!==n;++m){let y=t[h+m];if(y!==t[u+m]||y!==t[d+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let h=a*n,u=r*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=2301;class bs extends wn{}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=2300;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends wn{}Dh.prototype.ValueTypeName="color";class Uh extends wn{}Uh.prototype.ValueTypeName="number";class Oh extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)Ii.slerpFlat(s,0,r,l-a,r,l,o);return s}}class vo extends wn{InterpolantFactoryMethodLinear(e){return new Oh(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.DefaultInterpolation=2301;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends wn{}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=2300;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class zh extends wn{}zh.prototype.ValueTypeName="vector";class Fh{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],m=l[h+1];if(d.global)d.lastIndex=0;if(d.test(c))return m}return null}}}var T0=new Fh;class Bh{constructor(e){this.manager=e!==void 0?e:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ya extends Pt{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);if(t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0)t.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)t.object.distance=this.distance;if(this.angle!==void 0)t.object.angle=this.angle;if(this.decay!==void 0)t.object.decay=this.decay;if(this.penumbra!==void 0)t.object.penumbra=this.penumbra;if(this.shadow!==void 0)t.object.shadow=this.shadow.toJSON();return t}}var La=new yt,th=new N,nh=new N;class kh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};if(this.bias!==0)e.bias=this.bias;if(this.normalBias!==0)e.normalBias=this.normalBias;if(this.radius!==1)e.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)e.mapSize=this.mapSize.toArray();return e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hh extends kh{constructor(){super(new Qs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Ui extends Ya{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr extends Ya{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}var $a="\\[\\]\\.:\\/",A0=new RegExp("["+$a+"]","g"),Ja="[^"+$a+"]",R0="[^"+$a.replace("\\.","")+"]",C0=/((?:WC+[\/:])*)/.source.replace("WC",Ja),P0=/(WCOD+)?/.source.replace("WCOD",R0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ja),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ja),N0=new RegExp("^"+C0+P0+L0+I0+"$"),D0=["material","materials","bones","map"];class Gh{constructor(e,t,n){let i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new Qe(e,t,n);else return new Qe.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(e){let t=N0.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(D0.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=Qe.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.needsUpdate!==void 0)a=this.Versioning.NeedsUpdate;else if(e.matrixWorldNeedsUpdate!==void 0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Gh;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);class ja{constructor(e,t,n=0,i=1/0){this.ray=new po(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ua(e,this,n,t),n.sort(ih),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ua(e[i],this,n,t);return n.sort(ih),n}}function ih(e,t){return e.distance-t.distance}function Ua(e,t,n,i){if(e.layers.test(t.layers))e.raycast(t,n);if(i===!0){let s=e.children;for(let r=0,a=s.length;r<a;r++)Ua(s[r],t,n,!0)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="160";var Lt=document.getElementById("c"),ut={w:1,h:1,x:0,y:0},dt=new yo({canvas:Lt,antialias:!0});dt.setPixelRatio(Math.min(devicePixelRatio,2));dt.shadowMap.enabled=!0;dt.shadowMap.type=sh;dt.localClippingEnabled=!0;var mt=new er;mt.background=new Pe("#7aa0c4");var U0=Math.atan(1/Math.SQRT2),Ue={azim:Math.PI/4,elev:U0,zoom:80,target:new N(30,15,23)},Xe={azim:Ue.azim,elev:Ue.elev,zoom:Ue.zoom,target:Ue.target.clone()},Vh=45,Oi=Math.tan(Vh*Math.PI/360),bo=2000,$e=new zt(Vh,1,0.1,4000),Xh={uHorizon:{value:1}},Za=new _t(new _s(2,2),new Sn({uniforms:Xh,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uHorizon;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(
          mix(grn, blu, smoothstep(uHorizon - 0.03, uHorizon + 0.03, vN.y)),
          1.0);
      }`}));Za.frustumCulled=!1;Za.renderOrder=-1e9;mt.add(Za);function qh(){let e=Math.tan(Ue.elev)/Oi;Xh.uHorizon.value=Math.max(-2,Math.min(2,e))}mt.add(new nr(16777215,0.62));var tn=new Ui(16777215,0.78);tn.castShadow=!0;tn.shadow.mapSize.set(4096,4096);tn.shadow.normalBias=0.15;tn.shadow.bias=-0.0002;mt.add(tn);mt.add(tn.target);var Yh=new Ui(16777215,0.16);Yh.position.set(-6,5,-7);mt.add(Yh);var ir={tail:0},nn=()=>{ir.tail=30},Ka=new N,Mo=new N,Wh=new Map;function di(e){let t=Wh.get(e);if(!t)t=new Pe().setHex(e),Wh.set(e,t);return t}var sr=new Di({vertexColors:!0,side:gs}),Qa=new Di({vertexColors:!0,transparent:!0,opacity:0.55,side:gs,depthWrite:!1});Qa.shadowSide=oh;var $h=new Ks({colorWrite:!1,side:gs}),zi=new _t(new _s(8000,8000),new qa({opacity:0.32}));zi.rotation.x=-Math.PI/2;zi.position.y=-0.1;zi.receiveShadow=!0;zi.renderOrder=-1;mt.add(zi);var Tn=new oi;mt.add(Tn);var Gn=new oi;mt.add(Gn);var sn=new Ni(new vs(new En(1,1,1)),new hi({color:10994876,depthTest:!1}));sn.visible=!1;sn.renderOrder=999;mt.add(sn);var Fi=new Ni(new Wt,new hi({vertexColors:!0,transparent:!0,depthTest:!1}));Fi.renderOrder=998;Fi.visible=!1;mt.add(Fi);var $t=new ja,An=new Ve,fi=new N,rr=new N;var Bi=(e,t,n)=>e+65536+(t+65536)*131072+(n+65536)*131072*131072,hn=(e,t)=>({x:e.x+t.x,y:e.y+t.y,z:e.z+t.z});function je(e,t){let{x:n,y:i,z:s}=e;switch(t&3){case 1:return{x:-s,y:i,z:n};case 2:return{x:-n,y:i,z:-s};case 3:return{x:s,y:i,z:-n};default:return{x:n,y:i,z:s}}}var Wn=(e,t)=>({rot:e.rot+t.rot&3,off:hn(je(t.off,e.rot),e.off)}),el=(e)=>{let t=4-(e.rot&3)&3,n=je(e.off,t);return{rot:t,off:{x:-n.x,y:-n.y,z:-n.z}}},Ss=(e)=>e.slice(1).reduce((t,n)=>Wn(t,{off:n.pos,rot:n.rot}),{off:{x:0,y:0,z:0},rot:0}),Vn=(e)=>"#"+(e&16777215).toString(16).padStart(6,"0"),pi=(e)=>e<0?-Math.round(-e):Math.round(e),tl=1,Es=()=>`n${tl++}`,ws=()=>tl,So=(e)=>{tl=e};var ot=(e,t,n,i,s,r,a)=>({x0:e,y0:t,z0:n,x1:i,y1:s,z1:r,c:a}),or=(e,t,n,i)=>t>=e.x0&&t<e.x1&&n>=e.y0&&n<e.y1&&i>=e.z0&&i<e.z1,ar=(e,t,n,i)=>({x0:e.x0+t,y0:e.y0+n,z0:e.z0+i,x1:e.x1+t,y1:e.y1+n,z1:e.z1+i,c:e.c});function z0(e,t,n){let i=Math.max(e.x0,t.x0),s=Math.max(e.y0,t.y0),r=Math.max(e.z0,t.z0),a=Math.min(e.x1,t.x1),o=Math.min(e.y1,t.y1),l=Math.min(e.z1,t.z1);if(i>=a||s>=o||r>=l){n.push(e);return}let c=e.c;if(e.x0<i)n.push({...e,x1:i});if(a<e.x1)n.push({...e,x0:a});if(e.y0<s)n.push({x0:i,y0:e.y0,z0:e.z0,x1:a,y1:s,z1:e.z1,c});if(o<e.y1)n.push({x0:i,y0:o,z0:e.z0,x1:a,y1:e.y1,z1:e.z1,c});if(e.z0<r)n.push({x0:i,y0:s,z0:e.z0,x1:a,y1:o,z1:r,c});if(l<e.z1)n.push({x0:i,y0:s,z0:l,x1:a,y1:o,z1:e.z1,c})}function ki(e,t){let n=[];for(let i of e)z0(i,t,n);return n}function F0(e,t){for(let n=0;n<e.length;){let i=e[n];if(i.c!==t.c){n++;continue}let s=i.y0===t.y0&&i.y1===t.y1,r=i.z0===t.z0&&i.z1===t.z1,a=i.x0===t.x0&&i.x1===t.x1;if(s&&r&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(a&&r&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(a&&s&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{n++;continue}e.splice(n,1),n=0}e.push(t)}function nl(e,t,n){let i=ki(e,t);return F0(i,{...t,c:n}),i}function Jh(e,t,n,i,s){let r=-1;for(let h=0;h<e.length;h++)if(or(e[h],t,n,i)){r=h;break}if(r===-1)return null;let a=e[r].c;if(a===s)return null;let o=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,m=h.y0<u.y1&&u.y0<h.y1,y=h.z0<u.z1&&u.z0<h.z1;return m&&y&&(h.x1===u.x0||u.x1===h.x0)||d&&y&&(h.y1===u.y0||u.y1===h.y0)||d&&m&&(h.z1===u.z0||u.z1===h.z0)},l=new Set([r]),c=[r];while(c.length){let h=e[c.pop()];for(let u=0;u<e.length;u++)if(!l.has(u)&&e[u].c===a&&o(h,e[u]))l.add(u),c.push(u)}return e.map((h,u)=>l.has(u)?{...h,c:s}:h)}function lr(e,t){let n=[];for(let i of e){let s=Math.max(i.x0,t.x0),r=Math.max(i.y0,t.y0),a=Math.max(i.z0,t.z0),o=Math.min(i.x1,t.x1),l=Math.min(i.y1,t.y1),c=Math.min(i.z1,t.z1);if(s<o&&r<l&&a<c)n.push({x0:s,y0:r,z0:a,x1:o,y1:l,z1:c,c:i.c})}return n}function jh(e,t){for(let n of e){let i=(n.x1-n.x0)*(n.y1-n.y0)*(n.z1-n.z0);t.set(n.c,(t.get(n.c)||0)+i)}}function It(e,t){for(let n of e){if(n.x0<t.min.x)t.min.x=n.x0;if(n.y0<t.min.y)t.min.y=n.y0;if(n.z0<t.min.z)t.min.z=n.z0;if(n.x1>t.max.x)t.max.x=n.x1;if(n.y1>t.max.y)t.max.y=n.y1;if(n.z1>t.max.z)t.max.z=n.z1}}function Jt(e,t,n){let i=je({x:e.x0,y:e.y0,z:e.z0},t),s=je({x:e.x1-1,y:e.y1-1,z:e.z1-1},t);return{x0:Math.min(i.x,s.x)+n.x,y0:Math.min(i.y,s.y)+n.y,z0:Math.min(i.z,s.z)+n.z,x1:Math.max(i.x,s.x)+n.x+1,y1:Math.max(i.y,s.y)+n.y+1,z1:Math.max(i.z,s.z)+n.z+1,c:e.c}}var B0=16,Vt=(e)=>Math.floor(e/B0);function Zh(e){if(!e.length)return()=>!1;let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let x of e){if(x.x0<t)t=x.x0;if(x.y0<n)n=x.y0;if(x.z0<i)i=x.z0;if(x.x1>s)s=x.x1;if(x.y1>r)r=x.y1;if(x.z1>a)a=x.z1}let o=Vt(t),l=Vt(n),c=Vt(i),h=Vt(s-1)-o+1,u=Vt(r-1)-l+1,d=Vt(a-1)-c+1,m=Array.from({length:h*u*d},()=>[]),y=(x,f,g)=>((x-o)*u+(f-l))*d+(g-c);for(let x of e)for(let f=Vt(x.x0);f<=Vt(x.x1-1);f++)for(let g=Vt(x.y0);g<=Vt(x.y1-1);g++)for(let _=Vt(x.z0);_<=Vt(x.z1-1);_++)m[y(f,g,_)].push(x);return(x,f,g)=>{let _=Vt(x),v=Vt(f),A=Vt(g);if(_<o||v<l||A<c)return!1;if(_-o>=h||v-l>=u||A-c>=d)return!1;for(let C of m[y(_,v,A)])if(or(C,x,f,g))return!0;return!1}}var Kh=(e,t,n,i)=>e.some((s)=>or(s,t,n,i));function cr(e,t,n,i,s){if(!e.length||!t.length)return!1;let r={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};It(e,r);let a=r.min.x+n,o=r.min.y+i,l=r.min.z+s,c=r.max.x+n,h=r.max.y+i,u=r.max.z+s;for(let d of t)if(a<d.x1&&d.x0<c&&o<d.y1&&d.y0<h&&l<d.z1&&d.z0<u&&e.some((m)=>m.x0+n<d.x1&&d.x0<m.x1+n&&m.y0+i<d.y1&&d.y0<m.y1+i&&m.z0+s<d.z1&&d.z0<m.z1+s))return!0;return!1}var k0=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],tu=3,hr=2,mi=tu*hr,Qh=0.5;class Eo{a=new Float32Array(4096);n=0;push3(e,t,n){if(this.n+3>this.a.length){let i=new Float32Array(this.a.length*2);i.set(this.a),this.a=i}this.a[this.n++]=e,this.a[this.n++]=t,this.a[this.n++]=n}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}}function eu(e,t,n,i,s,r){let a=2*hr+1;for(let o=0;o<n;o++){let l=o*s,c=0;for(let h=0;h<=hr&&h<i;h++)c+=e[l+h*r];for(let h=0;h<i;h++){t[l+h*r]=c/a;let u=h+hr+1,d=h-hr;if(u<i)c+=e[l+u*r];if(d>=0)c-=e[l+d*r]}}}function Ts(e,t,n){let i=new Eo,s=new Eo,r=new Eo,a=e.map((_)=>[_.x0,_.y0,_.z0]),o=e.map((_)=>[_.x1,_.y1,_.z1]),l=[0,1,2].map(()=>new Map),c=[0,1,2].map(()=>new Map),h=(_,v,A)=>{let C=_.get(v);if(C)C.push(A);else _.set(v,[A])};for(let _=0;_<e.length;_++)for(let v=0;v<3;v++)h(l[v],a[_][v],_),h(c[v],o[_][v],_);let u=[],d=16,m=(_)=>Math.floor(_/d),y=[],x=[0,0,0],f=[0,0,0];if(n&&e.length){let _=[1/0,1/0,1/0],v=[-1/0,-1/0,-1/0];for(let A=0;A<e.length;A++)for(let C=0;C<3;C++){if(a[A][C]<_[C])_[C]=a[A][C];if(o[A][C]>v[C])v[C]=o[A][C]}f=_.map(m),x=v.map((A,C)=>m(A-1)-f[C]+1),y=Array.from({length:x[0]*x[1]*x[2]},()=>[]);for(let A=0;A<e.length;A++)for(let C=m(a[A][0]);C<=m(o[A][0]-1);C++)for(let T=m(a[A][1]);T<=m(o[A][1]-1);T++)for(let I=m(a[A][2]);I<=m(o[A][2]-1);I++)y[((C-f[0])*x[1]+(T-f[1]))*x[2]+(I-f[2])].push(A)}for(let _=0;_<e.length;_++){let v=t(e[_].c),{r:A,g:C,b:T}=v,I=a[_],z=o[_];for(let b of k0){let{a:E,u:D,v:q}=b,J=b.hi?z[E]:I[E],R=b.hi?J:J-1,B=[];for(let re of(b.hi?l:c)[E].get(J)??u){let ce=Math.max(a[re][D],I[D]),le=Math.min(o[re][D],z[D]),ue=Math.max(a[re][q],I[q]),we=Math.min(o[re][q],z[q]);if(ce<le&&ue<we)B.push([ce,ue,le,we])}let V=[[I[D],I[q],z[D],z[q]]];for(let re of B){let ce=[];for(let le of V){let ue=Math.max(le[0],re[0]),we=Math.max(le[1],re[1]),L=Math.min(le[2],re[2]),Ke=Math.min(le[3],re[3]);if(ue>=L||we>=Ke){ce.push(le);continue}if(le[0]<ue)ce.push([le[0],le[1],ue,le[3]]);if(L<le[2])ce.push([L,le[1],le[2],le[3]]);if(le[1]<we)ce.push([ue,le[1],L,we]);if(Ke<le[3])ce.push([ue,Ke,L,le[3]])}if(V=ce,!V.length)break}let j=[0,0,0];j[E]=J;let X=null,W=0,Z=0,K=0,U=()=>{W=I[D]-mi,Z=I[q]-mi;let re=z[D]-I[D]+2*mi+1;K=z[q]-I[q]+2*mi+1;let ce=new Float32Array(re*K),le=m(R)-f[E],ue=!1;if(le>=0&&le<x[E]){let L=[0,0,0];L[E]=le;let Ke=Math.min(m(W+re-1)-f[D],x[D]-1),Le=Math.min(m(Z+K-1)-f[q],x[q]-1);for(let xe=Math.max(m(W)-f[D],0);xe<=Ke;xe++){L[D]=xe;for(let me=Math.max(m(Z)-f[q],0);me<=Le;me++){L[q]=me;for(let de of y[(L[0]*x[1]+L[1])*x[2]+L[2]]){if(a[de][E]>R||o[de][E]<=R)continue;let Fe=Math.max(a[de][D],W),Ne=Math.min(o[de][D],W+re),w=Math.max(a[de][q],Z),M=Math.min(o[de][q],Z+K);for(let F=Fe;F<Ne;F++)ce.fill(1,(F-W)*K+(w-Z),(F-W)*K+(M-Z));ue=ue||Fe<Ne&&w<M}}}}if(!ue)return X=ce;let we=new Float32Array(re*K);for(let L=0;L<tu;L++)eu(ce,we,re,K,K,1),eu(we,ce,K,re,1,K);return X=ce},Y=(re,ce)=>{if(!n)return 1;let ue=(X??U())[(re-W)*K+(ce-Z)];return Qh+(1-Qh)*(1-ue)},ie=(re,ce,le)=>{j[D]=re,j[q]=ce,i.push3(j[0],j[1],j[2]),s.push3(b.n[0],b.n[1],b.n[2]),r.push3(A*le,C*le,T*le)},se=(re,ce,le,ue)=>{let we=Y(re,ce),L=Y(le,ce),Ke=Y(le,ue),Le=Y(re,ue);ie(re,ce,we),ie(le,ce,L),ie(le,ue,Ke),ie(re,ce,we),ie(le,ue,Ke),ie(re,ue,Le)};for(let re of V){let[ce,le,ue,we]=re;if(!n){se(ce,le,ue,we);continue}let L=ce+mi,Ke=ue-mi,Le=le+mi,xe=we-mi;if(L>=Ke||Le>=xe){for(let me=ce;me<ue;me++)for(let de=le;de<we;de++)se(me,de,me+1,de+1);continue}for(let me=ce;me<ue;me++){for(let de=le;de<Le;de++)se(me,de,me+1,de+1);for(let de=xe;de<we;de++)se(me,de,me+1,de+1)}for(let me=Le;me<xe;me++){for(let de=ce;de<L;de++)se(de,me,de+1,me+1);for(let de=Ke;de<ue;de++)se(de,me,de+1,me+1)}se(L,Le,Ke,xe)}}}if(!i.length)return null;let g=new Wt;return g.setAttribute("position",new Gt(i.trimmed(),3)),g.setAttribute("normal",new Gt(s.trimmed(),3)),g.setAttribute("color",new Gt(r.trimmed(),3)),g}var wo=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],nu={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},Hi=()=>({type:"object",id:Es(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),Xn=(e="")=>({type:"scene",id:Es(),name:e,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function Rn(e){let t={id:Es(),name:e.name,pos:{...e.pos},rot:e.rot,vis:e.vis};return e.type==="object"?{type:"object",...t,boxes:e.boxes.map((n)=>({...n}))}:{type:"scene",...t,children:e.children.map(Rn)}}var qn=(e)=>p.context.children.find((t)=>t.id===e);function Xt(e,t=p.root,n=[]){if(n.push(t),t===e)return n.slice();if(t.type==="scene")for(let i of t.children){let s=Xt(e,i,n);if(s)return s}return n.pop(),null}function St(e,t=p.root){if(t.id===e)return t;if(t.type==="scene")for(let n of t.children){let i=St(e,n);if(i)return i}return null}function qt(e){let t=Xt(e);return t&&t.length>1?t[t.length-2]:null}function un(e,t){if(e===t)return!0;if(e.type!=="scene")return!1;return e.children.some((n)=>un(n,t))}var As=()=>Ss(p.path),Rs=(e)=>Ss(Xt(e)||[p.root]),ft=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),jt=(e)=>e.max.x<e.min.x;function ur(e,t,n,i){if(e.type==="object")for(let s of e.boxes)i.push(Jt(s,n,t));else for(let s of e.children)ur(s,hn(t,je(s.pos,n)),n+s.rot&3,i);return i}function rn(e,t,n,i){if(e.type==="object")It(e.boxes.map((s)=>Jt(s,n,t)),i);else for(let s of e.children)rn(s,hn(t,je(s.pos,n)),n+s.rot&3,i);return i}function il(e,t,n){n.length=0;let i=Math.max(1,Math.ceil((t-e)/6));for(let s=0;s<=i;s++)n.push(e+(t-e)*s/i)}var sl=(e,t)=>Math.max(1,Math.ceil((t-e)/6))+1,su=(e)=>sl(e.x0,e.x1)*sl(e.y0,e.y1)*sl(e.z0,e.z1);function Gi(e,t,n,i){if(su(e)<=1536){n.push(e),i.push(t);return}let s=e.x1-e.x0,r=e.y1-e.y0,a=e.z1-e.z0;if(s>=r&&s>=a){let o=e.x0+(s>>1);Gi({...e,x1:o},t,n,i),Gi({...e,x0:o},t,n,i)}else if(r>=a){let o=e.y0+(r>>1);Gi({...e,y1:o},t,n,i),Gi({...e,y0:o},t,n,i)}else{let o=e.z0+(a>>1);Gi({...e,z1:o},t,n,i),Gi({...e,z0:o},t,n,i)}}function G0(e,t,n,i){for(let s=0;s<e.length;s++){let r=e[s];if(r[0]<=t&&r[1]<=n&&r[2]<=i)return}for(let s=e.length-1;s>=0;s--){let r=e[s];if(t<=r[0]&&n<=r[1]&&i<=r[2])e.splice(s,1)}e.push([t,n,i])}function W0(e,t,n,i,s,r,a,o,l,c){let h=e.length,u=new Float64Array(h),d=new Float64Array(h),m=new Float64Array(h),y=new Float64Array(h),x=new Float64Array(h),f=new Float64Array(h),g=1/0,_=-1/0,v=1/0,A=-1/0,C=1/0,T=-1/0;for(let J=0;J<h;J++){let R=e[J];if(r.x>=0)u[J]=R.x0,d[J]=R.x1;else u[J]=R.x1,d[J]=R.x0;if(r.y>=0)m[J]=R.y0,y[J]=R.y1;else m[J]=R.y1,y[J]=R.y0;if(r.z>=0)x[J]=R.z0,f[J]=R.z1;else x[J]=R.z1,f[J]=R.z0;if(R.x0<g)g=R.x0;if(R.x1>_)_=R.x1;if(R.y0<v)v=R.y0;if(R.y1>A)A=R.y1;if(R.z0<C)C=R.z0;if(R.z1>T)T=R.z1}let I=r.x!==0?1/r.x:0,z=r.y!==0?1/r.y:0,b=r.z!==0?1/r.z:0,E=[],D=[],q=[];for(let J=i;J<s;J++){let R=t[J];if((r.x>0?_<=R.x0:r.x<0?g>=R.x1:_<=R.x0||g>=R.x1)||(r.y>0?A<=R.y0:r.y<0?v>=R.y1:A<=R.y0||v>=R.y1)||(r.z>0?T<=R.z0:r.z<0?C>=R.z1:T<=R.z0||C>=R.z1))continue;let B=n[J];il(R.x0,R.x1,E),il(R.y0,R.y1,D),il(R.z0,R.z1,q);for(let V of E)for(let j of D)for(let X of q){let W=1/0;if(I!==0)W=((r.x>0?B.x1:B.x0)-V)*I;if(z!==0){let U=((r.y>0?B.y1:B.y0)-j)*z;if(U<W)W=U}if(b!==0){let U=((r.z>0?B.z1:B.z0)-X)*b;if(U<W)W=U}let Z=1/0,K=!1;for(let U=0;U<h;U++){let Y=-1/0,ie=1/0;if(I===0){if(V<=u[U]||V>=d[U])continue}else{let se=(u[U]-V)*I,re=(d[U]-V)*I;if(se>Y)Y=se;if(re<ie)ie=re}if(z===0){if(j<=m[U]||j>=y[U])continue}else{let se=(m[U]-j)*z,re=(y[U]-j)*z;if(se>Y)Y=se;if(re<ie)ie=re}if(b===0){if(X<=x[U]||X>=f[U])continue}else{let se=(x[U]-X)*b,re=(f[U]-X)*b;if(se>Y)Y=se;if(re<ie)ie=re}if(Y>=ie)continue;if(Y>W+0.001){if(Y<Z)Z=Y}else if(ie>W+0.001){K=!0;break}}if(K||Z===1/0)continue;G0(c,Math.floor((V+Z*r.x)*a),Math.floor((j+Z*r.y)*o),Math.floor((X+Z*r.z)*l))}}}function iu(e,t){let n=[0],i=0;while(i<e.length){let r=e[i][t];do i++;while(i<e.length&&e[i][t]===r);n.push(i)}if(n.length<=48)return n;let s=new Set;for(let r=0;r<48;r++)s.add(n[Math.floor(r*(n.length-1)/47)]);return[...s]}function V0(e,t,n,i,s){let r={x:1/0,y:1/0,z:1/0};if(!e.length||!t.length)return r;t.sort((d,m)=>d[0]-m[0]||d[1]-m[1]||d[2]-m[2]);let a=[];e:for(let d of t){for(let m of a)if(m[1]<=d[1]&&m[2]<=d[2])continue e;a.push(d)}let o=e.map((d)=>[Math.min(d.x0*n,d.x1*n),Math.max(d.x0*n,d.x1*n),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*s,d.z1*s),Math.max(d.z0*s,d.z1*s)]),l=(d,m,y)=>{let x=0;for(let f of o){let g=Math.min(f[1],d)-f[0];if(g<=0)continue;let _=Math.min(f[3],m)-f[2];if(_<=0)continue;let v=Math.min(f[5],y)-f[4];if(v>0)x+=g*_*v}return x},c=a.slice().sort((d,m)=>m[0]-d[0]),h=-1,u={...r};for(let d of iu(c,0)){let m=d===0?1/0:c[d-1][0]-0.01,y=c.slice(d).sort((f,g)=>g[2]-f[2]),x=Array(y.length+1).fill(1/0);for(let f=y.length-1;f>=0;f--)x[f]=Math.min(x[f+1],y[f][1]);for(let f of iu(y,2)){let g=f===0?1/0:y[f-1][2]-0.01,_=x[f]===1/0?1/0:x[f]-0.01,v=l(m,_,g);if(v>h)h=v,u.x=m,u.y=_,u.z=g}}return u}function ru(e,t,n,i,s,r){let a=[],o=[];for(let x of t)Gi(x,x,a,o);let l=[],c=0,h=0;for(let x=0;x<a.length;x++)if(h+=su(a[x]),h>=1536||x===a.length-1)l.push([c,x+1]),c=x+1,h=0;let u=[];for(let x=0;x<e.length;x++)for(let f=0;f<n.length;f++)for(let g=0;g<l.length;g++)u.push([x,f,g]);let d=e.map(()=>[]),m=0,y=null;return{step(x){while(m<u.length){let[f,g,_]=u[m++],[v,A]=l[_];if(W0(e[f],a,o,v,A,n[g],i,s,r,d[f]),m<u.length&&x())return!1}return!0},cuts(){return y??=e.map((x,f)=>V0(x,d[f],i,s,r)),y}}}function To(e,t){An.x=(e-ut.x)/ut.w*2-1,An.y=-((t-ut.y)/ut.h)*2+1}var rl=()=>{if(!p.pickMeshes.length)return null;return $t.setFromCamera(An,$e),$t.intersectObjects(p.pickMeshes,!1)[0]??null};function ol(){let e=rl();return e?e.object.userData.childId??null:null}var ou=new Ct(new N(0,1,0),0);function dr(e){if($t.setFromCamera(An,$e),ou.constant=-e,$t.ray.intersectPlane(ou,fi))return{x:Math.floor(fi.x),y:e,z:Math.floor(fi.z)};return null}var cu=(e,t)=>({x:Math.floor(e.x-t.x*0.5),y:Math.floor(e.y-t.y*0.5),z:Math.floor(e.z-t.z*0.5)}),X0=new N;function Wi(){let e=rl();if(!e)return null;let t=p.editXform.off,n=je({x:e.point.x-t.x,y:e.point.y-t.y,z:e.point.z-t.z},-p.editXform.rot),i={x:0,y:1,z:0};if(e.face){let r=X0.copy(e.face.normal).transformDirection(e.object.matrixWorld);i=je({x:r.x,y:r.y,z:r.z},-p.editXform.rot)}let s=cu(n,i);return{cell:s,addCell:{x:s.x+Math.round(i.x),y:s.y+Math.round(i.y),z:s.z+Math.round(i.z)}}}function hu(){let e=rl();if(!e)return dr(0);return cu(e.point,e.face?e.face.normal:{x:0,y:1,z:0})}function Vi(e){let t=dr(e+p.editXform.off.y);if(!t)return null;let n=je({x:t.x-p.editXform.off.x,y:0,z:t.z-p.editXform.off.z},-p.editXform.rot);return{x:Math.round(n.x),y:e,z:Math.round(n.z)}}var au=(e,t)=>({x:e===0?t:0,y:e===1?t:0,z:e===2?t:0}),lu=new Ct;function uu(e,t){let n=p.editXform.off,i=p.editXform.rot,s=je(au(e,1),i),r=hn(je(au(e,t),i),n);if($t.setFromCamera(An,$e),lu.setComponents(s.x,s.y,s.z,-(s.x*r.x+s.y*r.y+s.z*r.z)),!$t.ray.intersectPlane(lu,fi))return null;let a=je({x:fi.x-n.x,y:fi.y-n.y,z:fi.z-n.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};if(e===0)o.x=t;else if(e===1)o.y=t;else o.z=t;return o}var Cn=(e,t,n)=>{let i=je({x:e,y:t,z:n},p.editXform.rot);return new N(i.x+p.editXform.off.x,i.y+p.editXform.off.y,i.z+p.editXform.off.z)};function al(e=Wi()){if(p.tool==="add")return e?e.addCell:Vi(0);return e?e.cell:null}var q0=new Pe(10994876),Y0=new Pe(6055805),$0=new Pe(13619151),fr=null,Ao=[],ll=()=>{fr=null};function Yn(){Pn=null,p.liveMeas=null,gi()}function cl(){if(fr)return fr;let e=[],t;if(p.editObject)e.push(...p.editObject.boxes),t=Cn;else Ln(p.root,{x:0,y:0,z:0},0,null,null,(o,l,c,h)=>{if(h)for(let u of o.boxes)e.push(Jt(u,c,l))}),t=(o,l,c)=>new N(o,l,c);let n=ft();It(e,n);let i=e.length===0,s={x:n.min.x,y:n.min.y,z:n.min.z},r={x:n.max.x-1,y:n.max.y-1,z:n.max.z-1};return fr={has:e.length>64?Zh(e):(o,l,c)=>Kh(e,o,l,c),mn:s,mx:r,toW:t,empty:i},fr}function du(){let e=cl();if(e.empty)return null;let t=null;if(p.editObject){let n=Wi();t=n?{...n.cell}:Vi(0)}else t=hu();if(!t)return null;return{x:Math.max(e.mn.x,Math.min(e.mx.x,t.x)),y:Math.max(e.mn.y,Math.min(e.mx.y,t.y)),z:Math.max(e.mn.z,Math.min(e.mx.z,t.z))}}function J0(e){let t=cl(),n=["x","y","z"],i=[];for(let s=0;s<3;s++){let r=n[s],a=n[(s+1)%3],o=n[(s+2)%3],l=t.mn[r],c=t.mx[r],h=[e.x,e.y,e.z],u=(m)=>(h[s]=m,t.has(h[0],h[1],h[2])),d=l;while(d<=c){let m=u(d),y=d;while(y+1<=c&&u(y+1)===m)y++;let x=(f)=>{let g={};return g[r]=f,g[a]=e[a]+0.5,g[o]=e[o]+0.5,t.toW(g.x,g.y,g.z)};i.push({a:x(d),b:x(y+1),mid:x((d+y+1)/2),len:y-d+1,filled:m}),d=y+1}}return i}function hl(e,t,n,i,s,r,a,o,l=!1){let c=i-e,h=s-t,u=r-n,d=(m,y,x,f,g,_,v,A)=>({a:a(m,y,x),b:a(f,g,_),mid:a((m+f)/2,(y+g)/2,(x+_)/2),len:v,filled:!0,nolabel:!A,gray:l});return[d(e,t,n,i,t,n,c,c>=o),d(e,t,n,e,t,r,u,u>=o),d(e,t,n,e,s,n,h,h>=o),d(i,t,n,i,t,r,0,!1),d(e,t,r,i,t,r,0,!1),d(e,s,n,i,s,n,0,!1),d(e,s,n,e,s,r,0,!1),d(i,s,n,i,s,r,0,!1),d(e,s,r,i,s,r,0,!1),d(i,t,n,i,s,n,0,!1),d(e,t,r,e,s,r,0,!1),d(i,t,r,i,s,r,0,!1)]}var Pn=null;function fu(){let e=du();if(!e)return;Pn=Pn&&Pn.x===e.x&&Pn.y===e.y&&Pn.z===e.z?null:e,Ro()}function pu(){if(!Pn)return;Pn=null,Ro()}function j0(e,t){let n=cl();return hl(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z),Math.max(e.x,t.x)+1,Math.max(e.y,t.y)+1,Math.max(e.z,t.z)+1,n.toW,1,!0)}function Ro(){let e=du();p.liveMeas=e?Pn?j0(Pn,e):J0(e):null,gi()}function gi(){let e=document.getElementById("measure");e.innerHTML="",Ao=[];let t=[],n=[];if(p.liveMeas)for(let s of p.liveMeas){let r=s.gray?$0:s.filled?q0:Y0;if(t.push(s.a.x,s.a.y,s.a.z,s.b.x,s.b.y,s.b.z),n.push(r.r,r.g,r.b,r.r,r.g,r.b),s.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(s.filled?"":" empty"),a.textContent=String(s.len),e.appendChild(a),Ao.push({el:a,w:s.mid})}Fi.geometry.dispose();let i=new Wt;i.setAttribute("position",new Yt(t,3)),i.setAttribute("color",new Yt(n,3)),Fi.geometry=i,Fi.visible=t.length>0}function mu(){if(!Ao.length)return;for(let e of Ao){if(rr.copy(e.w).project($e),Math.abs(rr.z)>1){e.el.style.display="none";continue}e.el.style.display="",e.el.style.left=(rr.x*0.5+0.5)*ut.w+"px",e.el.style.top=(-rr.y*0.5+0.5)*ut.h+"px"}}var ul=new N(40,150,30).normalize();function Z0(e){if(jt(e))return;let t=(e.min.x+e.max.x)/2,n=(e.min.y+e.max.y)/2,i=(e.min.z+e.max.z)/2,s=0.5*Math.hypot(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z)+8,r=s+130;tn.position.set(t+ul.x*r,n+ul.y*r,i+ul.z*r),tn.target.position.set(t,n,i),tn.target.updateMatrixWorld();let a=tn.shadow.camera;a.left=-s,a.right=s,a.top=s,a.bottom=-s,a.near=Math.max(1,r-s-20),a.far=r+s+20,a.updateProjectionMatrix(),tn.shadow.normalBias=4*s/tn.shadow.mapSize.x}var xn=[];function K0(){let e=new Set;for(let t of xn){mt.remove(t);let n=t.geometry;if(n&&!e.has(n))n.dispose(),e.add(n)}xn=[];for(let t of pl)t.dispose();if(pl=[],Is=[],yi=null,xi.vox=-1,Co=[],xl(),Tn.clear(),Ls)cancelAnimationFrame(Ls),Ls=0;on=null}var Co=[],on=null,Ls=0,Cs=null;function xl(){if(!Cs)return;Tn.remove(Cs),Cs.geometry.dispose(),Cs.material.dispose(),Cs=null}function dl(e,t,{tier:n="opaque",childId:i}={}){if(!e.length)return null;let s=n!=="opaque",r=Ts(e,t,!s);if(!r)return null;let a=new _t(r,n==="temp"?Qa:sr);if(a.castShadow=!0,a.receiveShadow=!0,mt.add(a),xn.push(a),s){a.renderOrder=2;let o=new _t(r,$h);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,mt.add(o),xn.push(o)}if(i!=null)a.userData.childId=i,p.pickMeshes.push(a),(p.childMeshes[i]||(p.childMeshes[i]=[])).push(a);return a}var Is=[],pl=[],ml=[],xi={q:-1,b:-1,vox:-1},Q0=6707534;function gu(e){let t=Ts(e,di,!0);if(!t)return;let n=[new Ct(new N(-1,0,0),1e9),new Ct(new N(0,-1,0),1e9),new Ct(new N(0,0,-1),1e9)],i=new Di({vertexColors:!0,side:gs,clippingPlanes:n,clipShadows:!0}),s=new _t(t,i);s.castShadow=s.receiveShadow=!0,mt.add(s),xn.push(s);let r=new Di({color:Q0,side:rh,clippingPlanes:n}),a=new _t(t,r);mt.add(a),xn.push(a),pl.push(i,r);let o=ft();It(e,o),Is.push({boxes:e,aabb:o,planes:n})}var e_=8,xu=6,_i=[-90,-60,-30,0,30,60,90],Ps=Math.PI/180,t_=5,yi=null;function n_(e,t){let n=e<=1?1:-1,i=e===0||e===3?1:-1,s=t>=3?1:-1,r=(l,c)=>{let h=Math.cos(c*Ps);return{x:h*Math.sin(l*Ps),y:Math.sin(c*Ps),z:h*Math.cos(l*Ps)}},a=[r(e*90,_i[t]),r(e*90,_i[t+1]),r(e*90+90,_i[t]),r(e*90+90,_i[t+1]),r(e*90+45,(_i[t]+_i[t+1])/2)],o=ml;if(p.editObject)o=o.concat(p.editObject.boxes.map((l)=>Jt(l,p.editXform.rot,p.editXform.off)));yi={job:ru(Is.map((l)=>l.boxes),o,a,n,s,i),sgx:n,sgy:s,sgz:i}}function yu(){if(!Is.length){yi=null;return}let e=(Ue.azim/Ps%360+360)%360,t=Ue.elev/Ps,{q:n,b:i}=xi,s=n*90+45;if(n<0||Math.abs(((e-s)%360+540)%360-180)>45+e_)n=Math.min(3,Math.floor(e/90));if(i<0||t<_i[i]-xu||t>_i[i+1]+xu)i=Math.max(0,Math.min(5,Math.floor((t+90)/30)));if(n!==xi.q||i!==xi.b||p.voxVer!==xi.vox)xi.q=n,xi.b=i,xi.vox=p.voxVer,n_(n,i);if(!yi)return;let r=performance.now();if(!yi.job.step(()=>performance.now()-r>t_)){nn();return}let{sgx:a,sgy:o,sgz:l}=yi,c=yi.job.cuts();yi=null;for(let h=0;h<Is.length;h++){let u=Is[h],d=c[h],m=(y,x,f,g)=>Math.min(g,(y>0?f:-x)+4);u.planes[0].normal.set(-a,0,0),u.planes[0].constant=m(a,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-o,0),u.planes[1].constant=m(o,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-l),u.planes[2].constant=m(l,u.aabb.min.z,u.aabb.max.z,d.z)}nn()}function Ln(e,t,n,i,s,r){if(e===p.editObject||e.vis==="hidden")return;let a=s??(e.vis==="deemphasized"?e.id:null);if(e.type==="object")r(e,t,n,i,a);else for(let o of e.children)Ln(o,hn(t,je(o.pos,n)),n+o.rot&3,e===p.context?o.id:i,a,r)}var fl=(e,t)=>{let n=e.get(t);if(!n)e.set(t,n=[]);return n},_u=(e,t,n,i)=>{for(let s of e.boxes)i.push(Jt(s,n,t));return i};function vu(){let{off:e,rot:t}=p.editXform;if(Tn.position.set(e.x,e.y,e.z),Tn.rotation.set(0,-t*Math.PI/2,0),Tn.updateMatrixWorld(!0),on){Tn.remove(on),on.geometry.dispose();let r=xn.indexOf(on);if(r>=0)xn.splice(r,1)}let n=p.sel3d,i=n&&n.lifted?p.editObject.boxes.concat(n.boxes):p.editObject.boxes,s=Ts(i,di,!0);if(on=s?new _t(s,sr):null,on)on.castShadow=on.receiveShadow=!0,Tn.add(on),xn.push(on);if(p.pickMeshes=on?[on,...Co]:[...Co],n)i_(n.region);else xl()}function i_(e){xl();let t=new En(e.x1-e.x0,e.y1-e.y0,e.z1-e.z0),n=new Ni(new vs(t),new hi({color:16766073,depthTest:!1}));t.dispose(),n.position.set((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2),n.renderOrder=1000,Tn.add(n),Cs=n}function vi(){if(Ls)return;Ls=requestAnimationFrame(()=>{Ls=0,vu(),nn()})}function Po(){p.voxVer++,ll(),vi()}function _l(e,t){p.editObject.boxes=nl(p.editObject.boxes,e,t),Po()}function pr(e){p.editObject.boxes=ki(p.editObject.boxes,e),Po()}function Lo(e){let t=p.editObject.boxes;for(let n of e)t=nl(t,n,n.c);p.editObject.boxes=t,Po()}function bu(e,t){let n=Jh(p.editObject.boxes,e.x,e.y,e.z,t);if(!n)return!1;return p.editObject.boxes=n,Po(),!0}function Mu(){if(!xn.length)return null;$t.setFromCamera(An,$e);let e=$t.intersectObjects(xn,!1)[0];if(!e)return null;let t=$t.ray.direction,n=Math.floor(e.point.x+t.x*0.5),i=Math.floor(e.point.y+t.y*0.5),s=Math.floor(e.point.z+t.z*0.5),r=(o,l,c)=>{let h=je({x:n-l.x,y:i-l.y,z:s-l.z},-c);for(let u of o)if(or(u,h.x,h.y,h.z))return u.c;return null};if(p.editObject){let o=r(p.editObject.boxes,p.editXform.off,p.editXform.rot);if(o!=null)return o}let a=null;return Ln(p.root,{x:0,y:0,z:0},0,null,null,(o,l,c)=>{if(a==null)a=r(o.boxes,l,c)}),a}var gl=new Set;function bi(e){for(let t of gl)if(e.has(t)!==p.selection.has(t)){Et();return}Su()}function Et(){K0(),p.pickMeshes=[],p.childMeshes={},p.childBox={},gl.clear(),p.voxVer++,ll();let e={x:0,y:0,z:0},t=ft();if(p.editObject){p.editXform=Wn(As(),{off:p.editObject.pos,rot:p.editObject.rot});let n=[],i=new Map;Ln(p.root,e,0,null,null,(r,a,o,l,c)=>_u(r,a,o,c?fl(i,c):n)),It(n,t);let s=dl(n,di,{tier:"temp"});Co=s?[s]:[];for(let r of i.values())It(r,t),gu(r);ml=n,vu(),rn(p.editObject,p.editXform.off,p.editXform.rot,t)}else{let n=new Map,i=new Map,s=[],r=[];Ln(p.root,e,0,null,null,(a,o,l,c,h)=>{let u=_u(a,o,l,[]);It(u,t);let d=h;if(c){if(d){if(gl.add(c),p.selection.has(c))d=null}It(u,p.childBox[c]||(p.childBox[c]=ft()))}if(d)fl(i,d).push(...u);else if(r.push(...u),c)fl(n,c).push(...u);else s.push(...u)}),dl(s,di,{tier:"temp"});for(let[a,o]of n)dl(o,di,{childId:a});for(let a of i.values())gu(a);ml=r}p.sceneBox=t,Z0(t),Su(),nn()}function s_(e,t,n){let i=new En(t.x-e.x,t.y-e.y,t.z-e.z),s=new Ni(new vs(i),new hi({color:n,depthTest:!1}));return s.position.set((e.x+t.x)/2,(e.y+t.y)/2,(e.z+t.z)/2),s.renderOrder=999,i.dispose(),s}function Su(){for(let e of Gn.children)e.geometry?.dispose?.();if(Gn.clear(),Gn.position.set(0,0,0),p.editObject)return;for(let e of p.selection){let t=p.childBox[e];if(t&&!jt(t))Gn.add(s_(t.min,t.max,15787730))}}function st(e,t={},...n){let i=document.createElement(e);if(Object.assign(i,t),n.length)i.append(...n);return i}var mr=new N,Eu=new N,wu=new N,Tu=new N;function yl(e){return Tu.set(e.x,e.y,e.z).applyMatrix4($e.matrixWorldInverse),2*Math.max(0.001,-Tu.z)*Oi/ut.h}function Au(e,t){let n=Ue.zoom/ut.h;Eu.setFromMatrixColumn($e.matrixWorld,0),wu.setFromMatrixColumn($e.matrixWorld,1),Xe.target.addScaledVector(Eu,-e*n),Xe.target.addScaledVector(wu,t*n)}function Ru(e,t){Xe.azim-=e*0.012,Xe.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,Xe.elev+t*0.012))}function Io(e){if(jt(e))return;Xe.target.set((e.min.x+e.max.x)/2,(e.min.y+e.max.y)/2,(e.min.z+e.max.z)/2);let t=0.5*Math.hypot(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z),n=(i)=>2.3*t*Oi*Math.sqrt(1+i*i)/i;Xe.zoom=Math.max(8,Math.min(bo,Math.max(n(Oi),n(Oi*(ut.w/ut.h)))))}function $n(){let e=ft();if(p.editObject){if(rn(p.editObject,p.editXform.off,p.editXform.rot,e),jt(e)){let t=p.editXform.off;Xe.target.set(t.x,t.y+6,t.z),Xe.zoom=41;return}}else for(let t in p.childBox){let n=p.childBox[t];e.min.x=Math.min(e.min.x,n.min.x),e.min.y=Math.min(e.min.y,n.min.y),e.min.z=Math.min(e.min.z,n.min.z),e.max.x=Math.max(e.max.x,n.max.x),e.max.y=Math.max(e.max.y,n.max.y),e.max.z=Math.max(e.max.z,n.max.z)}if(jt(e)){Xe.target.set(0,1,0),Xe.zoom=23;return}Io(e)}function No(e){if(e===p.root){$n();return}let t=Rs(e);Io(rn(e,t.off,t.rot,ft()))}function Cu(){Ue.azim+=(Xe.azim-Ue.azim)*0.22,Ue.elev+=(Xe.elev-Ue.elev)*0.22,Ue.zoom+=(Xe.zoom-Ue.zoom)*0.25,Ue.target.lerp(Xe.target,0.25);let e=Math.cos(Ue.elev),t=Math.sin(Ue.elev);mr.set(e*Math.sin(Ue.azim),t,e*Math.cos(Ue.azim));let n=Ue.zoom/(2*Oi);$e.position.copy(Ue.target).addScaledVector(mr,n);let i=fo.clamp((Math.abs(Ue.elev)-1.45)/(Math.PI/2-1.45),0,1);if(Mo.set(-Math.sin(Ue.azim),0,-Math.cos(Ue.azim)),Ue.elev<0)Mo.negate();Ka.set(0,1,0).lerp(Mo,i),$e.up.copy(Ka.normalize()),$e.lookAt(Ue.target),$e.aspect=ut.w/ut.h;let s=$e.position,r=1/0,a=-1/0,o=(h,u,d)=>{let m=(s.x-h)*mr.x+(s.y-u)*mr.y+(s.z-d)*mr.z;if(m<r)r=m;if(m>a)a=m},l=(h,u=0,d=0,m=0)=>{for(let y of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let f of[h.min.z,h.max.z])o(y+u,x+d,f+m)},c=p.sceneBox;if(c&&!jt(c)){if(l(c),p.editObject){let d=rn(p.editObject,p.editXform.off,p.editXform.rot,ft());if(p.sel3d){let m=p.sel3d.region,y=Jt({...m,c:0},p.editXform.rot,p.editXform.off);It([y],d)}l(d)}let h=p.drag;if(h&&h.dx!=null)l(c,h.dx,h.dy??0,h.dz??0);let u=Math.max(10,0.5*Math.hypot(c.max.x-c.min.x,c.max.y-c.min.y,c.max.z-c.min.z));for(let d of[c.min.x-u,c.max.x+u])for(let m of[c.min.z-u,c.max.z+u])o(d,0,m)}if(r>a)r=0.1,a=4000;$e.near=Math.max(Ue.zoom*0.02,r-5),$e.far=Math.max($e.near+1,a+5),$e.updateProjectionMatrix(),zi.position.set(Ue.target.x,-0.1,Ue.target.z),qh()}var r_={0:["y","z"],1:["x","z"],2:["x","y"]};function o_(e){let t=[];for(let n of e)for(let i=n.x0;i<n.x1;i++)for(let s=n.y0;s<n.y1;s++)for(let r=n.z0;r<n.z1;r++)t.push({x:i,y:s,z:r,c:n.c});return t}function a_(e,t,n,i,s){let r=(n%360+360)%360;if(r>180)r-=360;if(r===0)return;let a=Math.round(r/90),o=(r-a*90)*Math.PI/180,l=(a%4+4)%4,c=Math.tan(o/2),h=Math.sin(o),[u,d]=r_[t];for(let m of e){let y=m[u]-i,x=m[d]-s;for(let f=0;f<l;f++){let g=-x,_=y;y=g,x=_}if(o)y-=Math.round(x*c),x+=Math.round(y*h),y-=Math.round(x*c);m[u]=i+y,m[d]=s+x}}function l_(e){let t=new Map;for(let o of e)t.set(Bi(o.x,o.y,o.z),o.c);let n=(o,l,c,h)=>t.get(Bi(o,l,c))===h,i=(o,l,c,h,u)=>{for(let d=o;d<l;d++)if(!n(d,c,h,u))return!1;return!0},s=(o,l,c,h,u,d)=>{for(let m=c;m<h;m++)if(!i(o,l,u,m,d))return!1;return!0},r=e.slice().sort((o,l)=>o.y-l.y||o.z-l.z||o.x-l.x),a=[];for(let o of r){let{x:l,y:c,z:h,c:u}=o;if(!t.has(Bi(l,c,h)))continue;let d=l+1;while(n(d,c,h,u))d++;let m=h+1;while(i(l,d,c,m,u))m++;let y=c+1;while(s(l,d,h,m,y,u))y++;for(let x=c;x<y;x++)for(let f=h;f<m;f++)for(let g=l;g<d;g++)t.delete(Bi(g,x,f));a.push({x0:l,y0:c,z0:h,x1:d,y1:y,z1:m,c:u})}return a}function Pu(e,t,n,i,s,r){let a=o_(e);a_(a,n,t,Math.round(i),Math.round(s));for(let o of a){let l=r(o.x,o.y,o.z);o.x=l.x,o.y=l.y,o.z=l.z}return l_(a)}var vl=null,Lu=[],Iu=[],Ns=()=>vl;function Nu(e){if(Lu=e,e.length)vl="node"}var Do=()=>Lu;function Du(e){if(Iu=e,e.length)vl="vox"}var Uo=()=>Iu;var c_=200,_n=[],In=-1,Oo=!1;function Uu(){_n.length=0,In=-1}var Ou=(e)=>({rootJSON:e,uid:ws(),pathIds:p.path.map((t)=>t.id),selection:[...p.selection],editId:p.editObject?p.editObject.id:null,collapsed:[...p.collapsed]});function zu(e){if(Oo)return;let t=Ou(e),n=_n[In];if(n&&n.rootJSON===t.rootJSON)return;if(_n.length=In+1,_n.push(t),_n.length>c_)_n.shift();In=_n.length-1}function Fu(e){if(Oo||In<0)return;_n[In]=Ou(e)}function Bu(e){Oo=!0,So(e.uid),p.root=Jn(JSON.parse(e.rootJSON)),p.path=[];let t=p.root;for(let n of e.pathIds){let i=t.id===n?t:t.type==="scene"?t.children.find((s)=>s.id===n):null;if(!i)break;t=i,p.path.push(t)}if(!p.path.length)p.path=[p.root];p.editObject=e.editId?St(e.editId):null,p.selection=new Set(e.selection.filter((n)=>p.context.children.some((i)=>i.id===n))),p.collapsed=new Set(e.collapsed),p.drag=null,p.sel3d=null,p.painting=!1,p.lastVox=null,Et(),Je(),at(),Oo=!1}function zo(){if(wt(),In>0)Bu(_n[--In])}function gr(){if(wt(),In<_n.length-1)Bu(_n[++In])}var Ml=document.getElementById("app"),jn=document.getElementById("locked"),Sl=typeof navigator.locks<"u"&&typeof BroadcastChannel<"u",Mi=null,dn=!1,yr=!1,Xi=0,bl=null,Fo=null,Bo,xr=null,ku=()=>!1,Hu=()=>!1,ko=()=>yr,vr=()=>dn,Gu=(e,t)=>{ku=e,Hu=t},Wu=(e)=>{yr=!1,Ml.inert=!1,jn.hidden=!1,jn.disabled=!0,jn.textContent=e,Vu()},Vu=()=>{document.getElementById("docslist")?.setAttribute("hidden","");for(let e of document.querySelectorAll(".ctxmenu"))e.remove()},_r=(e="Editing in another tab — click to move here")=>{yr=!1,Ml.inert=!0,jn.hidden=!1,jn.disabled=!1,jn.textContent=e,Vu(),document.activeElement?.blur(),jn.focus({preventScroll:!0})},Xu=()=>{yr=!0,Ml.inert=!1,jn.hidden=!0};function El(){yr=!1,dn=!1,clearTimeout(Bo);let e=bl;bl=null,e?.()}function qu(e,t,n,i){let s,r=new Promise((a)=>s=a);navigator.locks.request(`voxelier-doc:${e}`,n?{}:{ifAvailable:!0},async(a)=>{if(!a)return;if(t!==Xi||Mi!==e||dn)return;dn=!0;let o=!1;try{o=ku(e)}catch{o=!1}if(t!==Xi||Mi!==e||!dn)return;if(!o){El(),_r("Could not open this document"),i(!1);return}bl=s,clearTimeout(Bo),i(!0),Xu(),await r}).catch(()=>{if(t===Xi&&Mi===e)i(!1)})}function h_(){if(!dn)return;let e=!1;try{e=Hu()}catch{e=!1}if(!e){Xu();return}_r(),El()}function Yu(e){if(!Sl)return Wu("This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable."),Promise.resolve(!1);return Xi++,xr?.(!1),xr=null,El(),Fo?.close(),Mi=e,_r(),Fo=new BroadcastChannel(`voxelier-doc:${e}`),Fo.onmessage=(t)=>{if(t.data?.k==="release")h_()},new Promise((t)=>{xr=t,qu(e,Xi,!1,t)})}async function $u(e,t){if(!Sl)return Wu("This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable."),null;if(Mi===e&&dn)return t();let n=null;return await navigator.locks.request(`voxelier-doc:${e}`,{ifAvailable:!0},(i)=>{if(!i)return;let s=dn;dn=!0;try{n=t()}finally{dn=s}}),n}jn.onclick=()=>{if(!Sl||Mi===null||dn)return;clearTimeout(Bo),Fo?.postMessage({k:"release"}),_r("Waiting for the other tab…"),Xi++,qu(Mi,Xi,!0,(n)=>{let i=xr;xr=null,i?.(n)}),Bo=setTimeout(()=>{if(!dn&&Mi!==null)_r("The other tab isn't responding — close it to edit here")},5000)};var br="voxelier-doc:",u_="voxelier-v11",Ju="voxelier-ui-v1";function yn(e){let t={id:e.id,nm:e.name,p:e.pos,r:e.rot,vs:e.vis};return e.type==="object"?{t:"o",...t,b:e.boxes.map((n)=>[n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,n.c])}:{t:"s",...t,c:e.children.map(yn)}}var d_={transparent:"deemphasized",invisible:"hidden"};function Jn(e){let t={id:e.id,name:e.nm||"",pos:e.p,rot:e.r,vis:d_[e.vs]||e.vs||"visible"};return e.t==="o"?{type:"object",...t,boxes:e.b.map((n)=>({x0:n[0],y0:n[1],z0:n[2],x1:n[3],y1:n[4],z1:n[5],c:n[6]}))}:{type:"scene",...t,children:e.c.map(Jn)}}function ju(e){console.error("save failed",e);let t=e instanceof DOMException&&(e.name==="QuotaExceededError"||e.code===22);alert(t?"Could not save: the browser's storage quota is full (~5 MB per origin).":"Save failed: "+e.message)}function Ho(e){let t;try{t=localStorage.getItem(br+e)}catch{return{kind:"missing"}}if(t===null)return{kind:"missing"};try{let n=Wo(JSON.parse(t));return n?{kind:"ok",root:n}:{kind:"unreadable"}}catch{return{kind:"unreadable"}}}var Mr=()=>{let e=[];try{for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(!n?.startsWith(br))continue;try{let i=JSON.parse(localStorage.getItem(n)||"");if(!i?.root)continue;e.push({id:n.slice(br.length),name:typeof i.name==="string"&&i.name?i.name:i.root.nm||"Project",updated:Number(i.updated)||0})}catch{}}}catch{}return e.sort((t,n)=>n.updated-t.updated)},Go=null,qi=!1;function Sr(e,t){if(!vr())return qi=!0,!1;let n=JSON.stringify(yn(t)),i=JSON.stringify(t.name||"Project");try{if(localStorage.setItem(br+e,`{"uid":${ws()},"root":${n},"name":${i},"updated":${Date.now()}}`),Us()===e)Go=n;return qi=!1,!0}catch(s){return qi=!0,ju(s),!1}}function Zu(e){if(!vr())return qi=!0,!1;try{if(localStorage.removeItem(br+e),Us()===e)Go=null;return!0}catch(t){return qi=!0,ju(t),!1}}var Ku=null,Us=()=>Ku,Qu=(e)=>{Ku=e,Go=null,qi=!1},Ds;function wl(){if(Ds!==void 0||qi)return!0;return p.root!==null&&Go!==JSON.stringify(yn(p.root))}function f_(){try{localStorage.setItem(Ju,JSON.stringify([...p.collapsed]))}catch(e){}}function wt(){clearTimeout(Ds),Ds=void 0;let e=Us();if(e===null||!vr())return!1;return zu(JSON.stringify(yn(p.root))),f_(),Sr(e,p.root)}function Tl(){if(Ds!==void 0)return!0;Fu(JSON.stringify(yn(p.root)));let e=Us();if(e===null||!vr())return!1;return Sr(e,p.root)}function at(){clearTimeout(Ds),Ds=setTimeout(wt,250)}function Al(e,t=1){let n=0,i=(s)=>{let r=/^n(\d+)/.exec(s.id);if(r)n=Math.max(n,Number(r[1]));if(s.type==="scene")s.children.forEach(i)};i(e),So(Math.max(t,n+1))}function Wo(e,t=!0){if(!e||!e.root)return null;let n=Jn(e.root);if(t)Al(n,e.uid||1);return n}var ed=()=>{try{let e=JSON.parse(localStorage.getItem(Ju));return Array.isArray(e)?e:[]}catch{return[]}};function td(){try{return Wo(JSON.parse(localStorage.getItem(u_)))}catch{return null}}var p_=2;function Er(e){let t=ft();return It(e,t),{mn:t.min,mx:t.max}}var Vo=(e)=>{let{mn:t,mx:n}=Er(e);return{x0:t.x,y0:t.y,z0:t.z,x1:n.x,y1:n.y,z1:n.z}};function id(e){if(!e.length)return[];let{mn:t}=Er(e);return e.map((n)=>ar(n,-t.x,-t.y,-t.z))}function sd(e){let t=lr(p.editObject.boxes,e);p.sel3d={region:t.length?Vo(t):{...e},boxes:t,lifted:!1},vi()}function Rl(){let e=p.sel3d;if(!e||e.lifted)return;wt(),e.lifted=!0,pr(e.region)}function Cl(){g_();let e=p.sel3d;if(!e||!e.lifted)return;e.lifted=!1,Lo(e.boxes),e.boxes=lr(p.editObject.boxes,e.region),at()}function Zn(){let e=p.sel3d;if(!e)return;if(p.sel3d=null,e.lifted)Lo(e.boxes),at();else vi()}function Pl(){let e=p.sel3d;if(!e)return;let{region:t,lifted:n}=e;if(p.sel3d=null,!n)pr(t);else vi();at()}function Ll(){if(p.sel3d&&p.sel3d.boxes.length)Du(id(p.sel3d.boxes))}function rd(){Ll(),Pl()}function od(e){if(!e.length)return;Zn();let t=id(e),n=0,i=0,s=0,r=p.editObject.boxes;if(r.length){let{mn:o,mx:l}=Er(r);n=l.x+p_,i=o.y,s=o.z}let a=t.map((o)=>ar(o,n,i,s));p.sel3d={region:Vo(a),boxes:a,lifted:!1},Lo(a),at()}function ad(e,t,n){let i=p.sel3d;if(!i||!e&&!t&&!n)return;let s=i.region;s.x0+=e,s.x1+=e,s.y0+=t,s.y1+=t,s.z0+=n,s.z1+=n,i.boxes=i.boxes.map((r)=>ar(r,e,t,n)),vi()}function nd(e,t,n){let{x:i,y:s,z:r}=e;for(let a=(n%4+4)%4;a>0;a--)if(t===0){let o=-r,l=s;s=o,r=l}else if(t===1){let o=-r,l=i;i=o,r=l}else{let o=-s,l=i;i=o,s=l}return{x:i,y:s,z:r}}function m_(e,t,n){let i=nd({x:e.x0,y:e.y0,z:e.z0},t,n),s=nd({x:e.x1-1,y:e.y1-1,z:e.z1-1},t,n);return{x0:Math.min(i.x,s.x),y0:Math.min(i.y,s.y),z0:Math.min(i.z,s.z),x1:Math.max(i.x,s.x)+1,y1:Math.max(i.y,s.y)+1,z1:Math.max(i.z,s.z)+1,c:e.c}}function ld(){let e=$e.matrixWorld.elements,t=je({x:e[0],y:0,z:e[2]},-p.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var Xo=null;function Il(){let e=p.sel3d;if(!e)return;let t=Er(e.boxes);Xo={boxes:e.boxes.map((n)=>({...n})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function g_(){Xo=null}function cd(e,t){let n=p.sel3d,i=Xo;if(!n||!i||!i.boxes.length)return;let s=(e%4+4)%4,r;if(!s)r=i.boxes.map((a)=>({...a}));else{let a=t?ld():1;r=i.boxes.map((u)=>m_(u,a,s));let o=Er(r),l=pi(i.cx-(o.mn.x+o.mx.x)/2),c=pi(i.cy-(o.mn.y+o.mx.y)/2),h=pi(i.cz-(o.mn.z+o.mx.z)/2);r=r.map((u)=>ar(u,l,c,h))}n.boxes=r,n.region=Vo(r),vi()}function hd(e,t){let n=p.sel3d,i=Xo;if(!n||!i||!i.boxes.length)return;let s=t?ld():1,[r,a]=s===0?[i.cy,i.cz]:s===1?[i.cx,i.cz]:[i.cx,i.cy];n.boxes=Pu(i.boxes,e,s,r,a,(o,l,c)=>({x:o,y:l,z:c})),n.region=Vo(n.boxes),vi()}function x_(){let e=p.sel3d;if(!e)return null;let t=e.region,n=new li;for(let i of[t.x0,t.x1])for(let s of[t.y0,t.y1])for(let r of[t.z0,t.z1])n.expandByPoint(Cn(i,s,r));return n}function Nl(){let e=x_();if(!e)return!1;return $t.setFromCamera(An,$e),$t.ray.intersectsBox(e)}function __(e){if(!e.length)return[];let t=[[],[],[]];for(let v of e)t[0].push(v.x0,v.x1),t[1].push(v.y0,v.y1),t[2].push(v.z0,v.z1);let n=t.map((v)=>[...new Set(v)].sort((A,C)=>A-C)),i=n.map((v)=>v.length-1),[s,r,a]=i;if(s*r*a>8000000)return e;let o=n.map((v)=>new Map(v.map((A,C)=>[A,C]))),l=(v,A,C)=>(v*r+A)*a+C,c=new Int32Array(s*r*a);for(let v of e){let A=o[0].get(v.x1),C=o[1].get(v.y1),T=o[2].get(v.z1);for(let I=o[0].get(v.x0);I<A;I++)for(let z=o[1].get(v.y0);z<C;z++)for(let b=o[2].get(v.z0);b<T;b++)c[l(I,z,b)]=v.c+1}let h=[],u=[],d=[],m=[];for(let v=0;v<s;v++)for(let A=0;A<r;A++)for(let C=0;C<a;C++)if(c[l(v,A,C)])h.push(l(v,A,C)),u.push(v),d.push(A),m.push(C);let y=[u,d,m],x=new Uint8Array(s*r*a),f=(v)=>{x.fill(0);let A=Array.from({length:h.length},(z,b)=>b).sort((z,b)=>y[v[2]][z]-y[v[2]][b]||y[v[1]][z]-y[v[1]][b]||y[v[0]][z]-y[v[0]][b]),C=[0,0,0],T=(z,b,E,D)=>{if(b[E]>=i[E])return!1;let q=(E+1)%3,J=(E+2)%3;C[E]=b[E];for(let R=z[q];R<b[q];R++){C[q]=R;for(let B=z[J];B<b[J];B++){C[J]=B;let V=l(C[0],C[1],C[2]);if(x[V]||c[V]!==D)return!1}}return!0},I=[];for(let z of A){let b=h[z];if(x[b])continue;let E=c[b],D=[u[z],d[z],m[z]],q=[u[z]+1,d[z]+1,m[z]+1];for(let J of v)while(T(D,q,J,E))q[J]++;for(let J=D[0];J<q[0];J++)for(let R=D[1];R<q[1];R++)for(let B=D[2];B<q[2];B++)x[l(J,R,B)]=1;I.push({x0:n[0][D[0]],y0:n[1][D[1]],z0:n[2][D[2]],x1:n[0][q[0]],y1:n[1][q[1]],z1:n[2][q[2]],c:E-1})}return I},g=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],_=null;for(let v of g){let A=f(v);if(!_||A.length<_.length)_=A}return _}var y_=24,ud=(e)=>e.reduce((t,n)=>t+(n.x1-n.x0)*(n.y1-n.y0)*(n.z1-n.z0),0),Dl=new WeakSet;function Ul(e){if(e.boxes.length<y_||Dl.has(e.boxes))return!1;let t=__(e.boxes);if(t.length<e.boxes.length&&ud(t)===ud(e.boxes))return e.boxes=t,Dl.add(t),!0;return Dl.add(e.boxes),!1}var Ol=(e,t,n)=>{let i=new Set(p.selection);if(Zn(),n&&Ul(n))Tl();if(p.selection=new Set([e]),p.editObject=null,Yn(),p.context!==t||n)Et();else bi(i);Je()};function v_(){if(p.path.length<=1)return;let e=p.context,t=p.editObject;Ol(p.path.pop().id,e,t)}function b_(){Ol(p.editObject.id,p.context,p.editObject)}function dd(){if(p.editObject)b_();else v_()}function Nn(e){let t=Xt(e);if(!t)return;let n=p.context,i=p.editObject;p.path=t.slice(0,-1),Ol(e.id,n,i)}function Yi(e,t){let n=Xt(e);if(!n)return;let i=p.editObject;if(Zn(),i&&i!==e&&Ul(i))Tl();if(e.type==="scene")p.path=n,p.editObject=null;else p.path=n.slice(0,-1),p.editObject=e;if(p.selection.clear(),p.tool="view",Yn(),Et(),Je(),t)$n()}var Dn=null,Nt=null,wr=null,Os=null,fn=null,M_={visible:"◉",deemphasized:"◐",hidden:"⦰"},zl=(e,t)=>{let n=Math.min(255,(e>>16&255)*t)|0,i=Math.min(255,(e>>8&255)*t)|0,s=Math.min(255,(e&255)*t)|0;return`rgb(${n},${i},${s})`},qo=new Map;function fd(e){return e.type==="object"?"o"+e.boxes.map((t)=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+e.children.map((t)=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${fd(t)}`).join()}function S_(e){let t=qo.get(e.id);if(e===p.editObject&&t)return t.cv;let n=fd(e);if(t&&t.sig===n)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let s=i.getContext("2d");s.fillStyle="#0f1115",s.fillRect(0,0,52,52);let r=ur(e,{x:0,y:0,z:0},0,[]);if(r.length){let a=ft();It(r,a);let{x:o,y:l,z:c}=a.min,{x:h,y:u,z:d}=a.max,m=40/Math.max(h-o,u-l,d-c,1),y=26-((o+h)/2-(c+d)/2)*m*0.5,x=28+(l+u)/2*m*0.6-((o+h)/2+(c+d)/2)*m*0.28,f=(_,v,A)=>[y+(_-A)*m*0.5,x-v*m*0.6+(_+A)*m*0.28],g=(_,v)=>{s.fillStyle=_,s.beginPath(),s.moveTo(v[0][0],v[0][1]);for(let A=1;A<v.length;A++)s.lineTo(v[A][0],v[A][1]);s.closePath(),s.fill()};r.sort((_,v)=>_.x0+_.x1+_.y0+_.y1+_.z0+_.z1-(v.x0+v.x1+v.y0+v.y1+v.z0+v.z1));for(let _ of r)g(zl(_.c,0.78),[f(_.x1,_.y0,_.z0),f(_.x1,_.y1,_.z0),f(_.x1,_.y1,_.z1),f(_.x1,_.y0,_.z1)]),g(zl(_.c,0.6),[f(_.x0,_.y0,_.z1),f(_.x1,_.y0,_.z1),f(_.x1,_.y1,_.z1),f(_.x0,_.y1,_.z1)]),g(zl(_.c,1),[f(_.x0,_.y1,_.z0),f(_.x1,_.y1,_.z0),f(_.x1,_.y1,_.z1),f(_.x0,_.y1,_.z1)])}return qo.set(e.id,{sig:n,cv:i}),i}var $i=null;function Fl(e){$i=e}function E_(e){if(e===p.root||qt(e)!==p.context||p.editObject)Nn(e);else{let t=new Set(p.selection);if(p.selection.has(e.id))p.selection.delete(e.id);else p.selection.add(e.id);bi(t),Je()}$i=e.id}function w_(e){let t=p.context.children,n=$i?t.findIndex((o)=>o.id===$i):-1,i=t.findIndex((o)=>o.id===e.id);if(e===p.root||p.editObject||n<0||i<0){Nn(e),$i=e.id;return}let s=new Set(p.selection),r=Math.min(n,i),a=Math.max(n,i);p.selection=new Set(t.slice(r,a+1).map((o)=>o.id)),bi(s),Je()}function T_(e,t){if(t.shiftKey||t.ctrlKey||t.metaKey){if(fn)clearTimeout(fn.timer),fn=null;if(t.shiftKey)w_(e);else E_(e);return}if(fn&&fn.node===e){clearTimeout(fn.timer),fn=null,Yi(e,!0);return}if(fn)clearTimeout(fn.timer);if(e===p.root)Yi(e);else Nn(e);$i=e===p.root?null:e.id,fn={node:e,timer:setTimeout(()=>fn=null,300)}}function Bs(e){Yo();let n=document.querySelector(`#tree .trow[data-id="${e.id}"]`)?.querySelector(".nm");if(!n)return;let i=st("input",{className:"nminput",value:e.name});i.placeholder=e===p.root?"Project":e.type==="scene"?"group":"object";let s=!1,r=(a)=>{if(s)return;if(s=!0,a)e.name=i.value.trim(),at();Je()};i.addEventListener("keydown",(a)=>{if(a.stopPropagation(),a.key==="Enter")r(!0);else if(a.key==="Escape")r(!1)}),i.addEventListener("blur",()=>r(!0)),n.replaceWith(i),i.focus(),i.select()}function A_(e){let t=S_(e);if(t.className="thumb",t.onclick=null,t.title="",e!==p.root&&e.type==="scene"&&e.children.length){let n=p.collapsed.has(e.id);if(t.classList.add("group"),n)t.classList.add("collapsed");t.title=n?"Expand group":"Collapse group",t.onclick=(i)=>{i.stopPropagation(),n?p.collapsed.delete(e.id):p.collapsed.add(e.id),Bl()}}return t}function R_(e,t){if(e.draggable=t!==p.root,t!==p.root)e.addEventListener("dragstart",(n)=>{if(n.stopPropagation(),Dn=t.id,n.dataTransfer){n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain",t.id)}catch(i){}}});e.addEventListener("dragend",zs),e.addEventListener("dragover",(n)=>{n.preventDefault(),n.stopPropagation(),C_(n,t,e)}),e.addEventListener("drop",(n)=>{n.preventDefault(),n.stopPropagation(),xd()})}function Bl(){let e=document.getElementById("tree");e.innerHTML="";let t=(i,s)=>{let r=i===p.root,a=!r&&p.context.children.includes(i)&&p.selection.has(i.id),o=i.vis,l=st("div",{className:"trow"+(r?" root":"")+(a?" sel":"")+(i===p.context&&!p.editObject?" ctx":"")+(i===p.editObject?" edit":"")+(!r&&o!=="visible"?" dim":"")});l.style.paddingLeft=4+s*13+"px",l.dataset.id=i.id;let c=A_(i),h=st("span",{className:"nm"});if(r)h.textContent=i.name||"Project";else if(i.name)h.textContent=i.name;else h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>";if(h.onclick=(u)=>{if(!fn&&!p.editObject&&!r&&p.selection.size===1&&p.selection.has(i.id))u.stopPropagation(),Bs(i)},l.append(c,h),!r)l.append(st("button",{className:"tb"+(o==="visible"?" on":""),textContent:M_[o],title:"visible → deemphasized → hidden",onclick:(u)=>{u.stopPropagation(),_d(i)}}));if(l.onclick=(u)=>T_(i,u),l.oncontextmenu=(u)=>{u.preventDefault(),u.stopPropagation();let d=!r&&!p.editObject&&qt(i)===p.context&&p.selection.has(i.id);if(!r&&!d)Nn(i);md(i,u.clientX,u.clientY)},R_(l,i),e.appendChild(l),i.type==="scene"&&(r||!p.collapsed.has(i.id)))for(let u of i.children)t(u,s+1)};t(p.root,0);let n=new Set;(function i(s){if(n.add(s.id),s.type==="scene")s.children.forEach(i)})(p.root);for(let i of qo.keys())if(!n.has(i))qo.delete(i)}function Yo(){if(Os)Os.remove(),Os=null,window.removeEventListener("pointerdown",pd,!0)}function pd(e){if(Os&&!Os.contains(e.target))Yo()}function md(e,t,n){Yo();let i=st("div",{className:"ctxmenu"}),s=(l,c,h)=>i.appendChild(st("div",{className:"ctxitem"+(h?" "+h:""),textContent:l,onclick:()=>{Yo(),c()}})),r=()=>i.appendChild(st("div",{className:"ctxdiv"})),a=e!==p.root&&qt(e)===p.context&&p.selection.size>1&&p.selection.has(e.id);if(!a)s("Rename",()=>Bs(e)),s("Locate",()=>No(e)),r();if(e!==p.root)s("Copy",()=>Ar()),s("Duplicate",()=>a?$o():Md(e)),s("Delete objects",()=>a?Tr():Sd(e),"danger"),r();if(a)s("Group",()=>bd(e));else if(e.type==="scene"){if(e!==p.root)s("Ungroup",()=>Ed(e));if(Ns())s("Paste",()=>Jo(e));s("New object",()=>wd(e)),s("New group",()=>Td(e))}else s("New group",()=>vd(e));document.body.appendChild(i),Os=i;let o=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-o.width-4)+"px",i.style.top=Math.min(n,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",pd,!0),0)}function zs(){if(wr)wr.classList.remove("drop-into","drop-before","drop-after");wr=null,Nt=null}function gd(){let e=Dn&&St(Dn);if(!e||p.editObject||qt(e)!==p.context||!p.selection.has(e.id)||p.selection.size<=1)return null;return p.context.children.filter((t)=>p.selection.has(t.id))}function C_(e,t,n){let i=Dn&&St(Dn);if(!i||i===t){zs();return}let s=gd();if(s?s.some((u)=>u===t||un(u,t)):un(i,t)){zs();return}if(zs(),wr=n,t===p.root){Nt={parent:p.root,index:p.root.children.length},n.classList.add("drop-into");return}let a=n.getBoundingClientRect(),o=e.clientY-a.top,l=a.height,c=qt(t),h=c?c.children.indexOf(t):0;if(o>l*0.28&&o<l*0.72&&(t.type==="scene"||!s)){if(t.type==="scene")Nt={parent:t,index:t.children.length};else Nt={wrap:t};n.classList.add("drop-into")}else if(o<l*0.5)Nt={parent:c,index:h},n.classList.add("drop-before");else Nt={parent:c,index:h+1},n.classList.add("drop-after")}function xd(){let e=Dn&&St(Dn);if(e&&Nt){let t=Nt.parent?gd():null;if(t){let n=Nt.parent,i=Nt.index,s=!1;for(let r of t)if(Fs(r,n,i))i=n.children.indexOf(r)+1,s=!0;if(s){p.collapsed.delete(n.id);let r=Xt(n);if(r)p.path=r;p.editObject=null,p.selection=new Set(t.map((a)=>a.id)),Et(),Je(),at()}}else if(Nt.wrap)yd(Nt.wrap,e);else if(Nt.parent&&Fs(e,Nt.parent,Nt.index))p.collapsed.delete(Nt.parent.id),Nn(e),at()}zs(),Dn=null}{let e=document.getElementById("tree");e.addEventListener("dragover",(t)=>{if(t.target===e&&Dn){t.preventDefault(),zs(),Nt={parent:p.root,index:p.root.children.length};let n=[...e.querySelectorAll(".trow")].filter((s)=>s.dataset.id!==Dn),i=n[n.length-1];if(i)i.classList.add("drop-after"),wr=i}}),e.addEventListener("drop",(t)=>{if(t.target===e)t.preventDefault(),xd()})}document.getElementById("side").addEventListener("click",(e)=>{if(e.target.closest(".trow, button, input"))return;if(!p.selection.size)return;let t=new Set(p.selection);p.selection.clear(),$i=null,bi(t),Je()});document.getElementById("side").addEventListener("contextmenu",(e)=>{if(e.target.closest(".trow, button, input"))return;e.preventDefault(),md(p.root,e.clientX,e.clientY)});var Un=()=>{Et(),Je(),at()};function _d(e){e.vis=nu[e.vis],Un()}var kl=()=>[...p.selection].map((e)=>qn(e)).filter((e)=>!!e),Ad=(e,t)=>{let n=Hi();n.pos={x:Math.round(Xe.target.x),y:0,z:Math.round(Xe.target.z)},e.children.push(n),p.collapsed.delete(e.id),Yi(n,t),at(),Bs(n)};function Rd(){Ad(p.context,!0)}function Tr(){if(!p.selection.size)return;p.context.children=p.context.children.filter((e)=>!p.selection.has(e.id)),p.selection.clear(),Un()}function $o(){let e=kl().map(Rn);if(!e.length)return;p.context.children.push(...e),p.selection=new Set(e.map((t)=>t.id)),Un()}function Ar(){let e=kl().map(Rn);if(e.length)Nu(e)}function Cd(){Ar(),Tr()}function Jo(e=p.context){if(Ns()==="vox"){P_(e);return}let t=Do().map(Rn);if(!t.length)return;e.children.push(...t),Pd(e),p.selection=new Set(t.map((n)=>n.id)),Un()}function P_(e){let t=Uo();if(!t.length)return;let n=Hi();n.boxes=t.map((r)=>({...r}));let i=Rs(e),s=je({x:Xe.target.x-i.off.x,y:0,z:Xe.target.z-i.off.z},-i.rot);n.pos={x:Math.round(s.x),y:0,z:Math.round(s.z)},e.children.push(n),Pd(e),p.selection=new Set([n.id]),Un()}function Pd(e){if(p.collapsed.delete(e.id),e!==p.context)p.path=Xt(e)??p.path,p.editObject=null}function Fs(e,t,n){if(e===t||un(e,t))return!1;let i=qt(e);if(!i)return!1;let s=Wn(Rs(i),{off:{...e.pos},rot:e.rot}),r=Wn(el(Rs(t)),s),a=i.children.indexOf(e);if(i.children.splice(a,1),i===t&&a<n)n--;return e.pos={x:Math.round(r.off.x),y:Math.round(r.off.y),z:Math.round(r.off.z)},e.rot=r.rot&3,t.children.splice(Math.max(0,Math.min(n,t.children.length)),0,e),!0}function Ld(e){let t=qt(e);if(!t)return null;let n=t.children.indexOf(e),i=Xn("Group");return i.pos={...e.pos},i.rot=e.rot,t.children.splice(n,1,i),e.pos={x:0,y:0,z:0},e.rot=0,i.children=[e],i}function yd(e,t){if(t===e||un(t,e))return!1;let n=Ld(e);if(!n)return!1;return Fs(t,n,n.children.length),p.collapsed.delete(n.id),p.selection=new Set([n.id]),Un(),!0}function vd(e){let t=Ld(e);if(!t)return;p.collapsed.delete(t.id),Nn(t),at(),Bs(t)}function bd(e){let t=kl();if(t.length<2)return;let n=Xn("Group");n.pos={...e.pos},n.rot=e.rot;let i=p.context.children.indexOf(e);p.context.children.splice(Math.max(0,i),0,n);for(let s of t)Fs(s,n,n.children.length);p.collapsed.delete(n.id),p.selection=new Set([n.id]),Un()}function Md(e){let t=qt(e);if(!t)return;let n=Rn(e);t.children.splice(t.children.indexOf(e)+1,0,n),Nn(n),at()}function Sd(e){let t=qt(e);if(!t)return;if(t.children=t.children.filter((n)=>n!==e),p.selection.delete(e.id),p.editObject===e)p.editObject=null;Un()}function Ed(e){let t=qt(e);if(!t)return;let n=[...e.children],i=t.children.indexOf(e);for(let s of n)Fs(s,t,i),i=t.children.indexOf(s)+1;t.children=t.children.filter((s)=>s!==e),p.selection=new Set(n.map((s)=>s.id)),Un()}function wd(e){Ad(e,!1)}function Td(e){let t=Xn("Group");e.children.push(t),p.collapsed.delete(e.id),Nn(t),at(),Bs(t)}function Hl(e){let t=[...p.selection];if(!t.length)return;let n=e<0?3:1,i=As(),s=el(i),r=(a)=>rn(a,hn(i.off,je(a.pos,i.rot)),i.rot+a.rot&3,ft());for(let a=0;a<Math.abs(e);a++){let o=ft();for(let d of t){let m=r(qn(d));if(m.min.x<o.min.x)o.min.x=m.min.x;if(m.min.z<o.min.z)o.min.z=m.min.z;if(m.max.x>o.max.x)o.max.x=m.max.x;if(m.max.z>o.max.z)o.max.z=m.max.z}let l=(o.min.x+o.max.x)/2,c=(o.min.z+o.max.z)/2,h=je({x:l,y:0,z:c},n),u={rot:n,off:{x:l-h.x,y:0,z:c-h.z}};for(let d of t){let m=qn(d);if(!m)continue;let y=Wn(i,{off:m.pos,rot:m.rot}),x=Wn(s,Wn(u,y));m.pos={x:pi(x.off.x),y:pi(x.off.y),z:pi(x.off.z)},m.rot=x.rot&3}}Et()}function Id(){if(p.selection.size)Hl(1),Je(),at()}function Gl(e){for(let t of p.selection){let n=qn(t);if(n)n.pos.y+=e}if(p.selection.size)Un()}var Ze=(e)=>Math.floor(e/10),ct=wo,ks=(e,t)=>{let n=Hi();return n.name=e,n.boxes=t,n},Wl=(e,t,n,i,s,r)=>({x0:e,y0:t,z0:n,x1:i,y1:s,z1:r});function Rr(){let e=Ze(4465),t=Ze(2985),n=Ze(2700),i=Ze(150),s=ks("Floor",[ot(0,0,0,e,1,t,ct[9])]),r=Ze(800),a=Ze(2100),o=e-Ze(515)-r,l=e-Ze(900)-r,c=[ot(0,1,0,e,n+1,i,ct[5]),ot(0,1,t-i,e,n+1,t,ct[5]),ot(0,1,i,i,n+1,t-i,ct[5]),ot(e-i,1,i,e,n+1,t-i,ct[5])];c=ki(c,Wl(o,1,0,o+r,a+1,i)),c=ki(c,Wl(l,1,t-i,l+r,a+1,t)),c=ki(c,Wl(0,Ze(900),Ze(600),i,Ze(2100),t-Ze(600)));let h=ks("Walls",c);h.vis="deemphasized";let u=Ze(1500),d=Ze(2000),m=ks("Bed",[ot(0,0,0,8,14,8,ct[7]),ot(u-8,0,0,u,14,8,ct[7]),ot(0,0,d-8,8,14,d,ct[7]),ot(u-8,0,d-8,u,14,d,ct[7]),ot(0,14,0,u,20,d,ct[6]),ot(2,20,0,u-2,24,d-Ze(400),ct[10])]);m.pos={x:i+3,y:1,z:t-i-d};let y=Ze(1400),x=Ze(700),f=Ze(740),g=ks("Desk",[ot(0,f-4,0,y,f,x,ct[8]),ot(0,0,0,6,f-4,6,ct[7]),ot(y-6,0,0,y,f-4,6,ct[7]),ot(0,0,x-6,6,f-4,x,ct[7]),ot(y-6,0,x-6,y,f-4,x,ct[7])]),_=Ze(600),v=_-30>>1,A=_>>1,C=ks("Computer",[ot(v,0,0,v+30,2,18,ct[11]),ot(A-2,2,7,A+2,Ze(160),11,ct[11]),ot(0,Ze(160),6,_,Ze(520),9,ct[13])]);C.pos={x:Ze(400),y:f,z:Ze(420)};let T=Xn();T.name="Desk + Computer",T.pos={x:e-i,y:1,z:Ze(900)},T.rot=1,T.children=[g,C];let I=(D)=>ks(D,[ot(-10,0,-10,11,30,11,ct[4]),ot(-2,30,-2,3,54,3,ct[14]),ot(-16,54,-16,17,78,17,ct[14]),ot(-12,78,-12,13,92,13,ct[14])]),z=I("Plant"),b=I("Plant");z.pos={x:e-i-Ze(300),y:1,z:i+Ze(300)},b.pos={x:i+Ze(300),y:1,z:i+Ze(300)};let E=Xn();return E.children=[s,h,m,T,z,b],E}var ql="voxelier-last",Nd="doc";var Vl=()=>{let e=new Uint8Array(8);return crypto.getRandomValues(e),[...e].map((t)=>t.toString(36).padStart(2,"0")).join("")},Dd=()=>new URLSearchParams(location.hash.replace(/^#/,""));function L_(){let e=Dd().get(Nd);return e&&/^[0-9a-z]{4,32}$/.test(e)?e:null}function I_(e){let t=Dd();t.set(Nd,e),history.replaceState(null,"",`#${t.toString()}`)}var N_=(e)=>{try{localStorage.setItem(ql,e)}catch(t){}},Ud=()=>{try{return localStorage.getItem(ql)}catch{return null}},Xl=null;function Kn(e,t,n){return Xl=t?{root:t,uid:n}:null,N_(e),I_(e),Yu(e)}function Cr(e=Rr(),t){return{id:Vl(),root:e,uid:t}}function Od(e){let t=Xl;if(Xl=null,Qu(e),t){if(Al(t.root,t.uid??1),!Sr(e,t.root))throw Error("could not save the new document");return t.root}let n=Ho(e);if(n.kind==="ok")return n.root;if(n.kind==="unreadable")throw Error("this document record cannot be read");let i=Rr();if(!Sr(e,i))throw Error("could not save the new document");return i}function zd(e){let t=L_();if(t)return Ho(t).kind==="unreadable"?{id:Vl(),root:Rr()}:{id:t};let n=Ud();if(n&&Ho(n).kind!=="unreadable")return{id:n};let[i]=Mr();if(i)return{id:i.id};return{id:Vl(),root:e()??Rr()}}async function Fd(e){return await $u(e,()=>{if(!Zu(e))return!1;if(Ud()===e)try{localStorage.removeItem(ql)}catch{}return!0})===!0}var Bd=()=>Us();var jo=(e)=>Math.abs(e.clientX-p.drag.sx)+Math.abs(e.clientY-p.drag.sy)>3,Qn=document.createElement("div");Qn.id="toolcursor";Qn.style.display="none";document.body.appendChild(Qn);function D_(e){if(p.tool==="view"){Qn.style.display="none";return}Qn.textContent=Ko[p.tool],Qn.style.left=e.clientX+"px",Qn.style.top=e.clientY+"px",Qn.style.display="block"}function U_(){if(p.tool!=="measure"||p.painting)return;if(p.drag&&p.drag.mode==="box")return;Ro()}function Yl(e){let t=Math.abs($e.matrixWorldInverse.elements[5]);return yl(e)/Math.max(t,0.15)}function O_(e){let t=p.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let n=e.clientX-t.x,i=e.clientY-t.y;return t.x=e.clientX,t.y=e.clientY,(t.mode==="pan"?Au:Ru)(n,i),!0}function z_(){let e=[],t=[];Ln(p.root,{x:0,y:0,z:0},0,null,null,(s,r,a,o)=>{let l=o&&p.selection.has(o)?t:e;for(let c of s.boxes)l.push(Jt(c,a,r))});let n=1/0,i=-1/0;for(let s of t){if(s.y0<n)n=s.y0;if(s.y1>i)i=s.y1}return{occ:e,sel:t,minY:n,hgt:t.length?i-n:0}}var F_=(e,t,n,i)=>{if(cr(e.sel??[],e.occ??[],t,n,i))return!0;let s=e.minY??1/0;return s+n<Math.min(0,s)};function B_(e){let t=p.drag,n=(i,s,r)=>e.altKey||!F_(t,i,s,r);if(e.shiftKey){if(t.shiftAnchorY==null)t.shiftAnchorY=e.clientY,t.dyBase=t.dyUser??0;let i=t.start&&{x:t.start.x,y:t.minY??0,z:t.start.z},s=t.dyBase+Math.round((t.shiftAnchorY-e.clientY)*Yl(i??Xe.target));if(n(t.dx,s,t.dz))t.dyUser=s,t.dy=s}else{t.shiftAnchorY=null;let{dx:i,dz:s}=t,r=dr(t.minY??0);if(r&&t.start)i=r.x-t.start.x,s=r.z-t.start.z;let a=t.dyUser??0,o=Math.floor(0.1*(t.hgt??0)),l=!1;for(let c=0;c<=o;c++)if(n(i,a+c,s)){t.dx=i,t.dz=s,t.dy=a+c,l=!0;break}if(!l){if(n(i,a,t.dz))t.dx=i;if(n(t.dx,a,s))t.dz=s;t.dy=a}}for(let i of p.selection)for(let s of p.childMeshes[i]||[])s.position.set(t.dx,t.dy,t.dz),s.castShadow=!1;Gn.position.set(t.dx,t.dy,t.dz)}function k_(e){let t=p.drag,n=As(),i=je({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-n.rot),s=Math.round(t.dy);if(e){let r=[];for(let a of p.selection){let o=qn(a);if(!o)continue;let l=Rn(o);l.pos={x:o.pos.x+i.x,y:o.pos.y+s,z:o.pos.z+i.z},r.push(l)}p.context.children.push(...r),p.selection=new Set(r.map((a)=>a.id))}else for(let r of p.selection){let a=qn(r);if(a)a.pos.x+=i.x,a.pos.y+=s,a.pos.z+=i.z}Gn.position.set(0,0,0),Et(),Je(),at()}function H_(e){let t=p.drag,n=Math.round((t.sx-e.clientX)/70);if(n!==t.steps)Hl(n-t.steps),t.steps=n,t.dirty=!0}function G_(){let e=Mu();if(e==null)return;if(p.eyedropReturn!=null)p.tool=p.eyedropReturn,p.eyedropReturn=null;jl(e)}function Hd(e){let t=Wi(),n=al(t);if(!n)return;let i=Bi(n.x,n.y,n.z);if(i!==p.lastVox){if(e)_l({x0:n.x,y0:n.y,z0:n.z,x1:n.x+1,y1:n.y+1,z1:n.z+1},p.selColor),Zo(p.selColor);else if(bu(n,p.selColor))Zo(p.selColor);p.lastVox=i}Gd(t)}function Gd(e=Wi()){let t=al(e);if(!t){sn.visible=!1;return}let n=Cn(t.x+0.5,t.y+0.5,t.z+0.5);sn.visible=!0,sn.material.color.set(p.tool==="erase"?11895693:10994876),sn.position.copy(n)}var $l=(e)=>e===0?[1,2]:e===1?[0,2]:[0,1];function Wd(e,t,n,i){let[s,r]=$l(e.na),a=[0,0,0],o=[0,0,0],l=(c,h,u)=>{a[c]=Math.min(h,u),o[c]=Math.max(h,u)};return l(e.na,e.s[e.na],e.s[e.na]+i),l(s,e.s[s],t),l(r,e.s[r],n),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var Jl=(e)=>{let[t,n]=$l(e.na);return Wd(e,e.c[t],e.c[n],e.hy)};function kd(e){let t=Wi(),n,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,n=p.tool==="add"?t.addCell:t.cell;else{let s=Vi(0);if(!s)return;n=s,i=1}p.drag={...e,mode:"box",shiftAnchorY:null,box:{s:[n.x,n.y,n.z],c:[n.x,n.y,n.z],na:i,hy:0},occ:p.tool==="add"?p.editObject.boxes.slice():void 0},sn.visible=!1,Vd()}function W_(e){let t=p.drag,n=t.box,[i,s]=$l(n.na),r=p.tool==="add"&&!e.altKey,a=(o,l,c)=>!r||!cr([Wd(n,o,l,c)],t.occ??[],0,0,0);if(e.shiftKey){if(t.shiftAnchorY===null)t.shiftAnchorX=e.clientX,t.shiftAnchorY=e.clientY,t.hyBase=n.hy;let o=Cn(n.s[0],n.s[1],n.s[2]),l=n.s.slice();l[n.na]+=1;let c=Cn(l[0],l[1],l[2]),h=c.x-o.x,u=c.y-o.y,d=c.z-o.z,m=$e.matrixWorld.elements,y=h*m[0]+u*m[1]+d*m[2],x=h*m[4]+u*m[5]+d*m[6],f=y*y+x*x,g=1/yl(o),_=y*g,v=-x*g,A=e.clientX-t.shiftAnchorX,C=e.clientY-t.shiftAnchorY,T=t.hyBase+(f>0.02?Math.round((A*_+C*v)/(_*_+v*v)):Math.round((t.shiftAnchorY-e.clientY)*Yl(o)));if(a(n.c[i],n.c[s],T))n.hy=T}else{t.shiftAnchorY=null;let o=uu(n.na,n.s[n.na]);if(o){let l=[o.x,o.y,o.z];if(a(l[i],n.c[s],n.hy))n.c[i]=l[i];if(a(n.c[i],l[s],n.hy))n.c[s]=l[s]}}Vd()}function V_(){let e=Jl(p.drag.box);if(p.tool==="add")_l(e,p.selColor),Zo(p.selColor);else pr(e);p.liveMeas=null,gi(),Je(),at()}function Vd(){let e=Jl(p.drag.box);p.liveMeas=hl(e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,Cn,2),gi()}function X_(e){let t=p.sel3d.region.y0;p.drag={...e,mode:"selmove",start:Vi(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function q_(e){p.drag={...e,mode:"selrot",steps:0}}function Y_(e){let t=p.drag,{dx:n,dy:i,dz:s}=t;if(e.shiftKey){if(t.shiftAnchorY==null)t.shiftAnchorY=e.clientY,t.dyBase=i;i=t.dyBase+Math.round((t.shiftAnchorY-e.clientY)*Yl(Cn(t.start.x,t.start.y,t.start.z)))}else{t.shiftAnchorY=null;let r=Vi(t.start.y);if(r)n=r.x-t.start.x,s=r.z-t.start.z}if(n!==t.dx||i!==t.dy||s!==t.dz){if(!p.sel3d.lifted)Rl();ad(n-t.dx,i-t.dy,s-t.dz),t.dx=n,t.dy=i,t.dz=s}}function $_(e){let t=p.drag,n=e.altKey;if(n!==!!t.fine){if(t.fine=n,p.sel3d.lifted)Il(),t.sx=e.clientX,t.steps=0,t.deg=0}let i=()=>{if(!p.sel3d.lifted)Rl(),Il()};if(n){let s=Math.round((t.sx-e.clientX)/25)*15;if(s===(t.deg??0))return;i(),t.deg=s,hd(s,e.shiftKey)}else{let s=Math.round((t.sx-e.clientX)/70);if(s===t.steps)return;i(),t.steps=s,cd(s,e.shiftKey)}}function J_(e){if(p.liveMeas=null,gi(),e)sd(Jl(p.drag.box));Je()}var Pr=null;Lt.addEventListener("pointerdown",(e)=>{if(p.drag||p.painting)return;Lt.setPointerCapture(e.pointerId),Pr=e.pointerId,To(e.clientX,e.clientY);let t={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};if(e.button===1){p.drag={...t,mode:"pan"};return}if(p.editObject){if(e.button===0)if(p.tool==="view"||p.tool==="measure")p.drag={...t,mode:"pan"};else if(p.tool==="select")if(p.sel3d&&Nl())X_(t);else Zn(),kd(t);else if(p.tool==="add"||p.tool==="erase")kd(t);else if(p.tool==="eyedropper")G_();else p.painting=!0,p.lastVox=null,Hd(e.shiftKey);else if(e.button===2)if(p.tool==="select"&&p.sel3d&&Nl())q_(t);else p.drag={...t,mode:"orbit"};return}let n=ol(),i=n&&p.selection.has(n);if(e.button===0)if(p.tool==="measure")p.drag={...t,mode:"pan"};else if(i){let s=z_();p.drag={...t,mode:"move",start:dr(s.minY),dx:0,dy:0,dz:0,shiftAnchorY:null,...s}}else p.drag={...t,mode:"pan",clickId:n};else if(e.button===2)if(i&&p.tool!=="measure")p.drag={...t,mode:"rotobj",steps:0};else p.drag={...t,mode:"orbit"}});Lt.addEventListener("pointermove",(e)=>{if(To(e.clientX,e.clientY),p.editObject&&p.painting)Hd(e.shiftKey);else if(!p.drag)if(p.editObject&&p.tool!=="select"&&p.tool!=="view"&&p.tool!=="measure")Gd();else sn.visible=!1;else if(!O_(e)){if(p.drag.mode==="move")B_(e);else if(p.drag.mode==="rotobj")H_(e);else if(p.drag.mode==="box")W_(e);else if(p.drag.mode==="selmove")Y_(e);else if(p.drag.mode==="selrot")$_(e)}U_(),D_(e)});Lt.addEventListener("pointerup",(e)=>{Pr=null;try{Lt.releasePointerCapture(e.pointerId)}catch(t){}if(p.tool==="measure"&&p.drag&&!jo(e)){if(e.button===0){fu(),p.drag=null;return}if(e.button===2){pu(),p.drag=null;return}}if(p.editObject){if(p.painting)p.painting=!1,Je(),at();else if(p.drag&&p.drag.mode==="box")if(p.tool==="select")J_(jo(e));else V_();else if(p.drag&&(p.drag.mode==="selmove"||p.drag.mode==="selrot"))Cl();p.drag=null;return}if(p.drag){if(p.drag.mode==="pan"&&!jo(e)&&e.button===0){let t=p.drag.clickId,n=e.shiftKey||e.ctrlKey||e.metaKey,i=new Set(p.selection);if(t){if(n)p.selection.has(t)?p.selection.delete(t):p.selection.add(t);else p.selection=new Set([t]);Fl(t)}else if(!n)p.selection.clear(),Fl(null);bi(i),Je()}else if(p.drag.mode==="move")k_(jo(e)&&(e.ctrlKey||e.metaKey));else if(p.drag.mode==="rotobj"){if(p.drag.dirty)Je(),at()}}p.drag=null});function Xd(){if(Pr!==null){try{Lt.releasePointerCapture(Pr)}catch(t){}Pr=null}if(!p.drag&&!p.painting)return;let e=p.painting;if(p.drag&&(p.drag.mode==="selmove"||p.drag.mode==="selrot"))Cl();if(p.drag=null,p.painting=!1,p.liveMeas=null,gi(),Et(),e)Je(),at()}Lt.addEventListener("pointercancel",Xd);function ei(){document.activeElement?.blur(),Xd()}Lt.addEventListener("pointerleave",()=>{if(sn.visible=!1,Qn.style.display="none",p.tool==="measure"&&!p.drag&&!p.painting&&p.liveMeas)p.liveMeas=null,gi()});Lt.addEventListener("contextmenu",(e)=>e.preventDefault());Lt.addEventListener("wheel",(e)=>{e.preventDefault(),Xe.zoom*=e.deltaY>0?1.0526315789473684:0.95,Xe.zoom=Math.max(6,Math.min(bo,Xe.zoom))},{passive:!1});Lt.addEventListener("dblclick",(e)=>{if(p.editObject)return;To(e.clientX,e.clientY);let t=ol();if(!t)return;Yi(qn(t),!0)});function Zl(){return JSON.stringify({uid:ws(),root:yn(p.root),collapsed:[...p.collapsed]})}function Lr(e,t){let n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(n),1e4)}function qd(){let e=p.root.name||"Project",t=(s)=>String(s).padStart(2,"0"),n=new Date,i=`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}h${t(n.getMinutes())}m${t(n.getSeconds())}s`;Lr(new Blob([Zl()],{type:"application/json"}),`${e} -- ${i}.voxelier.json`)}async function Kl(e){let t=JSON.parse(e),n=Wo(t,!1);if(!n)throw Error("not a Voxelier scene file");if(ei(),!wt())throw Error("could not save the current document");let i=Cr(n,t.uid);if(!await Kn(i.id,i.root,i.uid))throw Error("could not take the edit lock for the imported document")}function Yd(){let e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.onchange=()=>{let t=e.files&&e.files[0];if(!t)return;let n=new FileReader;n.onload=async()=>{try{await Kl(n.result)}catch(i){alert("Import failed: "+i.message)}},n.readAsText(t)},e.click()}var Ko={view:"\uD83D\uDC41",add:"＋",erase:"－",paint:"\uD83E\uDEA3",eyedropper:"\uD83D\uDCA7",select:"⬚",measure:"\uD83D\uDCCF"},j_=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],$d=(e,t,n,i)=>st("button",{className:"tool"+(n?" active":""),innerHTML:`<span class="ic">${e}</span>${t}`,onclick:i});function Jd(e){if(p.tool===e)return;Zn(),p.tool=e,p.eyedropReturn=null,sn.visible=!1,Yn(),Je()}function Je(){let e=document.getElementById("tools");if(e.innerHTML="",!p.editObject&&p.tool!=="measure")p.tool="view";let t=st("div",{className:"toolgroup"}),n=p.editObject?j_:[{id:"view",label:"View"}];for(let i of n)t.appendChild($d(Ko[i.id],i.label,p.tool===i.id,()=>Jd(i.id)));if(t.appendChild($d(Ko.measure,"Measure",p.tool==="measure",()=>Jd("measure"))),p.editObject)t.appendChild(ry());if(e.append(t),Ql(),p.tool==="view"){let i=document.getElementById("toolcursor");if(i)i.style.display="none"}Bl()}document.getElementById("btn-save").onclick=qd;document.getElementById("btn-load").onclick=Yd;var Z_=document.getElementById("btn-docs"),Nr=document.getElementById("docslist"),K_=document.getElementById("docname");function Ql(){K_.textContent=p.root?p.root.name||"Project":"Project"}function ea(){let e=Bd(),t=Mr();Nr.innerHTML="";for(let n of t){let i=st("div",{className:"docrow"+(n.id===e?" here":"")});i.append(st("button",{className:"docopen",textContent:n.name||"Project",title:new Date(n.updated).toLocaleString(),onclick:()=>{if(n.id===e)return;if(ei(),!wt())return;Kn(n.id),ea()}})),i.append(st("button",{className:"docdel",textContent:"✕",title:"Delete this document",onclick:async()=>{if(!confirm(`Delete "${n.name||"Project"}"? This cannot be undone.`))return;if(n.id===e){if(ei(),!wt())return}if(!await Fd(n.id)){alert("Editing in another tab — cannot delete this document");return}if(n.id===e){let[s]=Mr();if(s)Kn(s.id);else{let r=Cr();Kn(r.id,r.root)}Ql()}ea()}})),Nr.append(i)}Nr.append(st("button",{className:"docnew",textContent:"＋ New document",onclick:()=>{if(ei(),!wt())return;let n=Cr();Kn(n.id,n.root),Ql(),ea()}}))}Z_.onclick=()=>{let e=Nr.hasAttribute("hidden");if(Nr.hidden=!e,e)ea()};var Qo={ver:-1,cols:[]};function Q_(){if(Qo.ver===p.voxVer)return Qo.cols;let e=new Map;return function t(n){if(n.type==="object")jh(n.boxes,e);else n.children.forEach(t)}(p.root),Qo={ver:p.voxVer,cols:[...e.entries()].sort((t,n)=>n[1]-t[1]).map((t)=>t[0])},Qo.cols}var ec=[];function Zo(e){ec=[e,...ec.filter((t)=>t!==e)].slice(0,6)}function jl(e){p.selColor=e,Je()}function ey(){let e=[];for(let t of[...ec,...Q_(),...wo]){if(!e.includes(t))e.push(t);if(e.length>=6)break}return e}var ty=(e)=>{let t=st("div",{className:"sw"+(e===p.selColor?" active":""),title:Vn(e),onclick:()=>jl(e)});return t.style.background=Vn(e),t};function ny(){if(p.tool!=="eyedropper")p.eyedropReturn=p.tool,Zn(),p.tool="eyedropper",Je()}function iy(e){let t=(e>>16&255)/255,n=(e>>8&255)/255,i=(e&255)/255,s=Math.max(t,n,i),r=Math.min(t,n,i),a=s-r,o=0;if(a){if(s===t)o=(n-i)/a%6;else if(s===n)o=(i-t)/a+2;else o=(t-n)/a+4;o=(o*60+360)%360}return[Math.round(o),Math.round((s?a/s:0)*100),Math.round(s*100)]}function Ir(e,t,n){t/=100,n/=100;let i=n*t,s=i*(1-Math.abs(e/60%2-1)),r=n-i,[a,o,l]=e<60?[i,s,0]:e<120?[s,i,0]:e<180?[0,i,s]:e<240?[0,s,i]:e<300?[s,0,i]:[i,0,s],c=(h)=>Math.round((h+r)*255);return c(a)<<16|c(o)<<8|c(l)}var sy=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function ry(){let e=st("div",{className:"colorctl"}),t=st("div",{className:"colorbtn",title:"Draw colour — hover for recent colours / sliders"});t.style.background=Vn(p.selColor);let n=st("div",{className:"colorflyout"}),i=st("div",{className:"sliders"}),s={},[r,a,o]=iy(p.selColor),l={h:r,s:a,v:o},c=()=>{s.s.style.background=`linear-gradient(to right,${Vn(Ir(l.h,0,l.v))},${Vn(Ir(l.h,100,l.v))})`,s.v.style.background=`linear-gradient(to right,${Vn(Ir(l.h,l.s,0))},${Vn(Ir(l.h,l.s,100))})`},h=()=>{l.h=+s.h.value,l.s=+s.s.value,l.v=+s.v.value,p.selColor=Ir(l.h,l.s,l.v),t.style.background=Vn(p.selColor),c()};for(let m of sy){let y=st("div",{className:"sliderline"}),x=st("input",{type:"range",className:"csl",title:m.title});x.min="0",x.max=String(m.max),x.value=String(l[m.key]),s[m.key]=x,x.addEventListener("input",h),y.append(st("span",{className:"lbl",textContent:m.label,title:m.title}),x),i.appendChild(y)}s.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",c();let u=st("div",{className:"sliderrow"});u.append(i,st("div",{className:"sw more",textContent:"\uD83D\uDCA7",title:"Pick a colour from a voxel (eyedropper)",onclick:ny}));let d=st("div",{className:"swrow"});for(let m of ey())d.appendChild(ty(m));return n.append(u,d),e.append(t,n),e}{let e=document.getElementById("app"),t=(n)=>{e.classList.toggle("side-hidden",n),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",(e)=>{if(!ko())return;if(e.target.tagName==="INPUT")return;if(p.drag||p.painting)return;let t=e.key.toLowerCase();if(e.ctrlKey||e.metaKey){if(t==="z"){if(e.preventDefault(),e.shiftKey)gr();else zo();return}if(t==="y"){e.preventDefault(),gr();return}if(p.editObject){if(t==="c")Ll(),e.preventDefault();else if(t==="x")rd(),e.preventDefault();else if(t==="v")oy(),e.preventDefault();return}let i={c:Ar,x:Cd,v:Jo,d:$o}[t];if(i)i(),e.preventDefault();return}switch(t){case"f":$n();break;case"escape":dd();break;case"n":if(!p.editObject)Rd();break;case"r":if(!p.editObject)Id();break;case"[":if(!p.editObject)Gl(-1);break;case"]":if(!p.editObject)Gl(1);break;case"delete":case"backspace":if(e.preventDefault(),p.editObject)Pl();else Tr();break}});function oy(){let e=[];if(Ns()==="node")for(let t of Do())ur(t,t.pos,t.rot,e);else e.push(...Uo());if(!e.length)return;p.tool="select",od(e),Je()}var Zd=["x","y","z"],Kd={x:0,y:0,z:0},Qd=(e)=>`x${e.min.x}..${e.max.x} y${e.min.y}..${e.max.y} z${e.min.z}..${e.max.z}`,ay=(e)=>`(${e.max.x-e.min.x}x${e.max.y-e.min.y}x${e.max.z-e.min.z})`,ly=(e)=>e==="visible"?"":` [${e}]`,tc=(e)=>`${e.id} ${e.type==="scene"?"S":"O"} "${e.name}"${ly(e.vis)}`,Hs=(e,t)=>{let n=Xt(t,e),i=n?Ss(n):{off:Kd,rot:0},s=rn(t,i.off,i.rot,ft());return jt(s)?null:s},nc=(e)=>{let t=e?St(e):p.root;if(!t)throw Error(`unknown node id: ${e}`);return Hs(p.root,t)},ta=(e)=>{let t=[],n=(s,r,a,o=!1)=>{if(!o&&s.vis==="hidden")return;let l=hn(r,je(s.pos,a)),c=a+s.rot&3;if(s.type==="object")for(let h of s.boxes)t.push(Jt(h,c,l));else for(let h of s.children)n(h,l,c)},i=Ss(Xt(e,p.root).slice(0,-1));return n(e,i.off,i.rot,!0),t},cy=(e,t)=>!t||jt(t)?`${tc(e)} [empty]`:`${tc(e)} ${Qd(t)} ${ay(t)}${e.rot?` rot${e.rot*90}`:""}`;function ef(e,{depth:t=2,hidden:n=!1}={}){let i=e?St(e):p.root;if(!i)throw Error(`unknown node id: ${e}`);let s=[],r=(a,o)=>{let l=a.vis==="hidden"&&!n,c=l&&a.type==="scene"&&a.children.length?` (${a.children.length} children)`:"";if(s.push("  ".repeat(o)+(l?tc(a)+c:cy(a,Hs(p.root,a)))),l||a.type==="object"||o>=t)return;for(let h of a.children)r(h,o+1)};return r(i,0),s.join(`
`)}function hy(e,t){let n=null,i=null;for(let r of e)for(let a of t){let o=[r.x0<a.x1&&a.x0<r.x1,r.y0<a.y1&&a.y0<r.y1,r.z0<a.z1&&a.z0<r.z1],l=[Math.max(r.x0-a.x1,a.x0-r.x1,0),Math.max(r.y0-a.y1,a.y0-r.y1,0),Math.max(r.z0-a.z1,a.z0-r.z1,0)];if(o[0]&&o[1]&&o[2]){let c=[Math.min(r.x1,a.x1)-Math.max(r.x0,a.x0),Math.min(r.y1,a.y1)-Math.max(r.y0,a.y0),Math.min(r.z1,a.z1)-Math.max(r.z0,a.z0)],h=c[0]*c[1]*c[2];if(!n||h>n.v)n={v:h,d:c}}else{let c=Math.max(...l);if(!i||c<i.m)i={m:c,g:l}}}if(n)return{kind:"overlap",max:0,text:`overlap ${n.d.join("x")}`};if(!i)return null;let s=i.g.map((r,a)=>r?`${Zd[a]} gap ${r}`:"").filter(Boolean);return{kind:"gap",max:i.m,text:s.length?s.join(" "):"touch"}}var tf=()=>p.root.children.flatMap((e)=>e.vis==="hidden"?[]:e.type==="scene"&&e.name==="Immutable"?e.children.filter((t)=>t.vis!=="hidden"):[e]),nf=(e)=>(Xt(e)??[]).every((t)=>t.vis!=="hidden")?ta(e):[];function sf(e,{within:t=60}={}){let n=tf().map((o)=>({n:o,boxes:nf(o)})).filter((o)=>o.boxes.length),i=e===void 0?n:(typeof e==="string"?[e]:e).map((o)=>{let l=St(o);if(!l)throw Error(`unknown node id: ${o}`);return{n:l,boxes:ta(l)}}).filter((o)=>o.boxes.length),s=[],r=new Set,a=(o,l)=>{if(un(o.n,l.n)||un(l.n,o.n))return;let c=o.n.id<l.n.id?`${o.n.id}|${l.n.id}`:`${l.n.id}|${o.n.id}`;if(r.has(c))return;r.add(c);let h=hy(o.boxes,l.boxes);if(!h||h.kind==="gap"&&h.max>t)return;s.push(`${o.n.id} "${o.n.name}" ${h.kind==="overlap"?"~":"|"} ${l.n.id} "${l.n.name}": ${h.text}`)};if(e===void 0)for(let[o,l]of n.entries())for(let c of n.slice(o+1))a(l,c);else for(let o of i)for(let l of n)a(o,l);return s.join(`
`)}function rf(e,t){let n=St(e);if(!n)throw Error(`unknown node id: ${e}`);let i=t[0]==="+"?1:t[0]==="-"?-1:0,s=Zd.indexOf(t.slice(1));if(!i||s<0)throw Error(`bad dir "${t}": use +x, -x, +y, -y, +z or -z`);let r=ta(n);if(!r.length)throw Error(`object ${e} has no visible geometry`);let a=(m,y)=>y===0?m.x0:y===1?m.y0:m.z0,o=(m,y)=>y===0?m.x1:y===1?m.y1:m.z1,l=[0,1,2].map((m)=>Math.min(...r.map((y)=>a(y,m)))),c=[0,1,2].map((m)=>Math.max(...r.map((y)=>o(y,m)))),h=i>0?c[s]:l[s],u=[0,1,2].filter((m)=>m!==s),d=null;for(let m of tf()){if(un(m,n)||un(n,m))continue;for(let y of nf(m)){if(i>0?o(y,s)<=h:a(y,s)>=h)continue;if(!u.every((f)=>a(y,f)<c[f]&&l[f]<o(y,f)))continue;let x=Math.max(0,i>0?a(y,s)-h:h-o(y,s));if(!d||x<d.distance)d={id:m.id,name:m.name,distance:x}}}return d}function na(e){let t=JSON.parse(e),n=Jn(t.root??t),i=[],s=(l)=>l?Qd(l):"empty",r=(l,c)=>{let h=Xt(c,l);return h?.[h.length-2]?.id},a=(l)=>{let c=St(l.id,n);if(!c){i.push(`+ ${l.id} "${l.name}": added ${s(Hs(p.root,l))}`);return}let h=Hs(n,c),u=Hs(p.root,l),d=r(n,c),m=r(p.root,l),y=l.type==="object"&&c.type==="object"&&JSON.stringify(l.boxes)!==JSON.stringify(c.boxes);if(s(h)===s(u)&&d===m&&!y&&l.vis===c.vis&&l.rot===c.rot){if(l.type==="scene")for(let f of l.children)a(f);return}let x=[`${s(h)} → ${s(u)}`];if(d!==m)x.push(`reparented ${d??"-"}→${m??"-"}`);if(y&&l.type==="object"&&c.type==="object")x.push(`geometry changed (${c.boxes.length}→${l.boxes.length} boxes)`);if(l.vis!==c.vis)x.push(`vis ${c.vis}→${l.vis}`);if(l.rot!==c.rot)x.push(`rot ${c.rot*90}→${l.rot*90}`);if(i.push(`~ ${l.id} "${l.name}": ${x.join("; ")}`),l.type==="scene")for(let f of l.children)a(f)};a(p.root);let o=(l)=>{if(!St(l.id,p.root)){i.push(`- ${l.id} "${l.name}": removed ${s(Hs(n,l))}`);return}if(l.type==="scene")for(let c of l.children)o(c)};return o(n),i.join(`
`)}var uy=new Set(["top","front","side","iso"]);function dy(e,t){let n=new N((t.min.x+t.max.x)/2,(t.min.y+t.max.y)/2,(t.min.z+t.max.z)/2),i=Math.max(1,t.max.x-t.min.x),s=Math.max(1,t.max.y-t.min.y),r=Math.max(1,t.max.z-t.min.z),a=[i,s,r],o=Math.hypot(i,s,r),l=o*2+100;if(e==="iso"){let y=o/2,x=y/Math.sin(fo.degToRad(17.5))*1.08,f=Math.atan(1/Math.SQRT2),g=Ue.azim,_=new zt(35,1,x-y*3,x+y*3);return _.position.copy(n).add(new N(Math.cos(f)*Math.sin(g),Math.sin(f),Math.cos(f)*Math.cos(g)).multiplyScalar(x)),_.lookAt(n),{camera:_,half:0}}let c=e==="top"?[0,2]:e==="front"?[0,1]:[2,1],h=Math.max(a[c[0]],a[c[1]])/2*1.12+2,u=e==="top"?[0,1,0]:e==="front"?[0,0,1]:[1,0,0],d=new Qs(-h,h,h,-h,0.1,l+o*2);if(d.position.copy(n).add(new N(u[0],u[1],u[2]).normalize().multiplyScalar(l)),e==="top")d.up.set(0,0,-1);return d.lookAt(n),{camera:d,half:h}}function fy(e,t,n,i){let s=t/(2*i),r=t/2,a=(n.min.x+n.max.x)/2,o=(n.min.z+n.max.z)/2;e.strokeStyle="rgba(0,0,0,0.14)",e.lineWidth=1;for(let l=Math.ceil((a-i)/50)*50;l<=a+i;l+=50){let c=r+(l-a)*s;e.beginPath(),e.moveTo(c,0),e.lineTo(c,t),e.stroke()}for(let l=Math.ceil((o-i)/50)*50;l<=o+i;l+=50){let c=r+(l-o)*s;e.beginPath(),e.moveTo(0,c),e.lineTo(t,c),e.stroke()}e.strokeStyle="#111",e.lineWidth=2,e.beginPath(),e.moveTo(18,t-20),e.lineTo(18+100*s,t-20),e.stroke(),e.font="12px ui-monospace, monospace",e.fillStyle="#111",e.fillText("1 m",18,t-26)}function py(e,t,n,i,s){e.font="bold 11px ui-monospace, monospace",e.textAlign="center",e.textBaseline="middle";for(let{label:r,b:a}of i){if((a.max.x-a.min.x)*(a.max.z-a.min.z)>=s)continue;let o=new N((a.min.x+a.max.x)/2,(a.min.y+a.max.y)/2,(a.min.z+a.max.z)/2).project(t),l=(o.x*0.5+0.5)*n,c=(1-(o.y*0.5+0.5))*n;if(l<0||c<0||l>n||c>n)continue;e.lineWidth=3,e.strokeStyle="#fff",e.strokeText(r,l,c),e.fillStyle="#111",e.fillText(r,l,c)}}var jd={png:1,webp:0.8,jpeg:0.8};async function of(e,t={}){let n=t.format??"webp";if(!Object.hasOwn(jd,n))throw Error(`unknown format "${n}": use png, webp or jpeg`);let i=`image/${n}`,s=jd[n];if(!uy.has(e))throw Error(`unknown view "${e}": use top, front, side or iso`);let r=t.size??900;if(!Number.isFinite(r)||r<=0)throw Error("size must be a positive finite number");if(t.cutY!==void 0&&!Number.isFinite(t.cutY))throw Error("cutY must be finite");let a=Math.max(64,Math.min(2048,Math.round(r))),o=t.focus===void 0?[]:typeof t.focus==="string"?[t.focus]:t.focus,l=p.sceneBox&&!jt(p.sceneBox)?p.sceneBox:{min:{x:-20,y:0,z:-20},max:{x:20,y:40,z:20}},c=ft();if(o.length){for(let b of o){let E=nc(b);if(!E)continue;c.min.x=Math.min(c.min.x,E.min.x),c.min.y=Math.min(c.min.y,E.min.y),c.min.z=Math.min(c.min.z,E.min.z),c.max.x=Math.max(c.max.x,E.max.x),c.max.y=Math.max(c.max.y,E.max.y),c.max.z=Math.max(c.max.z,E.max.z)}if(jt(c))throw Error(`focus has no geometry: ${o}`)}else Object.assign(c,l);let{camera:h,half:u}=dy(e,c),d=new Set,m=(b)=>{if(d.add(b.id),b.type==="scene")for(let E of b.children)m(E)};for(let b of o)m(St(b));let y=t.isolate&&o.length>0,x=[],f=[],g=(b,E)=>{if(!jt(E))x.push({label:b.name||b.id,b:E}),f.push(...ta(b))};if(Ln(p.root,Kd,0,null,null,(b,E,D,q,J)=>{if(!J&&(!y||d.has(b.id)))g(b,rn(b,E,D,ft()))}),p.editObject&&p.editObject.vis==="visible"&&(!y||d.has(p.editObject.id)))g(p.editObject,rn(p.editObject,p.editXform.off,p.editXform.rot,ft()));let _=new er;_.background=new Pe(16777215),_.add(new nr(16777215,0.62));let v=new Ui(16777215,0.78);v.position.set(40,150,30),_.add(v);let A=new Ui(16777215,0.16);A.position.set(-6,5,-7),_.add(A);let C=Ts(f,di,!0);if(C)_.add(new _t(C,sr));let T=dt.getSize(new Ve),I=dt.clippingPlanes,z=dt.shadowMap.enabled;try{dt.shadowMap.enabled=!1;let b=t.cutY??(e==="top"?150:void 0);dt.clippingPlanes=b===void 0?[]:[new Ct(new N(0,-1,0),b)],dt.setSize(a,a,!1),dt.render(_,h);let E=document.createElement("canvas");E.width=E.height=a;let D=E.getContext("2d");if(D.drawImage(dt.domElement,0,0,a,a),e==="top"&&t.grid!==!1)fy(D,a,c,u);if(t.labels!==!1){let q=(l.max.x-l.min.x)*(l.max.z-l.min.z);py(D,h,a,x,q*0.25)}if(t.save){let q=await new Promise((J)=>E.toBlob(J,i,s));if(!q)throw Error("could not encode the render");return Lr(q,t.save),`saved ${a}px ${n} ${Math.round(q.size/1024)} kB to "${t.save}"`}return E.toDataURL(i,s)}finally{C?.dispose(),dt.setSize(T.x,T.y,!1),dt.clippingPlanes=I,dt.shadowMap.enabled=z,dt.render(mt,$e),nn()}}var sc=()=>{if(!ko())throw Error("document is open for editing in another tab")};function my(e){let t=new Set,n=(i)=>{if(!i.id)return"node without an id";if(t.has(i.id))return`duplicate node id ${i.id}`;if(t.add(i.id),!i.pos||![i.pos.x,i.pos.y,i.pos.z].every(Number.isInteger))return`node ${i.id} has a non-integer or non-finite position`;if(i.type==="scene"){for(let r of i.children){let a=n(r);if(a)return a}return null}let s=`object ${i.id}${i.name?` "${i.name}"`:""}`;for(let r=0;r<i.boxes.length;r++){let a=i.boxes[r];if(![a.x0,a.y0,a.z0,a.x1,a.y1,a.z1].every(Number.isInteger))return`box ${r} of ${s} has a non-integer or non-finite coordinate`;if(a.x1<=a.x0||a.y1<=a.y0||a.z1<=a.z0)return`box ${r} of ${s} is empty or inverted`;for(let o=r+1;o<i.boxes.length;o++)if(cr([a],[i.boxes[o]],0,0,0))return`boxes ${r} and ${o} of ${s} overlap`}return null};return n(e)}function gy(e){p.root=Jn(JSON.parse(e)),p.path=[p.root],p.editObject=null,p.sel3d=null,p.selection.clear(),p.drag=null,p.painting=!1,p.lastVox=null,Yn(),Et(),Je()}function xy(){let e=p.path.map((n)=>n.id);p.path=[p.root];for(let n of e.slice(1)){let i=p.context.children.find((s)=>s.id===n);if(!i||i.type!=="scene")break;p.path.push(i)}let t=p.editObject&&p.context.children.find((n)=>n.id===p.editObject.id);if(p.editObject=t&&t.type==="object"?t:null,p.sel3d)if(p.editObject)p.sel3d.boxes=lr(p.editObject.boxes,p.sel3d.region);else p.sel3d=null;p.selection=new Set([...p.selection].filter((n)=>p.context.children.some((i)=>i.id===n)))}var ic=!1;function rc(e){if(sc(),ic||p.drag||p.painting)throw Error("edit is unavailable mid-gesture or inside another edit");wt();let t=JSON.stringify(yn(p.root));ic=!0;try{e(p.root);let n=my(p.root);if(n)throw Error(`edit rejected: ${n}; restored the document`);xy(),Et(),Je(),wt()}catch(n){throw gy(t),n}finally{ic=!1}return na(t)}function _y(e){let t=St(e);if(!t)throw Error(`unknown node id: ${e}`);let n=qt(t);if(!n)throw Error("the root has no siblings to be cloned into");let i=Rn(t);return rc(()=>{n.children.splice(n.children.indexOf(t)+1,0,i)}),i.id}function yy(e){let t=St(e);if(!t)throw Error(`unknown node id: ${e}`);let n=qt(t);if(!n)throw Error("the root has no siblings to hide");return rc(()=>{for(let i of n.children)if(i.name!=="Immutable")i.vis=i.id===e?"visible":"hidden"})}var af=(e)=>{sc();let t=JSON.stringify(yn(p.root));return e(),na(t)},lf={iso:[Math.PI/4,Math.atan(1/Math.SQRT2)],top:[Math.PI/4,Math.PI/2],front:[0,0],side:[Math.PI/2,0]};function vy(e){if(!Object.hasOwn(lf,e))throw Error(`unknown view "${e}": use iso, top, front or side`);let t=lf[e];Xe.azim=Ue.azim=t[0],Xe.elev=Ue.elev=t[1],nn()}var by={coordinates:"Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",nodes:"S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique — mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",api:"S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON({save}) -> envelope JSON string, edit(fn) -> compact diff, undo(), redo() -> compact diff ('' = nothing to step to), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}), render(view, opts) (own entry), relations(ids?, {within=60}) — ids: each listed object (even a hidden one) against every visible object, never against its own container (overlap = largest overlapping box pair, gap = distance to the nearest box), clearance(id, dir) -> {id, name, distance} nearest visible box ahead of that face, clone(id) -> new id, show(id) -> diff, diff(before), uid(), newObject(), newScene(name?), help.",variants:"There is no variant node type: a variant is one sibling subtree per alternative (a scene, or a plain object). Put them under one parent scene whose children are exactly the alternatives, keep one visible and the rest hidden, and switch with show(id) — that node visible, its siblings hidden (an 'Immutable' group stays), one undo step. clone(id) deep-copies a subtree (fresh ids, same pos) as the next sibling, so a new alternative is clone + move + tweak. Both run their own edit step: call them outside edit(fn). relations()/clearance()/renders ignore hidden alternatives, so they follow whichever is shown.",files:"render(view, {save:'plan.webp'}) and exportJSON({save:'plan.voxelier.json'}) hand the file to the browser as a download and return a one-line confirmation instead of the payload. Where it lands is the browser's download directory (a desk browser: ~/Downloads; a Playwright-driven browser: its downloads path). An embedded/automation webview may never write the file to disk — check before relying on it, and otherwise use the returned dataURL.",render:"render(view, {focus, isolate, labels, grid, size=900, cutY, save, format='webp'}) -> Promise<dataURL or 'saved …'>. Default webp is ~5x smaller than png (office scene, 900px, top: 20 kB vs 116 kB base64). Labels are object names (falling back to id), and structural shells — a footprint covering a quarter of the scene, i.e. walls, floor, ceiling — are left unlabelled so room-centre labels stay on furniture. Half-visible groups are omitted. Views: top is orthographic looking down with +x right and +z down, front looks along +z, side along +x, iso is a perspective overview. Grid pitch 50 cm, the bar is 1 m.",edit:"edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step, persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, non-integer positions, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows. Node references go stale after undo, load or a rejected edit — look them up again inside fn.",example:"await voxelier.load(json); voxelier.edit(() => { const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56'); const alt = voxelier.clone('n111'); voxelier.show(alt); voxelier.clearance(alt, '+z'); await voxelier.render('top', {save:'plan.webp'});"},My={S:p,ser:yn,de:Jn,uid:Es,newObject:Hi,newScene:Xn,findById:St,worldBounds:nc,load:async(e)=>{sc(),await Kl(e)},exportJSON:(e)=>{let t=Zl();if(!e?.save)return t;return Lr(new Blob([t],{type:"application/json"}),e.save),`saved ${Math.round(t.length/1024)} kB of scene JSON to "${e.save}"`},edit:rc,diff:na,outline:ef,relations:sf,clearance:rf,render:of,clone:_y,show:yy,undo:()=>af(zo),redo:()=>af(gr),frameView:$n,fitNode:No,frameBox:Io,view:vy,help:by};function cf(){Object.assign(window,{voxelier:My})}for(let e of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(e,nn,{passive:!0,capture:!0});var Sy=()=>Math.abs(Xe.azim-Ue.azim)<0.001&&Math.abs(Xe.elev-Ue.elev)<0.001&&Math.abs(Xe.zoom-Ue.zoom)<0.001&&Ue.target.distanceToSquared(Xe.target)<0.000001;function hf(){let e=Lt.getBoundingClientRect();ut.w=e.width,ut.h=e.height,ut.x=e.left,ut.y=e.top}function uf(){let e=Math.max(1,Math.round(ut.w)),t=Math.max(1,Math.round(ut.h)),n=Math.min(devicePixelRatio,2);if(dt.getPixelRatio()!==n)dt.setPixelRatio(n);if(Lt.width!==Math.floor(e*n)||Lt.height!==Math.floor(t*n))dt.setSize(e,t,!1),nn()}window.addEventListener("resize",()=>{hf(),uf()});var oc=null;function Ey(e){let t;try{t=Od(e)}catch(i){return alert("Open failed: "+i.message),!1}let n=e!==oc;if(p.root=t,p.path=[t],p.editObject=null,p.sel3d=null,p.drag=null,p.painting=!1,p.lastVox=null,p.selection.clear(),n){if(p.collapsed=oc===null?new Set(ed()):new Set,p.tool==="measure")p.tool="view";Yn()}if(oc=e,Uu(),Et(),Je(),n)$n();if(!wt())return!1;return nn(),!0}function wy(){return ei(),wt()}function df(){if(requestAnimationFrame(df),uf(),Cu(),ir.tail>0||!Sy()){if(yu(),dt.render(mt,$e),mu(),ir.tail>0)ir.tail--}}var ff=()=>{if(ei(),!wl())return;wt()};window.addEventListener("pagehide",ff);document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")ff()});window.addEventListener("beforeunload",(e)=>{if(!wl())return;e.preventDefault(),e.returnValue=""});function Ty(){Gu(Ey,wy),cf();let e=zd(td);hf(),df(),Kn(e.id,e.root)}Ty();
