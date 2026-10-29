var g={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var ph=2;var bs=0,mh=1,gh=2;class Di{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=1234567,_s=Math.PI/180,nr=180/Math.PI;function Ms(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[e&255]+Ut[e>>8&255]+Ut[e>>16&255]+Ut[e>>24&255]+"-"+Ut[t&255]+Ut[t>>8&255]+"-"+Ut[t>>16&15|64]+Ut[t>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ht(e,t,n){return Math.max(t,Math.min(n,e))}function Va(e,t){return(e%t+t)%t}function Of(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Ff(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function Qs(e,t,n){return(1-n)*e+n*t}function Bf(e,t,n,i){return Qs(e,t,1-Math.exp(-n*i))}function kf(e,t=1){return t-Math.abs(Va(e,t*2)-t)}function Hf(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function Gf(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function Wf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Vf(e,t){return e+Math.random()*(t-e)}function Xf(e){return e*(0.5-Math.random())}function qf(e){if(e!==void 0)Mc=e;let t=Mc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yf(e){return e*_s}function $f(e){return e*nr}function ka(e){return(e&e-1)===0&&e!==0}function jf(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function go(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Jf(e,t,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),y=a((i-t)/2);switch(s){case"XYX":e.set(o*h,l*u,l*d,o*c);break;case"YZY":e.set(l*d,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*d,o*h,o*c);break;case"XZX":e.set(o*h,l*y,l*f,o*c);break;case"YXY":e.set(l*f,o*h,l*y,o*c);break;case"ZYZ":e.set(l*y,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function Bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var _o={DEG2RAD:_s,RAD2DEG:nr,generateUUID:Ms,clamp:Ht,euclideanModulo:Va,mapLinear:Of,inverseLerp:Ff,lerp:Qs,damp:Bf,pingpong:kf,smoothstep:Hf,smootherstep:Gf,randInt:Wf,randFloat:Vf,randFloatSpread:Xf,seededRandom:qf,degToRad:Yf,radToDeg:$f,isPowerOfTwo:ka,ceilPowerOfTwo:jf,floorPowerOfTwo:go,setQuaternionFromProperEuler:Jf,normalize:Bt,denormalize:ms};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,r,a,o,l){if(He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],f=n[8],y=i[0],x=i[3],p=i[6],m=i[1],_=i[4],v=i[7],w=i[2],C=i[5],T=i[8];return s[0]=r*y+a*m+o*w,s[3]=r*x+a*_+o*C,s[6]=r*p+a*v+o*T,s[1]=l*y+c*m+h*w,s[4]=l*x+c*_+h*C,s[7]=l*p+c*v+h*T,s[2]=u*y+d*m+f*w,s[5]=u*x+d*_+f*C,s[8]=u*p+d*v+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=c*r-a*l,u=a*o-c*s,d=l*s-r*o,f=t*h+n*u+i*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=h*y,e[1]=(i*l-c*n)*y,e[2]=(a*n-i*r)*y,e[3]=u*y,e[4]=(c*t-i*o)*y,e[5]=(i*s-a*t)*y,e[6]=d*y,e[7]=(n*o-l*t)*y,e[8]=(r*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ma=new He;function xh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zf(){let e=xo("canvas");return e.style.display="block",e}var Sc={};function er(e){if(e in Sc)return;Sc[e]=!0,console.warn(e)}var Ec=new He().set(0.8224621,0.177538,0,0.0331941,0.9668058,0,0.0170827,0.0723974,0.9105199),wc=new He().set(1.2249401,-0.2249404,0,-0.0420569,1.0420571,0,-0.0196376,-0.0786361,1.0982735),Hr={["srgb-linear"]:{transfer:"linear",primaries:"rec709",toReference:(e)=>e,fromReference:(e)=>e},["srgb"]:{transfer:"srgb",primaries:"rec709",toReference:(e)=>e.convertSRGBToLinear(),fromReference:(e)=>e.convertLinearToSRGB()},["display-p3-linear"]:{transfer:"linear",primaries:"p3",toReference:(e)=>e.applyMatrix3(wc),fromReference:(e)=>e.applyMatrix3(Ec)},["display-p3"]:{transfer:"srgb",primaries:"p3",toReference:(e)=>e.convertSRGBToLinear().applyMatrix3(wc),fromReference:(e)=>e.applyMatrix3(Ec).convertLinearToSRGB()}},Kf=new Set(["srgb-linear","display-p3-linear"]),tt={enabled:!0,_workingColorSpace:"srgb-linear",get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Kf.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=Hr[t].toReference,s=Hr[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Hr[e].primaries},getTransfer:function(e){if(e==="")return"linear";return Hr[e].transfer}};function ys(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function ga(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var es;class Xa{static getDataURL(e){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{if(es===void 0)es=xo("canvas");es.width=e.width,es.height=e.height;let n=es.getContext("2d");if(e instanceof ImageData)n.putImageData(e,0,0);else n.drawImage(e,0,0,e.width,e.height);t=es}if(t.width>2048||t.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",0.6);else return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ys(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(ys(t[n]/255)*255);else t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Qf=0;class qa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Ms(),this.data=e,this.version=0}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(xa(i[r].image));else s.push(xa(i[r]))}else s=xa(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function xa(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Xa.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var ep=0;class en extends Di{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=en.DEFAULT_ANISOTROPY,c=""){super();if(this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ms(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c==="string")this.colorSpace=c;else er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===3001?"srgb":"";this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace==="srgb"?3001:3000}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===3001?"srgb":""}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=300;en.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],f=o[9],y=o[2],x=o[6],p=o[10];if(Math.abs(c-u)<0.01&&Math.abs(h-y)<0.01&&Math.abs(f-x)<0.01){if(Math.abs(c+u)<0.1&&Math.abs(h+y)<0.1&&Math.abs(f+x)<0.1&&Math.abs(l+d+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(d+1)/2,w=(p+1)/2,C=(c+u)/4,T=(h+y)/4,I=(f+x)/4;if(_>v&&_>w)if(_<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(_),i=C/n,s=T/n;else if(v>w)if(v<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(v),n=C/i,s=I/i;else if(w<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(w),n=T/s,i=I/s;return this.set(n,i,s,t),this}let m=Math.sqrt((x-f)*(x-f)+(h-y)*(h-y)+(u-c)*(u-c));if(Math.abs(m)<0.001)m=1;return this.x=(x-f)/m,this.y=(h-y)/m,this.z=(u-c)/m,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends Di{constructor(e=1,t=1,n={}){super();this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let i={width:e,height:t,depth:1};if(n.encoding!==void 0)er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?"srgb":"";n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n)this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose();this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);if(this.texture.source=new qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends _h{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class Ya extends en{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yh extends en{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],d=s[r+1],f=s[r+2],y=s[r+3];if(a===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=y;return}if(h!==y||o!==u||l!==d||c!==f){let x=1-a,p=o*u+l*d+c*f+h*y,m=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),C=Math.atan2(w,p*m);x=Math.sin(x*C)/w,a=Math.sin(a*C)/w}let v=a*m;if(o=o*x+u*v,l=l*x+d*v,c=c*x+f*v,h=h*x+y*v,x===1-a){let w=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=w,l*=w,c*=w,h*=w}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],u=s[r+1],d=s[r+2],f=s[r+3];return e[t]=a*f+c*h+o*d-l*u,e[t+1]=o*f+c*u+l*h-a*d,e[t+2]=l*f+c*d+a*u-o*h,e[t+3]=c*f-a*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),u=o(n/2),d=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=u*c*h+l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h-u*d*f;break;case"YXZ":this._x=u*c*h+l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h+u*d*f;break;case"ZXY":this._x=u*c*h-l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h-u*d*f;break;case"ZYX":this._x=u*c*h-l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h+u*d*f;break;case"YZX":this._x=u*c*h+l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h-u*d*f;break;case"XZY":this._x=u*c*h-l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=n+a+h;if(u>0){let d=0.5/Math.sqrt(u+1);this._w=0.25/d,this._x=(c-o)*d,this._y=(s-l)*d,this._z=(r-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(c-o)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(r-i)/d,this._x=(s+l)/d,this._y=(o+c)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<Number.EPSILON)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0)this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a;else this.copy(e);if(a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let o=1-a*a;if(o<=Number.EPSILON){let d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),h=2*(s*n-r*t);return this.x=t+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-0.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var _a=new N,Tc=new Ui;class li{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,pn);else pn.fromBufferAttribute(s,r);pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Gr.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Gr.copy(n.boundingBox)}Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z?!1:!0}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z?!1:!0}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Wr.subVectors(this.max,js),ts.subVectors(e.a,js),ns.subVectors(e.b,js),is.subVectors(e.c,js),ni.subVectors(ns,ts),ii.subVectors(is,ns),Ri.subVectors(ts,is);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ri.z,Ri.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ri.z,0,-Ri.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ri.y,Ri.x,0];if(!ya(t,ts,ns,is,Wr))return!1;if(t=[1,0,0,0,1,0,0,0,1],!ya(t,ts,ns,is,Wr))return!1;return Vr.crossVectors(ni,ii),t=[Vr.x,Vr.y,Vr.z],ya(t,ts,ns,is,Wr)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(pn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}var Fn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,Gr=new li,ts=new N,ns=new N,is=new N,ni=new N,ii=new N,Ri=new N,js=new N,Wr=new N,Vr=new N,Ci=new N;function ya(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Ci.fromArray(e,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=n.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tp=new li,Js=new N,va=new N;class ir{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else tp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(va)),this.expandByPoint(Js.copy(e.center).sub(va));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Bn=new N,ba=new N,Xr=new N,si=new N,Ma=new N,qr=new N,Sa=new N;class yo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(0.5),Xr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ba);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(Xr),a=si.dot(this.direction),o=-si.dot(Xr),l=si.lengthSq(),c=Math.abs(1-r*r),h,u,d,f;if(c>0)if(h=r*o-a,u=r*a-o,f=s*c,h>=0)if(u>=-f)if(u<=f){let y=1/c;h*=y,u*=y,d=h*(h+r*u+2*a)+u*(r*h+u+2*o)+l}else u=s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else u=-s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;else if(u<=-f)h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else if(u<=f)h=0,u=Math.min(Math.max(-s,-o),s),d=u*(u+2*o)+l;else h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+u*(u+2*o)+l;else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),d=-h*h+u*(u+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(ba).addScaledVector(Xr,u);return d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(l>=0)n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l;else n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l;if(c>=0)s=(e.min.y-u.y)*c,r=(e.max.y-u.y)*c;else s=(e.max.y-u.y)*c,r=(e.min.y-u.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h;else a=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,s){Ma.subVectors(t,e),qr.subVectors(n,e),Sa.crossVectors(Ma,qr);let r=this.direction.dot(Sa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;si.subVectors(this.origin,e);let o=a*this.direction.dot(qr.crossVectors(si,qr));if(o<0)return null;let l=a*this.direction.dot(Ma.cross(si));if(l<0)return null;if(o+l>r)return null;let c=-a*si.dot(Sa);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,i,s,r,a,o,l,c,h,u,d,f,y,x){if(vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,h,u,d,f,y,x)}set(e,t,n,i,s,r,a,o,l,c,h,u,d,f,y,x){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=h,p[14]=u,p[3]=d,p[7]=f,p[11]=y,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),r=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=r*c,d=r*h,f=a*c,y=a*h;t[0]=o*c,t[4]=-o*h,t[8]=l,t[1]=d+f*l,t[5]=u-y*l,t[9]=-a*o,t[2]=y-u*l,t[6]=f+d*l,t[10]=r*o}else if(e.order==="YXZ"){let u=o*c,d=o*h,f=l*c,y=l*h;t[0]=u+y*a,t[4]=f*a-d,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-a,t[2]=d*a-f,t[6]=y+u*a,t[10]=r*o}else if(e.order==="ZXY"){let u=o*c,d=o*h,f=l*c,y=l*h;t[0]=u-y*a,t[4]=-r*h,t[8]=f+d*a,t[1]=d+f*a,t[5]=r*c,t[9]=y-u*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let u=r*c,d=r*h,f=a*c,y=a*h;t[0]=o*c,t[4]=f*l-d,t[8]=u*l+y,t[1]=o*h,t[5]=y*l+u,t[9]=d*l-f,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let u=r*o,d=r*l,f=a*o,y=a*l;t[0]=o*c,t[4]=y-u*h,t[8]=f*h+d,t[1]=h,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=d*h+f,t[10]=u-y*h}else if(e.order==="XZY"){let u=r*o,d=r*l,f=a*o,y=a*l;t[0]=o*c,t[4]=-h,t[8]=l*c,t[1]=u*h+y,t[5]=r*c,t[9]=d*h-f,t[2]=f*h-d,t[6]=a*c,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,ip)}lookAt(e,t,n){let i=this.elements;if(Kt.subVectors(e,t),Kt.lengthSq()===0)Kt.z=1;if(Kt.normalize(),ri.crossVectors(n,Kt),ri.lengthSq()===0){if(Math.abs(n.z)===1)Kt.x+=0.0001;else Kt.z+=0.0001;Kt.normalize(),ri.crossVectors(n,Kt)}return ri.normalize(),Yr.crossVectors(Kt,ri),i[0]=ri.x,i[4]=Yr.x,i[8]=Kt.x,i[1]=ri.y,i[5]=Yr.y,i[9]=Kt.y,i[2]=ri.z,i[6]=Yr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],f=n[2],y=n[6],x=n[10],p=n[14],m=n[3],_=n[7],v=n[11],w=n[15],C=i[0],T=i[4],I=i[8],F=i[12],M=i[1],A=i[5],U=i[9],Y=i[13],J=i[2],R=i[6],B=i[10],O=i[14],X=i[3],G=i[7],V=i[11],Z=i[15];return s[0]=r*C+a*M+o*J+l*X,s[4]=r*T+a*A+o*R+l*G,s[8]=r*I+a*U+o*B+l*V,s[12]=r*F+a*Y+o*O+l*Z,s[1]=c*C+h*M+u*J+d*X,s[5]=c*T+h*A+u*R+d*G,s[9]=c*I+h*U+u*B+d*V,s[13]=c*F+h*Y+u*O+d*Z,s[2]=f*C+y*M+x*J+p*X,s[6]=f*T+y*A+x*R+p*G,s[10]=f*I+y*U+x*B+p*V,s[14]=f*F+y*Y+x*O+p*Z,s[3]=m*C+_*M+v*J+w*X,s[7]=m*T+_*A+v*R+w*G,s[11]=m*I+_*U+v*B+w*V,s[15]=m*F+_*Y+v*O+w*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],h=e[6],u=e[10],d=e[14],f=e[3],y=e[7],x=e[11],p=e[15];return f*(+s*o*h-i*l*h-s*a*u+n*l*u+i*a*d-n*o*d)+y*(+t*o*d-t*l*u+s*r*u-i*r*d+i*l*c-s*o*c)+x*(+t*l*h-t*a*d-s*r*h+n*r*d+s*a*c-n*l*c)+p*(-i*a*c-t*o*h+t*a*u+i*r*h-n*r*u+n*o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11],f=e[12],y=e[13],x=e[14],p=e[15],m=h*x*l-y*u*l+y*o*d-a*x*d-h*o*p+a*u*p,_=f*u*l-c*x*l-f*o*d+r*x*d+c*o*p-r*u*p,v=c*y*l-f*h*l+f*a*d-r*y*d-c*a*p+r*h*p,w=f*h*o-c*y*o-f*a*u+r*y*u+c*a*x-r*h*x,C=t*m+n*_+i*v+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=m*T,e[1]=(y*u*s-h*x*s-y*i*d+n*x*d+h*i*p-n*u*p)*T,e[2]=(a*x*s-y*o*s+y*i*l-n*x*l-a*i*p+n*o*p)*T,e[3]=(h*o*s-a*u*s-h*i*l+n*u*l+a*i*d-n*o*d)*T,e[4]=_*T,e[5]=(c*x*s-f*u*s+f*i*d-t*x*d-c*i*p+t*u*p)*T,e[6]=(f*o*s-r*x*s-f*i*l+t*x*l+r*i*p-t*o*p)*T,e[7]=(r*u*s-c*o*s+c*i*l-t*u*l-r*i*d+t*o*d)*T,e[8]=v*T,e[9]=(f*h*s-c*y*s-f*n*d+t*y*d+c*n*p-t*h*p)*T,e[10]=(r*y*s-f*a*s+f*n*l-t*y*l-r*n*p+t*a*p)*T,e[11]=(c*a*s-r*h*s-c*n*l+t*h*l+r*n*d-t*a*d)*T,e[12]=w*T,e[13]=(c*y*i-f*h*i+f*n*u-t*y*u-c*n*x+t*h*x)*T,e[14]=(f*a*i-r*y*i-f*n*o+t*y*o+r*n*x-t*a*x)*T,e[15]=(r*h*i-c*a*i+c*n*o-t*h*o-r*n*u+t*a*u)*T,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,h=a+a,u=s*l,d=s*c,f=s*h,y=r*c,x=r*h,p=a*h,m=o*l,_=o*c,v=o*h,{x:w,y:C,z:T}=n;return i[0]=(1-(y+p))*w,i[1]=(d+v)*w,i[2]=(f-_)*w,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(u+p))*C,i[6]=(x+m)*C,i[7]=0,i[8]=(f+_)*T,i[9]=(x-m)*T,i[10]=(1-(u+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=ss.set(i[0],i[1],i[2]).length(),r=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);let l=1/s,c=1/r,h=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=2000){let o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d,f;if(a===2000)d=-(r+s)/(r-s),f=-2*r*s/(r-s);else if(a===2001)d=-r/(r-s),f=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000){let o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,f,y;if(a===2000)f=(r+s)*h,y=-2*h;else if(a===2001)f=s*h,y=-1*h;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=y,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var ss=new N,mn=new vt,np=new N(0,0,0),ip=new N(1,1,1),ri=new N,Yr=new N,Kt=new N,Ac=new vt,Rc=new Ui;class vo{constructor(e=0,t=0,n=0,i=vo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(t){case"XYZ":if(this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,d),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,d),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Ht(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,d);break;case"XZY":if(this._z=Math.asin(-Ht(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,d),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vo.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var sp=0,Cc=new N,rs=new Ui,kn=new vt,$r=new N,Zs=new N,rp=new N,op=new Ui,Pc=new N(1,0,0),Lc=new N(0,1,0),Ic=new N(0,0,1),ap={type:"added"},lp={type:"removed"};class Pt extends Di{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();let e=new N,t=new vo,n=new Ui,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new He}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)$r.copy(e);else $r.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)kn.lookAt(Zs,$r,this.up);else kn.lookAt($r,Zs,this.up);if(this.quaternion.setFromRotationMatrix(kn),i)kn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(kn),this.quaternion.premultiply(rs.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D){if(e.parent!==null)e.parent.remove(e);e.parent=this,this.children.push(e),e.dispatchEvent(ap)}else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp);return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld);return e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.matrixWorldAutoUpdate===!0||e===!0)s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(t===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++){let a=i[s];if(a.matrixWorldAutoUpdate===!0)a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((a)=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),u=r(e.skeletons),d=r(e.animations),f=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(d.length>0)n.animations=d;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new N(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new N,Hn=new N,Ea=new N,Gn=new N,os=new N,as=new N,Nc=new N,wa=new N,Ta=new N,Aa=new N,jr=!1;class cn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),Hn.subVectors(n,t),Ea.subVectors(e,t);let r=gn.dot(gn),a=gn.dot(Hn),o=gn.dot(Ea),l=Hn.dot(Hn),c=Hn.dot(Ea),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(l*o-a*c)*u,f=(r*c-a*o)*u;return s.set(1-d-f,f,d)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,Gn)===null)return!1;return Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,n,i,s,r,a,o){if(jr===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0;return this.getInterpolation(e,t,n,i,s,r,a,o)}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,Gn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Gn.x),o.addScaledVector(r,Gn.y),o.addScaledVector(a,Gn.z),o}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Hn.subVectors(e,t),gn.cross(Hn).dot(i)<0?!0:!1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){if(jr===!1)console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0;return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;os.subVectors(i,n),as.subVectors(s,n),wa.subVectors(e,n);let o=os.dot(wa),l=as.dot(wa);if(o<=0&&l<=0)return t.copy(n);Ta.subVectors(e,i);let c=os.dot(Ta),h=as.dot(Ta);if(c>=0&&h<=c)return t.copy(i);let u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return r=o/(o-c),t.copy(n).addScaledVector(os,r);Aa.subVectors(e,s);let d=os.dot(Aa),f=as.dot(Aa);if(f>=0&&d<=f)return t.copy(s);let y=d*l-o*f;if(y<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(as,a);let x=c*f-d*h;if(x<=0&&h-c>=0&&d-f>=0)return Nc.subVectors(s,i),a=(h-c)/(h-c+(d-f)),t.copy(i).addScaledVector(Nc,a);let p=1/(x+y+u);return r=y*p,a=u*p,t.copy(n).addScaledVector(os,r).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}var vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ra(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Va(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ra(r,s,e+0.3333333333333333),this.g=Ra(r,s,e),this.b=Ra(r,s,e-0.3333333333333333)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=vh[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else console.warn("THREE.Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return tt.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ht(zt.r*255,0,255))*65536+Math.round(Ht(zt.g*255,0,255))*256+Math.round(Ht(zt.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(zt.copy(this),t);let{r:n,g:i,b:s}=zt,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e="srgb"){tt.fromWorkingColorSpace(zt.copy(this),e);let{r:t,g:n,b:i}=zt;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Jr);let n=Qs(oi.h,Jr.h,t),i=Qs(oi.s,Jr.s,t),s=Qs(oi.l,Jr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var zt=new Re;Re.NAMES=vh;var cp=0;class ci extends Di{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class zi extends ci{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var yt=new N,Zr=new Ve;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=ms(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=Bt(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=ms(t,this.array);return t}setX(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=ms(t,this.array);return t}setY(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=ms(t,this.array);return t}setZ(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=ms(t,this.array);return t}setW(e,t){if(this.normalized)t=Bt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}}class $a extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ja extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var hp=0,ln=new vt,Ca=new Pt,ls=new N,Qt=new li,Ks=new li,At=new N;class Wt extends Di{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((xh(e))?ja:$a)(e,1);else this.index=e;return this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new li;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Qt.setFromBufferAttribute(s),this.morphTargetsRelative)At.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(At);else this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ir;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(Ks.setFromBufferAttribute(a),this.morphTargetsRelative)At.addVectors(Qt.min,Ks.min),Qt.expandByPoint(At),At.addVectors(Qt.max,Ks.max),Qt.expandByPoint(At);else Qt.expandByPoint(Ks.min),Qt.expandByPoint(Ks.max)}Qt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(At.fromBufferAttribute(a,l),o)ls.fromBufferAttribute(e,l),At.add(ls);i=Math.max(i,n.distanceToSquared(At))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));let o=this.getAttribute("tangent").array,l=[],c=[];for(let M=0;M<a;M++)l[M]=new N,c[M]=new N;let h=new N,u=new N,d=new N,f=new Ve,y=new Ve,x=new Ve,p=new N,m=new N;function _(M,A,U){h.fromArray(i,M*3),u.fromArray(i,A*3),d.fromArray(i,U*3),f.fromArray(r,M*2),y.fromArray(r,A*2),x.fromArray(r,U*2),u.sub(h),d.sub(h),y.sub(f),x.sub(f);let Y=1/(y.x*x.y-x.x*y.y);if(!isFinite(Y))return;p.copy(u).multiplyScalar(x.y).addScaledVector(d,-y.y).multiplyScalar(Y),m.copy(d).multiplyScalar(y.x).addScaledVector(u,-x.x).multiplyScalar(Y),l[M].add(p),l[A].add(p),l[U].add(p),c[M].add(m),c[A].add(m),c[U].add(m)}let v=this.groups;if(v.length===0)v=[{start:0,count:n.length}];for(let M=0,A=v.length;M<A;++M){let U=v[M],{start:Y,count:J}=U;for(let R=Y,B=Y+J;R<B;R+=3)_(n[R+0],n[R+1],n[R+2])}let w=new N,C=new N,T=new N,I=new N;function F(M){T.fromArray(s,M*3),I.copy(T);let A=l[M];w.copy(A),w.sub(T.multiplyScalar(T.dot(A))).normalize(),C.crossVectors(I,A);let Y=C.dot(c[M])<0?-1:1;o[M*4]=w.x,o[M*4+1]=w.y,o[M*4+2]=w.z,o[M*4+3]=Y}for(let M=0,A=v.length;M<A;++M){let U=v[M],{start:Y,count:J}=U;for(let R=Y,B=Y+J;R<B;R+=3)F(n[R+0]),F(n[R+1]),F(n[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new N,s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N;if(e)for(let u=0,d=e.count;u<d;u+=3){let f=e.getX(u+0),y=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,x),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:h}=a,u=new l.constructor(o.length*c),d=0,f=0;for(let y=0,x=o.length;y<x;y++){if(a.isInterleavedBufferAttribute)d=o[y]*a.data.stride+a.offset;else d=o[y]*c;for(let p=0;p<c;p++)u[f++]=l[d++]}return new Gt(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Wt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let u=l[c],d=e(u,n);o.push(d)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];c.push(d.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere={center:a.center.toArray(),radius:a.radius};return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],h=s[l];for(let u=0,d=h.length;u<d;u++)c.push(h[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Dc=new vt,Pi=new yo,Kr=new ir,Uc=new N,cs=new N,hs=new N,us=new N,Pa=new N,Qr=new N,eo=new Ve,to=new Ve,no=new Ve,zc=new N,Oc=new N,Fc=new N,io=new N,so=new N;class mt extends Pt{constructor(e=new Wt,t=new zi){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Qr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(Pa.fromBufferAttribute(h,e),r)Qr.addScaledVector(Pa,c);else Qr.addScaledVector(Pa.sub(t),c)}t.add(Qr)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),Kr.containsPoint(Pi.origin)===!1){if(Pi.intersectSphere(Kr,Uc)===null)return;if(Pi.origin.distanceToSquared(Uc)>(e.far-e.near)**2)return}if(Dc.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Dc),n.boundingBox!==null){if(Pi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Pi)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:u,drawRange:d}=s;if(a!==null)if(Array.isArray(r))for(let f=0,y=u.length;f<y;f++){let x=u[f],p=r[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=m,w=_;v<w;v+=3){let C=a.getX(v),T=a.getX(v+1),I=a.getX(v+2);if(i=ro(this,p,e,n,l,c,h,C,T,I),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,t.push(i)}}else{let f=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=f,p=y;x<p;x+=3){let m=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);if(i=ro(this,r,e,n,l,c,h,m,_,v),i)i.faceIndex=Math.floor(x/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,y=u.length;f<y;f++){let x=u[f],p=r[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=m,w=_;v<w;v+=3){let C=v,T=v+1,I=v+2;if(i=ro(this,p,e,n,l,c,h,C,T,I),i)i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,t.push(i)}}else{let f=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=f,p=y;x<p;x+=3){let m=x,_=x+1,v=x+2;if(i=ro(this,r,e,n,l,c,h,m,_,v),i)i.faceIndex=Math.floor(x/3),t.push(i)}}}}function up(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;so.copy(o),so.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(so);if(c<n.near||c>n.far)return null;return{distance:c,point:so.clone(),object:e}}function ro(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,cs),e.getVertexPosition(l,hs),e.getVertexPosition(c,us);let h=up(e,t,n,i,cs,hs,us,io);if(h){if(s)eo.fromBufferAttribute(s,o),to.fromBufferAttribute(s,l),no.fromBufferAttribute(s,c),h.uv=cn.getInterpolation(io,cs,hs,us,eo,to,no,new Ve);if(r)eo.fromBufferAttribute(r,o),to.fromBufferAttribute(r,l),no.fromBufferAttribute(r,c),h.uv1=cn.getInterpolation(io,cs,hs,us,eo,to,no,new Ve),h.uv2=h.uv1;if(a){if(zc.fromBufferAttribute(a,o),Oc.fromBufferAttribute(a,l),Fc.fromBufferAttribute(a,c),h.normal=cn.getInterpolation(io,cs,hs,us,zc,Oc,Fc,new N),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new N,materialIndex:0};cn.getNormal(cs,hs,us,u.normal),h.face=u}return h}class wn extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=0,d=0;f("z","y","x",-1,-1,n,t,e,r,s,0),f("z","y","x",1,-1,n,t,-e,r,s,1),f("x","z","y",1,1,e,n,t,i,r,2),f("x","z","y",1,-1,e,n,-t,i,r,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2));function f(y,x,p,m,_,v,w,C,T,I,F){let M=v/T,A=w/I,U=v/2,Y=w/2,J=C/2,R=T+1,B=I+1,O=0,X=0,G=new N;for(let V=0;V<B;V++){let Z=V*A-Y;for(let K=0;K<R;K++){let D=K*M-U;G[y]=D*m,G[x]=Z*_,G[p]=J,l.push(G.x,G.y,G.z),G[y]=0,G[x]=0,G[p]=C>0?1:-1,c.push(G.x,G.y,G.z),h.push(K/T),h.push(1-V/I),O+=1}}for(let V=0;V<I;V++)for(let Z=0;Z<T;Z++){let K=u+Z+R*V,D=u+Z+R*(V+1),j=u+(Z+1)+R*(V+1),ie=u+(Z+1)+R*V;o.push(K,D,ie),o.push(D,j,ie),X+=6}a.addGroup(d,X,F),d+=X,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))t[n][i]=s.slice();else t[n][i]=s}}return t}function kt(e){let t={};for(let n=0;n<e.length;n++){let i=vs(e[n]);for(let s in i)t[s]=i[s]}return t}function dp(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bh(e){if(e.getRenderTarget()===null)return e.outputColorSpace;return tt.workingColorSpace}var fp={clone:vs,merge:kt},pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ci{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}}class Ja extends Pt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=2000}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Ja{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_s*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(_s*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_s*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}var ds=-90,fs=1;class Mh extends Pt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ot(ds,fs,e,t);i.layers=this.layers,this.add(i);let s=new Ot(ds,fs,e,t);s.layers=this.layers,this.add(s);let r=new Ot(ds,fs,e,t);r.layers=this.layers,this.add(r);let a=new Ot(ds,fs,e,t);a.layers=this.layers,this.add(a);let o=new Ot(ds,fs,e,t);o.layers=this.layers,this.add(o);let l=new Ot(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,o),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Za extends en{constructor(e,t,n,i,s,r,a,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:301;super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sh extends Sn{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];if(t.encoding!==void 0)er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?"srgb":"";this.texture=new Za(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wn(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let r=new mt(i,s),a=t.minFilter;if(t.minFilter===1008)t.minFilter=1006;return new Mh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var La=new N,gp=new N,xp=new He;class Rt{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=La.subVectors(n,t).cross(gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(La),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let s=-(e.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xp.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Li=new ir,oo=new N;class Mo{constructor(e=new Rt,t=new Rt,n=new Rt,i=new Rt,s=new Rt,r=new Rt){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000){let n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],y=i[10],x=i[11],p=i[12],m=i[13],_=i[14],v=i[15];if(n[0].setComponents(o-s,u-l,x-d,v-p).normalize(),n[1].setComponents(o+s,u+l,x+d,v+p).normalize(),n[2].setComponents(o+r,u+c,x+f,v+m).normalize(),n[3].setComponents(o-r,u-c,x-f,v-m).normalize(),n[4].setComponents(o-a,u-h,x-y,v-_).normalize(),t===2000)n[5].setComponents(o+a,u+h,x+y,v+_).normalize();else if(t===2001)n[5].setComponents(a,h,y,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=0.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(oo.x=i.normal.x>0?e.max.x:e.min.x,oo.y=i.normal.y>0?e.max.y:e.min.y,oo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eh(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){if(t===!0)return;if(n===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function _p(e,t){let n=t.isWebGL2,i=new WeakMap;function s(c,h){let{array:u,usage:d}=c,f=u.byteLength,y=e.createBuffer();e.bindBuffer(h,y),e.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=e.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=e.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=e.SHORT;else if(u instanceof Uint32Array)x=e.UNSIGNED_INT;else if(u instanceof Int32Array)x=e.INT;else if(u instanceof Int8Array)x=e.BYTE;else if(u instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let{array:d,_updateRange:f,updateRanges:y}=h;if(e.bindBuffer(u,c),f.count===-1&&y.length===0)e.bufferSubData(u,0,d);if(y.length!==0){for(let x=0,p=y.length;x<p;x++){let m=y[x];if(n)e.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count);else e.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}if(f.count!==-1){if(n)e.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count);else e.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count));f.count=-1}h.onUploadCallback()}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;return i.get(c)}function o(c){if(c.isInterleavedBufferAttribute)c=c.data;let h=i.get(c);if(h)e.deleteBuffer(h.buffer),i.delete(c)}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);if(!d||d.version<c.version)i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}if(c.isInterleavedBufferAttribute)c=c.data;let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Ss extends Wt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=e/a,u=t/o,d=[],f=[],y=[],x=[];for(let p=0;p<c;p++){let m=p*u-r;for(let _=0;_<l;_++){let v=_*h-s;f.push(v,-m,0),y.push(0,0,1),x.push(_/a),x.push(1-p/o)}}for(let p=0;p<o;p++)for(let m=0;m<a;m++){let _=m+l*p,v=m+l*(p+1),w=m+1+l*(p+1),C=m+1+l*p;d.push(_,v,C),d.push(v,w,C)}this.setIndex(d),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`
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
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,_m=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`;var Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Im=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,jg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:yp,alphahash_pars_fragment:vp,alphamap_fragment:bp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Tp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Pp,bsdfs:Lp,iridescence_fragment:Ip,bumpmap_pars_fragment:Np,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Op,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:Hp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:$p,colorspace_fragment:jp,colorspace_pars_fragment:Jp,envmap_fragment:Zp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Qp,envmap_pars_vertex:em,envmap_physical_pars_fragment:dm,envmap_vertex:tm,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:om,lightmap_fragment:am,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:xm,lights_physical_pars_fragment:_m,lights_fragment_begin:ym,lights_fragment_maps:vm,lights_fragment_end:bm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:wm,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Lm,morphcolor_vertex:Im,morphnormal_vertex:Nm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:zm,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Bm,normal_vertex:km,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:$m,project_vertex:jm,dithering_fragment:Jm,dithering_pars_fragment:Zm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:tg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:yg,backgroundCube_vert:vg,backgroundCube_frag:bg,cube_vert:Mg,cube_frag:Sg,depth_vert:Eg,depth_frag:wg,distanceRGBA_vert:Tg,distanceRGBA_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Lg,meshbasic_vert:Ig,meshbasic_frag:Ng,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:zg,meshmatcap_frag:Og,meshnormal_vert:Fg,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Vg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:$g,shadow_frag:jg,sprite_vert:Jg,sprite_frag:Zg},ae={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ve(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mn={basic:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:kt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:kt([ae.lights,ae.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Mn.physical={uniforms:kt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var ao={r:0,b:0,g:0};function Kg(e,t,n,i,s,r,a){let o=new Re(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function y(p,m){let _=!1,v=m.isScene===!0?m.background:null;if(v&&v.isTexture)v=(m.backgroundBlurriness>0?n:t).get(v);if(v===null)x(o,l);else if(v&&v.isColor)x(v,1),_=!0;let w=e.xr.getEnvironmentBlendMode();if(w==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(w==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||_)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(v&&(v.isCubeTexture||v.mapping===306)){if(h===void 0)h=new mt(new wn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:vs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=tt.getTransfer(v.colorSpace)!=="srgb",u!==v||d!==v.version||f!==e.toneMapping)h.material.needsUpdate=!0,u=v,d=v.version,f=e.toneMapping;h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)}else if(v&&v.isTexture){if(c===void 0)c=new mt(new Ss(2,2),new En({name:"BackgroundMaterial",uniforms:vs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c);if(c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!=="srgb",v.matrixAutoUpdate===!0)v.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(v.matrix),u!==v||d!==v.version||f!==e.toneMapping)c.material.needsUpdate=!0,u=v,d=v.version,f=e.toneMapping;c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)}}function x(p,m){p.getRGB(ao,bh(e)),i.buffers.color.setClear(ao.r,ao.g,ao.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:y}}function Qg(e,t,n,i){let s=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(R,B,O,X,G){let V=!1;if(a){let Z=x(X,O,B);if(c!==Z)c=Z,f(c.object);if(V=m(R,X,O,G),V)_(R,X,O,G)}else{let Z=B.wireframe===!0;if(c.geometry!==X.id||c.program!==O.id||c.wireframe!==Z)c.geometry=X.id,c.program=O.id,c.wireframe=Z,V=!0}if(G!==null)n.update(G,e.ELEMENT_ARRAY_BUFFER);if(V||h){if(h=!1,F(R,B,O,X),G!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(G).buffer)}}function d(){if(i.isWebGL2)return e.createVertexArray();return r.createVertexArrayOES()}function f(R){if(i.isWebGL2)return e.bindVertexArray(R);return r.bindVertexArrayOES(R)}function y(R){if(i.isWebGL2)return e.deleteVertexArray(R);return r.deleteVertexArrayOES(R)}function x(R,B,O){let X=O.wireframe===!0,G=o[R.id];if(G===void 0)G={},o[R.id]=G;let V=G[B.id];if(V===void 0)V={},G[B.id]=V;let Z=V[X];if(Z===void 0)Z=p(d()),V[X]=Z;return Z}function p(R){let B=[],O=[],X=[];for(let G=0;G<s;G++)B[G]=0,O[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:X,object:R,attributes:{},index:null}}function m(R,B,O,X){let G=c.attributes,V=B.attributes,Z=0,K=O.getAttributes();for(let D in K)if(K[D].location>=0){let ie=G[D],se=V[D];if(se===void 0){if(D==="instanceMatrix"&&R.instanceMatrix)se=R.instanceMatrix;if(D==="instanceColor"&&R.instanceColor)se=R.instanceColor}if(ie===void 0)return!0;if(ie.attribute!==se)return!0;if(se&&ie.data!==se.data)return!0;Z++}if(c.attributesNum!==Z)return!0;if(c.index!==X)return!0;return!1}function _(R,B,O,X){let G={},V=B.attributes,Z=0,K=O.getAttributes();for(let D in K)if(K[D].location>=0){let ie=V[D];if(ie===void 0){if(D==="instanceMatrix"&&R.instanceMatrix)ie=R.instanceMatrix;if(D==="instanceColor"&&R.instanceColor)ie=R.instanceColor}let se={};if(se.attribute=ie,ie&&ie.data)se.data=ie.data;G[D]=se,Z++}c.attributes=G,c.attributesNum=Z,c.index=X}function v(){let R=c.newAttributes;for(let B=0,O=R.length;B<O;B++)R[B]=0}function w(R){C(R,0)}function C(R,B){let O=c.newAttributes,X=c.enabledAttributes,G=c.attributeDivisors;if(O[R]=1,X[R]===0)e.enableVertexAttribArray(R),X[R]=1;if(G[R]!==B)(i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),G[R]=B}function T(){let R=c.newAttributes,B=c.enabledAttributes;for(let O=0,X=B.length;O<X;O++)if(B[O]!==R[O])e.disableVertexAttribArray(O),B[O]=0}function I(R,B,O,X,G,V,Z){if(Z===!0)e.vertexAttribIPointer(R,B,O,G,V);else e.vertexAttribPointer(R,B,O,X,G,V)}function F(R,B,O,X){if(i.isWebGL2===!1&&(R.isInstancedMesh||X.isInstancedBufferGeometry)){if(t.get("ANGLE_instanced_arrays")===null)return}v();let G=X.attributes,V=O.getAttributes(),Z=B.defaultAttributeValues;for(let K in V){let D=V[K];if(D.location>=0){let j=G[K];if(j===void 0){if(K==="instanceMatrix"&&R.instanceMatrix)j=R.instanceMatrix;if(K==="instanceColor"&&R.instanceColor)j=R.instanceColor}if(j!==void 0){let ie=j.normalized,se=j.itemSize,re=n.get(j);if(re===void 0)continue;let{buffer:ce,type:le,bytesPerElement:ue}=re,we=i.isWebGL2===!0&&(le===e.INT||le===e.UNSIGNED_INT||j.gpuType===1013);if(j.isInterleavedBufferAttribute){let L=j.data,Qe=L.stride,Le=j.offset;if(L.isInstancedInterleavedBuffer){for(let xe=0;xe<D.locationSize;xe++)C(D.location+xe,L.meshPerAttribute);if(R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0)X._maxInstanceCount=L.meshPerAttribute*L.count}else for(let xe=0;xe<D.locationSize;xe++)w(D.location+xe);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let xe=0;xe<D.locationSize;xe++)I(D.location+xe,se/D.locationSize,le,ie,Qe*ue,(Le+se/D.locationSize*xe)*ue,we)}else{if(j.isInstancedBufferAttribute){for(let L=0;L<D.locationSize;L++)C(D.location+L,j.meshPerAttribute);if(R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0)X._maxInstanceCount=j.meshPerAttribute*j.count}else for(let L=0;L<D.locationSize;L++)w(D.location+L);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let L=0;L<D.locationSize;L++)I(D.location+L,se/D.locationSize,le,ie,se*ue,se/D.locationSize*L*ue,we)}}else if(Z!==void 0){let ie=Z[K];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(D.location,ie);break;case 3:e.vertexAttrib3fv(D.location,ie);break;case 4:e.vertexAttrib4fv(D.location,ie);break;default:e.vertexAttrib1fv(D.location,ie)}}}}T()}function M(){Y();for(let R in o){let B=o[R];for(let O in B){let X=B[O];for(let G in X)y(X[G].object),delete X[G];delete B[O]}delete o[R]}}function A(R){if(o[R.id]===void 0)return;let B=o[R.id];for(let O in B){let X=B[O];for(let G in X)y(X[G].object),delete X[G];delete B[O]}delete o[R.id]}function U(R){for(let B in o){let O=o[B];if(O[R.id]===void 0)continue;let X=O[R.id];for(let G in X)y(X[G].object),delete X[G];delete O[R.id]}}function Y(){if(J(),h=!0,c===l)return;c=l,f(c.object)}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:w,disableUnusedAttributes:T}}function ex(e,t,n,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){e.drawArrays(r,h,u),n.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,y;if(s)f=e,y="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[y](r,h,u,d),n.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<d;y++)this.render(h[y],u[y]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let y=0;for(let x=0;x<d;x++)y+=u[x];n.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function tx(e,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let a=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext",o=n.precision!==void 0?n.precision:"highp",l=r(o);if(l!==o)console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l;let c=a||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),p=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,w=a||t.has("OES_texture_float"),C=v&&w,T=a?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:T}}function nx(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Rt,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,f){let{clippingPlanes:y,clipIntersection:x,clipShadows:p}=u,m=e.get(u);if(!s||y===null||y.length===0||r&&!p)if(r)h(null);else c();else{let _=r?0:i,v=_*4,w=m.clippingState||null;l.value=w,w=h(y,d,v,f);for(let C=0;C!==v;++C)w[C]=n[C];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function h(u,d,f,y){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,y!==!0||p===null){let m=f+x*4,_=d.matrixWorldInverse;if(o.getNormalMatrix(_),p===null||p.length<m)p=new Float32Array(m);for(let v=0,w=f;v!==x;++v,w+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function ix(e){let t=new WeakMap;function n(a,o){if(o===303)a.mapping=301;else if(o===304)a.mapping=302;return a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===303||o===304)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sh(l.height/2);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);if(l!==void 0)t.delete(o),l.dispose()}function r(){t=new WeakMap}return{get:i,dispose:r}}class sr extends Ja{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var gs=4,Bc=[0.125,0.215,0.35,0.446,0.526,0.582],Ni=20,Ia=new sr,kc=new Re,Na=null,Da=0,Ua=0,Ii=(1+Math.sqrt(5))/2,ps=1/Ii,Hc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ii,ps),new N(0,Ii,-ps),new N(ps,0,Ii),new N(-ps,0,Ii),new N(Ii,ps,0),new N(-Ii,ps,0)];class Ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=0.1,i=100){Na=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0)this._blur(s,0,0,t);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Da,Ua),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===301||e.mapping===302)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);Na=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Gc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=rx(s,e,t)}return i}_compileMaterial(e){let t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i){let a=new Ot(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,{autoClear:h,toneMapping:u}=c;c.getClearColor(kc),c.toneMapping=0,c.autoClear=!1;let d=new zi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),f=new mt(new wn,d),y=!1,x=e.background;if(x){if(x.isColor)d.color.copy(x),e.background=null,y=!0}else d.color.copy(kc),y=!0;for(let p=0;p<6;p++){let m=p%3;if(m===0)a.up.set(0,o[p],0),a.lookAt(l[p],0,0);else if(m===1)a.up.set(0,0,o[p]),a.lookAt(0,l[p],0);else a.up.set(0,o[p],0),a.lookAt(0,0,l[p]);let _=this._cubeSize;if(lo(i,m*_,p>2?_:0,_,_),c.setRenderTarget(i),y)c.render(f,a);c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===301||e.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Vc();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Wc();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let o=this._cubeSize;lo(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(r,Ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Hc[(i-1)%Hc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let c=3,h=new mt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,f=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),y=s/f,x=isFinite(s)?1+Math.floor(c*y):Ni;if(x>Ni)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ni}`);let p=[],m=0;for(let T=0;T<Ni;++T){let I=T/y,F=Math.exp(-I*I/2);if(p.push(F),T===0)m+=F;else if(T<x)m+=2*F}for(let T=0;T<p.length;T++)p[T]=p[T]/m;if(u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a)u.poleAxis.value=a;let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[i],w=3*v*(i>_-gs?i-_+gs:0),C=4*(this._cubeSize-v);lo(t,w,C,3*v,2*v),o.setRenderTarget(t),o.render(h,Ia)}}function sx(e){let t=[],n=[],i=[],s=e,r=e-gs+1+Bc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;if(a>e-gs)l=Bc[a-e+gs-1];else if(a===0)l=0;i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,y=6,x=3,p=2,m=1,_=new Float32Array(x*y*f),v=new Float32Array(p*y*f),w=new Float32Array(m*y*f);for(let T=0;T<f;T++){let I=T%3*2/3-1,F=T>2?0:-1,M=[I,F,0,I+0.6666666666666666,F,0,I+0.6666666666666666,F+1,0,I,F,0,I+0.6666666666666666,F+1,0,I,F+1,0];_.set(M,x*y*T),v.set(d,p*y*T);let A=[T,T,T,T,T,T];w.set(A,m*y*T)}let C=new Wt;if(C.setAttribute("position",new Gt(_,x)),C.setAttribute("uv",new Gt(v,p)),C.setAttribute("faceIndex",new Gt(w,m)),t.push(C),s>gs)s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Gc(e,t,n){let i=new Sn(e,t,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function rx(e,t,n){let i=new Float32Array(Ni),s=new N(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function ox(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);if(n===null)n=new Ha(e);return u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),t.set(o,u),u.texture}else if(t.has(o))return t.get(o).texture;else{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){if(n===null)n=new Ha(e);let d=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)if(o[h]!==void 0)l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);if(c!==void 0)t.delete(l),c.dispose()}function a(){if(t=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:a}}function ax(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){if(i.isWebGL2)n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance");else n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays");n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let s=n(i);if(s===null)console.warn("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function lx(e,t,n,i){let s={},r=new WeakMap;function a(u){let d=u.target;if(d.index!==null)t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let x=d.morphAttributes[y];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);if(f)t.remove(f),r.delete(d);if(i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;n.memory.geometries--}function o(u,d){if(s[d.id]===!0)return d;return d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++,d}function l(u){let d=u.attributes;for(let y in d)t.update(d[y],e.ARRAY_BUFFER);let f=u.morphAttributes;for(let y in f){let x=f[y];for(let p=0,m=x.length;p<m;p++)t.update(x[p],e.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,y=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,w=_.length;v<w;v+=3){let C=_[v+0],T=_[v+1],I=_[v+2];d.push(C,T,T,I,I,C)}}else if(y!==void 0){let _=y.array;x=y.version;for(let v=0,w=_.length/3-1;v<w;v+=3){let C=v+0,T=v+1,I=v+2;d.push(C,T,T,I,I,C)}}else return;let p=new((xh(d))?ja:$a)(d,1);p.version=x;let m=r.get(u);if(m)t.remove(m);r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;if(f!==null){if(d.version<f.version)c(u)}}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function cx(e,t,n,i){let s=i.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,y){e.drawElements(r,y,o,f*l),n.update(y,r,1)}function u(f,y,x){if(x===0)return;let p,m;if(s)p=e,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,y,o,f*l,x),n.update(y,r,x)}function d(f,y,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/l,y[m]);else{p.multiDrawElementsWEBGL(r,y,0,o,f,0,x);let m=0;for(let _=0;_<x;_++)m+=y[_];n.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function hx(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ux(e,t){return e[0]-t[0]}function dx(e,t){return Math.abs(t[1])-Math.abs(e[1])}function fx(e,t,n){let i={},s=new Float32Array(8),r=new WeakMap,a=new Ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==y){let R=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",R)};if(x!==void 0)x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],F=0;if(_===!0)F=1;if(v===!0)F=2;if(w===!0)F=3;let M=h.attributes.position.count*F,A=1;if(M>t.maxTextureSize)A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize;let U=new Float32Array(M*A*4*y),Y=new Ya(U,M,A,y);Y.type=1015,Y.needsUpdate=!0;let J=F*4;for(let B=0;B<y;B++){let O=C[B],X=T[B],G=I[B],V=M*A*4*B;for(let Z=0;Z<O.count;Z++){let K=Z*J;if(_===!0)a.fromBufferAttribute(O,Z),U[V+K+0]=a.x,U[V+K+1]=a.y,U[V+K+2]=a.z,U[V+K+3]=0;if(v===!0)a.fromBufferAttribute(X,Z),U[V+K+4]=a.x,U[V+K+5]=a.y,U[V+K+6]=a.z,U[V+K+7]=0;if(w===!0)a.fromBufferAttribute(G,Z),U[V+K+8]=a.x,U[V+K+9]=a.y,U[V+K+10]=a.z,U[V+K+11]=G.itemSize===4?a.w:1}}x={count:y,texture:Y,size:new Ve(M,A)},r.set(h,x),h.addEventListener("dispose",R)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(e,"morphTargetBaseInfluence",m),u.getUniforms().setValue(e,"morphTargetInfluences",d),u.getUniforms().setValue(e,"morphTargetsTexture",x.texture,n),u.getUniforms().setValue(e,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,y=i[h.id];if(y===void 0||y.length!==f){y=[];for(let v=0;v<f;v++)y[v]=[v,0];i[h.id]=y}for(let v=0;v<f;v++){let w=y[v];w[0]=v,w[1]=d[v]}y.sort(dx);for(let v=0;v<8;v++)if(v<f&&y[v][1])o[v][0]=y[v][0],o[v][1]=y[v][1];else o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0;o.sort(ux);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let w=o[v],C=w[0],T=w[1];if(C!==Number.MAX_SAFE_INTEGER&&T){if(x&&h.getAttribute("morphTarget"+v)!==x[C])h.setAttribute("morphTarget"+v,x[C]);if(p&&h.getAttribute("morphNormal"+v)!==p[C])h.setAttribute("morphNormal"+v,p[C]);s[v]=T,m+=T}else{if(x&&h.hasAttribute("morphTarget"+v)===!0)h.deleteAttribute("morphTarget"+v);if(p&&h.hasAttribute("morphNormal"+v)===!0)h.deleteAttribute("morphNormal"+v);s[v]=0}}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",_),u.getUniforms().setValue(e,"morphTargetInfluences",s)}}return{update:l}}function px(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c)t.update(u),s.set(u,c);if(l.isInstancedMesh){if(l.hasEventListener("dispose",o)===!1)l.addEventListener("dispose",o);if(s.get(l)!==c){if(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,e.ARRAY_BUFFER);s.set(l,c)}}if(l.isSkinnedMesh){let d=l.skeleton;if(s.get(d)!==c)d.update(),s.set(d,c)}return u}function a(){s=new WeakMap}function o(l){let c=l.target;if(c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null)n.remove(c.instanceColor)}return{update:r,dispose:a}}class Qa extends en{constructor(e,t,n,i,s,r,a,o,l,c){if(c=c!==void 0?c:1026,c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&c===1026)n=1014;if(n===void 0&&c===1027)n=1020;super(null,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);if(this.compareFunction!==null)t.compareFunction=this.compareFunction;return t}}var wh=new en,Th=new Qa(1,1);Th.compareFunction=515;var Ah=new Ya,Rh=new yh,Ch=new Za,Xc=[],qc=[],Yc=new Float32Array(16),$c=new Float32Array(9),jc=new Float32Array(4);function Es(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Xc[s];if(r===void 0)r=new Float32Array(s),Xc[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function Mt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function St(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function So(e,t){let n=qc[t];if(n===void 0)n=new Int32Array(t),qc[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function mx(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function gx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Mt(n,t))return;e.uniform2fv(this.addr,t),St(n,t)}}function xx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(Mt(n,t))return;e.uniform3fv(this.addr,t),St(n,t)}}function _x(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Mt(n,t))return;e.uniform4fv(this.addr,t),St(n,t)}}function yx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Mt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),St(n,t)}else{if(Mt(n,i))return;jc.set(i),e.uniformMatrix2fv(this.addr,!1,jc),St(n,i)}}function vx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Mt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),St(n,t)}else{if(Mt(n,i))return;$c.set(i),e.uniformMatrix3fv(this.addr,!1,$c),St(n,i)}}function bx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Mt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),St(n,t)}else{if(Mt(n,i))return;Yc.set(i),e.uniformMatrix4fv(this.addr,!1,Yc),St(n,i)}}function Mx(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function Sx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Mt(n,t))return;e.uniform2iv(this.addr,t),St(n,t)}}function Ex(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Mt(n,t))return;e.uniform3iv(this.addr,t),St(n,t)}}function wx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Mt(n,t))return;e.uniform4iv(this.addr,t),St(n,t)}}function Tx(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function Ax(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Mt(n,t))return;e.uniform2uiv(this.addr,t),St(n,t)}}function Rx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Mt(n,t))return;e.uniform3uiv(this.addr,t),St(n,t)}}function Cx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Mt(n,t))return;e.uniform4uiv(this.addr,t),St(n,t)}}function Px(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r=this.type===e.SAMPLER_2D_SHADOW?Th:wh;n.setTexture2D(t||r,s)}function Lx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||Rh,s)}function Ix(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(t||Ch,s)}function Nx(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||Ah,s)}function Dx(e){switch(e){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return _x;case 35674:return yx;case 35675:return vx;case 35676:return bx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return Ex;case 35669:case 35673:return wx;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Nx}}function Ux(e,t){e.uniform1fv(this.addr,t)}function zx(e,t){let n=Es(t,this.size,2);e.uniform2fv(this.addr,n)}function Ox(e,t){let n=Es(t,this.size,3);e.uniform3fv(this.addr,n)}function Fx(e,t){let n=Es(t,this.size,4);e.uniform4fv(this.addr,n)}function Bx(e,t){let n=Es(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kx(e,t){let n=Es(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Hx(e,t){let n=Es(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gx(e,t){e.uniform1iv(this.addr,t)}function Wx(e,t){e.uniform2iv(this.addr,t)}function Vx(e,t){e.uniform3iv(this.addr,t)}function Xx(e,t){e.uniform4iv(this.addr,t)}function qx(e,t){e.uniform1uiv(this.addr,t)}function Yx(e,t){e.uniform2uiv(this.addr,t)}function $x(e,t){e.uniform3uiv(this.addr,t)}function jx(e,t){e.uniform4uiv(this.addr,t)}function Jx(e,t,n){let i=this.cache,s=t.length,r=So(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTexture2D(t[a]||wh,r[a])}function Zx(e,t,n){let i=this.cache,s=t.length,r=So(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||Rh,r[a])}function Kx(e,t,n){let i=this.cache,s=t.length,r=So(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTextureCube(t[a]||Ch,r[a])}function Qx(e,t,n){let i=this.cache,s=t.length,r=So(n,s);if(!Mt(i,r))e.uniform1iv(this.addr,r),St(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Ah,r[a])}function e0(e){switch(e){case 5126:return Ux;case 35664:return zx;case 35665:return Ox;case 35666:return Fx;case 35674:return Bx;case 35675:return kx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Vx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return $x;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Qx}}class Ph{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dx(t.type)}}class Lh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}}class Ih{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var za=/(\w+)(\])?(\[|\.)?/g;function Jc(e,t){e.seq.push(t),e.map[t.id]=t}function t0(e,t,n){let i=e.name,s=i.length;za.lastIndex=0;while(!0){let r=za.exec(i),a=za.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Jc(n,c===void 0?new Ph(o,e,t):new Lh(o,e,t));break}else{let u=n.map[o];if(u===void 0)u=new Ih(o),Jc(n,u);n=u}}}class tr{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);t0(s,r,this)}}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Zc(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var n0=37297,i0=0;function s0(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function r0(e){let t=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(e),i;if(t===n)i="";else if(t==="p3"&&n==="rec709")i="LinearDisplayP3ToLinearSRGB";else if(t==="rec709"&&n==="p3")i="LinearSRGBToLinearDisplayP3";switch(e){case"srgb-linear":case"display-p3-linear":return[i,"LinearTransferOETF"];case"srgb":case"display-p3":return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Kc(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+s0(e.getShaderSource(t),a)}else return s}function o0(e,t){let n=r0(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function a0(e,t){let n;switch(t){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="OptimizedCineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function l0(e){return[e.extensionDerivatives||!!e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function c0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function h0(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function u0(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xs(e){return e!==""}function Qc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(e){return e.replace(d0,p0)}var f0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function p0(e,t){let n=Oe[t];if(n===void 0){let i=f0.get(t);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw Error("Can not resolve #include <"+t+">")}return Ga(n)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(e){return e.replace(m0,g0)}function g0(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}function x0(e){let t="SHADOWMAP_TYPE_BASIC";if(e.shadowMapType===1)t="SHADOWMAP_TYPE_PCF";else if(e.shadowMapType===2)t="SHADOWMAP_TYPE_PCF_SOFT";else if(e.shadowMapType===3)t="SHADOWMAP_TYPE_VSM";return t}function _0(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function v0(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function b0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function M0(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=x0(n),c=_0(n),h=y0(n),u=v0(n),d=b0(n),f=n.isWebGL2?"":l0(n),y=c0(n),x=h0(r),p=s.createProgram(),m,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xs).join(`
`),m.length>0)m+=`
`;if(_=[f,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xs).join(`
`),_.length>0)_+=`
`}else m=[nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),_=[f,nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Oe.tonemapping_pars_fragment:"",n.toneMapping!==0?a0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,o0("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xs).join(`
`);if(a=Ga(a),a=Qc(a,n),a=eh(a,n),o=Ga(o),o=Qc(o,n),o=eh(o,n),a=th(a),o=th(o),n.isWebGL2&&n.isRawShaderMaterial!==!0)v=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_;let w=v+m+a,C=v+_+o,T=Zc(s,s.VERTEX_SHADER,w),I=Zc(s,s.FRAGMENT_SHADER,C);if(s.attachShader(p,T),s.attachShader(p,I),n.index0AttributeName!==void 0)s.bindAttribLocation(p,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(p,0,"position");s.linkProgram(p);function F(Y){if(e.debug.checkShaderErrors){let J=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(I).trim(),O=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,p,T,I);else{let G=Kc(s,T,"vertex"),V=Kc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+G+`
`+V)}else if(J!=="")console.warn("THREE.WebGLProgram: Program Info Log:",J);else if(R===""||B==="")X=!1;if(X)Y.diagnostics={runnable:O,programLog:J,vertexShader:{log:R,prefix:m},fragmentShader:{log:B,prefix:_}}}s.deleteShader(T),s.deleteShader(I),M=new tr(s,p),A=u0(s,p)}let M;this.getUniforms=function(){if(M===void 0)F(this);return M};let A;this.getAttributes=function(){if(A===void 0)F(this);return A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(U===!1)U=s.getProgramParameter(p,n0);return U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=I,this}var S0=0;class Nh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:t,fragmentShader:n}=e,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new Dh(e),t.set(e,n);return n}}class Dh{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}}function E0(e,t,n,i,s,r,a){let o=new bo,l=new Nh,c=[],{isWebGL2:h,logarithmicDepthBuffer:u,vertexTextures:d,precision:f}=s,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){if(M===0)return"uv";return`uv${M}`}function p(M,A,U,Y,J){let R=Y.fog,B=J.geometry,O=M.isMeshStandardMaterial?Y.environment:null,X=(M.isMeshStandardMaterial?n:t).get(M.envMap||O),G=!!X&&X.mapping===306?X.image.height:null,V=y[M.type];if(M.precision!==null){if(f=s.getMaxPrecision(M.precision),f!==M.precision)console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead.")}let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=Z!==void 0?Z.length:0,D=0;if(B.morphAttributes.position!==void 0)D=1;if(B.morphAttributes.normal!==void 0)D=2;if(B.morphAttributes.color!==void 0)D=3;let j,ie,se,re;if(V){let Ft=Mn[V];j=Ft.vertexShader,ie=Ft.fragmentShader}else j=M.vertexShader,ie=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);let ce=e.getRenderTarget(),le=J.isInstancedMesh===!0,ue=J.isBatchedMesh===!0,we=!!M.map,L=!!M.matcap,Qe=!!X,Le=!!M.aoMap,xe=!!M.lightMap,me=!!M.bumpMap,de=!!M.normalMap,Fe=!!M.displacementMap,De=!!M.emissiveMap,E=!!M.metalnessMap,b=!!M.roughnessMap,k=M.anisotropy>0,ne=M.clearcoat>0,Q=M.iridescence>0,te=M.sheen>0,Ee=M.transmission>0,fe=k&&!!M.anisotropyMap,_e=ne&&!!M.clearcoatMap,Me=ne&&!!M.clearcoatNormalMap,ze=ne&&!!M.clearcoatRoughnessMap,ee=Q&&!!M.iridescenceMap,_t=Q&&!!M.iridescenceThicknessMap,Ge=te&&!!M.sheenColorMap,Pe=te&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ve=!!M.specularColorMap,We=!!M.specularIntensityMap,nt=Ee&&!!M.transmissionMap,qe=Ee&&!!M.thicknessMap,it=!!M.gradientMap,oe=!!M.alphaMap,P=M.alphaTest>0,he=!!M.alphaHash,pe=!!M.extensions,Ae=!!B.attributes.uv1,Se=!!B.attributes.uv2,st=!!B.attributes.uv3,ot=0;if(M.toneMapped){if(ce===null||ce.isXRRenderTarget===!0)ot=e.toneMapping}return{isWebGL2:h,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:ie,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ue,instancing:le,instancingColor:le&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?e.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:"srgb-linear",map:we,matcap:L,envMap:Qe,envMapMode:Qe&&X.mapping,envMapCubeUVHeight:G,aoMap:Le,lightMap:xe,bumpMap:me,normalMap:de,displacementMap:d&&Fe,emissiveMap:De,normalMapObjectSpace:de&&M.normalMapType===1,normalMapTangentSpace:de&&M.normalMapType===0,metalnessMap:E,roughnessMap:b,anisotropy:k,anisotropyMap:fe,clearcoat:ne,clearcoatMap:_e,clearcoatNormalMap:Me,clearcoatRoughnessMap:ze,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:_t,sheen:te,sheenColorMap:Ge,sheenRoughnessMap:Pe,specularMap:ye,specularColorMap:ve,specularIntensityMap:We,transmission:Ee,transmissionMap:nt,thicknessMap:qe,gradientMap:it,opaque:M.transparent===!1&&M.blending===1,alphaMap:oe,alphaTest:P,alphaHash:he,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:Le&&x(M.aoMap.channel),lightMapUv:xe&&x(M.lightMap.channel),bumpMapUv:me&&x(M.bumpMap.channel),normalMapUv:de&&x(M.normalMap.channel),displacementMapUv:Fe&&x(M.displacementMap.channel),emissiveMapUv:De&&x(M.emissiveMap.channel),metalnessMapUv:E&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:fe&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:nt&&x(M.transmissionMap.channel),thicknessMapUv:qe&&x(M.thicknessMap.channel),alphaMapUv:oe&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:st,pointsUvs:J.isPoints===!0&&!!B.attributes.uv&&(we||oe),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:D,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:ot,useLegacyLights:e._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)==="srgb",premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let A=[];if(M.shaderID)A.push(M.shaderID);else A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let U in M.defines)A.push(U),A.push(M.defines[U]);if(M.isRawShaderMaterial===!1)_(A,M),v(A,M),A.push(e.outputColorSpace);return A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){if(o.disableAll(),A.isWebGL2)o.enable(0);if(A.supportsVertexTextures)o.enable(1);if(A.instancing)o.enable(2);if(A.instancingColor)o.enable(3);if(A.matcap)o.enable(4);if(A.envMap)o.enable(5);if(A.normalMapObjectSpace)o.enable(6);if(A.normalMapTangentSpace)o.enable(7);if(A.clearcoat)o.enable(8);if(A.iridescence)o.enable(9);if(A.alphaTest)o.enable(10);if(A.vertexColors)o.enable(11);if(A.vertexAlphas)o.enable(12);if(A.vertexUv1s)o.enable(13);if(A.vertexUv2s)o.enable(14);if(A.vertexUv3s)o.enable(15);if(A.vertexTangents)o.enable(16);if(A.anisotropy)o.enable(17);if(A.alphaHash)o.enable(18);if(A.batching)o.enable(19);if(M.push(o.mask),o.disableAll(),A.fog)o.enable(0);if(A.useFog)o.enable(1);if(A.flatShading)o.enable(2);if(A.logarithmicDepthBuffer)o.enable(3);if(A.skinning)o.enable(4);if(A.morphTargets)o.enable(5);if(A.morphNormals)o.enable(6);if(A.morphColors)o.enable(7);if(A.premultipliedAlpha)o.enable(8);if(A.shadowMapEnabled)o.enable(9);if(A.useLegacyLights)o.enable(10);if(A.doubleSided)o.enable(11);if(A.flipSided)o.enable(12);if(A.useDepthPacking)o.enable(13);if(A.dithering)o.enable(14);if(A.transmission)o.enable(15);if(A.sheen)o.enable(16);if(A.opaque)o.enable(17);if(A.pointsUvs)o.enable(18);if(A.decodeVideoTexture)o.enable(19);M.push(o.mask)}function w(M){let A=y[M.type],U;if(A){let Y=Mn[A];U=fp.clone(Y.uniforms)}else U=M.uniforms;return U}function C(M,A){let U;for(let Y=0,J=c.length;Y<J;Y++){let R=c[Y];if(R.cacheKey===A){U=R,++U.usedTimes;break}}if(U===void 0)U=new M0(e,A,M,r),c.push(U);return U}function T(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function I(M){l.remove(M)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:C,releaseProgram:T,releaseShaderCache:I,programs:c,dispose:F}}function w0(){let e=new WeakMap;function t(r){let a=e.get(r);if(a===void 0)a={},e.set(r,a);return a}function n(r){e.delete(r)}function i(r,a,o){e.get(r)[a]=o}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function T0(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function ih(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function sh(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u,d,f,y,x,p){let m=e[t];if(m===void 0)m={id:u.id,object:u,geometry:d,material:f,groupOrder:y,renderOrder:u.renderOrder,z:x,group:p},e[t]=m;else m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=x,m.group=p;return t++,m}function o(u,d,f,y,x,p){let m=a(u,d,f,y,x,p);if(f.transmission>0)i.push(m);else if(f.transparent===!0)s.push(m);else n.push(m)}function l(u,d,f,y,x,p){let m=a(u,d,f,y,x,p);if(f.transmission>0)i.unshift(m);else if(f.transparent===!0)s.unshift(m);else n.unshift(m)}function c(u,d){if(n.length>1)n.sort(u||T0);if(i.length>1)i.sort(d||ih);if(s.length>1)s.sort(d||ih)}function h(){for(let u=t,d=e.length;u<d;u++){let f=e[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function A0(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new sh,e.set(i,[a]);else if(s>=r.length)a=new sh,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function R0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Re};break;case"SpotLight":n={position:new N,direction:new N,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function C0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var P0=0;function L0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function I0(e,t){let n=new R0,i=C0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,a=new vt,o=new vt;function l(h,u){let d=0,f=0,y=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,p=0,m=0,_=0,v=0,w=0,C=0,T=0,I=0,F=0,M=0;h.sort(L0);let A=u===!0?Math.PI:1;for(let Y=0,J=h.length;Y<J;Y++){let R=h[Y],{color:B,intensity:O,distance:X}=R,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=B.r*O*A,f+=B.g*O*A,y+=B.b*O*A;else if(R.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(R.sh.coefficients[V],O);M++}else if(R.isDirectionalLight){let V=n.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){let Z=R.shadow,K=i.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.directionalShadow[x]=K,s.directionalShadowMap[x]=G,s.directionalShadowMatrix[x]=R.shadow.matrix,w++}s.directional[x]=V,x++}else if(R.isSpotLight){let V=n.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(B).multiplyScalar(O*A),V.distance=X,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,s.spot[m]=V;let Z=R.shadow;if(R.map){if(s.spotLightMap[I]=R.map,I++,Z.updateMatrices(R),R.castShadow)F++}if(s.spotLightMatrix[m]=Z.matrix,R.castShadow){let K=i.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.spotShadow[m]=K,s.spotShadowMap[m]=G,T++}m++}else if(R.isRectAreaLight){let V=n.get(R);V.color.copy(B).multiplyScalar(O),V.halfWidth.set(R.width*0.5,0,0),V.halfHeight.set(0,R.height*0.5,0),s.rectArea[_]=V,_++}else if(R.isPointLight){let V=n.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*A),V.distance=R.distance,V.decay=R.decay,R.castShadow){let Z=R.shadow,K=i.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,s.pointShadow[p]=K,s.pointShadowMap[p]=G,s.pointShadowMatrix[p]=R.shadow.matrix,C++}s.point[p]=V,p++}else if(R.isHemisphereLight){let V=n.get(R);V.skyColor.copy(R.color).multiplyScalar(O*A),V.groundColor.copy(R.groundColor).multiplyScalar(O*A),s.hemi[v]=V,v++}}if(_>0)if(t.isWebGL2)if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2;else s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2;else if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2;else if(e.has("OES_texture_half_float_linear")===!0)s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2;else console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=y;let U=s.hash;if(U.directionalLength!==x||U.pointLength!==p||U.spotLength!==m||U.rectAreaLength!==_||U.hemiLength!==v||U.numDirectionalShadows!==w||U.numPointShadows!==C||U.numSpotShadows!==T||U.numSpotMaps!==I||U.numLightProbes!==M)s.directional.length=x,s.spot.length=m,s.rectArea.length=_,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=M,U.directionalLength=x,U.pointLength=p,U.spotLength=m,U.rectAreaLength=_,U.hemiLength=v,U.numDirectionalShadows=w,U.numPointShadows=C,U.numSpotShadows=T,U.numSpotMaps=I,U.numLightProbes=M,s.version=P0++}function c(h,u){let d=0,f=0,y=0,x=0,p=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let w=h[_];if(w.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),d++}else if(w.isSpotLight){let C=s.spot[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),y++}else if(w.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(w.width*0.5,0,0),C.halfHeight.set(0,w.height*0.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function rh(e,t){let n=new I0(e,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function N0(e,t){let n=new WeakMap;function i(r,a=0){let o=n.get(r),l;if(o===void 0)l=new rh(e,t),n.set(r,[l]);else if(a>=o.length)l=new rh(e,t),o.push(l);else l=o[a];return l}function s(){n=new WeakMap}return{get:i,dispose:s}}class Uh extends ci{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zh extends ci{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}var D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
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
}`;function z0(e,t,n){let i=new Mo,s=new Ve,r=new Ve,a=new Ct,o=new Uh({depthPacking:3201}),l=new zh,c={},h=n.maxTextureSize,u={[0]:1,[1]:0,[2]:2},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:D0,fragmentShader:U0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new Wt;y.setAttribute("position",new Gt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let x=new mt(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(T,I,F){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(T.length===0)return;let M=e.getRenderTarget(),A=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),Y=e.state;Y.setBlending(0),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let J=m!==3&&this.type===3,R=m===3&&this.type!==3;for(let B=0,O=T.length;B<O;B++){let X=T[B],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let V=G.getFrameExtents();if(s.multiply(V),r.copy(G.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/V.x),s.x=r.x*V.x,G.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/V.y),s.y=r.y*V.y,G.mapSize.y=r.y}if(G.map===null||J===!0||R===!0){let K=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(G.map!==null)G.map.dispose();G.map=new Sn(s.x,s.y,K),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();let Z=G.getViewportCount();for(let K=0;K<Z;K++){let D=G.getViewport(K);a.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),Y.viewport(a),G.updateMatrices(X,K),i=G.getFrustum(),w(I,F,G.camera,X,this.type)}if(G.isPointLightShadow!==!0&&this.type===3)_(G,F);G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,e.setRenderTarget(M,A,U)};function _(T,I){let F=t.update(x);if(d.defines.VSM_SAMPLES!==T.blurSamples)d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new Sn(s.x,s.y);d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(I,null,F,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(I,null,F,f,x,null)}function v(T,I,F,M){let A=null,U=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)A=U;else if(A=F.isPointLight===!0?l:o,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let Y=A.uuid,J=I.uuid,R=c[Y];if(R===void 0)R={},c[Y]=R;let B=R[J];if(B===void 0)B=A.clone(),R[J]=B,I.addEventListener("dispose",C);A=B}if(A.visible=I.visible,A.wireframe=I.wireframe,M===3)A.side=I.shadowSide!==null?I.shadowSide:I.side;else A.side=I.shadowSide!==null?I.shadowSide:u[I.side];if(A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let Y=e.properties.get(A);Y.light=F}return A}function w(T,I,F,M,A){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&A===3)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let J=t.update(T),R=T.material;if(Array.isArray(R)){let B=J.groups;for(let O=0,X=B.length;O<X;O++){let G=B[O],V=R[G.materialIndex];if(V&&V.visible){let Z=v(T,V,M,A);T.onBeforeShadow(e,T,I,F,J,Z,G),e.renderBufferDirect(F,null,J,Z,T,G),T.onAfterShadow(e,T,I,F,J,Z,G)}}}else if(R.visible){let B=v(T,R,M,A);T.onBeforeShadow(e,T,I,F,J,B,null),e.renderBufferDirect(F,null,J,B,T,null),T.onAfterShadow(e,T,I,F,J,B,null)}}}let Y=T.children;for(let J=0,R=Y.length;J<R;J++)w(Y[J],I,F,M,A)}function C(T){T.target.removeEventListener("dispose",C);for(let F in c){let M=c[F],A=T.target.uuid;if(A in M)M[A].dispose(),delete M[A]}}}function O0(e,t,n){let i=n.isWebGL2;function s(){let P=!1,he=new Ct,pe=null,Ae=new Ct(0,0,0,0);return{setMask:function(Se){if(pe!==Se&&!P)e.colorMask(Se,Se,Se,Se),pe=Se},setLocked:function(Se){P=Se},setClear:function(Se,st,ot,bt,Ft){if(Ft===!0)Se*=bt,st*=bt,ot*=bt;if(he.set(Se,st,ot,bt),Ae.equals(he)===!1)e.clearColor(Se,st,ot,bt),Ae.copy(he)},reset:function(){P=!1,pe=null,Ae.set(-1,0,0,0)}}}function r(){let P=!1,he=null,pe=null,Ae=null;return{setTest:function(Se){if(Se)ue(e.DEPTH_TEST);else we(e.DEPTH_TEST)},setMask:function(Se){if(he!==Se&&!P)e.depthMask(Se),he=Se},setFunc:function(Se){if(pe!==Se){switch(Se){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=Se}},setLocked:function(Se){P=Se},setClear:function(Se){if(Ae!==Se)e.clearDepth(Se),Ae=Se},reset:function(){P=!1,he=null,pe=null,Ae=null}}}function a(){let P=!1,he=null,pe=null,Ae=null,Se=null,st=null,ot=null,bt=null,Ft=null;return{setTest:function(je){if(!P)if(je)ue(e.STENCIL_TEST);else we(e.STENCIL_TEST)},setMask:function(je){if(he!==je&&!P)e.stencilMask(je),he=je},setFunc:function(je,vn,bn){if(pe!==je||Ae!==vn||Se!==bn)e.stencilFunc(je,vn,bn),pe=je,Ae=vn,Se=bn},setOp:function(je,vn,bn){if(st!==je||ot!==vn||bt!==bn)e.stencilOp(je,vn,bn),st=je,ot=vn,bt=bn},setLocked:function(je){P=je},setClear:function(je){if(Ft!==je)e.clearStencil(je),Ft=je},reset:function(){P=!1,he=null,pe=null,Ae=null,Se=null,st=null,ot=null,bt=null,Ft=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},y=new WeakMap,x=[],p=null,m=!1,_=null,v=null,w=null,C=null,T=null,I=null,F=null,M=new Re(0,0,0),A=0,U=!1,Y=null,J=null,R=null,B=null,O=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,V=0,Z=e.getParameter(e.VERSION);if(Z.indexOf("WebGL")!==-1)V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=V>=1;else if(Z.indexOf("OpenGL ES")!==-1)V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=V>=2;let K=null,D={},j=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),se=new Ct().fromArray(j),re=new Ct().fromArray(ie);function ce(P,he,pe,Ae){let Se=new Uint8Array(4),st=e.createTexture();e.bindTexture(P,st),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ot=0;ot<pe;ot++)if(i&&(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY))e.texImage3D(he,0,e.RGBA,1,1,Ae,0,e.RGBA,e.UNSIGNED_BYTE,Se);else e.texImage2D(he+ot,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Se);return st}let le={};if(le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i)le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1);o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(e.DEPTH_TEST),l.setFunc(3),De(!1),E(1),ue(e.CULL_FACE),de(0);function ue(P){if(d[P]!==!0)e.enable(P),d[P]=!0}function we(P){if(d[P]!==!1)e.disable(P),d[P]=!1}function L(P,he){if(f[P]!==he){if(e.bindFramebuffer(P,he),f[P]=he,i){if(P===e.DRAW_FRAMEBUFFER)f[e.FRAMEBUFFER]=he;if(P===e.FRAMEBUFFER)f[e.DRAW_FRAMEBUFFER]=he}return!0}return!1}function Qe(P,he){let pe=x,Ae=!1;if(P){if(pe=y.get(he),pe===void 0)pe=[],y.set(he,pe);if(P.isWebGLMultipleRenderTargets){let Se=P.texture;if(pe.length!==Se.length||pe[0]!==e.COLOR_ATTACHMENT0){for(let st=0,ot=Se.length;st<ot;st++)pe[st]=e.COLOR_ATTACHMENT0+st;pe.length=Se.length,Ae=!0}}else if(pe[0]!==e.COLOR_ATTACHMENT0)pe[0]=e.COLOR_ATTACHMENT0,Ae=!0}else if(pe[0]!==e.BACK)pe[0]=e.BACK,Ae=!0;if(Ae)if(n.isWebGL2)e.drawBuffers(pe);else t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe)}function Le(P){if(p!==P)return e.useProgram(P),p=P,!0;return!1}let xe={[100]:e.FUNC_ADD,[101]:e.FUNC_SUBTRACT,[102]:e.FUNC_REVERSE_SUBTRACT};if(i)xe[103]=e.MIN,xe[104]=e.MAX;else{let P=t.get("EXT_blend_minmax");if(P!==null)xe[103]=P.MIN_EXT,xe[104]=P.MAX_EXT}let me={[200]:e.ZERO,[201]:e.ONE,[202]:e.SRC_COLOR,[204]:e.SRC_ALPHA,[210]:e.SRC_ALPHA_SATURATE,[208]:e.DST_COLOR,[206]:e.DST_ALPHA,[203]:e.ONE_MINUS_SRC_COLOR,[205]:e.ONE_MINUS_SRC_ALPHA,[209]:e.ONE_MINUS_DST_COLOR,[207]:e.ONE_MINUS_DST_ALPHA,[211]:e.CONSTANT_COLOR,[212]:e.ONE_MINUS_CONSTANT_COLOR,[213]:e.CONSTANT_ALPHA,[214]:e.ONE_MINUS_CONSTANT_ALPHA};function de(P,he,pe,Ae,Se,st,ot,bt,Ft,je){if(P===0){if(m===!0)we(e.BLEND),m=!1;return}if(m===!1)ue(e.BLEND),m=!0;if(P!==5){if(P!==_||je!==U){if(v!==100||T!==100)e.blendEquation(e.FUNC_ADD),v=100,T=100;if(je)switch(P){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,C=null,I=null,F=null,M.set(0,0,0),A=0,_=P,U=je}return}if(Se=Se||he,st=st||pe,ot=ot||Ae,he!==v||Se!==T)e.blendEquationSeparate(xe[he],xe[Se]),v=he,T=Se;if(pe!==w||Ae!==C||st!==I||ot!==F)e.blendFuncSeparate(me[pe],me[Ae],me[st],me[ot]),w=pe,C=Ae,I=st,F=ot;if(bt.equals(M)===!1||Ft!==A)e.blendColor(bt.r,bt.g,bt.b,Ft),M.copy(bt),A=Ft;_=P,U=!1}function Fe(P,he){P.side===2?we(e.CULL_FACE):ue(e.CULL_FACE);let pe=P.side===1;if(he)pe=!pe;De(pe),P.blending===1&&P.transparent===!1?de(0):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Ae=P.stencilWrite;if(c.setTest(Ae),Ae)c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):we(e.SAMPLE_ALPHA_TO_COVERAGE)}function De(P){if(Y!==P){if(P)e.frontFace(e.CW);else e.frontFace(e.CCW);Y=P}}function E(P){if(P!==0){if(ue(e.CULL_FACE),P!==J)if(P===1)e.cullFace(e.BACK);else if(P===2)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else we(e.CULL_FACE);J=P}function b(P){if(P!==R){if(G)e.lineWidth(P);R=P}}function k(P,he,pe){if(P){if(ue(e.POLYGON_OFFSET_FILL),B!==he||O!==pe)e.polygonOffset(he,pe),B=he,O=pe}else we(e.POLYGON_OFFSET_FILL)}function ne(P){if(P)ue(e.SCISSOR_TEST);else we(e.SCISSOR_TEST)}function Q(P){if(P===void 0)P=e.TEXTURE0+X-1;if(K!==P)e.activeTexture(P),K=P}function te(P,he,pe){if(pe===void 0)if(K===null)pe=e.TEXTURE0+X-1;else pe=K;let Ae=D[pe];if(Ae===void 0)Ae={type:void 0,texture:void 0},D[pe]=Ae;if(Ae.type!==P||Ae.texture!==he){if(K!==pe)e.activeTexture(pe),K=pe;e.bindTexture(P,he||le[P]),Ae.type=P,Ae.texture=he}}function Ee(){let P=D[K];if(P!==void 0&&P.type!==void 0)e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function fe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){if(se.equals(P)===!1)e.scissor(P.x,P.y,P.z,P.w),se.copy(P)}function nt(P){if(re.equals(P)===!1)e.viewport(P.x,P.y,P.z,P.w),re.copy(P)}function qe(P,he){let pe=u.get(he);if(pe===void 0)pe=new WeakMap,u.set(he,pe);let Ae=pe.get(P);if(Ae===void 0)Ae=e.getUniformBlockIndex(he,P.name),pe.set(P,Ae)}function it(P,he){let Ae=u.get(he).get(P);if(h.get(he)!==Ae)e.uniformBlockBinding(he,Ae,P.__bindingPointIndex),h.set(he,Ae)}function oe(){if(e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0)e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null);e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},K=null,D={},f={},y=new WeakMap,x=[],p=null,m=!1,_=null,v=null,w=null,C=null,T=null,I=null,F=null,M=new Re(0,0,0),A=0,U=!1,Y=null,J=null,R=null,B=null,O=null,se.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:we,bindFramebuffer:L,drawBuffers:Qe,useProgram:Le,setBlending:de,setMaterial:Fe,setFlipSided:De,setCullFace:E,setLineWidth:b,setPolygonOffset:k,setScissorTest:ne,activeTexture:Q,bindTexture:te,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:ye,texImage3D:ve,updateUBOMapping:qe,uniformBlockBinding:it,texStorage2D:Ge,texStorage3D:Pe,texSubImage2D:Me,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:_t,scissor:We,viewport:nt,reset:oe}}function F0(e,t,n,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function y(E,b){return f?new OffscreenCanvas(E,b):xo("canvas")}function x(E,b,k,ne){let Q=1;if(E.width>ne||E.height>ne)Q=ne/Math.max(E.width,E.height);if(Q<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let te=b?go:Math.floor,Ee=te(Q*E.width),fe=te(Q*E.height);if(u===void 0)u=y(Ee,fe);let _e=k?y(Ee,fe):u;return _e.width=Ee,_e.height=fe,_e.getContext("2d").drawImage(E,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+fe+")."),_e}else{if("data"in E)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+").");return E}return E}function p(E){return ka(E.width)&&ka(E.height)}function m(E){if(o)return!1;return E.wrapS!==1001||E.wrapT!==1001||E.minFilter!==1003&&E.minFilter!==1006}function _(E,b){return E.generateMipmaps&&b&&E.minFilter!==1003&&E.minFilter!==1006}function v(E){e.generateMipmap(E)}function w(E,b,k,ne,Q=!1){if(o===!1)return b;if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=b;if(b===e.RED){if(k===e.FLOAT)te=e.R32F;if(k===e.HALF_FLOAT)te=e.R16F;if(k===e.UNSIGNED_BYTE)te=e.R8}if(b===e.RED_INTEGER){if(k===e.UNSIGNED_BYTE)te=e.R8UI;if(k===e.UNSIGNED_SHORT)te=e.R16UI;if(k===e.UNSIGNED_INT)te=e.R32UI;if(k===e.BYTE)te=e.R8I;if(k===e.SHORT)te=e.R16I;if(k===e.INT)te=e.R32I}if(b===e.RG){if(k===e.FLOAT)te=e.RG32F;if(k===e.HALF_FLOAT)te=e.RG16F;if(k===e.UNSIGNED_BYTE)te=e.RG8}if(b===e.RGBA){let Ee=Q?"linear":tt.getTransfer(ne);if(k===e.FLOAT)te=e.RGBA32F;if(k===e.HALF_FLOAT)te=e.RGBA16F;if(k===e.UNSIGNED_BYTE)te=Ee==="srgb"?e.SRGB8_ALPHA8:e.RGBA8;if(k===e.UNSIGNED_SHORT_4_4_4_4)te=e.RGBA4;if(k===e.UNSIGNED_SHORT_5_5_5_1)te=e.RGB5_A1}if(te===e.R16F||te===e.R32F||te===e.RG16F||te===e.RG32F||te===e.RGBA16F||te===e.RGBA32F)t.get("EXT_color_buffer_float");return te}function C(E,b,k){if(_(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006)return Math.log2(Math.max(b.width,b.height))+1;else if(E.mipmaps!==void 0&&E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return b.mipmaps.length;else return 1}function T(E){if(E===1003||E===1004||E===1005)return e.NEAREST;return e.LINEAR}function I(E){let b=E.target;if(b.removeEventListener("dispose",I),M(b),b.isVideoTexture)h.delete(b)}function F(E){let b=E.target;b.removeEventListener("dispose",F),U(b)}function M(E){let b=i.get(E);if(b.__webglInit===void 0)return;let k=E.source,ne=d.get(k);if(ne){let Q=ne[b.__cacheKey];if(Q.usedTimes--,Q.usedTimes===0)A(E);if(Object.keys(ne).length===0)d.delete(k)}i.remove(E)}function A(E){let b=i.get(E);e.deleteTexture(b.__webglTexture);let k=E.source,ne=d.get(k);delete ne[b.__cacheKey],a.memory.textures--}function U(E){let b=E.texture,k=i.get(E),ne=i.get(b);if(ne.__webglTexture!==void 0)e.deleteTexture(ne.__webglTexture),a.memory.textures--;if(E.depthTexture)E.depthTexture.dispose();if(E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let te=0;te<k.__webglFramebuffer[Q].length;te++)e.deleteFramebuffer(k.__webglFramebuffer[Q][te]);else e.deleteFramebuffer(k.__webglFramebuffer[Q]);if(k.__webglDepthbuffer)e.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)e.deleteFramebuffer(k.__webglFramebuffer[Q]);else e.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)e.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)e.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)if(k.__webglColorRenderbuffer[Q])e.deleteRenderbuffer(k.__webglColorRenderbuffer[Q])}if(k.__webglDepthRenderbuffer)e.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Q=0,te=b.length;Q<te;Q++){let Ee=i.get(b[Q]);if(Ee.__webglTexture)e.deleteTexture(Ee.__webglTexture),a.memory.textures--;i.remove(b[Q])}i.remove(b),i.remove(E)}let Y=0;function J(){Y=0}function R(){let E=Y;if(E>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures);return Y+=1,E}function B(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function O(E,b){let k=i.get(E);if(E.isVideoTexture)Fe(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(k,E,b);return}}n.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+b)}function X(E,b){let k=i.get(E);if(E.version>0&&k.__version!==E.version){se(k,E,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+b)}function G(E,b){let k=i.get(E);if(E.version>0&&k.__version!==E.version){se(k,E,b);return}n.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+b)}function V(E,b){let k=i.get(E);if(E.version>0&&k.__version!==E.version){re(k,E,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+b)}let Z={[1000]:e.REPEAT,[1001]:e.CLAMP_TO_EDGE,[1002]:e.MIRRORED_REPEAT},K={[1003]:e.NEAREST,[1004]:e.NEAREST_MIPMAP_NEAREST,[1005]:e.NEAREST_MIPMAP_LINEAR,[1006]:e.LINEAR,[1007]:e.LINEAR_MIPMAP_NEAREST,[1008]:e.LINEAR_MIPMAP_LINEAR},D={[512]:e.NEVER,[519]:e.ALWAYS,[513]:e.LESS,[515]:e.LEQUAL,[514]:e.EQUAL,[518]:e.GEQUAL,[516]:e.GREATER,[517]:e.NOTEQUAL};function j(E,b,k){if(k){if(e.texParameteri(E,e.TEXTURE_WRAP_S,Z[b.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Z[b.wrapT]),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,Z[b.wrapR]);e.texParameteri(E,e.TEXTURE_MAG_FILTER,K[b.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,K[b.minFilter])}else{if(e.texParameteri(E,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(E,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)e.texParameteri(E,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE);if(b.wrapS!==1001||b.wrapT!==1001)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");if(e.texParameteri(E,e.TEXTURE_MAG_FILTER,T(b.magFilter)),e.texParameteri(E,e.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==1003&&b.minFilter!==1006)console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")}if(b.compareFunction)e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,D[b.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){let ne=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===1003)return;if(b.minFilter!==1005&&b.minFilter!==1008)return;if(b.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(o===!1&&(b.type===1016&&t.has("OES_texture_half_float_linear")===!1))return;if(b.anisotropy>1||i.get(b).__currentAnisotropy)e.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}function ie(E,b){let k=!1;if(E.__webglInit===void 0)E.__webglInit=!0,b.addEventListener("dispose",I);let ne=b.source,Q=d.get(ne);if(Q===void 0)Q={},d.set(ne,Q);let te=B(b);if(te!==E.__cacheKey){if(Q[te]===void 0)Q[te]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,k=!0;Q[te].usedTimes++;let Ee=Q[E.__cacheKey];if(Ee!==void 0){if(Q[E.__cacheKey].usedTimes--,Ee.usedTimes===0)A(b)}E.__cacheKey=te,E.__webglTexture=Q[te].texture}return k}function se(E,b,k){let ne=e.TEXTURE_2D;if(b.isDataArrayTexture||b.isCompressedArrayTexture)ne=e.TEXTURE_2D_ARRAY;if(b.isData3DTexture)ne=e.TEXTURE_3D;let Q=ie(E,b),te=b.source;n.bindTexture(ne,E.__webglTexture,e.TEXTURE0+k);let Ee=i.get(te);if(te.version!==Ee.__version||Q===!0){n.activeTexture(e.TEXTURE0+k);let fe=tt.getPrimaries(tt.workingColorSpace),_e=b.colorSpace===""?null:tt.getPrimaries(b.colorSpace),Me=b.colorSpace===""||fe===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ze=m(b)&&p(b.image)===!1,ee=x(b.image,ze,!1,s.maxTextureSize);ee=De(b,ee);let _t=p(ee)||o,Ge=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),ye=w(b.internalFormat,Ge,Pe,b.colorSpace,b.isVideoTexture);j(ne,b,_t);let ve,We=b.mipmaps,nt=o&&b.isVideoTexture!==!0&&ye!==36196,qe=Ee.__version===void 0||Q===!0,it=C(b,ee,_t);if(b.isDepthTexture){if(ye=e.DEPTH_COMPONENT,o)if(b.type===1015)ye=e.DEPTH_COMPONENT32F;else if(b.type===1014)ye=e.DEPTH_COMPONENT24;else if(b.type===1020)ye=e.DEPTH24_STENCIL8;else ye=e.DEPTH_COMPONENT16;else if(b.type===1015)console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");if(b.format===1026&&ye===e.DEPTH_COMPONENT){if(b.type!==1012&&b.type!==1014)console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=1014,Pe=r.convert(b.type)}if(b.format===1027&&ye===e.DEPTH_COMPONENT){if(ye=e.DEPTH_STENCIL,b.type!==1020)console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,Pe=r.convert(b.type)}if(qe)if(nt)n.texStorage2D(e.TEXTURE_2D,1,ye,ee.width,ee.height);else n.texImage2D(e.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ge,Pe,null)}else if(b.isDataTexture)if(We.length>0&&_t){if(nt&&qe)n.texStorage2D(e.TEXTURE_2D,it,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],nt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,Pe,ve.data);else n.texImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,Ge,Pe,ve.data);b.generateMipmaps=!1}else if(nt){if(qe)n.texStorage2D(e.TEXTURE_2D,it,ye,ee.width,ee.height);n.texSubImage2D(e.TEXTURE_2D,0,0,0,ee.width,ee.height,Ge,Pe,ee.data)}else n.texImage2D(e.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ge,Pe,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){if(nt&&qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,it,ye,We[0].width,We[0].height,ee.depth);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],b.format!==1023)if(Ge!==null)if(nt)n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,Ge,ve.data,0,0);else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,oe,ye,ve.width,ve.height,ee.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(nt)n.texSubImage3D(e.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ee.depth,Ge,Pe,ve.data);else n.texImage3D(e.TEXTURE_2D_ARRAY,oe,ye,ve.width,ve.height,ee.depth,0,Ge,Pe,ve.data)}else{if(nt&&qe)n.texStorage2D(e.TEXTURE_2D,it,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],b.format!==1023)if(Ge!==null)if(nt)n.compressedTexSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,ve.data);else n.compressedTexImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,ve.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(nt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,ve.width,ve.height,Ge,Pe,ve.data);else n.texImage2D(e.TEXTURE_2D,oe,ye,ve.width,ve.height,0,Ge,Pe,ve.data)}else if(b.isDataArrayTexture)if(nt){if(qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,it,ye,ee.width,ee.height,ee.depth);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Pe,ee.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,Ge,Pe,ee.data);else if(b.isData3DTexture)if(nt){if(qe)n.texStorage3D(e.TEXTURE_3D,it,ye,ee.width,ee.height,ee.depth);n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ge,Pe,ee.data)}else n.texImage3D(e.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,Ge,Pe,ee.data);else if(b.isFramebufferTexture){if(qe)if(nt)n.texStorage2D(e.TEXTURE_2D,it,ye,ee.width,ee.height);else{let oe=ee.width,P=ee.height;for(let he=0;he<it;he++)n.texImage2D(e.TEXTURE_2D,he,ye,oe,P,0,Ge,Pe,null),oe>>=1,P>>=1}}else if(We.length>0&&_t){if(nt&&qe)n.texStorage2D(e.TEXTURE_2D,it,ye,We[0].width,We[0].height);for(let oe=0,P=We.length;oe<P;oe++)if(ve=We[oe],nt)n.texSubImage2D(e.TEXTURE_2D,oe,0,0,Ge,Pe,ve);else n.texImage2D(e.TEXTURE_2D,oe,ye,Ge,Pe,ve);b.generateMipmaps=!1}else if(nt){if(qe)n.texStorage2D(e.TEXTURE_2D,it,ye,ee.width,ee.height);n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ge,Pe,ee)}else n.texImage2D(e.TEXTURE_2D,0,ye,Ge,Pe,ee);if(_(b,_t))v(ne);if(Ee.__version=te.version,b.onUpdate)b.onUpdate(b)}E.__version=b.version}function re(E,b,k){if(b.image.length!==6)return;let ne=ie(E,b),Q=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+k);let te=i.get(Q);if(Q.version!==te.__version||ne===!0){n.activeTexture(e.TEXTURE0+k);let Ee=tt.getPrimaries(tt.workingColorSpace),fe=b.colorSpace===""?null:tt.getPrimaries(b.colorSpace),_e=b.colorSpace===""||Ee===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Me=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++){if(!Me&&!ze)ee[oe]=x(b.image[oe],!1,!0,s.maxCubemapSize);else ee[oe]=ze?b.image[oe].image:b.image[oe];ee[oe]=De(b,ee[oe])}let _t=ee[0],Ge=p(_t)||o,Pe=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),ve=w(b.internalFormat,Pe,ye,b.colorSpace),We=o&&b.isVideoTexture!==!0,nt=te.__version===void 0||ne===!0,qe=C(b,_t,Ge);j(e.TEXTURE_CUBE_MAP,b,Ge);let it;if(Me){if(We&&nt)n.texStorage2D(e.TEXTURE_CUBE_MAP,qe,ve,_t.width,_t.height);for(let oe=0;oe<6;oe++){it=ee[oe].mipmaps;for(let P=0;P<it.length;P++){let he=it[P];if(b.format!==1023)if(Pe!==null)if(We)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,he.width,he.height,Pe,he.data);else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,ve,he.width,he.height,0,he.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,0,0,he.width,he.height,Pe,ye,he.data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P,ve,he.width,he.height,0,Pe,ye,he.data)}}}else{if(it=b.mipmaps,We&&nt){if(it.length>0)qe++;n.texStorage2D(e.TEXTURE_CUBE_MAP,qe,ve,ee[0].width,ee[0].height)}for(let oe=0;oe<6;oe++)if(ze){if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Pe,ye,ee[oe].data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,ee[oe].width,ee[oe].height,0,Pe,ye,ee[oe].data);for(let P=0;P<it.length;P++){let pe=it[P].image[oe].image;if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,pe.width,pe.height,Pe,ye,pe.data);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,ve,pe.width,pe.height,0,Pe,ye,pe.data)}}else{if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,ye,ee[oe]);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,Pe,ye,ee[oe]);for(let P=0;P<it.length;P++){let he=it[P];if(We)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,0,0,Pe,ye,he.image[oe]);else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,P+1,ve,Pe,ye,he.image[oe])}}}if(_(b,Ge))v(e.TEXTURE_CUBE_MAP);if(te.__version=Q.version,b.onUpdate)b.onUpdate(b)}E.__version=b.version}function ce(E,b,k,ne,Q,te){let Ee=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),_e=w(k.internalFormat,Ee,fe,k.colorSpace);if(!i.get(b).__hasExternalTextures){let ze=Math.max(1,b.width>>te),ee=Math.max(1,b.height>>te);if(Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY)n.texImage3D(Q,te,_e,ze,ee,b.depth,0,Ee,fe,null);else n.texImage2D(Q,te,_e,ze,ee,0,Ee,fe,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,E),de(b))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,Q,i.get(k).__webglTexture,0,me(b));else if(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ne,Q,i.get(k).__webglTexture,te);n.bindFramebuffer(e.FRAMEBUFFER,null)}function le(E,b,k){if(e.bindRenderbuffer(e.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let ne=o===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(k||de(b)){let Q=b.depthTexture;if(Q&&Q.isDepthTexture){if(Q.type===1015)ne=e.DEPTH_COMPONENT32F;else if(Q.type===1014)ne=e.DEPTH_COMPONENT24}let te=me(b);if(de(b))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,ne,b.width,b.height);else e.renderbufferStorageMultisample(e.RENDERBUFFER,te,ne,b.width,b.height)}else e.renderbufferStorage(e.RENDERBUFFER,ne,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){let ne=me(b);if(k&&de(b)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,ne,e.DEPTH24_STENCIL8,b.width,b.height);else if(de(b))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ne,e.DEPTH24_STENCIL8,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,b.width,b.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,E)}else{let ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<ne.length;Q++){let te=ne[Q],Ee=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),_e=w(te.internalFormat,Ee,fe,te.colorSpace),Me=me(b);if(k&&de(b)===!1)e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,_e,b.width,b.height);else if(de(b))l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me,_e,b.width,b.height);else e.renderbufferStorage(e.RENDERBUFFER,_e,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ue(E,b){if(b&&b.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");if(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0;O(b.depthTexture,0);let ne=i.get(b.depthTexture).__webglTexture,Q=me(b);if(b.depthTexture.format===1026)if(de(b))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0);else if(b.depthTexture.format===1027)if(de(b))l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0);else throw Error("Unknown depthTexture format")}function we(E){let b=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,E)}else if(k){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=e.createRenderbuffer(),le(b.__webglDepthbuffer[ne],E,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=e.createRenderbuffer(),le(b.__webglDepthbuffer,E,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(E,b,k){let ne=i.get(E);if(b!==void 0)ce(ne.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(k!==void 0)we(E)}function Qe(E){let b=E.texture,k=i.get(E),ne=i.get(b);if(E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0){if(ne.__webglTexture===void 0)ne.__webglTexture=e.createTexture();ne.__version=b.version,a.memory.textures++}let Q=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,Ee=p(E)||o;if(Q){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let _e=0;_e<b.mipmaps.length;_e++)k.__webglFramebuffer[fe][_e]=e.createFramebuffer()}else k.__webglFramebuffer[fe]=e.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)k.__webglFramebuffer[fe]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(te)if(s.drawBuffers){let fe=E.texture;for(let _e=0,Me=fe.length;_e<Me;_e++){let ze=i.get(fe[_e]);if(ze.__webglTexture===void 0)ze.__webglTexture=e.createTexture(),a.memory.textures++}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&de(E)===!1){let fe=te?b:[b];k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){let Me=fe[_e];k.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);let ze=r.convert(Me.format,Me.colorSpace),ee=r.convert(Me.type),_t=w(Me.internalFormat,ze,ee,Me.colorSpace,E.isXRRenderTarget===!0),Ge=me(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ge,_t,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer)k.__webglDepthRenderbuffer=e.createRenderbuffer(),le(k.__webglDepthRenderbuffer,E,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Q){n.bindTexture(e.TEXTURE_CUBE_MAP,ne.__webglTexture),j(e.TEXTURE_CUBE_MAP,b,Ee);for(let fe=0;fe<6;fe++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ce(k.__webglFramebuffer[fe][_e],E,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else ce(k.__webglFramebuffer[fe],E,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);if(_(b,Ee))v(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(te){let fe=E.texture;for(let _e=0,Me=fe.length;_e<Me;_e++){let ze=fe[_e],ee=i.get(ze);if(n.bindTexture(e.TEXTURE_2D,ee.__webglTexture),j(e.TEXTURE_2D,ze,Ee),ce(k.__webglFramebuffer,E,ze,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,0),_(ze,Ee))v(e.TEXTURE_2D)}n.unbindTexture()}else{let fe=e.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)if(o)fe=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;else console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");if(n.bindTexture(fe,ne.__webglTexture),j(fe,b,Ee),o&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ce(k.__webglFramebuffer[_e],E,b,e.COLOR_ATTACHMENT0,fe,_e);else ce(k.__webglFramebuffer,E,b,e.COLOR_ATTACHMENT0,fe,0);if(_(b,Ee))v(fe);n.unbindTexture()}if(E.depthBuffer)we(E)}function Le(E){let b=p(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,Q=k.length;ne<Q;ne++){let te=k[ne];if(_(te,b)){let Ee=E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,fe=i.get(te).__webglTexture;n.bindTexture(Ee,fe),v(Ee),n.unbindTexture()}}}function xe(E){if(o&&E.samples>0&&de(E)===!1){let b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],{width:k,height:ne}=E,Q=e.COLOR_BUFFER_BIT,te=[],Ee=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=i.get(E),_e=E.isWebGLMultipleRenderTargets===!0;if(_e)for(let Me=0;Me<b.length;Me++)n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(te.push(e.COLOR_ATTACHMENT0+Me),E.depthBuffer)te.push(Ee);let ze=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ze===!1){if(E.depthBuffer)Q|=e.DEPTH_BUFFER_BIT;if(E.stencilBuffer)Q|=e.STENCIL_BUFFER_BIT}if(_e)e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[Me]);if(ze===!0)e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Ee]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Ee]);if(_e){let ee=i.get(b[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ee,0)}if(e.blitFramebuffer(0,0,k,ne,0,0,k,ne,Q,e.NEAREST),c)e.invalidateFramebuffer(e.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<b.length;Me++){n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,fe.__webglColorRenderbuffer[Me]);let ze=i.get(b[Me]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,ze,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function me(E){return Math.min(s.maxSamples,E.samples)}function de(E){let b=i.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(E){let b=a.render.frame;if(h.get(E)!==b)h.set(E,b),E.update()}function De(E,b){let{colorSpace:k,format:ne,type:Q}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===1035)return b;if(k!=="srgb-linear"&&k!=="")if(tt.getTransfer(k)==="srgb"){if(o===!1)if(t.has("EXT_sRGB")===!0&&ne===1023)E.format=1035,E.minFilter=1006,E.generateMipmaps=!1;else b=Xa.sRGBToLinear(b);else if(ne!==1023||Q!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",k);return b}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=L,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=de}function B0(e,t,n){let i=n.isWebGL2;function s(r,a=""){let o,l=tt.getTransfer(a);if(r===1009)return e.UNSIGNED_BYTE;if(r===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return e.BYTE;if(r===1011)return e.SHORT;if(r===1012)return e.UNSIGNED_SHORT;if(r===1013)return e.INT;if(r===1014)return e.UNSIGNED_INT;if(r===1015)return e.FLOAT;if(r===1016){if(i)return e.HALF_FLOAT;if(o=t.get("OES_texture_half_float"),o!==null)return o.HALF_FLOAT_OES;else return null}if(r===1021)return e.ALPHA;if(r===1023)return e.RGBA;if(r===1024)return e.LUMINANCE;if(r===1025)return e.LUMINANCE_ALPHA;if(r===1026)return e.DEPTH_COMPONENT;if(r===1027)return e.DEPTH_STENCIL;if(r===1035)if(o=t.get("EXT_sRGB"),o!==null)return o.SRGB_ALPHA_EXT;else return null;if(r===1028)return e.RED;if(r===1029)return e.RED_INTEGER;if(r===1030)return e.RG;if(r===1031)return e.RG_INTEGER;if(r===1033)return e.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(l==="srgb")if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)if(o=t.get("WEBGL_compressed_texture_etc1"),o!==null)return o.COMPRESSED_RGB_ETC1_WEBGL;else return null;if(r===37492||r===37496)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===37492)return l==="srgb"?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===37496)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===37808)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return l==="srgb"?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===36492)return l==="srgb"?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(r===1020){if(i)return e.UNSIGNED_INT_24_8;if(o=t.get("WEBGL_depth_texture"),o!==null)return o.UNSIGNED_INT_24_8_WEBGL;else return null}return e[r]!==void 0?e[r]:null}return{convert:s}}class Oh extends Ot{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class ai extends Pt{constructor(){super();this.isGroup=!0,this.type="Group"}}var k0={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),p=this._getHandJoint(l,y);if(x!==null)p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius;p.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=0.02,f=0.005;if(l.inputState.pinching&&u>d+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&u<=d-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(k0)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fh extends Di{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,f=null,y=t.getContextAttributes(),x=null,p=null,m=[],_=[],v=new Ve,w=null,C=new Ot;C.layers.enable(1),C.viewport=new Ct;let T=new Ot;T.layers.enable(2),T.viewport=new Ct;let I=[C,T],F=new Oh;F.layers.enable(1),F.layers.enable(2);let M=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let j=m[D];if(j===void 0)j=new mo,m[D]=j;return j.getTargetRaySpace()},this.getControllerGrip=function(D){let j=m[D];if(j===void 0)j=new mo,m[D]=j;return j.getGripSpace()},this.getHand=function(D){let j=m[D];if(j===void 0)j=new mo,m[D]=j;return j.getHandSpace()};function U(D){let j=_.indexOf(D.inputSource);if(j===-1)return;let ie=m[j];if(ie!==void 0)ie.update(D.inputSource,D.frame,l||r),ie.dispatchEvent({type:D.type,data:D.inputSource})}function Y(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",J);for(let D=0;D<m.length;D++){let j=_[D];if(j===null)continue;_[D]=null,m[D].disconnect(j)}M=null,A=null,e.setRenderTarget(x),d=null,u=null,h=null,i=null,p=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){if(s=D,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){if(a=D,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0)await t.makeXRCompatible();if(w=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Sn(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,ie=null,se=null;if(y.depth)se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?1027:1026,ie=y.stencil?1020:1014;let re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(re),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Sn(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Qa(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let ce=e.properties.get(p);ce.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function J(D){for(let j=0;j<D.removed.length;j++){let ie=D.removed[j],se=_.indexOf(ie);if(se>=0)_[se]=null,m[se].disconnect(ie)}for(let j=0;j<D.added.length;j++){let ie=D.added[j],se=_.indexOf(ie);if(se===-1){for(let ce=0;ce<m.length;ce++)if(ce>=_.length){_.push(ie),se=ce;break}else if(_[ce]===null){_[ce]=ie,se=ce;break}if(se===-1)break}let re=m[se];if(re)re.connect(ie)}}let R=new N,B=new N;function O(D,j,ie){R.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);let se=R.distanceTo(B),re=j.projectionMatrix.elements,ce=ie.projectionMatrix.elements,le=re[14]/(re[10]-1),ue=re[14]/(re[10]+1),we=(re[9]+1)/re[5],L=(re[9]-1)/re[5],Qe=(re[8]-1)/re[0],Le=(ce[8]+1)/ce[0],xe=le*Qe,me=le*Le,de=se/(-Qe+Le),Fe=de*-Qe;j.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Fe),D.translateZ(de),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();let De=le+de,E=ue+de,b=xe-Fe,k=me+(se-Fe),ne=we*ue/E*De,Q=L*ue/E*De;D.projectionMatrix.makePerspective(b,k,ne,Q,De,E),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function X(D,j){if(j===null)D.matrixWorld.copy(D.matrix);else D.matrixWorld.multiplyMatrices(j.matrixWorld,D.matrix);D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;if(F.near=T.near=C.near=D.near,F.far=T.far=C.far=D.far,M!==F.near||A!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),M=F.near,A=F.far;let j=D.parent,ie=F.cameras;X(F,j);for(let se=0;se<ie.length;se++)X(ie[se],j);if(ie.length===2)O(F,C,T);else F.projectionMatrix.copy(C.projectionMatrix);G(D,F,j)};function G(D,j,ie){if(ie===null)D.matrix.copy(j.matrixWorld);else D.matrix.copy(ie.matrixWorld),D.matrix.invert(),D.matrix.multiply(j.matrixWorld);if(D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(j.projectionMatrix),D.projectionMatrixInverse.copy(j.projectionMatrixInverse),D.isPerspectiveCamera)D.fov=nr*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(u===null&&d===null)return;return o},this.setFoveation=function(D){if(o=D,u!==null)u.fixedFoveation=D;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=D};let V=null;function Z(D,j){if(c=j.getViewerPose(l||r),f=j,c!==null){let ie=c.views;if(d!==null)e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p);let se=!1;if(ie.length!==F.cameras.length)F.cameras.length=0,se=!0;for(let re=0;re<ie.length;re++){let ce=ie[re],le=null;if(d!==null)le=d.getViewport(ce);else{let we=h.getViewSubImage(u,ce);if(le=we.viewport,re===0)e.setRenderTargetTextures(p,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p)}let ue=I[re];if(ue===void 0)ue=new Ot,ue.layers.enable(re),ue.viewport=new Ct,I[re]=ue;if(ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(le.x,le.y,le.width,le.height),re===0)F.matrix.copy(ue.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(se===!0)F.cameras.push(ue)}}for(let ie=0;ie<m.length;ie++){let se=_[ie],re=m[ie];if(se!==null&&re!==void 0)re.update(se,j,l||r)}if(V)V(D,j);if(j.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:j});f=null}let K=new Eh;K.setAnimationLoop(Z),this.setAnimationLoop=function(D){V=D},this.dispose=function(){}}}function H0(e,t){function n(p,m){if(p.matrixAutoUpdate===!0)p.updateMatrix();m.value.copy(p.matrix)}function i(p,m){if(m.color.getRGB(p.fogColor.value,bh(e)),m.isFog)p.fogNear.value=m.near,p.fogFar.value=m.far;else if(m.isFogExp2)p.fogDensity.value=m.density}function s(p,m,_,v,w){if(m.isMeshBasicMaterial)r(p,m);else if(m.isMeshLambertMaterial)r(p,m);else if(m.isMeshToonMaterial)r(p,m),u(p,m);else if(m.isMeshPhongMaterial)r(p,m),h(p,m);else if(m.isMeshStandardMaterial){if(r(p,m),d(p,m),m.isMeshPhysicalMaterial)f(p,m,w)}else if(m.isMeshMatcapMaterial)r(p,m),y(p,m);else if(m.isMeshDepthMaterial)r(p,m);else if(m.isMeshDistanceMaterial)r(p,m),x(p,m);else if(m.isMeshNormalMaterial)r(p,m);else if(m.isLineBasicMaterial){if(a(p,m),m.isLineDashedMaterial)o(p,m)}else if(m.isPointsMaterial)l(p,m,_,v);else if(m.isSpriteMaterial)c(p,m);else if(m.isShadowMaterial)p.color.value.copy(m.color),p.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function r(p,m){if(p.opacity.value=m.opacity,m.color)p.diffuse.value.copy(m.color);if(m.emissive)p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)p.map.value=m.map,n(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform);if(m.bumpMap){if(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===1)p.bumpScale.value*=-1}if(m.normalMap){if(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===1)p.normalScale.value.negate()}if(m.displacementMap)p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias;if(m.emissiveMap)p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform);if(m.specularMap)p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest;let _=t.get(m).envMap;if(_)p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio;if(m.lightMap){p.lightMap.value=m.lightMap;let v=e._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,n(m.lightMap,p.lightMapTransform)}if(m.aoMap)p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform)}function a(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map)p.map.value=m.map,n(m.map,p.mapTransform)}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*0.5,m.map)p.map.value=m.map,n(m.map,p.uvTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function c(p,m){if(p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map)p.map.value=m.map,n(m.map,p.mapTransform);if(m.alphaMap)p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform);if(m.alphaTest>0)p.alphaTest.value=m.alphaTest}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,0.0001)}function u(p,m){if(m.gradientMap)p.gradientMap.value=m.gradientMap}function d(p,m){if(p.metalness.value=m.metalness,m.metalnessMap)p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=m.roughness,m.roughnessMap)p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform);if(t.get(m).envMap)p.envMapIntensity.value=m.envMapIntensity}function f(p,m,_){if(p.ior.value=m.ior,m.sheen>0){if(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform);if(m.sheenRoughnessMap)p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform);if(m.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1)p.clearcoatNormalScale.value.negate()}}if(m.iridescence>0){if(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap)p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform);if(m.iridescenceThicknessMap)p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(m.transmission>0){if(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap)p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=m.thickness,m.thicknessMap)p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap)p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform);if(m.specularIntensityMap)p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform)}function y(p,m){if(m.matcap)p.matcap.value=m.matcap}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function G0(e,t,n,i){let s={},r={},a=[],o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let w=v.program;i.uniformBlockBinding(_,w)}function c(_,v){let w=s[_.id];if(w===void 0)y(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",p);let C=v.program;i.updateUBOMapping(_,C);let T=t.render.frame;if(r[_.id]!==T)d(_),r[_.id]=T}function h(_){let v=u();_.__bindingPointIndex=v;let w=e.createBuffer(),{__size:C,usage:T}=_;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,C,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,w),w}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],{uniforms:w,__cache:C}=_;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let T=0,I=w.length;T<I;T++){let F=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,A=F.length;M<A;M++){let U=F[M];if(f(U,T,M,C)===!0){let Y=U.__offset,J=Array.isArray(U.value)?U.value:[U.value],R=0;for(let B=0;B<J.length;B++){let O=J[B],X=x(O);if(typeof O==="number"||typeof O==="boolean")U.__data[0]=O,e.bufferSubData(e.UNIFORM_BUFFER,Y+R,U.__data);else if(O.isMatrix3)U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0;else O.toArray(U.__data,R),R+=X.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,Y,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(_,v,w,C){let T=_.value,I=v+"_"+w;if(C[I]===void 0){if(typeof T==="number"||typeof T==="boolean")C[I]=T;else C[I]=T.clone();return!0}else{let F=C[I];if(typeof T==="number"||typeof T==="boolean"){if(F!==T)return C[I]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function y(_){let v=_.uniforms,w=0,C=16;for(let I=0,F=v.length;I<F;I++){let M=Array.isArray(v[I])?v[I]:[v[I]];for(let A=0,U=M.length;A<U;A++){let Y=M[A],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let R=0,B=J.length;R<B;R++){let O=J[R],X=x(O),G=w%C;if(G!==0&&C-G<X.boundary)w+=C-G;Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=X.storage}}}let T=w%C;if(T>0)w+=C-T;return _.__size=w,_.__cache={},this}function x(_){let v={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")v.boundary=4,v.storage=4;else if(_.isVector2)v.boundary=8,v.storage=8;else if(_.isVector3||_.isColor)v.boundary=16,v.storage=12;else if(_.isVector4)v.boundary=16,v.storage=16;else if(_.isMatrix3)v.boundary=48,v.storage=48;else if(_.isMatrix4)v.boundary=64,v.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)e.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Eo{constructor(e={}){let{canvas:t=Zf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null)u=n.getContextAttributes().alpha;else u=r;let d=new Uint32Array(4),f=new Int32Array(4),y=null,x=null,p=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let _=this,v=!1,w=0,C=0,T=null,I=-1,F=null,M=new Ct,A=new Ct,U=null,Y=new Re(0),J=0,{width:R,height:B}=t,O=1,X=null,G=null,V=new Ct(0,0,R,B),Z=new Ct(0,0,R,B),K=!1,D=new Mo,j=!1,ie=!1,se=null,re=new vt,ce=new Ve,le=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return T===null?O:1}let L=n;function Qe(S,z){for(let W=0;W<S.length;W++){let q=S[W],H=t.getContext(q,z);if(H!==null)return H}return null}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine","three.js r160");if(t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",P,!1),L===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0)z.shift();if(L=Qe(z,S),L===null)if(Qe(z))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}if(typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext)console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.");if(L.getShaderPrecisionFormat===void 0)L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Le,xe,me,de,Fe,De,E,b,k,ne,Q,te,Ee,fe,_e,Me,ze,ee,_t,Ge,Pe,ye,ve,We;function nt(){Le=new ax(L),xe=new tx(L,Le,e),Le.init(xe),ye=new B0(L,Le,xe),me=new O0(L,Le,xe),de=new hx(L),Fe=new w0,De=new F0(L,Le,me,Fe,xe,ye,de),E=new ix(_),b=new ox(_),k=new _p(L,xe),ve=new Qg(L,Le,k,xe),ne=new lx(L,k,de,ve),Q=new px(L,ne,k,de),_t=new fx(L,xe,De),Me=new nx(Fe),te=new E0(_,E,b,Le,xe,ve,Me),Ee=new H0(_,Fe),fe=new A0,_e=new N0(Le,xe),ee=new Kg(_,E,b,me,Q,u,o),ze=new z0(_,Q,xe),We=new G0(L,de,xe,me),Ge=new ex(L,Le,de,xe),Pe=new cx(L,Le,de,xe),de.programs=te.programs,_.capabilities=xe,_.extensions=Le,_.properties=Fe,_.renderLists=fe,_.shadowMap=ze,_.state=me,_.info=de}nt();let qe=new Fh(_,L);this.xr=qe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=Le.get("WEBGL_lose_context");if(S)S.loseContext()},this.forceContextRestore=function(){let S=Le.get("WEBGL_lose_context");if(S)S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){if(S===void 0)return;O=S,this.setSize(R,B,!1)},this.getSize=function(S){return S.set(R,B)},this.setSize=function(S,z,W=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(R=S,B=z,t.width=Math.floor(S*O),t.height=Math.floor(z*O),W===!0)t.style.width=S+"px",t.style.height=z+"px";this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(R*O,B*O).floor()},this.setDrawingBufferSize=function(S,z,W){R=S,B=z,O=W,t.width=Math.floor(S*W),t.height=Math.floor(z*W),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(V)},this.setViewport=function(S,z,W,q){if(S.isVector4)V.set(S.x,S.y,S.z,S.w);else V.set(S,z,W,q);me.viewport(M.copy(V).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,z,W,q){if(S.isVector4)Z.set(S.x,S.y,S.z,S.w);else Z.set(S,z,W,q);me.scissor(A.copy(Z).multiplyScalar(O).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){me.setScissorTest(K=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){G=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,z=!0,W=!0){let q=0;if(S){let H=!1;if(T!==null){let ge=T.texture.format;H=ge===1033||ge===1031||ge===1029}if(H){let ge=T.texture.type,be=ge===1009||ge===1014||ge===1012||ge===1020||ge===1017||ge===1018,Te=ee.getClearColor(),Ce=ee.getClearAlpha(),{r:Be,g:Ie,b:Ue}=Te;if(be)d[0]=Be,d[1]=Ie,d[2]=Ue,d[3]=Ce,L.clearBufferuiv(L.COLOR,0,d);else f[0]=Be,f[1]=Ie,f[2]=Ue,f[3]=Ce,L.clearBufferiv(L.COLOR,0,f)}else q|=L.COLOR_BUFFER_BIT}if(z)q|=L.DEPTH_BUFFER_BIT;if(W)q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){if(t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",P,!1),fe.dispose(),_e.dispose(),Fe.dispose(),E.dispose(),b.dispose(),Q.dispose(),ve.dispose(),We.dispose(),te.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",bt),qe.removeEventListener("sessionend",Ft),se)se.dispose(),se=null;je.stop()};function it(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let S=de.autoReset,z=ze.enabled,W=ze.autoUpdate,q=ze.needsUpdate,H=ze.type;nt(),de.autoReset=S,ze.enabled=z,ze.autoUpdate=W,ze.needsUpdate=q,ze.type=H}function P(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){let z=S.target;z.removeEventListener("dispose",he),pe(z)}function pe(S){Ae(S),Fe.remove(S)}function Ae(S){let z=Fe.get(S).programs;if(z!==void 0){if(z.forEach(function(W){te.releaseProgram(W)}),S.isShaderMaterial)te.releaseShaderCache(S)}}this.renderBufferDirect=function(S,z,W,q,H,ge){if(z===null)z=ue;let be=H.isMesh&&H.matrixWorld.determinant()<0,Te=Nf(S,z,W,q,H);me.setMaterial(q,be);let Ce=W.index,Be=1;if(q.wireframe===!0){if(Ce=ne.getWireframeAttribute(W),Ce===void 0)return;Be=2}let Ie=W.drawRange,Ue=W.attributes.position,pt=Ie.start*Be,Zt=(Ie.start+Ie.count)*Be;if(ge!==null)pt=Math.max(pt,ge.start*Be),Zt=Math.min(Zt,(ge.start+ge.count)*Be);if(Ce!==null)pt=Math.max(pt,0),Zt=Math.min(Zt,Ce.count);else if(Ue!==void 0&&Ue!==null)pt=Math.max(pt,0),Zt=Math.min(Zt,Ue.count);let Tt=Zt-pt;if(Tt<0||Tt===1/0)return;ve.setup(H,q,Te,W,Ce);let On,ct=Ge;if(Ce!==null)On=k.get(Ce),ct=Pe,ct.setIndex(On);if(H.isMesh)if(q.wireframe===!0)me.setLineWidth(q.wireframeLinewidth*we()),ct.setMode(L.LINES);else ct.setMode(L.TRIANGLES);else if(H.isLine){let ke=q.linewidth;if(ke===void 0)ke=1;if(me.setLineWidth(ke*we()),H.isLineSegments)ct.setMode(L.LINES);else if(H.isLineLoop)ct.setMode(L.LINE_LOOP);else ct.setMode(L.LINE_STRIP)}else if(H.isPoints)ct.setMode(L.POINTS);else if(H.isSprite)ct.setMode(L.TRIANGLES);if(H.isBatchedMesh)ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ct.renderInstances(pt,Tt,H.count);else if(W.isInstancedBufferGeometry){let ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ua=Math.min(W.instanceCount,ke);ct.renderInstances(pt,Tt,ua)}else ct.render(pt,Tt)};function Se(S,z,W){if(S.transparent===!0&&S.side===2&&S.forceSinglePass===!1)S.side=1,S.needsUpdate=!0,kr(S,z,W),S.side=0,S.needsUpdate=!0,kr(S,z,W),S.side=2;else kr(S,z,W)}this.compile=function(S,z,W=null){if(W===null)W=S;if(x=_e.get(W),x.init(),m.push(x),W.traverseVisible(function(H){if(H.isLight&&H.layers.test(z.layers)){if(x.pushLight(H),H.castShadow)x.pushShadow(H)}}),S!==W)S.traverseVisible(function(H){if(H.isLight&&H.layers.test(z.layers)){if(x.pushLight(H),H.castShadow)x.pushShadow(H)}});x.setupLights(_._useLegacyLights);let q=new Set;return S.traverse(function(H){let ge=H.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Te=ge[be];Se(Te,W,H),q.add(Te)}else Se(ge,W,H),q.add(ge)}),m.pop(),x=null,q},this.compileAsync=function(S,z,W=null){let q=this.compile(S,z,W);return new Promise((H)=>{function ge(){if(q.forEach(function(be){if(Fe.get(be).currentProgram.isReady())q.delete(be)}),q.size===0){H(S);return}setTimeout(ge,10)}if(Le.get("KHR_parallel_shader_compile")!==null)ge();else setTimeout(ge,10)})};let st=null;function ot(S){if(st)st(S)}function bt(){je.stop()}function Ft(){je.start()}let je=new Eh;if(je.setAnimationLoop(ot),typeof self<"u")je.setContext(self);this.setAnimationLoop=function(S){st=S,qe.setAnimationLoop(S),S===null?je.stop():je.start()},qe.addEventListener("sessionstart",bt),qe.addEventListener("sessionend",Ft),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(z.parent===null&&z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(qe.enabled===!0&&qe.isPresenting===!0){if(qe.cameraAutoUpdate===!0)qe.updateCamera(z);z=qe.getCamera()}if(S.isScene===!0)S.onBeforeRender(_,S,z,T);if(x=_e.get(S,m.length),x.init(),m.push(x),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),D.setFromProjectionMatrix(re),ie=this.localClippingEnabled,j=Me.init(this.clippingPlanes,ie),y=fe.get(S,p.length),y.init(),p.push(y),vn(S,z,0,_.sortObjects),y.finish(),_.sortObjects===!0)y.sort(X,G);if(this.info.render.frame++,j===!0)Me.beginShadows();let W=x.state.shadowsArray;if(ze.render(W,S,z),j===!0)Me.endShadows();if(this.info.autoReset===!0)this.info.reset();if(ee.render(y,S),x.setupLights(_._useLegacyLights),z.isArrayCamera){let q=z.cameras;for(let H=0,ge=q.length;H<ge;H++){let be=q[H];bn(y,S,be,be.viewport)}}else bn(y,S,z);if(T!==null)De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T);if(S.isScene===!0)S.onAfterRender(_,S,z);if(ve.resetDefaultState(),I=-1,F=null,m.pop(),m.length>0)x=m[m.length-1];else x=null;if(p.pop(),p.length>0)y=p[p.length-1];else y=null};function vn(S,z,W,q){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD){if(S.autoUpdate===!0)S.update(z)}else if(S.isLight){if(x.pushLight(S),S.castShadow)x.pushShadow(S)}else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){if(q)le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(re);let be=Q.update(S),Te=S.material;if(Te.visible)y.push(S,be,Te,W,le.z,null)}}else if(S.isMesh||S.isLine||S.isPoints){if(!S.frustumCulled||D.intersectsObject(S)){let be=Q.update(S),Te=S.material;if(q){if(S.boundingSphere!==void 0){if(S.boundingSphere===null)S.computeBoundingSphere();le.copy(S.boundingSphere.center)}else{if(be.boundingSphere===null)be.computeBoundingSphere();le.copy(be.boundingSphere.center)}le.applyMatrix4(S.matrixWorld).applyMatrix4(re)}if(Array.isArray(Te)){let Ce=be.groups;for(let Be=0,Ie=Ce.length;Be<Ie;Be++){let Ue=Ce[Be],pt=Te[Ue.materialIndex];if(pt&&pt.visible)y.push(S,be,pt,W,le.z,Ue)}}else if(Te.visible)y.push(S,be,Te,W,le.z,null)}}}let ge=S.children;for(let be=0,Te=ge.length;be<Te;be++)vn(ge[be],z,W,q)}function bn(S,z,W,q){let{opaque:H,transmissive:ge,transparent:be}=S;if(x.setupLightsView(W),j===!0)Me.setGlobalState(_.clippingPlanes,W);if(ge.length>0)If(H,ge,z,W);if(q)me.viewport(M.copy(q));if(H.length>0)Br(H,z,W);if(ge.length>0)Br(ge,z,W);if(be.length>0)Br(be,z,W);me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function If(S,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let ge=xe.isWebGL2;if(se===null)se=new Sn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:ge?4:0});if(_.getDrawingBufferSize(ce),ge)se.setSize(ce.x,ce.y);else se.setSize(go(ce.x),go(ce.y));let be=_.getRenderTarget();if(_.setRenderTarget(se),_.getClearColor(Y),J=_.getClearAlpha(),J<1)_.setClearColor(16777215,0.5);_.clear();let Te=_.toneMapping;_.toneMapping=0,Br(S,W,q),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se);let Ce=!1;for(let Be=0,Ie=z.length;Be<Ie;Be++){let Ue=z[Be],{object:pt,geometry:Zt,material:Tt,group:On}=Ue;if(Tt.side===2&&pt.layers.test(q.layers)){let ct=Tt.side;Tt.side=1,Tt.needsUpdate=!0,xc(pt,W,q,Zt,Tt,On),Tt.side=ct,Tt.needsUpdate=!0,Ce=!0}}if(Ce===!0)De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se);_.setRenderTarget(be),_.setClearColor(Y,J),_.toneMapping=Te}function Br(S,z,W){let q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ge=S.length;H<ge;H++){let be=S[H],{object:Te,geometry:Ce}=be,Be=q===null?be.material:q,Ie=be.group;if(Te.layers.test(W.layers))xc(Te,z,W,Ce,Be,Ie)}}function xc(S,z,W,q,H,ge){if(S.onBeforeRender(_,z,W,q,H,ge),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(_,z,W,q,S,ge),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1)H.side=1,H.needsUpdate=!0,_.renderBufferDirect(W,z,q,H,S,ge),H.side=0,H.needsUpdate=!0,_.renderBufferDirect(W,z,q,H,S,ge),H.side=2;else _.renderBufferDirect(W,z,q,H,S,ge);S.onAfterRender(_,z,W,q,H,ge)}function kr(S,z,W){if(z.isScene!==!0)z=ue;let q=Fe.get(S),H=x.state.lights,ge=x.state.shadowsArray,be=H.state.version,Te=te.getParameters(S,H.state,ge,z,W),Ce=te.getProgramCacheKey(Te),Be=q.programs;if(q.environment=S.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(S.isMeshStandardMaterial?b:E).get(S.envMap||q.environment),Be===void 0)S.addEventListener("dispose",he),Be=new Map,q.programs=Be;let Ie=Be.get(Ce);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===be)return yc(S,Te),Ie}else Te.uniforms=te.getUniforms(S),S.onBuild(W,Te,_),S.onBeforeCompile(Te,_),Ie=te.acquireProgram(Te,Ce),Be.set(Ce,Ie),q.uniforms=Te.uniforms;let Ue=q.uniforms;if(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)Ue.clippingPlanes=Me.uniform;if(yc(S,Te),q.needsLights=Uf(S),q.lightsStateVersion=be,q.needsLights)Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix;return q.currentProgram=Ie,q.uniformsList=null,Ie}function _c(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=tr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function yc(S,z){let W=Fe.get(S);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Nf(S,z,W,q,H){if(z.isScene!==!0)z=ue;De.resetTextureUnits();let ge=z.fog,be=q.isMeshStandardMaterial?z.environment:null,Te=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:"srgb-linear",Ce=(q.isMeshStandardMaterial?b:E).get(q.envMap||be),Be=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,Zt=!!W.morphAttributes.color,Tt=0;if(q.toneMapped){if(T===null||T.isXRRenderTarget===!0)Tt=_.toneMapping}let On=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=On!==void 0?On.length:0,ke=Fe.get(q),ua=x.state.lights;if(j===!0){if(ie===!0||S!==F){let an=S===F&&q.id===I;Me.setState(q,S,an)}}let ut=!1;if(q.version===ke.__version){if(ke.needsLights&&ke.lightsStateVersion!==ua.state.version)ut=!0;else if(ke.outputColorSpace!==Te)ut=!0;else if(H.isBatchedMesh&&ke.batching===!1)ut=!0;else if(!H.isBatchedMesh&&ke.batching===!0)ut=!0;else if(H.isInstancedMesh&&ke.instancing===!1)ut=!0;else if(!H.isInstancedMesh&&ke.instancing===!0)ut=!0;else if(H.isSkinnedMesh&&ke.skinning===!1)ut=!0;else if(!H.isSkinnedMesh&&ke.skinning===!0)ut=!0;else if(H.isInstancedMesh&&ke.instancingColor===!0&&H.instanceColor===null)ut=!0;else if(H.isInstancedMesh&&ke.instancingColor===!1&&H.instanceColor!==null)ut=!0;else if(ke.envMap!==Ce)ut=!0;else if(q.fog===!0&&ke.fog!==ge)ut=!0;else if(ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection))ut=!0;else if(ke.vertexAlphas!==Be)ut=!0;else if(ke.vertexTangents!==Ie)ut=!0;else if(ke.morphTargets!==Ue)ut=!0;else if(ke.morphNormals!==pt)ut=!0;else if(ke.morphColors!==Zt)ut=!0;else if(ke.toneMapping!==Tt)ut=!0;else if(xe.isWebGL2===!0&&ke.morphTargetsCount!==ct)ut=!0}else ut=!0,ke.__version=q.version;let Ti=ke.currentProgram;if(ut===!0)Ti=kr(q,z,H);let vc=!1,$s=!1,da=!1,Dt=Ti.getUniforms(),Ai=ke.uniforms;if(me.useProgram(Ti.program))vc=!0,$s=!0,da=!0;if(q.id!==I)I=q.id,$s=!0;if(vc||F!==S){Dt.setValue(L,"projectionMatrix",S.projectionMatrix),Dt.setValue(L,"viewMatrix",S.matrixWorldInverse);let an=Dt.map.cameraPosition;if(an!==void 0)an.setValue(L,le.setFromMatrixPosition(S.matrixWorld));if(xe.logarithmicDepthBuffer)Dt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2));if(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)Dt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0);if(F!==S)F=S,$s=!0,da=!0}if(H.isSkinnedMesh){Dt.setOptional(L,H,"bindMatrix"),Dt.setOptional(L,H,"bindMatrixInverse");let an=H.skeleton;if(an)if(xe.floatVertexTextures){if(an.boneTexture===null)an.computeBoneTexture();Dt.setValue(L,"boneTexture",an.boneTexture,De)}else console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")}if(H.isBatchedMesh)Dt.setOptional(L,H,"batchingTexture"),Dt.setValue(L,"batchingTexture",H._matricesTexture,De);let fa=W.morphAttributes;if(fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&xe.isWebGL2===!0)_t.update(H,W,Ti);if($s||ke.receiveShadow!==H.receiveShadow)ke.receiveShadow=H.receiveShadow,Dt.setValue(L,"receiveShadow",H.receiveShadow);if(q.isMeshGouraudMaterial&&q.envMap!==null)Ai.envMap.value=Ce,Ai.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1;if($s){if(Dt.setValue(L,"toneMappingExposure",_.toneMappingExposure),ke.needsLights)Df(Ai,da);if(ge&&q.fog===!0)Ee.refreshFogUniforms(Ai,ge);Ee.refreshMaterialUniforms(Ai,q,O,B,se),tr.upload(L,_c(ke),Ai,De)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0)tr.upload(L,_c(ke),Ai,De),q.uniformsNeedUpdate=!1;if(q.isSpriteMaterial)Dt.setValue(L,"center",H.center);if(Dt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(L,"normalMatrix",H.normalMatrix),Dt.setValue(L,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let an=q.uniformsGroups;for(let pa=0,zf=an.length;pa<zf;pa++)if(xe.isWebGL2){let bc=an[pa];We.update(bc,Ti),We.bind(bc,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function Df(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Uf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}if(this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,z,W){Fe.get(S.texture).__webglTexture=z,Fe.get(S.depthTexture).__webglTexture=W;let q=Fe.get(S);if(q.__hasExternalTextures=!0,q.__hasExternalTextures){if(q.__autoAllocateDepthBuffer=W===void 0,!q.__autoAllocateDepthBuffer){if(Le.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1}}},this.setRenderTargetFramebuffer=function(S,z){let W=Fe.get(S);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,W=0){T=S,w=z,C=W;let q=!0,H=null,ge=!1,be=!1;if(S){let Ce=Fe.get(S);if(Ce.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Ce.__webglFramebuffer===void 0)De.setupRenderTarget(S);else if(Ce.__hasExternalTextures)De.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);let Be=S.texture;if(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)be=!0;let Ie=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget){if(Array.isArray(Ie[z]))H=Ie[z][W];else H=Ie[z];ge=!0}else if(xe.isWebGL2&&S.samples>0&&De.useMultisampledRTT(S)===!1)H=Fe.get(S).__webglMultisampledFramebuffer;else if(Array.isArray(Ie))H=Ie[W];else H=Ie;M.copy(S.viewport),A.copy(S.scissor),U=S.scissorTest}else M.copy(V).multiplyScalar(O).floor(),A.copy(Z).multiplyScalar(O).floor(),U=K;if(me.bindFramebuffer(L.FRAMEBUFFER,H)&&xe.drawBuffers&&q)me.drawBuffers(S,H);if(me.viewport(M),me.scissor(A),me.setScissorTest(U),ge){let Ce=Fe.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,W)}else if(be){let Ce=Fe.get(S.texture),Be=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,W||0,Be)}I=-1},this.readRenderTargetPixels=function(S,z,W,q,H,ge,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0)Te=Te[be];if(Te){me.bindFramebuffer(L.FRAMEBUFFER,Te);try{let Ce=S.texture,{format:Be,type:Ie}=Ce;if(Be!==1023&&ye.convert(Be)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Ie===1016&&(Le.has("EXT_color_buffer_half_float")||xe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ie!==1009&&ye.convert(Ie)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===1015&&(xe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(z>=0&&z<=S.width-q&&(W>=0&&W<=S.height-H))L.readPixels(z,W,q,H,ye.convert(Be),ye.convert(Ie),ge)}finally{let Ce=T!==null?Fe.get(T).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(S,z,W=0){let q=Math.pow(2,-W),H=Math.floor(z.image.width*q),ge=Math.floor(z.image.height*q);De.setTexture2D(z,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,S.x,S.y,H,ge),me.unbindTexture()},this.copyTextureToTexture=function(S,z,W,q=0){let H=z.image.width,ge=z.image.height,be=ye.convert(W.format),Te=ye.convert(W.type);if(De.setTexture2D(W,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture)L.texSubImage2D(L.TEXTURE_2D,q,S.x,S.y,H,ge,be,Te,z.image.data);else if(z.isCompressedTexture)L.compressedTexSubImage2D(L.TEXTURE_2D,q,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data);else L.texSubImage2D(L.TEXTURE_2D,q,S.x,S.y,be,Te,z.image);if(q===0&&W.generateMipmaps)L.generateMipmap(L.TEXTURE_2D);me.unbindTexture()},this.copyTextureToTexture3D=function(S,z,W,q,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=S.max.x-S.min.x+1,be=S.max.y-S.min.y+1,Te=S.max.z-S.min.z+1,Ce=ye.convert(q.format),Be=ye.convert(q.type),Ie;if(q.isData3DTexture)De.setTexture3D(q,0),Ie=L.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)De.setTexture2DArray(q,0),Ie=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);let Ue=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zt=L.getParameter(L.UNPACK_SKIP_PIXELS),Tt=L.getParameter(L.UNPACK_SKIP_ROWS),On=L.getParameter(L.UNPACK_SKIP_IMAGES),ct=W.isCompressedTexture?W.mipmaps[H]:W.image;if(L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,S.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,S.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture)L.texSubImage3D(Ie,H,z.x,z.y,z.z,ge,be,Te,Ce,Be,ct.data);else if(W.isCompressedArrayTexture)console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ie,H,z.x,z.y,z.z,ge,be,Te,Ce,ct.data);else L.texSubImage3D(Ie,H,z.x,z.y,z.z,ge,be,Te,Ce,Be,ct);if(L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,On),H===0&&q.generateMipmaps)L.generateMipmap(Ie);me.unbindTexture()},this.initTexture=function(S){if(S.isCubeTexture)De.setTextureCube(S,0);else if(S.isData3DTexture)De.setTexture3D(S,0);else if(S.isDataArrayTexture||S.isCompressedArrayTexture)De.setTexture2DArray(S,0);else De.setTexture2D(S,0);me.unbindTexture()},this.resetState=function(){w=0,C=0,T=null,me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e==="display-p3"?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace==="srgb"?3001:3000}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?"srgb":"srgb-linear"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Bh extends Eo{}Bh.prototype.isWebGL1Renderer=!0;class ws extends Pt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)t.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)t.object.backgroundIntensity=this.backgroundIntensity;return t}}class hi extends ci{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var oh=new N,ah=new N,lh=new vt,Oa=new yo,co=new ir;class kh extends Pt{constructor(e=new Wt,t=new hi){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)oh.fromBufferAttribute(t,i-1),ah.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oh.distanceTo(ah);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(co.copy(n.boundingSphere),co.applyMatrix4(i),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;lh.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(lh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new N,c=new N,h=new N,u=new N,d=this.isLineSegments?2:1,f=n.index,x=n.attributes.position;if(f!==null){let p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let _=p,v=m-1;_<v;_+=d){let w=f.getX(_),C=f.getX(_+1);if(l.fromBufferAttribute(x,w),c.fromBufferAttribute(x,C),Oa.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(u);if(I<e.near||I>e.far)continue;t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,r.start),m=Math.min(x.count,r.start+r.count);for(let _=p,v=m-1;_<v;_+=d){if(l.fromBufferAttribute(x,_),c.fromBufferAttribute(x,_+1),Oa.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(u);if(C<e.near||C>e.far)continue;t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}var ch=new N,hh=new N;class Oi extends kh{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ch.distanceTo(hh);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}var ho=new N,uo=new N,Fa=new N,fo=new cn;class Ts extends Wt{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(_s*t),r=e.getIndex(),a=e.getAttribute("position"),o=r?r.count:a.count,l=[0,0,0],c=["a","b","c"],h=[,,,],u={},d=[];for(let f=0;f<o;f+=3){if(r)l[0]=r.getX(f),l[1]=r.getX(f+1),l[2]=r.getX(f+2);else l[0]=f,l[1]=f+1,l[2]=f+2;let{a:y,b:x,c:p}=fo;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),fo.getNormal(Fa),h[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let m=0;m<3;m++){let _=(m+1)%3,v=h[m],w=h[_],C=fo[c[m]],T=fo[c[_]],I=`${v}_${w}`,F=`${w}_${v}`;if(F in u&&u[F]){if(Fa.dot(u[F].normal)<=s)d.push(C.x,C.y,C.z),d.push(T.x,T.y,T.z);u[F]=null}else if(!(I in u))u[I]={index0:l[m],index1:l[_],normal:Fa.clone()}}}for(let f in u)if(u[f]){let{index0:y,index1:x}=u[f];ho.fromBufferAttribute(a,y),uo.fromBufferAttribute(a,x),d.push(ho.x,ho.y,ho.z),d.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new Yt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class el extends ci{constructor(e){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Fi extends ci{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function po(e,t,n){if(!e||!n&&e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function W0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}class rr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Hh extends rr{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,f=(n-t)/(i-t),y=f*f,x=y*f,p=-u*x+2*u*y-u*f,m=(1+u)*x+(-1.5-2*u)*y+(-0.5+u)*f+1,_=(-1-d)*x+(1.5+d)*y+0.5*f,v=d*x-d*y;for(let w=0;w!==a;++w)s[w]=p*r[c+w]+m*r[l+w]+_*r[o+w]+v*r[h+w];return s}}class Gh extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),h=1-c;for(let u=0;u!==a;++u)s[u]=r[l+u]*h+r[o+u]*c;return s}}class Wh extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(W0(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let h=a*n,u=h-n,d=h+n;for(let f=0;f!==n;++f){let y=t[h+f];if(y!==t[u+f]||y!==t[d+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let h=a*n,u=r*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=2301;class As extends Tn{}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=2300;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Vh extends Tn{}Vh.prototype.ValueTypeName="color";class Xh extends Tn{}Xh.prototype.ValueTypeName="number";class qh extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)Ui.slerpFlat(s,0,r,l-a,r,l,o);return s}}class wo extends Tn{InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}}wo.prototype.ValueTypeName="quaternion";wo.prototype.DefaultInterpolation=2301;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Tn{}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=2300;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Yh extends Tn{}Yh.prototype.ValueTypeName="vector";class $h{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],f=l[h+1];if(d.global)d.lastIndex=0;if(d.test(c))return f}return null}}}var V0=new $h;class jh{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jh.DEFAULT_MATERIAL_NAME="__DEFAULT";class tl extends Pt{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);if(t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0)t.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)t.object.distance=this.distance;if(this.angle!==void 0)t.object.angle=this.angle;if(this.decay!==void 0)t.object.decay=this.decay;if(this.penumbra!==void 0)t.object.penumbra=this.penumbra;if(this.shadow!==void 0)t.object.shadow=this.shadow.toJSON();return t}}var Ba=new vt,uh=new N,dh=new N;class Jh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};if(this.bias!==0)e.bias=this.bias;if(this.normalBias!==0)e.normalBias=this.normalBias;if(this.radius!==1)e.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)e.mapSize=this.mapSize.toArray();return e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zh extends Jh{constructor(){super(new sr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Bi extends tl{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class or extends tl{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}var nl="\\[\\]\\.:\\/",X0=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",q0="[^"+nl.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",il),$0=/(WCOD+)?/.source.replace("WCOD",q0),j0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),J0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),Z0=new RegExp("^"+Y0+$0+j0+J0+"$"),K0=["material","materials","bones","map"];class Kh{constructor(e,t,n){let i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new et(e,t,n);else return new et.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X0,"")}static parseTrackName(e){let t=Z0.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(K0.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=et.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.needsUpdate!==void 0)a=this.Versioning.NeedsUpdate;else if(e.matrixWorldNeedsUpdate!==void 0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Kh;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);class sl{constructor(e,t,n=0,i=1/0){this.ray=new yo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Wa(e,this,n,t),n.sort(fh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Wa(e[i],this,n,t);return n.sort(fh),n}}function fh(e,t){return e.distance-t.distance}function Wa(e,t,n,i){if(e.layers.test(t.layers))e.raycast(t,n);if(i===!0){let s=e.children;for(let r=0,a=s.length;r<a;r++)Wa(s[r],t,n,!0)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="160";var Lt=document.getElementById("c"),dt={w:1,h:1,x:0,y:0},Ye=new Eo({canvas:Lt,antialias:!0});Ye.setPixelRatio(Math.min(devicePixelRatio,2));Ye.shadowMap.enabled=!0;Ye.shadowMap.type=ph;Ye.localClippingEnabled=!0;var gt=new ws;gt.background=new Re("#7aa0c4");var Q0=Math.atan(1/Math.SQRT2),Ne={azim:Math.PI/4,elev:Q0,zoom:80,target:new N(30,15,23)},Xe={azim:Ne.azim,elev:Ne.elev,zoom:Ne.zoom,target:Ne.target.clone()},eu=45,ki=Math.tan(eu*Math.PI/360),To=2000,$e=new Ot(eu,1,0.1,4000),tu={uHorizon:{value:1}},rl=new mt(new Ss(2,2),new En({uniforms:tu,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
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
      }`}));rl.frustumCulled=!1;rl.renderOrder=-1e9;gt.add(rl);function nu(){let e=Math.tan(Ne.elev)/ki;tu.uHorizon.value=Math.max(-2,Math.min(2,e))}gt.add(new or(16777215,0.62));var tn=new Bi(16777215,0.78);tn.castShadow=!0;tn.shadow.mapSize.set(4096,4096);tn.shadow.normalBias=0.15;tn.shadow.bias=-0.0002;gt.add(tn);gt.add(tn.target);var iu=new Bi(16777215,0.16);iu.position.set(-6,5,-7);gt.add(iu);var ar={tail:0},nn=()=>{ar.tail=30},ol=new N,Ao=new N,Qh=new Map;function di(e){let t=Qh.get(e);if(!t)t=new Re().setHex(e),Qh.set(e,t);return t}var lr=new Fi({vertexColors:!0,side:bs}),al=new Fi({vertexColors:!0,transparent:!0,opacity:0.55,side:bs,depthWrite:!1});al.shadowSide=gh;var su=new zi({colorWrite:!1,side:bs}),Hi=new mt(new Ss(8000,8000),new el({opacity:0.32}));Hi.rotation.x=-Math.PI/2;Hi.position.y=-0.1;Hi.receiveShadow=!0;Hi.renderOrder=-1;gt.add(Hi);var An=new ai;gt.add(An);var Wn=new ai;gt.add(Wn);var sn=new Oi(new Ts(new wn(1,1,1)),new hi({color:10994876,depthTest:!1}));sn.visible=!1;sn.renderOrder=999;gt.add(sn);var Gi=new Oi(new Wt,new hi({vertexColors:!0,transparent:!0,depthTest:!1}));Gi.renderOrder=998;Gi.visible=!1;gt.add(Gi);var $t=new sl,Rn=new Ve,fi=new N,cr=new N;var Wi=(e,t,n)=>e+65536+(t+65536)*131072+(n+65536)*131072*131072,hn=(e,t)=>({x:e.x+t.x,y:e.y+t.y,z:e.z+t.z});function Ze(e,t){let{x:n,y:i,z:s}=e;switch(t&3){case 1:return{x:-s,y:i,z:n};case 2:return{x:-n,y:i,z:-s};case 3:return{x:s,y:i,z:-n};default:return{x:n,y:i,z:s}}}var Vn=(e,t)=>({rot:e.rot+t.rot&3,off:hn(Ze(t.off,e.rot),e.off)}),ll=(e)=>{let t=4-(e.rot&3)&3,n=Ze(e.off,t);return{rot:t,off:{x:-n.x,y:-n.y,z:-n.z}}},Cs=(e)=>e.slice(1).reduce((t,n)=>Vn(t,{off:n.pos,rot:n.rot}),{off:{x:0,y:0,z:0},rot:0}),Xn=(e)=>"#"+(e&16777215).toString(16).padStart(6,"0"),ru={n:{x:0,y:0,z:-1},e:{x:1,y:0,z:0},s:{x:0,y:0,z:1},w:{x:-1,y:0,z:0},up:{x:0,y:1,z:0},down:{x:0,y:-1,z:0}},t_={"-z":0,"+x":1,"+z":2,"-x":3};function pi(e,t="-z"){let n=e.toLowerCase(),i=Object.hasOwn(ru,n)?ru[n]:null;if(i)return Ze(i,t_[t]);let s=n[0]==="+"?1:n[0]==="-"?-1:0,r={x:{x:s,y:0,z:0},y:{x:0,y:s,z:0},z:{x:0,y:0,z:s}};return s&&Object.hasOwn(r,n.slice(1))?r[n.slice(1)]:null}var Ro=(e)=>e.x?e.x>0?"+x":"-x":e.y?e.y>0?"+y":"-y":e.z>0?"+z":"-z",mi=(e)=>e<0?-Math.round(-e):Math.round(e),cl=1,Ps=()=>`n${cl++}`,Ls=()=>cl,Co=(e)=>{cl=e};var at=(e,t,n,i,s,r,a)=>({x0:e,y0:t,z0:n,x1:i,y1:s,z1:r,c:a}),hr=(e,t,n,i)=>t>=e.x0&&t<e.x1&&n>=e.y0&&n<e.y1&&i>=e.z0&&i<e.z1,ur=(e,t,n,i)=>({x0:e.x0+t,y0:e.y0+n,z0:e.z0+i,x1:e.x1+t,y1:e.y1+n,z1:e.z1+i,c:e.c});function n_(e,t,n){let i=Math.max(e.x0,t.x0),s=Math.max(e.y0,t.y0),r=Math.max(e.z0,t.z0),a=Math.min(e.x1,t.x1),o=Math.min(e.y1,t.y1),l=Math.min(e.z1,t.z1);if(i>=a||s>=o||r>=l){n.push(e);return}let c=e.c;if(e.x0<i)n.push({...e,x1:i});if(a<e.x1)n.push({...e,x0:a});if(e.y0<s)n.push({x0:i,y0:e.y0,z0:e.z0,x1:a,y1:s,z1:e.z1,c});if(o<e.y1)n.push({x0:i,y0:o,z0:e.z0,x1:a,y1:e.y1,z1:e.z1,c});if(e.z0<r)n.push({x0:i,y0:s,z0:e.z0,x1:a,y1:o,z1:r,c});if(l<e.z1)n.push({x0:i,y0:s,z0:l,x1:a,y1:o,z1:e.z1,c})}function Vi(e,t){let n=[];for(let i of e)n_(i,t,n);return n}function i_(e,t){for(let n=0;n<e.length;){let i=e[n];if(i.c!==t.c){n++;continue}let s=i.y0===t.y0&&i.y1===t.y1,r=i.z0===t.z0&&i.z1===t.z1,a=i.x0===t.x0&&i.x1===t.x1;if(s&&r&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(a&&r&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(a&&s&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{n++;continue}e.splice(n,1),n=0}e.push(t)}function hl(e,t,n){let i=Vi(e,t);return i_(i,{...t,c:n}),i}function ou(e,t,n,i,s){let r=-1;for(let h=0;h<e.length;h++)if(hr(e[h],t,n,i)){r=h;break}if(r===-1)return null;let a=e[r].c;if(a===s)return null;let o=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,f=h.y0<u.y1&&u.y0<h.y1,y=h.z0<u.z1&&u.z0<h.z1;return f&&y&&(h.x1===u.x0||u.x1===h.x0)||d&&y&&(h.y1===u.y0||u.y1===h.y0)||d&&f&&(h.z1===u.z0||u.z1===h.z0)},l=new Set([r]),c=[r];while(c.length){let h=e[c.pop()];for(let u=0;u<e.length;u++)if(!l.has(u)&&e[u].c===a&&o(h,e[u]))l.add(u),c.push(u)}return e.map((h,u)=>l.has(u)?{...h,c:s}:h)}function dr(e,t){let n=[];for(let i of e){let s=Math.max(i.x0,t.x0),r=Math.max(i.y0,t.y0),a=Math.max(i.z0,t.z0),o=Math.min(i.x1,t.x1),l=Math.min(i.y1,t.y1),c=Math.min(i.z1,t.z1);if(s<o&&r<l&&a<c)n.push({x0:s,y0:r,z0:a,x1:o,y1:l,z1:c,c:i.c})}return n}function au(e,t){for(let n of e){let i=(n.x1-n.x0)*(n.y1-n.y0)*(n.z1-n.z0);t.set(n.c,(t.get(n.c)||0)+i)}}function It(e,t){for(let n of e){if(n.x0<t.min.x)t.min.x=n.x0;if(n.y0<t.min.y)t.min.y=n.y0;if(n.z0<t.min.z)t.min.z=n.z0;if(n.x1>t.max.x)t.max.x=n.x1;if(n.y1>t.max.y)t.max.y=n.y1;if(n.z1>t.max.z)t.max.z=n.z1}}function jt(e,t,n){let i=Ze({x:e.x0,y:e.y0,z:e.z0},t),s=Ze({x:e.x1-1,y:e.y1-1,z:e.z1-1},t);return{x0:Math.min(i.x,s.x)+n.x,y0:Math.min(i.y,s.y)+n.y,z0:Math.min(i.z,s.z)+n.z,x1:Math.max(i.x,s.x)+n.x+1,y1:Math.max(i.y,s.y)+n.y+1,z1:Math.max(i.z,s.z)+n.z+1,c:e.c}}var s_=16,Vt=(e)=>Math.floor(e/s_);function lu(e){if(!e.length)return()=>!1;let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let x of e){if(x.x0<t)t=x.x0;if(x.y0<n)n=x.y0;if(x.z0<i)i=x.z0;if(x.x1>s)s=x.x1;if(x.y1>r)r=x.y1;if(x.z1>a)a=x.z1}let o=Vt(t),l=Vt(n),c=Vt(i),h=Vt(s-1)-o+1,u=Vt(r-1)-l+1,d=Vt(a-1)-c+1,f=Array.from({length:h*u*d},()=>[]),y=(x,p,m)=>((x-o)*u+(p-l))*d+(m-c);for(let x of e)for(let p=Vt(x.x0);p<=Vt(x.x1-1);p++)for(let m=Vt(x.y0);m<=Vt(x.y1-1);m++)for(let _=Vt(x.z0);_<=Vt(x.z1-1);_++)f[y(p,m,_)].push(x);return(x,p,m)=>{let _=Vt(x),v=Vt(p),w=Vt(m);if(_<o||v<l||w<c)return!1;if(_-o>=h||v-l>=u||w-c>=d)return!1;for(let C of f[y(_,v,w)])if(hr(C,x,p,m))return!0;return!1}}var cu=(e,t,n,i)=>e.some((s)=>hr(s,t,n,i));function fr(e,t,n,i,s){if(!e.length||!t.length)return!1;let r={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};It(e,r);let a=r.min.x+n,o=r.min.y+i,l=r.min.z+s,c=r.max.x+n,h=r.max.y+i,u=r.max.z+s;for(let d of t)if(a<d.x1&&d.x0<c&&o<d.y1&&d.y0<h&&l<d.z1&&d.z0<u&&e.some((f)=>f.x0+n<d.x1&&d.x0<f.x1+n&&f.y0+i<d.y1&&d.y0<f.y1+i&&f.z0+s<d.z1&&d.z0<f.z1+s))return!0;return!1}var r_=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],du=3,pr=2,gi=du*pr,hu=0.5;class Po{a=new Float32Array(4096);n=0;push3(e,t,n){if(this.n+3>this.a.length){let i=new Float32Array(this.a.length*2);i.set(this.a),this.a=i}this.a[this.n++]=e,this.a[this.n++]=t,this.a[this.n++]=n}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}}function uu(e,t,n,i,s,r){let a=2*pr+1;for(let o=0;o<n;o++){let l=o*s,c=0;for(let h=0;h<=pr&&h<i;h++)c+=e[l+h*r];for(let h=0;h<i;h++){t[l+h*r]=c/a;let u=h+pr+1,d=h-pr;if(u<i)c+=e[l+u*r];if(d>=0)c-=e[l+d*r]}}}function Xi(e,t,n){let i=new Po,s=new Po,r=new Po,a=e.map((_)=>[_.x0,_.y0,_.z0]),o=e.map((_)=>[_.x1,_.y1,_.z1]),l=[0,1,2].map(()=>new Map),c=[0,1,2].map(()=>new Map),h=(_,v,w)=>{let C=_.get(v);if(C)C.push(w);else _.set(v,[w])};for(let _=0;_<e.length;_++)for(let v=0;v<3;v++)h(l[v],a[_][v],_),h(c[v],o[_][v],_);let u=[],d=16,f=(_)=>Math.floor(_/d),y=[],x=[0,0,0],p=[0,0,0];if(n&&e.length){let _=[1/0,1/0,1/0],v=[-1/0,-1/0,-1/0];for(let w=0;w<e.length;w++)for(let C=0;C<3;C++){if(a[w][C]<_[C])_[C]=a[w][C];if(o[w][C]>v[C])v[C]=o[w][C]}p=_.map(f),x=v.map((w,C)=>f(w-1)-p[C]+1),y=Array.from({length:x[0]*x[1]*x[2]},()=>[]);for(let w=0;w<e.length;w++)for(let C=f(a[w][0]);C<=f(o[w][0]-1);C++)for(let T=f(a[w][1]);T<=f(o[w][1]-1);T++)for(let I=f(a[w][2]);I<=f(o[w][2]-1);I++)y[((C-p[0])*x[1]+(T-p[1]))*x[2]+(I-p[2])].push(w)}for(let _=0;_<e.length;_++){let v=t(e[_].c),{r:w,g:C,b:T}=v,I=a[_],F=o[_];for(let M of r_){let{a:A,u:U,v:Y}=M,J=M.hi?F[A]:I[A],R=M.hi?J:J-1,B=[];for(let re of(M.hi?l:c)[A].get(J)??u){let ce=Math.max(a[re][U],I[U]),le=Math.min(o[re][U],F[U]),ue=Math.max(a[re][Y],I[Y]),we=Math.min(o[re][Y],F[Y]);if(ce<le&&ue<we)B.push([ce,ue,le,we])}let O=[[I[U],I[Y],F[U],F[Y]]];for(let re of B){let ce=[];for(let le of O){let ue=Math.max(le[0],re[0]),we=Math.max(le[1],re[1]),L=Math.min(le[2],re[2]),Qe=Math.min(le[3],re[3]);if(ue>=L||we>=Qe){ce.push(le);continue}if(le[0]<ue)ce.push([le[0],le[1],ue,le[3]]);if(L<le[2])ce.push([L,le[1],le[2],le[3]]);if(le[1]<we)ce.push([ue,le[1],L,we]);if(Qe<le[3])ce.push([ue,Qe,L,le[3]])}if(O=ce,!O.length)break}let X=[0,0,0];X[A]=J;let G=null,V=0,Z=0,K=0,D=()=>{V=I[U]-gi,Z=I[Y]-gi;let re=F[U]-I[U]+2*gi+1;K=F[Y]-I[Y]+2*gi+1;let ce=new Float32Array(re*K),le=f(R)-p[A],ue=!1;if(le>=0&&le<x[A]){let L=[0,0,0];L[A]=le;let Qe=Math.min(f(V+re-1)-p[U],x[U]-1),Le=Math.min(f(Z+K-1)-p[Y],x[Y]-1);for(let xe=Math.max(f(V)-p[U],0);xe<=Qe;xe++){L[U]=xe;for(let me=Math.max(f(Z)-p[Y],0);me<=Le;me++){L[Y]=me;for(let de of y[(L[0]*x[1]+L[1])*x[2]+L[2]]){if(a[de][A]>R||o[de][A]<=R)continue;let Fe=Math.max(a[de][U],V),De=Math.min(o[de][U],V+re),E=Math.max(a[de][Y],Z),b=Math.min(o[de][Y],Z+K);for(let k=Fe;k<De;k++)ce.fill(1,(k-V)*K+(E-Z),(k-V)*K+(b-Z));ue=ue||Fe<De&&E<b}}}}if(!ue)return G=ce;let we=new Float32Array(re*K);for(let L=0;L<du;L++)uu(ce,we,re,K,K,1),uu(we,ce,K,re,1,K);return G=ce},j=(re,ce)=>{if(!n)return 1;let ue=(G??D())[(re-V)*K+(ce-Z)];return hu+(1-hu)*(1-ue)},ie=(re,ce,le)=>{X[U]=re,X[Y]=ce,i.push3(X[0],X[1],X[2]),s.push3(M.n[0],M.n[1],M.n[2]),r.push3(w*le,C*le,T*le)},se=(re,ce,le,ue)=>{let we=j(re,ce),L=j(le,ce),Qe=j(le,ue),Le=j(re,ue);ie(re,ce,we),ie(le,ce,L),ie(le,ue,Qe),ie(re,ce,we),ie(le,ue,Qe),ie(re,ue,Le)};for(let re of O){let[ce,le,ue,we]=re;if(!n){se(ce,le,ue,we);continue}let L=ce+gi,Qe=ue-gi,Le=le+gi,xe=we-gi;if(L>=Qe||Le>=xe){for(let me=ce;me<ue;me++)for(let de=le;de<we;de++)se(me,de,me+1,de+1);continue}for(let me=ce;me<ue;me++){for(let de=le;de<Le;de++)se(me,de,me+1,de+1);for(let de=xe;de<we;de++)se(me,de,me+1,de+1)}for(let me=Le;me<xe;me++){for(let de=ce;de<L;de++)se(de,me,de+1,me+1);for(let de=Qe;de<ue;de++)se(de,me,de+1,me+1)}se(L,Le,Qe,xe)}}}if(!i.length)return null;let m=new Wt;return m.setAttribute("position",new Gt(i.trimmed(),3)),m.setAttribute("normal",new Gt(s.trimmed(),3)),m.setAttribute("color",new Gt(r.trimmed(),3)),m}var Lo=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],fu={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},qi=()=>({type:"object",id:Ps(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),qn=(e="")=>({type:"scene",id:Ps(),name:e,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function Cn(e){let t={id:Ps(),name:e.name,pos:{...e.pos},rot:e.rot,vis:e.vis};return e.type==="object"?{type:"object",...t,boxes:e.boxes.map((n)=>({...n}))}:{type:"scene",...t,children:e.children.map(Cn)}}var Io=(e=g.root)=>e.north??"-z",Yn=(e)=>g.context.children.find((t)=>t.id===e);function Xt(e,t=g.root,n=[]){if(n.push(t),t===e)return n.slice();if(t.type==="scene")for(let i of t.children){let s=Xt(e,i,n);if(s)return s}return n.pop(),null}function xt(e,t=g.root){if(t.id===e)return t;if(t.type==="scene")for(let n of t.children){let i=xt(e,n);if(i)return i}return null}function qt(e){let t=Xt(e);return t&&t.length>1?t[t.length-2]:null}function un(e,t){if(e===t)return!0;if(e.type!=="scene")return!1;return e.children.some((n)=>un(n,t))}var Is=()=>Cs(g.path),Ns=(e)=>Cs(Xt(e)||[g.root]),ft=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),Jt=(e)=>e.max.x<e.min.x;function mr(e,t,n,i){if(e.type==="object")for(let s of e.boxes)i.push(jt(s,n,t));else for(let s of e.children)mr(s,hn(t,Ze(s.pos,n)),n+s.rot&3,i);return i}function rn(e,t,n,i){if(e.type==="object")It(e.boxes.map((s)=>jt(s,n,t)),i);else for(let s of e.children)rn(s,hn(t,Ze(s.pos,n)),n+s.rot&3,i);return i}function ul(e,t,n){n.length=0;let i=Math.max(1,Math.ceil((t-e)/6));for(let s=0;s<=i;s++)n.push(e+(t-e)*s/i)}var dl=(e,t)=>Math.max(1,Math.ceil((t-e)/6))+1,mu=(e)=>dl(e.x0,e.x1)*dl(e.y0,e.y1)*dl(e.z0,e.z1);function Yi(e,t,n,i){if(mu(e)<=1536){n.push(e),i.push(t);return}let s=e.x1-e.x0,r=e.y1-e.y0,a=e.z1-e.z0;if(s>=r&&s>=a){let o=e.x0+(s>>1);Yi({...e,x1:o},t,n,i),Yi({...e,x0:o},t,n,i)}else if(r>=a){let o=e.y0+(r>>1);Yi({...e,y1:o},t,n,i),Yi({...e,y0:o},t,n,i)}else{let o=e.z0+(a>>1);Yi({...e,z1:o},t,n,i),Yi({...e,z0:o},t,n,i)}}function a_(e,t,n,i){for(let s=0;s<e.length;s++){let r=e[s];if(r[0]<=t&&r[1]<=n&&r[2]<=i)return}for(let s=e.length-1;s>=0;s--){let r=e[s];if(t<=r[0]&&n<=r[1]&&i<=r[2])e.splice(s,1)}e.push([t,n,i])}function l_(e,t,n,i,s,r,a,o,l,c){let h=e.length,u=new Float64Array(h),d=new Float64Array(h),f=new Float64Array(h),y=new Float64Array(h),x=new Float64Array(h),p=new Float64Array(h),m=1/0,_=-1/0,v=1/0,w=-1/0,C=1/0,T=-1/0;for(let J=0;J<h;J++){let R=e[J];if(r.x>=0)u[J]=R.x0,d[J]=R.x1;else u[J]=R.x1,d[J]=R.x0;if(r.y>=0)f[J]=R.y0,y[J]=R.y1;else f[J]=R.y1,y[J]=R.y0;if(r.z>=0)x[J]=R.z0,p[J]=R.z1;else x[J]=R.z1,p[J]=R.z0;if(R.x0<m)m=R.x0;if(R.x1>_)_=R.x1;if(R.y0<v)v=R.y0;if(R.y1>w)w=R.y1;if(R.z0<C)C=R.z0;if(R.z1>T)T=R.z1}let I=r.x!==0?1/r.x:0,F=r.y!==0?1/r.y:0,M=r.z!==0?1/r.z:0,A=[],U=[],Y=[];for(let J=i;J<s;J++){let R=t[J];if((r.x>0?_<=R.x0:r.x<0?m>=R.x1:_<=R.x0||m>=R.x1)||(r.y>0?w<=R.y0:r.y<0?v>=R.y1:w<=R.y0||v>=R.y1)||(r.z>0?T<=R.z0:r.z<0?C>=R.z1:T<=R.z0||C>=R.z1))continue;let B=n[J];ul(R.x0,R.x1,A),ul(R.y0,R.y1,U),ul(R.z0,R.z1,Y);for(let O of A)for(let X of U)for(let G of Y){let V=1/0;if(I!==0)V=((r.x>0?B.x1:B.x0)-O)*I;if(F!==0){let D=((r.y>0?B.y1:B.y0)-X)*F;if(D<V)V=D}if(M!==0){let D=((r.z>0?B.z1:B.z0)-G)*M;if(D<V)V=D}let Z=1/0,K=!1;for(let D=0;D<h;D++){let j=-1/0,ie=1/0;if(I===0){if(O<=u[D]||O>=d[D])continue}else{let se=(u[D]-O)*I,re=(d[D]-O)*I;if(se>j)j=se;if(re<ie)ie=re}if(F===0){if(X<=f[D]||X>=y[D])continue}else{let se=(f[D]-X)*F,re=(y[D]-X)*F;if(se>j)j=se;if(re<ie)ie=re}if(M===0){if(G<=x[D]||G>=p[D])continue}else{let se=(x[D]-G)*M,re=(p[D]-G)*M;if(se>j)j=se;if(re<ie)ie=re}if(j>=ie)continue;if(j>V+0.001){if(j<Z)Z=j}else if(ie>V+0.001){K=!0;break}}if(K||Z===1/0)continue;a_(c,Math.floor((O+Z*r.x)*a),Math.floor((X+Z*r.y)*o),Math.floor((G+Z*r.z)*l))}}}function pu(e,t){let n=[0],i=0;while(i<e.length){let r=e[i][t];do i++;while(i<e.length&&e[i][t]===r);n.push(i)}if(n.length<=48)return n;let s=new Set;for(let r=0;r<48;r++)s.add(n[Math.floor(r*(n.length-1)/47)]);return[...s]}function c_(e,t,n,i,s){let r={x:1/0,y:1/0,z:1/0};if(!e.length||!t.length)return r;t.sort((d,f)=>d[0]-f[0]||d[1]-f[1]||d[2]-f[2]);let a=[];e:for(let d of t){for(let f of a)if(f[1]<=d[1]&&f[2]<=d[2])continue e;a.push(d)}let o=e.map((d)=>[Math.min(d.x0*n,d.x1*n),Math.max(d.x0*n,d.x1*n),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*s,d.z1*s),Math.max(d.z0*s,d.z1*s)]),l=(d,f,y)=>{let x=0;for(let p of o){let m=Math.min(p[1],d)-p[0];if(m<=0)continue;let _=Math.min(p[3],f)-p[2];if(_<=0)continue;let v=Math.min(p[5],y)-p[4];if(v>0)x+=m*_*v}return x},c=a.slice().sort((d,f)=>f[0]-d[0]),h=-1,u={...r};for(let d of pu(c,0)){let f=d===0?1/0:c[d-1][0]-0.01,y=c.slice(d).sort((p,m)=>m[2]-p[2]),x=Array(y.length+1).fill(1/0);for(let p=y.length-1;p>=0;p--)x[p]=Math.min(x[p+1],y[p][1]);for(let p of pu(y,2)){let m=p===0?1/0:y[p-1][2]-0.01,_=x[p]===1/0?1/0:x[p]-0.01,v=l(f,_,m);if(v>h)h=v,u.x=f,u.y=_,u.z=m}}return u}function gu(e,t,n,i,s,r){let a=[],o=[];for(let x of t)Yi(x,x,a,o);let l=[],c=0,h=0;for(let x=0;x<a.length;x++)if(h+=mu(a[x]),h>=1536||x===a.length-1)l.push([c,x+1]),c=x+1,h=0;let u=[];for(let x=0;x<e.length;x++)for(let p=0;p<n.length;p++)for(let m=0;m<l.length;m++)u.push([x,p,m]);let d=e.map(()=>[]),f=0,y=null;return{step(x){while(f<u.length){let[p,m,_]=u[f++],[v,w]=l[_];if(l_(e[p],a,o,v,w,n[m],i,s,r,d[p]),f<u.length&&x())return!1}return!0},cuts(){return y??=e.map((x,p)=>c_(x,d[p],i,s,r)),y}}}function No(e,t){Rn.x=(e-dt.x)/dt.w*2-1,Rn.y=-((t-dt.y)/dt.h)*2+1}var fl=()=>{if(!g.pickMeshes.length)return null;return $t.setFromCamera(Rn,$e),$t.intersectObjects(g.pickMeshes,!1)[0]??null};function pl(){let e=fl();return e?e.object.userData.childId??null:null}var xu=new Rt(new N(0,1,0),0);function gr(e){if($t.setFromCamera(Rn,$e),xu.constant=-e,$t.ray.intersectPlane(xu,fi))return{x:Math.floor(fi.x),y:e,z:Math.floor(fi.z)};return null}var vu=(e,t)=>({x:Math.floor(e.x-t.x*0.5),y:Math.floor(e.y-t.y*0.5),z:Math.floor(e.z-t.z*0.5)}),h_=new N;function $i(){let e=fl();if(!e)return null;let t=g.editXform.off,n=Ze({x:e.point.x-t.x,y:e.point.y-t.y,z:e.point.z-t.z},-g.editXform.rot),i={x:0,y:1,z:0};if(e.face){let r=h_.copy(e.face.normal).transformDirection(e.object.matrixWorld);i=Ze({x:r.x,y:r.y,z:r.z},-g.editXform.rot)}let s=vu(n,i);return{cell:s,addCell:{x:s.x+Math.round(i.x),y:s.y+Math.round(i.y),z:s.z+Math.round(i.z)}}}function bu(){let e=fl();if(!e)return gr(0);return vu(e.point,e.face?e.face.normal:{x:0,y:1,z:0})}function ji(e){let t=gr(e+g.editXform.off.y);if(!t)return null;let n=Ze({x:t.x-g.editXform.off.x,y:0,z:t.z-g.editXform.off.z},-g.editXform.rot);return{x:Math.round(n.x),y:e,z:Math.round(n.z)}}var _u=(e,t)=>({x:e===0?t:0,y:e===1?t:0,z:e===2?t:0}),yu=new Rt;function Mu(e,t){let n=g.editXform.off,i=g.editXform.rot,s=Ze(_u(e,1),i),r=hn(Ze(_u(e,t),i),n);if($t.setFromCamera(Rn,$e),yu.setComponents(s.x,s.y,s.z,-(s.x*r.x+s.y*r.y+s.z*r.z)),!$t.ray.intersectPlane(yu,fi))return null;let a=Ze({x:fi.x-n.x,y:fi.y-n.y,z:fi.z-n.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};if(e===0)o.x=t;else if(e===1)o.y=t;else o.z=t;return o}var Pn=(e,t,n)=>{let i=Ze({x:e,y:t,z:n},g.editXform.rot);return new N(i.x+g.editXform.off.x,i.y+g.editXform.off.y,i.z+g.editXform.off.z)};function ml(e=$i()){if(g.tool==="add")return e?e.addCell:ji(0);return e?e.cell:null}var u_=new Re(10994876),d_=new Re(6055805),f_=new Re(13619151),xr=null,Do=[],gl=()=>{xr=null};function $n(){Ln=null,g.liveMeas=null,xi()}function xl(){if(xr)return xr;let e=[],t;if(g.editObject)e.push(...g.editObject.boxes),t=Pn;else In(g.root,{x:0,y:0,z:0},0,null,null,(o,l,c,h)=>{if(h)for(let u of o.boxes)e.push(jt(u,c,l))}),t=(o,l,c)=>new N(o,l,c);let n=ft();It(e,n);let i=e.length===0,s={x:n.min.x,y:n.min.y,z:n.min.z},r={x:n.max.x-1,y:n.max.y-1,z:n.max.z-1};return xr={has:e.length>64?lu(e):(o,l,c)=>cu(e,o,l,c),mn:s,mx:r,toW:t,empty:i},xr}function Su(){let e=xl();if(e.empty)return null;let t=null;if(g.editObject){let n=$i();t=n?{...n.cell}:ji(0)}else t=bu();if(!t)return null;return{x:Math.max(e.mn.x,Math.min(e.mx.x,t.x)),y:Math.max(e.mn.y,Math.min(e.mx.y,t.y)),z:Math.max(e.mn.z,Math.min(e.mx.z,t.z))}}function p_(e){let t=xl(),n=["x","y","z"],i=[];for(let s=0;s<3;s++){let r=n[s],a=n[(s+1)%3],o=n[(s+2)%3],l=t.mn[r],c=t.mx[r],h=[e.x,e.y,e.z],u=(f)=>(h[s]=f,t.has(h[0],h[1],h[2])),d=l;while(d<=c){let f=u(d),y=d;while(y+1<=c&&u(y+1)===f)y++;let x=(p)=>{let m={};return m[r]=p,m[a]=e[a]+0.5,m[o]=e[o]+0.5,t.toW(m.x,m.y,m.z)};i.push({a:x(d),b:x(y+1),mid:x((d+y+1)/2),len:y-d+1,filled:f}),d=y+1}}return i}function _l(e,t,n,i,s,r,a,o,l=!1){let c=i-e,h=s-t,u=r-n,d=(f,y,x,p,m,_,v,w)=>({a:a(f,y,x),b:a(p,m,_),mid:a((f+p)/2,(y+m)/2,(x+_)/2),len:v,filled:!0,nolabel:!w,gray:l});return[d(e,t,n,i,t,n,c,c>=o),d(e,t,n,e,t,r,u,u>=o),d(e,t,n,e,s,n,h,h>=o),d(i,t,n,i,t,r,0,!1),d(e,t,r,i,t,r,0,!1),d(e,s,n,i,s,n,0,!1),d(e,s,n,e,s,r,0,!1),d(i,s,n,i,s,r,0,!1),d(e,s,r,i,s,r,0,!1),d(i,t,n,i,s,n,0,!1),d(e,t,r,e,s,r,0,!1),d(i,t,r,i,s,r,0,!1)]}var Ln=null;function Eu(){let e=Su();if(!e)return;Ln=Ln&&Ln.x===e.x&&Ln.y===e.y&&Ln.z===e.z?null:e,Uo()}function wu(){if(!Ln)return;Ln=null,Uo()}function m_(e,t){let n=xl();return _l(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z),Math.max(e.x,t.x)+1,Math.max(e.y,t.y)+1,Math.max(e.z,t.z)+1,n.toW,1,!0)}function Uo(){let e=Su();g.liveMeas=e?Ln?m_(Ln,e):p_(e):null,xi()}function xi(){let e=document.getElementById("measure");e.innerHTML="",Do=[];let t=[],n=[];if(g.liveMeas)for(let s of g.liveMeas){let r=s.gray?f_:s.filled?u_:d_;if(t.push(s.a.x,s.a.y,s.a.z,s.b.x,s.b.y,s.b.z),n.push(r.r,r.g,r.b,r.r,r.g,r.b),s.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(s.filled?"":" empty"),a.textContent=String(s.len),e.appendChild(a),Do.push({el:a,w:s.mid})}Gi.geometry.dispose();let i=new Wt;i.setAttribute("position",new Yt(t,3)),i.setAttribute("color",new Yt(n,3)),Gi.geometry=i,Gi.visible=t.length>0}function Tu(){if(!Do.length)return;for(let e of Do){if(cr.copy(e.w).project($e),Math.abs(cr.z)>1){e.el.style.display="none";continue}e.el.style.display="",e.el.style.left=(cr.x*0.5+0.5)*dt.w+"px",e.el.style.top=(-cr.y*0.5+0.5)*dt.h+"px"}}var yl=new N(40,150,30).normalize();function g_(e){if(Jt(e))return;let t=(e.min.x+e.max.x)/2,n=(e.min.y+e.max.y)/2,i=(e.min.z+e.max.z)/2,s=0.5*Math.hypot(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z)+8,r=s+130;tn.position.set(t+yl.x*r,n+yl.y*r,i+yl.z*r),tn.target.position.set(t,n,i),tn.target.updateMatrixWorld();let a=tn.shadow.camera;a.left=-s,a.right=s,a.top=s,a.bottom=-s,a.near=Math.max(1,r-s-20),a.far=r+s+20,a.updateProjectionMatrix(),tn.shadow.normalBias=4*s/tn.shadow.mapSize.x}var xn=[];function x_(){let e=new Set;for(let t of xn){gt.remove(t);let n=t.geometry;if(n&&!e.has(n))n.dispose(),e.add(n)}xn=[];for(let t of Ml)t.dispose();if(Ml=[],Os=[],vi=null,_i.vox=-1,zo=[],wl(),An.clear(),zs)cancelAnimationFrame(zs),zs=0;on=null}var zo=[],on=null,zs=0,Ds=null;function wl(){if(!Ds)return;An.remove(Ds),Ds.geometry.dispose(),Ds.material.dispose(),Ds=null}function vl(e,t,{tier:n="opaque",childId:i}={}){if(!e.length)return null;let s=n!=="opaque",r=Xi(e,t,!s);if(!r)return null;let a=new mt(r,n==="temp"?al:lr);if(a.castShadow=!0,a.receiveShadow=!0,gt.add(a),xn.push(a),s){a.renderOrder=2;let o=new mt(r,su);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,gt.add(o),xn.push(o)}if(i!=null)a.userData.childId=i,g.pickMeshes.push(a),(g.childMeshes[i]||(g.childMeshes[i]=[])).push(a);return a}var Os=[],Ml=[],Sl=[],_i={q:-1,b:-1,vox:-1},__=6707534;function Au(e){let t=Xi(e,di,!0);if(!t)return;let n=[new Rt(new N(-1,0,0),1e9),new Rt(new N(0,-1,0),1e9),new Rt(new N(0,0,-1),1e9)],i=new Fi({vertexColors:!0,side:bs,clippingPlanes:n,clipShadows:!0}),s=new mt(t,i);s.castShadow=s.receiveShadow=!0,gt.add(s),xn.push(s);let r=new Fi({color:__,side:mh,clippingPlanes:n}),a=new mt(t,r);gt.add(a),xn.push(a),Ml.push(i,r);let o=ft();It(e,o),Os.push({boxes:e,aabb:o,planes:n})}var y_=8,Ru=6,yi=[-90,-60,-30,0,30,60,90],Us=Math.PI/180,v_=5,vi=null;function b_(e,t){let n=e<=1?1:-1,i=e===0||e===3?1:-1,s=t>=3?1:-1,r=(l,c)=>{let h=Math.cos(c*Us);return{x:h*Math.sin(l*Us),y:Math.sin(c*Us),z:h*Math.cos(l*Us)}},a=[r(e*90,yi[t]),r(e*90,yi[t+1]),r(e*90+90,yi[t]),r(e*90+90,yi[t+1]),r(e*90+45,(yi[t]+yi[t+1])/2)],o=Sl;if(g.editObject)o=o.concat(g.editObject.boxes.map((l)=>jt(l,g.editXform.rot,g.editXform.off)));vi={job:gu(Os.map((l)=>l.boxes),o,a,n,s,i),sgx:n,sgy:s,sgz:i}}function Pu(){if(!Os.length){vi=null;return}let e=(Ne.azim/Us%360+360)%360,t=Ne.elev/Us,{q:n,b:i}=_i,s=n*90+45;if(n<0||Math.abs(((e-s)%360+540)%360-180)>45+y_)n=Math.min(3,Math.floor(e/90));if(i<0||t<yi[i]-Ru||t>yi[i+1]+Ru)i=Math.max(0,Math.min(5,Math.floor((t+90)/30)));if(n!==_i.q||i!==_i.b||g.voxVer!==_i.vox)_i.q=n,_i.b=i,_i.vox=g.voxVer,b_(n,i);if(!vi)return;let r=performance.now();if(!vi.job.step(()=>performance.now()-r>v_)){nn();return}let{sgx:a,sgy:o,sgz:l}=vi,c=vi.job.cuts();vi=null;for(let h=0;h<Os.length;h++){let u=Os[h],d=c[h],f=(y,x,p,m)=>Math.min(m,(y>0?p:-x)+4);u.planes[0].normal.set(-a,0,0),u.planes[0].constant=f(a,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-o,0),u.planes[1].constant=f(o,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-l),u.planes[2].constant=f(l,u.aabb.min.z,u.aabb.max.z,d.z)}nn()}function In(e,t,n,i,s,r){if(e===g.editObject||e.vis==="hidden")return;let a=s??(e.vis==="deemphasized"?e.id:null);if(e.type==="object")r(e,t,n,i,a);else for(let o of e.children)In(o,hn(t,Ze(o.pos,n)),n+o.rot&3,e===g.context?o.id:i,a,r)}var bl=(e,t)=>{let n=e.get(t);if(!n)e.set(t,n=[]);return n},Cu=(e,t,n,i)=>{for(let s of e.boxes)i.push(jt(s,n,t));return i};function Lu(){let{off:e,rot:t}=g.editXform;if(An.position.set(e.x,e.y,e.z),An.rotation.set(0,-t*Math.PI/2,0),An.updateMatrixWorld(!0),on){An.remove(on),on.geometry.dispose();let r=xn.indexOf(on);if(r>=0)xn.splice(r,1)}let n=g.sel3d,i=n&&n.lifted?g.editObject.boxes.concat(n.boxes):g.editObject.boxes,s=Xi(i,di,!0);if(on=s?new mt(s,lr):null,on)on.castShadow=on.receiveShadow=!0,An.add(on),xn.push(on);if(g.pickMeshes=on?[on,...zo]:[...zo],n)M_(n.region);else wl()}function M_(e){wl();let t=new wn(e.x1-e.x0,e.y1-e.y0,e.z1-e.z0),n=new Oi(new Ts(t),new hi({color:16766073,depthTest:!1}));t.dispose(),n.position.set((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2),n.renderOrder=1000,An.add(n),Ds=n}function bi(){if(zs)return;zs=requestAnimationFrame(()=>{zs=0,Lu(),nn()})}function Oo(){g.voxVer++,gl(),bi()}function Tl(e,t){g.editObject.boxes=hl(g.editObject.boxes,e,t),Oo()}function _r(e){g.editObject.boxes=Vi(g.editObject.boxes,e),Oo()}function Fo(e){let t=g.editObject.boxes;for(let n of e)t=hl(t,n,n.c);g.editObject.boxes=t,Oo()}function Iu(e,t){let n=ou(g.editObject.boxes,e.x,e.y,e.z,t);if(!n)return!1;return g.editObject.boxes=n,Oo(),!0}function Nu(){if(!xn.length)return null;$t.setFromCamera(Rn,$e);let e=$t.intersectObjects(xn,!1)[0];if(!e)return null;let t=$t.ray.direction,n=Math.floor(e.point.x+t.x*0.5),i=Math.floor(e.point.y+t.y*0.5),s=Math.floor(e.point.z+t.z*0.5),r=(o,l,c)=>{let h=Ze({x:n-l.x,y:i-l.y,z:s-l.z},-c);for(let u of o)if(hr(u,h.x,h.y,h.z))return u.c;return null};if(g.editObject){let o=r(g.editObject.boxes,g.editXform.off,g.editXform.rot);if(o!=null)return o}let a=null;return In(g.root,{x:0,y:0,z:0},0,null,null,(o,l,c)=>{if(a==null)a=r(o.boxes,l,c)}),a}var El=new Set;function Mi(e){for(let t of El)if(e.has(t)!==g.selection.has(t)){Et();return}Du()}function Et(){x_(),g.pickMeshes=[],g.childMeshes={},g.childBox={},El.clear(),g.voxVer++,gl();let e={x:0,y:0,z:0},t=ft();if(g.editObject){g.editXform=Vn(Is(),{off:g.editObject.pos,rot:g.editObject.rot});let n=[],i=new Map;In(g.root,e,0,null,null,(r,a,o,l,c)=>Cu(r,a,o,c?bl(i,c):n)),It(n,t);let s=vl(n,di,{tier:"temp"});zo=s?[s]:[];for(let r of i.values())It(r,t),Au(r);Sl=n,Lu(),rn(g.editObject,g.editXform.off,g.editXform.rot,t)}else{let n=new Map,i=new Map,s=[],r=[];In(g.root,e,0,null,null,(a,o,l,c,h)=>{let u=Cu(a,o,l,[]);It(u,t);let d=h;if(c){if(d){if(El.add(c),g.selection.has(c))d=null}It(u,g.childBox[c]||(g.childBox[c]=ft()))}if(d)bl(i,d).push(...u);else if(r.push(...u),c)bl(n,c).push(...u);else s.push(...u)}),vl(s,di,{tier:"temp"});for(let[a,o]of n)vl(o,di,{childId:a});for(let a of i.values())Au(a);Sl=r}g.sceneBox=t,g_(t),Du(),nn()}function S_(e,t,n){let i=new wn(t.x-e.x,t.y-e.y,t.z-e.z),s=new Oi(new Ts(i),new hi({color:n,depthTest:!1}));return s.position.set((e.x+t.x)/2,(e.y+t.y)/2,(e.z+t.z)/2),s.renderOrder=999,i.dispose(),s}function Du(){for(let e of Wn.children)e.geometry?.dispose?.();if(Wn.clear(),Wn.position.set(0,0,0),g.editObject)return;for(let e of g.selection){let t=g.childBox[e];if(t&&!Jt(t))Wn.add(S_(t.min,t.max,15787730))}}function rt(e,t={},...n){let i=document.createElement(e);if(Object.assign(i,t),n.length)i.append(...n);return i}var yr=new N,Uu=new N,zu=new N,Ou=new N;function Al(e){return Ou.set(e.x,e.y,e.z).applyMatrix4($e.matrixWorldInverse),2*Math.max(0.001,-Ou.z)*ki/dt.h}function Fu(e,t){let n=Ne.zoom/dt.h;Uu.setFromMatrixColumn($e.matrixWorld,0),zu.setFromMatrixColumn($e.matrixWorld,1),Xe.target.addScaledVector(Uu,-e*n),Xe.target.addScaledVector(zu,t*n)}function Bu(e,t){Xe.azim-=e*0.012,Xe.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,Xe.elev+t*0.012))}function Bo(e){if(Jt(e))return;Xe.target.set((e.min.x+e.max.x)/2,(e.min.y+e.max.y)/2,(e.min.z+e.max.z)/2);let t=0.5*Math.hypot(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z),n=(i)=>2.3*t*ki*Math.sqrt(1+i*i)/i;Xe.zoom=Math.max(8,Math.min(To,Math.max(n(ki),n(ki*(dt.w/dt.h)))))}function jn(){let e=ft();if(g.editObject){if(rn(g.editObject,g.editXform.off,g.editXform.rot,e),Jt(e)){let t=g.editXform.off;Xe.target.set(t.x,t.y+6,t.z),Xe.zoom=41;return}}else for(let t in g.childBox){let n=g.childBox[t];e.min.x=Math.min(e.min.x,n.min.x),e.min.y=Math.min(e.min.y,n.min.y),e.min.z=Math.min(e.min.z,n.min.z),e.max.x=Math.max(e.max.x,n.max.x),e.max.y=Math.max(e.max.y,n.max.y),e.max.z=Math.max(e.max.z,n.max.z)}if(Jt(e)){Xe.target.set(0,1,0),Xe.zoom=23;return}Bo(e)}function ko(e){if(e===g.root){jn();return}let t=Ns(e);Bo(rn(e,t.off,t.rot,ft()))}function ku(){Ne.azim+=(Xe.azim-Ne.azim)*0.22,Ne.elev+=(Xe.elev-Ne.elev)*0.22,Ne.zoom+=(Xe.zoom-Ne.zoom)*0.25,Ne.target.lerp(Xe.target,0.25);let e=Math.cos(Ne.elev),t=Math.sin(Ne.elev);yr.set(e*Math.sin(Ne.azim),t,e*Math.cos(Ne.azim));let n=Ne.zoom/(2*ki);$e.position.copy(Ne.target).addScaledVector(yr,n);let i=_o.clamp((Math.abs(Ne.elev)-1.45)/(Math.PI/2-1.45),0,1);if(Ao.set(-Math.sin(Ne.azim),0,-Math.cos(Ne.azim)),Ne.elev<0)Ao.negate();ol.set(0,1,0).lerp(Ao,i),$e.up.copy(ol.normalize()),$e.lookAt(Ne.target),$e.aspect=dt.w/dt.h;let s=$e.position,r=1/0,a=-1/0,o=(h,u,d)=>{let f=(s.x-h)*yr.x+(s.y-u)*yr.y+(s.z-d)*yr.z;if(f<r)r=f;if(f>a)a=f},l=(h,u=0,d=0,f=0)=>{for(let y of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let p of[h.min.z,h.max.z])o(y+u,x+d,p+f)},c=g.sceneBox;if(c&&!Jt(c)){if(l(c),g.editObject){let d=rn(g.editObject,g.editXform.off,g.editXform.rot,ft());if(g.sel3d){let f=g.sel3d.region,y=jt({...f,c:0},g.editXform.rot,g.editXform.off);It([y],d)}l(d)}let h=g.drag;if(h&&h.dx!=null)l(c,h.dx,h.dy??0,h.dz??0);let u=Math.max(10,0.5*Math.hypot(c.max.x-c.min.x,c.max.y-c.min.y,c.max.z-c.min.z));for(let d of[c.min.x-u,c.max.x+u])for(let f of[c.min.z-u,c.max.z+u])o(d,0,f)}if(r>a)r=0.1,a=4000;$e.near=Math.max(Ne.zoom*0.02,r-5),$e.far=Math.max($e.near+1,a+5),$e.updateProjectionMatrix(),Hi.position.set(Ne.target.x,-0.1,Ne.target.z),nu()}var E_={0:["y","z"],1:["x","z"],2:["x","y"]};function w_(e){let t=[];for(let n of e)for(let i=n.x0;i<n.x1;i++)for(let s=n.y0;s<n.y1;s++)for(let r=n.z0;r<n.z1;r++)t.push({x:i,y:s,z:r,c:n.c});return t}function T_(e,t,n,i,s){let r=(n%360+360)%360;if(r>180)r-=360;if(r===0)return;let a=Math.round(r/90),o=(r-a*90)*Math.PI/180,l=(a%4+4)%4,c=Math.tan(o/2),h=Math.sin(o),[u,d]=E_[t];for(let f of e){let y=f[u]-i,x=f[d]-s;for(let p=0;p<l;p++){let m=-x,_=y;y=m,x=_}if(o)y-=Math.round(x*c),x+=Math.round(y*h),y-=Math.round(x*c);f[u]=i+y,f[d]=s+x}}function A_(e){let t=new Map;for(let o of e)t.set(Wi(o.x,o.y,o.z),o.c);let n=(o,l,c,h)=>t.get(Wi(o,l,c))===h,i=(o,l,c,h,u)=>{for(let d=o;d<l;d++)if(!n(d,c,h,u))return!1;return!0},s=(o,l,c,h,u,d)=>{for(let f=c;f<h;f++)if(!i(o,l,u,f,d))return!1;return!0},r=e.slice().sort((o,l)=>o.y-l.y||o.z-l.z||o.x-l.x),a=[];for(let o of r){let{x:l,y:c,z:h,c:u}=o;if(!t.has(Wi(l,c,h)))continue;let d=l+1;while(n(d,c,h,u))d++;let f=h+1;while(i(l,d,c,f,u))f++;let y=c+1;while(s(l,d,h,f,y,u))y++;for(let x=c;x<y;x++)for(let p=h;p<f;p++)for(let m=l;m<d;m++)t.delete(Wi(m,x,p));a.push({x0:l,y0:c,z0:h,x1:d,y1:y,z1:f,c:u})}return a}function Hu(e,t,n,i,s,r){let a=w_(e);T_(a,n,t,Math.round(i),Math.round(s));for(let o of a){let l=r(o.x,o.y,o.z);o.x=l.x,o.y=l.y,o.z=l.z}return A_(a)}var Rl=null,Gu=[],Wu=[],Fs=()=>Rl;function Vu(e){if(Gu=e,e.length)Rl="node"}var Ho=()=>Gu;function Xu(e){if(Wu=e,e.length)Rl="vox"}var Go=()=>Wu;var R_=200,_n=[],Nn=-1,Wo=!1;function qu(){_n.length=0,Nn=-1}var Yu=(e)=>({rootJSON:e,uid:Ls(),pathIds:g.path.map((t)=>t.id),selection:[...g.selection],editId:g.editObject?g.editObject.id:null,collapsed:[...g.collapsed]});function $u(e){if(Wo)return;let t=Yu(e),n=_n[Nn];if(n&&n.rootJSON===t.rootJSON)return;if(_n.length=Nn+1,_n.push(t),_n.length>R_)_n.shift();Nn=_n.length-1}function ju(e){if(Wo||Nn<0)return;_n[Nn]=Yu(e)}function Ju(e){Wo=!0,Co(e.uid),g.root=Jn(JSON.parse(e.rootJSON)),g.path=[];let t=g.root;for(let n of e.pathIds){let i=t.id===n?t:t.type==="scene"?t.children.find((s)=>s.id===n):null;if(!i)break;t=i,g.path.push(t)}if(!g.path.length)g.path=[g.root];g.editObject=e.editId?xt(e.editId):null,g.selection=new Set(e.selection.filter((n)=>g.context.children.some((i)=>i.id===n))),g.collapsed=new Set(e.collapsed),g.drag=null,g.sel3d=null,g.painting=!1,g.lastVox=null,Et(),Je(),lt(),Wo=!1}function Vo(){if(wt(),Nn>0)Ju(_n[--Nn])}function vr(){if(wt(),Nn<_n.length-1)Ju(_n[++Nn])}var Pl=document.getElementById("app"),Zn=document.getElementById("locked"),Ll=typeof navigator.locks<"u"&&typeof BroadcastChannel<"u",Si=null,dn=!1,Sr=!1,Ji=0,Cl=null,Xo=null,qo,br=null,Zu=()=>!1,Ku=()=>!1,Yo=()=>Sr,Er=()=>dn,Qu=(e,t)=>{Zu=e,Ku=t},ed=(e)=>{Sr=!1,Pl.inert=!1,Zn.hidden=!1,Zn.disabled=!0,Zn.textContent=e,td()},td=()=>{document.getElementById("docslist")?.setAttribute("hidden","");for(let e of document.querySelectorAll(".ctxmenu"))e.remove()},Mr=(e="Editing in another tab — click to move here")=>{Sr=!1,Pl.inert=!0,Zn.hidden=!1,Zn.disabled=!1,Zn.textContent=e,td(),document.activeElement?.blur(),Zn.focus({preventScroll:!0})},nd=()=>{Sr=!0,Pl.inert=!1,Zn.hidden=!0};function Il(){Sr=!1,dn=!1,clearTimeout(qo);let e=Cl;Cl=null,e?.()}function id(e,t,n,i){let s,r=new Promise((a)=>s=a);navigator.locks.request(`voxelier-doc:${e}`,n?{}:{ifAvailable:!0},async(a)=>{if(!a)return;if(t!==Ji||Si!==e||dn)return;dn=!0;let o=!1;try{o=Zu(e)}catch{o=!1}if(t!==Ji||Si!==e||!dn)return;if(!o){Il(),Mr("Could not open this document"),i(!1);return}Cl=s,clearTimeout(qo),i(!0),nd(),await r}).catch(()=>{if(t===Ji&&Si===e)i(!1)})}function C_(){if(!dn)return;let e=!1;try{e=Ku()}catch{e=!1}if(!e){nd();return}Mr(),Il()}function sd(e){if(!Ll)return ed("This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable."),Promise.resolve(!1);return Ji++,br?.(!1),br=null,Il(),Xo?.close(),Si=e,Mr(),Xo=new BroadcastChannel(`voxelier-doc:${e}`),Xo.onmessage=(t)=>{if(t.data?.k==="release")C_()},new Promise((t)=>{br=t,id(e,Ji,!1,t)})}async function rd(e,t){if(!Ll)return ed("This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable."),null;if(Si===e&&dn)return t();let n=null;return await navigator.locks.request(`voxelier-doc:${e}`,{ifAvailable:!0},(i)=>{if(!i)return;let s=dn;dn=!0;try{n=t()}finally{dn=s}}),n}Zn.onclick=()=>{if(!Ll||Si===null||dn)return;clearTimeout(qo),Xo?.postMessage({k:"release"}),Mr("Waiting for the other tab…"),Ji++,id(Si,Ji,!0,(n)=>{let i=br;br=null,i?.(n)}),qo=setTimeout(()=>{if(!dn&&Si!==null)Mr("The other tab isn't responding — close it to edit here")},5000)};var $o=["+x","-x","+z","-z"];var wr="voxelier-doc:",P_="voxelier-v11",od="voxelier-ui-v1";function yn(e){let t={id:e.id,nm:e.name,p:e.pos,r:e.rot,vs:e.vis};return e.type==="object"?{t:"o",...t,b:e.boxes.map((n)=>[n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,n.c])}:{t:"s",...t,...e.north?{n:e.north}:{},c:e.children.map(yn)}}var L_={transparent:"deemphasized",invisible:"hidden"};function Jn(e){let t={id:e.id,name:e.nm||"",pos:e.p,rot:e.r,vis:L_[e.vs]||e.vs||"visible"};return e.t==="o"?{type:"object",...t,boxes:e.b.map((n)=>({x0:n[0],y0:n[1],z0:n[2],x1:n[3],y1:n[4],z1:n[5],c:n[6]}))}:{type:"scene",...t,...e.n&&$o.includes(e.n)?{north:e.n}:{},children:e.c.map(Jn)}}function ad(e){console.error("save failed",e);let t=e instanceof DOMException&&(e.name==="QuotaExceededError"||e.code===22);alert(t?"Could not save: the browser's storage quota is full (~5 MB per origin).":"Save failed: "+e.message)}function jo(e){let t;try{t=localStorage.getItem(wr+e)}catch{return{kind:"missing"}}if(t===null)return{kind:"missing"};try{let n=Zo(JSON.parse(t));return n?{kind:"ok",root:n}:{kind:"unreadable"}}catch{return{kind:"unreadable"}}}var Tr=()=>{let e=[];try{for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(!n?.startsWith(wr))continue;try{let i=JSON.parse(localStorage.getItem(n)||"");if(!i?.root)continue;e.push({id:n.slice(wr.length),name:typeof i.name==="string"&&i.name?i.name:i.root.nm||"Project",updated:Number(i.updated)||0})}catch{}}}catch{}return e.sort((t,n)=>n.updated-t.updated)},Jo=null,Zi=!1;function Ar(e,t){if(!Er())return Zi=!0,!1;let n=JSON.stringify(yn(t)),i=JSON.stringify(t.name||"Project");try{if(localStorage.setItem(wr+e,`{"uid":${Ls()},"root":${n},"name":${i},"updated":${Date.now()}}`),ks()===e)Jo=n;return Zi=!1,!0}catch(s){return Zi=!0,ad(s),!1}}function ld(e){if(!Er())return Zi=!0,!1;try{if(localStorage.removeItem(wr+e),ks()===e)Jo=null;return!0}catch(t){return Zi=!0,ad(t),!1}}var cd=null,ks=()=>cd,hd=(e)=>{cd=e,Jo=null,Zi=!1},Bs;function Nl(){if(Bs!==void 0||Zi)return!0;return g.root!==null&&Jo!==JSON.stringify(yn(g.root))}function I_(){try{localStorage.setItem(od,JSON.stringify([...g.collapsed]))}catch(e){}}function wt(){clearTimeout(Bs),Bs=void 0;let e=ks();if(e===null||!Er())return!1;return $u(JSON.stringify(yn(g.root))),I_(),Ar(e,g.root)}function Dl(){if(Bs!==void 0)return!0;ju(JSON.stringify(yn(g.root)));let e=ks();if(e===null||!Er())return!1;return Ar(e,g.root)}function lt(){clearTimeout(Bs),Bs=setTimeout(wt,250)}function Ul(e,t=1){let n=0,i=(s)=>{let r=/^n(\d+)/.exec(s.id);if(r)n=Math.max(n,Number(r[1]));if(s.type==="scene")s.children.forEach(i)};i(e),Co(Math.max(t,n+1))}function Zo(e,t=!0){if(!e||!e.root)return null;let n=Jn(e.root);if(t)Ul(n,e.uid||1);return n}var ud=()=>{try{let e=JSON.parse(localStorage.getItem(od));return Array.isArray(e)?e:[]}catch{return[]}};function dd(){try{return Zo(JSON.parse(localStorage.getItem(P_)))}catch{return null}}var N_=2;function Rr(e){let t=ft();return It(e,t),{mn:t.min,mx:t.max}}var Ko=(e)=>{let{mn:t,mx:n}=Rr(e);return{x0:t.x,y0:t.y,z0:t.z,x1:n.x,y1:n.y,z1:n.z}};function pd(e){if(!e.length)return[];let{mn:t}=Rr(e);return e.map((n)=>ur(n,-t.x,-t.y,-t.z))}function md(e){let t=dr(g.editObject.boxes,e);g.sel3d={region:t.length?Ko(t):{...e},boxes:t,lifted:!1},bi()}function zl(){let e=g.sel3d;if(!e||e.lifted)return;wt(),e.lifted=!0,_r(e.region)}function Ol(){U_();let e=g.sel3d;if(!e||!e.lifted)return;e.lifted=!1,Fo(e.boxes),e.boxes=dr(g.editObject.boxes,e.region),lt()}function Kn(){let e=g.sel3d;if(!e)return;if(g.sel3d=null,e.lifted)Fo(e.boxes),lt();else bi()}function Fl(){let e=g.sel3d;if(!e)return;let{region:t,lifted:n}=e;if(g.sel3d=null,!n)_r(t);else bi();lt()}function Bl(){if(g.sel3d&&g.sel3d.boxes.length)Xu(pd(g.sel3d.boxes))}function gd(){Bl(),Fl()}function xd(e){if(!e.length)return;Kn();let t=pd(e),n=0,i=0,s=0,r=g.editObject.boxes;if(r.length){let{mn:o,mx:l}=Rr(r);n=l.x+N_,i=o.y,s=o.z}let a=t.map((o)=>ur(o,n,i,s));g.sel3d={region:Ko(a),boxes:a,lifted:!1},Fo(a),lt()}function _d(e,t,n){let i=g.sel3d;if(!i||!e&&!t&&!n)return;let s=i.region;s.x0+=e,s.x1+=e,s.y0+=t,s.y1+=t,s.z0+=n,s.z1+=n,i.boxes=i.boxes.map((r)=>ur(r,e,t,n)),bi()}function fd(e,t,n){let{x:i,y:s,z:r}=e;for(let a=(n%4+4)%4;a>0;a--)if(t===0){let o=-r,l=s;s=o,r=l}else if(t===1){let o=-r,l=i;i=o,r=l}else{let o=-s,l=i;i=o,s=l}return{x:i,y:s,z:r}}function D_(e,t,n){let i=fd({x:e.x0,y:e.y0,z:e.z0},t,n),s=fd({x:e.x1-1,y:e.y1-1,z:e.z1-1},t,n);return{x0:Math.min(i.x,s.x),y0:Math.min(i.y,s.y),z0:Math.min(i.z,s.z),x1:Math.max(i.x,s.x)+1,y1:Math.max(i.y,s.y)+1,z1:Math.max(i.z,s.z)+1,c:e.c}}function yd(){let e=$e.matrixWorld.elements,t=Ze({x:e[0],y:0,z:e[2]},-g.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var Qo=null;function kl(){let e=g.sel3d;if(!e)return;let t=Rr(e.boxes);Qo={boxes:e.boxes.map((n)=>({...n})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function U_(){Qo=null}function vd(e,t){let n=g.sel3d,i=Qo;if(!n||!i||!i.boxes.length)return;let s=(e%4+4)%4,r;if(!s)r=i.boxes.map((a)=>({...a}));else{let a=t?yd():1;r=i.boxes.map((u)=>D_(u,a,s));let o=Rr(r),l=mi(i.cx-(o.mn.x+o.mx.x)/2),c=mi(i.cy-(o.mn.y+o.mx.y)/2),h=mi(i.cz-(o.mn.z+o.mx.z)/2);r=r.map((u)=>ur(u,l,c,h))}n.boxes=r,n.region=Ko(r),bi()}function bd(e,t){let n=g.sel3d,i=Qo;if(!n||!i||!i.boxes.length)return;let s=t?yd():1,[r,a]=s===0?[i.cy,i.cz]:s===1?[i.cx,i.cz]:[i.cx,i.cy];n.boxes=Hu(i.boxes,e,s,r,a,(o,l,c)=>({x:o,y:l,z:c})),n.region=Ko(n.boxes),bi()}function z_(){let e=g.sel3d;if(!e)return null;let t=e.region,n=new li;for(let i of[t.x0,t.x1])for(let s of[t.y0,t.y1])for(let r of[t.z0,t.z1])n.expandByPoint(Pn(i,s,r));return n}function Hl(){let e=z_();if(!e)return!1;return $t.setFromCamera(Rn,$e),$t.ray.intersectsBox(e)}function Wl(e,t){if(![t.x0,t.y0,t.z0,t.x1,t.y1,t.z1].every(Number.isSafeInteger))throw Error("voxelize bounds must be safe integer cells");let n=[],i=new Map;for(let s=t.y0;s<t.y1;s++){let r=[],a=new Map;for(let l=t.z0;l<t.z1;l++){let c=[],h=null;for(let d=t.x0;d<t.x1;d++){let f=e(d,s,l);if(h&&h.c===f)h.x1=d+1;else{if(h&&h.c!=null)c.push(h);h=f==null?null:{x0:d,x1:d+1,z0:l,z1:l+1,c:f}}}if(h&&h.c!=null)c.push(h);let u=new Map;for(let d of c){let f=`${d.x0},${d.x1},${d.c}`,y=a.get(f);if(y)y.z1=l+1,a.delete(f),u.set(f,y);else u.set(f,d)}r.push(...a.values()),a=u}r.push(...a.values());let o=new Map;for(let l of r){let c=[l.x0,l.x1,l.z0,l.z1,l.c].join(","),h=i.get(c);if(h)h.y1=s+1,i.delete(c),o.set(c,h);else o.set(c,{...l,y0:s,y1:s+1})}n.push(...i.values()),i=o}return n.push(...i.values()),n}function Sd(e,t){let n=[];for(let i of e)n.push(...Wl((s,r,a)=>t(s,r,a)?null:i.c,i));return Ed(n)}function Ed(e){if(!e.length)return[];let t=[[],[],[]];for(let v of e)t[0].push(v.x0,v.x1),t[1].push(v.y0,v.y1),t[2].push(v.z0,v.z1);let n=t.map((v)=>[...new Set(v)].sort((w,C)=>w-C)),i=n.map((v)=>v.length-1),[s,r,a]=i;if(s*r*a>8000000)return e;let o=n.map((v)=>new Map(v.map((w,C)=>[w,C]))),l=(v,w,C)=>(v*r+w)*a+C,c=new Int32Array(s*r*a);for(let v of e){let w=o[0].get(v.x1),C=o[1].get(v.y1),T=o[2].get(v.z1);for(let I=o[0].get(v.x0);I<w;I++)for(let F=o[1].get(v.y0);F<C;F++)for(let M=o[2].get(v.z0);M<T;M++)c[l(I,F,M)]=v.c+1}let h=[],u=[],d=[],f=[];for(let v=0;v<s;v++)for(let w=0;w<r;w++)for(let C=0;C<a;C++)if(c[l(v,w,C)])h.push(l(v,w,C)),u.push(v),d.push(w),f.push(C);let y=[u,d,f],x=new Uint8Array(s*r*a),p=(v)=>{x.fill(0);let w=Array.from({length:h.length},(F,M)=>M).sort((F,M)=>y[v[2]][F]-y[v[2]][M]||y[v[1]][F]-y[v[1]][M]||y[v[0]][F]-y[v[0]][M]),C=[0,0,0],T=(F,M,A,U)=>{if(M[A]>=i[A])return!1;let Y=(A+1)%3,J=(A+2)%3;C[A]=M[A];for(let R=F[Y];R<M[Y];R++){C[Y]=R;for(let B=F[J];B<M[J];B++){C[J]=B;let O=l(C[0],C[1],C[2]);if(x[O]||c[O]!==U)return!1}}return!0},I=[];for(let F of w){let M=h[F];if(x[M])continue;let A=c[M],U=[u[F],d[F],f[F]],Y=[u[F]+1,d[F]+1,f[F]+1];for(let J of v)while(T(U,Y,J,A))Y[J]++;for(let J=U[0];J<Y[0];J++)for(let R=U[1];R<Y[1];R++)for(let B=U[2];B<Y[2];B++)x[l(J,R,B)]=1;I.push({x0:n[0][U[0]],y0:n[1][U[1]],z0:n[2][U[2]],x1:n[0][Y[0]],y1:n[1][Y[1]],z1:n[2][Y[2]],c:A-1})}return I},m=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],_=null;for(let v of m){let w=p(v);if(!_||w.length<_.length)_=w}return _}var O_=24,Md=(e)=>e.reduce((t,n)=>t+(n.x1-n.x0)*(n.y1-n.y0)*(n.z1-n.z0),0),Gl=new WeakSet;function Vl(e){if(e.boxes.length<O_||Gl.has(e.boxes))return!1;let t=Ed(e.boxes);if(t.length<e.boxes.length&&Md(t)===Md(e.boxes))return e.boxes=t,Gl.add(t),!0;return Gl.add(e.boxes),!1}var Xl=(e,t,n)=>{let i=new Set(g.selection);if(Kn(),n&&Vl(n))Dl();if(g.selection=new Set([e]),g.editObject=null,$n(),g.context!==t||n)Et();else Mi(i);Je()};function F_(){if(g.path.length<=1)return;let e=g.context,t=g.editObject;Xl(g.path.pop().id,e,t)}function B_(){Xl(g.editObject.id,g.context,g.editObject)}function wd(){if(g.editObject)B_();else F_()}function Dn(e){let t=Xt(e);if(!t)return;let n=g.context,i=g.editObject;g.path=t.slice(0,-1),Xl(e.id,n,i)}function Ki(e,t){let n=Xt(e);if(!n)return;let i=g.editObject;if(Kn(),i&&i!==e&&Vl(i))Dl();if(e.type==="scene")g.path=n,g.editObject=null;else g.path=n.slice(0,-1),g.editObject=e;if(g.selection.clear(),g.tool="view",$n(),Et(),Je(),t)jn()}var Un=null,Nt=null,Cr=null,Hs=null,fn=null,k_={visible:"◉",deemphasized:"◐",hidden:"⦰"},ql=(e,t)=>{let n=Math.min(255,(e>>16&255)*t)|0,i=Math.min(255,(e>>8&255)*t)|0,s=Math.min(255,(e&255)*t)|0;return`rgb(${n},${i},${s})`},ea=new Map;function Td(e){return e.type==="object"?"o"+e.boxes.map((t)=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+e.children.map((t)=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${Td(t)}`).join()}function H_(e){let t=ea.get(e.id);if(e===g.editObject&&t)return t.cv;let n=Td(e);if(t&&t.sig===n)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let s=i.getContext("2d");s.fillStyle="#0f1115",s.fillRect(0,0,52,52);let r=mr(e,{x:0,y:0,z:0},0,[]);if(r.length){let a=ft();It(r,a);let{x:o,y:l,z:c}=a.min,{x:h,y:u,z:d}=a.max,f=40/Math.max(h-o,u-l,d-c,1),y=26-((o+h)/2-(c+d)/2)*f*0.5,x=28+(l+u)/2*f*0.6-((o+h)/2+(c+d)/2)*f*0.28,p=(_,v,w)=>[y+(_-w)*f*0.5,x-v*f*0.6+(_+w)*f*0.28],m=(_,v)=>{s.fillStyle=_,s.beginPath(),s.moveTo(v[0][0],v[0][1]);for(let w=1;w<v.length;w++)s.lineTo(v[w][0],v[w][1]);s.closePath(),s.fill()};r.sort((_,v)=>_.x0+_.x1+_.y0+_.y1+_.z0+_.z1-(v.x0+v.x1+v.y0+v.y1+v.z0+v.z1));for(let _ of r)m(ql(_.c,0.78),[p(_.x1,_.y0,_.z0),p(_.x1,_.y1,_.z0),p(_.x1,_.y1,_.z1),p(_.x1,_.y0,_.z1)]),m(ql(_.c,0.6),[p(_.x0,_.y0,_.z1),p(_.x1,_.y0,_.z1),p(_.x1,_.y1,_.z1),p(_.x0,_.y1,_.z1)]),m(ql(_.c,1),[p(_.x0,_.y1,_.z0),p(_.x1,_.y1,_.z0),p(_.x1,_.y1,_.z1),p(_.x0,_.y1,_.z1)])}return ea.set(e.id,{sig:n,cv:i}),i}var Qi=null;function Yl(e){Qi=e}function G_(e){if(e===g.root||qt(e)!==g.context||g.editObject)Dn(e);else{let t=new Set(g.selection);if(g.selection.has(e.id))g.selection.delete(e.id);else g.selection.add(e.id);Mi(t),Je()}Qi=e.id}function W_(e){let t=g.context.children,n=Qi?t.findIndex((o)=>o.id===Qi):-1,i=t.findIndex((o)=>o.id===e.id);if(e===g.root||g.editObject||n<0||i<0){Dn(e),Qi=e.id;return}let s=new Set(g.selection),r=Math.min(n,i),a=Math.max(n,i);g.selection=new Set(t.slice(r,a+1).map((o)=>o.id)),Mi(s),Je()}function V_(e,t){if(t.shiftKey||t.ctrlKey||t.metaKey){if(fn)clearTimeout(fn.timer),fn=null;if(t.shiftKey)W_(e);else G_(e);return}if(fn&&fn.node===e){clearTimeout(fn.timer),fn=null,Ki(e,!0);return}if(fn)clearTimeout(fn.timer);if(e===g.root)Ki(e);else Dn(e);Qi=e===g.root?null:e.id,fn={node:e,timer:setTimeout(()=>fn=null,300)}}function Vs(e){ta();let n=document.querySelector(`#tree .trow[data-id="${e.id}"]`)?.querySelector(".nm");if(!n)return;let i=rt("input",{className:"nminput",value:e.name});i.placeholder=e===g.root?"Project":e.type==="scene"?"group":"object";let s=!1,r=(a)=>{if(s)return;if(s=!0,a)e.name=i.value.trim(),lt();Je()};i.addEventListener("keydown",(a)=>{if(a.stopPropagation(),a.key==="Enter")r(!0);else if(a.key==="Escape")r(!1)}),i.addEventListener("blur",()=>r(!0)),n.replaceWith(i),i.focus(),i.select()}function X_(e){let t=H_(e);if(t.className="thumb",t.onclick=null,t.title="",e!==g.root&&e.type==="scene"&&e.children.length){let n=g.collapsed.has(e.id);if(t.classList.add("group"),n)t.classList.add("collapsed");t.title=n?"Expand group":"Collapse group",t.onclick=(i)=>{i.stopPropagation(),n?g.collapsed.delete(e.id):g.collapsed.add(e.id),$l()}}return t}function q_(e,t){if(e.draggable=t!==g.root,t!==g.root)e.addEventListener("dragstart",(n)=>{if(n.stopPropagation(),Un=t.id,n.dataTransfer){n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain",t.id)}catch(i){}}});e.addEventListener("dragend",Gs),e.addEventListener("dragover",(n)=>{n.preventDefault(),n.stopPropagation(),Y_(n,t,e)}),e.addEventListener("drop",(n)=>{n.preventDefault(),n.stopPropagation(),Pd()})}function $l(){let e=document.getElementById("tree");e.innerHTML="";let t=(i,s)=>{let r=i===g.root,a=!r&&g.context.children.includes(i)&&g.selection.has(i.id),o=i.vis,l=rt("div",{className:"trow"+(r?" root":"")+(a?" sel":"")+(i===g.context&&!g.editObject?" ctx":"")+(i===g.editObject?" edit":"")+(!r&&o!=="visible"?" dim":"")});l.style.paddingLeft=4+s*13+"px",l.dataset.id=i.id;let c=X_(i),h=rt("span",{className:"nm"});if(r)h.textContent=i.name||"Project";else if(i.name)h.textContent=i.name;else h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>";if(h.onclick=(u)=>{if(!fn&&!g.editObject&&!r&&g.selection.size===1&&g.selection.has(i.id))u.stopPropagation(),Vs(i)},l.append(c,h),!r)l.append(rt("button",{className:"tb"+(o==="visible"?" on":""),textContent:k_[o],title:"visible → deemphasized → hidden",onclick:(u)=>{u.stopPropagation(),Ld(i)}}));if(l.onclick=(u)=>V_(i,u),l.oncontextmenu=(u)=>{u.preventDefault(),u.stopPropagation();let d=!r&&!g.editObject&&qt(i)===g.context&&g.selection.has(i.id);if(!r&&!d)Dn(i);Rd(i,u.clientX,u.clientY)},q_(l,i),e.appendChild(l),i.type==="scene"&&(r||!g.collapsed.has(i.id)))for(let u of i.children)t(u,s+1)};t(g.root,0);let n=new Set;(function i(s){if(n.add(s.id),s.type==="scene")s.children.forEach(i)})(g.root);for(let i of ea.keys())if(!n.has(i))ea.delete(i)}function ta(){if(Hs)Hs.remove(),Hs=null,window.removeEventListener("pointerdown",Ad,!0)}function Ad(e){if(Hs&&!Hs.contains(e.target))ta()}function Rd(e,t,n){ta();let i=rt("div",{className:"ctxmenu"}),s=(l,c,h)=>i.appendChild(rt("div",{className:"ctxitem"+(h?" "+h:""),textContent:l,onclick:()=>{ta(),c()}})),r=()=>i.appendChild(rt("div",{className:"ctxdiv"})),a=e!==g.root&&qt(e)===g.context&&g.selection.size>1&&g.selection.has(e.id);if(!a)s("Rename",()=>Vs(e)),s("Locate",()=>ko(e)),r();if(e!==g.root)s("Copy",()=>Lr()),s("Duplicate",()=>a?na():Ud(e)),s("Delete objects",()=>a?Pr():zd(e),"danger"),r();if(a)s("Group",()=>Dd(e));else if(e.type==="scene"){if(e!==g.root)s("Ungroup",()=>Od(e));if(Fs())s("Paste",()=>ia(e));s("New object",()=>Fd(e)),s("New group",()=>Bd(e))}else s("New group",()=>Nd(e));document.body.appendChild(i),Hs=i;let o=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-o.width-4)+"px",i.style.top=Math.min(n,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",Ad,!0),0)}function Gs(){if(Cr)Cr.classList.remove("drop-into","drop-before","drop-after");Cr=null,Nt=null}function Cd(){let e=Un&&xt(Un);if(!e||g.editObject||qt(e)!==g.context||!g.selection.has(e.id)||g.selection.size<=1)return null;return g.context.children.filter((t)=>g.selection.has(t.id))}function Y_(e,t,n){let i=Un&&xt(Un);if(!i||i===t){Gs();return}let s=Cd();if(s?s.some((u)=>u===t||un(u,t)):un(i,t)){Gs();return}if(Gs(),Cr=n,t===g.root){Nt={parent:g.root,index:g.root.children.length},n.classList.add("drop-into");return}let a=n.getBoundingClientRect(),o=e.clientY-a.top,l=a.height,c=qt(t),h=c?c.children.indexOf(t):0;if(o>l*0.28&&o<l*0.72&&(t.type==="scene"||!s)){if(t.type==="scene")Nt={parent:t,index:t.children.length};else Nt={wrap:t};n.classList.add("drop-into")}else if(o<l*0.5)Nt={parent:c,index:h},n.classList.add("drop-before");else Nt={parent:c,index:h+1},n.classList.add("drop-after")}function Pd(){let e=Un&&xt(Un);if(e&&Nt){let t=Nt.parent?Cd():null;if(t){let n=Nt.parent,i=Nt.index,s=!1;for(let r of t)if(Ws(r,n,i))i=n.children.indexOf(r)+1,s=!0;if(s){g.collapsed.delete(n.id);let r=Xt(n);if(r)g.path=r;g.editObject=null,g.selection=new Set(t.map((a)=>a.id)),Et(),Je(),lt()}}else if(Nt.wrap)Id(Nt.wrap,e);else if(Nt.parent&&Ws(e,Nt.parent,Nt.index))g.collapsed.delete(Nt.parent.id),Dn(e),lt()}Gs(),Un=null}{let e=document.getElementById("tree");e.addEventListener("dragover",(t)=>{if(t.target===e&&Un){t.preventDefault(),Gs(),Nt={parent:g.root,index:g.root.children.length};let n=[...e.querySelectorAll(".trow")].filter((s)=>s.dataset.id!==Un),i=n[n.length-1];if(i)i.classList.add("drop-after"),Cr=i}}),e.addEventListener("drop",(t)=>{if(t.target===e)t.preventDefault(),Pd()})}document.getElementById("side").addEventListener("click",(e)=>{if(e.target.closest(".trow, button, input"))return;if(!g.selection.size)return;let t=new Set(g.selection);g.selection.clear(),Qi=null,Mi(t),Je()});document.getElementById("side").addEventListener("contextmenu",(e)=>{if(e.target.closest(".trow, button, input"))return;e.preventDefault(),Rd(g.root,e.clientX,e.clientY)});var zn=()=>{Et(),Je(),lt()};function Ld(e){e.vis=fu[e.vis],zn()}var jl=()=>[...g.selection].map((e)=>Yn(e)).filter((e)=>!!e),kd=(e,t)=>{let n=qi();n.pos={x:Math.round(Xe.target.x),y:0,z:Math.round(Xe.target.z)},e.children.push(n),g.collapsed.delete(e.id),Ki(n,t),lt(),Vs(n)};function Hd(){kd(g.context,!0)}function Pr(){if(!g.selection.size)return;g.context.children=g.context.children.filter((e)=>!g.selection.has(e.id)),g.selection.clear(),zn()}function na(){let e=jl().map(Cn);if(!e.length)return;g.context.children.push(...e),g.selection=new Set(e.map((t)=>t.id)),zn()}function Lr(){let e=jl().map(Cn);if(e.length)Vu(e)}function Gd(){Lr(),Pr()}function ia(e=g.context){if(Fs()==="vox"){$_(e);return}let t=Ho().map(Cn);if(!t.length)return;e.children.push(...t),Wd(e),g.selection=new Set(t.map((n)=>n.id)),zn()}function $_(e){let t=Go();if(!t.length)return;let n=qi();n.boxes=t.map((r)=>({...r}));let i=Ns(e),s=Ze({x:Xe.target.x-i.off.x,y:0,z:Xe.target.z-i.off.z},-i.rot);n.pos={x:Math.round(s.x),y:0,z:Math.round(s.z)},e.children.push(n),Wd(e),g.selection=new Set([n.id]),zn()}function Wd(e){if(g.collapsed.delete(e.id),e!==g.context)g.path=Xt(e)??g.path,g.editObject=null}function Ws(e,t,n){if(e===t||un(e,t))return!1;let i=qt(e);if(!i)return!1;let s=Vn(Ns(i),{off:{...e.pos},rot:e.rot}),r=Vn(ll(Ns(t)),s),a=i.children.indexOf(e);if(i.children.splice(a,1),i===t&&a<n)n--;return e.pos={x:Math.round(r.off.x),y:Math.round(r.off.y),z:Math.round(r.off.z)},e.rot=r.rot&3,t.children.splice(Math.max(0,Math.min(n,t.children.length)),0,e),!0}function Vd(e){let t=qt(e);if(!t)return null;let n=t.children.indexOf(e),i=qn("Group");return i.pos={...e.pos},i.rot=e.rot,t.children.splice(n,1,i),e.pos={x:0,y:0,z:0},e.rot=0,i.children=[e],i}function Id(e,t){if(t===e||un(t,e))return!1;let n=Vd(e);if(!n)return!1;return Ws(t,n,n.children.length),g.collapsed.delete(n.id),g.selection=new Set([n.id]),zn(),!0}function Nd(e){let t=Vd(e);if(!t)return;g.collapsed.delete(t.id),Dn(t),lt(),Vs(t)}function Dd(e){let t=jl();if(t.length<2)return;let n=qn("Group");n.pos={...e.pos},n.rot=e.rot;let i=g.context.children.indexOf(e);g.context.children.splice(Math.max(0,i),0,n);for(let s of t)Ws(s,n,n.children.length);g.collapsed.delete(n.id),g.selection=new Set([n.id]),zn()}function Ud(e){let t=qt(e);if(!t)return;let n=Cn(e);t.children.splice(t.children.indexOf(e)+1,0,n),Dn(n),lt()}function zd(e){let t=qt(e);if(!t)return;if(t.children=t.children.filter((n)=>n!==e),g.selection.delete(e.id),g.editObject===e)g.editObject=null;zn()}function Od(e){let t=qt(e);if(!t)return;let n=[...e.children],i=t.children.indexOf(e);for(let s of n)Ws(s,t,i),i=t.children.indexOf(s)+1;t.children=t.children.filter((s)=>s!==e),g.selection=new Set(n.map((s)=>s.id)),zn()}function Fd(e){kd(e,!1)}function Bd(e){let t=qn("Group");e.children.push(t),g.collapsed.delete(e.id),Dn(t),lt(),Vs(t)}function Jl(e){let t=[...g.selection];if(!t.length)return;let n=e<0?3:1,i=Is(),s=ll(i),r=(a)=>rn(a,hn(i.off,Ze(a.pos,i.rot)),i.rot+a.rot&3,ft());for(let a=0;a<Math.abs(e);a++){let o=ft();for(let d of t){let f=r(Yn(d));if(f.min.x<o.min.x)o.min.x=f.min.x;if(f.min.z<o.min.z)o.min.z=f.min.z;if(f.max.x>o.max.x)o.max.x=f.max.x;if(f.max.z>o.max.z)o.max.z=f.max.z}let l=(o.min.x+o.max.x)/2,c=(o.min.z+o.max.z)/2,h=Ze({x:l,y:0,z:c},n),u={rot:n,off:{x:l-h.x,y:0,z:c-h.z}};for(let d of t){let f=Yn(d);if(!f)continue;let y=Vn(i,{off:f.pos,rot:f.rot}),x=Vn(s,Vn(u,y));f.pos={x:mi(x.off.x),y:mi(x.off.y),z:mi(x.off.z)},f.rot=x.rot&3}}Et()}function Xd(){if(g.selection.size)Jl(1),Je(),lt()}function Zl(e){for(let t of g.selection){let n=Yn(t);if(n)n.pos.y+=e}if(g.selection.size)zn()}var Ke=(e)=>Math.floor(e/10),ht=Lo,Xs=(e,t)=>{let n=qi();return n.name=e,n.boxes=t,n},Kl=(e,t,n,i,s,r)=>({x0:e,y0:t,z0:n,x1:i,y1:s,z1:r});function Ir(){let e=Ke(4465),t=Ke(2985),n=Ke(2700),i=Ke(150),s=Xs("Floor",[at(0,0,0,e,1,t,ht[9])]),r=Ke(800),a=Ke(2100),o=e-Ke(515)-r,l=e-Ke(900)-r,c=[at(0,1,0,e,n+1,i,ht[5]),at(0,1,t-i,e,n+1,t,ht[5]),at(0,1,i,i,n+1,t-i,ht[5]),at(e-i,1,i,e,n+1,t-i,ht[5])];c=Vi(c,Kl(o,1,0,o+r,a+1,i)),c=Vi(c,Kl(l,1,t-i,l+r,a+1,t)),c=Vi(c,Kl(0,Ke(900),Ke(600),i,Ke(2100),t-Ke(600)));let h=Xs("Walls",c);h.vis="deemphasized";let u=Ke(1500),d=Ke(2000),f=Xs("Bed",[at(0,0,0,8,14,8,ht[7]),at(u-8,0,0,u,14,8,ht[7]),at(0,0,d-8,8,14,d,ht[7]),at(u-8,0,d-8,u,14,d,ht[7]),at(0,14,0,u,20,d,ht[6]),at(2,20,0,u-2,24,d-Ke(400),ht[10])]);f.pos={x:i+3,y:1,z:t-i-d};let y=Ke(1400),x=Ke(700),p=Ke(740),m=Xs("Desk",[at(0,p-4,0,y,p,x,ht[8]),at(0,0,0,6,p-4,6,ht[7]),at(y-6,0,0,y,p-4,6,ht[7]),at(0,0,x-6,6,p-4,x,ht[7]),at(y-6,0,x-6,y,p-4,x,ht[7])]),_=Ke(600),v=_-30>>1,w=_>>1,C=Xs("Computer",[at(v,0,0,v+30,2,18,ht[11]),at(w-2,2,7,w+2,Ke(160),11,ht[11]),at(0,Ke(160),6,_,Ke(520),9,ht[13])]);C.pos={x:Ke(400),y:p,z:Ke(420)};let T=qn();T.name="Desk + Computer",T.pos={x:e-i,y:1,z:Ke(900)},T.rot=1,T.children=[m,C];let I=(U)=>Xs(U,[at(-10,0,-10,11,30,11,ht[4]),at(-2,30,-2,3,54,3,ht[14]),at(-16,54,-16,17,78,17,ht[14]),at(-12,78,-12,13,92,13,ht[14])]),F=I("Plant"),M=I("Plant");F.pos={x:e-i-Ke(300),y:1,z:i+Ke(300)},M.pos={x:i+Ke(300),y:1,z:i+Ke(300)};let A=qn();return A.children=[s,h,f,T,F,M],A}var tc="voxelier-last",qd="doc";var Ql=()=>{let e=new Uint8Array(8);return crypto.getRandomValues(e),[...e].map((t)=>t.toString(36).padStart(2,"0")).join("")},Yd=()=>new URLSearchParams(location.hash.replace(/^#/,""));function j_(){let e=Yd().get(qd);return e&&/^[0-9a-z]{4,32}$/.test(e)?e:null}function J_(e){let t=Yd();t.set(qd,e),history.replaceState(null,"",`#${t.toString()}`)}var Z_=(e)=>{try{localStorage.setItem(tc,e)}catch(t){}},$d=()=>{try{return localStorage.getItem(tc)}catch{return null}},ec=null;function Qn(e,t,n){return ec=t?{root:t,uid:n}:null,Z_(e),J_(e),sd(e)}function Nr(e=Ir(),t){return{id:Ql(),root:e,uid:t}}function jd(e){let t=ec;if(ec=null,hd(e),t){if(Ul(t.root,t.uid??1),!Ar(e,t.root))throw Error("could not save the new document");return t.root}let n=jo(e);if(n.kind==="ok")return n.root;if(n.kind==="unreadable")throw Error("this document record cannot be read");let i=Ir();if(!Ar(e,i))throw Error("could not save the new document");return i}function Jd(e){let t=j_();if(t)return jo(t).kind==="unreadable"?{id:Ql(),root:Ir()}:{id:t};let n=$d();if(n&&jo(n).kind!=="unreadable")return{id:n};let[i]=Tr();if(i)return{id:i.id};return{id:Ql(),root:e()??Ir()}}async function Zd(e){return await rd(e,()=>{if(!ld(e))return!1;if($d()===e)try{localStorage.removeItem(tc)}catch{}return!0})===!0}var Kd=()=>ks();var sa=(e)=>Math.abs(e.clientX-g.drag.sx)+Math.abs(e.clientY-g.drag.sy)>3,ei=document.createElement("div");ei.id="toolcursor";ei.style.display="none";document.body.appendChild(ei);function K_(e){if(g.tool==="view"){ei.style.display="none";return}ei.textContent=oa[g.tool],ei.style.left=e.clientX+"px",ei.style.top=e.clientY+"px",ei.style.display="block"}function Q_(){if(g.tool!=="measure"||g.painting)return;if(g.drag&&g.drag.mode==="box")return;Uo()}function nc(e){let t=Math.abs($e.matrixWorldInverse.elements[5]);return Al(e)/Math.max(t,0.15)}function ey(e){let t=g.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let n=e.clientX-t.x,i=e.clientY-t.y;return t.x=e.clientX,t.y=e.clientY,(t.mode==="pan"?Fu:Bu)(n,i),!0}function ty(){let e=[],t=[];In(g.root,{x:0,y:0,z:0},0,null,null,(s,r,a,o)=>{let l=o&&g.selection.has(o)?t:e;for(let c of s.boxes)l.push(jt(c,a,r))});let n=1/0,i=-1/0;for(let s of t){if(s.y0<n)n=s.y0;if(s.y1>i)i=s.y1}return{occ:e,sel:t,minY:n,hgt:t.length?i-n:0}}var ny=(e,t,n,i)=>{if(fr(e.sel??[],e.occ??[],t,n,i))return!0;let s=e.minY??1/0;return s+n<Math.min(0,s)};function iy(e){let t=g.drag,n=(i,s,r)=>e.altKey||!ny(t,i,s,r);if(e.shiftKey){if(t.shiftAnchorY==null)t.shiftAnchorY=e.clientY,t.dyBase=t.dyUser??0;let i=t.start&&{x:t.start.x,y:t.minY??0,z:t.start.z},s=t.dyBase+Math.round((t.shiftAnchorY-e.clientY)*nc(i??Xe.target));if(n(t.dx,s,t.dz))t.dyUser=s,t.dy=s}else{t.shiftAnchorY=null;let{dx:i,dz:s}=t,r=gr(t.minY??0);if(r&&t.start)i=r.x-t.start.x,s=r.z-t.start.z;let a=t.dyUser??0,o=Math.floor(0.1*(t.hgt??0)),l=!1;for(let c=0;c<=o;c++)if(n(i,a+c,s)){t.dx=i,t.dz=s,t.dy=a+c,l=!0;break}if(!l){if(n(i,a,t.dz))t.dx=i;if(n(t.dx,a,s))t.dz=s;t.dy=a}}for(let i of g.selection)for(let s of g.childMeshes[i]||[])s.position.set(t.dx,t.dy,t.dz),s.castShadow=!1;Wn.position.set(t.dx,t.dy,t.dz)}function sy(e){let t=g.drag,n=Is(),i=Ze({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-n.rot),s=Math.round(t.dy);if(e){let r=[];for(let a of g.selection){let o=Yn(a);if(!o)continue;let l=Cn(o);l.pos={x:o.pos.x+i.x,y:o.pos.y+s,z:o.pos.z+i.z},r.push(l)}g.context.children.push(...r),g.selection=new Set(r.map((a)=>a.id))}else for(let r of g.selection){let a=Yn(r);if(a)a.pos.x+=i.x,a.pos.y+=s,a.pos.z+=i.z}Wn.position.set(0,0,0),Et(),Je(),lt()}function ry(e){let t=g.drag,n=Math.round((t.sx-e.clientX)/70);if(n!==t.steps)Jl(n-t.steps),t.steps=n,t.dirty=!0}function oy(){let e=Nu();if(e==null)return;if(g.eyedropReturn!=null)g.tool=g.eyedropReturn,g.eyedropReturn=null;rc(e)}function ef(e){let t=$i(),n=ml(t);if(!n)return;let i=Wi(n.x,n.y,n.z);if(i!==g.lastVox){if(e)Tl({x0:n.x,y0:n.y,z0:n.z,x1:n.x+1,y1:n.y+1,z1:n.z+1},g.selColor),ra(g.selColor);else if(Iu(n,g.selColor))ra(g.selColor);g.lastVox=i}tf(t)}function tf(e=$i()){let t=ml(e);if(!t){sn.visible=!1;return}let n=Pn(t.x+0.5,t.y+0.5,t.z+0.5);sn.visible=!0,sn.material.color.set(g.tool==="erase"?11895693:10994876),sn.position.copy(n)}var ic=(e)=>e===0?[1,2]:e===1?[0,2]:[0,1];function nf(e,t,n,i){let[s,r]=ic(e.na),a=[0,0,0],o=[0,0,0],l=(c,h,u)=>{a[c]=Math.min(h,u),o[c]=Math.max(h,u)};return l(e.na,e.s[e.na],e.s[e.na]+i),l(s,e.s[s],t),l(r,e.s[r],n),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var sc=(e)=>{let[t,n]=ic(e.na);return nf(e,e.c[t],e.c[n],e.hy)};function Qd(e){let t=$i(),n,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,n=g.tool==="add"?t.addCell:t.cell;else{let s=ji(0);if(!s)return;n=s,i=1}g.drag={...e,mode:"box",shiftAnchorY:null,box:{s:[n.x,n.y,n.z],c:[n.x,n.y,n.z],na:i,hy:0},occ:g.tool==="add"?g.editObject.boxes.slice():void 0},sn.visible=!1,sf()}function ay(e){let t=g.drag,n=t.box,[i,s]=ic(n.na),r=g.tool==="add"&&!e.altKey,a=(o,l,c)=>!r||!fr([nf(n,o,l,c)],t.occ??[],0,0,0);if(e.shiftKey){if(t.shiftAnchorY===null)t.shiftAnchorX=e.clientX,t.shiftAnchorY=e.clientY,t.hyBase=n.hy;let o=Pn(n.s[0],n.s[1],n.s[2]),l=n.s.slice();l[n.na]+=1;let c=Pn(l[0],l[1],l[2]),h=c.x-o.x,u=c.y-o.y,d=c.z-o.z,f=$e.matrixWorld.elements,y=h*f[0]+u*f[1]+d*f[2],x=h*f[4]+u*f[5]+d*f[6],p=y*y+x*x,m=1/Al(o),_=y*m,v=-x*m,w=e.clientX-t.shiftAnchorX,C=e.clientY-t.shiftAnchorY,T=t.hyBase+(p>0.02?Math.round((w*_+C*v)/(_*_+v*v)):Math.round((t.shiftAnchorY-e.clientY)*nc(o)));if(a(n.c[i],n.c[s],T))n.hy=T}else{t.shiftAnchorY=null;let o=Mu(n.na,n.s[n.na]);if(o){let l=[o.x,o.y,o.z];if(a(l[i],n.c[s],n.hy))n.c[i]=l[i];if(a(n.c[i],l[s],n.hy))n.c[s]=l[s]}}sf()}function ly(){let e=sc(g.drag.box);if(g.tool==="add")Tl(e,g.selColor),ra(g.selColor);else _r(e);g.liveMeas=null,xi(),Je(),lt()}function sf(){let e=sc(g.drag.box);g.liveMeas=_l(e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,Pn,2),xi()}function cy(e){let t=g.sel3d.region.y0;g.drag={...e,mode:"selmove",start:ji(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function hy(e){g.drag={...e,mode:"selrot",steps:0}}function uy(e){let t=g.drag,{dx:n,dy:i,dz:s}=t;if(e.shiftKey){if(t.shiftAnchorY==null)t.shiftAnchorY=e.clientY,t.dyBase=i;i=t.dyBase+Math.round((t.shiftAnchorY-e.clientY)*nc(Pn(t.start.x,t.start.y,t.start.z)))}else{t.shiftAnchorY=null;let r=ji(t.start.y);if(r)n=r.x-t.start.x,s=r.z-t.start.z}if(n!==t.dx||i!==t.dy||s!==t.dz){if(!g.sel3d.lifted)zl();_d(n-t.dx,i-t.dy,s-t.dz),t.dx=n,t.dy=i,t.dz=s}}function dy(e){let t=g.drag,n=e.altKey;if(n!==!!t.fine){if(t.fine=n,g.sel3d.lifted)kl(),t.sx=e.clientX,t.steps=0,t.deg=0}let i=()=>{if(!g.sel3d.lifted)zl(),kl()};if(n){let s=Math.round((t.sx-e.clientX)/25)*15;if(s===(t.deg??0))return;i(),t.deg=s,bd(s,e.shiftKey)}else{let s=Math.round((t.sx-e.clientX)/70);if(s===t.steps)return;i(),t.steps=s,vd(s,e.shiftKey)}}function fy(e){if(g.liveMeas=null,xi(),e)md(sc(g.drag.box));Je()}var Dr=null;Lt.addEventListener("pointerdown",(e)=>{if(g.drag||g.painting)return;Lt.setPointerCapture(e.pointerId),Dr=e.pointerId,No(e.clientX,e.clientY);let t={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};if(e.button===1){g.drag={...t,mode:"pan"};return}if(g.editObject){if(e.button===0)if(g.tool==="view"||g.tool==="measure")g.drag={...t,mode:"pan"};else if(g.tool==="select")if(g.sel3d&&Hl())cy(t);else Kn(),Qd(t);else if(g.tool==="add"||g.tool==="erase")Qd(t);else if(g.tool==="eyedropper")oy();else g.painting=!0,g.lastVox=null,ef(e.shiftKey);else if(e.button===2)if(g.tool==="select"&&g.sel3d&&Hl())hy(t);else g.drag={...t,mode:"orbit"};return}let n=pl(),i=n&&g.selection.has(n);if(e.button===0)if(g.tool==="measure")g.drag={...t,mode:"pan"};else if(i){let s=ty();g.drag={...t,mode:"move",start:gr(s.minY),dx:0,dy:0,dz:0,shiftAnchorY:null,...s}}else g.drag={...t,mode:"pan",clickId:n};else if(e.button===2)if(i&&g.tool!=="measure")g.drag={...t,mode:"rotobj",steps:0};else g.drag={...t,mode:"orbit"}});Lt.addEventListener("pointermove",(e)=>{if(No(e.clientX,e.clientY),g.editObject&&g.painting)ef(e.shiftKey);else if(!g.drag)if(g.editObject&&g.tool!=="select"&&g.tool!=="view"&&g.tool!=="measure")tf();else sn.visible=!1;else if(!ey(e)){if(g.drag.mode==="move")iy(e);else if(g.drag.mode==="rotobj")ry(e);else if(g.drag.mode==="box")ay(e);else if(g.drag.mode==="selmove")uy(e);else if(g.drag.mode==="selrot")dy(e)}Q_(),K_(e)});Lt.addEventListener("pointerup",(e)=>{Dr=null;try{Lt.releasePointerCapture(e.pointerId)}catch(t){}if(g.tool==="measure"&&g.drag&&!sa(e)){if(e.button===0){Eu(),g.drag=null;return}if(e.button===2){wu(),g.drag=null;return}}if(g.editObject){if(g.painting)g.painting=!1,Je(),lt();else if(g.drag&&g.drag.mode==="box")if(g.tool==="select")fy(sa(e));else ly();else if(g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot"))Ol();g.drag=null;return}if(g.drag){if(g.drag.mode==="pan"&&!sa(e)&&e.button===0){let t=g.drag.clickId,n=e.shiftKey||e.ctrlKey||e.metaKey,i=new Set(g.selection);if(t){if(n)g.selection.has(t)?g.selection.delete(t):g.selection.add(t);else g.selection=new Set([t]);Yl(t)}else if(!n)g.selection.clear(),Yl(null);Mi(i),Je()}else if(g.drag.mode==="move")sy(sa(e)&&(e.ctrlKey||e.metaKey));else if(g.drag.mode==="rotobj"){if(g.drag.dirty)Je(),lt()}}g.drag=null});function rf(){if(Dr!==null){try{Lt.releasePointerCapture(Dr)}catch(t){}Dr=null}if(!g.drag&&!g.painting)return;let e=g.painting;if(g.drag&&(g.drag.mode==="selmove"||g.drag.mode==="selrot"))Ol();if(g.drag=null,g.painting=!1,g.liveMeas=null,xi(),Et(),e)Je(),lt()}Lt.addEventListener("pointercancel",rf);function ti(){document.activeElement?.blur(),rf()}Lt.addEventListener("pointerleave",()=>{if(sn.visible=!1,ei.style.display="none",g.tool==="measure"&&!g.drag&&!g.painting&&g.liveMeas)g.liveMeas=null,xi()});Lt.addEventListener("contextmenu",(e)=>e.preventDefault());Lt.addEventListener("wheel",(e)=>{e.preventDefault(),Xe.zoom*=e.deltaY>0?1.0526315789473684:0.95,Xe.zoom=Math.max(6,Math.min(To,Xe.zoom))},{passive:!1});Lt.addEventListener("dblclick",(e)=>{if(g.editObject)return;No(e.clientX,e.clientY);let t=pl();if(!t)return;Ki(Yn(t),!0)});function oc(){return JSON.stringify({uid:Ls(),root:yn(g.root),collapsed:[...g.collapsed]})}function Ur(e,t){let n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(n),1e4)}function of(){let e=g.root.name||"Project",t=(s)=>String(s).padStart(2,"0"),n=new Date,i=`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}h${t(n.getMinutes())}m${t(n.getSeconds())}s`;Ur(new Blob([oc()],{type:"application/json"}),`${e} -- ${i}.voxelier.json`)}async function ac(e){let t=JSON.parse(e),n=Zo(t,!1);if(!n)throw Error("not a Voxelier scene file");if(ti(),!wt())throw Error("could not save the current document");let i=Nr(n,t.uid);if(!await Qn(i.id,i.root,i.uid))throw Error("could not take the edit lock for the imported document")}function af(){let e=document.createElement("input");e.type="file",e.accept="application/json,.json",e.onchange=()=>{let t=e.files&&e.files[0];if(!t)return;let n=new FileReader;n.onload=async()=>{try{await ac(n.result)}catch(i){alert("Import failed: "+i.message)}},n.readAsText(t)},e.click()}var oa={view:"\uD83D\uDC41",add:"＋",erase:"－",paint:"\uD83E\uDEA3",eyedropper:"\uD83D\uDCA7",select:"⬚",measure:"\uD83D\uDCCF"},py=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],lf=(e,t,n,i)=>rt("button",{className:"tool"+(n?" active":""),innerHTML:`<span class="ic">${e}</span>${t}`,onclick:i}),la=document.getElementById("compass"),cf=la?.querySelector(".crose");function uf(){if(!la||!cf||!g.root)return;let e=Io(),t=pi("n",e),n=$e.matrixWorld.elements,i=t.x*n[0]+t.y*n[1]+t.z*n[2],s=t.x*n[4]+t.y*n[5]+t.z*n[6];if(i*i+s*s>0.00000001)cf.style.transform=`rotate(${Math.atan2(i,s)*180/Math.PI}deg)`;let r=`Compass: north ${e}, east ${Ro(pi("e",e))}`;if(la.getAttribute("aria-label")!==r)la.setAttribute("aria-label",r)}function hf(e){if(g.tool===e)return;Kn(),g.tool=e,g.eyedropReturn=null,sn.visible=!1,$n(),Je()}function Je(){let e=document.getElementById("tools");if(e.innerHTML="",!g.editObject&&g.tool!=="measure")g.tool="view";let t=rt("div",{className:"toolgroup"}),n=g.editObject?py:[{id:"view",label:"View"}];for(let i of n)t.appendChild(lf(oa[i.id],i.label,g.tool===i.id,()=>hf(i.id)));if(t.appendChild(lf(oa.measure,"Measure",g.tool==="measure",()=>hf("measure"))),g.editObject)t.appendChild(Sy());if(e.append(t),lc(),g.tool==="view"){let i=document.getElementById("toolcursor");if(i)i.style.display="none"}$l()}document.getElementById("btn-save").onclick=of;document.getElementById("btn-load").onclick=af;var my=document.getElementById("btn-docs"),Or=document.getElementById("docslist"),gy=document.getElementById("docname");function lc(){gy.textContent=g.root?g.root.name||"Project":"Project"}function ca(){let e=Kd(),t=Tr();Or.innerHTML="";for(let n of t){let i=rt("div",{className:"docrow"+(n.id===e?" here":"")});i.append(rt("button",{className:"docopen",textContent:n.name||"Project",title:new Date(n.updated).toLocaleString(),onclick:()=>{if(n.id===e)return;if(ti(),!wt())return;Qn(n.id),ca()}})),i.append(rt("button",{className:"docdel",textContent:"✕",title:"Delete this document",onclick:async()=>{if(!confirm(`Delete "${n.name||"Project"}"? This cannot be undone.`))return;if(n.id===e){if(ti(),!wt())return}if(!await Zd(n.id)){alert("Editing in another tab — cannot delete this document");return}if(n.id===e){let[s]=Tr();if(s)Qn(s.id);else{let r=Nr();Qn(r.id,r.root)}lc()}ca()}})),Or.append(i)}Or.append(rt("button",{className:"docnew",textContent:"＋ New document",onclick:()=>{if(ti(),!wt())return;let n=Nr();Qn(n.id,n.root),lc(),ca()}}))}my.onclick=()=>{let e=Or.hasAttribute("hidden");if(Or.hidden=!e,e)ca()};var aa={ver:-1,cols:[]};function xy(){if(aa.ver===g.voxVer)return aa.cols;let e=new Map;return function t(n){if(n.type==="object")au(n.boxes,e);else n.children.forEach(t)}(g.root),aa={ver:g.voxVer,cols:[...e.entries()].sort((t,n)=>n[1]-t[1]).map((t)=>t[0])},aa.cols}var cc=[];function ra(e){cc=[e,...cc.filter((t)=>t!==e)].slice(0,6)}function rc(e){g.selColor=e,Je()}function _y(){let e=[];for(let t of[...cc,...xy(),...Lo]){if(!e.includes(t))e.push(t);if(e.length>=6)break}return e}var yy=(e)=>{let t=rt("div",{className:"sw"+(e===g.selColor?" active":""),title:Xn(e),onclick:()=>rc(e)});return t.style.background=Xn(e),t};function vy(){if(g.tool!=="eyedropper")g.eyedropReturn=g.tool,Kn(),g.tool="eyedropper",Je()}function by(e){let t=(e>>16&255)/255,n=(e>>8&255)/255,i=(e&255)/255,s=Math.max(t,n,i),r=Math.min(t,n,i),a=s-r,o=0;if(a){if(s===t)o=(n-i)/a%6;else if(s===n)o=(i-t)/a+2;else o=(t-n)/a+4;o=(o*60+360)%360}return[Math.round(o),Math.round((s?a/s:0)*100),Math.round(s*100)]}function zr(e,t,n){t/=100,n/=100;let i=n*t,s=i*(1-Math.abs(e/60%2-1)),r=n-i,[a,o,l]=e<60?[i,s,0]:e<120?[s,i,0]:e<180?[0,i,s]:e<240?[0,s,i]:e<300?[s,0,i]:[i,0,s],c=(h)=>Math.round((h+r)*255);return c(a)<<16|c(o)<<8|c(l)}var My=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function Sy(){let e=rt("div",{className:"colorctl"}),t=rt("div",{className:"colorbtn",title:"Draw colour — hover for recent colours / sliders"});t.style.background=Xn(g.selColor);let n=rt("div",{className:"colorflyout"}),i=rt("div",{className:"sliders"}),s={},[r,a,o]=by(g.selColor),l={h:r,s:a,v:o},c=()=>{s.s.style.background=`linear-gradient(to right,${Xn(zr(l.h,0,l.v))},${Xn(zr(l.h,100,l.v))})`,s.v.style.background=`linear-gradient(to right,${Xn(zr(l.h,l.s,0))},${Xn(zr(l.h,l.s,100))})`},h=()=>{l.h=+s.h.value,l.s=+s.s.value,l.v=+s.v.value,g.selColor=zr(l.h,l.s,l.v),t.style.background=Xn(g.selColor),c()};for(let f of My){let y=rt("div",{className:"sliderline"}),x=rt("input",{type:"range",className:"csl",title:f.title});x.min="0",x.max=String(f.max),x.value=String(l[f.key]),s[f.key]=x,x.addEventListener("input",h),y.append(rt("span",{className:"lbl",textContent:f.label,title:f.title}),x),i.appendChild(y)}s.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",c();let u=rt("div",{className:"sliderrow"});u.append(i,rt("div",{className:"sw more",textContent:"\uD83D\uDCA7",title:"Pick a colour from a voxel (eyedropper)",onclick:vy}));let d=rt("div",{className:"swrow"});for(let f of _y())d.appendChild(yy(f));return n.append(u,d),e.append(t,n),e}{let e=document.getElementById("app"),t=(n)=>{e.classList.toggle("side-hidden",n),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",(e)=>{if(!Yo())return;if(e.target.tagName==="INPUT")return;if(g.drag||g.painting)return;let t=e.key.toLowerCase();if(e.ctrlKey||e.metaKey){if(t==="z"){if(e.preventDefault(),e.shiftKey)vr();else Vo();return}if(t==="y"){e.preventDefault(),vr();return}if(g.editObject){if(t==="c")Bl(),e.preventDefault();else if(t==="x")gd(),e.preventDefault();else if(t==="v")Ey(),e.preventDefault();return}let i={c:Lr,x:Gd,v:ia,d:na}[t];if(i)i(),e.preventDefault();return}switch(t){case"f":jn();break;case"escape":wd();break;case"n":if(!g.editObject)Hd();break;case"r":if(!g.editObject)Xd();break;case"[":if(!g.editObject)Zl(-1);break;case"]":if(!g.editObject)Zl(1);break;case"delete":case"backspace":if(e.preventDefault(),g.editObject)Fl();else Pr();break}});function Ey(){let e=[];if(Fs()==="node")for(let t of Ho())mr(t,t.pos,t.rot,e);else e.push(...Go());if(!e.length)return;g.tool="select",xd(e),Je()}var pf=["x","y","z"],mf={x:0,y:0,z:0},gf=(e)=>`x${e.min.x}..${e.max.x} y${e.min.y}..${e.max.y} z${e.min.z}..${e.max.z}`,wy=(e)=>`(${e.max.x-e.min.x}x${e.max.y-e.min.y}x${e.max.z-e.min.z})`,Ty=(e)=>e==="visible"?"":` [${e}]`,uc=(e)=>`${e.id} ${e.type==="scene"?"S":"O"} "${e.name}"${Ty(e.vis)}`,xf=(e)=>{let t=pf.map((n,i)=>[n,[e.pos.x,e.pos.y,e.pos.z][i]]).filter(([,n])=>n!==0).map(([n,i])=>`${n}=${i}`);return`${t.length?` pos ${t.join(",")}`:""}${e.rot?` rot${e.rot*90}`:""}`},Ys=()=>Io(g.root),Ay=(e)=>{let t=pi("e",e);return`north = ${e}, east = ${Ro(t)}`},qs=(e,t)=>{let n=Xt(t,e),i=n?Cs(n):{off:mf,rot:0},s=rn(t,i.off,i.rot,ft());return Jt(s)?null:s},dc=(e)=>{let t=e?xt(e):g.root;if(!t)throw Error(`unknown node id: ${e}`);return qs(g.root,t)},Fr=(e)=>{let t=[],n=(s,r,a,o=!1)=>{if(!o&&s.vis==="hidden")return;let l=hn(r,Ze(s.pos,a)),c=a+s.rot&3;if(s.type==="object")for(let h of s.boxes)t.push(jt(h,c,l));else for(let h of s.children)n(h,l,c)},i=Cs(Xt(e,g.root).slice(0,-1));return n(e,i.off,i.rot,!0),t},Ry=(e,t)=>{let n=xf(e);return!t||Jt(t)?`${uc(e)} [empty]${n}`:`${uc(e)} ${gf(t)} ${wy(t)}${n}`};function _f(e,{depth:t=2,hidden:n=!1}={}){let i=e?xt(e):g.root;if(!i)throw Error(`unknown node id: ${e}`);let s=[Ay(Ys())],r=(a,o)=>{let l=a.vis==="hidden"&&!n,c=l&&a.type==="scene"&&a.children.length?` (${a.children.length} children)`:"";if(s.push("  ".repeat(o)+(l?uc(a)+xf(a)+c:Ry(a,qs(g.root,a)))),l||a.type==="object"||o>=t)return;for(let h of a.children)r(h,o+1)};return r(i,0),s.join(`
`)}function Cy(e,t){let n=null,i=null;for(let r of e)for(let a of t){let o=[r.x0<a.x1&&a.x0<r.x1,r.y0<a.y1&&a.y0<r.y1,r.z0<a.z1&&a.z0<r.z1],l=[Math.max(r.x0-a.x1,a.x0-r.x1,0),Math.max(r.y0-a.y1,a.y0-r.y1,0),Math.max(r.z0-a.z1,a.z0-r.z1,0)];if(o[0]&&o[1]&&o[2]){let c=[Math.min(r.x1,a.x1)-Math.max(r.x0,a.x0),Math.min(r.y1,a.y1)-Math.max(r.y0,a.y0),Math.min(r.z1,a.z1)-Math.max(r.z0,a.z0)],h=c[0]*c[1]*c[2];if(!n||h>n.v)n={v:h,d:c}}else{let c=Math.max(...l);if(!i||c<i.m)i={m:c,g:l}}}if(n)return{kind:"overlap",max:0,text:`overlap ${n.d.join("x")}`};if(!i)return null;if(i.m===0)return{kind:"touch",max:0,text:"touch"};let s=i.g.map((r,a)=>r?`${pf[a]} gap ${r}`:"").filter(Boolean);return{kind:"gap",max:i.m,text:s.join(" ")}}var yf=()=>g.root.children.flatMap((e)=>e.vis==="hidden"?[]:e.type==="scene"&&e.name==="Immutable"?e.children.filter((t)=>t.vis!=="hidden"):[e]),vf=(e)=>(Xt(e)??[]).every((t)=>t.vis!=="hidden")?Fr(e):[],Py=["overlap","touch","gap"];function bf(e,{within:t=60,only:n}={}){let i=n===void 0?null:typeof n==="string"?[n]:n,s=i?.find((h)=>!Py.includes(h));if(s)throw Error(`bad only "${s}": use overlap, touch or gap`);let r=yf().map((h)=>({n:h,boxes:vf(h)})).filter((h)=>h.boxes.length),a=e===void 0?r:(typeof e==="string"?[e]:e).map((h)=>{let u=xt(h);if(!u)throw Error(`unknown node id: ${h}`);return{n:u,boxes:Fr(u)}}).filter((h)=>h.boxes.length),o=[],l=new Set,c=(h,u)=>{if(un(h.n,u.n)||un(u.n,h.n))return;let d=h.n.id<u.n.id?`${h.n.id}|${u.n.id}`:`${u.n.id}|${h.n.id}`;if(l.has(d))return;l.add(d);let f=Cy(h.boxes,u.boxes);if(!f||i&&!i.includes(f.kind))return;if(f.kind==="gap"&&f.max>t)return;o.push(`${h.n.id} "${h.n.name}" ${f.kind==="overlap"?"~":"|"} ${u.n.id} "${u.n.name}": ${f.text}`)};if(e===void 0)for(let[h,u]of r.entries())for(let d of r.slice(h+1))c(u,d);else for(let h of a)for(let u of r)c(h,u);return o.join(`
`)}var Ly=(e)=>{let t=pi(e,Ys());if(!t)throw Error(`bad dir "${e}": use n/e/s/w, up/down or +x, -x, +y, -y, +z, -z`);return{axis:t.x?0:t.y?1:2,sign:t.x||t.y||t.z}},Ei=(e,t)=>t===0?e.x0:t===1?e.y0:e.z0,wi=(e,t)=>t===0?e.x1:t===1?e.y1:e.z1,df=(e,t,n)=>n.every((i)=>Ei(t,i)<wi(e,i)&&Ei(e,i)<wi(t,i)),Iy=(e,t,n,i)=>({...e,...t===0?{x0:n,x1:i}:t===1?{y0:n,y1:i}:{z0:n,z1:i}}),Ny=(e,t,n)=>{let i=[e];for(let s of t){let r=[];for(let a of i){let o=Ei(a,s),l=wi(a,s),c=n[s].filter((u)=>u>o&&u<l).sort((u,d)=>u-d),h=o;for(let u of[...new Set(c),l]){if(u<=h)continue;r.push(Iy(a,s,h,u)),h=u}}i=r}return i};function Mf(e,t){let n=xt(e);if(!n)throw Error(`unknown node id: ${e}`);let{axis:i,sign:s}=Ly(t),r=Fr(n);if(!r.length)throw Error(`object ${e} has no visible geometry`);let a=Math.min(...r.map((u)=>u.y0)),o=Math.max(...r.map((u)=>u.y1)),l=i===1?[0,2]:[i===0?2:0],c=[[],[],[]];for(let u of r)for(let d=0;d<3;d++)c[d].push(Ei(u,d),wi(u,d));let h=null;for(let u of yf()){if(un(u,n)||un(n,u))continue;for(let d of vf(u)){if(i!==1&&r.some((f)=>df(f,d,[0,2]))&&(wi(d,1)<=a||Ei(d,1)>=o))continue;for(let f of Ny(d,l,c)){let y=r.filter((m)=>df(m,f,l));if(!y.length)continue;let x=s>0?Math.max(...y.map((m)=>wi(m,i))):Math.min(...y.map((m)=>Ei(m,i)));if(s>0?wi(f,i)<=x:Ei(f,i)>=x)continue;let p=Math.max(0,s>0?Ei(f,i)-x:x-wi(f,i));if(!h||p<h.distance)h={id:u.id,name:u.name,distance:p}}}}return h}function Sf(e,t,{y:n}={}){if(n&&(!Number.isFinite(n[0])||!Number.isFinite(n[1])||n[0]>n[1]))throw Error("distance y must be [min,max] with min <= max");let i=(o)=>{let l=[];for(let c of typeof o==="string"?[o]:o){let h=xt(c);if(!h)throw Error(`unknown node id: ${c}`);l.push(...Fr(h))}if(!n)return l;return l.map((c)=>({...c,y0:Math.max(c.y0,n[0]),y1:Math.min(c.y1,n[1])})).filter((c)=>c.y0<c.y1)},s=i(e),r=i(t);if(!s.length||!r.length)throw Error("distance needs geometry on both sides");let a=null;for(let o of s)for(let l of r){let c=[Math.max(o.x0-l.x1,l.x0-o.x1,0),Math.max(o.y0-l.y1,l.y0-o.y1,0),Math.max(o.z0-l.z1,l.z0-o.z1,0)],h=Math.hypot(c[0],c[1],c[2]);if(!a||h<a.distance)a={distance:h,x:c[0],y:c[1],z:c[2]}}return a}function ha(e){let t=JSON.parse(e),n=Jn(t.root??t),i=[],s=(c)=>c?gf(c):"empty",r=(c,h)=>{let u=Xt(h,c);return u?.[u.length-2]?.id},a=(c)=>{let h=xt(c.id,n);if(!h){i.push(`+ ${c.id} "${c.name}": added ${s(qs(g.root,c))}`);return}let u=qs(n,h),d=qs(g.root,c),f=r(n,h),y=r(g.root,c),x=c.type==="object"&&h.type==="object"&&JSON.stringify(c.boxes)!==JSON.stringify(h.boxes);if(s(u)===s(d)&&f===y&&!x&&c.vis===h.vis&&c.rot===h.rot){if(c.type==="scene")for(let m of c.children)a(m);return}let p=[`${s(u)} → ${s(d)}`];if(f!==y)p.push(`reparented ${f??"-"}→${y??"-"}`);if(x&&c.type==="object"&&h.type==="object")p.push(`geometry changed (${h.boxes.length}→${c.boxes.length} boxes)`);if(c.vis!==h.vis)p.push(`vis ${h.vis}→${c.vis}`);if(c.rot!==h.rot)p.push(`rot ${h.rot*90}→${c.rot*90}`);if(i.push(`~ ${c.id} "${c.name}": ${p.join("; ")}`),c.type==="scene")for(let m of c.children)a(m)};a(g.root);let o=n.north??"-z";if(o!==Ys())i.push(`~ north: ${o} → ${Ys()}`);let l=(c)=>{if(!xt(c.id,g.root)){i.push(`- ${c.id} "${c.name}": removed ${s(qs(n,c))}`);return}if(c.type==="scene")for(let h of c.children)l(h)};return l(n),i.join(`
`)}var Dy=new Set(["top","front","side","iso","elevation"]);function Uy(e,t,{from:n,azim:i,elev:s}){let r=new N((t.min.x+t.max.x)/2,(t.min.y+t.max.y)/2,(t.min.z+t.max.z)/2),a=Math.max(1,t.max.x-t.min.x),o=Math.max(1,t.max.y-t.min.y),l=Math.max(1,t.max.z-t.min.z),c=[a,o,l],h=Math.hypot(a,o,l),u=h*2+100,d=(_)=>{let w=h/2,C=w/Math.sin(_o.degToRad(17.5))*1.08,T=new Ot(35,1,C-w*3,C+w*3);return T.position.copy(r).add(new N(_.x,_.y,_.z).multiplyScalar(C)),T.lookAt(r),T};if(i!==void 0||s!==void 0){if(!Number.isFinite(i??0)||!Number.isFinite(s??0))throw Error("azim and elev must be finite");let _=i??Ne.azim,v=s??Math.atan(1/Math.SQRT2),w=Math.cos(v),C={x:w*Math.sin(_),y:Math.sin(v),z:w*Math.cos(_)};return{camera:d(C),half:0,side:null}}if(e==="iso"){let _=Math.atan(1/Math.SQRT2),v=Ne.azim,w=Math.cos(_);return{camera:d({x:w*Math.sin(v),y:Math.sin(_),z:w*Math.cos(v)}),half:0,side:null}}let f;if(e==="elevation"){let _=n===void 0?null:pi(n,Ys());if(!_)throw Error('render("elevation") needs from: n/e/s/w/up/down or an axis');f=_}else if(e==="top")f={x:0,y:1,z:0};else if(e==="front")f={x:0,y:0,z:1};else if(e==="side")f={x:1,y:0,z:0};else throw Error(`unknown view "${e}"`);let y=Math.abs(f.x)>0.9?0:Math.abs(f.y)>0.9?1:2,x=y===0?[2,1]:y===2?[0,1]:[0,2],p=Math.max(c[x[0]],c[x[1]])/2*1.12+2,m=new sr(-p,p,p,-p,0.1,u+h*2);if(m.position.copy(r).add(new N(f.x,f.y,f.z).multiplyScalar(u)),y===1)m.up.set(0,0,f.y>0?-1:1);return m.lookAt(r),{camera:m,half:p,side:f}}function zy(e,t,n,i){let s=t/(2*i),r=t/2,a=(n.min.x+n.max.x)/2,o=(n.min.z+n.max.z)/2;e.strokeStyle="rgba(0,0,0,0.14)",e.lineWidth=1;for(let l=Math.ceil((a-i)/50)*50;l<=a+i;l+=50){let c=r+(l-a)*s;e.beginPath(),e.moveTo(c,0),e.lineTo(c,t),e.stroke()}for(let l=Math.ceil((o-i)/50)*50;l<=o+i;l+=50){let c=r+(l-o)*s;e.beginPath(),e.moveTo(0,c),e.lineTo(t,c),e.stroke()}e.strokeStyle="#111",e.lineWidth=2,e.beginPath(),e.moveTo(18,t-20),e.lineTo(18+100*s,t-20),e.stroke(),e.font="12px ui-monospace, monospace",e.fillStyle="#111",e.fillText("1 m",18,t-26)}function Oy(e,t,n){let i=pi("n",Ys()),s=n.matrixWorld.elements,r=i.x*s[0]+i.y*s[1]+i.z*s[2],a=i.x*s[4]+i.y*s[5]+i.z*s[6],o=r*r+a*a>0.00000001?Math.atan2(r,a):0,l=t-27,c=27,h=18;e.save(),e.translate(l,27),e.rotate(o),e.beginPath(),e.arc(0,0,18,0,Math.PI*2),e.fillStyle="rgba(255,255,255,0.88)",e.fill(),e.strokeStyle="#111",e.lineWidth=1,e.stroke(),e.beginPath(),e.moveTo(0,-14),e.lineTo(5,3),e.lineTo(0,0),e.lineTo(-5,3),e.closePath(),e.fillStyle="#b23a48",e.fill(),e.font="bold 9px ui-monospace, monospace",e.fillStyle="#111",e.textAlign="center",e.textBaseline="middle",e.fillText("N",0,9),e.restore()}function Fy(e,t,n,i){let s=new Sn(n,n),r=new ws;r.background=new Re(0);let a=[],o=[];e.forEach((f,y)=>{let x=Xi(f.boxes,()=>new Re(1,1,1),!1);if(!x)return;let p=y+1,m=new zi({color:new Re((p&255)/255,(p>>8&255)/255,(p>>16&255)/255)});r.add(new mt(x,m)),a.push(x),o.push(m)});let l=new Uint8Array(n*n*4),c=Ye.getRenderTarget(),h=Ye.shadowMap.enabled,u=Ye.clippingPlanes;try{Ye.shadowMap.enabled=!1,Ye.clippingPlanes=i===void 0?[]:[new Rt(new N(0,-1,0),i)],Ye.setRenderTarget(s),Ye.render(r,t),Ye.readRenderTargetPixels(s,0,0,n,n,l)}finally{Ye.setRenderTarget(c),Ye.shadowMap.enabled=h,Ye.clippingPlanes=u;for(let f of a)f.dispose();for(let f of o)f.dispose();s.dispose()}let d=e.map(()=>null);for(let f=0;f<n;f++)for(let y=0;y<n;y++){let x=(f*n+y)*4,p=l[x]|l[x+1]<<8|l[x+2]<<16;if(!p||p>e.length)continue;let m=d[p-1]||(d[p-1]={x:0,y:0,n:0});m.x+=y+0.5,m.y+=n-1-f+0.5,m.n++}return d.map((f)=>f?{x:f.x/f.n,y:f.y/f.n}:void 0)}function By(e,t,n,i){e.font="bold 11px ui-monospace, monospace",e.textAlign="center",e.textBaseline="middle";for(let{label:s,b:r,at:a}of n){if((r.max.x-r.min.x)*(r.max.z-r.min.z)>=i)continue;if(!a)continue;e.lineWidth=3,e.strokeStyle="#fff",e.strokeText(s,a.x,a.y),e.fillStyle="#111",e.fillText(s,a.x,a.y)}}var ff={png:1,webp:0.8,jpeg:0.8},hc=(e)=>e===void 0?[]:typeof e==="string"?[e]:e;async function Ef(e,t={}){let n=t.format??"webp";if(!Object.hasOwn(ff,n))throw Error(`unknown format "${n}": use png, webp or jpeg`);let i=`image/${n}`,s=ff[n];if(!Dy.has(e))throw Error(`unknown view "${e}": use top, front, side, iso or elevation`);let r=t.size??900;if(!Number.isFinite(r)||r<=0)throw Error("size must be a positive finite number");if(t.cutY!==void 0&&!Number.isFinite(t.cutY))throw Error("cutY must be finite");let a=Math.max(64,Math.min(2048,Math.round(r))),o=hc(t.focus),l=t.isolate===!0;if(typeof t.isolate==="string"||Array.isArray(t.isolate))o=[...new Set([...o,...hc(t.isolate)])],l=!0;let c=g.sceneBox&&!Jt(g.sceneBox)?g.sceneBox:{min:{x:-20,y:0,z:-20},max:{x:20,y:40,z:20}},h=ft();if(o.length){for(let O of o){let X=dc(O);if(!X)continue;h.min.x=Math.min(h.min.x,X.min.x),h.min.y=Math.min(h.min.y,X.min.y),h.min.z=Math.min(h.min.z,X.min.z),h.max.x=Math.max(h.max.x,X.max.x),h.max.y=Math.max(h.max.y,X.max.y),h.max.z=Math.max(h.max.z,X.max.z)}if(Jt(h))throw Error(`focus has no geometry: ${o}`)}else Object.assign(h,c);let{camera:u,half:d,side:f}=Uy(e,h,t),y=new Set,x=(O)=>{if(y.add(O.id),O.type==="scene")for(let X of O.children)x(X)};for(let O of o)x(xt(O));l=l&&o.length>0;let p=new Set;for(let O of hc(t.hide)){let X=xt(O);if(!X)throw Error(`unknown node id: ${O}`);let G=(V)=>{if(p.add(V.id),V.type==="scene")for(let Z of V.children)G(Z)};G(X)}let m=null;if(t.cutaway&&e==="elevation"&&f){let O=Math.abs(f.x)>0.99?0:Math.abs(f.y)>0.99?1:Math.abs(f.z)>0.99?2:-1;if(O>=0)m={axis:O,sign:f.x||f.y||f.z,mid:[h.min.x+h.max.x,h.min.y+h.max.y,h.min.z+h.max.z][O]/2}}let _=[],v=[],w=(O,X)=>{if(Jt(X)||p.has(O.id))return;if(m&&(m.sign>0?[X.min.x,X.min.y,X.min.z][m.axis]>=m.mid:[X.max.x,X.max.y,X.max.z][m.axis]<=m.mid))return;let G=Fr(O);if(!G.length)return;_.push({label:O.name||O.id,b:X,boxes:G}),v.push(...G)};if(In(g.root,mf,0,null,null,(O,X,G,V,Z)=>{if(!Z&&(!l||y.has(O.id)))w(O,rn(O,X,G,ft()))}),g.editObject&&g.editObject.vis==="visible"&&(!l||y.has(g.editObject.id)))w(g.editObject,rn(g.editObject,g.editXform.off,g.editXform.rot,ft()));let C=t.azim!==void 0||t.elev!==void 0,T=t.cutY??(e==="top"&&!C?150:void 0),I=t.labels===!1?[]:Fy(_,u,a,T),F=_.map((O,X)=>({...O,at:I[X]})),M=new ws;M.background=new Re(16777215),M.add(new or(16777215,0.62));let A=new Bi(16777215,0.78);A.position.set(40,150,30),M.add(A);let U=new Bi(16777215,0.16);U.position.set(-6,5,-7),M.add(U);let Y=Xi(v,di,!0);if(Y)M.add(new mt(Y,lr));let J=Ye.getSize(new Ve),R=Ye.clippingPlanes,B=Ye.shadowMap.enabled;try{Ye.shadowMap.enabled=!1,Ye.clippingPlanes=T===void 0?[]:[new Rt(new N(0,-1,0),T)],Ye.setSize(a,a,!1),Ye.render(M,u);let O=document.createElement("canvas");O.width=O.height=a;let X=O.getContext("2d");if(X.drawImage(Ye.domElement,0,0,a,a),e==="top"&&t.grid!==!1&&d>0)zy(X,a,h,d);if(t.labels!==!1){let G=(c.max.x-c.min.x)*(c.max.z-c.min.z);By(X,a,F,G*0.25)}if(Oy(X,a,u),t.save){let G=await new Promise((V)=>O.toBlob(V,i,s));if(!G)throw Error("could not encode the render");return Ur(G,t.save),`saved ${a}px ${G.type.replace("image/","")} ${Math.round(G.size/1024)} kB to "${t.save}"`}return O.toDataURL(i,s)}finally{Y?.dispose(),Ye.setSize(J.x,J.y,!1),Ye.clippingPlanes=R,Ye.shadowMap.enabled=B,Ye.render(gt,$e),nn()}}var pc=()=>{if(!Yo())throw Error("document is open for editing in another tab")};function ky(e){let t=new Set,n=(i)=>{if(!i.id)return"node without an id";if(t.has(i.id))return`duplicate node id ${i.id}`;if(t.add(i.id),!i.pos||![i.pos.x,i.pos.y,i.pos.z].every(Number.isInteger))return`node ${i.id} has a non-integer or non-finite position`;if(i.type==="scene"){if(i.north!==void 0&&!$o.includes(i.north))return`scene ${i.id} has an invalid north "${i.north}"`;for(let r of i.children){let a=n(r);if(a)return a}return null}let s=`object ${i.id}${i.name?` "${i.name}"`:""}`;for(let r=0;r<i.boxes.length;r++){let a=i.boxes[r];if(![a.x0,a.y0,a.z0,a.x1,a.y1,a.z1].every(Number.isInteger))return`box ${r} of ${s} has a non-integer or non-finite coordinate`;if(a.x1<=a.x0||a.y1<=a.y0||a.z1<=a.z0)return`box ${r} of ${s} is empty or inverted`;for(let o=r+1;o<i.boxes.length;o++)if(fr([a],[i.boxes[o]],0,0,0))return`boxes ${r} and ${o} of ${s} overlap`}return null};return n(e)}function Hy(e){g.root=Jn(JSON.parse(e)),g.path=[g.root],g.editObject=null,g.sel3d=null,g.selection.clear(),g.drag=null,g.painting=!1,g.lastVox=null,$n(),Et(),Je()}function Gy(){let e=g.path.map((n)=>n.id);g.path=[g.root];for(let n of e.slice(1)){let i=g.context.children.find((s)=>s.id===n);if(!i||i.type!=="scene")break;g.path.push(i)}let t=g.editObject&&g.context.children.find((n)=>n.id===g.editObject.id);if(g.editObject=t&&t.type==="object"?t:null,g.sel3d)if(g.editObject)g.sel3d.boxes=dr(g.editObject.boxes,g.sel3d.region);else g.sel3d=null;g.selection=new Set([...g.selection].filter((n)=>g.context.children.some((i)=>i.id===n)))}var fc=!1;function mc(e){if(pc(),fc||g.drag||g.painting)throw Error("edit is unavailable mid-gesture or inside another edit");wt();let t=JSON.stringify(yn(g.root));fc=!0;try{e(g.root);let n=ky(g.root);if(n)throw Error(`edit rejected: ${n}; restored the document`);Gy(),Et(),Je(),wt()}catch(n){throw Hy(t),n}finally{fc=!1}return ha(t)}function Wy(e){let t=xt(e);if(!t)throw Error(`unknown node id: ${e}`);let n=qt(t);if(!n)throw Error("the root has no siblings to be cloned into");let i=Cn(t);return mc(()=>{n.children.splice(n.children.indexOf(t)+1,0,i)}),i.id}function Vy(e){let t=xt(e);if(!t)throw Error(`unknown node id: ${e}`);let n=qt(t);if(!n)throw Error("the root has no siblings to hide");return mc(()=>{for(let i of n.children)if(i.name!=="Immutable")i.vis=i.id===e?"visible":"hidden"})}var wf=(e)=>{pc();let t=JSON.stringify(yn(g.root));return e(),ha(t)},Tf={iso:[Math.PI/4,Math.atan(1/Math.SQRT2)],top:[Math.PI/4,Math.PI/2],front:[0,0],side:[Math.PI/2,0]};function Xy(e){if(!Object.hasOwn(Tf,e))throw Error(`unknown view "${e}": use iso, top, front or side`);let t=Tf[e];Xe.azim=Ne.azim=t[0],Xe.elev=Ne.elev=t[1],nn()}var qy={coordinates:"Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",nodes:"S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique — mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",compass:"The document's north is S.root.north, one of '+x','-x','+z','-z'; absent means '-z'. Set it in an edit: edit(r => r.north = '+x'). Compass names n/e/s/w rotate with it (at the default north = -z, east = +x; +x north makes east +z), and up/down are world +y/-y. Every direction argument (clearance, render's from) accepts these alongside '+x','-x','+y','-y','+z','-z'. outline() starts with the current mapping, the viewport compass shows it, and renders draw an N arrow.",shape:"voxelize(fn, bounds) -> disjoint Box3[], fn(x,y,z) -> colour or null over the half-open safe-integer cells of {x0,y0,z0,x1,y1,z1}; colours are merged greedily along x, z then y. carve(boxes, fn) removes every cell where fn is true and repacks the result. Round pot: voxelize((x,y,z) => (x-8)**2 + (z-8)**2 <= 25 && y < 10 ? 0xcb997e : null, {x0:0,y0:0,z0:0,x1:17,y1:10,z1:17}). Rotated chair: test the cell in the chair's own frame, not its world bounds: const a = Math.PI/6, cx = 20, cz = 20; voxelize((x,y,z) => { const dx = x-cx, dz = z-cz, lx = dx*Math.cos(a)+dz*Math.sin(a), lz = -dx*Math.sin(a)+dz*Math.cos(a); const seat = Math.abs(lx) <= 12 && Math.abs(lz) <= 12 && y >= 20 && y < 26; const back = Math.abs(lx) <= 12 && lz > 8 && lz <= 12 && y >= 26 && y < 52; const legs = Math.abs(Math.abs(lx)-9) < 2 && Math.abs(Math.abs(lz)-9) < 2 && y < 20; return seat || back || legs ? 0x8d6e63 : null; }, {x0:0,y0:0,z0:0,x1:40,y1:52,z1:40}).",distance:"distance(a, b, {y:[min,max]}) -> {distance, x, y, z}: true minimum box-to-box gap in world cm between two nodes (or arrays of ids), with the per-axis gaps of the closest pair. y clips both sides to a height band, so the minimum can only grow. relations(ids?, {within=60, only:'overlap'|'touch'|'gap'}) filters pairs by kind.",relations:"relations(ids?, {within=60, only}) -> one line per pair within 60 cm: 'a | b: z gap 4' for a gap or touch, 'a ~ b: overlap 2x3x1' for an overlap. ids given: each listed object (even a hidden one) against every visible object, never against its own container. only filters overlap, touch or gap.",outline:"outline(id?, {depth=2, hidden=false}) -> indented node lines with world bounds and size. The first line is the compass mapping ('north = -z, east = +x'); expanded lines append non-zero pos and rot, e.g. 'pos z=-1 rot90'. Collapsed hidden groups show their offsets and child count.",api:"S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON({save}) -> envelope JSON string, edit(fn) -> compact diff, undo(), redo() -> compact diff (may be empty), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}) (own entry), render(view, opts) (own entry), relations(ids?, {within=60, only}) (own entry), clearance(id, dir) (own entry), distance(a, b, {y}) (own entry), voxelize(fn, bounds) and carve(boxes, fn) (own entry), clone(id) -> new id, show(id) -> diff, diff(before), uid(), newObject(), newScene(name?), help.",variants:"There is no variant node type: a variant is one sibling subtree per alternative (a scene, or a plain object). Put them under one parent scene whose children are exactly the alternatives, keep one visible and the rest hidden, and switch with show(id) — that node visible, its siblings hidden (an 'Immutable' group stays), one undo step. clone(id) deep-copies a subtree (fresh ids, same pos) as the next sibling, so a new alternative is clone + move + tweak. Both run their own edit step: call them outside edit(fn). relations()/clearance()/renders ignore hidden alternatives, so they follow whichever is shown.",files:"render(view, {save:'plan.webp'}) and exportJSON({save:'plan.voxelier.json'}) hand the file to the browser as a download and return a one-line confirmation instead of the payload. Where it lands is the browser's download directory (a desk browser: ~/Downloads; a Playwright-driven browser: its downloads path). An embedded/automation webview may never write the file to disk — check before relying on it, and otherwise use the returned dataURL.",clearance:"clearance(id, dir) -> {id, name, distance} | null: free cm from the object's exposed contour to the nearest visible object ahead, or null if nothing is there. dir accepts compass names (n/e/s/w/up/down) and world axes ('+x','-x','+y','-y','+z','-z'). The other box is cut into transverse regions at the object's own box boundaries; each region uses the furthest contour face under it. That keeps a stepped or rotated object's short walkways, judges a wide obstacle region by region, and stops repacking the same geometry from growing phantom faces. Horizontally the corridor ignores height — the chair-to-mattress walkway is a real answer even when nothing shares a height band — while slabs below or above the object over its real footprint are skipped; ±y uses that footprint. distance 0 means a box crosses the face. Never returns the object itself or a scene that contains it.",render:"render(view, {from, azim, elev, focus, isolate, hide, cutaway, labels, grid, size=900, cutY, save, format='webp'}) -> Promise<dataURL or 'saved …'>. top: orthographic from +y looking down, +x right, +z down. front: orthographic from +z looking toward -z, +y up. side: orthographic from +x looking toward -x, +y up. iso: perspective overview. elevation: orthographic camera outside the side given by from:'n'|'e'|'s'|'w'|'up'|'down' (or an axis), looking in. azim/elev (radians; azimuth from +z toward +x, elevation above the XZ plane) replace the named view with a perspective camera and do not inherit the top cutY. focus takes an id or array; isolate accepts true, an id or an array. hide takes ids (whole subtrees). cutaway on an elevation drops objects wholly on the camera side of the frame centre, revealing the interior. Labels are drawn only for objects with visible pixels, at those pixels' centroid, so occluded objects stop producing a wall of text; a compass N arrow is drawn in the corner. cutY defaults to 150 for the orthographic top view. Default webp is ~5x smaller than png. Structural shells — a footprint covering a quarter of the scene — stay unlabelled. Grid pitch 50 cm, the bar is 1 m.",edit:"edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step, persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, non-integer positions, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows. Node references go stale after undo, load or a rejected edit — look them up again inside fn.",example:"await voxelier.load(json); voxelier.edit(() => { const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56'); const alt = voxelier.clone('n44'); voxelier.show(alt); voxelier.clearance(alt, '+z'); await voxelier.render('top', {save:'plan.webp'});"},Yy={S:g,ser:yn,de:Jn,uid:Ps,newObject:qi,newScene:qn,findById:xt,worldBounds:dc,load:async(e)=>{pc(),await ac(e)},exportJSON:(e)=>{let t=oc();if(!e?.save)return t;return Ur(new Blob([t],{type:"application/json"}),e.save),`saved ${Math.round(t.length/1024)} kB of scene JSON to "${e.save}"`},edit:mc,diff:ha,outline:_f,relations:bf,clearance:Mf,distance:Sf,voxelize:Wl,carve:Sd,render:Ef,clone:Wy,show:Vy,undo:()=>wf(Vo),redo:()=>wf(vr),frameView:jn,fitNode:ko,frameBox:Bo,view:Xy,help:qy};function Af(){Object.assign(window,{voxelier:Yy})}for(let e of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(e,nn,{passive:!0,capture:!0});var $y=()=>Math.abs(Xe.azim-Ne.azim)<0.001&&Math.abs(Xe.elev-Ne.elev)<0.001&&Math.abs(Xe.zoom-Ne.zoom)<0.001&&Ne.target.distanceToSquared(Xe.target)<0.000001;function Rf(){let e=Lt.getBoundingClientRect();dt.w=e.width,dt.h=e.height,dt.x=e.left,dt.y=e.top}function Cf(){let e=Math.max(1,Math.round(dt.w)),t=Math.max(1,Math.round(dt.h)),n=Math.min(devicePixelRatio,2);if(Ye.getPixelRatio()!==n)Ye.setPixelRatio(n);if(Lt.width!==Math.floor(e*n)||Lt.height!==Math.floor(t*n))Ye.setSize(e,t,!1),nn()}window.addEventListener("resize",()=>{Rf(),Cf()});var gc=null;function jy(e){let t;try{t=jd(e)}catch(i){return alert("Open failed: "+i.message),!1}let n=e!==gc;if(g.root=t,g.path=[t],g.editObject=null,g.sel3d=null,g.drag=null,g.painting=!1,g.lastVox=null,g.selection.clear(),n){if(g.collapsed=gc===null?new Set(ud()):new Set,g.tool==="measure")g.tool="view";$n()}if(gc=e,qu(),Et(),Je(),n)jn();if(!wt())return!1;return nn(),!0}function Jy(){return ti(),wt()}function Pf(){if(requestAnimationFrame(Pf),Cf(),ku(),ar.tail>0||!$y()){if(Pu(),Ye.render(gt,$e),uf(),Tu(),ar.tail>0)ar.tail--}}var Lf=()=>{if(ti(),!Nl())return;wt()};window.addEventListener("pagehide",Lf);document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")Lf()});window.addEventListener("beforeunload",(e)=>{if(!Nl())return;e.preventDefault(),e.returnValue=""});function Zy(){Qu(jy,Jy),Af();let e=Jd(dd);Rf(),Pf(),Qn(e.id,e.root)}Zy();
