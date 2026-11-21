(()=>{var Fu=0,Nc=1,ku=2;var Fn=1,Bu=2,Hs=3,kn=0,ei=1,nn=2,ns=0,Bn=1,$r=2,Uc=3,Fc=4,Ou=5;var ss=100,Hu=101,Gu=102,Vu=103,Wu=104,qu=200,Xu=201,$u=202,Yu=203,kc=204,Bc=205,Zu=206,Ku=207,Ju=208,ju=209,Qu=210,td=211,ed=212,id=213,nd=214,$a=0,Ya=1,Za=2,Ts=3,Ka=4,Ja=5,ja=6,Qa=7,Yr=0,sd=1,rd=2,sn=0,Oc=1,Hc=2,Gc=3,Zr=4,Vc=5,Wc=6,qc=7;var Xc=300,rs=301,Gs=302,Io=303,Lo=304,Cn=1e3,Ji=1001,to=1002,Je=1003,ad=1004;var Kr=1005;var Ve=1006,Do=1007;var Ri=1008;var _i=1009,$c=1010,Yc=1011,Vs=1012,zo=1013,Wi=1014,Fi=1015,qi=1016,No=1017,Uo=1018,as=1020,Zc=35902,Kc=35899,Jc=1021,jc=1022,fi=1023,pn=1026,yn=1027,Fo=1028,ko=1029,On=1030,Bo=1031;var Oo=1033,Jr=33776,jr=33777,Qr=33778,ta=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,qo=36196,Xo=37492,$o=37496,Yo=37488,Zo=37489,ea=37490,Ko=37491,Jo=37808,jo=37809,Qo=37810,tl=37811,el=37812,il=37813,nl=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,ia=36285,gl=36286;var mr=2300,eo=2301,qa=2302,wc=2303,Sc=2400,Ec=2401,Tc=2402;var od=3200;var Ws=0,ld=1,vn="",ui="srgb",gr="srgb-linear",xr="linear",fe="srgb";var Xa=7680;var cd=519,hd=512,ud=513,dd=514,Qc=515,fd=516,pd=517,th=518,eh=519,md=35044,Hn=35048;var ih="300 es",zi=2e3,As=2001;function Yf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gd(){let r=yr("canvas");return r.style.display="block",r}var eu={},Rs=null;function nh(...r){let t="THREE."+r.shift();Rs?Rs("log",t,...r):console.log(t,...r)}function xd(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ht(...r){r=xd(r);let t="THREE."+r.shift();if(Rs)Rs("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Xt(...r){r=xd(r);let t="THREE."+r.shift();if(Rs)Rs("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function dr(...r){let t=r.join(" ");t in eu||(eu[t]=!0,Ht(...r))}function yd(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var vd={[$a]:$a,[Za]:ja,[Ka]:Ka,[Ts]:Ja,[Ya]:Ya,[ja]:Za,[Qa]:Qa,[Ja]:Ts},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jl=Math.PI/180,io=180/Math.PI;function qs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function ne(r,t,e){return Math.max(t,Math.min(e,r))}function Kf(r,t){return(r%t+t)%t}function jl(r,t,e){return(1-e)*r+e*t}function _d(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jf(r,t){if(t.constructor===Float32Array)return r;let e=sh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function jf(r,t){if(t.constructor===Float32Array)return r;let e=sh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var Mt=hh,Ge=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],y=s[a+3];if(u!==y||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*y;m<0&&(d=-d,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,o=Math.sin(o*v)/w,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+y*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ql.copy(this).projectOnVector(t),this.sub(Ql)}reflect(t){return this.sub(Ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var D=uh,Ql=new D,iu=new Ge,dh=class dh{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],y=n[0],m=n[3],g=n[6],v=n[1],w=n[4],b=n[7],A=n[2],_=n[5],x=n[8];return s[0]=a*y+o*v+l*A,s[3]=a*m+o*w+l*_,s[6]=a*g+o*b+l*x,s[1]=c*y+h*v+u*A,s[4]=c*m+h*w+u*_,s[7]=c*g+h*b+u*x,s[2]=d*y+f*v+p*A,s[5]=d*m+f*w+p*_,s[8]=d*g+f*b+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=u*y,t[1]=(n*c-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(h*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tc.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var Yt=dh,tc=new Yt,nu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){let r={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===fe&&(n.r=fn(n.r),n.g=fn(n.g),n.b=fn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(n.r=Ss(n.r),n.g=Ss(n.g),n.b=Ss(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vn?xr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[gr]:{primaries:t,whitePoint:i,transfer:xr,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:nu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}var ae=Qf();function fn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ss(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var hs,no=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=yr("canvas")),hs.width=t.width,hs.height=t.height;let n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fn(e[i]/255)*255):e[i]=fn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tp=0,Cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ec(n[a].image)):s.push(ec(n[a]))}else s=ec(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function ec(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?no.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var ep=0,ic=new D,xi=class r extends ji{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Ji,n=Ji,s=Ve,a=Ri,o=fi,l=_i,c=r.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=qs(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cn:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cn:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=Xc;xi.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(f+1)/2,A=(g+1)/2,_=(h+d)/4,x=(u+y)/4,M=(p+m)/4;return w>b&&w>A?w<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(w),n=_/i,s=x/i):b>A?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=_/n,s=M/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=x/s,n=M/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var Ie=fh,so=class extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new xi({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Cs(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends so{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vr=class extends xi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends xi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Po=class Po{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,y,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,y=c*u;e[0]=d+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,y=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,np)}lookAt(t,e,i){let n=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),wn.crossVectors(i,wi),wn.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),wn.crossVectors(i,wi)),wn.normalize(),ya.crossVectors(wi,wn),n[0]=wn.x,n[4]=ya.x,n[8]=wi.x,n[1]=wn.y,n[5]=ya.y,n[9]=wi.y,n[2]=wn.z,n[6]=ya.z,n[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],y=i[6],m=i[10],g=i[14],v=i[3],w=i[7],b=i[11],A=i[15],_=n[0],x=n[4],M=n[8],C=n[12],T=n[1],I=n[5],z=n[9],F=n[13],R=n[2],k=n[6],G=n[10],O=n[14],tt=n[3],q=n[7],Z=n[11],et=n[15];return s[0]=a*_+o*T+l*R+c*tt,s[4]=a*x+o*I+l*k+c*q,s[8]=a*M+o*z+l*G+c*Z,s[12]=a*C+o*F+l*O+c*et,s[1]=h*_+u*T+d*R+f*tt,s[5]=h*x+u*I+d*k+f*q,s[9]=h*M+u*z+d*G+f*Z,s[13]=h*C+u*F+d*O+f*et,s[2]=p*_+y*T+m*R+g*tt,s[6]=p*x+y*I+m*k+g*q,s[10]=p*M+y*z+m*G+g*Z,s[14]=p*C+y*F+m*O+g*et,s[3]=v*_+w*T+b*R+A*tt,s[7]=v*x+w*I+b*k+A*q,s[11]=v*M+w*z+b*G+A*Z,s[15]=v*C+w*F+b*O+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],y=t[7],m=t[11],g=t[15],v=l*f-c*d,w=o*f-c*u,b=o*d-l*u,A=a*f-c*h,_=a*d-l*h,x=a*u-o*h;return e*(y*v-m*w+g*b)-i*(p*v-m*A+g*_)+n*(p*w-y*A+g*x)-s*(p*b-y*_+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],y=t[13],m=t[14],g=t[15],v=e*o-i*a,w=e*l-n*a,b=e*c-s*a,A=i*l-n*o,_=i*c-s*o,x=n*c-s*l,M=h*y-u*p,C=h*m-d*p,T=h*g-f*p,I=u*m-d*y,z=u*g-f*y,F=d*g-f*m,R=v*F-w*z+b*I+A*T-_*C+x*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return t[0]=(o*F-l*z+c*I)*k,t[1]=(n*z-i*F-s*I)*k,t[2]=(y*x-m*_+g*A)*k,t[3]=(d*_-u*x-f*A)*k,t[4]=(l*T-a*F-c*C)*k,t[5]=(e*F-n*T+s*C)*k,t[6]=(m*b-p*x-g*w)*k,t[7]=(h*x-d*b+f*w)*k,t[8]=(a*z-o*T+c*M)*k,t[9]=(i*T-e*z-s*M)*k,t[10]=(p*_-y*b+g*v)*k,t[11]=(u*b-h*_-f*v)*k,t[12]=(o*C-a*I-l*M)*k,t[13]=(e*I-i*C+n*M)*k,t[14]=(y*w-p*A-m*v)*k,t[15]=(h*A-u*w+d*v)*k,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,y=a*h,m=a*u,g=o*u,v=l*c,w=l*h,b=l*u,A=i.x,_=i.y,x=i.z;return n[0]=(1-(y+g))*A,n[1]=(f+b)*A,n[2]=(p-w)*A,n[3]=0,n[4]=(f-b)*_,n[5]=(1-(d+g))*_,n[6]=(m+v)*_,n[7]=0,n[8]=(p+w)*x,n[9]=(m-v)*x,n[10]=(1-(d+y))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=us.set(n[0],n[1],n[2]).length(),o=us.set(n[4],n[5],n[6]).length(),l=us.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Oi.copy(this);let c=1/a,h=1/o,u=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,e.setFromRotationMatrix(Oi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=zi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,y;if(l)p=s/(a-s),y=a*s/(a-s);else if(o===zi)p=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===As)p=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=zi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,y;if(l)p=1/(a-s),y=a/(a-s);else if(o===zi)p=-2/(a-s),y=-(a+s)/(a-s);else if(o===As)p=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Po.prototype.isMatrix4=!0;var Zt=Po,us=new D,Oi=new Zt,ip=new D(0,0,0),np=new D(1,1,1),wn=new D,ya=new D,wi=new D,ru=new Zt,au=new Ge,We=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};We.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,ou=new D,ds=new Ge,ln=new Zt,va=new D,sr=new D,rp=new D,ap=new Ge,lu=new D(1,0,0),cu=new D(0,1,0),hu=new D(0,0,1),uu={type:"added"},op={type:"removed"},fs={type:"childadded",child:null},nc={type:"childremoved",child:null},je=class r extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new D,e=new We,i=new Ge,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Yt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?va.copy(t):va.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(sr,va,this.up):ln.lookAt(va,sr,this.up),this.quaternion.setFromRotationMatrix(ln),n&&(ln.extractRotation(n.matrixWorld),ds.setFromRotationMatrix(ln),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),fs.child=t,this.dispatchEvent(fs),fs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};je.DEFAULT_UP=new D(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},_a={h:0,s:0,l:0};function sc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=Kf(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=sc(a,s,t+1/3),this.g=sc(a,s,t),this.b=sc(a,s,t-1/3)}return ae.colorSpaceToWorking(this,n),this}setStyle(t,e=ui){function i(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ui){let i=Md[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fn(t.r),this.g=fn(t.g),this.b=fn(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return ae.workingToColorSpace(ri.copy(this),t),Math.round(ne(ri.r*255,0,255))*65536+Math.round(ne(ri.g*255,0,255))*256+Math.round(ne(ri.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ri.copy(this),e);let i=ri.r,n=ri.g,s=ri.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=ui){ae.workingToColorSpace(ri.copy(this),t);let e=ri.r,i=ri.g,n=ri.b;return t!==ui?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(_a);let i=jl(Sn.h,_a.h,e),n=jl(Sn.s,_a.s,e),s=jl(Sn.l,_a.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new ut;ut.NAMES=Md;var Mr=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},br=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hi=new D,cn=new D,rc=new D,hn=new D,ps=new D,ms=new D,du=new D,ac=new D,oc=new D,lc=new D,cc=new Ie,hc=new Ie,uc=new Ie,Rn=class r{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Hi.subVectors(t,e),n.cross(Hi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Hi.subVectors(n,e),cn.subVectors(i,e),rc.subVectors(t,e);let a=Hi.dot(Hi),o=Hi.dot(cn),l=Hi.dot(rc),c=cn.dot(cn),h=cn.dot(rc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,i),uc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(cc,s.x),a.addScaledVector(hc,s.y),a.addScaledVector(uc,s.z),a}static isFrontFacing(t,e,i,n){return Hi.subVectors(i,e),cn.subVectors(t,e),Hi.cross(cn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Hi.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ps.subVectors(n,i),ms.subVectors(s,i),ac.subVectors(t,i);let l=ps.dot(ac),c=ms.dot(ac);if(l<=0&&c<=0)return e.copy(i);oc.subVectors(t,n);let h=ps.dot(oc),u=ms.dot(oc);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ps,a);lc.subVectors(t,s);let f=ps.dot(lc),p=ms.dot(lc);if(p>=0&&f<=p)return e.copy(s);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(ms,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return du.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(du,o);let g=1/(m+y+d);return a=y*g,o=d*g,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Gi):Gi.fromBufferAttribute(s,a),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),ba.subVectors(this.max,rr),gs.subVectors(t.a,rr),xs.subVectors(t.b,rr),ys.subVectors(t.c,rr),En.subVectors(xs,gs),Tn.subVectors(ys,xs),Jn.subVectors(gs,ys);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Jn.z,Jn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Jn.z,0,-Jn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Jn.y,Jn.x,0];return!dc(e,gs,xs,ys,ba)||(e=[1,0,0,0,1,0,0,0,1],!dc(e,gs,xs,ys,ba))?!1:(wa.crossVectors(En,Tn),e=[wa.x,wa.y,wa.z],dc(e,gs,xs,ys,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},un=[new D,new D,new D,new D,new D,new D,new D,new D],Gi=new D,Ma=new Qi,gs=new D,xs=new D,ys=new D,En=new D,Tn=new D,Jn=new D,rr=new D,ba=new D,wa=new D,jn=new D;function dc(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){jn.fromArray(r,s);let o=n.x*Math.abs(jn.x)+n.y*Math.abs(jn.y)+n.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var He=new D,Sa=new Mt,cp=0,be=class extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=md,this.updateRanges=[],this.gpuType=Fi,this.version=0,this._normalizationScale=t!==void 0?sh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):jf(t,this.array)}};var wr=class extends be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sr=class extends be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends be{constructor(t,e,i){super(new Float32Array(t),e,i)}},hp=new Qi,ar=new D,fc=new D,tn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ar,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(fc)),this.expandByPoint(ar.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},up=0,Di=new Zt,pc=new je,vs=new D,Si=new Qi,or=new Qi,Ke=new D,Ee=class r extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?Sr:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,e,i){return Di.makeTranslation(t,e,i),this.applyMatrix4(Di),this}scale(t,e,i){return Di.makeScale(t,e,i),this.applyMatrix4(Di),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Si.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Si.min,or.min),Si.expandByPoint(Ke),Ke.addVectors(Si.max,or.max),Si.expandByPoint(Ke)):(Si.expandByPoint(or.min),Si.expandByPoint(or.max))}Si.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ke.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),Ke.add(vs)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new be(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;let h=new D,u=new D,d=new D,f=new Mt,p=new Mt,y=new Mt,m=new D,g=new D;function v(C,T,I){c[C]=c[T]=c[I]=1,h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,I),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,T),y.fromBufferAttribute(s,I),u.sub(h),d.sub(h),p.sub(f),y.sub(f);let z=1/(p.x*y.y-y.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(z),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(z),o[C].add(m),o[T].add(m),o[I].add(m),l[C].add(g),l[T].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,T=w.length;C<T;++C){let I=w[C],z=I.start,F=I.count;for(let R=z,k=z+F;R<k;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let b=new D,A=new D,_=new D,x=new D;function M(C){_.fromBufferAttribute(n,C),x.copy(_);let T=o[C];b.copy(T),b.sub(_.multiplyScalar(_.dot(T))).normalize(),A.crossVectors(x,T);let z=A.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,z)}for(let C=0,T=i.count;C<T;++C)c[C]&&M(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new be(d,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mc=new D,dp=new D,fp=new Yt,Vi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=mc.subVectors(i,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||fp.getNormalMatrix(t),n=this.coplanarPoint(mc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pp=0,Ni=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Bn,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Bc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Vi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var dn=new D,gc=new D,Ea=new D,Ta=new D,Is=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){gc.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(gc);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Ea),o=Ta.dot(this.direction),l=-Ta.dot(Ea),c=Ta.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(gc).addScaledVector(Ea,d),f}intersectSphere(t,e){if(t.radius<0)return null;dn.subVectors(t.center,this.origin);let i=dn.dot(this.direction),n=dn.dot(dn)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,y=e.y-a.y,m=e.z-a.z,g=i.x-a.x,v=i.y-a.y,w=i.z-a.z,b=Math.abs(l),A=Math.abs(c),_=Math.abs(h),x,M,C,T,I,z,F,R,k,G,O,tt;if(b>=A&&b>=_?(C=l,z=u,k=p,tt=g,l>=0?(x=c,M=h,T=d,I=f,F=y,R=m,G=v,O=w):(x=h,M=c,T=f,I=d,F=m,R=y,G=w,O=v)):A>=_?(C=c,z=d,k=y,tt=v,c>=0?(x=h,M=l,T=f,I=u,F=m,R=p,G=w,O=g):(x=l,M=h,T=u,I=f,F=p,R=m,G=g,O=w)):(C=h,z=f,k=m,tt=w,h>=0?(x=l,M=c,T=u,I=d,F=p,R=y,G=g,O=v):(x=c,M=l,T=d,I=u,F=y,R=p,G=v,O=g)),C===0)return null;let q=x/C,Z=M/C,et=1/C,mt=T-q*z,$t=I-Z*z,$=F-q*k,gt=R-Z*k,wt=G-q*tt,Ft=O-Z*tt,xt=wt*gt-Ft*$,Vt=mt*Ft-$t*wt,Ae=$*$t-gt*mt;if(n){if(xt<0||Vt<0||Ae<0)return null}else if((xt<0||Vt<0||Ae<0)&&(xt>0||Vt>0||Ae>0))return null;let kt=xt+Vt+Ae;if(kt===0)return null;let le=et*(xt*z+Vt*k+Ae*tt);return(kt>0?le<0:le>0)?null:this.at(le/kt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ui=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fu=new Zt,Qn=new Is,Aa=new tn,pu=new D,Ra=new D,Ca=new D,Pa=new D,xc=new D,Ia=new D,mu=new D,La=new D,qt=class extends je{constructor(t=new Ee,e=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(xc.fromBufferAttribute(u,t),a?Ia.addScaledVector(xc,h):Ia.addScaledVector(xc.sub(e),h))}e.add(Ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Qn.copy(t.ray).recast(t.near),!(Aa.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Aa,pu)===null||Qn.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(s).invert(),Qn.copy(t.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,A=w;b<A;b+=3){let _=o.getX(b),x=o.getX(b+1),M=o.getX(b+2);n=Da(this,g,t,i,c,h,u,_,x,M),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let v=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);n=Da(this,a,t,i,c,h,u,v,w,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,A=w;b<A;b+=3){let _=b,x=b+1,M=b+2;n=Da(this,g,t,i,c,h,u,_,x,M),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let v=m,w=m+1,b=m+2;n=Da(this,a,t,i,c,h,u,v,w,b),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function mp(r,t,e,i,n,s,a,o){let l;if(t.side===ei?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===kn,o),l===null)return null;La.copy(o),La.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:r}}function Da(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Ra),r.getVertexPosition(l,Ca),r.getVertexPosition(c,Pa);let h=mp(r,t,e,i,Ra,Ca,Pa,mu);if(h){let u=new D;Rn.getBarycoord(mu,Ra,Ca,Pa,u),n&&(h.uv=Rn.getInterpolatedAttribute(n,o,l,c,u,new Mt)),s&&(h.uv1=Rn.getInterpolatedAttribute(s,o,l,c,u,new Mt)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Rn.getNormal(Ra,Ca,Pa,d.normal),h.face=d,h.barycoord=u}return h}var mn=class extends xi{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Je,h=Je,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ls=class extends be{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new Zt,gu=new Zt,za=[],xu=new Qi,gp=new Zt,lr=new qt,cr=new tn,gn=class extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,gp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,_s),xu.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,_s),cr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),t.ray.intersectsSphere(cr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,_s),gu.multiplyMatrices(i,_s),lr.matrixWorld=gu,lr.raycast(t,za);for(let a=0,o=za.length;a<o;a++){let l=za[a];l.instanceId=s,l.object=this,e.push(l)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new mn(new Float32Array(n*this.count),n,this.count,Fo,Fi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ts=new tn,xp=new Mt(.5,.5),Na=new D,Pn=class{constructor(t=new Vi,e=new Vi,i=new Vi,n=new Vi,s=new Vi,a=new Vi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],y=s[9],m=s[10],g=s[11],v=s[12],w=s[13],b=s[14],A=s[15];if(n[0].setComponents(c-a,f-h,g-p,A-v).normalize(),n[1].setComponents(c+a,f+h,g+p,A+v).normalize(),n[2].setComponents(c+o,f+u,g+y,A+w).normalize(),n[3].setComponents(c-o,f-u,g-y,A-w).normalize(),i)n[4].setComponents(l,d,m,b).normalize(),n[5].setComponents(c-l,f-d,g-m,A-b).normalize();else if(n[4].setComponents(c-l,f-d,g-m,A-b).normalize(),e===zi)n[5].setComponents(c+l,f+d,g+m,A+b).normalize();else if(e===As)n[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);let e=xp.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Na.x=n.normal.x>0?t.max.x:t.min.x,Na.y=n.normal.y>0?t.max.y:t.min.y,Na.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yu=new Zt,ao=class r{constructor(){this.coordinateSystem=zi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];yu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Pn),i[n].setFromProjectionMatrix(yu,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Pn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Ds=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},oo=new D,lo=new D,vu=new Zt,hr=new Is,Ua=new tn,yc=new D,_u=new D,Er=class extends je{constructor(t=new Ee,e=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)oo.fromBufferAttribute(e,n-1),lo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=oo.distanceTo(lo);t.setAttribute("lineDistance",new oe(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(n),Ua.radius+=s,t.ray.intersectsSphere(Ua)===!1)return;vu.copy(n).invert(),hr.copy(t.ray).applyMatrix4(vu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=h.getX(y),v=h.getX(y+1),w=Fa(this,t,hr,l,g,v,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=Fa(this,t,hr,l,y,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let y=f,m=p-1;y<m;y+=c){let g=Fa(this,t,hr,l,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=Fa(this,t,hr,l,p-1,f,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Fa(r,t,e,i,n,s,a){let o=r.geometry.attributes.position;if(oo.fromBufferAttribute(o,n),lo.fromBufferAttribute(o,s),e.distanceSqToSegment(oo,lo,yc,_u)>i)return;yc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(yc);if(!(c<t.near||c>t.far))return{distance:c,point:_u.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var zs=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mu=new Zt,Ac=new Is,ka=new tn,Ba=new D,es=class extends je{constructor(t=new Ee,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(n),ka.radius+=s,t.ray.intersectsSphere(ka)===!1)return;Mu.copy(n).invert(),Ac.copy(t.ray).applyMatrix4(Mu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,y=f;p<y;p++){let m=c.getX(p);Ba.fromBufferAttribute(u,m),bu(Ba,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,y=f;p<y;p++)Ba.fromBufferAttribute(u,p),bu(Ba,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function bu(r,t,e,i,n,s,a){let o=Ac.distanceSqToPoint(r);if(o<e){let l=new D;Ac.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tr=class extends xi{constructor(t=[],e=rs,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var xn=class extends xi{constructor(t,e,i=Wi,n,s,a,o=Je,l=Je,c,h=pn,u=1){if(h!==pn&&h!==yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ar=class extends xn{constructor(t,e=Wi,i=rs,n,s,a=Je,o=Je,l,c=pn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rr=class extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},st=class r extends Ee{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function p(y,m,g,v,w,b,A,_,x,M,C){let T=b/x,I=A/M,z=b/2,F=A/2,R=_/2,k=x+1,G=M+1,O=0,tt=0,q=new D;for(let Z=0;Z<G;Z++){let et=Z*I-F;for(let mt=0;mt<k;mt++){let $t=mt*T-z;q[y]=$t*v,q[m]=et*w,q[g]=R,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[g]=_>0?1:-1,h.push(q.x,q.y,q.z),u.push(mt/x),u.push(1-Z/M),O+=1}}for(let Z=0;Z<M;Z++)for(let et=0;et<x;et++){let mt=d+et+k*Z,$t=d+et+k*(Z+1),$=d+(et+1)+k*(Z+1),gt=d+(et+1)+k*Z;l.push(mt,$t,gt),l.push($t,$,gt),tt+=6}o.addGroup(f,tt,C),f+=tt,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},di=class r extends Ee{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+s,y=n+1,m=new D,g=new D;for(let v=0;v<=p;v++){let w=0,b=0,A=0,_=0;if(v<=i){let C=v/i,T=C*Math.PI/2;b=-h-t*Math.cos(T),A=t*Math.sin(T),_=-t*Math.cos(T),w=C*u}else if(v<=i+s){let C=(v-i)/s;b=-h+C*e,A=t,_=0,w=u+C*d}else{let C=(v-i-s)/i,T=C*Math.PI/2;b=h+t*Math.sin(T),A=t*Math.cos(T),_=t*Math.sin(T),w=u+d+C*u}let x=Math.max(0,Math.min(1,w/f)),M=0;v===0?M=.5/n:v===p&&(M=-.5/n);for(let C=0;C<=n;C++){let T=C/n,I=T*Math.PI*2,z=Math.sin(I),F=Math.cos(I);g.x=-A*F,g.y=b,g.z=A*z,o.push(g.x,g.y,g.z),m.set(-A*F,_,A*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+M,x)}if(v>0){let C=(v-1)*y;for(let T=0;T<n;T++){let I=C+T,z=C+T+1,F=v*y+T,R=v*y+T+1;a.push(I,z,F),a.push(z,R,F)}}}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},In=class r extends Ee{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new D,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},St=class r extends Ee{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,y=[],m=i/2,g=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function v(){let b=new D,A=new D,_=0,x=(e-t)/i;for(let M=0;M<=s;M++){let C=[],T=M/s,I=T*(e-t)+t;for(let z=0;z<=n;z++){let F=z/n,R=F*l+o,k=Math.sin(R),G=Math.cos(R);A.x=I*k,A.y=-T*i+m,A.z=I*G,u.push(A.x,A.y,A.z),b.set(k,x,G).normalize(),d.push(b.x,b.y,b.z),f.push(F,1-T),C.push(p++)}y.push(C)}for(let M=0;M<n;M++)for(let C=0;C<s;C++){let T=y[C][M],I=y[C+1][M],z=y[C+1][M+1],F=y[C][M+1];(t>0||C!==0)&&(h.push(T,I,F),_+=3),(e>0||C!==s-1)&&(h.push(I,z,F),_+=3)}c.addGroup(g,_,0),g+=_}function w(b){let A=p,_=new Mt,x=new D,M=0,C=b===!0?t:e,T=b===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),p++;let I=p;for(let z=0;z<=n;z++){let R=z/n*l+o,k=Math.cos(R),G=Math.sin(R);x.x=C*G,x.y=m*T,x.z=C*k,u.push(x.x,x.y,x.z),d.push(0,T,0),_.x=k*.5+.5,_.y=G*.5*T+.5,f.push(_.x,_.y),p++}for(let z=0;z<n;z++){let F=A+z,R=I+z;b===!0?h.push(R,R+1,F):h.push(R+1,R,F),M+=3}c.addGroup(g,M,b===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ge=class r extends St{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class r extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new D,b=new D,A=new D;for(let _=0;_<e.length;_+=3)f(e[_+0],w),f(e[_+1],b),f(e[_+2],A),l(w,b,A,v)}function l(v,w,b,A){let _=A+1,x=[];for(let M=0;M<=_;M++){x[M]=[];let C=v.clone().lerp(b,M/_),T=w.clone().lerp(b,M/_),I=_-M;for(let z=0;z<=I;z++)z===0&&M===_?x[M][z]=C:x[M][z]=C.clone().lerp(T,z/I)}for(let M=0;M<_;M++)for(let C=0;C<2*(_-M)-1;C++){let T=Math.floor(C/2);C%2===0?(d(x[M][T+1]),d(x[M+1][T]),d(x[M][T])):(d(x[M][T+1]),d(x[M+1][T+1]),d(x[M+1][T]))}}function c(v){let w=new D;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(v),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function h(){let v=new D;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];let b=m(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;a.push(b,1-A)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){let w=a[v+0],b=a[v+2],A=a[v+4],_=Math.max(w,b,A),x=Math.min(w,b,A);_>.9&&x<.1&&(w<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,w){let b=v*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function p(){let v=new D,w=new D,b=new D,A=new D,_=new Mt,x=new Mt,M=new Mt;for(let C=0,T=0;C<s.length;C+=9,T+=6){v.set(s[C+0],s[C+1],s[C+2]),w.set(s[C+3],s[C+4],s[C+5]),b.set(s[C+6],s[C+7],s[C+8]),_.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),A.copy(v).add(w).add(b).divideScalar(3);let I=m(A);y(_,T+0,v,I),y(x,T+2,w,I),y(M,T+4,b,I)}}function y(v,w,b,A){A<0&&v.x===1&&(a[w]=v.x-1),b.x===0&&b.z===0&&(a[w]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new Mt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new D,n=[],s=[],a=[],o=new D,l=new Zt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ne(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(ne(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ns=class extends Ti{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},co=class extends Ns{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var wu=new D,Su=new D,vc=new rh,_c=new rh,Mc=new rh,ho=class extends Ti{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Su.subVectors(n[0],n[1]).add(n[0]),c=Su);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(wu.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=wu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),vc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,y,m),_c.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,y,m),Mc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),_c.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Mc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(vc.calc(l),_c.calc(l),Mc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function yp(r,t){let e=1-r;return e*e*t}function vp(r,t){return 2*(1-r)*r*t}function _p(r,t){return r*r*t}function fr(r,t,e,i){return yp(r,t)+vp(r,e)+_p(r,i)}function Mp(r,t){let e=1-r;return e*e*e*t}function bp(r,t){let e=1-r;return 3*e*e*r*t}function wp(r,t){return 3*(1-r)*r*r*t}function Sp(r,t){return r*r*r*t}function pr(r,t,e,i,n){return Mp(r,t)+bp(r,e)+wp(r,i)+Sp(r,n)}var Pr=class extends Ti{constructor(t=new Mt,e=new Mt,i=new Mt,n=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Mt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(pr(t,n.x,s.x,a.x,o.x),pr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uo=class extends Ti{constructor(t=new D,e=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new D){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(pr(t,n.x,s.x,a.x,o.x),pr(t,n.y,s.y,a.y,o.y),pr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends Ti{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Ti{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends Ti{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(fr(t,n.x,s.x,a.x),fr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Ti{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(fr(t,n.x,s.x,a.x),fr(t,n.y,s.y,a.y),fr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Eu(o,l.x,c.x,h.x,u.x),Eu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new Mt().fromArray(n))}return this}},Tu=Object.freeze({__proto__:null,ArcCurve:co,CatmullRomCurve3:ho,CubicBezierCurve:Pr,CubicBezierCurve3:uo,EllipseCurve:Ns,LineCurve:Ir,LineCurve3:fo,QuadraticBezierCurve:Lr,QuadraticBezierCurve3:po,SplineCurve:Dr}),mo=class extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Tu[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},zr=class extends mo{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ir(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Lr(this.currentPoint.clone(),new Mt(t,e),new Mt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Pr(this.currentPoint.clone(),new Mt(t,e),new Mt(i,n),new Mt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Dr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new Ns(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Us=class extends zr{constructor(t){super(t),this.uuid=qs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new zr().fromJSON(n))}return this}};function Ep(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=bd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Pp(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,u=l;for(let d=e;d<n;d+=e){let f=r[d],p=r[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Nr(s,a,e,o,l,c,0),a}function bd(r,t,e,i,n){let s;if(n===Hp(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=Au(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Au(a/i|0,r[a],r[a+1],s);return s&&Fs(s,s.next)&&(Fr(s),s=s.next),s}function is(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(Fs(e,e.next)||ze(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Nr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Np(r,i,n,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Ap(r,i,n,s):Tp(r)){t.push(l.i,r.i,c.i),Fr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Rp(is(r),t),Nr(r,t,e,i,n,s,2)):a===2&&Cp(r,t,e,i,n,s):Nr(is(r),t,e,i,n,s,1);break}}}function Tp(r){let t=r.prev,e=r,i=r.next;if(ze(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,s,a),u=Math.min(o,l,c),d=Math.max(n,s,a),f=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ur(n,o,s,l,a,c,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ap(r,t,e,i){let n=r.prev,s=r,a=r.next;if(ze(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),y=Math.max(o,l,c),m=Math.max(h,u,d),g=Rc(f,p,t,e,i),v=Rc(y,m,t,e,i),w=r.prevZ,b=r.nextZ;for(;w&&w.z>=g&&b&&b.z<=v;){if(w.x>=f&&w.x<=y&&w.y>=p&&w.y<=m&&w!==n&&w!==a&&ur(o,h,l,u,c,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=y&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&ur(o,h,l,u,c,d,b.x,b.y)&&ze(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=y&&w.y>=p&&w.y<=m&&w!==n&&w!==a&&ur(o,h,l,u,c,d,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=y&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&ur(o,h,l,u,c,d,b.x,b.y)&&ze(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Rp(r,t){let e=r;do{let i=e.prev,n=e.next.next;!Fs(i,n)&&Sd(i,e,e.next,n)&&Ur(i,n)&&Ur(n,i)&&(t.push(i.i,e.i,n.i),Fr(e),Fr(e.next),e=r=n),e=e.next}while(e!==r);return is(e)}function Cp(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kp(a,o)){let l=Ed(a,o);a=is(a,a.next),l=is(l,l.next),Nr(a,t,e,i,n,s,0),Nr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Pp(r,t,e,i){let n=[];for(let s=0,a=t.length;s<a;s++){let o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=bd(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Fp(c))}n.sort(Ip);for(let s=0;s<n.length;s++)e=Lp(n[s],e);return e}function Ip(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Lp(r,t){let e=Dp(r,t);if(!e)return t;let i=Ed(e,r);return is(i,i.next),is(e,e.next)}function Dp(r,t){let e=t,i=r.x,n=r.y,s=-1/0,a;if(Fs(r,e))return e;do{if(Fs(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&wd(n<c?i:s,n,l,c,n<c?s:i,n,e.x,e.y)){let u=Math.abs(n-e.y)/(i-e.x);Ur(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&zp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function zp(r,t){return ze(r.prev,r,t.prev)<0&&ze(t.next,r,r.next)<0}function Np(r,t,e,i){let n=r;do n.z===0&&(n.z=Rc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Up(n)}function Up(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function Rc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Fp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function wd(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function ur(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&wd(r,t,e,i,n,s,a,o)}function kp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Bp(r,t)&&(Ur(r,t)&&Ur(t,r)&&Op(r,t)&&(ze(r.prev,r,t.prev)||ze(r,t.prev,t))||Fs(r,t)&&ze(r.prev,r,r.next)>0&&ze(t.prev,t,t.next)>0)}function ze(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Fs(r,t){return r.x===t.x&&r.y===t.y}function Sd(r,t,e,i){let n=Ha(ze(r,t,e)),s=Ha(ze(r,t,i)),a=Ha(ze(e,i,r)),o=Ha(ze(e,i,t));return!!(n!==s&&a!==o||n===0&&Oa(r,e,t)||s===0&&Oa(r,i,t)||a===0&&Oa(e,r,i)||o===0&&Oa(e,t,i))}function Oa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ha(r){return r>0?1:r<0?-1:0}function Bp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ur(r,t){return ze(r.prev,r,r.next)<0?ze(r,t,r.next)>=0&&ze(r,r.prev,t)>=0:ze(r,t,r.prev)<0||ze(r,r.next,t)<0}function Op(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Ed(r,t){let e=Cc(r.i,r.x,r.y),i=Cc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Au(r,t,e,i){let n=Cc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Fr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Cc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hp(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var Pc=class{static triangulate(t,e,i=2){return Ep(t,e,i)}},Es=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];Ru(t),Cu(i,t);let a=t.length;e.forEach(Ru);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Cu(i,e[l]);let o=Pc.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ru(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Cu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var en=class r extends Cr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var kr=class r extends Cr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ln=class r extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let w=0;w<c;w++){let b=w*u-s;p.push(b,-v,0),y.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let w=v+c*g,b=v+c*(g+1),A=v+1+c*(g+1),_=v+1+c*g;f.push(w,b,_),f.push(b,A,_)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var ks=class r extends Ee{constructor(t=new Us([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new oe(n,3)),this.setAttribute("normal",new oe(s,3)),this.setAttribute("uv",new oe(a,2));function c(h){let u=n.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;Es.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];Es.isClockWise(v)===!0&&(p[m]=v.reverse())}let y=Es.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){let v=f[m];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=y.length;m<g;m++){let v=y[m],w=v[0]+u,b=v[1]+u,A=v[2]+u;i.push(w,b,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Gp(e,t)}static fromJSON(t,e){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let a=e[t.shapes[n]];i.push(a)}return new r(i,t.curveSegments)}};function Gp(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){let n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}var bt=class r extends Ee{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let v=[],w=g/i,b=a+w*o,A=t*Math.cos(b),_=Math.sqrt(t*t-A*A),x=0;g===0&&a===0?x=.5/e:g===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let C=M/e,T=n+C*s;u.x=-_*Math.cos(T),u.y=A,u.z=_*Math.sin(T),p.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(C+x,1-w),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let w=h[g][v+1],b=h[g][v],A=h[g+1][v],_=h[g+1][v+1];(g!==0||a>0)&&f.push(w,b,_),(g!==i-1||l<Math.PI)&&f.push(b,A,_)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oi=class r extends Ee{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new D,f=new D,p=new D;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let g=0;g<=n;g++){let v=g/n*s;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/n),u.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=n;m++){let g=(n+1)*y+m-1,v=(n+1)*(y-1)+m-1,w=(n+1)*(y-1)+m,b=(n+1)*y+m;l.push(g,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function os(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Pu(n))n.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Pu(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function li(r){let t={};for(let e=0;e<r.length;e++){let i=os(r[e]);for(let n in i)t[n]=i[n]}return t}function Pu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Vp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ah(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Td={clone:os,merge:li},Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(n.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},go=class extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Br=class extends Ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Dn=class extends Ni{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Yr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var vi=class extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Yr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xo=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yo=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ms(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ga(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var zn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vo=class extends zn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:s=t,o=2*e-i;break;case Tc:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=t,l=2*i-e;break;case Tc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*y+.5*p,b=f*m-f*y;for(let A=0;A!==o;++A)s[A]=g*a[h+A]+v*a[c+A]+w*a[l+A]+b*a[u+A];return s}},_o=class extends zn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Mo=class extends zn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},bo=class extends zn{interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(n-e),y=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*y+a[l+m]*p;return s}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=f*d+p*2,v=u[g],w=u[g+1],b=t*d+p*2,A=h[b],_=h[b+1],x=$p(i,e,v,A,n);s[p]=Ad(x,y,w,_,m)}return s}};function Ad(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function Xp(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function $p(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){let o=Ad(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;let l=Xp(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ai=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Ga(t.settings)&&(i.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Ga(this.settings)&&(Iu(this.settings.inTangents,t),Iu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Ga(this.settings)&&(Lu(this.settings.inTangents,t),Lu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Zf(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===qa,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let y=e[u+p];if(y!==e[d+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Ga(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Iu(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Lu(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=eo;var Nn=class extends Ai{constructor(t,e,i){super(t,e,i)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=mr;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}};wo.prototype.ValueTypeName="color";var So=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}};So.prototype.ValueTypeName="number";var Eo=class extends zn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(s,0,a,c-o,a,c,l);return s}},Or=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Ai{constructor(t,e,i){super(t,e,i)}};Un.prototype.ValueTypeName="string";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=mr;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends Ai{constructor(t,e,i,n){super(t,e,i,n)}};To.prototype.ValueTypeName="vector";var Ao=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rd=new Ao,Ro=class{constructor(t){this.manager=t!==void 0?t:Rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hr=class extends Bs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bc=new Zt,Du=new D,zu=new D,Gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pn,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new D,Wa=new Ge,Ki=new D,Vr=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Wa,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Va,Wa,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},An=new D,Nu=new Mt,Uu=new Mt,ai=class extends Vr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,Uu),e.subVectors(Uu,Nu)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jl*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ic=class extends Gr{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}},Wr=class extends Bs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qr=class extends Vr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lc=class extends Gr{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bs=-90,ws=1,Os=class extends je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ai(bs,ws,t,e);n.layers=this.layers,this.add(n);let s=new ai(bs,ws,t,e);s.layers=this.layers,this.add(s);let a=new ai(bs,ws,t,e);a.layers=this.layers,this.add(a);let o=new ai(bs,ws,t,e);o.layers=this.layers,this.add(o);let l=new ai(bs,ws,t,e);l.layers=this.layers,this.add(l);let c=new ai(bs,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Co=class extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var oh="\\[\\]\\.:\\/",Yp=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",Zp="[^"+oh.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",lh),Jp=/(WCOD+)?/.source.replace("WCOD",Zp),jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),tm=new RegExp("^"+Kp+Jp+jp+Qp+"$"),em=["material","materials","bones","map"],Dc=class{constructor(t,e,i){let n=i||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ce=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(t){let e=tm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);em.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Dc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var ph=class ph{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};ph.prototype.isMatrix2=!0;var zc=ph;function ch(r,t,e,i){let n=im(i);switch(e){case Jc:return r*t;case Fo:return r*t/n.components*n.byteLength;case ko:return r*t/n.components*n.byteLength;case On:return r*t*2/n.components*n.byteLength;case Bo:return r*t*2/n.components*n.byteLength;case jc:return r*t*3/n.components*n.byteLength;case fi:return r*t*4/n.components*n.byteLength;case Oo:return r*t*4/n.components*n.byteLength;case Jr:case jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qr:case ta:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:case Wo:return Math.max(r,16)*Math.max(t,8)/4;case Ho:case Vo:return Math.max(r,8)*Math.max(t,8)/2;case qo:case Xo:case Yo:case Zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $o:case ea:case Ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ul:case dl:case fl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case pl:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ia:case gl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(r){switch(r){case _i:case $c:return{byteLength:1,components:1};case Vs:case Yc:case qi:return{byteLength:2,components:1};case No:case Uo:return{byteLength:2,components:4};case Wi:case zo:case Fi:return{byteLength:4,components:1};case Zc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Kd(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hm(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];r.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
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
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,l0=`uniform sampler2D dfgLUT;
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
}`,c0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
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
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform float backgroundBlurriness;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,xg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,vg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,Ug=`#define TOON
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
}`,Fg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:um,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:xm,aomap_pars_fragment:ym,batching_pars_vertex:vm,batching_vertex:_m,begin_vertex:Mm,beginnormal_vertex:bm,bsdfs:wm,iridescence_fragment:Sm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Dm,common:zm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Um,displacementmap_vertex:Fm,emissivemap_fragment:km,emissivemap_pars_fragment:Bm,colorspace_fragment:Om,colorspace_pars_fragment:Hm,envmap_fragment:Gm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Wm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i0,envmap_vertex:Xm,fog_vertex:$m,fog_pars_vertex:Ym,fog_fragment:Zm,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:t0,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:u0,lightprobes_pars_fragment:d0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:x0,map_pars_fragment:y0,map_particle_fragment:v0,map_particle_pars_fragment:_0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:b0,morphinstance_vertex:w0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:A0,normal_fragment_begin:R0,normal_fragment_maps:C0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:F0,opaque_fragment:k0,packing:B0,premultiplied_alpha_fragment:O0,project_vertex:H0,dithering_fragment:G0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:$0,shadowmap_vertex:Y0,shadowmask_pars_fragment:Z0,skinbase_vertex:K0,skinning_pars_vertex:J0,skinning_vertex:j0,skinnormal_vertex:Q0,specularmap_fragment:tg,specularmap_pars_fragment:eg,tonemapping_fragment:ig,tonemapping_pars_fragment:ng,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:fg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:xg,distance_vert:yg,distance_frag:vg,equirect_vert:_g,equirect_frag:Mg,linedashed_vert:bg,linedashed_frag:wg,meshbasic_vert:Sg,meshbasic_frag:Eg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:zg,meshphysical_frag:Ng,meshtoon_vert:Ug,meshtoon_frag:Fg,points_vert:kg,points_frag:Bg,shadow_vert:Og,shadow_frag:Hg,sprite_vert:Gg,sprite_frag:Vg},vt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},an={basic:{uniforms:li([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:li([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:li([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:li([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:li([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:li([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:li([vt.points,vt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:li([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:li([vt.common,vt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:li([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:li([vt.sprite,vt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:li([vt.common,vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:li([vt.lights,vt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};an.physical={uniforms:li([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var xl={r:0,b:0,g:0},Wg=new Zt,Jd=new Yt;Jd.set(-1,0,0,0,1,0,0,0,1);function qg(r,t,e,i,n,s){let a=new ut(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let b=v.backgroundBlurriness>0;w=t.get(w,b)}return w}function p(v){let w=!1,b=f(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(v,w){let b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new qt(new st(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:os(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,_,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=ae.getTransfer(b.colorSpace)!==fe,(h!==b||u!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new qt(new Ln(2,2),new yi({name:"BackgroundMaterial",uniforms:os(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(xl,ah(r)),e.buffers.color.setClear(xl.r,xl.g,xl.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:y,dispose:g}}function Xg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(I,z,F,R,k){let G=!1,O=u(I,R,F,z);s!==O&&(s=O,c(s.object)),G=f(I,R,F,k),G&&p(I,R,F,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(I,z,F,R),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function u(I,z,F,R){let k=R.wireframe===!0,G=i[z.id];G===void 0&&(G={},i[z.id]=G);let O=I.isInstancedMesh===!0?I.id:0,tt=G[O];tt===void 0&&(tt={},G[O]=tt);let q=tt[F.id];q===void 0&&(q={},tt[F.id]=q);let Z=q[k];return Z===void 0&&(Z=d(l()),q[k]=Z),Z}function d(I){let z=[],F=[],R=[];for(let k=0;k<e;k++)z[k]=0,F[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:R,object:I,attributes:{},index:null}}function f(I,z,F,R){let k=s.attributes,G=z.attributes,O=0,tt=F.getAttributes();for(let q in tt)if(tt[q].location>=0){let et=k[q],mt=G[q];if(mt===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(mt=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(mt=I.instanceColor)),et===void 0||et.attribute!==mt||mt&&et.data!==mt.data)return!0;O++}return s.attributesNum!==O||s.index!==R}function p(I,z,F,R){let k={},G=z.attributes,O=0,tt=F.getAttributes();for(let q in tt)if(tt[q].location>=0){let et=G[q];et===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let mt={};mt.attribute=et,et&&et.data&&(mt.data=et.data),k[q]=mt,O++}s.attributes=k,s.attributesNum=O,s.index=R}function y(){let I=s.newAttributes;for(let z=0,F=I.length;z<F;z++)I[z]=0}function m(I){g(I,0)}function g(I,z){let F=s.newAttributes,R=s.enabledAttributes,k=s.attributeDivisors;F[I]=1,R[I]===0&&(r.enableVertexAttribArray(I),R[I]=1),k[I]!==z&&(r.vertexAttribDivisor(I,z),k[I]=z)}function v(){let I=s.newAttributes,z=s.enabledAttributes;for(let F=0,R=z.length;F<R;F++)z[F]!==I[F]&&(r.disableVertexAttribArray(F),z[F]=0)}function w(I,z,F,R,k,G,O){O===!0?r.vertexAttribIPointer(I,z,F,k,G):r.vertexAttribPointer(I,z,F,R,k,G)}function b(I,z,F,R){y();let k=R.attributes,G=F.getAttributes(),O=z.defaultAttributeValues;for(let tt in G){let q=G[tt];if(q.location>=0){let Z=k[tt];if(Z===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let et=Z.normalized,mt=Z.itemSize,$t=t.get(Z);if($t===void 0)continue;let $=$t.buffer,gt=$t.type,wt=$t.bytesPerElement,Ft=gt===r.INT||gt===r.UNSIGNED_INT||Z.gpuType===zo;if(Z.isInterleavedBufferAttribute){let xt=Z.data,Vt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,Ae=Z.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let kt=0;kt<q.locationSize;kt++)g(q.location+kt,xt.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let kt=0;kt<q.locationSize;kt++)m(q.location+kt);r.bindBuffer(r.ARRAY_BUFFER,$);for(let kt=0;kt<q.locationSize;kt++)w(q.location+kt,mt/q.locationSize,gt,et,Vt*wt,(Ae+mt/q.locationSize*kt)*wt,Ft)}else{if(Z.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)g(q.location+xt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt);r.bindBuffer(r.ARRAY_BUFFER,$);for(let xt=0;xt<q.locationSize;xt++)w(q.location+xt,mt/q.locationSize,gt,et,mt*wt,mt/q.locationSize*xt*wt,Ft)}}else if(O!==void 0){let et=O[tt];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(q.location,et);break;case 3:r.vertexAttrib3fv(q.location,et);break;case 4:r.vertexAttrib4fv(q.location,et);break;default:r.vertexAttrib1fv(q.location,et)}}}}v()}function A(){C();for(let I in i){let z=i[I];for(let F in z){let R=z[F];for(let k in R){let G=R[k];for(let O in G)h(G[O].object),delete G[O];delete R[k]}}delete i[I]}}function _(I){if(i[I.id]===void 0)return;let z=i[I.id];for(let F in z){let R=z[F];for(let k in R){let G=R[k];for(let O in G)h(G[O].object),delete G[O];delete R[k]}}delete i[I.id]}function x(I){for(let z in i){let F=i[z];for(let R in F){let k=F[R];if(k[I.id]===void 0)continue;let G=k[I.id];for(let O in G)h(G[O].object),delete G[O];delete k[I.id]}}}function M(I){for(let z in i){let F=i[z],R=I.isInstancedMesh===!0?I.id:0,k=F[R];if(k!==void 0){for(let G in k){let O=k[G];for(let tt in O)h(O[tt].object),delete O[tt];delete k[G]}delete F[R],Object.keys(F).length===0&&delete i[z]}}}function C(){T(),a=!0,s!==n&&(s=n,c(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:_,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function $g(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Yg(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(x){return!(x!==fi&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==_i&&x!==Fi&&!M&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),_=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:_}}function Zg(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Vi,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,w=v*4,b=g.clippingState||null;l.value=b,b=h(p,d,w,f);for(let A=0;A!==w;++A)b[A]=e[A];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,b=f;w!==y;++w,b+=4)a.copy(u[w]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ra=class extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Tr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new st(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:ns});s.uniforms.tEquirect.value=e;let a=new qt(n,s),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ve),new Os(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Cd=256,Kg=3,Jg=20,jd=256,Qd=16,jg=3,Qg=new D,tx=new ut,vl=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Os(1,10,null),this._boxMesh=new qt(new st(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=Qg}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(tx));let m=new Os(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Cd,_d(t))}_fromTexture(t,e){t.mapping===rs||t.mapping===Gs?this._setSize(t.image.length===0?Cd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Pd(t,!1,!1),i=Math.log2(t)-Kg;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Pd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rs||t.mapping===Gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Id()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ex(),this._integrationMaterial=ix());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Qd);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-jg)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(jd*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=nx());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function Pd(r,t,e){return new ra(r,{minFilter:Ri,generateMipmaps:t,type:qi,colorSpace:gr,depthBuffer:e})}function aa(r,t,e){return new yi({name:r,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:ei,blending:ns,depthTest:!1,depthWrite:!1})}function ex(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jd}u

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
	`)}function ix(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qd}},`

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
	`)}function nx(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jg}
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
	`)}function Id(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ld(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sx(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Io||f===Lo)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new ra(p.height);return y.fromEquirectangularTexture(r,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Io||f===Lo,y=f===rs||f===Gs;if(p||y){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new vl(r)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new vl(r)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Io?d.mapping=rs:f===Lo&&(d.mapping=Gs),d}function l(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function rx(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&dr("WebGLRenderer: "+i+" extension not supported."),n}}}function ax(r,t,e,i){let n={},s=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);let y=s.get(p);y&&(t.remove(y),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,y){return n[y.id]!==void 0||(y.addEventListener("dispose",o),n[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)t.update(y[m],r.ARRAY_BUFFER)}function u(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=y!==null?y.array.length:m.array.length/3-1,w=m.count>=65535?Sr:wr,b=new w(Math.ceil(v/3)*6,1),A=b.array;if(y!==null){let x=y.array;g=y.version;for(let M=0,C=0;M<v;M+=3){let T=x[M+0],I=x[M+1],z=x[M+2];A[C++]=T,A[C++]=I,A[C++]=I,A[C++]=z,A[C++]=z,A[C++]=T}}else{g=m.version;for(let x=0,M=0;x<v;x+=3){let C=x+0,T=x+1,I=x+2;A[M++]=C,A[M++]=T,A[M++]=T,A[M++]=I,A[M++]=I,A[M++]=C}}b.version=g;let _=s.get(p);_&&t.remove(_),s.set(p,b)}function d(p){let y=s.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&u(p)}else u(p);return s.get(p)}function f(){for(let p in n){let y=n[p].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function ox(r,t,e){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(i,d,s,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lx(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function cx(r,t,e){let i=new WeakMap,n=new Ie;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let C=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),y===!0&&(w=3);let b=o.attributes.position.count*w,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let _=new Float32Array(b*A*4*u),x=new vr(_,b,A,u);x.type=Fi,x.needsUpdate=!0;let M=w*4;for(let T=0;T<u;T++){let I=m[T],z=g[T],F=v[T],R=b*A*4*T;for(let k=0;k<I.count;k++){let G=k*M;f===!0&&(n.fromBufferAttribute(I,k),_[R+G+0]=n.x,_[R+G+1]=n.y,_[R+G+2]=n.z,_[R+G+3]=0),p===!0&&(n.fromBufferAttribute(z,k),_[R+G+4]=n.x,_[R+G+5]=n.y,_[R+G+6]=n.z,_[R+G+7]=0),y===!0&&(n.fromBufferAttribute(F,k),_[R+G+8]=n.x,_[R+G+9]=n.y,_[R+G+10]=n.z,_[R+G+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:x,size:new Mt(b,A)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function hx(r,t,e,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ux={[Oc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[qc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function dx(r,t,e,i,n,s){let a=new Ei(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ee;h.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new oe([0,2,0,0,2,0],2));let u=new go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new qt(h,u),f=new qr(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,v=null,w=[],b=!1;this.setSize=function(A,_){a.setSize(A,_),o!==null&&o.setSize(A,_),l!==null&&l.setSize(A,_);for(let x=0;x<w.length;x++){let M=w[x];M.setSize&&M.setSize(A,_)}},this.setEffects=function(A){w=A,b=w.length>0&&w[0].isRenderPass===!0;let _=a.width,x=a.height;w.length>0&&o===null&&(o=new Ei(_,x,{type:qi,depthBuffer:!1,stencilBuffer:!1}),l=new Ei(_,x,{type:qi,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&w.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new xn(_,x),s===!0&&(c.format=yn,c.type=as)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<w.length;C++){let T=w[C];T.setSize&&T.setSize(_,x),M&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(A,_){if(m||A.toneMapping===sn&&w.length===0)return!1;if(v=_,_!==null){let x=_.width,M=_.height;(a.width!==x||a.height!==M)&&this.setSize(x,M)}return b===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=sn,!0},this.hasRenderPass=function(){return b},this.end=function(A,_){A.toneMapping=g,m=!0;let x=a,M=o;for(let C=0;C<w.length;C++){let T=w[C];T.enabled!==!1&&(T.render(A,M,x,_),T.needsSwap!==!1&&(x=M,M=M===o?l:o))}if(p!==A.outputColorSpace||y!==A.toneMapping){p=A.outputColorSpace,y=A.toneMapping,u.defines={},ae.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");let C=ux[y];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(v),A.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var tf=new xi,ef=new xn(1,1),nf=new Ar(1),sf=new vr,rf=new ro,af=new Tr,Dd=[],zd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function $s(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Dd[n];if(s===void 0&&(s=new Float32Array(n),Dd[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function qe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ml(r,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function fx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function px(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function mx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function gx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function xx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Fd.set(i),r.uniformMatrix2fv(this.addr,!1,Fd),Xe(e,i)}}function yx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Ud.set(i),r.uniformMatrix3fv(this.addr,!1,Ud),Xe(e,i)}}function vx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Nd.set(i),r.uniformMatrix4fv(this.addr,!1,Nd),Xe(e,i)}}function _x(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Mx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function bx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function wx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function Sx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ex(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function Tx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function Ax(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function bl(r){return r.version===0&&(r.compareFunction=eh,r.needsUpdate=!0),r}function Rx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=bl(ef):s=tf,e.setTexture2D(t||s,n)}function Cx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||rf,n)}function Px(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=bl(nf):s=af,e.setTextureCube(t||s,n)}function Ix(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||sf,n)}function Lx(r){switch(r){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return yx;case 35676:return vx;case 5124:case 35670:return _x;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return wx;case 5125:return Sx;case 36294:return Ex;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Ix}}function Dx(r,t){r.uniform1fv(this.addr,t)}function zx(r,t){let e=$s(t,this.size,2);r.uniform2fv(this.addr,e)}function Nx(r,t){let e=$s(t,this.size,3);r.uniform3fv(this.addr,e)}function Ux(r,t){let e=$s(t,this.size,4);r.uniform4fv(this.addr,e)}function Fx(r,t){let e=$s(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function kx(r,t){let e=$s(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Bx(r,t){let e=$s(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ox(r,t){r.uniform1iv(this.addr,t)}function Hx(r,t){r.uniform2iv(this.addr,t)}function Gx(r,t){r.uniform3iv(this.addr,t)}function Vx(r,t){r.uniform4iv(this.addr,t)}function Wx(r,t){r.uniform1uiv(this.addr,t)}function qx(r,t){r.uniform2uiv(this.addr,t)}function Xx(r,t){r.uniform3uiv(this.addr,t)}function $x(r,t){r.uniform4uiv(this.addr,t)}function Yx(r,t,e){let i=this.cache,n=t.length,s=Ml(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=bl(ef):a=tf;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function Zx(r,t,e){let i=this.cache,n=t.length,s=Ml(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||rf,s[a])}function Kx(r,t,e){let i=this.cache,n=t.length,s=Ml(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=bl(nf):a=af;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function Jx(r,t,e){let i=this.cache,n=t.length,s=Ml(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Xe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||sf,s[a])}function jx(r){switch(r){case 5126:return Dx;case 35664:return zx;case 35665:return Nx;case 35666:return Ux;case 35674:return Fx;case 35675:return kx;case 35676:return Bx;case 5124:case 35670:return Ox;case 35667:case 35671:return Hx;case 35668:case 35672:return Gx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return qx;case 36295:return Xx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Jx}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lx(e.type)}},yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function kd(r,t){r.seq.push(t),r.map[t.id]=t}function Qx(r,t,e){let i=r.name,n=i.length;for(mh.lastIndex=0;;){let s=mh.exec(i),a=mh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){kd(e,c===void 0?new xh(o,r,t):new yh(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new vh(o),kd(e,u)),e=u}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Qx(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Bd(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var ty=37297,ey=0;function iy(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Od=new Yt;function ny(r){ae._getMatrix(Od,ae.workingColorSpace,r);let t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case xr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Hd(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+iy(r.getShaderSource(t),o)}else return s}function sy(r,t){let e=ny(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ry={[Oc]:"Linear",[Hc]:"Reinhard",[Gc]:"Cineon",[Zr]:"ACESFilmic",[Wc]:"AgX",[qc]:"Neutral",[Vc]:"Custom"};function ay(r,t){let e=ry[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yl=new D;function oy(){ae.getLuminanceCoefficients(yl);let r=yl.x.toFixed(4),t=yl.y.toFixed(4),e=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function cy(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hy(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function sa(r){return r!==""}function Gd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(r){return r.replace(uy,dy)}function dy(r,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return _h(e)}var fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(r){return r.replace(fy,py)}function py(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function qd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var my={[Fn]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function gy(r){return my[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xy={[Gs]:"ENVMAP_MODE_REFRACTION"};function yy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vy={[Yr]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[rd]:"ENVMAP_BLENDING_ADD"};function _y(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vy[r.combine]||"ENVMAP_BLENDING_NONE"}function My(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=gy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=yy(e),u=_y(e),d=ly(e),f=cy(s),p=n.createProgram(),y,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(sa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(y=[qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sn?"#define TONE_MAPPING":"",e.toneMapping!==sn?ie.tonemapping_pars_fragment:"",e.toneMapping!==sn?ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,sy("linearToOutputTexel",e.outputColorSpace),oy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),a=_h(a),a=Gd(a,e),a=Vd(a,e),o=_h(o),o=Gd(o,e),o=Vd(o,e),a=Wd(a),o=Wd(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+y+a,w=g+m+o,b=Bd(n,n.VERTEX_SHADER,v),A=Bd(n,n.FRAGMENT_SHADER,w);n.attachShader(p,b),n.attachShader(p,A),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function _(T){if(r.debug.checkShaderErrors){let I=n.getProgramInfoLog(p)||"",z=n.getShaderInfoLog(b)||"",F=n.getShaderInfoLog(A)||"",R=I.trim(),k=z.trim(),G=F.trim(),O=!0,tt=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,b,A);else{let q=Hd(n,b,"vertex"),Z=Hd(n,A,"fragment");Xt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+q+`
`+Z)}else R!==""?Ht("WebGLProgram: Program Info Log:",R):(k===""||G==="")&&(tt=!1);tt&&(T.diagnostics={runnable:O,programLog:R,vertexShader:{log:k,prefix:y},fragmentShader:{log:G,prefix:m}})}n.deleteShader(b),n.deleteShader(A),x=new Xs(n,p),M=hy(n,p)}let x;this.getUniforms=function(){return x===void 0&&_(this),x};let M;this.getAttributes=function(){return M===void 0&&_(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(p,ty)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ey++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}var by=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new bh(t),e.set(t,i)),i}},bh=class{constructor(t){this.id=by++,this.code=t,this.usedTimes=0}};function wy(r){return r===On||r===ea||r===ia}function Sy(r,t,e,i,n,s){let a=new _r,o=new Mh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,C,T,I,z){let F=T.fog,R=I.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||k,G),tt=d[x.type],q=i.precision;x.precision!==null&&(q=i.getMaxPrecision(x.precision),q!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let Z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,et=Z!==void 0?Z.length:0,mt=0;R.morphAttributes.position!==void 0&&(mt=1),R.morphAttributes.normal!==void 0&&(mt=2),R.morphAttributes.color!==void 0&&(mt=3);let $t,$,gt,wt;if(tt){let yt=an[tt];$t=yt.vertexShader,$=yt.fragmentShader}else{$t=x.vertexShader,$=x.fragmentShader;let yt=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,yt,me),gt=yt.id,wt=me.id}let Ft=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Vt=I.isInstancedMesh===!0,Ae=I.isBatchedMesh===!0,kt=!!x.map,le=!!x.matcap,he=!!O,jt=he&&O.isPMREMTexture===!0,Be=!!x.aoMap,Le=!!x.lightMap,$e=!!x.bumpMap&&x.wireframe===!1,ye=!!x.normalMap,Li=!!x.displacementMap,Fe=!!x.emissiveMap,Nt=!!x.metalnessMap,pe=!!x.roughnessMap,Ue=x.anisotropy>0,B=x.clearcoat>0,bi=x.diffuseRoughness>0,de=x.dispersion>0,_e=x.retroreflectivity>0,at=x.iridescence>0,Re=x.sheen>0,Dt=x.transmission>0,Wt=Ue&&!!x.anisotropyMap,P=B&&!!x.clearcoatMap,S=B&&!!x.clearcoatNormalMap,V=B&&!!x.clearcoatRoughnessMap,it=bi&&!!x.diffuseRoughnessMap,Q=at&&!!x.iridescenceMap,ot=at&&!!x.iridescenceThicknessMap,ft=Re&&!!x.sheenColorMap,K=Re&&!!x.sheenRoughnessMap,J=!!x.specularMap,ct=!!x.specularColorMap,N=!!x.specularIntensityMap,j=Dt&&!!x.transmissionMap,Y=Dt&&!!x.thicknessMap,ht=!!x.gradientMap,rt=!!x.alphaMap,lt=x.alphaTest>0,zt=!!x.alphaHash,ee=!!x.extensions,nt=sn;x.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(nt=r.toneMapping);let Bt=jt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Qt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:$t,fragmentShader:$,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:wt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:Ae,batchingColor:Ae&&I._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&I.instanceColor!==null,instancingMorph:Vt&&I.morphTexture!==null,outputColorSpace:Ft===null?r.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:le,envMap:he,envMapMode:he&&O.mapping,envMapPMREM:jt,envMapMaxLod:jt?Bt.length-1:null,envMapSize:jt?Bt[0].width:null,aoMap:Be,lightMap:Le,bumpMap:$e,normalMap:ye,displacementMap:Li,emissiveMap:Fe,normalMapObjectSpace:ye&&x.normalMapType===ld,normalMapTangentSpace:ye&&x.normalMapType===Ws,packedNormalMap:ye&&x.normalMapType===Ws&&wy(x.normalMap.format),metalnessMap:Nt,roughnessMap:pe,anisotropy:Ue,anisotropyMap:Wt,clearcoat:B,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:V,diffuseRoughness:bi,diffuseRoughnessMap:it,dispersion:de,retroreflection:_e,iridescence:at,iridescenceMap:Q,iridescenceThicknessMap:ot,sheen:Re,sheenColorMap:ft,sheenRoughnessMap:K,specularMap:J,specularColorMap:ct,specularIntensityMap:N,transmission:Dt,transmissionMap:j,thicknessMap:Y,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Bn&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:zt,combine:x.combine,mapUv:kt&&f(x.map.channel),aoMapUv:Be&&f(x.aoMap.channel),lightMapUv:Le&&f(x.lightMap.channel),bumpMapUv:$e&&f(x.bumpMap.channel),normalMapUv:ye&&f(x.normalMap.channel),displacementMapUv:Li&&f(x.displacementMap.channel),emissiveMapUv:Fe&&f(x.emissiveMap.channel),metalnessMapUv:Nt&&f(x.metalnessMap.channel),roughnessMapUv:pe&&f(x.roughnessMap.channel),anisotropyMapUv:Wt&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:ct&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:Y&&f(x.thicknessMap.channel),alphaMapUv:rt&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ye||Ue),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(kt||rt),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:mt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.filter(yt=>yt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===ei,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||Ae)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function y(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(M,x),g(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let M=d[x.type],C;if(M){let T=an[M];C=Td.clone(T.uniforms)}else C=x.uniforms;return C}function w(x,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new My(r,M,x,n),c.push(C),h.set(M,C)),C}function b(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function _(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:_}}function Ey(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Ty(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Xd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $d(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,y,m,g){let v=r[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:g},r[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=a(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=g),t++,v}function l(d,f,p,y,m,g,v){v.reversedDepth===!0&&(m=-m);let w=o(d,f,p,y,m,g);p.transmission>0?i.push(w):p.transparent===!0?n.push(w):e.push(w)}function c(d,f,p,y,m,g){let v=o(d,f,p,y,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(d,f){e.length>1&&e.sort(d||Ty),i.length>1&&i.sort(f||Xd),n.length>1&&n.sort(f||Xd)}function u(){for(let d=t,f=r.length;d<f;d++){let p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function Ay(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new $d,r.set(i,[a])):n>=s.length?(a=new $d,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ry(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new ut};break;case"SpotLight":e={position:new D,direction:new D,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Cy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Py=0;function Iy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ly(r){let t=new Ry,e=Cy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,s=new Zt,a=new Zt;function o(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,v=0,w=0,b=0,A=0,_=0,x=0,M=0,C=0,T=0;c.sort(Iy);for(let z=0,F=c.length;z<F;z++){let R=c[z],k=R.color,G=R.intensity,O=R.distance,tt=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===On?tt=R.shadow.map.texture:tt=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=k.r*G,u+=k.g*G,d+=k.b*G;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],G);T++}else if(R.isSunLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,et=e.get(R);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[p]=et,i.sunShadowMap[p]=tt;let mt=Z.getViewportCount();for(let $t=0;$t<mt;$t++)i.sunShadowMatrix[y+$t]=Z.getMatrix($t),i.sunShadowCascade[y+$t]=Z._cascadeData[$t];y+=mt,p++}i.sun[f]=q,f++}else if(R.isDirectionalLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,et=e.get(R);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=q,m++}else if(R.isSpotLight){let q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(k).multiplyScalar(G),q.distance=O,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[v]=q;let Z=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,Z.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[v]=Z.matrix,R.castShadow){let et=e.get(R);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,i.spotShadow[v]=et,i.spotShadowMap[v]=tt,x++}v++}else if(R.isRectAreaLight){let q=t.get(R);q.color.copy(k).multiplyScalar(G),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[w]=q,w++}else if(R.isPointLight){let q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let Z=R.shadow,et=e.get(R);et.shadowIntensity=Z.intensity,et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,et.shadowCameraNear=Z.camera.near,et.shadowCameraFar=Z.camera.far,i.pointShadow[g]=et,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=R.shadow.matrix,_++}i.point[g]=q,g++}else if(R.isHemisphereLight){let q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(G),q.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[b]=q,b++}}w>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==w||I.hemiLength!==b||I.numSunShadows!==p||I.numDirectionalShadows!==A||I.numPointShadows!==_||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==T)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=g,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=w,I.hemiLength=b,I.numSunShadows=p,I.numDirectionalShadows=A,I.numPointShadows=_,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=T,i.version=Py++)}function l(c,h){let u=0,d=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let b=c[v];if(b.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(g),u++}else if(b.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(g),d++}else if(b.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Yd(r){let t=new Ly(r),e=[],i=[],n=[];function s(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dy(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Yd(r),t.set(n,[o])):s>=a.length?(o=new Yd(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
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
}`,Uy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Fy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Zd=new Zt,na=new D,gh=new D;function ky(r,t,e){let i=new Pn,n=new Mt,s=new Mt,a=new Ie,o=new xo,l=new yo,c={},h=e.maxTextureSize,u={[kn]:ei,[ei]:kn,[nn]:nn},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:zy,fragmentShader:Ny}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fn;let g=this.type;this.render=function(_,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;this.type===Bu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fn);let C=r.getRenderTarget(),T=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),z=r.state;z.setBlending(ns),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=g!==this.type;F&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=_.length;R<k;R++){let G=_[R],O=G.shadow;if(O===void 0){Ht("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let tt=O.getFrameExtents();n.multiply(tt),s.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/tt.x),n.x=s.x*tt.x,O.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/tt.y),n.y=s.y*tt.y,O.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=q,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Hs){if(G.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ei(n.x,n.y,{format:On,type:qi,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new xn(n.x,n.y,Fi),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=pn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Je,O.map.depthTexture.magFilter=Je}else G.isPointLight?(O.map=new ra(n.x),O.map.depthTexture=new Ar(n.x,Wi)):(O.map=new Ei(n.x,n.y),O.map.depthTexture=new xn(n.x,n.y,Wi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=pn,this.type===Fn?(O.map.depthTexture.compareFunction=q?th:Qc,O.map.depthTexture.minFilter=Ve,O.map.depthTexture.magFilter=Ve):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Je,O.map.depthTexture.magFilter=Je);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let Z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,M);let et=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let mt=0;mt<Z;mt++){let $t=O.getCamera(mt);if(G.isPointLight){let $=O.camera,gt=O.matrix,wt=G.distance||$.far;wt!==$.far&&($.far=wt,$.updateProjectionMatrix()),na.setFromMatrixPosition(G.matrixWorld),$.position.copy(na),gh.copy($.position),gh.add(Uy[mt]),$.up.copy(Fy[mt]),$.lookAt(gh),$.updateMatrixWorld(),gt.makeTranslation(-na.x,-na.y,-na.z),Zd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Zd,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,mt),r.clear();else{mt===0&&(r.setRenderTarget(O.map),r.clear());let $=O.getViewport(mt);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),z.viewport(a)}i=O.getFrustum(mt),b(x,M,$t,G,et,this.type)}O.isPointLightShadow!==!0&&this.type===Hs&&v(O,M),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(C,T,I)};function v(_,x){let M=t.update(y);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null?_.mapPass=new Ei(n.x,n.y,{format:On,type:qi}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),d.uniforms.shadow_pass.value=_.map.depthTexture,d.uniforms.resolution.value.set(_.map.width,_.map.height),d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(x,null,M,d,y,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value.set(_.map.width,_.map.height),f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(x,null,M,f,y,null)}function w(_,x,M,C){let T=null,I=M.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(I!==void 0)T=I;else if(T=M.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=T.uuid,F=x.uuid,R=c[z];R===void 0&&(R={},c[z]=R);let k=R[F];k===void 0&&(k=T.clone(),R[F]=k,x.addEventListener("dispose",A)),T=k}if(T.visible=x.visible,T.wireframe=x.wireframe,C===Hs?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:u[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,T.map=x.map,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let z=r.properties.get(T);z.light=M}return T}function b(_,x,M,C,T,I){if(_.visible===!1)return;if(_.layers.test(T)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&I===Hs)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,_.matrixWorld);let R=t.update(_),k=_.material;if(Array.isArray(k)){let G=R.groups;for(let O=0,tt=G.length;O<tt;O++){let q=G[O],Z=k[q.materialIndex];if(Z&&Z.visible){let et=w(_,Z,C,I);_.onBeforeShadow(r,_,x,M,R,et,q),r.renderBufferDirect(M,null,R,et,_,q),_.onAfterShadow(r,_,x,M,R,et,q)}}}else if(k.visible){let G=w(_,k,C,I);_.onBeforeShadow(r,_,x,M,R,G,null),r.renderBufferDirect(M,null,R,G,_,null),_.onAfterShadow(r,_,x,M,R,G,null)}}let F=_.children;for(let R=0,k=F.length;R<k;R++)b(F[R],x,M,C,T,I)}function A(_){_.target.removeEventListener("dispose",A);for(let M in c){let C=c[M],T=_.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function By(r,t){function e(){let N=!1,j=new Ie,Y=null,ht=new Ie(0,0,0,0);return{setMask:function(rt){Y!==rt&&!N&&(r.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){N=rt},setClear:function(rt,lt,zt,ee,nt){nt===!0&&(rt*=ee,lt*=ee,zt*=ee),j.set(rt,lt,zt,ee),ht.equals(j)===!1&&(r.clearColor(rt,lt,zt,ee),ht.copy(j))},reset:function(){N=!1,Y=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,j=!1,Y=null,ht=null,rt=null;return{setReversed:function(lt){if(j!==lt){let zt=t.get("EXT_clip_control");lt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),j=lt;let ee=rt;rt=null,this.setClear(ee)}},getReversed:function(){return j},setTest:function(lt){lt?xt(r.DEPTH_TEST):Vt(r.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!N&&(r.depthMask(lt),Y=lt)},setFunc:function(lt){if(j&&(lt=vd[lt]),ht!==lt){switch(lt){case $a:r.depthFunc(r.NEVER);break;case Ya:r.depthFunc(r.ALWAYS);break;case Za:r.depthFunc(r.LESS);break;case Ts:r.depthFunc(r.LEQUAL);break;case Ka:r.depthFunc(r.EQUAL);break;case Ja:r.depthFunc(r.GEQUAL);break;case ja:r.depthFunc(r.GREATER);break;case Qa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ht=lt}},setLocked:function(lt){N=lt},setClear:function(lt){rt!==lt&&(rt=lt,j&&(lt=1-lt),r.clearDepth(lt))},reset:function(){N=!1,Y=null,ht=null,rt=null,j=!1}}}function n(){let N=!1,j=null,Y=null,ht=null,rt=null,lt=null,zt=null,ee=null,nt=null;return{setTest:function(Bt){N||(Bt?xt(r.STENCIL_TEST):Vt(r.STENCIL_TEST))},setMask:function(Bt){j!==Bt&&!N&&(r.stencilMask(Bt),j=Bt)},setFunc:function(Bt,Qt,yt){(Y!==Bt||ht!==Qt||rt!==yt)&&(r.stencilFunc(Bt,Qt,yt),Y=Bt,ht=Qt,rt=yt)},setOp:function(Bt,Qt,yt){(lt!==Bt||zt!==Qt||ee!==yt)&&(r.stencilOp(Bt,Qt,yt),lt=Bt,zt=Qt,ee=yt)},setLocked:function(Bt){N=Bt},setClear:function(Bt){nt!==Bt&&(r.clearStencil(Bt),nt=Bt)},reset:function(){N=!1,j=null,Y=null,ht=null,rt=null,lt=null,zt=null,ee=null,nt=null}}}let s=new e,a=new i,o=new n,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,v=null,w=null,b=null,A=null,_=null,x=null,M=new ut(0,0,0),C=0,T=!1,I=null,z=null,F=null,R=null,k=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,tt=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=tt>=2);let Z=null,et={},mt=r.getParameter(r.SCISSOR_BOX),$t=r.getParameter(r.VIEWPORT),$=new Ie().fromArray(mt),gt=new Ie().fromArray($t);function wt(N,j,Y,ht){let rt=new Uint8Array(4),lt=r.createTexture();r.bindTexture(N,lt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<Y;zt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,ht,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(j+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return lt}let Ft={};Ft[r.TEXTURE_2D]=wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Ft[r.TEXTURE_CUBE_MAP]=wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[r.TEXTURE_2D_ARRAY]=wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ft[r.TEXTURE_3D]=wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(r.DEPTH_TEST),a.setFunc(Ts),$e(!1),ye(Nc),xt(r.CULL_FACE),Be(ns);function xt(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Vt(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ae(N,j){return d[N]!==j?(r.bindFramebuffer(N,j),d[N]=j,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=j),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=j),!0):!1}function kt(N,j){let Y=p,ht=!1;if(N){Y=f.get(j),Y===void 0&&(Y=[],f.set(j,Y));let rt=N.textures;if(Y.length!==rt.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,zt=rt.length;lt<zt;lt++)Y[lt]=r.COLOR_ATTACHMENT0+lt;Y.length=rt.length,ht=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ht=!0);ht&&r.drawBuffers(Y)}function le(N){return y!==N?(r.useProgram(N),y=N,!0):!1}let he={[ss]:r.FUNC_ADD,[Hu]:r.FUNC_SUBTRACT,[Gu]:r.FUNC_REVERSE_SUBTRACT};he[Vu]=r.MIN,he[Wu]=r.MAX;let jt={[qu]:r.ZERO,[Xu]:r.ONE,[$u]:r.SRC_COLOR,[kc]:r.SRC_ALPHA,[Qu]:r.SRC_ALPHA_SATURATE,[Ju]:r.DST_COLOR,[Zu]:r.DST_ALPHA,[Yu]:r.ONE_MINUS_SRC_COLOR,[Bc]:r.ONE_MINUS_SRC_ALPHA,[ju]:r.ONE_MINUS_DST_COLOR,[Ku]:r.ONE_MINUS_DST_ALPHA,[td]:r.CONSTANT_COLOR,[ed]:r.ONE_MINUS_CONSTANT_COLOR,[id]:r.CONSTANT_ALPHA,[nd]:r.ONE_MINUS_CONSTANT_ALPHA};function Be(N,j,Y,ht,rt,lt,zt,ee,nt,Bt){if(N===ns){m===!0&&(Vt(r.BLEND),m=!1);return}if(m===!1&&(xt(r.BLEND),m=!0),N!==Ou){if(N!==g||Bt!==T){if((v!==ss||A!==ss)&&(r.blendEquation(r.FUNC_ADD),v=ss,A=ss),Bt)switch(N){case Bn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFunc(r.ONE,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case Bn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}w=null,b=null,_=null,x=null,M.set(0,0,0),C=0,g=N,T=Bt}return}rt=rt||j,lt=lt||Y,zt=zt||ht,(j!==v||rt!==A)&&(r.blendEquationSeparate(he[j],he[rt]),v=j,A=rt),(Y!==w||ht!==b||lt!==_||zt!==x)&&(r.blendFuncSeparate(jt[Y],jt[ht],jt[lt],jt[zt]),w=Y,b=ht,_=lt,x=zt),(ee.equals(M)===!1||nt!==C)&&(r.blendColor(ee.r,ee.g,ee.b,nt),M.copy(ee),C=nt),g=N,T=!1}function Le(N,j){N.side===nn?Vt(r.CULL_FACE):xt(r.CULL_FACE);let Y=N.side===ei;j&&(Y=!Y),$e(Y),N.blending===Bn&&N.transparent===!1?Be(ns):Be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xt(r.SAMPLE_ALPHA_TO_COVERAGE):Vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){I!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),I=N)}function ye(N){N!==Fu?(xt(r.CULL_FACE),N!==z&&(N===Nc?r.cullFace(r.BACK):N===ku?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Vt(r.CULL_FACE),z=N}function Li(N){N!==F&&(O&&r.lineWidth(N),F=N)}function Fe(N,j,Y){N?(xt(r.POLYGON_OFFSET_FILL),(R!==j||k!==Y)&&(R=j,k=Y,a.getReversed()&&(j=-j,Y=-Y),r.polygonOffset(j,Y))):Vt(r.POLYGON_OFFSET_FILL)}function Nt(N){N?xt(r.SCISSOR_TEST):Vt(r.SCISSOR_TEST)}function pe(N){N===void 0&&(N=r.TEXTURE0+G-1),Z!==N&&(r.activeTexture(N),Z=N)}function Ue(N,j,Y){Y===void 0&&(Z===null?Y=r.TEXTURE0+G-1:Y=Z);let ht=et[Y];ht===void 0&&(ht={type:void 0,texture:void 0},et[Y]=ht),(ht.type!==N||ht.texture!==j)&&(Z!==Y&&(r.activeTexture(Y),Z=Y),r.bindTexture(N,j||Ft[N]),ht.type=N,ht.texture=j)}function B(){let N=et[Z];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function bi(){try{r.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function de(){try{r.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function _e(){try{r.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function at(){try{r.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Dt(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Wt(){try{r.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function P(){try{r.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function S(){try{r.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function V(){try{r.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function it(N){return u[N]!==void 0?u[N]:r.getParameter(N)}function Q(N,j){u[N]!==j&&(r.pixelStorei(N,j),u[N]=j)}function ot(N){$.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),$.copy(N))}function ft(N){gt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),gt.copy(N))}function K(N,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let ht=Y.get(N);ht===void 0&&(ht=r.getUniformBlockIndex(j,N.name),r.uniformBlockBinding(j,ht,ht),Y.set(N,ht))}function J(N,j,Y){let rt=c.get(j).get(N);l[rt]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,rt,Y),l[rt]=Y)}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,et={},d={},l={},f=new WeakMap,p=[],y=null,m=!1,g=null,v=null,w=null,b=null,A=null,_=null,x=null,M=new ut(0,0,0),C=0,T=!1,I=null,z=null,F=null,R=null,k=null,$.set(0,0,r.canvas.width,r.canvas.height),gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xt,disable:Vt,bindFramebuffer:Ae,drawBuffers:kt,useProgram:le,setBlending:Be,setMaterial:Le,setFlipSided:$e,setCullFace:ye,setLineWidth:Li,setPolygonOffset:Fe,setScissorTest:Nt,activeTexture:pe,bindTexture:Ue,unbindTexture:B,compressedTexImage2D:bi,compressedTexImage3D:de,texImage2D:S,texImage3D:V,pixelStorei:Q,getParameter:it,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Wt,texStorage3D:P,texSubImage2D:_e,texSubImage3D:at,compressedTexSubImage2D:Re,compressedTexSubImage3D:Dt,scissor:ot,viewport:ft,reset:ct}}function Oy(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return m?new OffscreenCanvas(P,S):yr("canvas")}function v(P,S,V){let it=1,Q=Wt(P);if((Q.width>V||Q.height>V)&&(it=V/Math.max(Q.width,Q.height)),it<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ot=Math.floor(it*Q.width),ft=Math.floor(it*Q.height);d===void 0&&(d=g(ot,ft));let K=S?g(ot,ft):d;return K.width=ot,K.height=ft,K.getContext("2d").drawImage(P,0,0,ot,ft),Ht("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ot+"x"+ft+")."),K}else return"data"in P&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function w(P){return P.generateMipmaps}function b(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,S,V,it,Q,ot=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft;it&&(ft=t.get("EXT_texture_norm16"),ft||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===r.RED&&(V===r.FLOAT&&(K=r.R32F),V===r.HALF_FLOAT&&(K=r.R16F),V===r.UNSIGNED_BYTE&&(K=r.R8),V===r.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),V===r.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.R8UI),V===r.UNSIGNED_SHORT&&(K=r.R16UI),V===r.UNSIGNED_INT&&(K=r.R32UI),V===r.BYTE&&(K=r.R8I),V===r.SHORT&&(K=r.R16I),V===r.INT&&(K=r.R32I)),S===r.RG&&(V===r.FLOAT&&(K=r.RG32F),V===r.HALF_FLOAT&&(K=r.RG16F),V===r.UNSIGNED_BYTE&&(K=r.RG8),V===r.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),V===r.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RG8UI),V===r.UNSIGNED_SHORT&&(K=r.RG16UI),V===r.UNSIGNED_INT&&(K=r.RG32UI),V===r.BYTE&&(K=r.RG8I),V===r.SHORT&&(K=r.RG16I),V===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGB8UI),V===r.UNSIGNED_SHORT&&(K=r.RGB16UI),V===r.UNSIGNED_INT&&(K=r.RGB32UI),V===r.BYTE&&(K=r.RGB8I),V===r.SHORT&&(K=r.RGB16I),V===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),V===r.UNSIGNED_INT&&(K=r.RGBA32UI),V===r.BYTE&&(K=r.RGBA8I),V===r.SHORT&&(K=r.RGBA16I),V===r.INT&&(K=r.RGBA32I)),S===r.RGB&&(V===r.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),V===r.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),S===r.RGBA){let J=ot?xr:ae.getTransfer(Q);V===r.FLOAT&&(K=r.RGBA32F),V===r.HALF_FLOAT&&(K=r.RGBA16F),V===r.UNSIGNED_BYTE&&(K=J===fe?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),V===r.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(P,S){let V;return P?S===null||S===Wi||S===as?V=r.DEPTH24_STENCIL8:S===Fi?V=r.DEPTH32F_STENCIL8:S===Vs&&(V=r.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wi||S===as?V=r.DEPTH_COMPONENT24:S===Fi?V=r.DEPTH_COMPONENT32F:S===Vs&&(V=r.DEPTH_COMPONENT16),V}function M(P,S){return w(P)===!0||P.isFramebufferTexture&&P.minFilter!==Je&&P.minFilter!==Ve?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function C(P){let S=new WeakRef(P);i.get(P).__ref=S,p.add(S),y.register(P,S,S)}function T(P){let S=i.get(P).__ref;S!==void 0&&(p.delete(S),y.unregister(S))}function I(P){F(P.target)}function z(P){R(P.target)}function F(P){P.removeEventListener("dispose",I),T(P),G(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function R(P){P.removeEventListener("dispose",z),T(P),tt(P)}function k(){for(let P of p){let S=P.deref();S!==void 0&&(S.isRenderTarget===!0?R(S):F(S))}p.clear(),u.clear()}function G(P){let S=i.get(P);if(S.__webglInit===void 0)return;let V=P.source,it=f.get(V);if(it){let Q=it[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(P),Object.keys(it).length===0&&f.delete(V)}i.remove(P)}function O(P){let S=i.get(P);r.deleteTexture(S.__webglTexture);let V=P.source,it=f.get(V);delete it[S.__cacheKey],a.memory.textures--}function tt(P){let S=i.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();let V=P.depthTexture;if(V&&V.renderTarget===P&&F(V),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ot=0;ot<S.__webglFramebuffer[Q].length;ot++)r.deleteFramebuffer(S.__webglFramebuffer[Q][ot]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let it=P.textures;for(let Q=0,ot=it.length;Q<ot;Q++){let ft=i.get(it[Q]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(it[Q])}i.remove(P)}let q=0;function Z(){q=0}function et(){return q}function mt(P){q=P}function $t(){let P=q;return P>=n.maxTextures&&Ht("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,P}function $(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function gt(P,S){let V=i.get(P);if(P.isVideoTexture&&Re(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let it=P.image;if(it===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(V,P,S);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function wt(P,S){let V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Le(V,P,S);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function Ft(P,S){let V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Le(V,P,S);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function xt(P,S){let V=i.get(P);if(P.version>0&&V.__version!==P.version){$e(V,P,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}let Vt={[Cn]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[to]:r.MIRRORED_REPEAT},Ae={[Je]:r.NEAREST,[ad]:r.NEAREST_MIPMAP_NEAREST,[Kr]:r.NEAREST_MIPMAP_LINEAR,[Ve]:r.LINEAR,[Do]:r.LINEAR_MIPMAP_NEAREST,[Ri]:r.LINEAR_MIPMAP_LINEAR},kt={[hd]:r.NEVER,[eh]:r.ALWAYS,[ud]:r.LESS,[Qc]:r.LEQUAL,[dd]:r.EQUAL,[th]:r.GEQUAL,[fd]:r.GREATER,[pd]:r.NOTEQUAL};function le(P,S){if(S.type===Fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ve||S.magFilter===Do||S.magFilter===Kr||S.magFilter===Ri||S.minFilter===Ve||S.minFilter===Do||S.minFilter===Kr||S.minFilter===Ri)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Vt[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Vt[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Vt[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ae[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,kt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Je||S.minFilter!==Kr&&S.minFilter!==Ri||S.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function he(P,S){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I),C(S));let it=S.source,Q=f.get(it);Q===void 0&&(Q={},f.set(it,Q));let ot=$(S);if(ot!==P.__cacheKey){Q[ot]===void 0&&(Q[ot]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[ot].usedTimes++;let ft=Q[P.__cacheKey];ft!==void 0&&(Q[P.__cacheKey].usedTimes--,ft.usedTimes===0&&O(S)),P.__cacheKey=ot,P.__webglTexture=Q[ot].texture}return V}function jt(P,S,V){return Math.floor(Math.floor(P/V)/S)}function Be(P,S,V,it){let ot=P.updateRanges;if(ot.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,it,S.data);else{ot.sort((N,j)=>N.start-j.start);let ft=0;for(let N=1;N<ot.length;N++){let j=ot[ft],Y=ot[N],ht=j.start+j.count,rt=jt(Y.start,S.width,4),lt=jt(j.start,S.width,4);Y.start<=ht+1&&rt===lt&&jt(Y.start+Y.count-1,S.width,4)===rt?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++ft,ot[ft]=Y)}ot.length=ft+1;let K=e.getParameter(r.UNPACK_ROW_LENGTH),J=e.getParameter(r.UNPACK_SKIP_PIXELS),ct=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let N=0,j=ot.length;N<j;N++){let Y=ot[N],ht=Math.floor(Y.start/4),rt=Math.ceil(Y.count/4),lt=ht%S.width,zt=Math.floor(ht/S.width),ee=rt,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(r.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(r.TEXTURE_2D,0,lt,zt,ee,nt,V,it,S.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,K),e.pixelStorei(r.UNPACK_SKIP_PIXELS,J),e.pixelStorei(r.UNPACK_SKIP_ROWS,ct)}}function Le(P,S,V){let it=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(it=r.TEXTURE_3D);let Q=he(P,S),ot=S.source;e.bindTexture(it,P.__webglTexture,r.TEXTURE0+V);let ft=i.get(ot);if(ot.version!==ft.__version||Q===!0){if(e.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let nt=ae.getPrimaries(ae.workingColorSpace),Bt=S.colorSpace===vn?null:ae.getPrimaries(S.colorSpace),Qt=S.colorSpace===vn||nt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let J=v(S.image,!1,n.maxTextureSize);J=Dt(S,J);let ct=s.convert(S.format,S.colorSpace),N=s.convert(S.type),j=_(S.internalFormat,ct,N,S.normalized,S.colorSpace,S.isVideoTexture);le(it,S);let Y,ht=S.mipmaps,rt=S.isVideoTexture!==!0,lt=ft.__version===void 0||Q===!0,zt=ot.dataReady,ee=M(S,J);if(S.isDepthTexture)j=x(S.format===yn,S.type),lt&&(rt?e.texStorage2D(r.TEXTURE_2D,1,j,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,j,J.width,J.height,0,ct,N,null));else if(S.isDataTexture)if(ht.length>0){rt&&lt&&e.texStorage2D(r.TEXTURE_2D,ee,j,ht[0].width,ht[0].height);for(let nt=0,Bt=ht.length;nt<Bt;nt++)Y=ht[nt],rt?zt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Y.width,Y.height,ct,N,Y.data):e.texImage2D(r.TEXTURE_2D,nt,j,Y.width,Y.height,0,ct,N,Y.data);S.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(r.TEXTURE_2D,ee,j,J.width,J.height),zt&&Be(S,J,ct,N)):e.texImage2D(r.TEXTURE_2D,0,j,J.width,J.height,0,ct,N,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ee,j,ht[0].width,ht[0].height,J.depth);for(let nt=0,Bt=ht.length;nt<Bt;nt++)if(Y=ht[nt],S.format!==fi)if(ct!==null)if(rt){if(zt)if(S.layerUpdates.size>0){let Qt=ch(Y.width,Y.height,S.format,S.type);for(let yt of S.layerUpdates){let me=Y.data.subarray(yt*Qt/Y.data.BYTES_PER_ELEMENT,(yt+1)*Qt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,yt,Y.width,Y.height,1,ct,me)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,J.depth,ct,Y.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,j,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?zt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,J.depth,ct,N,Y.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,j,Y.width,Y.height,J.depth,0,ct,N,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(r.TEXTURE_2D,ee,j,ht[0].width,ht[0].height);for(let nt=0,Bt=ht.length;nt<Bt;nt++)Y=ht[nt],S.format!==fi?ct!==null?rt?zt&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,Y.width,Y.height,ct,Y.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,j,Y.width,Y.height,0,Y.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?zt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Y.width,Y.height,ct,N,Y.data):e.texImage2D(r.TEXTURE_2D,nt,j,Y.width,Y.height,0,ct,N,Y.data)}else if(S.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ee,j,J.width,J.height,J.depth),zt)if(S.layerUpdates.size>0){let nt=ch(J.width,J.height,S.format,S.type);for(let Bt of S.layerUpdates){let Qt=J.data.subarray(Bt*nt/J.data.BYTES_PER_ELEMENT,(Bt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Bt,J.width,J.height,1,ct,N,Qt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,N,J.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,ct,N,J.data);else if(S.isData3DTexture)rt?(lt&&e.texStorage3D(r.TEXTURE_3D,ee,j,J.width,J.height,J.depth),zt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,N,J.data)):e.texImage3D(r.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,ct,N,J.data);else if(S.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(r.TEXTURE_2D,ee,j,J.width,J.height);else{let nt=J.width,Bt=J.height;for(let Qt=0;Qt<ee;Qt++)e.texImage2D(r.TEXTURE_2D,Qt,j,nt,Bt,0,ct,N,null),nt>>=1,Bt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),u.add(S),nt.onpaint=Bt=>{let Qt=Bt.changedElements;for(let yt of u)Qt.includes(yt.image)&&(yt.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{let Qt=r.RGBA,yt=r.RGBA,me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Qt,yt,me,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ht.length>0){if(rt&&lt){let nt=Wt(ht[0]);e.texStorage2D(r.TEXTURE_2D,ee,j,nt.width,nt.height)}for(let nt=0,Bt=ht.length;nt<Bt;nt++)Y=ht[nt],rt?zt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct,N,Y):e.texImage2D(r.TEXTURE_2D,nt,j,ct,N,Y);S.generateMipmaps=!1}else if(rt){if(lt){let nt=Wt(J);e.texStorage2D(r.TEXTURE_2D,ee,j,nt.width,nt.height)}zt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,N,J)}else e.texImage2D(r.TEXTURE_2D,0,j,ct,N,J);w(S)&&S.mipmapsAutoUpdate===!0&&b(it),ft.__version=ot.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $e(P,S,V){if(S.image.length!==6)return;let it=he(P,S),Q=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);let ot=i.get(Q);if(Q.version!==ot.__version||it===!0){e.activeTexture(r.TEXTURE0+V);let ft=ae.getPrimaries(ae.workingColorSpace),K=S.colorSpace===vn?null:ae.getPrimaries(S.colorSpace),J=S.colorSpace===vn||ft===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,j=[];for(let yt=0;yt<6;yt++)!ct&&!N?j[yt]=v(S.image[yt],!0,n.maxCubemapSize):j[yt]=N?S.image[yt].image:S.image[yt],j[yt]=Dt(S,j[yt]);let Y=j[0],ht=s.convert(S.format,S.colorSpace),rt=s.convert(S.type),lt=_(S.internalFormat,ht,rt,S.normalized,S.colorSpace),zt=S.isVideoTexture!==!0,ee=ot.__version===void 0||it===!0,nt=Q.dataReady,Bt=M(S,Y);le(r.TEXTURE_CUBE_MAP,S);let Qt;if(S.isDepthTexture){if(lt=x(S.format===yn,S.type),ee)if(zt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,lt,Y.width,Y.height);else for(let yt=0;yt<6;yt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,Y.width,Y.height,0,ht,rt,null)}else if(ct){zt&&ee&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,lt,Y.width,Y.height);for(let yt=0;yt<6;yt++){Qt=j[yt].mipmaps;for(let me=0;me<Qt.length;me++){let Ye=Qt[me];S.format!==fi?ht!==null?zt?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,0,0,Ye.width,Ye.height,ht,Ye.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,lt,Ye.width,Ye.height,0,Ye.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,0,0,Ye.width,Ye.height,ht,rt,Ye.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me,lt,Ye.width,Ye.height,0,ht,rt,Ye.data)}}}else{if(Qt=S.mipmaps,zt&&ee){Qt.length>0&&Bt++;let yt=Wt(j[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,lt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(N){zt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,j[yt].width,j[yt].height,ht,rt,j[yt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,j[yt].width,j[yt].height,0,ht,rt,j[yt].data);for(let me=0;me<Qt.length;me++){let Mn=Qt[me].image[yt].image;zt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,0,0,Mn.width,Mn.height,ht,rt,Mn.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,lt,Mn.width,Mn.height,0,ht,rt,Mn.data)}}else{zt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ht,rt,j[yt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,ht,rt,j[yt]);for(let me=0;me<Qt.length;me++){let Ye=Qt[me];zt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,0,0,ht,rt,Ye.image[yt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,me+1,lt,ht,rt,Ye.image[yt])}}}w(S)&&S.mipmapsAutoUpdate===!0&&b(r.TEXTURE_CUBE_MAP),ot.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ye(P,S,V,it,Q,ot){let ft=s.convert(V.format,V.colorSpace),K=s.convert(V.type),J=_(V.internalFormat,ft,K,V.normalized,V.colorSpace),ct=i.get(S),N=i.get(V);if(N.__renderTarget=S,!ct.__hasExternalTextures){let j=Math.max(1,S.width>>ot),Y=Math.max(1,S.height>>ot);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,ot,J,j,Y,S.depth,0,ft,K,null):e.texImage2D(Q,ot,J,j,Y,0,ft,K,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),at(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,N.__webglTexture,0,_e(S)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,N.__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Li(P,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){let it=S.depthTexture,Q=it&&it.isDepthTexture?it.type:null,ot=x(S.stencilBuffer,Q),ft=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;at(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e(S),ot,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e(S),ot,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ot,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,P)}else{let it=S.textures;for(let Q=0;Q<it.length;Q++){let ot=it[Q],ft=s.convert(ot.format,ot.colorSpace),K=s.convert(ot.type),J=_(ot.internalFormat,ft,K,ot.normalized,ot.colorSpace);at(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e(S),J,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e(S),J,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(P,S,V){let it=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(S.depthTexture);Q.__renderTarget=S;let ot=it?S.depthTexture.image[0]:S.depthTexture.image;(!Q.__webglTexture||ot.width!==S.width||ot.height!==S.height)&&(ot.width=S.width,ot.height=S.height,S.depthTexture.needsUpdate=!0),it?xt(S.depthTexture,0):gt(S.depthTexture,0);let ft=Q.__webglTexture,K=_e(S),J=it?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,ct=S.depthTexture.format===yn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===pn)at(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,J,ft,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,ct,J,ft,0);else if(S.depthTexture.format===yn)at(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,J,ft,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,ct,J,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(P){let S=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let it=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),it){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,it.removeEventListener("dispose",Q)};it.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=it}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let it=0;it<6;it++)Fe(S.__webglFramebuffer[it],P,it);else P.texture.mipmaps.length>0?Fe(S.__webglFramebuffer[0],P,0):Fe(S.__webglFramebuffer,P,0);else if(V){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]===void 0)S.__webglDepthbuffer[it]=r.createRenderbuffer(),Li(S.__webglDepthbuffer[it],P,!1);else{let Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ot)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Li(S.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ot)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(P,S,V){let it=i.get(P);S!==void 0&&ye(it.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Nt(P)}function Ue(P){let S=P.texture,V=i.get(P),it=i.get(S);P.addEventListener("dispose",z),C(P);let Q=P.textures,ot=P.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=S.version,a.memory.textures++),ot){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let J=0;J<S.mipmaps.length;J++)V.__webglFramebuffer[K][J]=r.createFramebuffer()}else V.__webglFramebuffer[K]=r.createFramebuffer()}else{if(S.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)V.__webglFramebuffer[K]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ft)for(let K=0,J=Q.length;K<J;K++){let ct=i.get(Q[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&at(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){let J=Q[K];V.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let ct=s.convert(J.format,J.colorSpace),N=s.convert(J.type),j=_(J.internalFormat,ct,N,J.normalized,J.colorSpace,P.isXRRenderTarget===!0),Y=_e(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,j,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,V.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Li(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),le(r.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)ye(V.__webglFramebuffer[K][J],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else ye(V.__webglFramebuffer[K],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(S)?b(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let K=0,J=Q.length;K<J;K++){let ct=Q[K],N=i.get(ct),j=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,N.__webglTexture),le(j,ct),ye(V.__webglFramebuffer,P,ct,r.COLOR_ATTACHMENT0+K,j,0),w(ct)&&b(j)}e.unbindTexture()}else{let K=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(K,it.__webglTexture),le(K,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)ye(V.__webglFramebuffer[J],P,S,r.COLOR_ATTACHMENT0,K,J);else ye(V.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,K,0);w(S)?b(K):S.mipmaps.length>0&&r.texParameteri(K,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Nt(P)}function B(P){let S=P.textures;for(let V=0,it=S.length;V<it;V++){let Q=S[V];if(w(Q)&&Q.mipmapsAutoUpdate===!0){let ot=A(P),ft=i.get(Q).__webglTexture;e.bindTexture(ot,ft),b(ot),e.unbindTexture()}}}let bi=[];function de(P){if(P.samples>0){if(at(P)===!1){let S=P.textures,V=P.width,it=P.height,Q=r.COLOR_BUFFER_BIT,ot=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=i.get(P),K=S.length>1;if(K)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let N=i.get(S[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,V,it,0,0,V,it,Q,r.NEAREST),l===!0&&(bi.length=0,bi.push(r.COLOR_ATTACHMENT0+ct),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&bi.push(ot),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bi))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let N=i.get(S[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,N,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function _e(P){return Math.min(n.maxSamples,P.samples)}function at(P){let S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Re(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Dt(P,S){let V=P.colorSpace,it=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==gr&&V!==vn&&(ae.getTransfer(V)===fe?(it!==fi||Q!==_i)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",V)),S}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=$t,this.resetTextureUnits=Z,this.getTextureUnits=et,this.setTextureUnits=mt,this.setTexture2D=gt,this.setTexture2DArray=wt,this.setTexture3D=Ft,this.setTextureCube=xt,this.rebindTextures=pe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=at,this.dispose=k}function Hy(r,t){function e(i,n=vn){let s,a=ae.getTransfer(n);if(i===_i)return r.UNSIGNED_BYTE;if(i===No)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Zc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Kc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===$c)return r.BYTE;if(i===Yc)return r.SHORT;if(i===Vs)return r.UNSIGNED_SHORT;if(i===zo)return r.INT;if(i===Wi)return r.UNSIGNED_INT;if(i===Fi)return r.FLOAT;if(i===qi)return r.HALF_FLOAT;if(i===Jc)return r.ALPHA;if(i===jc)return r.RGB;if(i===fi)return r.RGBA;if(i===pn)return r.DEPTH_COMPONENT;if(i===yn)return r.DEPTH_STENCIL;if(i===Fo)return r.RED;if(i===ko)return r.RED_INTEGER;if(i===On)return r.RG;if(i===Bo)return r.RG_INTEGER;if(i===Oo)return r.RGBA_INTEGER;if(i===Jr||i===jr||i===Qr||i===ta)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ho||i===Go||i===Vo||i===Wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===Xo||i===$o||i===Yo||i===Zo||i===ea||i===Ko)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qo||i===Xo)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$o)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return s.COMPRESSED_R11_EAC;if(i===Zo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return s.COMPRESSED_RG11_EAC;if(i===Ko)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jo||i===jo||i===Qo||i===tl||i===el||i===il||i===nl||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jo)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qo)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===dl||i===fl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ul)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pl||i===ml||i===ia||i===gl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===pl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new yi({vertexShader:Gy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends ji{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new wh,g={},v=e.getContextAttributes(),w=null,b=null,A=[],_=[],x=new Mt,M=null,C=null,T=new ai;T.viewport=new Ie;let I=new ai;I.viewport=new Ie;let z=[T,I],F=new Co,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=A[$];return gt===void 0&&(gt=new Ps,A[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=A[$];return gt===void 0&&(gt=new Ps,A[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=A[$];return gt===void 0&&(gt=new Ps,A[$]=gt),gt.getHandSpace()};function G($){let gt=_.indexOf($.inputSource);if(gt===-1)return;let wt=A[gt];wt!==void 0&&(wt.update($.inputSource,$.frame,c||a),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",tt);for(let $=0;$<A.length;$++){let gt=_[$];gt!==null&&(_[$]=null,A[$].disconnect(gt))}R=null,k=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(w),f=null,d=null,u=null,n=null,b=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),C!==null){let $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(w=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",O),n.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ft=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=v.stencil?yn:pn,Ft=v.stencil?as:Wi);let Vt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Vt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ei(d.textureWidth,d.textureHeight,{format:fi,type:_i,depthTexture:new xn(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,wt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ei(f.framebufferWidth,f.framebufferHeight,{format:fi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),$t.setContext(n),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let gt=0;gt<$.removed.length;gt++){let wt=$.removed[gt],Ft=_.indexOf(wt);Ft>=0&&(_[Ft]=null,A[Ft].disconnect(wt))}for(let gt=0;gt<$.added.length;gt++){let wt=$.added[gt],Ft=_.indexOf(wt);if(Ft===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=_.length){_.push(wt),Ft=Vt;break}else if(_[Vt]===null){_[Vt]=wt,Ft=Vt;break}if(Ft===-1)break}let xt=A[Ft];xt&&xt.connect(wt)}}function q($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let gt=$.near,wt=$.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),F.near=I.near=T.near=gt,F.far=I.far=T.far=wt,(R!==F.near||k!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),R=F.near,k=F.far),F.layers.mask=$.layers.mask|6,T.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Ft=$.parent,xt=F.cameras;q(F,Ft);for(let Vt=0;Vt<xt.length;Vt++)q(xt[Vt],Ft);F.projectionMatrix.copy(T.projectionMatrix),F.projectionMatrixInverse.copy(T.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),Z($,F,Ft)};function Z($,gt,wt){wt===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=io*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return g[$]};let et=null;function mt($,gt){if(h=gt.getViewerPose(c||a),p=gt,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Ft=!1;wt.length!==F.cameras.length&&(F.cameras.length=0,Ft=!0);for(let kt=0;kt<wt.length;kt++){let le=wt[kt],he=null;if(f!==null)he=f.getViewport(le);else{let Be=u.getViewSubImage(d,le);he=Be.viewport,kt===0&&(t.setRenderTargetTextures(b,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(b))}let jt=z[kt];jt===void 0&&(jt=new ai,jt.layers.enable(kt),jt.viewport=new Ie,z[kt]=jt),jt.matrix.fromArray(le.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(le.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(he.x,he.y,he.width,he.height),kt===0&&(F.matrix.copy(jt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ft===!0&&F.cameras.push(jt)}let xt=n.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let kt=u.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,n.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let kt=0;kt<wt.length;kt++){let le=wt[kt].camera;if(le){let he=g[le];he||(he=new Rr,g[le]=he);let jt=u.getCameraImage(le);he.sourceTexture=jt}}}}for(let wt=0;wt<A.length;wt++){let Ft=_[wt],xt=A[wt];Ft!==null&&xt!==void 0&&xt.update(Ft,gt,c||a)}et&&et($,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),p=null}let $t=new Kd;$t.setAnimationLoop(mt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}},Wy=new Zt,of=new Yt;of.set(-1,0,0,0,1,0,0,0,1);function qy(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,ah(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),y(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ei&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ei&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,b=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(of),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ei&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Xy(r,t,e,i){let n={},s={};function a(v,w){let b=w.program;i.uniformBlockBinding(v,b,n[v.id])}function o(v,w){let b=n[v.id];b===void 0&&(p(v),b=l(v),n[v.id]=b,v.addEventListener("dispose",m));let A=w.program;i.updateUBOMapping(v,A);let _=t.render.frame;s[v.id]!==_&&(c(v),s[v.id]=_)}function l(v){let w=r.createBuffer(),b=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,b,A),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(v){let w=n[v.id],b=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let _=0,x=b.length;_<x;_++){let M=b[_];if(Array.isArray(M))for(let C=0,T=M.length;C<T;C++)h(M[C],_,C,A);else h(M,_,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,w,b,A){if(d(v,w,b,A)===!0){let _=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let C=0;C<x.length;C++){let T=x[C],I=y(T,!0);u(T,v.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,v.__data)}}function u(v,w,b){typeof v=="number"||typeof v=="boolean"?w[b]=v:v.isMatrix3?(w[b]=v.elements[0],w[b+1]=v.elements[1],w[b+2]=v.elements[2],w[b+3]=0,w[b+4]=v.elements[3],w[b+5]=v.elements[4],w[b+6]=v.elements[5],w[b+7]=0,w[b+8]=v.elements[6],w[b+9]=v.elements[7],w[b+10]=v.elements[8],w[b+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-b),b):v.toArray(w,b)}function d(v,w,b,A){let _=v.value,x=w+"_"+b;if(Array.isArray(_)){A[x]===void 0&&(A[x]=[]);let M=A[x],C=!1;for(let T=0;T<_.length;T++)f(_[T],M,T)===!0&&(C=!0);return C}return f(_,A,x)}function f(v,w,b){if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{let A=w[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){let w=v.uniforms,b=0,A=16;for(let x=0,M=w.length;x<M;x++){let C=Array.isArray(w[x])?w[x]:[w[x]];for(let T=0,I=C.length;T<I;T++){let z=C[T],F=Array.isArray(z.value)?z.value:[z.value],R=Array.isArray(w[x])||Array.isArray(z.value),k=b;for(let O=0,tt=F.length;O<tt;O++){let q=F[O],Z=y(q,R),et=b%A,mt=et%Z.boundary,$t=et+mt;b+=mt,$t!==0&&A-$t<Z.storage&&(b+=A-$t),O===0&&(k=b),b+=Z.storage}let G=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new G((b-k)/Float32Array.BYTES_PER_ELEMENT),z.__offset=k}}let _=b%A;return _>0&&(b+=A-_),v.__size=b,v.__cache={},this}function y(v,w){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(v){let w=v.target;w.removeEventListener("dispose",m),r.deleteBuffer(n[w.id]),delete n[w.id],delete s[w.id]}function g(){for(let v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:a,update:o,dispose:g}}var $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rn=null;function Yy(){return rn===null&&(rn=new mn($y,16,16,On,qi),rn.name="DFG_LUT",rn.minFilter=Ve,rn.magFilter=Ve,rn.wrapS=Ji,rn.wrapT=Ji,rn.generateMipmaps=!1,rn.needsUpdate=!0),rn}var _l=class{constructor(t={}){let{canvas:e=gd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_i}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=f,m=new Set([Oo,Bo,ko]),g=new Set([_i,Wi,Vs,as,No,Uo]),v=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},A=null,_=null,x=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,z=null,F=null,R=null,k=null;this._outputColorSpace=ui;let G=0,O=0,tt=null,q=-1,Z=null,et=new Ie,mt=new Ie,$t=null,$=new ut(0),gt=0,wt=e.width,Ft=e.height,xt=1,Vt=null,Ae=null,kt=new Ie(0,0,wt,Ft),le=new Ie(0,0,wt,Ft),he=!1,jt=new Pn,Be=new ao,Le=!1,$e=!1,ye=new Zt,Li=new D,Fe=new Ie,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Ue(){return tt===null?xt:1}let B=i;function bi(E,U){return e.getContext(E,U)}let de,_e,at,Re,Dt,Wt,P,S,V,it,Q,ot,ft,K,J,ct,N,j,Y,ht,rt,lt,zt;try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),B===null){let U="webgl2";if(B=bi(U,E),B===null)throw bi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(E){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Xt("WebGLRenderer: "+E.message),E}function ee(){de=new rx(B),de.init(),rt=new Hy(B,de),_e=new Yg(B,de,t,rt),at=new By(B,de),_e.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),F=B.createFramebuffer(),R=B.createFramebuffer(),k=B.createFramebuffer(),Re=new lx(B),Dt=new Ey,Wt=new Oy(B,de,at,Dt,_e,rt,Re),P=new sx(T),S=new hm(B),lt=new Xg(B,S),V=new ax(B,S,Re,lt),it=new hx(B,V,S,lt,Re),j=new cx(B,_e,Wt),J=new Zg(Dt),Q=new Sy(T,P,de,_e,lt,J),ot=new qy(T,Dt),ft=new Ay,K=new Dy(de),N=new qg(T,P,at,it,p,l),ct=new ky(T,it,_e),zt=new Xy(B,Re,_e,at),Y=new $g(B,de,Re),ht=new ox(B,de,Re),Re.programs=Q.programs,T.capabilities=_e,T.extensions=de,T.properties=Dt,T.renderLists=ft,T.shadowMap=ct,T.state=at,T.info=Re}y!==_i&&(C=new dx(y,e.width,e.height,o,n,s));let nt=new Sh(T,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(E){E!==void 0&&(xt=E,this.setSize(wt,Ft,!1))},this.getSize=function(E){return E.set(wt,Ft)},this.setSize=function(E,U,X=!0){if(nt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=E,Ft=U,e.width=Math.floor(E*xt),e.height=Math.floor(U*xt),X===!0&&(e.style.width=E+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(wt*xt,Ft*xt).floor()},this.setDrawingBufferSize=function(E,U,X){wt=E,Ft=U,xt=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(y===_i){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(kt)},this.setViewport=function(E,U,X,H){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,U,X,H),at.viewport(et.copy(kt).multiplyScalar(Ue()).round())},this.getScissor=function(E){return E.copy(le)},this.setScissor=function(E,U,X,H){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,U,X,H),at.scissor(mt.copy(le).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){at.setScissorTest(he=E)},this.setOpaqueSort=function(E){Vt=E},this.setTransparentSort=function(E){Ae=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let H=0;if(E){let W=!1;if(tt!==null){let pt=tt.texture.format;W=m.has(pt)}if(W){let pt=tt.texture.type,Tt=g.has(pt),dt=N.getClearColor(),_t=N.getClearAlpha(),It=dt.r,Jt=dt.g,se=dt.b;Tt?(v[0]=It,v[1]=Jt,v[2]=se,v[3]=_t,B.clearBufferuiv(B.COLOR,0,v)):(w[0]=It,w[1]=Jt,w[2]=se,w[3]=_t,B.clearBufferiv(B.COLOR,0,w))}else H|=B.COLOR_BUFFER_BIT}U&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),N.dispose(),ft.dispose(),K.dispose(),Wt.dispose(),Dt.dispose(),P.dispose(),it.dispose(),V.dispose(),lt.dispose(),zt.dispose(),Q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",qh),nt.removeEventListener("sessionend",Xh),Yn.stop()};function Bt(E){E.preventDefault(),nh("WebGLRenderer: Context Lost."),I=!0}function Qt(){nh("WebGLRenderer: Context Restored."),I=!1;let E=Re.autoReset,U=ct.enabled,X=ct.autoUpdate,H=ct.needsUpdate,W=ct.type;ee(),Re.autoReset=E,ct.enabled=U,ct.autoUpdate=X,ct.needsUpdate=H,ct.type=W}function yt(E){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){let U=E.target;U.removeEventListener("dispose",me),Ye(U)}function Ye(E){Mn(E),Dt.remove(E)}function Mn(E){let U=Dt.get(E).programs;U!==void 0&&(U.forEach(function(X){Q.releaseProgram(X)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,H,W,pt){U===null&&(U=Nt);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,dt=qf(E,U,X,H,W);at.setMaterial(H,Tt);let _t=X.index,It=1;if(H.wireframe===!0){if(_t=V.getWireframeAttribute(X),_t===void 0)return;It=2}let Jt=X.drawRange,se=X.attributes.position,At=Jt.start*It,re=(Jt.start+Jt.count)*It;pt!==null&&(At=Math.max(At,pt.start*It),re=Math.min(re,(pt.start+pt.count)*It)),_t!==null?(At=Math.max(At,0),re=Math.min(re,_t.count)):se!=null&&(At=Math.max(At,0),re=Math.min(re,se.count));let Oe=re-At;if(Oe<0||Oe===1/0)return;lt.setup(W,H,dt,X,_t);let Se,Me=Y;if(_t!==null&&(Se=S.get(_t),Me=ht,Me.setIndex(Se)),W.isMesh)H.wireframe===!0?(at.setLineWidth(H.wireframeLinewidth*Ue()),Me.setMode(B.LINES)):Me.setMode(B.TRIANGLES);else if(W.isLine){let ii=H.linewidth;ii===void 0&&(ii=1),at.setLineWidth(ii*Ue()),W.isLineSegments?Me.setMode(B.LINES):W.isLineLoop?Me.setMode(B.LINE_LOOP):Me.setMode(B.LINE_STRIP)}else W.isPoints?Me.setMode(B.POINTS):W.isSprite&&Me.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ii=W._multiDrawStarts,Rt=W._multiDrawCounts,hi=W._multiDrawCount,ue=_t?S.get(_t).bytesPerElement:1,Zn=Dt.get(H).currentProgram.getUniforms();for(let ni=0;ni<hi;ni++)Zn.setValue(B,"_gl_DrawID",ni),Me.render(ii[ni]/ue,Rt[ni])}else if(W.isInstancedMesh)Me.renderInstances(At,Oe,W.count);else if(X.isInstancedBufferGeometry){let ii=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,ii);Me.renderInstances(At,Oe,Rt)}else Me.render(At,Oe)};function Wh(E,U,X,H){z!==null&&E.isNodeMaterial&&z.setObject(H,E),Le===!0&&J.setState(E,X,!1),E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=ei,E.needsUpdate=!0,nr(E,U,H),E.side=kn,E.needsUpdate=!0,nr(E,U,H),E.side=nn):nr(E,U,H)}this.compile=function(E,U,X=null){X===null&&(X=E),z!==null&&z.renderStart(E,U,X),_=K.get(X),_.init(U),M.push(_),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),E!==X&&E.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights(),z!==null&&z.updateLights(_.state.lightsArray),$e=this.localClippingEnabled,Le=J.init(this.clippingPlanes,$e),Le===!0&&J.setGlobalState(this.clippingPlanes,U),z!==null&&ct.render(_.state.shadowsArray,X,U);let H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pt=W.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){let dt=pt[Tt];Wh(dt,X,U,W),H.add(dt)}else Wh(pt,X,U,W),H.add(pt)}),_=M.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(E,U,X=null){let H=this.compile(E,U,X);return new Promise(W=>{function pt(){if(H.forEach(function(Tt){let _t=Dt.get(Tt).currentProgram;(_t===void 0||_t.isReady())&&H.delete(Tt)}),H.size===0){W(E);return}setTimeout(pt,10)}de.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Zl=null;function Vf(E){Zl&&Zl(E)}function qh(){Yn.stop()}function Xh(){Yn.start()}let Yn=new Kd;Yn.setAnimationLoop(Vf),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(E){Zl=E,nt.setAnimationLoop(E),E===null?Yn.stop():Yn.start()},nt.addEventListener("sessionstart",qh),nt.addEventListener("sessionend",Xh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(E,U);let X=nt.enabled===!0&&nt.isPresenting===!0,H=C!==null&&(tt===null||X)&&C.begin(T,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,U,tt),_=K.get(E,M.length),_.init(U),_.state.textureUnits=Wt.getTextureUnits(),M.push(_),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Be.setFromArrayCamera(U):jt.setFromProjectionMatrix(ye,zi,U.reversedDepth),$e=this.localClippingEnabled,Le=J.init(this.clippingPlanes,$e),A=ft.get(E,x.length),A.init(),x.push(A),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Tt=T.xr.getDepthSensingMesh();Tt!==null&&Kl(Tt,U,-1/0,T.sortObjects)}Kl(E,U,0,T.sortObjects),A.finish(),z!==null&&z.updateLights(_.state.lightsArray),T.sortObjects===!0&&A.sort(Vt,Ae),pe=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,pe&&N.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),Le===!0&&J.beginShadows();let W=_.state.shadowsArray;if(ct.render(W,E,U),Le===!0&&J.endShadows(),(H&&C.hasRenderPass())===!1){let Tt=A.opaque,dt=A.transmissive;if(_.setupLights(),U.isArrayCamera){let _t=U.cameras;if(dt.length>0)for(let It=0,Jt=_t.length;It<Jt;It++){let se=_t[It];Yh(Tt,dt,E,se)}pe&&N.render(E);for(let It=0,Jt=_t.length;It<Jt;It++){let se=_t[It];$h(A,E,se,se.viewport)}}else dt.length>0&&Yh(Tt,dt,E,U),pe&&N.render(E),$h(A,E,U)}tt!==null&&O===0&&(Wt.updateMultisampleRenderTarget(tt),Wt.updateRenderTargetMipmap(tt)),H&&C.end(T),E.isScene===!0&&E.onAfterRender(T,E,U),lt.resetDefaultState(),q=-1,Z=null,M.pop(),M.length>0?(_=M[M.length-1],Wt.setTextureUnits(_.state.textureUnits),Le===!0&&J.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function Kl(E,U,X,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){let Tt=U.isArrayCamera?Be:jt;if(!E.frustumCulled||E.intersectsFrustum(Tt)){H&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);let dt=it.update(E),_t=E.material;_t.visible&&A.push(E,dt,_t,X,Fe.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Tt=U.isArrayCamera?Be:jt;if(!E.frustumCulled||E.intersectsFrustum(Tt)){let dt=it.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Fe.copy(dt.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(_t)){let It=dt.groups;for(let Jt=0,se=It.length;Jt<se;Jt++){let At=It[Jt],re=_t[At.materialIndex];re&&re.visible&&A.push(E,dt,re,X,Fe.z,At,U)}}else _t.visible&&A.push(E,dt,_t,X,Fe.z,null,U)}}}let pt=E.children;for(let Tt=0,dt=pt.length;Tt<dt;Tt++)Kl(pt[Tt],U,X,H)}function $h(E,U,X,H){let{opaque:W,transmissive:pt,transparent:Tt}=E;_.setupLightsView(X),Le===!0&&J.setGlobalState(T.clippingPlanes,X),H&&at.viewport(et.copy(H)),W.length>0&&ga(W,U,X),pt.length>0&&ga(pt,U,X),Tt.length>0&&ga(Tt,U,X),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Yh(E,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[H.id]===void 0){let At=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[H.id]=new Ei(1,1,{generateMipmaps:!0,type:At?qi:_i,minFilter:Ri,samples:Math.max(4,_e.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let pt=_.state.transmissionRenderTarget[H.id],Tt=H.viewport||et;pt.setSize(Tt.z*T.transmissionResolutionScale,Tt.w*T.transmissionResolutionScale);let dt=T.getRenderTarget(),_t=T.getActiveCubeFace(),It=T.getActiveMipmapLevel();T.setRenderTarget(pt),T.getClearColor($),gt=T.getClearAlpha(),gt<1&&T.setClearColor(16777215,.5),T.clear(),pe&&N.render(X);let Jt=T.toneMapping;T.toneMapping=sn;let se=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),_.setupLightsView(H),Le===!0&&J.setGlobalState(T.clippingPlanes,H),ga(E,X,H),Wt.updateMultisampleRenderTarget(pt),Wt.updateRenderTargetMipmap(pt),de.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let re=0,Oe=U.length;re<Oe;re++){let Se=U[re],{object:Me,geometry:ii,material:Rt,group:hi}=Se;if(Rt.side===nn&&Me.layers.test(H.layers)){let ue=Rt.side;Rt.side=ei,Rt.needsUpdate=!0,Zh(Me,X,H,ii,Rt,hi),Rt.side=ue,Rt.needsUpdate=!0,At=!0}}At===!0&&(Wt.updateMultisampleRenderTarget(pt),Wt.updateRenderTargetMipmap(pt))}T.setRenderTarget(dt,_t,It),T.setClearColor($,gt),se!==void 0&&(H.viewport=se),T.toneMapping=Jt}function ga(E,U,X){let H=U.isScene===!0?U.overrideMaterial:null;for(let W=0,pt=E.length;W<pt;W++){let Tt=E[W],{object:dt,geometry:_t,group:It}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&H!==null&&(Jt=H),dt.layers.test(X.layers)&&Zh(dt,U,X,_t,Jt,It)}}function Zh(E,U,X,H,W,pt){z!==null&&W.isNodeMaterial&&z.setObject(E,W),E.onBeforeRender(T,U,X,H,W,pt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(T,U,X,H,E,pt),W.transparent===!0&&W.side===nn&&W.forceSinglePass===!1?(W.side=ei,W.needsUpdate=!0,T.renderBufferDirect(X,U,H,W,E,pt),W.side=kn,W.needsUpdate=!0,T.renderBufferDirect(X,U,H,W,E,pt),W.side=nn):T.renderBufferDirect(X,U,H,W,E,pt),E.onAfterRender(T,U,X,H,W,pt)}function Kh(E){let U=0;for(let X of E)X.texture!==null&&U++;return U}function nr(E,U,X){U.isScene!==!0&&(U=Nt);let H=Dt.get(E),W=_.state.lights,pt=_.state.shadowsArray,Tt=W.state.version,dt=Q.getParameters(E,W.state,pt,U,X,_.state.lightProbeGridArray),_t=Q.getProgramCacheKey(dt),It=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=P.get(E.envMap||H.environment,Jt),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",me),It=new Map,H.programs=It,H.programVariants=new Map);let se=It.get(_t);if(se!==void 0){if(H.currentProgram===se&&H.lightsStateVersion===Tt)return jh(E,dt),se}else dt.uniforms=Q.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,X,dt),E.onBeforeCompile(dt,T),se=Q.acquireProgram(dt,_t),It.set(_t,se),H.uniforms=dt.uniforms;let At=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=J.uniform),jh(E,dt),H.needsLights=$f(E),H.lightsStateVersion=Tt,H.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=Kh(_.state.lightProbeGridArray),H.currentProgram=se,H.uniformsList=null,se}function Wf(E,U,X,H,W){let pt=Dt.get(E),Tt=pt.currentProgram.id+","+H+","+W,dt=pt.programVariants.get(Tt);return dt===void 0?(dt=nr(E,U,X),pt.programVariants.set(Tt,dt)):(pt.currentProgram=dt,pt.uniformsList=null,pt.outputColorSpace=H,pt.toneMapping=W),dt}function Jh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function jh(E,U){let X=Dt.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function qf(E,U,X,H,W){U.isScene!==!0&&(U=Nt),Wt.resetTextureUnits();let pt=U.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,dt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ae.workingColorSpace,_t=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=P.get(H.envMap||Tt,_t),Jt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,se=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,Oe=!!X.morphAttributes.color,Se=sn;H.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Se=T.toneMapping);let Me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ii=Me!==void 0?Me.length:0,Rt=Dt.get(H),hi=_.state.lights;if(Le===!0&&($e===!0||E!==Z)){let De=E===Z&&H.id===q;J.setState(H,E,De)}let ue=!1,Zn=!1;H.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==hi.state.version||W.isBatchedMesh&&Rt.batching===!1||!W.isBatchedMesh&&Rt.batching===!0||W.isBatchedMesh&&Rt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Rt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Rt.instancing===!1||!W.isInstancedMesh&&Rt.instancing===!0||W.isSkinnedMesh&&Rt.skinning===!1||!W.isSkinnedMesh&&Rt.skinning===!0||W.isInstancedMesh&&Rt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Rt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Rt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Rt.instancingMorph===!1&&W.morphTexture!==null||Rt.envMap!==It||H.fog===!0&&Rt.fog!==pt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==J.numPlanes||Rt.numIntersection!==J.numIntersection)||Rt.vertexAlphas!==Jt||Rt.vertexTangents!==se||Rt.morphTargets!==At||Rt.morphNormals!==re||Rt.morphColors!==Oe||Rt.morphTargetsCount!==ii||Rt.numLightProbeGrids!==Kh(_.state.lightProbeGridArray)?ue=!0:(Rt.outputColorSpace!==dt||Rt.toneMapping!==Se)&&(Zn=!0):(ue=!0,Rt.__version=H.version);let ni=Rt.currentProgram;(ue===!0||Zn===!0)&&(ni=Zn===!0?Wf(H,U,W,dt,Se):nr(H,U,W),z&&H.isNodeMaterial&&z.onUpdateProgram(H,ni,Rt));let xa=!1,bn=!1,Kn=!1,ce=ni.getUniforms(),ti=Rt.uniforms;if(at.useProgram(ni.program)&&(xa=!0,bn=!0,Kn=!0),H.id!==q&&(q=H.id,bn=!0),xa||Z!==E){at.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(B,"projectionMatrix",E.projectionMatrix),ce.setValue(B,"viewMatrix",E.matrixWorldInverse);let Ze=ce.map.cameraPosition;Ze!==void 0&&Ze.setValue(B,Li.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&ce.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,bn=!0,Kn=!0)}if(Rt.needsLights&&(hi.state.sunShadowMap.length>0&&ce.setValue(B,"sunShadowMap",hi.state.sunShadowMap,Wt),hi.state.directionalShadowMap.length>0&&ce.setValue(B,"directionalShadowMap",hi.state.directionalShadowMap,Wt),hi.state.spotShadowMap.length>0&&ce.setValue(B,"spotShadowMap",hi.state.spotShadowMap,Wt),hi.state.pointShadowMap.length>0&&ce.setValue(B,"pointShadowMap",hi.state.pointShadowMap,Wt)),W.isSkinnedMesh){ce.setOptional(B,W,"bindMatrix"),ce.setOptional(B,W,"bindMatrixInverse");let De=W.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ce.setValue(B,"boneTexture",De.boneTexture,Wt))}W.isBatchedMesh&&(ce.setOptional(B,W,"batchingTexture"),ce.setValue(B,"batchingTexture",W._matricesTexture,Wt),ce.setOptional(B,W,"batchingIdTexture"),ce.setValue(B,"batchingIdTexture",W._indirectTexture,Wt),ce.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&ce.setValue(B,"batchingColorTexture",W._colorsTexture,Wt));let Bi=X.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&j.update(W,X,ni),(bn||Rt.receiveShadow!==W.receiveShadow)&&(Rt.receiveShadow=W.receiveShadow,ce.setValue(B,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=Yy()),bn){if(ce.setValue(B,"toneMappingExposure",T.toneMappingExposure),Rt.needsLights&&Xf(ti,Kn),pt&&H.fog===!0&&ot.refreshFogUniforms(ti,pt),ot.refreshMaterialUniforms(ti,H,xt,Ft,_.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let De=b,Ze=0;for(let on of _.state.lightProbeGridArray)on.texture!==null&&(De.textures[Ze]=on.texture,De.min[Ze]=on.boundingBox.min,De.max[Ze]=on.boundingBox.max,De.resolution[Ze]=on.resolution,Ze++);for(let on in De)De[on].length=Ze;ti.probesSH.value=De.textures,ti.probesMin.value=De.min,ti.probesMax.value=De.max,ti.probesResolution.value=De.resolution}Xs.upload(B,Jh(Rt),ti,Wt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xs.upload(B,Jh(Rt),ti,Wt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(B,"center",W.center),ce.setValue(B,"modelViewMatrix",W.modelViewMatrix),ce.setValue(B,"normalMatrix",W.normalMatrix),ce.setValue(B,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let De=H.uniformsGroups;for(let Ze=0,on=De.length;Ze<on;Ze++){let tu=De[Ze];zt.update(tu,ni),zt.bind(tu,ni)}}return ni}function Xf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function $f(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,U,X){let H=Dt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Dt.get(E.texture).__webglTexture=U,Dt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let X=Dt.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){tt=E,G=U,O=X;let H=null,W=!1,pt=!1;if(E){let dt=Dt.get(E);if(dt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(B.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(E.viewport),mt.copy(E.scissor),$t=E.scissorTest,at.viewport(et),at.scissor(mt),at.setScissorTest($t),q=-1;return}else if(dt.__webglFramebuffer===void 0)Wt.setupRenderTarget(E);else if(dt.__hasExternalTextures)Wt.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Jt=E.depthTexture;if(dt.__boundDepthTexture!==Jt){if(Jt!==null&&Dt.has(Jt)&&(E.width!==Jt.image.width||E.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(E)}}let _t=E.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(pt=!0);let It=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?H=It[U][X]:H=It[U],W=!0):E.samples>0&&Wt.useMultisampledRTT(E)===!1?H=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[X]:H=It,et.copy(E.viewport),mt.copy(E.scissor),$t=E.scissorTest}else et.copy(kt).multiplyScalar(xt).floor(),mt.copy(le).multiplyScalar(xt).floor(),$t=he;if(X!==0&&(H=F),at.bindFramebuffer(B.FRAMEBUFFER,H)&&at.drawBuffers(E,H),at.viewport(et),at.scissor(mt),at.setScissorTest($t),W){let dt=Dt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,X)}else if(pt){let dt=U;for(let _t=0;_t<E.textures.length;_t++){let It=Dt.get(E.textures[_t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+_t,It.__webglTexture,X,dt)}}else if(E!==null&&X!==0){let dt=Dt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,X)}q=-1};function Qh(E){let U=Dt.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=_e.textureFormatReadable(E.format),U.__typeReadable=_e.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,H,W,pt,Tt,dt=0){if(!(E&&E.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(_t=_t[Tt],Array.isArray(_t)&&(_t=_t[0])),_t){at.bindFramebuffer(B.FRAMEBUFFER,_t);try{let It=E.textures[dt],Jt=It.format,se=It.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt);let At=Qh(It);if(At.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&X>=0&&X<=E.height-W&&B.readPixels(U,X,H,W,rt.convert(Jt),rt.convert(se),pt)}finally{let It=tt!==null?Dt.get(tt).__webglFramebuffer:null;at.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,H,W,pt,Tt,dt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(_t=_t[Tt],Array.isArray(_t)&&(_t=_t[0])),_t)if(U>=0&&U<=E.width-H&&X>=0&&X<=E.height-W){at.bindFramebuffer(B.FRAMEBUFFER,_t);let It=E.textures[dt],Jt=It.format,se=It.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+dt);let At=Qh(It);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.bufferData(B.PIXEL_PACK_BUFFER,pt.byteLength,B.STREAM_READ),B.readPixels(U,X,H,W,rt.convert(Jt),rt.convert(se),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Oe=tt!==null?Dt.get(tt).__webglFramebuffer:null;at.bindFramebuffer(B.FRAMEBUFFER,Oe);let Se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await yd(B,Se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(re),B.deleteSync(Se),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){let H=Math.pow(2,-X),W=Math.floor(E.image.width*H),pt=Math.floor(E.image.height*H),Tt=U!==null?U.x:0,dt=U!==null?U.y:0;Wt.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Tt,dt,W,pt),at.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,H=null,W=0,pt=0){let Tt,dt,_t,It,Jt,se,At,re,Oe,Se=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(X!==null)Tt=X.max.x-X.min.x,dt=X.max.y-X.min.y,_t=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Jt=X.min.y,se=X.isBox3?X.min.z:0;else{let ce=Math.pow(2,-W);Tt=Math.floor(Se.width*ce),dt=Math.floor(Se.height*ce),E.isDataArrayTexture?_t=Se.depth:E.isData3DTexture?_t=Math.floor(Se.depth*ce):_t=1,It=0,Jt=0,se=0}H!==null?(At=H.x,re=H.y,Oe=H.z):(At=0,re=0,Oe=0);let Me=rt.convert(U.format),ii=rt.convert(U.type),Rt;U.isData3DTexture?(Wt.setTexture3D(U,0),Rt=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Wt.setTexture2DArray(U,0),Rt=B.TEXTURE_2D_ARRAY):(Wt.setTexture2D(U,0),Rt=B.TEXTURE_2D),at.activeTexture(B.TEXTURE0),at.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),at.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),at.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let hi=at.getParameter(B.UNPACK_ROW_LENGTH),ue=at.getParameter(B.UNPACK_IMAGE_HEIGHT),Zn=at.getParameter(B.UNPACK_SKIP_PIXELS),ni=at.getParameter(B.UNPACK_SKIP_ROWS),xa=at.getParameter(B.UNPACK_SKIP_IMAGES);at.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),at.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),at.pixelStorei(B.UNPACK_SKIP_PIXELS,It),at.pixelStorei(B.UNPACK_SKIP_ROWS,Jt),at.pixelStorei(B.UNPACK_SKIP_IMAGES,se);let bn=E.isDataArrayTexture||E.isData3DTexture,Kn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let ce=Dt.get(E),ti=Dt.get(U),Bi=Dt.get(ce.__renderTarget),De=Dt.get(ti.__renderTarget);at.bindFramebuffer(B.READ_FRAMEBUFFER,Bi.__webglFramebuffer),at.bindFramebuffer(B.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ze=0;Ze<_t;Ze++)bn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,W,se+Ze),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,pt,Oe+Ze)),B.blitFramebuffer(It,Jt,It+Tt,Jt+dt,At,re,At+Tt,re+dt,B.DEPTH_BUFFER_BIT,B.NEAREST);at.bindFramebuffer(B.READ_FRAMEBUFFER,null),at.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Dt.has(E)){let ce=Dt.get(E),ti=Dt.get(U);at.bindFramebuffer(B.READ_FRAMEBUFFER,R),at.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let Bi=0;Bi<_t;Bi++)bn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.__webglTexture,W,se+Bi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ce.__webglTexture,W),Kn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ti.__webglTexture,pt,Oe+Bi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ti.__webglTexture,pt),W!==0?B.blitFramebuffer(It,Jt,It+Tt,Jt+dt,At,re,At+Tt,re+dt,B.COLOR_BUFFER_BIT,B.NEAREST):Kn?B.copyTexSubImage3D(Rt,pt,At,re,Oe+Bi,It,Jt,Tt,dt):B.copyTexSubImage2D(Rt,pt,At,re,It,Jt,Tt,dt);at.bindFramebuffer(B.READ_FRAMEBUFFER,null),at.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Kn?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Rt,pt,At,re,Oe,Tt,dt,_t,Me,ii,Se.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,pt,At,re,Oe,Tt,dt,_t,Me,Se.data):B.texSubImage3D(Rt,pt,At,re,Oe,Tt,dt,_t,Me,ii,Se):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pt,At,re,Tt,dt,Me,ii,Se.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pt,At,re,Se.width,Se.height,Me,Se.data):B.texSubImage2D(B.TEXTURE_2D,pt,At,re,Tt,dt,Me,ii,Se);at.pixelStorei(B.UNPACK_ROW_LENGTH,hi),at.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue),at.pixelStorei(B.UNPACK_SKIP_PIXELS,Zn),at.pixelStorei(B.UNPACK_SKIP_ROWS,ni),at.pixelStorei(B.UNPACK_SKIP_IMAGES,xa),pt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Rt),at.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&Wt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Wt.setTextureCube(E,0):E.isData3DTexture?Wt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Wt.setTexture2DArray(E,0):Wt.setTexture2D(E,0),at.unbindTexture()},this.resetState=function(){G=0,O=0,tt=null,at.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function lf(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ne=class{constructor(t=Date.now()){this.f=lf(t)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.f()*t.length)]}chance(t){return this.f()<t}shuffle(t){for(let e=t.length-1;e>0;e--){let i=Math.floor(this.f()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}};function Gn(r){let t=lf(r),e=new Uint8Array(256);for(let a=0;a<256;a++)e[a]=a;for(let a=255;a>0;a--){let o=Math.floor(t()*(a+1)),l=e[a];e[a]=e[o],e[o]=l}let i=new Uint8Array(512);for(let a=0;a<512;a++)i[a]=e[a&255];let n=(a,o,l)=>{switch(a&7){case 0:return o+l;case 1:return-o+l;case 2:return o-l;case 3:return-o-l;case 4:return o;case 5:return-o;case 6:return l;default:return-l}},s=a=>a*a*a*(a*(a*6-15)+10);return(a,o)=>{let l=Math.floor(a),c=Math.floor(o),h=l&255,u=c&255;a-=l,o-=c;let d=s(a),f=s(o),p=i[h]+u,y=i[h+1]+u,m=n(i[p],a,o),g=n(i[y],a-1,o),v=n(i[p+1],a,o-1),w=n(i[y+1],a-1,o-1),b=m+d*(g-m),A=v+d*(w-v);return b+f*(A-b)}}function Ys(r,t,e,i=4,n=2,s=.5){let a=0,o=1,l=1,c=0;for(let h=0;h<i;h++)a+=r(t*l,e*l)*o,c+=o,o*=s,l*=n;return a/c}function pi(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}var oa={klein:{name:"Klein",size:82},mittel:{name:"Mittel",size:110},gross:{name:"Gro\xDF",size:148}},Qe=18,Eh=7,Sl=100/17*.75,cf=3.4,Xi=["Rekrut","Gefreiter","Zugsf\xFChrer","Wachtmeister","Leutnant","Hauptmann"],Zy=["Rekr.","Gfr.","Zgf.","Wm.","Lt.","Hptm."],Zs=[100,110,120,135,150,170],la=[0,3,5,7,10,14],Wn={schwer:{name:"Schwere Waffen",icon:"\u{1F4A5}",titles:["Kanonier","M\xF6rsersch\xFCtze","Artillerist"],desc:"Bumst ordentlich: Panzerfaust, Granatwerfer, MG und am End die Haubitze."},pionier:{name:"Pioniere",icon:"\u{1F9E8}",titles:["Pionier","Sprengmeister","Saboteur"],desc:"Kuhfladen-Minen, Sprengladungen, Bretterverschlag, Maulwurfgang und der Obstler-Flammenwerfer."},sani:{name:"Sanit\xE4t",icon:"\u{1FA79}",titles:["Sanit\xE4ter","Feldsanit\xE4ter","Sanit\xE4tsmeister"],desc:"Flickt die eigenen Leut z'samm \u2013 und schmei\xDFt mit G\xFClle."},jaeger:{name:"J\xE4ger",icon:"\u{1F3AF}",titles:["J\xE4ger","Scharfsch\xFCtze","Jagdkommando"],desc:"Pr\xE4zise und hinterfotzig: Jagdflinte, Scharfsch\xFCtzengewehr, Fallschirm, Maulwurfgang, Abfangj\xE4ger."}},Ky=["Held","Legende"];function qn(r){return r.tier===0?"Rekrut":r.tier>=4?Ky[r.tier-4]:Wn[r.branch].titles[r.tier-1]}function hf(r){return`${Zy[r.tier]} ${r.name}`}var Kt={kopfnuss:{name:"Kopfnuss",icon:"\u{1F42E}",type:"melee",dmg:22,dmgStier:30,range:2.3,knock:8,desc:"H\xF6rner voraus! Stiere hauen fester zu. Ideal, um wen ins Wasser zu schupfen."},pistole:{name:"Dienstpistole",icon:"\u{1F52B}",type:"hitscan",shots:2,dmg:9,spread:1.2,range:45,interval:.28,desc:"Klein, aber gemein. Geht nie aus."},gewehr:{name:"Sturmgewehr",icon:"\u{1FA96}",type:"hitscan",shots:5,dmg:8,spread:1.8,range:60,interval:.12,desc:"F\xFCnf Schuss, a bissl Streuung, viel Gf\xFChl."},mg:{name:"Maschinengewehr",icon:"\u2699\uFE0F",type:"hitscan",shots:14,dmg:5,spread:3.2,range:55,interval:.075,desc:"Rattert wia a Traktor im Winter."},flinte:{name:"Jagdflinte",icon:"\u{1F98C}",type:"hitscan",shots:1,pellets:8,dmg:6,spread:6,range:22,interval:0,desc:"Schrot auf kurze Distanz. Da J\xE4ger sagt: Waidmannsheil!"},sniper:{name:"Scharfsch\xFCtzengewehr",icon:"\u{1F3AF}",type:"hitscan",shots:1,dmg:48,spread:0,range:130,interval:0,zoom:!0,desc:"Ein Schuss, ein Treffer. Kopftreffer tun extra weh."},granate:{name:"Handgranate",icon:"\u{1F4A3}",type:"ballistic",speed:19,fuse:3,bounce:.42,radius:3.6,dmg:42,wind:.35,mesh:"granate",throw:!0,desc:"Drei Sekunden Z\xFCnder. H\xFCpft gern no a bissl."},splitter:{name:"Splittergranate",icon:"\u{1F386}",type:"ballistic",speed:18,fuse:2.5,bounce:.4,radius:3,dmg:26,wind:.35,cluster:{n:5,radius:2.4,dmg:19},mesh:"granate",throw:!0,desc:"Zerplatzt in f\xFCnf kleine Gemeinheiten."},guelle:{name:"G\xFCllebombe",icon:"\u{1F4A9}",type:"ballistic",speed:17,fuse:2.5,bounce:.3,radius:2.6,dmg:12,wind:.4,gas:{radius:4.6,dmg:10,turns:3},mesh:"guelle",throw:!0,desc:"A Fassl frische G\xFClle. Die Wolke stinkt drei Runden lang und frisst Lebenspunkte."},heiligekuh:{name:"Heilige-Kuh-Bombe",icon:"\u{1F514}",type:"ballistic",speed:14,fuse:4,bounce:.25,radius:9,dmg:95,wind:.2,mesh:"glocke",throw:!0,desc:"A riesige Kuhglocke voller Sprengstoff. Heilig is do gar nix."},panzerfaust:{name:"Panzerfaust",icon:"\u{1F680}",type:"ballistic",speed:34,impact:!0,radius:3.8,dmg:50,wind:1,mesh:"rakete",tube:!0,desc:"Explodiert beim Aufschlag. Da Wind mag sie besonders."},moerser:{name:"Granatwerfer",icon:"\u{1F387}",type:"ballistic",speed:27,impact:!0,radius:4.8,dmg:58,wind:.8,mesh:"moerser",tube:!0,minPitch:35,desc:"Hoher Bogen, gro\xDFes Loch. \xDCber H\xFCgel dr\xFCber schie\xDFen!"},mistgabel:{name:"Mistgabel",icon:"\u{1F531}",type:"ballistic",speed:24,impact:!0,pierce:!0,radius:1.2,dmg:46,wind:.25,mesh:"gabel",throw:!0,desc:"Frisch vom Misthaufen. Wer getroffen wird, hat drei L\xF6cher mehr. Daneben bleibt sie halt im Boden stecken."},wespen:{name:"Wespennest",icon:"\u{1F41D}",type:"ballistic",speed:18,impact:!0,radius:1.6,dmg:6,wind:.4,swarm:{range:16,dmg:28,speed:6.5,life:7},mesh:"nest",throw:!0,desc:"Nach dem Aufprall sucht si da Schwarm den n\xE4chsten Gegner im Umkreis. Stichig, grantig, unaufhaltsam."},traktor:{name:"Amok-Traktor",icon:"\u{1F69C}",type:"drive",speed:6.5,time:5.5,radius:4.6,dmg:56,desc:"Ohne Fahrer, ohne Bremse, voller Sprengstoff. Fahrt gradaus, bis er wo anrennt \u2013 Hang, Baum oder Gegner."},mine:{name:"Kuhfladen-Mine",icon:"\u{1F7E4}",type:"place",radius:3.4,dmg:45,desc:"Schaut aus wia a Kuhfladen. Is aber kana. Scharf ab der n\xE4chsten Runde."},tnt:{name:"Sprengladung",icon:"\u{1F9E8}",type:"place",fuse:3,radius:5.5,dmg:65,desc:"Hinlegen, weglaufen. Drei Sekunden, dann gibt's a Loch.",endsTurn:!0},flammen:{name:"Obstler-Flammenwerfer",icon:"\u{1F525}",type:"cone",range:8,angle:24,dmg:34,desc:"Selbstbrand vom Onkel, 80 Prozent. Brennt besser als er schmeckt."},jause:{name:"Brettljause",icon:"\u{1F968}",type:"heal",amount:40,desc:"Speck, Kas und a Pfefferoni: +40 Lebenspunkte f\xFCr den Sch\xFCtzen."},lazarett:{name:"Feldlazarett",icon:"\u{1F3E5}",type:"heal",amount:30,area:9,desc:"Heilt alle eigenen Leut im Umkreis um 30."},sprung:{name:"Fallschirmsprung",icon:"\u{1FA82}",type:"jump",range:32,endsTurn:!1,desc:"Zielpunkt antippen und hinfliegen. Danach darfst no schie\xDFen."},verschlag:{name:"Bretterverschlag",icon:"\u{1F6D6}",type:"build",hp:90,desc:"Vier W\xE4nd und a Dach aus alten Stadlbrettern. Schluckt Splitter und Kugeln, bis er z'sammfallt. Rausschie\xDFen geht \u2013 reingehen kann a jeder."},schaufel:{name:"Eingraben",icon:"\u26CF\uFE0F",type:"dig",depth:.85,desc:"Rein ins Loch, nur mehr Sch\xE4dl und H\xF6rner schauen raus: halber Explosionsschaden, kaum R\xFCcksto\xDF, Kugeln treffen nur den Kopf. Wer weggeht, steigt aus."},maulwurf:{name:"Maulwurfgang",icon:"\u{1F573}\uFE0F",type:"jump",tunnel:!0,range:26,endsTurn:!1,desc:"Unterirdisch zum Zielpunkt graben. Unters Wasser geht's ned. Danach darfst no schie\xDFen."},haubitze:{name:"Haubitzenfeuer",icon:"\u{1F3AF}",type:"strike",shells:4,scatter:4,radius:4.5,dmg:45,desc:"Zielpunkt auf der Karte w\xE4hlen. Vier Granaten vom Himmel."},jet:{name:"Abfangj\xE4ger",icon:"\u2708\uFE0F",type:"strike",bombs:6,spacing:3,radius:3.6,dmg:38,dudChance:.06,desc:"Bombenteppich entlang der Blickrichtung. Falls er \xFCberhaupt startet."}},El=["kopfnuss","pistole","gewehr","mg","flinte","sniper","mistgabel","granate","splitter","guelle","wespen","panzerfaust","moerser","heiligekuh","traktor","mine","tnt","flammen","jause","lazarett","sprung","maulwurf","schaufel","verschlag","haubitze","jet"],wl={rekrut:{gewehr:2,granate:2,mistgabel:1},schwer:[{gewehr:3,granate:2,panzerfaust:2,mistgabel:1},{gewehr:3,granate:2,panzerfaust:3,moerser:2,mg:2,mistgabel:1},{gewehr:3,granate:3,panzerfaust:3,moerser:3,mg:3,haubitze:1,traktor:1}],pionier:[{gewehr:2,granate:3,mine:2,mistgabel:1,verschlag:1,maulwurf:1},{gewehr:2,granate:3,mine:3,tnt:2,splitter:2,traktor:1,verschlag:2,maulwurf:2},{gewehr:3,granate:3,mine:3,tnt:3,splitter:3,flammen:2,traktor:2,verschlag:3,maulwurf:3}],sani:[{gewehr:2,granate:2,jause:2,guelle:1,mistgabel:1},{gewehr:2,granate:2,jause:3,guelle:2,lazarett:1,wespen:1},{gewehr:3,granate:2,jause:3,guelle:3,lazarett:2,splitter:2,wespen:2}],jaeger:[{flinte:3,sniper:1,granate:2,mistgabel:2},{flinte:3,sniper:3,granate:2,sprung:2,mistgabel:2,wespen:1,maulwurf:1},{flinte:3,sniper:4,granate:2,sprung:3,mine:2,jet:1,mistgabel:3,wespen:1,maulwurf:1}],held:{gewehr:3,granate:3,panzerfaust:3,moerser:2,mg:2,sniper:2,splitter:2,jause:2,sprung:2,mine:2,mistgabel:2,wespen:1,traktor:1,verschlag:1,maulwurf:1},legende:{gewehr:3,granate:3,panzerfaust:4,moerser:3,mg:2,sniper:3,splitter:2,jause:2,sprung:2,mine:2,heiligekuh:1,haubitze:1,jet:1,mistgabel:2,wespen:2,traktor:2,verschlag:2,maulwurf:2}};function Tl(r){let t;return r.tier===0?t=wl.rekrut:r.tier===4?t=wl.held:r.tier===5?t=wl.legende:t=wl[r.branch][r.tier-1],{kopfnuss:-1,pistole:-1,schaufel:2,...t}}var Th=[["granate",2],["panzerfaust",1],["moerser",1],["splitter",1],["sniper",1],["mine",1],["guelle",1],["sprung",1],["gewehr",2],["flammen",1],["jet",1],["heiligekuh",1],["mistgabel",2],["wespen",1],["traktor",1],["verschlag",1],["maulwurf",1],["schaufel",1]],Pi=[{id:"wien",name:"Wiener Grantlergarde",short:"Wien",color:"#e53935",motto:"Passt scho. Oder ah ned."},{id:"noe",name:"Weinviertler Landwehr",short:"N\xD6",color:"#1e88e5",motto:"A Achterl geht imma."},{id:"ooe",name:"M\xFChlviertler Mostsch\xE4dln",short:"O\xD6",color:"#fb8c00",motto:"Most is a Grundnahrungsmittel."},{id:"stmk",name:"Steirische Kern\xF6lkompanie",short:"Stmk",color:"#43a047",motto:"Gl\xFCck auf und Kern\xF6l drauf!"},{id:"sbg",name:"Salzburger Nockerl-Kommando",short:"Sbg",color:"#ec407a",motto:"S\xFC\xDF, aber hinterfotzig."},{id:"tirol",name:"Tiroler Almj\xE4ger",short:"Tirol",color:"#00acc1",motto:"Zruck geht's nur bergab."},{id:"vbg",name:"Gsiberger K\xE4skn\xF6pfle-Korps",short:"Vbg",color:"#fdd835",motto:"Schaffa, schaffa, Watschn verteila."},{id:"ktn",name:"K\xE4rntner Kasnudl-Kavallerie",short:"Ktn",color:"#8e24aa",motto:"Z'erst gsungen, dann gschossn."},{id:"bgld",name:"Seewinkler Weinbrigade",short:"Bgld",color:"#8d6e63",motto:"Flach is des Land, scharf is da Stier."},{id:"wvtl",name:"Waldviertler Mohnzuzler",short:"WV",color:"#5f7d95",motto:"A Mohnzuzl, a Ruah \u2013 und dann kracht's."}],Mi=r=>Pi.find(t=>t.id===r)||Pi[0],uf=["Resi","Mitzi","Burgi","Gretl","Liesl","Vroni","Zenzi","Kathi","Fanny","Rosl","Leni","Traudl","Hermine","Gusti","Mali","Moni","Steffi","Elfi","Erna","Frieda","Hedi","Lotti","Waltraud","Christl","Anni","Wetti"],df=["Ferdl","Sepp","Schorsch","Wastl","Toni","Franzl","Gustl","Hias","Pepi","Rudi","Bertl","Karli","Lois","Poldi","Hansi","Ernstl","Fredl","Willi","Bartl","Sigi","Mundl","Kurtl","Joschi","Edi","Heinzi"],ff=["fleckvieh","holstein","pinzgauer","grauvieh","braunvieh"],pf=["schwarz","braunvieh","grauvieh","fleckvieh"],Vn={alm:{name:"Hochalm",amp:12,freq:2,oct:5,base:1.6,pow:1.4,peaks:[{x:.22,z:-.18,h:8,r:.15}],colors:{seabed:"#5d6b4a",sand:"#d6c592",grass1:"#4f8f2e",grass2:"#7db548",grass3:"#a9c95b",forest:"#3a6a27",rock:"#8a867e",snow:"#f2f5f7",dirt:"#4a3626",path:"#bba57a",foam:"#eef4f0"},snowLine:17,water:"#2a7aa6",waterOpacity:.8,lake:{r:10,depth:2.4},forest:.12,flowerPatches:11,life:{hasen:8,murmel:3,enten:4,falter:18,voegel:5},deco:{heumandl:6,zaun:!0,seerosen:14,rauch:!0},sky:{top:"#2f74d0",horizon:"#cfe4f5"},fog:[90,470],sun:{color:"#fff1d6",intensity:2.7,elev:48,azim:40},hemi:{sky:"#cfe8ff",ground:"#4f6236",intensity:1.15},props:{pine:60,broad:14,rock:18,bale:7,silo:5,stadl:2,marterl:2,grass:900,flowers:120},mountains:!0},weinberg:{name:"Weinberg",amp:9,freq:1.7,oct:4,base:1.8,pow:1.2,terrace:1.4,terraceSharp:.6,colors:{seabed:"#6a6550",sand:"#ddc995",grass1:"#6c9334",grass2:"#9ab24e",grass3:"#c2bb5e",forest:"#4f7a2c",rock:"#9b8a6e",snow:"#ffffff",dirt:"#5a4030",path:"#c8ad80",foam:"#f2f2ea"},snowLine:99,water:"#3a7f8f",waterOpacity:.82,lake:{r:8,depth:2.2},forest:.3,flowerPatches:8,life:{hasen:6,enten:3,falter:14,voegel:4},deco:{faesser:3,zaun:!0,seerosen:10,rauch:!0},sky:{top:"#3b7bd6",horizon:"#f3dfc0"},fog:[90,460],sun:{color:"#ffdcae",intensity:2.7,elev:30,azim:-50},hemi:{sky:"#ffe9cc",ground:"#5f5a36",intensity:1.1},props:{vine:230,broad:16,rock:8,bale:5,stadl:2,marterl:2,grass:600,flowers:80},mountains:!0},au:{name:"Donau-Au",amp:4.5,freq:2.6,oct:4,base:1.15,pow:1,ponds:3.4,colors:{seabed:"#4c5638",sand:"#9a8e62",grass1:"#467a2a",grass2:"#6c9842",grass3:"#93b456",forest:"#33602a",rock:"#6f6a5a",snow:"#ffffff",dirt:"#3e3222",path:"#a99a6c",foam:"#e8efe6"},snowLine:99,water:"#3d6b5a",waterOpacity:.88,lake:{r:9,depth:2},forest:.05,flowerPatches:8,life:{hasen:6,enten:7,falter:12,voegel:6},deco:{heumandl:4,zaun:!0,seerosen:24},sky:{top:"#7f9fb8",horizon:"#d6dfe0"},fog:[45,280],sun:{color:"#f4f0e0",intensity:2,elev:35,azim:120},hemi:{sky:"#dfe8ee",ground:"#475a32",intensity:1.25},props:{willow:30,broad:18,reed:280,rock:5,grass:800,flowers:120,stadl:1},mountains:!1},kukuruz:{name:"Kukuruzfeld",amp:4.2,freq:1.4,oct:3,base:1.8,pow:1,colors:{seabed:"#6b6a4c",sand:"#dccb94",grass1:"#78953a",grass2:"#a2aa4c",grass3:"#c7bb5a",forest:"#5d7f30",rock:"#8f8670",snow:"#ffffff",dirt:"#5b4430",path:"#c6a774",foam:"#f2f0e6"},snowLine:99,water:"#3b7a92",waterOpacity:.82,lake:{r:8,depth:2.2},forest:.35,flowerPatches:7,life:{hasen:9,enten:3,falter:14,voegel:5},deco:{sonnenblumen:150,vogelscheuche:3,zaun:!0,seerosen:8,rauch:!0},sky:{top:"#3d82dc",horizon:"#e9e6cf"},fog:[90,470],sun:{color:"#fff0c8",intensity:2.8,elev:55,azim:10},hemi:{sky:"#e6f0ff",ground:"#6b6a3a",intensity:1.1},props:{corn:650,pumpkin:60,broad:10,bale:10,silo:8,stadl:3,marterl:1,grass:350,flowers:80},mountains:!1},steinbruch:{name:"Steinbruch",amp:15,freq:2.4,oct:4,base:1.6,pow:1.3,terrace:3.2,terraceSharp:.55,rockBias:.4,colors:{seabed:"#56584c",sand:"#cfc5ae",grass1:"#6c8048",grass2:"#8e9a62",grass3:"#a9ab76",forest:"#55693a",rock:"#a29d93",snow:"#ffffff",dirt:"#55493d",path:"#bdb19c",foam:"#eef0ee"},snowLine:99,water:"#3a7290",waterOpacity:.84,lake:{r:11,depth:3},forest:.3,flowerPatches:4,life:{hasen:4,murmel:4,enten:2,falter:6,voegel:4},deco:{zaun:!0},sky:{top:"#4d82c4",horizon:"#e4ddd0"},fog:[80,430],sun:{color:"#fff3dd",intensity:2.6,elev:42,azim:-120},hemi:{sky:"#e9eef4",ground:"#6d665a",intensity:1.1},props:{rock:70,pine:12,broad:4,grass:220,flowers:30,stadl:1},mountains:!0},gletscher:{name:"Gletscher",amp:15,freq:2,oct:5,base:1.8,pow:1.3,peaks:[{x:-.2,z:.15,h:7,r:.15}],colors:{seabed:"#3a5068",sand:"#d9e2ea",grass1:"#eef3f8",grass2:"#dce6ef",grass3:"#f6f9fc",forest:"#d7e2ec",rock:"#6f7c8c",snow:"#ffffff",dirt:"#59616b",path:"#c4cfda",foam:"#ffffff"},snowLine:-10,water:"#3c78a8",waterOpacity:.86,lake:{r:9,depth:2},forest:.2,flowerPatches:0,life:{murmel:6,voegel:3},deco:{zaun:!0},sky:{top:"#4f88d4",horizon:"#e8f1fa"},fog:[70,420],sun:{color:"#ffffff",intensity:2.3,elev:28,azim:70},hemi:{sky:"#e6f0ff",ground:"#9aa8b8",intensity:1.2},props:{pineSnow:40,rock:28,stadl:1,marterl:1},mountains:!0}},Ks=["alm","weinberg","au","kukuruz","steinbruch","gletscher"];for(let r in Vn)Vn[r].id=r;var Xn=[{title:"Grundwehrdienst",theme:"alm",seed:101,player:3,ai:"easy",wind:.25,enemies:[{units:2,tiers:[0,0]}],tutorial:!0,briefing:"Servus, Rekrut! Willkommen beim Rindsviech-Bundesheer. Dr\xFCben auf da Nachbaralm hocken zwa Gfraster von der {E1} und fressen unser Heu. Des is a Frechheit. Geh umi und erkl\xE4r eana des \u2013 zur Not mit da Dienstpistoln. Und bitte: ned ins Wasser rennen, a Schwimmabzeichen is ned budgetiert."},{title:"Heuraub im Weinberg",theme:"weinberg",seed:202,player:4,ai:"easy",wind:.35,enemies:[{units:3,tiers:[0,1]}],briefing:"Die {E1} ham unsern Heuvorrat gstohln und verstecken si jetzt zwischen de Weinst\xF6ck. Da Wirt sagt, wer an Weinstock z'sammschie\xDFt, zahlt. Uns wurscht \u2013 des Heu kummt z'ruck!"},{title:"Nebel in da Au",theme:"au",seed:303,player:4,ai:"normal",wind:.3,fog:!0,enemies:[{units:3,tiers:[0,1]}],briefing:"In da Donau-Au siehst die eigenen Hufe ned. \xDCberall Wasser, Gelsen und {E1}. Wer ersauft, kriegt ka Begr\xE4bnis mit Blasmusi. Also schau, wo du hintrittst."},{title:"F\xF6hnsturm",theme:"alm",seed:404,player:4,ai:"normal",wind:.95,enemies:[{units:4,tiers:[0,1]}],briefing:"Da F\xF6hn bl\xE4st so stark, dass die Kuhfladen waagrecht fliegen. Rechnet's den Wind ein, sonst trefft's h\xF6chstens an Bauern im n\xE4chsten Tal. Die {E1} san scho seit gestern grantig."},{title:"Die Kukuruz-Offensive",theme:"kukuruz",seed:505,player:4,ai:"normal",wind:.4,enemies:[{units:4,tiers:[1,2]}],briefing:"Im Maisfeld san die {E1} eingegrabn wia da Erd\xE4pfelk\xE4fer. Holt's es raus \u2013 und wenn's geht, ohne dass des ganze Popcorn z'fr\xFCh aufgeht."},{title:"Hochwasser!",theme:"au",seed:606,player:5,ai:"normal",wind:.4,risingWater:.32,enemies:[{units:4,tiers:[1,2]}],briefing:"Es sch\xFCttet seit drei Tag. Jede Runde steigt's Wasser. Wer z'lang tr\xF6delt, kann si glei als Karpfen bewerben. Tempo, Rindsviecher \u2013 die {E1} san ah scho nerv\xF6s!"},{title:"Im alten Steinbruch",theme:"steinbruch",seed:707,player:5,ai:"normal",wind:.45,enemies:[{units:5,tiers:[1,2]}],briefing:"Im Steinbruch san die W\xE4nd steil und die {E1} bis obenhin voller Munition. Granatwerfer mitnehmen, Hirn einschalten, ned obi fallen."},{title:"Gletscherpatrouille",theme:"gletscher",seed:808,player:5,ai:"hard",wind:.55,enemies:[{units:5,tiers:[1,3]}],briefing:"Am Gletscher is so kalt, dass da Euter einfriert. Die {E1} ham si do obn verschanzt. Ziagt's eich warm an \u2013 oder schie\xDFt's eich warm."},{title:"Kirtagsrauferei",theme:"weinberg",seed:909,player:5,ai:"hard",wind:.45,enemies:[{units:4,tiers:[1,3]},{units:4,tiers:[1,3]}],briefing:"Heut gibt's a Rauferei mit drei Parteien. Die {E1} und die {E2} k\xF6nnen si a ned leiden. Lass die zwa ruhig aufeinander los \u2013 und dann putz ma die Reste weg."},{title:"Minenfeld am Kirtagsplatz",theme:"alm",seed:1010,player:5,ai:"hard",wind:.4,mines:14,enemies:[{units:5,tiers:[2,3]}],briefing:"Irgendwer hat am Kirtagsplatz Kuhfladen-Minen verteilt. Oder es san echte Kuhfladen. Wer's genau wissen will, tritt drauf. Die {E1} warten scho beim Bierzelt."},{title:"Schlacht am Glockner",theme:"gletscher",seed:1111,player:6,ai:"hard",wind:.6,enemies:[{units:6,tiers:[2,4]}],briefing:"H\xF6her geht's nimma. Die {E1} schicken ihre Veteranen. Wer do obn verliert, rollt bis nach Heiligenblut obi."},{title:"Die Mutter aller Watschn",theme:"steinbruch",seed:1212,player:6,ai:"hard",wind:.5,enemies:[{units:4,tiers:[3,5]},{units:4,tiers:[3,5]}],briefing:"Jetzt geht's um die Wurscht \u2013 und zwar um die ganze Extrawurscht. Die Elite von {E1} und {E2} gegen eich. Wer des \xFCberlebt, kriegt an Orden, a Freibier und an Platz im Heimatmuseum."}],ca={easy:{name:"Leicht",yaw:7,pitch:6,power:.11,think:.7,smart:.4,blunder:.3,windErr:.6,sloppy:.4},normal:{name:"Normal",yaw:3.5,pitch:3,power:.06,think:1,smart:.75,blunder:.16,windErr:.35,sloppy:.2},hard:{name:"Schwer",yaw:1.6,pitch:1.3,power:.028,think:1,smart:1,blunder:.07,windErr:.15,sloppy:.08}},mf={quality:"auto",sfx:.8,music:.45,aimHelp:"full",turnTime:60,camSens:1,showFps:!1,v:2};var Et=(r,t,e)=>r<t?t:r>e?e:r,Al=(r,t,e)=>r+(t-r)*e,$n=(r,t,e)=>{let i=Et((e-r)/(t-r),0,1);return i*i*(3-2*i)},ve=Math.PI/180,gf=Math.PI*2;function Js(r,t){let e=t-r;for(;e>Math.PI;)e-=gf;for(;e<-Math.PI;)e+=gf;return e}function Pt(r,t,e,i){let n=r-e,s=t-i;return Math.sqrt(n*n+s*s)}function ke(r,t,e,i){return Al(r,t,1-Math.exp(-e*i))}function Ah(){return"ontouchstart"in window||navigator.maxTouchPoints>0}function Rh(){let r=Ah(),t=Math.min(window.screen.width,window.screen.height)<820;return r&&t}function mi(r,t,e){let i=document.createElement(r);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i}function Gt(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Rl=class{constructor(t,e,i=128,n=!1,s=110){this.theme=t,this.size=s,this.half=this.size/2,this.res=i,this.cell=this.size/(i-1),this.h=new Float32Array(i*i),this.scorch=new Float32Array(i*i),this.varN=new Float32Array(i*i),this.varL=new Float32Array(i*i),this.pathMask=new Float32Array(i*i),this.decks=[],this.path=[],this.lake=null,this.waterLevel=0,this.colors={};for(let o in t.colors)this.colors[o]=new ut(t.colors[o]);this.generate(e);let a=new Ne(e*13+5);if(this.forestNoise=Gn(e+91),t.lake){let o=Math.pow(s/110,.7);this.carveLake(a,{...t.lake,r:t.lake.r*o})}this.planPath(a),this.buildMesh(n)}idx(t,e){return e*this.res+t}generate(t){let e=this.theme,i=Gn(t),n=Gn(t+17),s=Gn(t+31),a=this.res;for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=-this.half+l*this.cell,h=-this.half+o*this.cell,u=c/this.size,d=h/this.size,f=u+.09*n(u*3.1,d*3.1),p=d+.09*n(u*3.1+5.2,d*3.1+5.2),y=Math.atan2(p,f),m=1+.16*s(Math.cos(y)*1.6+7.3,Math.sin(y)*1.6+2.1),g=Math.sqrt(f*f+p*p)*2*m,v=Ys(i,f*e.freq+10,p*e.freq+10,e.oct),w=Et(v*.75+.5,0,1),b=e.base+e.amp*Math.pow(w,e.pow||1.2);if(e.peaks)for(let _ of e.peaks){let x=u-_.x,M=d-_.z;b+=_.h*Math.exp(-(x*x+M*M)/(_.r*_.r))}if(e.ponds){let _=Ys(s,u*4.5+3,d*4.5+3,2);_>.12&&(b-=(_-.12)*e.ponds*6)}if(e.terrace){let _=e.terrace,x=b/_,M=Math.floor(x);b=(M+$n(e.terraceSharp||.6,1,x-M))*_}let A=1-$n(.6,.95,g);b=b*A+-5.6*(1-A),this.h[this.idx(l,o)]=Math.max(-6,b),this.varN[this.idx(l,o)]=Ys(n,u*14,d*14,2)*.5+.5,this.varL[this.idx(l,o)]=Ys(s,u*3.2+11,d*3.2+4,3)*.5+.5}for(let o=0;o<this.h.length;o++)this.h[o]>-.2&&this.h[o]<.6&&(this.h[o]=this.h[o]*.9-.05)}heightAt(t,e){let i=this.baseHeightAt(t,e);if(this.decks.length)for(let n of this.decks){let s=t-n.ax,a=e-n.az,o=(s*n.dx+a*n.dz)/n.len;if(o<0||o>1||Math.abs(s*-n.dz+a*n.dx)>n.hw)continue;let l=this.deckY(n,o);if(l>i)return l}return i}deckY(t,e){return t.yA+(t.yB-t.yA)*e+t.arch*Math.sin(Math.PI*e)}baseHeightAt(t,e){let i=(t+this.half)/this.cell,n=(e+this.half)/this.cell,s=this.res;if(i<0||n<0||i>s-1||n>s-1)return-6;let a=Math.floor(i),o=Math.floor(n);a>s-2&&(a=s-2),o>s-2&&(o=s-2);let l=i-a,c=n-o,h=o*s+a,u=this.h[h],d=this.h[h+1],f=this.h[h+s],p=this.h[h+s+1];return(u*(1-l)+d*l)*(1-c)+(f*(1-l)+p*l)*c}normalAt(t,e,i=new D){let s=this.heightAt(t-.5,e),a=this.heightAt(t+.5,e),o=this.heightAt(t,e-.5),l=this.heightAt(t,e+.5);return i.set(s-a,2*.5,o-l).normalize()}slopeAt(t,e){let n=(this.heightAt(t+.5,e)-this.heightAt(t-.5,e))/1,s=(this.heightAt(t,e+.5)-this.heightAt(t,e-.5))/(2*.5);return Math.sqrt(n*n+s*s)}isLand(t,e,i=.35){return this.heightAt(t,e)>this.waterLevel+i}colorFor(t,e,i,n){let s=this.colors,a=this.theme,o=this.h[t],l=this.waterLevel,c=this.res,h=this.h[t-(e>0?1:0)],u=this.h[t+(e<c-1?1:0)],d=this.h[t-(i>0?c:0)],f=this.h[t+(i<c-1?c:0)],p=Math.sqrt((u-h)**2+(f-d)**2)/(2*this.cell),y=this.varN[t],m=this.varL[t];if(n.copy(s.grass1).lerp(s.grass2,Et(y*1.4-.2,0,1)),s.grass3&&n.lerp(s.grass3,$n(.55,.85,m)*.75),s.forest&&this.forestNoise){let b=-this.half+e*this.cell,A=-this.half+i*this.cell,_=this.forestAt(b,A);_>0&&n.lerp(s.forest,_*.75)}a.rockBias&&o>3&&n.lerp(s.rock,Et((o-3)/8,0,1)*a.rockBias+y*.1),o<l+.9&&n.lerp(s.sand,Et(1-(o-l-.15)/.75,0,1));let g=this.pathMask[t];g>0&&s.path&&o>l+.15&&n.lerp(s.path,g*(.8+y*.2)),s.foam&&o>l-.12&&o<l+.2&&n.lerp(s.foam,.4*(1-Math.abs(o-l-.04)/.16)*(.6+y*.4)),o<l-.4&&n.copy(s.sand).lerp(s.seabed,Et((l-.4-o)/2.5,0,1)),p>.85&&n.lerp(s.rock,$n(.85,1.45,p)),o>a.snowLine&&p<1.1&&n.lerp(s.snow,$n(a.snowLine,a.snowLine+2.5,o));let v=this.scorch[t];v>0&&n.lerp(s.dirt,v);let w=pi(e,i)*.08-.04;return n.r=Math.max(0,n.r+w),n.g=Math.max(0,n.g+w),n.b=Math.max(0,n.b+w),n}forestAt(t,e){if(!this.forestNoise)return 0;let i=Ys(this.forestNoise,t/this.size*3.3+20,e/this.size*3.3+20,3),n=this.theme.forest!==void 0?this.theme.forest:.15;return $n(n,n+.18,i)}carveLake(t,e){let i=this.res,n=this.waterLevel,s=null,a=1/0;for(let d=0;d<90;d++){let f=t.range(-this.size*.24,this.size*.24),p=t.range(-this.size*.24,this.size*.24),y=this.baseHeightAt(f,p);if(y<1.2||y>this.theme.base+this.theme.amp*.75)continue;let m=!0,g=0;for(let w=0;w<16&&m;w++){let b=w/16*Math.PI*2,A=this.baseHeightAt(f+Math.cos(b)*(e.r+7),p+Math.sin(b)*(e.r+7));A<n+1&&(m=!1),g+=A}if(!m)continue;let v=g/16+Math.hypot(f,p)*.02+t.next()*.6;v<a&&(a=v,s={x:f,z:p})}if(!s)return;let o=Gn(Math.floor(t.next()*1e6)),l=e.r,c=e.depth,h=d=>{if(d<l)return n-.05-c*(1-d/l*(d/l));let f=d-l;return n-.05+.9*(1-Math.exp(-f/1.4))+f*.2+f*f*.005},u=(d,f,p)=>{let y=Math.max(p-Math.abs(d-f),0)/p;return Math.min(d,f)-y*y*p*.25};for(let d=0;d<i;d++)for(let f=0;f<i;f++){let p=-this.half+f*this.cell,y=-this.half+d*this.cell,m=p-s.x,g=y-s.z,v=Math.sqrt(m*m+g*g);if(v>l+34)continue;let w=Math.atan2(g,m);v*=1+.13*o(Math.cos(w)*1.3+3,Math.sin(w)*1.3+3);let b=d*i+f;this.h[b]<n-.5||(this.h[b]=u(this.h[b],h(v),1.2))}this.lake={x:s.x,z:s.z,r:e.r},this.planBridge(t)}planBridge(t){let e=this.lake;for(let i=0;i<8;i++){let n=t.range(0,Math.PI*2),s=Math.cos(n),a=Math.sin(n),o=y=>{for(let m=1;m<40;m+=.5){let g=e.x+s*m*y,v=e.z+a*m*y;if(this.baseHeightAt(g,v)>this.waterLevel+.55)return{x:g+s*1.3*y,z:v+a*1.3*y}}return null},l=o(-1),c=o(1);if(!l||!c)continue;let h=Math.hypot(c.x-l.x,c.z-l.z);if(h<8||h>34)continue;let u=this.baseHeightAt(l.x,l.z)+.1,d=this.baseHeightAt(c.x,c.z)+.1;if(Math.abs(u-d)>2.5)continue;let f={ax:l.x,az:l.z,bx:c.x,bz:c.z,len:h,dx:(c.x-l.x)/h,dz:(c.z-l.z)/h,hw:1.15,yA:u,yB:d,arch:0},p=(u+d)/2;f.arch=Math.max(Math.min(1.4,h*.06),this.waterLevel+1-p),this.decks.push(f);return}}planPath(t){let e=(o,l)=>this.baseHeightAt(o,l)>this.waterLevel+.8,i=[],n=(o,l,c,h)=>{for(let u=26;u>6;u-=2){let d=o+c*u,f=l+h*u;if(e(d,f)&&Math.hypot(d,f)<this.half*.8)return{x:d,z:f}}return null};if(this.decks.length){let o=this.decks[0],l=n(o.ax,o.az,-o.dx+t.range(-.4,.4),-o.dz+t.range(-.4,.4)),c=n(o.bx,o.bz,o.dx+t.range(-.4,.4),o.dz+t.range(-.4,.4));l&&i.push(l),i.push({x:o.ax,z:o.az},{x:o.bx,z:o.bz,bridge:!0}),c&&i.push(c)}else{let o=t.range(0,Math.PI*2),l=n(0,0,Math.cos(o),Math.sin(o)),c=n(0,0,-Math.cos(o),-Math.sin(o));l&&i.push(l),i.push({x:0,z:0}),c&&i.push(c)}let s=[];for(let o=0;o<i.length-1;o++){let l=i[o],c=i[o+1];if(s.push(l),c.bridge)continue;let h=Math.hypot(c.x-l.x,c.z-l.z),u=-(c.z-l.z)/(h||1),d=(c.x-l.x)/(h||1),f=Math.floor(h/5),p=t.range(-1,1);for(let y=1;y<f;y++){let m=y/f,g=Math.sin(m*Math.PI)*p*h*.12;s.push({x:l.x+(c.x-l.x)*m+u*g,z:l.z+(c.z-l.z)*m+d*g})}}s.push(i[i.length-1]),this.path=s;let a=this.res;for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=-this.half+l*this.cell,h=-this.half+o*this.cell,u=this.distToPath(c,h);u<2.2&&(this.pathMask[o*a+l]=(1-$n(.7,1.9,u))*(.85+pi(l*3,o*7)*.15))}}distToPath(t,e){let i=1/0,n=this.path;for(let s=0;s<n.length-1;s++){let a=n[s],o=n[s+1],l=o.x-a.x,c=o.z-a.z,h=l*l+c*c||1,u=Et(((t-a.x)*l+(e-a.z)*c)/h,0,1),d=Math.hypot(t-a.x-l*u,e-a.z-c*u);d<i&&(i=d)}return i}buildMesh(t){let e=this.res,i=e*e,n=new Float32Array(i*3),s=new Float32Array(i*3),a=new Float32Array(i*3);for(let f=0;f<e;f++)for(let p=0;p<e;p++){let y=f*e+p;n[y*3]=-this.half+p*this.cell,n[y*3+1]=this.h[y],n[y*3+2]=-this.half+f*this.cell}let o=new(i>65535?Uint32Array:Uint16Array)((e-1)*(e-1)*6),l=0;for(let f=0;f<e-1;f++)for(let p=0;p<e-1;p++){let y=f*e+p,m=y+1,g=y+e,v=g+1;(p+f)%2===0?(o[l++]=y,o[l++]=g,o[l++]=m,o[l++]=m,o[l++]=g,o[l++]=v):(o[l++]=y,o[l++]=g,o[l++]=v,o[l++]=y,o[l++]=v,o[l++]=m)}let c=new Float32Array(i*2);for(let f=0;f<e;f++)for(let p=0;p<e;p++){let y=f*e+p;c[y*2]=p/(e-1),c[y*2+1]=f/(e-1)}let h=new Ee;h.setAttribute("uv",new be(c,2)),h.setAttribute("position",new be(n,3)),h.setAttribute("normal",new be(s,3)),h.setAttribute("color",new be(a,3)),h.setIndex(new be(o,1)),this.geo=h,this.updateRegion(0,0,e-1,e-1),h.computeBoundingSphere(),h.computeBoundingBox();let u=Jy(),d=t?new vi({vertexColors:!0,map:u}):new Br({vertexColors:!0,roughness:.96,metalness:0,map:u});d.color.setScalar(1.14),this.mesh=new qt(h,d),this.mesh.receiveShadow=!0,this.mesh.castShadow=!t}updateRegion(t,e,i,n){let s=this.res;t=Et(t,0,s-1),i=Et(i,0,s-1),e=Et(e,0,s-1),n=Et(n,0,s-1);let a=this.geo.attributes.position.array,o=this.geo.attributes.normal.array,l=this.geo.attributes.color.array,c=new ut,h=2*this.cell;for(let u=e;u<=n;u++)for(let d=t;d<=i;d++){let f=u*s+d;a[f*3+1]=this.h[f];let p=this.h[d>0?f-1:f],y=this.h[d<s-1?f+1:f],m=this.h[u>0?f-s:f],g=this.h[u<s-1?f+s:f],v=p-y,w=h,b=m-g,A=Math.sqrt(v*v+w*w+b*b);o[f*3]=v/A,o[f*3+1]=w/A,o[f*3+2]=b/A,this.colorFor(f,d,u,c),l[f*3]=c.r,l[f*3+1]=c.g,l[f*3+2]=c.b}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}deform(t,e,i,n){let s=this.res,a=Math.floor((t-i+this.half)/this.cell)-1,o=Math.ceil((t+i+this.half)/this.cell)+1,l=Math.floor((e-i+this.half)/this.cell)-1,c=Math.ceil((e+i+this.half)/this.cell)+1;for(let h=Math.max(0,l);h<=Math.min(s-1,c);h++)for(let u=Math.max(0,a);u<=Math.min(s-1,o);u++){let d=-this.half+u*this.cell,f=-this.half+h*this.cell,p=Math.sqrt((d-t)**2+(f-e)**2),y=h*s+u;if(p<i){let m=p/i;this.h[y]=Math.max(-6,this.h[y]-n*(Math.cos(m*Math.PI)*.5+.5))}if(p<i*1.35){let m=Et(1-p/(i*1.35),0,1)*.9;this.scorch[y]=Math.max(this.scorch[y],m)}}this.updateRegion(a-1,l-1,o+1,c+1)}scorchAt(t,e,i,n=.5){let s=this.res,a=Math.floor((t-i+this.half)/this.cell),o=Math.ceil((t+i+this.half)/this.cell),l=Math.floor((e-i+this.half)/this.cell),c=Math.ceil((e+i+this.half)/this.cell);for(let h=Math.max(0,l);h<=Math.min(s-1,c);h++)for(let u=Math.max(0,a);u<=Math.min(s-1,o);u++){let d=-this.half+u*this.cell,f=-this.half+h*this.cell,p=Math.sqrt((d-t)**2+(f-e)**2);if(p<i){let y=h*s+u;this.scorch[y]=Math.max(this.scorch[y],(1-p/i)*n)}}this.updateRegion(a-1,l-1,o+1,c+1)}refreshColors(){this.updateRegion(0,0,this.res-1,this.res-1)}raycast(t,e,i=300,n=.4){let s=0,a=0,o=new D;if(t.y<this.heightAt(t.x,t.z))return{t:0,point:t.clone()};for(;s<i;){if(o.copy(t).addScaledVector(e,s),o.y<=this.heightAt(o.x,o.z)){let l=a,c=s;for(let h=0;h<10;h++){let u=(l+c)/2;o.copy(t).addScaledVector(e,u),o.y<=this.heightAt(o.x,o.z)?c=u:l=u}return o.copy(t).addScaledVector(e,c),{t:c,point:o.clone()}}if(a=s,s+=n,o.y<-8)return null}return null}lineOfSight(t,e,i=.15){let n=e.x-t.x,s=e.y-t.y,a=e.z-t.z,o=Math.sqrt(n*n+s*s+a*a),l=Math.ceil(o/.5);for(let c=1;c<l;c++){let h=c/l,u=t.x+n*h,d=t.y+s*h,f=t.z+a*h;if(d<this.heightAt(u,f)+i)return!1}return!0}},Ch=null;function Jy(){if(Ch)return Ch;let r=256,t=new Uint8Array(r*r*4),e=new Float32Array(r*r);for(let s=0;s<r*r;s++)e[s]=Math.random();let i=(s,a)=>e[(a+r)%r*r+(s+r)%r];for(let s=0;s<r;s++)for(let a=0;a<r;a++){let o=(i(a,s)*2+i(a+1,s)+i(a,s+1)+i(a-1,s)+i(a,s-1))/6,l=i(a*3,s)>.92?.12:0;o=.8+o*.2+l;let c=Math.min(255,Math.round(o*255)),h=(s*r+a)*4;t[h]=c,t[h+1]=c,t[h+2]=c,t[h+3]=255}let n=new mn(t,r,r,fi);return n.wrapS=n.wrapT=Cn,n.repeat.set(36,36),n.magFilter=Ve,n.minFilter=Ri,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,Ch=n,n}function yf(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Ee;l.morphTargetsRelative=o;let c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==r[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=xf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let p=xf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function xf(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new be(a,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let y=h.getComponent(d,p);o.setComponent(d+u,p,y)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var vf=new Zt,_f=new Ge,Mf=new We,jy=new D,Qy=new D,Ct=Math.PI,Ot=r=>new ut(r);function tv(r,t){let e=r.attributes.position,i=r.attributes.normal,n=e.count,s=new Float32Array(n*3),a=new ut,o=new D,l=new D,c=typeof t=="function"?null:t instanceof ut?t:Ot(t);for(let h=0;h<n;h++)c?a.copy(c):(o.fromBufferAttribute(e,h),l.fromBufferAttribute(i,h),t(o,l,a)),s[h*3]=a.r,s[h*3+1]=a.g,s[h*3+2]=a.b;return r.setAttribute("color",new be(s,3)),r}function L(r,t={},e="#ffffff"){let i=r.index?r.toNonIndexed():r;i!==r&&r.dispose(),i.attributes.uv&&i.deleteAttribute("uv");let n=t.p||[0,0,0],s=t.r||[0,0,0],a=t.s||[1,1,1];return Mf.set(s[0],s[1],s[2],t.order||"XYZ"),_f.setFromEuler(Mf),vf.compose(jy.set(n[0],n[1],n[2]),_f,Qy.set(a[0],a[1],a[2])),i.applyMatrix4(vf),t.jitter&&ev(i,t.jitter,t.seed||1),tv(i,e),i}function ev(r,t,e=1){let i=r.attributes.position;for(let n=0;n<i.count;n++){let s=i.getX(n),a=i.getY(n),o=i.getZ(n),l=Math.round(s*100),c=Math.round(a*100),h=Math.round(o*100),u=pi(l+e*31,c*7+h*13),d=pi(c+e*17,h*5+l*3),f=pi(h+e*11,l*9+c*2);i.setXYZ(n,s+(u-.5)*t,a+(d-.5)*t,o+(f-.5)*t)}return r.computeVertexNormals(),r}function Lt(r){let t=yf(r,!1);return r.forEach(e=>e.dispose()),t}var Cl=null;function we(){return Cl||(Cl={unit:new Dn({vertexColors:!0,shininess:14,specular:1710618}),prop:new vi({vertexColors:!0}),item:new Dn({vertexColors:!0,shininess:40,specular:3355443}),basic:new Ui({vertexColors:!0}),glow:new Ui({color:16777215,transparent:!0,opacity:.8,depthWrite:!1})},Cl)}var bf={fleckvieh:{base:"#f3ece0",spot:"#94461f",snout:"#f1c3b0",spots:!0},holstein:{base:"#f6f6f3",spot:"#1c1c1c",snout:"#f0b9b0",spots:!0},pinzgauer:{base:"#7a3216",stripe:"#f3ece0",snout:"#e8b8a6",pinz:!0},grauvieh:{base:"#a8a398",dark:"#5a5750",snout:"#35322e"},braunvieh:{base:"#86643f",light:"#b89a74",snout:"#e7dcc8"},schwarz:{base:"#2a2321",snout:"#5c4b45"}};function wf({sex:r,breed:t,teamColor:e,tier:i=0,seed:n=1}){let s=new Ne(n),a=bf[t]||bf.fleckvieh,o=r==="stier",l=Ot(a.base),c=Ot(a.spot||a.base),h=Ot(a.snout),u=Ot(e),d=u.clone().multiplyScalar(.55),f=Ot("#2b2420"),p=Ot("#efe6cf"),y=Ot("#f2a7a0"),m=Ot("#e6b422"),g=Ot("#ffffff"),v=Ot("#121212"),w=Ot("#5a3a22"),b=Ot(a.stripe||"#ffffff"),A=Ot(a.dark||a.base),_=Ot(a.light||a.base),x=[];if(a.spots){let Nt=8+s.int(0,5);for(let pe=0;pe<Nt;pe++)x.push({x:s.range(-.45,.45),y:s.range(.5,2.15),z:s.range(-.45,.5),r:s.range(.1,.21)})}let M=(Nt,pe,Ue)=>(B,bi,de)=>{let _e=B.x+Nt,at=B.y+pe,Re=B.z+Ue;if(de.copy(l),a.spots)for(let Dt of x){let Wt=_e-Dt.x,P=at-Dt.y,S=Re-Dt.z;if(Wt*Wt+P*P+S*S<Dt.r*Dt.r){de.copy(c);break}}a.pinz&&(Re<-.18&&Math.abs(_e)<.14||Re>.2&&at<1.15&&at>.55)&&de.copy(b),a.dark&&(at<.62||at>1.85&&Re>.25)&&de.copy(A),a.light&&Re>.22&&at<1.25&&at>.6&&de.copy(_)},C=.74,T=o?.4:.36,I=we(),z=[];if(z.push(L(new di(T,.42,6,14),{p:[0,1.08,0],s:[1,1,.88]},M(0,0,0))),o&&z.push(L(new bt(.36,12,8),{p:[0,1.4,.02],s:[1.32,.8,.95]},M(0,0,0))),z.push(L(new oi(T*.98,.055,6,22),{p:[0,.84,0],r:[Ct/2,0,0],s:[1,.88,1]},u)),z.push(L(new st(.13,.1,.05),{p:[0,.84,T*.88+.03]},m)),!o){z.push(L(new bt(.12,10,8),{p:[0,.7,.2],s:[1.1,.8,.9]},y));for(let[Nt,pe]of[[-.05,.25],[.05,.25],[-.05,.15],[.05,.15]])z.push(L(new ge(.022,.08,5),{p:[Nt,.6,pe],r:[Ct,0,0]},y))}z.push(L(new oi(.21,.03,5,14),{p:[0,1.56,.03],r:[Ct/2-.3,0,0]},w)),z.push(L(new St(.055,.09,.14,8),{p:[0,1.43,T*.88+.02]},m)),z.push(L(new bt(.028,6,4),{p:[0,1.35,T*.88+.02]},Ot("#6b4a12")));let F=i>=4?m:d;for(let Nt of[-1,1])z.push(L(new st(.2,.05,.22),{p:[Nt*(T+.02),1.53,0],r:[0,0,Nt*-.35]},F));let R=[],k=o?1.12:1,G=M(0,1.62,.04);R.push(L(new bt(.27,14,10),{p:[0,.2,.05],s:[1*k,.95*k,1.05]},G)),R.push(L(new bt(.19,12,8),{p:[0,.1,.29],s:[1.15*k,.85,.85]},h));for(let Nt of[-1,1])R.push(L(new bt(.035,6,4),{p:[Nt*.075,.12,.44]},v)),R.push(L(new bt(.078,10,8),{p:[Nt*.125,.29,.27]},g)),R.push(L(new bt(.042,8,6),{p:[Nt*.13,.29,.335]},v)),R.push(L(new bt(.1,8,6),{p:[Nt*.34*k,.27,0],r:[0,0,Nt*-.35],s:[1.7,.45,.85]},G)),o?(R.push(L(new st(.15,.035,.03),{p:[Nt*.125,.385,.31],r:[0,0,Nt*.4]},v)),R.push(L(new ge(.075,.4,8),{p:[Nt*.42,.47,.03],r:[0,0,Nt*-1.1]},p)),R.push(L(new ge(.03,.12,6),{p:[Nt*.6,.6,.03],r:[0,0,Nt*-.5]},Ot("#3b332b")))):(R.push(L(new st(.1,.02,.02),{p:[Nt*.12,.38,.32],r:[0,0,Nt*-.15]},v)),R.push(L(new ge(.045,.2,7),{p:[Nt*.3,.45,.02],r:[0,0,Nt*-.75]},p)));if(o&&R.push(L(new oi(.065,.015,6,14),{p:[0,.02,.43]},m)),R.push(L(new bt(.31,16,8,0,Ct*2,0,Ct/2),{p:[0,.37,.03],s:[1*k,.85,1.05]},u)),R.push(L(new St(.34*k,.35*k,.035,18),{p:[0,.37,.03]},d)),i>=1&&i<=3)for(let Nt=0;Nt<i;Nt++)R.push(L(new st(.13,.025,.02),{p:[0,.43+Nt*.04,.33]},m));else if(i>=4){let Nt=i-3;for(let pe=0;pe<Nt;pe++)R.push(L(new kr(.05),{p:[(pe-(Nt-1)/2)*.12,.48,.3],s:[1,1,.4]},m))}let O=T+.05,tt=Nt=>Lt([L(new St(.095,.085,.46,8),{p:[0,-.23,0]},M(Nt*O,1.42,0)),L(new St(.09,.1,.12,8),{p:[0,-.5,0]},f)]),q=Nt=>Lt([L(new St(.135,.115,.56,10),{p:[0,-.28,0]},M(Nt*.17,C,0)),L(new St(.13,.155,.17,10),{p:[0,-C+.085,.02]},f)]),Z=Lt([L(new St(.022,.028,.52,6),{p:[0,-.2,-.12],r:[.55,0,0]},M(0,.86,-.3)),L(new bt(.065,7,5),{p:[0,-.42,-.25],s:[1,1.6,1]},Ot("#2a2420"))]),et=Lt([L(new st(.08,.11,.6),{p:[0,0,.2]},Ot("#2f3330")),L(new St(.022,.022,.32,6),{p:[0,.02,.62],r:[Ct/2,0,0]},Ot("#1b1d1c")),L(new st(.07,.12,.22),{p:[0,-.04,-.14]},Ot("#5b3d24")),L(new st(.05,.16,.07),{p:[0,-.12,.25],r:[.2,0,0]},Ot("#1b1d1c"))]),mt=Lt([L(new St(.09,.09,1,10),{p:[0,.08,.15],r:[Ct/2,0,0]},Ot("#4b5a2a")),L(new St(.11,.09,.12,10),{p:[0,.08,.68],r:[Ct/2,0,0]},Ot("#2f3a1a")),L(new st(.05,.16,.08),{p:[0,-.04,.05]},Ot("#2a2a2a"))]),$t=Lt([L(new bt(.1,8,6),{p:[.28,.05,.25]},Ot("#4f5b2b"))]),$=(Nt,pe)=>{let Ue=new qt(Nt,pe||I.unit);return Ue.castShadow=!0,Ue.receiveShadow=!1,Ue},gt=new Pe,wt=new Pe;gt.add(wt);let Ft=$(Lt(z));wt.add(Ft);let xt=new Pe;xt.position.set(0,1.62,.04),xt.add($(Lt(R))),wt.add(xt);let Vt=new Pe;Vt.position.set(-O,1.42,0),Vt.add($(tt(-1)));let Ae=new Pe;Ae.position.set(O,1.42,0),Ae.add($(tt(1))),wt.add(Vt,Ae);let kt=new Pe;kt.position.set(-.17,C,0),kt.add($(q(-1)));let le=new Pe;le.position.set(.17,C,0),le.add($(q(1))),gt.add(kt,le);let he=new Pe;he.position.set(0,.86,-.3),he.add($(Z)),wt.add(he);let jt=new Pe;jt.position.set(0,1.2,.3);let Be=$(et,I.item),Le=$(mt,I.item),$e=$($t,I.item);jt.add(Be,Le,$e),Le.visible=!1,$e.visible=!1,wt.add(jt);let ye=new Pe,Li=Lt([L(new bt(1.35,12,5,0,Ct*2,0,Ct/2.3),{p:[0,3,0],s:[1,.6,1]},(Nt,pe,Ue)=>{let B=Math.atan2(Nt.x,Nt.z);Ue.copy(Math.floor((B+Ct)/(Ct/6))%2?g:u)}),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([Nt,pe])=>{let Ue=new St(.01,.01,1.9,3);return L(Ue,{p:[Nt*.6,2.25,pe*.6],r:[pe*.45,0,-Nt*.45]},Ot("#dddddd"))})]),Fe=new qt(Li,I.unit);return Fe.castShadow=!0,ye.add(Fe),ye.visible=!1,gt.add(ye),{root:gt,body:wt,head:xt,armL:Vt,armR:Ae,legL:kt,legR:le,tail:he,weapon:jt,gun:Be,tube:Le,ball:$e,chute:ye,torso:Ft}}function $i(r,t,e=0){let i=Ot(r);return(n,s,a)=>{let o=pi(Math.round(n.x*10)+e,Math.round(n.y*10)*3+Math.round(n.z*10)*7);a.copy(i).multiplyScalar(1-t/2+o*t)}}function ha(r){switch(r){case"pine":case"pineSnow":{let t=r==="pineSnow",e=(i,n,s)=>{s.copy(Ot("#2c5a2b")).lerp(Ot("#4a7a36"),Math.min(1,i.y/6)),t&&n.y>.2&&s.copy(Ot("#f4f8fc"))};return Lt([L(new St(.16,.24,1.4,6),{p:[0,.7,0]},"#5b3b22"),L(new ge(1.5,2.3,8),{p:[0,2,0]},e),L(new ge(1.15,1.9,8),{p:[0,3,0],r:[0,.4,0]},e),L(new ge(.75,1.5,8),{p:[0,3.9,0],r:[0,.8,0]},e)])}case"broad":return Lt([L(new St(.18,.28,2.4,6),{p:[0,1.2,0]},"#5e4128"),L(new en(1.7,1),{p:[0,3.3,0],s:[1,.85,1],jitter:.45,seed:3},$i("#4f8a33",.35)),L(new en(1.1,1),{p:[.8,2.9,.4],jitter:.3,seed:5},$i("#5c963a",.3,4))]);case"willow":return Lt([L(new St(.22,.32,2.2,6),{p:[0,1.1,0]},"#6a5a44"),L(new en(1.8,1),{p:[0,2.8,0],s:[1.1,1,1.1],jitter:.5,seed:9},$i("#8aa64e",.3))]);case"rock":return L(new en(1,1),{jitter:.4,seed:7,s:[1,.75,1]},$i("#8a867e",.3));case"bale":return Lt([L(new St(.72,.72,1.15,14),{p:[0,.72,0],r:[0,0,Ct/2]},(t,e,i)=>{if(i.copy(Ot("#d9b75a")),Math.abs(e.x)>.7){let n=Math.sqrt(t.y*t.y+t.z*t.z);i.multiplyScalar(.8+.2*Math.sin(n*30))}})]);case"silo":return L(new St(.72,.72,1.15,14),{p:[0,.72,0],r:[0,0,Ct/2]},"#ecece6");case"stadl":{let t=(e,i,n)=>{n.copy(Ot("#7a5230"));let s=Math.abs(i.x)>.5?e.z:e.x;n.multiplyScalar(.82+.18*(Math.floor(s*3.3)%2))};return Lt([L(new st(4.2,3.2,6),{p:[0,1.6,0]},t),L(new St(2.42,2.42,6,3),{p:[0,3.87,0],r:[-Ct/2,0,0],s:[1,1,.55]},t),L(new st(3.15,.16,6.5),{p:[-1.1,4.25,0],r:[0,0,.76]},"#4b3a2c"),L(new st(3.15,.16,6.5),{p:[1.1,4.25,0],r:[0,0,-.76]},"#4b3a2c"),L(new st(1.7,2.3,.08),{p:[0,1.15,3.02]},"#3a2717"),L(new st(.08,2.3,.1),{p:[0,1.15,3.06]},"#7a5230"),L(new st(1,.7,.06),{p:[0,4,3.03]},"#2a1c10"),L(new st(.9,.5,.06),{p:[0,3.95,3.06]},"#d9b75a"),L(new st(.5,1.4,.5),{p:[1.05,4.75,-1.6]},"#8c8580"),L(new st(.6,.12,.6),{p:[1.05,5.5,-1.6]},"#6e6863")])}case"marterl":return Lt([L(new st(.18,1.4,.18),{p:[0,.7,0]},"#6a4a2a"),L(new st(.55,.6,.36),{p:[0,1.65,0]},"#f1ede4"),L(new st(.34,.4,.04),{p:[0,1.65,.18]},"#3e6fb0"),L(new St(.42,.42,.7,3),{p:[0,2.08,0],r:[-Ct/2,0,0],s:[1,1,.45]},"#5a3a24"),L(new st(.04,.3,.04),{p:[0,2.45,0]},"#c9a227"),L(new st(.16,.04,.04),{p:[0,2.5,0]},"#c9a227")]);case"corn":return Lt([L(new St(.03,.045,2,5),{p:[0,1,0]},"#8fa63a"),L(new st(.7,.02,.1),{p:[.3,1,0],r:[0,0,-.5]},"#7f9a33"),L(new st(.7,.02,.1),{p:[-.28,1.4,.05],r:[0,.4,.5]},"#93ad3e"),L(new st(.6,.02,.1),{p:[.05,1.7,.25],r:[.5,1.6,0]},"#7f9a33"),L(new St(.05,.06,.25,6),{p:[.08,1.25,.04],r:[0,0,-.3]},"#e8c44a"),L(new ge(.06,.3,4),{p:[0,2.1,0]},"#d8c477")]);case"vine":return Lt([L(new St(.04,.05,1.3,5),{p:[-.9,.65,0]},"#6a4f33"),L(new St(.04,.05,1.3,5),{p:[.9,.65,0]},"#6a4f33"),L(new st(2,.75,.45,4,2,1),{p:[0,.9,0],jitter:.12,seed:4},$i("#4f7f2c",.4)),L(new bt(.08,5,4),{p:[-.4,.55,.2]},"#5b2a5e"),L(new bt(.08,5,4),{p:[.5,.6,-.2]},"#5b2a5e")]);case"reed":return Lt([0,1,2,3,4].flatMap(t=>{let e=t*1.3,i=.15,n=Math.cos(e)*i,s=Math.sin(e)*i;return[L(new ge(.03,1.5,4),{p:[n,.75,s],r:[n*.6,0,-s*.6]},"#8a9a4a"),L(new St(.035,.035,.2,5),{p:[n*1.4,1.3,s*1.4]},"#5a3a22")]}));case"grass":return Lt([0,1,2].map(t=>L(new ge(.05,.42,3),{p:[Math.cos(t*2.1)*.06,.2,Math.sin(t*2.1)*.06],r:[Math.sin(t*2.1)*.3,0,-Math.cos(t*2.1)*.3]},(e,i,n)=>n.setRGB(.55+e.y,.6+e.y,.55+e.y))));case"blume_weiss":case"blume_gelb":case"blume_rot":case"blume_lila":case"blume_blau":{let t={blume_weiss:"#ffffff",blume_gelb:"#ffd93b",blume_rot:"#e53935",blume_lila:"#9c6ade",blume_blau:"#5aa0f0"}[r],e=r==="blume_gelb"?"#c06a10":"#ffcf33",i=[L(new St(.012,.016,.42,3,1,!0),{p:[0,.21,0]},"#3f6b25"),L(new bt(.06,4,2),{p:[.05,.1,0],s:[1.6,.25,.7],r:[0,0,-.5]},"#4f8a33"),L(new bt(.05,4,2),{p:[-.05,.16,.02],s:[1.5,.25,.7],r:[0,2.2,.5]},"#4f8a33"),L(new bt(.04,4,2),{p:[0,.445,0],s:[1,.7,1]},e)];for(let n=0;n<6;n++){let s=n/6*Ct*2;i.push(L(new bt(.05,4,2),{p:[Math.cos(s)*.065,.44,Math.sin(s)*.065],s:[1.35,.32,.75],r:[0,-s,.38]},t))}return Lt(i)}case"sonnenblume":{let t=new Us,e=28;for(let l=0;l<e;l++){let c=l/e*Ct*2,h=l%2?.17:.31;l===0?t.moveTo(Math.cos(c)*h,Math.sin(c)*h):t.lineTo(Math.cos(c)*h,Math.sin(c)*h)}let i=-.3,n=1.78,s=new ks(t),a=new ks(t);a.rotateY(Ct);let o=[L(new St(.03,.045,1.7,5,1,!0),{p:[0,.85,0]},"#5d8a2a"),L(new bt(.16,4,2),{p:[.15,.8,0],s:[1.6,.2,.9],r:[0,0,-.4]},"#4f7f25"),L(new bt(.16,4,2),{p:[-.14,1.1,0],s:[1.6,.2,.9],r:[0,0,.4]},"#4f7f25"),L(new St(.14,.12,.07,8),{p:[0,n,.05],r:[Ct/2+i,0,0]},"#5a3612"),L(s,{p:[0,n,.075],r:[i,0,0]},"#ffcc1a"),L(a,{p:[0,n,.025],r:[i,0,0]},"#e0a810")];return Lt(o)}case"heumandl":return Lt([L(new St(.05,.06,2.1,5),{p:[0,1.05,0]},"#6a4a2a"),L(new ge(.62,.95,9),{p:[0,.55,0],jitter:.06,seed:2},$i("#d9b75a",.25)),L(new ge(.5,.75,9),{p:[0,1.15,0],jitter:.05,seed:3},$i("#e2c46a",.25)),L(new ge(.3,.55,8),{p:[0,1.65,0],jitter:.04,seed:4},$i("#c9a84e",.25)),L(new St(.02,.02,.9,4),{p:[0,1.25,0],r:[0,0,Ct/2]},"#6a4a2a")]);case"vogelscheuche":return Lt([L(new St(.05,.06,2,5),{p:[0,1,0]},"#6a4a2a"),L(new St(.04,.04,1.3,5),{p:[0,1.45,0],r:[0,0,Ct/2]},"#6a4a2a"),L(new st(.55,.55,.3),{p:[0,1.3,0]},(t,e,i)=>i.copy(Ot((Math.floor((t.x+1)*9)+Math.floor((t.y+1)*9))%2?"#c62828":"#7a1515"))),L(new st(1.2,.18,.18),{p:[0,1.48,0]},"#a52525"),L(new st(.45,.5,.25),{p:[0,.82,0]},"#2f4f8a"),L(new bt(.2,8,6),{p:[0,1.8,0]},"#d8c39a"),L(new bt(.035,5,3),{p:[-.07,1.84,.17]},"#1d1d1d"),L(new bt(.035,5,3),{p:[.07,1.84,.17]},"#1d1d1d"),L(new st(.12,.02,.02),{p:[0,1.73,.19],r:[0,0,.12]},"#5a2a1a"),L(new St(.34,.34,.03,12),{p:[0,1.95,0]},"#3a2f22"),L(new St(.17,.2,.22,10),{p:[0,2.06,0]},"#3a2f22"),L(new ge(.06,.25,4),{p:[.62,1.42,0],r:[0,0,-Ct/2]},"#e2c46a"),L(new ge(.06,.25,4),{p:[-.62,1.42,0],r:[0,0,Ct/2]},"#e2c46a")]);case"fass":return Lt([L(new St(.42,.42,1,12),{p:[0,.42,0],r:[0,0,Ct/2],s:[1,1,1]},(t,e,i)=>{i.copy(Ot("#7a4d28")).multiplyScalar(.85+.15*(Math.floor(Math.atan2(t.y-.42,t.z)*4)%2))}),L(new oi(.43,.025,4,14),{p:[.32,.42,0],r:[0,Ct/2,0]},"#2b2b2b"),L(new oi(.43,.025,4,14),{p:[-.32,.42,0],r:[0,Ct/2,0]},"#2b2b2b")]);case"zaun":return Lt([L(new st(.1,1,.1),{p:[-1,.45,0]},$i("#7a6248",.2,1)),L(new st(.1,1,.1),{p:[1,.45,0]},$i("#7a6248",.2,2)),L(new st(2.15,.07,.05),{p:[0,.5,0],r:[0,0,.03]},"#8a7055"),L(new st(2.15,.07,.05),{p:[0,.82,0],r:[0,0,-.03]},"#8a7055")]);case"seerose":return L(new St(.34,.34,.02,10,1,!1,.4,Ct*2-.4),{},$i("#3f7f35",.25));case"seerosenbluete":return Lt([0,1,2,3,4,5].map(t=>{let e=t/6*Ct*2;return L(new ge(.05,.14,4),{p:[Math.cos(e)*.05,.05,Math.sin(e)*.05],r:[Math.sin(e)*.6,0,-Math.cos(e)*.6]},"#ffffff")}).concat([L(new bt(.03,5,3),{p:[0,.06,0]},"#ffd54f")]));case"flower":return Lt([L(new St(.01,.01,.3,3),{p:[0,.15,0]},"#2f4f20"),L(new bt(.06,6,4),{p:[0,.32,0]},"#ffffff")]);case"pumpkin":return Lt([L(new bt(.4,12,8),{p:[0,.28,0],s:[1,.72,1]},(t,e,i)=>{let n=Math.atan2(t.x,t.z);i.copy(Ot("#e07b1c")).multiplyScalar(.85+.15*Math.cos(n*10))}),L(new St(.03,.05,.15,5),{p:[0,.6,0]},"#4f5a22")]);case"maibaum":return Lt([L(new St(.12,.2,14,8),{p:[0,7,0]},(t,e,i)=>{i.copy(Math.floor((t.y+Math.atan2(t.x,t.z)*.3)*1.2)%2?Ot("#ffffff"):Ot("#d32f2f"))}),L(new oi(.9,.18,6,14),{p:[0,12.5,0],r:[Ct/2,0,0]},"#2f6b2a"),L(new ge(.9,1.8,7),{p:[0,14.6,0]},"#2f6b2a")]);default:return L(new st(1,1,1),{},"#ff00ff")}}function gi(r){switch(r){case"granate":return Lt([L(new bt(.12,10,8),{},"#4f5b2b"),L(new St(.04,.05,.08,6),{p:[0,.13,0]},"#2a2a2a")]);case"rakete":return Lt([L(new St(.065,.065,.5,8),{r:[Ct/2,0,0]},"#556b2f"),L(new ge(.065,.2,8),{p:[0,0,.35],r:[Ct/2,0,0]},"#c62828"),L(new st(.28,.02,.1),{p:[0,0,-.22]},"#333"),L(new st(.02,.28,.1),{p:[0,0,-.22]},"#333")]);case"moerser":case"shell":return Lt([L(new di(.08,.22,4,8),{r:[Ct/2,0,0]},"#5c6266"),L(new st(.22,.02,.08),{p:[0,0,-.18]},"#3a3d40"),L(new st(.02,.22,.08),{p:[0,0,-.18]},"#3a3d40")]);case"bomb":return Lt([L(new di(.13,.35,4,8),{r:[Ct/2,0,0]},"#2f3a2a"),L(new st(.34,.02,.12),{p:[0,0,-.28]},"#222"),L(new st(.02,.34,.12),{p:[0,0,-.28]},"#222")]);case"guelle":return Lt([L(new St(.13,.13,.28,10),{},"#6b4a2a"),L(new St(.135,.135,.03,10),{p:[0,.08,0]},"#2a2a2a"),L(new St(.135,.135,.03,10),{p:[0,-.08,0]},"#2a2a2a")]);case"glocke":return Lt([L(new St(.2,.3,.45,12),{},"#e6b422"),L(new St(.31,.31,.04,12),{p:[0,-.22,0]},"#b8860b"),L(new oi(.12,.035,5,10),{p:[0,.3,0]},"#c62828"),L(new bt(.07,6,5),{p:[0,-.26,0]},"#5a4a2a")]);case"mine":return Lt([L(new bt(.36,10,6),{p:[0,.03,0],s:[1,.22,1]},"#5a3d22"),L(new bt(.26,10,6),{p:[.02,.09,.01],s:[1,.3,1]},"#634428"),L(new bt(.14,8,5),{p:[.03,.15,.02],s:[1,.5,1]},"#6d4a2c")]);case"tnt":return Lt([L(new St(.06,.06,.42,8),{p:[-.065,.06,0],r:[0,0,Ct/2]},"#c62828"),L(new St(.06,.06,.42,8),{p:[.065,.06,0],r:[0,0,Ct/2]},"#c62828"),L(new St(.06,.06,.42,8),{p:[0,.16,0],r:[0,0,Ct/2]},"#b71c1c"),L(new st(.08,.26,.15),{p:[0,.1,0]},"#2a2a2a"),L(new St(.01,.01,.25,4),{p:[0,.32,.05],r:[.4,0,0]},"#eeeeee")]);case"crateHealth":return L(new st(.8,.6,.8),{p:[0,.3,0]},(t,e,i)=>{i.copy(Ot("#f4f1ea"));let n=e.y>.5,s=n?t.x:Math.abs(e.x)>.5?t.z:t.x,a=n?t.z:t.y-.3;(Math.abs(s)<.1&&Math.abs(a)<.28||Math.abs(a)<.1&&Math.abs(s)<.28)&&i.copy(Ot("#d32f2f"))});case"crate":return L(new st(.8,.6,.8),{p:[0,.3,0]},(t,e,i)=>{i.copy(Ot("#6b7a3a")),Math.max(Math.abs(t.x)>.33?1:0,Math.abs(t.z)>.33?1:0,t.y>.53||t.y<.07?1:0)&&i.copy(Ot("#3f4a22"))});case"plane":return Lt([L(new St(.55,.45,8,10),{r:[Ct/2,0,0]},"#8a939b"),L(new ge(.55,2.2,10),{p:[0,0,5.1],r:[Ct/2,0,0]},"#6f7880"),L(new st(7.5,.12,2.6),{p:[0,-.1,-.6]},"#7d868e"),L(new st(.12,1.9,1.8),{p:[0,1,-3.3],r:[-.3,0,0]},"#7d868e"),L(new st(3,.1,1.2),{p:[0,.1,-3.4]},"#7d868e"),L(new bt(.42,8,6),{p:[0,.45,2.4],s:[1,.7,2]},"#2b4a6a"),L(new st(.9,.3,.02),{p:[2.6,-.02,-.6]},"#d32f2f"),L(new st(.9,.3,.02),{p:[-2.6,-.02,-.6]},"#d32f2f")]);case"grave":return Lt([L(new bt(.55,10,6),{p:[0,0,0],s:[1,.35,1.4]},"#5a4430"),L(new st(.1,.95,.08),{p:[0,.55,-.35]},"#7a5a3a"),L(new st(.5,.09,.08),{p:[0,.82,-.35]},"#7a5a3a"),L(new St(.06,.09,.13,7),{p:[.18,.66,-.31]},"#e6b422"),L(new bt(.06,5,4),{p:[-.2,.15,.2]},"#e53935"),L(new bt(.06,5,4),{p:[.15,.16,.3]},"#fdd835")]);case"gabel":{let t="#9aa3a8",e=[L(new St(.03,.035,1.25,6),{p:[0,0,-.35],r:[Ct/2,0,0]},"#8a5a32"),L(new st(.34,.04,.05),{p:[0,0,.28]},t)];for(let i of[-.15,0,.15])e.push(L(new St(.014,.014,.42,5),{p:[i,0,.5],r:[Ct/2,0,0]},t)),e.push(L(new ge(.016,.08,5),{p:[i,0,.75],r:[Ct/2,0,0]},"#dfe5e8"));return Lt(e)}case"nest":return Lt([L(new bt(.22,12,10),{s:[1,1.25,1]},(t,e,i)=>{i.copy(Ot("#c9b892")).multiplyScalar(.8+.2*(Math.floor((t.y+.3)*22)%2))}),L(new St(.04,.05,.08,6),{p:[0,.3,0]},"#5a4630"),L(new bt(.06,6,5),{p:[0,-.22,.05]},"#2a2218")]);case"traktor":{let t="#2e7d32",e="#1b1b1b",i="#d9b100",n=(s,a,o,l,c)=>[L(new St(l,l,c,16),{p:[s,a,o],r:[0,0,Ct/2]},e),L(new St(l*.55,l*.55,c+.02,10),{p:[s,a,o],r:[0,0,Ct/2]},i)];return Lt([L(new st(.8,.62,1.35),{p:[0,.78,.45]},t),L(new st(.84,.08,1.4),{p:[0,1.11,.45]},"#256628"),L(new st(.7,.4,.05),{p:[0,.78,1.13]},"#3a3a3a"),L(new st(1,.45,.85),{p:[0,.85,-.45]},t),L(new st(1.5,.08,.9),{p:[0,1.15,-.45]},"#256628"),L(new st(.45,.12,.4),{p:[0,1.25,-.55]},"#c62828"),L(new st(.45,.4,.08),{p:[0,1.48,-.76]},"#c62828"),L(new oi(.15,.025,5,12),{p:[0,1.45,-.18],r:[-.9,0,0]},e),L(new St(.045,.045,.75,7),{p:[.27,1.45,.75]},"#333333"),L(new St(.07,.07,.4,8),{p:[-.12,1.25,.55],r:[0,0,Ct/2]},"#c62828"),L(new St(.07,.07,.4,8),{p:[-.12,1.25,.72],r:[0,0,Ct/2]},"#c62828"),L(new St(.012,.012,1,4),{p:[-.55,1.65,-.85]},"#dddddd"),L(new st(.02,.1,.36),{p:[-.55,2.05,-.67]},"#d32f2f"),L(new st(.02,.1,.36),{p:[-.55,1.95,-.67]},"#ffffff"),L(new st(.02,.1,.36),{p:[-.55,1.85,-.67]},"#d32f2f"),...n(-.68,.6,-.45,.6,.34),...n(.68,.6,-.45,.6,.34),...n(-.5,.34,.8,.34,.22),...n(.5,.34,.8,.34,.22)])}case"chute":return Lt([L(new bt(1.1,12,5,0,Ct*2,0,Ct/2.3),{p:[0,2.2,0],s:[1,.6,1]},(t,e,i)=>{let n=Math.atan2(t.x,t.z);i.copy(Math.floor((n+Ct)/(Ct/6))%2?Ot("#ffffff"):Ot("#d32f2f"))}),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([t,e])=>L(new St(.01,.01,1.8,3),{p:[t*.45,1.3,e*.45],r:[e*.4,0,-t*.4]},"#dddddd"))]);case"arrow":return L(new ge(.22,.45,4),{r:[Ct,0,0]},"#ffffff");case"marker":return L(new oi(1,.08,6,28),{r:[Ct/2,0,0]},"#ffffff");default:return L(new bt(.1,6,4),{},"#ff00ff")}}function Sf(r,t){let e=[],i=Math.max(6,Math.round(r.len/.45)),n=Math.atan2(r.dx,r.dz),s=(o,l)=>{let c=r.ax+r.dx*r.len*o+-r.dz*l,h=r.az+r.dz*r.len*o+r.dx*l;return[c,t(o),h]};for(let o=0;o<i;o++){let l=o/i,c=(o+1)/i,h=(l+c)/2,[u,d,f]=s(h,0),p=Math.atan2(t(c)-t(l),r.len/i);e.push(L(new st(r.hw*2.1,.09,r.len/i*.92),{p:[u,d-.05,f],r:[-p,n,0],order:"YXZ"},(y,m,g)=>g.copy(Ot(o%3===0?"#8a6640":o%3===1?"#7a5838":"#94704a"))))}for(let o of[-r.hw*.8,r.hw*.8])for(let l=0;l<i;l++){let c=l/i,h=(l+1)/i,[u,d,f]=s((c+h)/2,o),p=Math.atan2(t(h)-t(c),r.len/i);e.push(L(new st(.14,.16,r.len/i*1.02),{p:[u,d-.18,f],r:[-p,n,0],order:"YXZ"},"#5e4129"))}let a=Math.max(3,Math.round(r.len/1.6));for(let o of[-r.hw,r.hw]){for(let l=0;l<=a;l++){let[c,h,u]=s(l/a,o);e.push(L(new st(.09,.9,.09),{p:[c,h+.42,u]},"#6a4a2c"))}for(let l=0;l<a;l++){let c=l/a,h=(l+1)/a,[u,d,f]=s((c+h)/2,o),p=Math.atan2(t(h)-t(c),r.len/a);e.push(L(new st(.07,.07,r.len/a*1.02),{p:[u,d+.86,f],r:[-p,n,0],order:"YXZ"},"#8a6a44")),e.push(L(new st(.05,.05,r.len/a*1.02),{p:[u,d+.48,f],r:[-p,n,0],order:"YXZ"},"#7a5c3a"))}}for(let o of[.3,.7])for(let l of[-r.hw*.8,r.hw*.8]){let[c,h,u]=s(o,l),d=h+3.5;e.push(L(new St(.12,.14,d,6),{p:[c,h-d/2-.15,u]},"#4e3622"))}return Lt(e)}function Ph(r="#9a7b5a"){let t="#e9a5a0";return Lt([L(new bt(.2,8,6),{p:[0,.22,-.03],s:[1,.9,1.35]},r),L(new bt(.12,7,5),{p:[0,.38,.22],s:[1,.95,1.1]},r),L(new di(.035,.24,3,6),{p:[-.05,.6,.15],r:[-.35,0,.18]},r),L(new di(.035,.24,3,6),{p:[.05,.6,.15],r:[-.35,0,-.18]},r),L(new di(.018,.18,2,5),{p:[-.05,.6,.17],r:[-.35,0,.18]},t),L(new di(.018,.18,2,5),{p:[.05,.6,.17],r:[-.35,0,-.18]},t),L(new bt(.022,5,4),{p:[-.07,.42,.31]},"#111111"),L(new bt(.022,5,4),{p:[.07,.42,.31]},"#111111"),L(new bt(.02,5,4),{p:[0,.36,.34]},t),L(new bt(.07,7,5),{p:[0,.27,-.29]},"#f4f1ea"),L(new bt(.08,6,5),{p:[-.12,.08,-.08],s:[.7,.6,1.6]},r),L(new bt(.08,6,5),{p:[.12,.08,-.08],s:[.7,.6,1.6]},r)])}function Ef(){let r="#8a6a48",t="#c9a77c";return Lt([L(new di(.17,.18,4,8),{p:[0,.22,0],r:[Ct/2-.2,0,0],s:[1.1,1,1]},r),L(new bt(.13,8,6),{p:[0,.2,.08],s:[1,.8,1]},t),L(new bt(.11,8,6),{p:[0,.34,.24]},r),L(new bt(.05,6,4),{p:[0,.31,.33]},t),L(new bt(.02,5,4),{p:[0,.33,.37]},"#1d1612"),L(new bt(.018,5,4),{p:[-.05,.38,.32]},"#111111"),L(new bt(.018,5,4),{p:[.05,.38,.32]},"#111111"),L(new bt(.03,5,4),{p:[-.08,.44,.2]},"#6b4f33"),L(new bt(.03,5,4),{p:[.08,.44,.2]},"#6b4f33"),L(new di(.04,.12,2,5),{p:[0,.12,-.24],r:[-1.1,0,0]},"#4a3a2a")])}function Ih(r=!1){let t=r?"#8a6a48":"#d9d4c8",e=r?"#7a5c3c":"#1f6b3a";return Lt([L(new bt(.2,10,7),{p:[0,.08,0],s:[.85,.6,1.25]},t),L(new ge(.09,.18,6),{p:[0,.14,-.27],r:[-Ct/2-.5,0,0]},r?"#6b4f33":"#3a3a3a"),L(new bt(.1,8,6),{p:[0,.3,.18]},e),L(new oi(.06,.012,4,10),{p:[0,.22,.17],r:[Ct/2,0,0]},r?t:"#ffffff"),L(new st(.06,.03,.12),{p:[0,.28,.3]},"#f2a024"),L(new bt(.016,4,3),{p:[-.06,.33,.24]},"#111111"),L(new bt(.016,4,3),{p:[.06,.33,.24]},"#111111"),L(new bt(.11,6,4),{p:[-.12,.13,-.02],s:[.4,.5,1.2]},r?"#6b4f33":"#7a7a8a"),L(new bt(.11,6,4),{p:[.12,.13,-.02],s:[.4,.5,1.2]},r?"#6b4f33":"#7a7a8a")])}function Tf(){let r=new In(.07,6),t=new In(.05,6);return Lt([L(r,{p:[.06,0,.02],r:[-Ct/2,0,0],s:[1,1.2,1]},"#ffffff"),L(t,{p:[.05,0,-.06],r:[-Ct/2,0,0]},"#ffffff"),L(new In(.07,6),{p:[-.06,0,.02],r:[-Ct/2,0,0],s:[1,1.2,1]},"#ffffff"),L(new In(.05,6),{p:[-.05,0,-.06],r:[-Ct/2,0,0]},"#ffffff"),L(new di(.01,.1,2,4),{r:[Ct/2,0,0]},"#222222")])}function Af(){return Lt([L(new di(.08,.3,3,6),{r:[Ct/2,0,0]},"#3a3a3a"),L(new st(.7,.02,.22),{p:[-.36,.06,0],r:[0,0,.25]},"#2a2a2a"),L(new st(.7,.02,.22),{p:[.36,.06,0],r:[0,0,-.25]},"#2a2a2a"),L(new st(.18,.02,.14),{p:[0,0,-.24]},"#2a2a2a"),L(new ge(.03,.08,4),{p:[0,0,.24],r:[Ct/2,0,0]},"#d9a020")])}var Ii=6,iv=[],ua=(r,t)=>(r+512)*2048+(t+512),Rf={low:{res:96,shadow:0,propScale:.45,grassScale:.3},medium:{res:128,shadow:1024,propScale:.8,grassScale:.65},high:{res:160,shadow:2048,propScale:1,grassScale:1}},Pl=class{constructor(t,e,i,n="medium",s={}){this.scene=t,this.theme=e,this.Q=Rf[n]||Rf.medium,this.quality=n,this.rng=new Ne(i*7+3),this.time=0,this.obstacles=[],this.instanced={},this.chimneys=[],this.flowerSpots=[],this.decoKinds=new Set(["corn","vine","grass","flower","pumpkin","reed","sonnenblume","zaun","seerose","seerosenbluete","blume_weiss","blume_gelb","blume_rot","blume_lila","blume_blau"]),this.floatKinds=new Set(["seerose","seerosenbluete"]),this.size=s.size||110,this.area=(this.size/110)**2,this.terrain=new Rl(e,i,Math.round(this.Q.res*this.size/110),n==="low",this.size),t.add(this.terrain.mesh),this.setupLights(),this.setupSky(s.fog),this.setupWater(),this.setupSeabed(),e.mountains&&this.setupMountains(),this.setupClouds();let a=s.planSpawns?s.planSpawns(this.terrain):s.avoid||[];this.placeProps({...s,avoid:a}),this.buildGrid()}buildGrid(){let t=new Map;for(let e of this.obstacles){let i=Math.max(e.r,e.pr)+.6,n=Math.floor((e.x-i)/Ii),s=Math.floor((e.x+i)/Ii),a=Math.floor((e.z-i)/Ii),o=Math.floor((e.z+i)/Ii);for(let l=n;l<=s;l++)for(let c=a;c<=o;c++){let h=ua(l,c);t.has(h)||t.set(h,[]),t.get(h).push(e)}}this.obstacleGrid=t}addObstacle(t){this.obstacles.push(t);let e=Math.max(t.r,t.pr)+.6,i=Math.floor((t.x-e)/Ii),n=Math.floor((t.x+e)/Ii),s=Math.floor((t.z-e)/Ii),a=Math.floor((t.z+e)/Ii);for(let o=i;o<=n;o++)for(let l=s;l<=a;l++){let c=ua(o,l);this.obstacleGrid.has(c)||this.obstacleGrid.set(c,[]),this.obstacleGrid.get(c).push(t)}}obstaclesNear(t,e){return this.obstacleGrid.get(ua(Math.floor(t/Ii),Math.floor(e/Ii)))||iv}setupLights(){let t=this.theme;this.hemi=new Hr(t.hemi.sky,t.hemi.ground,t.hemi.intensity),this.scene.add(this.hemi);let e=new Xr(t.sun.color,t.sun.intensity),i=t.sun.elev*ve,n=t.sun.azim*ve;if(this.sunDir=new D(Math.cos(i)*Math.sin(n),Math.sin(i),Math.cos(i)*Math.cos(n)).normalize(),e.position.copy(this.sunDir).multiplyScalar(150),e.target.position.set(0,0,0),this.Q.shadow){e.castShadow=!0,e.shadow.mapSize.set(this.Q.shadow,this.Q.shadow);let s=64*(this.size/110);Object.assign(e.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:20,far:320}),e.shadow.bias=-6e-4,e.shadow.normalBias=.04}this.sun=e,this.scene.add(e,e.target),this.flash=new Wr(16755285,0,22,1.6),this.scene.add(this.flash)}setupSky(t){let e=this.theme,i=new ut(e.sky.top),n=new ut(e.sky.horizon),s=e.fog[0],a=e.fog[1];t&&(s=8,a=75),this.scene.fog=new Mr(n.clone(),s,a),this.scene.background=n.clone();let o=new bt(900,32,16),l=new yi({side:ei,depthWrite:!1,fog:!1,uniforms:{uTop:{value:i},uHor:{value:t?n.clone().lerp(new ut("#c8cfd2"),.6):n},uSun:{value:this.sunDir.clone()},uSunCol:{value:new ut(e.sun.color)},uFog:{value:t?1:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uFog; varying vec3 vDir;
        void main(){ float h = max(vDir.y, 0.0); vec3 c = mix(uHor, uTop, pow(h, 0.38));
          if (vDir.y < 0.0) c = uHor * 0.92;
          float s = max(dot(normalize(vDir), uSun), 0.0);
          c += uSunCol * (pow(s, 600.0) * 2.5 + pow(s, 12.0) * 0.25) * (1.0 - uFog);
          c = mix(c, uHor, uFog * 0.85);
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new qt(o,l),this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.scene.add(this.sky)}setupWater(){let t=this.theme,e=128,i=new Uint8Array(e*e*4),n=Gn(99),s=(c,h)=>n(c/9,h/9)*.6+n(c/4,h/4)*.3;for(let c=0;c<e;c++)for(let h=0;h<e;h++){let u=s((h+1)%e,c)-s((h-1+e)%e,c),d=s(h,(c+1)%e)-s(h,(c-1+e)%e),f=new D(-u*2.5,-d*2.5,1).normalize(),p=(c*e+h)*4;i[p]=(f.x*.5+.5)*255,i[p+1]=(f.y*.5+.5)*255,i[p+2]=(f.z*.5+.5)*255,i[p+3]=255}let a=new mn(i,e,e,fi);a.wrapS=a.wrapT=Cn,a.magFilter=Ve,a.minFilter=Ri,a.generateMipmaps=!0,a.repeat.set(60,60),a.needsUpdate=!0,this.waterTex=a;let o=new Dn({color:new ut(t.water),specular:16777215,shininess:90,transparent:!0,opacity:t.waterOpacity||.82,normalMap:a,normalScale:new Mt(.6,.6),depthWrite:!1}),l=new Ln(1800,1800,1,1);l.rotateX(-Math.PI/2),this.water=new qt(l,o),this.water.position.y=this.terrain.waterLevel,this.water.renderOrder=2,this.water.receiveShadow=this.quality==="high",this.scene.add(this.water)}setupSeabed(){let t=new Ln(1800,1800,1,1);t.rotateX(-Math.PI/2);let e=new ut(this.theme.colors.seabed),i=new vi({color:e});this.seabed=new qt(t,i),this.seabed.position.y=-5.05,this.seabed.receiveShadow=!1,this.scene.add(this.seabed)}setWaterLevel(t){let e=t-this.terrain.waterLevel;if(this.terrain.waterLevel=t,this.water.position.y=t,e){let i=new Zt;for(let n of this.floatKinds){let s=this.instanced[n];if(s){for(let a=0;a<s.count;a++)s.getMatrixAt(a,i),!(i.elements[0]===0&&i.elements[5]===0)&&(i.elements[13]+=e,s.setMatrixAt(a,i));s.instanceMatrix.needsUpdate=!0}}}}setupMountains(){let t=new Ne(1234),e=[],i=28;for(let c=0;c<i;c++){let h=c/i*Math.PI*2+t.range(-.08,.08),u=t.range(360,470),d=t.range(60,150),f=t.range(60,110),p=new ge(f,d,7,3);e.push(L(p,{p:[Math.sin(h)*u,d/2-6,Math.cos(h)*u],r:[0,t.range(0,3),0],jitter:14,seed:c+1},(y,m,g)=>{let v=(y.y+6)/150;g.copy(Ot("#6a7a8c")).lerp(Ot("#8e9aa6"),v),y.y>d*.55-6&&m.y>.25&&g.copy(Ot("#f2f6fa"))}))}let n=Lt(e),s=new ut(this.theme.sky.horizon).lerp(new ut("#9fb6cf"),.5),a=n.attributes.color,o=new ut;for(let c=0;c<a.count;c++)o.setRGB(a.getX(c),a.getY(c),a.getZ(c)).lerp(s,.42),a.setXYZ(c,o.r,o.g,o.b);let l=new vi({vertexColors:!0,fog:!1});this.mountains=new qt(n,l),this.scene.add(this.mountains)}setupClouds(){let t=new Ne(4321);this.clouds=new Pe;let e=new vi({color:16777215,emissive:9080729,flatShading:!0});for(let i=0;i<9;i++){let n=[],s=t.int(4,7);for(let c=0;c<s;c++){let h=new en(t.range(8,15),1);n.push(L(h,{p:[c*10-s*5+t.range(-3,3),t.range(-2,4),t.range(-6,6)],s:[1,.6,1]},"#ffffff"))}let a=new qt(Lt(n),e),o=t.range(0,Math.PI*2),l=t.range(120,380);a.position.set(Math.sin(o)*l,t.range(75,120),Math.cos(o)*l),a.userData.speed=t.range(1,3),this.clouds.add(a)}this.scene.add(this.clouds)}findSpot(t,{minH:e=.7,maxSlope:i=.6,minDist:n=2,avoid:s=[],tries:a=40,area:o=.92,pathGap:l=0,weight:c=null,gen:h=null}={}){let u=this.terrain;for(let d=0;d<a;d++){let f,p;if(h){let g=h(t);if(!g)continue;f=g.x,p=g.z}else f=t.range(-u.half*o,u.half*o),p=t.range(-u.half*o,u.half*o);let y=u.heightAt(f,p);if(y<u.waterLevel+e||u.slopeAt(f,p)>i||l&&u.distToPath(f,p)<l||this.onDeck(f,p,2.5)||c&&t.next()>c(f,p))continue;let m=!0;for(let g of this.obstacles)if(Pt(f,p,g.x,g.z)<n+g.r){m=!1;break}if(m){for(let g of s)if(Pt(f,p,g.x,g.z)<g.r){m=!1;break}}if(m)return{x:f,z:p,y}}return null}onDeck(t,e,i=0){for(let n of this.terrain.decks){let s=t-n.ax,a=e-n.az,o=s*n.dx+a*n.dz;if(!(o<-i||o>n.len+i)&&Math.abs(s*-n.dz+a*n.dx)<n.hw+i)return!0}return!1}nearestPathPoint(t,e){let i=this.terrain.path,n=null,s=1/0;for(let a=0;a<i.length-1;a++){let o=i[a],l=i[a+1],c=l.x-o.x,h=l.z-o.z,u=c*c+h*h||1,d=Et(((t-o.x)*c+(e-o.z)*h)/u,0,1),f=o.x+c*d,p=o.z+h*d,y=Math.hypot(t-f,e-p);y<s&&(s=y,n={x:f,z:p})}return n}besidePath(t,e,i){let n=this.terrain.path;if(n.length<2)return null;let s=t.int(0,n.length-2),a=n[s],o=n[s+1];if(o.bridge)return null;let l=t.next(),c=Math.hypot(o.x-a.x,o.z-a.z)||1,h=(o.x-a.x)/c,u=(o.z-a.z)/c,d=t.chance(.5)?1:-1,f=t.range(e,i)*d;return{x:a.x+(o.x-a.x)*l-u*f,z:a.z+(o.z-a.z)*l+h*f,nx:u*d,nz:-h*d}}addInstanced(t,e,{castShadow:i=!0,colors:n=null}={}){if(!e.length)return null;let s=ha(t),a=we().prop,o=new gn(s,a,e.length),l=new Zt,c=new Ge,h=new D,u=new D;return e.forEach((d,f)=>{c.setFromAxisAngle(new D(0,1,0),d.rot||0),d.tilt&&c.multiply(new Ge().setFromEuler(new We(d.tilt[0],0,d.tilt[1]))),h.set(d.sx||d.s||1,d.sy||d.s||1,d.sz||d.s||1),u.set(d.x,d.y,d.z),l.compose(u,c,h),o.setMatrixAt(f,l),n&&o.setColorAt(f,n(d,f)),d.mesh=o,d.index=f,d.matrix=l.clone()}),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.castShadow=i,o.receiveShadow=!0,o.computeBoundingSphere(),this.scene.add(o),this.instanced[t]=o,o}placeProps(t){let e=this.theme.props,i=this.rng,n=this.area,s=this.Q.propScale*n,a=this.Q.grassScale*n,o=this.Q.grassScale,l=this.terrain,c=this.theme.deco||{},h=(t.avoid||[]).concat(l.decks.flatMap(_=>[{x:_.ax,z:_.az,r:3.5},{x:_.bx,z:_.bz,r:3.5}])),u=[],d=(_,x)=>1-l.forestAt(_,x)*.9;for(let _=0;_<(e.stadl?Math.max(1,Math.round(e.stadl*n)):0);_++){let x=this.findSpot(i,{maxSlope:.25,minDist:6,avoid:h,minH:1.2,pathGap:4.5,gen:R=>this.besidePath(R,6,9),tries:30}),M;if(x){let R=l.path.length?this.nearestPathPoint(x.x,x.z):null;M=R?Math.atan2(R.x-x.x,R.z-x.z):i.range(0,Math.PI*2)}else{if(x=this.findSpot(i,{maxSlope:.25,minDist:6,avoid:h,minH:1.2,area:.7,pathGap:4}),!x)continue;M=i.range(0,Math.PI*2)}let C=ha("stadl");C.rotateY(M),C.translate(x.x,x.y-.3,x.z),u.push(C);let T=1.05,I=-1.6;this.chimneys.push({x:x.x+T*Math.cos(M)+I*Math.sin(M),y:x.y-.3+5.65,z:x.z-T*Math.sin(M)+I*Math.cos(M),t:i.range(0,1)});let z=Math.sin(M),F=Math.cos(M);for(let R of[-2,0,2])this.obstacles.push({kind:"stadl",x:x.x+z*R,z:x.z+F*R,r:2.3,pr:2.3,y0:x.y-1,top:x.y+5.5,solid:!0})}if(e.marterl||t.maibaum){for(let _=0;_<(e.marterl?Math.max(1,Math.round(e.marterl*n)):0);_++){let x=this.findSpot(i,{maxSlope:.4,minDist:3,avoid:h,pathGap:2,gen:T=>this.besidePath(T,2.4,3.2),tries:30}),M=i.range(0,Math.PI*2);if(x){let T=this.nearestPathPoint(x.x,x.z);T&&(M=Math.atan2(T.x-x.x,T.z-x.z))}else if(x=this.findSpot(i,{maxSlope:.4,minDist:3,avoid:h,area:.8}),!x)continue;let C=ha("marterl");C.rotateY(M),C.translate(x.x,x.y-.1,x.z),u.push(C),this.obstacles.push({kind:"marterl",x:x.x,z:x.z,r:.4,pr:.45,y0:x.y-1,top:x.y+2.6,solid:!0})}if(t.maibaum){let _=this.findSpot(i,{maxSlope:.3,minDist:3,avoid:h,area:.4,pathGap:1.6});if(_){let x=ha("maibaum");x.translate(_.x,_.y-.2,_.z),u.push(x),this.obstacles.push({kind:"maibaum",x:_.x,z:_.z,r:.35,pr:.35,y0:_.y-1,top:_.y+15,solid:!0})}}}for(let _ of l.decks)u.push(Sf(_,x=>l.deckY(_,x)));if(u.length){let _=new qt(Lt(u),we().prop);_.castShadow=!0,_.receiveShadow=!0,this.scene.add(_),this.staticMesh=_}let f=(_,x,M,C,T)=>{for(let I of x){let z={kind:_,x:I.x,z:I.z,r:M*I.s,pr:C*I.s,y0:I.y-.4,top:I.y+.1+T*I.s,destructible:!0,item:I,solid:!0};this.obstacles.push(z),I.ob=z}this.addInstanced(_,x)},p=(_,x,M,C,T,I,z,F={})=>{let R=[],k=Math.round(x*s);for(let G=0;G<k;G++){let O=this.findSpot(i,{maxSlope:F.maxSlope||.75,minDist:F.minDist||1.5,avoid:h,minH:F.minH||.9,pathGap:F.pathGap??1.8,weight:F.weight,tries:F.weight?70:40});if(!O)continue;let tt=i.range(M,C);R.push({kind:_,x:O.x,y:O.y-.1,z:O.z,s:tt,rot:i.range(0,6.28),alive:!0})}return f(_,R,T,I,z),R},y=(_,x)=>.1+.9*l.forestAt(_,x);if(e.pine&&p("pine",e.pine,.8,1.5,.35,1.1,4.4,{weight:y}),e.pineSnow&&p("pineSnow",e.pineSnow,.8,1.6,.35,1.1,4.4,{weight:y}),e.broad&&p("broad",e.broad,.7,1.2,.4,1.5,4.6,{weight:(_,x)=>.35+.65*l.forestAt(_,x)}),e.willow&&p("willow",e.willow,.8,1.3,.45,1.6,4.3,{minH:.4,weight:(_,x)=>l.heightAt(_,x)<l.waterLevel+2.2?1:.35}),e.rock&&p("rock",e.rock,.5,1.6,.85,.9,1.3,{maxSlope:1.4,minDist:1,pathGap:1.4}),e.bale&&p("bale",e.bale,.9,1.1,.75,.8,1.45,{maxSlope:.3,weight:d}),e.silo&&p("silo",e.silo,.9,1.1,.75,.8,1.45,{maxSlope:.3,weight:d}),c.heumandl){let _=[];for(let x=0;x<Math.max(1,Math.round(c.heumandl*s*.5));x++){let M=this.findSpot(i,{maxSlope:.3,minDist:2.5,avoid:h,pathGap:3,weight:d,tries:60});if(!M)continue;let C=i.range(0,Math.PI),T=i.int(3,5);for(let I=0;I<T;I++){let z=M.x+Math.cos(C)*(I-T/2)*3.2+i.range(-.4,.4),F=M.z+Math.sin(C)*(I-T/2)*3.2+i.range(-.4,.4),R=l.heightAt(z,F);R<l.waterLevel+.9||l.slopeAt(z,F)>.45||l.distToPath(z,F)<2||this.onDeck(z,F,2)||h.some(k=>Pt(z,F,k.x,k.z)<k.r)||this.obstacles.some(k=>Pt(z,F,k.x,k.z)<k.r+1.2)||_.push({kind:"heumandl",x:z,y:R-.08,z:F,s:i.range(.9,1.15),rot:i.range(0,6.28),alive:!0})}}f("heumandl",_,.45,.6,2.1)}if(c.faesser){let _=[];for(let x=0;x<Math.max(1,Math.round(c.faesser*n));x++){let M=this.findSpot(i,{maxSlope:.3,minDist:1.5,avoid:h,pathGap:2,gen:I=>this.besidePath(I,2.6,4),tries:40});if(!M)continue;let C=i.int(2,4),T=i.range(0,6.28);for(let I=0;I<C;I++){let z=M.x+Math.cos(T)*I*.95,F=M.z+Math.sin(T)*I*.95,R=l.heightAt(z,F);R<l.waterLevel+.8||_.push({kind:"fass",x:z,y:R-.04,z:F,s:i.range(.9,1.05),rot:T+Math.PI/2+i.range(-.15,.15),alive:!0})}}f("fass",_,.45,.5,.9)}let m=(_,x,M,C,T={})=>{let I=[],z=Math.round(x*(T.isGrass?a:s));for(let F=0;F<z;F++){let R,k;if(T.cluster&&I.length&&i.chance(.85)){let tt=I[Math.floor(i.next()*I.length)];R=tt.x+i.range(-T.cluster,T.cluster),k=tt.z+i.range(-T.cluster,T.cluster)}else R=i.range(-l.half*.9,l.half*.9),k=i.range(-l.half*.9,l.half*.9);let G=l.heightAt(R,k);if(G<l.waterLevel+(T.minH??.6)||G>l.waterLevel+(T.maxH??999)||l.slopeAt(R,k)>(T.maxSlope||.7)||this.onDeck(R,k,.6)||l.distToPath(R,k)<(T.pathGap??1.25))continue;let O=!1;for(let tt of h)if(Pt(R,k,tt.x,tt.z)<tt.r*(T.avoidScale??1)){O=!0;break}O||I.push({x:R,y:G-.05,z:k,s:i.range(M,C),rot:i.range(0,6.28),alive:!0,tint:i.next()})}return I},g=new ut(this.theme.colors.grass2),v=new ut(this.theme.colors.grass1);if(e.grass){let _=m("grass",e.grass,.7,1.4,{isGrass:!0,avoidScale:0});this.addInstanced("grass",_,{castShadow:!1,colors:x=>g.clone().lerp(v,x.tint).multiplyScalar(1.1)})}if(e.corn){let _=m("corn",e.corn,.85,1.15,{cluster:6,maxSlope:.4,avoidScale:.7}).filter(x=>l.distToPath(x.x,x.z)>1.6);if(this.addInstanced("corn",_,{castShadow:this.quality==="high"}),this.cornList=_,c.vogelscheuche&&_.length){let x=[],M=Math.max(1,Math.round(c.vogelscheuche*n));for(let C=0;C<M*4&&x.length<M;C++){let T=_[i.int(0,_.length-1)];x.some(I=>Pt(I.x,I.z,T.x,T.z)<12)||h.some(I=>Pt(T.x,T.z,I.x,I.z)<I.r)||this.obstacles.some(I=>Pt(T.x,T.z,I.x,I.z)<I.r+1)||x.push({kind:"vogelscheuche",x:T.x,y:l.heightAt(T.x,T.z)-.1,z:T.z,s:i.range(.95,1.1),rot:i.range(0,6.28),alive:!0})}f("vogelscheuche",x,.3,.45,2.2)}}e.pumpkin&&this.addInstanced("pumpkin",m("pumpkin",e.pumpkin,.7,1.3,{cluster:5,maxSlope:.4}));{let _=e.reed?m("reed",e.reed,.8,1.3,{minH:-.4,maxH:.8,maxSlope:1,cluster:3,avoidScale:.5}):[];if(l.lake&&this.theme.id!=="gletscher"){let x=l.lake,M=Math.round(7*s)+2;for(let C=0;C<M;C++){let T=i.range(0,Math.PI*2),I=null;for(let F=x.r*.4;F<x.r*2.4;F+=.3){let R=x.x+Math.cos(T)*F,k=x.z+Math.sin(T)*F;if(l.baseHeightAt(R,k)>l.waterLevel-.25){I={x:R,z:k};break}}if(!I||this.onDeck(I.x,I.z,3))continue;let z=Math.round(i.range(6,12)*o)+2;for(let F=0;F<z;F++){let R=I.x+i.range(-1.6,1.6),k=I.z+i.range(-1.6,1.6),G=l.baseHeightAt(R,k);G<l.waterLevel-.5||G>l.waterLevel+.7||this.onDeck(R,k,1)||_.push({x:R,y:G-.05,z:k,s:i.range(.8,1.25),rot:i.range(0,6.28),alive:!0})}}}_.length&&this.addInstanced("reed",_,{castShadow:!1})}let w={alm:["blume_weiss","blume_gelb","blume_lila","blume_blau"],weinberg:["blume_rot","blume_weiss","blume_gelb"],au:["blume_weiss","blume_gelb","blume_lila"],kukuruz:["blume_rot","blume_blau","blume_gelb"],steinbruch:["blume_gelb","blume_weiss","blume_lila"]}[this.theme.id]||["blume_weiss","blume_gelb","blume_rot","blume_lila"],b={},A=(_,x,M,C)=>{let T=l.heightAt(x,M);T<l.waterLevel+.55||l.slopeAt(x,M)>.8||this.onDeck(x,M,.5)||l.distToPath(x,M)<1.2||(b[_]||(b[_]=[])).push({x,y:T-.04,z:M,s:C,rot:i.range(0,6.28),alive:!0})};for(let _=0;_<Math.round((this.theme.flowerPatches||0)*n);_++){let x=this.findSpot(i,{maxSlope:.5,minDist:0,avoid:[],pathGap:1.6,weight:(k,G)=>1-l.forestAt(k,G),minH:.8,tries:30});if(!x)continue;this.flowerSpots.push({x:x.x,z:x.z});let M=w[i.int(0,w.length-1)],C=w[i.int(0,w.length-1)],T=i.range(2.2,3.6),I=Math.round(i.range(40,75)*o)+6,z=i.range(0,Math.PI),F=Math.cos(z),R=Math.sin(z);for(let k=0;k<I;k++){let G=i.range(0,Math.PI*2),O=Math.pow(i.next(),.6)*T,tt=Math.cos(G)*O*1.4,q=Math.sin(G)*O;A(i.chance(.7)?M:C,x.x+tt*F-q*R,x.z+tt*R+q*F,i.range(1.1,1.7)*(1-O/T*.3))}}if(e.flowers)for(let _ of m("flower",e.flowers,1,1.4,{isGrass:!0,avoidScale:0,cluster:2.5}))A(w[Math.floor(_.tint*w.length)],_.x,_.z,_.s);if(this.theme.flowerPatches)for(let _=0;_<Math.round(60*a);_++){let x=this.besidePath(i,1.5,2.6);x&&A(w[i.int(0,w.length-1)],x.x,x.z,i.range(1,1.4))}for(let _ in b)this.addInstanced(_,b[_],{castShadow:!1});if(c.sonnenblumen){let _=[],x=Math.atan2(this.sunDir.x,this.sunDir.z),M=2;for(let C=0;C<M;C++){let T=this.findSpot(i,{maxSlope:.3,minDist:3,avoid:h,pathGap:3,weight:d,tries:50});if(!T)continue;let I=i.range(0,Math.PI),z=Math.cos(I),F=Math.sin(I),R=Math.round(c.sonnenblumen/M*s),k=Math.max(4,Math.round(Math.sqrt(R*1.6)));for(let G=0;G<R;G++){let O=(G%k-k/2)*.85+i.range(-.15,.15),tt=(Math.floor(G/k)-R/k/2)*1.1+i.range(-.15,.15),q=T.x+O*z-tt*F,Z=T.z+O*F+tt*z,et=l.heightAt(q,Z);et<l.waterLevel+.9||l.slopeAt(q,Z)>.5||l.distToPath(q,Z)<1.8||this.onDeck(q,Z,1)||h.some(mt=>Pt(q,Z,mt.x,mt.z)<mt.r*.6)||this.obstacles.some(mt=>mt.solid&&Pt(q,Z,mt.x,mt.z)<mt.r+.4)||_.push({x:q,y:et-.05,z:Z,s:i.range(.85,1.15),rot:x+i.range(-.35,.35),alive:!0})}}this.addInstanced("sonnenblume",_,{castShadow:this.quality!=="low"})}if(c.zaun&&l.path.length>1){let _=[],x=l.path;for(let M of[1,-1]){let C=i.int(0,4),T=0;for(let I=0;I<x.length-1;I++){let z=x[I],F=x[I+1];if(F.bridge)continue;let R=Math.hypot(F.x-z.x,F.z-z.z),k=(F.x-z.x)/R,G=(F.z-z.z)/R;for(let O=1.05;O<R;O+=2.1){if(T>0){T--;continue}if(C<=0){C=i.int(3,7),T=i.int(2,6);continue}C--;let tt=2.05*M,q=z.x+k*O-G*tt,Z=z.z+G*O+k*tt,et=l.heightAt(q,Z);et<l.waterLevel+.6||l.slopeAt(q,Z)>.8||this.onDeck(q,Z,2)||l.distToPath(q,Z)<1.7||h.some(mt=>Pt(q,Z,mt.x,mt.z)<mt.r*.7)||this.obstacles.some(mt=>mt.solid&&Pt(q,Z,mt.x,mt.z)<mt.r+1.1)||_.push({x:q,y:et-.06,z:Z,s:1,rot:Math.atan2(-G,k),alive:!0})}}}this.addInstanced("zaun",_)}if(c.seerosen&&l.lake){let _=l.lake,x=[],M=[],C=Math.round(c.seerosen*Math.max(.6,s));for(let T=0;T<C*3&&x.length<C;T++){let I=i.range(0,Math.PI*2),z=Math.sqrt(i.next())*_.r*1.25,F=_.x+Math.cos(I)*z,R=_.z+Math.sin(I)*z;if(l.baseHeightAt(F,R)>l.waterLevel-.45||this.onDeck(F,R,1.5)||x.some(G=>Pt(G.x,G.z,F,R)<.7))continue;let k={x:F,y:l.waterLevel+.03,z:R,s:i.range(.8,1.5),rot:i.range(0,6.28),alive:!0};x.push(k),i.chance(.35)&&M.push({x:F+.05,y:l.waterLevel+.05,z:R,s:i.range(.9,1.3),rot:i.range(0,6.28),alive:!0})}this.addInstanced("seerose",x,{castShadow:!1}),this.addInstanced("seerosenbluete",M,{castShadow:!1})}if(e.vine){let _=[],x=Math.round(e.vine*s);for(let M=0;M<x;M++){let C=i.range(-l.half*.85,l.half*.85),T=i.range(-l.half*.85,l.half*.85),I=l.heightAt(C,T);if(I<l.waterLevel+1||l.slopeAt(C,T)>.35||l.distToPath(C,T)<1.8||this.onDeck(C,T,2))continue;let z=!1;for(let k of h)if(Pt(C,T,k.x,k.z)<k.r*.8){z=!0;break}if(z)continue;let F=l.normalAt(C,T),R=Math.abs(F.x)+Math.abs(F.z)>.05?Math.atan2(F.x,F.z)+Math.PI/2:0;_.push({x:C,y:I-.05,z:T,s:1,rot:R-Math.PI/2,alive:!0})}this.addInstanced("vine",_,{castShadow:this.quality==="high"}),this.vineList=_}}updateOcclusion(t,e,i,n){if(!this.occluders){let l=new Set(["pine","pineSnow","broad","willow"]);this.occluders=this.obstacles.filter(c=>c.item&&l.has(c.kind)),this.ghosts=[],this._om=new Zt}let s=e.x-t.x,a=e.z-t.z,o=s*s+a*a;for(let l of this.occluders){let c=l.item,h=!1;if(n&&c.alive){let u=o>1e-6?((l.x-t.x)*s+(l.z-t.z)*a)/o:0;u=Et(u,0,1);let d=t.x+s*u,f=t.z+a*u,p=t.y+(e.y-t.y)*u;Math.hypot(l.x-d,l.z-f)<l.pr*1.05+.35&&u<.92&&p<l.top+.4&&p>l.y0-.5&&(h=!0),!h&&Math.hypot(l.x-t.x,l.z-t.z)<l.pr+1&&t.y<l.top+.6&&t.y>l.y0&&(h=!0)}if(h&&!c.ghost?this.ghostOn(c):!h&&c.ghost&&this.ghostOff(c),c.ghost){let u=c.ghost;u.material.opacity+=((h?.22:1)-u.material.opacity)*Math.min(1,i*10)}}}ghostOn(t){if(!t.alive)return;let e=this.ghosts.find(i=>!i.userData.busy);if(!e){if(this.ghosts.length>=10)return;e=new qt(t.mesh.geometry,new vi({vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1})),e.castShadow=!1,e.matrixAutoUpdate=!1,e.renderOrder=1,this.scene.add(e),this.ghosts.push(e)}e.geometry=t.mesh.geometry,e.userData.busy=!0,t.mesh.getMatrixAt(t.index,this._om),t.saved=this._om.clone(),e.matrix.copy(t.saved),e.matrixWorldNeedsUpdate=!0,e.visible=!0,e.material.opacity=1,t.mesh.setMatrixAt(t.index,new Zt().makeScale(0,0,0)),t.mesh.instanceMatrix.needsUpdate=!0,t.ghost=e}ghostOff(t){let e=t.ghost;e.visible=!1,e.userData.busy=!1,t.ghost=null,t.alive&&t.saved&&(t.mesh.setMatrixAt(t.index,t.saved),t.mesh.instanceMatrix.needsUpdate=!0)}destroyInRadius(t,e,i,n,s){let a=[],o=new Zt().makeScale(0,0,0);for(let l of this.obstacles){if(!l.destructible||!l.item.alive)continue;Pt(t,i,l.x,l.z)<n+l.r*.5&&e<l.top+1&&(l.item.alive=!1,l.solid=!1,l.item.ghost&&this.ghostOff(l.item),l.item.mesh.setMatrixAt(l.item.index,o),l.item.mesh.instanceMatrix.needsUpdate=!0,a.push(l),s&&s.propBurst(l))}for(let l of this.decoKinds){let c=this.instanced[l];if(!c)continue;let h=!1,u=new Zt,d=new D;for(let f=0;f<c.count;f++)c.getMatrixAt(f,u),d.setFromMatrixPosition(u),!(u.elements[0]===0&&u.elements[5]===0)&&Pt(t,i,d.x,d.z)<n*.9&&(c.setMatrixAt(f,o),h=!0);h&&(c.instanceMatrix.needsUpdate=!0)}return a}settleProps(t,e,i){let n=this.terrain;for(let s in this.instanced){if(this.floatKinds.has(s))continue;let a=this.instanced[s],o=new Zt,l=new D,c=new Ge,h=new D,u=!1;for(let d=0;d<a.count;d++)if(a.getMatrixAt(d,o),o.decompose(l,c,h),h.x!==0&&Pt(t,e,l.x,l.z)<i+1.5){let f=n.heightAt(l.x,l.z)-.1;f<l.y-.05&&(l.y=f,o.compose(l,c,h),a.setMatrixAt(d,o),u=!0)}u&&(a.instanceMatrix.needsUpdate=!0)}for(let s of this.obstacles)if(s.destructible&&s.item.alive&&Pt(t,e,s.x,s.z)<i+1){let a=n.heightAt(s.x,s.z);s.y0=a-.5,s.top=Math.min(s.top,a+(s.top-s.y0))}}collideCircle(t,e){let i=!1;for(let n of this.obstaclesNear(t.x,t.z)){if(!n.solid||n.walkThrough||t.y>n.top||t.y+1.6<n.y0)continue;let s=t.x-n.x,a=t.z-n.z,o=Math.sqrt(s*s+a*a),l=e+n.r;o<l&&o>1e-4&&(t.x=n.x+s/o*l,t.z=n.z+a/o*l,i=!0)}return i}update(t){if(this.time+=t,this.waterTex&&(this.waterTex.offset.x=this.time*.006,this.waterTex.offset.y=this.time*.004),this.clouds)for(let e of this.clouds.children)e.position.x+=e.userData.speed*t,e.position.x>480&&(e.position.x=-480);this.flash.intensity>0&&(this.flash.intensity=Math.max(0,this.flash.intensity-t*120))}dispose(){this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material!==we().unit&&t.material!==we().prop&&t.material!==we().item&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.waterTex&&this.waterTex.dispose()}};var nv=`
attribute float size;
attribute vec4 rgba;
varying vec4 vC;
uniform float uScale;
void main() {
  vC = rgba;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = clamp(size * uScale / max(-mv.z, 0.1), 0.0, 512.0);
  gl_Position = projectionMatrix * mv;
}`,sv=`
varying vec4 vC;
uniform float uSoft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, uSoft, d);
  gl_FragColor = vec4(vC.rgb, vC.a * a);
  #include <colorspace_fragment>
}`,Il=class{constructor(t,e,i){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.rgba=new Float32Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c0=new Float32Array(e*3),this.c1=new Float32Array(e*3),this.a0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let n=new Ee;this.posAttr=new be(this.pos,3).setUsage(Hn),this.rgbaAttr=new be(this.rgba,4).setUsage(Hn),this.sizeAttr=new be(this.size,1).setUsage(Hn),n.setAttribute("position",this.posAttr),n.setAttribute("rgba",this.rgbaAttr),n.setAttribute("size",this.sizeAttr),n.setDrawRange(0,0),this.uniforms={uScale:{value:500},uSoft:{value:i?0:.15}},this.mat=new yi({vertexShader:nv,fragmentShader:sv,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:i?$r:Bn}),this.points=new es(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=i?4:3,this.geo=n,t.add(this.points)}spawn(t,e,i,n,s,a,o,l,c,h,u,d,f=0,p=0){if(this.n>=this.max)return;let y=this.n++;this.pos[y*3]=t,this.pos[y*3+1]=e,this.pos[y*3+2]=i,this.vel[y*3]=n,this.vel[y*3+1]=s,this.vel[y*3+2]=a,this.life[y]=o,this.maxLife[y]=o,this.s0[y]=l,this.s1[y]=c,this.c0[y*3]=h.r,this.c0[y*3+1]=h.g,this.c0[y*3+2]=h.b,this.c1[y*3]=u.r,this.c1[y*3+1]=u.g,this.c1[y*3+2]=u.b,this.a0[y]=d,this.grav[y]=f,this.drag[y]=p}copy(t,e){for(let i of[this.pos,this.vel,this.c0,this.c1])i[e*3]=i[t*3],i[e*3+1]=i[t*3+1],i[e*3+2]=i[t*3+2];for(let i of[this.life,this.maxLife,this.s0,this.s1,this.a0,this.grav,this.drag])i[e]=i[t]}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){this.n--,e!==this.n&&this.copy(this.n,e);continue}let i=Math.exp(-this.drag[e]*t);this.vel[e*3]*=i,this.vel[e*3+1]=this.vel[e*3+1]*i-this.grav[e]*t,this.vel[e*3+2]*=i,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t;let n=1-this.life[e]/this.maxLife[e];this.size[e]=this.s0[e]+(this.s1[e]-this.s0[e])*n,this.rgba[e*4]=this.c0[e*3]+(this.c1[e*3]-this.c0[e*3])*n,this.rgba[e*4+1]=this.c0[e*3+1]+(this.c1[e*3+1]-this.c0[e*3+1])*n,this.rgba[e*4+2]=this.c0[e*3+2]+(this.c1[e*3+2]-this.c0[e*3+2])*n,this.rgba[e*4+3]=this.a0[e]*(1-n*n),e++}this.geo.setDrawRange(0,this.n),this.posAttr.needsUpdate=!0,this.rgbaAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}},Te=r=>new ut(r),Ut={white:Te("#ffffff"),fire1:Te("#fff2b0"),fire2:Te("#ff7a1a"),fire3:Te("#9a2a08"),smoke1:Te("#5a5650"),smoke2:Te("#a8a49c"),dust:Te("#9a8a6a"),dust2:Te("#c9bda0"),milk:Te("#fffdf5"),water:Te("#d8f0ff"),water2:Te("#8fc4e6"),gas1:Te("#7a8a2a"),gas2:Te("#5a5a20"),heal:Te("#7dff8a"),heal2:Te("#2ecc40"),spark:Te("#ffd27a"),leaf:Te("#4f8a33"),straw:Te("#e2c46a"),rock:Te("#8a867e"),black:Te("#151515"),gold:Te("#ffd54f"),red:Te("#ff3b30"),wood:Te("#7a4d28"),dirt:Te("#5b4128"),chimney:Te("#d9d6d0"),chimney2:Te("#eeece8")},Ll=class{constructor(t,e="medium"){this.scene=t;let i=e==="low"?.5:1;this.mul=i,this.add=new Il(t,Math.round(1800*i),!0),this.norm=new Il(t,Math.round(2400*i),!1),this.maxDebris=160;let n=new st(.18,.18,.18);this.debrisMesh=new gn(n,new vi({color:16777215}),this.maxDebris),this.debrisMesh.instanceMatrix.setUsage(Hn),this.debrisMesh.castShadow=!1,this.debrisMesh.frustumCulled=!1,this.debris=[],this.zero=new Zt().makeScale(0,0,0);for(let s=0;s<this.maxDebris;s++)this.debrisMesh.setMatrixAt(s,this.zero),this.debrisMesh.setColorAt(s,Ut.white);t.add(this.debrisMesh),this._m=new Zt,this._q=new Ge,this._e=new We,this._p=new D,this._s=new D,this.terrain=null}setScale(t,e){let i=t/(2*Math.tan(e*Math.PI/360));this.add.uniforms.uScale.value=i,this.norm.uniforms.uScale.value=i}r(t=1){return(Math.random()*2-1)*t}colWood(){return Ut.wood}colDirt(){return Ut.dirt}spawnDebris(t,e,i,n,s,a=7){for(let o=0;o<s;o++){let l=this.debris.findIndex(h=>!h.alive);if(l<0)if(this.debris.length<this.maxDebris)l=this.debris.length,this.debris.push({});else break;let c=this.debris[l];c.alive=!0,c.p=new D(t,e+.2,i),c.v=new D(this.r(a*.6),Math.random()*a+2,this.r(a*.6)),c.rot=new D(this.r(3),this.r(3),this.r(3)),c.spin=new D(this.r(10),this.r(10),this.r(10)),c.life=1.6+Math.random()*1.4,c.s=.6+Math.random()*1.2,this.debrisMesh.setColorAt(l,n.clone().multiplyScalar(.7+Math.random()*.5)),this.debrisMesh.instanceColor.needsUpdate=!0}}explosion(t,e,i){let n=this.mul,s=this.add,a=this.norm;s.spawn(t.x,t.y+.3,t.z,0,0,0,.18,e*3.2,e*4.2,Ut.white,Ut.fire1,1);for(let o=0;o<18*n;o++){let l=e*(.8+Math.random()*.8);s.spawn(t.x+this.r(e*.3),t.y+.3+Math.random()*.5,t.z+this.r(e*.3),this.r(e*2.2),Math.random()*e*2.5+1,this.r(e*2.2),.35+Math.random()*.35,l,l*1.6,Ut.fire1,Ut.fire3,.95,-1,3)}for(let o=0;o<16*n;o++){let l=e*(1+Math.random());a.spawn(t.x+this.r(e*.5),t.y+.5+Math.random(),t.z+this.r(e*.5),this.r(e*1.2),Math.random()*e*1.4+1.5,this.r(e*1.2),1.6+Math.random()*1.6,l*.8,l*2.6,Ut.smoke1,Ut.smoke2,.75,-.6,1.2)}for(let o=0;o<22*n;o++)s.spawn(t.x,t.y+.4,t.z,this.r(14),Math.random()*14+2,this.r(14),.4+Math.random()*.5,.25,.05,Ut.spark,Ut.fire2,1,Qe*.8,.8);for(let o=0;o<14*n;o++)a.spawn(t.x+this.r(e*.4),t.y+.2,t.z+this.r(e*.4),this.r(6),Math.random()*9+3,this.r(6),.9+Math.random()*.6,.5,.9,i||Ut.dust,Ut.dust2,.9,Qe*.7,.5);this.spawnDebris(t.x,t.y,t.z,i||Ut.dust,Math.round(10*n+e*2),e*2.2)}splash(t,e=1){let i=this.norm;for(let n=0;n<26*this.mul*e;n++)i.spawn(t.x+this.r(.4*e),t.y+.1,t.z+this.r(.4*e),this.r(2.5*e),Math.random()*8*e+3,this.r(2.5*e),.8+Math.random()*.6,.35*e,.7*e,Ut.water,Ut.water2,.9,Qe*.8,.3);for(let n=0;n<8;n++){let s=n/8*Math.PI*2;i.spawn(t.x,t.y+.05,t.z,Math.cos(s)*3*e,.3,Math.sin(s)*3*e,.8,.6*e,1.6*e,Ut.water,Ut.water2,.6,0,2.5)}}muzzle(t,e){this.add.spawn(t.x,t.y,t.z,e.x*2,e.y*2,e.z*2,.07,.9,.5,Ut.fire1,Ut.fire2,1),this.norm.spawn(t.x,t.y,t.z,e.x*1.5,e.y*1.5+.5,e.z*1.5,.6,.2,.8,Ut.smoke2,Ut.smoke2,.4,-.5,1)}tracer(t,e){let i=t.distanceTo(e),n=Math.min(40,Math.ceil(i/1.2));for(let s=0;s<n;s++){let a=s/n;this.add.spawn(t.x+(e.x-t.x)*a,t.y+(e.y-t.y)*a,t.z+(e.z-t.z)*a,0,0,0,.12+a*.05,.14,.04,Ut.spark,Ut.fire2,.9)}}impactDust(t,e){for(let i=0;i<7;i++)this.norm.spawn(t.x,t.y+.05,t.z,this.r(2),Math.random()*3+1,this.r(2),.6+Math.random()*.4,.2,.6,e||Ut.dust,Ut.dust2,.8,Qe*.5,1)}milk(t){for(let e=0;e<12;e++)this.norm.spawn(t.x,t.y,t.z,this.r(3),Math.random()*4+1,this.r(3),.5+Math.random()*.4,.16,.06,Ut.milk,Ut.milk,1,Qe*.8,.5)}smokeTrail(t){this.norm.spawn(t.x,t.y,t.z,this.r(.3),this.r(.3)+.4,this.r(.3),.9+Math.random()*.5,.25,1.1,Ut.smoke2,Ut.smoke2,.55,-.4,1.5),this.add.spawn(t.x,t.y,t.z,0,0,0,.08,.5,.2,Ut.fire1,Ut.fire2,.9)}chimney(t,e,i,n,s){this.norm.spawn(t+this.r(.1),e,i+this.r(.1),n*.25+this.r(.1),.7+Math.random()*.3,s*.25+this.r(.1),3+Math.random()*1.5,.35,1.9,Ut.chimney,Ut.chimney2,.32,-.05,.25)}puff(t,e){for(let i=0;i<6*this.mul;i++)this.norm.spawn(t.x+this.r(.2),t.y+.2,t.z+this.r(.2),this.r(1.2),Math.random()*1.5,this.r(1.2),.5+Math.random()*.4,.12,.05,e,e,.9,Qe*.15,2)}sparkle(t,e=Ut.spark){this.add.spawn(t.x,t.y,t.z,this.r(.4),.6,this.r(.4),.4,.15,.02,e,e,1)}heal(t){for(let e=0;e<26;e++)this.add.spawn(t.x+this.r(.6),t.y+Math.random()*1.6,t.z+this.r(.6),this.r(.3),1+Math.random()*1.5,this.r(.3),.9+Math.random()*.5,.3,.05,Ut.heal,Ut.heal2,1)}healRing(t,e){for(let i=0;i<48;i++){let n=i/48*Math.PI*2;this.add.spawn(t.x+Math.cos(n)*e,t.y+.3,t.z+Math.sin(n)*e,0,1.5,0,1.1,.5,.1,Ut.heal,Ut.heal2,1)}}gas(t,e){let i=Math.random()*Math.PI*2,n=Math.random()*e*.85;this.norm.spawn(t.x+Math.cos(i)*n,t.y+Math.random()*1.2,t.z+Math.sin(i)*n,this.r(.3),.15+Math.random()*.25,this.r(.3),2+Math.random()*1.5,1.2,2.6,Ut.gas1,Ut.gas2,.45,0,.5)}gasBurst(t,e){for(let i=0;i<40*this.mul;i++){let n=Math.random()*Math.PI*2,s=Math.random()*e*1.4;this.norm.spawn(t.x,t.y+.4,t.z,Math.cos(n)*s,Math.random()*2,Math.sin(n)*s,1.4+Math.random(),.8,2.6,Ut.gas1,Ut.gas2,.7,0,1.8)}}flame(t,e,i){for(let n=0;n<6;n++){let s=i*(1.1+Math.random()*.5);this.add.spawn(t.x,t.y,t.z,e.x*s+this.r(1.6),e.y*s+this.r(1)+.6,e.z*s+this.r(1.6),.55+Math.random()*.25,.3,1.6,Ut.fire1,Ut.fire3,.9,-1.5,1.2)}this.norm.spawn(t.x+e.x*i*.8,t.y+.5,t.z+e.z*i*.8,this.r(.5),1.2,this.r(.5),1.2,.6,1.8,Ut.smoke1,Ut.smoke2,.35,-.5,1)}burning(t){this.add.spawn(t.x+this.r(.3),t.y+Math.random()*.8,t.z+this.r(.3),this.r(.3),1.5+Math.random(),this.r(.3),.4,.5,.1,Ut.fire1,Ut.fire3,.9)}propBurst(t){let e=t.top-1,i=t.kind,n=Ut.leaf;i==="rock"?n=Ut.rock:i==="bale"||i==="heumandl"||i==="vogelscheuche"?n=Ut.straw:i==="fass"?n=Ut.wood:i==="silo"&&(n=Ut.white),this.spawnDebris(t.x,e*.5+t.y0*.5,t.z,n,8,5);for(let s=0;s<20*this.mul;s++)this.norm.spawn(t.x+this.r(1),(t.y0+e)/2+Math.random()*2,t.z+this.r(1),this.r(3),Math.random()*4,this.r(3),1+Math.random(),.3,.15,n,n,1,Qe*.3,1.5)}stars(t){for(let e=0;e<10;e++){let i=e/10*Math.PI*2;this.add.spawn(t.x,t.y,t.z,Math.cos(i)*2,1.5,Math.sin(i)*2,.6,.3,.05,Ut.gold,Ut.gold,1,2,1)}}update(t){this.add.update(t),this.norm.update(t);let e=!1;for(let i=0;i<this.debris.length;i++){let n=this.debris[i];if(!n.alive)continue;if(e=!0,n.life-=t,n.life<=0){n.alive=!1,this.debrisMesh.setMatrixAt(i,this.zero);continue}if(n.v.y-=Qe*t,n.p.addScaledVector(n.v,t),this.terrain){let a=this.terrain.heightAt(n.p.x,n.p.z);n.p.y<a+.05&&(n.p.y=a+.05,n.v.y=Math.abs(n.v.y)*.3,n.v.x*=.6,n.v.z*=.6,n.spin.multiplyScalar(.6))}n.rot.addScaledVector(n.spin,t);let s=n.s*Math.min(1,n.life*2);this._e.set(n.rot.x,n.rot.y,n.rot.z),this._q.setFromEuler(this._e),this._m.compose(n.p,this._q,this._s.set(s,s,s)),this.debrisMesh.setMatrixAt(i,this._m)}(e||this._hadDebris)&&(this.debrisMesh.instanceMatrix.needsUpdate=!0),this._hadDebris=e}};var Dl=class{constructor(t){this.cam=new ai(55,t,.1,1500),this.target=new D(0,5,0),this.goal=new D(0,5,0),this.yaw=.6,this.pitch=.42,this.dist=40,this.goalDist=40,this.goalPitch=.42,this.mode="orbit",this.obj=null,this.userTime=99,this.shakeAmt=0,this.fov=55,this.goalFov=55,this.terrain=null,this.side=0,this.manualZoom=1,this.lockYaw=!1}setMode(t,e,i={}){this.mode=t,this.obj=e||null,this.opts=i,t==="overview"&&(this.goalPitch=1.05,this.goalDist=105*(this.worldScale||1),i.keepTarget||this.goal.set(0,0,0))}orbitInput(t,e){this.yaw-=t,this.goalPitch=Et(this.goalPitch+e,-.15,1.45),this.pitch=this.goalPitch,this.userTime=0}pan(t,e){let i=this.dist*.0018,n=Math.sin(this.yaw),s=Math.cos(this.yaw);this.goal.x+=(-t*s-e*n)*i,this.goal.z+=(t*n-e*s)*i;let a=70*(this.worldScale||1);this.goal.x=Et(this.goal.x,-a,a),this.goal.z=Et(this.goal.z,-a,a),this.userTime=0}zoomInput(t){this.manualZoom=Et(this.manualZoom*t,.45,2.4),this.userTime=0}shake(t){this.shakeAmt=Math.min(1.5,this.shakeAmt+t)}update(t){this.userTime+=t;let e=this.obj,i=null,n=6,s=!1;switch(this.mode){case"follow":{e&&(this.goal.set(e.pos.x,e.pos.y+1.3,e.pos.z),e.moving&&this.userTime>1.2&&(i=e.yaw+Math.PI)),this.goalDist=9*this.manualZoom,this.userTime>1.2&&(this.goalPitch=Al(this.goalPitch,.38,1-Math.exp(-t*2))),this.goalFov=55;break}case"aim":{if(e){let c=Math.sin(e.yaw),h=Math.cos(e.yaw),u=e.aimPitch,d=Math.cos(u),f=Math.sin(u);if(i=e.yaw+Math.PI,n=10,this.opts&&this.opts.sniper){let p=e.muzzle(this._m||(this._m=new D));this.goal.set(p.x+c*d*10,p.y+f*10,p.z+h*d*10),this.goalDist=10,this.goalPitch=-u,this.goalFov=24,s=!0}else if(this.opts&&this.opts.ballistic){let p=Et(e.aimLandDist||14,4,50),y=p*.42;this.goal.set(e.pos.x+c*y,e.pos.y+1,e.pos.z+h*y),this.goalDist=(8+p*.62)*Math.sqrt(this.manualZoom),this.goalPitch=.56,this.goalFov=55,n=4}else{let y=e.muzzle(this._m||(this._m=new D));this.goal.set(y.x+c*d*10,y.y+f*10,y.z+h*d*10),this.goalDist=(10+4.5)*Math.sqrt(this.manualZoom),this.goalPitch=Et(.2-u,-1.2,1.3),this.goalFov=52}}break}case"tactical":{let c=this.tc;if(e&&c){let h=Math.sin(c.yaw),u=Math.cos(c.yaw);this.goal.set(e.pos.x+h*c.ahead*.55,e.pos.y+.5,e.pos.z+u*c.ahead*.55),i=c.yaw+Math.PI,this.goalDist=12+c.ahead*.85,this.goalPitch=.82,this.goalFov=55,n=5}break}case"track":{e&&(this.goal.copy(e.pos||e),e.vel&&this.userTime>.8&&Math.hypot(e.vel.x,e.vel.z)>2&&(i=Math.atan2(e.vel.x,e.vel.z)+Math.PI+.35)),this.goalDist=13*this.manualZoom,this.goalPitch=Al(this.goalPitch,.35,1-Math.exp(-t*2)),this.goalFov=55,n=5;break}case"point":{e&&this.goal.copy(e),this.goalDist=(this.opts&&this.opts.dist?this.opts.dist:16)*this.manualZoom,this.goalFov=55;break}case"overview":{this.goalDist=105*(this.worldScale||1)*this.manualZoom,this.goalFov=55;break}case"orbit":{e&&this.goal.copy(e.pos||e),this.userTime>2&&(this.yaw+=t*.06),this.goalDist=this.opts&&this.opts.dist||70,this.goalPitch=this.opts&&this.opts.pitch||.45,this.goalFov=50,n=1.2;break}default:break}s&&(this.yaw=i,this.target.copy(this.goal),this.dist=this.goalDist,this.pitch=this.goalPitch,i=null),i!==null&&(this.yaw+=Js(this.yaw,i)*(1-Math.exp(-t*(this.mode==="aim"?12:this.mode==="tactical"?6:2.5)))),this.target.x=ke(this.target.x,this.goal.x,n,t),this.target.y=ke(this.target.y,this.goal.y,n,t),this.target.z=ke(this.target.z,this.goal.z,n,t),this.dist=ke(this.dist,this.goalDist,5,t),this.pitch=ke(this.pitch,this.goalPitch,6,t),Math.abs(this.fov-this.goalFov)>.05&&(this.fov=ke(this.fov,this.goalFov,8,t),this.cam.fov=this.fov,this.cam.updateProjectionMatrix());let a=Math.cos(this.pitch),o=Math.sin(this.pitch),l=this.cam.position;if(l.set(this.target.x+Math.sin(this.yaw)*a*this.dist,this.target.y+o*this.dist,this.target.z+Math.cos(this.yaw)*a*this.dist),this.terrain&&!s){let c=this.terrain.heightAt(l.x,l.z)+.8,h=this.terrain.waterLevel+.6,u=Math.max(c,h);l.y<u&&(l.y=u)}if(this.shakeAmt>.001){let c=this.shakeAmt*.35;l.x+=(Math.random()-.5)*c,l.y+=(Math.random()-.5)*c,l.z+=(Math.random()-.5)*c,this.shakeAmt*=Math.exp(-t*7)}this.cam.lookAt(this.target)}screenRay(t,e){let n=new D(t,e,.5).unproject(this.cam).sub(this.cam.position).normalize();return{origin:this.cam.position.clone(),dir:n}}};var rv=1;function da(r,t,e,i,n=new D){let s=Math.cos(e),a=Math.sin(t)*s,o=Math.sin(e),l=Math.cos(t)*s,c=1.3,h=.75;return i&&i.type==="hitscan"&&(i.zoom?(c=1.86,h=.55):(c=1.62,h=.6)),n.set(r.x+a*h,r.y+c+o*h,r.z+l*h)}var zl=class{constructor(t,e,i){this.uid=rv++,this.game=t,this.s=e,this.team=i,this.hpMax=Zs[e.tier],this.hp=this.hpMax,this.pos=new D,this.vel=new D,this.slide=new D,this.yaw=0,this.aimPitch=.3,this.onGround=!0,this.alive=!0,this.stamina=100,this.moving=!1,this.walkAmt=0,this.phase=Math.random()*10,this.aiming=!1,this.ammo=Tl(e),this.stats={dmg:0,kills:0,dmgTaken:0},this.squash=0,this.deathT=0,this.deathKind=null,this.noFall=!1,this.lastHitBy=null,this.lastHitTime=-99,this.scripted=null,this.throwAnim=0,this.lunge=0,this.cheer=0,this.burnT=0,this.dug=!1,this.digDepth=0,this.tunnelDepth=0;let n=Math.floor(pi(e.id*13+7,e.name.length)*1e9);this.model=wf({sex:e.sex,breed:e.breed,teamColor:i.color,tier:e.tier,seed:n}),t.scene.add(this.model.root),this.center=new D,this.headPos=new D,this.weapon=this.defaultWeapon()}get isStier(){return this.s.sex==="stier"}get name(){return hf(this.s)}get title(){return qn(this.s)}get rank(){return Xi[this.s.tier]}defaultWeapon(){for(let t of["panzerfaust","sniper","gewehr","flinte","granate","pistole"])if(this.ammo[t]&&this.ammo[t]!==0)return t;return"pistole"}weapons(){return El.filter(t=>this.ammo[t]!==void 0)}getCenter(){return this.center.set(this.pos.x,this.pos.y+.95-this.digDepth,this.pos.z)}getHead(){return this.headPos.set(this.pos.x,this.pos.y+2.05-this.digDepth,this.pos.z)}forward(t=new D){return t.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}aimDir(t=new D,e=this.yaw,i=this.aimPitch){let n=Math.cos(i);return t.set(Math.sin(e)*n,Math.sin(i),Math.cos(e)*n)}muzzle(t=new D,e=this.yaw,i=this.aimPitch,n=Kt[this.weapon]){return da(this.pos,e,i,n,t),t.y-=this.digDepth,t}setHeld(t){t&&(this.weapon=t);let e=Kt[t],i=this.model;i.gun.visible=!1,i.tube.visible=!1,i.ball.visible=!1,e&&(e.type==="hitscan"||e.type==="cone"?i.gun.visible=!0:e.tube?i.tube.visible=!0:e.throw&&(i.ball.visible=!0))}impulse(t){if(this.dug){if(t=t.clone().multiplyScalar(.25),t.length()<2.2)return;this.game.forts.undig(this)}this.vel.add(t),this.vel.y<1.5&&(this.vel.y=1.5),this.onGround=!1,this.slide.set(0,0,0)}jump(){if(!this.onGround||this.scripted||this.stamina<5)return!1;this.dug&&this.game.forts.undig(this);let t=this.forward();return this.vel.set(t.x*3.6,6.4,t.z*3.6),this.onGround=!1,this.stamina=Math.max(0,this.stamina-6),!0}startFlight(t,e){this.scripted={from:this.pos.clone(),to:t.clone(),t:0,dur:e},this.onGround=!1,this.model.chute.visible=!1}startTunnel(t,e){this.scripted={tunnel:!0,from:this.pos.clone(),to:t.clone(),t:0,dur:e,phase:"sink"},this.onGround=!1,this.dug&&this.game.forts.undig(this,!0)}updateTunnel(t){let e=this.game.terrain,i=this.scripted;i.t+=t;let n=.6,s=2.6;if(i.t<n)i.phase="sink",this.tunnelDepth=i.t/n*s,this.model.root.rotation.z=Math.sin(i.t*40)*.08,Math.random()<.5&&this.game.fx.impactDust(this.pos.clone(),e.colors.dirt);else if(i.t<i.dur-n){i.phase="travel";let a=(i.t-n)/Math.max(.01,i.dur-2*n);this.pos.x=i.from.x+(i.to.x-i.from.x)*a,this.pos.z=i.from.z+(i.to.z-i.from.z)*a,this.pos.y=Math.max(e.heightAt(this.pos.x,this.pos.z),e.waterLevel),this.tunnelDepth=s}else{i.phase!=="rise"&&(i.phase="rise",this.pos.set(i.to.x,e.heightAt(i.to.x,i.to.z),i.to.z),this.game.fx.spawnDebris(this.pos.x,this.pos.y+.2,this.pos.z,this.game.fx.colDirt(),12,5),this.game.sfx("thump"));let a=Et((i.dur-i.t)/n,0,1);this.tunnelDepth=a*s,this.model.root.rotation.z=Math.sin(i.t*40)*.08*a,i.t>=i.dur&&(this.scripted=null,this.tunnelDepth=0,this.model.root.rotation.z=0,this.pos.y=e.heightAt(this.pos.x,this.pos.z),this.onGround=!0,this.vel.set(0,0,0),this.game.fx.impactDust(this.pos.clone(),e.colors.dirt),this.game.forts.dropHill(this.pos.x+Math.sin(this.yaw+Math.PI)*.9,this.pos.z+Math.cos(this.yaw+Math.PI)*.9))}this.model.root.visible=this.tunnelDepth<s-.05}update(t){let e=this.game.terrain;if(!this.alive){this.updateDead(t);return}if(this.digDepth=ke(this.digDepth,this.dug?Kt.schaufel.depth:0,this.dug?5:9,t),this.digDepth<.004&&(this.digDepth=0),this.scripted&&this.scripted.tunnel)this.updateTunnel(t);else if(this.scripted){let i=this.scripted;i.t+=t;let n=Math.min(1,i.t/i.dur),s=Math.sin(n*Math.PI)*(6+i.from.distanceTo(i.to)*.25);this.pos.lerpVectors(i.from,i.to,n),this.pos.y+=s,this.model.chute.visible=n>.45,n>=1&&(this.scripted=null,this.pos.y=e.heightAt(this.pos.x,this.pos.z),this.onGround=!0,this.model.chute.visible=!1,this.vel.set(0,0,0),this.game.fx.impactDust(this.pos))}else if(this.onGround){if(this.slide.lengthSq()>.004){let s=this.pos.x+this.slide.x*t,a=this.pos.z+this.slide.z*t;this.pos.x=s,this.pos.z=a,this.slide.multiplyScalar(Math.exp(-4*t)),this.game.world.collideCircle(this.pos,.45)}if(e.slopeAt(this.pos.x,this.pos.z)>1.5){let s=e.normalAt(this.pos.x,this.pos.z);this.slide.x+=s.x*9*t,this.slide.z+=s.z*9*t}let n=e.heightAt(this.pos.x,this.pos.z);n<this.pos.y-.35?(this.onGround=!1,this.vel.set(this.slide.x,0,this.slide.z)):this.pos.y=n}else{this.vel.y-=Qe*t,this.vel.x*=Math.exp(-.15*t),this.vel.z*=Math.exp(-.15*t),this.pos.addScaledVector(this.vel,t),this.game.world.collideCircle(this.pos,.45);let i=e.heightAt(this.pos.x,this.pos.z);if(this.pos.y<=i){let n=-this.vel.y;this.pos.y=i,this.onGround=!0,Math.hypot(this.vel.x,this.vel.z)>1.5&&this.slide.set(this.vel.x,0,this.vel.z).multiplyScalar(.35),this.vel.set(0,0,0),n>12.5&&!this.noFall&&this.game.damageUnit(this,Math.round((n-12.5)*3.2),this.lastHitBy,null,"fall"),n>4&&this.game.fx.impactDust(this.pos),this.noFall=!1,this.squash=Math.min(1,n/12)}}if(this.pos.y<e.waterLevel-.85||Math.abs(this.pos.x)>200||Math.abs(this.pos.z)>200){this.game.onDrown(this);return}this.burnT>0&&(this.burnT-=t,Math.random()<.5&&this.game.fx.burning(this.getCenter())),this.animate(t)}updateDead(t){this.deathT+=t;let e=this.model;if(this.deathKind==="drown"){this.pos.y-=t*.8,e.root.position.copy(this.pos),e.root.rotation.z=Math.sin(this.deathT*6)*.2,Math.random()<.3&&this.game.fx.norm.spawn(this.pos.x+(Math.random()-.5),this.game.terrain.waterLevel+.05,this.pos.z+(Math.random()-.5),0,.5,0,.6,.2,.4,Cf,Cf,.8,0,1),this.deathT>2.5&&(e.root.visible=!1);return}if(this.onGround)this.pos.y=this.game.terrain.heightAt(this.pos.x,this.pos.z);else{this.vel.y-=Qe*t,this.pos.addScaledVector(this.vel,t);let i=this.game.terrain.heightAt(this.pos.x,this.pos.z);this.pos.y<=i&&(this.pos.y=i,this.onGround=!0,this.vel.set(0,0,0))}if(e.root.position.copy(this.pos),e.root.rotation.z=ke(e.root.rotation.z,Math.PI/2,6,t),e.legL.rotation.x=ke(e.legL.rotation.x,.6,4,t),e.legR.rotation.x=ke(e.legR.rotation.x,-.4,4,t),this.deathT>1.6&&!this.grave&&this.pos.y>this.game.terrain.waterLevel-.5){e.root.visible=!1;let i=new qt(gi("grave"),we().prop);i.position.copy(this.pos),i.rotation.y=this.yaw,i.castShadow=!0,this.game.scene.add(i),this.grave=i,this.game.fx.impactDust(this.pos)}this.grave&&(this.grave.position.y=this.game.terrain.heightAt(this.grave.position.x,this.grave.position.z))}animate(t){let e=this.model,i=this.game.time;this.walkAmt=ke(this.walkAmt,this.moving?1:0,10,t),this.moving&&(this.phase+=t*10);let n=Math.sin(this.phase)*.7*this.walkAmt,s=!this.onGround&&!this.scripted?1:0;if(e.legL.rotation.x=n+s*.5,e.legR.rotation.x=-n-s*.3,e.body.position.y=Math.abs(Math.sin(this.phase))*.07*this.walkAmt+Math.sin(i*2+this.uid)*.012,e.tail.rotation.z=Math.sin(i*2.3+this.uid)*.4,e.tail.rotation.x=.15+Math.sin(i*1.7+this.uid)*.1,e.head.rotation.y=Math.sin(i*.7+this.uid*2)*.12*(1-this.walkAmt),e.head.rotation.x=Math.sin(i*1.1+this.uid)*.04,this.cheer>0)this.cheer+=t,e.armL.rotation.x=-2.8+Math.sin(i*10)*.3,e.armR.rotation.x=-2.8-Math.sin(i*10)*.3,e.armL.rotation.z=.2,e.armR.rotation.z=-.2,e.body.position.y+=Math.abs(Math.sin(i*7))*.25,e.weapon.visible=!1;else if(this.aiming){let o=this.aimPitch,l=Kt[this.weapon];l&&l.throw?(this.throwAnim=Math.max(0,this.throwAnim-t*4),e.armR.rotation.x=ke(e.armR.rotation.x,-2.6+this.throwAnim*2.2,18,t),e.armR.rotation.z=-.2,e.armL.rotation.x=ke(e.armL.rotation.x,-1.2,10,t),e.armL.rotation.z=.2,e.weapon.rotation.x=0,e.weapon.position.set(0,1.62-this.throwAnim*.3,-.05+this.throwAnim*.4)):(e.weapon.position.set(0,l&&l.tube?1.45:1.25,.3),e.weapon.rotation.x=-o,e.armL.rotation.x=ke(e.armL.rotation.x,-Math.PI/2-o+.15,14,t),e.armR.rotation.x=ke(e.armR.rotation.x,-Math.PI/2-o+.15,14,t),e.armL.rotation.z=.35,e.armR.rotation.z=-.35),e.weapon.visible=!0}else e.weapon.visible=!0,e.weapon.position.set(0,1.2,.3),e.weapon.rotation.x=ke(e.weapon.rotation.x,.7,8,t),e.armL.rotation.x=ke(e.armL.rotation.x,-.55-n*.5-s*1.5,10,t),e.armR.rotation.x=ke(e.armR.rotation.x,-.55+n*.5-s*1.5,10,t),e.armL.rotation.z=.25+s*.6,e.armR.rotation.z=-.25-s*.6;this.lunge>0?(this.lunge=Math.max(0,this.lunge-t*3),e.body.rotation.x=Math.sin(this.lunge*Math.PI)*.6,e.head.rotation.x=Math.sin(this.lunge*Math.PI)*.5):e.body.rotation.x=ke(e.body.rotation.x,0,10,t),this.squash=Math.max(0,this.squash-t*4);let a=Math.sin(this.squash*Math.PI)*.18;e.root.scale.set(1+a*.5,1-a,1+a*.5),e.root.position.copy(this.pos),e.root.position.y-=this.digDepth+this.tunnelDepth,e.root.rotation.y=this.yaw,this.scripted&&this.model.chute.visible&&(e.chute.rotation.y+=t*.5)}dispose(){this.game.scene.remove(this.model.root),this.model.root.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.grave&&(this.game.scene.remove(this.grave),this.grave.geometry.dispose())}},Cf=new ut("#e0f4ff");var av=[],Nl=1/60,ov=new D,lv=new ut("#b0aca4"),cv=new ut("#d0ccc4"),hv=new D(0,.15,0);function Pf(r,t,e){let i=Nl;if(r.t+=i,r.bounced=!1,t.fuse&&r.t>=t.fuse)return{type:"fuse"};if(r.t>14)return{type:t.fuse?"fuse":"gone"};if(r.rest)return r.y=e.terrain.heightAt(r.x,r.z)+.1,r.y<e.waterLevel?{type:"water"}:t.fuse&&r.t>=t.fuse?{type:"fuse"}:null;r.vy-=Qe*i,t.wind&&(r.vx+=e.wind.x*t.wind*Eh*i,r.vz+=e.wind.z*t.wind*Eh*i);let n=r.x+r.vx*i,s=r.y+r.vy*i,a=r.z+r.vz*i,o=e.units;for(let h=0;h<o.length;h++){let u=o[h];if(!u.alive||u===e.owner&&r.t<.35||u.scripted&&u.scripted.tunnel)continue;let d=n-u.pos.x,f=s-(u.pos.y+.95-(u.digDepth||0)),p=a-u.pos.z;if(d*d+f*f*.4+p*p<.36){if(t.impact)return r.x=n,r.y=s,r.z=a,{type:"unit",unit:u};let y=Math.hypot(d,p)||1,m=d/y,g=p/y,v=Math.max(2.2,Math.hypot(r.vx,r.vz)*.4);return r.vx=m*v,r.vz=g*v,r.vy=Math.max(Math.abs(r.vy)*.3,1.2),r.x=u.pos.x+m*.65,r.z=u.pos.z+g*.65,r.rest=!1,r.bounced=!0,null}}let l=e.grid?e.grid.get(ua(Math.floor(n/Ii),Math.floor(a/Ii)))||av:e.obstacles;for(let h=0;h<l.length;h++){let u=l[h];if(!u.solid||s>u.top||s<u.y0||u.shed&&r.x0!==void 0&&(r.x0-u.x)*(r.x0-u.x)+(r.z0-u.z)*(r.z0-u.z)<u.pr*u.pr)continue;let d=n-u.x,f=a-u.z;if(d*d+f*f<u.pr*u.pr){if(t.impact)return r.x=n,r.y=s,r.z=a,{type:"prop",prop:u};let p=Math.sqrt(d*d+f*f)||1,y=d/p,m=f/p,g=r.vx*y+r.vz*m;return g<0&&(r.vx=(r.vx-2*g*y)*.5,r.vz=(r.vz-2*g*m)*.5),r.x=u.x+y*(u.pr+.05),r.z=u.z+m*(u.pr+.05),Math.hypot(r.vx,r.vz)<1&&(r.vx=y*1.5,r.vz=m*1.5),r.bounced=!0,null}}let c=e.terrain.heightAt(n,a);if(s<=c){if(t.impact)return r.x=n,r.y=c,r.z=a,{type:"ground"};let h=e.terrain.normalAt(n,a,ov),u=t.bounce||.4,d=r.vx*h.x+r.vy*h.y+r.vz*h.z;d<0&&(r.vx-=(1+u)*d*h.x,r.vy-=(1+u)*d*h.y,r.vz-=(1+u)*d*h.z),r.vx*=.78,r.vz*=.78,r.x=n,r.z=a,r.y=c+.03;let f=r.vx*r.vx+r.vy*r.vy+r.vz*r.vz;f<.9&&(r.vx=r.vy=r.vz=0,r.rest=!0),r.bounced=f>2}else r.x=n,r.y=s,r.z=a;return r.y<e.waterLevel?{type:"water"}:t.fuse&&r.t>=t.fuse?{type:"fuse"}:Math.abs(r.x)>320||Math.abs(r.z)>320||r.y<-20?{type:"gone"}:null}function js(r,t,e,i,n=9,s=null){let a={x:t.x,y:t.y,z:t.z,x0:t.x,z0:t.z,vx:e.x,vy:e.y,vz:e.z,t:0,rest:!1},o=Math.ceil(n/Nl);for(let l=0;l<o;l++){let c=Pf(a,r,i);if(s&&l%3===0&&s.push(a.x,a.y,a.z),c)return{...c,x:a.x,y:a.y,z:a.z,t:a.t}}return{type:"timeout",x:a.x,y:a.y,z:a.z,t:a.t}}var ls=class{constructor(t,e,i,n,s,a,o={}){this.game=t,this.W=e,this.wid=i,this.owner=a,this.opts=o,this.s={x:n.x,y:n.y,z:n.z,x0:n.x,z0:n.z,vx:s.x,vy:s.y,vz:s.z,t:0,rest:!1},this.mesh=new qt(gi(o.mesh||e.mesh||"granate"),we().item),this.mesh.castShadow=!0,o.scale&&this.mesh.scale.setScalar(o.scale),t.scene.add(this.mesh),this.acc=0,this.dead=!1,this.spin=new D(Math.random()*8,Math.random()*8,Math.random()*8),this.pos=new D(n.x,n.y,n.z),this.vel=new D(s.x,s.y,s.z),this.trailT=0,this.sync()}sync(){let t=this.s;if(this.pos.set(t.x,t.y,t.z),this.vel.set(t.vx,t.vy,t.vz),this.mesh.position.copy(this.pos),(this.W.impact||this.opts.align)&&this.vel.lengthSq()>.01){let e=this.pos.clone().add(this.vel);this.mesh.lookAt(e)}}update(t,e){if(!this.dead){for(this.acc+=t;this.acc>=Nl;){this.acc-=Nl;let i=Pf(this.s,this.W,e);if(this.s.bounced&&this.game.sfx("bounce"),i){this.sync(),this.dead=!0,this.game.onProjectileHit(this,i);return}}if(this.sync(),!this.W.impact&&!this.opts.align&&!this.s.rest&&(this.mesh.rotation.x+=this.spin.x*t,this.mesh.rotation.y+=this.spin.y*t),this.trailT-=t,this.trailT<=0){this.trailT=.025;let i=this.game.fx;this.wid==="panzerfaust"?i.smokeTrail(this.pos):this.W.impact&&i.norm.spawn(this.pos.x,this.pos.y,this.pos.z,0,.3,0,.6,.15,.5,lv,cv,.35,-.3,1),this.W.fuse&&this.s.t>this.W.fuse-1&&Math.floor(this.s.t*8)%2===0&&i.sparkle(this.pos.clone().add(hv)),this.wid==="guelle"&&i.gas(this.pos,.2)}}}remove(){this.game.scene.remove(this.mesh),this.mesh.geometry.dispose()}};var Yi=D;function Qs(){let r=0,t=0;for(;r===0;)r=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*t)}function If(r,t,e=new Yi){let i=Math.cos(t);return e.set(Math.sin(r)*i,Math.sin(t),Math.cos(r)*i)}var Ul=class{constructor(t,e,i){this.game=t,this.team=e,this.diff=i,this.D=ca[i]||ca.normal,this.sims=0}ok(t){let e=this.game;return!e.disposed&&t.alive&&e.phase==="ai"&&e.unit===t}finish(){let t=this.game;!t.disposed&&t.phase==="ai"&&t.endTurn()}async yieldMaybe(t=!1){this.sims++;let e=performance.now();this.frameStart||(this.frameStart=e),(t||e-this.frameStart>7)&&(await this.game.nextFrame(),this.frameStart=performance.now())}async takeTurn(t){let e=this.game;if(await e.wait(.7+.5*this.D.think),!this.ok(t))return this.finish();let i=Et(1+Qs()*this.D.windErr,-.2,2);if(this.env={...e.env,wind:{x:e.wind.x*i,z:e.wind.z*i},owner:null},t=await this.chooseUnit(t),!this.ok(t))return this.finish();let n=()=>{let o=t.pos.clone();return o.y-=t.digDepth||0,o},s=await this.plan(t,n(),!1),a=await this.chooseMove(t,s);if(a){if(await this.walkTo(t,a),!this.ok(t))return this.finish();s=await this.plan(t,n(),!1)}if(!this.ok(t))return this.finish();s&&s.score>1?await this.execute(t,s):await e.wait(.6),this.finish()}async chooseUnit(t){let e=this.game,i=this.team.units.filter(a=>a.alive);if(i.length<2||Math.random()>this.D.smart)return t;let n=t,s=-1/0;for(let a of i){let o=await this.plan(a,a.pos.clone(),!0),l=o?o.score:0;if(a===t&&(l+=4),a.hp<a.hpMax*.35&&(l+=6),l>s&&(s=l,n=a),!this.ok(t))return t}return n!==t&&(e.unit=n,n.stamina=100,e.weapon=n.defaultWeapon(),n.setHeld(e.weapon),this.team.next=(this.team.units.indexOf(n)+1)%this.team.units.length,e.hud.turnStart(e,this.team,n,!0),await e.wait(.5)),n}nearWaterBonus(t,e,i){let n=this.game.terrain,s=Math.hypot(e,i)||1;for(let a of[2.5,4.5,6.5]){let o=t.pos.x+e/s*a,l=t.pos.z+i/s*a;if(n.heightAt(o,l)<n.waterLevel-.3)return 22}return 0}explosionScore(t,e,i,n,s){let a=0;for(let o of this.game.units){if(!o.alive)continue;let l=o===n?new Yi(s.x,s.y+.95,s.z):o.getCenter(),c=l.distanceTo(t);if(c>=e)continue;let h=1-c/e,u=i*Math.pow(h,.65);o.team!==n.team?(a+=Math.min(u,o.hp),u>=o.hp&&(a+=30),a+=this.nearWaterBonus(o,l.x-t.x,l.z-t.z)*h):o===n?a-=u*2.5+(u>=o.hp?80:0):a-=u*1.5+(u>=o.hp?45:0)}return a}hitscanPlan(t,e,i,n,s){let a=this.game,o=n.getCenter().clone(),l=Math.atan2(o.x-s.x,o.z-s.z),c=da(s,l,0,e),h=Math.atan2(o.y-c.y,Pt(c.x,c.z,o.x,o.z)),u=da(s,l,h,e),d=u.distanceTo(o);if(d>e.range)return null;let f=o.clone().sub(u).normalize(),p=a.traceRay(u,f,d+1,t);if(!p.unit||p.unit.team===t.team)return null;let y=Math.max(e.spread||0,.3)*ve,m=Et(.55/(d*Math.tan(y)+.01),.05,.95),g=(e.shots||1)*(e.pellets||1)*e.dmg*m*(d>e.range*.6?.75:1);g=Math.min(g,n.hp+10);let v=g;return g>=n.hp&&(v+=25),{score:v,weapon:i,yaw:l,pitch:h,power:1,kind:"hitscan",target:n}}meleePlan(t,e,i,n,s){if(Pt(s.x,s.z,n.pos.x,n.pos.z)>e.range-.25||Math.abs(n.pos.y-s.y)>1.2)return null;let o=t.isStier?e.dmgStier:e.dmg,l=Math.atan2(n.pos.x-s.x,n.pos.z-s.z);return{score:Math.min(o,n.hp)+(o>=n.hp?25:0)+this.nearWaterBonus(n,n.pos.x-s.x,n.pos.z-s.z)*1.4,weapon:i,yaw:l,pitch:0,power:1,kind:"melee",target:n}}conePlan(t,e,i,n,s){let a=n.getCenter(),o=new Yi(s.x,s.y+1.3,s.z).distanceTo(a);if(o>e.range)return null;let l=Math.atan2(a.x-s.x,a.z-s.z),c=Math.atan2(a.y-(s.y+1.3),Pt(s.x,s.z,a.x,a.z));if(!this.game.terrain.lineOfSight(new Yi(s.x,s.y+1.3,s.z),a,0))return null;let h=e.dmg*(1-.4*o/e.range),u=0;for(let d of this.game.units){if(!d.alive||d===t)continue;let p=d.getCenter().clone().sub(new Yi(s.x,s.y+1.3,s.z));p.length()>e.range||p.angleTo(If(l,c))>e.angle*ve||(u+=d.team===t.team?-h*1.5:Math.min(h,d.hp)+(h>=d.hp?25:0))}return{score:u,weapon:i,yaw:l,pitch:c,power:1,kind:"cone"}}async ballisticPlan(t,e,i,n,s,a){let o=this.game,l=this.env||o.env,c=e.impact?n.getCenter().clone():n.pos.clone(),h=new Yi(s.x,s.y+1.3,s.z),u=Math.atan2(c.x-s.x,c.z-s.z),d=e.minPitch!==void 0?e.minPitch:5,f=[];for(let _=Math.max(d,6);_<=80;_+=a?14:8)f.push(_*ve);let p=[];for(let _=.22;_<=1.001;_+=a?.13:.07)p.push(Math.min(1,_));let y=null,m=new Yi,g=new Yi,v=(_,x,M)=>{da(s,_,x,e,g),If(_,x,m).multiplyScalar(e.speed*M),l.owner=t;let C=js(e,g,m,l,7);l.owner=null;let T=new Yi(C.x,C.y,C.z),I=T.distanceTo(c);return(C.type==="water"||C.type==="gone"||C.type==="timeout")&&(I+=25),C.type==="unit"&&C.unit===n&&(I=0),{err:I,pitch:x,power:M,yaw:_,r:C,pt:T}},w=a?1:3;for(let _=0;_<w;_++){let x=null;if(_===0)for(let I of f)for(let z of p){let F=v(u,I,z);(!x||F.err<x.err)&&(x=F),await this.yieldMaybe()}else{let I=y;for(let z=-4;z<=4;z+=2)for(let F=-.06;F<=.061;F+=.03){let R=Et(I.pitch+z*ve,d*ve,82*ve),k=Et(I.power+F,.05,1),G=v(u,R,k);(!x||G.err<x.err)&&(x=G),await this.yieldMaybe()}}(!y||x.err<y.err)&&(y=x);let M=Math.atan2(y.pt.x-h.x,y.pt.z-h.z),C=Math.atan2(c.x-h.x,c.z-h.z),T=Js(M,C);if(Math.abs(T)<.004&&y.err<1)break;u=y.yaw+T}if(!y||o.disposed)return null;let b,A=y.r;if(A.type==="water"||A.type==="gone"||A.type==="timeout")b=-5;else if(b=this.explosionScore(y.pt,e.radius,e.dmg,t,s),e.cluster&&(b*=1.35),e.gas&&(b+=this.explosionScore(y.pt,e.gas.radius,e.gas.dmg*2,t,s)*.8),e.swarm){let _=null,x=e.swarm.range;for(let M of o.units){if(!M.alive||M.team===t.team)continue;let C=M.getCenter().distanceTo(y.pt);C<x&&(x=C,_=M)}_&&(b+=Math.min(e.swarm.dmg,_.hp)+(e.swarm.dmg>=_.hp?25:0))}return!e.swarm&&y.err>e.radius*1.4&&(b*=.4),{score:b,weapon:i,yaw:y.yaw,pitch:y.pitch,power:y.power,kind:"ballistic",point:y.pt,err:y.err}}async plan(t,e,i){let n=this.game,s=n.enemiesOf(t.team);if(!s.length)return null;s.sort((u,d)=>Pt(u.pos.x,u.pos.z,e.x,e.z)-Pt(d.pos.x,d.pos.z,e.x,e.z));let a=s.slice(0,i?2:4),o={score:0},l=[],c=(u,d)=>{u&&(u.score-=d,u.score>0&&l.push(u),u.score>o.score&&(o=u))},h=0;for(let u of t.weapons()){let d=t.ammo[u];if(d===0||d===void 0)continue;let f=Kt[u],p=d<0?0:3;switch(u==="heiligekuh"&&(p=25),(u==="haubitze"||u==="jet")&&(p=14),f.type){case"melee":for(let y of a)c(this.meleePlan(t,f,u,y,e),p);break;case"hitscan":for(let y of a)c(this.hitscanPlan(t,f,u,y,e),p);break;case"cone":for(let y of a)c(this.conePlan(t,f,u,y,e),p);break;case"ballistic":{if(i&&h>=1)break;h++;for(let y of a){if(Pt(y.pos.x,y.pos.z,e.x,e.z)<f.radius*1.1)continue;let g=await this.ballisticPlan(t,f,u,y,e,i);c(g,p)}break}case"heal":{if(f.area){let y=0;for(let m of this.team.units)m.alive&&m.pos.distanceTo(e)<=f.area&&(y+=Math.min(f.amount,m.hpMax-m.hp));c({score:y*.9,weapon:u,kind:"heal"},p)}else t.hp<t.hpMax*.5&&c({score:Math.min(f.amount,t.hpMax-t.hp)*1.1,weapon:u,kind:"heal"},p);break}case"strike":{if(i)break;for(let y of a){let m=y.pos.clone(),g=this.explosionScore(m,f.radius,f.dmg,t,e)*(u==="haubitze"?1.4:1.6);Pt(m.x,m.z,e.x,e.z)<10&&(g-=40),c({score:g,weapon:u,kind:"strike",target:m},p)}break}case"place":{u==="mine"&&s[0]&&Pt(s[0].pos.x,s[0].pos.z,e.x,e.z)<12&&c({score:7,weapon:u,kind:"place",yaw:Math.atan2(s[0].pos.x-e.x,s[0].pos.z-e.z)},p);break}case"build":case"dig":{if(i)break;let y=s[0]?Pt(s[0].pos.x,s[0].pos.z,e.x,e.z):99,m=Pt(e.x,e.z,t.pos.x,t.pos.z)<.5;if(y>55||m&&(t.dug||n.forts.shedFor(t))||f.type==="build"&&n.forts.canBuildAt(e.x,e.z)||f.type==="dig"&&(n.world.onDeck(e.x,e.z,.3)||n.forts.shedFor({pos:e})))break;let g=t.hp<t.hpMax*.55?6:0;c({score:(f.type==="build"?13:9)+g,weapon:u,kind:f.type},p);break}case"drive":{for(let y of a){let m=Math.atan2(y.pos.x-e.x,y.pos.z-e.z),g=n.simulateDrive(e,m,t);if(g.type==="water")continue;let v=new Yi(g.x,g.y+.8,g.z);c({score:this.explosionScore(v,f.radius,f.dmg,t,e),weapon:u,kind:"drive",yaw:m,pitch:0,power:1,point:v},p+4)}break}default:break}}if(!i&&o.weapon&&l.length>1&&Math.random()<this.D.sloppy){l.sort((d,f)=>f.score-d.score);let u=l[1+Math.floor(Math.random()*Math.min(2,l.length-1))];u&&u.score>o.score*.3&&(o=u)}return o.weapon?o:null}pathOk(t,e){let i=this.game.terrain,n=Pt(t.x,t.z,e.x,e.z),s=Math.ceil(n/.8),a=i.heightAt(t.x,t.z);for(let o=1;o<=s;o++){let l=o/s,c=t.x+(e.x-t.x)*l,h=t.z+(e.z-t.z)*l,u=i.heightAt(c,h);if(u<i.waterLevel+.5||(u-a)/(n/s)>1.2)return!1;a=u}return!0}async chooseMove(t,e){let i=this.game,n=i.terrain,s=e?e.score:0;if(s>=30&&Math.random()<.8||(t.dug||i.forts.shedFor(t))&&s>4&&Math.random()<.85||Math.random()>this.D.smart+.2)return null;let o=Math.min(18,t.stamina/(Sl*1.07)),l=[],c=8,h=Math.random()*Math.PI*2;for(let v=0;v<c;v++){let w=h+v/c*Math.PI*2;for(let b of[o*.55,o*.95]){let A=t.pos.x+Math.sin(w)*b,_=t.pos.z+Math.cos(w)*b,x=n.heightAt(A,_);if(x<n.waterLevel+.9)continue;let M=new Yi(A,x,_);this.pathOk(t.pos,M)&&l.push(M)}}for(let v of i.crates)if(v.landed&&!v.dead&&Pt(v.pos.x,v.pos.z,t.pos.x,t.pos.z)<o&&this.pathOk(t.pos,v.pos)){let w=v.pos.clone();w.crate=v,l.push(w)}let u=i.enemiesOf(t.team);if(!u.length)return null;let d=v=>Math.min(...u.map(w=>Pt(w.pos.x,w.pos.z,v.x,v.z))),f=null,p=s+6,y=null,m=d(t.pos);l.sort(()=>Math.random()-.5);let g=Math.min(l.length,this.diff==="hard"?10:6);for(let v=0;v<l.length;v++){let w=l[v],b=d(w);if(b<m-2&&b>4&&(m=b,y=w),v>=g&&!w.crate)continue;let A=await this.plan(t,w,!0);if(!this.ok(t))return null;let _=A?A.score:0;w.crate&&(_+=w.crate.type==="jause"?(t.hpMax-t.hp)*.4+6:12);for(let x of[1.5,3])for(let M=0;M<4;M++){let C=M/4*Math.PI*2;n.heightAt(w.x+Math.sin(C)*x,w.z+Math.cos(C)*x)<n.waterLevel&&(_-=4)}for(let x of i.gases)x.pos.distanceTo(w)<x.radius+1&&(_-=25);_>p&&(p=_,f=w)}return f||((!e||s<8)&&y?y:null)}async walkTo(t,e){let i=this.game,n=0,s=0,a=1/0,o=!1;for(;;){let l=await i.nextFrame();if(!this.ok(t))return;n+=l;let c=Pt(t.pos.x,t.pos.z,e.x,e.z);if(c<.7||t.stamina<=0||n>9)break;let h=Math.atan2(e.x-t.pos.x,e.z-t.pos.z),u=Js(t.yaw,h);if(t.yaw+=Et(u,-l*5,l*5),Math.abs(u)<.6&&t.onGround&&!i.walk(t,1,l)&&!o&&t.onGround&&(o=!0,t.jump()&&i.sfx("jump")),c<a-.02?(a=c,s=0):s+=l,s>1.2)break}t.moving=!1;for(let l=0;l<90&&!t.onGround;l++)if(await i.nextFrame(),!this.ok(t))return;await i.wait(.25)}async turnTo(t,e){let i=this.game;for(let n=0;n<240;n++){let s=await i.nextFrame();if(!this.ok(t))return;let a=Js(t.yaw,e);if(Math.abs(a)<.01){t.yaw=e;return}t.yaw+=Et(a,-s*3,s*3)}t.yaw=e}async pitchTo(t,e){let i=this.game;for(let n=0;n<240;n++){let s=await i.nextFrame();if(!this.ok(t))return;let a=e-t.aimPitch;if(Math.abs(a)<.01){t.aimPitch=e;return}t.aimPitch+=Et(a,-s*1.5,s*1.5)}t.aimPitch=e}async execute(t,e){let i=this.game,n=this.D,s=Kt[e.weapon];if(i.weapon=e.weapon,t.weapon=e.weapon,t.setHeld(e.weapon),s.type==="strike"){if(await i.wait(.7),!this.ok(t))return;let h=e.target.clone();h.x+=Qs()*n.yaw*.6,h.z+=Qs()*n.yaw*.6,h.y=i.terrain.heightAt(h.x,h.z),await i.fire({target:h});return}if(s.type==="heal"||s.type==="build"||s.type==="dig"){if(await i.wait(.5),!this.ok(t))return;await i.fire({});return}let a=e.yaw,o=e.pitch||0,l=e.power||1,c=!1;if(s.type==="ballistic"||s.type==="hitscan"||s.type==="drive"){let h=s.type==="hitscan"?.45:s.type==="drive"?.6:1;if(a+=Qs()*n.yaw*h*ve,s.type!=="drive"&&(o+=Qs()*n.pitch*h*ve),s.type==="ballistic"&&(l=Et(l*(1+Qs()*n.power),.05,1)),Math.random()<n.blunder){c=!0;let u=Math.random(),d=Math.random()<.5?-1:1;u<.4&&s.type==="ballistic"?l=Et(l*(d<0?.55+Math.random()*.2:1.3+Math.random()*.2),.05,1):u<.75||s.type==="drive"?a+=d*(8+Math.random()*10)*ve:o+=d*(8+Math.random()*10)*ve}}if(t.aimLandDist=e.point?Pt(t.pos.x,t.pos.z,e.point.x,e.point.z):void 0,["melee","place","drive","build","dig","heal"].includes(s.type)||(t.aiming=!0),await this.turnTo(t,a),!!this.ok(t)&&((s.type==="ballistic"||s.type==="hitscan"||s.type==="cone")&&await this.pitchTo(t,o),!!this.ok(t))){if(s.type==="ballistic"){for(await i.wait(.25),i.charging=!0,i.power=0;i.power<l;){let h=await i.nextFrame();if(!this.ok(t)){i.charging=!1;return}i.power=Math.min(l,i.power+h/1.6)}i.charging=!1}else await i.wait(.45);this.ok(t)&&await i.fire({yaw:a,pitch:o,power:l,blunder:c})}}};var fa=Math.PI,ci={half:1.3,wall:1.5,roof:2.6,inside:1.1},uv=Kt.schaufel.depth,Lf=r=>(t,e,i)=>{let n=pi(Math.round(t.x*3.1+t.z*3.1)*7,Math.round(t.y*9));i.copy(Ot(r)).multiplyScalar(.78+n*.34)},Fl=null;function Lh(){if(Fl)return Fl;let r=ci.half,t=ci.wall,e=[],i=(l,c,h,u)=>{for(let d=0;d<6;d++){let f=-.45+d*.34;e.push(L(new st(l,.3,.08),{p:[c,f+.15,h],r:[0,u,(pi(d,c*10+h)-.5)*.04]},Lf("#8a6a45")))}};i(2*r,0,-r,0),i(2*r,r,0,fa/2),i(2*r,-r,0,fa/2);let n=r-.45;i(n,-r+n/2,r,0),i(n,r-n/2,r,0);for(let[l,c]of[[-r,-r],[r,-r],[-r,r],[r,r]])e.push(L(new st(.16,ci.roof+.5,.16),{p:[l,(ci.roof-.5)/2,c]},"#5e4129"));e.push(L(new st(.06,.12,2.9),{p:[r+.05,.5,0],r:[.42,0,0]},"#6e4f30")),e.push(L(new st(.06,.12,2.9),{p:[-r-.05,.5,0],r:[-.42,0,0]},"#6e4f30")),e.push(L(new st(2.9,.12,.06),{p:[0,.5,-r-.05],r:[0,0,.42]},"#6e4f30"));for(let l of[-1,1])for(let c=0;c<2;c++)e.push(L(new bt(.22,6,4),{p:[l*(.75+c*.35),t+.08,r+.05],s:[1.5,.6,1]},"#b79e70"));let s=[];for(let l=0;l<8;l++){let c=-r-.25+l*.4;s.push(L(new st(2*r+.6,.07,.42),{p:[0,ci.roof-.12+c/(2*r)*-.3,c],r:[.12,0,(pi(l,3)-.5)*.05]},Lf("#7a5c3a")))}s.push(L(new st(2*r+.4,.12,.12),{p:[0,ci.roof-.25,r]},"#5e4129")),s.push(L(new st(2*r+.4,.12,.12),{p:[0,ci.roof-.05,-r]},"#5e4129")),s.push(L(new st(.7,.28,.04),{p:[.6,ci.roof-.55,r+.06]},"#b3261e")),s.push(L(new st(.5,.05,.05),{p:[.6,ci.roof-.55,r+.09]},"#f5f0e6"));let a=[];for(let l=0;l<9;l++){let c=l/9*fa*2;a.push(L(new bt(.34,6,4),{p:[Math.cos(c)*.78,.02,Math.sin(c)*.78],s:[1.2,.55,1],jitter:.06,seed:l+3},(h,u,d)=>d.copy(Ot("#5b4128")).multiplyScalar(.8+pi(Math.round(h.x*9),Math.round(h.z*9))*.35)))}a.push(L(new St(.62,.62,.04,12),{p:[0,.03,0]},"#2a1d12"));let o=[L(new bt(.45,7,4,0,fa*2,0,fa/2),{s:[1,.55,1],jitter:.05,seed:9},"#5b4128")];return Fl={walls:Lt(e),roof:Lt(s),mound:Lt(a),hill:Lt(o)},Fl}var kl=class{constructor(t){this.g=t,this.sheds=[],this.mounds=new Map,this.hills=[],this.tunnels=[]}canBuildAt(t,e){let i=this.g,n=i.terrain;if(n.heightAt(t,e)<n.waterLevel+.5)return"Im Wasser baut ma ka H\xFCtten.";if(n.slopeAt(t,e)>.75)return"Z'steil f\xFCr an Verschlag.";if(i.world.onDeck(t,e,1.2))return"Auf da Br\xFCckn? Do schimpft da B\xFCrgermeister.";for(let a of this.sheds)if(!a.dead&&Pt(a.x,a.z,t,e)<3.4)return"Do steht scho a Verschlag.";for(let a of i.world.obstaclesNear(t,e))if(!(!a.solid||a.walkThrough)&&Pt(a.x,a.z,t,e)<a.r+1)return"Do is ka Platz \u2013 Baum oder Stein im Weg.";return null}build(t){let e=Lh(),i=this.g,n=i.terrain,s=t.pos.x,a=t.pos.z,o=n.heightAt(s,a),l=Kt.verschlag,c=new Pe,h=new qt(e.walls,we().prop),u=we().prop.clone();u.transparent=!0;let d=new qt(e.roof,u);h.castShadow=d.castShadow=i.app.quality!=="low",h.receiveShadow=!0,c.add(h,d),c.position.set(s,o,a),c.rotation.y=t.yaw,c.scale.set(1,.01,1),i.scene.add(c);let f={kind:"verschlag",x:s,z:a,r:1.4,pr:1.45,y0:o-.4,top:o+ci.roof,rayTop:o+ci.wall,solid:!0,walkThrough:!0},p={x:s,z:a,y:o,yaw:t.yaw,hp:l.hp,hpMax:l.hp,group:c,walls:h,roof:d,roofOn:!0,ob:f,t:0,dead:!1,owner:t};return f.shed=p,i.world.addObstacle(f),this.sheds.push(p),p}shedFor(t){for(let e of this.sheds)if(!e.dead&&Pt(e.x,e.z,t.pos.x,t.pos.z)<ci.inside&&Math.abs(t.pos.y-e.y)<1.1)return e;return null}protection(t,e){let i=1;return(e==="explosion"||e==="fire")&&(this.shedFor(t)&&(i*=e==="fire"?.5:.4),t.dug&&(i*=e==="fire"?.6:.5)),i}damage(t,e,i){if(t.dead||e<=0)return;let n=this.g;e=Math.round(e),t.hp-=e,t.shake=.25;let s=new D(t.x,t.y+ci.roof+.3,t.z);n.hud.floatText(s,`-${e}`,"#d9a066"),n.fx.spawnDebris(t.x,t.y+1.2,t.z,n.fx.colWood(),3,3),t.roofOn&&t.hp<t.hpMax*.45&&(t.roofOn=!1,t.roof.visible=!1,t.ob.top=t.y+ci.wall+.05,n.fx.spawnDebris(t.x,t.y+ci.roof,t.z,n.fx.colWood(),10,6)),t.hp<=0&&this.destroy(t,i)}destroy(t){if(t.dead)return;let e=this.g;t.dead=!0,t.ob.solid=!1,e.scene.remove(t.group),e.fx.spawnDebris(t.x,t.y+1,t.z,e.fx.colWood(),16,7),e.fx.impactDust(new D(t.x,t.y,t.z),e.terrain.colors.dirt),e.sfx("thump"),e.demo||e.hud.toast("Da Verschlag is hin \u2013 Bretter \xFCberall!",1.6)}onExplosion(t,e,i,n){for(let s of this.sheds){if(s.dead)continue;let a=Math.hypot(s.x-t.x,s.z-t.z,s.y+1-t.y),o=e+ci.half;a>=o||this.damage(s,i*(1-a/o)*1.1,n)}}dig(t){let e=this.g;t.dug=!0,e.fx.impactDust(t.pos.clone(),e.terrain.colors.dirt),e.fx.spawnDebris(t.pos.x,t.pos.y+.3,t.pos.z,e.fx.colDirt(),10,4)}undig(t,e=!1){t.dug&&(t.dug=!1,e||this.g.fx.impactDust(t.pos.clone(),this.g.terrain.colors.dirt))}tunnelBlocked(t,e){let i=this.g,n=i.terrain,s=Pt(t.x,t.z,e.x,e.z),a=Math.max(2,Math.ceil(s/.7));for(let o=1;o<=a;o++){let l=o/a,c=t.x+(e.x-t.x)*l,h=t.z+(e.z-t.z)*l;if(n.baseHeightAt(c,h)<n.waterLevel+.3)return"Unterm Wasser graben? Do wird's nass."}for(let o of i.world.obstaclesNear(e.x,e.z))if(o.solid&&!o.walkThrough&&Pt(o.x,o.z,e.x,e.z)<o.r+.6)return"Do steht was im Weg.";return null}dropHill(t,e){let i=this.g,n=new qt(Lh().hill,we().prop);n.position.set(t,i.terrain.heightAt(t,e)-.05,e),n.rotation.y=Math.random()*6,n.scale.setScalar(.8+Math.random()*.4),n.receiveShadow=!0,i.scene.add(n),this.hills.push(n),this.hills.length>40&&i.scene.remove(this.hills.shift())}update(t){let e=this.g;for(let i of this.sheds){if(i.dead)continue;if(i.t<1){i.t=Math.min(1,i.t+t*1.25);let a=i.t;i.group.scale.set(1,Math.max(.01,a<.8?a/.8:1),1)}let s=e.unit&&e.unit.alive&&this.shedFor(e.unit)===i&&e.phase!=="turnEnd"?.28:1;i.roof.material.opacity+=(s-i.roof.material.opacity)*Math.min(1,t*8),i.roof.material.depthWrite=i.roof.material.opacity>.95,i.shake>0?(i.shake-=t,i.group.rotation.z=Math.sin(e.time*60)*.03*Math.max(0,i.shake)*4):i.group.rotation.z=0}for(let i of e.units){let n=this.mounds.get(i);if(!(i.alive&&i.digDepth>.04)){n&&(n.visible=!1);continue}n||(n=new qt(Lh().mound,we().prop),n.receiveShadow=!0,e.scene.add(n),this.mounds.set(i,n)),n.visible=!0;let a=Et(i.digDepth/uv,0,1);n.position.set(i.pos.x,e.terrain.heightAt(i.pos.x,i.pos.z)-.05,i.pos.z),n.scale.set(.6+.4*a,a,.6+.4*a)}for(let i of e.units){let n=i.scripted;!n||!n.tunnel||!i.alive||n.phase==="travel"&&(n.dust=(n.dust||0)-t,n.dust<=0&&(n.dust=.09,e.fx.impactDust(new D(i.pos.x,i.pos.y,i.pos.z),e.terrain.colors.dirt)),Pt(i.pos.x,i.pos.z,n.lastHill?n.lastHill.x:n.from.x,n.lastHill?n.lastHill.z:n.from.z)>2.6&&(this.dropHill(i.pos.x,i.pos.z),n.lastHill={x:i.pos.x,z:i.pos.z}))}}dispose(){this.sheds=[],this.mounds.clear(),this.hills=[]}};var dv={select:["Na servas, wos w\xFCllst?","I bin scho do, oida.","Geh bitte, scho wieder i?","H\xFC-hott, gemma!","Wem soll i a Watschn gebn?","Jo eh, i geh ja scho.","Heast, i hob grad gjausnt.","Wenn's sein muass\u2026","Na, schau ma amoi.","Muuuh. Jo. Wos is?","Is des a Befehl oder a Bitte?","I steh bereit. Glaub i.","Wer st\xF6rt?","Gib ma a Ziel, i gib da a Loch.","Mi brauchst ned zwamol fragn."],fire:["Do hast as!","Friss Blei, du Kalbsbratl!","Schleich di!","A Packl vom Christkindl!","F\xFCr Heimat und Heustadl!","Hau di \xFCber d'H\xE4user!","Nimm des, du Gselchter!","Aus is und gor is!","Servus, Zipfelklatscher!","Des is f\xFCr mei Muatta!","Sch\xF6ne Gr\xFC\xDF vom Bauernhof!","Achtung, des wird laut!","Ois Guade, Wappler!"],hit:["Au! Bist deppat?","Heast, des tuat weh!","Mei Euter!","Jessasmaria!","Hearst, spinnst?","Kruzifix!","Sakra!","Do brauch i an Obstler.","Des gibt an blauen Fleck.","Na servus, des sitzt.","Autsch, du Ungustl!","Wart nur, du Fetzensch\xE4dl!","Des merk i ma!"],hitStier:["Des hot nur gekitzelt!","Jetzt bin i grantig!","Du host an Stier gweckt!","Mehr host ned?"],death:["I geh jetzt Gras fressen\u2026 von unten.","Leb wohl, sch\xF6ne Alm\u2026","Sagt's da Mama, i hob's probiert\u2026","Des wor's, oida.","Aus. Schluss. Kuhfladen.","Endstation Schnitzlsemml.","Jetzt bin i a Gulasch.","Pfiat eich, es Trotteln.","Mei Glockn\u2026 l\xE4ut\u2026 nimma\u2026","I h\xE4tt Melkerin werdn solln\u2026"],kill:["Den homma!","Hot si ausgmuht!","Wieder a Leberkas mehr!","Des hot gsessn!","N\xE4chster, bitte!","Gulasch f\xFCr alle!","Ruhe in Frieden, du Bettbrunzer.","Des wor a Volltreffer, Oida!","Schee wor's."],miss:["Hoppala.","Na geh, daneben.","Wos wor des jetzt?","Des wor da Wind!","I hob grad blinzelt.","Ned amoi a Scheunentor triff i heut.","Des wor a Warnschuss. Eh klar.","Mei Brilln is im Stall."],drown:["Blubb\u2026 i kann ned schwimma\u2026","Wasser? I wollt a Bier!","Glugg-glugg-Muh.","I bin doch ka Fisch!"],heal:["A Brettljause wirkt Wunder!","Schmeckt wia bei da Oma.","Jetzt geht's ma wieder guat.","Speck is Medizin."],crate:["A Packerl! Vom Christkind?","Gratis is imma guat!","Des nehm i mit.","Wer hot des do vergessn?"],jauseCrate:["Brettljause! Endlich!","Mahlzeit!","Speck und Kas, des is Gas!"],selfHit:["I bin a Volltrottel.","Na super, ins eigene Knie.","Des host jetzt davon.","Bitte ned weitersagn."],friendly:["Heast, i bin auf deiner Seitn!","Bist du blind, du Hirsch?","Danke, Kollege. Wirklich.","Spinnst, des is a Eigener!"],timeout:["Schlofst du, oder wos?","Gemma, gemma, ned einschlofn!","Des Gras wachst schneller als du denkst."],shore:["Do is Wasser, du Hirsch!","I geh do ned eini!","Na, na \u2013 nasse Hufe mag i ned."],steep:["Z'steil, Oida.","Do kum i ned auffi.","I bin a Kuh, ka Gams!"],tired:["I kann nimma\u2026","Puh, Pause.","Mei Haxn san aus Pudding."],victory:["Mia san die Kings vom Kuhstall!","Heit gibt's a Freibier!","Des wor a Watschnbaum!","Und jetzt a Jausn!"],traktor:["Da Traktor kennt ka Bremse!","Gas geben, Burschi!","Brumm-brumm-BUMM!","Der Diesel riecht nach Sieg!"],wespen:["Bsss! Holt's es eich!","Jetzt wird's stichig!","Sch\xF6ne Gr\xFC\xDFe vom Bienenhaus!"],stung:["Au! Wespen! Hilfe!","Mei Nasn schwillt an!","Weg mit eich, es Viecher!","I bin allergisch, du Hirsch!"],gabel:["Ab aufn Misthaufen mit dir!","Drei Zinken, ka Gnade!"],blunder:["Hoppala, da Huf is abgrutscht!","Wer hat ma Butter auf die Hufe gschmiert?","Des wor jetzt nix.","I hob die Brilln im Stall vergessn.","Da Wind, i schw\xF6r, des wor da Wind!","Bitte ned filmen."],build:["Bretter, N\xE4gel, fertig is die Villa!","Mei Verschlag, mei Burg.","Do kummt kana eine ohne Klopfen!","Baumeister Muh hat gsprochen.","Ois selber gmacht, wia da Papa."],dig:["I bin dann amoi weg. Unten.","Wia a Erd\xE4pfel im Acker!","Nur mehr de H\xF6rner schaun raus.","Do find mi kana.","Gem\xFCtlich is des Loch."],tunnel:["Da Maulwurf is ma Vorbild!","Bis glei, oben!","Unterirdisch, aber ned unterbelichtet!","Wer grabt, der findt."],dud:["Da Abfangj\xE4ger hat Startverbot. Leider nix.","Da Pilot is im Krankenstand.","Ka Budget f\xFCrs Kerosin."]},cs={doubleKill:["Doppel-Watschn!","Zwa auf an Streich!"],multiKill:["Watschnbaum!","Massaker am Kuhstall!"],headshot:["Kopftreffer! Mitten ins Hirn \u2013 falls do ans is.","Kopftreffer!"],selfKill:["Selbstbedienung!","Eigentor!"],drown:["Ersoffen!","Badetag!"],bigDamage:["Gwaltig!","Bumm-Zack!","Des hot gscheppert!"]};function Zi(r,t=Math.random){return r[Math.floor(t()*r.length)]}function Bl(r,t=Math.random){let e=dv[r];return e?Zi(e,t):""}var Dh={win:["Sauber, Burschen und Madln! Des war a gmahte Wiesn.","Gewonnen! Heut flie\xDFt da Most in Str\xF6men.","Sieg! Da Bauer is stolz auf eich."],lose:["Verloren. Des wor a Schas mit Quastln.","Niederlage. Mia redn no dr\xFCber \u2013 beim Heurigen.","Hin is hin. N\xE4chstes Mal mit Hirn."],draw:["Unentschieden. Alle hin, ka Gewinner. Typisch."]},tr={gold:{name:"Goldenes Kuhglockerl",icon:"\u{1F514}",desc:"Bester Soldat des Einsatzes"},killer:{name:"Watschn-Orden",icon:"\u{1F947}",desc:"Zwei oder mehr Gegner erledigt"},survivor:{name:"Z\xE4he-Haut-Spange",icon:"\u{1F396}\uFE0F",desc:"Mit unter 20 Lebenspunkten \xFCberlebt"}};var Nh=class{constructor(){this.ctx=null,this.vol={sfx:.8,music:.45},this.muted=!1,this.musicOn=!1,this.lastPlay={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.master.connect(this.comp).connect(e.destination),this.sfxGain=e.createGain(),this.sfxGain.gain.value=this.vol.sfx,this.sfxGain.connect(this.master),this.musicGain=e.createGain(),this.musicGain.gain.value=this.vol.music*.5,this.musicGain.connect(this.master);let i=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,i,e.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let s=0;s<i;s++)n[s]=Math.random()*2-1;this.wantMusic&&this.startMusic()}setVolumes(t,e){this.vol.sfx=t,this.vol.music=e,this.sfxGain&&(this.sfxGain.gain.value=t),this.musicGain&&(this.musicGain.gain.value=e*.5)}get ok(){return this.ctx&&!this.muted&&this.ctx.state==="running"}throttle(t,e){let i=performance.now();return this.lastPlay[t]&&i-this.lastPlay[t]<e?!1:(this.lastPlay[t]=i,!0)}noise({dur:t=.3,freq:e=1e3,freqEnd:i,q:n=.7,type:s="lowpass",gain:a=.5,attack:o=.005,delay:l=0,dest:c}){let h=this.ctx,u=h.currentTime+l,d=h.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let f=h.createBiquadFilter();f.type=s,f.Q.value=n,f.frequency.setValueAtTime(e,u),i&&f.frequency.exponentialRampToValueAtTime(Math.max(20,i),u+t);let p=h.createGain();p.gain.setValueAtTime(1e-4,u),p.gain.exponentialRampToValueAtTime(a,u+o),p.gain.exponentialRampToValueAtTime(1e-4,u+t),d.connect(f).connect(p).connect(c||this.sfxGain),d.start(u,Math.random()*1.5),d.stop(u+t+.05)}tone({freq:t=440,freqEnd:e,dur:i=.2,type:n="sine",gain:s=.3,attack:a=.005,delay:o=0,dest:l,release:c}){let h=this.ctx,u=h.currentTime+o,d=h.createOscillator();d.type=n,d.frequency.setValueAtTime(t,u),e&&d.frequency.exponentialRampToValueAtTime(Math.max(20,e),u+i);let f=h.createGain();return f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(s,u+a),f.gain.exponentialRampToValueAtTime(1e-4,u+(c||i)),d.connect(f).connect(l||this.sfxGain),d.start(u),d.stop(u+(c||i)+.05),d}explosion(t=1,e=1){if(!this.ok)return;let i=Math.min(1,t)*e;i<.03||(this.noise({dur:.9+t*.6,freq:1800,freqEnd:60,q:.5,gain:.9*i,attack:.004}),this.noise({dur:.25,freq:4e3,freqEnd:400,type:"bandpass",q:.8,gain:.5*i}),this.tone({freq:90,freqEnd:30,dur:.7+t*.3,type:"sine",gain:.9*i}))}shot(t="gewehr"){this.ok&&(t==="sniper"?(this.noise({dur:.5,freq:3e3,freqEnd:200,q:.6,gain:.8}),this.tone({freq:160,freqEnd:50,dur:.3,type:"triangle",gain:.6})):t==="flinte"?(this.noise({dur:.4,freq:2500,freqEnd:150,q:.5,gain:.85}),this.tone({freq:120,freqEnd:40,dur:.25,gain:.6})):t==="pistole"?this.noise({dur:.16,freq:3500,freqEnd:600,type:"bandpass",q:.9,gain:.6}):(this.noise({dur:.13,freq:2600,freqEnd:500,type:"bandpass",q:.7,gain:.55}),this.tone({freq:140,freqEnd:60,dur:.08,type:"square",gain:.12})))}whoosh(){this.ok&&this.noise({dur:.7,freq:600,freqEnd:2500,type:"bandpass",q:1.5,gain:.4,attack:.05})}thump(){this.ok&&(this.tone({freq:110,freqEnd:45,dur:.25,type:"sine",gain:.8}),this.noise({dur:.2,freq:900,freqEnd:100,gain:.4}))}hammer(t=0){if(!this.ok)return;let e=520+t%2*90;this.tone({freq:e,freqEnd:e*.6,dur:.07,type:"triangle",gain:.28}),this.noise({dur:.06,freq:2400,freqEnd:900,type:"bandpass",q:1.2,gain:.25})}dig(){this.ok&&(this.noise({dur:.28,freq:700,freqEnd:220,type:"lowpass",q:.8,gain:.32,attack:.02}),this.noise({dur:.12,freq:3200,freqEnd:1600,type:"bandpass",q:2,gain:.08,delay:.03}))}throwSnd(){this.ok&&this.noise({dur:.25,freq:800,freqEnd:1800,type:"bandpass",q:2,gain:.25,attack:.03})}bounce(){!this.ok||!this.throttle("bounce",60)||this.tone({freq:300+Math.random()*80,freqEnd:180,dur:.08,type:"triangle",gain:.25})}splash(){!this.ok||!this.throttle("splash",80)||(this.noise({dur:.6,freq:1500,freqEnd:300,type:"bandpass",q:.6,gain:.6,attack:.01}),this.tone({freq:400,freqEnd:900,dur:.15,type:"sine",gain:.15,delay:.05}))}hit(){!this.ok||!this.throttle("hit",50)||(this.noise({dur:.12,freq:900,freqEnd:200,gain:.5}),this.tone({freq:220,freqEnd:110,dur:.12,type:"square",gain:.12}))}moo(t=1,e=.5){if(!this.ok||!this.throttle("moo",400))return;let i=this.ctx,n=i.currentTime,s=130*t,a=i.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(s*.9,n),a.frequency.linearRampToValueAtTime(s*1.12,n+.25),a.frequency.linearRampToValueAtTime(s*.82,n+1);let o=i.createOscillator();o.frequency.value=5.5;let l=i.createGain();l.gain.value=3*t,o.connect(l).connect(a.frequency);let c=i.createBiquadFilter();c.type="bandpass",c.frequency.value=520,c.Q.value=2.5;let h=i.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(500,n),h.frequency.linearRampToValueAtTime(1300,n+.3),h.frequency.linearRampToValueAtTime(600,n+1);let u=i.createGain();u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(e,n+.12),u.gain.setValueAtTime(e,n+.7),u.gain.exponentialRampToValueAtTime(1e-4,n+1.1),a.connect(h).connect(u).connect(this.sfxGain),a.connect(c).connect(u),a.start(n),o.start(n),a.stop(n+1.2),o.stop(n+1.2)}bell(t=.35,e=0,i=1){if(!this.ok)return;let n=520*i;[1,1.47,2.09,2.76].forEach((s,a)=>{this.tone({freq:n*s,dur:.02,release:.9-a*.15,type:a?"sine":"triangle",gain:t/(a+1),delay:e})})}click(){this.ok&&this.tone({freq:900,freqEnd:600,dur:.05,type:"square",gain:.08})}jump(){this.ok&&this.tone({freq:220,freqEnd:420,dur:.18,type:"triangle",gain:.18})}heal(){this.ok&&[523,659,784,1047].forEach((t,e)=>this.tone({freq:t,dur:.25,type:"sine",gain:.18,delay:e*.08}))}pickup(){this.ok&&[660,880,1320].forEach((t,e)=>this.tone({freq:t,dur:.15,type:"square",gain:.07,delay:e*.06}))}beep(){!this.ok||!this.throttle("beep",120)||this.tone({freq:1400,dur:.08,type:"square",gain:.1})}fizz(){this.ok&&this.noise({dur:1.2,freq:5e3,freqEnd:2e3,type:"highpass",gain:.12,attack:.05})}flame(){this.ok&&this.noise({dur:1,freq:700,freqEnd:300,q:.5,gain:.6,attack:.08})}plane(){this.ok&&this.noise({dur:2.8,freq:300,freqEnd:2200,type:"bandpass",q:.7,gain:.5,attack:.9})}buzz(){if(!this.ok||!this.throttle("buzz",260))return;let t=this.ctx,e=t.currentTime,i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(210+Math.random()*40,e);let n=t.createOscillator();n.frequency.value=30;let s=t.createGain();s.gain.value=25,n.connect(s).connect(i.frequency);let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=1.5;let o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.12,e+.05),o.gain.exponentialRampToValueAtTime(1e-4,e+.3),i.connect(a).connect(o).connect(this.sfxGain),i.start(e),n.start(e),i.stop(e+.32),n.stop(e+.32)}engine(){!this.ok||!this.throttle("engine",110)||(this.tone({freq:70+Math.random()*10,freqEnd:55,dur:.09,type:"square",gain:.12}),this.noise({dur:.08,freq:400,freqEnd:150,gain:.15}))}sting(){this.ok&&this.tone({freq:1200,freqEnd:600,dur:.12,type:"sawtooth",gain:.1})}turnStart(t=1){this.ok&&(this.bell(.25,0,t),this.bell(.2,.18,t*1.26))}victory(){if(!this.ok)return;[523,659,784,1047,784,1047].forEach((e,i)=>{this.tone({freq:e,dur:.22,type:"square",gain:.1,delay:i*.14}),this.tone({freq:e/2,dur:.22,type:"triangle",gain:.15,delay:i*.14})}),this.bell(.3,.9,1)}defeat(){this.ok&&[392,370,349,262].forEach((t,e)=>this.tone({freq:t,dur:.4,type:"triangle",gain:.2,delay:e*.3}))}startMusic(){if(this.wantMusic=!0,!this.ctx||this.musicOn)return;this.musicOn=!0;let t=this.ctx,i=60/132/2,n=0,s=t.currentTime+.1,a=[0,5,7,0,0,5,7,0,5,0,7,0,5,0,7,0],o=[[12,16,19,16],[17,21,17,14],[19,17,14,11],[12,-1,12,-1],[12,16,19,24],[21,17,21,24],[23,19,17,14],[12,-1,-1,-1],[17,21,24,21],[19,16,12,16],[14,17,19,17],[16,12,-1,12],[17,21,24,26],[24,19,16,19],[17,14,11,14],[12,-1,-1,-1]],l=130.81,c=u=>l*Math.pow(2,u/12),h=()=>{if(this.musicOn)for(;s<t.currentTime+.25;){let u=Math.floor(n/4)%16,d=n%4,f=a[u],p=this.musicGain;if(d===0||d===2){let m=d===0?f-12:f-5;zh(this,c(m),s,i*1.6,"triangle",.32,p)}else[0,4,7].forEach(m=>zh(this,c(f+m+12),s,i*.7,"square",.035,p));let y=o[u][d];y>=0&&zh(this,c(y+12),s,i*.9,"square",.045,p),s+=i,n++}};this._musicTimer=setInterval(h,60),h()}stopMusic(){this.wantMusic=!1,this.musicOn=!1,this._musicTimer&&clearInterval(this._musicTimer),this._musicTimer=null}};function zh(r,t,e,i,n,s,a){let o=r.ctx,l=o.createOscillator();l.type=n,l.frequency.value=t;let c=o.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(s,e+.01),c.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(c).connect(a),l.start(e),l.stop(e+i+.02)}var xe=new Nh;var ki=Math.PI*2,fv=16,Ol=null;function pv(){return Ol||(Ol={hare:Ph("#9a7b5a"),hare2:Ph("#8a7056"),marmot:Ef(),drake:Ih(!1),duck:Ih(!0),butterfly:Tf(),bird:Af(),burrow:Lt([L(new St(.42,.55,.12,10),{p:[0,.02,0]},"#6b5236"),L(new St(.2,.2,.02,10),{p:[0,.09,0]},"#1e1710")])},Ol)}var Hl=r=>{for(;r>Math.PI;)r-=ki;for(;r<-Math.PI;)r+=ki;return r},Gl=class{constructor(t,e=1){this.g=t,this.scene=t.scene,this.T=t.terrain,this.world=t.world,this.fx=t.fx,this.rng=new Ne(e*31+7);let i=t.app.quality;this.mul=i==="low"?.5:i==="medium"?.8:1,this.shadows=i==="high",this.time=0,this.smokeT=0,this.prevUnit=new Map,this.hares=[],this.marmots=[],this.ducks=[],this.butterflies=[],this.birds=[],this.whistleT=0;let n=t.theme.life||{},s=o=>Math.round((n[o]||0)*this.mul*(this.world.area||1)),a=pv();for(let o=0;o<s("hasen");o++)this.spawnHare(a);for(let o=0;o<s("murmel");o++)this.spawnMarmot(a);n.enten&&this.spawnDucks(a,Math.max(2,s("enten"))),n.falter&&this.spawnButterflies(a,s("falter")),n.voegel&&this.spawnBirds(a,Math.max(1,Math.round(n.voegel*(i==="low"?.6:1))))}mesh(t,e=1){let i=new qt(t,we().prop);return i.castShadow=this.shadows,i.scale.setScalar(e),i.rotation.order="YXZ",this.scene.add(i),i}landOk(t,e,i=.6){let n=this.T;if(Math.abs(t)>n.half*.9||Math.abs(e)>n.half*.9||n.heightAt(t,e)<n.waterLevel+i||n.slopeAt(t,e)>1)return!1;for(let s of this.world.obstaclesNear(t,e)){if(!s.solid)continue;let a=t-s.x,o=e-s.z;if(a*a+o*o<(s.r+.35)*(s.r+.35)&&n.heightAt(t,e)<s.top)return!1}return!0}unitNear(t,e,i){let n=null,s=i*i;for(let a of this.g.units){if(!a.alive&&a.deathT>2)continue;let o=a.pos.x-t,l=a.pos.z-e,c=o*o+l*l;c<s&&(s=c,n=a)}return n}landSpot(t=40,e=null){let i=this.T,n=this.rng;for(let s=0;s<t;s++){let a=n.range(-i.half*.8,i.half*.8),o=n.range(-i.half*.8,i.half*.8);if(this.landOk(a,o,.9)&&!this.unitNear(a,o,4)&&!(e&&!e(a,o)))return{x:a,z:o}}return null}spawnHare(t){let e=this.landSpot(50,(s,a)=>this.T.forestAt(s,a)<.7);if(!e)return;let n={m:this.mesh(this.rng.chance(.5)?t.hare:t.hare2,this.rng.range(1.05,1.25)),x:e.x,z:e.z,y:this.T.heightAt(e.x,e.z),yaw:this.rng.range(0,ki),state:"idle",t:this.rng.range(0,3),hop:null,tx:e.x,tz:e.z,fleeT:0,from:null,vx:0,vy:0,vz:0,spin:0,pose:0,poseT:0};this.hares.push(n)}pickHareTarget(t,e){let i=this.rng;for(let n=0;n<14;n++){let s;e&&t.from?s=Math.atan2(t.x-t.from.x,t.z-t.from.z)+i.range(-.7,.7):s=i.range(0,ki);let a=e?i.range(6,10):i.range(2,6),o=t.x+Math.sin(s)*a,l=t.z+Math.cos(s)*a;if(this.landOk(o,l,.7)&&!(!e&&this.unitNear(o,l,3)))return t.tx=o,t.tz=l,!0}return t.tx=t.x*.8,t.tz=t.z*.8,!1}startHop(t,e){let i=t.tx-t.x,n=t.tz-t.z,s=Math.hypot(i,n);if(s<.4)return!1;let a=Math.min(s,e?1.5:.75),o=t.x+i/s*a,l=t.z+n/s*a;return this.landOk(o,l,.5)?(t.hop={x0:t.x,z0:t.z,y0:t.y,x1:o,z1:l,y1:this.T.heightAt(o,l),t:0,dur:e?.24:.34,hgt:e?.45:.3},t.yawGoal=Math.atan2(i,n),!0):(this.pickHareTarget(t,e),!1)}updateHare(t,e){let i=this.T;if(t.t-=e,t.state==="air"){t.vy-=fv*e,t.x+=t.vx*e,t.z+=t.vz*e,t.y+=t.vy*e,t.m.rotation.x+=t.spin*e;let n=i.heightAt(t.x,t.z);t.y<=n&&t.vy<0&&(t.y=n,t.m.rotation.x=0,n<i.waterLevel+.1?(t.state="swim",this.fx.splash(new D(t.x,i.waterLevel,t.z),.4)):(t.state="dazed",t.t=1.4,this.fx.impactDust(new D(t.x,n,t.z),i.colors.dirt),this.fx.stars(new D(t.x,n+.9,t.z))))}else if(t.state==="swim"){if(!t.shore||t.t<0){t.t=2,t.shore=null;for(let l=1;l<30&&!t.shore;l+=1)for(let c=0;c<12;c++){let h=c/12*ki,u=t.x+Math.sin(h)*l,d=t.z+Math.cos(h)*l;if(this.landOk(u,d,.4)){t.shore={x:u,z:d};break}}t.shore||(t.shore={x:0,z:0})}let n=t.shore.x-t.x,s=t.shore.z-t.z,a=Math.hypot(n,s)||1;t.x+=n/a*1.2*e,t.z+=s/a*1.2*e,t.yaw=Math.atan2(n,s);let o=i.heightAt(t.x,t.z);t.y=Math.max(o,i.waterLevel-.18)+Math.sin(this.time*6)*.03,o>i.waterLevel+.15&&(t.state="flee",t.fleeT=1.5,t.from={x:t.x-n,z:t.z-s},this.pickHareTarget(t,!0),this.fx.puff(new D(t.x,t.y,t.z),new ut("#cfe8ff")))}else if(t.hop){let n=t.hop;n.t+=e/n.dur;let s=Math.min(1,n.t);t.x=n.x0+(n.x1-n.x0)*s,t.z=n.z0+(n.z1-n.z0)*s,t.y=n.y0+(n.y1-n.y0)*s+Math.sin(Math.PI*s)*n.hgt,t.m.rotation.x=-.35*Math.cos(Math.PI*s),s>=1&&(t.hop=null,t.m.rotation.x=0,t.pause=t.state==="flee"?.04:this.rng.range(.08,.5))}else{if(t.y=i.heightAt(t.x,t.z),t.y<i.waterLevel+.05&&(t.state="swim",t.shore=null),t.state==="dazed")t.m.rotation.z=Math.sin(this.time*9)*.25*Math.max(0,t.t),t.t<=0&&(t.m.rotation.z=0,t.state="flee",t.fleeT=2.2,this.pickHareTarget(t,!0));else if(t.state==="flee")t.fleeT-=e,t.pause>0?t.pause-=e:!this.startHop(t,!0)&&Math.hypot(t.tx-t.x,t.tz-t.z)<.5&&this.pickHareTarget(t,!0),t.fleeT<=0&&(t.state="idle",t.t=this.rng.range(1,3));else if(t.state==="walk")t.pause>0?t.pause-=e:this.startHop(t,!1)||(t.state="idle",t.t=this.rng.range(1.5,5));else{t.poseT-=e,t.poseT<=0&&(t.pose=this.rng.chance(.25)?1:this.rng.chance(.5)?2:0,t.poseT=this.rng.range(.8,2.2));let n=t.pose===1?-.85:t.pose===2?.18+Math.max(0,Math.sin(this.time*7))*.12:0;t.m.rotation.x+=(n-t.m.rotation.x)*Math.min(1,e*8),t.t<=0&&(this.pickHareTarget(t,!1),t.state="walk",t.m.rotation.x=0)}if(t.state==="idle"||t.state==="walk"){let n=this.unitNear(t.x,t.z,5);if(n){let s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);(s<2.4||n._lifeMoving&&s<5)&&this.scare(t,n.pos,2.5)}}}t.yawGoal!==void 0&&t.state!=="air"&&(t.yaw+=Hl(t.yawGoal-t.yaw)*Math.min(1,e*14)),t.m.position.set(t.x,t.y,t.z),t.m.rotation.y=t.yaw}scare(t,e,i){t.state="flee",t.fleeT=i,t.from={x:e.x,z:e.z},t.m.rotation.x=0,this.pickHareTarget(t,!0)}spawnMarmot(t){let e=this.T,i=this.world.obstacles.filter(l=>l.kind==="rock"),n=null;for(let l=0;l<30&&!n;l++)if(i.length&&this.rng.chance(.8)){let c=i[this.rng.int(0,i.length-1)],h=this.rng.range(0,ki),u=c.r+this.rng.range(.8,1.6),d=c.x+Math.sin(h)*u,f=c.z+Math.cos(h)*u;this.landOk(d,f,1)&&!this.unitNear(d,f,4)&&(n={x:d,z:f})}else n=this.landSpot(10,(c,h)=>e.heightAt(c,h)>e.waterLevel+2.5);if(!n)return;let s=this.mesh(t.burrow,1);s.castShadow=!1,s.receiveShadow=!0;let a=e.heightAt(n.x,n.z);s.position.set(n.x,a-.05,n.z);let o=this.mesh(t.marmot,1.25);this.marmots.push({m:o,burrow:s,x:n.x,z:n.z,bx:n.x,bz:n.z,y:a,yaw:this.rng.range(0,ki),state:"watch",t:this.rng.range(1,5),up:1,depth:0})}updateMarmot(t,e){let i=this.T;t.t-=e;let n=i.heightAt(t.x,t.z);if(t.burrow.position.y=i.heightAt(t.bx,t.bz)-.05,t.state==="hide")t.depth=Math.min(1,t.depth+e*5),t.t<=0&&!this.unitNear(t.bx,t.bz,6)?(t.state="peek",t.t=1.2):t.t<=0&&(t.t=2);else if(t.state==="peek")t.depth=Math.max(.45,t.depth-e*2),t.t<=0&&(t.state="watch",t.t=this.rng.range(3,6));else{if(t.depth=Math.max(0,t.depth-e*3),t.state==="watch")t.up+=(1-t.up)*Math.min(1,e*6),t.yaw+=Math.sin(this.time*.9+t.bx)*e*.8,t.t<=0&&(t.state="graze",t.t=this.rng.range(3,7),t.gx=t.bx+this.rng.range(-2,2),t.gz=t.bz+this.rng.range(-2,2));else{t.up+=(0-t.up)*Math.min(1,e*6);let a=t.gx-t.x,o=t.gz-t.z,l=Math.hypot(a,o);l>.2&&this.landOk(t.gx,t.gz,.8)&&(t.x+=a/l*.6*e,t.z+=o/l*.6*e,t.yaw+=Hl(Math.atan2(a,o)-t.yaw)*Math.min(1,e*6)),t.t<=0&&(t.state="watch",t.t=this.rng.range(2,5))}let s=this.unitNear(t.x,t.z,7);s&&(s._lifeMoving||Math.hypot(s.pos.x-t.x,s.pos.z-t.z)<3.5)&&this.hideMarmot(t)}t.state==="hide"&&(t.x+=(t.bx-t.x)*Math.min(1,e*8),t.z+=(t.bz-t.z)*Math.min(1,e*8)),t.y=Math.max(n,i.heightAt(t.bx,t.bz))-t.depth*.75,t.m.visible=t.depth<.98,t.m.position.set(t.x,t.y,t.z),t.m.rotation.y=t.yaw,t.m.rotation.x=-1.15*t.up*(1-t.depth)}hideMarmot(t){if(t.state!=="hide"&&(t.state="hide",t.t=this.rng.range(4,8),!this.g.demo&&this.whistleT<=0&&xe.ok)){let e=this.g.cam?this.g.cam.cam.position.distanceTo(t.m.position):0;if(e<45){this.whistleT=9;let i=.07*(1-e/45);xe.tone({freq:2300,freqEnd:2900,dur:.13,type:"sine",gain:i,attack:.01}),xe.tone({freq:2500,freqEnd:2200,dur:.16,type:"sine",gain:i*.8,attack:.01,delay:.14})}}}waterOk(t,e){let i=this.T;return i.baseHeightAt(t,e)<i.waterLevel-.35&&Math.abs(t)<i.half*.95&&Math.abs(e)<i.half*.95}lakePoint(t){let e=this.T,i=e.lake;for(let n=0;n<30;n++){let s,a;if(i){let o=this.rng.range(0,ki),l=Math.sqrt(this.rng.next())*i.r*1.3;s=i.x+Math.cos(o)*l,a=i.z+Math.sin(o)*l}else if(t)s=t.x+this.rng.range(-8,8),a=t.z+this.rng.range(-8,8);else return null;if(this.waterOk(s,a))return{x:s,z:a}}return null}spawnDucks(t,e){if(!this.T.lake)return;let i=e,n=this.lakePoint();if(!n)return;let s={m:this.mesh(t.duck,1.1),x:n.x,z:n.z,yaw:0,state:"swim",t:0,tx:n.x,tz:n.z,kids:[],leader:null,fly:null};this.ducks.push(s),i--;let a=Math.min(4,Math.max(2,i)),o=s;for(let l=0;l<a;l++){let c={m:this.mesh(t.duck,.55),x:n.x-l*.5,z:n.z,yaw:0,state:"follow",leader:o,chick:!0,fly:null};this.ducks.push(c),o=c}i-=Math.max(0,a-2);for(let l=0;l<Math.max(1,i);l++){let c=this.lakePoint();if(!c)break;this.ducks.push({m:this.mesh(t.drake,1.1),x:c.x,z:c.z,yaw:this.rng.range(0,ki),state:"swim",t:0,tx:c.x,tz:c.z,fly:null})}}updateDuck(t,e){let n=this.T.waterLevel;if(t.state==="fly"){let s=t.fly;if(s.t+=e,s.phase==="up")t.x+=s.vx*e,t.z+=s.vz*e,t.y+=5*e,t.yaw=Math.atan2(s.vx,s.vz),t.y>n+11&&(s.phase="circle",s.a=Math.atan2(t.z-s.cz,t.x-s.cx),s.r=Math.max(8,Math.hypot(t.x-s.cx,t.z-s.cz)));else if(s.phase==="circle"){s.a+=e*7/s.r;let a=s.cx+Math.cos(s.a)*s.r,o=s.cz+Math.sin(s.a)*s.r;if(t.yaw=Math.atan2(a-t.x,o-t.z),t.x=a,t.z=o,t.y+=(n+11-t.y)*e,t.m.rotation.z=-.3,s.t>s.dur){let l=this.lakePoint();l&&(s.phase="land",s.lx=l.x,s.lz=l.z)}}else{let a=s.lx-t.x,o=s.lz-t.z,l=Math.hypot(a,o),c=Math.min(7,l*1.2+1);l>.1&&(t.x+=a/l*c*e,t.z+=o/l*c*e,t.yaw=Math.atan2(a,o)),t.y+=(n-t.y)*Math.min(1,e*(l<6?2.2:.4)),t.m.rotation.z=0,l<.4&&t.y<n+.2&&(t.state="swim",t.fly=null,t.t=1,this.fx.splash(new D(t.x,n,t.z),.3))}t.m.rotation.x=s.phase==="land"?-.1:-.25,t.m.scale.y=t.base*(1+Math.sin(s.t*22)*.12)}else{t.m.rotation.x=0,t.m.rotation.z=0,t.base&&(t.m.scale.y=t.base);let s=.55,a,o;if(t.state==="follow"&&t.leader){let u=t.leader;a=u.x-Math.sin(u.yaw)*.55,o=u.z-Math.cos(u.yaw)*.55,u.state==="fly"&&(a=t.x,o=t.z);let d=Math.hypot(a-t.x,o-t.z);s=Math.min(2.6,d*1.6),d<.05&&(s=0)}else{if(t.t-=e,t.t<=0||Math.hypot(t.tx-t.x,t.tz-t.z)<.4){let u=this.lakePoint({x:t.x,z:t.z});u&&(t.tx=u.x,t.tz=u.z),t.t=this.rng.range(5,12)}a=t.tx,o=t.tz,t.hurryT>0&&(t.hurryT-=e,s=2.2)}let l=a-t.x,c=o-t.z,h=Math.hypot(l,c);if(h>.02&&s>0){let u=t.x+l/h*Math.min(h,s*e),d=t.z+c/h*Math.min(h,s*e);this.waterOk(u,d)||t.chick?(t.x=u,t.z=d):t.t=0,t.yaw+=Hl(Math.atan2(l,c)-t.yaw)*Math.min(1,e*4)}t.y=n-.02+Math.sin(this.time*2.3+t.x)*.025}t.m.position.set(t.x,t.y,t.z),t.m.rotation.y=t.yaw}scareDucks(t,e){for(let i of this.ducks){if(i.state==="fly"||Math.hypot(i.x-t.x,i.z-t.z)>20+e*2)continue;if(i.chick||this.ducks.some(o=>o.leader===i)){if(!i.chick){let o=Math.atan2(i.x-t.x,i.z-t.z),l=this.lakePoint();i.tx=l?l.x:i.x+Math.sin(o)*6,i.tz=l?l.z:i.z+Math.cos(o)*6,i.hurryT=4,i.t=5}continue}let s=Math.atan2(i.x-t.x,i.z-t.z)+this.rng.range(-.4,.4),a=this.T.lake||{x:i.x,z:i.z};i.base=i.m.scale.x,i.state="fly",i.y=this.T.waterLevel,i.fly={phase:"up",t:0,vx:Math.sin(s)*6,vz:Math.cos(s)*6,cx:a.x,cz:a.z,dur:this.rng.range(7,12)},this.fx.splash(new D(i.x,this.T.waterLevel,i.z),.3)}}spawnButterflies(t,e){let i=this.world.flowerSpots;if(!i.length||!e)return;let n=new gn(t.butterfly,we().prop,e);n.castShadow=!1,n.frustumCulled=!1;let s=["#ffffff","#fff176","#ffb74d","#81d4fa","#f48fb1","#fffde7"].map(a=>new ut(a));for(let a=0;a<e;a++){let o=i[this.rng.int(0,i.length-1)];n.setColorAt(a,s[this.rng.int(0,s.length-1)]),this.butterflies.push({x:o.x+this.rng.range(-2,2),z:o.z+this.rng.range(-2,2),y:1,a:o,ph:this.rng.range(0,ki),w:this.rng.range(.6,1.2),t:this.rng.range(4,14),yaw:0,flap:this.rng.range(14,20),scatter:0,size:this.rng.range(1.6,2.1)})}n.instanceColor.needsUpdate=!0,this.scene.add(n),this.bfMesh=n,this._m=new Zt,this._q=new Ge,this._p=new D,this._s=new D,this._e=new We(0,0,0,"YXZ")}updateButterflies(t){if(!this.bfMesh)return;let e=this.world.flowerSpots,i=this.T,n=this.g.wind||{x:0,z:0};this.butterflies.forEach((s,a)=>{s.t-=t,s.t<=0&&(s.a=e[this.rng.int(0,e.length-1)],s.t=this.rng.range(6,16));let o=this.time*s.w+s.ph,l=s.a.x+Math.sin(o*1.3)*2.2+Math.sin(o*3.1)*.6,c=s.a.z+Math.cos(o*1.1)*2.2+Math.cos(o*2.7)*.6,h=s.scatter>0?.2:1.2,u=(l-s.x)*h+n.x*.05+(s.svx||0)*s.scatter,d=(c-s.z)*h+n.z*.05+(s.svz||0)*s.scatter,f=Math.hypot(u,d),p=s.scatter>0?6:2.2,y=f>p?p/f:1;s.x+=u*y*t,s.z+=d*y*t,s.scatter>0&&(s.scatter=Math.max(0,s.scatter-t*.6));let g=Math.max(i.heightAt(s.x,s.z),i.waterLevel)+.75+Math.sin(o*2.3)*.35+Math.abs(Math.sin(o*5.1))*.25+s.scatter*3;s.y+=(g-s.y)*Math.min(1,t*3),f>.05&&(s.yaw+=Hl(Math.atan2(u,d)-s.yaw)*Math.min(1,t*6));let v=Math.abs(Math.sin(this.time*s.flap+s.ph));this._e.set(0,s.yaw,Math.sin(this.time*3+s.ph)*.2),this._q.setFromEuler(this._e),this._p.set(s.x,s.y,s.z),this._s.set((.25+v*1.05)*s.size,(1+v*.4)*s.size,1.3*s.size),this._m.compose(this._p,this._q,this._s),this.bfMesh.setMatrixAt(a,this._m)}),this.bfMesh.instanceMatrix.needsUpdate=!0}spawnBirds(t,e){let i=this.T;for(let n=0;n<e;n++){let s=this.mesh(t.bird,this.rng.range(1.2,1.6));s.castShadow=!1,this.birds.push({m:s,cx:this.rng.range(-i.half*.5,i.half*.5),cz:this.rng.range(-i.half*.5,i.half*.5),r:this.rng.range(10,24),h:this.rng.range(24,40),a:this.rng.range(0,ki),w:this.rng.range(.18,.32)*(this.rng.chance(.5)?1:-1),drift:this.rng.range(0,ki)})}}updateBirds(t){for(let e of this.birds){e.a+=e.w*t,e.drift+=t*.05;let i=e.cx+Math.cos(e.drift)*6,n=e.cz+Math.sin(e.drift)*6,s=i+Math.cos(e.a)*e.r,a=n+Math.sin(e.a)*e.r,o=e.w>0?1:-1,l=-Math.sin(e.a)*o,c=Math.cos(e.a)*o;e.m.position.set(s,e.h+Math.sin(e.a*2)*1.2,a),e.m.rotation.y=Math.atan2(l,c),e.m.rotation.z=.35*o,e.m.rotation.x=.05}}update(t){this.time+=t,this.whistleT>0&&(this.whistleT-=t);for(let e of this.g.units){let i=this.prevUnit.get(e);i?(e._lifeMoving=Math.hypot(e.pos.x-i.x,e.pos.z-i.z)>t*.8,i.x=e.pos.x,i.z=e.pos.z):this.prevUnit.set(e,{x:e.pos.x,z:e.pos.z})}for(let e of this.hares)this.updateHare(e,t);for(let e of this.marmots)this.updateMarmot(e,t);for(let e of this.ducks)this.updateDuck(e,t);if(this.updateButterflies(t),this.updateBirds(t),this.world.chimneys.length&&this.g.theme.deco&&this.g.theme.deco.rauch&&(this.smokeT+=t,this.smokeT>.26)){this.smokeT=0;let e=this.g.wind||{x:0,z:0};for(let i of this.world.chimneys)this.fx.chimney(i.x,i.y,i.z,e.x,e.z)}}onExplosion(t,e){let i=!1;for(let n of this.hares){let s=Math.hypot(n.x-t.x,n.z-t.z);if(n.state!=="air")if(s<e*1.4+1){let a=Math.atan2(n.x-t.x,n.z-t.z)+this.rng.range(-.3,.3),o=1-s/(e*1.4+1);n.state="air",n.hop=null,n.vx=Math.sin(a)*(3+o*4),n.vz=Math.cos(a)*(3+o*4),n.vy=6+o*6,n.spin=this.rng.range(8,14)*(this.rng.chance(.5)?1:-1),n.yaw=a,n.yawGoal=a,i=!0}else s<22+e*2&&this.scare(n,t,2.5+this.rng.range(0,1.5))}if(i&&!this.g.demo&&this.time-(this.saidHare||-99)>40){this.saidHare=this.time;let n=["Da Hos hat an Abflug gmacht!","Meister Lampe fliagt Erste Klasse.","Hoppala \u2013 Hasen-Weitflug!","Dem Hasn is nix passiert. Nur sei Frisur is hin."];this.g.hud.toast(n[Math.floor(Math.random()*n.length)])}for(let n of this.marmots)Math.hypot(n.x-t.x,n.z-t.z)<30&&this.hideMarmot(n);this.scareDucks(t,e);for(let n of this.butterflies)if(Math.hypot(n.x-t.x,n.z-t.z)<12){n.scatter=1;let a=Math.atan2(n.x-t.x,n.z-t.z);n.svx=Math.sin(a)*8,n.svz=Math.cos(a)*8,n.a=this.world.flowerSpots[this.rng.int(0,this.world.flowerSpots.length-1)]}}census(){return{hasen:this.hares.length,murmel:this.marmots.length,enten:this.ducks.length,falter:this.butterflies.length,voegel:this.birds.length}}};var te=D,mv=new Proxy({},{get:()=>()=>{}}),Uh=1/30,Df=[1,1.12,.89,1.26,.84,1.19,.94,1.06,.79,1.33],gv=new ut("#1a1a1a"),xv=new ut("#f2c400"),yv=new ut("#3a3a3a"),vv=new ut("#9a9a9a");function zf(){return(Math.random()+Math.random()+Math.random()-1.5)/1.5}var er=class{constructor(t,e){this.app=t,this.opts=e,this.demo=e.mode==="demo",this.hud=this.demo?mv:t.hud,this.settings=t.settings,this.rules=Object.assign({wind:.4,turnTime:t.settings.turnTime||60,risingWater:0,mines:0,fog:!1,crates:!0,maxRounds:40},e.rules||{}),this.rng=new Ne((e.seed||1)*977+13),this.scene=new br,this.theme=Vn[e.theme]||Vn.alm,this.time=0,this.timers=[],this.frameWaiters=[],this.projectiles=[],this.mines=[],this.tnts=[],this.crates=[],this.gases=[],this.planes=[],this.swarms=[],this.tractors=[],this.stuck=[],this.units=[],this.teams=[],this.played=new Set,this.phase="intro",this.round=1,this.turnIdx=-1,this.wind={x:0,z:0},this.power=0,this.charging=!1,this.overview=!1,this.paused=!1,this.disposed=!1,this.busy=0,this.settleT=0,this.settleT2=0,this.shot=null,this.lastEvent=null,this.lastPower={},this.powerHint=null,this.aimInfo=null,this.targetPoint=null,this.saidBlock=0,this.log=[],this.turnCount=0;let i=oa[this.rules.mapSize]||oa.mittel;this.mapScale=i.size/110,this.world=new Pl(this.scene,this.theme,e.seed||1,t.quality,{fog:this.rules.fog,maibaum:this.rules.maibaum,planSpawns:n=>this.planSpawns(n),size:i.size}),this.forts=new kl(this),this.terrain=this.world.terrain,this.fx=new Ll(this.scene,t.quality),this.fx.terrain=this.terrain,this.cam=new Dl(t.aspect()),this.cam.terrain=this.terrain,this.cam.worldScale=this.mapScale,this.env={terrain:this.terrain,wind:this.wind,units:this.units,obstacles:this.world.obstacles,grid:this.world.obstacleGrid,waterLevel:0,owner:null},this.envCalm={...this.env,wind:{x:0,z:0}},this.createTeams(),this.life=new Gl(this,e.seed||1),this.createMarkers(),this.rules.mines&&this.scatterMines(Math.round(this.rules.mines*this.mapScale*this.mapScale))}planSpawns(t){let e=this.rng,i=this.opts.teams,n=i.length;this.spawnSpots=i.map(()=>[]);let s=[],a=[],o=()=>{for(let d=0;d<400;d++){let f=e.range(-40,40)*this.mapScale,p=e.range(-40,40)*this.mapScale;if(t.heightAt(f,p)>t.waterLevel+.8)return{x:f,z:p}}return{x:0,z:0}},l=(d,f)=>{for(let p of[2.5,5])for(let y=0;y<8;y++){let m=y/8*Math.PI*2;if(t.heightAt(d+Math.sin(m)*p,f+Math.cos(m)*p)<t.waterLevel+.2)return!0}return!1},c=Math.max(...i.map(d=>d.soldiers.length)),h=e.int(0,n-1),u=[];for(let d=0;d<c;d++)for(let f=0;f<n;f++){let p=(h+f)%n;d<i[p].soldiers.length&&u.push(p)}for(let d of u){let f=null,p=-1/0;for(let y=0;y<90;y++){let m=e.range(-t.half*.8,t.half*.8),g=e.range(-t.half*.8,t.half*.8);if(t.heightAt(m,g)<t.waterLevel+.9||t.slopeAt(m,g)>.5)continue;let v=60,w=60,b=60;for(let _ of s){let x=Pt(_.x,_.z,m,g);x<v&&(v=x),_.team===d?x<b&&(b=x):x<w&&(w=x)}let A=Math.min(v,22*this.mapScale)+e.range(0,6);w<10&&(A-=60),b<6&&(A-=25),l(m,g)&&(A-=12),A>p&&(p=A,f={x:m,z:g})}f||(f=o()),s.push({x:f.x,z:f.z,team:d}),this.spawnSpots[d].push(f),a.push({x:f.x,z:f.z,r:2.6})}return a}createTeams(){this.opts.teams.forEach((t,e)=>{let i=Mi(t.faction),n={idx:e,faction:i,name:i.name,short:i.short,color:i.color,control:t.control,difficulty:t.difficulty||"normal",units:[],next:0,alive:!0,human:t.control==="human",label:t.label};t.soldiers.forEach((s,a)=>{let o=new zl(this,s,n),l=this.spawnSpots[e][a];o.pos.set(l.x,this.terrain.heightAt(l.x,l.z),l.z),o.yaw=Math.atan2(-l.x,-l.z)+this.rng.range(-.4,.4),o.animate(0),n.units.push(o),this.units.push(o)}),n.human||(n.ai=new Ul(this,n,n.difficulty)),this.teams.push(n)})}createMarkers(){this.arrow=new qt(gi("arrow"),new Ui({color:16777215})),this.arrow.scale.setScalar(.7),this.arrow.visible=!1,this.marker=new qt(gi("marker"),new Ui({color:16777215,transparent:!0,opacity:.9})),this.marker.visible=!1;let t=new oi(1,.05,4,72);t.rotateX(Math.PI/2),this.rangeRing=new qt(t,new Ui({color:16777215,transparent:!0,opacity:.45})),this.rangeRing.visible=!1,this.previewArr=new Float32Array(450),this.previewGeo=new Ee,this.previewGeo.setAttribute("position",new be(this.previewArr,3).setUsage(Hn)),this.previewGeo.setDrawRange(0,0),this.preview=new es(this.previewGeo,new zs({size:.3,color:16777215,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1})),this.preview.frustumCulled=!1,this.laserGeo=new Ee().setFromPoints([new te,new te(0,1,0)]),this.laser=new Er(this.laserGeo,new Ds({color:16726832,transparent:!0,opacity:.7})),this.laser.frustumCulled=!1,this.laser.visible=!1,this.impactRing=new qt(gi("marker"),new Ui({color:16777215,transparent:!0,opacity:.9,depthTest:!1})),this.impactRing.renderOrder=6,this.impactRing.visible=!1,this.scene.add(this.arrow,this.marker,this.rangeRing,this.preview,this.laser,this.impactRing)}scatterMines(t){for(let e=0;e<t;e++){let i=this.world.findSpot(this.rng,{maxSlope:.6,minDist:.5,minH:.8,area:.8});i&&(this.units.some(n=>Pt(n.pos.x,n.pos.z,i.x,i.z)<4.5)||this.addMine(new te(i.x,i.y,i.z),null,!0))}}addMine(t,e,i){let n=new qt(gi("mine"),we().item);n.position.copy(t),n.rotation.y=Math.random()*6,n.castShadow=!0,this.scene.add(n),this.mines.push({pos:t,mesh:n,armed:i,trig:-1,owner:e,W:Kt.mine,dead:!1})}start(){if(this.cam.setMode("orbit",{pos:new te(0,4,0)},{dist:78*this.mapScale,pitch:.55}),this.cam.yaw=this.rng.range(0,6.28),this.cam.dist=120,this.turnIdx=(this.opts.firstTeam??this.rng.int(0,this.teams.length-1))-1,this.demo){this.after(1.5,()=>this.startTurn());return}this.hud.setupMatch(this),this.hud.announce(this.opts.title||"Gefecht!",`${this.theme.name}${this.rules.fog?" \xB7 Nebel":""}${this.rules.risingWater?" \xB7 Hochwasser":""}`,2.4),this.sfx("bell",.35,0,1),this.after(2.6,()=>this.startTurn())}addLog(t){this.log.push(`${this.time.toFixed(1)}s ${t}`),this.log.length>300&&this.log.shift()}after(t,e){this.timers.push({t,fn:e})}wait(t){return new Promise(e=>this.after(t,e))}nextFrame(){return new Promise(t=>this.frameWaiters.push(t))}sfx(t,...e){this.demo||!xe[t]||xe[t](...e)}vocal(t,e,i=1){if(!t||this.demo||Math.random()>i)return;let n=t.isStier,s={select:[n?.72:1.05,.3],attack:[n?.7:1,.4],hurt:[n?.8:1.15,.45],death:[n?.55:.75,.45],drown:[n?.55:.75,.45]}[e];s&&xe.moo(s[0],s[1])}say(t,e,i=1){if(!t||this.demo||Math.random()>i)return;let n=e==="hit"&&t.isStier&&Math.random()<.4?Bl("hitStier"):Bl(e);this.hud.say(t,n)}startTurn(){if(this.disposed||this.phase==="gameover"||this.checkVictory())return;let t=this.teams.length,e=this.turnIdx,i=null;for(let s=0;s<t;s++)if(e=(e+1)%t,this.teams[e].alive){i=this.teams[e];break}if(!i){this.gameOver(null);return}if(this.played.has(e)&&(this.played.clear(),this.newRound(),this.phase==="gameover"))return;this.played.add(e),this.turnIdx=e,this.team=i;let n=null;for(let s=0;s<i.units.length;s++){let a=i.units[(i.next+s)%i.units.length];if(a.alive){n=a,i.next=(i.units.indexOf(a)+1)%i.units.length;break}}if(!n){this.endTurn();return}this.unit=n,this.turnCount++,this.addLog(`T${this.turnCount} R${this.round} ${i.short} ${n.name}`),this.windChange(),this.rules.crates&&this.round>1&&this.rng.chance(.3)&&this.crates.length<4&&this.spawnCrate(),this.turnTimer=this.rules.turnTime,this.timerWarn=5,n.stamina=100,this.attacked=!1,this.canSwitch=!0,this.moved=0,this.tiredSaid=!1,this.charging=!1,this.power=0,this.targetPoint=null,this.targetCycle=-1,this.weapon=n.weapon&&n.ammo[n.weapon]!==0&&n.ammo[n.weapon]!==void 0?n.weapon:n.defaultWeapon(),n.setHeld(this.weapon),this.phase=i.human?"move":"ai",this.overview=!1,this.cam.manualZoom=1,this.cam.userTime=99,this.arrow.material.color.set(i.color),this.hud.turnStart(this,i,n),this.sfx("turnStart",Df[Math.max(0,Pi.indexOf(i.faction))%Df.length]),this.after(.5,()=>{this.unit===n&&n.alive&&(this.say(n,"select",.65),this.vocal(n,"select"))}),i.human||i.ai.takeTurn(n).catch(s=>{console.error(s),!this.disposed&&this.phase!=="gameover"&&(this.phase="ai",this.endTurn())}),this.opts.tutorial&&i.human&&!this.tutorialShown&&(this.tutorialShown=!0,this.after(.8,()=>this.hud.tutorial(this)))}newRound(){if(this.round++,this.hud.setRound(this.round),this.round>this.rules.maxRounds){this.hud.announce("Zeit is um!","Wer am meisten Lebenspunkte hat, gewinnt.",2),this.gameOver(null,!0);return}if(this.rules.risingWater){let t=this.terrain.waterLevel;this.waterAnim={from:t,to:t+this.rules.risingWater,t:0},this.demo||this.hud.announce("Das Wasser steigt!",`Runde ${this.round}`,1.6)}}windChange(){let t=this.rules.wind,e=this.rng.range(0,Math.PI*2),i=t*this.rng.range(.1,1);this.wind.x=this.wind.x*.35+Math.sin(e)*i*.65,this.wind.z=this.wind.z*.35+Math.cos(e)*i*.65;let n=Math.hypot(this.wind.x,this.wind.z);n>t&&n>0&&(this.wind.x*=t/n,this.wind.z*=t/n)}endTurn(){if(!(this.phase==="turnEnd"||this.phase==="gameover")){this.phase="turnEnd",this.charging=!1,this.power=0,this.targetPoint=null,this.unit&&(this.unit.aiming=!1,this.unit.moving=!1,this.unit.weapon=this.weapon),this.overview=!1,this.hud.phase(this),this.hud.closeWeaponMenu();for(let t of this.mines)t.armed=!0;for(let t of this.gases){for(let e of this.units)e.alive&&e.getCenter().distanceTo(t.pos)<t.radius+.6&&(this.damageUnit(e,t.dmg,t.owner,null,"gas"),this.fx.gasBurst(e.getCenter(),.8));t.turns--}this.gases=this.gases.filter(t=>t.turns>0),this.after(.35,()=>{this.settleT2=0,this.settleWait=0,this.settleCb=()=>{this.checkVictory()||this.startTurn()}})}}checkVictory(){if(this.phase==="gameover")return!0;for(let i of this.teams)i.alive=i.units.some(n=>n.alive);let t=this.teams.filter(i=>i.alive),e=this.teams.filter(i=>i.human);return t.length<=1?(this.gameOver(t[0]||null),!0):e.length&&!e.some(i=>i.alive)?(this.gameOver(null,!0),!0):!1}gameOver(t,e=!1){if(this.phase==="gameover")return;if(!t&&e){let n=-1;for(let s of this.teams){let a=s.units.reduce((o,l)=>o+(l.alive?l.hp:0),0);a>n&&(n=a,t=a>0?s:null)}}this.phase="gameover",this.winner=t,this.arrow.visible=!1,this.hud.phase(this),this.hud.closeWeaponMenu(),this.settleCb=null;let i=this.teams.some(n=>n.human);if(t){let n=t.units.filter(s=>s.alive);n.forEach((s,a)=>{s.cheer=.01,s.aiming=!1,a<2&&this.after(.4+a*.6,()=>this.say(s,"victory"))}),this.cam.setMode("orbit",n[0]||{pos:new te},{dist:13,pitch:.28}),this.hud.announce(t.human&&this.teams.filter(s=>s.human).length===1?"Sieg!":`${t.short} gewinnt!`,t.name,3.5),i&&this.sfx(t.human?"victory":"defeat")}else this.cam.setMode("orbit",{pos:new te(0,3,0)},{dist:60,pitch:.5}),this.hud.announce("Unentschieden!","Alle hin. Typisch.",3.5),i&&this.sfx("defeat");this.after(this.demo?4:4.8,()=>{this.disposed||(this.demo?this.app.onDemoEnd&&this.app.onDemoEnd():this.app.onMatchEnd(this.result()))})}result(){return{winner:this.winner?this.winner.idx:-1,rounds:this.round,teams:this.teams.map(t=>({idx:t.idx,faction:t.faction.id,name:t.name,human:t.human,alive:t.alive,units:t.units.map(e=>({id:e.s.id,name:e.name,alive:e.alive,hp:Math.max(0,Math.round(e.hp)),hpMax:e.hpMax,kills:e.stats.kills,dmg:Math.round(e.stats.dmg),dmgTaken:Math.round(e.stats.dmgTaken)}))}))}}get humanTurn(){return this.team&&this.team.human&&["move","aim","target","retreat"].includes(this.phase)}cmd(t,e){if(this.paused||this.disposed)return;let i=this.unit;if(this.humanTurn)switch(t){case"weaponMenu":(this.phase==="move"||this.phase==="aim"||this.phase==="target")&&this.hud.openWeaponMenu(this);break;case"selectWeapon":if(i.ammo[e]===void 0||i.ammo[e]===0)return;this.weapon=e,i.weapon=e,i.setHeld(e),this.sfx("click"),this.enterAim();break;case"aim":this.phase==="move"&&this.enterAim();break;case"back":this.stopTactical(),(this.phase==="aim"||this.phase==="target")&&(this.phase="move",this.charging=!1,this.power=0,i.aiming=!1,this.targetPoint=null,this.overview=!1,this.hud.phase(this));break;case"fireDown":{this.phase==="aim"?Kt[this.weapon].type==="ballistic"?(this.charging=!0,this.power=0,this.chargeStart=performance.now()):this.fire():this.phase==="target"&&this.targetPoint&&this.fire();break}case"fireUp":this.phase==="aim"&&this.charging&&(performance.now()-(this.chargeStart||0)<230?this.fire({power:this.presetPower()}):this.fire());break;case"jump":(this.phase==="move"||this.phase==="retreat")&&i.jump()&&(this.sfx("jump"),this.moved+=1,this.canSwitch=!1);break;case"switch":this.phase==="move"&&this.canSwitch&&this.switchUnit();break;case"endTurn":(this.phase==="move"||this.phase==="aim"||this.phase==="target")&&this.endTurn();break;case"nextTarget":this.phase==="aim"&&this.nextTarget();break;case"overview":(this.phase==="move"||this.phase==="aim")&&(this.overview=!this.overview,this.overview&&(this.cam.setMode("overview",null,{keepTarget:!0}),this.cam.goal.copy(i.pos)),this.hud.phase(this));break;default:break}}switchUnit(){let t=this.team,e=t.units.filter(s=>s.alive);if(e.length<2)return;let i=e.indexOf(this.unit),n=e[(i+1)%e.length];this.unit.aiming=!1,this.unit=n,this.targetCycle=-1,n.stamina=100,this.weapon=n.weapon&&n.ammo[n.weapon]?n.weapon:n.defaultWeapon(),n.setHeld(this.weapon),t.next=(t.units.indexOf(n)+1)%t.units.length,this.cam.userTime=99,this.hud.turnStart(this,t,n,!0),this.say(n,"select",.5),this.sfx("click")}pitchMin(t){return t.type==="ballistic"?(t.minPitch!==void 0?t.minPitch:-10)*ve:t.type==="hitscan"||t.type==="cone"?-50*ve:0}pitchMax(t){return t.type==="ballistic"?82*ve:t.type==="hitscan"||t.type==="cone"?60*ve:0}enterAim(){let t=this.unit,e=Kt[this.weapon];!e||t.ammo[this.weapon]===0||(this.hud.closeWeaponMenu(),this.charging=!1,this.power=0,e.type==="strike"||e.type==="jump"?(this.phase="target",this.targetPoint=null,this.cam.setMode("overview",null,{keepTarget:!0}),this.cam.goal.copy(t.pos),this.cam.manualZoom=e.type==="jump"?.65:1,this.hud.toast(e.tunnel?"Tipp, wo du rauskommen willst (im Kreis, ned unterm Wasser durch).":e.type==="jump"?"Tipp auf an Landepunkt im Kreis.":"Tipp auf das Ziel auf der Karte.")):(this.phase="aim",this.overview=!1,t.aiming=!0,e.type==="ballistic"?t.aimPitch=Et(Math.max(t.aimPitch,(e.minPitch||30)*ve),this.pitchMin(e),this.pitchMax(e)):t.aimPitch=Et(t.aimPitch,this.pitchMin(e),this.pitchMax(e)),e.type==="hitscan"&&Math.abs(t.aimPitch)>.5&&(t.aimPitch=.05),["heal","place","melee","drive","build","dig"].includes(e.type)&&(t.aimPitch=0),["heal","build","dig"].includes(e.type)&&(t.aiming=!1),this.usesTactical(e)?(this.app.input.exitLock(),this.startTactical(t,e)):(this.stopTactical(),this.grabMouse())),this.hud.phase(this))}grabMouse(){let t=this.app.input;!t.canLock||!this.humanTurn||this.phase!=="aim"||(t.requestLock(),this.mouseHintShown||(this.mouseHintShown=!0,this.hud.toast("\u{1F5B1}\uFE0F Maus = zielen \xB7 Linksklick = Feuer \xB7 Mausrad = Kraft \xB7 Rechtsklick = zur\xFCck",4)))}wantsLock(){return this.humanTurn&&this.phase==="aim"&&!this.paused&&!this.overview&&!this.hud.weaponMenuOpen&&!this.tac}usesTactical(t){return!!(this.app.input.canLock&&t&&(t.type==="ballistic"||t.type==="drive"))}startTactical(t,e){let i=this.weapon;this.tac={yaw:t.yaw,ahead:e.type==="drive"?18:i==="panzerfaust"||i==="moerser"?26:15,arc:"auto",target:null,lastSolve:0,solvedAt:null,reach:"ok",snap:null,hold:!1,maxR:e.type==="ballistic"?this.maxRange(t,e):999},this.app.input.mouseMoved=0,this.app.canvas.classList.add("tac-cursor"),this.tacHintShown||(this.tacHintShown=!0,this.hud.toast("\u{1F3AF} Zeig mit der Maus aufs Ziel und klick \u2013 Winkel, Kraft und Wind rechnet das Spiel. W/S = Bogen hoch/flach",5))}stopTactical(){this.tac&&(this.tac=null,this.app.canvas.classList.remove("tac-cursor"))}updateTactical(t){let e=this.tac;if(!e)return;let i=this.unit,n=Kt[this.weapon];if(!this.humanTurn||this.phase!=="aim"||!i||!i.alive||!this.usesTactical(n)||this.overview){this.stopTactical();return}let s=this.app.input,a=this.app.width,o=this.app.height,l=s.axis().x;if(l&&(e.yaw-=l*1.4*t),s.mouseX>=0&&(s.mouseX<18?e.yaw+=1.1*t:s.mouseX>a-18&&(e.yaw-=1.1*t)),s.mouseX<0||e.hold&&s.mouseMoved<12)return;e.hold&&(e.hold=!1);let c=this.time;if(c-e.lastSolve<.07)return;let h=s.mouseX/a*2-1,u=-(s.mouseY/o)*2+1,d=this.cam.screenRay(h,u),f=this.terrain.raycast(d.origin,d.dir,700,.6);if(!f)return;let p=f.point;e.snap=null;let y=34;for(let m of this.units){if(!m.alive||m.team===i.team)continue;let g=this.hud.project(m.getCenter(),this.cam.cam,a,o);if(!g)continue;let v=Math.hypot(g.x-s.mouseX,g.y-s.mouseY);v<y&&(y=v,e.snap=m)}e.snap&&(p=e.snap.pos.clone()),!(e.solvedAt&&e.solvedAt.distanceTo(p)<.25&&e.solvedArc===e.arc)&&(e.lastSolve=c,e.target=p.clone(),this.solveTactical(i,n,p))}solveTactical(t,e,i){let n=this.tac;if(n.solvedAt=i.clone(),n.solvedArc=n.arc,e.type==="drive"){t.yaw=Math.atan2(i.x-t.pos.x,i.z-t.pos.z),n.reach="ok";return}let s=(this.settings.aimHelp||"full")!=="off",a=Pt(t.pos.x,t.pos.z,i.x,i.z),o=a>n.maxR+1,l=i;if(o){let h=Math.max(0,n.maxR-.5)/a;l=new te(t.pos.x+(i.x-t.pos.x)*h,0,t.pos.z+(i.z-t.pos.z)*h),l.y=this.terrain.heightAt(l.x,l.z)}let c=this.aimBallistic(t,e,l,s&&this.settings.aimHelp!=="short",n.arc);if(c){this.lastPower[this.weapon]=c.power;let h=e.swarm?e.swarm.range*.5:Math.max(1.5,e.radius*.6);n.reach=o?"far":c.err<h?"ok":"blocked"}else t.yaw=Math.atan2(i.x-t.pos.x,i.z-t.pos.z),t.aimPitch=Et(45*ve,this.pitchMin(e),this.pitchMax(e)),this.lastPower[this.weapon]=1,n.reach=o?"far":"blocked";this.powerHint=null}onLook(t,e){if(!this.humanTurn||this.phase!=="aim")return;let i=this.unit,n=Kt[this.weapon],s=(this.settings.camSens||1)*(this.cam.fov/55)*(this.app.input.keys.has("ShiftLeft")||this.app.input.keys.has("ShiftRight")?.3:1);i.yaw-=t*.0024*s,i.aimPitch=Et(i.aimPitch-e*.0021*s,this.pitchMin(n),this.pitchMax(n))}onLockButton(t,e){this.humanTurn&&(t===0?this.cmd(e?"fireDown":"fireUp"):t===2&&e?this.cmd("back"):t===1&&e&&this.cmd("nextTarget"))}onLockChange(t){!t&&this.humanTurn&&this.phase==="aim"&&!this.paused&&!this.overview&&!this.hud.weaponMenuOpen&&(this.charging&&(this.charging=!1,this.power=0),this.cmd("back"))}onWheel(t,e){let i=this.weapon?Kt[this.weapon]:null;if(this.tac){this.tac.ahead=Et(this.tac.ahead*(t>0?1.12:.89),6,75);return}if(this.humanTurn&&this.phase==="aim"&&i&&i.type==="ballistic"&&!this.charging){let n=e&&e.shiftKey?.005:.02;this.lastPower[this.weapon]=Et(this.presetPower()-t*n,.05,1),this.powerHint=null;return}this.cam.zoomInput(t>0?1.1:.9)}aimDirect(t,e,i){for(let a of[.95,1.85,.5,1.4]){let o=t.muzzle(),l=new te(i.pos.x,i.pos.y+a,i.pos.z);if(t.aimPitch=Et(Math.atan2(l.y-o.y,Pt(o.x,o.z,l.x,l.z)),this.pitchMin(e),this.pitchMax(e)),this.traceRay(t.muzzle(),t.aimDir(),e.range,t).unit===i)return!0}let n=i.getCenter(),s=t.muzzle();return t.aimPitch=Et(Math.atan2(n.y-s.y,Pt(s.x,s.z,n.x,n.z)),this.pitchMin(e),this.pitchMax(e)),!1}aimBallistic(t,e,i,n,s="auto"){let o=this.weapon==="panzerfaust",l=o?[10,18,28,40,52]:e.minPitch?[60,50,70,45]:[45,35,55,65,25];s==="hoch"&&(l=o?[35,45,55]:[60,65,55,70,50]),s==="flach"&&(l=o?[5,9,14,20]:e.minPitch?[40,45,36]:[22,28,34,18,40]);let c=Math.atan2(i.x-t.pos.x,i.z-t.pos.z),h=null;for(let u of l){if(e.minPitch!==void 0&&u<e.minPitch)continue;t.aimPitch=Et(u*ve,this.pitchMin(e),this.pitchMax(e)),t.yaw=c;let d=null;for(let f=0;f<(n?3:1)&&(d=this.solvePower(t,e,i,n),!(!d||!n));f++){let p=t.muzzle(),y=Math.atan2(d.x-p.x,d.z-p.z),g=Math.atan2(i.x-p.x,i.z-p.z)-y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;if(Math.abs(g)<.003)break;t.yaw+=g}if(d&&((!h||d.err<h.err)&&(h={pitch:t.aimPitch,yaw:t.yaw,power:d.power,err:d.err}),d.err<e.radius*.45))break}return h?(t.aimPitch=h.pitch,t.yaw=h.yaw,h):(t.yaw=c,null)}maxRange(t,e){let i=t.aimPitch;t.aimPitch=Et(45*ve,this.pitchMin(e),this.pitchMax(e));let n=t.muzzle(),s=js(e,n,t.aimDir().multiplyScalar(e.speed),this.envCalm,8);return t.aimPitch=i,Math.round(Pt(n.x,n.z,s.x,s.z))}nextTarget(){let t=this.unit,e=Kt[this.weapon],i=this.units.filter(a=>a.alive&&a.team!==t.team);if(!i.length)return;if(i.sort((a,o)=>a.pos.distanceTo(t.pos)-o.pos.distanceTo(t.pos)),e.type==="hitscan"||e.type==="cone"){let a=t.yaw,o=t.aimPitch,l=new Set;for(let c of i)t.yaw=Math.atan2(c.pos.x-t.pos.x,c.pos.z-t.pos.z),this.aimDirect(t,e,c)&&l.add(c);t.yaw=a,t.aimPitch=o,i.sort((c,h)=>(l.has(h)?1:0)-(l.has(c)?1:0))}this.targetCycle=((this.targetCycle??-1)+1)%i.length;let n=i[this.targetCycle];t.yaw=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z);let s=Math.round(n.pos.distanceTo(t.pos));if(this.powerHint=null,e.type==="hitscan"||e.type==="cone"){let a=this.aimDirect(t,e,n);this.hud.toast(`Ziel: ${n.name} (${s} m)${s>e.range?" \u2013 z'weit weg!":a?"":" \u2013 Deckung im Weg, geh woanders hin!"}`)}else if(e.type==="ballistic"){let a=this.settings.aimHelp||"full";if(a!=="off"){let o=n.pos.clone();if(e.swarm){let h=t.pos.x-n.pos.x,u=t.pos.z-n.pos.z,d=Math.hypot(h,u)||1,f=Et(d-6,0,e.swarm.range*.6);o.x+=h/d*f,o.z+=u/d*f,o.y=this.terrain.heightAt(o.x,o.z)}let l=this.aimBallistic(t,e,o,a==="full"),c=e.swarm?e.swarm.range*.5:e.radius;if(t.yaw=l?t.yaw:Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),l&&l.err<c*1.5)this.lastPower[this.weapon]=l.power,this.powerHint={power:l.power,yaw:t.yaw,pitch:t.aimPitch},this.hud.toast(`Ziel: ${n.name} (${s} m) \u2013 \u{1F525} antippen zum Feuern`);else{l&&(this.lastPower[this.weapon]=l.power);let h=this.maxRange(t,e)+(e.swarm?e.swarm.range:0);this.hud.toast(s>h-2?`${n.name} is ${s} m weg \u2013 ${e.name} schafft nur ca. ${h} m. Geh n\xE4her hin!`:`${n.name} (${s} m): mit ${e.name} schwer zu erwischen \u2013 probier an anderen Winkel oder a andere Waffe.`)}}else t.aimPitch=Et(45*ve,this.pitchMin(e),this.pitchMax(e)),this.hud.toast(`Ziel: ${n.name} (${s} m)`)}else if(e.type==="drive"){let a=this.simulateDrive(t.pos,t.yaw,t),o=new te(a.x,a.y+.9,a.z),l=n.getCenter().distanceTo(o)<e.radius*.85&&a.type!=="water";this.hud.toast(`Ziel: ${n.name} (${s} m)${l?" \u2013 freie Fahrt!":a.type==="water"?" \u2013 der Traktor landet im Wasser!":" \u2013 da is was im Weg"}`)}else this.hud.toast(`Ziel: ${n.name} (${s} m)`);if(this.tac){let a=this.tac;a.yaw=t.yaw,a.ahead=Et(s*.75,8,70),a.hold=!0,this.app.input.mouseMoved=0,a.target=n.pos.clone(),a.solvedAt=n.pos.clone(),a.solvedArc=a.arc,a.reach=this.powerHint||e.type==="drive"?"ok":"far"}this.sfx("click")}presetPower(){return this.lastPower[this.weapon]||.6}solvePower(t,e,i,n){let s=n?this.env:this.envCalm;s.owner=t;let a=t.muzzle(),o=Math.sin(t.yaw),l=Math.cos(t.yaw),c=(i.x-a.x)*o+(i.z-a.z)*l,h=t.aimDir(),u=null,d=p=>(u=js(e,a,h.clone().multiplyScalar(e.speed*p),s,8),(u.x-a.x)*o+(u.z-a.z)*l),f=null;if(d(1)>=c-e.radius*.5){let p=.04,y=1;for(let w=0;w<16;w++){let b=(p+y)/2;d(b)<c?p=b:y=b}let m=(p+y)/2;d(m);let g=u.type==="water"||u.type==="gone"||u.type==="timeout",v=Math.hypot(u.x-i.x,u.z-i.z)+(g?50:0)+Math.max(0,Math.abs(u.y-i.y)-1.5);f={power:m,err:v,x:u.x,z:u.z}}return s.owner=null,f}onTap(t,e,i){if(this.humanTurn&&this.phase==="aim"&&this.tac&&i){if(i.button===2){this.cmd("back");return}i.pointerType==="mouse"&&this.updateTactical(1),this.fire({power:this.presetPower()});return}if(this.humanTurn&&i&&i.pointerType==="mouse"){if(this.phase==="aim"){i.button===2?this.cmd("back"):this.grabMouse();return}if(this.phase==="move"&&i.button===2){this.cmd("aim");return}}if(!this.humanTurn||this.phase!=="target")return;let n=Kt[this.weapon],s=this.cam.screenRay(t,e),a=this.terrain.raycast(s.origin,s.dir,700,.6);if(!a)return;let o=a.point;if(n.type==="jump"){if(Pt(o.x,o.z,this.unit.pos.x,this.unit.pos.z)>n.range){this.hud.toast("Z'weit weg! Nur innerhalb vom Kreis.");return}if(o.y<this.terrain.waterLevel+.3){this.hud.toast(n.tunnel?"Im Wasser kummst ned raus.":"Ins Wasser springen? Na sicher ned.");return}if(n.tunnel){let c=this.forts.tunnelBlocked(this.unit.pos,o);if(c){this.hud.toast(c);return}}}if(this.targetPoint&&Pt(o.x,o.z,this.targetPoint.x,this.targetPoint.z)<2.5){this.fire();return}this.targetPoint=o.clone(),this.sfx("click"),this.hud.phase(this)}onDrag(t,e,i,n){if(this.disposed)return;let s=this.settings.camSens||1,a=this.unit;if(this.tac&&this.humanTurn&&this.phase==="aim"){this.tac.yaw-=t*.005*s,this.tac.ahead=Et(this.tac.ahead+e*.08,6,75);return}if(this.humanTurn&&this.phase==="aim"&&(n!=="mouse"||i===0)){let o=Kt[this.weapon],l=this.cam.fov/55;a.yaw-=t*.0045*s*l,a.aimPitch=Et(a.aimPitch-e*.0035*s*l,this.pitchMin(o),this.pitchMax(o));return}if(this.cam.mode==="overview"){this.cam.pan(t,e);return}this.cam.orbitInput(t*.006*s,e*.004*s)}onKey(t,e){if(this.humanTurn){if(!e){t==="Space"&&this.phase==="aim"&&this.cmd("fireUp");return}switch(t){case"Space":this.phase==="move"||this.phase==="retreat"?this.cmd("jump"):this.phase==="aim"?this.cmd("fireDown"):this.phase==="target"&&this.cmd("fireDown");break;case"Enter":case"KeyF":this.phase==="move"?this.cmd("aim"):this.phase==="aim"?Kt[this.weapon].type==="ballistic"?this.fire({power:this.presetPower()}):this.cmd("fireDown"):this.phase==="target"&&this.cmd("fireDown");break;case"KeyQ":case"KeyR":this.hud.toggleWeaponMenu(this);break;case"Tab":case"KeyE":this.phase==="move"?this.cmd("switch"):this.phase==="aim"&&this.cmd("nextTarget");break;case"Escape":(this.phase==="aim"||this.phase==="target")&&this.cmd("back");break;case"Backspace":case"KeyX":this.cmd("endTurn");break;case"KeyM":this.cmd("overview");break;case"KeyW":case"ArrowUp":case"KeyS":case"ArrowDown":if(this.tac&&Kt[this.weapon].type==="ballistic"){let i=t==="KeyW"||t==="ArrowUp",n=["flach","auto","hoch"],s=Et(n.indexOf(this.tac.arc)+(i?1:-1),0,2);this.tac.arc=n[s],this.tac.lastSolve=0,this.tac.target&&this.solveTactical(this.unit,Kt[this.weapon],this.tac.target),this.hud.toast({flach:"Flacher Bogen",auto:"Bogen: automatisch",hoch:"Hoher Bogen"}[this.tac.arc],1.2)}break;default:if(t.startsWith("Digit")){let i=parseInt(t.slice(5),10),n=this.unit.weapons().filter(s=>this.unit.ammo[s]!==0);n[i-1]&&this.cmd("selectWeapon",n[i-1])}}}}fire(t={}){let e=this.unit;if(!e||!e.alive||!["aim","target","ai"].includes(this.phase))return Promise.resolve();let i=this.weapon,n=Kt[i];if(!n||e.ammo[i]===0||e.ammo[i]===void 0)return Promise.resolve();t.yaw!==void 0&&(e.yaw=t.yaw),t.pitch!==void 0&&(e.aimPitch=t.pitch);let s=t.power!==void 0?t.power:this.power,a=t.target||this.targetPoint;if((n.type==="strike"||n.type==="jump")&&!a)return Promise.resolve();if(n.type==="build"||n.type==="dig"){let o=n.type==="build"?this.forts.canBuildAt(e.pos.x,e.pos.z):e.dug?"Du steckst eh scho im Loch.":this.world.onDeck(e.pos.x,e.pos.z,.3)?"Durch a Br\xFCckn grabt ma ned.":this.terrain.heightAt(e.pos.x,e.pos.z)<this.terrain.waterLevel+.4?"Im Wasser? Do wird's a Schlammbad.":null;if(o)return this.hud.toast(o),Promise.resolve()}switch(e.ammo[i]>0&&e.ammo[i]--,this.charging=!1,this.power=0,this.attacked=!0,this.canSwitch=!1,this.phase="resolve",this.resolveT=0,this.settleT=0,this.shot={weapon:i,enemyDmg:0,kills:0,selfDmg:0,offensive:!["heal","jump","place","build","dig"].includes(n.type),blunder:!!t.blunder},this.marker.visible=!1,this.rangeRing.visible=!1,this.overview=!1,this.hud.phase(this),this.hud.closeWeaponMenu(),e.weapon=i,this.addLog(`  fire ${i} pow=${(s||0).toFixed(2)}`),["heal","jump","place","build","dig"].includes(n.type)||this.say(e,"fire",.4),n.type){case"hitscan":this.fireHitscan(e,n,i);break;case"ballistic":this.fireBallistic(e,n,i,s);break;case"melee":this.fireMelee(e,n);break;case"cone":this.fireCone(e,n);break;case"place":this.firePlace(e,n,i);break;case"heal":this.fireHeal(e,n);break;case"strike":this.fireStrike(e,n,i,a);break;case"jump":this.fireJump(e,n,a);break;case"drive":this.fireDrive(e,n);break;case"build":this.fireBuild(e,n);break;case"dig":this.fireDig(e,n);break;default:break}return new Promise(o=>{this._resolveWaiter=o})}fireHitscan(t,e,i){this.busy++;let n=e.shots||1,s=t.yaw,a=t.aimPitch;for(let o=0;o<n;o++)this.after(.12+o*(e.interval||0),()=>{this.hitscanShot(t,e,i,s,a),o===n-1&&this.after(.35,()=>{this.busy--})})}hitscanShot(t,e,i,n,s){if(!t.alive)return;let a=t.muzzle(new te,n,s),o=t.aimDir(new te,n,s);this.fx.muzzle(a,o),this.sfx("shot",i),t.squash=Math.max(t.squash,.12);let l=e.pellets||1;for(let c=0;c<l;c++){let h=(e.spread||0)*ve,u=t.aimDir(new te,n+zf()*h*.6,s+zf()*h*.6),d=this.traceRay(a,u,e.range,t);if(this.fx.tracer(a,d.point),d.unit){let f=e.dmg;d.dist>e.range*.6&&(f*=.75),d.head&&(f*=1.6,e.zoom&&!this.demo&&this.hud.announce(Zi(cs.headshot),"",1.4)),this.fx.milk(d.point),f>25&&(d.unit.impulse(u.clone().multiplyScalar(3.5)),d.unit.lastHitBy=t,d.unit.lastHitTime=this.time),this.damageUnit(d.unit,f,t,null,"shot")}else this.fx.impactDust(d.point,d.prop?void 0:this.terrain.colors.dirt),d.prop&&d.prop.shed&&this.forts.damage(d.prop.shed,e.dmg*.8,t)}}traceRay(t,e,i,n){let s=i,a={dist:i,point:t.clone().addScaledVector(e,i)};for(let l of this.units)if(!(!l.alive||l===n)&&!(l.scripted&&l.scripted.tunnel&&l.tunnelDepth>1.5))for(let c=0;c<2;c++){if(c===0&&l.dug)continue;let h=(c?1.85:.95)-l.digDepth,u=c?.34:.56,d=t.x-l.pos.x,f=t.y-(l.pos.y+h),p=t.z-l.pos.z,y=d*e.x+f*e.y+p*e.z,m=d*d+f*f+p*p-u*u,g=y*y-m;if(g<0)continue;let v=-y-Math.sqrt(g);v>0&&v<s&&(s=v,a={dist:v,unit:l,head:c===1,point:t.clone().addScaledVector(e,v)})}for(let l of this.world.obstacles){if(!l.solid)continue;let c=t.x-l.x,h=t.z-l.z,u=e.x*e.x+e.z*e.z;if(u<1e-6)continue;let d=(l.r+l.pr)*.5,f=2*(c*e.x+h*e.z),p=c*c+h*h-d*d,y=f*f-4*u*p;if(y<0)continue;let m=(-f-Math.sqrt(y))/(2*u);if(m>0&&m<s){let g=t.y+e.y*m;g>l.y0&&g<(l.rayTop!==void 0?l.rayTop:l.top)&&(s=m,a={dist:m,prop:l,point:t.clone().addScaledVector(e,m)})}}let o=this.terrain.raycast(t,e,s,.3);if(o&&o.t<s&&(a={dist:o.t,terrain:!0,point:o.point}),a.unit&&!a.head){let l=this.forts.shedFor(a.unit);l&&!(n&&this.forts.shedFor(n)===l)&&(a={dist:a.dist,prop:l.ob,point:a.point})}return a}fireBallistic(t,e,i,n){let s=Et(n,.06,1),a=t.aimDir(),o=t.muzzle(),l=a.clone().multiplyScalar(e.speed*s);t.team.human&&(this.lastPower[i]=s),e.throw?(t.throwAnim=1,this.sfx("throwSnd"),t.model.ball.visible=!1):i==="panzerfaust"?(this.sfx("whoosh"),this.fx.muzzle(o,a)):(this.sfx("thump"),this.fx.muzzle(o,a)),this.projectiles.push(new ls(this,e,i,o,l,t,{scale:i==="heiligekuh"?1.5:1}))}fireMelee(t,e){this.busy++,t.lunge=1;let i=t.forward();this.after(.18,()=>{let n=!1;for(let s of this.units){if(!s.alive||s===t)continue;let a=s.pos.x-t.pos.x,o=s.pos.z-t.pos.z,l=Math.hypot(a,o);if(l>e.range||Math.abs(s.pos.y-t.pos.y)>1.6||(a*i.x+o*i.z)/(l||1)<Math.cos(60*ve))continue;n=!0;let h=t.isStier?e.dmgStier:e.dmg,u=e.knock*(t.isStier?1.3:1);s.impulse(new te(i.x*u,4.5,i.z*u)),s.lastHitBy=t,s.lastHitTime=this.time,this.damageUnit(s,h,t,null,"melee"),this.fx.stars(s.getHead())}this.sfx(n?"hit":"throwSnd"),n&&this.vocal(t,"attack"),this.after(.45,()=>{this.busy--})})}fireCone(t,e){this.busy++,this.sfx("flame");let i=t.muzzle(),n=t.aimDir(),s=0,a=()=>{this.fx.flame(i,n,e.range),s+=.05,s<.9&&this.after(.05,a)};a(),this.after(.35,()=>{for(let l of this.units){if(!l.alive||l===t)continue;let c=l.getCenter().clone(),h=c.clone().sub(i),u=h.length();u>e.range+.6||h.angleTo(n)>e.angle*ve||this.terrain.lineOfSight(i,c,0)&&(l.burnT=2.2,l.impulse(n.clone().multiplyScalar(2.5).setY(2.5)),l.lastHitBy=t,l.lastHitTime=this.time,this.damageUnit(l,e.dmg*(1-.4*u/e.range),t,null,"fire"))}for(let l=2;l<=e.range;l+=2){let c=i.clone().addScaledVector(n,l);this.world.destroyInRadius(c.x,c.y,c.z,1.3,this.fx)}let o=i.clone().addScaledVector(n,e.range*.6);this.terrain.scorchAt(o.x,o.z,e.range*.5,.6)}),this.after(1.15,()=>{this.busy--})}firePlace(t,e,i){let n=t.forward(),s=new te(t.pos.x+n.x*1.1,0,t.pos.z+n.z*1.1);if(s.y=this.terrain.heightAt(s.x,s.z),t.lunge=.5,this.sfx("click"),s.y<this.terrain.waterLevel){this.fx.splash(new te(s.x,this.terrain.waterLevel,s.z),.5),this.sfx("splash");return}if(i==="mine")this.addMine(s,t,!1),this.hud.toast("Kuhfladen-Mine liegt. Scharf ab der n\xE4chsten Runde.");else{let a=new qt(gi("tnt"),we().item);a.position.copy(s),a.rotation.y=t.yaw,a.castShadow=!0,this.scene.add(a),this.tnts.push({pos:s,mesh:a,t:e.fuse,owner:t,W:e}),this.team.human&&(this.phase="retreat",t.stamina=Math.max(t.stamina,40),this.hud.phase(this),this.hud.toast("Lauf, Forrest, lauf!"))}}heal(t,e){let i=t.hp;t.hp=Math.min(t.hpMax,t.hp+e);let n=Math.round(t.hp-i);this.fx.heal(t.pos),n>0&&this.hud.floatText(t.getHead().clone(),`+${n}`,"#5dff6a"),this.hud.updateTeams(this)}fireHeal(t,e){if(e.area){this.fx.healRing(t.pos,e.area);for(let i of this.units)i.alive&&i.team===t.team&&i.pos.distanceTo(t.pos)<=e.area&&this.heal(i,e.amount)}else this.heal(t,e.amount);this.sfx("heal"),this.say(t,"heal",.9)}fireStrike(t,e,i,n){if(this.busy++,i==="haubitze"){this.demo||this.hud.announce("Haubitzenfeuer!","Kopf einziehen!",1.3);for(let f=0;f<e.shells;f++)this.after(.9+f*.45,()=>{let p=n.x+this.rng.range(-e.scatter,e.scatter),y=n.z+this.rng.range(-e.scatter,e.scatter),m={impact:!0,radius:e.radius,dmg:e.dmg,wind:.1,mesh:"shell"};this.projectiles.push(new ls(this,m,"shell",new te(p-6,n.y+55,y),new te(4,-40,0),t,{mesh:"shell",align:!0})),this.sfx("whoosh"),f===e.shells-1&&this.after(.3,()=>{this.busy--})});return}let s=this.rng.chance(e.dudChance),a=this.cam.yaw+Math.PI,o=new te(Math.sin(a),0,Math.cos(a)),l=n.y+26,c=n.clone().addScaledVector(o,-130);c.y=l;let h=new qt(gi("plane"),we().item);h.castShadow=!0,h.position.copy(c),h.lookAt(c.clone().add(o)),this.scene.add(h);let u=62,d=[];if(!s){let y=l-n.y,g=9*((-5+Math.sqrt(25+2*Qe*y))/Qe);for(let v=0;v<e.bombs;v++){let w=(v-(e.bombs-1)/2)*e.spacing;d.push({at:130+w-g,done:!1})}}this.planes.push({mesh:h,start:c,fwd:o,speed:u,t:0,dur:260/u,bombs:d,W:e,owner:t,dud:s}),this.sfx("plane"),this.busy--}fireBuild(t){this.busy++,this.forts.build(t),t.lunge=.6,this.say(t,"build",.9);for(let e=0;e<4;e++)this.after(.08+e*.22,()=>this.sfx("hammer",e));this.after(1.1,()=>{this.busy--}),!this.demo&&t.team.human&&this.hud.toast("Verschlag steht! Kugeln und Splitter treffen jetzt zuerst die Bretter.",2.6)}fireDig(t){this.busy++,this.forts.dig(t),this.sfx("dig"),this.say(t,"dig",.9),this.after(.35,()=>this.sfx("dig")),this.after(.9,()=>{this.busy--}),!this.demo&&t.team.human&&this.hud.toast("Eingegraben! Wer weggeht, steigt wieder aus.",2.4)}fireJump(t,e,i){if(e.tunnel){let a=Pt(i.x,i.z,t.pos.x,t.pos.z);t.yaw=Math.atan2(i.x-t.pos.x,i.z-t.pos.z),t.startTunnel(new te(i.x,this.terrain.heightAt(i.x,i.z),i.z),1.3+a/8),this.sfx("dig"),this.say(t,"tunnel",.9);return}let n=Pt(i.x,i.z,t.pos.x,t.pos.z),s=Et(1.4+n/20,1.4,3.2);t.yaw=Math.atan2(i.x-t.pos.x,i.z-t.pos.z),t.startFlight(new te(i.x,this.terrain.heightAt(i.x,i.z),i.z),s),this.sfx("jump")}forkHit(t,e){let i=t.W;if(e.type==="unit"){let n=e.unit,s=t.vel.clone().setY(0).normalize();n.impulse(s.multiplyScalar(4).setY(3)),n.lastHitBy=t.owner,n.lastHitTime=this.time,this.damageUnit(n,i.dmg,t.owner,null,"fork"),this.fx.stars(n.getHead()),this.sfx("hit"),this.vocal(n,"hurt")}else{let n=new qt(gi("gabel"),we().item);n.position.copy(t.pos),n.quaternion.copy(t.mesh.quaternion),n.castShadow=!0,this.scene.add(n),this.stuck.push({mesh:n,t:10}),this.fx.impactDust(t.pos,this.terrain.colors.dirt),this.sfx("thump")}this.lastEvent={pos:t.pos.clone(),t:this.time}}updateSwarms(t){for(let e of this.swarms){let i=e.W.swarm;if(e.t+=t,e.hitT>=0)e.hitT+=t,e.pos.y+=t*1.5,e.hitT>1.1&&(e.done=!0);else{if(!e.target||!e.target.alive){let s=null,a=i.range*1.3;for(let o of this.units){if(!o.alive||e.owner&&o.team===e.owner.team)continue;let l=o.getCenter().distanceTo(e.pos);l<a&&(a=l,s=o)}e.target=s}if(e.target){let s=e.target.getCenter(),a=s.clone().sub(e.pos),o=a.length();a.multiplyScalar(i.speed/Math.max(o,.001)),e.vel.lerp(a,1-Math.exp(-t*3)),e.pos.addScaledVector(e.vel,t);let l=this.terrain.heightAt(e.pos.x,e.pos.z)+.6;if(e.pos.y<l&&(e.pos.y=l),o<.9){let c=e.target;this.damageUnit(c,i.dmg,e.owner,null,"sting"),c.squash=1,c.alive&&this.say(c,"stung",.9),this.sfx("sting"),e.hitT=0,this.lastEvent={pos:s.clone(),t:this.time}}}else e.pos.y+=t*.6,e.t>2.5&&(e.done=!0);e.t>i.life&&(e.done=!0)}let n=e.hitT>=0?3:10;for(let s=0;s<n;s++){let a=Math.random()<.5?gv:xv;this.fx.norm.spawn(e.pos.x+(Math.random()-.5)*1.2,e.pos.y+(Math.random()-.5)*.9,e.pos.z+(Math.random()-.5)*1.2,(Math.random()-.5)*4,(Math.random()-.5)*3,(Math.random()-.5)*4,.3,.2,.15,a,a,1,0,2)}this.sfx("buzz")}this.swarms.some(e=>e.done)&&(this.swarms=this.swarms.filter(e=>!e.done))}driveStep(t,e){let i=this.terrain,n=Uh;t.t+=n;let s=Math.sin(t.yaw),a=Math.cos(t.yaw),o=e.speed*n,l=t.x+s*o,c=t.z+a*o,h=i.heightAt(l,c);if(t.vy===0&&(h-t.y)/o>1.3)return"wall";if(t.x=l,t.z=c,h<t.y-.3||t.vy!==0?(t.vy-=Qe*n,t.y+=t.vy*n,t.y<=h&&(t.y=h,t.vy=0)):t.y=h,t.y<i.waterLevel-.35)return"water";for(let u of this.units)if(!(!u.alive||u===t.owner&&t.t<.9)&&Pt(u.pos.x,u.pos.z,t.x,t.z)<1.25&&Math.abs(u.pos.y-t.y)<1.8)return"unit";for(let u of this.world.obstaclesNear(t.x,t.z))if(u.solid&&!(u.shed&&t.owner&&Pt(u.x,u.z,t.owner.pos.x,t.owner.pos.z)<u.pr)&&Pt(u.x,u.z,t.x,t.z)<u.r+.85&&t.y<u.top&&t.y+1.2>u.y0)return"prop";return t.t>=e.time?"time":null}simulateDrive(t,e,i,n=null){let s=Kt.traktor,a={x:t.x+Math.sin(e)*1.4,y:0,z:t.z+Math.cos(e)*1.4,yaw:e,t:0,vy:0,owner:i};a.y=this.terrain.heightAt(a.x,a.z);for(let o=0;o<400;o++){let l=this.driveStep(a,s);if(n&&o%4===0&&n.push(a.x,a.y+.35,a.z),l)return{x:a.x,y:a.y,z:a.z,type:l}}return{x:a.x,y:a.y,z:a.z,type:"time"}}fireDrive(t,e){let i={x:t.pos.x+Math.sin(t.yaw)*1.4,y:0,z:t.pos.z+Math.cos(t.yaw)*1.4,yaw:t.yaw,t:0,vy:0,owner:t};i.y=this.terrain.heightAt(i.x,i.z);let n=new qt(gi("traktor"),we().item);n.castShadow=!0,this.scene.add(n),this.tractors.push({s:i,W:e,mesh:n,acc:0,pos:new te(i.x,i.y+1,i.z),vel:new te,smokeT:0}),t.lunge=.5,this.say(t,"traktor",.8),this.sfx("engine")}updateTractors(t){for(let e of this.tractors){let i=e.s;e.acc+=t;let n=null;for(;e.acc>=Uh&&!n;)e.acc-=Uh,n=this.driveStep(i,e.W);let s=this.terrain,a=Math.sin(i.yaw),o=Math.cos(i.yaw),l=s.heightAt(i.x+a,i.z+o),c=s.heightAt(i.x-a,i.z-o);if(e.mesh.position.set(i.x,i.y,i.z),e.mesh.rotation.set(-Math.atan2(l-c,2)+Math.sin(this.time*30)*.015,i.yaw,Math.sin(this.time*23)*.02,"YXZ"),e.pos.set(i.x,i.y+1,i.z),e.vel.set(a*e.W.speed,0,o*e.W.speed),e.smokeT-=t,e.smokeT<=0){e.smokeT=.07;let h=new te(.27,1.85,.75).applyEuler(e.mesh.rotation).add(e.mesh.position);this.fx.norm.spawn(h.x,h.y,h.z,(Math.random()-.5)*.4,1.2,(Math.random()-.5)*.4,1,.15,.7,yv,vv,.7,-.3,1),this.fx.impactDust(new te(i.x-a*.6,i.y,i.z-o*.6),this.terrain.colors.dirt)}this.sfx("engine"),n&&(e.done=!0,this.scene.remove(e.mesh),e.mesh.geometry.dispose(),n==="water"?(this.fx.splash(new te(i.x,s.waterLevel,i.z),2),this.sfx("splash"),this.demo||this.hud.toast("Da Traktor geht baden. Blubb."),this.lastEvent={pos:new te(i.x,s.waterLevel,i.z),t:this.time}):(this.explode(new te(i.x,i.y+.8,i.z),e.W.radius,e.W.dmg,i.owner),this.fx.spawnDebris(i.x,i.y+.5,i.z,new ut("#2e7d32"),10,9)))}this.tractors.some(e=>e.done)&&(this.tractors=this.tractors.filter(e=>!e.done))}onProjectileHit(t,e){let i=t.W,n=t.pos.clone();if(!(e.type==="gone"||e.type==="timeout")){if(e.type==="water"){this.fx.splash(new te(n.x,this.terrain.waterLevel,n.z),i.radius>5?2:1),this.sfx("splash"),this.lastEvent={pos:new te(n.x,this.terrain.waterLevel,n.z),t:this.time};return}if(i.pierce){this.forkHit(t,e);return}if(i.swarm){this.fx.impactDust(n,new ut("#c9b892")),this.fx.spawnDebris(n.x,n.y,n.z,new ut("#c9b892"),6,3),e.type==="unit"&&this.damageUnit(e.unit,i.dmg,t.owner,null,"shot"),this.swarms.push({pos:n.clone().setY(n.y+.8),vel:new te(0,1,0),t:0,W:i,owner:t.owner,target:null,hitT:-1}),this.sfx("buzz"),this.lastEvent={pos:n.clone(),t:this.time};return}if(i.gas){this.explode(n,i.radius,i.dmg,t.owner,{craterMul:.25,knock:3});let s={pos:new te(n.x,this.terrain.heightAt(n.x,n.z)+.7,n.z),radius:i.gas.radius,dmg:i.gas.dmg,turns:i.gas.turns,owner:t.owner,emit:0};this.gases.push(s),this.fx.gasBurst(s.pos,s.radius);for(let a of this.units)a.alive&&a.getCenter().distanceTo(s.pos)<s.radius&&this.damageUnit(a,i.gas.dmg,t.owner,null,"gas");return}if(this.explode(n,i.radius,i.dmg,t.owner),i.cluster){let s=i.cluster;for(let a=0;a<s.n;a++){let o=a/s.n*Math.PI*2+Math.random(),l=3+Math.random()*2.5,c={fuse:1+a*.18,bounce:.3,radius:s.radius,dmg:s.dmg,wind:.2,mesh:"granate"};this.projectiles.push(new ls(this,c,"cluster",new te(n.x,n.y+.6,n.z),new te(Math.cos(o)*l,6+Math.random()*3,Math.sin(o)*l),null,{scale:.6}))}}}}explode(t,e,i,n,s={}){let a=this.terrain,o=a.heightAt(t.x,t.z);this.fx.explosion(t,e,a.colors.dirt),this.world.flash.position.set(t.x,t.y+1.5,t.z),this.world.flash.intensity=30+e*12;let l=this.cam.cam.position.distanceTo(t);this.cam.shake(Et(e*.22*(1-l/90),0,1.2)),this.sfx("explosion",e/5,Et(1-l/160,.15,1)),!s.noCrater&&t.y-o<e*.6&&(a.deform(t.x,t.z,e*.72,e*.3*(s.craterMul||1)),this.world.settleProps(t.x,t.z,e)),this.world.destroyInRadius(t.x,t.y,t.z,e*.75,this.fx),this.life.onExplosion(t,e);let c=new Set(this.units.filter(h=>h.alive&&this.forts.shedFor(h)));this.forts.onExplosion(t,e,i,n);for(let h of this.units){if(!h.alive||h.scripted&&h.scripted.tunnel&&h.scripted.phase==="travel")continue;let u=h.getCenter(),d=u.distanceTo(t);if(d<e){let f=1-d/e,p=i*Math.pow(f,.65)*(c.has(h)?.4:1),y=u.clone().sub(t);y.y=Math.max(y.y,0)+.9,y.normalize();let m=(s.knock!==void 0?s.knock:i*.2)*(.35+.65*f)*(c.has(h)?.3:1);h.impulse(y.multiplyScalar(m)),h.lastHitBy=n,h.lastHitTime=this.time,this.damageUnit(h,p,n,null,"explosion",!0)}}for(let h of this.mines)!h.dead&&h.trig<0&&h.pos.distanceTo(t)<e&&(h.trig=.15+Math.random()*.25);for(let h of this.crates)!h.dead&&h.landed&&h.pos.distanceTo(t)<e&&this.destroyCrate(h);this.lastEvent={pos:t.clone(),t:this.time}}damageUnit(t,e,i,n,s,a=!1){if(!t.alive||((s==="explosion"||s==="fire")&&(t.dug&&(e*=s==="fire"?.6:.5),s==="fire"&&!a&&this.forts.shedFor(t)&&(e*=.5)),e=Math.round(e),e<=0))return;t.hp-=e,t.stats.dmgTaken+=e,t.squash=1,this.hud.floatText(t.getHead().clone(),`-${e}`,s==="gas"?"#c6e05a":"#ff5a4a"),s!=="gas"&&s!=="fall"&&this.fx.milk(t.getCenter()),this.sfx("hit");let o=this.shot;i&&i.team!==t.team?(i.stats.dmg+=e,o&&i===this.unit&&(o.enemyDmg+=e)):i&&i===t&&o&&(o.selfDmg+=e),i&&(t.lastHitBy=i),t.hp<=0?this.kill(t,i,s):t.hp>0&&(i===t?this.say(t,"selfHit",.8):i&&i.team===t.team?this.say(t,"friendly",.8):this.say(t,"hit",.45)),this.hud.updateTeams(this)}kill(t,e,i){t.alive&&(t.hp=0,t.alive=!1,t.aiming=!1,t.moving=!1,t.deathKind=i,t.deathT=0,t.dug=!1,t.digDepth=0,t.scripted&&t.scripted.tunnel&&(t.scripted=null,t.tunnelDepth=0,t.model.root.visible=!0),t.model.weapon.visible=!1,t.model.chute.visible=!1,t.scripted=null,e&&e.team!==t.team?(e.stats.kills++,this.shot&&e===this.unit&&this.shot.kills++,e.alive&&this.after(.9,()=>this.say(e,"kill",.7))):e===t&&!this.demo&&this.hud.announce(Zi(cs.selfKill),t.name,1.4),this.say(t,i==="drown"?"drown":"death"),this.vocal(t,i==="drown"?"drown":"death"),this.hud.updateTeams(this),this.hud.unitDied(t),t===this.unit&&["move","aim","target","retreat"].includes(this.phase)&&(this.phase="resolve",this.resolveT=0,this.shot=this.shot||{weapon:null,enemyDmg:0,kills:0,selfDmg:0,offensive:!1},this.hud.phase(this)))}onDrown(t){if(!t.alive)return;this.fx.splash(new te(t.pos.x,this.terrain.waterLevel,t.pos.z),1.4),this.sfx("splash");let e=t.lastHitBy&&this.time-t.lastHitTime<12?t.lastHitBy:null;this.demo||this.hud.announce(Zi(cs.drown),t.name,1.3),this.kill(t,e,"drown"),t.vel.set(0,0,0)}spawnCrate(){let t=null;for(let l=0;l<10&&!t;l++){let c=this.world.findSpot(this.rng,{maxSlope:.5,minDist:1,minH:1,area:.75});c&&!this.units.some(h=>h.alive&&Pt(h.pos.x,h.pos.z,c.x,c.z)<3)&&(t=c)}if(!t)return;let e=this.rng.next(),i=e<.42?"jause":e<.9?"waffen":"falle",n=new Pe,s=new qt(gi(i==="jause"?"crateHealth":"crate"),we().item);s.castShadow=!0;let a=new qt(gi("chute"),we().item);n.add(s,a);let o=new te(t.x,t.y+24,t.z);n.position.copy(o),this.scene.add(n),this.crates.push({pos:o,group:n,chute:a,type:i,landed:!1,dead:!1,sway:Math.random()*6}),!this.demo&&this.team&&this.team.human&&this.hud.toast("A Packerl f\xE4llt vom Himmel!")}destroyCrate(t){t.dead||(t.dead=!0,this.scene.remove(t.group),this.fx.spawnDebris(t.pos.x,t.pos.y,t.pos.z,new ut("#7a5a3a"),6,4),t.type==="falle"&&this.after(.05,()=>this.explode(t.pos.clone().setY(t.pos.y+.3),3.6,35,null)))}pickupCrate(t,e){if(e.dead=!0,this.scene.remove(e.group),e.type==="falle"){this.demo||this.hud.announce("\xDCberraschung!","Da Bauer hat a Falle gstellt.",1.4),this.explode(e.pos.clone().setY(e.pos.y+.3),3.6,35,null);return}if(this.sfx("pickup"),e.type==="jause"){this.heal(t,30),this.say(t,"jauseCrate",.9);return}let i=this.rng.pick(Th)[0];i==="heiligekuh"&&this.rng.next()<.6&&(i="granate");let n=Th.find(s=>s[0]===i)[1];t.ammo[i]!==-1&&(t.ammo[i]=Math.max(0,t.ammo[i]||0)+n),this.hud.floatText(t.getHead().clone(),`+${n} ${Kt[i].name}`,"#ffd54f"),this.say(t,"crate",.8)}update(t){if(this.disposed)return;if(this.paused){this.cam.update(t);return}if(this.frameWaiters.length){let n=this.frameWaiters;this.frameWaiters=[],n.forEach(s=>s(t))}this.time+=t;let e=this.timers;this.timers=[];let i=[];for(let n of e)n.t-=t,n.t<=0?i.push(n):this.timers.push(n);if(i.forEach(n=>n.fn()),this.env.waterLevel=this.terrain.waterLevel,this.envCalm.waterLevel=this.terrain.waterLevel,this.world.update(t),this.life.update(t),this.forts.update(t),this.waterAnim){let n=this.waterAnim;n.t+=t/1.6;let s=Math.min(1,n.t);this.world.setWaterLevel(n.from+(n.to-n.from)*s),s>=1&&(this.waterAnim=null,this.terrain.refreshColors())}this.updateControl(t);for(let n of this.units)n.update(t);for(let n of this.projectiles)n.update(t,this.env);this.projectiles.some(n=>n.dead)&&(this.projectiles=this.projectiles.filter(n=>(n.dead&&n.remove(),!n.dead))),this.updateItems(t),this.fx.update(t),this.updatePhase(t),this.updateCamera(t);{let n=this.cam,s=n.mode==="aim"&&n.opts&&n.opts.sniper,a=(n.mode==="aim"||n.mode==="tactical")&&this.unit?this._occF||(this._occF=new te):n.target;a!==n.target&&a.set(this.unit.pos.x,this.unit.pos.y+1.2,this.unit.pos.z),this.world.updateOcclusion(n.cam.position,a,t,!s&&n.mode!=="overview")}this.updateTactical(t),this.updateMarkers(t),this.app.input.locked&&!this.wantsLock()&&this.app.input.exitLock(),this.hud.frame(this,t)}updateControl(t){let e=this.unit;if(!e||!e.alive||!this.team||!this.team.human||(e.moving=!1,!["move","aim","target","retreat"].includes(this.phase)))return;let i=this.app.input.axis();if((this.phase==="move"||this.phase==="retreat")&&!this.overview)i.x&&(e.yaw-=i.x*2.6*t),i.y&&this.walk(e,i.y,t);else if(this.phase==="aim"&&!this.tac){let n=Kt[this.weapon],s=(i.fine?.25:1)*(this.cam.fov/55);i.x&&(e.yaw-=i.x*Math.abs(i.x)*1.1*t*s),i.y&&(e.aimPitch=Et(e.aimPitch+i.y*Math.abs(i.y)*.7*t*s,this.pitchMin(n),this.pitchMax(n))),this.charging&&(this.power=Math.min(1,this.power+t/2.2))}this.phase!=="retreat"&&(this.turnTimer-=t,this.turnTimer<=this.timerWarn&&this.turnTimer>0&&(this.timerWarn--,this.sfx("beep")),this.turnTimer<=0&&(this.turnTimer=0,this.charging?this.fire():(this.say(e,"timeout"),this.endTurn())))}blocked(t,e){this.time-this.saidBlock>3.5&&(this.saidBlock=this.time,this.say(t,e,.9))}walk(t,e,i){if(!t.onGround||t.scripted)return!1;if(t.stamina<=0)return this.tiredSaid||(this.tiredSaid=!0,this.say(t,"tired")),!1;t.dug&&(this.forts.undig(t),this.sfx("dig"));let n=cf*(e<0?.55:1)*Math.abs(e),s=e<0?-1:1,a=Math.sin(t.yaw)*n*i*s,o=Math.cos(t.yaw)*n*i*s,l=t.pos.x+a,c=t.pos.z+o,h=this.terrain.heightAt(l,c),u=Math.hypot(a,o);if(h<this.terrain.waterLevel+.1)return this.blocked(t,"shore"),!1;if((h-t.pos.y)/Math.max(u,1e-4)>1.3)return this.blocked(t,"steep"),!1;let d=t.pos.x,f=t.pos.z;t.pos.x=l,t.pos.z=c,this.world.collideCircle(t.pos,.45);for(let y of this.units){if(y===t||!y.alive)continue;let m=t.pos.x-y.pos.x,g=t.pos.z-y.pos.z,v=Math.hypot(m,g);v<.9&&v>1e-4&&Math.abs(t.pos.y-y.pos.y)<1.5&&(t.pos.x=y.pos.x+m/v*.9,t.pos.z=y.pos.z+g/v*.9)}if(this.terrain.heightAt(t.pos.x,t.pos.z)<this.terrain.waterLevel+.1)return t.pos.x=d,t.pos.z=f,!1;let p=Math.hypot(t.pos.x-d,t.pos.z-f);return t.stamina=Math.max(0,t.stamina-p*Sl),this.moved+=p,this.moved>.4&&(this.canSwitch=!1),t.moving=p>5e-4,t.moving}updateItems(t){let e=this.terrain.waterLevel;for(let i of this.mines)if(!i.dead){if(i.pos.y=this.terrain.heightAt(i.pos.x,i.pos.z),i.mesh.position.copy(i.pos),i.pos.y<e-.1){i.dead=!0,this.scene.remove(i.mesh);continue}if(i.trig<0&&i.armed){for(let n of this.units)if(n.alive&&Pt(n.pos.x,n.pos.z,i.pos.x,i.pos.z)<1.1&&Math.abs(n.pos.y-i.pos.y)<1.3){i.trig=1,this.hud.floatText(i.pos.clone().setY(i.pos.y+.6),"Pieps!","#ffffff");break}}i.trig>0&&(i.trig-=t,i.mesh.visible=Math.floor(i.trig*10)%2===0,Math.floor(i.trig*10)%3===0&&this.sfx("beep"),i.trig<=0&&(i.dead=!0,this.scene.remove(i.mesh),this.explode(i.pos.clone().setY(i.pos.y+.25),i.W.radius,i.W.dmg,i.owner)))}this.mines.some(i=>i.dead)&&(this.mines=this.mines.filter(i=>!i.dead));for(let i of this.tnts)i.t-=t,i.pos.y=this.terrain.heightAt(i.pos.x,i.pos.z),i.mesh.position.copy(i.pos),Math.random()<.6&&this.fx.sparkle(new te(i.pos.x,i.pos.y+.45,i.pos.z)),i.t<=0&&(i.dead=!0,this.scene.remove(i.mesh),this.explode(i.pos.clone().setY(i.pos.y+.3),i.W.radius,i.W.dmg,i.owner));this.tnts.some(i=>i.dead)&&(this.tnts=this.tnts.filter(i=>!i.dead));for(let i of this.crates){if(i.dead)continue;let n=this.terrain.heightAt(i.pos.x,i.pos.z);if(!i.landed)i.pos.y-=3.6*t,i.sway+=t,i.group.rotation.z=Math.sin(i.sway*1.5)*.12,i.pos.y<=n&&(i.pos.y=n,i.landed=!0,i.chute.visible=!1,i.group.rotation.z=0,this.fx.impactDust(i.pos));else{if(i.pos.y=n,n<e-.2){i.dead=!0,this.scene.remove(i.group);continue}for(let s of this.units)if(s.alive&&Pt(s.pos.x,s.pos.z,i.pos.x,i.pos.z)<1.25&&Math.abs(s.pos.y-i.pos.y)<1.6){this.pickupCrate(s,i);break}}i.group.position.copy(i.pos)}this.crates.some(i=>i.dead)&&(this.crates=this.crates.filter(i=>!i.dead));for(let i of this.gases)i.emit-=t,i.emit<=0&&(i.emit=this.app.quality==="low"?.12:.05,this.fx.gas(i.pos,i.radius));for(let i of this.planes){i.t+=t;let n=i.t*i.speed;i.mesh.position.copy(i.start).addScaledVector(i.fwd,n);for(let s of i.bombs)if(!s.done&&n>=s.at){s.done=!0;let a={impact:!0,radius:i.W.radius,dmg:i.W.dmg,wind:.1,mesh:"bomb"},o=i.fwd.clone().multiplyScalar(9);o.y=-5,this.projectiles.push(new ls(this,a,"bomb",i.mesh.position.clone().setY(i.mesh.position.y-1),o,i.owner,{mesh:"bomb",align:!0}))}i.dud&&!i.dudSaid&&n>130&&(i.dudSaid=!0,this.demo||this.hud.announce("Nix is!",Bl("dud"),2)),i.t>=i.dur&&(i.done=!0,this.scene.remove(i.mesh))}this.planes.some(i=>i.done)&&(this.planes=this.planes.filter(i=>!i.done)),this.updateSwarms(t),this.updateTractors(t);for(let i of this.stuck)i.t-=t,i.t<=0&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.done=!0);this.stuck.some(i=>i.done)&&(this.stuck=this.stuck.filter(i=>!i.done))}isSettled(){if(this.projectiles.length||this.tnts.length||this.planes.length||this.swarms.length||this.tractors.length||this.busy>0||this.waterAnim||this.mines.some(t=>t.trig>0))return!1;for(let t of this.units)if(t.alive){if(!t.onGround||t.scripted||t.slide.lengthSq()>.05)return!1}else if(t.deathKind==="drown"){if(t.deathT<1.2)return!1}else if(t.deathT<1.75)return!1;return!0}updatePhase(t){if(this.phase==="resolve"||this.phase==="retreat")this.resolveT+=t,this.isSettled()?(this.settleT+=t,this.settleT>.6&&this.afterResolve()):this.settleT=0,this.resolveT>18&&(this.forceSettle(),this.afterResolve());else if(this.settleCb){this.settleWait=(this.settleWait||0)+t;let e=this.isSettled();if(e?this.settleT2+=t:this.settleT2=0,this.settleT2>.5||this.settleWait>12){e||this.forceSettle();let i=this.settleCb;this.settleCb=null,this.settleWait=0,i()}}}forceSettle(){this.addLog("  Sicherheitsnetz: aufger\xE4umt");for(let t of this.projectiles)t.remove();this.projectiles=[];for(let t of this.tnts)this.scene.remove(t.mesh);this.tnts=[];for(let t of this.tractors)this.scene.remove(t.mesh);this.tractors=[],this.swarms=[];for(let t of this.planes)this.scene.remove(t.mesh);this.planes=[];for(let t of this.mines)t.trig>0&&(t.trig=-1,t.mesh.visible=!0);this.busy=0,this.waterAnim&&(this.world.setWaterLevel(this.waterAnim.to),this.waterAnim=null,this.terrain.refreshColors());for(let t of this.units)t.alive?(t.scripted=null,t.slide.set(0,0,0),t.vel.set(0,0,0),t.onGround=!0,t.pos.y=this.terrain.heightAt(t.pos.x,t.pos.z),t.model.chute.visible=!1):t.deathT=Math.max(t.deathT,3)}afterResolve(){if(this.phase!=="resolve"&&this.phase!=="retreat")return;let t=this.unit,e=this.shot||{},i=Kt[e.weapon];if(t&&(t.aiming=!1),this.addLog(`  done dmg=${e.enemyDmg||0} kills=${e.kills||0} self=${e.selfDmg||0}`),this.demo||(e.kills>=3?this.hud.announce(Zi(cs.multiKill),`${e.kills} auf an Streich!`,1.8):e.kills===2?this.hud.announce(Zi(cs.doubleKill),"",1.6):e.enemyDmg>=70&&this.hud.announce(Zi(cs.bigDamage),`${e.enemyDmg} Schaden`,1.3)),e.offensive&&e.enemyDmg===0&&t&&t.alive&&!e.selfDmg&&this.say(t,e.blunder?"blunder":"miss",e.blunder?.95:.55),!this.checkVictory()){if(this.team&&!this.team.human){this.phase="ai";let n=this._resolveWaiter;this._resolveWaiter=null,n&&n();return}if(i&&i.endsTurn===!1&&t&&t.alive){this.phase="move",t.setHeld(this.weapon=t.defaultWeapon()),this.hud.phase(this);return}this.endTurn()}}wantCam(t,e,i){let n=this.cam;(n.mode!==t||n.obj!==e||JSON.stringify(n.opts||{})!==JSON.stringify(i||{}))&&n.setMode(t,e,i)}updateCamera(t){let e=this.cam,i=this.unit,n=this.phase,s=this.weapon?Kt[this.weapon]:null,a=!!(i&&i.alive&&i.aiming&&n==="aim"&&s&&s.zoom&&this.team&&this.team.human&&!this.overview);if((a!==this.scoped||this.scopedUnit&&this.scopedUnit!==i)&&(this.scopedUnit&&this.scopedUnit.alive&&(this.scopedUnit.model.root.visible=!0),this.scoped=a,this.scopedUnit=a?i:null,a&&(i.model.root.visible=!1)),!(n==="gameover"||n==="intro"))if(this.overview||n==="target")e.mode!=="overview"&&(e.setMode("overview",null,{keepTarget:!0}),i&&e.goal.copy(i.pos));else if(this.tac&&i&&i.alive&&n==="aim")e.tc=this.tac,this.wantCam("tactical",i);else if(i&&i.alive&&i.aiming&&(n==="aim"||n==="ai")){let o=Kt[this.weapon];this.wantCam("aim",i,{ballistic:o.type==="ballistic"||o.type==="drive",sniper:!!o.zoom&&n==="aim"})}else if(n==="resolve"||n==="turnEnd"||n==="retreat"){let o=this.projectiles[0],l=this.units.find(c=>c.alive&&(!c.onGround||c.scripted)&&c!==i);o?this.wantCam("track",o):this.tractors[0]?this.wantCam("track",this.tractors[0]):this.swarms[0]?this.wantCam("track",this.swarms[0]):this.planes[0]?this.wantCam("track",{pos:this.planes[0].mesh.position}):this.lastEvent&&this.time-this.lastEvent.t<1.6?this.wantCam("point",this.lastEvent.pos,{dist:17}):l?this.wantCam("track",l):i&&(i.alive||i.deathT<2)&&this.wantCam("follow",i)}else i&&this.wantCam("follow",i);e.update(t)}updateMarkers(t){let e=this.unit,i=this.phase,n=e&&e.alive&&["move","aim","target","ai","retreat"].includes(i);this.arrow.visible=!!n&&i!=="aim"&&!e.aiming&&!this.demo,this.arrow.visible&&(this.arrow.position.set(e.pos.x,e.pos.y+3.05+Math.sin(this.time*4)*.1,e.pos.z),this.arrow.rotation.y+=t*2.5);let s=0,a=!1,o=this.weapon?Kt[this.weapon]:null,l=this.settings.aimHelp||"full";this.aimInfo=null;let c=!!(n&&i==="aim"&&o&&this.team.human);if(this.powerHint&&(!c||Math.abs(e.yaw-this.powerHint.yaw)>.015||Math.abs(e.aimPitch-this.powerHint.pitch)>.015)&&(this.powerHint=null),c&&o.type==="ballistic"){let u=this.charging?Math.max(.04,this.power):this.presetPower(),d=e.aimDir().multiplyScalar(o.speed*u),f=[],p=l==="full",y=p?this.env:this.envCalm;y.owner=e;let m=js(o,e.muzzle(),d,y,p?8:.55,l==="off"?null:f);if(y.owner=null,l!=="off"){let g=Math.min(150,f.length/3);for(let v=0;v<g*3;v++)this.previewArr[v]=f[v];s=g,this.previewGeo.attributes.position.needsUpdate=!0}if(p&&m.type!=="timeout"&&m.type!=="gone"){let g=m.type==="water",v=new te(m.x,g?this.terrain.waterLevel:m.y,m.z);e.aimLandDist=Pt(e.pos.x,e.pos.z,v.x,v.z);let w=null,b=null,A=1/0,_=o.swarm?o.swarm.range:o.radius;for(let x of this.units){if(!x.alive)continue;let M=x.getCenter().distanceTo(v);M<_*.85&&(x.team!==e.team?M<A&&(A=M,w=x):o.swarm||(b=x))}a=!0,this.impactRing.position.set(v.x,v.y+.15,v.z),this.impactRing.scale.setScalar(_*(1+Math.sin(this.time*8)*.04)),this.impactRing.material.color.set(w?"#ff2a2a":b?"#ffd54f":g?"#8fd3ff":"#ffffff"),this.aimInfo={point:v,enemy:w,friend:b,water:g,dist:e.aimLandDist,ballistic:!0,swarm:!!o.swarm}}else p||(e.aimLandDist=Et(o.speed*u*1.1,6,40))}if(c&&o.type==="drive"){let u=[],d=this.simulateDrive(e.pos,e.yaw,e,u),f=Math.min(150,u.length/3);for(let w=0;w<f*3;w++)this.previewArr[w]=u[w];s=f,this.previewGeo.attributes.position.needsUpdate=!0;let p=d.type==="water",y=new te(d.x,p?this.terrain.waterLevel:d.y,d.z),m=new te(d.x,d.y+.8,d.z);e.aimLandDist=Pt(e.pos.x,e.pos.z,y.x,y.z);let g=null,v=null;if(!p)for(let w of this.units)!w.alive||w===e||w.getCenter().distanceTo(m)<o.radius*.85&&(w.team!==e.team?g=g||w:v=w);l!=="off"&&(a=!0,this.impactRing.position.set(y.x,y.y+.15,y.z),this.impactRing.scale.setScalar(o.radius*(1+Math.sin(this.time*8)*.04)),this.impactRing.material.color.set(g?"#ff2a2a":v?"#ffd54f":p?"#8fd3ff":"#ffffff")),this.aimInfo={point:y,enemy:g,friend:v,water:p,dist:e.aimLandDist,ballistic:!0}}this.impactRing.visible=a,this.previewGeo.setDrawRange(0,s),this.preview.visible=s>0;let h=c&&(o.type==="hitscan"||o.type==="cone");if(this.laser.visible=!!h&&!o.pellets,h){let u=e.muzzle(),d=e.aimDir(),f=this.traceRay(u,d,o.range,e),p=this.laserGeo.attributes.position;p.setXYZ(0,u.x,u.y,u.z),p.setXYZ(1,f.point.x,f.point.y,f.point.z),p.needsUpdate=!0;let y=f.unit&&f.unit.team!==e.team?f.unit:null,m=f.unit&&f.unit.team===e.team?f.unit:null;this.laser.material.color.set(y?"#ff2a2a":m?"#ffd54f":"#ffffff"),this.aimInfo={point:f.point,enemy:y,friend:m,head:!!f.head,dist:f.dist,range:!f.unit&&!f.terrain&&!f.prop,blocked:!f.unit&&(f.terrain||f.prop)&&f.dist<25}}else if(c&&o.type==="melee"){let u=e.forward(),d=null;for(let p of this.units){if(!p.alive||p.team===e.team)continue;let y=p.pos.x-e.pos.x,m=p.pos.z-e.pos.z,g=Math.hypot(y,m);g<=o.range&&(y*u.x+m*u.z)/(g||1)>Math.cos(60*ve)&&Math.abs(p.pos.y-e.pos.y)<1.6&&(d=p)}let f=d?d.getHead().clone():new te(e.pos.x+u.x*2,e.pos.y+1.2,e.pos.z+u.z*2);this.aimInfo={point:f,enemy:d,melee:!0}}if(this.marker.visible=!!(n&&i==="target"&&this.targetPoint),this.marker.visible){this.marker.position.copy(this.targetPoint).setY(this.targetPoint.y+.2);let u=o&&o.type==="strike"?(o.scatter||6)+1:1.2;this.marker.scale.setScalar(u*(1+Math.sin(this.time*6)*.06)),this.marker.rotation.y+=t}this.rangeRing.visible=!!(n&&i==="target"&&o&&o.type==="jump"),this.rangeRing.visible&&(this.rangeRing.position.set(e.pos.x,e.pos.y+.3,e.pos.z),this.rangeRing.scale.setScalar(o.range))}enemiesOf(t){return this.units.filter(e=>e.alive&&e.team!==t)}dispose(){this.disposed=!0,this.timers=[],this.frameWaiters=[];for(let t of this.units)t.dispose();for(let t of this.projectiles)t.remove();for(let t of this.tractors)t.mesh.geometry.dispose();for(let t of this.stuck)t.mesh.geometry.dispose();this.world.dispose(),this.scene.clear()}};var pa=new D,Vl=class{constructor(t,e){this.app=t,this.root=mi("div","hud hidden"),e.appendChild(this.root),this.touch=Ah(),this.root.classList.toggle("touch",this.touch),this.root.innerHTML=`
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
      <div class="scope"></div>
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
        <button class="abtn weapon" data-cmd="weaponMenu" data-key="Q"><b class="w-icon">\u{1F52B}</b><span class="w-name"></span><small class="w-ammo"></small></button>
        <button class="abtn sm" data-cmd="switch" data-key="Tab">\u21C4<span>Wechseln</span></button>
        <button class="abtn sm" data-cmd="jump" data-key="Leer">\u2934<span>Hupfen</span></button>
        <button class="abtn sm" data-cmd="endTurn" data-key="X">\u23ED<span>Ende</span></button>
        <button class="abtn sm" data-cmd="nextTarget" data-key="E">\u2316<span>Ziel</span></button>
        <button class="abtn sm" data-cmd="back" data-key="R-Klick">\u2716<span>Zur\xFCck</span></button>
        <button class="abtn big" data-cmd="aim" data-key="F">\u{1F3AF}<span>Zielen</span></button>
        <button class="abtn big fire" data-cmd="fire" data-key="Klick">\u{1F525}<span>Feuer</span></button>
      </div>
      <div class="power"><i></i><b class="tick"></b></div>
      <div class="aiminfo"></div>
      <div class="announce"><div class="a-title"></div><div class="a-sub"></div></div>
      <div class="toast"></div>
      <div class="wmenu hidden"><div class="wm-panel"><div class="wm-head"><b>Waffenkammer</b><button class="wm-close">\u2716</button></div><div class="wm-grid"></div><div class="wm-desc"></div></div></div>
      <div class="overlay tut hidden"></div>
    `,this.$=i=>this.root.querySelector(i),this.labels=this.$(".labels"),this.tags=new Map,this.bubbles=[],this.floats=[],this.annT=0,this.toastT=0,this.last={},this.root.querySelectorAll("[data-cmd]").forEach(i=>{let n=i.dataset.cmd;if(n==="fire"){let s=o=>{o.preventDefault(),xe.unlock(),i.classList.add("held"),this.game&&this.game.cmd("fireDown")},a=o=>{o.preventDefault(),i.classList.contains("held")&&(i.classList.remove("held"),this.game&&this.game.cmd("fireUp"))};i.addEventListener("pointerdown",s),i.addEventListener("pointerup",a),i.addEventListener("pointerleave",a),i.addEventListener("pointercancel",a);return}i.addEventListener("pointerdown",s=>{if(s.preventDefault(),s.stopPropagation(),xe.unlock(),n==="pause"){t.pause();return}if(n==="weaponMenu"){this.toggleWeaponMenu(this.game);return}this.game&&this.game.cmd(n)})}),this.$(".wm-close").addEventListener("click",()=>this.closeWeaponMenu()),this.$(".wmenu").addEventListener("pointerdown",i=>{i.target.classList.contains("wmenu")&&this.closeWeaponMenu()}),t.input.bindJoystick(this.$(".joy"),this.$(".joy-knob"))}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden"),this.closeWeaponMenu(),this.$(".tut").classList.add("hidden")}setupMatch(t){this.game=t,this.labels.innerHTML="",this.tags.clear(),this.bubbles=[],this.floats=[],this.last={},this.$(".announce").classList.remove("show");for(let i of t.units){let n=mi("div","tag");n.innerHTML=`<div class="tag-n">${Gt(i.s.name)}</div><div class="tag-hp"><i style="background:${i.team.color}"></i></div>`,this.labels.appendChild(n),this.tags.set(i,n)}let e=this.$(".teams");e.innerHTML="";for(let i of t.teams){let n=mi("div","tm");n.innerHTML=`<span class="sw" style="background:${i.color}"></span><span class="tm-n">${Gt(i.short)}${i.human&&t.teams.filter(s=>s.human).length>1?"":i.human?" \u2605":""}</span><span class="tm-bar"><i style="background:${i.color}"></i></span>`,e.appendChild(n),i.row=n}this.updateTeams(t),this.setRound(1),this.show(),this.phase(t)}setRound(t){this.$(".round").textContent=`Runde ${t}`}updateTeams(t){for(let e of t.teams){let i=e.units.reduce((s,a)=>s+a.hpMax,0),n=e.units.reduce((s,a)=>s+(a.alive?Math.max(0,a.hp):0),0);e.row&&(e.row.querySelector("i").style.width=`${n/i*100}%`,e.row.classList.toggle("dead",n<=0),e.row.classList.toggle("active",t.team===e))}}turnStart(t,e,i,n=!1){this.updateTeams(t);let s=this.$(".turn-team");s.textContent=e.label||e.name,s.style.color=e.color,n||this.announce(e.human?t.teams.filter(a=>a.human).length>1?`${e.short} is dran!`:"Du bist dran!":`${e.short} is dran`,`${i.name} \xB7 ${qn(i.s)}`,1.5),this.phase(t)}phase(t){if(!t)return;let e=t.phase,i=t.team&&t.team.human,n=this.root,s=t.weapon?Kt[t.weapon]:null;n.dataset.phase=i?e:"cpu";let a=(d,f)=>{let p=n.querySelector(`[data-cmd="${d}"]`);p&&p.classList.toggle("off",!f)},o=i&&e==="move",l=i&&e==="aim",c=i&&e==="target",h=i&&e==="retreat";a("weaponMenu",o||l||c),a("switch",o&&t.canSwitch&&t.team.units.filter(d=>d.alive).length>1),a("jump",o||h),a("endTurn",o),a("nextTarget",l&&s&&!["heal","place","build","dig"].includes(s.type)),a("back",l||c),a("aim",o),a("fire",l||c&&!!t.targetPoint),a("overview",o||l);let u=n.querySelector('[data-cmd="fire"] span');u&&s&&(u.textContent=s.type==="heal"?"Essen":s.type==="place"?"Legen":s.tunnel?"Grabn!":s.type==="jump"?"Spring!":s.type==="drive"?"Los!":s.type==="build"?"Baun!":s.type==="dig"?"Eingrabn":s.type==="ballistic"&&this.touch?"Tipp/Halten":"Feuer"),n.querySelector(".joy").classList.toggle("off",!(o||l||h)||t.overview),this.updateWeaponButton(t),this.updateKeyHints(t),o||l||c||this.closeWeaponMenu()}updateWeaponButton(t){let e=t.unit;if(!e||!t.weapon)return;let i=Kt[t.weapon],n=e.ammo[t.weapon];this.$(".w-icon").textContent=i.icon,this.$(".w-name").textContent=i.name,this.$(".w-ammo").textContent=n<0?"\u221E":`\xD7${n}`}updateKeyHints(t){if(this.touch)return;let e=this.$(".keyhints"),i=t.phase,n=t.team&&t.team.human,s="";if(n&&i==="move")s="<b>W/S</b> gehen \xB7 <b>A/D</b> drehen \xB7 <b>Leertaste</b> hupfen \xB7 <b>F</b> oder <b>Rechtsklick</b> zielen \xB7 <b>Q</b> Waffen \xB7 <b>Tab</b> wechseln \xB7 <b>M</b> Karte \xB7 <b>X</b> Zug beenden \xB7 Maus ziehen = Kamera";else if(n&&i==="aim"&&t.tac)s=Kt[t.weapon].type==="drive"?"<b>Maus</b> zeigt die Fahrtrichtung \xB7 <b>Klick</b> = Los! \xB7 <b>Mausrad</b> Zoom \xB7 <b>A/D</b> oder ziehen = Ansicht drehen \xB7 <b>E</b> n\xE4chstes Ziel \xB7 <b>Rechtsklick/Esc</b> zur\xFCck":"<b>Maus</b> aufs Ziel zeigen \xB7 <b>Klick</b> = Feuer (Winkel, Kraft &amp; Wind rechnet das Spiel) \xB7 <b>W/S</b> Bogen hoch/flach \xB7 <b>Mausrad</b> Zoom \xB7 <b>A/D</b> oder ziehen = Ansicht drehen \xB7 <b>E</b> n\xE4chstes Ziel \xB7 <b>Rechtsklick/Esc</b> zur\xFCck";else if(n&&i==="aim"){let a=Kt[t.weapon],l=this.app.input.locked?"<b>Maus</b> zielen \xB7 ":"<b>Klick ins Bild</b> = Maus fangen \xB7 ";s=a.type==="build"||a.type==="dig"?`<b>Linksklick</b> oder <b>F</b> = ${a.type==="build"?"Verschlag aufstellen (wo du stehst)":"eingraben (wo du stehst)"} \xB7 <b>Rechtsklick/Esc</b> zur\xFCck`:a.type==="ballistic"?`${l}<b>Linksklick</b> Feuer (Kreis = Einschlag) \xB7 <b>halten</b> = Kraft selbst laden \xB7 <b>Mausrad</b> Kraft \xB7 <b>E</b> n\xE4chstes Ziel \xB7 <b>Shift</b> fein \xB7 <b>Rechtsklick/Esc</b> zur\xFCck`:`${l}<b>Linksklick</b> Feuer \xB7 <b>E</b> n\xE4chstes Ziel \xB7 <b>Shift</b> fein \xB7 <b>Rechtsklick/Esc</b> zur\xFCck \xB7 <b>A/D W/S</b> geht a`}else n&&i==="target"?s="<b>Klick</b> aufs Ziel \xB7 nochmal klicken oder <b>Leertaste</b> = Feuer \xB7 Maus ziehen = Karte schieben \xB7 <b>Esc</b> zur\xFCck":n&&i==="retreat"&&(s="<b>W/A/S/D</b> davonlaufen! \xB7 <b>Leertaste</b> hupfen");e.innerHTML=s}toggleWeaponMenu(t){this.$(".wmenu").classList.contains("hidden")?this.openWeaponMenu(t):this.closeWeaponMenu()}openWeaponMenu(t){if(!t||!t.humanTurn||!["move","aim","target"].includes(t.phase))return;let e=t.unit,i=this.$(".wm-grid");i.innerHTML="";let n=this.$(".wm-desc"),s=0;for(let a of e.weapons()){let o=Kt[a],l=e.ammo[a];s++;let c=mi("button",`wm-item${l===0?" empty":""}${a===t.weapon?" sel":""}`);c.innerHTML=`<b>${o.icon}</b><span>${Gt(o.name)}</span><small>${l<0?"\u221E":`\xD7${l}`}</small>${!this.touch&&s<=9?`<em>${s}</em>`:""}`,c.addEventListener("pointerenter",()=>{n.textContent=o.desc||""}),c.addEventListener("click",()=>{if(l===0){n.textContent="Leer. Nix mehr da.";return}t.cmd("selectWeapon",a),this.closeWeaponMenu()}),i.appendChild(c)}n.textContent=Kt[t.weapon]?Kt[t.weapon].desc:"",this.$(".wmenu").classList.remove("hidden")}closeWeaponMenu(){this.$(".wmenu").classList.add("hidden")}get weaponMenuOpen(){return!this.$(".wmenu").classList.contains("hidden")}announce(t,e="",i=1.6){let n=this.$(".announce");n.querySelector(".a-title").textContent=t,n.querySelector(".a-sub").textContent=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),this.annT=i}toast(t,e=2.2){let i=this.$(".toast");i.textContent=t,i.classList.add("show"),this.toastT=e}say(t,e){if(!e)return;let i=this.bubbles.find(s=>s.u===t);for(i&&(i.el.remove(),this.bubbles.splice(this.bubbles.indexOf(i),1));this.bubbles.length>=3;)this.bubbles.shift().el.remove();let n=mi("div","bubble");n.textContent=e,n.style.borderColor=t.team.color,this.labels.appendChild(n),this.bubbles.push({u:t,el:n,t:2.6+e.length*.03})}floatText(t,e,i){let n=mi("div","float");n.textContent=e,n.style.color=i,this.labels.appendChild(n),this.floats.push({pos:t.clone(),el:n,t:0})}unitDied(){}project(t,e,i,n){return pa.copy(t).project(e),pa.z>1||pa.z<-1?null:{x:(pa.x*.5+.5)*i,y:(-pa.y*.5+.5)*n}}frame(t,e){let i=t.cam.cam,n=this.app.width,s=this.app.height,a=t.unit;this.root.classList.toggle("scoped",!!t.scoped);for(let[_,x]of this.tags){if(!_.alive&&_.deathT>1.2||t.scoped&&_===a){x.style.display!=="none"&&(x.style.display="none");continue}let M=this.project(_.getHead().clone().setY(_.pos.y+2.45),i,n,s),C=i.position.distanceTo(_.pos);if(!M||C>75){x.style.display!=="none"&&(x.style.display="none");continue}x.style.display="",x.style.transform=`translate(${M.x.toFixed(1)}px, ${M.y.toFixed(1)}px) translate(-50%, -100%)`;let T=Et(_.hp/_.hpMax,0,1)*100,I=`${Math.round(T)}|${_===a}`;x._k!==I&&(x._k=I,x.querySelector("i").style.width=`${T}%`,x.classList.toggle("cur",_===a))}for(let _=this.bubbles.length-1;_>=0;_--){let x=this.bubbles[_];x.t-=e;let M=this.project(x.u.getHead().clone().setY(x.u.pos.y+2.9),i,n,s);if(x.t<=0||!M){x.t<=0?(x.el.remove(),this.bubbles.splice(_,1)):x.el.style.display="none";continue}x.el.style.display="";let C=Et(M.x,90,n-90),T=Et(M.y,60,s-40);x.el.style.transform=`translate(${C.toFixed(1)}px, ${T.toFixed(1)}px) translate(-50%, -100%)`,x.el.style.opacity=Math.min(1,x.t*3)}for(let _=this.floats.length-1;_>=0;_--){let x=this.floats[_];x.t+=e,x.pos.y+=e*1.2;let M=this.project(x.pos,i,n,s);if(x.t>1.6||!M){x.el.remove(),this.floats.splice(_,1);continue}x.el.style.transform=`translate(${M.x.toFixed(1)}px, ${M.y.toFixed(1)}px) translate(-50%, -50%) scale(${1+Math.max(0,.3-x.t)})`,x.el.style.opacity=Math.min(1,(1.6-x.t)*2)}if(a){let _=t.forts&&t.forts.shedFor(a),x=`${a.uid}|${Math.round(a.hp)}|${Math.round(a.stamina)}|${a.dug?1:0}|${_?Math.round(_.hp):-1}`;if(this.last.uc!==x){this.last.uc=x,this.$(".uc-name").innerHTML=`<span class="sw" style="background:${a.team.color}"></span>${Gt(Xi[a.s.tier])} ${Gt(a.s.name)}`;let M=_?` \xB7 \u{1F6D6} Verschlag ${Math.max(0,Math.round(_.hp))}/${_.hpMax}`:a.dug?" \xB7 \u26CF\uFE0F eingegraben":"";this.$(".uc-title").textContent=`${qn(a.s)} \xB7 ${a.isStier?"Stier":"Kuh"}${M}`;let C=Math.max(0,a.hp);this.$(".uc-bar.hp i").style.width=`${C/a.hpMax*100}%`,this.$(".uc-bar.hp span").textContent=`${Math.round(C)} / ${a.hpMax}`,this.$(".uc-bar.st i").style.width=`${a.stamina}%`}}let o=Math.ceil(t.turnTimer||0);if(this.last.timer!==o){this.last.timer=o;let _=this.$(".timer");_.textContent=o,_.classList.toggle("low",o<=10)}let l=t.team&&t.team.human&&["move","aim","target"].includes(t.phase);this.$(".timer").classList.toggle("paused",!l);let c=t.wind.x,h=t.wind.z,u=Math.hypot(c,h),d=t.cam.yaw+Math.PI-Math.atan2(c,h),f=`${d*20|0}|${u*50|0}`;this.last.wind!==f&&(this.last.wind=f,this.$(".wind-arrow").style.transform=`rotate(${d*180/Math.PI-90}deg)`,this.$(".wind-arrow").style.opacity=u<.03?.25:1,this.$(".wind-bar i").style.width=`${Math.min(100,u*100)}%`);let p=this.$(".power"),y=t.weapon?Kt[t.weapon]:null,m=t.phase==="aim"&&t.team&&t.team.human&&y&&y.type==="ballistic"&&!t.tac;if(t.charging||m){p.classList.add("show"),p.querySelector("i").style.width=`${(t.charging?t.power:0)*100}%`;let _=p.querySelector(".tick");t.powerHint?(_.style.display="block",_.style.left=`${t.powerHint.power*100}%`,p.classList.toggle("near",t.charging&&Math.abs(t.power-t.powerHint.power)<.03)):(_.style.display="none",p.classList.remove("near"))}else p.classList.remove("show");let g=this.$(".xhair"),v=t.aimInfo,w=v?this.project(v.point,i,n,s):null;if(w){g.classList.add("show"),g.style.transform=`translate(${w.x.toFixed(1)}px, ${w.y.toFixed(1)}px)`,g.classList.toggle("on",!!v.enemy),g.classList.toggle("friend",!v.enemy&&!!v.friend);let _="";v.enemy?_=v.melee?`${v.enemy.s.name} in Reichweite!`:v.swarm?`Schwarm auf: ${v.enemy.s.name}`:v.head?`Kopf! ${v.enemy.s.name}`:`Treffer: ${v.enemy.s.name}`:v.friend?_=`Achtung, ${v.friend.s.name}!`:t.tac&&t.tac.reach==="far"?_=`Z'weit weg \u2013 max. ca. ${t.tac.maxR} m`:t.tac&&t.tac.reach==="blocked"?_="Da is was im Weg \u2013 W/S f\xFCr an anderen Bogen":v.water?_="Ins Wasser":v.melee?_="Ka Gegner in Reichweite":v.range?_="Au\xDFer Reichweite":v.blocked&&(_="Deckung im Weg"),v.dist!==void 0&&!v.melee&&(_+=`${_?" \xB7 ":""}${Math.round(v.dist)} m`);let x=g.querySelector("span");x.textContent!==_&&(x.textContent=_)}else g.classList.remove("show");let b=this.$(".aiminfo");if(a&&a.aiming&&(t.phase==="aim"||t.phase==="ai")){let _=Kt[t.weapon],x=Math.round(a.aimPitch*180/Math.PI);b.textContent=_.type==="ballistic"?`Winkel ${x}\xB0 \xB7 Kraft ${Math.round((t.charging?t.power:t.presetPower?t.presetPower():0)*100)}%${t.tac?` \xB7 Bogen: ${t.tac.arc==="auto"?"auto":t.tac.arc}`:""}`:`${_.name} \xB7 ${x}\xB0`,b.classList.add("show")}else b.classList.remove("show");this.annT>0&&(this.annT-=e,this.annT<=0&&this.$(".announce").classList.remove("show")),this.toastT>0&&(this.toastT-=e,this.toastT<=0&&this.$(".toast").classList.remove("show"));let A=`${t.phase}|${this.app.input.locked}|${!!t.tac}|${t.weapon}`;this.last.lock!==A&&(this.last.lock=A,this.updateKeyHints(t)),t.unit&&t.weapon&&this.last.wb!==`${t.weapon}|${t.unit.ammo[t.weapon]}`&&(this.last.wb=`${t.weapon}|${t.unit.ammo[t.weapon]}`,this.updateWeaponButton(t))}tutorial(t){let e=this.$(".tut"),i=this.touch;e.innerHTML=`<div class="panel">
      <h2>Kurze Einweisung, Rekrut!</h2>
      <ul class="tut-list">
        ${i?`
        <li><b>Joystick links:</b> vorw\xE4rts/r\xFCckw\xE4rts gehen und drehen.</li>
        <li><b>Wischen am Bildschirm:</b> Kamera drehen. Zwei Finger: zoomen.</li>
        <li><b>\u{1F3AF} Zielen:</b> Waffe anlegen. Dann wischen oder Joystick = Richtung &amp; Winkel.</li>
        <li><b>\u2316 Ziel:</b> dreht zum n\xE4chsten Gegner und stellt bei Granaten &amp; Co. gleich die passende Kraft ein.</li>
        <li><b>\u{1F525} antippen</b> feuert mit der eingestellten Kraft (der Kreis zeigt den Einschlag). <b>\u{1F525} halten</b> l\xE4dt die Kraft selbst auf \u2013 loslassen = Wurf.</li>`:`
        <li><b>W/S</b> gehen, <b>A/D</b> drehen, <b>Leertaste</b> hupfen, Maus ziehen = Kamera.</li>
        <li><b>F</b> oder <b>Rechtsklick</b> zielen, <b>Q</b> Waffenkammer, <b>1\u20139</b> Schnellwahl.</li>
        <li>Gewehre: Maus wird eingefangen \u2013 <b>Maus bewegen</b> = zielen, <b>Linksklick</b> = Feuer, <b>Rechtsklick</b> oder <b>Esc</b> = zur\xFCck.</li>
        <li>Wurfwaffen: <b>Maus aufs Ziel</b>, <b>Klick</b> = Wurf, <b>W/S</b> Bogen hoch/flach.</li>
        <li><b>E</b> dreht zum n\xE4chsten Gegner und stellt bei Granaten die passende Kraft ein, <b>M</b> zeigt die Karte.</li>
        <li><b>Enter</b> feuert mit der eingestellten Kraft (Kreis = Einschlag), <b>Leertaste halten</b> l\xE4dt die Kraft selbst auf.</li>`}
        <li>Das <b>Fadenkreuz</b> sitzt genau dort, wo der Schuss hingeht \u2013 <b style="color:#ff5a4a">rot</b> = Treffer. Bei Wurfwaffen zeigt der <b>Kreis</b> den Einschlag samt Wind.</li>
        <li>Pro Zug: <b>ein</b> Rindsviech bewegen und <b>einmal</b> angreifen. Die Ausdauer begrenzt den Weg.</li>
        <li>Achtung auf den <b>Wind</b> (oben) und aufs <b>Wasser</b> \u2013 wer reinf\xE4llt, ersauft.</li>
      </ul>
      <button class="btn primary tut-ok">Verstanden, Herr Wachtmeister!</button>
    </div>`,e.classList.remove("hidden"),t.paused=!0,e.querySelector(".tut-ok").addEventListener("click",()=>{xe.unlock(),e.classList.add("hidden"),t.paused=!1})}};var Fh="rindsviecher_save_v1",Nf=8,_v=Math.floor(Math.random()*1e6);function kh(r,t={}){let e=t.sex||(r.next()<.5?"kuh":"stier"),i=e==="kuh"?uf:df,n=t.used||new Set,s=r.pick(i);for(let a=0;a<30&&n.has(s);a++)s=r.pick(i);return n.add(s),{id:++_v*7+Math.floor(r.next()*7),name:s,sex:e,breed:r.pick(e==="kuh"?ff:pf),tier:t.tier||0,branch:t.branch||null,points:0,kills:0,missions:0,medals:[]}}function ir(r,t,e){let i=kh(r,{used:e});return t>0&&(i.branch=r.pick(Object.keys(Wn)),i.tier=t),i}function Uf(r){let t=new Ne(Date.now()&16777215),e=new Set,i=[];for(let n=0;n<Nf;n++)i.push(kh(t,{sex:n%2?"stier":"kuh",used:e}));return{v:1,faction:r,mission:0,squad:i,created:Date.now(),history:[],done:!1}}function ma(r){try{localStorage.setItem(Fh,JSON.stringify(r))}catch{}}function Bh(){try{let r=localStorage.getItem(Fh);if(!r)return null;let t=JSON.parse(r);return!t||t.v!==1||!Array.isArray(t.squad)?null:t}catch{return null}}function Ff(){try{localStorage.removeItem(Fh)}catch{}}function Mv(r,t,e){let i=Pi.filter(s=>s.id!==r.faction),n=[];for(let s=0;s<e;s++)n.push(i[(t*3+s*4+1)%i.length].id);return n}function Wl(r,t){let e=Xn[t],i=Mv(r,t,e.enemies.length),n=e.briefing.replace("{E1}",Mi(i[0]).name).replace("{E2}",i[1]?Mi(i[1]).name:"");return{...e,enemyFactions:i,text:n,index:t}}function kf(r,t){return[...r.squad].sort((i,n)=>n.tier-i.tier||n.points-i.points).slice(0,t).map(i=>i.id)}function Bf(r,t,e){let i=Wl(r,t),n=new Ne(i.seed*31+7),s=r.squad.filter(l=>e.includes(l.id)),a=new Set(s.map(l=>l.name)),o=[{faction:r.faction,control:"human",soldiers:s.map(l=>({...l}))}];return i.enemies.forEach((l,c)=>{let h=[];for(let u=0;u<l.units;u++)h.push(ir(n,n.int(l.tiers[0],l.tiers[1]),a));o.push({faction:i.enemyFactions[c],control:"cpu",difficulty:i.ai,soldiers:h})}),{mode:"campaign",theme:i.theme,seed:i.seed,title:`Einsatz ${t+1}: ${i.title}`,teams:o,tutorial:!!i.tutorial,firstTeam:i.tutorial?0:void 0,rules:{wind:i.wind,risingWater:i.risingWater||0,mines:i.mines||0,fog:!!i.fog,crates:!0,maibaum:!!i.mines,maxRounds:30}}}function ql(r){return r.tier<5&&r.points>=la[r.tier+1]}function Oh(r,t){if(!ql(r))return!1;if(r.tier===0){if(!t||!Wn[t])return!1;r.branch=t}return r.points-=la[r.tier+1],r.tier++,!0}function Of(r,t){let e=t.teams[0],i=t.winner===0,n=new Ne(Date.now()&65535),s={won:i,units:[],fallen:[],recruits:[],missionIdx:r.mission},a=-1,o=null;for(let c of e.units){let h=r.squad.find(p=>p.id===c.id);if(!h)continue;let u=0;c.alive&&(u+=1),c.alive&&i&&(u+=1),u+=c.kills*2,u+=Math.min(3,Math.floor(c.dmg/30));let d=[];c.kills>=2&&d.push("killer"),c.alive&&c.hp<20&&d.push("survivor");let f=c.kills*2+c.dmg/30;f>a&&f>0&&(a=f,o={s:h,r:c}),s.units.push({s:h,r:c,pts:u,medals:d})}if(o){let c=s.units.find(h=>h.s===o.s);c.medals.push("gold"),c.pts+=1}for(let c of s.units){if(!c.r.alive){s.fallen.push(c.s);continue}c.s.points+=c.pts,c.s.kills+=c.r.kills,c.s.missions+=1,c.s.medals.push(...c.medals)}let l=new Set(r.squad.map(c=>c.name));for(r.squad=r.squad.filter(c=>!s.fallen.includes(c));r.squad.length<Nf;){let c=kh(n,{used:l});r.squad.push(c),s.recruits.push(c)}return r.history.push({mission:r.mission,won:i,date:Date.now()}),i&&(r.mission++,r.mission>=Xn.length&&(r.done=!0)),ma(r),s}var Hf="1.2.0",Hh="21.11.2026";var Xl=r=>r.sex==="stier"?"\u{1F402}":"\u{1F404}",$l=class{constructor(t,e){this.app=t,this.root=mi("div","menus"),e.appendChild(this.root),this.skirmish={sv:2,teams:[{faction:"random",control:"human",difficulty:"normal",units:4},{faction:"random",control:"cpu",difficulty:"normal",units:4}],theme:"random",mapSize:"mittel",ranks:"mixed",wind:.45,turnTime:60,crates:!0,mines:!1,water:!1,fog:!1};try{let i=JSON.parse(localStorage.getItem("rindsviecher_skirmish")||"null");i&&i.teams&&(i.sv||i.teams.forEach(n=>{n.faction="random"}),this.skirmish={...this.skirmish,...i,sv:2})}catch{}}clear(){this.root.innerHTML="",this.root.classList.remove("hidden")}hide(){this.root.innerHTML="",this.root.classList.add("hidden")}screen(t,e){this.clear();let i=mi("div",`screen ${t}`);return i.innerHTML=e,this.root.appendChild(i),i.querySelectorAll("button, select, input").forEach(n=>n.addEventListener("pointerdown",()=>xe.unlock())),i.querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>xe.click())),i}title(){let t=Bh(),e=t&&!t.done,i=this.screen("title-screen",`
      <div class="logo">
        <div class="logo-sub">Die Kuh is no ned vom Eis</div>
        <h1 class="logo-main"><span>RINDS</span><span>VIECHER</span></h1>
        <div class="logo-tag">Rundenbasierte 3D-Rindviecherei \xB7 Remastered in Full HD</div>
      </div>
      <div class="menu">
        ${e?`<button class="btn primary" data-a="continue">Feldzug fortsetzen<small>Einsatz ${t.mission+1} von ${Xn.length} \xB7 ${Gt(Mi(t.faction).short)}</small></button>`:""}
        <button class="btn ${e?"":"primary"}" data-a="new">Neuer Feldzug</button>
        <button class="btn" data-a="skirmish">Schnelles Gefecht</button>
        <div class="row2">
          <button class="btn" data-a="howto">Anleitung</button>
          <button class="btn" data-a="settings">Einstellungen</button>
        </div>
        ${document.fullscreenEnabled?'<button class="btn ghost" data-a="fs">\u26F6 Vollbild</button>':""}
      </div>
      <div class="foot"><span class="ver">v${Hf}${Hh?` \xB7 Update vom ${Hh}`:""}</span> \xB7 Fan-Remaster eines rundenbasierten Artillerie-Klassikers \xB7 Eigene Figuren, eigener Schm\xE4h</div>
    `);i.querySelector('[data-a="new"]').onclick=()=>this.newCampaign(),e&&(i.querySelector('[data-a="continue"]').onclick=()=>{this.app.campaign=t,this.barracks()}),i.querySelector('[data-a="skirmish"]').onclick=()=>this.skirmishSetup(),i.querySelector('[data-a="howto"]').onclick=()=>this.howto(()=>this.title()),i.querySelector('[data-a="settings"]').onclick=()=>this.settings(()=>this.title());let n=i.querySelector('[data-a="fs"]');n&&(n.onclick=()=>this.app.toggleFullscreen())}newCampaign(){let t=Bh(),e="noe",i=this.screen("faction-screen",`
      <div class="panel wide">
        <h2>Neuer Feldzug</h2>
        <p class="lead">F\xFCr welches Bundesland ziehst du ins Feld? Zw\xF6lf Eins\xE4tze, eine Truppe, Bef\xF6rderungen nach Bundesheer-Art. Wer f\xE4llt, ist weg \u2013 a neuer Rekrut r\xFCckt nach.</p>
        <div class="factions">
          ${Pi.map(n=>`<button class="fcard${n.id===e?" sel":""}" data-f="${n.id}" style="--c:${n.color}"><span class="fc-sw"></span><b>${Gt(n.name)}</b><small>\u201E${Gt(n.motto)}\u201C</small></button>`).join("")}
        </div>
        ${t&&!t.done?'<p class="warn">Achtung: Der bestehende Feldzug wird \xFCberschrieben.</p>':""}
        <div class="btns">
          <button class="btn" data-a="back">Zur\xFCck</button>
          <button class="btn primary" data-a="go">Ab in die Kaserne!</button>
        </div>
      </div>`);i.querySelectorAll(".fcard").forEach(n=>{n.onclick=()=>{e=n.dataset.f,i.querySelectorAll(".fcard").forEach(s=>s.classList.toggle("sel",s===n))}}),i.querySelector('[data-a="back"]').onclick=()=>this.title(),i.querySelector('[data-a="go"]').onclick=()=>{let n=Uf(e);ma(n),this.app.campaign=n,this.barracks()}}barracks(){let t=this.app.campaign;if(t.done){this.campaignDone();return}let e=Wl(t,t.mission),i=e.player;(!this.selection||this.selection.mission!==t.mission||this.selection.ids.some(o=>!t.squad.find(l=>l.id===o)))&&(this.selection={mission:t.mission,ids:kf(t,i)});let n=this.selection.ids,s=Mi(t.faction),a=this.screen("barracks-screen",`
      <div class="panel wide">
        <div class="ph">
          <h2><span class="sw" style="background:${s.color}"></span>Kaserne \xB7 ${Gt(s.name)}</h2>
          <div class="sub">N\xE4chster Einsatz: <b>${t.mission+1}/${Xn.length} \u2013 ${Gt(e.title)}</b> \xB7 Aufstellung: <b class="selcount">${n.length}/${i}</b></div>
        </div>
        <div class="squad">
          ${t.squad.map(o=>this.soldierCard(o,n.includes(o.id))).join("")}
        </div>
        <p class="hint">Antippen = f\xFCr den Einsatz aufstellen. Bef\xF6rderungspunkte gibt's f\xFCrs \xDCberleben, Treffer und Absch\xFCsse.</p>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmen\xFC</button>
          <button class="btn primary" data-a="brief">Zur Einsatzbesprechung</button>
        </div>
      </div>`);a.querySelectorAll(".scard").forEach(o=>{let l=Number(o.dataset.id);o.querySelector(".sc-main").onclick=()=>{let h=n.indexOf(l);h>=0?n.splice(h,1):(n.length>=i&&n.shift(),n.push(l)),this.barracks()};let c=o.querySelector(".promo");c&&(c.onclick=h=>{h.stopPropagation(),this.promoteDialog(t.squad.find(u=>u.id===l))})}),a.querySelector('[data-a="menu"]').onclick=()=>this.title(),a.querySelector('[data-a="brief"]').onclick=()=>{n.length<i&&t.squad.filter(l=>!n.includes(l.id)).slice(0,i-n.length).forEach(l=>n.push(l.id)),this.briefing()}}soldierCard(t,e){let i=ql(t),n=t.tier<5?la[t.tier+1]:null,s=t.medals.reduce((a,o)=>(a[o]=(a[o]||0)+1,a),{});return`<div class="scard${e?" sel":""}" data-id="${t.id}">
      <div class="sc-main">
        <div class="sc-ico">${Xl(t)}</div>
        <div class="sc-info">
          <b>${Gt(Xi[t.tier])} ${Gt(t.name)}</b>
          <span>${Gt(qn(t))}${t.branch&&t.tier<4?` \xB7 ${Gt(Wn[t.branch].name)}`:""} \xB7 ${Zs[t.tier]} LP</span>
          <small>${t.missions} Eins\xE4tze \xB7 ${t.kills} Absch\xFCsse \xB7 Punkte ${t.points}${n?`/${n}`:""} ${Object.entries(s).map(([a,o])=>`${tr[a].icon}${o>1?`\xD7${o}`:""}`).join(" ")}</small>
        </div>
        <div class="sc-check">${e?"\u2714":""}</div>
      </div>
      ${i?'<button class="btn small promo">\u2B06 Bef\xF6rdern</button>':""}
    </div>`}promoteDialog(t){let e=t.tier+1,i=mi("div","overlay");if(t.tier===0)i.innerHTML=`<div class="panel">
        <h2>${Gt(t.name)} bef\xF6rdern</h2>
        <p class="lead">Bef\xF6rderung zum Gefreiten \u2013 aber welche Laufbahn? Die Wahl is endg\xFCltig.</p>
        <div class="branches">
          ${Object.entries(Wn).map(([n,s])=>`<button class="bcard" data-b="${n}"><b>${s.icon} ${Gt(s.name)}</b><span>${Gt(s.titles.join(" \u2192 "))}</span><small>${Gt(s.desc)}</small><em>${this.loadoutText({tier:1,branch:n})}</em></button>`).join("")}
        </div>
        <div class="btns"><button class="btn" data-a="x">Abbrechen</button></div>
      </div>`,i.querySelectorAll(".bcard").forEach(n=>{n.onclick=()=>{Oh(t,n.dataset.b),ma(this.app.campaign),xe.bell(.3),i.remove(),this.barracks()}});else{let n={...t,tier:e};i.innerHTML=`<div class="panel">
        <h2>${Gt(t.name)} bef\xF6rdern</h2>
        <p class="lead">${Gt(Xi[t.tier])} \u2192 <b>${Gt(Xi[e])}</b> \xB7 ${Gt(qn(n))}</p>
        <p>Lebenspunkte: ${Zs[t.tier]} \u2192 <b>${Zs[e]}</b></p>
        <p class="small">Ausr\xFCstung: ${this.loadoutText(n)}</p>
        <div class="btns"><button class="btn" data-a="x">Abbrechen</button><button class="btn primary" data-a="ok">Bef\xF6rdern!</button></div>
      </div>`,i.querySelector('[data-a="ok"]').onclick=()=>{Oh(t),ma(this.app.campaign),xe.bell(.3),i.remove(),this.barracks()}}i.querySelector('[data-a="x"]').onclick=()=>i.remove(),this.root.appendChild(i)}loadoutText(t){let e=Tl(t);return El.filter(i=>e[i]!==void 0&&i!=="kopfnuss"&&i!=="pistole").map(i=>`${Kt[i].icon} ${Kt[i].name} \xD7${e[i]}`).join(", ")}briefing(){let t=this.app.campaign,e=Wl(t,t.mission),i=Vn[e.theme],n=e.wind>.8?"F\xF6hnsturm":e.wind>.5?"stark":e.wind>.3?"mittel":"schwach",s=[];e.fog&&s.push("\u{1F32B}\uFE0F Nebel"),e.risingWater&&s.push("\u{1F30A} Hochwasser"),e.mines&&s.push("\u{1F7E4} Minenfeld"),e.enemies.length>1&&s.push("\u2694\uFE0F Drei Parteien");let a=this.screen("brief-screen",`
      <div class="panel">
        <div class="kicker">Einsatz ${t.mission+1} von ${Xn.length}</div>
        <h2>${Gt(e.title)}</h2>
        <div class="facts">
          <span>\u{1F3D4}\uFE0F ${Gt(i.name)}</span>
          <span>\u{1F4A8} Wind: ${n}</span>
          <span>\u{1F916} Gegner: ${Gt(ca[e.ai].name)}</span>
          ${e.enemyFactions.map((o,l)=>`<span><i class="sw" style="background:${Mi(o).color}"></i>${Gt(Mi(o).name)} (${e.enemies[l].units})</span>`).join("")}
          ${s.map(o=>`<span>${o}</span>`).join("")}
        </div>
        <blockquote class="brief">${Gt(e.text)}</blockquote>
        <div class="btns">
          <button class="btn" data-a="back">Zur Kaserne</button>
          <button class="btn primary" data-a="go">Abmarsch!</button>
        </div>
      </div>`);a.querySelector('[data-a="back"]').onclick=()=>this.barracks(),a.querySelector('[data-a="go"]').onclick=()=>{let o=Bf(t,t.mission,this.selection.ids);this.app.startMatch(o,{kind:"campaign"})}}campaignResult(t,e){let i=this.app.campaign,n=t.won,s=i.squad.some(ql),a=this.screen("result-screen",`
      <div class="panel wide">
        <div class="kicker">Einsatz ${t.missionIdx+1}: ${Gt(Xn[t.missionIdx].title)}</div>
        <h2 class="${n?"win":"lose"}">${n?"SIEG!":"NIEDERLAGE"}</h2>
        <p class="lead">${Gt(Zi(Dh[n?"win":"lose"]))}</p>
        <table class="stats">
          <tr><th></th><th>Soldat</th><th>Status</th><th>Absch\xFCsse</th><th>Schaden</th><th>Punkte</th></tr>
          ${t.units.map(l=>`<tr class="${l.r.alive?"":"dead"}">
            <td>${Xl(l.s)}</td>
            <td>${Gt(Xi[l.s.tier])} ${Gt(l.s.name)} ${l.medals.map(c=>`<span title="${Gt(tr[c].name)}">${tr[c].icon}</span>`).join("")}</td>
            <td>${l.r.alive?`\u2714 ${l.r.hp} LP`:"\u271D gefallen"}</td>
            <td>${l.r.kills}</td><td>${l.r.dmg}</td><td>${l.r.alive?`+${l.pts}`:"\u2013"}</td></tr>`).join("")}
        </table>
        ${t.fallen.length?`<p class="memorial">In Gedenken: ${t.fallen.map(l=>Gt(l.name)).join(", ")}. M\xF6ge die Alm ewig gr\xFCn sein.</p>`:""}
        ${t.recruits.length?`<p class="small">Neue Rekruten einger\xFCckt: ${t.recruits.map(l=>`${Xl(l)} ${Gt(l.name)}`).join(", ")}</p>`:""}
        ${t.units.some(l=>l.medals.length)?`<p class="small">${t.units.filter(l=>l.medals.length).map(l=>l.medals.map(c=>`${tr[c].icon} ${Gt(tr[c].name)} f\xFCr ${Gt(l.s.name)}`).join(" \xB7 ")).join(" \xB7 ")}</p>`:""}
        ${s?'<p class="promo-hint">\u2B06 Es gibt Bef\xF6rderungen in der Kaserne!</p>':""}
        <div class="btns">
          ${n?"":'<button class="btn" data-a="retry">Nochmal versuchen</button>'}
          <button class="btn primary" data-a="next">${i.done?"Zum Finale":"Zur Kaserne"}</button>
        </div>
      </div>`);a.querySelector('[data-a="next"]').onclick=()=>i.done?this.campaignDone():this.barracks();let o=a.querySelector('[data-a="retry"]');o&&(o.onclick=()=>this.barracks())}campaignDone(){let t=this.app.campaign,e=Mi(t.faction),i=this.screen("result-screen",`
      <div class="panel">
        <div class="kicker">Feldzug abgeschlossen</div>
        <h2 class="win">Die ${Gt(e.name)} san Meister!</h2>
        <p class="lead">Alle zw\xF6lf Eins\xE4tze \xFCberstanden. Da Bauer hat a Freibier spendiert, die Blasmusi spielt, und im Heimatmuseum h\xE4ngt jetzt a Foto von eich. Mit H\xF6rnern.</p>
        <p>\xDCberlebende Veteranen: ${t.squad.filter(n=>n.missions>0).map(n=>`${Xl(n)} ${Gt(Xi[n.tier])} ${Gt(n.name)}`).join(", ")||"\u2013"}</p>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmen\xFC</button>
          <button class="btn primary" data-a="new">Neuer Feldzug</button>
        </div>
      </div>`);i.querySelector('[data-a="menu"]').onclick=()=>this.title(),i.querySelector('[data-a="new"]').onclick=()=>{Ff(),this.newCampaign()}}skirmishSetup(){let t=this.skirmish,e=t.teams.map(c=>c.faction),i=c=>`<option value="random"${c==="random"?" selected":""}>\u{1F3B2} Zufall</option>`+Pi.map(h=>`<option value="${h.id}"${h.id===c?" selected":""}>${Gt(h.name)}</option>`).join(""),n=c=>c==="random"?"background:conic-gradient(#e53935,#fdd835,#43a047,#1e88e5,#8e24aa,#e53935)":`background:${Mi(c).color}`,s=c=>[["human","Mensch"],["easy","CPU leicht"],["normal","CPU normal"],["hard","CPU schwer"]].map(([h,u])=>`<option value="${h}"${(c.control==="human"?"human":c.difficulty)===h?" selected":""}>${u}</option>`).join(""),a=(c,h)=>c.map(([u,d])=>`<option value="${u}"${String(h)===String(u)?" selected":""}>${d}</option>`).join(""),o=this.screen("skirmish-screen",`
      <div class="panel wide">
        <h2>Schnelles Gefecht</h2>
        <div class="teams-setup">
          ${t.teams.map((c,h)=>`<div class="trow" data-i="${h}">
            <span class="sw" style="${n(c.faction)}"></span>
            <select data-k="faction">${i(c.faction)}</select>
            <select data-k="control">${s(c)}</select>
            <select data-k="units">${a([2,3,4,5,6].map(u=>[u,`${u} Viecher`]),c.units)}</select>
            ${t.teams.length>2?'<button class="btn small x" data-a="rm">\u2716</button>':""}
          </div>`).join("")}
          ${t.teams.length<4?'<button class="btn small" data-a="add">+ Team dazu</button>':""}
        </div>
        <div class="opts">
          <label>Gel\xE4nde<select data-o="theme">${a([["random","Zufall"],...Ks.map(c=>[c,Vn[c].name])],t.theme)}</select></label>
          <label>Kartengr\xF6\xDFe<select data-o="mapSize">${a(Object.entries(oa).map(([c,h])=>[c,h.name]),t.mapSize||"mittel")}</select></label>
          <label>Dienstgrade<select data-o="ranks">${a([["rekrut","Nur Rekruten"],["mixed","Gemischt"],["veteran","Veteranen"],["hero","Helden"]],t.ranks)}</select></label>
          <label>Wind<select data-o="wind">${a([[0,"Windstill"],[.25,"Schwach"],[.45,"Mittel"],[.7,"Stark"],[1,"F\xF6hnsturm"]],t.wind)}</select></label>
          <label>Rundenzeit<select data-o="turnTime">${a([[30,"30 s"],[45,"45 s"],[60,"60 s"],[90,"90 s"],[9999,"Unbegrenzt"]],t.turnTime)}</select></label>
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
      </div>`);o.querySelectorAll(".trow").forEach(c=>{let h=Number(c.dataset.i);c.querySelectorAll("select").forEach(d=>{d.onchange=()=>{let f=t.teams[h];d.dataset.k==="faction"&&(f.faction=d.value),d.dataset.k==="units"&&(f.units=Number(d.value)),d.dataset.k==="control"&&(d.value==="human"?f.control="human":(f.control="cpu",f.difficulty=d.value)),this.skirmishSetup()}});let u=c.querySelector('[data-a="rm"]');u&&(u.onclick=()=>{t.teams.splice(h,1),this.skirmishSetup()})});let l=o.querySelector('[data-a="add"]');l&&(l.onclick=()=>{t.teams.push({faction:"random",control:"cpu",difficulty:"normal",units:4}),this.skirmishSetup()}),o.querySelectorAll("[data-o]").forEach(c=>{c.onchange=()=>{let h=c.dataset.o;c.type==="checkbox"?t[h]=c.checked:t[h]=["wind","turnTime"].includes(h)?Number(c.value):c.value}}),o.querySelector('[data-a="back"]').onclick=()=>this.title(),o.querySelector('[data-a="go"]').onclick=()=>{let c=t.teams.map(h=>h.faction).filter(h=>h!=="random");if(new Set(c).size!==c.length){this.app.toastMenu("Zwa Teams mit derselben Fraktion geht ned. Bitte unterschiedliche w\xE4hlen.");return}try{localStorage.setItem("rindsviecher_skirmish",JSON.stringify(t))}catch{}this.app.startMatch(this.buildSkirmish(),{kind:"skirmish"})}}buildSkirmish(){let t=this.skirmish,e=(Date.now()&65535)+1,i=new Ne(e),n=t.theme==="random"?i.pick(Ks):t.theme,s=new Set,a=()=>{switch(t.ranks){case"rekrut":return 0;case"veteran":return i.int(2,3);case"hero":return i.int(3,5);default:return i.int(0,2)}},o=t.teams.filter(d=>d.control==="human").length,l=0,c=new Set(t.teams.map(d=>d.faction).filter(d=>d!=="random")),h=i.shuffle(Pi.map(d=>d.id).filter(d=>!c.has(d))),u=t.teams.map(d=>{let f={...d,faction:d.faction==="random"?h.pop():d.faction},p=[],y=[];for(let g=0;g<f.units;g++)y.push(a());for(let g=0;g<f.units;g++)p.push(ir(i,y[g],s));let m=Mi(f.faction);return f.control==="human"&&l++,{faction:f.faction,control:f.control,difficulty:f.difficulty,soldiers:p,label:o>1&&f.control==="human"?`Spieler ${l} \xB7 ${m.short}`:void 0}});return{mode:"skirmish",theme:n,seed:e,title:"Schnelles Gefecht",teams:u,rules:{wind:t.wind,turnTime:t.turnTime,crates:t.crates,mines:t.mines?12:0,risingWater:t.water?.3:0,fog:t.fog,mapSize:t.mapSize||"mittel",maibaum:t.mines,maxRounds:40}}}skirmishResult(t){let e=t.winner>=0?t.teams[t.winner]:null,i=e&&e.human,n=t.teams.some(a=>a.human),s=this.screen("result-screen",`
      <div class="panel wide">
        <div class="kicker">Schnelles Gefecht \xB7 ${t.rounds} Runden</div>
        <h2 class="${i||!n?"win":"lose"}">${e?`${Gt(e.name)} gewinnt!`:"Unentschieden!"}</h2>
        <p class="lead">${Gt(Zi(Dh[e?i||!n?"win":"lose":"draw"]))}</p>
        <div class="team-results">
          ${t.teams.map(a=>`<div class="tres"><h3><span class="sw" style="background:${Mi(a.faction).color}"></span>${Gt(a.name)}${a.human?" (Mensch)":""}</h3>
            <table class="stats">${a.units.map(o=>`<tr class="${o.alive?"":"dead"}"><td>${Gt(o.name)}</td><td>${o.alive?`\u2714 ${o.hp}`:"\u271D"}</td><td>${o.kills} \u{1F480}</td><td>${o.dmg} \u{1F4A5}</td></tr>`).join("")}</table></div>`).join("")}
        </div>
        <div class="btns">
          <button class="btn" data-a="menu">Hauptmen\xFC</button>
          <button class="btn" data-a="setup">Einstellungen \xE4ndern</button>
          <button class="btn primary" data-a="again">Revanche!</button>
        </div>
      </div>`);s.querySelector('[data-a="menu"]').onclick=()=>this.title(),s.querySelector('[data-a="setup"]').onclick=()=>this.skirmishSetup(),s.querySelector('[data-a="again"]').onclick=()=>this.app.startMatch(this.buildSkirmish(),{kind:"skirmish"})}settings(t){let e=this.app.settings,i=(s,a)=>s.map(([o,l])=>`<option value="${o}"${String(a)===String(o)?" selected":""}>${l}</option>`).join(""),n=this.screen("settings-screen",`
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
      </div>`);n.querySelectorAll("[data-s]").forEach(s=>{s.oninput=s.onchange=()=>{let a=s.dataset.s,o=s.type==="checkbox"?s.checked:s.value;["sfx","music","camSens","turnTime"].includes(a)&&(o=Number(o)),this.app.setSetting(a,o)}}),n.querySelector('[data-a="back"]').onclick=t}howto(t){let e=this.screen("howto-screen",`
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
          <li><b>F</b> oder <b>Rechtsklick</b> zielen \xB7 <b>Q</b> Waffenkammer \xB7 <b>1\u20139</b> Waffe direkt \xB7 <b>Tab</b> Einheit wechseln (vor dem ersten Schritt)</li>
          <li>Gewehre &amp; Pistole: Die Maus wird eingefangen \u2013 <b>Maus bewegen</b> = zielen \xB7 <b>Linksklick</b> = Feuer \xB7 <b>Rechtsklick</b>/<b>Esc</b> = zur\xFCck \xB7 <b>E</b> n\xE4chstes Ziel \xB7 <b>Shift</b> = fein</li>
          <li>Granate, Panzerfaust, M\xF6rser &amp; Co.: <b>Maus aufs Ziel zeigen</b>, <b>Klick</b> = Wurf \u2013 Winkel, Kraft und Wind rechnet das Spiel \xB7 <b>W/S</b> Bogen hoch/flach \xB7 <b>Mausrad</b> Zoom \xB7 <b>A/D</b> Ansicht drehen</li>
          <li><b>M</b> Karte \xB7 <b>X</b> Zug beenden \xB7 <b>P</b>/<b>Esc</b> Pause</li>
        </ul>
        <h3>Stellungsbau</h3>
        <ul>
          <li>\u26CF\uFE0F <b>Eingraben</b> (jedes Viech, 2\xD7 pro Gefecht): Nur mehr Sch\xE4dl und H\xF6rner schaun raus. Explosionen machen halben Schaden und schleudern di kaum weg, Kugeln treffen nur mehr den Kopf. Schie\xDFen geht weiter \u2013 wer weggeht, steigt aus.</li>
          <li>\u{1F6D6} <b>Bretterverschlag</b> (Pioniere, Helden): Baut si rund um dein Viech. Die Bretter schlucken Kugeln und 60 % vom Explosionsschaden, bis da Verschlag z'sammf\xE4llt (90 Punkte, das Dach fliegt vorher weg). Rausschie\xDFen geht, reingehen kann a jeder.</li>
          <li>\u{1F573}\uFE0F <b>Maulwurfgang</b> (Pioniere, J\xE4ger): Zielpunkt im Kreis antippen, unterirdisch hingraben, danach no schie\xDFen. Unterm Wasser durch geht's ned.</li>
        </ul>
        <h3>Dienstgrade &amp; Bef\xF6rderung</h3>
        <p>Jeder f\xE4ngt als <b>Rekrut</b> an. Mit Punkten aus den Eins\xE4tzen wird bef\xF6rdert: ${Xi.join(" \u2192 ")}. Bei der ersten Bef\xF6rderung w\xE4hlst du die Laufbahn:</p>
        <ul>${Object.values(Wn).map(i=>`<li>${i.icon} <b>${Gt(i.name)}</b> (${Gt(i.titles.join(" \u2192 "))}): ${Gt(i.desc)}</li>`).join("")}</ul>
        <p>Ab Wachtmeister geht's weiter zum <b>Held</b> (Leutnant) und zur <b>Legende</b> (Hauptmann) \u2013 mit dem Besten aus allen Laufbahnen und der ber\xFCchtigten Heiligen-Kuh-Bombe.</p>
        <h3>Tipps vom Spie\xDF</h3>
        <ul>
          <li>Der <b>Wind</b> (oben in der Mitte) treibt Panzerfaust und Granaten ab. Der Pfeil zeigt relativ zur Kamera.</li>
          <li>Wasser is t\xF6dlich. A g'scheite <b>Kopfnuss</b> am Ufer wirkt Wunder \u2013 Stiere sto\xDFen st\xE4rker.</li>
          <li>Kisten vom Himmel: \u{1F968} = Brettljause (Lebenspunkte), gr\xFCne Kiste = Munition. Manchmal is a Falle drin.</li>
          <li>Kuhfladen-Minen werden erst in der n\xE4chsten Runde scharf. Echte Kuhfladen nie.</li>
          <li>Krater ver\xE4ndern das Gel\xE4nde \u2013 nutz das!</li>
          <li>Bei \u201ESchnelles Gefecht\u201C kannst die <b>Kartengr\xF6\xDFe</b> w\xE4hlen: klein f\xFCr schnelle Raufereien, gro\xDF f\xFCr Taktik-Feinspitze.</li>
        </ul>
        <div class="btns"><button class="btn primary" data-a="back">Alles klar</button></div>
      </div>`);e.querySelector('[data-a="back"]').onclick=t}pause(t){let e=mi("div","overlay pause"),i=t.opts.mode==="campaign";e.innerHTML=`<div class="panel">
      <h2>Pause</h2>
      <div class="menu">
        <button class="btn primary" data-a="resume">Weiter</button>
        <button class="btn" data-a="settings">Einstellungen</button>
        <button class="btn" data-a="howto">Anleitung</button>
        <button class="btn" data-a="quit">${i?"R\xFCckzug zur Kaserne":"Gefecht abbrechen"}</button>
      </div>
      ${i?`<p class="small">R\xFCckzug z\xE4hlt ned als Niederlage \u2013 aber Punkte gibt's a kane.</p>`:""}
    </div>`,this.root.classList.remove("hidden"),this.root.appendChild(e);let n=()=>{e.remove(),this.app.resume()};e.querySelector('[data-a="resume"]').onclick=n,e.querySelector('[data-a="settings"]').onclick=()=>{e.remove(),this.settings(()=>{this.hide(),this.pause(t)})},e.querySelector('[data-a="howto"]').onclick=()=>{e.remove(),this.howto(()=>{this.hide(),this.pause(t)})},e.querySelector('[data-a="quit"]').onclick=()=>{e.remove(),this.app.quitMatch()}}};var Yl=class{constructor(t){this.canvas=t,this.keys=new Set,this.joy={x:0,y:0,active:!1},this.pointers=new Map,this.listeners={},this.pinchDist=0,this.enabled=!0,this.locked=!1,this.unlockTime=0,this.canLock=!!t.requestPointerLock&&window.matchMedia&&window.matchMedia("(any-pointer: fine)").matches,document.addEventListener("pointerlockchange",()=>{let e=this.locked;this.locked=document.pointerLockElement===t,e&&!this.locked&&(this.unlockTime=performance.now()),e!==this.locked&&this.emit("lockchange",this.locked)}),document.addEventListener("pointerlockerror",()=>this.emit("lockerror")),document.addEventListener("mousemove",e=>{this.locked&&(e.movementX||e.movementY)&&this.emit("look",e.movementX,e.movementY)}),document.addEventListener("mousedown",e=>{this.locked&&(e.preventDefault(),this.emit("lockbutton",e.button,!0))}),document.addEventListener("mouseup",e=>{this.locked&&this.emit("lockbutton",e.button,!1)}),window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="SELECT")||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Tab"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.emit("keydown",e.code,e),this.keys.add(e.code))}),window.addEventListener("keyup",e=>{this.keys.delete(e.code),this.emit("keyup",e.code,e)}),window.addEventListener("blur",()=>this.keys.clear()),this.mouseX=-1,this.mouseY=-1,this.mouseMoved=0,window.addEventListener("pointermove",e=>{e.pointerType==="mouse"&&!this.locked&&(this.mouseMoved+=Math.abs(e.clientX-this.mouseX)+Math.abs(e.clientY-this.mouseY),this.mouseX=e.clientX,this.mouseY=e.clientY)}),t.addEventListener("pointerdown",e=>this.onDown(e)),window.addEventListener("pointermove",e=>this.onMove(e)),window.addEventListener("pointerup",e=>this.onUp(e)),window.addEventListener("pointercancel",e=>this.onUp(e)),t.addEventListener("wheel",e=>{e.preventDefault(),this.emit("wheel",e.deltaY>0?1:-1,e)},{passive:!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("contextmenu",e=>{this.locked&&e.preventDefault()})}on(t,e){(this.listeners[t]=this.listeners[t]||[]).push(e)}off(t){delete this.listeners[t]}emit(t,...e){(this.listeners[t]||[]).forEach(i=>i(...e))}requestLock(){if(!(!this.canLock||this.locked))try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}exitLock(){this.locked&&document.exitPointerLock&&document.exitPointerLock()}onDown(t){if(!this.locked){if(this.canvas.setPointerCapture&&this.canvas.setPointerCapture(t.pointerId),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,t:performance.now(),button:t.button,moved:0}),this.pointers.size===2){let[e,i]=[...this.pointers.values()];this.pinchDist=Math.hypot(e.x-i.x,e.y-i.y)}this.emit("anypointer")}}onMove(t){if(this.locked)return;let e=this.pointers.get(t.pointerId);if(!e)return;let i=t.clientX-e.x,n=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,e.moved+=Math.abs(i)+Math.abs(n),this.pointers.size===2){let[s,a]=[...this.pointers.values()],o=Math.hypot(s.x-a.x,s.y-a.y);this.pinchDist>0&&o>0&&this.emit("zoom",this.pinchDist/o),this.pinchDist=o;return}e.moved>6&&this.emit("drag",i,n,e.button,t.pointerType)}onUp(t){if(this.locked){this.pointers.clear();return}let e=this.pointers.get(t.pointerId);if(e){if(this.pointers.delete(t.pointerId),e.moved<10&&performance.now()-e.t<450&&this.pointers.size===0){let i=this.canvas.getBoundingClientRect(),n=(t.clientX-i.left)/i.width*2-1,s=-((t.clientY-i.top)/i.height)*2+1;this.emit("tap",n,s,t)}this.pointers.size<2&&(this.pinchDist=0)}}bindJoystick(t,e){let i=null,n=0,s=0,a=50,o=(c,h)=>{let u=c-n,d=h-s,f=Math.hypot(u,d);f>a&&(u=u/f*a,d=d/f*a),e.style.transform=`translate(${u}px, ${d}px)`;let p=u/a,y=-d/a;this.joy.x=Math.abs(p)<.12?0:p,this.joy.y=Math.abs(y)<.12?0:y};t.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation(),i=c.pointerId,t.setPointerCapture(c.pointerId);let h=t.getBoundingClientRect();n=h.left+h.width/2,s=h.top+h.height/2,a=h.width*.38,this.joy.active=!0,o(c.clientX,c.clientY)}),t.addEventListener("pointermove",c=>{c.pointerId===i&&(c.preventDefault(),o(c.clientX,c.clientY))});let l=c=>{c.pointerId===i&&(i=null,this.joy.x=0,this.joy.y=0,this.joy.active=!1,e.style.transform="translate(0px, 0px)")};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}axis(){let t=0,e=0,i=this.keys;return(i.has("KeyA")||i.has("ArrowLeft"))&&(t-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(t+=1),(i.has("KeyW")||i.has("ArrowUp"))&&(e+=1),(i.has("KeyS")||i.has("ArrowDown"))&&(e-=1),t+=this.joy.x,e+=this.joy.y,{x:Et(t,-1,1),y:Et(e,-1,1),fine:i.has("ShiftLeft")||i.has("ShiftRight")}}};var Gh="rindsviecher_settings",Vh=class{constructor(){this.canvas=document.getElementById("c"),this.uiRoot=document.getElementById("ui"),this.params=new URLSearchParams(location.search),this.settings={...mf};try{Object.assign(this.settings,JSON.parse(localStorage.getItem(Gh)||"{}"))}catch{}if(!this.settings.v||this.settings.v<2){this.settings.aimHelp="full",this.settings.v=2;try{localStorage.setItem(Gh,JSON.stringify(this.settings))}catch{}}this.quality=this.resolveQuality(),this.renderScale=1,this.timeScale=Number(this.params.get("speed"))||1,this.createRenderer(),this.input=new Yl(this.canvas),this.hud=new Vl(this,this.uiRoot),this.menus=new $l(this,this.uiRoot),this.fpsEl=mi("div","fps hidden"),this.uiRoot.appendChild(this.fpsEl),this.fpsEl.classList.toggle("hidden",!this.settings.showFps),xe.setVolumes(this.settings.sfx,this.settings.music),this.bindInput(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.game&&!this.game.demo&&!this.game.paused&&this.pause(),xe.ctx&&(document.hidden?xe.ctx.suspend():xe.ctx.resume())});let t=()=>{xe.unlock(),(!this.game||this.game.demo||this.game.phase==="gameover")&&xe.startMusic()};window.addEventListener("pointerdown",t,{passive:!0}),window.addEventListener("touchend",t,{passive:!0}),window.addEventListener("click",t),window.addEventListener("keydown",t),this.resize(),this.last=performance.now(),this.frames=0,this.fpsT=0,this.perfT=0,this.perfFrames=0,requestAnimationFrame(n=>this.loop(n)),window.__rv=this,window.__audio=xe;let e=this.params.get("autotest");e?this.startAutotest(e):(this.startDemo(),this.menus.title());let i=document.getElementById("loading");i&&i.classList.add("done")}resolveQuality(){let t=this.params.get("quality")||this.settings.quality;return t&&t!=="auto"?t:Rh()?"medium":"high"}createRenderer(){let t=new _l({canvas:this.canvas,antialias:this.quality!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!!this.params.get("autotest")});t.toneMapping=Zr,t.toneMappingExposure=1.05,t.outputColorSpace=ui,t.shadowMap.enabled=this.quality!=="low",t.shadowMap.type=Fn,this.renderer=t}aspect(){return this.width/this.height}pixelRatio(){let t=window.devicePixelRatio||1,e=this.quality==="low"?1.25:this.quality==="medium"?1.75:2;return Math.max(.5,Math.min(t,e)*this.renderScale)}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(this.pixelRatio()),this.renderer.setSize(this.width,this.height,!1),this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.game&&this.applyCamera(this.game),document.body.classList.toggle("portrait",this.height>this.width&&this.width<700)}applyCamera(t){t.cam.cam.aspect=this.aspect(),t.cam.cam.updateProjectionMatrix();let e=new Mt;this.renderer.getDrawingBufferSize(e),t.fx.setScale(e.y,t.cam.cam.fov)}bindInput(){let t=this.input;t.on("drag",(e,i,n,s)=>{this.game&&!this.game.demo&&this.game.onDrag(e,i,n,s)}),t.on("zoom",e=>{this.game&&!this.game.demo&&this.game.cam.zoomInput(e)}),t.on("wheel",(e,i)=>{this.game&&!this.game.demo&&this.game.onWheel(e,i)}),t.on("look",(e,i)=>{this.game&&!this.game.demo&&!this.game.paused&&this.game.onLook(e,i)}),t.on("lockbutton",(e,i)=>{this.game&&!this.game.demo&&!this.game.paused&&this.game.onLockButton(e,i)}),t.on("lockchange",e=>{this.game&&!this.game.demo&&this.game.onLockChange(e)}),t.on("tap",(e,i,n)=>{this.game&&!this.game.demo&&this.game.onTap(e,i,n)}),t.on("keydown",e=>{let i=this.game;if(!(!i||i.demo)&&!(e==="Escape"&&performance.now()-this.input.unlockTime<450)){if(e==="KeyP"||e==="Escape"&&!["aim","target"].includes(i.phase)){if(i.paused){if(!this.menus.root.querySelector(".pause"))return;this.menus.hide(),this.resume()}else this.pause();return}i.paused||i.onKey(e,!0)}}),t.on("keyup",e=>{this.game&&!this.game.demo&&!this.game.paused&&this.game.onKey(e,!1)})}setSetting(t,e){this.settings[t]=e;try{localStorage.setItem(Gh,JSON.stringify(this.settings))}catch{}(t==="sfx"||t==="music")&&xe.setVolumes(this.settings.sfx,this.settings.music),t==="showFps"&&this.fpsEl.classList.toggle("hidden",!e),t==="quality"&&(this.pendingQuality=!0)}applyQualityChange(){if(!this.pendingQuality)return;this.pendingQuality=!1;let t=this.resolveQuality();t!==this.quality&&(this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.renderer.shadowMap.type=Fn,this.renderScale=1,this.resize())}disposeGame(){this.game&&(this.game.dispose(),this.game=null,this.renderer.renderLists.dispose())}startDemo(){this.disposeGame();let t=new Ne(Date.now()&65535),e=t.shuffle([...Pi]).slice(0,3),i=new Set,n=e.map(l=>({faction:l.id,control:"cpu",difficulty:"normal",soldiers:[0,1,2].map(()=>ir(t,t.int(1,4),i))})),s=t.pick(Ks),a=this.quality==="high"?"medium":this.quality,o=this.quality;this.quality=a,this.game=new er(this,{mode:"demo",theme:s,seed:t.int(1,99999),teams:n,rules:{wind:.4,crates:!0,maxRounds:12}}),this.quality=o,this.applyCamera(this.game),this.game.start()}onDemoEnd(){this.game&&this.game.demo&&this.startDemo()}startMatch(t,e){this.applyQualityChange(),this.menus.hide(),this.hud.hide();let i=document.getElementById("loading");i&&(i.querySelector(".ld-text").textContent="Gel\xE4nde wird planiert\u2026",i.classList.remove("done")),setTimeout(()=>{this.disposeGame(),this.matchMeta=e,this.game=new er(this,t),this.applyCamera(this.game),this.game.start(),xe.stopMusic(),i&&i.classList.add("done")},60)}onMatchEnd(t){if(this.hud.hide(),xe.startMusic(),(this.matchMeta||{}).kind==="campaign"&&this.campaign){let i=Of(this.campaign,t);this.menus.campaignResult(i,t)}else this.menus.skirmishResult(t);this.onAutotestEnd&&this.onAutotestEnd(t)}pause(){!this.game||this.game.demo||this.game.paused||this.game.phase==="gameover"||(this.game.paused=!0,this.input.exitLock(),this.hud.closeWeaponMenu(),this.menus.pause(this.game))}resume(){this.game&&(this.game.paused=!1),this.applyQualityChange()}quitMatch(){let t=this.matchMeta||{};this.hud.hide(),this.startDemo(),xe.startMusic(),t.kind==="campaign"&&this.campaign?this.menus.barracks():this.menus.title()}toggleFullscreen(){let t=document;if(t.fullscreenElement)t.exitFullscreen&&t.exitFullscreen();else{let e=t.documentElement.requestFullscreen?t.documentElement.requestFullscreen():null;e&&e.then&&e.then(()=>{screen.orientation&&screen.orientation.lock&&Rh()&&screen.orientation.lock("landscape").catch(()=>{})}).catch(()=>{})}}toastMenu(t){let e=mi("div","menu-toast",t);this.uiRoot.appendChild(e),setTimeout(()=>e.remove(),2800)}startAutotest(t){let e=new Ne(Number(this.params.get("seed"))||42),i=new Set,n=Number(this.params.get("teams"))||2,s=this.params.get("theme")||e.pick(Ks),a=this.params.get("human")==="1",o=[];for(let l=0;l<n;l++)o.push({faction:Pi[l*2].id,control:a&&l===0||this.params.get("human")==="all"?"human":"cpu",difficulty:this.params.get("diff")||"hard",soldiers:[0,1,2].map(()=>ir(e,e.int(0,5),i))});this.matchMeta={kind:"skirmish"},this.game=new er(this,{mode:"skirmish",theme:s,seed:e.int(1,9999),teams:o,title:`Autotest ${s}`,rules:{wind:.5,crates:!0,mines:t==="mines"?10:0,risingWater:t==="water"?.5:0,fog:t==="fog",maxRounds:25,turnTime:60,mapSize:this.params.get("size")||"mittel"}}),this.applyCamera(this.game),this.game.start()}loop(t){requestAnimationFrame(s=>this.loop(s));let e=(t-this.last)/1e3;if(this.last=t,!(e>0))return;let i=e;e=Math.min(e,.05)*this.timeScale,this.frames++,this.fpsT+=i,this.fpsT>=1&&(this.fps=this.frames/this.fpsT,this.settings.showFps&&(this.fpsEl.textContent=`${Math.round(this.fps)} FPS \xB7 ${this.quality} \xB7 ${Math.round(this.pixelRatio()*100)/100}x`),this.frames=0,this.fpsT=0,this.game&&!document.hidden&&(this.perfT++,this.perfT>=3&&(this.perfT=0,this.fps<38&&this.renderScale>.55?(this.renderScale=Math.max(.55,this.renderScale-.12),this.resize()):this.fps>57&&this.renderScale<1&&(this.renderScale=Math.min(1,this.renderScale+.06),this.resize()))));let n=this.game;if(n){let s=this.timeScale>1?Math.ceil(this.timeScale):1;for(let a=0;a<s;a++)n.update(e/s);this.game===n&&!n.disposed&&this.renderer.render(n.scene,n.cam.cam)}}};function Gf(){try{let r=document.createElement("canvas");if(!!!(r.getContext("webgl2")||r.getContext("webgl")))throw new Error("kein WebGL");new Vh}catch(r){console.error(r);let t=document.getElementById("loading");t&&(t.querySelector(".ld-text").textContent="Uje \u2013 dein Browser kann ka WebGL. Probier's bitte mit an aktuellen Chrome, Safari, Firefox oder Edge.")}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Gf):Gf();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
