var y={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var gf="160";var bS=0,qg=1,wS=2;var w0=1,xf=2,Oi=3,yn=0,Kt=1,Kn=2;var xr=0,mo=1,Yg=2,$g=3,jg=4,SS=5,is=100,MS=101,ES=102,Jg=103,Kg=104,TS=200,AS=201,CS=202,RS=203,Ld=204,Dd=205,PS=206,IS=207,LS=208,DS=209,US=210,NS=211,OS=212,kS=213,zS=214,BS=0,FS=1,VS=2,Il=3,HS=4,GS=5,WS=6,XS=7,yf=0,qS=1,YS=2,yr=0,$S=1,jS=2,JS=3,KS=4,ZS=5,QS=6;var S0=300,_o=301,vo=302,Ud=303,Nd=304,th=306,Od=1e3,Zn=1001,kd=1002,cn=1003,Zg=1004;var ed=1005;var zn=1006,eM=1007;var La=1008;var _r=1009,tM=1010,nM=1011,_f=1012,M0=1013,mr=1014,gr=1015,Da=1016,E0=1017,T0=1018,os=1020,iM=1021,Qn=1023,rM=1024,sM=1025,as=1026,bo=1027,oM=1028,A0=1029,aM=1030,C0=1031,R0=1033,td=33776,nd=33777,id=33778,rd=33779,Qg=35840,ex=35841,tx=35842,nx=35843,P0=36196,ix=37492,rx=37496,sx=37808,ox=37809,ax=37810,cx=37811,lx=37812,hx=37813,ux=37814,dx=37815,fx=37816,px=37817,mx=37818,gx=37819,xx=37820,yx=37821,sd=36492,_x=36494,vx=36495,cM=36283,bx=36284,wx=36285,Sx=36286;var Ll=2300,Dl=2301,od=2302,Mx=2400,Ex=2401,Tx=2402;var I0=3e3,cs=3001,lM=3200,hM=3201,L0=0,uM=1,Bn="",Gt="srgb",Bi="srgb-linear",vf="display-p3",nh="display-p3-linear",Ul="linear",dt="srgb",Nl="rec709",Ol="p3";var js=7680;var Ax=519,dM=512,fM=513,pM=514,D0=515,mM=516,gM=517,xM=518,yM=519,Cx=35044;var Rx="300 es",zd=1035,ki=2e3,kl=2001,vr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Px=1234567,go=Math.PI/180,Ua=180/Math.PI;function Co(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function bf(n,e){return(n%e+e)%e}function _M(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function vM(n,e,t){return n!==e?(t-n)/(e-n):0}function Ra(n,e,t){return(1-t)*n+t*e}function bM(n,e,t,i){return Ra(n,e,1-Math.exp(-t*i))}function wM(n,e=1){return e-Math.abs(bf(n,e*2)-e)}function SM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function MM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function EM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function TM(n,e){return n+Math.random()*(e-n)}function AM(n){return n*(.5-Math.random())}function CM(n){n!==void 0&&(Px=n);let e=Px+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RM(n){return n*go}function PM(n){return n*Ua}function Bd(n){return(n&n-1)===0&&n!==0}function IM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LM(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function uo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var U0={DEG2RAD:go,RAD2DEG:Ua,generateUUID:Co,clamp:ln,euclideanModulo:bf,mapLinear:_M,inverseLerp:vM,lerp:Ra,damp:bM,pingpong:wM,smoothstep:SM,smootherstep:MM,randInt:EM,randFloat:TM,randFloatSpread:AM,seededRandom:CM,degToRad:RM,radToDeg:PM,isPowerOfTwo:Bd,ceilPowerOfTwo:IM,floorPowerOfTwo:zl,setQuaternionFromProperEuler:LM,normalize:on,denormalize:uo},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=r[0],p=r[3],m=r[6],v=r[1],_=r[4],M=r[7],C=r[2],R=r[5],I=r[8];return s[0]=o*x+a*v+c*C,s[3]=o*p+a*_+c*R,s[6]=o*m+a*M+c*I,s[1]=l*x+h*v+u*C,s[4]=l*p+h*_+u*R,s[7]=l*m+h*M+u*I,s[2]=d*x+f*v+g*C,s[5]=d*p+f*_+g*R,s[8]=d*m+f*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ad.makeScale(e,t)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ad=new We;function N0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DM(){let n=Bl("canvas");return n.style.display="block",n}var Ix={};function Pa(n){n in Ix||(Ix[n]=!0,console.warn(n))}var Lx=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dx=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rl={[Bi]:{transfer:Ul,primaries:Nl,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:dt,primaries:Nl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nh]:{transfer:Ul,primaries:Ol,toReference:n=>n.applyMatrix3(Dx),fromReference:n=>n.applyMatrix3(Lx)},[vf]:{transfer:dt,primaries:Ol,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dx),fromReference:n=>n.applyMatrix3(Lx).convertLinearToSRGB()}},UM=new Set([Bi,nh]),st={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!UM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=rl[e].toReference,r=rl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rl[n].primaries},getTransfer:function(n){return n===Bn?Ul:rl[n].transfer}};function xo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,Fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=Bl("canvas")),Js.width=e.width,Js.height=e.height;let i=Js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xo(t[i]/255)*255):t[i]=xo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},NM=0,Vl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ld(r[o].image)):s.push(ld(r[o]))}else s=ld(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ld(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var OM=0,ei=class n extends vr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,r=Zn,s=zn,o=La,a=Qn,c=_r,l=n.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Co(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===cs?Gt:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?cs:I0}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cs?Gt:Bn}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=S0;ei.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,M=(f+1)/2,C=(m+1)/2,R=(h+d)/4,I=(u+x)/4,D=(g+p)/4;return _>M&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=I/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=I/s,r=D/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fd=class extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cs?Gt:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ei(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fi=class extends Fd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Hl=class extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vd=class extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let C=Math.sqrt(_),R=Math.atan2(C,m*v);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}let M=a*v;if(c=c*p+d*M,l=l*p+f*M,h=h*p+g*M,u=u*p+x*M,p===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ux.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ux.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hd=new F,Ux=new br,Vi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),ol.subVectors(this.max,Ea),Ks.subVectors(e.a,Ea),Zs.subVectors(e.b,Ea),Qs.subVectors(e.c,Ea),hr.subVectors(Zs,Ks),ur.subVectors(Qs,Zs),Zr.subVectors(Ks,Qs);let t=[0,-hr.z,hr.y,0,-ur.z,ur.y,0,-Zr.z,Zr.y,hr.z,0,-hr.x,ur.z,0,-ur.x,Zr.z,0,-Zr.x,-hr.y,hr.x,0,-ur.y,ur.x,0,-Zr.y,Zr.x,0];return!ud(t,Ks,Zs,Qs,ol)||(t=[1,0,0,0,1,0,0,0,1],!ud(t,Ks,Zs,Qs,ol))?!1:(al.crossVectors(hr,ur),t=[al.x,al.y,al.z],ud(t,Ks,Zs,Qs,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new F,new F,new F,new F,new F,new F,new F,new F],$n=new F,sl=new Vi,Ks=new F,Zs=new F,Qs=new F,hr=new F,ur=new F,Zr=new F,Ea=new F,ol=new F,al=new F,Qr=new F;function ud(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qr.fromArray(n,s);let a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),c=e.dot(Qr),l=t.dot(Qr),h=i.dot(Qr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var kM=new Vi,Ta=new F,dd=new F,wo=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):kM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);let t=Ta.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(dd)),this.expandByPoint(Ta.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new F,fd=new F,cl=new F,dr=new F,pd=new F,ll=new F,md=new F,Na=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fd.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(fd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(cl),a=dr.dot(this.direction),c=-dr.dot(cl),l=dr.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fd).addScaledVector(cl,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){pd.subVectors(t,e),ll.subVectors(i,e),md.crossVectors(pd,ll);let o=this.direction.dot(md),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);let c=a*this.direction.dot(ll.crossVectors(dr,ll));if(c<0)return null;let l=a*this.direction.dot(pd.cross(dr));if(l<0||c+l>o)return null;let h=-a*dr.dot(md);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class n{constructor(e,t,i,r,s,o,a,c,l,h,u,d,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,d,f,g,x,p)}set(e,t,i,r,s,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/eo.setFromMatrixColumn(e,0).length(),s=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,BM)}lookAt(e,t,i){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),fr.crossVectors(i,An),fr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),fr.crossVectors(i,An)),fr.normalize(),hl.crossVectors(An,fr),r[0]=fr.x,r[4]=hl.x,r[8]=An.x,r[1]=fr.y,r[5]=hl.y,r[9]=An.y,r[2]=fr.z,r[6]=hl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],v=i[3],_=i[7],M=i[11],C=i[15],R=r[0],I=r[4],D=r[8],w=r[12],T=r[1],k=r[5],X=r[9],Z=r[13],b=r[2],P=r[6],U=r[10],O=r[14],B=r[3],G=r[7],j=r[11],L=r[15];return s[0]=o*R+a*T+c*b+l*B,s[4]=o*I+a*k+c*P+l*G,s[8]=o*D+a*X+c*U+l*j,s[12]=o*w+a*Z+c*O+l*L,s[1]=h*R+u*T+d*b+f*B,s[5]=h*I+u*k+d*P+f*G,s[9]=h*D+u*X+d*U+f*j,s[13]=h*w+u*Z+d*O+f*L,s[2]=g*R+x*T+p*b+m*B,s[6]=g*I+x*k+p*P+m*G,s[10]=g*D+x*X+p*U+m*j,s[14]=g*w+x*Z+p*O+m*L,s[3]=v*R+_*T+M*b+C*B,s[7]=v*I+_*k+M*P+C*G,s[11]=v*D+_*X+M*U+C*j,s[15]=v*w+_*Z+M*O+C*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*f-i*c*f)+x*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+p*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*h-i*l*h)+m*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,_=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,M=h*x*l-g*u*l+g*a*f-o*x*f-h*a*m+o*u*m,C=g*u*c-h*x*c-g*a*d+o*x*d+h*a*p-o*u*p,R=t*v+i*_+r*M+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=v*I,e[1]=(x*d*s-u*p*s-x*r*f+i*p*f+u*r*m-i*d*m)*I,e[2]=(a*p*s-x*c*s+x*r*l-i*p*l-a*r*m+i*c*m)*I,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*f-i*c*f)*I,e[4]=_*I,e[5]=(h*p*s-g*d*s+g*r*f-t*p*f-h*r*m+t*d*m)*I,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*m-t*c*m)*I,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*f+t*c*f)*I,e[8]=M*I,e[9]=(g*u*s-h*x*s-g*i*f+t*x*f+h*i*m-t*u*m)*I,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*m+t*a*m)*I,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*f-t*a*f)*I,e[12]=C*I,e[13]=(h*x*r-g*u*r+g*i*d-t*x*d-h*i*p+t*u*p)*I,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*p-t*a*p)*I,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*I,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,x=o*h,p=o*u,m=a*u,v=c*l,_=c*h,M=c*u,C=i.x,R=i.y,I=i.z;return r[0]=(1-(x+m))*C,r[1]=(f+M)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(f-M)*R,r[5]=(1-(d+m))*R,r[6]=(p+v)*R,r[7]=0,r[8]=(g+_)*I,r[9]=(p-v)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=eo.set(r[0],r[1],r[2]).length(),o=eo.set(r[4],r[5],r[6]).length(),a=eo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);let l=1/s,h=1/o,u=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ki){let c=this.elements,l=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),f,g;if(a===ki)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ki){let c=this.elements,l=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*l,f=(i+r)*h,g,x;if(a===ki)g=(o+s)*u,x=-2*u;else if(a===kl)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},eo=new F,jn=new At,zM=new F(0,0,0),BM=new F(1,1,1),fr=new F,hl=new F,An=new F,Nx=new At,Ox=new br,Gl=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ox.setFromEuler(this),this.setFromQuaternion(Ox,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gl.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},FM=0,kx=new F,to=new br,Di=new At,ul=new F,Aa=new F,VM=new F,HM=new br,zx=new F(1,0,0),Bx=new F(0,1,0),Fx=new F(0,0,1),GM={type:"added"},WM={type:"removed"},un=class n extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Gl,i=new br,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new We}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(zx,e)}rotateY(e){return this.rotateOnAxis(Bx,e)}rotateZ(e){return this.rotateOnAxis(Fx,e)}translateOnAxis(e,t){return kx.copy(e).applyQuaternion(this.quaternion),this.position.add(kx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zx,e)}translateY(e){return this.translateOnAxis(Bx,e)}translateZ(e){return this.translateOnAxis(Fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Aa,ul,this.up):Di.lookAt(ul,Aa,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),to.setFromRotationMatrix(Di),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(WM)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};un.DEFAULT_UP=new F(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new F,Ui=new F,gd=new F,Ni=new F,no=new F,io=new F,Vx=new F,xd=new F,yd=new F,_d=new F,dl=!1,ss=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Ui.subVectors(i,t),gd.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Ui),c=Jn.dot(gd),l=Ui.dot(Ui),h=Ui.dot(gd),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,t,i,r,s,o,a,c){return dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dl=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ui.subVectors(e,t),Jn.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Jn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;no.subVectors(r,i),io.subVectors(s,i),xd.subVectors(e,i);let c=no.dot(xd),l=io.dot(xd);if(c<=0&&l<=0)return t.copy(i);yd.subVectors(e,r);let h=no.dot(yd),u=io.dot(yd);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(no,o);_d.subVectors(e,s);let f=no.dot(_d),g=io.dot(_d);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(io,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Vx.subVectors(s,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Vx,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(no,o).addScaledVector(io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function vd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=bf(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=O0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}copyLinearToSRGB(e){return this.r=cd(e.r),this.g=cd(e.g),this.b=cd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return st.fromWorkingColorSpace(jt.copy(this),e),Math.round(ln(jt.r*255,0,255))*65536+Math.round(ln(jt.g*255,0,255))*256+Math.round(ln(jt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(jt.copy(this),t);let i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Gt){st.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,r=jt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(fl);let i=Ra(pr.h,fl.h,t),r=Ra(pr.s,fl.s,t),s=Ra(pr.l,fl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new ke;ke.NAMES=O0;var XM=0,Hi=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=mo,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},So=class extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new F,pl=new Ke,Zt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=uo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cx&&(e.usage=this.usage),e}};var Wl=class extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xl=class extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var hn=class extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var qM=0,kn=new At,bd=new un,ro=new F,Cn=new Vi,Ca=new Vi,kt=new F,dn=class n extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?Xl:Wl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Cn.min,Ca.min),Cn.expandByPoint(kt),kt.addVectors(Cn.max,Ca.max),Cn.expandByPoint(kt)):(Cn.expandByPoint(Ca.min),Cn.expandByPoint(Ca.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(ro.fromBufferAttribute(e,l),kt.add(ro)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new F,h[T]=new F;let u=new F,d=new F,f=new F,g=new Ke,x=new Ke,p=new Ke,m=new F,v=new F;function _(T,k,X){u.fromArray(r,T*3),d.fromArray(r,k*3),f.fromArray(r,X*3),g.fromArray(o,T*2),x.fromArray(o,k*2),p.fromArray(o,X*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let Z=1/(x.x*p.y-p.x*x.y);isFinite(Z)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(Z),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(Z),l[T].add(m),l[k].add(m),l[X].add(m),h[T].add(v),h[k].add(v),h[X].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,k=M.length;T<k;++T){let X=M[T],Z=X.start,b=X.count;for(let P=Z,U=Z+b;P<U;P+=3)_(i[P+0],i[P+1],i[P+2])}let C=new F,R=new F,I=new F,D=new F;function w(T){I.fromArray(s,T*3),D.copy(I);let k=l[T];C.copy(k),C.sub(I.multiplyScalar(I.dot(k))).normalize(),R.crossVectors(D,k);let Z=R.dot(h[T])<0?-1:1;c[T*4]=C.x,c[T*4+1]=C.y,c[T*4+2]=C.z,c[T*4+3]=Z}for(let T=0,k=M.length;T<k;++T){let X=M[T],Z=X.start,b=X.count;for(let P=Z,U=Z+b;P<U;P+=3)w(i[P+0]),w(i[P+1]),w(i[P+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hx=new At,es=new Na,ml=new wo,Gx=new F,so=new F,oo=new F,ao=new F,wd=new F,gl=new F,xl=new Ke,yl=new Ke,_l=new Ke,Wx=new F,Xx=new F,qx=new F,vl=new F,bl=new F,Tt=class extends un{constructor(e=new dn,t=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){gl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(wd.fromBufferAttribute(u,e),o?gl.addScaledVector(wd,h):gl.addScaledVector(wd.sub(t),h))}t.add(gl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(ml.containsPoint(es.origin)===!1&&(es.intersectSphere(ml,Gx)===null||es.origin.distanceToSquared(Gx)>(e.far-e.near)**2))&&(Hx.copy(s).invert(),es.copy(e.ray).applyMatrix4(Hx),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=_;M<C;M+=3){let R=a.getX(M),I=a.getX(M+1),D=a.getX(M+2);r=wl(this,m,e,i,l,h,u,R,I,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);r=wl(this,o,e,i,l,h,u,v,_,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=_;M<C;M+=3){let R=M,I=M+1,D=M+2;r=wl(this,m,e,i,l,h,u,R,I,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,_=p+1,M=p+2;r=wl(this,o,e,i,l,h,u,v,_,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function YM(n,e,t,i,r,s,o,a){let c;if(e.side===Kt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===yn,a),c===null)return null;bl.copy(a),bl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(bl);return l<t.near||l>t.far?null:{distance:l,point:bl.clone(),object:n}}function wl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,so),n.getVertexPosition(c,oo),n.getVertexPosition(l,ao);let h=YM(n,e,t,i,so,oo,ao,vl);if(h){r&&(xl.fromBufferAttribute(r,a),yl.fromBufferAttribute(r,c),_l.fromBufferAttribute(r,l),h.uv=ss.getInterpolation(vl,so,oo,ao,xl,yl,_l,new Ke)),s&&(xl.fromBufferAttribute(s,a),yl.fromBufferAttribute(s,c),_l.fromBufferAttribute(s,l),h.uv1=ss.getInterpolation(vl,so,oo,ao,xl,yl,_l,new Ke),h.uv2=h.uv1),o&&(Wx.fromBufferAttribute(o,a),Xx.fromBufferAttribute(o,c),qx.fromBufferAttribute(o,l),h.normal=ss.getInterpolation(vl,so,oo,ao,Wx,Xx,qx,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};ss.getNormal(so,oo,ao,u.normal),h.face=u}return h}var hi=class n extends dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(u,2));function g(x,p,m,v,_,M,C,R,I,D,w){let T=M/I,k=C/D,X=M/2,Z=C/2,b=R/2,P=I+1,U=D+1,O=0,B=0,G=new F;for(let j=0;j<U;j++){let L=j*k-Z;for(let V=0;V<P;V++){let z=V*T-X;G[x]=z*v,G[p]=L*_,G[m]=b,l.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=R>0?1:-1,h.push(G.x,G.y,G.z),u.push(V/I),u.push(1-j/D),O+=1}}for(let j=0;j<D;j++)for(let L=0;L<I;L++){let V=d+L+P*j,z=d+L+P*(j+1),J=d+(L+1)+P*(j+1),ie=d+(L+1)+P*j;c.push(V,z,ie),c.push(z,J,ie),B+=6}a.addGroup(f,B,w),f+=B,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=Mo(n[t]);for(let r in i)e[r]=i[r]}return e}function $M(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function k0(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}var jM={clone:Mo,merge:an},JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=KM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=$M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ql=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=class extends ql{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},co=-90,lo=1,Hd=class extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rn(co,lo,e,t);r.layers=this.layers,this.add(r);let s=new Rn(co,lo,e,t);s.layers=this.layers,this.add(s);let o=new Rn(co,lo,e,t);o.layers=this.layers,this.add(o);let a=new Rn(co,lo,e,t);a.layers=this.layers,this.add(a);let c=new Rn(co,lo,e,t);c.layers=this.layers,this.add(c);let l=new Rn(co,lo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Yl=class extends ei{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gd=class extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cs?Gt:Bn),this.texture=new Yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:xr});s.uniforms.tEquirect.value=t;let o=new Tt(r,s),a=t.minFilter;return t.minFilter===La&&(t.minFilter=zn),new Hd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Sd=new F,ZM=new F,QM=new We,Jt=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Sd.subVectors(i,t).cross(ZM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||QM.getNormalMatrix(e),r=this.coplanarPoint(Sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new wo,Sl=new F,ka=class{constructor(e=new Jt,t=new Jt,i=new Jt,r=new Jt,s=new Jt,o=new Jt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],f=r[8],g=r[9],x=r[10],p=r[11],m=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(c-s,d-l,p-f,M-m).normalize(),i[1].setComponents(c+s,d+l,p+f,M+m).normalize(),i[2].setComponents(c+o,d+h,p+g,M+v).normalize(),i[3].setComponents(c-o,d-h,p-g,M-v).normalize(),i[4].setComponents(c-a,d-u,p-x,M-_).normalize(),t===ki)i[5].setComponents(c+a,d+u,p+x,M+_).normalize();else if(t===kl)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function z0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eE(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];t?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Eo=class n extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let _=0;_<l;_++){let M=_*u-s;g.push(M,-v,0),x.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let _=v+l*m,M=v+l*(m+1),C=v+1+l*(m+1),R=v+1+l*m;f.push(_,M,R),f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(x,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
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
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,cE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
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
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pE=`#ifdef USE_IRIDESCENCE
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
#endif`,mE=`#ifdef USE_BUMPMAP
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,EE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`
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
}`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HE=`#ifdef USE_GRADIENTMAP
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
}`,GE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
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
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,t1=`
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
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
#endif`,g1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B1=`float getShadowMask() {
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
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,H1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,cT=`#define DISTANCE
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
}`,lT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,wT=`#define PHONG
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
}`,ST=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,ET=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,AT=`#define TOON
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
}`,CT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,IT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,DT=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:tE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:rE,alphatest_fragment:sE,alphatest_pars_fragment:oE,aomap_fragment:aE,aomap_pars_fragment:cE,batching_pars_vertex:lE,batching_vertex:hE,begin_vertex:uE,beginnormal_vertex:dE,bsdfs:fE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:yE,clipping_planes_vertex:_E,color_fragment:vE,color_pars_fragment:bE,color_pars_vertex:wE,color_vertex:SE,common:ME,cube_uv_reflection_fragment:EE,defaultnormal_vertex:TE,displacementmap_pars_vertex:AE,displacementmap_vertex:CE,emissivemap_fragment:RE,emissivemap_pars_fragment:PE,colorspace_fragment:IE,colorspace_pars_fragment:LE,envmap_fragment:DE,envmap_common_pars_fragment:UE,envmap_pars_fragment:NE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:$E,envmap_vertex:kE,fog_vertex:zE,fog_pars_vertex:BE,fog_fragment:FE,fog_pars_fragment:VE,gradientmap_pars_fragment:HE,lightmap_fragment:GE,lightmap_pars_fragment:WE,lights_lambert_fragment:XE,lights_lambert_pars_fragment:qE,lights_pars_begin:YE,lights_toon_fragment:jE,lights_toon_pars_fragment:JE,lights_phong_fragment:KE,lights_phong_pars_fragment:ZE,lights_physical_fragment:QE,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:c1,map_pars_fragment:l1,map_particle_fragment:h1,map_particle_pars_fragment:u1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:f1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:_1,normal_pars_fragment:v1,normal_pars_vertex:b1,normal_vertex:w1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:A1,opaque_fragment:C1,packing:R1,premultiplied_alpha_fragment:P1,project_vertex:I1,dithering_fragment:L1,dithering_pars_fragment:D1,roughnessmap_fragment:U1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:k1,shadowmap_vertex:z1,shadowmask_pars_fragment:B1,skinbase_vertex:F1,skinning_pars_vertex:V1,skinning_vertex:H1,skinnormal_vertex:G1,specularmap_fragment:W1,specularmap_pars_fragment:X1,tonemapping_fragment:q1,tonemapping_pars_fragment:Y1,transmission_fragment:$1,transmission_pars_fragment:j1,uv_pars_fragment:J1,uv_pars_vertex:K1,uv_vertex:Z1,worldpos_vertex:Q1,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:rT,cube_frag:sT,depth_vert:oT,depth_frag:aT,distanceRGBA_vert:cT,distanceRGBA_frag:lT,equirect_vert:hT,equirect_frag:uT,linedashed_vert:dT,linedashed_frag:fT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:xT,meshmatcap_vert:yT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:bT,meshphong_vert:wT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:ET,meshtoon_vert:TT,meshtoon_frag:AT,points_vert:CT,points_frag:RT,shadow_vert:PT,shadow_frag:IT,sprite_vert:LT,sprite_frag:DT},pe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},li={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};li.physical={uniforms:an([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Ml={r:0,b:0,g:0};function UT(n,e,t,i,r,s,o){let a=new ke(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===th)?(h===void 0&&(h=new Tt(new hi(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Mo(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=st.getTransfer(_.colorSpace)!==dt,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Tt(new Eo(2,2),new ti({name:"BackgroundMaterial",uniforms:Mo(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=st.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(Ml,k0(n)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function NT(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,h=!1;function u(b,P,U,O,B){let G=!1;if(o){let j=x(O,U,P);l!==j&&(l=j,f(l.object)),G=m(b,O,U,B),G&&v(b,O,U,B)}else{let j=P.wireframe===!0;(l.geometry!==O.id||l.program!==U.id||l.wireframe!==j)&&(l.geometry=O.id,l.program=U.id,l.wireframe=j,G=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,D(b,P,U,O),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(b){return i.isWebGL2?n.bindVertexArray(b):s.bindVertexArrayOES(b)}function g(b){return i.isWebGL2?n.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function x(b,P,U){let O=U.wireframe===!0,B=a[b.id];B===void 0&&(B={},a[b.id]=B);let G=B[P.id];G===void 0&&(G={},B[P.id]=G);let j=G[O];return j===void 0&&(j=p(d()),G[O]=j),j}function p(b){let P=[],U=[],O=[];for(let B=0;B<r;B++)P[B]=0,U[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:b,attributes:{},index:null}}function m(b,P,U,O){let B=l.attributes,G=P.attributes,j=0,L=U.getAttributes();for(let V in L)if(L[V].location>=0){let J=B[V],ie=G[V];if(ie===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;j++}return l.attributesNum!==j||l.index!==O}function v(b,P,U,O){let B={},G=P.attributes,j=0,L=U.getAttributes();for(let V in L)if(L[V].location>=0){let J=G[V];J===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));let ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),B[V]=ie,j++}l.attributes=B,l.attributesNum=j,l.index=O}function _(){let b=l.newAttributes;for(let P=0,U=b.length;P<U;P++)b[P]=0}function M(b){C(b,0)}function C(b,P){let U=l.newAttributes,O=l.enabledAttributes,B=l.attributeDivisors;U[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),B[b]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,P),B[b]=P)}function R(){let b=l.newAttributes,P=l.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==b[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function I(b,P,U,O,B,G,j){j===!0?n.vertexAttribIPointer(b,P,U,B,G):n.vertexAttribPointer(b,P,U,O,B,G)}function D(b,P,U,O){if(i.isWebGL2===!1&&(b.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let B=O.attributes,G=U.getAttributes(),j=P.defaultAttributeValues;for(let L in G){let V=G[L];if(V.location>=0){let z=B[L];if(z===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(z=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(z=b.instanceColor)),z!==void 0){let J=z.normalized,ie=z.itemSize,te=t.get(z);if(te===void 0)continue;let ce=te.buffer,le=te.type,ue=te.bytesPerElement,ye=i.isWebGL2===!0&&(le===n.INT||le===n.UNSIGNED_INT||z.gpuType===M0);if(z.isInterleavedBufferAttribute){let we=z.data,W=we.stride,it=z.offset;if(we.isInstancedInterleavedBuffer){for(let de=0;de<V.locationSize;de++)C(V.location+de,we.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let de=0;de<V.locationSize;de++)M(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let de=0;de<V.locationSize;de++)I(V.location+de,ie/V.locationSize,le,J,W*ue,(it+ie/V.locationSize*de)*ue,ye)}else{if(z.isInstancedBufferAttribute){for(let we=0;we<V.locationSize;we++)C(V.location+we,z.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let we=0;we<V.locationSize;we++)M(V.location+we);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let we=0;we<V.locationSize;we++)I(V.location+we,ie/V.locationSize,le,J,ie*ue,ie/V.locationSize*we*ue,ye)}}else if(j!==void 0){let J=j[L];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(V.location,J);break;case 3:n.vertexAttrib3fv(V.location,J);break;case 4:n.vertexAttrib4fv(V.location,J);break;default:n.vertexAttrib1fv(V.location,J)}}}}R()}function w(){X();for(let b in a){let P=a[b];for(let U in P){let O=P[U];for(let B in O)g(O[B].object),delete O[B];delete P[U]}delete a[b]}}function T(b){if(a[b.id]===void 0)return;let P=a[b.id];for(let U in P){let O=P[U];for(let B in O)g(O[B].object),delete O[B];delete P[U]}delete a[b.id]}function k(b){for(let P in a){let U=a[P];if(U[b.id]===void 0)continue;let O=U[b.id];for(let B in O)g(O[B].object),delete O[B];delete U[b.id]}}function X(){Z(),h=!0,l!==c&&(l=c,f(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:Z,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:M,disableUnusedAttributes:R}}function OT(n,e,t,i){let r=i.isWebGL2,s;function o(h){s=h}function a(h,u){n.drawArrays(s,h,u),t.update(u,s,1)}function c(h,u,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,u,d),t.update(u,s,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function kT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||e.has("OES_texture_float"),C=_&&M,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:R}}function zT(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Jt,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{let v=s?0:i,_=v*4,M=m.clippingState||null;c.value=M,M=h(g,d,_,f);for(let C=0;C!==_;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function BT(n){let e=new WeakMap;function t(o,a){return a===Ud?o.mapping=_o:a===Nd&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ud||a===Nd)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Gd(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var To=class extends ql{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fo=4,Yx=[.125,.215,.35,.446,.526,.582],rs=20,Md=new To,$x=new ke,Ed=null,Td=0,Ad=0,ns=(1+Math.sqrt(5))/2,ho=1/ns,jx=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ns,ho),new F(0,ns,-ho),new F(ho,0,ns),new F(-ho,0,ns),new F(ns,ho,0),new F(-ns,ho,0)],$l=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Td,Ad),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Da,format:Qn,colorSpace:Bi,depthBuffer:!1},r=Jx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(s)),this._blurMaterial=VT(s,e,t)}return r}_compileMaterial(e){let t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,i,r){let a=new Rn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($x),h.toneMapping=yr,h.autoClear=!1;let f=new So({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Tt(new hi,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy($x),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;El(r,v*_,m>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===_o||e.mapping===vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kx());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;El(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Md)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jx[(r-1)%jx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rs-1),x=s/g,p=isFinite(s)?1+Math.floor(h*x):rs;p>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);let m=[],v=0;for(let I=0;I<rs;++I){let D=I/x,w=Math.exp(-D*D/2);m.push(w),I===0?v+=w:I<p&&(v+=2*w)}for(let I=0;I<m.length;I++)m[I]=m[I]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let M=this._sizeLods[r],C=3*M*(r>_-fo?r-_+fo:0),R=4*(this._cubeSize-M);El(t,C,R,3*M,2*M),c.setRenderTarget(t),c.render(u,Md)}};function FT(n){let e=[],t=[],i=[],r=n,s=n-fo+1+Yx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-fo?c=Yx[o-n+fo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,D=R>2?0:-1,w=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];v.set(w,x*g*R),_.set(d,p*g*R);let T=[R,R,R,R,R,R];M.set(T,m*g*R)}let C=new dn;C.setAttribute("position",new Zt(v,x)),C.setAttribute("uv",new Zt(_,p)),C.setAttribute("faceIndex",new Zt(M,m)),e.push(C),r>fo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jx(n,e,t){let i=new Fi(n,e,t);return i.texture.mapping=th,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function VT(n,e,t){let i=new Float32Array(rs),r=new F(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Kx(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Zx(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function HT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ud||c===Nd,h=c===_o||c===vo;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new $l(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new $l(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function GT(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WT(n,e,t,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,M=v.length;_<M;_+=3){let C=v[_+0],R=v[_+1],I=v[_+2];d.push(C,R,R,I,I,C)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){let C=_+0,R=_+1,I=_+2;d.push(C,R,R,I,I,C)}}else return;let p=new(N0(d)?Xl:Wl)(d,1);p.version=x;let m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function XT(n,e,t,i){let r=i.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(s,g,a,f*c),t.update(g,s,1)}function u(f,g,x){if(x===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*c,x),t.update(g,s,x)}function d(f,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,x);let m=0;for(let v=0;v<x;v++)m+=g[v];t.update(m,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function qT(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YT(n,e){return n[0]-e[0]}function $T(n,e){return Math.abs(e[1])-Math.abs(n[1])}function jT(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=s.get(h);if(x===void 0||x.count!==g){let b=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",b)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],D=0;v===!0&&(D=1),_===!0&&(D=2),M===!0&&(D=3);let w=h.attributes.position.count*D,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let k=new Float32Array(w*T*4*g),X=new Hl(k,w,T,g);X.type=gr,X.needsUpdate=!0;let Z=D*4;for(let P=0;P<g;P++){let U=C[P],O=R[P],B=I[P],G=w*T*4*P;for(let j=0;j<U.count;j++){let L=j*Z;v===!0&&(o.fromBufferAttribute(U,j),k[G+L+0]=o.x,k[G+L+1]=o.y,k[G+L+2]=o.z,k[G+L+3]=0),_===!0&&(o.fromBufferAttribute(O,j),k[G+L+4]=o.x,k[G+L+5]=o.y,k[G+L+6]=o.z,k[G+L+7]=0),M===!0&&(o.fromBufferAttribute(B,j),k[G+L+8]=o.x,k[G+L+9]=o.y,k[G+L+10]=o.z,k[G+L+11]=B.itemSize===4?o.w:1)}}x={count:g,texture:X,size:new Ke(w,T)},s.set(h,x),h.addEventListener("dispose",b)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort($T);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(YT);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let M=a[_],C=M[0],R=M[1];C!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+_)!==x[C]&&h.setAttribute("morphTarget"+_,x[C]),p&&h.getAttribute("morphNormal"+_)!==p[C]&&h.setAttribute("morphNormal"+_,p[C]),r[_]=R,m+=R):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}let v=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function JT(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var jl=class extends ei{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:as,h!==as&&h!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=mr),i===void 0&&h===bo&&(i=os),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},B0=new ei,F0=new jl(1,1);F0.compareFunction=D0;var V0=new Hl,H0=new Vd,G0=new Yl,Qx=[],e0=[],t0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Ro(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Qx[r];if(s===void 0&&(s=new Float32Array(r),Qx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ih(n,e){let t=e0[e];t===void 0&&(t=new Int32Array(e),e0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function KT(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ZT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function QT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function eA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function tA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;i0.set(i),n.uniformMatrix2fv(this.addr,!1,i0),Rt(t,i)}}function nA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;n0.set(i),n.uniformMatrix3fv(this.addr,!1,n0),Rt(t,i)}}function iA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;t0.set(i),n.uniformMatrix4fv(this.addr,!1,t0),Rt(t,i)}}function rA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function oA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function aA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function cA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function hA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function uA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function dA(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?F0:B0;t.setTexture2D(e||s,r)}function fA(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||H0,r)}function pA(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||G0,r)}function mA(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||V0,r)}function gA(n){switch(n){case 5126:return KT;case 35664:return ZT;case 35665:return QT;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return aA;case 5125:return cA;case 36294:return lA;case 36295:return hA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function xA(n,e){n.uniform1fv(this.addr,e)}function yA(n,e){let t=Ro(e,this.size,2);n.uniform2fv(this.addr,t)}function _A(n,e){let t=Ro(e,this.size,3);n.uniform3fv(this.addr,t)}function vA(n,e){let t=Ro(e,this.size,4);n.uniform4fv(this.addr,t)}function bA(n,e){let t=Ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wA(n,e){let t=Ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SA(n,e){let t=Ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MA(n,e){n.uniform1iv(this.addr,e)}function EA(n,e){n.uniform2iv(this.addr,e)}function TA(n,e){n.uniform3iv(this.addr,e)}function AA(n,e){n.uniform4iv(this.addr,e)}function CA(n,e){n.uniform1uiv(this.addr,e)}function RA(n,e){n.uniform2uiv(this.addr,e)}function PA(n,e){n.uniform3uiv(this.addr,e)}function IA(n,e){n.uniform4uiv(this.addr,e)}function LA(n,e,t){let i=this.cache,r=e.length,s=ih(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||B0,s[o])}function DA(n,e,t){let i=this.cache,r=e.length,s=ih(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||H0,s[o])}function UA(n,e,t){let i=this.cache,r=e.length,s=ih(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||G0,s[o])}function NA(n,e,t){let i=this.cache,r=e.length,s=ih(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||V0,s[o])}function OA(n){switch(n){case 5126:return xA;case 35664:return yA;case 35665:return _A;case 35666:return vA;case 35674:return bA;case 35675:return wA;case 35676:return SA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return CA;case 36294:return RA;case 36295:return PA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return NA}}var Wd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gA(t.type)}},Xd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OA(t.type)}},qd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Cd=/(\w+)(\])?(\[|\.)?/g;function r0(n,e){n.seq.push(e),n.map[e.id]=e}function kA(n,e,t){let i=n.name,r=i.length;for(Cd.lastIndex=0;;){let s=Cd.exec(i),o=Cd.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){r0(t,l===void 0?new Wd(a,n,e):new Xd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new qd(a),r0(t,u)),t=u}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);kA(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function s0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zA=37297,BA=0;function FA(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function VA(n){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n),i;switch(e===t?i="":e===Ol&&t===Nl?i="LinearDisplayP3ToLinearSRGB":e===Nl&&t===Ol&&(i="LinearSRGBToLinearDisplayP3"),n){case Bi:case nh:return[i,"LinearTransferOETF"];case Gt:case vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function o0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FA(n.getShaderSource(e),o)}else return r}function HA(n,e){let t=VA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GA(n,e){let t;switch(e){case $S:t="Linear";break;case jS:t="Reinhard";break;case JS:t="OptimizedCineon";break;case KS:t="ACESFilmic";break;case QS:t="AgX";break;case ZS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function WA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(po).join(`
`)}function XA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(po).join(`
`)}function qA(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YA(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function po(n){return n!==""}function a0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(n){return n.replace($A,JA)}var jA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JA(n,e){let t=Be[e];if(t===void 0){let i=jA.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(t)}var KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(n){return n.replace(KA,ZA)}function ZA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function h0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function eC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _o:case vo:e="ENVMAP_TYPE_CUBE";break;case th:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function nC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case YS:e="ENVMAP_BLENDING_ADD";break}return e}function iC(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rC(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=QA(t),l=eC(t),h=tC(t),u=nC(t),d=iC(t),f=t.isWebGL2?"":WA(t),g=XA(t),x=qA(s),p=r.createProgram(),m,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(po).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(po).join(`
`),v.length>0&&(v+=`
`)):(m=[h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),v=[f,h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?Be.tonemapping_pars_fragment:"",t.toneMapping!==yr?GA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,HA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=Yd(o),o=a0(o,t),o=c0(o,t),a=Yd(a),a=a0(a,t),a=c0(a,t),o=l0(o),a=l0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=_+m+o,C=_+v+a,R=s0(r,r.VERTEX_SHADER,M),I=s0(r,r.FRAGMENT_SHADER,C);r.attachShader(p,R),r.attachShader(p,I),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(X){if(n.debug.checkShaderErrors){let Z=r.getProgramInfoLog(p).trim(),b=r.getShaderInfoLog(R).trim(),P=r.getShaderInfoLog(I).trim(),U=!0,O=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,R,I);else{let B=o0(r,R,"vertex"),G=o0(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+B+`
`+G)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(b===""||P==="")&&(O=!1);O&&(X.diagnostics={runnable:U,programLog:Z,vertexShader:{log:b,prefix:m},fragmentShader:{log:P,prefix:v}})}r.deleteShader(R),r.deleteShader(I),w=new yo(r,p),T=YA(r,p)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,zA)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=I,this}var sC=0,$d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jd(e),t.set(e,i)),i}},jd=class{constructor(e){this.id=sC++,this.code=e,this.usedTimes=0}};function oC(n,e,t,i,r,s,o){let a=new Oa,c=new $d,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function p(w,T,k,X,Z){let b=X.fog,P=Z.geometry,U=w.isMeshStandardMaterial?X.environment:null,O=(w.isMeshStandardMaterial?t:e).get(w.envMap||U),B=O&&O.mapping===th?O.image.height:null,G=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,L=j!==void 0?j.length:0,V=0;P.morphAttributes.position!==void 0&&(V=1),P.morphAttributes.normal!==void 0&&(V=2),P.morphAttributes.color!==void 0&&(V=3);let z,J,ie,te;if(G){let rn=li[G];z=rn.vertexShader,J=rn.fragmentShader}else z=w.vertexShader,J=w.fragmentShader,c.update(w),ie=c.getVertexShaderID(w),te=c.getFragmentShaderID(w);let ce=n.getRenderTarget(),le=Z.isInstancedMesh===!0,ue=Z.isBatchedMesh===!0,ye=!!w.map,we=!!w.matcap,W=!!O,it=!!w.aoMap,de=!!w.lightMap,_e=!!w.bumpMap,ae=!!w.normalMap,et=!!w.displacementMap,Le=!!w.emissiveMap,A=!!w.metalnessMap,S=!!w.roughnessMap,q=w.anisotropy>0,re=w.clearcoat>0,ne=w.iridescence>0,oe=w.sheen>0,Ee=w.transmission>0,me=q&&!!w.anisotropyMap,ee=re&&!!w.clearcoatMap,se=re&&!!w.clearcoatNormalMap,he=re&&!!w.clearcoatRoughnessMap,Q=ne&&!!w.iridescenceMap,Se=ne&&!!w.iridescenceThicknessMap,Ce=oe&&!!w.sheenColorMap,Re=oe&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,be=!!w.specularColorMap,Ne=!!w.specularIntensityMap,Qe=Ee&&!!w.transmissionMap,ut=Ee&&!!w.thicknessMap,He=!!w.gradientMap,fe=!!w.alphaMap,N=w.alphaTest>0,ge=!!w.alphaHash,xe=!!w.extensions,De=!!P.attributes.uv1,Pe=!!P.attributes.uv2,ct=!!P.attributes.uv3,lt=yr;return w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(lt=n.toneMapping),{isWebGL2:h,shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:z,fragmentShader:J,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ue,instancing:le,instancingColor:le&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Bi,map:ye,matcap:we,envMap:W,envMapMode:W&&O.mapping,envMapCubeUVHeight:B,aoMap:it,lightMap:de,bumpMap:_e,normalMap:ae,displacementMap:d&&et,emissiveMap:Le,normalMapObjectSpace:ae&&w.normalMapType===uM,normalMapTangentSpace:ae&&w.normalMapType===L0,metalnessMap:A,roughnessMap:S,anisotropy:q,anisotropyMap:me,clearcoat:re,clearcoatMap:ee,clearcoatNormalMap:se,clearcoatRoughnessMap:he,iridescence:ne,iridescenceMap:Q,iridescenceThicknessMap:Se,sheen:oe,sheenColorMap:Ce,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:be,specularIntensityMap:Ne,transmission:Ee,transmissionMap:Qe,thicknessMap:ut,gradientMap:He,opaque:w.transparent===!1&&w.blending===mo,alphaMap:fe,alphaTest:N,alphaHash:ge,combine:w.combine,mapUv:ye&&x(w.map.channel),aoMapUv:it&&x(w.aoMap.channel),lightMapUv:de&&x(w.lightMap.channel),bumpMapUv:_e&&x(w.bumpMap.channel),normalMapUv:ae&&x(w.normalMap.channel),displacementMapUv:et&&x(w.displacementMap.channel),emissiveMapUv:Le&&x(w.emissiveMap.channel),metalnessMapUv:A&&x(w.metalnessMap.channel),roughnessMapUv:S&&x(w.roughnessMap.channel),anisotropyMapUv:me&&x(w.anisotropyMap.channel),clearcoatMapUv:ee&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(w.sheenRoughnessMap.channel),specularMapUv:Ae&&x(w.specularMap.channel),specularColorMapUv:be&&x(w.specularColorMap.channel),specularIntensityMapUv:Ne&&x(w.specularIntensityMap.channel),transmissionMapUv:Qe&&x(w.transmissionMap.channel),thicknessMapUv:ut&&x(w.thicknessMap.channel),alphaMapUv:fe&&x(w.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ae||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Pe,vertexUv3s:ct,pointsUvs:Z.isPoints===!0&&!!P.attributes.uv&&(ye||fe),fog:!!b,useFog:w.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kn,flipSided:w.side===Kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:xe&&w.extensions.derivatives===!0,extensionFragDepth:xe&&w.extensions.fragDepth===!0,extensionDrawBuffers:xe&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){let T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(let k in w.defines)T.push(k),T.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(v(T,w),_(T,w),T.push(n.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function v(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function M(w){let T=g[w.type],k;if(T){let X=li[T];k=jM.clone(X.uniforms)}else k=w.uniforms;return k}function C(w,T){let k;for(let X=0,Z=l.length;X<Z;X++){let b=l[X];if(b.cacheKey===T){k=b,++k.usedTimes;break}}return k===void 0&&(k=new rC(n,T,w,s),l.push(k)),k}function R(w){if(--w.usedTimes===0){let T=l.indexOf(w);l[T]=l[l.length-1],l.pop(),w.destroy()}}function I(w){c.remove(w)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:l,dispose:D}}function aC(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function u0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function d0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,f,g,x,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||cC),i.length>1&&i.sort(d||u0),r.length>1&&r.sort(d||u0)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function lC(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new d0,n.set(i,[o])):r>=s.length?(o=new d0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function uC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var dC=0;function fC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pC(n,e){let t=new hC,i=uC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new F);let s=new F,o=new At,a=new At;function c(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,p=0,m=0,v=0,_=0,M=0,C=0,R=0,I=0,D=0,w=0;h.sort(fC);let T=u===!0?Math.PI:1;for(let X=0,Z=h.length;X<Z;X++){let b=h[X],P=b.color,U=b.intensity,O=b.distance,B=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=P.r*U*T,f+=P.g*U*T,g+=P.b*U*T;else if(b.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(b.sh.coefficients[G],U);w++}else if(b.isDirectionalLight){let G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity*T),b.castShadow){let j=b.shadow,L=i.get(b);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,r.directionalShadow[x]=L,r.directionalShadowMap[x]=B,r.directionalShadowMatrix[x]=b.shadow.matrix,M++}r.directional[x]=G,x++}else if(b.isSpotLight){let G=t.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(P).multiplyScalar(U*T),G.distance=O,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,r.spot[m]=G;let j=b.shadow;if(b.map&&(r.spotLightMap[I]=b.map,I++,j.updateMatrices(b),b.castShadow&&D++),r.spotLightMatrix[m]=j.matrix,b.castShadow){let L=i.get(b);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,r.spotShadow[m]=L,r.spotShadowMap[m]=B,R++}m++}else if(b.isRectAreaLight){let G=t.get(b);G.color.copy(P).multiplyScalar(U),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),r.rectArea[v]=G,v++}else if(b.isPointLight){let G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity*T),G.distance=b.distance,G.decay=b.decay,b.castShadow){let j=b.shadow,L=i.get(b);L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,L.shadowCameraNear=j.camera.near,L.shadowCameraFar=j.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=B,r.pointShadowMatrix[p]=b.shadow.matrix,C++}r.point[p]=G,p++}else if(b.isHemisphereLight){let G=t.get(b);G.skyColor.copy(b.color).multiplyScalar(U*T),G.groundColor.copy(b.groundColor).multiplyScalar(U*T),r.hemi[_]=G,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;let k=r.hash;(k.directionalLength!==x||k.pointLength!==p||k.spotLength!==m||k.rectAreaLength!==v||k.hemiLength!==_||k.numDirectionalShadows!==M||k.numPointShadows!==C||k.numSpotShadows!==R||k.numSpotMaps!==I||k.numLightProbes!==w)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+I-D,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=w,k.directionalLength=x,k.pointLength=p,k.spotLength=m,k.rectAreaLength=v,k.hemiLength=_,k.numDirectionalShadows=M,k.numPointShadows=C,k.numSpotShadows=R,k.numSpotMaps=I,k.numLightProbes=w,r.version=dC++)}function l(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let M=h[v];if(M.isDirectionalLight){let C=r.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(M.isSpotLight){let C=r.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let C=r.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let C=r.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let C=r.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:r}}function f0(n,e){let t=new pC(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function mC(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new f0(n,e),t.set(s,[c])):o>=a.length?(c=new f0(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Jd=class extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kd=class extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xC=`uniform sampler2D shadow_pass;
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
}`;function yC(n,e,t){let i=new ka,r=new Ke,s=new Ke,o=new zt,a=new Jd({depthPacking:hM}),c=new Kd,l={},h=t.maxTextureSize,u={[yn]:Kt,[Kt]:yn,[Kn]:Kn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:gC,fragmentShader:xC}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dn;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Tt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w0;let m=this.type;this.render=function(R,I,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let w=n.getRenderTarget(),T=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),X=n.state;X.setBlending(xr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let Z=m!==Oi&&this.type===Oi,b=m===Oi&&this.type!==Oi;for(let P=0,U=R.length;P<U;P++){let O=R[P],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let G=B.getFrameExtents();if(r.multiply(G),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,B.mapSize.y=s.y)),B.map===null||Z===!0||b===!0){let L=this.type!==Oi?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new Fi(r.x,r.y,L),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let j=B.getViewportCount();for(let L=0;L<j;L++){let V=B.getViewport(L);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),X.viewport(o),B.updateMatrices(O,L),i=B.getFrustum(),M(I,D,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&v(B,D),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(w,T,k)};function v(R,I){let D=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,D,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,D,f,x,null)}function _(R,I,D,w){let T=null,k=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)T=k;else if(T=D.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let X=T.uuid,Z=I.uuid,b=l[X];b===void 0&&(b={},l[X]=b);let P=b[Z];P===void 0&&(P=T.clone(),b[Z]=P,I.addEventListener("dispose",C)),T=P}if(T.visible=I.visible,T.wireframe=I.wireframe,w===Oi?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:u[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let X=n.properties.get(T);X.light=D}return T}function M(R,I,D,w,T){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Oi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let Z=e.update(R),b=R.material;if(Array.isArray(b)){let P=Z.groups;for(let U=0,O=P.length;U<O;U++){let B=P[U],G=b[B.materialIndex];if(G&&G.visible){let j=_(R,G,w,T);R.onBeforeShadow(n,R,I,D,Z,j,B),n.renderBufferDirect(D,null,Z,j,R,B),R.onAfterShadow(n,R,I,D,Z,j,B)}}}else if(b.visible){let P=_(R,b,w,T);R.onBeforeShadow(n,R,I,D,Z,P,null),n.renderBufferDirect(D,null,Z,P,R,null),R.onAfterShadow(n,R,I,D,Z,P,null)}}let X=R.children;for(let Z=0,b=X.length;Z<b;Z++)M(X[Z],I,D,w,T)}function C(R){R.target.removeEventListener("dispose",C);for(let D in l){let w=l[D],T=R.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function _C(n,e,t){let i=t.isWebGL2;function r(){let N=!1,ge=new zt,xe=null,De=new zt(0,0,0,0);return{setMask:function(Pe){xe!==Pe&&!N&&(n.colorMask(Pe,Pe,Pe,Pe),xe=Pe)},setLocked:function(Pe){N=Pe},setClear:function(Pe,ct,lt,Nt,rn){rn===!0&&(Pe*=Nt,ct*=Nt,lt*=Nt),ge.set(Pe,ct,lt,Nt),De.equals(ge)===!1&&(n.clearColor(Pe,ct,lt,Nt),De.copy(ge))},reset:function(){N=!1,xe=null,De.set(-1,0,0,0)}}}function s(){let N=!1,ge=null,xe=null,De=null;return{setTest:function(Pe){Pe?ue(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Pe){ge!==Pe&&!N&&(n.depthMask(Pe),ge=Pe)},setFunc:function(Pe){if(xe!==Pe){switch(Pe){case BS:n.depthFunc(n.NEVER);break;case FS:n.depthFunc(n.ALWAYS);break;case VS:n.depthFunc(n.LESS);break;case Il:n.depthFunc(n.LEQUAL);break;case HS:n.depthFunc(n.EQUAL);break;case GS:n.depthFunc(n.GEQUAL);break;case WS:n.depthFunc(n.GREATER);break;case XS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Pe}},setLocked:function(Pe){N=Pe},setClear:function(Pe){De!==Pe&&(n.clearDepth(Pe),De=Pe)},reset:function(){N=!1,ge=null,xe=null,De=null}}}function o(){let N=!1,ge=null,xe=null,De=null,Pe=null,ct=null,lt=null,Nt=null,rn=null;return{setTest:function(ht){N||(ht?ue(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!N&&(n.stencilMask(ht),ge=ht)},setFunc:function(ht,sn,ci){(xe!==ht||De!==sn||Pe!==ci)&&(n.stencilFunc(ht,sn,ci),xe=ht,De=sn,Pe=ci)},setOp:function(ht,sn,ci){(ct!==ht||lt!==sn||Nt!==ci)&&(n.stencilOp(ht,sn,ci),ct=ht,lt=sn,Nt=ci)},setLocked:function(ht){N=ht},setClear:function(ht){rn!==ht&&(n.clearStencil(ht),rn=ht)},reset:function(){N=!1,ge=null,xe=null,De=null,Pe=null,ct=null,lt=null,Nt=null,rn=null}}}let a=new r,c=new s,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,M=null,C=null,R=null,I=null,D=null,w=new ke(0,0,0),T=0,k=!1,X=null,Z=null,b=null,P=null,U=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,G=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=G>=2);let L=null,V={},z=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),ie=new zt().fromArray(z),te=new zt().fromArray(J);function ce(N,ge,xe,De){let Pe=new Uint8Array(4),ct=n.createTexture();n.bindTexture(N,ct),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<xe;lt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(ge,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(ge+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return ct}let le={};le[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ue(n.DEPTH_TEST),c.setFunc(Il),Le(!1),A(qg),ue(n.CULL_FACE),ae(xr);function ue(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function ye(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function we(N,ge){return f[N]!==ge?(n.bindFramebuffer(N,ge),f[N]=ge,i&&(N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge)),!0):!1}function W(N,ge){let xe=x,De=!1;if(N)if(xe=g.get(ge),xe===void 0&&(xe=[],g.set(ge,xe)),N.isWebGLMultipleRenderTargets){let Pe=N.texture;if(xe.length!==Pe.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,lt=Pe.length;ct<lt;ct++)xe[ct]=n.COLOR_ATTACHMENT0+ct;xe.length=Pe.length,De=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,De=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function it(N){return p!==N?(n.useProgram(N),p=N,!0):!1}let de={[is]:n.FUNC_ADD,[MS]:n.FUNC_SUBTRACT,[ES]:n.FUNC_REVERSE_SUBTRACT};if(i)de[Jg]=n.MIN,de[Kg]=n.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(de[Jg]=N.MIN_EXT,de[Kg]=N.MAX_EXT)}let _e={[TS]:n.ZERO,[AS]:n.ONE,[CS]:n.SRC_COLOR,[Ld]:n.SRC_ALPHA,[US]:n.SRC_ALPHA_SATURATE,[LS]:n.DST_COLOR,[PS]:n.DST_ALPHA,[RS]:n.ONE_MINUS_SRC_COLOR,[Dd]:n.ONE_MINUS_SRC_ALPHA,[DS]:n.ONE_MINUS_DST_COLOR,[IS]:n.ONE_MINUS_DST_ALPHA,[NS]:n.CONSTANT_COLOR,[OS]:n.ONE_MINUS_CONSTANT_COLOR,[kS]:n.CONSTANT_ALPHA,[zS]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(N,ge,xe,De,Pe,ct,lt,Nt,rn,ht){if(N===xr){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),N!==SS){if(N!==v||ht!==k){if((_!==is||R!==is)&&(n.blendEquation(n.FUNC_ADD),_=is,R=is),ht)switch(N){case mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yg:n.blendFunc(n.ONE,n.ONE);break;case $g:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $g:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,C=null,I=null,D=null,w.set(0,0,0),T=0,v=N,k=ht}return}Pe=Pe||ge,ct=ct||xe,lt=lt||De,(ge!==_||Pe!==R)&&(n.blendEquationSeparate(de[ge],de[Pe]),_=ge,R=Pe),(xe!==M||De!==C||ct!==I||lt!==D)&&(n.blendFuncSeparate(_e[xe],_e[De],_e[ct],_e[lt]),M=xe,C=De,I=ct,D=lt),(Nt.equals(w)===!1||rn!==T)&&(n.blendColor(Nt.r,Nt.g,Nt.b,rn),w.copy(Nt),T=rn),v=N,k=!1}function et(N,ge){N.side===Kn?ye(n.CULL_FACE):ue(n.CULL_FACE);let xe=N.side===Kt;ge&&(xe=!xe),Le(xe),N.blending===mo&&N.transparent===!1?ae(xr):ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let De=N.stencilWrite;l.setTest(De),De&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(N){X!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),X=N)}function A(N){N!==bS?(ue(n.CULL_FACE),N!==Z&&(N===qg?n.cullFace(n.BACK):N===wS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),Z=N}function S(N){N!==b&&(B&&n.lineWidth(N),b=N)}function q(N,ge,xe){N?(ue(n.POLYGON_OFFSET_FILL),(P!==ge||U!==xe)&&(n.polygonOffset(ge,xe),P=ge,U=xe)):ye(n.POLYGON_OFFSET_FILL)}function re(N){N?ue(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function ne(N){N===void 0&&(N=n.TEXTURE0+O-1),L!==N&&(n.activeTexture(N),L=N)}function oe(N,ge,xe){xe===void 0&&(L===null?xe=n.TEXTURE0+O-1:xe=L);let De=V[xe];De===void 0&&(De={type:void 0,texture:void 0},V[xe]=De),(De.type!==N||De.texture!==ge)&&(L!==xe&&(n.activeTexture(xe),L=xe),n.bindTexture(N,ge||le[N]),De.type=N,De.texture=ge)}function Ee(){let N=V[L];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){ie.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function Qe(N){te.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function ut(N,ge){let xe=u.get(ge);xe===void 0&&(xe=new WeakMap,u.set(ge,xe));let De=xe.get(N);De===void 0&&(De=n.getUniformBlockIndex(ge,N.name),xe.set(N,De))}function He(N,ge){let De=u.get(ge).get(N);h.get(ge)!==De&&(n.uniformBlockBinding(ge,De,N.__bindingPointIndex),h.set(ge,De))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},L=null,V={},f={},g=new WeakMap,x=[],p=null,m=!1,v=null,_=null,M=null,C=null,R=null,I=null,D=null,w=new ke(0,0,0),T=0,k=!1,X=null,Z=null,b=null,P=null,U=null,ie.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ue,disable:ye,bindFramebuffer:we,drawBuffers:W,useProgram:it,setBlending:ae,setMaterial:et,setFlipSided:Le,setCullFace:A,setLineWidth:S,setPolygonOffset:q,setScissorTest:re,activeTexture:ne,bindTexture:oe,unbindTexture:Ee,compressedTexImage2D:me,compressedTexImage3D:ee,texImage2D:Ae,texImage3D:be,updateUBOMapping:ut,uniformBlockBinding:He,texStorage2D:Ce,texStorage3D:Re,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:Q,compressedTexSubImage3D:Se,scissor:Ne,viewport:Qe,reset:fe}}function vC(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):Bl("canvas")}function x(A,S,q,re){let ne=1;if((A.width>re||A.height>re)&&(ne=re/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let oe=S?zl:Math.floor,Ee=oe(ne*A.width),me=oe(ne*A.height);u===void 0&&(u=g(Ee,me));let ee=q?g(Ee,me):u;return ee.width=Ee,ee.height=me,ee.getContext("2d").drawImage(A,0,0,Ee,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+me+")."),ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Bd(A.width)&&Bd(A.height)}function m(A){return a?!1:A.wrapS!==Zn||A.wrapT!==Zn||A.minFilter!==cn&&A.minFilter!==zn}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==cn&&A.minFilter!==zn}function _(A){n.generateMipmap(A)}function M(A,S,q,re,ne=!1){if(a===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=S;if(S===n.RED&&(q===n.FLOAT&&(oe=n.R32F),q===n.HALF_FLOAT&&(oe=n.R16F),q===n.UNSIGNED_BYTE&&(oe=n.R8)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.R8UI),q===n.UNSIGNED_SHORT&&(oe=n.R16UI),q===n.UNSIGNED_INT&&(oe=n.R32UI),q===n.BYTE&&(oe=n.R8I),q===n.SHORT&&(oe=n.R16I),q===n.INT&&(oe=n.R32I)),S===n.RG&&(q===n.FLOAT&&(oe=n.RG32F),q===n.HALF_FLOAT&&(oe=n.RG16F),q===n.UNSIGNED_BYTE&&(oe=n.RG8)),S===n.RGBA){let Ee=ne?Ul:st.getTransfer(re);q===n.FLOAT&&(oe=n.RGBA32F),q===n.HALF_FLOAT&&(oe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(oe=Ee===dt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(A,S,q){return v(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===cn||A===Zg||A===ed?n.NEAREST:n.LINEAR}function I(A){let S=A.target;S.removeEventListener("dispose",I),w(S),S.isVideoTexture&&h.delete(S)}function D(A){let S=A.target;S.removeEventListener("dispose",D),k(S)}function w(A){let S=i.get(A);if(S.__webglInit===void 0)return;let q=A.source,re=d.get(q);if(re){let ne=re[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(re).length===0&&d.delete(q)}i.remove(A)}function T(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let q=A.source,re=d.get(q);delete re[S.__cacheKey],o.memory.textures--}function k(A){let S=A.texture,q=i.get(A),re=i.get(S);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let oe=0;oe<q.__webglFramebuffer[ne].length;oe++)n.deleteFramebuffer(q.__webglFramebuffer[ne][oe]);else n.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)n.deleteFramebuffer(q.__webglFramebuffer[ne]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,oe=S.length;ne<oe;ne++){let Ee=i.get(S[ne]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(A)}let X=0;function Z(){X=0}function b(){let A=X;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),X+=1,A}function P(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){let q=i.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){let re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(q,A,S);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function O(A,S){let q=i.get(A);if(A.version>0&&q.__version!==A.version){ie(q,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function B(A,S){let q=i.get(A);if(A.version>0&&q.__version!==A.version){ie(q,A,S);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function G(A,S){let q=i.get(A);if(A.version>0&&q.__version!==A.version){te(q,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let j={[Od]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[kd]:n.MIRRORED_REPEAT},L={[cn]:n.NEAREST,[Zg]:n.NEAREST_MIPMAP_NEAREST,[ed]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[eM]:n.LINEAR_MIPMAP_NEAREST,[La]:n.LINEAR_MIPMAP_LINEAR},V={[dM]:n.NEVER,[yM]:n.ALWAYS,[fM]:n.LESS,[D0]:n.LEQUAL,[pM]:n.EQUAL,[xM]:n.GEQUAL,[mM]:n.GREATER,[gM]:n.NOTEQUAL};function z(A,S,q){if(q?(n.texParameteri(A,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,j[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,L[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,L[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Zn||S.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,R(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==cn&&S.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,V[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===cn||S.minFilter!==ed&&S.minFilter!==La||S.type===gr&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function J(A,S){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));let re=S.source,ne=d.get(re);ne===void 0&&(ne={},d.set(re,ne));let oe=P(S);if(oe!==A.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[oe].usedTimes++;let Ee=ne[A.__cacheKey];Ee!==void 0&&(ne[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(S)),A.__cacheKey=oe,A.__webglTexture=ne[oe].texture}return q}function ie(A,S,q){let re=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=n.TEXTURE_3D);let ne=J(A,S),oe=S.source;t.bindTexture(re,A.__webglTexture,n.TEXTURE0+q);let Ee=i.get(oe);if(oe.version!==Ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+q);let me=st.getPrimaries(st.workingColorSpace),ee=S.colorSpace===Bn?null:st.getPrimaries(S.colorSpace),se=S.colorSpace===Bn||me===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let he=m(S)&&p(S.image)===!1,Q=x(S.image,he,!1,r.maxTextureSize);Q=Le(S,Q);let Se=p(Q)||a,Ce=s.convert(S.format,S.colorSpace),Re=s.convert(S.type),Ae=M(S.internalFormat,Ce,Re,S.colorSpace,S.isVideoTexture);z(re,S,Se);let be,Ne=S.mipmaps,Qe=a&&S.isVideoTexture!==!0&&Ae!==P0,ut=Ee.__version===void 0||ne===!0,He=C(S,Q,Se);if(S.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?S.type===gr?Ae=n.DEPTH_COMPONENT32F:S.type===mr?Ae=n.DEPTH_COMPONENT24:S.type===os?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:S.type===gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===as&&Ae===n.DEPTH_COMPONENT&&S.type!==_f&&S.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=mr,Re=s.convert(S.type)),S.format===bo&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,S.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=os,Re=s.convert(S.type))),ut&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ae,Q.width,Q.height,0,Ce,Re,null));else if(S.isDataTexture)if(Ne.length>0&&Se){Qe&&ut&&t.texStorage2D(n.TEXTURE_2D,He,Ae,Ne[0].width,Ne[0].height);for(let fe=0,N=Ne.length;fe<N;fe++)be=Ne[fe],Qe?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,Ce,Re,be.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,be.width,be.height,0,Ce,Re,be.data);S.generateMipmaps=!1}else Qe?(ut&&t.texStorage2D(n.TEXTURE_2D,He,Ae,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Ce,Re,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,Q.width,Q.height,0,Ce,Re,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qe&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Ae,Ne[0].width,Ne[0].height,Q.depth);for(let fe=0,N=Ne.length;fe<N;fe++)be=Ne[fe],S.format!==Qn?Ce!==null?Qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,Q.depth,Ce,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,be.width,be.height,Q.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,Q.depth,Ce,Re,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ae,be.width,be.height,Q.depth,0,Ce,Re,be.data)}else{Qe&&ut&&t.texStorage2D(n.TEXTURE_2D,He,Ae,Ne[0].width,Ne[0].height);for(let fe=0,N=Ne.length;fe<N;fe++)be=Ne[fe],S.format!==Qn?Ce!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ae,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,Ce,Re,be.data):t.texImage2D(n.TEXTURE_2D,fe,Ae,be.width,be.height,0,Ce,Re,be.data)}else if(S.isDataArrayTexture)Qe?(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ce,Re,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,Ce,Re,Q.data);else if(S.isData3DTexture)Qe?(ut&&t.texStorage3D(n.TEXTURE_3D,He,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ce,Re,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,Ce,Re,Q.data);else if(S.isFramebufferTexture){if(ut)if(Qe)t.texStorage2D(n.TEXTURE_2D,He,Ae,Q.width,Q.height);else{let fe=Q.width,N=Q.height;for(let ge=0;ge<He;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ae,fe,N,0,Ce,Re,null),fe>>=1,N>>=1}}else if(Ne.length>0&&Se){Qe&&ut&&t.texStorage2D(n.TEXTURE_2D,He,Ae,Ne[0].width,Ne[0].height);for(let fe=0,N=Ne.length;fe<N;fe++)be=Ne[fe],Qe?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ce,Re,be):t.texImage2D(n.TEXTURE_2D,fe,Ae,Ce,Re,be);S.generateMipmaps=!1}else Qe?(ut&&t.texStorage2D(n.TEXTURE_2D,He,Ae,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Re,Q)):t.texImage2D(n.TEXTURE_2D,0,Ae,Ce,Re,Q);v(S,Se)&&_(re),Ee.__version=oe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,q){if(S.image.length!==6)return;let re=J(A,S),ne=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);let oe=i.get(ne);if(ne.version!==oe.__version||re===!0){t.activeTexture(n.TEXTURE0+q);let Ee=st.getPrimaries(st.workingColorSpace),me=S.colorSpace===Bn?null:st.getPrimaries(S.colorSpace),ee=S.colorSpace===Bn||Ee===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let fe=0;fe<6;fe++)!se&&!he?Q[fe]=x(S.image[fe],!1,!0,r.maxCubemapSize):Q[fe]=he?S.image[fe].image:S.image[fe],Q[fe]=Le(S,Q[fe]);let Se=Q[0],Ce=p(Se)||a,Re=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),be=M(S.internalFormat,Re,Ae,S.colorSpace),Ne=a&&S.isVideoTexture!==!0,Qe=oe.__version===void 0||re===!0,ut=C(S,Se,Ce);z(n.TEXTURE_CUBE_MAP,S,Ce);let He;if(se){Ne&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ut,be,Se.width,Se.height);for(let fe=0;fe<6;fe++){He=Q[fe].mipmaps;for(let N=0;N<He.length;N++){let ge=He[N];S.format!==Qn?Re!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,ge.width,ge.height,Re,Ae,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,be,ge.width,ge.height,0,Re,Ae,ge.data)}}}else{He=S.mipmaps,Ne&&Qe&&(He.length>0&&ut++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ut,be,Q[0].width,Q[0].height));for(let fe=0;fe<6;fe++)if(he){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Q[fe].width,Q[fe].height,Re,Ae,Q[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,Q[fe].width,Q[fe].height,0,Re,Ae,Q[fe].data);for(let N=0;N<He.length;N++){let xe=He[N].image[fe].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,xe.width,xe.height,Re,Ae,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,be,xe.width,xe.height,0,Re,Ae,xe.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Re,Ae,Q[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,Re,Ae,Q[fe]);for(let N=0;N<He.length;N++){let ge=He[N];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,Re,Ae,ge.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,be,Re,Ae,ge.image[fe])}}}v(S,Ce)&&_(n.TEXTURE_CUBE_MAP),oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ce(A,S,q,re,ne,oe){let Ee=s.convert(q.format,q.colorSpace),me=s.convert(q.type),ee=M(q.internalFormat,Ee,me,q.colorSpace);if(!i.get(S).__hasExternalTextures){let he=Math.max(1,S.width>>oe),Q=Math.max(1,S.height>>oe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,ee,he,Q,S.depth,0,Ee,me,null):t.texImage2D(ne,oe,ee,he,Q,0,Ee,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,i.get(q).__webglTexture,0,_e(S)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,i.get(q).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(A,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||ae(S)){let ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===gr?re=n.DEPTH_COMPONENT32F:ne.type===mr&&(re=n.DEPTH_COMPONENT24));let oe=_e(S);ae(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,re,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,re,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let re=_e(S);q&&ae(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,S.width,S.height):ae(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<re.length;ne++){let oe=re[ne],Ee=s.convert(oe.format,oe.colorSpace),me=s.convert(oe.type),ee=M(oe.internalFormat,Ee,me,oe.colorSpace),se=_e(S);q&&ae(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ee,S.width,S.height):ae(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ee,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);let re=i.get(S.depthTexture).__webglTexture,ne=_e(S);if(S.depthTexture.format===as)ae(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(S.depthTexture.format===bo)ae(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ye(A){let S=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,A)}else if(q){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=n.createRenderbuffer(),le(S.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),le(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(A,S,q){let re=i.get(A);S!==void 0&&ce(re.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ye(A)}function W(A){let S=A.texture,q=i.get(A),re=i.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=S.version,o.memory.textures++);let ne=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Ee=p(A)||a;if(ne){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let ee=0;ee<S.mipmaps.length;ee++)q.__webglFramebuffer[me][ee]=n.createFramebuffer()}else q.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)q.__webglFramebuffer[me]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(oe)if(r.drawBuffers){let me=A.texture;for(let ee=0,se=me.length;ee<se;ee++){let he=i.get(me[ee]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ae(A)===!1){let me=oe?S:[S];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ee=0;ee<me.length;ee++){let se=me[ee];q.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ee]);let he=s.convert(se.format,se.colorSpace),Q=s.convert(se.type),Se=M(se.internalFormat,he,Q,se.colorSpace,A.isXRRenderTarget===!0),Ce=_e(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Se,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,q.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),le(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),z(n.TEXTURE_CUBE_MAP,S,Ee);for(let me=0;me<6;me++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)ce(q.__webglFramebuffer[me][ee],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ee);else ce(q.__webglFramebuffer[me],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(S,Ee)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let me=A.texture;for(let ee=0,se=me.length;ee<se;ee++){let he=me[ee],Q=i.get(he);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),z(n.TEXTURE_2D,he,Ee),ce(q.__webglFramebuffer,A,he,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,0),v(he,Ee)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?me=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,re.__webglTexture),z(me,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)ce(q.__webglFramebuffer[ee],A,S,n.COLOR_ATTACHMENT0,me,ee);else ce(q.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,me,0);v(S,Ee)&&_(me),t.unbindTexture()}A.depthBuffer&&ye(A)}function it(A){let S=p(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ne=q.length;re<ne;re++){let oe=q[re];if(v(oe,S)){let Ee=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(oe).__webglTexture;t.bindTexture(Ee,me),_(Ee),t.unbindTexture()}}}function de(A){if(a&&A.samples>0&&ae(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,re=A.height,ne=n.COLOR_BUFFER_BIT,oe=[],Ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(A),ee=A.isWebGLMultipleRenderTargets===!0;if(ee)for(let se=0;se<S.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let se=0;se<S.length;se++){oe.push(n.COLOR_ATTACHMENT0+se),A.depthBuffer&&oe.push(Ee);let he=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(he===!1&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[se]),he===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),ee){let Q=i.get(S[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,q,re,0,0,q,re,ne,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let se=0;se<S.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,me.__webglColorRenderbuffer[se]);let he=i.get(S[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function _e(A){return Math.min(r.maxSamples,A.samples)}function ae(A){let S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Le(A,S){let q=A.colorSpace,re=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===zd||q!==Bi&&q!==Bn&&(st.getTransfer(q)===dt?a===!1?e.has("EXT_sRGB")===!0&&re===Qn?(A.format=zd,A.minFilter=zn,A.generateMipmaps=!1):S=Fl.sRGBToLinear(S):(re!==Qn||ne!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}this.allocateTextureUnit=b,this.resetTextureUnits=Z,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=we,this.setupRenderTarget=W,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ae}function bC(n,e,t){let i=t.isWebGL2;function r(s,o=Bn){let a,c=st.getTransfer(o);if(s===_r)return n.UNSIGNED_BYTE;if(s===E0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===T0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===tM)return n.BYTE;if(s===nM)return n.SHORT;if(s===_f)return n.UNSIGNED_SHORT;if(s===M0)return n.INT;if(s===mr)return n.UNSIGNED_INT;if(s===gr)return n.FLOAT;if(s===Da)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===iM)return n.ALPHA;if(s===Qn)return n.RGBA;if(s===rM)return n.LUMINANCE;if(s===sM)return n.LUMINANCE_ALPHA;if(s===as)return n.DEPTH_COMPONENT;if(s===bo)return n.DEPTH_STENCIL;if(s===zd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oM)return n.RED;if(s===A0)return n.RED_INTEGER;if(s===aM)return n.RG;if(s===C0)return n.RG_INTEGER;if(s===R0)return n.RGBA_INTEGER;if(s===td||s===nd||s===id||s===rd)if(c===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===td)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===id)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===td)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===id)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qg||s===ex||s===tx||s===nx)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ex)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tx)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nx)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===P0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ix||s===rx)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ix)return c===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sx||s===ox||s===ax||s===cx||s===lx||s===hx||s===ux||s===dx||s===fx||s===px||s===mx||s===gx||s===xx||s===yx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ox)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ax)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ux)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===px)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yx)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sd||s===_x||s===vx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===sd)return c===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_x)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cM||s===bx||s===wx||s===Sx)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===sd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===bx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sx)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===os?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Zd=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zi=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},wC={type:"move"},Ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wC)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Qd=class extends vr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),p=null,m=null,v=[],_=[],M=new Ke,C=null,R=new Rn;R.layers.enable(1),R.viewport=new zt;let I=new Rn;I.layers.enable(2),I.viewport=new zt;let D=[R,I],w=new Zd;w.layers.enable(1),w.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=v[z];return J===void 0&&(J=new Ia,v[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=v[z];return J===void 0&&(J=new Ia,v[z]=J),J.getGripSpace()},this.getHand=function(z){let J=v[z];return J===void 0&&(J=new Ia,v[z]=J),J.getHandSpace()};function X(z){let J=_.indexOf(z.inputSource);if(J===-1)return;let ie=v[J];ie!==void 0&&(ie.update(z.inputSource,z.frame,l||o),ie.dispatchEvent({type:z.type,data:z.inputSource}))}function Z(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",b);for(let z=0;z<v.length;z++){let J=_[z];J!==null&&(_[z]=null,v[z].disconnect(J))}T=null,k=null,e.setRenderTarget(p),f=null,d=null,u=null,r=null,m=null,V.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",b),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Fi(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ie=null,te=null;x.depth&&(te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=x.stencil?bo:as,ie=x.stencil?os:mr);let ce={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Fi(d.textureWidth,d.textureHeight,{format:Qn,type:_r,depthTexture:new jl(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let le=e.properties.get(m);le.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function b(z){for(let J=0;J<z.removed.length;J++){let ie=z.removed[J],te=_.indexOf(ie);te>=0&&(_[te]=null,v[te].disconnect(ie))}for(let J=0;J<z.added.length;J++){let ie=z.added[J],te=_.indexOf(ie);if(te===-1){for(let le=0;le<v.length;le++)if(le>=_.length){_.push(ie),te=le;break}else if(_[le]===null){_[le]=ie,te=le;break}if(te===-1)break}let ce=v[te];ce&&ce.connect(ie)}}let P=new F,U=new F;function O(z,J,ie){P.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition(ie.matrixWorld);let te=P.distanceTo(U),ce=J.projectionMatrix.elements,le=ie.projectionMatrix.elements,ue=ce[14]/(ce[10]-1),ye=ce[14]/(ce[10]+1),we=(ce[9]+1)/ce[5],W=(ce[9]-1)/ce[5],it=(ce[8]-1)/ce[0],de=(le[8]+1)/le[0],_e=ue*it,ae=ue*de,et=te/(-it+de),Le=et*-it;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Le),z.translateZ(et),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let A=ue+et,S=ye+et,q=_e-Le,re=ae+(te-Le),ne=we*ye/S*A,oe=W*ye/S*A;z.projectionMatrix.makePerspective(q,re,ne,oe,A,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function B(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=I.near=R.near=z.near,w.far=I.far=R.far=z.far,(T!==w.near||k!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,k=w.far);let J=z.parent,ie=w.cameras;B(w,J);for(let te=0;te<ie.length;te++)B(ie[te],J);ie.length===2?O(w,R,I):w.projectionMatrix.copy(R.projectionMatrix),G(z,w,J)};function G(z,J,ie){ie===null?z.matrix.copy(J.matrixWorld):(z.matrix.copy(ie.matrixWorld),z.matrix.invert(),z.matrix.multiply(J.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(J.projectionMatrix),z.projectionMatrixInverse.copy(J.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ua*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let j=null;function L(z,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let te=!1;ie.length!==w.cameras.length&&(w.cameras.length=0,te=!0);for(let ce=0;ce<ie.length;ce++){let le=ie[ce],ue=null;if(f!==null)ue=f.getViewport(le);else{let we=u.getViewSubImage(d,le);ue=we.viewport,ce===0&&(e.setRenderTargetTextures(m,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let ye=D[ce];ye===void 0&&(ye=new Rn,ye.layers.enable(ce),ye.viewport=new zt,D[ce]=ye),ye.matrix.fromArray(le.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(le.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ue.x,ue.y,ue.width,ue.height),ce===0&&(w.matrix.copy(ye.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),te===!0&&w.cameras.push(ye)}}for(let ie=0;ie<v.length;ie++){let te=_[ie],ce=v[ie];te!==null&&ce!==void 0&&ce.update(te,J,l||o)}j&&j(z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let V=new z0;V.setAnimationLoop(L),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}};function SC(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,k0(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MC(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let M=_.program;i.uniformBlockBinding(v,M)}function l(v,_){let M=r[v.id];M===void 0&&(g(v),M=h(v),r[v.id]=M,v.addEventListener("dispose",p));let C=_.program;i.updateUBOMapping(v,C);let R=e.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function h(v){let _=u();v.__bindingPointIndex=_;let M=n.createBuffer(),C=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=r[v.id],M=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,I=M.length;R<I;R++){let D=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,T=D.length;w<T;w++){let k=D[w];if(f(k,R,w,C)===!0){let X=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value],b=0;for(let P=0;P<Z.length;P++){let U=Z[P],O=x(U);typeof U=="number"||typeof U=="boolean"?(k.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,X+b,k.__data)):U.isMatrix3?(k.__data[0]=U.elements[0],k.__data[1]=U.elements[1],k.__data[2]=U.elements[2],k.__data[3]=0,k.__data[4]=U.elements[3],k.__data[5]=U.elements[4],k.__data[6]=U.elements[5],k.__data[7]=0,k.__data[8]=U.elements[6],k.__data[9]=U.elements[7],k.__data[10]=U.elements[8],k.__data[11]=0):(U.toArray(k.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,M,C){let R=v.value,I=_+"_"+M;if(C[I]===void 0)return typeof R=="number"||typeof R=="boolean"?C[I]=R:C[I]=R.clone(),!0;{let D=C[I];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[I]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(v){let _=v.uniforms,M=0,C=16;for(let I=0,D=_.length;I<D;I++){let w=Array.isArray(_[I])?_[I]:[_[I]];for(let T=0,k=w.length;T<k;T++){let X=w[T],Z=Array.isArray(X.value)?X.value:[X.value];for(let b=0,P=Z.length;b<P;b++){let U=Z[b],O=x(U),B=M%C;B!==0&&C-B<O.boundary&&(M+=C-B),X.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=O.storage}}}let R=M%C;return R>0&&(M+=C-R),v.__size=M,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){let _=v.target;_.removeEventListener("dispose",p);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(let v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}var za=class{constructor(e={}){let{canvas:t=DM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;let _=this,M=!1,C=0,R=0,I=null,D=-1,w=null,T=new zt,k=new zt,X=null,Z=new ke(0),b=0,P=t.width,U=t.height,O=1,B=null,G=null,j=new zt(0,0,P,U),L=new zt(0,0,P,U),V=!1,z=new ka,J=!1,ie=!1,te=null,ce=new At,le=new Ke,ue=new F,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return I===null?O:1}let W=i;function it(E,H){for(let $=0;$<E.length;$++){let K=E[$],Y=t.getContext(K,H);if(Y!==null)return Y}return null}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gf}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ge,!1),W===null){let H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),W=it(H,E),W===null)throw it(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let de,_e,ae,et,Le,A,S,q,re,ne,oe,Ee,me,ee,se,he,Q,Se,Ce,Re,Ae,be,Ne,Qe;function ut(){de=new GT(W),_e=new kT(W,de,e),de.init(_e),be=new bC(W,de,_e),ae=new _C(W,de,_e),et=new qT(W),Le=new aC,A=new vC(W,de,ae,Le,_e,be,et),S=new BT(_),q=new HT(_),re=new eE(W,_e),Ne=new NT(W,de,re,_e),ne=new WT(W,re,et,Ne),oe=new JT(W,ne,re,et),Ce=new jT(W,_e,A),he=new zT(Le),Ee=new oC(_,S,q,de,_e,Ne,he),me=new SC(_,Le),ee=new lC,se=new mC(de,_e),Se=new UT(_,S,q,ae,oe,d,c),Q=new yC(_,oe,_e),Qe=new MC(W,et,_e,ae),Re=new OT(W,de,et,_e),Ae=new XT(W,de,et,_e),et.programs=Ee.programs,_.capabilities=_e,_.extensions=de,_.properties=Le,_.renderLists=ee,_.shadowMap=Q,_.state=ae,_.info=et}ut();let He=new Qd(_,W);this.xr=He,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(P,U,!1))},this.getSize=function(E){return E.set(P,U)},this.setSize=function(E,H,$=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=E,U=H,t.width=Math.floor(E*O),t.height=Math.floor(H*O),$===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(P*O,U*O).floor()},this.setDrawingBufferSize=function(E,H,$){P=E,U=H,O=$,t.width=Math.floor(E*$),t.height=Math.floor(H*$),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,H,$,K){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,H,$,K),ae.viewport(T.copy(j).multiplyScalar(O).floor())},this.getScissor=function(E){return E.copy(L)},this.setScissor=function(E,H,$,K){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,H,$,K),ae.scissor(k.copy(L).multiplyScalar(O).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){ae.setScissorTest(V=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(E=!0,H=!0,$=!0){let K=0;if(E){let Y=!1;if(I!==null){let ve=I.texture.format;Y=ve===R0||ve===C0||ve===A0}if(Y){let ve=I.texture.type,Te=ve===_r||ve===mr||ve===_f||ve===os||ve===E0||ve===T0,Ie=Se.getClearColor(),Ue=Se.getClearAlpha(),Fe=Ie.r,Oe=Ie.g,ze=Ie.b;Te?(f[0]=Fe,f[1]=Oe,f[2]=ze,f[3]=Ue,W.clearBufferuiv(W.COLOR,0,f)):(g[0]=Fe,g[1]=Oe,g[2]=ze,g[3]=Ue,W.clearBufferiv(W.COLOR,0,g))}else K|=W.COLOR_BUFFER_BIT}H&&(K|=W.DEPTH_BUFFER_BIT),$&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ee.dispose(),se.dispose(),Le.dispose(),S.dispose(),q.dispose(),oe.dispose(),Ne.dispose(),Qe.dispose(),Ee.dispose(),He.dispose(),He.removeEventListener("sessionstart",rn),He.removeEventListener("sessionend",ht),te&&(te.dispose(),te=null),sn.stop()};function fe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=et.autoReset,H=Q.enabled,$=Q.autoUpdate,K=Q.needsUpdate,Y=Q.type;ut(),et.autoReset=E,Q.enabled=H,Q.autoUpdate=$,Q.needsUpdate=K,Q.type=Y}function ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xe(E){let H=E.target;H.removeEventListener("dispose",xe),De(H)}function De(E){Pe(E),Le.remove(E)}function Pe(E){let H=Le.get(E).programs;H!==void 0&&(H.forEach(function($){Ee.releaseProgram($)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,$,K,Y,ve){H===null&&(H=ye);let Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=xS(E,H,$,K,Y);ae.setMaterial(K,Te);let Ue=$.index,Fe=1;if(K.wireframe===!0){if(Ue=ne.getWireframeAttribute($),Ue===void 0)return;Fe=2}let Oe=$.drawRange,ze=$.attributes.position,bt=Oe.start*Fe,Tn=(Oe.start+Oe.count)*Fe;ve!==null&&(bt=Math.max(bt,ve.start*Fe),Tn=Math.min(Tn,(ve.start+ve.count)*Fe)),Ue!==null?(bt=Math.max(bt,0),Tn=Math.min(Tn,Ue.count)):ze!=null&&(bt=Math.max(bt,0),Tn=Math.min(Tn,ze.count));let Ot=Tn-bt;if(Ot<0||Ot===1/0)return;Ne.setup(Y,K,Ie,$,Ue);let Pi,gt=Re;if(Ue!==null&&(Pi=re.get(Ue),gt=Ae,gt.setIndex(Pi)),Y.isMesh)K.wireframe===!0?(ae.setLineWidth(K.wireframeLinewidth*we()),gt.setMode(W.LINES)):gt.setMode(W.TRIANGLES);else if(Y.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),ae.setLineWidth(Ge*we()),Y.isLineSegments?gt.setMode(W.LINES):Y.isLineLoop?gt.setMode(W.LINE_LOOP):gt.setMode(W.LINE_STRIP)}else Y.isPoints?gt.setMode(W.POINTS):Y.isSprite&&gt.setMode(W.TRIANGLES);if(Y.isBatchedMesh)gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)gt.renderInstances(bt,Ot,Y.count);else if($.isInstancedBufferGeometry){let Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ju=Math.min($.instanceCount,Ge);gt.renderInstances(bt,Ot,Ju)}else gt.render(bt,Ot)};function ct(E,H,$){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,il(E,H,$),E.side=yn,E.needsUpdate=!0,il(E,H,$),E.side=Kn):il(E,H,$)}this.compile=function(E,H,$=null){$===null&&($=E),p=se.get($),p.init(),v.push(p),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),E!==$&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(_._useLegacyLights);let K=new Set;return E.traverse(function(Y){let ve=Y.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){let Ie=ve[Te];ct(Ie,$,Y),K.add(Ie)}else ct(ve,$,Y),K.add(ve)}),v.pop(),p=null,K},this.compileAsync=function(E,H,$=null){let K=this.compile(E,H,$);return new Promise(Y=>{function ve(){if(K.forEach(function(Te){Le.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){Y(E);return}setTimeout(ve,10)}de.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let lt=null;function Nt(E){lt&&lt(E)}function rn(){sn.stop()}function ht(){sn.start()}let sn=new z0;sn.setAnimationLoop(Nt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(E){lt=E,He.setAnimationLoop(E),E===null?sn.stop():sn.start()},He.addEventListener("sessionstart",rn),He.addEventListener("sessionend",ht),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(H),H=He.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,H,I),p=se.get(E,v.length),p.init(),v.push(p),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z.setFromProjectionMatrix(ce),ie=this.localClippingEnabled,J=he.init(this.clippingPlanes,ie),x=ee.get(E,m.length),x.init(),m.push(x),ci(E,H,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(B,G),this.info.render.frame++,J===!0&&he.beginShadows();let $=p.state.shadowsArray;if(Q.render($,E,H),J===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(x,E),p.setupLights(_._useLegacyLights),H.isArrayCamera){let K=H.cameras;for(let Y=0,ve=K.length;Y<ve;Y++){let Te=K[Y];Fg(x,E,Te,Te.viewport)}}else Fg(x,E,H);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(_,E,H),Ne.resetDefaultState(),D=-1,w=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function ci(E,H,$,K){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||z.intersectsSprite(E)){K&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);let Te=oe.update(E),Ie=E.material;Ie.visible&&x.push(E,Te,Ie,$,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||z.intersectsObject(E))){let Te=oe.update(E),Ie=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ue.copy(Te.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(Ie)){let Ue=Te.groups;for(let Fe=0,Oe=Ue.length;Fe<Oe;Fe++){let ze=Ue[Fe],bt=Ie[ze.materialIndex];bt&&bt.visible&&x.push(E,Te,bt,$,ue.z,ze)}}else Ie.visible&&x.push(E,Te,Ie,$,ue.z,null)}}let ve=E.children;for(let Te=0,Ie=ve.length;Te<Ie;Te++)ci(ve[Te],H,$,K)}function Fg(E,H,$,K){let Y=E.opaque,ve=E.transmissive,Te=E.transparent;p.setupLightsView($),J===!0&&he.setGlobalState(_.clippingPlanes,$),ve.length>0&&gS(Y,ve,H,$),K&&ae.viewport(T.copy(K)),Y.length>0&&nl(Y,H,$),ve.length>0&&nl(ve,H,$),Te.length>0&&nl(Te,H,$),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function gS(E,H,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let ve=_e.isWebGL2;te===null&&(te=new Fi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Da:_r,minFilter:La,samples:ve?4:0})),_.getDrawingBufferSize(le),ve?te.setSize(le.x,le.y):te.setSize(zl(le.x),zl(le.y));let Te=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(Z),b=_.getClearAlpha(),b<1&&_.setClearColor(16777215,.5),_.clear();let Ie=_.toneMapping;_.toneMapping=yr,nl(E,$,K),A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te);let Ue=!1;for(let Fe=0,Oe=H.length;Fe<Oe;Fe++){let ze=H[Fe],bt=ze.object,Tn=ze.geometry,Ot=ze.material,Pi=ze.group;if(Ot.side===Kn&&bt.layers.test(K.layers)){let gt=Ot.side;Ot.side=Kt,Ot.needsUpdate=!0,Vg(bt,$,K,Tn,Ot,Pi),Ot.side=gt,Ot.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te)),_.setRenderTarget(Te),_.setClearColor(Z,b),_.toneMapping=Ie}function nl(E,H,$){let K=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,ve=E.length;Y<ve;Y++){let Te=E[Y],Ie=Te.object,Ue=Te.geometry,Fe=K===null?Te.material:K,Oe=Te.group;Ie.layers.test($.layers)&&Vg(Ie,H,$,Ue,Fe,Oe)}}function Vg(E,H,$,K,Y,ve){E.onBeforeRender(_,H,$,K,Y,ve),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(_,H,$,K,E,ve),Y.transparent===!0&&Y.side===Kn&&Y.forceSinglePass===!1?(Y.side=Kt,Y.needsUpdate=!0,_.renderBufferDirect($,H,K,Y,E,ve),Y.side=yn,Y.needsUpdate=!0,_.renderBufferDirect($,H,K,Y,E,ve),Y.side=Kn):_.renderBufferDirect($,H,K,Y,E,ve),E.onAfterRender(_,H,$,K,Y,ve)}function il(E,H,$){H.isScene!==!0&&(H=ye);let K=Le.get(E),Y=p.state.lights,ve=p.state.shadowsArray,Te=Y.state.version,Ie=Ee.getParameters(E,Y.state,ve,H,$),Ue=Ee.getProgramCacheKey(Ie),Fe=K.programs;K.environment=E.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(E.isMeshStandardMaterial?q:S).get(E.envMap||K.environment),Fe===void 0&&(E.addEventListener("dispose",xe),Fe=new Map,K.programs=Fe);let Oe=Fe.get(Ue);if(Oe!==void 0){if(K.currentProgram===Oe&&K.lightsStateVersion===Te)return Gg(E,Ie),Oe}else Ie.uniforms=Ee.getUniforms(E),E.onBuild($,Ie,_),E.onBeforeCompile(Ie,_),Oe=Ee.acquireProgram(Ie,Ue),Fe.set(Ue,Oe),K.uniforms=Ie.uniforms;let ze=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=he.uniform),Gg(E,Ie),K.needsLights=_S(E),K.lightsStateVersion=Te,K.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Oe,K.uniformsList=null,Oe}function Hg(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=yo.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Gg(E,H){let $=Le.get(E);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function xS(E,H,$,K,Y){H.isScene!==!0&&(H=ye),A.resetTextureUnits();let ve=H.fog,Te=K.isMeshStandardMaterial?H.environment:null,Ie=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bi,Ue=(K.isMeshStandardMaterial?q:S).get(K.envMap||Te),Fe=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Oe=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!$.morphAttributes.position,bt=!!$.morphAttributes.normal,Tn=!!$.morphAttributes.color,Ot=yr;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ot=_.toneMapping);let Pi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=Pi!==void 0?Pi.length:0,Ge=Le.get(K),Ju=p.state.lights;if(J===!0&&(ie===!0||E!==w)){let On=E===w&&K.id===D;he.setState(K,E,On)}let yt=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ju.state.version||Ge.outputColorSpace!==Ie||Y.isBatchedMesh&&Ge.batching===!1||!Y.isBatchedMesh&&Ge.batching===!0||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Y.isInstancedMesh&&Ge.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ge.instancingColor===!1&&Y.instanceColor!==null||Ge.envMap!==Ue||K.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==he.numPlanes||Ge.numIntersection!==he.numIntersection)||Ge.vertexAlphas!==Fe||Ge.vertexTangents!==Oe||Ge.morphTargets!==ze||Ge.morphNormals!==bt||Ge.morphColors!==Tn||Ge.toneMapping!==Ot||_e.isWebGL2===!0&&Ge.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,Ge.__version=K.version);let Jr=Ge.currentProgram;yt===!0&&(Jr=il(K,H,Y));let Wg=!1,Ma=!1,Ku=!1,Yt=Jr.getUniforms(),Kr=Ge.uniforms;if(ae.useProgram(Jr.program)&&(Wg=!0,Ma=!0,Ku=!0),K.id!==D&&(D=K.id,Ma=!0),Wg||w!==E){Yt.setValue(W,"projectionMatrix",E.projectionMatrix),Yt.setValue(W,"viewMatrix",E.matrixWorldInverse);let On=Yt.map.cameraPosition;On!==void 0&&On.setValue(W,ue.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&Yt.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Yt.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ma=!0,Ku=!0)}if(Y.isSkinnedMesh){Yt.setOptional(W,Y,"bindMatrix"),Yt.setOptional(W,Y,"bindMatrixInverse");let On=Y.skeleton;On&&(_e.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),Yt.setValue(W,"boneTexture",On.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Yt.setOptional(W,Y,"batchingTexture"),Yt.setValue(W,"batchingTexture",Y._matricesTexture,A));let Zu=$.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0&&_e.isWebGL2===!0)&&Ce.update(Y,$,Jr),(Ma||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,Yt.setValue(W,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Kr.envMap.value=Ue,Kr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ma&&(Yt.setValue(W,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&yS(Kr,Ku),ve&&K.fog===!0&&me.refreshFogUniforms(Kr,ve),me.refreshMaterialUniforms(Kr,K,O,U,te),yo.upload(W,Hg(Ge),Kr,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(yo.upload(W,Hg(Ge),Kr,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Yt.setValue(W,"center",Y.center),Yt.setValue(W,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(W,"normalMatrix",Y.normalMatrix),Yt.setValue(W,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let On=K.uniformsGroups;for(let Qu=0,vS=On.length;Qu<vS;Qu++)if(_e.isWebGL2){let Xg=On[Qu];Qe.update(Xg,Jr),Qe.bind(Xg,Jr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jr}function yS(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function _S(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,H,$){Le.get(E.texture).__webglTexture=H,Le.get(E.depthTexture).__webglTexture=$;let K=Le.get(E);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){let $=Le.get(E);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,$=0){I=E,C=H,R=$;let K=!0,Y=null,ve=!1,Te=!1;if(E){let Ue=Le.get(E);Ue.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(W.FRAMEBUFFER,null),K=!1):Ue.__webglFramebuffer===void 0?A.setupRenderTarget(E):Ue.__hasExternalTextures&&A.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);let Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);let Oe=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?Y=Oe[H][$]:Y=Oe[H],ve=!0):_e.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?Y=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[$]:Y=Oe,T.copy(E.viewport),k.copy(E.scissor),X=E.scissorTest}else T.copy(j).multiplyScalar(O).floor(),k.copy(L).multiplyScalar(O).floor(),X=V;if(ae.bindFramebuffer(W.FRAMEBUFFER,Y)&&_e.drawBuffers&&K&&ae.drawBuffers(E,Y),ae.viewport(T),ae.scissor(k),ae.setScissorTest(X),ve){let Ue=Le.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ue.__webglTexture,$)}else if(Te){let Ue=Le.get(E.texture),Fe=H||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,Fe)}D=-1},this.readRenderTargetPixels=function(E,H,$,K,Y,ve,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){ae.bindFramebuffer(W.FRAMEBUFFER,Ie);try{let Ue=E.texture,Fe=Ue.format,Oe=Ue.type;if(Fe!==Qn&&be.convert(Fe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ze=Oe===Da&&(de.has("EXT_color_buffer_half_float")||_e.isWebGL2&&de.has("EXT_color_buffer_float"));if(Oe!==_r&&be.convert(Oe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===gr&&(_e.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-K&&$>=0&&$<=E.height-Y&&W.readPixels(H,$,K,Y,be.convert(Fe),be.convert(Oe),ve)}finally{let Ue=I!==null?Le.get(I).__webglFramebuffer:null;ae.bindFramebuffer(W.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(E,H,$=0){let K=Math.pow(2,-$),Y=Math.floor(H.image.width*K),ve=Math.floor(H.image.height*K);A.setTexture2D(H,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,E.x,E.y,Y,ve),ae.unbindTexture()},this.copyTextureToTexture=function(E,H,$,K=0){let Y=H.image.width,ve=H.image.height,Te=be.convert($.format),Ie=be.convert($.type);A.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,E.x,E.y,Y,ve,Te,Ie,H.image.data):H.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Te,H.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,K,E.x,E.y,Te,Ie,H.image),K===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,H,$,K,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ve=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,Ue=be.convert(K.format),Fe=be.convert(K.type),Oe;if(K.isData3DTexture)A.setTexture3D(K,0),Oe=W.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Oe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);let ze=W.getParameter(W.UNPACK_ROW_LENGTH),bt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Tn=W.getParameter(W.UNPACK_SKIP_PIXELS),Ot=W.getParameter(W.UNPACK_SKIP_ROWS),Pi=W.getParameter(W.UNPACK_SKIP_IMAGES),gt=$.isCompressedTexture?$.mipmaps[Y]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,gt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,gt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,E.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,E.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,E.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Oe,Y,H.x,H.y,H.z,ve,Te,Ie,Ue,Fe,gt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Oe,Y,H.x,H.y,H.z,ve,Te,Ie,Ue,gt.data)):W.texSubImage3D(Oe,Y,H.x,H.y,H.z,ve,Te,Ie,Ue,Fe,gt),W.pixelStorei(W.UNPACK_ROW_LENGTH,ze),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Tn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ot),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Pi),Y===0&&K.generateMipmaps&&W.generateMipmap(Oe),ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){C=0,R=0,I=null,ae.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vf?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===nh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?cs:I0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cs?Gt:Bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ef=class extends za{};ef.prototype.isWebGL1Renderer=!0;var Jl=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Gi=class extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},p0=new F,m0=new F,g0=new At,Rd=new Na,Tl=new wo,tf=class extends un{constructor(e=new dn,t=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)p0.fromBufferAttribute(t,r-1),m0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=p0.distanceTo(m0);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=s,e.ray.intersectsSphere(Tl)===!1)return;g0.copy(r).invert(),Rd.copy(e.ray).applyMatrix4(g0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new F,h=new F,u=new F,d=new F,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=m,M=v-1;_<M;_+=f){let C=g.getX(_),R=g.getX(_+1);if(l.fromBufferAttribute(p,C),h.fromBufferAttribute(p,R),Rd.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=m,M=v-1;_<M;_+=f){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),Rd.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},x0=new F,y0=new F,wr=class extends tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)x0.fromBufferAttribute(t,r),y0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+x0.distanceTo(y0);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Al=new F,Cl=new F,Pd=new F,Rl=new ss,ls=class extends dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(go*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:p,c:m}=Rl;if(x.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Rl.getNormal(Pd),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let _=(v+1)%3,M=u[v],C=u[_],R=Rl[h[v]],I=Rl[h[_]],D=`${M}_${C}`,w=`${C}_${M}`;w in d&&d[w]?(Pd.dot(d[w].normal)<=s&&(f.push(R.x,R.y,R.z),f.push(I.x,I.y,I.z)),d[w]=null):D in d||(d[D]={index0:l[v],index1:l[_],normal:Pd.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:p}=d[g];Al.fromBufferAttribute(a,x),Cl.fromBufferAttribute(a,p),f.push(Al.x,Al.y,Al.z),f.push(Cl.x,Cl.y,Cl.z)}this.setAttribute("position",new hn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Kl=class extends Hi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Sr=class extends Hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L0,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Pl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function EC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ao=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nf=class extends Ao{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mx,endingEnd:Mx}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ex:s=e,a=2*t-i;break;case Tx:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ex:o=e,c=2*i-t;break;case Tx:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+v*o[l+C]+_*o[c+C]+M*o[u+C];return s}},rf=class extends Ao{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},sf=class extends Ao{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pl(t,this.TimeBufferType),this.values=Pl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pl(e.times,Array),values:Pl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ll:t=this.InterpolantFactoryMethodDiscrete;break;case Dl:t=this.InterpolantFactoryMethodLinear;break;case od:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ll;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return od}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&EC(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===od,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Dl;var hs=class extends ni{};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ll;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var of=class extends ni{};of.prototype.ValueTypeName="color";var af=class extends ni{};af.prototype.ValueTypeName="number";var cf=class extends Ao{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)br.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ba=class extends ni{InterpolantFactoryMethodLinear(e){return new cf(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.DefaultInterpolation=Dl;Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends ni{};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ll;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var lf=class extends ni{};lf.prototype.ValueTypeName="vector";var hf=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},TC=new hf,uf=class{constructor(e){this.manager=e!==void 0?e:TC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};uf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zl=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Id=new At,_0=new F,v0=new F,df=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_0.setFromMatrixPosition(e.matrixWorld),t.position.copy(_0),v0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(v0),t.updateMatrixWorld(),Id.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ff=class extends df{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fa=class extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new ff}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ql=class extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sf="\\[\\]\\.:\\/",AC=new RegExp("["+Sf+"]","g"),Mf="[^"+Sf+"]",CC="[^"+Sf.replace("\\.","")+"]",RC=/((?:WC+[\/:])*)/.source.replace("WC",Mf),PC=/(WCOD+)?/.source.replace("WCOD",CC),IC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mf),LC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mf),DC=new RegExp("^"+RC+PC+IC+LC+"$"),UC=["material","materials","bones","map"],pf=class{constructor(e,t,i){let r=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(AC,"")}static parseTrackName(e){let t=DC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);UC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=pf;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VD=new Float32Array(1);var eh=class{constructor(e,t,i=0,r=1/0){this.ray=new Na(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return mf(e,this,i,t),i.sort(b0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mf(e[r],this,i,t);return i.sort(b0),i}};function b0(n,e){return n.distance-e.distance}function mf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)mf(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);var Qt=document.getElementById("c"),_t={w:1,h:1,x:0,y:0},Wi=new za({canvas:Qt,antialias:!0});Wi.setPixelRatio(Math.min(devicePixelRatio,2));Wi.shadowMap.enabled=!0;Wi.shadowMap.type=xf;Wi.localClippingEnabled=!0;var Pt=new Jl;Pt.background=new ke("#7aa0c4");var NC=Math.atan(1/Math.SQRT2),Ye={azim:Math.PI/4,elev:NC,zoom:80,target:new F(30,15,23)},tt={azim:Ye.azim,elev:Ye.elev,zoom:Ye.zoom,target:Ye.target.clone()},X0=900,rh=2e3,$e=new To(-1,1,1,-1,.1,4e3),q0={uGround:{value:1}},Ef=new Tt(new Eo(2,2),new ti({uniforms:q0,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));Ef.frustumCulled=!1;Ef.renderOrder=-1e9;Pt.add(Ef);function Y0(){q0.uGround.value=Math.max(0,Math.min(1,(Ye.elev+.05)/.1))}Pt.add(new Ql(16777215,.62));var Pn=new Fa(16777215,.78);Pn.castShadow=!0;Pn.shadow.mapSize.set(4096,4096);Pn.shadow.normalBias=.15;Pn.shadow.bias=-2e-4;Pt.add(Pn);Pt.add(Pn.target);var $0=new Fa(16777215,.16);$0.position.set(-6,5,-7);Pt.add($0);var Va={tail:0},ui=()=>{Va.tail=30},Tf=new F,sh=new F,W0=new Map;function Po(n){let e=W0.get(n);return e||(e=new ke().setHex(n),W0.set(n,e)),e}var Af=new Sr({vertexColors:!0,side:yn}),Cf=new Sr({vertexColors:!0,transparent:!0,opacity:.55,side:yn,depthWrite:!1});Cf.shadowSide=Kn;var j0=new So({colorWrite:!1,side:yn}),fs=new Tt(new Eo(8e3,8e3),new Kl({opacity:.32}));fs.rotation.x=-Math.PI/2;fs.position.y=-.1;fs.receiveShadow=!0;fs.renderOrder=-1;Pt.add(fs);var di=new zi;Pt.add(di);var Xi=new zi;Pt.add(Xi);var In=new wr(new ls(new hi(1,1,1)),new Gi({color:10994876,depthTest:!1}));In.visible=!1;In.renderOrder=999;Pt.add(In);var ps=new wr(new dn,new Gi({vertexColors:!0,transparent:!0,depthTest:!1}));ps.renderOrder=998;ps.visible=!1;Pt.add(ps);var _n=new eh,fi=new Ke,Mr=new F,Ha=new F;var ms=(n,e,t)=>n+65536+(e+65536)*131072+(t+65536)*131072*131072,pi=(n,e)=>({x:n.x+e.x,y:n.y+e.y,z:n.z+e.z});function at(n,e){let{x:t,y:i,z:r}=n;switch(e&3){case 1:return{x:-r,y:i,z:t};case 2:return{x:-t,y:i,z:-r};case 3:return{x:r,y:i,z:-t};default:return{x:t,y:i,z:r}}}var qi=(n,e)=>({rot:n.rot+e.rot&3,off:pi(at(e.off,n.rot),n.off)}),Rf=n=>{let e=4-(n.rot&3)&3,t=at(n.off,e);return{rot:e,off:{x:-t.x,y:-t.y,z:-t.z}}},Pf=n=>n.slice(1).reduce((e,t)=>qi(e,{off:t.pos,rot:t.rot}),{off:{x:0,y:0,z:0},rot:0}),Yi=n=>"#"+(n&16777215).toString(16).padStart(6,"0"),Er=n=>n<0?-Math.round(-n):Math.round(n),OC=Math.floor(Math.random()*4294967296).toString(36),If=1,oh=()=>`n${If++}.${OC}`,ah=()=>If,ch=n=>{If=n};var pt=(n,e,t,i,r,s,o)=>({x0:n,y0:e,z0:t,x1:i,y1:r,z1:s,c:o}),Ga=(n,e,t,i)=>e>=n.x0&&e<n.x1&&t>=n.y0&&t<n.y1&&i>=n.z0&&i<n.z1,Wa=(n,e,t,i)=>({x0:n.x0+e,y0:n.y0+t,z0:n.z0+i,x1:n.x1+e,y1:n.y1+t,z1:n.z1+i,c:n.c});function kC(n,e,t){let i=Math.max(n.x0,e.x0),r=Math.max(n.y0,e.y0),s=Math.max(n.z0,e.z0),o=Math.min(n.x1,e.x1),a=Math.min(n.y1,e.y1),c=Math.min(n.z1,e.z1);if(i>=o||r>=a||s>=c){t.push(n);return}let l=n.c;n.x0<i&&t.push({...n,x1:i}),o<n.x1&&t.push({...n,x0:o}),n.y0<r&&t.push({x0:i,y0:n.y0,z0:n.z0,x1:o,y1:r,z1:n.z1,c:l}),a<n.y1&&t.push({x0:i,y0:a,z0:n.z0,x1:o,y1:n.y1,z1:n.z1,c:l}),n.z0<s&&t.push({x0:i,y0:r,z0:n.z0,x1:o,y1:a,z1:s,c:l}),c<n.z1&&t.push({x0:i,y0:r,z0:c,x1:o,y1:a,z1:n.z1,c:l})}function gs(n,e){let t=[];for(let i of n)kC(i,e,t);return t}function zC(n,e){for(let t=0;t<n.length;){let i=n[t];if(i.c!==e.c){t++;continue}let r=i.y0===e.y0&&i.y1===e.y1,s=i.z0===e.z0&&i.z1===e.z1,o=i.x0===e.x0&&i.x1===e.x1;if(r&&s&&(i.x1===e.x0||e.x1===i.x0))e.x0=Math.min(e.x0,i.x0),e.x1=Math.max(e.x1,i.x1);else if(o&&s&&(i.y1===e.y0||e.y1===i.y0))e.y0=Math.min(e.y0,i.y0),e.y1=Math.max(e.y1,i.y1);else if(o&&r&&(i.z1===e.z0||e.z1===i.z0))e.z0=Math.min(e.z0,i.z0),e.z1=Math.max(e.z1,i.z1);else{t++;continue}n.splice(t,1),t=0}n.push(e)}function Lf(n,e,t){let i=gs(n,e);return zC(i,{...e,c:t}),i}function J0(n,e,t,i,r){let s=-1;for(let h=0;h<n.length;h++)if(Ga(n[h],e,t,i)){s=h;break}if(s===-1)return null;let o=n[s].c;if(o===r)return null;let a=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,f=h.y0<u.y1&&u.y0<h.y1,g=h.z0<u.z1&&u.z0<h.z1;return f&&g&&(h.x1===u.x0||u.x1===h.x0)||d&&g&&(h.y1===u.y0||u.y1===h.y0)||d&&f&&(h.z1===u.z0||u.z1===h.z0)},c=new Set([s]),l=[s];for(;l.length;){let h=n[l.pop()];for(let u=0;u<n.length;u++)!c.has(u)&&n[u].c===o&&a(h,n[u])&&(c.add(u),l.push(u))}return n.map((h,u)=>c.has(u)?{...h,c:r}:h)}function Df(n,e){let t=[];for(let i of n){let r=Math.max(i.x0,e.x0),s=Math.max(i.y0,e.y0),o=Math.max(i.z0,e.z0),a=Math.min(i.x1,e.x1),c=Math.min(i.y1,e.y1),l=Math.min(i.z1,e.z1);r<a&&s<c&&o<l&&t.push({x0:r,y0:s,z0:o,x1:a,y1:c,z1:l,c:i.c})}return t}function K0(n,e){for(let t of n){let i=(t.x1-t.x0)*(t.y1-t.y0)*(t.z1-t.z0);e.set(t.c,(e.get(t.c)||0)+i)}}function pn(n,e){for(let t of n)t.x0<e.min.x&&(e.min.x=t.x0),t.y0<e.min.y&&(e.min.y=t.y0),t.z0<e.min.z&&(e.min.z=t.z0),t.x1>e.max.x&&(e.max.x=t.x1),t.y1>e.max.y&&(e.max.y=t.y1),t.z1>e.max.z&&(e.max.z=t.z1)}function mi(n,e,t){let i=at({x:n.x0,y:n.y0,z:n.z0},e),r=at({x:n.x1-1,y:n.y1-1,z:n.z1-1},e);return{x0:Math.min(i.x,r.x)+t.x,y0:Math.min(i.y,r.y)+t.y,z0:Math.min(i.z,r.z)+t.z,x1:Math.max(i.x,r.x)+t.x+1,y1:Math.max(i.y,r.y)+t.y+1,z1:Math.max(i.z,r.z)+t.z+1,c:n.c}}var BC=16,fn=n=>Math.floor(n/BC);function Z0(n){if(!n.length)return()=>!1;let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let x of n)x.x0<e&&(e=x.x0),x.y0<t&&(t=x.y0),x.z0<i&&(i=x.z0),x.x1>r&&(r=x.x1),x.y1>s&&(s=x.y1),x.z1>o&&(o=x.z1);let a=fn(e),c=fn(t),l=fn(i),h=fn(r-1)-a+1,u=fn(s-1)-c+1,d=fn(o-1)-l+1,f=Array.from({length:h*u*d},()=>[]),g=(x,p,m)=>((x-a)*u+(p-c))*d+(m-l);for(let x of n)for(let p=fn(x.x0);p<=fn(x.x1-1);p++)for(let m=fn(x.y0);m<=fn(x.y1-1);m++)for(let v=fn(x.z0);v<=fn(x.z1-1);v++)f[g(p,m,v)].push(x);return(x,p,m)=>{let v=fn(x),_=fn(p),M=fn(m);if(v<a||_<c||M<l||v-a>=h||_-c>=u||M-l>=d)return!1;for(let C of f[g(v,_,M)])if(Ga(C,x,p,m))return!0;return!1}}var Q0=(n,e,t,i)=>n.some(r=>Ga(r,e,t,i));function Uf(n,e,t,i,r){if(!n.length||!e.length)return!1;let s={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};pn(n,s);let o=s.min.x+t,a=s.min.y+i,c=s.min.z+r,l=s.max.x+t,h=s.max.y+i,u=s.max.z+r;for(let d of e)if(o<d.x1&&d.x0<l&&a<d.y1&&d.y0<h&&c<d.z1&&d.z0<u&&n.some(f=>f.x0+t<d.x1&&d.x0<f.x1+t&&f.y0+i<d.y1&&d.y0<f.y1+i&&f.z0+r<d.z1&&d.z0<f.z1+r))return!0;return!1}var FC=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],ny=3,Xa=2,Tr=ny*Xa,ey=.5,qa=class{a=new Float32Array(4096);n=0;push3(e,t,i){if(this.n+3>this.a.length){let r=new Float32Array(this.a.length*2);r.set(this.a),this.a=r}this.a[this.n++]=e,this.a[this.n++]=t,this.a[this.n++]=i}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}};function ty(n,e,t,i,r,s){let o=2*Xa+1;for(let a=0;a<t;a++){let c=a*r,l=0;for(let h=0;h<=Xa&&h<i;h++)l+=n[c+h*s];for(let h=0;h<i;h++){e[c+h*s]=l/o;let u=h+Xa+1,d=h-Xa;u<i&&(l+=n[c+u*s]),d>=0&&(l-=n[c+d*s])}}}function lh(n,e,t){let i=new qa,r=new qa,s=new qa,o=n.map(v=>[v.x0,v.y0,v.z0]),a=n.map(v=>[v.x1,v.y1,v.z1]),c=[0,1,2].map(()=>new Map),l=[0,1,2].map(()=>new Map),h=(v,_,M)=>{let C=v.get(_);C?C.push(M):v.set(_,[M])};for(let v=0;v<n.length;v++)for(let _=0;_<3;_++)h(c[_],o[v][_],v),h(l[_],a[v][_],v);let u=[],d=16,f=v=>Math.floor(v/d),g=[],x=[0,0,0],p=[0,0,0];if(t&&n.length){let v=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let M=0;M<n.length;M++)for(let C=0;C<3;C++)o[M][C]<v[C]&&(v[C]=o[M][C]),a[M][C]>_[C]&&(_[C]=a[M][C]);p=v.map(f),x=_.map((M,C)=>f(M-1)-p[C]+1),g=Array.from({length:x[0]*x[1]*x[2]},()=>[]);for(let M=0;M<n.length;M++)for(let C=f(o[M][0]);C<=f(a[M][0]-1);C++)for(let R=f(o[M][1]);R<=f(a[M][1]-1);R++)for(let I=f(o[M][2]);I<=f(a[M][2]-1);I++)g[((C-p[0])*x[1]+(R-p[1]))*x[2]+(I-p[2])].push(M)}for(let v=0;v<n.length;v++){let _=e(n[v].c),M=_.r,C=_.g,R=_.b,I=o[v],D=a[v];for(let w of FC){let{a:T,u:k,v:X}=w,Z=w.hi?D[T]:I[T],b=w.hi?Z:Z-1,P=[];for(let te of(w.hi?c:l)[T].get(Z)??u){let ce=Math.max(o[te][k],I[k]),le=Math.min(a[te][k],D[k]),ue=Math.max(o[te][X],I[X]),ye=Math.min(a[te][X],D[X]);ce<le&&ue<ye&&P.push([ce,ue,le,ye])}let U=[[I[k],I[X],D[k],D[X]]];for(let te of P){let ce=[];for(let le of U){let ue=Math.max(le[0],te[0]),ye=Math.max(le[1],te[1]),we=Math.min(le[2],te[2]),W=Math.min(le[3],te[3]);if(ue>=we||ye>=W){ce.push(le);continue}le[0]<ue&&ce.push([le[0],le[1],ue,le[3]]),we<le[2]&&ce.push([we,le[1],le[2],le[3]]),le[1]<ye&&ce.push([ue,le[1],we,ye]),W<le[3]&&ce.push([ue,W,we,le[3]])}if(U=ce,!U.length)break}let O=[0,0,0];O[T]=Z;let B=null,G=0,j=0,L=0,V=()=>{G=I[k]-Tr,j=I[X]-Tr;let te=D[k]-I[k]+2*Tr+1;L=D[X]-I[X]+2*Tr+1;let ce=new Float32Array(te*L),le=f(b)-p[T],ue=!1;if(le>=0&&le<x[T]){let we=[0,0,0];we[T]=le;let W=Math.min(f(G+te-1)-p[k],x[k]-1),it=Math.min(f(j+L-1)-p[X],x[X]-1);for(let de=Math.max(f(G)-p[k],0);de<=W;de++){we[k]=de;for(let _e=Math.max(f(j)-p[X],0);_e<=it;_e++){we[X]=_e;for(let ae of g[(we[0]*x[1]+we[1])*x[2]+we[2]]){if(o[ae][T]>b||a[ae][T]<=b)continue;let et=Math.max(o[ae][k],G),Le=Math.min(a[ae][k],G+te),A=Math.max(o[ae][X],j),S=Math.min(a[ae][X],j+L);for(let q=et;q<Le;q++)ce.fill(1,(q-G)*L+(A-j),(q-G)*L+(S-j));ue=ue||et<Le&&A<S}}}}if(!ue)return B=ce;let ye=new Float32Array(te*L);for(let we=0;we<ny;we++)ty(ce,ye,te,L,L,1),ty(ye,ce,L,te,1,L);return B=ce},z=(te,ce)=>{if(!t)return 1;let ue=(B??V())[(te-G)*L+(ce-j)];return ey+(1-ey)*(1-ue)},J=(te,ce,le)=>{O[k]=te,O[X]=ce,i.push3(O[0],O[1],O[2]),r.push3(w.n[0],w.n[1],w.n[2]),s.push3(M*le,C*le,R*le)},ie=(te,ce,le,ue)=>{let ye=z(te,ce),we=z(le,ce),W=z(le,ue),it=z(te,ue);J(te,ce,ye),J(le,ce,we),J(le,ue,W),J(te,ce,ye),J(le,ue,W),J(te,ue,it)};for(let te of U){let[ce,le,ue,ye]=te;if(!t){ie(ce,le,ue,ye);continue}let we=ce+Tr,W=ue-Tr,it=le+Tr,de=ye-Tr;if(we>=W||it>=de){for(let _e=ce;_e<ue;_e++)for(let ae=le;ae<ye;ae++)ie(_e,ae,_e+1,ae+1);continue}for(let _e=ce;_e<ue;_e++){for(let ae=le;ae<it;ae++)ie(_e,ae,_e+1,ae+1);for(let ae=de;ae<ye;ae++)ie(_e,ae,_e+1,ae+1)}for(let _e=it;_e<de;_e++){for(let ae=ce;ae<we;ae++)ie(ae,_e,ae+1,_e+1);for(let ae=W;ae<ue;ae++)ie(ae,_e,ae+1,_e+1)}ie(we,it,W,de)}}}if(!i.length)return null;let m=new dn;return m.setAttribute("position",new Zt(i.trimmed(),3)),m.setAttribute("normal",new Zt(r.trimmed(),3)),m.setAttribute("color",new Zt(s.trimmed(),3)),m}var hh=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],iy={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},Ya=()=>({type:"object",id:oh(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),xs=(n="")=>({type:"scene",id:oh(),name:n,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function Ar(n){let e={id:oh(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...e,boxes:n.boxes.map(t=>({...t}))}:{type:"scene",...e,children:n.children.map(Ar)}}var $i=n=>y.context.children.find(e=>e.id===n);function gi(n,e=y.root,t=[]){if(t.push(e),e===n)return t.slice();if(e.type==="scene")for(let i of e.children){let r=gi(n,i,t);if(r)return r}return t.pop(),null}function ys(n,e=y.root){if(e.id===n)return e;if(e.type==="scene")for(let t of e.children){let i=ys(n,t);if(i)return i}return null}function Fn(n){let e=gi(n);return e&&e.length>1?e[e.length-2]:null}function _s(n,e){return n===e?!0:n.type!=="scene"?!1:n.children.some(t=>_s(t,e))}var Io=()=>Pf(y.path),Lo=n=>Pf(gi(n)||[y.root]),en=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),Cr=n=>n.max.x<n.min.x;function $a(n,e,t,i){if(n.type==="object")for(let r of n.boxes)i.push(mi(r,t,e));else for(let r of n.children)$a(r,pi(e,at(r.pos,t)),t+r.rot&3,i);return i}function Rr(n,e,t,i){if(n.type==="object")pn(n.boxes.map(r=>mi(r,t,e)),i);else for(let r of n.children)Rr(r,pi(e,at(r.pos,t)),t+r.rot&3,i);return i}function Nf(n,e,t){t.length=0;let i=Math.max(1,Math.ceil((e-n)/6));for(let r=0;r<=i;r++)t.push(n+(e-n)*r/i)}var Of=(n,e)=>Math.max(1,Math.ceil((e-n)/6))+1,sy=n=>Of(n.x0,n.x1)*Of(n.y0,n.y1)*Of(n.z0,n.z1);function vs(n,e,t,i){if(sy(n)<=1536){t.push(n),i.push(e);return}let r=n.x1-n.x0,s=n.y1-n.y0,o=n.z1-n.z0;if(r>=s&&r>=o){let a=n.x0+(r>>1);vs({...n,x1:a},e,t,i),vs({...n,x0:a},e,t,i)}else if(s>=o){let a=n.y0+(s>>1);vs({...n,y1:a},e,t,i),vs({...n,y0:a},e,t,i)}else{let a=n.z0+(o>>1);vs({...n,z1:a},e,t,i),vs({...n,z0:a},e,t,i)}}function VC(n,e,t,i){for(let r=0;r<n.length;r++){let s=n[r];if(s[0]<=e&&s[1]<=t&&s[2]<=i)return}for(let r=n.length-1;r>=0;r--){let s=n[r];e<=s[0]&&t<=s[1]&&i<=s[2]&&n.splice(r,1)}n.push([e,t,i])}function HC(n,e,t,i,r,s,o,a,c,l){let h=n.length,u=new Float64Array(h),d=new Float64Array(h),f=new Float64Array(h),g=new Float64Array(h),x=new Float64Array(h),p=new Float64Array(h),m=1/0,v=-1/0,_=1/0,M=-1/0,C=1/0,R=-1/0;for(let Z=0;Z<h;Z++){let b=n[Z];s.x>=0?(u[Z]=b.x0,d[Z]=b.x1):(u[Z]=b.x1,d[Z]=b.x0),s.y>=0?(f[Z]=b.y0,g[Z]=b.y1):(f[Z]=b.y1,g[Z]=b.y0),s.z>=0?(x[Z]=b.z0,p[Z]=b.z1):(x[Z]=b.z1,p[Z]=b.z0),b.x0<m&&(m=b.x0),b.x1>v&&(v=b.x1),b.y0<_&&(_=b.y0),b.y1>M&&(M=b.y1),b.z0<C&&(C=b.z0),b.z1>R&&(R=b.z1)}let I=s.x!==0?1/s.x:0,D=s.y!==0?1/s.y:0,w=s.z!==0?1/s.z:0,T=[],k=[],X=[];for(let Z=i;Z<r;Z++){let b=e[Z];if((s.x>0?v<=b.x0:s.x<0?m>=b.x1:v<=b.x0||m>=b.x1)||(s.y>0?M<=b.y0:s.y<0?_>=b.y1:M<=b.y0||_>=b.y1)||(s.z>0?R<=b.z0:s.z<0?C>=b.z1:R<=b.z0||C>=b.z1))continue;let P=t[Z];Nf(b.x0,b.x1,T),Nf(b.y0,b.y1,k),Nf(b.z0,b.z1,X);for(let U of T)for(let O of k)for(let B of X){let G=1/0;if(I!==0&&(G=((s.x>0?P.x1:P.x0)-U)*I),D!==0){let V=((s.y>0?P.y1:P.y0)-O)*D;V<G&&(G=V)}if(w!==0){let V=((s.z>0?P.z1:P.z0)-B)*w;V<G&&(G=V)}let j=1/0,L=!1;for(let V=0;V<h;V++){let z=-1/0,J=1/0;if(I===0){if(U<=u[V]||U>=d[V])continue}else{let ie=(u[V]-U)*I,te=(d[V]-U)*I;ie>z&&(z=ie),te<J&&(J=te)}if(D===0){if(O<=f[V]||O>=g[V])continue}else{let ie=(f[V]-O)*D,te=(g[V]-O)*D;ie>z&&(z=ie),te<J&&(J=te)}if(w===0){if(B<=x[V]||B>=p[V])continue}else{let ie=(x[V]-B)*w,te=(p[V]-B)*w;ie>z&&(z=ie),te<J&&(J=te)}if(!(z>=J)){if(z>G+.001)z<j&&(j=z);else if(J>G+.001){L=!0;break}}}L||j===1/0||VC(l,Math.floor((U+j*s.x)*o),Math.floor((O+j*s.y)*a),Math.floor((B+j*s.z)*c))}}}function ry(n,e){let t=[0],i=0;for(;i<n.length;){let s=n[i][e];do i++;while(i<n.length&&n[i][e]===s);t.push(i)}if(t.length<=48)return t;let r=new Set;for(let s=0;s<48;s++)r.add(t[Math.floor(s*(t.length-1)/47)]);return[...r]}function GC(n,e,t,i,r){let s={x:1/0,y:1/0,z:1/0};if(!n.length||!e.length)return s;e.sort((d,f)=>d[0]-f[0]||d[1]-f[1]||d[2]-f[2]);let o=[];e:for(let d of e){for(let f of o)if(f[1]<=d[1]&&f[2]<=d[2])continue e;o.push(d)}let a=n.map(d=>[Math.min(d.x0*t,d.x1*t),Math.max(d.x0*t,d.x1*t),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*r,d.z1*r),Math.max(d.z0*r,d.z1*r)]),c=(d,f,g)=>{let x=0;for(let p of a){let m=Math.min(p[1],d)-p[0];if(m<=0)continue;let v=Math.min(p[3],f)-p[2];if(v<=0)continue;let _=Math.min(p[5],g)-p[4];_>0&&(x+=m*v*_)}return x},l=o.slice().sort((d,f)=>f[0]-d[0]),h=-1,u={...s};for(let d of ry(l,0)){let f=d===0?1/0:l[d-1][0]-.01,g=l.slice(d).sort((p,m)=>m[2]-p[2]),x=new Array(g.length+1).fill(1/0);for(let p=g.length-1;p>=0;p--)x[p]=Math.min(x[p+1],g[p][1]);for(let p of ry(g,2)){let m=p===0?1/0:g[p-1][2]-.01,v=x[p]===1/0?1/0:x[p]-.01,_=c(f,v,m);_>h&&(h=_,u.x=f,u.y=v,u.z=m)}}return u}function oy(n,e,t,i,r,s){let o=[],a=[];for(let x of e)vs(x,x,o,a);let c=[],l=0,h=0;for(let x=0;x<o.length;x++)h+=sy(o[x]),(h>=1536||x===o.length-1)&&(c.push([l,x+1]),l=x+1,h=0);let u=[];for(let x=0;x<n.length;x++)for(let p=0;p<t.length;p++)for(let m=0;m<c.length;m++)u.push([x,p,m]);let d=n.map(()=>[]),f=0,g=null;return{step(x){for(;f<u.length;){let[p,m,v]=u[f++],[_,M]=c[v];if(HC(n[p],o,a,_,M,t[m],i,r,s,d[p]),f<u.length&&x())return!1}return!0},cuts(){return g??=n.map((x,p)=>GC(x,d[p],i,r,s)),g}}}function uh(n,e){fi.x=(n-_t.x)/_t.w*2-1,fi.y=-((e-_t.y)/_t.h)*2+1}var kf=()=>y.pickMeshes.length?(_n.setFromCamera(fi,$e),_n.intersectObjects(y.pickMeshes,!1)[0]??null):null;function zf(){let n=kf();return n?n.object.userData.childId??null:null}var ay=new Jt(new F(0,1,0),0);function ja(n){return _n.setFromCamera(fi,$e),ay.constant=-n,_n.ray.intersectPlane(ay,Mr)?{x:Math.floor(Mr.x),y:n,z:Math.floor(Mr.z)}:null}var hy=(n,e)=>({x:Math.floor(n.x-e.x*.5),y:Math.floor(n.y-e.y*.5),z:Math.floor(n.z-e.z*.5)}),WC=new F;function bs(){let n=kf();if(!n)return null;let e=y.editXform.off,t=at({x:n.point.x-e.x,y:n.point.y-e.y,z:n.point.z-e.z},-y.editXform.rot),i={x:0,y:1,z:0};if(n.face){let s=WC.copy(n.face.normal).transformDirection(n.object.matrixWorld);i=at({x:s.x,y:s.y,z:s.z},-y.editXform.rot)}let r=hy(t,i);return{cell:r,addCell:{x:r.x+Math.round(i.x),y:r.y+Math.round(i.y),z:r.z+Math.round(i.z)}}}function uy(){let n=kf();return n?hy(n.point,n.face?n.face.normal:{x:0,y:1,z:0}):ja(0)}function ws(n){let e=ja(n+y.editXform.off.y);if(!e)return null;let t=at({x:e.x-y.editXform.off.x,y:0,z:e.z-y.editXform.off.z},-y.editXform.rot);return{x:Math.round(t.x),y:n,z:Math.round(t.z)}}var cy=(n,e)=>({x:n===0?e:0,y:n===1?e:0,z:n===2?e:0}),ly=new Jt;function dy(n,e){let t=y.editXform.off,i=y.editXform.rot,r=at(cy(n,1),i),s=pi(at(cy(n,e),i),t);if(_n.setFromCamera(fi,$e),ly.setComponents(r.x,r.y,r.z,-(r.x*s.x+r.y*s.y+r.z*s.z)),!_n.ray.intersectPlane(ly,Mr))return null;let o=at({x:Mr.x-t.x,y:Mr.y-t.y,z:Mr.z-t.z},-i),a={x:Math.round(o.x),y:Math.round(o.y),z:Math.round(o.z)};return n===0?a.x=e:n===1?a.y=e:a.z=e,a}var ji=(n,e,t)=>{let i=at({x:n,y:e,z:t},y.editXform.rot);return new F(i.x+y.editXform.off.x,i.y+y.editXform.off.y,i.z+y.editXform.off.z)};function Bf(n=bs()){return y.tool==="add"?n?n.addCell:ws(0):n?n.cell:null}var XC=new ke(10994876),qC=new ke(6055805),YC=new ke(13619151),Ja=null,dh=[],Ff=()=>{Ja=null};function Pr(){xi=null,y.liveMeas=null,Ir()}function Vf(){if(Ja)return Ja;let n=[],e;y.editObject?(n.push(...y.editObject.boxes),e=ji):(Lr(y.root,{x:0,y:0,z:0},0,null,null,(a,c,l,h)=>{if(h)for(let u of a.boxes)n.push(mi(u,l,c))}),e=(a,c,l)=>new F(a,c,l));let t=en();pn(n,t);let i=n.length===0,r={x:t.min.x,y:t.min.y,z:t.min.z},s={x:t.max.x-1,y:t.max.y-1,z:t.max.z-1};return Ja={has:n.length>64?Z0(n):(a,c,l)=>Q0(n,a,c,l),mn:r,mx:s,toW:e,empty:i},Ja}function fy(){let n=Vf();if(n.empty)return null;let e=null;if(y.editObject){let t=bs();e=t?{...t.cell}:ws(0)}else e=uy();return e?{x:Math.max(n.mn.x,Math.min(n.mx.x,e.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,e.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,e.z))}:null}function $C(n){let e=Vf(),t=["x","y","z"],i=[];for(let r=0;r<3;r++){let s=t[r],o=t[(r+1)%3],a=t[(r+2)%3],c=e.mn[s],l=e.mx[s],h=[n.x,n.y,n.z],u=f=>(h[r]=f,e.has(h[0],h[1],h[2])),d=c;for(;d<=l;){let f=u(d),g=d;for(;g+1<=l&&u(g+1)===f;)g++;let x=p=>{let m={};return m[s]=p,m[o]=n[o]+.5,m[a]=n[a]+.5,e.toW(m.x,m.y,m.z)};i.push({a:x(d),b:x(g+1),mid:x((d+g+1)/2),len:g-d+1,filled:f}),d=g+1}}return i}function Hf(n,e,t,i,r,s,o,a,c=!1){let l=i-n,h=r-e,u=s-t,d=(f,g,x,p,m,v,_,M)=>({a:o(f,g,x),b:o(p,m,v),mid:o((f+p)/2,(g+m)/2,(x+v)/2),len:_,filled:!0,nolabel:!M,gray:c});return[d(n,e,t,i,e,t,l,l>=a),d(n,e,t,n,e,s,u,u>=a),d(n,e,t,n,r,t,h,h>=a),d(i,e,t,i,e,s,0,!1),d(n,e,s,i,e,s,0,!1),d(n,r,t,i,r,t,0,!1),d(n,r,t,n,r,s,0,!1),d(i,r,t,i,r,s,0,!1),d(n,r,s,i,r,s,0,!1),d(i,e,t,i,r,t,0,!1),d(n,e,s,n,r,s,0,!1),d(i,e,s,i,r,s,0,!1)]}var xi=null;function py(){let n=fy();n&&(xi=xi&&xi.x===n.x&&xi.y===n.y&&xi.z===n.z?null:n,fh())}function my(){xi&&(xi=null,fh())}function jC(n,e){let t=Vf();return Hf(Math.min(n.x,e.x),Math.min(n.y,e.y),Math.min(n.z,e.z),Math.max(n.x,e.x)+1,Math.max(n.y,e.y)+1,Math.max(n.z,e.z)+1,t.toW,1,!0)}function fh(){let n=fy();y.liveMeas=n?xi?jC(xi,n):$C(n):null,Ir()}function Ir(){let n=document.getElementById("measure");n.innerHTML="",dh=[];let e=[],t=[];if(y.liveMeas)for(let r of y.liveMeas){let s=r.gray?YC:r.filled?XC:qC;if(e.push(r.a.x,r.a.y,r.a.z,r.b.x,r.b.y,r.b.z),t.push(s.r,s.g,s.b,s.r,s.g,s.b),r.nolabel)continue;let o=document.createElement("div");o.className="mlab"+(r.filled?"":" empty"),o.textContent=String(r.len),n.appendChild(o),dh.push({el:o,w:r.mid})}ps.geometry.dispose();let i=new dn;i.setAttribute("position",new hn(e,3)),i.setAttribute("color",new hn(t,3)),ps.geometry=i,ps.visible=e.length>0}function gy(){if(dh.length)for(let n of dh){if(Ha.copy(n.w).project($e),Ha.z>1){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=(Ha.x*.5+.5)*_t.w+"px",n.el.style.top=(-Ha.y*.5+.5)*_t.h+"px"}}var Gf=new F(40,150,30).normalize();function JC(n){if(Cr(n))return;let e=(n.min.x+n.max.x)/2,t=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,r=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,s=r+130;Pn.position.set(e+Gf.x*s,t+Gf.y*s,i+Gf.z*s),Pn.target.position.set(e,t,i),Pn.target.updateMatrixWorld();let o=Pn.shadow.camera;o.left=-r,o.right=r,o.top=r,o.bottom=-r,o.near=Math.max(1,s-r-20),o.far=s+r+20,o.updateProjectionMatrix(),Pn.shadow.normalBias=4*r/Pn.shadow.mapSize.x}var ii=[];function KC(){let n=new Set;for(let e of ii){Pt.remove(e);let t=e.geometry;t&&!n.has(t)&&(t.dispose(),n.add(t))}ii=[];for(let e of qf)e.dispose();qf=[],Oo=[],Nr=null,Dr.vox=-1,ph=[],jf(),di.clear(),No&&(cancelAnimationFrame(No),No=0),Ln=null}var ph=[],Ln=null,No=0,Do=null;function jf(){Do&&(di.remove(Do),Do.geometry.dispose(),Do.material.dispose(),Do=null)}function Wf(n,e,{tier:t="opaque",childId:i}={}){if(!n.length)return null;let r=t!=="opaque",s=lh(n,e,!r);if(!s)return null;let o=new Tt(s,t==="temp"?Cf:Af);if(o.castShadow=!0,o.receiveShadow=!0,Pt.add(o),ii.push(o),r){o.renderOrder=2;let a=new Tt(s,j0);a.renderOrder=1,a.castShadow=!1,a.receiveShadow=!1,Pt.add(a),ii.push(a)}return i!=null&&(o.userData.childId=i,y.pickMeshes.push(o),(y.childMeshes[i]||(y.childMeshes[i]=[])).push(o)),o}var Oo=[],qf=[],Yf=[],Dr={q:-1,b:-1,vox:-1},ZC=6707534;function xy(n){let e=lh(n,Po,!0);if(!e)return;let t=[new Jt(new F(-1,0,0),1e9),new Jt(new F(0,-1,0),1e9),new Jt(new F(0,0,-1),1e9)],i=new Sr({vertexColors:!0,side:yn,clippingPlanes:t,clipShadows:!0}),r=new Tt(e,i);r.castShadow=r.receiveShadow=!0,Pt.add(r),ii.push(r);let s=new Sr({color:ZC,side:Kt,clippingPlanes:t}),o=new Tt(e,s);Pt.add(o),ii.push(o),qf.push(i,s);let a=en();pn(n,a),Oo.push({boxes:n,aabb:a,planes:t})}var QC=8,yy=6,Ur=[-90,-60,-30,0,30,60,90],Uo=Math.PI/180,eR=5,Nr=null;function tR(n,e){let t=n<=1?1:-1,i=n===0||n===3?1:-1,r=e>=3?1:-1,s=(c,l)=>{let h=Math.cos(l*Uo);return{x:h*Math.sin(c*Uo),y:Math.sin(l*Uo),z:h*Math.cos(c*Uo)}},o=[s(n*90,Ur[e]),s(n*90,Ur[e+1]),s(n*90+90,Ur[e]),s(n*90+90,Ur[e+1]),s(n*90+45,(Ur[e]+Ur[e+1])/2)],a=Yf;y.editObject&&(a=a.concat(y.editObject.boxes.map(c=>mi(c,y.editXform.rot,y.editXform.off)))),Nr={job:oy(Oo.map(c=>c.boxes),a,o,t,r,i),sgx:t,sgy:r,sgz:i}}function vy(){if(!Oo.length){Nr=null;return}let n=(Ye.azim/Uo%360+360)%360,e=Ye.elev/Uo,{q:t,b:i}=Dr,r=t*90+45;if((t<0||Math.abs(((n-r)%360+540)%360-180)>45+QC)&&(t=Math.min(3,Math.floor(n/90))),(i<0||e<Ur[i]-yy||e>Ur[i+1]+yy)&&(i=Math.max(0,Math.min(5,Math.floor((e+90)/30)))),(t!==Dr.q||i!==Dr.b||y.voxVer!==Dr.vox)&&(Dr.q=t,Dr.b=i,Dr.vox=y.voxVer,tR(t,i)),!Nr)return;let s=performance.now();if(!Nr.job.step(()=>performance.now()-s>eR)){ui();return}let{sgx:o,sgy:a,sgz:c}=Nr,l=Nr.job.cuts();Nr=null;for(let h=0;h<Oo.length;h++){let u=Oo[h],d=l[h],f=(g,x,p,m)=>Math.min(m,(g>0?p:-x)+4);u.planes[0].normal.set(-o,0,0),u.planes[0].constant=f(o,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-a,0),u.planes[1].constant=f(a,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-c),u.planes[2].constant=f(c,u.aabb.min.z,u.aabb.max.z,d.z)}ui()}function Lr(n,e,t,i,r,s){if(n===y.editObject||n.vis==="hidden")return;let o=r??(n.vis==="deemphasized"?n.id:null);if(n.type==="object")s(n,e,t,i,o);else for(let a of n.children)Lr(a,pi(e,at(a.pos,t)),t+a.rot&3,n===y.context?a.id:i,o,s)}var Xf=(n,e)=>{let t=n.get(e);return t||n.set(e,t=[]),t},_y=(n,e,t,i)=>{for(let r of n.boxes)i.push(mi(r,t,e));return i};function by(){let{off:n,rot:e}=y.editXform;if(di.position.set(n.x,n.y,n.z),di.rotation.set(0,-e*Math.PI/2,0),di.updateMatrixWorld(!0),Ln){di.remove(Ln),Ln.geometry.dispose();let s=ii.indexOf(Ln);s>=0&&ii.splice(s,1)}let t=y.sel3d,i=t&&t.lifted?y.editObject.boxes.concat(t.boxes):y.editObject.boxes,r=lh(i,Po,!0);Ln=r?new Tt(r,Af):null,Ln&&(Ln.castShadow=Ln.receiveShadow=!0,di.add(Ln),ii.push(Ln)),y.pickMeshes=Ln?[Ln,...ph]:[...ph],t?nR(t.region):jf()}function nR(n){jf();let e=new hi(n.x1-n.x0,n.y1-n.y0,n.z1-n.z0),t=new wr(new ls(e),new Gi({color:16766073,depthTest:!1}));e.dispose(),t.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2),t.renderOrder=1e3,di.add(t),Do=t}function Or(){No||(No=requestAnimationFrame(()=>{No=0,by(),ui()}))}function mh(){y.voxVer++,Ff(),Or()}function Jf(n,e){y.editObject.boxes=Lf(y.editObject.boxes,n,e),mh()}function Ka(n){y.editObject.boxes=gs(y.editObject.boxes,n),mh()}function gh(n){let e=y.editObject.boxes;for(let t of n)e=Lf(e,t,t.c);y.editObject.boxes=e,mh()}function wy(n,e){let t=J0(y.editObject.boxes,n.x,n.y,n.z,e);return t?(y.editObject.boxes=t,mh(),!0):!1}function Sy(){if(!ii.length)return null;_n.setFromCamera(fi,$e);let n=_n.intersectObjects(ii,!1)[0];if(!n)return null;let e=_n.ray.direction,t=Math.floor(n.point.x+e.x*.5),i=Math.floor(n.point.y+e.y*.5),r=Math.floor(n.point.z+e.z*.5),s=(a,c,l)=>{let h=at({x:t-c.x,y:i-c.y,z:r-c.z},-l);for(let u of a)if(Ga(u,h.x,h.y,h.z))return u.c;return null};if(y.editObject){let a=s(y.editObject.boxes,y.editXform.off,y.editXform.rot);if(a!=null)return a}let o=null;return Lr(y.root,{x:0,y:0,z:0},0,null,null,(a,c,l)=>{o==null&&(o=s(a.boxes,c,l))}),o}var $f=new Set;function kr(n){for(let e of $f)if(n.has(e)!==y.selection.has(e)){wt();return}My()}function wt(){KC(),y.pickMeshes=[],y.childMeshes={},y.childBox={},$f.clear(),y.voxVer++,Ff();let n={x:0,y:0,z:0},e=en();if(y.editObject){y.editXform=qi(Io(),{off:y.editObject.pos,rot:y.editObject.rot});let t=[],i=new Map;Lr(y.root,n,0,null,null,(s,o,a,c,l)=>_y(s,o,a,l?Xf(i,l):t)),pn(t,e);let r=Wf(t,Po,{tier:"temp"});ph=r?[r]:[];for(let s of i.values())pn(s,e),xy(s);Yf=t,by(),Rr(y.editObject,y.editXform.off,y.editXform.rot,e)}else{let t=new Map,i=new Map,r=[],s=[];Lr(y.root,n,0,null,null,(o,a,c,l,h)=>{let u=_y(o,a,c,[]);pn(u,e);let d=h;l&&(d&&($f.add(l),y.selection.has(l)&&(d=null)),pn(u,y.childBox[l]||(y.childBox[l]=en()))),d?Xf(i,d).push(...u):(s.push(...u),l?Xf(t,l).push(...u):r.push(...u))}),Wf(r,Po,{tier:"temp"});for(let[o,a]of t)Wf(a,Po,{childId:o});for(let o of i.values())xy(o);Yf=s}y.sceneBox=e,JC(e),My(),ui()}function iR(n,e,t){let i=new hi(e.x-n.x,e.y-n.y,e.z-n.z),r=new wr(new ls(i),new Gi({color:t,depthTest:!1}));return r.position.set((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),r.renderOrder=999,i.dispose(),r}function My(){for(let n of Xi.children)n.geometry?.dispose?.();if(Xi.clear(),Xi.position.set(0,0,0),!y.editObject)for(let n of y.selection){let e=y.childBox[n];e&&!Cr(e)&&Xi.add(iR(e.min,e.max,15787730))}}function nt(n,e={},...t){let i=document.createElement(n);return Object.assign(i,e),t.length&&i.append(...t),i}var Za=new F,Kf=new F,Zf=new F,Ey=new F,rR=new F(0,1,0);function Ty(n,e){let t=($e.top-$e.bottom)/_t.h;$e.getWorldDirection(Kf),Zf.crossVectors(Kf,rR).normalize(),Ey.crossVectors(Zf,Kf).normalize(),tt.target.addScaledVector(Zf,-n*t),tt.target.addScaledVector(Ey,e*t)}function Ay(n,e){tt.azim-=n*.012,tt.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,tt.elev+e*.012))}function Cy(n){Cr(n)||(tt.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),tt.zoom=Math.max(8,Math.min(rh,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function yi(){let n=en();if(y.editObject){if(Rr(y.editObject,y.editXform.off,y.editXform.rot,n),Cr(n)){let e=y.editXform.off;tt.target.set(e.x,e.y+6,e.z),tt.zoom=41;return}}else for(let e in y.childBox){let t=y.childBox[e];n.min.x=Math.min(n.min.x,t.min.x),n.min.y=Math.min(n.min.y,t.min.y),n.min.z=Math.min(n.min.z,t.min.z),n.max.x=Math.max(n.max.x,t.max.x),n.max.y=Math.max(n.max.y,t.max.y),n.max.z=Math.max(n.max.z,t.max.z)}if(Cr(n)){tt.target.set(0,1,0),tt.zoom=23;return}Cy(n)}function Ry(n){if(n===y.root){yi();return}let e=Lo(n);Cy(Rr(n,e.off,e.rot,en()))}function Py(){Ye.azim+=(tt.azim-Ye.azim)*.22,Ye.elev+=(tt.elev-Ye.elev)*.22,Ye.zoom+=(tt.zoom-Ye.zoom)*.25,Ye.target.lerp(tt.target,.25);let n=Math.cos(Ye.elev),e=Math.sin(Ye.elev);Za.set(n*Math.sin(Ye.azim),e,n*Math.cos(Ye.azim)),$e.position.copy(Ye.target).addScaledVector(Za,X0);let t=U0.clamp((Math.abs(Ye.elev)-1.45)/(Math.PI/2-1.45),0,1);sh.set(-Math.sin(Ye.azim),0,-Math.cos(Ye.azim)),Ye.elev<0&&sh.negate(),Tf.set(0,1,0).lerp(sh,t),$e.up.copy(Tf.normalize()),$e.lookAt(Ye.target);let i=_t.w/_t.h,r=Ye.zoom,s=r*i;$e.left=-s/2,$e.right=s/2,$e.top=r/2,$e.bottom=-r/2;let o=$e.position,a=1/0,c=-1/0,l=(g,x,p)=>{let m=(o.x-g)*Za.x+(o.y-x)*Za.y+(o.z-p)*Za.z;m<a&&(a=m),m>c&&(c=m)},h=y.sceneBox;if(h&&!Cr(h))for(let g of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let p of[h.min.z,h.max.z])l(g,x,p);let u=Ye.target.x,d=Ye.target.z,f=4e3;for(let g of[-f,f])for(let x of[-f,f])l(u+g,0,d+x);a>c&&(a=.1,c=4e3),$e.near=a-10,$e.far=c+10,$e.updateProjectionMatrix(),fs.position.set(Ye.target.x,-.1,Ye.target.z),Y0()}var sR={0:["y","z"],1:["x","z"],2:["x","y"]};function oR(n){let e=[];for(let t of n)for(let i=t.x0;i<t.x1;i++)for(let r=t.y0;r<t.y1;r++)for(let s=t.z0;s<t.z1;s++)e.push({x:i,y:r,z:s,c:t.c});return e}function aR(n,e,t,i,r){let s=(t%360+360)%360;if(s>180&&(s-=360),s===0)return;let o=Math.round(s/90),a=(s-o*90)*Math.PI/180,c=(o%4+4)%4,l=Math.tan(a/2),h=Math.sin(a),[u,d]=sR[e];for(let f of n){let g=f[u]-i,x=f[d]-r;for(let p=0;p<c;p++){let m=-x,v=g;g=m,x=v}a&&(g-=Math.round(x*l),x+=Math.round(g*h),g-=Math.round(x*l)),f[u]=i+g,f[d]=r+x}}function cR(n){let e=new Map;for(let a of n)e.set(ms(a.x,a.y,a.z),a.c);let t=(a,c,l,h)=>e.get(ms(a,c,l))===h,i=(a,c,l,h,u)=>{for(let d=a;d<c;d++)if(!t(d,l,h,u))return!1;return!0},r=(a,c,l,h,u,d)=>{for(let f=l;f<h;f++)if(!i(a,c,u,f,d))return!1;return!0},s=n.slice().sort((a,c)=>a.y-c.y||a.z-c.z||a.x-c.x),o=[];for(let a of s){let c=a.x,l=a.y,h=a.z,u=a.c;if(!e.has(ms(c,l,h)))continue;let d=c+1;for(;t(d,l,h,u);)d++;let f=h+1;for(;i(c,d,l,f,u);)f++;let g=l+1;for(;r(c,d,h,f,g,u);)g++;for(let x=l;x<g;x++)for(let p=h;p<f;p++)for(let m=c;m<d;m++)e.delete(ms(m,x,p));o.push({x0:c,y0:l,z0:h,x1:d,y1:g,z1:f,c:u})}return o}function Iy(n,e,t,i,r,s){let o=oR(n);aR(o,t,e,Math.round(i),Math.round(r));for(let a of o){let c=s(a.x,a.y,a.z);a.x=c.x,a.y=c.y,a.z=c.z}return cR(o)}var Qf=null,Ly=[],Dy=[],ko=()=>Qf;function Uy(n){Ly=n,n.length&&(Qf="node")}var xh=()=>Ly;function Ny(n){Dy=n,n.length&&(Qf="vox")}var yh=()=>Dy;var lR=200,_i=[],Ji=-1,_h=!1,Oy=n=>({rootJSON:n,uid:ah(),pathIds:y.path.map(e=>e.id),selection:[...y.selection],editId:y.editObject?y.editObject.id:null,collapsed:[...y.collapsed]});function ky(n){if(_h)return;let e=Oy(n),t=_i[Ji];t&&t.rootJSON===e.rootJSON||(_i.length=Ji+1,_i.push(e),_i.length>lR&&_i.shift(),Ji=_i.length-1)}function zy(n){_h||Ji<0||(_i[Ji]=Oy(n))}function By(n){_h=!0,ch(n.uid),y.root=vh(JSON.parse(n.rootJSON)),y.path=[];let e=y.root;for(let t of n.pathIds){let i=e.id===t?e:e.type==="scene"?e.children.find(r=>r.id===t):null;if(!i)break;e=i,y.path.push(e)}y.path.length||(y.path=[y.root]),y.editObject=n.editId?ys(n.editId):null,y.selection=new Set(n.selection.filter(t=>y.context.children.some(i=>i.id===t))),y.collapsed=new Set(n.collapsed),y.drag=null,y.sel3d=null,y.painting=!1,y.lastVox=null,wt(),Ze(),mt(),_h=!1}function Fy(){Vn(),Ji>0&&By(_i[--Ji])}function ep(){Vn(),Ji<_i.length-1&&By(_i[++Ji])}var mn=()=>new Map,bh=n=>{let e=mn();return n.forEach((t,i)=>{e.set(i,t)}),e},vi=(n,e,t)=>{let i=n.get(e);return i===void 0&&n.set(e,i=t()),i},Vy=(n,e)=>{let t=[];for(let[i,r]of n)t.push(e(r,i));return t},Hy=(n,e)=>{for(let[t,i]of n)if(e(i,t))return!0;return!1};var Ki=()=>new Set;var wh=n=>n[n.length-1];var Gy=(n,e)=>{for(let t=0;t<e.length;t++)n.push(e[t])},Zi=Array.from,Sh=(n,e)=>{for(let t=0;t<n.length;t++)if(!e(n[t],t,n))return!1;return!0},Mh=(n,e)=>{for(let t=0;t<n.length;t++)if(e(n[t],t,n))return!0;return!1};var Wy=(n,e)=>{let t=new Array(n);for(let i=0;i<n;i++)t[i]=e(i,t);return t};var Ss=Array.isArray;var Eh=class{constructor(){this._observers=mn()}on(e,t){return vi(this._observers,e,Ki).add(t),t}once(e,t){let i=(...r)=>{this.off(e,i),t(...r)};this.on(e,i)}off(e,t){let i=this._observers.get(e);i!==void 0&&(i.delete(t),i.size===0&&this._observers.delete(e))}emit(e,t){return Zi((this._observers.get(e)||mn()).values()).forEach(i=>i(...t))}destroy(){this._observers=mn()}};var gn=Math.floor;var Ms=Math.abs;var Th=(n,e)=>n<e?n:e,Qi=(n,e)=>n>e?n:e,UU=Number.isNaN;var Ah=n=>n!==0?n<0:1/n<0;var zo=Number.MAX_SAFE_INTEGER,np=Number.MIN_SAFE_INTEGER,NU=1<<31;var Xy=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&gn(n)===n),OU=Number.isNaN,kU=Number.parseInt;var rp=String.fromCharCode,hR=String.fromCodePoint,zU=rp(65535),uR=n=>n.toLowerCase(),dR=/^\s*/g,fR=n=>n.replace(dR,""),pR=/([A-Z])/g,sp=(n,e)=>fR(n.replace(pR,t=>`${e}${uR(t)}`));var mR=n=>{let e=unescape(encodeURIComponent(n)),t=e.length,i=new Uint8Array(t);for(let r=0;r<t;r++)i[r]=e.codePointAt(r);return i},Fo=typeof TextEncoder<"u"?new TextEncoder:null,gR=n=>Fo.encode(n),qy=Fo?gR:mR;var Bo=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Bo&&Bo.decode(new Uint8Array).length===1&&(Bo=null);var Yy=(n,e)=>Wy(e,()=>n).join("");var Es=class{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}},ic=()=>new Es;var xR=n=>{let e=n.cpos;for(let t=0;t<n.bufs.length;t++)e+=n.bufs[t].length;return e};var ri=n=>{let e=new Uint8Array(xR(n)),t=0;for(let i=0;i<n.bufs.length;i++){let r=n.bufs[i];e.set(r,t),t+=r.length}return e.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),t),e},yR=(n,e)=>{let t=n.cbuf.length;t-n.cpos<e&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Qi(t,e)*2),n.cpos=0)},Bt=(n,e)=>{let t=n.cbuf.length;n.cpos===t&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(t*2),n.cpos=0),n.cbuf[n.cpos++]=e};var Ph=Bt;var Je=(n,e)=>{for(;e>127;)Bt(n,128|127&e),e=gn(e/128);Bt(n,127&e)},Ih=(n,e)=>{let t=Ah(e);for(t&&(e=-e),Bt(n,(e>63?128:0)|(t?64:0)|63&e),e=gn(e/64);e>0;)Bt(n,(e>127?128:0)|127&e),e=gn(e/128)},op=new Uint8Array(3e4),_R=op.length/3,vR=(n,e)=>{if(e.length<_R){let t=Fo.encodeInto(e,op).written||0;Je(n,t);for(let i=0;i<t;i++)Bt(n,op[i])}else vn(n,qy(e))},bR=(n,e)=>{let t=unescape(encodeURIComponent(e)),i=t.length;Je(n,i);for(let r=0;r<i;r++)Bt(n,t.codePointAt(r))},Ts=Fo&&Fo.encodeInto?vR:bR;var rc=(n,e)=>{let t=n.cbuf.length,i=n.cpos,r=Th(t-i,e.length),s=e.length-r;n.cbuf.set(e.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Qi(t*2,s)),n.cbuf.set(e.subarray(r)),n.cpos=s)},vn=(n,e)=>{Je(n,e.byteLength),rc(n,e)},ap=(n,e)=>{yR(n,e);let t=new DataView(n.cbuf.buffer,n.cpos,e);return n.cpos+=e,t},wR=(n,e)=>ap(n,4).setFloat32(0,e,!1),SR=(n,e)=>ap(n,8).setFloat64(0,e,!1),MR=(n,e)=>ap(n,8).setBigInt64(0,e,!1);var jy=new DataView(new ArrayBuffer(4)),ER=n=>(jy.setFloat32(0,n),jy.getFloat32(0)===n),Ho=(n,e)=>{switch(typeof e){case"string":Bt(n,119),Ts(n,e);break;case"number":Xy(e)&&Ms(e)<=2147483647?(Bt(n,125),Ih(n,e)):ER(e)?(Bt(n,124),wR(n,e)):(Bt(n,123),SR(n,e));break;case"bigint":Bt(n,122),MR(n,e);break;case"object":if(e===null)Bt(n,126);else if(Ss(e)){Bt(n,117),Je(n,e.length);for(let t=0;t<e.length;t++)Ho(n,e[t])}else if(e instanceof Uint8Array)Bt(n,116),vn(n,e);else{Bt(n,118);let t=Object.keys(e);Je(n,t.length);for(let i=0;i<t.length;i++){let r=t[i];Ts(n,r),Ho(n,e[r])}}break;case"boolean":Bt(n,e?120:121);break;default:Bt(n,127)}},nc=class extends Es{constructor(e){super(),this.w=e,this.s=null,this.count=0}write(e){this.s===e?this.count++:(this.count>0&&Je(this,this.count-1),this.count=1,this.w(this,e),this.s=e)}};var Jy=n=>{n.count>0&&(Ih(n.encoder,n.count===1?n.s:-n.s),n.count>1&&Je(n.encoder,n.count-2))},As=class{constructor(){this.encoder=new Es,this.s=0,this.count=0}write(e){this.s===e?this.count++:(Jy(this),this.count=1,this.s=e)}toUint8Array(){return Jy(this),ri(this.encoder)}};var Ky=n=>{if(n.count>0){let e=n.diff*2+(n.count===1?0:1);Ih(n.encoder,e),n.count>1&&Je(n.encoder,n.count-2)}},Go=class{constructor(){this.encoder=new Es,this.s=0,this.count=0,this.diff=0}write(e){this.diff===e-this.s?(this.s=e,this.count++):(Ky(this),this.count=1,this.diff=e-this.s,this.s=e)}toUint8Array(){return Ky(this),ri(this.encoder)}},Rh=class{constructor(){this.sarr=[],this.s="",this.lensE=new As}write(e){this.s+=e,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(e.length)}toUint8Array(){let e=new Es;return this.sarr.push(this.s),this.s="",Ts(e,this.sarr.join("")),rc(e,this.lensE.toUint8Array()),ri(e)}};var Dn=n=>new Error(n),Un=()=>{throw Dn("Method unimplemented")},bn=()=>{throw Dn("Unexpected case")};var Zy=Dn("Unexpected end of array"),Qy=Dn("Integer out of Range"),Wo=class{constructor(e){this.arr=e,this.pos=0}},Is=n=>new Wo(n),e_=n=>n.pos!==n.arr.length;var AR=(n,e)=>{let t=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,e);return n.pos+=e,t},wn=n=>AR(n,Ve(n));var Cs=n=>n.arr[n.pos++];var Ve=n=>{let e=0,t=1,i=n.arr.length;for(;n.pos<i;){let r=n.arr[n.pos++];if(e=e+(r&127)*t,t*=128,r<128)return e;if(e>zo)throw Qy}throw Zy},Dh=n=>{let e=n.arr[n.pos++],t=e&63,i=64,r=(e&64)>0?-1:1;if((e&128)===0)return r*t;let s=n.arr.length;for(;n.pos<s;){if(e=n.arr[n.pos++],t=t+(e&127)*i,i*=128,e<128)return r*t;if(t>zo)throw Qy}throw Zy};var CR=n=>{let e=Ve(n);if(e===0)return"";{let t=String.fromCodePoint(Cs(n));if(--e<100)for(;e--;)t+=String.fromCodePoint(Cs(n));else for(;e>0;){let i=e<1e4?e:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,t+=String.fromCodePoint.apply(null,r),e-=i}return decodeURIComponent(escape(t))}},RR=n=>Bo.decode(wn(n)),Rs=Bo?RR:CR;var lp=(n,e)=>{let t=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,e);return n.pos+=e,t},PR=n=>lp(n,4).getFloat32(0,!1),IR=n=>lp(n,8).getFloat64(0,!1),LR=n=>lp(n,8).getBigInt64(0,!1);var DR=[n=>{},n=>null,Dh,PR,IR,LR,n=>!1,n=>!0,Rs,n=>{let e=Ve(n),t={};for(let i=0;i<e;i++){let r=Rs(n);t[r]=Xo(n)}return t},n=>{let e=Ve(n),t=[];for(let i=0;i<e;i++)t.push(Xo(n));return t},wn],Xo=n=>DR[127-Cs(n)](n),sc=class extends Wo{constructor(e,t){super(e),this.reader=t,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),e_(this)?this.count=Ve(this)+1:this.count=-1),this.count--,this.s}};var Ps=class extends Wo{constructor(e){super(e),this.s=0,this.count=0}read(){if(this.count===0){this.s=Dh(this);let e=Ah(this.s);this.count=1,e&&(this.s=-this.s,this.count=Ve(this)+2)}return this.count--,this.s}};var qo=class extends Wo{constructor(e){super(e),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){let e=Dh(this),t=e&1;this.diff=gn(e/2),this.count=1,t&&(this.count=Ve(this)+2)}return this.s+=this.diff,this.count--,this.s}},Lh=class{constructor(e){this.decoder=new Ps(e),this.str=Rs(this.decoder),this.spos=0}read(){let e=this.spos+this.decoder.read(),t=this.str.slice(this.spos,e);return this.spos=e,t}};var VU=crypto.subtle,t_=crypto.getRandomValues.bind(crypto);var hp=()=>t_(new Uint32Array(1))[0];var NR="10000000-1000-4000-8000"+-1e11,n_=()=>NR.replace(/[018]/g,n=>(n^hp()&15>>n/4).toString(16));var i_=Date.now;var up=n=>new Promise(n);var WU=Promise.all.bind(Promise);var dp=n=>n===void 0?null:n;var fp=class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},r_=new fp,FR=!0;try{typeof localStorage<"u"&&localStorage&&(r_=localStorage,FR=!1)}catch{}var s_=r_;var Ls=Symbol("Equality"),Uh=(n,e)=>n===e||!!n?.[Ls]?.(e)||!1;var o_=n=>typeof n=="object",a_=Object.assign,HR=Object.keys;var c_=(n,e)=>{for(let t in n)e(n[t],t)};var oc=n=>HR(n).length;var l_=n=>{for(let e in n)return!1;return!0},Yo=(n,e)=>{for(let t in n)if(!e(n[t],t))return!1;return!0},ac=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),mp=(n,e)=>n===e||oc(n)===oc(e)&&Yo(n,(t,i)=>(t!==void 0||ac(e,i))&&Uh(e[i],t)),GR=Object.freeze,gp=n=>{for(let e in n){let t=n[e];(typeof t=="object"||typeof t=="function")&&gp(n[e])}return GR(n)};var lc=(n,e,t=0)=>{try{for(;t<n.length;t++)n[t](...e)}finally{t<n.length&&lc(n,e,t+1)}};var h_=n=>n;var cc=(n,e)=>{if(n===e)return!0;if(n==null||e==null||n.constructor!==e.constructor&&(n.constructor||Object)!==(e.constructor||Object))return!1;if(n[Ls]!=null)return n[Ls](e);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),e=new Uint8Array(e);case Uint8Array:{if(n.byteLength!==e.byteLength)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;break}case Set:{if(n.size!==e.size)return!1;for(let t of n)if(!e.has(t))return!1;break}case Map:{if(n.size!==e.size)return!1;for(let t of n.keys())if(!e.has(t)||!cc(n.get(t),e.get(t)))return!1;break}case void 0:case Object:if(oc(n)!==oc(e))return!1;for(let t in n)if(!ac(n,t)||!cc(n[t],e[t]))return!1;break;case Array:if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!cc(n[t],e[t]))return!1;break;default:return!1}return!0},u_=(n,e)=>e.includes(n);var hc=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";var XU=typeof navigator<"u"?/Mac/.test(navigator.platform):!1,bi,WR=[],XR=()=>{if(bi===void 0)if(hc){bi=mn();let n=process.argv,e=null;for(let t=0;t<n.length;t++){let i=n[t];i[0]==="-"?(e!==null&&bi.set(e,""),e=i):e!==null?(bi.set(e,i),e=null):WR.push(i)}e!==null&&bi.set(e,"")}else typeof location=="object"?(bi=mn(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){let[e,t]=n.split("=");bi.set(`--${sp(e,"-")}`,t),bi.set(`-${sp(e,"-")}`,t)}})):bi=mn();return bi},_p=n=>XR().has(n);var uc=n=>hc?dp(process.env[n.toUpperCase().replaceAll("-","_")]):dp(s_.getItem(n));var d_=n=>_p("--"+n)||uc(n)!==null,f_=d_("production"),qR=hc&&u_(process.env.FORCE_COLOR,["true","1","2"]),p_=qR||!_p("--no-colors")&&!d_("no-color")&&(!hc||process.stdout.isTTY)&&(!hc||_p("--color")||uc("COLORTERM")!==null||(uc("TERM")||"").includes("color"));var YR=n=>new Uint8Array(n);var m_=n=>{let e=YR(n.byteLength);return e.set(n),e};var bp=class{constructor(e,t){this.left=e,this.right=t}},wi=(n,e)=>new bp(n,e);var wp=n=>n.next()>=.5,Nh=(n,e,t)=>gn(n.next()*(t+1-e)+e);var Sp=(n,e,t)=>gn(n.next()*(t+1-e)+e);var Mp=(n,e,t)=>Sp(n,e,t);var JR=n=>rp(Mp(n,97,122)),g_=(n,e=0,t=20)=>{let i=Mp(n,e,t),r="";for(let s=0;s<i;s++)r+=JR(n);return r};var Oh=(n,e)=>e[Mp(n,0,e.length-1)];var ZR=Symbol("0schema"),Ep=class{constructor(){this._rerrs=[]}extend(e,t,i,r=null){this._rerrs.push({path:e,expected:t,has:i,message:r})}toString(){let e=[];for(let t=this._rerrs.length-1;t>0;t--){let i=this._rerrs[t];e.push(Yy(" ",(this._rerrs.length-t)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return e.join(`
`)}},Tp=(n,e)=>n===e?!0:n==null||e==null||n.constructor!==e.constructor?!1:n[Ls]?Uh(n,e):Ss(n)?Sh(n,t=>Mh(e,i=>Tp(t,i))):o_(n)?Yo(n,(t,i)=>Tp(t,e[i])):!1,Wt=class{static _dilutes=!1;extends(e){let[t,i]=[this.shape,e.shape];return this.constructor._dilutes&&([i,t]=[t,i]),Tp(t,i)}equals(e){return this.constructor===e.constructor&&cc(this.shape,e.shape)}[ZR](){return!0}[Ls](e){return this.equals(e)}validate(e){return this.check(e)}check(e,t){Un()}get nullable(){return Zo(this,$h)}get optional(){return new kh(this)}cast(e){return x_(e,this),e}expect(e){return x_(e,this),e}},dc=class extends Wt{constructor(e,t){super(),this.shape=e,this._c=t}check(e,t=void 0){let i=e?.constructor===this.shape&&(this._c==null||this._c(e));return!i&&t?.extend(null,this.shape.name,e?.constructor.name,e?.constructor!==this.shape?"Constructor match failed":"Check failed"),i}},Mt=(n,e=null)=>new dc(n,e),YU=Mt(dc),fc=class extends Wt{constructor(e){super(),this.shape=e}check(e,t){let i=this.shape(e);return!i&&t?.extend(null,"custom prop",e?.constructor.name,"failed to check custom prop"),i}},It=n=>new fc(n),$U=Mt(fc),Jo=class extends Wt{constructor(e){super(),this.shape=e}check(e,t){let i=this.shape.some(r=>r===e);return!i&&t?.extend(null,this.shape.join(" | "),e.toString()),i}},qh=(...n)=>new Jo(n),y_=Mt(Jo),QR=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,e=>"\\"+e)),__=n=>{if(Ko.check(n))return[QR(n)];if(y_.check(n))return n.shape.map(e=>e+"");if(M_.check(n))return["[+-]?\\d+.?\\d*"];if(E_.check(n))return[".*"];if(Wh.check(n))return n.shape.map(__).flat(1);bn()},Ap=class extends Wt{constructor(e){super(),this.shape=e,this._r=new RegExp("^"+e.map(__).map(t=>`(${t.join("|")})`).join("")+"$")}check(e,t){let i=this._r.exec(e)!=null;return!i&&t?.extend(null,this._r.toString(),e.toString(),"String doesn't match string template."),i}};var jU=Mt(Ap),eP=Symbol("optional"),kh=class extends Wt{constructor(e){super(),this.shape=e}check(e,t){let i=e===void 0||this.shape.check(e);return!i&&t?.extend(null,"undefined (optional)","()"),i}get[eP](){return!0}},tP=Mt(kh),zh=class extends Wt{check(e,t){return t?.extend(null,"never",typeof e),!1}},JU=new zh,KU=Mt(zh),Bh=class n extends Wt{constructor(e,t=!1){super(),this.shape=e,this._isPartial=t}static _dilutes=!0;get partial(){return new n(this.shape,!0)}check(e,t){return e==null?(t?.extend(null,"object","null"),!1):Yo(this.shape,(i,r)=>{let s=this._isPartial&&!ac(e,r)||i.check(e[r],t);return!s&&t?.extend(r.toString(),i.toString(),typeof e[r],"Object property does not match"),s})}},nP=n=>new Bh(n),iP=Mt(Bh),rP=It(n=>n!=null&&(n.constructor===Object||n.constructor==null)),Fh=class extends Wt{constructor(e,t){super(),this.shape={keys:e,values:t}}check(e,t){return e!=null&&Yo(e,(i,r)=>{let s=this.shape.keys.check(r,t);return!s&&t?.extend(r+"","Record",typeof e,s?"Key doesn't match schema":"Value doesn't match value"),s&&this.shape.values.check(i,t)})}},v_=(n,e)=>new Fh(n,e),sP=Mt(Fh),Vh=class extends Wt{constructor(e){super(),this.shape=e}check(e,t){return e!=null&&Yo(this.shape,(i,r)=>{let s=i.check(e[r],t);return!s&&t?.extend(r.toString(),"Tuple",typeof i),s})}},oP=(...n)=>new Vh(n),ZU=Mt(Vh),Hh=class extends Wt{constructor(e){super(),this.shape=e.length===1?e[0]:new pc(e)}check(e,t){let i=Ss(e)&&Sh(e,r=>this.shape.check(r));return!i&&t?.extend(null,"Array",""),i}},b_=(...n)=>new Hh(n),aP=Mt(Hh),cP=It(n=>Ss(n)),Gh=class extends Wt{constructor(e,t){super(),this.shape=e,this._c=t}check(e,t){let i=e instanceof this.shape&&(this._c==null||this._c(e));return!i&&t?.extend(null,this.shape.name,e?.constructor.name),i}},lP=(n,e=null)=>new Gh(n,e),QU=Mt(Gh),hP=lP(Wt),Cp=class extends Wt{constructor(e){super(),this.len=e.length-1,this.args=oP(...e.slice(-1)),this.res=e[this.len]}check(e,t){let i=e.constructor===Function&&e.length<=this.len;return!i&&t?.extend(null,"function",typeof e),i}};var uP=Mt(Cp),dP=It(n=>typeof n=="function"),Rp=class extends Wt{constructor(e){super(),this.shape=e}check(e,t){let i=Sh(this.shape,r=>r.check(e,t));return!i&&t?.extend(null,"Intersectinon",typeof e),i}};var e3=Mt(Rp,n=>n.shape.length>0),pc=class extends Wt{static _dilutes=!0;constructor(e){super(),this.shape=e}check(e,t){let i=Mh(this.shape,r=>r.check(e,t));return t?.extend(null,"Union",typeof e),i}},Zo=(...n)=>n.findIndex(e=>Wh.check(e))>=0?Zo(...n.map(e=>mc(e)).map(e=>Wh.check(e)?e.shape:[e]).flat(1)):n.length===1?n[0]:new pc(n),Wh=Mt(pc),w_=()=>!0,Xh=It(w_),fP=Mt(fc,n=>n.shape===w_),Ip=It(n=>typeof n=="bigint"),pP=It(n=>n===Ip),S_=It(n=>typeof n=="symbol"),t3=It(n=>n===S_),jo=It(n=>typeof n=="number"),M_=It(n=>n===jo),Ko=It(n=>typeof n=="string"),E_=It(n=>n===Ko),Yh=It(n=>typeof n=="boolean"),mP=It(n=>n===Yh),T_=qh(void 0),n3=Mt(Jo,n=>n.shape.length===1&&n.shape[0]===void 0),i3=qh(void 0);var $h=qh(null),gP=Mt(Jo,n=>n.shape.length===1&&n.shape[0]===null),r3=Mt(Uint8Array),s3=Mt(dc,n=>n.shape===Uint8Array),xP=Zo(jo,Ko,$h,T_,Ip,Yh,S_),o3=(()=>{let n=b_(Xh),e=v_(Ko,Xh),t=Zo(jo,Ko,$h,Yh,n,e);return n.shape=t,e.shape.values=t,t})(),mc=n=>{if(hP.check(n))return n;if(rP.check(n)){let e={};for(let t in n)e[t]=mc(n[t]);return nP(e)}else{if(cP.check(n))return Zo(...n.map(mc));if(xP.check(n))return qh(n);if(dP.check(n))return Mt(n)}bn()},x_=f_?()=>{}:(n,e)=>{let t=new Ep;if(!e.check(n,t))throw Dn(`Expected value to be of type ${e.constructor.name}.
${t.toString()}`)},Pp=class{constructor(e){this.patterns=[],this.$state=e}if(e,t){return this.patterns.push({if:mc(e),h:t}),this}else(e){return this.if(Xh,e)}done(){return(e,t)=>{for(let i=0;i<this.patterns.length;i++){let r=this.patterns[i];if(r.if.check(e))return r.h(e,t)}throw Dn("Unhandled pattern")}}},yP=n=>new Pp(n),A_=yP(Xh).if(M_,(n,e)=>Nh(e,np,zo)).if(E_,(n,e)=>g_(e)).if(mP,(n,e)=>wp(e)).if(pP,(n,e)=>BigInt(Nh(e,np,zo))).if(Wh,(n,e)=>$o(e,Oh(e,n.shape))).if(iP,(n,e)=>{let t={};for(let i in n.shape){let r=n.shape[i];if(tP.check(r)){if(wp(e))continue;r=r.shape}t[i]=A_(r,e)}return t}).if(aP,(n,e)=>{let t=[],i=Sp(e,0,42);for(let r=0;r<i;r++)t.push($o(e,n.shape));return t}).if(y_,(n,e)=>Oh(e,n.shape)).if(gP,(n,e)=>null).if(uP,(n,e)=>{let t=$o(e,n.res);return()=>t}).if(fP,(n,e)=>$o(e,Oh(e,[jo,Ko,$h,T_,Ip,Yh,b_(jo),v_(Zo("a","b","c"),jo)]))).if(sP,(n,e)=>{let t={},i=Nh(e,0,3);for(let r=0;r<i;r++){let s=$o(e,n.shape.keys),o=$o(e,n.shape.values);t[s]=o}return t}).done(),$o=(n,e)=>A_(mc(e),n);var Ds=typeof document<"u"?document:{};var a3=It(n=>n.nodeType===SP);var c3=typeof DOMParser<"u"?new DOMParser:null;var l3=It(n=>n.nodeType===vP);var h3=It(n=>n.nodeType===bP);var C_=n=>Vy(n,(e,t)=>`${t}:${e};`).join("");var vP=Ds.ELEMENT_NODE,bP=Ds.TEXT_NODE,u3=Ds.CDATA_SECTION_NODE,d3=Ds.COMMENT_NODE,wP=Ds.DOCUMENT_NODE,f3=Ds.DOCUMENT_TYPE_NODE,SP=Ds.DOCUMENT_FRAGMENT_NODE,p3=It(n=>n.nodeType===wP);var Si=Symbol;var gc=Si(),xc=Si(),Lp=Si(),Dp=Si(),Up=Si(),yc=Si(),Np=Si(),Qo=Si(),Op=Si(),R_=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let e=[],t=[],i=0;for(;i<n.length;i++){let r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)e.push(r);else if(r.constructor===Object)break}for(i>0&&t.push(e.join(""));i<n.length;i++){let r=n[i];r instanceof Symbol||t.push(r)}return t};var m3=i_();var AP={[gc]:wi("font-weight","bold"),[xc]:wi("font-weight","normal"),[Lp]:wi("color","blue"),[Up]:wi("color","green"),[Dp]:wi("color","grey"),[yc]:wi("color","red"),[Np]:wi("color","purple"),[Qo]:wi("color","orange"),[Op]:wi("color","black")},CP=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let e=[],t=[],i=mn(),r=[],s=0;for(;s<n.length;s++){let o=n[s],a=AP[o];if(a!==void 0)i.set(a.left,a.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){let c=C_(i);s>0||c.length>0?(e.push("%c"+o),t.push(c)):e.push(o)}else break}}for(s>0&&(r=t,r.unshift(e.join("")));s<n.length;s++){let o=n[s];o instanceof Symbol||r.push(o)}return r},P_=p_?CP:R_,I_=(...n)=>{console.log(...P_(n)),D_.forEach(e=>e.print(n))},L_=(...n)=>{console.warn(...P_(n)),n.unshift(Qo),D_.forEach(e=>e.print(n))};var D_=Ki();var U_=n=>({[Symbol.iterator](){return this},next:n}),N_=(n,e)=>U_(()=>{let t;do t=n.next();while(!t.done&&!e(t.value));return t}),jh=(n,e)=>U_(()=>{let{done:t,value:i}=n.next();return{done:t,value:t?void 0:e(i)}});var vc=class{constructor(e,t){this.clock=e,this.len=t}},Us=class{constructor(){this.clients=new Map}},j_=(n,e,t)=>e.clients.forEach((i,r)=>{let s=n.doc.store.clients.get(r);for(let o=0;o<i.length;o++){let a=i[o];rv(n,s,a.clock,a.len,t)}}),DP=(n,e)=>{let t=0,i=n.length-1;for(;t<=i;){let r=gn((t+i)/2),s=n[r],o=s.clock;if(o<=e){if(e<o+s.len)return r;t=r+1}else i=r-1}return null},J_=(n,e)=>{let t=n.clients.get(e.client);return t!==void 0&&DP(t,e.clock)!==null},nm=n=>{n.clients.forEach(e=>{e.sort((r,s)=>r.clock-s.clock);let t,i;for(t=1,i=1;t<e.length;t++){let r=e[i-1],s=e[t];r.clock+r.len>=s.clock?r.len=Qi(r.len,s.clock+s.len-r.clock):(i<t&&(e[i]=s),i++)}e.length=i})},UP=n=>{let e=new Us;for(let t=0;t<n.length;t++)n[t].clients.forEach((i,r)=>{if(!e.clients.has(r)){let s=i.slice();for(let o=t+1;o<n.length;o++)Gy(s,n[o].clients.get(r)||[]);e.clients.set(r,s)}});return nm(e),e},tu=(n,e,t,i)=>{vi(n.clients,e,()=>[]).push(new vc(t,i))},K_=()=>new Us,NP=n=>{let e=K_();return n.clients.forEach((t,i)=>{let r=[];for(let s=0;s<t.length;s++){let o=t[s];if(o.deleted){let a=o.id.clock,c=o.length;if(s+1<t.length)for(let l=t[s+1];s+1<t.length&&l.deleted;l=t[++s+1])c+=l.length;r.push(new vc(a,c))}}r.length>0&&e.clients.set(i,r)}),e},ra=(n,e)=>{Je(n.restEncoder,e.clients.size),Zi(e.clients.entries()).sort((t,i)=>i[0]-t[0]).forEach(([t,i])=>{n.resetDsCurVal(),Je(n.restEncoder,t);let r=i.length;Je(n.restEncoder,r);for(let s=0;s<r;s++){let o=i[s];n.writeDsClock(o.clock),n.writeDsLen(o.len)}})},im=n=>{let e=new Us,t=Ve(n.restDecoder);for(let i=0;i<t;i++){n.resetDsCurVal();let r=Ve(n.restDecoder),s=Ve(n.restDecoder);if(s>0){let o=vi(e.clients,r,()=>[]);for(let a=0;a<s;a++)o.push(new vc(n.readDsClock(),n.readDsLen()))}}return e},z_=(n,e,t)=>{let i=new Us,r=Ve(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();let o=Ve(n.restDecoder),a=Ve(n.restDecoder),c=t.clients.get(o)||[],l=Ft(t,o);for(let h=0;h<a;h++){let u=n.readDsClock(),d=u+n.readDsLen();if(u<l){l<d&&tu(i,o,l,d-l);let f=Mi(c,u),g=c[f];for(!g.deleted&&g.id.clock<u&&(c.splice(f+1,0,hu(e,g,u-g.id.clock)),f++);f<c.length&&(g=c[f++],g.id.clock<d);)g.deleted||(d<g.id.clock+g.length&&c.splice(f,0,hu(e,g,d-g.id.clock)),g.delete(e))}else tu(i,o,u,d-u)}}if(i.clients.size>0){let s=new er;return Je(s.restEncoder,0),ra(s,i),s.toUint8Array()}return null};var Z_=hp,Ns=class n extends Eh{constructor({guid:e=n_(),collectionid:t=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=Z_(),this.guid=e,this.collectionid=t,this.share=new Map,this.store=new ru,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=up(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});let c=()=>up(l=>{let h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),l())};this.on("sync",h)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){let e=this._item;e!==null&&!this.shouldLoad&&ot(e.parent.doc,t=>{t.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Zi(this.subdocs).map(e=>e.guid))}transact(e,t=null){return ot(this,e,t)}get(e,t=Lt){let i=vi(this.share,e,()=>{let s=new t;return s._integrate(this,null),s}),r=i.constructor;if(t!==Lt&&r!==t)if(r===Lt){let s=new t;s._map=i._map,i._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=s}),s._start=i._start;for(let o=s._start;o!==null;o=o.right)o.parent=s;return s._length=i._length,this.share.set(e,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${e} has already been defined with a different constructor`);return i}getArray(e=""){return this.get(e,cu)}getText(e=""){return this.get(e,Tc)}getMap(e=""){return this.get(e,ks)}getXmlElement(e=""){return this.get(e,Ac)}getXmlFragment(e=""){return this.get(e,na)}toJSON(){let e={};return this.share.forEach((t,i)=>{e[i]=t.toJSON()}),e}destroy(){this.isDestroyed=!0,Zi(this.subdocs).forEach(t=>t.destroy());let e=this._item;if(e!==null){this._item=null;let t=e.content;t.doc=new n({guid:this.guid,...t.opts,shouldLoad:!1}),t.doc._item=e,ot(e.parent.doc,i=>{let r=t.doc;e.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}},nu=class{constructor(e){this.restDecoder=e}resetDsCurVal(){}readDsClock(){return Ve(this.restDecoder)}readDsLen(){return Ve(this.restDecoder)}},iu=class extends nu{readLeftID(){return je(Ve(this.restDecoder),Ve(this.restDecoder))}readRightID(){return je(Ve(this.restDecoder),Ve(this.restDecoder))}readClient(){return Ve(this.restDecoder)}readInfo(){return Cs(this.restDecoder)}readString(){return Rs(this.restDecoder)}readParentInfo(){return Ve(this.restDecoder)===1}readTypeRef(){return Ve(this.restDecoder)}readLen(){return Ve(this.restDecoder)}readAny(){return Xo(this.restDecoder)}readBuf(){return m_(wn(this.restDecoder))}readJSON(){return JSON.parse(Rs(this.restDecoder))}readKey(){return Rs(this.restDecoder)}},Bp=class{constructor(e){this.dsCurrVal=0,this.restDecoder=e}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=Ve(this.restDecoder),this.dsCurrVal}readDsLen(){let e=Ve(this.restDecoder)+1;return this.dsCurrVal+=e,e}},Hr=class extends Bp{constructor(e){super(e),this.keys=[],Ve(e),this.keyClockDecoder=new qo(wn(e)),this.clientDecoder=new Ps(wn(e)),this.leftClockDecoder=new qo(wn(e)),this.rightClockDecoder=new qo(wn(e)),this.infoDecoder=new sc(wn(e),Cs),this.stringDecoder=new Lh(wn(e)),this.parentInfoDecoder=new sc(wn(e),Cs),this.typeRefDecoder=new Ps(wn(e)),this.lenDecoder=new Ps(wn(e))}readLeftID(){return new Vr(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Vr(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return Xo(this.restDecoder)}readBuf(){return wn(this.restDecoder)}readJSON(){return Xo(this.restDecoder)}readKey(){let e=this.keyClockDecoder.read();if(e<this.keys.length)return this.keys[e];{let t=this.stringDecoder.read();return this.keys.push(t),t}}},Fp=class{constructor(){this.restEncoder=ic()}toUint8Array(){return ri(this.restEncoder)}resetDsCurVal(){}writeDsClock(e){Je(this.restEncoder,e)}writeDsLen(e){Je(this.restEncoder,e)}},Os=class extends Fp{writeLeftID(e){Je(this.restEncoder,e.client),Je(this.restEncoder,e.clock)}writeRightID(e){Je(this.restEncoder,e.client),Je(this.restEncoder,e.clock)}writeClient(e){Je(this.restEncoder,e)}writeInfo(e){Ph(this.restEncoder,e)}writeString(e){Ts(this.restEncoder,e)}writeParentInfo(e){Je(this.restEncoder,e?1:0)}writeTypeRef(e){Je(this.restEncoder,e)}writeLen(e){Je(this.restEncoder,e)}writeAny(e){Ho(this.restEncoder,e)}writeBuf(e){vn(this.restEncoder,e)}writeJSON(e){Ts(this.restEncoder,JSON.stringify(e))}writeKey(e){Ts(this.restEncoder,e)}},Vp=class{constructor(){this.restEncoder=ic(),this.dsCurrVal=0}toUint8Array(){return ri(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(e){let t=e-this.dsCurrVal;this.dsCurrVal=e,Je(this.restEncoder,t)}writeDsLen(e){e===0&&bn(),Je(this.restEncoder,e-1),this.dsCurrVal+=e}},er=class extends Vp{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Go,this.clientEncoder=new As,this.leftClockEncoder=new Go,this.rightClockEncoder=new Go,this.infoEncoder=new nc(Ph),this.stringEncoder=new Rh,this.parentInfoEncoder=new nc(Ph),this.typeRefEncoder=new As,this.lenEncoder=new As}toUint8Array(){let e=ic();return Je(e,0),vn(e,this.keyClockEncoder.toUint8Array()),vn(e,this.clientEncoder.toUint8Array()),vn(e,this.leftClockEncoder.toUint8Array()),vn(e,this.rightClockEncoder.toUint8Array()),vn(e,ri(this.infoEncoder)),vn(e,this.stringEncoder.toUint8Array()),vn(e,ri(this.parentInfoEncoder)),vn(e,this.typeRefEncoder.toUint8Array()),vn(e,this.lenEncoder.toUint8Array()),rc(e,ri(this.restEncoder)),ri(e)}writeLeftID(e){this.clientEncoder.write(e.client),this.leftClockEncoder.write(e.clock)}writeRightID(e){this.clientEncoder.write(e.client),this.rightClockEncoder.write(e.clock)}writeClient(e){this.clientEncoder.write(e)}writeInfo(e){this.infoEncoder.write(e)}writeString(e){this.stringEncoder.write(e)}writeParentInfo(e){this.parentInfoEncoder.write(e?1:0)}writeTypeRef(e){this.typeRefEncoder.write(e)}writeLen(e){this.lenEncoder.write(e)}writeAny(e){Ho(this.restEncoder,e)}writeBuf(e){vn(this.restEncoder,e)}writeJSON(e){Ho(this.restEncoder,e)}writeKey(e){let t=this.keyMap.get(e);t===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(e)):this.keyClockEncoder.write(t)}},OP=(n,e,t,i)=>{i=Qi(i,e[0].id.clock);let r=Mi(e,i);Je(n.restEncoder,e.length-r),n.writeClient(t),Je(n.restEncoder,i);let s=e[r];s.write(n,i-s.id.clock);for(let o=r+1;o<e.length;o++)e[o].write(n,0)},rm=(n,e,t)=>{let i=new Map;t.forEach((r,s)=>{Ft(e,s)>r&&i.set(s,r)}),sm(e).forEach((r,s)=>{t.has(s)||i.set(s,0)}),Je(n.restEncoder,i.size),Zi(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{OP(n,e.clients.get(r),r,s)})},kP=(n,e)=>{let t=mn(),i=Ve(n.restDecoder);for(let r=0;r<i;r++){let s=Ve(n.restDecoder),o=new Array(s),a=n.readClient(),c=Ve(n.restDecoder);t.set(a,{i:0,refs:o});for(let l=0;l<s;l++){let h=n.readInfo();switch(31&h){case 0:{let u=n.readLen();o[l]=new Sn(je(a,c),u),c+=u;break}case 10:{let u=Ve(n.restDecoder);o[l]=new Mn(je(a,c),u),c+=u;break}default:{let u=(h&192)===0,d=new Vt(je(a,c),null,(h&128)===128?n.readLeftID():null,null,(h&64)===64?n.readRightID():null,u?n.readParentInfo()?e.get(n.readString()):n.readLeftID():null,u&&(h&32)===32?n.readString():null,Sv(n,h));o[l]=d,c+=d.length}}}}return t},zP=(n,e,t)=>{let i=[],r=Zi(t.keys()).sort((f,g)=>f-g);if(r.length===0)return null;let s=()=>{if(r.length===0)return null;let f=t.get(r[r.length-1]);for(;f.refs.length===f.i;)if(r.pop(),r.length>0)f=t.get(r[r.length-1]);else return null;return f},o=s();if(o===null)return null;let a=new ru,c=new Map,l=(f,g)=>{let x=c.get(f);(x==null||x>g)&&c.set(f,g)},h=o.refs[o.i++],u=new Map,d=()=>{for(let f of i){let g=f.id.client,x=t.get(g);x?(x.i--,a.clients.set(g,x.refs.slice(x.i)),t.delete(g),x.i=0,x.refs=[]):a.clients.set(g,[f]),r=r.filter(p=>p!==g)}i.length=0};for(;;){if(h.constructor!==Mn){let g=vi(u,h.id.client,()=>Ft(e,h.id.client))-h.id.clock;if(g<0)i.push(h),l(h.id.client,h.id.clock-1),d();else{let x=h.getMissing(n,e);if(x!==null){i.push(h);let p=t.get(x)||{refs:[],i:0};if(p.refs.length===p.i)l(x,Ft(e,x)),d();else{h=p.refs[p.i++];continue}}else(g===0||g<h.length)&&(h.integrate(n,g),u.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(o!==null&&o.i<o.refs.length)h=o.refs[o.i++];else{if(o=s(),o===null)break;h=o.refs[o.i++]}}if(a.clients.size>0){let f=new er;return rm(f,a,new Map),Je(f.restEncoder,0),{missing:c,update:f.toUint8Array()}}return null},BP=(n,e)=>rm(n,e.doc.store,e.beforeState),FP=(n,e,t,i=new Hr(n))=>ot(e,r=>{r.local=!1;let s=!1,o=r.doc,a=o.store,c=kP(i,o),l=zP(r,a,c),h=a.pendingStructs;if(h){for(let[d,f]of h.missing)if(f<Ft(a,d)){s=!0;break}if(l){for(let[d,f]of l.missing){let g=h.missing.get(d);(g==null||g>f)&&h.missing.set(d,f)}h.update=su([h.update,l.update])}}else a.pendingStructs=l;let u=z_(i,r,a);if(a.pendingDs){let d=new Hr(Is(a.pendingDs));Ve(d.restDecoder);let f=z_(d,r,a);u&&f?a.pendingDs=su([u,f]):a.pendingDs=u||f}else a.pendingDs=u;if(s){let d=a.pendingStructs.update;a.pendingStructs=null,Q_(r.doc,d)}},t,!1);var Q_=(n,e,t,i=Hr)=>{let r=Is(e);FP(r,n,t,new i(r))},uu=(n,e,t)=>Q_(n,e,t,iu),VP=(n,e,t=new Map)=>{rm(n,e.store,t),ra(n,NP(e.store))},HP=(n,e=new Uint8Array([0]),t=new er)=>{let i=tv(e);VP(t,n,i);let r=[t.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(QP(n.store.pendingStructs.update,e)),r.length>1){if(t.constructor===Os)return KP(r.map((s,o)=>o===0?s:t2(s)));if(t.constructor===er)return su(r)}return r[0]},ev=(n,e)=>HP(n,e,new Os),GP=n=>{let e=new Map,t=Ve(n.restDecoder);for(let i=0;i<t;i++){let r=Ve(n.restDecoder),s=Ve(n.restDecoder);e.set(r,s)}return e},tv=n=>GP(new nu(Is(n)));var Hp=class{constructor(){this.l=[]}},B_=()=>new Hp,F_=(n,e)=>n.l.push(e),V_=(n,e)=>{let t=n.l,i=t.length;n.l=t.filter(r=>e!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},nv=(n,e,t)=>lc(n.l,[e,t]),Vr=class{constructor(e,t){this.client=e,this.clock=t}},Jh=(n,e)=>n===e||n!==null&&e!==null&&n.client===e.client&&n.clock===e.clock,je=(n,e)=>new Vr(n,e);var WP=n=>{for(let[e,t]of n.doc.share.entries())if(t===n)return e;throw bn()};var Gp=class{constructor(e,t){this.ds=e,this.sv=t}};var XP=(n,e)=>new Gp(n,e),T3=XP(K_(),new Map);var ea=(n,e)=>e===void 0?!n.deleted:e.sv.has(n.id.client)&&(e.sv.get(n.id.client)||0)>n.id.clock&&!J_(e.ds,n.id),Wp=(n,e)=>{let t=vi(n.meta,Wp,Ki),i=n.doc.store;t.has(e)||(e.sv.forEach((r,s)=>{r<Ft(i,s)&&Gr(n,je(s,r))}),j_(n,e.ds,r=>{}),t.add(e))};var ru=class{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}},sm=n=>{let e=new Map;return n.clients.forEach((t,i)=>{let r=t[t.length-1];e.set(i,r.id.clock+r.length)}),e},Ft=(n,e)=>{let t=n.clients.get(e);if(t===void 0)return 0;let i=t[t.length-1];return i.id.clock+i.length},iv=(n,e)=>{let t=n.clients.get(e.id.client);if(t===void 0)t=[],n.clients.set(e.id.client,t);else{let i=t[t.length-1];if(i.id.clock+i.length!==e.id.clock)throw bn()}t.push(e)},Mi=(n,e)=>{let t=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===e)return i;let o=gn(e/(s+r.length-1)*i);for(;t<=i;){if(r=n[o],s=r.id.clock,s<=e){if(e<s+r.length)return o;t=o+1}else i=o-1;o=gn((t+i)/2)}throw bn()},qP=(n,e)=>{let t=n.clients.get(e.client);return t[Mi(t,e.clock)]},kp=qP,Xp=(n,e,t)=>{let i=Mi(e,t),r=e[i];return r.id.clock<t&&r instanceof Vt?(e.splice(i+1,0,hu(n,r,t-r.id.clock)),i+1):i},Gr=(n,e)=>{let t=n.doc.store.clients.get(e.client);return t[Xp(n,t,e.clock)]},H_=(n,e,t)=>{let i=e.clients.get(t.client),r=Mi(i,t.clock),s=i[r];return t.clock!==s.id.clock+s.length-1&&s.constructor!==Sn&&i.splice(r+1,0,hu(n,s,t.clock-s.id.clock+1)),s},YP=(n,e,t)=>{let i=n.clients.get(e.id.client);i[Mi(i,e.id.clock)]=t},rv=(n,e,t,i,r)=>{if(i===0)return;let s=t+i,o=Xp(n,e,t),a;do a=e[o++],s<a.id.clock+a.length&&Xp(n,e,s),r(a);while(o<e.length&&e[o].id.clock<s)},qp=class{constructor(e,t,i){this.doc=e,this.deleteSet=new Us,this.beforeState=sm(e.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=t,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}},G_=(n,e)=>e.deleteSet.clients.size===0&&!Hy(e.afterState,(t,i)=>e.beforeState.get(i)!==t)?!1:(nm(e.deleteSet),BP(n,e),ra(n,e.deleteSet),!0),W_=(n,e,t)=>{let i=e._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&vi(n.changed,e,Ki).add(t)},Qh=(n,e)=>{let t=n[e],i=n[e-1],r=e;for(;r>0;t=i,i=n[--r-1]){if(i.deleted===t.deleted&&i.constructor===t.constructor&&i.mergeWith(t)){t instanceof Vt&&t.parentSub!==null&&t.parent._map.get(t.parentSub)===t&&t.parent._map.set(t.parentSub,i);continue}break}let s=e-r;return s&&n.splice(e+1-s,s),s},$P=(n,e,t)=>{for(let[i,r]of n.clients.entries()){let s=e.clients.get(i);for(let o=r.length-1;o>=0;o--){let a=r[o],c=a.clock+a.len;for(let l=Mi(s,a.clock),h=s[l];l<s.length&&h.id.clock<c;h=s[++l]){let u=s[l];if(a.clock+a.len<=u.id.clock)break;u instanceof Vt&&u.deleted&&!u.keep&&t(u)&&u.gc(e,!1)}}}},jP=(n,e)=>{n.clients.forEach((t,i)=>{let r=e.clients.get(i);for(let s=t.length-1;s>=0;s--){let o=t[s],a=Th(r.length-1,1+Mi(r,o.clock+o.len-1));for(let c=a,l=r[c];c>0&&l.id.clock>=o.clock;l=r[c])c-=1+Qh(r,c)}})};var sv=(n,e)=>{if(e<n.length){let t=n[e],i=t.doc,r=i.store,s=t.deleteSet,o=t._mergeStructs;try{nm(s),t.afterState=sm(t.doc.store),i.emit("beforeObserverCalls",[t,i]);let a=[];t.changed.forEach((c,l)=>a.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(t,c)})),a.push(()=>{t.changedParentTypes.forEach((c,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(c=c.filter(h=>h.target._item===null||!h.target._item.deleted),c.forEach(h=>{h.currentTarget=l,h._path=null}),c.sort((h,u)=>h.path.length-u.path.length),nv(l._dEH,c,t))})}),a.push(()=>i.emit("afterTransaction",[t,i])),lc(a,[]),t._needFormattingCleanup&&d2(t)}finally{i.gc&&$P(s,r,i.gcFilter),jP(s,r),t.afterState.forEach((h,u)=>{let d=t.beforeState.get(u)||0;if(d!==h){let f=r.clients.get(u),g=Qi(Mi(f,d),1);for(let x=f.length-1;x>=g;)x-=1+Qh(f,x)}});for(let h=o.length-1;h>=0;h--){let{client:u,clock:d}=o[h].id,f=r.clients.get(u),g=Mi(f,d);g+1<f.length&&Qh(f,g+1)>1||g>0&&Qh(f,g)}if(!t.local&&t.afterState.get(i.clientID)!==t.beforeState.get(i.clientID)&&(I_(Qo,gc,"[yjs] ",xc,yc,"Changed the client-id because another client seems to be using it."),i.clientID=Z_()),i.emit("afterTransactionCleanup",[t,i]),i._observers.has("update")){let h=new Os;G_(h,t)&&i.emit("update",[h.toUint8Array(),t.origin,i,t])}if(i._observers.has("updateV2")){let h=new er;G_(h,t)&&i.emit("updateV2",[h.toUint8Array(),t.origin,i,t])}let{subdocsAdded:a,subdocsLoaded:c,subdocsRemoved:l}=t;(a.size>0||l.size>0||c.size>0)&&(a.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),l.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:c,added:a,removed:l},i,t]),l.forEach(h=>h.destroy())),n.length<=e+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):sv(n,e+1)}}},ot=(n,e,t=null,i=!0)=>{let r=n._transactionCleanups,s=!1,o=null;n._transaction===null&&(s=!0,n._transaction=new qp(n,t,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{o=e(n._transaction)}finally{if(s){let a=n._transaction===r[0];n._transaction=null,a&&sv(r,0)}}return o};function*JP(n){let e=Ve(n.restDecoder);for(let t=0;t<e;t++){let i=Ve(n.restDecoder),r=n.readClient(),s=Ve(n.restDecoder);for(let o=0;o<i;o++){let a=n.readInfo();if(a===10){let c=Ve(n.restDecoder);yield new Mn(je(r,s),c),s+=c}else if((31&a)!==0){let c=(a&192)===0,l=new Vt(je(r,s),null,(a&128)===128?n.readLeftID():null,null,(a&64)===64?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(a&32)===32?n.readString():null,Sv(n,a));yield l,s+=l.length}else{let c=n.readLen();yield new Sn(je(r,s),c),s+=c}}}}var bc=class{constructor(e,t){this.gen=JP(e),this.curr=null,this.done=!1,this.filterSkips=t,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Mn);return this.curr}};var wc=class{constructor(e){this.currClient=0,this.startClock=0,this.written=0,this.encoder=e,this.clientStructs=[]}},KP=n=>su(n,iu,Os);var ZP=(n,e)=>{if(n.constructor===Sn){let{client:t,clock:i}=n.id;return new Sn(je(t,i+e),n.length-e)}else if(n.constructor===Mn){let{client:t,clock:i}=n.id;return new Mn(je(t,i+e),n.length-e)}else{let t=n,{client:i,clock:r}=t.id;return new Vt(je(i,r+e),null,je(i,r+e-1),null,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e))}},su=(n,e=Hr,t=er)=>{if(n.length===1)return n[0];let i=n.map(h=>new e(Is(h))),r=i.map(h=>new bc(h,!0)),s=null,o=new t,a=new wc(o);for(;r=r.filter(d=>d.curr!==null),r.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){let g=d.curr.id.clock-f.curr.id.clock;return g===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===Mn?1:-1:g}else return f.curr.id.client-d.curr.id.client}),r.length!==0;){let h=r[0],u=h.curr.id.client;if(s!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(u!==s.struct.id.client)Br(a,s.struct,s.offset),s={struct:d,offset:0},h.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===Mn)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{Br(a,s.struct,s.offset);let g=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new Mn(je(u,s.struct.id.clock+s.struct.length),g),offset:0}}else{let g=s.struct.id.clock+s.struct.length-d.id.clock;g>0&&(s.struct.constructor===Mn?s.struct.length-=g:d=ZP(d,g)),s.struct.mergeWith(d)||(Br(a,s.struct,s.offset),s={struct:d,offset:0},h.next())}}else s={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==Mn;d=h.next())Br(a,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(Br(a,s.struct,s.offset),s=null),om(a);let c=i.map(h=>im(h)),l=UP(c);return ra(o,l),o.toUint8Array()},QP=(n,e,t=Hr,i=er)=>{let r=tv(e),s=new i,o=new wc(s),a=new t(Is(n)),c=new bc(a,!1);for(;c.curr;){let h=c.curr,u=h.id.client,d=r.get(u)||0;if(c.curr.constructor===Mn){c.next();continue}if(h.id.clock+h.length>d)for(Br(o,h,Qi(d-h.id.clock,0)),c.next();c.curr&&c.curr.id.client===u;)Br(o,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===u&&c.curr.id.clock+c.curr.length<=d;)c.next()}om(o);let l=im(a);return ra(s,l),s.toUint8Array()};var ov=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:ri(n.encoder.restEncoder)}),n.encoder.restEncoder=ic(),n.written=0)},Br=(n,e,t)=>{n.written>0&&n.currClient!==e.id.client&&ov(n),n.written===0&&(n.currClient=e.id.client,n.encoder.writeClient(e.id.client),Je(n.encoder.restEncoder,e.id.clock+t)),e.write(n.encoder,t),n.written++},om=n=>{ov(n);let e=n.encoder.restEncoder;Je(e,n.clientStructs.length);for(let t=0;t<n.clientStructs.length;t++){let i=n.clientStructs[t];Je(e,i.written),rc(e,i.restEncoder)}},e2=(n,e,t,i)=>{let r=new t(Is(n)),s=new bc(r,!1),o=new i,a=new wc(o);for(let l=s.curr;l!==null;l=s.next())Br(a,e(l),0);om(a);let c=im(r);return ra(o,c),o.toUint8Array()};var t2=n=>e2(n,h_,Hr,Os),X_="You must not compute changes after the event-handler fired.",ta=class{constructor(e,t){this.target=e,this.currentTarget=e,this.transaction=t,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=n2(this.currentTarget,this.target))}deletes(e){return J_(this.transaction.deleteSet,e.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Dn(X_);let e=new Map,t=this.target;this.transaction.changed.get(t).forEach(r=>{if(r!==null){let s=t._map.get(r),o,a;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))o="delete",a=wh(c.content.getContent());else return;else c!==null&&this.deletes(c)?(o="update",a=wh(c.content.getContent())):(o="add",a=void 0)}else if(this.deletes(s))o="delete",a=wh(s.content.getContent());else return;e.set(r,{action:o,oldValue:a})}}),this._keys=e}return this._keys}get delta(){return this.changes.delta}adds(e){return e.id.clock>=(this.transaction.beforeState.get(e.id.client)||0)}get changes(){let e=this._changes;if(e===null){if(this.transaction.doc._transactionCleanups.length===0)throw Dn(X_);let t=this.target,i=Ki(),r=Ki(),s=[];if(e={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(t).has(null)){let a=null,c=()=>{a&&s.push(a)};for(let l=t._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((a===null||a.delete===void 0)&&(c(),a={delete:0}),a.delete+=l.length,r.add(l)):this.adds(l)?((a===null||a.insert===void 0)&&(c(),a={insert:[]}),a.insert=a.insert.concat(l.content.getContent()),i.add(l)):((a===null||a.retain===void 0)&&(c(),a={retain:0}),a.retain+=l.length);a!==null&&a.retain===void 0&&c()}this._changes=e}return e}},n2=(n,e)=>{let t=[];for(;e._item!==null&&e!==n;){if(e._item.parentSub!==null)t.unshift(e._item.parentSub);else{let i=0,r=e._item.parent._start;for(;r!==e._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;t.unshift(i)}e=e._item.parent}return t},tn=()=>{L_("Invalid access: Add Yjs type to a document before reading data.")},av=80,am=0,Yp=class{constructor(e,t){e.marker=!0,this.p=e,this.index=t,this.timestamp=am++}},i2=n=>{n.timestamp=am++},cv=(n,e,t)=>{n.p.marker=!1,n.p=e,e.marker=!0,n.index=t,n.timestamp=am++},r2=(n,e,t)=>{if(n.length>=av){let i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return cv(i,e,t),i}else{let i=new Yp(e,t);return n.push(i),i}},du=(n,e)=>{if(n._start===null||e===0||n._searchMarker===null)return null;let t=n._searchMarker.length===0?null:n._searchMarker.reduce((s,o)=>Ms(e-s.index)<Ms(e-o.index)?s:o),i=n._start,r=0;for(t!==null&&(i=t.p,r=t.index,i2(t));i.right!==null&&r<e;){if(!i.deleted&&i.countable){if(e<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>e;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return t!==null&&Ms(t.index-r)<i.parent.length/av?(cv(t,i,r),t):r2(n._searchMarker,i,r)},Sc=(n,e,t)=>{for(let i=n.length-1;i>=0;i--){let r=n[i];if(t>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(e<r.index||t>0&&e===r.index)&&(r.index=Qi(e,r.index+t))}};var fu=(n,e,t)=>{let i=n,r=e.changedParentTypes;for(;vi(r,n,()=>[]).push(t),n._item!==null;)n=n._item.parent;nv(i._eH,t,e)},Lt=class{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=B_(),this._dEH=B_(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(e,t){this.doc=e,this._item=t}_copy(){throw Un()}clone(){throw Un()}_write(e){}get _first(){let e=this._start;for(;e!==null&&e.deleted;)e=e.right;return e}_callObserver(e,t){!e.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(e){F_(this._eH,e)}observeDeep(e){F_(this._dEH,e)}unobserve(e){V_(this._eH,e)}unobserveDeep(e){V_(this._dEH,e)}toJSON(){}},lv=(n,e,t)=>{n.doc??tn(),e<0&&(e=n._length+e),t<0&&(t=n._length+t);let i=t-e,r=[],s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){let o=s.content.getContent();if(o.length<=e)e-=o.length;else{for(let a=e;a<o.length&&i>0;a++)r.push(o[a]),i--;e=0}}s=s.right}return r},hv=n=>{n.doc??tn();let e=[],t=n._start;for(;t!==null;){if(t.countable&&!t.deleted){let i=t.content.getContent();for(let r=0;r<i.length;r++)e.push(i[r])}t=t.right}return e};var Mc=(n,e)=>{let t=0,i=n._start;for(n.doc??tn();i!==null;){if(i.countable&&!i.deleted){let r=i.content.getContent();for(let s=0;s<r.length;s++)e(r[s],t++,n)}i=i.right}},uv=(n,e)=>{let t=[];return Mc(n,(i,r)=>{t.push(e(i,r,n))}),t},s2=n=>{let e=n._start,t=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(t===null){for(;e!==null&&e.deleted;)e=e.right;if(e===null)return{done:!0,value:void 0};t=e.content.getContent(),i=0,e=e.right}let r=t[i++];return t.length<=i&&(t=null),{done:!1,value:r}}}},dv=(n,e)=>{n.doc??tn();let t=du(n,e),i=n._start;for(t!==null&&(i=t.p,e-=t.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(e<i.length)return i.content.getContent()[e];e-=i.length}},ou=(n,e,t,i)=>{let r=t,s=n.doc,o=s.clientID,a=s.store,c=t===null?e._start:t.right,l=[],h=()=>{l.length>0&&(r=new Vt(je(o,Ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new ia(l)),r.integrate(n,0),l=[])};i.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:r=new Vt(je(o,Ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new Rc(new Uint8Array(u))),r.integrate(n,0);break;case Ns:r=new Vt(je(o,Ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new Pc(u)),r.integrate(n,0);break;default:if(u instanceof Lt)r=new Vt(je(o,Ft(a,o)),r,r&&r.lastId,c,c&&c.id,e,null,new nr(u)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},fv=()=>Dn("Length exceeded!"),pv=(n,e,t,i)=>{if(t>e._length)throw fv();if(t===0)return e._searchMarker&&Sc(e._searchMarker,t,i.length),ou(n,e,null,i);let r=t,s=du(e,t),o=e._start;for(s!==null&&(o=s.p,t-=s.index,t===0&&(o=o.prev,t+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(t<=o.length){t<o.length&&Gr(n,je(o.id.client,o.id.clock+t));break}t-=o.length}return e._searchMarker&&Sc(e._searchMarker,r,i.length),ou(n,e,o,i)},o2=(n,e,t)=>{let r=(e._searchMarker||[]).reduce((s,o)=>o.index>s.index?o:s,{index:0,p:e._start}).p;if(r)for(;r.right;)r=r.right;return ou(n,e,r,t)},mv=(n,e,t,i)=>{if(i===0)return;let r=t,s=i,o=du(e,t),a=e._start;for(o!==null&&(a=o.p,t-=o.index);a!==null&&t>0;a=a.right)!a.deleted&&a.countable&&(t<a.length&&Gr(n,je(a.id.client,a.id.clock+t)),t-=a.length);for(;i>0&&a!==null;)a.deleted||(i<a.length&&Gr(n,je(a.id.client,a.id.clock+i)),a.delete(n),i-=a.length),a=a.right;if(i>0)throw fv();e._searchMarker&&Sc(e._searchMarker,r,-s+i)},au=(n,e,t)=>{let i=e._map.get(t);i!==void 0&&i.delete(n)},cm=(n,e,t,i)=>{let r=e._map.get(t)||null,s=n.doc,o=s.clientID,a;if(i==null)a=new ia([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:a=new ia([i]);break;case Uint8Array:a=new Rc(i);break;case Ns:a=new Pc(i);break;default:if(i instanceof Lt)a=new nr(i);else throw new Error("Unexpected content type")}new Vt(je(o,Ft(s.store,o)),r,r&&r.lastId,null,null,e,t,a).integrate(n,0)},lm=(n,e)=>{n.doc??tn();let t=n._map.get(e);return t!==void 0&&!t.deleted?t.content.getContent()[t.length-1]:void 0},gv=n=>{let e={};return n.doc??tn(),n._map.forEach((t,i)=>{t.deleted||(e[i]=t.content.getContent()[t.length-1])}),e},xv=(n,e)=>{n.doc??tn();let t=n._map.get(e);return t!==void 0&&!t.deleted};var a2=(n,e)=>{let t={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!e.sv.has(s.id.client)||s.id.clock>=(e.sv.get(s.id.client)||0));)s=s.left;s!==null&&ea(s,e)&&(t[r]=s.content.getContent()[s.length-1])}),t},Kh=n=>(n.doc??tn(),N_(n._map.entries(),e=>!e[1].deleted)),$p=class extends ta{},cu=class n extends Lt{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(e){let t=new n;return t.push(e),t}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let e=new n;return e.insert(0,this.toArray().map(t=>t instanceof Lt?t.clone():t)),e}get length(){return this.doc??tn(),this._length}_callObserver(e,t){super._callObserver(e,t),fu(this,e,new $p(this,e))}insert(e,t){this.doc!==null?ot(this.doc,i=>{pv(i,this,e,t)}):this._prelimContent.splice(e,0,...t)}push(e){this.doc!==null?ot(this.doc,t=>{o2(t,this,e)}):this._prelimContent.push(...e)}unshift(e){this.insert(0,e)}delete(e,t=1){this.doc!==null?ot(this.doc,i=>{mv(i,this,e,t)}):this._prelimContent.splice(e,t)}get(e){return dv(this,e)}toArray(){return hv(this)}slice(e=0,t=this.length){return lv(this,e,t)}toJSON(){return this.map(e=>e instanceof Lt?e.toJSON():e)}map(e){return uv(this,e)}forEach(e){Mc(this,e)}[Symbol.iterator](){return s2(this)}_write(e){e.writeTypeRef(R2)}},c2=n=>new cu,jp=class extends ta{constructor(e,t,i){super(e,t),this.keysChanged=i}},ks=class n extends Lt{constructor(e){super(),this._prelimContent=null,e===void 0?this._prelimContent=new Map:this._prelimContent=new Map(e)}_integrate(e,t){super._integrate(e,t),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new n}clone(){let e=new n;return this.forEach((t,i)=>{e.set(i,t instanceof Lt?t.clone():t)}),e}_callObserver(e,t){fu(this,e,new jp(this,e,t))}toJSON(){this.doc??tn();let e={};return this._map.forEach((t,i)=>{if(!t.deleted){let r=t.content.getContent()[t.length-1];e[i]=r instanceof Lt?r.toJSON():r}}),e}get size(){return[...Kh(this)].length}keys(){return jh(Kh(this),e=>e[0])}values(){return jh(Kh(this),e=>e[1].content.getContent()[e[1].length-1])}entries(){return jh(Kh(this),e=>[e[0],e[1].content.getContent()[e[1].length-1]])}forEach(e){this.doc??tn(),this._map.forEach((t,i)=>{t.deleted||e(t.content.getContent()[t.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(e){this.doc!==null?ot(this.doc,t=>{au(t,this,e)}):this._prelimContent.delete(e)}set(e,t){return this.doc!==null?ot(this.doc,i=>{cm(i,this,e,t)}):this._prelimContent.set(e,t),t}get(e){return lm(this,e)}has(e){return xv(this,e)}clear(){this.doc!==null?ot(this.doc,e=>{this.forEach(function(t,i,r){au(e,r,i)})}):this._prelimContent.clear()}_write(e){e.writeTypeRef(P2)}},l2=n=>new ks,Fr=(n,e)=>n===e||typeof n=="object"&&typeof e=="object"&&n&&e&&mp(n,e),Ec=class{constructor(e,t,i,r){this.left=e,this.right=t,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&bn(),this.right.content.constructor){case Dt:this.right.deleted||sa(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}},q_=(n,e,t)=>{for(;e.right!==null&&t>0;){switch(e.right.content.constructor){case Dt:e.right.deleted||sa(e.currentAttributes,e.right.content);break;default:e.right.deleted||(t<e.right.length&&Gr(n,je(e.right.id.client,e.right.id.clock+t)),e.index+=e.right.length,t-=e.right.length);break}e.left=e.right,e.right=e.right.right}return e},Zh=(n,e,t,i)=>{let r=new Map,s=i?du(e,t):null;if(s){let o=new Ec(s.p.left,s.p,s.index,r);return q_(n,o,t-s.index)}else{let o=new Ec(null,e._start,0,r);return q_(n,o,t)}},yv=(n,e,t,i)=>{for(;t.right!==null&&(t.right.deleted===!0||t.right.content.constructor===Dt&&Fr(i.get(t.right.content.key),t.right.content.value));)t.right.deleted||i.delete(t.right.content.key),t.forward();let r=n.doc,s=r.clientID;i.forEach((o,a)=>{let c=t.left,l=t.right,h=new Vt(je(s,Ft(r.store,s)),c,c&&c.lastId,l,l&&l.id,e,null,new Dt(a,o));h.integrate(n,0),t.right=h,t.forward()})},sa=(n,e)=>{let{key:t,value:i}=e;i===null?n.delete(t):n.set(t,i)},_v=(n,e)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===Dt&&Fr(e[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},vv=(n,e,t,i)=>{let r=n.doc,s=r.clientID,o=new Map;for(let a in i){let c=i[a],l=t.currentAttributes.get(a)??null;if(!Fr(l,c)){o.set(a,l);let{left:h,right:u}=t;t.right=new Vt(je(s,Ft(r.store,s)),h,h&&h.lastId,u,u&&u.id,e,null,new Dt(a,c)),t.right.integrate(n,0),t.forward()}}return o},zp=(n,e,t,i,r)=>{t.currentAttributes.forEach((d,f)=>{r[f]===void 0&&(r[f]=null)});let s=n.doc,o=s.clientID;_v(t,r);let a=vv(n,e,t,r),c=i.constructor===String?new tr(i):i instanceof Lt?new nr(i):new zs(i),{left:l,right:h,index:u}=t;e._searchMarker&&Sc(e._searchMarker,t.index,c.getLength()),h=new Vt(je(o,Ft(s.store,o)),l,l&&l.lastId,h,h&&h.id,e,null,c),h.integrate(n,0),t.right=h,t.index=u,t.forward(),yv(n,e,t,a)},Y_=(n,e,t,i,r)=>{let s=n.doc,o=s.clientID;_v(t,r);let a=vv(n,e,t,r);e:for(;t.right!==null&&(i>0||a.size>0&&(t.right.deleted||t.right.content.constructor===Dt));){if(!t.right.deleted)switch(t.right.content.constructor){case Dt:{let{key:c,value:l}=t.right.content,h=r[c];if(h!==void 0){if(Fr(h,l))a.delete(c);else{if(i===0)break e;a.set(c,l)}t.right.delete(n)}else t.currentAttributes.set(c,l);break}default:i<t.right.length&&Gr(n,je(t.right.id.client,t.right.id.clock+i)),i-=t.right.length;break}t.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;t.right=new Vt(je(o,Ft(s.store,o)),t.left,t.left&&t.left.lastId,t.right,t.right&&t.right.id,e,null,new tr(c)),t.right.integrate(n,0),t.forward()}yv(n,e,t,a)},bv=(n,e,t,i,r)=>{let s=e,o=mn();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===Dt){let l=s.content;o.set(l.key,l)}s=s.right}let a=0,c=!1;for(;e!==s;){if(t===e&&(c=!0),!e.deleted){let l=e.content;switch(l.constructor){case Dt:{let{key:h,value:u}=l,d=i.get(h)??null;(o.get(h)!==l||d===u)&&(e.delete(n),a++,!c&&(r.get(h)??null)===u&&d!==u&&(d===null?r.delete(h):r.set(h,d))),!c&&!e.deleted&&sa(r,l);break}}}e=e.right}return a},h2=(n,e)=>{for(;e&&e.right&&(e.right.deleted||!e.right.countable);)e=e.right;let t=new Set;for(;e&&(e.deleted||!e.countable);){if(!e.deleted&&e.content.constructor===Dt){let i=e.content.key;t.has(i)?e.delete(n):t.add(i)}e=e.left}},u2=n=>{let e=0;return ot(n.doc,t=>{let i=n._start,r=n._start,s=mn(),o=bh(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case Dt:sa(o,r.content);break;default:e+=bv(t,i,r,s,o),s=bh(o),i=r;break}r=r.right}}),e},d2=n=>{let e=new Set,t=n.doc;for(let[i,r]of n.afterState.entries()){let s=n.beforeState.get(i)||0;r!==s&&rv(n,t.store.clients.get(i),s,r,o=>{!o.deleted&&o.content.constructor===Dt&&o.constructor!==Sn&&e.add(o.parent)})}ot(t,i=>{j_(n,n.deleteSet,r=>{if(r instanceof Sn||!r.parent._hasFormatting||e.has(r.parent))return;let s=r.parent;r.content.constructor===Dt?e.add(s):h2(i,r)});for(let r of e)u2(r)})},$_=(n,e,t)=>{let i=t,r=bh(e.currentAttributes),s=e.right;for(;t>0&&e.right!==null;){if(e.right.deleted===!1)switch(e.right.content.constructor){case nr:case zs:case tr:t<e.right.length&&Gr(n,je(e.right.id.client,e.right.id.clock+t)),t-=e.right.length,e.right.delete(n);break}e.forward()}s&&bv(n,s,e.right,r,e.currentAttributes);let o=(e.left||e.right).parent;return o._searchMarker&&Sc(o._searchMarker,e.index,-i+t),e},Jp=class extends ta{constructor(e,t,i){super(e,t),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){let e={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=e}return this._changes}get delta(){if(this._delta===null){let e=this.target.doc,t=[];ot(e,i=>{let r=new Map,s=new Map,o=this.target._start,a=null,c={},l="",h=0,u=0,d=()=>{if(a!==null){let f=null;switch(a){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(f={insert:l},r.size>0&&(f.attributes={},r.forEach((g,x)=>{g!==null&&(f.attributes[x]=g)}))),l="";break;case"retain":h>0&&(f={retain:h},l_(c)||(f.attributes=a_({},c))),h=0;break}f&&t.push(f),a=null}};for(;o!==null;){switch(o.content.constructor){case nr:case zs:this.adds(o)?this.deletes(o)||(d(),a="insert",l=o.content.getContent()[0],d()):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=1):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=1);break;case tr:this.adds(o)?this.deletes(o)||(a!=="insert"&&(d(),a="insert"),l+=o.content.str):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=o.length):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=o.length);break;case Dt:{let{key:f,value:g}=o.content;if(this.adds(o)){if(!this.deletes(o)){let x=r.get(f)??null;Fr(x,g)?g!==null&&o.delete(i):(a==="retain"&&d(),Fr(g,s.get(f)??null)?delete c[f]:c[f]=g)}}else if(this.deletes(o)){s.set(f,g);let x=r.get(f)??null;Fr(x,g)||(a==="retain"&&d(),c[f]=x)}else if(!o.deleted){s.set(f,g);let x=c[f];x!==void 0&&(Fr(x,g)?x!==null&&o.delete(i):(a==="retain"&&d(),g===null?delete c[f]:c[f]=g))}o.deleted||(a==="insert"&&d(),sa(r,o.content));break}}o=o.right}for(d();t.length>0;){let f=t[t.length-1];if(f.retain!==void 0&&f.attributes===void 0)t.pop();else break}}),this._delta=t}return this._delta}},Tc=class n extends Lt{constructor(e){super(),this._pending=e!==void 0?[()=>this.insert(0,e)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??tn(),this._length}_integrate(e,t){super._integrate(e,t);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new n}clone(){let e=new n;return e.applyDelta(this.toDelta()),e}_callObserver(e,t){super._callObserver(e,t);let i=new Jp(this,e,t);fu(this,e,i),!e.local&&this._hasFormatting&&(e._needFormattingCleanup=!0)}toString(){this.doc??tn();let e="",t=this._start;for(;t!==null;)!t.deleted&&t.countable&&t.content.constructor===tr&&(e+=t.content.str),t=t.right;return e}toJSON(){return this.toString()}applyDelta(e,{sanitize:t=!0}={}){this.doc!==null?ot(this.doc,i=>{let r=new Ec(null,this._start,0,new Map);for(let s=0;s<e.length;s++){let o=e[s];if(o.insert!==void 0){let a=!t&&typeof o.insert=="string"&&s===e.length-1&&r.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&zp(i,this,r,a,o.attributes||{})}else o.retain!==void 0?Y_(i,this,r,o.retain,o.attributes||{}):o.delete!==void 0&&$_(i,r,o.delete)}}):this._pending.push(()=>this.applyDelta(e))}toDelta(e,t,i){this.doc??tn();let r=[],s=new Map,o=this.doc,a="",c=this._start;function l(){if(a.length>0){let u={},d=!1;s.forEach((g,x)=>{d=!0,u[x]=g});let f={insert:a};d&&(f.attributes=u),r.push(f),a=""}}let h=()=>{for(;c!==null;){if(ea(c,e)||t!==void 0&&ea(c,t))switch(c.content.constructor){case tr:{let u=s.get("ychange");e!==void 0&&!ea(c,e)?(u===void 0||u.user!==c.id.client||u.type!=="removed")&&(l(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):t!==void 0&&!ea(c,t)?(u===void 0||u.user!==c.id.client||u.type!=="added")&&(l(),s.set("ychange",i?i("added",c.id):{type:"added"})):u!==void 0&&(l(),s.delete("ychange")),a+=c.content.str;break}case nr:case zs:{l();let u={insert:c.content.getContent()[0]};if(s.size>0){let d={};u.attributes=d,s.forEach((f,g)=>{d[g]=f})}r.push(u);break}case Dt:ea(c,e)&&(l(),sa(s,c.content));break}c=c.right}l()};return e||t?ot(o,u=>{e&&Wp(u,e),t&&Wp(u,t),h()},"cleanup"):h(),r}insert(e,t,i){if(t.length<=0)return;let r=this.doc;r!==null?ot(r,s=>{let o=Zh(s,this,e,!i);i||(i={},o.currentAttributes.forEach((a,c)=>{i[c]=a})),zp(s,this,o,t,i)}):this._pending.push(()=>this.insert(e,t,i))}insertEmbed(e,t,i){let r=this.doc;r!==null?ot(r,s=>{let o=Zh(s,this,e,!i);zp(s,this,o,t,i||{})}):this._pending.push(()=>this.insertEmbed(e,t,i||{}))}delete(e,t){if(t===0)return;let i=this.doc;i!==null?ot(i,r=>{$_(r,Zh(r,this,e,!0),t)}):this._pending.push(()=>this.delete(e,t))}format(e,t,i){if(t===0)return;let r=this.doc;r!==null?ot(r,s=>{let o=Zh(s,this,e,!1);o.right!==null&&Y_(s,this,o,t,i)}):this._pending.push(()=>this.format(e,t,i))}removeAttribute(e){this.doc!==null?ot(this.doc,t=>{au(t,this,e)}):this._pending.push(()=>this.removeAttribute(e))}setAttribute(e,t){this.doc!==null?ot(this.doc,i=>{cm(i,this,e,t)}):this._pending.push(()=>this.setAttribute(e,t))}getAttribute(e){return lm(this,e)}getAttributes(){return gv(this)}_write(e){e.writeTypeRef(I2)}},f2=n=>new Tc,_c=class{constructor(e,t=()=>!0){this._filter=t,this._root=e,this._currentNode=e._start,this._firstCall=!0,e.doc??tn()}[Symbol.iterator](){return this}next(){let e=this._currentNode,t=e&&e.content&&e.content.type;if(e!==null&&(!this._firstCall||e.deleted||!this._filter(t)))do if(t=e.content.type,!e.deleted&&(t.constructor===Ac||t.constructor===na)&&t._start!==null)e=t._start;else for(;e!==null;)if(e.right!==null){e=e.right;break}else e.parent===this._root?e=null:e=e.parent._item;while(e!==null&&(e.deleted||!this._filter(e.content.type)));return this._firstCall=!1,e===null?{value:void 0,done:!0}:(this._currentNode=e,{value:e.content.type,done:!1})}},na=class n extends Lt{constructor(){super(),this._prelimContent=[]}get firstChild(){let e=this._first;return e?e.content.getContent()[0]:null}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let e=new n;return e.insert(0,this.toArray().map(t=>t instanceof Lt?t.clone():t)),e}get length(){return this.doc??tn(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(e){return new _c(this,e)}querySelector(e){e=e.toUpperCase();let i=new _c(this,r=>r.nodeName&&r.nodeName.toUpperCase()===e).next();return i.done?null:i.value}querySelectorAll(e){return e=e.toUpperCase(),Zi(new _c(this,t=>t.nodeName&&t.nodeName.toUpperCase()===e))}_callObserver(e,t){fu(this,e,new Kp(this,t,e))}toString(){return uv(this,e=>e.toString()).join("")}toJSON(){return this.toString()}toDOM(e=document,t={},i){let r=e.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Mc(this,s=>{r.insertBefore(s.toDOM(e,t,i),null)}),r}insert(e,t){this.doc!==null?ot(this.doc,i=>{pv(i,this,e,t)}):this._prelimContent.splice(e,0,...t)}insertAfter(e,t){if(this.doc!==null)ot(this.doc,i=>{let r=e&&e instanceof Lt?e._item:e;ou(i,this,r,t)});else{let i=this._prelimContent,r=e===null?0:i.findIndex(s=>s===e)+1;if(r===0&&e!==null)throw Dn("Reference item not found");i.splice(r,0,...t)}}delete(e,t=1){this.doc!==null?ot(this.doc,i=>{mv(i,this,e,t)}):this._prelimContent.splice(e,t)}toArray(){return hv(this)}push(e){this.insert(this.length,e)}unshift(e){this.insert(0,e)}get(e){return dv(this,e)}slice(e=0,t=this.length){return lv(this,e,t)}forEach(e){Mc(this,e)}_write(e){e.writeTypeRef(D2)}},p2=n=>new na,Ac=class n extends na{constructor(e="UNDEFINED"){super(),this.nodeName=e,this._prelimAttrs=new Map}get nextSibling(){let e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){let e=this._item?this._item.prev:null;return e?e.content.type:null}_integrate(e,t){super._integrate(e,t),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new n(this.nodeName)}clone(){let e=new n(this.nodeName),t=this.getAttributes();return c_(t,(i,r)=>{typeof i=="string"&&e.setAttribute(r,i)}),e.insert(0,this.toArray().map(i=>i instanceof Lt?i.clone():i)),e}toString(){let e=this.getAttributes(),t=[],i=[];for(let a in e)i.push(a);i.sort();let r=i.length;for(let a=0;a<r;a++){let c=i[a];t.push(c+'="'+e[c]+'"')}let s=this.nodeName.toLocaleLowerCase(),o=t.length>0?" "+t.join(" "):"";return`<${s}${o}>${super.toString()}</${s}>`}removeAttribute(e){this.doc!==null?ot(this.doc,t=>{au(t,this,e)}):this._prelimAttrs.delete(e)}setAttribute(e,t){this.doc!==null?ot(this.doc,i=>{cm(i,this,e,t)}):this._prelimAttrs.set(e,t)}getAttribute(e){return lm(this,e)}hasAttribute(e){return xv(this,e)}getAttributes(e){return e?a2(this,e):gv(this)}toDOM(e=document,t={},i){let r=e.createElement(this.nodeName),s=this.getAttributes();for(let o in s){let a=s[o];typeof a=="string"&&r.setAttribute(o,a)}return Mc(this,o=>{r.appendChild(o.toDOM(e,t,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(e){e.writeTypeRef(L2),e.writeKey(this.nodeName)}},m2=n=>new Ac(n.readKey()),Kp=class extends ta{constructor(e,t,i){super(e,i),this.childListChanged=!1,this.attributesChanged=new Set,t.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}},Zp=class n extends ks{constructor(e){super(),this.hookName=e}_copy(){return new n(this.hookName)}clone(){let e=new n(this.hookName);return this.forEach((t,i)=>{e.set(i,t)}),e}toDOM(e=document,t={},i){let r=t[this.hookName],s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(e){e.writeTypeRef(U2),e.writeKey(this.hookName)}},g2=n=>new Zp(n.readKey()),Qp=class n extends Tc{get nextSibling(){let e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){let e=this._item?this._item.prev:null;return e?e.content.type:null}_copy(){return new n}clone(){let e=new n;return e.applyDelta(this.toDelta()),e}toDOM(e=document,t,i){let r=e.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(e=>{let t=[];for(let r in e.attributes){let s=[];for(let o in e.attributes[r])s.push({key:o,value:e.attributes[r][o]});s.sort((o,a)=>o.key<a.key?-1:1),t.push({nodeName:r,attrs:s})}t.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<t.length;r++){let s=t[r];i+=`<${s.nodeName}`;for(let o=0;o<s.attrs.length;o++){let a=s.attrs[o];i+=` ${a.key}="${a.value}"`}i+=">"}i+=e.insert;for(let r=t.length-1;r>=0;r--)i+=`</${t[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(e){e.writeTypeRef(N2)}},x2=n=>new Qp,Cc=class{constructor(e,t){this.id=e,this.length=t}get deleted(){throw Un()}mergeWith(e){return!1}write(e,t,i){throw Un()}integrate(e,t){throw Un()}},y2=0,Sn=class extends Cc{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){t>0&&(this.id.clock+=t,this.length-=t),iv(e.doc.store,this)}write(e,t){e.writeInfo(y2),e.writeLen(this.length-t)}getMissing(e,t){return null}},Rc=class n{constructor(e){this.content=e}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new n(this.content)}splice(e){throw Un()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeBuf(this.content)}getRef(){return 3}},_2=n=>new Rc(n.readBuf()),lu=class n{constructor(e){this.len=e}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.len)}splice(e){let t=new n(this.len-e);return this.len=e,t}mergeWith(e){return this.len+=e.len,!0}integrate(e,t){tu(e.deleteSet,t.id.client,t.id.clock,this.len),t.markDeleted()}delete(e){}gc(e){}write(e,t){e.writeLen(this.len-t)}getRef(){return 1}},v2=n=>new lu(n.readLen()),wv=(n,e)=>new Ns({guid:n,...e,shouldLoad:e.shouldLoad||e.autoLoad||!1}),Pc=class n{constructor(e){e._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=e;let t={};this.opts=t,e.gc||(t.gc=!1),e.autoLoad&&(t.autoLoad=!0),e.meta!==null&&(t.meta=e.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new n(wv(this.doc.guid,this.opts))}splice(e){throw Un()}mergeWith(e){return!1}integrate(e,t){this.doc._item=t,e.subdocsAdded.add(this.doc),this.doc.shouldLoad&&e.subdocsLoaded.add(this.doc)}delete(e){e.subdocsAdded.has(this.doc)?e.subdocsAdded.delete(this.doc):e.subdocsRemoved.add(this.doc)}gc(e){}write(e,t){e.writeString(this.doc.guid),e.writeAny(this.opts)}getRef(){return 9}},b2=n=>new Pc(wv(n.readString(),n.readAny())),zs=class n{constructor(e){this.embed=e}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new n(this.embed)}splice(e){throw Un()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeJSON(this.embed)}getRef(){return 5}},w2=n=>new zs(n.readJSON()),Dt=class n{constructor(e,t){this.key=e,this.value=t}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.key,this.value)}splice(e){throw Un()}mergeWith(e){return!1}integrate(e,t){let i=t.parent;i._searchMarker=null,i._hasFormatting=!0}delete(e){}gc(e){}write(e,t){e.writeKey(this.key),e.writeJSON(this.value)}getRef(){return 6}},S2=n=>new Dt(n.readKey(),n.readJSON()),em=class n{constructor(e){this.arr=e}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(e){let t=new n(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){let i=this.arr.length;e.writeLen(i-t);for(let r=t;r<i;r++){let s=this.arr[r];e.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}},M2=n=>{let e=n.readLen(),t=[];for(let i=0;i<e;i++){let r=n.readString();r==="undefined"?t.push(void 0):t.push(JSON.parse(r))}return new em(t)},E2=uc("node_env")==="development",ia=class n{constructor(e){this.arr=e,E2&&gp(e)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(e){let t=new n(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){let i=this.arr.length;e.writeLen(i-t);for(let r=t;r<i;r++){let s=this.arr[r];e.writeAny(s)}}getRef(){return 8}},T2=n=>{let e=n.readLen(),t=[];for(let i=0;i<e;i++)t.push(n.readAny());return new ia(t)},tr=class n{constructor(e){this.str=e}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new n(this.str)}splice(e){let t=new n(this.str.slice(e));this.str=this.str.slice(0,e);let i=this.str.charCodeAt(e-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,e-1)+"\uFFFD",t.str="\uFFFD"+t.str.slice(1)),t}mergeWith(e){return this.str+=e.str,!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeString(t===0?this.str:this.str.slice(t))}getRef(){return 4}},A2=n=>new tr(n.readString()),C2=[c2,l2,f2,m2,p2,g2,x2],R2=0,P2=1,I2=2,L2=3,D2=4,U2=5,N2=6,nr=class n{constructor(e){this.type=e}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new n(this.type._copy())}splice(e){throw Un()}mergeWith(e){return!1}integrate(e,t){this.type._integrate(e.doc,t)}delete(e){let t=this.type._start;for(;t!==null;)t.deleted?t.id.clock<(e.beforeState.get(t.id.client)||0)&&e._mergeStructs.push(t):t.delete(e),t=t.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(e.beforeState.get(i.id.client)||0)&&e._mergeStructs.push(i):i.delete(e)}),e.changed.delete(this.type)}gc(e){let t=this.type._start;for(;t!==null;)t.gc(e,!0),t=t.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(e,!0),i=i.left}),this.type._map=new Map}write(e,t){this.type._write(e)}getRef(){return 7}},O2=n=>new nr(C2[n.readTypeRef()](n));var hu=(n,e,t)=>{let{client:i,clock:r}=e.id,s=new Vt(je(i,r+t),e,je(i,r+t-1),e.right,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t));return e.deleted&&s.markDeleted(),e.keep&&(s.keep=!0),e.redone!==null&&(s.redone=je(e.redone.client,e.redone.clock+t)),e.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),e.length=t,s};var Vt=class n extends Cc{constructor(e,t,i,r,s,o,a,c){super(e,c.getLength()),this.origin=i,this.left=t,this.right=r,this.rightOrigin=s,this.parent=o,this.parentSub=a,this.redone=null,this.content=c,this.info=this.content.isCountable()?2:0}set marker(e){(this.info&8)>0!==e&&(this.info^=8)}get marker(){return(this.info&8)>0}get keep(){return(this.info&1)>0}set keep(e){this.keep!==e&&(this.info^=1)}get countable(){return(this.info&2)>0}get deleted(){return(this.info&4)>0}set deleted(e){this.deleted!==e&&(this.info^=4)}markDeleted(){this.info|=4}getMissing(e,t){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=Ft(t,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=Ft(t,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Vr&&this.id.client!==this.parent.client&&this.parent.clock>=Ft(t,this.parent.client))return this.parent.client;if(this.origin&&(this.left=H_(e,t,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=Gr(e,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Sn||this.right&&this.right.constructor===Sn)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===n&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===n&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Vr){let i=kp(t,this.parent);i.constructor===Sn?this.parent=null:this.parent=i.content.type}return null}integrate(e,t){if(t>0&&(this.id.clock+=t,this.left=H_(e,e.doc.store,je(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(t),this.length-=t),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;let s=new Set,o=new Set;for(;r!==null&&r!==this.right;){if(o.add(r),s.add(r),Jh(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(Jh(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&o.has(kp(e.doc.store,r.origin)))s.has(kp(e.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){let i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(e)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),iv(e.doc.store,this),this.content.integrate(e,this),W_(e,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(e)}else new Sn(this.id,this.length).integrate(e,0)}get next(){let e=this.right;for(;e!==null&&e.deleted;)e=e.right;return e}get prev(){let e=this.left;for(;e!==null&&e.deleted;)e=e.left;return e}get lastId(){return this.length===1?this.id:je(this.id.client,this.id.clock+this.length-1)}mergeWith(e){if(this.constructor===e.constructor&&Jh(e.origin,this.lastId)&&this.right===e&&Jh(this.rightOrigin,e.rightOrigin)&&this.id.client===e.id.client&&this.id.clock+this.length===e.id.clock&&this.deleted===e.deleted&&this.redone===null&&e.redone===null&&this.content.constructor===e.content.constructor&&this.content.mergeWith(e.content)){let t=this.parent._searchMarker;return t&&t.forEach(i=>{i.p===e&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),e.keep&&(this.keep=!0),this.right=e.right,this.right!==null&&(this.right.left=this),this.length+=e.length,!0}return!1}delete(e){if(!this.deleted){let t=this.parent;this.countable&&this.parentSub===null&&(t._length-=this.length),this.markDeleted(),tu(e.deleteSet,this.id.client,this.id.clock,this.length),W_(e,t,this.parentSub),this.content.delete(e)}}gc(e,t){if(!this.deleted)throw bn();this.content.gc(e),t?YP(e,this,new Sn(this.id,this.length)):this.content=new lu(this.length)}write(e,t){let i=t>0?je(this.id.client,this.id.clock+t-1):this.origin,r=this.rightOrigin,s=this.parentSub,o=this.content.getRef()&31|(i===null?0:128)|(r===null?0:64)|(s===null?0:32);if(e.writeInfo(o),i!==null&&e.writeLeftID(i),r!==null&&e.writeRightID(r),i===null&&r===null){let a=this.parent;if(a._item!==void 0){let c=a._item;if(c===null){let l=WP(a);e.writeParentInfo(!0),e.writeString(l)}else e.writeParentInfo(!1),e.writeLeftID(c.id)}else a.constructor===String?(e.writeParentInfo(!0),e.writeString(a)):a.constructor===Vr?(e.writeParentInfo(!1),e.writeLeftID(a)):bn();s!==null&&e.writeString(s)}this.content.write(e,t)}},Sv=(n,e)=>k2[e&31](n),k2=[()=>{bn()},v2,M2,_2,A2,w2,S2,O2,T2,b2,()=>{bn()}],z2=10,Mn=class extends Cc{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){bn()}write(e,t){e.writeInfo(z2),Je(e.restEncoder,this.length-t)}getMissing(e,t){return null}},Mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},Ev="__ $YJS$ __";Mv[Ev]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");Mv[Ev]=!0;var B2="nodes",F2="doc",Ic="",Av=n=>n.getMap(B2),Cv=n=>n.getMap(F2),V2=n=>n.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c]),H2=n=>n.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]})),ir=(n,e,t)=>n.get(e)===t?!1:(n.set(e,t),!0),G2=(n,e)=>{let t=V2(e),i=n.get("b");return i&&JSON.stringify(i)===JSON.stringify(t)?!1:(n.set("b",t),!0)};function W2(n){let e=[],t=(i,r,s)=>{e.push({node:i,parent:r,ord:s}),i.type==="scene"&&i.children.forEach((o,a)=>t(o,i.id,a))};return t(n,Ic,0),e}function um(n,e,t){let i=Av(n),r=W2(e),s=new Set(r.map(a=>a.node.id)),o=!1;return ot(n,()=>{let a=Cv(n);a.get("root")!==e.id&&(a.set("root",e.id),o=!0);for(let c of[...i.keys()])s.has(c)||(i.delete(c),o=!0);for(let c of r){let l=i.get(c.node.id);l||(l=new ks,i.set(c.node.id,l),o=!0);let h=c.node;o=ir(l,"t",h.type==="object"?"o":"s")||o,o=ir(l,"p",c.parent)||o,o=ir(l,"o",c.ord)||o,o=ir(l,"nm",h.name)||o,o=ir(l,"px",h.pos.x)||o,o=ir(l,"py",h.pos.y)||o,o=ir(l,"pz",h.pos.z)||o,o=ir(l,"r",h.rot)||o,o=ir(l,"vs",h.vis)||o,h.type==="object"&&(o=G2(l,h.boxes)||o)}},t),o}var X2=n=>((typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):0)%4+4)%4,hm=n=>typeof n=="number"&&Number.isFinite(n)?Math.round(n):0,q2=n=>typeof n=="number"&&Number.isFinite(n)?n:0,Y2=["visible","deemphasized","hidden"],$2=n=>Y2.includes(n)?n:"visible";function j2(n,e){let t=new Map(n);for(let i of t.keys()){let r=new Set([i]),s=i;for(;;){let o=t.get(s);if(o===void 0||o===Ic||!t.has(o))break;if(r.has(o)){let a=[o];for(let l=t.get(o);l!==o;l=t.get(l))a.push(l);a.sort();let c=a[a.length-1];t.set(c,c===e?Ic:e);break}r.add(o),s=o}}return t}var J2=(n,e)=>n[1]-e[1]||(n[0]<e[0]?-1:n[0]>e[0]?1:0);function oa(n){let e=Av(n),t=new Map;if(e.forEach((c,l)=>{let h=c.get("p");t.set(l,typeof h=="string"?h:Ic)}),!t.size)return null;let i=Cv(n).get("root")??"";if(e.has(i)||(i=[...t].find(([,c])=>c===Ic)?.[0]??""),!i)return null;let r=j2(t,i),s=new Map;for(let[c,l]of r){if(c===i)continue;let h=q2(e.get(c)?.get("o")),u=s.get(l);u?u.push([c,h]):s.set(l,[[c,h]])}for(let c of s.values())c.sort(J2);let o=c=>{let l=e.get(c);if(!l)return null;let h={id:c,name:typeof l.get("nm")=="string"?l.get("nm"):"",pos:{x:hm(l.get("px")),y:hm(l.get("py")),z:hm(l.get("pz"))},rot:X2(l.get("r")),vis:$2(l.get("vs"))};if(l.get("t")==="o"){let u=l.get("b");return{type:"object",...h,boxes:Array.isArray(u)?H2(u):[]}}return{type:"scene",...h,children:(s.get(c)??[]).map(([u])=>o(u)).filter(u=>u!==null)}},a=o(i);return a&&a.type==="scene"?a:null}var Lc=()=>new Ns;function Rv(n){let e=Lc();return um(e,n),e}var pu=n=>ev(n);var K2="voxelier";var Dc="meta",Uc="data",aa=null;function Z2(){return aa||(aa=new Promise((n,e)=>{let t=indexedDB.open(K2,1);t.onupgradeneeded=()=>{let i=t.result;i.objectStoreNames.contains(Dc)||i.createObjectStore(Dc),i.objectStoreNames.contains(Uc)||i.createObjectStore(Uc)},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),aa.catch(()=>{aa=null}),aa)}function ca(n,e,t){return Z2().then(i=>new Promise((r,s)=>{let o=i.transaction(n,e),a=t(o.objectStore(n));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error),o.onabort=()=>s(o.error)}))}var Pv=(n,e)=>ca(Uc,"readwrite",t=>t.put(e,n)).then(()=>{}),Iv=n=>ca(Uc,"readonly",e=>e.get(n)).then(e=>e instanceof Uint8Array?e:null),Lv=n=>ca(Uc,"readwrite",e=>e.delete(n)).then(()=>{}),Dv=n=>ca(Dc,"readwrite",e=>e.put(n,n.id)).then(()=>{}),Uv=n=>ca(Dc,"readwrite",e=>e.delete(n)).then(()=>{}),dm=()=>ca(Dc,"readonly",n=>n.getAll()).then(n=>n.filter(e=>e&&typeof e.id=="string")).then(n=>n.sort((e,t)=>(t.updated??0)-(e.updated??0)));var gu=Symbol("remote"),Q2=Symbol("local"),si=Lc(),mu=null,Nc=null,xu=null,Nv=()=>si,Ov=()=>mu,kv=()=>pu(si),zv=n=>{xu=n},Bv=n=>{xu?.(n)},mm=n=>`${n.kind}:${n.id}`,eI=n=>`voxelier:${n.kind}:${n.id}`,fm=new Set;function Fv(n){return fm.add(n),()=>fm.delete(n)}var la="";function yu(){if(!mu)return;let n=mu;Pv(mm(n),pu(si)).catch(()=>{}),n.kind==="doc"&&Dv({id:n.id,name:la,updated:Date.now()}).catch(()=>{})}function gm(n){si.off("update",pm),si=n,si.on("update",pm)}function pm(n,e){if(e!==gu){Vv({k:"u",b:n});for(let t of fm)t(n)}}si.on("update",pm);function Vv(n){try{Nc?.postMessage(n)}catch{}}async function Oc(n){Nc?.close(),Nc=null,mu=n,typeof BroadcastChannel<"u"&&(Nc=new BroadcastChannel(eI(n)),Nc.onmessage=t=>{let i=t.data;!i||i.k!=="u"&&i.k!=="r"||!(i.b instanceof Uint8Array)||(i.k==="r"?xm(i.b):_u(i.b))});let e=null;try{e=await Iv(mm(n))}catch{return null}if(!e)return null;try{let t=Lc();uu(t,e,gu);let i=oa(t);return i?(gm(t),la=i.name,i):null}catch{return null}}async function Hv(n){await Promise.all([Lv(mm({kind:"doc",id:n})).catch(()=>{}),Uv(n).catch(()=>{})])}function _u(n){try{uu(si,n,gu);let e=oa(si);return e&&(la=e.name,xu?.(e),yu()),e}catch{return null}}function xm(n){try{let e=Lc();uu(e,n,gu);let t=oa(e);return t?(gm(e),la=t.name,xu?.(t),yu(),t):null}catch{return null}}function ym(n){return la=n.name,um(si,n,Q2)?(yu(),!0):!1}function _m(n){gm(Rv(n)),la=n.name,yu(),Vv({k:"r",b:pu(si)})}var tI="voxelier-v11",Gv="voxelier-ui-v1";function zc(n){let e={id:n.id,nm:n.name,p:n.pos,r:n.rot,vs:n.vis};return n.type==="object"?{t:"o",...e,b:n.boxes.map(t=>[t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.c])}:{t:"s",...e,c:n.children.map(zc)}}var nI={transparent:"deemphasized",invisible:"hidden"};function vh(n){let e={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:nI[n.vs]||n.vs||"visible"};return n.t==="o"?{type:"object",...e,boxes:n.b.map(t=>({x0:t[0],y0:t[1],z0:t[2],x1:t[3],y1:t[4],z1:t[5],c:t[6]}))}:{type:"scene",...e,children:n.c.map(vh)}}var kc;function iI(){try{localStorage.setItem(Gv,JSON.stringify([...y.collapsed]))}catch{}}function Vn(){clearTimeout(kc),kc=void 0,ky(JSON.stringify(zc(y.root))),ym(y.root),iI()}function vm(){kc===void 0&&(zy(JSON.stringify(zc(y.root))),ym(y.root))}function mt(){clearTimeout(kc),kc=setTimeout(Vn,250)}function bm(n){return!n||!n.root?null:(ch(n.uid||1),vh(n.root))}function vu(n){y.root=n}var Wv=()=>{try{let n=JSON.parse(localStorage.getItem(Gv));return Array.isArray(n)?n:[]}catch{return[]}};function Xv(){try{return bm(JSON.parse(localStorage.getItem(tI)))}catch{return null}}var rI=2;function Bc(n){let e=en();return pn(n,e),{mn:e.min,mx:e.max}}var bu=n=>{let{mn:e,mx:t}=Bc(n);return{x0:e.x,y0:e.y,z0:e.z,x1:t.x,y1:t.y,z1:t.z}};function Yv(n){if(!n.length)return[];let{mn:e}=Bc(n);return n.map(t=>Wa(t,-e.x,-e.y,-e.z))}function $v(n){let e=Df(y.editObject.boxes,n);y.sel3d={region:e.length?bu(e):{...n},boxes:e,lifted:!1},Or()}function wm(){let n=y.sel3d;!n||n.lifted||(Vn(),n.lifted=!0,Ka(n.region))}function Sm(){oI();let n=y.sel3d;!n||!n.lifted||(n.lifted=!1,gh(n.boxes),n.boxes=Df(y.editObject.boxes,n.region),mt())}function rr(){let n=y.sel3d;n&&(y.sel3d=null,n.lifted?(gh(n.boxes),mt()):Or())}function Mm(){let n=y.sel3d;if(!n)return;let e=n.region,t=n.lifted;y.sel3d=null,t?Or():Ka(e),mt()}function Em(){y.sel3d&&y.sel3d.boxes.length&&Ny(Yv(y.sel3d.boxes))}function jv(){Em(),Mm()}function Jv(n){if(!n.length)return;rr();let e=Yv(n),t=0,i=0,r=0,s=y.editObject.boxes;if(s.length){let{mn:a,mx:c}=Bc(s);t=c.x+rI,i=a.y,r=a.z}let o=e.map(a=>Wa(a,t,i,r));y.sel3d={region:bu(o),boxes:o,lifted:!1},gh(o),mt()}function Kv(n,e,t){let i=y.sel3d;if(!i||!n&&!e&&!t)return;let r=i.region;r.x0+=n,r.x1+=n,r.y0+=e,r.y1+=e,r.z0+=t,r.z1+=t,i.boxes=i.boxes.map(s=>Wa(s,n,e,t)),Or()}function qv(n,e,t){let{x:i,y:r,z:s}=n;for(let o=(t%4+4)%4;o>0;o--)if(e===0){let a=-s,c=r;r=a,s=c}else if(e===1){let a=-s,c=i;i=a,s=c}else{let a=-r,c=i;i=a,r=c}return{x:i,y:r,z:s}}function sI(n,e,t){let i=qv({x:n.x0,y:n.y0,z:n.z0},e,t),r=qv({x:n.x1-1,y:n.y1-1,z:n.z1-1},e,t);return{x0:Math.min(i.x,r.x),y0:Math.min(i.y,r.y),z0:Math.min(i.z,r.z),x1:Math.max(i.x,r.x)+1,y1:Math.max(i.y,r.y)+1,z1:Math.max(i.z,r.z)+1,c:n.c}}function Zv(){let n=$e.matrixWorld.elements,e=at({x:n[0],y:0,z:n[2]},-y.editXform.rot);return Math.abs(e.x)>=Math.abs(e.z)?0:2}var wu=null;function Tm(){let n=y.sel3d;if(!n)return;let e=Bc(n.boxes);wu={boxes:n.boxes.map(t=>({...t})),cx:(e.mn.x+e.mx.x)/2,cy:(e.mn.y+e.mx.y)/2,cz:(e.mn.z+e.mx.z)/2}}function oI(){wu=null}function Qv(n,e){let t=y.sel3d,i=wu;if(!t||!i||!i.boxes.length)return;let r=(n%4+4)%4,s;if(!r)s=i.boxes.map(o=>({...o}));else{let o=e?Zv():1;s=i.boxes.map(u=>sI(u,o,r));let a=Bc(s),c=Er(i.cx-(a.mn.x+a.mx.x)/2),l=Er(i.cy-(a.mn.y+a.mx.y)/2),h=Er(i.cz-(a.mn.z+a.mx.z)/2);s=s.map(u=>Wa(u,c,l,h))}t.boxes=s,t.region=bu(s),Or()}function eb(n,e){let t=y.sel3d,i=wu;if(!t||!i||!i.boxes.length)return;let r=e?Zv():1,[s,o]=r===0?[i.cy,i.cz]:r===1?[i.cx,i.cz]:[i.cx,i.cy];t.boxes=Iy(i.boxes,n,r,s,o,(a,c,l)=>({x:a,y:c,z:l})),t.region=bu(t.boxes),Or()}function aI(){let n=y.sel3d;if(!n)return null;let e=n.region,t=new Vi;for(let i of[e.x0,e.x1])for(let r of[e.y0,e.y1])for(let s of[e.z0,e.z1])t.expandByPoint(ji(i,r,s));return t}function Am(){let n=aI();return n?(_n.setFromCamera(fi,$e),_n.ray.intersectsBox(n)):!1}function cI(n){if(!n.length)return[];let e=[[],[],[]];for(let _ of n)e[0].push(_.x0,_.x1),e[1].push(_.y0,_.y1),e[2].push(_.z0,_.z1);let t=e.map(_=>[...new Set(_)].sort((M,C)=>M-C)),i=t.map(_=>_.length-1),[r,s,o]=i;if(r*s*o>8e6)return n;let a=t.map(_=>new Map(_.map((M,C)=>[M,C]))),c=(_,M,C)=>(_*s+M)*o+C,l=new Int32Array(r*s*o);for(let _ of n){let M=a[0].get(_.x1),C=a[1].get(_.y1),R=a[2].get(_.z1);for(let I=a[0].get(_.x0);I<M;I++)for(let D=a[1].get(_.y0);D<C;D++)for(let w=a[2].get(_.z0);w<R;w++)l[c(I,D,w)]=_.c+1}let h=[],u=[],d=[],f=[];for(let _=0;_<r;_++)for(let M=0;M<s;M++)for(let C=0;C<o;C++)l[c(_,M,C)]&&(h.push(c(_,M,C)),u.push(_),d.push(M),f.push(C));let g=[u,d,f],x=new Uint8Array(r*s*o),p=_=>{x.fill(0);let M=Array.from({length:h.length},(D,w)=>w).sort((D,w)=>g[_[2]][D]-g[_[2]][w]||g[_[1]][D]-g[_[1]][w]||g[_[0]][D]-g[_[0]][w]),C=[0,0,0],R=(D,w,T,k)=>{if(w[T]>=i[T])return!1;let X=(T+1)%3,Z=(T+2)%3;C[T]=w[T];for(let b=D[X];b<w[X];b++){C[X]=b;for(let P=D[Z];P<w[Z];P++){C[Z]=P;let U=c(C[0],C[1],C[2]);if(x[U]||l[U]!==k)return!1}}return!0},I=[];for(let D of M){let w=h[D];if(x[w])continue;let T=l[w],k=[u[D],d[D],f[D]],X=[u[D]+1,d[D]+1,f[D]+1];for(let Z of _)for(;R(k,X,Z,T);)X[Z]++;for(let Z=k[0];Z<X[0];Z++)for(let b=k[1];b<X[1];b++)for(let P=k[2];P<X[2];P++)x[c(Z,b,P)]=1;I.push({x0:t[0][k[0]],y0:t[1][k[1]],z0:t[2][k[2]],x1:t[0][X[0]],y1:t[1][X[1]],z1:t[2][X[2]],c:T-1})}return I},m=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],v=null;for(let _ of m){let M=p(_);(!v||M.length<v.length)&&(v=M)}return v}var lI=24,tb=n=>n.reduce((e,t)=>e+(t.x1-t.x0)*(t.y1-t.y0)*(t.z1-t.z0),0),Cm=new WeakSet;function Rm(n){if(n.boxes.length<lI||Cm.has(n.boxes))return!1;let e=cI(n.boxes);return e.length<n.boxes.length&&tb(e)===tb(n.boxes)?(n.boxes=e,Cm.add(e),!0):(Cm.add(n.boxes),!1)}var Pm=(n,e,t)=>{let i=new Set(y.selection);rr(),t&&Rm(t)&&vm(),y.selection=new Set([n]),y.editObject=null,Pr(),y.context!==e||t?wt():kr(i),Ze()};function hI(){if(y.path.length<=1)return;let n=y.context,e=y.editObject;Pm(y.path.pop().id,n,e)}function uI(){Pm(y.editObject.id,y.context,y.editObject)}function nb(){y.editObject?uI():hI()}function Ei(n){let e=gi(n);if(!e)return;let t=y.context,i=y.editObject;y.path=e.slice(0,-1),Pm(n.id,t,i)}function Bs(n,e){let t=gi(n);if(!t)return;let i=y.editObject;rr(),i&&i!==n&&Rm(i)&&vm(),n.type==="scene"?(y.path=t,y.editObject=null):(y.path=t.slice(0,-1),y.editObject=n),y.selection.clear(),y.tool="view",Pr(),wt(),Ze(),e&&yi()}var Ti=null,Xt=null,Fc=null,ha=null,Gn=null,dI={visible:"\u25C9",deemphasized:"\u25D0",hidden:"\u29B0"},Im=(n,e)=>{let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,r=Math.min(255,(n&255)*e)|0;return`rgb(${t},${i},${r})`},Su=new Map;function ib(n){return n.type==="object"?"o"+n.boxes.map(e=>`${e.x0},${e.y0},${e.z0},${e.x1},${e.y1},${e.z1},${e.c}`).join(";"):"s"+n.children.map(e=>`${e.id}@${e.pos.x},${e.pos.y},${e.pos.z}/${e.rot};${ib(e)}`).join()}function fI(n){let e=Su.get(n.id);if(n===y.editObject&&e)return e.cv;let t=ib(n);if(e&&e.sig===t)return e.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let r=i.getContext("2d");r.fillStyle="#0f1115",r.fillRect(0,0,52,52);let s=$a(n,{x:0,y:0,z:0},0,[]);if(s.length){let o=en();pn(s,o);let{x:a,y:c,z:l}=o.min,{x:h,y:u,z:d}=o.max,f=40/Math.max(h-a,u-c,d-l,1),g=26-((a+h)/2-(l+d)/2)*f*.5,x=28+(c+u)/2*f*.6-((a+h)/2+(l+d)/2)*f*.28,p=(v,_,M)=>[g+(v-M)*f*.5,x-_*f*.6+(v+M)*f*.28],m=(v,_)=>{r.fillStyle=v,r.beginPath(),r.moveTo(_[0][0],_[0][1]);for(let M=1;M<_.length;M++)r.lineTo(_[M][0],_[M][1]);r.closePath(),r.fill()};s.sort((v,_)=>v.x0+v.x1+v.y0+v.y1+v.z0+v.z1-(_.x0+_.x1+_.y0+_.y1+_.z0+_.z1));for(let v of s)m(Im(v.c,.78),[p(v.x1,v.y0,v.z0),p(v.x1,v.y1,v.z0),p(v.x1,v.y1,v.z1),p(v.x1,v.y0,v.z1)]),m(Im(v.c,.6),[p(v.x0,v.y0,v.z1),p(v.x1,v.y0,v.z1),p(v.x1,v.y1,v.z1),p(v.x0,v.y1,v.z1)]),m(Im(v.c,1),[p(v.x0,v.y1,v.z0),p(v.x1,v.y1,v.z0),p(v.x1,v.y1,v.z1),p(v.x0,v.y1,v.z1)])}return Su.set(n.id,{sig:t,cv:i}),i}var Fs=null;function Lm(n){Fs=n}function pI(n){if(n===y.root||Fn(n)!==y.context||y.editObject)Ei(n);else{let e=new Set(y.selection);y.selection.has(n.id)?y.selection.delete(n.id):y.selection.add(n.id),kr(e),Ze()}Fs=n.id}function mI(n){let e=y.context.children,t=Fs?e.findIndex(a=>a.id===Fs):-1,i=e.findIndex(a=>a.id===n.id);if(n===y.root||y.editObject||t<0||i<0){Ei(n),Fs=n.id;return}let r=new Set(y.selection),s=Math.min(t,i),o=Math.max(t,i);y.selection=new Set(e.slice(s,o+1).map(a=>a.id)),kr(r),Ze()}function gI(n,e){if(e.shiftKey||e.ctrlKey||e.metaKey){Gn&&(clearTimeout(Gn.timer),Gn=null),e.shiftKey?mI(n):pI(n);return}if(Gn&&Gn.node===n){clearTimeout(Gn.timer),Gn=null,Bs(n,!0);return}Gn&&clearTimeout(Gn.timer),n===y.root?Bs(n):Ei(n),Fs=n===y.root?null:n.id,Gn={node:n,timer:setTimeout(()=>Gn=null,300)}}function fa(n){Mu();let t=document.querySelector(`#tree .trow[data-id="${n.id}"]`)?.querySelector(".nm");if(!t)return;let i=nt("input",{className:"nminput",value:n.name});i.placeholder=n===y.root?"Project":n.type==="scene"?"group":"object";let r=!1,s=o=>{r||(r=!0,o&&(n.name=i.value.trim(),mt()),Ze())};i.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Enter"?s(!0):o.key==="Escape"&&s(!1)}),i.addEventListener("blur",()=>s(!0)),t.replaceWith(i),i.focus(),i.select()}function xI(n){let e=fI(n);if(e.className="thumb",e.onclick=null,e.title="",n!==y.root&&n.type==="scene"&&n.children.length){let t=y.collapsed.has(n.id);e.classList.add("group"),t&&e.classList.add("collapsed"),e.title=t?"Expand group":"Collapse group",e.onclick=i=>{i.stopPropagation(),t?y.collapsed.delete(n.id):y.collapsed.add(n.id),Dm()}}return e}function yI(n,e){n.draggable=e!==y.root,e!==y.root&&n.addEventListener("dragstart",t=>{if(t.stopPropagation(),Ti=e.id,t.dataTransfer){t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain",e.id)}catch{}}}),n.addEventListener("dragend",ua),n.addEventListener("dragover",t=>{t.preventDefault(),t.stopPropagation(),_I(t,e,n)}),n.addEventListener("drop",t=>{t.preventDefault(),t.stopPropagation(),ab()})}function Dm(){let n=document.getElementById("tree");n.innerHTML="";let e=(i,r)=>{let s=i===y.root,o=!s&&y.context.children.includes(i)&&y.selection.has(i.id),a=i.vis,c=nt("div",{className:"trow"+(s?" root":"")+(o?" sel":"")+(i===y.context&&!y.editObject?" ctx":"")+(i===y.editObject?" edit":"")+(!s&&a!=="visible"?" dim":"")});c.style.paddingLeft=4+r*13+"px",c.dataset.id=i.id;let l=xI(i),h=nt("span",{className:"nm"});if(s?h.textContent=i.name||"Project":i.name?h.textContent=i.name:h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>",h.onclick=u=>{!Gn&&!y.editObject&&!s&&y.selection.size===1&&y.selection.has(i.id)&&(u.stopPropagation(),fa(i))},c.append(l,h),s||c.append(nt("button",{className:"tb"+(a==="visible"?" on":""),textContent:dI[a],title:"visible \u2192 deemphasized \u2192 hidden",onclick:u=>{u.stopPropagation(),cb(i)}})),c.onclick=u=>gI(i,u),c.oncontextmenu=u=>{u.preventDefault(),u.stopPropagation();let d=!s&&!y.editObject&&Fn(i)===y.context&&y.selection.has(i.id);!s&&!d&&Ei(i),sb(i,u.clientX,u.clientY)},yI(c,i),n.appendChild(c),i.type==="scene"&&(s||!y.collapsed.has(i.id)))for(let u of i.children)e(u,r+1)};e(y.root,0);let t=new Set;(function i(r){t.add(r.id),r.type==="scene"&&r.children.forEach(i)})(y.root);for(let i of Su.keys())t.has(i)||Su.delete(i)}function Mu(){ha&&(ha.remove(),ha=null,window.removeEventListener("pointerdown",rb,!0))}function rb(n){ha&&!ha.contains(n.target)&&Mu()}function sb(n,e,t){Mu();let i=nt("div",{className:"ctxmenu"}),r=(c,l,h)=>i.appendChild(nt("div",{className:"ctxitem"+(h?" "+h:""),textContent:c,onclick:()=>{Mu(),l()}})),s=()=>i.appendChild(nt("div",{className:"ctxdiv"})),o=n!==y.root&&Fn(n)===y.context&&y.selection.size>1&&y.selection.has(n.id);o||(r("Rename",()=>fa(n)),r("Locate",()=>Ry(n)),s()),n!==y.root&&(r("Copy",()=>Hc()),r("Duplicate",()=>o?Eu():db(n)),r("Delete objects",()=>o?Vc():fb(n),"danger"),s()),o?r("Group",()=>ub(n)):n.type==="scene"?(n!==y.root&&r("Ungroup",()=>pb(n)),ko()&&r("Paste",()=>Tu(n)),r("New object",()=>mb(n)),r("New group",()=>gb(n))):r("New group",()=>hb(n)),document.body.appendChild(i),ha=i;let a=i.getBoundingClientRect();i.style.left=Math.min(e,innerWidth-a.width-4)+"px",i.style.top=Math.min(t,innerHeight-a.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",rb,!0),0)}function ua(){Fc&&Fc.classList.remove("drop-into","drop-before","drop-after"),Fc=null,Xt=null}function ob(){let n=Ti&&ys(Ti);return!n||y.editObject||Fn(n)!==y.context||!y.selection.has(n.id)||y.selection.size<=1?null:y.context.children.filter(e=>y.selection.has(e.id))}function _I(n,e,t){let i=Ti&&ys(Ti);if(!i||i===e){ua();return}let r=ob();if(r?r.some(u=>u===e||_s(u,e)):_s(i,e)){ua();return}if(ua(),Fc=t,e===y.root){Xt={parent:y.root,index:y.root.children.length},t.classList.add("drop-into");return}let o=t.getBoundingClientRect(),a=n.clientY-o.top,c=o.height,l=Fn(e),h=l?l.children.indexOf(e):0;a>c*.28&&a<c*.72&&(e.type==="scene"||!r)?(e.type==="scene"?Xt={parent:e,index:e.children.length}:Xt={wrap:e},t.classList.add("drop-into")):a<c*.5?(Xt={parent:l,index:h},t.classList.add("drop-before")):(Xt={parent:l,index:h+1},t.classList.add("drop-after"))}function ab(){let n=Ti&&ys(Ti);if(n&&Xt){let e=Xt.parent?ob():null;if(e){let t=Xt.parent,i=Xt.index,r=!1;for(let s of e)da(s,t,i)&&(i=t.children.indexOf(s)+1,r=!0);if(r){y.collapsed.delete(t.id);let s=gi(t);s&&(y.path=s),y.editObject=null,y.selection=new Set(e.map(o=>o.id)),wt(),Ze(),mt()}}else Xt.wrap?lb(Xt.wrap,n):Xt.parent&&da(n,Xt.parent,Xt.index)&&(y.collapsed.delete(Xt.parent.id),Ei(n),mt())}ua(),Ti=null}{let n=document.getElementById("tree");n.addEventListener("dragover",e=>{if(e.target===n&&Ti){e.preventDefault(),ua(),Xt={parent:y.root,index:y.root.children.length};let t=[...n.querySelectorAll(".trow")].filter(r=>r.dataset.id!==Ti),i=t[t.length-1];i&&(i.classList.add("drop-after"),Fc=i)}}),n.addEventListener("drop",e=>{e.target===n&&(e.preventDefault(),ab())})}document.getElementById("side").addEventListener("click",n=>{if(n.target.closest(".trow, button, input")||!y.selection.size)return;let e=new Set(y.selection);y.selection.clear(),Fs=null,kr(e),Ze()});document.getElementById("side").addEventListener("contextmenu",n=>{n.target.closest(".trow, button, input")||(n.preventDefault(),sb(y.root,n.clientX,n.clientY))});var Ai=()=>{wt(),Ze(),mt()};function cb(n){n.vis=iy[n.vis],Ai()}var Um=()=>[...y.selection].map(n=>$i(n)).filter(n=>!!n),xb=(n,e)=>{let t=Ya();t.pos={x:Math.round(tt.target.x),y:0,z:Math.round(tt.target.z)},n.children.push(t),y.collapsed.delete(n.id),Bs(t,e),mt(),fa(t)};function yb(){xb(y.context,!0)}function Vc(){y.selection.size&&(y.context.children=y.context.children.filter(n=>!y.selection.has(n.id)),y.selection.clear(),Ai())}function Eu(){let n=Um().map(Ar);n.length&&(y.context.children.push(...n),y.selection=new Set(n.map(e=>e.id)),Ai())}function Hc(){let n=Um().map(Ar);n.length&&Uy(n)}function _b(){Hc(),Vc()}function Tu(n=y.context){if(ko()==="vox"){vI(n);return}let e=xh().map(Ar);e.length&&(n.children.push(...e),vb(n),y.selection=new Set(e.map(t=>t.id)),Ai())}function vI(n){let e=yh();if(!e.length)return;let t=Ya();t.boxes=e.map(s=>({...s}));let i=Lo(n),r=at({x:tt.target.x-i.off.x,y:0,z:tt.target.z-i.off.z},-i.rot);t.pos={x:Math.round(r.x),y:0,z:Math.round(r.z)},n.children.push(t),vb(n),y.selection=new Set([t.id]),Ai()}function vb(n){y.collapsed.delete(n.id),n!==y.context&&(y.path=gi(n)??y.path,y.editObject=null)}function da(n,e,t){if(n===e||_s(n,e))return!1;let i=Fn(n);if(!i)return!1;let r=qi(Lo(i),{off:{...n.pos},rot:n.rot}),s=qi(Rf(Lo(e)),r),o=i.children.indexOf(n);return i.children.splice(o,1),i===e&&o<t&&t--,n.pos={x:Math.round(s.off.x),y:Math.round(s.off.y),z:Math.round(s.off.z)},n.rot=s.rot&3,e.children.splice(Math.max(0,Math.min(t,e.children.length)),0,n),!0}function bb(n){let e=Fn(n);if(!e)return null;let t=e.children.indexOf(n),i=xs("Group");return i.pos={...n.pos},i.rot=n.rot,e.children.splice(t,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function lb(n,e){if(e===n||_s(e,n))return!1;let t=bb(n);return t?(da(e,t,t.children.length),y.collapsed.delete(t.id),y.selection=new Set([t.id]),Ai(),!0):!1}function hb(n){let e=bb(n);e&&(y.collapsed.delete(e.id),Ei(e),mt(),fa(e))}function ub(n){let e=Um();if(e.length<2)return;let t=xs("Group");t.pos={...n.pos},t.rot=n.rot;let i=y.context.children.indexOf(n);y.context.children.splice(Math.max(0,i),0,t);for(let r of e)da(r,t,t.children.length);y.collapsed.delete(t.id),y.selection=new Set([t.id]),Ai()}function db(n){let e=Fn(n);if(!e)return;let t=Ar(n);e.children.splice(e.children.indexOf(n)+1,0,t),Ei(t),mt()}function fb(n){let e=Fn(n);e&&(e.children=e.children.filter(t=>t!==n),y.selection.delete(n.id),y.editObject===n&&(y.editObject=null),Ai())}function pb(n){let e=Fn(n);if(!e)return;let t=[...n.children],i=e.children.indexOf(n);for(let r of t)da(r,e,i),i=e.children.indexOf(r)+1;e.children=e.children.filter(r=>r!==n),y.selection=new Set(t.map(r=>r.id)),Ai()}function mb(n){xb(n,!1)}function gb(n){let e=xs("Group");n.children.push(e),y.collapsed.delete(n.id),Ei(e),mt(),fa(e)}function Nm(n){let e=[...y.selection];if(!e.length)return;let t=n<0?3:1,i=Io(),r=Rf(i),s=o=>Rr(o,pi(i.off,at(o.pos,i.rot)),i.rot+o.rot&3,en());for(let o=0;o<Math.abs(n);o++){let a=en();for(let d of e){let f=s($i(d));f.min.x<a.min.x&&(a.min.x=f.min.x),f.min.z<a.min.z&&(a.min.z=f.min.z),f.max.x>a.max.x&&(a.max.x=f.max.x),f.max.z>a.max.z&&(a.max.z=f.max.z)}let c=(a.min.x+a.max.x)/2,l=(a.min.z+a.max.z)/2,h=at({x:c,y:0,z:l},t),u={rot:t,off:{x:c-h.x,y:0,z:l-h.z}};for(let d of e){let f=$i(d);if(!f)continue;let g=qi(i,{off:f.pos,rot:f.rot}),x=qi(r,qi(u,g));f.pos={x:Er(x.off.x),y:Er(x.off.y),z:Er(x.off.z)},f.rot=x.rot&3}}wt()}function wb(){y.selection.size&&(Nm(1),Ze(),mt())}function Om(n){for(let e of y.selection){let t=$i(e);t&&(t.pos.y+=n)}y.selection.size&&Ai()}var rt=n=>Math.floor(n/10),xt=hh,pa=(n,e)=>{let t=Ya();return t.name=n,t.boxes=e,t},km=(n,e,t,i,r,s)=>({x0:n,y0:e,z0:t,x1:i,y1:r,z1:s});function zm(){let n=rt(4465),e=rt(2985),t=rt(2700),i=rt(150),r=pa("Floor",[pt(0,0,0,n,1,e,xt[9])]),s=rt(800),o=rt(2100),a=n-rt(515)-s,c=n-rt(900)-s,l=[pt(0,1,0,n,t+1,i,xt[5]),pt(0,1,e-i,n,t+1,e,xt[5]),pt(0,1,i,i,t+1,e-i,xt[5]),pt(n-i,1,i,n,t+1,e-i,xt[5])];l=gs(l,km(a,1,0,a+s,o+1,i)),l=gs(l,km(c,1,e-i,c+s,o+1,e)),l=gs(l,km(0,rt(900),rt(600),i,rt(2100),e-rt(600)));let h=pa("Walls",l);h.vis="deemphasized";let u=rt(1500),d=rt(2e3),f=pa("Bed",[pt(0,0,0,8,14,8,xt[7]),pt(u-8,0,0,u,14,8,xt[7]),pt(0,0,d-8,8,14,d,xt[7]),pt(u-8,0,d-8,u,14,d,xt[7]),pt(0,14,0,u,20,d,xt[6]),pt(2,20,0,u-2,24,d-rt(400),xt[10])]);f.pos={x:i+3,y:1,z:e-i-d};let g=rt(1400),x=rt(700),p=rt(740),m=pa("Desk",[pt(0,p-4,0,g,p,x,xt[8]),pt(0,0,0,6,p-4,6,xt[7]),pt(g-6,0,0,g,p-4,6,xt[7]),pt(0,0,x-6,6,p-4,x,xt[7]),pt(g-6,0,x-6,g,p-4,x,xt[7])]),v=rt(600),_=v-30>>1,M=v>>1,C=pa("Computer",[pt(_,0,0,_+30,2,18,xt[11]),pt(M-2,2,7,M+2,rt(160),11,xt[11]),pt(0,rt(160),6,v,rt(520),9,xt[13])]);C.pos={x:rt(400),y:p,z:rt(420)};let R=xs();R.name="Desk + Computer",R.pos={x:n-i,y:1,z:rt(900)},R.rot=1,R.children=[m,C];let I=k=>pa(k,[pt(-10,0,-10,11,30,11,xt[4]),pt(-2,30,-2,3,54,3,xt[14]),pt(-16,54,-16,17,78,17,xt[14]),pt(-12,78,-12,13,92,13,xt[14])]),D=I("Plant"),w=I("Plant");D.pos={x:n-i-rt(300),y:1,z:i+rt(300)},w.pos={x:i+rt(300),y:1,z:i+rt(300)};let T=xs();return T.children=[r,h,f,R,D,w],T}var Bm="voxelier-last",Sb="doc",Fm=dm,bI=()=>{let n=new Uint8Array(8);return crypto.getRandomValues(n),[...n].map(e=>e.toString(36).padStart(2,"0")).join("")},Mb=()=>new URLSearchParams(location.hash.replace(/^#/,""));function wI(){let n=Mb().get(Sb);return n&&/^[0-9a-z]{4,32}$/.test(n)?n:null}function Vm(n){let e=Mb();e.set(Sb,n),history.replaceState(null,"",`#${e.toString()}`)}var Hm=n=>{try{localStorage.setItem(Bm,n)}catch{}},Eb=()=>{try{return localStorage.getItem(Bm)}catch{return null}};async function ma(n){let e=await Oc({kind:"doc",id:n});return e?(Hm(n),Vm(n),e):null}async function Gm(n){let e=await ma(n);if(e)return e;let t=zm();return _m(t),Hm(n),Vm(n),t}async function Vs(n){let e=bI();await Oc({kind:"doc",id:e});let t=n??zm();return _m(t),Hm(e),Vm(e),t}async function Tb(n){if(await Hv(n),Eb()===n)try{localStorage.removeItem(Bm)}catch{}}var Au=()=>{let n=Ov();return n&&n.kind==="doc"?n.id:null};async function Ab(n){let e=wI();if(e)return await Gm(e);let t=Eb();if(t){let i=await ma(t);if(i)return i}try{let[i]=await dm();if(i){let r=await ma(i.id);if(r)return r}}catch{}return await Vs(n()??void 0)}function Cb(){let n=JSON.stringify({uid:ah(),root:zc(y.root),collapsed:[...y.collapsed]}),e=URL.createObjectURL(new Blob([n],{type:"application/json"})),t=y.root.name||"Project",i=a=>String(a).padStart(2,"0"),r=new Date,s=`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())} ${i(r.getHours())}h${i(r.getMinutes())}m${i(r.getSeconds())}s`,o=document.createElement("a");o.href=e,o.download=`${t} -- ${s}.voxelier.json`,o.click(),URL.revokeObjectURL(e)}function Rb(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let e=n.files&&n.files[0];if(!e)return;let t=new FileReader;t.onload=async()=>{try{let i=bm(JSON.parse(t.result));if(!i)throw new Error("not a Voxelier scene file");y.root=await Vs(i),y.collapsed=new Set,y.path=[y.root],y.editObject=null,y.sel3d=null,y.selection.clear(),y.tool==="measure"&&(y.tool="view"),Pr(),wt(),Ze(),yi(),Vn()}catch(i){alert("Import failed: "+i.message)}},t.readAsText(e)},n.click()}var zb=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:Wr,n:Wc,Gx:SI,Gy:MI,b:Bb}=zb,xn=32,ga=64,Xm={publicKey:xn+1,publicKeyUncompressed:ga+1,signature:ga,seed:xn+xn/2},vt=(n="",e=Error)=>{let t=new e(n),{captureStackTrace:i}=Error;throw typeof i=="function"&&i(t,vt),t},EI=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Wn=(n,e,t="")=>{let i=EI(n),r=n?.length,s=e!==void 0;if(!i||s&&r!==e){let o=t&&`"${t}" `,a=s?` of length ${e}`:"",c=i?`length=${r}`:`type=${typeof n}`,l=o+"expected Uint8Array"+a+", got "+c;return i?vt(l,RangeError):vt(l,TypeError)}return n},Gc=n=>new Uint8Array(n),Fb=(n,e)=>n.toString(16).padStart(e,"0"),Vb=n=>{let e="";for(let t of Wn(n))e+=Fb(t,2);return e},sr={_0:48,_9:57,A:65,F:70,a:97,f:102},Pb=n=>n>=sr._0&&n<=sr._9?n-sr._0:n>=sr.A&&n<=sr.F?n-(sr.A-10):n>=sr.a&&n<=sr.f?n-(sr.a-10):void 0,Hb=n=>{let e="hex invalid";if(typeof n!="string")return vt(e);let t=n.length,i=t/2;if(t%2)return vt(e);let r=Gc(i);for(let s=0,o=0;s<i;s++,o+=2){let a=Pb(n.charCodeAt(o)),c=Pb(n.charCodeAt(o+1));if(a===void 0||c===void 0)return vt(e);r[s]=a*16+c}return r},Ib=()=>globalThis?.crypto?.subtle??vt("crypto.subtle must be defined, consider polyfill"),xa=(...n)=>{let e=0;for(let r of n)e+=Wn(r).length;let t=Gc(e),i=0;for(let r of n)t.set(r,i),i+=r.length;return t},Jm=(n=xn)=>(globalThis?.crypto).getRandomValues(Gc(n)),qm=BigInt,Gs=(n,e,t,i="bad number: out of range")=>typeof n!="bigint"?vt(i,TypeError):e<=n&&n<t?n:vt(i,RangeError),Me=(n,e=Wr)=>{let t=n%e;return t>=0n?t:e+t},Iu=n=>Me(n,Wc),TI=(n,e)=>{(n===0n||e<=0n)&&vt("no inverse n="+n+" mod="+e);let t=Me(n,e),i=e,r=0n,s=1n,o=1n,a=0n;for(;t!==0n;){let c=i/t,l=i%t,h=r-o*c,u=s-a*c;i=t,t=l,r=o,s=a,o=h,a=u}return i===1n?Me(r,e):vt("no inverse")},Gb=n=>{let e=LI[n];return typeof e!="function"&&vt("hashes."+n+" not set"),e},Lb=(n,e,t)=>Wn(Gb(n)(e,t),xn,"digest"),Db=(n,e,t)=>Promise.resolve(Gb(n)(e,t)).then(i=>Wn(i,xn,"digest"));var Wm=n=>n instanceof Xr?n:vt("Point expected"),Wb=n=>Me(Me(n*n)*n+Bb),Ub=n=>Gs(n,0n,Wr),Cu=n=>Gs(n,1n,Wr),AI=n=>Gs(n,1n,Wc),Lu=n=>!(n&1n),Xb=n=>Uint8Array.of(n),CI=n=>Xb(Lu(n)?2:3),qb=n=>{let e=Wb(Cu(n)),t=1n;for(let i=e,r=(Wr+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%Wr),i=i*i%Wr;return Me(t*t)!==e&&vt("sqrt invalid"),Lu(t)?t:Me(-t)};var Xr=class n{static BASE;static ZERO;X;Y;Z;constructor(e,t,i){this.X=Ub(e),this.Y=Cu(t),this.Z=Ub(i),Object.freeze(this)}static CURVE(){return zb}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?Hs:new n(t,i,1n)}static fromBytes(e){Wn(e);let{publicKey:t,publicKeyUncompressed:i}=Xm,r,s=e.length,o=e[0],a=e.subarray(1),c=Ru(a,0,xn);if(s===t&&(o===2||o===3)){let l=qb(c);o===3&&(l=Me(-l)),r=new n(c,l,1n)}return s===i&&o===4&&(r=new n(c,Ru(a,xn,ga),1n)),r?r.assertValidity():vt("bad point: not on curve")}static fromHex(e){return n.fromBytes(Hb(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:r}=this,{X:s,Y:o,Z:a}=Wm(e),c=Me(t*a),l=Me(s*r),h=Me(i*a),u=Me(o*r);return c===l&&h===u}is0(){return this.equals(Hs)}negate(){return new n(this.X,Me(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:r}=this,{X:s,Y:o,Z:a}=Wm(e),c=0n,l=Bb,h=0n,u=0n,d=0n,f=Me(l*3n),g=Me(t*s),x=Me(i*o),p=Me(r*a),m=Me(t+i),v=Me(s+o);m=Me(m*v),v=Me(g+x),m=Me(m-v),v=Me(t+r);let _=Me(s+a);return v=Me(v*_),_=Me(g+p),v=Me(v-_),_=Me(i+r),h=Me(o+a),_=Me(_*h),h=Me(x+p),_=Me(_-h),d=Me(c*v),h=Me(f*p),d=Me(h+d),h=Me(x-d),d=Me(x+d),u=Me(h*d),x=Me(g+g),x=Me(x+g),p=Me(c*p),v=Me(f*v),x=Me(x+p),p=Me(g-p),p=Me(c*p),v=Me(v+p),g=Me(x*v),u=Me(u+g),g=Me(_*v),h=Me(m*h),h=Me(h-g),g=Me(m*x),d=Me(_*d),d=Me(d+g),new n(h,u,d)}subtract(e){return this.add(Wm(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Hs;if(AI(e),e===1n)return this;if(this.equals(Ws))return VI(e).p;let i=Hs,r=Ws;for(let s=this;e>0n;s=s.double(),e>>=1n)e&1n?i=i.add(s):t&&(r=r.add(s));return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(this.equals(Hs))return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let r=TI(i,Wr);return Me(i*r)!==1n&&vt("inverse invalid"),{x:Me(e*r),y:Me(t*r)}}assertValidity(){let{x:e,y:t}=this.toAffine();return Cu(e),Cu(t),Me(t*t)===Wb(e)?this:vt("bad point: not on curve")}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),r=Ci(t);return e?xa(CI(i),r):xa(Xb(4),r,Ci(i))}toHex(e){return Vb(this.toBytes(e))}},Ws=new Xr(SI,MI,1n),Hs=new Xr(0n,1n,0n);Xr.BASE=Ws;Xr.ZERO=Hs;var RI=(n,e,t)=>Ws.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),Xs=n=>qm("0x"+(Vb(n)||"0")),Ru=(n,e,t)=>Xs(n.subarray(e,t)),PI=2n**256n,Ci=n=>Hb(Fb(Gs(n,0n,PI),ga)),II=n=>{let e=Xs(Wn(n,xn,"secret key"));return Gs(e,1n,Wc,"invalid secret key: outside of range")};var Nb="SHA-256",LI={hmacSha256Async:async(n,e)=>{let t=Ib(),i="HMAC",r=await t.importKey("raw",n,{name:i,hash:{name:Nb}},!1,["sign"]);return Gc(await t.sign(i,r,e))},hmacSha256:void 0,sha256Async:async n=>Gc(await Ib().digest(Nb,n)),sha256:void 0};var DI=n=>{if(n=n===void 0?Jm(Xm.seed):n,Wn(n),n.length<Xm.seed||n.length>1024)return vt("expected 48-1024b",RangeError);let e=Me(Xs(n),Wc-1n);return Ci(e+1n)},UI=n=>e=>{let t=DI(e);return{secretKey:t,publicKey:n(t)}};var Yb=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),$b="aux",jb="nonce",Jb="challenge",Ym=(n,...e)=>{let t=Lb("sha256",Yb(n));return Lb("sha256",xa(t,t,...e))},$m=(n,...e)=>Db("sha256Async",Yb(n)).then(t=>Db("sha256Async",xa(t,t,...e))),Km=n=>{let e=II(n),t=Ws.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=Lu(r)?e:Iu(-e),o=Ci(i);return{d:s,px:o}},Zm=n=>Iu(Xs(n)),Kb=(...n)=>Zm(Ym(Jb,...n)),Zb=async(...n)=>Zm(await $m(Jb,...n)),Qb=n=>Km(n).px,NI=UI(Qb),ew=(n,e,t)=>{let{px:i,d:r}=Km(e);return{m:Wn(n),px:i,d:r,a:Wn(t,xn)}},tw=n=>{let e=Zm(n);e===0n&&vt("sign failed: k is zero");let{px:t,d:i}=Km(Ci(e));return{rx:t,k:i}},nw=(n,e,t,i)=>xa(e,Ci(Iu(n+t*i))),iw="invalid signature produced",OI=(n,e,t=Jm(xn))=>{let{m:i,px:r,d:s,a:o}=ew(n,e,t),a=Ym($b,o),c=Ci(s^Xs(a)),l=Ym(jb,c,r,i),{rx:h,k:u}=tw(l),d=Kb(h,r,i),f=nw(u,h,d,s);return sw(f,i,r)||vt(iw),f},kI=async(n,e,t=Jm(xn))=>{let{m:i,px:r,d:s,a:o}=ew(n,e,t),a=await $m($b,o),c=Ci(s^Xs(a)),l=await $m(jb,c,r,i),{rx:h,k:u}=tw(l),d=await Zb(h,r,i),f=nw(u,h,d,s);return await ow(f,i,r)||vt(iw),f},zI=(n,e)=>n instanceof Promise?n.then(e):e(n),rw=(n,e,t,i)=>{let r=Wn(n,ga,"signature"),s=Wn(e,void 0,"message"),o=Wn(t,xn,"publicKey");try{let a=Xs(o),c=qb(a),l=new Xr(a,c,1n).assertValidity(),h=Ci(l.toAffine().x),u=Ru(r,0,xn);Gs(u,1n,Wr);let d=Ru(r,xn,ga);Gs(d,1n,Wc);let f=xa(Ci(u),h,s);return zI(i(f),g=>{let{x,y:p}=RI(l,d,Iu(-g)).toAffine();return!(!Lu(p)||x!==u)})}catch{return!1}},sw=(n,e,t)=>rw(n,e,t,Kb),ow=async(n,e,t)=>rw(n,e,t,Zb),Qm=Object.freeze({keygen:NI,getPublicKey:Qb,sign:OI,verify:sw,signAsync:kI,verifyAsync:ow}),Pu=8,BI=256,aw=Math.ceil(BI/Pu)+1,jm=2**(Pu-1),FI=()=>{let n=[],e=Ws,t=e;for(let i=0;i<aw;i++){t=e,n.push(t);for(let r=1;r<jm;r++)t=t.add(e),n.push(t);e=t.double()}return n},Ob,kb=(n,e)=>{let t=e.negate();return n?t:e},VI=n=>{let e=Ob||(Ob=FI()),t=Hs,i=Ws,r=2**Pu,s=r,o=qm(r-1),a=qm(Pu);for(let c=0;c<aw;c++){let l=Number(n&o);n>>=a,l>jm&&(l-=s,n+=1n);let h=c*jm,u=h,d=h+Math.abs(l)-1,f=c%2!==0,g=l<0;l===0?i=i.add(kb(f,e[u])):t=t.add(kb(g,e[d]))}return n!==0n&&vt("invalid wnaf"),{p:t,f:i}};var{floor:tg,min:HI,sin:GI}=Math,Ut="Trystero",qr=(n,e)=>Array(n).fill(void 0).map(e),WI="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Xn=n=>qr(n,()=>WI[tg(Math.random()*62)]??"").join(""),qt=Xn(20),En=Promise.all.bind(Promise),ig=typeof window<"u",{entries:oi,fromEntries:rg,keys:nn,values:or}=Object,Et=()=>{},Du="candidate",Xe=n=>(n!==null&&clearTimeout(n),null),qe=n=>new Error(`${Ut}: ${n}`),ar=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:Ht(n??e),qn=(n,e)=>n instanceof Error?n:qe(ar(n,e)),XI=new TextEncoder,qI=new TextDecoder,Yn=n=>XI.encode(n),ai=n=>qI.decode(n),cr=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),qs=(...n)=>n.join("@"),YI=(n,e)=>{let t=[...n],i=()=>{let s=GI(e++)*1e4;return s-tg(s)},r=t.length;for(;r;){let s=tg(i()*r--),o=t[r];t[r]=t[s],t[s]=o}return t},sg=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?YI(e,Uu(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),Ht=JSON.stringify,Ri=n=>{try{return JSON.parse(n)}catch{throw qe(`failed to parse JSON: ${n}`)}},Uu=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,cw=3333,$I=6e4,eg={},Xc=null,ng=null,og=()=>{Xc||(Xc=new Promise(n=>{ng=n}).finally(()=>{ng=null,Xc=null}))},ag=()=>{ng?.()},cg=(n,e,t)=>{let i={},r=!1,s=!1,o=Et;i.ready=new Promise(c=>o=c);let a=()=>{s=!1;let c=new WebSocket(n);c.onclose=()=>{if(s)return;if(s=!0,Xc){Xc.then(a);return}let l=eg[n]??=cw;setTimeout(a,Math.random()*l),eg[n]=HI(l*2,$I)},c.onmessage=l=>e(String(l.data)),i.socket=c,i.url=c.url,c.onopen=()=>{let l=r;r=!0,o(i),eg[n]=cw,l&&t?.()},i.send=l=>{c.readyState===1&&c.send(l)}};return a(),i};var lg=n=>{let e={},t=new WeakMap,i=o=>{let a=t.get(o);if(!a)throw qe("relay bookkeeping missing registration for relay client");return a},r=()=>{let o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(i(c))}},s=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{let c=e[o];return c||s(o,a())},keyOf:i,scoped:r,getSockets:()=>rg(oi(e).flatMap(([o,a])=>{let c=n(a);return c?[[o,c]]:[]}))}},lw=()=>{if(ig){let n=new AbortController;return addEventListener("online",ag,{signal:n.signal}),addEventListener("offline",og,{signal:n.signal}),()=>n.abort()}return Et};var hg="AES-GCM",jI={},JI=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),KI=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Ys=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Yn(e))),Yr=async n=>jI[n]??=Array.from(await Ys("SHA-1",n)).map(e=>e.toString(36)).join(""),hw=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Yn(`${n}:${e}:${t}`)),{name:hg},!1,["encrypt","decrypt"]),uw=async(n,e)=>cr(await Ys("SHA-256",`${Ut}:${n}:${e}`)),dw="$",fw=",",pw=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(fw)+dw+JI(await crypto.subtle.encrypt({name:hg,iv:t},await n,Yn(e)))},mw=async(n,e)=>{let[t,i]=e.split(dw);return ai(await crypto.subtle.decrypt({name:hg,iv:new Uint8Array(t?.split(fw).map(Number)??[])},await n,KI(i??"")))};var qc=57333,ZI=18e4,QI=20,gw=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(n){this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),qr(QI,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},qc)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){let e=[];for(;e.length<n&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){let e=this.leased.get(n);e&&(Xe(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:Et,close:Et,error:Et}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){let e=this.leased.get(n);e&&(Xe(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},ZI))}checkout(n,e,t){let i=this.shift(n),r=Math.max(0,n-i.length);r>0&&i.push(...qr(r,this.makeOffer));let s=async(o,a=!1)=>{try{let c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return s(this.makeOffer(),!0);throw c}};return En(i.map(o=>s(o)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{Xe(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}};var ug=qe("incorrect password for overlapping room"),xw=(n,e,t)=>{let i=o=>Ys("SHA-256",`${o}:${n}:${e}:${t}`).then(cr),r=async(o,a,c)=>{if(!n)return;if(c){let h=Xn(36);await o({__trystero_pw:"challenge",c:h});let{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw ug;let d=await i(h);if(u.h!==d)throw ug;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw ug;await o({__trystero_pw:"response",h:await i(l.c)})};return{run:r,compose:o=>n||o?async(a,c,l,h)=>{await r(c,l,h),await o?.(a,c,l,h)}:void 0}},eL=n=>{let e=ar(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},yw=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:o})=>{let a={},c=(u,d)=>{let f=a[u];!f||d&&f.peer!==d||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=Xe(f.handshakeTimer),s(u,f.peer))},l=(u,d,f)=>{let g=a[u];if(!g||g.peer!==d)return;let x=eL(f);e?.(u,x),o(u,d,qe(x))},h=(u,d)=>{let f=a[u];!f||f.peer!==d||f.isActive||(f.didLocalHandshakePass=!0,r("",u).catch(g=>l(u,d,qe(`failed sending handshake readiness: ${ar(g,"unknown send failure")}`))),c(u,d))};return{addPeer:(u,d)=>{a[u]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,d)=>{let f=a[u];f&&(f.handshakeTimer=Xe(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete a[u])},canReceiveFromPeer:(u,d)=>{let f=a[u];return!!(f&&(f.isActive||d))},start:(u,d)=>{let f=a[u];if(!f||f.peer!==d)return;f.handshakeTimer=setTimeout(()=>l(u,d,qe(`handshake timed out after ${t}ms`)),t);let g=async(m,v)=>{await i(m,u,v)},x=()=>new Promise((m,v)=>{let _=a[u];if(!_||_.peer!==d){v(qe("peer disconnected during handshake"));return}let M=_.pendingHandshakePayloads.shift();if(M){m(M);return}_.handshakeWaiters.push({resolve:m,reject:C=>v(C)})}),p=qt<u;Promise.resolve(n?.(u,g,x,p)).then(()=>h(u,d)).catch(m=>l(u,d,qn(m,"handshake failed")))},receiveHandshakeData:(u,d,f)=>{let g=a[d];if(!g||g.isActive)return;let x=f===void 0?{data:u}:{data:u,metadata:f},p=g.handshakeWaiters.shift();if(p){p.resolve(x);return}g.pendingHandshakePayloads.push(x)},receiveHandshakeReady:u=>{let d=a[u];!d||d.isActive||(d.didReceiveRemoteReady=!0,c(u))}}};var tL=15e3,nL=5e3,_w="icegatheringstatechange",iL="iceconnectionstatechange",Yc="offer",rL="answer",sL=/out of range/i,vw=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),dg=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{let o=new(i??RTCPeerConnection)({iceServers:oL.concat(r??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],d=[],f=!1,g=!1,x=null,p=null,m=!1,v=()=>p=Xe(p),_=()=>{m||(m=!0,v(),a.close?.())},M=L=>{a.signal?a.signal(L):c.push(L)},C=L=>{let V=a.signal;a.signal=z=>{V?.(z),L(z)},c.length>0&&c.splice(0).forEach(z=>a.signal?.(z))},R=L=>s?vw(L):L,I=L=>{if(!s||typeof L.candidate!="string")return L;let V=vw(L.candidate);return V===L.candidate?L:{...L,candidate:V}},D=L=>({type:L.localDescription?.type??Yc,sdp:R(L.localDescription?.sdp??"")}),w=()=>{let L=o.remoteDescription?.sdp;return L?L.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},T=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,k=L=>{if(!o.remoteDescription)return!1;let V=T();if(typeof L.sdpMLineIndex=="number"&&V>0&&L.sdpMLineIndex>=V)return!1;let z=w();return!(z&&L.usernameFragment&&L.usernameFragment!==z)},X=async L=>{try{return await o.addIceCandidate(L),!0}catch(V){if(V instanceof Error&&sL.test(V.message)&&typeof L.sdpMLineIndex=="number")return!1;throw V}},Z=async()=>{if(!o.remoteDescription||u.length===0)return;let L=u.splice(0),V=[];for(let z of L){if(!k(z)){V.push(z);continue}await X(z)||V.push(z)}V.length>0&&u.push(...V)},b=async L=>{if(k(L)){await X(L)||u.push(L);return}u.push(L)},P=L=>{L.binaryType="arraybuffer",L.bufferedAmountLowThreshold=65535,L.onmessage=V=>{let z=V.data;a.data?a.data(z):l.push(z)},L.onopen=()=>a.connect?.(),L.onclose=_,L.onerror=({error:V})=>a.error?.(qn(V,"data channel error"))},U=async L=>{let V=null;try{await Promise.race([new Promise(z=>{let J=()=>{L.iceGatheringState==="complete"&&(L.removeEventListener(_w,J),z())};L.addEventListener(_w,J),J()}),new Promise(z=>{V=setTimeout(z,tL)})])}finally{Xe(V)}return D(L)},O=async()=>{let L=h?D(o):await U(o);return M(L),L};n?(x=o.createDataChannel("data"),P(x)):o.ondatachannel=({channel:L})=>{x=L,P(L)};let B=async(L=!1)=>{if(o.connectionState!=="closed")try{return f=!0,L&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===Yc&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(L?await o.createOffer({iceRestart:!0}):void 0),await O()}catch(V){a.error?.(qn(V,"failed to create local offer"))}finally{f=!1}};o.onnegotiationneeded=async()=>B(!1),o.onicecandidate=({candidate:L})=>{if(!h||!L)return;let V=I(typeof L.toJSON=="function"?L.toJSON():{candidate:L.candidate,sdpMid:L.sdpMid,sdpMLineIndex:L.sdpMLineIndex,usernameFragment:L.usernameFragment});M({type:Du,sdp:JSON.stringify(V)})};let G=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){_();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){v();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){p||(p=setTimeout(()=>{p=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&_()},nL));return}};o.onconnectionstatechange=G,o.addEventListener(iL,G),o.ontrack=L=>{let V=L.streams[0];if(V){if(!a.track&&!a.stream){d.push({track:L.track,stream:V});return}a.track?.(L.track,V),a.stream?.(V)}},o.onremovestream=L=>a.stream?.(L.stream);let j=n?new Promise(L=>C(V=>{V.type===Yc&&L(V)})):Promise.resolve();return n&&queueMicrotask(()=>{!f&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return x},get isDead(){return o.connectionState==="closed"},getOffer:async(L=!1)=>{if(n)return L?B(!0):o.localDescription?.type===Yc?h?D(o):U(o):j},async signal(L){if(L.type==="candidate"){try{let V=JSON.parse(L.sdp);V&&typeof V=="object"&&await b(I(V))}catch(V){a.error?.(qn(V,"failed to parse remote candidate"))}return}if(!(x?.readyState==="open"&&!L.sdp?.includes("a=rtpmap")))try{let V={...L,sdp:R(L.sdp)};if(L.type===Yc){if(f||o.signalingState!=="stable"&&!g){if(n)return;await En([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(V)])}else await o.setRemoteDescription(V);return await Z(),await o.setLocalDescription(),await O()}if(L.type===rL){g=!0;try{await o.setRemoteDescription(V),await Z()}finally{g=!1}}}catch(V){a.error?.(qn(V,"failed to apply remote signal"))}},sendData:L=>x?.send(L),destroy:()=>{v(),x?.close(),o.close(),f=!1,g=!1,_()},setHandlers:L=>{let{signal:V,...z}=L;Object.assign(a,z),a.data&&l.length>0&&l.splice(0).forEach(J=>a.data?.(J)),V&&C(V),(a.track||a.stream)&&d.length>0&&d.splice(0).forEach(({track:J,stream:ie})=>{a.track?.(J,ie),a.stream?.(ie)})},offerPromise:j,addStream:L=>L.getTracks().forEach(V=>o.addTrack(V,L)),removeStream:L=>o.getSenders().filter(V=>V.track&&L.getTracks().includes(V.track)).forEach(V=>o.removeTrack(V)),addTrack:(L,V)=>o.addTrack(L,V),removeTrack:L=>{let V=o.getSenders().find(z=>z.track===L);V&&o.removeTrack(V)},replaceTrack:(L,V)=>{let z=o.getSenders().find(J=>J.track===L);if(z)return z.replaceTrack(V)}}},oL=[...qr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n}));var aL=Object.getPrototypeOf(Uint8Array),fg=32,cL=0,pg=32,bw=34,mg=35,Nu=36,$s=16*2**10-Nu,$c=255,lL=65535,ww="bufferedamountlow",Sw="close",Mw="error",hL=1e4,uL=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),dL=(n,e=hL)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,r=null,s=c=>{i||(i=!0,n.removeEventListener(ww,o),n.removeEventListener(Sw,a),n.removeEventListener(Mw,a),Xe(r),t(c))},o=()=>s(!0),a=()=>s(!1);if(n.addEventListener(ww,o),n.addEventListener(Sw,a),n.addEventListener(Mw,a),r=setTimeout(()=>s(!1),e),n.readyState!=="open"){s(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&s(!0)}),Ew=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{let r={},s={},o={},a={},c=(u,d,{includePending:f=!1}={})=>(u?Array.isArray(u)?u:[u]:e(f)).flatMap(g=>{let x=n(g,f);return x?[Promise.resolve(d(g,x))]:(console.warn(`${Ut}: no peer with id ${g} found`),[])});return{makeInternalAction:(u,d={})=>{let f=s[u];if(r[u]&&f){let v=r[u].options;if(v.sendToPending!==!!d.sendToPending||v.receiveWhilePending!==!!d.receiveWhilePending)throw qe(`action type "${u}" cannot be redefined`);return f}if(!u)throw qe("action type argument is required");let g=Yn(u);if(g.byteLength>fg)throw qe(`action type string "${u}" (${g.byteLength}b) exceeds byte limit (${fg}). Hint: choose a shorter name.`);let x={sendToPending:!!d.sendToPending,receiveWhilePending:!!d.receiveWhilePending},p=new Uint8Array(fg);p.set(g);let m=0;return r[u]={onComplete:Et,onProgress:Et,setOnComplete:v=>{r[u].onComplete=v;let _=a[u];_?.length&&(delete a[u],_.forEach(({payload:M,peerId:C,metadata:R})=>v(M,C,R)))},setOnProgress:v=>{r[u].onProgress=v},send:async(v,_,M,C,R)=>{i(R);let I=typeof v;if(I==="undefined")throw qe("action data cannot be undefined");let D=I!=="string",w=v instanceof Blob,T=w||v instanceof ArrayBuffer||v instanceof aL,k=M!==void 0,X=T?uL(w?await v.arrayBuffer():v):Yn(D?Ht(v):v),Z=k?Yn(Ht(M)):null,b=Math.ceil(X.byteLength/$s)+(k?1:0)||1,P=qr(b,(U,O)=>{let B=O===b-1,G=!!(k&&O===0),j=new Uint8Array(Nu+(G?Z?.byteLength??0:B?X.byteLength-$s*(b-(k?2:1)):$s));return j.set(p),j.set([m>>8,m&$c],pg),j.set([Number(B)|Number(G)<<1|Number(T)<<2|Number(D)<<3],bw),j.set([Math.round((O+1)/b*$c)],mg),j.set(k?G?Z??new Uint8Array:X.subarray((O-1)*$s,O*$s):X.subarray(O*$s,(O+1)*$s),Nu),j});return m=m+1&lL,await En(c(_,async(U,O)=>{let{channel:B}=O,G=0;for(;G<b;){i(R);let j=P[G];if(!j)break;if(B&&B.bufferedAmount>B.bufferedAmountLowThreshold){let z=await dL(B);if(i(R),!z)break}let L=n(U,x.sendToPending);if(!L||L!==O)break;O.sendData(j),G++;let V=j[mg]??$c;C?.(V/$c,U,M)}},{includePending:x.sendToPending})),[]},options:x},s[u]={send:r[u].send,onMessage:r[u].setOnComplete,onProgress:r[u].setOnProgress}},handleData:(u,d)=>{let f=new Uint8Array(d),g=ai(f.subarray(cL,pg)).replaceAll("\0",""),x=r[g];if(!t(u,!!x?.options.receiveWhilePending))return;let p=(f[pg]??0)<<8|(f[33]??0),m=f[bw]??0,v=f[mg]??0,_=f.subarray(Nu),M=!!(m&1),C=!!(m&2),R=!!(m&4),I=!!(m&8);o[u]??={},o[u][g]??={};let D=o[u][g][p]??={chunks:[]};if(C?D.meta=Ri(ai(_)):D.chunks.push(_),x?.onProgress(v/$c,u,D.meta),!M)return;let w=new Uint8Array(D.chunks.reduce((k,X)=>k+X.byteLength,0));D.chunks.reduce((k,X)=>(w.set(X,k),k+X.byteLength),0),delete o[u][g][p];let T=R?w:I?Ri(ai(w)):ai(w);if(x){x.onComplete(T,u,D.meta);return}(a[g]??=[]).push({payload:T,peerId:u,...D.meta===void 0?{}:{metadata:D.meta}})},clearPeer:u=>{delete o[u]}}};var fL=500,ya=(n,e)=>{let t=qe(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},gg=n=>{if(n?.aborted)throw ya("aborted","operation aborted")},Tw=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,pL=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,Ou=(n,e)=>e===void 0?n:{...n,metadata:e},Aw=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{let i={},r={},s=Ew({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:gg}),o=s.makeInternalAction,a=s.handleData,c=f=>{let g=r[f];g&&(Xe(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete r[f])},l=(f,g)=>{oi(r).forEach(([x,p])=>{p.peerId===f&&(c(x),p.reject(g))})},h=(f,g)=>{s.clearPeer(f),l(f,ya("disconnected",ar(g,"peer disconnected")))},u=o("@_response");return u.onMessage((f,g,x)=>{let p=pL(x);if(!p)return;let m=r[p.r];if(!(!m||m.peerId!==g)){if(c(p.r),p.e!==void 0){m.reject(ya("rejected",p.e));return}m.resolve(f)}}),{makeAction:(f,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw qe('request actions must use kind: "request"');let x=g?.kind??"message",p=o(f),m=i[f];if(m){if(m.kind!==x)throw qe(`action type "${f}" cannot be redefined`);return m.action}let v={kind:x,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:g?.onReceiveProgress??null},_=(b,P)=>b?(U,O)=>b(U,Ou({peerId:O},P)):void 0,M=b=>{v.onReceiveProgress=b},C=(b,P,U)=>{let O=v.kind==="request"?Tw(U):null;v.onReceiveProgress?.(b,Ou({peerId:P},O?O.m:U))};if(p.onProgress(C),x==="message"){let b=g?.onMessage??null,P=()=>{if(!b)return;let O=b;v.pendingMessages.splice(0).forEach(({payload:B,peerId:G,metadata:j})=>{Promise.resolve().then(()=>O(B,Ou({peerId:G},j))).catch(L=>console.error(`${Ut} action handler error:`,L))})},U={send:async(O,B={})=>{await p.send(O,B.target,B.metadata,_(B.onProgress,B.metadata),B.signal)},get onMessage(){return b},set onMessage(O){b=O,P()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(O){M(O)}};return p.onMessage((O,B,G)=>{if(!b){v.pendingMessages.push(G===void 0?{payload:O,peerId:B}:{payload:O,peerId:B,metadata:G});return}let j=b;Promise.resolve().then(()=>j(O,Ou({peerId:B},G))).catch(L=>console.error(`${Ut} action handler error:`,L))}),v.action=U,i[f]=v,P(),U}let R=g?.onRequest??null,I=b=>{Xe(b.timer);let P=v.pendingRequests.indexOf(b);P>-1&&v.pendingRequests.splice(P,1)},D=(b,P,U)=>{u.send(null,b,{r:P,e:ar(U,"request failed")})},w=(b,P)=>{I(b),Promise.resolve().then(()=>P(b.payload,{peerId:b.peerId,...b.metadata===void 0?{}:{metadata:b.metadata},signal:b.controller.signal})).then(async U=>{if(U===void 0)throw qe("request handler returned undefined");await u.send(U,b.peerId,{r:b.requestId})}).catch(U=>D(b.peerId,b.requestId,U)).finally(()=>b.controller.abort())},T=()=>{R&&v.pendingRequests.slice().forEach(b=>w(b,R))},k=(b,P,U,O)=>{if(R){w({payload:b,peerId:P,...U===void 0?{}:{metadata:U},requestId:O,controller:new AbortController,timer:null},R);return}let B={payload:b,peerId:P,...U===void 0?{}:{metadata:U},requestId:O,controller:new AbortController,timer:setTimeout(()=>{I(B),B.controller.abort(),D(P,O,"request handler unavailable")},fL)};v.pendingRequests.push(B)},X=async(b,P)=>{let{target:U,metadata:O,onProgress:B,signal:G,timeoutMs:j}=P;if(gg(G),!n(U,!1))throw ya("disconnected",`no active peer with id ${U}`);let L=Xn(20),V=new Promise((z,J)=>{let ie={peerId:U,resolve:z,reject:J,timer:null,...G===void 0?{}:{signal:G}},te=()=>{c(L),J(ya("aborted","operation aborted"))};G&&(ie.abortHandler=te,G.addEventListener("abort",te,{once:!0})),r[L]=ie}).catch(z=>{throw z});try{await p.send(b,U,O===void 0?{r:L}:{r:L,m:O},_(B,O),G);let z=r[L];return z&&j!==void 0&&(z.timer=setTimeout(()=>{c(L),z.reject(ya("timeout","request timed out"))},j)),await V}catch(z){throw c(L),z}},Z={request:X,requestMany:async(b,P)=>(gg(P.signal),await En(P.targets.map(async U=>{try{let O={peerId:U,status:"fulfilled",value:await X(b,{target:U,...P.metadata===void 0?{}:{metadata:P.metadata},...P.timeoutMs===void 0?{}:{timeoutMs:P.timeoutMs},...P.onProgress===void 0?{}:{onProgress:P.onProgress},...P.signal===void 0?{}:{signal:P.signal}})};return P.onResult?.(O),O}catch(O){let B=qn(O,"request failed");if(B.kind==="aborted"||!B.kind)throw B;let G=B.kind==="timeout"?{peerId:U,status:"timeout"}:B.kind==="disconnected"?{peerId:U,status:"disconnected"}:{peerId:U,status:"rejected",error:B};return P.onResult?.(G),G}}))),get onRequest(){return R},set onRequest(b){R=b,T()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(b){M(b)}};return p.onMessage((b,P,U)=>{let O=Tw(U);O&&k(b,P,O.m,O.r)}),v.action=Z,i[f]=v,T(),Z},makeInternalAction:o,handleData:a,clearPeer:h}};var Cw=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Rw=n=>e=>{let t=n.get(e);return t||(t=Xn(20),n.set(e,t)),t},xg=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map;return{getStreamKey:Rw(n),getTrackKey:Rw(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&i.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?i.get(a):void 0),rememberRemoteTrack:(o,a,c,l,h)=>{let u={track:a,stream:c};r.set(o,u),l&&s.set(l,u),h&&i.set(h,c)},getRemoteTrack:(o,a)=>r.get(o)??(a?s.get(a):void 0),clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},Pw=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{let i={},r={},s=xg(),o={onPeerStream:null,onPeerTrack:null},a=(h,u,d,f)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(u,d,typeof d.id=="string"?d.id:void 0),o.onPeerStream?.(d,h,f))},c=(h,u,d,f,g)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(u,d,f,typeof d.id=="string"?d.id:void 0,typeof f.id=="string"?f.id:void 0),o.onPeerTrack?.(d,f,h,g))},l=(h,u,d,f,g,x={})=>{let p={k:u,...x,...d===void 0?{}:{m:d}};return n(h,async(m,v)=>{await f(p,m),g(v)})};return{addStream:(h,u,d)=>l(u.target,s.getStreamKey(h),u.metadata,d,f=>f.addStream(h),{s:h.id}),removeStream:(h,u)=>{n(u,(d,f)=>f.removeStream(h))},addTrack:(h,u,d,f)=>l(d.target,s.getTrackKey(h),d.metadata,f,g=>g.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{n(u,(d,f)=>f.removeTrack(h))},replaceTrack:(h,u,d,f)=>l(d.target,s.getTrackKey(u),d.metadata,f,g=>g.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{if(!e(u))return;let d=Cw(h);if(!d)return;let f=t(u)?.__trysteroMedia?.getRemoteStream(d.key,d.streamId);if(f){a(u,d.key,f,d.metadata);return}(i[u]??=[]).push(d)},receiveTrackMeta:(h,u)=>{if(!e(u))return;let d=Cw(h);if(!d)return;let f=t(u)?.__trysteroMedia?.getRemoteTrack(d.key,d.trackId);if(f){c(u,d.key,f.track,f.stream,d.metadata);return}(r[u]??=[]).push(d)},receiveRemoteStream:(h,u)=>{if(!e(h))return;let d=i[h]?.shift();d&&a(h,d.key,u,d.metadata)},receiveRemoteTrack:(h,u,d)=>{if(!e(h))return;let f=r[h]?.shift();f&&c(h,f.key,u,d,f.metadata)},clearPeer:h=>{delete i[h],delete r[h]},get onPeerStream(){return o.onPeerStream},set onPeerStream(h){o.onPeerStream=h},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(h){o.onPeerTrack=h}}};var Iw="beforeunload",mL=1e4,$r=n=>"@_"+n,jc=new Set,Lw=()=>jc.forEach(n=>n()),gL=n=>(jc.add(n),jc.size===1&&addEventListener(Iw,Lw),()=>{jc.delete(n),jc.size||removeEventListener(Iw,Lw)}),Dw=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=mL,isPassive:o=!1}={})=>{let a={},c={},l={},h={onPeerJoin:null,onPeerLeave:null},u=Et,d=null,f=(b,P,{includePending:U=!1}={})=>(b?Array.isArray(b)?b:[b]:nn(U?a:c)).flatMap(O=>{let B=U?a[O]:c[O];return B?[Promise.resolve(P(O,B))]:(console.warn(`${Ut}: no peer with id ${O} found`),[])}),g=Pw({iterate:(b,P)=>f(b,(U,O)=>P(U,O)),isActive:b=>!!c[b],getSharedMediaPeer:b=>a[b]??null}),x=Aw({getPeer:(b,P)=>(P?a:c)[b],getPeerIds:b=>nn(b?a:c),canReceiveFromPeer:(b,P)=>!!d?.canReceiveFromPeer(b,P)}),p=x.makeInternalAction,m=x.handleData,v=x.makeAction,_=(b,P=qe("peer disconnected"))=>{let U=qn(P,"peer disconnected");d?.clearPeer(b,U),delete a[b],delete c[b],x.clearPeer(b,U),l[b]?.splice(0).forEach(O=>O.reject(U)),delete l[b],g.clearPeer(b)},M=(b,P,U)=>{let O=a[b];if(!O||P&&O!==P)return;let B=!!c[b];_(b,U),O.destroy(),B&&h.onPeerLeave?.(b),e(b)},C=async()=>{await k.send(""),await new Promise(b=>setTimeout(b,99)),oi(a).forEach(([b,P])=>{P.destroy(),_(b,qe("room left"))}),u(),t()},R=p($r("ping")),I=p($r("pong")),D=p($r("signal")),w=p($r("stream")),T=p($r("track")),k=p($r("leave"),{sendToPending:!0,receiveWhilePending:!0}),X=p($r("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),Z=p($r("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=yw({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:X.send,sendHandshakeReady:Z.send,onActivate:(b,P)=>{c[b]=P,h.onPeerJoin?.(b)},onFailure:(b,P,U)=>M(b,P,U)}),R.onMessage((b,P)=>I.send("",P)),I.onMessage((b,P)=>{let U=l[P];U?.shift()?.resolve(),U&&!U.length&&delete l[P]}),D.onMessage((b,P)=>{c[P]&&a[P]?.signal(b)}),w.onMessage((b,P)=>g.receiveStreamMeta(b,P)),T.onMessage((b,P)=>g.receiveTrackMeta(b,P)),k.onMessage((b,P)=>M(P,void 0,qe("peer left room"))),X.onMessage((b,P,U)=>d?.receiveHandshakeData(b,P,U)),Z.onMessage((b,P)=>d?.receiveHandshakeReady(P)),n((b,P)=>{let U=a[P];if(U){if(U===b)return;U.destroy(),_(P,qe("peer replaced"))}a[P]=b,d?.addPeer(P,b),b.setHandlers({data:O=>m(P,O),stream:O=>g.receiveRemoteStream(P,O),track:(O,B)=>g.receiveRemoteTrack(P,O,B),signal:O=>{c[P]&&D.send(O,P)},close:()=>M(P,b,qe("peer disconnected")),error:O=>{console.error(`${Ut} peer error:`,O),M(P,b,O)}}),d?.start(P,b)}),ig&&(u=gL(()=>C().catch(Et))),{makeAction:v,leave:C,ping:async b=>{if(!c[b])throw qe(`no active peer with id ${b}`);let P=Date.now();return await new Promise((U,O)=>{let B=l[b]??=[],G=()=>{let L=l[b];if(!L)return;let V=L.indexOf(j);V>-1&&L.splice(V,1),L.length||delete l[b]},j={resolve:()=>{G(),U()},reject:L=>{G(),O(L)}};B.push(j),R.send("",b).catch(L=>j.reject(qn(L,"peer disconnected")))}),Date.now()-P},isPassive:()=>o,getPeers:()=>rg(oi(c).map(([b,P])=>[b,P.connection])),addStream:(b,P={})=>g.addStream(b,P,w.send),removeStream:(b,P={})=>{g.removeStream(b,P.target)},addTrack:(b,P,U={})=>g.addTrack(b,P,U,T.send),removeTrack:(b,P={})=>{g.removeTrack(b,P.target)},replaceTrack:(b,P,U={})=>g.replaceTrack(b,P,U,T.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(b){h.onPeerJoin=b,b&&nn(c).forEach(P=>b(P))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(b){h.onPeerLeave=b},get onPeerStream(){return g.onPeerStream},set onPeerStream(b){g.onPeerStream=b},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(b){g.onPeerTrack=b}}};var Nw=1,Ow=2,Uw=(n,e)=>{let t=Yn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=Nw,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},xL=(n,e)=>{let t=Yn(n),i=new Uint8Array(4+t.byteLength);return i[0]=Ow,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},yL=n=>{let e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===Nw){let r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:ai(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==Ow||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:ai(e.subarray(4,i)),isPresent:e[1]===1}},kw=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},zw=n=>{if(kw(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},Bw=class{byApp={};roomPresenceHandlers={};getMap(n){return this.byApp[n]??={}}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return kw(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(xL(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],r=i?.[e];if(!r||r.isClosing)return;r.idleTimer=Xe(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();let s=or(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),nn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let r=this.getMap(n),s=r[e];if(s){if(s.idleTimer=Xe(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}let o={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:xg(),idleMs:i,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(n,e,{destroyPeer:!1}),error:a=>{console.error(`${Ut} peer error:`,a),this.clear(n,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),r[e]=o,o}bind(n,e,t,{onDetach:i}){let r=t.bindings[n];if(r)return t.idleTimer=Xe(t.idleTimer),{proxy:r.proxy,isNew:!1};let s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Et,proxy:{}},o=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=nn(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Uw(s.roomToken,c))},destroy:()=>o(),setHandlers:c=>{let{signal:l,...h}=c;Object.assign(s.handlers,h),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{let l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(n),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{let l=t.streamOwners.get(c);l&&(l.delete(n),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{let h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(n),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{let l=t.trackOwners.get(c);l&&(l.rooms.delete(n),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{let h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);let u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=a,s.detach=o,t.bindings[n]=s,t.controlRoomId??=n,t.idleTimer=Xe(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;let l=t.pendingDataByToken.get(c);l?.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Uw(c,h))),this.flushBindingQueues(s)}),{proxy:a,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||nn(n.bindings).length>0||(n.idleTimer=Xe(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||nn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=or(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){let{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){let t=yL(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}let i=n.bindingsByToken[t.roomToken];if(!i){let r=n.pendingDataByToken.get(t.roomToken)??[];r.push(t.payload),n.pendingDataByToken.set(t.roomToken,r);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){or(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}};var _L=23333,vL=12,bL=7533,wL=23333,yg="__legacy__",zu="offer-placeholder",SL=["offer","answer","candidate"],ML=n=>{if(typeof n=="string")try{let e=Ri(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},Jc=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,EL=n=>SL.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),Vw=(n,e,t,i,r,s)=>{n.toCipher(e).then(o=>{n.isLeaving()||!s()||i(t,Ht(r(o.sdp)))})},TL=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),AL=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),CL=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${AL(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Fu=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:CL(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},_a=(n,e)=>n[e]??=TL(),Nn=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},ku=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=Xe(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,Nn(n))},Bu=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,Nn(n))},_g=(n,e)=>{n.offerRelayTimers[e]=Xe(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,Nn(n))},Fw=(n,e)=>{n?.offerRelays[e]===zu&&_g(n,e)},RL=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},va=(n,e)=>{let t=n.offerAnswered;n.offerExpiryTimer=Xe(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,r)=>_g(n,r)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||RL(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,Nn(n)},PL=(n,e,t,i)=>{Xe(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&Fu(n,r,t),i.destroy(),ku(r,i),n.checkDeactivate())},wL)},IL=async(n,e,t)=>{let i=t?[t,yg]:[yg];for(let r of i){let s=n.pendingCandidates[r];if(s?.length){delete n.pendingCandidates[r];for(let o of s)await e.signal(o)}}},Hw=(n,e,t,i=qc)=>{Xe(e.offerExpiryTimer);let r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Fu(n,s,t),va(s,n.offerPool),n.checkDeactivate())},i)},LL=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let r=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!r)throw qe("failed to allocate offer peer");let{peer:s,offer:o}=r;e.offerPeer=s,e.offerId=Xn(vL),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Nn(e);let a=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&Fu(n,e,t),va(e,n.offerPool)),n.disconnectPeer(s,t),n.checkDeactivate()};return s.setHandlers({connect:()=>n.connectPeer(s,t,i),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),Hw(n,e,t),{peer:s,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),DL=async(n,e,t,i,r)=>{if(i){n.attachSharedPeerToRoom(t,i);return}let s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Fw(s,e);return}if(s.offerRelays[e]!==zu)return;let[o,a]=await En([Yr(qs(n.rootTopicPlaintext,t)),LL(n,s,t,e)]);if(n.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==zu){Fw(s,e);return}s.offerRelayTimers[e]=Xe(s.offerRelayTimers[e]),s.offerRelays[e]=!0,Nn(s),s.offerRelayTimers[e]=setTimeout(()=>kL(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==a.peer||s.offerId!==a.offerId||l.type!=="candidate"||Vw(n,l,o,r,h=>({peerId:qt,offerId:a.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===a.peer&&s.offerId===a.offerId))},r(o,Ht({peerId:qt,offerId:a.offerId,offer:a.offer,...n.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>s.offerSignalRelays[e]?.(l))},UL=async(n,e,t,i,r,s,o)=>{let a=_a(n.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;let c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||s)&&qt<t)return;c&&va(a,n.offerPool);let l=n.initPeer(!1,n.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,PL(n,a,t,l),Nn(a);let h=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&Fu(n,a,t),ku(a,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t,e),close:h,error:h});let u;try{u=await n.toPlain({type:"offer",sdp:i})}catch{ku(a,l),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){ku(a,l);return}let d=await Yr(qs(n.rootTopicPlaintext,t));n.isLeaving()||(l.setHandlers({signal:f=>{n.isLeaving()||a.answeringPeer!==l||l.isDead||f.type!=="answer"&&f.type!=="candidate"||Vw(n,f,d,o,g=>{let x={peerId:qt};return f.type==="answer"?(a.answerSent=!0,x.answer=g):x.candidate=g,r&&(x.offerId=r),n.isPassive&&(x.passive=!0),x},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await IL(a,l,r))},NL=async(n,e,t,i,r)=>{let s;try{s=await n.toPlain({type:Du,sdp:t})}catch{return}let o=_a(n.peerStates,e),a=i&&o?.offerPeer&&o.offerId===i?o.offerPeer:null,c=o?.answeringPeer??null,l=!i&&o?.offerPeer?o.offerPeer:null,h=r&&!r.isDead?r:a??c??l;if(!h||h.isDead){let u=i??yg;(o.pendingCandidates[u]??=[]).push(s);return}h.signal(s)},OL=async(n,e,t,i,r,s)=>{let o;try{o=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(s)n.offerPool.claimLeased(s),s.setHandlers({connect:()=>n.connectPeer(s,t,e),close:()=>n.disconnectPeer(s,t)}),s.signal(o);else{let a=n.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||r&&a.offerId&&r!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,Hw(n,a,t,_L),a.offerPeer.signal(o)}},kL=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(_g(i,t),n.checkDeactivate())},Gw=n=>e=>async(t,i,r)=>{if(n.isLeaving())return;let s=ML(i);if(!s||EL(s))return;let o=Jc(s,"peerId")??"",a=Jc(s,"offer"),c=Jc(s,"answer"),l=Jc(s,"candidate"),h=Jc(s,"offerId"),u=s.peer,d=s.hasOutgoingOffer===!0,f=s.passive===!0;if(!o||o===qt)return;let[g,x]=await En([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==x||n.isPassive&&f||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let p=n.peerStates[o],m=p?.connectedPeer;if(m&&p){let M=zw(m);if(M==="live"){p.connectedPeerUnhealthySinceMs=null;return}if(M==="stale")Bu(p,o,"message-from-stale-peer");else{let C=Date.now(),R=p.connectedPeerUnhealthySinceMs??C;if(p.connectedPeerUnhealthySinceMs=R,C-R<bL)return;Bu(p,o,"message-from-prolonged-disconnect")}}let v=n.sharedPeers.get(n.appId,o);v&&n.sharedPeers.getHealth(v.peer)==="stale"&&(n.sharedPeers.clear(n.appId,o,{destroyPeer:!0}),v=void 0);let _=!!(o&&!a&&!c&&!l);if(_&&!v){let M=_a(n.peerStates,o),C=qt<o;if(M.answeringPeer||M.connectedPeer||M.offerAnswered)return;if(!C&&!M.offerPeer){let R=await Yr(qs(n.rootTopicPlaintext,o));!n.isLeaving()&&!M.connectedPeer&&r(R,Ht({peerId:qt}));return}if(M.offerRelays[e])return;M.offerRelays[e]=zu,Nn(M)}if(v&&(a||c||l)){if(v.bindings[n.roomId])return;n.attachSharedPeerToRoom(o,v);return}if(_)return DL(n,e,o,v,r);if(a)return UL(n,e,o,a,h,d,r);if(l)return NL(n,o,l,h,u);if(c)return OL(n,e,o,c,h,u)};var vg=5333,zL=[233,533,1333],BL=7533,FL=123333,bg=({init:n,subscribe:e,announce:t,deactivate:i})=>{let r={},s={},o={},a={},c=new Bw,l=()=>or(r).some(C=>nn(C).length>0),h=C=>s[C]??={},u=C=>o[C]??={},d=(C,R,I)=>{c.getHealth(C.peer)==="live"&&c.sendRoomPresence(C,R,I)},f=(C,R)=>{oi(s[C]??{}).forEach(([I,D])=>{if(!D.shouldAdvertise())return;let{roomToken:w,roomTokenPromise:T}=D;if(w){d(R,w,!0);return}T.then(k=>{s[C]?.[I]===D&&D.roomToken===k&&(c.get(C,R.peerId)!==R||R.isClosing||D.shouldAdvertise()&&d(R,k,!0))})})},g=(C,R,I)=>or(c.getMap(C)).forEach(D=>d(D,R,I)),x=C=>{a[C]||(a[C]=c.setRoomPresenceHandler(C,(R,I,D)=>{if(!D)return;let w=c.get(C,R),T=o[C]?.[I];!w||!T||s[C]?.[T]?.attachSharedPeerToRoom(R,w)}))},p=C=>{r[C]&&nn(r[C]).length>0||(a[C]?.(),delete a[C],delete s[C],delete o[C])},m=!1,v=[],_=null,M=Et;return(C,R,I)=>{if(!C)throw qe("requires a config map as the first argument");if(I&&typeof I!="object")throw qe("third argument must be a callbacks object");let{appId:D}=C,w=I?.onJoinError,T=I?.onPeerHandshake,k=I?.handshakeTimeoutMs;if(!D)throw qe("config map is missing appId field");if(!R)throw qe("roomId argument required");if(k!==void 0&&(!Number.isFinite(k)||k<=0))throw qe("handshakeTimeoutMs must be a positive number");if(r[D]?.[R])return r[D][R];x(D);let X=qs(Ut,D,R),Z=Yr(X),b=Yr(qs(X,qt)),P=hw(C.password??"",D,R),U=uw(D,R),O=C._test_only_sharedPeerIdleMs??FL,B=!1,G=ee=>async se=>({type:se.type,sdp:await ee(P,se.sdp)}),j=G(mw),L=G(pw),V=c.getMap(D),z=()=>dg(!0,C);_||=new gw(z);let J=_,ie=async ee=>{let se=await ee.getOffer(Date.now()-ee.created>qc);if(!se||se.type!=="offer")throw qe("failed to get offer for peer");return(await L(se)).sdp},te=(ee,se)=>{let he=_a(de.peerStates,ee);he.answeringExpiryTimer=Xe(he.answeringExpiryTimer),he.answeringPeer=null;let{proxy:Q,isNew:Se}=c.bind(R,U,se,{onDetach:()=>{let Ce=de.peerStates[ee];Ce?.connectedPeer===se.peer&&(Ce.connectedPeer=null,Ce.connectedPeerUnhealthySinceMs=null,Nn(Ce))}});he.connectedPeer=se.peer,he.connectedPeerUnhealthySinceMs=null,Nn(he),Se&&q(Q,ee),va(he,J)},ce=(ee,se,he)=>{if(B){ee.destroy();return}let Q=_a(de.peerStates,se);if(Q.connectedPeer){let Re=V[se];if(Re&&Q.connectedPeer===Re.peer&&Re.bindings[R])return;Q.connectedPeer!==ee&&!ee.isDead&&ee.destroy();return}let Se=V[se];if(Se&&c.getHealth(Se.peer)==="stale"&&(c.clear(D,se,{destroyPeer:!0}),Se=void 0),Se&&Se.peer!==ee){ee.isDead||ee.destroy(),te(se,Se);return}let Ce=!Se;Se||=c.register(D,se,ee,O),te(se,Se),Ce&&f(D,Se)},le=(ee,se)=>{if(B)return;let he=de.peerStates[se];he?.connectedPeer===ee&&(Bu(he,se,"close-event"),it())},ue=!!C.passive,ye=null,we,W=Et,it=()=>{if(!ue||!de.isActive)return;let ee=!1;oi(de.peerStates).forEach(([se,he])=>{he.connectedPeer||he.answeringPeer||he.offerInitPromise||he.offerPeer||he.offerRelays.some(Boolean)?ee=!0:he.status==="idle"&&delete de.peerStates[se]}),ee||(de.isActive=!1,we=Xe(we),A.forEach(Xe),A.length=0,W(),ye?.roomToken&&g(D,ye.roomToken,!1))},de={appId:D,roomId:R,config:C,peerStates:{},rootTopicPlaintext:X,rootTopicP:Z,selfTopicP:b,toPlain:j,toCipher:L,isLeaving:()=>B,isPassive:ue,isActive:!ue,onJoinError:w,sharedPeers:c,offerPool:J,encryptOffer:ie,initPeer:dg,connectPeer:ce,disconnectPeer:le,attachSharedPeerToRoom:te,checkDeactivate:it,announceIntervals:[],announceIntervalMs:vg},_e={config:C,appId:D,roomId:R,isPassive:ue},ae=Gw(de);if(!m){let ee=n(C);v=(Array.isArray(ee)?ee:[ee]).map(se=>Promise.resolve(se)),m=!0,M=C.relayConfig?.manualReconnection?Et:lw()}!ue&&!J.isActive&&J.warmup(),de.announceIntervals=v.map(()=>vg);let et=v.map(()=>0),Le=v.map(()=>0),A=[],S=v.map(async(ee,se)=>e(await ee,await Z,await b,ae(se),he=>J.getOffers(he,ie),_e));En([Z,b]).then(([ee,se])=>{if(B)return;let he=async(Q,Se)=>{if(B||ue&&!de.isActive)return;let Ce=ue?{passive:!0}:void 0,Re;try{Re=await t(Q,ee,se,Ce,_e),Le[Se]=0}catch(Qe){let ut=Le[Se]??0;ut===0&&C.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Ut}: announce failed - ${ar(Qe,"")}`),Le[Se]=ut+1}if(B||ue&&!de.isActive)return;typeof Re=="number"&&(de.announceIntervals[Se]=Re);let Ae=et[Se]??0;et[Se]=Ae+1;let be=de.announceIntervals[Se]??vg,Ne=zL[Ae];A[Se]=setTimeout(()=>{he(Q,Se)},typeof Ne=="number"?Math.min(be,Ne):be)};W=()=>{i&&v.forEach(async Q=>{let Se=await Q;B||i(Se,ee,se,_e)})},de.requeueAnnounce=()=>{A.forEach(Xe),A.length=0,we=Xe(we),J.isActive||J.warmup(),ye?.roomToken&&g(D,ye.roomToken,!0),we=setTimeout(it,BL),v.forEach(async(Q,Se)=>{let Ce=await Q;Ce&&!B&&(et[Se]=0,he(Ce,Se))})},S.forEach(async(Q,Se)=>{if(await Q,B)return;let Ce=await v[Se];Ce&&!B&&(!ue||de.isActive)&&he(Ce,Se)})});let q=Et,{compose:re}=xw(C.password??"",D,R),ne=re(T),oe={...ne?{onPeerHandshake:ne}:{},...k===void 0?{}:{handshakeTimeoutMs:k},isPassive:ue,onHandshakeError:(ee,se)=>w?.({error:se.replace(/^handshake failed: /,""),appId:D,peerId:ee,roomId:R})};r[D]??={};let Ee=h(D),me=Dw(ee=>q=ee,ee=>{if(B)return;let se=de.peerStates[ee];se?.connectedPeer&&(se.connectedPeer=null,Nn(se),it())},()=>{B=!0,q=Et;let ee=s[D]?.[R];ee?.roomToken&&(g(D,ee.roomToken,!1),delete o[D]?.[ee.roomToken],o[D]&&!nn(o[D]).length&&delete o[D]),s[D]&&(delete s[D][R],nn(s[D]).length||delete s[D]),oi(de.peerStates).forEach(([se,he])=>{if(he.answeringExpiryTimer=Xe(he.answeringExpiryTimer),he.connectedPeer&&!he.connectedPeer.isDead){let Q=V[se];(!Q||Q.peer!==he.connectedPeer)&&he.connectedPeer.destroy()}he.answeringPeer&&!he.answeringPeer.isDead&&he.answeringPeer.destroy(),va(he,J),he.connectedPeer=null,he.answeringPeer=null,Nn(he)}),r[D]&&(delete r[D][R],nn(r[D]).length===0&&delete r[D]),A.forEach(Xe),we=Xe(we),S.forEach(async se=>{(await se)()}),!l()&&(m=!1,J.destroy(),_=null,M(),p(D))},oe);return ye={roomToken:null,roomTokenPromise:U,attachSharedPeerToRoom:te,shouldAdvertise:()=>!ue||de.isActive},Ee[R]=ye,U.then(ee=>{let se=ye;!se||B||s[D]?.[R]!==se||(se.roomToken=ee,u(D)[ee]=R,or(V).forEach(he=>{he.remoteRoomTokens.has(ee)&&te(he.peerId,he)}),(!ue||de.isActive)&&g(D,ee,!0))}),r[D][R]=me}};var VL=["offer","answer","candidate"],HL=n=>{if(typeof n=="string")try{let e=Ri(n);return e&&typeof e=="object"?e:null}catch{return null}return n},wg=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,GL=n=>VL.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),WL=n=>{let e=HL(n);if(!e||GL(e))return!1;let t=wg(e,"peerId");return!!(t&&t!==qt&&e.passive!==!0&&!wg(e,"answer")&&!wg(e,"candidate"))},Sg=n=>{if(!n)throw qe("topic strategy missing room context");return n},Ww=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Mg=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Eg=({init:n,subscribeTopic:e,publishTopic:t,unpublishTopic:i})=>bg({init:n,subscribe:async(r,s,o,a,c,l)=>{let h=Sg(l),u=(_,M)=>t(r,_,M,Mg(h,"signal",s,o)),d=null,f=!1,g=null,x=!1,p=_=>{f||(f=!0,_())},m=()=>(g||(g=Promise.resolve(e(r,o,(_,M)=>{x||a(_,M,u)},Ww(h,"self",s,o))).then(_=>{d=_,x&&p(_)})),g);h.isPassive||await m();let v=await e(r,s,async(_,M)=>{x||(h.isPassive&&WL(M)&&await m(),x||await a(_,M,u))},Ww(h,"root",s,o));return()=>{x=!0,d&&p(d),v()}},announce:(r,s,o,a,c)=>{let l=Sg(c);return t(r,s,Ht({peerId:qt,...a}),Mg(l,"announce",s,o))},...i?{deactivate:(r,s,o,a)=>i(r,s,Mg(Sg(a),"announce",s,o))}:{}});var qw=lg(n=>n.socket),XL=5,Yw="x",$w="EVENT",{secretKey:qL,publicKey:YL}=Qm.keygen(),$L=cr(YL),jL={},JL={},KL={},Xw=250,jw=()=>Math.floor(Date.now()/1e3),Jw=n=>KL[n]??=Uu(n,1e4)+2e4,ZL=async(n,e)=>{let t={kind:Jw(n),tags:[[Yw,n]],created_at:jw(),content:e,pubkey:$L},i=await Ys("SHA-256",Ht([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Ht([$w,{...t,id:cr(i),sig:cr(await Qm.signAsync(i,qL))}])};var ba={},QL=(n,e,t)=>{let i=ba[n.url]??={subIds:[],topics:new Map,updateTimer:null};i.topics.set(e,t),Kw(n,i)},eD=(n,e)=>{let t=ba[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),t.subIds.forEach(i=>n.send(Ht(["CLOSE",i]))),delete ba[n.url]):Kw(n,t))},Kw=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null,Zw(n)},0))},Zw=n=>{let e=ba[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],r=jw();for(let s=0;s<t.length;s+=Xw)i.push(t.slice(s,s+Xw));for(;e.subIds.length>i.length;){let s=e.subIds.pop();s&&n.send(Ht(["CLOSE",s]))}i.forEach((s,o)=>{let a=e.subIds[o]??=Xn(64);n.send(Ht(["REQ",a,{kinds:[...new Set(s.map(Jw))],since:r,"#x":s}]))})},tD=n=>{let e=ba[n.url];e&&e.topics.size>0&&Zw(n)},Qw=Eg({init:n=>sg(n,nD,XL,!0).map(e=>{let t=qw.register(e,()=>cg(e,i=>{let[r,s,o,a]=Ri(i);if(r!==$w){let c=`${Ut}: relay failure from ${t.url} - `;n.relayConfig?.warnOnRelayFailure!==!1&&(r==="NOTICE"?console.warn(c+s):r==="OK"&&!o&&console.warn(c+a));return}if(o&&typeof o=="object"&&"content"in o){let{content:c}=o,l=JL[s];if(l){l(jL[s]??"",c);return}let h=ba[t.url];if(h?.subIds.includes(s)&&o.tags){let u=o.tags.find(d=>d[0]===Yw);u?.[1]&&h.topics.get(u[1])?.(u[1],c)}}},()=>tD(t)));return t.ready}),subscribeTopic:(n,e,t)=>(QL(n,e,(r,s)=>void t(r,s)),()=>{eD(n,e)}),publishTopic:async(n,e,t)=>n.send(await ZL(e,typeof t=="string"?t:Ht(t)))}),GO=qw.getSockets,nD=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(n=>"wss://"+n);var iD="voxelier-scene",Pg="s",jr=null,Tg=null,Ag=null,Cg=null,Kc=null,Vu=null,Zc=null,Rg=null,wa=!1,Hu=new Set,Ig=()=>({active:!!jr,role:Kc,link:Vu?tS(Vu):null,peers:Hu.size}),eS=n=>{Zc=n},rD=()=>{let n=new Uint8Array(16);return crypto.getRandomValues(n),[...n].map(e=>e.toString(16).padStart(2,"0")).join("")};async function sD(n){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(`voxelier:${n}`));return[...new Uint8Array(e)].slice(0,16).map(t=>t.toString(16).padStart(2,"0")).join("")}var tS=n=>`${location.origin}${location.pathname}#${Pg}=${n}`;function oD(){let n=new URLSearchParams(location.hash.replace(/^#/,"")).get(Pg);return n&&/^[0-9a-f]{16,64}$/.test(n)?n:null}async function nS(n,e){await Lg(),Vu=n,Kc=e;let t=await sD(n);Rg??=Au(),await Oc({kind:"session",id:t}),jr=Qw({appId:iD,password:n},t);let[i,r]=jr.makeAction("ops"),[s,o]=jr.makeAction("snap");Tg=i,Ag=s,r(a=>{a instanceof Uint8Array&&_u(a)}),o(a=>{a instanceof Uint8Array&&(Kc==="guest"&&!wa?(wa=!0,xm(a)):_u(a))}),jr.onPeerJoin=a=>{Hu.add(a),(Kc==="host"||wa)&&Ag?.(kv(),{target:a}),Zc?.()},jr.onPeerLeave=a=>{Hu.delete(a),Zc?.()},Cg=Fv(a=>Tg?.(a)),Zc?.()}async function iS(){let n=rD();wa=!0;let e=new URLSearchParams(location.hash.replace(/^#/,""));return e.set(Pg,n),history.replaceState(null,"",`#${e.toString()}`),await nS(n,"host"),tS(n)}async function aD(n){wa=!1,await nS(n,"guest")}async function Lg(){Cg?.(),Cg=null;try{await jr?.leave()}catch{}jr=null,Tg=null,Ag=null,Kc=null,Vu=null,wa=!1,Hu.clear();let n=Rg;if(Rg=null,n){let e=await Gm(n);e&&Bv(e)}Zc?.()}function rS(){let n=oD();return n?aD(n):null}var qu={view:"\u{1F441}",add:"\uFF0B",erase:"\uFF0D",paint:"\u{1FAA3}",eyedropper:"\u{1F4A7}",select:"\u2B1A",measure:"\u{1F4CF}"},cD=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],sS=(n,e,t,i)=>nt("button",{className:"tool"+(t?" active":""),innerHTML:`<span class="ic">${n}</span>${e}`,onclick:i});function oS(n){y.tool!==n&&(rr(),y.tool=n,y.eyedropReturn=null,In.visible=!1,Pr(),Ze())}function Ze(){let n=document.getElementById("tools");n.innerHTML="",!y.editObject&&y.tool!=="measure"&&(y.tool="view");let e=nt("div",{className:"toolgroup"}),t=y.editObject?cD:[{id:"view",label:"View"}];for(let i of t)e.appendChild(sS(qu[i.id],i.label,y.tool===i.id,()=>oS(i.id)));if(e.appendChild(sS(qu.measure,"Measure",y.tool==="measure",()=>oS("measure"))),y.editObject&&e.appendChild(xD()),n.append(e),Wu(),y.tool==="view"){let i=document.getElementById("toolcursor");i&&(i.style.display="none")}Dm()}document.getElementById("btn-save").onclick=Cb;document.getElementById("btn-load").onclick=Rb;var lD=document.getElementById("btn-docs"),el=document.getElementById("docslist"),hD=document.getElementById("docname");function Dg(n){vu(n),y.collapsed=new Set,y.path=[n],y.editObject=null,y.sel3d=null,y.selection.clear(),y.tool==="measure"&&(y.tool="view"),Pr(),wt(),Ze(),yi(),Vn()}function Wu(){hD.textContent=y.root&&y.root.name||"Project"}async function Xu(){let n=Au(),e=[];try{e=await Fm()}catch{}el.innerHTML="";for(let t of e){let i=nt("div",{className:"docrow"+(t.id===n?" here":"")});i.append(nt("button",{className:"docopen",textContent:t.name||"Project",title:new Date(t.updated).toLocaleString(),onclick:async()=>{if(t.id===n)return;let r=await ma(t.id);r&&Dg(r),await Xu(),Wu()}})),i.append(nt("button",{className:"docdel",textContent:"\u2715",title:"Delete this document",onclick:async()=>{if(confirm(`Delete "${t.name||"Project"}"? This cannot be undone.`)){if(await Tb(t.id),t.id===n){let[r]=await Fm().catch(()=>[]),s=r?await ma(r.id)??await Vs():await Vs();Dg(s),Wu()}await Xu()}}})),el.append(i)}el.append(nt("button",{className:"docnew",textContent:"\uFF0B New document",onclick:async()=>{Dg(await Vs()),Wu(),await Xu()}}))}lD.onclick=async()=>{let n=el.hasAttribute("hidden");el.hidden=!n,n&&await Xu()};var tl=document.getElementById("btn-share"),Sa=document.getElementById("sharebar");function Yu(){let n=Ig();if(tl.textContent=n.active?"\u{1F517} Sharing":"\u{1F517} Share",tl.classList.toggle("on",n.active),Sa.hidden=!n.active,!n.active)return;let e=n.peers===1?"1 peer":`${n.peers} peers`;if(Sa.innerHTML="",Sa.append(nt("div",{className:"sharewho",textContent:(n.role==="host"?"Hosting":"Joined")+(n.peers?` \xB7 ${e} connected`:" \xB7 waiting for a peer\u2026")})),n.link){let t=nt("input",{className:"sharelink"});t.readOnly=!0,t.value=n.link,t.onclick=()=>t.select(),Sa.append(t),Sa.append(nt("button",{className:"sharebtn",textContent:"Copy link",onclick:async()=>{try{await navigator.clipboard.writeText(n.link)}catch{t.select()}}}))}Sa.append(nt("button",{className:"sharebtn",textContent:"Leave",onclick:()=>{location.hash="",Lg()}}))}tl.onclick=async()=>{if(!Ig().active){tl.disabled=!0;try{let n=await iS();try{await navigator.clipboard.writeText(n)}catch{}}catch(n){alert("Could not start sharing: "+n.message)}finally{tl.disabled=!1,Yu()}}};eS(Yu);var Gu={ver:-1,cols:[]};function uD(){if(Gu.ver===y.voxVer)return Gu.cols;let n=new Map;return function e(t){t.type==="object"?K0(t.boxes,n):t.children.forEach(e)}(y.root),Gu={ver:y.voxVer,cols:[...n.entries()].sort((e,t)=>t[1]-e[1]).map(e=>e[0])},Gu.cols}var Ug=[];function $u(n){Ug=[n,...Ug.filter(e=>e!==n)].slice(0,6)}function Ng(n){y.selColor=n,Ze()}function dD(){let n=[];for(let e of[...Ug,...uD(),...hh])if(n.includes(e)||n.push(e),n.length>=6)break;return n}var fD=n=>{let e=nt("div",{className:"sw"+(n===y.selColor?" active":""),title:Yi(n),onclick:()=>Ng(n)});return e.style.background=Yi(n),e};function pD(){y.tool!=="eyedropper"&&(y.eyedropReturn=y.tool,rr(),y.tool="eyedropper",Ze())}function mD(n){let e=(n>>16&255)/255,t=(n>>8&255)/255,i=(n&255)/255,r=Math.max(e,t,i),s=Math.min(e,t,i),o=r-s,a=0;return o&&(r===e?a=(t-i)/o%6:r===t?a=(i-e)/o+2:a=(e-t)/o+4,a=(a*60+360)%360),[Math.round(a),Math.round((r?o/r:0)*100),Math.round(r*100)]}function Qc(n,e,t){e/=100,t/=100;let i=t*e,r=i*(1-Math.abs(n/60%2-1)),s=t-i,[o,a,c]=n<60?[i,r,0]:n<120?[r,i,0]:n<180?[0,i,r]:n<240?[0,r,i]:n<300?[r,0,i]:[i,0,r],l=h=>Math.round((h+s)*255);return l(o)<<16|l(a)<<8|l(c)}var gD=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function xD(){let n=nt("div",{className:"colorctl"}),e=nt("div",{className:"colorbtn",title:"Draw colour \u2014 hover for recent colours / sliders"});e.style.background=Yi(y.selColor);let t=nt("div",{className:"colorflyout"}),i=nt("div",{className:"sliders"}),r={},[s,o,a]=mD(y.selColor),c={h:s,s:o,v:a},l=()=>{r.s.style.background=`linear-gradient(to right,${Yi(Qc(c.h,0,c.v))},${Yi(Qc(c.h,100,c.v))})`,r.v.style.background=`linear-gradient(to right,${Yi(Qc(c.h,c.s,0))},${Yi(Qc(c.h,c.s,100))})`},h=()=>{c.h=+r.h.value,c.s=+r.s.value,c.v=+r.v.value,y.selColor=Qc(c.h,c.s,c.v),e.style.background=Yi(y.selColor),l()};for(let f of gD){let g=nt("div",{className:"sliderline"}),x=nt("input",{type:"range",className:"csl",title:f.title});x.min="0",x.max=String(f.max),x.value=String(c[f.key]),r[f.key]=x,x.addEventListener("input",h),g.append(nt("span",{className:"lbl",textContent:f.label,title:f.title}),x),i.appendChild(g)}r.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",l();let u=nt("div",{className:"sliderrow"});u.append(i,nt("div",{className:"sw more",textContent:"\u{1F4A7}",title:"Pick a colour from a voxel (eyedropper)",onclick:pD}));let d=nt("div",{className:"swrow"});for(let f of dD())d.appendChild(fD(f));return t.append(u,d),n.append(e,t),n}{let n=document.getElementById("app"),e=t=>{n.classList.toggle("side-hidden",t),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>e(!0),document.getElementById("btn-show-side").onclick=()=>e(!1)}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||y.drag||y.painting)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey){if(e==="z"){n.preventDefault(),n.shiftKey?ep():Fy();return}if(e==="y"){n.preventDefault(),ep();return}if(y.editObject){e==="c"?(Em(),n.preventDefault()):e==="x"?(jv(),n.preventDefault()):e==="v"&&(yD(),n.preventDefault());return}let i={c:Hc,x:_b,v:Tu,d:Eu}[e];i&&(i(),n.preventDefault());return}switch(e){case"f":yi();break;case"escape":nb();break;case"n":y.editObject||yb();break;case"r":y.editObject||wb();break;case"[":y.editObject||Om(-1);break;case"]":y.editObject||Om(1);break;case"delete":case"backspace":n.preventDefault(),y.editObject?Mm():Vc();break}});function yD(){let n=[];if(ko()==="node")for(let e of xh())$a(e,e.pos,e.rot,n);else n.push(...yh());n.length&&(y.tool="select",Jv(n),Ze())}var ju=n=>Math.abs(n.clientX-y.drag.sx)+Math.abs(n.clientY-y.drag.sy)>3,lr=document.createElement("div");lr.id="toolcursor";lr.style.display="none";document.body.appendChild(lr);function _D(n){if(y.tool==="view"){lr.style.display="none";return}lr.textContent=qu[y.tool],lr.style.left=n.clientX+"px",lr.style.top=n.clientY+"px",lr.style.display="block"}function vD(){y.tool!=="measure"||y.painting||y.drag&&y.drag.mode==="box"||fh()}function Og(){let n=($e.top-$e.bottom)/_t.h,e=Math.abs($e.matrixWorldInverse.elements[5]);return n/Math.max(e,.15)}function bD(n){let e=y.drag;if(!e||e.mode!=="pan"&&e.mode!=="orbit")return!1;let t=n.clientX-e.x,i=n.clientY-e.y;return e.x=n.clientX,e.y=n.clientY,(e.mode==="pan"?Ty:Ay)(t,i),!0}function wD(){let n=[],e=[];Lr(y.root,{x:0,y:0,z:0},0,null,null,(r,s,o,a)=>{let c=a&&y.selection.has(a)?e:n;for(let l of r.boxes)c.push(mi(l,o,s))});let t=1/0,i=-1/0;for(let r of e)r.y0<t&&(t=r.y0),r.y1>i&&(i=r.y1);return{occ:n,sel:e,minY:t,hgt:e.length?i-t:0}}var SD=(n,e,t,i)=>{if(Uf(n.sel??[],n.occ??[],e,t,i))return!0;let r=n.minY??1/0;return r+t<Math.min(0,r)};function MD(n){let e=y.drag,t=(i,r,s)=>n.altKey||!SD(e,i,r,s);if(n.shiftKey){e.shiftAnchorY==null&&(e.shiftAnchorY=n.clientY,e.dyBase=e.dyUser??0);let i=e.dyBase+Math.round((e.shiftAnchorY-n.clientY)*Og());t(e.dx,i,e.dz)&&(e.dyUser=i,e.dy=i)}else{e.shiftAnchorY=null;let i=e.dx,r=e.dz,s=ja(0);s&&e.start&&(i=s.x-e.start.x,r=s.z-e.start.z);let o=e.dyUser??0,a=Math.floor(.1*(e.hgt??0)),c=!1;for(let l=0;l<=a;l++)if(t(i,o+l,r)){e.dx=i,e.dz=r,e.dy=o+l,c=!0;break}c||(t(i,o,e.dz)&&(e.dx=i),t(e.dx,o,r)&&(e.dz=r),e.dy=o)}for(let i of y.selection)for(let r of y.childMeshes[i]||[])r.position.set(e.dx,e.dy,e.dz),r.castShadow=!1;Xi.position.set(e.dx,e.dy,e.dz)}function ED(n){let e=y.drag,t=Io(),i=at({x:Math.round(e.dx),y:0,z:Math.round(e.dz)},-t.rot),r=Math.round(e.dy);if(n){let s=[];for(let o of y.selection){let a=$i(o);if(!a)continue;let c=Ar(a);c.pos={x:a.pos.x+i.x,y:a.pos.y+r,z:a.pos.z+i.z},s.push(c)}y.context.children.push(...s),y.selection=new Set(s.map(o=>o.id))}else for(let s of y.selection){let o=$i(s);o&&(o.pos.x+=i.x,o.pos.y+=r,o.pos.z+=i.z)}Xi.position.set(0,0,0),wt(),Ze(),mt()}function TD(n){let e=y.drag,t=Math.round((e.sx-n.clientX)/70);t!==e.steps&&(Nm(t-e.steps),e.steps=t,e.dirty=!0)}function AD(){let n=Sy();n!=null&&(y.eyedropReturn!=null&&(y.tool=y.eyedropReturn,y.eyedropReturn=null),Ng(n))}function cS(n){let e=bs(),t=Bf(e);if(!t)return;let i=ms(t.x,t.y,t.z);i!==y.lastVox&&(n?(Jf({x0:t.x,y0:t.y,z0:t.z,x1:t.x+1,y1:t.y+1,z1:t.z+1},y.selColor),$u(y.selColor)):wy(t,y.selColor)&&$u(y.selColor),y.lastVox=i),lS(e)}function lS(n=bs()){let e=Bf(n);if(!e){In.visible=!1;return}let t=ji(e.x+.5,e.y+.5,e.z+.5);In.visible=!0,In.material.color.set(y.tool==="erase"?11895693:10994876),In.position.copy(t)}var kg=n=>n===0?[1,2]:n===1?[0,2]:[0,1];function hS(n,e,t,i){let[r,s]=kg(n.na),o=[0,0,0],a=[0,0,0],c=(l,h,u)=>{o[l]=Math.min(h,u),a[l]=Math.max(h,u)};return c(n.na,n.s[n.na],n.s[n.na]+i),c(r,n.s[r],e),c(s,n.s[s],t),{x0:o[0],y0:o[1],z0:o[2],x1:a[0]+1,y1:a[1]+1,z1:a[2]+1,c:0}}var zg=n=>{let[e,t]=kg(n.na);return hS(n,n.c[e],n.c[t],n.hy)};function aS(n){let e=bs(),t,i;if(e)i=e.addCell.x!==e.cell.x?0:e.addCell.y!==e.cell.y?1:2,t=y.tool==="add"?e.addCell:e.cell;else{let r=ws(0);if(!r)return;t=r,i=1}y.drag={...n,mode:"box",shiftAnchorY:null,box:{s:[t.x,t.y,t.z],c:[t.x,t.y,t.z],na:i,hy:0},occ:y.tool==="add"?y.editObject.boxes.slice():void 0},In.visible=!1,uS()}function CD(n){let e=y.drag,t=e.box,[i,r]=kg(t.na),s=y.tool==="add"&&!n.altKey,o=(a,c,l)=>!s||!Uf([hS(t,a,c,l)],e.occ??[],0,0,0);if(n.shiftKey){e.shiftAnchorY===null&&(e.shiftAnchorX=n.clientX,e.shiftAnchorY=n.clientY,e.hyBase=t.hy);let a=ji(t.s[0],t.s[1],t.s[2]),c=t.s.slice();c[t.na]+=1;let l=ji(c[0],c[1],c[2]),h=l.x-a.x,u=l.y-a.y,d=l.z-a.z,f=$e.matrixWorld.elements,g=h*f[0]+u*f[1]+d*f[2],x=h*f[4]+u*f[5]+d*f[6],p=g*g+x*x,m=_t.h/($e.top-$e.bottom),v=g*m,_=-x*m,M=n.clientX-e.shiftAnchorX,C=n.clientY-e.shiftAnchorY,R=e.hyBase+(p>.02?Math.round((M*v+C*_)/(v*v+_*_)):Math.round((e.shiftAnchorY-n.clientY)*Og()));o(t.c[i],t.c[r],R)&&(t.hy=R)}else{e.shiftAnchorY=null;let a=dy(t.na,t.s[t.na]);if(a){let c=[a.x,a.y,a.z];o(c[i],t.c[r],t.hy)&&(t.c[i]=c[i]),o(t.c[i],c[r],t.hy)&&(t.c[r]=c[r])}}uS()}function RD(){let n=zg(y.drag.box);y.tool==="add"?(Jf(n,y.selColor),$u(y.selColor)):Ka(n),y.liveMeas=null,Ir(),Ze(),mt()}function uS(){let n=zg(y.drag.box);y.liveMeas=Hf(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,ji,2),Ir()}function PD(n){let e=y.sel3d.region.y0;y.drag={...n,mode:"selmove",start:ws(e)??{x:0,y:e,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function ID(n){y.drag={...n,mode:"selrot",steps:0}}function LD(n){let e=y.drag,t=e.dx,i=e.dy,r=e.dz;if(n.shiftKey)e.shiftAnchorY==null&&(e.shiftAnchorY=n.clientY,e.dyBase=i),i=e.dyBase+Math.round((e.shiftAnchorY-n.clientY)*Og());else{e.shiftAnchorY=null;let s=ws(e.start.y);s&&(t=s.x-e.start.x,r=s.z-e.start.z)}(t!==e.dx||i!==e.dy||r!==e.dz)&&(y.sel3d.lifted||wm(),Kv(t-e.dx,i-e.dy,r-e.dz),e.dx=t,e.dy=i,e.dz=r)}function DD(n){let e=y.drag,t=n.altKey;t!==!!e.fine&&(e.fine=t,y.sel3d.lifted&&(Tm(),e.sx=n.clientX,e.steps=0,e.deg=0));let i=()=>{y.sel3d.lifted||(wm(),Tm())};if(t){let r=Math.round((e.sx-n.clientX)/25)*15;if(r===(e.deg??0))return;i(),e.deg=r,eb(r,n.shiftKey)}else{let r=Math.round((e.sx-n.clientX)/70);if(r===e.steps)return;i(),e.steps=r,Qv(r,n.shiftKey)}}function UD(n){y.liveMeas=null,Ir(),n&&$v(zg(y.drag.box)),Ze()}Qt.addEventListener("pointerdown",n=>{if(y.drag||y.painting)return;Qt.setPointerCapture(n.pointerId),uh(n.clientX,n.clientY);let e={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(n.button===1){y.drag={...e,mode:"pan"};return}if(y.editObject){n.button===0?y.tool==="view"||y.tool==="measure"?y.drag={...e,mode:"pan"}:y.tool==="select"?y.sel3d&&Am()?PD(e):(rr(),aS(e)):y.tool==="add"||y.tool==="erase"?aS(e):y.tool==="eyedropper"?AD():(y.painting=!0,y.lastVox=null,cS(n.shiftKey)):n.button===2&&(y.tool==="select"&&y.sel3d&&Am()?ID(e):y.drag={...e,mode:"orbit"});return}let t=zf(),i=t&&y.selection.has(t);n.button===0?y.tool==="measure"?y.drag={...e,mode:"pan"}:i?y.drag={...e,mode:"move",start:ja(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...wD()}:y.drag={...e,mode:"pan",clickId:t}:n.button===2&&(i&&y.tool!=="measure"?y.drag={...e,mode:"rotobj",steps:0}:y.drag={...e,mode:"orbit"})});Qt.addEventListener("pointermove",n=>{uh(n.clientX,n.clientY),y.editObject&&y.painting?cS(n.shiftKey):y.drag?bD(n)||(y.drag.mode==="move"?MD(n):y.drag.mode==="rotobj"?TD(n):y.drag.mode==="box"?CD(n):y.drag.mode==="selmove"?LD(n):y.drag.mode==="selrot"&&DD(n)):y.editObject&&y.tool!=="select"&&y.tool!=="view"&&y.tool!=="measure"?lS():In.visible=!1,vD(),_D(n)});Qt.addEventListener("pointerup",n=>{try{Qt.releasePointerCapture(n.pointerId)}catch{}if(y.tool==="measure"&&y.drag&&!ju(n)){if(n.button===0){py(),y.drag=null;return}if(n.button===2){my(),y.drag=null;return}}if(y.editObject){y.painting?(y.painting=!1,Ze(),mt()):y.drag&&y.drag.mode==="box"?y.tool==="select"?UD(ju(n)):RD():y.drag&&(y.drag.mode==="selmove"||y.drag.mode==="selrot")&&Sm(),y.drag=null;return}if(y.drag)if(y.drag.mode==="pan"&&!ju(n)&&n.button===0){let e=y.drag.clickId,t=n.shiftKey||n.ctrlKey||n.metaKey,i=new Set(y.selection);e?(t?y.selection.has(e)?y.selection.delete(e):y.selection.add(e):y.selection=new Set([e]),Lm(e)):t||(y.selection.clear(),Lm(null)),kr(i),Ze()}else y.drag.mode==="move"?ED(ju(n)&&(n.ctrlKey||n.metaKey)):y.drag.mode==="rotobj"&&y.drag.dirty&&(Ze(),mt());y.drag=null});Qt.addEventListener("pointercancel",()=>{if(!y.drag&&!y.painting)return;let n=y.painting;y.drag&&(y.drag.mode==="selmove"||y.drag.mode==="selrot")&&Sm(),y.drag=null,y.painting=!1,y.liveMeas=null,Ir(),wt(),n&&(Ze(),mt())});Qt.addEventListener("pointerleave",()=>{In.visible=!1,lr.style.display="none",y.tool==="measure"&&!y.drag&&!y.painting&&y.liveMeas&&(y.liveMeas=null,Ir())});Qt.addEventListener("contextmenu",n=>n.preventDefault());Qt.addEventListener("wheel",n=>{n.preventDefault(),tt.zoom*=n.deltaY>0?1/.95:.95,tt.zoom=Math.max(6,Math.min(rh,tt.zoom))},{passive:!1});Qt.addEventListener("dblclick",n=>{if(y.editObject)return;uh(n.clientX,n.clientY);let e=zf();e&&Bs($i(e),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,ui,{passive:!0,capture:!0});var ND=()=>Math.abs(tt.azim-Ye.azim)<.001&&Math.abs(tt.elev-Ye.elev)<.001&&Math.abs(tt.zoom-Ye.zoom)<.001&&Ye.target.distanceToSquared(tt.target)<1e-6;function dS(){let n=Qt.getBoundingClientRect();_t.w=n.width,_t.h=n.height,_t.x=n.left,_t.y=n.top}function fS(){let n=Math.max(1,Math.round(_t.w)),e=Math.max(1,Math.round(_t.h)),t=Math.min(devicePixelRatio,2);Wi.getPixelRatio()!==t&&Wi.setPixelRatio(t),(Qt.width!==Math.floor(n*t)||Qt.height!==Math.floor(e*t))&&(Wi.setSize(n,e,!1),ui())}window.addEventListener("resize",()=>{dS(),fS()});var Bg=!1;function OD(){Bg=!0,y.drag?ui():pS()}function pS(){Bg=!1;let n=oa(Nv());n&&(vu(n),wt(),Ze(),ui())}function mS(){requestAnimationFrame(mS),Bg&&!y.drag&&pS(),fS(),Py(),(Va.tail>0||!ND())&&(vy(),Wi.render(Pt,$e),gy(),Va.tail>0&&Va.tail--)}async function kD(){zv(OD),y.root=await Ab(Xv),y.collapsed=new Set(Wv()),y.path=[y.root],y.editObject=null,y.sel3d=null,y.selection.clear(),wt(),Ze(),yi(),Vn(),dS(),mS(),rS()?.then(Yu).catch(()=>{})}kD();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
