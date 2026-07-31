var x={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var Gu="160";var yv=0,T_=1,xv=2;var ng=1,Wu=2,Si=3,pn=0,jt=1,Vn=2;var Qi=0,Fs=1,A_=2,R_=3,C_=4,vv=5,Vr=100,bv=101,wv=102,I_=103,P_=104,Mv=200,Sv=201,Ev=202,Tv=203,ou=204,au=205,Av=206,Rv=207,Cv=208,Iv=209,Pv=210,Lv=211,Dv=212,Uv=213,Nv=214,Ov=0,kv=1,zv=2,ec=3,Fv=4,Bv=5,Hv=6,Vv=7,Xu=0,Gv=1,Wv=2,er=0,Xv=1,qv=2,Yv=3,Jv=4,jv=5,$v=6;var ig=300,Gs=301,Ws=302,cu=303,lu=304,Sc=306,uu=1e3,Gn=1001,du=1002,on=1003,L_=1004;var Rl=1005;var In=1006,Zv=1007;var zo=1008;var tr=1009,Kv=1010,Qv=1011,qu=1012,rg=1013,Zi=1014,Ki=1015,Fo=1016,sg=1017,og=1018,Xr=1020,eb=1021,Wn=1023,tb=1024,nb=1025,qr=1026,Xs=1027,ib=1028,ag=1029,rb=1030,cg=1031,lg=1033,Cl=33776,Il=33777,Pl=33778,Ll=33779,D_=35840,U_=35841,N_=35842,O_=35843,ug=36196,k_=37492,z_=37496,F_=37808,B_=37809,H_=37810,V_=37811,G_=37812,W_=37813,X_=37814,q_=37815,Y_=37816,J_=37817,j_=37818,$_=37819,Z_=37820,K_=37821,Dl=36492,Q_=36494,em=36495,sb=36283,tm=36284,nm=36285,im=36286;var tc=2300,nc=2301,Ul=2302,rm=2400,sm=2401,om=2402;var dg=3e3,Yr=3001,ob=3200,ab=3201,hg=0,cb=1,Pn="",Ht="srgb",Ai="srgb-linear",Yu="display-p3",Ec="display-p3-linear",ic="linear",_t="srgb",rc="rec709",sc="p3";var vs=7680;var am=519,lb=512,ub=513,db=514,fg=515,hb=516,fb=517,pb=518,_b=519,cm=35044;var lm="300 es",hu=1035,Ei=2e3,oc=2001,nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],um=1234567,Bs=Math.PI/180,Bo=180/Math.PI;function Ks(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function Ju(n,e){return(n%e+e)%e}function mb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function gb(n,e,t){return n!==e?(t-n)/(e-n):0}function No(n,e,t){return(1-t)*n+t*e}function yb(n,e,t,i){return No(n,e,1-Math.exp(-t*i))}function xb(n,e=1){return e-Math.abs(Ju(n,e*2)-e)}function vb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mb(n,e){return n+Math.random()*(e-n)}function Sb(n){return n*(.5-Math.random())}function Eb(n){n!==void 0&&(um=n);let e=um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tb(n){return n*Bs}function Ab(n){return n*Bo}function fu(n){return(n&n-1)===0&&n!==0}function Rb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ac(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cb(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var pg={DEG2RAD:Bs,RAD2DEG:Bo,generateUUID:Ks,clamp:an,euclideanModulo:Ju,mapLinear:mb,inverseLerp:gb,lerp:No,damp:yb,pingpong:xb,smoothstep:vb,smootherstep:bb,randInt:wb,randFloat:Mb,randFloatSpread:Sb,seededRandom:Eb,degToRad:Tb,radToDeg:Ab,isPowerOfTwo:fu,ceilPowerOfTwo:Rb,floorPowerOfTwo:ac,setQuaternionFromProperEuler:Cb,normalize:rn,denormalize:Os},tt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],y=r[0],_=r[3],m=r[6],w=r[1],v=r[4],T=r[7],I=r[2],P=r[5],U=r[8];return s[0]=a*y+o*w+c*I,s[3]=a*_+o*v+c*P,s[6]=a*m+o*T+c*U,s[1]=l*y+u*w+h*I,s[4]=l*_+u*v+h*P,s[7]=l*m+u*T+h*U,s[2]=f*y+p*w+g*I,s[5]=f*_+p*v+g*P,s[8]=f*m+p*T+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*l-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nl.makeScale(e,t)),this}rotate(e){return this.premultiply(Nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nl=new je;function _g(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ib(){let n=cc("canvas");return n.style.display="block",n}var dm={};function Oo(n){n in dm||(dm[n]=!0,console.warn(n))}var hm=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fm=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Ai]:{transfer:ic,primaries:rc,toReference:n=>n,fromReference:n=>n},[Ht]:{transfer:_t,primaries:rc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ec]:{transfer:ic,primaries:sc,toReference:n=>n.applyMatrix3(fm),fromReference:n=>n.applyMatrix3(hm)},[Yu]:{transfer:_t,primaries:sc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(fm),fromReference:n=>n.applyMatrix3(hm).convertLinearToSRGB()}},Pb=new Set([Ai,Ec]),ct={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Pb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Aa[e].toReference,r=Aa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Aa[n].primaries},getTransfer:function(n){return n===Pn?ic:Aa[n].transfer}};function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ol(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var bs,lc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=cc("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hs(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hs(t[i]/255)*255):t[i]=Hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lb=0,uc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(kl(r[a].image)):s.push(kl(r[a]))}else s=kl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Db=0,Xn=class n extends nr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gn,r=Gn,s=In,a=zo,o=Wn,c=tr,l=n.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Ks(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yr?Ht:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uu:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uu:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?Yr:dg}set encoding(e){Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?Ht:Pn}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=ig;Xn.DEFAULT_ANISOTROPY=1;var Ft=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],_=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+_)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,T=(p+1)/2,I=(m+1)/2,P=(u+f)/4,U=(h+y)/4,O=(g+_)/4;return v>T&&v>I?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=P/i,s=U/i):T>I?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=P/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=U/s,r=O/s),this.set(i,r,s,t),this}let w=Math.sqrt((_-g)*(_-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(_-g)/w,this.y=(h-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pu=class extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yr?Ht:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends pu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},dc=class extends Xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _u=class extends Xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||c!==f||l!==p||u!==g){let _=1-o,m=c*f+l*p+u*g+h*y,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let I=Math.sqrt(v),P=Math.atan2(I,m*w);_=Math.sin(_*P)/I,o=Math.sin(o*P)/I}let T=o*w;if(c=c*_+f*T,l=l*_+p*T,u=u*_+g*T,h=h*_+y*T,_===1-o){let I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new G,pm=new ir,Ci=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ca.subVectors(this.max,Po),ws.subVectors(e.a,Po),Ms.subVectors(e.b,Po),Ss.subVectors(e.c,Po),qi.subVectors(Ms,ws),Yi.subVectors(Ss,Ms),kr.subVectors(ws,Ss);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-kr.z,kr.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,kr.z,0,-kr.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-kr.y,kr.x,0];return!Fl(t,ws,Ms,Ss,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,ws,Ms,Ss,Ca))?!1:(Ia.crossVectors(qi,Yi),t=[Ia.x,Ia.y,Ia.z],Fl(t,ws,Ms,Ss,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new G,new G,new G,new G,new G,new G,new G,new G],Fn=new G,Ra=new Ci,ws=new G,Ms=new G,Ss=new G,qi=new G,Yi=new G,kr=new G,Po=new G,Ca=new G,Ia=new G,zr=new G;function Fl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){zr.fromArray(n,s);let o=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),c=e.dot(zr),l=t.dot(zr),u=i.dot(zr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Ub=new Ci,Lo=new G,Bl=new G,qs=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);let t=Lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Bl)),this.expandByPoint(Lo.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new G,Hl=new G,Pa=new G,Ji=new G,Vl=new G,La=new G,Gl=new G,Ho=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Hl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=Ji.dot(this.direction),c=-Ji.dot(Pa),l=Ji.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Hl).addScaledVector(Pa,f),p}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,s){Vl.subVectors(t,e),La.subVectors(i,e),Gl.crossVectors(Vl,La);let a=this.direction.dot(Gl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);let c=o*this.direction.dot(La.crossVectors(Ji,La));if(c<0)return null;let l=o*this.direction.dot(Vl.cross(Ji));if(l<0||c+l>a)return null;let u=-o*Ji.dot(Gl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,a,o,c,l,u,h,f,p,g,y,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,f,p,g,y,_)}set(e,t,i,r,s,a,o,c,l,u,h,f,p,g,y,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=y,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-o*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,y=l*h;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,y=l*h;t[0]=f-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,y=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*h,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+y,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Ob)}lookAt(e,t,i){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ji.crossVectors(i,vn),ji.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ji.crossVectors(i,vn)),ji.normalize(),Da.crossVectors(vn,ji),r[0]=ji.x,r[4]=Da.x,r[8]=vn.x,r[1]=ji.y,r[5]=Da.y,r[9]=vn.y,r[2]=ji.z,r[6]=Da.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],y=i[6],_=i[10],m=i[14],w=i[3],v=i[7],T=i[11],I=i[15],P=r[0],U=r[4],O=r[8],S=r[12],R=r[1],B=r[5],J=r[9],ne=r[13],M=r[2],D=r[6],k=r[10],F=r[14],V=r[3],q=r[7],Q=r[11],N=r[15];return s[0]=a*P+o*R+c*M+l*V,s[4]=a*U+o*B+c*D+l*q,s[8]=a*O+o*J+c*k+l*Q,s[12]=a*S+o*ne+c*F+l*N,s[1]=u*P+h*R+f*M+p*V,s[5]=u*U+h*B+f*D+p*q,s[9]=u*O+h*J+f*k+p*Q,s[13]=u*S+h*ne+f*F+p*N,s[2]=g*P+y*R+_*M+m*V,s[6]=g*U+y*B+_*D+m*q,s[10]=g*O+y*J+_*k+m*Q,s[14]=g*S+y*ne+_*F+m*N,s[3]=w*P+v*R+T*M+I*V,s[7]=w*U+v*B+T*D+I*q,s[11]=w*O+v*J+T*k+I*Q,s[15]=w*S+v*ne+T*F+I*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],_=e[11],m=e[15];return g*(+s*c*h-r*l*h-s*o*f+i*l*f+r*o*p-i*c*p)+y*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+_*(+t*l*h-t*o*p-s*a*h+i*a*p+s*o*u-i*l*u)+m*(-r*o*u-t*c*h+t*o*f+r*a*h-i*a*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],_=e[14],m=e[15],w=h*_*l-y*f*l+y*c*p-o*_*p-h*c*m+o*f*m,v=g*f*l-u*_*l-g*c*p+a*_*p+u*c*m-a*f*m,T=u*y*l-g*h*l+g*o*p-a*y*p-u*o*m+a*h*m,I=g*h*c-u*y*c-g*o*f+a*y*f+u*o*_-a*h*_,P=t*w+i*v+r*T+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=w*U,e[1]=(y*f*s-h*_*s-y*r*p+i*_*p+h*r*m-i*f*m)*U,e[2]=(o*_*s-y*c*s+y*r*l-i*_*l-o*r*m+i*c*m)*U,e[3]=(h*c*s-o*f*s-h*r*l+i*f*l+o*r*p-i*c*p)*U,e[4]=v*U,e[5]=(u*_*s-g*f*s+g*r*p-t*_*p-u*r*m+t*f*m)*U,e[6]=(g*c*s-a*_*s-g*r*l+t*_*l+a*r*m-t*c*m)*U,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*p+t*c*p)*U,e[8]=T*U,e[9]=(g*h*s-u*y*s-g*i*p+t*y*p+u*i*m-t*h*m)*U,e[10]=(a*y*s-g*o*s+g*i*l-t*y*l-a*i*m+t*o*m)*U,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*p-t*o*p)*U,e[12]=I*U,e[13]=(u*y*r-g*h*r+g*i*f-t*y*f-u*i*_+t*h*_)*U,e[14]=(g*o*r-a*y*r-g*i*c+t*y*c+a*i*_-t*o*_)*U,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*f+t*o*f)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,y=a*u,_=a*h,m=o*h,w=c*l,v=c*u,T=c*h,I=i.x,P=i.y,U=i.z;return r[0]=(1-(y+m))*I,r[1]=(p+T)*I,r[2]=(g-v)*I,r[3]=0,r[4]=(p-T)*P,r[5]=(1-(f+m))*P,r[6]=(_+w)*P,r[7]=0,r[8]=(g+v)*U,r[9]=(_-w)*U,r[10]=(1-(f+y))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Es.set(r[0],r[1],r[2]).length(),a=Es.set(r[4],r[5],r[6]).length(),o=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let l=1/s,u=1/a,h=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ei){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r),p,g;if(o===Ei)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===oc)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ei){let c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),f=(t+e)*l,p=(i+r)*u,g,y;if(o===Ei)g=(a+s)*h,y=-2*h;else if(o===oc)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Es=new G,Bn=new It,Nb=new G(0,0,0),Ob=new G(1,1,1),ji=new G,Da=new G,vn=new G,_m=new It,mm=new ir,hc=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hc.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kb=0,gm=new G,Ts=new ir,bi=new It,Ua=new G,Do=new G,zb=new G,Fb=new ir,ym=new G(1,0,0),xm=new G(0,1,0),vm=new G(0,0,1),Bb={type:"added"},Hb={type:"removed"},ln=class n extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new G,t=new hc,i=new ir,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new je}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Do,Ua,this.up):bi.lookAt(Ua,Do,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(bi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hb)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,zb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};ln.DEFAULT_UP=new G(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new G,wi=new G,Wl=new G,Mi=new G,As=new G,Rs=new G,bm=new G,Xl=new G,ql=new G,Yl=new G,Na=!1,Wr=class n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),wi.subVectors(i,t),Wl.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(wi),c=Hn.dot(Wl),l=wi.dot(wi),u=wi.dot(Wl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,r,s,a,o,c){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),wi.subVectors(e,t),Hn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Hn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;As.subVectors(r,i),Rs.subVectors(s,i),Xl.subVectors(e,i);let c=As.dot(Xl),l=Rs.dot(Xl);if(c<=0&&l<=0)return t.copy(i);ql.subVectors(e,r);let u=As.dot(ql),h=Rs.dot(ql);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(As,a);Yl.subVectors(e,s);let p=As.dot(Yl),g=Rs.dot(Yl);if(g>=0&&p<=g)return t.copy(s);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Rs,o);let _=u*g-p*h;if(_<=0&&h-u>=0&&p-g>=0)return bm.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(bm,o);let m=1/(_+y+f);return a=y*m,o=f*m,t.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Jl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Ju(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jl(a,s,e+1/3),this.g=Jl(a,s,e),this.b=Jl(a,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=mg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Ol(e.r),this.g=Ol(e.g),this.b=Ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ct.fromWorkingColorSpace(Yt.copy(this),e),Math.round(an(Yt.r*255,0,255))*65536+Math.round(an(Yt.g*255,0,255))*256+Math.round(an(Yt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ht){ct.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Oa);let i=No($i.h,Oa.h,t),r=No($i.s,Oa.s,t),s=No($i.l,Oa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Ge;Ge.NAMES=mg;var Vb=0,Ii=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Fs,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ou&&(i.blendSrc=this.blendSrc),this.blendDst!==au&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ys=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new G,ka=new tt,$t=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}};var fc=class extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pc=class extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var cn=class extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Gb=0,Cn=new It,jl=new ln,Cs=new G,bn=new Ci,Uo=new Ci,zt=new G,un=class n extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_g(e)?pc:fc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Uo.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(bn.min,Uo.min),bn.expandByPoint(zt),zt.addVectors(bn.max,Uo.max),bn.expandByPoint(zt)):(bn.expandByPoint(Uo.min),bn.expandByPoint(Uo.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)zt.fromBufferAttribute(o,l),c&&(Cs.fromBufferAttribute(e,l),zt.add(Cs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<o;R++)l[R]=new G,u[R]=new G;let h=new G,f=new G,p=new G,g=new tt,y=new tt,_=new tt,m=new G,w=new G;function v(R,B,J){h.fromArray(r,R*3),f.fromArray(r,B*3),p.fromArray(r,J*3),g.fromArray(a,R*2),y.fromArray(a,B*2),_.fromArray(a,J*2),f.sub(h),p.sub(h),y.sub(g),_.sub(g);let ne=1/(y.x*_.y-_.x*y.y);isFinite(ne)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(p,-y.y).multiplyScalar(ne),w.copy(p).multiplyScalar(y.x).addScaledVector(f,-_.x).multiplyScalar(ne),l[R].add(m),l[B].add(m),l[J].add(m),u[R].add(w),u[B].add(w),u[J].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let R=0,B=T.length;R<B;++R){let J=T[R],ne=J.start,M=J.count;for(let D=ne,k=ne+M;D<k;D+=3)v(i[D+0],i[D+1],i[D+2])}let I=new G,P=new G,U=new G,O=new G;function S(R){U.fromArray(s,R*3),O.copy(U);let B=l[R];I.copy(B),I.sub(U.multiplyScalar(U.dot(B))).normalize(),P.crossVectors(O,B);let ne=P.dot(u[R])<0?-1:1;c[R*4]=I.x,c[R*4+1]=I.y,c[R*4+2]=I.z,c[R*4+3]=ne}for(let R=0,B=T.length;R<B;++R){let J=T[R],ne=J.start,M=J.count;for(let D=ne,k=ne+M;D<k;D+=3)S(i[D+0]),S(i[D+1]),S(i[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,u=new G,h=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let m=0;m<u;m++)f[g++]=l[p++]}return new $t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wm=new It,Fr=new Ho,za=new qs,Mm=new G,Is=new G,Ps=new G,Ls=new G,$l=new G,Fa=new G,Ba=new tt,Ha=new tt,Va=new tt,Sm=new G,Em=new G,Tm=new G,Ga=new G,Wa=new G,Ct=class extends ln{constructor(e=new un,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&($l.fromBufferAttribute(h,e),a?Fa.addScaledVector($l,u):Fa.addScaledVector($l.sub(t),u))}t.add(Fa)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(za.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(za,Mm)===null||Fr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let _=f[g],m=a[_.materialIndex],w=Math.max(_.start,p.start),v=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let T=w,I=v;T<I;T+=3){let P=o.getX(T),U=o.getX(T+1),O=o.getX(T+2);r=Xa(this,m,e,i,l,u,h,P,U,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){let w=o.getX(_),v=o.getX(_+1),T=o.getX(_+2);r=Xa(this,a,e,i,l,u,h,w,v,T),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let _=f[g],m=a[_.materialIndex],w=Math.max(_.start,p.start),v=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let T=w,I=v;T<I;T+=3){let P=T,U=T+1,O=T+2;r=Xa(this,m,e,i,l,u,h,P,U,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){let w=_,v=_+1,T=_+2;r=Xa(this,a,e,i,l,u,h,w,v,T),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function Wb(n,e,t,i,r,s,a,o){let c;if(e.side===jt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===pn,o),c===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Wa);return l<t.near||l>t.far?null:{distance:l,point:Wa.clone(),object:n}}function Xa(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Is),n.getVertexPosition(c,Ps),n.getVertexPosition(l,Ls);let u=Wb(n,e,t,i,Is,Ps,Ls,Ga);if(u){r&&(Ba.fromBufferAttribute(r,o),Ha.fromBufferAttribute(r,c),Va.fromBufferAttribute(r,l),u.uv=Wr.getInterpolation(Ga,Is,Ps,Ls,Ba,Ha,Va,new tt)),s&&(Ba.fromBufferAttribute(s,o),Ha.fromBufferAttribute(s,c),Va.fromBufferAttribute(s,l),u.uv1=Wr.getInterpolation(Ga,Is,Ps,Ls,Ba,Ha,Va,new tt),u.uv2=u.uv1),a&&(Sm.fromBufferAttribute(a,o),Em.fromBufferAttribute(a,c),Tm.fromBufferAttribute(a,l),u.normal=Wr.getInterpolation(Ga,Is,Ps,Ls,Sm,Em,Tm,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new G,materialIndex:0};Wr.getNormal(Is,Ps,Ls,h.normal),u.face=h}return u}var ni=class n extends un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function g(y,_,m,w,v,T,I,P,U,O,S){let R=T/U,B=I/O,J=T/2,ne=I/2,M=P/2,D=U+1,k=O+1,F=0,V=0,q=new G;for(let Q=0;Q<k;Q++){let N=Q*B-ne;for(let W=0;W<D;W++){let H=W*R-J;q[y]=H*w,q[_]=N*v,q[m]=M,l.push(q.x,q.y,q.z),q[y]=0,q[_]=0,q[m]=P>0?1:-1,u.push(q.x,q.y,q.z),h.push(W/U),h.push(1-Q/O),F+=1}}for(let Q=0;Q<O;Q++)for(let N=0;N<U;N++){let W=f+N+D*Q,H=f+N+D*(Q+1),ee=f+(N+1)+D*(Q+1),ce=f+(N+1)+D*Q;c.push(W,H,ce),c.push(H,ee,ce),V+=6}o.addGroup(p,V,S),p+=V,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=Js(n[t]);for(let r in i)e[r]=i[r]}return e}function Xb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gg(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var qb={clone:Js,merge:sn},Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=Jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_c=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=class extends _c{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Us=1,mu=class extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(Ds,Us,e,t);r.layers=this.layers,this.add(r);let s=new wn(Ds,Us,e,t);s.layers=this.layers,this.add(s);let a=new wn(Ds,Us,e,t);a.layers=this.layers,this.add(a);let o=new wn(Ds,Us,e,t);o.layers=this.layers,this.add(o);let c=new wn(Ds,Us,e,t);c.layers=this.layers,this.add(c);let l=new wn(Ds,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},mc=class extends Xn{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gu=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yr?Ht:Pn),this.texture=new mc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ni(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Qi});s.uniforms.tEquirect.value=t;let a=new Ct(r,s),o=t.minFilter;return t.minFilter===zo&&(t.minFilter=In),new mu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Zl=new G,jb=new G,$b=new je,Jt=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Zl.subVectors(i,t).cross(jb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Zl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$b.getNormalMatrix(e),r=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new qs,qa=new G,Go=class{constructor(e=new Jt,t=new Jt,i=new Jt,r=new Jt,s=new Jt,a=new Jt){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],y=r[10],_=r[11],m=r[12],w=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-s,f-l,_-p,T-m).normalize(),i[1].setComponents(c+s,f+l,_+p,T+m).normalize(),i[2].setComponents(c+a,f+u,_+g,T+w).normalize(),i[3].setComponents(c-a,f-u,_-g,T-w).normalize(),i[4].setComponents(c-o,f-h,_-y,T-v).normalize(),t===Ei)i[5].setComponents(c+o,f+h,_+y,T+v).normalize();else if(t===oc)i[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yg(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zb(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let h=l.array,f=l.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),l.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,h){let f=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,l),p.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let y=0,_=g.length;y<_;y++){let m=g[y];t?n.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):n.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);if(h===void 0)i.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}var js=class n extends un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],y=[],_=[];for(let m=0;m<u;m++){let w=m*f-a;for(let v=0;v<l;v++){let T=v*h-s;g.push(T,-w,0),y.push(0,0,1),_.push(v/o),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){let v=w+l*m,T=w+l*(m+1),I=w+1+l*(m+1),P=w+1+l*m;p.push(v,T,P),p.push(T,I,P)}this.setIndex(p),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(y,3)),this.setAttribute("uv",new cn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rw=`#ifdef USE_AOMAP
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
#endif`,sw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ow=`#ifdef USE_BATCHING
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
#endif`,aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dw=`#ifdef USE_IRIDESCENCE
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
#endif`,hw=`#ifdef USE_BUMPMAP
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
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bw=`#define PI 3.141592653589793
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
} // validated`,ww=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mw=`vec3 transformedNormal = objectNormal;
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
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cw=`
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
}`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
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
#endif`,Nw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fw=`#ifdef USE_GRADIENTMAP
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
}`,Bw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ww=`uniform bool receiveShadow;
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
#endif`,Xw=`#ifdef USE_ENVMAP
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
#endif`,qw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$w=`PhysicalMaterial material;
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
#endif`,Zw=`struct PhysicalMaterial {
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
}`,Kw=`
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
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
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
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cM=`#if defined( USE_POINTS_UV )
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
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hM=`#ifdef USE_MORPHNORMALS
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
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,pM=`#ifdef USE_MORPHTARGETS
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
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
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
#endif`,bM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OM=`float getShadowMask() {
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
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,FM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,HM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,r1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,o1=`#define DISTANCE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,h1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,w1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,S1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,I1=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Kb,alphahash_pars_fragment:Qb,alphamap_fragment:ew,alphamap_pars_fragment:tw,alphatest_fragment:nw,alphatest_pars_fragment:iw,aomap_fragment:rw,aomap_pars_fragment:sw,batching_pars_vertex:ow,batching_vertex:aw,begin_vertex:cw,beginnormal_vertex:lw,bsdfs:uw,iridescence_fragment:dw,bumpmap_pars_fragment:hw,clipping_planes_fragment:fw,clipping_planes_pars_fragment:pw,clipping_planes_pars_vertex:_w,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:yw,color_pars_vertex:xw,color_vertex:vw,common:bw,cube_uv_reflection_fragment:ww,defaultnormal_vertex:Mw,displacementmap_pars_vertex:Sw,displacementmap_vertex:Ew,emissivemap_fragment:Tw,emissivemap_pars_fragment:Aw,colorspace_fragment:Rw,colorspace_pars_fragment:Cw,envmap_fragment:Iw,envmap_common_pars_fragment:Pw,envmap_pars_fragment:Lw,envmap_pars_vertex:Dw,envmap_physical_pars_fragment:Xw,envmap_vertex:Uw,fog_vertex:Nw,fog_pars_vertex:Ow,fog_fragment:kw,fog_pars_fragment:zw,gradientmap_pars_fragment:Fw,lightmap_fragment:Bw,lightmap_pars_fragment:Hw,lights_lambert_fragment:Vw,lights_lambert_pars_fragment:Gw,lights_pars_begin:Ww,lights_toon_fragment:qw,lights_toon_pars_fragment:Yw,lights_phong_fragment:Jw,lights_phong_pars_fragment:jw,lights_physical_fragment:$w,lights_physical_pars_fragment:Zw,lights_fragment_begin:Kw,lights_fragment_maps:Qw,lights_fragment_end:eM,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:rM,map_fragment:sM,map_pars_fragment:oM,map_particle_fragment:aM,map_particle_pars_fragment:cM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:uM,morphcolor_vertex:dM,morphnormal_vertex:hM,morphtarget_pars_vertex:fM,morphtarget_vertex:pM,normal_fragment_begin:_M,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:yM,normal_vertex:xM,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:bM,clearcoat_normal_fragment_maps:wM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:SM,opaque_fragment:EM,packing:TM,premultiplied_alpha_fragment:AM,project_vertex:RM,dithering_fragment:CM,dithering_pars_fragment:IM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:UM,shadowmap_vertex:NM,shadowmask_pars_fragment:OM,skinbase_vertex:kM,skinning_pars_vertex:zM,skinning_vertex:FM,skinnormal_vertex:BM,specularmap_fragment:HM,specularmap_pars_fragment:VM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:qM,uv_pars_fragment:YM,uv_pars_vertex:JM,uv_vertex:jM,worldpos_vertex:$M,background_vert:ZM,background_frag:KM,backgroundCube_vert:QM,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:o1,equirect_vert:a1,equirect_frag:c1,linedashed_vert:l1,linedashed_frag:u1,meshbasic_vert:d1,meshbasic_frag:h1,meshlambert_vert:f1,meshlambert_frag:p1,meshmatcap_vert:_1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:y1,meshphong_vert:x1,meshphong_frag:v1,meshphysical_vert:b1,meshphysical_frag:w1,meshtoon_vert:M1,meshtoon_frag:S1,points_vert:E1,points_frag:T1,shadow_vert:A1,shadow_frag:R1,sprite_vert:C1,sprite_frag:I1},xe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ti={basic:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:sn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:sn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:sn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:sn([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:sn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:sn([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:sn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:sn([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:sn([xe.common,xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:sn([xe.lights,xe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:sn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Ya={r:0,b:0,g:0};function P1(n,e,t,i,r,s,a){let o=new Ge(0),c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(_,m){let w=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,c):v&&v.isColor&&(y(v,1),w=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sc)?(u===void 0&&(u=new Ct(new ni(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Js(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ct.getTransfer(v.colorSpace)!==_t,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ct(new js(2,2),new qn({name:"BackgroundMaterial",uniforms:Js(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function y(_,m){_.getRGB(Ya,gg(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(_,m=1){o.set(_),c=m,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,y(o,c)},render:g}}function L1(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=_(null),l=c,u=!1;function h(M,D,k,F,V){let q=!1;if(a){let Q=y(F,k,D);l!==Q&&(l=Q,p(l.object)),q=m(M,F,k,V),q&&w(M,F,k,V)}else{let Q=D.wireframe===!0;(l.geometry!==F.id||l.program!==k.id||l.wireframe!==Q)&&(l.geometry=F.id,l.program=k.id,l.wireframe=Q,q=!0)}V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,O(M,D,k,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(M){return i.isWebGL2?n.bindVertexArray(M):s.bindVertexArrayOES(M)}function g(M){return i.isWebGL2?n.deleteVertexArray(M):s.deleteVertexArrayOES(M)}function y(M,D,k){let F=k.wireframe===!0,V=o[M.id];V===void 0&&(V={},o[M.id]=V);let q=V[D.id];q===void 0&&(q={},V[D.id]=q);let Q=q[F];return Q===void 0&&(Q=_(f()),q[F]=Q),Q}function _(M){let D=[],k=[],F=[];for(let V=0;V<r;V++)D[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,D,k,F){let V=l.attributes,q=D.attributes,Q=0,N=k.getAttributes();for(let W in N)if(N[W].location>=0){let ee=V[W],ce=q[W];if(ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;Q++}return l.attributesNum!==Q||l.index!==F}function w(M,D,k,F){let V={},q=D.attributes,Q=0,N=k.getAttributes();for(let W in N)if(N[W].location>=0){let ee=q[W];ee===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));let ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),V[W]=ce,Q++}l.attributes=V,l.attributesNum=Q,l.index=F}function v(){let M=l.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function T(M){I(M,0)}function I(M,D){let k=l.newAttributes,F=l.enabledAttributes,V=l.attributeDivisors;k[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),V[M]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,D),V[M]=D)}function P(){let M=l.newAttributes,D=l.enabledAttributes;for(let k=0,F=D.length;k<F;k++)D[k]!==M[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function U(M,D,k,F,V,q,Q){Q===!0?n.vertexAttribIPointer(M,D,k,V,q):n.vertexAttribPointer(M,D,k,F,V,q)}function O(M,D,k,F){if(i.isWebGL2===!1&&(M.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let V=F.attributes,q=k.getAttributes(),Q=D.defaultAttributeValues;for(let N in q){let W=q[N];if(W.location>=0){let H=V[N];if(H===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){let ee=H.normalized,ce=H.itemSize,se=t.get(H);if(se===void 0)continue;let fe=se.buffer,pe=se.type,me=se.bytesPerElement,Me=i.isWebGL2===!0&&(pe===n.INT||pe===n.UNSIGNED_INT||H.gpuType===rg);if(H.isInterleavedBufferAttribute){let Ae=H.data,Y=Ae.stride,ot=H.offset;if(Ae.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)I(W.location+ge,Ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ge=0;ge<W.locationSize;ge++)T(W.location+ge);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ge=0;ge<W.locationSize;ge++)U(W.location+ge,ce/W.locationSize,pe,ee,Y*me,(ot+ce/W.locationSize*ge)*me,Me)}else{if(H.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)I(W.location+Ae,H.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)T(W.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Ae=0;Ae<W.locationSize;Ae++)U(W.location+Ae,ce/W.locationSize,pe,ee,ce*me,ce/W.locationSize*Ae*me,Me)}}else if(Q!==void 0){let ee=Q[N];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(W.location,ee);break;case 3:n.vertexAttrib3fv(W.location,ee);break;case 4:n.vertexAttrib4fv(W.location,ee);break;default:n.vertexAttrib1fv(W.location,ee)}}}}P()}function S(){J();for(let M in o){let D=o[M];for(let k in D){let F=D[k];for(let V in F)g(F[V].object),delete F[V];delete D[k]}delete o[M]}}function R(M){if(o[M.id]===void 0)return;let D=o[M.id];for(let k in D){let F=D[k];for(let V in F)g(F[V].object),delete F[V];delete D[k]}delete o[M.id]}function B(M){for(let D in o){let k=o[D];if(k[M.id]===void 0)continue;let F=k[M.id];for(let V in F)g(F[V].object),delete F[V];delete k[M.id]}}function J(){ne(),u=!0,l!==c&&(l=c,p(l.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:J,resetDefaultState:ne,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:T,disableUnusedAttributes:P}}function D1(n,e,t,i){let r=i.isWebGL2,s;function a(u){s=u}function o(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,f),t.update(h,s,f)}function l(u,h,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function U1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=a||e.has("OES_texture_float"),I=v&&T,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:P}}function N1(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Jt,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,_=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!_)s?u(null):l();else{let w=s?0:i,v=w*4,T=m.clippingState||null;c.value=T,T=u(g,f,v,p);for(let I=0;I!==v;++I)T[I]=t[I];m.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,_=null;if(y!==0){if(_=c.value,g!==!0||_===null){let m=p+y*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,T=p;v!==y;++v,T+=4)a.copy(h[v]).applyMatrix4(w,o),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function O1(n){let e=new WeakMap;function t(a,o){return o===cu?a.mapping=Gs:o===lu&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===cu||o===lu)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new gu(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var $s=class extends _c{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,Am=[.125,.215,.35,.446,.526,.582],Gr=20,Kl=new $s,Rm=new Ge,Ql=null,eu=0,tu=0,Hr=(1+Math.sqrt(5))/2,Ns=1/Hr,Cm=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Hr,Ns),new G(0,Hr,-Ns),new G(Ns,0,Hr),new G(-Ns,0,Hr),new G(Hr,Ns,0),new G(-Hr,Ns,0)],gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ql=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,eu,tu),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Fo,format:Wn,colorSpace:Ai,depthBuffer:!1},r=Im(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(s)),this._blurMaterial=z1(s,e,t)}return r}_compileMaterial(e){let t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,i,r){let o=new wn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rm),u.toneMapping=er,u.autoClear=!1;let p=new Ys({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Ct(new ni,p),y=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,y=!0):(p.color.copy(Rm),y=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):w===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let v=this._cubeSize;Ja(r,w*v,m>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Ja(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Kl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cm[(r-1)%Cm.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ct(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gr-1),y=s/g,_=isFinite(s)?1+Math.floor(u*y):Gr;_>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gr}`);let m=[],w=0;for(let U=0;U<Gr;++U){let O=U/y,S=Math.exp(-O*O/2);m.push(S),U===0?w+=S:U<_&&(w+=2*S)}for(let U=0;U<m.length;U++)m[U]=m[U]/w;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let T=this._sizeLods[r],I=3*T*(r>v-ks?r-v+ks:0),P=4*(this._cubeSize-T);Ja(t,I,P,3*T,2*T),c.setRenderTarget(t),c.render(h,Kl)}};function k1(n){let e=[],t=[],i=[],r=n,s=n-ks+1+Am.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-ks?c=Am[a-n+ks-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,_=2,m=1,w=new Float32Array(y*g*p),v=new Float32Array(_*g*p),T=new Float32Array(m*g*p);for(let P=0;P<p;P++){let U=P%3*2/3-1,O=P>2?0:-1,S=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];w.set(S,y*g*P),v.set(f,_*g*P);let R=[P,P,P,P,P,P];T.set(R,m*g*P)}let I=new un;I.setAttribute("position",new $t(w,y)),I.setAttribute("uv",new $t(v,_)),I.setAttribute("faceIndex",new $t(T,m)),e.push(I),r>ks&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Im(n,e,t){let i=new Ri(n,e,t);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function z1(n,e,t){let i=new Float32Array(Gr),r=new G(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Pm(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Lm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}function F1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===cu||c===lu,u=c===Gs||c===Ws;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new gc(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new gc(n));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function B1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H1(n,e,t,i){let r={},s=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let _=0,m=y.length;_<m;_++)e.remove(y[_])}f.removeEventListener("dispose",a),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let y=p[g];for(let _=0,m=y.length;_<m;_++)e.update(y[_],n.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let v=0,T=w.length;v<T;v+=3){let I=w[v+0],P=w[v+1],U=w[v+2];f.push(I,P,P,U,U,I)}}else if(g!==void 0){let w=g.array;y=g.version;for(let v=0,T=w.length/3-1;v<T;v+=3){let I=v+0,P=v+1,U=v+2;f.push(I,P,P,U,U,I)}}else return;let _=new(_g(f)?pc:fc)(f,1);_.version=y;let m=s.get(h);m&&e.remove(m),s.set(h,_)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function V1(n,e,t,i){let r=i.isWebGL2,s;function a(p){s=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(s,g,o,p*c),t.update(g,s,1)}function h(p,g,y){if(y===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,g,o,p*c,y),t.update(g,s,y)}function f(p,g,y){if(y===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<y;m++)this.render(p[m]/c,g[m]);else{_.multiDrawElementsWEBGL(s,g,0,o,p,0,y);let m=0;for(let w=0;w<y;w++)m+=g[w];t.update(m,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function G1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function W1(n,e){return n[0]-e[0]}function X1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function q1(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new Ft,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,y=s.get(u);if(y===void 0||y.count!==g){let M=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",M)};y!==void 0&&y.texture.dispose();let w=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],U=u.morphAttributes.color||[],O=0;w===!0&&(O=1),v===!0&&(O=2),T===!0&&(O=3);let S=u.attributes.position.count*O,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let B=new Float32Array(S*R*4*g),J=new dc(B,S,R,g);J.type=Ki,J.needsUpdate=!0;let ne=O*4;for(let D=0;D<g;D++){let k=I[D],F=P[D],V=U[D],q=S*R*4*D;for(let Q=0;Q<k.count;Q++){let N=Q*ne;w===!0&&(a.fromBufferAttribute(k,Q),B[q+N+0]=a.x,B[q+N+1]=a.y,B[q+N+2]=a.z,B[q+N+3]=0),v===!0&&(a.fromBufferAttribute(F,Q),B[q+N+4]=a.x,B[q+N+5]=a.y,B[q+N+6]=a.z,B[q+N+7]=0),T===!0&&(a.fromBufferAttribute(V,Q),B[q+N+8]=a.x,B[q+N+9]=a.y,B[q+N+10]=a.z,B[q+N+11]=V.itemSize===4?a.w:1)}}y={count:g,texture:J,size:new tt(S,R)},s.set(u,y),u.addEventListener("dispose",M)}let _=0;for(let w=0;w<f.length;w++)_+=f[w];let m=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",m),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=f===void 0?0:f.length,g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<p;v++){let T=g[v];T[0]=v,T[1]=f[v]}g.sort(X1);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(W1);let y=u.morphAttributes.position,_=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let T=o[v],I=T[0],P=T[1];I!==Number.MAX_SAFE_INTEGER&&P?(y&&u.getAttribute("morphTarget"+v)!==y[I]&&u.setAttribute("morphTarget"+v,y[I]),_&&u.getAttribute("morphNormal"+v)!==_[I]&&u.setAttribute("morphNormal"+v,_[I]),r[v]=P,m+=P):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}let w=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Y1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var yc=class extends Xn{constructor(e,t,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:qr,u!==qr&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qr&&(i=Zi),i===void 0&&u===Xs&&(i=Xr),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xg=new Xn,vg=new yc(1,1);vg.compareFunction=fg;var bg=new dc,wg=new _u,Mg=new mc,Dm=[],Um=[],Nm=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function Qs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Dm[r];if(s===void 0&&(s=new Float32Array(r),Dm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tc(n,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function J1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function $1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function Z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function K1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;km.set(i),n.uniformMatrix2fv(this.addr,!1,km),Lt(t,i)}}function Q1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Om.set(i),n.uniformMatrix3fv(this.addr,!1,Om),Lt(t,i)}}function eS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Nm.set(i),n.uniformMatrix4fv(this.addr,!1,Nm),Lt(t,i)}}function tS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function iS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function rS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function sS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function aS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function cS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function lS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?vg:xg;t.setTexture2D(e||s,r)}function uS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wg,r)}function dS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mg,r)}function hS(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bg,r)}function fS(n){switch(n){case 5126:return J1;case 35664:return j1;case 35665:return $1;case 35666:return Z1;case 35674:return K1;case 35675:return Q1;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return hS}}function pS(n,e){n.uniform1fv(this.addr,e)}function _S(n,e){let t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function mS(n,e){let t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function gS(n,e){let t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function yS(n,e){let t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xS(n,e){let t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vS(n,e){let t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bS(n,e){n.uniform1iv(this.addr,e)}function wS(n,e){n.uniform2iv(this.addr,e)}function MS(n,e){n.uniform3iv(this.addr,e)}function SS(n,e){n.uniform4iv(this.addr,e)}function ES(n,e){n.uniform1uiv(this.addr,e)}function TS(n,e){n.uniform2uiv(this.addr,e)}function AS(n,e){n.uniform3uiv(this.addr,e)}function RS(n,e){n.uniform4uiv(this.addr,e)}function CS(n,e,t){let i=this.cache,r=e.length,s=Tc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xg,s[a])}function IS(n,e,t){let i=this.cache,r=e.length,s=Tc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wg,s[a])}function PS(n,e,t){let i=this.cache,r=e.length,s=Tc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mg,s[a])}function LS(n,e,t){let i=this.cache,r=e.length,s=Tc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bg,s[a])}function DS(n){switch(n){case 5126:return pS;case 35664:return _S;case 35665:return mS;case 35666:return gS;case 35674:return yS;case 35675:return xS;case 35676:return vS;case 5124:case 35670:return bS;case 35667:case 35671:return wS;case 35668:case 35672:return MS;case 35669:case 35673:return SS;case 5125:return ES;case 36294:return TS;case 36295:return AS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return LS}}var yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fS(t.type)}},xu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}},vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;function zm(n,e){n.seq.push(e),n.map[e.id]=e}function US(n,e,t){let i=n.name,r=i.length;for(nu.lastIndex=0;;){let s=nu.exec(i),a=nu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){zm(t,l===void 0?new yu(o,n,e):new xu(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new vu(o),zm(t,h)),t=h}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);US(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Fm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var NS=37297,OS=0;function kS(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function zS(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===sc&&t===rc?i="LinearDisplayP3ToLinearSRGB":e===rc&&t===sc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case Ec:return[i,"LinearTransferOETF"];case Ht:case Yu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Bm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kS(n.getShaderSource(e),a)}else return r}function FS(n,e){let t=zS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function BS(n,e){let t;switch(e){case Xv:t="Linear";break;case qv:t="Reinhard";break;case Yv:t="OptimizedCineon";break;case Jv:t="ACESFilmic";break;case $v:t="AgX";break;case jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function HS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function VS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function GS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zs(n){return n!==""}function Hm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XS=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(XS,YS)}var qS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YS(n,e){let t=Xe[e];if(t===void 0){let i=qS.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bu(t)}var JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(n){return n.replace(JS,jS)}function jS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $S(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function ZS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function QS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Gv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function eE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tE(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=$S(t),l=ZS(t),u=KS(t),h=QS(t),f=eE(t),p=t.isWebGL2?"":HS(t),g=VS(t),y=GS(s),_=r.createProgram(),m,w,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(zs).join(`
`),m.length>0&&(m+=`
`),w=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(zs).join(`
`),w.length>0&&(w+=`
`)):(m=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),w=[p,Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?Xe.tonemapping_pars_fragment:"",t.toneMapping!==er?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=bu(a),a=Hm(a,t),a=Vm(a,t),o=bu(o),o=Hm(o,t),o=Vm(o,t),a=Gm(a),o=Gm(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let T=v+m+a,I=v+w+o,P=Fm(r,r.VERTEX_SHADER,T),U=Fm(r,r.FRAGMENT_SHADER,I);r.attachShader(_,P),r.attachShader(_,U),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function O(J){if(n.debug.checkShaderErrors){let ne=r.getProgramInfoLog(_).trim(),M=r.getShaderInfoLog(P).trim(),D=r.getShaderInfoLog(U).trim(),k=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,U);else{let V=Bm(r,P,"vertex"),q=Bm(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+V+`
`+q)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(M===""||D==="")&&(F=!1);F&&(J.diagnostics={runnable:k,programLog:ne,vertexShader:{log:M,prefix:m},fragmentShader:{log:D,prefix:w}})}r.deleteShader(P),r.deleteShader(U),S=new Vs(r,_),R=WS(r,_)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(_,NS)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=U,this}var nE=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Mu(e),t.set(e,i)),i}},Mu=class{constructor(e){this.id=nE++,this.code=e,this.usedTimes=0}};function iE(n,e,t,i,r,s,a){let o=new Vo,c=new wu,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function _(S,R,B,J,ne){let M=J.fog,D=ne.geometry,k=S.isMeshStandardMaterial?J.environment:null,F=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=F&&F.mapping===Sc?F.image.height:null,q=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,N=Q!==void 0?Q.length:0,W=0;D.morphAttributes.position!==void 0&&(W=1),D.morphAttributes.normal!==void 0&&(W=2),D.morphAttributes.color!==void 0&&(W=3);let H,ee,ce,se;if(q){let tn=ti[q];H=tn.vertexShader,ee=tn.fragmentShader}else H=S.vertexShader,ee=S.fragmentShader,c.update(S),ce=c.getVertexShaderID(S),se=c.getFragmentShaderID(S);let fe=n.getRenderTarget(),pe=ne.isInstancedMesh===!0,me=ne.isBatchedMesh===!0,Me=!!S.map,Ae=!!S.matcap,Y=!!F,ot=!!S.aoMap,ge=!!S.lightMap,Se=!!S.bumpMap,he=!!S.normalMap,rt=!!S.displacementMap,ze=!!S.emissiveMap,C=!!S.metalnessMap,E=!!S.roughnessMap,j=S.anisotropy>0,le=S.clearcoat>0,oe=S.iridescence>0,de=S.sheen>0,Pe=S.transmission>0,ve=j&&!!S.anisotropyMap,re=le&&!!S.clearcoatMap,ue=le&&!!S.clearcoatNormalMap,_e=le&&!!S.clearcoatRoughnessMap,ie=oe&&!!S.iridescenceMap,Ce=oe&&!!S.iridescenceThicknessMap,Ue=de&&!!S.sheenColorMap,Ne=de&&!!S.sheenRoughnessMap,De=!!S.specularMap,Te=!!S.specularColorMap,He=!!S.specularIntensityMap,nt=Pe&&!!S.transmissionMap,pt=Pe&&!!S.thicknessMap,Ye=!!S.gradientMap,ye=!!S.alphaMap,z=S.alphaTest>0,be=!!S.alphaHash,we=!!S.extensions,Fe=!!D.attributes.uv1,Oe=!!D.attributes.uv2,ut=!!D.attributes.uv3,dt=er;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:u,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:ee,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:me,instancing:pe,instancingColor:pe&&ne.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ai,map:Me,matcap:Ae,envMap:Y,envMapMode:Y&&F.mapping,envMapCubeUVHeight:V,aoMap:ot,lightMap:ge,bumpMap:Se,normalMap:he,displacementMap:f&&rt,emissiveMap:ze,normalMapObjectSpace:he&&S.normalMapType===cb,normalMapTangentSpace:he&&S.normalMapType===hg,metalnessMap:C,roughnessMap:E,anisotropy:j,anisotropyMap:ve,clearcoat:le,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:_e,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:Ce,sheen:de,sheenColorMap:Ue,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:Te,specularIntensityMap:He,transmission:Pe,transmissionMap:nt,thicknessMap:pt,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===Fs,alphaMap:ye,alphaTest:z,alphaHash:be,combine:S.combine,mapUv:Me&&y(S.map.channel),aoMapUv:ot&&y(S.aoMap.channel),lightMapUv:ge&&y(S.lightMap.channel),bumpMapUv:Se&&y(S.bumpMap.channel),normalMapUv:he&&y(S.normalMap.channel),displacementMapUv:rt&&y(S.displacementMap.channel),emissiveMapUv:ze&&y(S.emissiveMap.channel),metalnessMapUv:C&&y(S.metalnessMap.channel),roughnessMapUv:E&&y(S.roughnessMap.channel),anisotropyMapUv:ve&&y(S.anisotropyMap.channel),clearcoatMapUv:re&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(S.sheenRoughnessMap.channel),specularMapUv:De&&y(S.specularMap.channel),specularColorMapUv:Te&&y(S.specularColorMap.channel),specularIntensityMapUv:He&&y(S.specularIntensityMap.channel),transmissionMapUv:nt&&y(S.transmissionMap.channel),thicknessMapUv:pt&&y(S.thicknessMap.channel),alphaMapUv:ye&&y(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(he||j),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Oe,vertexUv3s:ut,pointsUvs:ne.isPoints===!0&&!!D.attributes.uv&&(Me||ye),fog:!!M,useFog:S.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vn,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:we&&S.extensions.derivatives===!0,extensionFragDepth:we&&S.extensions.fragDepth===!0,extensionDrawBuffers:we&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){let R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(let B in S.defines)R.push(B),R.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(w(R,S),v(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function w(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function v(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function T(S){let R=g[S.type],B;if(R){let J=ti[R];B=qb.clone(J.uniforms)}else B=S.uniforms;return B}function I(S,R){let B;for(let J=0,ne=l.length;J<ne;J++){let M=l[J];if(M.cacheKey===R){B=M,++B.usedTimes;break}}return B===void 0&&(B=new tE(n,R,S,s),l.push(B)),B}function P(S){if(--S.usedTimes===0){let R=l.indexOf(S);l[R]=l[l.length-1],l.pop(),S.destroy()}}function U(S){c.remove(S)}function O(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:l,dispose:O}}function rE(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function sE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qm(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,g,y,_){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:_},n[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=y,m.group=_),e++,m}function o(h,f,p,g,y,_){let m=a(h,f,p,g,y,_);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(h,f,p,g,y,_){let m=a(h,f,p,g,y,_);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||sE),i.length>1&&i.sort(f||Xm),r.length>1&&r.sort(f||Xm)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function oE(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new qm,n.set(i,[a])):r>=s.length?(a=new qm,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function aE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ge};break;case"SpotLight":t={position:new G,direction:new G,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function cE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var lE=0;function uE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dE(n,e){let t=new aE,i=cE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);let s=new G,a=new It,o=new It;function c(u,h){let f=0,p=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let y=0,_=0,m=0,w=0,v=0,T=0,I=0,P=0,U=0,O=0,S=0;u.sort(uE);let R=h===!0?Math.PI:1;for(let J=0,ne=u.length;J<ne;J++){let M=u[J],D=M.color,k=M.intensity,F=M.distance,V=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)f+=D.r*k*R,p+=D.g*k*R,g+=D.b*k*R;else if(M.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(M.sh.coefficients[q],k);S++}else if(M.isDirectionalLight){let q=t.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity*R),M.castShadow){let Q=M.shadow,N=i.get(M);N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,r.directionalShadow[y]=N,r.directionalShadowMap[y]=V,r.directionalShadowMatrix[y]=M.shadow.matrix,T++}r.directional[y]=q,y++}else if(M.isSpotLight){let q=t.get(M);q.position.setFromMatrixPosition(M.matrixWorld),q.color.copy(D).multiplyScalar(k*R),q.distance=F,q.coneCos=Math.cos(M.angle),q.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),q.decay=M.decay,r.spot[m]=q;let Q=M.shadow;if(M.map&&(r.spotLightMap[U]=M.map,U++,Q.updateMatrices(M),M.castShadow&&O++),r.spotLightMatrix[m]=Q.matrix,M.castShadow){let N=i.get(M);N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,r.spotShadow[m]=N,r.spotShadowMap[m]=V,P++}m++}else if(M.isRectAreaLight){let q=t.get(M);q.color.copy(D).multiplyScalar(k),q.halfWidth.set(M.width*.5,0,0),q.halfHeight.set(0,M.height*.5,0),r.rectArea[w]=q,w++}else if(M.isPointLight){let q=t.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity*R),q.distance=M.distance,q.decay=M.decay,M.castShadow){let Q=M.shadow,N=i.get(M);N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,r.pointShadow[_]=N,r.pointShadowMap[_]=V,r.pointShadowMatrix[_]=M.shadow.matrix,I++}r.point[_]=q,_++}else if(M.isHemisphereLight){let q=t.get(M);q.skyColor.copy(M.color).multiplyScalar(k*R),q.groundColor.copy(M.groundColor).multiplyScalar(k*R),r.hemi[v]=q,v++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;let B=r.hash;(B.directionalLength!==y||B.pointLength!==_||B.spotLength!==m||B.rectAreaLength!==w||B.hemiLength!==v||B.numDirectionalShadows!==T||B.numPointShadows!==I||B.numSpotShadows!==P||B.numSpotMaps!==U||B.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=m,r.rectArea.length=w,r.point.length=_,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+U-O,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=S,B.directionalLength=y,B.pointLength=_,B.spotLength=m,B.rectAreaLength=w,B.hemiLength=v,B.numDirectionalShadows=T,B.numPointShadows=I,B.numSpotShadows=P,B.numSpotMaps=U,B.numLightProbes=S,r.version=lE++)}function l(u,h){let f=0,p=0,g=0,y=0,_=0,m=h.matrixWorldInverse;for(let w=0,v=u.length;w<v;w++){let T=u[w];if(T.isDirectionalLight){let I=r.directional[f];I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),f++}else if(T.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(m),g++}else if(T.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(m),o.identity(),a.copy(T.matrixWorld),a.premultiply(m),o.extractRotation(a),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(T.isPointLight){let I=r.point[p];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){let I=r.hemi[_];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(m),_++}}}return{setup:c,setupView:l,state:r}}function Ym(n,e){let t=new dE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function hE(n,e){let t=new WeakMap;function i(s,a=0){let o=t.get(s),c;return o===void 0?(c=new Ym(n,e),t.set(s,[c])):a>=o.length?(c=new Ym(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Su=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eu=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
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
}`;function _E(n,e,t){let i=new Go,r=new tt,s=new tt,a=new Ft,o=new Su({depthPacking:ab}),c=new Eu,l={},u=t.maxTextureSize,h={[pn]:jt,[jt]:pn,[Vn]:Vn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:fE,fragmentShader:pE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new un;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ct(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ng;let m=this.type;this.render=function(P,U,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;let S=n.getRenderTarget(),R=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Qi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ne=m!==Si&&this.type===Si,M=m===Si&&this.type!==Si;for(let D=0,k=P.length;D<k;D++){let F=P[D],V=F.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let q=V.getFrameExtents();if(r.multiply(q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,V.mapSize.y=s.y)),V.map===null||ne===!0||M===!0){let N=this.type!==Si?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new Ri(r.x,r.y,N),V.map.texture.name=F.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let Q=V.getViewportCount();for(let N=0;N<Q;N++){let W=V.getViewport(N);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),J.viewport(a),V.updateMatrices(F,N),i=V.getFrustum(),T(U,O,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Si&&w(V,O),V.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(S,R,B)};function w(P,U){let O=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ri(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(U,null,O,f,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(U,null,O,p,y,null)}function v(P,U,O,S){let R=null,B=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)R=B;else if(R=O.isPointLight===!0?c:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let J=R.uuid,ne=U.uuid,M=l[J];M===void 0&&(M={},l[J]=M);let D=M[ne];D===void 0&&(D=R.clone(),M[ne]=D,U.addEventListener("dispose",I)),R=D}if(R.visible=U.visible,R.wireframe=U.wireframe,S===Si?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:h[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let J=n.properties.get(R);J.light=O}return R}function T(P,U,O,S,R){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Si)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);let ne=e.update(P),M=P.material;if(Array.isArray(M)){let D=ne.groups;for(let k=0,F=D.length;k<F;k++){let V=D[k],q=M[V.materialIndex];if(q&&q.visible){let Q=v(P,q,S,R);P.onBeforeShadow(n,P,U,O,ne,Q,V),n.renderBufferDirect(O,null,ne,Q,P,V),P.onAfterShadow(n,P,U,O,ne,Q,V)}}}else if(M.visible){let D=v(P,M,S,R);P.onBeforeShadow(n,P,U,O,ne,D,null),n.renderBufferDirect(O,null,ne,D,P,null),P.onAfterShadow(n,P,U,O,ne,D,null)}}let J=P.children;for(let ne=0,M=J.length;ne<M;ne++)T(J[ne],U,O,S,R)}function I(P){P.target.removeEventListener("dispose",I);for(let O in l){let S=l[O],R=P.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function mE(n,e,t){let i=t.isWebGL2;function r(){let z=!1,be=new Ft,we=null,Fe=new Ft(0,0,0,0);return{setMask:function(Oe){we!==Oe&&!z&&(n.colorMask(Oe,Oe,Oe,Oe),we=Oe)},setLocked:function(Oe){z=Oe},setClear:function(Oe,ut,dt,Ot,tn){tn===!0&&(Oe*=Ot,ut*=Ot,dt*=Ot),be.set(Oe,ut,dt,Ot),Fe.equals(be)===!1&&(n.clearColor(Oe,ut,dt,Ot),Fe.copy(be))},reset:function(){z=!1,we=null,Fe.set(-1,0,0,0)}}}function s(){let z=!1,be=null,we=null,Fe=null;return{setTest:function(Oe){Oe?me(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Oe){be!==Oe&&!z&&(n.depthMask(Oe),be=Oe)},setFunc:function(Oe){if(we!==Oe){switch(Oe){case Ov:n.depthFunc(n.NEVER);break;case kv:n.depthFunc(n.ALWAYS);break;case zv:n.depthFunc(n.LESS);break;case ec:n.depthFunc(n.LEQUAL);break;case Fv:n.depthFunc(n.EQUAL);break;case Bv:n.depthFunc(n.GEQUAL);break;case Hv:n.depthFunc(n.GREATER);break;case Vv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Oe}},setLocked:function(Oe){z=Oe},setClear:function(Oe){Fe!==Oe&&(n.clearDepth(Oe),Fe=Oe)},reset:function(){z=!1,be=null,we=null,Fe=null}}}function a(){let z=!1,be=null,we=null,Fe=null,Oe=null,ut=null,dt=null,Ot=null,tn=null;return{setTest:function(ht){z||(ht?me(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(ht){be!==ht&&!z&&(n.stencilMask(ht),be=ht)},setFunc:function(ht,nn,ei){(we!==ht||Fe!==nn||Oe!==ei)&&(n.stencilFunc(ht,nn,ei),we=ht,Fe=nn,Oe=ei)},setOp:function(ht,nn,ei){(ut!==ht||dt!==nn||Ot!==ei)&&(n.stencilOp(ht,nn,ei),ut=ht,dt=nn,Ot=ei)},setLocked:function(ht){z=ht},setClear:function(ht){tn!==ht&&(n.clearStencil(ht),tn=ht)},reset:function(){z=!1,be=null,we=null,Fe=null,Oe=null,ut=null,dt=null,Ot=null,tn=null}}}let o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap,f={},p={},g=new WeakMap,y=[],_=null,m=!1,w=null,v=null,T=null,I=null,P=null,U=null,O=null,S=new Ge(0,0,0),R=0,B=!1,J=null,ne=null,M=null,D=null,k=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,q=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=q>=2);let N=null,W={},H=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ce=new Ft().fromArray(H),se=new Ft().fromArray(ee);function fe(z,be,we,Fe){let Oe=new Uint8Array(4),ut=n.createTexture();n.bindTexture(z,ut),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<we;dt++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(be+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return ut}let pe={};pe[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(pe[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),me(n.DEPTH_TEST),c.setFunc(ec),ze(!1),C(T_),me(n.CULL_FACE),he(Qi);function me(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Me(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function Ae(z,be){return p[z]!==be?(n.bindFramebuffer(z,be),p[z]=be,i&&(z===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=be),z===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function Y(z,be){let we=y,Fe=!1;if(z)if(we=g.get(be),we===void 0&&(we=[],g.set(be,we)),z.isWebGLMultipleRenderTargets){let Oe=z.texture;if(we.length!==Oe.length||we[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,dt=Oe.length;ut<dt;ut++)we[ut]=n.COLOR_ATTACHMENT0+ut;we.length=Oe.length,Fe=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Fe=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function ot(z){return _!==z?(n.useProgram(z),_=z,!0):!1}let ge={[Vr]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[wv]:n.FUNC_REVERSE_SUBTRACT};if(i)ge[I_]=n.MIN,ge[P_]=n.MAX;else{let z=e.get("EXT_blend_minmax");z!==null&&(ge[I_]=z.MIN_EXT,ge[P_]=z.MAX_EXT)}let Se={[Mv]:n.ZERO,[Sv]:n.ONE,[Ev]:n.SRC_COLOR,[ou]:n.SRC_ALPHA,[Pv]:n.SRC_ALPHA_SATURATE,[Cv]:n.DST_COLOR,[Av]:n.DST_ALPHA,[Tv]:n.ONE_MINUS_SRC_COLOR,[au]:n.ONE_MINUS_SRC_ALPHA,[Iv]:n.ONE_MINUS_DST_COLOR,[Rv]:n.ONE_MINUS_DST_ALPHA,[Lv]:n.CONSTANT_COLOR,[Dv]:n.ONE_MINUS_CONSTANT_COLOR,[Uv]:n.CONSTANT_ALPHA,[Nv]:n.ONE_MINUS_CONSTANT_ALPHA};function he(z,be,we,Fe,Oe,ut,dt,Ot,tn,ht){if(z===Qi){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(me(n.BLEND),m=!0),z!==vv){if(z!==w||ht!==B){if((v!==Vr||P!==Vr)&&(n.blendEquation(n.FUNC_ADD),v=Vr,P=Vr),ht)switch(z){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A_:n.blendFunc(n.ONE,n.ONE);break;case R_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case R_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case C_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,I=null,U=null,O=null,S.set(0,0,0),R=0,w=z,B=ht}return}Oe=Oe||be,ut=ut||we,dt=dt||Fe,(be!==v||Oe!==P)&&(n.blendEquationSeparate(ge[be],ge[Oe]),v=be,P=Oe),(we!==T||Fe!==I||ut!==U||dt!==O)&&(n.blendFuncSeparate(Se[we],Se[Fe],Se[ut],Se[dt]),T=we,I=Fe,U=ut,O=dt),(Ot.equals(S)===!1||tn!==R)&&(n.blendColor(Ot.r,Ot.g,Ot.b,tn),S.copy(Ot),R=tn),w=z,B=!1}function rt(z,be){z.side===Vn?Me(n.CULL_FACE):me(n.CULL_FACE);let we=z.side===jt;be&&(we=!we),ze(we),z.blending===Fs&&z.transparent===!1?he(Qi):he(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);let Fe=z.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),j(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(z){J!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),J=z)}function C(z){z!==yv?(me(n.CULL_FACE),z!==ne&&(z===T_?n.cullFace(n.BACK):z===xv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),ne=z}function E(z){z!==M&&(V&&n.lineWidth(z),M=z)}function j(z,be,we){z?(me(n.POLYGON_OFFSET_FILL),(D!==be||k!==we)&&(n.polygonOffset(be,we),D=be,k=we)):Me(n.POLYGON_OFFSET_FILL)}function le(z){z?me(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function oe(z){z===void 0&&(z=n.TEXTURE0+F-1),N!==z&&(n.activeTexture(z),N=z)}function de(z,be,we){we===void 0&&(N===null?we=n.TEXTURE0+F-1:we=N);let Fe=W[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},W[we]=Fe),(Fe.type!==z||Fe.texture!==be)&&(N!==we&&(n.activeTexture(we),N=we),n.bindTexture(z,be||pe[z]),Fe.type=z,Fe.texture=be)}function Pe(){let z=W[N];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(z){ce.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ce.copy(z))}function nt(z){se.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),se.copy(z))}function pt(z,be){let we=h.get(be);we===void 0&&(we=new WeakMap,h.set(be,we));let Fe=we.get(z);Fe===void 0&&(Fe=n.getUniformBlockIndex(be,z.name),we.set(z,Fe))}function Ye(z,be){let Fe=h.get(be).get(z);u.get(be)!==Fe&&(n.uniformBlockBinding(be,Fe,z.__bindingPointIndex),u.set(be,Fe))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},N=null,W={},p={},g=new WeakMap,y=[],_=null,m=!1,w=null,v=null,T=null,I=null,P=null,U=null,O=null,S=new Ge(0,0,0),R=0,B=!1,J=null,ne=null,M=null,D=null,k=null,ce.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:me,disable:Me,bindFramebuffer:Ae,drawBuffers:Y,useProgram:ot,setBlending:he,setMaterial:rt,setFlipSided:ze,setCullFace:C,setLineWidth:E,setPolygonOffset:j,setScissorTest:le,activeTexture:oe,bindTexture:de,unbindTexture:Pe,compressedTexImage2D:ve,compressedTexImage3D:re,texImage2D:De,texImage3D:Te,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:Ue,texStorage3D:Ne,texSubImage2D:ue,texSubImage3D:_e,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ce,scissor:He,viewport:nt,reset:ye}}function gE(n,e,t,i,r,s,a){let o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):cc("canvas")}function y(C,E,j,le){let oe=1;if((C.width>le||C.height>le)&&(oe=le/Math.max(C.width,C.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let de=E?ac:Math.floor,Pe=de(oe*C.width),ve=de(oe*C.height);h===void 0&&(h=g(Pe,ve));let re=j?g(Pe,ve):h;return re.width=Pe,re.height=ve,re.getContext("2d").drawImage(C,0,0,Pe,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Pe+"x"+ve+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function _(C){return fu(C.width)&&fu(C.height)}function m(C){return o?!1:C.wrapS!==Gn||C.wrapT!==Gn||C.minFilter!==on&&C.minFilter!==In}function w(C,E){return C.generateMipmaps&&E&&C.minFilter!==on&&C.minFilter!==In}function v(C){n.generateMipmap(C)}function T(C,E,j,le,oe=!1){if(o===!1)return E;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=E;if(E===n.RED&&(j===n.FLOAT&&(de=n.R32F),j===n.HALF_FLOAT&&(de=n.R16F),j===n.UNSIGNED_BYTE&&(de=n.R8)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(de=n.R8UI),j===n.UNSIGNED_SHORT&&(de=n.R16UI),j===n.UNSIGNED_INT&&(de=n.R32UI),j===n.BYTE&&(de=n.R8I),j===n.SHORT&&(de=n.R16I),j===n.INT&&(de=n.R32I)),E===n.RG&&(j===n.FLOAT&&(de=n.RG32F),j===n.HALF_FLOAT&&(de=n.RG16F),j===n.UNSIGNED_BYTE&&(de=n.RG8)),E===n.RGBA){let Pe=oe?ic:ct.getTransfer(le);j===n.FLOAT&&(de=n.RGBA32F),j===n.HALF_FLOAT&&(de=n.RGBA16F),j===n.UNSIGNED_BYTE&&(de=Pe===_t?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(C,E,j){return w(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){return C===on||C===L_||C===Rl?n.NEAREST:n.LINEAR}function U(C){let E=C.target;E.removeEventListener("dispose",U),S(E),E.isVideoTexture&&u.delete(E)}function O(C){let E=C.target;E.removeEventListener("dispose",O),B(E)}function S(C){let E=i.get(C);if(E.__webglInit===void 0)return;let j=C.source,le=f.get(j);if(le){let oe=le[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(C),Object.keys(le).length===0&&f.delete(j)}i.remove(C)}function R(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let j=C.source,le=f.get(j);delete le[E.__cacheKey],a.memory.textures--}function B(C){let E=C.texture,j=i.get(C),le=i.get(E);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(j.__webglFramebuffer[oe]))for(let de=0;de<j.__webglFramebuffer[oe].length;de++)n.deleteFramebuffer(j.__webglFramebuffer[oe][de]);else n.deleteFramebuffer(j.__webglFramebuffer[oe]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[oe])}else{if(Array.isArray(j.__webglFramebuffer))for(let oe=0;oe<j.__webglFramebuffer.length;oe++)n.deleteFramebuffer(j.__webglFramebuffer[oe]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let oe=0;oe<j.__webglColorRenderbuffer.length;oe++)j.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[oe]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,de=E.length;oe<de;oe++){let Pe=i.get(E[oe]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),a.memory.textures--),i.remove(E[oe])}i.remove(E),i.remove(C)}let J=0;function ne(){J=0}function M(){let C=J;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),J+=1,C}function D(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function k(C,E){let j=i.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){let le=C.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(j,C,E);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function F(C,E){let j=i.get(C);if(C.version>0&&j.__version!==C.version){ce(j,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function V(C,E){let j=i.get(C);if(C.version>0&&j.__version!==C.version){ce(j,C,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function q(C,E){let j=i.get(C);if(C.version>0&&j.__version!==C.version){se(j,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}let Q={[uu]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[du]:n.MIRRORED_REPEAT},N={[on]:n.NEAREST,[L_]:n.NEAREST_MIPMAP_NEAREST,[Rl]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Zv]:n.LINEAR_MIPMAP_NEAREST,[zo]:n.LINEAR_MIPMAP_LINEAR},W={[lb]:n.NEVER,[_b]:n.ALWAYS,[ub]:n.LESS,[fg]:n.LEQUAL,[db]:n.EQUAL,[pb]:n.GEQUAL,[hb]:n.GREATER,[fb]:n.NOTEQUAL};function H(C,E,j){if(j?(n.texParameteri(C,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Q[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,N[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,N[E.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Gn||E.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,P(E.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==on&&E.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,W[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===on||E.minFilter!==Rl&&E.minFilter!==zo||E.type===Ki&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Fo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(C,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ee(C,E){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",U));let le=E.source,oe=f.get(le);oe===void 0&&(oe={},f.set(le,oe));let de=D(E);if(de!==C.__cacheKey){oe[de]===void 0&&(oe[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),oe[de].usedTimes++;let Pe=oe[C.__cacheKey];Pe!==void 0&&(oe[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&R(E)),C.__cacheKey=de,C.__webglTexture=oe[de].texture}return j}function ce(C,E,j){let le=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=n.TEXTURE_3D);let oe=ee(C,E),de=E.source;t.bindTexture(le,C.__webglTexture,n.TEXTURE0+j);let Pe=i.get(de);if(de.version!==Pe.__version||oe===!0){t.activeTexture(n.TEXTURE0+j);let ve=ct.getPrimaries(ct.workingColorSpace),re=E.colorSpace===Pn?null:ct.getPrimaries(E.colorSpace),ue=E.colorSpace===Pn||ve===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let _e=m(E)&&_(E.image)===!1,ie=y(E.image,_e,!1,r.maxTextureSize);ie=ze(E,ie);let Ce=_(ie)||o,Ue=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type),De=T(E.internalFormat,Ue,Ne,E.colorSpace,E.isVideoTexture);H(le,E,Ce);let Te,He=E.mipmaps,nt=o&&E.isVideoTexture!==!0&&De!==ug,pt=Pe.__version===void 0||oe===!0,Ye=I(E,ie,Ce);if(E.isDepthTexture)De=n.DEPTH_COMPONENT,o?E.type===Ki?De=n.DEPTH_COMPONENT32F:E.type===Zi?De=n.DEPTH_COMPONENT24:E.type===Xr?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:E.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===qr&&De===n.DEPTH_COMPONENT&&E.type!==qu&&E.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Zi,Ne=s.convert(E.type)),E.format===Xs&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,E.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Xr,Ne=s.convert(E.type))),pt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,De,ie.width,ie.height,0,Ue,Ne,null));else if(E.isDataTexture)if(He.length>0&&Ce){nt&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,De,He[0].width,He[0].height);for(let ye=0,z=He.length;ye<z;ye++)Te=He[ye],nt?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ue,Ne,Te.data):t.texImage2D(n.TEXTURE_2D,ye,De,Te.width,Te.height,0,Ue,Ne,Te.data);E.generateMipmaps=!1}else nt?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,De,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Ue,Ne,ie.data)):t.texImage2D(n.TEXTURE_2D,0,De,ie.width,ie.height,0,Ue,Ne,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,De,He[0].width,He[0].height,ie.depth);for(let ye=0,z=He.length;ye<z;ye++)Te=He[ye],E.format!==Wn?Ue!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,ie.depth,Ue,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,De,Te.width,Te.height,ie.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Te.width,Te.height,ie.depth,Ue,Ne,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,De,Te.width,Te.height,ie.depth,0,Ue,Ne,Te.data)}else{nt&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,De,He[0].width,He[0].height);for(let ye=0,z=He.length;ye<z;ye++)Te=He[ye],E.format!==Wn?Ue!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ue,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Te.width,Te.height,Ue,Ne,Te.data):t.texImage2D(n.TEXTURE_2D,ye,De,Te.width,Te.height,0,Ue,Ne,Te.data)}else if(E.isDataArrayTexture)nt?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,De,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ue,Ne,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,Ue,Ne,ie.data);else if(E.isData3DTexture)nt?(pt&&t.texStorage3D(n.TEXTURE_3D,Ye,De,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ue,Ne,ie.data)):t.texImage3D(n.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,Ue,Ne,ie.data);else if(E.isFramebufferTexture){if(pt)if(nt)t.texStorage2D(n.TEXTURE_2D,Ye,De,ie.width,ie.height);else{let ye=ie.width,z=ie.height;for(let be=0;be<Ye;be++)t.texImage2D(n.TEXTURE_2D,be,De,ye,z,0,Ue,Ne,null),ye>>=1,z>>=1}}else if(He.length>0&&Ce){nt&&pt&&t.texStorage2D(n.TEXTURE_2D,Ye,De,He[0].width,He[0].height);for(let ye=0,z=He.length;ye<z;ye++)Te=He[ye],nt?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ue,Ne,Te):t.texImage2D(n.TEXTURE_2D,ye,De,Ue,Ne,Te);E.generateMipmaps=!1}else nt?(pt&&t.texStorage2D(n.TEXTURE_2D,Ye,De,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,Ne,ie)):t.texImage2D(n.TEXTURE_2D,0,De,Ue,Ne,ie);w(E,Ce)&&v(le),Pe.__version=de.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function se(C,E,j){if(E.image.length!==6)return;let le=ee(C,E),oe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+j);let de=i.get(oe);if(oe.version!==de.__version||le===!0){t.activeTexture(n.TEXTURE0+j);let Pe=ct.getPrimaries(ct.workingColorSpace),ve=E.colorSpace===Pn?null:ct.getPrimaries(E.colorSpace),re=E.colorSpace===Pn||Pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ue=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let ye=0;ye<6;ye++)!ue&&!_e?ie[ye]=y(E.image[ye],!1,!0,r.maxCubemapSize):ie[ye]=_e?E.image[ye].image:E.image[ye],ie[ye]=ze(E,ie[ye]);let Ce=ie[0],Ue=_(Ce)||o,Ne=s.convert(E.format,E.colorSpace),De=s.convert(E.type),Te=T(E.internalFormat,Ne,De,E.colorSpace),He=o&&E.isVideoTexture!==!0,nt=de.__version===void 0||le===!0,pt=I(E,Ce,Ue);H(n.TEXTURE_CUBE_MAP,E,Ue);let Ye;if(ue){He&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Te,Ce.width,Ce.height);for(let ye=0;ye<6;ye++){Ye=ie[ye].mipmaps;for(let z=0;z<Ye.length;z++){let be=Ye[z];E.format!==Wn?Ne!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,0,0,be.width,be.height,Ne,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,0,0,be.width,be.height,Ne,De,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z,Te,be.width,be.height,0,Ne,De,be.data)}}}else{Ye=E.mipmaps,He&&nt&&(Ye.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Te,ie[0].width,ie[0].height));for(let ye=0;ye<6;ye++)if(_e){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ie[ye].width,ie[ye].height,Ne,De,ie[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Te,ie[ye].width,ie[ye].height,0,Ne,De,ie[ye].data);for(let z=0;z<Ye.length;z++){let we=Ye[z].image[ye].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,0,0,we.width,we.height,Ne,De,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,Te,we.width,we.height,0,Ne,De,we.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne,De,ie[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Te,Ne,De,ie[ye]);for(let z=0;z<Ye.length;z++){let be=Ye[z];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,0,0,Ne,De,be.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,z+1,Te,Ne,De,be.image[ye])}}}w(E,Ue)&&v(n.TEXTURE_CUBE_MAP),de.__version=oe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function fe(C,E,j,le,oe,de){let Pe=s.convert(j.format,j.colorSpace),ve=s.convert(j.type),re=T(j.internalFormat,Pe,ve,j.colorSpace);if(!i.get(E).__hasExternalTextures){let _e=Math.max(1,E.width>>de),ie=Math.max(1,E.height>>de);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,de,re,_e,ie,E.depth,0,Pe,ve,null):t.texImage2D(oe,de,re,_e,ie,0,Pe,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),he(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,oe,i.get(j).__webglTexture,0,Se(E)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,oe,i.get(j).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(C,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let le=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||he(E)){let oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ki?le=n.DEPTH_COMPONENT32F:oe.type===Zi&&(le=n.DEPTH_COMPONENT24));let de=Se(E);he(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,le,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,le,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let le=Se(E);j&&he(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,E.width,E.height):he(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let le=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0;oe<le.length;oe++){let de=le[oe],Pe=s.convert(de.format,de.colorSpace),ve=s.convert(de.type),re=T(de.internalFormat,Pe,ve,de.colorSpace),ue=Se(E);j&&he(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,re,E.width,E.height):he(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);let le=i.get(E.depthTexture).__webglTexture,oe=Se(E);if(E.depthTexture.format===qr)he(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(E.depthTexture.format===Xs)he(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Me(C){let E=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");me(E.__webglFramebuffer,C)}else if(j){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=n.createRenderbuffer(),pe(E.__webglDepthbuffer[le],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),pe(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(C,E,j){let le=i.get(C);E!==void 0&&fe(le.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&Me(C)}function Y(C){let E=C.texture,j=i.get(C),le=i.get(E);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=E.version,a.memory.textures++);let oe=C.isWebGLCubeRenderTarget===!0,de=C.isWebGLMultipleRenderTargets===!0,Pe=_(C)||o;if(oe){j.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[ve]=[];for(let re=0;re<E.mipmaps.length;re++)j.__webglFramebuffer[ve][re]=n.createFramebuffer()}else j.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)j.__webglFramebuffer[ve]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(de)if(r.drawBuffers){let ve=C.texture;for(let re=0,ue=ve.length;re<ue;re++){let _e=i.get(ve[re]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&he(C)===!1){let ve=de?E:[E];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let re=0;re<ve.length;re++){let ue=ve[re];j.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[re]);let _e=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),Ce=T(ue.internalFormat,_e,ie,ue.colorSpace,C.isXRRenderTarget===!0),Ue=Se(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ce,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,j.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),H(n.TEXTURE_CUBE_MAP,E,Pe);for(let ve=0;ve<6;ve++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)fe(j.__webglFramebuffer[ve][re],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,re);else fe(j.__webglFramebuffer[ve],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);w(E,Pe)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){let ve=C.texture;for(let re=0,ue=ve.length;re<ue;re++){let _e=ve[re],ie=i.get(_e);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),H(n.TEXTURE_2D,_e,Pe),fe(j.__webglFramebuffer,C,_e,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),w(_e,Pe)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ve=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,le.__webglTexture),H(ve,E,Pe),o&&E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)fe(j.__webglFramebuffer[re],C,E,n.COLOR_ATTACHMENT0,ve,re);else fe(j.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,ve,0);w(E,Pe)&&v(ve),t.unbindTexture()}C.depthBuffer&&Me(C)}function ot(C){let E=_(C)||o,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let le=0,oe=j.length;le<oe;le++){let de=j[le];if(w(de,E)){let Pe=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(de).__webglTexture;t.bindTexture(Pe,ve),v(Pe),t.unbindTexture()}}}function ge(C){if(o&&C.samples>0&&he(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,le=C.height,oe=n.COLOR_BUFFER_BIT,de=[],Pe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(C),re=C.isWebGLMultipleRenderTargets===!0;if(re)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){de.push(n.COLOR_ATTACHMENT0+ue),C.depthBuffer&&de.push(Pe);let _e=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(_e===!1&&(C.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]),_e===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Pe])),re){let ie=i.get(E[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,j,le,0,0,j,le,oe,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let _e=i.get(E[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Se(C){return Math.min(r.maxSamples,C.samples)}function he(C){let E=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function rt(C){let E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ze(C,E){let j=C.colorSpace,le=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hu||j!==Ai&&j!==Pn&&(ct.getTransfer(j)===_t?o===!1?e.has("EXT_sRGB")===!0&&le===Wn?(C.format=hu,C.minFilter=In,C.generateMipmaps=!1):E=lc.sRGBToLinear(E):(le!==Wn||oe!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}this.allocateTextureUnit=M,this.resetTextureUnits=ne,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=Ae,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=he}function yE(n,e,t){let i=t.isWebGL2;function r(s,a=Pn){let o,c=ct.getTransfer(a);if(s===tr)return n.UNSIGNED_BYTE;if(s===sg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===og)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Kv)return n.BYTE;if(s===Qv)return n.SHORT;if(s===qu)return n.UNSIGNED_SHORT;if(s===rg)return n.INT;if(s===Zi)return n.UNSIGNED_INT;if(s===Ki)return n.FLOAT;if(s===Fo)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===eb)return n.ALPHA;if(s===Wn)return n.RGBA;if(s===tb)return n.LUMINANCE;if(s===nb)return n.LUMINANCE_ALPHA;if(s===qr)return n.DEPTH_COMPONENT;if(s===Xs)return n.DEPTH_STENCIL;if(s===hu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ib)return n.RED;if(s===ag)return n.RED_INTEGER;if(s===rb)return n.RG;if(s===cg)return n.RG_INTEGER;if(s===lg)return n.RGBA_INTEGER;if(s===Cl||s===Il||s===Pl||s===Ll)if(c===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Il)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ll)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===D_||s===U_||s===N_||s===O_)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===D_)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===U_)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===N_)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===O_)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ug)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===k_||s===z_)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===k_)return c===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===z_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===F_||s===B_||s===H_||s===V_||s===G_||s===W_||s===X_||s===q_||s===Y_||s===J_||s===j_||s===$_||s===Z_||s===K_)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===F_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===B_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===H_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===V_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===G_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===W_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===X_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===q_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Y_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===J_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===j_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Z_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===K_)return c===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dl||s===Q_||s===em)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Dl)return c===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Q_)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===em)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sb||s===tm||s===nm||s===im)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Dl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===tm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===im)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Tu=class extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ti=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},xE={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,i),m=this._getHandJoint(l,y);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Au=class extends nr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,y=t.getContextAttributes(),_=null,m=null,w=[],v=[],T=new tt,I=null,P=new wn;P.layers.enable(1),P.viewport=new Ft;let U=new wn;U.layers.enable(2),U.viewport=new Ft;let O=[P,U],S=new Tu;S.layers.enable(1),S.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=w[H];return ee===void 0&&(ee=new ko,w[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=w[H];return ee===void 0&&(ee=new ko,w[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=w[H];return ee===void 0&&(ee=new ko,w[H]=ee),ee.getHandSpace()};function J(H){let ee=v.indexOf(H.inputSource);if(ee===-1)return;let ce=w[ee];ce!==void 0&&(ce.update(H.inputSource,H.frame,l||a),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function ne(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",M);for(let H=0;H<w.length;H++){let ee=v[H];ee!==null&&(v[H]=null,w[H].disconnect(ee))}R=null,B=null,e.setRenderTarget(_),p=null,f=null,h=null,r=null,m=null,W.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",M),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Ri(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,ce=null,se=null;y.depth&&(se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?Xs:qr,ce=y.stencil?Xr:Zi);let fe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),m=new Ri(f.textureWidth,f.textureHeight,{format:Wn,type:tr,depthTexture:new yc(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let pe=e.properties.get(m);pe.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),W.setContext(r),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function M(H){for(let ee=0;ee<H.removed.length;ee++){let ce=H.removed[ee],se=v.indexOf(ce);se>=0&&(v[se]=null,w[se].disconnect(ce))}for(let ee=0;ee<H.added.length;ee++){let ce=H.added[ee],se=v.indexOf(ce);if(se===-1){for(let pe=0;pe<w.length;pe++)if(pe>=v.length){v.push(ce),se=pe;break}else if(v[pe]===null){v[pe]=ce,se=pe;break}if(se===-1)break}let fe=w[se];fe&&fe.connect(ce)}}let D=new G,k=new G;function F(H,ee,ce){D.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);let se=D.distanceTo(k),fe=ee.projectionMatrix.elements,pe=ce.projectionMatrix.elements,me=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),Ae=(fe[9]+1)/fe[5],Y=(fe[9]-1)/fe[5],ot=(fe[8]-1)/fe[0],ge=(pe[8]+1)/pe[0],Se=me*ot,he=me*ge,rt=se/(-ot+ge),ze=rt*-ot;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ze),H.translateZ(rt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let C=me+rt,E=Me+rt,j=Se-ze,le=he+(se-ze),oe=Ae*Me/E*C,de=Y*Me/E*C;H.projectionMatrix.makePerspective(j,le,oe,de,C,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;S.near=U.near=P.near=H.near,S.far=U.far=P.far=H.far,(R!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,B=S.far);let ee=H.parent,ce=S.cameras;V(S,ee);for(let se=0;se<ce.length;se++)V(ce[se],ee);ce.length===2?F(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),q(H,S,ee)};function q(H,ee,ce){ce===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Bo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let Q=null;function N(H,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){let ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let se=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let fe=0;fe<ce.length;fe++){let pe=ce[fe],me=null;if(p!==null)me=p.getViewport(pe);else{let Ae=h.getViewSubImage(f,pe);me=Ae.viewport,fe===0&&(e.setRenderTargetTextures(m,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(m))}let Me=O[fe];Me===void 0&&(Me=new wn,Me.layers.enable(fe),Me.viewport=new Ft,O[fe]=Me),Me.matrix.fromArray(pe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(pe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(me.x,me.y,me.width,me.height),fe===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Me)}}for(let ce=0;ce<w.length;ce++){let se=v[ce],fe=w[ce];se!==null&&fe!==void 0&&fe.update(se,ee,l||a)}Q&&Q(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let W=new yg;W.setAnimationLoop(N),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}};function vE(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,gg(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,w,v,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),h(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,T)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),y(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?c(_,m,w,v):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===jt&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===jt&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let w=e.get(m).envMap;if(w&&(_.envMap.value=w,_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,w,v){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*w,_.scale.value=v*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),e.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,w){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function y(_,m){let w=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bE(n,e,t,i){let r={},s={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,v){let T=v.program;i.uniformBlockBinding(w,T)}function l(w,v){let T=r[w.id];T===void 0&&(g(w),T=u(w),r[w.id]=T,w.addEventListener("dispose",_));let I=v.program;i.updateUBOMapping(w,I);let P=e.render.frame;s[w.id]!==P&&(f(w),s[w.id]=P)}function u(w){let v=h();w.__bindingPointIndex=v;let T=n.createBuffer(),I=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let v=r[w.id],T=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let P=0,U=T.length;P<U;P++){let O=Array.isArray(T[P])?T[P]:[T[P]];for(let S=0,R=O.length;S<R;S++){let B=O[S];if(p(B,P,S,I)===!0){let J=B.__offset,ne=Array.isArray(B.value)?B.value:[B.value],M=0;for(let D=0;D<ne.length;D++){let k=ne[D],F=y(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,J+M,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,M),M+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,v,T,I){let P=w.value,U=v+"_"+T;if(I[U]===void 0)return typeof P=="number"||typeof P=="boolean"?I[U]=P:I[U]=P.clone(),!0;{let O=I[U];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return I[U]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function g(w){let v=w.uniforms,T=0,I=16;for(let U=0,O=v.length;U<O;U++){let S=Array.isArray(v[U])?v[U]:[v[U]];for(let R=0,B=S.length;R<B;R++){let J=S[R],ne=Array.isArray(J.value)?J.value:[J.value];for(let M=0,D=ne.length;M<D;M++){let k=ne[M],F=y(k),V=T%I;V!==0&&I-V<F.boundary&&(T+=I-V),J.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=F.storage}}}let P=T%I;return P>0&&(T+=I-P),w.__size=T,w.__cache={},this}function y(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function _(w){let v=w.target;v.removeEventListener("dispose",_);let T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}var Wo=class{constructor(e={}){let{canvas:t=Ib(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,_=null,m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;let v=this,T=!1,I=0,P=0,U=null,O=-1,S=null,R=new Ft,B=new Ft,J=null,ne=new Ge(0),M=0,D=t.width,k=t.height,F=1,V=null,q=null,Q=new Ft(0,0,D,k),N=new Ft(0,0,D,k),W=!1,H=new Go,ee=!1,ce=!1,se=null,fe=new It,pe=new tt,me=new G,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return U===null?F:1}let Y=i;function ot(A,X){for(let K=0;K<A.length;K++){let te=A[K],$=t.getContext(te,X);if($!==null)return $}return null}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",be,!1),Y===null){let X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),Y=ot(X,A),Y===null)throw ot(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,Se,he,rt,ze,C,E,j,le,oe,de,Pe,ve,re,ue,_e,ie,Ce,Ue,Ne,De,Te,He,nt;function pt(){ge=new B1(Y),Se=new U1(Y,ge,e),ge.init(Se),Te=new yE(Y,ge,Se),he=new mE(Y,ge,Se),rt=new G1(Y),ze=new rE,C=new gE(Y,ge,he,ze,Se,Te,rt),E=new O1(v),j=new F1(v),le=new Zb(Y,Se),He=new L1(Y,ge,le,Se),oe=new H1(Y,le,rt,He),de=new Y1(Y,oe,le,rt),Ue=new q1(Y,Se,C),_e=new N1(ze),Pe=new iE(v,E,j,ge,Se,He,_e),ve=new vE(v,ze),re=new oE,ue=new hE(ge,Se),Ce=new P1(v,E,j,he,de,f,c),ie=new _E(v,de,Se),nt=new bE(Y,rt,Se,he),Ne=new D1(Y,ge,rt,Se),De=new V1(Y,ge,rt,Se),rt.programs=Pe.programs,v.capabilities=Se,v.extensions=ge,v.properties=ze,v.renderLists=re,v.shadowMap=ie,v.state=he,v.info=rt}pt();let Ye=new Au(v,Y);this.xr=Ye,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(D,k,!1))},this.getSize=function(A){return A.set(D,k)},this.setSize=function(A,X,K=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,k=X,t.width=Math.floor(A*F),t.height=Math.floor(X*F),K===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(D*F,k*F).floor()},this.setDrawingBufferSize=function(A,X,K){D=A,k=X,F=K,t.width=Math.floor(A*K),t.height=Math.floor(X*K),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,X,K,te){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,X,K,te),he.viewport(R.copy(Q).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,X,K,te){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,X,K,te),he.scissor(B.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){he.setScissorTest(W=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,X=!0,K=!0){let te=0;if(A){let $=!1;if(U!==null){let Ee=U.texture.format;$=Ee===lg||Ee===cg||Ee===ag}if($){let Ee=U.texture.type,Le=Ee===tr||Ee===Zi||Ee===qu||Ee===Xr||Ee===sg||Ee===og,ke=Ce.getClearColor(),Be=Ce.getClearAlpha(),qe=ke.r,Ve=ke.g,We=ke.b;Le?(p[0]=qe,p[1]=Ve,p[2]=We,p[3]=Be,Y.clearBufferuiv(Y.COLOR,0,p)):(g[0]=qe,g[1]=Ve,g[2]=We,g[3]=Be,Y.clearBufferiv(Y.COLOR,0,g))}else te|=Y.COLOR_BUFFER_BIT}X&&(te|=Y.DEPTH_BUFFER_BIT),K&&(te|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",be,!1),re.dispose(),ue.dispose(),ze.dispose(),E.dispose(),j.dispose(),de.dispose(),He.dispose(),nt.dispose(),Pe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",tn),Ye.removeEventListener("sessionend",ht),se&&(se.dispose(),se=null),nn.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=rt.autoReset,X=ie.enabled,K=ie.autoUpdate,te=ie.needsUpdate,$=ie.type;pt(),rt.autoReset=A,ie.enabled=X,ie.autoUpdate=K,ie.needsUpdate=te,ie.type=$}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function we(A){let X=A.target;X.removeEventListener("dispose",we),Fe(X)}function Fe(A){Oe(A),ze.remove(A)}function Oe(A){let X=ze.get(A).programs;X!==void 0&&(X.forEach(function(K){Pe.releaseProgram(K)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,K,te,$,Ee){X===null&&(X=Me);let Le=$.isMesh&&$.matrixWorld.determinant()<0,ke=pv(A,X,K,te,$);he.setMaterial(te,Le);let Be=K.index,qe=1;if(te.wireframe===!0){if(Be=oe.getWireframeAttribute(K),Be===void 0)return;qe=2}let Ve=K.drawRange,We=K.attributes.position,Tt=Ve.start*qe,xn=(Ve.start+Ve.count)*qe;Ee!==null&&(Tt=Math.max(Tt,Ee.start*qe),xn=Math.min(xn,(Ee.start+Ee.count)*qe)),Be!==null?(Tt=Math.max(Tt,0),xn=Math.min(xn,Be.count)):We!=null&&(Tt=Math.max(Tt,0),xn=Math.min(xn,We.count));let kt=xn-Tt;if(kt<0||kt===1/0)return;He.setup($,te,ke,K,Be);let yi,vt=Ne;if(Be!==null&&(yi=le.get(Be),vt=De,vt.setIndex(yi)),$.isMesh)te.wireframe===!0?(he.setLineWidth(te.wireframeLinewidth*Ae()),vt.setMode(Y.LINES)):vt.setMode(Y.TRIANGLES);else if($.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),he.setLineWidth(Je*Ae()),$.isLineSegments?vt.setMode(Y.LINES):$.isLineLoop?vt.setMode(Y.LINE_LOOP):vt.setMode(Y.LINE_STRIP)}else $.isPoints?vt.setMode(Y.POINTS):$.isSprite&&vt.setMode(Y.TRIANGLES);if($.isBatchedMesh)vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)vt.renderInstances(Tt,kt,$.count);else if(K.isInstancedBufferGeometry){let Je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Sl=Math.min(K.instanceCount,Je);vt.renderInstances(Tt,kt,Sl)}else vt.render(Tt,kt)};function ut(A,X,K){A.transparent===!0&&A.side===Vn&&A.forceSinglePass===!1?(A.side=jt,A.needsUpdate=!0,Ta(A,X,K),A.side=pn,A.needsUpdate=!0,Ta(A,X,K),A.side=Vn):Ta(A,X,K)}this.compile=function(A,X,K=null){K===null&&(K=A),_=ue.get(K),_.init(),w.push(_),K.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),A!==K&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(v._useLegacyLights);let te=new Set;return A.traverse(function($){let Ee=$.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){let ke=Ee[Le];ut(ke,K,$),te.add(ke)}else ut(Ee,K,$),te.add(Ee)}),w.pop(),_=null,te},this.compileAsync=function(A,X,K=null){let te=this.compile(A,X,K);return new Promise($=>{function Ee(){if(te.forEach(function(Le){ze.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){$(A);return}setTimeout(Ee,10)}ge.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let dt=null;function Ot(A){dt&&dt(A)}function tn(){nn.stop()}function ht(){nn.start()}let nn=new yg;nn.setAnimationLoop(Ot),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(A){dt=A,Ye.setAnimationLoop(A),A===null?nn.stop():nn.start()},Ye.addEventListener("sessionstart",tn),Ye.addEventListener("sessionend",ht),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(X),X=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,X,U),_=ue.get(A,w.length),_.init(),w.push(_),fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H.setFromProjectionMatrix(fe),ce=this.localClippingEnabled,ee=_e.init(this.clippingPlanes,ce),y=re.get(A,m.length),y.init(),m.push(y),ei(A,X,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(V,q),this.info.render.frame++,ee===!0&&_e.beginShadows();let K=_.state.shadowsArray;if(ie.render(K,A,X),ee===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(y,A),_.setupLights(v._useLegacyLights),X.isArrayCamera){let te=X.cameras;for(let $=0,Ee=te.length;$<Ee;$++){let Le=te[$];v_(y,A,Le,Le.viewport)}}else v_(y,A,X);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(v,A,X),He.resetDefaultState(),O=-1,S=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ei(A,X,K,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){te&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);let Le=de.update(A),ke=A.material;ke.visible&&y.push(A,Le,ke,K,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){let Le=de.update(A),ke=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),me.copy(Le.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(ke)){let Be=Le.groups;for(let qe=0,Ve=Be.length;qe<Ve;qe++){let We=Be[qe],Tt=ke[We.materialIndex];Tt&&Tt.visible&&y.push(A,Le,Tt,K,me.z,We)}}else ke.visible&&y.push(A,Le,ke,K,me.z,null)}}let Ee=A.children;for(let Le=0,ke=Ee.length;Le<ke;Le++)ei(Ee[Le],X,K,te)}function v_(A,X,K,te){let $=A.opaque,Ee=A.transmissive,Le=A.transparent;_.setupLightsView(K),ee===!0&&_e.setGlobalState(v.clippingPlanes,K),Ee.length>0&&fv($,Ee,X,K),te&&he.viewport(R.copy(te)),$.length>0&&Ea($,X,K),Ee.length>0&&Ea(Ee,X,K),Le.length>0&&Ea(Le,X,K),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function fv(A,X,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Ee=Se.isWebGL2;se===null&&(se=new Ri(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Fo:tr,minFilter:zo,samples:Ee?4:0})),v.getDrawingBufferSize(pe),Ee?se.setSize(pe.x,pe.y):se.setSize(ac(pe.x),ac(pe.y));let Le=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(ne),M=v.getClearAlpha(),M<1&&v.setClearColor(16777215,.5),v.clear();let ke=v.toneMapping;v.toneMapping=er,Ea(A,K,te),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se);let Be=!1;for(let qe=0,Ve=X.length;qe<Ve;qe++){let We=X[qe],Tt=We.object,xn=We.geometry,kt=We.material,yi=We.group;if(kt.side===Vn&&Tt.layers.test(te.layers)){let vt=kt.side;kt.side=jt,kt.needsUpdate=!0,b_(Tt,K,te,xn,kt,yi),kt.side=vt,kt.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se)),v.setRenderTarget(Le),v.setClearColor(ne,M),v.toneMapping=ke}function Ea(A,X,K){let te=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ee=A.length;$<Ee;$++){let Le=A[$],ke=Le.object,Be=Le.geometry,qe=te===null?Le.material:te,Ve=Le.group;ke.layers.test(K.layers)&&b_(ke,X,K,Be,qe,Ve)}}function b_(A,X,K,te,$,Ee){A.onBeforeRender(v,X,K,te,$,Ee),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(v,X,K,te,A,Ee),$.transparent===!0&&$.side===Vn&&$.forceSinglePass===!1?($.side=jt,$.needsUpdate=!0,v.renderBufferDirect(K,X,te,$,A,Ee),$.side=pn,$.needsUpdate=!0,v.renderBufferDirect(K,X,te,$,A,Ee),$.side=Vn):v.renderBufferDirect(K,X,te,$,A,Ee),A.onAfterRender(v,X,K,te,$,Ee)}function Ta(A,X,K){X.isScene!==!0&&(X=Me);let te=ze.get(A),$=_.state.lights,Ee=_.state.shadowsArray,Le=$.state.version,ke=Pe.getParameters(A,$.state,Ee,X,K),Be=Pe.getProgramCacheKey(ke),qe=te.programs;te.environment=A.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(A.isMeshStandardMaterial?j:E).get(A.envMap||te.environment),qe===void 0&&(A.addEventListener("dispose",we),qe=new Map,te.programs=qe);let Ve=qe.get(Be);if(Ve!==void 0){if(te.currentProgram===Ve&&te.lightsStateVersion===Le)return M_(A,ke),Ve}else ke.uniforms=Pe.getUniforms(A),A.onBuild(K,ke,v),A.onBeforeCompile(ke,v),Ve=Pe.acquireProgram(ke,Be),qe.set(Be,Ve),te.uniforms=ke.uniforms;let We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=_e.uniform),M_(A,ke),te.needsLights=mv(A),te.lightsStateVersion=Le,te.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=Ve,te.uniformsList=null,Ve}function w_(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Vs.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function M_(A,X){let K=ze.get(A);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function pv(A,X,K,te,$){X.isScene!==!0&&(X=Me),C.resetTextureUnits();let Ee=X.fog,Le=te.isMeshStandardMaterial?X.environment:null,ke=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ai,Be=(te.isMeshStandardMaterial?j:E).get(te.envMap||Le),qe=te.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!K.morphAttributes.position,Tt=!!K.morphAttributes.normal,xn=!!K.morphAttributes.color,kt=er;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(kt=v.toneMapping);let yi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=yi!==void 0?yi.length:0,Je=ze.get(te),Sl=_.state.lights;if(ee===!0&&(ce===!0||A!==S)){let Rn=A===S&&te.id===O;_e.setState(te,A,Rn)}let wt=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Sl.state.version||Je.outputColorSpace!==ke||$.isBatchedMesh&&Je.batching===!1||!$.isBatchedMesh&&Je.batching===!0||$.isInstancedMesh&&Je.instancing===!1||!$.isInstancedMesh&&Je.instancing===!0||$.isSkinnedMesh&&Je.skinning===!1||!$.isSkinnedMesh&&Je.skinning===!0||$.isInstancedMesh&&Je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Je.instancingColor===!1&&$.instanceColor!==null||Je.envMap!==Be||te.fog===!0&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==_e.numPlanes||Je.numIntersection!==_e.numIntersection)||Je.vertexAlphas!==qe||Je.vertexTangents!==Ve||Je.morphTargets!==We||Je.morphNormals!==Tt||Je.morphColors!==xn||Je.toneMapping!==kt||Se.isWebGL2===!0&&Je.morphTargetsCount!==vt)&&(wt=!0):(wt=!0,Je.__version=te.version);let Nr=Je.currentProgram;wt===!0&&(Nr=Ta(te,X,$));let S_=!1,Io=!1,El=!1,Xt=Nr.getUniforms(),Or=Je.uniforms;if(he.useProgram(Nr.program)&&(S_=!0,Io=!0,El=!0),te.id!==O&&(O=te.id,Io=!0),S_||S!==A){Xt.setValue(Y,"projectionMatrix",A.projectionMatrix),Xt.setValue(Y,"viewMatrix",A.matrixWorldInverse);let Rn=Xt.map.cameraPosition;Rn!==void 0&&Rn.setValue(Y,me.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Xt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Xt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Io=!0,El=!0)}if($.isSkinnedMesh){Xt.setOptional(Y,$,"bindMatrix"),Xt.setOptional(Y,$,"bindMatrixInverse");let Rn=$.skeleton;Rn&&(Se.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),Xt.setValue(Y,"boneTexture",Rn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xt.setOptional(Y,$,"batchingTexture"),Xt.setValue(Y,"batchingTexture",$._matricesTexture,C));let Tl=K.morphAttributes;if((Tl.position!==void 0||Tl.normal!==void 0||Tl.color!==void 0&&Se.isWebGL2===!0)&&Ue.update($,K,Nr),(Io||Je.receiveShadow!==$.receiveShadow)&&(Je.receiveShadow=$.receiveShadow,Xt.setValue(Y,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Or.envMap.value=Be,Or.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Io&&(Xt.setValue(Y,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&_v(Or,El),Ee&&te.fog===!0&&ve.refreshFogUniforms(Or,Ee),ve.refreshMaterialUniforms(Or,te,F,k,se),Vs.upload(Y,w_(Je),Or,C)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Vs.upload(Y,w_(Je),Or,C),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Xt.setValue(Y,"center",$.center),Xt.setValue(Y,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(Y,"normalMatrix",$.normalMatrix),Xt.setValue(Y,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Rn=te.uniformsGroups;for(let Al=0,gv=Rn.length;Al<gv;Al++)if(Se.isWebGL2){let E_=Rn[Al];nt.update(E_,Nr),nt.bind(E_,Nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nr}function _v(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function mv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,X,K){ze.get(A.texture).__webglTexture=X,ze.get(A.depthTexture).__webglTexture=K;let te=ze.get(A);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=K===void 0,te.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,X){let K=ze.get(A);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,K=0){U=A,I=X,P=K;let te=!0,$=null,Ee=!1,Le=!1;if(A){let Be=ze.get(A);Be.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(Y.FRAMEBUFFER,null),te=!1):Be.__webglFramebuffer===void 0?C.setupRenderTarget(A):Be.__hasExternalTextures&&C.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);let qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);let Ve=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?$=Ve[X][K]:$=Ve[X],Ee=!0):Se.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?$=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?$=Ve[K]:$=Ve,R.copy(A.viewport),B.copy(A.scissor),J=A.scissorTest}else R.copy(Q).multiplyScalar(F).floor(),B.copy(N).multiplyScalar(F).floor(),J=W;if(he.bindFramebuffer(Y.FRAMEBUFFER,$)&&Se.drawBuffers&&te&&he.drawBuffers(A,$),he.viewport(R),he.scissor(B),he.setScissorTest(J),Ee){let Be=ze.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,K)}else if(Le){let Be=ze.get(A.texture),qe=X||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Be.__webglTexture,K||0,qe)}O=-1},this.readRenderTargetPixels=function(A,X,K,te,$,Ee,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){he.bindFramebuffer(Y.FRAMEBUFFER,ke);try{let Be=A.texture,qe=Be.format,Ve=Be.type;if(qe!==Wn&&Te.convert(qe)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=Ve===Fo&&(ge.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ve!==tr&&Te.convert(Ve)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Ki&&(Se.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&K>=0&&K<=A.height-$&&Y.readPixels(X,K,te,$,Te.convert(qe),Te.convert(Ve),Ee)}finally{let Be=U!==null?ze.get(U).__webglFramebuffer:null;he.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(A,X,K=0){let te=Math.pow(2,-K),$=Math.floor(X.image.width*te),Ee=Math.floor(X.image.height*te);C.setTexture2D(X,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,K,0,0,A.x,A.y,$,Ee),he.unbindTexture()},this.copyTextureToTexture=function(A,X,K,te=0){let $=X.image.width,Ee=X.image.height,Le=Te.convert(K.format),ke=Te.convert(K.type);C.setTexture2D(K,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment),X.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,te,A.x,A.y,$,Ee,Le,ke,X.image.data):X.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,te,A.x,A.y,X.mipmaps[0].width,X.mipmaps[0].height,Le,X.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,te,A.x,A.y,Le,ke,X.image),te===0&&K.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(A,X,K,te,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=A.max.x-A.min.x+1,Le=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,Be=Te.convert(te.format),qe=Te.convert(te.type),Ve;if(te.isData3DTexture)C.setTexture3D(te,0),Ve=Y.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)C.setTexture2DArray(te,0),Ve=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,te.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,te.unpackAlignment);let We=Y.getParameter(Y.UNPACK_ROW_LENGTH),Tt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),xn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),kt=Y.getParameter(Y.UNPACK_SKIP_ROWS),yi=Y.getParameter(Y.UNPACK_SKIP_IMAGES),vt=K.isCompressedTexture?K.mipmaps[$]:K.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,vt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,vt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,A.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,A.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?Y.texSubImage3D(Ve,$,X.x,X.y,X.z,Ee,Le,ke,Be,qe,vt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ve,$,X.x,X.y,X.z,Ee,Le,ke,Be,vt.data)):Y.texSubImage3D(Ve,$,X.x,X.y,X.z,Ee,Le,ke,Be,qe,vt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,We),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Tt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,xn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,kt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,yi),$===0&&te.generateMipmaps&&Y.generateMipmap(Ve),he.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){I=0,P=0,U=null,he.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yu?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?Yr:dg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?Ht:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ru=class extends Wo{};Ru.prototype.isWebGL1Renderer=!0;var xc=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Pi=class extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jm=new G,jm=new G,$m=new It,iu=new Ho,ja=new qs,Cu=class extends ln{constructor(e=new un,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Jm.fromBufferAttribute(t,r-1),jm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jm.distanceTo(jm);e.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ja.radius+=s,e.ray.intersectsSphere(ja)===!1)return;$m.copy(r).invert(),iu.copy(e.ray).applyMatrix4($m);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new G,u=new G,h=new G,f=new G,p=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){let m=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let v=m,T=w-1;v<T;v+=p){let I=g.getX(v),P=g.getX(v+1);if(l.fromBufferAttribute(_,I),u.fromBufferAttribute(_,P),iu.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),w=Math.min(_.count,a.start+a.count);for(let v=m,T=w-1;v<T;v+=p){if(l.fromBufferAttribute(_,v),u.fromBufferAttribute(_,v+1),iu.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Zm=new G,Km=new G,rr=class extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Zm.fromBufferAttribute(t,r),Km.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zm.distanceTo(Km);e.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $a=new G,Za=new G,ru=new G,Ka=new Wr,Jr=class extends un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Bs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:y,b:_,c:m}=Ka;if(y.fromBufferAttribute(o,l[0]),_.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Ka.getNormal(ru),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){let v=(w+1)%3,T=h[w],I=h[v],P=Ka[u[w]],U=Ka[u[v]],O=`${T}_${I}`,S=`${I}_${T}`;S in f&&f[S]?(ru.dot(f[S].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(U.x,U.y,U.z)),f[S]=null):O in f||(f[O]={index0:l[w],index1:l[v],normal:ru.clone()})}}for(let g in f)if(f[g]){let{index0:y,index1:_}=f[g];$a.fromBufferAttribute(o,y),Za.fromBufferAttribute(o,_),p.push($a.x,$a.y,$a.z),p.push(Za.x,Za.y,Za.z)}this.setAttribute("position",new cn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var vc=class extends Ii{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var sr=class extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hg,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Qa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Zs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Iu=class extends Zs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rm,endingEnd:rm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case sm:s=e,o=2*t-i;break;case om:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sm:a=e,c=2*i-t;break;case om:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,_=y*g,m=-f*_+2*f*y-f*g,w=(1+f)*_+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-p)*_+(1.5+p)*y+.5*g,T=p*_-p*y;for(let I=0;I!==o;++I)s[I]=m*a[u+I]+w*a[l+I]+v*a[c+I]+T*a[h+I];return s}},Pu=class extends Zs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}},Lu=class extends Zs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tc:t=this.InterpolantFactoryMethodDiscrete;break;case nc:t=this.InterpolantFactoryMethodLinear;break;case Ul:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tc;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&wE(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ul,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=nc;var jr=class extends Yn{};jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=tc;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Du=class extends Yn{};Du.prototype.ValueTypeName="color";var Uu=class extends Yn{};Uu.prototype.ValueTypeName="number";var Nu=class extends Zs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)ir.slerpFlat(s,0,a,l-o,a,l,c);return s}},Xo=class extends Yn{InterpolantFactoryMethodLinear(e){return new Nu(this.times,this.values,this.getValueSize(),e)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.DefaultInterpolation=nc;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Yn{};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=tc;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ou=class extends Yn{};Ou.prototype.ValueTypeName="vector";var ku=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},ME=new ku,zu=class{constructor(e){this.manager=e!==void 0?e:ME,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zu.DEFAULT_MATERIAL_NAME="__DEFAULT";var bc=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var su=new It,Qm=new G,eg=new G,Fu=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qm),eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eg),t.updateMatrixWorld(),su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bu=class extends Fu{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Bu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},wc=class extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var $u="\\[\\]\\.:\\/",SE=new RegExp("["+$u+"]","g"),Zu="[^"+$u+"]",EE="[^"+$u.replace("\\.","")+"]",TE=/((?:WC+[\/:])*)/.source.replace("WC",Zu),AE=/(WCOD+)?/.source.replace("WCOD",EE),RE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),CE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),IE=new RegExp("^"+TE+AE+RE+CE+"$"),PE=["material","materials","bones","map"],Hu=class{constructor(e,t,i){let r=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SE,"")}static parseTrackName(e){let t=IE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);PE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Hu;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xR=new Float32Array(1);var Mc=class{constructor(e,t,i=0,r=1/0){this.ray=new Ho(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Vu(e,this,i,t),i.sort(tg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vu(e[r],this,i,t);return i.sort(tg),i}};function tg(n,e){return n.distance-e.distance}function Vu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)Vu(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);var Zt=document.getElementById("c"),Mt={w:1,h:1,x:0,y:0},Li=new Wo({canvas:Zt,antialias:!0});Li.setPixelRatio(Math.min(devicePixelRatio,2));Li.shadowMap.enabled=!0;Li.shadowMap.type=Wu;Li.localClippingEnabled=!0;var Dt=new xc;Dt.background=new Ge("#7aa0c4");var LE=Math.atan(1/Math.SQRT2),Qe={azim:Math.PI/4,elev:LE,zoom:80,target:new G(30,15,23)},st={azim:Qe.azim,elev:Qe.elev,zoom:Qe.zoom,target:Qe.target.clone()},Eg=900,Ac=2e3,et=new $s(-1,1,1,-1,.1,4e3),Tg={uGround:{value:1}},Ku=new Ct(new js(2,2),new qn({uniforms:Tg,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));Ku.frustumCulled=!1;Ku.renderOrder=-1e9;Dt.add(Ku);function Ag(){Tg.uGround.value=Math.max(0,Math.min(1,(Qe.elev+.05)/.1))}Dt.add(new wc(16777215,.62));var Mn=new qo(16777215,.78);Mn.castShadow=!0;Mn.shadow.mapSize.set(4096,4096);Mn.shadow.normalBias=.15;Mn.shadow.bias=-2e-4;Dt.add(Mn);Dt.add(Mn.target);var Rg=new qo(16777215,.16);Rg.position.set(-6,5,-7);Dt.add(Rg);var Yo={tail:0},ii=()=>{Yo.tail=30},Qu=new G,Rc=new G,Sg=new Map;function eo(n){let e=Sg.get(n);return e||(e=new Ge().setHex(n),Sg.set(n,e)),e}var ed=new sr({vertexColors:!0,side:pn}),td=new sr({vertexColors:!0,transparent:!0,opacity:.55,side:pn,depthWrite:!1});td.shadowSide=Vn;var Cg=new Ys({colorWrite:!1,side:pn}),Kr=new Ct(new js(8e3,8e3),new vc({opacity:.32}));Kr.rotation.x=-Math.PI/2;Kr.position.y=-.1;Kr.receiveShadow=!0;Kr.renderOrder=-1;Dt.add(Kr);var ri=new Ti;Dt.add(ri);var Di=new Ti;Dt.add(Di);var Sn=new rr(new Jr(new ni(1,1,1)),new Pi({color:10994876,depthTest:!1}));Sn.visible=!1;Sn.renderOrder=999;Dt.add(Sn);var Qr=new rr(new un,new Pi({vertexColors:!0,transparent:!0,depthTest:!1}));Qr.renderOrder=998;Qr.visible=!1;Dt.add(Qr);var _n=new Mc,si=new tt,or=new G,Jo=new G;var es=(n,e,t)=>n+65536+(e+65536)*131072+(t+65536)*131072*131072,oi=(n,e)=>({x:n.x+e.x,y:n.y+e.y,z:n.z+e.z});function lt(n,e){let{x:t,y:i,z:r}=n;switch(e&3){case 1:return{x:-r,y:i,z:t};case 2:return{x:-t,y:i,z:-r};case 3:return{x:r,y:i,z:-t};default:return{x:t,y:i,z:r}}}var Ui=(n,e)=>({rot:n.rot+e.rot&3,off:oi(lt(e.off,n.rot),n.off)}),nd=n=>{let e=4-(n.rot&3)&3,t=lt(n.off,e);return{rot:e,off:{x:-t.x,y:-t.y,z:-t.z}}},id=n=>n.slice(1).reduce((e,t)=>Ui(e,{off:t.pos,rot:t.rot}),{off:{x:0,y:0,z:0},rot:0}),Ni=n=>"#"+(n&16777215).toString(16).padStart(6,"0"),ar=n=>n<0?-Math.round(-n):Math.round(n),DE=Math.floor(Math.random()*4294967296).toString(36),rd=1,Cc=()=>`n${rd++}.${DE}`,Ic=()=>rd,Pc=n=>{rd=n};var gt=(n,e,t,i,r,s,a)=>({x0:n,y0:e,z0:t,x1:i,y1:r,z1:s,c:a}),jo=(n,e,t,i)=>e>=n.x0&&e<n.x1&&t>=n.y0&&t<n.y1&&i>=n.z0&&i<n.z1,$o=(n,e,t,i)=>({x0:n.x0+e,y0:n.y0+t,z0:n.z0+i,x1:n.x1+e,y1:n.y1+t,z1:n.z1+i,c:n.c});function UE(n,e,t){let i=Math.max(n.x0,e.x0),r=Math.max(n.y0,e.y0),s=Math.max(n.z0,e.z0),a=Math.min(n.x1,e.x1),o=Math.min(n.y1,e.y1),c=Math.min(n.z1,e.z1);if(i>=a||r>=o||s>=c){t.push(n);return}let l=n.c;n.x0<i&&t.push({...n,x1:i}),a<n.x1&&t.push({...n,x0:a}),n.y0<r&&t.push({x0:i,y0:n.y0,z0:n.z0,x1:a,y1:r,z1:n.z1,c:l}),o<n.y1&&t.push({x0:i,y0:o,z0:n.z0,x1:a,y1:n.y1,z1:n.z1,c:l}),n.z0<s&&t.push({x0:i,y0:r,z0:n.z0,x1:a,y1:o,z1:s,c:l}),c<n.z1&&t.push({x0:i,y0:r,z0:c,x1:a,y1:o,z1:n.z1,c:l})}function ts(n,e){let t=[];for(let i of n)UE(i,e,t);return t}function NE(n,e){for(let t=0;t<n.length;){let i=n[t];if(i.c!==e.c){t++;continue}let r=i.y0===e.y0&&i.y1===e.y1,s=i.z0===e.z0&&i.z1===e.z1,a=i.x0===e.x0&&i.x1===e.x1;if(r&&s&&(i.x1===e.x0||e.x1===i.x0))e.x0=Math.min(e.x0,i.x0),e.x1=Math.max(e.x1,i.x1);else if(a&&s&&(i.y1===e.y0||e.y1===i.y0))e.y0=Math.min(e.y0,i.y0),e.y1=Math.max(e.y1,i.y1);else if(a&&r&&(i.z1===e.z0||e.z1===i.z0))e.z0=Math.min(e.z0,i.z0),e.z1=Math.max(e.z1,i.z1);else{t++;continue}n.splice(t,1),t=0}n.push(e)}function sd(n,e,t){let i=ts(n,e);return NE(i,{...e,c:t}),i}function Ig(n,e,t,i,r){let s=-1;for(let u=0;u<n.length;u++)if(jo(n[u],e,t,i)){s=u;break}if(s===-1)return null;let a=n[s].c;if(a===r)return null;let o=(u,h)=>{let f=u.x0<h.x1&&h.x0<u.x1,p=u.y0<h.y1&&h.y0<u.y1,g=u.z0<h.z1&&h.z0<u.z1;return p&&g&&(u.x1===h.x0||h.x1===u.x0)||f&&g&&(u.y1===h.y0||h.y1===u.y0)||f&&p&&(u.z1===h.z0||h.z1===u.z0)},c=new Set([s]),l=[s];for(;l.length;){let u=n[l.pop()];for(let h=0;h<n.length;h++)!c.has(h)&&n[h].c===a&&o(u,n[h])&&(c.add(h),l.push(h))}return n.map((u,h)=>c.has(h)?{...u,c:r}:u)}function od(n,e){let t=[];for(let i of n){let r=Math.max(i.x0,e.x0),s=Math.max(i.y0,e.y0),a=Math.max(i.z0,e.z0),o=Math.min(i.x1,e.x1),c=Math.min(i.y1,e.y1),l=Math.min(i.z1,e.z1);r<o&&s<c&&a<l&&t.push({x0:r,y0:s,z0:a,x1:o,y1:c,z1:l,c:i.c})}return t}function Pg(n,e){for(let t of n){let i=(t.x1-t.x0)*(t.y1-t.y0)*(t.z1-t.z0);e.set(t.c,(e.get(t.c)||0)+i)}}function hn(n,e){for(let t of n)t.x0<e.min.x&&(e.min.x=t.x0),t.y0<e.min.y&&(e.min.y=t.y0),t.z0<e.min.z&&(e.min.z=t.z0),t.x1>e.max.x&&(e.max.x=t.x1),t.y1>e.max.y&&(e.max.y=t.y1),t.z1>e.max.z&&(e.max.z=t.z1)}function ai(n,e,t){let i=lt({x:n.x0,y:n.y0,z:n.z0},e),r=lt({x:n.x1-1,y:n.y1-1,z:n.z1-1},e);return{x0:Math.min(i.x,r.x)+t.x,y0:Math.min(i.y,r.y)+t.y,z0:Math.min(i.z,r.z)+t.z,x1:Math.max(i.x,r.x)+t.x+1,y1:Math.max(i.y,r.y)+t.y+1,z1:Math.max(i.z,r.z)+t.z+1,c:n.c}}var OE=16,dn=n=>Math.floor(n/OE);function Lg(n){if(!n.length)return()=>!1;let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let y of n)y.x0<e&&(e=y.x0),y.y0<t&&(t=y.y0),y.z0<i&&(i=y.z0),y.x1>r&&(r=y.x1),y.y1>s&&(s=y.y1),y.z1>a&&(a=y.z1);let o=dn(e),c=dn(t),l=dn(i),u=dn(r-1)-o+1,h=dn(s-1)-c+1,f=dn(a-1)-l+1,p=Array.from({length:u*h*f},()=>[]),g=(y,_,m)=>((y-o)*h+(_-c))*f+(m-l);for(let y of n)for(let _=dn(y.x0);_<=dn(y.x1-1);_++)for(let m=dn(y.y0);m<=dn(y.y1-1);m++)for(let w=dn(y.z0);w<=dn(y.z1-1);w++)p[g(_,m,w)].push(y);return(y,_,m)=>{let w=dn(y),v=dn(_),T=dn(m);if(w<o||v<c||T<l||w-o>=u||v-c>=h||T-l>=f)return!1;for(let I of p[g(w,v,T)])if(jo(I,y,_,m))return!0;return!1}}var Dg=(n,e,t,i)=>n.some(r=>jo(r,e,t,i));function ad(n,e,t,i,r){if(!n.length||!e.length)return!1;let s={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};hn(n,s);let a=s.min.x+t,o=s.min.y+i,c=s.min.z+r,l=s.max.x+t,u=s.max.y+i,h=s.max.z+r;for(let f of e)if(a<f.x1&&f.x0<l&&o<f.y1&&f.y0<u&&c<f.z1&&f.z0<h&&n.some(p=>p.x0+t<f.x1&&f.x0<p.x1+t&&p.y0+i<f.y1&&f.y0<p.y1+i&&p.z0+r<f.z1&&f.z0<p.z1+r))return!0;return!1}var kE=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],Og=3,Zo=2,cr=Og*Zo,Ug=.5,Ko=class{a=new Float32Array(4096);n=0;push3(e,t,i){if(this.n+3>this.a.length){let r=new Float32Array(this.a.length*2);r.set(this.a),this.a=r}this.a[this.n++]=e,this.a[this.n++]=t,this.a[this.n++]=i}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}};function Ng(n,e,t,i,r,s){let a=2*Zo+1;for(let o=0;o<t;o++){let c=o*r,l=0;for(let u=0;u<=Zo&&u<i;u++)l+=n[c+u*s];for(let u=0;u<i;u++){e[c+u*s]=l/a;let h=u+Zo+1,f=u-Zo;h<i&&(l+=n[c+h*s]),f>=0&&(l-=n[c+f*s])}}}function Lc(n,e,t){let i=new Ko,r=new Ko,s=new Ko,a=n.map(w=>[w.x0,w.y0,w.z0]),o=n.map(w=>[w.x1,w.y1,w.z1]),c=[0,1,2].map(()=>new Map),l=[0,1,2].map(()=>new Map),u=(w,v,T)=>{let I=w.get(v);I?I.push(T):w.set(v,[T])};for(let w=0;w<n.length;w++)for(let v=0;v<3;v++)u(c[v],a[w][v],w),u(l[v],o[w][v],w);let h=[],f=16,p=w=>Math.floor(w/f),g=[],y=[0,0,0],_=[0,0,0];if(t&&n.length){let w=[1/0,1/0,1/0],v=[-1/0,-1/0,-1/0];for(let T=0;T<n.length;T++)for(let I=0;I<3;I++)a[T][I]<w[I]&&(w[I]=a[T][I]),o[T][I]>v[I]&&(v[I]=o[T][I]);_=w.map(p),y=v.map((T,I)=>p(T-1)-_[I]+1),g=Array.from({length:y[0]*y[1]*y[2]},()=>[]);for(let T=0;T<n.length;T++)for(let I=p(a[T][0]);I<=p(o[T][0]-1);I++)for(let P=p(a[T][1]);P<=p(o[T][1]-1);P++)for(let U=p(a[T][2]);U<=p(o[T][2]-1);U++)g[((I-_[0])*y[1]+(P-_[1]))*y[2]+(U-_[2])].push(T)}for(let w=0;w<n.length;w++){let v=e(n[w].c),T=v.r,I=v.g,P=v.b,U=a[w],O=o[w];for(let S of kE){let{a:R,u:B,v:J}=S,ne=S.hi?O[R]:U[R],M=S.hi?ne:ne-1,D=[];for(let se of(S.hi?c:l)[R].get(ne)??h){let fe=Math.max(a[se][B],U[B]),pe=Math.min(o[se][B],O[B]),me=Math.max(a[se][J],U[J]),Me=Math.min(o[se][J],O[J]);fe<pe&&me<Me&&D.push([fe,me,pe,Me])}let k=[[U[B],U[J],O[B],O[J]]];for(let se of D){let fe=[];for(let pe of k){let me=Math.max(pe[0],se[0]),Me=Math.max(pe[1],se[1]),Ae=Math.min(pe[2],se[2]),Y=Math.min(pe[3],se[3]);if(me>=Ae||Me>=Y){fe.push(pe);continue}pe[0]<me&&fe.push([pe[0],pe[1],me,pe[3]]),Ae<pe[2]&&fe.push([Ae,pe[1],pe[2],pe[3]]),pe[1]<Me&&fe.push([me,pe[1],Ae,Me]),Y<pe[3]&&fe.push([me,Y,Ae,pe[3]])}if(k=fe,!k.length)break}let F=[0,0,0];F[R]=ne;let V=null,q=0,Q=0,N=0,W=()=>{q=U[B]-cr,Q=U[J]-cr;let se=O[B]-U[B]+2*cr+1;N=O[J]-U[J]+2*cr+1;let fe=new Float32Array(se*N),pe=p(M)-_[R],me=!1;if(pe>=0&&pe<y[R]){let Ae=[0,0,0];Ae[R]=pe;let Y=Math.min(p(q+se-1)-_[B],y[B]-1),ot=Math.min(p(Q+N-1)-_[J],y[J]-1);for(let ge=Math.max(p(q)-_[B],0);ge<=Y;ge++){Ae[B]=ge;for(let Se=Math.max(p(Q)-_[J],0);Se<=ot;Se++){Ae[J]=Se;for(let he of g[(Ae[0]*y[1]+Ae[1])*y[2]+Ae[2]]){if(a[he][R]>M||o[he][R]<=M)continue;let rt=Math.max(a[he][B],q),ze=Math.min(o[he][B],q+se),C=Math.max(a[he][J],Q),E=Math.min(o[he][J],Q+N);for(let j=rt;j<ze;j++)fe.fill(1,(j-q)*N+(C-Q),(j-q)*N+(E-Q));me=me||rt<ze&&C<E}}}}if(!me)return V=fe;let Me=new Float32Array(se*N);for(let Ae=0;Ae<Og;Ae++)Ng(fe,Me,se,N,N,1),Ng(Me,fe,N,se,1,N);return V=fe},H=(se,fe)=>{if(!t)return 1;let me=(V??W())[(se-q)*N+(fe-Q)];return Ug+(1-Ug)*(1-me)},ee=(se,fe,pe)=>{F[B]=se,F[J]=fe,i.push3(F[0],F[1],F[2]),r.push3(S.n[0],S.n[1],S.n[2]),s.push3(T*pe,I*pe,P*pe)},ce=(se,fe,pe,me)=>{let Me=H(se,fe),Ae=H(pe,fe),Y=H(pe,me),ot=H(se,me);ee(se,fe,Me),ee(pe,fe,Ae),ee(pe,me,Y),ee(se,fe,Me),ee(pe,me,Y),ee(se,me,ot)};for(let se of k){let[fe,pe,me,Me]=se;if(!t){ce(fe,pe,me,Me);continue}let Ae=fe+cr,Y=me-cr,ot=pe+cr,ge=Me-cr;if(Ae>=Y||ot>=ge){for(let Se=fe;Se<me;Se++)for(let he=pe;he<Me;he++)ce(Se,he,Se+1,he+1);continue}for(let Se=fe;Se<me;Se++){for(let he=pe;he<ot;he++)ce(Se,he,Se+1,he+1);for(let he=ge;he<Me;he++)ce(Se,he,Se+1,he+1)}for(let Se=ot;Se<ge;Se++){for(let he=fe;he<Ae;he++)ce(he,Se,he+1,Se+1);for(let he=Y;he<me;he++)ce(he,Se,he+1,Se+1)}ce(Ae,ot,Y,ge)}}}if(!i.length)return null;let m=new un;return m.setAttribute("position",new $t(i.trimmed(),3)),m.setAttribute("normal",new $t(r.trimmed(),3)),m.setAttribute("color",new $t(s.trimmed(),3)),m}var Dc=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],kg={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},Qo=()=>({type:"object",id:Cc(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),ns=(n="")=>({type:"scene",id:Cc(),name:n,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function lr(n){let e={id:Cc(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...e,boxes:n.boxes.map(t=>({...t}))}:{type:"scene",...e,children:n.children.map(lr)}}var Oi=n=>x.context.children.find(e=>e.id===n);function ci(n,e=x.root,t=[]){if(t.push(e),e===n)return t.slice();if(e.type==="scene")for(let i of e.children){let r=ci(n,i,t);if(r)return r}return t.pop(),null}function is(n,e=x.root){if(e.id===n)return e;if(e.type==="scene")for(let t of e.children){let i=is(n,t);if(i)return i}return null}function Ln(n){let e=ci(n);return e&&e.length>1?e[e.length-2]:null}function rs(n,e){return n===e?!0:n.type!=="scene"?!1:n.children.some(t=>rs(t,e))}var to=()=>id(x.path),no=n=>id(ci(n)||[x.root]),Kt=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),ur=n=>n.max.x<n.min.x;function ea(n,e,t,i){if(n.type==="object")for(let r of n.boxes)i.push(ai(r,t,e));else for(let r of n.children)ea(r,oi(e,lt(r.pos,t)),t+r.rot&3,i);return i}function dr(n,e,t,i){if(n.type==="object")hn(n.boxes.map(r=>ai(r,t,e)),i);else for(let r of n.children)dr(r,oi(e,lt(r.pos,t)),t+r.rot&3,i);return i}function cd(n,e,t){t.length=0;let i=Math.max(1,Math.ceil((e-n)/6));for(let r=0;r<=i;r++)t.push(n+(e-n)*r/i)}var ld=(n,e)=>Math.max(1,Math.ceil((e-n)/6))+1,Fg=n=>ld(n.x0,n.x1)*ld(n.y0,n.y1)*ld(n.z0,n.z1);function ss(n,e,t,i){if(Fg(n)<=1536){t.push(n),i.push(e);return}let r=n.x1-n.x0,s=n.y1-n.y0,a=n.z1-n.z0;if(r>=s&&r>=a){let o=n.x0+(r>>1);ss({...n,x1:o},e,t,i),ss({...n,x0:o},e,t,i)}else if(s>=a){let o=n.y0+(s>>1);ss({...n,y1:o},e,t,i),ss({...n,y0:o},e,t,i)}else{let o=n.z0+(a>>1);ss({...n,z1:o},e,t,i),ss({...n,z0:o},e,t,i)}}function zE(n,e,t,i){for(let r=0;r<n.length;r++){let s=n[r];if(s[0]<=e&&s[1]<=t&&s[2]<=i)return}for(let r=n.length-1;r>=0;r--){let s=n[r];e<=s[0]&&t<=s[1]&&i<=s[2]&&n.splice(r,1)}n.push([e,t,i])}function FE(n,e,t,i,r,s,a,o,c,l){let u=n.length,h=new Float64Array(u),f=new Float64Array(u),p=new Float64Array(u),g=new Float64Array(u),y=new Float64Array(u),_=new Float64Array(u),m=1/0,w=-1/0,v=1/0,T=-1/0,I=1/0,P=-1/0;for(let ne=0;ne<u;ne++){let M=n[ne];s.x>=0?(h[ne]=M.x0,f[ne]=M.x1):(h[ne]=M.x1,f[ne]=M.x0),s.y>=0?(p[ne]=M.y0,g[ne]=M.y1):(p[ne]=M.y1,g[ne]=M.y0),s.z>=0?(y[ne]=M.z0,_[ne]=M.z1):(y[ne]=M.z1,_[ne]=M.z0),M.x0<m&&(m=M.x0),M.x1>w&&(w=M.x1),M.y0<v&&(v=M.y0),M.y1>T&&(T=M.y1),M.z0<I&&(I=M.z0),M.z1>P&&(P=M.z1)}let U=s.x!==0?1/s.x:0,O=s.y!==0?1/s.y:0,S=s.z!==0?1/s.z:0,R=[],B=[],J=[];for(let ne=i;ne<r;ne++){let M=e[ne];if((s.x>0?w<=M.x0:s.x<0?m>=M.x1:w<=M.x0||m>=M.x1)||(s.y>0?T<=M.y0:s.y<0?v>=M.y1:T<=M.y0||v>=M.y1)||(s.z>0?P<=M.z0:s.z<0?I>=M.z1:P<=M.z0||I>=M.z1))continue;let D=t[ne];cd(M.x0,M.x1,R),cd(M.y0,M.y1,B),cd(M.z0,M.z1,J);for(let k of R)for(let F of B)for(let V of J){let q=1/0;if(U!==0&&(q=((s.x>0?D.x1:D.x0)-k)*U),O!==0){let W=((s.y>0?D.y1:D.y0)-F)*O;W<q&&(q=W)}if(S!==0){let W=((s.z>0?D.z1:D.z0)-V)*S;W<q&&(q=W)}let Q=1/0,N=!1;for(let W=0;W<u;W++){let H=-1/0,ee=1/0;if(U===0){if(k<=h[W]||k>=f[W])continue}else{let ce=(h[W]-k)*U,se=(f[W]-k)*U;ce>H&&(H=ce),se<ee&&(ee=se)}if(O===0){if(F<=p[W]||F>=g[W])continue}else{let ce=(p[W]-F)*O,se=(g[W]-F)*O;ce>H&&(H=ce),se<ee&&(ee=se)}if(S===0){if(V<=y[W]||V>=_[W])continue}else{let ce=(y[W]-V)*S,se=(_[W]-V)*S;ce>H&&(H=ce),se<ee&&(ee=se)}if(!(H>=ee)){if(H>q+.001)H<Q&&(Q=H);else if(ee>q+.001){N=!0;break}}}N||Q===1/0||zE(l,Math.floor((k+Q*s.x)*a),Math.floor((F+Q*s.y)*o),Math.floor((V+Q*s.z)*c))}}}function zg(n,e){let t=[0],i=0;for(;i<n.length;){let s=n[i][e];do i++;while(i<n.length&&n[i][e]===s);t.push(i)}if(t.length<=48)return t;let r=new Set;for(let s=0;s<48;s++)r.add(t[Math.floor(s*(t.length-1)/47)]);return[...r]}function BE(n,e,t,i,r){let s={x:1/0,y:1/0,z:1/0};if(!n.length||!e.length)return s;e.sort((f,p)=>f[0]-p[0]||f[1]-p[1]||f[2]-p[2]);let a=[];e:for(let f of e){for(let p of a)if(p[1]<=f[1]&&p[2]<=f[2])continue e;a.push(f)}let o=n.map(f=>[Math.min(f.x0*t,f.x1*t),Math.max(f.x0*t,f.x1*t),Math.min(f.y0*i,f.y1*i),Math.max(f.y0*i,f.y1*i),Math.min(f.z0*r,f.z1*r),Math.max(f.z0*r,f.z1*r)]),c=(f,p,g)=>{let y=0;for(let _ of o){let m=Math.min(_[1],f)-_[0];if(m<=0)continue;let w=Math.min(_[3],p)-_[2];if(w<=0)continue;let v=Math.min(_[5],g)-_[4];v>0&&(y+=m*w*v)}return y},l=a.slice().sort((f,p)=>p[0]-f[0]),u=-1,h={...s};for(let f of zg(l,0)){let p=f===0?1/0:l[f-1][0]-.01,g=l.slice(f).sort((_,m)=>m[2]-_[2]),y=new Array(g.length+1).fill(1/0);for(let _=g.length-1;_>=0;_--)y[_]=Math.min(y[_+1],g[_][1]);for(let _ of zg(g,2)){let m=_===0?1/0:g[_-1][2]-.01,w=y[_]===1/0?1/0:y[_]-.01,v=c(p,w,m);v>u&&(u=v,h.x=p,h.y=w,h.z=m)}}return h}function Bg(n,e,t,i,r,s){let a=[],o=[];for(let y of e)ss(y,y,a,o);let c=[],l=0,u=0;for(let y=0;y<a.length;y++)u+=Fg(a[y]),(u>=1536||y===a.length-1)&&(c.push([l,y+1]),l=y+1,u=0);let h=[];for(let y=0;y<n.length;y++)for(let _=0;_<t.length;_++)for(let m=0;m<c.length;m++)h.push([y,_,m]);let f=n.map(()=>[]),p=0,g=null;return{step(y){for(;p<h.length;){let[_,m,w]=h[p++],[v,T]=c[w];if(FE(n[_],a,o,v,T,t[m],i,r,s,f[_]),p<h.length&&y())return!1}return!0},cuts(){return g??=n.map((y,_)=>BE(y,f[_],i,r,s)),g}}}function Uc(n,e){si.x=(n-Mt.x)/Mt.w*2-1,si.y=-((e-Mt.y)/Mt.h)*2+1}var ud=()=>x.pickMeshes.length?(_n.setFromCamera(si,et),_n.intersectObjects(x.pickMeshes,!1)[0]??null):null;function dd(){let n=ud();return n?n.object.userData.childId??null:null}var Hg=new Jt(new G(0,1,0),0);function ta(n){return _n.setFromCamera(si,et),Hg.constant=-n,_n.ray.intersectPlane(Hg,or)?{x:Math.floor(or.x),y:n,z:Math.floor(or.z)}:null}var Wg=(n,e)=>({x:Math.floor(n.x-e.x*.5),y:Math.floor(n.y-e.y*.5),z:Math.floor(n.z-e.z*.5)}),HE=new G;function os(){let n=ud();if(!n)return null;let e=x.editXform.off,t=lt({x:n.point.x-e.x,y:n.point.y-e.y,z:n.point.z-e.z},-x.editXform.rot),i={x:0,y:1,z:0};if(n.face){let s=HE.copy(n.face.normal).transformDirection(n.object.matrixWorld);i=lt({x:s.x,y:s.y,z:s.z},-x.editXform.rot)}let r=Wg(t,i);return{cell:r,addCell:{x:r.x+Math.round(i.x),y:r.y+Math.round(i.y),z:r.z+Math.round(i.z)}}}function Xg(){let n=ud();return n?Wg(n.point,n.face?n.face.normal:{x:0,y:1,z:0}):ta(0)}function as(n){let e=ta(n+x.editXform.off.y);if(!e)return null;let t=lt({x:e.x-x.editXform.off.x,y:0,z:e.z-x.editXform.off.z},-x.editXform.rot);return{x:Math.round(t.x),y:n,z:Math.round(t.z)}}var Vg=(n,e)=>({x:n===0?e:0,y:n===1?e:0,z:n===2?e:0}),Gg=new Jt;function qg(n,e){let t=x.editXform.off,i=x.editXform.rot,r=lt(Vg(n,1),i),s=oi(lt(Vg(n,e),i),t);if(_n.setFromCamera(si,et),Gg.setComponents(r.x,r.y,r.z,-(r.x*s.x+r.y*s.y+r.z*s.z)),!_n.ray.intersectPlane(Gg,or))return null;let a=lt({x:or.x-t.x,y:or.y-t.y,z:or.z-t.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};return n===0?o.x=e:n===1?o.y=e:o.z=e,o}var ki=(n,e,t)=>{let i=lt({x:n,y:e,z:t},x.editXform.rot);return new G(i.x+x.editXform.off.x,i.y+x.editXform.off.y,i.z+x.editXform.off.z)};function hd(n=os()){return x.tool==="add"?n?n.addCell:as(0):n?n.cell:null}var VE=new Ge(10994876),GE=new Ge(6055805),WE=new Ge(13619151),na=null,Nc=[],fd=()=>{na=null};function cs(){li=null,x.liveMeas=null,hr()}function pd(){if(na)return na;let n=[],e;x.editObject?(n.push(...x.editObject.boxes),e=ki):(fr(x.root,{x:0,y:0,z:0},0,null,null,(o,c,l,u)=>{if(u)for(let h of o.boxes)n.push(ai(h,l,c))}),e=(o,c,l)=>new G(o,c,l));let t=Kt();hn(n,t);let i=n.length===0,r={x:t.min.x,y:t.min.y,z:t.min.z},s={x:t.max.x-1,y:t.max.y-1,z:t.max.z-1};return na={has:n.length>64?Lg(n):(o,c,l)=>Dg(n,o,c,l),mn:r,mx:s,toW:e,empty:i},na}function Yg(){let n=pd();if(n.empty)return null;let e=null;if(x.editObject){let t=os();e=t?{...t.cell}:as(0)}else e=Xg();return e?{x:Math.max(n.mn.x,Math.min(n.mx.x,e.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,e.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,e.z))}:null}function XE(n){let e=pd(),t=["x","y","z"],i=[];for(let r=0;r<3;r++){let s=t[r],a=t[(r+1)%3],o=t[(r+2)%3],c=e.mn[s],l=e.mx[s],u=[n.x,n.y,n.z],h=p=>(u[r]=p,e.has(u[0],u[1],u[2])),f=c;for(;f<=l;){let p=h(f),g=f;for(;g+1<=l&&h(g+1)===p;)g++;let y=_=>{let m={};return m[s]=_,m[a]=n[a]+.5,m[o]=n[o]+.5,e.toW(m.x,m.y,m.z)};i.push({a:y(f),b:y(g+1),mid:y((f+g+1)/2),len:g-f+1,filled:p}),f=g+1}}return i}function _d(n,e,t,i,r,s,a,o,c=!1){let l=i-n,u=r-e,h=s-t,f=(p,g,y,_,m,w,v,T)=>({a:a(p,g,y),b:a(_,m,w),mid:a((p+_)/2,(g+m)/2,(y+w)/2),len:v,filled:!0,nolabel:!T,gray:c});return[f(n,e,t,i,e,t,l,l>=o),f(n,e,t,n,e,s,h,h>=o),f(n,e,t,n,r,t,u,u>=o),f(i,e,t,i,e,s,0,!1),f(n,e,s,i,e,s,0,!1),f(n,r,t,i,r,t,0,!1),f(n,r,t,n,r,s,0,!1),f(i,r,t,i,r,s,0,!1),f(n,r,s,i,r,s,0,!1),f(i,e,t,i,r,t,0,!1),f(n,e,s,n,r,s,0,!1),f(i,e,s,i,r,s,0,!1)]}var li=null;function Jg(){let n=Yg();n&&(li=li&&li.x===n.x&&li.y===n.y&&li.z===n.z?null:n,Oc())}function jg(){li&&(li=null,Oc())}function qE(n,e){let t=pd();return _d(Math.min(n.x,e.x),Math.min(n.y,e.y),Math.min(n.z,e.z),Math.max(n.x,e.x)+1,Math.max(n.y,e.y)+1,Math.max(n.z,e.z)+1,t.toW,1,!0)}function Oc(){let n=Yg();x.liveMeas=n?li?qE(li,n):XE(n):null,hr()}function hr(){let n=document.getElementById("measure");n.innerHTML="",Nc=[];let e=[],t=[];if(x.liveMeas)for(let r of x.liveMeas){let s=r.gray?WE:r.filled?VE:GE;if(e.push(r.a.x,r.a.y,r.a.z,r.b.x,r.b.y,r.b.z),t.push(s.r,s.g,s.b,s.r,s.g,s.b),r.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(r.filled?"":" empty"),a.textContent=String(r.len),n.appendChild(a),Nc.push({el:a,w:r.mid})}Qr.geometry.dispose();let i=new un;i.setAttribute("position",new cn(e,3)),i.setAttribute("color",new cn(t,3)),Qr.geometry=i,Qr.visible=e.length>0}function $g(){if(Nc.length)for(let n of Nc){if(Jo.copy(n.w).project(et),Jo.z>1){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=(Jo.x*.5+.5)*Mt.w+"px",n.el.style.top=(-Jo.y*.5+.5)*Mt.h+"px"}}var md=new G(40,150,30).normalize();function YE(n){if(ur(n))return;let e=(n.min.x+n.max.x)/2,t=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,r=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,s=r+130;Mn.position.set(e+md.x*s,t+md.y*s,i+md.z*s),Mn.target.position.set(e,t,i),Mn.target.updateMatrixWorld();let a=Mn.shadow.camera;a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=Math.max(1,s-r-20),a.far=s+r+20,a.updateProjectionMatrix(),Mn.shadow.normalBias=4*r/Mn.shadow.mapSize.x}var Jn=[];function JE(){let n=new Set;for(let e of Jn){Dt.remove(e);let t=e.geometry;t&&!n.has(t)&&(t.dispose(),n.add(t))}Jn=[];for(let e of xd)e.dispose();xd=[],oo=[],mr=null,pr.vox=-1,kc=[],wd(),ri.clear(),so&&(cancelAnimationFrame(so),so=0),En=null}var kc=[],En=null,so=0,io=null;function wd(){io&&(ri.remove(io),io.geometry.dispose(),io.material.dispose(),io=null)}function gd(n,e,{tier:t="opaque",childId:i}={}){if(!n.length)return null;let r=t!=="opaque",s=Lc(n,e,!r);if(!s)return null;let a=new Ct(s,t==="temp"?td:ed);if(a.castShadow=!0,a.receiveShadow=!0,Dt.add(a),Jn.push(a),r){a.renderOrder=2;let o=new Ct(s,Cg);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,Dt.add(o),Jn.push(o)}return i!=null&&(a.userData.childId=i,x.pickMeshes.push(a),(x.childMeshes[i]||(x.childMeshes[i]=[])).push(a)),a}var oo=[],xd=[],vd=[],pr={q:-1,b:-1,vox:-1},jE=6707534;function Zg(n){let e=Lc(n,eo,!0);if(!e)return;let t=[new Jt(new G(-1,0,0),1e9),new Jt(new G(0,-1,0),1e9),new Jt(new G(0,0,-1),1e9)],i=new sr({vertexColors:!0,side:pn,clippingPlanes:t,clipShadows:!0}),r=new Ct(e,i);r.castShadow=r.receiveShadow=!0,Dt.add(r),Jn.push(r);let s=new sr({color:jE,side:jt,clippingPlanes:t}),a=new Ct(e,s);Dt.add(a),Jn.push(a),xd.push(i,s);let o=Kt();hn(n,o),oo.push({boxes:n,aabb:o,planes:t})}var $E=8,Kg=6,_r=[-90,-60,-30,0,30,60,90],ro=Math.PI/180,ZE=5,mr=null;function KE(n,e){let t=n<=1?1:-1,i=n===0||n===3?1:-1,r=e>=3?1:-1,s=(c,l)=>{let u=Math.cos(l*ro);return{x:u*Math.sin(c*ro),y:Math.sin(l*ro),z:u*Math.cos(c*ro)}},a=[s(n*90,_r[e]),s(n*90,_r[e+1]),s(n*90+90,_r[e]),s(n*90+90,_r[e+1]),s(n*90+45,(_r[e]+_r[e+1])/2)],o=vd;x.editObject&&(o=o.concat(x.editObject.boxes.map(c=>ai(c,x.editXform.rot,x.editXform.off)))),mr={job:Bg(oo.map(c=>c.boxes),o,a,t,r,i),sgx:t,sgy:r,sgz:i}}function e0(){if(!oo.length){mr=null;return}let n=(Qe.azim/ro%360+360)%360,e=Qe.elev/ro,{q:t,b:i}=pr,r=t*90+45;if((t<0||Math.abs(((n-r)%360+540)%360-180)>45+$E)&&(t=Math.min(3,Math.floor(n/90))),(i<0||e<_r[i]-Kg||e>_r[i+1]+Kg)&&(i=Math.max(0,Math.min(5,Math.floor((e+90)/30)))),(t!==pr.q||i!==pr.b||x.voxVer!==pr.vox)&&(pr.q=t,pr.b=i,pr.vox=x.voxVer,KE(t,i)),!mr)return;let s=performance.now();if(!mr.job.step(()=>performance.now()-s>ZE)){ii();return}let{sgx:a,sgy:o,sgz:c}=mr,l=mr.job.cuts();mr=null;for(let u=0;u<oo.length;u++){let h=oo[u],f=l[u],p=(g,y,_,m)=>Math.min(m,(g>0?_:-y)+4);h.planes[0].normal.set(-a,0,0),h.planes[0].constant=p(a,h.aabb.min.x,h.aabb.max.x,f.x),h.planes[1].normal.set(0,-o,0),h.planes[1].constant=p(o,h.aabb.min.y,h.aabb.max.y,f.y),h.planes[2].normal.set(0,0,-c),h.planes[2].constant=p(c,h.aabb.min.z,h.aabb.max.z,f.z)}ii()}function fr(n,e,t,i,r,s){if(n===x.editObject||n.vis==="hidden")return;let a=r??(n.vis==="deemphasized"?n.id:null);if(n.type==="object")s(n,e,t,i,a);else for(let o of n.children)fr(o,oi(e,lt(o.pos,t)),t+o.rot&3,n===x.context?o.id:i,a,s)}var yd=(n,e)=>{let t=n.get(e);return t||n.set(e,t=[]),t},Qg=(n,e,t,i)=>{for(let r of n.boxes)i.push(ai(r,t,e));return i};function t0(){let{off:n,rot:e}=x.editXform;if(ri.position.set(n.x,n.y,n.z),ri.rotation.set(0,-e*Math.PI/2,0),ri.updateMatrixWorld(!0),En){ri.remove(En),En.geometry.dispose();let s=Jn.indexOf(En);s>=0&&Jn.splice(s,1)}let t=x.sel3d,i=t&&t.lifted?x.editObject.boxes.concat(t.boxes):x.editObject.boxes,r=Lc(i,eo,!0);En=r?new Ct(r,ed):null,En&&(En.castShadow=En.receiveShadow=!0,ri.add(En),Jn.push(En)),x.pickMeshes=En?[En,...kc]:[...kc],t?QE(t.region):wd()}function QE(n){wd();let e=new ni(n.x1-n.x0,n.y1-n.y0,n.z1-n.z0),t=new rr(new Jr(e),new Pi({color:16766073,depthTest:!1}));e.dispose(),t.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2),t.renderOrder=1e3,ri.add(t),io=t}function gr(){so||(so=requestAnimationFrame(()=>{so=0,t0(),ii()}))}function zc(){x.voxVer++,fd(),gr()}function Md(n,e){x.editObject.boxes=sd(x.editObject.boxes,n,e),zc()}function ia(n){x.editObject.boxes=ts(x.editObject.boxes,n),zc()}function Fc(n){let e=x.editObject.boxes;for(let t of n)e=sd(e,t,t.c);x.editObject.boxes=e,zc()}function n0(n,e){let t=Ig(x.editObject.boxes,n.x,n.y,n.z,e);return t?(x.editObject.boxes=t,zc(),!0):!1}function i0(){if(!Jn.length)return null;_n.setFromCamera(si,et);let n=_n.intersectObjects(Jn,!1)[0];if(!n)return null;let e=_n.ray.direction,t=Math.floor(n.point.x+e.x*.5),i=Math.floor(n.point.y+e.y*.5),r=Math.floor(n.point.z+e.z*.5),s=(o,c,l)=>{let u=lt({x:t-c.x,y:i-c.y,z:r-c.z},-l);for(let h of o)if(jo(h,u.x,u.y,u.z))return h.c;return null};if(x.editObject){let o=s(x.editObject.boxes,x.editXform.off,x.editXform.rot);if(o!=null)return o}let a=null;return fr(x.root,{x:0,y:0,z:0},0,null,null,(o,c,l)=>{a==null&&(a=s(o.boxes,c,l))}),a}var bd=new Set;function yr(n){for(let e of bd)if(n.has(e)!==x.selection.has(e)){Ut();return}r0()}function Ut(){JE(),x.pickMeshes=[],x.childMeshes={},x.childBox={},bd.clear(),x.voxVer++,fd();let n={x:0,y:0,z:0},e=Kt();if(x.editObject){x.editXform=Ui(to(),{off:x.editObject.pos,rot:x.editObject.rot});let t=[],i=new Map;fr(x.root,n,0,null,null,(s,a,o,c,l)=>Qg(s,a,o,l?yd(i,l):t)),hn(t,e);let r=gd(t,eo,{tier:"temp"});kc=r?[r]:[];for(let s of i.values())hn(s,e),Zg(s);vd=t,t0(),dr(x.editObject,x.editXform.off,x.editXform.rot,e)}else{let t=new Map,i=new Map,r=[],s=[];fr(x.root,n,0,null,null,(a,o,c,l,u)=>{let h=Qg(a,o,c,[]);hn(h,e);let f=u;l&&(f&&(bd.add(l),x.selection.has(l)&&(f=null)),hn(h,x.childBox[l]||(x.childBox[l]=Kt()))),f?yd(i,f).push(...h):(s.push(...h),l?yd(t,l).push(...h):r.push(...h))}),gd(r,eo,{tier:"temp"});for(let[a,o]of t)gd(o,eo,{childId:a});for(let a of i.values())Zg(a);vd=s}x.sceneBox=e,YE(e),r0(),ii()}function eT(n,e,t){let i=new ni(e.x-n.x,e.y-n.y,e.z-n.z),r=new rr(new Jr(i),new Pi({color:t,depthTest:!1}));return r.position.set((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),r.renderOrder=999,i.dispose(),r}function r0(){for(let n of Di.children)n.geometry?.dispose?.();if(Di.clear(),Di.position.set(0,0,0),!x.editObject)for(let n of x.selection){let e=x.childBox[n];e&&!ur(e)&&Di.add(eT(e.min,e.max,15787730))}}function ft(n,e={},...t){let i=document.createElement(n);return Object.assign(i,e),t.length&&i.append(...t),i}var ra=new G,Sd=new G,Ed=new G,s0=new G,tT=new G(0,1,0);function o0(n,e){let t=(et.top-et.bottom)/Mt.h;et.getWorldDirection(Sd),Ed.crossVectors(Sd,tT).normalize(),s0.crossVectors(Ed,Sd).normalize(),st.target.addScaledVector(Ed,-n*t),st.target.addScaledVector(s0,e*t)}function a0(n,e){st.azim-=n*.012,st.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,st.elev+e*.012))}function c0(n){ur(n)||(st.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),st.zoom=Math.max(8,Math.min(Ac,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function zi(){let n=Kt();if(x.editObject){if(dr(x.editObject,x.editXform.off,x.editXform.rot,n),ur(n)){let e=x.editXform.off;st.target.set(e.x,e.y+6,e.z),st.zoom=41;return}}else for(let e in x.childBox){let t=x.childBox[e];n.min.x=Math.min(n.min.x,t.min.x),n.min.y=Math.min(n.min.y,t.min.y),n.min.z=Math.min(n.min.z,t.min.z),n.max.x=Math.max(n.max.x,t.max.x),n.max.y=Math.max(n.max.y,t.max.y),n.max.z=Math.max(n.max.z,t.max.z)}if(ur(n)){st.target.set(0,1,0),st.zoom=23;return}c0(n)}function l0(n){if(n===x.root){zi();return}let e=no(n);c0(dr(n,e.off,e.rot,Kt()))}function u0(){Qe.azim+=(st.azim-Qe.azim)*.22,Qe.elev+=(st.elev-Qe.elev)*.22,Qe.zoom+=(st.zoom-Qe.zoom)*.25,Qe.target.lerp(st.target,.25);let n=Math.cos(Qe.elev),e=Math.sin(Qe.elev);ra.set(n*Math.sin(Qe.azim),e,n*Math.cos(Qe.azim)),et.position.copy(Qe.target).addScaledVector(ra,Eg);let t=pg.clamp((Math.abs(Qe.elev)-1.45)/(Math.PI/2-1.45),0,1);Rc.set(-Math.sin(Qe.azim),0,-Math.cos(Qe.azim)),Qe.elev<0&&Rc.negate(),Qu.set(0,1,0).lerp(Rc,t),et.up.copy(Qu.normalize()),et.lookAt(Qe.target);let i=Mt.w/Mt.h,r=Qe.zoom,s=r*i;et.left=-s/2,et.right=s/2,et.top=r/2,et.bottom=-r/2;let a=et.position,o=1/0,c=-1/0,l=(g,y,_)=>{let m=(a.x-g)*ra.x+(a.y-y)*ra.y+(a.z-_)*ra.z;m<o&&(o=m),m>c&&(c=m)},u=x.sceneBox;if(u&&!ur(u))for(let g of[u.min.x,u.max.x])for(let y of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z])l(g,y,_);let h=Qe.target.x,f=Qe.target.z,p=4e3;for(let g of[-p,p])for(let y of[-p,p])l(h+g,0,f+y);o>c&&(o=.1,c=4e3),et.near=o-10,et.far=c+10,et.updateProjectionMatrix(),Kr.position.set(Qe.target.x,-.1,Qe.target.z),Ag()}var nT={0:["y","z"],1:["x","z"],2:["x","y"]};function iT(n){let e=[];for(let t of n)for(let i=t.x0;i<t.x1;i++)for(let r=t.y0;r<t.y1;r++)for(let s=t.z0;s<t.z1;s++)e.push({x:i,y:r,z:s,c:t.c});return e}function rT(n,e,t,i,r){let s=(t%360+360)%360;if(s>180&&(s-=360),s===0)return;let a=Math.round(s/90),o=(s-a*90)*Math.PI/180,c=(a%4+4)%4,l=Math.tan(o/2),u=Math.sin(o),[h,f]=nT[e];for(let p of n){let g=p[h]-i,y=p[f]-r;for(let _=0;_<c;_++){let m=-y,w=g;g=m,y=w}o&&(g-=Math.round(y*l),y+=Math.round(g*u),g-=Math.round(y*l)),p[h]=i+g,p[f]=r+y}}function sT(n){let e=new Map;for(let o of n)e.set(es(o.x,o.y,o.z),o.c);let t=(o,c,l,u)=>e.get(es(o,c,l))===u,i=(o,c,l,u,h)=>{for(let f=o;f<c;f++)if(!t(f,l,u,h))return!1;return!0},r=(o,c,l,u,h,f)=>{for(let p=l;p<u;p++)if(!i(o,c,h,p,f))return!1;return!0},s=n.slice().sort((o,c)=>o.y-c.y||o.z-c.z||o.x-c.x),a=[];for(let o of s){let c=o.x,l=o.y,u=o.z,h=o.c;if(!e.has(es(c,l,u)))continue;let f=c+1;for(;t(f,l,u,h);)f++;let p=u+1;for(;i(c,f,l,p,h);)p++;let g=l+1;for(;r(c,f,u,p,g,h);)g++;for(let y=l;y<g;y++)for(let _=u;_<p;_++)for(let m=c;m<f;m++)e.delete(es(m,y,_));a.push({x0:c,y0:l,z0:u,x1:f,y1:g,z1:p,c:h})}return a}function d0(n,e,t,i,r,s){let a=iT(n);rT(a,t,e,Math.round(i),Math.round(r));for(let o of a){let c=s(o.x,o.y,o.z);o.x=c.x,o.y=c.y,o.z=c.z}return sT(a)}var Td=null,h0=[],f0=[],ao=()=>Td;function p0(n){h0=n,n.length&&(Td="node")}var Bc=()=>h0;function _0(n){f0=n,n.length&&(Td="vox")}var Hc=()=>f0;var oT=200,ui=[],Fi=-1,Vc=!1,m0=n=>({rootJSON:n,uid:Ic(),pathIds:x.path.map(e=>e.id),selection:[...x.selection],editId:x.editObject?x.editObject.id:null,collapsed:[...x.collapsed]});function g0(n){if(Vc)return;let e=m0(n),t=ui[Fi];t&&t.rootJSON===e.rootJSON||(ui.length=Fi+1,ui.push(e),ui.length>oT&&ui.shift(),Fi=ui.length-1)}function y0(n){Vc||Fi<0||(ui[Fi]=m0(n))}function x0(n){Vc=!0,Pc(n.uid),x.root=Gc(JSON.parse(n.rootJSON)),x.path=[];let e=x.root;for(let t of n.pathIds){let i=e.id===t?e:e.type==="scene"?e.children.find(r=>r.id===t):null;if(!i)break;e=i,x.path.push(e)}x.path.length||(x.path=[x.root]),x.editObject=n.editId?is(n.editId):null,x.selection=new Set(n.selection.filter(t=>x.context.children.some(i=>i.id===t))),x.collapsed=new Set(n.collapsed),x.drag=null,x.sel3d=null,x.painting=!1,x.lastVox=null,Ut(),it(),yt(),Vc=!1}function v0(){di(),Fi>0&&x0(ui[--Fi])}function Ad(){di(),Fi<ui.length-1&&x0(ui[++Fi])}var d;function kd(n){d=n}var xt=new Array(128).fill(void 0);xt.push(void 0,null,!0,!1);function ae(n){return xt[n]}var Re=0,Wc=null;function lo(){return(Wc===null||Wc.byteLength===0)&&(Wc=new Uint8Array(d.memory.buffer)),Wc}var aT=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder,Xc=new aT("utf-8"),cT=typeof Xc.encodeInto=="function"?function(n,e){return Xc.encodeInto(n,e)}:function(n,e){let t=Xc.encode(n);return e.set(t),{read:n.length,written:t.length}};function $e(n,e,t){if(t===void 0){let o=Xc.encode(n),c=e(o.length,1)>>>0;return lo().subarray(c,c+o.length).set(o),Re=o.length,c}let i=n.length,r=e(i,1)>>>0,s=lo(),a=0;for(;a<i;a++){let o=n.charCodeAt(a);if(o>127)break;s[r+a]=o}if(a!==i){a!==0&&(n=n.slice(a)),r=t(r,i,i=a+n.length*3,1)>>>0;let o=lo().subarray(r+a,r+i),c=cT(n,o);a+=c.written,r=t(r,i,a,1)>>>0}return Re=a,r}var co=null;function b(){return(co===null||co.buffer.detached===!0||co.buffer.detached===void 0&&co.buffer!==d.memory.buffer)&&(co=new DataView(d.memory.buffer)),co}var sa=xt.length;function Z(n){sa===xt.length&&xt.push(xt.length+1);let e=sa;return sa=xt[e],xt[e]=n,e}function gn(n,e){try{return n.apply(this,e)}catch(t){d.__wbindgen_exn_store(Z(t))}}var lT=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder,R0=new lT("utf-8",{ignoreBOM:!0,fatal:!0});R0.decode();function St(n,e){return n=n>>>0,R0.decode(lo().subarray(n,n+e))}function uT(n){n<132||(xt[n]=sa,sa=n)}function L(n){let e=ae(n);return uT(n),e}function Qt(n){return n==null}var b0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>{d.__wbindgen_export_4.get(n.dtor)(n.a,n.b)});function C0(n,e,t,i){let r={a:n,b:e,cnt:1,dtor:t},s=(...a)=>{r.cnt++;let o=r.a;r.a=0;try{return i(o,r.b,...a)}finally{--r.cnt===0?(d.__wbindgen_export_4.get(r.dtor)(o,r.b),b0.unregister(r)):r.a=o}};return s.original=r,b0.register(s,r,r),s}function Od(n){let e=typeof n;if(e=="number"||e=="boolean"||n==null)return`${n}`;if(e=="string")return`"${n}"`;if(e=="symbol"){let r=n.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){let r=n.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(n)){let r=n.length,s="[";r>0&&(s+=Od(n[0]));for(let a=1;a<r;a++)s+=", "+Od(n[a]);return s+="]",s}let t=/\[object ([^\]]+)\]/.exec(toString.call(n)),i;if(t&&t.length>1)i=t[1];else return toString.call(n);if(i=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:i}function uo(n,e){if(!(n instanceof e))throw new Error(`expected instance of ${e.name}`)}var Vt=128;function mn(n){if(Vt==1)throw new Error("out of js stack");return xt[--Vt]=n,Vt}function xr(n,e){let t=e(n.length*1,1)>>>0;return lo().set(n,t/1),Re=n.length,t}function vr(n,e){return n=n>>>0,lo().subarray(n/1,n/1+e)}function Dn(n,e){n=n>>>0;let t=b(),i=[];for(let r=n;r<n+4*e;r+=4)i.push(L(t.getUint32(r,!0)));return i}function zd(){d.run()}function Fd(n){try{let r=d.__wbindgen_add_to_stack_pointer(-16),s=xr(n,d.__wbindgen_malloc),a=Re;d.decodeFrontiers(r,s,a);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}function po(){d.callPendingEvents()}function Bd(){let n,e;try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.LORO_VERSION(r);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);return n=t,e=i,St(t,i)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(n,e,1)}}function Hd(n,e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.redactJsonUpdates(s,Z(n),Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}function Tn(n,e){let t=e(n.length*4,4)>>>0,i=b();for(let r=0;r<n.length;r++)i.setUint32(t+4*r,Z(n[r]),!0);return Re=n.length,t}function Vd(n){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=Tn(n,d.__wbindgen_malloc),c=Re;d.encodeFrontiers(a,o,c);var e=b().getInt32(a+4*0,!0),t=b().getInt32(a+4*1,!0),i=b().getInt32(a+4*2,!0),r=b().getInt32(a+4*3,!0);if(r)throw L(i);var s=vr(e,t).slice();return d.__wbindgen_free(e,t*1,1),s}finally{d.__wbindgen_add_to_stack_pointer(16)}}function Gd(n,e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=xr(n,d.__wbindgen_malloc),o=Re;d.decodeImportBlobMeta(s,a,o,e);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}function Wd(){d.setDebug()}function dT(n,e,t){d._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h03abcb20aecec54f(n,e,Z(t))}function hT(n,e){d._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h03e188dc81fd4288(n,e)}var w0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_awarenesswasm_free(n>>>0,1)),ho=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,w0.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_awarenesswasm_free(e,0)}getAllStates(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_getAllStates(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getTimestamp(e){try{let a=d.__wbindgen_add_to_stack_pointer(-32);d.awarenesswasm_getTimestamp(a,this.__wbg_ptr,Z(e));var t=b().getInt32(a+4*0,!0),i=b().getFloat64(a+8*1,!0),r=b().getInt32(a+4*4,!0),s=b().getInt32(a+4*5,!0);if(s)throw L(r);return t===0?void 0:i}finally{d.__wbindgen_add_to_stack_pointer(32)}}setLocalState(e){d.awarenesswasm_setLocalState(this.__wbg_ptr,Z(e))}removeOutdated(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_removeOutdated(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}constructor(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_new(a,Z(e),t);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return this.__wbg_ptr=i>>>0,w0.register(this,this.__wbg_ptr,this),this}finally{d.__wbindgen_add_to_stack_pointer(16)}}peer(){let e=d.awarenesswasm_peer(this.__wbg_ptr);return L(e)}apply(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=xr(e,d.__wbindgen_malloc),o=Re;d.awarenesswasm_apply(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}peers(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_peers(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}encode(e){try{let o=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_encode(o,this.__wbg_ptr,Z(e));var t=b().getInt32(o+4*0,!0),i=b().getInt32(o+4*1,!0),r=b().getInt32(o+4*2,!0),s=b().getInt32(o+4*3,!0);if(s)throw L(r);var a=vr(t,i).slice();return d.__wbindgen_free(t,i*1,1),a}finally{d.__wbindgen_add_to_stack_pointer(16)}}length(){return d.awarenesswasm_length(this.__wbg_ptr)}isEmpty(){return d.awarenesswasm_isEmpty(this.__wbg_ptr)!==0}getState(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_getState(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}encodeAll(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.awarenesswasm_encodeAll(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=vr(e,t).slice();return d.__wbindgen_free(e,t*1,1),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}},M0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_changemodifier_free(n>>>0,1)),fo=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,M0.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,M0.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_changemodifier_free(e,0)}setMessage(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re,r=d.changemodifier_setMessage(this.__wbg_ptr,t,i);return n.__wrap(r)}setTimestamp(e){let t=d.changemodifier_setTimestamp(this.__wbg_ptr,e);return n.__wrap(t)}},S0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_cursor_free(n>>>0,1)),hi=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,S0.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,S0.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_cursor_free(e,0)}containerId(){let e=d.cursor_containerId(this.__wbg_ptr);return L(e)}pos(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.cursor_pos(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}kind(){let e=d.cursor_kind(this.__wbg_ptr);return L(e)}side(){let e=d.cursor_side(this.__wbg_ptr);return L(e)}static decode(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=xr(e,d.__wbindgen_malloc),o=Re;d.cursor_decode(s,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}encode(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.cursor_encode(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=vr(e,t).slice();return d.__wbindgen_free(e,t*1,1),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}},E0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_ephemeralstorewasm_free(n>>>0,1)),ls=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,E0.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_ephemeralstorewasm_free(e,0)}getAllStates(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.ephemeralstorewasm_getAllStates(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}removeOutdated(){d.ephemeralstorewasm_removeOutdated(this.__wbg_ptr)}subscribeLocalUpdates(e){let t=d.ephemeralstorewasm_subscribeLocalUpdates(this.__wbg_ptr,Z(e));return L(t)}get(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re,r=d.ephemeralstorewasm_get(this.__wbg_ptr,t,i);return L(r)}constructor(e){let t=d.ephemeralstorewasm_new(e);return this.__wbg_ptr=t>>>0,E0.register(this,this.__wbg_ptr,this),this}set(e,t){let i=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),r=Re;d.ephemeralstorewasm_set(this.__wbg_ptr,i,r,Z(t))}keys(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.ephemeralstorewasm_keys(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}apply(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16),s=xr(e,d.__wbindgen_malloc),a=Re;d.ephemeralstorewasm_apply(r,this.__wbg_ptr,s,a);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}delete(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re;d.ephemeralstorewasm_delete(this.__wbg_ptr,t,i)}encode(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.ephemeralstorewasm_encode(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=vr(t,i).slice();return d.__wbindgen_free(t,i*1,1),r}finally{d.__wbindgen_add_to_stack_pointer(16)}}isEmpty(){return d.ephemeralstorewasm_isEmpty(this.__wbg_ptr)!==0}encodeAll(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.ephemeralstorewasm_encodeAll(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=vr(e,t).slice();return d.__wbindgen_free(e,t*1,1),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}subscribe(e){let t=d.ephemeralstorewasm_subscribe(this.__wbg_ptr,Z(e));return L(t)}},Rd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_lorocounter_free(n>>>0,1)),br=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Rd.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Rd.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_lorocounter_free(e,0)}isAttached(){return d.lorocounter_isAttached(this.__wbg_ptr)!==0}getAttached(){let e=d.lorocounter_getAttached(this.__wbg_ptr);return L(e)}getShallowValue(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorocounter_getShallowValue(r,this.__wbg_ptr);var e=b().getFloat64(r+8*0,!0),t=b().getInt32(r+4*2,!0),i=b().getInt32(r+4*3,!0);if(i)throw L(t);return e}finally{d.__wbindgen_add_to_stack_pointer(16)}}get id(){let e=d.lorocounter_id(this.__wbg_ptr);return L(e)}constructor(){let e=d.lorocounter_new();return this.__wbg_ptr=e>>>0,Rd.register(this,this.__wbg_ptr,this),this}kind(){let e=d.lorocounter_kind(this.__wbg_ptr);return L(e)}parent(){let e=d.lorocounter_parent(this.__wbg_ptr);return L(e)}toJSON(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorocounter_getShallowValue(r,this.__wbg_ptr);var e=b().getFloat64(r+8*0,!0),t=b().getInt32(r+4*2,!0),i=b().getInt32(r+4*3,!0);if(i)throw L(t);return e}finally{d.__wbindgen_add_to_stack_pointer(16)}}decrement(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorocounter_decrement(r,this.__wbg_ptr,e);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}get value(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorocounter_getShallowValue(r,this.__wbg_ptr);var e=b().getFloat64(r+8*0,!0),t=b().getInt32(r+4*2,!0),i=b().getInt32(r+4*3,!0);if(i)throw L(t);return e}finally{d.__wbindgen_add_to_stack_pointer(16)}}increment(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorocounter_increment(r,this.__wbg_ptr,e);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}subscribe(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorocounter_subscribe(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}},Cd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_lorodoc_free(n>>>0,1)),$n=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Cd.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Cd.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_lorodoc_free(e,0)}applyDiff(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_applyDiff(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}isShallow(){return d.lorodoc_isShallow(this.__wbg_ptr)!==0}changeCount(){return d.lorodoc_changeCount(this.__wbg_ptr)>>>0}getByPath(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re,r=d.lorodoc_getByPath(this.__wbg_ptr,t,i);return L(r)}getCounter(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getCounter(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return br.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}isDetached(){return d.lorodoc_isDetached(this.__wbg_ptr)!==0}get peerIdStr(){let e=d.lorodoc_peerIdStr(this.__wbg_ptr);return L(e)}setPeerId(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_setPeerId(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getCursorPos(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);uo(e,hi),d.lorodoc_getCursorPos(s,this.__wbg_ptr,e.__wbg_ptr);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}hasContainer(e){return d.lorodoc_hasContainer(this.__wbg_ptr,Z(e))!==0}importBatch(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_importBatch(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}cmpFrontiers(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=Tn(e,d.__wbindgen_malloc),c=Re,l=Tn(t,d.__wbindgen_malloc),u=Re;d.lorodoc_cmpFrontiers(a,this.__wbg_ptr,o,c,l,u);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}debugHistory(){d.lorodoc_debugHistory(this.__wbg_ptr)}static fromSnapshot(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=xr(e,d.__wbindgen_malloc),o=Re;d.lorodoc_fromSnapshot(s,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getChangeAt(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getChangeAt(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}oplogVersion(){let e=d.lorodoc_oplogVersion(this.__wbg_ptr);return jn.__wrap(e)}getMovableList(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getMovableList(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Sr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}frontiersToVV(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=Tn(e,d.__wbindgen_malloc),o=Re;d.lorodoc_frontiersToVV(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return jn.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getAllChanges(){let e=d.lorodoc_getAllChanges(this.__wbg_ptr);return L(e)}oplogFrontiers(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_oplogFrontiers(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}vvToFrontiers(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);uo(e,jn),d.lorodoc_vvToFrontiers(s,this.__wbg_ptr,e.__wbg_ptr);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}shallowSinceVV(){let e=d.lorodoc_shallowSinceVV(this.__wbg_ptr);return jn.__wrap(e)}configTextStyle(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_configTextStyle(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getOpsInChange(e){try{let o=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getOpsInChange(o,this.__wbg_ptr,Z(e));var t=b().getInt32(o+4*0,!0),i=b().getInt32(o+4*1,!0),r=b().getInt32(o+4*2,!0),s=b().getInt32(o+4*3,!0);if(s)throw L(r);var a=Dn(t,i).slice();return d.__wbindgen_free(t,i*4,4),a}finally{d.__wbindgen_add_to_stack_pointer(16)}}getShallowValue(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getShallowValue(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}checkoutToLatest(){try{let i=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_checkoutToLatest(i,this.__wbg_ptr);var e=b().getInt32(i+4*0,!0),t=b().getInt32(i+4*1,!0);if(t)throw L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}cmpWithFrontiers(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=Tn(e,d.__wbindgen_malloc),o=Re;d.lorodoc_cmpWithFrontiers(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return t}finally{d.__wbindgen_add_to_stack_pointer(16)}}exportJsonInIdSpan(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_exportJsonInIdSpan(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}subscribeJsonpath(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),c=Re;d.lorodoc_subscribeJsonpath(a,this.__wbg_ptr,o,c,Z(t));var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}deleteRootContainer(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_deleteRootContainer(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}exportJsonUpdates(e,t,i){try{let o=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_exportJsonUpdates(o,this.__wbg_ptr,Z(e),Z(t),Qt(i)?16777215:i?1:0);var r=b().getInt32(o+4*0,!0),s=b().getInt32(o+4*1,!0),a=b().getInt32(o+4*2,!0);if(a)throw L(s);return L(r)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getContainerById(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getContainerById(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getPendingTxnLength(){return d.lorodoc_getPendingTxnLength(this.__wbg_ptr)>>>0}importJsonUpdates(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_importJsonUpdates(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}importUpdateBatch(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_importBatch(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}setDetachedEditing(e){d.lorodoc_setDetachedEditing(this.__wbg_ptr,e)}setRecordTimestamp(e){d.lorodoc_setRecordTimestamp(this.__wbg_ptr,e)}subscribePreCommit(e){let t=d.lorodoc_subscribePreCommit(this.__wbg_ptr,Z(e));return L(t)}findIdSpansBetween(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=Tn(e,d.__wbindgen_malloc),c=Re,l=Tn(t,d.__wbindgen_malloc),u=Re;d.lorodoc_findIdSpansBetween(a,this.__wbg_ptr,o,c,l,u);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getChangeAtLamport(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),c=Re;d.lorodoc_getChangeAtLamport(a,this.__wbg_ptr,o,c,t);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getPathToContainer(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getPathToContainer(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getChangedContainersIn(e,t){try{let c=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getChangedContainersIn(c,this.__wbg_ptr,Z(e),t);var i=b().getInt32(c+4*0,!0),r=b().getInt32(c+4*1,!0),s=b().getInt32(c+4*2,!0),a=b().getInt32(c+4*3,!0);if(a)throw L(s);var o=Dn(i,r).slice();return d.__wbindgen_free(i,r*4,4),o}finally{d.__wbindgen_add_to_stack_pointer(16)}}getDeepValueWithID(){let e=d.lorodoc_getDeepValueWithID(this.__wbg_ptr);return L(e)}setNextCommitOrigin(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re;d.lorodoc_setNextCommitOrigin(this.__wbg_ptr,t,i)}getUncommittedOpsAsJson(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getUncommittedOpsAsJson(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}setNextCommitMessage(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re;d.lorodoc_setNextCommitMessage(this.__wbg_ptr,t,i)}setNextCommitOptions(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_setNextCommitOptions(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}shallowSinceFrontiers(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_shallowSinceFrontiers(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}subscribeLocalUpdates(e){let t=d.lorodoc_subscribeLocalUpdates(this.__wbg_ptr,Z(e));return L(t)}travelChangeAncestors(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=Tn(e,d.__wbindgen_malloc),o=Re;d.lorodoc_travelChangeAncestors(s,this.__wbg_ptr,a,o,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}clearNextCommitOptions(){d.lorodoc_clearNextCommitOptions(this.__wbg_ptr)}configDefaultTextStyle(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_configDefaultTextStyle(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}setChangeMergeInterval(e){d.lorodoc_setChangeMergeInterval(this.__wbg_ptr,e)}setNextCommitTimestamp(e){d.lorodoc_setNextCommitTimestamp(this.__wbg_ptr,e)}setHideEmptyRootContainers(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_setHideEmptyRootContainers(r,this.__wbg_ptr,e);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}isDetachedEditingEnabled(){return d.lorodoc_isDetachedEditingEnabled(this.__wbg_ptr)!==0}subscribeFirstCommitFromPeer(e){let t=d.lorodoc_subscribeFirstCommitFromPeer(this.__wbg_ptr,Z(e));return L(t)}constructor(){let e=d.lorodoc_new();return this.__wbg_ptr=e>>>0,Cd.register(this,this.__wbg_ptr,this),this}diff(e,t,i){try{let o=d.__wbindgen_add_to_stack_pointer(-16),c=Tn(e,d.__wbindgen_malloc),l=Re,u=Tn(t,d.__wbindgen_malloc),h=Re;d.lorodoc_diff(o,this.__wbg_ptr,c,l,u,h,Qt(i)?16777215:i?1:0);var r=b().getInt32(o+4*0,!0),s=b().getInt32(o+4*1,!0),a=b().getInt32(o+4*2,!0);if(a)throw L(s);return L(r)}finally{d.__wbindgen_add_to_stack_pointer(16)}}fork(){let e=d.lorodoc_fork(this.__wbg_ptr);return n.__wrap(e)}attach(){d.lorodoc_attach(this.__wbg_ptr)}commit(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_commit(r,this.__wbg_ptr,Qt(e)?0:Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}detach(){d.lorodoc_detach(this.__wbg_ptr)}export(e){try{let o=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_export(o,this.__wbg_ptr,Z(e));var t=b().getInt32(o+4*0,!0),i=b().getInt32(o+4*1,!0),r=b().getInt32(o+4*2,!0),s=b().getInt32(o+4*3,!0);if(s)throw L(r);var a=vr(t,i).slice();return d.__wbindgen_free(t,i*1,1),a}finally{d.__wbindgen_add_to_stack_pointer(16)}}import(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=xr(e,d.__wbindgen_malloc),o=Re;d.lorodoc_import(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}forkAt(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=Tn(e,d.__wbindgen_malloc),o=Re;d.lorodoc_forkAt(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getMap(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getMap(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Mr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}opCount(){return d.lorodoc_opCount(this.__wbg_ptr)>>>0}get peerId(){let e=d.lorodoc_peerId(this.__wbg_ptr);return BigInt.asUintN(64,e)}toJSON(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_toJSON(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}version(){let e=d.lorodoc_version(this.__wbg_ptr);return jn.__wrap(e)}checkout(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16),s=Tn(e,d.__wbindgen_malloc),a=Re;d.lorodoc_checkout(r,this.__wbg_ptr,s,a);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getList(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getList(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return wr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}getText(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getText(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Er.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}getTree(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_getTree(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Tr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}frontiers(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorodoc_frontiers(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}JSONPath(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.lorodoc_JSONPath(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}revertTo(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16),s=Tn(e,d.__wbindgen_malloc),a=Re;d.lorodoc_revertTo(r,this.__wbg_ptr,s,a);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}subscribe(e){let t=d.lorodoc_subscribe(this.__wbg_ptr,Z(e));return L(t)}},Id=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_lorolist_free(n>>>0,1)),wr=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Id.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Id.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_lorolist_free(e,0)}isAttached(){return d.lorolist_isAttached(this.__wbg_ptr)!==0}getAttached(){let e=d.lorolist_getAttached(this.__wbg_ptr);return L(e)}pushContainer(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_pushContainer(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}insertContainer(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_insertContainer(a,this.__wbg_ptr,e,Z(t));var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getShallowValue(){let e=d.lorolist_getShallowValue(this.__wbg_ptr);return L(e)}get id(){let e=d.lorolist_id(this.__wbg_ptr);return L(e)}get(e){let t=d.lorolist_get(this.__wbg_ptr,e);return L(t)}constructor(){let e=d.lorolist_new();return this.__wbg_ptr=e>>>0,Id.register(this,this.__wbg_ptr,this),this}pop(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_pop(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}kind(){let e=d.lorolist_kind(this.__wbg_ptr);return L(e)}push(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_push(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}clear(){try{let i=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_clear(i,this.__wbg_ptr);var e=b().getInt32(i+4*0,!0),t=b().getInt32(i+4*1,!0);if(t)throw L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}delete(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_delete(s,this.__wbg_ptr,e,t);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}insert(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_insert(s,this.__wbg_ptr,e,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}get length(){return d.lorolist_length(this.__wbg_ptr)>>>0}parent(){let e=d.lorolist_parent(this.__wbg_ptr);return L(e)}getIdAt(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_getIdAt(s,this.__wbg_ptr,e);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}toJSON(){let e=d.lorolist_toJSON(this.__wbg_ptr);return L(e)}toArray(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_toArray(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}getCursor(e,t){let i=d.lorolist_getCursor(this.__wbg_ptr,e,Z(t));return i===0?void 0:hi.__wrap(i)}isDeleted(){return d.lorolist_isDeleted(this.__wbg_ptr)!==0}subscribe(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorolist_subscribe(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}},Pd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_loromap_free(n>>>0,1)),Mr=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Pd.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Pd.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_loromap_free(e,0)}isAttached(){return d.loromap_isAttached(this.__wbg_ptr)!==0}getAttached(){let e=d.loromap_getAttached(this.__wbg_ptr);return L(e)}getLastEditor(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re,r=d.loromap_getLastEditor(this.__wbg_ptr,t,i);return L(r)}setContainer(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),c=Re;d.loromap_setContainer(a,this.__wbg_ptr,o,c,Z(t));var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getShallowValue(){let e=d.loromap_getShallowValue(this.__wbg_ptr);return L(e)}ensureMergeableMap(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_ensureMergeableMap(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}ensureMergeableList(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_ensureMergeableList(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return wr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}ensureMergeableText(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_ensureMergeableText(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Er.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}ensureMergeableTree(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_ensureMergeableTree(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Tr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getOrCreateContainer(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),c=Re;d.loromap_getOrCreateContainer(a,this.__wbg_ptr,o,c,Z(t));var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}ensureMergeableCounter(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_ensureMergeableCounter(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return br.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}ensureMergeableMovableList(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_ensureMergeableMovableList(s,this.__wbg_ptr,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return Sr.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}get id(){let e=d.loromap_id(this.__wbg_ptr);return L(e)}get(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re,r=d.loromap_get(this.__wbg_ptr,t,i);return L(r)}constructor(){let e=d.loromap_new();return this.__wbg_ptr=e>>>0,Pd.register(this,this.__wbg_ptr,this),this}keys(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.loromap_keys(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}kind(){let e=d.loromap_kind(this.__wbg_ptr);return L(e)}get size(){return d.loromap_size(this.__wbg_ptr)>>>0}clear(){try{let i=d.__wbindgen_add_to_stack_pointer(-16);d.loromap_clear(i,this.__wbg_ptr);var e=b().getInt32(i+4*0,!0),t=b().getInt32(i+4*1,!0);if(t)throw L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}delete(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16),s=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),a=Re;d.loromap_delete(r,this.__wbg_ptr,s,a);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}set(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.loromap_set(s,this.__wbg_ptr,a,o,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}parent(){let e=d.loromap_parent(this.__wbg_ptr);return L(e)}values(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.loromap_values(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}entries(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.loromap_entries(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}toJSON(){let e=d.loromap_toJSON(this.__wbg_ptr);return L(e)}isDeleted(){return d.loromap_isDeleted(this.__wbg_ptr)!==0}subscribe(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromap_subscribe(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}},Ld=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_loromovablelist_free(n>>>0,1)),Sr=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Ld.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ld.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_loromovablelist_free(e,0)}isAttached(){return d.loromovablelist_isAttached(this.__wbg_ptr)!==0}getCreatorAt(e){let t=d.loromovablelist_getCreatorAt(this.__wbg_ptr,e);return L(t)}getAttached(){let e=d.loromovablelist_getAttached(this.__wbg_ptr);return L(e)}setContainer(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_setContainer(a,this.__wbg_ptr,e,Z(t));var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getLastMoverAt(e){let t=d.loromovablelist_getLastMoverAt(this.__wbg_ptr,e);return L(t)}pushContainer(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_pushContainer(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getLastEditorAt(e){let t=d.loromovablelist_getLastEditorAt(this.__wbg_ptr,e);return L(t)}insertContainer(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_insertContainer(a,this.__wbg_ptr,e,Z(t));var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getShallowValue(){let e=d.loromovablelist_getShallowValue(this.__wbg_ptr);return L(e)}get id(){let e=d.loromovablelist_id(this.__wbg_ptr);return L(e)}get(e){let t=d.loromovablelist_get(this.__wbg_ptr,e);return L(t)}move(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_move(s,this.__wbg_ptr,e,t);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}constructor(){let e=d.loromovablelist_new();return this.__wbg_ptr=e>>>0,Ld.register(this,this.__wbg_ptr,this),this}pop(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_pop(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}set(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_set(s,this.__wbg_ptr,e,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}kind(){let e=d.loromovablelist_kind(this.__wbg_ptr);return L(e)}push(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_push(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}clear(){try{let i=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_clear(i,this.__wbg_ptr);var e=b().getInt32(i+4*0,!0),t=b().getInt32(i+4*1,!0);if(t)throw L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}delete(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_delete(s,this.__wbg_ptr,e,t);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}insert(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_insert(s,this.__wbg_ptr,e,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}get length(){return d.loromovablelist_length(this.__wbg_ptr)>>>0}parent(){let e=d.loromovablelist_parent(this.__wbg_ptr);return L(e)}toJSON(){let e=d.loromovablelist_toJSON(this.__wbg_ptr);return L(e)}toArray(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_toArray(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}getCursor(e,t){let i=d.loromovablelist_getCursor(this.__wbg_ptr,e,Z(t));return i===0?void 0:hi.__wrap(i)}isDeleted(){return d.loromovablelist_isDeleted(this.__wbg_ptr)!==0}subscribe(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.loromovablelist_subscribe(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}},Dd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_lorotext_free(n>>>0,1)),Er=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Dd.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Dd.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_lorotext_free(e,0)}applyDelta(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_applyDelta(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}convertPos(e,t,i){let r=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),s=Re,a=$e(i,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re,c=d.lorotext_convertPos(this.__wbg_ptr,e,r,s,a,o);return L(c)}deleteUtf8(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_deleteUtf8(s,this.__wbg_ptr,e,t);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getEditorOf(e){let t=d.lorotext_getEditorOf(this.__wbg_ptr,e);return L(t)}insertUtf8(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.lorotext_insertUtf8(s,this.__wbg_ptr,e,a,o);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}isAttached(){return d.lorotext_isAttached(this.__wbg_ptr)!==0}sliceDelta(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_sliceDelta(a,this.__wbg_ptr,e,t);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getAttached(){let e=d.lorotext_getAttached(this.__wbg_ptr);return L(e)}updateByLine(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.lorotext_updateByLine(s,this.__wbg_ptr,a,o,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}sliceDeltaUtf8(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_sliceDeltaUtf8(a,this.__wbg_ptr,e,t);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getShallowValue(){let e,t;try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_getShallowValue(s,this.__wbg_ptr);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);return e=i,t=r,St(i,r)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(e,t,1)}}get id(){let e=d.lorotext_id(this.__wbg_ptr);return L(e)}constructor(){let e=d.lorotext_new();return this.__wbg_ptr=e>>>0,Dd.register(this,this.__wbg_ptr,this),this}iter(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_iter(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}kind(){let e=d.lorotext_kind(this.__wbg_ptr);return L(e)}mark(e,t,i){try{let a=d.__wbindgen_add_to_stack_pointer(-16),o=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),c=Re;d.lorotext_mark(a,this.__wbg_ptr,Z(e),o,c,Z(i));var r=b().getInt32(a+4*0,!0),s=b().getInt32(a+4*1,!0);if(s)throw L(r)}finally{d.__wbindgen_add_to_stack_pointer(16)}}push(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16),s=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),a=Re;d.lorotext_push(r,this.__wbg_ptr,s,a);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}slice(e,t){let i,r;try{let h=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_slice(h,this.__wbg_ptr,e,t);var s=b().getInt32(h+4*0,!0),a=b().getInt32(h+4*1,!0),o=b().getInt32(h+4*2,!0),c=b().getInt32(h+4*3,!0),l=s,u=a;if(c)throw l=0,u=0,L(o);return i=l,r=u,St(l,u)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(i,r,1)}}delete(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_delete(s,this.__wbg_ptr,e,t);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}insert(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.lorotext_insert(s,this.__wbg_ptr,e,a,o);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}get length(){return d.lorotext_length(this.__wbg_ptr)>>>0}parent(){let e=d.lorotext_parent(this.__wbg_ptr);return L(e)}splice(e,t,i){let r,s;try{let f=d.__wbindgen_add_to_stack_pointer(-16),p=$e(i,d.__wbindgen_malloc,d.__wbindgen_realloc),g=Re;d.lorotext_splice(f,this.__wbg_ptr,e,t,p,g);var a=b().getInt32(f+4*0,!0),o=b().getInt32(f+4*1,!0),c=b().getInt32(f+4*2,!0),l=b().getInt32(f+4*3,!0),u=a,h=o;if(l)throw u=0,h=0,L(c);return r=u,s=h,St(u,h)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(r,s,1)}}unmark(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.lorotext_unmark(s,this.__wbg_ptr,Z(e),a,o);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}update(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),o=Re;d.lorotext_update(s,this.__wbg_ptr,a,o,Z(t));var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16)}}charAt(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_charAt(s,this.__wbg_ptr,e);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return String.fromCodePoint(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}toJSON(){let e=d.lorotext_toJSON(this.__wbg_ptr);return L(e)}toDelta(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_toDelta(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getCursor(e,t){let i=d.lorotext_getCursor(this.__wbg_ptr,e,Z(t));return i===0?void 0:hi.__wrap(i)}isDeleted(){return d.lorotext_isDeleted(this.__wbg_ptr)!==0}subscribe(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_subscribe(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}toString(){let e,t;try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotext_toString(s,this.__wbg_ptr);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);return e=i,t=r,St(i,r)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(e,t,1)}}},Ud=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_lorotree_free(n>>>0,1)),Tr=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Ud.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ud.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_lorotree_free(e,0)}createNode(e,t){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_createNode(a,this.__wbg_ptr,mn(e),Qt(t)?4294967297:t>>>0);var i=b().getInt32(a+4*0,!0),r=b().getInt32(a+4*1,!0),s=b().getInt32(a+4*2,!0);if(s)throw L(r);return Ar.__wrap(i)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}isAttached(){return d.lorotree_isAttached(this.__wbg_ptr)!==0}getAttached(){let e=d.lorotree_getAttached(this.__wbg_ptr);return L(e)}getNodeByID(e){try{let t=d.lorotree_getNodeByID(this.__wbg_ptr,mn(e));return t===0?void 0:Ar.__wrap(t)}finally{xt[Vt++]=void 0}}isNodeDeleted(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_isNodeDeleted(s,this.__wbg_ptr,mn(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return t!==0}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}getShallowValue(){let e=d.lorotree_getShallowValue(this.__wbg_ptr);return L(e)}enableFractionalIndex(e){d.lorotree_enableFractionalIndex(this.__wbg_ptr,e)}disableFractionalIndex(){d.lorotree_disableFractionalIndex(this.__wbg_ptr)}isFractionalIndexEnabled(){return d.lorotree_isFractionalIndexEnabled(this.__wbg_ptr)!==0}get id(){let e=d.lorotree_id(this.__wbg_ptr);return L(e)}move(e,t,i){try{let a=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_move(a,this.__wbg_ptr,mn(e),mn(t),Qt(i)?4294967297:i>>>0);var r=b().getInt32(a+4*0,!0),s=b().getInt32(a+4*1,!0);if(s)throw L(r)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0,xt[Vt++]=void 0}}constructor(){let e=d.lorotree_new();return this.__wbg_ptr=e>>>0,Ud.register(this,this.__wbg_ptr,this),this}kind(){let e=d.lorotree_kind(this.__wbg_ptr);return L(e)}nodes(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_nodes(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}roots(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_roots(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=Dn(e,t).slice();return d.__wbindgen_free(e,t*4,4),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}delete(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_delete(r,this.__wbg_ptr,mn(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}parent(){let e=d.lorotree_parent(this.__wbg_ptr);return L(e)}toJSON(){let e=d.lorotree_toJSON(this.__wbg_ptr);return L(e)}has(e){try{return d.lorotree_has(this.__wbg_ptr,mn(e))!==0}finally{xt[Vt++]=void 0}}toArray(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_toArray(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getNodes(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_getNodes(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}isDeleted(){return d.lorotree_isDeleted(this.__wbg_ptr)!==0}subscribe(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotree_subscribe(s,this.__wbg_ptr,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}},T0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_lorotreenode_free(n>>>0,1)),Ar=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,T0.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,T0.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_lorotreenode_free(e,0)}creationId(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_creationId(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}isDeleted(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_isDeleted(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return e!==0}finally{d.__wbindgen_add_to_stack_pointer(16)}}moveBefore(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);uo(e,n),d.lorotreenode_moveBefore(r,this.__wbg_ptr,e.__wbg_ptr);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}createNode(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_createNode(s,this.__wbg_ptr,Qt(e)?4294967297:e>>>0);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}getLastMoveId(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_getLastMoveId(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}toJSON(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_toJSON(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}fractionalIndex(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_fractionalIndex(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}__getClassname(){let e,t;try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode___getClassname(s,this.__wbg_ptr);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);return e=i,t=r,St(i,r)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(e,t,1)}}get id(){let e=d.lorotreenode_id(this.__wbg_ptr);return L(e)}move(e,t){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_move(s,this.__wbg_ptr,mn(e),Qt(t)?4294967297:t>>>0);var i=b().getInt32(s+4*0,!0),r=b().getInt32(s+4*1,!0);if(r)throw L(i)}finally{d.__wbindgen_add_to_stack_pointer(16),xt[Vt++]=void 0}}get data(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_data(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return Mr.__wrap(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}index(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_index(r,this.__wbg_ptr);var e=b().getFloat64(r+8*0,!0),t=b().getInt32(r+4*2,!0),i=b().getInt32(r+4*3,!0);if(i)throw L(t);return e===4294967297?void 0:e}finally{d.__wbindgen_add_to_stack_pointer(16)}}parent(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.lorotreenode_parent(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return e===0?void 0:n.__wrap(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}creator(){let e=d.lorotreenode_creator(this.__wbg_ptr);return L(e)}children(){let e=d.lorotreenode_children(this.__wbg_ptr);return L(e)}moveAfter(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);uo(e,n),d.lorotreenode_moveAfter(r,this.__wbg_ptr,e.__wbg_ptr);var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}},A0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_undomanager_free(n>>>0,1)),us=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,A0.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_undomanager_free(e,0)}groupStart(){try{let i=d.__wbindgen_add_to_stack_pointer(-16);d.undomanager_groupStart(i,this.__wbg_ptr);var e=b().getInt32(i+4*0,!0),t=b().getInt32(i+4*1,!0);if(t)throw L(e)}finally{d.__wbindgen_add_to_stack_pointer(16)}}topRedoValue(){let e=d.undomanager_topRedoValue(this.__wbg_ptr);return L(e)}topUndoValue(){let e=d.undomanager_topUndoValue(this.__wbg_ptr);return L(e)}setMaxUndoSteps(e){d.undomanager_setMaxUndoSteps(this.__wbg_ptr,e)}setMergeInterval(e){d.undomanager_setMergeInterval(this.__wbg_ptr,e)}addExcludeOriginPrefix(e){let t=$e(e,d.__wbindgen_malloc,d.__wbindgen_realloc),i=Re;d.undomanager_addExcludeOriginPrefix(this.__wbg_ptr,t,i)}constructor(e,t){uo(e,$n);let i=d.undomanager_new(e.__wbg_ptr,Z(t));return this.__wbg_ptr=i>>>0,A0.register(this,this.__wbg_ptr,this),this}peer(){let e=d.undomanager_peer(this.__wbg_ptr);return L(e)}redo(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.undomanager_redo(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return e!==0}finally{d.__wbindgen_add_to_stack_pointer(16)}}undo(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.undomanager_undo(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=b().getInt32(r+4*2,!0);if(i)throw L(t);return e!==0}finally{d.__wbindgen_add_to_stack_pointer(16)}}clear(){d.undomanager_clear(this.__wbg_ptr)}canRedo(){return d.undomanager_canRedo(this.__wbg_ptr)!==0}canUndo(){return d.undomanager_canUndo(this.__wbg_ptr)!==0}groupEnd(){d.undomanager_groupEnd(this.__wbg_ptr)}setOnPop(e){d.undomanager_setOnPop(this.__wbg_ptr,Z(e))}clearRedo(){d.undomanager_clearRedo(this.__wbg_ptr)}clearUndo(){d.undomanager_clearUndo(this.__wbg_ptr)}setOnPush(e){d.undomanager_setOnPush(this.__wbg_ptr,Z(e))}},Nd=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>d.__wbg_versionvector_free(n>>>0,1)),jn=class n{static __wrap(e){e=e>>>0;let t=Object.create(n.prototype);return t.__wbg_ptr=e,Nd.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Nd.unregister(this),e}free(){let e=this.__destroy_into_raw();d.__wbg_versionvector_free(e,0)}get(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_get(s,this.__wbg_ptr,Z(e));var t=b().getFloat64(s+8*0,!0),i=b().getInt32(s+4*2,!0),r=b().getInt32(s+4*3,!0);if(r)throw L(i);return t===4294967297?void 0:t}finally{d.__wbindgen_add_to_stack_pointer(16)}}constructor(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_new(s,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return this.__wbg_ptr=t>>>0,Nd.register(this,this.__wbg_ptr,this),this}finally{d.__wbindgen_add_to_stack_pointer(16)}}static decode(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16),a=xr(e,d.__wbindgen_malloc),o=Re;d.versionvector_decode(s,a,o);var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}encode(){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_encode(r,this.__wbg_ptr);var e=b().getInt32(r+4*0,!0),t=b().getInt32(r+4*1,!0),i=vr(e,t).slice();return d.__wbindgen_free(e,t*1,1),i}finally{d.__wbindgen_add_to_stack_pointer(16)}}length(){return d.versionvector_length(this.__wbg_ptr)>>>0}remove(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_remove(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}setEnd(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_setEnd(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}compare(e){uo(e,n);let t=d.versionvector_compare(this.__wbg_ptr,e.__wbg_ptr);return t===4294967297?void 0:t}setLast(e){try{let r=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_setLast(r,this.__wbg_ptr,Z(e));var t=b().getInt32(r+4*0,!0),i=b().getInt32(r+4*1,!0);if(i)throw L(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}toJSON(){let e=d.versionvector_toJSON(this.__wbg_ptr);return L(e)}static parseJSON(e){try{let s=d.__wbindgen_add_to_stack_pointer(-16);d.versionvector_parseJSON(s,Z(e));var t=b().getInt32(s+4*0,!0),i=b().getInt32(s+4*1,!0),r=b().getInt32(s+4*2,!0);if(r)throw L(i);return n.__wrap(t)}finally{d.__wbindgen_add_to_stack_pointer(16)}}};function Xd(n,e){let t=String(ae(e)),i=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),r=Re;b().setInt32(n+4*1,r,!0),b().setInt32(n+4*0,i,!0)}function qd(){return gn(function(n,e,t){let i=ae(n).apply(ae(e),ae(t));return Z(i)},arguments)}function Yd(){return gn(function(n,e,t){let i=Reflect.apply(ae(n),ae(e),ae(t));return Z(i)},arguments)}function Jd(n){let e=ae(n).buffer;return Z(e)}function jd(){return gn(function(n,e){let t=ae(n).call(ae(e));return Z(t)},arguments)}function $d(){return gn(function(n,e,t){let i=ae(n).call(ae(e),ae(t));return Z(i)},arguments)}function Zd(){return gn(function(n,e,t,i){let r=ae(n).call(ae(e),ae(t),ae(i));return Z(r)},arguments)}function Kd(){return gn(function(n,e,t,i,r){let s=ae(n).call(ae(e),ae(t),ae(i),ae(r));return Z(s)},arguments)}function Qd(n){let e=fo.__wrap(n);return Z(e)}function eh(n){let e=ae(n).crypto;return Z(e)}function th(n){let e=hi.__wrap(n);return Z(e)}function nh(n){return ae(n).done}function ih(n){let e=Object.entries(ae(n));return Z(e)}function rh(n){let e=ae(n).entries();return Z(e)}function sh(n,e){console.error(St(n,e))}function oh(n,e){let t,i;try{t=n,i=e,console.error(St(n,e))}finally{d.__wbindgen_free(t,i,1)}}function ah(n){let e=Array.from(ae(n));return Z(e)}function ch(n){let e=Object.getOwnPropertySymbols(ae(n));return Z(e)}function lh(){return gn(function(n,e){ae(n).getRandomValues(ae(e))},arguments)}function uh(){return gn(function(n,e){let t=Reflect.get(ae(n),ae(e));return Z(t)},arguments)}function dh(n,e){let t=ae(n)[e>>>0];return Z(t)}function hh(n,e){return ae(n)[e>>>0]}function fh(n,e){let t=ae(n)[ae(e)];return Z(t)}function ph(n){let e;try{e=ae(n)instanceof ArrayBuffer}catch{e=!1}return e}function _h(n){let e;try{e=ae(n)instanceof Map}catch{e=!1}return e}function mh(n){let e;try{e=ae(n)instanceof Object}catch{e=!1}return e}function gh(n){let e;try{e=ae(n)instanceof Uint8Array}catch{e=!1}return e}function yh(n){return Array.isArray(ae(n))}function xh(n){return Number.isSafeInteger(ae(n))}function vh(){return Z(Symbol.iterator)}function bh(n){return ae(n).length}function wh(n){return ae(n).length}function Mh(n,e,t,i,r,s,a,o){let c,l;try{c=n,l=e,console.log(St(n,e),St(t,i),St(r,s),St(a,o))}finally{d.__wbindgen_free(c,l,1)}}function Sh(n,e){let t,i;try{t=n,i=e,console.log(St(n,e))}finally{d.__wbindgen_free(t,i,1)}}function Eh(n,e){console.log(St(n,e))}function Th(n){let e=br.__wrap(n);return Z(e)}function Ah(n){let e=wr.__wrap(n);return Z(e)}function Rh(n){let e=Mr.__wrap(n);return Z(e)}function Ch(n){let e=Sr.__wrap(n);return Z(e)}function Ih(n){let e=Er.__wrap(n);return Z(e)}function Ph(n){let e=Tr.__wrap(n);return Z(e)}function Lh(n){let e=Ar.__wrap(n);return Z(e)}function Dh(n,e){performance.mark(St(n,e))}function Uh(){return gn(function(n,e,t,i){let r,s,a,o;try{r=n,s=e,a=t,o=i,performance.measure(St(n,e),St(t,i))}finally{d.__wbindgen_free(r,s,1),d.__wbindgen_free(a,o,1)}},arguments)}function Nh(n){let e=ae(n).msCrypto;return Z(e)}function Oh(){let n=new Object;return Z(n)}function kh(){return Z(new Map)}function zh(){let n=new Array;return Z(n)}function Fh(){let n=new Error;return Z(n)}function Bh(n){let e=new Uint8Array(ae(n));return Z(e)}function Hh(n,e){let t=new Function(St(n,e));return Z(t)}function Vh(n,e,t){let i=new Uint8Array(ae(n),e>>>0,t>>>0);return Z(i)}function Gh(n){let e=new Uint8Array(n>>>0);return Z(e)}function Wh(n){let e=new Array(n>>>0);return Z(e)}function Xh(n){let e=ae(n).next;return Z(e)}function qh(){return gn(function(n){let e=ae(n).next();return Z(e)},arguments)}function Yh(n){let e=ae(n).node;return Z(e)}function Jh(){return Date.now()}function jh(){return gn(function(n){let e=Reflect.ownKeys(ae(n));return Z(e)},arguments)}function $h(n){let e=ae(n).process;return Z(e)}function Zh(n,e){return ae(n).push(ae(e))}function Kh(){return gn(function(n,e){ae(n).randomFillSync(L(e))},arguments)}function Qh(){return gn(function(){let n=module.require;return Z(n)},arguments)}function ef(n){let e=Promise.resolve(ae(n));return Z(e)}function tf(n,e,t){ae(n)[e>>>0]=L(t)}function nf(n,e,t){ae(n)[L(e)]=L(t)}function rf(n,e,t){ae(n).set(ae(e),t>>>0)}function sf(n,e,t){let i=ae(n).set(ae(e),ae(t));return Z(i)}function of(){return gn(function(n,e,t){return Reflect.set(ae(n),ae(e),ae(t))},arguments)}function af(n,e,t){ae(n)[e>>>0]=t}function cf(n,e){let t=ae(e).stack,i=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),r=Re;b().setInt32(n+4*1,r,!0),b().setInt32(n+4*0,i,!0)}function lf(){let n=typeof global>"u"?null:global;return Qt(n)?0:Z(n)}function uf(){let n=typeof globalThis>"u"?null:globalThis;return Qt(n)?0:Z(n)}function df(){let n=typeof self>"u"?null:self;return Qt(n)?0:Z(n)}function hf(){let n=typeof window>"u"?null:window;return Qt(n)?0:Z(n)}function ff(n,e,t){let i=ae(n).subarray(e>>>0,t>>>0);return Z(i)}function pf(n,e){let t=ae(n).then(ae(e));return Z(t)}function _f(n){let e=ae(n).value;return Z(e)}function mf(n){let e=ae(n).versions;return Z(e)}function gf(n){let e=jn.__wrap(n);return Z(e)}function yf(n,e){console.warn(St(n,e))}function xf(n){return+ae(n)}function vf(n){return Z(n)}function bf(n){let e=BigInt.asUintN(64,n);return Z(e)}function wf(n,e){let t=ae(e),i=typeof t=="bigint"?t:void 0;b().setBigInt64(n+8*1,Qt(i)?BigInt(0):i,!0),b().setInt32(n+4*0,!Qt(i),!0)}function Mf(n){let e=ae(n);return typeof e=="boolean"?e?1:0:2}function Sf(n){let e=L(n).original;return e.cnt--==1?(e.a=0,!0):!1}function Ef(n,e,t){let i=C0(n,e,9,dT);return Z(i)}function Tf(n,e,t){let i=C0(n,e,9,hT);return Z(i)}function Af(n,e){let t=Od(ae(e)),i=$e(t,d.__wbindgen_malloc,d.__wbindgen_realloc),r=Re;b().setInt32(n+4*1,r,!0),b().setInt32(n+4*0,i,!0)}function Rf(n,e){let t=new Error(St(n,e));return Z(t)}function Cf(n,e){return ae(n)in ae(e)}function If(n){return Array.isArray(ae(n))}function Pf(n){return typeof ae(n)=="bigint"}function Lf(n){return!ae(n)}function Df(n){return typeof ae(n)=="function"}function Uf(n){return ae(n)===null}function Nf(n){let e=ae(n);return typeof e=="object"&&e!==null}function Of(n){return typeof ae(n)=="string"}function kf(n){return ae(n)===void 0}function zf(n,e){return ae(n)===ae(e)}function Ff(n,e){return ae(n)==ae(e)}function Bf(){let n=d.memory;return Z(n)}function Hf(n,e){let t=ae(e),i=typeof t=="number"?t:void 0;b().setFloat64(n+8*1,Qt(i)?0:i,!0),b().setInt32(n+4*0,!Qt(i),!0)}function Vf(n){return Z(n)}function Gf(n){let e=ae(n);return Z(e)}function Wf(n){L(n)}function Xf(n){throw L(n)}function qf(n,e){let t=ae(e),i=typeof t=="string"?t:void 0;var r=Qt(i)?0:$e(i,d.__wbindgen_malloc,d.__wbindgen_realloc),s=Re;b().setInt32(n+4*1,s,!0),b().setInt32(n+4*0,r,!0)}function Yf(n,e){let t=St(n,e);return Z(t)}function Jf(n,e){throw new Error(St(n,e))}function jf(n){let e=typeof ae(n);return Z(e)}var $f={AwarenessWasm:ho,ChangeModifier:fo,Cursor:hi,EphemeralStoreWasm:ls,LORO_VERSION:Bd,LoroCounter:br,LoroDoc:$n,LoroList:wr,LoroMap:Mr,LoroMovableList:Sr,LoroText:Er,LoroTree:Tr,LoroTreeNode:Ar,UndoManager:us,VersionVector:jn,__wbg_String_8f0eb39a4a4c2f66:Xd,__wbg_apply_36be6a55257c99bf:qd,__wbg_apply_eb9e9b97497f91e4:Yd,__wbg_buffer_609cc3eee51ed158:Jd,__wbg_call_672a4d21634d4a24:jd,__wbg_call_7cccdd69e0791ae2:$d,__wbg_call_833bed5770ea2041:Zd,__wbg_call_b8adc8b1d0a0d8eb:Kd,__wbg_changemodifier_new:Qd,__wbg_crypto_574e78ad8b13b65f:eh,__wbg_cursor_new:th,__wbg_done_769e5ede4b31c67b:nh,__wbg_entries_3265d4158b33e5dc:ih,__wbg_entries_c8a90a7ed73e84ce:rh,__wbg_error_2caaeb4a4ddff603:sh,__wbg_error_7534b8e9a36f1ab4:oh,__wbg_from_2a5d3e218e67aa85:ah,__wbg_getOwnPropertySymbols_97eebed6fe6e08be:ch,__wbg_getRandomValues_b8f5dbd5f3995a9e:lh,__wbg_get_67b2ba62fc30de12:uh,__wbg_get_b9b93047fe3cf45b:dh,__wbg_getindex_5b00c274b05714aa:hh,__wbg_getwithrefkey_1dc361bd10053bfe:fh,__wbg_instanceof_ArrayBuffer_e14585432e3737fc:ph,__wbg_instanceof_Map_f3469ce2244d2430:_h,__wbg_instanceof_Object_7f2dcef8f78644a4:mh,__wbg_instanceof_Uint8Array_17156bcf118086a9:gh,__wbg_isArray_a1eab7e0d067391b:yh,__wbg_isSafeInteger_343e2beeeece1bb0:xh,__wbg_iterator_9a24c88df860dc65:vh,__wbg_length_a446193dc22c12f8:bh,__wbg_length_e2d2a49132c1b256:wh,__wbg_log_0cc1b7768397bcfe:Mh,__wbg_log_cb9e190acc5753fb:Sh,__wbg_log_fc81db84f828b288:Eh,__wbg_lorocounter_new:Th,__wbg_lorolist_new:Ah,__wbg_loromap_new:Rh,__wbg_loromovablelist_new:Ch,__wbg_lorotext_new:Ih,__wbg_lorotree_new:Ph,__wbg_lorotreenode_new:Lh,__wbg_mark_7438147ce31e9d4b:Dh,__wbg_measure_fb7825c11612c823:Uh,__wbg_msCrypto_a61aeb35a24c1329:Nh,__wbg_new_405e22f390576ce2:Oh,__wbg_new_5e0be73521bc8c17:kh,__wbg_new_78feb108b6472713:zh,__wbg_new_8a6f238a6ece86ea:Fh,__wbg_new_a12002a7f91c75be:Bh,__wbg_newnoargs_105ed471475aaf50:Hh,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:Vh,__wbg_newwithlength_a381634e90c276d4:Gh,__wbg_newwithlength_c4c419ef0bc8a1f8:Wh,__wbg_next_25feadfc0913fea9:Xh,__wbg_next_6574e1a8a62d1055:qh,__wbg_node_905d3e251edff8a2:Yh,__wbg_now_829357f5fa91c9dd:Jh,__wbg_ownKeys_3930041068756f1f:jh,__wbg_process_dc0fbacc7c1c06f7:$h,__wbg_push_737cfc8c1432c2c6:Zh,__wbg_randomFillSync_ac0988aba3254290:Kh,__wbg_require_60cc747a6bc5215a:Qh,__wbg_resolve_4851785c9c5f573d:ef,__wbg_set_37837023f3d740e8:tf,__wbg_set_3f1d0b984ed272ed:nf,__wbg_set_65595bdd868b3009:rf,__wbg_set_8fc6bf8a5b1071d1:sf,__wbg_set_bb8cecf6a62b9f46:of,__wbg_set_wasm:kd,__wbg_setindex_dcd71eabf405bde1:af,__wbg_stack_0ed75d68575b0f3c:cf,__wbg_static_accessor_GLOBAL_88a902d13a557d07:lf,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:uf,__wbg_static_accessor_SELF_37c5d418e4bf5819:df,__wbg_static_accessor_WINDOW_5de37043a91a9c40:hf,__wbg_subarray_aa9065fa9dc5df96:ff,__wbg_then_44b73946d2fb3e7d:pf,__wbg_value_cd1ffa7b1ab794f1:_f,__wbg_versions_c01dfd4722a88165:mf,__wbg_versionvector_new:gf,__wbg_warn_5e3717ed8ac922f8:yf,__wbindgen_as_number:xf,__wbindgen_bigint_from_i64:vf,__wbindgen_bigint_from_u64:bf,__wbindgen_bigint_get_as_i64:wf,__wbindgen_boolean_get:Mf,__wbindgen_cb_drop:Sf,__wbindgen_closure_wrapper331:Ef,__wbindgen_closure_wrapper333:Tf,__wbindgen_debug_string:Af,__wbindgen_error_new:Rf,__wbindgen_in:Cf,__wbindgen_is_array:If,__wbindgen_is_bigint:Pf,__wbindgen_is_falsy:Lf,__wbindgen_is_function:Df,__wbindgen_is_null:Uf,__wbindgen_is_object:Nf,__wbindgen_is_string:Of,__wbindgen_is_undefined:kf,__wbindgen_jsval_eq:zf,__wbindgen_jsval_loose_eq:Ff,__wbindgen_memory:Bf,__wbindgen_number_get:Hf,__wbindgen_number_new:Vf,__wbindgen_object_clone_ref:Gf,__wbindgen_object_drop_ref:Wf,__wbindgen_rethrow:Xf,__wbindgen_string_get:qf,__wbindgen_string_new:Yf,__wbindgen_throw:Jf,__wbindgen_typeof:jf,callPendingEvents:po,decodeFrontiers:Fd,decodeImportBlobMeta:Gd,encodeFrontiers:Vd,redactJsonUpdates:Hd,run:zd,setDebug:Wd},fT={"./loro_wasm_bg.js":$f},pT=n=>{$f.__wbg_set_wasm(n),_T($f)};function _T(n){typeof n.__wbindgen_start=="function"&&n.__wbindgen_start()}function mT(n){if(typeof XMLHttpRequest!="function")throw new Error("loro-crdt browser build requires XMLHttpRequest for synchronous WASM loading. Use the nodejs, web, base64, or bundler entry for this runtime.");let e=new XMLHttpRequest;if(e.open("GET",n,!1),e.overrideMimeType("text/plain; charset=x-user-defined"),e.send(null),e.status!==0&&(e.status<200||e.status>=300))throw new Error(`Failed to load loro-crdt WASM from ${n}: ${e.status} ${e.statusText}`);let t=e.responseText,i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r)&255;return i}function gT(n,e){let t=new WebAssembly.Module(n);return new WebAssembly.Instance(t,e)}var yT=new URL("./loro_wasm_bg.wasm",import.meta.url),xT=gT(mT(yT.href),fT);pT(xT.exports);var vT=["Map","Text","List","Tree","MovableList","Counter"];function bT(n){return n.startsWith("cid:")}function I0(n){if(typeof n!="object"||n==null)return!1;let e=Object.getPrototypeOf(n);return e==null||typeof e!="object"||typeof e.kind!="function"?!1:vT.includes(n.kind())}$n.prototype.toJsonWithReplacer=function(n){let e=new Set,t=this,i=(a,o)=>{if(typeof o=="string"&&bT(o)&&!e.has(o)){e.add(o);let l=t.getContainerById(o);if(l==null)throw new Error(`ContainerID not found: ${o}`);let u=n(a,l);if(u===l){let h=l.getShallowValue();return typeof h=="object"?r(h):h}if(I0(u))throw new Error("Using new container is not allowed in toJsonWithReplacer");return typeof u=="object"&&u!=null?r(u):u}if(typeof o=="object"&&o!=null)return r(o);let c=n(a,o);if(I0(c))throw new Error("Using new container is not allowed in toJsonWithReplacer");return c},r=a=>{if(Array.isArray(a))return a.map((c,l)=>i(l,c)).filter(c=>c!==void 0);let o={};for(let[c,l]of Object.entries(a)){let u=i(c,l);u!==void 0&&(o[c]=u)}return o},s=t.getShallowValue();return r(s)};var P0=Symbol("loro.callPendingEventsWrapped");function wT(n,e){let t=Object.getOwnPropertyDescriptor(n,e);if(!t||typeof t.value!="function")return;let i=t.value;if(i[P0])return;let r=function(...s){let a;try{return a=i.apply(this,s),a}finally{a&&typeof a.then=="function"?a.finally(()=>{po()}):po()}};r[P0]=!0,Object.defineProperty(n,e,{...t,value:r})}function Zf(n,e){for(let t of e)wT(n,t)}Zf($n.prototype,["setDetachedEditing","attach","detach","fork","forkAt","checkoutToLatest","checkout","commit","getCursorPos","revertTo","export","exportJsonUpdates","exportJsonInIdSpan","importJsonUpdates","import","importUpdateBatch","importBatch","travelChangeAncestors","getChangedContainersIn","diff","applyDiff","setPeerId"]);Zf(ls.prototype,["set","delete","apply","removeOutdated"]);Zf(us.prototype,["undo","redo"]);var MT="scene",L0=n=>n.getTree(MT),ST=n=>n.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c]),ET=n=>n.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]})),Rr=(n,e,t)=>n.data.get(e)===t?!1:(n.data.set(e,t),!0),TT=(n,e)=>{let t=ST(e),i=n.data.get("b");return i&&JSON.stringify(i)===JSON.stringify(t)?!1:(n.data.set("b",t),!0)},AT=(n,e)=>{let t=!1;return t=Rr(n,"t",e.type==="object"?"o":"s")||t,t=Rr(n,"aid",e.id)||t,t=Rr(n,"nm",e.name)||t,t=Rr(n,"px",e.pos.x)||t,t=Rr(n,"py",e.pos.y)||t,t=Rr(n,"pz",e.pos.z)||t,t=Rr(n,"r",e.rot)||t,t=Rr(n,"vs",e.vis)||t,e.type==="object"&&(t=TT(n,e.boxes)||t),t};function RT(n){let e=[],t=(i,r,s)=>{e.push({node:i,parent:r,index:s}),i.type==="scene"&&i.children.forEach((a,o)=>t(a,i.id,o))};return t(n,null,0),e}function CT(n){let e=new Map;for(let t of n.getNodes()){if(t.isDeleted())continue;let i=t.data.get("aid");typeof i=="string"&&e.set(i,t)}return e}function Qf(n,e){let t=L0(n),i=CT(t),r=RT(e),s=new Set(r.map(o=>o.node.id)),a=!1;for(let[o,c]of i)!s.has(o)&&t.has(c.id)&&(t.delete(c.id),i.delete(o),a=!0);for(let o of r){let c=o.parent===null?void 0:i.get(o.parent),l=i.get(o.node.id);!l||l.isDeleted()?(l=t.createNode(c?.id,o.index),i.set(o.node.id,l),a=!0):(l.parent()?.id!==c?.id||l.index()!==o.index)&&(t.move(l.id,c?.id,o.index),a=!0),a=AT(l,o.node)||a}return a&&n.commit(),a}var IT=n=>((typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):0)%4+4)%4,Kf=n=>typeof n=="number"&&Number.isFinite(n)?Math.round(n):0,PT=["visible","deemphasized","hidden"],LT=n=>PT.includes(n)?n:"visible";function D0(n){let e=n.data,t=e.get("aid");if(typeof t!="string")return null;let i={id:t,name:typeof e.get("nm")=="string"?e.get("nm"):"",pos:{x:Kf(e.get("px")),y:Kf(e.get("py")),z:Kf(e.get("pz"))},rot:IT(e.get("r")),vis:LT(e.get("vs"))};if(e.get("t")==="o"){let s=e.get("b");return{type:"object",...i,boxes:Array.isArray(s)?ET(s):[]}}let r=n.children()??[];return{type:"scene",...i,children:r.map(D0).filter(s=>s!==null)}}function _o(n){let e=L0(n).roots();if(!e.length)return null;let t=D0(e[0]);return t&&t.type==="scene"?t:null}function oa(){return new $n}function U0(n){let e=oa();return Qf(e,n),e}var qc=n=>n.export({mode:"snapshot"});var Yc="voxelier-v12",DT="voxelier-doc",Zn=oa(),Jc=null,mo=!1,ip=null,ep=null,tp=Yc,k0=()=>Zn,z0=()=>qc(Zn),np=new Set;function F0(n){return np.add(n),()=>np.delete(n)}var N0=32768;function O0(n){let e="";for(let t=0;t<n.length;t+=N0)e+=String.fromCharCode(...n.subarray(t,t+N0));return btoa(e)}function UT(n){let e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function jc(){try{localStorage.setItem(tp,O0(qc(Zn)))}catch{try{localStorage.setItem(tp,O0(Zn.export({mode:"shallow-snapshot",frontiers:Zn.oplogFrontiers()})))}catch{}}}function rp(n){ep?.(),ep=null,Zn=n,Jc&&B0()}function B0(){ep=Zn.subscribeLocalUpdates(n=>{if(!mo){H0({k:"u",b:n});for(let e of np)e(n)}})}function H0(n){try{Jc?.postMessage(n)}catch{}}function V0(n){ip=n,!(typeof BroadcastChannel>"u")&&(Jc=new BroadcastChannel(DT),Jc.onmessage=e=>{let t=e.data;!t||t.k!=="u"&&t.k!=="r"||!(t.b instanceof Uint8Array)||(t.k==="r"?sp(t.b):$c(t.b))},B0())}function $c(n){mo=!0;try{Zn.import(n);let e=_o(Zn);return e&&(ip?.(e),jc()),e}catch{return null}finally{mo=!1}}function sp(n){mo=!0;try{let e=oa();e.import(n);let t=_o(e);return t?(rp(e),ip?.(t),jc(),t):null}catch{return null}finally{mo=!1}}function op(n){tp=n?`${Yc}:${n}`:Yc}function ap(n){return mo||!Qf(Zn,n)?!1:(jc(),!0)}function G0(){let n=null;try{n=localStorage.getItem(Yc)}catch{return null}if(!n)return null;try{let e=oa();e.import(UT(n));let t=_o(e);return t?(rp(e),t):null}catch{return null}}function Zc(n){rp(U0(n)),jc(),H0({k:"r",b:qc(Zn)})}var NT="voxelier-v11",W0="voxelier-ui-v1";function ca(n){let e={id:n.id,nm:n.name,p:n.pos,r:n.rot,vs:n.vis};return n.type==="object"?{t:"o",...e,b:n.boxes.map(t=>[t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.c])}:{t:"s",...e,c:n.children.map(ca)}}var OT={transparent:"deemphasized",invisible:"hidden"};function Gc(n){let e={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:OT[n.vs]||n.vs||"visible"};return n.t==="o"?{type:"object",...e,boxes:n.b.map(t=>({x0:t[0],y0:t[1],z0:t[2],x1:t[3],y1:t[4],z1:t[5],c:t[6]}))}:{type:"scene",...e,children:n.c.map(Gc)}}var aa;function kT(){try{localStorage.setItem(W0,JSON.stringify([...x.collapsed]))}catch{}}function di(){clearTimeout(aa),aa=void 0,g0(JSON.stringify(ca(x.root))),ap(x.root),kT()}function cp(){aa===void 0&&(y0(JSON.stringify(ca(x.root))),ap(x.root))}function yt(){clearTimeout(aa),aa=setTimeout(di,250)}function lp(n){return!n||!n.root?!1:(Pc(n.uid||1),x.root=Gc(n.root),x.collapsed=new Set(n.collapsed??[]),Zc(x.root),!0)}function X0(n){x.root=n}var zT=()=>{try{let n=JSON.parse(localStorage.getItem(W0));return Array.isArray(n)?n:[]}catch{return[]}};function q0(){let n=G0();return n?(x.root=n,x.collapsed=new Set(zT()),!0):FT()}function FT(){try{return lp(JSON.parse(localStorage.getItem(NT)))}catch{return!1}}var BT=2;function la(n){let e=Kt();return hn(n,e),{mn:e.min,mx:e.max}}var Kc=n=>{let{mn:e,mx:t}=la(n);return{x0:e.x,y0:e.y,z0:e.z,x1:t.x,y1:t.y,z1:t.z}};function J0(n){if(!n.length)return[];let{mn:e}=la(n);return n.map(t=>$o(t,-e.x,-e.y,-e.z))}function j0(n){let e=od(x.editObject.boxes,n);x.sel3d={region:e.length?Kc(e):{...n},boxes:e,lifted:!1},gr()}function up(){let n=x.sel3d;!n||n.lifted||(di(),n.lifted=!0,ia(n.region))}function dp(){VT();let n=x.sel3d;!n||!n.lifted||(n.lifted=!1,Fc(n.boxes),n.boxes=od(x.editObject.boxes,n.region),yt())}function Bi(){let n=x.sel3d;n&&(x.sel3d=null,n.lifted?(Fc(n.boxes),yt()):gr())}function hp(){let n=x.sel3d;if(!n)return;let e=n.region,t=n.lifted;x.sel3d=null,t?gr():ia(e),yt()}function fp(){x.sel3d&&x.sel3d.boxes.length&&_0(J0(x.sel3d.boxes))}function $0(){fp(),hp()}function Z0(n){if(!n.length)return;Bi();let e=J0(n),t=0,i=0,r=0,s=x.editObject.boxes;if(s.length){let{mn:o,mx:c}=la(s);t=c.x+BT,i=o.y,r=o.z}let a=e.map(o=>$o(o,t,i,r));x.sel3d={region:Kc(a),boxes:a,lifted:!1},Fc(a),yt()}function K0(n,e,t){let i=x.sel3d;if(!i||!n&&!e&&!t)return;let r=i.region;r.x0+=n,r.x1+=n,r.y0+=e,r.y1+=e,r.z0+=t,r.z1+=t,i.boxes=i.boxes.map(s=>$o(s,n,e,t)),gr()}function Y0(n,e,t){let{x:i,y:r,z:s}=n;for(let a=(t%4+4)%4;a>0;a--)if(e===0){let o=-s,c=r;r=o,s=c}else if(e===1){let o=-s,c=i;i=o,s=c}else{let o=-r,c=i;i=o,r=c}return{x:i,y:r,z:s}}function HT(n,e,t){let i=Y0({x:n.x0,y:n.y0,z:n.z0},e,t),r=Y0({x:n.x1-1,y:n.y1-1,z:n.z1-1},e,t);return{x0:Math.min(i.x,r.x),y0:Math.min(i.y,r.y),z0:Math.min(i.z,r.z),x1:Math.max(i.x,r.x)+1,y1:Math.max(i.y,r.y)+1,z1:Math.max(i.z,r.z)+1,c:n.c}}function Q0(){let n=et.matrixWorld.elements,e=lt({x:n[0],y:0,z:n[2]},-x.editXform.rot);return Math.abs(e.x)>=Math.abs(e.z)?0:2}var Qc=null;function pp(){let n=x.sel3d;if(!n)return;let e=la(n.boxes);Qc={boxes:n.boxes.map(t=>({...t})),cx:(e.mn.x+e.mx.x)/2,cy:(e.mn.y+e.mx.y)/2,cz:(e.mn.z+e.mx.z)/2}}function VT(){Qc=null}function ey(n,e){let t=x.sel3d,i=Qc;if(!t||!i||!i.boxes.length)return;let r=(n%4+4)%4,s;if(!r)s=i.boxes.map(a=>({...a}));else{let a=e?Q0():1;s=i.boxes.map(h=>HT(h,a,r));let o=la(s),c=ar(i.cx-(o.mn.x+o.mx.x)/2),l=ar(i.cy-(o.mn.y+o.mx.y)/2),u=ar(i.cz-(o.mn.z+o.mx.z)/2);s=s.map(h=>$o(h,c,l,u))}t.boxes=s,t.region=Kc(s),gr()}function ty(n,e){let t=x.sel3d,i=Qc;if(!t||!i||!i.boxes.length)return;let r=e?Q0():1,[s,a]=r===0?[i.cy,i.cz]:r===1?[i.cx,i.cz]:[i.cx,i.cy];t.boxes=d0(i.boxes,n,r,s,a,(o,c,l)=>({x:o,y:c,z:l})),t.region=Kc(t.boxes),gr()}function GT(){let n=x.sel3d;if(!n)return null;let e=n.region,t=new Ci;for(let i of[e.x0,e.x1])for(let r of[e.y0,e.y1])for(let s of[e.z0,e.z1])t.expandByPoint(ki(i,r,s));return t}function _p(){let n=GT();return n?(_n.setFromCamera(si,et),_n.ray.intersectsBox(n)):!1}function WT(n){if(!n.length)return[];let e=[[],[],[]];for(let v of n)e[0].push(v.x0,v.x1),e[1].push(v.y0,v.y1),e[2].push(v.z0,v.z1);let t=e.map(v=>[...new Set(v)].sort((T,I)=>T-I)),i=t.map(v=>v.length-1),[r,s,a]=i;if(r*s*a>8e6)return n;let o=t.map(v=>new Map(v.map((T,I)=>[T,I]))),c=(v,T,I)=>(v*s+T)*a+I,l=new Int32Array(r*s*a);for(let v of n){let T=o[0].get(v.x1),I=o[1].get(v.y1),P=o[2].get(v.z1);for(let U=o[0].get(v.x0);U<T;U++)for(let O=o[1].get(v.y0);O<I;O++)for(let S=o[2].get(v.z0);S<P;S++)l[c(U,O,S)]=v.c+1}let u=[],h=[],f=[],p=[];for(let v=0;v<r;v++)for(let T=0;T<s;T++)for(let I=0;I<a;I++)l[c(v,T,I)]&&(u.push(c(v,T,I)),h.push(v),f.push(T),p.push(I));let g=[h,f,p],y=new Uint8Array(r*s*a),_=v=>{y.fill(0);let T=Array.from({length:u.length},(O,S)=>S).sort((O,S)=>g[v[2]][O]-g[v[2]][S]||g[v[1]][O]-g[v[1]][S]||g[v[0]][O]-g[v[0]][S]),I=[0,0,0],P=(O,S,R,B)=>{if(S[R]>=i[R])return!1;let J=(R+1)%3,ne=(R+2)%3;I[R]=S[R];for(let M=O[J];M<S[J];M++){I[J]=M;for(let D=O[ne];D<S[ne];D++){I[ne]=D;let k=c(I[0],I[1],I[2]);if(y[k]||l[k]!==B)return!1}}return!0},U=[];for(let O of T){let S=u[O];if(y[S])continue;let R=l[S],B=[h[O],f[O],p[O]],J=[h[O]+1,f[O]+1,p[O]+1];for(let ne of v)for(;P(B,J,ne,R);)J[ne]++;for(let ne=B[0];ne<J[0];ne++)for(let M=B[1];M<J[1];M++)for(let D=B[2];D<J[2];D++)y[c(ne,M,D)]=1;U.push({x0:t[0][B[0]],y0:t[1][B[1]],z0:t[2][B[2]],x1:t[0][J[0]],y1:t[1][J[1]],z1:t[2][J[2]],c:R-1})}return U},m=u.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],w=null;for(let v of m){let T=_(v);(!w||T.length<w.length)&&(w=T)}return w}var XT=24,ny=n=>n.reduce((e,t)=>e+(t.x1-t.x0)*(t.y1-t.y0)*(t.z1-t.z0),0),mp=new WeakSet;function gp(n){if(n.boxes.length<XT||mp.has(n.boxes))return!1;let e=WT(n.boxes);return e.length<n.boxes.length&&ny(e)===ny(n.boxes)?(n.boxes=e,mp.add(e),!0):(mp.add(n.boxes),!1)}var yp=(n,e,t)=>{let i=new Set(x.selection);Bi(),t&&gp(t)&&cp(),x.selection=new Set([n]),x.editObject=null,cs(),x.context!==e||t?Ut():yr(i),it()};function qT(){if(x.path.length<=1)return;let n=x.context,e=x.editObject;yp(x.path.pop().id,n,e)}function YT(){yp(x.editObject.id,x.context,x.editObject)}function iy(){x.editObject?YT():qT()}function fi(n){let e=ci(n);if(!e)return;let t=x.context,i=x.editObject;x.path=e.slice(0,-1),yp(n.id,t,i)}function ds(n,e){let t=ci(n);if(!t)return;let i=x.editObject;Bi(),i&&i!==n&&gp(i)&&cp(),n.type==="scene"?(x.path=t,x.editObject=null):(x.path=t.slice(0,-1),x.editObject=n),x.selection.clear(),x.tool="view",cs(),Ut(),it(),e&&zi()}var pi=null,Gt=null,ua=null,go=null,Un=null,JT={visible:"\u25C9",deemphasized:"\u25D0",hidden:"\u29B0"},xp=(n,e)=>{let t=Math.min(255,(n>>16&255)*e)|0,i=Math.min(255,(n>>8&255)*e)|0,r=Math.min(255,(n&255)*e)|0;return`rgb(${t},${i},${r})`},el=new Map;function ry(n){return n.type==="object"?"o"+n.boxes.map(e=>`${e.x0},${e.y0},${e.z0},${e.x1},${e.y1},${e.z1},${e.c}`).join(";"):"s"+n.children.map(e=>`${e.id}@${e.pos.x},${e.pos.y},${e.pos.z}/${e.rot};${ry(e)}`).join()}function jT(n){let e=el.get(n.id);if(n===x.editObject&&e)return e.cv;let t=ry(n);if(e&&e.sig===t)return e.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let r=i.getContext("2d");r.fillStyle="#0f1115",r.fillRect(0,0,52,52);let s=ea(n,{x:0,y:0,z:0},0,[]);if(s.length){let a=Kt();hn(s,a);let{x:o,y:c,z:l}=a.min,{x:u,y:h,z:f}=a.max,p=40/Math.max(u-o,h-c,f-l,1),g=26-((o+u)/2-(l+f)/2)*p*.5,y=28+(c+h)/2*p*.6-((o+u)/2+(l+f)/2)*p*.28,_=(w,v,T)=>[g+(w-T)*p*.5,y-v*p*.6+(w+T)*p*.28],m=(w,v)=>{r.fillStyle=w,r.beginPath(),r.moveTo(v[0][0],v[0][1]);for(let T=1;T<v.length;T++)r.lineTo(v[T][0],v[T][1]);r.closePath(),r.fill()};s.sort((w,v)=>w.x0+w.x1+w.y0+w.y1+w.z0+w.z1-(v.x0+v.x1+v.y0+v.y1+v.z0+v.z1));for(let w of s)m(xp(w.c,.78),[_(w.x1,w.y0,w.z0),_(w.x1,w.y1,w.z0),_(w.x1,w.y1,w.z1),_(w.x1,w.y0,w.z1)]),m(xp(w.c,.6),[_(w.x0,w.y0,w.z1),_(w.x1,w.y0,w.z1),_(w.x1,w.y1,w.z1),_(w.x0,w.y1,w.z1)]),m(xp(w.c,1),[_(w.x0,w.y1,w.z0),_(w.x1,w.y1,w.z0),_(w.x1,w.y1,w.z1),_(w.x0,w.y1,w.z1)])}return el.set(n.id,{sig:t,cv:i}),i}var hs=null;function vp(n){hs=n}function $T(n){if(n===x.root||Ln(n)!==x.context||x.editObject)fi(n);else{let e=new Set(x.selection);x.selection.has(n.id)?x.selection.delete(n.id):x.selection.add(n.id),yr(e),it()}hs=n.id}function ZT(n){let e=x.context.children,t=hs?e.findIndex(o=>o.id===hs):-1,i=e.findIndex(o=>o.id===n.id);if(n===x.root||x.editObject||t<0||i<0){fi(n),hs=n.id;return}let r=new Set(x.selection),s=Math.min(t,i),a=Math.max(t,i);x.selection=new Set(e.slice(s,a+1).map(o=>o.id)),yr(r),it()}function KT(n,e){if(e.shiftKey||e.ctrlKey||e.metaKey){Un&&(clearTimeout(Un.timer),Un=null),e.shiftKey?ZT(n):$T(n);return}if(Un&&Un.node===n){clearTimeout(Un.timer),Un=null,ds(n,!0);return}Un&&clearTimeout(Un.timer),n===x.root?ds(n):fi(n),hs=n===x.root?null:n.id,Un={node:n,timer:setTimeout(()=>Un=null,300)}}function vo(n){tl();let t=document.querySelector(`#tree .trow[data-id="${n.id}"]`)?.querySelector(".nm");if(!t)return;let i=ft("input",{className:"nminput",value:n.name});i.placeholder=n===x.root?"Project":n.type==="scene"?"group":"object";let r=!1,s=a=>{r||(r=!0,a&&(n.name=i.value.trim(),yt()),it())};i.addEventListener("keydown",a=>{a.stopPropagation(),a.key==="Enter"?s(!0):a.key==="Escape"&&s(!1)}),i.addEventListener("blur",()=>s(!0)),t.replaceWith(i),i.focus(),i.select()}function QT(n){let e=jT(n);if(e.className="thumb",e.onclick=null,e.title="",n!==x.root&&n.type==="scene"&&n.children.length){let t=x.collapsed.has(n.id);e.classList.add("group"),t&&e.classList.add("collapsed"),e.title=t?"Expand group":"Collapse group",e.onclick=i=>{i.stopPropagation(),t?x.collapsed.delete(n.id):x.collapsed.add(n.id),bp()}}return e}function eA(n,e){n.draggable=e!==x.root,e!==x.root&&n.addEventListener("dragstart",t=>{if(t.stopPropagation(),pi=e.id,t.dataTransfer){t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain",e.id)}catch{}}}),n.addEventListener("dragend",yo),n.addEventListener("dragover",t=>{t.preventDefault(),t.stopPropagation(),tA(t,e,n)}),n.addEventListener("drop",t=>{t.preventDefault(),t.stopPropagation(),cy()})}function bp(){let n=document.getElementById("tree");n.innerHTML="";let e=(i,r)=>{let s=i===x.root,a=!s&&x.context.children.includes(i)&&x.selection.has(i.id),o=i.vis,c=ft("div",{className:"trow"+(s?" root":"")+(a?" sel":"")+(i===x.context&&!x.editObject?" ctx":"")+(i===x.editObject?" edit":"")+(!s&&o!=="visible"?" dim":"")});c.style.paddingLeft=4+r*13+"px",c.dataset.id=i.id;let l=QT(i),u=ft("span",{className:"nm"});if(s?u.textContent=i.name||"Project":i.name?u.textContent=i.name:u.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>",u.onclick=h=>{!Un&&!x.editObject&&!s&&x.selection.size===1&&x.selection.has(i.id)&&(h.stopPropagation(),vo(i))},c.append(l,u),s||c.append(ft("button",{className:"tb"+(o==="visible"?" on":""),textContent:JT[o],title:"visible \u2192 deemphasized \u2192 hidden",onclick:h=>{h.stopPropagation(),ly(i)}})),c.onclick=h=>KT(i,h),c.oncontextmenu=h=>{h.preventDefault(),h.stopPropagation();let f=!s&&!x.editObject&&Ln(i)===x.context&&x.selection.has(i.id);!s&&!f&&fi(i),oy(i,h.clientX,h.clientY)},eA(c,i),n.appendChild(c),i.type==="scene"&&(s||!x.collapsed.has(i.id)))for(let h of i.children)e(h,r+1)};e(x.root,0);let t=new Set;(function i(r){t.add(r.id),r.type==="scene"&&r.children.forEach(i)})(x.root);for(let i of el.keys())t.has(i)||el.delete(i)}function tl(){go&&(go.remove(),go=null,window.removeEventListener("pointerdown",sy,!0))}function sy(n){go&&!go.contains(n.target)&&tl()}function oy(n,e,t){tl();let i=ft("div",{className:"ctxmenu"}),r=(c,l,u)=>i.appendChild(ft("div",{className:"ctxitem"+(u?" "+u:""),textContent:c,onclick:()=>{tl(),l()}})),s=()=>i.appendChild(ft("div",{className:"ctxdiv"})),a=n!==x.root&&Ln(n)===x.context&&x.selection.size>1&&x.selection.has(n.id);a||(r("Rename",()=>vo(n)),r("Locate",()=>l0(n)),s()),n!==x.root&&(r("Copy",()=>ha()),r("Duplicate",()=>a?nl():fy(n)),r("Delete objects",()=>a?da():py(n),"danger"),s()),a?r("Group",()=>hy(n)):n.type==="scene"?(n!==x.root&&r("Ungroup",()=>_y(n)),ao()&&r("Paste",()=>il(n)),r("New object",()=>my(n)),r("New group",()=>gy(n))):r("New group",()=>dy(n)),document.body.appendChild(i),go=i;let o=i.getBoundingClientRect();i.style.left=Math.min(e,innerWidth-o.width-4)+"px",i.style.top=Math.min(t,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",sy,!0),0)}function yo(){ua&&ua.classList.remove("drop-into","drop-before","drop-after"),ua=null,Gt=null}function ay(){let n=pi&&is(pi);return!n||x.editObject||Ln(n)!==x.context||!x.selection.has(n.id)||x.selection.size<=1?null:x.context.children.filter(e=>x.selection.has(e.id))}function tA(n,e,t){let i=pi&&is(pi);if(!i||i===e){yo();return}let r=ay();if(r?r.some(h=>h===e||rs(h,e)):rs(i,e)){yo();return}if(yo(),ua=t,e===x.root){Gt={parent:x.root,index:x.root.children.length},t.classList.add("drop-into");return}let a=t.getBoundingClientRect(),o=n.clientY-a.top,c=a.height,l=Ln(e),u=l?l.children.indexOf(e):0;o>c*.28&&o<c*.72&&(e.type==="scene"||!r)?(e.type==="scene"?Gt={parent:e,index:e.children.length}:Gt={wrap:e},t.classList.add("drop-into")):o<c*.5?(Gt={parent:l,index:u},t.classList.add("drop-before")):(Gt={parent:l,index:u+1},t.classList.add("drop-after"))}function cy(){let n=pi&&is(pi);if(n&&Gt){let e=Gt.parent?ay():null;if(e){let t=Gt.parent,i=Gt.index,r=!1;for(let s of e)xo(s,t,i)&&(i=t.children.indexOf(s)+1,r=!0);if(r){x.collapsed.delete(t.id);let s=ci(t);s&&(x.path=s),x.editObject=null,x.selection=new Set(e.map(a=>a.id)),Ut(),it(),yt()}}else Gt.wrap?uy(Gt.wrap,n):Gt.parent&&xo(n,Gt.parent,Gt.index)&&(x.collapsed.delete(Gt.parent.id),fi(n),yt())}yo(),pi=null}{let n=document.getElementById("tree");n.addEventListener("dragover",e=>{if(e.target===n&&pi){e.preventDefault(),yo(),Gt={parent:x.root,index:x.root.children.length};let t=[...n.querySelectorAll(".trow")].filter(r=>r.dataset.id!==pi),i=t[t.length-1];i&&(i.classList.add("drop-after"),ua=i)}}),n.addEventListener("drop",e=>{e.target===n&&(e.preventDefault(),cy())})}document.getElementById("side").addEventListener("click",n=>{if(n.target.closest(".trow, button, input")||!x.selection.size)return;let e=new Set(x.selection);x.selection.clear(),hs=null,yr(e),it()});document.getElementById("side").addEventListener("contextmenu",n=>{n.target.closest(".trow, button, input")||(n.preventDefault(),oy(x.root,n.clientX,n.clientY))});var _i=()=>{Ut(),it(),yt()};function ly(n){n.vis=kg[n.vis],_i()}var wp=()=>[...x.selection].map(n=>Oi(n)).filter(n=>!!n),yy=(n,e)=>{let t=Qo();t.pos={x:Math.round(st.target.x),y:0,z:Math.round(st.target.z)},n.children.push(t),x.collapsed.delete(n.id),ds(t,e),yt(),vo(t)};function xy(){yy(x.context,!0)}function da(){x.selection.size&&(x.context.children=x.context.children.filter(n=>!x.selection.has(n.id)),x.selection.clear(),_i())}function nl(){let n=wp().map(lr);n.length&&(x.context.children.push(...n),x.selection=new Set(n.map(e=>e.id)),_i())}function ha(){let n=wp().map(lr);n.length&&p0(n)}function vy(){ha(),da()}function il(n=x.context){if(ao()==="vox"){nA(n);return}let e=Bc().map(lr);e.length&&(n.children.push(...e),by(n),x.selection=new Set(e.map(t=>t.id)),_i())}function nA(n){let e=Hc();if(!e.length)return;let t=Qo();t.boxes=e.map(s=>({...s}));let i=no(n),r=lt({x:st.target.x-i.off.x,y:0,z:st.target.z-i.off.z},-i.rot);t.pos={x:Math.round(r.x),y:0,z:Math.round(r.z)},n.children.push(t),by(n),x.selection=new Set([t.id]),_i()}function by(n){x.collapsed.delete(n.id),n!==x.context&&(x.path=ci(n)??x.path,x.editObject=null)}function xo(n,e,t){if(n===e||rs(n,e))return!1;let i=Ln(n);if(!i)return!1;let r=Ui(no(i),{off:{...n.pos},rot:n.rot}),s=Ui(nd(no(e)),r),a=i.children.indexOf(n);return i.children.splice(a,1),i===e&&a<t&&t--,n.pos={x:Math.round(s.off.x),y:Math.round(s.off.y),z:Math.round(s.off.z)},n.rot=s.rot&3,e.children.splice(Math.max(0,Math.min(t,e.children.length)),0,n),!0}function wy(n){let e=Ln(n);if(!e)return null;let t=e.children.indexOf(n),i=ns("Group");return i.pos={...n.pos},i.rot=n.rot,e.children.splice(t,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function uy(n,e){if(e===n||rs(e,n))return!1;let t=wy(n);return t?(xo(e,t,t.children.length),x.collapsed.delete(t.id),x.selection=new Set([t.id]),_i(),!0):!1}function dy(n){let e=wy(n);e&&(x.collapsed.delete(e.id),fi(e),yt(),vo(e))}function hy(n){let e=wp();if(e.length<2)return;let t=ns("Group");t.pos={...n.pos},t.rot=n.rot;let i=x.context.children.indexOf(n);x.context.children.splice(Math.max(0,i),0,t);for(let r of e)xo(r,t,t.children.length);x.collapsed.delete(t.id),x.selection=new Set([t.id]),_i()}function fy(n){let e=Ln(n);if(!e)return;let t=lr(n);e.children.splice(e.children.indexOf(n)+1,0,t),fi(t),yt()}function py(n){let e=Ln(n);e&&(e.children=e.children.filter(t=>t!==n),x.selection.delete(n.id),x.editObject===n&&(x.editObject=null),_i())}function _y(n){let e=Ln(n);if(!e)return;let t=[...n.children],i=e.children.indexOf(n);for(let r of t)xo(r,e,i),i=e.children.indexOf(r)+1;e.children=e.children.filter(r=>r!==n),x.selection=new Set(t.map(r=>r.id)),_i()}function my(n){yy(n,!1)}function gy(n){let e=ns("Group");n.children.push(e),x.collapsed.delete(n.id),fi(e),yt(),vo(e)}function Mp(n){let e=[...x.selection];if(!e.length)return;let t=n<0?3:1,i=to(),r=nd(i),s=a=>dr(a,oi(i.off,lt(a.pos,i.rot)),i.rot+a.rot&3,Kt());for(let a=0;a<Math.abs(n);a++){let o=Kt();for(let f of e){let p=s(Oi(f));p.min.x<o.min.x&&(o.min.x=p.min.x),p.min.z<o.min.z&&(o.min.z=p.min.z),p.max.x>o.max.x&&(o.max.x=p.max.x),p.max.z>o.max.z&&(o.max.z=p.max.z)}let c=(o.min.x+o.max.x)/2,l=(o.min.z+o.max.z)/2,u=lt({x:c,y:0,z:l},t),h={rot:t,off:{x:c-u.x,y:0,z:l-u.z}};for(let f of e){let p=Oi(f);if(!p)continue;let g=Ui(i,{off:p.pos,rot:p.rot}),y=Ui(r,Ui(h,g));p.pos={x:ar(y.off.x),y:ar(y.off.y),z:ar(y.off.z)},p.rot=y.rot&3}}Ut()}function My(){x.selection.size&&(Mp(1),it(),yt())}function Sp(n){for(let e of x.selection){let t=Oi(e);t&&(t.pos.y+=n)}x.selection.size&&_i()}function Sy(){let n=JSON.stringify({uid:Ic(),root:ca(x.root),collapsed:[...x.collapsed]}),e=URL.createObjectURL(new Blob([n],{type:"application/json"})),t=x.root.name||"Project",i=o=>String(o).padStart(2,"0"),r=new Date,s=`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())} ${i(r.getHours())}h${i(r.getMinutes())}m${i(r.getSeconds())}s`,a=document.createElement("a");a.href=e,a.download=`${t} -- ${s}.voxelier.json`,a.click(),URL.revokeObjectURL(e)}function Ey(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let e=n.files&&n.files[0];if(!e)return;let t=new FileReader;t.onload=()=>{try{if(!lp(JSON.parse(t.result)))throw new Error("not a Voxelier scene file");x.path=[x.root],x.editObject=null,x.sel3d=null,x.selection.clear(),x.tool==="measure"&&(x.tool="view"),cs(),Ut(),it(),zi(),di()}catch(i){alert("Import failed: "+i.message)}},t.readAsText(e)},n.click()}var Uy=Object.freeze({p:0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,n:0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,h:1n,a:0n,b:7n,Gx:0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Gy:0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n}),{p:Cr,n:pa,Gx:iA,Gy:rA,b:Ny}=Uy,fn=32,bo=64,Tp={publicKey:fn+1,publicKeyUncompressed:bo+1,signature:bo,seed:fn+fn/2},Et=(n="",e=Error)=>{let t=new e(n),{captureStackTrace:i}=Error;throw typeof i=="function"&&i(t,Et),t},sA=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Nn=(n,e,t="")=>{let i=sA(n),r=n?.length,s=e!==void 0;if(!i||s&&r!==e){let a=t&&`"${t}" `,o=s?` of length ${e}`:"",c=i?`length=${r}`:`type=${typeof n}`,l=a+"expected Uint8Array"+o+", got "+c;return i?Et(l,RangeError):Et(l,TypeError)}return n},fa=n=>new Uint8Array(n),Oy=(n,e)=>n.toString(16).padStart(e,"0"),ky=n=>{let e="";for(let t of Nn(n))e+=Oy(t,2);return e},Hi={_0:48,_9:57,A:65,F:70,a:97,f:102},Ty=n=>n>=Hi._0&&n<=Hi._9?n-Hi._0:n>=Hi.A&&n<=Hi.F?n-(Hi.A-10):n>=Hi.a&&n<=Hi.f?n-(Hi.a-10):void 0,zy=n=>{let e="hex invalid";if(typeof n!="string")return Et(e);let t=n.length,i=t/2;if(t%2)return Et(e);let r=fa(i);for(let s=0,a=0;s<i;s++,a+=2){let o=Ty(n.charCodeAt(a)),c=Ty(n.charCodeAt(a+1));if(o===void 0||c===void 0)return Et(e);r[s]=o*16+c}return r},Ay=()=>globalThis?.crypto?.subtle??Et("crypto.subtle must be defined, consider polyfill"),wo=(...n)=>{let e=0;for(let r of n)e+=Nn(r).length;let t=fa(e),i=0;for(let r of n)t.set(r,i),i+=r.length;return t},Pp=(n=fn)=>(globalThis?.crypto).getRandomValues(fa(n)),Ap=BigInt,ps=(n,e,t,i="bad number: out of range")=>typeof n!="bigint"?Et(i,TypeError):e<=n&&n<t?n:Et(i,RangeError),Ie=(n,e=Cr)=>{let t=n%e;return t>=0n?t:e+t},al=n=>Ie(n,pa),oA=(n,e)=>{(n===0n||e<=0n)&&Et("no inverse n="+n+" mod="+e);let t=Ie(n,e),i=e,r=0n,s=1n,a=1n,o=0n;for(;t!==0n;){let c=i/t,l=i%t,u=r-a*c,h=s-o*c;i=t,t=l,r=a,s=o,a=u,o=h}return i===1n?Ie(r,e):Et("no inverse")},Fy=n=>{let e=hA[n];return typeof e!="function"&&Et("hashes."+n+" not set"),e},Ry=(n,e,t)=>Nn(Fy(n)(e,t),fn,"digest"),Cy=(n,e,t)=>Promise.resolve(Fy(n)(e,t)).then(i=>Nn(i,fn,"digest"));var Ep=n=>n instanceof Ir?n:Et("Point expected"),By=n=>Ie(Ie(n*n)*n+Ny),Iy=n=>ps(n,0n,Cr),rl=n=>ps(n,1n,Cr),aA=n=>ps(n,1n,pa),cl=n=>!(n&1n),Hy=n=>Uint8Array.of(n),cA=n=>Hy(cl(n)?2:3),Vy=n=>{let e=By(rl(n)),t=1n;for(let i=e,r=(Cr+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%Cr),i=i*i%Cr;return Ie(t*t)!==e&&Et("sqrt invalid"),cl(t)?t:Ie(-t)};var Ir=class n{static BASE;static ZERO;X;Y;Z;constructor(e,t,i){this.X=Iy(e),this.Y=rl(t),this.Z=Iy(i),Object.freeze(this)}static CURVE(){return Uy}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?fs:new n(t,i,1n)}static fromBytes(e){Nn(e);let{publicKey:t,publicKeyUncompressed:i}=Tp,r,s=e.length,a=e[0],o=e.subarray(1),c=sl(o,0,fn);if(s===t&&(a===2||a===3)){let l=Vy(c);a===3&&(l=Ie(-l)),r=new n(c,l,1n)}return s===i&&a===4&&(r=new n(c,sl(o,fn,bo),1n)),r?r.assertValidity():Et("bad point: not on curve")}static fromHex(e){return n.fromBytes(zy(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=Ep(e),c=Ie(t*o),l=Ie(s*r),u=Ie(i*o),h=Ie(a*r);return c===l&&u===h}is0(){return this.equals(fs)}negate(){return new n(this.X,Ie(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=Ep(e),c=0n,l=Ny,u=0n,h=0n,f=0n,p=Ie(l*3n),g=Ie(t*s),y=Ie(i*a),_=Ie(r*o),m=Ie(t+i),w=Ie(s+a);m=Ie(m*w),w=Ie(g+y),m=Ie(m-w),w=Ie(t+r);let v=Ie(s+o);return w=Ie(w*v),v=Ie(g+_),w=Ie(w-v),v=Ie(i+r),u=Ie(a+o),v=Ie(v*u),u=Ie(y+_),v=Ie(v-u),f=Ie(c*w),u=Ie(p*_),f=Ie(u+f),u=Ie(y-f),f=Ie(y+f),h=Ie(u*f),y=Ie(g+g),y=Ie(y+g),_=Ie(c*_),w=Ie(p*w),y=Ie(y+_),_=Ie(g-_),_=Ie(c*_),w=Ie(w+_),g=Ie(y*w),h=Ie(h+g),g=Ie(v*w),u=Ie(m*u),u=Ie(u-g),g=Ie(m*y),f=Ie(v*f),f=Ie(f+g),new n(u,h,f)}subtract(e){return this.add(Ep(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return fs;if(aA(e),e===1n)return this;if(this.equals(_s))return bA(e).p;let i=fs,r=_s;for(let s=this;e>0n;s=s.double(),e>>=1n)e&1n?i=i.add(s):t&&(r=r.add(s));return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(this.equals(fs))return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let r=oA(i,Cr);return Ie(i*r)!==1n&&Et("inverse invalid"),{x:Ie(e*r),y:Ie(t*r)}}assertValidity(){let{x:e,y:t}=this.toAffine();return rl(e),rl(t),Ie(t*t)===By(e)?this:Et("bad point: not on curve")}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),r=mi(t);return e?wo(cA(i),r):wo(Hy(4),r,mi(i))}toHex(e){return ky(this.toBytes(e))}},_s=new Ir(iA,rA,1n),fs=new Ir(0n,1n,0n);Ir.BASE=_s;Ir.ZERO=fs;var lA=(n,e,t)=>_s.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),ms=n=>Ap("0x"+(ky(n)||"0")),sl=(n,e,t)=>ms(n.subarray(e,t)),uA=2n**256n,mi=n=>zy(Oy(ps(n,0n,uA),bo)),dA=n=>{let e=ms(Nn(n,fn,"secret key"));return ps(e,1n,pa,"invalid secret key: outside of range")};var Py="SHA-256",hA={hmacSha256Async:async(n,e)=>{let t=Ay(),i="HMAC",r=await t.importKey("raw",n,{name:i,hash:{name:Py}},!1,["sign"]);return fa(await t.sign(i,r,e))},hmacSha256:void 0,sha256Async:async n=>fa(await Ay().digest(Py,n)),sha256:void 0};var fA=n=>{if(n=n===void 0?Pp(Tp.seed):n,Nn(n),n.length<Tp.seed||n.length>1024)return Et("expected 48-1024b",RangeError);let e=Ie(ms(n),pa-1n);return mi(e+1n)},pA=n=>e=>{let t=fA(e);return{secretKey:t,publicKey:n(t)}};var Gy=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),Wy="aux",Xy="nonce",qy="challenge",Rp=(n,...e)=>{let t=Ry("sha256",Gy(n));return Ry("sha256",wo(t,t,...e))},Cp=(n,...e)=>Cy("sha256Async",Gy(n)).then(t=>Cy("sha256Async",wo(t,t,...e))),Lp=n=>{let e=dA(n),t=_s.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=cl(r)?e:al(-e),a=mi(i);return{d:s,px:a}},Dp=n=>al(ms(n)),Yy=(...n)=>Dp(Rp(qy,...n)),Jy=async(...n)=>Dp(await Cp(qy,...n)),jy=n=>Lp(n).px,_A=pA(jy),$y=(n,e,t)=>{let{px:i,d:r}=Lp(e);return{m:Nn(n),px:i,d:r,a:Nn(t,fn)}},Zy=n=>{let e=Dp(n);e===0n&&Et("sign failed: k is zero");let{px:t,d:i}=Lp(mi(e));return{rx:t,k:i}},Ky=(n,e,t,i)=>wo(e,mi(al(n+t*i))),Qy="invalid signature produced",mA=(n,e,t=Pp(fn))=>{let{m:i,px:r,d:s,a}=$y(n,e,t),o=Rp(Wy,a),c=mi(s^ms(o)),l=Rp(Xy,c,r,i),{rx:u,k:h}=Zy(l),f=Yy(u,r,i),p=Ky(h,u,f,s);return tx(p,i,r)||Et(Qy),p},gA=async(n,e,t=Pp(fn))=>{let{m:i,px:r,d:s,a}=$y(n,e,t),o=await Cp(Wy,a),c=mi(s^ms(o)),l=await Cp(Xy,c,r,i),{rx:u,k:h}=Zy(l),f=await Jy(u,r,i),p=Ky(h,u,f,s);return await nx(p,i,r)||Et(Qy),p},yA=(n,e)=>n instanceof Promise?n.then(e):e(n),ex=(n,e,t,i)=>{let r=Nn(n,bo,"signature"),s=Nn(e,void 0,"message"),a=Nn(t,fn,"publicKey");try{let o=ms(a),c=Vy(o),l=new Ir(o,c,1n).assertValidity(),u=mi(l.toAffine().x),h=sl(r,0,fn);ps(h,1n,Cr);let f=sl(r,fn,bo);ps(f,1n,pa);let p=wo(mi(h),u,s);return yA(i(p),g=>{let{x:y,y:_}=lA(l,f,al(-g)).toAffine();return!(!cl(_)||y!==h)})}catch{return!1}},tx=(n,e,t)=>ex(n,e,t,Yy),nx=async(n,e,t)=>ex(n,e,t,Jy),Up=Object.freeze({keygen:_A,getPublicKey:jy,sign:mA,verify:tx,signAsync:gA,verifyAsync:nx}),ol=8,xA=256,ix=Math.ceil(xA/ol)+1,Ip=2**(ol-1),vA=()=>{let n=[],e=_s,t=e;for(let i=0;i<ix;i++){t=e,n.push(t);for(let r=1;r<Ip;r++)t=t.add(e),n.push(t);e=t.double()}return n},Ly,Dy=(n,e)=>{let t=e.negate();return n?t:e},bA=n=>{let e=Ly||(Ly=vA()),t=fs,i=_s,r=2**ol,s=r,a=Ap(r-1),o=Ap(ol);for(let c=0;c<ix;c++){let l=Number(n&a);n>>=o,l>Ip&&(l-=s,n+=1n);let u=c*Ip,h=u,f=u+Math.abs(l)-1,p=c%2!==0,g=l<0;l===0?i=i.add(Dy(p,e[h])):t=t.add(Dy(g,e[f]))}return n!==0n&&Et("invalid wnaf"),{p:t,f:i}};var{floor:Op,min:wA,sin:MA}=Math,Nt="Trystero",Pr=(n,e)=>Array(n).fill(void 0).map(e),SA="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",On=n=>Pr(n,()=>SA[Op(Math.random()*62)]??"").join(""),Wt=On(20),yn=Promise.all.bind(Promise),zp=typeof window<"u",{entries:Kn,fromEntries:Fp,keys:en,values:Vi}=Object,Rt=()=>{},ll="candidate",Ze=n=>(n!==null&&clearTimeout(n),null),Ke=n=>new Error(`${Nt}: ${n}`),Gi=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:Bt(n??e),kn=(n,e)=>n instanceof Error?n:Ke(Gi(n,e)),EA=new TextEncoder,TA=new TextDecoder,zn=n=>EA.encode(n),Qn=n=>TA.decode(n),Wi=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),gs=(...n)=>n.join("@"),AA=(n,e)=>{let t=[...n],i=()=>{let s=MA(e++)*1e4;return s-Op(s)},r=t.length;for(;r;){let s=Op(i()*r--),a=t[r];t[r]=t[s],t[s]=a}return t},Bp=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?AA(e,ul(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),Bt=JSON.stringify,gi=n=>{try{return JSON.parse(n)}catch{throw Ke(`failed to parse JSON: ${n}`)}},ul=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,rx=3333,RA=6e4,Np={},_a=null,kp=null,Hp=()=>{_a||(_a=new Promise(n=>{kp=n}).finally(()=>{kp=null,_a=null}))},Vp=()=>{kp?.()},Gp=(n,e,t)=>{let i={},r=!1,s=!1,a=Rt;i.ready=new Promise(c=>a=c);let o=()=>{s=!1;let c=new WebSocket(n);c.onclose=()=>{if(s)return;if(s=!0,_a){_a.then(o);return}let l=Np[n]??=rx;setTimeout(o,Math.random()*l),Np[n]=wA(l*2,RA)},c.onmessage=l=>e(String(l.data)),i.socket=c,i.url=c.url,c.onopen=()=>{let l=r;r=!0,a(i),Np[n]=rx,l&&t?.()},i.send=l=>{c.readyState===1&&c.send(l)}};return o(),i};var Wp=n=>{let e={},t=new WeakMap,i=a=>{let o=t.get(a);if(!o)throw Ke("relay bookkeeping missing registration for relay client");return o},r=()=>{let a={},o=c=>a[c]??={};return{forKey:o,forRelay:c=>o(i(c))}},s=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{let c=e[a];return c||s(a,o())},keyOf:i,scoped:r,getSockets:()=>Fp(Kn(e).flatMap(([a,o])=>{let c=n(o);return c?[[a,c]]:[]}))}},sx=()=>{if(zp){let n=new AbortController;return addEventListener("online",Vp,{signal:n.signal}),addEventListener("offline",Hp,{signal:n.signal}),()=>n.abort()}return Rt};var Xp="AES-GCM",CA={},IA=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),PA=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},ys=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,zn(e))),Lr=async n=>CA[n]??=Array.from(await ys("SHA-1",n)).map(e=>e.toString(36)).join(""),ox=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},zn(`${n}:${e}:${t}`)),{name:Xp},!1,["encrypt","decrypt"]),ax=async(n,e)=>Wi(await ys("SHA-256",`${Nt}:${n}:${e}`)),cx="$",lx=",",ux=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(lx)+cx+IA(await crypto.subtle.encrypt({name:Xp,iv:t},await n,zn(e)))},dx=async(n,e)=>{let[t,i]=e.split(cx);return Qn(await crypto.subtle.decrypt({name:Xp,iv:new Uint8Array(t?.split(lx).map(Number)??[])},await n,PA(i??"")))};var ma=57333,LA=18e4,DA=20,hx=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(n){this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Pr(DA,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},ma)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){let e=[];for(;e.length<n&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){let e=this.leased.get(n);e&&(Ze(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:Rt,close:Rt,error:Rt}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){let e=this.leased.get(n);e&&(Ze(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},LA))}checkout(n,e,t){let i=this.shift(n),r=Math.max(0,n-i.length);r>0&&i.push(...Pr(r,this.makeOffer));let s=async(a,o=!1)=>{try{let c=await t(a);return e?(this.lease(a),{peer:a,offer:c,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:c}}catch(c){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return s(this.makeOffer(),!0);throw c}};return yn(i.map(a=>s(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{Ze(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}};var qp=Ke("incorrect password for overlapping room"),fx=(n,e,t)=>{let i=a=>ys("SHA-256",`${a}:${n}:${e}:${t}`).then(Wi),r=async(a,o,c)=>{if(!n)return;if(c){let u=On(36);await a({__trystero_pw:"challenge",c:u});let{data:h}=await o();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw qp;let f=await i(u);if(h.h!==f)throw qp;return}let{data:l}=await o();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw qp;await a({__trystero_pw:"response",h:await i(l.c)})};return{run:r,compose:a=>n||a?async(o,c,l,u)=>{await r(c,l,u),await a?.(o,c,l,u)}:void 0}},UA=n=>{let e=Gi(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},px=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:a})=>{let o={},c=(h,f)=>{let p=o[h];!p||f&&p.peer!==f||p.isActive||!p.didLocalHandshakePass||!p.didReceiveRemoteReady||(p.isActive=!0,p.handshakeTimer=Ze(p.handshakeTimer),s(h,p.peer))},l=(h,f,p)=>{let g=o[h];if(!g||g.peer!==f)return;let y=UA(p);e?.(h,y),a(h,f,Ke(y))},u=(h,f)=>{let p=o[h];!p||p.peer!==f||p.isActive||(p.didLocalHandshakePass=!0,r("",h).catch(g=>l(h,f,Ke(`failed sending handshake readiness: ${Gi(g,"unknown send failure")}`))),c(h,f))};return{addPeer:(h,f)=>{o[h]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(h,f)=>{let p=o[h];p&&(p.handshakeTimer=Ze(p.handshakeTimer),p.pendingHandshakePayloads.length=0,p.handshakeWaiters.splice(0).forEach(g=>g.reject(f)),delete o[h])},canReceiveFromPeer:(h,f)=>{let p=o[h];return!!(p&&(p.isActive||f))},start:(h,f)=>{let p=o[h];if(!p||p.peer!==f)return;p.handshakeTimer=setTimeout(()=>l(h,f,Ke(`handshake timed out after ${t}ms`)),t);let g=async(m,w)=>{await i(m,h,w)},y=()=>new Promise((m,w)=>{let v=o[h];if(!v||v.peer!==f){w(Ke("peer disconnected during handshake"));return}let T=v.pendingHandshakePayloads.shift();if(T){m(T);return}v.handshakeWaiters.push({resolve:m,reject:I=>w(I)})}),_=Wt<h;Promise.resolve(n?.(h,g,y,_)).then(()=>u(h,f)).catch(m=>l(h,f,kn(m,"handshake failed")))},receiveHandshakeData:(h,f,p)=>{let g=o[f];if(!g||g.isActive)return;let y=p===void 0?{data:h}:{data:h,metadata:p},_=g.handshakeWaiters.shift();if(_){_.resolve(y);return}g.pendingHandshakePayloads.push(y)},receiveHandshakeReady:h=>{let f=o[h];!f||f.isActive||(f.didReceiveRemoteReady=!0,c(h))}}};var NA=15e3,OA=5e3,_x="icegatheringstatechange",kA="iceconnectionstatechange",ga="offer",zA="answer",FA=/out of range/i,mx=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Yp=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{let a=new(i??RTCPeerConnection)({iceServers:BA.concat(r??[]),...t}),o={},c=[],l=[],u=e!==!1,h=[],f=[],p=!1,g=!1,y=null,_=null,m=!1,w=()=>_=Ze(_),v=()=>{m||(m=!0,w(),o.close?.())},T=N=>{o.signal?o.signal(N):c.push(N)},I=N=>{let W=o.signal;o.signal=H=>{W?.(H),N(H)},c.length>0&&c.splice(0).forEach(H=>o.signal?.(H))},P=N=>s?mx(N):N,U=N=>{if(!s||typeof N.candidate!="string")return N;let W=mx(N.candidate);return W===N.candidate?N:{...N,candidate:W}},O=N=>({type:N.localDescription?.type??ga,sdp:P(N.localDescription?.sdp??"")}),S=()=>{let N=a.remoteDescription?.sdp;return N?N.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},R=()=>(a.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,B=N=>{if(!a.remoteDescription)return!1;let W=R();if(typeof N.sdpMLineIndex=="number"&&W>0&&N.sdpMLineIndex>=W)return!1;let H=S();return!(H&&N.usernameFragment&&N.usernameFragment!==H)},J=async N=>{try{return await a.addIceCandidate(N),!0}catch(W){if(W instanceof Error&&FA.test(W.message)&&typeof N.sdpMLineIndex=="number")return!1;throw W}},ne=async()=>{if(!a.remoteDescription||h.length===0)return;let N=h.splice(0),W=[];for(let H of N){if(!B(H)){W.push(H);continue}await J(H)||W.push(H)}W.length>0&&h.push(...W)},M=async N=>{if(B(N)){await J(N)||h.push(N);return}h.push(N)},D=N=>{N.binaryType="arraybuffer",N.bufferedAmountLowThreshold=65535,N.onmessage=W=>{let H=W.data;o.data?o.data(H):l.push(H)},N.onopen=()=>o.connect?.(),N.onclose=v,N.onerror=({error:W})=>o.error?.(kn(W,"data channel error"))},k=async N=>{let W=null;try{await Promise.race([new Promise(H=>{let ee=()=>{N.iceGatheringState==="complete"&&(N.removeEventListener(_x,ee),H())};N.addEventListener(_x,ee),ee()}),new Promise(H=>{W=setTimeout(H,NA)})])}finally{Ze(W)}return O(N)},F=async()=>{let N=u?O(a):await k(a);return T(N),N};n?(y=a.createDataChannel("data"),D(y)):a.ondatachannel=({channel:N})=>{y=N,D(N)};let V=async(N=!1)=>{if(a.connectionState!=="closed")try{return p=!0,N&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&a.localDescription?.type===ga&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(N?await a.createOffer({iceRestart:!0}):void 0),await F()}catch(W){o.error?.(kn(W,"failed to create local offer"))}finally{p=!1}};a.onnegotiationneeded=async()=>V(!1),a.onicecandidate=({candidate:N})=>{if(!u||!N)return;let W=U(typeof N.toJSON=="function"?N.toJSON():{candidate:N.candidate,sdpMid:N.sdpMid,sdpMLineIndex:N.sdpMLineIndex,usernameFragment:N.usernameFragment});T({type:ll,sdp:JSON.stringify(W)})};let q=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){v();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){w();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){_||(_=setTimeout(()=>{_=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&v()},OA));return}};a.onconnectionstatechange=q,a.addEventListener(kA,q),a.ontrack=N=>{let W=N.streams[0];if(W){if(!o.track&&!o.stream){f.push({track:N.track,stream:W});return}o.track?.(N.track,W),o.stream?.(W)}},a.onremovestream=N=>o.stream?.(N.stream);let Q=n?new Promise(N=>I(W=>{W.type===ga&&N(W)})):Promise.resolve();return n&&queueMicrotask(()=>{!p&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&a.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:a,get channel(){return y},get isDead(){return a.connectionState==="closed"},getOffer:async(N=!1)=>{if(n)return N?V(!0):a.localDescription?.type===ga?u?O(a):k(a):Q},async signal(N){if(N.type==="candidate"){try{let W=JSON.parse(N.sdp);W&&typeof W=="object"&&await M(U(W))}catch(W){o.error?.(kn(W,"failed to parse remote candidate"))}return}if(!(y?.readyState==="open"&&!N.sdp?.includes("a=rtpmap")))try{let W={...N,sdp:P(N.sdp)};if(N.type===ga){if(p||a.signalingState!=="stable"&&!g){if(n)return;await yn([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(W)])}else await a.setRemoteDescription(W);return await ne(),await a.setLocalDescription(),await F()}if(N.type===zA){g=!0;try{await a.setRemoteDescription(W),await ne()}finally{g=!1}}}catch(W){o.error?.(kn(W,"failed to apply remote signal"))}},sendData:N=>y?.send(N),destroy:()=>{w(),y?.close(),a.close(),p=!1,g=!1,v()},setHandlers:N=>{let{signal:W,...H}=N;Object.assign(o,H),o.data&&l.length>0&&l.splice(0).forEach(ee=>o.data?.(ee)),W&&I(W),(o.track||o.stream)&&f.length>0&&f.splice(0).forEach(({track:ee,stream:ce})=>{o.track?.(ee,ce),o.stream?.(ce)})},offerPromise:Q,addStream:N=>N.getTracks().forEach(W=>a.addTrack(W,N)),removeStream:N=>a.getSenders().filter(W=>W.track&&N.getTracks().includes(W.track)).forEach(W=>a.removeTrack(W)),addTrack:(N,W)=>a.addTrack(N,W),removeTrack:N=>{let W=a.getSenders().find(H=>H.track===N);W&&a.removeTrack(W)},replaceTrack:(N,W)=>{let H=a.getSenders().find(ee=>ee.track===N);if(H)return H.replaceTrack(W)}}},BA=[...Pr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n}));var HA=Object.getPrototypeOf(Uint8Array),Jp=32,VA=0,jp=32,gx=34,$p=35,dl=36,xs=16*2**10-dl,ya=255,GA=65535,yx="bufferedamountlow",xx="close",vx="error",WA=1e4,XA=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),qA=(n,e=WA)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,r=null,s=c=>{i||(i=!0,n.removeEventListener(yx,a),n.removeEventListener(xx,o),n.removeEventListener(vx,o),Ze(r),t(c))},a=()=>s(!0),o=()=>s(!1);if(n.addEventListener(yx,a),n.addEventListener(xx,o),n.addEventListener(vx,o),r=setTimeout(()=>s(!1),e),n.readyState!=="open"){s(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&s(!0)}),bx=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{let r={},s={},a={},o={},c=(h,f,{includePending:p=!1}={})=>(h?Array.isArray(h)?h:[h]:e(p)).flatMap(g=>{let y=n(g,p);return y?[Promise.resolve(f(g,y))]:(console.warn(`${Nt}: no peer with id ${g} found`),[])});return{makeInternalAction:(h,f={})=>{let p=s[h];if(r[h]&&p){let w=r[h].options;if(w.sendToPending!==!!f.sendToPending||w.receiveWhilePending!==!!f.receiveWhilePending)throw Ke(`action type "${h}" cannot be redefined`);return p}if(!h)throw Ke("action type argument is required");let g=zn(h);if(g.byteLength>Jp)throw Ke(`action type string "${h}" (${g.byteLength}b) exceeds byte limit (${Jp}). Hint: choose a shorter name.`);let y={sendToPending:!!f.sendToPending,receiveWhilePending:!!f.receiveWhilePending},_=new Uint8Array(Jp);_.set(g);let m=0;return r[h]={onComplete:Rt,onProgress:Rt,setOnComplete:w=>{r[h].onComplete=w;let v=o[h];v?.length&&(delete o[h],v.forEach(({payload:T,peerId:I,metadata:P})=>w(T,I,P)))},setOnProgress:w=>{r[h].onProgress=w},send:async(w,v,T,I,P)=>{i(P);let U=typeof w;if(U==="undefined")throw Ke("action data cannot be undefined");let O=U!=="string",S=w instanceof Blob,R=S||w instanceof ArrayBuffer||w instanceof HA,B=T!==void 0,J=R?XA(S?await w.arrayBuffer():w):zn(O?Bt(w):w),ne=B?zn(Bt(T)):null,M=Math.ceil(J.byteLength/xs)+(B?1:0)||1,D=Pr(M,(k,F)=>{let V=F===M-1,q=!!(B&&F===0),Q=new Uint8Array(dl+(q?ne?.byteLength??0:V?J.byteLength-xs*(M-(B?2:1)):xs));return Q.set(_),Q.set([m>>8,m&ya],jp),Q.set([Number(V)|Number(q)<<1|Number(R)<<2|Number(O)<<3],gx),Q.set([Math.round((F+1)/M*ya)],$p),Q.set(B?q?ne??new Uint8Array:J.subarray((F-1)*xs,F*xs):J.subarray(F*xs,(F+1)*xs),dl),Q});return m=m+1&GA,await yn(c(v,async(k,F)=>{let{channel:V}=F,q=0;for(;q<M;){i(P);let Q=D[q];if(!Q)break;if(V&&V.bufferedAmount>V.bufferedAmountLowThreshold){let H=await qA(V);if(i(P),!H)break}let N=n(k,y.sendToPending);if(!N||N!==F)break;F.sendData(Q),q++;let W=Q[$p]??ya;I?.(W/ya,k,T)}},{includePending:y.sendToPending})),[]},options:y},s[h]={send:r[h].send,onMessage:r[h].setOnComplete,onProgress:r[h].setOnProgress}},handleData:(h,f)=>{let p=new Uint8Array(f),g=Qn(p.subarray(VA,jp)).replaceAll("\0",""),y=r[g];if(!t(h,!!y?.options.receiveWhilePending))return;let _=(p[jp]??0)<<8|(p[33]??0),m=p[gx]??0,w=p[$p]??0,v=p.subarray(dl),T=!!(m&1),I=!!(m&2),P=!!(m&4),U=!!(m&8);a[h]??={},a[h][g]??={};let O=a[h][g][_]??={chunks:[]};if(I?O.meta=gi(Qn(v)):O.chunks.push(v),y?.onProgress(w/ya,h,O.meta),!T)return;let S=new Uint8Array(O.chunks.reduce((B,J)=>B+J.byteLength,0));O.chunks.reduce((B,J)=>(S.set(J,B),B+J.byteLength),0),delete a[h][g][_];let R=P?S:U?gi(Qn(S)):Qn(S);if(y){y.onComplete(R,h,O.meta);return}(o[g]??=[]).push({payload:R,peerId:h,...O.meta===void 0?{}:{metadata:O.meta}})},clearPeer:h=>{delete a[h]}}};var YA=500,Mo=(n,e)=>{let t=Ke(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Zp=n=>{if(n?.aborted)throw Mo("aborted","operation aborted")},wx=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,JA=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,hl=(n,e)=>e===void 0?n:{...n,metadata:e},Mx=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{let i={},r={},s=bx({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Zp}),a=s.makeInternalAction,o=s.handleData,c=p=>{let g=r[p];g&&(Ze(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete r[p])},l=(p,g)=>{Kn(r).forEach(([y,_])=>{_.peerId===p&&(c(y),_.reject(g))})},u=(p,g)=>{s.clearPeer(p),l(p,Mo("disconnected",Gi(g,"peer disconnected")))},h=a("@_response");return h.onMessage((p,g,y)=>{let _=JA(y);if(!_)return;let m=r[_.r];if(!(!m||m.peerId!==g)){if(c(_.r),_.e!==void 0){m.reject(Mo("rejected",_.e));return}m.resolve(p)}}),{makeAction:(p,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw Ke('request actions must use kind: "request"');let y=g?.kind??"message",_=a(p),m=i[p];if(m){if(m.kind!==y)throw Ke(`action type "${p}" cannot be redefined`);return m.action}let w={kind:y,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:g?.onReceiveProgress??null},v=(M,D)=>M?(k,F)=>M(k,hl({peerId:F},D)):void 0,T=M=>{w.onReceiveProgress=M},I=(M,D,k)=>{let F=w.kind==="request"?wx(k):null;w.onReceiveProgress?.(M,hl({peerId:D},F?F.m:k))};if(_.onProgress(I),y==="message"){let M=g?.onMessage??null,D=()=>{if(!M)return;let F=M;w.pendingMessages.splice(0).forEach(({payload:V,peerId:q,metadata:Q})=>{Promise.resolve().then(()=>F(V,hl({peerId:q},Q))).catch(N=>console.error(`${Nt} action handler error:`,N))})},k={send:async(F,V={})=>{await _.send(F,V.target,V.metadata,v(V.onProgress,V.metadata),V.signal)},get onMessage(){return M},set onMessage(F){M=F,D()},get onReceiveProgress(){return w.onReceiveProgress},set onReceiveProgress(F){T(F)}};return _.onMessage((F,V,q)=>{if(!M){w.pendingMessages.push(q===void 0?{payload:F,peerId:V}:{payload:F,peerId:V,metadata:q});return}let Q=M;Promise.resolve().then(()=>Q(F,hl({peerId:V},q))).catch(N=>console.error(`${Nt} action handler error:`,N))}),w.action=k,i[p]=w,D(),k}let P=g?.onRequest??null,U=M=>{Ze(M.timer);let D=w.pendingRequests.indexOf(M);D>-1&&w.pendingRequests.splice(D,1)},O=(M,D,k)=>{h.send(null,M,{r:D,e:Gi(k,"request failed")})},S=(M,D)=>{U(M),Promise.resolve().then(()=>D(M.payload,{peerId:M.peerId,...M.metadata===void 0?{}:{metadata:M.metadata},signal:M.controller.signal})).then(async k=>{if(k===void 0)throw Ke("request handler returned undefined");await h.send(k,M.peerId,{r:M.requestId})}).catch(k=>O(M.peerId,M.requestId,k)).finally(()=>M.controller.abort())},R=()=>{P&&w.pendingRequests.slice().forEach(M=>S(M,P))},B=(M,D,k,F)=>{if(P){S({payload:M,peerId:D,...k===void 0?{}:{metadata:k},requestId:F,controller:new AbortController,timer:null},P);return}let V={payload:M,peerId:D,...k===void 0?{}:{metadata:k},requestId:F,controller:new AbortController,timer:setTimeout(()=>{U(V),V.controller.abort(),O(D,F,"request handler unavailable")},YA)};w.pendingRequests.push(V)},J=async(M,D)=>{let{target:k,metadata:F,onProgress:V,signal:q,timeoutMs:Q}=D;if(Zp(q),!n(k,!1))throw Mo("disconnected",`no active peer with id ${k}`);let N=On(20),W=new Promise((H,ee)=>{let ce={peerId:k,resolve:H,reject:ee,timer:null,...q===void 0?{}:{signal:q}},se=()=>{c(N),ee(Mo("aborted","operation aborted"))};q&&(ce.abortHandler=se,q.addEventListener("abort",se,{once:!0})),r[N]=ce}).catch(H=>{throw H});try{await _.send(M,k,F===void 0?{r:N}:{r:N,m:F},v(V,F),q);let H=r[N];return H&&Q!==void 0&&(H.timer=setTimeout(()=>{c(N),H.reject(Mo("timeout","request timed out"))},Q)),await W}catch(H){throw c(N),H}},ne={request:J,requestMany:async(M,D)=>(Zp(D.signal),await yn(D.targets.map(async k=>{try{let F={peerId:k,status:"fulfilled",value:await J(M,{target:k,...D.metadata===void 0?{}:{metadata:D.metadata},...D.timeoutMs===void 0?{}:{timeoutMs:D.timeoutMs},...D.onProgress===void 0?{}:{onProgress:D.onProgress},...D.signal===void 0?{}:{signal:D.signal}})};return D.onResult?.(F),F}catch(F){let V=kn(F,"request failed");if(V.kind==="aborted"||!V.kind)throw V;let q=V.kind==="timeout"?{peerId:k,status:"timeout"}:V.kind==="disconnected"?{peerId:k,status:"disconnected"}:{peerId:k,status:"rejected",error:V};return D.onResult?.(q),q}}))),get onRequest(){return P},set onRequest(M){P=M,R()},get onReceiveProgress(){return w.onReceiveProgress},set onReceiveProgress(M){T(M)}};return _.onMessage((M,D,k)=>{let F=wx(k);F&&B(M,D,F.m,F.r)}),w.action=ne,i[p]=w,R(),ne},makeInternalAction:a,handleData:o,clearPeer:u}};var Sx=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Ex=n=>e=>{let t=n.get(e);return t||(t=On(20),n.set(e,t)),t},Kp=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map;return{getStreamKey:Ex(n),getTrackKey:Ex(e),rememberRemoteStream:(a,o,c)=>{t.set(a,o),c&&i.set(c,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,c,l,u)=>{let h={track:o,stream:c};r.set(a,h),l&&s.set(l,h),u&&i.set(u,c)},getRemoteTrack:(a,o)=>r.get(a)??(o?s.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},Tx=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{let i={},r={},s=Kp(),a={onPeerStream:null,onPeerTrack:null},o=(u,h,f,p)=>{e(u)&&(t(u)?.__trysteroMedia?.rememberRemoteStream(h,f,typeof f.id=="string"?f.id:void 0),a.onPeerStream?.(f,u,p))},c=(u,h,f,p,g)=>{e(u)&&(t(u)?.__trysteroMedia?.rememberRemoteTrack(h,f,p,typeof f.id=="string"?f.id:void 0,typeof p.id=="string"?p.id:void 0),a.onPeerTrack?.(f,p,u,g))},l=(u,h,f,p,g,y={})=>{let _={k:h,...y,...f===void 0?{}:{m:f}};return n(u,async(m,w)=>{await p(_,m),g(w)})};return{addStream:(u,h,f)=>l(h.target,s.getStreamKey(u),h.metadata,f,p=>p.addStream(u),{s:u.id}),removeStream:(u,h)=>{n(h,(f,p)=>p.removeStream(u))},addTrack:(u,h,f,p)=>l(f.target,s.getTrackKey(u),f.metadata,p,g=>g.addTrack(u,h),{s:h.id,t:u.id}),removeTrack:(u,h)=>{n(h,(f,p)=>p.removeTrack(u))},replaceTrack:(u,h,f,p)=>l(f.target,s.getTrackKey(h),f.metadata,p,g=>g.replaceTrack(u,h),{t:u.id}),receiveStreamMeta:(u,h)=>{if(!e(h))return;let f=Sx(u);if(!f)return;let p=t(h)?.__trysteroMedia?.getRemoteStream(f.key,f.streamId);if(p){o(h,f.key,p,f.metadata);return}(i[h]??=[]).push(f)},receiveTrackMeta:(u,h)=>{if(!e(h))return;let f=Sx(u);if(!f)return;let p=t(h)?.__trysteroMedia?.getRemoteTrack(f.key,f.trackId);if(p){c(h,f.key,p.track,p.stream,f.metadata);return}(r[h]??=[]).push(f)},receiveRemoteStream:(u,h)=>{if(!e(u))return;let f=i[u]?.shift();f&&o(u,f.key,h,f.metadata)},receiveRemoteTrack:(u,h,f)=>{if(!e(u))return;let p=r[u]?.shift();p&&c(u,p.key,h,f,p.metadata)},clearPeer:u=>{delete i[u],delete r[u]},get onPeerStream(){return a.onPeerStream},set onPeerStream(u){a.onPeerStream=u},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(u){a.onPeerTrack=u}}};var Ax="beforeunload",jA=1e4,Dr=n=>"@_"+n,xa=new Set,Rx=()=>xa.forEach(n=>n()),$A=n=>(xa.add(n),xa.size===1&&addEventListener(Ax,Rx),()=>{xa.delete(n),xa.size||removeEventListener(Ax,Rx)}),Cx=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=jA,isPassive:a=!1}={})=>{let o={},c={},l={},u={onPeerJoin:null,onPeerLeave:null},h=Rt,f=null,p=(M,D,{includePending:k=!1}={})=>(M?Array.isArray(M)?M:[M]:en(k?o:c)).flatMap(F=>{let V=k?o[F]:c[F];return V?[Promise.resolve(D(F,V))]:(console.warn(`${Nt}: no peer with id ${F} found`),[])}),g=Tx({iterate:(M,D)=>p(M,(k,F)=>D(k,F)),isActive:M=>!!c[M],getSharedMediaPeer:M=>o[M]??null}),y=Mx({getPeer:(M,D)=>(D?o:c)[M],getPeerIds:M=>en(M?o:c),canReceiveFromPeer:(M,D)=>!!f?.canReceiveFromPeer(M,D)}),_=y.makeInternalAction,m=y.handleData,w=y.makeAction,v=(M,D=Ke("peer disconnected"))=>{let k=kn(D,"peer disconnected");f?.clearPeer(M,k),delete o[M],delete c[M],y.clearPeer(M,k),l[M]?.splice(0).forEach(F=>F.reject(k)),delete l[M],g.clearPeer(M)},T=(M,D,k)=>{let F=o[M];if(!F||D&&F!==D)return;let V=!!c[M];v(M,k),F.destroy(),V&&u.onPeerLeave?.(M),e(M)},I=async()=>{await B.send(""),await new Promise(M=>setTimeout(M,99)),Kn(o).forEach(([M,D])=>{D.destroy(),v(M,Ke("room left"))}),h(),t()},P=_(Dr("ping")),U=_(Dr("pong")),O=_(Dr("signal")),S=_(Dr("stream")),R=_(Dr("track")),B=_(Dr("leave"),{sendToPending:!0,receiveWhilePending:!0}),J=_(Dr("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),ne=_(Dr("hsready"),{sendToPending:!0,receiveWhilePending:!0});return f=px({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:J.send,sendHandshakeReady:ne.send,onActivate:(M,D)=>{c[M]=D,u.onPeerJoin?.(M)},onFailure:(M,D,k)=>T(M,D,k)}),P.onMessage((M,D)=>U.send("",D)),U.onMessage((M,D)=>{let k=l[D];k?.shift()?.resolve(),k&&!k.length&&delete l[D]}),O.onMessage((M,D)=>{c[D]&&o[D]?.signal(M)}),S.onMessage((M,D)=>g.receiveStreamMeta(M,D)),R.onMessage((M,D)=>g.receiveTrackMeta(M,D)),B.onMessage((M,D)=>T(D,void 0,Ke("peer left room"))),J.onMessage((M,D,k)=>f?.receiveHandshakeData(M,D,k)),ne.onMessage((M,D)=>f?.receiveHandshakeReady(D)),n((M,D)=>{let k=o[D];if(k){if(k===M)return;k.destroy(),v(D,Ke("peer replaced"))}o[D]=M,f?.addPeer(D,M),M.setHandlers({data:F=>m(D,F),stream:F=>g.receiveRemoteStream(D,F),track:(F,V)=>g.receiveRemoteTrack(D,F,V),signal:F=>{c[D]&&O.send(F,D)},close:()=>T(D,M,Ke("peer disconnected")),error:F=>{console.error(`${Nt} peer error:`,F),T(D,M,F)}}),f?.start(D,M)}),zp&&(h=$A(()=>I().catch(Rt))),{makeAction:w,leave:I,ping:async M=>{if(!c[M])throw Ke(`no active peer with id ${M}`);let D=Date.now();return await new Promise((k,F)=>{let V=l[M]??=[],q=()=>{let N=l[M];if(!N)return;let W=N.indexOf(Q);W>-1&&N.splice(W,1),N.length||delete l[M]},Q={resolve:()=>{q(),k()},reject:N=>{q(),F(N)}};V.push(Q),P.send("",M).catch(N=>Q.reject(kn(N,"peer disconnected")))}),Date.now()-D},isPassive:()=>a,getPeers:()=>Fp(Kn(c).map(([M,D])=>[M,D.connection])),addStream:(M,D={})=>g.addStream(M,D,S.send),removeStream:(M,D={})=>{g.removeStream(M,D.target)},addTrack:(M,D,k={})=>g.addTrack(M,D,k,R.send),removeTrack:(M,D={})=>{g.removeTrack(M,D.target)},replaceTrack:(M,D,k={})=>g.replaceTrack(M,D,k,R.send),get onPeerJoin(){return u.onPeerJoin},set onPeerJoin(M){u.onPeerJoin=M,M&&en(c).forEach(D=>M(D))},get onPeerLeave(){return u.onPeerLeave},set onPeerLeave(M){u.onPeerLeave=M},get onPeerStream(){return g.onPeerStream},set onPeerStream(M){g.onPeerStream=M},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(M){g.onPeerTrack=M}}};var Px=1,Lx=2,Ix=(n,e)=>{let t=zn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=Px,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},ZA=(n,e)=>{let t=zn(n),i=new Uint8Array(4+t.byteLength);return i[0]=Lx,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},KA=n=>{let e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===Px){let r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:Qn(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==Lx||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:Qn(e.subarray(4,i)),isPresent:e[1]===1}},Dx=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},Ux=n=>{if(Dx(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},Nx=class{byApp={};roomPresenceHandlers={};getMap(n){return this.byApp[n]??={}}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return Dx(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(ZA(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],r=i?.[e];if(!r||r.isClosing)return;r.idleTimer=Ze(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();let s=Vi(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(a=>{a.handlers.close?.(),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),en(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let r=this.getMap(n),s=r[e];if(s){if(s.idleTimer=Ze(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}let a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Kp(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${Nt} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,c)=>this.dispatchTrack(a,o,c)}),r[e]=a,a}bind(n,e,t,{onDetach:i}){let r=t.bindings[n];if(r)return t.idleTimer=Ze(t.idleTimer),{proxy:r.proxy,isNew:!1};let s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Rt,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=en(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Ix(s.roomToken,c))},destroy:()=>a(),setHandlers:c=>{let{signal:l,...u}=c;Object.assign(s.handlers,u),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{let l=t.streamOwners.get(c)??new Set,u=l.size===0;l.add(n),t.streamOwners.set(c,l),u&&t.peer.addStream(c)},removeStream:c=>{let l=t.streamOwners.get(c);l&&(l.delete(n),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{let u=t.trackOwners.get(c)??{stream:l,rooms:new Set},h=u.rooms.size===0;return u.stream=l,u.rooms.add(n),t.trackOwners.set(c,u),h?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(f=>f.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{let l=t.trackOwners.get(c);l&&(l.rooms.delete(n),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{let u=t.trackOwners.get(c);if(u){t.trackOwners.delete(c);let h=t.trackOwners.get(l)??{stream:u.stream,rooms:new Set};u.rooms.forEach(f=>h.rooms.add(f)),t.trackOwners.set(l,h)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=o,s.detach=a,t.bindings[n]=s,t.controlRoomId??=n,t.idleTimer=Ze(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;let l=t.pendingDataByToken.get(c);l?.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(u=>t.peer.sendData(Ix(c,u))),this.flushBindingQueues(s)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||en(n.bindings).length>0||(n.idleTimer=Ze(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||en(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=Vi(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){let{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){let t=KA(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}let i=n.bindingsByToken[t.roomToken];if(!i){let r=n.pendingDataByToken.get(t.roomToken)??[];r.push(t.payload),n.pendingDataByToken.set(t.roomToken,r);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){Vi(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}};var QA=23333,e2=12,t2=7533,n2=23333,Qp="__legacy__",pl="offer-placeholder",i2=["offer","answer","candidate"],r2=n=>{if(typeof n=="string")try{let e=gi(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},va=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,s2=n=>i2.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),kx=(n,e,t,i,r,s)=>{n.toCipher(e).then(a=>{n.isLeaving()||!s()||i(t,Bt(r(a.sdp)))})},o2=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),a2=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),c2=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${a2(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,ml=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:c2(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},So=(n,e)=>n[e]??=o2(),An=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},fl=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=Ze(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,An(n))},_l=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,An(n))},e_=(n,e)=>{n.offerRelayTimers[e]=Ze(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,An(n))},Ox=(n,e)=>{n?.offerRelays[e]===pl&&e_(n,e)},l2=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Eo=(n,e)=>{let t=n.offerAnswered;n.offerExpiryTimer=Ze(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,r)=>e_(n,r)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||l2(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,An(n)},u2=(n,e,t,i)=>{Ze(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&ml(n,r,t),i.destroy(),fl(r,i),n.checkDeactivate())},n2)},d2=async(n,e,t)=>{let i=t?[t,Qp]:[Qp];for(let r of i){let s=n.pendingCandidates[r];if(s?.length){delete n.pendingCandidates[r];for(let a of s)await e.signal(a)}}},zx=(n,e,t,i=ma)=>{Ze(e.offerExpiryTimer);let r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&ml(n,s,t),Eo(s,n.offerPool),n.checkDeactivate())},i)},h2=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let r=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!r)throw Ke("failed to allocate offer peer");let{peer:s,offer:a}=r;e.offerPeer=s,e.offerId=On(e2),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],An(e);let o=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&ml(n,e,t),Eo(e,n.offerPool)),n.disconnectPeer(s,t),n.checkDeactivate()};return s.setHandlers({connect:()=>n.connectPeer(s,t,i),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:o,error:o}),zx(n,e,t),{peer:s,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),f2=async(n,e,t,i,r)=>{if(i){n.attachSharedPeerToRoom(t,i);return}let s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Ox(s,e);return}if(s.offerRelays[e]!==pl)return;let[a,o]=await yn([Lr(gs(n.rootTopicPlaintext,t)),h2(n,s,t,e)]);if(n.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==pl){Ox(s,e);return}s.offerRelayTimers[e]=Ze(s.offerRelayTimers[e]),s.offerRelays[e]=!0,An(s),s.offerRelayTimers[e]=setTimeout(()=>g2(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==o.peer||s.offerId!==o.offerId||l.type!=="candidate"||kx(n,l,a,r,u=>({peerId:Wt,offerId:o.offerId,candidate:u,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===o.peer&&s.offerId===o.offerId))},r(a,Bt({peerId:Wt,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>s.offerSignalRelays[e]?.(l))},p2=async(n,e,t,i,r,s,a)=>{let o=So(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;let c=!!(o.offerPeer||o.offerRelays.some(Boolean));if((c||s)&&Wt<t)return;c&&Eo(o,n.offerPool);let l=n.initPeer(!1,n.config);o.answeringPeer=l,o.answerSent=!1,o.connectionErrorReported=!1,u2(n,o,t,l),An(o);let u=()=>{o.answeringPeer===l&&!o.connectedPeer&&o.answerSent&&ml(n,o,t),fl(o,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t,e),close:u,error:u});let h;try{h=await n.toPlain({type:"offer",sdp:i})}catch{fl(o,l),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){fl(o,l);return}let f=await Lr(gs(n.rootTopicPlaintext,t));n.isLeaving()||(l.setHandlers({signal:p=>{n.isLeaving()||o.answeringPeer!==l||l.isDead||p.type!=="answer"&&p.type!=="candidate"||kx(n,p,f,a,g=>{let y={peerId:Wt};return p.type==="answer"?(o.answerSent=!0,y.answer=g):y.candidate=g,r&&(y.offerId=r),n.isPassive&&(y.passive=!0),y},()=>o.answeringPeer===l&&!l.isDead)}}),await l.signal(h),await d2(o,l,r))},_2=async(n,e,t,i,r)=>{let s;try{s=await n.toPlain({type:ll,sdp:t})}catch{return}let a=So(n.peerStates,e),o=i&&a?.offerPeer&&a.offerId===i?a.offerPeer:null,c=a?.answeringPeer??null,l=!i&&a?.offerPeer?a.offerPeer:null,u=r&&!r.isDead?r:o??c??l;if(!u||u.isDead){let h=i??Qp;(a.pendingCandidates[h]??=[]).push(s);return}u.signal(s)},m2=async(n,e,t,i,r,s)=>{let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(s)n.offerPool.claimLeased(s),s.setHandlers({connect:()=>n.connectPeer(s,t,e),close:()=>n.disconnectPeer(s,t)}),s.signal(a);else{let o=n.peerStates[t];if(!o||!o.offerPeer||o.offerAnswered||r&&o.offerId&&r!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,zx(n,o,t,QA),o.offerPeer.signal(a)}},g2=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(e_(i,t),n.checkDeactivate())},Fx=n=>e=>async(t,i,r)=>{if(n.isLeaving())return;let s=r2(i);if(!s||s2(s))return;let a=va(s,"peerId")??"",o=va(s,"offer"),c=va(s,"answer"),l=va(s,"candidate"),u=va(s,"offerId"),h=s.peer,f=s.hasOutgoingOffer===!0,p=s.passive===!0;if(!a||a===Wt)return;let[g,y]=await yn([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==y||n.isPassive&&p||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let _=n.peerStates[a],m=_?.connectedPeer;if(m&&_){let T=Ux(m);if(T==="live"){_.connectedPeerUnhealthySinceMs=null;return}if(T==="stale")_l(_,a,"message-from-stale-peer");else{let I=Date.now(),P=_.connectedPeerUnhealthySinceMs??I;if(_.connectedPeerUnhealthySinceMs=P,I-P<t2)return;_l(_,a,"message-from-prolonged-disconnect")}}let w=n.sharedPeers.get(n.appId,a);w&&n.sharedPeers.getHealth(w.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),w=void 0);let v=!!(a&&!o&&!c&&!l);if(v&&!w){let T=So(n.peerStates,a),I=Wt<a;if(T.answeringPeer||T.connectedPeer||T.offerAnswered)return;if(!I&&!T.offerPeer){let P=await Lr(gs(n.rootTopicPlaintext,a));!n.isLeaving()&&!T.connectedPeer&&r(P,Bt({peerId:Wt}));return}if(T.offerRelays[e])return;T.offerRelays[e]=pl,An(T)}if(w&&(o||c||l)){if(w.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,w);return}if(v)return f2(n,e,a,w,r);if(o)return p2(n,e,a,o,u,f,r);if(l)return _2(n,a,l,u,h);if(c)return m2(n,e,a,c,u,h)};var t_=5333,y2=[233,533,1333],x2=7533,v2=123333,n_=({init:n,subscribe:e,announce:t,deactivate:i})=>{let r={},s={},a={},o={},c=new Nx,l=()=>Vi(r).some(I=>en(I).length>0),u=I=>s[I]??={},h=I=>a[I]??={},f=(I,P,U)=>{c.getHealth(I.peer)==="live"&&c.sendRoomPresence(I,P,U)},p=(I,P)=>{Kn(s[I]??{}).forEach(([U,O])=>{if(!O.shouldAdvertise())return;let{roomToken:S,roomTokenPromise:R}=O;if(S){f(P,S,!0);return}R.then(B=>{s[I]?.[U]===O&&O.roomToken===B&&(c.get(I,P.peerId)!==P||P.isClosing||O.shouldAdvertise()&&f(P,B,!0))})})},g=(I,P,U)=>Vi(c.getMap(I)).forEach(O=>f(O,P,U)),y=I=>{o[I]||(o[I]=c.setRoomPresenceHandler(I,(P,U,O)=>{if(!O)return;let S=c.get(I,P),R=a[I]?.[U];!S||!R||s[I]?.[R]?.attachSharedPeerToRoom(P,S)}))},_=I=>{r[I]&&en(r[I]).length>0||(o[I]?.(),delete o[I],delete s[I],delete a[I])},m=!1,w=[],v=null,T=Rt;return(I,P,U)=>{if(!I)throw Ke("requires a config map as the first argument");if(U&&typeof U!="object")throw Ke("third argument must be a callbacks object");let{appId:O}=I,S=U?.onJoinError,R=U?.onPeerHandshake,B=U?.handshakeTimeoutMs;if(!O)throw Ke("config map is missing appId field");if(!P)throw Ke("roomId argument required");if(B!==void 0&&(!Number.isFinite(B)||B<=0))throw Ke("handshakeTimeoutMs must be a positive number");if(r[O]?.[P])return r[O][P];y(O);let J=gs(Nt,O,P),ne=Lr(J),M=Lr(gs(J,Wt)),D=ox(I.password??"",O,P),k=ax(O,P),F=I._test_only_sharedPeerIdleMs??v2,V=!1,q=re=>async ue=>({type:ue.type,sdp:await re(D,ue.sdp)}),Q=q(dx),N=q(ux),W=c.getMap(O),H=()=>Yp(!0,I);v||=new hx(H);let ee=v,ce=async re=>{let ue=await re.getOffer(Date.now()-re.created>ma);if(!ue||ue.type!=="offer")throw Ke("failed to get offer for peer");return(await N(ue)).sdp},se=(re,ue)=>{let _e=So(ge.peerStates,re);_e.answeringExpiryTimer=Ze(_e.answeringExpiryTimer),_e.answeringPeer=null;let{proxy:ie,isNew:Ce}=c.bind(P,k,ue,{onDetach:()=>{let Ue=ge.peerStates[re];Ue?.connectedPeer===ue.peer&&(Ue.connectedPeer=null,Ue.connectedPeerUnhealthySinceMs=null,An(Ue))}});_e.connectedPeer=ue.peer,_e.connectedPeerUnhealthySinceMs=null,An(_e),Ce&&j(ie,re),Eo(_e,ee)},fe=(re,ue,_e)=>{if(V){re.destroy();return}let ie=So(ge.peerStates,ue);if(ie.connectedPeer){let Ne=W[ue];if(Ne&&ie.connectedPeer===Ne.peer&&Ne.bindings[P])return;ie.connectedPeer!==re&&!re.isDead&&re.destroy();return}let Ce=W[ue];if(Ce&&c.getHealth(Ce.peer)==="stale"&&(c.clear(O,ue,{destroyPeer:!0}),Ce=void 0),Ce&&Ce.peer!==re){re.isDead||re.destroy(),se(ue,Ce);return}let Ue=!Ce;Ce||=c.register(O,ue,re,F),se(ue,Ce),Ue&&p(O,Ce)},pe=(re,ue)=>{if(V)return;let _e=ge.peerStates[ue];_e?.connectedPeer===re&&(_l(_e,ue,"close-event"),ot())},me=!!I.passive,Me=null,Ae,Y=Rt,ot=()=>{if(!me||!ge.isActive)return;let re=!1;Kn(ge.peerStates).forEach(([ue,_e])=>{_e.connectedPeer||_e.answeringPeer||_e.offerInitPromise||_e.offerPeer||_e.offerRelays.some(Boolean)?re=!0:_e.status==="idle"&&delete ge.peerStates[ue]}),re||(ge.isActive=!1,Ae=Ze(Ae),C.forEach(Ze),C.length=0,Y(),Me?.roomToken&&g(O,Me.roomToken,!1))},ge={appId:O,roomId:P,config:I,peerStates:{},rootTopicPlaintext:J,rootTopicP:ne,selfTopicP:M,toPlain:Q,toCipher:N,isLeaving:()=>V,isPassive:me,isActive:!me,onJoinError:S,sharedPeers:c,offerPool:ee,encryptOffer:ce,initPeer:Yp,connectPeer:fe,disconnectPeer:pe,attachSharedPeerToRoom:se,checkDeactivate:ot,announceIntervals:[],announceIntervalMs:t_},Se={config:I,appId:O,roomId:P,isPassive:me},he=Fx(ge);if(!m){let re=n(I);w=(Array.isArray(re)?re:[re]).map(ue=>Promise.resolve(ue)),m=!0,T=I.relayConfig?.manualReconnection?Rt:sx()}!me&&!ee.isActive&&ee.warmup(),ge.announceIntervals=w.map(()=>t_);let rt=w.map(()=>0),ze=w.map(()=>0),C=[],E=w.map(async(re,ue)=>e(await re,await ne,await M,he(ue),_e=>ee.getOffers(_e,ce),Se));yn([ne,M]).then(([re,ue])=>{if(V)return;let _e=async(ie,Ce)=>{if(V||me&&!ge.isActive)return;let Ue=me?{passive:!0}:void 0,Ne;try{Ne=await t(ie,re,ue,Ue,Se),ze[Ce]=0}catch(nt){let pt=ze[Ce]??0;pt===0&&I.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Nt}: announce failed - ${Gi(nt,"")}`),ze[Ce]=pt+1}if(V||me&&!ge.isActive)return;typeof Ne=="number"&&(ge.announceIntervals[Ce]=Ne);let De=rt[Ce]??0;rt[Ce]=De+1;let Te=ge.announceIntervals[Ce]??t_,He=y2[De];C[Ce]=setTimeout(()=>{_e(ie,Ce)},typeof He=="number"?Math.min(Te,He):Te)};Y=()=>{i&&w.forEach(async ie=>{let Ce=await ie;V||i(Ce,re,ue,Se)})},ge.requeueAnnounce=()=>{C.forEach(Ze),C.length=0,Ae=Ze(Ae),ee.isActive||ee.warmup(),Me?.roomToken&&g(O,Me.roomToken,!0),Ae=setTimeout(ot,x2),w.forEach(async(ie,Ce)=>{let Ue=await ie;Ue&&!V&&(rt[Ce]=0,_e(Ue,Ce))})},E.forEach(async(ie,Ce)=>{if(await ie,V)return;let Ue=await w[Ce];Ue&&!V&&(!me||ge.isActive)&&_e(Ue,Ce)})});let j=Rt,{compose:le}=fx(I.password??"",O,P),oe=le(R),de={...oe?{onPeerHandshake:oe}:{},...B===void 0?{}:{handshakeTimeoutMs:B},isPassive:me,onHandshakeError:(re,ue)=>S?.({error:ue.replace(/^handshake failed: /,""),appId:O,peerId:re,roomId:P})};r[O]??={};let Pe=u(O),ve=Cx(re=>j=re,re=>{if(V)return;let ue=ge.peerStates[re];ue?.connectedPeer&&(ue.connectedPeer=null,An(ue),ot())},()=>{V=!0,j=Rt;let re=s[O]?.[P];re?.roomToken&&(g(O,re.roomToken,!1),delete a[O]?.[re.roomToken],a[O]&&!en(a[O]).length&&delete a[O]),s[O]&&(delete s[O][P],en(s[O]).length||delete s[O]),Kn(ge.peerStates).forEach(([ue,_e])=>{if(_e.answeringExpiryTimer=Ze(_e.answeringExpiryTimer),_e.connectedPeer&&!_e.connectedPeer.isDead){let ie=W[ue];(!ie||ie.peer!==_e.connectedPeer)&&_e.connectedPeer.destroy()}_e.answeringPeer&&!_e.answeringPeer.isDead&&_e.answeringPeer.destroy(),Eo(_e,ee),_e.connectedPeer=null,_e.answeringPeer=null,An(_e)}),r[O]&&(delete r[O][P],en(r[O]).length===0&&delete r[O]),C.forEach(Ze),Ae=Ze(Ae),E.forEach(async ue=>{(await ue)()}),!l()&&(m=!1,ee.destroy(),v=null,T(),_(O))},de);return Me={roomToken:null,roomTokenPromise:k,attachSharedPeerToRoom:se,shouldAdvertise:()=>!me||ge.isActive},Pe[P]=Me,k.then(re=>{let ue=Me;!ue||V||s[O]?.[P]!==ue||(ue.roomToken=re,h(O)[re]=P,Vi(W).forEach(_e=>{_e.remoteRoomTokens.has(re)&&se(_e.peerId,_e)}),(!me||ge.isActive)&&g(O,re,!0))}),r[O][P]=ve}};var b2=["offer","answer","candidate"],w2=n=>{if(typeof n=="string")try{let e=gi(n);return e&&typeof e=="object"?e:null}catch{return null}return n},i_=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,M2=n=>b2.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),S2=n=>{let e=w2(n);if(!e||M2(e))return!1;let t=i_(e,"peerId");return!!(t&&t!==Wt&&e.passive!==!0&&!i_(e,"answer")&&!i_(e,"candidate"))},r_=n=>{if(!n)throw Ke("topic strategy missing room context");return n},Bx=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),s_=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),o_=({init:n,subscribeTopic:e,publishTopic:t,unpublishTopic:i})=>n_({init:n,subscribe:async(r,s,a,o,c,l)=>{let u=r_(l),h=(v,T)=>t(r,v,T,s_(u,"signal",s,a)),f=null,p=!1,g=null,y=!1,_=v=>{p||(p=!0,v())},m=()=>(g||(g=Promise.resolve(e(r,a,(v,T)=>{y||o(v,T,h)},Bx(u,"self",s,a))).then(v=>{f=v,y&&_(v)})),g);u.isPassive||await m();let w=await e(r,s,async(v,T)=>{y||(u.isPassive&&S2(T)&&await m(),y||await o(v,T,h))},Bx(u,"root",s,a));return()=>{y=!0,f&&_(f),w()}},announce:(r,s,a,o,c)=>{let l=r_(c);return t(r,s,Bt({peerId:Wt,...o}),s_(l,"announce",s,a))},...i?{deactivate:(r,s,a,o)=>i(r,s,s_(r_(o),"announce",s,a))}:{}});var Vx=Wp(n=>n.socket),E2=5,Gx="x",Wx="EVENT",{secretKey:T2,publicKey:A2}=Up.keygen(),R2=Wi(A2),C2={},I2={},P2={},Hx=250,Xx=()=>Math.floor(Date.now()/1e3),qx=n=>P2[n]??=ul(n,1e4)+2e4,L2=async(n,e)=>{let t={kind:qx(n),tags:[[Gx,n]],created_at:Xx(),content:e,pubkey:R2},i=await ys("SHA-256",Bt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Bt([Wx,{...t,id:Wi(i),sig:Wi(await Up.signAsync(i,T2))}])};var To={},D2=(n,e,t)=>{let i=To[n.url]??={subIds:[],topics:new Map,updateTimer:null};i.topics.set(e,t),Yx(n,i)},U2=(n,e)=>{let t=To[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),t.subIds.forEach(i=>n.send(Bt(["CLOSE",i]))),delete To[n.url]):Yx(n,t))},Yx=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null,Jx(n)},0))},Jx=n=>{let e=To[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],r=Xx();for(let s=0;s<t.length;s+=Hx)i.push(t.slice(s,s+Hx));for(;e.subIds.length>i.length;){let s=e.subIds.pop();s&&n.send(Bt(["CLOSE",s]))}i.forEach((s,a)=>{let o=e.subIds[a]??=On(64);n.send(Bt(["REQ",o,{kinds:[...new Set(s.map(qx))],since:r,"#x":s}]))})},N2=n=>{let e=To[n.url];e&&e.topics.size>0&&Jx(n)},jx=o_({init:n=>Bp(n,O2,E2,!0).map(e=>{let t=Vx.register(e,()=>Gp(e,i=>{let[r,s,a,o]=gi(i);if(r!==Wx){let c=`${Nt}: relay failure from ${t.url} - `;n.relayConfig?.warnOnRelayFailure!==!1&&(r==="NOTICE"?console.warn(c+s):r==="OK"&&!a&&console.warn(c+o));return}if(a&&typeof a=="object"&&"content"in a){let{content:c}=a,l=I2[s];if(l){l(C2[s]??"",c);return}let u=To[t.url];if(u?.subIds.includes(s)&&a.tags){let h=a.tags.find(f=>f[0]===Gx);h?.[1]&&u.topics.get(h[1])?.(h[1],c)}}},()=>N2(t)));return t.ready}),subscribeTopic:(n,e,t)=>(D2(n,e,(r,s)=>void t(r,s)),()=>{U2(n,e)}),publishTopic:async(n,e,t)=>n.send(await L2(e,typeof t=="string"?t:Bt(t)))}),EI=Vx.getSockets,O2=["basspistol.org","bucket.coracle.social","chorus.almostmachines.dev","chorus.pjv.me","communities.nos.social","ftp.halifax.rwth-aachen.de/nostr","hol.is","hornetstorage.net/relay","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.self-determined.de","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.angor.io","relay.artio.inf.unibe.ch","relay.binaryrobot.com","relay.damus.io","relay.froth.zone","relay.libernet.app","relay.mostr.pub","relay.mostro.network","relay.nostr.place","relay.nostrdice.com","relay.notoshi.win","relay.sigit.io","relay02.lnfi.network","relay2.angor.io","schnorr.me","slick.mjex.me","social.amanah.eblessing.co","staging.yabu.me","strfry.openhoofd.nl","strfry.shock.network","testnet-relay.samt.st","top.testrelay.top","x.kojira.io","yabu.me/v2"].map(n=>"wss://"+n);var k2="voxelier-scene",u_="s",Ur=null,a_=null,c_=null,l_=null,ba=null,gl=null,wa=null,Ao=!1,yl=new Set,d_=()=>({active:!!Ur,role:ba,link:gl?Zx(gl):null,peers:yl.size}),$x=n=>{wa=n},z2=()=>{let n=new Uint8Array(16);return crypto.getRandomValues(n),[...n].map(e=>e.toString(16).padStart(2,"0")).join("")};async function F2(n){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(`voxelier:${n}`));return[...new Uint8Array(e)].slice(0,16).map(t=>t.toString(16).padStart(2,"0")).join("")}var Zx=n=>`${location.origin}${location.pathname}#${u_}=${n}`;function B2(){let n=new URLSearchParams(location.hash.replace(/^#/,"")).get(u_);return n&&/^[0-9a-f]{16,64}$/.test(n)?n:null}async function Kx(n,e){await h_(),gl=n,ba=e;let t=await F2(n);op(t),Ur=jx({appId:k2,password:n},t);let[i,r]=Ur.makeAction("ops"),[s,a]=Ur.makeAction("snap");a_=i,c_=s,r(o=>{o instanceof Uint8Array&&$c(o)}),a(o=>{o instanceof Uint8Array&&(ba==="guest"&&!Ao?(Ao=!0,sp(o)):$c(o))}),Ur.onPeerJoin=o=>{yl.add(o),(ba==="host"||Ao)&&c_?.(z0(),{target:o}),wa?.()},Ur.onPeerLeave=o=>{yl.delete(o),wa?.()},l_=F0(o=>a_?.(o)),wa?.()}async function Qx(){let n=z2();return Ao=!0,location.hash=`${u_}=${n}`,await Kx(n,"host"),Zx(n)}async function H2(n){Ao=!1,await Kx(n,"guest")}async function h_(){l_?.(),l_=null;try{await Ur?.leave()}catch{}Ur=null,a_=null,c_=null,ba=null,gl=null,Ao=!1,yl.clear(),op(null),wa?.()}function ev(){let n=B2();return n?H2(n):null}var vl={view:"\u{1F441}",add:"\uFF0B",erase:"\uFF0D",paint:"\u{1FAA3}",eyedropper:"\u{1F4A7}",select:"\u2B1A",measure:"\u{1F4CF}"},V2=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],tv=(n,e,t,i)=>ft("button",{className:"tool"+(t?" active":""),innerHTML:`<span class="ic">${n}</span>${e}`,onclick:i});function nv(n){x.tool!==n&&(Bi(),x.tool=n,x.eyedropReturn=null,Sn.visible=!1,cs(),it())}function it(){let n=document.getElementById("tools");n.innerHTML="",!x.editObject&&x.tool!=="measure"&&(x.tool="view");let e=ft("div",{className:"toolgroup"}),t=x.editObject?V2:[{id:"view",label:"View"}];for(let i of t)e.appendChild(tv(vl[i.id],i.label,x.tool===i.id,()=>nv(i.id)));if(e.appendChild(tv(vl.measure,"Measure",x.tool==="measure",()=>nv("measure"))),x.editObject&&e.appendChild(j2()),n.append(e),x.tool==="view"){let i=document.getElementById("toolcursor");i&&(i.style.display="none")}bp()}document.getElementById("btn-save").onclick=Sy;document.getElementById("btn-load").onclick=Ey;var Sa=document.getElementById("btn-share"),Ro=document.getElementById("sharebar");function bl(){let n=d_();if(Sa.textContent=n.active?"\u{1F517} Sharing":"\u{1F517} Share",Sa.classList.toggle("on",n.active),Ro.hidden=!n.active,!n.active)return;let e=n.peers===1?"1 peer":`${n.peers} peers`;if(Ro.innerHTML="",Ro.append(ft("div",{className:"sharewho",textContent:(n.role==="host"?"Hosting":"Joined")+(n.peers?` \xB7 ${e} connected`:" \xB7 waiting for a peer\u2026")})),n.link){let t=ft("input",{className:"sharelink"});t.readOnly=!0,t.value=n.link,t.onclick=()=>t.select(),Ro.append(t),Ro.append(ft("button",{className:"sharebtn",textContent:"Copy link",onclick:async()=>{try{await navigator.clipboard.writeText(n.link)}catch{t.select()}}}))}Ro.append(ft("button",{className:"sharebtn",textContent:"Leave",onclick:()=>{location.hash="",h_()}}))}Sa.onclick=async()=>{if(!d_().active){Sa.disabled=!0;try{let n=await Qx();try{await navigator.clipboard.writeText(n)}catch{}}catch(n){alert("Could not start sharing: "+n.message)}finally{Sa.disabled=!1,bl()}}};$x(bl);var xl={ver:-1,cols:[]};function G2(){if(xl.ver===x.voxVer)return xl.cols;let n=new Map;return function e(t){t.type==="object"?Pg(t.boxes,n):t.children.forEach(e)}(x.root),xl={ver:x.voxVer,cols:[...n.entries()].sort((e,t)=>t[1]-e[1]).map(e=>e[0])},xl.cols}var f_=[];function wl(n){f_=[n,...f_.filter(e=>e!==n)].slice(0,6)}function p_(n){x.selColor=n,it()}function W2(){let n=[];for(let e of[...f_,...G2(),...Dc])if(n.includes(e)||n.push(e),n.length>=6)break;return n}var X2=n=>{let e=ft("div",{className:"sw"+(n===x.selColor?" active":""),title:Ni(n),onclick:()=>p_(n)});return e.style.background=Ni(n),e};function q2(){x.tool!=="eyedropper"&&(x.eyedropReturn=x.tool,Bi(),x.tool="eyedropper",it())}function Y2(n){let e=(n>>16&255)/255,t=(n>>8&255)/255,i=(n&255)/255,r=Math.max(e,t,i),s=Math.min(e,t,i),a=r-s,o=0;return a&&(r===e?o=(t-i)/a%6:r===t?o=(i-e)/a+2:o=(e-t)/a+4,o=(o*60+360)%360),[Math.round(o),Math.round((r?a/r:0)*100),Math.round(r*100)]}function Ma(n,e,t){e/=100,t/=100;let i=t*e,r=i*(1-Math.abs(n/60%2-1)),s=t-i,[a,o,c]=n<60?[i,r,0]:n<120?[r,i,0]:n<180?[0,i,r]:n<240?[0,r,i]:n<300?[r,0,i]:[i,0,r],l=u=>Math.round((u+s)*255);return l(a)<<16|l(o)<<8|l(c)}var J2=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function j2(){let n=ft("div",{className:"colorctl"}),e=ft("div",{className:"colorbtn",title:"Draw colour \u2014 hover for recent colours / sliders"});e.style.background=Ni(x.selColor);let t=ft("div",{className:"colorflyout"}),i=ft("div",{className:"sliders"}),r={},[s,a,o]=Y2(x.selColor),c={h:s,s:a,v:o},l=()=>{r.s.style.background=`linear-gradient(to right,${Ni(Ma(c.h,0,c.v))},${Ni(Ma(c.h,100,c.v))})`,r.v.style.background=`linear-gradient(to right,${Ni(Ma(c.h,c.s,0))},${Ni(Ma(c.h,c.s,100))})`},u=()=>{c.h=+r.h.value,c.s=+r.s.value,c.v=+r.v.value,x.selColor=Ma(c.h,c.s,c.v),e.style.background=Ni(x.selColor),l()};for(let p of J2){let g=ft("div",{className:"sliderline"}),y=ft("input",{type:"range",className:"csl",title:p.title});y.min="0",y.max=String(p.max),y.value=String(c[p.key]),r[p.key]=y,y.addEventListener("input",u),g.append(ft("span",{className:"lbl",textContent:p.label,title:p.title}),y),i.appendChild(g)}r.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",l();let h=ft("div",{className:"sliderrow"});h.append(i,ft("div",{className:"sw more",textContent:"\u{1F4A7}",title:"Pick a colour from a voxel (eyedropper)",onclick:q2}));let f=ft("div",{className:"swrow"});for(let p of W2())f.appendChild(X2(p));return t.append(h,f),n.append(e,t),n}{let n=document.getElementById("app"),e=t=>{n.classList.toggle("side-hidden",t),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>e(!0),document.getElementById("btn-show-side").onclick=()=>e(!1)}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||x.drag||x.painting)return;let e=n.key.toLowerCase();if(n.ctrlKey||n.metaKey){if(e==="z"){n.preventDefault(),n.shiftKey?Ad():v0();return}if(e==="y"){n.preventDefault(),Ad();return}if(x.editObject){e==="c"?(fp(),n.preventDefault()):e==="x"?($0(),n.preventDefault()):e==="v"&&($2(),n.preventDefault());return}let i={c:ha,x:vy,v:il,d:nl}[e];i&&(i(),n.preventDefault());return}switch(e){case"f":zi();break;case"escape":iy();break;case"n":x.editObject||xy();break;case"r":x.editObject||My();break;case"[":x.editObject||Sp(-1);break;case"]":x.editObject||Sp(1);break;case"delete":case"backspace":n.preventDefault(),x.editObject?hp():da();break}});function $2(){let n=[];if(ao()==="node")for(let e of Bc())ea(e,e.pos,e.rot,n);else n.push(...Hc());n.length&&(x.tool="select",Z0(n),it())}var at=n=>Math.floor(n/10),bt=Dc,Co=(n,e)=>{let t=Qo();return t.name=n,t.boxes=e,t},__=(n,e,t,i,r,s)=>({x0:n,y0:e,z0:t,x1:i,y1:r,z1:s});function iv(){let n=at(4465),e=at(2985),t=at(2700),i=at(150),r=Co("Floor",[gt(0,0,0,n,1,e,bt[9])]),s=at(800),a=at(2100),o=n-at(515)-s,c=n-at(900)-s,l=[gt(0,1,0,n,t+1,i,bt[5]),gt(0,1,e-i,n,t+1,e,bt[5]),gt(0,1,i,i,t+1,e-i,bt[5]),gt(n-i,1,i,n,t+1,e-i,bt[5])];l=ts(l,__(o,1,0,o+s,a+1,i)),l=ts(l,__(c,1,e-i,c+s,a+1,e)),l=ts(l,__(0,at(900),at(600),i,at(2100),e-at(600)));let u=Co("Walls",l);u.vis="deemphasized";let h=at(1500),f=at(2e3),p=Co("Bed",[gt(0,0,0,8,14,8,bt[7]),gt(h-8,0,0,h,14,8,bt[7]),gt(0,0,f-8,8,14,f,bt[7]),gt(h-8,0,f-8,h,14,f,bt[7]),gt(0,14,0,h,20,f,bt[6]),gt(2,20,0,h-2,24,f-at(400),bt[10])]);p.pos={x:i+3,y:1,z:e-i-f};let g=at(1400),y=at(700),_=at(740),m=Co("Desk",[gt(0,_-4,0,g,_,y,bt[8]),gt(0,0,0,6,_-4,6,bt[7]),gt(g-6,0,0,g,_-4,6,bt[7]),gt(0,0,y-6,6,_-4,y,bt[7]),gt(g-6,0,y-6,g,_-4,y,bt[7])]),w=at(600),v=w-30>>1,T=w>>1,I=Co("Computer",[gt(v,0,0,v+30,2,18,bt[11]),gt(T-2,2,7,T+2,at(160),11,bt[11]),gt(0,at(160),6,w,at(520),9,bt[13])]);I.pos={x:at(400),y:_,z:at(420)};let P=ns();P.name="Desk + Computer",P.pos={x:n-i,y:1,z:at(900)},P.rot=1,P.children=[m,I];let U=B=>Co(B,[gt(-10,0,-10,11,30,11,bt[4]),gt(-2,30,-2,3,54,3,bt[14]),gt(-16,54,-16,17,78,17,bt[14]),gt(-12,78,-12,13,92,13,bt[14])]),O=U("Plant"),S=U("Plant");O.pos={x:n-i-at(300),y:1,z:i+at(300)},S.pos={x:i+at(300),y:1,z:i+at(300)};let R=ns();return R.children=[r,u,p,P,O,S],R}var Ml=n=>Math.abs(n.clientX-x.drag.sx)+Math.abs(n.clientY-x.drag.sy)>3,Xi=document.createElement("div");Xi.id="toolcursor";Xi.style.display="none";document.body.appendChild(Xi);function Z2(n){if(x.tool==="view"){Xi.style.display="none";return}Xi.textContent=vl[x.tool],Xi.style.left=n.clientX+"px",Xi.style.top=n.clientY+"px",Xi.style.display="block"}function K2(){x.tool!=="measure"||x.painting||x.drag&&x.drag.mode==="box"||Oc()}function m_(){let n=(et.top-et.bottom)/Mt.h,e=Math.abs(et.matrixWorldInverse.elements[5]);return n/Math.max(e,.15)}function Q2(n){let e=x.drag;if(!e||e.mode!=="pan"&&e.mode!=="orbit")return!1;let t=n.clientX-e.x,i=n.clientY-e.y;return e.x=n.clientX,e.y=n.clientY,(e.mode==="pan"?o0:a0)(t,i),!0}function eR(){let n=[],e=[];fr(x.root,{x:0,y:0,z:0},0,null,null,(r,s,a,o)=>{let c=o&&x.selection.has(o)?e:n;for(let l of r.boxes)c.push(ai(l,a,s))});let t=1/0,i=-1/0;for(let r of e)r.y0<t&&(t=r.y0),r.y1>i&&(i=r.y1);return{occ:n,sel:e,minY:t,hgt:e.length?i-t:0}}var tR=(n,e,t,i)=>{if(ad(n.sel??[],n.occ??[],e,t,i))return!0;let r=n.minY??1/0;return r+t<Math.min(0,r)};function nR(n){let e=x.drag,t=(i,r,s)=>n.altKey||!tR(e,i,r,s);if(n.shiftKey){e.shiftAnchorY==null&&(e.shiftAnchorY=n.clientY,e.dyBase=e.dyUser??0);let i=e.dyBase+Math.round((e.shiftAnchorY-n.clientY)*m_());t(e.dx,i,e.dz)&&(e.dyUser=i,e.dy=i)}else{e.shiftAnchorY=null;let i=e.dx,r=e.dz,s=ta(0);s&&e.start&&(i=s.x-e.start.x,r=s.z-e.start.z);let a=e.dyUser??0,o=Math.floor(.1*(e.hgt??0)),c=!1;for(let l=0;l<=o;l++)if(t(i,a+l,r)){e.dx=i,e.dz=r,e.dy=a+l,c=!0;break}c||(t(i,a,e.dz)&&(e.dx=i),t(e.dx,a,r)&&(e.dz=r),e.dy=a)}for(let i of x.selection)for(let r of x.childMeshes[i]||[])r.position.set(e.dx,e.dy,e.dz),r.castShadow=!1;Di.position.set(e.dx,e.dy,e.dz)}function iR(n){let e=x.drag,t=to(),i=lt({x:Math.round(e.dx),y:0,z:Math.round(e.dz)},-t.rot),r=Math.round(e.dy);if(n){let s=[];for(let a of x.selection){let o=Oi(a);if(!o)continue;let c=lr(o);c.pos={x:o.pos.x+i.x,y:o.pos.y+r,z:o.pos.z+i.z},s.push(c)}x.context.children.push(...s),x.selection=new Set(s.map(a=>a.id))}else for(let s of x.selection){let a=Oi(s);a&&(a.pos.x+=i.x,a.pos.y+=r,a.pos.z+=i.z)}Di.position.set(0,0,0),Ut(),it(),yt()}function rR(n){let e=x.drag,t=Math.round((e.sx-n.clientX)/70);t!==e.steps&&(Mp(t-e.steps),e.steps=t,e.dirty=!0)}function sR(){let n=i0();n!=null&&(x.eyedropReturn!=null&&(x.tool=x.eyedropReturn,x.eyedropReturn=null),p_(n))}function sv(n){let e=os(),t=hd(e);if(!t)return;let i=es(t.x,t.y,t.z);i!==x.lastVox&&(n?(Md({x0:t.x,y0:t.y,z0:t.z,x1:t.x+1,y1:t.y+1,z1:t.z+1},x.selColor),wl(x.selColor)):n0(t,x.selColor)&&wl(x.selColor),x.lastVox=i),ov(e)}function ov(n=os()){let e=hd(n);if(!e){Sn.visible=!1;return}let t=ki(e.x+.5,e.y+.5,e.z+.5);Sn.visible=!0,Sn.material.color.set(x.tool==="erase"?11895693:10994876),Sn.position.copy(t)}var g_=n=>n===0?[1,2]:n===1?[0,2]:[0,1];function av(n,e,t,i){let[r,s]=g_(n.na),a=[0,0,0],o=[0,0,0],c=(l,u,h)=>{a[l]=Math.min(u,h),o[l]=Math.max(u,h)};return c(n.na,n.s[n.na],n.s[n.na]+i),c(r,n.s[r],e),c(s,n.s[s],t),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var y_=n=>{let[e,t]=g_(n.na);return av(n,n.c[e],n.c[t],n.hy)};function rv(n){let e=os(),t,i;if(e)i=e.addCell.x!==e.cell.x?0:e.addCell.y!==e.cell.y?1:2,t=x.tool==="add"?e.addCell:e.cell;else{let r=as(0);if(!r)return;t=r,i=1}x.drag={...n,mode:"box",shiftAnchorY:null,box:{s:[t.x,t.y,t.z],c:[t.x,t.y,t.z],na:i,hy:0},occ:x.tool==="add"?x.editObject.boxes.slice():void 0},Sn.visible=!1,cv()}function oR(n){let e=x.drag,t=e.box,[i,r]=g_(t.na),s=x.tool==="add"&&!n.altKey,a=(o,c,l)=>!s||!ad([av(t,o,c,l)],e.occ??[],0,0,0);if(n.shiftKey){e.shiftAnchorY===null&&(e.shiftAnchorX=n.clientX,e.shiftAnchorY=n.clientY,e.hyBase=t.hy);let o=ki(t.s[0],t.s[1],t.s[2]),c=t.s.slice();c[t.na]+=1;let l=ki(c[0],c[1],c[2]),u=l.x-o.x,h=l.y-o.y,f=l.z-o.z,p=et.matrixWorld.elements,g=u*p[0]+h*p[1]+f*p[2],y=u*p[4]+h*p[5]+f*p[6],_=g*g+y*y,m=Mt.h/(et.top-et.bottom),w=g*m,v=-y*m,T=n.clientX-e.shiftAnchorX,I=n.clientY-e.shiftAnchorY,P=e.hyBase+(_>.02?Math.round((T*w+I*v)/(w*w+v*v)):Math.round((e.shiftAnchorY-n.clientY)*m_()));a(t.c[i],t.c[r],P)&&(t.hy=P)}else{e.shiftAnchorY=null;let o=qg(t.na,t.s[t.na]);if(o){let c=[o.x,o.y,o.z];a(c[i],t.c[r],t.hy)&&(t.c[i]=c[i]),a(t.c[i],c[r],t.hy)&&(t.c[r]=c[r])}}cv()}function aR(){let n=y_(x.drag.box);x.tool==="add"?(Md(n,x.selColor),wl(x.selColor)):ia(n),x.liveMeas=null,hr(),it(),yt()}function cv(){let n=y_(x.drag.box);x.liveMeas=_d(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,ki,2),hr()}function cR(n){let e=x.sel3d.region.y0;x.drag={...n,mode:"selmove",start:as(e)??{x:0,y:e,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function lR(n){x.drag={...n,mode:"selrot",steps:0}}function uR(n){let e=x.drag,t=e.dx,i=e.dy,r=e.dz;if(n.shiftKey)e.shiftAnchorY==null&&(e.shiftAnchorY=n.clientY,e.dyBase=i),i=e.dyBase+Math.round((e.shiftAnchorY-n.clientY)*m_());else{e.shiftAnchorY=null;let s=as(e.start.y);s&&(t=s.x-e.start.x,r=s.z-e.start.z)}(t!==e.dx||i!==e.dy||r!==e.dz)&&(x.sel3d.lifted||up(),K0(t-e.dx,i-e.dy,r-e.dz),e.dx=t,e.dy=i,e.dz=r)}function dR(n){let e=x.drag,t=n.altKey;t!==!!e.fine&&(e.fine=t,x.sel3d.lifted&&(pp(),e.sx=n.clientX,e.steps=0,e.deg=0));let i=()=>{x.sel3d.lifted||(up(),pp())};if(t){let r=Math.round((e.sx-n.clientX)/25)*15;if(r===(e.deg??0))return;i(),e.deg=r,ty(r,n.shiftKey)}else{let r=Math.round((e.sx-n.clientX)/70);if(r===e.steps)return;i(),e.steps=r,ey(r,n.shiftKey)}}function hR(n){x.liveMeas=null,hr(),n&&j0(y_(x.drag.box)),it()}Zt.addEventListener("pointerdown",n=>{if(x.drag||x.painting)return;Zt.setPointerCapture(n.pointerId),Uc(n.clientX,n.clientY);let e={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(n.button===1){x.drag={...e,mode:"pan"};return}if(x.editObject){n.button===0?x.tool==="view"||x.tool==="measure"?x.drag={...e,mode:"pan"}:x.tool==="select"?x.sel3d&&_p()?cR(e):(Bi(),rv(e)):x.tool==="add"||x.tool==="erase"?rv(e):x.tool==="eyedropper"?sR():(x.painting=!0,x.lastVox=null,sv(n.shiftKey)):n.button===2&&(x.tool==="select"&&x.sel3d&&_p()?lR(e):x.drag={...e,mode:"orbit"});return}let t=dd(),i=t&&x.selection.has(t);n.button===0?x.tool==="measure"?x.drag={...e,mode:"pan"}:i?x.drag={...e,mode:"move",start:ta(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...eR()}:x.drag={...e,mode:"pan",clickId:t}:n.button===2&&(i&&x.tool!=="measure"?x.drag={...e,mode:"rotobj",steps:0}:x.drag={...e,mode:"orbit"})});Zt.addEventListener("pointermove",n=>{Uc(n.clientX,n.clientY),x.editObject&&x.painting?sv(n.shiftKey):x.drag?Q2(n)||(x.drag.mode==="move"?nR(n):x.drag.mode==="rotobj"?rR(n):x.drag.mode==="box"?oR(n):x.drag.mode==="selmove"?uR(n):x.drag.mode==="selrot"&&dR(n)):x.editObject&&x.tool!=="select"&&x.tool!=="view"&&x.tool!=="measure"?ov():Sn.visible=!1,K2(),Z2(n)});Zt.addEventListener("pointerup",n=>{try{Zt.releasePointerCapture(n.pointerId)}catch{}if(x.tool==="measure"&&x.drag&&!Ml(n)){if(n.button===0){Jg(),x.drag=null;return}if(n.button===2){jg(),x.drag=null;return}}if(x.editObject){x.painting?(x.painting=!1,it(),yt()):x.drag&&x.drag.mode==="box"?x.tool==="select"?hR(Ml(n)):aR():x.drag&&(x.drag.mode==="selmove"||x.drag.mode==="selrot")&&dp(),x.drag=null;return}if(x.drag)if(x.drag.mode==="pan"&&!Ml(n)&&n.button===0){let e=x.drag.clickId,t=n.shiftKey||n.ctrlKey||n.metaKey,i=new Set(x.selection);e?(t?x.selection.has(e)?x.selection.delete(e):x.selection.add(e):x.selection=new Set([e]),vp(e)):t||(x.selection.clear(),vp(null)),yr(i),it()}else x.drag.mode==="move"?iR(Ml(n)&&(n.ctrlKey||n.metaKey)):x.drag.mode==="rotobj"&&x.drag.dirty&&(it(),yt());x.drag=null});Zt.addEventListener("pointercancel",()=>{if(!x.drag&&!x.painting)return;let n=x.painting;x.drag&&(x.drag.mode==="selmove"||x.drag.mode==="selrot")&&dp(),x.drag=null,x.painting=!1,x.liveMeas=null,hr(),Ut(),n&&(it(),yt())});Zt.addEventListener("pointerleave",()=>{Sn.visible=!1,Xi.style.display="none",x.tool==="measure"&&!x.drag&&!x.painting&&x.liveMeas&&(x.liveMeas=null,hr())});Zt.addEventListener("contextmenu",n=>n.preventDefault());Zt.addEventListener("wheel",n=>{n.preventDefault(),st.zoom*=n.deltaY>0?1/.95:.95,st.zoom=Math.max(6,Math.min(Ac,st.zoom))},{passive:!1});Zt.addEventListener("dblclick",n=>{if(x.editObject)return;Uc(n.clientX,n.clientY);let e=dd();e&&ds(Oi(e),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,ii,{passive:!0,capture:!0});var fR=()=>Math.abs(st.azim-Qe.azim)<.001&&Math.abs(st.elev-Qe.elev)<.001&&Math.abs(st.zoom-Qe.zoom)<.001&&Qe.target.distanceToSquared(st.target)<1e-6;function lv(){let n=Zt.getBoundingClientRect();Mt.w=n.width,Mt.h=n.height,Mt.x=n.left,Mt.y=n.top}function uv(){let n=Math.max(1,Math.round(Mt.w)),e=Math.max(1,Math.round(Mt.h)),t=Math.min(devicePixelRatio,2);Li.getPixelRatio()!==t&&Li.setPixelRatio(t),(Zt.width!==Math.floor(n*t)||Zt.height!==Math.floor(e*t))&&(Li.setSize(n,e,!1),ii())}window.addEventListener("resize",()=>{lv(),uv()});var x_=!1;function pR(){x_=!0,x.drag?ii():dv()}function dv(){x_=!1;let n=_o(k0());n&&(X0(n),Ut(),it(),ii())}function hv(){requestAnimationFrame(hv),x_&&!x.drag&&dv(),uv(),u0(),(Yo.tail>0||!fR())&&(e0(),Li.render(Dt,et),$g(),Yo.tail>0&&Yo.tail--)}function _R(){q0()||(x.root=iv(),Zc(x.root)),x.path=[x.root],x.editObject=null,x.sel3d=null,x.selection.clear(),V0(pR),Ut(),it(),zi(),di(),lv(),hv(),ev()?.then(bl).catch(()=>{})}_R();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
