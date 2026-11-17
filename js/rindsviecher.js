(()=>{var Lh=0,Vl=1,Dh=2;var An=1,Nh=2,Es=3,Rn=0,je=1,Yi=2,Xn=0,Cn=1,yr=2,Wl=3,ql=4,Uh=5;var $n=100,Fh=101,zh=102,Oh=103,Bh=104,kh=200,Hh=201,Gh=202,Vh=203,Xl=204,$l=205,Wh=206,qh=207,Xh=208,$h=209,Yh=210,Zh=211,Kh=212,Jh=213,jh=214,xa=0,ya=1,_a=2,ps=3,va=4,Ma=5,ba=6,Sa=7,_r=0,Qh=1,tu=2,Zi=0,Yl=1,Zl=2,Kl=3,vr=4,Jl=5,jl=6,Ql=7;var tc=300,Yn=301,Ts=302,Ya=303,Za=304,Mn=1e3,Vi=1001,wa=1002,$e=1003,eu=1004;var Mr=1005;var Be=1006,Ka=1007;var vi=1008;var fi=1009,ec=1010,ic=1011,As=1012,Ja=1013,Fi=1014,Ci=1015,zi=1016,ja=1017,Qa=1018,Zn=1020,nc=35902,sc=35899,rc=1021,ac=1022,li=1023,an=1026,cn=1027,to=1028,eo=1029,In=1030,io=1031;var no=1033,br=33776,Sr=33777,wr=33778,Er=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37488,fo=37489,Tr=37490,po=37491,mo=37808,go=37809,xo=37810,yo=37811,_o=37812,vo=37813,Mo=37814,bo=37815,So=37816,wo=37817,Eo=37818,To=37819,Ao=37820,Ro=37821,Co=36492,Io=36494,Po=36495,Lo=36283,Do=36284,Ar=36285,No=36286;var Ys=2300,Ea=2301,ma=2302,Nl=2303,Ul=2400,Fl=2401,zl=2402;var iu=3200;var Rs=0,nu=1,hn="",oi="srgb",Zs="srgb-linear",Ks="linear",ue="srgb";var ga=7680;var su=519,ru=512,au=513,ou=514,oc=515,lu=516,cu=517,lc=518,cc=519,hu=35044,Pn=35048;var hc="300 es",wi=2e3,ms=2001;function Dd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Nd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uu(){let s=Js("canvas");return s.style.display="block",s}var nh={},gs=null;function uc(...s){let t="THREE."+s.shift();gs?gs("log",t,...s):console.log(t,...s)}function du(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Dt(...s){s=du(s);let t="THREE."+s.shift();if(gs)gs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ot(...s){s=du(s);let t="THREE."+s.shift();if(gs)gs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function $s(...s){let t=s.join(" ");t in nh||(nh[t]=!0,Dt(...s))}function fu(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var pu={[xa]:xa,[_a]:ba,[va]:va,[ps]:Ma,[ya]:ya,[ba]:_a,[Sa]:Sa,[Ma]:ps},Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ul=Math.PI/180,Ta=180/Math.PI;function Rr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[s&255]+ii[s>>8&255]+ii[s>>16&255]+ii[s>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[e&63|128]+ii[e>>8&255]+"-"+ii[e>>16&255]+ii[e>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function Ud(s,t){return(s%t+t)%t}function dl(s,t,e){return(1-e)*s+e*t}function mu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fd(s,t){if(t.constructor===Float32Array)return s;let e=dc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function zd(s,t){if(t.constructor===Float32Array)return s;let e=dc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var xc=class xc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xc.prototype.isVector2=!0;var Gt=xc,Ye=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),T=Math.sin(y);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+x*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yc=class yc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;var L=yc,fl=new L,sh=new Ye,_c=class _c{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],y=n[1],T=n[4],v=n[7],E=n[2],b=n[5],_=n[8];return r[0]=a*x+o*y+l*E,r[3]=a*g+o*T+l*b,r[6]=a*m+o*v+l*_,r[1]=c*x+h*y+u*E,r[4]=c*g+h*T+u*b,r[7]=c*m+h*v+u*_,r[2]=d*x+f*y+p*E,r[5]=d*g+f*T+p*b,r[8]=d*m+f*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pl.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pl.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;var kt=_c,pl=new kt,rh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){let s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(n.r=rn(n.r),n.g=rn(n.g),n.b=rn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(n.r=fs(n.r),n.g=fs(n.g),n.b=fs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hn?Ks:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Zs]:{primaries:t,whitePoint:i,transfer:Ks,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:rh,fromXYZ:ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}var te=Od();function rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qn,Aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qn===void 0&&(Qn=Js("canvas")),Qn.width=t.width,Qn.height=t.height;let n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Qn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=rn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rn(e[i]/255)*255):e[i]=rn(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ml(n[a].image)):r.push(ml(n[a]))}else r=ml(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function ml(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Aa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var kd=0,gl=new L,ui=class s extends Wi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Vi,n=Vi,r=Be,a=vi,o=li,l=fi,c=s.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Rr(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(gl).x}get height(){return this.source.getSize(gl).y}get depth(){return this.source.getSize(gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mn:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mn:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=tc;ui.DEFAULT_ANISOTROPY=1;var vc=class vc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(f+1)/2,E=(m+1)/2,b=(h+d)/4,_=(u+x)/4,w=(p+g)/4;return T>v&&T>E?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=b/i,r=_/i):v>E?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=_/r,n=w/r),this.set(i,n,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vc.prototype.isVector4=!0;var we=vc,Ra=class extends Wi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new ui({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new xs(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Ra{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},js=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=$e,this.minFilter=$e,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=$e,this.minFilter=$e,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Gd)}lookAt(t,e,i){let n=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),mn.crossVectors(i,gi),mn.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),mn.crossVectors(i,gi)),mn.normalize(),Wr.crossVectors(gi,mn),n[0]=mn.x,n[4]=Wr.x,n[8]=gi.x,n[1]=mn.y,n[5]=Wr.y,n[9]=gi.y,n[2]=mn.z,n[6]=Wr.z,n[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],T=i[7],v=i[11],E=i[15],b=n[0],_=n[4],w=n[8],C=n[12],R=n[1],D=n[5],F=n[9],k=n[13],I=n[2],H=n[6],X=n[10],V=n[14],et=n[3],q=n[7],Q=n[11],tt=n[15];return r[0]=a*b+o*R+l*I+c*et,r[4]=a*_+o*D+l*H+c*q,r[8]=a*w+o*F+l*X+c*Q,r[12]=a*C+o*k+l*V+c*tt,r[1]=h*b+u*R+d*I+f*et,r[5]=h*_+u*D+d*H+f*q,r[9]=h*w+u*F+d*X+f*Q,r[13]=h*C+u*k+d*V+f*tt,r[2]=p*b+x*R+g*I+m*et,r[6]=p*_+x*D+g*H+m*q,r[10]=p*w+x*F+g*X+m*Q,r[14]=p*C+x*k+g*V+m*tt,r[3]=y*b+T*R+v*I+E*et,r[7]=y*_+T*D+v*H+E*q,r[11]=y*w+T*F+v*X+E*Q,r[15]=y*C+T*k+v*V+E*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],y=l*f-c*d,T=o*f-c*u,v=o*d-l*u,E=a*f-c*h,b=a*d-l*h,_=a*u-o*h;return e*(x*y-g*T+m*v)-i*(p*y-g*E+m*b)+n*(p*T-x*E+m*_)-r*(p*v-x*b+g*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],y=e*o-i*a,T=e*l-n*a,v=e*c-r*a,E=i*l-n*o,b=i*c-r*o,_=n*c-r*l,w=h*x-u*p,C=h*g-d*p,R=h*m-f*p,D=u*g-d*x,F=u*m-f*x,k=d*m-f*g,I=y*k-T*F+v*D+E*R-b*C+_*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(o*k-l*F+c*D)*H,t[1]=(n*F-i*k-r*D)*H,t[2]=(x*_-g*b+m*E)*H,t[3]=(d*b-u*_-f*E)*H,t[4]=(l*R-a*k-c*C)*H,t[5]=(e*k-n*R+r*C)*H,t[6]=(g*v-p*_-m*T)*H,t[7]=(h*_-d*v+f*T)*H,t[8]=(a*F-o*R+c*w)*H,t[9]=(i*R-e*F-r*w)*H,t[10]=(p*b-x*v+m*y)*H,t[11]=(u*v-h*b-f*y)*H,t[12]=(o*C-a*D-l*w)*H,t[13]=(e*D-i*C+n*w)*H,t[14]=(x*T-p*E-g*y)*H,t[15]=(h*E-u*T+d*y)*H,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,y=l*c,T=l*h,v=l*u,E=i.x,b=i.y,_=i.z;return n[0]=(1-(x+m))*E,n[1]=(f+v)*E,n[2]=(p-T)*E,n[3]=0,n[4]=(f-v)*b,n[5]=(1-(d+m))*b,n[6]=(g+y)*b,n[7]=0,n[8]=(p+T)*_,n[9]=(g-y)*_,n[10]=(1-(d+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ts.set(n[0],n[1],n[2]).length(),o=ts.set(n[4],n[5],n[6]).length(),l=ts.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Li.copy(this);let c=1/a,h=1/o,u=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=h,Li.elements[5]*=h,Li.elements[6]*=h,Li.elements[8]*=u,Li.elements[9]*=u,Li.elements[10]*=u,e.setFromRotationMatrix(Li),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=wi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===wi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=wi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===wi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};$a.prototype.isMatrix4=!0;var Zt=$a,ts=new L,Li=new Zt,Hd=new L(0,0,0),Gd=new L(1,1,1),mn=new L,Wr=new L,gi=new L,oh=new Zt,lh=new Ye,Je=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Je.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,ch=new L,es=new Ye,Qi=new Zt,qr=new L,ks=new L,Wd=new L,qd=new Ye,hh=new L(1,0,0),uh=new L(0,1,0),dh=new L(0,0,1),fh={type:"added"},Xd={type:"removed"},is={type:"childadded",child:null},xl={type:"childremoved",child:null},Ze=class s extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Je,i=new Ye,n=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new kt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(ks,qr,this.up):Qi.lookAt(qr,ks,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),es.setFromRotationMatrix(Qi),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),is.child=t,this.dispatchEvent(is),is.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new L(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},$d={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($d)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function yl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Ud(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return te.colorSpaceToWorking(this,n),this}setStyle(t,e=oi){function i(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){let i=gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return te.workingToColorSpace(ni.copy(this),t),Math.round(ie(ni.r*255,0,255))*65536+Math.round(ie(ni.g*255,0,255))*256+Math.round(ie(ni.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(ni.copy(this),e);let i=ni.r,n=ni.g,r=ni.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=oi){te.workingToColorSpace(ni.copy(this),t);let e=ni.r,i=ni.g,n=ni.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Xr);let i=dl(gn.h,Xr.h,e),n=dl(gn.s,Xr.s,e),r=dl(gn.l,Xr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new yt;yt.NAMES=gu;var tr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Di=new L,tn=new L,_l=new L,en=new L,ns=new L,ss=new L,ph=new L,vl=new L,Ml=new L,bl=new L,Sl=new we,wl=new we,El=new we,vn=class s{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Di.subVectors(t,e),n.cross(Di);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Di.subVectors(n,e),tn.subVectors(i,e),_l.subVectors(t,e);let a=Di.dot(Di),o=Di.dot(tn),l=Di.dot(_l),c=tn.dot(tn),h=tn.dot(_l),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Sl.setScalar(0),wl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,i),El.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(t,e,i,n){return Di.subVectors(i,e),tn.subVectors(t,e),Di.cross(tn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Di.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;ns.subVectors(n,i),ss.subVectors(r,i),vl.subVectors(t,i);let l=ns.dot(vl),c=ss.dot(vl);if(l<=0&&c<=0)return e.copy(i);Ml.subVectors(t,n);let h=ns.dot(Ml),u=ss.dot(Ml);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ns,a);bl.subVectors(t,r);let f=ns.dot(bl),p=ss.dot(bl);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(ss,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return ph.subVectors(r,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(ph,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(ns,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ni):Ni.fromBufferAttribute(r,a),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Yr.subVectors(this.max,Hs),rs.subVectors(t.a,Hs),as.subVectors(t.b,Hs),os.subVectors(t.c,Hs),xn.subVectors(as,rs),yn.subVectors(os,as),On.subVectors(rs,os);let e=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-On.z,On.y,xn.z,0,-xn.x,yn.z,0,-yn.x,On.z,0,-On.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-On.y,On.x,0];return!Tl(e,rs,as,os,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,rs,as,os,Yr))?!1:(Zr.crossVectors(xn,yn),e=[Zr.x,Zr.y,Zr.z],Tl(e,rs,as,os,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nn=[new L,new L,new L,new L,new L,new L,new L,new L],Ni=new L,$r=new qi,rs=new L,as=new L,os=new L,xn=new L,yn=new L,On=new L,Hs=new L,Yr=new L,Zr=new L,Bn=new L;function Tl(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);let o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=i.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new L,Kr=new Gt,Yd=0,ye=class extends Wi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=Ci,this.version=0,this._normalizationScale=t!==void 0?dc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Fd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):zd(t,this.array)}};var ir=class extends ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var nr=class extends ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zd=new qi,Gs=new L,Al=new L,Xi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Zd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Al)),this.expandByPoint(Gs.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kd=0,Si=new Zt,Rl=new Ze,ls=new L,xi=new qi,Vs=new qi,Xe=new L,Ee=class s extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?nr:ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(xi.min,Vs.min),xi.expandByPoint(Xe),Xe.addVectors(xi.max,Vs.max),xi.expandByPoint(Xe)):(xi.expandByPoint(Vs.min),xi.expandByPoint(Vs.max))}xi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),Xe.add(ls)),n=Math.max(n,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new L,l[C]=new L;let h=new L,u=new L,d=new L,f=new Gt,p=new Gt,x=new Gt,g=new L,m=new L;function y(C,R,D){c[C]=c[R]=c[D]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),o[C].add(g),o[R].add(g),o[D].add(g),l[C].add(m),l[R].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,R=T.length;C<R;++C){let D=T[C],F=D.start,k=D.count;for(let I=F,H=F+k;I<H;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new L,E=new L,b=new L,_=new L;function w(C){b.fromBufferAttribute(n,C),_.copy(b);let R=o[C];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),E.crossVectors(_,R);let F=E.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,F)}for(let C=0,R=i.count;C<R;++C)c[C]&&w(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new ye(d,h,u)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Cl=new L,Jd=new L,jd=new kt,Ui=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Cl.subVectors(i,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jd.getNormalMatrix(t),n=this.coplanarPoint(Cl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qd=0,Ei=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=Cn,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=$l,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var sn=new L,Il=new L,Jr=new L,jr=new L,_s=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Il.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),jr.copy(this.origin).sub(Il);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=jr.dot(this.direction),l=-jr.dot(Jr),c=jr.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Il).addScaledVector(Jr,d),f}intersectSphere(t,e){if(t.radius<0)return null;sn.subVectors(t.center,this.origin);let i=sn.dot(this.direction),n=sn.dot(sn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=i.x-a.x,y=i.y-a.y,T=i.z-a.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(h),_,w,C,R,D,F,k,I,H,X,V,et;if(v>=E&&v>=b?(C=l,F=u,H=p,et=m,l>=0?(_=c,w=h,R=d,D=f,k=x,I=g,X=y,V=T):(_=h,w=c,R=f,D=d,k=g,I=x,X=T,V=y)):E>=b?(C=c,F=d,H=x,et=y,c>=0?(_=h,w=l,R=f,D=u,k=g,I=p,X=T,V=m):(_=l,w=h,R=u,D=f,k=p,I=g,X=m,V=T)):(C=h,F=f,H=g,et=T,h>=0?(_=l,w=c,R=u,D=d,k=p,I=x,X=m,V=y):(_=c,w=l,R=d,D=u,k=x,I=p,X=y,V=m)),C===0)return null;let q=_/C,Q=w/C,tt=1/C,St=R-q*F,Bt=D-Q*F,$=k-q*H,ft=I-Q*H,_t=X-q*et,Rt=V-Q*et,pt=_t*ft-Rt*$,Ut=St*Rt-Bt*_t,Me=$*Bt-ft*St;if(n){if(pt<0||Ut<0||Me<0)return null}else if((pt<0||Ut<0||Me<0)&&(pt>0||Ut>0||Me>0))return null;let Ct=pt+Ut+Me;if(Ct===0)return null;let ne=tt*(pt*F+Ut*H+Me*et);return(Ct>0?ne<0:ne>0)?null:this.at(ne/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ti=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mh=new Zt,kn=new _s,Qr=new Xi,gh=new L,ta=new L,ea=new L,ia=new L,Pl=new L,na=new L,xh=new L,sa=new L,Kt=class extends Ze{constructor(t=new Ee,e=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Pl.fromBufferAttribute(u,t),a?na.addScaledVector(Pl,h):na.addScaledVector(Pl.sub(e),h))}e.add(na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(Qr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Qr,gh)===null||kn.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),kn.copy(t.ray).applyMatrix4(mh),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=T;v<E;v+=3){let b=o.getX(v),_=o.getX(v+1),w=o.getX(v+2);n=ra(this,m,t,i,c,h,u,b,_,w),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),T=o.getX(g+1),v=o.getX(g+2);n=ra(this,a,t,i,c,h,u,y,T,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,E=T;v<E;v+=3){let b=v,_=v+1,w=v+2;n=ra(this,m,t,i,c,h,u,b,_,w),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,T=g+1,v=g+2;n=ra(this,a,t,i,c,h,u,y,T,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function tf(s,t,e,i,n,r,a,o){let l;if(t.side===je?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Rn,o),l===null)return null;sa.copy(o),sa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:s}}function ra(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,ta),s.getVertexPosition(l,ea),s.getVertexPosition(c,ia);let h=tf(s,t,e,i,ta,ea,ia,xh);if(h){let u=new L;vn.getBarycoord(xh,ta,ea,ia,u),n&&(h.uv=vn.getInterpolatedAttribute(n,o,l,c,u,new Gt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new Gt)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};vn.getNormal(ta,ea,ia,d.normal),h.face=d,h.barycoord=u}return h}var on=class extends ui{constructor(t=null,e=1,i=1,n,r,a,o,l,c=$e,h=$e,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends ye{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new Zt,yh=new Zt,aa=[],_h=new qi,ef=new Zt,Ws=new Kt,qs=new Xi,Gn=class extends Kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ef)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),_h.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(_h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),qs.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,cs),yh.multiplyMatrices(i,cs),Ws.matrixWorld=yh,Ws.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){let l=aa[a];l.instanceId=r,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new on(new Float32Array(n*this.count),n,this.count,to,Ci));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hn=new Xi,nf=new Gt(.5,.5),oa=new L,bn=class{constructor(t=new Ui,e=new Ui,i=new Ui,n=new Ui,r=new Ui,a=new Ui){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],T=r[13],v=r[14],E=r[15];if(n[0].setComponents(c-a,f-h,m-p,E-y).normalize(),n[1].setComponents(c+a,f+h,m+p,E+y).normalize(),n[2].setComponents(c+o,f+u,m+x,E+T).normalize(),n[3].setComponents(c-o,f-u,m-x,E-T).normalize(),i)n[4].setComponents(l,d,g,v).normalize(),n[5].setComponents(c-l,f-d,m-g,E-v).normalize();else if(n[4].setComponents(c-l,f-d,m-g,E-v).normalize(),e===wi)n[5].setComponents(c+l,f+d,m+g,E+v).normalize();else if(e===ms)n[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){Hn.center.set(0,0,0);let e=nf.distanceTo(t.center);return Hn.radius=.7071067811865476+e,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(oa.x=n.normal.x>0?t.max.x:t.min.x,oa.y=n.normal.y>0?t.max.y:t.min.y,oa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vh=new Zt,Ia=class s{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];vh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new bn),i[n].setFromProjectionMatrix(vh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new bn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ms=class extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pa=new L,La=new L,Mh=new Zt,Xs=new _s,la=new Xi,Ll=new L,bh=new L,sr=class extends Ze{constructor(t=new Ee,e=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Pa.fromBufferAttribute(e,n-1),La.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Pa.distanceTo(La);t.setAttribute("lineDistance",new pe(i,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(n),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;Mh.copy(n).invert(),Xs.copy(t.ray).applyMatrix4(Mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),y=h.getX(x+1),T=ca(this,t,Xs,l,m,y,x);T&&e.push(T)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=ca(this,t,Xs,l,x,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=ca(this,t,Xs,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=ca(this,t,Xs,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ca(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(Pa.fromBufferAttribute(o,n),La.fromBufferAttribute(o,r),e.distanceSqToSegment(Pa,La,Ll,bh)>i)return;Ll.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ll);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var bs=class extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sh=new Zt,Ol=new _s,ha=new Xi,ua=new L,Vn=class extends Ze{constructor(t=new Ee,e=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(n),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;Sh.copy(n).invert(),Ol.copy(t.ray).applyMatrix4(Sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);ua.fromBufferAttribute(u,g),wh(ua,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)ua.fromBufferAttribute(u,p),wh(ua,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wh(s,t,e,i,n,r,a){let o=Ol.distanceSqToPoint(s);if(o<e){let l=new L;Ol.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var rr=class extends ui{constructor(t=[],e=Yn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ln=class extends ui{constructor(t,e,i=Fi,n,r,a,o=$e,l=$e,c,h=an,u=1){if(h!==an&&h!==cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ar=class extends ln{constructor(t,e=Fi,i=Yn,n,r,a=$e,o=$e,l,c=an){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pt=class s extends Ee{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function p(x,g,m,y,T,v,E,b,_,w,C){let R=v/_,D=E/w,F=v/2,k=E/2,I=b/2,H=_+1,X=w+1,V=0,et=0,q=new L;for(let Q=0;Q<X;Q++){let tt=Q*D-k;for(let St=0;St<H;St++){let Bt=St*R-F;q[x]=Bt*y,q[g]=tt*T,q[m]=I,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=b>0?1:-1,h.push(q.x,q.y,q.z),u.push(St/_),u.push(1-Q/w),V+=1}}for(let Q=0;Q<w;Q++)for(let tt=0;tt<_;tt++){let St=d+tt+H*Q,Bt=d+tt+H*(Q+1),$=d+(tt+1)+H*(Q+1),ft=d+(tt+1)+H*Q;l.push(St,Bt,ft),l.push(Bt,$,ft),et+=6}o.addGroup(f,et,C),f+=et,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wn=class s extends Ee{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,x=n+1,g=new L,m=new L;for(let y=0;y<=p;y++){let T=0,v=0,E=0,b=0;if(y<=i){let C=y/i,R=C*Math.PI/2;v=-h-t*Math.cos(R),E=t*Math.sin(R),b=-t*Math.cos(R),T=C*u}else if(y<=i+r){let C=(y-i)/r;v=-h+C*e,E=t,b=0,T=u+C*d}else{let C=(y-i-r)/i,R=C*Math.PI/2;v=h+t*Math.sin(R),E=t*Math.cos(R),b=t*Math.sin(R),T=u+d+C*u}let _=Math.max(0,Math.min(1,T/f)),w=0;y===0?w=.5/n:y===p&&(w=-.5/n);for(let C=0;C<=n;C++){let R=C/n,D=R*Math.PI*2,F=Math.sin(D),k=Math.cos(D);m.x=-E*k,m.y=v,m.z=E*F,o.push(m.x,m.y,m.z),g.set(-E*k,b,E*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+w,_)}if(y>0){let C=(y-1)*x;for(let R=0;R<n;R++){let D=C+R,F=C+R+1,k=y*x+R,I=y*x+R+1;a.push(D,F,k),a.push(F,I,k)}}}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Vt=class s extends Ee{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function y(){let v=new L,E=new L,b=0,_=(e-t)/i;for(let w=0;w<=r;w++){let C=[],R=w/r,D=R*(e-t)+t;for(let F=0;F<=n;F++){let k=F/n,I=k*l+o,H=Math.sin(I),X=Math.cos(I);E.x=D*H,E.y=-R*i+g,E.z=D*X,u.push(E.x,E.y,E.z),v.set(H,_,X).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-R),C.push(p++)}x.push(C)}for(let w=0;w<n;w++)for(let C=0;C<r;C++){let R=x[C][w],D=x[C+1][w],F=x[C+1][w+1],k=x[C][w+1];(t>0||C!==0)&&(h.push(R,D,k),b+=3),(e>0||C!==r-1)&&(h.push(D,F,k),b+=3)}c.addGroup(m,b,0),m+=b}function T(v){let E=p,b=new Gt,_=new L,w=0,C=v===!0?t:e,R=v===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let D=p;for(let F=0;F<=n;F++){let I=F/n*l+o,H=Math.cos(I),X=Math.sin(I);_.x=C*X,_.y=g*R,_.z=C*H,u.push(_.x,_.y,_.z),d.push(0,R,0),b.x=H*.5+.5,b.y=X*.5*R+.5,f.push(b.x,b.y),p++}for(let F=0;F<n;F++){let k=E+F,I=D+F;v===!0?h.push(I,I+1,k):h.push(I+1,I,k),w+=3}c.addGroup(m,w,v===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ze=class s extends Vt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class s extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new L,v=new L,E=new L;for(let b=0;b<e.length;b+=3)f(e[b+0],T),f(e[b+1],v),f(e[b+2],E),l(T,v,E,y)}function l(y,T,v,E){let b=E+1,_=[];for(let w=0;w<=b;w++){_[w]=[];let C=y.clone().lerp(v,w/b),R=T.clone().lerp(v,w/b),D=b-w;for(let F=0;F<=D;F++)F===0&&w===b?_[w][F]=C:_[w][F]=C.clone().lerp(R,F/D)}for(let w=0;w<b;w++)for(let C=0;C<2*(b-w)-1;C++){let R=Math.floor(C/2);C%2===0?(d(_[w][R+1]),d(_[w+1][R]),d(_[w][R])):(d(_[w][R+1]),d(_[w+1][R+1]),d(_[w+1][R]))}}function c(y){let T=new L;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(y),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let y=new L;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let v=g(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;a.push(v,1-E)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let T=a[y+0],v=a[y+2],E=a[y+4],b=Math.max(T,v,E),_=Math.min(T,v,E);b>.9&&_<.1&&(T<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,T){let v=y*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function p(){let y=new L,T=new L,v=new L,E=new L,b=new Gt,_=new Gt,w=new Gt;for(let C=0,R=0;C<r.length;C+=9,R+=6){y.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),b.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),w.set(a[R+4],a[R+5]),E.copy(y).add(T).add(v).divideScalar(3);let D=g(E);x(b,R+0,y,D),x(_,R+2,T,D),x(w,R+4,v,D)}}function x(y,T,v,E){E<0&&y.x===1&&(a[T]=y.x-1),v.x===0&&v.z===0&&(a[T]=E/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var $i=class s extends lr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var cr=class s extends lr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},qn=class s extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*d-a;for(let T=0;T<c;T++){let v=T*u-r;p.push(v,-y,0),x.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let T=y+c*m,v=y+c*(m+1),E=y+1+c*(m+1),b=y+1+c*m;f.push(T,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var se=class s extends Ee{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],T=m/i,v=a+T*o,E=t*Math.cos(v),b=Math.sqrt(t*t-E*E),_=0;m===0&&a===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let C=w/e,R=n+C*r;u.x=-b*Math.cos(R),u.y=E,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(C+_,1-T),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let T=h[m][y+1],v=h[m][y],E=h[m+1][y],b=h[m+1][y+1];(m!==0||a>0)&&f.push(T,v,b),(m!==i-1||l<Math.PI)&&f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ai=class s extends Ee{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new L,f=new L,p=new L;for(let x=0;x<=i;x++){let g=a+x/i*o;for(let m=0;m<=n;m++){let y=m/n*r;f.x=(t+e*Math.cos(g))*Math.cos(y),f.y=(t+e*Math.cos(g))*Math.sin(y),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){let m=(n+1)*x+g-1,y=(n+1)*(x-1)+g-1,T=(n+1)*(x-1)+g,v=(n+1)*x+g;l.push(m,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Kn(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Eh(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Eh(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ri(s){let t={};for(let e=0;e<s.length;e++){let i=Kn(s[e]);for(let n in i)t[n]=i[n]}return t}function Eh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function sf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var xu={clone:Kn,merge:ri},rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kn(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new yt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new we().fromArray(n.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Da=class extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hr=class extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Sn=class extends Ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=_r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ri=class extends Ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=_r,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Na=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function da(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var wn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends wn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:r=t,o=2*e-i;break;case zl:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:a=t,l=2*i-e;break;case zl:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,T=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+y*a[c+E]+T*a[l+E]+v*a[u+E];return r}},za=class extends wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Oa=class extends wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ba=class extends wn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(n-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*d+p*2,y=u[m],T=u[m+1],v=t*d+p*2,E=h[v],b=h[v+1],_=lf(i,e,y,E,n);r[p]=yu(_,x,T,b,g)}return r}};function yu(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function of(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function lf(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=yu(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=of(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var _i=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),da(t.settings)&&(i.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break;case Nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;da(this.settings)&&(Th(this.settings.inTangents,t),Th(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;da(this.settings)&&(Ah(this.settings.inTangents,t),Ah(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Nd(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,da(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Th(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function Ah(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Ea;var En=class extends _i{constructor(t,e,i){super(t,e,i)}};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=Ys;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};ka.prototype.ValueTypeName="color";var Ha=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Ha.prototype.ValueTypeName="number";var Ga=class extends wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ye.slerpFlat(r,0,a,c-o,a,c,l);return r}},ur=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Tn=class extends _i{constructor(t,e,i){super(t,e,i)}};Tn.prototype.ValueTypeName="string";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=Ys;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Va.prototype.ValueTypeName="vector";var Wa=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new Wa,qa=class{constructor(t){this.manager=t!==void 0?t:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=class extends Ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},dr=class extends Ss{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dl=new Zt,Rh=new L,Ch=new L,fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bn,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ch),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fa=new L,pa=new Ye,Gi=new L,pr=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fa,pa,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(fa,pa,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_n=new L,Ih=new Gt,Ph=new Gt,si=class extends pr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Ih,Ph),e.subVectors(Ph,Ih)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ul*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Bl=class extends fr{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}},mr=class extends Ss{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Bl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},gr=class extends pr{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends fr{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends Ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,ds=1,ws=class extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new si(us,ds,t,e);n.layers=this.layers,this.add(n);let r=new si(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new si(us,ds,t,e);a.layers=this.layers,this.add(a);let o=new si(us,ds,t,e);o.layers=this.layers,this.add(o);let l=new si(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new si(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Xa=class extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var pc="\\[\\]\\.:\\/",cf=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",hf="[^"+pc.replace("\\.","")+"]",uf=/((?:WC+[\/:])*)/.source.replace("WC",mc),df=/(WCOD+)?/.source.replace("WCOD",hf),ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),mf=new RegExp("^"+uf+df+ff+pf+"$"),gf=["material","materials","bones","map"],Hl=class{constructor(t,e,i){let n=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Se=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cf,"")}static parseTrackName(t){let e=mf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);gf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Hl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Px=new Float32Array(1);var Mc=class Mc{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Mc.prototype.isMatrix2=!0;var Gl=Mc;function gc(s,t,e,i){let n=xf(i);switch(e){case rc:return s*t;case to:return s*t/n.components*n.byteLength;case eo:return s*t/n.components*n.byteLength;case In:return s*t*2/n.components*n.byteLength;case io:return s*t*2/n.components*n.byteLength;case ac:return s*t*3/n.components*n.byteLength;case li:return s*t*4/n.components*n.byteLength;case no:return s*t*4/n.components*n.byteLength;case br:case Sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(s,16)*Math.max(t,8)/4;case so:case ao:return Math.max(s,8)*Math.max(t,8)/2;case lo:case co:case uo:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ho:case Tr:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Co:case Io:case Po:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Lo:case Do:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ar:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xf(s){switch(s){case fi:case ec:return{byteLength:1,components:1};case As:case ic:case zi:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case Fi:case Ja:case Ci:return{byteLength:4,components:1};case nc:case sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Hu(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ef(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
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
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Sp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qp=`#ifndef FLAT_SHADED
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
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
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
	#include <morphinstance_vertex>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,km=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Wm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qm=`#define NORMAL
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
	#include <morphinstance_vertex>
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
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$m=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
	#include <morphinstance_vertex>
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
}`,Km=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Jm=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,t0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,i0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,s0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Yt={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:If,alphatest_pars_fragment:Pf,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Nf,batching_vertex:Uf,begin_vertex:Ff,beginnormal_vertex:zf,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:qf,color_pars_fragment:Xf,color_pars_vertex:$f,color_vertex:Yf,common:Zf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Jf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:ip,envmap_fragment:np,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:yp,lights_toon_pars_fragment:_p,lights_phong_fragment:vp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Sp,lights_fragment_begin:wp,lights_fragment_maps:Ep,lights_fragment_end:Tp,lightprobes_pars_fragment:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Ip,logdepthbuf_vertex:Pp,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Np,map_particle_pars_fragment:Up,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:qp,normal_pars_vertex:Xp,normal_vertex:$p,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:im,dithering_fragment:nm,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:ym,transmission_fragment:_m,transmission_pars_fragment:vm,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Sm,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Im,depth_vert:Pm,depth_frag:Lm,distance_vert:Dm,distance_frag:Nm,equirect_vert:Um,equirect_frag:Fm,linedashed_vert:zm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Gm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:qm,meshnormal_frag:Xm,meshphong_vert:$m,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:Km,meshtoon_vert:Jm,meshtoon_frag:jm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:i0,sprite_vert:n0,sprite_frag:s0},gt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ji={basic:{uniforms:ri([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ri([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ri([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ri([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ri([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ri([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ri([gt.points,gt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ri([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ri([gt.common,gt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ri([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ri([gt.sprite,gt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:ri([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:ri([gt.lights,gt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Ji.physical={uniforms:ri([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Uo={r:0,b:0,g:0},r0=new Zt,Gu=new kt;Gu.set(-1,0,0,0,1,0,0,0,1);function a0(s,t,e,i,n,r){let a=new yt(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=t.get(T,v)}return T}function p(y){let T=!1,v=f(y);v===null?g(a,o):v&&v.isColor&&(g(v,1),T=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,T){let v=f(T);v&&v.isCubeTexture?(c===void 0&&(c=new Kt(new Pt(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Kn(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gu),c.material.toneMapped=te.getTransfer(v.colorSpace)!==ue,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Kt(new qn(2,2),new di({name:"BackgroundMaterial",uniforms:Kn(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Uo,fc(s)),e.buffers.color.setClear(Uo.r,Uo.g,Uo.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:x,dispose:m}}function o0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(D,F,k,I,H){let X=!1,V=u(D,I,k,F);r!==V&&(r=V,c(r.object)),X=f(D,I,k,H),X&&p(D,I,k,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(D,F,k,I),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,F,k,I){let H=I.wireframe===!0,X=i[F.id];X===void 0&&(X={},i[F.id]=X);let V=D.isInstancedMesh===!0?D.id:0,et=X[V];et===void 0&&(et={},X[V]=et);let q=et[k.id];q===void 0&&(q={},et[k.id]=q);let Q=q[H];return Q===void 0&&(Q=d(l()),q[H]=Q),Q}function d(D){let F=[],k=[],I=[];for(let H=0;H<e;H++)F[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,F,k,I){let H=r.attributes,X=F.attributes,V=0,et=k.getAttributes();for(let q in et)if(et[q].location>=0){let tt=H[q],St=X[q];if(St===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),tt===void 0||tt.attribute!==St||St&&tt.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function p(D,F,k,I){let H={},X=F.attributes,V=0,et=k.getAttributes();for(let q in et)if(et[q].location>=0){let tt=X[q];tt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let St={};St.attribute=tt,tt&&tt.data&&(St.data=tt.data),H[q]=St,V++}r.attributes=H,r.attributesNum=V,r.index=I}function x(){let D=r.newAttributes;for(let F=0,k=D.length;F<k;F++)D[F]=0}function g(D){m(D,0)}function m(D,F){let k=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;k[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),H[D]!==F&&(s.vertexAttribDivisor(D,F),H[D]=F)}function y(){let D=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==D[k]&&(s.disableVertexAttribArray(k),F[k]=0)}function T(D,F,k,I,H,X,V){V===!0?s.vertexAttribIPointer(D,F,k,H,X):s.vertexAttribPointer(D,F,k,I,H,X)}function v(D,F,k,I){x();let H=I.attributes,X=k.getAttributes(),V=F.defaultAttributeValues;for(let et in X){let q=X[et];if(q.location>=0){let Q=H[et];if(Q===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let tt=Q.normalized,St=Q.itemSize,Bt=t.get(Q);if(Bt===void 0)continue;let $=Bt.buffer,ft=Bt.type,_t=Bt.bytesPerElement,Rt=ft===s.INT||ft===s.UNSIGNED_INT||Q.gpuType===Ja;if(Q.isInterleavedBufferAttribute){let pt=Q.data,Ut=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,Me=Q.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Ct=0;Ct<q.locationSize;Ct++)m(q.location+Ct,pt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ct=0;Ct<q.locationSize;Ct++)g(q.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Ct=0;Ct<q.locationSize;Ct++)T(q.location+Ct,St/q.locationSize,ft,tt,Ut*_t,(Me+St/q.locationSize*Ct)*_t,Rt)}else{if(Q.isInstancedBufferAttribute){for(let pt=0;pt<q.locationSize;pt++)m(q.location+pt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<q.locationSize;pt++)g(q.location+pt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let pt=0;pt<q.locationSize;pt++)T(q.location+pt,St/q.locationSize,ft,tt,St*_t,St/q.locationSize*pt*_t,Rt)}}else if(V!==void 0){let tt=V[et];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(q.location,tt);break;case 3:s.vertexAttrib3fv(q.location,tt);break;case 4:s.vertexAttrib4fv(q.location,tt);break;default:s.vertexAttrib1fv(q.location,tt)}}}}y()}function E(){C();for(let D in i){let F=i[D];for(let k in F){let I=F[k];for(let H in I){let X=I[H];for(let V in X)h(X[V].object),delete X[V];delete I[H]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let k in F){let I=F[k];for(let H in I){let X=I[H];for(let V in X)h(X[V].object),delete X[V];delete I[H]}}delete i[D.id]}function _(D){for(let F in i){let k=i[F];for(let I in k){let H=k[I];if(H[D.id]===void 0)continue;let X=H[D.id];for(let V in X)h(X[V].object),delete X[V];delete H[D.id]}}}function w(D){for(let F in i){let k=i[F],I=D.isInstancedMesh===!0?D.id:0,H=k[I];if(H!==void 0){for(let X in H){let V=H[X];for(let et in V)h(V[et].object),delete V[et];delete H[X]}delete k[I],Object.keys(k).length===0&&delete i[F]}}}function C(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function l0(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function c0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==li&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==fi&&_!==Ci&&!w&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:b}}function h0(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Ui,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!n||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,T=y*4,v=m.clippingState||null;l.value=v,v=h(p,d,T,f);for(let E=0;E!==T;++E)v[E]=e[E];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=f;T!==x;++T,v+=4)a.copy(u[T]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Pr=class extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new rr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Pt(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Xn});r.uniforms.tEquirect.value=e;let a=new Kt(n,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Be),new ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},vu=256,u0=3,d0=20,Vu=256,Wu=16,f0=3,p0=new L,m0=new yt,zo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ws(1,10,null),this._boxMesh=new Kt(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=p0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(m0));let g=new ws(i,n,h);return g.position.copy(o),g.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(vu,mu(t))}_fromTexture(t,e){t.mapping===Yn||t.mapping===Ts?this._setSize(t.image.length===0?vu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Mu(t,!1,!1),i=Math.log2(t)-u0;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Mu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Yn||t.mapping===Ts?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=g0(),this._integrationMaterial=x0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Wu);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-f0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Vu*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=y0());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function Mu(s,t,e){return new Pr(s,{minFilter:vi,generateMipmaps:t,type:zi,colorSpace:Zs,depthBuffer:e})}function Lr(s,t,e){return new di({name:s,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:je,blending:Xn,depthTest:!1,depthWrite:!1})}function g0(){return Lr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function x0(){return Lr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function y0(){return Lr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function bu(){return Lr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Su(){return Lr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _0(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ya||f===Za)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Pr(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Ya||f===Za,x=f===Yn||f===Ts;if(p||x){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new zo(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new zo(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Ya?d.mapping=Yn:f===Za&&(d.mapping=Ts),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function v0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&$s("WebGLRenderer: "+i+" extension not supported."),n}}}function M0(s,t,e,i){let n={},r=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let g in x)t.update(x[g],s.ARRAY_BUFFER)}function u(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,T=g.count>=65535?nr:ir,v=new T(Math.ceil(y/3)*6,1),E=v.array;if(x!==null){let _=x.array;m=x.version;for(let w=0,C=0;w<y;w+=3){let R=_[w+0],D=_[w+1],F=_[w+2];E[C++]=R,E[C++]=D,E[C++]=D,E[C++]=F,E[C++]=F,E[C++]=R}}else{m=g.version;for(let _=0,w=0;_<y;_+=3){let C=_+0,R=_+1,D=_+2;E[w++]=C,E[w++]=R,E[w++]=R,E[w++]=D,E[w++]=D,E[w++]=C}}v.version=m;let b=r.get(p);b&&t.remove(b),r.set(p,v)}function d(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function b0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function S0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function w0(s,t,e){let i=new WeakMap,n=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let v=o.attributes.position.count*T,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*E*4*u),_=new js(b,v,E,u);_.type=Ci,_.needsUpdate=!0;let w=T*4;for(let R=0;R<u;R++){let D=g[R],F=m[R],k=y[R],I=v*E*4*R;for(let H=0;H<D.count;H++){let X=H*w;f===!0&&(n.fromBufferAttribute(D,H),b[I+X+0]=n.x,b[I+X+1]=n.y,b[I+X+2]=n.z,b[I+X+3]=0),p===!0&&(n.fromBufferAttribute(F,H),b[I+X+4]=n.x,b[I+X+5]=n.y,b[I+X+6]=n.z,b[I+X+7]=0),x===!0&&(n.fromBufferAttribute(k,H),b[I+X+8]=n.x,b[I+X+9]=n.y,b[I+X+10]=n.z,b[I+X+11]=k.itemSize===4?n.w:1)}}d={count:u,texture:_,size:new Gt(v,E)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(s,t,e,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var T0={[Yl]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[jl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function A0(s,t,e,i,n,r){let a=new yi(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ee;h.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new Da({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Kt(h,u),f=new gr(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,y=null,T=[],v=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let _=0;_<T.length;_++){let w=T[_];w.setSize&&w.setSize(E,b)}},this.setEffects=function(E){T=E,v=T.length>0&&T[0].isRenderPass===!0;let b=a.width,_=a.height;T.length>0&&o===null&&(o=new yi(b,_,{type:zi,depthBuffer:!1,stencilBuffer:!1}),l=new yi(b,_,{type:zi,depthBuffer:!1,stencilBuffer:!1}));let w=n===!0&&T.some(C=>C.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new ln(b,_),r===!0&&(c.format=cn,c.type=Zn)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let C=0;C<T.length;C++){let R=T[C];R.setSize&&R.setSize(b,_),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,b){if(g||E.toneMapping===Zi&&T.length===0)return!1;if(y=b,b!==null){let _=b.width,w=b.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return v===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(E,b){E.toneMapping=m,g=!0;let _=a,w=o;for(let C=0;C<T.length;C++){let R=T[C];R.enabled!==!1&&(R.render(E,w,_,b),R.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,u.defines={},te.getTransfer(p)===ue&&(u.defines.SRGB_TRANSFER="");let C=T0[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(y),E.render(d,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var qu=new ui,Xu=new ln(1,1),$u=new ar(1),Yu=new js,Zu=new Ca,Ku=new rr,wu=[],Eu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Is(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=wu[n];if(r===void 0&&(r=new Float32Array(n),wu[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function He(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Bo(s,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function R0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function C0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),He(e,t)}}function I0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),He(e,t)}}function P0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),He(e,t)}}function L0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,i))return;Ru.set(i),s.uniformMatrix2fv(this.addr,!1,Ru),He(e,i)}}function D0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,i))return;Au.set(i),s.uniformMatrix3fv(this.addr,!1,Au),He(e,i)}}function N0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,i))return;Tu.set(i),s.uniformMatrix4fv(this.addr,!1,Tu),He(e,i)}}function U0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),He(e,t)}}function z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),He(e,t)}}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),He(e,t)}}function B0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function k0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),He(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),He(e,t)}}function G0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),He(e,t)}}function ko(s){return s.version===0&&(s.compareFunction=cc,s.needsUpdate=!0),s}function V0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=ko(Xu):r=qu,e.setTexture2D(t||r,n)}function W0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Zu,n)}function q0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ko($u):r=Ku,e.setTextureCube(t||r,n)}function X0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Yu,n)}function $0(s){switch(s){case 5126:return R0;case 35664:return C0;case 35665:return I0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return z0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return k0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(s,t){s.uniform1fv(this.addr,t)}function Z0(s,t){let e=Is(t,this.size,2);s.uniform2fv(this.addr,e)}function K0(s,t){let e=Is(t,this.size,3);s.uniform3fv(this.addr,e)}function J0(s,t){let e=Is(t,this.size,4);s.uniform4fv(this.addr,e)}function j0(s,t){let e=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Q0(s,t){let e=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tg(s,t){let e=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function eg(s,t){s.uniform1iv(this.addr,t)}function ig(s,t){s.uniform2iv(this.addr,t)}function ng(s,t){s.uniform3iv(this.addr,t)}function sg(s,t){s.uniform4iv(this.addr,t)}function rg(s,t){s.uniform1uiv(this.addr,t)}function ag(s,t){s.uniform2uiv(this.addr,t)}function og(s,t){s.uniform3uiv(this.addr,t)}function lg(s,t){s.uniform4uiv(this.addr,t)}function cg(s,t,e){let i=this.cache,n=t.length,r=Bo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),He(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ko(Xu):a=qu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function hg(s,t,e){let i=this.cache,n=t.length,r=Bo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),He(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Zu,r[a])}function ug(s,t,e){let i=this.cache,n=t.length,r=Bo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),He(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=ko($u):a=Ku;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function dg(s,t,e){let i=this.cache,n=t.length,r=Bo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),He(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Yu,r[a])}function fg(s){switch(s){case 5126:return Y0;case 35664:return Z0;case 35665:return K0;case 35666:return J0;case 35674:return j0;case 35675:return Q0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var wc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}},Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fg(e.type)}},Tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},bc=/(\w+)(\])?(\[|\.)?/g;function Cu(s,t){s.seq.push(t),s.map[t.id]=t}function pg(s,t,e){let i=s.name,n=i.length;for(bc.lastIndex=0;;){let r=bc.exec(i),a=bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Cu(e,c===void 0?new wc(o,s,t):new Ec(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Tc(o),Cu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);pg(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Iu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var mg=37297,gg=0;function xg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Pu=new kt;function yg(s){te._getMatrix(Pu,te.workingColorSpace,s);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Ks:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xg(s.getShaderSource(t),o)}else return r}function _g(s,t){let e=yg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vg={[Yl]:"Linear",[Zl]:"Reinhard",[Kl]:"Cineon",[vr]:"ACESFilmic",[jl]:"AgX",[Ql]:"Neutral",[Jl]:"Custom"};function Mg(s,t){let e=vg[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fo=new L;function bg(){te.getLuminanceCoefficients(Fo);let s=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function wg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Eg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ir(s){return s!==""}function Du(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Nu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(s){return s.replace(Tg,Ag)}function Ag(s,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ac(e)}var Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(s){return s.replace(Rg,Cg)}function Cg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Fu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ig={[An]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Pg(s){return Ig[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lg={[Ts]:"ENVMAP_MODE_REFRACTION"};function Dg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ng={[_r]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[tu]:"ENVMAP_BLENDING_ADD"};function Ug(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ng[s.combine]||"ENVMAP_BLENDING_NONE"}function Fg(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Pg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dg(e),u=Ug(e),d=Sg(e),f=wg(r),p=n.createProgram(),x,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ir).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ir).join(`
`),g.length>0&&(g+=`
`)):(x=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),g=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Ac(a),a=Du(a,e),a=Nu(a,e),o=Ac(o),o=Du(o,e),o=Nu(o,e),a=Uu(a),o=Uu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+x+a,T=m+g+o,v=Iu(n,n.VERTEX_SHADER,y),E=Iu(n,n.FRAGMENT_SHADER,T);n.attachShader(p,v),n.attachShader(p,E),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function b(R){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(p)||"",F=n.getShaderInfoLog(v)||"",k=n.getShaderInfoLog(E)||"",I=D.trim(),H=F.trim(),X=k.trim(),V=!0,et=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,v,E);else{let q=Lu(n,v,"vertex"),Q=Lu(n,E,"fragment");Ot("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+q+`
`+Q)}else I!==""?Dt("WebGLProgram: Program Info Log:",I):(H===""||X==="")&&(et=!1);et&&(R.diagnostics={runnable:V,programLog:I,vertexShader:{log:H,prefix:x},fragmentShader:{log:X,prefix:g}})}n.deleteShader(v),n.deleteShader(E),_=new Cs(n,p),w=Eg(n,p)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(p,mg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}var zg=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Cc(t),e.set(t,i)),i}},Cc=class{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}};function Og(s){return s===In||s===Tr||s===Ar}function Bg(s,t,e,i,n,r){let a=new Qs,o=new Rc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,w,C,R,D,F){let k=R.fog,I=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||H,X),et=d[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Dt("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=Q!==void 0?Q.length:0,St=0;I.morphAttributes.position!==void 0&&(St=1),I.morphAttributes.normal!==void 0&&(St=2),I.morphAttributes.color!==void 0&&(St=3);let Bt,$,ft,_t;if(et){let mt=Ji[et];Bt=mt.vertexShader,$=mt.fragmentShader}else{Bt=_.vertexShader,$=_.fragmentShader;let mt=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,mt,fe),ft=mt.id,_t=fe.id}let Rt=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,Me=D.isBatchedMesh===!0,Ct=!!_.map,ne=!!_.matcap,ae=!!V,qt=ae&&V.isPMREMTexture===!0,Ne=!!_.aoMap,Ae=!!_.lightMap,Ve=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,bi=!!_.displacementMap,De=!!_.emissiveMap,At=!!_.metalnessMap,de=!!_.roughnessMap,Ie=_.anisotropy>0,U=_.clearcoat>0,mi=_.diffuseRoughness>0,he=_.dispersion>0,ge=_.retroreflectivity>0,rt=_.iridescence>0,be=_.sheen>0,Et=_.transmission>0,Ft=Ie&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,M=U&&!!_.clearcoatNormalMap,O=U&&!!_.clearcoatRoughnessMap,it=mi&&!!_.diffuseRoughnessMap,j=rt&&!!_.iridescenceMap,at=rt&&!!_.iridescenceThicknessMap,ut=be&&!!_.sheenColorMap,Z=be&&!!_.sheenRoughnessMap,K=!!_.specularMap,lt=!!_.specularColorMap,P=!!_.specularIntensityMap,J=Et&&!!_.transmissionMap,Y=Et&&!!_.thicknessMap,ct=!!_.gradientMap,st=!!_.alphaMap,ot=_.alphaTest>0,Tt=!!_.alphaHash,$t=!!_.extensions,nt=Zi;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(nt=s.toneMapping);let It=qt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Xt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Bt,fragmentShader:$,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Me,batchingColor:Me&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:ne,envMap:ae,envMapMode:ae&&V.mapping,envMapPMREM:qt,envMapMaxLod:qt?It.length-1:null,envMapSize:qt?It[0].width:null,aoMap:Ne,lightMap:Ae,bumpMap:Ve,normalMap:me,displacementMap:bi,emissiveMap:De,normalMapObjectSpace:me&&_.normalMapType===nu,normalMapTangentSpace:me&&_.normalMapType===Rs,packedNormalMap:me&&_.normalMapType===Rs&&Og(_.normalMap.format),metalnessMap:At,roughnessMap:de,anisotropy:Ie,anisotropyMap:Ft,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:O,diffuseRoughness:mi,diffuseRoughnessMap:it,dispersion:he,retroreflection:ge,iridescence:rt,iridescenceMap:j,iridescenceThicknessMap:at,sheen:be,sheenColorMap:ut,sheenRoughnessMap:Z,specularMap:K,specularColorMap:lt,specularIntensityMap:P,transmission:Et,transmissionMap:J,thicknessMap:Y,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Cn&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:Tt,combine:_.combine,mapUv:Ct&&f(_.map.channel),aoMapUv:Ne&&f(_.aoMap.channel),lightMapUv:Ae&&f(_.lightMap.channel),bumpMapUv:Ve&&f(_.bumpMap.channel),normalMapUv:me&&f(_.normalMap.channel),displacementMapUv:bi&&f(_.displacementMap.channel),emissiveMapUv:De&&f(_.emissiveMap.channel),metalnessMapUv:At&&f(_.metalnessMap.channel),roughnessMapUv:de&&f(_.roughnessMap.channel),anisotropyMapUv:Ft&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:lt&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:st&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(me||Ie),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ct||st),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:St,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yi,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$t&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&_.extensions.multiDraw===!0||Me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(g(w,_),m(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let w=d[_.type],C;if(w){let R=Ji[w];C=xu.clone(R.uniforms)}else C=_.uniforms;return C}function T(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Fg(s,w,_,n),c.push(C),h.set(w,C)),C}function v(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:b}}function kg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Hg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function zu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ou(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let y=s[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},s[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=m),t++,y}function l(d,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let T=o(d,f,p,x,g,m);p.transmission>0?i.push(T):p.transparent===!0?n.push(T):e.push(T)}function c(d,f,p,x,g,m){let y=o(d,f,p,x,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||Hg),i.length>1&&i.sort(f||zu),n.length>1&&n.sort(f||zu)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function Gg(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Ou,s.set(i,[a])):n>=r.length?(a=new Ou,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new yt};break;case"SpotLight":e={position:new L,direction:new L,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Wg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var qg=0;function Xg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $g(s){let t=new Vg,e=Wg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,r=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,T=0,v=0,E=0,b=0,_=0,w=0,C=0,R=0;c.sort(Xg);for(let F=0,k=c.length;F<k;F++){let I=c[F],H=I.color,X=I.intensity,V=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===In?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*X,u+=H.g*X,d+=H.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],X);R++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=et;let St=Q.getViewportCount();for(let Bt=0;Bt<St;Bt++)i.sunShadowMatrix[x+Bt]=Q.getMatrix(Bt),i.sunShadowCascade[x+Bt]=Q._cascadeData[Bt];x+=St,p++}i.sun[f]=q,f++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=et,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=q,g++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(H).multiplyScalar(X),q.distance=V,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[y]=q;let Q=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,Q.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[y]=Q.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[y]=tt,i.spotShadowMap[y]=et,_++}y++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(H).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=q,T++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=et,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=q,m++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[v]=q,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=T,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=R,i.version=qg++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(m),d++}else if(v.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Bu(s){let t=new $g(s),e=[],i=[],n=[];function r(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yg(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Bu(s),t.set(n,[o])):r>=a.length?(o=new Bu(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],jg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ku=new Zt,Cr=new L,Sc=new L;function Qg(s,t,e){let i=new bn,n=new Gt,r=new Gt,a=new we,o=new Na,l=new Ua,c={},h=e.maxTextureSize,u={[Rn]:je,[je]:Rn,[Yi]:Yi},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Zg,fragmentShader:Kg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=An;let m=this.type;this.render=function(b,_,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Nh&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=An);let C=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Xn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=m!==this.type;k&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=b.length;I<H;I++){let X=b[I],V=X.shadow;if(V===void 0){Dt("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let et=V.getFrameExtents();n.multiply(et),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/et.x),n.x=r.x*et.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/et.y),n.y=r.y*et.y,V.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Es){if(X.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yi(n.x,n.y,{format:In,type:zi,minFilter:Be,magFilter:Be,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new ln(n.x,n.y,Ci),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=an,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$e,V.map.depthTexture.magFilter=$e}else X.isPointLight?(V.map=new Pr(n.x),V.map.depthTexture=new ar(n.x,Fi)):(V.map=new yi(n.x,n.y),V.map.depthTexture=new ln(n.x,n.y,Fi)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=an,this.type===An?(V.map.depthTexture.compareFunction=q?lc:oc,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$e,V.map.depthTexture.magFilter=$e);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,w);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:w.layers;for(let St=0;St<Q;St++){let Bt=V.getCamera(St);if(X.isPointLight){let $=V.camera,ft=V.matrix,_t=X.distance||$.far;_t!==$.far&&($.far=_t,$.updateProjectionMatrix()),Cr.setFromMatrixPosition(X.matrixWorld),$.position.copy(Cr),Sc.copy($.position),Sc.add(Jg[St]),$.up.copy(jg[St]),$.lookAt(Sc),$.updateMatrixWorld(),ft.makeTranslation(-Cr.x,-Cr.y,-Cr.z),ku.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ku,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,St),s.clear();else{St===0&&(s.setRenderTarget(V.map),s.clear());let $=V.getViewport(St);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),F.viewport(a)}i=V.getFrustum(St),v(_,w,Bt,X,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Es&&y(V,w),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(C,R,D)};function y(b,_){let w=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new yi(n.x,n.y,{format:In,type:zi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(_,null,w,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(_,null,w,f,x,null)}function T(b,_,w,C){let R=null,D=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)R=D;else if(R=w.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=R.uuid,k=_.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let H=I[k];H===void 0&&(H=R.clone(),I[k]=H,_.addEventListener("dispose",E)),R=H}if(R.visible=_.visible,R.wireframe=_.wireframe,C===Es?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=s.properties.get(R);F.light=w}return R}function v(b,_,w,C,R,D){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Es)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);let I=t.update(b),H=b.material;if(Array.isArray(H)){let X=I.groups;for(let V=0,et=X.length;V<et;V++){let q=X[V],Q=H[q.materialIndex];if(Q&&Q.visible){let tt=T(b,Q,C,D);b.onBeforeShadow(s,b,_,w,I,tt,q),s.renderBufferDirect(w,null,I,tt,b,q),b.onAfterShadow(s,b,_,w,I,tt,q)}}}else if(H.visible){let X=T(b,H,C,D);b.onBeforeShadow(s,b,_,w,I,X,null),s.renderBufferDirect(w,null,I,X,b,null),b.onAfterShadow(s,b,_,w,I,X,null)}}let k=b.children;for(let I=0,H=k.length;I<H;I++)v(k[I],_,w,C,R,D)}function E(b){b.target.removeEventListener("dispose",E);for(let w in c){let C=c[w],R=b.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function tx(s,t){function e(){let P=!1,J=new we,Y=null,ct=new we(0,0,0,0);return{setMask:function(st){Y!==st&&!P&&(s.colorMask(st,st,st,st),Y=st)},setLocked:function(st){P=st},setClear:function(st,ot,Tt,$t,nt){nt===!0&&(st*=$t,ot*=$t,Tt*=$t),J.set(st,ot,Tt,$t),ct.equals(J)===!1&&(s.clearColor(st,ot,Tt,$t),ct.copy(J))},reset:function(){P=!1,Y=null,ct.set(-1,0,0,0)}}}function i(){let P=!1,J=!1,Y=null,ct=null,st=null;return{setReversed:function(ot){if(J!==ot){let Tt=t.get("EXT_clip_control");ot?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),J=ot;let $t=st;st=null,this.setClear($t)}},getReversed:function(){return J},setTest:function(ot){ot?pt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(ot){Y!==ot&&!P&&(s.depthMask(ot),Y=ot)},setFunc:function(ot){if(J&&(ot=pu[ot]),ct!==ot){switch(ot){case xa:s.depthFunc(s.NEVER);break;case ya:s.depthFunc(s.ALWAYS);break;case _a:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case va:s.depthFunc(s.EQUAL);break;case Ma:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case Sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=ot}},setLocked:function(ot){P=ot},setClear:function(ot){st!==ot&&(st=ot,J&&(ot=1-ot),s.clearDepth(ot))},reset:function(){P=!1,Y=null,ct=null,st=null,J=!1}}}function n(){let P=!1,J=null,Y=null,ct=null,st=null,ot=null,Tt=null,$t=null,nt=null;return{setTest:function(It){P||(It?pt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(It){J!==It&&!P&&(s.stencilMask(It),J=It)},setFunc:function(It,Xt,mt){(Y!==It||ct!==Xt||st!==mt)&&(s.stencilFunc(It,Xt,mt),Y=It,ct=Xt,st=mt)},setOp:function(It,Xt,mt){(ot!==It||Tt!==Xt||$t!==mt)&&(s.stencilOp(It,Xt,mt),ot=It,Tt=Xt,$t=mt)},setLocked:function(It){P=It},setClear:function(It){nt!==It&&(s.clearStencil(It),nt=It)},reset:function(){P=!1,J=null,Y=null,ct=null,st=null,ot=null,Tt=null,$t=null,nt=null}}}let r=new e,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,T=null,v=null,E=null,b=null,_=null,w=new yt(0,0,0),C=0,R=!1,D=null,F=null,k=null,I=null,H=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=et>=2);let Q=null,tt={},St=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),$=new we().fromArray(St),ft=new we().fromArray(Bt);function _t(P,J,Y,ct){let st=new Uint8Array(4),ot=s.createTexture();s.bindTexture(P,ot),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Tt=0;Tt<Y;Tt++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ct,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(J+Tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return ot}let Rt={};Rt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pt(s.DEPTH_TEST),a.setFunc(ps),Ve(!1),me(Vl),pt(s.CULL_FACE),Ne(Xn);function pt(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function Ut(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function Me(P,J){return d[P]!==J?(s.bindFramebuffer(P,J),d[P]=J,P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=J),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Ct(P,J){let Y=p,ct=!1;if(P){Y=f.get(J),Y===void 0&&(Y=[],f.set(J,Y));let st=P.textures;if(Y.length!==st.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Tt=st.length;ot<Tt;ot++)Y[ot]=s.COLOR_ATTACHMENT0+ot;Y.length=st.length,ct=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ct=!0);ct&&s.drawBuffers(Y)}function ne(P){return x!==P?(s.useProgram(P),x=P,!0):!1}let ae={[$n]:s.FUNC_ADD,[Fh]:s.FUNC_SUBTRACT,[zh]:s.FUNC_REVERSE_SUBTRACT};ae[Oh]=s.MIN,ae[Bh]=s.MAX;let qt={[kh]:s.ZERO,[Hh]:s.ONE,[Gh]:s.SRC_COLOR,[Xl]:s.SRC_ALPHA,[Yh]:s.SRC_ALPHA_SATURATE,[Xh]:s.DST_COLOR,[Wh]:s.DST_ALPHA,[Vh]:s.ONE_MINUS_SRC_COLOR,[$l]:s.ONE_MINUS_SRC_ALPHA,[$h]:s.ONE_MINUS_DST_COLOR,[qh]:s.ONE_MINUS_DST_ALPHA,[Zh]:s.CONSTANT_COLOR,[Kh]:s.ONE_MINUS_CONSTANT_COLOR,[Jh]:s.CONSTANT_ALPHA,[jh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(P,J,Y,ct,st,ot,Tt,$t,nt,It){if(P===Xn){g===!0&&(Ut(s.BLEND),g=!1);return}if(g===!1&&(pt(s.BLEND),g=!0),P!==Uh){if(P!==m||It!==R){if((y!==$n||E!==$n)&&(s.blendEquation(s.FUNC_ADD),y=$n,E=$n),It)switch(P){case Cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ql:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",P);break}else switch(P){case Cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wl:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",P);break}T=null,v=null,b=null,_=null,w.set(0,0,0),C=0,m=P,R=It}return}st=st||J,ot=ot||Y,Tt=Tt||ct,(J!==y||st!==E)&&(s.blendEquationSeparate(ae[J],ae[st]),y=J,E=st),(Y!==T||ct!==v||ot!==b||Tt!==_)&&(s.blendFuncSeparate(qt[Y],qt[ct],qt[ot],qt[Tt]),T=Y,v=ct,b=ot,_=Tt),($t.equals(w)===!1||nt!==C)&&(s.blendColor($t.r,$t.g,$t.b,nt),w.copy($t),C=nt),m=P,R=!1}function Ae(P,J){P.side===Yi?Ut(s.CULL_FACE):pt(s.CULL_FACE);let Y=P.side===je;J&&(Y=!Y),Ve(Y),P.blending===Cn&&P.transparent===!1?Ne(Xn):Ne(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ct=P.stencilWrite;o.setTest(ct),ct&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){D!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),D=P)}function me(P){P!==Lh?(pt(s.CULL_FACE),P!==F&&(P===Vl?s.cullFace(s.BACK):P===Dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),F=P}function bi(P){P!==k&&(V&&s.lineWidth(P),k=P)}function De(P,J,Y){P?(pt(s.POLYGON_OFFSET_FILL),(I!==J||H!==Y)&&(I=J,H=Y,a.getReversed()&&(J=-J,Y=-Y),s.polygonOffset(J,Y))):Ut(s.POLYGON_OFFSET_FILL)}function At(P){P?pt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function de(P){P===void 0&&(P=s.TEXTURE0+X-1),Q!==P&&(s.activeTexture(P),Q=P)}function Ie(P,J,Y){Y===void 0&&(Q===null?Y=s.TEXTURE0+X-1:Y=Q);let ct=tt[Y];ct===void 0&&(ct={type:void 0,texture:void 0},tt[Y]=ct),(ct.type!==P||ct.texture!==J)&&(Q!==Y&&(s.activeTexture(Y),Q=Y),s.bindTexture(P,J||Rt[P]),ct.type=P,ct.texture=J)}function U(){let P=tt[Q];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function mi(){try{s.compressedTexImage2D(...arguments)}catch(P){Ot("WebGLState:",P)}}function he(){try{s.compressedTexImage3D(...arguments)}catch(P){Ot("WebGLState:",P)}}function ge(){try{s.texSubImage2D(...arguments)}catch(P){Ot("WebGLState:",P)}}function rt(){try{s.texSubImage3D(...arguments)}catch(P){Ot("WebGLState:",P)}}function be(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Ot("WebGLState:",P)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Ot("WebGLState:",P)}}function Ft(){try{s.texStorage2D(...arguments)}catch(P){Ot("WebGLState:",P)}}function A(){try{s.texStorage3D(...arguments)}catch(P){Ot("WebGLState:",P)}}function M(){try{s.texImage2D(...arguments)}catch(P){Ot("WebGLState:",P)}}function O(){try{s.texImage3D(...arguments)}catch(P){Ot("WebGLState:",P)}}function it(P){return u[P]!==void 0?u[P]:s.getParameter(P)}function j(P,J){u[P]!==J&&(s.pixelStorei(P,J),u[P]=J)}function at(P){$.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function ut(P){ft.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ft.copy(P))}function Z(P,J){let Y=c.get(J);Y===void 0&&(Y=new WeakMap,c.set(J,Y));let ct=Y.get(P);ct===void 0&&(ct=s.getUniformBlockIndex(J,P.name),s.uniformBlockBinding(J,ct,ct),Y.set(P,ct))}function K(P,J,Y){let st=c.get(J).get(P);l[st]!==Y&&(s.bindBufferBase(s.UNIFORM_BUFFER,st,Y),l[st]=Y)}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,tt={},d={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,T=null,v=null,E=null,b=null,_=null,w=new yt(0,0,0),C=0,R=!1,D=null,F=null,k=null,I=null,H=null,$.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pt,disable:Ut,bindFramebuffer:Me,drawBuffers:Ct,useProgram:ne,setBlending:Ne,setMaterial:Ae,setFlipSided:Ve,setCullFace:me,setLineWidth:bi,setPolygonOffset:De,setScissorTest:At,activeTexture:de,bindTexture:Ie,unbindTexture:U,compressedTexImage2D:mi,compressedTexImage3D:he,texImage2D:M,texImage3D:O,pixelStorei:j,getParameter:it,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Ft,texStorage3D:A,texSubImage2D:ge,texSubImage3D:rt,compressedTexSubImage2D:be,compressedTexSubImage3D:Et,scissor:at,viewport:ut,reset:lt}}function ex(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):Js("canvas")}function y(A,M,O){let it=1,j=Ft(A);if((j.width>O||j.height>O)&&(it=O/Math.max(j.width,j.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let at=Math.floor(it*j.width),ut=Math.floor(it*j.height);d===void 0&&(d=m(at,ut));let Z=M?m(at,ut):d;return Z.width=at,Z.height=ut,Z.getContext("2d").drawImage(A,0,0,at,ut),Dt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ut+")."),Z}else return"data"in A&&Dt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function T(A){return A.generateMipmaps}function v(A){s.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(A,M,O,it,j,at=!1){if(A!==null){if(s[A]!==void 0)return s[A];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;it&&(ut=t.get("EXT_texture_norm16"),ut||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===s.RED&&(O===s.FLOAT&&(Z=s.R32F),O===s.HALF_FLOAT&&(Z=s.R16F),O===s.UNSIGNED_BYTE&&(Z=s.R8),O===s.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),O===s.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.R8UI),O===s.UNSIGNED_SHORT&&(Z=s.R16UI),O===s.UNSIGNED_INT&&(Z=s.R32UI),O===s.BYTE&&(Z=s.R8I),O===s.SHORT&&(Z=s.R16I),O===s.INT&&(Z=s.R32I)),M===s.RG&&(O===s.FLOAT&&(Z=s.RG32F),O===s.HALF_FLOAT&&(Z=s.RG16F),O===s.UNSIGNED_BYTE&&(Z=s.RG8),O===s.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),O===s.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RG8UI),O===s.UNSIGNED_SHORT&&(Z=s.RG16UI),O===s.UNSIGNED_INT&&(Z=s.RG32UI),O===s.BYTE&&(Z=s.RG8I),O===s.SHORT&&(Z=s.RG16I),O===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),O===s.UNSIGNED_INT&&(Z=s.RGB32UI),O===s.BYTE&&(Z=s.RGB8I),O===s.SHORT&&(Z=s.RGB16I),O===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),O===s.UNSIGNED_INT&&(Z=s.RGBA32UI),O===s.BYTE&&(Z=s.RGBA8I),O===s.SHORT&&(Z=s.RGBA16I),O===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(O===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),O===s.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){let K=at?Ks:te.getTransfer(j);O===s.FLOAT&&(Z=s.RGBA32F),O===s.HALF_FLOAT&&(Z=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Z=K===ue?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),O===s.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,M){let O;return A?M===null||M===Fi||M===Zn?O=s.DEPTH24_STENCIL8:M===Ci?O=s.DEPTH32F_STENCIL8:M===As&&(O=s.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===Zn?O=s.DEPTH_COMPONENT24:M===Ci?O=s.DEPTH_COMPONENT32F:M===As&&(O=s.DEPTH_COMPONENT16),O}function w(A,M){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Be?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){let M=new WeakRef(A);i.get(A).__ref=M,p.add(M),x.register(A,M,M)}function R(A){let M=i.get(A).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function D(A){k(A.target)}function F(A){I(A.target)}function k(A){A.removeEventListener("dispose",D),R(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function I(A){A.removeEventListener("dispose",F),R(A),et(A)}function H(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):k(M))}p.clear(),u.clear()}function X(A){let M=i.get(A);if(M.__webglInit===void 0)return;let O=A.source,it=f.get(O);if(it){let j=it[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(A),Object.keys(it).length===0&&f.delete(O)}i.remove(A)}function V(A){let M=i.get(A);s.deleteTexture(M.__webglTexture);let O=A.source,it=f.get(O);delete it[M.__cacheKey],a.memory.textures--}function et(A){let M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let O=A.depthTexture;if(O&&O.renderTarget===A&&k(O),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let at=0;at<M.__webglFramebuffer[j].length;at++)s.deleteFramebuffer(M.__webglFramebuffer[j][at]);else s.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)s.deleteFramebuffer(M.__webglFramebuffer[j]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let it=A.textures;for(let j=0,at=it.length;j<at;j++){let ut=i.get(it[j]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(it[j])}i.remove(A)}let q=0;function Q(){q=0}function tt(){return q}function St(A){q=A}function Bt(){let A=q;return A>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,A}function $(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ft(A,M){let O=i.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let it=A.image;if(it===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,A,M);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function _t(A,M){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ae(O,A,M);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function Rt(A,M){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ae(O,A,M);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function pt(A,M){let O=i.get(A);if(A.version>0&&O.__version!==A.version){Ve(O,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}let Ut={[Mn]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[wa]:s.MIRRORED_REPEAT},Me={[$e]:s.NEAREST,[eu]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[Ka]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},Ct={[ru]:s.NEVER,[cc]:s.ALWAYS,[au]:s.LESS,[oc]:s.LEQUAL,[ou]:s.EQUAL,[lc]:s.GEQUAL,[lu]:s.GREATER,[cu]:s.NOTEQUAL};function ne(A,M){if(M.type===Ci&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Be||M.magFilter===Ka||M.magFilter===Mr||M.magFilter===vi||M.minFilter===Be||M.minFilter===Ka||M.minFilter===Mr||M.minFilter===vi)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ut[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ut[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ut[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Me[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$e||M.minFilter!==Mr&&M.minFilter!==vi||M.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ae(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D),C(M));let it=M.source,j=f.get(it);j===void 0&&(j={},f.set(it,j));let at=$(M);if(at!==A.__cacheKey){j[at]===void 0&&(j[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[at].usedTimes++;let ut=j[A.__cacheKey];ut!==void 0&&(j[A.__cacheKey].usedTimes--,ut.usedTimes===0&&V(M)),A.__cacheKey=at,A.__webglTexture=j[at].texture}return O}function qt(A,M,O){return Math.floor(Math.floor(A/O)/M)}function Ne(A,M,O,it){let at=A.updateRanges;if(at.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,O,it,M.data);else{at.sort((P,J)=>P.start-J.start);let ut=0;for(let P=1;P<at.length;P++){let J=at[ut],Y=at[P],ct=J.start+J.count,st=qt(Y.start,M.width,4),ot=qt(J.start,M.width,4);Y.start<=ct+1&&st===ot&&qt(Y.start+Y.count-1,M.width,4)===st?J.count=Math.max(J.count,Y.start+Y.count-J.start):(++ut,at[ut]=Y)}at.length=ut+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let P=0,J=at.length;P<J;P++){let Y=at[P],ct=Math.floor(Y.start/4),st=Math.ceil(Y.count/4),ot=ct%M.width,Tt=Math.floor(ct/M.width),$t=st,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(s.TEXTURE_2D,0,ot,Tt,$t,nt,O,it,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function Ae(A,M,O){let it=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=s.TEXTURE_3D);let j=ae(A,M),at=M.source;e.bindTexture(it,A.__webglTexture,s.TEXTURE0+O);let ut=i.get(at);if(at.version!==ut.__version||j===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),It=M.colorSpace===hn?null:te.getPrimaries(M.colorSpace),Xt=M.colorSpace===hn||nt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let K=y(M.image,!1,n.maxTextureSize);K=Et(M,K);let lt=r.convert(M.format,M.colorSpace),P=r.convert(M.type),J=b(M.internalFormat,lt,P,M.normalized,M.colorSpace,M.isVideoTexture);ne(it,M);let Y,ct=M.mipmaps,st=M.isVideoTexture!==!0,ot=ut.__version===void 0||j===!0,Tt=at.dataReady,$t=w(M,K);if(M.isDepthTexture)J=_(M.format===cn,M.type),ot&&(st?e.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,lt,P,null));else if(M.isDataTexture)if(ct.length>0){st&&ot&&e.texStorage2D(s.TEXTURE_2D,$t,J,ct[0].width,ct[0].height);for(let nt=0,It=ct.length;nt<It;nt++)Y=ct[nt],st?Tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Y.width,Y.height,lt,P,Y.data):e.texImage2D(s.TEXTURE_2D,nt,J,Y.width,Y.height,0,lt,P,Y.data);M.generateMipmaps=!1}else st?(ot&&e.texStorage2D(s.TEXTURE_2D,$t,J,K.width,K.height),Tt&&Ne(M,K,lt,P)):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,lt,P,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){st&&ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,J,ct[0].width,ct[0].height,K.depth);for(let nt=0,It=ct.length;nt<It;nt++)if(Y=ct[nt],M.format!==li)if(lt!==null)if(st){if(Tt)if(M.layerUpdates.size>0){let Xt=gc(Y.width,Y.height,M.format,M.type);for(let mt of M.layerUpdates){let fe=Y.data.subarray(mt*Xt/Y.data.BYTES_PER_ELEMENT,(mt+1)*Xt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,mt,Y.width,Y.height,1,lt,fe)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,K.depth,lt,Y.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,J,Y.width,Y.height,K.depth,0,Y.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,K.depth,lt,P,Y.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,J,Y.width,Y.height,K.depth,0,lt,P,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{st&&ot&&e.texStorage2D(s.TEXTURE_2D,$t,J,ct[0].width,ct[0].height);for(let nt=0,It=ct.length;nt<It;nt++)Y=ct[nt],M.format!==li?lt!==null?st?Tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,Y.width,Y.height,lt,Y.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,J,Y.width,Y.height,0,Y.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Y.width,Y.height,lt,P,Y.data):e.texImage2D(s.TEXTURE_2D,nt,J,Y.width,Y.height,0,lt,P,Y.data)}else if(M.isDataArrayTexture)if(st){if(ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,$t,J,K.width,K.height,K.depth),Tt)if(M.layerUpdates.size>0){let nt=gc(K.width,K.height,M.format,M.type);for(let It of M.layerUpdates){let Xt=K.data.subarray(It*nt/K.data.BYTES_PER_ELEMENT,(It+1)*nt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,It,K.width,K.height,1,lt,P,Xt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,lt,P,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,lt,P,K.data);else if(M.isData3DTexture)st?(ot&&e.texStorage3D(s.TEXTURE_3D,$t,J,K.width,K.height,K.depth),Tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,lt,P,K.data)):e.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,lt,P,K.data);else if(M.isFramebufferTexture){if(ot)if(st)e.texStorage2D(s.TEXTURE_2D,$t,J,K.width,K.height);else{let nt=K.width,It=K.height;for(let Xt=0;Xt<$t;Xt++)e.texImage2D(s.TEXTURE_2D,Xt,J,nt,It,0,lt,P,null),nt>>=1,It>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),K.parentNode!==nt){nt.appendChild(K),u.add(M),nt.onpaint=It=>{let Xt=It.changedElements;for(let mt of u)Xt.includes(mt.image)&&(mt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{let Xt=s.RGBA,mt=s.RGBA,fe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Xt,mt,fe,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ct.length>0){if(st&&ot){let nt=Ft(ct[0]);e.texStorage2D(s.TEXTURE_2D,$t,J,nt.width,nt.height)}for(let nt=0,It=ct.length;nt<It;nt++)Y=ct[nt],st?Tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,lt,P,Y):e.texImage2D(s.TEXTURE_2D,nt,J,lt,P,Y);M.generateMipmaps=!1}else if(st){if(ot){let nt=Ft(K);e.texStorage2D(s.TEXTURE_2D,$t,J,nt.width,nt.height)}Tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,P,K)}else e.texImage2D(s.TEXTURE_2D,0,J,lt,P,K);T(M)&&M.mipmapsAutoUpdate===!0&&v(it),ut.__version=at.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ve(A,M,O){if(M.image.length!==6)return;let it=ae(A,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let at=i.get(j);if(j.version!==at.__version||it===!0){e.activeTexture(s.TEXTURE0+O);let ut=te.getPrimaries(te.workingColorSpace),Z=M.colorSpace===hn?null:te.getPrimaries(M.colorSpace),K=M.colorSpace===hn||ut===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,J=[];for(let mt=0;mt<6;mt++)!lt&&!P?J[mt]=y(M.image[mt],!0,n.maxCubemapSize):J[mt]=P?M.image[mt].image:M.image[mt],J[mt]=Et(M,J[mt]);let Y=J[0],ct=r.convert(M.format,M.colorSpace),st=r.convert(M.type),ot=b(M.internalFormat,ct,st,M.normalized,M.colorSpace),Tt=M.isVideoTexture!==!0,$t=at.__version===void 0||it===!0,nt=j.dataReady,It=w(M,Y);ne(s.TEXTURE_CUBE_MAP,M);let Xt;if(M.isDepthTexture){if(ot=_(M.format===cn,M.type),$t)if(Tt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ot,Y.width,Y.height);else for(let mt=0;mt<6;mt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,Y.width,Y.height,0,ct,st,null)}else if(lt){Tt&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,ot,Y.width,Y.height);for(let mt=0;mt<6;mt++){Xt=J[mt].mipmaps;for(let fe=0;fe<Xt.length;fe++){let We=Xt[fe];M.format!==li?ct!==null?Tt?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe,0,0,We.width,We.height,ct,We.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe,ot,We.width,We.height,0,We.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe,0,0,We.width,We.height,ct,st,We.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe,ot,We.width,We.height,0,ct,st,We.data)}}}else{if(Xt=M.mipmaps,Tt&&$t){Xt.length>0&&It++;let mt=Ft(J[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,It,ot,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(P){Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,J[mt].width,J[mt].height,ct,st,J[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,J[mt].width,J[mt].height,0,ct,st,J[mt].data);for(let fe=0;fe<Xt.length;fe++){let fn=Xt[fe].image[mt].image;Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe+1,0,0,fn.width,fn.height,ct,st,fn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe+1,ot,fn.width,fn.height,0,ct,st,fn.data)}}else{Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct,st,J[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,ct,st,J[mt]);for(let fe=0;fe<Xt.length;fe++){let We=Xt[fe];Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe+1,0,0,ct,st,We.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,fe+1,ot,ct,st,We.image[mt])}}}T(M)&&M.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),at.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,O,it,j,at){let ut=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),K=b(O.internalFormat,ut,Z,O.normalized,O.colorSpace),lt=i.get(M),P=i.get(O);if(P.__renderTarget=M,!lt.__hasExternalTextures){let J=Math.max(1,M.width>>at),Y=Math.max(1,M.height>>at);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,at,K,J,Y,M.depth,0,ut,Z,null):e.texImage2D(j,at,K,J,Y,0,ut,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),rt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,j,P.__webglTexture,0,ge(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,j,P.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function bi(A,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let it=M.depthTexture,j=it&&it.isDepthTexture?it.type:null,at=_(M.stencilBuffer,j),ut=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge(M),at,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge(M),at,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,at,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,A)}else{let it=M.textures;for(let j=0;j<it.length;j++){let at=it[j],ut=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),K=b(at.internalFormat,ut,Z,at.normalized,at.colorSpace);rt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge(M),K,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge(M),K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(A,M,O){let it=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(M.depthTexture);j.__renderTarget=M;let at=it?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||at.width!==M.width||at.height!==M.height)&&(at.width=M.width,at.height=M.height,M.depthTexture.needsUpdate=!0),it?pt(M.depthTexture,0):ft(M.depthTexture,0);let ut=j.__webglTexture,Z=ge(M),K=it?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,lt=M.depthTexture.format===cn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===an)rt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,K,ut,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,lt,K,ut,0);else if(M.depthTexture.format===cn)rt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,K,ut,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,lt,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(A){let M=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let it=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=it}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let it=0;it<6;it++)De(M.__webglFramebuffer[it],A,it);else A.texture.mipmaps.length>0?De(M.__webglFramebuffer[0],A,0):De(M.__webglFramebuffer,A,0);else if(O){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=s.createRenderbuffer(),bi(M.__webglDepthbuffer[it],A,!1);else{let j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,at)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),bi(M.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function de(A,M,O){let it=i.get(A);M!==void 0&&me(it.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&At(A)}function Ie(A){let M=A.texture,O=i.get(A),it=i.get(M);A.addEventListener("dispose",F),C(A);let j=A.textures,at=A.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=M.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let K=0;K<M.mipmaps.length;K++)O.__webglFramebuffer[Z][K]=s.createFramebuffer()}else O.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(M.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)O.__webglFramebuffer[Z]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ut)for(let Z=0,K=j.length;Z<K;Z++){let lt=i.get(j[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&rt(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let K=j[Z];O.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);let lt=r.convert(K.format,K.colorSpace),P=r.convert(K.type),J=b(K.internalFormat,lt,P,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),Y=ge(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,J,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),bi(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),ne(s.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)me(O.__webglFramebuffer[Z][K],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else me(O.__webglFramebuffer[Z],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(M)?v(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let Z=0,K=j.length;Z<K;Z++){let lt=j[Z],P=i.get(lt),J=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,P.__webglTexture),ne(J,lt),me(O.__webglFramebuffer,A,lt,s.COLOR_ATTACHMENT0+Z,J,0),T(lt)&&v(J)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,it.__webglTexture),ne(Z,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)me(O.__webglFramebuffer[K],A,M,s.COLOR_ATTACHMENT0,Z,K);else me(O.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,Z,0);T(M)?v(Z):M.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&At(A)}function U(A){let M=A.textures;for(let O=0,it=M.length;O<it;O++){let j=M[O];if(T(j)&&j.mipmapsAutoUpdate===!0){let at=E(A),ut=i.get(j).__webglTexture;e.bindTexture(at,ut),v(at),e.unbindTexture()}}}let mi=[];function he(A){if(A.samples>0){if(rt(A)===!1){let M=A.textures,O=A.width,it=A.height,j=s.COLOR_BUFFER_BIT,at=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(A),Z=M.length>1;if(Z)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let P=i.get(M[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,O,it,0,0,O,it,j,s.NEAREST),l===!0&&(mi.length=0,mi.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&mi.push(at),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mi))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let P=i.get(M[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,P,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ge(A){return Math.min(n.maxSamples,A.samples)}function rt(A){let M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Et(A,M){let O=A.colorSpace,it=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Zs&&O!==hn&&(te.getTransfer(O)===ue?(it!==li||j!==fi)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",O)),M}function Ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=St,this.setTexture2D=ft,this.setTexture2DArray=_t,this.setTexture3D=Rt,this.setTextureCube=pt,this.rebindTextures=de,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=me,this.useMultisampledRTT=rt,this.dispose=H}function ix(s,t){function e(i,n=hn){let r,a=te.getTransfer(n);if(i===fi)return s.UNSIGNED_BYTE;if(i===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Qa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===sc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ec)return s.BYTE;if(i===ic)return s.SHORT;if(i===As)return s.UNSIGNED_SHORT;if(i===Ja)return s.INT;if(i===Fi)return s.UNSIGNED_INT;if(i===Ci)return s.FLOAT;if(i===zi)return s.HALF_FLOAT;if(i===rc)return s.ALPHA;if(i===ac)return s.RGB;if(i===li)return s.RGBA;if(i===an)return s.DEPTH_COMPONENT;if(i===cn)return s.DEPTH_STENCIL;if(i===to)return s.RED;if(i===eo)return s.RED_INTEGER;if(i===In)return s.RG;if(i===io)return s.RG_INTEGER;if(i===no)return s.RGBA_INTEGER;if(i===br||i===Sr||i===wr||i===Er)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===so||i===ro||i===ao||i===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lo||i===co||i===ho||i===uo||i===fo||i===Tr||i===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lo||i===co)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uo)return r.COMPRESSED_R11_EAC;if(i===fo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Tr)return r.COMPRESSED_RG11_EAC;if(i===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mo||i===go||i===xo||i===yo||i===_o||i===vo||i===Mo||i===bo||i===So||i===wo||i===Eo||i===To||i===Ao||i===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===To)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Io||i===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Co)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lo||i===Do||i===Ar||i===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new di({vertexShader:nx,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends Wi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Ic,m={},y=e.getContextAttributes(),T=null,v=null,E=[],b=[],_=new Gt,w=null,C=null,R=new si;R.viewport=new we;let D=new si;D.viewport=new we;let F=[R,D],k=new Xa,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ft=E[$];return ft===void 0&&(ft=new ys,E[$]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function($){let ft=E[$];return ft===void 0&&(ft=new ys,E[$]=ft),ft.getGripSpace()},this.getHand=function($){let ft=E[$];return ft===void 0&&(ft=new ys,E[$]=ft),ft.getHandSpace()};function X($){let ft=b.indexOf($.inputSource);if(ft===-1)return;let _t=E[ft];_t!==void 0&&(_t.update($.inputSource,$.frame,c||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",et);for(let $=0;$<E.length;$++){let ft=b[$];ft!==null&&(b[$]=null,E[$].disconnect(ft))}I=null,H=null,g.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(T),f=null,d=null,u=null,n=null,v=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),C!==null){let $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",V),n.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Rt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?cn:an,Rt=y.stencil?Zn:Fi);let Ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ut),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new yi(d.textureWidth,d.textureHeight,{format:li,type:fi,depthTexture:new ln(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yi(f.framebufferWidth,f.framebufferHeight,{format:li,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et($){for(let ft=0;ft<$.removed.length;ft++){let _t=$.removed[ft],Rt=b.indexOf(_t);Rt>=0&&(b[Rt]=null,E[Rt].disconnect(_t))}for(let ft=0;ft<$.added.length;ft++){let _t=$.added[ft],Rt=b.indexOf(_t);if(Rt===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=b.length){b.push(_t),Rt=Ut;break}else if(b[Ut]===null){b[Ut]=_t,Rt=Ut;break}if(Rt===-1)break}let pt=E[Rt];pt&&pt.connect(_t)}}function q($,ft){ft===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ft.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let ft=$.near,_t=$.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),k.near=D.near=R.near=ft,k.far=D.far=R.far=_t,(I!==k.near||H!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,H=k.far),k.layers.mask=$.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Rt=$.parent,pt=k.cameras;q(k,Rt);for(let Ut=0;Ut<pt.length;Ut++)q(pt[Ut],Rt);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),Q($,k,Rt)};function Q($,ft,_t){_t===null?$.matrix.copy(ft.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(ft.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ft.projectionMatrix),$.projectionMatrixInverse.copy(ft.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ta*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function($){return m[$]};let tt=null;function St($,ft){if(h=ft.getViewerPose(c||a),p=ft,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Rt=!1;_t.length!==k.cameras.length&&(k.cameras.length=0,Rt=!0);for(let Ct=0;Ct<_t.length;Ct++){let ne=_t[Ct],ae=null;if(f!==null)ae=f.getViewport(ne);else{let Ne=u.getViewSubImage(d,ne);ae=Ne.viewport,Ct===0&&(t.setRenderTargetTextures(v,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(v))}let qt=F[Ct];qt===void 0&&(qt=new si,qt.layers.enable(Ct),qt.viewport=new we,F[Ct]=qt),qt.matrix.fromArray(ne.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ne.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ct===0&&(k.matrix.copy(qt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Rt===!0&&k.cameras.push(qt)}let pt=n.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Ct=u.getDepthInformation(_t[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(Ct,n.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Ct=0;Ct<_t.length;Ct++){let ne=_t[Ct].camera;if(ne){let ae=m[ne];ae||(ae=new or,m[ne]=ae);let qt=u.getCameraImage(ne);ae.sourceTexture=qt}}}}for(let _t=0;_t<E.length;_t++){let Rt=b[_t],pt=E[_t];Rt!==null&&pt!==void 0&&pt.update(Rt,ft,c||a)}tt&&tt($,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),p=null}let Bt=new Hu;Bt.setAnimationLoop(St),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}},rx=new Zt,Ju=new kt;Ju.set(-1,0,0,0,1,0,0,0,1);function ax(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,fc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,y,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),T=y.envMap,v=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ju),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ox(s,t,e,i){let n={},r={};function a(y,T){let v=T.program;i.uniformBlockBinding(y,v,n[y.id])}function o(y,T){let v=n[y.id];v===void 0&&(p(y),v=l(y),n[y.id]=v,y.addEventListener("dispose",g));let E=T.program;i.updateUBOMapping(y,E);let b=t.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let T=s.createBuffer(),v=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,v,E),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(y){let T=n[y.id],v=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let b=0,_=v.length;b<_;b++){let w=v[b];if(Array.isArray(w))for(let C=0,R=w.length;C<R;C++)h(w[C],b,C,E);else h(w,b,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,T,v,E){if(d(y,T,v,E)===!0){let b=y.__offset,_=y.value;if(Array.isArray(_)){let w=0;for(let C=0;C<_.length;C++){let R=_[C],D=x(R,!0);u(R,y.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,y.__data)}}function u(y,T,v){typeof y=="number"||typeof y=="boolean"?T[v]=y:y.isMatrix3?(T[v]=y.elements[0],T[v+1]=y.elements[1],T[v+2]=y.elements[2],T[v+3]=0,T[v+4]=y.elements[3],T[v+5]=y.elements[4],T[v+6]=y.elements[5],T[v+7]=0,T[v+8]=y.elements[6],T[v+9]=y.elements[7],T[v+10]=y.elements[8],T[v+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-v),v):y.toArray(T,v)}function d(y,T,v,E){let b=y.value,_=T+"_"+v;if(Array.isArray(b)){E[_]===void 0&&(E[_]=[]);let w=E[_],C=!1;for(let R=0;R<b.length;R++)f(b[R],w,R)===!0&&(C=!0);return C}return f(b,E,_)}function f(y,T,v){if(T[v]===void 0)return typeof y=="number"||typeof y=="boolean"?T[v]=y:ArrayBuffer.isView(y)?T[v]=y.slice():T[v]=y.clone(),!0;{let E=T[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return T[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let T=y.uniforms,v=0,E=16;for(let _=0,w=T.length;_<w;_++){let C=Array.isArray(T[_])?T[_]:[T[_]];for(let R=0,D=C.length;R<D;R++){let F=C[R],k=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(T[_])||Array.isArray(F.value),H=v;for(let V=0,et=k.length;V<et;V++){let q=k[V],Q=x(q,I),tt=v%E,St=tt%Q.boundary,Bt=tt+St;v+=St,Bt!==0&&E-Bt<Q.storage&&(v+=E-Bt),V===0&&(H=v),v+=Q.storage}let X=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new X((v-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let b=v%E;return b>0&&(v+=E-b),y.__size=v,y.__cache={},this}function x(y,T){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let T=y.target;T.removeEventListener("dispose",g),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function m(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:m}}var lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function cx(){return Ki===null&&(Ki=new on(lx,16,16,In,zi),Ki.name="DFG_LUT",Ki.minFilter=Be,Ki.magFilter=Be,Ki.wrapS=Vi,Ki.wrapT=Vi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Oo=class{constructor(t={}){let{canvas:e=uu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=fi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,g=new Set([no,io,eo]),m=new Set([fi,Fi,As,Zn,ja,Qa]),y=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,b=null,_=[],w=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,F=null,k=null,I=null,H=null;this._outputColorSpace=oi;let X=0,V=0,et=null,q=-1,Q=null,tt=new we,St=new we,Bt=null,$=new yt(0),ft=0,_t=e.width,Rt=e.height,pt=1,Ut=null,Me=null,Ct=new we(0,0,_t,Rt),ne=new we(0,0,_t,Rt),ae=!1,qt=new bn,Ne=new Ia,Ae=!1,Ve=!1,me=new Zt,bi=new L,De=new we,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Ie(){return et===null?pt:1}let U=i;function mi(S,N){return e.getContext(S,N)}let he,ge,rt,be,Et,Ft,A,M,O,it,j,at,ut,Z,K,lt,P,J,Y,ct,st,ot,Tt;try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),U===null){let N="webgl2";if(U=mi(N,S),U===null)throw mi(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(S){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ot("WebGLRenderer: "+S.message),S}function $t(){he=new v0(U),he.init(),st=new ix(U,he),ge=new c0(U,he,t,st),rt=new tx(U,he),ge.reversedDepthBuffer&&d&&rt.buffers.depth.setReversed(!0),k=U.createFramebuffer(),I=U.createFramebuffer(),H=U.createFramebuffer(),be=new S0(U),Et=new kg,Ft=new ex(U,he,rt,Et,ge,st,be),A=new _0(R),M=new Ef(U),ot=new o0(U,M),O=new M0(U,M,be,ot),it=new E0(U,O,M,ot,be),J=new w0(U,ge,Ft),K=new h0(Et),j=new Bg(R,A,he,ge,ot,K),at=new ax(R,Et),ut=new Gg,Z=new Yg(he),P=new a0(R,A,rt,it,p,l),lt=new Qg(R,it,ge),Tt=new ox(U,be,ge,rt),Y=new l0(U,he,be),ct=new b0(U,he,be),be.programs=j.programs,R.capabilities=ge,R.extensions=he,R.properties=Et,R.renderLists=ut,R.shadowMap=lt,R.state=rt,R.info=be}x!==fi&&(C=new A0(x,e.width,e.height,o,n,r));let nt=new Pc(R,U);this.xr=nt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(S){S!==void 0&&(pt=S,this.setSize(_t,Rt,!1))},this.getSize=function(S){return S.set(_t,Rt)},this.setSize=function(S,N,G=!0){if(nt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=S,Rt=N,e.width=Math.floor(S*pt),e.height=Math.floor(N*pt),G===!0&&(e.style.width=S+"px",e.style.height=N+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(_t*pt,Rt*pt).floor()},this.setDrawingBufferSize=function(S,N,G){_t=S,Rt=N,pt=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===fi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,N,G,z){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,N,G,z),rt.viewport(tt.copy(Ct).multiplyScalar(Ie()).round())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,N,G,z){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,N,G,z),rt.scissor(St.copy(ne).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){rt.setScissorTest(ae=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,G=!0){let z=0;if(S){let B=!1;if(et!==null){let dt=et.texture.format;B=g.has(dt)}if(B){let dt=et.texture.type,vt=m.has(dt),ht=P.getClearColor(),xt=P.getClearAlpha(),wt=ht.r,Wt=ht.g,jt=ht.b;vt?(y[0]=wt,y[1]=Wt,y[2]=jt,y[3]=xt,U.clearBufferuiv(U.COLOR,0,y)):(T[0]=wt,T[1]=Wt,T[2]=jt,T[3]=xt,U.clearBufferiv(U.COLOR,0,T))}else z|=U.COLOR_BUFFER_BIT}N&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),P.dispose(),ut.dispose(),Z.dispose(),Ft.dispose(),Et.dispose(),A.dispose(),it.dispose(),O.dispose(),ot.dispose(),Tt.dispose(),j.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",$c),nt.removeEventListener("sessionend",Yc),Un.stop()};function It(S){S.preventDefault(),uc("WebGLRenderer: Context Lost."),D=!0}function Xt(){uc("WebGLRenderer: Context Restored."),D=!1;let S=be.autoReset,N=lt.enabled,G=lt.autoUpdate,z=lt.needsUpdate,B=lt.type;$t(),be.autoReset=S,lt.enabled=N,lt.autoUpdate=G,lt.needsUpdate=z,lt.type=B}function mt(S){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){let N=S.target;N.removeEventListener("dispose",fe),We(N)}function We(S){fn(S),Et.remove(S)}function fn(S){let N=Et.get(S).programs;N!==void 0&&(N.forEach(function(G){j.releaseProgram(G)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,z,B,dt){N===null&&(N=At);let vt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ht=Id(S,N,G,z,B);rt.setMaterial(z,vt);let xt=G.index,wt=1;if(z.wireframe===!0){if(xt=O.getWireframeAttribute(G),xt===void 0)return;wt=2}let Wt=G.drawRange,jt=G.attributes.position,Mt=Wt.start*wt,Qt=(Wt.start+Wt.count)*wt;dt!==null&&(Mt=Math.max(Mt,dt.start*wt),Qt=Math.min(Qt,(dt.start+dt.count)*wt)),xt!==null?(Mt=Math.max(Mt,0),Qt=Math.min(Qt,xt.count)):jt!=null&&(Mt=Math.max(Mt,0),Qt=Math.min(Qt,jt.count));let Ue=Qt-Mt;if(Ue<0||Ue===1/0)return;ot.setup(B,z,ht,G,xt);let ve,xe=Y;if(xt!==null&&(ve=M.get(xt),xe=ct,xe.setIndex(ve)),B.isMesh)z.wireframe===!0?(rt.setLineWidth(z.wireframeLinewidth*Ie()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(B.isLine){let ti=z.linewidth;ti===void 0&&(ti=1),rt.setLineWidth(ti*Ie()),B.isLineSegments?xe.setMode(U.LINES):B.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else B.isPoints?xe.setMode(U.POINTS):B.isSprite&&xe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(he.get("WEBGL_multi_draw"))xe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let ti=B._multiDrawStarts,bt=B._multiDrawCounts,ai=B._multiDrawCount,ce=xt?M.get(xt).bytesPerElement:1,Fn=Et.get(z).currentProgram.getUniforms();for(let ei=0;ei<ai;ei++)Fn.setValue(U,"_gl_DrawID",ei),xe.render(ti[ei]/ce,bt[ei])}else if(B.isInstancedMesh)xe.renderInstances(Mt,Ue,B.count);else if(G.isInstancedBufferGeometry){let ti=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,ti);xe.renderInstances(Mt,Ue,bt)}else xe.render(Mt,Ue)};function Xc(S,N,G,z){F!==null&&S.isNodeMaterial&&F.setObject(z,S),Ae===!0&&K.setState(S,G,!1),S.transparent===!0&&S.side===Yi&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,Bs(S,N,z),S.side=Rn,S.needsUpdate=!0,Bs(S,N,z),S.side=Yi):Bs(S,N,z)}this.compile=function(S,N,G=null){G===null&&(G=S),F!==null&&F.renderStart(S,N,G),b=Z.get(G),b.init(N),w.push(b),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),Ve=this.localClippingEnabled,Ae=K.init(this.clippingPlanes,Ve),Ae===!0&&K.setGlobalState(this.clippingPlanes,N),F!==null&&lt.render(b.state.shadowsArray,G,N);let z=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let dt=B.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ht=dt[vt];Xc(ht,G,N,B),z.add(ht)}else Xc(dt,G,N,B),z.add(dt)}),b=w.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(S,N,G=null){let z=this.compile(S,N,G);return new Promise(B=>{function dt(){if(z.forEach(function(vt){let xt=Et.get(vt).currentProgram;(xt===void 0||xt.isReady())&&z.delete(vt)}),z.size===0){B(S);return}setTimeout(dt,10)}he.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let cl=null;function Rd(S){cl&&cl(S)}function $c(){Un.stop()}function Yc(){Un.start()}let Un=new Hu;Un.setAnimationLoop(Rd),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(S){cl=S,nt.setAnimationLoop(S),S===null?Un.stop():Un.start()},nt.addEventListener("sessionstart",$c),nt.addEventListener("sessionend",Yc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(S,N);let G=nt.enabled===!0&&nt.isPresenting===!0,z=C!==null&&(et===null||G)&&C.begin(R,et);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,et),b=Z.get(S,w.length),b.init(N),b.state.textureUnits=Ft.getTextureUnits(),w.push(b),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Ne.setFromArrayCamera(N):qt.setFromProjectionMatrix(me,wi,N.reversedDepth),Ve=this.localClippingEnabled,Ae=K.init(this.clippingPlanes,Ve),E=ut.get(S,_.length),E.init(),_.push(E),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&hl(vt,N,-1/0,R.sortObjects)}hl(S,N,0,R.sortObjects),E.finish(),F!==null&&F.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(Ut,Me),de=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,de&&P.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&K.beginShadows();let B=b.state.shadowsArray;if(lt.render(B,S,N),Ae===!0&&K.endShadows(),(z&&C.hasRenderPass())===!1){let vt=E.opaque,ht=E.transmissive;if(b.setupLights(),N.isArrayCamera){let xt=N.cameras;if(ht.length>0)for(let wt=0,Wt=xt.length;wt<Wt;wt++){let jt=xt[wt];Kc(vt,ht,S,jt)}de&&P.render(S);for(let wt=0,Wt=xt.length;wt<Wt;wt++){let jt=xt[wt];Zc(E,S,jt,jt.viewport)}}else ht.length>0&&Kc(vt,ht,S,N),de&&P.render(S),Zc(E,S,N)}et!==null&&V===0&&(Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et)),z&&C.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),ot.resetDefaultState(),q=-1,Q=null,w.pop(),w.length>0?(b=w[w.length-1],Ft.setTextureUnits(b.state.textureUnits),Ae===!0&&K.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,F!==null&&F.renderEnd()};function hl(S,N,G,z){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){let vt=N.isArrayCamera?Ne:qt;if(!S.frustumCulled||S.intersectsFrustum(vt)){z&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let ht=it.update(S),xt=S.material;xt.visible&&E.push(S,ht,xt,G,De.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){let vt=N.isArrayCamera?Ne:qt;if(!S.frustumCulled||S.intersectsFrustum(vt)){let ht=it.update(S),xt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),De.copy(ht.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(xt)){let wt=ht.groups;for(let Wt=0,jt=wt.length;Wt<jt;Wt++){let Mt=wt[Wt],Qt=xt[Mt.materialIndex];Qt&&Qt.visible&&E.push(S,ht,Qt,G,De.z,Mt,N)}}else xt.visible&&E.push(S,ht,xt,G,De.z,null,N)}}}let dt=S.children;for(let vt=0,ht=dt.length;vt<ht;vt++)hl(dt[vt],N,G,z)}function Zc(S,N,G,z){let{opaque:B,transmissive:dt,transparent:vt}=S;b.setupLightsView(G),Ae===!0&&K.setGlobalState(R.clippingPlanes,G),z&&rt.viewport(tt.copy(z)),B.length>0&&Gr(B,N,G),dt.length>0&&Gr(dt,N,G),vt.length>0&&Gr(vt,N,G),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Kc(S,N,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Mt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new yi(1,1,{generateMipmaps:!0,type:Mt?zi:fi,minFilter:vi,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let dt=b.state.transmissionRenderTarget[z.id],vt=z.viewport||tt;dt.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ht=R.getRenderTarget(),xt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor($),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),de&&P.render(G);let Wt=R.toneMapping;R.toneMapping=Zi;let jt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Ae===!0&&K.setGlobalState(R.clippingPlanes,z),Gr(S,G,z),Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Qt=0,Ue=N.length;Qt<Ue;Qt++){let ve=N[Qt],{object:xe,geometry:ti,material:bt,group:ai}=ve;if(bt.side===Yi&&xe.layers.test(z.layers)){let ce=bt.side;bt.side=je,bt.needsUpdate=!0,Jc(xe,G,z,ti,bt,ai),bt.side=ce,bt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt))}R.setRenderTarget(ht,xt,wt),R.setClearColor($,ft),jt!==void 0&&(z.viewport=jt),R.toneMapping=Wt}function Gr(S,N,G){let z=N.isScene===!0?N.overrideMaterial:null;for(let B=0,dt=S.length;B<dt;B++){let vt=S[B],{object:ht,geometry:xt,group:wt}=vt,Wt=vt.material;Wt.allowOverride===!0&&z!==null&&(Wt=z),ht.layers.test(G.layers)&&Jc(ht,N,G,xt,Wt,wt)}}function Jc(S,N,G,z,B,dt){F!==null&&B.isNodeMaterial&&F.setObject(S,B),S.onBeforeRender(R,N,G,z,B,dt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(R,N,G,z,S,dt),B.transparent===!0&&B.side===Yi&&B.forceSinglePass===!1?(B.side=je,B.needsUpdate=!0,R.renderBufferDirect(G,N,z,B,S,dt),B.side=Rn,B.needsUpdate=!0,R.renderBufferDirect(G,N,z,B,S,dt),B.side=Yi):R.renderBufferDirect(G,N,z,B,S,dt),S.onAfterRender(R,N,G,z,B,dt)}function jc(S){let N=0;for(let G of S)G.texture!==null&&N++;return N}function Bs(S,N,G){N.isScene!==!0&&(N=At);let z=Et.get(S),B=b.state.lights,dt=b.state.shadowsArray,vt=B.state.version,ht=j.getParameters(S,B.state,dt,N,G,b.state.lightProbeGridArray),xt=j.getProgramCacheKey(ht),wt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Wt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=A.get(S.envMap||z.environment,Wt),z.envMapRotation=z.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",fe),wt=new Map,z.programs=wt,z.programVariants=new Map);let jt=wt.get(xt);if(jt!==void 0){if(z.currentProgram===jt&&z.lightsStateVersion===vt)return th(S,ht),jt}else ht.uniforms=j.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,G,ht),S.onBeforeCompile(ht,R),jt=j.acquireProgram(ht,xt),wt.set(xt,jt),z.uniforms=ht.uniforms;let Mt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=K.uniform),th(S,ht),z.needsLights=Ld(S),z.lightsStateVersion=vt,z.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.sunLights.value=B.state.sun,Mt.sunLightShadows.value=B.state.sunShadow,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.sunShadowMatrix.value=B.state.sunShadowMatrix,Mt.sunShadowCascade.value=B.state.sunShadowCascade,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),z.numLightProbeGrids=jc(b.state.lightProbeGridArray),z.currentProgram=jt,z.uniformsList=null,jt}function Cd(S,N,G,z,B){let dt=Et.get(S),vt=dt.currentProgram.id+","+z+","+B,ht=dt.programVariants.get(vt);return ht===void 0?(ht=Bs(S,N,G),dt.programVariants.set(vt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=z,dt.toneMapping=B),ht}function Qc(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Cs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function th(S,N){let G=Et.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Id(S,N,G,z,B){N.isScene!==!0&&(N=At),Ft.resetTextureUnits();let dt=N.fog,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ht=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,wt=A.get(z.envMap||vt,xt),Wt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,jt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Mt=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,Ue=!!G.morphAttributes.color,ve=Zi;z.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ve=R.toneMapping);let xe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ti=xe!==void 0?xe.length:0,bt=Et.get(z),ai=b.state.lights;if(Ae===!0&&(Ve===!0||S!==Q)){let Re=S===Q&&z.id===q;K.setState(z,S,Re)}let ce=!1,Fn=!1;z.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==ai.state.version||B.isBatchedMesh&&bt.batching===!1||!B.isBatchedMesh&&bt.batching===!0||B.isBatchedMesh&&bt.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&bt.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&bt.instancing===!1||!B.isInstancedMesh&&bt.instancing===!0||B.isSkinnedMesh&&bt.skinning===!1||!B.isSkinnedMesh&&bt.skinning===!0||B.isInstancedMesh&&bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&bt.instancingMorph===!1&&B.morphTexture!==null||bt.envMap!==wt||z.fog===!0&&bt.fog!==dt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==K.numPlanes||bt.numIntersection!==K.numIntersection)||bt.vertexAlphas!==Wt||bt.vertexTangents!==jt||bt.morphTargets!==Mt||bt.morphNormals!==Qt||bt.morphColors!==Ue||bt.morphTargetsCount!==ti||bt.numLightProbeGrids!==jc(b.state.lightProbeGridArray)?ce=!0:(bt.outputColorSpace!==ht||bt.toneMapping!==ve)&&(Fn=!0):(ce=!0,bt.__version=z.version);let ei=bt.currentProgram;(ce===!0||Fn===!0)&&(ei=Fn===!0?Cd(z,N,B,ht,ve):Bs(z,N,B),F&&z.isNodeMaterial&&F.onUpdateProgram(z,ei,bt));let Vr=!1,pn=!1,zn=!1,re=ei.getUniforms(),Ke=bt.uniforms;if(rt.useProgram(ei.program)&&(Vr=!0,pn=!0,zn=!0),z.id!==q&&(q=z.id,pn=!0),Vr||Q!==S){rt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),re.setValue(U,"projectionMatrix",S.projectionMatrix),re.setValue(U,"viewMatrix",S.matrixWorldInverse);let qe=re.map.cameraPosition;qe!==void 0&&qe.setValue(U,bi.setFromMatrixPosition(S.matrixWorld)),ge.logarithmicDepthBuffer&&re.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,pn=!0,zn=!0)}if(bt.needsLights&&(ai.state.sunShadowMap.length>0&&re.setValue(U,"sunShadowMap",ai.state.sunShadowMap,Ft),ai.state.directionalShadowMap.length>0&&re.setValue(U,"directionalShadowMap",ai.state.directionalShadowMap,Ft),ai.state.spotShadowMap.length>0&&re.setValue(U,"spotShadowMap",ai.state.spotShadowMap,Ft),ai.state.pointShadowMap.length>0&&re.setValue(U,"pointShadowMap",ai.state.pointShadowMap,Ft)),B.isSkinnedMesh){re.setOptional(U,B,"bindMatrix"),re.setOptional(U,B,"bindMatrixInverse");let Re=B.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),re.setValue(U,"boneTexture",Re.boneTexture,Ft))}B.isBatchedMesh&&(re.setOptional(U,B,"batchingTexture"),re.setValue(U,"batchingTexture",B._matricesTexture,Ft),re.setOptional(U,B,"batchingIdTexture"),re.setValue(U,"batchingIdTexture",B._indirectTexture,Ft),re.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&re.setValue(U,"batchingColorTexture",B._colorsTexture,Ft));let Pi=G.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&J.update(B,G,ei),(pn||bt.receiveShadow!==B.receiveShadow)&&(bt.receiveShadow=B.receiveShadow,re.setValue(U,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=cx()),pn){if(re.setValue(U,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&Pd(Ke,zn),dt&&z.fog===!0&&at.refreshFogUniforms(Ke,dt),at.refreshMaterialUniforms(Ke,z,pt,Rt,b.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.numLightProbeGrids>0){let Re=v,qe=0;for(let ji of b.state.lightProbeGridArray)ji.texture!==null&&(Re.textures[qe]=ji.texture,Re.min[qe]=ji.boundingBox.min,Re.max[qe]=ji.boundingBox.max,Re.resolution[qe]=ji.resolution,qe++);for(let ji in Re)Re[ji].length=qe;Ke.probesSH.value=Re.textures,Ke.probesMin.value=Re.min,Ke.probesMax.value=Re.max,Ke.probesResolution.value=Re.resolution}Cs.upload(U,Qc(bt),Ke,Ft)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cs.upload(U,Qc(bt),Ke,Ft),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(U,"center",B.center),re.setValue(U,"modelViewMatrix",B.modelViewMatrix),re.setValue(U,"normalMatrix",B.normalMatrix),re.setValue(U,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){let Re=z.uniformsGroups;for(let qe=0,ji=Re.length;qe<ji;qe++){let ih=Re[qe];Tt.update(ih,ei),Tt.bind(ih,ei)}}return ei}function Pd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(S,N,G){let z=Et.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Et.get(S.texture).__webglTexture=N,Et.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let G=Et.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){et=S,X=N,V=G;let z=null,B=!1,dt=!1;if(S){let ht=Et.get(S);if(ht.__useDefaultFramebuffer!==void 0){rt.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),tt.copy(S.viewport),St.copy(S.scissor),Bt=S.scissorTest,rt.viewport(tt),rt.scissor(St),rt.setScissorTest(Bt),q=-1;return}else if(ht.__webglFramebuffer===void 0)Ft.setupRenderTarget(S);else if(ht.__hasExternalTextures)Ft.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Wt=S.depthTexture;if(ht.__boundDepthTexture!==Wt){if(Wt!==null&&Et.has(Wt)&&(S.width!==Wt.image.width||S.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(S)}}let xt=S.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let wt=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[N])?z=wt[N][G]:z=wt[N],B=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?z=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?z=wt[G]:z=wt,tt.copy(S.viewport),St.copy(S.scissor),Bt=S.scissorTest}else tt.copy(Ct).multiplyScalar(pt).floor(),St.copy(ne).multiplyScalar(pt).floor(),Bt=ae;if(G!==0&&(z=k),rt.bindFramebuffer(U.FRAMEBUFFER,z)&&rt.drawBuffers(S,z),rt.viewport(tt),rt.scissor(St),rt.setScissorTest(Bt),B){let ht=Et.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,G)}else if(dt){let ht=N;for(let xt=0;xt<S.textures.length;xt++){let wt=Et.get(S.textures[xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xt,wt.__webglTexture,G,ht)}}else if(S!==null&&G!==0){let ht=Et.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,G)}q=-1};function eh(S){let N=Et.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ge.textureFormatReadable(S.format),N.__typeReadable=ge.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,G,z,B,dt,vt,ht=0){if(!(S&&S.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt){rt.bindFramebuffer(U.FRAMEBUFFER,xt);try{let wt=S.textures[ht],Wt=wt.format,jt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let Mt=eh(wt);if(Mt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-z&&G>=0&&G<=S.height-B&&U.readPixels(N,G,z,B,st.convert(Wt),st.convert(jt),dt)}finally{let wt=et!==null?Et.get(et).__webglFramebuffer:null;rt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,z,B,dt,vt,ht=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt],Array.isArray(xt)&&(xt=xt[0])),xt)if(N>=0&&N<=S.width-z&&G>=0&&G<=S.height-B){rt.bindFramebuffer(U.FRAMEBUFFER,xt);let wt=S.textures[ht],Wt=wt.format,jt=wt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let Mt=eh(wt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(N,G,z,B,st.convert(Wt),st.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ue=et!==null?Et.get(et).__webglFramebuffer:null;rt.bindFramebuffer(U.FRAMEBUFFER,Ue);let ve=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await fu(U,ve,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Qt),U.deleteSync(ve),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,G=0){let z=Math.pow(2,-G),B=Math.floor(S.image.width*z),dt=Math.floor(S.image.height*z),vt=N!==null?N.x:0,ht=N!==null?N.y:0;Ft.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,vt,ht,B,dt),rt.unbindTexture()},this.copyTextureToTexture=function(S,N,G=null,z=null,B=0,dt=0){let vt,ht,xt,wt,Wt,jt,Mt,Qt,Ue,ve=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(G!==null)vt=G.max.x-G.min.x,ht=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Wt=G.min.y,jt=G.isBox3?G.min.z:0;else{let re=Math.pow(2,-B);vt=Math.floor(ve.width*re),ht=Math.floor(ve.height*re),S.isDataArrayTexture?xt=ve.depth:S.isData3DTexture?xt=Math.floor(ve.depth*re):xt=1,wt=0,Wt=0,jt=0}z!==null?(Mt=z.x,Qt=z.y,Ue=z.z):(Mt=0,Qt=0,Ue=0);let xe=st.convert(N.format),ti=st.convert(N.type),bt;N.isData3DTexture?(Ft.setTexture3D(N,0),bt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ft.setTexture2DArray(N,0),bt=U.TEXTURE_2D_ARRAY):(Ft.setTexture2D(N,0),bt=U.TEXTURE_2D),rt.activeTexture(U.TEXTURE0),rt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),rt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),rt.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let ai=rt.getParameter(U.UNPACK_ROW_LENGTH),ce=rt.getParameter(U.UNPACK_IMAGE_HEIGHT),Fn=rt.getParameter(U.UNPACK_SKIP_PIXELS),ei=rt.getParameter(U.UNPACK_SKIP_ROWS),Vr=rt.getParameter(U.UNPACK_SKIP_IMAGES);rt.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),rt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),rt.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),rt.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),rt.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);let pn=S.isDataArrayTexture||S.isData3DTexture,zn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let re=Et.get(S),Ke=Et.get(N),Pi=Et.get(re.__renderTarget),Re=Et.get(Ke.__renderTarget);rt.bindFramebuffer(U.READ_FRAMEBUFFER,Pi.__webglFramebuffer),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let qe=0;qe<xt;qe++)pn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,B,jt+qe),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(N).__webglTexture,dt,Ue+qe)),U.blitFramebuffer(wt,Wt,wt+vt,Wt+ht,Mt,Qt,Mt+vt,Qt+ht,U.DEPTH_BUFFER_BIT,U.NEAREST);rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||Et.has(S)){let re=Et.get(S),Ke=Et.get(N);rt.bindFramebuffer(U.READ_FRAMEBUFFER,I),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Pi=0;Pi<xt;Pi++)pn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,re.__webglTexture,B,jt+Pi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,re.__webglTexture,B),zn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ke.__webglTexture,dt,Ue+Pi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ke.__webglTexture,dt),B!==0?U.blitFramebuffer(wt,Wt,wt+vt,Wt+ht,Mt,Qt,Mt+vt,Qt+ht,U.COLOR_BUFFER_BIT,U.NEAREST):zn?U.copyTexSubImage3D(bt,dt,Mt,Qt,Ue+Pi,wt,Wt,vt,ht):U.copyTexSubImage2D(bt,dt,Mt,Qt,wt,Wt,vt,ht);rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else zn?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(bt,dt,Mt,Qt,Ue,vt,ht,xt,xe,ti,ve.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,dt,Mt,Qt,Ue,vt,ht,xt,xe,ve.data):U.texSubImage3D(bt,dt,Mt,Qt,Ue,vt,ht,xt,xe,ti,ve):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,Mt,Qt,vt,ht,xe,ti,ve.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,Mt,Qt,ve.width,ve.height,xe,ve.data):U.texSubImage2D(U.TEXTURE_2D,dt,Mt,Qt,vt,ht,xe,ti,ve);rt.pixelStorei(U.UNPACK_ROW_LENGTH,ai),rt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce),rt.pixelStorei(U.UNPACK_SKIP_PIXELS,Fn),rt.pixelStorei(U.UNPACK_SKIP_ROWS,ei),rt.pixelStorei(U.UNPACK_SKIP_IMAGES,Vr),dt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(bt),rt.unbindTexture()},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&Ft.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){X=0,V=0,et=null,rt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function ju(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ge=class{constructor(t=Date.now()){this.f=ju(t)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.f()*t.length)]}chance(t){return this.f()<t}shuffle(t){for(let e=t.length-1;e>0;e--){let i=Math.floor(this.f()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}};function Ps(s){let t=ju(s),e=new Uint8Array(256);for(let a=0;a<256;a++)e[a]=a;for(let a=255;a>0;a--){let o=Math.floor(t()*(a+1)),l=e[a];e[a]=e[o],e[o]=l}let i=new Uint8Array(512);for(let a=0;a<512;a++)i[a]=e[a&255];let n=(a,o,l)=>{switch(a&7){case 0:return o+l;case 1:return-o+l;case 2:return o-l;case 3:return-o-l;case 4:return o;case 5:return-o;case 6:return l;default:return-l}},r=a=>a*a*a*(a*(a*6-15)+10);return(a,o)=>{let l=Math.floor(a),c=Math.floor(o),h=l&255,u=c&255;a-=l,o-=c;let d=r(a),f=r(o),p=i[h]+u,x=i[h+1]+u,g=n(i[p],a,o),m=n(i[x],a-1,o),y=n(i[p+1],a,o-1),T=n(i[x+1],a-1,o-1),v=g+d*(m-g),E=y+d*(T-y);return v+f*(E-v)}}function Ho(s,t,e,i=4,n=2,r=.5){let a=0,o=1,l=1,c=0;for(let h=0;h<i;h++)a+=s(t*l,e*l)*o,c+=o,o*=r,l*=n;return a/c}function un(s,t){let e=Math.imul(s,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var Qu=5.882352941176471,td=3.4,ki=["Rekrut","Gefreiter","Zugsf\xFChrer","Wachtmeister","Leutnant","Hauptmann"],hx=["Rekr.","Gfr.","Zgf.","Wm.","Lt.","Hptm."],Ls=[100,110,120,135,150,170],Dr=[0,3,5,7,10,14],Ln={schwer:{name:"Schwere Waffen",icon:"\u{1F4A5}",titles:["Kanonier","M\xF6rsersch\xFCtze","Artillerist"],desc:"Bumst ordentlich: Panzerfaust, Granatwerfer, MG und am End die Haubitze."},pionier:{name:"Pioniere",icon:"\u{1F9E8}",titles:["Pionier","Sprengmeister","Saboteur"],desc:"Kuhfladen-Minen, Sprengladungen, Splittergranaten und der Obstler-Flammenwerfer."},sani:{name:"Sanit\xE4t",icon:"\u{1FA79}",titles:["Sanit\xE4ter","Feldsanit\xE4ter","Sanit\xE4tsmeister"],desc:"Flickt die eigenen Leut z'samm \u2013 und schmei\xDFt mit G\xFClle."},jaeger:{name:"J\xE4ger",icon:"\u{1F3AF}",titles:["J\xE4ger","Scharfsch\xFCtze","Jagdkommando"],desc:"Pr\xE4zise und hinterfotzig: Jagdflinte, Scharfsch\xFCtzengewehr, Fallschirm, Abfangj\xE4ger."}},ux=["Held","Legende"];function Dn(s){return s.tier===0?"Rekrut":s.tier>=4?ux[s.tier-4]:Ln[s.branch].titles[s.tier-1]}function ed(s){return`${hx[s.tier]} ${s.name}`}var oe={kopfnuss:{name:"Kopfnuss",icon:"\u{1F42E}",type:"melee",dmg:22,dmgStier:30,range:2.3,knock:8,desc:"H\xF6rner voraus! Stiere hauen fester zu. Ideal, um wen ins Wasser zu schupfen."},pistole:{name:"Dienstpistole",icon:"\u{1F52B}",type:"hitscan",shots:2,dmg:9,spread:1.2,range:45,interval:.28,desc:"Klein, aber gemein. Geht nie aus."},gewehr:{name:"Sturmgewehr",icon:"\u{1FA96}",type:"hitscan",shots:5,dmg:8,spread:1.8,range:60,interval:.12,desc:"F\xFCnf Schuss, a bissl Streuung, viel Gf\xFChl."},mg:{name:"Maschinengewehr",icon:"\u2699\uFE0F",type:"hitscan",shots:14,dmg:5,spread:3.2,range:55,interval:.075,desc:"Rattert wia a Traktor im Winter."},flinte:{name:"Jagdflinte",icon:"\u{1F98C}",type:"hitscan",shots:1,pellets:8,dmg:6,spread:6,range:22,interval:0,desc:"Schrot auf kurze Distanz. Da J\xE4ger sagt: Waidmannsheil!"},sniper:{name:"Scharfsch\xFCtzengewehr",icon:"\u{1F3AF}",type:"hitscan",shots:1,dmg:48,spread:0,range:130,interval:0,zoom:!0,desc:"Ein Schuss, ein Treffer. Kopftreffer tun extra weh."},granate:{name:"Handgranate",icon:"\u{1F4A3}",type:"ballistic",speed:19,fuse:3,bounce:.42,radius:3.6,dmg:42,wind:.35,mesh:"granate",throw:!0,desc:"Drei Sekunden Z\xFCnder. H\xFCpft gern no a bissl."},splitter:{name:"Splittergranate",icon:"\u{1F386}",type:"ballistic",speed:18,fuse:2.5,bounce:.4,radius:3,dmg:26,wind:.35,cluster:{n:5,radius:2.4,dmg:19},mesh:"granate",throw:!0,desc:"Zerplatzt in f\xFCnf kleine Gemeinheiten."},guelle:{name:"G\xFCllebombe",icon:"\u{1F4A9}",type:"ballistic",speed:17,fuse:2.5,bounce:.3,radius:2.6,dmg:12,wind:.4,gas:{radius:4.6,dmg:10,turns:3},mesh:"guelle",throw:!0,desc:"A Fassl frische G\xFClle. Die Wolke stinkt drei Runden lang und frisst Lebenspunkte."},heiligekuh:{name:"Heilige-Kuh-Bombe",icon:"\u{1F514}",type:"ballistic",speed:14,fuse:4,bounce:.25,radius:9,dmg:95,wind:.2,mesh:"glocke",throw:!0,desc:"A riesige Kuhglocke voller Sprengstoff. Heilig is do gar nix."},panzerfaust:{name:"Panzerfaust",icon:"\u{1F680}",type:"ballistic",speed:34,impact:!0,radius:3.8,dmg:50,wind:1,mesh:"rakete",tube:!0,desc:"Explodiert beim Aufschlag. Da Wind mag sie besonders."},moerser:{name:"Granatwerfer",icon:"\u{1F387}",type:"ballistic",speed:27,impact:!0,radius:4.8,dmg:58,wind:.8,mesh:"moerser",tube:!0,minPitch:35,desc:"Hoher Bogen, gro\xDFes Loch. \xDCber H\xFCgel dr\xFCber schie\xDFen!"},mine:{name:"Kuhfladen-Mine",icon:"\u{1F7E4}",type:"place",radius:3.4,dmg:45,desc:"Schaut aus wia a Kuhfladen. Is aber kana. Scharf ab der n\xE4chsten Runde."},tnt:{name:"Sprengladung",icon:"\u{1F9E8}",type:"place",fuse:3,radius:5.5,dmg:65,desc:"Hinlegen, weglaufen. Drei Sekunden, dann gibt's a Loch.",endsTurn:!0},flammen:{name:"Obstler-Flammenwerfer",icon:"\u{1F525}",type:"cone",range:8,angle:24,dmg:34,desc:"Selbstbrand vom Onkel, 80 Prozent. Brennt besser als er schmeckt."},jause:{name:"Brettljause",icon:"\u{1F968}",type:"heal",amount:40,desc:"Speck, Kas und a Pfefferoni: +40 Lebenspunkte f\xFCr den Sch\xFCtzen."},lazarett:{name:"Feldlazarett",icon:"\u{1F3E5}",type:"heal",amount:30,area:9,desc:"Heilt alle eigenen Leut im Umkreis um 30."},sprung:{name:"Fallschirmsprung",icon:"\u{1FA82}",type:"jump",range:32,endsTurn:!1,desc:"Zielpunkt antippen und hinfliegen. Danach darfst no schie\xDFen."},haubitze:{name:"Haubitzenfeuer",icon:"\u{1F3AF}",type:"strike",shells:4,scatter:4,radius:4.5,dmg:45,desc:"Zielpunkt auf der Karte w\xE4hlen. Vier Granaten vom Himmel."},jet:{name:"Abfangj\xE4ger",icon:"\u2708\uFE0F",type:"strike",bombs:6,spacing:3,radius:3.6,dmg:38,dudChance:.06,desc:"Bombenteppich entlang der Blickrichtung. Falls er \xFCberhaupt startet."}},Vo=["kopfnuss","pistole","gewehr","mg","flinte","sniper","granate","splitter","guelle","panzerfaust","moerser","heiligekuh","mine","tnt","flammen","jause","lazarett","sprung","haubitze","jet"],Go={rekrut:{gewehr:2,granate:2},schwer:[{gewehr:3,granate:2,panzerfaust:2},{gewehr:3,granate:2,panzerfaust:3,moerser:2,mg:2},{gewehr:3,granate:3,panzerfaust:3,moerser:3,mg:3,haubitze:1}],pionier:[{gewehr:2,granate:3,mine:2},{gewehr:2,granate:3,mine:3,tnt:2,splitter:2},{gewehr:3,granate:3,mine:3,tnt:3,splitter:3,flammen:2}],sani:[{gewehr:2,granate:2,jause:2,guelle:1},{gewehr:2,granate:2,jause:3,guelle:2,lazarett:1},{gewehr:3,granate:2,jause:3,guelle:3,lazarett:2,splitter:2}],jaeger:[{flinte:3,sniper:1,granate:2},{flinte:3,sniper:3,granate:2,sprung:2},{flinte:3,sniper:4,granate:2,sprung:3,mine:2,jet:1}],held:{gewehr:3,granate:3,panzerfaust:3,moerser:2,mg:2,sniper:2,splitter:2,jause:2,sprung:2,mine:2},legende:{gewehr:3,granate:3,panzerfaust:4,moerser:3,mg:2,sniper:3,splitter:2,jause:2,sprung:2,mine:2,heiligekuh:1,haubitze:1,jet:1}};function Wo(s){let t;return s.tier===0?t=Go.rekrut:s.tier===4?t=Go.held:s.tier===5?t=Go.legende:t=Go[s.branch][s.tier-1],{kopfnuss:-1,pistole:-1,...t}}var Lc=[["granate",2],["panzerfaust",1],["moerser",1],["splitter",1],["sniper",1],["mine",1],["guelle",1],["sprung",1],["gewehr",2],["flammen",1],["jet",1],["heiligekuh",1]],Bi=[{id:"wien",name:"Wiener Grantlergarde",short:"Wien",color:"#e53935",motto:"Passt scho. Oder ah ned."},{id:"noe",name:"Weinviertler Landwehr",short:"N\xD6",color:"#1e88e5",motto:"A Achterl geht imma."},{id:"ooe",name:"M\xFChlviertler Mostsch\xE4dln",short:"O\xD6",color:"#fb8c00",motto:"Most is a Grundnahrungsmittel."},{id:"stmk",name:"Steirische Kern\xF6lkompanie",short:"Stmk",color:"#43a047",motto:"Gl\xFCck auf und Kern\xF6l drauf!"},{id:"sbg",name:"Salzburger Nockerl-Kommando",short:"Sbg",color:"#ec407a",motto:"S\xFC\xDF, aber hinterfotzig."},{id:"tirol",name:"Tiroler Almj\xE4ger",short:"Tirol",color:"#00acc1",motto:"Zruck geht's nur bergab."},{id:"vbg",name:"Gsiberger K\xE4skn\xF6pfle-Korps",short:"Vbg",color:"#fdd835",motto:"Schaffa, schaffa, Watschn verteila."},{id:"ktn",name:"K\xE4rntner Kasnudl-Kavallerie",short:"Ktn",color:"#8e24aa",motto:"Z'erst gsungen, dann gschossn."},{id:"bgld",name:"Seewinkler Weinbrigade",short:"Bgld",color:"#8d6e63",motto:"Flach is des Land, scharf is da Stier."}],pi=s=>Bi.find(t=>t.id===s)||Bi[0],id=["Resi","Mitzi","Burgi","Gretl","Liesl","Vroni","Zenzi","Kathi","Fanny","Rosl","Leni","Traudl","Hermine","Gusti","Mali","Moni","Steffi","Elfi","Erna","Frieda","Hedi","Lotti","Waltraud","Christl","Anni","Wetti"],nd=["Ferdl","Sepp","Schorsch","Wastl","Toni","Franzl","Gustl","Hias","Pepi","Rudi","Bertl","Karli","Lois","Poldi","Hansi","Ernstl","Fredl","Willi","Bartl","Sigi","Mundl","Kurtl","Joschi","Edi","Heinzi"],sd=["fleckvieh","holstein","pinzgauer","grauvieh","braunvieh"],rd=["schwarz","braunvieh","grauvieh","fleckvieh"],Ds={alm:{name:"Hochalm",amp:12,freq:2,oct:5,base:1.6,pow:1.4,peaks:[{x:.22,z:-.18,h:8,r:.15}],colors:{seabed:"#5d6b4a",sand:"#cdb98a",grass1:"#4c8a2c",grass2:"#7aae45",rock:"#86827a",snow:"#f2f5f7",dirt:"#4a3626"},snowLine:17,water:"#2a7aa6",waterOpacity:.8,sky:{top:"#2f74d0",horizon:"#cfe4f5"},fog:[90,470],sun:{color:"#fff1d6",intensity:2.7,elev:48,azim:40},hemi:{sky:"#cfe8ff",ground:"#4f6236",intensity:1.15},props:{pine:55,broad:12,rock:20,bale:8,silo:6,stadl:2,marterl:2,grass:700,flowers:260},mountains:!0},weinberg:{name:"Weinberg",amp:9,freq:1.7,oct:4,base:1.8,pow:1.2,terrace:1.4,terraceSharp:.6,colors:{seabed:"#6a6550",sand:"#d8c48e",grass1:"#6f9334",grass2:"#97ae4c",rock:"#9b8a6e",snow:"#ffffff",dirt:"#5a4030"},snowLine:99,water:"#3a7f8f",waterOpacity:.82,sky:{top:"#3b7bd6",horizon:"#f3dfc0"},fog:[90,460],sun:{color:"#ffdcae",intensity:2.7,elev:30,azim:-50},hemi:{sky:"#ffe9cc",ground:"#5f5a36",intensity:1.1},props:{vine:230,broad:14,rock:8,bale:5,stadl:2,marterl:1,grass:450,flowers:160},mountains:!0},au:{name:"Donau-Au",amp:4.5,freq:2.6,oct:4,base:1.15,pow:1,ponds:3.4,colors:{seabed:"#4c5638",sand:"#8a7f55",grass1:"#457529",grass2:"#679140",rock:"#6f6a5a",snow:"#ffffff",dirt:"#3e3222"},snowLine:99,water:"#3d6b5a",waterOpacity:.88,sky:{top:"#7f9fb8",horizon:"#d6dfe0"},fog:[45,280],sun:{color:"#f4f0e0",intensity:2,elev:35,azim:120},hemi:{sky:"#dfe8ee",ground:"#475a32",intensity:1.25},props:{willow:30,broad:18,reed:280,rock:5,grass:800,flowers:120,stadl:1},mountains:!1},kukuruz:{name:"Kukuruzfeld",amp:4.2,freq:1.4,oct:3,base:1.8,pow:1,colors:{seabed:"#6b6a4c",sand:"#d5c48d",grass1:"#7c9236",grass2:"#a3a648",rock:"#8f8670",snow:"#ffffff",dirt:"#5b4430"},snowLine:99,water:"#3b7a92",waterOpacity:.82,sky:{top:"#3d82dc",horizon:"#e9e6cf"},fog:[90,470],sun:{color:"#fff0c8",intensity:2.8,elev:55,azim:10},hemi:{sky:"#e6f0ff",ground:"#6b6a3a",intensity:1.1},props:{corn:650,pumpkin:60,broad:10,bale:10,silo:8,stadl:3,marterl:1,grass:350,flowers:80},mountains:!1},steinbruch:{name:"Steinbruch",amp:15,freq:2.4,oct:4,base:1.6,pow:1.3,terrace:3.2,terraceSharp:.55,rockBias:.4,colors:{seabed:"#56584c",sand:"#c9bfa8",grass1:"#6f7f4c",grass2:"#8e9566",rock:"#a29d93",snow:"#ffffff",dirt:"#55493d"},snowLine:99,water:"#3a7290",waterOpacity:.84,sky:{top:"#4d82c4",horizon:"#e4ddd0"},fog:[80,430],sun:{color:"#fff3dd",intensity:2.6,elev:42,azim:-120},hemi:{sky:"#e9eef4",ground:"#6d665a",intensity:1.1},props:{rock:70,pine:12,broad:4,grass:220,flowers:30,stadl:1},mountains:!0},gletscher:{name:"Gletscher",amp:15,freq:2,oct:5,base:1.8,pow:1.3,peaks:[{x:-.2,z:.15,h:7,r:.15}],colors:{seabed:"#3a5068",sand:"#d9e2ea",grass1:"#eef3f8",grass2:"#dce6ef",rock:"#6f7c8c",snow:"#ffffff",dirt:"#59616b"},snowLine:-10,water:"#3c78a8",waterOpacity:.86,sky:{top:"#4f88d4",horizon:"#e8f1fa"},fog:[70,420],sun:{color:"#ffffff",intensity:2.3,elev:28,azim:70},hemi:{sky:"#e6f0ff",ground:"#9aa8b8",intensity:1.2},props:{pineSnow:40,rock:28,stadl:1,marterl:1},mountains:!0}},Ns=["alm","weinberg","au","kukuruz","steinbruch","gletscher"],Nn=[{title:"Grundwehrdienst",theme:"alm",seed:101,player:3,ai:"easy",wind:.25,enemies:[{units:2,tiers:[0,0]}],tutorial:!0,briefing:"Servus, Rekrut! Willkommen beim Rindsviech-Bundesheer. Dr\xFCben auf da Nachbaralm hocken zwa Gfraster von der {E1} und fressen unser Heu. Des is a Frechheit. Geh umi und erkl\xE4r eana des \u2013 zur Not mit da Dienstpistoln. Und bitte: ned ins Wasser rennen, a Schwimmabzeichen is ned budgetiert."},{title:"Heuraub im Weinberg",theme:"weinberg",seed:202,player:4,ai:"easy",wind:.35,enemies:[{units:3,tiers:[0,1]}],briefing:"Die {E1} ham unsern Heuvorrat gstohln und verstecken si jetzt zwischen de Weinst\xF6ck. Da Wirt sagt, wer an Weinstock z'sammschie\xDFt, zahlt. Uns wurscht \u2013 des Heu kummt z'ruck!"},{title:"Nebel in da Au",theme:"au",seed:303,player:4,ai:"normal",wind:.3,fog:!0,enemies:[{units:3,tiers:[0,1]}],briefing:"In da Donau-Au siehst die eigenen Hufe ned. \xDCberall Wasser, Gelsen und {E1}. Wer ersauft, kriegt ka Begr\xE4bnis mit Blasmusi. Also schau, wo du hintrittst."},{title:"F\xF6hnsturm",theme:"alm",seed:404,player:4,ai:"normal",wind:.95,enemies:[{units:4,tiers:[0,1]}],briefing:"Da F\xF6hn bl\xE4st so stark, dass die Kuhfladen waagrecht fliegen. Rechnet's den Wind ein, sonst trefft's h\xF6chstens an Bauern im n\xE4chsten Tal. Die {E1} san scho seit gestern grantig."},{title:"Die Kukuruz-Offensive",theme:"kukuruz",seed:505,player:4,ai:"normal",wind:.4,enemies:[{units:4,tiers:[1,2]}],briefing:"Im Maisfeld san die {E1} eingegrabn wia da Erd\xE4pfelk\xE4fer. Holt's es raus \u2013 und wenn's geht, ohne dass des ganze Popcorn z'fr\xFCh aufgeht."},{title:"Hochwasser!",theme:"au",seed:606,player:5,ai:"normal",wind:.4,risingWater:.32,enemies:[{units:4,tiers:[1,2]}],briefing:"Es sch\xFCttet seit drei Tag. Jede Runde steigt's Wasser. Wer z'lang tr\xF6delt, kann si glei als Karpfen bewerben. Tempo, Rindsviecher \u2013 die {E1} san ah scho nerv\xF6s!"},{title:"Im alten Steinbruch",theme:"steinbruch",seed:707,player:5,ai:"normal",wind:.45,enemies:[{units:5,tiers:[1,2]}],briefing:"Im Steinbruch san die W\xE4nd steil und die {E1} bis obenhin voller Munition. Granatwerfer mitnehmen, Hirn einschalten, ned obi fallen."},{title:"Gletscherpatrouille",theme:"gletscher",seed:808,player:5,ai:"hard",wind:.55,enemies:[{units:5,tiers:[1,3]}],briefing:"Am Gletscher is so kalt, dass da Euter einfriert. Die {E1} ham si do obn verschanzt. Ziagt's eich warm an \u2013 oder schie\xDFt's eich warm."},{title:"Kirtagsrauferei",theme:"weinberg",seed:909,player:5,ai:"hard",wind:.45,enemies:[{units:4,tiers:[1,3]},{units:4,tiers:[1,3]}],briefing:"Heut gibt's a Rauferei mit drei Parteien. Die {E1} und die {E2} k\xF6nnen si a ned leiden. Lass die zwa ruhig aufeinander los \u2013 und dann putz ma die Reste weg."},{title:"Minenfeld am Kirtagsplatz",theme:"alm",seed:1010,player:5,ai:"hard",wind:.4,mines:14,enemies:[{units:5,tiers:[2,3]}],briefing:"Irgendwer hat am Kirtagsplatz Kuhfladen-Minen verteilt. Oder es san echte Kuhfladen. Wer's genau wissen will, tritt drauf. Die {E1} warten scho beim Bierzelt."},{title:"Schlacht am Glockner",theme:"gletscher",seed:1111,player:6,ai:"hard",wind:.6,enemies:[{units:6,tiers:[2,4]}],briefing:"H\xF6her geht's nimma. Die {E1} schicken ihre Veteranen. Wer do obn verliert, rollt bis nach Heiligenblut obi."},{title:"Die Mutter aller Watschn",theme:"steinbruch",seed:1212,player:6,ai:"hard",wind:.5,enemies:[{units:4,tiers:[3,5]},{units:4,tiers:[3,5]}],briefing:"Jetzt geht's um die Wurscht \u2013 und zwar um die ganze Extrawurscht. Die Elite von {E1} und {E2} gegen eich. Wer des \xFCberlebt, kriegt an Orden, a Freibier und an Platz im Heimatmuseum."}],Nr={easy:{name:"Leicht",yaw:5.5,pitch:5,power:.09,think:.7,smart:.4},normal:{name:"Normal",yaw:2.2,pitch:2.2,power:.035,think:1,smart:.75},hard:{name:"Schwer",yaw:.7,pitch:.7,power:.012,think:1,smart:1}},ad={quality:"auto",sfx:.8,music:.45,aimHelp:"full",turnTime:60,camSens:1,showFps:!1,v:2};var zt=(s,t,e)=>s<t?t:s>e?e:s,qo=(s,t,e)=>s+(t-s)*e,Ur=(s,t,e)=>{let i=zt((e-s)/(t-s),0,1);return i*i*(3-2*i)},Te=Math.PI/180,od=Math.PI*2;function Us(s,t){let e=t-s;for(;e>Math.PI;)e-=od;for(;e<-Math.PI;)e+=od;return e}function ee(s,t,e,i){let n=s-e,r=t-i;return Math.sqrt(n*n+r*r)}function Oe(s,t,e,i){return qo(s,t,1-Math.exp(-e*i))}function Dc(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function Nc(){let s=Dc(),t=Math.min(window.screen.width,window.screen.height)<820;return s&&t}function ci(s,t,e){let i=document.createElement(s);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i}function Nt(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Xo=class{constructor(t,e,i=128,n=!1){this.theme=t,this.size=110,this.half=this.size/2,this.res=i,this.cell=this.size/(i-1),this.h=new Float32Array(i*i),this.scorch=new Float32Array(i*i),this.varN=new Float32Array(i*i),this.waterLevel=0,this.colors={};for(let r in t.colors)this.colors[r]=new yt(t.colors[r]);this.generate(e),this.buildMesh(n)}idx(t,e){return e*this.res+t}generate(t){let e=this.theme,i=Ps(t),n=Ps(t+17),r=Ps(t+31),a=this.res;for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=-this.half+l*this.cell,h=-this.half+o*this.cell,u=c/this.size,d=h/this.size,f=u+.07*n(u*3.1,d*3.1),p=d+.07*n(u*3.1+5.2,d*3.1+5.2),x=Math.sqrt(f*f+p*p)*2,g=Ho(i,f*e.freq+10,p*e.freq+10,e.oct),m=zt(g*.75+.5,0,1),y=e.base+e.amp*Math.pow(m,e.pow||1.2);if(e.peaks)for(let v of e.peaks){let E=u-v.x,b=d-v.z;y+=v.h*Math.exp(-(E*E+b*b)/(v.r*v.r))}if(e.ponds){let v=Ho(r,u*4.5+3,d*4.5+3,2);v>.12&&(y-=(v-.12)*e.ponds*6)}if(e.terrace){let v=e.terrace,E=y/v,b=Math.floor(E);y=(b+Ur(e.terraceSharp||.6,1,E-b))*v}let T=1-Ur(.6,.95,x);y=y*T+-5*(1-T),this.h[this.idx(l,o)]=Math.max(-6,y),this.varN[this.idx(l,o)]=Ho(n,u*14,d*14,2)*.5+.5}for(let o=0;o<this.h.length;o++)this.h[o]>-.2&&this.h[o]<.6&&(this.h[o]=this.h[o]*.9-.05)}heightAt(t,e){let i=(t+this.half)/this.cell,n=(e+this.half)/this.cell,r=this.res;if(i<0||n<0||i>r-1||n>r-1)return-6;let a=Math.floor(i),o=Math.floor(n);a>r-2&&(a=r-2),o>r-2&&(o=r-2);let l=i-a,c=n-o,h=o*r+a,u=this.h[h],d=this.h[h+1],f=this.h[h+r],p=this.h[h+r+1];return(u*(1-l)+d*l)*(1-c)+(f*(1-l)+p*l)*c}normalAt(t,e,i=new L){let r=this.heightAt(t-.5,e),a=this.heightAt(t+.5,e),o=this.heightAt(t,e-.5),l=this.heightAt(t,e+.5);return i.set(r-a,2*.5,o-l).normalize()}slopeAt(t,e){let n=(this.heightAt(t+.5,e)-this.heightAt(t-.5,e))/1,r=(this.heightAt(t,e+.5)-this.heightAt(t,e-.5))/(2*.5);return Math.sqrt(n*n+r*r)}isLand(t,e,i=.35){return this.heightAt(t,e)>this.waterLevel+i}colorFor(t,e,i,n){let r=this.colors,a=this.theme,o=this.h[t],l=this.waterLevel,c=this.res,h=this.h[t-(e>0?1:0)],u=this.h[t+(e<c-1?1:0)],d=this.h[t-(i>0?c:0)],f=this.h[t+(i<c-1?c:0)],p=Math.sqrt((u-h)**2+(f-d)**2)/(2*this.cell),x=this.varN[t];n.copy(r.grass1).lerp(r.grass2,zt(x*1.4-.2,0,1)),a.rockBias&&o>3&&n.lerp(r.rock,zt((o-3)/8,0,1)*a.rockBias+x*.1),o<l+.9&&n.lerp(r.sand,zt(1-(o-l-.15)/.75,0,1)),o<l-.4&&n.copy(r.sand).lerp(r.seabed,zt((l-.4-o)/2.5,0,1)),p>.6&&n.lerp(r.rock,Ur(.6,1.1,p)),o>a.snowLine&&p<1.1&&n.lerp(r.snow,Ur(a.snowLine,a.snowLine+2.5,o));let g=this.scorch[t];g>0&&n.lerp(r.dirt,g);let m=un(e,i)*.08-.04;return n.r=Math.max(0,n.r+m),n.g=Math.max(0,n.g+m),n.b=Math.max(0,n.b+m),n}buildMesh(t){let e=this.res,i=e*e,n=new Float32Array(i*3),r=new Float32Array(i*3),a=new Float32Array(i*3);for(let f=0;f<e;f++)for(let p=0;p<e;p++){let x=f*e+p;n[x*3]=-this.half+p*this.cell,n[x*3+1]=this.h[x],n[x*3+2]=-this.half+f*this.cell}let o=new(i>65535?Uint32Array:Uint16Array)((e-1)*(e-1)*6),l=0;for(let f=0;f<e-1;f++)for(let p=0;p<e-1;p++){let x=f*e+p,g=x+1,m=x+e,y=m+1;(p+f)%2===0?(o[l++]=x,o[l++]=m,o[l++]=g,o[l++]=g,o[l++]=m,o[l++]=y):(o[l++]=x,o[l++]=m,o[l++]=y,o[l++]=x,o[l++]=y,o[l++]=g)}let c=new Float32Array(i*2);for(let f=0;f<e;f++)for(let p=0;p<e;p++){let x=f*e+p;c[x*2]=p/(e-1),c[x*2+1]=f/(e-1)}let h=new Ee;h.setAttribute("uv",new ye(c,2)),h.setAttribute("position",new ye(n,3)),h.setAttribute("normal",new ye(r,3)),h.setAttribute("color",new ye(a,3)),h.setIndex(new ye(o,1)),this.geo=h,this.updateRegion(0,0,e-1,e-1),h.computeBoundingSphere(),h.computeBoundingBox();let u=fx(),d=t?new Ri({vertexColors:!0,map:u}):new hr({vertexColors:!0,roughness:.96,metalness:0,map:u});d.color.setScalar(1.14),this.mesh=new Kt(h,d),this.mesh.receiveShadow=!0,this.mesh.castShadow=!t}updateRegion(t,e,i,n){let r=this.res;t=zt(t,0,r-1),i=zt(i,0,r-1),e=zt(e,0,r-1),n=zt(n,0,r-1);let a=this.geo.attributes.position.array,o=this.geo.attributes.normal.array,l=this.geo.attributes.color.array,c=new yt,h=2*this.cell;for(let u=e;u<=n;u++)for(let d=t;d<=i;d++){let f=u*r+d;a[f*3+1]=this.h[f];let p=this.h[d>0?f-1:f],x=this.h[d<r-1?f+1:f],g=this.h[u>0?f-r:f],m=this.h[u<r-1?f+r:f],y=p-x,T=h,v=g-m,E=Math.sqrt(y*y+T*T+v*v);o[f*3]=y/E,o[f*3+1]=T/E,o[f*3+2]=v/E,this.colorFor(f,d,u,c),l[f*3]=c.r,l[f*3+1]=c.g,l[f*3+2]=c.b}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}deform(t,e,i,n){let r=this.res,a=Math.floor((t-i+this.half)/this.cell)-1,o=Math.ceil((t+i+this.half)/this.cell)+1,l=Math.floor((e-i+this.half)/this.cell)-1,c=Math.ceil((e+i+this.half)/this.cell)+1;for(let h=Math.max(0,l);h<=Math.min(r-1,c);h++)for(let u=Math.max(0,a);u<=Math.min(r-1,o);u++){let d=-this.half+u*this.cell,f=-this.half+h*this.cell,p=Math.sqrt((d-t)**2+(f-e)**2),x=h*r+u;if(p<i){let g=p/i;this.h[x]=Math.max(-6,this.h[x]-n*(Math.cos(g*Math.PI)*.5+.5))}if(p<i*1.35){let g=zt(1-p/(i*1.35),0,1)*.9;this.scorch[x]=Math.max(this.scorch[x],g)}}this.updateRegion(a-1,l-1,o+1,c+1)}scorchAt(t,e,i,n=.5){let r=this.res,a=Math.floor((t-i+this.half)/this.cell),o=Math.ceil((t+i+this.half)/this.cell),l=Math.floor((e-i+this.half)/this.cell),c=Math.ceil((e+i+this.half)/this.cell);for(let h=Math.max(0,l);h<=Math.min(r-1,c);h++)for(let u=Math.max(0,a);u<=Math.min(r-1,o);u++){let d=-this.half+u*this.cell,f=-this.half+h*this.cell,p=Math.sqrt((d-t)**2+(f-e)**2);if(p<i){let x=h*r+u;this.scorch[x]=Math.max(this.scorch[x],(1-p/i)*n)}}this.updateRegion(a-1,l-1,o+1,c+1)}refreshColors(){this.updateRegion(0,0,this.res-1,this.res-1)}raycast(t,e,i=300,n=.4){let r=0,a=0,o=new L;if(t.y<this.heightAt(t.x,t.z))return{t:0,point:t.clone()};for(;r<i;){if(o.copy(t).addScaledVector(e,r),o.y<=this.heightAt(o.x,o.z)){let l=a,c=r;for(let h=0;h<10;h++){let u=(l+c)/2;o.copy(t).addScaledVector(e,u),o.y<=this.heightAt(o.x,o.z)?c=u:l=u}return o.copy(t).addScaledVector(e,c),{t:c,point:o.clone()}}if(a=r,r+=n,o.y<-8)return null}return null}lineOfSight(t,e,i=.15){let n=e.x-t.x,r=e.y-t.y,a=e.z-t.z,o=Math.sqrt(n*n+r*r+a*a),l=Math.ceil(o/.5);for(let c=1;c<l;c++){let h=c/l,u=t.x+n*h,d=t.y+r*h,f=t.z+a*h;if(d<this.heightAt(u,f)+i)return!1}return!0}},Uc=null;function fx(){if(Uc)return Uc;let s=256,t=new Uint8Array(s*s*4),e=new Float32Array(s*s);for(let r=0;r<s*s;r++)e[r]=Math.random();let i=(r,a)=>e[(a+s)%s*s+(r+s)%s];for(let r=0;r<s;r++)for(let a=0;a<s;a++){let o=(i(a,r)*2+i(a+1,r)+i(a,r+1)+i(a-1,r)+i(a,r-1))/6,l=i(a*3,r)>.92?.12:0;o=.8+o*.2+l;let c=Math.min(255,Math.round(o*255)),h=(r*s+a)*4;t[h]=c,t[h+1]=c,t[h+2]=c,t[h+3]=255}let n=new on(t,s,s,li);return n.wrapS=n.wrapT=Mn,n.repeat.set(36,36),n.magFilter=Be,n.minFilter=vi,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,Uc=n,n}function cd(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ee;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=ld(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=ld(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function ld(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ye(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var hd=new Zt,ud=new Ye,dd=new Je,px=new L,mx=new L,le=Math.PI,Ht=s=>new yt(s);function gx(s,t){let e=s.attributes.position,i=s.attributes.normal,n=e.count,r=new Float32Array(n*3),a=new yt,o=new L,l=new L,c=typeof t=="function"?null:t instanceof yt?t:Ht(t);for(let h=0;h<n;h++)c?a.copy(c):(o.fromBufferAttribute(e,h),l.fromBufferAttribute(i,h),t(o,l,a)),r[h*3]=a.r,r[h*3+1]=a.g,r[h*3+2]=a.b;return s.setAttribute("color",new ye(r,3)),s}function W(s,t={},e="#ffffff"){let i=s.index?s.toNonIndexed():s;i!==s&&s.dispose(),i.attributes.uv&&i.deleteAttribute("uv");let n=t.p||[0,0,0],r=t.r||[0,0,0],a=t.s||[1,1,1];return dd.set(r[0],r[1],r[2],t.order||"XYZ"),ud.setFromEuler(dd),hd.compose(px.set(n[0],n[1],n[2]),ud,mx.set(a[0],a[1],a[2])),i.applyMatrix4(hd),t.jitter&&xx(i,t.jitter,t.seed||1),gx(i,e),i}function xx(s,t,e=1){let i=s.attributes.position;for(let n=0;n<i.count;n++){let r=i.getX(n),a=i.getY(n),o=i.getZ(n),l=Math.round(r*100),c=Math.round(a*100),h=Math.round(o*100),u=un(l+e*31,c*7+h*13),d=un(c+e*17,h*5+l*3),f=un(h+e*11,l*9+c*2);i.setXYZ(n,r+(u-.5)*t,a+(d-.5)*t,o+(f-.5)*t)}return s.computeVertexNormals(),s}function Jt(s){let t=cd(s,!1);return s.forEach(e=>e.dispose()),t}var $o=null;function Qe(){return $o||($o={unit:new Sn({vertexColors:!0,shininess:14,specular:1710618}),prop:new Ri({vertexColors:!0}),item:new Sn({vertexColors:!0,shininess:40,specular:3355443}),basic:new Ti({vertexColors:!0}),glow:new Ti({color:16777215,transparent:!0,opacity:.8,depthWrite:!1})},$o)}var fd={fleckvieh:{base:"#f3ece0",spot:"#94461f",snout:"#f1c3b0",spots:!0},holstein:{base:"#f6f6f3",spot:"#1c1c1c",snout:"#f0b9b0",spots:!0},pinzgauer:{base:"#7a3216",stripe:"#f3ece0",snout:"#e8b8a6",pinz:!0},grauvieh:{base:"#a8a398",dark:"#5a5750",snout:"#35322e"},braunvieh:{base:"#86643f",light:"#b89a74",snout:"#e7dcc8"},schwarz:{base:"#2a2321",snout:"#5c4b45"}};function pd({sex:s,breed:t,teamColor:e,tier:i=0,seed:n=1}){let r=new Ge(n),a=fd[t]||fd.fleckvieh,o=s==="stier",l=Ht(a.base),c=Ht(a.spot||a.base),h=Ht(a.snout),u=Ht(e),d=u.clone().multiplyScalar(.55),f=Ht("#2b2420"),p=Ht("#efe6cf"),x=Ht("#f2a7a0"),g=Ht("#e6b422"),m=Ht("#ffffff"),y=Ht("#121212"),T=Ht("#5a3a22"),v=Ht(a.stripe||"#ffffff"),E=Ht(a.dark||a.base),b=Ht(a.light||a.base),_=[];if(a.spots){let At=8+r.int(0,5);for(let de=0;de<At;de++)_.push({x:r.range(-.45,.45),y:r.range(.5,2.15),z:r.range(-.45,.5),r:r.range(.1,.21)})}let w=(At,de,Ie)=>(U,mi,he)=>{let ge=U.x+At,rt=U.y+de,be=U.z+Ie;if(he.copy(l),a.spots)for(let Et of _){let Ft=ge-Et.x,A=rt-Et.y,M=be-Et.z;if(Ft*Ft+A*A+M*M<Et.r*Et.r){he.copy(c);break}}a.pinz&&(be<-.18&&Math.abs(ge)<.14||be>.2&&rt<1.15&&rt>.55)&&he.copy(v),a.dark&&(rt<.62||rt>1.85&&be>.25)&&he.copy(E),a.light&&be>.22&&rt<1.25&&rt>.6&&he.copy(b)},C=.74,R=o?.4:.36,D=Qe(),F=[];if(F.push(W(new Wn(R,.42,6,14),{p:[0,1.08,0],s:[1,1,.88]},w(0,0,0))),o&&F.push(W(new se(.36,12,8),{p:[0,1.4,.02],s:[1.32,.8,.95]},w(0,0,0))),F.push(W(new Ai(R*.98,.055,6,22),{p:[0,.84,0],r:[le/2,0,0],s:[1,.88,1]},u)),F.push(W(new Pt(.13,.1,.05),{p:[0,.84,R*.88+.03]},g)),!o){F.push(W(new se(.12,10,8),{p:[0,.7,.2],s:[1.1,.8,.9]},x));for(let[At,de]of[[-.05,.25],[.05,.25],[-.05,.15],[.05,.15]])F.push(W(new ze(.022,.08,5),{p:[At,.6,de],r:[le,0,0]},x))}F.push(W(new Ai(.21,.03,5,14),{p:[0,1.56,.03],r:[le/2-.3,0,0]},T)),F.push(W(new Vt(.055,.09,.14,8),{p:[0,1.43,R*.88+.02]},g)),F.push(W(new se(.028,6,4),{p:[0,1.35,R*.88+.02]},Ht("#6b4a12")));let k=i>=4?g:d;for(let At of[-1,1])F.push(W(new Pt(.2,.05,.22),{p:[At*(R+.02),1.53,0],r:[0,0,At*-.35]},k));let I=[],H=o?1.12:1,X=w(0,1.62,.04);I.push(W(new se(.27,14,10),{p:[0,.2,.05],s:[1*H,.95*H,1.05]},X)),I.push(W(new se(.19,12,8),{p:[0,.1,.29],s:[1.15*H,.85,.85]},h));for(let At of[-1,1])I.push(W(new se(.035,6,4),{p:[At*.075,.12,.44]},y)),I.push(W(new se(.078,10,8),{p:[At*.125,.29,.27]},m)),I.push(W(new se(.042,8,6),{p:[At*.13,.29,.335]},y)),I.push(W(new se(.1,8,6),{p:[At*.34*H,.27,0],r:[0,0,At*-.35],s:[1.7,.45,.85]},X)),o?(I.push(W(new Pt(.15,.035,.03),{p:[At*.125,.385,.31],r:[0,0,At*.4]},y)),I.push(W(new ze(.075,.4,8),{p:[At*.42,.47,.03],r:[0,0,At*-1.1]},p)),I.push(W(new ze(.03,.12,6),{p:[At*.6,.6,.03],r:[0,0,At*-.5]},Ht("#3b332b")))):(I.push(W(new Pt(.1,.02,.02),{p:[At*.12,.38,.32],r:[0,0,At*-.15]},y)),I.push(W(new ze(.045,.2,7),{p:[At*.3,.45,.02],r:[0,0,At*-.75]},p)));if(o&&I.push(W(new Ai(.065,.015,6,14),{p:[0,.02,.43]},g)),I.push(W(new se(.31,16,8,0,le*2,0,le/2),{p:[0,.37,.03],s:[1*H,.85,1.05]},u)),I.push(W(new Vt(.34*H,.35*H,.035,18),{p:[0,.37,.03]},d)),i>=1&&i<=3)for(let At=0;At<i;At++)I.push(W(new Pt(.13,.025,.02),{p:[0,.43+At*.04,.33]},g));else if(i>=4){let At=i-3;for(let de=0;de<At;de++)I.push(W(new cr(.05),{p:[(de-(At-1)/2)*.12,.48,.3],s:[1,1,.4]},g))}let V=R+.05,et=At=>Jt([W(new Vt(.095,.085,.46,8),{p:[0,-.23,0]},w(At*V,1.42,0)),W(new Vt(.09,.1,.12,8),{p:[0,-.5,0]},f)]),q=At=>Jt([W(new Vt(.135,.115,.56,10),{p:[0,-.28,0]},w(At*.17,C,0)),W(new Vt(.13,.155,.17,10),{p:[0,-C+.085,.02]},f)]),Q=Jt([W(new Vt(.022,.028,.52,6),{p:[0,-.2,-.12],r:[.55,0,0]},w(0,.86,-.3)),W(new se(.065,7,5),{p:[0,-.42,-.25],s:[1,1.6,1]},Ht("#2a2420"))]),tt=Jt([W(new Pt(.08,.11,.6),{p:[0,0,.2]},Ht("#2f3330")),W(new Vt(.022,.022,.32,6),{p:[0,.02,.62],r:[le/2,0,0]},Ht("#1b1d1c")),W(new Pt(.07,.12,.22),{p:[0,-.04,-.14]},Ht("#5b3d24")),W(new Pt(.05,.16,.07),{p:[0,-.12,.25],r:[.2,0,0]},Ht("#1b1d1c"))]),St=Jt([W(new Vt(.09,.09,1,10),{p:[0,.08,.15],r:[le/2,0,0]},Ht("#4b5a2a")),W(new Vt(.11,.09,.12,10),{p:[0,.08,.68],r:[le/2,0,0]},Ht("#2f3a1a")),W(new Pt(.05,.16,.08),{p:[0,-.04,.05]},Ht("#2a2a2a"))]),Bt=Jt([W(new se(.1,8,6),{p:[.28,.05,.25]},Ht("#4f5b2b"))]),$=(At,de)=>{let Ie=new Kt(At,de||D.unit);return Ie.castShadow=!0,Ie.receiveShadow=!1,Ie},ft=new Pe,_t=new Pe;ft.add(_t);let Rt=$(Jt(F));_t.add(Rt);let pt=new Pe;pt.position.set(0,1.62,.04),pt.add($(Jt(I))),_t.add(pt);let Ut=new Pe;Ut.position.set(-V,1.42,0),Ut.add($(et(-1)));let Me=new Pe;Me.position.set(V,1.42,0),Me.add($(et(1))),_t.add(Ut,Me);let Ct=new Pe;Ct.position.set(-.17,C,0),Ct.add($(q(-1)));let ne=new Pe;ne.position.set(.17,C,0),ne.add($(q(1))),ft.add(Ct,ne);let ae=new Pe;ae.position.set(0,.86,-.3),ae.add($(Q)),_t.add(ae);let qt=new Pe;qt.position.set(0,1.2,.3);let Ne=$(tt,D.item),Ae=$(St,D.item),Ve=$(Bt,D.item);qt.add(Ne,Ae,Ve),Ae.visible=!1,Ve.visible=!1,_t.add(qt);let me=new Pe,bi=Jt([W(new se(1.35,12,5,0,le*2,0,le/2.3),{p:[0,3,0],s:[1,.6,1]},(At,de,Ie)=>{let U=Math.atan2(At.x,At.z);Ie.copy(Math.floor((U+le)/(le/6))%2?m:u)}),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([At,de])=>{let Ie=new Vt(.01,.01,1.9,3);return W(Ie,{p:[At*.6,2.25,de*.6],r:[de*.45,0,-At*.45]},Ht("#dddddd"))})]),De=new Kt(bi,D.unit);return De.castShadow=!0,me.add(De),me.visible=!1,ft.add(me),{root:ft,body:_t,head:pt,armL:Ut,armR:Me,legL:Ct,legR:ne,tail:ae,weapon:qt,gun:Ne,tube:Ae,ball:Ve,chute:me,torso:Rt}}function Fr(s,t,e=0){let i=Ht(s);return(n,r,a)=>{let o=un(Math.round(n.x*10)+e,Math.round(n.y*10)*3+Math.round(n.z*10)*7);a.copy(i).multiplyScalar(1-t/2+o*t)}}function zr(s){switch(s){case"pine":case"pineSnow":{let t=s==="pineSnow",e=(i,n,r)=>{r.copy(Ht("#2c5a2b")).lerp(Ht("#4a7a36"),Math.min(1,i.y/6)),t&&n.y>.2&&r.copy(Ht("#f4f8fc"))};return Jt([W(new Vt(.16,.24,1.4,6),{p:[0,.7,0]},"#5b3b22"),W(new ze(1.5,2.3,8),{p:[0,2,0]},e),W(new ze(1.15,1.9,8),{p:[0,3,0],r:[0,.4,0]},e),W(new ze(.75,1.5,8),{p:[0,3.9,0],r:[0,.8,0]},e)])}case"broad":return Jt([W(new Vt(.18,.28,2.4,6),{p:[0,1.2,0]},"#5e4128"),W(new $i(1.7,1),{p:[0,3.3,0],s:[1,.85,1],jitter:.45,seed:3},Fr("#4f8a33",.35)),W(new $i(1.1,1),{p:[.8,2.9,.4],jitter:.3,seed:5},Fr("#5c963a",.3,4))]);case"willow":return Jt([W(new Vt(.22,.32,2.2,6),{p:[0,1.1,0]},"#6a5a44"),W(new $i(1.8,1),{p:[0,2.8,0],s:[1.1,1,1.1],jitter:.5,seed:9},Fr("#8aa64e",.3))]);case"rock":return W(new $i(1,1),{jitter:.4,seed:7,s:[1,.75,1]},Fr("#8a867e",.3));case"bale":return Jt([W(new Vt(.72,.72,1.15,14),{p:[0,.72,0],r:[0,0,le/2]},(t,e,i)=>{if(i.copy(Ht("#d9b75a")),Math.abs(e.x)>.7){let n=Math.sqrt(t.y*t.y+t.z*t.z);i.multiplyScalar(.8+.2*Math.sin(n*30))}})]);case"silo":return W(new Vt(.72,.72,1.15,14),{p:[0,.72,0],r:[0,0,le/2]},"#ecece6");case"stadl":{let t=(e,i,n)=>{n.copy(Ht("#7a5230"));let r=Math.abs(i.x)>.5?e.z:e.x;n.multiplyScalar(.82+.18*(Math.floor(r*3.3)%2))};return Jt([W(new Pt(4.2,3.2,6),{p:[0,1.6,0]},t),W(new Vt(2.42,2.42,6,3),{p:[0,3.87,0],r:[-le/2,0,0],s:[1,1,.55]},t),W(new Pt(3.15,.16,6.5),{p:[-1.1,4.25,0],r:[0,0,.76]},"#4b3a2c"),W(new Pt(3.15,.16,6.5),{p:[1.1,4.25,0],r:[0,0,-.76]},"#4b3a2c"),W(new Pt(1.7,2.3,.08),{p:[0,1.15,3.02]},"#3a2717"),W(new Pt(.08,2.3,.1),{p:[0,1.15,3.06]},"#7a5230"),W(new Pt(1,.7,.06),{p:[0,4,3.03]},"#2a1c10"),W(new Pt(.9,.5,.06),{p:[0,3.95,3.06]},"#d9b75a")])}case"marterl":return Jt([W(new Pt(.18,1.4,.18),{p:[0,.7,0]},"#6a4a2a"),W(new Pt(.55,.6,.36),{p:[0,1.65,0]},"#f1ede4"),W(new Pt(.34,.4,.04),{p:[0,1.65,.18]},"#3e6fb0"),W(new Vt(.42,.42,.7,3),{p:[0,2.08,0],r:[-le/2,0,0],s:[1,1,.45]},"#5a3a24"),W(new Pt(.04,.3,.04),{p:[0,2.45,0]},"#c9a227"),W(new Pt(.16,.04,.04),{p:[0,2.5,0]},"#c9a227")]);case"corn":return Jt([W(new Vt(.03,.045,2,5),{p:[0,1,0]},"#8fa63a"),W(new Pt(.7,.02,.1),{p:[.3,1,0],r:[0,0,-.5]},"#7f9a33"),W(new Pt(.7,.02,.1),{p:[-.28,1.4,.05],r:[0,.4,.5]},"#93ad3e"),W(new Pt(.6,.02,.1),{p:[.05,1.7,.25],r:[.5,1.6,0]},"#7f9a33"),W(new Vt(.05,.06,.25,6),{p:[.08,1.25,.04],r:[0,0,-.3]},"#e8c44a"),W(new ze(.06,.3,4),{p:[0,2.1,0]},"#d8c477")]);case"vine":return Jt([W(new Vt(.04,.05,1.3,5),{p:[-.9,.65,0]},"#6a4f33"),W(new Vt(.04,.05,1.3,5),{p:[.9,.65,0]},"#6a4f33"),W(new Pt(2,.75,.45,4,2,1),{p:[0,.9,0],jitter:.12,seed:4},Fr("#4f7f2c",.4)),W(new se(.08,5,4),{p:[-.4,.55,.2]},"#5b2a5e"),W(new se(.08,5,4),{p:[.5,.6,-.2]},"#5b2a5e")]);case"reed":return Jt([0,1,2,3,4].flatMap(t=>{let e=t*1.3,i=.15,n=Math.cos(e)*i,r=Math.sin(e)*i;return[W(new ze(.03,1.5,4),{p:[n,.75,r],r:[n*.6,0,-r*.6]},"#8a9a4a"),W(new Vt(.035,.035,.2,5),{p:[n*1.4,1.3,r*1.4]},"#5a3a22")]}));case"grass":return Jt([0,1,2].map(t=>W(new ze(.05,.42,3),{p:[Math.cos(t*2.1)*.06,.2,Math.sin(t*2.1)*.06],r:[Math.sin(t*2.1)*.3,0,-Math.cos(t*2.1)*.3]},(e,i,n)=>n.setRGB(.55+e.y,.6+e.y,.55+e.y))));case"flower":return Jt([W(new Vt(.01,.01,.3,3),{p:[0,.15,0]},"#2f4f20"),W(new se(.06,6,4),{p:[0,.32,0]},"#ffffff")]);case"pumpkin":return Jt([W(new se(.4,12,8),{p:[0,.28,0],s:[1,.72,1]},(t,e,i)=>{let n=Math.atan2(t.x,t.z);i.copy(Ht("#e07b1c")).multiplyScalar(.85+.15*Math.cos(n*10))}),W(new Vt(.03,.05,.15,5),{p:[0,.6,0]},"#4f5a22")]);case"maibaum":return Jt([W(new Vt(.12,.2,14,8),{p:[0,7,0]},(t,e,i)=>{i.copy(Math.floor((t.y+Math.atan2(t.x,t.z)*.3)*1.2)%2?Ht("#ffffff"):Ht("#d32f2f"))}),W(new Ai(.9,.18,6,14),{p:[0,12.5,0],r:[le/2,0,0]},"#2f6b2a"),W(new ze(.9,1.8,7),{p:[0,14.6,0]},"#2f6b2a")]);default:return W(new Pt(1,1,1),{},"#ff00ff")}}function Mi(s){switch(s){case"granate":return Jt([W(new se(.12,10,8),{},"#4f5b2b"),W(new Vt(.04,.05,.08,6),{p:[0,.13,0]},"#2a2a2a")]);case"rakete":return Jt([W(new Vt(.065,.065,.5,8),{r:[le/2,0,0]},"#556b2f"),W(new ze(.065,.2,8),{p:[0,0,.35],r:[le/2,0,0]},"#c62828"),W(new Pt(.28,.02,.1),{p:[0,0,-.22]},"#333"),W(new Pt(.02,.28,.1),{p:[0,0,-.22]},"#333")]);case"moerser":case"shell":return Jt([W(new Wn(.08,.22,4,8),{r:[le/2,0,0]},"#5c6266"),W(new Pt(.22,.02,.08),{p:[0,0,-.18]},"#3a3d40"),W(new Pt(.02,.22,.08),{p:[0,0,-.18]},"#3a3d40")]);case"bomb":return Jt([W(new Wn(.13,.35,4,8),{r:[le/2,0,0]},"#2f3a2a"),W(new Pt(.34,.02,.12),{p:[0,0,-.28]},"#222"),W(new Pt(.02,.34,.12),{p:[0,0,-.28]},"#222")]);case"guelle":return Jt([W(new Vt(.13,.13,.28,10),{},"#6b4a2a"),W(new Vt(.135,.135,.03,10),{p:[0,.08,0]},"#2a2a2a"),W(new Vt(.135,.135,.03,10),{p:[0,-.08,0]},"#2a2a2a")]);case"glocke":return Jt([W(new Vt(.2,.3,.45,12),{},"#e6b422"),W(new Vt(.31,.31,.04,12),{p:[0,-.22,0]},"#b8860b"),W(new Ai(.12,.035,5,10),{p:[0,.3,0]},"#c62828"),W(new se(.07,6,5),{p:[0,-.26,0]},"#5a4a2a")]);case"mine":return Jt([W(new se(.36,10,6),{p:[0,.03,0],s:[1,.22,1]},"#5a3d22"),W(new se(.26,10,6),{p:[.02,.09,.01],s:[1,.3,1]},"#634428"),W(new se(.14,8,5),{p:[.03,.15,.02],s:[1,.5,1]},"#6d4a2c")]);case"tnt":return Jt([W(new Vt(.06,.06,.42,8),{p:[-.065,.06,0],r:[0,0,le/2]},"#c62828"),W(new Vt(.06,.06,.42,8),{p:[.065,.06,0],r:[0,0,le/2]},"#c62828"),W(new Vt(.06,.06,.42,8),{p:[0,.16,0],r:[0,0,le/2]},"#b71c1c"),W(new Pt(.08,.26,.15),{p:[0,.1,0]},"#2a2a2a"),W(new Vt(.01,.01,.25,4),{p:[0,.32,.05],r:[.4,0,0]},"#eeeeee")]);case"crateHealth":return W(new Pt(.8,.6,.8),{p:[0,.3,0]},(t,e,i)=>{i.copy(Ht("#f4f1ea"));let n=e.y>.5,r=n?t.x:Math.abs(e.x)>.5?t.z:t.x,a=n?t.z:t.y-.3;(Math.abs(r)<.1&&Math.abs(a)<.28||Math.abs(a)<.1&&Math.abs(r)<.28)&&i.copy(Ht("#d32f2f"))});case"crate":return W(new Pt(.8,.6,.8),{p:[0,.3,0]},(t,e,i)=>{i.copy(Ht("#6b7a3a")),Math.max(Math.abs(t.x)>.33?1:0,Math.abs(t.z)>.33?1:0,t.y>.53||t.y<.07?1:0)&&i.copy(Ht("#3f4a22"))});case"plane":return Jt([W(new Vt(.55,.45,8,10),{r:[le/2,0,0]},"#8a939b"),W(new ze(.55,2.2,10),{p:[0,0,5.1],r:[le/2,0,0]},"#6f7880"),W(new Pt(7.5,.12,2.6),{p:[0,-.1,-.6]},"#7d868e"),W(new Pt(.12,1.9,1.8),{p:[0,1,-3.3],r:[-.3,0,0]},"#7d868e"),W(new Pt(3,.1,1.2),{p:[0,.1,-3.4]},"#7d868e"),W(new se(.42,8,6),{p:[0,.45,2.4],s:[1,.7,2]},"#2b4a6a"),W(new Pt(.9,.3,.02),{p:[2.6,-.02,-.6]},"#d32f2f"),W(new Pt(.9,.3,.02),{p:[-2.6,-.02,-.6]},"#d32f2f")]);case"grave":return Jt([W(new se(.55,10,6),{p:[0,0,0],s:[1,.35,1.4]},"#5a4430"),W(new Pt(.1,.95,.08),{p:[0,.55,-.35]},"#7a5a3a"),W(new Pt(.5,.09,.08),{p:[0,.82,-.35]},"#7a5a3a"),W(new Vt(.06,.09,.13,7),{p:[.18,.66,-.31]},"#e6b422"),W(new se(.06,5,4),{p:[-.2,.15,.2]},"#e53935"),W(new se(.06,5,4),{p:[.15,.16,.3]},"#fdd835")]);case"chute":return Jt([W(new se(1.1,12,5,0,le*2,0,le/2.3),{p:[0,2.2,0],s:[1,.6,1]},(t,e,i)=>{let n=Math.atan2(t.x,t.z);i.copy(Math.floor((n+le)/(le/6))%2?Ht("#ffffff"):Ht("#d32f2f"))}),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([t,e])=>W(new Vt(.01,.01,1.8,3),{p:[t*.45,1.3,e*.45],r:[e*.4,0,-t*.4]},"#dddddd"))]);case"arrow":return W(new ze(.22,.45,4),{r:[le,0,0]},"#ffffff");case"marker":return W(new Ai(1,.08,6,28),{r:[le/2,0,0]},"#ffffff");default:return W(new se(.1,6,4),{},"#ff00ff")}}var dn=6,yx=[],Yo=(s,t)=>(s+512)*2048+(t+512),md={low:{res:96,shadow:0,propScale:.45,grassScale:.3},medium:{res:128,shadow:1024,propScale:.8,grassScale:.65},high:{res:160,shadow:2048,propScale:1,grassScale:1}},Zo=class{constructor(t,e,i,n="medium",r={}){this.scene=t,this.theme=e,this.Q=md[n]||md.medium,this.quality=n,this.rng=new Ge(i*7+3),this.time=0,this.obstacles=[],this.instanced={},this.terrain=new Xo(e,i,this.Q.res,n==="low"),t.add(this.terrain.mesh),this.setupLights(),this.setupSky(r.fog),this.setupWater(),e.mountains&&this.setupMountains(),this.setupClouds();let a=r.planSpawns?r.planSpawns(this.terrain):r.avoid||[];this.placeProps({...r,avoid:a}),this.buildGrid()}buildGrid(){let t=new Map;for(let e of this.obstacles){let i=Math.max(e.r,e.pr)+.6,n=Math.floor((e.x-i)/dn),r=Math.floor((e.x+i)/dn),a=Math.floor((e.z-i)/dn),o=Math.floor((e.z+i)/dn);for(let l=n;l<=r;l++)for(let c=a;c<=o;c++){let h=Yo(l,c);t.has(h)||t.set(h,[]),t.get(h).push(e)}}this.obstacleGrid=t}obstaclesNear(t,e){return this.obstacleGrid.get(Yo(Math.floor(t/dn),Math.floor(e/dn)))||yx}setupLights(){let t=this.theme;this.hemi=new dr(t.hemi.sky,t.hemi.ground,t.hemi.intensity),this.scene.add(this.hemi);let e=new xr(t.sun.color,t.sun.intensity),i=t.sun.elev*Te,n=t.sun.azim*Te;if(this.sunDir=new L(Math.cos(i)*Math.sin(n),Math.sin(i),Math.cos(i)*Math.cos(n)).normalize(),e.position.copy(this.sunDir).multiplyScalar(150),e.target.position.set(0,0,0),this.Q.shadow){e.castShadow=!0,e.shadow.mapSize.set(this.Q.shadow,this.Q.shadow);let r=64;Object.assign(e.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:20,far:320}),e.shadow.bias=-6e-4,e.shadow.normalBias=.04}this.sun=e,this.scene.add(e,e.target),this.flash=new mr(16755285,0,22,1.6),this.scene.add(this.flash)}setupSky(t){let e=this.theme,i=new yt(e.sky.top),n=new yt(e.sky.horizon),r=e.fog[0],a=e.fog[1];t&&(r=8,a=75),this.scene.fog=new tr(n.clone(),r,a),this.scene.background=n.clone();let o=new se(900,32,16),l=new di({side:je,depthWrite:!1,fog:!1,uniforms:{uTop:{value:i},uHor:{value:t?n.clone().lerp(new yt("#c8cfd2"),.6):n},uSun:{value:this.sunDir.clone()},uSunCol:{value:new yt(e.sun.color)},uFog:{value:t?1:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uFog; varying vec3 vDir;
        void main(){ float h = max(vDir.y, 0.0); vec3 c = mix(uHor, uTop, pow(h, 0.38));
          if (vDir.y < 0.0) c = uHor * 0.92;
          float s = max(dot(normalize(vDir), uSun), 0.0);
          c += uSunCol * (pow(s, 600.0) * 2.5 + pow(s, 12.0) * 0.25) * (1.0 - uFog);
          c = mix(c, uHor, uFog * 0.85);
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new Kt(o,l),this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.scene.add(this.sky)}setupWater(){let t=this.theme,e=128,i=new Uint8Array(e*e*4),n=Ps(99),r=(c,h)=>n(c/9,h/9)*.6+n(c/4,h/4)*.3;for(let c=0;c<e;c++)for(let h=0;h<e;h++){let u=r((h+1)%e,c)-r((h-1+e)%e,c),d=r(h,(c+1)%e)-r(h,(c-1+e)%e),f=new L(-u*2.5,-d*2.5,1).normalize(),p=(c*e+h)*4;i[p]=(f.x*.5+.5)*255,i[p+1]=(f.y*.5+.5)*255,i[p+2]=(f.z*.5+.5)*255,i[p+3]=255}let a=new on(i,e,e,li);a.wrapS=a.wrapT=Mn,a.magFilter=Be,a.minFilter=vi,a.generateMipmaps=!0,a.repeat.set(60,60),a.needsUpdate=!0,this.waterTex=a;let o=new Sn({color:new yt(t.water),specular:16777215,shininess:90,transparent:!0,opacity:t.waterOpacity||.82,normalMap:a,normalScale:new Gt(.6,.6),depthWrite:!1}),l=new qn(1800,1800,1,1);l.rotateX(-Math.PI/2),this.water=new Kt(l,o),this.water.position.y=this.terrain.waterLevel,this.water.renderOrder=2,this.water.receiveShadow=this.quality==="high",this.scene.add(this.water)}setWaterLevel(t){this.terrain.waterLevel=t,this.water.position.y=t}setupMountains(){let t=new Ge(1234),e=[],i=28;for(let c=0;c<i;c++){let h=c/i*Math.PI*2+t.range(-.08,.08),u=t.range(360,470),d=t.range(60,150),f=t.range(60,110),p=new ze(f,d,7,3);e.push(W(p,{p:[Math.sin(h)*u,d/2-6,Math.cos(h)*u],r:[0,t.range(0,3),0],jitter:14,seed:c+1},(x,g,m)=>{let y=(x.y+6)/150;m.copy(Ht("#6a7a8c")).lerp(Ht("#8e9aa6"),y),x.y>d*.55-6&&g.y>.25&&m.copy(Ht("#f2f6fa"))}))}let n=Jt(e),r=new yt(this.theme.sky.horizon).lerp(new yt("#9fb6cf"),.5),a=n.attributes.color,o=new yt;for(let c=0;c<a.count;c++)o.setRGB(a.getX(c),a.getY(c),a.getZ(c)).lerp(r,.42),a.setXYZ(c,o.r,o.g,o.b);let l=new Ri({vertexColors:!0,fog:!1});this.mountains=new Kt(n,l),this.scene.add(this.mountains)}setupClouds(){let t=new Ge(4321);this.clouds=new Pe;let e=new Ri({color:16777215,emissive:9080729,flatShading:!0});for(let i=0;i<9;i++){let n=[],r=t.int(4,7);for(let c=0;c<r;c++){let h=new $i(t.range(8,15),1);n.push(W(h,{p:[c*10-r*5+t.range(-3,3),t.range(-2,4),t.range(-6,6)],s:[1,.6,1]},"#ffffff"))}let a=new Kt(Jt(n),e),o=t.range(0,Math.PI*2),l=t.range(120,380);a.position.set(Math.sin(o)*l,t.range(75,120),Math.cos(o)*l),a.userData.speed=t.range(1,3),this.clouds.add(a)}this.scene.add(this.clouds)}findSpot(t,{minH:e=.7,maxSlope:i=.6,minDist:n=2,avoid:r=[],tries:a=40,area:o=.92}={}){let l=this.terrain;for(let c=0;c<a;c++){let h=t.range(-l.half*o,l.half*o),u=t.range(-l.half*o,l.half*o),d=l.heightAt(h,u);if(d<l.waterLevel+e||l.slopeAt(h,u)>i)continue;let f=!0;for(let p of this.obstacles)if(ee(h,u,p.x,p.z)<n+p.r){f=!1;break}if(f){for(let p of r)if(ee(h,u,p.x,p.z)<p.r){f=!1;break}}if(f)return{x:h,z:u,y:d}}return null}addInstanced(t,e,{castShadow:i=!0,colors:n=null}={}){if(!e.length)return null;let r=zr(t),a=Qe().prop,o=new Gn(r,a,e.length),l=new Zt,c=new Ye,h=new L,u=new L;return e.forEach((d,f)=>{c.setFromAxisAngle(new L(0,1,0),d.rot||0),d.tilt&&c.multiply(new Ye().setFromEuler(new Je(d.tilt[0],0,d.tilt[1]))),h.set(d.sx||d.s||1,d.sy||d.s||1,d.sz||d.s||1),u.set(d.x,d.y,d.z),l.compose(u,c,h),o.setMatrixAt(f,l),n&&o.setColorAt(f,n(d,f)),d.mesh=o,d.index=f,d.matrix=l.clone()}),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.castShadow=i,o.receiveShadow=!0,o.computeBoundingSphere(),this.scene.add(o),this.instanced[t]=o,o}placeProps(t){let e=this.theme.props,i=this.rng,n=this.Q.propScale,r=this.Q.grassScale,a=t.avoid||[],o=this.terrain,l=[];for(let f=0;f<(e.stadl||0);f++){let p=this.findSpot(i,{maxSlope:.25,minDist:6,avoid:a,minH:1.2,area:.7});if(!p)continue;let x=i.range(0,Math.PI*2),g=zr("stadl");g.rotateY(x),g.translate(p.x,p.y-.3,p.z),l.push(g);let m=Math.sin(x),y=Math.cos(x);for(let T of[-2,0,2])this.obstacles.push({kind:"stadl",x:p.x+m*T,z:p.z+y*T,r:2.3,pr:2.3,y0:p.y-1,top:p.y+5.5,solid:!0})}if(e.marterl||t.maibaum){for(let f=0;f<(e.marterl||0);f++){let p=this.findSpot(i,{maxSlope:.4,minDist:3,avoid:a,area:.8});if(!p)continue;let x=zr("marterl");x.rotateY(i.range(0,Math.PI*2)),x.translate(p.x,p.y-.1,p.z),l.push(x),this.obstacles.push({kind:"marterl",x:p.x,z:p.z,r:.4,pr:.45,y0:p.y-1,top:p.y+2.6,solid:!0})}if(t.maibaum){let f=this.findSpot(i,{maxSlope:.3,minDist:3,avoid:a,area:.4});if(f){let p=zr("maibaum");p.translate(f.x,f.y-.2,f.z),l.push(p),this.obstacles.push({kind:"maibaum",x:f.x,z:f.z,r:.35,pr:.35,y0:f.y-1,top:f.y+15,solid:!0})}}}if(l.length){let f=new Kt(Jt(l),Qe().prop);f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f),this.staticMesh=f}let c=(f,p,x,g,m,y,T,v={})=>{let E=[],b=Math.round(p*n);for(let _=0;_<b;_++){let w=this.findSpot(i,{maxSlope:v.maxSlope||.75,minDist:v.minDist||1.5,avoid:a,minH:v.minH||.9});if(!w)continue;let C=i.range(x,g),R={kind:f,x:w.x,y:w.y-.1,z:w.z,s:C,rot:i.range(0,6.28),alive:!0};E.push(R);let D={kind:f,x:w.x,z:w.z,r:m*C,pr:y*C,y0:w.y-.5,top:w.y+T*C,destructible:!0,item:R,solid:!0};this.obstacles.push(D),R.ob=D}this.addInstanced(f,E)};e.pine&&c("pine",e.pine,.8,1.5,.35,1.1,4.4),e.pineSnow&&c("pineSnow",e.pineSnow,.8,1.6,.35,1.1,4.4),e.broad&&c("broad",e.broad,.7,1.2,.4,1.5,4.6),e.willow&&c("willow",e.willow,.8,1.3,.45,1.6,4.3,{minH:.4}),e.rock&&c("rock",e.rock,.5,1.6,.85,.9,1.3,{maxSlope:1.4,minDist:1}),e.bale&&c("bale",e.bale,.9,1.1,.75,.8,1.45,{maxSlope:.3}),e.silo&&c("silo",e.silo,.9,1.1,.75,.8,1.45,{maxSlope:.3});let h=(f,p,x,g,m={})=>{let y=[],T=Math.round(p*(m.isGrass?r:n));for(let v=0;v<T;v++){let E,b;if(m.cluster&&y.length&&i.chance(.85)){let C=y[Math.floor(i.next()*y.length)];E=C.x+i.range(-m.cluster,m.cluster),b=C.z+i.range(-m.cluster,m.cluster)}else E=i.range(-o.half*.9,o.half*.9),b=i.range(-o.half*.9,o.half*.9);let _=o.heightAt(E,b);if(_<o.waterLevel+(m.minH??.6)||_>o.waterLevel+(m.maxH??999)||o.slopeAt(E,b)>(m.maxSlope||.7))continue;let w=!1;for(let C of a)if(ee(E,b,C.x,C.z)<C.r*(m.avoidScale??1)){w=!0;break}w||y.push({x:E,y:_-.05,z:b,s:i.range(x,g),rot:i.range(0,6.28),alive:!0,tint:i.next()})}return y},u=new yt(this.theme.colors.grass2),d=new yt(this.theme.colors.grass1);if(e.grass){let f=h("grass",e.grass,.7,1.4,{isGrass:!0,avoidScale:0});this.addInstanced("grass",f,{castShadow:!1,colors:p=>u.clone().lerp(d,p.tint).multiplyScalar(1.1)})}if(e.flowers){let f=["#ffffff","#ffeb3b","#e53935","#7e57c2","#ff8a65","#4fc3f7"].map(x=>new yt(x)),p=h("flower",e.flowers,.8,1.3,{isGrass:!0,avoidScale:0,cluster:2.5});this.addInstanced("flower",p,{castShadow:!1,colors:x=>f[Math.floor(x.tint*f.length)]})}if(e.corn){let f=h("corn",e.corn,.85,1.15,{cluster:6,maxSlope:.4,avoidScale:.7});this.addInstanced("corn",f,{castShadow:this.quality==="high"}),this.cornList=f}if(e.pumpkin&&this.addInstanced("pumpkin",h("pumpkin",e.pumpkin,.7,1.3,{cluster:5,maxSlope:.4})),e.reed){let f=h("reed",e.reed,.8,1.3,{minH:-.4,maxH:.8,maxSlope:1,cluster:3,avoidScale:.5});this.addInstanced("reed",f,{castShadow:!1})}if(e.vine){let f=[],p=Math.round(e.vine*n);for(let x=0;x<p;x++){let g=i.range(-o.half*.85,o.half*.85),m=i.range(-o.half*.85,o.half*.85),y=o.heightAt(g,m);if(y<o.waterLevel+1||o.slopeAt(g,m)>.35)continue;let T=!1;for(let b of a)if(ee(g,m,b.x,b.z)<b.r*.8){T=!0;break}if(T)continue;let v=o.normalAt(g,m),E=Math.abs(v.x)+Math.abs(v.z)>.05?Math.atan2(v.x,v.z)+Math.PI/2:0;f.push({x:g,y:y-.05,z:m,s:1,rot:E-Math.PI/2,alive:!0})}this.addInstanced("vine",f,{castShadow:this.quality==="high"}),this.vineList=f}}destroyInRadius(t,e,i,n,r){let a=[],o=new Zt().makeScale(0,0,0);for(let l of this.obstacles){if(!l.destructible||!l.item.alive)continue;ee(t,i,l.x,l.z)<n+l.r*.5&&e<l.top+1&&(l.item.alive=!1,l.solid=!1,l.item.mesh.setMatrixAt(l.item.index,o),l.item.mesh.instanceMatrix.needsUpdate=!0,a.push(l),r&&r.propBurst(l))}for(let l of["corn","vine","grass","flower","pumpkin","reed"]){let c=this.instanced[l];if(!c)continue;let h=!1,u=new Zt,d=new L;for(let f=0;f<c.count;f++)c.getMatrixAt(f,u),d.setFromMatrixPosition(u),!(u.elements[0]===0&&u.elements[5]===0)&&ee(t,i,d.x,d.z)<n*.9&&(c.setMatrixAt(f,o),h=!0);h&&(c.instanceMatrix.needsUpdate=!0)}return a}settleProps(t,e,i){let n=this.terrain;for(let r in this.instanced){let a=this.instanced[r],o=new Zt,l=new L,c=new Ye,h=new L,u=!1;for(let d=0;d<a.count;d++)if(a.getMatrixAt(d,o),o.decompose(l,c,h),h.x!==0&&ee(t,e,l.x,l.z)<i+1.5){let f=n.heightAt(l.x,l.z)-.1;f<l.y-.05&&(l.y=f,o.compose(l,c,h),a.setMatrixAt(d,o),u=!0)}u&&(a.instanceMatrix.needsUpdate=!0)}for(let r of this.obstacles)if(r.destructible&&r.item.alive&&ee(t,e,r.x,r.z)<i+1){let a=n.heightAt(r.x,r.z);r.y0=a-.5,r.top=Math.min(r.top,a+(r.top-r.y0))}}collideCircle(t,e){let i=!1;for(let n of this.obstaclesNear(t.x,t.z)){if(!n.solid||t.y>n.top||t.y+1.6<n.y0)continue;let r=t.x-n.x,a=t.z-n.z,o=Math.sqrt(r*r+a*a),l=e+n.r;o<l&&o>1e-4&&(t.x=n.x+r/o*l,t.z=n.z+a/o*l,i=!0)}return i}update(t){if(this.time+=t,this.waterTex&&(this.waterTex.offset.x=this.time*.006,this.waterTex.offset.y=this.time*.004),this.clouds)for(let e of this.clouds.children)e.position.x+=e.userData.speed*t,e.position.x>480&&(e.position.x=-480);this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-t*120))}dispose(){this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material!==Qe().unit&&t.material!==Qe().prop&&t.material!==Qe().item&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.waterTex&&this.waterTex.dispose()}};var _x=`
attribute float size;
attribute vec4 rgba;
varying vec4 vC;
uniform float uScale;
void main() {
  vC = rgba;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = clamp(size * uScale / max(-mv.z, 0.1), 0.0, 512.0);
  gl_Position = projectionMatrix * mv;
}`,vx=`
varying vec4 vC;
uniform float uSoft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, uSoft, d);
  gl_FragColor = vec4(vC.rgb, vC.a * a);
  #include <colorspace_fragment>
}`,Ko=class{constructor(t,e,i){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.rgba=new Float32Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*3),this.c1=new Float32Array(e*3),this.a0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let n=new Ee;this.posAttr=new ye(this.pos,3).setUsage(Pn),this.rgbaAttr=new ye(this.rgba,4).setUsage(Pn),this.sizeAttr=new ye(this.size,1).setUsage(Pn),n.setAttribute("position",this.posAttr),n.setAttribute("rgba",this.rgbaAttr),n.setAttribute("size",this.sizeAttr),n.setDrawRange(0,0),this.uniforms={uScale:{value:500},uSoft:{value:i?0:.15}},this.mat=new di({vertexShader:_x,fragmentShader:vx,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:i?yr:Cn}),this.points=new Vn(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=i?4:3,this.geo=n,t.add(this.points)}spawn(t,e,i,n,r,a,o,l,c,h,u,d,f=0,p=0){if(this.n>=this.max)return;let x=this.n++;this.pos[x*3]=t,this.pos[x*3+1]=e,this.pos[x*3+2]=i,this.vel[x*3]=n,this.vel[x*3+1]=r,this.vel[x*3+2]=a,this.life[x]=o,this.maxLife[x]=o,this.s0[x]=l,this.s1[x]=c,this.c0[x*3]=h.r,this.c0[x*3+1]=h.g,this.c0[x*3+2]=h.b,this.c1[x*3]=u.r,this.c1[x*3+1]=u.g,this.c1[x*3+2]=u.b,this.a0[x]=d,this.grav[x]=f,this.drag[x]=p}copy(t,e){for(let i of[this.pos,this.vel,this.c0,this.c1])i[e*3]=i[t*3],i[e*3+1]=i[t*3+1],i[e*3+2]=i[t*3+2];for(let i of[this.life,this.maxLife,this.s0,this.s1,this.a0,this.grav,this.drag])i[e]=i[t]}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){this.n--,e!==this.n&&this.copy(this.n,e);continue}let i=Math.exp(-this.drag[e]*t);this.vel[e*3]*=i,this.vel[e*3+1]=this.vel[e*3+1]*i-this.grav[e]*t,this.vel[e*3+2]*=i,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t;let n=1-this.life[e]/this.maxLife[e];this.size[e]=this.s0[e]+(this.s1[e]-this.s0[e])*n,this.rgba[e*4]=this.c0[e*3]+(this.c1[e*3]-this.c0[e*3])*n,this.rgba[e*4+1]=this.c0[e*3+1]+(this.c1[e*3+1]-this.c0[e*3+1])*n,this.rgba[e*4+2]=this.c0[e*3+2]+(this.c1[e*3+2]-this.c0[e*3+2])*n,this.rgba[e*4+3]=this.a0[e]*(1-n*n),e++}this.geo.setDrawRange(0,this.n),this.posAttr.needsUpdate=!0,this.rgbaAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}},Le=s=>new yt(s),Lt={white:Le("#ffffff"),fire1:Le("#fff2b0"),fire2:Le("#ff7a1a"),fire3:Le("#9a2a08"),smoke1:Le("#5a5650"),smoke2:Le("#a8a49c"),dust:Le("#9a8a6a"),dust2:Le("#c9bda0"),milk:Le("#fffdf5"),water:Le("#d8f0ff"),water2:Le("#8fc4e6"),gas1:Le("#7a8a2a"),gas2:Le("#5a5a20"),heal:Le("#7dff8a"),heal2:Le("#2ecc40"),spark:Le("#ffd27a"),leaf:Le("#4f8a33"),straw:Le("#e2c46a"),rock:Le("#8a867e"),black:Le("#151515"),gold:Le("#ffd54f"),red:Le("#ff3b30")},Jo=class{constructor(t,e="medium"){this.scene=t;let i=e==="low"?.5:1;this.mul=i,this.add=new Ko(t,Math.round(1800*i),!0),this.norm=new Ko(t,Math.round(2400*i),!1),this.maxDebris=160;let n=new Pt(.18,.18,.18);this.debrisMesh=new Gn(n,new Ri({color:16777215}),this.maxDebris),this.debrisMesh.instanceMatrix.setUsage(Pn),this.debrisMesh.castShadow=!1,this.debrisMesh.frustumCulled=!1,this.debris=[],this.zero=new Zt().makeScale(0,0,0);for(let r=0;r<this.maxDebris;r++)this.debrisMesh.setMatrixAt(r,this.zero),this.debrisMesh.setColorAt(r,Lt.white);t.add(this.debrisMesh),this._m=new Zt,this._q=new Ye,this._e=new Je,this._p=new L,this._s=new L,this.terrain=null}setScale(t,e){let i=t/(2*Math.tan(e*Math.PI/360));this.add.uniforms.uScale.value=i,this.norm.uniforms.uScale.value=i}r(t=1){return(Math.random()*2-1)*t}spawnDebris(t,e,i,n,r,a=7){for(let o=0;o<r;o++){let l=this.debris.findIndex(h=>!h.alive);if(l<0)if(this.debris.length<this.maxDebris)l=this.debris.length,this.debris.push({});else break;let c=this.debris[l];c.alive=!0,c.p=new L(t,e+.2,i),c.v=new L(this.r(a*.6),Math.random()*a+2,this.r(a*.6)),c.rot=new L(this.r(3),this.r(3),this.r(3)),c.spin=new L(this.r(10),this.r(10),this.r(10)),c.life=1.6+Math.random()*1.4,c.s=.6+Math.random()*1.2,this.debrisMesh.setColorAt(l,n.clone().multiplyScalar(.7+Math.random()*.5)),this.debrisMesh.instanceColor.needsUpdate=!0}}explosion(t,e,i){let n=this.mul,r=this.add,a=this.norm;r.spawn(t.x,t.y+.3,t.z,0,0,0,.18,e*3.2,e*4.2,Lt.white,Lt.fire1,1);for(let o=0;o<18*n;o++){let l=e*(.8+Math.random()*.8);r.spawn(t.x+this.r(e*.3),t.y+.3+Math.random()*.5,t.z+this.r(e*.3),this.r(e*2.2),Math.random()*e*2.5+1,this.r(e*2.2),.35+Math.random()*.35,l,l*1.6,Lt.fire1,Lt.fire3,.95,-1,3)}for(let o=0;o<16*n;o++){let l=e*(1+Math.random());a.spawn(t.x+this.r(e*.5),t.y+.5+Math.random(),t.z+this.r(e*.5),this.r(e*1.2),Math.random()*e*1.4+1.5,this.r(e*1.2),1.6+Math.random()*1.6,l*.8,l*2.6,Lt.smoke1,Lt.smoke2,.75,-.6,1.2)}for(let o=0;o<22*n;o++)r.spawn(t.x,t.y+.4,t.z,this.r(14),Math.random()*14+2,this.r(14),.4+Math.random()*.5,.25,.05,Lt.spark,Lt.fire2,1,18*.8,.8);for(let o=0;o<14*n;o++)a.spawn(t.x+this.r(e*.4),t.y+.2,t.z+this.r(e*.4),this.r(6),Math.random()*9+3,this.r(6),.9+Math.random()*.6,.5,.9,i||Lt.dust,Lt.dust2,.9,18*.7,.5);this.spawnDebris(t.x,t.y,t.z,i||Lt.dust,Math.round(10*n+e*2),e*2.2)}splash(t,e=1){let i=this.norm;for(let n=0;n<26*this.mul*e;n++)i.spawn(t.x+this.r(.4*e),t.y+.1,t.z+this.r(.4*e),this.r(2.5*e),Math.random()*8*e+3,this.r(2.5*e),.8+Math.random()*.6,.35*e,.7*e,Lt.water,Lt.water2,.9,18*.8,.3);for(let n=0;n<8;n++){let r=n/8*Math.PI*2;i.spawn(t.x,t.y+.05,t.z,Math.cos(r)*3*e,.3,Math.sin(r)*3*e,.8,.6*e,1.6*e,Lt.water,Lt.water2,.6,0,2.5)}}muzzle(t,e){this.add.spawn(t.x,t.y,t.z,e.x*2,e.y*2,e.z*2,.07,.9,.5,Lt.fire1,Lt.fire2,1),this.norm.spawn(t.x,t.y,t.z,e.x*1.5,e.y*1.5+.5,e.z*1.5,.6,.2,.8,Lt.smoke2,Lt.smoke2,.4,-.5,1)}tracer(t,e){let i=t.distanceTo(e),n=Math.min(40,Math.ceil(i/1.2));for(let r=0;r<n;r++){let a=r/n;this.add.spawn(t.x+(e.x-t.x)*a,t.y+(e.y-t.y)*a,t.z+(e.z-t.z)*a,0,0,0,.12+a*.05,.14,.04,Lt.spark,Lt.fire2,.9)}}impactDust(t,e){for(let i=0;i<7;i++)this.norm.spawn(t.x,t.y+.05,t.z,this.r(2),Math.random()*3+1,this.r(2),.6+Math.random()*.4,.2,.6,e||Lt.dust,Lt.dust2,.8,18*.5,1)}milk(t){for(let e=0;e<12;e++)this.norm.spawn(t.x,t.y,t.z,this.r(3),Math.random()*4+1,this.r(3),.5+Math.random()*.4,.16,.06,Lt.milk,Lt.milk,1,18*.8,.5)}smokeTrail(t){this.norm.spawn(t.x,t.y,t.z,this.r(.3),this.r(.3)+.4,this.r(.3),.9+Math.random()*.5,.25,1.1,Lt.smoke2,Lt.smoke2,.55,-.4,1.5),this.add.spawn(t.x,t.y,t.z,0,0,0,.08,.5,.2,Lt.fire1,Lt.fire2,.9)}sparkle(t,e=Lt.spark){this.add.spawn(t.x,t.y,t.z,this.r(.4),.6,this.r(.4),.4,.15,.02,e,e,1)}heal(t){for(let e=0;e<26;e++)this.add.spawn(t.x+this.r(.6),t.y+Math.random()*1.6,t.z+this.r(.6),this.r(.3),1+Math.random()*1.5,this.r(.3),.9+Math.random()*.5,.3,.05,Lt.heal,Lt.heal2,1)}healRing(t,e){for(let i=0;i<48;i++){let n=i/48*Math.PI*2;this.add.spawn(t.x+Math.cos(n)*e,t.y+.3,t.z+Math.sin(n)*e,0,1.5,0,1.1,.5,.1,Lt.heal,Lt.heal2,1)}}gas(t,e){let i=Math.random()*Math.PI*2,n=Math.random()*e*.85;this.norm.spawn(t.x+Math.cos(i)*n,t.y+Math.random()*1.2,t.z+Math.sin(i)*n,this.r(.3),.15+Math.random()*.25,this.r(.3),2+Math.random()*1.5,1.2,2.6,Lt.gas1,Lt.gas2,.45,0,.5)}gasBurst(t,e){for(let i=0;i<40*this.mul;i++){let n=Math.random()*Math.PI*2,r=Math.random()*e*1.4;this.norm.spawn(t.x,t.y+.4,t.z,Math.cos(n)*r,Math.random()*2,Math.sin(n)*r,1.4+Math.random(),.8,2.6,Lt.gas1,Lt.gas2,.7,0,1.8)}}flame(t,e,i){for(let n=0;n<6;n++){let r=i*(1.1+Math.random()*.5);this.add.spawn(t.x,t.y,t.z,e.x*r+this.r(1.6),e.y*r+this.r(1)+.6,e.z*r+this.r(1.6),.55+Math.random()*.25,.3,1.6,Lt.fire1,Lt.fire3,.9,-1.5,1.2)}this.norm.spawn(t.x+e.x*i*.8,t.y+.5,t.z+e.z*i*.8,this.r(.5),1.2,this.r(.5),1.2,.6,1.8,Lt.smoke1,Lt.smoke2,.35,-.5,1)}burning(t){this.add.spawn(t.x+this.r(.3),t.y+Math.random()*.8,t.z+this.r(.3),this.r(.3),1.5+Math.random(),this.r(.3),.4,.5,.1,Lt.fire1,Lt.fire3,.9)}propBurst(t){let e=t.top-1,i=t.kind,n=Lt.leaf;i==="rock"?n=Lt.rock:i==="bale"?n=Lt.straw:i==="silo"&&(n=Lt.white),this.spawnDebris(t.x,e*.5+t.y0*.5,t.z,n,8,5);for(let r=0;r<20*this.mul;r++)this.norm.spawn(t.x+this.r(1),(t.y0+e)/2+Math.random()*2,t.z+this.r(1),this.r(3),Math.random()*4,this.r(3),1+Math.random(),.3,.15,n,n,1,18*.3,1.5)}stars(t){for(let e=0;e<10;e++){let i=e/10*Math.PI*2;this.add.spawn(t.x,t.y,t.z,Math.cos(i)*2,1.5,Math.sin(i)*2,.6,.3,.05,Lt.gold,Lt.gold,1,2,1)}}update(t){this.add.update(t),this.norm.update(t);let e=!1;for(let i=0;i<this.debris.length;i++){let n=this.debris[i];if(!n.alive)continue;if(e=!0,n.life-=t,n.life<=0){n.alive=!1,this.debrisMesh.setMatrixAt(i,this.zero);continue}if(n.v.y-=18*t,n.p.addScaledVector(n.v,t),this.terrain){let a=this.terrain.heightAt(n.p.x,n.p.z);n.p.y<a+.05&&(n.p.y=a+.05,n.v.y=Math.abs(n.v.y)*.3,n.v.x*=.6,n.v.z*=.6,n.spin.multiplyScalar(.6))}n.rot.addScaledVector(n.spin,t);let r=n.s*Math.min(1,n.life*2);this._e.set(n.rot.x,n.rot.y,n.rot.z),this._q.setFromEuler(this._e),this._m.compose(n.p,this._q,this._s.set(r,r,r)),this.debrisMesh.setMatrixAt(i,this._m)}(e||this._hadDebris)&&(this.debrisMesh.instanceMatrix.needsUpdate=!0),this._hadDebris=e}};var jo=class{constructor(t){this.cam=new si(55,t,.1,1500),this.target=new L(0,5,0),this.goal=new L(0,5,0),this.yaw=.6,this.pitch=.42,this.dist=40,this.goalDist=40,this.goalPitch=.42,this.mode="orbit",this.obj=null,this.userTime=99,this.shakeAmt=0,this.fov=55,this.goalFov=55,this.terrain=null,this.side=0,this.manualZoom=1,this.lockYaw=!1}setMode(t,e,i={}){this.mode=t,this.obj=e||null,this.opts=i,t==="overview"&&(this.goalPitch=1.05,this.goalDist=105,i.keepTarget||this.goal.set(0,0,0))}orbitInput(t,e){this.yaw-=t,this.goalPitch=zt(this.goalPitch+e,-.15,1.45),this.pitch=this.goalPitch,this.userTime=0}pan(t,e){let i=this.dist*.0018,n=Math.sin(this.yaw),r=Math.cos(this.yaw);this.goal.x+=(-t*r-e*n)*i,this.goal.z+=(t*n-e*r)*i,this.goal.x=zt(this.goal.x,-70,70),this.goal.z=zt(this.goal.z,-70,70),this.userTime=0}zoomInput(t){this.manualZoom=zt(this.manualZoom*t,.45,2.4),this.userTime=0}shake(t){this.shakeAmt=Math.min(1.5,this.shakeAmt+t)}update(t){this.userTime+=t;let e=this.obj,i=null,n=6;switch(this.mode){case"follow":{e&&(this.goal.set(e.pos.x,e.pos.y+1.3,e.pos.z),e.moving&&this.userTime>1.2&&(i=e.yaw+Math.PI)),this.goalDist=9*this.manualZoom,this.userTime>1.2&&(this.goalPitch=qo(this.goalPitch,.38,1-Math.exp(-t*2))),this.goalFov=55;break}case"aim":{if(e){let l=Math.sin(e.yaw),c=Math.cos(e.yaw),h=e.aimPitch,u=Math.cos(h),d=Math.sin(h);if(i=e.yaw+Math.PI,n=10,this.opts&&this.opts.sniper)this.goal.set(e.pos.x+l*.5,e.pos.y+1.85,e.pos.z+c*.5),this.goalDist=.6,this.goalPitch=-h,this.goalFov=24;else if(this.opts&&this.opts.ballistic){let f=zt(e.aimLandDist||14,4,50),p=f*.42;this.goal.set(e.pos.x+l*p,e.pos.y+1,e.pos.z+c*p),this.goalDist=(8+f*.62)*Math.sqrt(this.manualZoom),this.goalPitch=.56,this.goalFov=55,n=4}else{let p=e.pos.x+l*.75*u,x=e.pos.y+1.3+.75*d,g=e.pos.z+c*.75*u;this.goal.set(p+l*u*10,x+d*10,g+c*u*10),this.goalDist=(10+4.5)*Math.sqrt(this.manualZoom),this.goalPitch=zt(.2-h,-1.2,1.3),this.goalFov=52}}break}case"track":{e&&(this.goal.copy(e.pos||e),e.vel&&this.userTime>.8&&Math.hypot(e.vel.x,e.vel.z)>2&&(i=Math.atan2(e.vel.x,e.vel.z)+Math.PI+.35)),this.goalDist=13*this.manualZoom,this.goalPitch=qo(this.goalPitch,.35,1-Math.exp(-t*2)),this.goalFov=55,n=5;break}case"point":{e&&this.goal.copy(e),this.goalDist=(this.opts&&this.opts.dist?this.opts.dist:16)*this.manualZoom,this.goalFov=55;break}case"overview":{this.goalDist=105*this.manualZoom,this.goalFov=55;break}case"orbit":{e&&this.goal.copy(e.pos||e),this.userTime>2&&(this.yaw+=t*.06),this.goalDist=this.opts&&this.opts.dist||70,this.goalPitch=this.opts&&this.opts.pitch||.45,this.goalFov=50,n=1.2;break}default:break}i!==null&&(this.yaw+=Us(this.yaw,i)*(1-Math.exp(-t*(this.mode==="aim"?12:2.5)))),this.target.x=Oe(this.target.x,this.goal.x,n,t),this.target.y=Oe(this.target.y,this.goal.y,n,t),this.target.z=Oe(this.target.z,this.goal.z,n,t),this.dist=Oe(this.dist,this.goalDist,5,t),this.pitch=Oe(this.pitch,this.goalPitch,6,t),Math.abs(this.fov-this.goalFov)>.05&&(this.fov=Oe(this.fov,this.goalFov,8,t),this.cam.fov=this.fov,this.cam.updateProjectionMatrix());let r=Math.cos(this.pitch),a=Math.sin(this.pitch),o=this.cam.position;if(o.set(this.target.x+Math.sin(this.yaw)*r*this.dist,this.target.y+a*this.dist,this.target.z+Math.cos(this.yaw)*r*this.dist),this.terrain){let l=this.terrain.heightAt(o.x,o.z)+.8,c=this.terrain.waterLevel+.6,h=Math.max(l,c);o.y<h&&(o.y=h)}if(this.shakeAmt>.001){let l=this.shakeAmt*.35;o.x+=(Math.random()-.5)*l,o.y+=(Math.random()-.5)*l,o.z+=(Math.random()-.5)*l,this.shakeAmt*=Math.exp(-t*7)}this.cam.lookAt(this.target)}screenRay(t,e){let n=new L(t,e,.5).unproject(this.cam).sub(this.cam.position).normalize();return{origin:this.cam.position.clone(),dir:n}}};var Mx=1,Qo=class{constructor(t,e,i){this.uid=Mx++,this.game=t,this.s=e,this.team=i,this.hpMax=Ls[e.tier],this.hp=this.hpMax,this.pos=new L,this.vel=new L,this.slide=new L,this.yaw=0,this.aimPitch=.3,this.onGround=!0,this.alive=!0,this.stamina=100,this.moving=!1,this.walkAmt=0,this.phase=Math.random()*10,this.aiming=!1,this.ammo=Wo(e),this.stats={dmg:0,kills:0,dmgTaken:0},this.squash=0,this.deathT=0,this.deathKind=null,this.noFall=!1,this.lastHitBy=null,this.lastHitTime=-99,this.scripted=null,this.throwAnim=0,this.lunge=0,this.cheer=0,this.burnT=0;let n=Math.floor(un(e.id*13+7,e.name.length)*1e9);this.model=pd({sex:e.sex,breed:e.breed,teamColor:i.color,tier:e.tier,seed:n}),t.scene.add(this.model.root),this.center=new L,this.headPos=new L,this.weapon=this.defaultWeapon()}get isStier(){return this.s.sex==="stier"}get name(){return ed(this.s)}get title(){return Dn(this.s)}get rank(){return ki[this.s.tier]}defaultWeapon(){for(let t of["panzerfaust","sniper","gewehr","flinte","granate","pistole"])if(this.ammo[t]&&this.ammo[t]!==0)return t;return"pistole"}weapons(){return Vo.filter(t=>this.ammo[t]!==void 0)}getCenter(){return this.center.set(this.pos.x,this.pos.y+.95,this.pos.z)}getHead(){return this.headPos.set(this.pos.x,this.pos.y+2.05,this.pos.z)}forward(t=new L){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}aimDir(t=new L,e=this.yaw,i=this.aimPitch){let n=Math.cos(i);return t.set(Math.sin(e)*n,Math.sin(i),Math.cos(e)*n)}muzzle(t=new L,e=this.yaw,i=this.aimPitch){let n=this.aimDir(new L,e,i);return t.set(this.pos.x,this.pos.y+1.3,this.pos.z).addScaledVector(n,.75)}setHeld(t){let e=oe[t],i=this.model;i.gun.visible=!1,i.tube.visible=!1,i.ball.visible=!1,e&&(e.type==="hitscan"||e.type==="cone"?i.gun.visible=!0:e.tube?i.tube.visible=!0:e.throw&&(i.ball.visible=!0))}impulse(t){this.vel.add(t),this.vel.y<1.5&&(this.vel.y=1.5),this.onGround=!1,this.slide.set(0,0,0)}jump(){if(!this.onGround||this.scripted||this.stamina<5)return!1;let t=this.forward();return this.vel.set(t.x*3.6,6.4,t.z*3.6),this.onGround=!1,this.stamina=Math.max(0,this.stamina-6),!0}startFlight(t,e){this.scripted={from:this.pos.clone(),to:t.clone(),t:0,dur:e},this.onGround=!1,this.model.chute.visible=!1}update(t){let e=this.game.terrain;if(!this.alive){this.updateDead(t);return}if(this.scripted){let i=this.scripted;i.t+=t;let n=Math.min(1,i.t/i.dur),r=Math.sin(n*Math.PI)*(6+i.from.distanceTo(i.to)*.25);this.pos.lerpVectors(i.from,i.to,n),this.pos.y+=r,this.model.chute.visible=n>.45,n>=1&&(this.scripted=null,this.pos.y=e.heightAt(this.pos.x,this.pos.z),this.onGround=!0,this.model.chute.visible=!1,this.vel.set(0,0,0),this.game.fx.impactDust(this.pos))}else if(this.onGround){if(this.slide.lengthSq()>.004){let r=this.pos.x+this.slide.x*t,a=this.pos.z+this.slide.z*t;this.pos.x=r,this.pos.z=a,this.slide.multiplyScalar(Math.exp(-4*t)),this.game.world.collideCircle(this.pos,.45)}if(e.slopeAt(this.pos.x,this.pos.z)>1.5){let r=e.normalAt(this.pos.x,this.pos.z);this.slide.x+=r.x*9*t,this.slide.z+=r.z*9*t}let n=e.heightAt(this.pos.x,this.pos.z);n<this.pos.y-.35?(this.onGround=!1,this.vel.set(this.slide.x,0,this.slide.z)):this.pos.y=n}else{this.vel.y-=18*t,this.vel.x*=Math.exp(-.15*t),this.vel.z*=Math.exp(-.15*t),this.pos.addScaledVector(this.vel,t),this.game.world.collideCircle(this.pos,.45);let i=e.heightAt(this.pos.x,this.pos.z);if(this.pos.y<=i){let n=-this.vel.y;this.pos.y=i,this.onGround=!0,Math.hypot(this.vel.x,this.vel.z)>1.5&&this.slide.set(this.vel.x,0,this.vel.z).multiplyScalar(.35),this.vel.set(0,0,0),n>12.5&&!this.noFall&&this.game.damageUnit(this,Math.round((n-12.5)*3.2),this.lastHitBy,null,"fall"),n>4&&this.game.fx.impactDust(this.pos),this.noFall=!1,this.squash=Math.min(1,n/12)}}if(this.pos.y<e.waterLevel-.85||Math.abs(this.pos.x)>200||Math.abs(this.pos.z)>200){this.game.onDrown(this);return}this.burnT>0&&(this.burnT-=t,Math.random()<.5&&this.game.fx.burning(this.getCenter())),this.animate(t)}updateDead(t){this.deathT+=t;let e=this.model;if(this.deathKind==="drown"){this.pos.y-=t*.8,e.root.position.copy(this.pos),e.root.rotation.z=Math.sin(this.deathT*6)*.2,Math.random()<.3&&this.game.fx.norm.spawn(this.pos.x+(Math.random()-.5),this.game.terrain.waterLevel+.05,this.pos.z+(Math.random()-.5),0,.5,0,.6,.2,.4,gd,gd,.8,0,1),this.deathT>2.5&&(e.root.visible=!1);return}if(this.onGround)this.pos.y=this.game.terrain.heightAt(this.pos.x,this.pos.z);else{this.vel.y-=18*t,this.pos.addScaledVector(this.vel,t);let i=this.game.terrain.heightAt(this.pos.x,this.pos.z);this.pos.y<=i&&(this.pos.y=i,this.onGround=!0,this.vel.set(0,0,0))}if(e.root.position.copy(this.pos),e.root.rotation.z=Oe(e.root.rotation.z,Math.PI/2,6,t),e.legL.rotation.x=Oe(e.legL.rotation.x,.6,4,t),e.legR.rotation.x=Oe(e.legR.rotation.x,-.4,4,t),this.deathT>1.6&&!this.grave&&this.pos.y>this.game.terrain.waterLevel-.5){e.root.visible=!1;let i=new Kt(Mi("grave"),Qe().prop);i.position.copy(this.pos),i.rotation.y=this.yaw,i.castShadow=!0,this.game.scene.add(i),this.grave=i,this.game.fx.impactDust(this.pos)}this.grave&&(this.grave.position.y=this.game.terrain.heightAt(this.grave.position.x,this.grave.position.z))}animate(t){let e=this.model,i=this.game.time;this.walkAmt=Oe(this.walkAmt,this.moving?1:0,10,t),this.moving&&(this.phase+=t*10);let n=Math.sin(this.phase)*.7*this.walkAmt,r=!this.onGround&&!this.scripted?1:0;if(e.legL.rotation.x=n+r*.5,e.legR.rotation.x=-n-r*.3,e.body.position.y=Math.abs(Math.sin(this.phase))*.07*this.walkAmt+Math.sin(i*2+this.uid)*.012,e.tail.rotation.z=Math.sin(i*2.3+this.uid)*.4,e.tail.rotation.x=.15+Math.sin(i*1.7+this.uid)*.1,e.head.rotation.y=Math.sin(i*.7+this.uid*2)*.12*(1-this.walkAmt),e.head.rotation.x=Math.sin(i*1.1+this.uid)*.04,this.cheer>0)this.cheer+=t,e.armL.rotation.x=-2.8+Math.sin(i*10)*.3,e.armR.rotation.x=-2.8-Math.sin(i*10)*.3,e.armL.rotation.z=.2,e.armR.rotation.z=-.2,e.body.position.y+=Math.abs(Math.sin(i*7))*.25,e.weapon.visible=!1;else if(this.aiming){let o=this.aimPitch,l=oe[this.weapon];l&&l.throw?(this.throwAnim=Math.max(0,this.throwAnim-t*4),e.armR.rotation.x=Oe(e.armR.rotation.x,-2.6+this.throwAnim*2.2,18,t),e.armR.rotation.z=-.2,e.armL.rotation.x=Oe(e.armL.rotation.x,-1.2,10,t),e.armL.rotation.z=.2,e.weapon.rotation.x=0,e.weapon.position.set(0,1.62-this.throwAnim*.3,-.05+this.throwAnim*.4)):(e.weapon.position.set(0,l&&l.tube?1.45:1.25,.3),e.weapon.rotation.x=-o,e.armL.rotation.x=Oe(e.armL.rotation.x,-Math.PI/2-o+.15,14,t),e.armR.rotation.x=Oe(e.armR.rotation.x,-Math.PI/2-o+.15,14,t),e.armL.rotation.z=.35,e.armR.rotation.z=-.35),e.weapon.visible=!0}else e.weapon.visible=!0,e.weapon.position.set(0,1.2,.3),e.weapon.rotation.x=Oe(e.weapon.rotation.x,.7,8,t),e.armL.rotation.x=Oe(e.armL.rotation.x,-.55-n*.5-r*1.5,10,t),e.armR.rotation.x=Oe(e.armR.rotation.x,-.55+n*.5-r*1.5,10,t),e.armL.rotation.z=.25+r*.6,e.armR.rotation.z=-.25-r*.6;this.lunge>0?(this.lunge=Math.max(0,this.lunge-t*3),e.body.rotation.x=Math.sin(this.lunge*Math.PI)*.6,e.head.rotation.x=Math.sin(this.lunge*Math.PI)*.5):e.body.rotation.x=Oe(e.body.rotation.x,0,10,t),this.squash=Math.max(0,this.squash-t*4);let a=Math.sin(this.squash*Math.PI)*.18;e.root.scale.set(1+a*.5,1-a,1+a*.5),e.root.position.copy(this.pos),e.root.rotation.y=this.yaw,this.scripted&&this.model.chute.visible&&(e.chute.rotation.y+=t*.5)}dispose(){this.game.scene.remove(this.model.root),this.model.root.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.grave&&(this.game.scene.remove(this.grave),this.grave.geometry.dispose())}},gd=new yt("#e0f4ff");var bx=[],tl=1/60,Sx=new L,wx=new yt("#b0aca4"),Ex=new yt("#d0ccc4"),Tx=new L(0,.15,0);function yd(s,t,e){let i=tl;if(s.t+=i,s.bounced=!1,s.rest)return s.y=e.terrain.heightAt(s.x,s.z)+.1,s.y<e.waterLevel?{type:"water"}:t.fuse&&s.t>=t.fuse?{type:"fuse"}:null;s.vy-=18*i,t.wind&&(s.vx+=e.wind.x*t.wind*7*i,s.vz+=e.wind.z*t.wind*7*i);let n=s.x+s.vx*i,r=s.y+s.vy*i,a=s.z+s.vz*i,o=e.units;for(let h=0;h<o.length;h++){let u=o[h];if(!u.alive||u===e.owner&&s.t<.35)continue;let d=n-u.pos.x,f=r-(u.pos.y+.95),p=a-u.pos.z;if(d*d+f*f*.4+p*p<.36)return t.impact?(s.x=n,s.y=r,s.z=a,{type:"unit",unit:u}):(s.vx*=-.3,s.vz*=-.3,s.vy=Math.abs(s.vy)*.3,s.bounced=!0,null)}let l=e.grid?e.grid.get(Yo(Math.floor(n/dn),Math.floor(a/dn)))||bx:e.obstacles;for(let h=0;h<l.length;h++){let u=l[h];if(!u.solid||r>u.top||r<u.y0)continue;let d=n-u.x,f=a-u.z;if(d*d+f*f<u.pr*u.pr){if(t.impact)return s.x=n,s.y=r,s.z=a,{type:"prop",prop:u};let p=Math.sqrt(d*d+f*f)||1,x=d/p,g=f/p,m=s.vx*x+s.vz*g;return m<0&&(s.vx=(s.vx-2*m*x)*.5,s.vz=(s.vz-2*m*g)*.5),s.bounced=!0,null}}let c=e.terrain.heightAt(n,a);if(r<=c){if(t.impact)return s.x=n,s.y=c,s.z=a,{type:"ground"};let h=e.terrain.normalAt(n,a,Sx),u=t.bounce||.4,d=s.vx*h.x+s.vy*h.y+s.vz*h.z;d<0&&(s.vx-=(1+u)*d*h.x,s.vy-=(1+u)*d*h.y,s.vz-=(1+u)*d*h.z),s.vx*=.78,s.vz*=.78,s.x=n,s.z=a,s.y=c+.03;let f=s.vx*s.vx+s.vy*s.vy+s.vz*s.vz;f<.9&&(s.vx=s.vy=s.vz=0,s.rest=!0),s.bounced=f>2}else s.x=n,s.y=r,s.z=a;return s.y<e.waterLevel?{type:"water"}:t.fuse&&s.t>=t.fuse?{type:"fuse"}:Math.abs(s.x)>320||Math.abs(s.z)>320||s.y<-20?{type:"gone"}:null}function Or(s,t,e,i,n=9,r=null){let a={x:t.x,y:t.y,z:t.z,vx:e.x,vy:e.y,vz:e.z,t:0,rest:!1},o=Math.ceil(n/tl);for(let l=0;l<o;l++){let c=yd(a,s,i);if(r&&l%3===0&&r.push(a.x,a.y,a.z),c)return{...c,x:a.x,y:a.y,z:a.z,t:a.t}}return{type:"timeout",x:a.x,y:a.y,z:a.z,t:a.t}}var Jn=class{constructor(t,e,i,n,r,a,o={}){this.game=t,this.W=e,this.wid=i,this.owner=a,this.opts=o,this.s={x:n.x,y:n.y,z:n.z,vx:r.x,vy:r.y,vz:r.z,t:0,rest:!1},this.mesh=new Kt(Mi(o.mesh||e.mesh||"granate"),Qe().item),this.mesh.castShadow=!0,o.scale&&this.mesh.scale.setScalar(o.scale),t.scene.add(this.mesh),this.acc=0,this.dead=!1,this.spin=new L(Math.random()*8,Math.random()*8,Math.random()*8),this.pos=new L(n.x,n.y,n.z),this.vel=new L(r.x,r.y,r.z),this.trailT=0,this.sync()}sync(){let t=this.s;if(this.pos.set(t.x,t.y,t.z),this.vel.set(t.vx,t.vy,t.vz),this.mesh.position.copy(this.pos),(this.W.impact||this.opts.align)&&this.vel.lengthSq()>.01){let e=this.pos.clone().add(this.vel);this.mesh.lookAt(e)}}update(t,e){if(!this.dead){for(this.acc+=t;this.acc>=tl;){this.acc-=tl;let i=yd(this.s,this.W,e);if(this.s.bounced&&this.game.sfx("bounce"),i){this.sync(),this.dead=!0,this.game.onProjectileHit(this,i);return}}if(this.sync(),!this.W.impact&&!this.opts.align&&!this.s.rest&&(this.mesh.rotation.x+=this.spin.x*t,this.mesh.rotation.y+=this.spin.y*t),this.trailT-=t,this.trailT<=0){this.trailT=.025;let i=this.game.fx;this.wid==="panzerfaust"?i.smokeTrail(this.pos):this.W.impact&&i.norm.spawn(this.pos.x,this.pos.y,this.pos.z,0,.3,0,.6,.15,.5,wx,Ex,.35,-.3,1),this.W.fuse&&this.s.t>this.W.fuse-1&&Math.floor(this.s.t*8)%2===0&&i.sparkle(this.pos.clone().add(Tx)),this.wid==="guelle"&&i.gas(this.pos,.2)}}}remove(){this.game.scene.remove(this.mesh),this.mesh.geometry.dispose()}};var Ii=L;function Br(){return(Math.random()+Math.random()+Math.random()-1.5)/1.5}function Fc(s,t,e=new Ii){let i=Math.cos(t);return e.set(Math.sin(s)*i,Math.sin(t),Math.cos(s)*i)}function _d(s,t,e,i=new Ii){let n=Fc(t,e);return i.set(s.x,s.y+1.3,s.z).addScaledVector(n,.75)}var el=class{constructor(t,e,i){this.game=t,this.team=e,this.diff=i,this.D=Nr[i]||Nr.normal,this.sims=0}ok(t){let e=this.game;return!e.disposed&&t.alive&&e.phase==="ai"&&e.unit===t}finish(){let t=this.game;!t.disposed&&t.phase==="ai"&&t.endTurn()}async yieldMaybe(t=!1){this.sims++;let e=performance.now();this.frameStart||(this.frameStart=e),(t||e-this.frameStart>7)&&(await this.game.nextFrame(),this.frameStart=performance.now())}async takeTurn(t){let e=this.game;if(await e.wait(.7+.5*this.D.think),!this.ok(t))return this.finish();if(t=await this.chooseUnit(t),!this.ok(t))return this.finish();let i=await this.plan(t,t.pos.clone(),!1),n=await this.chooseMove(t,i);if(n){if(await this.walkTo(t,n),!this.ok(t))return this.finish();i=await this.plan(t,t.pos.clone(),!1)}if(!this.ok(t))return this.finish();i&&i.score>1?await this.execute(t,i):await e.wait(.6),this.finish()}async chooseUnit(t){let e=this.game,i=this.team.units.filter(a=>a.alive);if(i.length<2||Math.random()>this.D.smart)return t;let n=t,r=-1/0;for(let a of i){let o=await this.plan(a,a.pos.clone(),!0),l=o?o.score:0;if(a===t&&(l+=4),a.hp<a.hpMax*.35&&(l+=6),l>r&&(r=l,n=a),!this.ok(t))return t}return n!==t&&(e.unit=n,n.stamina=100,e.weapon=n.defaultWeapon(),n.setHeld(e.weapon),this.team.next=(this.team.units.indexOf(n)+1)%this.team.units.length,e.hud.turnStart(e,this.team,n,!0),await e.wait(.5)),n}nearWaterBonus(t,e,i){let n=this.game.terrain,r=Math.hypot(e,i)||1;for(let a of[2.5,4.5,6.5]){let o=t.pos.x+e/r*a,l=t.pos.z+i/r*a;if(n.heightAt(o,l)<n.waterLevel-.3)return 22}return 0}explosionScore(t,e,i,n,r){let a=0;for(let o of this.game.units){if(!o.alive)continue;let l=o===n?new Ii(r.x,r.y+.95,r.z):o.getCenter(),c=l.distanceTo(t);if(c>=e)continue;let h=1-c/e,u=i*Math.pow(h,.65);o.team!==n.team?(a+=Math.min(u,o.hp),u>=o.hp&&(a+=30),a+=this.nearWaterBonus(o,l.x-t.x,l.z-t.z)*h):o===n?a-=u*2.5+(u>=o.hp?80:0):a-=u*1.5+(u>=o.hp?45:0)}return a}hitscanPlan(t,e,i,n,r){let a=this.game,o=n.getCenter().clone(),l=Math.atan2(o.x-r.x,o.z-r.z),c=new Ii(r.x,r.y+1.3,r.z),h=Math.atan2(o.y-c.y,ee(c.x,c.z,o.x,o.z)),u=_d(r,l,h),d=u.distanceTo(o);if(d>e.range)return null;let f=o.clone().sub(u).normalize(),p=a.traceRay(u,f,d+1,t);if(!p.unit||p.unit.team===t.team)return null;let x=Math.max(e.spread||0,.3)*Te,g=zt(.55/(d*Math.tan(x)+.01),.05,.95),m=(e.shots||1)*(e.pellets||1)*e.dmg*g*(d>e.range*.6?.75:1);m=Math.min(m,n.hp+10);let y=m;return m>=n.hp&&(y+=25),{score:y,weapon:i,yaw:l,pitch:h,power:1,kind:"hitscan",target:n}}meleePlan(t,e,i,n,r){if(ee(r.x,r.z,n.pos.x,n.pos.z)>e.range-.25||Math.abs(n.pos.y-r.y)>1.2)return null;let o=t.isStier?e.dmgStier:e.dmg,l=Math.atan2(n.pos.x-r.x,n.pos.z-r.z);return{score:Math.min(o,n.hp)+(o>=n.hp?25:0)+this.nearWaterBonus(n,n.pos.x-r.x,n.pos.z-r.z)*1.4,weapon:i,yaw:l,pitch:0,power:1,kind:"melee",target:n}}conePlan(t,e,i,n,r){let a=n.getCenter(),o=new Ii(r.x,r.y+1.3,r.z).distanceTo(a);if(o>e.range)return null;let l=Math.atan2(a.x-r.x,a.z-r.z),c=Math.atan2(a.y-(r.y+1.3),ee(r.x,r.z,a.x,a.z));if(!this.game.terrain.lineOfSight(new Ii(r.x,r.y+1.3,r.z),a,0))return null;let h=e.dmg*(1-.4*o/e.range),u=0;for(let d of this.game.units){if(!d.alive||d===t)continue;let p=d.getCenter().clone().sub(new Ii(r.x,r.y+1.3,r.z));p.length()>e.range||p.angleTo(Fc(l,c))>e.angle*Te||(u+=d.team===t.team?-h*1.5:Math.min(h,d.hp)+(h>=d.hp?25:0))}return{score:u,weapon:i,yaw:l,pitch:c,power:1,kind:"cone"}}async ballisticPlan(t,e,i,n,r,a){let o=this.game,l=o.env,c=e.impact?n.getCenter().clone():n.pos.clone(),h=new Ii(r.x,r.y+1.3,r.z),u=Math.atan2(c.x-r.x,c.z-r.z),d=e.minPitch!==void 0?e.minPitch:5,f=[];for(let b=Math.max(d,6);b<=80;b+=a?14:8)f.push(b*Te);let p=[];for(let b=.22;b<=1.001;b+=a?.13:.07)p.push(Math.min(1,b));let x=null,g=new Ii,m=new Ii,y=(b,_,w)=>{_d(r,b,_,m),Fc(b,_,g).multiplyScalar(e.speed*w),l.owner=t;let C=Or(e,m,g,l,7);l.owner=null;let R=new Ii(C.x,C.y,C.z),D=R.distanceTo(c);return(C.type==="water"||C.type==="gone"||C.type==="timeout")&&(D+=25),C.type==="unit"&&C.unit===n&&(D=0),{err:D,pitch:_,power:w,yaw:b,r:C,pt:R}},T=a?1:3;for(let b=0;b<T;b++){let _=null;if(b===0)for(let D of f)for(let F of p){let k=y(u,D,F);(!_||k.err<_.err)&&(_=k),await this.yieldMaybe()}else{let D=x;for(let F=-4;F<=4;F+=2)for(let k=-.06;k<=.061;k+=.03){let I=zt(D.pitch+F*Te,d*Te,82*Te),H=zt(D.power+k,.05,1),X=y(u,I,H);(!_||X.err<_.err)&&(_=X),await this.yieldMaybe()}}(!x||_.err<x.err)&&(x=_);let w=Math.atan2(x.pt.x-h.x,x.pt.z-h.z),C=Math.atan2(c.x-h.x,c.z-h.z),R=Us(w,C);if(Math.abs(R)<.004&&x.err<1)break;u=x.yaw+R}if(!x||o.disposed)return null;let v,E=x.r;return E.type==="water"||E.type==="gone"||E.type==="timeout"?v=-5:(v=this.explosionScore(x.pt,e.radius,e.dmg,t,r),e.cluster&&(v*=1.35),e.gas&&(v+=this.explosionScore(x.pt,e.gas.radius,e.gas.dmg*2,t,r)*.8)),x.err>e.radius*1.4&&(v*=.4),{score:v,weapon:i,yaw:x.yaw,pitch:x.pitch,power:x.power,kind:"ballistic",point:x.pt,err:x.err}}async plan(t,e,i){let r=this.game.enemiesOf(t.team);if(!r.length)return null;r.sort((h,u)=>ee(h.pos.x,h.pos.z,e.x,e.z)-ee(u.pos.x,u.pos.z,e.x,e.z));let a=r.slice(0,i?2:4),o={score:0},l=(h,u)=>{h&&(h.score-=u,h.score>o.score&&(o=h))},c=0;for(let h of t.weapons()){let u=t.ammo[h];if(u===0||u===void 0)continue;let d=oe[h],f=u<0?0:3;switch(h==="heiligekuh"&&(f=25),(h==="haubitze"||h==="jet")&&(f=14),d.type){case"melee":for(let p of a)l(this.meleePlan(t,d,h,p,e),f);break;case"hitscan":for(let p of a)l(this.hitscanPlan(t,d,h,p,e),f);break;case"cone":for(let p of a)l(this.conePlan(t,d,h,p,e),f);break;case"ballistic":{if(i&&c>=1)break;c++;for(let p of a){if(ee(p.pos.x,p.pos.z,e.x,e.z)<d.radius*1.1)continue;let g=await this.ballisticPlan(t,d,h,p,e,i);l(g,f)}break}case"heal":{if(d.area){let p=0;for(let x of this.team.units)x.alive&&x.pos.distanceTo(e)<=d.area&&(p+=Math.min(d.amount,x.hpMax-x.hp));l({score:p*.9,weapon:h,kind:"heal"},f)}else t.hp<t.hpMax*.5&&l({score:Math.min(d.amount,t.hpMax-t.hp)*1.1,weapon:h,kind:"heal"},f);break}case"strike":{if(i)break;for(let p of a){let x=p.pos.clone(),g=this.explosionScore(x,d.radius,d.dmg,t,e)*(h==="haubitze"?1.4:1.6);ee(x.x,x.z,e.x,e.z)<10&&(g-=40),l({score:g,weapon:h,kind:"strike",target:x},f)}break}case"place":{h==="mine"&&r[0]&&ee(r[0].pos.x,r[0].pos.z,e.x,e.z)<12&&l({score:7,weapon:h,kind:"place",yaw:Math.atan2(r[0].pos.x-e.x,r[0].pos.z-e.z)},f);break}default:break}}return o.weapon?o:null}pathOk(t,e){let i=this.game.terrain,n=ee(t.x,t.z,e.x,e.z),r=Math.ceil(n/.8),a=i.heightAt(t.x,t.z);for(let o=1;o<=r;o++){let l=o/r,c=t.x+(e.x-t.x)*l,h=t.z+(e.z-t.z)*l,u=i.heightAt(c,h);if(u<i.waterLevel+.5||(u-a)/(n/r)>1.2)return!1;a=u}return!0}async chooseMove(t,e){let i=this.game,n=i.terrain,r=e?e.score:0;if(r>=30&&Math.random()<.8||Math.random()>this.D.smart+.2)return null;let a=Math.min(15,t.stamina/6.3),o=[],l=8,c=Math.random()*Math.PI*2;for(let m=0;m<l;m++){let y=c+m/l*Math.PI*2;for(let T of[a*.55,a*.95]){let v=t.pos.x+Math.sin(y)*T,E=t.pos.z+Math.cos(y)*T,b=n.heightAt(v,E);if(b<n.waterLevel+.9)continue;let _=new Ii(v,b,E);this.pathOk(t.pos,_)&&o.push(_)}}for(let m of i.crates)if(m.landed&&!m.dead&&ee(m.pos.x,m.pos.z,t.pos.x,t.pos.z)<a&&this.pathOk(t.pos,m.pos)){let y=m.pos.clone();y.crate=m,o.push(y)}let h=i.enemiesOf(t.team);if(!h.length)return null;let u=m=>Math.min(...h.map(y=>ee(y.pos.x,y.pos.z,m.x,m.z))),d=null,f=r+6,p=null,x=u(t.pos);o.sort(()=>Math.random()-.5);let g=Math.min(o.length,this.diff==="hard"?10:6);for(let m=0;m<o.length;m++){let y=o[m],T=u(y);if(T<x-2&&T>4&&(x=T,p=y),m>=g&&!y.crate)continue;let v=await this.plan(t,y,!0);if(!this.ok(t))return null;let E=v?v.score:0;y.crate&&(E+=y.crate.type==="jause"?(t.hpMax-t.hp)*.4+6:12);for(let b of[1.5,3])for(let _=0;_<4;_++){let w=_/4*Math.PI*2;n.heightAt(y.x+Math.sin(w)*b,y.z+Math.cos(w)*b)<n.waterLevel&&(E-=4)}for(let b of i.gases)b.pos.distanceTo(y)<b.radius+1&&(E-=25);E>f&&(f=E,d=y)}return d||((!e||r<8)&&p?p:null)}async walkTo(t,e){let i=this.game,n=0,r=0,a=1/0,o=!1;for(;;){let l=await i.nextFrame();if(!this.ok(t))return;n+=l;let c=ee(t.pos.x,t.pos.z,e.x,e.z);if(c<.7||t.stamina<=0||n>9)break;let h=Math.atan2(e.x-t.pos.x,e.z-t.pos.z),u=Us(t.yaw,h);if(t.yaw+=zt(u,-l*5,l*5),Math.abs(u)<.6&&t.onGround&&!i.walk(t,1,l)&&!o&&t.onGround&&(o=!0,t.jump()&&i.sfx("jump")),c<a-.02?(a=c,r=0):r+=l,r>1.2)break}t.moving=!1;for(let l=0;l<90&&!t.onGround;l++)if(await i.nextFrame(),!this.ok(t))return;await i.wait(.25)}async turnTo(t,e){let i=this.game;for(let n=0;n<240;n++){let r=await i.nextFrame();if(!this.ok(t))return;let a=Us(t.yaw,e);if(Math.abs(a)<.01){t.yaw=e;return}t.yaw+=zt(a,-r*3,r*3)}t.yaw=e}async pitchTo(t,e){let i=this.game;for(let n=0;n<240;n++){let r=await i.nextFrame();if(!this.ok(t))return;let a=e-t.aimPitch;if(Math.abs(a)<.01){t.aimPitch=e;return}t.aimPitch+=zt(a,-r*1.5,r*1.5)}t.aimPitch=e}async execute(t,e){let i=this.game,n=this.D,r=oe[e.weapon];if(i.weapon=e.weapon,t.weapon=e.weapon,t.setHeld(e.weapon),r.type==="strike"){if(await i.wait(.7),!this.ok(t))return;let c=e.target.clone();c.x+=Br()*n.yaw*.6,c.z+=Br()*n.yaw*.6,c.y=i.terrain.heightAt(c.x,c.z),await i.fire({target:c});return}if(r.type==="heal"){if(await i.wait(.5),!this.ok(t))return;await i.fire({});return}let a=e.yaw,o=e.pitch||0,l=e.power||1;if((r.type==="ballistic"||r.type==="hitscan")&&(a+=Br()*n.yaw*Te,o+=Br()*n.pitch*Te,l=zt(l+Br()*n.power,.05,1)),t.aimLandDist=e.point?ee(t.pos.x,t.pos.z,e.point.x,e.point.z):void 0,r.type!=="melee"&&r.type!=="place"&&(t.aiming=!0),await this.turnTo(t,a),!!this.ok(t)&&((r.type==="ballistic"||r.type==="hitscan"||r.type==="cone")&&await this.pitchTo(t,o),!!this.ok(t))){if(r.type==="ballistic"){for(await i.wait(.25),i.charging=!0,i.power=0;i.power<l;){let c=await i.nextFrame();if(!this.ok(t)){i.charging=!1;return}i.power=Math.min(l,i.power+c/1.6)}i.charging=!1}else await i.wait(.45);this.ok(t)&&await i.fire({yaw:a,pitch:o,power:l})}}};var Ax={select:["Na servas, wos w\xFCllst?","I bin scho do, oida.","Geh bitte, scho wieder i?","H\xFC-hott, gemma!","Wem soll i a Watschn gebn?","Jo eh, i geh ja scho.","Heast, i hob grad gjausnt.","Wenn's sein muass\u2026","Na, schau ma amoi.","Muuuh. Jo. Wos is?","Is des a Befehl oder a Bitte?","I steh bereit. Glaub i.","Wer st\xF6rt?","Gib ma a Ziel, i gib da a Loch.","Mi brauchst ned zwamol fragn."],fire:["Do hast as!","Friss Blei, du Kalbsbratl!","Schleich di!","A Packl vom Christkindl!","F\xFCr Heimat und Heustadl!","Hau di \xFCber d'H\xE4user!","Nimm des, du Gselchter!","Aus is und gor is!","Servus, Zipfelklatscher!","Des is f\xFCr mei Muatta!","Sch\xF6ne Gr\xFC\xDF vom Bauernhof!","Achtung, des wird laut!","Ois Guade, Wappler!"],hit:["Au! Bist deppat?","Heast, des tuat weh!","Mei Euter!","Jessasmaria!","Hearst, spinnst?","Kruzifix!","Sakra!","Do brauch i an Obstler.","Des gibt an blauen Fleck.","Na servus, des sitzt.","Autsch, du Ungustl!","Wart nur, du Fetzensch\xE4dl!","Des merk i ma!"],hitStier:["Des hot nur gekitzelt!","Jetzt bin i grantig!","Du host an Stier gweckt!","Mehr host ned?"],death:["I geh jetzt Gras fressen\u2026 von unten.","Leb wohl, sch\xF6ne Alm\u2026","Sagt's da Mama, i hob's probiert\u2026","Des wor's, oida.","Aus. Schluss. Kuhfladen.","Endstation Schnitzlsemml.","Jetzt bin i a Gulasch.","Pfiat eich, es Trotteln.","Mei Glockn\u2026 l\xE4ut\u2026 nimma\u2026","I h\xE4tt Melkerin werdn solln\u2026"],kill:["Den homma!","Hot si ausgmuht!","Wieder a Leberkas mehr!","Des hot gsessn!","N\xE4chster, bitte!","Gulasch f\xFCr alle!","Ruhe in Frieden, du Bettbrunzer.","Des wor a Volltreffer, Oida!","Schee wor's."],miss:["Hoppala.","Na geh, daneben.","Wos wor des jetzt?","Des wor da Wind!","I hob grad blinzelt.","Ned amoi a Scheunentor triff i heut.","Des wor a Warnschuss. Eh klar.","Mei Brilln is im Stall."],drown:["Blubb\u2026 i kann ned schwimma\u2026","Wasser? I wollt a Bier!","Glugg-glugg-Muh.","I bin doch ka Fisch!"],heal:["A Brettljause wirkt Wunder!","Schmeckt wia bei da Oma.","Jetzt geht's ma wieder guat.","Speck is Medizin."],crate:["A Packerl! Vom Christkind?","Gratis is imma guat!","Des nehm i mit.","Wer hot des do vergessn?"],jauseCrate:["Brettljause! Endlich!","Mahlzeit!","Speck und Kas, des is Gas!"],selfHit:["I bin a Volltrottel.","Na super, ins eigene Knie.","Des host jetzt davon.","Bitte ned weitersagn."],friendly:["Heast, i bin auf deiner Seitn!","Bist du blind, du Hirsch?","Danke, Kollege. Wirklich.","Spinnst, des is a Eigener!"],timeout:["Schlofst du, oder wos?","Gemma, gemma, ned einschlofn!","Des Gras wachst schneller als du denkst."],shore:["Do is Wasser, du Hirsch!","I geh do ned eini!","Na, na \u2013 nasse Hufe mag i ned."],steep:["Z'steil, Oida.","Do kum i ned auffi.","I bin a Kuh, ka Gams!"],tired:["I kann nimma\u2026","Puh, Pause.","Mei Haxn san aus Pudding."],victory:["Mia san die Kings vom Kuhstall!","Heit gibt's a Freibier!","Des wor a Watschnbaum!","Und jetzt a Jausn!"],dud:["Da Abfangj\xE4ger hat Startverbot. Leider nix.","Da Pilot is im Krankenstand.","Ka Budget f\xFCrs Kerosin."]},jn={doubleKill:["Doppel-Watschn!","Zwa auf an Streich!"],multiKill:["Watschnbaum!","Massaker am Kuhstall!"],headshot:["Kopftreffer! Mitten ins Hirn \u2013 falls do ans is.","Kopftreffer!"],selfKill:["Selbstbedienung!","Eigentor!"],drown:["Ersoffen!","Badetag!"],bigDamage:["Gwaltig!","Bumm-Zack!","Des hot gscheppert!"]};function Hi(s,t=Math.random){return s[Math.floor(t()*s.length)]}function il(s,t=Math.random){let e=Ax[s];return e?Hi(e,t):""}var zc={win:["Sauber, Burschen und Madln! Des war a gmahte Wiesn.","Gewonnen! Heut flie\xDFt da Most in Str\xF6men.","Sieg! Da Bauer is stolz auf eich."],lose:["Verloren. Des wor a Schas mit Quastln.","Niederlage. Mia redn no dr\xFCber \u2013 beim Heurigen.","Hin is hin. N\xE4chstes Mal mit Hirn."],draw:["Unentschieden. Alle hin, ka Gewinner. Typisch."]},Fs={gold:{name:"Goldenes Kuhglockerl",icon:"\u{1F514}",desc:"Bester Soldat des Einsatzes"},killer:{name:"Watschn-Orden",icon:"\u{1F947}",desc:"Zwei oder mehr Gegner erledigt"},survivor:{name:"Z\xE4he-Haut-Spange",icon:"\u{1F396}\uFE0F",desc:"Mit unter 20 Lebenspunkten \xFCberlebt"}};var Bc=class{constructor(){this.ctx=null,this.vol={sfx:.8,music:.45},this.muted=!1,this.musicOn=!1,this.lastPlay={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.master.connect(this.comp).connect(e.destination),this.sfxGain=e.createGain(),this.sfxGain.gain.value=this.vol.sfx,this.sfxGain.connect(this.master),this.musicGain=e.createGain(),this.musicGain.gain.value=this.vol.music*.5,this.musicGain.connect(this.master);let i=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,i,e.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let r=0;r<i;r++)n[r]=Math.random()*2-1;this.wantMusic&&this.startMusic()}setVolumes(t,e){this.vol.sfx=t,this.vol.music=e,this.sfxGain&&(this.sfxGain.gain.value=t),this.musicGain&&(this.musicGain.gain.value=e*.5)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}throttle(t,e){let i=performance.now();return this.lastPlay[t]&&i-this.lastPlay[t]<e?!1:(this.lastPlay[t]=i,!0)}noise({dur:t=.3,freq:e=1e3,freqEnd:i,q:n=.7,type:r="lowpass",gain:a=.5,attack:o=.005,delay:l=0,dest:c}){let h=this.ctx,u=h.currentTime+l,d=h.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let f=h.createBiquadFilter();f.type=r,f.Q.value=n,f.frequency.setValueAtTime(e,u),i&&f.frequency.exponentialRampToValueAtTime(Math.max(20,i),u+t);let p=h.createGain();p.gain.setValueAtTime(1e-4,u),p.gain.exponentialRampToValueAtTime(a,u+o),p.gain.exponentialRampToValueAtTime(1e-4,u+t),d.connect(f).connect(p).connect(c||this.sfxGain),d.start(u,Math.random()*1.5),d.stop(u+t+.05)}tone({freq:t=440,freqEnd:e,dur:i=.2,type:n="sine",gain:r=.3,attack:a=.005,delay:o=0,dest:l,release:c}){let h=this.ctx,u=h.currentTime+o,d=h.createOscillator();d.type=n,d.frequency.setValueAtTime(t,u),e&&d.frequency.exponentialRampToValueAtTime(Math.max(20,e),u+i);let f=h.createGain();return f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(r,u+a),f.gain.exponentialRampToValueAtTime(1e-4,u+(c||i)),d.connect(f).connect(l||this.sfxGain),d.start(u),d.stop(u+(c||i)+.05),d}explosion(t=1,e=1){if(!this.ok)return;let i=Math.min(1,t)*e;i<.03||(this.noise({dur:.9+t*.6,freq:1800,freqEnd:60,q:.5,gain:.9*i,attack:.004}),this.noise({dur:.25,freq:4e3,freqEnd:400,type:"bandpass",q:.8,gain:.5*i}),this.tone({freq:90,freqEnd:30,dur:.7+t*.3,type:"sine",gain:.9*i}))}shot(t="gewehr"){this.ok&&(t==="sniper"?(this.noise({dur:.5,freq:3e3,freqEnd:200,q:.6,gain:.8}),this.tone({freq:160,freqEnd:50,dur:.3,type:"triangle",gain:.6})):t==="flinte"?(this.noise({dur:.4,freq:2500,freqEnd:150,q:.5,gain:.85}),this.tone({freq:120,freqEnd:40,dur:.25,gain:.6})):t==="pistole"?this.noise({dur:.16,freq:3500,freqEnd:600,type:"bandpass",q:.9,gain:.6}):(this.noise({dur:.13,freq:2600,freqEnd:500,type:"bandpass",q:.7,gain:.55}),this.tone({freq:140,freqEnd:60,dur:.08,type:"square",gain:.12})))}whoosh(){this.ok&&this.noise({dur:.7,freq:600,freqEnd:2500,type:"bandpass",q:1.5,gain:.4,attack:.05})}thump(){this.ok&&(this.tone({freq:110,freqEnd:45,dur:.25,type:"sine",gain:.8}),this.noise({dur:.2,freq:900,freqEnd:100,gain:.4}))}throwSnd(){this.ok&&this.noise({dur:.25,freq:800,freqEnd:1800,type:"bandpass",q:2,gain:.25,attack:.03})}bounce(){!this.ok||!this.throttle("bounce",60)||this.tone({freq:300+Math.random()*80,freqEnd:180,dur:.08,type:"triangle",gain:.25})}splash(){!this.ok||!this.throttle("splash",80)||(this.noise({dur:.6,freq:1500,freqEnd:300,type:"bandpass",q:.6,gain:.6,attack:.01}),this.tone({freq:400,freqEnd:900,dur:.15,type:"sine",gain:.15,delay:.05}))}hit(){!this.ok||!this.throttle("hit",50)||(this.noise({dur:.12,freq:900,freqEnd:200,gain:.5}),this.tone({freq:220,freqEnd:110,dur:.12,type:"square",gain:.12}))}moo(t=1,e=.5){if(!this.ok||!this.throttle("moo",400))return;let i=this.ctx,n=i.currentTime,r=130*t,a=i.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(r*.9,n),a.frequency.linearRampToValueAtTime(r*1.12,n+.25),a.frequency.linearRampToValueAtTime(r*.82,n+1);let o=i.createOscillator();o.frequency.value=5.5;let l=i.createGain();l.gain.value=3*t,o.connect(l).connect(a.frequency);let c=i.createBiquadFilter();c.type="bandpass",c.frequency.value=520,c.Q.value=2.5;let h=i.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(500,n),h.frequency.linearRampToValueAtTime(1300,n+.3),h.frequency.linearRampToValueAtTime(600,n+1);let u=i.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(e,n+.12),u.gain.setValueAtTime(e,n+.7),u.gain.exponentialRampToValueAtTime(1e-4,n+1.1),a.connect(h).connect(u).connect(this.sfxGain),a.connect(c).connect(u),a.start(n),o.start(n),a.stop(n+1.2),o.stop(n+1.2)}bell(t=.35,e=0,i=1){if(!this.ok)return;let n=520*i;[1,1.47,2.09,2.76].forEach((r,a)=>{this.tone({freq:n*r,dur:.02,release:.9-a*.15,type:a?"sine":"triangle",gain:t/(a+1),delay:e})})}click(){this.ok&&this.tone({freq:900,freqEnd:600,dur:.05,type:"square",gain:.08})}jump(){this.ok&&this.tone({freq:220,freqEnd:420,dur:.18,type:"triangle",gain:.18})}heal(){this.ok&&[523,659,784,1047].forEach((t,e)=>this.tone({freq:t,dur:.25,type:"sine",gain:.18,delay:e*.08}))}pickup(){this.ok&&[660,880,1320].forEach((t,e)=>this.tone({freq:t,dur:.15,type:"square",gain:.07,delay:e*.06}))}beep(){!this.ok||!this.throttle("beep",120)||this.tone({freq:1400,dur:.08,type:"square",gain:.1})}fizz(){this.ok&&this.noise({dur:1.2,freq:5e3,freqEnd:2e3,type:"highpass",gain:.12,attack:.05})}flame(){this.ok&&this.noise({dur:1,freq:700,freqEnd:300,q:.5,gain:.6,attack:.08})}plane(){this.ok&&this.noise({dur:2.8,freq:300,freqEnd:2200,type:"bandpass",q:.7,gain:.5,attack:.9})}turnStart(){this.ok&&(this.bell(.25,0,1),this.bell(.2,.18,1.26))}victory(){if(!this.ok)return;[523,659,784,1047,784,1047].forEach((e,i)=>{this.tone({freq:e,dur:.22,type:"square",gain:.1,delay:i*.14}),this.tone({freq:e/2,dur:.22,type:"triangle",gain:.15,delay:i*.14})}),this.bell(.3,.9,1)}defeat(){this.ok&&[392,370,349,262].forEach((t,e)=>this.tone({freq:t,dur:.4,type:"triangle",gain:.2,delay:e*.3}))}startMusic(){if(this.wantMusic=!0,!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx,i=60/132/2,n=0,r=t.currentTime+.1,a=[0,5,7,0,0,5,7,0,5,0,7,0,5,0,7,0],o=[[12,16,19,16],[17,21,17,14],[19,17,14,11],[12,-1,12,-1],[12,16,19,24],[21,17,21,24],[23,19,17,14],[12,-1,-1,-1],[17,21,24,21],[19,16,12,16],[14,17,19,17],[16,12,-1,12],[17,21,24,26],[24,19,16,19],[17,14,11,14],[12,-1,-1,-1]],l=130.81,c=u=>l*Math.pow(2,u/12),h=()=>{if(this.musicOn)for(;r<t.currentTime+.25;){let u=Math.floor(n/4)%16,d=n%4,f=a[u],p=this.musicGain;if(d===0||d===2){let g=d===0?f-12:f-5;Oc(this,c(g),r,i*1.6,"triangle",.32,p)}else[0,4,7].forEach(g=>Oc(this,c(f+g+12),r,i*.7,"square",.035,p));let x=o[u][d];x>=0&&Oc(this,c(x+12),r,i*.9,"square",.045,p),r+=i,n++}};this._musicTimer=setInterval(h,60),h()}stopMusic(){this.wantMusic=!1,this.musicOn=!1,this._musicTimer&&clearInterval(this._musicTimer),this._musicTimer=null}};function Oc(s,t,e,i,n,r,a){let o=s.ctx,l=o.createOscillator();l.type=n,l.frequency.value=t;let c=o.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(r,e+.01),c.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(c).connect(a),l.start(e),l.stop(e+i+.02)}var Ce=new Bc;var _e=L,Rx=new Proxy({},{get:()=>()=>{}});function vd(){return(Math.random()+Math.random()+Math.random()-1.5)/1.5}var zs=class{constructor(t,e){this.app=t,this.opts=e,this.demo=e.mode==="demo",this.hud=this.demo?Rx:t.hud,this.settings=t.settings,this.rules=Object.assign({wind:.4,turnTime:t.settings.turnTime||60,risingWater:0,mines:0,fog:!1,crates:!0,maxRounds:40},e.rules||{}),this.rng=new Ge((e.seed||1)*977+13),this.scene=new er,this.theme=Ds[e.theme]||Ds.alm,this.time=0,this.timers=[],this.frameWaiters=[],this.projectiles=[],this.mines=[],this.tnts=[],this.crates=[],this.gases=[],this.planes=[],this.units=[],this.teams=[],this.played=new Set,this.phase="intro",this.round=1,this.turnIdx=-1,this.wind={x:0,z:0},this.power=0,this.charging=!1,this.overview=!1,this.paused=!1,this.disposed=!1,this.busy=0,this.settleT=0,this.settleT2=0,this.shot=null,this.lastEvent=null,this.lastPower={},this.powerHint=null,this.aimInfo=null,this.targetPoint=null,this.saidBlock=0,this.log=[],this.turnCount=0,this.world=new Zo(this.scene,this.theme,e.seed||1,t.quality,{fog:this.rules.fog,maibaum:this.rules.maibaum,planSpawns:i=>this.planSpawns(i)}),this.terrain=this.world.terrain,this.fx=new Jo(this.scene,t.quality),this.fx.terrain=this.terrain,this.cam=new jo(t.aspect()),this.cam.terrain=this.terrain,this.env={terrain:this.terrain,wind:this.wind,units:this.units,obstacles:this.world.obstacles,grid:this.world.obstacleGrid,waterLevel:0,owner:null},this.envCalm={...this.env,wind:{x:0,z:0}},this.createTeams(),this.createMarkers(),this.rules.mines&&this.scatterMines(this.rules.mines)}planSpawns(t){let e=this.rng,i=this.opts.teams,n=i.length,r=e.range(0,Math.PI*2);this.spawnSpots=[];let a=[],o=()=>{for(let l=0;l<400;l++){let c=e.range(-40,40),h=e.range(-40,40);if(t.heightAt(c,h)>t.waterLevel+.8)return{x:c,z:h}}return{x:0,z:0}};for(let l=0;l<n;l++){let c=r+l*Math.PI*2/n,h=null;for(let f=0;f<120&&!h;f++){let p=.15+f*.01,x=c+e.range(-p,p),g=e.range(n>2?22:18,34),m=Math.sin(x)*g,y=Math.cos(x)*g;t.heightAt(m,y)>t.waterLevel+1.2&&t.slopeAt(m,y)<.45&&(h={x:m,z:y})}h||(h=o());let u=[],d=i[l].soldiers.length;for(let f=0;f<d;f++){let p=null;for(let x=0;x<300&&!p;x++){let g=4+x*.05,m=h.x+e.range(-g,g),y=h.z+e.range(-g,g);t.heightAt(m,y)<t.waterLevel+.9||t.slopeAt(m,y)>.55+x*.003||u.some(v=>ee(v.x,v.z,m,y)<2.4)||this.spawnSpots.some(v=>v.some(E=>ee(E.x,E.z,m,y)<11))||(p={x:m,z:y})}p||(p=o()),u.push(p),a.push({x:p.x,z:p.z,r:2.6})}this.spawnSpots.push(u)}return a}createTeams(){this.opts.teams.forEach((t,e)=>{let i=pi(t.faction),n={idx:e,faction:i,name:i.name,short:i.short,color:i.color,control:t.control,difficulty:t.difficulty||"normal",units:[],next:0,alive:!0,human:t.control==="human",label:t.label};t.soldiers.forEach((r,a)=>{let o=new Qo(this,r,n),l=this.spawnSpots[e][a];o.pos.set(l.x,this.terrain.heightAt(l.x,l.z),l.z),o.yaw=Math.atan2(-l.x,-l.z)+this.rng.range(-.4,.4),o.animate(0),n.units.push(o),this.units.push(o)}),n.human||(n.ai=new el(this,n,n.difficulty)),this.teams.push(n)})}createMarkers(){this.arrow=new Kt(Mi("arrow"),new Ti({color:16777215})),this.arrow.scale.setScalar(.7),this.arrow.visible=!1,this.marker=new Kt(Mi("marker"),new Ti({color:16777215,transparent:!0,opacity:.9})),this.marker.visible=!1;let t=new Ai(1,.05,4,72);t.rotateX(Math.PI/2),this.rangeRing=new Kt(t,new Ti({color:16777215,transparent:!0,opacity:.45})),this.rangeRing.visible=!1,this.previewArr=new Float32Array(450),this.previewGeo=new Ee,this.previewGeo.setAttribute("position",new ye(this.previewArr,3).setUsage(Pn)),this.previewGeo.setDrawRange(0,0),this.preview=new Vn(this.previewGeo,new bs({size:.3,color:16777215,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1})),this.preview.frustumCulled=!1,this.laserGeo=new Ee().setFromPoints([new _e,new _e(0,1,0)]),this.laser=new sr(this.laserGeo,new Ms({color:16726832,transparent:!0,opacity:.7})),this.laser.frustumCulled=!1,this.laser.visible=!1,this.impactRing=new Kt(Mi("marker"),new Ti({color:16777215,transparent:!0,opacity:.9,depthTest:!1})),this.impactRing.renderOrder=6,this.impactRing.visible=!1,this.scene.add(this.arrow,this.marker,this.rangeRing,this.preview,this.laser,this.impactRing)}scatterMines(t){for(let e=0;e<t;e++){let i=this.world.findSpot(this.rng,{maxSlope:.6,minDist:.5,minH:.8,area:.8});i&&(this.units.some(n=>ee(n.pos.x,n.pos.z,i.x,i.z)<4.5)||this.addMine(new _e(i.x,i.y,i.z),null,!0))}}addMine(t,e,i){let n=new Kt(Mi("mine"),Qe().item);n.position.copy(t),n.rotation.y=Math.random()*6,n.castShadow=!0,this.scene.add(n),this.mines.push({pos:t,mesh:n,armed:i,trig:-1,owner:e,W:oe.mine,dead:!1})}start(){if(this.cam.setMode("orbit",{pos:new _e(0,4,0)},{dist:78,pitch:.55}),this.cam.yaw=this.rng.range(0,6.28),this.cam.dist=120,this.turnIdx=(this.opts.firstTeam??this.rng.int(0,this.teams.length-1))-1,this.demo){this.after(1.5,()=>this.startTurn());return}this.hud.setupMatch(this),this.hud.announce(this.opts.title||"Gefecht!",`${this.theme.name}${this.rules.fog?" \xB7 Nebel":""}${this.rules.risingWater?" \xB7 Hochwasser":""}`,2.4),this.sfx("bell",.35,0,1),this.after(2.6,()=>this.startTurn())}addLog(t){this.log.push(`${this.time.toFixed(1)}s ${t}`),this.log.length>300&&this.log.shift()}after(t,e){this.timers.push({t,fn:e})}wait(t){return new Promise(e=>this.after(t,e))}nextFrame(){return new Promise(t=>this.frameWaiters.push(t))}sfx(t,...e){this.demo||!Ce[t]||Ce[t](...e)}say(t,e,i=1){if(!t||this.demo||Math.random()>i)return;let n=e==="hit"&&t.isStier&&Math.random()<.4?il("hitStier"):il(e);this.hud.say(t,n)}startTurn(){if(this.disposed||this.phase==="gameover"||this.checkVictory())return;let t=this.teams.length,e=this.turnIdx,i=null;for(let r=0;r<t;r++)if(e=(e+1)%t,this.teams[e].alive){i=this.teams[e];break}if(!i){this.gameOver(null);return}if(this.played.has(e)&&(this.played.clear(),this.newRound(),this.phase==="gameover"))return;this.played.add(e),this.turnIdx=e,this.team=i;let n=null;for(let r=0;r<i.units.length;r++){let a=i.units[(i.next+r)%i.units.length];if(a.alive){n=a,i.next=(i.units.indexOf(a)+1)%i.units.length;break}}if(!n){this.endTurn();return}this.unit=n,this.turnCount++,this.addLog(`T${this.turnCount} R${this.round} ${i.short} ${n.name}`),this.windChange(),this.rules.crates&&this.round>1&&this.rng.chance(.3)&&this.crates.length<4&&this.spawnCrate(),this.turnTimer=this.rules.turnTime,this.timerWarn=5,n.stamina=100,this.attacked=!1,this.canSwitch=!0,this.moved=0,this.tiredSaid=!1,this.charging=!1,this.power=0,this.targetPoint=null,this.targetCycle=-1,this.weapon=n.weapon&&n.ammo[n.weapon]!==0&&n.ammo[n.weapon]!==void 0?n.weapon:n.defaultWeapon(),n.setHeld(this.weapon),this.phase=i.human?"move":"ai",this.overview=!1,this.cam.manualZoom=1,this.cam.userTime=99,this.arrow.material.color.set(i.color),this.hud.turnStart(this,i,n),this.sfx("turnStart"),this.after(.5,()=>{this.unit===n&&n.alive&&(this.say(n,"select",.65),this.sfx("moo",n.isStier?.72:1.05,.3))}),i.human||i.ai.takeTurn(n).catch(r=>{console.error(r),!this.disposed&&this.phase!=="gameover"&&(this.phase="ai",this.endTurn())}),this.opts.tutorial&&i.human&&!this.tutorialShown&&(this.tutorialShown=!0,this.after(.8,()=>this.hud.tutorial(this)))}newRound(){if(this.round++,this.hud.setRound(this.round),this.round>this.rules.maxRounds){this.hud.announce("Zeit is um!","Wer am meisten Lebenspunkte hat, gewinnt.",2),this.gameOver(null,!0);return}if(this.rules.risingWater){let t=this.terrain.waterLevel;this.waterAnim={from:t,to:t+this.rules.risingWater,t:0},this.demo||this.hud.announce("Das Wasser steigt!",`Runde ${this.round}`,1.6)}}windChange(){let t=this.rules.wind,e=this.rng.range(0,Math.PI*2),i=t*this.rng.range(.1,1);this.wind.x=this.wind.x*.35+Math.sin(e)*i*.65,this.wind.z=this.wind.z*.35+Math.cos(e)*i*.65;let n=Math.hypot(this.wind.x,this.wind.z);n>t&&n>0&&(this.wind.x*=t/n,this.wind.z*=t/n)}endTurn(){if(!(this.phase==="turnEnd"||this.phase==="gameover")){this.phase="turnEnd",this.charging=!1,this.power=0,this.targetPoint=null,this.unit&&(this.unit.aiming=!1,this.unit.moving=!1,this.unit.weapon=this.weapon),this.overview=!1,this.hud.phase(this),this.hud.closeWeaponMenu();for(let t of this.mines)t.armed=!0;for(let t of this.gases){for(let e of this.units)e.alive&&e.getCenter().distanceTo(t.pos)<t.radius+.6&&(this.damageUnit(e,t.dmg,t.owner,null,"gas"),this.fx.gasBurst(e.getCenter(),.8));t.turns--}this.gases=this.gases.filter(t=>t.turns>0),this.after(.35,()=>{this.settleT2=0,this.settleCb=()=>{this.checkVictory()||this.startTurn()}})}}checkVictory(){if(this.phase==="gameover")return!0;for(let i of this.teams)i.alive=i.units.some(n=>n.alive);let t=this.teams.filter(i=>i.alive),e=this.teams.filter(i=>i.human);return t.length<=1?(this.gameOver(t[0]||null),!0):e.length&&!e.some(i=>i.alive)?(this.gameOver(null,!0),!0):!1}gameOver(t,e=!1){if(this.phase==="gameover")return;if(!t&&e){let n=-1;for(let r of this.teams){let a=r.units.reduce((o,l)=>o+(l.alive?l.hp:0),0);a>n&&(n=a,t=a>0?r:null)}}this.phase="gameover",this.winner=t,this.arrow.visible=!1,this.hud.phase(this),this.hud.closeWeaponMenu(),this.settleCb=null;let i=this.teams.some(n=>n.human);if(t){let n=t.units.filter(r=>r.alive);n.forEach((r,a)=>{r.cheer=.01,r.aiming=!1,a<2&&this.after(.4+a*.6,()=>this.say(r,"victory"))}),this.cam.setMode("orbit",n[0]||{pos:new _e},{dist:13,pitch:.28}),this.hud.announce(t.human&&this.teams.filter(r=>r.human).length===1?"Sieg!":`${t.short} gewinnt!`,t.name,3.5),i&&this.sfx(t.human?"victory":"defeat")}else this.cam.setMode("orbit",{pos:new _e(0,3,0)},{dist:60,pitch:.5}),this.hud.announce("Unentschieden!","Alle hin. Typisch.",3.5),i&&this.sfx("defeat");this.after(this.demo?4:4.8,()=>{this.disposed||(this.demo?this.app.onDemoEnd&&this.app.onDemoEnd():this.app.onMatchEnd(this.result()))})}result(){return{winner:this.winner?this.winner.idx:-1,rounds:this.round,teams:this.teams.map(t=>({idx:t.idx,faction:t.faction.id,name:t.name,human:t.human,alive:t.alive,units:t.units.map(e=>({id:e.s.id,name:e.name,alive:e.alive,hp:Math.max(0,Math.round(e.hp)),hpMax:e.hpMax,kills:e.stats.kills,dmg:Math.round(e.stats.dmg),dmgTaken:Math.round(e.stats.dmgTaken)}))}))}}get humanTurn(){return this.team&&this.team.human&&["move","aim","target","retreat"].includes(this.phase)}cmd(t,e){if(this.paused||this.disposed)return;let i=this.unit;if(this.humanTurn)switch(t){case"weaponMenu":(this.phase==="move"||this.phase==="aim"||this.phase==="target")&&this.hud.openWeaponMenu(this);break;case"selectWeapon":if(i.ammo[e]===void 0||i.ammo[e]===0)return;this.weapon=e,i.weapon=e,i.setHeld(e),this.sfx("click"),this.enterAim();break;case"aim":this.phase==="move"&&this.enterAim();break;case"back":(this.phase==="aim"||this.phase==="target")&&(this.phase="move",this.charging=!1,this.power=0,i.aiming=!1,this.targetPoint=null,this.overview=!1,this.hud.phase(this));break;case"fireDown":{this.phase==="aim"?oe[this.weapon].type==="ballistic"?(this.charging=!0,this.power=0,this.chargeStart=performance.now()):this.fire():this.phase==="target"&&this.targetPoint&&this.fire();break}case"fireUp":this.phase==="aim"&&this.charging&&(performance.now()-(this.chargeStart||0)<230?this.fire({power:this.presetPower()}):this.fire());break;case"jump":(this.phase==="move"||this.phase==="retreat")&&i.jump()&&(this.sfx("jump"),this.moved+=1,this.canSwitch=!1);break;case"switch":this.phase==="move"&&this.canSwitch&&this.switchUnit();break;case"endTurn":(this.phase==="move"||this.phase==="aim"||this.phase==="target")&&this.endTurn();break;case"nextTarget":this.phase==="aim"&&this.nextTarget();break;case"overview":(this.phase==="move"||this.phase==="aim")&&(this.overview=!this.overview,this.overview&&(this.cam.setMode("overview",null,{keepTarget:!0}),this.cam.goal.copy(i.pos)),this.hud.phase(this));break;default:break}}switchUnit(){let t=this.team,e=t.units.filter(r=>r.alive);if(e.length<2)return;let i=e.indexOf(this.unit),n=e[(i+1)%e.length];this.unit.aiming=!1,this.unit=n,this.targetCycle=-1,n.stamina=100,this.weapon=n.weapon&&n.ammo[n.weapon]?n.weapon:n.defaultWeapon(),n.setHeld(this.weapon),t.next=(t.units.indexOf(n)+1)%t.units.length,this.cam.userTime=99,this.hud.turnStart(this,t,n,!0),this.say(n,"select",.5),this.sfx("click")}pitchMin(t){return t.type==="ballistic"?(t.minPitch!==void 0?t.minPitch:-10)*Te:t.type==="hitscan"||t.type==="cone"?-50*Te:0}pitchMax(t){return t.type==="ballistic"?82*Te:t.type==="hitscan"||t.type==="cone"?60*Te:0}enterAim(){let t=this.unit,e=oe[this.weapon];!e||t.ammo[this.weapon]===0||(this.hud.closeWeaponMenu(),this.charging=!1,this.power=0,e.type==="strike"||e.type==="jump"?(this.phase="target",this.targetPoint=null,this.cam.setMode("overview",null,{keepTarget:!0}),this.cam.goal.copy(t.pos),this.cam.manualZoom=e.type==="jump"?.65:1,this.hud.toast(e.type==="jump"?"Tipp auf an Landepunkt im Kreis.":"Tipp auf das Ziel auf der Karte.")):(this.phase="aim",this.overview=!1,t.aiming=!0,e.type==="ballistic"?t.aimPitch=zt(Math.max(t.aimPitch,(e.minPitch||30)*Te),this.pitchMin(e),this.pitchMax(e)):t.aimPitch=zt(t.aimPitch,this.pitchMin(e),this.pitchMax(e)),e.type==="hitscan"&&Math.abs(t.aimPitch)>.5&&(t.aimPitch=.05),["heal","place","melee"].includes(e.type)&&(t.aimPitch=0)),this.hud.phase(this))}aimDirect(t,e,i){for(let a of[.95,1.85,.5,1.4]){let o=t.muzzle(),l=new _e(i.pos.x,i.pos.y+a,i.pos.z);if(t.aimPitch=zt(Math.atan2(l.y-o.y,ee(o.x,o.z,l.x,l.z)),this.pitchMin(e),this.pitchMax(e)),this.traceRay(t.muzzle(),t.aimDir(),e.range,t).unit===i)return!0}let n=i.getCenter(),r=t.muzzle();return t.aimPitch=zt(Math.atan2(n.y-r.y,ee(r.x,r.z,n.x,n.z)),this.pitchMin(e),this.pitchMax(e)),!1}aimBallistic(t,e,i,n){let a=this.weapon==="panzerfaust"?[10,18,28,40,52]:e.minPitch?[60,50,70,45]:[45,35,55,65,25],o=Math.atan2(i.pos.x-t.pos.x,i.pos.z-t.pos.z),l=null;for(let c of a){if(e.minPitch!==void 0&&c<e.minPitch)continue;t.aimPitch=zt(c*Te,this.pitchMin(e),this.pitchMax(e)),t.yaw=o;let h=null;for(let u=0;u<(n?3:1)&&(h=this.solvePower(t,e,i.pos,n),!(!h||!n));u++){let d=t.muzzle(),f=Math.atan2(h.x-d.x,h.z-d.z),x=Math.atan2(i.pos.x-d.x,i.pos.z-d.z)-f;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;if(Math.abs(x)<.003)break;t.yaw+=x}if(h&&((!l||h.err<l.err)&&(l={pitch:t.aimPitch,yaw:t.yaw,power:h.power,err:h.err}),h.err<e.radius*.45))break}return l?(t.aimPitch=l.pitch,t.yaw=l.yaw,l):(t.yaw=o,null)}nextTarget(){let t=this.unit,e=oe[this.weapon],i=this.units.filter(a=>a.alive&&a.team!==t.team);if(!i.length)return;if(i.sort((a,o)=>a.pos.distanceTo(t.pos)-o.pos.distanceTo(t.pos)),e.type==="hitscan"||e.type==="cone"){let a=t.yaw,o=t.aimPitch,l=new Set;for(let c of i)t.yaw=Math.atan2(c.pos.x-t.pos.x,c.pos.z-t.pos.z),this.aimDirect(t,e,c)&&l.add(c);t.yaw=a,t.aimPitch=o,i.sort((c,h)=>(l.has(h)?1:0)-(l.has(c)?1:0))}this.targetCycle=((this.targetCycle??-1)+1)%i.length;let n=i[this.targetCycle];t.yaw=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z);let r=Math.round(n.pos.distanceTo(t.pos));if(this.powerHint=null,e.type==="hitscan"||e.type==="cone"){let a=this.aimDirect(t,e,n);this.hud.toast(`Ziel: ${n.name} (${r} m)${r>e.range?" \u2013 z'weit weg!":a?"":" \u2013 Deckung im Weg, geh woanders hin!"}`)}else if(e.type==="ballistic"){let a=this.settings.aimHelp||"full";if(a!=="off"){let o=this.aimBallistic(t,e,n,a==="full");o&&o.err<e.radius*1.5?(this.lastPower[this.weapon]=o.power,this.powerHint={power:o.power,yaw:t.yaw,pitch:t.aimPitch},this.hud.toast(`Ziel: ${n.name} (${r} m) \u2013 \u{1F525} antippen zum Feuern`)):(o&&(this.lastPower[this.weapon]=o.power),this.hud.toast(`${n.name} (${r} m): mit ${e.name} schwer zu erwischen \u2013 probier a andere Waffe oder geh n\xE4her hin.`))}else t.aimPitch=zt(45*Te,this.pitchMin(e),this.pitchMax(e)),this.hud.toast(`Ziel: ${n.name} (${r} m)`)}else this.hud.toast(`Ziel: ${n.name} (${r} m)`);this.sfx("click")}presetPower(){return this.lastPower[this.weapon]||.6}solvePower(t,e,i,n){let r=n?this.env:this.envCalm;r.owner=t;let a=t.muzzle(),o=Math.sin(t.yaw),l=Math.cos(t.yaw),c=(i.x-a.x)*o+(i.z-a.z)*l,h=t.aimDir(),u=null,d=p=>(u=Or(e,a,h.clone().multiplyScalar(e.speed*p),r,8),(u.x-a.x)*o+(u.z-a.z)*l),f=null;if(d(1)>=c-e.radius*.5){let p=.04,x=1;for(let T=0;T<16;T++){let v=(p+x)/2;d(v)<c?p=v:x=v}let g=(p+x)/2;d(g);let m=u.type==="water"||u.type==="gone"||u.type==="timeout",y=Math.hypot(u.x-i.x,u.z-i.z)+(m?50:0)+Math.max(0,Math.abs(u.y-i.y)-1.5);f={power:g,err:y,x:u.x,z:u.z}}return r.owner=null,f}onTap(t,e){if(!this.humanTurn||this.phase!=="target")return;let i=oe[this.weapon],n=this.cam.screenRay(t,e),r=this.terrain.raycast(n.origin,n.dir,700,.6);if(!r)return;let a=r.point;if(i.type==="jump"){if(ee(a.x,a.z,this.unit.pos.x,this.unit.pos.z)>i.range){this.hud.toast("Z'weit weg! Nur innerhalb vom Kreis.");return}if(a.y<this.terrain.waterLevel+.3){this.hud.toast("Ins Wasser springen? Na sicher ned.");return}}if(this.targetPoint&&ee(a.x,a.z,this.targetPoint.x,this.targetPoint.z)<2.5){this.fire();return}this.targetPoint=a.clone(),this.sfx("click"),this.hud.phase(this)}onDrag(t,e,i,n){if(this.disposed)return;let r=this.settings.camSens||1,a=this.unit;if(this.humanTurn&&this.phase==="aim"&&(n!=="mouse"||i===0)){let o=oe[this.weapon];a.yaw-=t*.0045*r,a.aimPitch=zt(a.aimPitch-e*.0035*r,this.pitchMin(o),this.pitchMax(o));return}if(this.cam.mode==="overview"){this.cam.pan(t,e);return}this.cam.orbitInput(t*.006*r,e*.004*r)}onKey(t,e){if(this.humanTurn){if(!e){t==="Space"&&this.phase==="aim"&&this.cmd("fireUp");return}switch(t){case"Space":this.phase==="move"||this.phase==="retreat"?this.cmd("jump"):this.phase==="aim"?this.cmd("fireDown"):this.phase==="target"&&this.cmd("fireDown");break;case"Enter":case"KeyF":this.phase==="move"?this.cmd("aim"):this.phase==="aim"?oe[this.weapon].type==="ballistic"?this.fire({power:this.presetPower()}):this.cmd("fireDown"):this.phase==="target"&&this.cmd("fireDown");break;case"KeyQ":case"KeyR":this.hud.toggleWeaponMenu(this);break;case"Tab":case"KeyE":this.phase==="move"?this.cmd("switch"):this.phase==="aim"&&this.cmd("nextTarget");break;case"Escape":(this.phase==="aim"||this.phase==="target")&&this.cmd("back");break;case"Backspace":case"KeyX":this.cmd("endTurn");break;case"KeyM":this.cmd("overview");break;default:if(t.startsWith("Digit")){let i=parseInt(t.slice(5),10),n=this.unit.weapons().filter(r=>this.unit.ammo[r]!==0);n[i-1]&&this.cmd("selectWeapon",n[i-1])}}}}fire(t={}){let e=this.unit;if(!e||!e.alive||!["aim","target","ai"].includes(this.phase))return Promise.resolve();let i=this.weapon,n=oe[i];if(!n||e.ammo[i]===0||e.ammo[i]===void 0)return Promise.resolve();t.yaw!==void 0&&(e.yaw=t.yaw),t.pitch!==void 0&&(e.aimPitch=t.pitch);let r=t.power!==void 0?t.power:this.power,a=t.target||this.targetPoint;if((n.type==="strike"||n.type==="jump")&&!a)return Promise.resolve();switch(e.ammo[i]>0&&e.ammo[i]--,this.charging=!1,this.power=0,this.attacked=!0,this.canSwitch=!1,this.phase="resolve",this.resolveT=0,this.settleT=0,this.shot={weapon:i,enemyDmg:0,kills:0,selfDmg:0,offensive:!["heal","jump","place"].includes(n.type)},this.marker.visible=!1,this.rangeRing.visible=!1,this.overview=!1,this.hud.phase(this),this.hud.closeWeaponMenu(),e.weapon=i,this.addLog(`  fire ${i} pow=${(r||0).toFixed(2)}`),n.type!=="heal"&&n.type!=="jump"&&n.type!=="place"&&this.say(e,"fire",.4),n.type){case"hitscan":this.fireHitscan(e,n,i);break;case"ballistic":this.fireBallistic(e,n,i,r);break;case"melee":this.fireMelee(e,n);break;case"cone":this.fireCone(e,n);break;case"place":this.firePlace(e,n,i);break;case"heal":this.fireHeal(e,n);break;case"strike":this.fireStrike(e,n,i,a);break;case"jump":this.fireJump(e,n,a);break;default:break}return new Promise(o=>{this._resolveWaiter=o})}fireHitscan(t,e,i){this.busy++;let n=e.shots||1,r=t.yaw,a=t.aimPitch;for(let o=0;o<n;o++)this.after(.12+o*(e.interval||0),()=>{this.hitscanShot(t,e,i,r,a),o===n-1&&this.after(.35,()=>{this.busy--})})}hitscanShot(t,e,i,n,r){if(!t.alive)return;let a=t.muzzle(new _e,n,r),o=t.aimDir(new _e,n,r);this.fx.muzzle(a,o),this.sfx("shot",i),t.squash=Math.max(t.squash,.12);let l=e.pellets||1;for(let c=0;c<l;c++){let h=(e.spread||0)*Te,u=t.aimDir(new _e,n+vd()*h*.6,r+vd()*h*.6),d=this.traceRay(a,u,e.range,t);if(this.fx.tracer(a,d.point),d.unit){let f=e.dmg;d.dist>e.range*.6&&(f*=.75),d.head&&(f*=1.6,e.zoom&&!this.demo&&this.hud.announce(Hi(jn.headshot),"",1.4)),this.fx.milk(d.point),f>25&&(d.unit.impulse(u.clone().multiplyScalar(3.5)),d.unit.lastHitBy=t,d.unit.lastHitTime=this.time),this.damageUnit(d.unit,f,t,null,"shot")}else this.fx.impactDust(d.point,d.prop?void 0:this.terrain.colors.dirt)}}traceRay(t,e,i,n){let r=i,a={dist:i,point:t.clone().addScaledVector(e,i)};for(let l of this.units)if(!(!l.alive||l===n))for(let c=0;c<2;c++){let h=c?1.85:.95,u=c?.34:.56,d=t.x-l.pos.x,f=t.y-(l.pos.y+h),p=t.z-l.pos.z,x=d*e.x+f*e.y+p*e.z,g=d*d+f*f+p*p-u*u,m=x*x-g;if(m<0)continue;let y=-x-Math.sqrt(m);y>0&&y<r&&(r=y,a={dist:y,unit:l,head:c===1,point:t.clone().addScaledVector(e,y)})}for(let l of this.world.obstacles){if(!l.solid)continue;let c=t.x-l.x,h=t.z-l.z,u=e.x*e.x+e.z*e.z;if(u<1e-6)continue;let d=(l.r+l.pr)*.5,f=2*(c*e.x+h*e.z),p=c*c+h*h-d*d,x=f*f-4*u*p;if(x<0)continue;let g=(-f-Math.sqrt(x))/(2*u);if(g>0&&g<r){let m=t.y+e.y*g;m>l.y0&&m<l.top&&(r=g,a={dist:g,prop:l,point:t.clone().addScaledVector(e,g)})}}let o=this.terrain.raycast(t,e,r,.3);return o&&o.t<r&&(a={dist:o.t,terrain:!0,point:o.point}),a}fireBallistic(t,e,i,n){let r=zt(n,.06,1),a=t.aimDir(),o=t.muzzle(),l=a.clone().multiplyScalar(e.speed*r);t.team.human&&(this.lastPower[i]=r),e.throw?(t.throwAnim=1,this.sfx("throwSnd"),t.model.ball.visible=!1):i==="panzerfaust"?(this.sfx("whoosh"),this.fx.muzzle(o,a)):(this.sfx("thump"),this.fx.muzzle(o,a)),this.projectiles.push(new Jn(this,e,i,o,l,t,{scale:i==="heiligekuh"?1.5:1}))}fireMelee(t,e){this.busy++,t.lunge=1;let i=t.forward();this.after(.18,()=>{let n=!1;for(let r of this.units){if(!r.alive||r===t)continue;let a=r.pos.x-t.pos.x,o=r.pos.z-t.pos.z,l=Math.hypot(a,o);if(l>e.range||Math.abs(r.pos.y-t.pos.y)>1.6||(a*i.x+o*i.z)/(l||1)<Math.cos(60*Te))continue;n=!0;let h=t.isStier?e.dmgStier:e.dmg,u=e.knock*(t.isStier?1.3:1);r.impulse(new _e(i.x*u,4.5,i.z*u)),r.lastHitBy=t,r.lastHitTime=this.time,this.damageUnit(r,h,t,null,"melee"),this.fx.stars(r.getHead())}this.sfx(n?"hit":"throwSnd"),n&&this.sfx("moo",t.isStier?.7:1,.4),this.after(.45,()=>{this.busy--})})}fireCone(t,e){this.busy++,this.sfx("flame");let i=t.muzzle(),n=t.aimDir(),r=0,a=()=>{this.fx.flame(i,n,e.range),r+=.05,r<.9&&this.after(.05,a)};a(),this.after(.35,()=>{for(let l of this.units){if(!l.alive||l===t)continue;let c=l.getCenter().clone(),h=c.clone().sub(i),u=h.length();u>e.range+.6||h.angleTo(n)>e.angle*Te||this.terrain.lineOfSight(i,c,0)&&(l.burnT=2.2,l.impulse(n.clone().multiplyScalar(2.5).setY(2.5)),l.lastHitBy=t,l.lastHitTime=this.time,this.damageUnit(l,e.dmg*(1-.4*u/e.range),t,null,"fire"))}for(let l=2;l<=e.range;l+=2){let c=i.clone().addScaledVector(n,l);this.world.destroyInRadius(c.x,c.y,c.z,1.3,this.fx)}let o=i.clone().addScaledVector(n,e.range*.6);this.terrain.scorchAt(o.x,o.z,e.range*.5,.6)}),this.after(1.15,()=>{this.busy--})}firePlace(t,e,i){let n=t.forward(),r=new _e(t.pos.x+n.x*1.1,0,t.pos.z+n.z*1.1);if(r.y=this.terrain.heightAt(r.x,r.z),t.lunge=.5,this.sfx("click"),r.y<this.terrain.waterLevel){this.fx.splash(new _e(r.x,this.terrain.waterLevel,r.z),.5),this.sfx("splash");return}if(i==="mine")this.addMine(r,t,!1),this.hud.toast("Kuhfladen-Mine liegt. Scharf ab der n\xE4chsten Runde.");else{let a=new Kt(Mi("tnt"),Qe().item);a.position.copy(r),a.rotation.y=t.yaw,a.castShadow=!0,this.scene.add(a),this.tnts.push({pos:r,mesh:a,t:e.fuse,owner:t,W:e}),this.team.human&&(this.phase="retreat",t.stamina=Math.max(t.stamina,40),this.hud.phase(this),this.hud.toast("Lauf, Forrest, lauf!"))}}heal(t,e){let i=t.hp;t.hp=Math.min(t.hpMax,t.hp+e);let n=Math.round(t.hp-i);this.fx.heal(t.pos),n>0&&this.hud.floatText(t.getHead().clone(),`+${n}`,"#5dff6a"),this.hud.updateTeams(this)}fireHeal(t,e){if(e.area){this.fx.healRing(t.pos,e.area);for(let i of this.units)i.alive&&i.team===t.team&&i.pos.distanceTo(t.pos)<=e.area&&this.heal(i,e.amount)}else this.heal(t,e.amount);this.sfx("heal"),this.say(t,"heal",.9)}fireStrike(t,e,i,n){if(this.busy++,i==="haubitze"){this.demo||this.hud.announce("Haubitzenfeuer!","Kopf einziehen!",1.3);for(let f=0;f<e.shells;f++)this.after(.9+f*.45,()=>{let p=n.x+this.rng.range(-e.scatter,e.scatter),x=n.z+this.rng.range(-e.scatter,e.scatter),g={impact:!0,radius:e.radius,dmg:e.dmg,wind:.1,mesh:"shell"};this.projectiles.push(new Jn(this,g,"shell",new _e(p-6,n.y+55,x),new _e(4,-40,0),t,{mesh:"shell",align:!0})),this.sfx("whoosh"),f===e.shells-1&&this.after(.3,()=>{this.busy--})});return}let r=this.rng.chance(e.dudChance),a=this.cam.yaw+Math.PI,o=new _e(Math.sin(a),0,Math.cos(a)),l=n.y+26,c=n.clone().addScaledVector(o,-130);c.y=l;let h=new Kt(Mi("plane"),Qe().item);h.castShadow=!0,h.position.copy(c),h.lookAt(c.clone().add(o)),this.scene.add(h);let u=62,d=[];if(!r){let x=l-n.y,m=9*((-5+Math.sqrt(25+36*x))/18);for(let y=0;y<e.bombs;y++){let T=(y-(e.bombs-1)/2)*e.spacing;d.push({at:130+T-m,done:!1})}}this.planes.push({mesh:h,start:c,fwd:o,speed:u,t:0,dur:260/u,bombs:d,W:e,owner:t,dud:r}),this.sfx("plane"),this.busy--}fireJump(t,e,i){let n=ee(i.x,i.z,t.pos.x,t.pos.z),r=zt(1.4+n/20,1.4,3.2);t.yaw=Math.atan2(i.x-t.pos.x,i.z-t.pos.z),t.startFlight(new _e(i.x,this.terrain.heightAt(i.x,i.z),i.z),r),this.sfx("jump")}onProjectileHit(t,e){let i=t.W,n=t.pos.clone();if(!(e.type==="gone"||e.type==="timeout")){if(e.type==="water"){this.fx.splash(new _e(n.x,this.terrain.waterLevel,n.z),i.radius>5?2:1),this.sfx("splash"),this.lastEvent={pos:new _e(n.x,this.terrain.waterLevel,n.z),t:this.time};return}if(i.gas){this.explode(n,i.radius,i.dmg,t.owner,{craterMul:.25,knock:3});let r={pos:new _e(n.x,this.terrain.heightAt(n.x,n.z)+.7,n.z),radius:i.gas.radius,dmg:i.gas.dmg,turns:i.gas.turns,owner:t.owner,emit:0};this.gases.push(r),this.fx.gasBurst(r.pos,r.radius);for(let a of this.units)a.alive&&a.getCenter().distanceTo(r.pos)<r.radius&&this.damageUnit(a,i.gas.dmg,t.owner,null,"gas");return}if(this.explode(n,i.radius,i.dmg,t.owner),i.cluster){let r=i.cluster;for(let a=0;a<r.n;a++){let o=a/r.n*Math.PI*2+Math.random(),l=3+Math.random()*2.5,c={fuse:1+a*.18,bounce:.3,radius:r.radius,dmg:r.dmg,wind:.2,mesh:"granate"};this.projectiles.push(new Jn(this,c,"cluster",new _e(n.x,n.y+.6,n.z),new _e(Math.cos(o)*l,6+Math.random()*3,Math.sin(o)*l),null,{scale:.6}))}}}}explode(t,e,i,n,r={}){let a=this.terrain,o=a.heightAt(t.x,t.z);this.fx.explosion(t,e,a.colors.dirt),this.world.flash.position.set(t.x,t.y+1.5,t.z),this.world.flash.intensity=30+e*12;let l=this.cam.cam.position.distanceTo(t);this.cam.shake(zt(e*.22*(1-l/90),0,1.2)),this.sfx("explosion",e/5,zt(1-l/160,.15,1)),!r.noCrater&&t.y-o<e*.6&&(a.deform(t.x,t.z,e*.72,e*.3*(r.craterMul||1)),this.world.settleProps(t.x,t.z,e)),this.world.destroyInRadius(t.x,t.y,t.z,e*.75,this.fx);for(let c of this.units){if(!c.alive)continue;let h=c.getCenter(),u=h.distanceTo(t);if(u<e){let d=1-u/e,f=i*Math.pow(d,.65),p=h.clone().sub(t);p.y=Math.max(p.y,0)+.9,p.normalize();let x=(r.knock!==void 0?r.knock:i*.2)*(.35+.65*d);c.impulse(p.multiplyScalar(x)),c.lastHitBy=n,c.lastHitTime=this.time,this.damageUnit(c,f,n,null,"explosion")}}for(let c of this.mines)!c.dead&&c.trig<0&&c.pos.distanceTo(t)<e&&(c.trig=.15+Math.random()*.25);for(let c of this.crates)!c.dead&&c.landed&&c.pos.distanceTo(t)<e&&this.destroyCrate(c);this.lastEvent={pos:t.clone(),t:this.time}}damageUnit(t,e,i,n,r){if(!t.alive||(e=Math.round(e),e<=0))return;t.hp-=e,t.stats.dmgTaken+=e,t.squash=1,this.hud.floatText(t.getHead().clone(),`-${e}`,r==="gas"?"#c6e05a":"#ff5a4a"),r!=="gas"&&r!=="fall"&&this.fx.milk(t.getCenter()),this.sfx("hit");let a=this.shot;i&&i.team!==t.team?(i.stats.dmg+=e,a&&i===this.unit&&(a.enemyDmg+=e)):i&&i===t&&a&&(a.selfDmg+=e),i&&(t.lastHitBy=i),t.hp<=0?this.kill(t,i,r):t.hp>0&&(i===t?this.say(t,"selfHit",.8):i&&i.team===t.team?this.say(t,"friendly",.8):this.say(t,"hit",.45)),this.hud.updateTeams(this)}kill(t,e,i){t.alive&&(t.hp=0,t.alive=!1,t.aiming=!1,t.moving=!1,t.deathKind=i,t.deathT=0,t.model.weapon.visible=!1,t.model.chute.visible=!1,t.scripted=null,e&&e.team!==t.team?(e.stats.kills++,this.shot&&e===this.unit&&this.shot.kills++,e.alive&&this.after(.9,()=>this.say(e,"kill",.7))):e===t&&!this.demo&&this.hud.announce(Hi(jn.selfKill),t.name,1.4),this.say(t,i==="drown"?"drown":"death"),this.sfx("moo",t.isStier?.55:.75,.45),this.hud.updateTeams(this),this.hud.unitDied(t),t===this.unit&&["move","aim","target","retreat"].includes(this.phase)&&(this.phase="resolve",this.resolveT=0,this.shot=this.shot||{weapon:null,enemyDmg:0,kills:0,selfDmg:0,offensive:!1},this.hud.phase(this)))}onDrown(t){if(!t.alive)return;this.fx.splash(new _e(t.pos.x,this.terrain.waterLevel,t.pos.z),1.4),this.sfx("splash");let e=t.lastHitBy&&this.time-t.lastHitTime<12?t.lastHitBy:null;this.demo||this.hud.announce(Hi(jn.drown),t.name,1.3),this.kill(t,e,"drown"),t.vel.set(0,0,0)}spawnCrate(){let t=null;for(let l=0;l<10&&!t;l++){let c=this.world.findSpot(this.rng,{maxSlope:.5,minDist:1,minH:1,area:.75});c&&!this.units.some(h=>h.alive&&ee(h.pos.x,h.pos.z,c.x,c.z)<3)&&(t=c)}if(!t)return;let e=this.rng.next(),i=e<.42?"jause":e<.9?"waffen":"falle",n=new Pe,r=new Kt(Mi(i==="jause"?"crateHealth":"crate"),Qe().item);r.castShadow=!0;let a=new Kt(Mi("chute"),Qe().item);n.add(r,a);let o=new _e(t.x,t.y+24,t.z);n.position.copy(o),this.scene.add(n),this.crates.push({pos:o,group:n,chute:a,type:i,landed:!1,dead:!1,sway:Math.random()*6}),!this.demo&&this.team&&this.team.human&&this.hud.toast("A Packerl f\xE4llt vom Himmel!")}destroyCrate(t){t.dead||(t.dead=!0,this.scene.remove(t.group),this.fx.spawnDebris(t.pos.x,t.pos.y,t.pos.z,new yt("#7a5a3a"),6,4),t.type==="falle"&&this.after(.05,()=>this.explode(t.pos.clone().setY(t.pos.y+.3),3.6,35,null)))}pickupCrate(t,e){if(e.dead=!0,this.scene.remove(e.group),e.type==="falle"){this.demo||this.hud.announce("\xDCberraschung!","Da Bauer hat a Falle gstellt.",1.4),this.explode(e.pos.clone().setY(e.pos.y+.3),3.6,35,null);return}if(this.sfx("pickup"),e.type==="jause"){this.heal(t,30),this.say(t,"jauseCrate",.9);return}let i=this.rng.pick(Lc)[0];i==="heiligekuh"&&this.rng.next()<.6&&(i="granate");let n=Lc.find(r=>r[0]===i)[1];t.ammo[i]!==-1&&(t.ammo[i]=Math.max(0,t.ammo[i]||0)+n),this.hud.floatText(t.getHead().clone(),`+${n} ${oe[i].name}`,"#ffd54f"),this.say(t,"crate",.8)}update(t){if(this.disposed)return;if(this.paused){this.cam.update(t);return}if(this.frameWaiters.length){let n=this.frameWaiters;this.frameWaiters=[],n.forEach(r=>r(t))}this.time+=t;let e=this.timers;this.timers=[];let i=[];for(let n of e)n.t-=t,n.t<=0?i.push(n):this.timers.push(n);if(i.forEach(n=>n.fn()),this.env.waterLevel=this.terrain.waterLevel,this.envCalm.waterLevel=this.terrain.waterLevel,this.world.update(t),this.waterAnim){let n=this.waterAnim;n.t+=t/1.6;let r=Math.min(1,n.t);this.world.setWaterLevel(n.from+(n.to-n.from)*r),r>=1&&(this.waterAnim=null,this.terrain.refreshColors())}this.updateControl(t);for(let n of this.units)n.update(t);for(let n of this.projectiles)n.update(t,this.env);this.projectiles.some(n=>n.dead)&&(this.projectiles=this.projectiles.filter(n=>(n.dead&&n.remove(),!n.dead))),this.updateItems(t),this.fx.update(t),this.updatePhase(t),this.updateCamera(t),this.updateMarkers(t),this.hud.frame(this,t)}updateControl(t){let e=this.unit;if(!e||!e.alive||!this.team||!this.team.human||(e.moving=!1,!["move","aim","target","retreat"].includes(this.phase)))return;let i=this.app.input.axis();if((this.phase==="move"||this.phase==="retreat")&&!this.overview)i.x&&(e.yaw-=i.x*2.6*t),i.y&&this.walk(e,i.y,t);else if(this.phase==="aim"){let n=oe[this.weapon],r=i.fine?.25:1;i.x&&(e.yaw-=i.x*Math.abs(i.x)*1.1*t*r),i.y&&(e.aimPitch=zt(e.aimPitch+i.y*Math.abs(i.y)*.7*t*r,this.pitchMin(n),this.pitchMax(n))),this.charging&&(this.power=Math.min(1,this.power+t/2.2))}this.phase!=="retreat"&&(this.turnTimer-=t,this.turnTimer<=this.timerWarn&&this.turnTimer>0&&(this.timerWarn--,this.sfx("beep")),this.turnTimer<=0&&(this.turnTimer=0,this.charging?this.fire():(this.say(e,"timeout"),this.endTurn())))}blocked(t,e){this.time-this.saidBlock>3.5&&(this.saidBlock=this.time,this.say(t,e,.9))}walk(t,e,i){if(!t.onGround||t.scripted)return!1;if(t.stamina<=0)return this.tiredSaid||(this.tiredSaid=!0,this.say(t,"tired")),!1;let n=td*(e<0?.55:1)*Math.abs(e),r=e<0?-1:1,a=Math.sin(t.yaw)*n*i*r,o=Math.cos(t.yaw)*n*i*r,l=t.pos.x+a,c=t.pos.z+o,h=this.terrain.heightAt(l,c),u=Math.hypot(a,o);if(h<this.terrain.waterLevel+.1)return this.blocked(t,"shore"),!1;if((h-t.pos.y)/Math.max(u,1e-4)>1.3)return this.blocked(t,"steep"),!1;let d=t.pos.x,f=t.pos.z;t.pos.x=l,t.pos.z=c,this.world.collideCircle(t.pos,.45);for(let x of this.units){if(x===t||!x.alive)continue;let g=t.pos.x-x.pos.x,m=t.pos.z-x.pos.z,y=Math.hypot(g,m);y<.9&&y>1e-4&&Math.abs(t.pos.y-x.pos.y)<1.5&&(t.pos.x=x.pos.x+g/y*.9,t.pos.z=x.pos.z+m/y*.9)}if(this.terrain.heightAt(t.pos.x,t.pos.z)<this.terrain.waterLevel+.1)return t.pos.x=d,t.pos.z=f,!1;let p=Math.hypot(t.pos.x-d,t.pos.z-f);return t.stamina=Math.max(0,t.stamina-p*Qu),this.moved+=p,this.moved>.4&&(this.canSwitch=!1),t.moving=p>5e-4,t.moving}updateItems(t){let e=this.terrain.waterLevel;for(let i of this.mines)if(!i.dead){if(i.pos.y=this.terrain.heightAt(i.pos.x,i.pos.z),i.mesh.position.copy(i.pos),i.pos.y<e-.1){i.dead=!0,this.scene.remove(i.mesh);continue}if(i.trig<0&&i.armed){for(let n of this.units)if(n.alive&&ee(n.pos.x,n.pos.z,i.pos.x,i.pos.z)<1.1&&Math.abs(n.pos.y-i.pos.y)<1.3){i.trig=1,this.hud.floatText(i.pos.clone().setY(i.pos.y+.6),"Pieps!","#ffffff");break}}i.trig>0&&(i.trig-=t,i.mesh.visible=Math.floor(i.trig*10)%2===0,Math.floor(i.trig*10)%3===0&&this.sfx("beep"),i.trig<=0&&(i.dead=!0,this.scene.remove(i.mesh),this.explode(i.pos.clone().setY(i.pos.y+.25),i.W.radius,i.W.dmg,i.owner)))}this.mines.some(i=>i.dead)&&(this.mines=this.mines.filter(i=>!i.dead));for(let i of this.tnts)i.t-=t,i.pos.y=this.terrain.heightAt(i.pos.x,i.pos.z),i.mesh.position.copy(i.pos),Math.random()<.6&&this.fx.sparkle(new _e(i.pos.x,i.pos.y+.45,i.pos.z)),i.t<=0&&(i.dead=!0,this.scene.remove(i.mesh),this.explode(i.pos.clone().setY(i.pos.y+.3),i.W.radius,i.W.dmg,i.owner));this.tnts.some(i=>i.dead)&&(this.tnts=this.tnts.filter(i=>!i.dead));for(let i of this.crates){if(i.dead)continue;let n=this.terrain.heightAt(i.pos.x,i.pos.z);if(!i.landed)i.pos.y-=3.6*t,i.sway+=t,i.group.rotation.z=Math.sin(i.sway*1.5)*.12,i.pos.y<=n&&(i.pos.y=n,i.landed=!0,i.chute.visible=!1,i.group.rotation.z=0,this.fx.impactDust(i.pos));else{if(i.pos.y=n,n<e-.2){i.dead=!0,this.scene.remove(i.group);continue}for(let r of this.units)if(r.alive&&ee(r.pos.x,r.pos.z,i.pos.x,i.pos.z)<1.25&&Math.abs(r.pos.y-i.pos.y)<1.6){this.pickupCrate(r,i);break}}i.group.position.copy(i.pos)}this.crates.some(i=>i.dead)&&(this.crates=this.crates.filter(i=>!i.dead));for(let i of this.gases)i.emit-=t,i.emit<=0&&(i.emit=this.app.quality==="low"?.12:.05,this.fx.gas(i.pos,i.radius));for(let i of this.planes){i.t+=t;let n=i.t*i.speed;i.mesh.position.copy(i.start).addScaledVector(i.fwd,n);for(let r of i.bombs)if(!r.done&&n>=r.at){r.done=!0;let a={impact:!0,radius:i.W.radius,dmg:i.W.dmg,wind:.1,mesh:"bomb"},o=i.fwd.clone().multiplyScalar(9);o.y=-5,this.projectiles.push(new Jn(this,a,"bomb",i.mesh.position.clone().setY(i.mesh.position.y-1),o,i.owner,{mesh:"bomb",align:!0}))}i.dud&&!i.dudSaid&&n>130&&(i.dudSaid=!0,this.demo||this.hud.announce("Nix is!",il("dud"),2)),i.t>=i.dur&&(i.done=!0,this.scene.remove(i.mesh))}this.planes.some(i=>i.done)&&(this.planes=this.planes.filter(i=>!i.done))}isSettled(){if(this.projectiles.length||this.tnts.length||this.planes.length||this.busy>0||this.waterAnim||this.mines.some(t=>t.trig>0))return!1;for(let t of this.units)if(t.alive){if(!t.onGround||t.scripted||t.slide.lengthSq()>.05)return!1}else if(t.deathKind==="drown"){if(t.deathT<1.2)return!1}else if(t.deathT<1.75)return!1;return!0}updatePhase(t){if(this.phase==="resolve"||this.phase==="retreat")this.resolveT+=t,this.isSettled()?(this.settleT+=t,this.settleT>.6&&this.afterResolve()):this.settleT=0,this.resolveT>25&&this.afterResolve();else if(this.settleCb)if(this.isSettled()){if(this.settleT2+=t,this.settleT2>.5){let e=this.settleCb;this.settleCb=null,e()}}else this.settleT2=0}afterResolve(){if(this.phase!=="resolve"&&this.phase!=="retreat")return;let t=this.unit,e=this.shot||{},i=oe[e.weapon];if(t&&(t.aiming=!1),this.addLog(`  done dmg=${e.enemyDmg||0} kills=${e.kills||0} self=${e.selfDmg||0}`),this.demo||(e.kills>=3?this.hud.announce(Hi(jn.multiKill),`${e.kills} auf an Streich!`,1.8):e.kills===2?this.hud.announce(Hi(jn.doubleKill),"",1.6):e.enemyDmg>=70&&this.hud.announce(Hi(jn.bigDamage),`${e.enemyDmg} Schaden`,1.3)),e.offensive&&e.enemyDmg===0&&t&&t.alive&&!e.selfDmg&&this.say(t,"miss",.55),!this.checkVictory()){if(this.team&&!this.team.human){this.phase="ai";let n=this._resolveWaiter;this._resolveWaiter=null,n&&n();return}if(i&&i.endsTurn===!1&&t&&t.alive){this.phase="move",t.setHeld(this.weapon=t.defaultWeapon()),this.hud.phase(this);return}this.endTurn()}}wantCam(t,e,i){let n=this.cam;(n.mode!==t||n.obj!==e||JSON.stringify(n.opts||{})!==JSON.stringify(i||{}))&&n.setMode(t,e,i)}updateCamera(t){let e=this.cam,i=this.unit,n=this.phase;if(!(n==="gameover"||n==="intro"))if(this.overview||n==="target")e.mode!=="overview"&&(e.setMode("overview",null,{keepTarget:!0}),i&&e.goal.copy(i.pos));else if(i&&i.alive&&i.aiming&&(n==="aim"||n==="ai")){let r=oe[this.weapon];this.wantCam("aim",i,{ballistic:r.type==="ballistic",sniper:!!r.zoom&&n==="aim"})}else if(n==="resolve"||n==="turnEnd"||n==="retreat"){let r=this.projectiles[0],a=this.units.find(o=>o.alive&&(!o.onGround||o.scripted)&&o!==i);r?this.wantCam("track",r):this.planes[0]?this.wantCam("track",{pos:this.planes[0].mesh.position}):this.lastEvent&&this.time-this.lastEvent.t<1.6?this.wantCam("point",this.lastEvent.pos,{dist:17}):a?this.wantCam("track",a):i&&(i.alive||i.deathT<2)&&this.wantCam("follow",i)}else i&&this.wantCam("follow",i);e.update(t)}updateMarkers(t){let e=this.unit,i=this.phase,n=e&&e.alive&&["move","aim","target","ai","retreat"].includes(i);this.arrow.visible=!!n&&i!=="aim"&&!e.aiming&&!this.demo,this.arrow.visible&&(this.arrow.position.set(e.pos.x,e.pos.y+3.05+Math.sin(this.time*4)*.1,e.pos.z),this.arrow.rotation.y+=t*2.5);let r=0,a=!1,o=this.weapon?oe[this.weapon]:null,l=this.settings.aimHelp||"full";this.aimInfo=null;let c=!!(n&&i==="aim"&&o&&this.team.human);if(this.powerHint&&(!c||Math.abs(e.yaw-this.powerHint.yaw)>.015||Math.abs(e.aimPitch-this.powerHint.pitch)>.015)&&(this.powerHint=null),c&&o.type==="ballistic"){let u=this.charging?Math.max(.04,this.power):this.presetPower(),d=e.aimDir().multiplyScalar(o.speed*u),f=[],p=l==="full",x=p?this.env:this.envCalm;x.owner=e;let g=Or(o,e.muzzle(),d,x,p?8:.55,l==="off"?null:f);if(x.owner=null,l!=="off"){let m=Math.min(150,f.length/3);for(let y=0;y<m*3;y++)this.previewArr[y]=f[y];r=m,this.previewGeo.attributes.position.needsUpdate=!0}if(p&&g.type!=="timeout"&&g.type!=="gone"){let m=g.type==="water",y=new _e(g.x,m?this.terrain.waterLevel:g.y,g.z);e.aimLandDist=ee(e.pos.x,e.pos.z,y.x,y.z);let T=null,v=null,E=1/0;for(let b of this.units){if(!b.alive)continue;let _=b.getCenter().distanceTo(y);_<o.radius*.85&&(b.team!==e.team?_<E&&(E=_,T=b):v=b)}a=!0,this.impactRing.position.set(y.x,y.y+.15,y.z),this.impactRing.scale.setScalar(o.radius*(1+Math.sin(this.time*8)*.04)),this.impactRing.material.color.set(T?"#ff2a2a":v?"#ffd54f":m?"#8fd3ff":"#ffffff"),this.aimInfo={point:y,enemy:T,friend:v,water:m,dist:e.aimLandDist,ballistic:!0}}else p||(e.aimLandDist=zt(o.speed*u*1.1,6,40))}this.impactRing.visible=a,this.previewGeo.setDrawRange(0,r),this.preview.visible=r>0;let h=c&&(o.type==="hitscan"||o.type==="cone");if(this.laser.visible=!!h&&!o.pellets,h){let u=e.muzzle(),d=e.aimDir(),f=this.traceRay(u,d,o.range,e),p=this.laserGeo.attributes.position;p.setXYZ(0,u.x,u.y,u.z),p.setXYZ(1,f.point.x,f.point.y,f.point.z),p.needsUpdate=!0;let x=f.unit&&f.unit.team!==e.team?f.unit:null,g=f.unit&&f.unit.team===e.team?f.unit:null;this.laser.material.color.set(x?"#ff2a2a":g?"#ffd54f":"#ffffff"),this.aimInfo={point:f.point,enemy:x,friend:g,head:!!f.head,dist:f.dist,range:!f.unit&&!f.terrain&&!f.prop,blocked:!f.unit&&(f.terrain||f.prop)&&f.dist<25}}else if(c&&o.type==="melee"){let u=e.forward(),d=null;for(let p of this.units){if(!p.alive||p.team===e.team)continue;let x=p.pos.x-e.pos.x,g=p.pos.z-e.pos.z,m=Math.hypot(x,g);m<=o.range&&(x*u.x+g*u.z)/(m||1)>Math.cos(60*Te)&&Math.abs(p.pos.y-e.pos.y)<1.6&&(d=p)}let f=d?d.getHead().clone():new _e(e.pos.x+u.x*2,e.pos.y+1.2,e.pos.z+u.z*2);this.aimInfo={point:f,enemy:d,melee:!0}}if(this.marker.visible=!!(n&&i==="target"&&this.targetPoint),this.marker.visible){this.marker.position.copy(this.targetPoint).setY(this.targetPoint.y+.2);let u=o&&o.type==="strike"?(o.scatter||6)+1:1.2;this.marker.scale.setScalar(u*(1+Math.sin(this.time*6)*.06)),this.marker.rotation.y+=t}this.rangeRing.visible=!!(n&&i==="target"&&o&&o.type==="jump"),this.rangeRing.visible&&(this.rangeRing.position.set(e.pos.x,e.pos.y+.3,e.pos.z),this.rangeRing.scale.setScalar(o.range))}enemiesOf(t){return this.units.filter(e=>e.alive&&e.team!==t)}dispose(){this.disposed=!0,this.timers=[],this.frameWaiters=[];for(let t of this.units)t.dispose();for(let t of this.projectiles)t.remove();this.world.dispose(),this.scene.clear()}};var kr=new L,nl=class{constructor(t,e){this.app=t,this.root=ci("div","hud hidden"),e.appendChild(this.root),this.touch=Dc(),this.root.classList.toggle("touch",this.touch),this.root.innerHTML=`
      <div class="hud-top">
        <div class="teams"></div>
        <div class="turninfo">
          <div class="turn-team"></div>
          <div class="turn-row">
            <div class="timer">60</div>
            <div class="wind" title="Wind"><div class="wind-arrow">\u27A4</div><div class="wind-bar"><i></i></div></div>
          </div>
          <div class="round">Runde 1</div>
        </div>
        <div class="hud-tr">
          <button class="hbtn" data-cmd="overview" title="Karte (M)">\u{1F5FA}\uFE0F</button>
          <button class="hbtn" data-cmd="pause" title="Pause (P)">\u23F8</button>
        </div>
      </div>
      <div class="labels"></div>
      <div class="xhair"><i></i><span></span></div>
      <div class="unitcard">
        <div class="uc-name"></div>
        <div class="uc-title"></div>
        <div class="uc-bar hp"><i></i><span></span></div>
        <div class="uc-bar st"><i></i><span>Ausdauer</span></div>
      </div>
      <div class="joy"><div class="joy-knob"></div></div>
      <div class="keyhints"></div>
      <div class="actions">
        <button class="abtn weapon" data-cmd="weaponMenu"><b class="w-icon">\u{1F52B}</b><span class="w-name"></span><small class="w-ammo"></small></button>
        <button class="abtn sm" data-cmd="switch">\u21C4<span>Wechseln</span></button>
        <button class="abtn sm" data-cmd="jump">\u2934<span>Hupfen</span></button>
        <button class="abtn sm" data-cmd="endTurn">\u23ED<span>Ende</span></button>
        <button class="abtn sm" data-cmd="nextTarget">\u2316<span>Ziel</span></button>
        <button class="abtn sm" data-cmd="back">\u2716<span>Zur\xFCck</span></button>
        <button class="abtn big" data-cmd="aim">\u{1F3AF}<span>Zielen</span></button>
        <button class="abtn big fire" data-cmd="fire">\u{1F525}<span>Feuer</span></button>
      </div>
      <div class="power"><i></i><b class="tick"></b></div>
      <div class="aiminfo"></div>
      <div class="announce"><div class="a-title"></div><div class="a-sub"></div></div>
      <div class="toast"></div>
      <div class="wmenu hidden"><div class="wm-panel"><div class="wm-head"><b>Waffenkammer</b><button class="wm-close">\u2716</button></div><div class="wm-grid"></div><div class="wm-desc"></div></div></div>
      <div class="overlay tut hidden"></div>
    `,this.$=i=>this.root.querySelector(i),this.labels=this.$(".labels"),this.tags=new Map,this.bubbles=[],this.floats=[],this.annT=0,this.toastT=0,this.last={},this.root.querySelectorAll("[data-cmd]").forEach(i=>{let n=i.dataset.cmd;if(n==="fire"){let r=o=>{o.preventDefault(),Ce.unlock(),i.classList.add("held"),this.game&&this.game.cmd("fireDown")},a=o=>{o.preventDefault(),i.classList.contains("held")&&(i.classList.remove("held"),this.game&&this.game.cmd("fireUp"))};i.addEventListener("pointerdown",r),i.addEventListener("pointerup",a),i.addEventListener("pointerleave",a),i.addEventListener("pointercancel",a);return}i.addEventListener("pointerdown",r=>{if(r.preventDefault(),r.stopPropagation(),Ce.unlock(),n==="pause"){t.pause();return}if(n==="weaponMenu"){this.toggleWeaponMenu(this.game);return}this.game&&this.game.cmd(n)})}),this.$(".wm-close").addEventListener("click",()=>this.closeWeaponMenu()),this.$(".wmenu").addEventListener("pointerdown",i=>{i.target.classList.contains("wmenu")&&this.closeWeaponMenu()}),t.input.bindJoystick(this.$(".joy"),this.$(".joy-knob"))}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden"),this.closeWeaponMenu(),this.$(".tut").classList.add("hidden")}setupMatch(t){this.game=t,this.labels.innerHTML="",this.tags.clear(),this.bubbles=[],this.floats=[],this.last={},this.$(".announce").classList.remove("show");for(let i of t.units){let n=ci("div","tag");n.innerHTML=`<div class="tag-n">${Nt(i.s.name)}</div><div class="tag-hp"><i style="background:${i.team.color}"></i></div>`,this.labels.appendChild(n),this.tags.set(i,n)}let e=this.$(".teams");e.innerHTML="";for(let i of t.teams){let n=ci("div","tm");n.innerHTML=`<span class="sw" style="background:${i.color}"></span><span class="tm-n">${Nt(i.short)}${i.human&&t.teams.filter(r=>r.human).length>1?"":i.human?" \u2605":""}</span><span class="tm-bar"><i style="background:${i.color}"></i></span>`,e.appendChild(n),i.row=n}this.updateTeams(t),this.setRound(1),this.show(),this.phase(t)}setRound(t){this.$(".round").textContent=`Runde ${t}`}updateTeams(t){for(let e of t.teams){let i=e.units.reduce((r,a)=>r+a.hpMax,0),n=e.units.reduce((r,a)=>r+(a.alive?Math.max(0,a.hp):0),0);e.row&&(e.row.querySelector("i").style.width=`${n/i*100}%`,e.row.classList.toggle("dead",n<=0),e.row.classList.toggle("active",t.team===e))}}turnStart(t,e,i,n=!1){this.updateTeams(t);let r=this.$(".turn-team");r.textContent=e.label||e.name,r.style.color=e.color,n||this.announce(e.human?t.teams.filter(a=>a.human).length>1?`${e.short} is dran!`:"Du bist dran!":`${e.short} is dran`,`${i.name} \xB7 ${Dn(i.s)}`,1.5),this.phase(t)}phase(t){if(!t)return;let e=t.phase,i=t.team&&t.team.human,n=this.root,r=t.weapon?oe[t.weapon]:null;n.dataset.phase=i?e:"cpu";let a=(d,f)=>{let p=n.querySelector(`[data-cmd="${d}"]`);p&&p.classList.toggle("off",!f)},o=i&&e==="move",l=i&&e==="aim",c=i&&e==="target",h=i&&e==="retreat";a("weaponMenu",o||l||c),a("switch",o&&t.canSwitch&&t.team.units.filter(d=>d.alive).length>1),a("jump",o||h),a("endTurn",o),a("nextTarget",l&&r&&r.type!=="heal"&&r.type!=="place"),a("back",l||c),a("aim",o),a("fire",l||c&&!!t.targetPoint),a("overview",o||l);let u=n.querySelector('[data-cmd="fire"] span');u&&r&&(u.textContent=r.type==="heal"?"Essen":r.type==="place"?"Legen":r.type==="jump"?"Spring!":r.type==="ballistic"?"Tipp/Halten":"Feuer"),n.querySelector(".joy").classList.toggle("off",!(o||l||h)||t.overview),this.updateWeaponButton(t),this.updateKeyHints(t),o||l||c||this.closeWeaponMenu()}updateWeaponButton(t){let e=t.unit;if(!e||!t.weapon)return;let i=oe[t.weapon],n=e.ammo[t.weapon];this.$(".w-icon").textContent=i.icon,this.$(".w-name").textContent=i.name,this.$(".w-ammo").textContent=n<0?"\u221E":`\xD7${n}`}updateKeyHints(t){if(this.touch)return;let e=this.$(".keyhints"),i=t.phase,n=t.team&&t.team.human,r="";n&&i==="move"?r="<b>W/S</b> gehen \xB7 <b>A/D</b> drehen \xB7 <b>Leertaste</b> hupfen \xB7 <b>F</b> zielen \xB7 <b>Q</b> Waffen \xB7 <b>Tab</b> wechseln \xB7 <b>M</b> Karte \xB7 <b>X</b> Zug beenden \xB7 Maus ziehen = Kamera":n&&i==="aim"?r=`<b>A/D</b> drehen \xB7 <b>W/S</b> Winkel \xB7 ${oe[t.weapon].type==="ballistic"?"<b>Enter</b> Feuer (Kreis = Einschlag) \xB7 <b>Leertaste halten</b> = Kraft selbst laden":"<b>Leertaste</b> Feuer"} \xB7 <b>E</b> n\xE4chstes Ziel \xB7 <b>Shift</b> fein \xB7 <b>Esc</b> zur\xFCck \xB7 Maus ziehen = zielen`:n&&i==="target"?r="<b>Klick</b> aufs Ziel \xB7 nochmal klicken oder <b>Leertaste</b> = Feuer \xB7 Maus ziehen = Karte schieben \xB7 <b>Esc</b> zur\xFCck":n&&i==="retreat"&&(r="<b>W/A/S/D</b> davonlaufen! \xB7 <b>Leertaste</b> hupfen"),e.innerHTML=r}toggleWeaponMenu(t){this.$(".wmenu").classList.contains("hidden")?this.openWeaponMenu(t):this.closeWeaponMenu()}openWeaponMenu(t){if(!t||!t.humanTurn||!["move","aim","target"].includes(t.phase))return;let e=t.unit,i=this.$(".wm-grid");i.innerHTML="";let n=this.$(".wm-desc"),r=0;for(let a of e.weapons()){let o=oe[a],l=e.ammo[a];r++;let c=ci("button",`wm-item${l===0?" empty":""}${a===t.weapon?" sel":""}`);c.innerHTML=`<b>${o.icon}</b><span>${Nt(o.name)}</span><small>${l<0?"\u221E":`\xD7${l}`}</small>${!this.touch&&r<=9?`<em>${r}</em>`:""}`,c.addEventListener("pointerenter",()=>{n.textContent=o.desc||""}),c.addEventListener("click",()=>{if(l===0){n.textContent="Leer. Nix mehr da.";return}t.cmd("selectWeapon",a),this.closeWeaponMenu()}),i.appendChild(c)}n.textContent=oe[t.weapon]?oe[t.weapon].desc:"",this.$(".wmenu").classList.remove("hidden")}closeWeaponMenu(){this.$(".wmenu").classList.add("hidden")}announce(t,e="",i=1.6){let n=this.$(".announce");n.querySelector(".a-title").textContent=t,n.querySelector(".a-sub").textContent=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),this.annT=i}toast(t,e=2.2){let i=this.$(".toast");i.textContent=t,i.classList.add("show"),this.toastT=e}say(t,e){if(!e)return;let i=this.bubbles.find(r=>r.u===t);for(i&&(i.el.remove(),this.bubbles.splice(this.bubbles.indexOf(i),1));this.bubbles.length>=3;)this.bubbles.shift().el.remove();let n=ci("div","bubble");n.textContent=e,n.style.borderColor=t.team.color,this.labels.appendChild(n),this.bubbles.push({u:t,el:n,t:2.6+e.length*.03})}floatText(t,e,i){let n=ci("div","float");n.textContent=e,n.style.color=i,this.labels.appendChild(n),this.floats.push({pos:t.clone(),el:n,t:0})}unitDied(){}project(t,e,i,n){return kr.copy(t).project(e),kr.z>1||kr.z<-1?null:{x:(kr.x*.5+.5)*i,y:(-kr.y*.5+.5)*n}}frame(t,e){let i=t.cam.cam,n=this.app.width,r=this.app.height,a=t.unit;for(let[E,b]of this.tags){if(!E.alive&&E.deathT>1.2){b.style.display!=="none"&&(b.style.display="none");continue}let _=this.project(E.getHead().clone().setY(E.pos.y+2.45),i,n,r),w=i.position.distanceTo(E.pos);if(!_||w>75){b.style.display!=="none"&&(b.style.display="none");continue}b.style.display="",b.style.transform=`translate(${_.x.toFixed(1)}px, ${_.y.toFixed(1)}px) translate(-50%, -100%)`;let C=zt(E.hp/E.hpMax,0,1)*100,R=`${Math.round(C)}|${E===a}`;b._k!==R&&(b._k=R,b.querySelector("i").style.width=`${C}%`,b.classList.toggle("cur",E===a))}for(let E=this.bubbles.length-1;E>=0;E--){let b=this.bubbles[E];b.t-=e;let _=this.project(b.u.getHead().clone().setY(b.u.pos.y+2.9),i,n,r);if(b.t<=0||!_){b.t<=0?(b.el.remove(),this.bubbles.splice(E,1)):b.el.style.display="none";continue}b.el.style.display="";let w=zt(_.x,90,n-90),C=zt(_.y,60,r-40);b.el.style.transform=`translate(${w.toFixed(1)}px, ${C.toFixed(1)}px) translate(-50%, -100%)`,b.el.style.opacity=Math.min(1,b.t*3)}for(let E=this.floats.length-1;E>=0;E--){let b=this.floats[E];b.t+=e,b.pos.y+=e*1.2;let _=this.project(b.pos,i,n,r);if(b.t>1.6||!_){b.el.remove(),this.floats.splice(E,1);continue}b.el.style.transform=`translate(${_.x.toFixed(1)}px, ${_.y.toFixed(1)}px) translate(-50%, -50%) scale(${1+Math.max(0,.3-b.t)})`,b.el.style.opacity=Math.min(1,(1.6-b.t)*2)}if(a){let E=`${a.uid}|${Math.round(a.hp)}|${Math.round(a.stamina)}`;if(this.last.uc!==E){this.last.uc=E,this.$(".uc-name").innerHTML=`<span class="sw" style="background:${a.team.color}"></span>${Nt(ki[a.s.tier])} ${Nt(a.s.name)}`,this.$(".uc-title").textContent=`${Dn(a.s)} \xB7 ${a.isStier?"Stier":"Kuh"}`;let b=Math.max(0,a.hp);this.$(".uc-bar.hp i").style.width=`${b/a.hpMax*100}%`,this.$(".uc-bar.hp span").textContent=`${Math.round(b)} / ${a.hpMax}`,this.$(".uc-bar.st i").style.width=`${a.stamina}%`}}let o=Math.ceil(t.turnTimer||0);if(this.last.timer!==o){this.last.timer=o;let E=this.$(".timer");E.textContent=o,E.classList.toggle("low",o<=10)}let l=t.team&&t.team.human&&["move","aim","target"].includes(t.phase);this.$(".timer").classList.toggle("paused",!l);let c=t.wind.x,h=t.wind.z,u=Math.hypot(c,h),d=t.cam.yaw+Math.PI-Math.atan2(c,h),f=`${d*20|0}|${u*50|0}`;this.last.wind!==f&&(this.last.wind=f,this.$(".wind-arrow").style.transform=`rotate(${d*180/Math.PI-90}deg)`,this.$(".wind-arrow").style.opacity=u<.03?.25:1,this.$(".wind-bar i").style.width=`${Math.min(100,u*100)}%`);let p=this.$(".power"),x=t.weapon?oe[t.weapon]:null,g=t.phase==="aim"&&t.team&&t.team.human&&x&&x.type==="ballistic";if(t.charging||g){p.classList.add("show"),p.querySelector("i").style.width=`${(t.charging?t.power:0)*100}%`;let E=p.querySelector(".tick");t.powerHint?(E.style.display="block",E.style.left=`${t.powerHint.power*100}%`,p.classList.toggle("near",t.charging&&Math.abs(t.power-t.powerHint.power)<.03)):(E.style.display="none",p.classList.remove("near"))}else p.classList.remove("show");let m=this.$(".xhair"),y=t.aimInfo,T=y?this.project(y.point,i,n,r):null;if(T){m.classList.add("show"),m.style.transform=`translate(${T.x.toFixed(1)}px, ${T.y.toFixed(1)}px)`,m.classList.toggle("on",!!y.enemy),m.classList.toggle("friend",!y.enemy&&!!y.friend);let E="";y.enemy?E=y.melee?`${y.enemy.s.name} in Reichweite!`:y.head?`Kopf! ${y.enemy.s.name}`:`Treffer: ${y.enemy.s.name}`:y.friend?E=`Achtung, ${y.friend.s.name}!`:y.water?E="Ins Wasser":y.melee?E="Ka Gegner in Reichweite":y.range?E="Au\xDFer Reichweite":y.blocked&&(E="Deckung im Weg"),y.dist!==void 0&&!y.melee&&(E+=`${E?" \xB7 ":""}${Math.round(y.dist)} m`);let b=m.querySelector("span");b.textContent!==E&&(b.textContent=E)}else m.classList.remove("show");let v=this.$(".aiminfo");if(a&&a.aiming&&(t.phase==="aim"||t.phase==="ai")){let E=oe[t.weapon],b=Math.round(a.aimPitch*180/Math.PI);v.textContent=E.type==="ballistic"?`Winkel ${b}\xB0${t.charging?` \xB7 Kraft ${Math.round(t.power*100)}%`:""}`:`${E.name} \xB7 ${b}\xB0`,v.classList.add("show")}else v.classList.remove("show");this.annT>0&&(this.annT-=e,this.annT<=0&&this.$(".announce").classList.remove("show")),this.toastT>0&&(this.toastT-=e,this.toastT<=0&&this.$(".toast").classList.remove("show")),t.unit&&t.weapon&&this.last.wb!==`${t.weapon}|${t.unit.ammo[t.weapon]}`&&(this.last.wb=`${t.weapon}|${t.unit.ammo[t.weapon]}`,this.updateWeaponButton(t))}tutorial(t){let e=this.$(".tut"),i=this.touch;e.innerHTML=`<div class="panel">
      <h2>Kurze Einweisung, Rekrut!</h2>
      <ul class="tut-list">
        ${i?`
        <li><b>Joystick links:</b> vorw\xE4rts/r\xFCckw\xE4rts gehen und drehen.</li>
        <li><b>Wischen am Bildschirm:</b> Kamera drehen. Zwei Finger: zoomen.</li>
        <li><b>\u{1F3AF} Zielen:</b> Waffe anlegen. Dann wischen oder Joystick = Richtung &amp; Winkel.</li>
        <li><b>\u2316 Ziel:</b> dreht zum n\xE4chsten Gegner und stellt bei Granaten &amp; Co. gleich die passende Kraft ein.</li>
        <li><b>\u{1F525} antippen</b> feuert mit der eingestellten Kraft (der Kreis zeigt den Einschlag). <b>\u{1F525} halten</b> l\xE4dt die Kraft selbst auf \u2013 loslassen = Wurf.</li>`:`
        <li><b>W/S</b> gehen, <b>A/D</b> drehen, <b>Leertaste</b> hupfen, Maus ziehen = Kamera.</li>
        <li><b>F</b> zielen, <b>Q</b> Waffenkammer, <b>1\u20139</b> Schnellwahl.</li>
        <li>Beim Zielen: <b>A/D</b> drehen, <b>W/S</b> Winkel \u2013 oder einfach mit der Maus ziehen.</li>
        <li><b>E</b> dreht zum n\xE4chsten Gegner und stellt bei Granaten die passende Kraft ein, <b>M</b> zeigt die Karte.</li>
        <li><b>Enter</b> feuert mit der eingestellten Kraft (Kreis = Einschlag), <b>Leertaste halten</b> l\xE4dt die Kraft selbst auf.</li>`}
        <li>Das <b>Fadenkreuz</b> sitzt genau dort, wo der Schuss hingeht \u2013 <b style="color:#ff5a4a">rot</b> = Treffer. Bei Wurfwaffen zeigt der <b>Kreis</b> den Einschlag samt Wind.</li>
        <li>Pro Zug: <b>ein</b> Rindsviech bewegen und <b>einmal</b> angreifen. Die Ausdauer begrenzt den Weg.</li>
        <li>Achtung auf den <b>Wind</b> (oben) und aufs <b>Wasser</b> \u2013 wer reinf\xE4llt, ersauft.</li>
      </ul>
      <button class="btn primary tut-ok">Verstanden, Herr Wachtmeister!</button>
    </div>`,e.classList.remove("hidden"),t.paused=!0,e.querySelector(".tut-ok").addEventListener("click",()=>{Ce.unlock(),e.classList.add("hidden"),t.paused=!1})}};var kc="rindsviecher_save_v1",Md=8,Cx=Math.floor(Math.random()*1e6);function Hc(s,t={}){let e=t.sex||(s.next()<.5?"kuh":"stier"),i=e==="kuh"?id:nd,n=t.used||new Set,r=s.pick(i);for(let a=0;a<30&&n.has(r);a++)r=s.pick(i);return n.add(r),{id:++Cx*7+Math.floor(s.next()*7),name:r,sex:e,breed:s.pick(e==="kuh"?sd:rd),tier:t.tier||0,branch:t.branch||null,points:0,kills:0,missions:0,medals:[]}}function Os(s,t,e){let i=Hc(s,{used:e});return t>0&&(i.branch=s.pick(Object.keys(Ln)),i.tier=t),i}function bd(s){let t=new Ge(Date.now()&16777215),e=new Set,i=[];for(let n=0;n<Md;n++)i.push(Hc(t,{sex:n%2?"stier":"kuh",used:e}));return{v:1,faction:s,mission:0,squad:i,created:Date.now(),history:[],done:!1}}function Hr(s){try{localStorage.setItem(kc,JSON.stringify(s))}catch{}}function Gc(){try{let s=localStorage.getItem(kc);if(!s)return null;let t=JSON.parse(s);return!t||t.v!==1||!Array.isArray(t.squad)?null:t}catch{return null}}function Sd(){try{localStorage.removeItem(kc)}catch{}}function Ix(s,t,e){let i=Bi.filter(r=>r.id!==s.faction),n=[];for(let r=0;r<e;r++)n.push(i[(t*3+r*4+1)%i.length].id);return n}function sl(s,t){let e=Nn[t],i=Ix(s,t,e.enemies.length),n=e.briefing.replace("{E1}",pi(i[0]).name).replace("{E2}",i[1]?pi(i[1]).name:"");return{...e,enemyFactions:i,text:n,index:t}}function wd(s,t){return[...s.squad].sort((i,n)=>n.tier-i.tier||n.points-i.points).slice(0,t).map(i=>i.id)}function Ed(s,t,e){let i=sl(s,t),n=new Ge(i.seed*31+7),r=s.squad.filter(l=>e.includes(l.id)),a=new Set(r.map(l=>l.name)),o=[{faction:s.faction,control:"human",soldiers:r.map(l=>({...l}))}];return i.enemies.forEach((l,c)=>{let h=[];for(let u=0;u<l.units;u++)h.push(Os(n,n.int(l.tiers[0],l.tiers[1]),a));o.push({faction:i.enemyFactions[c],control:"cpu",difficulty:i.ai,soldiers:h})}),{mode:"campaign",theme:i.theme,seed:i.seed,title:`Einsatz ${t+1}: ${i.title}`,teams:o,tutorial:!!i.tutorial,firstTeam:i.tutorial?0:void 0,rules:{wind:i.wind,risingWater:i.risingWater||0,mines:i.mines||0,fog:!!i.fog,crates:!0,maibaum:!!i.mines,maxRounds:30}}}function rl(s){return s.tier<5&&s.points>=Dr[s.tier+1]}function Vc(s,t){if(!rl(s))return!1;if(s.tier===0){if(!t||!Ln[t])return!1;s.branch=t}return s.points-=Dr[s.tier+1],s.tier++,!0}function Td(s,t){let e=t.teams[0],i=t.winner===0,n=new Ge(Date.now()&65535),r={won:i,units:[],fallen:[],recruits:[],missionIdx:s.mission},a=-1,o=null;for(let c of e.units){let h=s.squad.find(p=>p.id===c.id);if(!h)continue;let u=0;c.alive&&(u+=1),c.alive&&i&&(u+=1),u+=c.kills*2,u+=Math.min(3,Math.floor(c.dmg/30));let d=[];c.kills>=2&&d.push("killer"),c.alive&&c.hp<20&&d.push("survivor");let f=c.kills*2+c.dmg/30;f>a&&f>0&&(a=f,o={s:h,r:c}),r.units.push({s:h,r:c,pts:u,medals:d})}if(o){let c=r.units.find(h=>h.s===o.s);c.medals.push("gold"),c.pts+=1}for(let c of r.units){if(!c.r.alive){r.fallen.push(c.s);continue}c.s.points+=c.pts,c.s.kills+=c.r.kills,c.s.missions+=1,c.s.medals.push(...c.medals)}let l=new Set(s.squad.map(c=>c.name));for(s.squad=s.squad.filter(c=>!r.fallen.includes(c));s.squad.length<Md;){let c=Hc(n,{used:l});s.squad.push(c),r.recruits.push(c)}return s.history.push({mission:s.mission,won:i,date:Date.now()}),i&&(s.mission++,s.mission>=Nn.length&&(s.done=!0)),Hr(s),r}var al=s=>s.sex==="stier"?"\u{1F402}":"\u{1F404}",ol=class{constructor(t,e){this.app=t,this.root=ci("div","menus"),e.appendChild(this.root),this.skirmish={teams:[{faction:"noe",control:"human",difficulty:"normal",units:4},{faction:"tirol",control:"cpu",difficulty:"normal",units:4}],theme:"random",ranks:"mixed",wind:.45,turnTime:60,crates:!0,mines:!1,water:!1,fog:!1};try{let i=JSON.parse(localStorage.getItem("rindsviecher_skirmish")||"null");i&&i.teams&&(this.skirmish={...this.skirmish,...i})}catch{}}clear(){this.root.innerHTML="",this.root.classList.remove("hidden")}hide(){this.root.innerHTML="",this.root.classList.add("hidden")}screen(t,e){this.clear();let i=ci("div",`screen ${t}`);return i.innerHTML=e,this.root.appendChild(i),i.querySelectorAll("button, select, input").forEach(n=>n.addEventListener("pointerdown",()=>Ce.unlock())),i.querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>Ce.click())),i}title(){let t=Gc(),e=t&&!t.done,i=this.screen("title-screen",`
      <div class="logo">
        <div class="logo-sub">Die Kuh is no ned vom Eis</div>
        <h1 class="logo-main"><span>RINDS</span><span>VIECHER</span></h1>
        <div class="logo-tag">Rundenbasierte 3D-Rindviecherei \xB7 Remastered in Full HD</div>
      </div>
      <div class="menu">
        ${e?`<button class="btn primary" data-a="continue">Feldzug fortsetzen<small>Einsatz ${t.mission+1} von ${Nn.length} \xB7 ${Nt(pi(t.faction).short)}</small></button>`:""}
        <button class="btn ${e?"":"primary"}" data-a="new">Neuer Feldzug</button>
        <button class="btn" data-a="skirmish">Schnelles Gefecht</button>
        <div class="row2">
          <button class="btn" data-a="howto">Anleitung</button>
          <button class="btn" data-a="settings">Einstellungen</button>
        </div>
        ${document.fullscreenEnabled?'<button class="btn ghost" data-a="fs">\u26F6 Vollbild</button>':""}
      </div>
      <div class="foot">Fan-Remaster eines rundenbasierten Artillerie-Klassikers \xB7 Eigene Figuren, eigener Schm\xE4h \xB7 v1.0</div>
    `);i.querySelector('[data-a="new"]').onclick=()=>this.newCampaign(),e&&(i.querySelector('[data-a="continue"]').onclick=()=>{this.app.campaign=t,this.barracks()}),i.querySelector('[data-a="skirmish"]').onclick=()=>this.skirmishSetup(),i.querySelector('[data-a="howto"]').onclick=()=>this.howto(()=>this.title()),i.querySelector('[data-a="settings"]').onclick=()=>this.settings(()=>this.title());let n=i.querySelector('[data-a="fs"]');n&&(n.onclick=()=>this.app.toggleFullscreen())}newCampaign(){let t=Gc(),e="noe",i=this.screen("faction-screen",`
      <div class="panel wide">
        <h2>Neuer Feldzug</h2>
        <p class="lead">F\xFCr welches Bundesland ziehst du ins Feld? Zw\xF6lf Eins\xE4tze, eine Truppe, Bef\xF6rderungen nach Bundesheer-Art. Wer f\xE4llt, ist weg \u2013 a neuer Rekrut r\xFCckt nach.</p>
        <div class="factions">
          ${Bi.map(n=>`<button class="fcard${n.id===e?" sel":""}" data-f="${n.id}" style="--c:${n.color}"><span class="fc-sw"></span><b>${Nt(n.name)}</b><small>\u201E${Nt(n.motto)}\u201C</small></button>`).join("")}
        </div>
        ${t&&!t.done?'<p class="warn">Achtung: Der bestehende Feldzug wird \xFCberschrieben.</p>':""}
        <div class="btns">
          <button class="btn" data-a="back">Zur\xFCck</button>
          <button class="btn primary" data-a="go">Ab in die Kaserne!</button>
        </div>
      </div>`);i.querySelectorAll(".fcard").forEach(n=>{n.onclick=()=>{e=n.dataset.f,i.querySelectorAll(".fcard").forEach(r=>r.classList.toggle("sel",r===n))}}),i.querySelector('[data-a="back"]').onclick=()=>this.title(),i.querySelector('[data-a="go"]').onclick=()=>{let n=bd(e);Hr(n),this.app.campaign=n,this.barracks()}}barracks(){let t=this.app.campaign;if(t.done){this.campaignDone();return}let e=sl(t,t.mission),i=e.player;(!this.selection||this.selection.mission!==t.mission||this.selection.ids.some(o=>!t.squad.find(l=>l.id===o)))&&(this.selection={mission:t.mission,ids:wd(t,i)});let n=this.selection.ids,r=pi(t.faction),a=this.screen("barracks-screen",`
      <div class="panel wide">
        <div class="ph">
          <h2><span class="sw" style="background:${r.color}"></span>Kaserne \xB7 ${Nt(r.name)}</h2>
          <div class="sub">N\xE4chster Einsatz: <b>${t.mission+1}/${Nn.length} \u2013 ${Nt(e.title)}</b> \xB7 Aufstellung: <b class="selcount">${n.length}/${i}</b></div>
        </div>
        <div class="squad">
          ${t.squad.map(o=>this.soldierCard(o,n.includes(o.id))).join("")}
        </div>
        <p class="hint">Antippen = f\xFCr den Einsatz aufstellen. Bef\xF6rderungspunkte gibt's f\xFCrs \xDCberleben, Treffer und Absch\xFCsse.</p>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmen\xFC</button>
          <button class="btn primary" data-a="brief">Zur Einsatzbesprechung</button>
        </div>
      </div>`);a.querySelectorAll(".scard").forEach(o=>{let l=Number(o.dataset.id);o.querySelector(".sc-main").onclick=()=>{let h=n.indexOf(l);h>=0?n.splice(h,1):(n.length>=i&&n.shift(),n.push(l)),this.barracks()};let c=o.querySelector(".promo");c&&(c.onclick=h=>{h.stopPropagation(),this.promoteDialog(t.squad.find(u=>u.id===l))})}),a.querySelector('[data-a="menu"]').onclick=()=>this.title(),a.querySelector('[data-a="brief"]').onclick=()=>{n.length<i&&t.squad.filter(l=>!n.includes(l.id)).slice(0,i-n.length).forEach(l=>n.push(l.id)),this.briefing()}}soldierCard(t,e){let i=rl(t),n=t.tier<5?Dr[t.tier+1]:null,r=t.medals.reduce((a,o)=>(a[o]=(a[o]||0)+1,a),{});return`<div class="scard${e?" sel":""}" data-id="${t.id}">
      <div class="sc-main">
        <div class="sc-ico">${al(t)}</div>
        <div class="sc-info">
          <b>${Nt(ki[t.tier])} ${Nt(t.name)}</b>
          <span>${Nt(Dn(t))}${t.branch&&t.tier<4?` \xB7 ${Nt(Ln[t.branch].name)}`:""} \xB7 ${Ls[t.tier]} LP</span>
          <small>${t.missions} Eins\xE4tze \xB7 ${t.kills} Absch\xFCsse \xB7 Punkte ${t.points}${n?`/${n}`:""} ${Object.entries(r).map(([a,o])=>`${Fs[a].icon}${o>1?`\xD7${o}`:""}`).join(" ")}</small>
        </div>
        <div class="sc-check">${e?"\u2714":""}</div>
      </div>
      ${i?'<button class="btn small promo">\u2B06 Bef\xF6rdern</button>':""}
    </div>`}promoteDialog(t){let e=t.tier+1,i=ci("div","overlay");if(t.tier===0)i.innerHTML=`<div class="panel">
        <h2>${Nt(t.name)} bef\xF6rdern</h2>
        <p class="lead">Bef\xF6rderung zum Gefreiten \u2013 aber welche Laufbahn? Die Wahl is endg\xFCltig.</p>
        <div class="branches">
          ${Object.entries(Ln).map(([n,r])=>`<button class="bcard" data-b="${n}"><b>${r.icon} ${Nt(r.name)}</b><span>${Nt(r.titles.join(" \u2192 "))}</span><small>${Nt(r.desc)}</small><em>${this.loadoutText({tier:1,branch:n})}</em></button>`).join("")}
        </div>
        <div class="btns"><button class="btn" data-a="x">Abbrechen</button></div>
      </div>`,i.querySelectorAll(".bcard").forEach(n=>{n.onclick=()=>{Vc(t,n.dataset.b),Hr(this.app.campaign),Ce.bell(.3),i.remove(),this.barracks()}});else{let n={...t,tier:e};i.innerHTML=`<div class="panel">
        <h2>${Nt(t.name)} bef\xF6rdern</h2>
        <p class="lead">${Nt(ki[t.tier])} \u2192 <b>${Nt(ki[e])}</b> \xB7 ${Nt(Dn(n))}</p>
        <p>Lebenspunkte: ${Ls[t.tier]} \u2192 <b>${Ls[e]}</b></p>
        <p class="small">Ausr\xFCstung: ${this.loadoutText(n)}</p>
        <div class="btns"><button class="btn" data-a="x">Abbrechen</button><button class="btn primary" data-a="ok">Bef\xF6rdern!</button></div>
      </div>`,i.querySelector('[data-a="ok"]').onclick=()=>{Vc(t),Hr(this.app.campaign),Ce.bell(.3),i.remove(),this.barracks()}}i.querySelector('[data-a="x"]').onclick=()=>i.remove(),this.root.appendChild(i)}loadoutText(t){let e=Wo(t);return Vo.filter(i=>e[i]!==void 0&&i!=="kopfnuss"&&i!=="pistole").map(i=>`${oe[i].icon} ${oe[i].name} \xD7${e[i]}`).join(", ")}briefing(){let t=this.app.campaign,e=sl(t,t.mission),i=Ds[e.theme],n=e.wind>.8?"F\xF6hnsturm":e.wind>.5?"stark":e.wind>.3?"mittel":"schwach",r=[];e.fog&&r.push("\u{1F32B}\uFE0F Nebel"),e.risingWater&&r.push("\u{1F30A} Hochwasser"),e.mines&&r.push("\u{1F7E4} Minenfeld"),e.enemies.length>1&&r.push("\u2694\uFE0F Drei Parteien");let a=this.screen("brief-screen",`
      <div class="panel">
        <div class="kicker">Einsatz ${t.mission+1} von ${Nn.length}</div>
        <h2>${Nt(e.title)}</h2>
        <div class="facts">
          <span>\u{1F3D4}\uFE0F ${Nt(i.name)}</span>
          <span>\u{1F4A8} Wind: ${n}</span>
          <span>\u{1F916} Gegner: ${Nt(Nr[e.ai].name)}</span>
          ${e.enemyFactions.map((o,l)=>`<span><i class="sw" style="background:${pi(o).color}"></i>${Nt(pi(o).name)} (${e.enemies[l].units})</span>`).join("")}
          ${r.map(o=>`<span>${o}</span>`).join("")}
        </div>
        <blockquote class="brief">${Nt(e.text)}</blockquote>
        <div class="btns">
          <button class="btn" data-a="back">Zur Kaserne</button>
          <button class="btn primary" data-a="go">Abmarsch!</button>
        </div>
      </div>`);a.querySelector('[data-a="back"]').onclick=()=>this.barracks(),a.querySelector('[data-a="go"]').onclick=()=>{let o=Ed(t,t.mission,this.selection.ids);this.app.startMatch(o,{kind:"campaign"})}}campaignResult(t,e){let i=this.app.campaign,n=t.won,r=i.squad.some(rl),a=this.screen("result-screen",`
      <div class="panel wide">
        <div class="kicker">Einsatz ${t.missionIdx+1}: ${Nt(Nn[t.missionIdx].title)}</div>
        <h2 class="${n?"win":"lose"}">${n?"SIEG!":"NIEDERLAGE"}</h2>
        <p class="lead">${Nt(Hi(zc[n?"win":"lose"]))}</p>
        <table class="stats">
          <tr><th></th><th>Soldat</th><th>Status</th><th>Absch\xFCsse</th><th>Schaden</th><th>Punkte</th></tr>
          ${t.units.map(l=>`<tr class="${l.r.alive?"":"dead"}">
            <td>${al(l.s)}</td>
            <td>${Nt(ki[l.s.tier])} ${Nt(l.s.name)} ${l.medals.map(c=>`<span title="${Nt(Fs[c].name)}">${Fs[c].icon}</span>`).join("")}</td>
            <td>${l.r.alive?`\u2714 ${l.r.hp} LP`:"\u271D gefallen"}</td>
            <td>${l.r.kills}</td><td>${l.r.dmg}</td><td>${l.r.alive?`+${l.pts}`:"\u2013"}</td></tr>`).join("")}
        </table>
        ${t.fallen.length?`<p class="memorial">In Gedenken: ${t.fallen.map(l=>Nt(l.name)).join(", ")}. M\xF6ge die Alm ewig gr\xFCn sein.</p>`:""}
        ${t.recruits.length?`<p class="small">Neue Rekruten einger\xFCckt: ${t.recruits.map(l=>`${al(l)} ${Nt(l.name)}`).join(", ")}</p>`:""}
        ${t.units.some(l=>l.medals.length)?`<p class="small">${t.units.filter(l=>l.medals.length).map(l=>l.medals.map(c=>`${Fs[c].icon} ${Nt(Fs[c].name)} f\xFCr ${Nt(l.s.name)}`).join(" \xB7 ")).join(" \xB7 ")}</p>`:""}
        ${r?'<p class="promo-hint">\u2B06 Es gibt Bef\xF6rderungen in der Kaserne!</p>':""}
        <div class="btns">
          ${n?"":'<button class="btn" data-a="retry">Nochmal versuchen</button>'}
          <button class="btn primary" data-a="next">${i.done?"Zum Finale":"Zur Kaserne"}</button>
        </div>
      </div>`);a.querySelector('[data-a="next"]').onclick=()=>i.done?this.campaignDone():this.barracks();let o=a.querySelector('[data-a="retry"]');o&&(o.onclick=()=>this.barracks())}campaignDone(){let t=this.app.campaign,e=pi(t.faction),i=this.screen("result-screen",`
      <div class="panel">
        <div class="kicker">Feldzug abgeschlossen</div>
        <h2 class="win">Die ${Nt(e.name)} san Meister!</h2>
        <p class="lead">Alle zw\xF6lf Eins\xE4tze \xFCberstanden. Da Bauer hat a Freibier spendiert, die Blasmusi spielt, und im Heimatmuseum h\xE4ngt jetzt a Foto von eich. Mit H\xF6rnern.</p>
        <p>\xDCberlebende Veteranen: ${t.squad.filter(n=>n.missions>0).map(n=>`${al(n)} ${Nt(ki[n.tier])} ${Nt(n.name)}`).join(", ")||"\u2013"}</p>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmen\xFC</button>
          <button class="btn primary" data-a="new">Neuer Feldzug</button>
        </div>
      </div>`);i.querySelector('[data-a="menu"]').onclick=()=>this.title(),i.querySelector('[data-a="new"]').onclick=()=>{Sd(),this.newCampaign()}}skirmishSetup(){let t=this.skirmish,e=t.teams.map(l=>l.faction),i=l=>Bi.map(c=>`<option value="${c.id}"${c.id===l?" selected":""}>${Nt(c.name)}</option>`).join(""),n=l=>[["human","Mensch"],["easy","CPU leicht"],["normal","CPU normal"],["hard","CPU schwer"]].map(([c,h])=>`<option value="${c}"${(l.control==="human"?"human":l.difficulty)===c?" selected":""}>${h}</option>`).join(""),r=(l,c)=>l.map(([h,u])=>`<option value="${h}"${String(c)===String(h)?" selected":""}>${u}</option>`).join(""),a=this.screen("skirmish-screen",`
      <div class="panel wide">
        <h2>Schnelles Gefecht</h2>
        <div class="teams-setup">
          ${t.teams.map((l,c)=>`<div class="trow" data-i="${c}">
            <span class="sw" style="background:${pi(l.faction).color}"></span>
            <select data-k="faction">${i(l.faction)}</select>
            <select data-k="control">${n(l)}</select>
            <select data-k="units">${r([2,3,4,5,6].map(h=>[h,`${h} Viecher`]),l.units)}</select>
            ${t.teams.length>2?'<button class="btn small x" data-a="rm">\u2716</button>':""}
          </div>`).join("")}
          ${t.teams.length<4?'<button class="btn small" data-a="add">+ Team dazu</button>':""}
        </div>
        <div class="opts">
          <label>Gel\xE4nde<select data-o="theme">${r([["random","Zufall"],...Ns.map(l=>[l,Ds[l].name])],t.theme)}</select></label>
          <label>Dienstgrade<select data-o="ranks">${r([["rekrut","Nur Rekruten"],["mixed","Gemischt"],["veteran","Veteranen"],["hero","Helden"]],t.ranks)}</select></label>
          <label>Wind<select data-o="wind">${r([[0,"Windstill"],[.25,"Schwach"],[.45,"Mittel"],[.7,"Stark"],[1,"F\xF6hnsturm"]],t.wind)}</select></label>
          <label>Rundenzeit<select data-o="turnTime">${r([[30,"30 s"],[45,"45 s"],[60,"60 s"],[90,"90 s"],[9999,"Unbegrenzt"]],t.turnTime)}</select></label>
          <label class="chk"><input type="checkbox" data-o="crates"${t.crates?" checked":""}> Kisten vom Himmel</label>
          <label class="chk"><input type="checkbox" data-o="mines"${t.mines?" checked":""}> Minenfeld</label>
          <label class="chk"><input type="checkbox" data-o="water"${t.water?" checked":""}> Hochwasser</label>
          <label class="chk"><input type="checkbox" data-o="fog"${t.fog?" checked":""}> Nebel</label>
        </div>
        <p class="hint">Mehrere \u201EMensch\u201C-Teams = Hot-Seat: ihr spielt abwechselnd am selben Ger\xE4t.</p>
        <div class="btns">
          <button class="btn" data-a="back">Zur\xFCck</button>
          <button class="btn primary" data-a="go">Los geht's!</button>
        </div>
      </div>`);a.querySelectorAll(".trow").forEach(l=>{let c=Number(l.dataset.i);l.querySelectorAll("select").forEach(u=>{u.onchange=()=>{let d=t.teams[c];u.dataset.k==="faction"&&(d.faction=u.value),u.dataset.k==="units"&&(d.units=Number(u.value)),u.dataset.k==="control"&&(u.value==="human"?d.control="human":(d.control="cpu",d.difficulty=u.value)),this.skirmishSetup()}});let h=l.querySelector('[data-a="rm"]');h&&(h.onclick=()=>{t.teams.splice(c,1),this.skirmishSetup()})});let o=a.querySelector('[data-a="add"]');o&&(o.onclick=()=>{let l=Bi.find(c=>!e.includes(c.id));t.teams.push({faction:l.id,control:"cpu",difficulty:"normal",units:4}),this.skirmishSetup()}),a.querySelectorAll("[data-o]").forEach(l=>{l.onchange=()=>{let c=l.dataset.o;l.type==="checkbox"?t[c]=l.checked:t[c]=["wind","turnTime"].includes(c)?Number(l.value):l.value}}),a.querySelector('[data-a="back"]').onclick=()=>this.title(),a.querySelector('[data-a="go"]').onclick=()=>{let l=t.teams.map(c=>c.faction);if(new Set(l).size!==l.length){this.app.toastMenu("Zwa Teams mit derselben Fraktion geht ned. Bitte unterschiedliche w\xE4hlen.");return}try{localStorage.setItem("rindsviecher_skirmish",JSON.stringify(t))}catch{}this.app.startMatch(this.buildSkirmish(),{kind:"skirmish"})}}buildSkirmish(){let t=this.skirmish,e=(Date.now()&65535)+1,i=new Ge(e),n=t.theme==="random"?i.pick(Ns):t.theme,r=new Set,a=()=>{switch(t.ranks){case"rekrut":return 0;case"veteran":return i.int(2,3);case"hero":return i.int(3,5);default:return i.int(0,2)}},o=t.teams.filter(h=>h.control==="human").length,l=0,c=t.teams.map(h=>{let u=[],d=[];for(let p=0;p<h.units;p++)d.push(a());for(let p=0;p<h.units;p++)u.push(Os(i,d[p],r));let f=pi(h.faction);return h.control==="human"&&l++,{faction:h.faction,control:h.control,difficulty:h.difficulty,soldiers:u,label:o>1&&h.control==="human"?`Spieler ${l} \xB7 ${f.short}`:void 0}});return{mode:"skirmish",theme:n,seed:e,title:"Schnelles Gefecht",teams:c,rules:{wind:t.wind,turnTime:t.turnTime,crates:t.crates,mines:t.mines?12:0,risingWater:t.water?.3:0,fog:t.fog,maibaum:t.mines,maxRounds:40}}}skirmishResult(t){let e=t.winner>=0?t.teams[t.winner]:null,i=e&&e.human,n=t.teams.some(a=>a.human),r=this.screen("result-screen",`
      <div class="panel wide">
        <div class="kicker">Schnelles Gefecht \xB7 ${t.rounds} Runden</div>
        <h2 class="${i||!n?"win":"lose"}">${e?`${Nt(e.name)} gewinnt!`:"Unentschieden!"}</h2>
        <p class="lead">${Nt(Hi(zc[e?i||!n?"win":"lose":"draw"]))}</p>
        <div class="team-results">
          ${t.teams.map(a=>`<div class="tres"><h3><span class="sw" style="background:${pi(a.faction).color}"></span>${Nt(a.name)}${a.human?" (Mensch)":""}</h3>
            <table class="stats">${a.units.map(o=>`<tr class="${o.alive?"":"dead"}"><td>${Nt(o.name)}</td><td>${o.alive?`\u2714 ${o.hp}`:"\u271D"}</td><td>${o.kills} \u{1F480}</td><td>${o.dmg} \u{1F4A5}</td></tr>`).join("")}</table></div>`).join("")}
        </div>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmen\xFC</button>
          <button class="btn" data-a="setup">Einstellungen \xE4ndern</button>
          <button class="btn primary" data-a="again">Revanche!</button>
        </div>
      </div>`);r.querySelector('[data-a="menu"]').onclick=()=>this.title(),r.querySelector('[data-a="setup"]').onclick=()=>this.skirmishSetup(),r.querySelector('[data-a="again"]').onclick=()=>this.app.startMatch(this.buildSkirmish(),{kind:"skirmish"})}settings(t){let e=this.app.settings,i=(r,a)=>r.map(([o,l])=>`<option value="${o}"${String(a)===String(o)?" selected":""}>${l}</option>`).join(""),n=this.screen("settings-screen",`
      <div class="panel">
        <h2>Einstellungen</h2>
        <div class="opts col">
          <label>Grafik<select data-s="quality">${i([["auto","Automatisch"],["low","Niedrig (schwache Handys)"],["medium","Mittel"],["high","Hoch (Full HD+)"]],e.quality)}</select></label>
          <label>Effekte <input type="range" min="0" max="1" step="0.05" data-s="sfx" value="${e.sfx}"></label>
          <label>Musik <input type="range" min="0" max="1" step="0.05" data-s="music" value="${e.music}"></label>
          <label>Zielhilfe<select data-s="aimHelp">${i([["full","Voll: Flugbahn, Wind & Einschlag (empfohlen)"],["short","Kurz: nur Abwurfrichtung"],["off","Aus (wie anno dazumal)"]],e.aimHelp)}</select></label>
          <label>Rundenzeit (Feldzug)<select data-s="turnTime">${i([[45,"45 s"],[60,"60 s"],[90,"90 s"],[9999,"Unbegrenzt"]],e.turnTime)}</select></label>
          <label>Kamera-/Ziel-Empfindlichkeit <input type="range" min="0.4" max="2" step="0.1" data-s="camSens" value="${e.camSens}"></label>
          <label class="chk"><input type="checkbox" data-s="showFps"${e.showFps?" checked":""}> FPS anzeigen</label>
        </div>
        <p class="small">Grafik\xE4nderungen wirken ab dem n\xE4chsten Gefecht.</p>
        <div class="btns"><button class="btn primary" data-a="back">Fertig</button></div>
      </div>`);n.querySelectorAll("[data-s]").forEach(r=>{r.oninput=r.onchange=()=>{let a=r.dataset.s,o=r.type==="checkbox"?r.checked:r.value;["sfx","music","camSens","turnTime"].includes(a)&&(o=Number(o)),this.app.setSetting(a,o)}}),n.querySelector('[data-a="back"]').onclick=t}howto(t){let e=this.screen("howto-screen",`
      <div class="panel wide scroll">
        <h2>Wie geht's?</h2>
        <h3>Das Prinzip</h3>
        <p>Zwei bis vier Trupps Rindsviecher bekriegen sich auf einer Insel. Reihum is a Team dran. Pro Zug steuerst du <b>ein</b> Viech: gehen (so weit die Ausdauer reicht), hupfen, dann <b>ein Angriff</b>. Danach is der N\xE4chste dran. Wer zuletzt noch steht, gewinnt.</p>
        <h3>Steuerung am Handy &amp; Tablet</h3>
        <ul>
          <li>Joystick links unten: gehen und drehen. Wischen: Kamera drehen. Zwei Finger: Zoom.</li>
          <li>\u{1F3AF} <b>Zielen</b> \u2192 wischen oder Joystick f\xFCr Richtung und Winkel. \u2316 dreht zum n\xE4chsten Gegner.</li>
          <li>Das <b>Fadenkreuz</b> zeigt genau, wo der Schuss hingeht \u2013 rot hei\xDFt Treffer. Bei Granaten &amp; Co. zeigt der <b>Kreis</b> den Einschlag inklusive Wind; \u2316 setzt dazu eine Markierung am Kraftbalken.</li>
          <li>\u{1F525} <b>Antippen</b> feuert Wurfwaffen mit der eingestellten Kraft (der Kreis zeigt den Einschlag), <b>Halten</b> l\xE4dt die Kraft selbst auf.</li>
          <li>Luftschl\xE4ge &amp; Fallschirm: aufs Ziel tippen, nochmal tippen oder \u{1F525} = los.</li>
        </ul>
        <h3>Steuerung am Computer</h3>
        <ul>
          <li><b>W/S</b> gehen \xB7 <b>A/D</b> drehen \xB7 <b>Leertaste</b> hupfen \xB7 Maus ziehen = Kamera \xB7 Mausrad = Zoom</li>
          <li><b>F</b> zielen \xB7 <b>Q</b> Waffenkammer \xB7 <b>1\u20139</b> Waffe direkt \xB7 <b>Tab</b> Einheit wechseln (vor dem ersten Schritt)</li>
          <li>Beim Zielen: <b>A/D</b> + <b>W/S</b> oder Maus ziehen \xB7 <b>Shift</b> = fein \xB7 <b>Leertaste halten</b> = Kraft \xB7 <b>E</b> n\xE4chstes Ziel</li>
          <li><b>M</b> Karte \xB7 <b>X</b> Zug beenden \xB7 <b>P</b>/<b>Esc</b> Pause</li>
        </ul>
        <h3>Dienstgrade &amp; Bef\xF6rderung</h3>
        <p>Jeder f\xE4ngt als <b>Rekrut</b> an. Mit Punkten aus den Eins\xE4tzen wird bef\xF6rdert: ${ki.join(" \u2192 ")}. Bei der ersten Bef\xF6rderung w\xE4hlst du die Laufbahn:</p>
        <ul>${Object.values(Ln).map(i=>`<li>${i.icon} <b>${Nt(i.name)}</b> (${Nt(i.titles.join(" \u2192 "))}): ${Nt(i.desc)}</li>`).join("")}</ul>
        <p>Ab Wachtmeister geht's weiter zum <b>Held</b> (Leutnant) und zur <b>Legende</b> (Hauptmann) \u2013 mit dem Besten aus allen Laufbahnen und der ber\xFCchtigten Heiligen-Kuh-Bombe.</p>
        <h3>Tipps vom Spie\xDF</h3>
        <ul>
          <li>Der <b>Wind</b> (oben in der Mitte) treibt Panzerfaust und Granaten ab. Der Pfeil zeigt relativ zur Kamera.</li>
          <li>Wasser is t\xF6dlich. A g'scheite <b>Kopfnuss</b> am Ufer wirkt Wunder \u2013 Stiere sto\xDFen st\xE4rker.</li>
          <li>Kisten vom Himmel: \u{1F968} = Brettljause (Lebenspunkte), gr\xFCne Kiste = Munition. Manchmal is a Falle drin.</li>
          <li>Kuhfladen-Minen werden erst in der n\xE4chsten Runde scharf. Echte Kuhfladen nie.</li>
          <li>Krater ver\xE4ndern das Gel\xE4nde \u2013 nutz das!</li>
        </ul>
        <div class="btns"><button class="btn primary" data-a="back">Alles klar</button></div>
      </div>`);e.querySelector('[data-a="back"]').onclick=t}pause(t){let e=ci("div","overlay pause"),i=t.opts.mode==="campaign";e.innerHTML=`<div class="panel">
      <h2>Pause</h2>
      <div class="menu">
        <button class="btn primary" data-a="resume">Weiter</button>
        <button class="btn" data-a="settings">Einstellungen</button>
        <button class="btn" data-a="howto">Anleitung</button>
        <button class="btn" data-a="quit">${i?"R\xFCckzug zur Kaserne":"Gefecht abbrechen"}</button>
      </div>
      ${i?`<p class="small">R\xFCckzug z\xE4hlt ned als Niederlage \u2013 aber Punkte gibt's a kane.</p>`:""}
    </div>`,this.root.classList.remove("hidden"),this.root.appendChild(e);let n=()=>{e.remove(),this.app.resume()};e.querySelector('[data-a="resume"]').onclick=n,e.querySelector('[data-a="settings"]').onclick=()=>{e.remove(),this.settings(()=>{this.hide(),this.pause(t)})},e.querySelector('[data-a="howto"]').onclick=()=>{e.remove(),this.howto(()=>{this.hide(),this.pause(t)})},e.querySelector('[data-a="quit"]').onclick=()=>{e.remove(),this.app.quitMatch()}}};var ll=class{constructor(t){this.canvas=t,this.keys=new Set,this.joy={x:0,y:0,active:!1},this.pointers=new Map,this.listeners={},this.pinchDist=0,this.enabled=!0,window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="SELECT")||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Tab"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.emit("keydown",e.code,e),this.keys.add(e.code))}),window.addEventListener("keyup",e=>{this.keys.delete(e.code),this.emit("keyup",e.code,e)}),window.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("pointerdown",e=>this.onDown(e)),window.addEventListener("pointermove",e=>this.onMove(e)),window.addEventListener("pointerup",e=>this.onUp(e)),window.addEventListener("pointercancel",e=>this.onUp(e)),t.addEventListener("wheel",e=>{e.preventDefault(),this.emit("zoom",e.deltaY>0?1.1:.9)},{passive:!1}),t.addEventListener("contextmenu",e=>e.preventDefault())}on(t,e){(this.listeners[t]=this.listeners[t]||[]).push(e)}off(t){delete this.listeners[t]}emit(t,...e){(this.listeners[t]||[]).forEach(i=>i(...e))}onDown(t){if(this.canvas.setPointerCapture&&this.canvas.setPointerCapture(t.pointerId),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,t:performance.now(),button:t.button,moved:0}),this.pointers.size===2){let[e,i]=[...this.pointers.values()];this.pinchDist=Math.hypot(e.x-i.x,e.y-i.y)}this.emit("anypointer")}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;let i=t.clientX-e.x,n=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,e.moved+=Math.abs(i)+Math.abs(n),this.pointers.size===2){let[r,a]=[...this.pointers.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.pinchDist>0&&o>0&&this.emit("zoom",this.pinchDist/o),this.pinchDist=o;return}e.moved>6&&this.emit("drag",i,n,e.button,t.pointerType)}onUp(t){let e=this.pointers.get(t.pointerId);if(e){if(this.pointers.delete(t.pointerId),e.moved<10&&performance.now()-e.t<450&&this.pointers.size===0){let i=this.canvas.getBoundingClientRect(),n=(t.clientX-i.left)/i.width*2-1,r=-((t.clientY-i.top)/i.height)*2+1;this.emit("tap",n,r,t)}this.pointers.size<2&&(this.pinchDist=0)}}bindJoystick(t,e){let i=null,n=0,r=0,a=50,o=(c,h)=>{let u=c-n,d=h-r,f=Math.hypot(u,d);f>a&&(u=u/f*a,d=d/f*a),e.style.transform=`translate(${u}px, ${d}px)`;let p=u/a,x=-d/a;this.joy.x=Math.abs(p)<.12?0:p,this.joy.y=Math.abs(x)<.12?0:x};t.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),i=c.pointerId,t.setPointerCapture(c.pointerId);let h=t.getBoundingClientRect();n=h.left+h.width/2,r=h.top+h.height/2,a=h.width*.38,this.joy.active=!0,o(c.clientX,c.clientY)}),t.addEventListener("pointermove",c=>{c.pointerId===i&&(c.preventDefault(),o(c.clientX,c.clientY))});let l=c=>{c.pointerId===i&&(i=null,this.joy.x=0,this.joy.y=0,this.joy.active=!1,e.style.transform="translate(0px, 0px)")};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}axis(){let t=0,e=0,i=this.keys;return(i.has("KeyA")||i.has("ArrowLeft"))&&(t-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(t+=1),(i.has("KeyW")||i.has("ArrowUp"))&&(e+=1),(i.has("KeyS")||i.has("ArrowDown"))&&(e-=1),t+=this.joy.x,e+=this.joy.y,{x:zt(t,-1,1),y:zt(e,-1,1),fine:i.has("ShiftLeft")||i.has("ShiftRight")}}};var Wc="rindsviecher_settings",qc=class{constructor(){this.canvas=document.getElementById("c"),this.uiRoot=document.getElementById("ui"),this.params=new URLSearchParams(location.search),this.settings={...ad};try{Object.assign(this.settings,JSON.parse(localStorage.getItem(Wc)||"{}"))}catch{}if(!this.settings.v||this.settings.v<2){this.settings.aimHelp="full",this.settings.v=2;try{localStorage.setItem(Wc,JSON.stringify(this.settings))}catch{}}this.quality=this.resolveQuality(),this.renderScale=1,this.timeScale=Number(this.params.get("speed"))||1,this.createRenderer(),this.input=new ll(this.canvas),this.hud=new nl(this,this.uiRoot),this.menus=new ol(this,this.uiRoot),this.fpsEl=ci("div","fps hidden"),this.uiRoot.appendChild(this.fpsEl),this.fpsEl.classList.toggle("hidden",!this.settings.showFps),Ce.setVolumes(this.settings.sfx,this.settings.music),this.bindInput(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.game&&!this.game.demo&&!this.game.paused&&this.pause(),Ce.ctx&&(document.hidden?Ce.ctx.suspend():Ce.ctx.resume())});let t=()=>{Ce.unlock(),(!this.game||this.game.demo||this.game.phase==="gameover")&&Ce.startMusic()};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("touchend",t,{passive:!0}),window.addEventListener("click",t),window.addEventListener("keydown",t),this.resize(),this.last=performance.now(),this.frames=0,this.fpsT=0,this.perfT=0,this.perfFrames=0,requestAnimationFrame(n=>this.loop(n)),window.__rv=this;let e=this.params.get("autotest");e?this.startAutotest(e):(this.startDemo(),this.menus.title());let i=document.getElementById("loading");i&&i.classList.add("done")}resolveQuality(){let t=this.params.get("quality")||this.settings.quality;return t&&t!=="auto"?t:Nc()?"medium":"high"}createRenderer(){let t=new Oo({canvas:this.canvas,antialias:this.quality!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!!this.params.get("autotest")});t.toneMapping=vr,t.toneMappingExposure=1.05,t.outputColorSpace=oi,t.shadowMap.enabled=this.quality!=="low",t.shadowMap.type=An,this.renderer=t}aspect(){return this.width/this.height}pixelRatio(){let t=window.devicePixelRatio||1,e=this.quality==="low"?1.25:this.quality==="medium"?1.75:2;return Math.max(.5,Math.min(t,e)*this.renderScale)}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(this.pixelRatio()),this.renderer.setSize(this.width,this.height,!1),this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.game&&this.applyCamera(this.game),document.body.classList.toggle("portrait",this.height>this.width&&this.width<700)}applyCamera(t){t.cam.cam.aspect=this.aspect(),t.cam.cam.updateProjectionMatrix();let e=new Gt;this.renderer.getDrawingBufferSize(e),t.fx.setScale(e.y,t.cam.cam.fov)}bindInput(){let t=this.input;t.on("drag",(e,i,n,r)=>{this.game&&!this.game.demo&&this.game.onDrag(e,i,n,r)}),t.on("zoom",e=>{this.game&&!this.game.demo&&this.game.cam.zoomInput(e)}),t.on("tap",(e,i)=>{this.game&&!this.game.demo&&this.game.onTap(e,i)}),t.on("keydown",e=>{let i=this.game;if(!(!i||i.demo)){if(e==="KeyP"||e==="Escape"&&!["aim","target"].includes(i.phase)){if(i.paused){if(!this.menus.root.querySelector(".pause"))return;this.menus.hide(),this.resume()}else this.pause();return}i.paused||i.onKey(e,!0)}}),t.on("keyup",e=>{this.game&&!this.game.demo&&!this.game.paused&&this.game.onKey(e,!1)})}setSetting(t,e){this.settings[t]=e;try{localStorage.setItem(Wc,JSON.stringify(this.settings))}catch{}(t==="sfx"||t==="music")&&Ce.setVolumes(this.settings.sfx,this.settings.music),t==="showFps"&&this.fpsEl.classList.toggle("hidden",!e),t==="quality"&&(this.pendingQuality=!0)}applyQualityChange(){if(!this.pendingQuality)return;this.pendingQuality=!1;let t=this.resolveQuality();t!==this.quality&&(this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.renderer.shadowMap.type=An,this.renderScale=1,this.resize())}disposeGame(){this.game&&(this.game.dispose(),this.game=null,this.renderer.renderLists.dispose())}startDemo(){this.disposeGame();let t=new Ge(Date.now()&65535),e=t.shuffle([...Bi]).slice(0,3),i=new Set,n=e.map(l=>({faction:l.id,control:"cpu",difficulty:"normal",soldiers:[0,1,2].map(()=>Os(t,t.int(1,4),i))})),r=t.pick(Ns),a=this.quality==="high"?"medium":this.quality,o=this.quality;this.quality=a,this.game=new zs(this,{mode:"demo",theme:r,seed:t.int(1,99999),teams:n,rules:{wind:.4,crates:!0,maxRounds:12}}),this.quality=o,this.applyCamera(this.game),this.game.start()}onDemoEnd(){this.game&&this.game.demo&&this.startDemo()}startMatch(t,e){this.applyQualityChange(),this.menus.hide(),this.hud.hide();let i=document.getElementById("loading");i&&(i.querySelector(".ld-text").textContent="Gel\xE4nde wird planiert\u2026",i.classList.remove("done")),setTimeout(()=>{this.disposeGame(),this.matchMeta=e,this.game=new zs(this,t),this.applyCamera(this.game),this.game.start(),Ce.stopMusic(),i&&i.classList.add("done")},60)}onMatchEnd(t){if(this.hud.hide(),Ce.startMusic(),(this.matchMeta||{}).kind==="campaign"&&this.campaign){let i=Td(this.campaign,t);this.menus.campaignResult(i,t)}else this.menus.skirmishResult(t);this.onAutotestEnd&&this.onAutotestEnd(t)}pause(){!this.game||this.game.demo||this.game.paused||this.game.phase==="gameover"||(this.game.paused=!0,this.hud.closeWeaponMenu(),this.menus.pause(this.game))}resume(){this.game&&(this.game.paused=!1),this.applyQualityChange()}quitMatch(){let t=this.matchMeta||{};this.hud.hide(),this.startDemo(),Ce.startMusic(),t.kind==="campaign"&&this.campaign?this.menus.barracks():this.menus.title()}toggleFullscreen(){let t=document;if(t.fullscreenElement)t.exitFullscreen&&t.exitFullscreen();else{let e=t.documentElement.requestFullscreen?t.documentElement.requestFullscreen():null;e&&e.then&&e.then(()=>{screen.orientation&&screen.orientation.lock&&Nc()&&screen.orientation.lock("landscape").catch(()=>{})}).catch(()=>{})}}toastMenu(t){let e=ci("div","menu-toast",t);this.uiRoot.appendChild(e),setTimeout(()=>e.remove(),2800)}startAutotest(t){let e=new Ge(Number(this.params.get("seed"))||42),i=new Set,n=Number(this.params.get("teams"))||2,r=this.params.get("theme")||e.pick(Ns),a=this.params.get("human")==="1",o=[];for(let l=0;l<n;l++)o.push({faction:Bi[l*2].id,control:a&&l===0||this.params.get("human")==="all"?"human":"cpu",difficulty:"hard",soldiers:[0,1,2].map(()=>Os(e,e.int(0,5),i))});this.matchMeta={kind:"skirmish"},this.game=new zs(this,{mode:"skirmish",theme:r,seed:e.int(1,9999),teams:o,title:`Autotest ${r}`,rules:{wind:.5,crates:!0,mines:t==="mines"?10:0,risingWater:t==="water"?.5:0,fog:t==="fog",maxRounds:25,turnTime:60}}),this.applyCamera(this.game),this.game.start()}loop(t){requestAnimationFrame(r=>this.loop(r));let e=(t-this.last)/1e3;if(this.last=t,!(e>0))return;let i=e;e=Math.min(e,.05)*this.timeScale,this.frames++,this.fpsT+=i,this.fpsT>=1&&(this.fps=this.frames/this.fpsT,this.settings.showFps&&(this.fpsEl.textContent=`${Math.round(this.fps)} FPS \xB7 ${this.quality} \xB7 ${Math.round(this.pixelRatio()*100)/100}x`),this.frames=0,this.fpsT=0,this.game&&!document.hidden&&(this.perfT++,this.perfT>=3&&(this.perfT=0,this.fps<38&&this.renderScale>.55?(this.renderScale=Math.max(.55,this.renderScale-.12),this.resize()):this.fps>57&&this.renderScale<1&&(this.renderScale=Math.min(1,this.renderScale+.06),this.resize()))));let n=this.game;if(n){let r=this.timeScale>1?Math.ceil(this.timeScale):1;for(let a=0;a<r;a++)n.update(e/r);this.game===n&&!n.disposed&&this.renderer.render(n.scene,n.cam.cam)}}};function Ad(){try{let s=document.createElement("canvas");if(!!!(s.getContext("webgl2")||s.getContext("webgl")))throw new Error("kein WebGL");new qc}catch(s){console.error(s);let t=document.getElementById("loading");t&&(t.querySelector(".ld-text").textContent="Uje \u2013 dein Browser kann ka WebGL. Probier's bitte mit an aktuellen Chrome, Safari, Firefox oder Edge.")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ad):Ad();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
