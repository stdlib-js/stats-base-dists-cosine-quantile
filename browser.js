// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var p=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function b(r){return r===p||r===v}var N,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,w=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",A=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return d.call(r);t=r[_],u=_,n=null!=(o=r)&&w.call(o,u);try{r[_]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[_]=t:delete r[_],e}:function(r){return d.call(r)},h="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j,g=N,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=j,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,L="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k={uint16:P,uint8:x};(W=new k.uint16(1))[0]=4660;var Y=52===new k.uint8(W.buffer)[0],q=!0===Y?1:0,C=new F(1),z=new g(C.buffer);function B(r){return C[0]=r,z[q]}function D(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var J=-.16666666666666632;function K(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(J+o*t):r-(o*(.5*n-e*t)-n-e*J)}var Q,R,X=!0===Y?0:1,Z=new F(1),$=new g(Z.buffer);!0===Y?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},nr=new F(1),tr=new g(nr.buffer),er=rr.HIGH,or=rr.LOW;function ur(r,n){return tr[er]=r,tr[or]=n,nr[0]}var fr,ir,ar=Math.floor;!0===Y?(fr=1,ir=0):(fr=0,ir=1);var cr={HIGH:fr,LOW:ir},lr=new F(1),yr=new g(lr.buffer),pr=cr.HIGH,vr=cr.LOW;function br(r,n){return lr[0]=n,r[0]=yr[pr],r[1]=yr[vr],r}function Nr(r,n){return 1===arguments.length?br([0,0],r):br(r,n)}var sr=[0,0];function dr(r,n){var t,e;return Nr(sr,r),t=sr[0],t&=2147483647,e=B(n),ur(t|=e&=2147483648,sr[1])}function wr(r){return Math.abs(r)}function _r(r,n){return y(n)||b(n)?(r[0]=n,r[1]=0,r):0!==n&&wr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Ar=[0,0],hr=[0,0];function mr(r,n){var t,e;return 0===n||0===r||y(r)||b(r)?r:(function(r,n){1===arguments.length?_r([0,0],r):_r(r,n)}(Ar,r),n+=Ar[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?dr(0,r):n>1023?r<0?v:p:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nr(hr,r),t=hr[0],t&=2148532223,e*ur(t|=n+1023<<20,hr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=16777216,Or=5.960464477539063e-8,Sr=Ur(20),Er=Ur(20),Fr=Ur(20),Tr=Ur(20);function Hr(r,n,t,e,o,u,f,i,a){var c,l,y,p,v,b,N,s,d;for(p=u,d=e[t],s=t,v=0;s>0;v++)l=Or*d|0,Tr[v]=d-Ir*l|0,d=e[s-1]+l,s-=1;if(d=mr(d,o),d-=8*ar(.125*d),d-=N=0|d,y=0,o>0?(N+=v=Tr[t-1]>>24-o,Tr[t-1]-=v<<24-o,y=Tr[t-1]>>23-o):0===o?y=Tr[t-1]>>23:d>=.5&&(y=2),y>0){for(N+=1,c=0,v=0;v<t;v++)s=Tr[v],0===c?0!==s&&(c=1,Tr[v]=16777216-s):Tr[v]=16777215-s;if(o>0)switch(o){case 1:Tr[t-1]&=8388607;break;case 2:Tr[t-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=mr(1,o)))}if(0===d){for(s=0,v=t-1;v>=u;v--)s|=Tr[v];if(0===s){for(b=1;0===Tr[u-b];b++);for(v=t+1;v<=t+b;v++){for(a[i+v]=jr[f+v],l=0,s=0;s<=i;s++)l+=r[s]*a[i+(v-s)];e[v]=l}return Hr(r,n,t+=b,e,o,u,f,i,a)}}if(0===d)for(t-=1,o-=24;0===Tr[t];)t-=1,o-=24;else(d=mr(d,-o))>=Ir?(l=Or*d|0,Tr[t]=d-Ir*l|0,o+=24,Tr[t+=1]=l):Tr[t]=0|d;for(l=mr(1,o),v=t;v>=0;v--)e[v]=l*Tr[v],l*=Or;for(v=t;v>=0;v--){for(l=0,b=0;b<=p&&b<=t-v;b++)l+=gr[b]*e[v+b];Fr[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Fr[v];for(n[0]=0===y?l:-l,l=Fr[0]-l,v=1;v<=t;v++)l+=Fr[v];return n[1]=0===y?l:-l,7&N}function Gr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Sr[a]=c<0?0:jr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Sr[f+(a-c)];Er[a]=o}return Hr(r,n,4,Er,i,4,u,f,Sr)}var Pr=Math.round;function xr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(B(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(B(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Lr=1.5707963267341256,Mr=6077100506506192e-26,Vr=2*Mr,Wr=3*Mr,kr=4*Mr,Yr=[0,0,0],qr=[0,0];function Cr(r,n){var t,e,o,u,f,i,a;if((o=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?xr(r,o,n):o<=1073928572?r>0?(a=r-Lr,n[0]=a-Mr,n[1]=a-n[0]-Mr,1):(a=r+Lr,n[0]=a+Mr,n[1]=a-n[0]+Mr,-1):r>0?(a=r-2*Lr,n[0]=a-Vr,n[1]=a-n[0]-Vr,2):(a=r+2*Lr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?xr(r,o,n):r>0?(a=r-3*Lr,n[0]=a-Wr,n[1]=a-n[0]-Wr,3):(a=r+3*Lr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-3):1075388923===o?xr(r,o,n):r>0?(a=r-4*Lr,n[0]=a-kr,n[1]=a-n[0]-kr,4):(a=r+4*Lr,n[0]=a+kr,n[1]=a-n[0]+kr,-4);if(o<1094263291)return xr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Z[0]=r,$[X]}(r),a=ur(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Yr[f]=0|a,a=16777216*(a-Yr[f]);for(Yr[2]=a,u=3;0===Yr[u-1];)u-=1;return i=Gr(Yr,qr,e,u),r<0?(n[0]=-qr[0],n[1]=-qr[1],-i):(n[0]=qr[0],n[1]=qr[1],i)}var zr=[0,0];function Br(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:D(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,zr)){case 0:return D(zr[0],zr[1]);case 1:return-K(zr[0],zr[1]);case 2:return-D(zr[0],zr[1]);default:return K(zr[0],zr[1])}}var Dr=[0,0];function Jr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:K(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,Dr)){case 0:return K(Dr[0],Dr[1]);case 1:return D(Dr[0],Dr[1]);case 2:return-K(Dr[0],Dr[1]);default:return-D(Dr[0],Dr[1])}}var Kr=3.141592653589793;function Qr(r){var n,t;return y(r)||b(r)?NaN:0===(n=wr(t=r%2))||1===n?dr(0,t):n<.25?Jr(Kr*t):n<.75?dr(Br(Kr*(n=.5-n)),t):n<1.25?(t=dr(1,t)-t,Jr(Kr*t)):n<1.75?-dr(Br(Kr*(n-=1.5)),t):(t-=dr(2,t),Jr(Kr*t))}function Rr(r,n,t){var e;return y(r)||y(n)||y(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+Qr(e)/Kr)/2}function Xr(r){return function(){return r}}function Zr(r){return y(r)?Xr(NaN):function(n){return y(n)?NaN:n<r?0:1}}function $r(r,n,t){var e,o,u,f;for(f=1,e=n-t,o=n+t;f<1e4;){if(u=(e+o)/2,o-e<1e-12)return u;r>Rr(u,n,t)?e=u:o=u,f+=1}return u}function rn(r,n,t){return y(n)||y(t)||y(r)||t<0||r<0||r>1?NaN:0===t?n:$r(r,n,t)}function nn(r){return y(r)?Xr(NaN):function(n){return y(n)||n<0||n>1?NaN:r}}function tn(r,n){return y(r)||y(n)||n<0?Xr(NaN):0===n?nn(r):function(t){return y(t)||t<0||t>1?NaN:$r(t,r,n)}}l((function(r,n){return y(r)||y(n)?NaN:r<n?0:1}),"factory",Zr),l(Rr,"factory",(function(r,n){return y(r)||y(n)||n<0?Xr(NaN):0===n?Zr(r):function(t){var e;return y(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+Qr(e)/Kr)/2}})),l((function(r,n){return y(r)||r<0||r>1?NaN:n}),"factory",nn),l(rn,"factory",tn),r.default=rn,r.factory=tn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).quantile={});
//# sourceMappingURL=browser.js.map
