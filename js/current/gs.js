(function(){function m(c,b){b.sa=function(b){var g=a.map(function(a){return c(a)}).concat(l);b=b||{};b.G=b.G||{};if(b.G.sha256)return b.sha256;b.G.sha256=!0;for(var h=0;h<g.length;++h)g[h](b);return b.sha256}}function l(a){function b(a,b,c){for(var e,f,g,d,p,r,v,h,x,t,l,m,n,B=c.length();64<=B;){for(p=0;16>p;++p)b[p]=c.getInt32();for(;64>p;++p)e=b[p-2],e=(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10,f=b[p-15],f=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,b[p]=e+b[p-7]+f+b[p-16]|0;r=a.H;v=a.I;h=a.J;x=a.K;t=a.L;l=a.M;
m=a.N;n=a.O;for(p=0;64>p;++p)e=(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7),g=m^t&(l^m),f=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),d=r&v|h&(r^v),e=n+e+g+k[p]+b[p],f+=d,n=m,m=l,l=t,t=x+e|0,x=h,h=v,v=r,r=e+f|0;a.H=a.H+r|0;a.I=a.I+v|0;a.J=a.J+h|0;a.K=a.K+x|0;a.L=a.L+t|0;a.M=a.M+l|0;a.N=a.N+m|0;a.O=a.O+n|0;B-=64}}var f=a.ka=a.ka||{};a.P=a.P||{};a.P.Ha=a.P.Ha||{};a.P.ka=a.P.Ha.ka=f;f.create=function(){h||(g=String.fromCharCode(128),g+=a.A.ob(),k=[1116352408,1899447441,3049323471,3921009573,961987163,
1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,
958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],h=!0);var f=null,l=a.A.createBuffer(),m=Array(64),e={algorithm:"sha256",Ja:64,Pb:32,ua:0,j:null,Ta:8,start:function(){e.ua=0;e.j=e.Xb=[];for(var b=e.Ta/4,g=0;g<b;++g)e.j.push(0);l=a.A.createBuffer();f={H:1779033703,I:3144134277,J:1013904242,K:2773480762,L:1359893119,M:2600822924,N:528734635,O:1541459225};return e}};e.start();e.update=function(g,h){"utf8"===h&&(g=a.A.ca(g));
var d=g.length;e.ua+=d;for(var d=[d/4294967296>>>0,d>>>0],p=e.j.length-1;0<=p;--p)e.j[p]+=d[1],d[1]=d[0]+(e.j[p]/4294967296>>>0),e.j[p]>>>=0,d[0]=d[1]/4294967296>>>0;l.D(g);b(f,m,l);(2048<l.read||0===l.length())&&l.compact();return e};e.digest=function(){var h=a.A.createBuffer();h.D(l.oa());h.D(g.substr(0,e.Ja-(e.j[e.j.length-1]+e.Ta&e.Ja-1)));a.A.createBuffer();for(var k,d,p=8*e.j[0],r=0;r<e.j.length;++r)k=8*e.j[r+1],d=k/4294967296>>>0,p+=d,h.w(p>>>0),p=k;k={H:f.H,I:f.I,J:f.J,K:f.K,L:f.L,M:f.M,N:f.N,
O:f.O};b(k,m,h);h=a.A.createBuffer();h.w(k.H);h.w(k.I);h.w(k.J);h.w(k.K);h.w(k.L);h.w(k.M);h.w(k.N);h.w(k.O);return h};return e};var g=null,h=!1,k=null}if("function"!==typeof define)if("object"===typeof module&&module.sa){var n=!0;define=function(a,b){b(require,module)}}else return"undefined"===typeof forge&&(forge={}),l(forge);var a,k=define;define=function(c,b){a="string"===typeof c?b.slice(2):c.slice(2);if(n)return delete define,k.apply(null,Array.prototype.slice.call(arguments,0));define=k;return define.apply(null,
Array.prototype.slice.call(arguments,0))};define(["require","module","./util"],function(){m.apply(null,Array.prototype.slice.call(arguments,0))})})();(function(){function m(c,b){b.sa=function(b){var g=a.map(function(a){return c(a)}).concat(l);b=b||{};b.G=b.G||{};if(b.G.util)return b.util;b.G.util=!0;for(var h=0;h<g.length;++h)g[h](b);return b.util}}function l(a){function b(d,a,b){var e=null;"undefined"===typeof b&&(b=["web","flash"]);var c,f=!1,g=null,h;for(h in b){c=b[h];try{if("flash"===c||"both"===c){if(null===a[0])throw Error("Flash local storage not available.");e=d.apply(this,a);f="flash"===c}if("web"===c||"both"===c)a[0]=localStorage,e=
d.apply(this,a),f=!0}catch(k){g=k}if(f)break}if(!f)throw g;return e}function f(d,a){m(d,a,null)}function g(d,a,b){var e=l(d,a);if(null!==e&&b in e){delete e[b];b=!0;for(var c in e){b=!1;break}b&&(e=null);m(d,a,e)}}function h(d,a,b){d=l(d,a);null!==d&&(d=b in d?d[b]:null);return d}function k(d,a,b,e){var c=l(d,a);null===c&&(c={});c[b]=e;m(d,a,c)}function l(d,a){if(!d)throw Error("WebStorage not available.");var b=d.getItem(a);if(d.Tb)if(null===b.ja){if(b.error){var c=Error(b.error.message);c.id=b.error.id;
c.name=b.error.name;throw c;}b=null}else b=b.ja;null!==b&&(b=JSON.parse(e.ra(b)));return b}function m(d,a,b){if(!d)throw Error("WebStorage not available.");null===b?d=d.removeItem(a):(b=e.ba(JSON.stringify(b)),d=d.setItem(a,b));if("undefined"!==typeof d&&!0!==d.ja)throw a=Error(d.error.message),a.id=d.error.id,a.name=d.error.name,a;}function n(d){this.data="";this.read=0;if("string"===typeof d)this.data=d;else if(e.ga(d)||e.ha(d)){d=new Uint8Array(d);try{this.data=String.fromCharCode.apply(null,d)}catch(a){for(var b=
0;b<d.length;++b)this.ia(d[b])}}else if(d instanceof n||"object"===typeof d&&"string"===typeof d.data&&"number"===typeof d.read)this.data=d.data,this.read=d.read;this.Z=0}var e=a.A=a.A||{};(function(){if("undefined"!==typeof process&&process.V)e.V=process.V,e.setImmediate="function"===typeof setImmediate?setImmediate:e.V;else if("function"===typeof setImmediate)e.setImmediate=function(){return setImmediate.apply(void 0,arguments)},e.V=function(d){return setImmediate(d)};else{e.setImmediate=function(d){setTimeout(d,
0)};if("undefined"!==typeof window&&"function"===typeof window.postMessage){var d=[];e.setImmediate=function(a){d.push(a);1===d.length&&window.postMessage("forge.setImmediate","*")};window.addEventListener("message",function(a){a.source===window&&"forge.setImmediate"===a.data&&(a.stopPropagation(),a=d.slice(),d.length=0,a.forEach(function(d){d()}))},!0)}if("undefined"!==typeof MutationObserver){var a=Date.now(),b=!0,c=document.createElement("div"),d=[];(new MutationObserver(function(){var a=d.slice();
d.length=0;a.forEach(function(d){d()})})).observe(c,{attributes:!0});var f=e.setImmediate;e.setImmediate=function(e){15<Date.now()-a?(a=Date.now(),f(e)):(d.push(e),1===d.length&&c.setAttribute("a",b=!b))}}e.V=e.setImmediate}})();e.isArray=Array.isArray||function(d){return"[object Array]"===Object.prototype.toString.call(d)};e.ga=function(d){return"undefined"!==typeof ArrayBuffer&&d instanceof ArrayBuffer};e.ha=function(d){return d&&e.ga(d.buffer)&&void 0!==d.byteLength};e.Xa=n;e.h=n;e.h.prototype.Ca=
function(d){this.Z+=d;4096<this.Z&&(this.Z=0)};e.h.prototype.length=function(){return this.data.length-this.read};e.h.prototype.Ra=function(){return 0>=this.length()};e.h.prototype.ia=function(d){return this.D(String.fromCharCode(d))};e.h.prototype.Na=function(d,a){d=String.fromCharCode(d);for(var b=this.data;0<a;)a&1&&(b+=d),a>>>=1,0<a&&(d+=d);this.data=b;this.Ca(a);return this};e.h.prototype.D=function(d){this.data+=d;this.Ca(d.length);return this};e.h.prototype.w=function(d){return this.D(String.fromCharCode(d>>
24&255)+String.fromCharCode(d>>16&255)+String.fromCharCode(d>>8&255)+String.fromCharCode(d&255))};e.h.prototype.getInt16=function(){var d=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);this.read+=2;return d};e.h.prototype.getInt32=function(){var d=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);this.read+=4;return d};e.h.prototype.ea=function(d){var a;d?(d=Math.min(this.length(),
d),a=this.data.slice(this.read,this.read+d),this.read+=d):0===d?a="":(a=0===this.read?this.data:this.data.slice(this.read),this.clear());return a};e.h.prototype.oa=function(d){return"undefined"===typeof d?this.data.slice(this.read):this.data.slice(this.read,this.read+d)};e.h.prototype.compact=function(){0<this.read&&(this.data=this.data.slice(this.read),this.read=0);return this};e.h.prototype.clear=function(){this.data="";this.read=0;return this};e.h.prototype.truncate=function(d){d=Math.max(0,this.length()-
d);this.data=this.data.substr(this.read,d);this.read=0;return this};e.h.prototype.Wa=function(){for(var d="",a=this.read;a<this.data.length;++a){var b=this.data.charCodeAt(a);16>b&&(d+="0");d+=b.toString(16)}return d};e.h.prototype.toString=function(){return e.La(this.oa())};e.i=function(d,a){a=a||{};this.read=a.ac||0;this.Pa=a.Pa||1024;var b=e.ga(d),c=e.ha(d);b||c?(this.data=b?new DataView(d):new DataView(d.buffer,d.byteOffset,d.byteLength),this.write="writeOffset"in a?a.Kb:this.data.byteLength):
(this.data=new DataView(new ArrayBuffer(0)),this.write=0,null!==d&&void 0!==d&&this.D(d),"writeOffset"in a&&(this.write=a.Kb))};e.i.prototype.length=function(){return this.write-this.read};e.i.prototype.Ra=function(){return 0>=this.length()};e.i.prototype.s=function(d){var a;this.length()>=d||(a=Math.max(a||this.Pa,d),d=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength),a=new Uint8Array(this.length()+a),a.set(d),this.data=new DataView(a.buffer))};e.i.prototype.ia=function(d){this.s(1);
this.data.setUint8(this.write++,d);return this};e.i.prototype.Na=function(d,a){this.s(a);for(var b=0;b<a;++b)this.data.setUint8(d);return this};e.i.prototype.D=function(d,a){if(e.ha(d)){var b=new Uint8Array(d.buffer,d.byteOffset,d.byteLength),c=b.byteLength-b.byteOffset;this.s(c);var f=new Uint8Array(this.data.buffer,this.write);f.set(b);this.write+=c;return this}if(e.ga(d))return b=new Uint8Array(d),this.s(b.byteLength),f=new Uint8Array(this.data.buffer),f.set(b,this.write),this.write+=b.byteLength,
this;if(d instanceof e.i||"object"===typeof d&&"number"===typeof d.read&&"number"===typeof d.write&&e.ha(d.data))return b=new Uint8Array(d.data.byteLength,d.read,d.length()),this.s(b.byteLength),f=new Uint8Array(d.data.byteLength,this.write),f.set(b),this.write+=b.byteLength,this;d instanceof e.h&&(d=d.data,a="binary");a=a||"binary";if("string"===typeof d){if("hex"===a)return this.s(Math.ceil(d.length/2)),b=new Uint8Array(this.data.buffer,this.write),this.write+=e.l.fa.decode(d,b,this.write),this;
if("base64"===a)return this.s(3*Math.ceil(d.length/4)),b=new Uint8Array(this.data.buffer,this.write),this.write+=e.l.aa.decode(d,b,this.write),this;"utf8"===a&&(d=e.ca(d),a="binary");if("binary"===a||"raw"===a)return this.s(d.length),b=new Uint8Array(this.data.buffer,this.write),this.write+=e.l.raw.decode(b),this;if("utf16"===a)return this.s(2*d.length),b=new Uint16Array(this.data.buffer,this.write),this.write+=e.text.ma.encode(b),this;throw Error("Invalid encoding: "+a);}throw Error("Invalid parameter: "+
d);};e.i.prototype.w=function(d){this.s(4);this.data.setInt32(this.write,d);this.write+=4;return this};e.i.prototype.getInt16=function(){var d=this.data.getInt16(this.read);this.read+=2;return d};e.i.prototype.getInt32=function(){var d=this.data.getInt32(this.read);this.read+=4;return d};e.i.prototype.ea=function(d){var a;d?(d=Math.min(this.length(),d),a=this.data.slice(this.read,this.read+d),this.read+=d):0===d?a="":(a=0===this.read?this.data:this.data.slice(this.read),this.clear());return a};e.i.prototype.oa=
function(d){return"undefined"===typeof d?this.data.slice(this.read):this.data.slice(this.read,this.read+d)};e.i.prototype.compact=function(){if(0<this.read){var d=new Uint8Array(this.data.buffer,this.read),a=new Uint8Array(d.byteLength);a.set(d);this.data=new DataView(a);this.write-=this.read;this.read=0}return this};e.i.prototype.clear=function(){this.data=new DataView(new ArrayBuffer(0));this.read=this.write=0;return this};e.i.prototype.truncate=function(d){this.write=Math.max(0,this.length()-d);
this.read=Math.min(this.read,this.write);return this};e.i.prototype.Wa=function(){for(var d="",a=this.read;a<this.data.byteLength;++a){var b=this.data.getUint8(a);16>b&&(d+="0");d+=b.toString(16)}return d};e.i.prototype.toString=function(d){var a=new Uint8Array(this.data,this.read,this.length());d=d||"utf8";if("binary"===d||"raw"===d)return e.l.raw.encode(a);if("hex"===d)return e.l.fa.encode(a);if("base64"===d)return e.l.aa.encode(a);if("utf8"===d)return e.text.ya.decode(a);if("utf16"===d)return e.text.ma.decode(a);
throw Error("Invalid encoding: "+d);};e.createBuffer=function(d,a){void 0!==d&&"utf8"===(a||"raw")&&(d=e.ca(d));return new e.Xa(d)};e.ob=function(){for(var d=String.fromCharCode(0),a=64,b="";0<a;)a&1&&(b+=d),a>>>=1,0<a&&(d+=d);return b};e.dc=function(d,a,b){for(var e="",c,f="",g=0,h=0;0<b;--b,++g)c=d.charCodeAt(g)^a.charCodeAt(g),10<=h&&(e+=f,f="",h=0),f+=String.fromCharCode(c),++h;return e+f};e.ub=function(d){var a="",b=0;d.length&1&&(b=1,a+=String.fromCharCode(parseInt(d[0],16)));for(;b<d.length;b+=
2)a+=String.fromCharCode(parseInt(d.substr(b,2),16));return a};e.Ka=function(d){return e.createBuffer(d).Wa()};e.Ub=function(d){return String.fromCharCode(d>>24&255)+String.fromCharCode(d>>16&255)+String.fromCharCode(d>>8&255)+String.fromCharCode(d&255)};var u=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];e.ba=function(d){for(var a=
"",b,e,c,f=0;f<d.length;)b=d.charCodeAt(f++),e=d.charCodeAt(f++),c=d.charCodeAt(f++),a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b>>2),a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((b&3)<<4|e>>4),isNaN(e)?a+="==":(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((e&15)<<2|c>>6),a+=isNaN(c)?"=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c&63));return""+a};e.ra=function(d){d=
d.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var a="",b,e,c,f,g=0;g<d.length;)b=u[d.charCodeAt(g++)-43],e=u[d.charCodeAt(g++)-43],c=u[d.charCodeAt(g++)-43],f=u[d.charCodeAt(g++)-43],a+=String.fromCharCode(b<<2|e>>4),64!==c&&(a+=String.fromCharCode((e&15)<<4|c>>2),64!==f&&(a+=String.fromCharCode((c&3)<<6|f)));return a};e.ca=function(d){return unescape(encodeURIComponent(d))};e.La=function(d){return decodeURIComponent(escape(d))};e.l={raw:{},fa:{},aa:{}};e.l.raw.encode=function(d){return String.fromCharCode.apply(null,
d)};e.l.raw.decode=function(d,a,b){var e=a;e||(e=new Uint8Array(d.length));for(var c=b=b||0,f=0;f<d.length;++f)e[c++]=d.charCodeAt(f);return a?c-b:e};e.l.fa.encode=e.Ka;e.l.fa.decode=function(d,a,b){var e=a;e||(e=new Uint8Array(Math.ceil(d.length/2)));b=b||0;var c=0,f=b;d.length&1&&(c=1,e[f++]=parseInt(d[0],16));for(;c<d.length;c+=2)e[f++]=parseInt(d.substr(c,2),16);return a?f-b:e};e.l.aa.encode=function(d,a){for(var b="",e="",c,f,g,h=0;h<d.byteLength;)c=d[h++],f=d[h++],g=d[h++],b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c>>
2),b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((c&3)<<4|f>>4),isNaN(f)?b+="==":(b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt((f&15)<<2|g>>6),b+=isNaN(g)?"=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g&63)),a&&b.length>a&&(e+=b.substr(0,a)+"\r\n",b=b.substr(a));return e+b};e.l.aa.decode=function(d,a,b){var e=a;e||(e=new Uint8Array(3*Math.ceil(d.length/4)));d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"");b=b||
0;for(var c,f,g,h,k=0,l=b;k<d.length;)c=u[d.charCodeAt(k++)-43],f=u[d.charCodeAt(k++)-43],g=u[d.charCodeAt(k++)-43],h=u[d.charCodeAt(k++)-43],e[l++]=c<<2|f>>4,64!==g&&(e[l++]=(f&15)<<4|g>>2,64!==h&&(e[l++]=(g&3)<<6|h));return a?l-b:e.subarray(0,l)};e.text={ya:{},ma:{}};e.text.ya.encode=function(d,a,b){d=e.ca(d);var c=a;c||(c=new Uint8Array(d.length));for(var f=b=b||0,g=0;g<d.length;++g)c[f++]=d.charCodeAt(g);return a?f-b:c};e.text.ya.decode=function(d){return e.La(String.fromCharCode.apply(null,d))};
e.text.ma.encode=function(d,a,b){var e=a;e||(e=new Uint8Array(2*d.length));for(var c=new Uint16Array(e.buffer),f=b=b||0,g=b,h=0;h<d.length;++h)c[g++]=d.charCodeAt(h),f+=2;return a?f-b:e};e.text.ma.decode=function(a){return String.fromCharCode.apply(null,new Uint16Array(a.buffer))};e.nb=function(a){var b;return b=e.ra(a.nb(e.ba(b)).ja)};e.wb=function(a){a=a.wb(e.ba(void 0)).ja;return null===a?null:e.ra(a)};e.setItem=function(a,e,c,f,g){b(k,arguments,g)};e.getItem=function(a,e,c,f){return b(h,arguments,
f)};e.removeItem=function(a,e,c,f){b(g,arguments,f)};e.Nb=function(a,e,c){b(f,arguments,c)};e.Zb=function(a){var b=/^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;b.lastIndex=0;b=b.exec(a);if(a=null===b?null:{pb:a,scheme:b[1],host:b[2],port:b[3],path:b[4]})a.U=a.host,a.port?80!==a.port&&"http"===a.scheme?a.U+=":"+a.port:443!==a.port&&"https"===a.scheme&&(a.U+=":"+a.port):"http"===a.scheme?a.port=80:"https"===a.scheme&&(a.port=443),a.pb=a.scheme+"://"+a.U;return a};var z=null;e.sb=function(a){function b(a){var d=
{};a=a.split("&");for(var e=0;e<a.length;e++){var c=a[e].indexOf("="),f;0<c?(f=a[e].substring(0,c),c=a[e].substring(c+1)):(f=a[e],c=null);f in d||(d[f]=[]);f in Object.prototype||null===c||d[f].push(unescape(c))}return d}"undefined"===typeof a?(null===z&&(z="undefined"!==typeof window&&window.location&&window.location.search?b(window.location.search.substring(1)):{}),a=z):a=b(a);return a};e.Bb=function(a){var b=a,c="",f=a.indexOf("?");0<f&&(b=a.substring(0,f),c=a.substring(f+1));a=b.split("/");0<
a.length&&""===a[0]&&a.shift();f=""===c?{}:e.sb(c);return{Cb:b,Fb:c,path:a,query:f}};e.Wb=function(a){var b=e.Bb(a),c={path:b.Cb,query:b.Fb,qb:function(a){return"undefined"===typeof a?b.path:b.path[a]},rb:function(a,d){var e;"undefined"===typeof a?e=b.query:(e=b.query[a])&&"undefined"!==typeof d&&(e=e[d]);return e},Sb:function(a,d){var b=c.rb(a);return b?b[b.length-1]:d}};return c};e.Vb=function(a,b,e){a=jQuery.isArray(a)?a.join("/"):a;b=jQuery.Yb(b||{});e=e||"";return a+(0<b.length?"?"+b:"")+(0<
e.length?"#"+e:"")};e.bc=function(a,b,e){if("object"===typeof a&&null!==a)for(var c=0,f=b.length;c<f;){var g=b[c++];if(c==f)a[g]=e;else{var h=g in a;if(!h||h&&"object"!==typeof a[g]||h&&null===a[g])a[g]={};a=a[g]}}};e.qb=function(a,b,e){for(var c=0,f=b.length,g=!0;g&&c<f&&"object"===typeof a&&null!==a;){var h=b[c++];(g=h in a)&&(a=a[h])}return g?a:e};e.Ob=function(a,b){if("object"===typeof a&&null!==a)for(var e=0,c=b.length;e<c;){var f=b[e++];if(e==c)delete a[f];else{if(!(f in a)||"object"!==typeof a[f]||
null===a[f])break;a=a[f]}}};e.Ra=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};e.format=function(a){var b=/%./g,e,c,f=0,g=[];for(c=0;e=b.exec(a);)switch(c=a.substring(c,b.lastIndex-2),0<c.length&&g.push(c),c=b.lastIndex,e=e[0][1],e){case "s":case "o":f<arguments.length?g.push(arguments[f++ +1]):g.push("<?>");break;case "%":g.push("%");break;default:g.push("<%"+e+"?>")}g.push(a.substring(c));return g.join("")};e.da=function(a,b,e,c){var f=isNaN(b=Math.abs(b))?2:b;b=void 0===
e?",":e;c=void 0===c?".":c;e=0>a?"-":"";var g=parseInt(a=Math.abs(+a||0).toFixed(f),10)+"",h=3<g.length?g.length%3:0;return e+(h?g.substr(0,h)+c:"")+g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+c)+(f?b+Math.abs(a-g).toFixed(f).slice(2):"")};e.Rb=function(a){return a=1073741824<=a?e.da(a/1073741824,2,".","")+" GiB":1048576<=a?e.da(a/1048576,2,".","")+" MiB":1024<=a?e.da(a/1024,0)+" KiB":e.da(a,0)+" bytes"};e.Lb=function(a){return-1!==a.indexOf(".")?e.ib(a):-1!==a.indexOf(":")?e.jb(a):null};e.ib=function(a){a=
a.split(".");if(4!==a.length)return null;for(var b=e.createBuffer(),c=0;c<a.length;++c){var f=parseInt(a[c],10);if(isNaN(f))return null;b.ia(f)}return b.ea()};e.jb=function(a){var b=0;a=a.split(":").filter(function(a){0===a.length&&++b;return!0});for(var c=2*(8-a.length+b),f=e.createBuffer(),g=0;8>g;++g)if(a[g]&&0!==a[g].length){var h=e.ub(a[g]);2>h.length&&f.ia(0);f.D(h)}else f.Na(0,c),c=0;return f.ea()};e.Mb=function(a){return 4===a.length?e.kb(a):16===a.length?e.lb(a):null};e.kb=function(a){if(4!==
a.length)return null;for(var b=[],e=0;e<a.length;++e)b.push(a.charCodeAt(e));return b.join(".")};e.lb=function(a){if(16!==a.length)return null;for(var b=[],c=[],f=0,g=0;g<a.length;g+=2){for(var h=e.Ka(a[g]+a[g+1]);"0"===h[0]&&"0"!==h;)h=h.substr(1);if("0"===h){var k=c[c.length-1],l=b.length;k&&l===k.end+1?(k.end=l,k.end-k.start>c[f].end-c[f].start&&(f=c.length-1)):c.push({start:l,end:l})}b.push(h)}0<c.length&&(a=c[f],0<a.end-a.start&&(b.splice(a.start,a.end-a.start+1,""),0===a.start&&b.unshift(""),
7===a.end&&b.push("")));return b.join(":")};e.Qb=function(a,b){function c(a,d,k){if(0===d){var l=Math.floor(a.reduce(function(a,b){return a+b},0)/a.length);e.B=Math.max(1,l);URL.revokeObjectURL(h);b(null,e.B)}else f(k,function(b,e){a.push(g(k,e));c(a,d-1,k)})}function f(a,b){for(var e=[],d=[],c=0;c<a;++c){var g=new Worker(h);g.addEventListener("message",function(c){d.push(c.data);if(d.length===a){for(c=0;c<a;++c)e[c].terminate();b(null,d)}});e.push(g)}for(c=0;c<a;++c)e[c].postMessage(c)}function g(a,
b){for(var c=[],e=0;e<a;++e)for(var d=b[e],f=c[e]=[],h=0;h<a;++h)if(e!==h){var k=b[h];(d.R>k.R&&d.R<k.Ma||k.R>d.R&&k.R<d.Ma)&&f.push(h)}return c.reduce(function(a,b){return Math.max(a,b.length)},0)}"function"===typeof a&&(b=a,a={});a=a||{};if("cores"in e&&!a.update)return b(null,e.B);if("undefined"!==typeof navigator&&"hardwareConcurrency"in navigator&&0<navigator.tb)return e.B=navigator.tb,b(null,e.B);if("undefined"===typeof Worker)return e.B=1,b(null,e.B);if("undefined"===typeof Blob)return e.B=
2,b(null,e.B);var h=URL.createObjectURL(new Blob(["(",function(){self.addEventListener("message",function(){for(var a=Date.now(),b=a+4;Date.now()<b;);self.postMessage({R:a,Ma:b})})}.toString(),")()"],{type:"application/javascript"}));c([],5,16)}}if("function"!==typeof define)if("object"===typeof module&&module.sa){var n=!0;define=function(a,b){b(require,module)}}else return"undefined"===typeof forge&&(forge={}),l(forge);var a,k=define;define=function(c,b){a="string"===typeof c?b.slice(2):c.slice(2);
if(n)return delete define,k.apply(null,Array.prototype.slice.call(arguments,0));define=k;return define.apply(null,Array.prototype.slice.call(arguments,0))};define(["require","module"],function(){m.apply(null,Array.prototype.slice.call(arguments,0))})})();function q(m){m=forge.P.ka.create().update(m).digest(m).ea();return forge.A.ba(m)}function w(m,l){this.message=m;this.id=l;this.name="groupShareException"}function y(m,l){if(m==l)return!0;if("object"!==typeof l||"object"!==typeof m)return!1;if(Array.isArray(m)){if(!Array.isArray(l)||m.length!=l.length)return!1;for(var n=0;n<m.length;n++)if(!y(m[n],l[n]))return!1;return!0}if(Array.isArray(l)||Object.keys(m).length!=Object.keys(l).length)return!1;for(n in l)if(!y(m[n],l[n]))return!1;return!0}
function A(m,l){if("undefined"===typeof m)return l;if("object"!==typeof m)return m;if(Array.isArray(m)){var n=[];Array.isArray(l)&&(n=l,n.length=0);for(var a=0;a<m.length;a++)n.push(A(m[a]));return n}if("object"!==typeof l||Array.isArray(l))l={};n=Object.keys(l);for(a in m)if("$"!=a[0]){l[a]=A(m[a],l[a]);var k=n.indexOf(a);0<=k&&n.splice(k,1)}return l}
function C(){function m(a){if("object"!==typeof a)throw new w("Ileagel store",1);return new function(a){this.getall=function(c,g){for(var h in a)try{c(h,JSON.parse(a[h]))}catch(k){}g()};this.clear=function(){for(var c in a)delete a[c]};this.get=function(c){try{return JSON.parse(a[c])}catch(g){}};this.set=function(c,g){try{a[c]=JSON.stringify(g)}catch(h){}};this.del=function(c){delete a[c]};"function"===typeof a.getall&&(this.getall=function(c,g){a.getall(c,g)});"function"===typeof a.get&&(this.get=
function(c){a.get(c)});"function"===typeof a.set&&(this.set=function(c,g){a.set(c,g)});"function"===typeof a.del&&(this.del=function(c){a.del(c)});"function"===typeof a.clear&&(this.clear=function(){a.clear()})}(a)}function l(a){var b={reset:!0};b.clientId=a.clientId;b.clientOk=a.clientOk;b.collections=a.collections;b.gid=a.gid;b.gok=a.gok;b.interval=a.interval;if("gCode"in a){if(!a.gCode||4>a.gCode.length||/[^a-z0-9]/.test(a.gCode))return!1;b.gCode=a.gCode}if(!a.gName||3>a.gName.length||/[^A-Za-z0-9]/.test(a.gName))return!1;
b.gName=a.gName;return b}function n(){function c(b,c){if("#"!=b[0]&&"object"==typeof c)if(a.a.reset)a.c.del(b);else if(a.cache[b]=c,"d"in c){var f=c.d["@"];f in a.b&&a.T(f,c,!1)}}function b(){a.start(a.a.interval);a.wa();a.xb(!0)}a.c.set("#setup",a.a);a.ready=!0;a.Y();for(var f in a.a.collections){var g=a.a.collections[f];null===g||"object"!==typeof g?a.Y(f):a.Y(f,g.qa,g.pa,g.Ia,g.S,g.W)}a.c?a.c.getall(c,b):b()}var a=this;a.cc=0;a.cache={};a.Ab=0;a.va=!1;a.f=!1;a.o=!1;a.c=!1;a.b={};a.zb=14;a.$b=0;
a.ready=!1;a.tag=Date.now().toString();this.mb=function(){for(var c="",b=1;b<=a.zb;b++)c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[64*Math.random()|0];return c};this.fb=function(a,b,f){b in a||(a[b]=[]);a[b].push(f)};this.gb=function(c){for(var b in c)b in a.cache&&(a.cache[b].callback(c[b]),delete a.cache[b])};this.Ya=function(c,b){b.tmp||a.Za(c,b.v,b.g);var f=b.d["@"];if(f in a.b){var g=b.lt;if(!(c in a.cache)){if(!Number.isInteger(g)||1>g)g=1;a.cache[c]={lt:g,d:{"@":f,
_oid:c},md:{}}}g=a.cache[c];g.jd||(g.jd={});for(var h in b.d)h.length&&"_"!==h[0]&&(g.d[h]=b.d[h],g.jd[h]=JSON.stringify(b.d[h]));for(h in b.md)g.md[h]=b.md[h];b.v&&(g.v=b.v);b.g&&(g.g=b.g);b.del?g.del=!0:delete g.del;a.c&&(b.del?a.c.del(c):b.tmp||a.c.set(c,g));g._lupdate=!1;a.T(f,g,!0)}else console.log("Collection missing: "+f)};this.na=function(c,b){var f=b.d["@"];if(f in a.b){var g={lt:b.lt};b.md&&(g.md=b.md);b.del&&(g.del=b.del);b.v&&(g.v=b.v);b.g&&(g.g=b.g);for(var h in b.d)!h.length||"_"===
h[0]||b.jd&&h in b.jd&&b.jd[h]===JSON.stringify(b.d[h])||("d"in g||(g.d={}),g.d[h]=b.d[h]);a.ab(f,c,g)}else console.log("Collection missing: "+f)};this.Db=function(c){c.gid&&c.gok&&(a.a.gid=c.gid,a.a.gok=c.gok,n());c.stime&&(a.va=c.stime-Date.now())};this.Eb=function(c){var b={};if(c)try{var f=JSON.parse(c);if(a.Ea&&f.admin)"function"===typeof a.Ga&&a.Ga("_admin_",f,!0,!1);else{for(var g in f){var h=f[g],k=h.sid;k&&a.fb(b,k,g);var l=a.cache[g];!l||!l.lt||h.lt&&l.lt===h.lt?a.Ya(g,h):a.na(g,l)}Object.keys(b).length&&
a.gb(b)}}catch(m){console.log("Backend Error: "+m)}else a.wa()};this.Aa=function(c){c&&(a.xa=c);a.xa&&a.o&&(a.f.m("sync",{obj:a.xa}),a.xa=!1)};this.$a=function(){a.Fa&&a.o&&(a.f.m("admin",{obj:a.Fa}),a.Fa=!1)};this.za=function(c,b,f){(c=a.b[c].W)&&a.o&&a.f.m("search",{key:c,id:b,obj:f})};this.Za=function(c,b,f){a.o&&a.f.m("ok",{id:c,obj:{v:b,g:f}})};this.ab=function(c,b,f){(c=a.b[c].S)&&a.o&&a.f.m("write",{key:c,id:b,obj:f})};this.Hb=function(){a.Oa&&a.o&&(a.f.m("geo",{geo:a.Oa}),a.Oa=!1)};this.Ib=
function(){a.Sa&&a.o&&(a.f.m("lang",{lang:a.Sa}),a.Sa=!1)};this.vb=function(){a.Qa=!0;a.o&&a.f.m("hold",{state:a.Qa})};this.start=function(c){c||(c=3E3);a.Va=!0;a.Jb=c;a.o&&a.f.m("start",{interval:c})};this.stop=function(){a.Va=!1;a.o&&a.f.m("stop",{})};this.search=function(c,b,f){var g,h;a.Ab++;g=a.mb();f||(f="");if(!(f in a.b))throw new w("Collection missing during search: "+f);if("function"!==typeof b)throw new w("search: callback missing");if("object"!==typeof c)throw new w("search: spec missing");
a.cache[g]={tmp:!0,spec:c,callback:b};h={tmp:!0,spec:c};a.za(f,g,h);return function(b){h.choose=b;a.za(f,g,h)}};this.la=function(c,b){a.f=c;a.ta=b;if(c&&a.ta){a.o=!0;var f={};f.reset=!0===a.a.reset;f.srvUrl=a.f.F;f.cid=a.a.clientId;f.cok=a.a.clientOk;f.gid=a.a.gid;f.gok=a.a.gok;f.gName=a.a.gName;f.gCode=a.a.gCode;f.admin=a.Ea;a.f.m("init",f);a.Hb();a.Ib();a.$a();a.Aa();a.Qa&&a.vb();a.Va&&a.start(a.Jb);for(var g in a.cache)"*"!==g&&(f=a.cache[g],f._lupdate&&a.na(g,f))}};this.wa=function(){var c={},
b;for(b in a.cache){var f=a.cache[b],g=f.d["@"];if(g in a.b&&(g=a.b[g].W))if(g in c||(c[g]={}),"*"===b)c[g]["*"]={};else{var h={lt:f.lt};f.g&&(h.g=f.g);f.v&&(h.v=f.v);c[g][b]=h}}a.Aa(c)};this.terminate=function(){a.o&&a.f.m("delete",{});a.f=void 0};this.addCollection=this.Y=function(c,b,f,g,h,k){if(!a.ready)throw new w("addCollection while not ready");c||(c="");b||(b=a.CTYPE_UNNAMED);h&&(h=c+h,k=q(h));g||(g=c);f={qa:b,pa:f,Ia:g};h||k?(f.W=k,h&&(f.S=h)):(f.S=q(c+a.a.gid),f.W=q(f.S));a.b[c]=f;b===a.CTYPE_UNNAMED&&
a.Gb(c);for(var l in a.cache)"*"!=l&&(b=a.cache[l],"d"in b&&c==b.d["@"]&&a.T(c,b,!1))};this.clear=function(){a.c.clear()};this.getGroupName=this.Ba=function(){if(a.a)return a.a.gName;if(a.c)return a.c.get("#setup").gName};this.init=function(c,b,f){var g;if("function"!=typeof b)throw new w("init is missing arguments");"object"!=typeof c&&(c={});var h=c.store;"object"!==typeof h&&(h={});a.cache={};a.b={};a.ready=!1;a.Ga=f;a.xb=b;a.c=m(h);c.reset||(a.a=a.c.get("#setup"),g=a.c.get("#instance"));if(!a.a||
!g||!a.a.gName){if("object"!=typeof c)return!1;a.a=l(c);a.c.set("#setup",a.a);if(!a.a||!a.a.gName)return!1}else if(31E3>Date.now()-g.last&&a.tag!=g.tag)throw new w("A different client is already using this clientStore","plural");a.c.set("#instance",{tag:a.tag,last:Date.now()});window.addEventListener("beforeunload",function(){var b=a.c.get("#instance");a.tag!=b.tag?console.log("Two instances of the same client at once!"):a.c.set("#instance",{tag:0,last:0})});setInterval(function(){var b=a.c.get("#instance");
a.tag!=b.tag?console.log("Two instances of the same client at once!"):a.c.set("#instance",{tag:a.tag,last:Date.now()})},3E4);a.Ea="admin"==a.a.clientId;if(!a.a.reset){if(a.a.gid&&a.a.gok)return a.ready=!0,a.la(a.f,!0),n(),!0;console.log("Missing setup data - conclude reset");a.a.reset=!0}a.a.gid&&a.a.gok&&(a.a.reset=!1,n());a.la(a.f,!0);return!0};this.T=function(c,b,f){if("function"===typeof a.b[c].pa){var g=b.del;g||(g=!1);a.b[c].pa(a.b[c].Ia,b.d,f,g)}};var k;this.getGroupCode=this.eb=function(c){if(!a.ready)throw c(!1),
new w("getGroupCode while not ready");if(a.f){k&&clearTimeout(k);var b=a.Ba(),f=new XMLHttpRequest;f.open("PUT",a.f.$+"gid/code",!0);f.onreadystatechange=function(){if(4===this.readyState){try{if(200===this.status){var a=JSON.parse(this.responseText);k=setTimeout(function(){c({gName:b,gCode:""})},2E4);c(a);return}}catch(f){console.log("Backend Error: "+f)}c(!1)}};f.setRequestHeader("Content-Type","application/json");f.send(JSON.stringify({gid:a.a.gid,gok:a.a.gok,gName:b}))}};this.Gb=function(c){c||
(c="");if(!(c in a.b))throw new w("Ilegal Collection");if(a.b[c].qa!==a.CTYPE_UNNAMED)throw new w("Collection in not CTYPE_UNNAMED "+c);a.cache["*"]={d:{"@":c}};a.wa()};this.createNamedSharedObj=this.bb=function(c,b,f){if(!a.ready)throw new w("createNamedSharedObj: not ready");f||(f="");if(!(f in a.b))throw new w("createNamedSharedObj: Collection unknown "+f);if(a.b[f].qa!==a.CTYPE_NAMED)throw new w("createNamedSharedObj: Collection in not CTYPE_NAMED "+f);if(!b)throw new w("createNamedSharedObj: object name missing");
if(0!=b.search(/^[A-Za-z0-9+/=]+$/))throw new w("createNamedSharedObj: ilegal object name");var g=a.b[f].W;if(!g)throw new w("createNamedSharedObj: collection has no rkey");return a.cb(f,c,"F"+b+g+f)};this.cb=function(c,b,f){if(!a.ready)throw new w("createSharedObj: not ready");if(!a.b[c].S)throw new w("createSharedObj: Collection has no wkey");if("object"!==typeof b)throw new w("createSharedObj: obj missing");if(f in a.cache)c=a.cache[f];else{var g=a.va+Date.now();c={lt:10,stime:{},d:{_oid:f,"@":c},
md:{}};a.cache[f]=c}for(var h in b)h&&"_"!=h[0]&&(c.d[h]=b[h],c.stime[h]=g);c.del&&(c.del=!1);a.Da(c.d);return c.d};this.updateSharedObj=this.Da=function(c){function b(a,c,f){for(var g in a)if("_"!=g[0]&&"@"!=g[0]&&">"!=g[0]&&"<"!=g[0])if("+"==g[0]){if("[object Object]"!==Object.prototype.toString.T(a[g]))throw new w("Union merge can be done on Objects only");c[g]||(c[g]={});f[g]||(f[g]={});b(a[g],c[g],f[g])}else y(c[g],a[g])||(f[g]=m,c[g]=A(a[g],c[g]))}if(!a.ready)throw new w("updateSharedObj: not ready");
var f=c["@"];f||(f="");if(!(f in a.b))throw new w("Collection unknown "+f);if(!a.b[f].S)throw new w("Collection has no wkey");var g=c._oid;if(!(g in a.cache))throw new w("updateSharedObj: sharedObj id is unknown");var h=a.cache[g];if(h.d!=c)throw new w("updateSharedObj: sharedObj unknown!");h.lt++;h._lupdate=!0;delete h.tmp;c=h._d;var k=h.d,l=h.md.stime;l||(h.md.stime={},l=h.md.stime);c||(h._d={},c=h._d);var m=a.va+Date.now();b(k,c,l);a.c&&a.c.set(g,h);a.na(g,h);a.T(f,h,!1)}}
window.bendFactory=new function(){function m(a,b){this.F=k.F;this.$=k.$;this.m=function(f,g){g._cmd=f;g.instance=a;"init"==f&&(g.myappname=k.hb,g.proof=k.Ua);b.postMessage(g,k.F)}}function l(){k.C.contentWindow.postMessage({_cmd:"alive"},k.F)}function n(){k.loaded||(k.C=document.createElement("iframe"),k.C.setAttribute("src",k.F+"/zWorker"),k.C.style.display="none",document.body?document.body.appendChild(k.C):document.head.appendChild(k.C),k.C.addEventListener("load",l),setTimeout(n,3E4))}function a(){var c=
new XMLHttpRequest;c.open("GET",k.$+"sync",!0);c.onreadystatechange=function(){if(4===this.readyState)try{if(200===this.status){var b=JSON.parse(this.responseText);k.F=b.sync;n()}else setTimeout(a,3E4)}catch(c){console.log("Backend Error: "+c),setTimeout(a,3E4)}};c.setRequestHeader("X-Proof",k.Ua);c.send()}var k=this;this.u={};this.X={};this.loaded=!1;this["delete"]=function(a){for(var b in k.u)if(k.u[b]===a){a.terminate();delete k.u[b];delete k.X[b];break}};this["new"]=function(c,b,f){f||(f="http://srv.zlineup.com:5105");
b||(b="try");c||(c="try");k.Ua=b;k.hb=c;k.$=f+"/v1/"+c+"/";c=Date.now().toString();b=new C;k.u[c]=b;k.X[c]=!1;a();k.loaded&&(k.X[c]=!0,b.la(new m(inst,k.C.contentWindow),b.ta));return b};this.yb=function(a){if(k.F&&a.origin==k.F){var b=a.data.instance;if(0>b){k.loaded=!0;for(var f in k.u)k.X[f]||(k.X[f]=!0,k.u[f].la(new m(f,k.C.contentWindow),k.u[f].ta))}else b in k.u&&(a.data.ctrl&&k.u[b].Db(a.data.ctrl),"responseText"in a.data&&k.u[b].Eb(a.data.responseText))}};window.addEventListener("message",
this.yb,!1)};function D(m,l){function n(a,c,k){var l=f.createNamedSharedObj({v:c},c,k);"$gs"in a||(a.$gs={});a.$gs[c]=l;var m=b.controllers[k].values,n=!0;a.$watch.call(a,c,function(){if(a&&!a.$remote&&a.hasOwnProperty(c)&&!n){if(m.hasOwnProperty(c)){if(m.hasOwnProperty(c)&&y(a[c],m[c]))return;delete m[c]}l.data=A(a[c],l.data);f.updateSharedObj(l)}},!0);n=!1}function a(a){var c=b.controllers[a].scope,k=b.controllers[a].values;f.addCollection(a,f.CTYPE_NAMED,function(a,b,c){a&&b.hasOwnProperty("v")&&"undefined"!==
typeof b.data&&(a[b.v]=A(b.data,a[b.v]),c&&(a.$remote=!0,a.$digest(),a.$remote=!1))},c);for(var l in k)n(c,l,a)}function k(){for(var a in b.controllers){var c=b.controllers[a].scope;if(!c.$$phase){for(var f in c.$gs)"data"in c.$gs[f]&&(c[f]=c.$gs[f].data);c.$digest()}}}function c(c){var h={},n;for(n in l)h[n]=l[n];for(n in c)h[n]=c[n];f.init(h,function(){b.code="";for(var c in b.controllers)a(c);b.registered=!0;m(function(){b.name=f.getGroupName();k()},0)})}var b=this,f=window.bendFactory["new"](l.appId,
l.proof,l.appCtrlUrl);this.registered=!1;this.code=this.name="";this.controllers={};this.controller=function(g,h,k){if(!h||"string"!=typeof h||!g||"object"!=typeof k)throw new w("wrong parameters");if(h in b.controllers)throw new w("controller already initialized");b.controllers[h]={scope:g,values:k};for(var m in k)g.hasOwnProperty(m)||(g[m]=A(k[m]));c();b.registered&&a(h);g.$gs_update=function(a){g.$gs[a].data=g[a];f.updateSharedObj(g.$gs[a]);g.$digest()};"js"==l.$mvp&&g.$digest()};this.getGroupCode=
function(){function a(c){c&&(b.code=c.gCode);k()}f.ready&&f.getGroupCode(a)};this.create=function(){c({gName:b.name,reset:!0})};this.join=function(){c({gName:b.name,gCode:b.code,reset:!0})};this.clear=function(){f.clear()}}
try{var E=angular.module("$groupShare",[]);E.provider("$groupShare",function(){var m={$mvp:"ang",store:sessionStorage,appId:"try",proof:"try",appCtrlUrl:"http://srv.zlineup.com:5105"};this.config=function(l){m=l;m.$mvp="ang"};this.$get=["$timeout",function(l){return new D(l,m)}]});window.$GroupShareApp=E}catch(m){window.$GroupShareApp=function(){var l={$mvp:"js",store:sessionStorage,appId:"try",proof:"try",appCtrlUrl:"http://srv.zlineup.com:5105"};this.config=function(m){l=m;l.$mvp="js"};this.$get=
function(){return new D(setTimeout,l)}}};