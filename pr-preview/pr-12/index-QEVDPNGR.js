var g={root:null,path:[],context:null,editObject:null,selection:new Set,clipboard:[],tool:"add",selColor:13935475,collapsed:new Set,meshes:[],pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},editMesh:null,editRemesh:0,voxVer:0,painting:!1,lastVox:null,drag:null,dragId:null,dropInfo:null,dropRow:null,ctxMenuEl:null,pending:null,measMode:!1,liveMeas:null,frozenMeas:[],measLabels:[],measFieldCache:null,saveT:null};var Ua="160";var Wu=0,Tc=1,Xu=2;var nh=1,Na=2,bn=3,je=0,Be=1,sn=2;var kn=0,ki=1,Ac=2,Rc=3,Cc=4,Yu=5,ii=100,qu=101,Zu=102,Pc=103,Ic=104,Ju=200,$u=201,Ku=202,ju=203,Ko=204,jo=205,Qu=206,td=207,ed=208,nd=209,id=210,sd=211,rd=212,od=213,ad=214,cd=0,ld=1,hd=2,Rr=3,ud=4,dd=5,fd=6,pd=7,Oa=0,md=1,gd=2,Vn=0,xd=1,_d=2,vd=3,yd=4,Md=5,Sd=6;var ih=300,Wi=301,Xi=302,Qo=303,ta=304,jr=306,ea=1e3,rn=1001,na=1002,De=1003,Lc=1004;var vo=1005;var Je=1006,bd=1007;var Ls=1008;var Hn=1009,Ed=1010,wd=1011,Fa=1012,sh=1013,zn=1014,Bn=1015,Ds=1016,rh=1017,oh=1018,oi=1020,Td=1021,on=1023,Ad=1024,Rd=1025,ai=1026,Yi=1027,Cd=1028,ah=1029,Pd=1030,ch=1031,lh=1033,yo=33776,Mo=33777,So=33778,bo=33779,Dc=35840,Uc=35841,Nc=35842,Oc=35843,hh=36196,Fc=37492,zc=37496,Bc=37808,kc=37809,Vc=37810,Hc=37811,Gc=37812,Wc=37813,Xc=37814,Yc=37815,qc=37816,Zc=37817,Jc=37818,$c=37819,Kc=37820,jc=37821,Eo=36492,Qc=36494,tl=36495,Id=36283,el=36284,nl=36285,il=36286;var Cr=2300,Pr=2301,wo=2302,sl=2400,rl=2401,ol=2402;var uh=3e3,ci=3001,Ld=3200,Dd=3201,dh=0,Ud=1,$e="",Me="srgb",Tn="srgb-linear",za="display-p3",Qr="display-p3-linear",Ir="linear",Qt="srgb",Lr="rec709",Dr="p3";var Mi=7680;var al=519,Nd=512,Od=513,Fd=514,fh=515,zd=516,Bd=517,kd=518,Vd=519,cl=35044;var ll="300 es",ia=1035,En=2e3,Ur=2001,Gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=1234567,Vi=Math.PI/180,Us=180/Math.PI;function ts(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Ue(n,t,e){return Math.max(t,Math.min(e,n))}function Ba(n,t){return(n%t+t)%t}function Hd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Gd(n,t,e){return n!==t?(e-n)/(t-n):0}function Cs(n,t,e){return(1-e)*n+e*t}function Wd(n,t,e,i){return Cs(n,t,1-Math.exp(-e*i))}function Xd(n,t=1){return t-Math.abs(Ba(n,t*2)-t)}function Yd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function qd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Zd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Jd(n,t){return n+Math.random()*(t-n)}function $d(n){return n*(.5-Math.random())}function Kd(n){n!==void 0&&(hl=n);let t=hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jd(n){return n*Vi}function Qd(n){return n*Us}function sa(n){return(n&n-1)===0&&n!==0}function tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ef(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),f=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*d,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ph={DEG2RAD:Vi,RAD2DEG:Us,generateUUID:ts,clamp:Ue,euclideanModulo:Ba,mapLinear:Hd,inverseLerp:Gd,lerp:Cs,damp:Wd,pingpong:Xd,smoothstep:Yd,smootherstep:qd,randInt:Zd,randFloat:Jd,randFloatSpread:$d,seededRandom:Kd,degToRad:jd,radToDeg:Qd,isPowerOfTwo:sa,ceilPowerOfTwo:tf,floorPowerOfTwo:Nr,setQuaternionFromProperEuler:ef,normalize:Ie,denormalize:Fi},Ht=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class n{constructor(t,e,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],m=i[5],_=i[8],x=s[0],p=s[3],u=s[6],b=s[1],v=s[4],T=s[7],I=s[2],C=s[5],R=s[8];return r[0]=a*x+o*b+c*I,r[3]=a*p+o*v+c*C,r[6]=a*u+o*T+c*R,r[1]=l*x+h*b+d*I,r[4]=l*p+h*v+d*C,r[7]=l*u+h*T+d*R,r[2]=f*x+m*b+_*I,r[5]=f*p+m*v+_*C,r[8]=f*u+m*T+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,_=e*d+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=d*x,t[1]=(s*l-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},To=new Bt;function mh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nf(){let n=Or("canvas");return n.style.display="block",n}var ul={};function Ps(n){n in ul||(ul[n]=!0,console.warn(n))}var dl=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fl=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[Tn]:{transfer:Ir,primaries:Lr,toReference:n=>n,fromReference:n=>n},[Me]:{transfer:Qt,primaries:Lr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qr]:{transfer:Ir,primaries:Dr,toReference:n=>n.applyMatrix3(fl),fromReference:n=>n.applyMatrix3(dl)},[za]:{transfer:Qt,primaries:Dr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(fl),fromReference:n=>n.applyMatrix3(dl).convertLinearToSRGB()}},sf=new Set([Tn,Qr]),Zt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!sf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=er[t].toReference,s=er[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return er[n].primaries},getTransfer:function(n){return n===$e?Ir:er[n].transfer}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Si,Fr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Or("canvas")),Si.width=t.width,Si.height=t.height;let i=Si.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rf=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var of=0,an=class n extends Gn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rn,s=rn,r=Je,a=Ls,o=on,c=Hn,l=n.DEFAULT_ANISOTROPY,h=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ts(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ci?Me:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?ci:uh}set encoding(t){Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ci?Me:$e}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ih;an.DEFAULT_ANISOTROPY=1;var ye=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],_=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,T=(m+1)/2,I=(u+1)/2,C=(h+f)/4,R=(d+x)/4,q=(_+p)/4;return v>T&&v>I?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=R/i):T>I?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=q/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=q/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends Gn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(Ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ci?Me:$e),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends ra{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oa=class extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=x;return}if(d!==x||c!==f||l!==m||h!==_){let p=1-o,u=c*f+l*m+h*_+d*x,b=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let I=Math.sqrt(v),C=Math.atan2(I,u*b);p=Math.sin(p*C)/I,o=Math.sin(o*C)/I}let T=o*b;if(c=c*p+f*T,l=l*p+m*T,h=h*p+_*T,d=d*p+x*T,p===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*d+c*m-l*f,t[e+1]=c*_+h*f+l*d-o*m,t[e+2]=l*_+h*m+o*f-c*d,t[e+3]=h*_-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),f=c(i/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"YZX":this._x=f*h*d+l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d-f*m*_;break;case"XZY":this._x=f*h*d-l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new L,pl=new Wn,li=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ir.subVectors(this.max,ws),bi.subVectors(t.a,ws),Ei.subVectors(t.b,ws),wi.subVectors(t.c,ws),Dn.subVectors(Ei,bi),Un.subVectors(wi,Ei),jn.subVectors(bi,wi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-jn.z,jn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,jn.z,0,-jn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-jn.y,jn.x,0];return!Po(e,bi,Ei,wi,ir)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,bi,Ei,wi,ir))?!1:(sr.crossVectors(Dn,Un),e=[sr.x,sr.y,sr.z],Po(e,bi,Ei,wi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_n=[new L,new L,new L,new L,new L,new L,new L,new L],Qe=new L,nr=new li,bi=new L,Ei=new L,wi=new L,Dn=new L,Un=new L,jn=new L,ws=new L,ir=new L,sr=new L,Qn=new L;function Po(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Qn.fromArray(n,r);let o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=t.dot(Qn),l=e.dot(Qn),h=i.dot(Qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var af=new li,Ts=new L,Io=new L,qi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):af.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Io)),this.expandByPoint(Ts.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new L,Lo=new L,rr=new L,Nn=new L,Do=new L,or=new L,Uo=new L,Ns=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Lo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Lo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=Nn.dot(this.direction),c=-Nn.dot(rr),l=Nn.lengthSq(),h=Math.abs(1-a*a),d,f,m,_;if(h>0)if(d=a*c-o,f=a*o-c,_=r*h,d>=0)if(f>=-_)if(f<=_){let x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lo).addScaledVector(rr,f),m}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let i=vn.dot(this.direction),s=vn.dot(vn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,s,r){Do.subVectors(e,t),or.subVectors(i,t),Uo.crossVectors(Do,or);let a=this.direction.dot(Uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);let c=o*this.direction.dot(or.crossVectors(Nn,or));if(c<0)return null;let l=o*this.direction.dot(Do.cross(Nn));if(l<0||c+l>a)return null;let h=-o*Nn.dot(Uo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class n{constructor(t,e,i,s,r,a,o,c,l,h,d,f,m,_,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,d,f,m,_,x,p)}set(t,e,i,s,r,a,o,c,l,h,d,f,m,_,x,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,_=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+_*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,m=c*d,_=l*h,x=l*d;e[0]=f+x*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,m=c*d,_=l*h,x=l*d;e[0]=f-x*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,m=a*d,_=o*h,x=o*d;e[0]=c*h,e[4]=_*l-m,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,m=a*l,_=o*c,x=o*l;e[0]=c*h,e[4]=x-f*d,e[8]=_*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+_,e[10]=f-x*d}else if(t.order==="XZY"){let f=a*c,m=a*l,_=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+x,e[5]=a*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,lf)}lookAt(t,e,i){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),On.crossVectors(i,He),On.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),On.crossVectors(i,He)),On.normalize(),ar.crossVectors(He,On),s[0]=On.x,s[4]=ar.x,s[8]=He.x,s[1]=On.y,s[5]=ar.y,s[9]=He.y,s[2]=On.z,s[6]=ar.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],b=i[3],v=i[7],T=i[11],I=i[15],C=s[0],R=s[4],q=s[8],S=s[12],w=s[1],V=s[5],W=s[9],Z=s[13],A=s[2],D=s[6],B=s[10],X=s[14],H=s[3],Y=s[7],$=s[11],Q=s[15];return r[0]=a*C+o*w+c*A+l*H,r[4]=a*R+o*V+c*D+l*Y,r[8]=a*q+o*W+c*B+l*$,r[12]=a*S+o*Z+c*X+l*Q,r[1]=h*C+d*w+f*A+m*H,r[5]=h*R+d*V+f*D+m*Y,r[9]=h*q+d*W+f*B+m*$,r[13]=h*S+d*Z+f*X+m*Q,r[2]=_*C+x*w+p*A+u*H,r[6]=_*R+x*V+p*D+u*Y,r[10]=_*q+x*W+p*B+u*$,r[14]=_*S+x*Z+p*X+u*Q,r[3]=b*C+v*w+T*A+I*H,r[7]=b*R+v*V+T*D+I*Y,r[11]=b*q+v*W+T*B+I*$,r[15]=b*S+v*Z+T*X+I*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],x=t[7],p=t[11],u=t[15];return _*(+r*c*d-s*l*d-r*o*f+i*l*f+s*o*m-i*c*m)+x*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*h-r*c*h)+p*(+e*l*d-e*o*m-r*a*d+i*a*m+r*o*h-i*l*h)+u*(-s*o*h-e*c*d+e*o*f+s*a*d-i*a*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],x=t[13],p=t[14],u=t[15],b=d*p*l-x*f*l+x*c*m-o*p*m-d*c*u+o*f*u,v=_*f*l-h*p*l-_*c*m+a*p*m+h*c*u-a*f*u,T=h*x*l-_*d*l+_*o*m-a*x*m-h*o*u+a*d*u,I=_*d*c-h*x*c-_*o*f+a*x*f+h*o*p-a*d*p,C=e*b+i*v+s*T+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=b*R,t[1]=(x*f*r-d*p*r-x*s*m+i*p*m+d*s*u-i*f*u)*R,t[2]=(o*p*r-x*c*r+x*s*l-i*p*l-o*s*u+i*c*u)*R,t[3]=(d*c*r-o*f*r-d*s*l+i*f*l+o*s*m-i*c*m)*R,t[4]=v*R,t[5]=(h*p*r-_*f*r+_*s*m-e*p*m-h*s*u+e*f*u)*R,t[6]=(_*c*r-a*p*r-_*s*l+e*p*l+a*s*u-e*c*u)*R,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*m+e*c*m)*R,t[8]=T*R,t[9]=(_*d*r-h*x*r-_*i*m+e*x*m+h*i*u-e*d*u)*R,t[10]=(a*x*r-_*o*r+_*i*l-e*x*l-a*i*u+e*o*u)*R,t[11]=(h*o*r-a*d*r-h*i*l+e*d*l+a*i*m-e*o*m)*R,t[12]=I*R,t[13]=(h*x*s-_*d*s+_*i*f-e*x*f-h*i*p+e*d*p)*R,t[14]=(_*o*s-a*x*s-_*i*c+e*x*c+a*i*p-e*o*p)*R,t[15]=(a*d*s-h*o*s+h*i*c-e*d*c-a*i*f+e*o*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,_=r*d,x=a*h,p=a*d,u=o*d,b=c*l,v=c*h,T=c*d,I=i.x,C=i.y,R=i.z;return s[0]=(1-(x+u))*I,s[1]=(m+T)*I,s[2]=(_-v)*I,s[3]=0,s[4]=(m-T)*C,s[5]=(1-(f+u))*C,s[6]=(p+b)*C,s[7]=0,s[8]=(_+v)*R,s[9]=(p-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let l=1/r,h=1/a,d=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=En){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,_;if(o===En)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ur)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=En){let c=this.elements,l=1/(e-t),h=1/(i-s),d=1/(a-r),f=(e+t)*l,m=(i+s)*h,_,x;if(o===En)_=(a+r)*d,x=-2*d;else if(o===Ur)_=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ti=new L,tn=new fe,cf=new L(0,0,0),lf=new L(1,1,1),On=new L,ar=new L,He=new L,ml=new fe,gl=new Wn,kr=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kr.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hf=0,xl=new L,Ai=new Wn,yn=new fe,cr=new L,As=new L,uf=new L,df=new Wn,_l=new L(1,0,0),vl=new L(0,1,0),yl=new L(0,0,1),ff={type:"added"},pf={type:"removed"},Ne=class n extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new kr,i=new Wn,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Bt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cr.copy(t):cr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(As,cr,this.up):yn.lookAt(cr,As,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new L,Mn=new L,No=new L,Sn=new L,Ri=new L,Ci=new L,Ml=new L,Oo=new L,Fo=new L,zo=new L,lr=!1,ri=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){en.subVectors(s,e),Mn.subVectors(i,e),No.subVectors(t,e);let a=en.dot(en),o=en.dot(Mn),c=en.dot(No),l=Mn.dot(Mn),h=Mn.dot(No),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,i,s,r,a,o,c){return lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lr=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static isFrontFacing(t,e,i,s){return en.subVectors(i,e),Mn.subVectors(t,e),en.cross(Mn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),en.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,i),Ci.subVectors(r,i),Oo.subVectors(t,i);let c=Ri.dot(Oo),l=Ci.dot(Oo);if(c<=0&&l<=0)return e.copy(i);Fo.subVectors(t,s);let h=Ri.dot(Fo),d=Ci.dot(Fo);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Ri,a);zo.subVectors(t,r);let m=Ri.dot(zo),_=Ci.dot(zo);if(_>=0&&m<=_)return e.copy(r);let x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Ci,o);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Ml.subVectors(r,s),o=(d-h)/(d-h+(m-_)),e.copy(s).addScaledVector(Ml,o);let u=1/(p+x+f);return a=x*u,o=f*u,e.copy(i).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Bo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Tt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=Ba(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Bo(a,r,t+1/3),this.g=Bo(a,r,t),this.b=Bo(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let i=gh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Zt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ue(Ae.r*255,0,255))*65536+Math.round(Ue(Ae.g*255,0,255))*256+Math.round(Ue(Ae.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ae.copy(this),e);let i=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Me){Zt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,i=Ae.g,s=Ae.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(hr);let i=Cs(Fn.h,hr.h,e),s=Cs(Fn.s,hr.s,e),r=Cs(Fn.l,hr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Tt;Tt.NAMES=gh;var mf=0,Rn=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=ki,this.side=je,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==je&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Zi=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new L,ur=new Ht,Ke=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}};var Vr=class extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hr=class extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}};var gf=0,Ze=new fe,ko=new Ne,Pi=new L,Ge=new li,Rs=new li,ve=new L,Oe=class n extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mh(t)?Hr:Vr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ge.min,Rs.min),Ge.expandByPoint(ve),ve.addVectors(Ge.max,Rs.max),Ge.expandByPoint(ve)):(Ge.expandByPoint(Rs.min),Ge.expandByPoint(Rs.max))}Ge.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ve.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),ve.add(Pi)),s=Math.max(s,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new L,h[w]=new L;let d=new L,f=new L,m=new L,_=new Ht,x=new Ht,p=new Ht,u=new L,b=new L;function v(w,V,W){d.fromArray(s,w*3),f.fromArray(s,V*3),m.fromArray(s,W*3),_.fromArray(a,w*2),x.fromArray(a,V*2),p.fromArray(a,W*2),f.sub(d),m.sub(d),x.sub(_),p.sub(_);let Z=1/(x.x*p.y-p.x*x.y);isFinite(Z)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Z),b.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(Z),l[w].add(u),l[V].add(u),l[W].add(u),h[w].add(b),h[V].add(b),h[W].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,V=T.length;w<V;++w){let W=T[w],Z=W.start,A=W.count;for(let D=Z,B=Z+A;D<B;D+=3)v(i[D+0],i[D+1],i[D+2])}let I=new L,C=new L,R=new L,q=new L;function S(w){R.fromArray(r,w*3),q.copy(R);let V=l[w];I.copy(V),I.sub(R.multiplyScalar(R.dot(V))).normalize(),C.crossVectors(q,V);let Z=C.dot(h[w])<0?-1:1;c[w*4]=I.x,c[w*4+1]=I.y,c[w*4+2]=I.z,c[w*4+3]=Z}for(let w=0,V=T.length;w<V;++w){let W=T[w],Z=W.start,A=W.count;for(let D=Z,B=Z+A;D<B;D+=3)S(i[D+0]),S(i[D+1]),S(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)f[_++]=l[m++]}return new Ke(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],m=t(f,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sl=new fe,ti=new Ns,dr=new qi,bl=new L,Ii=new L,Li=new L,Di=new L,Vo=new L,fr=new L,pr=new Ht,mr=new Ht,gr=new Ht,El=new L,wl=new L,Tl=new L,xr=new L,_r=new L,Se=class extends Ne{constructor(t=new Oe,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Vo.fromBufferAttribute(d,t),a?fr.addScaledVector(Vo,h):fr.addScaledVector(Vo.sub(e),h))}e.add(fr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(dr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(dr,bl)===null||ti.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Sl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let p=f[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,I=v;T<I;T+=3){let C=o.getX(T),R=o.getX(T+1),q=o.getX(T+2);s=vr(this,u,t,i,l,h,d,C,R,q),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let b=o.getX(p),v=o.getX(p+1),T=o.getX(p+2);s=vr(this,a,t,i,l,h,d,b,v,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let p=f[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,I=v;T<I;T+=3){let C=T,R=T+1,q=T+2;s=vr(this,u,t,i,l,h,d,C,R,q),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){let b=p,v=p+1,T=p+2;s=vr(this,a,t,i,l,h,d,b,v,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function xf(n,t,e,i,s,r,a,o){let c;if(t.side===Be?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===je,o),c===null)return null;_r.copy(o),_r.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(_r);return l<e.near||l>e.far?null:{distance:l,point:_r.clone(),object:n}}function vr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Ii),n.getVertexPosition(c,Li),n.getVertexPosition(l,Di);let h=xf(n,t,e,i,Ii,Li,Di,xr);if(h){s&&(pr.fromBufferAttribute(s,o),mr.fromBufferAttribute(s,c),gr.fromBufferAttribute(s,l),h.uv=ri.getInterpolation(xr,Ii,Li,Di,pr,mr,gr,new Ht)),r&&(pr.fromBufferAttribute(r,o),mr.fromBufferAttribute(r,c),gr.fromBufferAttribute(r,l),h.uv1=ri.getInterpolation(xr,Ii,Li,Di,pr,mr,gr,new Ht),h.uv2=h.uv1),a&&(El.fromBufferAttribute(a,o),wl.fromBufferAttribute(a,c),Tl.fromBufferAttribute(a,l),h.normal=ri.getInterpolation(xr,Ii,Li,Di,El,wl,Tl,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};ri.getNormal(Ii,Li,Di,d.normal),h.face=d}return h}var Cn=class n extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function _(x,p,u,b,v,T,I,C,R,q,S){let w=T/R,V=I/q,W=T/2,Z=I/2,A=C/2,D=R+1,B=q+1,X=0,H=0,Y=new L;for(let $=0;$<B;$++){let Q=$*V-Z;for(let ct=0;ct<D;ct++){let G=ct*w-W;Y[x]=G*b,Y[p]=Q*v,Y[u]=A,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[u]=C>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ct/R),d.push(1-$/q),X+=1}}for(let $=0;$<q;$++)for(let Q=0;Q<R;Q++){let ct=f+Q+D*$,G=f+Q+D*($+1),J=f+(Q+1)+D*($+1),at=f+(Q+1)+D*$;c.push(ct,G,at),c.push(G,J,at),H+=6}o.addGroup(m,H,S),m+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Le(n){let t={};for(let e=0;e<n.length;e++){let i=Ji(n[e]);for(let s in i)t[s]=i[s]}return t}function _f(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xh(n){return n.getRenderTarget()===null?n.outputColorSpace:Zt.workingColorSpace}var vf={clone:Ji,merge:Le},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=_f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Gr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},We=class extends Gr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vi*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ui=-90,Ni=1,aa=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Ui,Ni,t,e);s.layers=this.layers,this.add(s);let r=new We(Ui,Ni,t,e);r.layers=this.layers,this.add(r);let a=new We(Ui,Ni,t,e);a.layers=this.layers,this.add(a);let o=new We(Ui,Ni,t,e);o.layers=this.layers,this.add(o);let c=new We(Ui,Ni,t,e);c.layers=this.layers,this.add(c);let l=new We(Ui,Ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Wr=class extends an{constructor(t,e,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ca=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ci?Me:$e),this.texture=new Wr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:kn});r.uniforms.tEquirect.value=e;let a=new Se(s,r),o=e.minFilter;return e.minFilter===Ls&&(e.minFilter=Je),new aa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Ho=new L,Sf=new L,bf=new Bt,nn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ho.subVectors(i,e).cross(Sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ho),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||bf.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new qi,yr=new L,Fs=class{constructor(t=new nn,e=new nn,i=new nn,s=new nn,r=new nn,a=new nn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=En){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],x=s[10],p=s[11],u=s[12],b=s[13],v=s[14],T=s[15];if(i[0].setComponents(c-r,f-l,p-m,T-u).normalize(),i[1].setComponents(c+r,f+l,p+m,T+u).normalize(),i[2].setComponents(c+a,f+h,p+_,T+b).normalize(),i[3].setComponents(c-a,f-h,p-_,T-b).normalize(),i[4].setComponents(c-o,f-d,p-x,T-v).normalize(),e===En)i[5].setComponents(c+o,f+d,p+x,T+v).normalize();else if(e===Ur)i[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _h(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ef(n,t){let e=t.isWebGL2,i=new WeakMap;function s(l,h){let d=l.array,f=l.usage,m=d.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,d,f),l.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){let f=h.array,m=h._updateRange,_=h.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&_.length===0&&n.bufferSubData(d,0,f),_.length!==0){for(let x=0,p=_.length;x<p;x++){let u=_[x];e?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}var $i=class n extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){let b=u*f-a;for(let v=0;v<l;v++){let T=v*d-r;_.push(T,-b,0),x.push(0,0,1),p.push(v/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){let v=b+l*u,T=b+l*(u+1),I=b+1+l*(u+1),C=b+1+l*u;m.push(v,T,C),m.push(T,I,C)}this.setIndex(m),this.setAttribute("position",new pe(_,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Bf=`#ifdef USE_BUMPMAP
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$f=`vec3 transformedNormal = objectNormal;
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
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`
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
}`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Ep=`struct PhysicalMaterial {
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
}`,wp=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
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
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,$m=`#define TOON
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
}`,Km=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:wf,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:If,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Of,bsdfs:Ff,iridescence_fragment:zf,bumpmap_pars_fragment:Bf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:Yf,color_vertex:qf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Kf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:_p,envmap_vertex:ap,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:vp,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Fp,morphcolor_vertex:zp,morphnormal_vertex:Bp,morphtarget_pars_vertex:kp,morphtarget_vertex:Vp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:Yp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:vm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:Em,background_frag:wm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Om,linedashed_frag:Fm,meshbasic_vert:zm,meshbasic_frag:Bm,meshlambert_vert:km,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:Ym,meshphong_frag:qm,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:jm,points_frag:Qm,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},it={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},fn={basic:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Le([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Le([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Le([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Le([it.points,it.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Le([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Le([it.common,it.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Le([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Le([it.sprite,it.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Le([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Le([it.lights,it.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};fn.physical={uniforms:Le([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Mr={r:0,b:0,g:0};function sg(n,t,e,i,s,r,a){let o=new Tt(0),c=r===!0?0:1,l,h,d=null,f=0,m=null;function _(p,u){let b=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),b=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jr)?(h===void 0&&(h=new Se(new Cn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==Qt,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Se(new $i(2,2),new cn({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,u){p.getRGB(Mr,xh(n)),i.buffers.color.setClear(Mr.r,Mr.g,Mr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:_}}function rg(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function d(A,D,B,X,H){let Y=!1;if(a){let $=x(X,B,D);l!==$&&(l=$,m(l.object)),Y=u(A,X,B,H),Y&&b(A,X,B,H)}else{let $=D.wireframe===!0;(l.geometry!==X.id||l.program!==B.id||l.wireframe!==$)&&(l.geometry=X.id,l.program=B.id,l.wireframe=$,Y=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,q(A,D,B,X),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(A){return i.isWebGL2?n.bindVertexArray(A):r.bindVertexArrayOES(A)}function _(A){return i.isWebGL2?n.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function x(A,D,B){let X=B.wireframe===!0,H=o[A.id];H===void 0&&(H={},o[A.id]=H);let Y=H[D.id];Y===void 0&&(Y={},H[D.id]=Y);let $=Y[X];return $===void 0&&($=p(f()),Y[X]=$),$}function p(A){let D=[],B=[],X=[];for(let H=0;H<s;H++)D[H]=0,B[H]=0,X[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:X,object:A,attributes:{},index:null}}function u(A,D,B,X){let H=l.attributes,Y=D.attributes,$=0,Q=B.getAttributes();for(let ct in Q)if(Q[ct].location>=0){let J=H[ct],at=Y[ct];if(at===void 0&&(ct==="instanceMatrix"&&A.instanceMatrix&&(at=A.instanceMatrix),ct==="instanceColor"&&A.instanceColor&&(at=A.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;$++}return l.attributesNum!==$||l.index!==X}function b(A,D,B,X){let H={},Y=D.attributes,$=0,Q=B.getAttributes();for(let ct in Q)if(Q[ct].location>=0){let J=Y[ct];J===void 0&&(ct==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),ct==="instanceColor"&&A.instanceColor&&(J=A.instanceColor));let at={};at.attribute=J,J&&J.data&&(at.data=J.data),H[ct]=at,$++}l.attributes=H,l.attributesNum=$,l.index=X}function v(){let A=l.newAttributes;for(let D=0,B=A.length;D<B;D++)A[D]=0}function T(A){I(A,0)}function I(A,D){let B=l.newAttributes,X=l.enabledAttributes,H=l.attributeDivisors;B[A]=1,X[A]===0&&(n.enableVertexAttribArray(A),X[A]=1),H[A]!==D&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,D),H[A]=D)}function C(){let A=l.newAttributes,D=l.enabledAttributes;for(let B=0,X=D.length;B<X;B++)D[B]!==A[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function R(A,D,B,X,H,Y,$){$===!0?n.vertexAttribIPointer(A,D,B,H,Y):n.vertexAttribPointer(A,D,B,X,H,Y)}function q(A,D,B,X){if(i.isWebGL2===!1&&(A.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let H=X.attributes,Y=B.getAttributes(),$=D.defaultAttributeValues;for(let Q in Y){let ct=Y[Q];if(ct.location>=0){let G=H[Q];if(G===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),G!==void 0){let J=G.normalized,at=G.itemSize,dt=e.get(G);if(dt===void 0)continue;let ft=dt.buffer,Ct=dt.type,It=dt.bytesPerElement,St=i.isWebGL2===!0&&(Ct===n.INT||Ct===n.UNSIGNED_INT||G.gpuType===sh);if(G.isInterleavedBufferAttribute){let Vt=G.data,N=Vt.stride,Re=G.offset;if(Vt.isInstancedInterleavedBuffer){for(let _t=0;_t<ct.locationSize;_t++)I(ct.location+_t,Vt.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let _t=0;_t<ct.locationSize;_t++)T(ct.location+_t);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let _t=0;_t<ct.locationSize;_t++)R(ct.location+_t,at/ct.locationSize,Ct,J,N*It,(Re+at/ct.locationSize*_t)*It,St)}else{if(G.isInstancedBufferAttribute){for(let Vt=0;Vt<ct.locationSize;Vt++)I(ct.location+Vt,G.meshPerAttribute);A.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Vt=0;Vt<ct.locationSize;Vt++)T(ct.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Vt=0;Vt<ct.locationSize;Vt++)R(ct.location+Vt,at/ct.locationSize,Ct,J,at*It,at/ct.locationSize*Vt*It,St)}}else if($!==void 0){let J=$[Q];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(ct.location,J);break;case 3:n.vertexAttrib3fv(ct.location,J);break;case 4:n.vertexAttrib4fv(ct.location,J);break;default:n.vertexAttrib1fv(ct.location,J)}}}}C()}function S(){W();for(let A in o){let D=o[A];for(let B in D){let X=D[B];for(let H in X)_(X[H].object),delete X[H];delete D[B]}delete o[A]}}function w(A){if(o[A.id]===void 0)return;let D=o[A.id];for(let B in D){let X=D[B];for(let H in X)_(X[H].object),delete X[H];delete D[B]}delete o[A.id]}function V(A){for(let D in o){let B=o[D];if(B[A.id]===void 0)continue;let X=B[A.id];for(let H in X)_(X[H].object),delete X[H];delete B[A.id]}}function W(){Z(),h=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:T,disableUnusedAttributes:C}}function og(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,d){n.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,d,f),e.update(d,r,f)}function l(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],d[_]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function ag(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=a||t.has("OES_texture_float"),I=v&&T,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:C}}function cg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new nn,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let b=r?0:i,v=b*4,T=u.clippingState||null;c.value=T,T=h(_,f,v,m);for(let I=0;I!==v;++I)T[I]=e[I];u.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,_){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,_!==!0||p===null){let u=m+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,T=m;v!==x;++v,T+=4)a.copy(d[v]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function lg(n){let t=new WeakMap;function e(a,o){return o===Qo?a.mapping=Wi:o===ta&&(a.mapping=Xi),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qo||o===ta)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ca(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ki=class extends Gr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zi=4,Al=[.125,.215,.35,.446,.526,.582],si=20,Go=new Ki,Rl=new Tt,Wo=null,Xo=0,Yo=0,ni=(1+Math.sqrt(5))/2,Oi=1/ni,Cl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ni,Oi),new L(0,ni,-Oi),new L(Oi,0,ni),new L(-Oi,0,ni),new L(ni,Oi,0),new L(-ni,Oi,0)],Xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,Yo),t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Ds,format:on,colorSpace:Tn,depthBuffer:!1},s=Pl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(r)),this._blurMaterial=ug(r,t,e)}return s}_compileMaterial(t){let e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,i,s){let o=new We(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Rl),h.toneMapping=Vn,h.autoClear=!1;let m=new Zi({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new Se(new Cn,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(Rl),x=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):b===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let v=this._cubeSize;Sr(s,b*v,u>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Sr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Go)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cl[(s-1)%Cl.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Se(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),x=r/_,p=isFinite(r)?1+Math.floor(h*x):si;p>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${si}`);let u=[],b=0;for(let R=0;R<si;++R){let q=R/x,S=Math.exp(-q*q/2);u.push(S),R===0?b+=S:R<p&&(b+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;let T=this._sizeLods[s],I=3*T*(s>v-zi?s-v+zi:0),C=4*(this._cubeSize-T);Sr(e,I,C,3*T,2*T),c.setRenderTarget(e),c.render(d,Go)}};function hg(n){let t=[],e=[],i=[],s=n,r=n-zi+1+Al.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>n-zi?c=Al[a-n+zi-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,x=3,p=2,u=1,b=new Float32Array(x*_*m),v=new Float32Array(p*_*m),T=new Float32Array(u*_*m);for(let C=0;C<m;C++){let R=C%3*2/3-1,q=C>2?0:-1,S=[R,q,0,R+2/3,q,0,R+2/3,q+1,0,R,q,0,R+2/3,q+1,0,R,q+1,0];b.set(S,x*_*C),v.set(f,p*_*C);let w=[C,C,C,C,C,C];T.set(w,u*_*C)}let I=new Oe;I.setAttribute("position",new Ke(b,x)),I.setAttribute("uv",new Ke(v,p)),I.setAttribute("faceIndex",new Ke(T,u)),t.push(I),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Pl(n,t,e){let i=new An(n,t,e);return i.texture.mapping=jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ug(n,t,e){let i=new Float32Array(si),s=new L(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ka(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Il(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ll(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function dg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Qo||c===ta,h=c===Wi||c===Xi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Xr(n)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(l&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Xr(n));let f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function fg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pg(n,t,e,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let _ in f)t.update(f[_],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let _ in m){let x=m[_];for(let p=0,u=x.length;p<u;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(d){let f=[],m=d.index,_=d.attributes.position,x=0;if(m!==null){let b=m.array;x=m.version;for(let v=0,T=b.length;v<T;v+=3){let I=b[v+0],C=b[v+1],R=b[v+2];f.push(I,C,C,R,R,I)}}else if(_!==void 0){let b=_.array;x=_.version;for(let v=0,T=b.length/3-1;v<T;v+=3){let I=v+0,C=v+1,R=v+2;f.push(I,C,C,R,R,I)}}else return;let p=new(mh(f)?Hr:Vr)(f,1);p.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function mg(n,t,e,i){let s=i.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,_){n.drawElements(r,_,o,m*c),e.update(_,r,1)}function d(m,_,x){if(x===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,o,m*c,x),e.update(_,r,x)}function f(m,_,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/c,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,x);let u=0;for(let b=0;b<x;b++)u+=_[b];e.update(u,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function gg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xg(n,t){return n[0]-t[0]}function _g(n,t){return Math.abs(t[1])-Math.abs(n[1])}function vg(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new ye,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==_){let A=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",A)};x!==void 0&&x.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],q=0;b===!0&&(q=1),v===!0&&(q=2),T===!0&&(q=3);let S=h.attributes.position.count*q,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let V=new Float32Array(S*w*4*_),W=new Br(V,S,w,_);W.type=Bn,W.needsUpdate=!0;let Z=q*4;for(let D=0;D<_;D++){let B=I[D],X=C[D],H=R[D],Y=S*w*4*D;for(let $=0;$<B.count;$++){let Q=$*Z;b===!0&&(a.fromBufferAttribute(B,$),V[Y+Q+0]=a.x,V[Y+Q+1]=a.y,V[Y+Q+2]=a.z,V[Y+Q+3]=0),v===!0&&(a.fromBufferAttribute(X,$),V[Y+Q+4]=a.x,V[Y+Q+5]=a.y,V[Y+Q+6]=a.z,V[Y+Q+7]=0),T===!0&&(a.fromBufferAttribute(H,$),V[Y+Q+8]=a.x,V[Y+Q+9]=a.y,V[Y+Q+10]=a.z,V[Y+Q+11]=H.itemSize===4?a.w:1)}}x={count:_,texture:W,size:new Ht(S,w)},r.set(h,x),h.addEventListener("dispose",A)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,_=i[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<m;v++){let T=_[v];T[0]=v,T[1]=f[v]}_.sort(_g);for(let v=0;v<8;v++)v<m&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(xg);let x=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let T=o[v],I=T[0],C=T[1];I!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+v)!==x[I]&&h.setAttribute("morphTarget"+v,x[I]),p&&h.getAttribute("morphNormal"+v)!==p[I]&&h.setAttribute("morphNormal"+v,p[I]),s[v]=C,u+=C):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function yg(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Yr=class extends an{constructor(t,e,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:ai,h!==ai&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ai&&(i=zn),i===void 0&&h===Yi&&(i=oi),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=c!==void 0?c:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vh=new an,yh=new Yr(1,1);yh.compareFunction=fh;var Mh=new Br,Sh=new oa,bh=new Wr,Dl=[],Ul=[],Nl=new Float32Array(16),Ol=new Float32Array(9),Fl=new Float32Array(4);function es(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Dl[s];if(r===void 0&&(r=new Float32Array(s),Dl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function to(n,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function Eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function wg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Fl.set(i),n.uniformMatrix2fv(this.addr,!1,Fl),ge(e,i)}}function Tg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Ol.set(i),n.uniformMatrix3fv(this.addr,!1,Ol),ge(e,i)}}function Ag(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,i))return;Nl.set(i),n.uniformMatrix4fv(this.addr,!1,Nl),ge(e,i)}}function Rg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function Lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function Ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function Ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function Og(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?yh:vh;e.setTexture2D(t||r,s)}function Fg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Sh,s)}function zg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bh,s)}function Bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Mh,s)}function kg(n){switch(n){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Bg}}function Vg(n,t){n.uniform1fv(this.addr,t)}function Hg(n,t){let e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function Gg(n,t){let e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function Wg(n,t){let e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function Xg(n,t){let e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yg(n,t){let e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qg(n,t){let e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zg(n,t){n.uniform1iv(this.addr,t)}function Jg(n,t){n.uniform2iv(this.addr,t)}function $g(n,t){n.uniform3iv(this.addr,t)}function Kg(n,t){n.uniform4iv(this.addr,t)}function jg(n,t){n.uniform1uiv(this.addr,t)}function Qg(n,t){n.uniform2uiv(this.addr,t)}function t0(n,t){n.uniform3uiv(this.addr,t)}function e0(n,t){n.uniform4uiv(this.addr,t)}function n0(n,t,e){let i=this.cache,s=t.length,r=to(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vh,r[a])}function i0(n,t,e){let i=this.cache,s=t.length,r=to(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sh,r[a])}function s0(n,t,e){let i=this.cache,s=t.length,r=to(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bh,r[a])}function r0(n,t,e){let i=this.cache,s=t.length,r=to(e,s);me(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mh,r[a])}function o0(n){switch(n){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return $g;case 35669:case 35673:return Kg;case 5125:return jg;case 36294:return Qg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}var la=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}},ha=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}},ua=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},qo=/(\w+)(\])?(\[|\.)?/g;function zl(n,t){n.seq.push(t),n.map[t.id]=t}function a0(n,t,e){let i=n.name,s=i.length;for(qo.lastIndex=0;;){let r=qo.exec(i),a=qo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zl(e,l===void 0?new la(o,n,t):new ha(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new ua(o),zl(e,d)),e=d}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);a0(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Bl(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var c0=37297,l0=0;function h0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function u0(n){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(n),i;switch(t===e?i="":t===Dr&&e===Lr?i="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Dr&&(i="LinearSRGBToLinearDisplayP3"),n){case Tn:case Qr:return[i,"LinearTransferOETF"];case Me:case za:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kl(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+h0(n.getShaderSource(t),a)}else return s}function d0(n,t){let e=u0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function f0(n,t){let e;switch(t){case xd:e="Linear";break;case _d:e="Reinhard";break;case vd:e="OptimizedCineon";break;case yd:e="ACESFilmic";break;case Sd:e="AgX";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function p0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function m0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bi).join(`
`)}function g0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function x0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Bi(n){return n!==""}function Vl(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(n){return n.replace(_0,y0)}var v0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function y0(n,t){let e=Dt[t];if(e===void 0){let i=v0.get(t);if(i!==void 0)e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return da(e)}var M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(n){return n.replace(M0,S0)}function S0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Na?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function E0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function w0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function T0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oa:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function A0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function R0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=b0(e),l=E0(e),h=w0(e),d=T0(e),f=A0(e),m=e.isWebGL2?"":p0(e),_=m0(e),x=g0(r),p=s.createProgram(),u,b,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bi).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bi).join(`
`),b.length>0&&(b+=`
`)):(u=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),b=[m,Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?f0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,d0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),a=da(a),a=Vl(a,e),a=Hl(a,e),o=da(o),o=Vl(o,e),o=Hl(o,e),a=Gl(a),o=Gl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let T=v+u+a,I=v+b+o,C=Bl(s,s.VERTEX_SHADER,T),R=Bl(s,s.FRAGMENT_SHADER,I);s.attachShader(p,C),s.attachShader(p,R),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function q(W){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(p).trim(),A=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(R).trim(),B=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,C,R);else{let H=kl(s,C,"vertex"),Y=kl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+H+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(A===""||D==="")&&(X=!1);X&&(W.diagnostics={runnable:B,programLog:Z,vertexShader:{log:A,prefix:u},fragmentShader:{log:D,prefix:b}})}s.deleteShader(C),s.deleteShader(R),S=new Gi(s,p),w=x0(s,p)}let S;this.getUniforms=function(){return S===void 0&&q(this),S};let w;this.getAttributes=function(){return w===void 0&&q(this),w};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,c0)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=R,this}var C0=0,fa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new pa(t),e.set(t,i)),i}},pa=class{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}};function P0(n,t,e,i,s,r,a){let o=new Os,c=new fa,l=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,w,V,W,Z){let A=W.fog,D=Z.geometry,B=S.isMeshStandardMaterial?W.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),H=X&&X.mapping===jr?X.image.height:null,Y=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=$!==void 0?$.length:0,ct=0;D.morphAttributes.position!==void 0&&(ct=1),D.morphAttributes.normal!==void 0&&(ct=2),D.morphAttributes.color!==void 0&&(ct=3);let G,J,at,dt;if(Y){let Ce=fn[Y];G=Ce.vertexShader,J=Ce.fragmentShader}else G=S.vertexShader,J=S.fragmentShader,c.update(S),at=c.getVertexShaderID(S),dt=c.getFragmentShaderID(S);let ft=n.getRenderTarget(),Ct=Z.isInstancedMesh===!0,It=Z.isBatchedMesh===!0,St=!!S.map,Vt=!!S.matcap,N=!!X,Re=!!S.aoMap,_t=!!S.lightMap,At=!!S.bumpMap,pt=!!S.normalMap,ie=!!S.displacementMap,Ut=!!S.emissiveMap,E=!!S.metalnessMap,y=!!S.roughnessMap,F=S.anisotropy>0,tt=S.clearcoat>0,j=S.iridescence>0,et=S.sheen>0,mt=S.transmission>0,ot=F&&!!S.anisotropyMap,ht=tt&&!!S.clearcoatMap,Mt=tt&&!!S.clearcoatNormalMap,Nt=tt&&!!S.clearcoatRoughnessMap,K=j&&!!S.iridescenceMap,qt=j&&!!S.iridescenceThicknessMap,kt=et&&!!S.sheenColorMap,wt=et&&!!S.sheenRoughnessMap,xt=!!S.specularMap,ut=!!S.specularColorMap,Lt=!!S.specularIntensityMap,Xt=mt&&!!S.transmissionMap,oe=mt&&!!S.thicknessMap,Ft=!!S.gradientMap,nt=!!S.alphaMap,P=S.alphaTest>0,st=!!S.alphaHash,rt=!!S.extensions,bt=!!D.attributes.uv1,vt=!!D.attributes.uv2,$t=!!D.attributes.uv3,Kt=Vn;return S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Kt=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:J,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:It,instancing:Ct,instancingColor:Ct&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Tn,map:St,matcap:Vt,envMap:N,envMapMode:N&&X.mapping,envMapCubeUVHeight:H,aoMap:Re,lightMap:_t,bumpMap:At,normalMap:pt,displacementMap:f&&ie,emissiveMap:Ut,normalMapObjectSpace:pt&&S.normalMapType===Ud,normalMapTangentSpace:pt&&S.normalMapType===dh,metalnessMap:E,roughnessMap:y,anisotropy:F,anisotropyMap:ot,clearcoat:tt,clearcoatMap:ht,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Nt,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:qt,sheen:et,sheenColorMap:kt,sheenRoughnessMap:wt,specularMap:xt,specularColorMap:ut,specularIntensityMap:Lt,transmission:mt,transmissionMap:Xt,thicknessMap:oe,gradientMap:Ft,opaque:S.transparent===!1&&S.blending===ki,alphaMap:nt,alphaTest:P,alphaHash:st,combine:S.combine,mapUv:St&&x(S.map.channel),aoMapUv:Re&&x(S.aoMap.channel),lightMapUv:_t&&x(S.lightMap.channel),bumpMapUv:At&&x(S.bumpMap.channel),normalMapUv:pt&&x(S.normalMap.channel),displacementMapUv:ie&&x(S.displacementMap.channel),emissiveMapUv:Ut&&x(S.emissiveMap.channel),metalnessMapUv:E&&x(S.metalnessMap.channel),roughnessMapUv:y&&x(S.roughnessMap.channel),anisotropyMapUv:ot&&x(S.anisotropyMap.channel),clearcoatMapUv:ht&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(S.sheenRoughnessMap.channel),specularMapUv:xt&&x(S.specularMap.channel),specularColorMapUv:ut&&x(S.specularColorMap.channel),specularIntensityMapUv:Lt&&x(S.specularIntensityMap.channel),transmissionMapUv:Xt&&x(S.transmissionMap.channel),thicknessMapUv:oe&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:vt,vertexUv3s:$t,pointsUvs:Z.isPoints===!0&&!!D.attributes.uv&&(St||nt),fog:!!A,useFog:S.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ct,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Kt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:rt&&S.extensions.derivatives===!0,extensionFragDepth:rt&&S.extensions.fragDepth===!0,extensionDrawBuffers:rt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)w.push(V),w.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(b(w,S),v(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function b(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let w=_[S.type],V;if(w){let W=fn[w];V=vf.clone(W.uniforms)}else V=S.uniforms;return V}function I(S,w){let V;for(let W=0,Z=l.length;W<Z;W++){let A=l[W];if(A.cacheKey===w){V=A,++V.usedTimes;break}}return V===void 0&&(V=new R0(n,w,S,r),l.push(V)),V}function C(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function R(S){c.remove(S)}function q(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:I,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:q}}function I0(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function L0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yl(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,f,m,_,x,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),t++,u}function o(d,f,m,_,x,p){let u=a(d,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,_,x,p){let u=a(d,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||L0),i.length>1&&i.sort(f||Xl),s.length>1&&s.sort(f||Xl)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function D0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Yl,n.set(i,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function U0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function N0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var O0=0;function F0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function z0(n,t){let e=new U0,i=N0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new fe,o=new fe;function c(h,d){let f=0,m=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,p=0,u=0,b=0,v=0,T=0,I=0,C=0,R=0,q=0,S=0;h.sort(F0);let w=d===!0?Math.PI:1;for(let W=0,Z=h.length;W<Z;W++){let A=h[W],D=A.color,B=A.intensity,X=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=D.r*B*w,m+=D.g*B*w,_+=D.b*B*w;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(A.sh.coefficients[Y],B);S++}else if(A.isDirectionalLight){let Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity*w),A.castShadow){let $=A.shadow,Q=i.get(A);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,s.directionalShadow[x]=Q,s.directionalShadowMap[x]=H,s.directionalShadowMatrix[x]=A.shadow.matrix,T++}s.directional[x]=Y,x++}else if(A.isSpotLight){let Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(D).multiplyScalar(B*w),Y.distance=X,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,s.spot[u]=Y;let $=A.shadow;if(A.map&&(s.spotLightMap[R]=A.map,R++,$.updateMatrices(A),A.castShadow&&q++),s.spotLightMatrix[u]=$.matrix,A.castShadow){let Q=i.get(A);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,s.spotShadow[u]=Q,s.spotShadowMap[u]=H,C++}u++}else if(A.isRectAreaLight){let Y=e.get(A);Y.color.copy(D).multiplyScalar(B),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),s.rectArea[b]=Y,b++}else if(A.isPointLight){let Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity*w),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){let $=A.shadow,Q=i.get(A);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=H,s.pointShadowMatrix[p]=A.shadow.matrix,I++}s.point[p]=Y,p++}else if(A.isHemisphereLight){let Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(B*w),Y.groundColor.copy(A.groundColor).multiplyScalar(B*w),s.hemi[v]=Y,v++}}b>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;let V=s.hash;(V.directionalLength!==x||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==b||V.hemiLength!==v||V.numDirectionalShadows!==T||V.numPointShadows!==I||V.numSpotShadows!==C||V.numSpotMaps!==R||V.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=b,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+R-q,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=S,V.directionalLength=x,V.pointLength=p,V.spotLength=u,V.rectAreaLength=b,V.hemiLength=v,V.numDirectionalShadows=T,V.numPointShadows=I,V.numSpotShadows=C,V.numSpotMaps=R,V.numLightProbes=S,s.version=O0++)}function l(h,d){let f=0,m=0,_=0,x=0,p=0,u=d.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let T=h[b];if(T.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),f++}else if(T.isSpotLight){let I=s.spot[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),_++}else if(T.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(u),o.identity(),a.copy(T.matrixWorld),a.premultiply(u),o.extractRotation(a),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:s}}function ql(n,t){let e=new z0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function c(d){e.setup(i,d)}function l(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function B0(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),c;return o===void 0?(c=new ql(n,t),e.set(r,[c])):a>=o.length?(c=new ql(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var ma=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ga=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function H0(n,t,e){let i=new Fs,s=new Ht,r=new Ht,a=new ye,o=new ma({depthPacking:Dd}),c=new ga,l={},h=e.maxTextureSize,d={[je]:Be,[Be]:je,[sn]:sn},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:k0,fragmentShader:V0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Oe;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Se(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let u=this.type;this.render=function(C,R,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(kn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=u!==bn&&this.type===bn,A=u===bn&&this.type!==bn;for(let D=0,B=C.length;D<B;D++){let X=C[D],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Y=H.getFrameExtents();if(s.multiply(Y),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||Z===!0||A===!0){let Q=this.type!==bn?{minFilter:De,magFilter:De}:{};H.map!==null&&H.map.dispose(),H.map=new An(s.x,s.y,Q),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let $=H.getViewportCount();for(let Q=0;Q<$;Q++){let ct=H.getViewport(Q);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),W.viewport(a),H.updateMatrices(X,Q),i=H.getFrustum(),T(R,q,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&b(H,q),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(S,w,V)};function b(C,R){let q=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,q,f,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,q,m,x,null)}function v(C,R,q,S){let w=null,V=q.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)w=V;else if(w=q.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=w.uuid,Z=R.uuid,A=l[W];A===void 0&&(A={},l[W]=A);let D=A[Z];D===void 0&&(D=w.clone(),A[Z]=D,R.addEventListener("dispose",I)),w=D}if(w.visible=R.visible,w.wireframe=R.wireframe,S===bn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=n.properties.get(w);W.light=q}return w}function T(C,R,q,S,w){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===bn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld);let Z=t.update(C),A=C.material;if(Array.isArray(A)){let D=Z.groups;for(let B=0,X=D.length;B<X;B++){let H=D[B],Y=A[H.materialIndex];if(Y&&Y.visible){let $=v(C,Y,S,w);C.onBeforeShadow(n,C,R,q,Z,$,H),n.renderBufferDirect(q,null,Z,$,C,H),C.onAfterShadow(n,C,R,q,Z,$,H)}}}else if(A.visible){let D=v(C,A,S,w);C.onBeforeShadow(n,C,R,q,Z,D,null),n.renderBufferDirect(q,null,Z,D,C,null),C.onAfterShadow(n,C,R,q,Z,D,null)}}let W=C.children;for(let Z=0,A=W.length;Z<A;Z++)T(W[Z],R,q,S,w)}function I(C){C.target.removeEventListener("dispose",I);for(let q in l){let S=l[q],w=C.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function G0(n,t,e){let i=e.isWebGL2;function s(){let P=!1,st=new ye,rt=null,bt=new ye(0,0,0,0);return{setMask:function(vt){rt!==vt&&!P&&(n.colorMask(vt,vt,vt,vt),rt=vt)},setLocked:function(vt){P=vt},setClear:function(vt,$t,Kt,xe,Ce){Ce===!0&&(vt*=xe,$t*=xe,Kt*=xe),st.set(vt,$t,Kt,xe),bt.equals(st)===!1&&(n.clearColor(vt,$t,Kt,xe),bt.copy(st))},reset:function(){P=!1,rt=null,bt.set(-1,0,0,0)}}}function r(){let P=!1,st=null,rt=null,bt=null;return{setTest:function(vt){vt?It(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(vt){st!==vt&&!P&&(n.depthMask(vt),st=vt)},setFunc:function(vt){if(rt!==vt){switch(vt){case cd:n.depthFunc(n.NEVER);break;case ld:n.depthFunc(n.ALWAYS);break;case hd:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case ud:n.depthFunc(n.EQUAL);break;case dd:n.depthFunc(n.GEQUAL);break;case fd:n.depthFunc(n.GREATER);break;case pd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=vt}},setLocked:function(vt){P=vt},setClear:function(vt){bt!==vt&&(n.clearDepth(vt),bt=vt)},reset:function(){P=!1,st=null,rt=null,bt=null}}}function a(){let P=!1,st=null,rt=null,bt=null,vt=null,$t=null,Kt=null,xe=null,Ce=null;return{setTest:function(jt){P||(jt?It(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(jt){st!==jt&&!P&&(n.stencilMask(jt),st=jt)},setFunc:function(jt,Pe,dn){(rt!==jt||bt!==Pe||vt!==dn)&&(n.stencilFunc(jt,Pe,dn),rt=jt,bt=Pe,vt=dn)},setOp:function(jt,Pe,dn){($t!==jt||Kt!==Pe||xe!==dn)&&(n.stencilOp(jt,Pe,dn),$t=jt,Kt=Pe,xe=dn)},setLocked:function(jt){P=jt},setClear:function(jt){Ce!==jt&&(n.clearStencil(jt),Ce=jt)},reset:function(){P=!1,st=null,rt=null,bt=null,vt=null,$t=null,Kt=null,xe=null,Ce=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,d=new WeakMap,f={},m={},_=new WeakMap,x=[],p=null,u=!1,b=null,v=null,T=null,I=null,C=null,R=null,q=null,S=new Tt(0,0,0),w=0,V=!1,W=null,Z=null,A=null,D=null,B=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),H=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=Y>=2);let Q=null,ct={},G=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),at=new ye().fromArray(G),dt=new ye().fromArray(J);function ft(P,st,rt,bt){let vt=new Uint8Array(4),$t=n.createTexture();n.bindTexture(P,$t),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<rt;Kt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(st+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return $t}let Ct={};Ct[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ct[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),It(n.DEPTH_TEST),c.setFunc(Rr),Ut(!1),E(Tc),It(n.CULL_FACE),pt(kn);function It(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function St(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Vt(P,st){return m[P]!==st?(n.bindFramebuffer(P,st),m[P]=st,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=st),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function N(P,st){let rt=x,bt=!1;if(P)if(rt=_.get(st),rt===void 0&&(rt=[],_.set(st,rt)),P.isWebGLMultipleRenderTargets){let vt=P.texture;if(rt.length!==vt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let $t=0,Kt=vt.length;$t<Kt;$t++)rt[$t]=n.COLOR_ATTACHMENT0+$t;rt.length=vt.length,bt=!0}}else rt[0]!==n.COLOR_ATTACHMENT0&&(rt[0]=n.COLOR_ATTACHMENT0,bt=!0);else rt[0]!==n.BACK&&(rt[0]=n.BACK,bt=!0);bt&&(e.isWebGL2?n.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Re(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let _t={[ii]:n.FUNC_ADD,[qu]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};if(i)_t[Pc]=n.MIN,_t[Ic]=n.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(_t[Pc]=P.MIN_EXT,_t[Ic]=P.MAX_EXT)}let At={[Ju]:n.ZERO,[$u]:n.ONE,[Ku]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[ed]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[ju]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[nd]:n.ONE_MINUS_DST_COLOR,[td]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[od]:n.CONSTANT_ALPHA,[ad]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(P,st,rt,bt,vt,$t,Kt,xe,Ce,jt){if(P===kn){u===!0&&(St(n.BLEND),u=!1);return}if(u===!1&&(It(n.BLEND),u=!0),P!==Yu){if(P!==b||jt!==V){if((v!==ii||C!==ii)&&(n.blendEquation(n.FUNC_ADD),v=ii,C=ii),jt)switch(P){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,I=null,R=null,q=null,S.set(0,0,0),w=0,b=P,V=jt}return}vt=vt||st,$t=$t||rt,Kt=Kt||bt,(st!==v||vt!==C)&&(n.blendEquationSeparate(_t[st],_t[vt]),v=st,C=vt),(rt!==T||bt!==I||$t!==R||Kt!==q)&&(n.blendFuncSeparate(At[rt],At[bt],At[$t],At[Kt]),T=rt,I=bt,R=$t,q=Kt),(xe.equals(S)===!1||Ce!==w)&&(n.blendColor(xe.r,xe.g,xe.b,Ce),S.copy(xe),w=Ce),b=P,V=!1}function ie(P,st){P.side===sn?St(n.CULL_FACE):It(n.CULL_FACE);let rt=P.side===Be;st&&(rt=!rt),Ut(rt),P.blending===ki&&P.transparent===!1?pt(kn):pt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);let bt=P.stencilWrite;l.setTest(bt),bt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?It(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(P){W!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),W=P)}function E(P){P!==Wu?(It(n.CULL_FACE),P!==Z&&(P===Tc?n.cullFace(n.BACK):P===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),Z=P}function y(P){P!==A&&(H&&n.lineWidth(P),A=P)}function F(P,st,rt){P?(It(n.POLYGON_OFFSET_FILL),(D!==st||B!==rt)&&(n.polygonOffset(st,rt),D=st,B=rt)):St(n.POLYGON_OFFSET_FILL)}function tt(P){P?It(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function j(P){P===void 0&&(P=n.TEXTURE0+X-1),Q!==P&&(n.activeTexture(P),Q=P)}function et(P,st,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+X-1:rt=Q);let bt=ct[rt];bt===void 0&&(bt={type:void 0,texture:void 0},ct[rt]=bt),(bt.type!==P||bt.texture!==st)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture(P,st||Ct[P]),bt.type=P,bt.texture=st)}function mt(){let P=ct[Q];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ot(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(P){at.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function Xt(P){dt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),dt.copy(P))}function oe(P,st){let rt=d.get(st);rt===void 0&&(rt=new WeakMap,d.set(st,rt));let bt=rt.get(P);bt===void 0&&(bt=n.getUniformBlockIndex(st,P.name),rt.set(P,bt))}function Ft(P,st){let bt=d.get(st).get(P);h.get(st)!==bt&&(n.uniformBlockBinding(st,bt,P.__bindingPointIndex),h.set(st,bt))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Q=null,ct={},m={},_=new WeakMap,x=[],p=null,u=!1,b=null,v=null,T=null,I=null,C=null,R=null,q=null,S=new Tt(0,0,0),w=0,V=!1,W=null,Z=null,A=null,D=null,B=null,at.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:It,disable:St,bindFramebuffer:Vt,drawBuffers:N,useProgram:Re,setBlending:pt,setMaterial:ie,setFlipSided:Ut,setCullFace:E,setLineWidth:y,setPolygonOffset:F,setScissorTest:tt,activeTexture:j,bindTexture:et,unbindTexture:mt,compressedTexImage2D:ot,compressedTexImage3D:ht,texImage2D:xt,texImage3D:ut,updateUBOMapping:oe,uniformBlockBinding:Ft,texStorage2D:kt,texStorage3D:wt,texSubImage2D:Mt,texSubImage3D:Nt,compressedTexSubImage2D:K,compressedTexSubImage3D:qt,scissor:Lt,viewport:Xt,reset:nt}}function W0(n,t,e,i,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,y){return m?new OffscreenCanvas(E,y):Or("canvas")}function x(E,y,F,tt){let j=1;if((E.width>tt||E.height>tt)&&(j=tt/Math.max(E.width,E.height)),j<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let et=y?Nr:Math.floor,mt=et(j*E.width),ot=et(j*E.height);d===void 0&&(d=_(mt,ot));let ht=F?_(mt,ot):d;return ht.width=mt,ht.height=ot,ht.getContext("2d").drawImage(E,0,0,mt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+mt+"x"+ot+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return sa(E.width)&&sa(E.height)}function u(E){return o?!1:E.wrapS!==rn||E.wrapT!==rn||E.minFilter!==De&&E.minFilter!==Je}function b(E,y){return E.generateMipmaps&&y&&E.minFilter!==De&&E.minFilter!==Je}function v(E){n.generateMipmap(E)}function T(E,y,F,tt,j=!1){if(o===!1)return y;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let et=y;if(y===n.RED&&(F===n.FLOAT&&(et=n.R32F),F===n.HALF_FLOAT&&(et=n.R16F),F===n.UNSIGNED_BYTE&&(et=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(et=n.R8UI),F===n.UNSIGNED_SHORT&&(et=n.R16UI),F===n.UNSIGNED_INT&&(et=n.R32UI),F===n.BYTE&&(et=n.R8I),F===n.SHORT&&(et=n.R16I),F===n.INT&&(et=n.R32I)),y===n.RG&&(F===n.FLOAT&&(et=n.RG32F),F===n.HALF_FLOAT&&(et=n.RG16F),F===n.UNSIGNED_BYTE&&(et=n.RG8)),y===n.RGBA){let mt=j?Ir:Zt.getTransfer(tt);F===n.FLOAT&&(et=n.RGBA32F),F===n.HALF_FLOAT&&(et=n.RGBA16F),F===n.UNSIGNED_BYTE&&(et=mt===Qt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function I(E,y,F){return b(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==De&&E.minFilter!==Je?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){return E===De||E===Lc||E===vo?n.NEAREST:n.LINEAR}function R(E){let y=E.target;y.removeEventListener("dispose",R),S(y),y.isVideoTexture&&h.delete(y)}function q(E){let y=E.target;y.removeEventListener("dispose",q),V(y)}function S(E){let y=i.get(E);if(y.__webglInit===void 0)return;let F=E.source,tt=f.get(F);if(tt){let j=tt[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(E),Object.keys(tt).length===0&&f.delete(F)}i.remove(E)}function w(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let F=E.source,tt=f.get(F);delete tt[y.__cacheKey],a.memory.textures--}function V(E){let y=E.texture,F=i.get(E),tt=i.get(y);if(tt.__webglTexture!==void 0&&(n.deleteTexture(tt.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(F.__webglFramebuffer[j]))for(let et=0;et<F.__webglFramebuffer[j].length;et++)n.deleteFramebuffer(F.__webglFramebuffer[j][et]);else n.deleteFramebuffer(F.__webglFramebuffer[j]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[j])}else{if(Array.isArray(F.__webglFramebuffer))for(let j=0;j<F.__webglFramebuffer.length;j++)n.deleteFramebuffer(F.__webglFramebuffer[j]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let j=0;j<F.__webglColorRenderbuffer.length;j++)F.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[j]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let j=0,et=y.length;j<et;j++){let mt=i.get(y[j]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(y[j])}i.remove(y),i.remove(E)}let W=0;function Z(){W=0}function A(){let E=W;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),W+=1,E}function D(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function B(E,y){let F=i.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,E,y);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function X(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){at(F,E,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function H(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){at(F,E,y);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function Y(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){dt(F,E,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let $={[ea]:n.REPEAT,[rn]:n.CLAMP_TO_EDGE,[na]:n.MIRRORED_REPEAT},Q={[De]:n.NEAREST,[Lc]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[bd]:n.LINEAR_MIPMAP_NEAREST,[Ls]:n.LINEAR_MIPMAP_LINEAR},ct={[Nd]:n.NEVER,[Vd]:n.ALWAYS,[Od]:n.LESS,[fh]:n.LEQUAL,[Fd]:n.EQUAL,[kd]:n.GEQUAL,[zd]:n.GREATER,[Bd]:n.NOTEQUAL};function G(E,y,F){if(F?(n.texParameteri(E,n.TEXTURE_WRAP_S,$[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,$[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,$[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Q[y.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==rn||y.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,C(y.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==De&&y.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===De||y.minFilter!==vo&&y.minFilter!==Ls||y.type===Bn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ds&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function J(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));let tt=y.source,j=f.get(tt);j===void 0&&(j={},f.set(tt,j));let et=D(y);if(et!==E.__cacheKey){j[et]===void 0&&(j[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[et].usedTimes++;let mt=j[E.__cacheKey];mt!==void 0&&(j[E.__cacheKey].usedTimes--,mt.usedTimes===0&&w(y)),E.__cacheKey=et,E.__webglTexture=j[et].texture}return F}function at(E,y,F){let tt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=n.TEXTURE_3D);let j=J(E,y),et=y.source;e.bindTexture(tt,E.__webglTexture,n.TEXTURE0+F);let mt=i.get(et);if(et.version!==mt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);let ot=Zt.getPrimaries(Zt.workingColorSpace),ht=y.colorSpace===$e?null:Zt.getPrimaries(y.colorSpace),Mt=y.colorSpace===$e||ot===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Nt=u(y)&&p(y.image)===!1,K=x(y.image,Nt,!1,s.maxTextureSize);K=Ut(y,K);let qt=p(K)||o,kt=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),xt=T(y.internalFormat,kt,wt,y.colorSpace,y.isVideoTexture);G(tt,y,qt);let ut,Lt=y.mipmaps,Xt=o&&y.isVideoTexture!==!0&&xt!==hh,oe=mt.__version===void 0||j===!0,Ft=I(y,K,qt);if(y.isDepthTexture)xt=n.DEPTH_COMPONENT,o?y.type===Bn?xt=n.DEPTH_COMPONENT32F:y.type===zn?xt=n.DEPTH_COMPONENT24:y.type===oi?xt=n.DEPTH24_STENCIL8:xt=n.DEPTH_COMPONENT16:y.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ai&&xt===n.DEPTH_COMPONENT&&y.type!==Fa&&y.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=zn,wt=r.convert(y.type)),y.format===Yi&&xt===n.DEPTH_COMPONENT&&(xt=n.DEPTH_STENCIL,y.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=oi,wt=r.convert(y.type))),oe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,xt,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,xt,K.width,K.height,0,kt,wt,null));else if(y.isDataTexture)if(Lt.length>0&&qt){Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,xt,Lt[0].width,Lt[0].height);for(let nt=0,P=Lt.length;nt<P;nt++)ut=Lt[nt],Xt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,kt,wt,ut.data):e.texImage2D(n.TEXTURE_2D,nt,xt,ut.width,ut.height,0,kt,wt,ut.data);y.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(n.TEXTURE_2D,Ft,xt,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,kt,wt,K.data)):e.texImage2D(n.TEXTURE_2D,0,xt,K.width,K.height,0,kt,wt,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,xt,Lt[0].width,Lt[0].height,K.depth);for(let nt=0,P=Lt.length;nt<P;nt++)ut=Lt[nt],y.format!==on?kt!==null?Xt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,K.depth,kt,ut.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,xt,ut.width,ut.height,K.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,K.depth,kt,wt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,xt,ut.width,ut.height,K.depth,0,kt,wt,ut.data)}else{Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,xt,Lt[0].width,Lt[0].height);for(let nt=0,P=Lt.length;nt<P;nt++)ut=Lt[nt],y.format!==on?kt!==null?Xt?e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,kt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,kt,wt,ut.data):e.texImage2D(n.TEXTURE_2D,nt,xt,ut.width,ut.height,0,kt,wt,ut.data)}else if(y.isDataArrayTexture)Xt?(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,xt,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,kt,wt,K.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,K.width,K.height,K.depth,0,kt,wt,K.data);else if(y.isData3DTexture)Xt?(oe&&e.texStorage3D(n.TEXTURE_3D,Ft,xt,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,kt,wt,K.data)):e.texImage3D(n.TEXTURE_3D,0,xt,K.width,K.height,K.depth,0,kt,wt,K.data);else if(y.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(n.TEXTURE_2D,Ft,xt,K.width,K.height);else{let nt=K.width,P=K.height;for(let st=0;st<Ft;st++)e.texImage2D(n.TEXTURE_2D,st,xt,nt,P,0,kt,wt,null),nt>>=1,P>>=1}}else if(Lt.length>0&&qt){Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,xt,Lt[0].width,Lt[0].height);for(let nt=0,P=Lt.length;nt<P;nt++)ut=Lt[nt],Xt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,kt,wt,ut):e.texImage2D(n.TEXTURE_2D,nt,xt,kt,wt,ut);y.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(n.TEXTURE_2D,Ft,xt,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,kt,wt,K)):e.texImage2D(n.TEXTURE_2D,0,xt,kt,wt,K);b(y,qt)&&v(tt),mt.__version=et.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function dt(E,y,F){if(y.image.length!==6)return;let tt=J(E,y),j=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let et=i.get(j);if(j.version!==et.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);let mt=Zt.getPrimaries(Zt.workingColorSpace),ot=y.colorSpace===$e?null:Zt.getPrimaries(y.colorSpace),ht=y.colorSpace===$e||mt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,Nt=y.image[0]&&y.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!Mt&&!Nt?K[nt]=x(y.image[nt],!1,!0,s.maxCubemapSize):K[nt]=Nt?y.image[nt].image:y.image[nt],K[nt]=Ut(y,K[nt]);let qt=K[0],kt=p(qt)||o,wt=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),ut=T(y.internalFormat,wt,xt,y.colorSpace),Lt=o&&y.isVideoTexture!==!0,Xt=et.__version===void 0||tt===!0,oe=I(y,qt,kt);G(n.TEXTURE_CUBE_MAP,y,kt);let Ft;if(Mt){Lt&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ut,qt.width,qt.height);for(let nt=0;nt<6;nt++){Ft=K[nt].mipmaps;for(let P=0;P<Ft.length;P++){let st=Ft[P];y.format!==on?wt!==null?Lt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,0,0,st.width,st.height,wt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,0,0,st.width,st.height,wt,xt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P,ut,st.width,st.height,0,wt,xt,st.data)}}}else{Ft=y.mipmaps,Lt&&Xt&&(Ft.length>0&&oe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ut,K[0].width,K[0].height));for(let nt=0;nt<6;nt++)if(Nt){Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,wt,xt,K[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,K[nt].width,K[nt].height,0,wt,xt,K[nt].data);for(let P=0;P<Ft.length;P++){let rt=Ft[P].image[nt].image;Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,0,0,rt.width,rt.height,wt,xt,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,ut,rt.width,rt.height,0,wt,xt,rt.data)}}else{Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt,xt,K[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,wt,xt,K[nt]);for(let P=0;P<Ft.length;P++){let st=Ft[P];Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,0,0,wt,xt,st.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,P+1,ut,wt,xt,st.image[nt])}}}b(y,kt)&&v(n.TEXTURE_CUBE_MAP),et.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ft(E,y,F,tt,j,et){let mt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ht=T(F.internalFormat,mt,ot,F.colorSpace);if(!i.get(y).__hasExternalTextures){let Nt=Math.max(1,y.width>>et),K=Math.max(1,y.height>>et);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,et,ht,Nt,K,y.depth,0,mt,ot,null):e.texImage2D(j,et,ht,Nt,K,0,mt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),pt(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,i.get(F).__webglTexture,0,At(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,i.get(F).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(E,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let tt=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||pt(y)){let j=y.depthTexture;j&&j.isDepthTexture&&(j.type===Bn?tt=n.DEPTH_COMPONENT32F:j.type===zn&&(tt=n.DEPTH_COMPONENT24));let et=At(y);pt(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,tt,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,et,tt,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,tt,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){let tt=At(y);F&&pt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,y.width,y.height):pt(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let tt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0;j<tt.length;j++){let et=tt[j],mt=r.convert(et.format,et.colorSpace),ot=r.convert(et.type),ht=T(et.internalFormat,mt,ot,et.colorSpace),Mt=At(y);F&&pt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,ht,y.width,y.height):pt(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let tt=i.get(y.depthTexture).__webglTexture,j=At(y);if(y.depthTexture.format===ai)pt(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Yi)pt(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function St(E){let y=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");It(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]=n.createRenderbuffer(),Ct(y.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ct(y.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(E,y,F){let tt=i.get(E);y!==void 0&&ft(tt.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&St(E)}function N(E){let y=E.texture,F=i.get(E),tt=i.get(y);E.addEventListener("dispose",q),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=y.version,a.memory.textures++);let j=E.isWebGLCubeRenderTarget===!0,et=E.isWebGLMultipleRenderTargets===!0,mt=p(E)||o;if(j){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ht=0;ht<y.mipmaps.length;ht++)F.__webglFramebuffer[ot][ht]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(et)if(s.drawBuffers){let ot=E.texture;for(let ht=0,Mt=ot.length;ht<Mt;ht++){let Nt=i.get(ot[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&pt(E)===!1){let ot=et?y:[y];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<ot.length;ht++){let Mt=ot[ht];F.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);let Nt=r.convert(Mt.format,Mt.colorSpace),K=r.convert(Mt.type),qt=T(Mt.internalFormat,Nt,K,Mt.colorSpace,E.isXRRenderTarget===!0),kt=At(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,qt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),G(n.TEXTURE_CUBE_MAP,y,mt);for(let ot=0;ot<6;ot++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)ft(F.__webglFramebuffer[ot][ht],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else ft(F.__webglFramebuffer[ot],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);b(y,mt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ot=E.texture;for(let ht=0,Mt=ot.length;ht<Mt;ht++){let Nt=ot[ht],K=i.get(Nt);e.bindTexture(n.TEXTURE_2D,K.__webglTexture),G(n.TEXTURE_2D,Nt,mt),ft(F.__webglFramebuffer,E,Nt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),b(Nt,mt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ot=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,tt.__webglTexture),G(ot,y,mt),o&&y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)ft(F.__webglFramebuffer[ht],E,y,n.COLOR_ATTACHMENT0,ot,ht);else ft(F.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,ot,0);b(y,mt)&&v(ot),e.unbindTexture()}E.depthBuffer&&St(E)}function Re(E){let y=p(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,j=F.length;tt<j;tt++){let et=F[tt];if(b(et,y)){let mt=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ot=i.get(et).__webglTexture;e.bindTexture(mt,ot),v(mt),e.unbindTexture()}}}function _t(E){if(o&&E.samples>0&&pt(E)===!1){let y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,tt=E.height,j=n.COLOR_BUFFER_BIT,et=[],mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(E),ht=E.isWebGLMultipleRenderTargets===!0;if(ht)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){et.push(n.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&et.push(mt);let Nt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Nt===!1&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ht&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[Mt]),Nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[mt])),ht){let K=i.get(y[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,F,tt,0,0,F,tt,j,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,ot.__webglColorRenderbuffer[Mt]);let Nt=i.get(y[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function At(E){return Math.min(s.maxSamples,E.samples)}function pt(E){let y=i.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ut(E,y){let F=E.colorSpace,tt=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ia||F!==Tn&&F!==$e&&(Zt.getTransfer(F)===Qt?o===!1?t.has("EXT_sRGB")===!0&&tt===on?(E.format=ia,E.minFilter=Je,E.generateMipmaps=!1):y=Fr.sRGBToLinear(y):(tt!==on||j!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=A,this.resetTextureUnits=Z,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Vt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=pt}function X0(n,t,e){let i=e.isWebGL2;function s(r,a=$e){let o,c=Zt.getTransfer(a);if(r===Hn)return n.UNSIGNED_BYTE;if(r===rh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===oh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ed)return n.BYTE;if(r===wd)return n.SHORT;if(r===Fa)return n.UNSIGNED_SHORT;if(r===sh)return n.INT;if(r===zn)return n.UNSIGNED_INT;if(r===Bn)return n.FLOAT;if(r===Ds)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Td)return n.ALPHA;if(r===on)return n.RGBA;if(r===Ad)return n.LUMINANCE;if(r===Rd)return n.LUMINANCE_ALPHA;if(r===ai)return n.DEPTH_COMPONENT;if(r===Yi)return n.DEPTH_STENCIL;if(r===ia)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Cd)return n.RED;if(r===ah)return n.RED_INTEGER;if(r===Pd)return n.RG;if(r===ch)return n.RG_INTEGER;if(r===lh)return n.RGBA_INTEGER;if(r===yo||r===Mo||r===So||r===bo)if(c===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dc||r===Uc||r===Nc||r===Oc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Dc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fc||r===zc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fc)return c===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bc||r===kc||r===Vc||r===Hc||r===Gc||r===Wc||r===Xc||r===Yc||r===qc||r===Zc||r===Jc||r===$c||r===Kc||r===jc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$c)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jc)return c===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eo||r===Qc||r===tl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Eo)return c===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===el||r===nl||r===il)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Eo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===el)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===il)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var xa=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},wn=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y0={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new wn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_a=class extends Gn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,_=null,x=e.getContextAttributes(),p=null,u=null,b=[],v=[],T=new Ht,I=null,C=new We;C.layers.enable(1),C.viewport=new ye;let R=new We;R.layers.enable(2),R.viewport=new ye;let q=[C,R],S=new xa;S.layers.enable(1),S.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=b[G];return J===void 0&&(J=new Is,b[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=b[G];return J===void 0&&(J=new Is,b[G]=J),J.getGripSpace()},this.getHand=function(G){let J=b[G];return J===void 0&&(J=new Is,b[G]=J),J.getHandSpace()};function W(G){let J=v.indexOf(G.inputSource);if(J===-1)return;let at=b[J];at!==void 0&&(at.update(G.inputSource,G.frame,l||a),at.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",A);for(let G=0;G<b.length;G++){let J=v[G];J!==null&&(v[G]=null,b[G].disconnect(J))}w=null,V=null,t.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,ct.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",A),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new An(m.framebufferWidth,m.framebufferHeight,{format:on,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,at=null,dt=null;x.depth&&(dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=x.stencil?Yi:ai,at=x.stencil?oi:zn);let ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new An(f.textureWidth,f.textureHeight,{format:on,type:Hn,depthTexture:new Yr(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ct=t.properties.get(u);Ct.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function A(G){for(let J=0;J<G.removed.length;J++){let at=G.removed[J],dt=v.indexOf(at);dt>=0&&(v[dt]=null,b[dt].disconnect(at))}for(let J=0;J<G.added.length;J++){let at=G.added[J],dt=v.indexOf(at);if(dt===-1){for(let Ct=0;Ct<b.length;Ct++)if(Ct>=v.length){v.push(at),dt=Ct;break}else if(v[Ct]===null){v[Ct]=at,dt=Ct;break}if(dt===-1)break}let ft=b[dt];ft&&ft.connect(at)}}let D=new L,B=new L;function X(G,J,at){D.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(at.matrixWorld);let dt=D.distanceTo(B),ft=J.projectionMatrix.elements,Ct=at.projectionMatrix.elements,It=ft[14]/(ft[10]-1),St=ft[14]/(ft[10]+1),Vt=(ft[9]+1)/ft[5],N=(ft[9]-1)/ft[5],Re=(ft[8]-1)/ft[0],_t=(Ct[8]+1)/Ct[0],At=It*Re,pt=It*_t,ie=dt/(-Re+_t),Ut=ie*-Re;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let E=It+ie,y=St+ie,F=At-Ut,tt=pt+(dt-Ut),j=Vt*St/y*E,et=N*St/y*E;G.projectionMatrix.makePerspective(F,tt,j,et,E,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;S.near=R.near=C.near=G.near,S.far=R.far=C.far=G.far,(w!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,V=S.far);let J=G.parent,at=S.cameras;H(S,J);for(let dt=0;dt<at.length;dt++)H(at[dt],J);at.length===2?X(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),Y(G,S,J)};function Y(G,J,at){at===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Us*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let $=null;function Q(G,J){if(h=J.getViewerPose(l||a),_=J,h!==null){let at=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let dt=!1;at.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let ft=0;ft<at.length;ft++){let Ct=at[ft],It=null;if(m!==null)It=m.getViewport(Ct);else{let Vt=d.getViewSubImage(f,Ct);It=Vt.viewport,ft===0&&(t.setRenderTargetTextures(u,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(u))}let St=q[ft];St===void 0&&(St=new We,St.layers.enable(ft),St.viewport=new ye,q[ft]=St),St.matrix.fromArray(Ct.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Ct.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),ft===0&&(S.matrix.copy(St.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(St)}}for(let at=0;at<b.length;at++){let dt=v[at],ft=b[at];dt!==null&&ft!==void 0&&ft.update(dt,J,l||a)}$&&$(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}let ct=new _h;ct.setAnimationLoop(Q),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}};function q0(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,xh(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,v,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,v):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Be&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Be&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b=t.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Be&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Z0(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,v){let T=v.program;i.uniformBlockBinding(b,T)}function l(b,v){let T=s[b.id];T===void 0&&(_(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",p));let I=v.program;i.updateUBOMapping(b,I);let C=t.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function h(b){let v=d();b.__bindingPointIndex=v;let T=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],T=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,R=T.length;C<R;C++){let q=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,w=q.length;S<w;S++){let V=q[S];if(m(V,C,S,I)===!0){let W=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value],A=0;for(let D=0;D<Z.length;D++){let B=Z[D],X=x(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,W+A,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,A),A+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,v,T,I){let C=b.value,R=v+"_"+T;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{let q=I[R];if(typeof C=="number"||typeof C=="boolean"){if(q!==C)return I[R]=C,!0}else if(q.equals(C)===!1)return q.copy(C),!0}return!1}function _(b){let v=b.uniforms,T=0,I=16;for(let R=0,q=v.length;R<q;R++){let S=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,V=S.length;w<V;w++){let W=S[w],Z=Array.isArray(W.value)?W.value:[W.value];for(let A=0,D=Z.length;A<D;A++){let B=Z[A],X=x(B),H=T%I;H!==0&&I-H<X.boundary&&(T+=I-H),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=X.storage}}}let C=T%I;return C>0&&(T+=I-C),b.__size=T,b.__cache={},this}function x(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var zs=class{constructor(t={}){let{canvas:e=nf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),_=new Int32Array(4),x=null,p=null,u=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1;let v=this,T=!1,I=0,C=0,R=null,q=-1,S=null,w=new ye,V=new ye,W=null,Z=new Tt(0),A=0,D=e.width,B=e.height,X=1,H=null,Y=null,$=new ye(0,0,D,B),Q=new ye(0,0,D,B),ct=!1,G=new Fs,J=!1,at=!1,dt=null,ft=new fe,Ct=new Ht,It=new L,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return R===null?X:1}let N=i;function Re(M,U){for(let z=0;z<M.length;z++){let k=M[z],O=e.getContext(k,U);if(O!==null)return O}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ua}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",st,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),N=Re(U,M),N===null)throw Re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _t,At,pt,ie,Ut,E,y,F,tt,j,et,mt,ot,ht,Mt,Nt,K,qt,kt,wt,xt,ut,Lt,Xt;function oe(){_t=new fg(N),At=new ag(N,_t,t),_t.init(At),ut=new X0(N,_t,At),pt=new G0(N,_t,At),ie=new gg(N),Ut=new I0,E=new W0(N,_t,pt,Ut,At,ut,ie),y=new lg(v),F=new dg(v),tt=new Ef(N,At),Lt=new rg(N,_t,tt,At),j=new pg(N,tt,ie,Lt),et=new yg(N,j,tt,ie),kt=new vg(N,At,E),Nt=new cg(Ut),mt=new P0(v,y,F,_t,At,Lt,Nt),ot=new q0(v,Ut),ht=new D0,Mt=new B0(_t,At),qt=new sg(v,y,F,pt,et,f,c),K=new H0(v,et,At),Xt=new Z0(N,ie,At,pt),wt=new og(N,_t,ie,At),xt=new mg(N,_t,ie,At),ie.programs=mt.programs,v.capabilities=At,v.extensions=_t,v.properties=Ut,v.renderLists=ht,v.shadowMap=K,v.state=pt,v.info=ie}oe();let Ft=new _a(v,N);this.xr=Ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=_t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=_t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(D,B,!1))},this.getSize=function(M){return M.set(D,B)},this.setSize=function(M,U,z=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=M,B=U,e.width=Math.floor(M*X),e.height=Math.floor(U*X),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(D*X,B*X).floor()},this.setDrawingBufferSize=function(M,U,z){D=M,B=U,X=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,U,z,k){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,U,z,k),pt.viewport(w.copy($).multiplyScalar(X).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,U,z,k){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,U,z,k),pt.scissor(V.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(M){pt.setScissorTest(ct=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(M=!0,U=!0,z=!0){let k=0;if(M){let O=!1;if(R!==null){let lt=R.texture.format;O=lt===lh||lt===ch||lt===ah}if(O){let lt=R.texture.type,gt=lt===Hn||lt===zn||lt===Fa||lt===oi||lt===rh||lt===oh,yt=qt.getClearColor(),Et=qt.getClearAlpha(),Ot=yt.r,Rt=yt.g,Pt=yt.b;gt?(m[0]=Ot,m[1]=Rt,m[2]=Pt,m[3]=Et,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ot,_[1]=Rt,_[2]=Pt,_[3]=Et,N.clearBufferiv(N.COLOR,0,_))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT),z&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ht.dispose(),Mt.dispose(),Ut.dispose(),y.dispose(),F.dispose(),et.dispose(),Lt.dispose(),Xt.dispose(),mt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Ce),Ft.removeEventListener("sessionend",jt),dt&&(dt.dispose(),dt=null),Pe.stop()};function nt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=ie.autoReset,U=K.enabled,z=K.autoUpdate,k=K.needsUpdate,O=K.type;oe(),ie.autoReset=M,K.enabled=U,K.autoUpdate=z,K.needsUpdate=k,K.type=O}function st(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let U=M.target;U.removeEventListener("dispose",rt),bt(U)}function bt(M){vt(M),Ut.remove(M)}function vt(M){let U=Ut.get(M).programs;U!==void 0&&(U.forEach(function(z){mt.releaseProgram(z)}),M.isShaderMaterial&&mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,k,O,lt){U===null&&(U=St);let gt=O.isMesh&&O.matrixWorld.determinant()<0,yt=ku(M,U,z,k,O);pt.setMaterial(k,gt);let Et=z.index,Ot=1;if(k.wireframe===!0){if(Et=j.getWireframeAttribute(z),Et===void 0)return;Ot=2}let Rt=z.drawRange,Pt=z.attributes.position,ce=Rt.start*Ot,Ve=(Rt.start+Rt.count)*Ot;lt!==null&&(ce=Math.max(ce,lt.start*Ot),Ve=Math.min(Ve,(lt.start+lt.count)*Ot)),Et!==null?(ce=Math.max(ce,0),Ve=Math.min(Ve,Et.count)):Pt!=null&&(ce=Math.max(ce,0),Ve=Math.min(Ve,Pt.count));let _e=Ve-ce;if(_e<0||_e===1/0)return;Lt.setup(O,k,yt,z,Et);let xn,se=wt;if(Et!==null&&(xn=tt.get(Et),se=xt,se.setIndex(xn)),O.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*Vt()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(O.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),pt.setLineWidth(zt*Vt()),O.isLineSegments?se.setMode(N.LINES):O.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else O.isPoints?se.setMode(N.POINTS):O.isSprite&&se.setMode(N.TRIANGLES);if(O.isBatchedMesh)se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)se.renderInstances(ce,_e,O.count);else if(z.isInstancedBufferGeometry){let zt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mo=Math.min(z.instanceCount,zt);se.renderInstances(ce,_e,mo)}else se.render(ce,_e)};function $t(M,U,z){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=Be,M.needsUpdate=!0,tr(M,U,z),M.side=je,M.needsUpdate=!0,tr(M,U,z),M.side=sn):tr(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),p=Mt.get(z),p.init(),b.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(v._useLegacyLights);let k=new Set;return M.traverse(function(O){let lt=O.material;if(lt)if(Array.isArray(lt))for(let gt=0;gt<lt.length;gt++){let yt=lt[gt];$t(yt,z,O),k.add(yt)}else $t(lt,z,O),k.add(lt)}),b.pop(),p=null,k},this.compileAsync=function(M,U,z=null){let k=this.compile(M,U,z);return new Promise(O=>{function lt(){if(k.forEach(function(gt){Ut.get(gt).currentProgram.isReady()&&k.delete(gt)}),k.size===0){O(M);return}setTimeout(lt,10)}_t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Kt=null;function xe(M){Kt&&Kt(M)}function Ce(){Pe.stop()}function jt(){Pe.start()}let Pe=new _h;Pe.setAnimationLoop(xe),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(M){Kt=M,Ft.setAnimationLoop(M),M===null?Pe.stop():Pe.start()},Ft.addEventListener("sessionstart",Ce),Ft.addEventListener("sessionend",jt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(U),U=Ft.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,R),p=Mt.get(M,b.length),p.init(),b.push(p),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(ft),at=this.localClippingEnabled,J=Nt.init(this.clippingPlanes,at),x=ht.get(M,u.length),x.init(),u.push(x),dn(M,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(H,Y),this.info.render.frame++,J===!0&&Nt.beginShadows();let z=p.state.shadowsArray;if(K.render(z,M,U),J===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(x,M),p.setupLights(v._useLegacyLights),U.isArrayCamera){let k=U.cameras;for(let O=0,lt=k.length;O<lt;O++){let gt=k[O];yc(x,M,gt,gt.viewport)}}else yc(x,M,U);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(v,M,U),Lt.resetDefaultState(),q=-1,S=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function dn(M,U,z,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||G.intersectsSprite(M)){k&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ft);let gt=et.update(M),yt=M.material;yt.visible&&x.push(M,gt,yt,z,It.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||G.intersectsObject(M))){let gt=et.update(M),yt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),It.copy(gt.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(ft)),Array.isArray(yt)){let Et=gt.groups;for(let Ot=0,Rt=Et.length;Ot<Rt;Ot++){let Pt=Et[Ot],ce=yt[Pt.materialIndex];ce&&ce.visible&&x.push(M,gt,ce,z,It.z,Pt)}}else yt.visible&&x.push(M,gt,yt,z,It.z,null)}}let lt=M.children;for(let gt=0,yt=lt.length;gt<yt;gt++)dn(lt[gt],U,z,k)}function yc(M,U,z,k){let O=M.opaque,lt=M.transmissive,gt=M.transparent;p.setupLightsView(z),J===!0&&Nt.setGlobalState(v.clippingPlanes,z),lt.length>0&&Bu(O,lt,U,z),k&&pt.viewport(w.copy(k)),O.length>0&&Qs(O,U,z),lt.length>0&&Qs(lt,U,z),gt.length>0&&Qs(gt,U,z),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Bu(M,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let lt=At.isWebGL2;dt===null&&(dt=new An(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Ds:Hn,minFilter:Ls,samples:lt?4:0})),v.getDrawingBufferSize(Ct),lt?dt.setSize(Ct.x,Ct.y):dt.setSize(Nr(Ct.x),Nr(Ct.y));let gt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(Z),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear();let yt=v.toneMapping;v.toneMapping=Vn,Qs(M,z,k),E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt);let Et=!1;for(let Ot=0,Rt=U.length;Ot<Rt;Ot++){let Pt=U[Ot],ce=Pt.object,Ve=Pt.geometry,_e=Pt.material,xn=Pt.group;if(_e.side===sn&&ce.layers.test(k.layers)){let se=_e.side;_e.side=Be,_e.needsUpdate=!0,Mc(ce,z,k,Ve,_e,xn),_e.side=se,_e.needsUpdate=!0,Et=!0}}Et===!0&&(E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt)),v.setRenderTarget(gt),v.setClearColor(Z,A),v.toneMapping=yt}function Qs(M,U,z){let k=U.isScene===!0?U.overrideMaterial:null;for(let O=0,lt=M.length;O<lt;O++){let gt=M[O],yt=gt.object,Et=gt.geometry,Ot=k===null?gt.material:k,Rt=gt.group;yt.layers.test(z.layers)&&Mc(yt,U,z,Et,Ot,Rt)}}function Mc(M,U,z,k,O,lt){M.onBeforeRender(v,U,z,k,O,lt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,U,z,k,M,lt),O.transparent===!0&&O.side===sn&&O.forceSinglePass===!1?(O.side=Be,O.needsUpdate=!0,v.renderBufferDirect(z,U,k,O,M,lt),O.side=je,O.needsUpdate=!0,v.renderBufferDirect(z,U,k,O,M,lt),O.side=sn):v.renderBufferDirect(z,U,k,O,M,lt),M.onAfterRender(v,U,z,k,O,lt)}function tr(M,U,z){U.isScene!==!0&&(U=St);let k=Ut.get(M),O=p.state.lights,lt=p.state.shadowsArray,gt=O.state.version,yt=mt.getParameters(M,O.state,lt,U,z),Et=mt.getProgramCacheKey(yt),Ot=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?F:y).get(M.envMap||k.environment),Ot===void 0&&(M.addEventListener("dispose",rt),Ot=new Map,k.programs=Ot);let Rt=Ot.get(Et);if(Rt!==void 0){if(k.currentProgram===Rt&&k.lightsStateVersion===gt)return bc(M,yt),Rt}else yt.uniforms=mt.getUniforms(M),M.onBuild(z,yt,v),M.onBeforeCompile(yt,v),Rt=mt.acquireProgram(yt,Et),Ot.set(Et,Rt),k.uniforms=yt.uniforms;let Pt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=Nt.uniform),bc(M,yt),k.needsLights=Hu(M),k.lightsStateVersion=gt,k.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Rt,k.uniformsList=null,Rt}function Sc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Gi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function bc(M,U){let z=Ut.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ku(M,U,z,k,O){U.isScene!==!0&&(U=St),E.resetTextureUnits();let lt=U.fog,gt=k.isMeshStandardMaterial?U.environment:null,yt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Tn,Et=(k.isMeshStandardMaterial?F:y).get(k.envMap||gt),Ot=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Rt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!z.morphAttributes.position,ce=!!z.morphAttributes.normal,Ve=!!z.morphAttributes.color,_e=Vn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=v.toneMapping);let xn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=xn!==void 0?xn.length:0,zt=Ut.get(k),mo=p.state.lights;if(J===!0&&(at===!0||M!==S)){let qe=M===S&&k.id===q;Nt.setState(k,M,qe)}let ae=!1;k.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==mo.state.version||zt.outputColorSpace!==yt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||zt.envMap!==Et||k.fog===!0&&zt.fog!==lt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Nt.numPlanes||zt.numIntersection!==Nt.numIntersection)||zt.vertexAlphas!==Ot||zt.vertexTangents!==Rt||zt.morphTargets!==Pt||zt.morphNormals!==ce||zt.morphColors!==Ve||zt.toneMapping!==_e||At.isWebGL2===!0&&zt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,zt.__version=k.version);let $n=zt.currentProgram;ae===!0&&($n=tr(k,U,O));let Ec=!1,Es=!1,go=!1,we=$n.getUniforms(),Kn=zt.uniforms;if(pt.useProgram($n.program)&&(Ec=!0,Es=!0,go=!0),k.id!==q&&(q=k.id,Es=!0),Ec||S!==M){we.setValue(N,"projectionMatrix",M.projectionMatrix),we.setValue(N,"viewMatrix",M.matrixWorldInverse);let qe=we.map.cameraPosition;qe!==void 0&&qe.setValue(N,It.setFromMatrixPosition(M.matrixWorld)),At.logarithmicDepthBuffer&&we.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&we.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Es=!0,go=!0)}if(O.isSkinnedMesh){we.setOptional(N,O,"bindMatrix"),we.setOptional(N,O,"bindMatrixInverse");let qe=O.skeleton;qe&&(At.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),we.setValue(N,"boneTexture",qe.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(we.setOptional(N,O,"batchingTexture"),we.setValue(N,"batchingTexture",O._matricesTexture,E));let xo=z.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&At.isWebGL2===!0)&&kt.update(O,z,$n),(Es||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,we.setValue(N,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Kn.envMap.value=Et,Kn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),Es&&(we.setValue(N,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&Vu(Kn,go),lt&&k.fog===!0&&ot.refreshFogUniforms(Kn,lt),ot.refreshMaterialUniforms(Kn,k,X,B,dt),Gi.upload(N,Sc(zt),Kn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gi.upload(N,Sc(zt),Kn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&we.setValue(N,"center",O.center),we.setValue(N,"modelViewMatrix",O.modelViewMatrix),we.setValue(N,"normalMatrix",O.normalMatrix),we.setValue(N,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let qe=k.uniformsGroups;for(let _o=0,Gu=qe.length;_o<Gu;_o++)if(At.isWebGL2){let wc=qe[_o];Xt.update(wc,$n),Xt.bind(wc,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Vu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Hu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,U,z){Ut.get(M.texture).__webglTexture=U,Ut.get(M.depthTexture).__webglTexture=z;let k=Ut.get(M);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){let z=Ut.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){R=M,I=U,C=z;let k=!0,O=null,lt=!1,gt=!1;if(M){let Et=Ut.get(M);Et.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):Et.__webglFramebuffer===void 0?E.setupRenderTarget(M):Et.__hasExternalTextures&&E.rebindTextures(M,Ut.get(M.texture).__webglTexture,Ut.get(M.depthTexture).__webglTexture);let Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(gt=!0);let Rt=Ut.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?O=Rt[U][z]:O=Rt[U],lt=!0):At.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?O=Ut.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[z]:O=Rt,w.copy(M.viewport),V.copy(M.scissor),W=M.scissorTest}else w.copy($).multiplyScalar(X).floor(),V.copy(Q).multiplyScalar(X).floor(),W=ct;if(pt.bindFramebuffer(N.FRAMEBUFFER,O)&&At.drawBuffers&&k&&pt.drawBuffers(M,O),pt.viewport(w),pt.scissor(V),pt.setScissorTest(W),lt){let Et=Ut.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,z)}else if(gt){let Et=Ut.get(M.texture),Ot=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,z||0,Ot)}q=-1},this.readRenderTargetPixels=function(M,U,z,k,O,lt,gt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&gt!==void 0&&(yt=yt[gt]),yt){pt.bindFramebuffer(N.FRAMEBUFFER,yt);try{let Et=M.texture,Ot=Et.format,Rt=Et.type;if(Ot!==on&&ut.convert(Ot)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Pt=Rt===Ds&&(_t.has("EXT_color_buffer_half_float")||At.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Rt!==Hn&&ut.convert(Rt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===Bn&&(At.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&z>=0&&z<=M.height-O&&N.readPixels(U,z,k,O,ut.convert(Ot),ut.convert(Rt),lt)}finally{let Et=R!==null?Ut.get(R).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(M,U,z=0){let k=Math.pow(2,-z),O=Math.floor(U.image.width*k),lt=Math.floor(U.image.height*k);E.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,M.x,M.y,O,lt),pt.unbindTexture()},this.copyTextureToTexture=function(M,U,z,k=0){let O=U.image.width,lt=U.image.height,gt=ut.convert(z.format),yt=ut.convert(z.type);E.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,M.x,M.y,O,lt,gt,yt,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,gt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,k,M.x,M.y,gt,yt,U.image),k===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,k,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let lt=M.max.x-M.min.x+1,gt=M.max.y-M.min.y+1,yt=M.max.z-M.min.z+1,Et=ut.convert(k.format),Ot=ut.convert(k.type),Rt;if(k.isData3DTexture)E.setTexture3D(k,0),Rt=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)E.setTexture2DArray(k,0),Rt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let Pt=N.getParameter(N.UNPACK_ROW_LENGTH),ce=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ve=N.getParameter(N.UNPACK_SKIP_PIXELS),_e=N.getParameter(N.UNPACK_SKIP_ROWS),xn=N.getParameter(N.UNPACK_SKIP_IMAGES),se=z.isCompressedTexture?z.mipmaps[O]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Rt,O,U.x,U.y,U.z,lt,gt,yt,Et,Ot,se.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Rt,O,U.x,U.y,U.z,lt,gt,yt,Et,se.data)):N.texSubImage3D(Rt,O,U.x,U.y,U.z,lt,gt,yt,Et,Ot,se),N.pixelStorei(N.UNPACK_ROW_LENGTH,Pt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,_e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,xn),O===0&&k.generateMipmaps&&N.generateMipmap(Rt),pt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),pt.unbindTexture()},this.resetState=function(){I=0,C=0,R=null,pt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===za?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?ci:uh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ci?Me:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},va=class extends zs{};va.prototype.isWebGL1Renderer=!0;var qr=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Xn=class extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zl=new L,Jl=new L,$l=new fe,Zo=new Ns,br=new qi,ya=class extends Ne{constructor(t=new Oe,e=new Xn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Zl.fromBufferAttribute(e,s-1),Jl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Zl.distanceTo(Jl);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;$l.copy(s).invert(),Zo.copy(t.ray).applyMatrix4($l);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,h=new L,d=new L,f=new L,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){let u=Math.max(0,a.start),b=Math.min(_.count,a.start+a.count);for(let v=u,T=b-1;v<T;v+=m){let I=_.getX(v),C=_.getX(v+1);if(l.fromBufferAttribute(p,I),h.fromBufferAttribute(p,C),Zo.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);let q=t.ray.origin.distanceTo(f);q<t.near||q>t.far||e.push({distance:q,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let u=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let v=u,T=b-1;v<T;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Zo.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Kl=new L,jl=new L,hi=class extends ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Kl.fromBufferAttribute(e,s),jl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kl.distanceTo(jl);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Er=new L,wr=new L,Jo=new L,Tr=new ri,ji=class extends Oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Vi*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),f={},m=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:x,b:p,c:u}=Tr;if(x.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),u.fromBufferAttribute(o,l[2]),Tr.getNormal(Jo),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let v=(b+1)%3,T=d[b],I=d[v],C=Tr[h[b]],R=Tr[h[v]],q=`${T}_${I}`,S=`${I}_${T}`;S in f&&f[S]?(Jo.dot(f[S].normal)<=r&&(m.push(C.x,C.y,C.z),m.push(R.x,R.y,R.z)),f[S]=null):q in f||(f[q]={index0:l[b],index1:l[v],normal:Jo.clone()})}}for(let _ in f)if(f[_]){let{index0:x,index1:p}=f[_];Er.fromBufferAttribute(o,x),wr.fromBufferAttribute(o,p),m.push(Er.x,Er.y,Er.z),m.push(wr.x,wr.y,wr.z)}this.setAttribute("position",new pe(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Zr=class extends Rn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Tt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Bs=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ar(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function J0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ma=class extends Qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rl:r=t,o=2*e-i;break;case ol:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case rl:a=t,c=2*i-e;break;case ol:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),x=_*_,p=x*_,u=-f*p+2*f*x-f*_,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*_+1,v=(-1-m)*p+(1.5+m)*x+.5*_,T=m*p-m*x;for(let I=0;I!==o;++I)r[I]=u*a[h+I]+b*a[l+I]+v*a[c+I]+T*a[d+I];return r}},Sa=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},ba=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ar(e,this.TimeBufferType),this.values=Ar(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ar(t.times,Array),values:Ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ma(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Pr:e=this.InterpolantFactoryMethodLinear;break;case wo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return wo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&J0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*i,f=d-i,m=d+i;for(let _=0;_!==i;++_){let x=e[d+_];if(x!==e[f+_]||x!==e[m+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*i,f=a*i;for(let m=0;m!==i;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Pr;var ui=class extends ln{};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Cr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends ln{};Ea.prototype.ValueTypeName="color";var wa=class extends ln{};wa.prototype.ValueTypeName="number";var Ta=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Wn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ks=class extends ln{InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.DefaultInterpolation=Pr;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends ln{};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Cr;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends ln{};Aa.prototype.ValueTypeName="vector";var Ra=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],_=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},$0=new Ra,Ca=class{constructor(t){this.manager=t!==void 0?t:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var $o=new fe,Ql=new L,th=new L,Pa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ia=class extends Pa{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Ia}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$r=class extends Jr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Va="\\[\\]\\.:\\/",K0=new RegExp("["+Va+"]","g"),Ha="[^"+Va+"]",j0="[^"+Va.replace("\\.","")+"]",Q0=/((?:WC+[\/:])*)/.source.replace("WC",Ha),tx=/(WCOD+)?/.source.replace("WCOD",j0),ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ha),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ha),ix=new RegExp("^"+Q0+tx+ex+nx+"$"),sx=["material","materials","bones","map"],La=class{constructor(t,e,i){let s=i||te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(K0,"")}static parseTrackName(t){let e=ix.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);sx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};te.Composite=La;te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};te.prototype.GetterByBindingType=[te.prototype._getValue_direct,te.prototype._getValue_array,te.prototype._getValue_arrayElement,te.prototype._getValue_toArray];te.prototype.SetterByBindingTypeAndVersioning=[[te.prototype._setValue_direct,te.prototype._setValue_direct_setNeedsUpdate,te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[te.prototype._setValue_array,te.prototype._setValue_array_setNeedsUpdate,te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[te.prototype._setValue_arrayElement,te.prototype._setValue_arrayElement_setNeedsUpdate,te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[te.prototype._setValue_fromArray,te.prototype._setValue_fromArray_setNeedsUpdate,te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var Kr=class{constructor(t,e,i=0,s=1/0){this.ray=new Ns(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Da(t,this,i,e),i.sort(eh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Da(t[s],this,i,e);return i.sort(eh),i}};function eh(n,t){return n.distance-t.distance}function Da(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Da(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);var ee=document.getElementById("c"),ns=new zs({canvas:ee,antialias:!0});ns.setPixelRatio(Math.min(devicePixelRatio,2));ns.shadowMap.enabled=!0;ns.shadowMap.type=Na;var be=new qr;be.background=new Tt("#7aa0c4");var rx=Math.atan(1/Math.SQRT2),Gt={azim:Math.PI/4,elev:rx,zoom:80,target:new L(30,15,23)},Jt={azim:Gt.azim,elev:Gt.elev,zoom:Gt.zoom,target:Gt.target.clone()},Th=900,eo=2e3,Wt=new Ki(-1,1,1,-1,.1,4e3),Ah={uGround:{value:1}},Ga=new Se(new $i(2,2),new cn({uniforms:Ah,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));Ga.frustumCulled=!1;Ga.renderOrder=-1e9;be.add(Ga);function Rh(){Ah.uGround.value=Math.max(0,Math.min(1,(Gt.elev+.05)/.1))}be.add(new $r(16777215,.62));var Xe=new Vs(16777215,.78);Xe.castShadow=!0;Xe.shadow.mapSize.set(4096,4096);Xe.shadow.normalBias=.15;Xe.shadow.bias=-2e-4;be.add(Xe);be.add(Xe.target);var Ch=new Vs(16777215,.16);Ch.position.set(-6,5,-7);be.add(Ch);var Gs={tail:60},is=()=>{Gs.tail=30},Wa=new Cn(1,1,1),Ws=new L,no=new L,ox=new Tt("#0f1115"),Eh=new Map,wh=new Map;function Xs(n){let t=Eh.get(n);return t||(t=new Tt().setHex(n),Eh.set(n,t)),t}function Xa(n){let t=wh.get(n);return t||(t=new Tt().setHex(n).lerp(ox,.62),wh.set(n,t)),t}var Ya=new Bs({vertexColors:!0,side:je}),ax=.42,qa=new Bs({vertexColors:!0,transparent:!0,opacity:ax,side:je,depthWrite:!1});qa.shadowSide=sn;var Ph=new Zi({colorWrite:!1,side:je});var fi=new Se(new $i(8e3,8e3),new Zr({opacity:.32}));fi.rotation.x=-Math.PI/2;fi.position.y=0;fi.receiveShadow=!0;fi.renderOrder=-1;be.add(fi);var Yn=new wn;be.add(Yn);var Pn=new wn;be.add(Pn);var Ye=new hi(new ji(Wa),new Xn({color:10994876,depthTest:!1}));Ye.visible=!1;Ye.renderOrder=999;be.add(Ye);var pi=new hi(new Oe,new Xn({vertexColors:!0,transparent:!0,depthTest:!1}));pi.renderOrder=998;pi.visible=!1;be.add(pi);var pn=new Kr,qn=new Ht,io=new L,Ys=new L;var Za=(n,t,e)=>n+65536+(t+65536)*131072+(e+65536)*131072*131072;var hn=(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z});function le(n,t){let{x:e,y:i,z:s}=n;switch(t&3){case 1:return{x:-s,y:i,z:e};case 2:return{x:-e,y:i,z:-s};case 3:return{x:s,y:i,z:-e};default:return{x:e,y:i,z:s}}}var ss=(n,t)=>({rot:n.rot+t.rot&3,off:hn(le(t.off,n.rot),n.off)}),Ih=n=>{let t=4-(n.rot&3)&3,e=le(n.off,t);return{rot:t,off:{x:-e.x,y:-e.y,z:-e.z}}},Ja=n=>n.slice(1).reduce((t,e)=>ss(t,{off:e.pos,rot:e.rot}),{off:{x:0,y:0,z:0},rot:0}),rs=n=>"#"+(n>>>0).toString(16).padStart(6,"0").slice(-6),$a=1,so=()=>"n"+$a++,os=()=>$a,as=n=>{$a=n};var ne=(n,t,e,i,s,r,a)=>({x0:n,y0:t,z0:e,x1:i,y1:s,z1:r,c:a}),Ka=(n,t)=>n.x0<t.x1&&t.x0<n.x1&&n.y0<t.y1&&t.y0<n.y1&&n.z0<t.z1&&t.z0<n.z1;function ja(n,t,e){let i=Math.max(n.x0,t.x0),s=Math.max(n.y0,t.y0),r=Math.max(n.z0,t.z0),a=Math.min(n.x1,t.x1),o=Math.min(n.y1,t.y1),c=Math.min(n.z1,t.z1);if(i>=a||s>=o||r>=c){e.push(n);return}let l=n.c;n.x0<i&&e.push({...n,x1:i}),a<n.x1&&e.push({...n,x0:a}),n.y0<s&&e.push({x0:i,y0:n.y0,z0:n.z0,x1:a,y1:s,z1:n.z1,c:l}),o<n.y1&&e.push({x0:i,y0:o,z0:n.z0,x1:a,y1:n.y1,z1:n.z1,c:l}),n.z0<r&&e.push({x0:i,y0:s,z0:n.z0,x1:a,y1:o,z1:r,c:l}),c<n.z1&&e.push({x0:i,y0:s,z0:c,x1:a,y1:o,z1:n.z1,c:l})}function Lh(n,t,e){let i=[];for(let s of n)Ka(s,t)?ja(s,t,i):i.push(s);return i.push({...t,c:e}),i}function cs(n,t){let e=[];for(let i of n)Ka(i,t)?ja(i,t,e):e.push(i);return e}function Dh(n,t,e){let i=[];for(let s of n){if(!Ka(s,t)){i.push(s);continue}ja(s,t,i),i.push({x0:Math.max(s.x0,t.x0),y0:Math.max(s.y0,t.y0),z0:Math.max(s.z0,t.z0),x1:Math.min(s.x1,t.x1),y1:Math.min(s.y1,t.y1),z1:Math.min(s.z1,t.z1),c:e})}return i}function Uh(n,t){for(let e of n){let i=(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0);t.set(e.c,(t.get(e.c)||0)+i)}}function Zn(n,t){for(let e of n)e.x0<t.min.x&&(t.min.x=e.x0),e.y0<t.min.y&&(t.min.y=e.y0),e.z0<t.min.z&&(t.min.z=e.z0),e.x1>t.max.x&&(t.max.x=e.x1),e.y1>t.max.y&&(t.max.y=e.y1),e.z1>t.max.z&&(t.max.z=e.z1)}function mn(n,t,e){let i=le({x:n.x0,y:n.y0,z:n.z0},t),s=le({x:n.x1-1,y:n.y1-1,z:n.z1-1},t);return{x0:Math.min(i.x,s.x)+e.x,y0:Math.min(i.y,s.y)+e.y,z0:Math.min(i.z,s.z)+e.z,x1:Math.max(i.x,s.x)+e.x+1,y1:Math.max(i.y,s.y)+e.y+1,z1:Math.max(i.z,s.z)+e.z+1,c:n.c}}var Fe=16,ze=Math.floor;function ro(n){if(!n.length)return()=>!1;let t=1/0,e=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let x of n)x.x0<t&&(t=x.x0),x.y0<e&&(e=x.y0),x.z0<i&&(i=x.z0),x.x1>s&&(s=x.x1),x.y1>r&&(r=x.y1),x.z1>a&&(a=x.z1);let o=ze(t/Fe),c=ze(e/Fe),l=ze(i/Fe),h=ze((s-1)/Fe)-o+1,d=ze((r-1)/Fe)-c+1,f=ze((a-1)/Fe)-l+1,m=Array.from({length:h*d*f},()=>[]),_=(x,p,u)=>((x-o)*d+(p-c))*f+(u-l);for(let x of n)for(let p=ze(x.x0/Fe);p<=ze((x.x1-1)/Fe);p++)for(let u=ze(x.y0/Fe);u<=ze((x.y1-1)/Fe);u++)for(let b=ze(x.z0/Fe);b<=ze((x.z1-1)/Fe);b++)m[_(p,u,b)].push(x);return(x,p,u)=>{let b=ze(x/Fe),v=ze(p/Fe),T=ze(u/Fe);if(b<o||v<c||T<l||b-o>=h||v-c>=d||T-l>=f)return!1;for(let I of m[_(b,v,T)])if(x>=I.x0&&x<I.x1&&p>=I.y0&&p<I.y1&&u>=I.z0&&u<I.z1)return!0;return!1}}var Nh=(n,t,e,i)=>{for(let s of n)if(t>=s.x0&&t<s.x1&&e>=s.y0&&e<s.y1&&i>=s.z0&&i<s.z1)return!0;return!1};var Oh=(n,t,e,i,s)=>n.some(r=>t.some(a=>r.x0+e<a.x1&&a.x0<r.x1+e&&r.y0+i<a.y1&&a.y0<r.y1+i&&r.z0+s<a.z1&&a.z0<r.z1+s));var Fh=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],zh={visible:0,transparent:1,invisible:2},Bh={visible:"transparent",transparent:"invisible",invisible:"visible"},qs=()=>({type:"object",id:so(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),ls=()=>({type:"scene",id:so(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function oo(n){let t={id:so(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...t,boxes:n.boxes.map(e=>({...e}))}:{type:"scene",...t,children:n.children.map(oo)}}var mi=n=>g.context.children.find(t=>t.id===n);function hs(n,t=g.root,e=[]){if(e.push(t),t===n)return e.slice();if(t.type==="scene")for(let i of t.children){let s=hs(n,i,e);if(s)return s}return e.pop(),null}function us(n,t=g.root){if(t.id===n)return t;if(t.type==="scene")for(let e of t.children){let i=us(n,e);if(i)return i}return null}function gi(n){let t=hs(n);return t&&t.length>1?t[t.length-2]:null}function ds(n,t){return n===t?!0:n.type!=="scene"?!1:n.children.some(e=>ds(e,t))}var fs=()=>Ja(g.path),Zs=n=>Ja(hs(n)||[g.root]),gn=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}});function Jn(n,t,e,i){if(n.type==="object")Zn(n.boxes.map(s=>mn(s,e,t)),i);else for(let s of n.children)Jn(s,hn(t,le(s.pos,e)),e+s.rot&3,i);return i}function ao(n,t){let e=ee.getBoundingClientRect();qn.x=(n-e.left)/e.width*2-1,qn.y=-((t-e.top)/e.height)*2+1}function Qa(){pn.setFromCamera(qn,Wt);let n=pn.intersectObjects(g.pickMeshes,!1);return n.length?n[0].object.userData.childId??null:null}var kh=new nn(new L(0,1,0),0);function ps(n){return pn.setFromCamera(qn,Wt),kh.constant=-n,pn.ray.intersectPlane(kh,io)?{x:Math.floor(io.x),y:n,z:Math.floor(io.z)}:null}function ms(){if(!g.pickMeshes.length)return null;pn.setFromCamera(qn,Wt);let n=pn.intersectObjects(g.pickMeshes,!1);if(!n.length)return null;let t=n[0],e=g.editXform.off,i=4-g.editXform.rot&3,s=le({x:t.point.x-e.x,y:t.point.y-e.y,z:t.point.z-e.z},i),r=t.face?t.face.normal:{x:0,y:1,z:0},a=Math.floor(s.x-r.x*.5),o=Math.floor(s.y-r.y*.5),c=Math.floor(s.z-r.z*.5);return{cell:{x:a,y:o,z:c},addCell:{x:a+Math.round(r.x),y:o+Math.round(r.y),z:c+Math.round(r.z)}}}function Js(n){let t=ps(n+g.editXform.off.y);if(!t)return null;let e=le({x:t.x-g.editXform.off.x,y:0,z:t.z-g.editXform.off.z},4-g.editXform.rot&3);return{x:Math.round(e.x),y:n,z:Math.round(e.z)}}var gs=(n,t,e)=>{let i=le({x:n,y:t,z:e},g.editXform.rot);return new L(i.x+g.editXform.off.x,i.y+g.editXform.off.y,i.z+g.editXform.off.z)};function co(n=ms()){return g.tool==="add"?n?n.addCell:Js(0):n?n.cell:null}var cx=new Tt(10994876),lx=new Tt(6055805),xs=()=>g.editObject?g.tool==="measure":g.measMode,tc=()=>{g.measFieldCache=null};function un(){g.liveMeas=null,g.frozenMeas=[],_s()}function Vh(){if(g.measFieldCache)return g.measFieldCache;let n=[],t;g.editObject?(n.push(...g.editObject.boxes),t=gs):(xi(g.root,{x:0,y:0,z:0},0,null,0,(o,c,l,h)=>{if(h)for(let d of o.boxes)n.push(mn(d,l,c))}),t=(o,c,l)=>new L(o,c,l));let e=gn();Zn(n,e);let i=n.length===0,s={x:e.min.x,y:e.min.y,z:e.min.z},r={x:e.max.x-1,y:e.max.y-1,z:e.max.z-1},a=n.length>64?ro(n):(o,c,l)=>Nh(n,o,c,l);return g.measFieldCache={has:a,mn:s,mx:r,toW:t,empty:i},g.measFieldCache}function hx(){let n=Vh();if(n.empty)return null;let t=null;if(g.editObject){let e=ms();t=e?{...e.cell}:Js(0)}else{pn.setFromCamera(qn,Wt);let e=g.pickMeshes.length?pn.intersectObjects(g.pickMeshes,!1):[];if(e.length){let i=e[0],s=i.face?i.face.normal:{x:0,y:0,z:0};t={x:Math.floor(i.point.x-s.x*.5),y:Math.floor(i.point.y-s.y*.5),z:Math.floor(i.point.z-s.z*.5)}}else t=ps(0)}return t?{x:Math.max(n.mn.x,Math.min(n.mx.x,t.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,t.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,t.z))}:null}function ux(n){let t=Vh(),e=["x","y","z"],i=[];for(let s=0;s<3;s++){let r=e[s],a=e[(s+1)%3],o=e[(s+2)%3],c=t.mn[r],l=t.mx[r],h=[n.x,n.y,n.z],d=m=>(h[s]=m,t.has(h[0],h[1],h[2])),f=c;for(;f<=l;){let m=d(f),_=f;for(;_+1<=l&&d(_+1)===m;)_++;let x=p=>{let u={};return u[r]=p,u[a]=n[a]+.5,u[o]=n[o]+.5,t.toW(u.x,u.y,u.z)};i.push({a:x(f),b:x(_+1),mid:x((f+_+1)/2),len:_-f+1,filled:m}),f=_+1}}return i}function Hh(){let n=hx();g.liveMeas=n?ux(n):null,_s()}function Gh(){g.liveMeas&&g.liveMeas.length&&(g.frozenMeas.push(g.liveMeas),_s())}function _s(){let n=document.getElementById("measure");n.innerHTML="",g.measLabels=[];let t=[];g.liveMeas&&t.push({s:g.liveMeas,fz:!1});for(let r of g.frozenMeas)t.push({s:r,fz:!0});let e=[],i=[];for(let r of t)for(let a of r.s){let o=a.filled?cx:lx;if(e.push(a.a.x,a.a.y,a.a.z,a.b.x,a.b.y,a.b.z),i.push(o.r,o.g,o.b,o.r,o.g,o.b),a.nolabel)continue;let c=document.createElement("div");c.className="mlab"+(a.filled?"":" empty")+(r.fz?" frozen":""),c.textContent=String(a.len),n.appendChild(c),g.measLabels.push({el:c,w:a.mid})}pi.geometry.dispose();let s=new Oe;s.setAttribute("position",new pe(e,3)),s.setAttribute("color",new pe(i,3)),pi.geometry=s,pi.visible=e.length>0}function Wh(){if(!g.measLabels.length)return;let n=ee.getBoundingClientRect();for(let t of g.measLabels){if(Ys.copy(t.w).project(Wt),Ys.z>1){t.el.style.display="none";continue}t.el.style.display="",t.el.style.left=(Ys.x*.5+.5)*n.width+"px",t.el.style.top=(-Ys.y*.5+.5)*n.height+"px"}}var ec=new L(40,150,30).normalize();function dx(n){if(n.max.x<n.min.x)return;let t=(n.min.x+n.max.x)/2,e=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,s=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,r=s+130;Xe.position.set(t+ec.x*r,e+ec.y*r,i+ec.z*r),Xe.target.position.set(t,e,i),Xe.target.updateMatrixWorld();let a=Xe.shadow.camera;a.left=-s,a.right=s,a.top=s,a.bottom=-s,a.near=Math.max(1,r-s-20),a.far=r+s+20,a.updateProjectionMatrix(),Xe.shadow.normalBias=s/Xe.shadow.mapSize.x}function fx(){for(let n of g.meshes)be.remove(n),n.geometry&&n.geometry!==Wa&&n.geometry.dispose();g.meshes=[],Yn.clear(),g.editRemesh&&(cancelAnimationFrame(g.editRemesh),g.editRemesh=0),g.editMesh=null}var px=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],lo=[1,.88,.74,.5];function Yh(n,t,e){let i=[],s=[],r=[],a=n.map(h=>[h.x0,h.y0,h.z0]),o=n.map(h=>[h.x1,h.y1,h.z1]),c=e?ro(n):null;for(let h=0;h<n.length;h++){let d=t(n[h].c),f=d.r,m=d.g,_=d.b,x=a[h],p=o[h];for(let u of px){let{a:b,u:v,v:T}=u,I=u.hi?p[b]:x[b],C=u.hi?I:I-1,R=[];for(let W=0;W<n.length;W++){if(W===h||(u.hi?a[W][b]:o[W][b])!==I)continue;let Z=Math.max(a[W][v],x[v]),A=Math.min(o[W][v],p[v]),D=Math.max(a[W][T],x[T]),B=Math.min(o[W][T],p[T]);Z<A&&D<B&&R.push([Z,D,A,B])}let q=[[x[v],x[T],p[v],p[T]]];for(let W of R){let Z=[];for(let A of q){let D=Math.max(A[0],W[0]),B=Math.max(A[1],W[1]),X=Math.min(A[2],W[2]),H=Math.min(A[3],W[3]);if(D>=X||B>=H){Z.push(A);continue}A[0]<D&&Z.push([A[0],A[1],D,A[3]]),X<A[2]&&Z.push([X,A[1],A[2],A[3]]),A[1]<B&&Z.push([D,A[1],X,B]),H<A[3]&&Z.push([D,H,X,A[3]])}if(q=Z,!q.length)break}let S=(W,Z)=>{let A=0,D=[0,0,0];D[b]=C;for(let B=-1;B<=0;B++)for(let X=-1;X<=0;X++)D[v]=W+B,D[T]=Z+X,c(D[0],D[1],D[2])&&A++;return A},w=(W,Z)=>(lo[Math.min(S(W,Z),3)]+lo[Math.min(S(W+1,Z),3)]+lo[Math.min(S(W+1,Z+1),3)]+lo[Math.min(S(W,Z+1),3)])/4,V=(W,Z,A,D,B)=>{let X=[0,0,0],H=(dt,ft)=>(X[b]=I,X[v]=dt,X[T]=ft,[X[0],X[1],X[2]]),Y=H(W,Z),$=H(A,Z),Q=H(A,D),ct=H(W,D),G=f*B,J=m*B,at=_*B;for(let dt of[Y,$,Q,Y,Q,ct])i.push(dt[0],dt[1],dt[2]),s.push(u.n[0],u.n[1],u.n[2]),r.push(G,J,at)};for(let W of q){let[Z,A,D,B]=W;if(!c){V(Z,A,D,B,1);continue}let X=(H,Y)=>V(H,Y,H+1,Y+1,w(H,Y));for(let H=Z;H<D;H++)X(H,A),B-1>A&&X(H,B-1);for(let H=A+1;H<B-1;H++)X(Z,H),D-1>Z&&X(D-1,H);Z+1<D-1&&A+1<B-1&&V(Z+1,A+1,D-1,B-1,1)}}}if(!i.length)return null;let l=new Oe;return l.setAttribute("position",new pe(i,3)),l.setAttribute("normal",new pe(s,3)),l.setAttribute("color",new pe(r,3)),l}function $s(n,t,{transparent:e=!1,pick:i=!1,childId:s=null}={}){if(!n.length)return null;let r=Yh(n,t,!e);if(!r)return null;let a=new Se(r,e?qa:Ya);if(a.castShadow=!0,a.receiveShadow=!0,be.add(a),g.meshes.push(a),e){a.renderOrder=2;let o=new Se(r,Ph);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,be.add(o),g.meshes.push(o)}return i&&(a.userData.childId=s,a.userData.emph=!e,g.pickMeshes.push(a),(g.childMeshes[s]||(g.childMeshes[s]=[])).push(a)),a}function xi(n,t,e,i,s,r){let a=Math.max(s,zh[n.vis||"visible"]);if(!(n===g.editObject||a>=2))if(n.type==="object")r(n,t,e,i,a===1);else for(let o of n.children)xi(o,hn(t,le(o.pos,e)),e+o.rot&3,n===g.context?o.id:i,a,r)}var Xh=(n,t,e,i)=>{for(let s of n.boxes)i.push(mn(s,e,t));return i};function qh(){let{off:n,rot:t}=g.editXform;if(Yn.position.set(n.x,n.y,n.z),Yn.rotation.set(0,-t*Math.PI/2,0),Yn.updateMatrixWorld(!0),g.editMesh){Yn.remove(g.editMesh),g.editMesh.geometry.dispose();let i=g.meshes.indexOf(g.editMesh);i>=0&&g.meshes.splice(i,1)}let e=Yh(g.editObject.boxes,Xs,!0);g.editMesh=e?new Se(e,Ya):null,g.editMesh&&(g.editMesh.castShadow=g.editMesh.receiveShadow=!0,Yn.add(g.editMesh),g.meshes.push(g.editMesh)),g.pickMeshes=g.editMesh?[g.editMesh]:[]}function mx(){g.editRemesh||(g.editRemesh=requestAnimationFrame(()=>{g.editRemesh=0,qh(),is()}))}function nc(){g.voxVer++,tc(),mx()}function Zh(n,t){g.editObject.boxes=Lh(g.editObject.boxes,n,t),nc()}function Jh(n){g.editObject.boxes=cs(g.editObject.boxes,n),nc()}function $h(n,t){g.editObject.boxes=Dh(g.editObject.boxes,n,t),nc()}function ke(){fx(),g.pickMeshes=[],g.childMeshes={},g.childBox={},g.voxVer++,tc();let n={x:0,y:0,z:0},t=gn();if(g.editObject){g.editXform=ss(fs(),{off:g.editObject.pos,rot:g.editObject.rot});let e=[];xi(g.root,n,0,null,0,(i,s,r)=>Xh(i,s,r,e)),Zn(e,t),$s(e,i=>Xs(i),{transparent:!0}),qh(),Jn(g.editObject,g.editXform.off,g.editXform.rot,t)}else{let e=new Map,i=new Map,s=[],r=[];xi(g.root,n,0,null,0,(a,o,c,l,h)=>{let d=Xh(a,o,c,[]);if(Zn(d,t),l){let f=h?i:e,m=f.get(l);m?m.push(...d):f.set(l,d),Zn(d,g.childBox[l]||(g.childBox[l]=gn()))}else(h?r:s).push(...d)}),$s(s,a=>Xa(a)),$s(r,a=>Xa(a),{transparent:!0});for(let a of new Set([...e.keys(),...i.keys()])){let o=e.get(a);o&&$s(o,l=>Xs(l),{pick:!0,childId:a});let c=i.get(a);c&&$s(c,l=>Xs(l),{transparent:!0})}}g.sceneBox=t,dx(t),ic(),is()}function gx(n,t,e){let i=new Cn(t.x-n.x,t.y-n.y,t.z-n.z),s=new hi(new ji(i),new Xn({color:e,depthTest:!1}));return s.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),s.renderOrder=999,i.dispose(),s}function ic(){for(let n of Pn.children)n.geometry?.dispose?.();if(Pn.clear(),Pn.position.set(0,0,0),!g.editObject)for(let n of g.selection){let t=g.childBox[n];t&&Pn.add(gx(t.min,t.max,15787730))}}var Ks=new L,sc=new L,rc=new L,Kh=new L,xx=new L(0,1,0);function jh(n,t){let e=ee.getBoundingClientRect(),i=(Wt.top-Wt.bottom)/e.height;Wt.getWorldDirection(sc),rc.crossVectors(sc,xx).normalize(),Kh.crossVectors(rc,sc).normalize(),Jt.target.addScaledVector(rc,-n*i),Jt.target.addScaledVector(Kh,t*i)}function Qh(n,t){Jt.azim-=n*.012,Jt.elev=Math.max(-.35,Math.min(Math.PI/2,Jt.elev+t*.012))}function tu(n){n.max.x<n.min.x||(Jt.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),Jt.zoom=Math.max(8,Math.min(eo,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function In(){let n=gn();if(g.editObject){if(Jn(g.editObject,g.editXform.off,g.editXform.rot,n),n.max.x<n.min.x){let t=g.editXform.off;Jt.target.set(t.x,t.y+6,t.z),Jt.zoom=41;return}}else for(let t in g.childBox){let e=g.childBox[t];n.min.x=Math.min(n.min.x,e.min.x),n.min.y=Math.min(n.min.y,e.min.y),n.min.z=Math.min(n.min.z,e.min.z),n.max.x=Math.max(n.max.x,e.max.x),n.max.y=Math.max(n.max.y,e.max.y),n.max.z=Math.max(n.max.z,e.max.z)}if(n.max.x<n.min.x){Jt.target.set(0,1,0),Jt.zoom=23;return}tu(n)}function oc(n){if(n===g.root){In();return}let t=Zs(n);tu(Jn(n,t.off,t.rot,gn()))}function eu(){Gt.azim+=(Jt.azim-Gt.azim)*.22,Gt.elev+=(Jt.elev-Gt.elev)*.22,Gt.zoom+=(Jt.zoom-Gt.zoom)*.25,Gt.target.lerp(Jt.target,.25);let n=Math.cos(Gt.elev),t=Math.sin(Gt.elev);Ks.set(n*Math.sin(Gt.azim),t,n*Math.cos(Gt.azim)),Wt.position.copy(Gt.target).addScaledVector(Ks,Th);let e=ph.clamp((Gt.elev-1.45)/(Math.PI/2-1.45),0,1);no.set(-Math.sin(Gt.azim),0,-Math.cos(Gt.azim)),Ws.set(0,1,0).lerp(no,e),Ws.lengthSq()<1e-6&&Ws.copy(no),Wt.up.copy(Ws.normalize()),Wt.lookAt(Gt.target);let i=ee.getBoundingClientRect(),s=i.width/i.height,r=Gt.zoom,a=r*s;Wt.left=-a/2,Wt.right=a/2,Wt.top=r/2,Wt.bottom=-r/2;let o=Wt.position,c=1/0,l=-1/0,h=(x,p,u)=>{let b=(o.x-x)*Ks.x+(o.y-p)*Ks.y+(o.z-u)*Ks.z;b<c&&(c=b),b>l&&(l=b)},d=g.sceneBox;if(d&&d.max.x>=d.min.x)for(let x of[d.min.x,d.max.x])for(let p of[d.min.y,d.max.y])for(let u of[d.min.z,d.max.z])h(x,p,u);let f=Gt.target.x,m=Gt.target.z,_=4e3;for(let x of[-_,_])for(let p of[-_,_])h(f+x,0,m+p);c>l&&(c=.1,l=4e3),Wt.near=c-10,Wt.far=l+10,Wt.zoom=1,Wt.updateProjectionMatrix(),fi.position.set(Gt.target.x,0,Gt.target.z),Rh()}var ho=()=>{ke(),Ee()};function _x(){if(g.path.length>1){let n=g.path.pop();g.context=g.path[g.path.length-1],g.selection=new Set([n.id]),g.editObject=null,un(),ho()}}function vx(){let n=g.editObject;g.editObject=null,g.selection=new Set([n.id]),un(),ho()}function nu(){g.editObject?vx():_x()}function _i(n){let t=hs(n);t&&(g.path=t.slice(0,-1),g.context=g.path[g.path.length-1],g.selection=new Set([n.id]),g.editObject=null,ho())}function iu(n){return n.type==="object"?g.editObject===n:g.context===n&&!g.editObject}function vi(n,t){let e=hs(n);e&&(n.type==="scene"?(g.path=e,g.context=n,g.selection.clear(),g.editObject=null,g.tool="add"):(g.path=e.slice(0,-1),g.context=g.path[g.path.length-1],g.editObject=n,g.selection.clear(),g.tool="add"),un(),ho(),t&&In())}var yx=200,Ln=[],yi=-1,ac=!1,Mx=n=>({rootJSON:n,uid:os(),pathIds:g.path.map(t=>t.id),selection:[...g.selection],editId:g.editObject?g.editObject.id:null,collapsed:[...g.collapsed]});function su(n){if(ac)return;let t=Mx(n),e=Ln[yi];e&&e.rootJSON===t.rootJSON&&e.editId===t.editId||(Ln.length=yi+1,Ln.push(t),Ln.length>yx&&Ln.shift(),yi=Ln.length-1)}function ru(n){ac=!0,as(n.uid),g.root=vs(JSON.parse(n.rootJSON)),g.path=[];let t=g.root;for(let e of n.pathIds){let i=t.id===e?t:t.type==="scene"?t.children.find(s=>s.id===e):null;if(!i)break;t=i,g.path.push(t)}g.path.length||(g.path=[g.root]),g.context=g.path[g.path.length-1],g.editObject=n.editId?us(n.editId):null,g.selection=new Set(n.selection.filter(e=>g.context.children.some(i=>i.id===e))),g.collapsed=new Set(n.collapsed),g.drag=null,g.painting=!1,g.lastVox=null,ke(),Ee(),he(),ac=!1}function ou(){ys(),yi>0&&ru(Ln[--yi])}function cc(){ys(),yi<Ln.length-1&&ru(Ln[++yi])}var au="voxelier-v11";function uo(n){let t={id:n.id,nm:n.name||"",p:n.pos,r:n.rot,vs:n.vis||"visible"};return n.type==="object"?{t:"o",...t,b:n.boxes.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c])}:{t:"s",...t,c:n.children.map(uo)}}function vs(n){let t={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:n.vs||"visible"};return n.t==="o"?{type:"object",...t,boxes:n.b.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]}))}:{type:"scene",...t,children:n.c.map(vs)}}function ys(){clearTimeout(g.saveT??void 0),g.saveT=null;let n=JSON.stringify(uo(g.root));su(n);try{localStorage.setItem(au,`{"uid":${os()},"root":${n}}`)}catch{}}function he(){clearTimeout(g.saveT??void 0),g.saveT=setTimeout(ys,250)}function cu(){try{let n=JSON.parse(localStorage.getItem(au));return!n||!n.root?!1:(as(n.uid||1),g.root=vs(n.root),!0)}catch{return!1}}var Ms=()=>{ke(),Ee(),he()};function lu(n){n.vis=Bh[n.vis||"visible"],Ms()}function lc(n){let t=prompt("Name",n.name||"");t!=null&&(n.name=t.trim(),Ee(),he())}var hu=()=>[...g.selection].map(n=>mi(n)).filter(n=>!!n),hc=n=>{let t=oo(n);return t.pos={x:n.pos.x+5,y:n.pos.y,z:n.pos.z+5},t};function uu(){let n=qs();n.pos={x:Math.round(Jt.target.x),y:0,z:Math.round(Jt.target.z)},g.context.children.push(n),vi(n,!0),he()}function uc(){g.selection.size&&(g.context.children=g.context.children.filter(n=>!g.selection.has(n.id)),g.selection.clear(),Ms())}function du(){let n=hu().map(hc);n.length&&(g.context.children.push(...n),g.selection=new Set(n.map(t=>t.id)),Ms())}function dc(){g.clipboard=hu().map(oo)}function fu(){dc(),uc()}function pu(){if(!g.clipboard.length)return;let n=g.clipboard.map(hc);g.context.children.push(...n),g.selection=new Set(n.map(t=>t.id)),Ms()}function fc(n,t,e){if(n===t||ds(n,t))return!1;let i=gi(n);if(!i)return!1;let s=ss(Zs(i),{off:{...n.pos},rot:n.rot}),r=ss(Ih(Zs(t)),s),a=i.children.indexOf(n);return i.children.splice(a,1),i===t&&a<e&&e--,n.pos={x:Math.round(r.off.x),y:Math.round(r.off.y),z:Math.round(r.off.z)},n.rot=r.rot&3,t.children.splice(Math.max(0,Math.min(e,t.children.length)),0,n),!0}function pc(n){let t=gi(n);if(!t)return null;let e=t.children.indexOf(n),i=ls();return i.name="Group",i.pos={...n.pos},i.rot=n.rot,t.children.splice(e,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function mu(n,t){if(t===n||ds(t,n))return!1;let e=pc(n);return e?(fc(t,e,e.children.length),g.collapsed.delete(e.id),g.selection=new Set([e.id]),Ms(),!0):!1}function gu(n){let t=gi(n);if(!t)return;let e=hc(n);t.children.splice(t.children.indexOf(n)+1,0,e),_i(e),he()}function xu(n){let t=gi(n);t&&(t.children=t.children.filter(e=>e!==n),g.selection.delete(n.id),g.editObject===n&&(g.editObject=null),Ms())}function _u(n){let t=qs();n.children.push(t),g.collapsed.delete(n.id),vi(t,!0),he()}function vu(n){let t=ls();t.name="Group",n.children.push(t),g.collapsed.delete(n.id),_i(t),he()}function mc(n){let t=n<0?-1:1;for(let e=0;e<Math.abs(n);e++){let i=fs(),s=r=>Jn(r,hn(i.off,le(r.pos,i.rot)),i.rot+r.rot&3,gn());for(let r of g.selection){let a=mi(r);if(!a)continue;let o=s(a);a.rot=a.rot+t&3;let c=s(a),l={x:(o.min.x+o.max.x)/2-(c.min.x+c.max.x)/2,z:(o.min.z+o.max.z)/2-(c.min.z+c.max.z)/2},h=le({x:Math.round(l.x),y:0,z:Math.round(l.z)},4-i.rot&3);a.pos.x+=h.x,a.pos.z+=h.z}}g.selection.size&&ke()}function yu(){g.selection.size&&(mc(1),he())}function gc(n){for(let t of g.selection){let e=mi(t);e&&(e.pos.y+=n)}g.selection.size&&(ke(),he())}function Mu(){let n=JSON.stringify({uid:os(),root:uo(g.root)}),t=URL.createObjectURL(new Blob([n],{type:"application/json"})),e=g.root.name||"Project",i=new Date,[s,r]=new Date(i.getTime()-i.getTimezoneOffset()*6e4).toISOString().slice(0,19).split("T"),a=`${s} ${r.replace(/:/,"h").replace(/:/,"m")}s`,o=document.createElement("a");o.href=t,o.download=`${e} -- ${a}.voxelier.json`,o.click(),URL.revokeObjectURL(t)}function Su(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let t=n.files&&n.files[0];if(!t)return;let e=new FileReader;e.onload=()=>{try{let i=JSON.parse(e.result);if(!i||!i.root)throw new Error("not a Voxelier scene file");as(i.uid||1),g.root=vs(i.root),g.path=[g.root],g.context=g.root,g.editObject=null,g.selection.clear(),un(),ke(),Ee(),In(),he()}catch(i){alert("Import failed: "+i.message)}},e.readAsText(t)},n.click()}function ue(n,t={},...e){let i=document.createElement(n);return Object.assign(i,t),e.length&&i.append(...e),i}var Sx=[{id:"add",ic:"\uFF0B",label:"Add"},{id:"erase",ic:"\uFF0D",label:"Erase"},{id:"paint",ic:"\u2756",label:"Paint"},{id:"measure",ic:"\u{1F4CF}",label:"Measure"}],bx={visible:"\u25C9",transparent:"\u25D0",invisible:"\u29B0"};function Ee(){let n=document.getElementById("tools");if(n.innerHTML="",g.editObject)for(let e of Sx)n.appendChild(ue("button",{className:"tool"+(g.tool===e.id?" active":""),innerHTML:`<span class="ic">${e.ic}</span>${e.label}`,onclick:()=>{g.tool=e.id,un(),Ye.visible=!1,Ee()}}));else n.appendChild(ue("button",{className:"tool"+(g.measMode?" active":""),innerHTML:'<span class="ic">\u{1F4CF}</span>Measure',onclick:()=>{g.measMode=!g.measMode,g.measMode||un(),Ee()}}));let t=ue("div");t.style.flex="1",n.appendChild(t);for(let[e,i,s]of[["\u{1F4C2}","Import",Su],["\u{1F4BE}","Export",Mu]])n.appendChild(ue("button",{className:"tool",innerHTML:`<span class="ic">${e}</span>${i}`,onclick:s}));Au(),Ss(),document.getElementById("statHint").textContent=xs()?"Measure \u2014 hover to read voxel/gap runs on all 3 axes \xB7 left-click freezes \xB7 right-click clears":g.editObject?g.tool==="paint"?"Paint \u2014 click/drag to recolour voxels \xB7 right-drag orbits \xB7 middle-drag pans \xB7 Esc to finish":`${g.tool==="add"?"Add":"Erase"} \u2014 drag a box in the floor plane (Shift = height) \xB7 right-drag orbits \xB7 middle-drag pans \xB7 Esc to finish`:g.selection.size?`${g.selection.size} selected \u2014 drag to move (Shift: up/down \xB7 Alt: allow overlap) \xB7 right-drag rotate \xB7 R rotate \xB7 Del`:"Tree: click a row to enter it \xB7 double-click to fit \xB7 right-click for actions \xB7 N new object"}var fo={ver:-1,cols:[]};function Eu(){if(fo.ver===g.voxVer)return fo.cols;let n=new Map;return function t(e){e.type==="object"?Uh(e.boxes,n):e.children.forEach(t)}(g.root),fo={ver:g.voxVer,cols:[...n.entries()].sort((t,e)=>e[1]-t[1]).map(t=>t[0])},fo.cols}function Ss(){let n=document.getElementById("swatches");n.innerHTML="";let t=Eu().slice();t.includes(g.selColor)||t.unshift(g.selColor);let e=i=>{let s=ue("div",{className:"sw"+(i===g.selColor?" active":""),title:rs(i),onclick:()=>{g.selColor=i,Ss()}});return s.style.background=rs(i),s};if(t.length>15){for(let i=0;i<14;i++)n.appendChild(e(t[i]));n.appendChild(ue("div",{className:"sw more",textContent:"\u2026",title:"All used colours",onclick:wx}))}else for(let i=0;i<15;i++)n.appendChild(i<t.length?e(t[i]):ue("div",{className:"sw empty"}));n.appendChild(ue("div",{className:"sw more",textContent:"\u{1F3A8}",title:"Use colour picker",onclick:Ex}))}function Ex(){let n=ue("input",{type:"color",value:rs(g.selColor)});n.style.cssText="position:fixed;left:-9999px;top:0";let t=()=>{g.selColor=parseInt(n.value.slice(1),16),Ss()};n.addEventListener("input",t),n.addEventListener("change",()=>{t(),n.remove()}),document.body.appendChild(n),n.click()}function wx(){po();let n=ue("div",{id:"palback"});n.onclick=s=>{s.target===n&&po()};let t=ue("div",{id:"palpop"});t.appendChild(ue("div",{className:"pophead",textContent:"Used colours"}));let e=ue("div",{className:"popgrid"}),i=Eu();if(!i.length){let s=ue("div",{textContent:"No colours yet."});s.style.cssText="color:var(--ink-dim);font-size:12px",e.appendChild(s)}for(let s of i){let r=ue("div",{className:"sw"+(s===g.selColor?" active":""),title:rs(s),onclick:()=>{g.selColor=s,Ss(),po()}});r.style.background=rs(s),e.appendChild(r)}t.appendChild(e),n.appendChild(t),document.body.appendChild(n)}function po(){let n=document.getElementById("palback");return n?(n.remove(),!0):!1}function wu(n,t,e,i){if(n.type==="object")for(let s of n.boxes)i.push(mn(s,e,t));else for(let s of n.children)wu(s,hn(t,le(s.pos,e)),e+s.rot&3,i);return i}var xc=(n,t)=>{let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,s=Math.min(255,(n&255)*t)|0;return`rgb(${e},${i},${s})`},bu=new Map;function Tu(n){return n.type==="object"?"o"+n.boxes.map(t=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+n.children.map(t=>t.id+Tu(t)).join()}function Tx(n){let t=bu.get(n.id);if(n===g.editObject&&t)return t.cv;let e=Tu(n);if(t&&t.sig===e)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let s=i.getContext("2d");s.fillStyle="#0f1115",s.fillRect(0,0,52,52);let r=wu(n,{x:0,y:0,z:0},0,[]);if(r.length){let a=1e9,o=1e9,c=1e9,l=-1e9,h=-1e9,d=-1e9;for(let u of r)a=Math.min(a,u.x0),o=Math.min(o,u.y0),c=Math.min(c,u.z0),l=Math.max(l,u.x1),h=Math.max(h,u.y1),d=Math.max(d,u.z1);let f=40/Math.max(l-a,h-o,d-c,1),m=26-((a+l)/2-(c+d)/2)*f*.5,_=28+(o+h)/2*f*.6-((a+l)/2+(c+d)/2)*f*.28,x=(u,b,v)=>[m+(u-v)*f*.5,_-b*f*.6+(u+v)*f*.28],p=(u,b)=>{s.fillStyle=u,s.beginPath(),s.moveTo(b[0][0],b[0][1]);for(let v=1;v<b.length;v++)s.lineTo(b[v][0],b[v][1]);s.closePath(),s.fill()};r.sort((u,b)=>u.x0+u.x1+u.y0+u.y1+u.z0+u.z1-(b.x0+b.x1+b.y0+b.y1+b.z0+b.z1));for(let u of r)p(xc(u.c,.78),[x(u.x1,u.y0,u.z0),x(u.x1,u.y1,u.z0),x(u.x1,u.y1,u.z1),x(u.x1,u.y0,u.z1)]),p(xc(u.c,.6),[x(u.x0,u.y0,u.z1),x(u.x1,u.y0,u.z1),x(u.x1,u.y1,u.z1),x(u.x0,u.y1,u.z1)]),p(xc(u.c,1),[x(u.x0,u.y1,u.z0),x(u.x1,u.y1,u.z0),x(u.x1,u.y1,u.z1),x(u.x0,u.y1,u.z1)])}return bu.set(n.id,{sig:e,cv:i}),i}function Ax(n){if(g.pending&&g.pending.node===n){clearTimeout(g.pending.timer),g.pending=null,oc(n);return}g.pending&&clearTimeout(g.pending.timer);let t=e=>{g.pending={node:n,timer:setTimeout(()=>{g.pending=null,e&&e()},300)}};iu(n)?t(()=>lc(n)):(vi(n),t())}function Au(){let n=document.getElementById("tree");n.innerHTML="";let t=(e,i)=>{let s=e===g.root,r=!s&&g.context.children.includes(e)&&g.selection.has(e.id),a=e.vis||"visible",o=ue("div",{className:"trow"+(s?" root":"")+(r?" sel":"")+(e===g.context&&!g.editObject?" ctx":"")+(e===g.editObject?" edit":"")+(!s&&a!=="visible"?" dim":"")});o.style.paddingLeft=4+i*13+"px";let c=Tx(e);if(c.className="thumb",c.onclick=null,c.title="",!s&&e.type==="scene"&&e.children.length){let h=g.collapsed.has(e.id);c.classList.add("group"),h&&c.classList.add("collapsed"),c.title=h?"Expand group":"Collapse group",c.onclick=d=>{d.stopPropagation(),h?g.collapsed.delete(e.id):g.collapsed.add(e.id),Au()}}let l=ue("span",{className:"nm"});if(s?l.textContent=e.name||"Project":e.name?l.textContent=e.name:l.innerHTML='<span class="ph">'+(e.type==="scene"?"group":"object")+"</span>",o.append(c,l),s||o.append(ue("button",{className:"tb"+(a==="visible"?" on":""),textContent:bx[a],title:"visible \u2192 transparent \u2192 invisible",onclick:h=>{h.stopPropagation(),lu(e)}})),o.onclick=()=>Ax(e),o.oncontextmenu=h=>{h.preventDefault(),h.stopPropagation(),s||_i(e),Rx(e,h.clientX,h.clientY)},o.draggable=!s,s||o.addEventListener("dragstart",h=>{if(h.stopPropagation(),g.dragId=e.id,h.dataTransfer){h.dataTransfer.effectAllowed="move";try{h.dataTransfer.setData("text/plain",e.id)}catch{}}}),o.addEventListener("dragend",js),o.addEventListener("dragover",h=>{h.preventDefault(),h.stopPropagation(),Cx(h,e,o)}),o.addEventListener("drop",h=>{h.preventDefault(),h.stopPropagation(),Cu()}),n.appendChild(o),e.type==="scene"&&(s||!g.collapsed.has(e.id)))for(let h of e.children)t(h,i+1)};t(g.root,0)}function _c(){g.ctxMenuEl&&(g.ctxMenuEl.remove(),g.ctxMenuEl=null,window.removeEventListener("pointerdown",Ru,!0))}function Ru(n){g.ctxMenuEl&&!g.ctxMenuEl.contains(n.target)&&_c()}function Rx(n,t,e){_c();let i=ue("div",{className:"ctxmenu"}),s=(o,c,l)=>i.appendChild(ue("div",{className:"ctxitem"+(l?" "+l:""),textContent:o,onclick:()=>{_c(),c()}})),r=()=>i.appendChild(ue("div",{className:"ctxdiv"}));s("Rename",()=>lc(n)),s("Fit",()=>oc(n)),r(),n!==g.root&&(s("Duplicate",()=>gu(n)),s("Delete",()=>xu(n),"danger"),r()),n.type==="scene"?(s("New object",()=>_u(n)),s("New group",()=>vu(n))):s("New group",()=>{let o=pc(n);o&&(g.collapsed.delete(o.id),_i(o),he())}),document.body.appendChild(i),g.ctxMenuEl=i;let a=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-a.width-4)+"px",i.style.top=Math.min(e,innerHeight-a.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",Ru,!0),0)}function js(){g.dropRow&&g.dropRow.classList.remove("drop-into","drop-before","drop-after"),g.dropRow=null,g.dropInfo=null}function Cx(n,t,e){let i=g.dragId&&us(g.dragId);if(!i||i===t||ds(i,t)){js();return}if(js(),g.dropRow=e,t===g.root){g.dropInfo={parent:g.root,index:g.root.children.length},e.classList.add("drop-into");return}let s=e.getBoundingClientRect(),r=n.clientY-s.top,a=s.height,o=gi(t),c=o?o.children.indexOf(t):0;r>a*.28&&r<a*.72?(t.type==="scene"?g.dropInfo={parent:t,index:t.children.length}:g.dropInfo={wrap:t},e.classList.add("drop-into")):r<a*.5?(g.dropInfo={parent:o,index:c},e.classList.add("drop-before")):(g.dropInfo={parent:o,index:c+1},e.classList.add("drop-after"))}function Cu(){let n=g.dragId&&us(g.dragId);n&&g.dropInfo&&(g.dropInfo.wrap?mu(g.dropInfo.wrap,n):g.dropInfo.parent&&fc(n,g.dropInfo.parent,g.dropInfo.index)&&(g.collapsed.delete(g.dropInfo.parent.id),_i(n),he())),js(),g.dragId=null}{let n=document.getElementById("tree");n.addEventListener("dragover",t=>{t.target===n&&g.dragId&&(t.preventDefault(),js(),g.dropInfo={parent:g.root,index:g.root.children.length})}),n.addEventListener("drop",t=>{t.target===n&&(t.preventDefault(),Cu())})}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;let t=n.key.toLowerCase(),e=n.ctrlKey||n.metaKey;if(!(t==="escape"&&po())){if(e){if(t==="z"){n.preventDefault(),n.shiftKey?cc():ou();return}if(t==="y"){n.preventDefault(),cc();return}if(t==="c"){g.editObject||(dc(),n.preventDefault());return}if(t==="x"){g.editObject||(fu(),n.preventDefault());return}if(t==="v"){g.editObject||(pu(),n.preventDefault());return}if(t==="d"){g.editObject||(du(),n.preventDefault());return}return}switch(t){case"f":In();break;case"escape":nu();break;case"n":g.editObject||uu();break;case"r":g.editObject||yu();break;case"[":g.editObject||gc(-1);break;case"]":g.editObject||gc(1);break;case"delete":case"backspace":g.editObject||(n.preventDefault(),uc());break}}});var Yt=n=>Math.floor(n/10),re=Fh,bs=(n,t)=>{let e=qs();return e.name=n,e.boxes=t,e},vc=(n,t,e,i,s,r)=>({x0:n,y0:t,z0:e,x1:i,y1:s,z1:r});function Pu(){let n=Yt(4465),t=Yt(2985),e=Yt(2700),i=Yt(150),s=bs("Floor",[ne(0,0,0,n,1,t,re[9])]),r=Yt(800),a=Yt(2100),o=n-Yt(515)-r,c=n-Yt(900)-r,l=[ne(0,1,0,n,e+1,i,re[5]),ne(0,1,t-i,n,e+1,t,re[5]),ne(0,1,i,i,e+1,t-i,re[5]),ne(n-i,1,i,n,e+1,t-i,re[5])];l=cs(l,vc(o,1,0,o+r,a+1,i)),l=cs(l,vc(c,1,t-i,c+r,a+1,t)),l=cs(l,vc(0,Yt(900),Yt(600),i,Yt(2100),t-Yt(600)));let h=bs("Walls",l);h.vis="transparent";let d=Yt(1500),f=Yt(2e3),m=bs("Bed",[ne(0,0,0,8,14,8,re[7]),ne(d-8,0,0,d,14,8,re[7]),ne(0,0,f-8,8,14,f,re[7]),ne(d-8,0,f-8,d,14,f,re[7]),ne(0,14,0,d,20,f,re[6]),ne(2,20,0,d-2,24,f-Yt(400),re[10])]);m.pos={x:i+3,y:1,z:t-i-f};let _=Yt(1400),x=Yt(700),p=Yt(740),u=bs("Desk",[ne(0,p-4,0,_,p,x,re[8]),ne(0,0,0,6,p-4,6,re[7]),ne(_-6,0,0,_,p-4,6,re[7]),ne(0,0,x-6,6,p-4,x,re[7]),ne(_-6,0,x-6,_,p-4,x,re[7])]),b=Yt(600),v=b-30>>1,T=b>>1,I=bs("Computer",[ne(v,0,0,v+30,2,18,re[11]),ne(T-2,2,7,T+2,Yt(160),11,re[11]),ne(0,Yt(160),6,b,Yt(520),9,re[13])]);I.pos={x:Yt(400),y:p,z:Yt(420)};let C=ls();C.name="Desk + Computer",C.pos={x:n-i,y:1,z:Yt(900)},C.rot=1,C.children=[u,I];let R=V=>bs(V,[ne(-10,0,-10,11,30,11,re[4]),ne(-2,30,-2,3,54,3,re[14]),ne(-16,54,-16,17,78,17,re[14]),ne(-12,78,-12,13,92,13,re[14])]),q=R("Plant"),S=R("Plant");q.pos={x:n-i-Yt(300),y:1,z:i+Yt(300)},S.pos={x:i+Yt(300),y:1,z:i+Yt(300)};let w=ls();return w.children=[s,h,m,C,q,S],w}var Iu=n=>Math.abs(n.clientX-g.drag.sx)+Math.abs(n.clientY-g.drag.sy)>3;function Lu(n){let t=g.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let e=n.clientX-t.x,i=n.clientY-t.y;return t.x=n.clientX,t.y=n.clientY,(t.mode==="pan"?jh:Qh)(e,i),!0}function Px(){let n=[],t=[];return xi(g.root,{x:0,y:0,z:0},0,null,0,(e,i,s,r)=>{let a=r&&g.selection.has(r)?t:n;for(let o of e.boxes)a.push(mn(o,s,i))}),{occ:n,sel:t}}var Ix=(n,t,e,i)=>Oh(n.sel??[],n.occ??[],t,e,i);function Lx(n){let t=g.drag,e=t.dx,i=t.dy,s=t.dz;if(n.shiftKey){t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=t.dy);let a=(Wt.top-Wt.bottom)/ee.getBoundingClientRect().height;i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*a)}else{t.shiftAnchorY=null;let a=ps(0);a&&t.start&&(e=a.x-t.start.x,s=a.z-t.start.z)}let r=(a,o,c)=>n.altKey||!Ix(t,a,o,c);r(e,t.dy,t.dz)&&(t.dx=e),r(t.dx,i,t.dz)&&(t.dy=i),r(t.dx,t.dy,s)&&(t.dz=s);for(let a of g.selection)for(let o of g.childMeshes[a]||[])o.position.set(t.dx,t.dy,t.dz);Pn.position.set(t.dx,t.dy,t.dz)}function Dx(){let n=g.drag,t=fs(),e=le({x:Math.round(n.dx),y:0,z:Math.round(n.dz)},4-t.rot&3),i=Math.round(n.dy);for(let s of g.selection){let r=mi(s);r&&(r.pos.x+=e.x,r.pos.y+=i,r.pos.z+=e.z)}Pn.position.set(0,0,0),ke(),he()}function Ux(n){let t=Math.round((g.drag.sx-n.clientX)/70);t!==g.drag.steps&&(mc(t-g.drag.steps),g.drag.steps=t)}function Du(){let n=ms(),t=co(n);if(!t)return;let e=Za(t.x,t.y,t.z);e!==g.lastVox&&($h({x0:t.x,y0:t.y,z0:t.z,x1:t.x+1,y1:t.y+1,z1:t.z+1},g.selColor),g.lastVox=e),Uu(n)}function Uu(n=ms()){let t=null;if(g.tool==="add"?t=n?n.addCell:co(n):t=n?n.cell:null,!t){Ye.visible=!1;return}let e=hn(le(t,g.editXform.rot),g.editXform.off);Ye.visible=!0,Ye.material.color.set(g.tool==="erase"?11895693:10994876),Ye.position.set(e.x+.5,e.y+.5,e.z+.5)}function Nx(n,t){let e=co();e&&(g.drag={...t,mode:"box",shiftAnchorY:null,hyBase:0,box:{x0:e.x,y0:e.y,z0:e.z,x1:e.x,z1:e.z,hy:0}},Ye.visible=!1,Ou())}function Ox(n){let t=g.drag,e=t.box;if(n.shiftKey){let i=(Wt.top-Wt.bottom)/ee.getBoundingClientRect().height;t.shiftAnchorY===null&&(t.shiftAnchorY=n.clientY,t.hyBase=e.hy),e.hy=t.hyBase+Math.round((t.shiftAnchorY-n.clientY)*i)}else{t.shiftAnchorY=null;let i=Js(e.y0);i&&(e.x1=i.x,e.z1=i.z)}Ou()}function Nu(){let n=g.drag.box;return{x0:Math.min(n.x0,n.x1),x1:Math.max(n.x0,n.x1),z0:Math.min(n.z0,n.z1),z1:Math.max(n.z0,n.z1),y0:Math.min(n.y0,n.y0+n.hy),y1:Math.max(n.y0,n.y0+n.hy)}}function Fx(){let n=Nu(),t={x0:n.x0,y0:n.y0,z0:n.z0,x1:n.x1+1,y1:n.y1+1,z1:n.z1+1};g.tool==="add"?Zh(t,g.selColor):Jh(t),g.liveMeas=null,_s(),Ee(),he()}function Ou(){let n=Nu(),t=n.x0,e=n.x1+1,i=n.y0,s=n.y1+1,r=n.z0,a=n.z1+1,o=e-t,c=s-i,l=a-r,h=(f,m,_,x,p,u,b,v)=>({a:gs(f,m,_),b:gs(x,p,u),mid:gs((f+x)/2,(m+p)/2,(_+u)/2),len:b,filled:!0,nolabel:!v}),d=[];d.push(h(t,i,r,e,i,r,o,o>=2)),d.push(h(t,i,r,t,i,a,l,l>=2)),d.push(h(t,i,r,t,s,r,c,c>=2)),d.push(h(e,i,r,e,i,a,0,!1),h(t,i,a,e,i,a,0,!1)),d.push(h(t,s,r,e,s,r,0,!1),h(t,s,r,t,s,a,0,!1),h(e,s,r,e,s,a,0,!1),h(t,s,a,e,s,a,0,!1)),d.push(h(e,i,r,e,s,r,0,!1),h(t,i,a,t,s,a,0,!1),h(e,i,a,e,s,a,0,!1)),g.liveMeas=d,_s()}ee.addEventListener("pointerdown",n=>{ee.setPointerCapture(n.pointerId),ao(n.clientX,n.clientY);let t={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(xs()){n.button===0?g.drag={...t,mode:"pan",meas:"freeze"}:n.button===2?g.drag={...t,mode:"orbit",meas:"clear"}:n.button===1&&(g.drag={...t,mode:"pan",sx:-1e9});return}if(g.editObject){n.button===0?g.tool==="add"||g.tool==="erase"?Nx(n,t):(g.painting=!0,g.lastVox=null,Du()):n.button===2?g.drag={...t,mode:"orbit"}:n.button===1&&(g.drag={...t,mode:"pan"});return}let e=Qa(),i=e&&g.selection.has(e);n.button===0?i?g.drag={...t,mode:"move",start:ps(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...Px()}:g.drag={...t,mode:"pan",clickId:e}:n.button===2?i?g.drag={...t,mode:"rotobj",steps:0}:g.drag={...t,mode:"orbit"}:n.button===1&&(g.drag={...t,mode:"pan",clickId:null,sx:-1e9})});ee.addEventListener("pointermove",n=>{if(ao(n.clientX,n.clientY),xs()){Lu(n),Hh();return}if(g.editObject&&g.painting){Du();return}if(!g.drag){g.editObject?Uu():Ye.visible=!1;return}Lu(n)||(g.drag.mode==="move"?Lx(n):g.drag.mode==="rotobj"?Ux(n):g.drag.mode==="box"&&Ox(n))});ee.addEventListener("pointerup",n=>{try{ee.releasePointerCapture(n.pointerId)}catch{}if(xs()){g.drag&&!Iu(n)&&(g.drag.meas==="freeze"?Gh():g.drag.meas==="clear"&&un()),g.drag=null;return}if(g.editObject){g.painting?(g.painting=!1,Ee(),he()):g.drag&&g.drag.mode==="box"&&Fx(),g.drag=null;return}if(g.drag)if(g.drag.mode==="pan"&&!Iu(n)){let t=g.drag.clickId;t?n.shiftKey?g.selection.has(t)?g.selection.delete(t):g.selection.add(t):g.selection=new Set([t]):n.shiftKey||g.selection.clear(),ic(),Ee()}else g.drag.mode==="move"?Dx():g.drag.mode==="rotobj"&&g.drag.steps&&he();g.drag=null});ee.addEventListener("pointerleave",()=>{Ye.visible=!1});ee.addEventListener("contextmenu",n=>n.preventDefault());ee.addEventListener("wheel",n=>{n.preventDefault(),Jt.zoom*=n.deltaY>0?1/.95:.95,Jt.zoom=Math.max(6,Math.min(eo,Jt.zoom))},{passive:!1});ee.addEventListener("dblclick",n=>{if(g.editObject)return;ao(n.clientX,n.clientY);let t=Qa();t&&vi(mi(t),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,is,{passive:!0,capture:!0});var zx=()=>Math.abs(Jt.azim-Gt.azim)<.001&&Math.abs(Jt.elev-Gt.elev)<.001&&Math.abs(Jt.zoom-Gt.zoom)<.001&&Gt.target.distanceToSquared(Jt.target)<1e-6;function Fu(){let n=ee.getBoundingClientRect(),t=Math.max(1,Math.round(n.width)),e=Math.max(1,Math.round(n.height)),i=Math.min(devicePixelRatio,2);(ee.width!==Math.round(t*i)||ee.height!==Math.round(e*i))&&(ns.setSize(t,e,!1),is())}window.addEventListener("resize",Fu);function zu(){requestAnimationFrame(zu),Fu(),eu(),(Gs.tail>0||!zx())&&(ns.render(be,Wt),Wh(),Gs.tail>0&&Gs.tail--)}function Bx(){cu()||(g.root=Pu()),g.path=[g.root],g.context=g.root,g.editObject=null,g.selection.clear(),Ss(),ke(),Ee(),In(),ys(),zu()}Bx();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
