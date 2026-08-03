var y={root:null,path:[],get context(){return this.path[this.path.length-1]},editObject:null,selection:new Set,sel3d:null,tool:"view",eyedropReturn:null,selColor:13935475,collapsed:new Set,pickMeshes:[],childMeshes:{},childBox:{},sceneBox:null,editXform:{off:{x:0,y:0,z:0},rot:0},voxVer:0,painting:!1,lastVox:null,drag:null,liveMeas:null};var qu="160";var P_=0,Dp=1,U_=2;var hg=1,Yu=2,gi=3,cn=0,Ge=1,Nn=2;var Yi=0,Ls=1,Np=2,Op=3,zp=4,D_=5,Ar=100,N_=101,O_=102,Fp=103,Bp=104,z_=200,F_=201,B_=202,k_=203,lu=204,hu=205,V_=206,H_=207,G_=208,W_=209,X_=210,q_=211,Y_=212,$_=213,j_=214,J_=0,Z_=1,K_=2,Cc=3,Q_=4,tv=5,ev=6,nv=7,$u=0,iv=1,rv=2,$i=0,sv=1,ov=2,av=3,cv=4,lv=5,hv=6;var ug=300,Ns=301,Os=302,uu=303,du=304,Kc=306,fu=1e3,On=1001,pu=1002,Ke=1003,kp=1004;var Lh=1005;var Tn=1006,uv=1007;var Vo=1008;var ji=1009,dv=1010,fv=1011,ju=1012,dg=1013,Xi=1014,qi=1015,Ho=1016,fg=1017,pg=1018,Ir=1020,pv=1021,zn=1023,mv=1024,gv=1025,Lr=1026,zs=1027,xv=1028,mg=1029,yv=1030,gg=1031,xg=1033,Ph=33776,Uh=33777,Dh=33778,Nh=33779,Vp=35840,Hp=35841,Gp=35842,Wp=35843,yg=36196,Xp=37492,qp=37496,Yp=37808,$p=37809,jp=37810,Jp=37811,Zp=37812,Kp=37813,Qp=37814,tm=37815,em=37816,nm=37817,im=37818,rm=37819,sm=37820,om=37821,Oh=36492,am=36494,cm=36495,_v=36283,lm=36284,hm=36285,um=36286;var Rc=2300,Ic=2301,zh=2302,dm=2400,fm=2401,pm=2402;var _g=3e3,Pr=3001,vv=3200,bv=3201,vg=0,Mv=1,An="",Oe="srgb",_i="srgb-linear",Ju="display-p3",Qc="display-p3-linear",Lc="linear",ae="srgb",Pc="rec709",Uc="p3";var ds=7680;var mm=519,Sv=512,wv=513,Ev=514,bg=515,Tv=516,Av=517,Cv=518,Rv=519,gm=35044;var xm="300 es",mu=1035,xi=2e3,Dc=2001,Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ym=1234567,Ps=Math.PI/180,Go=180/Math.PI;function Ws(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function Zu(n,t){return(n%t+t)%t}function Iv(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Lv(n,t,e){return n!==t?(e-n)/(t-n):0}function Fo(n,t,e){return(1-e)*n+e*t}function Pv(n,t,e,i){return Fo(n,t,1-Math.exp(-e*i))}function Uv(n,t=1){return t-Math.abs(Zu(n,t*2)-t)}function Dv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Nv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ov(n,t){return n+Math.floor(Math.random()*(t-n+1))}function zv(n,t){return n+Math.random()*(t-n)}function Fv(n){return n*(.5-Math.random())}function Bv(n){n!==void 0&&(ym=n);let t=ym+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kv(n){return n*Ps}function Vv(n){return n*Go}function gu(n){return(n&n-1)===0&&n!==0}function Hv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gv(n,t,e,i,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Mg={DEG2RAD:Ps,RAD2DEG:Go,generateUUID:Ws,clamp:Qe,euclideanModulo:Zu,mapLinear:Iv,inverseLerp:Lv,lerp:Fo,damp:Pv,pingpong:Uv,smoothstep:Dv,smootherstep:Nv,randInt:Ov,randFloat:zv,randFloatSpread:Fv,seededRandom:Bv,degToRad:kv,radToDeg:Vv,isPowerOfTwo:gu,ceilPowerOfTwo:Hv,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:Gv,normalize:Je,denormalize:Cs},Yt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class n{constructor(t,e,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],v=r[1],_=r[4],T=r[7],R=r[2],I=r[5],C=r[8];return s[0]=a*x+o*v+c*R,s[3]=a*m+o*_+c*I,s[6]=a*p+o*T+c*C,s[1]=l*x+h*v+u*R,s[4]=l*m+h*_+u*I,s[7]=l*p+h*T+u*C,s[2]=d*x+f*v+g*R,s[5]=d*m+f*_+g*I,s[8]=d*p+f*T+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=e*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(r*l-h*i)*x,t[2]=(o*i-r*a)*x,t[3]=d*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fh.makeScale(t,e)),this}rotate(t){return this.premultiply(Fh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fh=new Vt;function Sg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wv(){let n=Oc("canvas");return n.style.display="block",n}var _m={};function Bo(n){n in _m||(_m[n]=!0,console.warn(n))}var vm=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bm=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ec={[_i]:{transfer:Lc,primaries:Pc,toReference:n=>n,fromReference:n=>n},[Oe]:{transfer:ae,primaries:Pc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qc]:{transfer:Lc,primaries:Uc,toReference:n=>n.applyMatrix3(bm),fromReference:n=>n.applyMatrix3(vm)},[Ju]:{transfer:ae,primaries:Uc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bm),fromReference:n=>n.applyMatrix3(vm).convertLinearToSRGB()}},Xv=new Set([_i,Qc]),Qt={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Xv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=ec[t].toReference,r=ec[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return ec[n].primaries},getTransfer:function(n){return n===An?Lc:ec[n].transfer}};function Us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fs,zc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Oc("canvas")),fs.width=t.width,fs.height=t.height;let i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Us(e[i]/255)*255):e[i]=Us(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qv=0,Fc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Ws(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(kh(r[a].image)):s.push(kh(r[a]))}else s=kh(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function kh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yv=0,Fn=class n extends Ji{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=On,r=On,s=Tn,a=Vo,o=zn,c=ji,l=n.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Ws(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Pr?Oe:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ug)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fu:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fu:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?Pr:_g}set encoding(t){Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Pr?Oe:An}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ug;Fn.DEFAULT_ANISOTROPY=1;var Pe=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,T=(f+1)/2,R=(p+1)/2,I=(h+d)/4,C=(u+x)/4,V=(g+m)/4;return _>T&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=I/i,s=C/i):T>R?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=I/r,s=V/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=V/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xu=class extends Ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let r={width:t,height:e,depth:1};i.encoding!==void 0&&(Bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?Oe:An),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends xu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Bc=class extends Fn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yu=class extends Fn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),I=Math.atan2(R,p*v);m=Math.sin(m*I)/R,o=Math.sin(o*I)/R}let T=o*v;if(c=c*m+d*T,l=l*m+f*T,h=h*m+g*T,u=u*m+x*T,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vh.copy(this).projectOnVector(t),this.sub(Vh)}reflect(t){return this.sub(Vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vh=new P,Mm=new Zi,bi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),ic.subVectors(this.max,Do),ps.subVectors(t.a,Do),ms.subVectors(t.b,Do),gs.subVectors(t.c,Do),ki.subVectors(ms,ps),Vi.subVectors(gs,ms),Mr.subVectors(ps,gs);let e=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-Mr.z,Mr.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,Mr.z,0,-Mr.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-Mr.y,Mr.x,0];return!Hh(e,ps,ms,gs,ic)||(e=[1,0,0,0,1,0,0,0,1],!Hh(e,ps,ms,gs,ic))?!1:(rc.crossVectors(ki,Vi),e=[rc.x,rc.y,rc.z],Hh(e,ps,ms,gs,ic))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ui=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,nc=new bi,ps=new P,ms=new P,gs=new P,ki=new P,Vi=new P,Mr=new P,Do=new P,ic=new P,rc=new P,Sr=new P;function Hh(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Sr.fromArray(n,s);let o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),c=t.dot(Sr),l=e.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var $v=new bi,No=new P,Gh=new P,Fs=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$v.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);let e=No.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(Gh)),this.expandByPoint(No.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new P,Wh=new P,sc=new P,Hi=new P,Xh=new P,oc=new P,qh=new P,Wo=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Wh.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(Wh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(sc),o=Hi.dot(this.direction),c=-Hi.dot(sc),l=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Wh).addScaledVector(sc,d),f}intersectSphere(t,e){di.subVectors(t.center,this.origin);let i=di.dot(this.direction),r=di.dot(di)-i*i,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,r,s){Xh.subVectors(e,t),oc.subVectors(i,t),qh.crossVectors(Xh,oc);let a=this.direction.dot(qh),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,t);let c=o*this.direction.dot(oc.crossVectors(Hi,oc));if(c<0)return null;let l=o*this.direction.dot(Xh.cross(Hi));if(l<0||c+l>a)return null;let h=-o*Hi.dot(qh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class n{constructor(t,e,i,r,s,a,o,c,l,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,u,d,f,g,x,m)}set(t,e,i,r,s,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/xs.setFromMatrixColumn(t,0).length(),s=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jv,t,Jv)}lookAt(t,e,i){let r=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Gi.crossVectors(i,gn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Gi.crossVectors(i,gn)),Gi.normalize(),ac.crossVectors(gn,Gi),r[0]=Gi.x,r[4]=ac.x,r[8]=gn.x,r[1]=Gi.y,r[5]=ac.y,r[9]=gn.y,r[2]=Gi.z,r[6]=ac.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],_=i[7],T=i[11],R=i[15],I=r[0],C=r[4],V=r[8],M=r[12],E=r[1],D=r[5],X=r[9],$=r[13],A=r[2],O=r[6],G=r[10],Y=r[14],q=r[3],W=r[7],J=r[11],Z=r[15];return s[0]=a*I+o*E+c*A+l*q,s[4]=a*C+o*D+c*O+l*W,s[8]=a*V+o*X+c*G+l*J,s[12]=a*M+o*$+c*Y+l*Z,s[1]=h*I+u*E+d*A+f*q,s[5]=h*C+u*D+d*O+f*W,s[9]=h*V+u*X+d*G+f*J,s[13]=h*M+u*$+d*Y+f*Z,s[2]=g*I+x*E+m*A+p*q,s[6]=g*C+x*D+m*O+p*W,s[10]=g*V+x*X+m*G+p*J,s[14]=g*M+x*$+m*Y+p*Z,s[3]=v*I+_*E+T*A+R*q,s[7]=v*C+_*D+T*O+R*W,s[11]=v*V+_*X+T*G+R*J,s[15]=v*M+_*$+T*Y+R*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*o*d+i*l*d+r*o*f-i*c*f)+x*(+e*c*f-e*l*d+s*a*d-r*a*f+r*l*h-s*c*h)+m*(+e*l*u-e*o*f-s*a*u+i*a*f+s*o*h-i*l*h)+p*(-r*o*h-e*c*u+e*o*d+r*a*u-i*a*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,_=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,T=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,R=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,I=e*v+i*_+r*T+s*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return t[0]=v*C,t[1]=(x*d*s-u*m*s-x*r*f+i*m*f+u*r*p-i*d*p)*C,t[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*p+i*c*p)*C,t[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*f-i*c*f)*C,t[4]=_*C,t[5]=(h*m*s-g*d*s+g*r*f-e*m*f-h*r*p+e*d*p)*C,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*p-e*c*p)*C,t[7]=(a*d*s-h*c*s+h*r*l-e*d*l-a*r*f+e*c*f)*C,t[8]=T*C,t[9]=(g*u*s-h*x*s-g*i*f+e*x*f+h*i*p-e*u*p)*C,t[10]=(a*x*s-g*o*s+g*i*l-e*x*l-a*i*p+e*o*p)*C,t[11]=(h*o*s-a*u*s-h*i*l+e*u*l+a*i*f-e*o*f)*C,t[12]=R*C,t[13]=(h*x*r-g*u*r+g*i*d-e*x*d-h*i*m+e*u*m)*C,t[14]=(g*o*r-a*x*r-g*i*c+e*x*c+a*i*m-e*o*m)*C,t[15]=(a*u*r-h*o*r+h*i*c-e*u*c-a*i*d+e*o*d)*C,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,x=a*h,m=a*u,p=o*u,v=c*l,_=c*h,T=c*u,R=i.x,I=i.y,C=i.z;return r[0]=(1-(x+p))*R,r[1]=(f+T)*R,r[2]=(g-_)*R,r[3]=0,r[4]=(f-T)*I,r[5]=(1-(d+p))*I,r[6]=(m+v)*I,r[7]=0,r[8]=(g+_)*C,r[9]=(m-v)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=xs.set(r[0],r[1],r[2]).length(),a=xs.set(r[4],r[5],r[6]).length(),o=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Un.copy(this);let l=1/s,h=1/a,u=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=xi){let c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r),f,g;if(o===xi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Dc)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=xi){let c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(a-s),d=(e+t)*l,f=(i+r)*h,g,x;if(o===xi)g=(a+s)*u,x=-2*u;else if(o===Dc)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},xs=new P,Un=new Me,jv=new P(0,0,0),Jv=new P(1,1,1),Gi=new P,ac=new P,gn=new P,Sm=new Me,wm=new Zi,kc=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sm,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wm.setFromEuler(this),this.setFromQuaternion(wm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kc.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zv=0,Em=new P,ys=new Zi,fi=new Me,cc=new P,Oo=new P,Kv=new P,Qv=new Zi,Tm=new P(1,0,0),Am=new P(0,1,0),Cm=new P(0,0,1),tb={type:"added"},eb={type:"removed"},en=class n extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new kc,i=new Zi,r=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Vt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Tm,t)}rotateY(t){return this.rotateOnAxis(Am,t)}rotateZ(t){return this.rotateOnAxis(Cm,t)}translateOnAxis(t,e){return Em.copy(t).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tm,t)}translateY(t){return this.translateOnAxis(Am,t)}translateZ(t){return this.translateOnAxis(Cm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cc.copy(t):cc.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Oo,cc,this.up):fi.lookAt(cc,Oo,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(fi),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eb)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,Kv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Qv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};en.DEFAULT_UP=new P(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new P,pi=new P,Yh=new P,mi=new P,_s=new P,vs=new P,Rm=new P,$h=new P,jh=new P,Jh=new P,lc=!1,Rr=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Dn.subVectors(t,e),r.cross(Dn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Dn.subVectors(r,e),pi.subVectors(i,e),Yh.subVectors(t,e);let a=Dn.dot(Dn),o=Dn.dot(pi),c=Dn.dot(Yh),l=pi.dot(pi),h=pi.dot(Yh),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(t,e,i,r,s,a,o,c){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),this.getInterpolation(t,e,i,r,s,a,o,c)}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static isFrontFacing(t,e,i,r){return Dn.subVectors(i,e),pi.subVectors(t,e),Dn.cross(pi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Dn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,a,o;_s.subVectors(r,i),vs.subVectors(s,i),$h.subVectors(t,i);let c=_s.dot($h),l=vs.dot($h);if(c<=0&&l<=0)return e.copy(i);jh.subVectors(t,r);let h=_s.dot(jh),u=vs.dot(jh);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(_s,a);Jh.subVectors(t,s);let f=_s.dot(Jh),g=vs.dot(Jh);if(g>=0&&f<=g)return e.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(vs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rm.subVectors(s,r),o=(u-h)/(u-h+(f-g)),e.copy(r).addScaledVector(Rm,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(i).addScaledVector(_s,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Zh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=Zu(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Zh(a,s,t+1/3),this.g=Zh(a,s,t),this.b=Zh(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let i=wg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=Bh(t.r),this.g=Bh(t.g),this.b=Bh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Qt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Qe(Ve.r*255,0,255))*65536+Math.round(Qe(Ve.g*255,0,255))*256+Math.round(Qe(Ve.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ve.copy(this),e);let i=Ve.r,r=Ve.g,s=Ve.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Oe){Qt.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,i=Ve.g,r=Ve.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(hc);let i=Fo(Wi.h,hc.h,e),r=Fo(Wi.s,hc.s,e),s=Fo(Wi.l,hc.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Pt;Pt.NAMES=wg;var nb=0,Mi=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Ls,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=hu,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lu&&(i.blendSrc=this.blendSrc),this.blendDst!==hu&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Bs=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new P,uc=new Yt,We=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)uc.fromBufferAttribute(this,e),uc.applyMatrix3(t),this.setXY(e,uc.x,uc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gm&&(t.usage=this.usage),t}};var Vc=class extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hc=class extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var tn=class extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}};var ib=0,En=new Me,Kh=new en,bs=new P,xn=new bi,zo=new bi,Le=new P,nn=class n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sg(t)?Hc:Vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Kh.lookAt(t),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];zo.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(xn.min,zo.min),xn.expandByPoint(Le),Le.addVectors(xn.max,zo.max),xn.expandByPoint(Le)):(xn.expandByPoint(zo.min),xn.expandByPoint(zo.max))}xn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Le));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Le.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(t,l),Le.add(bs)),r=Math.max(r,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new P,h[E]=new P;let u=new P,d=new P,f=new P,g=new Yt,x=new Yt,m=new Yt,p=new P,v=new P;function _(E,D,X){u.fromArray(r,E*3),d.fromArray(r,D*3),f.fromArray(r,X*3),g.fromArray(a,E*2),x.fromArray(a,D*2),m.fromArray(a,X*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let $=1/(x.x*m.y-m.x*x.y);isFinite($)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar($),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar($),l[E].add(p),l[D].add(p),l[X].add(p),h[E].add(v),h[D].add(v),h[X].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let E=0,D=T.length;E<D;++E){let X=T[E],$=X.start,A=X.count;for(let O=$,G=$+A;O<G;O+=3)_(i[O+0],i[O+1],i[O+2])}let R=new P,I=new P,C=new P,V=new P;function M(E){C.fromArray(s,E*3),V.copy(C);let D=l[E];R.copy(D),R.sub(C.multiplyScalar(C.dot(D))).normalize(),I.crossVectors(V,D);let $=I.dot(h[E])<0?-1:1;c[E*4]=R.x,c[E*4+1]=R.y,c[E*4+2]=R.z,c[E*4+3]=$}for(let E=0,D=T.length;E<D;++E){let X=T[E],$=X.start,A=X.count;for(let O=$,G=$+A;O<G;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,i);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Im=new Me,wr=new Wo,dc=new Fs,Lm=new P,Ms=new P,Ss=new P,ws=new P,Qh=new P,fc=new P,pc=new Yt,mc=new Yt,gc=new Yt,Pm=new P,Um=new P,Dm=new P,xc=new P,yc=new P,be=class extends en{constructor(t=new nn,e=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){fc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Qh.fromBufferAttribute(u,t),a?fc.addScaledVector(Qh,h):fc.addScaledVector(Qh.sub(e),h))}e.add(fc)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(s),wr.copy(t.ray).recast(t.near),!(dc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(dc,Lm)===null||wr.origin.distanceToSquared(Lm)>(t.far-t.near)**2))&&(Im.copy(s).invert(),wr.copy(t.ray).applyMatrix4(Im),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=v,R=_;T<R;T+=3){let I=o.getX(T),C=o.getX(T+1),V=o.getX(T+2);r=_c(this,p,t,i,l,h,u,I,C,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),_=o.getX(m+1),T=o.getX(m+2);r=_c(this,a,t,i,l,h,u,v,_,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let T=v,R=_;T<R;T+=3){let I=T,C=T+1,V=T+2;r=_c(this,p,t,i,l,h,u,I,C,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,_=m+1,T=m+2;r=_c(this,a,t,i,l,h,u,v,_,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function rb(n,t,e,i,r,s,a,o){let c;if(t.side===Ge?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===cn,o),c===null)return null;yc.copy(o),yc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(yc);return l<e.near||l>e.far?null:{distance:l,point:yc.clone(),object:n}}function _c(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Ms),n.getVertexPosition(c,Ss),n.getVertexPosition(l,ws);let h=rb(n,t,e,i,Ms,Ss,ws,xc);if(h){r&&(pc.fromBufferAttribute(r,o),mc.fromBufferAttribute(r,c),gc.fromBufferAttribute(r,l),h.uv=Rr.getInterpolation(xc,Ms,Ss,ws,pc,mc,gc,new Yt)),s&&(pc.fromBufferAttribute(s,o),mc.fromBufferAttribute(s,c),gc.fromBufferAttribute(s,l),h.uv1=Rr.getInterpolation(xc,Ms,Ss,ws,pc,mc,gc,new Yt),h.uv2=h.uv1),a&&(Pm.fromBufferAttribute(a,o),Um.fromBufferAttribute(a,c),Dm.fromBufferAttribute(a,l),h.normal=Rr.getInterpolation(xc,Ms,Ss,ws,Pm,Um,Dm,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Rr.getNormal(Ms,Ss,ws,u.normal),h.face=u}return h}var Xn=class n extends nn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(u,2));function g(x,m,p,v,_,T,R,I,C,V,M){let E=T/C,D=R/V,X=T/2,$=R/2,A=I/2,O=C+1,G=V+1,Y=0,q=0,W=new P;for(let J=0;J<G;J++){let Z=J*D-$;for(let nt=0;nt<O;nt++){let B=nt*E-X;W[x]=B*v,W[m]=Z*_,W[p]=A,l.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=I>0?1:-1,h.push(W.x,W.y,W.z),u.push(nt/C),u.push(1-J/V),Y+=1}}for(let J=0;J<V;J++)for(let Z=0;Z<C;Z++){let nt=d+Z+O*J,B=d+Z+O*(J+1),j=d+(Z+1)+O*(J+1),ot=d+(Z+1)+O*J;c.push(nt,B,ot),c.push(B,j,ot),q+=6}o.addGroup(f,q,M),f+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=ks(n[e]);for(let r in i)t[r]=i[r]}return t}function sb(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Eg(n){return n.getRenderTarget()===null?n.outputColorSpace:Qt.workingColorSpace}var ob={clone:ks,merge:Ze},ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=sb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Gc=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yn=class extends Gc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,Ts=1,_u=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(Es,Ts,t,e);r.layers=this.layers,this.add(r);let s=new yn(Es,Ts,t,e);s.layers=this.layers,this.add(s);let a=new yn(Es,Ts,t,e);a.layers=this.layers,this.add(a);let o=new yn(Es,Ts,t,e);o.layers=this.layers,this.add(o);let c=new yn(Es,Ts,t,e);c.layers=this.layers,this.add(c);let l=new yn(Es,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wc=class extends Fn{constructor(t,e,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vu=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Pr?Oe:An),this.texture=new Wc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xn(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Yi});s.uniforms.tEquirect.value=e;let a=new be(r,s),o=e.minFilter;return e.minFilter===Vo&&(e.minFilter=Tn),new _u(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}},tu=new P,lb=new P,hb=new Vt,He=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=tu.subVectors(i,e).cross(lb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||hb.getNormalMatrix(t),r=this.coplanarPoint(tu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Er=new Fs,vc=new P,qo=class{constructor(t=new He,e=new He,i=new He,r=new He,s=new He,a=new He){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],f=r[8],g=r[9],x=r[10],m=r[11],p=r[12],v=r[13],_=r[14],T=r[15];if(i[0].setComponents(c-s,d-l,m-f,T-p).normalize(),i[1].setComponents(c+s,d+l,m+f,T+p).normalize(),i[2].setComponents(c+a,d+h,m+g,T+v).normalize(),i[3].setComponents(c-a,d-h,m-g,T-v).normalize(),i[4].setComponents(c-o,d-u,m-x,T-_).normalize(),e===xi)i[5].setComponents(c+o,d+u,m+x,T+_).normalize();else if(e===Dc)i[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(vc.x=r.normal.x>0?t.max.x:t.min.x,vc.y=r.normal.y>0?t.max.y:t.min.y,vc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tg(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function ub(n,t){let e=t.isWebGL2,i=new WeakMap;function r(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Vs=class n extends nn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let _=0;_<l;_++){let T=_*u-s;g.push(T,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let _=v+l*p,T=v+l*(p+1),R=v+1+l*(p+1),I=v+1+l*p;f.push(_,T,I),f.push(T,R,I)}this.setIndex(f),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
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
#endif`,pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
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
#endif`,bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
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
#endif`,Tb=`#ifdef USE_BUMPMAP
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zb=`vec3 transformedNormal = objectNormal;
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
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`
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
}`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qb=`#ifdef USE_GRADIENTMAP
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
}`,tM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
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
#endif`,uM=`struct PhysicalMaterial {
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
}`,dM=`
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
#endif`,fM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
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
#endif`,AM=`#ifdef USE_MORPHTARGETS
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
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
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
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JM=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,QM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
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
}`,yS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,wS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,CS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,IS=`#define MATCAP
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
}`,LS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,US=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,NS=`#define STANDARD
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
}`,OS=`#define STANDARD
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
}`,zS=`#define TOON
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
}`,FS=`#define TOON
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
}`,BS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,WS=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:db,alphahash_pars_fragment:fb,alphamap_fragment:pb,alphamap_pars_fragment:mb,alphatest_fragment:gb,alphatest_pars_fragment:xb,aomap_fragment:yb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:bb,begin_vertex:Mb,beginnormal_vertex:Sb,bsdfs:wb,iridescence_fragment:Eb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Ab,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Ib,color_fragment:Lb,color_pars_fragment:Pb,color_pars_vertex:Ub,color_vertex:Db,common:Nb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:zb,displacementmap_pars_vertex:Fb,displacementmap_vertex:Bb,emissivemap_fragment:kb,emissivemap_pars_fragment:Vb,colorspace_fragment:Hb,colorspace_pars_fragment:Gb,envmap_fragment:Wb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:qb,envmap_pars_vertex:Yb,envmap_physical_pars_fragment:sM,envmap_vertex:$b,fog_vertex:jb,fog_pars_vertex:Jb,fog_fragment:Zb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Qb,lightmap_fragment:tM,lightmap_pars_fragment:eM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:cM,lights_phong_pars_fragment:lM,lights_physical_fragment:hM,lights_physical_pars_fragment:uM,lights_fragment_begin:dM,lights_fragment_maps:fM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:yM,map_fragment:_M,map_pars_fragment:vM,map_particle_fragment:bM,map_particle_pars_fragment:MM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:wM,morphcolor_vertex:EM,morphnormal_vertex:TM,morphtarget_pars_vertex:AM,morphtarget_vertex:CM,normal_fragment_begin:RM,normal_fragment_maps:IM,normal_pars_fragment:LM,normal_pars_vertex:PM,normal_vertex:UM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:FM,opaque_fragment:BM,packing:kM,premultiplied_alpha_fragment:VM,project_vertex:HM,dithering_fragment:GM,dithering_pars_fragment:WM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:$M,shadowmap_vertex:jM,shadowmask_pars_fragment:JM,skinbase_vertex:ZM,skinning_pars_vertex:KM,skinning_vertex:QM,skinnormal_vertex:tS,specularmap_fragment:eS,specularmap_pars_fragment:nS,tonemapping_fragment:iS,tonemapping_pars_fragment:rS,transmission_fragment:sS,transmission_pars_fragment:oS,uv_pars_fragment:aS,uv_pars_vertex:cS,uv_vertex:lS,worldpos_vertex:hS,background_vert:uS,background_frag:dS,backgroundCube_vert:fS,backgroundCube_frag:pS,cube_vert:mS,cube_frag:gS,depth_vert:xS,depth_frag:yS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:bS,equirect_frag:MS,linedashed_vert:SS,linedashed_frag:wS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:AS,meshlambert_frag:CS,meshmatcap_vert:RS,meshmatcap_frag:IS,meshnormal_vert:LS,meshnormal_frag:PS,meshphong_vert:US,meshphong_frag:DS,meshphysical_vert:NS,meshphysical_frag:OS,meshtoon_vert:zS,meshtoon_frag:FS,points_vert:BS,points_frag:kS,shadow_vert:VS,shadow_frag:HS,sprite_vert:GS,sprite_frag:WS},lt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Wn={basic:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ze([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ze([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ze([lt.points,lt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ze([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ze([lt.common,lt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ze([lt.sprite,lt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ze([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ze([lt.lights,lt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Wn.physical={uniforms:Ze([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var bc={r:0,b:0,g:0};function XS(n,t,e,i,r,s,a){let o=new Pt(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Kc)?(h===void 0&&(h=new be(new Xn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ks(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new be(new Vs(2,2),new Bn({name:"BackgroundMaterial",uniforms:ks(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(bc,Eg(n)),i.buffers.color.setClear(bc.r,bc.g,bc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function qS(n,t,e,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function u(A,O,G,Y,q){let W=!1;if(a){let J=x(Y,G,O);l!==J&&(l=J,f(l.object)),W=p(A,Y,G,q),W&&v(A,Y,G,q)}else{let J=O.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=J,W=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,V(A,O,G,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(A){return i.isWebGL2?n.bindVertexArray(A):s.bindVertexArrayOES(A)}function g(A){return i.isWebGL2?n.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function x(A,O,G){let Y=G.wireframe===!0,q=o[A.id];q===void 0&&(q={},o[A.id]=q);let W=q[O.id];W===void 0&&(W={},q[O.id]=W);let J=W[Y];return J===void 0&&(J=m(d()),W[Y]=J),J}function m(A){let O=[],G=[],Y=[];for(let q=0;q<r;q++)O[q]=0,G[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:Y,object:A,attributes:{},index:null}}function p(A,O,G,Y){let q=l.attributes,W=O.attributes,J=0,Z=G.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=q[nt],ot=W[nt];if(ot===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(ot=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(ot=A.instanceColor)),j===void 0||j.attribute!==ot||ot&&j.data!==ot.data)return!0;J++}return l.attributesNum!==J||l.index!==Y}function v(A,O,G,Y){let q={},W=O.attributes,J=0,Z=G.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let j=W[nt];j===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(j=A.instanceColor));let ot={};ot.attribute=j,j&&j.data&&(ot.data=j.data),q[nt]=ot,J++}l.attributes=q,l.attributesNum=J,l.index=Y}function _(){let A=l.newAttributes;for(let O=0,G=A.length;O<G;O++)A[O]=0}function T(A){R(A,0)}function R(A,O){let G=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;G[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),q[A]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,O),q[A]=O)}function I(){let A=l.newAttributes,O=l.enabledAttributes;for(let G=0,Y=O.length;G<Y;G++)O[G]!==A[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function C(A,O,G,Y,q,W,J){J===!0?n.vertexAttribIPointer(A,O,G,q,W):n.vertexAttribPointer(A,O,G,Y,q,W)}function V(A,O,G,Y){if(i.isWebGL2===!1&&(A.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=Y.attributes,W=G.getAttributes(),J=O.defaultAttributeValues;for(let Z in W){let nt=W[Z];if(nt.location>=0){let B=q[Z];if(B===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let j=B.normalized,ot=B.itemSize,tt=e.get(B);if(tt===void 0)continue;let st=tt.buffer,at=tt.type,ft=tt.bytesPerElement,gt=i.isWebGL2===!0&&(at===n.INT||at===n.UNSIGNED_INT||B.gpuType===dg);if(B.isInterleavedBufferAttribute){let vt=B.data,N=vt.stride,ce=B.offset;if(vt.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)R(nt.location+_t,vt.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let _t=0;_t<nt.locationSize;_t++)T(nt.location+_t);n.bindBuffer(n.ARRAY_BUFFER,st);for(let _t=0;_t<nt.locationSize;_t++)C(nt.location+_t,ot/nt.locationSize,at,j,N*ft,(ce+ot/nt.locationSize*_t)*ft,gt)}else{if(B.isInstancedBufferAttribute){for(let vt=0;vt<nt.locationSize;vt++)R(nt.location+vt,B.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let vt=0;vt<nt.locationSize;vt++)T(nt.location+vt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let vt=0;vt<nt.locationSize;vt++)C(nt.location+vt,ot/nt.locationSize,at,j,ot*ft,ot/nt.locationSize*vt*ft,gt)}}else if(J!==void 0){let j=J[Z];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(nt.location,j);break;case 3:n.vertexAttrib3fv(nt.location,j);break;case 4:n.vertexAttrib4fv(nt.location,j);break;default:n.vertexAttrib1fv(nt.location,j)}}}}I()}function M(){X();for(let A in o){let O=o[A];for(let G in O){let Y=O[G];for(let q in Y)g(Y[q].object),delete Y[q];delete O[G]}delete o[A]}}function E(A){if(o[A.id]===void 0)return;let O=o[A.id];for(let G in O){let Y=O[G];for(let q in Y)g(Y[q].object),delete Y[q];delete O[G]}delete o[A.id]}function D(A){for(let O in o){let G=o[O];if(G[A.id]===void 0)continue;let Y=G[A.id];for(let q in Y)g(Y[q].object),delete Y[q];delete G[A.id]}}function X(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:T,disableUnusedAttributes:I}}function YS(n,t,e,i){let r=i.isWebGL2,s;function a(h){s=h}function o(h,u){n.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,u,d),e.update(u,s,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function $S(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=a||t.has("OES_texture_float"),R=_&&T,I=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:I}}function jS(n){let t=this,e=null,i=0,r=!1,s=!1,a=new He,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let v=s?0:i,_=v*4,T=p.clippingState||null;c.value=T,T=h(g,d,_,f);for(let R=0;R!==_;++R)T[R]=e[R];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,T=f;_!==x;++_,T+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function JS(n){let t=new WeakMap;function e(a,o){return o===uu?a.mapping=Ns:o===du&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===uu||o===du)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new vu(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Hs=class extends Gc{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,Nm=[.125,.215,.35,.446,.526,.582],Cr=20,eu=new Hs,Om=new Pt,nu=null,iu=0,ru=0,Tr=(1+Math.sqrt(5))/2,As=1/Tr,zm=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Tr,As),new P(0,Tr,-As),new P(As,0,Tr),new P(-As,0,Tr),new P(Tr,As,0),new P(-Tr,As,0)],Xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nu,iu,ru),t.scissorTest=!1,Mc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ho,format:zn,colorSpace:_i,depthBuffer:!1},r=Fm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(s)),this._blurMaterial=KS(s,t,e)}return r}_compileMaterial(t){let e=new be(this._lodPlanes[0],t);this._renderer.compile(e,eu)}_sceneToCubeUV(t,e,i,r){let o=new yn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Om),h.toneMapping=$i,h.autoClear=!1;let f=new Bs({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new be(new Xn,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Om),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Mc(r,v*_,p>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Ns||t.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Mc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,eu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zm[(r-1)%zm.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new be(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cr-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Cr;m>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);let p=[],v=0;for(let C=0;C<Cr;++C){let V=C/x,M=Math.exp(-V*V/2);p.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let T=this._sizeLods[r],R=3*T*(r>_-Rs?r-_+Rs:0),I=4*(this._cubeSize-T);Mc(e,R,I,3*T,2*T),c.setRenderTarget(e),c.render(u,eu)}};function ZS(n){let t=[],e=[],i=[],r=n,s=n-Rs+1+Nm.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Rs?c=Nm[a-n+Rs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let I=0;I<f;I++){let C=I%3*2/3-1,V=I>2?0:-1,M=[C,V,0,C+2/3,V,0,C+2/3,V+1,0,C,V,0,C+2/3,V+1,0,C,V+1,0];v.set(M,x*g*I),_.set(d,m*g*I);let E=[I,I,I,I,I,I];T.set(E,p*g*I)}let R=new nn;R.setAttribute("position",new We(v,x)),R.setAttribute("uv",new We(_,m)),R.setAttribute("faceIndex",new We(T,p)),t.push(R),r>Rs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fm(n,t,e){let i=new vi(n,t,e);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function KS(n,t,e){let i=new Float32Array(Cr),r=new P(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Bm(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function km(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}function QS(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===uu||c===du,h=c===Ns||c===Os;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Xc(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new Xc(n));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function tw(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ew(n,t,e,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,T=v.length;_<T;_+=3){let R=v[_+0],I=v[_+1],C=v[_+2];d.push(R,I,I,C,C,R)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,T=v.length/3-1;_<T;_+=3){let R=_+0,I=_+1,C=_+2;d.push(R,I,I,C,C,R)}}else return;let m=new(Sg(d)?Hc:Vc)(d,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function nw(n,t,e,i){let r=i.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(s,g,o,f*c),e.update(g,s,1)}function u(f,g,x){if(x===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*c,x),e.update(g,s,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function iw(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function rw(n,t){return n[0]-t[0]}function sw(n,t){return Math.abs(t[1])-Math.abs(n[1])}function ow(n,t,e){let i={},r=new Float32Array(8),s=new WeakMap,a=new Pe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=s.get(h);if(x===void 0||x.count!==g){let A=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",A)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],V=0;v===!0&&(V=1),_===!0&&(V=2),T===!0&&(V=3);let M=h.attributes.position.count*V,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*E*4*g),X=new Bc(D,M,E,g);X.type=qi,X.needsUpdate=!0;let $=V*4;for(let O=0;O<g;O++){let G=R[O],Y=I[O],q=C[O],W=M*E*4*O;for(let J=0;J<G.count;J++){let Z=J*$;v===!0&&(a.fromBufferAttribute(G,J),D[W+Z+0]=a.x,D[W+Z+1]=a.y,D[W+Z+2]=a.z,D[W+Z+3]=0),_===!0&&(a.fromBufferAttribute(Y,J),D[W+Z+4]=a.x,D[W+Z+5]=a.y,D[W+Z+6]=a.z,D[W+Z+7]=0),T===!0&&(a.fromBufferAttribute(q,J),D[W+Z+8]=a.x,D[W+Z+9]=a.y,D[W+Z+10]=a.z,D[W+Z+11]=q.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new Yt(M,E)},s.set(h,x),h.addEventListener("dispose",A)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){let T=g[_];T[0]=_,T[1]=d[_]}g.sort(sw);for(let _=0;_<8;_++)_<f&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(rw);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let T=o[_],R=T[0],I=T[1];R!==Number.MAX_SAFE_INTEGER&&I?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),r[_]=I,p+=I):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function aw(n,t,e,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var qc=class extends Fn{constructor(t,e,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:Lr,h!==Lr&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Lr&&(i=Xi),i===void 0&&h===zs&&(i=Ir),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ag=new Fn,Cg=new qc(1,1);Cg.compareFunction=bg;var Rg=new Bc,Ig=new yu,Lg=new Wc,Vm=[],Hm=[],Gm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function Xs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=Vm[r];if(s===void 0&&(s=new Float32Array(r),Vm[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tl(n,t){let e=Hm[t];e===void 0&&(e=new Int32Array(t),Hm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function hw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function uw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function dw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Xm.set(i),n.uniformMatrix2fv(this.addr,!1,Xm),we(e,i)}}function fw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Wm.set(i),n.uniformMatrix3fv(this.addr,!1,Wm),we(e,i)}}function pw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Gm.set(i),n.uniformMatrix4fv(this.addr,!1,Gm),we(e,i)}}function mw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function xw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function yw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function _w(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function bw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function Mw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function Sw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Cg:Ag;e.setTexture2D(t||s,r)}function ww(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ig,r)}function Ew(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Lg,r)}function Tw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Rg,r)}function Aw(n){switch(n){case 5126:return cw;case 35664:return lw;case 35665:return hw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return xw;case 35669:case 35673:return yw;case 5125:return _w;case 36294:return vw;case 36295:return bw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}function Cw(n,t){n.uniform1fv(this.addr,t)}function Rw(n,t){let e=Xs(t,this.size,2);n.uniform2fv(this.addr,e)}function Iw(n,t){let e=Xs(t,this.size,3);n.uniform3fv(this.addr,e)}function Lw(n,t){let e=Xs(t,this.size,4);n.uniform4fv(this.addr,e)}function Pw(n,t){let e=Xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Uw(n,t){let e=Xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Dw(n,t){let e=Xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Nw(n,t){n.uniform1iv(this.addr,t)}function Ow(n,t){n.uniform2iv(this.addr,t)}function zw(n,t){n.uniform3iv(this.addr,t)}function Fw(n,t){n.uniform4iv(this.addr,t)}function Bw(n,t){n.uniform1uiv(this.addr,t)}function kw(n,t){n.uniform2uiv(this.addr,t)}function Vw(n,t){n.uniform3uiv(this.addr,t)}function Hw(n,t){n.uniform4uiv(this.addr,t)}function Gw(n,t,e){let i=this.cache,r=t.length,s=tl(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ag,s[a])}function Ww(n,t,e){let i=this.cache,r=t.length,s=tl(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ig,s[a])}function Xw(n,t,e){let i=this.cache,r=t.length,s=tl(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Lg,s[a])}function qw(n,t,e){let i=this.cache,r=t.length,s=tl(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Rg,s[a])}function Yw(n){switch(n){case 5126:return Cw;case 35664:return Rw;case 35665:return Iw;case 35666:return Lw;case 35674:return Pw;case 35675:return Uw;case 35676:return Dw;case 5124:case 35670:return Nw;case 35667:case 35671:return Ow;case 35668:case 35672:return zw;case 35669:case 35673:return Fw;case 5125:return Bw;case 36294:return kw;case 36295:return Vw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return qw}}var bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Aw(e.type)}},Mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yw(e.type)}},Su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],i)}}},su=/(\w+)(\])?(\[|\.)?/g;function qm(n,t){n.seq.push(t),n.map[t.id]=t}function $w(n,t,e){let i=n.name,r=i.length;for(su.lastIndex=0;;){let s=su.exec(i),a=su.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){qm(e,l===void 0?new bu(o,n,t):new Mu(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Su(o),qm(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);$w(s,a,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&i.push(a)}return i}};function Ym(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var jw=37297,Jw=0;function Zw(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Kw(n){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n),i;switch(t===e?i="":t===Uc&&e===Pc?i="LinearDisplayP3ToLinearSRGB":t===Pc&&e===Uc&&(i="LinearSRGBToLinearDisplayP3"),n){case _i:case Qc:return[i,"LinearTransferOETF"];case Oe:case Ju:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $m(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Zw(n.getShaderSource(t),a)}else return r}function Qw(n,t){let e=Kw(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tE(n,t){let e;switch(t){case sv:e="Linear";break;case ov:e="Reinhard";break;case av:e="OptimizedCineon";break;case cv:e="ACESFilmic";break;case hv:e="AgX";break;case lv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function eE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function nE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function iE(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rE(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Is(n){return n!==""}function jm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(sE,aE)}var oE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aE(n,t){let e=Nt[t];if(e===void 0){let i=oE.get(t);if(i!==void 0)e=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wu(e)}var cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(n){return n.replace(cE,lE)}function lE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hg?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function uE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function fE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $u:t="ENVMAP_BLENDING_MULTIPLY";break;case iv:t="ENVMAP_BLENDING_MIX";break;case rv:t="ENVMAP_BLENDING_ADD";break}return t}function pE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mE(n,t,e,i){let r=n.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=hE(e),l=uE(e),h=dE(e),u=fE(e),d=pE(e),f=e.isWebGL2?"":eE(e),g=nE(e),x=iE(s),m=r.createProgram(),p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Is).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Is).join(`
`),v.length>0&&(v+=`
`)):(p=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),v=[f,Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?Nt.tonemapping_pars_fragment:"",e.toneMapping!==$i?tE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Qw("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=wu(a),a=jm(a,e),a=Jm(a,e),o=wu(o),o=jm(o,e),o=Jm(o,e),a=Zm(a),o=Zm(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=_+p+a,R=_+v+o,I=Ym(r,r.VERTEX_SHADER,T),C=Ym(r,r.FRAGMENT_SHADER,R);r.attachShader(m,I),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function V(X){if(n.debug.checkShaderErrors){let $=r.getProgramInfoLog(m).trim(),A=r.getShaderInfoLog(I).trim(),O=r.getShaderInfoLog(C).trim(),G=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,I,C);else{let q=$m(r,I,"vertex"),W=$m(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+W)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(A===""||O==="")&&(Y=!1);Y&&(X.diagnostics={runnable:G,programLog:$,vertexShader:{log:A,prefix:p},fragmentShader:{log:O,prefix:v}})}r.deleteShader(I),r.deleteShader(C),M=new Ds(r,m),E=rE(r,m)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let E;this.getAttributes=function(){return E===void 0&&V(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,jw)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jw++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=C,this}var gE=0,Eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Tu(t),e.set(t,i)),i}},Tu=class{constructor(t){this.id=gE++,this.code=t,this.usedTimes=0}};function xE(n,t,e,i,r,s,a){let o=new Xo,c=new Eu,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,D,X,$){let A=X.fog,O=$.geometry,G=M.isMeshStandardMaterial?X.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),q=Y&&Y.mapping===Kc?Y.image.height:null,W=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=J!==void 0?J.length:0,nt=0;O.morphAttributes.position!==void 0&&(nt=1),O.morphAttributes.normal!==void 0&&(nt=2),O.morphAttributes.color!==void 0&&(nt=3);let B,j,ot,tt;if(W){let $e=Wn[W];B=$e.vertexShader,j=$e.fragmentShader}else B=M.vertexShader,j=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),tt=c.getFragmentShaderID(M);let st=n.getRenderTarget(),at=$.isInstancedMesh===!0,ft=$.isBatchedMesh===!0,gt=!!M.map,vt=!!M.matcap,N=!!Y,ce=!!M.aoMap,_t=!!M.lightMap,mt=!!M.bumpMap,rt=!!M.normalMap,ne=!!M.displacementMap,It=!!M.emissiveMap,w=!!M.metalnessMap,b=!!M.roughnessMap,z=M.anisotropy>0,et=M.clearcoat>0,Q=M.iridescence>0,it=M.sheen>0,bt=M.transmission>0,dt=z&&!!M.anisotropyMap,xt=et&&!!M.clearcoatMap,Tt=et&&!!M.clearcoatNormalMap,Ot=et&&!!M.clearcoatRoughnessMap,K=Q&&!!M.iridescenceMap,Kt=Q&&!!M.iridescenceThicknessMap,Ht=it&&!!M.sheenColorMap,Rt=it&&!!M.sheenRoughnessMap,St=!!M.specularMap,yt=!!M.specularColorMap,Dt=!!M.specularIntensityMap,Jt=bt&&!!M.transmissionMap,pe=bt&&!!M.thicknessMap,Bt=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,ht=!!M.alphaHash,ut=!!M.extensions,At=!!O.attributes.uv1,wt=!!O.attributes.uv2,ie=!!O.attributes.uv3,re=$i;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(re=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:j,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ft,instancing:at,instancingColor:at&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_i,map:gt,matcap:vt,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:_t,bumpMap:mt,normalMap:rt,displacementMap:d&&ne,emissiveMap:It,normalMapObjectSpace:rt&&M.normalMapType===Mv,normalMapTangentSpace:rt&&M.normalMapType===vg,metalnessMap:w,roughnessMap:b,anisotropy:z,anisotropyMap:dt,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:Q,iridescenceMap:K,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Ht,sheenRoughnessMap:Rt,specularMap:St,specularColorMap:yt,specularIntensityMap:Dt,transmission:bt,transmissionMap:Jt,thicknessMap:pe,gradientMap:Bt,opaque:M.transparent===!1&&M.blending===Ls,alphaMap:ct,alphaTest:L,alphaHash:ht,combine:M.combine,mapUv:gt&&x(M.map.channel),aoMapUv:ce&&x(M.aoMap.channel),lightMapUv:_t&&x(M.lightMap.channel),bumpMapUv:mt&&x(M.bumpMap.channel),normalMapUv:rt&&x(M.normalMap.channel),displacementMapUv:ne&&x(M.displacementMap.channel),emissiveMapUv:It&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:dt&&x(M.anisotropyMap.channel),clearcoatMapUv:xt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(M.sheenRoughnessMap.channel),specularMapUv:St&&x(M.specularMap.channel),specularColorMapUv:yt&&x(M.specularColorMap.channel),specularIntensityMapUv:Dt&&x(M.specularIntensityMap.channel),transmissionMapUv:Jt&&x(M.transmissionMap.channel),thicknessMapUv:pe&&x(M.thicknessMap.channel),alphaMapUv:ct&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(rt||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:wt,vertexUv3s:ie,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(gt||ct),fog:!!A,useFog:M.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nn,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ut&&M.extensions.derivatives===!0,extensionFragDepth:ut&&M.extensions.fragDepth===!0,extensionDrawBuffers:ut&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(E,M),_(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function T(M){let E=g[M.type],D;if(E){let X=Wn[E];D=ob.clone(X.uniforms)}else D=M.uniforms;return D}function R(M,E){let D;for(let X=0,$=l.length;X<$;X++){let A=l[X];if(A.cacheKey===E){D=A,++D.usedTimes;break}}return D===void 0&&(D=new mE(n,E,M,s),l.push(D)),D}function I(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:R,releaseProgram:I,releaseShaderCache:C,programs:l,dispose:V}}function yE(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function _E(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tg(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function c(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||_E),i.length>1&&i.sort(d||Qm),r.length>1&&r.sort(d||Qm)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function vE(){let n=new WeakMap;function t(i,r){let s=n.get(i),a;return s===void 0?(a=new tg,n.set(i,[a])):r>=s.length?(a=new tg,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function bE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Pt};break;case"SpotLight":e={position:new P,direction:new P,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function ME(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var SE=0;function wE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function EE(n,t){let e=new bE,i=ME(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);let s=new P,a=new Me,o=new Me;function c(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,T=0,R=0,I=0,C=0,V=0,M=0;h.sort(wE);let E=u===!0?Math.PI:1;for(let X=0,$=h.length;X<$;X++){let A=h[X],O=A.color,G=A.intensity,Y=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=O.r*G*E,f+=O.g*G*E,g+=O.b*G*E;else if(A.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(A.sh.coefficients[W],G);M++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*E),A.castShadow){let J=A.shadow,Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=q,r.directionalShadowMatrix[x]=A.shadow.matrix,T++}r.directional[x]=W,x++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(O).multiplyScalar(G*E),W.distance=Y,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,r.spot[p]=W;let J=A.shadow;if(A.map&&(r.spotLightMap[C]=A.map,C++,J.updateMatrices(A),A.castShadow&&V++),r.spotLightMatrix[p]=J.matrix,A.castShadow){let Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.spotShadow[p]=Z,r.spotShadowMap[p]=q,I++}p++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),r.rectArea[v]=W,v++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity*E),W.distance=A.distance,W.decay=A.decay,A.castShadow){let J=A.shadow,Z=i.get(A);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=A.shadow.matrix,R++}r.point[m]=W,m++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(G*E),W.groundColor.copy(A.groundColor).multiplyScalar(G*E),r.hemi[_]=W,_++}}v>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;let D=r.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==T||D.numPointShadows!==R||D.numSpotShadows!==I||D.numSpotMaps!==C||D.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=p,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=I+C-V,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=M,D.directionalLength=x,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=T,D.numPointShadows=R,D.numSpotShadows=I,D.numSpotMaps=C,D.numLightProbes=M,r.version=SE++)}function l(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let T=h[v];if(T.isDirectionalLight){let R=r.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(T.isSpotLight){let R=r.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(T.isRectAreaLight){let R=r.rectArea[x];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let R=r.point[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let R=r.hemi[m];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:r}}function eg(n,t){let e=new EE(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(u){i.push(u)}function o(u){r.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function TE(n,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),c;return o===void 0?(c=new eg(n,t),e.set(s,[c])):a>=o.length?(c=new eg(n,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:i,dispose:r}}var Au=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cu=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`;function RE(n,t,e){let i=new qo,r=new Yt,s=new Yt,a=new Pe,o=new Au({depthPacking:bv}),c=new Cu,l={},h=e.maxTextureSize,u={[cn]:Ge,[Ge]:cn,[Nn]:Nn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:AE,fragmentShader:CE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let p=this.type;this.render=function(I,C,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Yi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let $=p!==gi&&this.type===gi,A=p===gi&&this.type!==gi;for(let O=0,G=I.length;O<G;O++){let Y=I[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let W=q.getFrameExtents();if(r.multiply(W),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,q.mapSize.y=s.y)),q.map===null||$===!0||A===!0){let Z=this.type!==gi?{minFilter:Ke,magFilter:Ke}:{};q.map!==null&&q.map.dispose(),q.map=new vi(r.x,r.y,Z),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let J=q.getViewportCount();for(let Z=0;Z<J;Z++){let nt=q.getViewport(Z);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),X.viewport(a),q.updateMatrices(Y,Z),i=q.getFrustum(),T(C,V,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===gi&&v(q,V),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,D)};function v(I,C){let V=t.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new vi(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(C,null,V,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(C,null,V,f,x,null)}function _(I,C,V,M){let E=null,D=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)E=D;else if(E=V.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=E.uuid,$=C.uuid,A=l[X];A===void 0&&(A={},l[X]=A);let O=A[$];O===void 0&&(O=E.clone(),A[$]=O,C.addEventListener("dispose",R)),E=O}if(E.visible=C.visible,E.wireframe=C.wireframe,M===gi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let X=n.properties.get(E);X.light=V}return E}function T(I,C,V,M,E){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===gi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);let $=t.update(I),A=I.material;if(Array.isArray(A)){let O=$.groups;for(let G=0,Y=O.length;G<Y;G++){let q=O[G],W=A[q.materialIndex];if(W&&W.visible){let J=_(I,W,M,E);I.onBeforeShadow(n,I,C,V,$,J,q),n.renderBufferDirect(V,null,$,J,I,q),I.onAfterShadow(n,I,C,V,$,J,q)}}}else if(A.visible){let O=_(I,A,M,E);I.onBeforeShadow(n,I,C,V,$,O,null),n.renderBufferDirect(V,null,$,O,I,null),I.onAfterShadow(n,I,C,V,$,O,null)}}let X=I.children;for(let $=0,A=X.length;$<A;$++)T(X[$],C,V,M,E)}function R(I){I.target.removeEventListener("dispose",R);for(let V in l){let M=l[V],E=I.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function IE(n,t,e){let i=e.isWebGL2;function r(){let L=!1,ht=new Pe,ut=null,At=new Pe(0,0,0,0);return{setMask:function(wt){ut!==wt&&!L&&(n.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){L=wt},setClear:function(wt,ie,re,Re,$e){$e===!0&&(wt*=Re,ie*=Re,re*=Re),ht.set(wt,ie,re,Re),At.equals(ht)===!1&&(n.clearColor(wt,ie,re,Re),At.copy(ht))},reset:function(){L=!1,ut=null,At.set(-1,0,0,0)}}}function s(){let L=!1,ht=null,ut=null,At=null;return{setTest:function(wt){wt?ft(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(wt){ht!==wt&&!L&&(n.depthMask(wt),ht=wt)},setFunc:function(wt){if(ut!==wt){switch(wt){case J_:n.depthFunc(n.NEVER);break;case Z_:n.depthFunc(n.ALWAYS);break;case K_:n.depthFunc(n.LESS);break;case Cc:n.depthFunc(n.LEQUAL);break;case Q_:n.depthFunc(n.EQUAL);break;case tv:n.depthFunc(n.GEQUAL);break;case ev:n.depthFunc(n.GREATER);break;case nv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=wt}},setLocked:function(wt){L=wt},setClear:function(wt){At!==wt&&(n.clearDepth(wt),At=wt)},reset:function(){L=!1,ht=null,ut=null,At=null}}}function a(){let L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Re=null,$e=null;return{setTest:function(se){L||(se?ft(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!L&&(n.stencilMask(se),ht=se)},setFunc:function(se,je,Gn){(ut!==se||At!==je||wt!==Gn)&&(n.stencilFunc(se,je,Gn),ut=se,At=je,wt=Gn)},setOp:function(se,je,Gn){(ie!==se||re!==je||Re!==Gn)&&(n.stencilOp(se,je,Gn),ie=se,re=je,Re=Gn)},setLocked:function(se){L=se},setClear:function(se){$e!==se&&(n.clearStencil(se),$e=se)},reset:function(){L=!1,ht=null,ut=null,At=null,wt=null,ie=null,re=null,Re=null,$e=null}}}let o=new r,c=new s,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,T=null,R=null,I=null,C=null,V=null,M=new Pt(0,0,0),E=0,D=!1,X=null,$=null,A=null,O=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let Z=null,nt={},B=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),ot=new Pe().fromArray(B),tt=new Pe().fromArray(j);function st(L,ht,ut,At){let wt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<ut;re++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(ht+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return ie}let at={};at[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),c.setFunc(Cc),It(!1),w(Dp),ft(n.CULL_FACE),rt(Yi);function ft(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function gt(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function vt(L,ht){return f[L]!==ht?(n.bindFramebuffer(L,ht),f[L]=ht,i&&(L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ht),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function N(L,ht){let ut=x,At=!1;if(L)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),L.isWebGLMultipleRenderTargets){let wt=L.texture;if(ut.length!==wt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,re=wt.length;ie<re;ie++)ut[ie]=n.COLOR_ATTACHMENT0+ie;ut.length=wt.length,At=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,At=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,At=!0);At&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function ce(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let _t={[Ar]:n.FUNC_ADD,[N_]:n.FUNC_SUBTRACT,[O_]:n.FUNC_REVERSE_SUBTRACT};if(i)_t[Fp]=n.MIN,_t[Bp]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(_t[Fp]=L.MIN_EXT,_t[Bp]=L.MAX_EXT)}let mt={[z_]:n.ZERO,[F_]:n.ONE,[B_]:n.SRC_COLOR,[lu]:n.SRC_ALPHA,[X_]:n.SRC_ALPHA_SATURATE,[G_]:n.DST_COLOR,[V_]:n.DST_ALPHA,[k_]:n.ONE_MINUS_SRC_COLOR,[hu]:n.ONE_MINUS_SRC_ALPHA,[W_]:n.ONE_MINUS_DST_COLOR,[H_]:n.ONE_MINUS_DST_ALPHA,[q_]:n.CONSTANT_COLOR,[Y_]:n.ONE_MINUS_CONSTANT_COLOR,[$_]:n.CONSTANT_ALPHA,[j_]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(L,ht,ut,At,wt,ie,re,Re,$e,se){if(L===Yi){p===!0&&(gt(n.BLEND),p=!1);return}if(p===!1&&(ft(n.BLEND),p=!0),L!==D_){if(L!==v||se!==D){if((_!==Ar||I!==Ar)&&(n.blendEquation(n.FUNC_ADD),_=Ar,I=Ar),se)switch(L){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Np:n.blendFunc(n.ONE,n.ONE);break;case Op:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Np:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Op:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,R=null,C=null,V=null,M.set(0,0,0),E=0,v=L,D=se}return}wt=wt||ht,ie=ie||ut,re=re||At,(ht!==_||wt!==I)&&(n.blendEquationSeparate(_t[ht],_t[wt]),_=ht,I=wt),(ut!==T||At!==R||ie!==C||re!==V)&&(n.blendFuncSeparate(mt[ut],mt[At],mt[ie],mt[re]),T=ut,R=At,C=ie,V=re),(Re.equals(M)===!1||$e!==E)&&(n.blendColor(Re.r,Re.g,Re.b,$e),M.copy(Re),E=$e),v=L,D=!1}function ne(L,ht){L.side===Nn?gt(n.CULL_FACE):ft(n.CULL_FACE);let ut=L.side===Ge;ht&&(ut=!ut),It(ut),L.blending===Ls&&L.transparent===!1?rt(Yi):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);let At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(L){X!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),X=L)}function w(L){L!==P_?(ft(n.CULL_FACE),L!==$&&(L===Dp?n.cullFace(n.BACK):L===U_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),$=L}function b(L){L!==A&&(q&&n.lineWidth(L),A=L)}function z(L,ht,ut){L?(ft(n.POLYGON_OFFSET_FILL),(O!==ht||G!==ut)&&(n.polygonOffset(ht,ut),O=ht,G=ut)):gt(n.POLYGON_OFFSET_FILL)}function et(L){L?ft(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Q(L){L===void 0&&(L=n.TEXTURE0+Y-1),Z!==L&&(n.activeTexture(L),Z=L)}function it(L,ht,ut){ut===void 0&&(Z===null?ut=n.TEXTURE0+Y-1:ut=Z);let At=nt[ut];At===void 0&&(At={type:void 0,texture:void 0},nt[ut]=At),(At.type!==L||At.texture!==ht)&&(Z!==ut&&(n.activeTexture(ut),Z=ut),n.bindTexture(L,ht||at[L]),At.type=L,At.texture=ht)}function bt(){let L=nt[Z];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Jt(L){tt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function pe(L,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let At=ut.get(L);At===void 0&&(At=n.getUniformBlockIndex(ht,L.name),ut.set(L,At))}function Bt(L,ht){let At=u.get(ht).get(L);h.get(ht)!==At&&(n.uniformBlockBinding(ht,At,L.__bindingPointIndex),h.set(ht,At))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Z=null,nt={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,T=null,R=null,I=null,C=null,V=null,M=new Pt(0,0,0),E=0,D=!1,X=null,$=null,A=null,O=null,G=null,ot.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ft,disable:gt,bindFramebuffer:vt,drawBuffers:N,useProgram:ce,setBlending:rt,setMaterial:ne,setFlipSided:It,setCullFace:w,setLineWidth:b,setPolygonOffset:z,setScissorTest:et,activeTexture:Q,bindTexture:it,unbindTexture:bt,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:St,texImage3D:yt,updateUBOMapping:pe,uniformBlockBinding:Bt,texStorage2D:Ht,texStorage3D:Rt,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:K,compressedTexSubImage3D:Kt,scissor:Dt,viewport:Jt,reset:ct}}function LE(n,t,e,i,r,s,a){let o=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return f?new OffscreenCanvas(w,b):Oc("canvas")}function x(w,b,z,et){let Q=1;if((w.width>et||w.height>et)&&(Q=et/Math.max(w.width,w.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let it=b?Nc:Math.floor,bt=it(Q*w.width),dt=it(Q*w.height);u===void 0&&(u=g(bt,dt));let xt=z?g(bt,dt):u;return xt.width=bt,xt.height=dt,xt.getContext("2d").drawImage(w,0,0,bt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+bt+"x"+dt+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return gu(w.width)&&gu(w.height)}function p(w){return o?!1:w.wrapS!==On||w.wrapT!==On||w.minFilter!==Ke&&w.minFilter!==Tn}function v(w,b){return w.generateMipmaps&&b&&w.minFilter!==Ke&&w.minFilter!==Tn}function _(w){n.generateMipmap(w)}function T(w,b,z,et,Q=!1){if(o===!1)return b;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let it=b;if(b===n.RED&&(z===n.FLOAT&&(it=n.R32F),z===n.HALF_FLOAT&&(it=n.R16F),z===n.UNSIGNED_BYTE&&(it=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(it=n.R8UI),z===n.UNSIGNED_SHORT&&(it=n.R16UI),z===n.UNSIGNED_INT&&(it=n.R32UI),z===n.BYTE&&(it=n.R8I),z===n.SHORT&&(it=n.R16I),z===n.INT&&(it=n.R32I)),b===n.RG&&(z===n.FLOAT&&(it=n.RG32F),z===n.HALF_FLOAT&&(it=n.RG16F),z===n.UNSIGNED_BYTE&&(it=n.RG8)),b===n.RGBA){let bt=Q?Lc:Qt.getTransfer(et);z===n.FLOAT&&(it=n.RGBA32F),z===n.HALF_FLOAT&&(it=n.RGBA16F),z===n.UNSIGNED_BYTE&&(it=bt===ae?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(w,b,z){return v(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Ke&&w.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function I(w){return w===Ke||w===kp||w===Lh?n.NEAREST:n.LINEAR}function C(w){let b=w.target;b.removeEventListener("dispose",C),M(b),b.isVideoTexture&&h.delete(b)}function V(w){let b=w.target;b.removeEventListener("dispose",V),D(b)}function M(w){let b=i.get(w);if(b.__webglInit===void 0)return;let z=w.source,et=d.get(z);if(et){let Q=et[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(et).length===0&&d.delete(z)}i.remove(w)}function E(w){let b=i.get(w);n.deleteTexture(b.__webglTexture);let z=w.source,et=d.get(z);delete et[b.__cacheKey],a.memory.textures--}function D(w){let b=w.texture,z=i.get(w),et=i.get(b);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let it=0;it<z.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(z.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)n.deleteFramebuffer(z.__webglFramebuffer[Q]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,it=b.length;Q<it;Q++){let bt=i.get(b[Q]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),a.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(w)}let X=0;function $(){X=0}function A(){let w=X;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),X+=1,w}function O(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function G(w,b){let z=i.get(w);if(w.isVideoTexture&&ne(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(z,w,b);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function Y(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ot(z,w,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function q(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ot(z,w,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function W(w,b){let z=i.get(w);if(w.version>0&&z.__version!==w.version){tt(z,w,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}let J={[fu]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[pu]:n.MIRRORED_REPEAT},Z={[Ke]:n.NEAREST,[kp]:n.NEAREST_MIPMAP_NEAREST,[Lh]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[uv]:n.LINEAR_MIPMAP_NEAREST,[Vo]:n.LINEAR_MIPMAP_LINEAR},nt={[Sv]:n.NEVER,[Rv]:n.ALWAYS,[wv]:n.LESS,[bg]:n.LEQUAL,[Ev]:n.EQUAL,[Cv]:n.GEQUAL,[Tv]:n.GREATER,[Av]:n.NOTEQUAL};function B(w,b,z){if(z?(n.texParameteri(w,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,J[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Z[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Z[b.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==On||b.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,I(b.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==Ke&&b.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ke||b.minFilter!==Lh&&b.minFilter!==Vo||b.type===qi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ho&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function j(w,b){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));let et=b.source,Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));let it=O(b);if(it!==w.__cacheKey){Q[it]===void 0&&(Q[it]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[it].usedTimes++;let bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&E(b)),w.__cacheKey=it,w.__webglTexture=Q[it].texture}return z}function ot(w,b,z){let et=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=n.TEXTURE_3D);let Q=j(w,b),it=b.source;e.bindTexture(et,w.__webglTexture,n.TEXTURE0+z);let bt=i.get(it);if(it.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);let dt=Qt.getPrimaries(Qt.workingColorSpace),xt=b.colorSpace===An?null:Qt.getPrimaries(b.colorSpace),Tt=b.colorSpace===An||dt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ot=p(b)&&m(b.image)===!1,K=x(b.image,Ot,!1,r.maxTextureSize);K=It(b,K);let Kt=m(K)||o,Ht=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),St=T(b.internalFormat,Ht,Rt,b.colorSpace,b.isVideoTexture);B(et,b,Kt);let yt,Dt=b.mipmaps,Jt=o&&b.isVideoTexture!==!0&&St!==yg,pe=bt.__version===void 0||Q===!0,Bt=R(b,K,Kt);if(b.isDepthTexture)St=n.DEPTH_COMPONENT,o?b.type===qi?St=n.DEPTH_COMPONENT32F:b.type===Xi?St=n.DEPTH_COMPONENT24:b.type===Ir?St=n.DEPTH24_STENCIL8:St=n.DEPTH_COMPONENT16:b.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Lr&&St===n.DEPTH_COMPONENT&&b.type!==ju&&b.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Xi,Rt=s.convert(b.type)),b.format===zs&&St===n.DEPTH_COMPONENT&&(St=n.DEPTH_STENCIL,b.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ir,Rt=s.convert(b.type))),pe&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,St,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Ht,Rt,null));else if(b.isDataTexture)if(Dt.length>0&&Kt){Jt&&pe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,Dt[0].width,Dt[0].height);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Ht,Rt,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Ht,Rt,yt.data);b.generateMipmaps=!1}else Jt?(pe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Ht,Rt,K.data)):e.texImage2D(n.TEXTURE_2D,0,St,K.width,K.height,0,Ht,Rt,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,St,Dt[0].width,Dt[0].height,K.depth);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],b.format!==zn?Ht!==null?Jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Ht,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,K.depth,Ht,Rt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,K.depth,0,Ht,Rt,yt.data)}else{Jt&&pe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,Dt[0].width,Dt[0].height);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],b.format!==zn?Ht!==null?Jt?e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,yt.width,yt.height,Ht,Rt,yt.data):e.texImage2D(n.TEXTURE_2D,ct,St,yt.width,yt.height,0,Ht,Rt,yt.data)}else if(b.isDataArrayTexture)Jt?(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ht,Rt,K.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,K.width,K.height,K.depth,0,Ht,Rt,K.data);else if(b.isData3DTexture)Jt?(pe&&e.texStorage3D(n.TEXTURE_3D,Bt,St,K.width,K.height,K.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ht,Rt,K.data)):e.texImage3D(n.TEXTURE_3D,0,St,K.width,K.height,K.depth,0,Ht,Rt,K.data);else if(b.isFramebufferTexture){if(pe)if(Jt)e.texStorage2D(n.TEXTURE_2D,Bt,St,K.width,K.height);else{let ct=K.width,L=K.height;for(let ht=0;ht<Bt;ht++)e.texImage2D(n.TEXTURE_2D,ht,St,ct,L,0,Ht,Rt,null),ct>>=1,L>>=1}}else if(Dt.length>0&&Kt){Jt&&pe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,Dt[0].width,Dt[0].height);for(let ct=0,L=Dt.length;ct<L;ct++)yt=Dt[ct],Jt?e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Ht,Rt,yt):e.texImage2D(n.TEXTURE_2D,ct,St,Ht,Rt,yt);b.generateMipmaps=!1}else Jt?(pe&&e.texStorage2D(n.TEXTURE_2D,Bt,St,K.width,K.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,Rt,K)):e.texImage2D(n.TEXTURE_2D,0,St,Ht,Rt,K);v(b,Kt)&&_(et),bt.__version=it.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function tt(w,b,z){if(b.image.length!==6)return;let et=j(w,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let it=i.get(Q);if(Q.version!==it.__version||et===!0){e.activeTexture(n.TEXTURE0+z);let bt=Qt.getPrimaries(Qt.workingColorSpace),dt=b.colorSpace===An?null:Qt.getPrimaries(b.colorSpace),xt=b.colorSpace===An||bt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,K=[];for(let ct=0;ct<6;ct++)!Tt&&!Ot?K[ct]=x(b.image[ct],!1,!0,r.maxCubemapSize):K[ct]=Ot?b.image[ct].image:b.image[ct],K[ct]=It(b,K[ct]);let Kt=K[0],Ht=m(Kt)||o,Rt=s.convert(b.format,b.colorSpace),St=s.convert(b.type),yt=T(b.internalFormat,Rt,St,b.colorSpace),Dt=o&&b.isVideoTexture!==!0,Jt=it.__version===void 0||et===!0,pe=R(b,Kt,Ht);B(n.TEXTURE_CUBE_MAP,b,Ht);let Bt;if(Tt){Dt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pe,yt,Kt.width,Kt.height);for(let ct=0;ct<6;ct++){Bt=K[ct].mipmaps;for(let L=0;L<Bt.length;L++){let ht=Bt[L];b.format!==zn?Rt!==null?Dt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ht.width,ht.height,Rt,St,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,yt,ht.width,ht.height,0,Rt,St,ht.data)}}}else{Bt=b.mipmaps,Dt&&Jt&&(Bt.length>0&&pe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,pe,yt,K[0].width,K[0].height));for(let ct=0;ct<6;ct++)if(Ot){Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,K[ct].width,K[ct].height,Rt,St,K[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,K[ct].width,K[ct].height,0,Rt,St,K[ct].data);for(let L=0;L<Bt.length;L++){let ut=Bt[L].image[ct].image;Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,ut.width,ut.height,Rt,St,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,ut.width,ut.height,0,Rt,St,ut.data)}}else{Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Rt,St,K[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,Rt,St,K[ct]);for(let L=0;L<Bt.length;L++){let ht=Bt[L];Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Rt,St,ht.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,yt,Rt,St,ht.image[ct])}}}v(b,Ht)&&_(n.TEXTURE_CUBE_MAP),it.__version=Q.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function st(w,b,z,et,Q,it){let bt=s.convert(z.format,z.colorSpace),dt=s.convert(z.type),xt=T(z.internalFormat,bt,dt,z.colorSpace);if(!i.get(b).__hasExternalTextures){let Ot=Math.max(1,b.width>>it),K=Math.max(1,b.height>>it);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,it,xt,Ot,K,b.depth,0,bt,dt,null):e.texImage2D(Q,it,xt,Ot,K,0,bt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,i.get(z).__webglTexture,0,mt(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,i.get(z).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(w,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let et=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||rt(b)){let Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===qi?et=n.DEPTH_COMPONENT32F:Q.type===Xi&&(et=n.DEPTH_COMPONENT24));let it=mt(b);rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,et,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,et,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let et=mt(b);z&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let et=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<et.length;Q++){let it=et[Q],bt=s.convert(it.format,it.colorSpace),dt=s.convert(it.type),xt=T(it.internalFormat,bt,dt,it.colorSpace),Tt=mt(b);z&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,xt,b.width,b.height):rt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,xt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let et=i.get(b.depthTexture).__webglTexture,Q=mt(b);if(b.depthTexture.format===Lr)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===zs)rt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function gt(w){let b=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,w)}else if(z){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]=n.createRenderbuffer(),at(b.__webglDepthbuffer[et],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),at(b.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,b,z){let et=i.get(w);b!==void 0&&st(et.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&gt(w)}function N(w){let b=w.texture,z=i.get(w),et=i.get(b);w.addEventListener("dispose",V),w.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=b.version,a.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,it=w.isWebGLMultipleRenderTargets===!0,bt=m(w)||o;if(Q){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)z.__webglFramebuffer[dt][xt]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(it)if(r.drawBuffers){let dt=w.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let Ot=i.get(dt[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&rt(w)===!1){let dt=it?b:[b];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){let Tt=dt[xt];z.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);let Ot=s.convert(Tt.format,Tt.colorSpace),K=s.convert(Tt.type),Kt=T(Tt.internalFormat,Ot,K,Tt.colorSpace,w.isXRRenderTarget===!0),Ht=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Kt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),at(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),B(n.TEXTURE_CUBE_MAP,b,bt);for(let dt=0;dt<6;dt++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(z.__webglFramebuffer[dt][xt],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else st(z.__webglFramebuffer[dt],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(b,bt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let dt=w.texture;for(let xt=0,Tt=dt.length;xt<Tt;xt++){let Ot=dt[xt],K=i.get(Ot);e.bindTexture(n.TEXTURE_2D,K.__webglTexture),B(n.TEXTURE_2D,Ot,bt),st(z.__webglFramebuffer,w,Ot,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),v(Ot,bt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?dt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,et.__webglTexture),B(dt,b,bt),o&&b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)st(z.__webglFramebuffer[xt],w,b,n.COLOR_ATTACHMENT0,dt,xt);else st(z.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,dt,0);v(b,bt)&&_(dt),e.unbindTexture()}w.depthBuffer&&gt(w)}function ce(w){let b=m(w)||o,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0,Q=z.length;et<Q;et++){let it=z[et];if(v(it,b)){let bt=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(it).__webglTexture;e.bindTexture(bt,dt),_(bt),e.unbindTexture()}}}function _t(w){if(o&&w.samples>0&&rt(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,et=w.height,Q=n.COLOR_BUFFER_BIT,it=[],bt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(w),xt=w.isWebGLMultipleRenderTargets===!0;if(xt)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){it.push(n.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&it.push(bt);let Ot=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ot===!1&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]),Ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),xt){let K=i.get(b[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,z,et,0,0,z,et,Q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]);let Ot=i.get(b[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function mt(w){return Math.min(r.maxSamples,w.samples)}function rt(w){let b=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(w){let b=a.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function It(w,b){let z=w.colorSpace,et=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===mu||z!==_i&&z!==An&&(Qt.getTransfer(z)===ae?o===!1?t.has("EXT_sRGB")===!0&&et===zn?(w.format=mu,w.minFilter=Tn,w.generateMipmaps=!1):b=zc.sRGBToLinear(b):(et!==zn||Q!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=A,this.resetTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=vt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=rt}function PE(n,t,e){let i=e.isWebGL2;function r(s,a=An){let o,c=Qt.getTransfer(a);if(s===ji)return n.UNSIGNED_BYTE;if(s===fg)return n.UNSIGNED_SHORT_4_4_4_4;if(s===pg)return n.UNSIGNED_SHORT_5_5_5_1;if(s===dv)return n.BYTE;if(s===fv)return n.SHORT;if(s===ju)return n.UNSIGNED_SHORT;if(s===dg)return n.INT;if(s===Xi)return n.UNSIGNED_INT;if(s===qi)return n.FLOAT;if(s===Ho)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===pv)return n.ALPHA;if(s===zn)return n.RGBA;if(s===mv)return n.LUMINANCE;if(s===gv)return n.LUMINANCE_ALPHA;if(s===Lr)return n.DEPTH_COMPONENT;if(s===zs)return n.DEPTH_STENCIL;if(s===mu)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xv)return n.RED;if(s===mg)return n.RED_INTEGER;if(s===yv)return n.RG;if(s===gg)return n.RG_INTEGER;if(s===xg)return n.RGBA_INTEGER;if(s===Ph||s===Uh||s===Dh||s===Nh)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ph)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ph)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vp||s===Hp||s===Gp||s===Wp)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yg)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xp||s===qp)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xp)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===qp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yp||s===$p||s===jp||s===Jp||s===Zp||s===Kp||s===Qp||s===tm||s===em||s===nm||s===im||s===rm||s===sm||s===om)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$p)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qp)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===im)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sm)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===om)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Oh||s===am||s===cm)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Oh)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===am)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_v||s===lm||s===hm||s===um)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Oh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ir?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Ru=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},yi=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},UE={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Iu=class extends Ji{constructor(t,e){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,v=[],_=[],T=new Yt,R=null,I=new yn;I.layers.enable(1),I.viewport=new Pe;let C=new yn;C.layers.enable(2),C.viewport=new Pe;let V=[I,C],M=new Ru;M.layers.enable(1),M.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=v[B];return j===void 0&&(j=new ko,v[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=v[B];return j===void 0&&(j=new ko,v[B]=j),j.getGripSpace()},this.getHand=function(B){let j=v[B];return j===void 0&&(j=new ko,v[B]=j),j.getHandSpace()};function X(B){let j=_.indexOf(B.inputSource);if(j===-1)return;let ot=v[j];ot!==void 0&&(ot.update(B.inputSource,B.frame,l||a),ot.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",A);for(let B=0;B<v.length;B++){let j=_[B];j!==null&&(_[B]=null,v[B].disconnect(j))}E=null,D=null,t.setRenderTarget(m),f=null,d=null,u=null,r=null,p=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",A),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new vi(f.framebufferWidth,f.framebufferHeight,{format:zn,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,ot=null,tt=null;x.depth&&(tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=x.stencil?zs:Lr,ot=x.stencil?Ir:Xi);let st={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(st),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new vi(d.textureWidth,d.textureHeight,{format:zn,type:ji,depthTexture:new qc(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let at=t.properties.get(p);at.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function A(B){for(let j=0;j<B.removed.length;j++){let ot=B.removed[j],tt=_.indexOf(ot);tt>=0&&(_[tt]=null,v[tt].disconnect(ot))}for(let j=0;j<B.added.length;j++){let ot=B.added[j],tt=_.indexOf(ot);if(tt===-1){for(let at=0;at<v.length;at++)if(at>=_.length){_.push(ot),tt=at;break}else if(_[at]===null){_[at]=ot,tt=at;break}if(tt===-1)break}let st=v[tt];st&&st.connect(ot)}}let O=new P,G=new P;function Y(B,j,ot){O.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ot.matrixWorld);let tt=O.distanceTo(G),st=j.projectionMatrix.elements,at=ot.projectionMatrix.elements,ft=st[14]/(st[10]-1),gt=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],N=(st[9]-1)/st[5],ce=(st[8]-1)/st[0],_t=(at[8]+1)/at[0],mt=ft*ce,rt=ft*_t,ne=tt/(-ce+_t),It=ne*-ce;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(It),B.translateZ(ne),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let w=ft+ne,b=gt+ne,z=mt-It,et=rt+(tt-It),Q=vt*gt/b*w,it=N*gt/b*w;B.projectionMatrix.makePerspective(z,et,Q,it,w,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;M.near=C.near=I.near=B.near,M.far=C.far=I.far=B.far,(E!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far);let j=B.parent,ot=M.cameras;q(M,j);for(let tt=0;tt<ot.length;tt++)q(ot[tt],j);ot.length===2?Y(M,I,C):M.projectionMatrix.copy(I.projectionMatrix),W(B,M,j)};function W(B,j,ot){ot===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ot.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Go*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let J=null;function Z(B,j){if(h=j.getViewerPose(l||a),g=j,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let tt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,tt=!0);for(let st=0;st<ot.length;st++){let at=ot[st],ft=null;if(f!==null)ft=f.getViewport(at);else{let vt=u.getViewSubImage(d,at);ft=vt.viewport,st===0&&(t.setRenderTargetTextures(p,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(p))}let gt=V[st];gt===void 0&&(gt=new yn,gt.layers.enable(st),gt.viewport=new Pe,V[st]=gt),gt.matrix.fromArray(at.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(at.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(ft.x,ft.y,ft.width,ft.height),st===0&&(M.matrix.copy(gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),tt===!0&&M.cameras.push(gt)}}for(let ot=0;ot<v.length;ot++){let tt=_[ot],st=v[ot];tt!==null&&st!==void 0&&st.update(tt,j,l||a)}J&&J(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let nt=new Tg;nt.setAnimationLoop(Z),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}};function DE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Eg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NE(n,t,e,i){let r={},s={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let T=_.program;i.uniformBlockBinding(v,T)}function l(v,_){let T=r[v.id];T===void 0&&(g(v),T=h(v),r[v.id]=T,v.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(v,R);let I=t.render.frame;s[v.id]!==I&&(d(v),s[v.id]=I)}function h(v){let _=u();v.__bindingPointIndex=_;let T=n.createBuffer(),R=v.__size,I=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=r[v.id],T=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let I=0,C=T.length;I<C;I++){let V=Array.isArray(T[I])?T[I]:[T[I]];for(let M=0,E=V.length;M<E;M++){let D=V[M];if(f(D,I,M,R)===!0){let X=D.__offset,$=Array.isArray(D.value)?D.value:[D.value],A=0;for(let O=0;O<$.length;O++){let G=$[O],Y=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,X+A,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,A),A+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,T,R){let I=v.value,C=_+"_"+T;if(R[C]===void 0)return typeof I=="number"||typeof I=="boolean"?R[C]=I:R[C]=I.clone(),!0;{let V=R[C];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return R[C]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function g(v){let _=v.uniforms,T=0,R=16;for(let C=0,V=_.length;C<V;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,D=M.length;E<D;E++){let X=M[E],$=Array.isArray(X.value)?X.value:[X.value];for(let A=0,O=$.length;A<O;A++){let G=$[A],Y=x(G),q=T%R;q!==0&&R-q<Y.boundary&&(T+=R-q),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=Y.storage}}}let I=T%R;return I>0&&(T+=R-I),v.__size=T,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Yo=class{constructor(t={}){let{canvas:e=Wv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;let _=this,T=!1,R=0,I=0,C=null,V=-1,M=null,E=new Pe,D=new Pe,X=null,$=new Pt(0),A=0,O=e.width,G=e.height,Y=1,q=null,W=null,J=new Pe(0,0,O,G),Z=new Pe(0,0,O,G),nt=!1,B=new qo,j=!1,ot=!1,tt=null,st=new Me,at=new Yt,ft=new P,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return C===null?Y:1}let N=i;function ce(S,U){for(let k=0;k<S.length;k++){let H=S[k],F=e.getContext(H,U);if(F!==null)return F}return null}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),N=ce(U,S),N===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,mt,rt,ne,It,w,b,z,et,Q,it,bt,dt,xt,Tt,Ot,K,Kt,Ht,Rt,St,yt,Dt,Jt;function pe(){_t=new tw(N),mt=new $S(N,_t,t),_t.init(mt),yt=new PE(N,_t,mt),rt=new IE(N,_t,mt),ne=new iw(N),It=new yE,w=new LE(N,_t,rt,It,mt,yt,ne),b=new JS(_),z=new QS(_),et=new ub(N,mt),Dt=new qS(N,_t,et,mt),Q=new ew(N,et,ne,Dt),it=new aw(N,Q,et,ne),Ht=new ow(N,mt,w),Ot=new jS(It),bt=new xE(_,b,z,_t,mt,Dt,Ot),dt=new DE(_,It),xt=new vE,Tt=new TE(_t,mt),Kt=new XS(_,b,z,rt,it,d,c),K=new RE(_,it,mt),Jt=new NE(N,ne,mt,rt),Rt=new YS(N,_t,ne,mt),St=new nw(N,_t,ne,mt),ne.programs=bt.programs,_.capabilities=mt,_.extensions=_t,_.properties=It,_.renderLists=xt,_.shadowMap=K,_.state=rt,_.info=ne}pe();let Bt=new Iu(_,N);this.xr=Bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(O,G,!1))},this.getSize=function(S){return S.set(O,G)},this.setSize=function(S,U,k=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,G=U,e.width=Math.floor(S*Y),e.height=Math.floor(U*Y),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(O*Y,G*Y).floor()},this.setDrawingBufferSize=function(S,U,k){O=S,G=U,Y=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,U,k,H){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,U,k,H),rt.viewport(E.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,U,k,H){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,U,k,H),rt.scissor(D.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){rt.setScissorTest(nt=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let H=0;if(S){let F=!1;if(C!==null){let pt=C.texture.format;F=pt===xg||pt===gg||pt===mg}if(F){let pt=C.texture.type,Mt=pt===ji||pt===Xi||pt===ju||pt===Ir||pt===fg||pt===pg,Et=Kt.getClearColor(),Ct=Kt.getClearAlpha(),zt=Et.r,Lt=Et.g,Ut=Et.b;Mt?(f[0]=zt,f[1]=Lt,f[2]=Ut,f[3]=Ct,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=zt,g[1]=Lt,g[2]=Ut,g[3]=Ct,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),k&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),xt.dispose(),Tt.dispose(),It.dispose(),b.dispose(),z.dispose(),it.dispose(),Dt.dispose(),Jt.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",$e),Bt.removeEventListener("sessionend",se),tt&&(tt.dispose(),tt=null),je.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let S=ne.autoReset,U=K.enabled,k=K.autoUpdate,H=K.needsUpdate,F=K.type;pe(),ne.autoReset=S,K.enabled=U,K.autoUpdate=k,K.needsUpdate=H,K.type=F}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){let U=S.target;U.removeEventListener("dispose",ut),At(U)}function At(S){wt(S),It.remove(S)}function wt(S){let U=It.get(S).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,H,F,pt){U===null&&(U=gt);let Mt=F.isMesh&&F.matrixWorld.determinant()<0,Et=C_(S,U,k,H,F);rt.setMaterial(H,Mt);let Ct=k.index,zt=1;if(H.wireframe===!0){if(Ct=Q.getWireframeAttribute(k),Ct===void 0)return;zt=2}let Lt=k.drawRange,Ut=k.attributes.position,xe=Lt.start*zt,mn=(Lt.start+Lt.count)*zt;pt!==null&&(xe=Math.max(xe,pt.start*zt),mn=Math.min(mn,(pt.start+pt.count)*zt)),Ct!==null?(xe=Math.max(xe,0),mn=Math.min(mn,Ct.count)):Ut!=null&&(xe=Math.max(xe,0),mn=Math.min(mn,Ut.count));let Ie=mn-xe;if(Ie<0||Ie===1/0)return;Dt.setup(F,H,Et,k,Ct);let hi,de=Rt;if(Ct!==null&&(hi=et.get(Ct),de=St,de.setIndex(hi)),F.isMesh)H.wireframe===!0?(rt.setLineWidth(H.wireframeLinewidth*vt()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(F.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),rt.setLineWidth(kt*vt()),F.isLineSegments?de.setMode(N.LINES):F.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else F.isPoints?de.setMode(N.POINTS):F.isSprite&&de.setMode(N.TRIANGLES);if(F.isBatchedMesh)de.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)de.renderInstances(xe,Ie,F.count);else if(k.isInstancedBufferGeometry){let kt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ah=Math.min(k.instanceCount,kt);de.renderInstances(xe,Ie,Ah)}else de.render(xe,Ie)};function ie(S,U,k){S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,tc(S,U,k),S.side=cn,S.needsUpdate=!0,tc(S,U,k),S.side=Nn):tc(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),m=Tt.get(k),m.init(),v.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(_._useLegacyLights);let H=new Set;return S.traverse(function(F){let pt=F.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let Et=pt[Mt];ie(Et,k,F),H.add(Et)}else ie(pt,k,F),H.add(pt)}),v.pop(),m=null,H},this.compileAsync=function(S,U,k=null){let H=this.compile(S,U,k);return new Promise(F=>{function pt(){if(H.forEach(function(Mt){It.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){F(S);return}setTimeout(pt,10)}_t.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function Re(S){re&&re(S)}function $e(){je.stop()}function se(){je.start()}let je=new Tg;je.setAnimationLoop(Re),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(S){re=S,Bt.setAnimationLoop(S),S===null?je.stop():je.start()},Bt.addEventListener("sessionstart",$e),Bt.addEventListener("sessionend",se),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(U),U=Bt.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,C),m=Tt.get(S,v.length),m.init(),v.push(m),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(st),ot=this.localClippingEnabled,j=Ot.init(this.clippingPlanes,ot),x=xt.get(S,p.length),x.init(),p.push(x),Gn(S,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,W),this.info.render.frame++,j===!0&&Ot.beginShadows();let k=m.state.shadowsArray;if(K.render(k,S,U),j===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(x,S),m.setupLights(_._useLegacyLights),U.isArrayCamera){let H=U.cameras;for(let F=0,pt=H.length;F<pt;F++){let Mt=H[F];Cp(x,S,Mt,Mt.viewport)}}else Cp(x,S,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,U),Dt.resetDefaultState(),V=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Gn(S,U,k,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){H&&ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);let Mt=it.update(S),Et=S.material;Et.visible&&x.push(S,Mt,Et,k,ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){let Mt=it.update(S),Et=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ft.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ft.copy(Mt.boundingSphere.center)),ft.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(Et)){let Ct=Mt.groups;for(let zt=0,Lt=Ct.length;zt<Lt;zt++){let Ut=Ct[zt],xe=Et[Ut.materialIndex];xe&&xe.visible&&x.push(S,Mt,xe,k,ft.z,Ut)}}else Et.visible&&x.push(S,Mt,Et,k,ft.z,null)}}let pt=S.children;for(let Mt=0,Et=pt.length;Mt<Et;Mt++)Gn(pt[Mt],U,k,H)}function Cp(S,U,k,H){let F=S.opaque,pt=S.transmissive,Mt=S.transparent;m.setupLightsView(k),j===!0&&Ot.setGlobalState(_.clippingPlanes,k),pt.length>0&&A_(F,pt,U,k),H&&rt.viewport(E.copy(H)),F.length>0&&Qa(F,U,k),pt.length>0&&Qa(pt,U,k),Mt.length>0&&Qa(Mt,U,k),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function A_(S,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let pt=mt.isWebGL2;tt===null&&(tt=new vi(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Ho:ji,minFilter:Vo,samples:pt?4:0})),_.getDrawingBufferSize(at),pt?tt.setSize(at.x,at.y):tt.setSize(Nc(at.x),Nc(at.y));let Mt=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor($),A=_.getClearAlpha(),A<1&&_.setClearColor(16777215,.5),_.clear();let Et=_.toneMapping;_.toneMapping=$i,Qa(S,k,H),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt);let Ct=!1;for(let zt=0,Lt=U.length;zt<Lt;zt++){let Ut=U[zt],xe=Ut.object,mn=Ut.geometry,Ie=Ut.material,hi=Ut.group;if(Ie.side===Nn&&xe.layers.test(H.layers)){let de=Ie.side;Ie.side=Ge,Ie.needsUpdate=!0,Rp(xe,k,H,mn,Ie,hi),Ie.side=de,Ie.needsUpdate=!0,Ct=!0}}Ct===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt)),_.setRenderTarget(Mt),_.setClearColor($,A),_.toneMapping=Et}function Qa(S,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,pt=S.length;F<pt;F++){let Mt=S[F],Et=Mt.object,Ct=Mt.geometry,zt=H===null?Mt.material:H,Lt=Mt.group;Et.layers.test(k.layers)&&Rp(Et,U,k,Ct,zt,Lt)}}function Rp(S,U,k,H,F,pt){S.onBeforeRender(_,U,k,H,F,pt),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,U,k,H,S,pt),F.transparent===!0&&F.side===Nn&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,S,pt),F.side=cn,F.needsUpdate=!0,_.renderBufferDirect(k,U,H,F,S,pt),F.side=Nn):_.renderBufferDirect(k,U,H,F,S,pt),S.onAfterRender(_,U,k,H,F,pt)}function tc(S,U,k){U.isScene!==!0&&(U=gt);let H=It.get(S),F=m.state.lights,pt=m.state.shadowsArray,Mt=F.state.version,Et=bt.getParameters(S,F.state,pt,U,k),Ct=bt.getProgramCacheKey(Et),zt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?z:b).get(S.envMap||H.environment),zt===void 0&&(S.addEventListener("dispose",ut),zt=new Map,H.programs=zt);let Lt=zt.get(Ct);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===Mt)return Lp(S,Et),Lt}else Et.uniforms=bt.getUniforms(S),S.onBuild(k,Et,_),S.onBeforeCompile(Et,_),Lt=bt.acquireProgram(Et,Ct),zt.set(Ct,Lt),H.uniforms=Et.uniforms;let Ut=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=Ot.uniform),Lp(S,Et),H.needsLights=I_(S),H.lightsStateVersion=Mt,H.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function Ip(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Ds.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Lp(S,U){let k=It.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function C_(S,U,k,H,F){U.isScene!==!0&&(U=gt),w.resetTextureUnits();let pt=U.fog,Mt=H.isMeshStandardMaterial?U.environment:null,Et=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_i,Ct=(H.isMeshStandardMaterial?z:b).get(H.envMap||Mt),zt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!k.morphAttributes.position,xe=!!k.morphAttributes.normal,mn=!!k.morphAttributes.color,Ie=$i;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ie=_.toneMapping);let hi=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=hi!==void 0?hi.length:0,kt=It.get(H),Ah=m.state.lights;if(j===!0&&(ot===!0||S!==M)){let wn=S===M&&H.id===V;Ot.setState(H,S,wn)}let me=!1;H.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ah.state.version||kt.outputColorSpace!==Et||F.isBatchedMesh&&kt.batching===!1||!F.isBatchedMesh&&kt.batching===!0||F.isInstancedMesh&&kt.instancing===!1||!F.isInstancedMesh&&kt.instancing===!0||F.isSkinnedMesh&&kt.skinning===!1||!F.isSkinnedMesh&&kt.skinning===!0||F.isInstancedMesh&&kt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&kt.instancingColor===!1&&F.instanceColor!==null||kt.envMap!==Ct||H.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ot.numPlanes||kt.numIntersection!==Ot.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==Lt||kt.morphTargets!==Ut||kt.morphNormals!==xe||kt.morphColors!==mn||kt.toneMapping!==Ie||mt.isWebGL2===!0&&kt.morphTargetsCount!==de)&&(me=!0):(me=!0,kt.__version=H.version);let vr=kt.currentProgram;me===!0&&(vr=tc(H,U,F));let Pp=!1,Uo=!1,Ch=!1,Be=vr.getUniforms(),br=kt.uniforms;if(rt.useProgram(vr.program)&&(Pp=!0,Uo=!0,Ch=!0),H.id!==V&&(V=H.id,Uo=!0),Pp||M!==S){Be.setValue(N,"projectionMatrix",S.projectionMatrix),Be.setValue(N,"viewMatrix",S.matrixWorldInverse);let wn=Be.map.cameraPosition;wn!==void 0&&wn.setValue(N,ft.setFromMatrixPosition(S.matrixWorld)),mt.logarithmicDepthBuffer&&Be.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Be.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Uo=!0,Ch=!0)}if(F.isSkinnedMesh){Be.setOptional(N,F,"bindMatrix"),Be.setOptional(N,F,"bindMatrixInverse");let wn=F.skeleton;wn&&(mt.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Be.setValue(N,"boneTexture",wn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Be.setOptional(N,F,"batchingTexture"),Be.setValue(N,"batchingTexture",F._matricesTexture,w));let Rh=k.morphAttributes;if((Rh.position!==void 0||Rh.normal!==void 0||Rh.color!==void 0&&mt.isWebGL2===!0)&&Ht.update(F,k,vr),(Uo||kt.receiveShadow!==F.receiveShadow)&&(kt.receiveShadow=F.receiveShadow,Be.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(br.envMap.value=Ct,br.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Uo&&(Be.setValue(N,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&R_(br,Ch),pt&&H.fog===!0&&dt.refreshFogUniforms(br,pt),dt.refreshMaterialUniforms(br,H,Y,G,tt),Ds.upload(N,Ip(kt),br,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(N,Ip(kt),br,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Be.setValue(N,"center",F.center),Be.setValue(N,"modelViewMatrix",F.modelViewMatrix),Be.setValue(N,"normalMatrix",F.normalMatrix),Be.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let wn=H.uniformsGroups;for(let Ih=0,L_=wn.length;Ih<L_;Ih++)if(mt.isWebGL2){let Up=wn[Ih];Jt.update(Up,vr),Jt.bind(Up,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function R_(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function I_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,k){It.get(S.texture).__webglTexture=U,It.get(S.depthTexture).__webglTexture=k;let H=It.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){let k=It.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){C=S,R=U,I=k;let H=!0,F=null,pt=!1,Mt=!1;if(S){let Ct=It.get(S);Ct.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Ct.__webglFramebuffer===void 0?w.setupRenderTarget(S):Ct.__hasExternalTextures&&w.rebindTextures(S,It.get(S.texture).__webglTexture,It.get(S.depthTexture).__webglTexture);let zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);let Lt=It.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?F=Lt[U][k]:F=Lt[U],pt=!0):mt.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?F=It.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[k]:F=Lt,E.copy(S.viewport),D.copy(S.scissor),X=S.scissorTest}else E.copy(J).multiplyScalar(Y).floor(),D.copy(Z).multiplyScalar(Y).floor(),X=nt;if(rt.bindFramebuffer(N.FRAMEBUFFER,F)&&mt.drawBuffers&&H&&rt.drawBuffers(S,F),rt.viewport(E),rt.scissor(D),rt.setScissorTest(X),pt){let Ct=It.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,k)}else if(Mt){let Ct=It.get(S.texture),zt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,k||0,zt)}V=-1},this.readRenderTargetPixels=function(S,U,k,H,F,pt,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){rt.bindFramebuffer(N.FRAMEBUFFER,Et);try{let Ct=S.texture,zt=Ct.format,Lt=Ct.type;if(zt!==zn&&yt.convert(zt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Lt===Ho&&(_t.has("EXT_color_buffer_half_float")||mt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Lt!==ji&&yt.convert(Lt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===qi&&(mt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&k>=0&&k<=S.height-F&&N.readPixels(U,k,H,F,yt.convert(zt),yt.convert(Lt),pt)}finally{let Ct=C!==null?It.get(C).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(S,U,k=0){let H=Math.pow(2,-k),F=Math.floor(U.image.width*H),pt=Math.floor(U.image.height*H);w.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,S.x,S.y,F,pt),rt.unbindTexture()},this.copyTextureToTexture=function(S,U,k,H=0){let F=U.image.width,pt=U.image.height,Mt=yt.convert(k.format),Et=yt.convert(k.type);w.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,F,pt,Mt,Et,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,Mt,Et,U.image),H===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k,H,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,Et=S.max.z-S.min.z+1,Ct=yt.convert(H.format),zt=yt.convert(H.type),Lt;if(H.isData3DTexture)w.setTexture3D(H,0),Lt=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),Lt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Ut=N.getParameter(N.UNPACK_ROW_LENGTH),xe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ie=N.getParameter(N.UNPACK_SKIP_ROWS),hi=N.getParameter(N.UNPACK_SKIP_IMAGES),de=k.isCompressedTexture?k.mipmaps[F]:k.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?N.texSubImage3D(Lt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,zt,de.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Lt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,de.data)):N.texSubImage3D(Lt,F,U.x,U.y,U.z,pt,Mt,Et,Ct,zt,de),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hi),F===0&&H.generateMipmaps&&N.generateMipmap(Lt),rt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){R=0,I=0,C=null,rt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ju?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Qc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?Pr:_g}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Pr?Oe:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Lu=class extends Yo{};Lu.prototype.isWebGL1Renderer=!0;var Yc=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Si=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ng=new P,ig=new P,rg=new Me,ou=new Wo,Sc=new Fs,Pu=class extends en{constructor(t=new nn,e=new Si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ng.fromBufferAttribute(e,r-1),ig.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ng.distanceTo(ig);t.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(r),Sc.radius+=s,t.ray.intersectsSphere(Sc)===!1)return;rg.copy(r).invert(),ou.copy(t.ray).applyMatrix4(rg);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=p,T=v-1;_<T;_+=f){let R=g.getX(_),I=g.getX(_+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,I),ou.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let V=t.ray.origin.distanceTo(d);V<t.near||V>t.far||e.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=p,T=v-1;_<T;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),ou.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},sg=new P,og=new P,Ki=class extends Pu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)sg.fromBufferAttribute(e,r),og.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sg.distanceTo(og);t.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wc=new P,Ec=new P,au=new P,Tc=new Rr,Ur=class extends nn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(Ps*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=Tc;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Tc.getNormal(au),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let _=(v+1)%3,T=u[v],R=u[_],I=Tc[h[v]],C=Tc[h[_]],V=`${T}_${R}`,M=`${R}_${T}`;M in d&&d[M]?(au.dot(d[M].normal)<=s&&(f.push(I.x,I.y,I.z),f.push(C.x,C.y,C.z)),d[M]=null):V in d||(d[V]={index0:l[v],index1:l[_],normal:au.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];wc.fromBufferAttribute(o,x),Ec.fromBufferAttribute(o,m),f.push(wc.x,wc.y,wc.z),f.push(Ec.x,Ec.y,Ec.z)}this.setAttribute("position",new tn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var $c=class extends Mi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Qi=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vg,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ac(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function OE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gs=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=e[++i],t<r)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uu=class extends Gs{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dm,endingEnd:dm}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case fm:s=t,o=2*e-i;break;case pm:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fm:a=t,c=2*i-e;break;case pm:a=1,c=i+r[1]-r[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(r-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,T=f*m-f*x;for(let R=0;R!==o;++R)s[R]=p*a[h+R]+v*a[l+R]+_*a[c+R]+T*a[u+R];return s}},Du=class extends Gs{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Nu=class extends Gs{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ac(e,this.TimeBufferType),this.values=Ac(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ac(t.times,Array),values:Ac(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rc:e=this.InterpolantFactoryMethodDiscrete;break;case Ic:e=this.InterpolantFactoryMethodLinear;break;case zh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rc;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&OE(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===zh,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(r)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ic;var Dr=class extends kn{};Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Rc;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ou=class extends kn{};Ou.prototype.ValueTypeName="color";var zu=class extends kn{};zu.prototype.ValueTypeName="number";var Fu=class extends Gs{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(r-e),l=t*o;for(let h=l+o;l!==h;l+=4)Zi.slerpFlat(s,0,a,l-o,a,l,c);return s}},$o=class extends kn{InterpolantFactoryMethodLinear(t){return new Fu(this.times,this.values,this.getValueSize(),t)}};$o.prototype.ValueTypeName="quaternion";$o.prototype.DefaultInterpolation=Ic;$o.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends kn{};Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=Rc;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bu=class extends kn{};Bu.prototype.ValueTypeName="vector";var ku=class{constructor(t,e,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},zE=new ku,Vu=class{constructor(t){this.manager=t!==void 0?t:zE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vu.DEFAULT_MATERIAL_NAME="__DEFAULT";var jc=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var cu=new Me,ag=new P,cg=new P,Hu=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ag.setFromMatrixPosition(t.matrixWorld),e.position.copy(ag),cg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cg),e.updateMatrixWorld(),cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Gu=class extends Hu{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Gu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jc=class extends jc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qu="\\[\\]\\.:\\/",FE=new RegExp("["+Qu+"]","g"),td="[^"+Qu+"]",BE="[^"+Qu.replace("\\.","")+"]",kE=/((?:WC+[\/:])*)/.source.replace("WC",td),VE=/(WCOD+)?/.source.replace("WCOD",BE),HE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),GE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),WE=new RegExp("^"+kE+VE+HE+GE+"$"),XE=["material","materials","bones","map"],Wu=class{constructor(t,e,i){let r=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(FE,"")}static parseTrackName(t){let e=WE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);XE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Wu;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gR=new Float32Array(1);var Zc=class{constructor(t,e,i=0,r=1/0){this.ray=new Wo(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Xu(t,this,i,e),i.sort(lg),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Xu(t[r],this,i,e);return i.sort(lg),i}};function lg(n,t){return n.distance-t.distance}function Xu(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)Xu(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);var Xe=document.getElementById("c"),ge={w:1,h:1,x:0,y:0},wi=new Yo({canvas:Xe,antialias:!0});wi.setPixelRatio(Math.min(devicePixelRatio,2));wi.shadowMap.enabled=!0;wi.shadowMap.type=Yu;wi.localClippingEnabled=!0;var Ee=new Yc;Ee.background=new Pt("#7aa0c4");var qE=Math.atan(1/Math.SQRT2),Gt={azim:Math.PI/4,elev:qE,zoom:80,target:new P(30,15,23)},jt={azim:Gt.azim,elev:Gt.elev,zoom:Gt.zoom,target:Gt.target.clone()},Ug=900,el=2e3,Wt=new Hs(-1,1,1,-1,.1,4e3),Dg={uGround:{value:1}},ed=new be(new Vs(2,2),new Bn({uniforms:Dg,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`}));ed.frustumCulled=!1;ed.renderOrder=-1e9;Ee.add(ed);function Ng(){Dg.uGround.value=Math.max(0,Math.min(1,(Gt.elev+.05)/.1))}Ee.add(new Jc(16777215,.62));var _n=new jo(16777215,.78);_n.castShadow=!0;_n.shadow.mapSize.set(4096,4096);_n.shadow.normalBias=.15;_n.shadow.bias=-2e-4;Ee.add(_n);Ee.add(_n.target);var Og=new jo(16777215,.16);Og.position.set(-6,5,-7);Ee.add(Og);var Jo={tail:0},qn=()=>{Jo.tail=30},nd=new P,nl=new P,Pg=new Map;function qs(n){let t=Pg.get(n);return t||(t=new Pt().setHex(n),Pg.set(n,t)),t}var id=new Qi({vertexColors:!0,side:cn}),rd=new Qi({vertexColors:!0,transparent:!0,opacity:.55,side:cn,depthWrite:!1});rd.shadowSide=Nn;var zg=new Bs({colorWrite:!1,side:cn}),zr=new be(new Vs(8e3,8e3),new $c({opacity:.32}));zr.rotation.x=-Math.PI/2;zr.position.y=-.1;zr.receiveShadow=!0;zr.renderOrder=-1;Ee.add(zr);var Yn=new yi;Ee.add(Yn);var Ei=new yi;Ee.add(Ei);var vn=new Ki(new Ur(new Xn(1,1,1)),new Si({color:10994876,depthTest:!1}));vn.visible=!1;vn.renderOrder=999;Ee.add(vn);var Fr=new Ki(new nn,new Si({vertexColors:!0,transparent:!0,depthTest:!1}));Fr.renderOrder=998;Fr.visible=!1;Ee.add(Fr);var ln=new Zc,$n=new Yt,tr=new P,Zo=new P;var Br=(n,t,e)=>n+65536+(t+65536)*131072+(e+65536)*131072*131072,jn=(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z});function ee(n,t){let{x:e,y:i,z:r}=n;switch(t&3){case 1:return{x:-r,y:i,z:e};case 2:return{x:-e,y:i,z:-r};case 3:return{x:r,y:i,z:-e};default:return{x:e,y:i,z:r}}}var Ti=(n,t)=>({rot:n.rot+t.rot&3,off:jn(ee(t.off,n.rot),n.off)}),sd=n=>{let t=4-(n.rot&3)&3,e=ee(n.off,t);return{rot:t,off:{x:-e.x,y:-e.y,z:-e.z}}},od=n=>n.slice(1).reduce((t,e)=>Ti(t,{off:e.pos,rot:e.rot}),{off:{x:0,y:0,z:0},rot:0}),Ai=n=>"#"+(n&16777215).toString(16).padStart(6,"0"),er=n=>n<0?-Math.round(-n):Math.round(n),YE=Math.floor(Math.random()*4294967296).toString(36),ad=1,il=()=>`n${ad++}.${YE}`,rl=()=>ad,sl=n=>{ad=n};var he=(n,t,e,i,r,s,a)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s,c:a}),Ko=(n,t,e,i)=>t>=n.x0&&t<n.x1&&e>=n.y0&&e<n.y1&&i>=n.z0&&i<n.z1,Qo=(n,t,e,i)=>({x0:n.x0+t,y0:n.y0+e,z0:n.z0+i,x1:n.x1+t,y1:n.y1+e,z1:n.z1+i,c:n.c});function $E(n,t,e){let i=Math.max(n.x0,t.x0),r=Math.max(n.y0,t.y0),s=Math.max(n.z0,t.z0),a=Math.min(n.x1,t.x1),o=Math.min(n.y1,t.y1),c=Math.min(n.z1,t.z1);if(i>=a||r>=o||s>=c){e.push(n);return}let l=n.c;n.x0<i&&e.push({...n,x1:i}),a<n.x1&&e.push({...n,x0:a}),n.y0<r&&e.push({x0:i,y0:n.y0,z0:n.z0,x1:a,y1:r,z1:n.z1,c:l}),o<n.y1&&e.push({x0:i,y0:o,z0:n.z0,x1:a,y1:n.y1,z1:n.z1,c:l}),n.z0<s&&e.push({x0:i,y0:r,z0:n.z0,x1:a,y1:o,z1:s,c:l}),c<n.z1&&e.push({x0:i,y0:r,z0:c,x1:a,y1:o,z1:n.z1,c:l})}function kr(n,t){let e=[];for(let i of n)$E(i,t,e);return e}function jE(n,t){for(let e=0;e<n.length;){let i=n[e];if(i.c!==t.c){e++;continue}let r=i.y0===t.y0&&i.y1===t.y1,s=i.z0===t.z0&&i.z1===t.z1,a=i.x0===t.x0&&i.x1===t.x1;if(r&&s&&(i.x1===t.x0||t.x1===i.x0))t.x0=Math.min(t.x0,i.x0),t.x1=Math.max(t.x1,i.x1);else if(a&&s&&(i.y1===t.y0||t.y1===i.y0))t.y0=Math.min(t.y0,i.y0),t.y1=Math.max(t.y1,i.y1);else if(a&&r&&(i.z1===t.z0||t.z1===i.z0))t.z0=Math.min(t.z0,i.z0),t.z1=Math.max(t.z1,i.z1);else{e++;continue}n.splice(e,1),e=0}n.push(t)}function cd(n,t,e){let i=kr(n,t);return jE(i,{...t,c:e}),i}function Fg(n,t,e,i,r){let s=-1;for(let h=0;h<n.length;h++)if(Ko(n[h],t,e,i)){s=h;break}if(s===-1)return null;let a=n[s].c;if(a===r)return null;let o=(h,u)=>{let d=h.x0<u.x1&&u.x0<h.x1,f=h.y0<u.y1&&u.y0<h.y1,g=h.z0<u.z1&&u.z0<h.z1;return f&&g&&(h.x1===u.x0||u.x1===h.x0)||d&&g&&(h.y1===u.y0||u.y1===h.y0)||d&&f&&(h.z1===u.z0||u.z1===h.z0)},c=new Set([s]),l=[s];for(;l.length;){let h=n[l.pop()];for(let u=0;u<n.length;u++)!c.has(u)&&n[u].c===a&&o(h,n[u])&&(c.add(u),l.push(u))}return n.map((h,u)=>c.has(u)?{...h,c:r}:h)}function ld(n,t){let e=[];for(let i of n){let r=Math.max(i.x0,t.x0),s=Math.max(i.y0,t.y0),a=Math.max(i.z0,t.z0),o=Math.min(i.x1,t.x1),c=Math.min(i.y1,t.y1),l=Math.min(i.z1,t.z1);r<o&&s<c&&a<l&&e.push({x0:r,y0:s,z0:a,x1:o,y1:c,z1:l,c:i.c})}return e}function Bg(n,t){for(let e of n){let i=(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0);t.set(e.c,(t.get(e.c)||0)+i)}}function sn(n,t){for(let e of n)e.x0<t.min.x&&(t.min.x=e.x0),e.y0<t.min.y&&(t.min.y=e.y0),e.z0<t.min.z&&(t.min.z=e.z0),e.x1>t.max.x&&(t.max.x=e.x1),e.y1>t.max.y&&(t.max.y=e.y1),e.z1>t.max.z&&(t.max.z=e.z1)}function Jn(n,t,e){let i=ee({x:n.x0,y:n.y0,z:n.z0},t),r=ee({x:n.x1-1,y:n.y1-1,z:n.z1-1},t);return{x0:Math.min(i.x,r.x)+e.x,y0:Math.min(i.y,r.y)+e.y,z0:Math.min(i.z,r.z)+e.z,x1:Math.max(i.x,r.x)+e.x+1,y1:Math.max(i.y,r.y)+e.y+1,z1:Math.max(i.z,r.z)+e.z+1,c:n.c}}var JE=16,rn=n=>Math.floor(n/JE);function kg(n){if(!n.length)return()=>!1;let t=1/0,e=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let x of n)x.x0<t&&(t=x.x0),x.y0<e&&(e=x.y0),x.z0<i&&(i=x.z0),x.x1>r&&(r=x.x1),x.y1>s&&(s=x.y1),x.z1>a&&(a=x.z1);let o=rn(t),c=rn(e),l=rn(i),h=rn(r-1)-o+1,u=rn(s-1)-c+1,d=rn(a-1)-l+1,f=Array.from({length:h*u*d},()=>[]),g=(x,m,p)=>((x-o)*u+(m-c))*d+(p-l);for(let x of n)for(let m=rn(x.x0);m<=rn(x.x1-1);m++)for(let p=rn(x.y0);p<=rn(x.y1-1);p++)for(let v=rn(x.z0);v<=rn(x.z1-1);v++)f[g(m,p,v)].push(x);return(x,m,p)=>{let v=rn(x),_=rn(m),T=rn(p);if(v<o||_<c||T<l||v-o>=h||_-c>=u||T-l>=d)return!1;for(let R of f[g(v,_,T)])if(Ko(R,x,m,p))return!0;return!1}}var Vg=(n,t,e,i)=>n.some(r=>Ko(r,t,e,i));function hd(n,t,e,i,r){if(!n.length||!t.length)return!1;let s={min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}};sn(n,s);let a=s.min.x+e,o=s.min.y+i,c=s.min.z+r,l=s.max.x+e,h=s.max.y+i,u=s.max.z+r;for(let d of t)if(a<d.x1&&d.x0<l&&o<d.y1&&d.y0<h&&c<d.z1&&d.z0<u&&n.some(f=>f.x0+e<d.x1&&d.x0<f.x1+e&&f.y0+i<d.y1&&d.y0<f.y1+i&&f.z0+r<d.z1&&d.z0<f.z1+r))return!0;return!1}var ZE=[{a:0,hi:!0,u:1,v:2,n:[1,0,0]},{a:0,hi:!1,u:2,v:1,n:[-1,0,0]},{a:1,hi:!0,u:2,v:0,n:[0,1,0]},{a:1,hi:!1,u:0,v:2,n:[0,-1,0]},{a:2,hi:!0,u:0,v:1,n:[0,0,1]},{a:2,hi:!1,u:1,v:0,n:[0,0,-1]}],Wg=3,ta=2,nr=Wg*ta,Hg=.5,ea=class{a=new Float32Array(4096);n=0;push3(t,e,i){if(this.n+3>this.a.length){let r=new Float32Array(this.a.length*2);r.set(this.a),this.a=r}this.a[this.n++]=t,this.a[this.n++]=e,this.a[this.n++]=i}get length(){return this.n}trimmed(){return this.a.slice(0,this.n)}};function Gg(n,t,e,i,r,s){let a=2*ta+1;for(let o=0;o<e;o++){let c=o*r,l=0;for(let h=0;h<=ta&&h<i;h++)l+=n[c+h*s];for(let h=0;h<i;h++){t[c+h*s]=l/a;let u=h+ta+1,d=h-ta;u<i&&(l+=n[c+u*s]),d>=0&&(l-=n[c+d*s])}}}function ol(n,t,e){let i=new ea,r=new ea,s=new ea,a=n.map(v=>[v.x0,v.y0,v.z0]),o=n.map(v=>[v.x1,v.y1,v.z1]),c=[0,1,2].map(()=>new Map),l=[0,1,2].map(()=>new Map),h=(v,_,T)=>{let R=v.get(_);R?R.push(T):v.set(_,[T])};for(let v=0;v<n.length;v++)for(let _=0;_<3;_++)h(c[_],a[v][_],v),h(l[_],o[v][_],v);let u=[],d=16,f=v=>Math.floor(v/d),g=[],x=[0,0,0],m=[0,0,0];if(e&&n.length){let v=[1/0,1/0,1/0],_=[-1/0,-1/0,-1/0];for(let T=0;T<n.length;T++)for(let R=0;R<3;R++)a[T][R]<v[R]&&(v[R]=a[T][R]),o[T][R]>_[R]&&(_[R]=o[T][R]);m=v.map(f),x=_.map((T,R)=>f(T-1)-m[R]+1),g=Array.from({length:x[0]*x[1]*x[2]},()=>[]);for(let T=0;T<n.length;T++)for(let R=f(a[T][0]);R<=f(o[T][0]-1);R++)for(let I=f(a[T][1]);I<=f(o[T][1]-1);I++)for(let C=f(a[T][2]);C<=f(o[T][2]-1);C++)g[((R-m[0])*x[1]+(I-m[1]))*x[2]+(C-m[2])].push(T)}for(let v=0;v<n.length;v++){let _=t(n[v].c),T=_.r,R=_.g,I=_.b,C=a[v],V=o[v];for(let M of ZE){let{a:E,u:D,v:X}=M,$=M.hi?V[E]:C[E],A=M.hi?$:$-1,O=[];for(let tt of(M.hi?c:l)[E].get($)??u){let st=Math.max(a[tt][D],C[D]),at=Math.min(o[tt][D],V[D]),ft=Math.max(a[tt][X],C[X]),gt=Math.min(o[tt][X],V[X]);st<at&&ft<gt&&O.push([st,ft,at,gt])}let G=[[C[D],C[X],V[D],V[X]]];for(let tt of O){let st=[];for(let at of G){let ft=Math.max(at[0],tt[0]),gt=Math.max(at[1],tt[1]),vt=Math.min(at[2],tt[2]),N=Math.min(at[3],tt[3]);if(ft>=vt||gt>=N){st.push(at);continue}at[0]<ft&&st.push([at[0],at[1],ft,at[3]]),vt<at[2]&&st.push([vt,at[1],at[2],at[3]]),at[1]<gt&&st.push([ft,at[1],vt,gt]),N<at[3]&&st.push([ft,N,vt,at[3]])}if(G=st,!G.length)break}let Y=[0,0,0];Y[E]=$;let q=null,W=0,J=0,Z=0,nt=()=>{W=C[D]-nr,J=C[X]-nr;let tt=V[D]-C[D]+2*nr+1;Z=V[X]-C[X]+2*nr+1;let st=new Float32Array(tt*Z),at=f(A)-m[E],ft=!1;if(at>=0&&at<x[E]){let vt=[0,0,0];vt[E]=at;let N=Math.min(f(W+tt-1)-m[D],x[D]-1),ce=Math.min(f(J+Z-1)-m[X],x[X]-1);for(let _t=Math.max(f(W)-m[D],0);_t<=N;_t++){vt[D]=_t;for(let mt=Math.max(f(J)-m[X],0);mt<=ce;mt++){vt[X]=mt;for(let rt of g[(vt[0]*x[1]+vt[1])*x[2]+vt[2]]){if(a[rt][E]>A||o[rt][E]<=A)continue;let ne=Math.max(a[rt][D],W),It=Math.min(o[rt][D],W+tt),w=Math.max(a[rt][X],J),b=Math.min(o[rt][X],J+Z);for(let z=ne;z<It;z++)st.fill(1,(z-W)*Z+(w-J),(z-W)*Z+(b-J));ft=ft||ne<It&&w<b}}}}if(!ft)return q=st;let gt=new Float32Array(tt*Z);for(let vt=0;vt<Wg;vt++)Gg(st,gt,tt,Z,Z,1),Gg(gt,st,Z,tt,1,Z);return q=st},B=(tt,st)=>{if(!e)return 1;let ft=(q??nt())[(tt-W)*Z+(st-J)];return Hg+(1-Hg)*(1-ft)},j=(tt,st,at)=>{Y[D]=tt,Y[X]=st,i.push3(Y[0],Y[1],Y[2]),r.push3(M.n[0],M.n[1],M.n[2]),s.push3(T*at,R*at,I*at)},ot=(tt,st,at,ft)=>{let gt=B(tt,st),vt=B(at,st),N=B(at,ft),ce=B(tt,ft);j(tt,st,gt),j(at,st,vt),j(at,ft,N),j(tt,st,gt),j(at,ft,N),j(tt,ft,ce)};for(let tt of G){let[st,at,ft,gt]=tt;if(!e){ot(st,at,ft,gt);continue}let vt=st+nr,N=ft-nr,ce=at+nr,_t=gt-nr;if(vt>=N||ce>=_t){for(let mt=st;mt<ft;mt++)for(let rt=at;rt<gt;rt++)ot(mt,rt,mt+1,rt+1);continue}for(let mt=st;mt<ft;mt++){for(let rt=at;rt<ce;rt++)ot(mt,rt,mt+1,rt+1);for(let rt=_t;rt<gt;rt++)ot(mt,rt,mt+1,rt+1)}for(let mt=ce;mt<_t;mt++){for(let rt=st;rt<vt;rt++)ot(rt,mt,rt+1,mt+1);for(let rt=N;rt<ft;rt++)ot(rt,mt,rt+1,mt+1)}ot(vt,ce,N,_t)}}}if(!i.length)return null;let p=new nn;return p.setAttribute("position",new We(i.trimmed(),3)),p.setAttribute("normal",new We(r.trimmed(),3)),p.setAttribute("color",new We(s.trimmed(),3)),p}var al=[7041116,10855821,12040100,14472900,13343102,14532265,15787730,9268835,13935475,10249796,11895693,7170165,8226199,6055805,6986062,10994876],Xg={visible:"deemphasized",deemphasized:"hidden",hidden:"visible"},na=()=>({type:"object",id:il(),name:"",pos:{x:0,y:0,z:0},rot:0,vis:"visible",boxes:[]}),Vr=(n="")=>({type:"scene",id:il(),name:n,pos:{x:0,y:0,z:0},rot:0,vis:"visible",children:[]});function ir(n){let t={id:il(),name:n.name,pos:{...n.pos},rot:n.rot,vis:n.vis};return n.type==="object"?{type:"object",...t,boxes:n.boxes.map(e=>({...e}))}:{type:"scene",...t,children:n.children.map(ir)}}var Ci=n=>y.context.children.find(t=>t.id===n);function Zn(n,t=y.root,e=[]){if(e.push(t),t===n)return e.slice();if(t.type==="scene")for(let i of t.children){let r=Zn(n,i,e);if(r)return r}return e.pop(),null}function Hr(n,t=y.root){if(t.id===n)return t;if(t.type==="scene")for(let e of t.children){let i=Hr(n,e);if(i)return i}return null}function Cn(n){let t=Zn(n);return t&&t.length>1?t[t.length-2]:null}function Gr(n,t){return n===t?!0:n.type!=="scene"?!1:n.children.some(e=>Gr(e,t))}var Ys=()=>od(y.path),$s=n=>od(Zn(n)||[y.root]),qe=()=>({min:{x:1e9,y:1e9,z:1e9},max:{x:-1e9,y:-1e9,z:-1e9}}),rr=n=>n.max.x<n.min.x;function ia(n,t,e,i){if(n.type==="object")for(let r of n.boxes)i.push(Jn(r,e,t));else for(let r of n.children)ia(r,jn(t,ee(r.pos,e)),e+r.rot&3,i);return i}function sr(n,t,e,i){if(n.type==="object")sn(n.boxes.map(r=>Jn(r,e,t)),i);else for(let r of n.children)sr(r,jn(t,ee(r.pos,e)),e+r.rot&3,i);return i}function ud(n,t,e){e.length=0;let i=Math.max(1,Math.ceil((t-n)/6));for(let r=0;r<=i;r++)e.push(n+(t-n)*r/i)}var dd=(n,t)=>Math.max(1,Math.ceil((t-n)/6))+1,Yg=n=>dd(n.x0,n.x1)*dd(n.y0,n.y1)*dd(n.z0,n.z1);function Wr(n,t,e,i){if(Yg(n)<=1536){e.push(n),i.push(t);return}let r=n.x1-n.x0,s=n.y1-n.y0,a=n.z1-n.z0;if(r>=s&&r>=a){let o=n.x0+(r>>1);Wr({...n,x1:o},t,e,i),Wr({...n,x0:o},t,e,i)}else if(s>=a){let o=n.y0+(s>>1);Wr({...n,y1:o},t,e,i),Wr({...n,y0:o},t,e,i)}else{let o=n.z0+(a>>1);Wr({...n,z1:o},t,e,i),Wr({...n,z0:o},t,e,i)}}function KE(n,t,e,i){for(let r=0;r<n.length;r++){let s=n[r];if(s[0]<=t&&s[1]<=e&&s[2]<=i)return}for(let r=n.length-1;r>=0;r--){let s=n[r];t<=s[0]&&e<=s[1]&&i<=s[2]&&n.splice(r,1)}n.push([t,e,i])}function QE(n,t,e,i,r,s,a,o,c,l){let h=n.length,u=new Float64Array(h),d=new Float64Array(h),f=new Float64Array(h),g=new Float64Array(h),x=new Float64Array(h),m=new Float64Array(h),p=1/0,v=-1/0,_=1/0,T=-1/0,R=1/0,I=-1/0;for(let $=0;$<h;$++){let A=n[$];s.x>=0?(u[$]=A.x0,d[$]=A.x1):(u[$]=A.x1,d[$]=A.x0),s.y>=0?(f[$]=A.y0,g[$]=A.y1):(f[$]=A.y1,g[$]=A.y0),s.z>=0?(x[$]=A.z0,m[$]=A.z1):(x[$]=A.z1,m[$]=A.z0),A.x0<p&&(p=A.x0),A.x1>v&&(v=A.x1),A.y0<_&&(_=A.y0),A.y1>T&&(T=A.y1),A.z0<R&&(R=A.z0),A.z1>I&&(I=A.z1)}let C=s.x!==0?1/s.x:0,V=s.y!==0?1/s.y:0,M=s.z!==0?1/s.z:0,E=[],D=[],X=[];for(let $=i;$<r;$++){let A=t[$];if((s.x>0?v<=A.x0:s.x<0?p>=A.x1:v<=A.x0||p>=A.x1)||(s.y>0?T<=A.y0:s.y<0?_>=A.y1:T<=A.y0||_>=A.y1)||(s.z>0?I<=A.z0:s.z<0?R>=A.z1:I<=A.z0||R>=A.z1))continue;let O=e[$];ud(A.x0,A.x1,E),ud(A.y0,A.y1,D),ud(A.z0,A.z1,X);for(let G of E)for(let Y of D)for(let q of X){let W=1/0;if(C!==0&&(W=((s.x>0?O.x1:O.x0)-G)*C),V!==0){let nt=((s.y>0?O.y1:O.y0)-Y)*V;nt<W&&(W=nt)}if(M!==0){let nt=((s.z>0?O.z1:O.z0)-q)*M;nt<W&&(W=nt)}let J=1/0,Z=!1;for(let nt=0;nt<h;nt++){let B=-1/0,j=1/0;if(C===0){if(G<=u[nt]||G>=d[nt])continue}else{let ot=(u[nt]-G)*C,tt=(d[nt]-G)*C;ot>B&&(B=ot),tt<j&&(j=tt)}if(V===0){if(Y<=f[nt]||Y>=g[nt])continue}else{let ot=(f[nt]-Y)*V,tt=(g[nt]-Y)*V;ot>B&&(B=ot),tt<j&&(j=tt)}if(M===0){if(q<=x[nt]||q>=m[nt])continue}else{let ot=(x[nt]-q)*M,tt=(m[nt]-q)*M;ot>B&&(B=ot),tt<j&&(j=tt)}if(!(B>=j)){if(B>W+.001)B<J&&(J=B);else if(j>W+.001){Z=!0;break}}}Z||J===1/0||KE(l,Math.floor((G+J*s.x)*a),Math.floor((Y+J*s.y)*o),Math.floor((q+J*s.z)*c))}}}function qg(n,t){let e=[0],i=0;for(;i<n.length;){let s=n[i][t];do i++;while(i<n.length&&n[i][t]===s);e.push(i)}if(e.length<=48)return e;let r=new Set;for(let s=0;s<48;s++)r.add(e[Math.floor(s*(e.length-1)/47)]);return[...r]}function t1(n,t,e,i,r){let s={x:1/0,y:1/0,z:1/0};if(!n.length||!t.length)return s;t.sort((d,f)=>d[0]-f[0]||d[1]-f[1]||d[2]-f[2]);let a=[];t:for(let d of t){for(let f of a)if(f[1]<=d[1]&&f[2]<=d[2])continue t;a.push(d)}let o=n.map(d=>[Math.min(d.x0*e,d.x1*e),Math.max(d.x0*e,d.x1*e),Math.min(d.y0*i,d.y1*i),Math.max(d.y0*i,d.y1*i),Math.min(d.z0*r,d.z1*r),Math.max(d.z0*r,d.z1*r)]),c=(d,f,g)=>{let x=0;for(let m of o){let p=Math.min(m[1],d)-m[0];if(p<=0)continue;let v=Math.min(m[3],f)-m[2];if(v<=0)continue;let _=Math.min(m[5],g)-m[4];_>0&&(x+=p*v*_)}return x},l=a.slice().sort((d,f)=>f[0]-d[0]),h=-1,u={...s};for(let d of qg(l,0)){let f=d===0?1/0:l[d-1][0]-.01,g=l.slice(d).sort((m,p)=>p[2]-m[2]),x=new Array(g.length+1).fill(1/0);for(let m=g.length-1;m>=0;m--)x[m]=Math.min(x[m+1],g[m][1]);for(let m of qg(g,2)){let p=m===0?1/0:g[m-1][2]-.01,v=x[m]===1/0?1/0:x[m]-.01,_=c(f,v,p);_>h&&(h=_,u.x=f,u.y=v,u.z=p)}}return u}function $g(n,t,e,i,r,s){let a=[],o=[];for(let x of t)Wr(x,x,a,o);let c=[],l=0,h=0;for(let x=0;x<a.length;x++)h+=Yg(a[x]),(h>=1536||x===a.length-1)&&(c.push([l,x+1]),l=x+1,h=0);let u=[];for(let x=0;x<n.length;x++)for(let m=0;m<e.length;m++)for(let p=0;p<c.length;p++)u.push([x,m,p]);let d=n.map(()=>[]),f=0,g=null;return{step(x){for(;f<u.length;){let[m,p,v]=u[f++],[_,T]=c[v];if(QE(n[m],a,o,_,T,e[p],i,r,s,d[m]),f<u.length&&x())return!1}return!0},cuts(){return g??=n.map((x,m)=>t1(x,d[m],i,r,s)),g}}}function cl(n,t){$n.x=(n-ge.x)/ge.w*2-1,$n.y=-((t-ge.y)/ge.h)*2+1}var fd=()=>y.pickMeshes.length?(ln.setFromCamera($n,Wt),ln.intersectObjects(y.pickMeshes,!1)[0]??null):null;function pd(){let n=fd();return n?n.object.userData.childId??null:null}var jg=new He(new P(0,1,0),0);function ra(n){return ln.setFromCamera($n,Wt),jg.constant=-n,ln.ray.intersectPlane(jg,tr)?{x:Math.floor(tr.x),y:n,z:Math.floor(tr.z)}:null}var Kg=(n,t)=>({x:Math.floor(n.x-t.x*.5),y:Math.floor(n.y-t.y*.5),z:Math.floor(n.z-t.z*.5)}),e1=new P;function Xr(){let n=fd();if(!n)return null;let t=y.editXform.off,e=ee({x:n.point.x-t.x,y:n.point.y-t.y,z:n.point.z-t.z},-y.editXform.rot),i={x:0,y:1,z:0};if(n.face){let s=e1.copy(n.face.normal).transformDirection(n.object.matrixWorld);i=ee({x:s.x,y:s.y,z:s.z},-y.editXform.rot)}let r=Kg(e,i);return{cell:r,addCell:{x:r.x+Math.round(i.x),y:r.y+Math.round(i.y),z:r.z+Math.round(i.z)}}}function Qg(){let n=fd();return n?Kg(n.point,n.face?n.face.normal:{x:0,y:1,z:0}):ra(0)}function qr(n){let t=ra(n+y.editXform.off.y);if(!t)return null;let e=ee({x:t.x-y.editXform.off.x,y:0,z:t.z-y.editXform.off.z},-y.editXform.rot);return{x:Math.round(e.x),y:n,z:Math.round(e.z)}}var Jg=(n,t)=>({x:n===0?t:0,y:n===1?t:0,z:n===2?t:0}),Zg=new He;function tx(n,t){let e=y.editXform.off,i=y.editXform.rot,r=ee(Jg(n,1),i),s=jn(ee(Jg(n,t),i),e);if(ln.setFromCamera($n,Wt),Zg.setComponents(r.x,r.y,r.z,-(r.x*s.x+r.y*s.y+r.z*s.z)),!ln.ray.intersectPlane(Zg,tr))return null;let a=ee({x:tr.x-e.x,y:tr.y-e.y,z:tr.z-e.z},-i),o={x:Math.round(a.x),y:Math.round(a.y),z:Math.round(a.z)};return n===0?o.x=t:n===1?o.y=t:o.z=t,o}var Ri=(n,t,e)=>{let i=ee({x:n,y:t,z:e},y.editXform.rot);return new P(i.x+y.editXform.off.x,i.y+y.editXform.off.y,i.z+y.editXform.off.z)};function md(n=Xr()){return y.tool==="add"?n?n.addCell:qr(0):n?n.cell:null}var n1=new Pt(10994876),i1=new Pt(6055805),r1=new Pt(13619151),sa=null,ll=[],gd=()=>{sa=null};function or(){Kn=null,y.liveMeas=null,ar()}function xd(){if(sa)return sa;let n=[],t;y.editObject?(n.push(...y.editObject.boxes),t=Ri):(cr(y.root,{x:0,y:0,z:0},0,null,null,(o,c,l,h)=>{if(h)for(let u of o.boxes)n.push(Jn(u,l,c))}),t=(o,c,l)=>new P(o,c,l));let e=qe();sn(n,e);let i=n.length===0,r={x:e.min.x,y:e.min.y,z:e.min.z},s={x:e.max.x-1,y:e.max.y-1,z:e.max.z-1};return sa={has:n.length>64?kg(n):(o,c,l)=>Vg(n,o,c,l),mn:r,mx:s,toW:t,empty:i},sa}function ex(){let n=xd();if(n.empty)return null;let t=null;if(y.editObject){let e=Xr();t=e?{...e.cell}:qr(0)}else t=Qg();return t?{x:Math.max(n.mn.x,Math.min(n.mx.x,t.x)),y:Math.max(n.mn.y,Math.min(n.mx.y,t.y)),z:Math.max(n.mn.z,Math.min(n.mx.z,t.z))}:null}function s1(n){let t=xd(),e=["x","y","z"],i=[];for(let r=0;r<3;r++){let s=e[r],a=e[(r+1)%3],o=e[(r+2)%3],c=t.mn[s],l=t.mx[s],h=[n.x,n.y,n.z],u=f=>(h[r]=f,t.has(h[0],h[1],h[2])),d=c;for(;d<=l;){let f=u(d),g=d;for(;g+1<=l&&u(g+1)===f;)g++;let x=m=>{let p={};return p[s]=m,p[a]=n[a]+.5,p[o]=n[o]+.5,t.toW(p.x,p.y,p.z)};i.push({a:x(d),b:x(g+1),mid:x((d+g+1)/2),len:g-d+1,filled:f}),d=g+1}}return i}function yd(n,t,e,i,r,s,a,o,c=!1){let l=i-n,h=r-t,u=s-e,d=(f,g,x,m,p,v,_,T)=>({a:a(f,g,x),b:a(m,p,v),mid:a((f+m)/2,(g+p)/2,(x+v)/2),len:_,filled:!0,nolabel:!T,gray:c});return[d(n,t,e,i,t,e,l,l>=o),d(n,t,e,n,t,s,u,u>=o),d(n,t,e,n,r,e,h,h>=o),d(i,t,e,i,t,s,0,!1),d(n,t,s,i,t,s,0,!1),d(n,r,e,i,r,e,0,!1),d(n,r,e,n,r,s,0,!1),d(i,r,e,i,r,s,0,!1),d(n,r,s,i,r,s,0,!1),d(i,t,e,i,r,e,0,!1),d(n,t,s,n,r,s,0,!1),d(i,t,s,i,r,s,0,!1)]}var Kn=null;function nx(){let n=ex();n&&(Kn=Kn&&Kn.x===n.x&&Kn.y===n.y&&Kn.z===n.z?null:n,hl())}function ix(){Kn&&(Kn=null,hl())}function o1(n,t){let e=xd();return yd(Math.min(n.x,t.x),Math.min(n.y,t.y),Math.min(n.z,t.z),Math.max(n.x,t.x)+1,Math.max(n.y,t.y)+1,Math.max(n.z,t.z)+1,e.toW,1,!0)}function hl(){let n=ex();y.liveMeas=n?Kn?o1(Kn,n):s1(n):null,ar()}function ar(){let n=document.getElementById("measure");n.innerHTML="",ll=[];let t=[],e=[];if(y.liveMeas)for(let r of y.liveMeas){let s=r.gray?r1:r.filled?n1:i1;if(t.push(r.a.x,r.a.y,r.a.z,r.b.x,r.b.y,r.b.z),e.push(s.r,s.g,s.b,s.r,s.g,s.b),r.nolabel)continue;let a=document.createElement("div");a.className="mlab"+(r.filled?"":" empty"),a.textContent=String(r.len),n.appendChild(a),ll.push({el:a,w:r.mid})}Fr.geometry.dispose();let i=new nn;i.setAttribute("position",new tn(t,3)),i.setAttribute("color",new tn(e,3)),Fr.geometry=i,Fr.visible=t.length>0}function rx(){if(ll.length)for(let n of ll){if(Zo.copy(n.w).project(Wt),Zo.z>1){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=(Zo.x*.5+.5)*ge.w+"px",n.el.style.top=(-Zo.y*.5+.5)*ge.h+"px"}}var _d=new P(40,150,30).normalize();function a1(n){if(rr(n))return;let t=(n.min.x+n.max.x)/2,e=(n.min.y+n.max.y)/2,i=(n.min.z+n.max.z)/2,r=.5*Math.hypot(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)+8,s=r+130;_n.position.set(t+_d.x*s,e+_d.y*s,i+_d.z*s),_n.target.position.set(t,e,i),_n.target.updateMatrixWorld();let a=_n.shadow.camera;a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=Math.max(1,s-r-20),a.far=s+r+20,a.updateProjectionMatrix(),_n.shadow.normalBias=4*r/_n.shadow.mapSize.x}var Vn=[];function c1(){let n=new Set;for(let t of Vn){Ee.remove(t);let e=t.geometry;e&&!n.has(e)&&(e.dispose(),n.add(e))}Vn=[];for(let t of Md)t.dispose();Md=[],Ks=[],ur=null,lr.vox=-1,ul=[],Ed(),Yn.clear(),Zs&&(cancelAnimationFrame(Zs),Zs=0),bn=null}var ul=[],bn=null,Zs=0,js=null;function Ed(){js&&(Yn.remove(js),js.geometry.dispose(),js.material.dispose(),js=null)}function vd(n,t,{tier:e="opaque",childId:i}={}){if(!n.length)return null;let r=e!=="opaque",s=ol(n,t,!r);if(!s)return null;let a=new be(s,e==="temp"?rd:id);if(a.castShadow=!0,a.receiveShadow=!0,Ee.add(a),Vn.push(a),r){a.renderOrder=2;let o=new be(s,zg);o.renderOrder=1,o.castShadow=!1,o.receiveShadow=!1,Ee.add(o),Vn.push(o)}return i!=null&&(a.userData.childId=i,y.pickMeshes.push(a),(y.childMeshes[i]||(y.childMeshes[i]=[])).push(a)),a}var Ks=[],Md=[],Sd=[],lr={q:-1,b:-1,vox:-1},l1=6707534;function sx(n){let t=ol(n,qs,!0);if(!t)return;let e=[new He(new P(-1,0,0),1e9),new He(new P(0,-1,0),1e9),new He(new P(0,0,-1),1e9)],i=new Qi({vertexColors:!0,side:cn,clippingPlanes:e,clipShadows:!0}),r=new be(t,i);r.castShadow=r.receiveShadow=!0,Ee.add(r),Vn.push(r);let s=new Qi({color:l1,side:Ge,clippingPlanes:e}),a=new be(t,s);Ee.add(a),Vn.push(a),Md.push(i,s);let o=qe();sn(n,o),Ks.push({boxes:n,aabb:o,planes:e})}var h1=8,ox=6,hr=[-90,-60,-30,0,30,60,90],Js=Math.PI/180,u1=5,ur=null;function d1(n,t){let e=n<=1?1:-1,i=n===0||n===3?1:-1,r=t>=3?1:-1,s=(c,l)=>{let h=Math.cos(l*Js);return{x:h*Math.sin(c*Js),y:Math.sin(l*Js),z:h*Math.cos(c*Js)}},a=[s(n*90,hr[t]),s(n*90,hr[t+1]),s(n*90+90,hr[t]),s(n*90+90,hr[t+1]),s(n*90+45,(hr[t]+hr[t+1])/2)],o=Sd;y.editObject&&(o=o.concat(y.editObject.boxes.map(c=>Jn(c,y.editXform.rot,y.editXform.off)))),ur={job:$g(Ks.map(c=>c.boxes),o,a,e,r,i),sgx:e,sgy:r,sgz:i}}function cx(){if(!Ks.length){ur=null;return}let n=(Gt.azim/Js%360+360)%360,t=Gt.elev/Js,{q:e,b:i}=lr,r=e*90+45;if((e<0||Math.abs(((n-r)%360+540)%360-180)>45+h1)&&(e=Math.min(3,Math.floor(n/90))),(i<0||t<hr[i]-ox||t>hr[i+1]+ox)&&(i=Math.max(0,Math.min(5,Math.floor((t+90)/30)))),(e!==lr.q||i!==lr.b||y.voxVer!==lr.vox)&&(lr.q=e,lr.b=i,lr.vox=y.voxVer,d1(e,i)),!ur)return;let s=performance.now();if(!ur.job.step(()=>performance.now()-s>u1)){qn();return}let{sgx:a,sgy:o,sgz:c}=ur,l=ur.job.cuts();ur=null;for(let h=0;h<Ks.length;h++){let u=Ks[h],d=l[h],f=(g,x,m,p)=>Math.min(p,(g>0?m:-x)+4);u.planes[0].normal.set(-a,0,0),u.planes[0].constant=f(a,u.aabb.min.x,u.aabb.max.x,d.x),u.planes[1].normal.set(0,-o,0),u.planes[1].constant=f(o,u.aabb.min.y,u.aabb.max.y,d.y),u.planes[2].normal.set(0,0,-c),u.planes[2].constant=f(c,u.aabb.min.z,u.aabb.max.z,d.z)}qn()}function cr(n,t,e,i,r,s){if(n===y.editObject||n.vis==="hidden")return;let a=r??(n.vis==="deemphasized"?n.id:null);if(n.type==="object")s(n,t,e,i,a);else for(let o of n.children)cr(o,jn(t,ee(o.pos,e)),e+o.rot&3,n===y.context?o.id:i,a,s)}var bd=(n,t)=>{let e=n.get(t);return e||n.set(t,e=[]),e},ax=(n,t,e,i)=>{for(let r of n.boxes)i.push(Jn(r,e,t));return i};function lx(){let{off:n,rot:t}=y.editXform;if(Yn.position.set(n.x,n.y,n.z),Yn.rotation.set(0,-t*Math.PI/2,0),Yn.updateMatrixWorld(!0),bn){Yn.remove(bn),bn.geometry.dispose();let s=Vn.indexOf(bn);s>=0&&Vn.splice(s,1)}let e=y.sel3d,i=e&&e.lifted?y.editObject.boxes.concat(e.boxes):y.editObject.boxes,r=ol(i,qs,!0);bn=r?new be(r,id):null,bn&&(bn.castShadow=bn.receiveShadow=!0,Yn.add(bn),Vn.push(bn)),y.pickMeshes=bn?[bn,...ul]:[...ul],e?f1(e.region):Ed()}function f1(n){Ed();let t=new Xn(n.x1-n.x0,n.y1-n.y0,n.z1-n.z0),e=new Ki(new Ur(t),new Si({color:16766073,depthTest:!1}));t.dispose(),e.position.set((n.x0+n.x1)/2,(n.y0+n.y1)/2,(n.z0+n.z1)/2),e.renderOrder=1e3,Yn.add(e),js=e}function dr(){Zs||(Zs=requestAnimationFrame(()=>{Zs=0,lx(),qn()}))}function dl(){y.voxVer++,gd(),dr()}function Td(n,t){y.editObject.boxes=cd(y.editObject.boxes,n,t),dl()}function oa(n){y.editObject.boxes=kr(y.editObject.boxes,n),dl()}function fl(n){let t=y.editObject.boxes;for(let e of n)t=cd(t,e,e.c);y.editObject.boxes=t,dl()}function hx(n,t){let e=Fg(y.editObject.boxes,n.x,n.y,n.z,t);return e?(y.editObject.boxes=e,dl(),!0):!1}function ux(){if(!Vn.length)return null;ln.setFromCamera($n,Wt);let n=ln.intersectObjects(Vn,!1)[0];if(!n)return null;let t=ln.ray.direction,e=Math.floor(n.point.x+t.x*.5),i=Math.floor(n.point.y+t.y*.5),r=Math.floor(n.point.z+t.z*.5),s=(o,c,l)=>{let h=ee({x:e-c.x,y:i-c.y,z:r-c.z},-l);for(let u of o)if(Ko(u,h.x,h.y,h.z))return u.c;return null};if(y.editObject){let o=s(y.editObject.boxes,y.editXform.off,y.editXform.rot);if(o!=null)return o}let a=null;return cr(y.root,{x:0,y:0,z:0},0,null,null,(o,c,l)=>{a==null&&(a=s(o.boxes,c,l))}),a}var wd=new Set;function fr(n){for(let t of wd)if(n.has(t)!==y.selection.has(t)){ye();return}dx()}function ye(){c1(),y.pickMeshes=[],y.childMeshes={},y.childBox={},wd.clear(),y.voxVer++,gd();let n={x:0,y:0,z:0},t=qe();if(y.editObject){y.editXform=Ti(Ys(),{off:y.editObject.pos,rot:y.editObject.rot});let e=[],i=new Map;cr(y.root,n,0,null,null,(s,a,o,c,l)=>ax(s,a,o,l?bd(i,l):e)),sn(e,t);let r=vd(e,qs,{tier:"temp"});ul=r?[r]:[];for(let s of i.values())sn(s,t),sx(s);Sd=e,lx(),sr(y.editObject,y.editXform.off,y.editXform.rot,t)}else{let e=new Map,i=new Map,r=[],s=[];cr(y.root,n,0,null,null,(a,o,c,l,h)=>{let u=ax(a,o,c,[]);sn(u,t);let d=h;l&&(d&&(wd.add(l),y.selection.has(l)&&(d=null)),sn(u,y.childBox[l]||(y.childBox[l]=qe()))),d?bd(i,d).push(...u):(s.push(...u),l?bd(e,l).push(...u):r.push(...u))}),vd(r,qs,{tier:"temp"});for(let[a,o]of e)vd(o,qs,{childId:a});for(let a of i.values())sx(a);Sd=s}y.sceneBox=t,a1(t),dx(),qn()}function p1(n,t,e){let i=new Xn(t.x-n.x,t.y-n.y,t.z-n.z),r=new Ki(new Ur(i),new Si({color:e,depthTest:!1}));return r.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),r.renderOrder=999,i.dispose(),r}function dx(){for(let n of Ei.children)n.geometry?.dispose?.();if(Ei.clear(),Ei.position.set(0,0,0),!y.editObject)for(let n of y.selection){let t=y.childBox[n];t&&!rr(t)&&Ei.add(p1(t.min,t.max,15787730))}}function oe(n,t={},...e){let i=document.createElement(n);return Object.assign(i,t),e.length&&i.append(...e),i}var aa=new P,Ad=new P,Cd=new P,fx=new P,m1=new P(0,1,0);function px(n,t){let e=(Wt.top-Wt.bottom)/ge.h;Wt.getWorldDirection(Ad),Cd.crossVectors(Ad,m1).normalize(),fx.crossVectors(Cd,Ad).normalize(),jt.target.addScaledVector(Cd,-n*e),jt.target.addScaledVector(fx,t*e)}function mx(n,t){jt.azim-=n*.012,jt.elev=Math.max(-Math.PI/2,Math.min(Math.PI/2,jt.elev+t*.012))}function gx(n){rr(n)||(jt.target.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),jt.zoom=Math.max(8,Math.min(el,Math.max(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)*1.5+8)))}function Qn(){let n=qe();if(y.editObject){if(sr(y.editObject,y.editXform.off,y.editXform.rot,n),rr(n)){let t=y.editXform.off;jt.target.set(t.x,t.y+6,t.z),jt.zoom=41;return}}else for(let t in y.childBox){let e=y.childBox[t];n.min.x=Math.min(n.min.x,e.min.x),n.min.y=Math.min(n.min.y,e.min.y),n.min.z=Math.min(n.min.z,e.min.z),n.max.x=Math.max(n.max.x,e.max.x),n.max.y=Math.max(n.max.y,e.max.y),n.max.z=Math.max(n.max.z,e.max.z)}if(rr(n)){jt.target.set(0,1,0),jt.zoom=23;return}gx(n)}function xx(n){if(n===y.root){Qn();return}let t=$s(n);gx(sr(n,t.off,t.rot,qe()))}function yx(){Gt.azim+=(jt.azim-Gt.azim)*.22,Gt.elev+=(jt.elev-Gt.elev)*.22,Gt.zoom+=(jt.zoom-Gt.zoom)*.25,Gt.target.lerp(jt.target,.25);let n=Math.cos(Gt.elev),t=Math.sin(Gt.elev);aa.set(n*Math.sin(Gt.azim),t,n*Math.cos(Gt.azim)),Wt.position.copy(Gt.target).addScaledVector(aa,Ug);let e=Mg.clamp((Math.abs(Gt.elev)-1.45)/(Math.PI/2-1.45),0,1);nl.set(-Math.sin(Gt.azim),0,-Math.cos(Gt.azim)),Gt.elev<0&&nl.negate(),nd.set(0,1,0).lerp(nl,e),Wt.up.copy(nd.normalize()),Wt.lookAt(Gt.target);let i=ge.w/ge.h,r=Gt.zoom,s=r*i;Wt.left=-s/2,Wt.right=s/2,Wt.top=r/2,Wt.bottom=-r/2;let a=Wt.position,o=1/0,c=-1/0,l=(g,x,m)=>{let p=(a.x-g)*aa.x+(a.y-x)*aa.y+(a.z-m)*aa.z;p<o&&(o=p),p>c&&(c=p)},h=y.sceneBox;if(h&&!rr(h))for(let g of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let m of[h.min.z,h.max.z])l(g,x,m);let u=Gt.target.x,d=Gt.target.z,f=4e3;for(let g of[-f,f])for(let x of[-f,f])l(u+g,0,d+x);o>c&&(o=.1,c=4e3),Wt.near=o-10,Wt.far=c+10,Wt.updateProjectionMatrix(),zr.position.set(Gt.target.x,-.1,Gt.target.z),Ng()}var g1={0:["y","z"],1:["x","z"],2:["x","y"]};function x1(n){let t=[];for(let e of n)for(let i=e.x0;i<e.x1;i++)for(let r=e.y0;r<e.y1;r++)for(let s=e.z0;s<e.z1;s++)t.push({x:i,y:r,z:s,c:e.c});return t}function y1(n,t,e,i,r){let s=(e%360+360)%360;if(s>180&&(s-=360),s===0)return;let a=Math.round(s/90),o=(s-a*90)*Math.PI/180,c=(a%4+4)%4,l=Math.tan(o/2),h=Math.sin(o),[u,d]=g1[t];for(let f of n){let g=f[u]-i,x=f[d]-r;for(let m=0;m<c;m++){let p=-x,v=g;g=p,x=v}o&&(g-=Math.round(x*l),x+=Math.round(g*h),g-=Math.round(x*l)),f[u]=i+g,f[d]=r+x}}function _1(n){let t=new Map;for(let o of n)t.set(Br(o.x,o.y,o.z),o.c);let e=(o,c,l,h)=>t.get(Br(o,c,l))===h,i=(o,c,l,h,u)=>{for(let d=o;d<c;d++)if(!e(d,l,h,u))return!1;return!0},r=(o,c,l,h,u,d)=>{for(let f=l;f<h;f++)if(!i(o,c,u,f,d))return!1;return!0},s=n.slice().sort((o,c)=>o.y-c.y||o.z-c.z||o.x-c.x),a=[];for(let o of s){let c=o.x,l=o.y,h=o.z,u=o.c;if(!t.has(Br(c,l,h)))continue;let d=c+1;for(;e(d,l,h,u);)d++;let f=h+1;for(;i(c,d,l,f,u);)f++;let g=l+1;for(;r(c,d,h,f,g,u);)g++;for(let x=l;x<g;x++)for(let m=h;m<f;m++)for(let p=c;p<d;p++)t.delete(Br(p,x,m));a.push({x0:c,y0:l,z0:h,x1:d,y1:g,z1:f,c:u})}return a}function _x(n,t,e,i,r,s){let a=x1(n);y1(a,e,t,Math.round(i),Math.round(r));for(let o of a){let c=s(o.x,o.y,o.z);o.x=c.x,o.y=c.y,o.z=c.z}return _1(a)}var Rd=null,vx=[],bx=[],Qs=()=>Rd;function Mx(n){vx=n,n.length&&(Rd="node")}var pl=()=>vx;function Sx(n){bx=n,n.length&&(Rd="vox")}var ml=()=>bx;var v1=200,ti=[],Ii=-1,gl=!1,wx=n=>({rootJSON:n,uid:rl(),pathIds:y.path.map(t=>t.id),selection:[...y.selection],editId:y.editObject?y.editObject.id:null,collapsed:[...y.collapsed]});function Ex(n){if(gl)return;let t=wx(n),e=ti[Ii];e&&e.rootJSON===t.rootJSON||(ti.length=Ii+1,ti.push(t),ti.length>v1&&ti.shift(),Ii=ti.length-1)}function Tx(n){gl||Ii<0||(ti[Ii]=wx(n))}function Ax(n){gl=!0,sl(n.uid),y.root=xl(JSON.parse(n.rootJSON)),y.path=[];let t=y.root;for(let e of n.pathIds){let i=t.id===e?t:t.type==="scene"?t.children.find(r=>r.id===e):null;if(!i)break;t=i,y.path.push(t)}y.path.length||(y.path=[y.root]),y.editObject=n.editId?Hr(n.editId):null,y.selection=new Set(n.selection.filter(e=>y.context.children.some(i=>i.id===e))),y.collapsed=new Set(n.collapsed),y.drag=null,y.sel3d=null,y.painting=!1,y.lastVox=null,ye(),$t(),ue(),gl=!1}function Cx(){Rn(),Ii>0&&Ax(ti[--Ii])}function Id(){Rn(),Ii<ti.length-1&&Ax(ti[++Ii])}var on=()=>new Map,yl=n=>{let t=on();return n.forEach((e,i)=>{t.set(i,e)}),t},ei=(n,t,e)=>{let i=n.get(t);return i===void 0&&n.set(t,i=e()),i},Rx=(n,t)=>{let e=[];for(let[i,r]of n)e.push(t(r,i));return e},Ix=(n,t)=>{for(let[e,i]of n)if(t(i,e))return!0;return!1};var Li=()=>new Set;var _l=n=>n[n.length-1];var Lx=(n,t)=>{for(let e=0;e<t.length;e++)n.push(t[e])},Pi=Array.from,vl=(n,t)=>{for(let e=0;e<n.length;e++)if(!t(n[e],e,n))return!1;return!0},bl=(n,t)=>{for(let e=0;e<n.length;e++)if(t(n[e],e,n))return!0;return!1};var Px=(n,t)=>{let e=new Array(n);for(let i=0;i<n;i++)e[i]=t(i,e);return e};var Yr=Array.isArray;var Ml=class{constructor(){this._observers=on()}on(t,e){return ei(this._observers,t,Li).add(e),e}once(t,e){let i=(...r)=>{this.off(t,i),e(...r)};this.on(t,i)}off(t,e){let i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return Pi((this._observers.get(t)||on()).values()).forEach(i=>i(...e))}destroy(){this._observers=on()}};var an=Math.floor;var $r=Math.abs;var Sl=(n,t)=>n<t?n:t,Ui=(n,t)=>n>t?n:t,l2=Number.isNaN;var wl=n=>n!==0?n<0:1/n<0;var to=Number.MAX_SAFE_INTEGER,Pd=Number.MIN_SAFE_INTEGER,h2=1<<31;var Ux=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&an(n)===n),u2=Number.isNaN,d2=Number.parseInt;var Dd=String.fromCharCode,b1=String.fromCodePoint,f2=Dd(65535),M1=n=>n.toLowerCase(),S1=/^\s*/g,w1=n=>n.replace(S1,""),E1=/([A-Z])/g,Nd=(n,t)=>w1(n.replace(E1,e=>`${t}${M1(e)}`));var T1=n=>{let t=unescape(encodeURIComponent(n)),e=t.length,i=new Uint8Array(e);for(let r=0;r<e;r++)i[r]=t.codePointAt(r);return i},no=typeof TextEncoder<"u"?new TextEncoder:null,A1=n=>no.encode(n),Dx=no?A1:T1;var eo=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});eo&&eo.decode(new Uint8Array).length===1&&(eo=null);var Nx=(n,t)=>Px(t,()=>n).join("");var jr=class{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}},da=()=>new jr;var C1=n=>{let t=n.cpos;for(let e=0;e<n.bufs.length;e++)t+=n.bufs[e].length;return t};var Hn=n=>{let t=new Uint8Array(C1(n)),e=0;for(let i=0;i<n.bufs.length;i++){let r=n.bufs[i];t.set(r,e),e+=r.length}return t.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),e),t},R1=(n,t)=>{let e=n.cbuf.length;e-n.cpos<t&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Ui(e,t)*2),n.cpos=0)},Ue=(n,t)=>{let e=n.cbuf.length;n.cpos===e&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(e*2),n.cpos=0),n.cbuf[n.cpos++]=t};var Al=Ue;var qt=(n,t)=>{for(;t>127;)Ue(n,128|127&t),t=an(t/128);Ue(n,127&t)},Cl=(n,t)=>{let e=wl(t);for(e&&(t=-t),Ue(n,(t>63?128:0)|(e?64:0)|63&t),t=an(t/64);t>0;)Ue(n,(t>127?128:0)|127&t),t=an(t/128)},Od=new Uint8Array(3e4),I1=Od.length/3,L1=(n,t)=>{if(t.length<I1){let e=no.encodeInto(t,Od).written||0;qt(n,e);for(let i=0;i<e;i++)Ue(n,Od[i])}else hn(n,Dx(t))},P1=(n,t)=>{let e=unescape(encodeURIComponent(t)),i=e.length;qt(n,i);for(let r=0;r<i;r++)Ue(n,e.codePointAt(r))},Jr=no&&no.encodeInto?L1:P1;var fa=(n,t)=>{let e=n.cbuf.length,i=n.cpos,r=Sl(e-i,t.length),s=t.length-r;n.cbuf.set(t.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Ui(e*2,s)),n.cbuf.set(t.subarray(r)),n.cpos=s)},hn=(n,t)=>{qt(n,t.byteLength),fa(n,t)},zd=(n,t)=>{R1(n,t);let e=new DataView(n.cbuf.buffer,n.cpos,t);return n.cpos+=t,e},U1=(n,t)=>zd(n,4).setFloat32(0,t,!1),D1=(n,t)=>zd(n,8).setFloat64(0,t,!1),N1=(n,t)=>zd(n,8).setBigInt64(0,t,!1);var zx=new DataView(new ArrayBuffer(4)),O1=n=>(zx.setFloat32(0,n),zx.getFloat32(0)===n),ro=(n,t)=>{switch(typeof t){case"string":Ue(n,119),Jr(n,t);break;case"number":Ux(t)&&$r(t)<=2147483647?(Ue(n,125),Cl(n,t)):O1(t)?(Ue(n,124),U1(n,t)):(Ue(n,123),D1(n,t));break;case"bigint":Ue(n,122),N1(n,t);break;case"object":if(t===null)Ue(n,126);else if(Yr(t)){Ue(n,117),qt(n,t.length);for(let e=0;e<t.length;e++)ro(n,t[e])}else if(t instanceof Uint8Array)Ue(n,116),hn(n,t);else{Ue(n,118);let e=Object.keys(t);qt(n,e.length);for(let i=0;i<e.length;i++){let r=e[i];Jr(n,r),ro(n,t[r])}}break;case"boolean":Ue(n,t?120:121);break;default:Ue(n,127)}},ua=class extends jr{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&qt(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}};var Fx=n=>{n.count>0&&(Cl(n.encoder,n.count===1?n.s:-n.s),n.count>1&&qt(n.encoder,n.count-2))},Zr=class{constructor(){this.encoder=new jr,this.s=0,this.count=0}write(t){this.s===t?this.count++:(Fx(this),this.count=1,this.s=t)}toUint8Array(){return Fx(this),Hn(this.encoder)}};var Bx=n=>{if(n.count>0){let t=n.diff*2+(n.count===1?0:1);Cl(n.encoder,t),n.count>1&&qt(n.encoder,n.count-2)}},so=class{constructor(){this.encoder=new jr,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(Bx(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return Bx(this),Hn(this.encoder)}},Tl=class{constructor(){this.sarr=[],this.s="",this.lensE=new Zr}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){let t=new jr;return this.sarr.push(this.s),this.s="",Jr(t,this.sarr.join("")),fa(t,this.lensE.toUint8Array()),Hn(t)}};var Mn=n=>new Error(n),Sn=()=>{throw Mn("Method unimplemented")},un=()=>{throw Mn("Unexpected case")};var kx=Mn("Unexpected end of array"),Vx=Mn("Integer out of Range"),oo=class{constructor(t){this.arr=t,this.pos=0}},es=n=>new oo(n),Hx=n=>n.pos!==n.arr.length;var F1=(n,t)=>{let e=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,t);return n.pos+=t,e},dn=n=>F1(n,Ft(n));var Kr=n=>n.arr[n.pos++];var Ft=n=>{let t=0,e=1,i=n.arr.length;for(;n.pos<i;){let r=n.arr[n.pos++];if(t=t+(r&127)*e,e*=128,r<128)return t;if(t>to)throw Vx}throw kx},Il=n=>{let t=n.arr[n.pos++],e=t&63,i=64,r=(t&64)>0?-1:1;if((t&128)===0)return r*e;let s=n.arr.length;for(;n.pos<s;){if(t=n.arr[n.pos++],e=e+(t&127)*i,i*=128,t<128)return r*e;if(e>to)throw Vx}throw kx};var B1=n=>{let t=Ft(n);if(t===0)return"";{let e=String.fromCodePoint(Kr(n));if(--t<100)for(;t--;)e+=String.fromCodePoint(Kr(n));else for(;t>0;){let i=t<1e4?t:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,e+=String.fromCodePoint.apply(null,r),t-=i}return decodeURIComponent(escape(e))}},k1=n=>eo.decode(dn(n)),Qr=eo?k1:B1;var Bd=(n,t)=>{let e=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,t);return n.pos+=t,e},V1=n=>Bd(n,4).getFloat32(0,!1),H1=n=>Bd(n,8).getFloat64(0,!1),G1=n=>Bd(n,8).getBigInt64(0,!1);var W1=[n=>{},n=>null,Il,V1,H1,G1,n=>!1,n=>!0,Qr,n=>{let t=Ft(n),e={};for(let i=0;i<t;i++){let r=Qr(n);e[r]=ao(n)}return e},n=>{let t=Ft(n),e=[];for(let i=0;i<t;i++)e.push(ao(n));return e},dn],ao=n=>W1[127-Kr(n)](n),pa=class extends oo{constructor(t,e){super(t),this.reader=e,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),Hx(this)?this.count=Ft(this)+1:this.count=-1),this.count--,this.s}};var ts=class extends oo{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=Il(this);let t=wl(this.s);this.count=1,t&&(this.s=-this.s,this.count=Ft(this)+2)}return this.count--,this.s}};var co=class extends oo{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){let t=Il(this),e=t&1;this.diff=an(t/2),this.count=1,e&&(this.count=Ft(this)+2)}return this.s+=this.diff,this.count--,this.s}},Rl=class{constructor(t){this.decoder=new ts(t),this.str=Qr(this.decoder),this.spos=0}read(){let t=this.spos+this.decoder.read(),e=this.str.slice(this.spos,t);return this.spos=t,e}};var g2=crypto.subtle,Gx=crypto.getRandomValues.bind(crypto);var kd=()=>Gx(new Uint32Array(1))[0];var q1="10000000-1000-4000-8000"+-1e11,Wx=()=>q1.replace(/[018]/g,n=>(n^kd()&15>>n/4).toString(16));var Xx=Date.now;var Vd=n=>new Promise(n);var _2=Promise.all.bind(Promise);var Hd=n=>n===void 0?null:n;var Gd=class{constructor(){this.map=new Map}setItem(t,e){this.map.set(t,e)}getItem(t){return this.map.get(t)}},qx=new Gd,Z1=!0;try{typeof localStorage<"u"&&localStorage&&(qx=localStorage,Z1=!1)}catch{}var Yx=qx;var ns=Symbol("Equality"),Ll=(n,t)=>n===t||!!n?.[ns]?.(t)||!1;var $x=n=>typeof n=="object",jx=Object.assign,Q1=Object.keys;var Jx=(n,t)=>{for(let e in n)t(n[e],e)};var ma=n=>Q1(n).length;var Zx=n=>{for(let t in n)return!1;return!0},lo=(n,t)=>{for(let e in n)if(!t(n[e],e))return!1;return!0},ga=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),Xd=(n,t)=>n===t||ma(n)===ma(t)&&lo(n,(e,i)=>(e!==void 0||ga(t,i))&&Ll(t[i],e)),tT=Object.freeze,qd=n=>{for(let t in n){let e=n[t];(typeof e=="object"||typeof e=="function")&&qd(n[t])}return tT(n)};var ya=(n,t,e=0)=>{try{for(;e<n.length;e++)n[e](...t)}finally{e<n.length&&ya(n,t,e+1)}};var Kx=n=>n;var xa=(n,t)=>{if(n===t)return!0;if(n==null||t==null||n.constructor!==t.constructor&&(n.constructor||Object)!==(t.constructor||Object))return!1;if(n[ns]!=null)return n[ns](t);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),t=new Uint8Array(t);case Uint8Array:{if(n.byteLength!==t.byteLength)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;break}case Set:{if(n.size!==t.size)return!1;for(let e of n)if(!t.has(e))return!1;break}case Map:{if(n.size!==t.size)return!1;for(let e of n.keys())if(!t.has(e)||!xa(n.get(e),t.get(e)))return!1;break}case void 0:case Object:if(ma(n)!==ma(t))return!1;for(let e in n)if(!ga(n,e)||!xa(n[e],t[e]))return!1;break;case Array:if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!xa(n[e],t[e]))return!1;break;default:return!1}return!0},Qx=(n,t)=>t.includes(n);var _a=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]";var v2=typeof navigator<"u"?/Mac/.test(navigator.platform):!1,ni,eT=[],nT=()=>{if(ni===void 0)if(_a){ni=on();let n=process.argv,t=null;for(let e=0;e<n.length;e++){let i=n[e];i[0]==="-"?(t!==null&&ni.set(t,""),t=i):t!==null?(ni.set(t,i),t=null):eT.push(i)}t!==null&&ni.set(t,"")}else typeof location=="object"?(ni=on(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){let[t,e]=n.split("=");ni.set(`--${Nd(t,"-")}`,e),ni.set(`-${Nd(t,"-")}`,e)}})):ni=on();return ni},jd=n=>nT().has(n);var va=n=>_a?Hd(process.env[n.toUpperCase().replaceAll("-","_")]):Hd(Yx.getItem(n));var t0=n=>jd("--"+n)||va(n)!==null,e0=t0("production"),iT=_a&&Qx(process.env.FORCE_COLOR,["true","1","2"]),n0=iT||!jd("--no-colors")&&!t0("no-color")&&(!_a||process.stdout.isTTY)&&(!_a||jd("--color")||va("COLORTERM")!==null||(va("TERM")||"").includes("color"));var rT=n=>new Uint8Array(n);var i0=n=>{let t=rT(n.byteLength);return t.set(n),t};var Zd=class{constructor(t,e){this.left=t,this.right=e}},ii=(n,t)=>new Zd(n,t);var Kd=n=>n.next()>=.5,Pl=(n,t,e)=>an(n.next()*(e+1-t)+t);var Qd=(n,t,e)=>an(n.next()*(e+1-t)+t);var tf=(n,t,e)=>Qd(n,t,e);var aT=n=>Dd(tf(n,97,122)),r0=(n,t=0,e=20)=>{let i=tf(n,t,e),r="";for(let s=0;s<i;s++)r+=aT(n);return r};var Ul=(n,t)=>t[tf(n,0,t.length-1)];var lT=Symbol("0schema"),ef=class{constructor(){this._rerrs=[]}extend(t,e,i,r=null){this._rerrs.push({path:t,expected:e,has:i,message:r})}toString(){let t=[];for(let e=this._rerrs.length-1;e>0;e--){let i=this._rerrs[e];t.push(Nx(" ",(this._rerrs.length-e)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return t.join(`
`)}},nf=(n,t)=>n===t?!0:n==null||t==null||n.constructor!==t.constructor?!1:n[ns]?Ll(n,t):Yr(n)?vl(n,e=>bl(t,i=>nf(e,i))):$x(n)?lo(n,(e,i)=>nf(e,t[i])):!1,ze=class{static _dilutes=!1;extends(t){let[e,i]=[this.shape,t.shape];return this.constructor._dilutes&&([i,e]=[e,i]),nf(e,i)}equals(t){return this.constructor===t.constructor&&xa(this.shape,t.shape)}[lT](){return!0}[ns](t){return this.equals(t)}validate(t){return this.check(t)}check(t,e){Sn()}get nullable(){return mo(this,Xl)}get optional(){return new Dl(this)}cast(t){return s0(t,this),t}expect(t){return s0(t,this),t}},ba=class extends ze{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e=void 0){let i=t?.constructor===this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name,t?.constructor!==this.shape?"Constructor match failed":"Check failed"),i}},ve=(n,t=null)=>new ba(n,t),M2=ve(ba),Ma=class extends ze{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape(t);return!i&&e?.extend(null,"custom prop",t?.constructor.name,"failed to check custom prop"),i}},Te=n=>new Ma(n),S2=ve(Ma),fo=class extends ze{constructor(t){super(),this.shape=t}check(t,e){let i=this.shape.some(r=>r===t);return!i&&e?.extend(null,this.shape.join(" | "),t.toString()),i}},Gl=(...n)=>new fo(n),o0=ve(fo),hT=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,t=>"\\"+t)),a0=n=>{if(po.check(n))return[hT(n)];if(o0.check(n))return n.shape.map(t=>t+"");if(d0.check(n))return["[+-]?\\d+.?\\d*"];if(f0.check(n))return[".*"];if(Vl.check(n))return n.shape.map(a0).flat(1);un()},rf=class extends ze{constructor(t){super(),this.shape=t,this._r=new RegExp("^"+t.map(a0).map(e=>`(${e.join("|")})`).join("")+"$")}check(t,e){let i=this._r.exec(t)!=null;return!i&&e?.extend(null,this._r.toString(),t.toString(),"String doesn't match string template."),i}};var w2=ve(rf),uT=Symbol("optional"),Dl=class extends ze{constructor(t){super(),this.shape=t}check(t,e){let i=t===void 0||this.shape.check(t);return!i&&e?.extend(null,"undefined (optional)","()"),i}get[uT](){return!0}},dT=ve(Dl),Nl=class extends ze{check(t,e){return e?.extend(null,"never",typeof t),!1}},E2=new Nl,T2=ve(Nl),Ol=class n extends ze{constructor(t,e=!1){super(),this.shape=t,this._isPartial=e}static _dilutes=!0;get partial(){return new n(this.shape,!0)}check(t,e){return t==null?(e?.extend(null,"object","null"),!1):lo(this.shape,(i,r)=>{let s=this._isPartial&&!ga(t,r)||i.check(t[r],e);return!s&&e?.extend(r.toString(),i.toString(),typeof t[r],"Object property does not match"),s})}},fT=n=>new Ol(n),pT=ve(Ol),mT=Te(n=>n!=null&&(n.constructor===Object||n.constructor==null)),zl=class extends ze{constructor(t,e){super(),this.shape={keys:t,values:e}}check(t,e){return t!=null&&lo(t,(i,r)=>{let s=this.shape.keys.check(r,e);return!s&&e?.extend(r+"","Record",typeof t,s?"Key doesn't match schema":"Value doesn't match value"),s&&this.shape.values.check(i,e)})}},c0=(n,t)=>new zl(n,t),gT=ve(zl),Fl=class extends ze{constructor(t){super(),this.shape=t}check(t,e){return t!=null&&lo(this.shape,(i,r)=>{let s=i.check(t[r],e);return!s&&e?.extend(r.toString(),"Tuple",typeof i),s})}},xT=(...n)=>new Fl(n),A2=ve(Fl),Bl=class extends ze{constructor(t){super(),this.shape=t.length===1?t[0]:new Sa(t)}check(t,e){let i=Yr(t)&&vl(t,r=>this.shape.check(r));return!i&&e?.extend(null,"Array",""),i}},l0=(...n)=>new Bl(n),yT=ve(Bl),_T=Te(n=>Yr(n)),kl=class extends ze{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e){let i=t instanceof this.shape&&(this._c==null||this._c(t));return!i&&e?.extend(null,this.shape.name,t?.constructor.name),i}},vT=(n,t=null)=>new kl(n,t),C2=ve(kl),bT=vT(ze),sf=class extends ze{constructor(t){super(),this.len=t.length-1,this.args=xT(...t.slice(-1)),this.res=t[this.len]}check(t,e){let i=t.constructor===Function&&t.length<=this.len;return!i&&e?.extend(null,"function",typeof t),i}};var MT=ve(sf),ST=Te(n=>typeof n=="function"),of=class extends ze{constructor(t){super(),this.shape=t}check(t,e){let i=vl(this.shape,r=>r.check(t,e));return!i&&e?.extend(null,"Intersectinon",typeof t),i}};var R2=ve(of,n=>n.shape.length>0),Sa=class extends ze{static _dilutes=!0;constructor(t){super(),this.shape=t}check(t,e){let i=bl(this.shape,r=>r.check(t,e));return e?.extend(null,"Union",typeof t),i}},mo=(...n)=>n.findIndex(t=>Vl.check(t))>=0?mo(...n.map(t=>wa(t)).map(t=>Vl.check(t)?t.shape:[t]).flat(1)):n.length===1?n[0]:new Sa(n),Vl=ve(Sa),h0=()=>!0,Hl=Te(h0),wT=ve(Ma,n=>n.shape===h0),cf=Te(n=>typeof n=="bigint"),ET=Te(n=>n===cf),u0=Te(n=>typeof n=="symbol"),I2=Te(n=>n===u0),uo=Te(n=>typeof n=="number"),d0=Te(n=>n===uo),po=Te(n=>typeof n=="string"),f0=Te(n=>n===po),Wl=Te(n=>typeof n=="boolean"),TT=Te(n=>n===Wl),p0=Gl(void 0),L2=ve(fo,n=>n.shape.length===1&&n.shape[0]===void 0),P2=Gl(void 0);var Xl=Gl(null),AT=ve(fo,n=>n.shape.length===1&&n.shape[0]===null),U2=ve(Uint8Array),D2=ve(ba,n=>n.shape===Uint8Array),CT=mo(uo,po,Xl,p0,cf,Wl,u0),N2=(()=>{let n=l0(Hl),t=c0(po,Hl),e=mo(uo,po,Xl,Wl,n,t);return n.shape=e,t.shape.values=e,e})(),wa=n=>{if(bT.check(n))return n;if(mT.check(n)){let t={};for(let e in n)t[e]=wa(n[e]);return fT(t)}else{if(_T.check(n))return mo(...n.map(wa));if(CT.check(n))return Gl(n);if(ST.check(n))return ve(n)}un()},s0=e0?()=>{}:(n,t)=>{let e=new ef;if(!t.check(n,e))throw Mn(`Expected value to be of type ${t.constructor.name}.
${e.toString()}`)},af=class{constructor(t){this.patterns=[],this.$state=t}if(t,e){return this.patterns.push({if:wa(t),h:e}),this}else(t){return this.if(Hl,t)}done(){return(t,e)=>{for(let i=0;i<this.patterns.length;i++){let r=this.patterns[i];if(r.if.check(t))return r.h(t,e)}throw Mn("Unhandled pattern")}}},RT=n=>new af(n),m0=RT(Hl).if(d0,(n,t)=>Pl(t,Pd,to)).if(f0,(n,t)=>r0(t)).if(TT,(n,t)=>Kd(t)).if(ET,(n,t)=>BigInt(Pl(t,Pd,to))).if(Vl,(n,t)=>ho(t,Ul(t,n.shape))).if(pT,(n,t)=>{let e={};for(let i in n.shape){let r=n.shape[i];if(dT.check(r)){if(Kd(t))continue;r=r.shape}e[i]=m0(r,t)}return e}).if(yT,(n,t)=>{let e=[],i=Qd(t,0,42);for(let r=0;r<i;r++)e.push(ho(t,n.shape));return e}).if(o0,(n,t)=>Ul(t,n.shape)).if(AT,(n,t)=>null).if(MT,(n,t)=>{let e=ho(t,n.res);return()=>e}).if(wT,(n,t)=>ho(t,Ul(t,[uo,po,Xl,p0,cf,Wl,l0(uo),c0(mo("a","b","c"),uo)]))).if(gT,(n,t)=>{let e={},i=Pl(t,0,3);for(let r=0;r<i;r++){let s=ho(t,n.shape.keys),a=ho(t,n.shape.values);e[s]=a}return e}).done(),ho=(n,t)=>m0(wa(t),n);var is=typeof document<"u"?document:{};var O2=Te(n=>n.nodeType===DT);var z2=typeof DOMParser<"u"?new DOMParser:null;var F2=Te(n=>n.nodeType===LT);var B2=Te(n=>n.nodeType===PT);var g0=n=>Rx(n,(t,e)=>`${e}:${t};`).join("");var LT=is.ELEMENT_NODE,PT=is.TEXT_NODE,k2=is.CDATA_SECTION_NODE,V2=is.COMMENT_NODE,UT=is.DOCUMENT_NODE,H2=is.DOCUMENT_TYPE_NODE,DT=is.DOCUMENT_FRAGMENT_NODE,G2=Te(n=>n.nodeType===UT);var ri=Symbol;var Ea=ri(),Ta=ri(),lf=ri(),hf=ri(),uf=ri(),Aa=ri(),df=ri(),go=ri(),ff=ri(),x0=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=0;for(;i<n.length;i++){let r=n[i];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)t.push(r);else if(r.constructor===Object)break}for(i>0&&e.push(t.join(""));i<n.length;i++){let r=n[i];r instanceof Symbol||e.push(r)}return e};var W2=Xx();var FT={[Ea]:ii("font-weight","bold"),[Ta]:ii("font-weight","normal"),[lf]:ii("color","blue"),[uf]:ii("color","green"),[hf]:ii("color","grey"),[Aa]:ii("color","red"),[df]:ii("color","purple"),[go]:ii("color","orange"),[ff]:ii("color","black")},BT=n=>{n.length===1&&n[0]?.constructor===Function&&(n=n[0]());let t=[],e=[],i=on(),r=[],s=0;for(;s<n.length;s++){let a=n[s],o=FT[a];if(o!==void 0)i.set(o.left,o.right);else{if(a===void 0)break;if(a.constructor===String||a.constructor===Number){let c=g0(i);s>0||c.length>0?(t.push("%c"+a),e.push(c)):t.push(a)}else break}}for(s>0&&(r=e,r.unshift(t.join("")));s<n.length;s++){let a=n[s];a instanceof Symbol||r.push(a)}return r},y0=n0?BT:x0,_0=(...n)=>{console.log(...y0(n)),b0.forEach(t=>t.print(n))},v0=(...n)=>{console.warn(...y0(n)),n.unshift(go),b0.forEach(t=>t.print(n))};var b0=Li();var M0=n=>({[Symbol.iterator](){return this},next:n}),S0=(n,t)=>M0(()=>{let e;do e=n.next();while(!e.done&&!t(e.value));return e}),ql=(n,t)=>M0(()=>{let{done:e,value:i}=n.next();return{done:e,value:e?void 0:t(i)}});var Ra=class{constructor(t,e){this.clock=t,this.len=e}},rs=class{constructor(){this.clients=new Map}},z0=(n,t,e)=>t.clients.forEach((i,r)=>{let s=n.doc.store.clients.get(r);for(let a=0;a<i.length;a++){let o=i[a];q0(n,s,o.clock,o.len,e)}}),WT=(n,t)=>{let e=0,i=n.length-1;for(;e<=i;){let r=an((e+i)/2),s=n[r],a=s.clock;if(a<=t){if(t<a+s.len)return r;e=r+1}else i=r-1}return null},F0=(n,t)=>{let e=n.clients.get(t.client);return e!==void 0&&WT(e,t.clock)!==null},Uf=n=>{n.clients.forEach(t=>{t.sort((r,s)=>r.clock-s.clock);let e,i;for(e=1,i=1;e<t.length;e++){let r=t[i-1],s=t[e];r.clock+r.len>=s.clock?r.len=Ui(r.len,s.clock+s.len-r.clock):(i<e&&(t[i]=s),i++)}t.length=i})},XT=n=>{let t=new rs;for(let e=0;e<n.length;e++)n[e].clients.forEach((i,r)=>{if(!t.clients.has(r)){let s=i.slice();for(let a=e+1;a<n.length;a++)Lx(s,n[a].clients.get(r)||[]);t.clients.set(r,s)}});return Uf(t),t},Kl=(n,t,e,i)=>{ei(n.clients,t,()=>[]).push(new Ra(e,i))},B0=()=>new rs,qT=n=>{let t=B0();return n.clients.forEach((e,i)=>{let r=[];for(let s=0;s<e.length;s++){let a=e[s];if(a.deleted){let o=a.id.clock,c=a.length;if(s+1<e.length)for(let l=e[s+1];s+1<e.length&&l.deleted;l=e[++s+1])c+=l.length;r.push(new Ra(o,c))}}r.length>0&&t.clients.set(i,r)}),t},bo=(n,t)=>{qt(n.restEncoder,t.clients.size),Pi(t.clients.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{n.resetDsCurVal(),qt(n.restEncoder,e);let r=i.length;qt(n.restEncoder,r);for(let s=0;s<r;s++){let a=i[s];n.writeDsClock(a.clock),n.writeDsLen(a.len)}})},Df=n=>{let t=new rs,e=Ft(n.restDecoder);for(let i=0;i<e;i++){n.resetDsCurVal();let r=Ft(n.restDecoder),s=Ft(n.restDecoder);if(s>0){let a=ei(t.clients,r,()=>[]);for(let o=0;o<s;o++)a.push(new Ra(n.readDsClock(),n.readDsLen()))}}return t},T0=(n,t,e)=>{let i=new rs,r=Ft(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();let a=Ft(n.restDecoder),o=Ft(n.restDecoder),c=e.clients.get(a)||[],l=De(e,a);for(let h=0;h<o;h++){let u=n.readDsClock(),d=u+n.readDsLen();if(u<l){l<d&&Kl(i,a,l,d-l);let f=si(c,u),g=c[f];for(!g.deleted&&g.id.clock<u&&(c.splice(f+1,0,ah(t,g,u-g.id.clock)),f++);f<c.length&&(g=c[f++],g.id.clock<d);)g.deleted||(d<g.id.clock+g.length&&c.splice(f,0,ah(t,g,d-g.id.clock)),g.delete(t))}else Kl(i,a,u,d-u)}}if(i.clients.size>0){let s=new Di;return qt(s.restEncoder,0),bo(s,i),s.toUint8Array()}return null};var k0=kd,ss=class n extends Ml{constructor({guid:t=Wx(),collectionid:e=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:a=!1,shouldLoad:o=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=k0(),this.guid=t,this.collectionid=e,this.share=new Map,this.store=new eh,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=o,this.autoLoad=a,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=Vd(l=>{this.on("load",()=>{this.isLoaded=!0,l(this)})});let c=()=>Vd(l=>{let h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),l())};this.on("sync",h)});this.on("sync",l=>{l===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=l===void 0||l===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){let t=this._item;t!==null&&!this.shouldLoad&&te(t.parent.doc,e=>{e.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Pi(this.subdocs).map(t=>t.guid))}transact(t,e=null){return te(this,t,e)}get(t,e=Ae){let i=ei(this.share,t,()=>{let s=new e;return s._integrate(this,null),s}),r=i.constructor;if(e!==Ae&&r!==e)if(r===Ae){let s=new e;s._map=i._map,i._map.forEach(a=>{for(;a!==null;a=a.left)a.parent=s}),s._start=i._start;for(let a=s._start;a!==null;a=a.right)a.parent=s;return s._length=i._length,this.share.set(t,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return i}getArray(t=""){return this.get(t,sh)}getText(t=""){return this.get(t,Na)}getMap(t=""){return this.get(t,as)}getXmlElement(t=""){return this.get(t,Oa)}getXmlFragment(t=""){return this.get(t,_o)}toJSON(){let t={};return this.share.forEach((e,i)=>{t[i]=e.toJSON()}),t}destroy(){this.isDestroyed=!0,Pi(this.subdocs).forEach(e=>e.destroy());let t=this._item;if(t!==null){this._item=null;let e=t.content;e.doc=new n({guid:this.guid,...e.opts,shouldLoad:!1}),e.doc._item=t,te(t.parent.doc,i=>{let r=e.doc;t.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}},Ql=class{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return Ft(this.restDecoder)}readDsLen(){return Ft(this.restDecoder)}},th=class extends Ql{readLeftID(){return Xt(Ft(this.restDecoder),Ft(this.restDecoder))}readRightID(){return Xt(Ft(this.restDecoder),Ft(this.restDecoder))}readClient(){return Ft(this.restDecoder)}readInfo(){return Kr(this.restDecoder)}readString(){return Qr(this.restDecoder)}readParentInfo(){return Ft(this.restDecoder)===1}readTypeRef(){return Ft(this.restDecoder)}readLen(){return Ft(this.restDecoder)}readAny(){return ao(this.restDecoder)}readBuf(){return i0(dn(this.restDecoder))}readJSON(){return JSON.parse(Qr(this.restDecoder))}readKey(){return Qr(this.restDecoder)}},gf=class{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=Ft(this.restDecoder),this.dsCurrVal}readDsLen(){let t=Ft(this.restDecoder)+1;return this.dsCurrVal+=t,t}},yr=class extends gf{constructor(t){super(t),this.keys=[],Ft(t),this.keyClockDecoder=new co(dn(t)),this.clientDecoder=new ts(dn(t)),this.leftClockDecoder=new co(dn(t)),this.rightClockDecoder=new co(dn(t)),this.infoDecoder=new pa(dn(t),Kr),this.stringDecoder=new Rl(dn(t)),this.parentInfoDecoder=new pa(dn(t),Kr),this.typeRefDecoder=new ts(dn(t)),this.lenDecoder=new ts(dn(t))}readLeftID(){return new xr(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new xr(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return ao(this.restDecoder)}readBuf(){return dn(this.restDecoder)}readJSON(){return ao(this.restDecoder)}readKey(){let t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{let e=this.stringDecoder.read();return this.keys.push(e),e}}},xf=class{constructor(){this.restEncoder=da()}toUint8Array(){return Hn(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){qt(this.restEncoder,t)}writeDsLen(t){qt(this.restEncoder,t)}},os=class extends xf{writeLeftID(t){qt(this.restEncoder,t.client),qt(this.restEncoder,t.clock)}writeRightID(t){qt(this.restEncoder,t.client),qt(this.restEncoder,t.clock)}writeClient(t){qt(this.restEncoder,t)}writeInfo(t){Al(this.restEncoder,t)}writeString(t){Jr(this.restEncoder,t)}writeParentInfo(t){qt(this.restEncoder,t?1:0)}writeTypeRef(t){qt(this.restEncoder,t)}writeLen(t){qt(this.restEncoder,t)}writeAny(t){ro(this.restEncoder,t)}writeBuf(t){hn(this.restEncoder,t)}writeJSON(t){Jr(this.restEncoder,JSON.stringify(t))}writeKey(t){Jr(this.restEncoder,t)}},yf=class{constructor(){this.restEncoder=da(),this.dsCurrVal=0}toUint8Array(){return Hn(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){let e=t-this.dsCurrVal;this.dsCurrVal=t,qt(this.restEncoder,e)}writeDsLen(t){t===0&&un(),qt(this.restEncoder,t-1),this.dsCurrVal+=t}},Di=class extends yf{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new so,this.clientEncoder=new Zr,this.leftClockEncoder=new so,this.rightClockEncoder=new so,this.infoEncoder=new ua(Al),this.stringEncoder=new Tl,this.parentInfoEncoder=new ua(Al),this.typeRefEncoder=new Zr,this.lenEncoder=new Zr}toUint8Array(){let t=da();return qt(t,0),hn(t,this.keyClockEncoder.toUint8Array()),hn(t,this.clientEncoder.toUint8Array()),hn(t,this.leftClockEncoder.toUint8Array()),hn(t,this.rightClockEncoder.toUint8Array()),hn(t,Hn(this.infoEncoder)),hn(t,this.stringEncoder.toUint8Array()),hn(t,Hn(this.parentInfoEncoder)),hn(t,this.typeRefEncoder.toUint8Array()),hn(t,this.lenEncoder.toUint8Array()),fa(t,Hn(this.restEncoder)),Hn(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){ro(this.restEncoder,t)}writeBuf(t){hn(this.restEncoder,t)}writeJSON(t){ro(this.restEncoder,t)}writeKey(t){let e=this.keyMap.get(t);e===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(e)}},YT=(n,t,e,i)=>{i=Ui(i,t[0].id.clock);let r=si(t,i);qt(n.restEncoder,t.length-r),n.writeClient(e),qt(n.restEncoder,i);let s=t[r];s.write(n,i-s.id.clock);for(let a=r+1;a<t.length;a++)t[a].write(n,0)},Nf=(n,t,e)=>{let i=new Map;e.forEach((r,s)=>{De(t,s)>r&&i.set(s,r)}),Of(t).forEach((r,s)=>{e.has(s)||i.set(s,0)}),qt(n.restEncoder,i.size),Pi(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{YT(n,t.clients.get(r),r,s)})},$T=(n,t)=>{let e=on(),i=Ft(n.restDecoder);for(let r=0;r<i;r++){let s=Ft(n.restDecoder),a=new Array(s),o=n.readClient(),c=Ft(n.restDecoder);e.set(o,{i:0,refs:a});for(let l=0;l<s;l++){let h=n.readInfo();switch(31&h){case 0:{let u=n.readLen();a[l]=new fn(Xt(o,c),u),c+=u;break}case 10:{let u=Ft(n.restDecoder);a[l]=new pn(Xt(o,c),u),c+=u;break}default:{let u=(h&192)===0,d=new Ne(Xt(o,c),null,(h&128)===128?n.readLeftID():null,null,(h&64)===64?n.readRightID():null,u?n.readParentInfo()?t.get(n.readString()):n.readLeftID():null,u&&(h&32)===32?n.readString():null,uy(n,h));a[l]=d,c+=d.length}}}}return e},jT=(n,t,e)=>{let i=[],r=Pi(e.keys()).sort((f,g)=>f-g);if(r.length===0)return null;let s=()=>{if(r.length===0)return null;let f=e.get(r[r.length-1]);for(;f.refs.length===f.i;)if(r.pop(),r.length>0)f=e.get(r[r.length-1]);else return null;return f},a=s();if(a===null)return null;let o=new eh,c=new Map,l=(f,g)=>{let x=c.get(f);(x==null||x>g)&&c.set(f,g)},h=a.refs[a.i++],u=new Map,d=()=>{for(let f of i){let g=f.id.client,x=e.get(g);x?(x.i--,o.clients.set(g,x.refs.slice(x.i)),e.delete(g),x.i=0,x.refs=[]):o.clients.set(g,[f]),r=r.filter(m=>m!==g)}i.length=0};for(;;){if(h.constructor!==pn){let g=ei(u,h.id.client,()=>De(t,h.id.client))-h.id.clock;if(g<0)i.push(h),l(h.id.client,h.id.clock-1),d();else{let x=h.getMissing(n,t);if(x!==null){i.push(h);let m=e.get(x)||{refs:[],i:0};if(m.refs.length===m.i)l(x,De(t,x)),d();else{h=m.refs[m.i++];continue}}else(g===0||g<h.length)&&(h.integrate(n,g),u.set(h.id.client,h.id.clock+h.length))}}if(i.length>0)h=i.pop();else if(a!==null&&a.i<a.refs.length)h=a.refs[a.i++];else{if(a=s(),a===null)break;h=a.refs[a.i++]}}if(o.clients.size>0){let f=new Di;return Nf(f,o,new Map),qt(f.restEncoder,0),{missing:c,update:f.toUint8Array()}}return null},JT=(n,t)=>Nf(n,t.doc.store,t.beforeState),ZT=(n,t,e,i=new yr(n))=>te(t,r=>{r.local=!1;let s=!1,a=r.doc,o=a.store,c=$T(i,a),l=jT(r,o,c),h=o.pendingStructs;if(h){for(let[d,f]of h.missing)if(f<De(o,d)){s=!0;break}if(l){for(let[d,f]of l.missing){let g=h.missing.get(d);(g==null||g>f)&&h.missing.set(d,f)}h.update=nh([h.update,l.update])}}else o.pendingStructs=l;let u=T0(i,r,o);if(o.pendingDs){let d=new yr(es(o.pendingDs));Ft(d.restDecoder);let f=T0(d,r,o);u&&f?o.pendingDs=nh([u,f]):o.pendingDs=u||f}else o.pendingDs=u;if(s){let d=o.pendingStructs.update;o.pendingStructs=null,V0(r.doc,d)}},e,!1);var V0=(n,t,e,i=yr)=>{let r=es(t);ZT(r,n,e,new i(r))},ch=(n,t,e)=>V0(n,t,e,th),KT=(n,t,e=new Map)=>{Nf(n,t.store,e),bo(n,qT(t.store))},QT=(n,t=new Uint8Array([0]),e=new Di)=>{let i=G0(t);KT(e,n,i);let r=[e.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(hA(n.store.pendingStructs.update,t)),r.length>1){if(e.constructor===os)return cA(r.map((s,a)=>a===0?s:dA(s)));if(e.constructor===Di)return nh(r)}return r[0]},H0=(n,t)=>QT(n,t,new os),tA=n=>{let t=new Map,e=Ft(n.restDecoder);for(let i=0;i<e;i++){let r=Ft(n.restDecoder),s=Ft(n.restDecoder);t.set(r,s)}return t},G0=n=>tA(new Ql(es(n)));var _f=class{constructor(){this.l=[]}},A0=()=>new _f,C0=(n,t)=>n.l.push(t),R0=(n,t)=>{let e=n.l,i=e.length;n.l=e.filter(r=>t!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},W0=(n,t,e)=>ya(n.l,[t,e]),xr=class{constructor(t,e){this.client=t,this.clock=e}},Yl=(n,t)=>n===t||n!==null&&t!==null&&n.client===t.client&&n.clock===t.clock,Xt=(n,t)=>new xr(n,t);var eA=n=>{for(let[t,e]of n.doc.share.entries())if(e===n)return t;throw un()};var vf=class{constructor(t,e){this.ds=t,this.sv=e}};var nA=(n,t)=>new vf(n,t),eI=nA(B0(),new Map);var xo=(n,t)=>t===void 0?!n.deleted:t.sv.has(n.id.client)&&(t.sv.get(n.id.client)||0)>n.id.clock&&!F0(t.ds,n.id),bf=(n,t)=>{let e=ei(n.meta,bf,Li),i=n.doc.store;e.has(t)||(t.sv.forEach((r,s)=>{r<De(i,s)&&_r(n,Xt(s,r))}),z0(n,t.ds,r=>{}),e.add(t))};var eh=class{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}},Of=n=>{let t=new Map;return n.clients.forEach((e,i)=>{let r=e[e.length-1];t.set(i,r.id.clock+r.length)}),t},De=(n,t)=>{let e=n.clients.get(t);if(e===void 0)return 0;let i=e[e.length-1];return i.id.clock+i.length},X0=(n,t)=>{let e=n.clients.get(t.id.client);if(e===void 0)e=[],n.clients.set(t.id.client,e);else{let i=e[e.length-1];if(i.id.clock+i.length!==t.id.clock)throw un()}e.push(t)},si=(n,t)=>{let e=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===t)return i;let a=an(t/(s+r.length-1)*i);for(;e<=i;){if(r=n[a],s=r.id.clock,s<=t){if(t<s+r.length)return a;e=a+1}else i=a-1;a=an((e+i)/2)}throw un()},iA=(n,t)=>{let e=n.clients.get(t.client);return e[si(e,t.clock)]},pf=iA,Mf=(n,t,e)=>{let i=si(t,e),r=t[i];return r.id.clock<e&&r instanceof Ne?(t.splice(i+1,0,ah(n,r,e-r.id.clock)),i+1):i},_r=(n,t)=>{let e=n.doc.store.clients.get(t.client);return e[Mf(n,e,t.clock)]},I0=(n,t,e)=>{let i=t.clients.get(e.client),r=si(i,e.clock),s=i[r];return e.clock!==s.id.clock+s.length-1&&s.constructor!==fn&&i.splice(r+1,0,ah(n,s,e.clock-s.id.clock+1)),s},rA=(n,t,e)=>{let i=n.clients.get(t.id.client);i[si(i,t.id.clock)]=e},q0=(n,t,e,i,r)=>{if(i===0)return;let s=e+i,a=Mf(n,t,e),o;do o=t[a++],s<o.id.clock+o.length&&Mf(n,t,s),r(o);while(a<t.length&&t[a].id.clock<s)},Sf=class{constructor(t,e,i){this.doc=t,this.deleteSet=new rs,this.beforeState=Of(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=e,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}},L0=(n,t)=>t.deleteSet.clients.size===0&&!Ix(t.afterState,(e,i)=>t.beforeState.get(i)!==e)?!1:(Uf(t.deleteSet),JT(n,t),bo(n,t.deleteSet),!0),P0=(n,t,e)=>{let i=t._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&ei(n.changed,t,Li).add(e)},Jl=(n,t)=>{let e=n[t],i=n[t-1],r=t;for(;r>0;e=i,i=n[--r-1]){if(i.deleted===e.deleted&&i.constructor===e.constructor&&i.mergeWith(e)){e instanceof Ne&&e.parentSub!==null&&e.parent._map.get(e.parentSub)===e&&e.parent._map.set(e.parentSub,i);continue}break}let s=t-r;return s&&n.splice(t+1-s,s),s},sA=(n,t,e)=>{for(let[i,r]of n.clients.entries()){let s=t.clients.get(i);for(let a=r.length-1;a>=0;a--){let o=r[a],c=o.clock+o.len;for(let l=si(s,o.clock),h=s[l];l<s.length&&h.id.clock<c;h=s[++l]){let u=s[l];if(o.clock+o.len<=u.id.clock)break;u instanceof Ne&&u.deleted&&!u.keep&&e(u)&&u.gc(t,!1)}}}},oA=(n,t)=>{n.clients.forEach((e,i)=>{let r=t.clients.get(i);for(let s=e.length-1;s>=0;s--){let a=e[s],o=Sl(r.length-1,1+si(r,a.clock+a.len-1));for(let c=o,l=r[c];c>0&&l.id.clock>=a.clock;l=r[c])c-=1+Jl(r,c)}})};var Y0=(n,t)=>{if(t<n.length){let e=n[t],i=e.doc,r=i.store,s=e.deleteSet,a=e._mergeStructs;try{Uf(s),e.afterState=Of(e.doc.store),i.emit("beforeObserverCalls",[e,i]);let o=[];e.changed.forEach((c,l)=>o.push(()=>{(l._item===null||!l._item.deleted)&&l._callObserver(e,c)})),o.push(()=>{e.changedParentTypes.forEach((c,l)=>{l._dEH.l.length>0&&(l._item===null||!l._item.deleted)&&(c=c.filter(h=>h.target._item===null||!h.target._item.deleted),c.forEach(h=>{h.currentTarget=l,h._path=null}),c.sort((h,u)=>h.path.length-u.path.length),W0(l._dEH,c,e))})}),o.push(()=>i.emit("afterTransaction",[e,i])),ya(o,[]),e._needFormattingCleanup&&SA(e)}finally{i.gc&&sA(s,r,i.gcFilter),oA(s,r),e.afterState.forEach((h,u)=>{let d=e.beforeState.get(u)||0;if(d!==h){let f=r.clients.get(u),g=Ui(si(f,d),1);for(let x=f.length-1;x>=g;)x-=1+Jl(f,x)}});for(let h=a.length-1;h>=0;h--){let{client:u,clock:d}=a[h].id,f=r.clients.get(u),g=si(f,d);g+1<f.length&&Jl(f,g+1)>1||g>0&&Jl(f,g)}if(!e.local&&e.afterState.get(i.clientID)!==e.beforeState.get(i.clientID)&&(_0(go,Ea,"[yjs] ",Ta,Aa,"Changed the client-id because another client seems to be using it."),i.clientID=k0()),i.emit("afterTransactionCleanup",[e,i]),i._observers.has("update")){let h=new os;L0(h,e)&&i.emit("update",[h.toUint8Array(),e.origin,i,e])}if(i._observers.has("updateV2")){let h=new Di;L0(h,e)&&i.emit("updateV2",[h.toUint8Array(),e.origin,i,e])}let{subdocsAdded:o,subdocsLoaded:c,subdocsRemoved:l}=e;(o.size>0||l.size>0||c.size>0)&&(o.forEach(h=>{h.clientID=i.clientID,h.collectionid==null&&(h.collectionid=i.collectionid),i.subdocs.add(h)}),l.forEach(h=>i.subdocs.delete(h)),i.emit("subdocs",[{loaded:c,added:o,removed:l},i,e]),l.forEach(h=>h.destroy())),n.length<=t+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):Y0(n,t+1)}}},te=(n,t,e=null,i=!0)=>{let r=n._transactionCleanups,s=!1,a=null;n._transaction===null&&(s=!0,n._transaction=new Sf(n,e,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{a=t(n._transaction)}finally{if(s){let o=n._transaction===r[0];n._transaction=null,o&&Y0(r,0)}}return a};function*aA(n){let t=Ft(n.restDecoder);for(let e=0;e<t;e++){let i=Ft(n.restDecoder),r=n.readClient(),s=Ft(n.restDecoder);for(let a=0;a<i;a++){let o=n.readInfo();if(o===10){let c=Ft(n.restDecoder);yield new pn(Xt(r,s),c),s+=c}else if((31&o)!==0){let c=(o&192)===0,l=new Ne(Xt(r,s),null,(o&128)===128?n.readLeftID():null,null,(o&64)===64?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(o&32)===32?n.readString():null,uy(n,o));yield l,s+=l.length}else{let c=n.readLen();yield new fn(Xt(r,s),c),s+=c}}}}var Ia=class{constructor(t,e){this.gen=aA(t),this.curr=null,this.done=!1,this.filterSkips=e,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===pn);return this.curr}};var La=class{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}},cA=n=>nh(n,th,os);var lA=(n,t)=>{if(n.constructor===fn){let{client:e,clock:i}=n.id;return new fn(Xt(e,i+t),n.length-t)}else if(n.constructor===pn){let{client:e,clock:i}=n.id;return new pn(Xt(e,i+t),n.length-t)}else{let e=n,{client:i,clock:r}=e.id;return new Ne(Xt(i,r+t),null,Xt(i,r+t-1),null,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t))}},nh=(n,t=yr,e=Di)=>{if(n.length===1)return n[0];let i=n.map(h=>new t(es(h))),r=i.map(h=>new Ia(h,!0)),s=null,a=new e,o=new La(a);for(;r=r.filter(d=>d.curr!==null),r.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){let g=d.curr.id.clock-f.curr.id.clock;return g===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===pn?1:-1:g}else return f.curr.id.client-d.curr.id.client}),r.length!==0;){let h=r[0],u=h.curr.id.client;if(s!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=s.struct.id.clock+s.struct.length&&d.id.client>=s.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>s.struct.id.clock+s.struct.length)continue;if(u!==s.struct.id.client)mr(o,s.struct,s.offset),s={struct:d,offset:0},h.next();else if(s.struct.id.clock+s.struct.length<d.id.clock)if(s.struct.constructor===pn)s.struct.length=d.id.clock+d.length-s.struct.id.clock;else{mr(o,s.struct,s.offset);let g=d.id.clock-s.struct.id.clock-s.struct.length;s={struct:new pn(Xt(u,s.struct.id.clock+s.struct.length),g),offset:0}}else{let g=s.struct.id.clock+s.struct.length-d.id.clock;g>0&&(s.struct.constructor===pn?s.struct.length-=g:d=lA(d,g)),s.struct.mergeWith(d)||(mr(o,s.struct,s.offset),s={struct:d,offset:0},h.next())}}else s={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===s.struct.id.clock+s.struct.length&&d.constructor!==pn;d=h.next())mr(o,s.struct,s.offset),s={struct:d,offset:0}}s!==null&&(mr(o,s.struct,s.offset),s=null),zf(o);let c=i.map(h=>Df(h)),l=XT(c);return bo(a,l),a.toUint8Array()},hA=(n,t,e=yr,i=Di)=>{let r=G0(t),s=new i,a=new La(s),o=new e(es(n)),c=new Ia(o,!1);for(;c.curr;){let h=c.curr,u=h.id.client,d=r.get(u)||0;if(c.curr.constructor===pn){c.next();continue}if(h.id.clock+h.length>d)for(mr(a,h,Ui(d-h.id.clock,0)),c.next();c.curr&&c.curr.id.client===u;)mr(a,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===u&&c.curr.id.clock+c.curr.length<=d;)c.next()}zf(a);let l=Df(o);return bo(s,l),s.toUint8Array()};var $0=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:Hn(n.encoder.restEncoder)}),n.encoder.restEncoder=da(),n.written=0)},mr=(n,t,e)=>{n.written>0&&n.currClient!==t.id.client&&$0(n),n.written===0&&(n.currClient=t.id.client,n.encoder.writeClient(t.id.client),qt(n.encoder.restEncoder,t.id.clock+e)),t.write(n.encoder,e),n.written++},zf=n=>{$0(n);let t=n.encoder.restEncoder;qt(t,n.clientStructs.length);for(let e=0;e<n.clientStructs.length;e++){let i=n.clientStructs[e];qt(t,i.written),fa(t,i.restEncoder)}},uA=(n,t,e,i)=>{let r=new e(es(n)),s=new Ia(r,!1),a=new i,o=new La(a);for(let l=s.curr;l!==null;l=s.next())mr(o,t(l),0);zf(o);let c=Df(r);return bo(a,c),a.toUint8Array()};var dA=n=>uA(n,Kx,yr,os),U0="You must not compute changes after the event-handler fired.",yo=class{constructor(t,e){this.target=t,this.currentTarget=t,this.transaction=e,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=fA(this.currentTarget,this.target))}deletes(t){return F0(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw Mn(U0);let t=new Map,e=this.target;this.transaction.changed.get(e).forEach(r=>{if(r!==null){let s=e._map.get(r),a,o;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))a="delete",o=_l(c.content.getContent());else return;else c!==null&&this.deletes(c)?(a="update",o=_l(c.content.getContent())):(a="add",o=void 0)}else if(this.deletes(s))a="delete",o=_l(s.content.getContent());else return;t.set(r,{action:a,oldValue:o})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw Mn(U0);let e=this.target,i=Li(),r=Li(),s=[];if(t={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(e).has(null)){let o=null,c=()=>{o&&s.push(o)};for(let l=e._start;l!==null;l=l.right)l.deleted?this.deletes(l)&&!this.adds(l)&&((o===null||o.delete===void 0)&&(c(),o={delete:0}),o.delete+=l.length,r.add(l)):this.adds(l)?((o===null||o.insert===void 0)&&(c(),o={insert:[]}),o.insert=o.insert.concat(l.content.getContent()),i.add(l)):((o===null||o.retain===void 0)&&(c(),o={retain:0}),o.retain+=l.length);o!==null&&o.retain===void 0&&c()}this._changes=t}return t}},fA=(n,t)=>{let e=[];for(;t._item!==null&&t!==n;){if(t._item.parentSub!==null)e.unshift(t._item.parentSub);else{let i=0,r=t._item.parent._start;for(;r!==t._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;e.unshift(i)}t=t._item.parent}return e},Ye=()=>{v0("Invalid access: Add Yjs type to a document before reading data.")},j0=80,Ff=0,wf=class{constructor(t,e){t.marker=!0,this.p=t,this.index=e,this.timestamp=Ff++}},pA=n=>{n.timestamp=Ff++},J0=(n,t,e)=>{n.p.marker=!1,n.p=t,t.marker=!0,n.index=e,n.timestamp=Ff++},mA=(n,t,e)=>{if(n.length>=j0){let i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return J0(i,t,e),i}else{let i=new wf(t,e);return n.push(i),i}},lh=(n,t)=>{if(n._start===null||t===0||n._searchMarker===null)return null;let e=n._searchMarker.length===0?null:n._searchMarker.reduce((s,a)=>$r(t-s.index)<$r(t-a.index)?s:a),i=n._start,r=0;for(e!==null&&(i=e.p,r=e.index,pA(e));i.right!==null&&r<t;){if(!i.deleted&&i.countable){if(t<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>t;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return e!==null&&$r(e.index-r)<i.parent.length/j0?(J0(e,i,r),e):mA(n._searchMarker,i,r)},Pa=(n,t,e)=>{for(let i=n.length-1;i>=0;i--){let r=n[i];if(e>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(t<r.index||e>0&&t===r.index)&&(r.index=Ui(t,r.index+e))}};var hh=(n,t,e)=>{let i=n,r=t.changedParentTypes;for(;ei(r,n,()=>[]).push(e),n._item!==null;)n=n._item.parent;W0(i._eH,e,t)},Ae=class{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=A0(),this._dEH=A0(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,e){this.doc=t,this._item=e}_copy(){throw Sn()}clone(){throw Sn()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,e){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){C0(this._eH,t)}observeDeep(t){C0(this._dEH,t)}unobserve(t){R0(this._eH,t)}unobserveDeep(t){R0(this._dEH,t)}toJSON(){}},Z0=(n,t,e)=>{n.doc??Ye(),t<0&&(t=n._length+t),e<0&&(e=n._length+e);let i=e-t,r=[],s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){let a=s.content.getContent();if(a.length<=t)t-=a.length;else{for(let o=t;o<a.length&&i>0;o++)r.push(a[o]),i--;t=0}}s=s.right}return r},K0=n=>{n.doc??Ye();let t=[],e=n._start;for(;e!==null;){if(e.countable&&!e.deleted){let i=e.content.getContent();for(let r=0;r<i.length;r++)t.push(i[r])}e=e.right}return t};var Ua=(n,t)=>{let e=0,i=n._start;for(n.doc??Ye();i!==null;){if(i.countable&&!i.deleted){let r=i.content.getContent();for(let s=0;s<r.length;s++)t(r[s],e++,n)}i=i.right}},Q0=(n,t)=>{let e=[];return Ua(n,(i,r)=>{e.push(t(i,r,n))}),e},gA=n=>{let t=n._start,e=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(e===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};e=t.content.getContent(),i=0,t=t.right}let r=e[i++];return e.length<=i&&(e=null),{done:!1,value:r}}}},ty=(n,t)=>{n.doc??Ye();let e=lh(n,t),i=n._start;for(e!==null&&(i=e.p,t-=e.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(t<i.length)return i.content.getContent()[t];t-=i.length}},ih=(n,t,e,i)=>{let r=e,s=n.doc,a=s.clientID,o=s.store,c=e===null?t._start:e.right,l=[],h=()=>{l.length>0&&(r=new Ne(Xt(a,De(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new vo(l)),r.integrate(n,0),l=[])};i.forEach(u=>{if(u===null)l.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:l.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:r=new Ne(Xt(a,De(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Fa(new Uint8Array(u))),r.integrate(n,0);break;case ss:r=new Ne(Xt(a,De(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Ba(u)),r.integrate(n,0);break;default:if(u instanceof Ae)r=new Ne(Xt(a,De(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Oi(u)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},ey=()=>Mn("Length exceeded!"),ny=(n,t,e,i)=>{if(e>t._length)throw ey();if(e===0)return t._searchMarker&&Pa(t._searchMarker,e,i.length),ih(n,t,null,i);let r=e,s=lh(t,e),a=t._start;for(s!==null&&(a=s.p,e-=s.index,e===0&&(a=a.prev,e+=a&&a.countable&&!a.deleted?a.length:0));a!==null;a=a.right)if(!a.deleted&&a.countable){if(e<=a.length){e<a.length&&_r(n,Xt(a.id.client,a.id.clock+e));break}e-=a.length}return t._searchMarker&&Pa(t._searchMarker,r,i.length),ih(n,t,a,i)},xA=(n,t,e)=>{let r=(t._searchMarker||[]).reduce((s,a)=>a.index>s.index?a:s,{index:0,p:t._start}).p;if(r)for(;r.right;)r=r.right;return ih(n,t,r,e)},iy=(n,t,e,i)=>{if(i===0)return;let r=e,s=i,a=lh(t,e),o=t._start;for(a!==null&&(o=a.p,e-=a.index);o!==null&&e>0;o=o.right)!o.deleted&&o.countable&&(e<o.length&&_r(n,Xt(o.id.client,o.id.clock+e)),e-=o.length);for(;i>0&&o!==null;)o.deleted||(i<o.length&&_r(n,Xt(o.id.client,o.id.clock+i)),o.delete(n),i-=o.length),o=o.right;if(i>0)throw ey();t._searchMarker&&Pa(t._searchMarker,r,-s+i)},rh=(n,t,e)=>{let i=t._map.get(e);i!==void 0&&i.delete(n)},Bf=(n,t,e,i)=>{let r=t._map.get(e)||null,s=n.doc,a=s.clientID,o;if(i==null)o=new vo([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:o=new vo([i]);break;case Uint8Array:o=new Fa(i);break;case ss:o=new Ba(i);break;default:if(i instanceof Ae)o=new Oi(i);else throw new Error("Unexpected content type")}new Ne(Xt(a,De(s.store,a)),r,r&&r.lastId,null,null,t,e,o).integrate(n,0)},kf=(n,t)=>{n.doc??Ye();let e=n._map.get(t);return e!==void 0&&!e.deleted?e.content.getContent()[e.length-1]:void 0},ry=n=>{let t={};return n.doc??Ye(),n._map.forEach((e,i)=>{e.deleted||(t[i]=e.content.getContent()[e.length-1])}),t},sy=(n,t)=>{n.doc??Ye();let e=n._map.get(t);return e!==void 0&&!e.deleted};var yA=(n,t)=>{let e={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!t.sv.has(s.id.client)||s.id.clock>=(t.sv.get(s.id.client)||0));)s=s.left;s!==null&&xo(s,t)&&(e[r]=s.content.getContent()[s.length-1])}),e},$l=n=>(n.doc??Ye(),S0(n._map.entries(),t=>!t[1].deleted)),Ef=class extends yo{},sh=class n extends Ae{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){let e=new n;return e.push(t),e}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Ae?e.clone():e)),t}get length(){return this.doc??Ye(),this._length}_callObserver(t,e){super._callObserver(t,e),hh(this,t,new Ef(this,t))}insert(t,e){this.doc!==null?te(this.doc,i=>{ny(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}push(t){this.doc!==null?te(this.doc,e=>{xA(e,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,e=1){this.doc!==null?te(this.doc,i=>{iy(i,this,t,e)}):this._prelimContent.splice(t,e)}get(t){return ty(this,t)}toArray(){return K0(this)}slice(t=0,e=this.length){return Z0(this,t,e)}toJSON(){return this.map(t=>t instanceof Ae?t.toJSON():t)}map(t){return Q0(this,t)}forEach(t){Ua(this,t)}[Symbol.iterator](){return gA(this)}_write(t){t.writeTypeRef(kA)}},_A=n=>new sh,Tf=class extends yo{constructor(t,e,i){super(t,e),this.keysChanged=i}},as=class n extends Ae{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,e){super._integrate(t,e),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return this.forEach((e,i)=>{t.set(i,e instanceof Ae?e.clone():e)}),t}_callObserver(t,e){hh(this,t,new Tf(this,t,e))}toJSON(){this.doc??Ye();let t={};return this._map.forEach((e,i)=>{if(!e.deleted){let r=e.content.getContent()[e.length-1];t[i]=r instanceof Ae?r.toJSON():r}}),t}get size(){return[...$l(this)].length}keys(){return ql($l(this),t=>t[0])}values(){return ql($l(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return ql($l(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??Ye(),this._map.forEach((e,i)=>{e.deleted||t(e.content.getContent()[e.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?te(this.doc,e=>{rh(e,this,t)}):this._prelimContent.delete(t)}set(t,e){return this.doc!==null?te(this.doc,i=>{Bf(i,this,t,e)}):this._prelimContent.set(t,e),e}get(t){return kf(this,t)}has(t){return sy(this,t)}clear(){this.doc!==null?te(this.doc,t=>{this.forEach(function(e,i,r){rh(t,r,i)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(VA)}},vA=n=>new as,gr=(n,t)=>n===t||typeof n=="object"&&typeof t=="object"&&n&&t&&Xd(n,t),Da=class{constructor(t,e,i,r){this.left=t,this.right=e,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&un(),this.right.content.constructor){case Ce:this.right.deleted||Mo(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}},D0=(n,t,e)=>{for(;t.right!==null&&e>0;){switch(t.right.content.constructor){case Ce:t.right.deleted||Mo(t.currentAttributes,t.right.content);break;default:t.right.deleted||(e<t.right.length&&_r(n,Xt(t.right.id.client,t.right.id.clock+e)),t.index+=t.right.length,e-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},jl=(n,t,e,i)=>{let r=new Map,s=i?lh(t,e):null;if(s){let a=new Da(s.p.left,s.p,s.index,r);return D0(n,a,e-s.index)}else{let a=new Da(null,t._start,0,r);return D0(n,a,e)}},oy=(n,t,e,i)=>{for(;e.right!==null&&(e.right.deleted===!0||e.right.content.constructor===Ce&&gr(i.get(e.right.content.key),e.right.content.value));)e.right.deleted||i.delete(e.right.content.key),e.forward();let r=n.doc,s=r.clientID;i.forEach((a,o)=>{let c=e.left,l=e.right,h=new Ne(Xt(s,De(r.store,s)),c,c&&c.lastId,l,l&&l.id,t,null,new Ce(o,a));h.integrate(n,0),e.right=h,e.forward()})},Mo=(n,t)=>{let{key:e,value:i}=t;i===null?n.delete(e):n.set(e,i)},ay=(n,t)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===Ce&&gr(t[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},cy=(n,t,e,i)=>{let r=n.doc,s=r.clientID,a=new Map;for(let o in i){let c=i[o],l=e.currentAttributes.get(o)??null;if(!gr(l,c)){a.set(o,l);let{left:h,right:u}=e;e.right=new Ne(Xt(s,De(r.store,s)),h,h&&h.lastId,u,u&&u.id,t,null,new Ce(o,c)),e.right.integrate(n,0),e.forward()}}return a},mf=(n,t,e,i,r)=>{e.currentAttributes.forEach((d,f)=>{r[f]===void 0&&(r[f]=null)});let s=n.doc,a=s.clientID;ay(e,r);let o=cy(n,t,e,r),c=i.constructor===String?new Ni(i):i instanceof Ae?new Oi(i):new cs(i),{left:l,right:h,index:u}=e;t._searchMarker&&Pa(t._searchMarker,e.index,c.getLength()),h=new Ne(Xt(a,De(s.store,a)),l,l&&l.lastId,h,h&&h.id,t,null,c),h.integrate(n,0),e.right=h,e.index=u,e.forward(),oy(n,t,e,o)},N0=(n,t,e,i,r)=>{let s=n.doc,a=s.clientID;ay(e,r);let o=cy(n,t,e,r);t:for(;e.right!==null&&(i>0||o.size>0&&(e.right.deleted||e.right.content.constructor===Ce));){if(!e.right.deleted)switch(e.right.content.constructor){case Ce:{let{key:c,value:l}=e.right.content,h=r[c];if(h!==void 0){if(gr(h,l))o.delete(c);else{if(i===0)break t;o.set(c,l)}e.right.delete(n)}else e.currentAttributes.set(c,l);break}default:i<e.right.length&&_r(n,Xt(e.right.id.client,e.right.id.clock+i)),i-=e.right.length;break}e.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;e.right=new Ne(Xt(a,De(s.store,a)),e.left,e.left&&e.left.lastId,e.right,e.right&&e.right.id,t,null,new Ni(c)),e.right.integrate(n,0),e.forward()}oy(n,t,e,o)},ly=(n,t,e,i,r)=>{let s=t,a=on();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===Ce){let l=s.content;a.set(l.key,l)}s=s.right}let o=0,c=!1;for(;t!==s;){if(e===t&&(c=!0),!t.deleted){let l=t.content;switch(l.constructor){case Ce:{let{key:h,value:u}=l,d=i.get(h)??null;(a.get(h)!==l||d===u)&&(t.delete(n),o++,!c&&(r.get(h)??null)===u&&d!==u&&(d===null?r.delete(h):r.set(h,d))),!c&&!t.deleted&&Mo(r,l);break}}}t=t.right}return o},bA=(n,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;let e=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===Ce){let i=t.content.key;e.has(i)?t.delete(n):e.add(i)}t=t.left}},MA=n=>{let t=0;return te(n.doc,e=>{let i=n._start,r=n._start,s=on(),a=yl(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case Ce:Mo(a,r.content);break;default:t+=ly(e,i,r,s,a),s=yl(a),i=r;break}r=r.right}}),t},SA=n=>{let t=new Set,e=n.doc;for(let[i,r]of n.afterState.entries()){let s=n.beforeState.get(i)||0;r!==s&&q0(n,e.store.clients.get(i),s,r,a=>{!a.deleted&&a.content.constructor===Ce&&a.constructor!==fn&&t.add(a.parent)})}te(e,i=>{z0(n,n.deleteSet,r=>{if(r instanceof fn||!r.parent._hasFormatting||t.has(r.parent))return;let s=r.parent;r.content.constructor===Ce?t.add(s):bA(i,r)});for(let r of t)MA(r)})},O0=(n,t,e)=>{let i=e,r=yl(t.currentAttributes),s=t.right;for(;e>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case Oi:case cs:case Ni:e<t.right.length&&_r(n,Xt(t.right.id.client,t.right.id.clock+e)),e-=t.right.length,t.right.delete(n);break}t.forward()}s&&ly(n,s,t.right,r,t.currentAttributes);let a=(t.left||t.right).parent;return a._searchMarker&&Pa(a._searchMarker,t.index,-i+e),t},Af=class extends yo{constructor(t,e,i){super(t,e),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){let t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){let t=this.target.doc,e=[];te(t,i=>{let r=new Map,s=new Map,a=this.target._start,o=null,c={},l="",h=0,u=0,d=()=>{if(o!==null){let f=null;switch(o){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof l=="object"||l.length>0)&&(f={insert:l},r.size>0&&(f.attributes={},r.forEach((g,x)=>{g!==null&&(f.attributes[x]=g)}))),l="";break;case"retain":h>0&&(f={retain:h},Zx(c)||(f.attributes=jx({},c))),h=0;break}f&&e.push(f),o=null}};for(;a!==null;){switch(a.content.constructor){case Oi:case cs:this.adds(a)?this.deletes(a)||(d(),o="insert",l=a.content.getContent()[0],d()):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),u+=1):a.deleted||(o!=="retain"&&(d(),o="retain"),h+=1);break;case Ni:this.adds(a)?this.deletes(a)||(o!=="insert"&&(d(),o="insert"),l+=a.content.str):this.deletes(a)?(o!=="delete"&&(d(),o="delete"),u+=a.length):a.deleted||(o!=="retain"&&(d(),o="retain"),h+=a.length);break;case Ce:{let{key:f,value:g}=a.content;if(this.adds(a)){if(!this.deletes(a)){let x=r.get(f)??null;gr(x,g)?g!==null&&a.delete(i):(o==="retain"&&d(),gr(g,s.get(f)??null)?delete c[f]:c[f]=g)}}else if(this.deletes(a)){s.set(f,g);let x=r.get(f)??null;gr(x,g)||(o==="retain"&&d(),c[f]=x)}else if(!a.deleted){s.set(f,g);let x=c[f];x!==void 0&&(gr(x,g)?x!==null&&a.delete(i):(o==="retain"&&d(),g===null?delete c[f]:c[f]=g))}a.deleted||(o==="insert"&&d(),Mo(r,a.content));break}}a=a.right}for(d();e.length>0;){let f=e[e.length-1];if(f.retain!==void 0&&f.attributes===void 0)e.pop();else break}}),this._delta=e}return this._delta}},Na=class n extends Ae{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??Ye(),this._length}_integrate(t,e){super._integrate(t,e);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}_callObserver(t,e){super._callObserver(t,e);let i=new Af(this,t,e);hh(this,t,i),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??Ye();let t="",e=this._start;for(;e!==null;)!e.deleted&&e.countable&&e.content.constructor===Ni&&(t+=e.content.str),e=e.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:e=!0}={}){this.doc!==null?te(this.doc,i=>{let r=new Da(null,this._start,0,new Map);for(let s=0;s<t.length;s++){let a=t[s];if(a.insert!==void 0){let o=!e&&typeof a.insert=="string"&&s===t.length-1&&r.right===null&&a.insert.slice(-1)===`
`?a.insert.slice(0,-1):a.insert;(typeof o!="string"||o.length>0)&&mf(i,this,r,o,a.attributes||{})}else a.retain!==void 0?N0(i,this,r,a.retain,a.attributes||{}):a.delete!==void 0&&O0(i,r,a.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,e,i){this.doc??Ye();let r=[],s=new Map,a=this.doc,o="",c=this._start;function l(){if(o.length>0){let u={},d=!1;s.forEach((g,x)=>{d=!0,u[x]=g});let f={insert:o};d&&(f.attributes=u),r.push(f),o=""}}let h=()=>{for(;c!==null;){if(xo(c,t)||e!==void 0&&xo(c,e))switch(c.content.constructor){case Ni:{let u=s.get("ychange");t!==void 0&&!xo(c,t)?(u===void 0||u.user!==c.id.client||u.type!=="removed")&&(l(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):e!==void 0&&!xo(c,e)?(u===void 0||u.user!==c.id.client||u.type!=="added")&&(l(),s.set("ychange",i?i("added",c.id):{type:"added"})):u!==void 0&&(l(),s.delete("ychange")),o+=c.content.str;break}case Oi:case cs:{l();let u={insert:c.content.getContent()[0]};if(s.size>0){let d={};u.attributes=d,s.forEach((f,g)=>{d[g]=f})}r.push(u);break}case Ce:xo(c,t)&&(l(),Mo(s,c.content));break}c=c.right}l()};return t||e?te(a,u=>{t&&bf(u,t),e&&bf(u,e),h()},"cleanup"):h(),r}insert(t,e,i){if(e.length<=0)return;let r=this.doc;r!==null?te(r,s=>{let a=jl(s,this,t,!i);i||(i={},a.currentAttributes.forEach((o,c)=>{i[c]=o})),mf(s,this,a,e,i)}):this._pending.push(()=>this.insert(t,e,i))}insertEmbed(t,e,i){let r=this.doc;r!==null?te(r,s=>{let a=jl(s,this,t,!i);mf(s,this,a,e,i||{})}):this._pending.push(()=>this.insertEmbed(t,e,i||{}))}delete(t,e){if(e===0)return;let i=this.doc;i!==null?te(i,r=>{O0(r,jl(r,this,t,!0),e)}):this._pending.push(()=>this.delete(t,e))}format(t,e,i){if(e===0)return;let r=this.doc;r!==null?te(r,s=>{let a=jl(s,this,t,!1);a.right!==null&&N0(s,this,a,e,i)}):this._pending.push(()=>this.format(t,e,i))}removeAttribute(t){this.doc!==null?te(this.doc,e=>{rh(e,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Bf(i,this,t,e)}):this._pending.push(()=>this.setAttribute(t,e))}getAttribute(t){return kf(this,t)}getAttributes(){return ry(this)}_write(t){t.writeTypeRef(HA)}},wA=n=>new Na,Ca=class{constructor(t,e=()=>!0){this._filter=e,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??Ye()}[Symbol.iterator](){return this}next(){let t=this._currentNode,e=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(e)))do if(e=t.content.type,!t.deleted&&(e.constructor===Oa||e.constructor===_o)&&e._start!==null)t=e._start;else for(;t!==null;)if(t.right!==null){t=t.right;break}else t.parent===this._root?t=null:t=t.parent._item;while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}},_o=class n extends Ae{constructor(){super(),this._prelimContent=[]}get firstChild(){let t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new n}clone(){let t=new n;return t.insert(0,this.toArray().map(e=>e instanceof Ae?e.clone():e)),t}get length(){return this.doc??Ye(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new Ca(this,t)}querySelector(t){t=t.toUpperCase();let i=new Ca(this,r=>r.nodeName&&r.nodeName.toUpperCase()===t).next();return i.done?null:i.value}querySelectorAll(t){return t=t.toUpperCase(),Pi(new Ca(this,e=>e.nodeName&&e.nodeName.toUpperCase()===t))}_callObserver(t,e){hh(this,t,new Cf(this,e,t))}toString(){return Q0(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,e={},i){let r=t.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Ua(this,s=>{r.insertBefore(s.toDOM(t,e,i),null)}),r}insert(t,e){this.doc!==null?te(this.doc,i=>{ny(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}insertAfter(t,e){if(this.doc!==null)te(this.doc,i=>{let r=t&&t instanceof Ae?t._item:t;ih(i,this,r,e)});else{let i=this._prelimContent,r=t===null?0:i.findIndex(s=>s===t)+1;if(r===0&&t!==null)throw Mn("Reference item not found");i.splice(r,0,...e)}}delete(t,e=1){this.doc!==null?te(this.doc,i=>{iy(i,this,t,e)}):this._prelimContent.splice(t,e)}toArray(){return K0(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return ty(this,t)}slice(t=0,e=this.length){return Z0(this,t,e)}forEach(t){Ua(this,t)}_write(t){t.writeTypeRef(WA)}},EA=n=>new _o,Oa=class n extends _o{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,e){super._integrate(t,e),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new n(this.nodeName)}clone(){let t=new n(this.nodeName),e=this.getAttributes();return Jx(e,(i,r)=>{typeof i=="string"&&t.setAttribute(r,i)}),t.insert(0,this.toArray().map(i=>i instanceof Ae?i.clone():i)),t}toString(){let t=this.getAttributes(),e=[],i=[];for(let o in t)i.push(o);i.sort();let r=i.length;for(let o=0;o<r;o++){let c=i[o];e.push(c+'="'+t[c]+'"')}let s=this.nodeName.toLocaleLowerCase(),a=e.length>0?" "+e.join(" "):"";return`<${s}${a}>${super.toString()}</${s}>`}removeAttribute(t){this.doc!==null?te(this.doc,e=>{rh(e,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,e){this.doc!==null?te(this.doc,i=>{Bf(i,this,t,e)}):this._prelimAttrs.set(t,e)}getAttribute(t){return kf(this,t)}hasAttribute(t){return sy(this,t)}getAttributes(t){return t?yA(this,t):ry(this)}toDOM(t=document,e={},i){let r=t.createElement(this.nodeName),s=this.getAttributes();for(let a in s){let o=s[a];typeof o=="string"&&r.setAttribute(a,o)}return Ua(this,a=>{r.appendChild(a.toDOM(t,e,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(t){t.writeTypeRef(GA),t.writeKey(this.nodeName)}},TA=n=>new Oa(n.readKey()),Cf=class extends yo{constructor(t,e,i){super(t,i),this.childListChanged=!1,this.attributesChanged=new Set,e.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}},Rf=class n extends as{constructor(t){super(),this.hookName=t}_copy(){return new n(this.hookName)}clone(){let t=new n(this.hookName);return this.forEach((e,i)=>{t.set(i,e)}),t}toDOM(t=document,e={},i){let r=e[this.hookName],s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(t){t.writeTypeRef(XA),t.writeKey(this.hookName)}},AA=n=>new Rf(n.readKey()),If=class n extends Na{get nextSibling(){let t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){let t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new n}clone(){let t=new n;return t.applyDelta(this.toDelta()),t}toDOM(t=document,e,i){let r=t.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(t=>{let e=[];for(let r in t.attributes){let s=[];for(let a in t.attributes[r])s.push({key:a,value:t.attributes[r][a]});s.sort((a,o)=>a.key<o.key?-1:1),e.push({nodeName:r,attrs:s})}e.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<e.length;r++){let s=e[r];i+=`<${s.nodeName}`;for(let a=0;a<s.attrs.length;a++){let o=s.attrs[a];i+=` ${o.key}="${o.value}"`}i+=">"}i+=t.insert;for(let r=e.length-1;r>=0;r--)i+=`</${e[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(qA)}},CA=n=>new If,za=class{constructor(t,e){this.id=t,this.length=e}get deleted(){throw Sn()}mergeWith(t){return!1}write(t,e,i){throw Sn()}integrate(t,e){throw Sn()}},RA=0,fn=class extends za{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){e>0&&(this.id.clock+=e,this.length-=e),X0(t.doc.store,this)}write(t,e){t.writeInfo(RA),t.writeLen(this.length-e)}getMissing(t,e){return null}},Fa=class n{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new n(this.content)}splice(t){throw Sn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeBuf(this.content)}getRef(){return 3}},IA=n=>new Fa(n.readBuf()),oh=class n{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.len)}splice(t){let e=new n(this.len-t);return this.len=t,e}mergeWith(t){return this.len+=t.len,!0}integrate(t,e){Kl(t.deleteSet,e.id.client,e.id.clock,this.len),e.markDeleted()}delete(t){}gc(t){}write(t,e){t.writeLen(this.len-e)}getRef(){return 1}},LA=n=>new oh(n.readLen()),hy=(n,t)=>new ss({guid:n,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1}),Ba=class n{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;let e={};this.opts=e,t.gc||(e.gc=!1),t.autoLoad&&(e.autoLoad=!0),t.meta!==null&&(e.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new n(hy(this.doc.guid,this.opts))}splice(t){throw Sn()}mergeWith(t){return!1}integrate(t,e){this.doc._item=e,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,e){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}},PA=n=>new Ba(hy(n.readString(),n.readAny())),cs=class n{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new n(this.embed)}splice(t){throw Sn()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeJSON(this.embed)}getRef(){return 5}},UA=n=>new cs(n.readJSON()),Ce=class n{constructor(t,e){this.key=t,this.value=e}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new n(this.key,this.value)}splice(t){throw Sn()}mergeWith(t){return!1}integrate(t,e){let i=e.parent;i._searchMarker=null,i._hasFormatting=!0}delete(t){}gc(t){}write(t,e){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}},DA=n=>new Ce(n.readKey(),n.readJSON()),Lf=class n{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}},NA=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++){let r=n.readString();r==="undefined"?e.push(void 0):e.push(JSON.parse(r))}return new Lf(e)},OA=va("node_env")==="development",vo=class n{constructor(t){this.arr=t,OA&&qd(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new n(this.arr)}splice(t){let e=new n(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){let i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){let s=this.arr[r];t.writeAny(s)}}getRef(){return 8}},zA=n=>{let t=n.readLen(),e=[];for(let i=0;i<t;i++)e.push(n.readAny());return new vo(e)},Ni=class n{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new n(this.str)}splice(t){let e=new n(this.str.slice(t));this.str=this.str.slice(0,t);let i=this.str.charCodeAt(t-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,t-1)+"\uFFFD",e.str="\uFFFD"+e.str.slice(1)),e}mergeWith(t){return this.str+=t.str,!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeString(e===0?this.str:this.str.slice(e))}getRef(){return 4}},FA=n=>new Ni(n.readString()),BA=[_A,vA,wA,TA,EA,AA,CA],kA=0,VA=1,HA=2,GA=3,WA=4,XA=5,qA=6,Oi=class n{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new n(this.type._copy())}splice(t){throw Sn()}mergeWith(t){return!1}integrate(t,e){this.type._integrate(t.doc,e)}delete(t){let e=this.type._start;for(;e!==null;)e.deleted?e.id.clock<(t.beforeState.get(e.id.client)||0)&&t._mergeStructs.push(e):e.delete(t),e=e.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(t.beforeState.get(i.id.client)||0)&&t._mergeStructs.push(i):i.delete(t)}),t.changed.delete(this.type)}gc(t){let e=this.type._start;for(;e!==null;)e.gc(t,!0),e=e.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(t,!0),i=i.left}),this.type._map=new Map}write(t,e){this.type._write(t)}getRef(){return 7}},YA=n=>new Oi(BA[n.readTypeRef()](n));var ah=(n,t,e)=>{let{client:i,clock:r}=t.id,s=new Ne(Xt(i,r+e),t,Xt(i,r+e-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e));return t.deleted&&s.markDeleted(),t.keep&&(s.keep=!0),t.redone!==null&&(s.redone=Xt(t.redone.client,t.redone.clock+e)),t.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),t.length=e,s};var Ne=class n extends za{constructor(t,e,i,r,s,a,o,c){super(t,c.getLength()),this.origin=i,this.left=e,this.right=r,this.rightOrigin=s,this.parent=a,this.parentSub=o,this.redone=null,this.content=c,this.info=this.content.isCountable()?2:0}set marker(t){(this.info&8)>0!==t&&(this.info^=8)}get marker(){return(this.info&8)>0}get keep(){return(this.info&1)>0}set keep(t){this.keep!==t&&(this.info^=1)}get countable(){return(this.info&2)>0}get deleted(){return(this.info&4)>0}set deleted(t){this.deleted!==t&&(this.info^=4)}markDeleted(){this.info|=4}getMissing(t,e){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=De(e,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=De(e,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===xr&&this.id.client!==this.parent.client&&this.parent.clock>=De(e,this.parent.client))return this.parent.client;if(this.origin&&(this.left=I0(t,e,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=_r(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===fn||this.right&&this.right.constructor===fn)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===n&&(this.parent=this.left.parent,this.parentSub=this.left.parentSub),this.right&&this.right.constructor===n&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===xr){let i=pf(e,this.parent);i.constructor===fn?this.parent=null:this.parent=i.content.type}return null}integrate(t,e){if(e>0&&(this.id.clock+=e,this.left=I0(t,t.doc.store,Xt(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(e),this.length-=e),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;let s=new Set,a=new Set;for(;r!==null&&r!==this.right;){if(a.add(r),s.add(r),Yl(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(Yl(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&a.has(pf(t.doc.store,r.origin)))s.has(pf(t.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){let i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),X0(t.doc.store,this),this.content.integrate(t,this),P0(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new fn(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:Xt(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&Yl(t.origin,this.lastId)&&this.right===t&&Yl(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){let e=this.parent._searchMarker;return e&&e.forEach(i=>{i.p===t&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){let e=this.parent;this.countable&&this.parentSub===null&&(e._length-=this.length),this.markDeleted(),Kl(t.deleteSet,this.id.client,this.id.clock,this.length),P0(t,e,this.parentSub),this.content.delete(t)}}gc(t,e){if(!this.deleted)throw un();this.content.gc(t),e?rA(t,this,new fn(this.id,this.length)):this.content=new oh(this.length)}write(t,e){let i=e>0?Xt(this.id.client,this.id.clock+e-1):this.origin,r=this.rightOrigin,s=this.parentSub,a=this.content.getRef()&31|(i===null?0:128)|(r===null?0:64)|(s===null?0:32);if(t.writeInfo(a),i!==null&&t.writeLeftID(i),r!==null&&t.writeRightID(r),i===null&&r===null){let o=this.parent;if(o._item!==void 0){let c=o._item;if(c===null){let l=eA(o);t.writeParentInfo(!0),t.writeString(l)}else t.writeParentInfo(!1),t.writeLeftID(c.id)}else o.constructor===String?(t.writeParentInfo(!0),t.writeString(o)):o.constructor===xr?(t.writeParentInfo(!1),t.writeLeftID(o)):un();s!==null&&t.writeString(s)}this.content.write(t,e)}},uy=(n,t)=>$A[t&31](n),$A=[()=>{un()},LA,NA,IA,FA,UA,DA,YA,zA,PA,()=>{un()}],jA=10,pn=class extends za{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){un()}write(t,e){t.writeInfo(jA),qt(t.restEncoder,this.length-e)}getMissing(t,e){return null}},dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},fy="__ $YJS$ __";dy[fy]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");dy[fy]=!0;var JA="nodes",ZA="doc",ka="",my=n=>n.getMap(JA),gy=n=>n.getMap(ZA),KA=n=>n.map(t=>[t.x0,t.y0,t.z0,t.x1,t.y1,t.z1,t.c]),QA=n=>n.map(t=>({x0:t[0],y0:t[1],z0:t[2],x1:t[3],y1:t[4],z1:t[5],c:t[6]})),zi=(n,t,e)=>n.get(t)===e?!1:(n.set(t,e),!0),tC=(n,t)=>{let e=KA(t),i=n.get("b");return i&&JSON.stringify(i)===JSON.stringify(e)?!1:(n.set("b",e),!0)};function eC(n){let t=[],e=(i,r,s)=>{t.push({node:i,parent:r,ord:s}),i.type==="scene"&&i.children.forEach((a,o)=>e(a,i.id,o))};return e(n,ka,0),t}function Hf(n,t,e){let i=my(n),r=eC(t),s=new Set(r.map(o=>o.node.id)),a=!1;return te(n,()=>{let o=gy(n);o.get("root")!==t.id&&(o.set("root",t.id),a=!0);for(let c of[...i.keys()])s.has(c)||(i.delete(c),a=!0);for(let c of r){let l=i.get(c.node.id);l||(l=new as,i.set(c.node.id,l),a=!0);let h=c.node;a=zi(l,"t",h.type==="object"?"o":"s")||a,a=zi(l,"p",c.parent)||a,a=zi(l,"o",c.ord)||a,a=zi(l,"nm",h.name)||a,a=zi(l,"px",h.pos.x)||a,a=zi(l,"py",h.pos.y)||a,a=zi(l,"pz",h.pos.z)||a,a=zi(l,"r",h.rot)||a,a=zi(l,"vs",h.vis)||a,h.type==="object"&&(a=tC(l,h.boxes)||a)}},e),a}var nC=n=>((typeof n=="number"&&Number.isFinite(n)?Math.trunc(n):0)%4+4)%4,Vf=n=>typeof n=="number"&&Number.isFinite(n)?Math.round(n):0,iC=n=>typeof n=="number"&&Number.isFinite(n)?n:0,rC=["visible","deemphasized","hidden"],sC=n=>rC.includes(n)?n:"visible";function oC(n,t){let e=new Map(n);for(let i of e.keys()){let r=new Set([i]),s=i;for(;;){let a=e.get(s);if(a===void 0||a===ka||!e.has(a))break;if(r.has(a)){let o=[a];for(let l=e.get(a);l!==a;l=e.get(l))o.push(l);o.sort();let c=o[o.length-1];e.set(c,c===t?ka:t);break}r.add(a),s=a}}return e}var aC=(n,t)=>n[1]-t[1]||(n[0]<t[0]?-1:n[0]>t[0]?1:0);function So(n){let t=my(n),e=new Map;if(t.forEach((c,l)=>{let h=c.get("p");e.set(l,typeof h=="string"?h:ka)}),!e.size)return null;let i=gy(n).get("root")??"";if(t.has(i)||(i=[...e].find(([,c])=>c===ka)?.[0]??""),!i)return null;let r=oC(e,i),s=new Map;for(let[c,l]of r){if(c===i)continue;let h=iC(t.get(c)?.get("o")),u=s.get(l);u?u.push([c,h]):s.set(l,[[c,h]])}for(let c of s.values())c.sort(aC);let a=c=>{let l=t.get(c);if(!l)return null;let h={id:c,name:typeof l.get("nm")=="string"?l.get("nm"):"",pos:{x:Vf(l.get("px")),y:Vf(l.get("py")),z:Vf(l.get("pz"))},rot:nC(l.get("r")),vis:sC(l.get("vs"))};if(l.get("t")==="o"){let u=l.get("b");return{type:"object",...h,boxes:Array.isArray(u)?QA(u):[]}}return{type:"scene",...h,children:(s.get(c)??[]).map(([u])=>a(u)).filter(u=>u!==null)}},o=a(i);return o&&o.type==="scene"?o:null}var Va=()=>new ss;function xy(n){let t=Va();return Hf(t,n),t}var Gf=n=>H0(n);var cC="voxelier";var Ha="meta",Ga="data",wo=null;function lC(){return wo||(wo=new Promise((n,t)=>{let e=indexedDB.open(cC,1);e.onupgradeneeded=()=>{let i=e.result;i.objectStoreNames.contains(Ha)||i.createObjectStore(Ha),i.objectStoreNames.contains(Ga)||i.createObjectStore(Ga)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),wo.catch(()=>{wo=null}),wo)}function Eo(n,t,e){return lC().then(i=>new Promise((r,s)=>{let a=i.transaction(n,t),o=e(a.objectStore(n));o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error),a.onabort=()=>s(a.error)}))}var yy=(n,t)=>Eo(Ga,"readwrite",e=>e.put(t,n)).then(()=>{}),_y=n=>Eo(Ga,"readonly",t=>t.get(n)).then(t=>t instanceof Uint8Array?t:null),vy=n=>Eo(Ga,"readwrite",t=>t.delete(n)).then(()=>{}),by=n=>Eo(Ha,"readwrite",t=>t.put(n,n.id)).then(()=>{}),My=n=>Eo(Ha,"readwrite",t=>t.delete(n)).then(()=>{}),Wf=()=>Eo(Ha,"readonly",n=>n.getAll()).then(n=>n.filter(t=>t&&typeof t.id=="string")).then(n=>n.sort((t,e)=>(e.updated??0)-(t.updated??0)));var dh=Symbol("remote"),hC=Symbol("local"),oi=Va(),uh=null,Wa=null,qf=null,Sy=()=>oi,wy=()=>uh,Ey=n=>{qf=n},Yf=n=>`doc:${n}`,uC=n=>`voxelier:doc:${n}`,To="";function fh(){if(uh===null)return;let n=uh;yy(Yf(n),Gf(oi)).catch(()=>{}),by({id:n,name:To,updated:Date.now()}).catch(()=>{})}function $f(n){oi.off("update",Xf),oi=n,oi.on("update",Xf)}function Xf(n,t){t!==dh&&Ty({k:"u",b:n})}oi.on("update",Xf);function Ty(n){try{Wa?.postMessage(n)}catch{}}async function jf(n){Wa?.close(),Wa=null,uh=n,typeof BroadcastChannel<"u"&&(Wa=new BroadcastChannel(uC(n)),Wa.onmessage=e=>{let i=e.data;!i||i.k!=="u"&&i.k!=="r"||!(i.b instanceof Uint8Array)||(i.k==="r"?fC(i.b):dC(i.b))});let t=null;try{t=await _y(Yf(n))}catch{return null}if(!t)return null;try{let e=Va();ch(e,t,dh);let i=So(e);return i?($f(e),To=i.name,i):null}catch{return null}}async function Ay(n){await Promise.all([vy(Yf(n)).catch(()=>{}),My(n).catch(()=>{})])}function dC(n){try{ch(oi,n,dh);let t=So(oi);return t&&(To=t.name,qf?.(t),fh()),t}catch{return null}}function fC(n){try{let t=Va();ch(t,n,dh);let e=So(t);return e?($f(t),To=e.name,qf?.(e),fh(),e):null}catch{return null}}function Jf(n){return To=n.name,Hf(oi,n,hC)?(fh(),!0):!1}function Zf(n){$f(xy(n)),To=n.name,fh(),Ty({k:"r",b:Gf(oi)})}var pC="voxelier-v11",Cy="voxelier-ui-v1";function qa(n){let t={id:n.id,nm:n.name,p:n.pos,r:n.rot,vs:n.vis};return n.type==="object"?{t:"o",...t,b:n.boxes.map(e=>[e.x0,e.y0,e.z0,e.x1,e.y1,e.z1,e.c])}:{t:"s",...t,c:n.children.map(qa)}}var mC={transparent:"deemphasized",invisible:"hidden"};function xl(n){let t={id:n.id,name:n.nm||"",pos:n.p,rot:n.r,vis:mC[n.vs]||n.vs||"visible"};return n.t==="o"?{type:"object",...t,boxes:n.b.map(e=>({x0:e[0],y0:e[1],z0:e[2],x1:e[3],y1:e[4],z1:e[5],c:e[6]}))}:{type:"scene",...t,children:n.c.map(xl)}}var Xa;function gC(){try{localStorage.setItem(Cy,JSON.stringify([...y.collapsed]))}catch{}}function Rn(){clearTimeout(Xa),Xa=void 0,Ex(JSON.stringify(qa(y.root))),Jf(y.root),gC()}function Kf(){Xa===void 0&&(Tx(JSON.stringify(qa(y.root))),Jf(y.root))}function ue(){clearTimeout(Xa),Xa=setTimeout(Rn,250)}function Qf(n){return!n||!n.root?null:(sl(n.uid||1),xl(n.root))}function ph(n){y.root=n}var Ry=()=>{try{let n=JSON.parse(localStorage.getItem(Cy));return Array.isArray(n)?n:[]}catch{return[]}};function Iy(){try{return Qf(JSON.parse(localStorage.getItem(pC)))}catch{return null}}var xC=2;function Ya(n){let t=qe();return sn(n,t),{mn:t.min,mx:t.max}}var mh=n=>{let{mn:t,mx:e}=Ya(n);return{x0:t.x,y0:t.y,z0:t.z,x1:e.x,y1:e.y,z1:e.z}};function Py(n){if(!n.length)return[];let{mn:t}=Ya(n);return n.map(e=>Qo(e,-t.x,-t.y,-t.z))}function Uy(n){let t=ld(y.editObject.boxes,n);y.sel3d={region:t.length?mh(t):{...n},boxes:t,lifted:!1},dr()}function tp(){let n=y.sel3d;!n||n.lifted||(Rn(),n.lifted=!0,oa(n.region))}function ep(){_C();let n=y.sel3d;!n||!n.lifted||(n.lifted=!1,fl(n.boxes),n.boxes=ld(y.editObject.boxes,n.region),ue())}function Fi(){let n=y.sel3d;n&&(y.sel3d=null,n.lifted?(fl(n.boxes),ue()):dr())}function np(){let n=y.sel3d;if(!n)return;let t=n.region,e=n.lifted;y.sel3d=null,e?dr():oa(t),ue()}function ip(){y.sel3d&&y.sel3d.boxes.length&&Sx(Py(y.sel3d.boxes))}function Dy(){ip(),np()}function Ny(n){if(!n.length)return;Fi();let t=Py(n),e=0,i=0,r=0,s=y.editObject.boxes;if(s.length){let{mn:o,mx:c}=Ya(s);e=c.x+xC,i=o.y,r=o.z}let a=t.map(o=>Qo(o,e,i,r));y.sel3d={region:mh(a),boxes:a,lifted:!1},fl(a),ue()}function Oy(n,t,e){let i=y.sel3d;if(!i||!n&&!t&&!e)return;let r=i.region;r.x0+=n,r.x1+=n,r.y0+=t,r.y1+=t,r.z0+=e,r.z1+=e,i.boxes=i.boxes.map(s=>Qo(s,n,t,e)),dr()}function Ly(n,t,e){let{x:i,y:r,z:s}=n;for(let a=(e%4+4)%4;a>0;a--)if(t===0){let o=-s,c=r;r=o,s=c}else if(t===1){let o=-s,c=i;i=o,s=c}else{let o=-r,c=i;i=o,r=c}return{x:i,y:r,z:s}}function yC(n,t,e){let i=Ly({x:n.x0,y:n.y0,z:n.z0},t,e),r=Ly({x:n.x1-1,y:n.y1-1,z:n.z1-1},t,e);return{x0:Math.min(i.x,r.x),y0:Math.min(i.y,r.y),z0:Math.min(i.z,r.z),x1:Math.max(i.x,r.x)+1,y1:Math.max(i.y,r.y)+1,z1:Math.max(i.z,r.z)+1,c:n.c}}function zy(){let n=Wt.matrixWorld.elements,t=ee({x:n[0],y:0,z:n[2]},-y.editXform.rot);return Math.abs(t.x)>=Math.abs(t.z)?0:2}var gh=null;function rp(){let n=y.sel3d;if(!n)return;let t=Ya(n.boxes);gh={boxes:n.boxes.map(e=>({...e})),cx:(t.mn.x+t.mx.x)/2,cy:(t.mn.y+t.mx.y)/2,cz:(t.mn.z+t.mx.z)/2}}function _C(){gh=null}function Fy(n,t){let e=y.sel3d,i=gh;if(!e||!i||!i.boxes.length)return;let r=(n%4+4)%4,s;if(!r)s=i.boxes.map(a=>({...a}));else{let a=t?zy():1;s=i.boxes.map(u=>yC(u,a,r));let o=Ya(s),c=er(i.cx-(o.mn.x+o.mx.x)/2),l=er(i.cy-(o.mn.y+o.mx.y)/2),h=er(i.cz-(o.mn.z+o.mx.z)/2);s=s.map(u=>Qo(u,c,l,h))}e.boxes=s,e.region=mh(s),dr()}function By(n,t){let e=y.sel3d,i=gh;if(!e||!i||!i.boxes.length)return;let r=t?zy():1,[s,a]=r===0?[i.cy,i.cz]:r===1?[i.cx,i.cz]:[i.cx,i.cy];e.boxes=_x(i.boxes,n,r,s,a,(o,c,l)=>({x:o,y:c,z:l})),e.region=mh(e.boxes),dr()}function vC(){let n=y.sel3d;if(!n)return null;let t=n.region,e=new bi;for(let i of[t.x0,t.x1])for(let r of[t.y0,t.y1])for(let s of[t.z0,t.z1])e.expandByPoint(Ri(i,r,s));return e}function sp(){let n=vC();return n?(ln.setFromCamera($n,Wt),ln.ray.intersectsBox(n)):!1}function bC(n){if(!n.length)return[];let t=[[],[],[]];for(let _ of n)t[0].push(_.x0,_.x1),t[1].push(_.y0,_.y1),t[2].push(_.z0,_.z1);let e=t.map(_=>[...new Set(_)].sort((T,R)=>T-R)),i=e.map(_=>_.length-1),[r,s,a]=i;if(r*s*a>8e6)return n;let o=e.map(_=>new Map(_.map((T,R)=>[T,R]))),c=(_,T,R)=>(_*s+T)*a+R,l=new Int32Array(r*s*a);for(let _ of n){let T=o[0].get(_.x1),R=o[1].get(_.y1),I=o[2].get(_.z1);for(let C=o[0].get(_.x0);C<T;C++)for(let V=o[1].get(_.y0);V<R;V++)for(let M=o[2].get(_.z0);M<I;M++)l[c(C,V,M)]=_.c+1}let h=[],u=[],d=[],f=[];for(let _=0;_<r;_++)for(let T=0;T<s;T++)for(let R=0;R<a;R++)l[c(_,T,R)]&&(h.push(c(_,T,R)),u.push(_),d.push(T),f.push(R));let g=[u,d,f],x=new Uint8Array(r*s*a),m=_=>{x.fill(0);let T=Array.from({length:h.length},(V,M)=>M).sort((V,M)=>g[_[2]][V]-g[_[2]][M]||g[_[1]][V]-g[_[1]][M]||g[_[0]][V]-g[_[0]][M]),R=[0,0,0],I=(V,M,E,D)=>{if(M[E]>=i[E])return!1;let X=(E+1)%3,$=(E+2)%3;R[E]=M[E];for(let A=V[X];A<M[X];A++){R[X]=A;for(let O=V[$];O<M[$];O++){R[$]=O;let G=c(R[0],R[1],R[2]);if(x[G]||l[G]!==D)return!1}}return!0},C=[];for(let V of T){let M=h[V];if(x[M])continue;let E=l[M],D=[u[V],d[V],f[V]],X=[u[V]+1,d[V]+1,f[V]+1];for(let $ of _)for(;I(D,X,$,E);)X[$]++;for(let $=D[0];$<X[0];$++)for(let A=D[1];A<X[1];A++)for(let O=D[2];O<X[2];O++)x[c($,A,O)]=1;C.push({x0:e[0][D[0]],y0:e[1][D[1]],z0:e[2][D[2]],x1:e[0][X[0]],y1:e[1][X[1]],z1:e[2][X[2]],c:E-1})}return C},p=h.length>65536?[[0,2,1],[2,0,1]]:[[0,2,1],[2,0,1],[1,0,2],[0,1,2],[2,1,0],[1,2,0]],v=null;for(let _ of p){let T=m(_);(!v||T.length<v.length)&&(v=T)}return v}var MC=24,ky=n=>n.reduce((t,e)=>t+(e.x1-e.x0)*(e.y1-e.y0)*(e.z1-e.z0),0),op=new WeakSet;function ap(n){if(n.boxes.length<MC||op.has(n.boxes))return!1;let t=bC(n.boxes);return t.length<n.boxes.length&&ky(t)===ky(n.boxes)?(n.boxes=t,op.add(t),!0):(op.add(n.boxes),!1)}var cp=(n,t,e)=>{let i=new Set(y.selection);Fi(),e&&ap(e)&&Kf(),y.selection=new Set([n]),y.editObject=null,or(),y.context!==t||e?ye():fr(i),$t()};function SC(){if(y.path.length<=1)return;let n=y.context,t=y.editObject;cp(y.path.pop().id,n,t)}function wC(){cp(y.editObject.id,y.context,y.editObject)}function Vy(){y.editObject?wC():SC()}function ai(n){let t=Zn(n);if(!t)return;let e=y.context,i=y.editObject;y.path=t.slice(0,-1),cp(n.id,e,i)}function ls(n,t){let e=Zn(n);if(!e)return;let i=y.editObject;Fi(),i&&i!==n&&ap(i)&&Kf(),n.type==="scene"?(y.path=e,y.editObject=null):(y.path=e.slice(0,-1),y.editObject=n),y.selection.clear(),y.tool="view",or(),ye(),$t(),t&&Qn()}var ci=null,Fe=null,$a=null,Ao=null,Ln=null,EC={visible:"\u25C9",deemphasized:"\u25D0",hidden:"\u29B0"},lp=(n,t)=>{let e=Math.min(255,(n>>16&255)*t)|0,i=Math.min(255,(n>>8&255)*t)|0,r=Math.min(255,(n&255)*t)|0;return`rgb(${e},${i},${r})`},xh=new Map;function Hy(n){return n.type==="object"?"o"+n.boxes.map(t=>`${t.x0},${t.y0},${t.z0},${t.x1},${t.y1},${t.z1},${t.c}`).join(";"):"s"+n.children.map(t=>`${t.id}@${t.pos.x},${t.pos.y},${t.pos.z}/${t.rot};${Hy(t)}`).join()}function TC(n){let t=xh.get(n.id);if(n===y.editObject&&t)return t.cv;let e=Hy(n);if(t&&t.sig===e)return t.cv;let i=document.createElement("canvas");i.width=i.height=52,i.style.width=i.style.height="26px";let r=i.getContext("2d");r.fillStyle="#0f1115",r.fillRect(0,0,52,52);let s=ia(n,{x:0,y:0,z:0},0,[]);if(s.length){let a=qe();sn(s,a);let{x:o,y:c,z:l}=a.min,{x:h,y:u,z:d}=a.max,f=40/Math.max(h-o,u-c,d-l,1),g=26-((o+h)/2-(l+d)/2)*f*.5,x=28+(c+u)/2*f*.6-((o+h)/2+(l+d)/2)*f*.28,m=(v,_,T)=>[g+(v-T)*f*.5,x-_*f*.6+(v+T)*f*.28],p=(v,_)=>{r.fillStyle=v,r.beginPath(),r.moveTo(_[0][0],_[0][1]);for(let T=1;T<_.length;T++)r.lineTo(_[T][0],_[T][1]);r.closePath(),r.fill()};s.sort((v,_)=>v.x0+v.x1+v.y0+v.y1+v.z0+v.z1-(_.x0+_.x1+_.y0+_.y1+_.z0+_.z1));for(let v of s)p(lp(v.c,.78),[m(v.x1,v.y0,v.z0),m(v.x1,v.y1,v.z0),m(v.x1,v.y1,v.z1),m(v.x1,v.y0,v.z1)]),p(lp(v.c,.6),[m(v.x0,v.y0,v.z1),m(v.x1,v.y0,v.z1),m(v.x1,v.y1,v.z1),m(v.x0,v.y1,v.z1)]),p(lp(v.c,1),[m(v.x0,v.y1,v.z0),m(v.x1,v.y1,v.z0),m(v.x1,v.y1,v.z1),m(v.x0,v.y1,v.z1)])}return xh.set(n.id,{sig:e,cv:i}),i}var hs=null;function hp(n){hs=n}function AC(n){if(n===y.root||Cn(n)!==y.context||y.editObject)ai(n);else{let t=new Set(y.selection);y.selection.has(n.id)?y.selection.delete(n.id):y.selection.add(n.id),fr(t),$t()}hs=n.id}function CC(n){let t=y.context.children,e=hs?t.findIndex(o=>o.id===hs):-1,i=t.findIndex(o=>o.id===n.id);if(n===y.root||y.editObject||e<0||i<0){ai(n),hs=n.id;return}let r=new Set(y.selection),s=Math.min(e,i),a=Math.max(e,i);y.selection=new Set(t.slice(s,a+1).map(o=>o.id)),fr(r),$t()}function RC(n,t){if(t.shiftKey||t.ctrlKey||t.metaKey){Ln&&(clearTimeout(Ln.timer),Ln=null),t.shiftKey?CC(n):AC(n);return}if(Ln&&Ln.node===n){clearTimeout(Ln.timer),Ln=null,ls(n,!0);return}Ln&&clearTimeout(Ln.timer),n===y.root?ls(n):ai(n),hs=n===y.root?null:n.id,Ln={node:n,timer:setTimeout(()=>Ln=null,300)}}function Io(n){yh();let e=document.querySelector(`#tree .trow[data-id="${n.id}"]`)?.querySelector(".nm");if(!e)return;let i=oe("input",{className:"nminput",value:n.name});i.placeholder=n===y.root?"Project":n.type==="scene"?"group":"object";let r=!1,s=a=>{r||(r=!0,a&&(n.name=i.value.trim(),ue()),$t())};i.addEventListener("keydown",a=>{a.stopPropagation(),a.key==="Enter"?s(!0):a.key==="Escape"&&s(!1)}),i.addEventListener("blur",()=>s(!0)),e.replaceWith(i),i.focus(),i.select()}function IC(n){let t=TC(n);if(t.className="thumb",t.onclick=null,t.title="",n!==y.root&&n.type==="scene"&&n.children.length){let e=y.collapsed.has(n.id);t.classList.add("group"),e&&t.classList.add("collapsed"),t.title=e?"Expand group":"Collapse group",t.onclick=i=>{i.stopPropagation(),e?y.collapsed.delete(n.id):y.collapsed.add(n.id),up()}}return t}function LC(n,t){n.draggable=t!==y.root,t!==y.root&&n.addEventListener("dragstart",e=>{if(e.stopPropagation(),ci=t.id,e.dataTransfer){e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain",t.id)}catch{}}}),n.addEventListener("dragend",Co),n.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation(),PC(e,t,n)}),n.addEventListener("drop",e=>{e.preventDefault(),e.stopPropagation(),qy()})}function up(){let n=document.getElementById("tree");n.innerHTML="";let t=(i,r)=>{let s=i===y.root,a=!s&&y.context.children.includes(i)&&y.selection.has(i.id),o=i.vis,c=oe("div",{className:"trow"+(s?" root":"")+(a?" sel":"")+(i===y.context&&!y.editObject?" ctx":"")+(i===y.editObject?" edit":"")+(!s&&o!=="visible"?" dim":"")});c.style.paddingLeft=4+r*13+"px",c.dataset.id=i.id;let l=IC(i),h=oe("span",{className:"nm"});if(s?h.textContent=i.name||"Project":i.name?h.textContent=i.name:h.innerHTML='<span class="ph">'+(i.type==="scene"?"group":"object")+"</span>",h.onclick=u=>{!Ln&&!y.editObject&&!s&&y.selection.size===1&&y.selection.has(i.id)&&(u.stopPropagation(),Io(i))},c.append(l,h),s||c.append(oe("button",{className:"tb"+(o==="visible"?" on":""),textContent:EC[o],title:"visible \u2192 deemphasized \u2192 hidden",onclick:u=>{u.stopPropagation(),Yy(i)}})),c.onclick=u=>RC(i,u),c.oncontextmenu=u=>{u.preventDefault(),u.stopPropagation();let d=!s&&!y.editObject&&Cn(i)===y.context&&y.selection.has(i.id);!s&&!d&&ai(i),Wy(i,u.clientX,u.clientY)},LC(c,i),n.appendChild(c),i.type==="scene"&&(s||!y.collapsed.has(i.id)))for(let u of i.children)t(u,r+1)};t(y.root,0);let e=new Set;(function i(r){e.add(r.id),r.type==="scene"&&r.children.forEach(i)})(y.root);for(let i of xh.keys())e.has(i)||xh.delete(i)}function yh(){Ao&&(Ao.remove(),Ao=null,window.removeEventListener("pointerdown",Gy,!0))}function Gy(n){Ao&&!Ao.contains(n.target)&&yh()}function Wy(n,t,e){yh();let i=oe("div",{className:"ctxmenu"}),r=(c,l,h)=>i.appendChild(oe("div",{className:"ctxitem"+(h?" "+h:""),textContent:c,onclick:()=>{yh(),l()}})),s=()=>i.appendChild(oe("div",{className:"ctxdiv"})),a=n!==y.root&&Cn(n)===y.context&&y.selection.size>1&&y.selection.has(n.id);a||(r("Rename",()=>Io(n)),r("Locate",()=>xx(n)),s()),n!==y.root&&(r("Copy",()=>Ja()),r("Duplicate",()=>a?_h():Zy(n)),r("Delete objects",()=>a?ja():Ky(n),"danger"),s()),a?r("Group",()=>Jy(n)):n.type==="scene"?(n!==y.root&&r("Ungroup",()=>Qy(n)),Qs()&&r("Paste",()=>vh(n)),r("New object",()=>t_(n)),r("New group",()=>e_(n))):r("New group",()=>jy(n)),document.body.appendChild(i),Ao=i;let o=i.getBoundingClientRect();i.style.left=Math.min(t,innerWidth-o.width-4)+"px",i.style.top=Math.min(e,innerHeight-o.height-4)+"px",setTimeout(()=>window.addEventListener("pointerdown",Gy,!0),0)}function Co(){$a&&$a.classList.remove("drop-into","drop-before","drop-after"),$a=null,Fe=null}function Xy(){let n=ci&&Hr(ci);return!n||y.editObject||Cn(n)!==y.context||!y.selection.has(n.id)||y.selection.size<=1?null:y.context.children.filter(t=>y.selection.has(t.id))}function PC(n,t,e){let i=ci&&Hr(ci);if(!i||i===t){Co();return}let r=Xy();if(r?r.some(u=>u===t||Gr(u,t)):Gr(i,t)){Co();return}if(Co(),$a=e,t===y.root){Fe={parent:y.root,index:y.root.children.length},e.classList.add("drop-into");return}let a=e.getBoundingClientRect(),o=n.clientY-a.top,c=a.height,l=Cn(t),h=l?l.children.indexOf(t):0;o>c*.28&&o<c*.72&&(t.type==="scene"||!r)?(t.type==="scene"?Fe={parent:t,index:t.children.length}:Fe={wrap:t},e.classList.add("drop-into")):o<c*.5?(Fe={parent:l,index:h},e.classList.add("drop-before")):(Fe={parent:l,index:h+1},e.classList.add("drop-after"))}function qy(){let n=ci&&Hr(ci);if(n&&Fe){let t=Fe.parent?Xy():null;if(t){let e=Fe.parent,i=Fe.index,r=!1;for(let s of t)Ro(s,e,i)&&(i=e.children.indexOf(s)+1,r=!0);if(r){y.collapsed.delete(e.id);let s=Zn(e);s&&(y.path=s),y.editObject=null,y.selection=new Set(t.map(a=>a.id)),ye(),$t(),ue()}}else Fe.wrap?$y(Fe.wrap,n):Fe.parent&&Ro(n,Fe.parent,Fe.index)&&(y.collapsed.delete(Fe.parent.id),ai(n),ue())}Co(),ci=null}{let n=document.getElementById("tree");n.addEventListener("dragover",t=>{if(t.target===n&&ci){t.preventDefault(),Co(),Fe={parent:y.root,index:y.root.children.length};let e=[...n.querySelectorAll(".trow")].filter(r=>r.dataset.id!==ci),i=e[e.length-1];i&&(i.classList.add("drop-after"),$a=i)}}),n.addEventListener("drop",t=>{t.target===n&&(t.preventDefault(),qy())})}document.getElementById("side").addEventListener("click",n=>{if(n.target.closest(".trow, button, input")||!y.selection.size)return;let t=new Set(y.selection);y.selection.clear(),hs=null,fr(t),$t()});document.getElementById("side").addEventListener("contextmenu",n=>{n.target.closest(".trow, button, input")||(n.preventDefault(),Wy(y.root,n.clientX,n.clientY))});var li=()=>{ye(),$t(),ue()};function Yy(n){n.vis=Xg[n.vis],li()}var dp=()=>[...y.selection].map(n=>Ci(n)).filter(n=>!!n),n_=(n,t)=>{let e=na();e.pos={x:Math.round(jt.target.x),y:0,z:Math.round(jt.target.z)},n.children.push(e),y.collapsed.delete(n.id),ls(e,t),ue(),Io(e)};function i_(){n_(y.context,!0)}function ja(){y.selection.size&&(y.context.children=y.context.children.filter(n=>!y.selection.has(n.id)),y.selection.clear(),li())}function _h(){let n=dp().map(ir);n.length&&(y.context.children.push(...n),y.selection=new Set(n.map(t=>t.id)),li())}function Ja(){let n=dp().map(ir);n.length&&Mx(n)}function r_(){Ja(),ja()}function vh(n=y.context){if(Qs()==="vox"){UC(n);return}let t=pl().map(ir);t.length&&(n.children.push(...t),s_(n),y.selection=new Set(t.map(e=>e.id)),li())}function UC(n){let t=ml();if(!t.length)return;let e=na();e.boxes=t.map(s=>({...s}));let i=$s(n),r=ee({x:jt.target.x-i.off.x,y:0,z:jt.target.z-i.off.z},-i.rot);e.pos={x:Math.round(r.x),y:0,z:Math.round(r.z)},n.children.push(e),s_(n),y.selection=new Set([e.id]),li()}function s_(n){y.collapsed.delete(n.id),n!==y.context&&(y.path=Zn(n)??y.path,y.editObject=null)}function Ro(n,t,e){if(n===t||Gr(n,t))return!1;let i=Cn(n);if(!i)return!1;let r=Ti($s(i),{off:{...n.pos},rot:n.rot}),s=Ti(sd($s(t)),r),a=i.children.indexOf(n);return i.children.splice(a,1),i===t&&a<e&&e--,n.pos={x:Math.round(s.off.x),y:Math.round(s.off.y),z:Math.round(s.off.z)},n.rot=s.rot&3,t.children.splice(Math.max(0,Math.min(e,t.children.length)),0,n),!0}function o_(n){let t=Cn(n);if(!t)return null;let e=t.children.indexOf(n),i=Vr("Group");return i.pos={...n.pos},i.rot=n.rot,t.children.splice(e,1,i),n.pos={x:0,y:0,z:0},n.rot=0,i.children=[n],i}function $y(n,t){if(t===n||Gr(t,n))return!1;let e=o_(n);return e?(Ro(t,e,e.children.length),y.collapsed.delete(e.id),y.selection=new Set([e.id]),li(),!0):!1}function jy(n){let t=o_(n);t&&(y.collapsed.delete(t.id),ai(t),ue(),Io(t))}function Jy(n){let t=dp();if(t.length<2)return;let e=Vr("Group");e.pos={...n.pos},e.rot=n.rot;let i=y.context.children.indexOf(n);y.context.children.splice(Math.max(0,i),0,e);for(let r of t)Ro(r,e,e.children.length);y.collapsed.delete(e.id),y.selection=new Set([e.id]),li()}function Zy(n){let t=Cn(n);if(!t)return;let e=ir(n);t.children.splice(t.children.indexOf(n)+1,0,e),ai(e),ue()}function Ky(n){let t=Cn(n);t&&(t.children=t.children.filter(e=>e!==n),y.selection.delete(n.id),y.editObject===n&&(y.editObject=null),li())}function Qy(n){let t=Cn(n);if(!t)return;let e=[...n.children],i=t.children.indexOf(n);for(let r of e)Ro(r,t,i),i=t.children.indexOf(r)+1;t.children=t.children.filter(r=>r!==n),y.selection=new Set(e.map(r=>r.id)),li()}function t_(n){n_(n,!1)}function e_(n){let t=Vr("Group");n.children.push(t),y.collapsed.delete(n.id),ai(t),ue(),Io(t)}function fp(n){let t=[...y.selection];if(!t.length)return;let e=n<0?3:1,i=Ys(),r=sd(i),s=a=>sr(a,jn(i.off,ee(a.pos,i.rot)),i.rot+a.rot&3,qe());for(let a=0;a<Math.abs(n);a++){let o=qe();for(let d of t){let f=s(Ci(d));f.min.x<o.min.x&&(o.min.x=f.min.x),f.min.z<o.min.z&&(o.min.z=f.min.z),f.max.x>o.max.x&&(o.max.x=f.max.x),f.max.z>o.max.z&&(o.max.z=f.max.z)}let c=(o.min.x+o.max.x)/2,l=(o.min.z+o.max.z)/2,h=ee({x:c,y:0,z:l},e),u={rot:e,off:{x:c-h.x,y:0,z:l-h.z}};for(let d of t){let f=Ci(d);if(!f)continue;let g=Ti(i,{off:f.pos,rot:f.rot}),x=Ti(r,Ti(u,g));f.pos={x:er(x.off.x),y:er(x.off.y),z:er(x.off.z)},f.rot=x.rot&3}}ye()}function a_(){y.selection.size&&(fp(1),$t(),ue())}function pp(n){for(let t of y.selection){let e=Ci(t);e&&(e.pos.y+=n)}y.selection.size&&li()}var Zt=n=>Math.floor(n/10),fe=al,Lo=(n,t)=>{let e=na();return e.name=n,e.boxes=t,e},mp=(n,t,e,i,r,s)=>({x0:n,y0:t,z0:e,x1:i,y1:r,z1:s});function gp(){let n=Zt(4465),t=Zt(2985),e=Zt(2700),i=Zt(150),r=Lo("Floor",[he(0,0,0,n,1,t,fe[9])]),s=Zt(800),a=Zt(2100),o=n-Zt(515)-s,c=n-Zt(900)-s,l=[he(0,1,0,n,e+1,i,fe[5]),he(0,1,t-i,n,e+1,t,fe[5]),he(0,1,i,i,e+1,t-i,fe[5]),he(n-i,1,i,n,e+1,t-i,fe[5])];l=kr(l,mp(o,1,0,o+s,a+1,i)),l=kr(l,mp(c,1,t-i,c+s,a+1,t)),l=kr(l,mp(0,Zt(900),Zt(600),i,Zt(2100),t-Zt(600)));let h=Lo("Walls",l);h.vis="deemphasized";let u=Zt(1500),d=Zt(2e3),f=Lo("Bed",[he(0,0,0,8,14,8,fe[7]),he(u-8,0,0,u,14,8,fe[7]),he(0,0,d-8,8,14,d,fe[7]),he(u-8,0,d-8,u,14,d,fe[7]),he(0,14,0,u,20,d,fe[6]),he(2,20,0,u-2,24,d-Zt(400),fe[10])]);f.pos={x:i+3,y:1,z:t-i-d};let g=Zt(1400),x=Zt(700),m=Zt(740),p=Lo("Desk",[he(0,m-4,0,g,m,x,fe[8]),he(0,0,0,6,m-4,6,fe[7]),he(g-6,0,0,g,m-4,6,fe[7]),he(0,0,x-6,6,m-4,x,fe[7]),he(g-6,0,x-6,g,m-4,x,fe[7])]),v=Zt(600),_=v-30>>1,T=v>>1,R=Lo("Computer",[he(_,0,0,_+30,2,18,fe[11]),he(T-2,2,7,T+2,Zt(160),11,fe[11]),he(0,Zt(160),6,v,Zt(520),9,fe[13])]);R.pos={x:Zt(400),y:m,z:Zt(420)};let I=Vr();I.name="Desk + Computer",I.pos={x:n-i,y:1,z:Zt(900)},I.rot=1,I.children=[p,R];let C=D=>Lo(D,[he(-10,0,-10,11,30,11,fe[4]),he(-2,30,-2,3,54,3,fe[14]),he(-16,54,-16,17,78,17,fe[14]),he(-12,78,-12,13,92,13,fe[14])]),V=C("Plant"),M=C("Plant");V.pos={x:n-i-Zt(300),y:1,z:i+Zt(300)},M.pos={x:i+Zt(300),y:1,z:i+Zt(300)};let E=Vr();return E.children=[r,h,f,I,V,M],E}var xp="voxelier-last",c_="doc",yp=Wf,DC=()=>{let n=new Uint8Array(8);return crypto.getRandomValues(n),[...n].map(t=>t.toString(36).padStart(2,"0")).join("")},l_=()=>new URLSearchParams(location.hash.replace(/^#/,""));function NC(){let n=l_().get(c_);return n&&/^[0-9a-z]{4,32}$/.test(n)?n:null}function _p(n){let t=l_();t.set(c_,n),history.replaceState(null,"",`#${t.toString()}`)}var vp=n=>{try{localStorage.setItem(xp,n)}catch{}},h_=()=>{try{return localStorage.getItem(xp)}catch{return null}};async function Po(n){let t=await jf(n);return t?(vp(n),_p(n),t):null}async function OC(n){let t=await Po(n);if(t)return t;let e=gp();return Zf(e),vp(n),_p(n),e}async function us(n){let t=DC();await jf(t);let e=n??gp();return Zf(e),vp(t),_p(t),e}async function u_(n){if(await Ay(n),h_()===n)try{localStorage.removeItem(xp)}catch{}}var d_=()=>wy();async function f_(n){let t=NC();if(t)return await OC(t);let e=h_();if(e){let i=await Po(e);if(i)return i}try{let[i]=await Wf();if(i){let r=await Po(i.id);if(r)return r}}catch{}return await us(n()??void 0)}function p_(){let n=JSON.stringify({uid:rl(),root:qa(y.root),collapsed:[...y.collapsed]}),t=URL.createObjectURL(new Blob([n],{type:"application/json"})),e=y.root.name||"Project",i=o=>String(o).padStart(2,"0"),r=new Date,s=`${r.getFullYear()}-${i(r.getMonth()+1)}-${i(r.getDate())} ${i(r.getHours())}h${i(r.getMinutes())}m${i(r.getSeconds())}s`,a=document.createElement("a");a.href=t,a.download=`${e} -- ${s}.voxelier.json`,a.click(),URL.revokeObjectURL(t)}function m_(){let n=document.createElement("input");n.type="file",n.accept="application/json,.json",n.onchange=()=>{let t=n.files&&n.files[0];if(!t)return;let e=new FileReader;e.onload=async()=>{try{let i=Qf(JSON.parse(e.result));if(!i)throw new Error("not a Voxelier scene file");y.root=await us(i),y.collapsed=new Set,y.path=[y.root],y.editObject=null,y.sel3d=null,y.selection.clear(),y.tool==="measure"&&(y.tool="view"),or(),ye(),$t(),Qn(),Rn()}catch(i){alert("Import failed: "+i.message)}},e.readAsText(t)},n.click()}var wh={view:"\u{1F441}",add:"\uFF0B",erase:"\uFF0D",paint:"\u{1FAA3}",eyedropper:"\u{1F4A7}",select:"\u2B1A",measure:"\u{1F4CF}"},zC=[{id:"view",label:"View"},{id:"add",label:"Add"},{id:"erase",label:"Erase"},{id:"paint",label:"Fill"},{id:"select",label:"Select"}],g_=(n,t,e,i)=>oe("button",{className:"tool"+(e?" active":""),innerHTML:`<span class="ic">${n}</span>${t}`,onclick:i});function x_(n){y.tool!==n&&(Fi(),y.tool=n,y.eyedropReturn=null,vn.visible=!1,or(),$t())}function $t(){let n=document.getElementById("tools");n.innerHTML="",!y.editObject&&y.tool!=="measure"&&(y.tool="view");let t=oe("div",{className:"toolgroup"}),e=y.editObject?zC:[{id:"view",label:"View"}];for(let i of e)t.appendChild(g_(wh[i.id],i.label,y.tool===i.id,()=>x_(i.id)));if(t.appendChild(g_(wh.measure,"Measure",y.tool==="measure",()=>x_("measure"))),y.editObject&&t.appendChild(qC()),n.append(t),Mh(),y.tool==="view"){let i=document.getElementById("toolcursor");i&&(i.style.display="none")}up()}document.getElementById("btn-save").onclick=p_;document.getElementById("btn-load").onclick=m_;var FC=document.getElementById("btn-docs"),Ka=document.getElementById("docslist"),BC=document.getElementById("docname");function bp(n){ph(n),y.collapsed=new Set,y.path=[n],y.editObject=null,y.sel3d=null,y.selection.clear(),y.tool==="measure"&&(y.tool="view"),or(),ye(),$t(),Qn(),Rn()}function Mh(){BC.textContent=y.root&&y.root.name||"Project"}async function Sh(){let n=d_(),t=[];try{t=await yp()}catch{}Ka.innerHTML="";for(let e of t){let i=oe("div",{className:"docrow"+(e.id===n?" here":"")});i.append(oe("button",{className:"docopen",textContent:e.name||"Project",title:new Date(e.updated).toLocaleString(),onclick:async()=>{if(e.id===n)return;let r=await Po(e.id);r&&bp(r),await Sh(),Mh()}})),i.append(oe("button",{className:"docdel",textContent:"\u2715",title:"Delete this document",onclick:async()=>{if(confirm(`Delete "${e.name||"Project"}"? This cannot be undone.`)){if(await u_(e.id),e.id===n){let[r]=await yp().catch(()=>[]),s=r?await Po(r.id)??await us():await us();bp(s),Mh()}await Sh()}}})),Ka.append(i)}Ka.append(oe("button",{className:"docnew",textContent:"\uFF0B New document",onclick:async()=>{bp(await us()),Mh(),await Sh()}}))}FC.onclick=async()=>{let n=Ka.hasAttribute("hidden");Ka.hidden=!n,n&&await Sh()};var bh={ver:-1,cols:[]};function kC(){if(bh.ver===y.voxVer)return bh.cols;let n=new Map;return function t(e){e.type==="object"?Bg(e.boxes,n):e.children.forEach(t)}(y.root),bh={ver:y.voxVer,cols:[...n.entries()].sort((t,e)=>e[1]-t[1]).map(t=>t[0])},bh.cols}var Mp=[];function Eh(n){Mp=[n,...Mp.filter(t=>t!==n)].slice(0,6)}function Sp(n){y.selColor=n,$t()}function VC(){let n=[];for(let t of[...Mp,...kC(),...al])if(n.includes(t)||n.push(t),n.length>=6)break;return n}var HC=n=>{let t=oe("div",{className:"sw"+(n===y.selColor?" active":""),title:Ai(n),onclick:()=>Sp(n)});return t.style.background=Ai(n),t};function GC(){y.tool!=="eyedropper"&&(y.eyedropReturn=y.tool,Fi(),y.tool="eyedropper",$t())}function WC(n){let t=(n>>16&255)/255,e=(n>>8&255)/255,i=(n&255)/255,r=Math.max(t,e,i),s=Math.min(t,e,i),a=r-s,o=0;return a&&(r===t?o=(e-i)/a%6:r===e?o=(i-t)/a+2:o=(t-e)/a+4,o=(o*60+360)%360),[Math.round(o),Math.round((r?a/r:0)*100),Math.round(r*100)]}function Za(n,t,e){t/=100,e/=100;let i=e*t,r=i*(1-Math.abs(n/60%2-1)),s=e-i,[a,o,c]=n<60?[i,r,0]:n<120?[r,i,0]:n<180?[0,i,r]:n<240?[0,r,i]:n<300?[r,0,i]:[i,0,r],l=h=>Math.round((h+s)*255);return l(a)<<16|l(o)<<8|l(c)}var XC=[{key:"h",max:360,label:"H",title:"Hue"},{key:"s",max:100,label:"S",title:"Saturation"},{key:"v",max:100,label:"V",title:"Value"}];function qC(){let n=oe("div",{className:"colorctl"}),t=oe("div",{className:"colorbtn",title:"Draw colour \u2014 hover for recent colours / sliders"});t.style.background=Ai(y.selColor);let e=oe("div",{className:"colorflyout"}),i=oe("div",{className:"sliders"}),r={},[s,a,o]=WC(y.selColor),c={h:s,s:a,v:o},l=()=>{r.s.style.background=`linear-gradient(to right,${Ai(Za(c.h,0,c.v))},${Ai(Za(c.h,100,c.v))})`,r.v.style.background=`linear-gradient(to right,${Ai(Za(c.h,c.s,0))},${Ai(Za(c.h,c.s,100))})`},h=()=>{c.h=+r.h.value,c.s=+r.s.value,c.v=+r.v.value,y.selColor=Za(c.h,c.s,c.v),t.style.background=Ai(y.selColor),l()};for(let f of XC){let g=oe("div",{className:"sliderline"}),x=oe("input",{type:"range",className:"csl",title:f.title});x.min="0",x.max=String(f.max),x.value=String(c[f.key]),r[f.key]=x,x.addEventListener("input",h),g.append(oe("span",{className:"lbl",textContent:f.label,title:f.title}),x),i.appendChild(g)}r.h.style.background="linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",l();let u=oe("div",{className:"sliderrow"});u.append(i,oe("div",{className:"sw more",textContent:"\u{1F4A7}",title:"Pick a colour from a voxel (eyedropper)",onclick:GC}));let d=oe("div",{className:"swrow"});for(let f of VC())d.appendChild(HC(f));return e.append(u,d),n.append(t,e),n}{let n=document.getElementById("app"),t=e=>{n.classList.toggle("side-hidden",e),window.dispatchEvent(new Event("resize"))};document.getElementById("btn-hide-side").onclick=()=>t(!0),document.getElementById("btn-show-side").onclick=()=>t(!1)}window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||y.drag||y.painting)return;let t=n.key.toLowerCase();if(n.ctrlKey||n.metaKey){if(t==="z"){n.preventDefault(),n.shiftKey?Id():Cx();return}if(t==="y"){n.preventDefault(),Id();return}if(y.editObject){t==="c"?(ip(),n.preventDefault()):t==="x"?(Dy(),n.preventDefault()):t==="v"&&(YC(),n.preventDefault());return}let i={c:Ja,x:r_,v:vh,d:_h}[t];i&&(i(),n.preventDefault());return}switch(t){case"f":Qn();break;case"escape":Vy();break;case"n":y.editObject||i_();break;case"r":y.editObject||a_();break;case"[":y.editObject||pp(-1);break;case"]":y.editObject||pp(1);break;case"delete":case"backspace":n.preventDefault(),y.editObject?np():ja();break}});function YC(){let n=[];if(Qs()==="node")for(let t of pl())ia(t,t.pos,t.rot,n);else n.push(...ml());n.length&&(y.tool="select",Ny(n),$t())}var Th=n=>Math.abs(n.clientX-y.drag.sx)+Math.abs(n.clientY-y.drag.sy)>3,Bi=document.createElement("div");Bi.id="toolcursor";Bi.style.display="none";document.body.appendChild(Bi);function $C(n){if(y.tool==="view"){Bi.style.display="none";return}Bi.textContent=wh[y.tool],Bi.style.left=n.clientX+"px",Bi.style.top=n.clientY+"px",Bi.style.display="block"}function jC(){y.tool!=="measure"||y.painting||y.drag&&y.drag.mode==="box"||hl()}function wp(){let n=(Wt.top-Wt.bottom)/ge.h,t=Math.abs(Wt.matrixWorldInverse.elements[5]);return n/Math.max(t,.15)}function JC(n){let t=y.drag;if(!t||t.mode!=="pan"&&t.mode!=="orbit")return!1;let e=n.clientX-t.x,i=n.clientY-t.y;return t.x=n.clientX,t.y=n.clientY,(t.mode==="pan"?px:mx)(e,i),!0}function ZC(){let n=[],t=[];cr(y.root,{x:0,y:0,z:0},0,null,null,(r,s,a,o)=>{let c=o&&y.selection.has(o)?t:n;for(let l of r.boxes)c.push(Jn(l,a,s))});let e=1/0,i=-1/0;for(let r of t)r.y0<e&&(e=r.y0),r.y1>i&&(i=r.y1);return{occ:n,sel:t,minY:e,hgt:t.length?i-e:0}}var KC=(n,t,e,i)=>{if(hd(n.sel??[],n.occ??[],t,e,i))return!0;let r=n.minY??1/0;return r+e<Math.min(0,r)};function QC(n){let t=y.drag,e=(i,r,s)=>n.altKey||!KC(t,i,r,s);if(n.shiftKey){t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=t.dyUser??0);let i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*wp());e(t.dx,i,t.dz)&&(t.dyUser=i,t.dy=i)}else{t.shiftAnchorY=null;let i=t.dx,r=t.dz,s=ra(0);s&&t.start&&(i=s.x-t.start.x,r=s.z-t.start.z);let a=t.dyUser??0,o=Math.floor(.1*(t.hgt??0)),c=!1;for(let l=0;l<=o;l++)if(e(i,a+l,r)){t.dx=i,t.dz=r,t.dy=a+l,c=!0;break}c||(e(i,a,t.dz)&&(t.dx=i),e(t.dx,a,r)&&(t.dz=r),t.dy=a)}for(let i of y.selection)for(let r of y.childMeshes[i]||[])r.position.set(t.dx,t.dy,t.dz),r.castShadow=!1;Ei.position.set(t.dx,t.dy,t.dz)}function tR(n){let t=y.drag,e=Ys(),i=ee({x:Math.round(t.dx),y:0,z:Math.round(t.dz)},-e.rot),r=Math.round(t.dy);if(n){let s=[];for(let a of y.selection){let o=Ci(a);if(!o)continue;let c=ir(o);c.pos={x:o.pos.x+i.x,y:o.pos.y+r,z:o.pos.z+i.z},s.push(c)}y.context.children.push(...s),y.selection=new Set(s.map(a=>a.id))}else for(let s of y.selection){let a=Ci(s);a&&(a.pos.x+=i.x,a.pos.y+=r,a.pos.z+=i.z)}Ei.position.set(0,0,0),ye(),$t(),ue()}function eR(n){let t=y.drag,e=Math.round((t.sx-n.clientX)/70);e!==t.steps&&(fp(e-t.steps),t.steps=e,t.dirty=!0)}function nR(){let n=ux();n!=null&&(y.eyedropReturn!=null&&(y.tool=y.eyedropReturn,y.eyedropReturn=null),Sp(n))}function __(n){let t=Xr(),e=md(t);if(!e)return;let i=Br(e.x,e.y,e.z);i!==y.lastVox&&(n?(Td({x0:e.x,y0:e.y,z0:e.z,x1:e.x+1,y1:e.y+1,z1:e.z+1},y.selColor),Eh(y.selColor)):hx(e,y.selColor)&&Eh(y.selColor),y.lastVox=i),v_(t)}function v_(n=Xr()){let t=md(n);if(!t){vn.visible=!1;return}let e=Ri(t.x+.5,t.y+.5,t.z+.5);vn.visible=!0,vn.material.color.set(y.tool==="erase"?11895693:10994876),vn.position.copy(e)}var Ep=n=>n===0?[1,2]:n===1?[0,2]:[0,1];function b_(n,t,e,i){let[r,s]=Ep(n.na),a=[0,0,0],o=[0,0,0],c=(l,h,u)=>{a[l]=Math.min(h,u),o[l]=Math.max(h,u)};return c(n.na,n.s[n.na],n.s[n.na]+i),c(r,n.s[r],t),c(s,n.s[s],e),{x0:a[0],y0:a[1],z0:a[2],x1:o[0]+1,y1:o[1]+1,z1:o[2]+1,c:0}}var Tp=n=>{let[t,e]=Ep(n.na);return b_(n,n.c[t],n.c[e],n.hy)};function y_(n){let t=Xr(),e,i;if(t)i=t.addCell.x!==t.cell.x?0:t.addCell.y!==t.cell.y?1:2,e=y.tool==="add"?t.addCell:t.cell;else{let r=qr(0);if(!r)return;e=r,i=1}y.drag={...n,mode:"box",shiftAnchorY:null,box:{s:[e.x,e.y,e.z],c:[e.x,e.y,e.z],na:i,hy:0},occ:y.tool==="add"?y.editObject.boxes.slice():void 0},vn.visible=!1,M_()}function iR(n){let t=y.drag,e=t.box,[i,r]=Ep(e.na),s=y.tool==="add"&&!n.altKey,a=(o,c,l)=>!s||!hd([b_(e,o,c,l)],t.occ??[],0,0,0);if(n.shiftKey){t.shiftAnchorY===null&&(t.shiftAnchorX=n.clientX,t.shiftAnchorY=n.clientY,t.hyBase=e.hy);let o=Ri(e.s[0],e.s[1],e.s[2]),c=e.s.slice();c[e.na]+=1;let l=Ri(c[0],c[1],c[2]),h=l.x-o.x,u=l.y-o.y,d=l.z-o.z,f=Wt.matrixWorld.elements,g=h*f[0]+u*f[1]+d*f[2],x=h*f[4]+u*f[5]+d*f[6],m=g*g+x*x,p=ge.h/(Wt.top-Wt.bottom),v=g*p,_=-x*p,T=n.clientX-t.shiftAnchorX,R=n.clientY-t.shiftAnchorY,I=t.hyBase+(m>.02?Math.round((T*v+R*_)/(v*v+_*_)):Math.round((t.shiftAnchorY-n.clientY)*wp()));a(e.c[i],e.c[r],I)&&(e.hy=I)}else{t.shiftAnchorY=null;let o=tx(e.na,e.s[e.na]);if(o){let c=[o.x,o.y,o.z];a(c[i],e.c[r],e.hy)&&(e.c[i]=c[i]),a(e.c[i],c[r],e.hy)&&(e.c[r]=c[r])}}M_()}function rR(){let n=Tp(y.drag.box);y.tool==="add"?(Td(n,y.selColor),Eh(y.selColor)):oa(n),y.liveMeas=null,ar(),$t(),ue()}function M_(){let n=Tp(y.drag.box);y.liveMeas=yd(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,Ri,2),ar()}function sR(n){let t=y.sel3d.region.y0;y.drag={...n,mode:"selmove",start:qr(t)??{x:0,y:t,z:0},dx:0,dy:0,dz:0,shiftAnchorY:null}}function oR(n){y.drag={...n,mode:"selrot",steps:0}}function aR(n){let t=y.drag,e=t.dx,i=t.dy,r=t.dz;if(n.shiftKey)t.shiftAnchorY==null&&(t.shiftAnchorY=n.clientY,t.dyBase=i),i=t.dyBase+Math.round((t.shiftAnchorY-n.clientY)*wp());else{t.shiftAnchorY=null;let s=qr(t.start.y);s&&(e=s.x-t.start.x,r=s.z-t.start.z)}(e!==t.dx||i!==t.dy||r!==t.dz)&&(y.sel3d.lifted||tp(),Oy(e-t.dx,i-t.dy,r-t.dz),t.dx=e,t.dy=i,t.dz=r)}function cR(n){let t=y.drag,e=n.altKey;e!==!!t.fine&&(t.fine=e,y.sel3d.lifted&&(rp(),t.sx=n.clientX,t.steps=0,t.deg=0));let i=()=>{y.sel3d.lifted||(tp(),rp())};if(e){let r=Math.round((t.sx-n.clientX)/25)*15;if(r===(t.deg??0))return;i(),t.deg=r,By(r,n.shiftKey)}else{let r=Math.round((t.sx-n.clientX)/70);if(r===t.steps)return;i(),t.steps=r,Fy(r,n.shiftKey)}}function lR(n){y.liveMeas=null,ar(),n&&Uy(Tp(y.drag.box)),$t()}Xe.addEventListener("pointerdown",n=>{if(y.drag||y.painting)return;Xe.setPointerCapture(n.pointerId),cl(n.clientX,n.clientY);let t={x:n.clientX,y:n.clientY,sx:n.clientX,sy:n.clientY};if(n.button===1){y.drag={...t,mode:"pan"};return}if(y.editObject){n.button===0?y.tool==="view"||y.tool==="measure"?y.drag={...t,mode:"pan"}:y.tool==="select"?y.sel3d&&sp()?sR(t):(Fi(),y_(t)):y.tool==="add"||y.tool==="erase"?y_(t):y.tool==="eyedropper"?nR():(y.painting=!0,y.lastVox=null,__(n.shiftKey)):n.button===2&&(y.tool==="select"&&y.sel3d&&sp()?oR(t):y.drag={...t,mode:"orbit"});return}let e=pd(),i=e&&y.selection.has(e);n.button===0?y.tool==="measure"?y.drag={...t,mode:"pan"}:i?y.drag={...t,mode:"move",start:ra(0),dx:0,dy:0,dz:0,shiftAnchorY:null,...ZC()}:y.drag={...t,mode:"pan",clickId:e}:n.button===2&&(i&&y.tool!=="measure"?y.drag={...t,mode:"rotobj",steps:0}:y.drag={...t,mode:"orbit"})});Xe.addEventListener("pointermove",n=>{cl(n.clientX,n.clientY),y.editObject&&y.painting?__(n.shiftKey):y.drag?JC(n)||(y.drag.mode==="move"?QC(n):y.drag.mode==="rotobj"?eR(n):y.drag.mode==="box"?iR(n):y.drag.mode==="selmove"?aR(n):y.drag.mode==="selrot"&&cR(n)):y.editObject&&y.tool!=="select"&&y.tool!=="view"&&y.tool!=="measure"?v_():vn.visible=!1,jC(),$C(n)});Xe.addEventListener("pointerup",n=>{try{Xe.releasePointerCapture(n.pointerId)}catch{}if(y.tool==="measure"&&y.drag&&!Th(n)){if(n.button===0){nx(),y.drag=null;return}if(n.button===2){ix(),y.drag=null;return}}if(y.editObject){y.painting?(y.painting=!1,$t(),ue()):y.drag&&y.drag.mode==="box"?y.tool==="select"?lR(Th(n)):rR():y.drag&&(y.drag.mode==="selmove"||y.drag.mode==="selrot")&&ep(),y.drag=null;return}if(y.drag)if(y.drag.mode==="pan"&&!Th(n)&&n.button===0){let t=y.drag.clickId,e=n.shiftKey||n.ctrlKey||n.metaKey,i=new Set(y.selection);t?(e?y.selection.has(t)?y.selection.delete(t):y.selection.add(t):y.selection=new Set([t]),hp(t)):e||(y.selection.clear(),hp(null)),fr(i),$t()}else y.drag.mode==="move"?tR(Th(n)&&(n.ctrlKey||n.metaKey)):y.drag.mode==="rotobj"&&y.drag.dirty&&($t(),ue());y.drag=null});Xe.addEventListener("pointercancel",()=>{if(!y.drag&&!y.painting)return;let n=y.painting;y.drag&&(y.drag.mode==="selmove"||y.drag.mode==="selrot")&&ep(),y.drag=null,y.painting=!1,y.liveMeas=null,ar(),ye(),n&&($t(),ue())});Xe.addEventListener("pointerleave",()=>{vn.visible=!1,Bi.style.display="none",y.tool==="measure"&&!y.drag&&!y.painting&&y.liveMeas&&(y.liveMeas=null,ar())});Xe.addEventListener("contextmenu",n=>n.preventDefault());Xe.addEventListener("wheel",n=>{n.preventDefault(),jt.zoom*=n.deltaY>0?1/.95:.95,jt.zoom=Math.max(6,Math.min(el,jt.zoom))},{passive:!1});Xe.addEventListener("dblclick",n=>{if(y.editObject)return;cl(n.clientX,n.clientY);let t=pd();t&&ls(Ci(t),!0)});for(let n of["pointerdown","pointermove","pointerup","pointerleave","wheel","keydown","dblclick"])window.addEventListener(n,qn,{passive:!0,capture:!0});var hR=()=>Math.abs(jt.azim-Gt.azim)<.001&&Math.abs(jt.elev-Gt.elev)<.001&&Math.abs(jt.zoom-Gt.zoom)<.001&&Gt.target.distanceToSquared(jt.target)<1e-6;function S_(){let n=Xe.getBoundingClientRect();ge.w=n.width,ge.h=n.height,ge.x=n.left,ge.y=n.top}function w_(){let n=Math.max(1,Math.round(ge.w)),t=Math.max(1,Math.round(ge.h)),e=Math.min(devicePixelRatio,2);wi.getPixelRatio()!==e&&wi.setPixelRatio(e),(Xe.width!==Math.floor(n*e)||Xe.height!==Math.floor(t*e))&&(wi.setSize(n,t,!1),qn())}window.addEventListener("resize",()=>{S_(),w_()});var Ap=!1;function uR(){Ap=!0,y.drag?qn():E_()}function E_(){Ap=!1;let n=So(Sy());n&&(ph(n),ye(),$t(),qn())}function T_(){requestAnimationFrame(T_),Ap&&!y.drag&&E_(),w_(),yx(),(Jo.tail>0||!hR())&&(cx(),wi.render(Ee,Wt),rx(),Jo.tail>0&&Jo.tail--)}async function dR(){Ey(uR),y.root=await f_(Iy),y.collapsed=new Set(Ry()),y.path=[y.root],y.editObject=null,y.sel3d=null,y.selection.clear(),ye(),$t(),Qn(),Rn(),S_(),T_()}dR();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
