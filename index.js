// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function v(r){return r===y||r===p}var s,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",A=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return b.call(r);t=r[w],u=w,n=null!=(o=r)&&d.call(o,u);try{r[w]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[w]=t:delete r[w],e}:function(r){return b.call(r)},_="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var U,g=s,j="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(j&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=U,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,L="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,x={uint16:G,uint8:P};(k=new x.uint16(1))[0]=4660;var M=52===new x.uint8(k.buffer)[0],Y=!0===M?1:0,q=new E(1),C=new g(q.buffer);function z(r){return q[0]=r,C[Y]}function B(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var D=-.16666666666666632;function J(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(D+o*t):r-(o*(.5*n-e*t)-n-e*D)}var K,Q,R=!0===M?0:1,X=new E(1),Z=new g(X.buffer);!0===M?(K=1,Q=0):(K=0,Q=1);var $={HIGH:K,LOW:Q},rr=new E(1),nr=new g(rr.buffer),tr=$.HIGH,er=$.LOW;function or(r,n){return nr[tr]=r,nr[er]=n,rr[0]}var ur,ir,fr=Math.floor;!0===M?(ur=1,ir=0):(ur=0,ir=1);var ar={HIGH:ur,LOW:ir},cr=new E(1),lr=new g(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[pr],n}function sr(r){return vr(r,[0,0],1,0)}c(sr,"assign",vr);var Nr=[0,0];function br(r,n){var t,e;return sr.assign(r,Nr,1,0),t=Nr[0],t&=2147483647,e=z(n),or(t|=e&=2147483648,Nr[1])}function dr(r){return Math.abs(r)}function wr(r,n,t,e){return l(r)||v(r)?(n[e]=r,n[e+t]=0,n):0!==r&&dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var Ar=[0,0],_r=[0,0];function mr(r,n){var t,e;return 0===n||0===r||l(r)||v(r)?r:(wr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?br(0,r):n>1023?r<0?p:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr.assign(r,_r,1,0),t=_r[0],t&=2148532223,e*or(t|=n+1023<<20,_r[1])))}function hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=16777216,Ir=5.960464477539063e-8,Or=hr(20),Sr=hr(20),Er=hr(20),Fr=hr(20);function Tr(r,n,t,e,o,u,i,f,a){var c,l,y,p,v,s,N,b,d;for(p=u,d=e[t],b=t,v=0;b>0;v++)l=Ir*d|0,Fr[v]=d-jr*l|0,d=e[b-1]+l,b-=1;if(d=mr(d,o),d-=8*fr(.125*d),d-=N=0|d,y=0,o>0?(N+=v=Fr[t-1]>>24-o,Fr[t-1]-=v<<24-o,y=Fr[t-1]>>23-o):0===o?y=Fr[t-1]>>23:d>=.5&&(y=2),y>0){for(N+=1,c=0,v=0;v<t;v++)b=Fr[v],0===c?0!==b&&(c=1,Fr[v]=16777216-b):Fr[v]=16777215-b;if(o>0)switch(o){case 1:Fr[t-1]&=8388607;break;case 2:Fr[t-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=mr(1,o)))}if(0===d){for(b=0,v=t-1;v>=u;v--)b|=Fr[v];if(0===b){for(s=1;0===Fr[u-s];s++);for(v=t+1;v<=t+s;v++){for(a[f+v]=Ur[i+v],l=0,b=0;b<=f;b++)l+=r[b]*a[f+(v-b)];e[v]=l}return Tr(r,n,t+=s,e,o,u,i,f,a)}}if(0===d)for(t-=1,o-=24;0===Fr[t];)t-=1,o-=24;else(d=mr(d,-o))>=jr?(l=Ir*d|0,Fr[t]=d-jr*l|0,o+=24,Fr[t+=1]=l):Fr[t]=0|d;for(l=mr(1,o),v=t;v>=0;v--)e[v]=l*Fr[v],l*=Ir;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=gr[s]*e[v+s];Er[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Er[v];for(n[0]=0===y?l:-l,l=Er[0]-l,v=1;v<=t;v++)l+=Er[v];return n[1]=0===y?l:-l,7&N}function Hr(r,n,t,e){var o,u,i,f,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Or[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Or[i+(a-c)];Sr[a]=o}return Tr(r,n,4,Sr,f,4,u,i,Or)}var Gr=Math.round;function Pr(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(z(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(z(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=3*Vr,xr=4*Vr,Mr=[0,0,0],Yr=[0,0];function qr(r,n){var t,e,o,u,i,f,a;if((o=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,n):o<=1073928572?r>0?(a=r-Lr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Lr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Lr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Lr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,n):r>0?(a=r-3*Lr,n[0]=a-kr,n[1]=a-n[0]-kr,3):(a=r+3*Lr,n[0]=a+kr,n[1]=a-n[0]+kr,-3):1075388923===o?Pr(r,o,n):r>0?(a=r-4*Lr,n[0]=a-xr,n[1]=a-n[0]-xr,4):(a=r+4*Lr,n[0]=a+xr,n[1]=a-n[0]+xr,-4);if(o<1094263291)return Pr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return X[0]=r,Z[R]}(r),a=or(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Mr[i]=0|a,a=16777216*(a-Mr[i]);for(Mr[2]=a,u=3;0===Mr[u-1];)u-=1;return f=Hr(Mr,Yr,e,u),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-f):(n[0]=Yr[0],n[1]=Yr[1],f)}var Cr=[0,0];function zr(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1044381696?1:B(r,0);if(n>=2146435072)return NaN;switch(3&qr(r,Cr)){case 0:return B(Cr[0],Cr[1]);case 1:return-J(Cr[0],Cr[1]);case 2:return-B(Cr[0],Cr[1]);default:return J(Cr[0],Cr[1])}}var Br=[0,0];function Dr(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:J(r,0);if(n>=2146435072)return NaN;switch(3&qr(r,Br)){case 0:return J(Br[0],Br[1]);case 1:return B(Br[0],Br[1]);case 2:return-J(Br[0],Br[1]);default:return-B(Br[0],Br[1])}}var Jr=3.141592653589793;function Kr(r){var n,t;return l(r)||v(r)?NaN:0===(n=dr(t=r%2))||1===n?br(0,t):n<.25?Dr(Jr*t):n<.75?br(zr(Jr*(n=.5-n)),t):n<1.25?(t=br(1,t)-t,Dr(Jr*t)):n<1.75?-br(zr(Jr*(n-=1.5)),t):(t-=br(2,t),Dr(Jr*t))}function Qr(r,n,t){var e;return l(r)||l(n)||l(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+Kr(e)/Jr)/2}function Rr(r){return function(){return r}}function Xr(r){return l(r)?Rr(NaN):function(n){return l(n)?NaN:n<r?0:1}}function Zr(r,n,t){var e,o,u,i;for(i=1,e=n-t,o=n+t;i<1e4;){if(u=(e+o)/2,o-e<1e-12)return u;r>Qr(u,n,t)?e=u:o=u,i+=1}return u}function $r(r,n,t){return l(n)||l(t)||l(r)||t<0||r<0||r>1?NaN:0===t?n:Zr(r,n,t)}function rn(r){return l(r)?Rr(NaN):function(n){return l(n)||n<0||n>1?NaN:r}}return c((function(r,n){return l(r)||l(n)?NaN:r<n?0:1}),"factory",Xr),c(Qr,"factory",(function(r,n){return l(r)||l(n)||n<0?Rr(NaN):0===n?Xr(r):function(t){var e;return l(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+Kr(e)/Jr)/2}})),c((function(r,n){return l(r)||r<0||r>1?NaN:n}),"factory",rn),c($r,"factory",(function(r,n){return l(r)||l(n)||n<0?Rr(NaN):0===n?rn(r):function(t){return l(t)||t<0||t>1?NaN:Zr(t,r,n)}})),$r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=n();
//# sourceMappingURL=index.js.map
