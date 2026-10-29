var p={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var th=2;var gs=0,nh=1,ih=2;class Pi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,fs=Math.PI/180,Zs=180/Math.PI;function xs(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[e&255]+Dt[e>>8&255]+Dt[e>>16&255]+Dt[e>>24&255]+"-"+Dt[t&255]+Dt[t>>8&255]+"-"+Dt[t>>16&15|64]+Dt[t>>24&255]+"-"+Dt[n&63|128]+Dt[n>>8&255]+"-"+Dt[n>>16&255]+Dt[n>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ht(e,t,n){return Math.max(t,Math.min(n,e))}function Da(e,t){return(e%t+t)%t}function uf(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function df(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function Ys(e,t,n){return(1-n)*e+n*t}function ff(e,t,n,i){return Ys(e,t,1-Math.exp(-n*i))}function pf(e,t=1){return t-Math.abs(Da(e,t*2)-t)}function mf(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function gf(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function xf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _f(e,t){return e+Math.random()*(t-e)}function yf(e){return e*(0.5-Math.random())}function vf(e){if(e!==void 0)cc=e;let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bf(e){return e*fs}function Mf(e){return e*Zs}function Pa(e){return(e&e-1)===0&&e!==0}function Sf(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function co(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Ef(e,t,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),g=r((i-t)/2),y=a((i-t)/2);switch(s){case"XYX":e.set(o*h,l*u,l*d,o*c);break;case"YZY":e.set(l*d,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*d,o*h,o*c);break;case"XZX":e.set(o*h,l*y,l*g,o*c);break;case"YXY":e.set(l*g,o*h,l*y,o*c);break;case"ZYZ":e.set(l*y,l*g,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function Bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var uo={DEG2RAD:fs,RAD2DEG:Zs,generateUUID:xs,clamp:Ht,euclideanModulo:Da,mapLinear:uf,inverseLerp:df,lerp:Ys,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:xf,randFloat:_f,randFloatSpread:yf,seededRandom:vf,degToRad:bf,radToDeg:Mf,isPowerOfTwo:Pa,ceilPowerOfTwo:Sf,floorPowerOfTwo:co,setQuaternionFromProperEuler:Ef,normalize:Bt,denormalize:hs};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,r,a,o,l){if(He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],g=n[8],y=i[0],x=i[3],f=i[6],m=i[1],_=i[4],v=i[7],A=i[2],C=i[5],E=i[8];return s[0]=r*y+a*m+o*A,s[3]=r*x+a*_+o*C,s[6]=r*f+a*v+o*E,s[1]=l*y+c*m+h*A,s[4]=l*x+c*_+h*C,s[7]=l*f+c*v+h*E,s[2]=u*y+d*m+g*A,s[5]=u*x+d*_+g*C,s[8]=u*f+d*v+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=c*r-a*l,u=a*o-c*s,d=l*s-r*o,g=t*h+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(i*l-c*n)*y,e[2]=(a*n-i*r)*y,e[3]=u*y,e[4]=(c*t-i*o)*y,e[5]=(i*s-a*t)*y,e[6]=d*y,e[7]=(n*o-l*t)*y,e[8]=(r*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ra=new He;function sh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ho(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function wf(){let e=ho("canvas");return e.style.display="block",e}var hc={};function $s(e){if(e in hc)return;hc[e]=!0,console.warn(e)}var uc=new He().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),dc=new He().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),Ur={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(e)=>e,fromReference:(e)=>e},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(e)=>e.convertSRGBToLinear(),fromReference:(e)=>e.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(e)=>e.applyMatrix3(dc),fromReference:(e)=>e.applyMatrix3(uc)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(e)=>e.convertSRGBToLinear().applyMatrix3(dc),fromReference:(e)=>e.applyMatrix3(uc).convertLinearToSRGB()}},Tf=new Set(["srgb-linear","display-p3-linear"]),et={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Tf.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=Ur[t].toReference,s=Ur[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ur[e].primaries},getTransfer:function(e){if(e==="")return"linear";return Ur[e].transfer}};function ps(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function oa(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Ji;class Ua{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{if(Ji===void 0)Ji=ho("canvas");Ji.width=e.width,Ji.height=e.height;let n=Ji.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);t=Ji}if(t.width>2048||t.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",0.6);else return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ps(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(ps(t[n]/255)*255);else t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Af=0;class Oa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=xs(),this.data=e,this.version=0}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(aa(i[r].image));else s.push(aa(i[r]))}else s=aa(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function aa(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Ua.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Rf=0;class Qt extends Pi{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Qt.DEFAULT_ANISOTROPY,c=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=xs(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c==="string")this.colorSpace=c;else $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(e){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===3001?"srgb":""}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=300;Qt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],g=o[9],y=o[2],x=o[6],f=o[10];if(Math.abs(c-u)<0.01&&Math.abs(h-y)<0.01&&Math.abs(g-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+y)<0.1&&Math.abs(g+x)<0.1&&Math.abs(l+d+f-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(d+1)/2,A=(f+1)/2,C=(c+u)/4,E=(h+y)/4,L=(g+x)/4;if(_>v&&_>A)if(_<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(_),i=C/n,s=E/n;else if(v>A)if(v<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(v),n=C/i,s=L/i;else if(A<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(A),n=E/s,i=L/s;return this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(h-y)*(h-y)+(u-c)*(u-c));if(Math.abs(m)<0.001)m=1;return this.x=(x-g)/m,this.y=(h-y)/m,this.z=(u-c)/m,this.w=Math.acos((l+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends Pi{constructor(e=1,t=1,n={}){super();this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let i={width:e,height:t,depth:1};if(n.encoding!==void 0)$s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?"srgb":"";n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n)this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose();this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);if(this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends rh{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class za extends Qt{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends Qt{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],d=s[r+1],g=s[r+2],y=s[r+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=y;return}if(h!==y||o!==u||l!==d||c!==g){let x=1-a,f=o*u+l*d+c*g+h*y,m=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let A=Math.sqrt(_),C=Math.atan2(A,f*m);x=Math.sin(x*C)/A,a=Math.sin(a*C)/A}let v=a*m;if(o=o*x+u*v,l=l*x+d*v,c=c*x+g*v,h=h*x+y*v,x===1-a){let A=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=A,l*=A,c*=A,h*=A}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],u=s[r+1],d=s[r+2],g=s[r+3];return e[t]=a*g+c*h+o*d-l*u,e[t+1]=o*g+c*u+l*h-a*d,e[t+2]=l*g+c*d+a*u-o*h,e[t+3]=c*g-a*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),u=o(n/2),d=o(i/2),g=o(s/2);switch(r){case"XYZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"YXZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"ZXY":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"ZYX":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"YZX":this._x=u*c*h+l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h-u*d*g;break;case"XZY":this._x=u*c*h-l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=n+a+h;if(u>0){let d=0.5/Math.sqrt(u+1);this._w=0.25/d,this._x=(c-o)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(c-o)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(o+c)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<Number.EPSILON)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0)this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a;else this.copy(e);if(a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let o=1-a*a;if(o<=Number.EPSILON){let d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),h=2*(s*n-r*t);return this.x=t+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-0.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var la=new N,fc=new Li;class oi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,fn);else fn.fromBufferAttribute(s,r);fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Or.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Or.copy(n.boundingBox)}Or.applyMatrix4(e.matrixWorld),this.union(Or)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z?!1:!0}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z?!1:!0}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),zr.subVectors(this.max,Ws),Zi.subVectors(e.a,Ws),ji.subVectors(e.b,Ws),Ki.subVectors(e.c,Ws),Qn.subVectors(ji,Zi),ei.subVectors(Ki,ji),Ei.subVectors(Zi,Ki);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Ei.z,Ei.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Ei.z,0,-Ei.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Ei.y,Ei.x,0];if(!ca(t,Zi,ji,Ki,zr))return!1;if(t=[1,0,0,0,1,0,0,0,1],!ca(t,Zi,ji,Ki,zr))return!1;return Fr.crossVectors(Qn,ei),t=[Fr.x,Fr.y,Fr.z],ca(t,Zi,ji,Ki,zr)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(fn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}var Un=[new N,new N,new N,new N,new N,new N,new N,new N],fn=new N,Or=new oi,Zi=new N,ji=new N,Ki=new N,Qn=new N,ei=new N,Ei=new N,Ws=new N,zr=new N,Fr=new N,wi=new N;function ca(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){wi.fromArray(e,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=n.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cf=new oi,Vs=new N,ha=new N;class js{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Cf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(ha)),this.expandByPoint(Vs.copy(e.center).sub(ha));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}var On=new N,ua=new N,Br=new N,ti=new N,da=new N,kr=new N,fa=new N;class fo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(0.5),Br.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(ua);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(Br),a=ti.dot(this.direction),o=-ti.dot(Br),l=ti.lengthSq(),c=Math.abs(1-r*r),h,u,d,g;if(c>0)if(h=r*o-a,u=r*a-o,g=s*c,h>=0)if(u>=-g)if(u<=g){let y=1/c;h*=y,u*=y,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else if(u<=-g)h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else if(u<=g)h=0,u=Math.min(Math.max(-s,-o),s),d=u*(u+2*o)+l;else h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(ua).addScaledVector(Br,u);return d}intersectSphere(e,t){On.subVectors(e.center,this.origin);let n=On.dot(this.direction),i=On.dot(On)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l;else n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l;if(c>=0)s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c;else s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h;else a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,s){da.subVectors(t,e),kr.subVectors(n,e),fa.crossVectors(da,kr);let r=this.direction.dot(fa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ti.subVectors(this.origin,e);let o=a*this.direction.dot(kr.crossVectors(ti,kr));if(o<0)return null;let l=a*this.direction.dot(da.cross(ti));if(l<0)return null;if(o+l>r)return null;let c=-a*ti.dot(fa);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,i,s,r,a,o,l,c,h,u,d,g,y,x){if(yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,h,u,d,g,y,x)}set(e,t,n,i,s,r,a,o,l,c,h,u,d,g,y,x){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=h,f[14]=u,f[3]=d,f[7]=g,f[11]=y,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),r=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=r*c,d=r*h,g=a*c,y=a*h;t[0]=o*c,t[4]=-o*h,t[8]=l,t[1]=d+g*l,t[5]=u-y*l,t[9]=-a*o,t[2]=y-u*l,t[6]=g+d*l,t[10]=r*o}else if(e.order==="YXZ"){let u=o*c,d=o*h,g=l*c,y=l*h;t[0]=u+y*a,t[4]=g*a-d,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-a,t[2]=d*a-g,t[6]=y+u*a,t[10]=r*o}else if(e.order==="ZXY"){let u=o*c,d=o*h,g=l*c,y=l*h;t[0]=u-y*a,t[4]=-r*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=r*c,t[9]=y-u*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let u=r*c,d=r*h,g=a*c,y=a*h;t[0]=o*c,t[4]=g*l-d,t[8]=u*l+y,t[1]=o*h,t[5]=y*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let u=r*o,d=r*l,g=a*o,y=a*l;t[0]=o*c,t[4]=y-u*h,t[8]=g*h+d,t[1]=h,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=d*h+g,t[10]=u-y*h}else if(e.order==="XZY"){let u=r*o,d=r*l,g=a*o,y=a*l;t[0]=o*c,t[4]=-h,t[8]=l*c,t[1]=u*h+y,t[5]=r*c,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*c,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Lf)}lookAt(e,t,n){let i=this.elements;if(jt.subVectors(e,t),jt.lengthSq()===0)jt.z=1;if(jt.normalize(),ni.crossVectors(n,jt),ni.lengthSq()===0){if(Math.abs(n.z)===1)jt.x+=0.0001;else jt.z+=0.0001;jt.normalize(),ni.crossVectors(n,jt)}return ni.normalize(),Hr.crossVectors(jt,ni),i[0]=ni.x,i[4]=Hr.x,i[8]=jt.x,i[1]=ni.y,i[5]=Hr.y,i[9]=jt.y,i[2]=ni.z,i[6]=Hr.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],g=n[2],y=n[6],x=n[10],f=n[14],m=n[3],_=n[7],v=n[11],A=n[15],C=i[0],E=i[4],L=i[8],z=i[12],M=i[1],T=i[5],U=i[9],q=i[13],J=i[2],R=i[6],B=i[10],V=i[14],Z=i[3],X=i[7],W=i[11],j=i[15];return s[0]=r*C+a*M+o*J+l*Z,s[4]=r*E+a*T+o*R+l*X,s[8]=r*L+a*U+o*B+l*W,s[12]=r*z+a*q+o*V+l*j,s[1]=c*C+h*M+u*J+d*Z,s[5]=c*E+h*T+u*R+d*X,s[9]=c*L+h*U+u*B+d*W,s[13]=c*z+h*q+u*V+d*j,s[2]=g*C+y*M+x*J+f*Z,s[6]=g*E+y*T+x*R+f*X,s[10]=g*L+y*U+x*B+f*W,s[14]=g*z+y*q+x*V+f*j,s[3]=m*C+_*M+v*J+A*Z,s[7]=m*E+_*T+v*R+A*X,s[11]=m*L+_*U+v*B+A*W,s[15]=m*z+_*q+v*V+A*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],h=e[6],u=e[10],d=e[14],g=e[3],y=e[7],x=e[11],f=e[15];return g*(+s*o*h-i*l*h-s*a*u+n*l*u+i*a*d-n*o*d)+y*(+t*o*d-t*l*u+s*r*u-i*r*d+i*l*c-s*o*c)+x*(+t*l*h-t*a*d-s*r*h+n*r*d+s*a*c-n*l*c)+f*(-i*a*c-t*o*h+t*a*u+i*r*h-n*r*u+n*o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11],g=e[12],y=e[13],x=e[14],f=e[15],m=h*x*l-y*u*l+y*o*d-a*x*d-h*o*f+a*u*f,_=g*u*l-c*x*l-g*o*d+r*x*d+c*o*f-r*u*f,v=c*y*l-g*h*l+g*a*d-r*y*d-c*a*f+r*h*f,A=g*h*o-c*y*o-g*a*u+r*y*u+c*a*x-r*h*x,C=t*m+n*_+i*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/C;return e[0]=m*E,e[1]=(y*u*s-h*x*s-y*i*d+n*x*d+h*i*f-n*u*f)*E,e[2]=(a*x*s-y*o*s+y*i*l-n*x*l-a*i*f+n*o*f)*E,e[3]=(h*o*s-a*u*s-h*i*l+n*u*l+a*i*d-n*o*d)*E,e[4]=_*E,e[5]=(c*x*s-g*u*s+g*i*d-t*x*d-c*i*f+t*u*f)*E,e[6]=(g*o*s-r*x*s-g*i*l+t*x*l+r*i*f-t*o*f)*E,e[7]=(r*u*s-c*o*s+c*i*l-t*u*l-r*i*d+t*o*d)*E,e[8]=v*E,e[9]=(g*h*s-c*y*s-g*n*d+t*y*d+c*n*f-t*h*f)*E,e[10]=(r*y*s-g*a*s+g*n*l-t*y*l-r*n*f+t*a*f)*E,e[11]=(c*a*s-r*h*s-c*n*l+t*h*l+r*n*d-t*a*d)*E,e[12]=A*E,e[13]=(c*y*i-g*h*i+g*n*u-t*y*u-c*n*x+t*h*x)*E,e[14]=(g*a*i-r*y*i-g*n*o+t*y*o+r*n*x-t*a*x)*E,e[15]=(r*h*i-c*a*i+c*n*o-t*h*o-r*n*u+t*a*u)*E,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,h=a+a,u=s*l,d=s*c,g=s*h,y=r*c,x=r*h,f=a*h,m=o*l,_=o*c,v=o*h,{x:A,y:C,z:E}=n;return i[0]=(1-(y+f))*A,i[1]=(d+v)*A,i[2]=(g-_)*A,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(u+f))*C,i[6]=(x+m)*C,i[7]=0,i[8]=(g+_)*E,i[9]=(x-m)*E,i[10]=(1-(u+y))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Qi.set(i[0],i[1],i[2]).length(),r=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);let l=1/s,c=1/r,h=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=2000){let o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d,g;if(a===2000)d=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)d=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000){let o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,g,y;if(a===2000)g=(r+s)*h,y=-2*h;else if(a===2001)g=s*h,y=-1*h;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=y,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var Qi=new N,pn=new yt,Pf=new N(0,0,0),Lf=new N(1,1,1),ni=new N,Hr=new N,jt=new N,pc=new yt,mc=new Li;class po{constructor(e=0,t=0,n=0,i=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(t){case"XYZ":if(this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,d),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,d),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Ht(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,d);break;case"XZY":if(this._z=Math.asin(-Ht(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,d),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var If=0,gc=new N,es=new Li,zn=new yt,Gr=new N,Xs=new N,Nf=new N,Df=new Li,xc=new N(1,0,0),_c=new N(0,1,0),yc=new N(0,0,1),Uf={type:"added"},Of={type:"removed"};class Ct extends Pi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();let e=new N,t=new po,n=new Li,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Gr.copy(e);else Gr.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)zn.lookAt(Xs,Gr,this.up);else zn.lookAt(Gr,Xs,this.up);if(this.quaternion.setFromRotationMatrix(zn),i)zn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(zn),this.quaternion.premultiply(es.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D){if(e.parent!==null)e.parent.remove(e);e.parent=this,this.children.push(e),e.dispatchEvent(Uf)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of);return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld);return e.applyMatrix4(zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.matrixWorldAutoUpdate===!0||e===!0)s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(t===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++){let a=i[s];if(a.matrixWorldAutoUpdate===!0)a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((a)=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),u=r(e.skeletons),d=r(e.animations),g=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(d.length>0)n.animations=d;if(g.length>0)n.nodes=g}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new N(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new N,Fn=new N,pa=new N,Bn=new N,ts=new N,ns=new N,vc=new N,ma=new N,ga=new N,xa=new N,Wr=!1;class ln{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mn.subVectors(i,t),Fn.subVectors(n,t),pa.subVectors(e,t);let r=mn.dot(mn),a=mn.dot(Fn),o=mn.dot(pa),l=Fn.dot(Fn),c=Fn.dot(pa),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(l*o-a*c)*u,g=(r*c-a*o)*u;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,Bn)===null)return!1;return Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,i,s,r,a,o){if(Wr===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0;return this.getInterpolation(e,t,n,i,s,r,a,o)}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,Bn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Bn.x),o.addScaledVector(r,Bn.y),o.addScaledVector(a,Bn.z),o}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Fn.subVectors(e,t),mn.cross(Fn).dot(i)<0?!0:!1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){if(Wr===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0;return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;ts.subVectors(i,n),ns.subVectors(s,n),ma.subVectors(e,n);let o=ts.dot(ma),l=ns.dot(ma);if(o<=0&&l<=0)return t.copy(n);ga.subVectors(e,i);let c=ts.dot(ga),h=ns.dot(ga);if(c>=0&&h<=c)return t.copy(i);let u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return r=o/(o-c),t.copy(n).addScaledVector(ts,r);xa.subVectors(e,s);let d=ts.dot(xa),g=ns.dot(xa);if(g>=0&&d<=g)return t.copy(s);let y=d*l-o*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ns,a);let x=c*g-d*h;if(x<=0&&h-c>=0&&d-g>=0)return vc.subVectors(s,i),a=(h-c)/(h-c+(d-g)),t.copy(i).addScaledVector(vc,a);let f=1/(x+y+u);return r=y*f,a=u*f,t.copy(n).addScaledVector(ts,r).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}var ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function _a(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Da(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=_a(r,s,e+0.3333333333333333),this.g=_a(r,s,e),this.b=_a(r,s,e-0.3333333333333333)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=ah[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else console.warn("THREE.Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return et.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ht(Ut.r*255,0,255))*65536+Math.round(Ht(Ut.g*255,0,255))*256+Math.round(Ht(Ut.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ut.copy(this),t);let{r:n,g:i,b:s}=Ut,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e="srgb"){et.fromWorkingColorSpace(Ut.copy(this),e);let{r:t,g:n,b:i}=Ut;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Vr);let n=Ys(ii.h,Vr.h,t),i=Ys(ii.s,Vr.s,t),s=Ys(ii.l,Vr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ut=new Pe;Pe.NAMES=ah;var zf=0;class ai extends Pi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Ks extends ai{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var xt=new N,Xr=new Ve;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=hs(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=Bt(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=hs(t,this.array);return t}setX(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=hs(t,this.array);return t}setY(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=hs(t,this.array);return t}setZ(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=hs(t,this.array);return t}setW(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}}class Fa extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ba extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Ff=0,an=new yt,ya=new Ct,is=new N,Kt=new oi,qs=new oi,Tt=new N;class Wt extends Pi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((sh(e))?Ba:Fa)(e,1);else this.index=e;return this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new oi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Kt.setFromBufferAttribute(s),this.morphTargetsRelative)Tt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Tt);else this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new js;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(qs.setFromBufferAttribute(a),this.morphTargetsRelative)Tt.addVectors(Kt.min,qs.min),Kt.expandByPoint(Tt),Tt.addVectors(Kt.max,qs.max),Kt.expandByPoint(Tt);else Kt.expandByPoint(qs.min),Kt.expandByPoint(qs.max)}Kt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Tt.fromBufferAttribute(a,l),o)is.fromBufferAttribute(e,l),Tt.add(is);i=Math.max(i,n.distanceToSquared(Tt))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));let o=this.getAttribute("tangent").array,l=[],c=[];for(let M=0;M<a;M++)l[M]=new N,c[M]=new N;let h=new N,u=new N,d=new N,g=new Ve,y=new Ve,x=new Ve,f=new N,m=new N;function _(M,T,U){h.fromArray(i,M*3),u.fromArray(i,T*3),d.fromArray(i,U*3),g.fromArray(r,M*2),y.fromArray(r,T*2),x.fromArray(r,U*2),u.sub(h),d.sub(h),y.sub(g),x.sub(g);let q=1/(y.x*x.y-x.x*y.y);if(!isFinite(q))return;f.copy(u).multiplyScalar(x.y).addScaledVector(d,-y.y).multiplyScalar(q),m.copy(d).multiplyScalar(y.x).addScaledVector(u,-x.x).multiplyScalar(q),l[M].add(f),l[T].add(f),l[U].add(f),c[M].add(m),c[T].add(m),c[U].add(m)}let v=this.groups;if(v.length===0)v=[{start:0,count:n.length}];for(let M=0,T=v.length;M<T;++M){let U=v[M],{start:q,count:J}=U;for(let R=q,B=q+J;R<B;R+=3)_(n[R+0],n[R+1],n[R+2])}let A=new N,C=new N,E=new N,L=new N;function z(M){E.fromArray(s,M*3),L.copy(E);let T=l[M];A.copy(T),A.sub(E.multiplyScalar(E.dot(T))).normalize(),C.crossVectors(L,T);let q=C.dot(c[M])<0?-1:1;o[M*4]=A.x,o[M*4+1]=A.y,o[M*4+2]=A.z,o[M*4+3]=q}for(let M=0,T=v.length;M<T;++M){let U=v[M],{start:q,count:J}=U;for(let R=q,B=q+J;R<B;R+=3)z(n[R+0]),z(n[R+1]),z(n[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new N,s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),y=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,x),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),a.add(c),o.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:h}=a,u=new l.constructor(o.length*c),d=0,g=0;for(let y=0,x=o.length;y<x;y++){if(a.isInterleavedBufferAttribute)d=o[y]*a.data.stride+a.offset;else d=o[y]*c;for(let f=0;f<c;f++)u[g++]=l[d++]}return new Gt(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Wt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let u=l[c],d=e(u,n);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];c.push(d.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere={center:a.center.toArray(),radius:a.radius};return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var bc=new yt,Ti=new fo,qr=new js,Mc=new N,ss=new N,rs=new N,os=new N,va=new N,Yr=new N,$r=new Ve,Jr=new Ve,Zr=new Ve,Sc=new N,Ec=new N,wc=new N,jr=new N,Kr=new N;class _t extends Ct{constructor(e=new Wt,t=new Ks){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Yr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(va.fromBufferAttribute(h,e),r)Yr.addScaledVector(va,c);else Yr.addScaledVector(va.sub(t),c)}t.add(Yr)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(qr.copy(n.boundingSphere),qr.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),qr.containsPoint(Ti.origin)===!1){if(Ti.intersectSphere(qr,Mc)===null)return;if(Ti.origin.distanceToSquared(Mc)>(e.far-e.near)**2)return}if(bc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(bc),n.boundingBox!==null){if(Ti.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Ti)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:u,drawRange:d}=s;if(a!==null)if(Array.isArray(r))for(let g=0,y=u.length;g<y;g++){let x=u[g],f=r[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=m,A=_;v<A;v+=3){let C=a.getX(v),E=a.getX(v+1),L=a.getX(v+2);if(i=Qr(this,f,e,n,l,c,h,C,E,L),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,t.push(i)}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=g,f=y;x<f;x+=3){let m=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);if(i=Qr(this,r,e,n,l,c,h,m,_,v),i)i.faceIndex=Math.floor(x/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,y=u.length;g<y;g++){let x=u[g],f=r[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=m,A=_;v<A;v+=3){let C=v,E=v+1,L=v+2;if(i=Qr(this,f,e,n,l,c,h,C,E,L),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,t.push(i)}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=g,f=y;x<f;x+=3){let m=x,_=x+1,v=x+2;if(i=Qr(this,r,e,n,l,c,h,m,_,v),i)i.faceIndex=Math.floor(x/3),t.push(i)}}}}function Bf(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;Kr.copy(o),Kr.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Kr);if(c<n.near||c>n.far)return null;return{distance:c,point:Kr.clone(),object:e}}function Qr(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,ss),e.getVertexPosition(l,rs),e.getVertexPosition(c,os);let h=Bf(e,t,n,i,ss,rs,os,jr);if(h){if(s)$r.fromBufferAttribute(s,o),Jr.fromBufferAttribute(s,l),Zr.fromBufferAttribute(s,c),h.uv=ln.getInterpolation(jr,ss,rs,os,$r,Jr,Zr,new Ve);if(r)$r.fromBufferAttribute(r,o),Jr.fromBufferAttribute(r,l),Zr.fromBufferAttribute(r,c),h.uv1=ln.getInterpolation(jr,ss,rs,os,$r,Jr,Zr,new Ve),h.uv2=h.uv1;if(a){if(Sc.fromBufferAttribute(a,o),Ec.fromBufferAttribute(a,l),wc.fromBufferAttribute(a,c),h.normal=ln.getInterpolation(jr,ss,rs,os,Sc,Ec,wc,new N),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new N,materialIndex:0};ln.getNormal(ss,rs,os,u.normal),h.face=u}return h}class Mn extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2));function g(y,x,f,m,_,v,A,C,E,L,z){let M=v/E,T=A/L,U=v/2,q=A/2,J=C/2,R=E+1,B=L+1,V=0,Z=0,X=new N;for(let W=0;W<B;W++){let j=W*T-q;for(let K=0;K<R;K++){let D=K*M-U;X[y]=D*m,X[x]=j*_,X[f]=J,l.push(X.x,X.y,X.z),X[y]=0,X[x]=0,X[f]=C>0?1:-1,c.push(X.x,X.y,X.z),h.push(K/E),h.push(1-W/L),V+=1}}for(let W=0;W<L;W++)for(let j=0;j<E;j++){let K=u+j+R*W,D=u+j+R*(W+1),Y=u+(j+1)+R*(W+1),ie=u+(j+1)+R*W;o.push(K,D,ie),o.push(D,Y,ie),Z+=6}a.addGroup(d,Z,z),d+=Z,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))t[n][i]=s.slice();else t[n][i]=s}}return t}function kt(e){let t={};for(let n=0;n<e.length;n++){let i=ms(e[n]);for(let s in i)t[s]=i[s]}return t}function kf(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function lh(e){if(e.getRenderTarget()===null)return e.outputColorSpace;return et.workingColorSpace}var Hf={clone:ms,merge:kt},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ai{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}}class ka extends Ct{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=2000}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends ka{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fs*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(fs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fs*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}var as=-90,ls=1;class ch extends Ct{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ot(as,ls,e,t);i.layers=this.layers,this.add(i);let s=new Ot(as,ls,e,t);s.layers=this.layers,this.add(s);let r=new Ot(as,ls,e,t);r.layers=this.layers,this.add(r);let a=new Ot(as,ls,e,t);a.layers=this.layers,this.add(a);let o=new Ot(as,ls,e,t);o.layers=this.layers,this.add(o);let l=new Ot(as,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,o),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ha extends Qt{constructor(e,t,n,i,s,r,a,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:301;super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hh extends ri{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];if(t.encoding!==void 0)$s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?"srgb":"";this.texture=new Ha(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mn(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let r=new _t(i,s),a=t.minFilter;if(t.minFilter===1008)t.minFilter=1006;return new ch(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var ba=new N,Vf=new N,Xf=new He;class Rt{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ba.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ba),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xf.getNormalMatrix(e),i=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Ai=new js,eo=new N;class go{constructor(e=new Rt,t=new Rt,n=new Rt,i=new Rt,s=new Rt,r=new Rt){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000){let n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],g=i[9],y=i[10],x=i[11],f=i[12],m=i[13],_=i[14],v=i[15];if(n[0].setComponents(o-s,u-l,x-d,v-f).normalize(),n[1].setComponents(o+s,u+l,x+d,v+f).normalize(),n[2].setComponents(o+r,u+c,x+g,v+m).normalize(),n[3].setComponents(o-r,u-c,x-g,v-m).normalize(),n[4].setComponents(o-a,u-h,x-y,v-_).normalize(),t===2000)n[5].setComponents(o+a,u+h,x+y,v+_).normalize();else if(t===2001)n[5].setComponents(a,h,y,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=0.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(eo.x=i.normal.x>0?e.max.x:e.min.x,eo.y=i.normal.y>0?e.max.y:e.min.y,eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uh(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){if(t===!0)return;if(n===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function qf(e,t){let n=t.isWebGL2,i=new WeakMap;function s(c,h){let{array:u,usage:d}=c,g=u.byteLength,y=e.createBuffer();e.bindBuffer(h,y),e.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=e.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=e.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=e.SHORT;else if(u instanceof Uint32Array)x=e.UNSIGNED_INT;else if(u instanceof Int32Array)x=e.INT;else if(u instanceof Int8Array)x=e.BYTE;else if(u instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,u){let{array:d,_updateRange:g,updateRanges:y}=h;if(e.bindBuffer(u,c),g.count===-1&&y.length===0)e.bufferSubData(u,0,d);if(y.length!==0){for(let x=0,f=y.length;x<f;x++){let m=y[x];if(n)e.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count);else e.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}if(g.count!==-1){if(n)e.bufferSubData(u,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count);else e.bufferSubData(u,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count));g.count=-1}h.onUploadCallback()}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;return i.get(c)}function o(c){if(c.isInterleavedBufferAttribute)c=c.data;let h=i.get(c);if(h)e.deleteBuffer(h.buffer),i.delete(c)}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);if(!d||d.version<c.version)i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}if(c.isInterleavedBufferAttribute)c=c.data;let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class _s extends Wt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=e/a,u=t/o,d=[],g=[],y=[],x=[];for(let f=0;f<c;f++){let m=f*u-r;for(let _=0;_<l;_++){let v=_*h-s;g.push(v,-m,0),y.push(0,0,1),x.push(_/a),x.push(1-f/o)}}for(let f=0;f<o;f++)for(let m=0;m<a;m++){let _=m+l*f,v=m+l*(f+1),A=m+1+l*(f+1),C=m+1+l*f;d.push(_,v,C),d.push(v,A,C)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`
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
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,qp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`;var im=`#if defined( USE_POINTS_UV )
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
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,yg=`#define TOON
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
}`,vg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Yf,alphahash_pars_fragment:$f,alphamap_fragment:Jf,alphamap_pars_fragment:Zf,alphatest_fragment:jf,alphatest_pars_fragment:Kf,aomap_fragment:Qf,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:_p,displacementmap_pars_vertex:yp,displacementmap_vertex:vp,emissivemap_fragment:bp,emissivemap_pars_fragment:Mp,colorspace_fragment:Sp,colorspace_pars_fragment:Ep,envmap_fragment:wp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Ip,fog_pars_fragment:Np,gradientmap_pars_fragment:Dp,lightmap_fragment:Up,lightmap_pars_fragment:Op,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Fp,lights_pars_begin:Bp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:$p,lights_fragment_end:Jp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Qp,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:ym,opaque_fragment:vm,packing:bm,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:Em,dithering_pars_fragment:wm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Im,skinning_pars_vertex:Nm,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Om,specularmap_pars_fragment:zm,tonemapping_fragment:Fm,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Wm,uv_vertex:Vm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Jm,cube_vert:Zm,cube_frag:jm,depth_vert:Km,depth_frag:Qm,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:og,meshbasic_frag:ag,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:_g,meshtoon_frag:yg,points_vert:vg,points_frag:bg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:Eg,sprite_frag:wg},ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ve(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},vn={basic:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:kt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:kt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:kt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:kt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:kt([ae.lights,ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};vn.physical={uniforms:kt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var to={r:0,b:0,g:0};function Tg(e,t,n,i,s,r,a){let o=new Pe(0),l=r===!0?0:1,c,h,u=null,d=0,g=null;function y(f,m){let _=!1,v=m.isScene===!0?m.background:null;if(v&&v.isTexture)v=(m.backgroundBlurriness>0?n:t).get(v);if(v===null)x(o,l);else if(v&&v.isColor)x(v,1),_=!0;let A=e.xr.getEnvironmentBlendMode();if(A==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(A==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||_)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(v&&(v.isCubeTexture||v.mapping===306)){if(h===void 0)h=new _t(new Mn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ms(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=et.getTransfer(v.colorSpace)!=="srgb",u!==v||d!==v.version||g!==e.toneMapping)h.material.needsUpdate=!0,u=v,d=v.version,g=e.toneMapping;h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)}else if(v&&v.isTexture){if(c===void 0)c=new _t(new _s(2,2),new bn({name:"BackgroundMaterial",uniforms:ms(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c);if(c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!=="srgb",v.matrixAutoUpdate===!0)v.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(v.matrix),u!==v||d!==v.version||g!==e.toneMapping)c.material.needsUpdate=!0,u=v,d=v.version,g=e.toneMapping;c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)}}function x(f,m){f.getRGB(to,lh(e)),i.buffers.color.setClear(to.r,to.g,to.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(o,l)},render:y}}function Ag(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null),c=l,h=!1;function u(R,B,V,Z,X){let W=!1;if(a){let j=x(Z,V,B);if(c!==j)c=j,g(c.object);if(W=m(R,Z,V,X),W)_(R,Z,V,X)}else{let j=B.wireframe===!0;if(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==j)c.geometry=Z.id,c.program=V.id,c.wireframe=j,W=!0}if(X!==null)n.update(X,e.ELEMENT_ARRAY_BUFFER);if(W||h){if(h=!1,z(R,B,V,Z),X!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(X).buffer)}}function d(){if(i.isWebGL2)return e.createVertexArray();return r.createVertexArrayOES()}function g(R){if(i.isWebGL2)return e.bindVertexArray(R);return r.bindVertexArrayOES(R)}function y(R){if(i.isWebGL2)return e.deleteVertexArray(R);return r.deleteVertexArrayOES(R)}function x(R,B,V){let Z=V.wireframe===!0,X=o[R.id];if(X===void 0)X={},o[R.id]=X;let W=X[B.id];if(W===void 0)W={},X[B.id]=W;let j=W[Z];if(j===void 0)j=f(d()),W[Z]=j;return j}function f(R){let B=[],V=[],Z=[];for(let X=0;X<s;X++)B[X]=0,V[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Z,object:R,attributes:{},index:null}}function m(R,B,V,Z){let X=c.attributes,W=B.attributes,j=0,K=V.getAttributes();for(let D in K)if(K[D].location>=0){let ie=X[D],se=W[D];if(se===void 0){if(D==="instanceMatrix"&&R.instanceMatrix)se=R.instanceMatrix;if(D==="instanceColor"&&R.instanceColor)se=R.instanceColor}if(ie===void 0)return!0;if(ie.attribute!==se)return!0;if(se&&ie.data!==se.data)return!0;j++}if(c.attributesNum!==j)return!0;if(c.index!==Z)return!0;return!1}function _(R,B,V,Z){let X={},W=B.attributes,j=0,K=V.getAttributes();for(let D in K)if(K[D].location>=0){let ie=W[D];if(ie===void 0){if(D==="instanceMatrix"&&R.instanceMatrix)ie=R.instanceMatrix;if(D==="instanceColor"&&R.instanceColor)ie=R.instanceColor}let se={};if(se.attribute=ie,ie&&ie.data)se.data=ie.data;X[D]=se,j++}c.attributes=X,c.attributesNum=j,c.index=Z}function v(){let R=c.newAttributes;for(let B=0,V=R.length;B<V;B++)R[B]=0}function A(R){C(R,0)}function C(R,B){let V=c.newAttributes,Z=c.enabledAttributes,X=c.attributeDivisors;if(V[R]=1,Z[R]===0)e.enableVertexAttribArray(R),Z[R]=1;if(X[R]!==B)(i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),X[R]=B}function E(){let R=c.newAttributes,B=c.enabledAttributes;for(let V=0,Z=B.length;V<Z;V++)if(B[V]!==R[V])e.disableVertexAttribArray(V),B[V]=0}function L(R,B,V,Z,X,W,j){if(j===!0)e.vertexAttribIPointer(R,B,V,X,W);else e.vertexAttribPointer(R,B,V,Z,X,W)}function z(R,B,V,Z){if(i.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)){if(t.get("ANGLE_instanced_arrays")===null)return}v();let X=Z.attributes,W=V.getAttributes(),j=B.defaultAttributeValues;for(let K in W){let D=W[K];if(D.location>=0){let Y=X[K];if(Y===void 0){if(K==="instanceMatrix"&&R.instanceMatrix)Y=R.instanceMatrix;if(K==="instanceColor"&&R.instanceColor)Y=R.instanceColor}if(Y!==void 0){let ie=Y.normalized,se=Y.itemSize,re=n.get(Y);if(re===void 0)continue;let{buffer:ce,type:le,bytesPerElement:ue}=re,we=i.isWebGL2===!0&&(le===e.INT||le===e.UNSIGNED_INT||Y.gpuType===1013);if(Y.isInterleavedBufferAttribute){let I=Y.data,Ke=I.stride,Le=Y.offset;if(I.isInstancedInterleavedBuffer){for(let xe=0;xe<D.locationSize;xe++)C(D.location+xe,I.meshPerAttribute);if(R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0)Z._maxInstanceCount=I.meshPerAttribute*I.count}else for(let xe=0;xe<D.locationSize;xe++)A(D.location+xe);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let xe=0;xe<D.locationSize;xe++)L(D.location+xe,se/D.locationSize,le,ie,Ke*ue,(Le+se/D.locationSize*xe)*ue,we)}else{if(Y.isInstancedBufferAttribute){for(let I=0;I<D.locationSize;I++)C(D.location+I,Y.meshPerAttribute);if(R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0)Z._maxInstanceCount=Y.meshPerAttribute*Y.count}else for(let I=0;I<D.locationSize;I++)A(D.location+I);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let I=0;I<D.locationSize;I++)L(D.location+I,se/D.locationSize,le,ie,se*ue,se/D.locationSize*I*ue,we)}}else if(j!==void 0){let ie=j[K];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(D.location,ie);break;case 3:e.vertexAttrib3fv(D.location,ie);break;case 4:e.vertexAttrib4fv(D.location,ie);break;default:e.vertexAttrib1fv(D.location,ie)}}}}E()}function M(){q();for(let R in o){let B=o[R];for(let V in B){let Z=B[V];for(let X in Z)y(Z[X].object),delete Z[X];delete B[V]}delete o[R]}}function T(R){if(o[R.id]===void 0)return;let B=o[R.id];for(let V in B){let Z=B[V];for(let X in Z)y(Z[X].object),delete Z[X];delete B[V]}delete o[R.id]}function U(R){for(let B in o){let V=o[B];if(V[R.id]===void 0)continue;let Z=V[R.id];for(let X in Z)y(Z[X].object),delete Z[X];delete V[R.id]}}function q(){if(J(),h=!0,c===l)return;c=l,g(c.object)}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:A,disableUnusedAttributes:E}}function Rg(e,t,n,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){e.drawArrays(r,h,u),n.update(u,r,1)}function l(h,u,d){if(d===0)return;let g,y;if(s)g=e,y="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](r,h,u,d),n.update(u,r,d)}function c(h,u,d){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{g.multiDrawArraysWEBGL(r,h,0,u,0,d);let y=0;for(let x=0;x<d;x++)y+=u[x];n.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Cg(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}if(L==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let a=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=n.precision!==void 0?n.precision:"highp",l=r(o);if(l!==o)console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l;let c=a||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||t.has("OES_texture_float"),C=v&&A,E=a?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:E}}function Pg(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Rt,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let g=u.length!==0||d||i!==0||s;return s=d,i=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,g){let{clippingPlanes:y,clipIntersection:x,clipShadows:f}=u,m=e.get(u);if(!s||y===null||y.length===0||r&&!f)if(r)h(null);else c();else{let _=r?0:i,v=_*4,A=m.clippingState||null;l.value=A,A=h(y,d,v,g);for(let C=0;C!==v;++C)A[C]=n[C];m.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function h(u,d,g,y){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=l.value,y!==!0||f===null){let m=g+x*4,_=d.matrixWorldInverse;if(o.getNormalMatrix(_),f===null||f.length<m)f=new Float32Array(m);for(let v=0,A=g;v!==x;++v,A+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function Lg(e){let t=new WeakMap;function n(a,o){if(o===303)a.mapping=301;else if(o===304)a.mapping=302;return a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===303||o===304)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new hh(l.height/2);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);if(l!==void 0)t.delete(o),l.dispose()}function r(){t=new WeakMap}return{get:i,dispose:r}}class Qs extends ka{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var us=4,Tc=[0.125,0.215,0.35,0.446,0.526,0.582],Ci=20,Ma=new Qs,Ac=new Pe,Sa=null,Ea=0,wa=0,Ri=(1+Math.sqrt(5))/2,cs=1/Ri,Rc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ri,cs),new N(0,Ri,-cs),new N(cs,0,Ri),new N(-cs,0,Ri),new N(Ri,cs,0),new N(-Ri,cs,0)];class La{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=0.1,i=100){Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0)this._blur(s,0,0,t);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,Ea,wa),e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===301||e.mapping===302)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=Cc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Cc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(s)),this._blurMaterial=Ng(s,e,t)}return i}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,i){let a=new Ot(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,{autoClear:h,toneMapping:u}=c;c.getClearColor(Ac),c.toneMapping=0,c.autoClear=!1;let d=new Ks({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new _t(new Mn,d),y=!1,x=e.background;if(x){if(x.isColor)d.color.copy(x),e.background=null,y=!0}else d.color.copy(Ac),y=!0;for(let f=0;f<6;f++){let m=f%3;if(m===0)a.up.set(0,o[f],0),a.lookAt(l[f],0,0);else if(m===1)a.up.set(0,0,o[f]),a.lookAt(0,l[f],0);else a.up.set(0,o[f],0),a.lookAt(0,0,l[f]);let _=this._cubeSize;if(no(i,m*_,f>2?_:0,_,_),c.setRenderTarget(i),y)c.render(g,a);c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===301||e.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Lc();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Pc();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let o=this._cubeSize;no(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(r,Ma)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Rc[(i-1)%Rc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new _t(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),y=s/g,x=isFinite(s)?1+Math.floor(c*y):Ci;if(x>Ci)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ci}`);let f=[],m=0;for(let E=0;E<Ci;++E){let L=E/y,z=Math.exp(-L*L/2);if(f.push(z),E===0)m+=z;else if(E<x)m+=2*z}for(let E=0;E<f.length;E++)f[E]=f[E]/m;if(u.envMap.value=e.texture,u.samples.value=x,u.weights.value=f,u.latitudinal.value=r==="latitudinal",a)u.poleAxis.value=a;let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let v=this._sizeLods[i],A=3*v*(i>_-us?i-_+us:0),C=4*(this._cubeSize-v);no(t,A,C,3*v,2*v),o.setRenderTarget(t),o.render(h,Ma)}}function Ig(e){let t=[],n=[],i=[],s=e,r=e-us+1+Tc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;if(a>e-us)l=Tc[a-e+us-1];else if(a===0)l=0;i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,y=6,x=3,f=2,m=1,_=new Float32Array(x*y*g),v=new Float32Array(f*y*g),A=new Float32Array(m*y*g);for(let E=0;E<g;E++){let L=E%3*2/3-1,z=E>2?0:-1,M=[L,z,0,L+0.6666666666666666,z,0,L+0.6666666666666666,z+1,0,L,z,0,L+0.6666666666666666,z+1,0,L,z+1,0];_.set(M,x*y*E),v.set(d,f*y*E);let T=[E,E,E,E,E,E];A.set(T,m*y*E)}let C=new Wt;if(C.setAttribute("position",new Gt(_,x)),C.setAttribute("uv",new Gt(v,f)),C.setAttribute("faceIndex",new Gt(A,m)),t.push(C),s>us)s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Cc(e,t,n){let i=new ri(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Ng(e,t,n){let i=new Float32Array(Ci),s=new N(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pc(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lc(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function Dg(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);if(n===null)n=new La(e);return u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),t.set(o,u),u.texture}else if(t.has(o))return t.get(o).texture;else{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){if(n===null)n=new La(e);let d=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)if(o[h]!==void 0)l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);if(c!==void 0)t.delete(l),c.dispose()}function a(){if(t=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:a}}function Ug(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){if(i.isWebGL2)n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance");else n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays");n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);if(s===null)console.warn("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function Og(e,t,n,i){let s={},r=new WeakMap;function a(u){let d=u.target;if(d.index!==null)t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let x=d.morphAttributes[y];for(let f=0,m=x.length;f<m;f++)t.remove(x[f])}d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);if(g)t.remove(g),r.delete(d);if(i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;n.memory.geometries--}function o(u,d){if(s[d.id]===!0)return d;return d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++,d}function l(u){let d=u.attributes;for(let y in d)t.update(d[y],e.ARRAY_BUFFER);let g=u.morphAttributes;for(let y in g){let x=g[y];for(let f=0,m=x.length;f<m;f++)t.update(x[f],e.ARRAY_BUFFER)}}function c(u){let d=[],g=u.index,y=u.attributes.position,x=0;if(g!==null){let _=g.array;x=g.version;for(let v=0,A=_.length;v<A;v+=3){let C=_[v+0],E=_[v+1],L=_[v+2];d.push(C,E,E,L,L,C)}}else if(y!==void 0){let _=y.array;x=y.version;for(let v=0,A=_.length/3-1;v<A;v+=3){let C=v+0,E=v+1,L=v+2;d.push(C,E,E,L,L,C)}}else return;let f=new((sh(d))?Ba:Fa)(d,1);f.version=x;let m=r.get(u);if(m)t.remove(m);r.set(u,f)}function h(u){let d=r.get(u);if(d){let g=u.index;if(g!==null){if(d.version<g.version)c(u)}}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zg(e,t,n,i){let s=i.isWebGL2,r;function a(g){r=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function h(g,y){e.drawElements(r,y,o,g*l),n.update(y,r,1)}function u(g,y,x){if(x===0)return;let f,m;if(s)f=e,m="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,y,o,g*l,x),n.update(y,r,x)}function d(g,y,x){if(x===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<x;m++)this.render(g[m]/l,y[m]);else{f.multiDrawElementsWEBGL(r,y,0,o,g,0,x);let m=0;for(let _=0;_<x;_++)m+=y[_];n.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Fg(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Bg(e,t){return e[0]-t[0]}function kg(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Hg(e,t,n){let i={},s=new Float32Array(8),r=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0,x=r.get(h);if(x===void 0||x.count!==y){let R=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};if(x!==void 0)x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],z=0;if(_===!0)z=1;if(v===!0)z=2;if(A===!0)z=3;let M=h.attributes.position.count*z,T=1;if(M>t.maxTextureSize)T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize;let U=new Float32Array(M*T*4*y),q=new za(U,M,T,y);q.type=1015,q.needsUpdate=!0;let J=z*4;for(let B=0;B<y;B++){let V=C[B],Z=E[B],X=L[B],W=M*T*4*B;for(let j=0;j<V.count;j++){let K=j*J;if(_===!0)a.fromBufferAttribute(V,j),U[W+K+0]=a.x,U[W+K+1]=a.y,U[W+K+2]=a.z,U[W+K+3]=0;if(v===!0)a.fromBufferAttribute(Z,j),U[W+K+4]=a.x,U[W+K+5]=a.y,U[W+K+6]=a.z,U[W+K+7]=0;if(A===!0)a.fromBufferAttribute(X,j),U[W+K+8]=a.x,U[W+K+9]=a.y,U[W+K+10]=a.z,U[W+K+11]=X.itemSize===4?a.w:1}}x={count:y,texture:q,size:new Ve(M,T)},r.set(h,x),h.addEventListener("dispose",R)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];let m=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(e,"morphTargetBaseInfluence",m),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",x.texture,n),u.getUniforms().setValue(e,"morphTargetsTextureSize",x.size)}else{let g=d===void 0?0:d.length,y=i[h.id];if(y===void 0||y.length!==g){y=[];for(let v=0;v<g;v++)y[v]=[v,0];i[h.id]=y}for(let v=0;v<g;v++){let A=y[v];A[0]=v,A[1]=d[v]}y.sort(kg);for(let v=0;v<8;v++)if(v<g&&y[v][1])o[v][0]=y[v][0],o[v][1]=y[v][1];else o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0;o.sort(Bg);let x=h.morphAttributes.position,f=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let A=o[v],C=A[0],E=A[1];if(C!==Number.MAX_SAFE_INTEGER&&E){if(x&&h.getAttribute("morphTarget"+v)!==x[C])h.setAttribute("morphTarget"+v,x[C]);if(f&&h.getAttribute("morphNormal"+v)!==f[C])h.setAttribute("morphNormal"+v,f[C]);s[v]=E,m+=E}else{if(x&&h.hasAttribute("morphTarget"+v)===!0)h.deleteAttribute("morphTarget"+v);if(f&&h.hasAttribute("morphNormal"+v)===!0)h.deleteAttribute("morphNormal"+v);s[v]=0}}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",_),u.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:l}}function Gg(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c)t.update(u),s.set(u,c);if(l.isInstancedMesh){if(l.hasEventListener("dispose",o)===!1)l.addEventListener("dispose",o);if(s.get(l)!==c){if(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,e.ARRAY_BUFFER);s.set(l,c)}}if(l.isSkinnedMesh){let d=l.skeleton;if(s.get(d)!==c)d.update(),s.set(d,c)}return u}function a(){s=new WeakMap}function o(l){let c=l.target;if(c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null)n.remove(c.instanceColor)}return{update:r,dispose:a}}class Wa extends Qt{constructor(e,t,n,i,s,r,a,o,l,c){if(c=c!==void 0?c:1026,c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&c===1026)n=1014;if(n===void 0&&c===1027)n=1020;super(null,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);if(this.compareFunction!==null)t.compareFunction=this.compareFunction;return t}}var dh=new Qt,fh=new Wa(1,1);fh.compareFunction=515;var ph=new za,mh=new oh,gh=new Ha,Ic=[],Nc=[],Dc=new Float32Array(16),Uc=new Float32Array(9),Oc=new Float32Array(4);function ys(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Ic[s];if(r===void 0)r=new Float32Array(s),Ic[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function bt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Mt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function xo(e,t){let n=Nc[t];if(n===void 0)n=new Int32Array(t),Nc[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Wg(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function Vg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(bt(n,t))return;e.uniform2fv(this.addr,t),Mt(n,t)}}function Xg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(bt(n,t))return;e.uniform3fv(this.addr,t),Mt(n,t)}}function qg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(bt(n,t))return;e.uniform4fv(this.addr,t),Mt(n,t)}}function Yg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(bt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mt(n,t)}else{if(bt(n,i))return;Oc.set(i),e.uniformMatrix2fv(this.addr,!1,Oc),Mt(n,i)}}function $g(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(bt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mt(n,t)}else{if(bt(n,i))return;Uc.set(i),e.uniformMatrix3fv(this.addr,!1,Uc),Mt(n,i)}}function Jg(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(bt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mt(n,t)}else{if(bt(n,i))return;Dc.set(i),e.uniformMatrix4fv(this.addr,!1,Dc),Mt(n,i)}}function Zg(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function jg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(bt(n,t))return;e.uniform2iv(this.addr,t),Mt(n,t)}}function Kg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(bt(n,t))return;e.uniform3iv(this.addr,t),Mt(n,t)}}function Qg(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(bt(n,t))return;e.uniform4iv(this.addr,t),Mt(n,t)}}function ex(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function tx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(bt(n,t))return;e.uniform2uiv(this.addr,t),Mt(n,t)}}function nx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(bt(n,t))return;e.uniform3uiv(this.addr,t),Mt(n,t)}}function ix(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(bt(n,t))return;e.uniform4uiv(this.addr,t),Mt(n,t)}}function sx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r=this.type===e.SAMPLER_2D_SHADOW?fh:dh;n.setTexture2D(t||r,s)}function rx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||mh,s)}function ox(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(t||gh,s)}function ax(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||ph,s)}function lx(e){switch(e){case 5126:return Wg;case 35664:return Vg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return $g;case 35676:return Jg;case 5124:case 35670:return Zg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(e,t){e.uniform1fv(this.addr,t)}function hx(e,t){let n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function ux(e,t){let n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function dx(e,t){let n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function fx(e,t){let n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function px(e,t){let n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function mx(e,t){let n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function gx(e,t){e.uniform1iv(this.addr,t)}function xx(e,t){e.uniform2iv(this.addr,t)}function _x(e,t){e.uniform3iv(this.addr,t)}function yx(e,t){e.uniform4iv(this.addr,t)}function vx(e,t){e.uniform1uiv(this.addr,t)}function bx(e,t){e.uniform2uiv(this.addr,t)}function Mx(e,t){e.uniform3uiv(this.addr,t)}function Sx(e,t){e.uniform4uiv(this.addr,t)}function Ex(e,t,n){let i=this.cache,s=t.length,r=xo(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTexture2D(t[a]||dh,r[a])}function wx(e,t,n){let i=this.cache,s=t.length,r=xo(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||mh,r[a])}function Tx(e,t,n){let i=this.cache,s=t.length,r=xo(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTextureCube(t[a]||gh,r[a])}function Ax(e,t,n){let i=this.cache,s=t.length,r=xo(n,s);if(!bt(i,r))e.uniform1iv(this.addr,r),Mt(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||ph,r[a])}function Rx(e){switch(e){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return vx;case 36294:return bx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}class xh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}}class _h{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}}class yh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var Ta=/(\w+)(\])?(\[|\.)?/g;function zc(e,t){e.seq.push(t),e.map[t.id]=t}function Cx(e,t,n){let i=e.name,s=i.length;Ta.lastIndex=0;while(!0){let r=Ta.exec(i),a=Ta.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){zc(n,c===void 0?new xh(o,e,t):new _h(o,e,t));break}else{let u=n.map[o];if(u===void 0)u=new yh(o),zc(n,u);n=u}}}class Js{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Cx(s,r,this)}}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Fc(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Px=37297,Lx=0;function Ix(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Nx(e){let t=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(e),i;if(t===n)i="";else if(t==="p3"&&n==="rec709")i="LinearDisplayP3ToLinearSRGB";else if(t==="rec709"&&n==="p3")i="LinearSRGBToLinearDisplayP3";switch(e){case"srgb-linear":case"display-p3-linear":return[i,"LinearTransferOETF"];case"srgb":case"display-p3":return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Bc(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Ix(e.getShaderSource(t),a)}else return s}function Dx(e,t){let n=Nx(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ux(e,t){let n;switch(t){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ox(e){return[e.extensionDerivatives||!!e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function zx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function Fx(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Bx(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ds(e){return e!==""}function kc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(e){return e.replace(kx,Gx)}var Hx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gx(e,t){let n=ze[t];if(n===void 0){let i=Hx.get(t);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw Error("Can not resolve #include <"+t+">")}return Ia(n)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(e){return e.replace(Wx,Vx)}function Vx(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}function Xx(e){let t="SHADOWMAP_TYPE_BASIC";if(e.shadowMapType===1)t="SHADOWMAP_TYPE_PCF";else if(e.shadowMapType===2)t="SHADOWMAP_TYPE_PCF_SOFT";else if(e.shadowMapType===3)t="SHADOWMAP_TYPE_VSM";return t}function qx(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yx(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function $x(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Jx(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Zx(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Xx(n),c=qx(n),h=Yx(n),u=$x(n),d=Jx(n),g=n.isWebGL2?"":Ox(n),y=zx(n),x=Fx(r),f=s.createProgram(),m,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ds).join(`
`),m.length>0)m+=`
`;if(_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ds).join(`
`),_.length>0)_+=`
`}else m=[Wc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),_=[g,Wc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ze.tonemapping_pars_fragment:"",n.toneMapping!==0?Ux("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Dx("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ds).join(`
`);if(a=Ia(a),a=kc(a,n),a=Hc(a,n),o=Ia(o),o=kc(o,n),o=Hc(o,n),a=Gc(a),o=Gc(o),n.isWebGL2&&n.isRawShaderMaterial!==!0)v=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_;let A=v+m+a,C=v+_+o,E=Fc(s,s.VERTEX_SHADER,A),L=Fc(s,s.FRAGMENT_SHADER,C);if(s.attachShader(f,E),s.attachShader(f,L),n.index0AttributeName!==void 0)s.bindAttribLocation(f,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(f,0,"position");s.linkProgram(f);function z(q){if(e.debug.checkShaderErrors){let J=s.getProgramInfoLog(f).trim(),R=s.getShaderInfoLog(E).trim(),B=s.getShaderInfoLog(L).trim(),V=!0,Z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,f,E,L);else{let X=Bc(s,E,"vertex"),W=Bc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+X+`
`+W)}else if(J!=="")console.warn("THREE.WebGLProgram: Program Info Log:",J);else if(R===""||B==="")Z=!1;if(Z)q.diagnostics={runnable:V,programLog:J,vertexShader:{log:R,prefix:m},fragmentShader:{log:B,prefix:_}}}s.deleteShader(E),s.deleteShader(L),M=new Js(s,f),T=Bx(s,f)}let M;this.getUniforms=function(){if(M===void 0)z(this);return M};let T;this.getAttributes=function(){if(T===void 0)z(this);return T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(U===!1)U=s.getProgramParameter(f,Px);return U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=L,this}var jx=0;class vh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:t,fragmentShader:n}=e,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new bh(e),t.set(e,n);return n}}class bh{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}}function Kx(e,t,n,i,s,r,a){let o=new mo,l=new vh,c=[],{isWebGL2:h,logarithmicDepthBuffer:u,vertexTextures:d,precision:g}=s,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){if(M===0)return"uv";return`uv${M}`}function f(M,T,U,q,J){let R=q.fog,B=J.geometry,V=M.isMeshStandardMaterial?q.environment:null,Z=(M.isMeshStandardMaterial?n:t).get(M.envMap||V),X=!!Z&&Z.mapping===306?Z.image.height:null,W=y[M.type];if(M.precision!==null){if(g=s.getMaxPrecision(M.precision),g!==M.precision)console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead.")}let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=j!==void 0?j.length:0,D=0;if(B.morphAttributes.position!==void 0)D=1;if(B.morphAttributes.normal!==void 0)D=2;if(B.morphAttributes.color!==void 0)D=3;let Y,ie,se,re;if(W){let Ft=vn[W];Y=Ft.vertexShader,ie=Ft.fragmentShader}else Y=M.vertexShader,ie=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);let ce=e.getRenderTarget(),le=J.isInstancedMesh===!0,ue=J.isBatchedMesh===!0,we=!!M.map,I=!!M.matcap,Ke=!!Z,Le=!!M.aoMap,xe=!!M.lightMap,me=!!M.bumpMap,de=!!M.normalMap,Fe=!!M.displacementMap,Ne=!!M.emissiveMap,w=!!M.metalnessMap,b=!!M.roughnessMap,F=M.anisotropy>0,ne=M.clearcoat>0,Q=M.iridescence>0,te=M.sheen>0,Ee=M.transmission>0,fe=F&&!!M.anisotropyMap,_e=ne&&!!M.clearcoatMap,Me=ne&&!!M.clearcoatNormalMap,Oe=ne&&!!M.clearcoatRoughnessMap,ee=Q&&!!M.iridescenceMap,gt=Q&&!!M.iridescenceThicknessMap,Ge=te&&!!M.sheenColorMap,Ce=te&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ve=!!M.specularColorMap,We=!!M.specularIntensityMap,tt=Ee&&!!M.transmissionMap,qe=Ee&&!!M.thicknessMap,nt=!!M.gradientMap,oe=!!M.alphaMap,P=M.alphaTest>0,he=!!M.alphaHash,pe=!!M.extensions,Ae=!!B.attributes.uv1,Se=!!B.attributes.uv2,it=!!B.attributes.uv3,rt=0;if(M.toneMapped){if(ce===null||ce.isXRRenderTarget===!0)rt=e.toneMapping}return{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:ie,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ue,instancing:le,instancingColor:le&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?e.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:"srgb-linear",map:we,matcap:I,envMap:Ke,envMapMode:Ke&&Z.mapping,envMapCubeUVHeight:X,aoMap:Le,lightMap:xe,bumpMap:me,normalMap:de,displacementMap:d&&Fe,emissiveMap:Ne,normalMapObjectSpace:de&&M.normalMapType===1,normalMapTangentSpace:de&&M.normalMapType===0,metalnessMap:w,roughnessMap:b,anisotropy:F,anisotropyMap:fe,clearcoat:ne,clearcoatMap:_e,clearcoatNormalMap:Me,clearcoatRoughnessMap:Oe,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:gt,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:ve,specularIntensityMap:We,transmission:Ee,transmissionMap:tt,thicknessMap:qe,gradientMap:nt,opaque:M.transparent===!1&&M.blending===1,alphaMap:oe,alphaTest:P,alphaHash:he,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:Le&&x(M.aoMap.channel),lightMapUv:xe&&x(M.lightMap.channel),bumpMapUv:me&&x(M.bumpMap.channel),normalMapUv:de&&x(M.normalMap.channel),displacementMapUv:Fe&&x(M.displacementMap.channel),emissiveMapUv:Ne&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:fe&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:tt&&x(M.transmissionMap.channel),thicknessMapUv:qe&&x(M.thicknessMap.channel),alphaMapUv:oe&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:it,pointsUvs:J.isPoints===!0&&!!B.attributes.uv&&(we||oe),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:D,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:rt,useLegacyLights:e._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)==="srgb",premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let T=[];if(M.shaderID)T.push(M.shaderID);else T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let U in M.defines)T.push(U),T.push(M.defines[U]);if(M.isRawShaderMaterial===!1)_(T,M),v(T,M),T.push(e.outputColorSpace);return T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){if(o.disableAll(),T.isWebGL2)o.enable(0);if(T.supportsVertexTextures)o.enable(1);if(T.instancing)o.enable(2);if(T.instancingColor)o.enable(3);if(T.matcap)o.enable(4);if(T.envMap)o.enable(5);if(T.normalMapObjectSpace)o.enable(6);if(T.normalMapTangentSpace)o.enable(7);if(T.clearcoat)o.enable(8);if(T.iridescence)o.enable(9);if(T.alphaTest)o.enable(10);if(T.vertexColors)o.enable(11);if(T.vertexAlphas)o.enable(12);if(T.vertexUv1s)o.enable(13);if(T.vertexUv2s)o.enable(14);if(T.vertexUv3s)o.enable(15);if(T.vertexTangents)o.enable(16);if(T.anisotropy)o.enable(17);if(T.alphaHash)o.enable(18);if(T.batching)o.enable(19);if(M.push(o.mask),o.disableAll(),T.fog)o.enable(0);if(T.useFog)o.enable(1);if(T.flatShading)o.enable(2);if(T.logarithmicDepthBuffer)o.enable(3);if(T.skinning)o.enable(4);if(T.morphTargets)o.enable(5);if(T.morphNormals)o.enable(6);if(T.morphColors)o.enable(7);if(T.premultipliedAlpha)o.enable(8);if(T.shadowMapEnabled)o.enable(9);if(T.useLegacyLights)o.enable(10);if(T.doubleSided)o.enable(11);if(T.flipSided)o.enable(12);if(T.useDepthPacking)o.enable(13);if(T.dithering)o.enable(14);if(T.transmission)o.enable(15);if(T.sheen)o.enable(16);if(T.opaque)o.enable(17);if(T.pointsUvs)o.enable(18);if(T.decodeVideoTexture)o.enable(19);M.push(o.mask)}function A(M){let T=y[M.type],U;if(T){let q=vn[T];U=Hf.clone(q.uniforms)}else U=M.uniforms;return U}function C(M,T){let U;for(let q=0,J=c.length;q<J;q++){let R=c[q];if(R.cacheKey===T){U=R,++U.usedTimes;break}}if(U===void 0)U=new Zx(e,T,M,r),c.push(U);return U}function E(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:A,acquireProgram:C,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:z}}function Qx(){let e=new WeakMap;function t(r){let a=e.get(r);if(a===void 0)a={},e.set(r,a);return a}function n(r){e.delete(r)}function i(r,a,o){e.get(r)[a]=o}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function e0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Vc(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Xc(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u,d,g,y,x,f){let m=e[t];if(m===void 0)m={id:u.id,object:u,geometry:d,material:g,groupOrder:y,renderOrder:u.renderOrder,z:x,group:f},e[t]=m;else m.id=u.id,m.object=u,m.geometry=d,m.material=g,m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=x,m.group=f;return t++,m}function o(u,d,g,y,x,f){let m=a(u,d,g,y,x,f);if(g.transmission>0)i.push(m);else if(g.transparent===!0)s.push(m);else n.push(m)}function l(u,d,g,y,x,f){let m=a(u,d,g,y,x,f);if(g.transmission>0)i.unshift(m);else if(g.transparent===!0)s.unshift(m);else n.unshift(m)}function c(u,d){if(n.length>1)n.sort(u||e0);if(i.length>1)i.sort(d||Vc);if(s.length>1)s.sort(d||Vc)}function h(){for(let u=t,d=e.length;u<d;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function t0(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new Xc,e.set(i,[a]);else if(s>=r.length)a=new Xc,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function n0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Pe};break;case"SpotLight":n={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":n={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function i0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var s0=0;function r0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function o0(e,t){let n=new n0,i=i0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,a=new yt,o=new yt;function l(h,u){let d=0,g=0,y=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let x=0,f=0,m=0,_=0,v=0,A=0,C=0,E=0,L=0,z=0,M=0;h.sort(r0);let T=u===!0?Math.PI:1;for(let q=0,J=h.length;q<J;q++){let R=h[q],{color:B,intensity:V,distance:Z}=R,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=B.r*V*T,g+=B.g*V*T,y+=B.b*V*T;else if(R.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(R.sh.coefficients[W],V);M++}else if(R.isDirectionalLight){let W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){let j=R.shadow,K=i.get(R);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,s.directionalShadow[x]=K,s.directionalShadowMap[x]=X,s.directionalShadowMatrix[x]=R.shadow.matrix,A++}s.directional[x]=W,x++}else if(R.isSpotLight){let W=n.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(V*T),W.distance=Z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,s.spot[m]=W;let j=R.shadow;if(R.map){if(s.spotLightMap[L]=R.map,L++,j.updateMatrices(R),R.castShadow)z++}if(s.spotLightMatrix[m]=j.matrix,R.castShadow){let K=i.get(R);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,s.spotShadow[m]=K,s.spotShadowMap[m]=X,E++}m++}else if(R.isRectAreaLight){let W=n.get(R);W.color.copy(B).multiplyScalar(V),W.halfWidth.set(R.width*0.5,0,0),W.halfHeight.set(0,R.height*0.5,0),s.rectArea[_]=W,_++}else if(R.isPointLight){let W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*T),W.distance=R.distance,W.decay=R.decay,R.castShadow){let j=R.shadow,K=i.get(R);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,s.pointShadow[f]=K,s.pointShadowMap[f]=X,s.pointShadowMatrix[f]=R.shadow.matrix,C++}s.point[f]=W,f++}else if(R.isHemisphereLight){let W=n.get(R);W.skyColor.copy(R.color).multiplyScalar(V*T),W.groundColor.copy(R.groundColor).multiplyScalar(V*T),s.hemi[v]=W,v++}}if(_>0)if(t.isWebGL2)if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2;else s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2;else if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2;else if(e.has("OES_texture_half_float_linear")===!0)s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");s.ambient[0]=d,s.ambient[1]=g,s.ambient[2]=y;let U=s.hash;if(U.directionalLength!==x||U.pointLength!==f||U.spotLength!==m||U.rectAreaLength!==_||U.hemiLength!==v||U.numDirectionalShadows!==A||U.numPointShadows!==C||U.numSpotShadows!==E||U.numSpotMaps!==L||U.numLightProbes!==M)s.directional.length=x,s.spot.length=m,s.rectArea.length=_,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=E+L-z,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=M,U.directionalLength=x,U.pointLength=f,U.spotLength=m,U.rectAreaLength=_,U.hemiLength=v,U.numDirectionalShadows=A,U.numPointShadows=C,U.numSpotShadows=E,U.numSpotMaps=L,U.numLightProbes=M,s.version=s0++}function c(h,u){let d=0,g=0,y=0,x=0,f=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let A=h[_];if(A.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),d++}else if(A.isSpotLight){let C=s.spot[y];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),y++}else if(A.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(A.width*0.5,0,0),C.halfHeight.set(0,A.height*0.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let C=s.point[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(m),g++}else if(A.isHemisphereLight){let C=s.hemi[f];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:s}}function qc(e,t){let n=new o0(e,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function a0(e,t){let n=new WeakMap;function i(r,a=0){let o=n.get(r),l;if(o===void 0)l=new qc(e,t),n.set(r,[l]);else if(a>=o.length)l=new qc(e,t),o.push(l);else l=o[a];return l}function s(){n=new WeakMap}return{get:i,dispose:s}}class Mh extends ai{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sh extends ai{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}var l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function h0(e,t,n){let i=new go,s=new Ve,r=new Ve,a=new At,o=new Mh({depthPacking:3201}),l=new Sh,c={},h=n.maxTextureSize,u={[0]:1,[1]:0,[2]:2},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let y=new Wt;y.setAttribute("position",new Gt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new _t(y,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(E,L,z){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(E.length===0)return;let M=e.getRenderTarget(),T=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),q=e.state;q.setBlending(0),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let J=m!==3&&this.type===3,R=m===3&&this.type!==3;for(let B=0,V=E.length;B<V;B++){let Z=E[B],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y}if(X.map===null||J===!0||R===!0){let K=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(X.map!==null)X.map.dispose();X.map=new ri(s.x,s.y,K),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();let j=X.getViewportCount();for(let K=0;K<j;K++){let D=X.getViewport(K);a.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),q.viewport(a),X.updateMatrices(Z,K),i=X.getFrustum(),A(L,z,X.camera,Z,this.type)}if(X.isPointLightShadow!==!0&&this.type===3)_(X,z);X.needsUpdate=!1}m=this.type,f.needsUpdate=!1,e.setRenderTarget(M,T,U)};function _(E,L){let z=t.update(x);if(d.defines.VSM_SAMPLES!==E.blurSamples)d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0;if(E.mapPass===null)E.mapPass=new ri(s.x,s.y);d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(L,null,z,d,x,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(L,null,z,g,x,null)}function v(E,L,z,M){let T=null,U=z.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)T=U;else if(T=z.isPointLight===!0?l:o,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let q=T.uuid,J=L.uuid,R=c[q];if(R===void 0)R={},c[q]=R;let B=R[J];if(B===void 0)B=T.clone(),R[J]=B,L.addEventListener("dispose",C);T=B}if(T.visible=L.visible,T.wireframe=L.wireframe,M===3)T.side=L.shadowSide!==null?L.shadowSide:L.side;else T.side=L.shadowSide!==null?L.shadowSide:u[L.side];if(T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let q=e.properties.get(T);q.light=z}return T}function A(E,L,z,M,T){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)){if((E.castShadow||E.receiveShadow&&T===3)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld);let J=t.update(E),R=E.material;if(Array.isArray(R)){let B=J.groups;for(let V=0,Z=B.length;V<Z;V++){let X=B[V],W=R[X.materialIndex];if(W&&W.visible){let j=v(E,W,M,T);E.onBeforeShadow(e,E,L,z,J,j,X),e.renderBufferDirect(z,null,J,j,E,X),E.onAfterShadow(e,E,L,z,J,j,X)}}}else if(R.visible){let B=v(E,R,M,T);E.onBeforeShadow(e,E,L,z,J,B,null),e.renderBufferDirect(z,null,J,B,E,null),E.onAfterShadow(e,E,L,z,J,B,null)}}}let q=E.children;for(let J=0,R=q.length;J<R;J++)A(q[J],L,z,M,T)}function C(E){E.target.removeEventListener("dispose",C);for(let z in c){let M=c[z],T=E.target.uuid;if(T in M)M[T].dispose(),delete M[T]}}}function u0(e,t,n){let i=n.isWebGL2;function s(){let P=!1,he=new At,pe=null,Ae=new At(0,0,0,0);return{setMask:function(Se){if(pe!==Se&&!P)e.colorMask(Se,Se,Se,Se),pe=Se},setLocked:function(Se){P=Se},setClear:function(Se,it,rt,vt,Ft){if(Ft===!0)Se*=vt,it*=vt,rt*=vt;if(he.set(Se,it,rt,vt),Ae.equals(he)===!1)e.clearColor(Se,it,rt,vt),Ae.copy(he)},reset:function(){P=!1,pe=null,Ae.set(-1,0,0,0)}}}function r(){let P=!1,he=null,pe=null,Ae=null;return{setTest:function(Se){if(Se)ue(e.DEPTH_TEST);else we(e.DEPTH_TEST)},setMask:function(Se){if(he!==Se&&!P)e.depthMask(Se),he=Se},setFunc:function(Se){if(pe!==Se){switch(Se){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=Se}},setLocked:function(Se){P=Se},setClear:function(Se){if(Ae!==Se)e.clearDepth(Se),Ae=Se},reset:function(){P=!1,he=null,pe=null,Ae=null}}}function a(){let P=!1,he=null,pe=null,Ae=null,Se=null,it=null,rt=null,vt=null,Ft=null;return{setTest:function(Ye){if(!P)if(Ye)ue(e.STENCIL_TEST);else we(e.STENCIL_TEST)},setMask:function(Ye){if(he!==Ye&&!P)e.stencilMask(Ye),he=Ye},setFunc:function(Ye,_n,yn){if(pe!==Ye||Ae!==_n||Se!==yn)e.stencilFunc(Ye,_n,yn),pe=Ye,Ae=_n,Se=yn},setOp:function(Ye,_n,yn){if(it!==Ye||rt!==_n||vt!==yn)e.stencilOp(Ye,_n,yn),it=Ye,rt=_n,vt=yn},setLocked:function(Ye){P=Ye},setClear:function(Ye){if(Ft!==Ye)e.clearStencil(Ye),Ft=Ye},reset:function(){P=!1,he=null,pe=null,Ae=null,Se=null,it=null,rt=null,vt=null,Ft=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},g={},y=new WeakMap,x=[],f=null,m=!1,_=null,v=null,A=null,C=null,E=null,L=null,z=null,M=new Pe(0,0,0),T=0,U=!1,q=null,J=null,R=null,B=null,V=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,j=e.getParameter(e.VERSION);if(j.indexOf("WebGL")!==-1)W=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=W>=1;else if(j.indexOf("OpenGL ES")!==-1)W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=W>=2;let K=null,D={},Y=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),se=new At().fromArray(Y),re=new At().fromArray(ie);function ce(P,he,pe,Ae){let Se=new Uint8Array(4),it=e.createTexture();e.bindTexture(P,it),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let rt=0;rt<pe;rt++)if(i&&(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY))e.texImage3D(he,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,Se);else e.texImage2D(he+rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Se);return it}let le={};if(le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i)le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1);o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(e.DEPTH_TEST),l.setFunc(3),Ne(!1),w(1),ue(e.CULL_FACE),de(0);function ue(P){if(d[P]!==!0)e.enable(P),d[P]=!0}function we(P){if(d[P]!==!1)e.disable(P),d[P]=!1}function I(P,he){if(g[P]!==he){if(e.bindFramebuffer(P,he),g[P]=he,i){if(P===e.DRAW_FRAMEBUFFER)g[e.FRAMEBUFFER]=he;if(P===e.FRAMEBUFFER)g[e.DRAW_FRAMEBUFFER]=he}return!0}return!1}function Ke(P,he){let pe=x,Ae=!1;if(P){if(pe=y.get(he),pe===void 0)pe=[],y.set(he,pe);if(P.isWebGLMultipleRenderTargets){let Se=P.texture;if(pe.length!==Se.length||pe[0]!==e.COLOR_ATTACHMENT0){for(let it=0,rt=Se.length;it<rt;it++)pe[it]=e.COLOR_ATTACHMENT0+it;pe.length=Se.length,Ae=!0}}else if(pe[0]!==e.COLOR_ATTACHMENT0)pe[0]=e.COLOR_ATTACHMENT0,Ae=!0}else if(pe[0]!==e.BACK)pe[0]=e.BACK,Ae=!0;if(Ae)if(n.isWebGL2)e.drawBuffers(pe);else t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe)}function Le(P){if(f!==P)return e.useProgram(P),f=P,!0;return!1}let xe={[100]:e.FUNC_ADD,[101]:e.FUNC_SUBTRACT,[102]:e.FUNC_REVERSE_SUBTRACT};if(i)xe[103]=e.MIN,xe[104]=e.MAX;else{let P=t.get("EXT_blend_minmax");if(P!==null)xe[103]=P.MIN_EXT,xe[104]=P.MAX_EXT}let me={[200]:e.ZERO,[201]:e.ONE,[202]:e.SRC_COLOR,[204]:e.SRC_ALPHA,[210]:e.SRC_ALPHA_SATURATE,[208]:e.DST_COLOR,[206]:e.DST_ALPHA,[203]:e.ONE_MINUS_SRC_COLOR,[205]:e.ONE_MINUS_SRC_ALPHA,[209]:e.ONE_MINUS_DST_COLOR,[207]:e.ONE_MINUS_DST_ALPHA,[211]:e.CONSTANT_COLOR,[212]:e.ONE_MINUS_CONSTANT_COLOR,[213]:e.CONSTANT_ALPHA,[214]:e.ONE_MINUS_CONSTANT_ALPHA};function de(P,he,pe,Ae,Se,it,rt,vt,Ft,Ye){if(P===0){if(m===!0)we(e.BLEND),m=!1;return}if(m===!1)ue(e.BLEND),m=!0;if(P!==5){if(P!==_||Ye!==U){if(v!==100||E!==100)e.blendEquation(e.FUNC_ADD),v=100,E=100;if(Ye)switch(P){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,C=null,L=null,z=null,M.set(0,0,0),T=0,_=P,U=Ye}return}if(Se=Se||he,it=it||pe,rt=rt||Ae,he!==v||Se!==E)e.blendEquationSeparate(xe[he],xe[Se]),v=he,E=Se;if(pe!==A||Ae!==C||it!==L||rt!==z)e.blendFuncSeparate(me[pe],me[Ae],me[it],me[rt]),A=pe,C=Ae,L=it,z=rt;if(vt.equals(M)===!1||Ft!==T)e.blendColor(vt.r,vt.g,vt.b,Ft),M.copy(vt),T=Ft;_=P,U=!1}function Fe(P,he){P.side===2?we(e.CULL_FACE):ue(e.CULL_FACE);let pe=P.side===1;if(he)pe=!pe;Ne(pe),P.blending===1&&P.transparent===!1?de(0):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Ae=P.stencilWrite;if(c.setTest(Ae),Ae)c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):we(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(P){if(q!==P){if(P)e.frontFace(e.CW);else e.frontFace(e.CCW);q=P}}function w(P){if(P!==0){if(ue(e.CULL_FACE),P!==J)if(P===1)e.cullFace(e.BACK);else if(P===2)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else we(e.CULL_FACE);J=P}function b(P){if(P!==R){if(X)e.lineWidth(P);R=P}}function F(P,he,pe){if(P){if(ue(e.POLYGON_OFFSET_FILL),B!==he||V!==pe)e.polygonOffset(he,pe),B=he,V=pe}else we(e.POLYGON_OFFSET_FILL)}function ne(P){if(P)ue(e.SCISSOR_TEST);else we(e.SCISSOR_TEST)}function Q(P){if(P===void 0)P=e.TEXTURE0+Z-1;if(K!==P)e.activeTexture(P),K=P}function te(P,he,pe){if(pe===void 0)if(K===null)pe=e.TEXTURE0+Z-1;else pe=K;let Ae=D[pe];if(Ae===void 0)Ae={type:void 0,texture:void 0},D[pe]=Ae;if(Ae.type!==P||Ae.texture!==he){if(K!==pe)e.activeTexture(pe),K=pe;e.bindTexture(P,he||le[P]),Ae.type=P,Ae.texture=he}}function Ee(){let P=D[K];if(P!==void 0&&P.type!==void 0)e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function fe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){if(se.equals(P)===!1)e.scissor(P.x,P.y,P.z,P.w),se.copy(P)}function tt(P){if(re.equals(P)===!1)e.viewport(P.x,P.y,P.z,P.w),re.copy(P)}function qe(P,he){let pe=u.get(he);if(pe===void 0)pe=new WeakMap,u.set(he,pe);let Ae=pe.get(P);if(Ae===void 0)Ae=e.getUniformBlockIndex(he,P.name),pe.set(P,Ae)}function nt(P,he){let Ae=u.get(he).get(P);if(h.get(he)!==Ae)e.uniformBlockBinding(he,Ae,P.__bindingPointIndex),h.set(he,Ae)}function oe(){if(e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0)e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null);e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},K=null,D={},g={},y=new WeakMap,x=[],f=null,m=!1,_=null,v=null,A=null,C=null,E=null,L=null,z=null,M=new Pe(0,0,0),T=0,U=!1,q=null,J=null,R=null,B=null,V=null,se.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:we,bindFramebuffer:I,drawBuffers:Ke,useProgram:Le,setBlending:de,setMaterial:Fe,setFlipSided:Ne,setCullFace:w,setLineWidth:b,setPolygonOffset:F,setScissorTest:ne,activeTexture:Q,bindTexture:te,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:ye,texImage3D:ve,updateUBOMapping:qe,uniformBlockBinding:nt,texStorage2D:Ge,texStorage3D:Ce,texSubImage2D:Me,texSubImage3D:Oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:gt,scissor:We,viewport:tt,reset:oe}}function d0(e,t,n,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function y(w,b){return g?new OffscreenCanvas(w,b):ho("canvas")}function x(w,b,F,ne){let Q=1;if(w.width>ne||w.height>ne)Q=ne/Math.max(w.width,w.height);if(Q<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let te=b?co:Math.floor,Ee=te(Q*w.width),fe=te(Q*w.height);if(u===void 0)u=y(Ee,fe);let _e=F?y(Ee,fe):u;return _e.width=Ee,_e.height=fe,_e.getContext("2d").drawImage(w,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+fe+")."),_e}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+").");return w}return w}function f(w){return Pa(w.width)&&Pa(w.height)}function m(w){if(o)return!1;return w.wrapS!==1001||w.wrapT!==1001||w.minFilter!==1003&&w.minFilter!==1006}function _(w,b){return w.generateMipmaps&&b&&w.minFilter!==1003&&w.minFilter!==1006}function v(w){e.generateMipmap(w)}function A(w,b,F,ne,Q=!1){if(o===!1)return b;if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=b;if(b===e.RED){if(F===e.FLOAT)te=e.R32F;if(F===e.HALF_FLOAT)te=e.R16F;if(F===e.UNSIGNED_BYTE)te=e.R8}if(b===e.RED_INTEGER){if(F===e.UNSIGNED_BYTE)te=e.R8UI;if(F===e.UNSIGNED_SHORT)te=e.R16UI;if(F===e.UNSIGNED_INT)te=e.R32UI;if(F===e.BYTE)te=e.R8I;if(F===e.SHORT)te=e.R16I;if(F===e.INT)te=e.R32I}if(b===e.RG){if(F===e.FLOAT)te=e.RG32F;if(F===e.HALF_FLOAT)te=e.RG16F;if(F===e.UNSIGNED_BYTE)te=e.RG8}if(b===e.RGBA){let Ee=Q?"linear":et.getTransfer(ne);if(F===e.FLOAT)te=e.RGBA32F;if(F===e.HALF_FLOAT)te=e.RGBA16F;if(F===e.UNSIGNED_BYTE)te=Ee==="srgb"?e.SRGB8_ALPHA8:e.RGBA8;if(F===e.UNSIGNED_SHORT_4_4_4_4)te=e.RGBA4;if(F===e.UNSIGNED_SHORT_5_5_5_1)te=e.RGB5_A1}if(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)t.get("EXT_color_buffer_float");return te}function C(w,b,F){if(_(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006)return Math.log2(Math.max(b.width,b.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return b.mipmaps.length;else return 1}function E(w){if(w===1003||w===1004||w===1005)return e.NEAREST;return e.LINEAR}function L(w){let b=w.target;if(b.removeEventListener("dispose",L),M(b),b.isVideoTexture)h.delete(b)}function z(w){let b=w.target;b.removeEventListener("dispose",z),U(b)}function M(w){let b=i.get(w);if(b.__webglInit===void 0)return;let F=w.source,ne=d.get(F);if(ne){let Q=ne[b.__cacheKey];if(Q.usedTimes--,Q.usedTimes===0)T(w);if(Object.keys(ne).length===0)d.delete(F)}i.remove(w)}function T(w){let b=i.get(w);e.deleteTexture(b.__webglTexture);let F=w.source,ne=d.get(F);delete ne[b.__cacheKey],a.memory.textures--}function U(w){let b=w.texture,F=i.get(w),ne=i.get(b);if(ne.__webglTexture!==void 0)e.deleteTexture(ne.__webglTexture),a.memory.textures--;if(w.depthTexture)w.depthTexture.dispose();if(w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let te=0;te<F.__webglFramebuffer[Q].length;te++)e.deleteFramebuffer(F.__webglFramebuffer[Q][te]);else e.deleteFramebuffer(F.__webglFramebuffer[Q]);if(F.__webglDepthbuffer)e.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)e.deleteFramebuffer(F.__webglFramebuffer[Q]);else e.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer)e.deleteRenderbuffer(F.__webglDepthbuffer);if(F.__webglMultisampledFramebuffer)e.deleteFramebuffer(F.__webglMultisampledFramebuffer);if(F.__webglColorRenderbuffer){for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)if(F.__webglColorRenderbuffer[Q])e.deleteRenderbuffer(F.__webglColorRenderbuffer[Q])}if(F.__webglDepthRenderbuffer)e.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=b.length;Q<te;Q++){let Ee=i.get(b[Q]);if(Ee.__webglTexture)e.deleteTexture(Ee.__webglTexture),a.memory.textures--;i.remove(b[Q])}i.remove(b),i.remove(w)}let q=0;function J(){q=0}function R(){let w=q;if(w>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures);return q+=1,w}function B(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function V(w,b){let F=i.get(w);if(w.isVideoTexture)Fe(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,w,b);return}}n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+b)}function Z(w,b){let F=i.get(w);if(w.version>0&&F.__version!==w.version){se(F,w,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+b)}function X(w,b){let F=i.get(w);if(w.version>0&&F.__version!==w.version){se(F,w,b);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+b)}function W(w,b){let F=i.get(w);if(w.version>0&&F.__version!==w.version){re(F,w,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+b)}let j={[1000]:e.REPEAT,[1001]:e.CLAMP_TO_EDGE,[1002]:e.MIRRORED_REPEAT},K={[1003]:e.NEAREST,[1004]:e.NEAREST_MIPMAP_NEAREST,[1005]:e.NEAREST_MIPMAP_LINEAR,[1006]:e.LINEAR,[1007]:e.LINEAR_MIPMAP_NEAREST,[1008]:e.LINEAR_MIPMAP_LINEAR},D={[512]:e.NEVER,[519]:e.ALWAYS,[513]:e.LESS,[515]:e.LEQUAL,[514]:e.EQUAL,[518]:e.GEQUAL,[516]:e.GREATER,[517]:e.NOTEQUAL};function Y(w,b,F){if(F){if(e.texParameteri(w,e.TEXTURE_WRAP_S,j[b.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,j[b.wrapT]),w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)e.texParameteri(w,e.TEXTURE_WRAP_R,j[b.wrapR]);e.texParameteri(w,e.TEXTURE_MAG_FILTER,K[b.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,K[b.minFilter])}else{if(e.texParameteri(w,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(w,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)e.texParameteri(w,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE);if(b.wrapS!==1001||b.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(e.texParameteri(w,e.TEXTURE_MAG_FILTER,E(b.magFilter)),e.texParameteri(w,e.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==1003&&b.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(b.compareFunction)e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,D[b.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){let ne=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===1003)return;if(b.minFilter!==1005&&b.minFilter!==1008)return;if(b.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(o===!1&&(b.type===1016&&t.has("OES_texture_half_float_linear")===!1))return;if(b.anisotropy>1||i.get(b).__currentAnisotropy)e.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}function ie(w,b){let F=!1;if(w.__webglInit===void 0)w.__webglInit=!0,b.addEventListener("dispose",L);let ne=b.source,Q=d.get(ne);if(Q===void 0)Q={},d.set(ne,Q);let te=B(b);if(te!==w.__cacheKey){if(Q[te]===void 0)Q[te]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,F=!0;Q[te].usedTimes++;let Ee=Q[w.__cacheKey];if(Ee!==void 0){if(Q[w.__cacheKey].usedTimes--,Ee.usedTimes===0)T(b)}w.__cacheKey=te,w.__webglTexture=Q[te].texture}return F}function se(w,b,F){let ne=e.TEXTURE_2D;if(b.isDataArrayTexture||b.isCompressedArrayTexture)ne=e.TEXTURE_2D_ARRAY;if(b.isData3DTexture)ne=e.TEXTURE_3D;let Q=ie(w,b),te=b.source;n.bindTexture(ne,w.__webglTexture,e.TEXTURE0+F);let Ee=i.get(te);if(te.version!==Ee.__version||Q===!0){n.activeTexture(e.TEXTURE0+F);let fe=et.getPrimaries(et.workingColorSpace),_e=b.colorSpace===""?null:et.getPrimaries(b.colorSpace),Me=b.colorSpace===""||fe===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Oe=m(b)&&f(b.image)===!1,ee=x(b.image,Oe,!1,s.maxTextureSize);ee=Ne(b,ee);let gt=f(ee)||o,Ge=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type),ye=A(b.internalFormat,Ge,Ce,b.colorSpace,b.isVideoTexture);Y(ne,b,gt);let ve,We=b.mipmaps,tt=o&&b.isVideoTexture!==!0&&ye!==36196,qe=Ee.__version===void 0||Q===!0,nt=C(b,ee,gt);if(b.isDepthTexture){if(ye=e.DEPTH_COMPONENT,o)if(b.type===1015)ye=e.DEPTH_COMPONENT32F;else if(b.type===1014)ye=e.DEPTH_COMPONENT24;else if(b.type===1020)ye=e.DEPTH24_STENCIL8;else ye=e.DEPTH_COMPONENT16;else if(b.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(b.format===1026&&ye===e.DEPTH_COMPONENT){if(b.type!==1012&&b.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=1014,Ce=r.convert(b.type)}if(b.format===1027&&ye===e.DEPTH_COMPONENT){if(ye=e.DEPTH_STENCIL,b.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,Ce=r.convert(b.type)}if(qe)if(tt)n.texStorage2D(e.TEXTURE_2D,1,ye,ee.width,ee.height);else n.texImage2D(e.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ge,Ce,null)}else if(b.isDataTexture)if(We.length>0&&gt){if(tt&&qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],tt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,Ce,ve.data);else n.texImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,Ge,Ce,ve.data);b.generateMipmaps=!1}else if(tt){if(qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,ee.width,ee.height);n.texSubImage2D(e.TEXTURE_2D,0,0,0,ee.width,ee.height,Ge,Ce,ee.data)}else n.texImage2D(e.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ge,Ce,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){if(tt&&qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,ye,We[0].width,We[0].height,ee.depth);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],b.format!==1023)if(Ge!==null)if(tt)n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,Ge,ve.data,0,0);else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,oe,ye,ve.width,ve.height,ee.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(tt)n.texSubImage3D(e.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,Ge,Ce,ve.data);else n.texImage3D(e.TEXTURE_2D_ARRAY,oe,ye,ve.width,ve.height,ee.depth,0,Ge,Ce,ve.data)}else{if(tt&&qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],b.format!==1023)if(Ge!==null)if(tt)n.compressedTexSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,ve.data);else n.compressedTexImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,ve.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(tt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,Ce,ve.data);else n.texImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,Ge,Ce,ve.data)}else if(b.isDataArrayTexture)if(tt){if(qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,ye,ee.width,ee.height,ee.depth);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Ce,ee.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,Ge,Ce,ee.data);else if(b.isData3DTexture)if(tt){if(qe)n.texStorage3D(e.TEXTURE_3D,nt,ye,ee.width,ee.height,ee.depth);n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Ce,ee.data)}else n.texImage3D(e.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,Ge,Ce,ee.data);else if(b.isFramebufferTexture){if(qe)if(tt)n.texStorage2D(e.TEXTURE_2D,nt,ye,ee.width,ee.height);else{let oe=ee.width,P=ee.height;for(let he=0;he<nt;he++)n.texImage2D(e.TEXTURE_2D,he,ye,oe,P,0,Ge,Ce,null),oe>>=1,P>>=1}}else if(We.length>0&&gt){if(tt&&qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],tt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,Ge,Ce,ve);else n.texImage2D(e.TEXTURE_2D,oe,ye,Ge,Ce,ve);b.generateMipmaps=!1}else if(tt){if(qe)n.texStorage2D(e.TEXTURE_2D,nt,ye,ee.width,ee.height);n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ge,Ce,ee)}else n.texImage2D(e.TEXTURE_2D,0,ye,Ge,Ce,ee);if(_(b,gt))v(ne);if(Ee.__version=te.version,b.onUpdate)b.onUpdate(b)}w.__version=b.version}function re(w,b,F){if(b.image.length!==6)return;let ne=ie(w,b),Q=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+F);let te=i.get(Q);if(Q.version!==te.__version||ne===!0){n.activeTexture(e.TEXTURE0+F);let Ee=et.getPrimaries(et.workingColorSpace),fe=b.colorSpace===""?null:et.getPrimaries(b.colorSpace),_e=b.colorSpace===""||Ee===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Me=b.isCompressedTexture||b.image[0].isCompressedTexture,Oe=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++){if(!Me&&!Oe)ee[oe]=x(b.image[oe],!1,!0,s.maxCubemapSize);else ee[oe]=Oe?b.image[oe].image:b.image[oe];ee[oe]=Ne(b,ee[oe])}let gt=ee[0],Ge=f(gt)||o,Ce=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),ve=A(b.internalFormat,Ce,ye,b.colorSpace),We=o&&b.isVideoTexture!==!0,tt=te.__version===void 0||ne===!0,qe=C(b,gt,Ge);Y(e.TEXTURE_CUBE_MAP,b,Ge);let nt;if(Me){if(We&&tt)n.texStorage2D(e.TEXTURE_CUBE_MAP,qe,ve,gt.width,gt.height);for(let oe=0;oe<6;oe++){nt=ee[oe].mipmaps;for(let P=0;P<nt.length;P++){let he=nt[P];if(b.format!==1023)if(Ce!==null)if(We)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,he.width,he.height,Ce,he.data);else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,ve,he.width,he.height,0,he.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,he.width,he.height,Ce,ye,he.data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,ve,he.width,he.height,0,Ce,ye,he.data)}}}else{if(nt=b.mipmaps,We&&tt){if(nt.length>0)qe++;n.texStorage2D(e.TEXTURE_CUBE_MAP,qe,ve,ee[0].width,ee[0].height)}for(let oe=0;oe<6;oe++)if(Oe){if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Ce,ye,ee[oe].data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,ee[oe].width,ee[oe].height,0,Ce,ye,ee[oe].data);for(let P=0;P<nt.length;P++){let pe=nt[P].image[oe].image;if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,pe.width,pe.height,Ce,ye,pe.data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,ve,pe.width,pe.height,0,Ce,ye,pe.data)}}else{if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce,ye,ee[oe]);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,Ce,ye,ee[oe]);for(let P=0;P<nt.length;P++){let he=nt[P];if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,Ce,ye,he.image[oe]);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,ve,Ce,ye,he.image[oe])}}}if(_(b,Ge))v(e.TEXTURE_CUBE_MAP);if(te.__version=Q.version,b.onUpdate)b.onUpdate(b)}w.__version=b.version}function ce(w,b,F,ne,Q,te){let Ee=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),_e=A(F.internalFormat,Ee,fe,F.colorSpace);if(!i.get(b).__hasExternalTextures){let Oe=Math.max(1,b.width>>te),ee=Math.max(1,b.height>>te);if(Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY)n.texImage3D(Q,te,_e,Oe,ee,b.depth,0,Ee,fe,null);else n.texImage2D(Q,te,_e,Oe,ee,0,Ee,fe,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,w),de(b))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,Q,i.get(F).__webglTexture,0,me(b));else if(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ne,Q,i.get(F).__webglTexture,te);n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(w,b,F){if(e.bindRenderbuffer(e.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let ne=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(F||de(b)){let Q=b.depthTexture;if(Q&&Q.isDepthTexture){if(Q.type===1015)ne=e.DEPTH_COMPONENT32F;else if(Q.type===1014)ne=e.DEPTH_COMPONENT24}let te=me(b);if(de(b))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,ne,b.width,b.height);else e.renderbufferStorageMultisample(e.RENDERBUFFER,te,ne,b.width,b.height)}else e.renderbufferStorage(e.RENDERBUFFER,ne,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let ne=me(b);if(F&&de(b)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,ne,e.DEPTH24_STENCIL8,b.width,b.height);else if(de(b))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ne,e.DEPTH24_STENCIL8,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,w)}else{let ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<ne.length;Q++){let te=ne[Q],Ee=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),_e=A(te.internalFormat,Ee,fe,te.colorSpace),Me=me(b);if(F&&de(b)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,_e,b.width,b.height);else if(de(b))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me,_e,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,_e,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ue(w,b){if(b&&b.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0;V(b.depthTexture,0);let ne=i.get(b.depthTexture).__webglTexture,Q=me(b);if(b.depthTexture.format===1026)if(de(b))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0);else if(b.depthTexture.format===1027)if(de(b))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0);else throw Error("Unknown depthTexture format")}function we(w){let b=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,w)}else if(F){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=e.createRenderbuffer(),le(b.__webglDepthbuffer[ne],w,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=e.createRenderbuffer(),le(b.__webglDepthbuffer,w,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function I(w,b,F){let ne=i.get(w);if(b!==void 0)ce(ne.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(F!==void 0)we(w)}function Ke(w){let b=w.texture,F=i.get(w),ne=i.get(b);if(w.addEventListener("dispose",z),w.isWebGLMultipleRenderTargets!==!0){if(ne.__webglTexture===void 0)ne.__webglTexture=e.createTexture();ne.__version=b.version,a.memory.textures++}let Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,Ee=f(w)||o;if(Q){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let _e=0;_e<b.mipmaps.length;_e++)F.__webglFramebuffer[fe][_e]=e.createFramebuffer()}else F.__webglFramebuffer[fe]=e.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)F.__webglFramebuffer[fe]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(te)if(s.drawBuffers){let fe=w.texture;for(let _e=0,Me=fe.length;_e<Me;_e++){let Oe=i.get(fe[_e]);if(Oe.__webglTexture===void 0)Oe.__webglTexture=e.createTexture(),a.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&de(w)===!1){let fe=te?b:[b];F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){let Me=fe[_e];F.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[_e]);let Oe=r.convert(Me.format,Me.colorSpace),ee=r.convert(Me.type),gt=A(Me.internalFormat,Oe,ee,Me.colorSpace,w.isXRRenderTarget===!0),Ge=me(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ge,gt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,F.__webglColorRenderbuffer[_e])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer)F.__webglDepthRenderbuffer=e.createRenderbuffer(),le(F.__webglDepthRenderbuffer,w,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Q){n.bindTexture(e.TEXTURE_CUBE_MAP,ne.__webglTexture),Y(e.TEXTURE_CUBE_MAP,b,Ee);for(let fe=0;fe<6;fe++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ce(F.__webglFramebuffer[fe][_e],w,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else ce(F.__webglFramebuffer[fe],w,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);if(_(b,Ee))v(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(te){let fe=w.texture;for(let _e=0,Me=fe.length;_e<Me;_e++){let Oe=fe[_e],ee=i.get(Oe);if(n.bindTexture(e.TEXTURE_2D,ee.__webglTexture),Y(e.TEXTURE_2D,Oe,Ee),ce(F.__webglFramebuffer,w,Oe,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,0),_(Oe,Ee))v(e.TEXTURE_2D)}n.unbindTexture()}else{let fe=e.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)if(o)fe=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(n.bindTexture(fe,ne.__webglTexture),Y(fe,b,Ee),o&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ce(F.__webglFramebuffer[_e],w,b,e.COLOR_ATTACHMENT0,fe,_e);else ce(F.__webglFramebuffer,w,b,e.COLOR_ATTACHMENT0,fe,0);if(_(b,Ee))v(fe);n.unbindTexture()}if(w.depthBuffer)we(w)}function Le(w){let b=f(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,Q=F.length;ne<Q;ne++){let te=F[ne];if(_(te,b)){let Ee=w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,fe=i.get(te).__webglTexture;n.bindTexture(Ee,fe),v(Ee),n.unbindTexture()}}}function xe(w){if(o&&w.samples>0&&de(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],{width:F,height:ne}=w,Q=e.COLOR_BUFFER_BIT,te=[],Ee=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(w),_e=w.isWebGLMultipleRenderTargets===!0;if(_e)for(let Me=0;Me<b.length;Me++)n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(te.push(e.COLOR_ATTACHMENT0+Me),w.depthBuffer)te.push(Ee);let Oe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Oe===!1){if(w.depthBuffer)Q|=e.DEPTH_BUFFER_BIT;if(w.stencilBuffer)Q|=e.STENCIL_BUFFER_BIT}if(_e)e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[Me]);if(Oe===!0)e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Ee]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Ee]);if(_e){let ee=i.get(b[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ee,0)}if(e.blitFramebuffer(0,0,F,ne,0,0,F,ne,Q,e.NEAREST),c)e.invalidateFramebuffer(e.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<b.length;Me++){n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,fe.__webglColorRenderbuffer[Me]);let Oe=i.get(b[Me]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,Oe,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function me(w){return Math.min(s.maxSamples,w.samples)}function de(w){let b=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(w){let b=a.render.frame;if(h.get(w)!==b)h.set(w,b),w.update()}function Ne(w,b){let{colorSpace:F,format:ne,type:Q}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===1035)return b;if(F!=="srgb-linear"&&F!=="")if(et.getTransfer(F)==="srgb"){if(o===!1)if(t.has("EXT_sRGB")===!0&&ne===1023)w.format=1035,w.minFilter=1006,w.generateMipmaps=!1;else b=Ua.sRGBToLinear(b);else if(ne!==1023||Q!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",F);return b}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=I,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=de}function f0(e,t,n){let i=n.isWebGL2;function s(r,a=""){let o,l=et.getTransfer(a);if(r===1009)return e.UNSIGNED_BYTE;if(r===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return e.BYTE;if(r===1011)return e.SHORT;if(r===1012)return e.UNSIGNED_SHORT;if(r===1013)return e.INT;if(r===1014)return e.UNSIGNED_INT;if(r===1015)return e.FLOAT;if(r===1016){if(i)return e.HALF_FLOAT;if(o=t.get("OES_texture_half_float"),o!==null)return o.HALF_FLOAT_OES;else return null}if(r===1021)return e.ALPHA;if(r===1023)return e.RGBA;if(r===1024)return e.LUMINANCE;if(r===1025)return e.LUMINANCE_ALPHA;if(r===1026)return e.DEPTH_COMPONENT;if(r===1027)return e.DEPTH_STENCIL;if(r===1035)if(o=t.get("EXT_sRGB"),o!==null)return o.SRGB_ALPHA_EXT;else return null;if(r===1028)return e.RED;if(r===1029)return e.RED_INTEGER;if(r===1030)return e.RG;if(r===1031)return e.RG_INTEGER;if(r===1033)return e.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(l==="srgb")if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)if(o=t.get("WEBGL_compressed_texture_etc1"),o!==null)return o.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(r===37492||r===37496)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===37492)return l==="srgb"?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===37496)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===37808)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===36492)return l==="srgb"?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===1020){if(i)return e.UNSIGNED_INT_24_8;if(o=t.get("WEBGL_depth_texture"),o!==null)return o.UNSIGNED_INT_24_8_WEBGL;else return null}return e[r]!==void 0?e[r]:null}return{convert:s}}class Eh extends Ot{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class si extends Ct{constructor(){super();this.isGroup=!0,this.type="Group"}}var p0={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),f=this._getHandJoint(l,y);if(x!==null)f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius;f.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=0.02,g=0.005;if(l.inputState.pinching&&u>d+g)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=d-g)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(p0)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wh extends Pi{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,g=null,y=t.getContextAttributes(),x=null,f=null,m=[],_=[],v=new Ve,A=null,C=new Ot;C.layers.enable(1),C.viewport=new At;let E=new Ot;E.layers.enable(2),E.viewport=new At;let L=[C,E],z=new Eh;z.layers.enable(1),z.layers.enable(2);let M=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Y=m[D];if(Y===void 0)Y=new lo,m[D]=Y;return Y.getTargetRaySpace()},this.getControllerGrip=function(D){let Y=m[D];if(Y===void 0)Y=new lo,m[D]=Y;return Y.getGripSpace()},this.getHand=function(D){let Y=m[D];if(Y===void 0)Y=new lo,m[D]=Y;return Y.getHandSpace()};function U(D){let Y=_.indexOf(D.inputSource);if(Y===-1)return;let ie=m[Y];if(ie!==void 0)ie.update(D.inputSource,D.frame,l||r),ie.dispatchEvent({type:D.type,data:D.inputSource})}function q(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",J);for(let D=0;D<m.length;D++){let Y=_[D];if(Y===null)continue;_[D]=null,m[D].disconnect(Y)}M=null,T=null,e.setRenderTarget(x),d=null,u=null,h=null,i=null,f=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){if(s=D,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){if(a=D,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",q),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0)await t.makeXRCompatible();if(A=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new ri(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,ie=null,se=null;if(y.depth)se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=y.stencil?1027:1026,ie=y.stencil?1020:1014;let re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(re),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new ri(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Wa(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ce=e.properties.get(f);ce.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function J(D){for(let Y=0;Y<D.removed.length;Y++){let ie=D.removed[Y],se=_.indexOf(ie);if(se>=0)_[se]=null,m[se].disconnect(ie)}for(let Y=0;Y<D.added.length;Y++){let ie=D.added[Y],se=_.indexOf(ie);if(se===-1){for(let ce=0;ce<m.length;ce++)if(ce>=_.length){_.push(ie),se=ce;break}else if(_[ce]===null){_[ce]=ie,se=ce;break}if(se===-1)break}let re=m[se];if(re)re.connect(ie)}}let R=new N,B=new N;function V(D,Y,ie){R.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);let se=R.distanceTo(B),re=Y.projectionMatrix.elements,ce=ie.projectionMatrix.elements,le=re[14]/(re[10]-1),ue=re[14]/(re[10]+1),we=(re[9]+1)/re[5],I=(re[9]-1)/re[5],Ke=(re[8]-1)/re[0],Le=(ce[8]+1)/ce[0],xe=le*Ke,me=le*Le,de=se/(-Ke+Le),Fe=de*-Ke;Y.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Fe),D.translateZ(de),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();let Ne=le+de,w=ue+de,b=xe-Fe,F=me+(se-Fe),ne=we*ue/w*Ne,Q=I*ue/w*Ne;D.projectionMatrix.makePerspective(b,F,ne,Q,Ne,w),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Z(D,Y){if(Y===null)D.matrixWorld.copy(D.matrix);else D.matrixWorld.multiplyMatrices(Y.matrixWorld,D.matrix);D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;if(z.near=E.near=C.near=D.near,z.far=E.far=C.far=D.far,M!==z.near||T!==z.far)i.updateRenderState({depthNear:z.near,depthFar:z.far}),M=z.near,T=z.far;let Y=D.parent,ie=z.cameras;Z(z,Y);for(let se=0;se<ie.length;se++)Z(ie[se],Y);if(ie.length===2)V(z,C,E);else z.projectionMatrix.copy(C.projectionMatrix);X(D,z,Y)};function X(D,Y,ie){if(ie===null)D.matrix.copy(Y.matrixWorld);else D.matrix.copy(ie.matrixWorld),D.matrix.invert(),D.matrix.multiply(Y.matrixWorld);if(D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse),D.isPerspectiveCamera)D.fov=Zs*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(u===null&&d===null)return;return o},this.setFoveation=function(D){if(o=D,u!==null)u.fixedFoveation=D;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=D};let W=null;function j(D,Y){if(c=Y.getViewerPose(l||r),g=Y,c!==null){let ie=c.views;if(d!==null)e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f);let se=!1;if(ie.length!==z.cameras.length)z.cameras.length=0,se=!0;for(let re=0;re<ie.length;re++){let ce=ie[re],le=null;if(d!==null)le=d.getViewport(ce);else{let we=h.getViewSubImage(u,ce);if(le=we.viewport,re===0)e.setRenderTargetTextures(f,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f)}let ue=L[re];if(ue===void 0)ue=new Ot,ue.layers.enable(re),ue.viewport=new At,L[re]=ue;if(ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(le.x,le.y,le.width,le.height),re===0)z.matrix.copy(ue.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(se===!0)z.cameras.push(ue)}}for(let ie=0;ie<m.length;ie++){let se=_[ie],re=m[ie];if(se!==null&&re!==void 0)re.update(se,Y,l||r)}if(W)W(D,Y);if(Y.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:Y});g=null}let K=new uh;K.setAnimationLoop(j),this.setAnimationLoop=function(D){W=D},this.dispose=function(){}}}function m0(e,t){function n(f,m){if(f.matrixAutoUpdate===!0)f.updateMatrix();m.value.copy(f.matrix)}function i(f,m){if(m.color.getRGB(f.fogColor.value,lh(e)),m.isFog)f.fogNear.value=m.near,f.fogFar.value=m.far;else if(m.isFogExp2)f.fogDensity.value=m.density}function s(f,m,_,v,A){if(m.isMeshBasicMaterial)r(f,m);else if(m.isMeshLambertMaterial)r(f,m);else if(m.isMeshToonMaterial)r(f,m),u(f,m);else if(m.isMeshPhongMaterial)r(f,m),h(f,m);else if(m.isMeshStandardMaterial){if(r(f,m),d(f,m),m.isMeshPhysicalMaterial)g(f,m,A)}else if(m.isMeshMatcapMaterial)r(f,m),y(f,m);else if(m.isMeshDepthMaterial)r(f,m);else if(m.isMeshDistanceMaterial)r(f,m),x(f,m);else if(m.isMeshNormalMaterial)r(f,m);else if(m.isLineBasicMaterial){if(a(f,m),m.isLineDashedMaterial)o(f,m)}else if(m.isPointsMaterial)l(f,m,_,v);else if(m.isSpriteMaterial)c(f,m);else if(m.isShadowMaterial)f.color.value.copy(m.color),f.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function r(f,m){if(f.opacity.value=m.opacity,m.color)f.diffuse.value.copy(m.color);if(m.emissive)f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)f.map.value=m.map,n(m.map,f.mapTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform);if(m.bumpMap){if(f.bumpMap.value=m.bumpMap,n(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===1)f.bumpScale.value*=-1}if(m.normalMap){if(f.normalMap.value=m.normalMap,n(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===1)f.normalScale.value.negate()}if(m.displacementMap)f.displacementMap.value=m.displacementMap,n(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias;if(m.emissiveMap)f.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,f.emissiveMapTransform);if(m.specularMap)f.specularMap.value=m.specularMap,n(m.specularMap,f.specularMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest;let _=t.get(m).envMap;if(_)f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio;if(m.lightMap){f.lightMap.value=m.lightMap;let v=e._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*v,n(m.lightMap,f.lightMapTransform)}if(m.aoMap)f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,f.aoMapTransform)}function a(f,m){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map)f.map.value=m.map,n(m.map,f.mapTransform)}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,_,v){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=v*0.5,m.map)f.map.value=m.map,n(m.map,f.uvTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest}function c(f,m){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map)f.map.value=m.map,n(m.map,f.mapTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,0.0001)}function u(f,m){if(m.gradientMap)f.gradientMap.value=m.gradientMap}function d(f,m){if(f.metalness.value=m.metalness,m.metalnessMap)f.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,f.metalnessMapTransform);if(f.roughness.value=m.roughness,m.roughnessMap)f.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,f.roughnessMapTransform);if(t.get(m).envMap)f.envMapIntensity.value=m.envMapIntensity}function g(f,m,_){if(f.ior.value=m.ior,m.sheen>0){if(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)f.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,f.sheenColorMapTransform);if(m.sheenRoughnessMap)f.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,f.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)f.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,f.clearcoatMapTransform);if(m.clearcoatRoughnessMap)f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(f.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1)f.clearcoatNormalScale.value.negate()}}if(m.iridescence>0){if(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap)f.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,f.iridescenceMapTransform);if(m.iridescenceThicknessMap)f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform)}if(m.transmission>0){if(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap)f.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,f.transmissionMapTransform);if(f.thickness.value=m.thickness,m.thicknessMap)f.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,f.thicknessMapTransform);f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)f.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,f.anisotropyMapTransform)}if(f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap)f.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,f.specularColorMapTransform);if(m.specularIntensityMap)f.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,f.specularIntensityMapTransform)}function y(f,m){if(m.matcap)f.matcap.value=m.matcap}function x(f,m){let _=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g0(e,t,n,i){let s={},r={},a=[],o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let A=v.program;i.uniformBlockBinding(_,A)}function c(_,v){let A=s[_.id];if(A===void 0)y(_),A=h(_),s[_.id]=A,_.addEventListener("dispose",f);let C=v.program;i.updateUBOMapping(_,C);let E=t.render.frame;if(r[_.id]!==E)d(_),r[_.id]=E}function h(_){let v=u();_.__bindingPointIndex=v;let A=e.createBuffer(),{__size:C,usage:E}=_;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,C,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,A),A}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],{uniforms:A,__cache:C}=_;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let E=0,L=A.length;E<L;E++){let z=Array.isArray(A[E])?A[E]:[A[E]];for(let M=0,T=z.length;M<T;M++){let U=z[M];if(g(U,E,M,C)===!0){let q=U.__offset,J=Array.isArray(U.value)?U.value:[U.value],R=0;for(let B=0;B<J.length;B++){let V=J[B],Z=x(V);if(typeof V==="number"||typeof V==="boolean")U.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,q+R,U.__data);else if(V.isMatrix3)U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0;else V.toArray(U.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,q,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(_,v,A,C){let E=_.value,L=v+"_"+A;if(C[L]===void 0){if(typeof E==="number"||typeof E==="boolean")C[L]=E;else C[L]=E.clone();return!0}else{let z=C[L];if(typeof E==="number"||typeof E==="boolean"){if(z!==E)return C[L]=E,!0}else if(z.equals(E)===!1)return z.copy(E),!0}return!1}function y(_){let v=_.uniforms,A=0,C=16;for(let L=0,z=v.length;L<z;L++){let M=Array.isArray(v[L])?v[L]:[v[L]];for(let T=0,U=M.length;T<U;T++){let q=M[T],J=Array.isArray(q.value)?q.value:[q.value];for(let R=0,B=J.length;R<B;R++){let V=J[R],Z=x(V),X=A%C;if(X!==0&&C-X<Z.boundary)A+=C-X;q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=Z.storage}}}let E=A%C;if(E>0)A+=C-E;return _.__size=A,_.__cache={},this}function x(_){let v={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")v.boundary=4,v.storage=4;else if(_.isVector2)v.boundary=8,v.storage=8;else if(_.isVector3||_.isColor)v.boundary=16,v.storage=12;else if(_.isVector4)v.boundary=16,v.storage=16;else if(_.isMatrix3)v.boundary=48,v.storage=48;else if(_.isMatrix4)v.boundary=64,v.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return v}function f(_){let v=_.target;v.removeEventListener("dispose",f);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)e.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class _o{constructor(e={}){let{canvas:t=wf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null)u=n.getContextAttributes().alpha;else u=r;let d=new Uint32Array(4),g=new Int32Array(4),y=null,x=null,f=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let _=this,v=!1,A=0,C=0,E=null,L=-1,z=null,M=new At,T=new At,U=null,q=new Pe(0),J=0,{width:R,height:B}=t,V=1,Z=null,X=null,W=new At(0,0,R,B),j=new At(0,0,R,B),K=!1,D=new go,Y=!1,ie=!1,se=null,re=new yt,ce=new Ve,le=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return E===null?V:1}let I=n;function Ke(S,O){for(let H=0;H<S.length;H++){let G=S[H],k=t.getContext(G,O);if(k!==null)return k}return null}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine","three.js r160");if(t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",P,!1),I===null){let O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0)O.shift();if(I=Ke(O,S),I===null)if(Ke(O))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(I.getShaderPrecisionFormat===void 0)I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Le,xe,me,de,Fe,Ne,w,b,F,ne,Q,te,Ee,fe,_e,Me,Oe,ee,gt,Ge,Ce,ye,ve,We;function tt(){Le=new Ug(I),xe=new Cg(I,Le,e),Le.init(xe),ye=new f0(I,Le,xe),me=new u0(I,Le,xe),de=new Fg(I),Fe=new Qx,Ne=new d0(I,Le,me,Fe,xe,ye,de),w=new Lg(_),b=new Dg(_),F=new qf(I,xe),ve=new Ag(I,Le,F,xe),ne=new Og(I,F,de,ve),Q=new Gg(I,ne,F,de),gt=new Hg(I,xe,Ne),Me=new Pg(Fe),te=new Kx(_,w,b,Le,xe,ve,Me),Ee=new m0(_,Fe),fe=new t0,_e=new a0(Le,xe),ee=new Tg(_,w,b,me,Q,u,o),Oe=new h0(_,Q,xe),We=new g0(I,de,xe,me),Ge=new Rg(I,Le,de,xe),Ce=new zg(I,Le,de,xe),de.programs=te.programs,_.capabilities=xe,_.extensions=Le,_.properties=Fe,_.renderLists=fe,_.shadowMap=Oe,_.state=me,_.info=de}tt();let qe=new wh(_,I);this.xr=qe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Le.get("WEBGL_lose_context");if(S)S.loseContext()},this.forceContextRestore=function(){let S=Le.get("WEBGL_lose_context");if(S)S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){if(S===void 0)return;V=S,this.setSize(R,B,!1)},this.getSize=function(S){return S.set(R,B)},this.setSize=function(S,O,H=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(R=S,B=O,t.width=Math.floor(S*V),t.height=Math.floor(O*V),H===!0)t.style.width=S+"px",t.style.height=O+"px";this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(R*V,B*V).floor()},this.setDrawingBufferSize=function(S,O,H){R=S,B=O,V=H,t.width=Math.floor(S*H),t.height=Math.floor(O*H),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,O,H,G){if(S.isVector4)W.set(S.x,S.y,S.z,S.w);else W.set(S,O,H,G);me.viewport(M.copy(W).multiplyScalar(V).floor())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,O,H,G){if(S.isVector4)j.set(S.x,S.y,S.z,S.w);else j.set(S,O,H,G);me.scissor(T.copy(j).multiplyScalar(V).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){me.setScissorTest(K=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,O=!0,H=!0){let G=0;if(S){let k=!1;if(E!==null){let ge=E.texture.format;k=ge===1033||ge===1031||ge===1029}if(k){let ge=E.texture.type,be=ge===1009||ge===1014||ge===1012||ge===1020||ge===1017||ge===1018,Te=ee.getClearColor(),Re=ee.getClearAlpha(),{r:Be,g:Ie,b:De}=Te;if(be)d[0]=Be,d[1]=Ie,d[2]=De,d[3]=Re,I.clearBufferuiv(I.COLOR,0,d);else g[0]=Be,g[1]=Ie,g[2]=De,g[3]=Re,I.clearBufferiv(I.COLOR,0,g)}else G|=I.COLOR_BUFFER_BIT}if(O)G|=I.DEPTH_BUFFER_BIT;if(H)G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if(t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",P,!1),fe.dispose(),_e.dispose(),Fe.dispose(),w.dispose(),b.dispose(),Q.dispose(),ve.dispose(),We.dispose(),te.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",vt),qe.removeEventListener("sessionend",Ft),se)se.dispose(),se=null;Ye.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let S=de.autoReset,O=Oe.enabled,H=Oe.autoUpdate,G=Oe.needsUpdate,k=Oe.type;tt(),de.autoReset=S,Oe.enabled=O,Oe.autoUpdate=H,Oe.needsUpdate=G,Oe.type=k}function P(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){let O=S.target;O.removeEventListener("dispose",he),pe(O)}function pe(S){Ae(S),Fe.remove(S)}function Ae(S){let O=Fe.get(S).programs;if(O!==void 0){if(O.forEach(function(H){te.releaseProgram(H)}),S.isShaderMaterial)te.releaseShaderCache(S)}}this.renderBufferDirect=function(S,O,H,G,k,ge){if(O===null)O=ue;let be=k.isMesh&&k.matrixWorld.determinant()<0,Te=af(S,O,H,G,k);me.setMaterial(G,be);let Re=H.index,Be=1;if(G.wireframe===!0){if(Re=ne.getWireframeAttribute(H),Re===void 0)return;Be=2}let Ie=H.drawRange,De=H.attributes.position,pt=Ie.start*Be,Zt=(Ie.start+Ie.count)*Be;if(ge!==null)pt=Math.max(pt,ge.start*Be),Zt=Math.min(Zt,(ge.start+ge.count)*Be);if(Re!==null)pt=Math.max(pt,0),Zt=Math.min(Zt,Re.count);else if(De!==void 0&&De!==null)pt=Math.max(pt,0),Zt=Math.min(Zt,De.count);let wt=Zt-pt;if(wt<0||wt===1/0)return;ve.setup(k,G,Te,H,Re);let Dn,lt=Ge;if(Re!==null)Dn=F.get(Re),lt=Ce,lt.setIndex(Dn);if(k.isMesh)if(G.wireframe===!0)me.setLineWidth(G.wireframeLinewidth*we()),lt.setMode(I.LINES);else lt.setMode(I.TRIANGLES);else if(k.isLine){let ke=G.linewidth;if(ke===void 0)ke=1;if(me.setLineWidth(ke*we()),k.isLineSegments)lt.setMode(I.LINES);else if(k.isLineLoop)lt.setMode(I.LINE_LOOP);else lt.setMode(I.LINE_STRIP)}else if(k.isPoints)lt.setMode(I.POINTS);else if(k.isSprite)lt.setMode(I.TRIANGLES);if(k.isBatchedMesh)lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)lt.renderInstances(pt,wt,k.count);else if(H.isInstancedBufferGeometry){let ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ta=Math.min(H.instanceCount,ke);lt.renderInstances(pt,wt,ta)}else lt.render(pt,wt)};function Se(S,O,H){if(S.transparent===!0&&S.side===2&&S.forceSinglePass===!1)S.side=1,S.needsUpdate=!0,Dr(S,O,H),S.side=0,S.needsUpdate=!0,Dr(S,O,H),S.side=2;else Dr(S,O,H)}this.compile=function(S,O,H=null){if(H===null)H=S;if(x=_e.get(H),x.init(),m.push(x),H.traverseVisible(function(k){if(k.isLight&&k.layers.test(O.layers)){if(x.pushLight(k),k.castShadow)x.pushShadow(k)}}),S!==H)S.traverseVisible(function(k){if(k.isLight&&k.layers.test(O.layers)){if(x.pushLight(k),k.castShadow)x.pushShadow(k)}});x.setupLights(_._useLegacyLights);let G=new Set;return S.traverse(function(k){let ge=k.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Te=ge[be];Se(Te,H,k),G.add(Te)}else Se(ge,H,k),G.add(ge)}),m.pop(),x=null,G},this.compileAsync=function(S,O,H=null){let G=this.compile(S,O,H);return new Promise((k)=>{function ge(){if(G.forEach(function(be){if(Fe.get(be).currentProgram.isReady())G.delete(be)}),G.size===0){k(S);return}setTimeout(ge,10)}if(Le.get("KHR_parallel_shader_compile")!==null)ge();else setTimeout(ge,10)})};let it=null;function rt(S){if(it)it(S)}function vt(){Ye.stop()}function Ft(){Ye.start()}let Ye=new uh;if(Ye.setAnimationLoop(rt),typeof self<"u")Ye.setContext(self);this.setAnimationLoop=function(S){it=S,qe.setAnimationLoop(S),S===null?Ye.stop():Ye.start()},qe.addEventListener("sessionstart",vt),qe.addEventListener("sessionend",Ft),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(O.parent===null&&O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(qe.enabled===!0&&qe.isPresenting===!0){if(qe.cameraAutoUpdate===!0)qe.updateCamera(O);O=qe.getCamera()}if(S.isScene===!0)S.onBeforeRender(_,S,O,E);if(x=_e.get(S,m.length),x.init(),m.push(x),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),D.setFromProjectionMatrix(re),ie=this.localClippingEnabled,Y=Me.init(this.clippingPlanes,ie),y=fe.get(S,f.length),y.init(),f.push(y),_n(S,O,0,_.sortObjects),y.finish(),_.sortObjects===!0)y.sort(Z,X);if(this.info.render.frame++,Y===!0)Me.beginShadows();let H=x.state.shadowsArray;if(Oe.render(H,S,O),Y===!0)Me.endShadows();if(this.info.autoReset===!0)this.info.reset();if(ee.render(y,S),x.setupLights(_._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let k=0,ge=G.length;k<ge;k++){let be=G[k];yn(y,S,be,be.viewport)}}else yn(y,S,O);if(E!==null)Ne.updateMultisampleRenderTarget(E),Ne.updateRenderTargetMipmap(E);if(S.isScene===!0)S.onAfterRender(_,S,O);if(ve.resetDefaultState(),L=-1,z=null,m.pop(),m.length>0)x=m[m.length-1];else x=null;if(f.pop(),f.length>0)y=f[f.length-1];else y=null};function _n(S,O,H,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD){if(S.autoUpdate===!0)S.update(O)}else if(S.isLight){if(x.pushLight(S),S.castShadow)x.pushShadow(S)}else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){if(G)le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(re);let be=Q.update(S),Te=S.material;if(Te.visible)y.push(S,be,Te,H,le.z,null)}}else if(S.isMesh||S.isLine||S.isPoints){if(!S.frustumCulled||D.intersectsObject(S)){let be=Q.update(S),Te=S.material;if(G){if(S.boundingSphere!==void 0){if(S.boundingSphere===null)S.computeBoundingSphere();le.copy(S.boundingSphere.center)}else{if(be.boundingSphere===null)be.computeBoundingSphere();le.copy(be.boundingSphere.center)}le.applyMatrix4(S.matrixWorld).applyMatrix4(re)}if(Array.isArray(Te)){let Re=be.groups;for(let Be=0,Ie=Re.length;Be<Ie;Be++){let De=Re[Be],pt=Te[De.materialIndex];if(pt&&pt.visible)y.push(S,be,pt,H,le.z,De)}}else if(Te.visible)y.push(S,be,Te,H,le.z,null)}}}let ge=S.children;for(let be=0,Te=ge.length;be<Te;be++)_n(ge[be],O,H,G)}function yn(S,O,H,G){let{opaque:k,transmissive:ge,transparent:be}=S;if(x.setupLightsView(H),Y===!0)Me.setGlobalState(_.clippingPlanes,H);if(ge.length>0)of(k,ge,O,H);if(G)me.viewport(M.copy(G));if(k.length>0)Nr(k,O,H);if(ge.length>0)Nr(ge,O,H);if(be.length>0)Nr(be,O,H);me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function of(S,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let ge=xe.isWebGL2;if(se===null)se=new ri(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:ge?4:0});if(_.getDrawingBufferSize(ce),ge)se.setSize(ce.x,ce.y);else se.setSize(co(ce.x),co(ce.y));let be=_.getRenderTarget();if(_.setRenderTarget(se),_.getClearColor(q),J=_.getClearAlpha(),J<1)_.setClearColor(16777215,0.5);_.clear();let Te=_.toneMapping;_.toneMapping=0,Nr(S,H,G),Ne.updateMultisampleRenderTarget(se),Ne.updateRenderTargetMipmap(se);let Re=!1;for(let Be=0,Ie=O.length;Be<Ie;Be++){let De=O[Be],{object:pt,geometry:Zt,material:wt,group:Dn}=De;if(wt.side===2&&pt.layers.test(G.layers)){let lt=wt.side;wt.side=1,wt.needsUpdate=!0,sc(pt,H,G,Zt,wt,Dn),wt.side=lt,wt.needsUpdate=!0,Re=!0}}if(Re===!0)Ne.updateMultisampleRenderTarget(se),Ne.updateRenderTargetMipmap(se);_.setRenderTarget(be),_.setClearColor(q,J),_.toneMapping=Te}function Nr(S,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ge=S.length;k<ge;k++){let be=S[k],{object:Te,geometry:Re}=be,Be=G===null?be.material:G,Ie=be.group;if(Te.layers.test(H.layers))sc(Te,O,H,Re,Be,Ie)}}function sc(S,O,H,G,k,ge){if(S.onBeforeRender(_,O,H,G,k,ge),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(_,O,H,G,S,ge),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1)k.side=1,k.needsUpdate=!0,_.renderBufferDirect(H,O,G,k,S,ge),k.side=0,k.needsUpdate=!0,_.renderBufferDirect(H,O,G,k,S,ge),k.side=2;else _.renderBufferDirect(H,O,G,k,S,ge);S.onAfterRender(_,O,H,G,k,ge)}function Dr(S,O,H){if(O.isScene!==!0)O=ue;let G=Fe.get(S),k=x.state.lights,ge=x.state.shadowsArray,be=k.state.version,Te=te.getParameters(S,k.state,ge,O,H),Re=te.getProgramCacheKey(Te),Be=G.programs;if(G.environment=S.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(S.isMeshStandardMaterial?b:w).get(S.envMap||G.environment),Be===void 0)S.addEventListener("dispose",he),Be=new Map,G.programs=Be;let Ie=Be.get(Re);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===be)return oc(S,Te),Ie}else Te.uniforms=te.getUniforms(S),S.onBuild(H,Te,_),S.onBeforeCompile(Te,_),Ie=te.acquireProgram(Te,Re),Be.set(Re,Ie),G.uniforms=Te.uniforms;let De=G.uniforms;if(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)De.clippingPlanes=Me.uniform;if(oc(S,Te),G.needsLights=cf(S),G.lightsStateVersion=be,G.needsLights)De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix;return G.currentProgram=Ie,G.uniformsList=null,Ie}function rc(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function oc(S,O){let H=Fe.get(S);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function af(S,O,H,G,k){if(O.isScene!==!0)O=ue;Ne.resetTextureUnits();let ge=O.fog,be=G.isMeshStandardMaterial?O.environment:null,Te=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:"srgb-linear",Re=(G.isMeshStandardMaterial?b:w).get(G.envMap||be),Be=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!H.morphAttributes.position,pt=!!H.morphAttributes.normal,Zt=!!H.morphAttributes.color,wt=0;if(G.toneMapped){if(E===null||E.isXRRenderTarget===!0)wt=_.toneMapping}let Dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=Dn!==void 0?Dn.length:0,ke=Fe.get(G),ta=x.state.lights;if(Y===!0){if(ie===!0||S!==z){let on=S===z&&G.id===L;Me.setState(G,S,on)}}let ht=!1;if(G.version===ke.__version){if(ke.needsLights&&ke.lightsStateVersion!==ta.state.version)ht=!0;else if(ke.outputColorSpace!==Te)ht=!0;else if(k.isBatchedMesh&&ke.batching===!1)ht=!0;else if(!k.isBatchedMesh&&ke.batching===!0)ht=!0;else if(k.isInstancedMesh&&ke.instancing===!1)ht=!0;else if(!k.isInstancedMesh&&ke.instancing===!0)ht=!0;else if(k.isSkinnedMesh&&ke.skinning===!1)ht=!0;else if(!k.isSkinnedMesh&&ke.skinning===!0)ht=!0;else if(k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null)ht=!0;else if(k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null)ht=!0;else if(ke.envMap!==Re)ht=!0;else if(G.fog===!0&&ke.fog!==ge)ht=!0;else if(ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection))ht=!0;else if(ke.vertexAlphas!==Be)ht=!0;else if(ke.vertexTangents!==Ie)ht=!0;else if(ke.morphTargets!==De)ht=!0;else if(ke.morphNormals!==pt)ht=!0;else if(ke.morphColors!==Zt)ht=!0;else if(ke.toneMapping!==wt)ht=!0;else if(xe.isWebGL2===!0&&ke.morphTargetsCount!==lt)ht=!0}else ht=!0,ke.__version=G.version;let Mi=ke.currentProgram;if(ht===!0)Mi=Dr(G,O,k);let ac=!1,Gs=!1,na=!1,Nt=Mi.getUniforms(),Si=ke.uniforms;if(me.useProgram(Mi.program))ac=!0,Gs=!0,na=!0;if(G.id!==L)L=G.id,Gs=!0;if(ac||z!==S){Nt.setValue(I,"projectionMatrix",S.projectionMatrix),Nt.setValue(I,"viewMatrix",S.matrixWorldInverse);let on=Nt.map.cameraPosition;if(on!==void 0)on.setValue(I,le.setFromMatrixPosition(S.matrixWorld));if(xe.logarithmicDepthBuffer)Nt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2));if(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)Nt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0);if(z!==S)z=S,Gs=!0,na=!0}if(k.isSkinnedMesh){Nt.setOptional(I,k,"bindMatrix"),Nt.setOptional(I,k,"bindMatrixInverse");let on=k.skeleton;if(on)if(xe.floatVertexTextures){if(on.boneTexture===null)on.computeBoneTexture();Nt.setValue(I,"boneTexture",on.boneTexture,Ne)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}if(k.isBatchedMesh)Nt.setOptional(I,k,"batchingTexture"),Nt.setValue(I,"batchingTexture",k._matricesTexture,Ne);let ia=H.morphAttributes;if(ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&xe.isWebGL2===!0)gt.update(k,H,Mi);if(Gs||ke.receiveShadow!==k.receiveShadow)ke.receiveShadow=k.receiveShadow,Nt.setValue(I,"receiveShadow",k.receiveShadow);if(G.isMeshGouraudMaterial&&G.envMap!==null)Si.envMap.value=Re,Si.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1;if(Gs){if(Nt.setValue(I,"toneMappingExposure",_.toneMappingExposure),ke.needsLights)lf(Si,na);if(ge&&G.fog===!0)Ee.refreshFogUniforms(Si,ge);Ee.refreshMaterialUniforms(Si,G,V,B,se),Js.upload(I,rc(ke),Si,Ne)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0)Js.upload(I,rc(ke),Si,Ne),G.uniformsNeedUpdate=!1;if(G.isSpriteMaterial)Nt.setValue(I,"center",k.center);if(Nt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(I,"normalMatrix",k.normalMatrix),Nt.setValue(I,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let on=G.uniformsGroups;for(let sa=0,hf=on.length;sa<hf;sa++)if(xe.isWebGL2){let lc=on[sa];We.update(lc,Mi),We.bind(lc,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function lf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function cf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}if(this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,O,H){Fe.get(S.texture).__webglTexture=O,Fe.get(S.depthTexture).__webglTexture=H;let G=Fe.get(S);if(G.__hasExternalTextures=!0,G.__hasExternalTextures){if(G.__autoAllocateDepthBuffer=H===void 0,!G.__autoAllocateDepthBuffer){if(Le.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(S,O){let H=Fe.get(S);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,H=0){E=S,A=O,C=H;let G=!0,k=null,ge=!1,be=!1;if(S){let Re=Fe.get(S);if(Re.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)Ne.setupRenderTarget(S);else if(Re.__hasExternalTextures)Ne.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);let Be=S.texture;if(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)be=!0;let Ie=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget){if(Array.isArray(Ie[O]))k=Ie[O][H];else k=Ie[O];ge=!0}else if(xe.isWebGL2&&S.samples>0&&Ne.useMultisampledRTT(S)===!1)k=Fe.get(S).__webglMultisampledFramebuffer;else if(Array.isArray(Ie))k=Ie[H];else k=Ie;M.copy(S.viewport),T.copy(S.scissor),U=S.scissorTest}else M.copy(W).multiplyScalar(V).floor(),T.copy(j).multiplyScalar(V).floor(),U=K;if(me.bindFramebuffer(I.FRAMEBUFFER,k)&&xe.drawBuffers&&G)me.drawBuffers(S,k);if(me.viewport(M),me.scissor(T),me.setScissorTest(U),ge){let Re=Fe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,H)}else if(be){let Re=Fe.get(S.texture),Be=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Be)}L=-1},this.readRenderTargetPixels=function(S,O,H,G,k,ge,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0)Te=Te[be];if(Te){me.bindFramebuffer(I.FRAMEBUFFER,Te);try{let Re=S.texture,{format:Be,type:Ie}=Re;if(Be!==1023&&ye.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let De=Ie===1016&&(Le.has("EXT_color_buffer_half_float")||xe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ie!==1009&&ye.convert(Ie)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===1015&&(xe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(O>=0&&O<=S.width-G&&(H>=0&&H<=S.height-k))I.readPixels(O,H,G,k,ye.convert(Be),ye.convert(Ie),ge)}finally{let Re=E!==null?Fe.get(E).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,O,H=0){let G=Math.pow(2,-H),k=Math.floor(O.image.width*G),ge=Math.floor(O.image.height*G);Ne.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,S.x,S.y,k,ge),me.unbindTexture()},this.copyTextureToTexture=function(S,O,H,G=0){let k=O.image.width,ge=O.image.height,be=ye.convert(H.format),Te=ye.convert(H.type);if(Ne.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,G,S.x,S.y,k,ge,be,Te,O.image.data);else if(O.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,G,S.x,S.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data);else I.texSubImage2D(I.TEXTURE_2D,G,S.x,S.y,be,Te,O.image);if(G===0&&H.generateMipmaps)I.generateMipmap(I.TEXTURE_2D);me.unbindTexture()},this.copyTextureToTexture3D=function(S,O,H,G,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=S.max.x-S.min.x+1,be=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Re=ye.convert(G.format),Be=ye.convert(G.type),Ie;if(G.isData3DTexture)Ne.setTexture3D(G,0),Ie=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Ne.setTexture2DArray(G,0),Ie=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let De=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Zt=I.getParameter(I.UNPACK_SKIP_PIXELS),wt=I.getParameter(I.UNPACK_SKIP_ROWS),Dn=I.getParameter(I.UNPACK_SKIP_IMAGES),lt=H.isCompressedTexture?H.mipmaps[k]:H.image;if(I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture)I.texSubImage3D(Ie,k,O.x,O.y,O.z,ge,be,Te,Re,Be,lt.data);else if(H.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ie,k,O.x,O.y,O.z,ge,be,Te,Re,lt.data);else I.texSubImage3D(Ie,k,O.x,O.y,O.z,ge,be,Te,Re,Be,lt);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,De),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dn),k===0&&G.generateMipmaps)I.generateMipmap(Ie);me.unbindTexture()},this.initTexture=function(S){if(S.isCubeTexture)Ne.setTextureCube(S,0);else if(S.isData3DTexture)Ne.setTexture3D(S,0);else if(S.isDataArrayTexture||S.isCompressedArrayTexture)Ne.setTexture2DArray(S,0);else Ne.setTexture2D(S,0);me.unbindTexture()},this.resetState=function(){A=0,C=0,E=null,me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e==="display-p3"?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Th extends _o{}Th.prototype.isWebGL1Renderer=!0;class er extends Ct{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)t.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)t.object.backgroundIntensity=this.backgroundIntensity;return t}}class li extends ai{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Yc=new N,$c=new N,Jc=new yt,Aa=new fo,io=new js;class Ah extends Ct{constructor(e=new Wt,t=new li){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yc.fromBufferAttribute(t,i-1),$c.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yc.distanceTo($c);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Jc.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(Jc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new N,c=new N,h=new N,u=new N,d=this.isLineSegments?2:1,g=n.index,x=n.attributes.position;if(g!==null){let f=Math.max(0,r.start),m=Math.min(g.count,r.start+r.count);for(let _=f,v=m-1;_<v;_+=d){let A=g.getX(_),C=g.getX(_+1);if(l.fromBufferAttribute(x,A),c.fromBufferAttribute(x,C),Aa.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(u);if(L<e.near||L>e.far)continue;t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,r.start),m=Math.min(x.count,r.start+r.count);for(let _=f,v=m-1;_<v;_+=d){if(l.fromBufferAttribute(x,_),c.fromBufferAttribute(x,_+1),Aa.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(u);if(C<e.near||C>e.far)continue;t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}var Zc=new N,jc=new N;class Ii extends Ah{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zc.fromBufferAttribute(t,i),jc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zc.distanceTo(jc);e.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}var so=new N,ro=new N,Ra=new N,oo=new ln;class vs extends Wt{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(fs*t),r=e.getIndex(),a=e.getAttribute("position"),o=r?r.count:a.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u={},d=[];for(let g=0;g<o;g+=3){if(r)l[0]=r.getX(g),l[1]=r.getX(g+1),l[2]=r.getX(g+2);else l[0]=g,l[1]=g+1,l[2]=g+2;let{a:y,b:x,c:f}=oo;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),oo.getNormal(Ra),h[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let m=0;m<3;m++){let _=(m+1)%3,v=h[m],A=h[_],C=oo[c[m]],E=oo[c[_]],L=`${v}_${A}`,z=`${A}_${v}`;if(z in u&&u[z]){if(Ra.dot(u[z].normal)<=s)d.push(C.x,C.y,C.z),d.push(E.x,E.y,E.z);u[z]=null}else if(!(L in u))u[L]={index0:l[m],index1:l[_],normal:Ra.clone()}}}for(let g in u)if(u[g]){let{index0:y,index1:x}=u[g];so.fromBufferAttribute(a,y),ro.fromBufferAttribute(a,x),d.push(so.x,so.y,so.z),d.push(ro.x,ro.y,ro.z)}this.setAttribute("position",new qt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Va extends ai{constructor(e){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ni extends ai{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ao(e,t,n){if(!e||!n&&e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function x0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}class tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Rh extends tr{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),y=g*g,x=y*g,f=-u*x+2*u*y-u*g,m=(1+u)*x+(-1.5-2*u)*y+(-0.5+u)*g+1,_=(-1-d)*x+(1.5+d)*y+0.5*g,v=d*x-d*y;for(let A=0;A!==a;++A)s[A]=f*r[c+A]+m*r[l+A]+_*r[o+A]+v*r[h+A];return s}}class Ch extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),h=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*h+r[o+u]*c;return s}}class Ph extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(x0(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let h=a*n,u=h-n,d=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[u+g]||y!==t[d+g]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let h=a*n,u=r*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=2301;class bs extends Sn{}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=2300;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Lh extends Sn{}Lh.prototype.ValueTypeName="color";class Ih extends Sn{}Ih.prototype.ValueTypeName="number";class Nh extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)Li.slerpFlat(s,0,r,l-a,r,l,o);return s}}class yo extends Sn{InterpolantFactoryMethodLinear(e){return new Nh(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.DefaultInterpolation=2301;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Sn{}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=2300;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends Sn{}Dh.prototype.ValueTypeName="vector";class Uh{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],g=l[h+1];if(d.global)d.lastIndex=0;if(d.test(c))return g}return null}}}var _0=new Uh;class Oh{constructor(e){this.manager=e!==void 0?e:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xa extends Ct{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);if(t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0)t.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)t.object.distance=this.distance;if(this.angle!==void 0)t.object.angle=this.angle;if(this.decay!==void 0)t.object.decay=this.decay;if(this.penumbra!==void 0)t.object.penumbra=this.penumbra;if(this.shadow!==void 0)t.object.shadow=this.shadow.toJSON();return t}}var Ca=new yt,Kc=new N,Qc=new N;class zh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};if(this.bias!==0)e.bias=this.bias;if(this.normalBias!==0)e.normalBias=this.normalBias;if(this.radius!==1)e.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)e.mapSize=this.mapSize.toArray();return e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fh extends zh{constructor(){super(new Qs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Di extends Xa{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr extends Xa{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}var qa="\\[\\]\\.:\\/",y0=new RegExp("["+qa+"]","g"),Ya="[^"+qa+"]",v0="[^"+qa.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Ya),M0=/(WCOD+)?/.source.replace("WCOD",v0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ya),E0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ya),w0=new RegExp("^"+b0+M0+S0+E0+"$"),T0=["material","materials","bones","map"];class Bh{constructor(e,t,n){let i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new Qe(e,t,n);else return new Qe.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y0,"")}static parseTrackName(e){let t=w0.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(T0.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=Qe.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.needsUpdate!==void 0)a=this.Versioning.NeedsUpdate;else if(e.matrixWorldNeedsUpdate!==void 0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Bh;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var My=new Float32Array(1);class $a{constructor(e,t,n=0,i=1/0){this.ray=new fo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(eh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Na(e[i],this,n,t);return n.sort(eh),n}}function eh(e,t){return e.distance-t.distance}function Na(e,t,n,i){if(e.layers.test(t.layers))e.raycast(t,n);if(i===!0){let s=e.children;for(let r=0,a=s.length;r<a;r++)Na(s[r],t,n,!0)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="160";var Pt=document.getElementById("c"),ut={w:1,h:1,x:0,y:0},dt=new _o({canvas:Pt,antialias:!0});dt.setPixelRatio(Math.min(devicePixelRatio,2));dt.shadowMap.enabled=!0;dt.shadowMap.type=th;dt.localClippingEnabled=!0;var mt=new er;mt.background=new Pe("#7aa0c4");var A0=Math.atan(1/Math.SQRT2),Ue={azim:Math.PI/4,elev:A0,zoom:80,target:new N(30,15,23)},Xe={azim:Ue.azim,elev:Ue.elev,zoom:Ue.zoom,target:Ue.target.clone()},Hh=45,Ui=Math.tan(Hh*Math.PI/360),vo=2000,$e=new Ot(Hh,1,0.1,4000),Gh={uHorizon:{value:1}},Ja=new _t(new _s(2,2),new bn({uniforms:Gh,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
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
      }`}));Ja.frustumCulled=!1;Ja.renderOrder=-1e9;mt.add(Ja);function Wh(){let e=Math.tan(Ue.elev)/Ui;Gh.uHorizon.value=Math.max(-2,Math.min(2,e))}mt.add(new nr(16777215,0.62));var en=new Di(16777215,0.78);en.castShadow=!0;en.shadow.mapSize.set(4096,4096);en.shadow.normalBias=0.15;en.shadow.bias=-0.0002;mt.add(en);mt.add(en.target);var Vh=new Di(16777215,0.16);Vh.position.set(-6,5,-7);mt.add(Vh);var ir={tail:0},tn=()=>{ir.tail=30},Za=new N,bo=new N,kh=new Map;function hi(e){let t=kh.get(e);if(!t)t=new Pe().setHex(e),kh.set(e,t);return t}var sr=new Ni({vertexColors:!0,side:gs}),ja=new Ni({vertexColors:!0,transparent:!0,opacity:0.55,side:gs,depthWrite:!1});ja.shadowSide=ih;var Xh=new Ks({colorWrite:!1,side:gs}),Oi=new _t(new _s(8000,8000),new Va({opacity:0.32}));Oi.rotation.x=-Math.PI/2;Oi.position.y=-0.1;Oi.receiveShadow=!0;Oi.renderOrder=-1;mt.add(Oi);var En=new si;mt.add(En);var kn=new si;mt.add(kn);var nn=new Ii(new vs(new Mn(1,1,1)),new li({color:10994876,depthTest:!1}));nn.visible=!1;nn.renderOrder=999;mt.add(nn);var zi=new Ii(new Wt,new li({vertexColors:!0,transparent:!0,depthTest:!1}));zi.renderOrder=998;zi.visible=!1;mt.add(zi);var Yt=new $a,wn=new Ve,ui=new N,rr=new N;var Fi=(e,t,n)=>e+65536+(t+65536)*131072+(n+65536)*131072*131072,cn=(e,t)=>({x:e.x+t.x,y:e.y+t.y,z:e.z+t.z});function Ze(e,t){let{x:n,y:i,z:s}=e;switch(t&3){case 1:return{x:-s,y:i,z:n};case 2:return{x:-n,y:i,z:-s};case 3:return{x:s,y:i,z:-n};default:return{x:n,y:i,z:s}}}var Hn=(e,t)=>({rot:e.rot+t.rot&3,off:cn(Ze(t.off,e.rot),e.off)}),Ka=(e)=>{let t=4-(e.rot&3)&3,n=Ze(e.off,t);return{rot:t,off:{x:-n.x,y:-n.y,z:-n.z}}},Ss=(e)=>e.slice(1).reduce((t,n)=>Hn(t,{off:n.pos,rot:n.rot}),{off:{x:0,y:0,z:0},rot:0}),Gn=(e)=>"#"+(e&16777215).toString(16).padStart(6,"0"),di=(e)=>e<0?-Math.round(-e):Math.round(e),Qa=1,Es=()=>`n${Qa++}`,ws=()=>Qa,Mo=(e)=>{Qa=e};var ot=(e,t,n,i,s,r,a)=>({x0:e,y0:t,z0:n,x1:i,y1:s,z1:r,c:a}),or=(e,t,n,i)=>t>=e.x0&&t<e.x1&&n>=e.y0&&n<e.y1&&i>=e.z0&&i<e.z1,ar=(e,t,n,i)=>({x0:e.x0+t,y0:e.y0+n,z0:e.z0+i,x1:e.x1+t,y1:e.y1+n,z1:e.z1+i,c:e.c});function C0(e,t,n){let i=Math.max(e.x0,t.x0),s=Math.max(e.y0,t.y0),r=Math.max(e.z0,t.z0),a=Math.min(e.x1,t.x1),o=Math.min(e.y1,t.y1),l=Math.min(e.z1,t.z1);if(i>=a||s>=o||r>=l){n.push(e);return}let c=e.c;if(e.x0<i)n.push({...e,x1:i});if(a<e.x1)n.push({...e,x0:a});if(e.y0<s)n.push({x0:i,y0:e.y0,z0:e.z0,x1:a,y1:s,z1:e.z1,c});if(o<e.y1)n.push({x0:i,y0:o,z0:e.z0,x1:a,y1:e.y1,z1:e.z1,c});if(e.z0<r)n.push({x0:i,y0:s,z0:e.z0,x1:a,y1:o,z1:r,c});if(l<e.z1)n.push({x0:i,y0:s,z0:l,x1:a,y1:o,z1:e.z1,c})}function Bi(e,t){let n=[];for(let i of e)C0(i,t,n);return n}function P0(e,t){for(let n=0;n<e.length;){let i=e[n];if(i.c!==t.c){n++;continue}let s=i.y0===t.y0&&i.y1===t.y1,r=i.z0===t.z0&&i.z1===t.z1,a=i.x0===t.x0&&i.x1===t.x1;if(s&&r&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(a&&r&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(a&&s&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{n++;continue}e.splice(n,1),n=0}e.push(t)}function el(e,t,n){let i=Bi(e,t);return P0(i,{...t,c:n}),i}function qh(e,t,n,i,s){let r=-1;for(let h=0;h<e.length;h++)if(or(e[h],t,n,i)){r=h;break}if(r===-1)return null;let a=e[r].c;if(a===s)return null;let o=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,g=h.y0<u.y1&&u.y0<h.y1,y=h.z0<u.z1&&u.z0<h.z1;return g&&y&&(h.x1===u.x0||u.x1===h.x0)||d&&y&&(h.y1===u.y0||u.y1===h.y0)||d&&g&&(h.z1===u.z0||u.z1===h.z0)},l=new Set([r]),c=[r];while(c.length){let h=e[c.pop()];for(let u=0;u<e.length;u++)if(!l.has(u)&&e[u].c===a&&o(h,e[u]))l.add(u),c.push(u)}return e.map((h,u)=>l.has(u)?{...h,c:s}:h)}function lr(e,t){let n=[];for(let i of e){let s=Math.max(i.x0,t.x0),r=Math.max(i.y0,t.y0),a=Math.max(i.z0,t.z0),o=Math.min(i.x1,t.x1),l=Math.min(i.y1,t.y1),c=Math.min(i.z1,t.z1);if(s<o&&r<l&&a<c)n.push({x0:s,y0:r,z0:a,x1:o,y1:l,z1:c,c:i.c})}return n}function Yh(e,t){for(let n of e){let i=(n.x1-n.x0)*(n.y1-n.y0)*(n.z1-n.z0);t.set(n.c,(t.get(n.c)||0)+i)}}function Lt(e,t){for(let n of e){if(n.x0<t.min.x)t.min.x=n.x0;if(n.y0<t.min.y)t.min.y=n.y0;if(n.z0<t.min.z)t.min.z=n.z0;if(n.x1>t.max.x)t.max.x=n.x1;if(n.y1>t.max.y)t.max.y=n.y1;if(n.z1>t.max.z)t.max.z=n.z1}}function $t(e,t,n){let i=Ze({x:e.x0,y:e.y0,z:e.z0},t),s=Ze({x:e.x1-1,y:e.y1-1,z:e.z1-1},t);return{x0:Math.min(i.x,s.x)+n.x,y0:Math.min(i.y,s.y)+n.y,z0:Math.min(i.z,s.z)+n.z,x1:Math.max(i.x,s.x)+n.x+1,y1:Math.max(i.y,s.y)+n.y+1,z1:Math.max(i.z,s.z)+n.z+1,c:e.c}}var L0=16,Vt=(e)=>Math.floor(e/L0);function $h(e){if(!e.length)return()=>!1;let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let x of e){if(x.x0<t)t=x.x0;if(x.y0<n)n=x.y0;if(x.z0<i)i=x.z0;if(x.x1>s)s=x.x1;if(x.y1>r)r=x.y1;if(x.z1>a)a=x.z1}let o=Vt(t),l=Vt(n),c=Vt(i),h=Vt(s-1)-o+1,u=Vt(r-1)-l+1,d=Vt(a-1)-c+1,g=Array.from({length:h*u*d},()=>[]),y=(x,f,m)=>((x-o)*u+(f-l))*d+(m-c);for(let x of e)for(let f=Vt(x.x0);f<=Vt(x.x1-1);f++)for(let m=Vt(x.y0);m<=Vt(x.y1-1);m++)for(let _=Vt(x.z0);_<=Vt(x.z1-1);_++)g[y(f,m,_)].push(x);return(x,f,m)=>{let _=Vt(x),v=Vt(f),A=Vt(m);if(_<o||v<l||A<c)return!1;if(_-o>=h||v-l>=u||A-c>=d)return!1;for(let C of g[y(_,v,A)])if(or(C,x,f,m))return!0;return!1}}var Jh=(e,t,n,i)=>e.some((s)=>or(s,t,n,i));function cr(e,t,n,i,s){if(!e.length||!t.length)return!1;let r={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};Lt(e,r);let a=r.min.x+n,o=r.min.y+i,l=r.min.z+s,c=r.max.x+n,h=r.max.y+i,u=r.max.z+s;for(let d of t)if(a<d.x1&&d.x0<c&&o<d.y1&&d.y0<h&&l<d.z1&&d.z0<u&&e.some((g)=>g.x0+n<d.x1&&d.x0<g.x1+n&&g.y0+i<d.y1&&d.y0<g.y1+i&&g.z0+s<d.z1&&d.z0<g.z1+s))return!0;return!1}var I0=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],Kh=3,hr=2,fi=Kh*hr,Zh=0.5;class So{a=new Float32Array(4096);n=0;push3(e,t,n){if(this.n+3>this.a.length){let i=new Float32Array(this.a.length*2);i.set(this.a),this.a=i}this.a[this.n++]=e,this.a[this.n++]=t,this.a[this.n++]=n}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}}function jh(e,t,n,i,s,r){let a=2*hr+1;for(let o=0;o<n;o++){let l=o*s,c=0;for(let h=0;h<=hr&&h<i;h++)c+=e[l+h*r];for(let h=0;h<i;h++){t[l+h*r]=c/a;let u=h+hr+1,d=h-hr;if(u<i)c+=e[l+u*r];if(d>=0)c-=e[l+d*r]}}}function Ts(e,t,n){let i=new So,s=new So,r=new So,a=e.map((_)=>[_.x0,_.y0,_.z0]),o=e.map((_)=>[_.x1,_.y1,_.z1]),l=[0,1,2].map(()=>new Map),c=[0,1,2].map(()=>new Map),h=(_,v,A)=>{let C=_.get(v);if(C)C.push(A);else _.set(v,[A])};for(let _=0;_<e.length;_++)for(let v=0;v<3;v++)h(l[v],a[_][v],_),h(c[v],o[_][v],_);let u=[],d=16,g=(_)=>Math.floor(_/d),y=[],x=[0,0,0],f=[0,0,0];if(n&&e.length){let _=[1/0,1/0,1/0],v=[-1/0,-1/0,-1/0];for(let A=0;A<e.length;A++)for(let C=0;C<3;C++){if(a[A][C]<_[C])_[C]=a[A][C];if(o[A][C]>v[C])v[C]=o[A][C]}f=_.map(g),x=v.map((A,C)=>g(A-1)-f[C]+1),y=Array.from({length:x[0]*x[1]*x[2]},()=>[]);for(let A=0;A<e.length;A++)for(let C=g(a[A][0]);C<=g(o[A][0]-1);C++)for(let E=g(a[A][1]);E<=g(o[A][1]-1);E++)for(let L=g(a[A][2]);L<=g(o[A][2]-1);L++)y[((C-f[0])*x[1]+(E-f[1]))*x[2]+(L-f[2])].push(A)}for(let _=0;_<e.length;_++){let v=t(e[_].c),{r:A,g:C,b:E}=v,L=a[_],z=o[_];for(let M of I0){let{a:T,u:U,v:q}=M,J=M.hi?z[T]:L[T],R=M.hi?J:J-1,B=[];for(let re of(M.hi?l:c)[T].get(J)??u){let ce=Math.max(a[re][U],L[U]),le=Math.min(o[re][U],z[U]),ue=Math.max(a[re][q],L[q]),we=Math.min(o[re][q],z[q]);if(ce<le&&ue<we)B.push([ce,ue,le,we])}let V=[[L[U],L[q],z[U],z[q]]];for(let re of B){let ce=[];for(let le of V){let ue=Math.max(le[0],re[0]),we=Math.max(le[1],re[1]),I=Math.min(le[2],re[2]),Ke=Math.min(le[3],re[3]);if(ue>=I||we>=Ke){ce.push(le);continue}if(le[0]<ue)ce.push([le[0],le[1],ue,le[3]]);if(I<le[2])ce.push([I,le[1],le[2],le[3]]);if(le[1]<we)ce.push([ue,le[1],I,we]);if(Ke<le[3])ce.push([ue,Ke,I,le[3]])}if(V=ce,!V.length)break}let Z=[0,0,0];Z[T]=J;let X=null,W=0,j=0,K=0,D=()=>{W=L[U]-fi,j=L[q]-fi;let re=z[U]-L[U]+2*fi+1;K=z[q]-L[q]+2*fi+1;let ce=new Float32Array(re*K),le=g(R)-f[T],ue=!1;if(le>=0&&le<x[T]){let I=[0,0,0];I[T]=le;let Ke=Math.min(g(W+re-1)-f[U],x[U]-1),Le=Math.min(g(j+K-1)-f[q],x[q]-1);for(let xe=Math.max(g(W)-f[U],0);xe<=Ke;xe++){I[U]=xe;for(let me=Math.max(g(j)-f[q],0);me<=Le;me++){I[q]=me;for(let de of y[(I[0]*x[1]+I[1])*x[2]+I[2]]){if(a[de][T]>R||o[de][T]<=R)continue;let Fe=Math.max(a[de][U],W),Ne=Math.min(o[de][U],W+re),w=Math.max(a[de][q],j),b=Math.min(o[de][q],j+K);for(let F=Fe;F<Ne;F++)ce.fill(1,(F-W)*K+(w-j),(F-W)*K+(b-j));ue=ue||Fe<Ne&&w<b}}}}if(!ue)return X=ce;let we=new Float32Array(re*K);for(let I=0;I<Kh;I++)jh(ce,we,re,K,K,1),jh(we,ce,K,re,1,K);return X=ce},Y=(re,ce)=>{if(!n)return 1;let ue=(X??D())[(re-W)*K+(ce-j)];return Zh+(1-Zh)*(1-ue)},ie=(re,ce,le)=>{Z[U]=re,Z[q]=ce,i.push3(Z[0],Z[1],Z[2]),s.push3(M.n[0],M.n[1],M.n[2]),r.push3(A*le,C*le,E*le)},se=(re,ce,le,ue)=>{let we=Y(re,ce),I=Y(le,ce),Ke=Y(le,ue),Le=Y(re,ue);ie(re,ce,we),ie(le,ce,I),ie(le,ue,Ke),ie(re,ce,we),ie(le,ue,Ke),ie(re,ue,Le)};for(let re of V){let[ce,le,ue,we]=re;if(!n){se(ce,le,ue,we);continue}let I=ce+fi,Ke=ue-fi,Le=le+fi,xe=we-fi;if(I>=Ke||Le>=xe){for(let me=ce;me<ue;me++)for(let de=le;de<we;de++)se(me,de,me+1,de+1);continue}for(let me=ce;me<ue;me++){for(let de=le;de<Le;de++)se(me,de,me+1,de+1);for(let de=xe;de<we;de++)se(me,de,me+1,de+1)}for(let me=Le;me<xe;me++){for(let de=ce;de<I;de++)se(de,me,de+1,me+1);for(let de=Ke;de<ue;de++)se(de,me,de+1,me+1)}se(I,Le,Ke,xe)}}}if(!i.length)return null;let m=new Wt;return m.setAttribute("position",new Gt(i.trimmed(),3)),m.setAttribute("normal",new Gt(s.trimmed(),3)),m.setAttribute("color",new Gt(r.trimmed(),3)),m}var Eo=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],Qh={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},ki=()=>({type:"object",id:Es(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),Wn=(e="")=>({type:"scene",id:Es(),name:e,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function pi(e){let t={id:Es(),name:e.name,pos:{...e.pos},rot:e.rot,vis:e.vis};return e.type==="object"?{type:"object",...t,boxes:e.boxes.map((n)=>({...n}))}:{type:"scene",...t,children:e.children.map(pi)}}var Vn=(e)=>p.context.children.find((t)=>t.id===e);function Xt(e,t=p.root,n=[]){if(n.push(t),t===e)return n.slice();if(t.type==="scene")for(let i of t.children){let s=Xt(e,i,n);if(s)return s}return n.pop(),null}function zt(e,t=p.root){if(t.id===e)return t;if(t.type==="scene")for(let n of t.children){let i=zt(e,n);if(i)return i}return null}function hn(e){let t=Xt(e);return t&&t.length>1?t[t.length-2]:null}function Hi(e,t){if(e===t)return!0;if(e.type!=="scene")return!1;return e.children.some((n)=>Hi(n,t))}var As=()=>Ss(p.path),Rs=(e)=>Ss(Xt(e)||[p.root]),ft=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),Jt=(e)=>e.max.x<e.min.x;function ur(e,t,n,i){if(e.type==="object")for(let s of e.boxes)i.push($t(s,n,t));else for(let s of e.children)ur(s,cn(t,Ze(s.pos,n)),n+s.rot&3,i);return i}function sn(e,t,n,i){if(e.type==="object")Lt(e.boxes.map((s)=>$t(s,n,t)),i);else for(let s of e.children)sn(s,cn(t,Ze(s.pos,n)),n+s.rot&3,i);return i}function tl(e,t,n){n.length=0;let i=Math.max(1,Math.ceil((t-e)/6));for(let s=0;s<=i;s++)n.push(e+(t-e)*s/i)}var nl=(e,t)=>Math.max(1,Math.ceil((t-e)/6))+1,tu=(e)=>nl(e.x0,e.x1)*nl(e.y0,e.y1)*nl(e.z0,e.z1);function Gi(e,t,n,i){if(tu(e)<=1536){n.push(e),i.push(t);return}let s=e.x1-e.x0,r=e.y1-e.y0,a=e.z1-e.z0;if(s>=r&&s>=a){let o=e.x0+(s>>1);Gi({...e,x1:o},t,n,i),Gi({...e,x0:o},t,n,i)}else if(r>=a){let o=e.y0+(r>>1);Gi({...e,y1:o},t,n,i),Gi({...e,y0:o},t,n,i)}else{let o=e.z0+(a>>1);Gi({...e,z1:o},t,n,i),Gi({...e,z0:o},t,n,i)}}function D0(e,t,n,i){for(let s=0;s<e.length;s++){let r=e[s];if(r[0]<=t&&r[1]<=n&&r[2]<=i)return}for(let s=e.length-1;s>=0;s--){let r=e[s];if(t<=r[0]&&n<=r[1]&&i<=r[2])e.splice(s,1)}e.push([t,n,i])}function U0(e,t,n,i,s,r,a,o,l,c){let h=e.length,u=new Float64Array(h),d=new Float64Array(h),g=new Float64Array(h),y=new Float64Array(h),x=new Float64Array(h),f=new Float64Array(h),m=1/0,_=-1/0,v=1/0,A=-1/0,C=1/0,E=-1/0;for(let J=0;J<h;J++){let R=e[J];if(r.x>=0)u[J]=R.x0,d[J]=R.x1;else u[J]=R.x1,d[J]=R.x0;if(r.y>=0)g[J]=R.y0,y[J]=R.y1;else g[J]=R.y1,y[J]=R.y0;if(r.z>=0)x[J]=R.z0,f[J]=R.z1;else x[J]=R.z1,f[J]=R.z0;if(R.x0<m)m=R.x0;if(R.x1>_)_=R.x1;if(R.y0<v)v=R.y0;if(R.y1>A)A=R.y1;if(R.z0<C)C=R.z0;if(R.z1>E)E=R.z1}let L=r.x!==0?1/r.x:0,z=r.y!==0?1/r.y:0,M=r.z!==0?1/r.z:0,T=[],U=[],q=[];for(let J=i;J<s;J++){let R=t[J];if((r.x>0?_<=R.x0:r.x<0?m>=R.x1:_<=R.x0||m>=R.x1)||(r.y>0?A<=R.y0:r.y<0?v>=R.y1:A<=R.y0||v>=R.y1)||(r.z>0?E<=R.z0:r.z<0?C>=R.z1:E<=R.z0||C>=R.z1))continue;let B=n[J];tl(R.x0,R.x1,T),tl(R.y0,R.y1,U),tl(R.z0,R.z1,q);for(let V of T)for(let Z of U)for(let X of q){let W=1/0;if(L!==0)W=((r.x>0?B.x1:B.x0)-V)*L;if(z!==0){let D=((r.y>0?B.y1:B.y0)-Z)*z;if(D<W)W=D}if(M!==0){let D=((r.z>0?B.z1:B.z0)-X)*M;if(D<W)W=D}let j=1/0,K=!1;for(let D=0;D<h;D++){let Y=-1/0,ie=1/0;if(L===0){if(V<=u[D]||V>=d[D])continue}else{let se=(u[D]-V)*L,re=(d[D]-V)*L;if(se>Y)Y=se;if(re<ie)ie=re}if(z===0){if(Z<=g[D]||Z>=y[D])continue}else{let se=(g[D]-Z)*z,re=(y[D]-Z)*z;if(se>Y)Y=se;if(re<ie)ie=re}if(M===0){if(X<=x[D]||X>=f[D])continue}else{let se=(x[D]-X)*M,re=(f[D]-X)*M;if(se>Y)Y=se;if(re<ie)ie=re}if(Y>=ie)continue;if(Y>W+0.001){if(Y<j)j=Y}else if(ie>W+0.001){K=!0;break}}if(K||j===1/0)continue;D0(c,Math.floor((V+j*r.x)*a),Math.floor((Z+j*r.y)*o),Math.floor((X+j*r.z)*l))}}}function eu(e,t){let n=[0],i=0;while(i<e.length){let r=e[i][t];do i++;while(i<e.length&&e[i][t]===r);n.push(i)}if(n.length<=48)return n;let s=new Set;for(let r=0;r<48;r++)s.add(n[Math.floor(r*(n.length-1)/47)]);return[...s]}function O0(e,t,n,i,s){let r={x:1/0,y:1/0,z:1/0};if(!e.length||!t.length)return r;t.sort((d,g)=>d[0]-g[0]||d[1]-g[1]||d[2]-g[2]);let a=[];e:for(let d of t){for(let g of a)if(g[1]<=d[1]&&g[2]<=d[2])continue e;a.push(d)}let o=e.map((d)=>[Math.min(d.x0*n,d.x1*n),Math.max(d.x0*n,d.x1*n),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*s,d.z1*s),Math.max(d.z0*s,d.z1*s)]),l=(d,g,y)=>{let x=0;for(let f of o){let m=Math.min(f[1],d)-f[0];if(m<=0)continue;let _=Math.min(f[3],g)-f[2];if(_<=0)continue;let v=Math.min(f[5],y)-f[4];if(v>0)x+=m*_*v}return x},c=a.slice().sort((d,g)=>g[0]-d[0]),h=-1,u={...r};for(let d of eu(c,0)){let g=d===0?1/0:c[d-1][0]-0.01,y=c.slice(d).sort((f,m)=>m[2]-f[2]),x=Array(y.length+1).fill(1/0);for(let f=y.length-1;f>=0;f--)x[f]=Math.min(x[f+1],y[f][1]);for(let f of eu(y,2)){let m=f===0?1/0:y[f-1][2]-0.01,_=x[f]===1/0?1/0:x[f]-0.01,v=l(g,_,m);if(v>h)h=v,u.x=g,u.y=_,u.z=m}}return u}function nu(e,t,n,i,s,r){let a=[],o=[];for(let x of t)Gi(x,x,a,o);let l=[],c=0,h=0;for(let x=0;x<a.length;x++)if(h+=tu(a[x]),h>=1536||x===a.length-1)l.push([c,x+1]),c=x+1,h=0;let u=[];for(let x=0;x<e.length;x++)for(let f=0;f<n.length;f++)for(let m=0;m<l.length;m++)u.push([x,f,m]);let d=e.map(()=>[]),g=0,y=null;return{step(x){while(g<u.length){let[f,m,_]=u[g++],[v,A]=l[_];if(U0(e[f],a,o,v,A,n[m],i,s,r,d[f]),g<u.length&&x())return!1}return!0},cuts(){return y??=e.map((x,f)=>O0(x,d[f],i,s,r)),y}}}function wo(e,t){wn.x=(e-ut.x)/ut.w*2-1,wn.y=-((t-ut.y)/ut.h)*2+1}var il=()=>{if(!p.pickMeshes.length)return null;return Yt.setFromCamera(wn,$e),Yt.intersectObjects(p.pickMeshes,!1)[0]??null};function sl(){let e=il();return e?e.object.userData.childId??null:null}var iu=new Rt(new N(0,1,0),0);function dr(e){if(Yt.setFromCamera(wn,$e),iu.constant=-e,Yt.ray.intersectPlane(iu,ui))return{x:Math.floor(ui.x),y:e,z:Math.floor(ui.z)};return null}var ou=(e,t)=>({x:Math.floor(e.x-t.x*0.5),y:Math.floor(e.y-t.y*0.5),z:Math.floor(e.z-t.z*0.5)}),z0=new N;function Wi(){let e=il();if(!e)return null;let t=p.editXform.off,n=Ze({x:e.point.x-t.x,y:e.point.y-t.y,z:e.point.z-t.z},-p.editXform.rot),i={x:0,y:1,z:0};if(e.face){let r=z0.copy(e.face.normal).transformDirection(e.object.matrixWorld);i=Ze({x:r.x,y:r.y,z:r.z},-p.editXform.rot)}let s=ou(n,i);return{cell:s,addCell:{x:s.x+Math.round(i.x),y:s.y+Math.round(i.y),z:s.z+Math.round(i.z)}}}function au(){let e=il();if(!e)return dr(0);return ou(e.point,e.face?e.face.normal:{x:0,y:1,z:0})}function Vi(e){let t=dr(e+p.editXform.off.y);if(!t)return null;let n=Ze({x:t.x-p.editXform.off.x,y:0,z:t.z-p.editXform.off.z},-p.editXform.rot);return{x:Math.round(n.x),y:e,z:Math.round(n.z)}}var su=(e,t)=>({x:e===0?t:0,y:e===1?t:0,z:e===2?t:0}),ru=new Rt;function lu(e,t){let n=p.editXform.off,i=p.editXform.rot,s=Ze(su(e,1),i),r=cn(Ze(su(e,t),i),n);if(Yt.setFromCamera(wn,$e),ru.setComponents(s.x,s.y,s.z,-(s.x*r.x+s.y*r.y+s.z*r.z)),!Yt.ray.intersectPlane(ru,ui))return null;let a=Ze({x:ui.x-n.x,y:ui.y-n.y,z:ui.z-n.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};if(e===0)o.x=t;else if(e===1)o.y=t;else o.z=t;return o}var Tn=(e,t,n)=>{let i=Ze({x:e,y:t,z:n},p.editXform.rot);return new N(i.x+p.editXform.off.x,i.y+p.editXform.off.y,i.z+p.editXform.off.z)};function rl(e=Wi()){if(p.tool==="add")return e?e.addCell:Vi(0);return e?e.cell:null}var F0=new Pe(10994876),B0=new Pe(6055805),k0=new Pe(13619151),fr=null,To=[],ol=()=>{fr=null};function Xn(){An=null,p.liveMeas=null,mi()}function al(){if(fr)return fr;let e=[],t;if(p.editObject)e.push(...p.editObject.boxes),t=Tn;else Rn(p.root,{x:0,y:0,z:0},0,null,null,(o,l,c,h)=>{if(h)for(let u of o.boxes)e.push($t(u,c,l))}),t=(o,l,c)=>new N(o,l,c);let n=ft();Lt(e,n);let i=e.length===0,s={x:n.min.x,y:n.min.y,z:n.min.z},r={x:n.max.x-1,y:n.max.y-1,z:n.max.z-1};return fr={has:e.length>64?$h(e):(o,l,c)=>Jh(e,o,l,c),mn:s,mx:r,toW:t,empty:i},fr}function cu(){let e=al();if(e.empty)return null;let t=null;if(p.editObject){let n=Wi();t=n?{...n.cell}:Vi(0)}else t=au();if(!t)return null;return{x:Math.max(e.mn.x,Math.min(e.mx.x,t.x)),y:Math.max(e.mn.y,Math.min(e.mx.y,t.y)),z:Math.max(e.mn.z,Math.min(e.mx.z,t.z))}}function H0(e){let t=al(),n=["x","y","z"],i=[];for(let s=0;s<3;s++){let r=n[s],a=n[(s+1)%3],o=n[(s+2)%3],l=t.mn[r],c=t.mx[r],h=[e.x,e.y,e.z],u=(g)=>(h[s]=g,t.has(h[0],h[1],h[2])),d=l;while(d<=c){let g=u(d),y=d;while(y+1<=c&&u(y+1)===g)y++;let x=(f)=>{let m={};return m[r]=f,m[a]=e[a]+0.5,m[o]=e[o]+0.5,t.toW(m.x,m.y,m.z)};i.push({a:x(d),b:x(y+1),mid:x((d+y+1)/2),len:y-d+1,filled:g}),d=y+1}}return i}function ll(e,t,n,i,s,r,a,o,l=!1){let c=i-e,h=s-t,u=r-n,d=(g,y,x,f,m,_,v,A)=>({a:a(g,y,x),b:a(f,m,_),mid:a((g+f)/2,(y+m)/2,(x+_)/2),len:v,filled:!0,nolabel:!A,gray:l});return[d(e,t,n,i,t,n,c,c>=o),d(e,t,n,e,t,r,u,u>=o),d(e,t,n,e,s,n,h,h>=o),d(i,t,n,i,t,r,0,!1),d(e,t,r,i,t,r,0,!1),d(e,s,n,i,s,n,0,!1),d(e,s,n,e,s,r,0,!1),d(i,s,n,i,s,r,0,!1),d(e,s,r,i,s,r,0,!1),d(i,t,n,i,s,n,0,!1),d(e,t,r,e,s,r,0,!1),d(i,t,r,i,s,r,0,!1)]}var An=null;function hu(){let e=cu();if(!e)return;An=An&&An.x===e.x&&An.y===e.y&&An.z===e.z?null:e,Ao()}function uu(){if(!An)return;An=null,Ao()}function G0(e,t){let n=al();return ll(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z),Math.max(e.x,t.x)+1,Math.max(e.y,t.y)+1,Math.max(e.z,t.z)+1,n.toW,1,!0)}function Ao(){let e=cu();p.liveMeas=e?An?G0(An,e):H0(e):null,mi()}function mi(){let e=document.getElementById("measure");e.innerHTML="",To=[];let t=[],n=[];if(p.liveMeas)for(let s of p.liveMeas){let r=s.gray?k0:s.filled?F0:B0;if(t.push(s.a.x,s.a.y,s.a.z,s.b.x,s.b.y,s.b.z),n.push(r.r,r.g,r.b,r.r,r.g,r.b),s.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(s.filled?"":" empty"),a.textContent=String(s.len),e.appendChild(a),To.push({el:a,w:s.mid})}zi.geometry.dispose();let i=new Wt;i.setAttribute("position",new qt(t,3)),i.setAttribute("color",new qt(n,3)),zi.geometry=i,zi.visible=t.length>0}function du(){if(!To.length)return;for(let e of To){if(rr.copy(e.w).project($e),Math.abs(rr.z)>1){e.el.style.display="none";continue}e.el.style.display="",e.el.style.left=(rr.x*0.5+0.5)*ut.w+"px",e.el.style.top=(-rr.y*0.5+0.5)*ut.h+"px"}}var cl=new N(40,150,30).normalize();function W0(e){if(Jt(e))return;let t=(e.min.x+e.max.x)/2,n=(e.min.y+e.max.y)/2,i=(e.min.z+e.max.z)/2,s=0.5*Math.hypot(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z)+8,r=s+130;en.position.set(t+cl.x*r,n+cl.y*r,i+cl.z*r),en.target.position.set(t,n,i),en.target.updateMatrixWorld();let a=en.shadow.camera;a.left=-s,a.right=s,a.top=s,a.bottom=-s,a.near=Math.max(1,r-s-20),a.far=r+s+20,a.updateProjectionMatrix(),en.shadow.normalBias=4*s/en.shadow.mapSize.x}var gn=[];function V0(){let e=new Set;for(let t of gn){mt.remove(t);let n=t.geometry;if(n&&!e.has(n))n.dispose(),e.add(n)}gn=[];for(let t of dl)t.dispose();if(dl=[],Is=[],_i=null,gi.vox=-1,Ro=[],ml(),En.clear(),Ls)cancelAnimationFrame(Ls),Ls=0;rn=null}var Ro=[],rn=null,Ls=0,Cs=null;function ml(){if(!Cs)return;En.remove(Cs),Cs.geometry.dispose(),Cs.material.dispose(),Cs=null}function hl(e,t,{tier:n="opaque",childId:i}={}){if(!e.length)return null;let s=n!=="opaque",r=Ts(e,t,!s);if(!r)return null;let a=new _t(r,n==="temp"?ja:sr);if(a.castShadow=!0,a.receiveShadow=!0,mt.add(a),gn.push(a),s){a.renderOrder=2;let o=new _t(r,Xh);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,mt.add(o),gn.push(o)}if(i!=null)a.userData.childId=i,p.pickMeshes.push(a),(p.childMeshes[i]||(p.childMeshes[i]=[])).push(a);return a}var Is=[],dl=[],fl=[],gi={q:-1,b:-1,vox:-1},X0=6707534;function fu(e){let t=Ts(e,hi,!0);if(!t)return;let n=[new Rt(new N(-1,0,0),1e9),new Rt(new N(0,-1,0),1e9),new Rt(new N(0,0,-1),1e9)],i=new Ni({vertexColors:!0,side:gs,clippingPlanes:n,clipShadows:!0}),s=new _t(t,i);s.castShadow=s.receiveShadow=!0,mt.add(s),gn.push(s);let r=new Ni({color:X0,side:nh,clippingPlanes:n}),a=new _t(t,r);mt.add(a),gn.push(a),dl.push(i,r);let o=ft();Lt(e,o),Is.push({boxes:e,aabb:o,planes:n})}var q0=8,pu=6,xi=[-90,-60,-30,0,30,60,90],Ps=Math.PI/180,Y0=5,_i=null;function $0(e,t){let n=e<=1?1:-1,i=e===0||e===3?1:-1,s=t>=3?1:-1,r=(l,c)=>{let h=Math.cos(c*Ps);return{x:h*Math.sin(l*Ps),y:Math.sin(c*Ps),z:h*Math.cos(l*Ps)}},a=[r(e*90,xi[t]),r(e*90,xi[t+1]),r(e*90+90,xi[t]),r(e*90+90,xi[t+1]),r(e*90+45,(xi[t]+xi[t+1])/2)],o=fl;if(p.editObject)o=o.concat(p.editObject.boxes.map((l)=>$t(l,p.editXform.rot,p.editXform.off)));_i={job:nu(Is.map((l)=>l.boxes),o,a,n,s,i),sgx:n,sgy:s,sgz:i}}function gu(){if(!Is.length){_i=null;return}let e=(Ue.azim/Ps%360+360)%360,t=Ue.elev/Ps,{q:n,b:i}=gi,s=n*90+45;if(n<0||Math.abs(((e-s)%360+540)%360-180)>45+q0)n=Math.min(3,Math.floor(e/90));if(i<0||t<xi[i]-pu||t>xi[i+1]+pu)i=Math.max(0,Math.min(5,Math.floor((t+90)/30)));if(n!==gi.q||i!==gi.b||p.voxVer!==gi.vox)gi.q=n,gi.b=i,gi.vox=p.voxVer,$0(n,i);if(!_i)return;let r=performance.now();if(!_i.job.step(()=>performance.now()-r>Y0)){tn();return}let{sgx:a,sgy:o,sgz:l}=_i,c=_i.job.cuts();_i=null;for(let h=0;h<Is.length;h++){let u=Is[h],d=c[h],g=(y,x,f,m)=>Math.min(m,(y>0?f:-x)+4);u.planes[0].normal.set(-a,0,0),u.planes[0].constant=g(a,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-o,0),u.planes[1].constant=g(o,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-l),u.planes[2].constant=g(l,u.aabb.min.z,u.aabb.max.z,d.z)}tn()}function Rn(e,t,n,i,s,r){if(e===p.editObject||e.vis==="hidden")return;let a=s??(e.vis==="deemphasized"?e.id:null);if(e.type==="object")r(e,t,n,i,a);else for(let o of e.children)Rn(o,cn(t,Ze(o.pos,n)),n+o.rot&3,e===p.context?o.id:i,a,r)}var ul=(e,t)=>{let n=e.get(t);if(!n)e.set(t,n=[]);return n},mu=(e,t,n,i)=>{for(let s of e.boxes)i.push($t(s,n,t));return i};function xu(){let{off:e,rot:t}=p.editXform;if(En.position.set(e.x,e.y,e.z),En.rotation.set(0,-t*Math.PI/2,0),En.updateMatrixWorld(!0),rn){En.remove(rn),rn.geometry.dispose();let r=gn.indexOf(rn);if(r>=0)gn.splice(r,1)}let n=p.sel3d,i=n&&n.lifted?p.editObject.boxes.concat(n.boxes):p.editObject.boxes,s=Ts(i,hi,!0);if(rn=s?new _t(s,sr):null,rn)rn.castShadow=rn.receiveShadow=!0,En.add(rn),gn.push(rn);if(p.pickMeshes=rn?[rn,...Ro]:[...Ro],n)J0(n.region);else ml()}function J0(e){ml();let t=new Mn(e.x1-e.x0,e.y1-e.y0,e.z1-e.z0),n=new Ii(new vs(t),new li({color:16766073,depthTest:!1}));t.dispose(),n.position.set((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2),n.renderOrder=1000,En.add(n),Cs=n}function yi(){if(Ls)return;Ls=requestAnimationFrame(()=>{Ls=0,xu(),tn()})}function Co(){p.voxVer++,ol(),yi()}function gl(e,t){p.editObject.boxes=el(p.editObject.boxes,e,t),Co()}function pr(e){p.editObject.boxes=Bi(p.editObject.boxes,e),Co()}function Po(e){let t=p.editObject.boxes;for(let n of e)t=el(t,n,n.c);p.editObject.boxes=t,Co()}function _u(e,t){let n=qh(p.editObject.boxes,e.x,e.y,e.z,t);if(!n)return!1;return p.editObject.boxes=n,Co(),!0}function yu(){if(!gn.length)return null;Yt.setFromCamera(wn,$e);let e=Yt.intersectObjects(gn,!1)[0];if(!e)return null;let t=Yt.ray.direction,n=Math.floor(e.point.x+t.x*0.5),i=Math.floor(e.point.y+t.y*0.5),s=Math.floor(e.point.z+t.z*0.5),r=(o,l,c)=>{let h=Ze({x:n-l.x,y:i-l.y,z:s-l.z},-c);for(let u of o)if(or(u,h.x,h.y,h.z))return u.c;return null};if(p.editObject){let o=r(p.editObject.boxes,p.editXform.off,p.editXform.rot);if(o!=null)return o}let a=null;return Rn(p.root,{x:0,y:0,z:0},0,null,null,(o,l,c)=>{if(a==null)a=r(o.boxes,l,c)}),a}var pl=new Set;function vi(e){for(let t of pl)if(e.has(t)!==p.selection.has(t)){St();return}vu()}function St(){V0(),p.pickMeshes=[],p.childMeshes={},p.childBox={},pl.clear(),p.voxVer++,ol();let e={x:0,y:0,z:0},t=ft();if(p.editObject){p.editXform=Hn(As(),{off:p.editObject.pos,rot:p.editObject.rot});let n=[],i=new Map;Rn(p.root,e,0,null,null,(r,a,o,l,c)=>mu(r,a,o,c?ul(i,c):n)),Lt(n,t);let s=hl(n,hi,{tier:"temp"});Ro=s?[s]:[];for(let r of i.values())Lt(r,t),fu(r);fl=n,xu(),sn(p.editObject,p.editXform.off,p.editXform.rot,t)}else{let n=new Map,i=new Map,s=[],r=[];Rn(p.root,e,0,null,null,(a,o,l,c,h)=>{let u=mu(a,o,l,[]);Lt(u,t);let d=h;if(c){if(d){if(pl.add(c),p.selection.has(c))d=null}Lt(u,p.childBox[c]||(p.childBox[c]=ft()))}if(d)ul(i,d).push(...u);else if(r.push(...u),c)ul(n,c).push(...u);else s.push(...u)}),hl(s,hi,{tier:"temp"});for(let[a,o]of n)hl(o,hi,{childId:a});for(let a of i.values())fu(a);fl=r}p.sceneBox=t,W0(t),vu(),tn()}function Z0(e,t,n){let i=new Mn(t.x-e.x,t.y-e.y,t.z-e.z),s=new Ii(new vs(i),new li({color:n,depthTest:!1}));return s.position.set((e.x+t.x)/2,(e.y+t.y)/2,(e.z+t.z)/2),s.renderOrder=999,i.dispose(),s}function vu(){for(let e of kn.children)e.geometry?.dispose?.();if(kn.clear(),kn.position.set(0,0,0),p.editObject)return;for(let e of p.selection){let t=p.childBox[e];if(t&&!Jt(t))kn.add(Z0(t.min,t.max,15787730))}}function st(e,t={},...n){let i=document.createElement(e);if(Object.assign(i,t),n.length)i.append(...n);return i}var mr=new N,bu=new N,Mu=new N,Su=new N;function xl(e){return Su.set(e.x,e.y,e.z).applyMatrix4($e.matrixWorldInverse),2*Math.max(0.001,-Su.z)*Ui/ut.h}function Eu(e,t){let n=Ue.zoom/ut.h;bu.setFromMatrixColumn($e.matrixWorld,0),Mu.setFromMatrixColumn($e.matrixWorld,1),Xe.target.addScaledVector(bu,-e*n),Xe.target.addScaledVector(Mu,t*n)}function wu(e,t){Xe.azim-=e*0.012,Xe.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,Xe.elev+t*0.012))}function Lo(e){if(Jt(e))return;Xe.target.set((e.min.x+e.max.x)/2,(e.min.y+e.max.y)/2,(e.min.z+e.max.z)/2);let t=0.5*Math.hypot(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z),n=(i)=>2.3*t*Ui*Math.sqrt(1+i*i)/i;Xe.zoom=Math.max(8,Math.min(vo,Math.max(n(Ui),n(Ui*(ut.w/ut.h)))))}function qn(){let e=ft();if(p.editObject){if(sn(p.editObject,p.editXform.off,p.editXform.rot,e),Jt(e)){let t=p.editXform.off;Xe.target.set(t.x,t.y+6,t.z),Xe.zoom=41;return}}else for(let t in p.childBox){let n=p.childBox[t];e.min.x=Math.min(e.min.x,n.min.x),e.min.y=Math.min(e.min.y,n.min.y),e.min.z=Math.min(e.min.z,n.min.z),e.max.x=Math.max(e.max.x,n.max.x),e.max.y=Math.max(e.max.y,n.max.y),e.max.z=Math.max(e.max.z,n.max.z)}if(Jt(e)){Xe.target.set(0,1,0),Xe.zoom=23;return}Lo(e)}function Io(e){if(e===p.root){qn();return}let t=Rs(e);Lo(sn(e,t.off,t.rot,ft()))}function Tu(){Ue.azim+=(Xe.azim-Ue.azim)*0.22,Ue.elev+=(Xe.elev-Ue.elev)*0.22,Ue.zoom+=(Xe.zoom-Ue.zoom)*0.25,Ue.target.lerp(Xe.target,0.25);let e=Math.cos(Ue.elev),t=Math.sin(Ue.elev);mr.set(e*Math.sin(Ue.azim),t,e*Math.cos(Ue.azim));let n=Ue.zoom/(2*Ui);$e.position.copy(Ue.target).addScaledVector(mr,n);let i=uo.clamp((Math.abs(Ue.elev)-1.45)/(Math.PI/2-1.45),0,1);if(bo.set(-Math.sin(Ue.azim),0,-Math.cos(Ue.azim)),Ue.elev<0)bo.negate();Za.set(0,1,0).lerp(bo,i),$e.up.copy(Za.normalize()),$e.lookAt(Ue.target),$e.aspect=ut.w/ut.h;let s=$e.position,r=1/0,a=-1/0,o=(h,u,d)=>{let g=(s.x-h)*mr.x+(s.y-u)*mr.y+(s.z-d)*mr.z;if(g<r)r=g;if(g>a)a=g},l=(h,u=0,d=0,g=0)=>{for(let y of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let f of[h.min.z,h.max.z])o(y+u,x+d,f+g)},c=p.sceneBox;if(c&&!Jt(c)){if(l(c),p.editObject){let d=sn(p.editObject,p.editXform.off,p.editXform.rot,ft());if(p.sel3d){let g=p.sel3d.region,y=$t({...g,c:0},p.editXform.rot,p.editXform.off);Lt([y],d)}l(d)}let h=p.drag;if(h&&h.dx!=null)l(c,h.dx,h.dy??0,h.dz??0);let u=Math.max(10,0.5*Math.hypot(c.max.x-c.min.x,c.max.y-c.min.y,c.max.z-c.min.z));for(let d of[c.min.x-u,c.max.x+u])for(let g of[c.min.z-u,c.max.z+u])o(d,0,g)}if(r>a)r=0.1,a=4000;$e.near=Math.max(Ue.zoom*0.02,r-5),$e.far=Math.max($e.near+1,a+5),$e.updateProjectionMatrix(),Oi.position.set(Ue.target.x,-0.1,Ue.target.z),Wh()}var j0={0:["y","z"],1:["x","z"],2:["x","y"]};function K0(e){let t=[];for(let n of e)for(let i=n.x0;i<n.x1;i++)for(let s=n.y0;s<n.y1;s++)for(let r=n.z0;r<n.z1;r++)t.push({x:i,y:s,z:r,c:n.c});return t}function Q0(e,t,n,i,s){let r=(n%360+360)%360;if(r>180)r-=360;if(r===0)return;let a=Math.round(r/90),o=(r-a*90)*Math.PI/180,l=(a%4+4)%4,c=Math.tan(o/2),h=Math.sin(o),[u,d]=j0[t];for(let g of e){let y=g[u]-i,x=g[d]-s;for(let f=0;f<l;f++){let m=-x,_=y;y=m,x=_}if(o)y-=Math.round(x*c),x+=Math.round(y*h),y-=Math.round(x*c);g[u]=i+y,g[d]=s+x}}function e_(e){let t=new Map;for(let o of e)t.set(Fi(o.x,o.y,o.z),o.c);let n=(o,l,c,h)=>t.get(Fi(o,l,c))===h,i=(o,l,c,h,u)=>{for(let d=o;d<l;d++)if(!n(d,c,h,u))return!1;return!0},s=(o,l,c,h,u,d)=>{for(let g=c;g<h;g++)if(!i(o,l,u,g,d))return!1;return!0},r=e.slice().sort((o,l)=>o.y-l.y||o.z-l.z||o.x-l.x),a=[];for(let o of r){let{x:l,y:c,z:h,c:u}=o;if(!t.has(Fi(l,c,h)))continue;let d=l+1;while(n(d,c,h,u))d++;let g=h+1;while(i(l,d,c,g,u))g++;let y=c+1;while(s(l,d,h,g,y,u))y++;for(let x=c;x<y;x++)for(let f=h;f<g;f++)for(let m=l;m<d;m++)t.delete(Fi(m,x,f));a.push({x0:l,y0:c,z0:h,x1:d,y1:y,z1:g,c:u})}return a}function Au(e,t,n,i,s,r){let a=K0(e);Q0(a,n,t,Math.round(i),Math.round(s));for(let o of a){let l=r(o.x,o.y,o.z);o.x=l.x,o.y=l.y,o.z=l.z}return e_(a)}var _l=null,Ru=[],Cu=[],Ns=()=>_l;function Pu(e){if(Ru=e,e.length)_l="node"}var No=()=>Ru;function Lu(e){if(Cu=e,e.length)_l="vox"}var Do=()=>Cu;var t_=200,xn=[],Cn=-1,Uo=!1;function Iu(){xn.length=0,Cn=-1}var Nu=(e)=>({rootJSON:e,uid:ws(),pathIds:p.path.map((t)=>t.id),selection:[...p.selection],editId:p.editObject?p.editObject.id:null,collapsed:[...p.collapsed]});function Du(e){if(Uo)return;let t=Nu(e),n=xn[Cn];if(n&&n.rootJSON===t.rootJSON)return;if(xn.length=Cn+1,xn.push(t),xn.length>t_)xn.shift();Cn=xn.length-1}function Uu(e){if(Uo||Cn<0)return;xn[Cn]=Nu(e)}function Ou(e){Uo=!0,Mo(e.uid),p.root=Yn(JSON.parse(e.rootJSON)),p.path=[];let t=p.root;for(let n of e.pathIds){let i=t.id===n?t:t.type==="scene"?t.children.find((s)=>s.id===n):null;if(!i)break;t=i,p.path.push(t)}if(!p.path.length)p.path=[p.root];p.editObject=e.editId?zt(e.editId):null,p.selection=new Set(e.selection.filter((n)=>p.context.children.some((i)=>i.id===n))),p.collapsed=new Set(e.collapsed),p.drag=null,p.sel3d=null,p.painting=!1,p.lastVox=null,St(),Je(),at(),Uo=!1}function Oo(){if(Et(),Cn>0)Ou(xn[--Cn])}function gr(){if(Et(),Cn<xn.length-1)Ou(xn[++Cn])}var vl=document.getElementById("app"),$n=document.getElementById("locked"),bl=typeof navigator.locks<"u"&&typeof BroadcastChannel<"u",bi=null,un=!1,yr=!1,Xi=0,yl=null,zo=null,Fo,xr=null,zu=()=>!1,Fu=()=>!1,Bo=()=>yr,vr=()=>un,Bu=(e,t)=>{zu=e,Fu=t},ku=(e)=>{yr=!1,vl.inert=!1,$n.hidden=!1,$n.disabled=!0,$n.textContent=e,Hu()},Hu=()=>{document.getElementById("docslist")?.setAttribute("hidden","");for(let e of document.querySelectorAll(".ctxmenu"))e.remove()},_r=(e="Editing in another tab — click to move here")=>{yr=!1,vl.inert=!0,$n.hidden=!1,$n.disabled=!1,$n.textContent=e,Hu(),document.activeElement?.blur(),$n.focus({preventScroll:!0})},Gu=()=>{yr=!0,vl.inert=!1,$n.hidden=!0};function Ml(){yr=!1,un=!1,clearTimeout(Fo);let e=yl;yl=null,e?.()}function Wu(e,t,n,i){let s,r=new Promise((a)=>s=a);navigator.locks.request(`voxelier-doc:${e}`,n?{}:{ifAvailable:!0},async(a)=>{if(!a)return;if(t!==Xi||bi!==e||un)return;un=!0;let o=!1;try{o=zu(e)}catch{o=!1}if(t!==Xi||bi!==e||!un)return;if(!o){Ml(),_r("Could not open this document"),i(!1);return}yl=s,clearTimeout(Fo),i(!0),Gu(),await r}).catch(()=>{if(t===Xi&&bi===e)i(!1)})}function n_(){if(!un)return;let e=!1;try{e=Fu()}catch{e=!1}if(!e){Gu();return}_r(),Ml()}function Vu(e){if(!bl)return ku("This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable."),Promise.resolve(!1);return Xi++,xr?.(!1),xr=null,Ml(),zo?.close(),bi=e,_r(),zo=new BroadcastChannel(`voxelier-doc:${e}`),zo.onmessage=(t)=>{if(t.data?.k==="release")n_()},new Promise((t)=>{xr=t,Wu(e,Xi,!1,t)})}async function Xu(e,t){if(!bl)return ku("This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable."),null;if(bi===e&&un)return t();let n=null;return await navigator.locks.request(`voxelier-doc:${e}`,{ifAvailable:!0},(i)=>{if(!i)return;let s=un;un=!0;try{n=t()}finally{un=s}}),n}$n.onclick=()=>{if(!bl||bi===null||un)return;clearTimeout(Fo),zo?.postMessage({k:"release"}),_r("Waiting for the other tab…"),Xi++,Wu(bi,Xi,!0,(n)=>{let i=xr;xr=null,i?.(n)}),Fo=setTimeout(()=>{if(!un&&bi!==null)_r("The other tab isn't responding — close it to edit here")},5000)};var br="voxelier-doc:",i_="voxelier-v11",qu="voxelier-ui-v1";function Pn(e){let t={id:e.id,nm:e.name,p:e.pos,r:e.rot,vs:e.vis};return e.type==="object"?{t:"o",...t,b:e.boxes.map((n)=>[n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,n.c])}:{t:"s",...t,c:e.children.map(Pn)}}var s_={transparent:"deemphasized",invisible:"hidden"};function Yn(e){let t={id:e.id,name:e.nm||"",pos:e.p,rot:e.r,vis:s_[e.vs]||e.vs||"visible"};return e.t==="o"?{type:"object",...t,boxes:e.b.map((n)=>({x0:n[0],y0:n[1],z0:n[2],x1:n[3],y1:n[4],z1:n[5],c:n[6]}))}:{type:"scene",...t,children:e.c.map(Yn)}}function Yu(e){console.error("save failed",e);let t=e instanceof DOMException&&(e.name==="QuotaExceededError"||e.code===22);alert(t?"Could not save: the browser's storage quota is full (~5 MB per origin).":"Save failed: "+e.message)}function ko(e){let t;try{t=localStorage.getItem(br+e)}catch{return{kind:"missing"}}if(t===null)return{kind:"missing"};try{let n=Go(JSON.parse(t));return n?{kind:"ok",root:n}:{kind:"unreadable"}}catch{return{kind:"unreadable"}}}var Mr=()=>{let e=[];try{for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(!n?.startsWith(br))continue;try{let i=JSON.parse(localStorage.getItem(n)||"");if(!i?.root)continue;e.push({id:n.slice(br.length),name:typeof i.name==="string"&&i.name?i.name:i.root.nm||"Project",updated:Number(i.updated)||0})}catch{}}}catch{}return e.sort((t,n)=>n.updated-t.updated)},Ho=null,qi=!1;function Sr(e,t){if(!vr())return qi=!0,!1;let n=JSON.stringify(Pn(t)),i=JSON.stringify(t.name||"Project");try{if(localStorage.setItem(br+e,`{"uid":${ws()},"root":${n},"name":${i},"updated":${Date.now()}}`),Us()===e)Ho=n;return qi=!1,!0}catch(s){return qi=!0,Yu(s),!1}}function $u(e){if(!vr())return qi=!0,!1;try{if(localStorage.removeItem(br+e),Us()===e)Ho=null;return!0}catch(t){return qi=!0,Yu(t),!1}}var Ju=null,Us=()=>Ju,Zu=(e)=>{Ju=e,Ho=null,qi=!1},Ds;function Sl(){if(Ds!==void 0||qi)return!0;return p.root!==null&&Ho!==JSON.stringify(Pn(p.root))}function r_(){try{localStorage.setItem(qu,JSON.stringify([...p.collapsed]))}catch(e){}}function Et(){clearTimeout(Ds),Ds=void 0;let e=Us();if(e===null||!vr())return!1;return Du(JSON.stringify(Pn(p.root))),r_(),Sr(e,p.root)}function El(){if(Ds!==void 0)return!0;Uu(JSON.stringify(Pn(p.root)));let e=Us();if(e===null||!vr())return!1;return Sr(e,p.root)}function at(){clearTimeout(Ds),Ds=setTimeout(Et,250)}function wl(e,t=1){let n=0,i=(s)=>{let r=/^n(\d+)/.exec(s.id);if(r)n=Math.max(n,Number(r[1]));if(s.type==="scene")s.children.forEach(i)};i(e),Mo(Math.max(t,n+1))}function Go(e,t=!0){if(!e||!e.root)return null;let n=Yn(e.root);if(t)wl(n,e.uid||1);return n}var ju=()=>{try{let e=JSON.parse(localStorage.getItem(qu));return Array.isArray(e)?e:[]}catch{return[]}};function Ku(){try{return Go(JSON.parse(localStorage.getItem(i_)))}catch{return null}}var o_=2;function Er(e){let t=ft();return Lt(e,t),{mn:t.min,mx:t.max}}var Wo=(e)=>{let{mn:t,mx:n}=Er(e);return{x0:t.x,y0:t.y,z0:t.z,x1:n.x,y1:n.y,z1:n.z}};function ed(e){if(!e.length)return[];let{mn:t}=Er(e);return e.map((n)=>ar(n,-t.x,-t.y,-t.z))}function td(e){let t=lr(p.editObject.boxes,e);p.sel3d={region:t.length?Wo(t):{...e},boxes:t,lifted:!1},yi()}function Tl(){let e=p.sel3d;if(!e||e.lifted)return;Et(),e.lifted=!0,pr(e.region)}function Al(){l_();let e=p.sel3d;if(!e||!e.lifted)return;e.lifted=!1,Po(e.boxes),e.boxes=lr(p.editObject.boxes,e.region),at()}function Jn(){let e=p.sel3d;if(!e)return;if(p.sel3d=null,e.lifted)Po(e.boxes),at();else yi()}function Rl(){let e=p.sel3d;if(!e)return;let{region:t,lifted:n}=e;if(p.sel3d=null,!n)pr(t);else yi();at()}function Cl(){if(p.sel3d&&p.sel3d.boxes.length)Lu(ed(p.sel3d.boxes))}function nd(){Cl(),Rl()}function id(e){if(!e.length)return;Jn();let t=ed(e),n=0,i=0,s=0,r=p.editObject.boxes;if(r.length){let{mn:o,mx:l}=Er(r);n=l.x+o_,i=o.y,s=o.z}let a=t.map((o)=>ar(o,n,i,s));p.sel3d={region:Wo(a),boxes:a,lifted:!1},Po(a),at()}function sd(e,t,n){let i=p.sel3d;if(!i||!e&&!t&&!n)return;let s=i.region;s.x0+=e,s.x1+=e,s.y0+=t,s.y1+=t,s.z0+=n,s.z1+=n,i.boxes=i.boxes.map((r)=>ar(r,e,t,n)),yi()}function Qu(e,t,n){let{x:i,y:s,z:r}=e;for(let a=(n%4+4)%4;a>0;a--)if(t===0){let o=-r,l=s;s=o,r=l}else if(t===1){let o=-r,l=i;i=o,r=l}else{let o=-s,l=i;i=o,s=l}return{x:i,y:s,z:r}}function a_(e,t,n){let i=Qu({x:e.x0,y:e.y0,z:e.z0},t,n),s=Qu({x:e.x1-1,y:e.y1-1,z:e.z1-1},t,n);return{x0:Math.min(i.x,s.x),y0:Math.min(i.y,s.y),z0:Math.min(i.z,s.z),x1:Math.max(i.x,s.x)+1,y1:Math.max(i.y,s.y)+1,z1:Math.max(i.z,s.z)+1,c:e.c}}function rd(){let e=$e.matrixWorld.elements,t=Ze({x:e[0],y:0,z:e[2]},-p.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var Vo=null;function Pl(){let e=p.sel3d;if(!e)return;let t=Er(e.boxes);Vo={boxes:e.boxes.map((n)=>({...n})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function l_(){Vo=null}function od(e,t){let n=p.sel3d,i=Vo;if(!n||!i||!i.boxes.length)return;let s=(e%4+4)%4,r;if(!s)r=i.boxes.map((a)=>({...a}));else{let a=t?rd():1;r=i.boxes.map((u)=>a_(u,a,s));let o=Er(r),l=di(i.cx-(o.mn.x+o.mx.x)/2),c=di(i.cy-(o.mn.y+o.mx.y)/2),h=di(i.cz-(o.mn.z+o.mx.z)/2);r=r.map((u)=>ar(u,l,c,h))}n.boxes=r,n.region=Wo(r),yi()}function ad(e,t){let n=p.sel3d,i=Vo;if(!n||!i||!i.boxes.length)return;let s=t?rd():1,[r,a]=s===0?[i.cy,i.cz]:s===1?[i.cx,i.cz]:[i.cx,i.cy];n.boxes=Au(i.boxes,e,s,r,a,(o,l,c)=>({x:o,y:l,z:c})),n.region=Wo(n.boxes),yi()}function c_(){let e=p.sel3d;if(!e)return null;let t=e.region,n=new oi;for(let i of[t.x0,t.x1])for(let s of[t.y0,t.y1])for(let r of[t.z0,t.z1])n.expandByPoint(Tn(i,s,r));return n}function Ll(){let e=c_();if(!e)return!1;return Yt.setFromCamera(wn,$e),Yt.ray.intersectsBox(e)}function h_(e){if(!e.length)return[];let t=[[],[],[]];for(let v of e)t[0].push(v.x0,v.x1),t[1].push(v.y0,v.y1),t[2].push(v.z0,v.z1);let n=t.map((v)=>[...new Set(v)].sort((A,C)=>A-C)),i=n.map((v)=>v.length-1),[s,r,a]=i;if(s*r*a>8000000)return e;let o=n.map((v)=>new Map(v.map((A,C)=>[A,C]))),l=(v,A,C)=>(v*r+A)*a+C,c=new Int32Array(s*r*a);for(let v of e){let A=o[0].get(v.x1),C=o[1].get(v.y1),E=o[2].get(v.z1);for(let L=o[0].get(v.x0);L<A;L++)for(let z=o[1].get(v.y0);z<C;z++)for(let M=o[2].get(v.z0);M<E;M++)c[l(L,z,M)]=v.c+1}let h=[],u=[],d=[],g=[];for(let v=0;v<s;v++)for(let A=0;A<r;A++)for(let C=0;C<a;C++)if(c[l(v,A,C)])h.push(l(v,A,C)),u.push(v),d.push(A),g.push(C);let y=[u,d,g],x=new Uint8Array(s*r*a),f=(v)=>{x.fill(0);let A=Array.from({length:h.length},(z,M)=>M).sort((z,M)=>y[v[2]][z]-y[v[2]][M]||y[v[1]][z]-y[v[1]][M]||y[v[0]][z]-y[v[0]][M]),C=[0,0,0],E=(z,M,T,U)=>{if(M[T]>=i[T])return!1;let q=(T+1)%3,J=(T+2)%3;C[T]=M[T];for(let R=z[q];R<M[q];R++){C[q]=R;for(let B=z[J];B<M[J];B++){C[J]=B;let V=l(C[0],C[1],C[2]);if(x[V]||c[V]!==U)return!1}}return!0},L=[];for(let z of A){let M=h[z];if(x[M])continue;let T=c[M],U=[u[z],d[z],g[z]],q=[u[z]+1,d[z]+1,g[z]+1];for(let J of v)while(E(U,q,J,T))q[J]++;for(let J=U[0];J<q[0];J++)for(let R=U[1];R<q[1];R++)for(let B=U[2];B<q[2];B++)x[l(J,R,B)]=1;L.push({x0:n[0][U[0]],y0:n[1][U[1]],z0:n[2][U[2]],x1:n[0][q[0]],y1:n[1][q[1]],z1:n[2][q[2]],c:T-1})}return L},m=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],_=null;for(let v of m){let A=f(v);if(!_||A.length<_.length)_=A}return _}var u_=24,ld=(e)=>e.reduce((t,n)=>t+(n.x1-n.x0)*(n.y1-n.y0)*(n.z1-n.z0),0),Il=new WeakSet;function Nl(e){if(e.boxes.length<u_||Il.has(e.boxes))return!1;let t=h_(e.boxes);if(t.length<e.boxes.length&&ld(t)===ld(e.boxes))return e.boxes=t,Il.add(t),!0;return Il.add(e.boxes),!1}var Dl=(e,t,n)=>{let i=new Set(p.selection);if(Jn(),n&&Nl(n))El();if(p.selection=new Set([e]),p.editObject=null,Xn(),p.context!==t||n)St();else vi(i);Je()};function d_(){if(p.path.length<=1)return;let e=p.context,t=p.editObject;Dl(p.path.pop().id,e,t)}function f_(){Dl(p.editObject.id,p.context,p.editObject)}function cd(){if(p.editObject)f_();else d_()}function Ln(e){let t=Xt(e);if(!t)return;let n=p.context,i=p.editObject;p.path=t.slice(0,-1),Dl(e.id,n,i)}function Yi(e,t){let n=Xt(e);if(!n)return;let i=p.editObject;if(Jn(),i&&i!==e&&Nl(i))El();if(e.type==="scene")p.path=n,p.editObject=null;else p.path=n.slice(0,-1),p.editObject=e;if(p.selection.clear(),p.tool="view",Xn(),St(),Je(),t)qn()}var In=null,It=null,wr=null,Os=null,dn=null,p_={visible:"◉",deemphasized:"◐",hidden:"⦰"},Ul=(e,t)=>{let n=Math.min(255,(e>>16&255)*t)|0,i=Math.min(255,(e>>8&255)*t)|0,s=Math.min(255,(e&255)*t)|0;return`rgb(${n},${i},${s})`},Xo=new Map;function hd(e){return e.type==="object"?"o"+e.boxes.map((t)=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+e.children.map((t)=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${hd(t)}`).join()}function m_(e){let t=Xo.get(e.id);if(e===p.editObject&&t)return t.cv;let n=hd(e);if(t&&t.sig===n)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let s=i.getContext("2d");s.fillStyle="#0f1115",s.fillRect(0,0,52,52);let r=ur(e,{x:0,y:0,z:0},0,[]);if(r.length){let a=ft();Lt(r,a);let{x:o,y:l,z:c}=a.min,{x:h,y:u,z:d}=a.max,g=40/Math.max(h-o,u-l,d-c,1),y=26-((o+h)/2-(c+d)/2)*g*0.5,x=28+(l+u)/2*g*0.6-((o+h)/2+(c+d)/2)*g*0.28,f=(_,v,A)=>[y+(_-A)*g*0.5,x-v*g*0.6+(_+A)*g*0.28],m=(_,v)=>{s.fillStyle=_,s.beginPath(),s.moveTo(v[0][0],v[0][1]);for(let A=1;A<v.length;A++)s.lineTo(v[A][0],v[A][1]);s.closePath(),s.fill()};r.sort((_,v)=>_.x0+_.x1+_.y0+_.y1+_.z0+_.z1-(v.x0+v.x1+v.y0+v.y1+v.z0+v.z1));for(let _ of r)m(Ul(_.c,0.78),[f(_.x1,_.y0,_.z0),f(_.x1,_.y1,_.z0),f(_.x1,_.y1,_.z1),f(_.x1,_.y0,_.z1)]),m(Ul(_.c,0.6),[f(_.x0,_.y0,_.z1),f(_.x1,_.y0,_.z1),f(_.x1,_.y1,_.z1),f(_.x0,_.y1,_.z1)]),m(Ul(_.c,1),[f(_.x0,_.y1,_.z0),f(_.x1,_.y1,_.z0),f(_.x1,_.y1,_.z1),f(_.x0,_.y1,_.z1)])}return Xo.set(e.id,{sig:n,cv:i}),i}var $i=null;function Ol(e){$i=e}function g_(e){if(e===p.root||hn(e)!==p.context||p.editObject)Ln(e);else{let t=new Set(p.selection);if(p.selection.has(e.id))p.selection.delete(e.id);else p.selection.add(e.id);vi(t),Je()}$i=e.id}function x_(e){let t=p.context.children,n=$i?t.findIndex((o)=>o.id===$i):-1,i=t.findIndex((o)=>o.id===e.id);if(e===p.root||p.editObject||n<0||i<0){Ln(e),$i=e.id;return}let s=new Set(p.selection),r=Math.min(n,i),a=Math.max(n,i);p.selection=new Set(t.slice(r,a+1).map((o)=>o.id)),vi(s),Je()}function __(e,t){if(t.shiftKey||t.ctrlKey||t.metaKey){if(dn)clearTimeout(dn.timer),dn=null;if(t.shiftKey)x_(e);else g_(e);return}if(dn&&dn.node===e){clearTimeout(dn.timer),dn=null,Yi(e,!0);return}if(dn)clearTimeout(dn.timer);if(e===p.root)Yi(e);else Ln(e);$i=e===p.root?null:e.id,dn={node:e,timer:setTimeout(()=>dn=null,300)}}function Bs(e){qo();let n=document.querySelector(`#tree .trow[data-id="${e.id}"]`)?.querySelector(".nm");if(!n)return;let i=st("input",{className:"nminput",value:e.name});i.placeholder=e===p.root?"Project":e.type==="scene"?"group":"object";let s=!1,r=(a)=>{if(s)return;if(s=!0,a)e.name=i.value.trim(),at();Je()};i.addEventListener("keydown",(a)=>{if(a.stopPropagation(),a.key==="Enter")r(!0);else if(a.key==="Escape")r(!1)}),i.addEventListener("blur",()=>r(!0)),n.replaceWith(i),i.focus(),i.select()}function y_(e){let t=m_(e);if(t.className="thumb",t.onclick=null,t.title="",e!==p.root&&e.type==="scene"&&e.children.length){let n=p.collapsed.has(e.id);if(t.classList.add("group"),n)t.classList.add("collapsed");t.title=n?"Expand group":"Collapse group",t.onclick=(i)=>{i.stopPropagation(),n?p.collapsed.delete(e.id):p.collapsed.add(e.id),zl()}}return t}function v_(e,t){if(e.draggable=t!==p.root,t!==p.root)e.addEventListener("dragstart",(n)=>{if(n.stopPropagation(),In=t.id,n.dataTransfer){n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain",t.id)}catch(i){}}});e.addEventListener("dragend",zs),e.addEventListener("dragover",(n)=>{n.preventDefault(),n.stopPropagation(),b_(n,t,e)}),e.addEventListener("drop",(n)=>{n.preventDefault(),n.stopPropagation(),pd()})}function zl(){let e=document.getElementById("tree");e.innerHTML="";let t=(i,s)=>{let r=i===p.root,a=!r&&p.context.children.includes(i)&&p.selection.has(i.id),o=i.vis,l=st("div",{className:"trow"+(r?" root":"")+(a?" sel":"")+(i===p.context&&!p.editObject?" ctx":"")+(i===p.editObject?" edit":"")+(!r&&o!=="visible"?" dim":"")});l.style.paddingLeft=4+s*13+"px",l.dataset.id=i.id;let c=y_(i),h=st("span",{className:"nm"});if(r)h.textContent=i.name||"Project";else if(i.name)h.textContent=i.name;else h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>";if(h.onclick=(u)=>{if(!dn&&!p.editObject&&!r&&p.selection.size===1&&p.selection.has(i.id))u.stopPropagation(),Bs(i)},l.append(c,h),!r)l.append(st("button",{className:"tb"+(o==="visible"?" on":""),textContent:p_[o],title:"visible → deemphasized → hidden",onclick:(u)=>{u.stopPropagation(),md(i)}}));if(l.onclick=(u)=>__(i,u),l.oncontextmenu=(u)=>{u.preventDefault(),u.stopPropagation();let d=!r&&!p.editObject&&hn(i)===p.context&&p.selection.has(i.id);if(!r&&!d)Ln(i);dd(i,u.clientX,u.clientY)},v_(l,i),e.appendChild(l),i.type==="scene"&&(r||!p.collapsed.has(i.id)))for(let u of i.children)t(u,s+1)};t(p.root,0);let n=new Set;(function i(s){if(n.add(s.id),s.type==="scene")s.children.forEach(i)})(p.root);for(let i of Xo.keys())if(!n.has(i))Xo.delete(i)}function qo(){if(Os)Os.remove(),Os=null,window.removeEventListener("pointerdown",ud,!0)}function ud(e){if(Os&&!Os.contains(e.target))qo()}function dd(e,t,n){qo();let i=st("div",{className:"ctxmenu"}),s=(l,c,h)=>i.appendChild(st("div",{className:"ctxitem"+(h?" "+h:""),textContent:l,onclick:()=>{qo(),c()}})),r=()=>i.appendChild(st("div",{className:"ctxdiv"})),a=e!==p.root&&hn(e)===p.context&&p.selection.size>1&&p.selection.has(e.id);if(!a)s("Rename",()=>Bs(e)),s("Locate",()=>Io(e)),r();if(e!==p.root)s("Copy",()=>Ar()),s("Duplicate",()=>a?Yo():yd(e)),s("Delete objects",()=>a?Tr():vd(e),"danger"),r();if(a)s("Group",()=>_d(e));else if(e.type==="scene"){if(e!==p.root)s("Ungroup",()=>bd(e));if(Ns())s("Paste",()=>$o(e));s("New object",()=>Md(e)),s("New group",()=>Sd(e))}else s("New group",()=>xd(e));document.body.appendChild(i),Os=i;let o=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-o.width-4)+"px",i.style.top=Math.min(n,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",ud,!0),0)}function zs(){if(wr)wr.classList.remove("drop-into","drop-before","drop-after");wr=null,It=null}function fd(){let e=In&&zt(In);if(!e||p.editObject||hn(e)!==p.context||!p.selection.has(e.id)||p.selection.size<=1)return null;return p.context.children.filter((t)=>p.selection.has(t.id))}function b_(e,t,n){let i=In&&zt(In);if(!i||i===t){zs();return}let s=fd();if(s?s.some((u)=>u===t||Hi(u,t)):Hi(i,t)){zs();return}if(zs(),wr=n,t===p.root){It={parent:p.root,index:p.root.children.length},n.classList.add("drop-into");return}let a=n.getBoundingClientRect(),o=e.clientY-a.top,l=a.height,c=hn(t),h=c?c.children.indexOf(t):0;if(o>l*0.28&&o<l*0.72&&(t.type==="scene"||!s)){if(t.type==="scene")It={parent:t,index:t.children.length};else It={wrap:t};n.classList.add("drop-into")}else if(o<l*0.5)It={parent:c,index:h},n.classList.add("drop-before");else It={parent:c,index:h+1},n.classList.add("drop-after")}function pd(){let e=In&&zt(In);if(e&&It){let t=It.parent?fd():null;if(t){let n=It.parent,i=It.index,s=!1;for(let r of t)if(Fs(r,n,i))i=n.children.indexOf(r)+1,s=!0;if(s){p.collapsed.delete(n.id);let r=Xt(n);if(r)p.path=r;p.editObject=null,p.selection=new Set(t.map((a)=>a.id)),St(),Je(),at()}}else if(It.wrap)gd(It.wrap,e);else if(It.parent&&Fs(e,It.parent,It.index))p.collapsed.delete(It.parent.id),Ln(e),at()}zs(),In=null}{let e=document.getElementById("tree");e.addEventListener("dragover",(t)=>{if(t.target===e&&In){t.preventDefault(),zs(),It={parent:p.root,index:p.root.children.length};let n=[...e.querySelectorAll(".trow")].filter((s)=>s.dataset.id!==In),i=n[n.length-1];if(i)i.classList.add("drop-after"),wr=i}}),e.addEventListener("drop",(t)=>{if(t.target===e)t.preventDefault(),pd()})}document.getElementById("side").addEventListener("click",(e)=>{if(e.target.closest(".trow, button, input"))return;if(!p.selection.size)return;let t=new Set(p.selection);p.selection.clear(),$i=null,vi(t),Je()});document.getElementById("side").addEventListener("contextmenu",(e)=>{if(e.target.closest(".trow, button, input"))return;e.preventDefault(),dd(p.root,e.clientX,e.clientY)});var Nn=()=>{St(),Je(),at()};function md(e){e.vis=Qh[e.vis],Nn()}var Fl=()=>[...p.selection].map((e)=>Vn(e)).filter((e)=>!!e),Ed=(e,t)=>{let n=ki();n.pos={x:Math.round(Xe.target.x),y:0,z:Math.round(Xe.target.z)},e.children.push(n),p.collapsed.delete(e.id),Yi(n,t),at(),Bs(n)};function wd(){Ed(p.context,!0)}function Tr(){if(!p.selection.size)return;p.context.children=p.context.children.filter((e)=>!p.selection.has(e.id)),p.selection.clear(),Nn()}function Yo(){let e=Fl().map(pi);if(!e.length)return;p.context.children.push(...e),p.selection=new Set(e.map((t)=>t.id)),Nn()}function Ar(){let e=Fl().map(pi);if(e.length)Pu(e)}function Td(){Ar(),Tr()}function $o(e=p.context){if(Ns()==="vox"){M_(e);return}let t=No().map(pi);if(!t.length)return;e.children.push(...t),Ad(e),p.selection=new Set(t.map((n)=>n.id)),Nn()}function M_(e){let t=Do();if(!t.length)return;let n=ki();n.boxes=t.map((r)=>({...r}));let i=Rs(e),s=Ze({x:Xe.target.x-i.off.x,y:0,z:Xe.target.z-i.off.z},-i.rot);n.pos={x:Math.round(s.x),y:0,z:Math.round(s.z)},e.children.push(n),Ad(e),p.selection=new Set([n.id]),Nn()}function Ad(e){if(p.collapsed.delete(e.id),e!==p.context)p.path=Xt(e)??p.path,p.editObject=null}function Fs(e,t,n){if(e===t||Hi(e,t))return!1;let i=hn(e);if(!i)return!1;let s=Hn(Rs(i),{off:{...e.pos},rot:e.rot}),r=Hn(Ka(Rs(t)),s),a=i.children.indexOf(e);if(i.children.splice(a,1),i===t&&a<n)n--;return e.pos={x:Math.round(r.off.x),y:Math.round(r.off.y),z:Math.round(r.off.z)},e.rot=r.rot&3,t.children.splice(Math.max(0,Math.min(n,t.children.length)),0,e),!0}function Rd(e){let t=hn(e);if(!t)return null;let n=t.children.indexOf(e),i=Wn("Group");return i.pos={...e.pos},i.rot=e.rot,t.children.splice(n,1,i),e.pos={x:0,y:0,z:0},e.rot=0,i.children=[e],i}function gd(e,t){if(t===e||Hi(t,e))return!1;let n=Rd(e);if(!n)return!1;return Fs(t,n,n.children.length),p.collapsed.delete(n.id),p.selection=new Set([n.id]),Nn(),!0}function xd(e){let t=Rd(e);if(!t)return;p.collapsed.delete(t.id),Ln(t),at(),Bs(t)}function _d(e){let t=Fl();if(t.length<2)return;let n=Wn("Group");n.pos={...e.pos},n.rot=e.rot;let i=p.context.children.indexOf(e);p.context.children.splice(Math.max(0,i),0,n);for(let s of t)Fs(s,n,n.children.length);p.collapsed.delete(n.id),p.selection=new Set([n.id]),Nn()}function yd(e){let t=hn(e);if(!t)return;let n=pi(e);t.children.splice(t.children.indexOf(e)+1,0,n),Ln(n),at()}function vd(e){let t=hn(e);if(!t)return;if(t.children=t.children.filter((n)=>n!==e),p.selection.delete(e.id),p.editObject===e)p.editObject=null;Nn()}function bd(e){let t=hn(e);if(!t)return;let n=[...e.children],i=t.children.indexOf(e);for(let s of n)Fs(s,t,i),i=t.children.indexOf(s)+1;t.children=t.children.filter((s)=>s!==e),p.selection=new Set(n.map((s)=>s.id)),Nn()}function Md(e){Ed(e,!1)}function Sd(e){let t=Wn("Group");e.children.push(t),p.collapsed.delete(e.id),Ln(t),at(),Bs(t)}function Bl(e){let t=[...p.selection];if(!t.length)return;let n=e<0?3:1,i=As(),s=Ka(i),r=(a)=>sn(a,cn(i.off,Ze(a.pos,i.rot)),i.rot+a.rot&3,ft());for(let a=0;a<Math.abs(e);a++){let o=ft();for(let d of t){let g=r(Vn(d));if(g.min.x<o.min.x)o.min.x=g.min.x;if(g.min.z<o.min.z)o.min.z=g.min.z;if(g.max.x>o.max.x)o.max.x=g.max.x;if(g.max.z>o.max.z)o.max.z=g.max.z}let l=(o.min.x+o.max.x)/2,c=(o.min.z+o.max.z)/2,h=Ze({x:l,y:0,z:c},n),u={rot:n,off:{x:l-h.x,y:0,z:c-h.z}};for(let d of t){let g=Vn(d);if(!g)continue;let y=Hn(i,{off:g.pos,rot:g.rot}),x=Hn(s,Hn(u,y));g.pos={x:di(x.off.x),y:di(x.off.y),z:di(x.off.z)},g.rot=x.rot&3}}St()}function Cd(){if(p.selection.size)Bl(1),Je(),at()}function kl(e){for(let t of p.selection){let n=Vn(t);if(n)n.pos.y+=e}if(p.selection.size)Nn()}var je=(e)=>Math.floor(e/10),ct=Eo,ks=(e,t)=>{let n=ki();return n.name=e,n.boxes=t,n},Hl=(e,t,n,i,s,r)=>({x0:e,y0:t,z0:n,x1:i,y1:s,z1:r});function Rr(){let e=je(4465),t=je(2985),n=je(2700),i=je(150),s=ks("Floor",[ot(0,0,0,e,1,t,ct[9])]),r=je(800),a=je(2100),o=e-je(515)-r,l=e-je(900)-r,c=[ot(0,1,0,e,n+1,i,ct[5]),ot(0,1,t-i,e,n+1,t,ct[5]),ot(0,1,i,i,n+1,t-i,ct[5]),ot(e-i,1,i,e,n+1,t-i,ct[5])];c=Bi(c,Hl(o,1,0,o+r,a+1,i)),c=Bi(c,Hl(l,1,t-i,l+r,a+1,t)),c=Bi(c,Hl(0,je(900),je(600),i,je(2100),t-je(600)));let h=ks("Walls",c);h.vis="deemphasized";let u=je(1500),d=je(2000),g=ks("Bed",[ot(0,0,0,8,14,8,ct[7]),ot(u-8,0,0,u,14,8,ct[7]),ot(0,0,d-8,8,14,d,ct[7]),ot(u-8,0,d-8,u,14,d,ct[7]),ot(0,14,0,u,20,d,ct[6]),ot(2,20,0,u-2,24,d-je(400),ct[10])]);g.pos={x:i+3,y:1,z:t-i-d};let y=je(1400),x=je(700),f=je(740),m=ks("Desk",[ot(0,f-4,0,y,f,x,ct[8]),ot(0,0,0,6,f-4,6,ct[7]),ot(y-6,0,0,y,f-4,6,ct[7]),ot(0,0,x-6,6,f-4,x,ct[7]),ot(y-6,0,x-6,y,f-4,x,ct[7])]),_=je(600),v=_-30>>1,A=_>>1,C=ks("Computer",[ot(v,0,0,v+30,2,18,ct[11]),ot(A-2,2,7,A+2,je(160),11,ct[11]),ot(0,je(160),6,_,je(520),9,ct[13])]);C.pos={x:je(400),y:f,z:je(420)};let E=Wn();E.name="Desk + Computer",E.pos={x:e-i,y:1,z:je(900)},E.rot=1,E.children=[m,C];let L=(U)=>ks(U,[ot(-10,0,-10,11,30,11,ct[4]),ot(-2,30,-2,3,54,3,ct[14]),ot(-16,54,-16,17,78,17,ct[14]),ot(-12,78,-12,13,92,13,ct[14])]),z=L("Plant"),M=L("Plant");z.pos={x:e-i-je(300),y:1,z:i+je(300)},M.pos={x:i+je(300),y:1,z:i+je(300)};let T=Wn();return T.children=[s,h,g,E,z,M],T}var Vl="voxelier-last",Pd="doc";var Gl=()=>{let e=new Uint8Array(8);return crypto.getRandomValues(e),[...e].map((t)=>t.toString(36).padStart(2,"0")).join("")},Ld=()=>new URLSearchParams(location.hash.replace(/^#/,""));function S_(){let e=Ld().get(Pd);return e&&/^[0-9a-z]{4,32}$/.test(e)?e:null}function E_(e){let t=Ld();t.set(Pd,e),history.replaceState(null,"",`#${t.toString()}`)}var w_=(e)=>{try{localStorage.setItem(Vl,e)}catch(t){}},Id=()=>{try{return localStorage.getItem(Vl)}catch{return null}},Wl=null;function Zn(e,t,n){return Wl=t?{root:t,uid:n}:null,w_(e),E_(e),Vu(e)}function Cr(e=Rr(),t){return{id:Gl(),root:e,uid:t}}function Nd(e){let t=Wl;if(Wl=null,Zu(e),t){if(wl(t.root,t.uid??1),!Sr(e,t.root))throw Error("could not save the new document");return t.root}let n=ko(e);if(n.kind==="ok")return n.root;if(n.kind==="unreadable")throw Error("this document record cannot be read");let i=Rr();if(!Sr(e,i))throw Error("could not save the new document");return i}function Dd(e){let t=S_();if(t)return ko(t).kind==="unreadable"?{id:Gl(),root:Rr()}:{id:t};let n=Id();if(n&&ko(n).kind!=="unreadable")return{id:n};let[i]=Mr();if(i)return{id:i.id};return{id:Gl(),root:e()??Rr()}}async function Ud(e){return await Xu(e,()=>{if(!$u(e))return!1;if(Id()===e)try{localStorage.removeItem(Vl)}catch{}return!0})===!0}var Od=()=>Us();var Jo=(e)=>Math.abs(e.clientX-p.drag.sx)+Math.abs(e.clientY-p.drag.sy)>3,jn=document.createElement("div");jn.id="toolcursor";jn.style.display="none";document.body.appendChild(jn);function T_(e){if(p.tool==="view"){jn.style.display="none";return}jn.textContent=jo[p.tool],jn.style.left=e.clientX+"px",jn.style.top=e.clientY+"px",jn.style.display="block"}function A_(){if(p.tool!=="measure"||p.painting)return;if(p.drag&&p.drag.mode==="box")return;Ao()}function Xl(e){let t=Math.abs($e.matrixWorldInverse.elements[5]);return xl(e)/Math.max(t,0.15)}function R_(e){let t=p.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let n=e.clientX-t.x,i=e.clientY-t.y;return t.x=e.clientX,t.y=e.clientY,(t.mode==="pan"?Eu:wu)(n,i),!0}function C_(){let e=[],t=[];Rn(p.root,{x:0,y:0,z:0},0,null,null,(s,r,a,o)=>{let l=o&&p.selection.has(o)?t:e;for(let c of s.boxes)l.push($t(c,a,r))});let n=1/0,i=-1/0;for(let s of t){if(s.y0<n)n=s.y0;if(s.y1>i)i=s.y1}return{occ:e,sel:t,minY:n,hgt:t.length?i-n:0}}var P_=(e,t,n,i)=>{if(cr(e.sel??[],e.occ??[],t,n,i))return!0;let s=e.minY??1/0;return s+n<Math.min(0,s)};function L_(e){let t=p.drag,n=(i,s,r)=>e.altKey||!P_(t,i,s,r);if(e.shiftKey){if(t.shiftAnchorY==null)t.shiftAnchorY=e.clientY,t.dyBase=t.dyUser??0;let i=t.start&&{x:t.start.x,y:t.minY??0,z:t.start.z},s=t.dyBase+Math.round((t.shiftAnchorY-e.clientY)*Xl(i??Xe.target));if(n(t.dx,s,t.dz))t.dyUser=s,t.dy=s}else{t.shiftAnchorY=null;let{dx:i,dz:s}=t,r=dr(t.minY??0);if(r&&t.start)i=r.x-t.start.x,s=r.z-t.start.z;let a=t.dyUser??0,o=Math.floor(0.1*(t.hgt??0)),l=!1;for(let c=0;c<=o;c++)if(n(i,a+c,s)){t.dx=i,t.dz=s,t.dy=a+c,l=!0;break}if(!l){if(n(i,a,t.dz))t.dx=i;if(n(t.dx,a,s))t.dz=s;t.dy=a}}for(let i of p.selection)for(let s of p.childMeshes[i]||[])s.position.set(t.dx,t.dy,t.dz),s.castShadow=!1;kn.position.set(t.dx,t.dy,t.dz)}function I_(e){let t=p.drag,n=As(),i=Ze({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-n.rot),s=Math.round(t.dy);if(e){let r=[];for(let a of p.selection){let o=Vn(a);if(!o)continue;let l=pi(o);l.pos={x:o.pos.x+i.x,y:o.pos.y+s,z:o.pos.z+i.z},r.push(l)}p.context.children.push(...r),p.selection=new Set(r.map((a)=>a.id))}else for(let r of p.selection){let a=Vn(r);if(a)a.pos.x+=i.x,a.pos.y+=s,a.pos.z+=i.z}kn.position.set(0,0,0),St(),Je(),at()}function N_(e){let t=p.drag,n=Math.round((t.sx-e.clientX)/70);if(n!==t.steps)Bl(n-t.steps),t.steps=n,t.dirty=!0}function D_(){let e=yu();if(e==null)return;if(p.eyedropReturn!=null)p.tool=p.eyedropReturn,p.eyedropReturn=null;$l(e)}function Fd(e){let t=Wi(),n=rl(t);if(!n)return;let i=Fi(n.x,n.y,n.z);if(i!==p.lastVox){if(e)gl({x0:n.x,y0:n.y,z0:n.z,x1:n.x+1,y1:n.y+1,z1:n.z+1},p.selColor),Zo(p.selColor);else if(_u(n,p.selColor))Zo(p.selColor);p.lastVox=i}Bd(t)}function Bd(e=Wi()){let t=rl(e);if(!t){nn.visible=!1;return}let n=Tn(t.x+0.5,t.y+0.5,t.z+0.5);nn.visible=!0,nn.material.color.set(p.tool==="erase"?11895693:10994876),nn.position.copy(n)}var ql=(e)=>e===0?[1,2]:e===1?[0,2]:[0,1];function kd(e,t,n,i){let[s,r]=ql(e.na),a=[0,0,0],o=[0,0,0],l=(c,h,u)=>{a[c]=Math.min(h,u),o[c]=Math.max(h,u)};return l(e.na,e.s[e.na],e.s[e.na]+i),l(s,e.s[s],t),l(r,e.s[r],n),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var Yl=(e)=>{let[t,n]=ql(e.na);return kd(e,e.c[t],e.c[n],e.hy)};function zd(e){let t=Wi(),n,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,n=p.tool==="add"?t.addCell:t.cell;else{let s=Vi(0);if(!s)return;n=s,i=1}p.drag={...e,mode:"box",shiftAnchorY:null,box:{s:[n.x,n.y,n.z],c:[n.x,n.y,n.z],na:i,hy:0},occ:p.tool==="add"?p.editObject.boxes.slice():void 0},nn.visible=!1,Hd()}function U_(e){let t=p.drag,n=t.box,[i,s]=ql(n.na),r=p.tool==="add"&&!e.altKey,a=(o,l,c)=>!r||!cr([kd(n,o,l,c)],t.occ??[],0,0,0);if(e.shiftKey){if(t.shiftAnchorY===null)t.shiftAnchorX=e.clientX,t.shiftAnchorY=e.clientY,t.hyBase=n.hy;let o=Tn(n.s[0],n.s[1],n.s[2]),l=n.s.slice();l[n.na]+=1;let c=Tn(l[0],l[1],l[2]),h=c.x-o.x,u=c.y-o.y,d=c.z-o.z,g=$e.matrixWorld.elements,y=h*g[0]+u*g[1]+d*g[2],x=h*g[4]+u*g[5]+d*g[6],f=y*y+x*x,m=1/xl(o),_=y*m,v=-x*m,A=e.clientX-t.shiftAnchorX,C=e.clientY-t.shiftAnchorY,E=t.hyBase+(f>0.02?Math.round((A*_+C*v)/(_*_+v*v)):Math.round((t.shiftAnchorY-e.clientY)*Xl(o)));if(a(n.c[i],n.c[s],E))n.hy=E}else{t.shiftAnchorY=null;let o=lu(n.na,n.s[n.na]);if(o){let l=[o.x,o.y,o.z];if(a(l[i],n.c[s],n.hy))n.c[i]=l[i];if(a(n.c[i],l[s],n.hy))n.c[s]=l[s]}}Hd()}function O_(){let e=Yl(p.drag.box);if(p.tool==="add")gl(e,p.selColor),Zo(p.selColor);else pr(e);p.liveMeas=null,mi(),Je(),at()}function Hd(){let e=Yl(p.drag.box);p.liveMeas=ll(e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,Tn,2),mi()}function z_(e){let t=p.sel3d.region.y0;p.drag={...e,mode:"selmove",start:Vi(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function F_(e){p.drag={...e,mode:"selrot",steps:0}}function B_(e){let t=p.drag,{dx:n,dy:i,dz:s}=t;if(e.shiftKey){if(t.shiftAnchorY==null)t.shiftAnchorY=e.clientY,t.dyBase=i;i=t.dyBase+Math.round((t.shiftAnchorY-e.clientY)*Xl(Tn(t.start.x,t.start.y,t.start.z)))}else{t.shiftAnchorY=null;let r=Vi(t.start.y);if(r)n=r.x-t.start.x,s=r.z-t.start.z}if(n!==t.dx||i!==t.dy||s!==t.dz){if(!p.sel3d.lifted)Tl();sd(n-t.dx,i-t.dy,s-t.dz),t.dx=n,t.dy=i,t.dz=s}}function k_(e){let t=p.drag,n=e.altKey;if(n!==!!t.fine){if(t.fine=n,p.sel3d.lifted)Pl(),t.sx=e.clientX,t.steps=0,t.deg=0}let i=()=>{if(!p.sel3d.lifted)Tl(),Pl()};if(n){let s=Math.round((t.sx-e.clientX)/25)*15;if(s===(t.deg??0))return;i(),t.deg=s,ad(s,e.shiftKey)}else{let s=Math.round((t.sx-e.clientX)/70);if(s===t.steps)return;i(),t.steps=s,od(s,e.shiftKey)}}function H_(e){if(p.liveMeas=null,mi(),e)td(Yl(p.drag.box));Je()}var Pr=null;Pt.addEventListener("pointerdown",(e)=>{if(p.drag||p.painting)return;Pt.setPointerCapture(e.pointerId),Pr=e.pointerId,wo(e.clientX,e.clientY);let t={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};if(e.button===1){p.drag={...t,mode:"pan"};return}if(p.editObject){if(e.button===0)if(p.tool==="view"||p.tool==="measure")p.drag={...t,mode:"pan"};else if(p.tool==="select")if(p.sel3d&&Ll())z_(t);else Jn(),zd(t);else if(p.tool==="add"||p.tool==="erase")zd(t);else if(p.tool==="eyedropper")D_();else p.painting=!0,p.lastVox=null,Fd(e.shiftKey);else if(e.button===2)if(p.tool==="select"&&p.sel3d&&Ll())F_(t);else p.drag={...t,mode:"orbit"};return}let n=sl(),i=n&&p.selection.has(n);if(e.button===0)if(p.tool==="measure")p.drag={...t,mode:"pan"};else if(i){let s=C_();p.drag={...t,mode:"move",start:dr(s.minY),dx:0,dy:0,dz:0,shiftAnchorY:null,...s}}else p.drag={...t,mode:"pan",clickId:n};else if(e.button===2)if(i&&p.tool!=="measure")p.drag={...t,mode:"rotobj",steps:0};else p.drag={...t,mode:"orbit"}});Pt.addEventListener("pointermove",(e)=>{if(wo(e.clientX,e.clientY),p.editObject&&p.painting)Fd(e.shiftKey);else if(!p.drag)if(p.editObject&&p.tool!=="select"&&p.tool!=="view"&&p.tool!=="measure")Bd();else nn.visible=!1;else if(!R_(e)){if(p.drag.mode==="move")L_(e);else if(p.drag.mode==="rotobj")N_(e);else if(p.drag.mode==="box")U_(e);else if(p.drag.mode==="selmove")B_(e);else if(p.drag.mode==="selrot")k_(e)}A_(),T_(e)});Pt.addEventListener("pointerup",(e)=>{Pr=null;try{Pt.releasePointerCapture(e.pointerId)}catch(t){}if(p.tool==="measure"&&p.drag&&!Jo(e)){if(e.button===0){hu(),p.drag=null;return}if(e.button===2){uu(),p.drag=null;return}}if(p.editObject){if(p.painting)p.painting=!1,Je(),at();else if(p.drag&&p.drag.mode==="box")if(p.tool==="select")H_(Jo(e));else O_();else if(p.drag&&(p.drag.mode==="selmove"||p.drag.mode==="selrot"))Al();p.drag=null;return}if(p.drag){if(p.drag.mode==="pan"&&!Jo(e)&&e.button===0){let t=p.drag.clickId,n=e.shiftKey||e.ctrlKey||e.metaKey,i=new Set(p.selection);if(t){if(n)p.selection.has(t)?p.selection.delete(t):p.selection.add(t);else p.selection=new Set([t]);Ol(t)}else if(!n)p.selection.clear(),Ol(null);vi(i),Je()}else if(p.drag.mode==="move")I_(Jo(e)&&(e.ctrlKey||e.metaKey));else if(p.drag.mode==="rotobj"){if(p.drag.dirty)Je(),at()}}p.drag=null});function Gd(){if(Pr!==null){try{Pt.releasePointerCapture(Pr)}catch(t){}Pr=null}if(!p.drag&&!p.painting)return;let e=p.painting;if(p.drag&&(p.drag.mode==="selmove"||p.drag.mode==="selrot"))Al();if(p.drag=null,p.painting=!1,p.liveMeas=null,mi(),St(),e)Je(),at()}Pt.addEventListener("pointercancel",Gd);function Kn(){document.activeElement?.blur(),Gd()}Pt.addEventListener("pointerleave",()=>{if(nn.visible=!1,jn.style.display="none",p.tool==="measure"&&!p.drag&&!p.painting&&p.liveMeas)p.liveMeas=null,mi()});Pt.addEventListener("contextmenu",(e)=>e.preventDefault());Pt.addEventListener("wheel",(e)=>{e.preventDefault(),Xe.zoom*=e.deltaY>0?1.0526315789473684:0.95,Xe.zoom=Math.max(6,Math.min(vo,Xe.zoom))},{passive:!1});Pt.addEventListener("dblclick",(e)=>{if(p.editObject)return;wo(e.clientX,e.clientY);let t=sl();if(!t)return;Yi(Vn(t),!0)});function Jl(){return JSON.stringify({uid:ws(),root:Pn(p.root),collapsed:[...p.collapsed]})}function Wd(){let e=Jl(),t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=p.root.name||"Project",i=(o)=>String(o).padStart(2,"0"),s=new Date,r=`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())} ${i(s.getHours())}h${i(s.getMinutes())}m${i(s.getSeconds())}s`,a=document.createElement("a");a.href=t,a.download=`${n} -- ${r}.voxelier.json`,a.click(),URL.revokeObjectURL(t)}async function Zl(e){let t=JSON.parse(e),n=Go(t,!1);if(!n)throw Error("not a Voxelier scene file");if(Kn(),!Et())throw Error("could not save the current document");let i=Cr(n,t.uid);if(!await Zn(i.id,i.root,i.uid))throw Error("could not take the edit lock for the imported document")}function Vd(){let e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.onchange=()=>{let t=e.files&&e.files[0];if(!t)return;let n=new FileReader;n.onload=async()=>{try{await Zl(n.result)}catch(i){alert("Import failed: "+i.message)}},n.readAsText(t)},e.click()}var jo={view:"\uD83D\uDC41",add:"＋",erase:"－",paint:"\uD83E\uDEA3",eyedropper:"\uD83D\uDCA7",select:"⬚",measure:"\uD83D\uDCCF"},G_=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],Xd=(e,t,n,i)=>st("button",{className:"tool"+(n?" active":""),innerHTML:`<span class="ic">${e}</span>${t}`,onclick:i});function qd(e){if(p.tool===e)return;Jn(),p.tool=e,p.eyedropReturn=null,nn.visible=!1,Xn(),Je()}function Je(){let e=document.getElementById("tools");if(e.innerHTML="",!p.editObject&&p.tool!=="measure")p.tool="view";let t=st("div",{className:"toolgroup"}),n=p.editObject?G_:[{id:"view",label:"View"}];for(let i of n)t.appendChild(Xd(jo[i.id],i.label,p.tool===i.id,()=>qd(i.id)));if(t.appendChild(Xd(jo.measure,"Measure",p.tool==="measure",()=>qd("measure"))),p.editObject)t.appendChild(j_());if(e.append(t),jl(),p.tool==="view"){let i=document.getElementById("toolcursor");if(i)i.style.display="none"}zl()}document.getElementById("btn-save").onclick=Wd;document.getElementById("btn-load").onclick=Vd;var W_=document.getElementById("btn-docs"),Ir=document.getElementById("docslist"),V_=document.getElementById("docname");function jl(){V_.textContent=p.root?p.root.name||"Project":"Project"}function Qo(){let e=Od(),t=Mr();Ir.innerHTML="";for(let n of t){let i=st("div",{className:"docrow"+(n.id===e?" here":"")});i.append(st("button",{className:"docopen",textContent:n.name||"Project",title:new Date(n.updated).toLocaleString(),onclick:()=>{if(n.id===e)return;if(Kn(),!Et())return;Zn(n.id),Qo()}})),i.append(st("button",{className:"docdel",textContent:"✕",title:"Delete this document",onclick:async()=>{if(!confirm(`Delete "${n.name||"Project"}"? This cannot be undone.`))return;if(n.id===e){if(Kn(),!Et())return}if(!await Ud(n.id)){alert("Editing in another tab — cannot delete this document");return}if(n.id===e){let[s]=Mr();if(s)Zn(s.id);else{let r=Cr();Zn(r.id,r.root)}jl()}Qo()}})),Ir.append(i)}Ir.append(st("button",{className:"docnew",textContent:"＋ New document",onclick:()=>{if(Kn(),!Et())return;let n=Cr();Zn(n.id,n.root),jl(),Qo()}}))}W_.onclick=()=>{let e=Ir.hasAttribute("hidden");if(Ir.hidden=!e,e)Qo()};var Ko={ver:-1,cols:[]};function X_(){if(Ko.ver===p.voxVer)return Ko.cols;let e=new Map;return function t(n){if(n.type==="object")Yh(n.boxes,e);else n.children.forEach(t)}(p.root),Ko={ver:p.voxVer,cols:[...e.entries()].sort((t,n)=>n[1]-t[1]).map((t)=>t[0])},Ko.cols}var Kl=[];function Zo(e){Kl=[e,...Kl.filter((t)=>t!==e)].slice(0,6)}function $l(e){p.selColor=e,Je()}function q_(){let e=[];for(let t of[...Kl,...X_(),...Eo]){if(!e.includes(t))e.push(t);if(e.length>=6)break}return e}var Y_=(e)=>{let t=st("div",{className:"sw"+(e===p.selColor?" active":""),title:Gn(e),onclick:()=>$l(e)});return t.style.background=Gn(e),t};function $_(){if(p.tool!=="eyedropper")p.eyedropReturn=p.tool,Jn(),p.tool="eyedropper",Je()}function J_(e){let t=(e>>16&255)/255,n=(e>>8&255)/255,i=(e&255)/255,s=Math.max(t,n,i),r=Math.min(t,n,i),a=s-r,o=0;if(a){if(s===t)o=(n-i)/a%6;else if(s===n)o=(i-t)/a+2;else o=(t-n)/a+4;o=(o*60+360)%360}return[Math.round(o),Math.round((s?a/s:0)*100),Math.round(s*100)]}function Lr(e,t,n){t/=100,n/=100;let i=n*t,s=i*(1-Math.abs(e/60%2-1)),r=n-i,[a,o,l]=e<60?[i,s,0]:e<120?[s,i,0]:e<180?[0,i,s]:e<240?[0,s,i]:e<300?[s,0,i]:[i,0,s],c=(h)=>Math.round((h+r)*255);return c(a)<<16|c(o)<<8|c(l)}var Z_=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function j_(){let e=st("div",{className:"colorctl"}),t=st("div",{className:"colorbtn",title:"Draw colour — hover for recent colours / sliders"});t.style.background=Gn(p.selColor);let n=st("div",{className:"colorflyout"}),i=st("div",{className:"sliders"}),s={},[r,a,o]=J_(p.selColor),l={h:r,s:a,v:o},c=()=>{s.s.style.background=`linear-gradient(to right,${Gn(Lr(l.h,0,l.v))},${Gn(Lr(l.h,100,l.v))})`,s.v.style.background=`linear-gradient(to right,${Gn(Lr(l.h,l.s,0))},${Gn(Lr(l.h,l.s,100))})`},h=()=>{l.h=+s.h.value,l.s=+s.s.value,l.v=+s.v.value,p.selColor=Lr(l.h,l.s,l.v),t.style.background=Gn(p.selColor),c()};for(let g of Z_){let y=st("div",{className:"sliderline"}),x=st("input",{type:"range",className:"csl",title:g.title});x.min="0",x.max=String(g.max),x.value=String(l[g.key]),s[g.key]=x,x.addEventListener("input",h),y.append(st("span",{className:"lbl",textContent:g.label,title:g.title}),x),i.appendChild(y)}s.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",c();let u=st("div",{className:"sliderrow"});u.append(i,st("div",{className:"sw more",textContent:"\uD83D\uDCA7",title:"Pick a colour from a voxel (eyedropper)",onclick:$_}));let d=st("div",{className:"swrow"});for(let g of q_())d.appendChild(Y_(g));return n.append(u,d),e.append(t,n),e}{let e=document.getElementById("app"),t=(n)=>{e.classList.toggle("side-hidden",n),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",(e)=>{if(!Bo())return;if(e.target.tagName==="INPUT")return;if(p.drag||p.painting)return;let t=e.key.toLowerCase();if(e.ctrlKey||e.metaKey){if(t==="z"){if(e.preventDefault(),e.shiftKey)gr();else Oo();return}if(t==="y"){e.preventDefault(),gr();return}if(p.editObject){if(t==="c")Cl(),e.preventDefault();else if(t==="x")nd(),e.preventDefault();else if(t==="v")K_(),e.preventDefault();return}let i={c:Ar,x:Td,v:$o,d:Yo}[t];if(i)i(),e.preventDefault();return}switch(t){case"f":qn();break;case"escape":cd();break;case"n":if(!p.editObject)wd();break;case"r":if(!p.editObject)Cd();break;case"[":if(!p.editObject)kl(-1);break;case"]":if(!p.editObject)kl(1);break;case"delete":case"backspace":if(e.preventDefault(),p.editObject)Rl();else Tr();break}});function K_(){let e=[];if(Ns()==="node")for(let t of No())ur(t,t.pos,t.rot,e);else e.push(...Do());if(!e.length)return;p.tool="select",id(e),Je()}var Q_=["x","y","z"],Yd={x:0,y:0,z:0},$d=(e)=>`x${e.min.x}..${e.max.x} y${e.min.y}..${e.max.y} z${e.min.z}..${e.max.z}`,ey=(e)=>`(${e.max.x-e.min.x}x${e.max.y-e.min.y}x${e.max.z-e.min.z})`,ty=(e)=>e==="visible"?"":` [${e}]`,Ql=(e)=>`${e.id} ${e.type==="scene"?"S":"O"} "${e.name}"${ty(e.vis)}`,Hs=(e,t)=>{let n=Xt(t,e),i=n?Ss(n):{off:Yd,rot:0},s=sn(t,i.off,i.rot,ft());return Jt(s)?null:s},ec=(e)=>{let t=e?zt(e):p.root;if(!t)throw Error(`unknown node id: ${e}`);return Hs(p.root,t)},Jd=(e)=>{let t=[],n=(s,r,a)=>{if(s.vis==="hidden")return;let o=cn(r,Ze(s.pos,a)),l=a+s.rot&3;if(s.type==="object")for(let c of s.boxes)t.push($t(c,l,o));else for(let c of s.children)n(c,o,l)},i=Ss(Xt(e,p.root).slice(0,-1));return n(e,i.off,i.rot),t},ny=(e,t)=>!t||Jt(t)?`${Ql(e)} [empty]`:`${Ql(e)} ${$d(t)} ${ey(t)}${e.rot?` rot${e.rot*90}`:""}`;function Zd(e,{depth:t=2,hidden:n=!1}={}){let i=e?zt(e):p.root;if(!i)throw Error(`unknown node id: ${e}`);let s=[],r=(a,o)=>{let l=a.vis==="hidden"&&!n,c=l&&a.type==="scene"&&a.children.length?` (${a.children.length} children)`:"";if(s.push("  ".repeat(o)+(l?Ql(a)+c:ny(a,Hs(p.root,a)))),l||a.type==="object"||o>=t)return;for(let h of a.children)r(h,o+1)};return r(i,0),s.join(`
`)}function iy(e,t){let n=null,i=null;for(let r of e)for(let a of t){let o=[r.x0<a.x1&&a.x0<r.x1,r.y0<a.y1&&a.y0<r.y1,r.z0<a.z1&&a.z0<r.z1],l=[Math.max(r.x0-a.x1,a.x0-r.x1,0),Math.max(r.y0-a.y1,a.y0-r.y1,0),Math.max(r.z0-a.z1,a.z0-r.z1,0)];if(o[0]&&o[1]&&o[2]){let c=[Math.min(r.x1,a.x1)-Math.max(r.x0,a.x0),Math.min(r.y1,a.y1)-Math.max(r.y0,a.y0),Math.min(r.z1,a.z1)-Math.max(r.z0,a.z0)],h=c[0]*c[1]*c[2];if(!n||h>n.v)n={v:h,d:c}}else{let c=Math.max(...l);if(!i||c<i.m)i={m:c,g:l}}}if(n)return{kind:"overlap",max:0,text:`overlap ${n.d.join("x")}`};if(!i)return null;let s=i.g.map((r,a)=>r?`${Q_[a]} gap ${r}`:"").filter(Boolean);return{kind:"gap",max:i.m,text:s.length?s.join(" "):"touch"}}function jd(e,{within:t=60}={}){let n;if(e!==void 0)n=(typeof e==="string"?[e]:e).map((r)=>{let a=zt(r);if(!a)throw Error(`unknown node id: ${r}`);return a});else n=p.root.children.flatMap((r)=>r.vis==="hidden"?[]:r.type==="scene"&&r.name==="Immutable"?r.children.filter((a)=>a.vis!=="hidden"):[r]);let i=n.filter((r)=>(Xt(r)??[]).every((a)=>a.vis!=="hidden")).map((r)=>({n:r,boxes:Jd(r)})).filter((r)=>r.boxes.length),s=[];for(let[r,a]of i.entries())for(let o of i.slice(r+1)){let l=iy(a.boxes,o.boxes);if(!l||l.kind==="gap"&&l.max>t)continue;s.push(`${a.n.id} "${a.n.name}" ${l.kind==="overlap"?"~":"|"} ${o.n.id} "${o.n.name}": ${l.text}`)}return s.join(`
`)}function tc(e){let t=JSON.parse(e),n=Yn(t.root??t),i=[],s=(l)=>l?$d(l):"empty",r=(l,c)=>{let h=Xt(c,l);return h?.[h.length-2]?.id},a=(l)=>{let c=zt(l.id,n);if(!c){i.push(`+ ${l.id} "${l.name}": added ${s(Hs(p.root,l))}`);return}let h=Hs(n,c),u=Hs(p.root,l),d=r(n,c),g=r(p.root,l),y=l.type==="object"&&c.type==="object"&&JSON.stringify(l.boxes)!==JSON.stringify(c.boxes);if(s(h)===s(u)&&d===g&&!y&&l.vis===c.vis&&l.rot===c.rot){if(l.type==="scene")for(let f of l.children)a(f);return}let x=[`${s(h)} → ${s(u)}`];if(d!==g)x.push(`reparented ${d??"-"}→${g??"-"}`);if(y&&l.type==="object"&&c.type==="object")x.push(`geometry changed (${c.boxes.length}→${l.boxes.length} boxes)`);if(l.vis!==c.vis)x.push(`vis ${c.vis}→${l.vis}`);if(l.rot!==c.rot)x.push(`rot ${c.rot*90}→${l.rot*90}`);if(i.push(`~ ${l.id} "${l.name}": ${x.join("; ")}`),l.type==="scene")for(let f of l.children)a(f)};a(p.root);let o=(l)=>{if(!zt(l.id,p.root)){i.push(`- ${l.id} "${l.name}": removed ${s(Hs(n,l))}`);return}if(l.type==="scene")for(let c of l.children)o(c)};return o(n),i.join(`
`)}var sy=new Set(["top","front","side","iso"]);function ry(e,t){let n=new N((t.min.x+t.max.x)/2,(t.min.y+t.max.y)/2,(t.min.z+t.max.z)/2),i=Math.max(1,t.max.x-t.min.x),s=Math.max(1,t.max.y-t.min.y),r=Math.max(1,t.max.z-t.min.z),a=[i,s,r],o=Math.hypot(i,s,r),l=o*2+100;if(e==="iso"){let y=o/2,x=y/Math.sin(uo.degToRad(17.5))*1.08,f=Math.atan(1/Math.SQRT2),m=Ue.azim,_=new Ot(35,1,x-y*3,x+y*3);return _.position.copy(n).add(new N(Math.cos(f)*Math.sin(m),Math.sin(f),Math.cos(f)*Math.cos(m)).multiplyScalar(x)),_.lookAt(n),{camera:_,half:0}}let c=e==="top"?[0,2]:e==="front"?[0,1]:[2,1],h=Math.max(a[c[0]],a[c[1]])/2*1.12+2,u=e==="top"?[0,1,0]:e==="front"?[0,0,1]:[1,0,0],d=new Qs(-h,h,h,-h,0.1,l+o*2);if(d.position.copy(n).add(new N(u[0],u[1],u[2]).normalize().multiplyScalar(l)),e==="top")d.up.set(0,0,-1);return d.lookAt(n),{camera:d,half:h}}function oy(e,t,n,i){let s=t/(2*i),r=t/2,a=(n.min.x+n.max.x)/2,o=(n.min.z+n.max.z)/2;e.strokeStyle="rgba(0,0,0,0.14)",e.lineWidth=1;for(let l=Math.ceil((a-i)/50)*50;l<=a+i;l+=50){let c=r+(l-a)*s;e.beginPath(),e.moveTo(c,0),e.lineTo(c,t),e.stroke()}for(let l=Math.ceil((o-i)/50)*50;l<=o+i;l+=50){let c=r+(l-o)*s;e.beginPath(),e.moveTo(0,c),e.lineTo(t,c),e.stroke()}e.strokeStyle="#111",e.lineWidth=2,e.beginPath(),e.moveTo(18,t-20),e.lineTo(18+100*s,t-20),e.stroke(),e.font="12px ui-monospace, monospace",e.fillStyle="#111",e.fillText("1 m",18,t-26)}function ay(e,t,n,i){e.font="bold 11px ui-monospace, monospace",e.textAlign="center",e.textBaseline="middle";for(let{id:s,b:r}of i){let a=new N((r.min.x+r.max.x)/2,(r.min.y+r.max.y)/2,(r.min.z+r.max.z)/2).project(t),o=(a.x*0.5+0.5)*n,l=(1-(a.y*0.5+0.5))*n;if(o<0||l<0||o>n||l>n)continue;e.lineWidth=3,e.strokeStyle="#fff",e.strokeText(s,o,l),e.fillStyle="#111",e.fillText(s,o,l)}}function Kd(e,t={}){if(!sy.has(e))throw Error(`unknown view "${e}": use top, front, side or iso`);let n=t.size??900;if(!Number.isFinite(n)||n<=0)throw Error("size must be a positive finite number");if(t.cutY!==void 0&&!Number.isFinite(t.cutY))throw Error("cutY must be finite");let i=Math.max(64,Math.min(2048,Math.round(n))),s=t.focus===void 0?[]:typeof t.focus==="string"?[t.focus]:t.focus,r=ft();if(s.length){for(let C of s){let E=ec(C);if(!E)continue;r.min.x=Math.min(r.min.x,E.min.x),r.min.y=Math.min(r.min.y,E.min.y),r.min.z=Math.min(r.min.z,E.min.z),r.max.x=Math.max(r.max.x,E.max.x),r.max.y=Math.max(r.max.y,E.max.y),r.max.z=Math.max(r.max.z,E.max.z)}if(Jt(r))throw Error(`focus has no geometry: ${s}`)}else Object.assign(r,p.sceneBox&&!Jt(p.sceneBox)?p.sceneBox:{min:{x:-20,y:0,z:-20},max:{x:20,y:40,z:20}});let{camera:a,half:o}=ry(e,r),l=new Set,c=(C)=>{if(l.add(C.id),C.type==="scene")for(let E of C.children)c(E)};for(let C of s)c(zt(C));let h=t.isolate&&s.length>0,u=[],d=[],g=(C,E)=>{if(!Jt(E))u.push({id:C.id,b:E}),d.push(...Jd(C))};if(Rn(p.root,Yd,0,null,null,(C,E,L,z,M)=>{if(!M&&(!h||l.has(C.id)))g(C,sn(C,E,L,ft()))}),p.editObject&&p.editObject.vis==="visible"&&(!h||l.has(p.editObject.id)))g(p.editObject,sn(p.editObject,p.editXform.off,p.editXform.rot,ft()));let y=new er;y.background=new Pe(16777215),y.add(new nr(16777215,0.62));let x=new Di(16777215,0.78);x.position.set(40,150,30),y.add(x);let f=new Di(16777215,0.16);f.position.set(-6,5,-7),y.add(f);let m=Ts(d,hi,!0);if(m)y.add(new _t(m,sr));let _=dt.getSize(new Ve),v=dt.clippingPlanes,A=dt.shadowMap.enabled;try{dt.shadowMap.enabled=!1;let C=t.cutY??(e==="top"?150:void 0);dt.clippingPlanes=C===void 0?[]:[new Rt(new N(0,-1,0),C)],dt.setSize(i,i,!1),dt.render(y,a);let E=document.createElement("canvas");E.width=E.height=i;let L=E.getContext("2d");if(L.drawImage(dt.domElement,0,0,i,i),e==="top"&&t.grid!==!1)oy(L,i,r,o);if(t.labels!==!1)ay(L,a,i,u);return Promise.resolve(E.toDataURL("image/png"))}finally{m?.dispose(),dt.setSize(_.x,_.y,!1),dt.clippingPlanes=v,dt.shadowMap.enabled=A,dt.render(mt,$e),tn()}}var ea=()=>{if(!Bo())throw Error("document is open for editing in another tab")};function ly(e){let t=new Set,n=(i)=>{if(!i.id)return"node without an id";if(t.has(i.id))return`duplicate node id ${i.id}`;if(t.add(i.id),!i.pos||![i.pos.x,i.pos.y,i.pos.z].every(Number.isInteger))return`node ${i.id} has a non-integer or non-finite position`;if(i.type==="scene"){for(let r of i.children){let a=n(r);if(a)return a}return null}let s=`object ${i.id}${i.name?` "${i.name}"`:""}`;for(let r=0;r<i.boxes.length;r++){let a=i.boxes[r];if(![a.x0,a.y0,a.z0,a.x1,a.y1,a.z1].every(Number.isInteger))return`box ${r} of ${s} has a non-integer or non-finite coordinate`;if(a.x1<=a.x0||a.y1<=a.y0||a.z1<=a.z0)return`box ${r} of ${s} is empty or inverted`;for(let o=r+1;o<i.boxes.length;o++)if(cr([a],[i.boxes[o]],0,0,0))return`boxes ${r} and ${o} of ${s} overlap`}return null};return n(e)}function cy(e){p.root=Yn(JSON.parse(e)),p.path=[p.root],p.editObject=null,p.sel3d=null,p.selection.clear(),p.drag=null,p.painting=!1,p.lastVox=null,Xn(),St(),Je()}function hy(){let e=p.path.map((n)=>n.id);p.path=[p.root];for(let n of e.slice(1)){let i=p.context.children.find((s)=>s.id===n);if(!i||i.type!=="scene")break;p.path.push(i)}let t=p.editObject&&p.context.children.find((n)=>n.id===p.editObject.id);if(p.editObject=t&&t.type==="object"?t:null,p.sel3d)if(p.editObject)p.sel3d.boxes=lr(p.editObject.boxes,p.sel3d.region);else p.sel3d=null;p.selection=new Set([...p.selection].filter((n)=>p.context.children.some((i)=>i.id===n)))}var nc=!1;function uy(e){if(ea(),nc||p.drag||p.painting)throw Error("edit is unavailable mid-gesture or inside another edit");Et();let t=JSON.stringify(Pn(p.root));nc=!0;try{e(p.root);let n=ly(p.root);if(n)throw Error(`edit rejected: ${n}; restored the document`);hy(),St(),Je(),Et()}catch(n){throw cy(t),n}finally{nc=!1}return tc(t)}var Qd={iso:[Math.PI/4,Math.atan(1/Math.SQRT2)],top:[Math.PI/4,Math.PI/2],front:[0,0],side:[Math.PI/2,0]};function dy(e){if(!Object.hasOwn(Qd,e))throw Error(`unknown view "${e}": use iso, top, front or side`);let t=Qd[e];Xe.azim=Ue.azim=t[0],Xe.elev=Ue.elev=t[1],tn()}var fy={coordinates:"Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",nodes:"S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique — mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",api:"S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON(), edit(fn) -> compact diff, undo(), redo(), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}), relations(ids?, {within=60}) (overlap = largest overlapping box pair), render('top'|'front'|'side'|'iso', {focus, isolate, labels, grid, size=900, cutY}) -> Promise<PNG dataURL> (half-visible groups are omitted), diff(before), uid(), newObject(), newScene(name?), help.",edit:"edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step, persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, non-integer positions, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows. Node references go stale after undo, load or a rejected edit — look them up again inside fn.",example:"await voxelier.load(json); voxelier.edit(() => { const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56');"},py={S:p,ser:Pn,de:Yn,uid:Es,newObject:ki,newScene:Wn,findById:zt,worldBounds:ec,load:async(e)=>{ea(),await Zl(e)},exportJSON:Jl,edit:uy,diff:tc,outline:Zd,relations:jd,render:Kd,undo:()=>{ea(),Oo()},redo:()=>{ea(),gr()},frameView:qn,fitNode:Io,frameBox:Lo,view:dy,help:fy};function ef(){Object.assign(window,{voxelier:py})}for(let e of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(e,tn,{passive:!0,capture:!0});var my=()=>Math.abs(Xe.azim-Ue.azim)<0.001&&Math.abs(Xe.elev-Ue.elev)<0.001&&Math.abs(Xe.zoom-Ue.zoom)<0.001&&Ue.target.distanceToSquared(Xe.target)<0.000001;function tf(){let e=Pt.getBoundingClientRect();ut.w=e.width,ut.h=e.height,ut.x=e.left,ut.y=e.top}function nf(){let e=Math.max(1,Math.round(ut.w)),t=Math.max(1,Math.round(ut.h)),n=Math.min(devicePixelRatio,2);if(dt.getPixelRatio()!==n)dt.setPixelRatio(n);if(Pt.width!==Math.floor(e*n)||Pt.height!==Math.floor(t*n))dt.setSize(e,t,!1),tn()}window.addEventListener("resize",()=>{tf(),nf()});var ic=null;function gy(e){let t;try{t=Nd(e)}catch(i){return alert("Open failed: "+i.message),!1}let n=e!==ic;if(p.root=t,p.path=[t],p.editObject=null,p.sel3d=null,p.drag=null,p.painting=!1,p.lastVox=null,p.selection.clear(),n){if(p.collapsed=ic===null?new Set(ju()):new Set,p.tool==="measure")p.tool="view";Xn()}if(ic=e,Iu(),St(),Je(),n)qn();if(!Et())return!1;return tn(),!0}function xy(){return Kn(),Et()}function sf(){if(requestAnimationFrame(sf),nf(),Tu(),ir.tail>0||!my()){if(gu(),dt.render(mt,$e),du(),ir.tail>0)ir.tail--}}var rf=()=>{if(Kn(),!Sl())return;Et()};window.addEventListener("pagehide",rf);document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")rf()});window.addEventListener("beforeunload",(e)=>{if(!Sl())return;e.preventDefault(),e.returnValue=""});function _y(){Bu(gy,xy),ef();let e=Dd(Ku);tf(),sf(),Zn(e.id,e.root)}_y();
