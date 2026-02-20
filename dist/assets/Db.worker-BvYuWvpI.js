var LN=Object.defineProperty;var gp=Et=>{throw TypeError(Et)};var FN=(Et,At,tr)=>At in Et?LN(Et,At,{enumerable:!0,configurable:!0,writable:!0,value:tr}):Et[At]=tr;var Ce=(Et,At,tr)=>FN(Et,typeof At!="symbol"?At+"":At,tr),$u=(Et,At,tr)=>At.has(Et)||gp("Cannot "+tr);var s=(Et,At,tr)=>($u(Et,At,"read from private field"),tr?tr.call(Et):At.get(Et)),ne=(Et,At,tr)=>At.has(Et)?gp("Cannot add the same private member more than once"):At instanceof WeakSet?At.add(Et):At.set(Et,tr),le=(Et,At,tr,Ri)=>($u(Et,At,"write to private field"),Ri?Ri.call(Et,tr):At.set(Et,tr),tr),Ue=(Et,At,tr)=>($u(Et,At,"access private method"),tr);(function(){"use strict";var ep,tp,zs,kn,an,Ni,Ft,Qo,ln,je,Ge,ts,ca,Xe,rs,ua,Vn,Vs,gl,Hs,ns,is,Wt,ju,bp,wp,Np,ti,Cl,xp,Vo,Ho,Ks,Js,ss,Ko,Qu,fr,St,zr,Pl,ws,cn,vi,Nt,Kn,Gs,qi,as,ls,qe,Vr,mn,Xs,Ys,Zt,Zs,eo,to,ro,En,no,An,Jo,zu,cs,io,Si,so,oo,ao,xt,dn,Jn,Go,In,Qt,ir,Dt,On,Gn,Yo,yt,nr,qt,Xr,bt,vr,Cr,Pr,Sl,Ht,qr,Yr,Zr,Sr,sr,co,Tn,Cn,Xn,br,Ii,Yn,uo,Zn,na,Ar,vp,qp,Vu,Hu,Ku,ia,Oi,kl,Sp,Ti,ps,hr,hn,ms,en,Pn,Rt,_s,Kr,sa,pr,pn,Il,po,ys;const Et=r=>r.length>0,At=r=>r.length>0,tr=(r,e)=>[...r,e],Ri=r=>r[0],Ju=r=>r.shift(),Ir=(r,e)=>{if(!r)throw new Error(e)},Fl=(r,e="Expected a non-empty readonly array.")=>{Ir(r.length>0,e)};/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */function kp(r){return r instanceof Uint8Array||ArrayBuffer.isView(r)&&r.constructor.name==="Uint8Array"}function Wl(r){if(typeof r!="boolean")throw new Error(`boolean expected, not ${r}`)}function Rl(r){if(!Number.isSafeInteger(r)||r<0)throw new Error("positive integer expected, got "+r)}function _r(r,e,t=""){const n=kp(r),o=r==null?void 0:r.length,l=e!==void 0;if(!n||l&&o!==e){const h=t&&`"${t}" `,g=l?` of length ${e}`:"",S=n?`length=${o}`:`type=${typeof r}`;throw new Error(h+"expected Uint8Array"+g+", got "+S)}return r}function Gu(r,e=!0){if(r.destroyed)throw new Error("Hash instance has been destroyed");if(e&&r.finished)throw new Error("Hash#digest() has already been called")}function Ep(r,e){_r(r,void 0,"output");const t=e.outputLen;if(r.length<t)throw new Error("digestInto() expects output buffer of length at least "+t)}function ni(r){return new Uint32Array(r.buffer,r.byteOffset,Math.floor(r.byteLength/4))}function Ns(...r){for(let e=0;e<r.length;e++)r[e].fill(0)}function Ap(r){return new DataView(r.buffer,r.byteOffset,r.byteLength)}const Ip=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,Xu=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Op=Array.from({length:256},(r,e)=>e.toString(16).padStart(2,"0"));function Dl(r){if(_r(r),Xu)return r.toHex();let e="";for(let t=0;t<r.length;t++)e+=Op[r[t]];return e}const Fn={_0:48,_9:57,A:65,F:70,a:97,f:102};function Yu(r){if(r>=Fn._0&&r<=Fn._9)return r-Fn._0;if(r>=Fn.A&&r<=Fn.F)return r-(Fn.A-10);if(r>=Fn.a&&r<=Fn.f)return r-(Fn.a-10)}function Zu(r){if(typeof r!="string")throw new Error("hex string expected, got "+typeof r);if(Xu)return Uint8Array.fromHex(r);const e=r.length,t=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(t);for(let o=0,l=0;o<t;o++,l+=2){const h=Yu(r.charCodeAt(l)),g=Yu(r.charCodeAt(l+1));if(h===void 0||g===void 0){const S=r[l]+r[l+1];throw new Error('hex string expected, got non-hex character "'+S+'" at index '+l)}n[o]=h*16+g}return n}function Tp(r){if(typeof r!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(r))}function Cp(r){return new TextDecoder().decode(r)}function Pp(...r){let e=0;for(let n=0;n<r.length;n++){const o=r[n];_r(o),e+=o.length}const t=new Uint8Array(e);for(let n=0,o=0;n<r.length;n++){const l=r[n];t.set(l,o),o+=l.length}return t}function Lp(r,e){if(e==null||typeof e!="object")throw new Error("options must be defined");return Object.assign(r,e)}function Fp(r,e){if(r.length!==e.length)return!1;let t=0;for(let n=0;n<r.length;n++)t|=r[n]^e[n];return t===0}const Wp=(r,e)=>{function t(n,...o){if(_r(n,void 0,"key"),!Ip)throw new Error("Non little-endian hardware is not yet supported");if(r.nonceLength!==void 0){const k=o[0];_r(k,r.varSizeNonce?void 0:r.nonceLength,"nonce")}const l=r.tagLength;l&&o[1]!==void 0&&_r(o[1],void 0,"AAD");const h=e(n,...o),g=(k,x)=>{if(x!==void 0){if(k!==2)throw new Error("cipher output not supported");_r(x,void 0,"output")}};let S=!1;return{encrypt(k,x){if(S)throw new Error("cannot encrypt() twice with same key + nonce");return S=!0,_r(k),g(h.encrypt.length,x),h.encrypt(k,x)},decrypt(k,x){if(_r(k),l&&k.length<l)throw new Error('"ciphertext" expected length bigger than tagLength='+l);return g(h.decrypt.length,x),h.decrypt(k,x)}}}return Object.assign(t,r),t};function ed(r,e,t=!0){if(e===void 0)return new Uint8Array(r);if(e.length!==r)throw new Error('"output" expected Uint8Array of length '+r+", got: "+e.length);if(t&&!Dp(e))throw new Error("invalid output, must be aligned");return e}function Rp(r,e,t){Wl(t);const n=new Uint8Array(16),o=Ap(n);return o.setBigUint64(0,BigInt(e),t),o.setBigUint64(8,BigInt(r),t),n}function Dp(r){return r.byteOffset%4===0}function da(r){return Uint8Array.from(r)}/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Bp(r){return r instanceof Uint8Array||ArrayBuffer.isView(r)&&r.constructor.name==="Uint8Array"}function td(r,e=""){if(!Number.isSafeInteger(r)||r<0){const t=e&&`"${e}" `;throw new Error(`${t}expected integer >= 0, got ${r}`)}}function go(r,e,t=""){const n=Bp(r),o=r==null?void 0:r.length,l=e!==void 0;if(!n||l&&o!==e){const h=t&&`"${t}" `,g=l?` of length ${e}`:"",S=n?`length=${o}`:`type=${typeof r}`;throw new Error(h+"expected Uint8Array"+g+", got "+S)}return r}function Mp(r){if(typeof r!="function"||typeof r.create!="function")throw new Error("Hash must wrapped by utils.createHasher");td(r.outputLen),td(r.blockLen)}function fa(r,e=!0){if(r.destroyed)throw new Error("Hash instance has been destroyed");if(e&&r.finished)throw new Error("Hash#digest() has already been called")}function Up(r,e){go(r,void 0,"digestInto() output");const t=e.outputLen;if(r.length<t)throw new Error('"digestInto() output" expected to be of length >='+t)}function xs(...r){for(let e=0;e<r.length;e++)r[e].fill(0)}function Bl(r){return new DataView(r.buffer,r.byteOffset,r.byteLength)}function _n(r,e){return r<<32-e|r>>>e}function rd(r){if(typeof r!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(r))}function nd(r,e={}){const t=(o,l)=>r(l).update(o).digest(),n=r(void 0);return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=o=>r(o),Object.assign(t,e),Object.freeze(t)}function $p(r=32){const e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined");return e.getRandomValues(new Uint8Array(r))}const id=r=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,r])});function jp(r,e,t){return r&e^~r&t}function Qp(r,e,t){return r&e^r&t^e&t}class sd{constructor(e,t,n,o){Ce(this,"blockLen");Ce(this,"outputLen");Ce(this,"padOffset");Ce(this,"isLE");Ce(this,"buffer");Ce(this,"view");Ce(this,"finished",!1);Ce(this,"length",0);Ce(this,"pos",0);Ce(this,"destroyed",!1);this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=o,this.buffer=new Uint8Array(e),this.view=Bl(this.buffer)}update(e){fa(this),go(e);const{view:t,buffer:n,blockLen:o}=this,l=e.length;for(let h=0;h<l;){const g=Math.min(o-this.pos,l-h);if(g===o){const S=Bl(e);for(;o<=l-h;h+=o)this.process(S,h);continue}n.set(e.subarray(h,h+g),this.pos),this.pos+=g,h+=g,this.pos===o&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){fa(this),Up(e,this),this.finished=!0;const{buffer:t,view:n,blockLen:o,isLE:l}=this;let{pos:h}=this;t[h++]=128,xs(this.buffer.subarray(h)),this.padOffset>o-h&&(this.process(n,0),h=0);for(let x=h;x<o;x++)t[x]=0;n.setBigUint64(o-8,BigInt(this.length*8),l),this.process(n,0);const g=Bl(e),S=this.outputLen;if(S%4)throw new Error("_sha2: outputLen must be aligned to 32bit");const E=S/4,k=this.get();if(E>k.length)throw new Error("_sha2: outputLen bigger than state");for(let x=0;x<E;x++)g.setUint32(4*x,k[x],l)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:n,length:o,finished:l,destroyed:h,pos:g}=this;return e.destroyed=h,e.finished=l,e.length=o,e.pos=g,o%t&&e.buffer.set(n),e}clone(){return this._cloneInto()}}const ii=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Nr=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),ha=BigInt(2**32-1),od=BigInt(32);function zp(r,e=!1){return e?{h:Number(r&ha),l:Number(r>>od&ha)}:{h:Number(r>>od&ha)|0,l:Number(r&ha)|0}}function Vp(r,e=!1){const t=r.length;let n=new Uint32Array(t),o=new Uint32Array(t);for(let l=0;l<t;l++){const{h,l:g}=zp(r[l],e);[n[l],o[l]]=[h,g]}return[n,o]}const ad=(r,e,t)=>r>>>t,ld=(r,e,t)=>r<<32-t|e>>>t,vs=(r,e,t)=>r>>>t|e<<32-t,qs=(r,e,t)=>r<<32-t|e>>>t,pa=(r,e,t)=>r<<64-t|e>>>t-32,ma=(r,e,t)=>r>>>t-32|e<<64-t;function Wn(r,e,t,n){const o=(e>>>0)+(n>>>0);return{h:r+t+(o/2**32|0)|0,l:o|0}}const Hp=(r,e,t)=>(r>>>0)+(e>>>0)+(t>>>0),Kp=(r,e,t,n)=>e+t+n+(r/2**32|0)|0,Jp=(r,e,t,n)=>(r>>>0)+(e>>>0)+(t>>>0)+(n>>>0),Gp=(r,e,t,n,o)=>e+t+n+o+(r/2**32|0)|0,Xp=(r,e,t,n,o)=>(r>>>0)+(e>>>0)+(t>>>0)+(n>>>0)+(o>>>0),Yp=(r,e,t,n,o,l)=>e+t+n+o+l+(r/2**32|0)|0,Zp=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),si=new Uint32Array(64);class em extends sd{constructor(e){super(64,e,8,!1)}get(){const{A:e,B:t,C:n,D:o,E:l,F:h,G:g,H:S}=this;return[e,t,n,o,l,h,g,S]}set(e,t,n,o,l,h,g,S){this.A=e|0,this.B=t|0,this.C=n|0,this.D=o|0,this.E=l|0,this.F=h|0,this.G=g|0,this.H=S|0}process(e,t){for(let x=0;x<16;x++,t+=4)si[x]=e.getUint32(t,!1);for(let x=16;x<64;x++){const F=si[x-15],H=si[x-2],J=_n(F,7)^_n(F,18)^F>>>3,Y=_n(H,17)^_n(H,19)^H>>>10;si[x]=Y+si[x-7]+J+si[x-16]|0}let{A:n,B:o,C:l,D:h,E:g,F:S,G:E,H:k}=this;for(let x=0;x<64;x++){const F=_n(g,6)^_n(g,11)^_n(g,25),H=k+F+jp(g,S,E)+Zp[x]+si[x]|0,Y=(_n(n,2)^_n(n,13)^_n(n,22))+Qp(n,o,l)|0;k=E,E=S,S=g,g=h+H|0,h=l,l=o,o=n,n=H+Y|0}n=n+this.A|0,o=o+this.B|0,l=l+this.C|0,h=h+this.D|0,g=g+this.E|0,S=S+this.F|0,E=E+this.G|0,k=k+this.H|0,this.set(n,o,l,h,g,S,E,k)}roundClean(){xs(si)}destroy(){this.set(0,0,0,0,0,0,0,0),xs(this.buffer)}}class tm extends em{constructor(){super(32);Ce(this,"A",ii[0]|0);Ce(this,"B",ii[1]|0);Ce(this,"C",ii[2]|0);Ce(this,"D",ii[3]|0);Ce(this,"E",ii[4]|0);Ce(this,"F",ii[5]|0);Ce(this,"G",ii[6]|0);Ce(this,"H",ii[7]|0)}}const cd=Vp(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(r=>BigInt(r))),rm=cd[0],nm=cd[1],oi=new Uint32Array(80),ai=new Uint32Array(80);class im extends sd{constructor(e){super(128,e,16,!1)}get(){const{Ah:e,Al:t,Bh:n,Bl:o,Ch:l,Cl:h,Dh:g,Dl:S,Eh:E,El:k,Fh:x,Fl:F,Gh:H,Gl:J,Hh:Y,Hl:ve}=this;return[e,t,n,o,l,h,g,S,E,k,x,F,H,J,Y,ve]}set(e,t,n,o,l,h,g,S,E,k,x,F,H,J,Y,ve){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=o|0,this.Ch=l|0,this.Cl=h|0,this.Dh=g|0,this.Dl=S|0,this.Eh=E|0,this.El=k|0,this.Fh=x|0,this.Fl=F|0,this.Gh=H|0,this.Gl=J|0,this.Hh=Y|0,this.Hl=ve|0}process(e,t){for(let Re=0;Re<16;Re++,t+=4)oi[Re]=e.getUint32(t),ai[Re]=e.getUint32(t+=4);for(let Re=16;Re<80;Re++){const Le=oi[Re-15]|0,gt=ai[Re-15]|0,wt=vs(Le,gt,1)^vs(Le,gt,8)^ad(Le,gt,7),Fe=qs(Le,gt,1)^qs(Le,gt,8)^ld(Le,gt,7),ze=oi[Re-2]|0,Qe=ai[Re-2]|0,ut=vs(ze,Qe,19)^pa(ze,Qe,61)^ad(ze,Qe,6),ht=qs(ze,Qe,19)^ma(ze,Qe,61)^ld(ze,Qe,6),dt=Jp(Fe,ht,ai[Re-7],ai[Re-16]),W=Gp(dt,wt,ut,oi[Re-7],oi[Re-16]);oi[Re]=W|0,ai[Re]=dt|0}let{Ah:n,Al:o,Bh:l,Bl:h,Ch:g,Cl:S,Dh:E,Dl:k,Eh:x,El:F,Fh:H,Fl:J,Gh:Y,Gl:ve,Hh:ke,Hl:$e}=this;for(let Re=0;Re<80;Re++){const Le=vs(x,F,14)^vs(x,F,18)^pa(x,F,41),gt=qs(x,F,14)^qs(x,F,18)^ma(x,F,41),wt=x&H^~x&Y,Fe=F&J^~F&ve,ze=Xp($e,gt,Fe,nm[Re],ai[Re]),Qe=Yp(ze,ke,Le,wt,rm[Re],oi[Re]),ut=ze|0,ht=vs(n,o,28)^pa(n,o,34)^pa(n,o,39),dt=qs(n,o,28)^ma(n,o,34)^ma(n,o,39),W=n&l^n&g^l&g,ye=o&h^o&S^h&S;ke=Y|0,$e=ve|0,Y=H|0,ve=J|0,H=x|0,J=F|0,{h:x,l:F}=Wn(E|0,k|0,Qe|0,ut|0),E=g|0,k=S|0,g=l|0,S=h|0,l=n|0,h=o|0;const ce=Hp(ut,dt,ye);n=Kp(ce,Qe,ht,W),o=ce|0}({h:n,l:o}=Wn(this.Ah|0,this.Al|0,n|0,o|0)),{h:l,l:h}=Wn(this.Bh|0,this.Bl|0,l|0,h|0),{h:g,l:S}=Wn(this.Ch|0,this.Cl|0,g|0,S|0),{h:E,l:k}=Wn(this.Dh|0,this.Dl|0,E|0,k|0),{h:x,l:F}=Wn(this.Eh|0,this.El|0,x|0,F|0),{h:H,l:J}=Wn(this.Fh|0,this.Fl|0,H|0,J|0),{h:Y,l:ve}=Wn(this.Gh|0,this.Gl|0,Y|0,ve|0),{h:ke,l:$e}=Wn(this.Hh|0,this.Hl|0,ke|0,$e|0),this.set(n,o,l,h,g,S,E,k,x,F,H,J,Y,ve,ke,$e)}roundClean(){xs(oi,ai)}destroy(){xs(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class sm extends im{constructor(){super(64);Ce(this,"Ah",Nr[0]|0);Ce(this,"Al",Nr[1]|0);Ce(this,"Bh",Nr[2]|0);Ce(this,"Bl",Nr[3]|0);Ce(this,"Ch",Nr[4]|0);Ce(this,"Cl",Nr[5]|0);Ce(this,"Dh",Nr[6]|0);Ce(this,"Dl",Nr[7]|0);Ce(this,"Eh",Nr[8]|0);Ce(this,"El",Nr[9]|0);Ce(this,"Fh",Nr[10]|0);Ce(this,"Fl",Nr[11]|0);Ce(this,"Gh",Nr[12]|0);Ce(this,"Gl",Nr[13]|0);Ce(this,"Hh",Nr[14]|0);Ce(this,"Hl",Nr[15]|0)}}const ud=nd(()=>new tm,id(1)),dd=nd(()=>new sm,id(3));class fd{constructor(e,t){Ce(this,"oHash");Ce(this,"iHash");Ce(this,"blockLen");Ce(this,"outputLen");Ce(this,"finished",!1);Ce(this,"destroyed",!1);if(Mp(e),go(t,void 0,"key"),this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const n=this.blockLen,o=new Uint8Array(n);o.set(t.length>n?e.create().update(t).digest():t);for(let l=0;l<o.length;l++)o[l]^=54;this.iHash.update(o),this.oHash=e.create();for(let l=0;l<o.length;l++)o[l]^=106;this.oHash.update(o),xs(o)}update(e){return fa(this),this.iHash.update(e),this}digestInto(e){fa(this),go(e,this.outputLen,"output"),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:n,finished:o,destroyed:l,blockLen:h,outputLen:g}=this;return e=e,e.finished=o,e.destroyed=l,e.blockLen=h,e.outputLen=g,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ml=(r,e,t)=>new fd(r,e).update(t).digest();Ml.create=(r,e)=>new fd(r,e);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function _a(r){return r instanceof Uint8Array||ArrayBuffer.isView(r)&&r.constructor.name==="Uint8Array"}function hd(r,e){return Array.isArray(e)?e.length===0?!0:r?e.every(t=>typeof t=="string"):e.every(t=>Number.isSafeInteger(t)):!1}function om(r){if(typeof r!="function")throw new Error("function expected");return!0}function ya(r,e){if(typeof e!="string")throw new Error(`${r}: string expected`);return!0}function Ss(r){if(!Number.isSafeInteger(r))throw new Error(`invalid integer: ${r}`)}function ga(r){if(!Array.isArray(r))throw new Error("array expected")}function ba(r,e){if(!hd(!0,e))throw new Error(`${r}: array of strings expected`)}function pd(r,e){if(!hd(!1,e))throw new Error(`${r}: array of numbers expected`)}function am(...r){const e=l=>l,t=(l,h)=>g=>l(h(g)),n=r.map(l=>l.encode).reduceRight(t,e),o=r.map(l=>l.decode).reduce(t,e);return{encode:n,decode:o}}function lm(r){const e=typeof r=="string"?r.split(""):r,t=e.length;ba("alphabet",e);const n=new Map(e.map((o,l)=>[o,l]));return{encode:o=>(ga(o),o.map(l=>{if(!Number.isSafeInteger(l)||l<0||l>=t)throw new Error(`alphabet.encode: digit index outside alphabet "${l}". Allowed: ${r}`);return e[l]})),decode:o=>(ga(o),o.map(l=>{ya("alphabet.decode",l);const h=n.get(l);if(h===void 0)throw new Error(`Unknown letter: "${l}". Allowed: ${r}`);return h}))}}function cm(r=""){return ya("join",r),{encode:e=>(ba("join.decode",e),e.join(r)),decode:e=>(ya("join.decode",e),e.split(r))}}function um(r,e="="){return Ss(r),ya("padding",e),{encode(t){for(ba("padding.encode",t);t.length*r%8;)t.push(e);return t},decode(t){ba("padding.decode",t);let n=t.length;if(n*r%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;n>0&&t[n-1]===e;n--)if((n-1)*r%8===0)throw new Error("padding: invalid, string has too much padding");return t.slice(0,n)}}}function Ul(r,e,t){if(e<2)throw new Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(t<2)throw new Error(`convertRadix: invalid to=${t}, base cannot be less than 2`);if(ga(r),!r.length)return[];let n=0;const o=[],l=Array.from(r,g=>{if(Ss(g),g<0||g>=e)throw new Error(`invalid integer: ${g}`);return g}),h=l.length;for(;;){let g=0,S=!0;for(let E=n;E<h;E++){const k=l[E],x=e*g,F=x+k;if(!Number.isSafeInteger(F)||x/e!==g||F-k!==x)throw new Error("convertRadix: carry overflow");const H=F/t;g=F%t;const J=Math.floor(H);if(l[E]=J,!Number.isSafeInteger(J)||J*t+g!==F)throw new Error("convertRadix: carry overflow");if(S)J?S=!1:n=E;else continue}if(o.push(g),S)break}for(let g=0;g<r.length-1&&r[g]===0;g++)o.push(0);return o.reverse()}const md=(r,e)=>e===0?r:md(e,r%e),wa=(r,e)=>r+(e-md(r,e)),$l=(()=>{let r=[];for(let e=0;e<40;e++)r.push(2**e);return r})();function jl(r,e,t,n){if(ga(r),e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(t<=0||t>32)throw new Error(`convertRadix2: wrong to=${t}`);if(wa(e,t)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${t} carryBits=${wa(e,t)}`);let o=0,l=0;const h=$l[e],g=$l[t]-1,S=[];for(const E of r){if(Ss(E),E>=h)throw new Error(`convertRadix2: invalid data word=${E} from=${e}`);if(o=o<<e|E,l+e>32)throw new Error(`convertRadix2: carry overflow pos=${l} from=${e}`);for(l+=e;l>=t;l-=t)S.push((o>>l-t&g)>>>0);const k=$l[l];if(k===void 0)throw new Error("invalid carry");o&=k-1}if(o=o<<t-l&g,!n&&l>=e)throw new Error("Excess padding");if(!n&&o>0)throw new Error(`Non-zero padding: ${o}`);return n&&l>0&&S.push(o>>>0),S}function dm(r){Ss(r);const e=2**8;return{encode:t=>{if(!_a(t))throw new Error("radix.encode input should be Uint8Array");return Ul(Array.from(t),e,r)},decode:t=>(pd("radix.decode",t),Uint8Array.from(Ul(t,r,e)))}}function fm(r,e=!1){if(Ss(r),r<=0||r>32)throw new Error("radix2: bits should be in (0..32]");if(wa(8,r)>32||wa(r,8)>32)throw new Error("radix2: carry overflow");return{encode:t=>{if(!_a(t))throw new Error("radix2.encode input should be Uint8Array");return jl(Array.from(t),8,r,!e)},decode:t=>(pd("radix2.decode",t),Uint8Array.from(jl(t,r,8,e)))}}function hm(r,e){return Ss(r),om(e),{encode(t){if(!_a(t))throw new Error("checksum.encode: input should be Uint8Array");const n=e(t).slice(0,r),o=new Uint8Array(t.length+r);return o.set(t),o.set(n,t.length),o},decode(t){if(!_a(t))throw new Error("checksum.decode: input should be Uint8Array");const n=t.slice(0,-r),o=t.slice(-r),l=e(n).slice(0,r);for(let h=0;h<r;h++)if(l[h]!==o[h])throw new Error("Invalid checksum");return n}}}const Na={alphabet:lm,chain:am,checksum:hm,convertRadix:Ul,convertRadix2:jl,radix:dm,radix2:fm,join:cm,padding:um};/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const pm=r=>r[0]==="あいこくしん";function mm(r){if(typeof r!="string")throw new TypeError("invalid mnemonic type: "+typeof r);return r.normalize("NFKD")}function _m(r){const e=mm(r),t=e.split(" ");if(![12,15,18,21,24].includes(t.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:t}}function _d(r){if(go(r),![16,20,24,28,32].includes(r.length))throw new Error("invalid entropy length")}const ym=r=>{const e=8-r.length/4;return new Uint8Array([ud(r)[0]>>e<<e])};function yd(r){if(!Array.isArray(r)||r.length!==2048||typeof r[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return r.forEach(e=>{if(typeof e!="string")throw new Error("wordlist: non-string element: "+e)}),Na.chain(Na.checksum(1,ym),Na.radix2(11,!0),Na.alphabet(r))}function gd(r,e){const{words:t}=_m(r),n=yd(e).decode(t);return _d(n),n}function gm(r,e){return _d(r),yd(e).encode(r).join(pm(e)?"　":" ")}function bm(r,e){try{gd(r,e)}catch{return!1}return!0}const Ql=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);var zl;try{zl=new TextDecoder}catch{}var Ie,yn,R=0,Ct={},_t,li,Jr=0,gn=0,lr,Rn,Or=[],pt,bd={useRecords:!1,mapsAsObjects:!0};class wd{}const Nd=new wd;Nd.name="MessagePack 0xC1";var ci=!1,xd=2,wm;try{new Function("")}catch{xd=1/0}class bo{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Ie)return Wd(()=>(Gl(),this?this.unpack(e,t):bo.prototype.unpack.call(bd,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(yn=t.end||e.length,R=t.start||0):(R=0,yn=t>-1?t:e.length),gn=0,li=null,lr=null,Ie=e;try{pt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw Ie=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof bo){if(Ct=this,this.structures)return _t=this.structures,xa(t);(!_t||_t.length>0)&&(_t=[])}else Ct=bd,(!_t||_t.length>0)&&(_t=[]);return xa(t)}unpackMultiple(e,t){let n,o=0;try{ci=!0;let l=e.length,h=this?this.unpack(e,l):va.unpack(e,l);if(t){if(t(h,o,R)===!1)return;for(;R<l;)if(o=R,t(xa(),o,R)===!1)return}else{for(n=[h];R<l;)o=R,n.push(xa());return n}}catch(l){throw l.lastPosition=o,l.values=n,l}finally{ci=!1,Gl()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(n=>n.slice(0)));for(let n=0,o=e.length;n<o;n++){let l=e[n];l&&(l.isShared=!0,n>=32&&(l.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in t||[])if(n>=0){let o=e[n],l=t[n];l&&(o&&((e.restoreStructures||(e.restoreStructures=[]))[n]=o),e[n]=l)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function xa(r){try{if(!Ct.trusted&&!ci){let t=_t.sharedLength||0;t<_t.length&&(_t.length=t)}let e;if(Ct.randomAccessStructure&&Ie[R]<64&&Ie[R]>=32&&wm||(e=Jt()),lr&&(R=lr.postBundlePosition,lr=null),ci&&(_t.restoreStructures=null),R==yn)_t&&_t.restoreStructures&&vd(),_t=null,Ie=null,Rn&&(Rn=null);else{if(R>yn)throw new Error("Unexpected end of MessagePack data");if(!ci){let t;try{t=JSON.stringify(e,(n,o)=>typeof o=="bigint"?`${o}n`:o).slice(0,100)}catch(n){t="(JSON view not available "+n+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw _t&&_t.restoreStructures&&vd(),Gl(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||R>yn)&&(e.incomplete=!0),e}}function vd(){for(let r in _t.restoreStructures)_t[r]=_t.restoreStructures[r];_t.restoreStructures=null}function Jt(){let r=Ie[R++];if(r<160)if(r<128){if(r<64)return r;{let e=_t[r&63]||Ct.getStructures&&Sd()[r&63];return e?(e.read||(e.read=Vl(e,r&63)),e.read()):r}}else if(r<144)if(r-=128,Ct.mapsAsObjects){let e={};for(let t=0;t<r;t++){let n=Td();n==="__proto__"&&(n="__proto_"),e[n]=Jt()}return e}else{let e=new Map;for(let t=0;t<r;t++)e.set(Jt(),Jt());return e}else{r-=144;let e=new Array(r);for(let t=0;t<r;t++)e[t]=Jt();return Ct.freezeData?Object.freeze(e):e}else if(r<192){let e=r-160;if(gn>=R)return li.slice(R-Jr,(R+=e)-Jr);if(gn==0&&yn<140){let t=e<16?Kl(e):Ad(e);if(t!=null)return t}return Hl(e)}else{let e;switch(r){case 192:return null;case 193:return lr?(e=Jt(),e>0?lr[1].slice(lr.position1,lr.position1+=e):lr[0].slice(lr.position0,lr.position0-=e)):Nd;case 194:return!1;case 195:return!0;case 196:if(e=Ie[R++],e===void 0)throw new Error("Unexpected end of buffer");return Jl(e);case 197:return e=pt.getUint16(R),R+=2,Jl(e);case 198:return e=pt.getUint32(R),R+=4,Jl(e);case 199:return Di(Ie[R++]);case 200:return e=pt.getUint16(R),R+=2,Di(e);case 201:return e=pt.getUint32(R),R+=4,Di(e);case 202:if(e=pt.getFloat32(R),Ct.useFloat32>2){let t=Xl[(Ie[R]&127)<<1|Ie[R+1]>>7];return R+=4,(t*e+(e>0?.5:-.5)>>0)/t}return R+=4,e;case 203:return e=pt.getFloat64(R),R+=8,e;case 204:return Ie[R++];case 205:return e=pt.getUint16(R),R+=2,e;case 206:return e=pt.getUint32(R),R+=4,e;case 207:return Ct.int64AsType==="number"?(e=pt.getUint32(R)*4294967296,e+=pt.getUint32(R+4)):Ct.int64AsType==="string"?e=pt.getBigUint64(R).toString():Ct.int64AsType==="auto"?(e=pt.getBigUint64(R),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=pt.getBigUint64(R),R+=8,e;case 208:return pt.getInt8(R++);case 209:return e=pt.getInt16(R),R+=2,e;case 210:return e=pt.getInt32(R),R+=4,e;case 211:return Ct.int64AsType==="number"?(e=pt.getInt32(R)*4294967296,e+=pt.getUint32(R+4)):Ct.int64AsType==="string"?e=pt.getBigInt64(R).toString():Ct.int64AsType==="auto"?(e=pt.getBigInt64(R),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=pt.getBigInt64(R),R+=8,e;case 212:if(e=Ie[R++],e==114)return Pd(Ie[R++]&63);{let t=Or[e];if(t)return t.read?(R++,t.read(Jt())):t.noBuffer?(R++,t()):t(Ie.subarray(R,++R));throw new Error("Unknown extension "+e)}case 213:return e=Ie[R],e==114?(R++,Pd(Ie[R++]&63,Ie[R++])):Di(2);case 214:return Di(4);case 215:return Di(8);case 216:return Di(16);case 217:return e=Ie[R++],gn>=R?li.slice(R-Jr,(R+=e)-Jr):xm(e);case 218:return e=pt.getUint16(R),R+=2,gn>=R?li.slice(R-Jr,(R+=e)-Jr):vm(e);case 219:return e=pt.getUint32(R),R+=4,gn>=R?li.slice(R-Jr,(R+=e)-Jr):qm(e);case 220:return e=pt.getUint16(R),R+=2,kd(e);case 221:return e=pt.getUint32(R),R+=4,kd(e);case 222:return e=pt.getUint16(R),R+=2,Ed(e);case 223:return e=pt.getUint32(R),R+=4,Ed(e);default:if(r>=224)return r-256;if(r===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+r)}}}const Nm=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Vl(r,e){function t(){if(t.count++>xd){let o=r.read=new Function("r","return function(){return "+(Ct.freezeData?"Object.freeze":"")+"({"+r.map(l=>l==="__proto__"?"__proto_:r()":Nm.test(l)?l+":r()":"["+JSON.stringify(l)+"]:r()").join(",")+"})}")(Jt);return r.highByte===0&&(r.read=qd(e,r.read)),o()}let n={};for(let o=0,l=r.length;o<l;o++){let h=r[o];h==="__proto__"&&(h="__proto_"),n[h]=Jt()}return Ct.freezeData?Object.freeze(n):n}return t.count=0,r.highByte===0?qd(e,t):t}const qd=(r,e)=>function(){let t=Ie[R++];if(t===0)return e();let n=r<32?-(r+(t<<5)):r+(t<<5),o=_t[n]||Sd()[n];if(!o)throw new Error("Record id is not defined for "+n);return o.read||(o.read=Vl(o,r)),o.read()};function Sd(){let r=Wd(()=>(Ie=null,Ct.getStructures()));return _t=Ct._mergeStructures(r,_t)}var Hl=wo,xm=wo,vm=wo,qm=wo;function wo(r){let e;if(r<16&&(e=Kl(r)))return e;if(r>64&&zl)return zl.decode(Ie.subarray(R,R+=r));const t=R+r,n=[];for(e="";R<t;){const o=Ie[R++];if(!(o&128))n.push(o);else if((o&224)===192){const l=Ie[R++]&63;n.push((o&31)<<6|l)}else if((o&240)===224){const l=Ie[R++]&63,h=Ie[R++]&63;n.push((o&31)<<12|l<<6|h)}else if((o&248)===240){const l=Ie[R++]&63,h=Ie[R++]&63,g=Ie[R++]&63;let S=(o&7)<<18|l<<12|h<<6|g;S>65535&&(S-=65536,n.push(S>>>10&1023|55296),S=56320|S&1023),n.push(S)}else n.push(o);n.length>=4096&&(e+=cr.apply(String,n),n.length=0)}return n.length>0&&(e+=cr.apply(String,n)),e}function kd(r){let e=new Array(r);for(let t=0;t<r;t++)e[t]=Jt();return Ct.freezeData?Object.freeze(e):e}function Ed(r){if(Ct.mapsAsObjects){let e={};for(let t=0;t<r;t++){let n=Td();n==="__proto__"&&(n="__proto_"),e[n]=Jt()}return e}else{let e=new Map;for(let t=0;t<r;t++)e.set(Jt(),Jt());return e}}var cr=String.fromCharCode;function Ad(r){let e=R,t=new Array(r);for(let n=0;n<r;n++){const o=Ie[R++];if((o&128)>0){R=e;return}t[n]=o}return cr.apply(String,t)}function Kl(r){if(r<4)if(r<2){if(r===0)return"";{let e=Ie[R++];if((e&128)>1){R-=1;return}return cr(e)}}else{let e=Ie[R++],t=Ie[R++];if((e&128)>0||(t&128)>0){R-=2;return}if(r<3)return cr(e,t);let n=Ie[R++];if((n&128)>0){R-=3;return}return cr(e,t,n)}else{let e=Ie[R++],t=Ie[R++],n=Ie[R++],o=Ie[R++];if((e&128)>0||(t&128)>0||(n&128)>0||(o&128)>0){R-=4;return}if(r<6){if(r===4)return cr(e,t,n,o);{let l=Ie[R++];if((l&128)>0){R-=5;return}return cr(e,t,n,o,l)}}else if(r<8){let l=Ie[R++],h=Ie[R++];if((l&128)>0||(h&128)>0){R-=6;return}if(r<7)return cr(e,t,n,o,l,h);let g=Ie[R++];if((g&128)>0){R-=7;return}return cr(e,t,n,o,l,h,g)}else{let l=Ie[R++],h=Ie[R++],g=Ie[R++],S=Ie[R++];if((l&128)>0||(h&128)>0||(g&128)>0||(S&128)>0){R-=8;return}if(r<10){if(r===8)return cr(e,t,n,o,l,h,g,S);{let E=Ie[R++];if((E&128)>0){R-=9;return}return cr(e,t,n,o,l,h,g,S,E)}}else if(r<12){let E=Ie[R++],k=Ie[R++];if((E&128)>0||(k&128)>0){R-=10;return}if(r<11)return cr(e,t,n,o,l,h,g,S,E,k);let x=Ie[R++];if((x&128)>0){R-=11;return}return cr(e,t,n,o,l,h,g,S,E,k,x)}else{let E=Ie[R++],k=Ie[R++],x=Ie[R++],F=Ie[R++];if((E&128)>0||(k&128)>0||(x&128)>0||(F&128)>0){R-=12;return}if(r<14){if(r===12)return cr(e,t,n,o,l,h,g,S,E,k,x,F);{let H=Ie[R++];if((H&128)>0){R-=13;return}return cr(e,t,n,o,l,h,g,S,E,k,x,F,H)}}else{let H=Ie[R++],J=Ie[R++];if((H&128)>0||(J&128)>0){R-=14;return}if(r<15)return cr(e,t,n,o,l,h,g,S,E,k,x,F,H,J);let Y=Ie[R++];if((Y&128)>0){R-=15;return}return cr(e,t,n,o,l,h,g,S,E,k,x,F,H,J,Y)}}}}}function Id(){let r=Ie[R++],e;if(r<192)e=r-160;else switch(r){case 217:e=Ie[R++];break;case 218:e=pt.getUint16(R),R+=2;break;case 219:e=pt.getUint32(R),R+=4;break;default:throw new Error("Expected string")}return wo(e)}function Jl(r){return Ct.copyBuffers?Uint8Array.prototype.slice.call(Ie,R,R+=r):Ie.subarray(R,R+=r)}function Di(r){let e=Ie[R++];if(Or[e]){let t;return Or[e](Ie.subarray(R,t=R+=r),n=>{R=n;try{return Jt()}finally{R=t}})}else throw new Error("Unknown extension type "+e)}var Od=new Array(4096);function Td(){let r=Ie[R++];if(r>=160&&r<192){if(r=r-160,gn>=R)return li.slice(R-Jr,(R+=r)-Jr);if(!(gn==0&&yn<180))return Hl(r)}else return R--,Cd(Jt());let e=(r<<5^(r>1?pt.getUint16(R):r>0?Ie[R]:0))&4095,t=Od[e],n=R,o=R+r-3,l,h=0;if(t&&t.bytes==r){for(;n<o;){if(l=pt.getUint32(n),l!=t[h++]){n=1879048192;break}n+=4}for(o+=3;n<o;)if(l=Ie[n++],l!=t[h++]){n=1879048192;break}if(n===o)return R=n,t.string;o-=3,n=R}for(t=[],Od[e]=t,t.bytes=r;n<o;)l=pt.getUint32(n),t.push(l),n+=4;for(o+=3;n<o;)l=Ie[n++],t.push(l);let g=r<16?Kl(r):Ad(r);return g!=null?t.string=g:t.string=Hl(r)}function Cd(r){if(typeof r=="string")return r;if(typeof r=="number"||typeof r=="boolean"||typeof r=="bigint")return r.toString();if(r==null)return r+"";if(Ct.allowArraysInMapKeys&&Array.isArray(r)&&r.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return r.flat().toString();throw new Error(`Invalid property type for record: ${typeof r}`)}const Pd=(r,e)=>{let t=Jt().map(Cd),n=r;e!==void 0&&(r=r<32?-((e<<5)+r):(e<<5)+r,t.highByte=e);let o=_t[r];return o&&(o.isShared||ci)&&((_t.restoreStructures||(_t.restoreStructures=[]))[r]=o),_t[r]=t,t.read=Vl(t,n),t.read()};Or[0]=()=>{},Or[0].noBuffer=!0,Or[66]=r=>{let e=r.byteLength%8||8,t=BigInt(r[0]&128?r[0]-256:r[0]);for(let n=1;n<e;n++)t<<=BigInt(8),t+=BigInt(r[n]);if(r.byteLength!==e){let n=new DataView(r.buffer,r.byteOffset,r.byteLength),o=(l,h)=>{let g=h-l;if(g<=40){let x=n.getBigUint64(l);for(let F=l+8;F<h;F+=8)x<<=64n,x|=n.getBigUint64(F);return x}let S=l+(g>>4<<3),E=o(l,S),k=o(S,h);return E<<BigInt((h-S)*8)|k};t=t<<BigInt((n.byteLength-e)*8)|o(e,n.byteLength)}return t};let Ld={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:typeof AggregateError=="function"?AggregateError:null};Or[101]=()=>{let r=Jt();if(!Ld[r[0]]){let e=Error(r[1],{cause:r[2]});return e.name=r[0],e}return Ld[r[0]](r[1],{cause:r[2]})},Or[105]=r=>{if(Ct.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=pt.getUint32(R-4);Rn||(Rn=new Map);let t=Ie[R],n;t>=144&&t<160||t==220||t==221?n=[]:t>=128&&t<144||t==222||t==223?n=new Map:(t>=199&&t<=201||t>=212&&t<=216)&&Ie[R+1]===115?n=new Set:n={};let o={target:n};Rn.set(e,o);let l=Jt();if(o.used)Object.assign(n,l);else return o.target=l;if(n instanceof Map)for(let[h,g]of l.entries())n.set(h,g);if(n instanceof Set)for(let h of Array.from(l))n.add(h);return n},Or[112]=r=>{if(Ct.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=pt.getUint32(R-4),t=Rn.get(e);return t.used=!0,t.target},Or[115]=()=>new Set(Jt());const Fd=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(r=>r+"Array");let Sm=typeof globalThis=="object"?globalThis:window;Or[116]=r=>{let e=r[0],t=Uint8Array.prototype.slice.call(r,1).buffer,n=Fd[e];if(!n){if(e===16)return t;if(e===17)return new DataView(t);throw new Error("Could not find typed array for code "+e)}return new Sm[n](t)},Or[120]=()=>{let r=Jt();return new RegExp(r[0],r[1])};const km=[];Or[98]=r=>{let e=(r[0]<<24)+(r[1]<<16)+(r[2]<<8)+r[3],t=R;return R+=e-r.length,lr=km,lr=[Id(),Id()],lr.position0=0,lr.position1=0,lr.postBundlePosition=R,R=t,Jt()},Or[255]=r=>r.length==4?new Date((r[0]*16777216+(r[1]<<16)+(r[2]<<8)+r[3])*1e3):r.length==8?new Date(((r[0]<<22)+(r[1]<<14)+(r[2]<<6)+(r[3]>>2))/1e6+((r[3]&3)*4294967296+r[4]*16777216+(r[5]<<16)+(r[6]<<8)+r[7])*1e3):r.length==12?new Date(((r[0]<<24)+(r[1]<<16)+(r[2]<<8)+r[3])/1e6+((r[4]&128?-281474976710656:0)+r[6]*1099511627776+r[7]*4294967296+r[8]*16777216+(r[9]<<16)+(r[10]<<8)+r[11])*1e3):new Date("invalid");function Wd(r){let e=yn,t=R,n=Jr,o=gn,l=li,h=Rn,g=lr,S=new Uint8Array(Ie.slice(0,yn)),E=_t,k=_t.slice(0,_t.length),x=Ct,F=ci,H=r();return yn=e,R=t,Jr=n,gn=o,li=l,Rn=h,lr=g,Ie=S,ci=F,_t=E,_t.splice(0,_t.length,...k),Ct=x,pt=new DataView(Ie.buffer,Ie.byteOffset,Ie.byteLength),H}function Gl(){Ie=null,Rn=null,_t=null}const Xl=new Array(147);for(let r=0;r<256;r++)Xl[r]=+("1e"+Math.floor(45.15-r*.30103));var va=new bo({useRecords:!1});va.unpack,va.unpackMultiple,va.unpack;let Em=new Float32Array(1);new Uint8Array(Em.buffer,0,4);let qa;try{qa=new TextEncoder}catch{}let Yl,Zl;const ks=typeof Buffer<"u",Sa=ks?function(r){return Buffer.allocUnsafeSlow(r)}:Uint8Array,Rd=ks?Buffer:Uint8Array,Dd=ks?4294967296:2144337920;let K,No,It,M=0,xr,$t=null,Am;const Im=21760,Om=/[\u0080-\uFFFF]/,Es=Symbol("record-id");class Bd extends bo{constructor(e){super(e),this.offset=0;let t,n,o,l,h=Rd.prototype.utf8Write?function(W,ye){return K.utf8Write(W,ye,K.byteLength-ye)}:qa&&qa.encodeInto?function(W,ye){return qa.encodeInto(W,K.subarray(ye)).written}:!1,g=this;e||(e={});let S=e&&e.sequential,E=e.structures||e.saveStructures,k=e.maxSharedStructures;if(k==null&&(k=E?32:0),k>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let x=e.maxOwnStructures;x==null&&(x=E?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let F=k>32||x+k>64,H=k+64,J=k+x+64;if(J>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let Y=[],ve=0,ke=0;this.pack=this.encode=function(W,ye){if(K||(K=new Sa(8192),It=K.dataView||(K.dataView=new DataView(K.buffer,0,8192)),M=0),xr=K.length-10,xr-M<2048?(K=new Sa(K.length),It=K.dataView||(K.dataView=new DataView(K.buffer,0,K.length)),xr=K.length-10,M=0):M=M+7&2147483640,t=M,ye&Wm&&(M+=ye&255),l=g.structuredClone?new Map:null,g.bundleStrings&&typeof W!="string"?($t=[],$t.size=1/0):$t=null,o=g.structures,o){o.uninitialized&&(o=g._mergeStructures(g.getStructures()));let ie=o.sharedLength||0;if(ie>k)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+o.sharedLength);if(!o.transitions){o.transitions=Object.create(null);for(let se=0;se<ie;se++){let Oe=o[se];if(!Oe)continue;let pe,Ee=o.transitions;for(let Ve=0,He=Oe.length;Ve<He;Ve++){let Kt=Oe[Ve];pe=Ee[Kt],pe||(pe=Ee[Kt]=Object.create(null)),Ee=pe}Ee[Es]=se+64}this.lastNamedStructuresLength=ie}S||(o.nextId=ie+64)}n&&(n=!1);let ce;try{g.randomAccessStructure&&W&&typeof W=="object"?W.constructor===Object?dt(W):W.constructor!==Map&&!Array.isArray(W)&&!Zl.some(se=>W instanceof se)?dt(W.toJSON?W.toJSON():W):Le(W):Le(W);let ie=$t;if($t&&Ud(t,Le,0),l&&l.idsToInsert){let se=l.idsToInsert.sort((Ve,He)=>Ve.offset>He.offset?1:-1),Oe=se.length,pe=-1;for(;ie&&Oe>0;){let Ve=se[--Oe].offset+t;Ve<ie.stringsPosition+t&&pe===-1&&(pe=0),Ve>ie.position+t?pe>=0&&(pe+=6):(pe>=0&&(It.setUint32(ie.position+t,It.getUint32(ie.position+t)+pe),pe=-1),ie=ie.previous,Oe++)}pe>=0&&ie&&It.setUint32(ie.position+t,It.getUint32(ie.position+t)+pe),M+=se.length*6,M>xr&&Qe(M),g.offset=M;let Ee=Tm(K.subarray(t,M),se);return l=null,Ee}return g.offset=M,ye&Lm?(K.start=t,K.end=M,K):K.subarray(t,M)}catch(ie){throw ce=ie,ie}finally{if(o&&($e(),n&&g.saveStructures)){let ie=o.sharedLength||0,se=K.subarray(t,M),Oe=Cm(o,g);if(!ce)return g.saveStructures(Oe,Oe.isCompatible)===!1?g.pack(W,ye):(g.lastNamedStructuresLength=ie,K.length>1073741824&&(K=null),se)}K.length>1073741824&&(K=null),ye&Fm&&(M=t)}};const $e=()=>{ke<10&&ke++;let W=o.sharedLength||0;if(o.length>W&&!S&&(o.length=W),ve>1e4)o.transitions=null,ke=0,ve=0,Y.length>0&&(Y=[]);else if(Y.length>0&&!S){for(let ye=0,ce=Y.length;ye<ce;ye++)Y[ye][Es]=0;Y=[]}},Re=W=>{var ye=W.length;ye<16?K[M++]=144|ye:ye<65536?(K[M++]=220,K[M++]=ye>>8,K[M++]=ye&255):(K[M++]=221,It.setUint32(M,ye),M+=4);for(let ce=0;ce<ye;ce++)Le(W[ce])},Le=W=>{M>xr&&(K=Qe(M));var ye=typeof W,ce;if(ye==="string"){let ie=W.length;if($t&&ie>=4&&ie<4096){if(($t.size+=ie)>Im){let Ee,Ve=($t[0]?$t[0].length*3+$t[1].length:0)+10;M+Ve>xr&&(K=Qe(M+Ve));let He;$t.position?(He=$t,K[M]=200,M+=3,K[M++]=98,Ee=M-t,M+=4,Ud(t,Le,0),It.setUint16(Ee+t-3,M-t-Ee)):(K[M++]=214,K[M++]=98,Ee=M-t,M+=4),$t=["",""],$t.previous=He,$t.size=0,$t.position=Ee}let pe=Om.test(W);$t[pe?0:1]+=W,K[M++]=193,Le(pe?-ie:ie);return}let se;ie<32?se=1:ie<256?se=2:ie<65536?se=3:se=5;let Oe=ie*3;if(M+Oe>xr&&(K=Qe(M+Oe)),ie<64||!h){let pe,Ee,Ve,He=M+se;for(pe=0;pe<ie;pe++)Ee=W.charCodeAt(pe),Ee<128?K[He++]=Ee:Ee<2048?(K[He++]=Ee>>6|192,K[He++]=Ee&63|128):(Ee&64512)===55296&&((Ve=W.charCodeAt(pe+1))&64512)===56320?(Ee=65536+((Ee&1023)<<10)+(Ve&1023),pe++,K[He++]=Ee>>18|240,K[He++]=Ee>>12&63|128,K[He++]=Ee>>6&63|128,K[He++]=Ee&63|128):(K[He++]=Ee>>12|224,K[He++]=Ee>>6&63|128,K[He++]=Ee&63|128);ce=He-M-se}else ce=h(W,M+se);ce<32?K[M++]=160|ce:ce<256?(se<2&&K.copyWithin(M+2,M+1,M+1+ce),K[M++]=217,K[M++]=ce):ce<65536?(se<3&&K.copyWithin(M+3,M+2,M+2+ce),K[M++]=218,K[M++]=ce>>8,K[M++]=ce&255):(se<5&&K.copyWithin(M+5,M+3,M+3+ce),K[M++]=219,It.setUint32(M,ce),M+=4),M+=ce}else if(ye==="number")if(W>>>0===W)W<32||W<128&&this.useRecords===!1||W<64&&!this.randomAccessStructure?K[M++]=W:W<256?(K[M++]=204,K[M++]=W):W<65536?(K[M++]=205,K[M++]=W>>8,K[M++]=W&255):(K[M++]=206,It.setUint32(M,W),M+=4);else if(W>>0===W)W>=-32?K[M++]=256+W:W>=-128?(K[M++]=208,K[M++]=W+256):W>=-32768?(K[M++]=209,It.setInt16(M,W),M+=2):(K[M++]=210,It.setInt32(M,W),M+=4);else{let ie;if((ie=this.useFloat32)>0&&W<4294967296&&W>=-2147483648){K[M++]=202,It.setFloat32(M,W);let se;if(ie<4||(se=W*Xl[(K[M]&127)<<1|K[M+1]>>7])>>0===se){M+=4;return}else M--}K[M++]=203,It.setFloat64(M,W),M+=8}else if(ye==="object"||ye==="function")if(!W)K[M++]=192;else{if(l){let se=l.get(W);if(se){if(!se.id){let Oe=l.idsToInsert||(l.idsToInsert=[]);se.id=Oe.push(se)}K[M++]=214,K[M++]=112,It.setUint32(M,se.id),M+=4;return}else l.set(W,{offset:M-t})}let ie=W.constructor;if(ie===Object)ze(W);else if(ie===Array)Re(W);else if(ie===Map)if(this.mapAsEmptyObject)K[M++]=128;else{ce=W.size,ce<16?K[M++]=128|ce:ce<65536?(K[M++]=222,K[M++]=ce>>8,K[M++]=ce&255):(K[M++]=223,It.setUint32(M,ce),M+=4);for(let[se,Oe]of W)Le(se),Le(Oe)}else{for(let se=0,Oe=Yl.length;se<Oe;se++){let pe=Zl[se];if(W instanceof pe){let Ee=Yl[se];if(Ee.write){Ee.type&&(K[M++]=212,K[M++]=Ee.type,K[M++]=0);let Lr=Ee.write.call(this,W);Lr===W?Array.isArray(W)?Re(W):ze(W):Le(Lr);return}let Ve=K,He=It,Kt=M;K=null;let wr;try{wr=Ee.pack.call(this,W,Lr=>(K=Ve,Ve=null,M+=Lr,M>xr&&Qe(M),{target:K,targetView:It,position:M-Lr}),Le)}finally{Ve&&(K=Ve,It=He,M=Kt,xr=K.length-10)}wr&&(wr.length+M>xr&&Qe(wr.length+M),M=Md(wr,K,M,Ee.type));return}}if(Array.isArray(W))Re(W);else{if(W.toJSON){const se=W.toJSON();if(se!==W)return Le(se)}if(ye==="function")return Le(this.writeFunction&&this.writeFunction(W));ze(W)}}}else if(ye==="boolean")K[M++]=W?195:194;else if(ye==="bigint"){if(W<9223372036854776e3&&W>=-9223372036854776e3)K[M++]=211,It.setBigInt64(M,W);else if(W<18446744073709552e3&&W>0)K[M++]=207,It.setBigUint64(M,W);else if(this.largeBigIntToFloat)K[M++]=203,It.setFloat64(M,Number(W));else{if(this.largeBigIntToString)return Le(W.toString());if(this.useBigIntExtension||this.moreTypes){let ie=W<0?BigInt(-1):BigInt(0),se;if(W>>BigInt(65536)===ie){let Oe=BigInt(18446744073709552e3)-BigInt(1),pe=[];for(;pe.push(W&Oe),W>>BigInt(63)!==ie;)W>>=BigInt(64);se=new Uint8Array(new BigUint64Array(pe).buffer),se.reverse()}else{let Oe=W<0,pe=(Oe?~W:W).toString(16);if(pe.length%2?pe="0"+pe:parseInt(pe.charAt(0),16)>=8&&(pe="00"+pe),ks)se=Buffer.from(pe,"hex");else{se=new Uint8Array(pe.length/2);for(let Ee=0;Ee<se.length;Ee++)se[Ee]=parseInt(pe.slice(Ee*2,Ee*2+2),16)}if(Oe)for(let Ee=0;Ee<se.length;Ee++)se[Ee]=~se[Ee]}se.length+M>xr&&Qe(se.length+M),M=Md(se,K,M,66);return}else throw new RangeError(W+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}M+=8}else if(ye==="undefined")this.encodeUndefinedAsNil?K[M++]=192:(K[M++]=212,K[M++]=0,K[M++]=0);else throw new Error("Unknown type: "+ye)},gt=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?W=>{let ye;if(this.skipValues){ye=[];for(let se in W)(typeof W.hasOwnProperty!="function"||W.hasOwnProperty(se))&&!this.skipValues.includes(W[se])&&ye.push(se)}else ye=Object.keys(W);let ce=ye.length;ce<16?K[M++]=128|ce:ce<65536?(K[M++]=222,K[M++]=ce>>8,K[M++]=ce&255):(K[M++]=223,It.setUint32(M,ce),M+=4);let ie;if(this.coercibleKeyAsNumber)for(let se=0;se<ce;se++){ie=ye[se];let Oe=Number(ie);Le(isNaN(Oe)?ie:Oe),Le(W[ie])}else for(let se=0;se<ce;se++)Le(ie=ye[se]),Le(W[ie])}:W=>{K[M++]=222;let ye=M-t;M+=2;let ce=0;for(let ie in W)(typeof W.hasOwnProperty!="function"||W.hasOwnProperty(ie))&&(Le(ie),Le(W[ie]),ce++);if(ce>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');K[ye+++t]=ce>>8,K[ye+t]=ce&255},wt=this.useRecords===!1?gt:e.progressiveRecords&&!F?W=>{let ye,ce=o.transitions||(o.transitions=Object.create(null)),ie=M++-t,se;for(let Oe in W)if(typeof W.hasOwnProperty!="function"||W.hasOwnProperty(Oe)){if(ye=ce[Oe],ye)ce=ye;else{let pe=Object.keys(W),Ee=ce;ce=o.transitions;let Ve=0;for(let He=0,Kt=pe.length;He<Kt;He++){let wr=pe[He];ye=ce[wr],ye||(ye=ce[wr]=Object.create(null),Ve++),ce=ye}ie+t+1==M?(M--,ut(ce,pe,Ve)):ht(ce,pe,ie,Ve),se=!0,ce=Ee[Oe]}Le(W[Oe])}if(!se){let Oe=ce[Es];Oe?K[ie+t]=Oe:ht(ce,Object.keys(W),ie,0)}}:W=>{let ye,ce=o.transitions||(o.transitions=Object.create(null)),ie=0;for(let Oe in W)(typeof W.hasOwnProperty!="function"||W.hasOwnProperty(Oe))&&(ye=ce[Oe],ye||(ye=ce[Oe]=Object.create(null),ie++),ce=ye);let se=ce[Es];se?se>=96&&F?(K[M++]=((se-=96)&31)+96,K[M++]=se>>5):K[M++]=se:ut(ce,ce.__keys__||Object.keys(W),ie);for(let Oe in W)(typeof W.hasOwnProperty!="function"||W.hasOwnProperty(Oe))&&Le(W[Oe])},Fe=typeof this.useRecords=="function"&&this.useRecords,ze=Fe?W=>{Fe(W)?wt(W):gt(W)}:wt,Qe=W=>{let ye;if(W>16777216){if(W-t>Dd)throw new Error("Packed buffer would be larger than maximum buffer size");ye=Math.min(Dd,Math.round(Math.max((W-t)*(W>67108864?1.25:2),4194304)/4096)*4096)}else ye=(Math.max(W-t<<2,K.length-1)>>12)+1<<12;let ce=new Sa(ye);return It=ce.dataView||(ce.dataView=new DataView(ce.buffer,0,ye)),W=Math.min(W,K.length),K.copy?K.copy(ce,0,t,W):ce.set(K.slice(t,W)),M-=t,t=0,xr=ce.length-10,K=ce},ut=(W,ye,ce)=>{let ie=o.nextId;ie||(ie=64),ie<H&&this.shouldShareStructure&&!this.shouldShareStructure(ye)?(ie=o.nextOwnId,ie<J||(ie=H),o.nextOwnId=ie+1):(ie>=J&&(ie=H),o.nextId=ie+1);let se=ye.highByte=ie>=96&&F?ie-96>>5:-1;W[Es]=ie,W.__keys__=ye,o[ie-64]=ye,ie<H?(ye.isShared=!0,o.sharedLength=ie-63,n=!0,se>=0?(K[M++]=(ie&31)+96,K[M++]=se):K[M++]=ie):(se>=0?(K[M++]=213,K[M++]=114,K[M++]=(ie&31)+96,K[M++]=se):(K[M++]=212,K[M++]=114,K[M++]=ie),ce&&(ve+=ke*ce),Y.length>=x&&(Y.shift()[Es]=0),Y.push(W),Le(ye))},ht=(W,ye,ce,ie)=>{let se=K,Oe=M,pe=xr,Ee=t;K=No,M=0,t=0,K||(No=K=new Sa(8192)),xr=K.length-10,ut(W,ye,ie),No=K;let Ve=M;if(K=se,M=Oe,xr=pe,t=Ee,Ve>1){let He=M+Ve-1;He>xr&&Qe(He);let Kt=ce+t;K.copyWithin(Kt+Ve,Kt+1,M),K.set(No.slice(0,Ve),Kt),M=He}else K[ce+t]=No[0]},dt=W=>{let ye=Am(W,K,t,M,o,Qe,(ce,ie,se)=>{if(se)return n=!0;M=ie;let Oe=K;return Le(ce),$e(),Oe!==K?{position:M,targetView:It,target:K}:M},this);if(ye===0)return ze(W);M=ye}}useBuffer(e){K=e,K.dataView||(K.dataView=new DataView(K.buffer,K.byteOffset,K.byteLength)),It=K.dataView,M=0}set position(e){M=e}get position(){return M}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}Zl=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,wd],Yl=[{pack(r,e,t){let n=r.getTime()/1e3;if((this.useTimestamp32||r.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:o,targetView:l,position:h}=e(6);o[h++]=214,o[h++]=255,l.setUint32(h,n)}else if(n>0&&n<4294967296){let{target:o,targetView:l,position:h}=e(10);o[h++]=215,o[h++]=255,l.setUint32(h,r.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),l.setUint32(h+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:o,targetView:l,position:h}=e(3);o[h++]=212,o[h++]=255,o[h++]=255}else{let{target:o,targetView:l,position:h}=e(15);o[h++]=199,o[h++]=12,o[h++]=255,l.setUint32(h,r.getMilliseconds()*1e6),l.setBigInt64(h+4,BigInt(Math.floor(n)))}}},{pack(r,e,t){if(this.setAsEmptyObject)return e(0),t({});let n=Array.from(r),{target:o,position:l}=e(this.moreTypes?3:0);this.moreTypes&&(o[l++]=212,o[l++]=115,o[l++]=0),t(n)}},{pack(r,e,t){let{target:n,position:o}=e(this.moreTypes?3:0);this.moreTypes&&(n[o++]=212,n[o++]=101,n[o++]=0),t([r.name,r.message,r.cause])}},{pack(r,e,t){let{target:n,position:o}=e(this.moreTypes?3:0);this.moreTypes&&(n[o++]=212,n[o++]=120,n[o++]=0),t([r.source,r.flags])}},{pack(r,e){this.moreTypes?ec(r,16,e):tc(ks?Buffer.from(r):new Uint8Array(r),e)}},{pack(r,e){let t=r.constructor;t!==Rd&&this.moreTypes?ec(r,Fd.indexOf(t.name),e):tc(r,e)}},{pack(r,e){this.moreTypes?ec(r,17,e):tc(ks?Buffer.from(r):new Uint8Array(r),e)}},{pack(r,e){let{target:t,position:n}=e(1);t[n]=193}}];function ec(r,e,t,n){let o=r.byteLength;if(o+1<256){var{target:l,position:h}=t(4+o);l[h++]=199,l[h++]=o+1}else if(o+1<65536){var{target:l,position:h}=t(5+o);l[h++]=200,l[h++]=o+1>>8,l[h++]=o+1&255}else{var{target:l,position:h,targetView:g}=t(7+o);l[h++]=201,g.setUint32(h,o+1),h+=4}l[h++]=116,l[h++]=e,r.buffer||(r=new Uint8Array(r)),l.set(new Uint8Array(r.buffer,r.byteOffset,r.byteLength),h)}function tc(r,e){let t=r.byteLength;var n,o;if(t<256){var{target:n,position:o}=e(t+2);n[o++]=196,n[o++]=t}else if(t<65536){var{target:n,position:o}=e(t+3);n[o++]=197,n[o++]=t>>8,n[o++]=t&255}else{var{target:n,position:o,targetView:l}=e(t+5);n[o++]=198,l.setUint32(o,t),o+=4}n.set(r,o)}function Md(r,e,t,n){let o=r.length;switch(o){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:o<256?(e[t++]=199,e[t++]=o):o<65536?(e[t++]=200,e[t++]=o>>8,e[t++]=o&255):(e[t++]=201,e[t++]=o>>24,e[t++]=o>>16&255,e[t++]=o>>8&255,e[t++]=o&255)}return e[t++]=n,e.set(r,t),t+=o,t}function Tm(r,e){let t,n=e.length*6,o=r.length-n;for(;t=e.pop();){let l=t.offset,h=t.id;r.copyWithin(l+n,l,o),n-=6;let g=l+n;r[g++]=214,r[g++]=105,r[g++]=h>>24,r[g++]=h>>16&255,r[g++]=h>>8&255,r[g++]=h&255,o=l}return r}function Ud(r,e,t){if($t.length>0){It.setUint32($t.position+r,M+t-$t.position-r),$t.stringsPosition=M-r;let n=$t;$t=null,e(n[0]),e(n[1])}}function Cm(r,e){return r.isCompatible=t=>{let n=!t||(e.lastNamedStructuresLength||0)===t.length;return n||e._mergeStructures(t),n},r}let $d=new Bd({useRecords:!1});const Pm=$d.pack;$d.pack;const Lm=512,Fm=1024,Wm=2048,jd=r=>Object.prototype.toString.call(r)==="[object Object]",Qd=r=>Object.entries(r),rc=()=>Object.create(null),zd=(r,e)=>e in r?r[e]:void 0,Vd=!(typeof navigator<"u"&&"product"in navigator&&navigator.product==="ReactNative")&&typeof globalThis.Buffer<"u";function de(r=void 0){return{ok:!0,value:r}}const Se=r=>({ok:!1,error:r}),Rm=r=>{if(r.ok)return r.value;throw new Error("getOrThrow",{cause:r.error})},Dm=r=>r.ok?r.value:null,Bi=(r,e)=>{try{return de(r())}catch(t){return Se(e(t))}},Bm=async(r,e)=>r().then(t=>de(t),t=>Se(e(t))),Hd=r=>{if(r===null)return"null";if(r===void 0)return"undefined";if(typeof r=="string")return`"${r}"`;try{return JSON.stringify(r)}catch{return globalThis.String(r)}},nc=Symbol("evolu.Type"),Kd=r=>typeof r=="object"&&r!==null&&nc in r,ui=(r,e)=>({...e,name:r,is:t=>e.fromUnknown(t).ok,from:e.fromUnknown,orThrow:t=>Rm(e.fromUnknown(t)),orNull:t=>Dm(e.fromUnknown(t)),[nc]:!0,Type:void 0,Input:void 0,Error:void 0,Parent:void 0,ParentError:void 0,Errors:void 0,"~standard":{version:1,vendor:"evolu",validate:t=>{const n=e.fromUnknown(t);return n.ok?{value:n.value}:(ff??(ff=oy()),{issues:bn(n.error,ff)})},types:{input:void 0,output:void 0}}}),ct=r=>e=>r({...e,value:Hd(e.value)}),tn=(r,e)=>ui(r,{fromUnknown:e,fromParent:de}),di=()=>ct(r=>`A value ${r.value} is not a ${r.type.toLowerCase()}.`);tn("Unknown",de);const rr=tn("String",r=>typeof r=="string"?de(r):Se({type:"String",value:r})),Mm=di(),Mi=tn("Number",r=>typeof r=="number"?de(r):Se({type:"Number",value:r})),Um=di(),$m=tn("BigInt",r=>typeof r=="bigint"?de(r):Se({type:"BigInt",value:r})),jm=di(),ic=tn("Boolean",r=>typeof r=="boolean"?de(r):Se({type:"Boolean",value:r})),Qm=di();tn("Undefined",r=>r===void 0?de(r):Se({type:"Undefined",value:r}));const zm=di(),sc=tn("Null",r=>r===null?de(r):Se({type:"Null",value:r})),Vm=di();tn("Function",r=>typeof r=="function"?de(r):Se({type:"Function",value:r}));const Hm=di(),ka=tn("Uint8Array",r=>r instanceof globalThis.Uint8Array?de(r):Se({type:"Uint8Array",value:r})),Km=di(),Jm=r=>({...tn("InstanceOf",e=>e instanceof r?de(e):Se({type:"InstanceOf",value:e,ctor:r.name})),ctor:r}),Gm=ct(r=>`The value ${r.value} is not an instance of ${r.ctor}.`);Jm(globalThis.Date),tn("EvoluType",r=>Kd(r)?de(r):Se({type:"EvoluType",value:r}));const Xm=ct(r=>`Value ${r.value} is not a valid Evolu Type.`);function mt(r,e,t){return{...ui("Brand",{fromUnknown:t?o=>{const l=e.fromUnknown(o);return l.ok?t(l.value):l}:o=>{const l=e.fromUnknown(o);return l.ok?de(l.value):Se({type:r,value:o,parentError:l.error})},fromParent:t??de}),brand:r,parentType:e}}mt("CurrencyCode",rr,r=>/^[A-Z]{3}$/.test(r)?de(r):Se({type:"CurrencyCode",value:r}));const Ym=ct(r=>`Invalid currency code: ${r.value}.`),xo=mt("DateIso",rr,r=>{if(r.length!==24)return Se({type:"DateIso",value:r});const e=globalThis.Date.parse(r);return isNaN(e)?Se({type:"DateIso",value:r}):new globalThis.Date(e).toISOString()!==r?Se({type:"DateIso",value:r}):de(r)}),Zm=ct(r=>`The value ${r.value} is not a valid ISO 8601 date string.`),e_=r=>mt("Trimmed",r,e=>e.trim().length===e.length?de(e):Se({type:"Trimmed",value:e})),t_=ct(r=>`The value ${r.value} must be trimmed.`),Ea=e_(rr),Ui=r=>e=>mt(`MinLength${r}`,e,t=>t.length>=r?de(t):Se({type:"MinLength",value:t,min:r})),r_=ct(r=>`The value ${r.value} does not meet the minimum length of ${r.min}.`),vo=r=>e=>mt(`MaxLength${r}`,e,t=>t.length<=r?de(t):Se({type:"MaxLength",value:t,max:r})),n_=ct(r=>`The value ${r.value} exceeds the maximum length of ${r.max}.`),Aa=r=>e=>mt(`Length${r}`,e,t=>t.length===r?de(t):Se({type:"Length",value:t,exact:r})),i_=ct(r=>`The value ${r.value} does not have the required length of ${r.exact}.`);Ui(1)(rr);const s_=vo(100)(rr),o_=vo(1e3)(rr);Ui(1)(s_),Ui(1)(o_);const Jd=Ui(1)(Ea),a_=vo(100)(Ea),l_=vo(1e3)(Ea);Ui(1)(a_),Ui(1)(l_),mt("Mnemonic",Jd,r=>bm(r,Ql)?de(r):Se({type:"Mnemonic",value:r}));const c_=ct(r=>`Invalid BIP39 mnemonic: ${r.value}.`),Gd=(r,e)=>{const t=new RegExp(e.source,e.flags);return n=>mt(r,n,o=>(t.lastIndex=0,t.test(o)?de(o):Se({type:"Regex",name:r,value:o,pattern:e})))},u_=ct(r=>`The value ${r.value} does not match the pattern for ${r.name}: ${r.pattern}.`),d_=Gd("UrlSafeString",/^[A-Za-z0-9_-]+$/)(rr),Xd=mt("Base64Url",rr,r=>{let e;try{e=Ia(oc(r))}catch{}return e===r?de(r):Se({type:"Base64Url",value:r})}),Yd={alphabet:"base64url",omitPadding:!0},Ia=Vd?r=>globalThis.Buffer.from(r).toString("base64url"):typeof((ep=globalThis.Uint8Array.prototype)==null?void 0:ep.toBase64)<"u"?r=>r.toBase64(Yd):r=>{const e=Array.from(r,n=>globalThis.String.fromCodePoint(n)).join("");return globalThis.btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")},oc=Vd?r=>{const e=globalThis.Buffer.from(r,"base64url");return new globalThis.Uint8Array(e)}:typeof((tp=globalThis.Uint8Array)==null?void 0:tp.fromBase64)<"u"?r=>globalThis.Uint8Array.fromBase64(r,Yd):r=>{let e=r.replace(/-/g,"+").replace(/_/g,"/");for(;e.length%4!==0;)e+="=";const t=globalThis.atob(e);return globalThis.Uint8Array.from(t,n=>n.charCodeAt(0))},f_=mt("SimpleName",d_,r=>r.length>=1&&r.length<=64?de(r):Se({type:"SimpleName",value:r}));mt("SimplePassword",Ui(8)(vo(64)(Ea)));const h_=r=>ct(e=>`Invalid password: ${r(e.parentError)}`),ac=mt("Id",rr,r=>r.length===22&&Xd.fromParent(r).ok?de(r):Se({type:"Id",value:r})),p_=ct(r=>`The value ${r.value} is not a valid Id.`),m_=r=>Ia(r.randomBytes.create(16)),__=ct(r=>`Invalid Id for table ${r.table}: ${r.value}.`),y_=mt("IdBytes",Aa(16)(ka)),g_=16,Oa=r=>oc(r),Ta=r=>Ia(r),Zd=r=>mt("Positive",r,e=>e>0?de(e):Se({type:"Positive",value:e})),b_=ct(r=>`The value ${r.value} must be positive (> 0).`),ef=r=>mt("Negative",r,e=>e<0?de(e):Se({type:"Negative",value:e})),w_=ct(r=>`The value ${r.value} must be negative (< 0).`),tf=r=>mt("NonPositive",r,e=>e<=0?de(e):Se({type:"NonPositive",value:e})),N_=ct(r=>`The value ${r.value} must be non-positive (≤ 0).`),rf=r=>mt("NonNegative",r,e=>e>=0?de(e):Se({type:"NonNegative",value:e})),x_=ct(r=>`The value ${r.value} must be non-negative (≥ 0).`),v_=rf(Mi);Zd(v_);const q_=tf(Mi);ef(q_);const S_=r=>mt("Int",r,e=>globalThis.Number.isSafeInteger(e)?de(e):Se({type:"Int",value:e})),k_=ct(r=>`The value ${r.value} must be an integer.`),Ca=S_(Mi),Ze=rf(Ca),Fr=Zd(Ze),E_=Fr.orThrow(globalThis.Number.MAX_SAFE_INTEGER),A_=tf(Ca);ef(A_);const I_=ct(r=>`The value ${r.value} is not > ${r.min}.`),O_=ct(r=>`The value ${r.value} is not < ${r.max}.`),T_=ct(r=>`The value ${r.value} is not >= ${r.min}.`),nf=r=>e=>mt(`LessThanOrEqualTo${r}`,e,t=>t<=r?de(t):Se({type:"LessThanOrEqualTo",value:t,max:r})),C_=ct(r=>`The value ${r.value} is not <= ${r.max}.`),P_=r=>mt("NonNaN",r,e=>globalThis.Number.isNaN(e)?Se({type:"NonNaN",value:e}):de(e)),L_=ct(()=>"The value must not be NaN.");P_(Mi);const F_=r=>mt("Finite",r,e=>globalThis.Number.isFinite(e)?de(e):Se({type:"Finite",value:e})),W_=ct(r=>`The value ${r.value} must be finite.`),R_=F_(Mi),D_=ct(r=>`The value ${r.value} is not a multiple of ${r.divisor}.`),sf=(r,e)=>t=>mt(`Between${r}-${e}`,t,n=>n>=r&&n<=e?de(n):Se({type:"Between",value:n,min:r,max:e})),B_=ct(r=>`The value ${r.value} is not between ${r.min} and ${r.max}, inclusive.`),M_=r=>({...ui("Literal",{fromUnknown:t=>t===r?de(r):Se({type:"Literal",value:t,expected:r}),fromParent:de}),expected:r}),U_=ct(r=>`The value ${r.value} is not strictly equal to the expected literal: ${globalThis.String(r.expected)}.`),of=r=>({...ui("Array",{fromUnknown:n=>{if(!Array.isArray(n))return Se({type:"Array",value:n,reason:{kind:"NotArray"}});const o=[];for(let l=0;l<n.length;l++){const h=r.fromUnknown(n[l]);if(!h.ok)return Se({type:"Array",value:n,reason:{kind:"Element",index:l,error:h.error}});o.push(h.value)}return de(o)},fromParent:n=>{const o=[];for(let l=0;l<n.length;l++){const h=r.fromParent(n[l]);if(!h.ok)return Se({type:"Array",value:n,reason:{kind:"Element",index:l,error:h.error}});o.push(h.value)}return de(o)}}),element:r}),$_=r=>ct(e=>{switch(e.reason.kind){case"NotArray":return`Expected an array but received ${e.value}.`;case"Element":return`Invalid element at index ${e.reason.index}: ${r(e.reason.error)}`}}),j_=r=>({...ui("Set",{fromUnknown:n=>{if(!(n instanceof globalThis.Set))return Se({type:"Set",value:n,reason:{kind:"NotSet"}});let o=0;for(const l of n){const h=r.fromUnknown(l);if(!h.ok)return Se({type:"Set",value:n,reason:{kind:"Element",index:o,error:h.error}});o++}return de(n)},fromParent:n=>{let o=0;for(const l of n){const h=r.fromParent(l);if(!h.ok)return Se({type:"Set",value:n,reason:{kind:"Element",index:o,error:h.error}});o++}return de(n)}}),element:r}),Q_=r=>ct(e=>{switch(e.reason.kind){case"NotSet":return`Expected a Set but received ${e.value}.`;case"Element":return`Invalid element at index ${e.reason.index}: ${r(e.reason.error)}`}}),lc=(r,e)=>({...ui("Record",{fromUnknown:o=>{if(!jd(o))return Se({type:"Record",value:o,reason:{kind:"NotRecord"}});const l={};for(const[h,g]of Object.entries(o)){const S=r.fromUnknown(h);if(!S.ok)return Se({type:"Record",value:o,reason:{kind:"Key",key:h,error:S.error}});const E=e.fromUnknown(g);if(!E.ok)return Se({type:"Record",value:o,reason:{kind:"Value",key:h,error:E.error}});l[S.value]=E.value}return de(l)},fromParent:o=>{const l={};for(const[h,g]of Object.entries(o)){const S=r.fromParent(h);if(!S.ok)return Se({type:"Record",value:o,reason:{kind:"Key",key:h,error:S.error}});const E=e.fromParent(g);if(!E.ok)return Se({type:"Record",value:o,reason:{kind:"Value",key:S.value,error:E.error}});l[S.value]=E.value}return de(l)}}),key:r,value:e}),z_=r=>ct(e=>{switch(e.reason.kind){case"NotRecord":return`Expected a record (plain object) but received ${e.value}.`;case"Key":return`Invalid key ${e.reason.key}: ${r(e.reason.error)}`;case"Value":return`Invalid value for key ${e.reason.key}: ${r(e.reason.error)}`}});function qo(r,e){const t=Object.keys(r);return{...ui("Object",{fromUnknown:l=>{if(!jd(l))return Se({type:"Object",value:l,reason:{kind:"NotObject"}});const h={},g={};for(const E of t){if(!(E in l)&&df(r[E]))continue;const k=r[E].fromUnknown(l[E]);k.ok?g[E]=k.value:h[E]=k.error}const S=Object.keys(l).filter(E=>!t.includes(E));return S.length>0?Se({type:"Object",value:l,reason:{kind:"ExtraKeys",extraKeys:S}}):Object.keys(h).length>0?Se({type:"Object",value:l,reason:{kind:"Props",errors:h}}):de(g)},fromParent:l=>{const h={},g={};for(const S of t){if(!(S in l)&&df(r[S]))continue;const E=r[S].fromParent(l[S]);E.ok?g[S]=E.value:h[S]=E.error}return Object.keys(h).length>0?Se({type:"Object",value:l,reason:{kind:"Props",errors:h}}):de(g)}}),props:r}}const af=r=>ct(e=>{switch(e.reason.kind){case"NotObject":return`Expected a plain object but received ${e.value}`;case"ExtraKeys":return`Unexpected extra keys: ${e.reason.extraKeys.join(", ")}`;case"Props":return`Invalid object properties:
${Object.entries(e.reason.errors).filter(([,n])=>n!==void 0).map(([n,o])=>`- ${n}: ${r(o)}`).join(`
`)}`}}),V_=r=>ct(e=>{switch(e.reason.kind){case"NotObject":return`Expected an object, but received ${e.value}.`;case"Props":return af(r)({type:"Object",value:e.value,reason:{kind:"Props",errors:e.reason.errors}});case"IndexKey":return`Invalid index key ${e.reason.key}: ${r(e.reason.error)}`;case"IndexValue":return`Invalid value at index key ${e.reason.key}: ${r(e.reason.error)}`}});function Pa(...r){const e=r.map(n=>Kd(n)?n:M_(n)),t=n=>{const o=[];for(const l of e){const h=l.fromUnknown(n);if(h.ok)return h;o.push(h.error)}return Se({type:"Union",value:n,errors:o})};return{...ui("Union",{fromUnknown:t,fromParent:t}),members:e}}const H_=r=>ct(e=>{const t=e.errors.map((n,o)=>`  ${o+1}. ${r(n)}`).join(`
`);return`Value ${e.value} does not match any member of the union.
Errors:
${t}`}),K_=r=>{let e;return{name:"Recursive",from:t=>(e??(e=r()),e.from(t)),fromUnknown:t=>(e??(e=r()),e.fromUnknown(t)),fromParent:t=>(e??(e=r()),e.fromParent(t)),is:t=>(e??(e=r()),e.is(t)),[nc]:!0,getParentType:()=>(e??(e=r()),e)}},lf=r=>Pa(sc,r),J_=r=>ct(e=>{switch(e.reason.kind){case"InvalidLength":return`Expected a tuple of length ${e.reason.expected}, but received ${e.value}.`;case"Element":return`Invalid element at index ${e.reason.index}:
  ${r(e.reason.error)}`}}),G_=mt("Int64",$m,r=>r>=-9223372036854775808n&&r<=9223372036854775807n?de(r):Se({type:"Int64",value:r})),X_=ct(r=>`The value ${r.value} is not a valid 64-bit signed integer (Int64).`);mt("Int64",Jd,r=>Bi(()=>{const e=globalThis.BigInt(r);return G_.orThrow(e),r},()=>({type:"Int64String",value:r})));const Y_=ct(r=>`The value ${r.value} is not a valid Int64 string.`),cf=K_(()=>Pa(rr,R_,ic,sc,Z_,ey)),Z_=of(cf),ey=lc(rr,cf),ty=r=>Bi(()=>JSON.parse(r),e=>({type:"Json",value:r,message:globalThis.String(e)})),ry=mt("Json",rr,r=>{const e=ty(r);return e.ok?de(r):e}),ny=ct(r=>`Invalid JSON: ${r.value}. Error: ${r.message}`),uf=r=>JSON.parse(r),df=r=>typeof r=="object"&&r!=null&&"name"in r&&r.name==="Optional",iy=655360,sy=ct(r=>`The mutation size exceeds the maximum limit of ${iy} bytes. The provided mutation has a size of ${Pm(r.value).byteLength} bytes.`),oy=r=>{const e=t=>{switch(t=t,t.type){case"String":return Mm(t);case"Number":return Um(t);case"BigInt":return jm(t);case"Boolean":return Qm(t);case"Undefined":return zm(t);case"Null":return Vm(t);case"Function":return Hm(t);case"Uint8Array":return Km(t);case"InstanceOf":return Gm(t);case"EvoluType":return Xm(t);case"CurrencyCode":return Ym(t);case"DateIso":return Zm(t);case"Trimmed":return t_(t);case"MinLength":return r_(t);case"MaxLength":return n_(t);case"Length":return i_(t);case"Mnemonic":return c_(t);case"Regex":return u_(t);case"Id":return p_(t);case"TableId":return __(t);case"Positive":return b_(t);case"Negative":return w_(t);case"NonPositive":return N_(t);case"NonNegative":return x_(t);case"Int":return k_(t);case"GreaterThan":return I_(t);case"LessThan":return O_(t);case"GreaterThanOrEqualTo":return T_(t);case"LessThanOrEqualTo":return C_(t);case"NonNaN":return L_(t);case"Finite":return W_(t);case"MultipleOf":return D_(t);case"Between":return B_(t);case"Literal":return U_(t);case"Int64":return X_(t);case"Int64String":return Y_(t);case"Json":return ny(t);case"ValidMutationSize":return sy(t);case"SimplePassword":return h_(e)(t);case"Array":return $_(e)(t);case"Set":return Q_(e)(t);case"Record":return z_(e)(t);case"Object":return af(e)(t);case"ObjectWithRecord":return V_(e)(t);case"Union":return H_(e)(t);case"Tuple":return J_(e)(t);default:{const n=t;return`A value ${Hd(n.value)} is not valid for type ${n.type}.`}}};return e},bn=(r,e,t=[])=>{if(r.type==="Array"){const n=r;return n.reason.kind==="NotArray"?[{message:e(r),path:t}]:bn(n.reason.error,e,[...t,n.reason.index])}if(r.type==="Set"){const n=r;return n.reason.kind==="NotSet"?[{message:e(r),path:t}]:bn(n.reason.error,e,[...t,n.reason.index])}if(r.type==="Object"){const n=r;if(n.reason.kind==="NotObject"||n.reason.kind==="ExtraKeys")return[{message:e(r),path:t}];const o=[];for(const[l,h]of Object.entries(n.reason.errors))o.push(...bn(h,e,[...t,l]));return o}if(r.type==="ObjectWithRecord"){const n=r;if(n.reason.kind==="NotObject")return[{message:e(r),path:t}];if(n.reason.kind==="IndexKey"||n.reason.kind==="IndexValue")return bn(n.reason.error,e,[...t,n.reason.key]);const o=[];for(const[l,h]of Object.entries(n.reason.errors))o.push(...bn(h,e,[...t,l]));return o}if(r.type==="Record"){const n=r;return n.reason.kind==="NotRecord"?[{message:e(r),path:t}]:bn(n.reason.error,e,[...t,n.reason.key])}if(r.type==="Tuple"){const n=r;return n.reason.kind==="InvalidLength"?[{message:e(r),path:t}]:bn(n.reason.error,e,[...t,n.reason.index])}if(r.type==="Union")return r.errors.flatMap(o=>bn(o,e,t));if(r.type==="Brand"){const n=r;return"parentError"in n?bn(n.parentError,e,t):[{message:e(r),path:t}]}return[{message:e(r),path:t}]};let ff;class cc extends Error{constructor(e){super(e),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}const wn=r=>{let e=r?new globalThis.Uint8Array(r):new globalThis.Uint8Array(512),t=Ze.orThrow(r?r.length:0);return{getCapacity:()=>Ze.orThrow(e.length),getLength:()=>t,extend:o=>{const l=t+o.length;if(e.length<l){const h=e,g=Math.max(e.length*2,l);e=new globalThis.Uint8Array(g),e.set(h)}e.set(o,t),t=Ze.orThrow(t+o.length)},shift:()=>{if(t===0)throw new cc("Buffer parse ended prematurely");const o=e[0];return e=e.subarray(1),t--,Ze.orThrow(o)},shiftN:o=>{if(t<o)throw new cc("Buffer parse ended prematurely");const l=e.subarray(0,o);return e=e.subarray(o),t=Ze.orThrow(t-o),l},truncate:o=>{if(o>t)throw new cc("Cannot truncate to a length greater than current");t=o},reset:()=>{t=Ze.orThrow(0)},unwrap:()=>e.subarray(0,t)}},ay=r=>{const e=new Map;return{has:t=>e.has(t),get:t=>{const n=e.get(t);if(n!==void 0)return e.delete(t),e.set(t,n),n},set:(t,n)=>{if(e.has(t))e.delete(t);else if(e.size===r){const o=e.keys().next().value;e.delete(o)}e.set(t,n)},delete:t=>{e.delete(t)},map:e}},ly=(r={})=>{const e={enabled:r.enableLogging??!1,log:(...t)=>{e.enabled&&console.log(...t)},info:(...t)=>{e.enabled&&console.info(...t)},warn:(...t)=>{e.enabled&&console.warn(...t)},error:(...t)=>{console.error(...t)},debug:(...t)=>{e.enabled&&console.debug(...t)},time:t=>{e.enabled&&console.time(t)},timeLog:(t,...n)=>{e.enabled&&console.timeLog(t,...n)},timeEnd:t=>{e.enabled&&console.timeEnd(t)},dir:(t,n)=>{e.enabled&&console.dir(t,n)},table:(t,n)=>{e.enabled&&console.table(t,n)},count:t=>{e.enabled&&console.count(t)},countReset:t=>{e.enabled&&console.countReset(t)},assert:(t,n,...o)=>{e.enabled&&console.assert(t,n,...o)},trace:(t,...n)=>{e.enabled&&console.trace(t,...n)}};return e},hf=r=>Uint8Array.from(r.split(""),e=>e.charCodeAt(0)),cy=hf("expand 16-byte k"),uy=hf("expand 32-byte k"),dy=ni(cy),fy=ni(uy);function Be(r,e){return r<<e|r>>>32-e}function uc(r){return r.byteOffset%4===0}const La=64,hy=16,pf=2**32-1,mf=Uint32Array.of();function py(r,e,t,n,o,l,h,g){const S=o.length,E=new Uint8Array(La),k=ni(E),x=uc(o)&&uc(l),F=x?ni(o):mf,H=x?ni(l):mf;for(let J=0;J<S;h++){if(r(e,t,n,k,h,g),h>=pf)throw new Error("arx: counter overflow");const Y=Math.min(La,S-J);if(x&&Y===La){const ve=J/4;if(J%4!==0)throw new Error("arx: invalid block position");for(let ke=0,$e;ke<hy;ke++)$e=ve+ke,H[$e]=F[$e]^k[ke];J+=La;continue}for(let ve=0,ke;ve<Y;ve++)ke=J+ve,l[ke]=o[ke]^E[ve];J+=Y}}function my(r,e){const{allowShortKeys:t,extendNonceFn:n,counterLength:o,counterRight:l,rounds:h}=Lp({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},e);if(typeof r!="function")throw new Error("core must be a function");return Rl(o),Rl(h),Wl(l),Wl(t),(g,S,E,k,x=0)=>{_r(g,void 0,"key"),_r(S,void 0,"nonce"),_r(E,void 0,"data");const F=E.length;if(k===void 0&&(k=new Uint8Array(F)),_r(k,void 0,"output"),Rl(x),x<0||x>=pf)throw new Error("arx: counter overflow");if(k.length<F)throw new Error(`arx: output (${k.length}) is shorter than data (${F})`);const H=[];let J=g.length,Y,ve;if(J===32)H.push(Y=da(g)),ve=fy;else if(J===16&&t)Y=new Uint8Array(32),Y.set(g),Y.set(g,16),ve=dy,H.push(Y);else throw _r(g,32,"arx key"),new Error("invalid key size");uc(S)||H.push(S=da(S));const ke=ni(Y);if(n){if(S.length!==24)throw new Error("arx: extended nonce must be 24 bytes");n(ve,ke,ni(S.subarray(0,16)),ke),S=S.subarray(16)}const $e=16-o;if($e!==S.length)throw new Error(`arx: nonce must be ${$e} or 16 bytes`);if($e!==12){const Le=new Uint8Array(12);Le.set(S,l?0:12-S.length),S=Le,H.push(S)}const Re=ni(S);return py(r,ve,ke,Re,E,k,x,h),Ns(...H),k}}function yr(r,e){return r[e++]&255|(r[e++]&255)<<8}class _y{constructor(e){Ce(this,"blockLen",16);Ce(this,"outputLen",16);Ce(this,"buffer",new Uint8Array(16));Ce(this,"r",new Uint16Array(10));Ce(this,"h",new Uint16Array(10));Ce(this,"pad",new Uint16Array(8));Ce(this,"pos",0);Ce(this,"finished",!1);e=da(_r(e,32,"key"));const t=yr(e,0),n=yr(e,2),o=yr(e,4),l=yr(e,6),h=yr(e,8),g=yr(e,10),S=yr(e,12),E=yr(e,14);this.r[0]=t&8191,this.r[1]=(t>>>13|n<<3)&8191,this.r[2]=(n>>>10|o<<6)&7939,this.r[3]=(o>>>7|l<<9)&8191,this.r[4]=(l>>>4|h<<12)&255,this.r[5]=h>>>1&8190,this.r[6]=(h>>>14|g<<2)&8191,this.r[7]=(g>>>11|S<<5)&8065,this.r[8]=(S>>>8|E<<8)&8191,this.r[9]=E>>>5&127;for(let k=0;k<8;k++)this.pad[k]=yr(e,16+2*k)}process(e,t,n=!1){const o=n?0:2048,{h:l,r:h}=this,g=h[0],S=h[1],E=h[2],k=h[3],x=h[4],F=h[5],H=h[6],J=h[7],Y=h[8],ve=h[9],ke=yr(e,t+0),$e=yr(e,t+2),Re=yr(e,t+4),Le=yr(e,t+6),gt=yr(e,t+8),wt=yr(e,t+10),Fe=yr(e,t+12),ze=yr(e,t+14);let Qe=l[0]+(ke&8191),ut=l[1]+((ke>>>13|$e<<3)&8191),ht=l[2]+(($e>>>10|Re<<6)&8191),dt=l[3]+((Re>>>7|Le<<9)&8191),W=l[4]+((Le>>>4|gt<<12)&8191),ye=l[5]+(gt>>>1&8191),ce=l[6]+((gt>>>14|wt<<2)&8191),ie=l[7]+((wt>>>11|Fe<<5)&8191),se=l[8]+((Fe>>>8|ze<<8)&8191),Oe=l[9]+(ze>>>5|o),pe=0,Ee=pe+Qe*g+ut*(5*ve)+ht*(5*Y)+dt*(5*J)+W*(5*H);pe=Ee>>>13,Ee&=8191,Ee+=ye*(5*F)+ce*(5*x)+ie*(5*k)+se*(5*E)+Oe*(5*S),pe+=Ee>>>13,Ee&=8191;let Ve=pe+Qe*S+ut*g+ht*(5*ve)+dt*(5*Y)+W*(5*J);pe=Ve>>>13,Ve&=8191,Ve+=ye*(5*H)+ce*(5*F)+ie*(5*x)+se*(5*k)+Oe*(5*E),pe+=Ve>>>13,Ve&=8191;let He=pe+Qe*E+ut*S+ht*g+dt*(5*ve)+W*(5*Y);pe=He>>>13,He&=8191,He+=ye*(5*J)+ce*(5*H)+ie*(5*F)+se*(5*x)+Oe*(5*k),pe+=He>>>13,He&=8191;let Kt=pe+Qe*k+ut*E+ht*S+dt*g+W*(5*ve);pe=Kt>>>13,Kt&=8191,Kt+=ye*(5*Y)+ce*(5*J)+ie*(5*H)+se*(5*F)+Oe*(5*x),pe+=Kt>>>13,Kt&=8191;let wr=pe+Qe*x+ut*k+ht*E+dt*S+W*g;pe=wr>>>13,wr&=8191,wr+=ye*(5*ve)+ce*(5*Y)+ie*(5*J)+se*(5*H)+Oe*(5*F),pe+=wr>>>13,wr&=8191;let Lr=pe+Qe*F+ut*x+ht*k+dt*E+W*S;pe=Lr>>>13,Lr&=8191,Lr+=ye*g+ce*(5*ve)+ie*(5*Y)+se*(5*J)+Oe*(5*H),pe+=Lr>>>13,Lr&=8191;let Pi=pe+Qe*H+ut*F+ht*x+dt*k+W*E;pe=Pi>>>13,Pi&=8191,Pi+=ye*S+ce*g+ie*(5*ve)+se*(5*Y)+Oe*(5*J),pe+=Pi>>>13,Pi&=8191;let Li=pe+Qe*J+ut*H+ht*F+dt*x+W*k;pe=Li>>>13,Li&=8191,Li+=ye*E+ce*S+ie*g+se*(5*ve)+Oe*(5*Y),pe+=Li>>>13,Li&=8191;let Fi=pe+Qe*Y+ut*J+ht*H+dt*F+W*x;pe=Fi>>>13,Fi&=8191,Fi+=ye*k+ce*E+ie*S+se*g+Oe*(5*ve),pe+=Fi>>>13,Fi&=8191;let Wi=pe+Qe*ve+ut*Y+ht*J+dt*H+W*F;pe=Wi>>>13,Wi&=8191,Wi+=ye*x+ce*k+ie*E+se*S+Oe*g,pe+=Wi>>>13,Wi&=8191,pe=(pe<<2)+pe|0,pe=pe+Ee|0,Ee=pe&8191,pe=pe>>>13,Ve+=pe,l[0]=Ee,l[1]=Ve,l[2]=He,l[3]=Kt,l[4]=wr,l[5]=Lr,l[6]=Pi,l[7]=Li,l[8]=Fi,l[9]=Wi}finalize(){const{h:e,pad:t}=this,n=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let g=2;g<10;g++)e[g]+=o,o=e[g]>>>13,e[g]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,n[0]=e[0]+5,o=n[0]>>>13,n[0]&=8191;for(let g=1;g<10;g++)n[g]=e[g]+o,o=n[g]>>>13,n[g]&=8191;n[9]-=8192;let l=(o^1)-1;for(let g=0;g<10;g++)n[g]&=l;l=~l;for(let g=0;g<10;g++)e[g]=e[g]&l|n[g];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let h=e[0]+t[0];e[0]=h&65535;for(let g=1;g<8;g++)h=(e[g]+t[g]|0)+(h>>>16)|0,e[g]=h&65535;Ns(n)}update(e){Gu(this),_r(e),e=da(e);const{buffer:t,blockLen:n}=this,o=e.length;for(let l=0;l<o;){const h=Math.min(n-this.pos,o-l);if(h===n){for(;n<=o-l;l+=n)this.process(e,l);continue}t.set(e.subarray(l,l+h),this.pos),this.pos+=h,l+=h,this.pos===n&&(this.process(t,0,!1),this.pos=0)}return this}destroy(){Ns(this.h,this.r,this.buffer,this.pad)}digestInto(e){Gu(this),Ep(e,this),this.finished=!0;const{buffer:t,h:n}=this;let{pos:o}=this;if(o){for(t[o++]=1;o<16;o++)t[o]=0;this.process(t,0,!0)}this.finalize();let l=0;for(let h=0;h<8;h++)e[l++]=n[h]>>>0,e[l++]=n[h]>>>8;return e}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const n=e.slice(0,t);return this.destroy(),n}}function yy(r){const e=(n,o)=>r(o).update(n).digest(),t=r(new Uint8Array(32));return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=n=>r(n),e}const gy=yy(r=>new _y(r));function by(r,e,t,n,o,l=20){let h=r[0],g=r[1],S=r[2],E=r[3],k=e[0],x=e[1],F=e[2],H=e[3],J=e[4],Y=e[5],ve=e[6],ke=e[7],$e=o,Re=t[0],Le=t[1],gt=t[2],wt=h,Fe=g,ze=S,Qe=E,ut=k,ht=x,dt=F,W=H,ye=J,ce=Y,ie=ve,se=ke,Oe=$e,pe=Re,Ee=Le,Ve=gt;for(let Kt=0;Kt<l;Kt+=2)wt=wt+ut|0,Oe=Be(Oe^wt,16),ye=ye+Oe|0,ut=Be(ut^ye,12),wt=wt+ut|0,Oe=Be(Oe^wt,8),ye=ye+Oe|0,ut=Be(ut^ye,7),Fe=Fe+ht|0,pe=Be(pe^Fe,16),ce=ce+pe|0,ht=Be(ht^ce,12),Fe=Fe+ht|0,pe=Be(pe^Fe,8),ce=ce+pe|0,ht=Be(ht^ce,7),ze=ze+dt|0,Ee=Be(Ee^ze,16),ie=ie+Ee|0,dt=Be(dt^ie,12),ze=ze+dt|0,Ee=Be(Ee^ze,8),ie=ie+Ee|0,dt=Be(dt^ie,7),Qe=Qe+W|0,Ve=Be(Ve^Qe,16),se=se+Ve|0,W=Be(W^se,12),Qe=Qe+W|0,Ve=Be(Ve^Qe,8),se=se+Ve|0,W=Be(W^se,7),wt=wt+ht|0,Ve=Be(Ve^wt,16),ie=ie+Ve|0,ht=Be(ht^ie,12),wt=wt+ht|0,Ve=Be(Ve^wt,8),ie=ie+Ve|0,ht=Be(ht^ie,7),Fe=Fe+dt|0,Oe=Be(Oe^Fe,16),se=se+Oe|0,dt=Be(dt^se,12),Fe=Fe+dt|0,Oe=Be(Oe^Fe,8),se=se+Oe|0,dt=Be(dt^se,7),ze=ze+W|0,pe=Be(pe^ze,16),ye=ye+pe|0,W=Be(W^ye,12),ze=ze+W|0,pe=Be(pe^ze,8),ye=ye+pe|0,W=Be(W^ye,7),Qe=Qe+ut|0,Ee=Be(Ee^Qe,16),ce=ce+Ee|0,ut=Be(ut^ce,12),Qe=Qe+ut|0,Ee=Be(Ee^Qe,8),ce=ce+Ee|0,ut=Be(ut^ce,7);let He=0;n[He++]=h+wt|0,n[He++]=g+Fe|0,n[He++]=S+ze|0,n[He++]=E+Qe|0,n[He++]=k+ut|0,n[He++]=x+ht|0,n[He++]=F+dt|0,n[He++]=H+W|0,n[He++]=J+ye|0,n[He++]=Y+ce|0,n[He++]=ve+ie|0,n[He++]=ke+se|0,n[He++]=$e+Oe|0,n[He++]=Re+pe|0,n[He++]=Le+Ee|0,n[He++]=gt+Ve|0}function wy(r,e,t,n){let o=r[0],l=r[1],h=r[2],g=r[3],S=e[0],E=e[1],k=e[2],x=e[3],F=e[4],H=e[5],J=e[6],Y=e[7],ve=t[0],ke=t[1],$e=t[2],Re=t[3];for(let gt=0;gt<20;gt+=2)o=o+S|0,ve=Be(ve^o,16),F=F+ve|0,S=Be(S^F,12),o=o+S|0,ve=Be(ve^o,8),F=F+ve|0,S=Be(S^F,7),l=l+E|0,ke=Be(ke^l,16),H=H+ke|0,E=Be(E^H,12),l=l+E|0,ke=Be(ke^l,8),H=H+ke|0,E=Be(E^H,7),h=h+k|0,$e=Be($e^h,16),J=J+$e|0,k=Be(k^J,12),h=h+k|0,$e=Be($e^h,8),J=J+$e|0,k=Be(k^J,7),g=g+x|0,Re=Be(Re^g,16),Y=Y+Re|0,x=Be(x^Y,12),g=g+x|0,Re=Be(Re^g,8),Y=Y+Re|0,x=Be(x^Y,7),o=o+E|0,Re=Be(Re^o,16),J=J+Re|0,E=Be(E^J,12),o=o+E|0,Re=Be(Re^o,8),J=J+Re|0,E=Be(E^J,7),l=l+k|0,ve=Be(ve^l,16),Y=Y+ve|0,k=Be(k^Y,12),l=l+k|0,ve=Be(ve^l,8),Y=Y+ve|0,k=Be(k^Y,7),h=h+x|0,ke=Be(ke^h,16),F=F+ke|0,x=Be(x^F,12),h=h+x|0,ke=Be(ke^h,8),F=F+ke|0,x=Be(x^F,7),g=g+S|0,$e=Be($e^g,16),H=H+$e|0,S=Be(S^H,12),g=g+S|0,$e=Be($e^g,8),H=H+$e|0,S=Be(S^H,7);let Le=0;n[Le++]=o,n[Le++]=l,n[Le++]=h,n[Le++]=g,n[Le++]=ve,n[Le++]=ke,n[Le++]=$e,n[Le++]=Re}const Ny=my(by,{counterRight:!1,counterLength:8,extendNonceFn:wy,allowShortKeys:!1}),xy=new Uint8Array(16),_f=(r,e)=>{r.update(e);const t=e.length%16;t&&r.update(xy.subarray(t))},vy=new Uint8Array(32);function yf(r,e,t,n,o){o!==void 0&&_r(o,void 0,"AAD");const l=r(e,t,vy),h=Rp(n.length,o?o.length:0,!0),g=gy.create(l);o&&_f(g,o),_f(g,n),g.update(h);const S=g.digest();return Ns(l,h),S}const gf=Wp({blockSize:64,nonceLength:24,tagLength:16},(r=>(e,t,n)=>({encrypt(l,h){const g=l.length;h=ed(g+16,h,!1),h.set(l);const S=h.subarray(0,-16);r(e,t,S,S,1);const E=yf(r,e,t,S,n);return h.set(E,g),Ns(E),h},decrypt(l,h){h=ed(l.length-16,h,!1);const g=l.subarray(0,-16),S=l.subarray(-16),E=yf(r,e,t,g,n);if(!Fp(S,E))throw new Error("invalid tag");return h.set(l.subarray(0,-16)),r(e,t,h,h,1),Ns(E),h}}))(Ny)),dc=mt("Entropy",ka),qy=Aa(16)(dc),bf=Aa(32)(dc);Aa(64)(dc);const wf=()=>({create:$p}),fc=(r,e)=>{let t=Ml(dd,rd("Symmetric key seed"),r);for(const n of e){const o=typeof n=="number"?n.toString():n;t=Sy(o,t)}return t.slice(32,64)},Sy=(r,e)=>{const t=rd(r),n=new globalThis.Uint8Array(t.byteLength+1);return n[0]=0,n.set(t,1),Ml(dd,e.slice(0,32),n)},ky=mt("EncryptionKey",bf),Ey=r=>{const e=Ze.orThrow(24);return{nonceLength:e,encrypt:(n,o)=>{const l=r.randomBytes.create(e),h=gf(o,l).encrypt(n);return{nonce:l,ciphertext:h}},decrypt:(n,o,l)=>Bi(()=>gf(o,l).decrypt(n),h=>({type:"SymmetricCryptoDecryptError",error:h}))}},Ay=r=>{if(r<=0)return Ze.orThrow(0);const e=31-Math.clz32(r>>>0),t=32-Math.clz32(e>>>0),o=(1<<Math.max(0,e-t))-1;return Ze.orThrow(r+o&~o)},Iy=r=>{const e=Ay(r),t=Ze.orThrow(e-r);return new globalThis.Uint8Array(t)},Nf=(r,e)=>r===e,Oy=Nf,hc=Nf,xf=(r=>(e,t)=>{if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1;return!0})(hc),Ty=r=>(e,t)=>{if(e===t)return!0;for(const n in r)if(!r[n](e[n],t[n]))return!1;return!0},As=r=>{const e=t=>Object.getOwnPropertyNames(t).reduce((o,l)=>{const h=t[l];return l==="cause"&&h instanceof Error?o[l]=e(h):typeof h!="function"&&(o[l]=h),o},{});if(r instanceof Error)return{type:"TransferableError",error:e(r)};try{return{type:"TransferableError",error:structuredClone(r)}}catch{try{return{type:"TransferableError",error:String(r)}}catch{return{type:"TransferableError",error:"[Unserializable Object]"}}}};function BN(r){return r}const Cy=()=>!0,vf=()=>!1,Py=Pa(sc,rr,Mi,ka),Ly=(r,e)=>r instanceof globalThis.Uint8Array&&e instanceof globalThis.Uint8Array?xf(r,e):r===e,Fy=r=>async(e,t)=>Bm(async()=>{const n=await r.createSqliteDriver(e,t);let o=!1;const l=()=>Bi(()=>{var g;(g=r.console)==null||g.log("[sql] rollback"),n.exec(We`rollback;`,!0)},pc);return{exec:g=>Bi(()=>{var E,k;(E=r.console)==null||E.log("[sql]",{query:g});const S=Wy(g,()=>n.exec(g,Dy(g.sql)));return(k=r.console)==null||k.log("[sql]",{result:S}),S},S=>({type:"SqliteError",error:As(S)})),transaction:g=>{var E,k;const S=Bi(()=>{var F,H;(F=r.console)==null||F.log("[sql] begin"),n.exec(We`begin;`,!0);const x=g();return x.ok&&((H=r.console)==null||H.log("[sql] commit"),n.exec(We`commit;`,!0)),x},pc);if(!S.ok){const x=l();return x.ok?S:((E=r.console)==null||E.log("[sql] rollback failed",x.error),Se({type:"SqliteError",error:S.error.error,rollbackError:x.error.error}))}if(!S.value.ok){const x=l();return x.ok?S.value:((k=r.console)==null||k.log("[sql] rollback failed",x.error),Se({type:"SqliteError",error:As(S.value.error),rollbackError:x.error.error}))}return de(S.value.value)},export:()=>Bi(()=>n.export(),g=>({type:"SqliteError",error:As(g)})),[Symbol.dispose]:()=>{o||(o=!0,n[Symbol.dispose]())}}},pc),pc=r=>({type:"SqliteError",error:As(r)}),Wy=(r,e)=>{var l;if(!((l=r.options)!=null&&l.logQueryExecutionTime))return e();const t=performance.now(),n=e(),o=performance.now()-t;return console.log(`SqliteQueryExecutionTime: ${o.toString()}ms`,r),n},Ry=(r,e)=>{let t=!1;const n=new Map;return{get:(o,l)=>{var g;if(l!==!0&&!((g=o.options)!=null&&g.prepare))return null;let h=n.get(o.sql);return h||(h=r(o.sql),n.set(o.sql,h)),h},[Symbol.dispose]:()=>{t||(t=!0,n.forEach(e),n.clear())}}},We=(r,...e)=>{let t="";const n=[];for(let o=0;o<r.length;o++)if(t+=r[o],o<e.length){const l=e[o];typeof l=="object"&&l!=null&&"type"in l?t+=l.sql:(t+="?",n.push(l))}return{sql:t,parameters:n}};We.identifier=r=>({type:"SqlIdentifier",sql:`"${r.replace(/"/g,'""')}"`}),We.raw=r=>({type:"RawSql",sql:r}),We.prepared=(r,...e)=>({...We(r,...e),options:{prepare:!0}});const Dy=r=>{const e=qf.get(r);if(e!==void 0)return e;const t=By.test(My(r));return qf.set(r,t),t},qf=ay(Fr.orThrow(1e4)),By=new RegExp(`\\b(${["alter","create","delete","drop","insert","replace","update","begin","commit","rollback","pragma","vacuum"].join("|")})\\b`,"i"),My=r=>{if(!r.includes("--"))return r;let e="",t=0;for(;t<r.length;)if(t<r.length-1&&r[t]==="-"&&r[t+1]==="-"){for(t+=2;t<r.length&&r[t]!==`
`;)t++;t<r.length&&r[t]===`
`&&(e+=`
`,t++)}else e+=r[t],t++;return e},Uy=r=>e=>{const t=r.sqlite.exec({...e,sql:`EXPLAIN QUERY PLAN ${e.sql}`});return t.ok?(console.log("[explainSqliteQueryPlan]",e),console.log($y(t.value.rows)),de()):t},$y=r=>r.map(e=>{let t=e.parent,n=0;do{const o=r.find(l=>l.id===t);if(!o)break;t=o.parent,n++}while(!0);return`${"  ".repeat(n)}${e.detail}`}).join(`
`),Sf=Pa(0,1),kf=1,jy=0,Qy=r=>r?kf:jy,zy=r=>r===kf,Vy=({init:r,onMessage:e})=>{let t=null,n=null;const o=[];let l=!1;const h=k=>{Ir(t!=null,"The onMessage wasn't set"),t(k)},g=k=>{h({type:"onError",error:As(k)})},S=k=>(...x)=>{try{k(...x)}catch(F){g(F)}};return{postMessage:k=>{if(k.type!=="init"){n?S(e(n))(k):o.push(k);return}l||(l=!0,r(k,h,S).then(x=>{if(x!=null){n=x;for(const F of o)S(e(n))(F);o.length=0}}).catch(g))},onMessage:k=>{t=k}}},Hy=({init:r,handlers:e})=>Vy({init:r,onMessage:t=>n=>{const o=n.type,l=e[o];l(t)(n)}}),Ky=mt("OwnerId",ac),Jy=mt("OwnerIdBytes",y_),Fa=r=>Oa(r),Wa=r=>Ta(r);Ze.orThrow(16);const Gy=mt("OwnerEncryptionKey",ky),Xy=mt("OwnerWriteKey",qy);mt("OwnerSecret",bf);const Yy=r=>r.randomBytes.create(32),Zy=r=>gm(r,Ql),eg=r=>gd(r,Ql),tg=r=>({id:Wa(Jy.orThrow(fc(r,["Evolu","OwnerIdBytes"]).slice(0,16))),encryptionKey:Gy.orThrow(fc(r,["Evolu","OwnerEncryptionKey"])),writeKey:Xy.orThrow(fc(r,["Evolu","OwnerWriteKey"]).slice(0,16))}),Ef=r=>({...tg(r),type:"AppOwner",mnemonic:Zy(r)}),rg=r=>r+1,ng=r=>r-1,ig=(r,e=Fr.orThrow(16),t=Fr.orThrow(2))=>{const n=e*t;if(r<n)return Se(Fr.orThrow(n));const o=[],l=Math.floor(r/e),h=r%e;let g=0;for(let S=0;S<e;S++){const E=S<h,k=l+(E?1:0);g+=k,o.push(Fr.orThrow(g))}return Fl(o),de(o)};function fi(r){return typeof r>"u"||r===void 0}function Er(r){return typeof r=="string"}function Ra(r){return typeof r=="number"}function Da(r){return typeof r=="boolean"}function mc(r){return r===null}function sg(r){return r instanceof Date}function _c(r){return typeof r=="bigint"}function Wr(r){return typeof r=="function"}function rn(r){return typeof r=="object"&&r!==null}function m(r){return Object.freeze(r)}function Ba(r){return Dn(r)?r:[r]}function Dn(r){return Array.isArray(r)}function Rr(r){return r}const vt=m({is(r){return r.kind==="AlterTableNode"},create(r){return m({kind:"AlterTableNode",table:r})},cloneWithTableProps(r,e){return m({...r,...e})},cloneWithColumnAlteration(r,e){return m({...r,columnAlterations:r.columnAlterations?[...r.columnAlterations,e]:[e]})}}),Pt=m({is(r){return r.kind==="IdentifierNode"},create(r){return m({kind:"IdentifierNode",name:r})}}),Bn=m({is(r){return r.kind==="CreateIndexNode"},create(r){return m({kind:"CreateIndexNode",name:Pt.create(r)})},cloneWith(r,e){return m({...r,...e})},cloneWithColumns(r,e){return m({...r,columns:[...r.columns||[],...e]})}}),Af=m({is(r){return r.kind==="CreateSchemaNode"},create(r,e){return m({kind:"CreateSchemaNode",schema:Pt.create(r),...e})},cloneWith(r,e){return m({...r,...e})}}),og=["preserve rows","delete rows","drop"],Dr=m({is(r){return r.kind==="CreateTableNode"},create(r){return m({kind:"CreateTableNode",table:r,columns:m([])})},cloneWithColumn(r,e){return m({...r,columns:m([...r.columns,e])})},cloneWithConstraint(r,e){return m({...r,constraints:r.constraints?m([...r.constraints,e]):m([e])})},cloneWithFrontModifier(r,e){return m({...r,frontModifiers:r.frontModifiers?m([...r.frontModifiers,e]):m([e])})},cloneWithEndModifier(r,e){return m({...r,endModifiers:r.endModifiers?m([...r.endModifiers,e]):m([e])})},cloneWith(r,e){return m({...r,...e})}}),Mn=m({is(r){return r.kind==="SchemableIdentifierNode"},create(r){return m({kind:"SchemableIdentifierNode",identifier:Pt.create(r)})},createWithSchema(r,e){return m({kind:"SchemableIdentifierNode",schema:Pt.create(r),identifier:Pt.create(e)})}}),So=m({is(r){return r.kind==="DropIndexNode"},create(r,e){return m({kind:"DropIndexNode",name:Mn.create(r),...e})},cloneWith(r,e){return m({...r,...e})}}),yc=m({is(r){return r.kind==="DropSchemaNode"},create(r,e){return m({kind:"DropSchemaNode",schema:Pt.create(r),...e})},cloneWith(r,e){return m({...r,...e})}}),gc=m({is(r){return r.kind==="DropTableNode"},create(r,e){return m({kind:"DropTableNode",table:r,...e})},cloneWith(r,e){return m({...r,...e})}}),hi=m({is(r){return r.kind==="AliasNode"},create(r,e){return m({kind:"AliasNode",node:r,alias:e})}}),Nn=m({is(r){return r.kind==="TableNode"},create(r){return m({kind:"TableNode",table:Mn.create(r)})},createWithSchema(r,e){return m({kind:"TableNode",table:Mn.createWithSchema(r,e)})}});function Br(r){return rn(r)&&Wr(r.toOperationNode)}function If(r){return rn(r)&&"expressionType"in r&&Br(r)}function ag(r){return rn(r)&&"expression"in r&&Er(r.alias)&&Br(r)}const Un=m({is(r){return r.kind==="SelectModifierNode"},create(r,e){return m({kind:"SelectModifierNode",modifier:r,of:e})},createWithExpression(r){return m({kind:"SelectModifierNode",rawModifier:r})}}),pi=m({is(r){return r.kind==="AndNode"},create(r,e){return m({kind:"AndNode",left:r,right:e})}}),Is=m({is(r){return r.kind==="OrNode"},create(r,e){return m({kind:"OrNode",left:r,right:e})}}),bc=m({is(r){return r.kind==="OnNode"},create(r){return m({kind:"OnNode",on:r})},cloneWithOperation(r,e,t){return m({...r,on:e==="And"?pi.create(r.on,t):Is.create(r.on,t)})}}),$i=m({is(r){return r.kind==="JoinNode"},create(r,e){return m({kind:"JoinNode",joinType:r,table:e,on:void 0})},createWithOn(r,e,t){return m({kind:"JoinNode",joinType:r,table:e,on:bc.create(t)})},cloneWithOn(r,e){return m({...r,on:r.on?bc.cloneWithOperation(r.on,"And",e):bc.create(e)})}}),Os=m({is(r){return r.kind==="BinaryOperationNode"},create(r,e,t){return m({kind:"BinaryOperationNode",leftOperand:r,operator:e,rightOperand:t})}}),lg=["=","==","!=","<>",">",">=","<","<=","in","not in","is","is not","like","not like","match","ilike","not ilike","@>","<@","^@","&&","?","?&","?|","!<","!>","<=>","!~","~","~*","!~*","@@","@@@","!!","<->","regexp","is distinct from","is not distinct from"],cg=["+","-","*","/","%","^","&","|","#","<<",">>"],Of=["->","->>"],ug=[...lg,...cg,"&&","||"],dg=["not","-",...["exists","not exists"]],fg=[...ug,...Of,...dg,"between","between symmetric"],mi=m({is(r){return r.kind==="OperatorNode"},create(r){return m({kind:"OperatorNode",operator:r})}});function Tf(r){return Er(r)&&Of.includes(r)}const Gt=m({is(r){return r.kind==="ColumnNode"},create(r){return m({kind:"ColumnNode",column:Pt.create(r)})}}),wc=m({is(r){return r.kind==="SelectAllNode"},create(){return m({kind:"SelectAllNode"})}}),Ma=m({is(r){return r.kind==="ReferenceNode"},create(r,e){return m({kind:"ReferenceNode",table:e,column:r})},createSelectAll(r){return m({kind:"ReferenceNode",table:r,column:wc.create()})}});class hg{constructor(e){ne(this,zs);le(this,zs,e)}get dynamicReference(){return s(this,zs)}get refType(){}toOperationNode(){return Rf(s(this,zs))}}zs=new WeakMap;function Cf(r){return rn(r)&&Br(r)&&Er(r.dynamicReference)}const $n=m({is(r){return r.kind==="OrderByItemNode"},create(r,e){return m({kind:"OrderByItemNode",orderBy:r,direction:e})},cloneWith(r,e){return m({...r,...e})}}),Mr=m({is(r){return r.kind==="RawNode"},create(r,e){return m({kind:"RawNode",sqlFragments:m(r),parameters:m(e)})},createWithSql(r){return Mr.create([r],[])},createWithChild(r){return Mr.create(["",""],[r])},createWithChildren(r){return Mr.create(new Array(r.length+1).fill(""),r)}}),pg=m({is(r){return r.kind==="CollateNode"},create(r){return m({kind:"CollateNode",collation:Pt.create(r)})}}),es=class es{constructor(e){ne(this,kn);le(this,kn,m(e))}desc(){return new es({node:$n.cloneWith(s(this,kn).node,{direction:Mr.createWithSql("desc")})})}asc(){return new es({node:$n.cloneWith(s(this,kn).node,{direction:Mr.createWithSql("asc")})})}nullsLast(){return new es({node:$n.cloneWith(s(this,kn).node,{nulls:"last"})})}nullsFirst(){return new es({node:$n.cloneWith(s(this,kn).node,{nulls:"first"})})}collate(e){return new es({node:$n.cloneWith(s(this,kn).node,{collation:pg.create(e)})})}toOperationNode(){return s(this,kn).node}};kn=new WeakMap;let Nc=es;const Pf=new Set;function Ts(r){Pf.has(r)||(Pf.add(r),console.log(r))}function Lf(r){return r==="asc"||r==="desc"}function ji(r){if(r.length===2)return[xc(r[0],r[1])];if(r.length===1){const[e]=r;return Array.isArray(e)?(Ts("orderBy(array) is deprecated, use multiple orderBy calls instead."),e.map(t=>xc(t))):[xc(e)]}throw new Error(`Invalid number of arguments at order by! expected 1-2, received ${r.length}`)}function xc(r,e){const t=mg(r);if($n.is(t)){if(e)throw new Error("Cannot specify direction twice!");return t}return Ff(t,e)}function mg(r){if(Lo(r))return Vi(r);if(Cf(r))return r.toOperationNode();const[e,t]=r.split(" ");return t?(Ts("`orderBy('column asc')` is deprecated. Use `orderBy('column', 'asc')` instead."),Ff(_i(e),t)):_i(r)}function Ff(r,e){if(typeof e=="string"){if(!Lf(e))throw new Error(`Invalid order by direction: ${e}`);return $n.create(r,Mr.createWithSql(e))}if(If(e))return Ts("`orderBy(..., expr)` is deprecated. Use `orderBy(..., 'asc')` or `orderBy(..., (ob) => ...)` instead."),$n.create(r,e.toOperationNode());const t=$n.create(r);return e?e(new Nc({node:t})).toOperationNode():t}const Ua=m({is(r){return r.kind==="JSONReferenceNode"},create(r,e){return m({kind:"JSONReferenceNode",reference:r,traversal:e})},cloneWithTraversal(r,e){return m({...r,traversal:e})}}),Wf=m({is(r){return r.kind==="JSONOperatorChainNode"},create(r){return m({kind:"JSONOperatorChainNode",operator:r,values:m([])})},cloneWithValue(r,e){return m({...r,values:m([...r.values,e])})}}),ko=m({is(r){return r.kind==="JSONPathNode"},create(r){return m({kind:"JSONPathNode",inOperator:r,pathLegs:m([])})},cloneWithLeg(r,e){return m({...r,pathLegs:m([...r.pathLegs,e])})}});function Rf(r){return Er(r)?_i(r):r.toOperationNode()}function Eo(r){return Dn(r)?r.map(e=>Ur(e)):[Ur(r)]}function Ur(r){return Lo(r)?Vi(r):Rf(r)}function _g(r,e){const t=_i(r);if(Tf(e))return Ua.create(t,Wf.create(mi.create(e)));const n=e.slice(0,-1);if(Tf(n))return Ua.create(t,ko.create(mi.create(n)));throw new Error(`Invalid JSON operator: ${e}`)}function _i(r){const e=".";if(!r.includes(e))return Ma.create(Gt.create(r));const t=r.split(e).map(vc);if(t.length===3)return gg(t);if(t.length===2)return bg(t);throw new Error(`invalid column reference ${r}`)}function yg(r){const e=" as ";if(r.includes(e)){const[t,n]=r.split(e).map(vc);return hi.create(_i(t),Pt.create(n))}else return _i(r)}function Df(r){return Gt.create(r)}function $a(r){const e=" ";if(r.includes(e)){const[t,n]=r.split(e).map(vc);if(!Lf(n))throw new Error(`invalid order direction "${n}" next to "${t}"`);return ji([t,n])[0]}else return Df(r)}function gg(r){const[e,t,n]=r;return Ma.create(Gt.create(n),Nn.createWithSchema(e,t))}function bg(r){const[e,t]=r;return Ma.create(Gt.create(t),Nn.create(e))}function vc(r){return r.trim()}const Bf=m({is(r){return r.kind==="PrimitiveValueListNode"},create(r){return m({kind:"PrimitiveValueListNode",values:m([...r])})}}),ja=m({is(r){return r.kind==="ValueListNode"},create(r){return m({kind:"ValueListNode",values:m(r)})}}),nn=m({is(r){return r.kind==="ValueNode"},create(r){return m({kind:"ValueNode",value:r})},createImmediate(r){return m({kind:"ValueNode",value:r,immediate:!0})}});function wg(r){return Dn(r)?Ng(r):ur(r)}function ur(r){return Lo(r)?Vi(r):nn.create(r)}function qc(r){return Ra(r)||Da(r)||mc(r)}function Sc(r){if(!qc(r))throw new Error(`unsafe immediate value ${JSON.stringify(r)}`);return nn.createImmediate(r)}function Ng(r){return r.some(Lo)?ja.create(r.map(e=>ur(e))):Bf.create(r)}const jn=m({is(r){return r.kind==="ParensNode"},create(r){return m({kind:"ParensNode",node:r})}});function gr(r){if(r.length===3)return kc(r[0],r[1],r[2]);if(r.length===1)return ur(r[0]);throw new Error(`invalid arguments: ${JSON.stringify(r)}`)}function kc(r,e,t){return xg(e)&&Uf(t)?Os.create(Ur(r),Ec(e),nn.createImmediate(t)):Os.create(Ur(r),Ec(e),wg(t))}function xn(r,e,t){return Os.create(Ur(r),Ec(e),Ur(t))}function Mf(r,e){return Qa(Object.entries(r).filter(([,t])=>!fi(t)).map(([t,n])=>kc(t,Uf(n)?"is":"=",n)),e)}function Qa(r,e,t=!0){const n=e==="and"?pi.create:Is.create;if(r.length===0)return Os.create(nn.createImmediate(1),mi.create("="),nn.createImmediate(e==="and"?1:0));let o=$f(r[0]);for(let l=1;l<r.length;++l)o=n(o,$f(r[l]));return r.length>1&&t?jn.create(o):o}function xg(r){return r==="is"||r==="is not"}function Uf(r){return mc(r)||Da(r)}function Ec(r){if(Er(r)&&fg.includes(r))return mi.create(r);if(Br(r))return r.toOperationNode();throw new Error(`invalid operator ${JSON.stringify(r)}`)}function $f(r){return Br(r)?r.toOperationNode():r}const Cs=m({is(r){return r.kind==="OrderByNode"},create(r){return m({kind:"OrderByNode",items:m([...r])})},cloneWithItems(r,e){return m({...r,items:m([...r.items,...e])})}}),jf=m({is(r){return r.kind==="PartitionByNode"},create(r){return m({kind:"PartitionByNode",items:m(r)})},cloneWithItems(r,e){return m({...r,items:m([...r.items,...e])})}}),Ac=m({is(r){return r.kind==="OverNode"},create(){return m({kind:"OverNode"})},cloneWithOrderByItems(r,e){return m({...r,orderBy:r.orderBy?Cs.cloneWithItems(r.orderBy,e):Cs.create(e)})},cloneWithPartitionByItems(r,e){return m({...r,partitionBy:r.partitionBy?jf.cloneWithItems(r.partitionBy,e):jf.create(e)})}}),za=m({is(r){return r.kind==="FromNode"},create(r){return m({kind:"FromNode",froms:m(r)})},cloneWithFroms(r,e){return m({...r,froms:m([...r.froms,...e])})}}),Qf=m({is(r){return r.kind==="GroupByNode"},create(r){return m({kind:"GroupByNode",items:m(r)})},cloneWithItems(r,e){return m({...r,items:m([...r.items,...e])})}}),zf=m({is(r){return r.kind==="HavingNode"},create(r){return m({kind:"HavingNode",having:r})},cloneWithOperation(r,e,t){return m({...r,having:e==="And"?pi.create(r.having,t):Is.create(r.having,t)})}}),dr=m({is(r){return r.kind==="InsertQueryNode"},create(r,e,t){return m({kind:"InsertQueryNode",into:r,...e&&{with:e},replace:t})},createWithoutInto(){return m({kind:"InsertQueryNode"})},cloneWith(r,e){return m({...r,...e})}}),Vf=m({is(r){return r.kind==="ListNode"},create(r){return m({kind:"ListNode",items:m(r)})}}),Ps=m({is(r){return r.kind==="UpdateQueryNode"},create(r,e){return m({kind:"UpdateQueryNode",table:r.length===1?r[0]:Vf.create(r),...e&&{with:e}})},createWithoutTable(){return m({kind:"UpdateQueryNode"})},cloneWithFromItems(r,e){return m({...r,from:r.from?za.cloneWithFroms(r.from,e):za.create(e)})},cloneWithUpdates(r,e){return m({...r,updates:r.updates?m([...r.updates,...e]):e})},cloneWithLimit(r,e){return m({...r,limit:e})}}),Ic=m({is(r){return r.kind==="UsingNode"},create(r){return m({kind:"UsingNode",tables:m(r)})},cloneWithTables(r,e){return m({...r,tables:m([...r.tables,...e])})}}),Ao=m({is(r){return r.kind==="DeleteQueryNode"},create(r,e){return m({kind:"DeleteQueryNode",from:za.create(r),...e&&{with:e}})},cloneWithOrderByItems:(r,e)=>Pe.cloneWithOrderByItems(r,e),cloneWithoutOrderBy:r=>Pe.cloneWithoutOrderBy(r),cloneWithLimit(r,e){return m({...r,limit:e})},cloneWithoutLimit(r){return m({...r,limit:void 0})},cloneWithUsing(r,e){return m({...r,using:r.using!==void 0?Ic.cloneWithTables(r.using,e):Ic.create(e)})}}),Tr=m({is(r){return r.kind==="WhereNode"},create(r){return m({kind:"WhereNode",where:r})},cloneWithOperation(r,e,t){return m({...r,where:e==="And"?pi.create(r.where,t):Is.create(r.where,t)})}}),Hf=m({is(r){return r.kind==="ReturningNode"},create(r){return m({kind:"ReturningNode",selections:m(r)})},cloneWithSelections(r,e){return m({...r,selections:r.selections?m([...r.selections,...e]):m(e)})}}),vg=m({is(r){return r.kind==="ExplainNode"},create(r,e){return m({kind:"ExplainNode",format:r,options:e})}}),Qi=m({is(r){return r.kind==="WhenNode"},create(r){return m({kind:"WhenNode",condition:r})},cloneWithResult(r,e){return m({...r,result:e})}}),vn=m({is(r){return r.kind==="MergeQueryNode"},create(r,e){return m({kind:"MergeQueryNode",into:r,...e&&{with:e}})},cloneWithUsing(r,e){return m({...r,using:e})},cloneWithWhen(r,e){return m({...r,whens:r.whens?m([...r.whens,e]):m([e])})},cloneWithThen(r,e){return m({...r,whens:r.whens?m([...r.whens.slice(0,-1),Qi.cloneWithResult(r.whens[r.whens.length-1],e)]):void 0})}}),Kf=m({is(r){return r.kind==="OutputNode"},create(r){return m({kind:"OutputNode",selections:m(r)})},cloneWithSelections(r,e){return m({...r,selections:r.selections?m([...r.selections,...e]):m(e)})}}),Pe=m({is(r){return Lt.is(r)||dr.is(r)||Ps.is(r)||Ao.is(r)||vn.is(r)},cloneWithEndModifier(r,e){return m({...r,endModifiers:r.endModifiers?m([...r.endModifiers,e]):m([e])})},cloneWithWhere(r,e){return m({...r,where:r.where?Tr.cloneWithOperation(r.where,"And",e):Tr.create(e)})},cloneWithJoin(r,e){return m({...r,joins:r.joins?m([...r.joins,e]):m([e])})},cloneWithReturning(r,e){return m({...r,returning:r.returning?Hf.cloneWithSelections(r.returning,e):Hf.create(e)})},cloneWithoutReturning(r){return m({...r,returning:void 0})},cloneWithoutWhere(r){return m({...r,where:void 0})},cloneWithExplain(r,e,t){return m({...r,explain:vg.create(e,t==null?void 0:t.toOperationNode())})},cloneWithTop(r,e){return m({...r,top:e})},cloneWithOutput(r,e){return m({...r,output:r.output?Kf.cloneWithSelections(r.output,e):Kf.create(e)})},cloneWithOrderByItems(r,e){return m({...r,orderBy:r.orderBy?Cs.cloneWithItems(r.orderBy,e):Cs.create(e)})},cloneWithoutOrderBy(r){return m({...r,orderBy:void 0})}}),Lt=m({is(r){return r.kind==="SelectQueryNode"},create(r){return m({kind:"SelectQueryNode",...r&&{with:r}})},createFrom(r,e){return m({kind:"SelectQueryNode",from:za.create(r),...e&&{with:e}})},cloneWithSelections(r,e){return m({...r,selections:r.selections?m([...r.selections,...e]):m(e)})},cloneWithDistinctOn(r,e){return m({...r,distinctOn:r.distinctOn?m([...r.distinctOn,...e]):m(e)})},cloneWithFrontModifier(r,e){return m({...r,frontModifiers:r.frontModifiers?m([...r.frontModifiers,e]):m([e])})},cloneWithOrderByItems:(r,e)=>Pe.cloneWithOrderByItems(r,e),cloneWithGroupByItems(r,e){return m({...r,groupBy:r.groupBy?Qf.cloneWithItems(r.groupBy,e):Qf.create(e)})},cloneWithLimit(r,e){return m({...r,limit:e})},cloneWithOffset(r,e){return m({...r,offset:e})},cloneWithFetch(r,e){return m({...r,fetch:e})},cloneWithHaving(r,e){return m({...r,having:r.having?zf.cloneWithOperation(r.having,"And",e):zf.create(e)})},cloneWithSetOperations(r,e){return m({...r,setOperations:r.setOperations?m([...r.setOperations,...e]):m([...e])})},cloneWithoutSelections(r){return m({...r,selections:[]})},cloneWithoutLimit(r){return m({...r,limit:void 0})},cloneWithoutOffset(r){return m({...r,offset:void 0})},cloneWithoutOrderBy:r=>Pe.cloneWithoutOrderBy(r),cloneWithoutGroupBy(r){return m({...r,groupBy:void 0})}}),$o=class $o{constructor(e){ne(this,an);le(this,an,m(e))}on(...e){return new $o({...s(this,an),joinNode:$i.cloneWithOn(s(this,an).joinNode,gr(e))})}onRef(e,t,n){return new $o({...s(this,an),joinNode:$i.cloneWithOn(s(this,an).joinNode,xn(e,t,n))})}onTrue(){return new $o({...s(this,an),joinNode:$i.cloneWithOn(s(this,an).joinNode,Mr.createWithSql("true"))})}$call(e){return e(this)}toOperationNode(){return s(this,an).joinNode}};an=new WeakMap;let Oc=$o;const qg=m({is(r){return r.kind==="PartitionByItemNode"},create(r){return m({kind:"PartitionByItemNode",partitionBy:r})}});function Sg(r){return Eo(r).map(qg.create)}const jo=class jo{constructor(e){ne(this,Ni);le(this,Ni,m(e))}orderBy(...e){return new jo({overNode:Ac.cloneWithOrderByItems(s(this,Ni).overNode,ji(e))})}clearOrderBy(){return new jo({overNode:Pe.cloneWithoutOrderBy(s(this,Ni).overNode)})}partitionBy(e){return new jo({overNode:Ac.cloneWithPartitionByItems(s(this,Ni).overNode,Sg(e))})}$call(e){return e(this)}toOperationNode(){return s(this,Ni).overNode}};Ni=new WeakMap;let Tc=jo;const Io=m({is(r){return r.kind==="SelectionNode"},create(r){return m({kind:"SelectionNode",selection:r})},createSelectAll(){return m({kind:"SelectionNode",selection:wc.create()})},createSelectAllFromTable(r){return m({kind:"SelectionNode",selection:Ma.createSelectAll(r)})}});function $r(r){return Wr(r)?$r(r(Bs())):Dn(r)?r.map(e=>Jf(e)):[Jf(r)]}function Jf(r){return Er(r)?Io.create(yg(r)):Cf(r)?Io.create(r.toOperationNode()):Io.create(_h(r))}function Gr(r){return r?Array.isArray(r)?r.map(Gf):[Gf(r)]:[Io.createSelectAll()]}function Gf(r){if(Er(r))return Io.createSelectAllFromTable(Yt(r));throw new Error(`invalid value selectAll expression: ${JSON.stringify(r)}`)}const kg=m({is(r){return r.kind==="ValuesNode"},create(r){return m({kind:"ValuesNode",values:m(r)})}}),Eg=m({is(r){return r.kind==="DefaultInsertValueNode"},create(){return m({kind:"DefaultInsertValueNode"})}});function Xf(r){const e=Wr(r)?r(Bs()):r,t=Dn(e)?e:m([e]);return Ag(t)}function Ag(r){const e=Ig(r);return[m([...e.keys()].map(Gt.create)),kg.create(r.map(t=>Og(t,e)))]}function Ig(r){const e=new Map;for(const t of r){const n=Object.keys(t);for(const o of n)!e.has(o)&&t[o]!==void 0&&e.set(o,e.size)}return e}function Og(r,e){const t=Object.keys(r),n=Array.from({length:e.size});let o=!1,l=t.length;for(const g of t){const S=e.get(g);if(fi(S)){l--;continue}const E=r[g];(fi(E)||Lo(E))&&(o=!0),n[S]=E}if(l<e.size||o){const g=Eg.create();return ja.create(n.map(S=>fi(S)?g:ur(S)))}return Bf.create(n)}const Yf=m({is(r){return r.kind==="ColumnUpdateNode"},create(r,e){return m({kind:"ColumnUpdateNode",column:r,value:e})}});function Tg(...r){return r.length===2?[Yf.create(Ur(r[0]),ur(r[1]))]:Cc(r[0])}function Cc(r){const e=Wr(r)?r(Bs()):r;return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>Yf.create(Gt.create(t),ur(n)))}const Cg=m({is(r){return r.kind==="OnDuplicateKeyNode"},create(r){return m({kind:"OnDuplicateKeyNode",updates:r})}});class Pg{constructor(e,t){Ce(this,"insertId");Ce(this,"numInsertedOrUpdatedRows");this.insertId=e,this.numInsertedOrUpdatedRows=t}}class Oo extends Error{constructor(t){super("no result");Ce(this,"node");this.node=t}}function To(r){return Object.prototype.hasOwnProperty.call(r,"prototype")}const jr=m({is(r){return r.kind==="OnConflictNode"},create(){return m({kind:"OnConflictNode"})},cloneWith(r,e){return m({...r,...e})},cloneWithIndexWhere(r,e){return m({...r,indexWhere:r.indexWhere?Tr.cloneWithOperation(r.indexWhere,"And",e):Tr.create(e)})},cloneWithIndexOrWhere(r,e){return m({...r,indexWhere:r.indexWhere?Tr.cloneWithOperation(r.indexWhere,"Or",e):Tr.create(e)})},cloneWithUpdateWhere(r,e){return m({...r,updateWhere:r.updateWhere?Tr.cloneWithOperation(r.updateWhere,"And",e):Tr.create(e)})},cloneWithUpdateOrWhere(r,e){return m({...r,updateWhere:r.updateWhere?Tr.cloneWithOperation(r.updateWhere,"Or",e):Tr.create(e)})},cloneWithoutIndexWhere(r){return m({...r,indexWhere:void 0})},cloneWithoutUpdateWhere(r){return m({...r,updateWhere:void 0})}}),zn=class zn{constructor(e){ne(this,Ft);le(this,Ft,m(e))}column(e){const t=Gt.create(e);return new zn({...s(this,Ft),onConflictNode:jr.cloneWith(s(this,Ft).onConflictNode,{columns:s(this,Ft).onConflictNode.columns?m([...s(this,Ft).onConflictNode.columns,t]):m([t])})})}columns(e){const t=e.map(Gt.create);return new zn({...s(this,Ft),onConflictNode:jr.cloneWith(s(this,Ft).onConflictNode,{columns:s(this,Ft).onConflictNode.columns?m([...s(this,Ft).onConflictNode.columns,...t]):m(t)})})}constraint(e){return new zn({...s(this,Ft),onConflictNode:jr.cloneWith(s(this,Ft).onConflictNode,{constraint:Pt.create(e)})})}expression(e){return new zn({...s(this,Ft),onConflictNode:jr.cloneWith(s(this,Ft).onConflictNode,{indexExpression:e.toOperationNode()})})}where(...e){return new zn({...s(this,Ft),onConflictNode:jr.cloneWithIndexWhere(s(this,Ft).onConflictNode,gr(e))})}whereRef(e,t,n){return new zn({...s(this,Ft),onConflictNode:jr.cloneWithIndexWhere(s(this,Ft).onConflictNode,xn(e,t,n))})}clearWhere(){return new zn({...s(this,Ft),onConflictNode:jr.cloneWithoutIndexWhere(s(this,Ft).onConflictNode)})}doNothing(){return new Lg({...s(this,Ft),onConflictNode:jr.cloneWith(s(this,Ft).onConflictNode,{doNothing:!0})})}doUpdateSet(e){return new Lc({...s(this,Ft),onConflictNode:jr.cloneWith(s(this,Ft).onConflictNode,{updates:Cc(e)})})}$call(e){return e(this)}};Ft=new WeakMap;let Pc=zn;class Lg{constructor(e){ne(this,Qo);le(this,Qo,m(e))}toOperationNode(){return s(this,Qo).onConflictNode}}Qo=new WeakMap;const zo=class zo{constructor(e){ne(this,ln);le(this,ln,m(e))}where(...e){return new zo({...s(this,ln),onConflictNode:jr.cloneWithUpdateWhere(s(this,ln).onConflictNode,gr(e))})}whereRef(e,t,n){return new zo({...s(this,ln),onConflictNode:jr.cloneWithUpdateWhere(s(this,ln).onConflictNode,xn(e,t,n))})}clearWhere(){return new zo({...s(this,ln),onConflictNode:jr.cloneWithoutUpdateWhere(s(this,ln).onConflictNode)})}$call(e){return e(this)}toOperationNode(){return s(this,ln).onConflictNode}};ln=new WeakMap;let Lc=zo;const Fg=m({is(r){return r.kind==="TopNode"},create(r,e){return m({kind:"TopNode",expression:r,modifiers:e})}});function Ls(r,e){if(!Ra(r)&&!_c(r))throw new Error(`Invalid top expression: ${r}`);if(!fi(e)&&!Wg(e))throw new Error(`Invalid top modifiers: ${e}`);return Fg.create(r,e)}function Wg(r){return r==="percent"||r==="with ties"||r==="percent with ties"}const Fs=m({is(r){return r.kind==="OrActionNode"},create(r){return m({kind:"OrActionNode",action:r})}}),Tt=class Tt{constructor(e){ne(this,je);le(this,je,m(e))}values(e){const[t,n]=Xf(e);return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{columns:t,values:n})})}columns(e){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{columns:m(e.map(Gt.create))})})}expression(e){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{values:Vi(e)})})}defaultValues(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{defaultValues:!0})})}modifyEnd(e){return new Tt({...s(this,je),queryNode:Pe.cloneWithEndModifier(s(this,je).queryNode,e.toOperationNode())})}ignore(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{orAction:Fs.create("ignore")})})}orIgnore(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{orAction:Fs.create("ignore")})})}orAbort(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{orAction:Fs.create("abort")})})}orFail(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{orAction:Fs.create("fail")})})}orReplace(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{orAction:Fs.create("replace")})})}orRollback(){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{orAction:Fs.create("rollback")})})}top(e,t){return new Tt({...s(this,je),queryNode:Pe.cloneWithTop(s(this,je).queryNode,Ls(e,t))})}onConflict(e){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{onConflict:e(new Pc({onConflictNode:jr.create()})).toOperationNode()})})}onDuplicateKeyUpdate(e){return new Tt({...s(this,je),queryNode:dr.cloneWith(s(this,je).queryNode,{onDuplicateKey:Cg.create(Cc(e))})})}returning(e){return new Tt({...s(this,je),queryNode:Pe.cloneWithReturning(s(this,je).queryNode,$r(e))})}returningAll(){return new Tt({...s(this,je),queryNode:Pe.cloneWithReturning(s(this,je).queryNode,Gr())})}output(e){return new Tt({...s(this,je),queryNode:Pe.cloneWithOutput(s(this,je).queryNode,$r(e))})}outputAll(e){return new Tt({...s(this,je),queryNode:Pe.cloneWithOutput(s(this,je).queryNode,Gr(e))})}clearReturning(){return new Tt({...s(this,je),queryNode:Pe.cloneWithoutReturning(s(this,je).queryNode)})}$call(e){return e(this)}$if(e,t){return e?t(this):new Tt({...s(this,je)})}$castTo(){return new Tt(s(this,je))}$narrowType(){return new Tt(s(this,je))}$assertType(){return new Tt(s(this,je))}withPlugin(e){return new Tt({...s(this,je),executor:s(this,je).executor.withPlugin(e)})}toOperationNode(){return s(this,je).executor.transformQuery(s(this,je).queryNode,s(this,je).queryId)}compile(){return s(this,je).executor.compileQuery(this.toOperationNode(),s(this,je).queryId)}async execute(){const e=this.compile(),t=await s(this,je).executor.executeQuery(e),{adapter:n}=s(this,je).executor,o=e.query;return o.returning&&n.supportsReturning||o.output&&n.supportsOutput?t.rows:[new Pg(t.insertId,t.numAffectedRows??BigInt(0))]}async executeTakeFirst(){const[e]=await this.execute();return e}async executeTakeFirstOrThrow(e=Oo){const t=await this.executeTakeFirst();if(t===void 0)throw To(e)?new e(this.toOperationNode()):e(this.toOperationNode());return t}async*stream(e=100){const t=this.compile(),n=s(this,je).executor.stream(t,e);for await(const o of n)yield*o.rows}async explain(e,t){return await new Tt({...s(this,je),queryNode:Pe.cloneWithExplain(s(this,je).queryNode,e,t)}).execute()}};je=new WeakMap;let Va=Tt;class Rg{constructor(e){Ce(this,"numDeletedRows");this.numDeletedRows=e}}const Fc=m({is(r){return r.kind==="LimitNode"},create(r){return m({kind:"LimitNode",limit:r})}}),Mt=class Mt{constructor(e){ne(this,ts);ne(this,Ge);le(this,Ge,m(e))}where(...e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithWhere(s(this,Ge).queryNode,gr(e))})}whereRef(e,t,n){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithWhere(s(this,Ge).queryNode,xn(e,t,n))})}clearWhere(){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithoutWhere(s(this,Ge).queryNode)})}top(e,t){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithTop(s(this,Ge).queryNode,Ls(e,t))})}using(e){return new Mt({...s(this,Ge),queryNode:Ao.cloneWithUsing(s(this,Ge).queryNode,Ms(e))})}innerJoin(...e){return Ue(this,ts,ca).call(this,"InnerJoin",e)}leftJoin(...e){return Ue(this,ts,ca).call(this,"LeftJoin",e)}rightJoin(...e){return Ue(this,ts,ca).call(this,"RightJoin",e)}fullJoin(...e){return Ue(this,ts,ca).call(this,"FullJoin",e)}returning(e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithReturning(s(this,Ge).queryNode,$r(e))})}returningAll(e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithReturning(s(this,Ge).queryNode,Gr(e))})}output(e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithOutput(s(this,Ge).queryNode,$r(e))})}outputAll(e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithOutput(s(this,Ge).queryNode,Gr(e))})}clearReturning(){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithoutReturning(s(this,Ge).queryNode)})}clearLimit(){return new Mt({...s(this,Ge),queryNode:Ao.cloneWithoutLimit(s(this,Ge).queryNode)})}orderBy(...e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithOrderByItems(s(this,Ge).queryNode,ji(e))})}clearOrderBy(){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithoutOrderBy(s(this,Ge).queryNode)})}limit(e){return new Mt({...s(this,Ge),queryNode:Ao.cloneWithLimit(s(this,Ge).queryNode,Fc.create(ur(e)))})}modifyEnd(e){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithEndModifier(s(this,Ge).queryNode,e.toOperationNode())})}$call(e){return e(this)}$if(e,t){return e?t(this):new Mt({...s(this,Ge)})}$castTo(){return new Mt(s(this,Ge))}$narrowType(){return new Mt(s(this,Ge))}$assertType(){return new Mt(s(this,Ge))}withPlugin(e){return new Mt({...s(this,Ge),executor:s(this,Ge).executor.withPlugin(e)})}toOperationNode(){return s(this,Ge).executor.transformQuery(s(this,Ge).queryNode,s(this,Ge).queryId)}compile(){return s(this,Ge).executor.compileQuery(this.toOperationNode(),s(this,Ge).queryId)}async execute(){const e=this.compile(),t=await s(this,Ge).executor.executeQuery(e),{adapter:n}=s(this,Ge).executor,o=e.query;return o.returning&&n.supportsReturning||o.output&&n.supportsOutput?t.rows:[new Rg(t.numAffectedRows??BigInt(0))]}async executeTakeFirst(){const[e]=await this.execute();return e}async executeTakeFirstOrThrow(e=Oo){const t=await this.executeTakeFirst();if(t===void 0)throw To(e)?new e(this.toOperationNode()):e(this.toOperationNode());return t}async*stream(e=100){const t=this.compile(),n=s(this,Ge).executor.stream(t,e);for await(const o of n)yield*o.rows}async explain(e,t){return await new Mt({...s(this,Ge),queryNode:Pe.cloneWithExplain(s(this,Ge).queryNode,e,t)}).execute()}};Ge=new WeakMap,ts=new WeakSet,ca=function(e,t){return new Mt({...s(this,Ge),queryNode:Pe.cloneWithJoin(s(this,Ge).queryNode,Xa(e,t))})};let Wc=Mt;class Dg{constructor(e,t){Ce(this,"numUpdatedRows");Ce(this,"numChangedRows");this.numUpdatedRows=e,this.numChangedRows=t}}const Ut=class Ut{constructor(e){ne(this,rs);ne(this,Xe);le(this,Xe,m(e))}where(...e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithWhere(s(this,Xe).queryNode,gr(e))})}whereRef(e,t,n){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithWhere(s(this,Xe).queryNode,xn(e,t,n))})}clearWhere(){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithoutWhere(s(this,Xe).queryNode)})}top(e,t){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithTop(s(this,Xe).queryNode,Ls(e,t))})}from(e){return new Ut({...s(this,Xe),queryNode:Ps.cloneWithFromItems(s(this,Xe).queryNode,Ms(e))})}innerJoin(...e){return Ue(this,rs,ua).call(this,"InnerJoin",e)}leftJoin(...e){return Ue(this,rs,ua).call(this,"LeftJoin",e)}rightJoin(...e){return Ue(this,rs,ua).call(this,"RightJoin",e)}fullJoin(...e){return Ue(this,rs,ua).call(this,"FullJoin",e)}orderBy(...e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithOrderByItems(s(this,Xe).queryNode,ji(e))})}clearOrderBy(){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithoutOrderBy(s(this,Xe).queryNode)})}limit(e){return new Ut({...s(this,Xe),queryNode:Ps.cloneWithLimit(s(this,Xe).queryNode,Fc.create(ur(e)))})}set(...e){return new Ut({...s(this,Xe),queryNode:Ps.cloneWithUpdates(s(this,Xe).queryNode,Tg(...e))})}returning(e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithReturning(s(this,Xe).queryNode,$r(e))})}returningAll(e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithReturning(s(this,Xe).queryNode,Gr(e))})}output(e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithOutput(s(this,Xe).queryNode,$r(e))})}outputAll(e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithOutput(s(this,Xe).queryNode,Gr(e))})}modifyEnd(e){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithEndModifier(s(this,Xe).queryNode,e.toOperationNode())})}clearReturning(){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithoutReturning(s(this,Xe).queryNode)})}$call(e){return e(this)}$if(e,t){return e?t(this):new Ut({...s(this,Xe)})}$castTo(){return new Ut(s(this,Xe))}$narrowType(){return new Ut(s(this,Xe))}$assertType(){return new Ut(s(this,Xe))}withPlugin(e){return new Ut({...s(this,Xe),executor:s(this,Xe).executor.withPlugin(e)})}toOperationNode(){return s(this,Xe).executor.transformQuery(s(this,Xe).queryNode,s(this,Xe).queryId)}compile(){return s(this,Xe).executor.compileQuery(this.toOperationNode(),s(this,Xe).queryId)}async execute(){const e=this.compile(),t=await s(this,Xe).executor.executeQuery(e),{adapter:n}=s(this,Xe).executor,o=e.query;return o.returning&&n.supportsReturning||o.output&&n.supportsOutput?t.rows:[new Dg(t.numAffectedRows??BigInt(0),t.numChangedRows)]}async executeTakeFirst(){const[e]=await this.execute();return e}async executeTakeFirstOrThrow(e=Oo){const t=await this.executeTakeFirst();if(t===void 0)throw To(e)?new e(this.toOperationNode()):e(this.toOperationNode());return t}async*stream(e=100){const t=this.compile(),n=s(this,Xe).executor.stream(t,e);for await(const o of n)yield*o.rows}async explain(e,t){return await new Ut({...s(this,Xe),queryNode:Pe.cloneWithExplain(s(this,Xe).queryNode,e,t)}).execute()}};Xe=new WeakMap,rs=new WeakSet,ua=function(e,t){return new Ut({...s(this,Xe),queryNode:Pe.cloneWithJoin(s(this,Xe).queryNode,Xa(e,t))})};let Ha=Ut;const Zf=m({is(r){return r.kind==="CommonTableExpressionNameNode"},create(r,e){return m({kind:"CommonTableExpressionNameNode",table:Nn.create(r),columns:e?m(e.map(Gt.create)):void 0})}}),Ka=m({is(r){return r.kind==="CommonTableExpressionNode"},create(r,e){return m({kind:"CommonTableExpressionNode",name:r,expression:e})},cloneWith(r,e){return m({...r,...e})}}),yl=class yl{constructor(e){ne(this,Vn);le(this,Vn,m(e))}materialized(){return new yl({...s(this,Vn),node:Ka.cloneWith(s(this,Vn).node,{materialized:!0})})}notMaterialized(){return new yl({...s(this,Vn),node:Ka.cloneWith(s(this,Vn).node,{materialized:!1})})}toOperationNode(){return s(this,Vn).node}};Vn=new WeakMap;let Rc=yl;function eh(r,e){const t=e(Gg()).toOperationNode();return Wr(r)?r(Bg(t)).toOperationNode():Ka.create(th(r),t)}function Bg(r){return e=>new Rc({node:Ka.create(th(e),r)})}function th(r){if(r.includes("(")){const e=r.split(/[\(\)]/),t=e[0],n=e[1].split(",").map(o=>o.trim());return Zf.create(t,n)}else return Zf.create(r)}const Ja=m({is(r){return r.kind==="WithNode"},create(r,e){return m({kind:"WithNode",expressions:m([r]),...e})},cloneWithExpression(r,e){return m({...r,expressions:m([...r.expressions,e])})}}),rh=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function Mg(r){let e="";for(let t=0;t<r;++t)e+=Ug();return e}function Ug(){return rh[~~(Math.random()*rh.length)]}function Xt(){return new $g}class $g{constructor(){ne(this,Vs)}get queryId(){return s(this,Vs)===void 0&&le(this,Vs,Mg(8)),s(this,Vs)}}Vs=new WeakMap;function UN(r){return r}class nh{constructor(){Ce(this,"nodeStack",[]);ne(this,gl,m({AliasNode:this.transformAlias.bind(this),ColumnNode:this.transformColumn.bind(this),IdentifierNode:this.transformIdentifier.bind(this),SchemableIdentifierNode:this.transformSchemableIdentifier.bind(this),RawNode:this.transformRaw.bind(this),ReferenceNode:this.transformReference.bind(this),SelectQueryNode:this.transformSelectQuery.bind(this),SelectionNode:this.transformSelection.bind(this),TableNode:this.transformTable.bind(this),FromNode:this.transformFrom.bind(this),SelectAllNode:this.transformSelectAll.bind(this),AndNode:this.transformAnd.bind(this),OrNode:this.transformOr.bind(this),ValueNode:this.transformValue.bind(this),ValueListNode:this.transformValueList.bind(this),PrimitiveValueListNode:this.transformPrimitiveValueList.bind(this),ParensNode:this.transformParens.bind(this),JoinNode:this.transformJoin.bind(this),OperatorNode:this.transformOperator.bind(this),WhereNode:this.transformWhere.bind(this),InsertQueryNode:this.transformInsertQuery.bind(this),DeleteQueryNode:this.transformDeleteQuery.bind(this),ReturningNode:this.transformReturning.bind(this),CreateTableNode:this.transformCreateTable.bind(this),AddColumnNode:this.transformAddColumn.bind(this),ColumnDefinitionNode:this.transformColumnDefinition.bind(this),DropTableNode:this.transformDropTable.bind(this),DataTypeNode:this.transformDataType.bind(this),OrderByNode:this.transformOrderBy.bind(this),OrderByItemNode:this.transformOrderByItem.bind(this),GroupByNode:this.transformGroupBy.bind(this),GroupByItemNode:this.transformGroupByItem.bind(this),UpdateQueryNode:this.transformUpdateQuery.bind(this),ColumnUpdateNode:this.transformColumnUpdate.bind(this),LimitNode:this.transformLimit.bind(this),OffsetNode:this.transformOffset.bind(this),OnConflictNode:this.transformOnConflict.bind(this),OnDuplicateKeyNode:this.transformOnDuplicateKey.bind(this),CreateIndexNode:this.transformCreateIndex.bind(this),DropIndexNode:this.transformDropIndex.bind(this),ListNode:this.transformList.bind(this),PrimaryKeyConstraintNode:this.transformPrimaryKeyConstraint.bind(this),UniqueConstraintNode:this.transformUniqueConstraint.bind(this),ReferencesNode:this.transformReferences.bind(this),CheckConstraintNode:this.transformCheckConstraint.bind(this),WithNode:this.transformWith.bind(this),CommonTableExpressionNode:this.transformCommonTableExpression.bind(this),CommonTableExpressionNameNode:this.transformCommonTableExpressionName.bind(this),HavingNode:this.transformHaving.bind(this),CreateSchemaNode:this.transformCreateSchema.bind(this),DropSchemaNode:this.transformDropSchema.bind(this),AlterTableNode:this.transformAlterTable.bind(this),DropColumnNode:this.transformDropColumn.bind(this),RenameColumnNode:this.transformRenameColumn.bind(this),AlterColumnNode:this.transformAlterColumn.bind(this),ModifyColumnNode:this.transformModifyColumn.bind(this),AddConstraintNode:this.transformAddConstraint.bind(this),DropConstraintNode:this.transformDropConstraint.bind(this),RenameConstraintNode:this.transformRenameConstraint.bind(this),ForeignKeyConstraintNode:this.transformForeignKeyConstraint.bind(this),CreateViewNode:this.transformCreateView.bind(this),RefreshMaterializedViewNode:this.transformRefreshMaterializedView.bind(this),DropViewNode:this.transformDropView.bind(this),GeneratedNode:this.transformGenerated.bind(this),DefaultValueNode:this.transformDefaultValue.bind(this),OnNode:this.transformOn.bind(this),ValuesNode:this.transformValues.bind(this),SelectModifierNode:this.transformSelectModifier.bind(this),CreateTypeNode:this.transformCreateType.bind(this),DropTypeNode:this.transformDropType.bind(this),ExplainNode:this.transformExplain.bind(this),DefaultInsertValueNode:this.transformDefaultInsertValue.bind(this),AggregateFunctionNode:this.transformAggregateFunction.bind(this),OverNode:this.transformOver.bind(this),PartitionByNode:this.transformPartitionBy.bind(this),PartitionByItemNode:this.transformPartitionByItem.bind(this),SetOperationNode:this.transformSetOperation.bind(this),BinaryOperationNode:this.transformBinaryOperation.bind(this),UnaryOperationNode:this.transformUnaryOperation.bind(this),UsingNode:this.transformUsing.bind(this),FunctionNode:this.transformFunction.bind(this),CaseNode:this.transformCase.bind(this),WhenNode:this.transformWhen.bind(this),JSONReferenceNode:this.transformJSONReference.bind(this),JSONPathNode:this.transformJSONPath.bind(this),JSONPathLegNode:this.transformJSONPathLeg.bind(this),JSONOperatorChainNode:this.transformJSONOperatorChain.bind(this),TupleNode:this.transformTuple.bind(this),MergeQueryNode:this.transformMergeQuery.bind(this),MatchedNode:this.transformMatched.bind(this),AddIndexNode:this.transformAddIndex.bind(this),CastNode:this.transformCast.bind(this),FetchNode:this.transformFetch.bind(this),TopNode:this.transformTop.bind(this),OutputNode:this.transformOutput.bind(this),OrActionNode:this.transformOrAction.bind(this),CollateNode:this.transformCollate.bind(this)}))}transformNode(e,t){if(!e)return e;this.nodeStack.push(e);const n=this.transformNodeImpl(e,t);return this.nodeStack.pop(),m(n)}transformNodeImpl(e,t){return s(this,gl)[e.kind](e,t)}transformNodeList(e,t){return e&&m(e.map(n=>this.transformNode(n,t)))}transformSelectQuery(e,t){return{kind:"SelectQueryNode",from:this.transformNode(e.from,t),selections:this.transformNodeList(e.selections,t),distinctOn:this.transformNodeList(e.distinctOn,t),joins:this.transformNodeList(e.joins,t),groupBy:this.transformNode(e.groupBy,t),orderBy:this.transformNode(e.orderBy,t),where:this.transformNode(e.where,t),frontModifiers:this.transformNodeList(e.frontModifiers,t),endModifiers:this.transformNodeList(e.endModifiers,t),limit:this.transformNode(e.limit,t),offset:this.transformNode(e.offset,t),with:this.transformNode(e.with,t),having:this.transformNode(e.having,t),explain:this.transformNode(e.explain,t),setOperations:this.transformNodeList(e.setOperations,t),fetch:this.transformNode(e.fetch,t),top:this.transformNode(e.top,t)}}transformSelection(e,t){return{kind:"SelectionNode",selection:this.transformNode(e.selection,t)}}transformColumn(e,t){return{kind:"ColumnNode",column:this.transformNode(e.column,t)}}transformAlias(e,t){return{kind:"AliasNode",node:this.transformNode(e.node,t),alias:this.transformNode(e.alias,t)}}transformTable(e,t){return{kind:"TableNode",table:this.transformNode(e.table,t)}}transformFrom(e,t){return{kind:"FromNode",froms:this.transformNodeList(e.froms,t)}}transformReference(e,t){return{kind:"ReferenceNode",column:this.transformNode(e.column,t),table:this.transformNode(e.table,t)}}transformAnd(e,t){return{kind:"AndNode",left:this.transformNode(e.left,t),right:this.transformNode(e.right,t)}}transformOr(e,t){return{kind:"OrNode",left:this.transformNode(e.left,t),right:this.transformNode(e.right,t)}}transformValueList(e,t){return{kind:"ValueListNode",values:this.transformNodeList(e.values,t)}}transformParens(e,t){return{kind:"ParensNode",node:this.transformNode(e.node,t)}}transformJoin(e,t){return{kind:"JoinNode",joinType:e.joinType,table:this.transformNode(e.table,t),on:this.transformNode(e.on,t)}}transformRaw(e,t){return{kind:"RawNode",sqlFragments:m([...e.sqlFragments]),parameters:this.transformNodeList(e.parameters,t)}}transformWhere(e,t){return{kind:"WhereNode",where:this.transformNode(e.where,t)}}transformInsertQuery(e,t){return{kind:"InsertQueryNode",into:this.transformNode(e.into,t),columns:this.transformNodeList(e.columns,t),values:this.transformNode(e.values,t),returning:this.transformNode(e.returning,t),onConflict:this.transformNode(e.onConflict,t),onDuplicateKey:this.transformNode(e.onDuplicateKey,t),endModifiers:this.transformNodeList(e.endModifiers,t),with:this.transformNode(e.with,t),ignore:e.ignore,orAction:this.transformNode(e.orAction,t),replace:e.replace,explain:this.transformNode(e.explain,t),defaultValues:e.defaultValues,top:this.transformNode(e.top,t),output:this.transformNode(e.output,t)}}transformValues(e,t){return{kind:"ValuesNode",values:this.transformNodeList(e.values,t)}}transformDeleteQuery(e,t){return{kind:"DeleteQueryNode",from:this.transformNode(e.from,t),using:this.transformNode(e.using,t),joins:this.transformNodeList(e.joins,t),where:this.transformNode(e.where,t),returning:this.transformNode(e.returning,t),endModifiers:this.transformNodeList(e.endModifiers,t),with:this.transformNode(e.with,t),orderBy:this.transformNode(e.orderBy,t),limit:this.transformNode(e.limit,t),explain:this.transformNode(e.explain,t),top:this.transformNode(e.top,t),output:this.transformNode(e.output,t)}}transformReturning(e,t){return{kind:"ReturningNode",selections:this.transformNodeList(e.selections,t)}}transformCreateTable(e,t){return{kind:"CreateTableNode",table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t),constraints:this.transformNodeList(e.constraints,t),temporary:e.temporary,ifNotExists:e.ifNotExists,onCommit:e.onCommit,frontModifiers:this.transformNodeList(e.frontModifiers,t),endModifiers:this.transformNodeList(e.endModifiers,t),selectQuery:this.transformNode(e.selectQuery,t)}}transformColumnDefinition(e,t){return{kind:"ColumnDefinitionNode",column:this.transformNode(e.column,t),dataType:this.transformNode(e.dataType,t),references:this.transformNode(e.references,t),primaryKey:e.primaryKey,autoIncrement:e.autoIncrement,unique:e.unique,notNull:e.notNull,unsigned:e.unsigned,defaultTo:this.transformNode(e.defaultTo,t),check:this.transformNode(e.check,t),generated:this.transformNode(e.generated,t),frontModifiers:this.transformNodeList(e.frontModifiers,t),endModifiers:this.transformNodeList(e.endModifiers,t),nullsNotDistinct:e.nullsNotDistinct,identity:e.identity,ifNotExists:e.ifNotExists}}transformAddColumn(e,t){return{kind:"AddColumnNode",column:this.transformNode(e.column,t)}}transformDropTable(e,t){return{kind:"DropTableNode",table:this.transformNode(e.table,t),ifExists:e.ifExists,cascade:e.cascade}}transformOrderBy(e,t){return{kind:"OrderByNode",items:this.transformNodeList(e.items,t)}}transformOrderByItem(e,t){return{kind:"OrderByItemNode",orderBy:this.transformNode(e.orderBy,t),direction:this.transformNode(e.direction,t),collation:this.transformNode(e.collation,t),nulls:e.nulls}}transformGroupBy(e,t){return{kind:"GroupByNode",items:this.transformNodeList(e.items,t)}}transformGroupByItem(e,t){return{kind:"GroupByItemNode",groupBy:this.transformNode(e.groupBy,t)}}transformUpdateQuery(e,t){return{kind:"UpdateQueryNode",table:this.transformNode(e.table,t),from:this.transformNode(e.from,t),joins:this.transformNodeList(e.joins,t),where:this.transformNode(e.where,t),updates:this.transformNodeList(e.updates,t),returning:this.transformNode(e.returning,t),endModifiers:this.transformNodeList(e.endModifiers,t),with:this.transformNode(e.with,t),explain:this.transformNode(e.explain,t),limit:this.transformNode(e.limit,t),top:this.transformNode(e.top,t),output:this.transformNode(e.output,t),orderBy:this.transformNode(e.orderBy,t)}}transformColumnUpdate(e,t){return{kind:"ColumnUpdateNode",column:this.transformNode(e.column,t),value:this.transformNode(e.value,t)}}transformLimit(e,t){return{kind:"LimitNode",limit:this.transformNode(e.limit,t)}}transformOffset(e,t){return{kind:"OffsetNode",offset:this.transformNode(e.offset,t)}}transformOnConflict(e,t){return{kind:"OnConflictNode",columns:this.transformNodeList(e.columns,t),constraint:this.transformNode(e.constraint,t),indexExpression:this.transformNode(e.indexExpression,t),indexWhere:this.transformNode(e.indexWhere,t),updates:this.transformNodeList(e.updates,t),updateWhere:this.transformNode(e.updateWhere,t),doNothing:e.doNothing}}transformOnDuplicateKey(e,t){return{kind:"OnDuplicateKeyNode",updates:this.transformNodeList(e.updates,t)}}transformCreateIndex(e,t){return{kind:"CreateIndexNode",name:this.transformNode(e.name,t),table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t),unique:e.unique,using:this.transformNode(e.using,t),ifNotExists:e.ifNotExists,where:this.transformNode(e.where,t),nullsNotDistinct:e.nullsNotDistinct}}transformList(e,t){return{kind:"ListNode",items:this.transformNodeList(e.items,t)}}transformDropIndex(e,t){return{kind:"DropIndexNode",name:this.transformNode(e.name,t),table:this.transformNode(e.table,t),ifExists:e.ifExists,cascade:e.cascade}}transformPrimaryKeyConstraint(e,t){return{kind:"PrimaryKeyConstraintNode",columns:this.transformNodeList(e.columns,t),name:this.transformNode(e.name,t),deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformUniqueConstraint(e,t){return{kind:"UniqueConstraintNode",columns:this.transformNodeList(e.columns,t),name:this.transformNode(e.name,t),nullsNotDistinct:e.nullsNotDistinct,deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformForeignKeyConstraint(e,t){return{kind:"ForeignKeyConstraintNode",columns:this.transformNodeList(e.columns,t),references:this.transformNode(e.references,t),name:this.transformNode(e.name,t),onDelete:e.onDelete,onUpdate:e.onUpdate,deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformSetOperation(e,t){return{kind:"SetOperationNode",operator:e.operator,expression:this.transformNode(e.expression,t),all:e.all}}transformReferences(e,t){return{kind:"ReferencesNode",table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t),onDelete:e.onDelete,onUpdate:e.onUpdate}}transformCheckConstraint(e,t){return{kind:"CheckConstraintNode",expression:this.transformNode(e.expression,t),name:this.transformNode(e.name,t)}}transformWith(e,t){return{kind:"WithNode",expressions:this.transformNodeList(e.expressions,t),recursive:e.recursive}}transformCommonTableExpression(e,t){return{kind:"CommonTableExpressionNode",name:this.transformNode(e.name,t),materialized:e.materialized,expression:this.transformNode(e.expression,t)}}transformCommonTableExpressionName(e,t){return{kind:"CommonTableExpressionNameNode",table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t)}}transformHaving(e,t){return{kind:"HavingNode",having:this.transformNode(e.having,t)}}transformCreateSchema(e,t){return{kind:"CreateSchemaNode",schema:this.transformNode(e.schema,t),ifNotExists:e.ifNotExists}}transformDropSchema(e,t){return{kind:"DropSchemaNode",schema:this.transformNode(e.schema,t),ifExists:e.ifExists,cascade:e.cascade}}transformAlterTable(e,t){return{kind:"AlterTableNode",table:this.transformNode(e.table,t),renameTo:this.transformNode(e.renameTo,t),setSchema:this.transformNode(e.setSchema,t),columnAlterations:this.transformNodeList(e.columnAlterations,t),addConstraint:this.transformNode(e.addConstraint,t),dropConstraint:this.transformNode(e.dropConstraint,t),renameConstraint:this.transformNode(e.renameConstraint,t),addIndex:this.transformNode(e.addIndex,t),dropIndex:this.transformNode(e.dropIndex,t)}}transformDropColumn(e,t){return{kind:"DropColumnNode",column:this.transformNode(e.column,t)}}transformRenameColumn(e,t){return{kind:"RenameColumnNode",column:this.transformNode(e.column,t),renameTo:this.transformNode(e.renameTo,t)}}transformAlterColumn(e,t){return{kind:"AlterColumnNode",column:this.transformNode(e.column,t),dataType:this.transformNode(e.dataType,t),dataTypeExpression:this.transformNode(e.dataTypeExpression,t),setDefault:this.transformNode(e.setDefault,t),dropDefault:e.dropDefault,setNotNull:e.setNotNull,dropNotNull:e.dropNotNull}}transformModifyColumn(e,t){return{kind:"ModifyColumnNode",column:this.transformNode(e.column,t)}}transformAddConstraint(e,t){return{kind:"AddConstraintNode",constraint:this.transformNode(e.constraint,t)}}transformDropConstraint(e,t){return{kind:"DropConstraintNode",constraintName:this.transformNode(e.constraintName,t),ifExists:e.ifExists,modifier:e.modifier}}transformRenameConstraint(e,t){return{kind:"RenameConstraintNode",oldName:this.transformNode(e.oldName,t),newName:this.transformNode(e.newName,t)}}transformCreateView(e,t){return{kind:"CreateViewNode",name:this.transformNode(e.name,t),temporary:e.temporary,orReplace:e.orReplace,ifNotExists:e.ifNotExists,materialized:e.materialized,columns:this.transformNodeList(e.columns,t),as:this.transformNode(e.as,t)}}transformRefreshMaterializedView(e,t){return{kind:"RefreshMaterializedViewNode",name:this.transformNode(e.name,t),concurrently:e.concurrently,withNoData:e.withNoData}}transformDropView(e,t){return{kind:"DropViewNode",name:this.transformNode(e.name,t),ifExists:e.ifExists,materialized:e.materialized,cascade:e.cascade}}transformGenerated(e,t){return{kind:"GeneratedNode",byDefault:e.byDefault,always:e.always,identity:e.identity,stored:e.stored,expression:this.transformNode(e.expression,t)}}transformDefaultValue(e,t){return{kind:"DefaultValueNode",defaultValue:this.transformNode(e.defaultValue,t)}}transformOn(e,t){return{kind:"OnNode",on:this.transformNode(e.on,t)}}transformSelectModifier(e,t){return{kind:"SelectModifierNode",modifier:e.modifier,rawModifier:this.transformNode(e.rawModifier,t),of:this.transformNodeList(e.of,t)}}transformCreateType(e,t){return{kind:"CreateTypeNode",name:this.transformNode(e.name,t),enum:this.transformNode(e.enum,t)}}transformDropType(e,t){return{kind:"DropTypeNode",name:this.transformNode(e.name,t),ifExists:e.ifExists}}transformExplain(e,t){return{kind:"ExplainNode",format:e.format,options:this.transformNode(e.options,t)}}transformSchemableIdentifier(e,t){return{kind:"SchemableIdentifierNode",schema:this.transformNode(e.schema,t),identifier:this.transformNode(e.identifier,t)}}transformAggregateFunction(e,t){return{kind:"AggregateFunctionNode",func:e.func,aggregated:this.transformNodeList(e.aggregated,t),distinct:e.distinct,orderBy:this.transformNode(e.orderBy,t),withinGroup:this.transformNode(e.withinGroup,t),filter:this.transformNode(e.filter,t),over:this.transformNode(e.over,t)}}transformOver(e,t){return{kind:"OverNode",orderBy:this.transformNode(e.orderBy,t),partitionBy:this.transformNode(e.partitionBy,t)}}transformPartitionBy(e,t){return{kind:"PartitionByNode",items:this.transformNodeList(e.items,t)}}transformPartitionByItem(e,t){return{kind:"PartitionByItemNode",partitionBy:this.transformNode(e.partitionBy,t)}}transformBinaryOperation(e,t){return{kind:"BinaryOperationNode",leftOperand:this.transformNode(e.leftOperand,t),operator:this.transformNode(e.operator,t),rightOperand:this.transformNode(e.rightOperand,t)}}transformUnaryOperation(e,t){return{kind:"UnaryOperationNode",operator:this.transformNode(e.operator,t),operand:this.transformNode(e.operand,t)}}transformUsing(e,t){return{kind:"UsingNode",tables:this.transformNodeList(e.tables,t)}}transformFunction(e,t){return{kind:"FunctionNode",func:e.func,arguments:this.transformNodeList(e.arguments,t)}}transformCase(e,t){return{kind:"CaseNode",value:this.transformNode(e.value,t),when:this.transformNodeList(e.when,t),else:this.transformNode(e.else,t),isStatement:e.isStatement}}transformWhen(e,t){return{kind:"WhenNode",condition:this.transformNode(e.condition,t),result:this.transformNode(e.result,t)}}transformJSONReference(e,t){return{kind:"JSONReferenceNode",reference:this.transformNode(e.reference,t),traversal:this.transformNode(e.traversal,t)}}transformJSONPath(e,t){return{kind:"JSONPathNode",inOperator:this.transformNode(e.inOperator,t),pathLegs:this.transformNodeList(e.pathLegs,t)}}transformJSONPathLeg(e,t){return{kind:"JSONPathLegNode",type:e.type,value:e.value}}transformJSONOperatorChain(e,t){return{kind:"JSONOperatorChainNode",operator:this.transformNode(e.operator,t),values:this.transformNodeList(e.values,t)}}transformTuple(e,t){return{kind:"TupleNode",values:this.transformNodeList(e.values,t)}}transformMergeQuery(e,t){return{kind:"MergeQueryNode",into:this.transformNode(e.into,t),using:this.transformNode(e.using,t),whens:this.transformNodeList(e.whens,t),with:this.transformNode(e.with,t),top:this.transformNode(e.top,t),endModifiers:this.transformNodeList(e.endModifiers,t),output:this.transformNode(e.output,t),returning:this.transformNode(e.returning,t)}}transformMatched(e,t){return{kind:"MatchedNode",not:e.not,bySource:e.bySource}}transformAddIndex(e,t){return{kind:"AddIndexNode",name:this.transformNode(e.name,t),columns:this.transformNodeList(e.columns,t),unique:e.unique,using:this.transformNode(e.using,t),ifNotExists:e.ifNotExists}}transformCast(e,t){return{kind:"CastNode",expression:this.transformNode(e.expression,t),dataType:this.transformNode(e.dataType,t)}}transformFetch(e,t){return{kind:"FetchNode",rowCount:this.transformNode(e.rowCount,t),modifier:e.modifier}}transformTop(e,t){return{kind:"TopNode",expression:e.expression,modifiers:e.modifiers}}transformOutput(e,t){return{kind:"OutputNode",selections:this.transformNodeList(e.selections,t)}}transformDataType(e,t){return e}transformSelectAll(e,t){return e}transformIdentifier(e,t){return e}transformValue(e,t){return e}transformPrimitiveValueList(e,t){return e}transformOperator(e,t){return e}transformDefaultInsertValue(e,t){return e}transformOrAction(e,t){return e}transformCollate(e,t){return e}}gl=new WeakMap;const jg=m({AlterTableNode:!0,CreateIndexNode:!0,CreateSchemaNode:!0,CreateTableNode:!0,CreateTypeNode:!0,CreateViewNode:!0,RefreshMaterializedViewNode:!0,DeleteQueryNode:!0,DropIndexNode:!0,DropSchemaNode:!0,DropTableNode:!0,DropTypeNode:!0,DropViewNode:!0,InsertQueryNode:!0,RawNode:!0,SelectQueryNode:!0,UpdateQueryNode:!0,MergeQueryNode:!0}),Qg={json_agg:!0,to_json:!0};class zg extends nh{constructor(t){super();ne(this,Wt);ne(this,Hs);ne(this,ns,new Set);ne(this,is,new Set);le(this,Hs,t)}transformNodeImpl(t,n){if(!Ue(this,Wt,bp).call(this,t))return super.transformNodeImpl(t,n);const o=Ue(this,Wt,Np).call(this,t);for(const g of o)s(this,is).add(g);const l=Ue(this,Wt,wp).call(this,t);for(const g of l)s(this,ns).add(g);const h=super.transformNodeImpl(t,n);for(const g of l)s(this,ns).delete(g);for(const g of o)s(this,is).delete(g);return h}transformSchemableIdentifier(t,n){const o=super.transformSchemableIdentifier(t,n);return o.schema||!s(this,ns).has(t.identifier.name)?o:{...o,schema:Pt.create(s(this,Hs))}}transformReferences(t,n){const o=super.transformReferences(t,n);return o.table.table.schema?o:{...o,table:Nn.createWithSchema(s(this,Hs),o.table.table.identifier.name)}}transformAggregateFunction(t,n){return{...super.transformAggregateFunction({...t,aggregated:[]},n),aggregated:Ue(this,Wt,ju).call(this,t,n,"aggregated")}}transformFunction(t,n){return{...super.transformFunction({...t,arguments:[]},n),arguments:Ue(this,Wt,ju).call(this,t,n,"arguments")}}transformSelectModifier(t,n){var o;return{...super.transformSelectModifier({...t,of:void 0},n),of:(o=t.of)==null?void 0:o.map(l=>Nn.is(l)&&!l.table.schema?{...l,table:this.transformIdentifier(l.table.identifier,n)}:this.transformNode(l,n))}}}Hs=new WeakMap,ns=new WeakMap,is=new WeakMap,Wt=new WeakSet,ju=function(t,n,o){return Qg[t.func]?t[o].map(l=>!Nn.is(l)||l.table.schema?this.transformNode(l,n):{...l,table:this.transformIdentifier(l.table.identifier,n)}):this.transformNodeList(t[o],n)},bp=function(t){return t.kind in jg},wp=function(t){const n=new Set;if("name"in t&&t.name&&Mn.is(t.name)&&Ue(this,Wt,Cl).call(this,t.name,n),"from"in t&&t.from)for(const o of t.from.froms)Ue(this,Wt,ti).call(this,o,n);if("into"in t&&t.into&&Ue(this,Wt,ti).call(this,t.into,n),"table"in t&&t.table&&Ue(this,Wt,ti).call(this,t.table,n),"joins"in t&&t.joins)for(const o of t.joins)Ue(this,Wt,ti).call(this,o.table,n);return"using"in t&&t.using&&($i.is(t.using)?Ue(this,Wt,ti).call(this,t.using.table,n):Ue(this,Wt,ti).call(this,t.using,n)),n},Np=function(t){const n=new Set;return"with"in t&&t.with&&Ue(this,Wt,xp).call(this,t.with,n),n},ti=function(t,n){if(Nn.is(t))return Ue(this,Wt,Cl).call(this,t.table,n);if(hi.is(t)&&Nn.is(t.node))return Ue(this,Wt,Cl).call(this,t.node.table,n);if(Vf.is(t)){for(const o of t.items)Ue(this,Wt,ti).call(this,o,n);return}if(Ic.is(t)){for(const o of t.tables)Ue(this,Wt,ti).call(this,o,n);return}},Cl=function(t,n){const o=t.identifier.name;!s(this,ns).has(o)&&!s(this,is).has(o)&&n.add(o)},xp=function(t,n){for(const o of t.expressions){const l=o.name.table.table.identifier.name;s(this,is).has(l)||n.add(l)}};class Ws{constructor(e){ne(this,Vo);le(this,Vo,new zg(e))}transformQuery(e){return s(this,Vo).transformNode(e.node,e.queryId)}async transformResult(e){return e.result}}Vo=new WeakMap;const Vg=m({is(r){return r.kind==="MatchedNode"},create(r,e=!1){return m({kind:"MatchedNode",not:r,bySource:e})}});function ih(r,e,t){return Qi.create(Qa([Vg.create(!r.isMatched,r.bySource),...e&&e.length>0?[e.length===3&&t?xn(e[0],e[1],e[2]):gr(e)]:[]],"and",!1))}function Co(r){return Er(r)?Mr.create([r],[]):Br(r)?r.toOperationNode():r}class sh{constructor(){ne(this,Ho);ne(this,Ks);ne(this,Js);Ce(this,"resolve",e=>{s(this,Ks)&&s(this,Ks).call(this,e)});Ce(this,"reject",e=>{s(this,Js)&&s(this,Js).call(this,e)});le(this,Ho,new Promise((e,t)=>{le(this,Js,t),le(this,Ks,e)}))}get promise(){return s(this,Ho)}}Ho=new WeakMap,Ks=new WeakMap,Js=new WeakMap;async function oh(r){const e=new sh,t=new sh;return r.provideConnection(async n=>(e.resolve(n),await t.promise)).catch(n=>e.reject(n)),m({connection:await e.promise,release:t.resolve})}const Hg=m([]);class ah{constructor(e=Hg){ne(this,Ko);ne(this,ss);le(this,ss,e)}get plugins(){return s(this,ss)}transformQuery(e,t){for(const n of s(this,ss)){const o=n.transformQuery({node:e,queryId:t});if(o.kind===e.kind)e=o;else throw new Error(["KyselyPlugin.transformQuery must return a node","of the same kind that was given to it.",`The plugin was given a ${e.kind}`,`but it returned a ${o.kind}`].join(" "))}return e}async executeQuery(e){return await this.provideConnection(async t=>{const n=await t.executeQuery(e);return"numUpdatedOrDeletedRows"in n&&Ts("kysely:warning: outdated driver/plugin detected! `QueryResult.numUpdatedOrDeletedRows` has been replaced with `QueryResult.numAffectedRows`."),await Ue(this,Ko,Qu).call(this,n,e.queryId)})}async*stream(e,t){const{connection:n,release:o}=await oh(this);try{for await(const l of n.streamQuery(e,t))yield await Ue(this,Ko,Qu).call(this,l,e.queryId)}finally{o()}}}ss=new WeakMap,Ko=new WeakSet,Qu=async function(e,t){for(const n of s(this,ss))e=await n.transformResult({result:e,queryId:t});return e};class Rs extends ah{get adapter(){throw new Error("this query cannot be compiled to SQL")}compileQuery(){throw new Error("this query cannot be compiled to SQL")}provideConnection(){throw new Error("this query cannot be executed")}withConnectionProvider(){throw new Error("this query cannot have a connection provider")}withPlugin(e){return new Rs([...this.plugins,e])}withPlugins(e){return new Rs([...this.plugins,...e])}withPluginAtFront(e){return new Rs([e,...this.plugins])}withoutPlugins(){return new Rs([])}}const Dc=new Rs;class Kg{constructor(e){Ce(this,"numChangedRows");this.numChangedRows=e}}const xi=class xi{constructor(e){ne(this,fr);le(this,fr,m(e))}modifyEnd(e){return new xi({...s(this,fr),queryNode:Pe.cloneWithEndModifier(s(this,fr).queryNode,e.toOperationNode())})}top(e,t){return new xi({...s(this,fr),queryNode:Pe.cloneWithTop(s(this,fr).queryNode,Ls(e,t))})}using(...e){return new yi({...s(this,fr),queryNode:vn.cloneWithUsing(s(this,fr).queryNode,Xa("Using",e))})}returning(e){return new xi({...s(this,fr),queryNode:Pe.cloneWithReturning(s(this,fr).queryNode,$r(e))})}returningAll(e){return new xi({...s(this,fr),queryNode:Pe.cloneWithReturning(s(this,fr).queryNode,Gr(e))})}output(e){return new xi({...s(this,fr),queryNode:Pe.cloneWithOutput(s(this,fr).queryNode,$r(e))})}outputAll(e){return new xi({...s(this,fr),queryNode:Pe.cloneWithOutput(s(this,fr).queryNode,Gr(e))})}};fr=new WeakMap;let Bc=xi;const Hn=class Hn{constructor(e){ne(this,zr);ne(this,St);le(this,St,m(e))}modifyEnd(e){return new Hn({...s(this,St),queryNode:Pe.cloneWithEndModifier(s(this,St).queryNode,e.toOperationNode())})}top(e,t){return new Hn({...s(this,St),queryNode:Pe.cloneWithTop(s(this,St).queryNode,Ls(e,t))})}whenMatched(){return Ue(this,zr,Pl).call(this,[])}whenMatchedAnd(...e){return Ue(this,zr,Pl).call(this,e)}whenMatchedAndRef(e,t,n){return Ue(this,zr,Pl).call(this,[e,t,n],!0)}whenNotMatched(){return Ue(this,zr,ws).call(this,[])}whenNotMatchedAnd(...e){return Ue(this,zr,ws).call(this,e)}whenNotMatchedAndRef(e,t,n){return Ue(this,zr,ws).call(this,[e,t,n],!0)}whenNotMatchedBySource(){return Ue(this,zr,ws).call(this,[],!1,!0)}whenNotMatchedBySourceAnd(...e){return Ue(this,zr,ws).call(this,e,!1,!0)}whenNotMatchedBySourceAndRef(e,t,n){return Ue(this,zr,ws).call(this,[e,t,n],!0,!0)}returning(e){return new Hn({...s(this,St),queryNode:Pe.cloneWithReturning(s(this,St).queryNode,$r(e))})}returningAll(e){return new Hn({...s(this,St),queryNode:Pe.cloneWithReturning(s(this,St).queryNode,Gr(e))})}output(e){return new Hn({...s(this,St),queryNode:Pe.cloneWithOutput(s(this,St).queryNode,$r(e))})}outputAll(e){return new Hn({...s(this,St),queryNode:Pe.cloneWithOutput(s(this,St).queryNode,Gr(e))})}$call(e){return e(this)}$if(e,t){return e?t(this):new Hn({...s(this,St)})}toOperationNode(){return s(this,St).executor.transformQuery(s(this,St).queryNode,s(this,St).queryId)}compile(){return s(this,St).executor.compileQuery(this.toOperationNode(),s(this,St).queryId)}async execute(){const e=this.compile(),t=await s(this,St).executor.executeQuery(e),{adapter:n}=s(this,St).executor,o=e.query;return o.returning&&n.supportsReturning||o.output&&n.supportsOutput?t.rows:[new Kg(t.numAffectedRows)]}async executeTakeFirst(){const[e]=await this.execute();return e}async executeTakeFirstOrThrow(e=Oo){const t=await this.executeTakeFirst();if(t===void 0)throw To(e)?new e(this.toOperationNode()):e(this.toOperationNode());return t}};St=new WeakMap,zr=new WeakSet,Pl=function(e,t){return new lh({...s(this,St),queryNode:vn.cloneWithWhen(s(this,St).queryNode,ih({isMatched:!0},e,t))})},ws=function(e,t=!1,n=!1){const o={...s(this,St),queryNode:vn.cloneWithWhen(s(this,St).queryNode,ih({isMatched:!1,bySource:n},e,t))},l=n?lh:Jg;return new l(o)};let yi=Hn;class lh{constructor(e){ne(this,cn);le(this,cn,m(e))}thenDelete(){return new yi({...s(this,cn),queryNode:vn.cloneWithThen(s(this,cn).queryNode,Co("delete"))})}thenDoNothing(){return new yi({...s(this,cn),queryNode:vn.cloneWithThen(s(this,cn).queryNode,Co("do nothing"))})}thenUpdate(e){return new yi({...s(this,cn),queryNode:vn.cloneWithThen(s(this,cn).queryNode,Co(e(new Ha({queryId:s(this,cn).queryId,executor:Dc,queryNode:Ps.createWithoutTable()}))))})}thenUpdateSet(...e){return this.thenUpdate(t=>t.set(...e))}}cn=new WeakMap;class Jg{constructor(e){ne(this,vi);le(this,vi,m(e))}thenDoNothing(){return new yi({...s(this,vi),queryNode:vn.cloneWithThen(s(this,vi).queryNode,Co("do nothing"))})}thenInsertValues(e){const[t,n]=Xf(e);return new yi({...s(this,vi),queryNode:vn.cloneWithThen(s(this,vi).queryNode,Co(dr.cloneWith(dr.createWithoutInto(),{columns:t,values:n})))})}}vi=new WeakMap;const os=class os{constructor(e){ne(this,Nt);le(this,Nt,m(e))}selectFrom(e){return Qc({queryId:Xt(),executor:s(this,Nt).executor,queryNode:Lt.createFrom(Ms(e),s(this,Nt).withNode)})}selectNoFrom(e){return Qc({queryId:Xt(),executor:s(this,Nt).executor,queryNode:Lt.cloneWithSelections(Lt.create(s(this,Nt).withNode),$r(e))})}insertInto(e){return new Va({queryId:Xt(),executor:s(this,Nt).executor,queryNode:dr.create(Yt(e),s(this,Nt).withNode)})}replaceInto(e){return new Va({queryId:Xt(),executor:s(this,Nt).executor,queryNode:dr.create(Yt(e),s(this,Nt).withNode,!0)})}deleteFrom(e){return new Wc({queryId:Xt(),executor:s(this,Nt).executor,queryNode:Ao.create(Ms(e),s(this,Nt).withNode)})}updateTable(e){return new Ha({queryId:Xt(),executor:s(this,Nt).executor,queryNode:Ps.create(Ms(e),s(this,Nt).withNode)})}mergeInto(e){return new Bc({queryId:Xt(),executor:s(this,Nt).executor,queryNode:vn.create(yh(e),s(this,Nt).withNode)})}with(e,t){const n=eh(e,t);return new os({...s(this,Nt),withNode:s(this,Nt).withNode?Ja.cloneWithExpression(s(this,Nt).withNode,n):Ja.create(n)})}withRecursive(e,t){const n=eh(e,t);return new os({...s(this,Nt),withNode:s(this,Nt).withNode?Ja.cloneWithExpression(s(this,Nt).withNode,n):Ja.create(n,{recursive:!0})})}withPlugin(e){return new os({...s(this,Nt),executor:s(this,Nt).executor.withPlugin(e)})}withoutPlugins(){return new os({...s(this,Nt),executor:s(this,Nt).executor.withoutPlugins()})}withSchema(e){return new os({...s(this,Nt),executor:s(this,Nt).executor.withPluginAtFront(new Ws(e))})}};Nt=new WeakMap;let Ga=os;function Gg(){return new Ga({executor:Dc})}function Xg(r,e){return new Oc({joinNode:$i.create(r,Fo(e))})}function Yg(){return new Tc({overNode:Ac.create()})}function Xa(r,e){if(e.length===3)return e0(r,e[0],e[1],e[2]);if(e.length===2)return Zg(r,e[0],e[1]);if(e.length===1)return t0(r,e[0]);throw new Error("not implemented")}function Zg(r,e,t){return t(Xg(r,e)).toOperationNode()}function e0(r,e,t,n){return $i.createWithOn(r,Fo(e),xn(t,"=",n))}function t0(r,e){return $i.create(r,Fo(e))}const r0=m({is(r){return r.kind==="OffsetNode"},create(r){return m({kind:"OffsetNode",offset:r})}}),n0=m({is(r){return r.kind==="GroupByItemNode"},create(r){return m({kind:"GroupByItemNode",groupBy:r})}});function i0(r){return r=Wr(r)?r(Bs()):r,Eo(r).map(n0.create)}const ch=m({is(r){return r.kind==="SetOperationNode"},create(r,e,t){return m({kind:"SetOperationNode",operator:r,expression:e,all:t})}});function Ds(r,e,t){return Wr(e)&&(e=e(Vc())),Dn(e)||(e=[e]),e.map(n=>ch.create(r,Vi(n),t))}const bl=class bl{constructor(e){ne(this,Kn);le(this,Kn,e)}get expressionType(){}as(e){return new Mc(this,e)}or(...e){return new Uc(Is.create(s(this,Kn),gr(e)))}and(...e){return new $c(pi.create(s(this,Kn),gr(e)))}$castTo(){return new bl(s(this,Kn))}$notNull(){return new bl(s(this,Kn))}toOperationNode(){return s(this,Kn)}};Kn=new WeakMap;let Ot=bl;class Mc{constructor(e,t){ne(this,Gs);ne(this,qi);le(this,Gs,e),le(this,qi,t)}get expression(){return s(this,Gs)}get alias(){return s(this,qi)}toOperationNode(){return hi.create(s(this,Gs).toOperationNode(),Br(s(this,qi))?s(this,qi).toOperationNode():Pt.create(s(this,qi)))}}Gs=new WeakMap,qi=new WeakMap;const wl=class wl{constructor(e){ne(this,as);le(this,as,e)}get expressionType(){}as(e){return new Mc(this,e)}or(...e){return new wl(Is.create(s(this,as),gr(e)))}$castTo(){return new wl(s(this,as))}toOperationNode(){return jn.create(s(this,as))}};as=new WeakMap;let Uc=wl;const Nl=class Nl{constructor(e){ne(this,ls);le(this,ls,e)}get expressionType(){}as(e){return new Mc(this,e)}and(...e){return new Nl(pi.create(s(this,ls),gr(e)))}$castTo(){return new Nl(s(this,ls))}toOperationNode(){return jn.create(s(this,ls))}};ls=new WeakMap;let $c=Nl;const s0=m({is(r){return r.kind==="FetchNode"},create(r,e){return{kind:"FetchNode",rowCount:nn.create(r),modifier:e}}});function o0(r,e){if(!Ra(r)&&!_c(r))throw new Error(`Invalid fetch row count: ${r}`);if(!a0(e))throw new Error(`Invalid fetch modifier: ${e}`);return s0.create(r,e)}function a0(r){return r==="only"||r==="with ties"}const nt=class nt{constructor(e){ne(this,Vr);ne(this,qe);le(this,qe,m(e))}get expressionType(){}get isSelectQueryBuilder(){return!0}where(...e){return new nt({...s(this,qe),queryNode:Pe.cloneWithWhere(s(this,qe).queryNode,gr(e))})}whereRef(e,t,n){return new nt({...s(this,qe),queryNode:Pe.cloneWithWhere(s(this,qe).queryNode,xn(e,t,n))})}having(...e){return new nt({...s(this,qe),queryNode:Lt.cloneWithHaving(s(this,qe).queryNode,gr(e))})}havingRef(e,t,n){return new nt({...s(this,qe),queryNode:Lt.cloneWithHaving(s(this,qe).queryNode,xn(e,t,n))})}select(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSelections(s(this,qe).queryNode,$r(e))})}distinctOn(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithDistinctOn(s(this,qe).queryNode,Eo(e))})}modifyFront(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithFrontModifier(s(this,qe).queryNode,Un.createWithExpression(e.toOperationNode()))})}modifyEnd(e){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.createWithExpression(e.toOperationNode()))})}distinct(){return new nt({...s(this,qe),queryNode:Lt.cloneWithFrontModifier(s(this,qe).queryNode,Un.create("Distinct"))})}forUpdate(e){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.create("ForUpdate",e?Ba(e).map(Yt):void 0))})}forShare(e){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.create("ForShare",e?Ba(e).map(Yt):void 0))})}forKeyShare(e){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.create("ForKeyShare",e?Ba(e).map(Yt):void 0))})}forNoKeyUpdate(e){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.create("ForNoKeyUpdate",e?Ba(e).map(Yt):void 0))})}skipLocked(){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.create("SkipLocked"))})}noWait(){return new nt({...s(this,qe),queryNode:Pe.cloneWithEndModifier(s(this,qe).queryNode,Un.create("NoWait"))})}selectAll(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSelections(s(this,qe).queryNode,Gr(e))})}innerJoin(...e){return Ue(this,Vr,mn).call(this,"InnerJoin",e)}leftJoin(...e){return Ue(this,Vr,mn).call(this,"LeftJoin",e)}rightJoin(...e){return Ue(this,Vr,mn).call(this,"RightJoin",e)}fullJoin(...e){return Ue(this,Vr,mn).call(this,"FullJoin",e)}crossJoin(...e){return Ue(this,Vr,mn).call(this,"CrossJoin",e)}innerJoinLateral(...e){return Ue(this,Vr,mn).call(this,"LateralInnerJoin",e)}leftJoinLateral(...e){return Ue(this,Vr,mn).call(this,"LateralLeftJoin",e)}crossJoinLateral(...e){return Ue(this,Vr,mn).call(this,"LateralCrossJoin",e)}crossApply(...e){return Ue(this,Vr,mn).call(this,"CrossApply",e)}outerApply(...e){return Ue(this,Vr,mn).call(this,"OuterApply",e)}orderBy(...e){return new nt({...s(this,qe),queryNode:Pe.cloneWithOrderByItems(s(this,qe).queryNode,ji(e))})}groupBy(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithGroupByItems(s(this,qe).queryNode,i0(e))})}limit(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithLimit(s(this,qe).queryNode,Fc.create(ur(e)))})}offset(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithOffset(s(this,qe).queryNode,r0.create(ur(e)))})}fetch(e,t="only"){return new nt({...s(this,qe),queryNode:Lt.cloneWithFetch(s(this,qe).queryNode,o0(e,t))})}top(e,t){return new nt({...s(this,qe),queryNode:Pe.cloneWithTop(s(this,qe).queryNode,Ls(e,t))})}union(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSetOperations(s(this,qe).queryNode,Ds("union",e,!1))})}unionAll(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSetOperations(s(this,qe).queryNode,Ds("union",e,!0))})}intersect(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSetOperations(s(this,qe).queryNode,Ds("intersect",e,!1))})}intersectAll(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSetOperations(s(this,qe).queryNode,Ds("intersect",e,!0))})}except(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSetOperations(s(this,qe).queryNode,Ds("except",e,!1))})}exceptAll(e){return new nt({...s(this,qe),queryNode:Lt.cloneWithSetOperations(s(this,qe).queryNode,Ds("except",e,!0))})}as(e){return new l0(this,e)}clearSelect(){return new nt({...s(this,qe),queryNode:Lt.cloneWithoutSelections(s(this,qe).queryNode)})}clearWhere(){return new nt({...s(this,qe),queryNode:Pe.cloneWithoutWhere(s(this,qe).queryNode)})}clearLimit(){return new nt({...s(this,qe),queryNode:Lt.cloneWithoutLimit(s(this,qe).queryNode)})}clearOffset(){return new nt({...s(this,qe),queryNode:Lt.cloneWithoutOffset(s(this,qe).queryNode)})}clearOrderBy(){return new nt({...s(this,qe),queryNode:Pe.cloneWithoutOrderBy(s(this,qe).queryNode)})}clearGroupBy(){return new nt({...s(this,qe),queryNode:Lt.cloneWithoutGroupBy(s(this,qe).queryNode)})}$call(e){return e(this)}$if(e,t){return e?t(this):new nt({...s(this,qe)})}$castTo(){return new nt(s(this,qe))}$narrowType(){return new nt(s(this,qe))}$assertType(){return new nt(s(this,qe))}$asTuple(){return new Ot(this.toOperationNode())}$asScalar(){return new Ot(this.toOperationNode())}withPlugin(e){return new nt({...s(this,qe),executor:s(this,qe).executor.withPlugin(e)})}toOperationNode(){return s(this,qe).executor.transformQuery(s(this,qe).queryNode,s(this,qe).queryId)}compile(){return s(this,qe).executor.compileQuery(this.toOperationNode(),s(this,qe).queryId)}async execute(){const e=this.compile();return(await s(this,qe).executor.executeQuery(e)).rows}async executeTakeFirst(){const[e]=await this.execute();return e}async executeTakeFirstOrThrow(e=Oo){const t=await this.executeTakeFirst();if(t===void 0)throw To(e)?new e(this.toOperationNode()):e(this.toOperationNode());return t}async*stream(e=100){const t=this.compile(),n=s(this,qe).executor.stream(t,e);for await(const o of n)yield*o.rows}async explain(e,t){return await new nt({...s(this,qe),queryNode:Pe.cloneWithExplain(s(this,qe).queryNode,e,t)}).execute()}};qe=new WeakMap,Vr=new WeakSet,mn=function(e,t){return new nt({...s(this,qe),queryNode:Pe.cloneWithJoin(s(this,qe).queryNode,Xa(e,t))})};let jc=nt;function Qc(r){return new jc(r)}class l0{constructor(e,t){ne(this,Xs);ne(this,Ys);le(this,Xs,e),le(this,Ys,t)}get expression(){return s(this,Xs)}get alias(){return s(this,Ys)}get isAliasedSelectQueryBuilder(){return!0}toOperationNode(){return hi.create(s(this,Xs).toOperationNode(),Pt.create(s(this,Ys)))}}Xs=new WeakMap,Ys=new WeakMap;const gi=m({is(r){return r.kind==="AggregateFunctionNode"},create(r,e=[]){return m({kind:"AggregateFunctionNode",func:r,aggregated:e})},cloneWithDistinct(r){return m({...r,distinct:!0})},cloneWithOrderBy(r,e,t=!1){const n=t?"withinGroup":"orderBy";return m({...r,[n]:r[n]?Cs.cloneWithItems(r[n],e):Cs.create(e)})},cloneWithFilter(r,e){return m({...r,filter:r.filter?Tr.cloneWithOperation(r.filter,"And",e):Tr.create(e)})},cloneWithOrFilter(r,e){return m({...r,filter:r.filter?Tr.cloneWithOperation(r.filter,"Or",e):Tr.create(e)})},cloneWithOver(r,e){return m({...r,over:e})}}),uh=m({is(r){return r.kind==="FunctionNode"},create(r,e){return m({kind:"FunctionNode",func:r,arguments:e})}}),un=class un{constructor(e){ne(this,Zt);le(this,Zt,m(e))}get expressionType(){}as(e){return new c0(this,e)}distinct(){return new un({...s(this,Zt),aggregateFunctionNode:gi.cloneWithDistinct(s(this,Zt).aggregateFunctionNode)})}orderBy(...e){return new un({...s(this,Zt),aggregateFunctionNode:Pe.cloneWithOrderByItems(s(this,Zt).aggregateFunctionNode,ji(e))})}clearOrderBy(){return new un({...s(this,Zt),aggregateFunctionNode:Pe.cloneWithoutOrderBy(s(this,Zt).aggregateFunctionNode)})}withinGroupOrderBy(...e){return new un({...s(this,Zt),aggregateFunctionNode:gi.cloneWithOrderBy(s(this,Zt).aggregateFunctionNode,ji(e),!0)})}filterWhere(...e){return new un({...s(this,Zt),aggregateFunctionNode:gi.cloneWithFilter(s(this,Zt).aggregateFunctionNode,gr(e))})}filterWhereRef(e,t,n){return new un({...s(this,Zt),aggregateFunctionNode:gi.cloneWithFilter(s(this,Zt).aggregateFunctionNode,xn(e,t,n))})}over(e){const t=Yg();return new un({...s(this,Zt),aggregateFunctionNode:gi.cloneWithOver(s(this,Zt).aggregateFunctionNode,(e?e(t):t).toOperationNode())})}$call(e){return e(this)}$castTo(){return new un(s(this,Zt))}$notNull(){return new un(s(this,Zt))}toOperationNode(){return s(this,Zt).aggregateFunctionNode}};Zt=new WeakMap;let Po=un;class c0{constructor(e,t){ne(this,Zs);ne(this,eo);le(this,Zs,e),le(this,eo,t)}get expression(){return s(this,Zs)}get alias(){return s(this,eo)}toOperationNode(){return hi.create(s(this,Zs).toOperationNode(),Pt.create(s(this,eo)))}}Zs=new WeakMap,eo=new WeakMap;function dh(){const r=(t,n)=>new Ot(uh.create(t,Eo(n??[]))),e=(t,n)=>new Po({aggregateFunctionNode:gi.create(t,n?Eo(n):void 0)});return Object.assign(r,{agg:e,avg(t){return e("avg",[t])},coalesce(...t){return r("coalesce",t)},count(t){return e("count",[t])},countAll(t){return new Po({aggregateFunctionNode:gi.create("count",Gr(t))})},max(t){return e("max",[t])},min(t){return e("min",[t])},sum(t){return e("sum",[t])},any(t){return r("any",[t])},jsonAgg(t){return new Po({aggregateFunctionNode:gi.create("json_agg",[Er(t)?Yt(t):t.toOperationNode()])})},toJson(t){return new Ot(uh.create("to_json",[Er(t)?Yt(t):t.toOperationNode()]))}})}const u0=m({is(r){return r.kind==="UnaryOperationNode"},create(r,e){return m({kind:"UnaryOperationNode",operator:r,operand:e})}});function d0(r,e){return u0.create(mi.create(r),Ur(e))}const qn=m({is(r){return r.kind==="CaseNode"},create(r){return m({kind:"CaseNode",value:r})},cloneWithWhen(r,e){return m({...r,when:m(r.when?[...r.when,e]:[e])})},cloneWithThen(r,e){return m({...r,when:r.when?m([...r.when.slice(0,-1),Qi.cloneWithResult(r.when[r.when.length-1],e)]):void 0})},cloneWith(r,e){return m({...r,...e})}});class fh{constructor(e){ne(this,to);le(this,to,m(e))}when(...e){return new hh({...s(this,to),node:qn.cloneWithWhen(s(this,to).node,Qi.create(gr(e)))})}}to=new WeakMap;class hh{constructor(e){ne(this,ro);le(this,ro,m(e))}then(e){return new f0({...s(this,ro),node:qn.cloneWithThen(s(this,ro).node,qc(e)?Sc(e):ur(e))})}}ro=new WeakMap;class f0{constructor(e){ne(this,En);le(this,En,m(e))}when(...e){return new hh({...s(this,En),node:qn.cloneWithWhen(s(this,En).node,Qi.create(gr(e)))})}else(e){return new h0({...s(this,En),node:qn.cloneWith(s(this,En).node,{else:qc(e)?Sc(e):ur(e)})})}end(){return new Ot(qn.cloneWith(s(this,En).node,{isStatement:!1}))}endCase(){return new Ot(qn.cloneWith(s(this,En).node,{isStatement:!0}))}}En=new WeakMap;class h0{constructor(e){ne(this,no);le(this,no,m(e))}end(){return new Ot(qn.cloneWith(s(this,no).node,{isStatement:!1}))}endCase(){return new Ot(qn.cloneWith(s(this,no).node,{isStatement:!0}))}}no=new WeakMap;const ph=m({is(r){return r.kind==="JSONPathLegNode"},create(r,e){return m({kind:"JSONPathLegNode",type:r,value:e})}});class zc{constructor(e){ne(this,Jo);ne(this,An);le(this,An,e)}at(e){return Ue(this,Jo,zu).call(this,"ArrayLocation",e)}key(e){return Ue(this,Jo,zu).call(this,"Member",e)}}An=new WeakMap,Jo=new WeakSet,zu=function(e,t){return Ua.is(s(this,An))?new Ya(Ua.cloneWithTraversal(s(this,An),ko.is(s(this,An).traversal)?ko.cloneWithLeg(s(this,An).traversal,ph.create(e,t)):Wf.cloneWithValue(s(this,An).traversal,nn.createImmediate(t)))):new Ya(ko.cloneWithLeg(s(this,An),ph.create(e,t)))};const xl=class xl extends zc{constructor(t){super(t);ne(this,cs);le(this,cs,t)}get expressionType(){}as(t){return new p0(this,t)}$castTo(){return new xl(s(this,cs))}$notNull(){return new xl(s(this,cs))}toOperationNode(){return s(this,cs)}};cs=new WeakMap;let Ya=xl;class p0{constructor(e,t){ne(this,io);ne(this,Si);le(this,io,e),le(this,Si,t)}get expression(){return s(this,io)}get alias(){return s(this,Si)}toOperationNode(){return hi.create(s(this,io).toOperationNode(),Br(s(this,Si))?s(this,Si).toOperationNode():Pt.create(s(this,Si)))}}io=new WeakMap,Si=new WeakMap;const mh=m({is(r){return r.kind==="TupleNode"},create(r){return m({kind:"TupleNode",values:m(r)})}}),m0=["varchar","char","text","integer","int2","int4","int8","smallint","bigint","boolean","real","double precision","float4","float8","decimal","numeric","binary","bytea","date","datetime","time","timetz","timestamp","timestamptz","serial","bigserial","uuid","json","jsonb","blob","varbinary","int4range","int4multirange","int8range","int8multirange","numrange","nummultirange","tsrange","tsmultirange","tstzrange","tstzmultirange","daterange","datemultirange"],_0=[/^varchar\(\d+\)$/,/^char\(\d+\)$/,/^decimal\(\d+, \d+\)$/,/^numeric\(\d+, \d+\)$/,/^binary\(\d+\)$/,/^datetime\(\d+\)$/,/^time\(\d+\)$/,/^timetz\(\d+\)$/,/^timestamp\(\d+\)$/,/^timestamptz\(\d+\)$/,/^varbinary\(\d+\)$/],y0=m({is(r){return r.kind==="DataTypeNode"},create(r){return m({kind:"DataTypeNode",dataType:r})}});function g0(r){return!!(m0.includes(r)||_0.some(e=>e.test(r)))}function zi(r){if(Br(r))return r.toOperationNode();if(g0(r))return y0.create(r);throw new Error(`invalid column data type ${JSON.stringify(r)}`)}const b0=m({is(r){return r.kind==="CastNode"},create(r,e){return m({kind:"CastNode",expression:r,dataType:e})}});function Vc(r=Dc){function e(o,l,h){return new Ot(kc(o,l,h))}function t(o,l){return new Ot(d0(o,l))}const n=Object.assign(e,{fn:void 0,eb:void 0,selectFrom(o){return Qc({queryId:Xt(),executor:r,queryNode:Lt.createFrom(Ms(o))})},case(o){return new fh({node:qn.create(fi(o)?void 0:Ur(o))})},ref(o,l){return fi(l)?new Ot(_i(o)):new zc(_g(o,l))},jsonPath(){return new zc(ko.create())},table(o){return new Ot(Yt(o))},val(o){return new Ot(ur(o))},refTuple(...o){return new Ot(mh.create(o.map(Ur)))},tuple(...o){return new Ot(mh.create(o.map(ur)))},lit(o){return new Ot(Sc(o))},unary:t,not(o){return t("not",o)},exists(o){return t("exists",o)},neg(o){return t("-",o)},between(o,l,h){return new Ot(Os.create(Ur(o),mi.create("between"),pi.create(ur(l),ur(h))))},betweenSymmetric(o,l,h){return new Ot(Os.create(Ur(o),mi.create("between symmetric"),pi.create(ur(l),ur(h))))},and(o){return Dn(o)?new Ot(Qa(o,"and")):new Ot(Mf(o,"and"))},or(o){return Dn(o)?new Ot(Qa(o,"or")):new Ot(Mf(o,"or"))},parens(...o){const l=gr(o);return jn.is(l)?new Ot(l):new Ot(jn.create(l))},cast(o,l){return new Ot(b0.create(Ur(o),zi(l)))},withSchema(o){return Vc(r.withPluginAtFront(new Ws(o)))}});return n.fn=dh(),n.eb=n,n}function Bs(r){return Vc()}function Vi(r){if(Br(r))return r.toOperationNode();if(Wr(r))return r(Bs()).toOperationNode();throw new Error(`invalid expression: ${JSON.stringify(r)}`)}function _h(r){if(Br(r))return r.toOperationNode();if(Wr(r))return r(Bs()).toOperationNode();throw new Error(`invalid aliased expression: ${JSON.stringify(r)}`)}function Lo(r){return If(r)||ag(r)||Wr(r)}class w0{constructor(e){ne(this,so);le(this,so,e)}get table(){return s(this,so)}as(e){return new N0(s(this,so),e)}}so=new WeakMap;class N0{constructor(e,t){ne(this,oo);ne(this,ao);le(this,oo,e),le(this,ao,t)}get table(){return s(this,oo)}get alias(){return s(this,ao)}toOperationNode(){return hi.create(Yt(s(this,oo)),Pt.create(s(this,ao)))}}oo=new WeakMap,ao=new WeakMap;function x0(r){return rn(r)&&Br(r)&&Er(r.table)&&Er(r.alias)}function Ms(r){return Dn(r)?r.map(e=>Fo(e)):[Fo(r)]}function Fo(r){return Er(r)?yh(r):x0(r)?r.toOperationNode():_h(r)}function yh(r){const e=" as ";if(r.includes(e)){const[t,n]=r.split(e).map(gh);return hi.create(Yt(t),Pt.create(n))}else return Yt(r)}function Yt(r){const e=".";if(r.includes(e)){const[t,n]=r.split(e).map(gh);return Nn.createWithSchema(t,n)}else return Nn.create(r)}function gh(r){return r.trim()}const bh=m({is(r){return r.kind==="AddColumnNode"},create(r){return m({kind:"AddColumnNode",column:r})}}),Bt=m({is(r){return r.kind==="ColumnDefinitionNode"},create(r,e){return m({kind:"ColumnDefinitionNode",column:Gt.create(r),dataType:e})},cloneWithFrontModifier(r,e){return m({...r,frontModifiers:r.frontModifiers?m([...r.frontModifiers,e]):[e]})},cloneWithEndModifier(r,e){return m({...r,endModifiers:r.endModifiers?m([...r.endModifiers,e]):[e]})},cloneWith(r,e){return m({...r,...e})}}),wh=m({is(r){return r.kind==="DropColumnNode"},create(r){return m({kind:"DropColumnNode",column:Gt.create(r)})}}),Nh=m({is(r){return r.kind==="RenameColumnNode"},create(r,e){return m({kind:"RenameColumnNode",column:Gt.create(r),renameTo:Gt.create(e)})}}),Hc=m({is(r){return r.kind==="CheckConstraintNode"},create(r,e){return m({kind:"CheckConstraintNode",expression:r,name:e?Pt.create(e):void 0})}}),v0=["no action","restrict","cascade","set null","set default"],Za=m({is(r){return r.kind==="ReferencesNode"},create(r,e){return m({kind:"ReferencesNode",table:r,columns:m([...e])})},cloneWithOnDelete(r,e){return m({...r,onDelete:e})},cloneWithOnUpdate(r,e){return m({...r,onUpdate:e})}});function xh(r){return Br(r)?r.toOperationNode():nn.createImmediate(r)}const el=m({is(r){return r.kind==="GeneratedNode"},create(r){return m({kind:"GeneratedNode",...r})},createWithExpression(r){return m({kind:"GeneratedNode",always:!0,expression:r})},cloneWith(r,e){return m({...r,...e})}}),q0=m({is(r){return r.kind==="DefaultValueNode"},create(r){return m({kind:"DefaultValueNode",defaultValue:r})}});function tl(r){if(v0.includes(r))return r;throw new Error(`invalid OnModifyForeignAction ${r}`)}const er=class er{constructor(e){ne(this,xt);le(this,xt,e)}autoIncrement(){return new er(Bt.cloneWith(s(this,xt),{autoIncrement:!0}))}identity(){return new er(Bt.cloneWith(s(this,xt),{identity:!0}))}primaryKey(){return new er(Bt.cloneWith(s(this,xt),{primaryKey:!0}))}references(e){const t=_i(e);if(!t.table||wc.is(t.column))throw new Error(`invalid call references('${e}'). The reference must have format table.column or schema.table.column`);return new er(Bt.cloneWith(s(this,xt),{references:Za.create(t.table,[t.column])}))}onDelete(e){if(!s(this,xt).references)throw new Error("on delete constraint can only be added for foreign keys");return new er(Bt.cloneWith(s(this,xt),{references:Za.cloneWithOnDelete(s(this,xt).references,tl(e))}))}onUpdate(e){if(!s(this,xt).references)throw new Error("on update constraint can only be added for foreign keys");return new er(Bt.cloneWith(s(this,xt),{references:Za.cloneWithOnUpdate(s(this,xt).references,tl(e))}))}unique(){return new er(Bt.cloneWith(s(this,xt),{unique:!0}))}notNull(){return new er(Bt.cloneWith(s(this,xt),{notNull:!0}))}unsigned(){return new er(Bt.cloneWith(s(this,xt),{unsigned:!0}))}defaultTo(e){return new er(Bt.cloneWith(s(this,xt),{defaultTo:q0.create(xh(e))}))}check(e){return new er(Bt.cloneWith(s(this,xt),{check:Hc.create(e.toOperationNode())}))}generatedAlwaysAs(e){return new er(Bt.cloneWith(s(this,xt),{generated:el.createWithExpression(e.toOperationNode())}))}generatedAlwaysAsIdentity(){return new er(Bt.cloneWith(s(this,xt),{generated:el.create({identity:!0,always:!0})}))}generatedByDefaultAsIdentity(){return new er(Bt.cloneWith(s(this,xt),{generated:el.create({identity:!0,byDefault:!0})}))}stored(){if(!s(this,xt).generated)throw new Error("stored() can only be called after generatedAlwaysAs");return new er(Bt.cloneWith(s(this,xt),{generated:el.cloneWith(s(this,xt).generated,{stored:!0})}))}modifyFront(e){return new er(Bt.cloneWithFrontModifier(s(this,xt),e.toOperationNode()))}nullsNotDistinct(){return new er(Bt.cloneWith(s(this,xt),{nullsNotDistinct:!0}))}ifNotExists(){return new er(Bt.cloneWith(s(this,xt),{ifNotExists:!0}))}modifyEnd(e){return new er(Bt.cloneWithEndModifier(s(this,xt),e.toOperationNode()))}$call(e){return e(this)}toOperationNode(){return s(this,xt)}};xt=new WeakMap;let Hi=er;const vh=m({is(r){return r.kind==="ModifyColumnNode"},create(r){return m({kind:"ModifyColumnNode",column:r})}}),bi=m({is(r){return r.kind==="ForeignKeyConstraintNode"},create(r,e,t,n){return m({kind:"ForeignKeyConstraintNode",columns:r,references:Za.create(e,t),name:n?Pt.create(n):void 0})},cloneWith(r,e){return m({...r,...e})}}),ki=class ki{constructor(e){ne(this,dn);le(this,dn,e)}onDelete(e){return new ki(bi.cloneWith(s(this,dn),{onDelete:tl(e)}))}onUpdate(e){return new ki(bi.cloneWith(s(this,dn),{onUpdate:tl(e)}))}deferrable(){return new ki(bi.cloneWith(s(this,dn),{deferrable:!0}))}notDeferrable(){return new ki(bi.cloneWith(s(this,dn),{deferrable:!1}))}initiallyDeferred(){return new ki(bi.cloneWith(s(this,dn),{initiallyDeferred:!0}))}initiallyImmediate(){return new ki(bi.cloneWith(s(this,dn),{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return s(this,dn)}};dn=new WeakMap;let rl=ki;const nl=m({is(r){return r.kind==="AddConstraintNode"},create(r){return m({kind:"AddConstraintNode",constraint:r})}}),Ki=m({is(r){return r.kind==="UniqueConstraintNode"},create(r,e,t){return m({kind:"UniqueConstraintNode",columns:m(r.map(Gt.create)),name:e?Pt.create(e):void 0,nullsNotDistinct:t})},cloneWith(r,e){return m({...r,...e})}}),il=m({is(r){return r.kind==="DropConstraintNode"},create(r){return m({kind:"DropConstraintNode",constraintName:Pt.create(r)})},cloneWith(r,e){return m({...r,...e})}}),Wo=m({is(r){return r.kind==="AlterColumnNode"},create(r,e,t){return m({kind:"AlterColumnNode",column:Gt.create(r),[e]:t})}});class qh{constructor(e){ne(this,Jn);le(this,Jn,e)}setDataType(e){return new Ro(Wo.create(s(this,Jn),"dataType",zi(e)))}setDefault(e){return new Ro(Wo.create(s(this,Jn),"setDefault",xh(e)))}dropDefault(){return new Ro(Wo.create(s(this,Jn),"dropDefault",!0))}setNotNull(){return new Ro(Wo.create(s(this,Jn),"setNotNull",!0))}dropNotNull(){return new Ro(Wo.create(s(this,Jn),"dropNotNull",!0))}$call(e){return e(this)}}Jn=new WeakMap;class Ro{constructor(e){ne(this,Go);le(this,Go,e)}toOperationNode(){return s(this,Go)}}Go=new WeakMap;class Us{constructor(e){ne(this,In);le(this,In,m(e))}toOperationNode(){return s(this,In).executor.transformQuery(s(this,In).node,s(this,In).queryId)}compile(){return s(this,In).executor.compileQuery(this.toOperationNode(),s(this,In).queryId)}async execute(){await s(this,In).executor.executeQuery(this.compile())}}In=new WeakMap;const Ei=class Ei{constructor(e){ne(this,Qt);le(this,Qt,m(e))}onDelete(e){return new Ei({...s(this,Qt),constraintBuilder:s(this,Qt).constraintBuilder.onDelete(e)})}onUpdate(e){return new Ei({...s(this,Qt),constraintBuilder:s(this,Qt).constraintBuilder.onUpdate(e)})}deferrable(){return new Ei({...s(this,Qt),constraintBuilder:s(this,Qt).constraintBuilder.deferrable()})}notDeferrable(){return new Ei({...s(this,Qt),constraintBuilder:s(this,Qt).constraintBuilder.notDeferrable()})}initiallyDeferred(){return new Ei({...s(this,Qt),constraintBuilder:s(this,Qt).constraintBuilder.initiallyDeferred()})}initiallyImmediate(){return new Ei({...s(this,Qt),constraintBuilder:s(this,Qt).constraintBuilder.initiallyImmediate()})}$call(e){return e(this)}toOperationNode(){return s(this,Qt).executor.transformQuery(vt.cloneWithTableProps(s(this,Qt).node,{addConstraint:nl.create(s(this,Qt).constraintBuilder.toOperationNode())}),s(this,Qt).queryId)}compile(){return s(this,Qt).executor.compileQuery(this.toOperationNode(),s(this,Qt).queryId)}async execute(){await s(this,Qt).executor.executeQuery(this.compile())}};Qt=new WeakMap;let Kc=Ei;const Xo=class Xo{constructor(e){ne(this,ir);le(this,ir,m(e))}ifExists(){return new Xo({...s(this,ir),node:vt.cloneWithTableProps(s(this,ir).node,{dropConstraint:il.cloneWith(s(this,ir).node.dropConstraint,{ifExists:!0})})})}cascade(){return new Xo({...s(this,ir),node:vt.cloneWithTableProps(s(this,ir).node,{dropConstraint:il.cloneWith(s(this,ir).node.dropConstraint,{modifier:"cascade"})})})}restrict(){return new Xo({...s(this,ir),node:vt.cloneWithTableProps(s(this,ir).node,{dropConstraint:il.cloneWith(s(this,ir).node.dropConstraint,{modifier:"restrict"})})})}$call(e){return e(this)}toOperationNode(){return s(this,ir).executor.transformQuery(s(this,ir).node,s(this,ir).queryId)}compile(){return s(this,ir).executor.compileQuery(this.toOperationNode(),s(this,ir).queryId)}async execute(){await s(this,ir).executor.executeQuery(this.compile())}};ir=new WeakMap;let sl=Xo;const $s=m({is(r){return r.kind==="PrimaryKeyConstraintNode"},create(r,e){return m({kind:"PrimaryKeyConstraintNode",columns:m(r.map(Gt.create)),name:e?Pt.create(e):void 0})},cloneWith(r,e){return m({...r,...e})}}),js=m({is(r){return r.kind==="AddIndexNode"},create(r){return m({kind:"AddIndexNode",name:Pt.create(r)})},cloneWith(r,e){return m({...r,...e})},cloneWithColumns(r,e){return m({...r,columns:[...r.columns||[],...e]})}}),us=class us{constructor(e){ne(this,Dt);le(this,Dt,m(e))}unique(){return new us({...s(this,Dt),node:vt.cloneWithTableProps(s(this,Dt).node,{addIndex:js.cloneWith(s(this,Dt).node.addIndex,{unique:!0})})})}column(e){return new us({...s(this,Dt),node:vt.cloneWithTableProps(s(this,Dt).node,{addIndex:js.cloneWithColumns(s(this,Dt).node.addIndex,[$a(e)])})})}columns(e){return new us({...s(this,Dt),node:vt.cloneWithTableProps(s(this,Dt).node,{addIndex:js.cloneWithColumns(s(this,Dt).node.addIndex,e.map($a))})})}expression(e){return new us({...s(this,Dt),node:vt.cloneWithTableProps(s(this,Dt).node,{addIndex:js.cloneWithColumns(s(this,Dt).node.addIndex,[e.toOperationNode()])})})}using(e){return new us({...s(this,Dt),node:vt.cloneWithTableProps(s(this,Dt).node,{addIndex:js.cloneWith(s(this,Dt).node.addIndex,{using:Mr.createWithSql(e)})})})}$call(e){return e(this)}toOperationNode(){return s(this,Dt).executor.transformQuery(s(this,Dt).node,s(this,Dt).queryId)}compile(){return s(this,Dt).executor.compileQuery(this.toOperationNode(),s(this,Dt).queryId)}async execute(){await s(this,Dt).executor.executeQuery(this.compile())}};Dt=new WeakMap;let Jc=us;const ds=class ds{constructor(e){ne(this,On);le(this,On,e)}nullsNotDistinct(){return new ds(Ki.cloneWith(s(this,On),{nullsNotDistinct:!0}))}deferrable(){return new ds(Ki.cloneWith(s(this,On),{deferrable:!0}))}notDeferrable(){return new ds(Ki.cloneWith(s(this,On),{deferrable:!1}))}initiallyDeferred(){return new ds(Ki.cloneWith(s(this,On),{initiallyDeferred:!0}))}initiallyImmediate(){return new ds(Ki.cloneWith(s(this,On),{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return s(this,On)}};On=new WeakMap;let ol=ds;const lo=class lo{constructor(e){ne(this,Gn);le(this,Gn,e)}deferrable(){return new lo($s.cloneWith(s(this,Gn),{deferrable:!0}))}notDeferrable(){return new lo($s.cloneWith(s(this,Gn),{deferrable:!1}))}initiallyDeferred(){return new lo($s.cloneWith(s(this,Gn),{initiallyDeferred:!0}))}initiallyImmediate(){return new lo($s.cloneWith(s(this,Gn),{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return s(this,Gn)}};Gn=new WeakMap;let al=lo;class Sh{constructor(e){ne(this,Yo);le(this,Yo,e)}$call(e){return e(this)}toOperationNode(){return s(this,Yo)}}Yo=new WeakMap;const S0=m({is(r){return r.kind==="RenameConstraintNode"},create(r,e){return m({kind:"RenameConstraintNode",oldName:Pt.create(r),newName:Pt.create(e)})}});class k0{constructor(e){ne(this,yt);le(this,yt,m(e))}renameTo(e){return new Us({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{renameTo:Yt(e)})})}setSchema(e){return new Us({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{setSchema:Pt.create(e)})})}alterColumn(e,t){const n=t(new qh(e));return new Ji({...s(this,yt),node:vt.cloneWithColumnAlteration(s(this,yt).node,n.toOperationNode())})}dropColumn(e){return new Ji({...s(this,yt),node:vt.cloneWithColumnAlteration(s(this,yt).node,wh.create(e))})}renameColumn(e,t){return new Ji({...s(this,yt),node:vt.cloneWithColumnAlteration(s(this,yt).node,Nh.create(e,t))})}addColumn(e,t,n=Rr){const o=n(new Hi(Bt.create(e,zi(t))));return new Ji({...s(this,yt),node:vt.cloneWithColumnAlteration(s(this,yt).node,bh.create(o.toOperationNode()))})}modifyColumn(e,t,n=Rr){const o=n(new Hi(Bt.create(e,zi(t))));return new Ji({...s(this,yt),node:vt.cloneWithColumnAlteration(s(this,yt).node,vh.create(o.toOperationNode()))})}addUniqueConstraint(e,t,n=Rr){const o=n(new ol(Ki.create(t,e)));return new Us({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{addConstraint:nl.create(o.toOperationNode())})})}addCheckConstraint(e,t,n=Rr){const o=n(new Sh(Hc.create(t.toOperationNode(),e)));return new Us({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{addConstraint:nl.create(o.toOperationNode())})})}addForeignKeyConstraint(e,t,n,o,l=Rr){const h=l(new rl(bi.create(t.map(Gt.create),Yt(n),o.map(Gt.create),e)));return new Kc({...s(this,yt),constraintBuilder:h})}addPrimaryKeyConstraint(e,t,n=Rr){const o=n(new al($s.create(t,e)));return new Us({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{addConstraint:nl.create(o.toOperationNode())})})}dropConstraint(e){return new sl({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{dropConstraint:il.create(e)})})}renameConstraint(e,t){return new sl({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{renameConstraint:S0.create(e,t)})})}addIndex(e){return new Jc({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{addIndex:js.create(e)})})}dropIndex(e){return new Us({...s(this,yt),node:vt.cloneWithTableProps(s(this,yt).node,{dropIndex:So.create(e)})})}$call(e){return e(this)}}yt=new WeakMap;const fs=class fs{constructor(e){ne(this,nr);le(this,nr,m(e))}alterColumn(e,t){const n=t(new qh(e));return new fs({...s(this,nr),node:vt.cloneWithColumnAlteration(s(this,nr).node,n.toOperationNode())})}dropColumn(e){return new fs({...s(this,nr),node:vt.cloneWithColumnAlteration(s(this,nr).node,wh.create(e))})}renameColumn(e,t){return new fs({...s(this,nr),node:vt.cloneWithColumnAlteration(s(this,nr).node,Nh.create(e,t))})}addColumn(e,t,n=Rr){const o=n(new Hi(Bt.create(e,zi(t))));return new fs({...s(this,nr),node:vt.cloneWithColumnAlteration(s(this,nr).node,bh.create(o.toOperationNode()))})}modifyColumn(e,t,n=Rr){const o=n(new Hi(Bt.create(e,zi(t))));return new fs({...s(this,nr),node:vt.cloneWithColumnAlteration(s(this,nr).node,vh.create(o.toOperationNode()))})}toOperationNode(){return s(this,nr).executor.transformQuery(s(this,nr).node,s(this,nr).queryId)}compile(){return s(this,nr).executor.compileQuery(this.toOperationNode(),s(this,nr).queryId)}async execute(){await s(this,nr).executor.executeQuery(this.compile())}};nr=new WeakMap;let Ji=fs;class kh extends nh{transformPrimitiveValueList(e){return ja.create(e.values.map(nn.createImmediate))}transformValue(e){return nn.createImmediate(e.value)}}const fn=class fn{constructor(e){ne(this,qt);le(this,qt,m(e))}ifNotExists(){return new fn({...s(this,qt),node:Bn.cloneWith(s(this,qt).node,{ifNotExists:!0})})}unique(){return new fn({...s(this,qt),node:Bn.cloneWith(s(this,qt).node,{unique:!0})})}nullsNotDistinct(){return new fn({...s(this,qt),node:Bn.cloneWith(s(this,qt).node,{nullsNotDistinct:!0})})}on(e){return new fn({...s(this,qt),node:Bn.cloneWith(s(this,qt).node,{table:Yt(e)})})}column(e){return new fn({...s(this,qt),node:Bn.cloneWithColumns(s(this,qt).node,[$a(e)])})}columns(e){return new fn({...s(this,qt),node:Bn.cloneWithColumns(s(this,qt).node,e.map($a))})}expression(e){return new fn({...s(this,qt),node:Bn.cloneWithColumns(s(this,qt).node,[e.toOperationNode()])})}using(e){return new fn({...s(this,qt),node:Bn.cloneWith(s(this,qt).node,{using:Mr.createWithSql(e)})})}where(...e){const t=new kh;return new fn({...s(this,qt),node:Pe.cloneWithWhere(s(this,qt).node,t.transformNode(gr(e),s(this,qt).queryId))})}$call(e){return e(this)}toOperationNode(){return s(this,qt).executor.transformQuery(s(this,qt).node,s(this,qt).queryId)}compile(){return s(this,qt).executor.compileQuery(this.toOperationNode(),s(this,qt).queryId)}async execute(){await s(this,qt).executor.executeQuery(this.compile())}};qt=new WeakMap;let Gc=fn;const Cu=class Cu{constructor(e){ne(this,Xr);le(this,Xr,m(e))}ifNotExists(){return new Cu({...s(this,Xr),node:Af.cloneWith(s(this,Xr).node,{ifNotExists:!0})})}$call(e){return e(this)}toOperationNode(){return s(this,Xr).executor.transformQuery(s(this,Xr).node,s(this,Xr).queryId)}compile(){return s(this,Xr).executor.compileQuery(this.toOperationNode(),s(this,Xr).queryId)}async execute(){await s(this,Xr).executor.executeQuery(this.compile())}};Xr=new WeakMap;let Xc=Cu;function E0(r){if(og.includes(r))return r;throw new Error(`invalid OnCommitAction ${r}`)}const Hr=class Hr{constructor(e){ne(this,bt);le(this,bt,m(e))}temporary(){return new Hr({...s(this,bt),node:Dr.cloneWith(s(this,bt).node,{temporary:!0})})}onCommit(e){return new Hr({...s(this,bt),node:Dr.cloneWith(s(this,bt).node,{onCommit:E0(e)})})}ifNotExists(){return new Hr({...s(this,bt),node:Dr.cloneWith(s(this,bt).node,{ifNotExists:!0})})}addColumn(e,t,n=Rr){const o=n(new Hi(Bt.create(e,zi(t))));return new Hr({...s(this,bt),node:Dr.cloneWithColumn(s(this,bt).node,o.toOperationNode())})}addPrimaryKeyConstraint(e,t,n=Rr){const o=n(new al($s.create(t,e)));return new Hr({...s(this,bt),node:Dr.cloneWithConstraint(s(this,bt).node,o.toOperationNode())})}addUniqueConstraint(e,t,n=Rr){const o=n(new ol(Ki.create(t,e)));return new Hr({...s(this,bt),node:Dr.cloneWithConstraint(s(this,bt).node,o.toOperationNode())})}addCheckConstraint(e,t,n=Rr){const o=n(new Sh(Hc.create(t.toOperationNode(),e)));return new Hr({...s(this,bt),node:Dr.cloneWithConstraint(s(this,bt).node,o.toOperationNode())})}addForeignKeyConstraint(e,t,n,o,l=Rr){const h=l(new rl(bi.create(t.map(Gt.create),Yt(n),o.map(Gt.create),e)));return new Hr({...s(this,bt),node:Dr.cloneWithConstraint(s(this,bt).node,h.toOperationNode())})}modifyFront(e){return new Hr({...s(this,bt),node:Dr.cloneWithFrontModifier(s(this,bt).node,e.toOperationNode())})}modifyEnd(e){return new Hr({...s(this,bt),node:Dr.cloneWithEndModifier(s(this,bt).node,e.toOperationNode())})}as(e){return new Hr({...s(this,bt),node:Dr.cloneWith(s(this,bt).node,{selectQuery:Vi(e)})})}$call(e){return e(this)}toOperationNode(){return s(this,bt).executor.transformQuery(s(this,bt).node,s(this,bt).queryId)}compile(){return s(this,bt).executor.compileQuery(this.toOperationNode(),s(this,bt).queryId)}async execute(){await s(this,bt).executor.executeQuery(this.compile())}};bt=new WeakMap;let Yc=Hr;const Zo=class Zo{constructor(e){ne(this,vr);le(this,vr,m(e))}on(e){return new Zo({...s(this,vr),node:So.cloneWith(s(this,vr).node,{table:Yt(e)})})}ifExists(){return new Zo({...s(this,vr),node:So.cloneWith(s(this,vr).node,{ifExists:!0})})}cascade(){return new Zo({...s(this,vr),node:So.cloneWith(s(this,vr).node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return s(this,vr).executor.transformQuery(s(this,vr).node,s(this,vr).queryId)}compile(){return s(this,vr).executor.compileQuery(this.toOperationNode(),s(this,vr).queryId)}async execute(){await s(this,vr).executor.executeQuery(this.compile())}};vr=new WeakMap;let Zc=Zo;const vl=class vl{constructor(e){ne(this,Cr);le(this,Cr,m(e))}ifExists(){return new vl({...s(this,Cr),node:yc.cloneWith(s(this,Cr).node,{ifExists:!0})})}cascade(){return new vl({...s(this,Cr),node:yc.cloneWith(s(this,Cr).node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return s(this,Cr).executor.transformQuery(s(this,Cr).node,s(this,Cr).queryId)}compile(){return s(this,Cr).executor.compileQuery(this.toOperationNode(),s(this,Cr).queryId)}async execute(){await s(this,Cr).executor.executeQuery(this.compile())}};Cr=new WeakMap;let eu=vl;const ql=class ql{constructor(e){ne(this,Pr);le(this,Pr,m(e))}ifExists(){return new ql({...s(this,Pr),node:gc.cloneWith(s(this,Pr).node,{ifExists:!0})})}cascade(){return new ql({...s(this,Pr),node:gc.cloneWith(s(this,Pr).node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return s(this,Pr).executor.transformQuery(s(this,Pr).node,s(this,Pr).queryId)}compile(){return s(this,Pr).executor.compileQuery(this.toOperationNode(),s(this,Pr).queryId)}async execute(){await s(this,Pr).executor.executeQuery(this.compile())}};Pr=new WeakMap;let tu=ql;const wi=m({is(r){return r.kind==="CreateViewNode"},create(r){return m({kind:"CreateViewNode",name:Mn.create(r)})},cloneWith(r,e){return m({...r,...e})}});class A0{constructor(){ne(this,Sl,new kh)}transformQuery(e){return s(this,Sl).transformNode(e.node,e.queryId)}transformResult(e){return Promise.resolve(e.result)}}Sl=new WeakMap;const Ai=class Ai{constructor(e){ne(this,Ht);le(this,Ht,m(e))}temporary(){return new Ai({...s(this,Ht),node:wi.cloneWith(s(this,Ht).node,{temporary:!0})})}materialized(){return new Ai({...s(this,Ht),node:wi.cloneWith(s(this,Ht).node,{materialized:!0})})}ifNotExists(){return new Ai({...s(this,Ht),node:wi.cloneWith(s(this,Ht).node,{ifNotExists:!0})})}orReplace(){return new Ai({...s(this,Ht),node:wi.cloneWith(s(this,Ht).node,{orReplace:!0})})}columns(e){return new Ai({...s(this,Ht),node:wi.cloneWith(s(this,Ht).node,{columns:e.map(Df)})})}as(e){const t=e.withPlugin(new A0).toOperationNode();return new Ai({...s(this,Ht),node:wi.cloneWith(s(this,Ht).node,{as:t})})}$call(e){return e(this)}toOperationNode(){return s(this,Ht).executor.transformQuery(s(this,Ht).node,s(this,Ht).queryId)}compile(){return s(this,Ht).executor.compileQuery(this.toOperationNode(),s(this,Ht).queryId)}async execute(){await s(this,Ht).executor.executeQuery(this.compile())}};Ht=new WeakMap;let ru=Ai;const ll=m({is(r){return r.kind==="DropViewNode"},create(r){return m({kind:"DropViewNode",name:Mn.create(r)})},cloneWith(r,e){return m({...r,...e})}}),ea=class ea{constructor(e){ne(this,qr);le(this,qr,m(e))}materialized(){return new ea({...s(this,qr),node:ll.cloneWith(s(this,qr).node,{materialized:!0})})}ifExists(){return new ea({...s(this,qr),node:ll.cloneWith(s(this,qr).node,{ifExists:!0})})}cascade(){return new ea({...s(this,qr),node:ll.cloneWith(s(this,qr).node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return s(this,qr).executor.transformQuery(s(this,qr).node,s(this,qr).queryId)}compile(){return s(this,qr).executor.compileQuery(this.toOperationNode(),s(this,qr).queryId)}async execute(){await s(this,qr).executor.executeQuery(this.compile())}};qr=new WeakMap;let nu=ea;const Eh=m({is(r){return r.kind==="CreateTypeNode"},create(r){return m({kind:"CreateTypeNode",name:r})},cloneWithEnum(r,e){return m({...r,enum:ja.create(e.map(nn.createImmediate))})}}),Pu=class Pu{constructor(e){ne(this,Yr);le(this,Yr,m(e))}toOperationNode(){return s(this,Yr).executor.transformQuery(s(this,Yr).node,s(this,Yr).queryId)}asEnum(e){return new Pu({...s(this,Yr),node:Eh.cloneWithEnum(s(this,Yr).node,e)})}$call(e){return e(this)}compile(){return s(this,Yr).executor.compileQuery(this.toOperationNode(),s(this,Yr).queryId)}async execute(){await s(this,Yr).executor.executeQuery(this.compile())}};Yr=new WeakMap;let iu=Pu;const Ah=m({is(r){return r.kind==="DropTypeNode"},create(r){return m({kind:"DropTypeNode",name:r})},cloneWith(r,e){return m({...r,...e})}}),Lu=class Lu{constructor(e){ne(this,Zr);le(this,Zr,m(e))}ifExists(){return new Lu({...s(this,Zr),node:Ah.cloneWith(s(this,Zr).node,{ifExists:!0})})}$call(e){return e(this)}toOperationNode(){return s(this,Zr).executor.transformQuery(s(this,Zr).node,s(this,Zr).queryId)}compile(){return s(this,Zr).executor.compileQuery(this.toOperationNode(),s(this,Zr).queryId)}async execute(){await s(this,Zr).executor.executeQuery(this.compile())}};Zr=new WeakMap;let su=Lu;function Ih(r){const e=".";if(r.includes(e)){const t=r.split(e).map(I0);if(t.length===2)return Mn.createWithSchema(t[0],t[1]);throw new Error(`invalid schemable identifier ${r}`)}else return Mn.create(r)}function I0(r){return r.trim()}const cl=m({is(r){return r.kind==="RefreshMaterializedViewNode"},create(r){return m({kind:"RefreshMaterializedViewNode",name:Mn.create(r)})},cloneWith(r,e){return m({...r,...e})}}),ta=class ta{constructor(e){ne(this,Sr);le(this,Sr,m(e))}concurrently(){return new ta({...s(this,Sr),node:cl.cloneWith(s(this,Sr).node,{concurrently:!0,withNoData:!1})})}withData(){return new ta({...s(this,Sr),node:cl.cloneWith(s(this,Sr).node,{withNoData:!1})})}withNoData(){return new ta({...s(this,Sr),node:cl.cloneWith(s(this,Sr).node,{withNoData:!0,concurrently:!1})})}$call(e){return e(this)}toOperationNode(){return s(this,Sr).executor.transformQuery(s(this,Sr).node,s(this,Sr).queryId)}compile(){return s(this,Sr).executor.compileQuery(this.toOperationNode(),s(this,Sr).queryId)}async execute(){await s(this,Sr).executor.executeQuery(this.compile())}};Sr=new WeakMap;let ou=ta;const ra=class ra{constructor(e){ne(this,sr);le(this,sr,e)}createTable(e){return new Yc({queryId:Xt(),executor:s(this,sr),node:Dr.create(Yt(e))})}dropTable(e){return new tu({queryId:Xt(),executor:s(this,sr),node:gc.create(Yt(e))})}createIndex(e){return new Gc({queryId:Xt(),executor:s(this,sr),node:Bn.create(e)})}dropIndex(e){return new Zc({queryId:Xt(),executor:s(this,sr),node:So.create(e)})}createSchema(e){return new Xc({queryId:Xt(),executor:s(this,sr),node:Af.create(e)})}dropSchema(e){return new eu({queryId:Xt(),executor:s(this,sr),node:yc.create(e)})}alterTable(e){return new k0({queryId:Xt(),executor:s(this,sr),node:vt.create(Yt(e))})}createView(e){return new ru({queryId:Xt(),executor:s(this,sr),node:wi.create(e)})}refreshMaterializedView(e){return new ou({queryId:Xt(),executor:s(this,sr),node:cl.create(e)})}dropView(e){return new nu({queryId:Xt(),executor:s(this,sr),node:ll.create(e)})}createType(e){return new iu({queryId:Xt(),executor:s(this,sr),node:Eh.create(Ih(e))})}dropType(e){return new su({queryId:Xt(),executor:s(this,sr),node:Ah.create(Ih(e))})}withPlugin(e){return new ra(s(this,sr).withPlugin(e))}withoutPlugins(){return new ra(s(this,sr).withoutPlugins())}withSchema(e){return new ra(s(this,sr).withPluginAtFront(new Ws(e)))}};sr=new WeakMap;let au=ra;class O0{ref(e){return new hg(e)}table(e){return new w0(e)}}class T0{constructor(e){ne(this,co);le(this,co,e)}async provideConnection(e){const t=await s(this,co).acquireConnection();try{return await e(t)}finally{await s(this,co).releaseConnection(t)}}}co=new WeakMap;const hs=class hs extends ah{constructor(t,n,o,l=[]){super(l);ne(this,Tn);ne(this,Cn);ne(this,Xn);le(this,Tn,t),le(this,Cn,n),le(this,Xn,o)}get adapter(){return s(this,Cn)}compileQuery(t,n){return s(this,Tn).compileQuery(t,n)}provideConnection(t){return s(this,Xn).provideConnection(t)}withPlugins(t){return new hs(s(this,Tn),s(this,Cn),s(this,Xn),[...this.plugins,...t])}withPlugin(t){return new hs(s(this,Tn),s(this,Cn),s(this,Xn),[...this.plugins,t])}withPluginAtFront(t){return new hs(s(this,Tn),s(this,Cn),s(this,Xn),[t,...this.plugins])}withConnectionProvider(t){return new hs(s(this,Tn),s(this,Cn),t,[...this.plugins])}withoutPlugins(){return new hs(s(this,Tn),s(this,Cn),s(this,Xn),[])}};Tn=new WeakMap,Cn=new WeakMap,Xn=new WeakMap;let lu=hs;function cu(){return typeof performance<"u"&&Wr(performance.now)?performance.now():Date.now()}class C0{constructor(e,t){ne(this,Ar);ne(this,br);ne(this,Ii);ne(this,Yn);ne(this,uo);ne(this,Zn);ne(this,na,new WeakSet);le(this,uo,!1),le(this,br,e),le(this,Ii,t)}async init(){if(s(this,Zn))throw new Error("driver has already been destroyed");s(this,Yn)||le(this,Yn,s(this,br).init().then(()=>{le(this,uo,!0)}).catch(e=>(le(this,Yn,void 0),Promise.reject(e)))),await s(this,Yn)}async acquireConnection(){if(s(this,Zn))throw new Error("driver has already been destroyed");s(this,uo)||await this.init();const e=await s(this,br).acquireConnection();return s(this,na).has(e)||(Ue(this,Ar,vp).call(this)&&Ue(this,Ar,qp).call(this,e),s(this,na).add(e)),e}async releaseConnection(e){await s(this,br).releaseConnection(e)}beginTransaction(e,t){return s(this,br).beginTransaction(e,t)}commitTransaction(e){return s(this,br).commitTransaction(e)}rollbackTransaction(e){return s(this,br).rollbackTransaction(e)}savepoint(e,t,n){if(s(this,br).savepoint)return s(this,br).savepoint(e,t,n);throw new Error("The `savepoint` method is not supported by this driver")}rollbackToSavepoint(e,t,n){if(s(this,br).rollbackToSavepoint)return s(this,br).rollbackToSavepoint(e,t,n);throw new Error("The `rollbackToSavepoint` method is not supported by this driver")}releaseSavepoint(e,t,n){if(s(this,br).releaseSavepoint)return s(this,br).releaseSavepoint(e,t,n);throw new Error("The `releaseSavepoint` method is not supported by this driver")}async destroy(){s(this,Yn)&&(await s(this,Yn),s(this,Zn)||le(this,Zn,s(this,br).destroy().catch(e=>(le(this,Zn,void 0),Promise.reject(e)))),await s(this,Zn))}}br=new WeakMap,Ii=new WeakMap,Yn=new WeakMap,uo=new WeakMap,Zn=new WeakMap,na=new WeakMap,Ar=new WeakSet,vp=function(){return s(this,Ii).isLevelEnabled("query")||s(this,Ii).isLevelEnabled("error")},qp=function(e){const t=e.executeQuery,n=e.streamQuery,o=this;e.executeQuery=async l=>{var S,E;let h;const g=cu();try{return await t.call(e,l)}catch(k){throw h=k,await Ue(S=o,Ar,Vu).call(S,k,l,g),k}finally{h||await Ue(E=o,Ar,Hu).call(E,l,g)}},e.streamQuery=async function*(l,h){var E,k;let g;const S=cu();try{for await(const x of n.call(e,l,h))yield x}catch(x){throw g=x,await Ue(E=o,Ar,Vu).call(E,x,l,S),x}finally{g||await Ue(k=o,Ar,Hu).call(k,l,S,!0)}}},Vu=async function(e,t,n){await s(this,Ii).error(()=>({level:"error",error:e,query:t,queryDurationMillis:Ue(this,Ar,Ku).call(this,n)}))},Hu=async function(e,t,n=!1){await s(this,Ii).query(()=>({level:"query",isStream:n,query:e,queryDurationMillis:Ue(this,Ar,Ku).call(this,t)}))},Ku=function(e){return cu()-e};const P0=()=>{};class uu{constructor(e){ne(this,kl);ne(this,ia);ne(this,Oi);le(this,ia,e)}async provideConnection(e){for(;s(this,Oi);)await s(this,Oi).catch(P0);return le(this,Oi,Ue(this,kl,Sp).call(this,e).finally(()=>{le(this,Oi,void 0)})),s(this,Oi)}}ia=new WeakMap,Oi=new WeakMap,kl=new WeakSet,Sp=async function(e){return await e(s(this,ia))};const L0=["read only","read write"],F0=["read uncommitted","read committed","repeatable read","serializable","snapshot"];function Oh(r){if(r.accessMode&&!L0.includes(r.accessMode))throw new Error(`invalid transaction access mode ${r.accessMode}`);if(r.isolationLevel&&!F0.includes(r.isolationLevel))throw new Error(`invalid transaction isolation level ${r.isolationLevel}`)}m(["query","error"]);class W0{constructor(e){ne(this,Ti);ne(this,ps);Wr(e)?(le(this,ps,e),le(this,Ti,m({query:!0,error:!0}))):(le(this,ps,R0),le(this,Ti,m({query:e.includes("query"),error:e.includes("error")})))}isLevelEnabled(e){return s(this,Ti)[e]}async query(e){s(this,Ti).query&&await s(this,ps).call(this,e())}async error(e){s(this,Ti).error&&await s(this,ps).call(this,e())}}Ti=new WeakMap,ps=new WeakMap;function R0(r){if(r.level==="query"){const e=`kysely:query:${r.isStream?"stream:":""}`;console.log(`${e} ${r.query.sql}`),console.log(`${e} duration: ${r.queryDurationMillis.toFixed(1)}ms`)}else r.level==="error"&&(r.error instanceof Error?console.error(`kysely:error: ${r.error.stack??r.error.message}`):console.error(`kysely:error: ${JSON.stringify({error:r.error,query:r.query.sql,queryDurationMillis:r.queryDurationMillis})}`))}function D0(r){return rn(r)&&Wr(r.compile)}Symbol.asyncDispose??(Symbol.asyncDispose=Symbol("Symbol.asyncDispose"));const fo=class fo extends Ga{constructor(t){let n,o;if(B0(t))n={executor:t.executor},o={...t};else{const l=t.dialect,h=l.createDriver(),g=l.createQueryCompiler(),S=l.createAdapter(),E=new W0(t.log??[]),k=new C0(h,E),x=new T0(k),F=new lu(g,S,x,t.plugins??[]);n={executor:F},o={config:t,executor:F,dialect:l,driver:k}}super(n);ne(this,hr);le(this,hr,m(o))}get schema(){return new au(s(this,hr).executor)}get dynamic(){return new O0}get introspection(){return s(this,hr).dialect.createIntrospector(this.withoutPlugins())}case(t){return new fh({node:qn.create(fi(t)?void 0:Vi(t))})}get fn(){return dh()}transaction(){return new du({...s(this,hr)})}startTransaction(){return new fu({...s(this,hr)})}connection(){return new M0({...s(this,hr)})}withPlugin(t){return new fo({...s(this,hr),executor:s(this,hr).executor.withPlugin(t)})}withoutPlugins(){return new fo({...s(this,hr),executor:s(this,hr).executor.withoutPlugins()})}withSchema(t){return new fo({...s(this,hr),executor:s(this,hr).executor.withPluginAtFront(new Ws(t))})}withTables(){return new fo({...s(this,hr)})}async destroy(){await s(this,hr).driver.destroy()}get isTransaction(){return!1}getExecutor(){return s(this,hr).executor}executeQuery(t,n){n!==void 0&&Ts("Passing `queryId` in `db.executeQuery` is deprecated and will result in a compile-time error in the future.");const o=D0(t)?t.compile():t;return this.getExecutor().executeQuery(o)}async[Symbol.asyncDispose](){await this.destroy()}};hr=new WeakMap;let Do=fo;const ho=class ho extends Do{constructor(t){super(t);ne(this,hn);le(this,hn,t)}get isTransaction(){return!0}transaction(){throw new Error("calling the transaction method for a Transaction is not supported")}connection(){throw new Error("calling the connection method for a Transaction is not supported")}async destroy(){throw new Error("calling the destroy method for a Transaction is not supported")}withPlugin(t){return new ho({...s(this,hn),executor:s(this,hn).executor.withPlugin(t)})}withoutPlugins(){return new ho({...s(this,hn),executor:s(this,hn).executor.withoutPlugins()})}withSchema(t){return new ho({...s(this,hn),executor:s(this,hn).executor.withPluginAtFront(new Ws(t))})}withTables(){return new ho({...s(this,hn)})}};hn=new WeakMap;let ul=ho;function B0(r){return rn(r)&&rn(r.config)&&rn(r.driver)&&rn(r.executor)&&rn(r.dialect)}class M0{constructor(e){ne(this,ms);le(this,ms,m(e))}async execute(e){return s(this,ms).executor.provideConnection(async t=>{const n=s(this,ms).executor.withConnectionProvider(new uu(t)),o=new Do({...s(this,ms),executor:n});return await e(o)})}}ms=new WeakMap;const El=class El{constructor(e){ne(this,en);le(this,en,m(e))}setAccessMode(e){return new El({...s(this,en),accessMode:e})}setIsolationLevel(e){return new El({...s(this,en),isolationLevel:e})}async execute(e){const{isolationLevel:t,accessMode:n,...o}=s(this,en),l={isolationLevel:t,accessMode:n};return Oh(l),s(this,en).executor.provideConnection(async h=>{const g=s(this,en).executor.withConnectionProvider(new uu(h)),S=new ul({...o,executor:g});let E=!1;try{await s(this,en).driver.beginTransaction(h,l),E=!0;const k=await e(S);return await s(this,en).driver.commitTransaction(h),k}catch(k){throw E&&await s(this,en).driver.rollbackTransaction(h),k}})}};en=new WeakMap;let du=El;const Al=class Al{constructor(e){ne(this,Pn);le(this,Pn,m(e))}setAccessMode(e){return new Al({...s(this,Pn),accessMode:e})}setIsolationLevel(e){return new Al({...s(this,Pn),isolationLevel:e})}async execute(){const{isolationLevel:e,accessMode:t,...n}=s(this,Pn),o={isolationLevel:e,accessMode:t};Oh(o);const l=await oh(s(this,Pn).executor);return await s(this,Pn).driver.beginTransaction(l.connection,o),new hu({...n,connection:l,executor:s(this,Pn).executor.withConnectionProvider(new uu(l.connection))})}};Pn=new WeakMap;let fu=Al;const ei=class ei extends ul{constructor(t){const n={isCommitted:!1,isRolledBack:!1};t={...t,executor:new pu(t.executor,n)};const{connection:o,...l}=t;super(l);ne(this,Rt);ne(this,_s);ne(this,Kr);le(this,Rt,m(t)),le(this,Kr,n);const h=Xt();le(this,_s,g=>t.executor.compileQuery(g,h))}get isCommitted(){return s(this,Kr).isCommitted}get isRolledBack(){return s(this,Kr).isRolledBack}commit(){return Gi(s(this,Kr)),new Bo(async()=>{await s(this,Rt).driver.commitTransaction(s(this,Rt).connection.connection),s(this,Kr).isCommitted=!0,s(this,Rt).connection.release()})}rollback(){return Gi(s(this,Kr)),new Bo(async()=>{await s(this,Rt).driver.rollbackTransaction(s(this,Rt).connection.connection),s(this,Kr).isRolledBack=!0,s(this,Rt).connection.release()})}savepoint(t){return Gi(s(this,Kr)),new Bo(async()=>{var n,o;return await((o=(n=s(this,Rt).driver).savepoint)==null?void 0:o.call(n,s(this,Rt).connection.connection,t,s(this,_s))),new ei({...s(this,Rt)})})}rollbackToSavepoint(t){return Gi(s(this,Kr)),new Bo(async()=>{var n,o;return await((o=(n=s(this,Rt).driver).rollbackToSavepoint)==null?void 0:o.call(n,s(this,Rt).connection.connection,t,s(this,_s))),new ei({...s(this,Rt)})})}releaseSavepoint(t){return Gi(s(this,Kr)),new Bo(async()=>{var n,o;return await((o=(n=s(this,Rt).driver).releaseSavepoint)==null?void 0:o.call(n,s(this,Rt).connection.connection,t,s(this,_s))),new ei({...s(this,Rt)})})}withPlugin(t){return new ei({...s(this,Rt),executor:s(this,Rt).executor.withPlugin(t)})}withoutPlugins(){return new ei({...s(this,Rt),executor:s(this,Rt).executor.withoutPlugins()})}withSchema(t){return new ei({...s(this,Rt),executor:s(this,Rt).executor.withPluginAtFront(new Ws(t))})}withTables(){return new ei({...s(this,Rt)})}};Rt=new WeakMap,_s=new WeakMap,Kr=new WeakMap;let hu=ei;class Bo{constructor(e){ne(this,sa);le(this,sa,e)}async execute(){return await s(this,sa).call(this)}}sa=new WeakMap;function Gi(r){if(r.isCommitted)throw new Error("Transaction is already committed");if(r.isRolledBack)throw new Error("Transaction is already rolled back")}const Ci=class Ci{constructor(e,t){ne(this,pr);ne(this,pn);e instanceof Ci?le(this,pr,s(e,pr)):le(this,pr,e),le(this,pn,t)}get adapter(){return s(this,pr).adapter}get plugins(){return s(this,pr).plugins}transformQuery(e,t){return s(this,pr).transformQuery(e,t)}compileQuery(e,t){return s(this,pr).compileQuery(e,t)}provideConnection(e){return s(this,pr).provideConnection(e)}executeQuery(e){return Gi(s(this,pn)),s(this,pr).executeQuery(e)}stream(e,t){return Gi(s(this,pn)),s(this,pr).stream(e,t)}withConnectionProvider(e){return new Ci(s(this,pr).withConnectionProvider(e),s(this,pn))}withPlugin(e){return new Ci(s(this,pr).withPlugin(e),s(this,pn))}withPlugins(e){return new Ci(s(this,pr).withPlugins(e),s(this,pn))}withPluginAtFront(e){return new Ci(s(this,pr).withPluginAtFront(e),s(this,pn))}withoutPlugins(){return new Ci(s(this,pr).withoutPlugins(),s(this,pn))}};pr=new WeakMap,pn=new WeakMap;let pu=Ci;class U0{constructor(){Ce(this,"nodeStack",[]);ne(this,Il,m({AliasNode:this.visitAlias.bind(this),ColumnNode:this.visitColumn.bind(this),IdentifierNode:this.visitIdentifier.bind(this),SchemableIdentifierNode:this.visitSchemableIdentifier.bind(this),RawNode:this.visitRaw.bind(this),ReferenceNode:this.visitReference.bind(this),SelectQueryNode:this.visitSelectQuery.bind(this),SelectionNode:this.visitSelection.bind(this),TableNode:this.visitTable.bind(this),FromNode:this.visitFrom.bind(this),SelectAllNode:this.visitSelectAll.bind(this),AndNode:this.visitAnd.bind(this),OrNode:this.visitOr.bind(this),ValueNode:this.visitValue.bind(this),ValueListNode:this.visitValueList.bind(this),PrimitiveValueListNode:this.visitPrimitiveValueList.bind(this),ParensNode:this.visitParens.bind(this),JoinNode:this.visitJoin.bind(this),OperatorNode:this.visitOperator.bind(this),WhereNode:this.visitWhere.bind(this),InsertQueryNode:this.visitInsertQuery.bind(this),DeleteQueryNode:this.visitDeleteQuery.bind(this),ReturningNode:this.visitReturning.bind(this),CreateTableNode:this.visitCreateTable.bind(this),AddColumnNode:this.visitAddColumn.bind(this),ColumnDefinitionNode:this.visitColumnDefinition.bind(this),DropTableNode:this.visitDropTable.bind(this),DataTypeNode:this.visitDataType.bind(this),OrderByNode:this.visitOrderBy.bind(this),OrderByItemNode:this.visitOrderByItem.bind(this),GroupByNode:this.visitGroupBy.bind(this),GroupByItemNode:this.visitGroupByItem.bind(this),UpdateQueryNode:this.visitUpdateQuery.bind(this),ColumnUpdateNode:this.visitColumnUpdate.bind(this),LimitNode:this.visitLimit.bind(this),OffsetNode:this.visitOffset.bind(this),OnConflictNode:this.visitOnConflict.bind(this),OnDuplicateKeyNode:this.visitOnDuplicateKey.bind(this),CreateIndexNode:this.visitCreateIndex.bind(this),DropIndexNode:this.visitDropIndex.bind(this),ListNode:this.visitList.bind(this),PrimaryKeyConstraintNode:this.visitPrimaryKeyConstraint.bind(this),UniqueConstraintNode:this.visitUniqueConstraint.bind(this),ReferencesNode:this.visitReferences.bind(this),CheckConstraintNode:this.visitCheckConstraint.bind(this),WithNode:this.visitWith.bind(this),CommonTableExpressionNode:this.visitCommonTableExpression.bind(this),CommonTableExpressionNameNode:this.visitCommonTableExpressionName.bind(this),HavingNode:this.visitHaving.bind(this),CreateSchemaNode:this.visitCreateSchema.bind(this),DropSchemaNode:this.visitDropSchema.bind(this),AlterTableNode:this.visitAlterTable.bind(this),DropColumnNode:this.visitDropColumn.bind(this),RenameColumnNode:this.visitRenameColumn.bind(this),AlterColumnNode:this.visitAlterColumn.bind(this),ModifyColumnNode:this.visitModifyColumn.bind(this),AddConstraintNode:this.visitAddConstraint.bind(this),DropConstraintNode:this.visitDropConstraint.bind(this),RenameConstraintNode:this.visitRenameConstraint.bind(this),ForeignKeyConstraintNode:this.visitForeignKeyConstraint.bind(this),CreateViewNode:this.visitCreateView.bind(this),RefreshMaterializedViewNode:this.visitRefreshMaterializedView.bind(this),DropViewNode:this.visitDropView.bind(this),GeneratedNode:this.visitGenerated.bind(this),DefaultValueNode:this.visitDefaultValue.bind(this),OnNode:this.visitOn.bind(this),ValuesNode:this.visitValues.bind(this),SelectModifierNode:this.visitSelectModifier.bind(this),CreateTypeNode:this.visitCreateType.bind(this),DropTypeNode:this.visitDropType.bind(this),ExplainNode:this.visitExplain.bind(this),DefaultInsertValueNode:this.visitDefaultInsertValue.bind(this),AggregateFunctionNode:this.visitAggregateFunction.bind(this),OverNode:this.visitOver.bind(this),PartitionByNode:this.visitPartitionBy.bind(this),PartitionByItemNode:this.visitPartitionByItem.bind(this),SetOperationNode:this.visitSetOperation.bind(this),BinaryOperationNode:this.visitBinaryOperation.bind(this),UnaryOperationNode:this.visitUnaryOperation.bind(this),UsingNode:this.visitUsing.bind(this),FunctionNode:this.visitFunction.bind(this),CaseNode:this.visitCase.bind(this),WhenNode:this.visitWhen.bind(this),JSONReferenceNode:this.visitJSONReference.bind(this),JSONPathNode:this.visitJSONPath.bind(this),JSONPathLegNode:this.visitJSONPathLeg.bind(this),JSONOperatorChainNode:this.visitJSONOperatorChain.bind(this),TupleNode:this.visitTuple.bind(this),MergeQueryNode:this.visitMergeQuery.bind(this),MatchedNode:this.visitMatched.bind(this),AddIndexNode:this.visitAddIndex.bind(this),CastNode:this.visitCast.bind(this),FetchNode:this.visitFetch.bind(this),TopNode:this.visitTop.bind(this),OutputNode:this.visitOutput.bind(this),OrActionNode:this.visitOrAction.bind(this),CollateNode:this.visitCollate.bind(this)}));Ce(this,"visitNode",e=>{this.nodeStack.push(e),s(this,Il)[e.kind](e),this.nodeStack.pop()})}get parentNode(){return this.nodeStack[this.nodeStack.length-2]}}Il=new WeakMap;const $0=/'/g;class j0 extends U0{constructor(){super(...arguments);ne(this,po,"");ne(this,ys,[])}get numParameters(){return s(this,ys).length}compileQuery(t,n){return le(this,po,""),le(this,ys,[]),this.nodeStack.splice(0,this.nodeStack.length),this.visitNode(t),m({query:t,queryId:n,sql:this.getSql(),parameters:[...s(this,ys)]})}getSql(){return s(this,po)}visitSelectQuery(t){var o,l;const n=this.parentNode!==void 0&&!jn.is(this.parentNode)&&!dr.is(this.parentNode)&&!Dr.is(this.parentNode)&&!wi.is(this.parentNode)&&!ch.is(this.parentNode);this.parentNode===void 0&&t.explain&&(this.visitNode(t.explain),this.append(" ")),n&&this.append("("),t.with&&(this.visitNode(t.with),this.append(" ")),this.append("select"),t.distinctOn&&(this.append(" "),this.compileDistinctOn(t.distinctOn)),(o=t.frontModifiers)!=null&&o.length&&(this.append(" "),this.compileList(t.frontModifiers," ")),t.top&&(this.append(" "),this.visitNode(t.top)),t.selections&&(this.append(" "),this.compileList(t.selections)),t.from&&(this.append(" "),this.visitNode(t.from)),t.joins&&(this.append(" "),this.compileList(t.joins," ")),t.where&&(this.append(" "),this.visitNode(t.where)),t.groupBy&&(this.append(" "),this.visitNode(t.groupBy)),t.having&&(this.append(" "),this.visitNode(t.having)),t.setOperations&&(this.append(" "),this.compileList(t.setOperations," ")),t.orderBy&&(this.append(" "),this.visitNode(t.orderBy)),t.limit&&(this.append(" "),this.visitNode(t.limit)),t.offset&&(this.append(" "),this.visitNode(t.offset)),t.fetch&&(this.append(" "),this.visitNode(t.fetch)),(l=t.endModifiers)!=null&&l.length&&(this.append(" "),this.compileList(this.sortSelectModifiers([...t.endModifiers])," ")),n&&this.append(")")}visitFrom(t){this.append("from "),this.compileList(t.froms)}visitSelection(t){this.visitNode(t.selection)}visitColumn(t){this.visitNode(t.column)}compileDistinctOn(t){this.append("distinct on ("),this.compileList(t),this.append(")")}compileList(t,n=", "){const o=t.length-1;for(let l=0;l<=o;l++)this.visitNode(t[l]),l<o&&this.append(n)}visitWhere(t){this.append("where "),this.visitNode(t.where)}visitHaving(t){this.append("having "),this.visitNode(t.having)}visitInsertQuery(t){var o;const n=this.parentNode!==void 0&&!jn.is(this.parentNode)&&!Mr.is(this.parentNode)&&!Qi.is(this.parentNode);this.parentNode===void 0&&t.explain&&(this.visitNode(t.explain),this.append(" ")),n&&this.append("("),t.with&&(this.visitNode(t.with),this.append(" ")),this.append(t.replace?"replace":"insert"),t.ignore&&(Ts("`InsertQueryNode.ignore` is deprecated. Use `InsertQueryNode.orAction` instead."),this.append(" ignore")),t.orAction&&(this.append(" "),this.visitNode(t.orAction)),t.top&&(this.append(" "),this.visitNode(t.top)),t.into&&(this.append(" into "),this.visitNode(t.into)),t.columns&&(this.append(" ("),this.compileList(t.columns),this.append(")")),t.output&&(this.append(" "),this.visitNode(t.output)),t.values&&(this.append(" "),this.visitNode(t.values)),t.defaultValues&&(this.append(" "),this.append("default values")),t.onConflict&&(this.append(" "),this.visitNode(t.onConflict)),t.onDuplicateKey&&(this.append(" "),this.visitNode(t.onDuplicateKey)),t.returning&&(this.append(" "),this.visitNode(t.returning)),n&&this.append(")"),(o=t.endModifiers)!=null&&o.length&&(this.append(" "),this.compileList(t.endModifiers," "))}visitValues(t){this.append("values "),this.compileList(t.values)}visitDeleteQuery(t){var o;const n=this.parentNode!==void 0&&!jn.is(this.parentNode)&&!Mr.is(this.parentNode);this.parentNode===void 0&&t.explain&&(this.visitNode(t.explain),this.append(" ")),n&&this.append("("),t.with&&(this.visitNode(t.with),this.append(" ")),this.append("delete "),t.top&&(this.visitNode(t.top),this.append(" ")),this.visitNode(t.from),t.output&&(this.append(" "),this.visitNode(t.output)),t.using&&(this.append(" "),this.visitNode(t.using)),t.joins&&(this.append(" "),this.compileList(t.joins," ")),t.where&&(this.append(" "),this.visitNode(t.where)),t.orderBy&&(this.append(" "),this.visitNode(t.orderBy)),t.limit&&(this.append(" "),this.visitNode(t.limit)),t.returning&&(this.append(" "),this.visitNode(t.returning)),n&&this.append(")"),(o=t.endModifiers)!=null&&o.length&&(this.append(" "),this.compileList(t.endModifiers," "))}visitReturning(t){this.append("returning "),this.compileList(t.selections)}visitAlias(t){this.visitNode(t.node),this.append(" as "),this.visitNode(t.alias)}visitReference(t){t.table&&(this.visitNode(t.table),this.append(".")),this.visitNode(t.column)}visitSelectAll(t){this.append("*")}visitIdentifier(t){this.append(this.getLeftIdentifierWrapper()),this.compileUnwrappedIdentifier(t),this.append(this.getRightIdentifierWrapper())}compileUnwrappedIdentifier(t){if(!Er(t.name))throw new Error("a non-string identifier was passed to compileUnwrappedIdentifier.");this.append(this.sanitizeIdentifier(t.name))}visitAnd(t){this.visitNode(t.left),this.append(" and "),this.visitNode(t.right)}visitOr(t){this.visitNode(t.left),this.append(" or "),this.visitNode(t.right)}visitValue(t){t.immediate?this.appendImmediateValue(t.value):this.appendValue(t.value)}visitValueList(t){this.append("("),this.compileList(t.values),this.append(")")}visitTuple(t){this.append("("),this.compileList(t.values),this.append(")")}visitPrimitiveValueList(t){this.append("(");const{values:n}=t;for(let o=0;o<n.length;++o)this.appendValue(n[o]),o!==n.length-1&&this.append(", ");this.append(")")}visitParens(t){this.append("("),this.visitNode(t.node),this.append(")")}visitJoin(t){this.append(z0[t.joinType]),this.append(" "),this.visitNode(t.table),t.on&&(this.append(" "),this.visitNode(t.on))}visitOn(t){this.append("on "),this.visitNode(t.on)}visitRaw(t){const{sqlFragments:n,parameters:o}=t;for(let l=0;l<n.length;++l)this.append(n[l]),o.length>l&&this.visitNode(o[l])}visitOperator(t){this.append(t.operator)}visitTable(t){this.visitNode(t.table)}visitSchemableIdentifier(t){t.schema&&(this.visitNode(t.schema),this.append(".")),this.visitNode(t.identifier)}visitCreateTable(t){this.append("create "),t.frontModifiers&&t.frontModifiers.length>0&&(this.compileList(t.frontModifiers," "),this.append(" ")),t.temporary&&this.append("temporary "),this.append("table "),t.ifNotExists&&this.append("if not exists "),this.visitNode(t.table),t.selectQuery?(this.append(" as "),this.visitNode(t.selectQuery)):(this.append(" ("),this.compileList([...t.columns,...t.constraints??[]]),this.append(")"),t.onCommit&&(this.append(" on commit "),this.append(t.onCommit)),t.endModifiers&&t.endModifiers.length>0&&(this.append(" "),this.compileList(t.endModifiers," ")))}visitColumnDefinition(t){t.ifNotExists&&this.append("if not exists "),this.visitNode(t.column),this.append(" "),this.visitNode(t.dataType),t.unsigned&&this.append(" unsigned"),t.frontModifiers&&t.frontModifiers.length>0&&(this.append(" "),this.compileList(t.frontModifiers," ")),t.generated&&(this.append(" "),this.visitNode(t.generated)),t.identity&&this.append(" identity"),t.defaultTo&&(this.append(" "),this.visitNode(t.defaultTo)),t.notNull&&this.append(" not null"),t.unique&&this.append(" unique"),t.nullsNotDistinct&&this.append(" nulls not distinct"),t.primaryKey&&this.append(" primary key"),t.autoIncrement&&(this.append(" "),this.append(this.getAutoIncrement())),t.references&&(this.append(" "),this.visitNode(t.references)),t.check&&(this.append(" "),this.visitNode(t.check)),t.endModifiers&&t.endModifiers.length>0&&(this.append(" "),this.compileList(t.endModifiers," "))}getAutoIncrement(){return"auto_increment"}visitReferences(t){this.append("references "),this.visitNode(t.table),this.append(" ("),this.compileList(t.columns),this.append(")"),t.onDelete&&(this.append(" on delete "),this.append(t.onDelete)),t.onUpdate&&(this.append(" on update "),this.append(t.onUpdate))}visitDropTable(t){this.append("drop table "),t.ifExists&&this.append("if exists "),this.visitNode(t.table),t.cascade&&this.append(" cascade")}visitDataType(t){this.append(t.dataType)}visitOrderBy(t){this.append("order by "),this.compileList(t.items)}visitOrderByItem(t){this.visitNode(t.orderBy),t.collation&&(this.append(" "),this.visitNode(t.collation)),t.direction&&(this.append(" "),this.visitNode(t.direction)),t.nulls&&(this.append(" nulls "),this.append(t.nulls))}visitGroupBy(t){this.append("group by "),this.compileList(t.items)}visitGroupByItem(t){this.visitNode(t.groupBy)}visitUpdateQuery(t){var o;const n=this.parentNode!==void 0&&!jn.is(this.parentNode)&&!Mr.is(this.parentNode)&&!Qi.is(this.parentNode);if(this.parentNode===void 0&&t.explain&&(this.visitNode(t.explain),this.append(" ")),n&&this.append("("),t.with&&(this.visitNode(t.with),this.append(" ")),this.append("update "),t.top&&(this.visitNode(t.top),this.append(" ")),t.table&&(this.visitNode(t.table),this.append(" ")),this.append("set "),t.updates&&this.compileList(t.updates),t.output&&(this.append(" "),this.visitNode(t.output)),t.from&&(this.append(" "),this.visitNode(t.from)),t.joins){if(!t.from)throw new Error("Joins in an update query are only supported as a part of a PostgreSQL 'update set from join' query. If you want to create a MySQL 'update join set' query, see https://kysely.dev/docs/examples/update/my-sql-joins");this.append(" "),this.compileList(t.joins," ")}t.where&&(this.append(" "),this.visitNode(t.where)),t.orderBy&&(this.append(" "),this.visitNode(t.orderBy)),t.limit&&(this.append(" "),this.visitNode(t.limit)),t.returning&&(this.append(" "),this.visitNode(t.returning)),n&&this.append(")"),(o=t.endModifiers)!=null&&o.length&&(this.append(" "),this.compileList(t.endModifiers," "))}visitColumnUpdate(t){this.visitNode(t.column),this.append(" = "),this.visitNode(t.value)}visitLimit(t){this.append("limit "),this.visitNode(t.limit)}visitOffset(t){this.append("offset "),this.visitNode(t.offset)}visitOnConflict(t){this.append("on conflict"),t.columns?(this.append(" ("),this.compileList(t.columns),this.append(")")):t.constraint?(this.append(" on constraint "),this.visitNode(t.constraint)):t.indexExpression&&(this.append(" ("),this.visitNode(t.indexExpression),this.append(")")),t.indexWhere&&(this.append(" "),this.visitNode(t.indexWhere)),t.doNothing===!0?this.append(" do nothing"):t.updates&&(this.append(" do update set "),this.compileList(t.updates),t.updateWhere&&(this.append(" "),this.visitNode(t.updateWhere)))}visitOnDuplicateKey(t){this.append("on duplicate key update "),this.compileList(t.updates)}visitCreateIndex(t){this.append("create "),t.unique&&this.append("unique "),this.append("index "),t.ifNotExists&&this.append("if not exists "),this.visitNode(t.name),t.table&&(this.append(" on "),this.visitNode(t.table)),t.using&&(this.append(" using "),this.visitNode(t.using)),t.columns&&(this.append(" ("),this.compileList(t.columns),this.append(")")),t.nullsNotDistinct&&this.append(" nulls not distinct"),t.where&&(this.append(" "),this.visitNode(t.where))}visitDropIndex(t){this.append("drop index "),t.ifExists&&this.append("if exists "),this.visitNode(t.name),t.table&&(this.append(" on "),this.visitNode(t.table)),t.cascade&&this.append(" cascade")}visitCreateSchema(t){this.append("create schema "),t.ifNotExists&&this.append("if not exists "),this.visitNode(t.schema)}visitDropSchema(t){this.append("drop schema "),t.ifExists&&this.append("if exists "),this.visitNode(t.schema),t.cascade&&this.append(" cascade")}visitPrimaryKeyConstraint(t){t.name&&(this.append("constraint "),this.visitNode(t.name),this.append(" ")),this.append("primary key ("),this.compileList(t.columns),this.append(")"),this.buildDeferrable(t)}buildDeferrable(t){t.deferrable!==void 0&&(t.deferrable?this.append(" deferrable"):this.append(" not deferrable")),t.initiallyDeferred!==void 0&&(t.initiallyDeferred?this.append(" initially deferred"):this.append(" initially immediate"))}visitUniqueConstraint(t){t.name&&(this.append("constraint "),this.visitNode(t.name),this.append(" ")),this.append("unique"),t.nullsNotDistinct&&this.append(" nulls not distinct"),this.append(" ("),this.compileList(t.columns),this.append(")"),this.buildDeferrable(t)}visitCheckConstraint(t){t.name&&(this.append("constraint "),this.visitNode(t.name),this.append(" ")),this.append("check ("),this.visitNode(t.expression),this.append(")")}visitForeignKeyConstraint(t){t.name&&(this.append("constraint "),this.visitNode(t.name),this.append(" ")),this.append("foreign key ("),this.compileList(t.columns),this.append(") "),this.visitNode(t.references),t.onDelete&&(this.append(" on delete "),this.append(t.onDelete)),t.onUpdate&&(this.append(" on update "),this.append(t.onUpdate)),this.buildDeferrable(t)}visitList(t){this.compileList(t.items)}visitWith(t){this.append("with "),t.recursive&&this.append("recursive "),this.compileList(t.expressions)}visitCommonTableExpression(t){this.visitNode(t.name),this.append(" as "),Da(t.materialized)&&(t.materialized||this.append("not "),this.append("materialized ")),this.visitNode(t.expression)}visitCommonTableExpressionName(t){this.visitNode(t.table),t.columns&&(this.append("("),this.compileList(t.columns),this.append(")"))}visitAlterTable(t){this.append("alter table "),this.visitNode(t.table),this.append(" "),t.renameTo&&(this.append("rename to "),this.visitNode(t.renameTo)),t.setSchema&&(this.append("set schema "),this.visitNode(t.setSchema)),t.addConstraint&&this.visitNode(t.addConstraint),t.dropConstraint&&this.visitNode(t.dropConstraint),t.renameConstraint&&this.visitNode(t.renameConstraint),t.columnAlterations&&this.compileColumnAlterations(t.columnAlterations),t.addIndex&&this.visitNode(t.addIndex),t.dropIndex&&this.visitNode(t.dropIndex)}visitAddColumn(t){this.append("add column "),this.visitNode(t.column)}visitRenameColumn(t){this.append("rename column "),this.visitNode(t.column),this.append(" to "),this.visitNode(t.renameTo)}visitDropColumn(t){this.append("drop column "),this.visitNode(t.column)}visitAlterColumn(t){this.append("alter column "),this.visitNode(t.column),this.append(" "),t.dataType&&(this.announcesNewColumnDataType()&&this.append("type "),this.visitNode(t.dataType),t.dataTypeExpression&&(this.append("using "),this.visitNode(t.dataTypeExpression))),t.setDefault&&(this.append("set default "),this.visitNode(t.setDefault)),t.dropDefault&&this.append("drop default"),t.setNotNull&&this.append("set not null"),t.dropNotNull&&this.append("drop not null")}visitModifyColumn(t){this.append("modify column "),this.visitNode(t.column)}visitAddConstraint(t){this.append("add "),this.visitNode(t.constraint)}visitDropConstraint(t){this.append("drop constraint "),t.ifExists&&this.append("if exists "),this.visitNode(t.constraintName),t.modifier==="cascade"?this.append(" cascade"):t.modifier==="restrict"&&this.append(" restrict")}visitRenameConstraint(t){this.append("rename constraint "),this.visitNode(t.oldName),this.append(" to "),this.visitNode(t.newName)}visitSetOperation(t){this.append(t.operator),this.append(" "),t.all&&this.append("all "),this.visitNode(t.expression)}visitCreateView(t){this.append("create "),t.orReplace&&this.append("or replace "),t.materialized&&this.append("materialized "),t.temporary&&this.append("temporary "),this.append("view "),t.ifNotExists&&this.append("if not exists "),this.visitNode(t.name),this.append(" "),t.columns&&(this.append("("),this.compileList(t.columns),this.append(") ")),t.as&&(this.append("as "),this.visitNode(t.as))}visitRefreshMaterializedView(t){this.append("refresh materialized view "),t.concurrently&&this.append("concurrently "),this.visitNode(t.name),t.withNoData?this.append(" with no data"):this.append(" with data")}visitDropView(t){this.append("drop "),t.materialized&&this.append("materialized "),this.append("view "),t.ifExists&&this.append("if exists "),this.visitNode(t.name),t.cascade&&this.append(" cascade")}visitGenerated(t){this.append("generated "),t.always&&this.append("always "),t.byDefault&&this.append("by default "),this.append("as "),t.identity&&this.append("identity"),t.expression&&(this.append("("),this.visitNode(t.expression),this.append(")")),t.stored&&this.append(" stored")}visitDefaultValue(t){this.append("default "),this.visitNode(t.defaultValue)}visitSelectModifier(t){t.rawModifier?this.visitNode(t.rawModifier):this.append(Q0[t.modifier]),t.of&&(this.append(" of "),this.compileList(t.of,", "))}visitCreateType(t){this.append("create type "),this.visitNode(t.name),t.enum&&(this.append(" as enum "),this.visitNode(t.enum))}visitDropType(t){this.append("drop type "),t.ifExists&&this.append("if exists "),this.visitNode(t.name)}visitExplain(t){this.append("explain"),(t.options||t.format)&&(this.append(" "),this.append(this.getLeftExplainOptionsWrapper()),t.options&&(this.visitNode(t.options),t.format&&this.append(this.getExplainOptionsDelimiter())),t.format&&(this.append("format"),this.append(this.getExplainOptionAssignment()),this.append(t.format)),this.append(this.getRightExplainOptionsWrapper()))}visitDefaultInsertValue(t){this.append("default")}visitAggregateFunction(t){this.append(t.func),this.append("("),t.distinct&&this.append("distinct "),this.compileList(t.aggregated),t.orderBy&&(this.append(" "),this.visitNode(t.orderBy)),this.append(")"),t.withinGroup&&(this.append(" within group ("),this.visitNode(t.withinGroup),this.append(")")),t.filter&&(this.append(" filter("),this.visitNode(t.filter),this.append(")")),t.over&&(this.append(" "),this.visitNode(t.over))}visitOver(t){this.append("over("),t.partitionBy&&(this.visitNode(t.partitionBy),t.orderBy&&this.append(" ")),t.orderBy&&this.visitNode(t.orderBy),this.append(")")}visitPartitionBy(t){this.append("partition by "),this.compileList(t.items)}visitPartitionByItem(t){this.visitNode(t.partitionBy)}visitBinaryOperation(t){this.visitNode(t.leftOperand),this.append(" "),this.visitNode(t.operator),this.append(" "),this.visitNode(t.rightOperand)}visitUnaryOperation(t){this.visitNode(t.operator),this.isMinusOperator(t.operator)||this.append(" "),this.visitNode(t.operand)}isMinusOperator(t){return mi.is(t)&&t.operator==="-"}visitUsing(t){this.append("using "),this.compileList(t.tables)}visitFunction(t){this.append(t.func),this.append("("),this.compileList(t.arguments),this.append(")")}visitCase(t){this.append("case"),t.value&&(this.append(" "),this.visitNode(t.value)),t.when&&(this.append(" "),this.compileList(t.when," ")),t.else&&(this.append(" else "),this.visitNode(t.else)),this.append(" end"),t.isStatement&&this.append(" case")}visitWhen(t){this.append("when "),this.visitNode(t.condition),t.result&&(this.append(" then "),this.visitNode(t.result))}visitJSONReference(t){this.visitNode(t.reference),this.visitNode(t.traversal)}visitJSONPath(t){t.inOperator&&this.visitNode(t.inOperator),this.append("'$");for(const n of t.pathLegs)this.visitNode(n);this.append("'")}visitJSONPathLeg(t){const n=t.type==="ArrayLocation";this.append(n?"[":"."),this.append(String(t.value)),n&&this.append("]")}visitJSONOperatorChain(t){for(let n=0,o=t.values.length;n<o;n++)n===o-1?this.visitNode(t.operator):this.append("->"),this.visitNode(t.values[n])}visitMergeQuery(t){var n;t.with&&(this.visitNode(t.with),this.append(" ")),this.append("merge "),t.top&&(this.visitNode(t.top),this.append(" ")),this.append("into "),this.visitNode(t.into),t.using&&(this.append(" "),this.visitNode(t.using)),t.whens&&(this.append(" "),this.compileList(t.whens," ")),t.returning&&(this.append(" "),this.visitNode(t.returning)),t.output&&(this.append(" "),this.visitNode(t.output)),(n=t.endModifiers)!=null&&n.length&&(this.append(" "),this.compileList(t.endModifiers," "))}visitMatched(t){t.not&&this.append("not "),this.append("matched"),t.bySource&&this.append(" by source")}visitAddIndex(t){this.append("add "),t.unique&&this.append("unique "),this.append("index "),this.visitNode(t.name),t.columns&&(this.append(" ("),this.compileList(t.columns),this.append(")")),t.using&&(this.append(" using "),this.visitNode(t.using))}visitCast(t){this.append("cast("),this.visitNode(t.expression),this.append(" as "),this.visitNode(t.dataType),this.append(")")}visitFetch(t){this.append("fetch next "),this.visitNode(t.rowCount),this.append(` rows ${t.modifier}`)}visitOutput(t){this.append("output "),this.compileList(t.selections)}visitTop(t){this.append(`top(${t.expression})`),t.modifiers&&this.append(` ${t.modifiers}`)}visitOrAction(t){this.append(t.action)}visitCollate(t){this.append("collate "),this.visitNode(t.collation)}append(t){le(this,po,s(this,po)+t)}appendValue(t){this.addParameter(t),this.append(this.getCurrentParameterPlaceholder())}getLeftIdentifierWrapper(){return'"'}getRightIdentifierWrapper(){return'"'}getCurrentParameterPlaceholder(){return"$"+this.numParameters}getLeftExplainOptionsWrapper(){return"("}getExplainOptionAssignment(){return" "}getExplainOptionsDelimiter(){return", "}getRightExplainOptionsWrapper(){return")"}sanitizeIdentifier(t){const n=this.getLeftIdentifierWrapper(),o=this.getRightIdentifierWrapper();let l="";for(const h of t)l+=h,h===n?l+=n:h===o&&(l+=o);return l}sanitizeStringLiteral(t){return t.replace($0,"''")}addParameter(t){s(this,ys).push(t)}appendImmediateValue(t){if(Er(t))this.appendStringLiteral(t);else if(Ra(t)||Da(t)||_c(t))this.append(t.toString());else if(mc(t))this.append("null");else if(sg(t))this.appendImmediateValue(t.toISOString());else throw new Error(`invalid immediate value ${t}`)}appendStringLiteral(t){this.append("'"),this.append(this.sanitizeStringLiteral(t)),this.append("'")}sortSelectModifiers(t){return t.sort((n,o)=>n.modifier&&o.modifier?Th[n.modifier]-Th[o.modifier]:1),m(t)}compileColumnAlterations(t){this.compileList(t)}announcesNewColumnDataType(){return!0}}po=new WeakMap,ys=new WeakMap;const Q0=m({ForKeyShare:"for key share",ForNoKeyUpdate:"for no key update",ForUpdate:"for update",ForShare:"for share",NoWait:"nowait",SkipLocked:"skip locked",Distinct:"distinct"}),Th=m({ForKeyShare:1,ForNoKeyUpdate:1,ForUpdate:1,ForShare:1,NoWait:2,SkipLocked:2,Distinct:0}),z0=m({InnerJoin:"inner join",LeftJoin:"left join",RightJoin:"right join",FullJoin:"full join",CrossJoin:"cross join",LateralInnerJoin:"inner join lateral",LateralLeftJoin:"left join lateral",LateralCrossJoin:"cross join lateral",OuterApply:"outer apply",CrossApply:"cross apply",Using:"using"});class V0{async init(){}async acquireConnection(){return new H0}async beginTransaction(){}async commitTransaction(){}async rollbackTransaction(){}async releaseConnection(){}async destroy(){}async releaseSavepoint(){}async rollbackToSavepoint(){}async savepoint(){}}class H0{async executeQuery(){return{rows:[]}}async*streamQuery(){}}class K0{get supportsCreateIfNotExists(){return!0}get supportsTransactionalDdl(){return!1}get supportsReturning(){return!1}get supportsOutput(){return!1}}const J0=/"/g;class G0 extends j0{visitOrAction(e){this.append("or "),this.append(e.action)}getCurrentParameterPlaceholder(){return"?"}getLeftExplainOptionsWrapper(){return""}getRightExplainOptionsWrapper(){return""}getLeftIdentifierWrapper(){return'"'}getRightIdentifierWrapper(){return'"'}getAutoIncrement(){return"autoincrement"}sanitizeIdentifier(e){return e.replace(J0,'""')}visitDefaultInsertValue(e){this.append("null")}}class X0 extends K0{get supportsTransactionalDdl(){return!1}get supportsReturning(){return!0}async acquireMigrationLock(e,t){}async releaseMigrationLock(e,t){}}const Y0=qo({createdAt:xo,updatedAt:xo,isDeleted:lf(Sf),ownerId:Ky}),mu=new Set(Object.keys(Y0.props)),Z0=[...mu,"id"],eb=qo({name:rr,sql:rr});qo({tables:lc(rr,j_(rr)),indexes:of(eb)});const _u=r=>({allIndexes:e=!1}={})=>{const t=rc(),n=r.sqlite.exec(We`
      select
        sqlite_master.name as tableName,
        table_info.name as columnName
      from
        sqlite_master
        join pragma_table_info(sqlite_master.name) as table_info;
    `);if(!n.ok)return n;n.value.rows.forEach(h=>{const{tableName:g,columnName:S}=h;(t[g]??(t[g]=new Set)).add(S)});const o=r.sqlite.exec(e?We`
            select name, sql
            from sqlite_master
            where type = 'index' and name not like 'sqlite_%';
          `:We`
            select name, sql
            from sqlite_master
            where
              type = 'index'
              and name not like 'sqlite_%'
              and name not like 'evolu_%';
          `);if(!o.ok)return o;const l=o.value.rows.map(h=>({name:h.name,sql:h.sql.replace("CREATE INDEX","create index").replace("CREATE UNIQUE INDEX","create unique index")}));return de({tables:t,indexes:l})},Ch=(r,e)=>r.name===e.name&&r.sql===e.sql,yu=r=>(e,t)=>{const n=[];if(!t){const o=_u(r)();if(!o.ok)return o;t=o.value}for(const[o,l]of Object.entries(e.tables)){const h=zd(t.tables,o);if(!h)n.push(tb(o,l));else for(const g of l.difference(h))n.push(We`
            alter table ${We.identifier(o)}
            add column ${We.identifier(g)} any;
          `)}t.indexes.filter(o=>!e.indexes.some(l=>Ch(l,o))).forEach(o=>{n.push(We`drop index ${We.identifier(o.name)};`)}),e.indexes.filter(o=>!t.indexes.some(l=>Ch(o,l))).forEach(o=>{n.push({sql:`${o.sql};`,parameters:[]})});for(const o of n){const l=r.sqlite.exec(o);if(!l.ok)return l}return de()},tb=(r,e)=>We`
  create table ${We.identifier(r)} (
    "id" text,
    ${We.raw(`${[...mu,...e].map(t=>`${We.identifier(t).sql} any`).join(", ")}, `)}
    primary key ("ownerId", "id")
  )
  without rowid, strict;
`,Ph=new Do({dialect:{createAdapter:()=>new X0,createDriver:()=>new V0,createIntrospector(){throw new Error("Not implemeneted")},createQueryCompiler:()=>new G0}});Ph.schema.createIndex.bind(Ph.schema);const rb=(r,e)=>{if(r.byteLength>e.byteLength)return 1;if(r.byteLength<e.byteLength)return-1;for(let t=0;t<r.byteLength;t++){if(r[t]<e[t])return-1;if(r[t]>e[t])return 1}return 0},gu=mt("Millis",nf(0xffffffffffff-1)(Ze)),nb=0,bu=mt("Counter",nf(65535)(Ze)),wu=0,ib=Gd("NodeId",/^[a-f0-9]{16}$/)(rr),sb="0000000000000000";qo({millis:gu,counter:bu,nodeId:ib});const ob=Ty({millis:hc,counter:hc,nodeId:Oy}),ab=({millis:r=nb,counter:e=wu,nodeId:t=sb}={})=>({millis:r,counter:e,nodeId:t}),lb=r=>{const e=Dl(r.randomBytes.create(8));return ab({nodeId:e})},Lh=r=>e=>{const t=gu.from(r.time.now());if(!t.ok)return Se({type:"TimestampTimeOutOfRangeError"});const n=Math.max(t.value,...e);return n-t.value>r.timestampConfig.maxDrift?Se({type:"TimestampDriftError",now:t.value,next:n}):de(n)},dl=r=>{const e=bu.from(rg(r));return e.ok?de(e.value):Se({type:"TimestampCounterOverflowError"})},cb=r=>e=>{const t=Lh(r)([e.millis]);if(!t.ok)return t;const n=t.value===e.millis?dl(e.counter):de(wu);return n.ok?de({millis:t.value,counter:n.value,nodeId:e.nodeId}):n},ub=r=>(e,t)=>{const n=Lh(r)([e.millis,t.millis]);if(!n.ok)return n;const o=n.value===e.millis&&n.value===t.millis?dl(Math.max(e.counter,t.counter)):n.value===e.millis?dl(e.counter):n.value===t.millis?dl(t.counter):de(wu);return o.ok?de({millis:n.value,counter:o.value,nodeId:e.nodeId}):o};mt("TimestampBytes",ka);const db=Ze.orThrow(16),Xi=r=>{const{millis:e,counter:t,nodeId:n}=r,o=new globalThis.Uint8Array(16),l=BigInt(e);o[0]=Number(l>>40n&0xffn),o[1]=Number(l>>32n&0xffn),o[2]=Number(l>>24n&0xffn),o[3]=Number(l>>16n&0xffn),o[4]=Number(l>>8n&0xffn),o[5]=Number(l&0xffn),o[6]=t>>8&255,o[7]=t&255;for(let h=0;h<8;h++){const g=parseInt(n.slice(h*2,h*2+2),16);o[8+h]=g}return o},Qs=r=>{const e=BigInt(r[0])<<40n|BigInt(r[1])<<32n|BigInt(r[2])<<24n|BigInt(r[3])<<16n|BigInt(r[4])<<8n|BigInt(r[5]),t=r[6]<<8|r[7];let n="";for(let o=8;o<16;o++)n+=r[o].toString(16).padStart(2,"0");return{millis:Number(e),counter:t,nodeId:n}},Fh=rb,fb=r=>new Date(r.millis).toISOString(),Mo=Ze.orThrow(12),hb=new Uint8Array(Mo),Sn=Symbol("InfiniteUpperBound"),zt={Fingerprint:1,Skip:0,Timestamps:2},pb=lc(rr,Py),mb=mt("ValidDbChangeValues",pb,r=>{const e=Z0.filter(t=>t in r);return e.length>0?Se({type:"ValidDbChangeValues",value:r,invalidColumns:e}):de(r)}),Wh=qo({table:rr,id:ac,values:mb,isInsert:ic,isDelete:lf(ic)}),_b=r=>e=>({insertTimestamp:(t,n,o)=>{const l=Nb(r);return bb(r)(t,n,l,o)},getExistingTimestamps:(t,n)=>{const o=Pp(...n),l=r.sqlite.exec(We`
          with recursive
            split_timestamps(timestampBytes, pos) as (
              select
                substr(${o}, 1, 16),
                17 as pos
              union all
              select
                substr(${o}, pos, 16),
                pos + 16
              from split_timestamps
              where pos <= length(${o})
            )
          select s.timestampBytes
          from
            split_timestamps s
            join evolu_timestamp t
              on t.ownerId = ${t} and s.timestampBytes = t.t;
        `);return l.ok?de(l.value.rows.map(h=>h.timestampBytes)):l},getSize:t=>{const n=kb(r)(t);return n.ok?n.value:(e.onStorageError(n.error),null)},fingerprint:(t,n,o)=>{Nu(n,o);const l=Ib(r)(t,n,o);return l.ok?l.value:(e.onStorageError(l.error),null)},fingerprintRanges:(t,n,o)=>{const l=xu(r)(t,n,o);return l.ok?l.value:(e.onStorageError(l.error),null)},findLowerBound:(t,n,o,l)=>{const h=Eb(r)(t,n,o,l);return h.ok?h.value:(e.onStorageError(h.error),null)},iterate:(t,n,o,l)=>{Nu(n,o);const h=o-n;if(h===0)return;const g=Ob(r)(t,n);if(!g.ok){e.onStorageError(g.error);return}if(!l(g.value,n)||h===1)return;const S=r.sqlite.exec(We`
          select t
          from evolu_timestamp
          where ownerId = ${t} and t > ${g.value}
          order by t
          limit ${h-1};
        `);if(!S.ok){e.onStorageError(S.error);return}for(let E=0;E<S.value.rows.length;E++){const k=Ze.orThrow(n+1+E);if(!l(S.value.rows[E].t,k))return}},deleteOwner:t=>{const n=r.sqlite.exec(We`
          delete from evolu_timestamp where ownerId = ${t};
        `);return n.ok?!0:(e.onStorageError(n.error),!1)}}),Nu=(r,e)=>{Ir(r<=e,"invalid begin or end")},yb=r=>{for(const e of[We`
      create table evolu_timestamp (
        "ownerId" blob not null,
        "t" blob not null,
        "h1" integer,
        "h2" integer,
        "c" integer,
        "l" integer not null,
        primary key ("ownerId", "t")
      )
      strict;
    `,We`
      create index evolu_timestamp_index on evolu_timestamp (
        "ownerId",
        "l",
        "t",
        "h1",
        "h2",
        "c"
      );
    `,We`
      create table evolu_usage (
        "ownerId" blob primary key,
        "storedBytes" integer not null,
        "firstTimestamp" blob,
        "lastTimestamp" blob
      )
      strict;
    `]){const t=r.sqlite.exec(e);if(!t.ok)return t}return de()},gb=(r,e,t)=>Fh(r,t)===1?["append",e,r]:Fh(r,e)===-1?["prepend",r,t]:["insert",e,t],bb=r=>(e,t,n,o)=>{const[l,h]=qb(wb(t));let g=[];switch(o){case"append":g=[n===1?We.prepared`
                insert into evolu_timestamp
                  (ownerId, l, t, h1, h2, c)
                values
                  (${e}, 1, ${t}, ${l}, ${h}, 1)
                on conflict do nothing;
              `:We.prepared`
                with
                  fc(b, cl, pt, nt, ih1, ih2, ic) as (
                    select
                      0,
                      (
                        select max(l)
                        from evolu_timestamp
                        where ownerId = ${e}
                      ),
                      zeroblob(0),
                      null,
                      0,
                      0,
                      0
                    union all
                    select
                      not b,
                      iif(b, iif(nt is null, cl - 1, cl), cl),
                      iif(b, ifnull(nt, pt), pt),
                      iif(
                        b,
                        null,
                        (
                          select t
                          from evolu_timestamp
                          where
                            ownerId = ${e}
                            and l = cl
                            and t > pt
                            and t < ${t}
                          order by t
                          limit 1
                        )
                      ),
                      iif(
                        b and cl < ${n} and nt is not null,
                        (
                          select (ih1 | h1) - (ih1 & h1)
                          from evolu_timestamp
                          where ownerId = ${e} and t = nt
                        ),
                        ih1
                      ),
                      iif(
                        b and cl < ${n} and nt is not null,
                        (
                          select (ih2 | h2) - (ih2 & h2)
                          from evolu_timestamp
                          where ownerId = ${e} and t = nt
                        ),
                        ih2
                      ),
                      iif(
                        b and cl < ${n} and nt is not null,
                        (
                          select ic + c
                          from evolu_timestamp
                          where ownerId = ${e} and t = nt
                        ),
                        ic
                      )
                    from fc
                    where cl > 0
                  )
                insert into evolu_timestamp (ownerId, t, l, h1, h2, c)
                select
                  ${e},
                  ${t},
                  ${n},
                  (${l} | ih1) - (${l} & ih1),
                  (${h} | ih2) - (${h} & ih2),
                  ic + 1
                from fc
                order by cl asc
                limit 1
                on conflict do nothing;
              `];break;case"prepend":g=[We.prepared`
            insert into evolu_timestamp
              (ownerId, l, t, h1, h2, c)
            values
              (${e}, ${n}, ${t}, ${l}, ${h}, 1)
            on conflict do nothing;
          `,We.prepared`
            with
              ml(ml) as (
                select max(l)
                from evolu_timestamp
                where ownerId = ${e}
              ),
              fp(b, cl, pt, nt, h1, h2, c) as (
                select
                  0,
                  (select ml from ml),
                  null,
                  null,
                  null,
                  null,
                  null
                union all
                select
                  not b,
                  iif(b, cl - 1, cl),
                  iif(
                    b,
                    iif(nt is not null and (pt is null or nt < pt), nt, pt),
                    pt
                  ),
                  iif(
                    b,
                    null,
                    (
                      select t
                      from evolu_timestamp
                      where ownerId = ${e} and l = cl and t > ${t}
                      order by t
                      limit 1
                    )
                  ),
                  iif(
                    b and nt is not null and (pt is null or nt < pt),
                    (
                      select h1
                      from evolu_timestamp
                      where ownerId = ${e} and t = nt
                    ),
                    null
                  ),
                  iif(
                    b and nt is not null and (pt is null or nt < pt),
                    (
                      select h2
                      from evolu_timestamp
                      where ownerId = ${e} and t = nt
                    ),
                    null
                  ),
                  iif(
                    b and nt is not null and (pt is null or nt < pt),
                    (
                      select c
                      from evolu_timestamp
                      where ownerId = ${e} and t = nt
                    ),
                    null
                  )
                from fp
                where cl > ${n}
              ),
              u(t, h1, h2) as (
                select
                  pt,
                  (${l} | h1) - (${l} & h1),
                  (${h} | h2) - (${h} & h2)
                from fp
                where h1 is not null and pt is not null
                order by pt
                -- Check skiplistMaxLevel docs.
                limit 10
              )
            update evolu_timestamp
            set
              h1 = u.h1,
              h2 = u.h2,
              c = c + 1
            from u
            where
              changes() > 0
              and ownerId = ${e}
              and evolu_timestamp.t = u.t;
          `];break;case"insert":g=n===1?[We.prepared`
                  insert into evolu_timestamp
                    (ownerId, l, t, h1, h2, c)
                  values
                    (${e}, 1, ${t}, ${l}, ${h}, 1)
                  on conflict do nothing;
                `,We.prepared`
                  with
                    p(l, t, h1, h2) as (
                      select
                        (
                          select max(l) + 1
                          from evolu_timestamp
                          where ownerId = ${e}
                        ),
                        null,
                        null,
                        null
                      union all
                      select
                        p.l - 1,
                        ifnull(
                          (
                            select t
                            from evolu_timestamp
                            where
                              ownerId = ${e}
                              and l = p.l - 1
                              and t > ${t}
                              and (p.t is null or p.t > t)
                            order by t
                            limit 1
                          ),
                          p.t
                        ),
                        (
                          select h1
                          from evolu_timestamp
                          where
                            ownerId = ${e}
                            and l = p.l - 1
                            and t > ${t}
                            and (p.t is null or p.t > t)
                          order by t
                          limit 1
                        ),
                        (
                          select h2
                          from evolu_timestamp
                          where
                            ownerId = ${e}
                            and l = p.l - 1
                            and t > ${t}
                            and (p.t is null or p.t > t)
                          order by t
                          limit 1
                        )
                      from p
                      where p.l > 2
                      -- Check skiplistMaxLevel docs.
                      limit 10
                    ),
                    u(t, h1, h2) as (
                      select
                        t,
                        (${l} | h1) - (${l} & h1),
                        (${h} | h2) - (${h} & h2)
                      from p
                      where h1 is not null
                    )
                  update evolu_timestamp
                  set
                    h1 = u.h1,
                    h2 = u.h2,
                    c = c + 1
                  from u
                  where
                    changes() > 0
                    and ownerId = ${e}
                    and evolu_timestamp.t = u.t;
                `]:[We.prepared`
                  insert into evolu_timestamp (ownerId, t, l)
                  values (${e}, ${t}, ${n})
                  on conflict do nothing;
                `,We.prepared`
                  with
                    c0(b, cl, pt, nt, h1, h2, c) as (
                      select
                        0,
                        (
                          select max(l)
                          from evolu_timestamp
                          where ownerId = ${e}
                        ),
                        0,
                        null,
                        null,
                        null,
                        null
                      union all
                      select
                        not b,
                        iif(b, iif(nt is null, cl - 1, cl), cl),
                        iif(b, ifnull(nt, pt), pt),
                        iif(
                          b,
                          null,
                          (
                            select t
                            from evolu_timestamp
                            where
                              ownerId = ${e}
                              and l = cl
                              and t > pt
                              and t < ${t}
                            order by t
                            limit 1
                          )
                        ),
                        iif(
                          b and cl < ${n} and nt is not null,
                          (
                            select h1
                            from evolu_timestamp
                            where ownerId = ${e} and t = nt
                          ),
                          null
                        ),
                        iif(
                          b and cl < ${n} and nt is not null,
                          (
                            select h2
                            from evolu_timestamp
                            where ownerId = ${e} and t = nt
                          ),
                          null
                        ),
                        iif(
                          b and cl < ${n} and nt is not null,
                          (
                            select c
                            from evolu_timestamp
                            where ownerId = ${e} and t = nt
                          ),
                          null
                        )
                      from c0
                      where cl > 0
                    ),
                    c1(l, t, h1, h2, c) as (
                      select
                        ${n},
                        ${t},
                        ${l},
                        ${h},
                        1
                      union all
                      select cl, pt, h1, h2, c
                      from c0
                      where h1 is not null
                    ),
                    c2(rn, l, t, h1, h2, c) as (
                      select row_number() over (order by l), l, t, h1, h2, c
                      from c1
                    ),
                    c3(rn, l, t, h1, h2, c) as (
                      select rn, l, t, h1, h2, c from c2 where rn = 1
                      union all
                      select
                        c3.rn + 1,
                        c2.l,
                        c2.t,
                        (c2.h1 | c3.h1) - (c2.h1 & c3.h1),
                        (c2.h2 | c3.h2) - (c2.h2 & c3.h2),
                        c2.c + c3.c
                      from
                        c3
                        join c2 on c2.rn = c3.rn + 1
                    ),
                    c4(l, t, h1, h2, c, rn) as (
                      select l, t, h1, h2, c, max(rn)
                      from c3
                      group by l
                    ),
                    -- DEV: Check whether a boolean flag is faster.
                    n(l, t, h1, h2, c) as (
                      select
                        (
                          select max(l) + 1
                          from evolu_timestamp
                          where ownerId = ${e}
                        ),
                        null,
                        null,
                        null,
                        null
                      union all
                      select
                        n.l - 1,
                        ifnull(
                          (
                            select t
                            from evolu_timestamp
                            where
                              ownerId = ${e}
                              and l = n.l - 1
                              and t > ${t}
                              and (n.t is null or t < n.t)
                            order by t
                            limit 1
                          ),
                          n.t
                        ),
                        (
                          select h1
                          from evolu_timestamp
                          where
                            ownerId = ${e}
                            and l = n.l - 1
                            and t > ${t}
                            and (n.t is null or t < n.t)
                          order by t
                          limit 1
                        ),
                        (
                          select h2
                          from evolu_timestamp
                          where
                            ownerId = ${e}
                            and l = n.l - 1
                            and t > ${t}
                            and (n.t is null or t < n.t)
                          order by t
                          limit 1
                        ),
                        (
                          select c
                          from evolu_timestamp
                          where
                            ownerId = ${e}
                            and l = n.l - 1
                            and t > ${t}
                            and (n.t is null or t < n.t)
                          order by t
                          limit 1
                        )
                      from n
                      where l - 1 > (select min(l) from c4)
                    ),
                    u(ut, uh1, uh2, uc) as (
                      select t, h1, h2, c from c4 where t = ${t}
                      union all
                      select
                        max(t),
                        iif(
                          l > ${n},
                          (${l} | h1) - (${l} & h1),
                          (
                            select (c4.h1 | n.h1) - (c4.h1 & n.h1)
                            from c4
                            where
                              c4.l = (select max(l) from c4 where c4.l < n.l)
                          )
                        ),
                        iif(
                          l > ${n},
                          (${h} | h2) - (${h} & h2),
                          (
                            select (c4.h2 | n.h2) - (c4.h2 & n.h2)
                            from c4
                            where
                              c4.l = (select max(l) from c4 where c4.l < n.l)
                          )
                        ),
                        iif(
                          l > ${n},
                          c + 1,
                          (
                            select n.c - c4.c
                            from c4
                            where
                              c4.l = (select max(l) from c4 where c4.l < n.l)
                          )
                        )
                      from n
                      group by t
                      -- Check skiplistMaxLevel docs.
                      limit 10
                    )
                  update evolu_timestamp
                  set
                    h1 = uh1,
                    h2 = uh2,
                    c = uc
                  from u
                  where changes() > 0 and ownerId = ${e} and t = ut;
                `];break}for(const S of g){const E=r.sqlite.exec(S);if(!E.ok)return E}return de()},wb=r=>ud(r).slice(0,Mo),Nb=r=>{let e=1;for(;r.random.next()<=xb&&e<vb;)e+=1;return Fr.orThrow(e)},xb=.25,vb=10,qb=r=>{let e=BigInt(0),t=BigInt(0);for(let n=0;n<6;n++)e=e<<BigInt(8)|BigInt(r[n]);for(let n=6;n<12;n++)t=t<<BigInt(8)|BigInt(r[n]);return[e.toString(),t.toString()]},Sb=([r,e])=>{let t=BigInt(r),n=BigInt(e);const o=new Uint8Array(12);for(let l=5;l>=0;l--)o[l]=Number(t&BigInt(255)),t>>=BigInt(8);for(let l=11;l>=6;l--)o[l]=Number(n&BigInt(255)),n>>=BigInt(8);return o},kb=r=>e=>{const t=r.sqlite.exec(We.prepared`
      with
        ml(ml) as (
          select max(l)
          from evolu_timestamp
          where ownerId = ${e}
        ),
        sc(l, pt, c) as (
          select (select ml + 1 from ml), zeroblob(0), 0
          union all
          select
            sc.l - 1,
            ifnull(
              (
                select max(t)
                from evolu_timestamp as m
                where ownerId = ${e} and m.l = sc.l - 1 and m.t > sc.pt
              ),
              sc.pt
            ),
            ifnull(
              (
                select sum(m.c)
                from evolu_timestamp as m
                where ownerId = ${e} and m.l = sc.l - 1 and m.t > sc.pt
              ),
              0
            )
          from sc
          where sc.l > 1
        )
      select sum(c) as size
      from sc;
    `);return t.ok?de(t.value.rows[0].size):t},Eb=r=>(e,t,n,o)=>{if(Nu(t,n),n===0||t===n||o===Sn)return de(n);const l=r.sqlite.exec(We.prepared`
      select t
      from evolu_timestamp
      where ownerId = ${e} and t >= ${o}
      order by t
      limit 1;
    `);if(!l.ok)return l;if(l.value.rows.length===0)return de(n);const h=Ab(r)(e,l.value.rows[0].t);return h.ok?de(Ze.orThrow(ng(h.value))):h},Ab=r=>(e,t)=>{const n=r.sqlite.exec(We.prepared`
      with
        ml(ml) as (
          select max(l) from evolu_timestamp where ownerId = ${e}
        ),
        sc(l, pt, tc) as (
          select ml + 1, zeroblob(0), 0 from ml
          union all
          select
            sc.l - 1,
            ifnull(
              (
                select max(t)
                from evolu_timestamp
                where
                  ownerId = ${e}
                  and l = sc.l - 1
                  and t <= ${t}
                  and t > sc.pt
                order by t
              ),
              sc.pt
            ),
            ifnull(
              (
                select sum(c)
                from evolu_timestamp
                where
                  ownerId = ${e}
                  and l = sc.l - 1
                  and t <= ${t}
                  and t > sc.pt
              ),
              0
            )
          from sc
          where sc.l > 1 and sc.pt != ${t}
        )
      select sum(tc) as count
      from sc;
    `);return n.ok?de(n.value.rows[0].count):n},Ib=r=>(e,t,n)=>{if(n-t===0)return de(hb);if(t===0){const l=xu(r)(e,[n]);return l.ok?de(l.value[0].fingerprint):l}const o=xu(r)(e,[t,n]);return o.ok?de(o.value[1].fingerprint):o},xu=r=>(e,t,n=Sn)=>{const o=JSON.stringify(t),l=r.sqlite.exec(We.prepared`
      with
        ml(ml) as (
          select max(l) from evolu_timestamp where ownerId = ${e}
        ),
        c0(c) as (select value as c from json_each(${o})),
        c1(c, b, nt, nc, nh1, nh2, ft, tt, dl, ic, h1, h2) as (
          select
            c,
            1,
            null,
            null,
            null,
            null,
            zeroblob(0),
            X'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            ml,
            0,
            0,
            0
          from
            c0,
            ml
          union all
          select
            c,
            not b,
            iif(
              b,
              (
                select t
                from evolu_timestamp
                where l = dl and t > ft and t < tt and ownerId = ${e}
                order by t
                limit 1
              ),
              null
            ),
            iif(
              b,
              (
                select c
                from evolu_timestamp
                where l = dl and t > ft and t < tt and ownerId = ${e}
                order by t
                limit 1
              ),
              null
            ),
            iif(
              b,
              (
                select h1
                from evolu_timestamp
                where l = dl and t > ft and t < tt and ownerId = ${e}
                order by t
                limit 1
              ),
              null
            ),
            iif(
              b,
              (
                select h2
                from evolu_timestamp
                where l = dl and t > ft and t < tt and ownerId = ${e}
                order by t
                limit 1
              ),
              null
            ),
            iif(b, ft, iif(ic + nc <= c, nt, ft)),
            iif(b, tt, iif(ic + nc <= c, tt, ifnull(nt, tt))),
            iif(b, dl, iif(ic + nc <= c, dl, dl - 1)),
            iif(b, ic, iif(ic + nc <= c, ic + nc, ic)),
            iif(b, h1, iif(ic + nc <= c, ${fl("h1","nh1")}, h1)),
            iif(b, h2, iif(ic + nc <= c, ${fl("h2","nh2")}, h2))
          from c1
          where iif(b, 1, ic != c)
        ),
        c2(h1, h2, t, rn) as (
          select
            h1,
            h2,
            (
              select min(t)
              from evolu_timestamp
              where t > ft and ownerId = ${e}
            ),
            row_number() over (order by c)
          from c1
          where c = ic and b = 1
        ),
        c3(oh1, oh2, b, rn, h1, h2) as (
          select h1, h2, t, rn, h1, h2 from c2 where rn = 1
          union all
          select
            c2.h1,
            c2.h2,
            t,
            c2.rn,
            ${fl("c3.oh1","c2.h1")},
            ${fl("c3.oh2","c2.h2")}
          from
            c2
            join c3 on c2.rn = c3.rn + 1
        )
      select b, cast(h1 as text) as h1, cast(h2 as text) as h2
      from c3;
    `);if(!l.ok)return l;const h=l.value.rows.map((g,S,E)=>({type:zt.Fingerprint,upperBound:S===E.length-1?n:g.b,fingerprint:Sb([g.h1,g.h2])}));return de(h)},fl=(r,e)=>We.raw(`(${r} | ${e}) - (${r} & ${e})`),Ob=r=>(e,t)=>{const n=r.sqlite.exec(We.prepared`
      with
        fi(b, cl, ic, pt, mt, nt, nc) as (
          select
            0,
            (
              select max(l)
              from evolu_timestamp
              where ownerId = ${e}
            ),
            0,
            zeroblob(0),
            X'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            null,
            0
          union all
          select
            not b,
            iif(
              b,
              iif(nt is null or nt > mt or ic + nc > ${t+1}, cl - 1, cl),
              cl
            ),
            iif(
              b,
              iif(nt is null or nt > mt or ic + nc > ${t+1}, ic, ic + nc),
              ic
            ),
            iif(
              b,
              iif(nt is null or nt > mt or ic + nc > ${t+1}, pt, nt),
              pt
            ),
            iif(
              b,
              iif(
                nt is null or nt > mt or ic + nc > ${t+1},
                iif(nt is not null and nt < mt, nt, mt),
                mt
              ),
              mt
            ),
            iif(
              b,
              null,
              (
                select t
                from evolu_timestamp
                where ownerId = ${e} and l = cl and t > pt
                order by t
                limit 1
              )
            ),
            iif(
              b,
              null,
              (
                select c
                from evolu_timestamp
                where ownerId = ${e} and l = cl and t > pt
                order by t
                limit 1
              )
            )
          from fi
          where ic != ${t+1}
        )
      select pt
      from fi
      where ic == ${t+1};
    `);return n.ok?de(n.value.rows[0].pt):n},Tb=r=>(e,t)=>{const n=r.sqlite.exec(We`
      select storedBytes, firstTimestamp, lastTimestamp
      from evolu_usage
      where ownerId = ${e};
    `);if(!n.ok)return n;if(!At(n.value.rows))return de({storedBytes:null,firstTimestamp:t,lastTimestamp:t});const o=Ri(n.value.rows);return Ir(o.firstTimestamp,"not null"),Ir(o.lastTimestamp,"not null"),de({storedBytes:o.storedBytes,firstTimestamp:o.firstTimestamp,lastTimestamp:o.lastTimestamp})},Cb=r=>(e,t,n,o)=>{const l=r.sqlite.exec(We`
      insert into evolu_usage
        ("ownerId", "storedBytes", "firstTimestamp", "lastTimestamp")
      values
        (${e}, ${t}, ${n}, ${o})
      on conflict (ownerId) do update
        set
          storedBytes = ${t},
          firstTimestamp = ${n},
          lastTimestamp = ${o};
    `);return l.ok?de():l},hl=new Bd({variableMapSize:!0,useRecords:!1}),Rh=1e6;sf(Rh,1e8)(Ca);const Dh=Rh;sf(3e3,1e5)(Ca);const Pb=3e4,pl=Ze.orThrow(1),sn={Request:0,Response:1,Broadcast:2},Uo={None:0,Subscribe:1,Unsubscribe:2},on={NoError:0,WriteKeyError:1,WriteError:2,QuotaError:3,SyncError:4},Lb=r=>(e,t,n)=>{const o=ml(e.id,{messageType:sn.Request,totalMaxSize:n??Dh,writeKey:e.writeKey});let l=!1;for(const h of t){const g=Qh(r)(h,e.encryptionKey),S={timestamp:h.timestamp,change:g};if(o.canAddMessage(S))o.addMessage(S);else{l=!0;break}}if(l){const h=r.randomBytes.create(Mo);o.addRange({type:zt.Fingerprint,upperBound:Sn,fingerprint:h})}return o.unwrap()},Bh=r=>(e,t)=>{const n=ml(e,{messageType:sn.Request,subscriptionFlag:t??Uo.None}),o=Fa(e),l=r.storage.getSize(o);return l==null?null:(Uh(r)(o,Ze.orThrow(0),l,Sn,n),n.unwrap())},Fb=r=>ml(r,{messageType:sn.Request,subscriptionFlag:Uo.Unsubscribe}).unwrap(),ml=(r,e)=>{const{totalMaxSize:t=Dh,rangesMaxSize:n=Pb,version:o=pl}=e,l={header:wn(),messages:{timestamps:_l(),dbChanges:wn()},ranges:{timestamps:_l(),types:wn(),payloads:wn()}};if(Vt(l.header,o),l.header.extend(Fa(r)),l.header.extend([e.messageType]),e.messageType===sn.Request){e.writeKey?(l.header.extend([1]),l.header.extend(e.writeKey)):l.header.extend([0]);const H=e.subscriptionFlag??Uo.None;l.header.extend([H])}else e.messageType===sn.Response&&l.header.extend([e.errorCode]);let h=!1;const g=()=>S()<=t,S=()=>Fr.orThrow(E()+k()),E=()=>l.header.getLength()+l.messages.timestamps.getLength()+l.messages.dbChanges.getLength(),k=()=>l.ranges.timestamps.getCount()>0?l.ranges.timestamps.getLength()+l.ranges.types.getLength()+l.ranges.payloads.getLength()+x.remainingRange:0,x={remainingRange:Mo+10,timestamp:30,dbChangeLength:8,splitRange:800,timestampsRange:50},F=x.timestamp+x.dbChangeLength+x.remainingRange;return{canAddMessage:H=>S()+F+H.change.length<=t,addMessage:H=>{l.messages.timestamps.add(H.timestamp),Yi(l.messages.dbChanges,H.change),l.messages.dbChanges.extend(H.change),Ir(g(),"the message is too big")},canSplitRange:()=>k()+x.splitRange<=n,canAddTimestampsRangeAndMessage:(H,J)=>{const Y=k()+H.getLength()+x.timestampsRange;return Y<=n&&(J?E()+Y+F+J.change.length<=t:!0)},addRange:H=>{switch(Ir(e.messageType!==sn.Broadcast,"Cannot add a range into broadcast message"),Ir(!h,"Cannot add a range after an InfiniteUpperBound range"),h=H.upperBound===Sn,H.upperBound!==Sn?l.ranges.timestamps.add(Qs(H.upperBound)):l.ranges.timestamps.addInfinite(),Vt(l.ranges.types,Ze.orThrow(H.type)),H.type){case zt.Skip:break;case zt.Fingerprint:l.ranges.payloads.extend(H.fingerprint);break;case zt.Timestamps:{H.timestamps.append(l.ranges.payloads);break}}Ir(g(),`the range ${H.type} is too big`)},unwrap:()=>(l.ranges.timestamps.getCount()>0&&Ir(h,"The last range's upperBound must be InfiniteUpperBound"),l.messages.timestamps.append(l.header),l.header.extend(l.messages.dbChanges.unwrap()),l.ranges.timestamps.getCount()>0&&(l.ranges.timestamps.append(l.header),l.header.extend(l.ranges.types.unwrap()),l.header.extend(l.ranges.payloads.unwrap())),l.header.unwrap()),getSize:S}},_l=()=>{let r=Ze.orThrow(0);const e=wn(),t=()=>{e.reset(),Vt(e,r)};t();const n=wn();let o=0;const l=Mh((g,S)=>{Vt(g,S)}),h=Mh((g,S)=>{Qb(g,S)});return{add:g=>{const S=g.millis-o;Ir(Ze.is(S),"The delta must be NonNegativeInt"),r++,t(),o=g.millis,Vt(n,S),l.add(g.counter),h.add(g.nodeId)},addInfinite:()=>{r++,t()},getCount:()=>r,getLength:()=>e.getLength()+n.getLength()+l.getLength()+h.getLength(),append:g=>{g.extend(e.unwrap()),g.extend(n.unwrap()),g.extend(l.unwrap()),g.extend(h.unwrap())}}},Mh=r=>{const e=wn();let t=Ze.orThrow(0),n=null,o=Ze.orThrow(0);return{add:l=>{l===n?(o++,e.truncate(t)):(n=l,o=Ze.orThrow(1)),t=e.getLength(),r(e,l),Vt(e,o)},getLength:()=>e.getLength(),unwrap:()=>e.unwrap()}},Wb=r=>async(e,t={})=>{var n;try{const o=wn(e),[l,h]=Rb(o),g=t.version??pl;if(l!==g)return Se({type:"ProtocolVersionError",version:l,isInitiator:g<l,ownerId:h});const S=o.shift();if(Ir(S===sn.Response||S===sn.Broadcast,"Invalid MessageType"),S===sn.Response){const Y=o.shift();if(Y!==on.NoError)switch(Y){case on.WriteKeyError:return Se({type:"ProtocolWriteKeyError",ownerId:h});case on.WriteError:return Se({type:"ProtocolWriteError",ownerId:h});case on.QuotaError:return Se({type:"ProtocolQuotaError",ownerId:h});case on.SyncError:return Se({type:"ProtocolSyncError",ownerId:h});default:throw new Qn(`Invalid ProtocolErrorCode: ${Y}`)}}const E=Db(o),k=Fa(h);if(At(E)&&!(await r.storage.writeMessages(k,E)).ok)return de({type:"no-response"});const x=(n=t.getWriteKey)==null?void 0:n.call(t,h);if(x==null)return de({type:"no-response"});if(S===sn.Broadcast)return de({type:"broadcast"});const F=Mb(o);if(!At(F))return de({type:"no-response"});const H=ml(h,{messageType:sn.Request,writeKey:x,rangesMaxSize:t.rangesMaxSize}),J=Bb(r)(F,H,k);return!J.ok||!J.value?de({type:"no-response"}):de({type:"response",message:H.unwrap()})}catch(o){return Se({type:"ProtocolInvalidDataError",data:e,error:o})}},Rb=r=>{const e=Qr(r),t=qu(r);return[e,t]};class Qn extends Error{constructor(e){super(e),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}}const Db=r=>{const e=vu(r),t=[];for(const n of e){const o=Zi(r),l=r.shiftN(o);t.push({timestamp:n,change:l})}return t},Bb=r=>(e,t,n)=>{const o=t.getSize(),l=r.storage.getSize(n);if(l==null)return Se(on.SyncError);let h=null,g=Ze.orThrow(0),S=!1,E=!1;const k=J=>{E&&J.upperBound===Sn?t.addRange({type:zt.Skip,upperBound:Sn}):S=!0},x=()=>{E=!0,S&&(S=!1,Ir(h!=null,"prevUpperBound is null"),t.addRange({type:zt.Skip,upperBound:h}))},F=J=>{const Y=r.storage.fingerprint(n,J,l);return Y?(t.addRange({type:zt.Fingerprint,upperBound:Sn,fingerprint:Y}),!0):!1};for(const J of e){const Y=J.upperBound,ve=g;let ke=r.storage.findLowerBound(n,g,l,Y);if(ke==null)return Se(on.SyncError);switch(J.type){case zt.Skip:{k(J);break}case zt.Fingerprint:{const $e=r.storage.fingerprint(n,ve,ke);if($e==null)return Se(on.SyncError);if(xf(J.fingerprint,$e))k(J);else if(t.canSplitRange())x(),Uh(r)(n,ve,ke,Y,t);else return F(ke)?de(!0):Se(on.SyncError);break}case zt.Timestamps:{let $e=Y;const Re=new Map(J.timestamps.map(ze=>[ze.join(),!0])),Le=_l();let gt=!1,wt=!1;if(r.storage.iterate(n,ve,ke,(ze,Qe)=>{const ut=ze.join(),ht=Qs(ze);let dt=null;if(Re.has(ut))Re.delete(ut);else{const W=r.storage.readDbChange(n,ze);if(W==null)return gt=!0,!1;dt={timestamp:ht,change:W}}return t.canAddTimestampsRangeAndMessage(Le,dt)?(Le.add(ht),dt&&t.addMessage(dt),!0):(wt=!0,$e=ze,ke=Qe,!1)}),gt)return Se(on.SyncError);const Fe=()=>{x(),t.addRange({type:zt.Timestamps,upperBound:$e,timestamps:Le})};if(wt)return Fe(),F(ke)?de(!0):Se(on.SyncError);Re.size>0?Fe():k(J);break}}g=ke,h=Y}const H=t.getSize()>o;return de(H)},Uh=r=>(e,t,n,o,l)=>{const h=Ze.orThrow(n-t),g=ig(h);if(!g.ok){const x={type:zt.Timestamps,upperBound:o,timestamps:_l()};r.storage.iterate(e,Ze.orThrow(0),h,F=>(x.timestamps.add(Qs(F)),!0)),l.addRange(x);return}const S=t===0?g.value:[t,...g.value.map(x=>Ze.orThrow(x+t))],E=r.storage.fingerprintRanges(e,S,o);if(E==null)return;const k=t>0?E.slice(1):E;for(const x of k)l.addRange(x)},Mb=r=>{if(r.getLength()===0)return[];const e=Qr(r);if(e===0)return[];const t=Ze.orThrow(e-1),n=vu(r,t),o=[];for(let h=0;h<e;h++){const g=Qr(r);switch(g){case zt.Fingerprint:case zt.Skip:case zt.Timestamps:o.push(g);break;default:throw new Qn(`Invalid RangeType: ${g}`)}}const l=[];for(let h=0;h<e;h++){const g=h<t?Xi(n[h]):Sn;switch(o[h]){case zt.Skip:l.push({type:zt.Skip,upperBound:g});break;case zt.Fingerprint:{const E=r.shiftN(Mo);l.push({type:zt.Fingerprint,upperBound:g,fingerprint:E});break}case zt.Timestamps:{const E=vu(r).map(Xi);l.push({type:zt.Timestamps,upperBound:g,timestamps:E});break}}}return l},vu=(r,e)=>{e??(e=Qr(r));let t=0;const n=[];for(let E=0;E<e;E++){const k=Qr(r),x=gu.from(t+k);if(!x.ok)throw new Qn(x.error.type);n.push(x.value),t=x.value}const o=[];let l=0;for(;l<e;){const E=bu.from(Qr(r));if(!E.ok)throw new Qn(E.error.type);const k=Qr(r);for(let x=0;x<k;x++)o.push(E.value),l++}const h=[];let g=0;for(;g<e;){const E=zb(r),k=Qr(r);for(let x=0;x<k;x++)h.push(E),g++}const S=[];for(let E=0;E<e;E++)S.push({millis:n[E],counter:o[E],nodeId:h[E]});return S},qu=r=>{const e=r.shiftN(g_);return Ta(e)},$h=(r,e)=>{r.extend(hl.pack(e))},jh=r=>{let e,t;hl.unpackMultiple(r.unwrap(),(l,h,g)=>(e=l,t=g,!1));const n=Ze.fromUnknown(t);if(!n.ok)throw new Qn(n.error.type);const o=Mi.fromUnknown(e);if(!o.ok)throw new Qn(o.error.type);return r.shiftN(n.value),o.value},Ub=(r,e)=>{let t=0;for(let n=0;n<e.length&&n<8;n++)e[n]&&(t|=1<<n);r.extend([t])},$b=(r,e)=>{const t=r.shift(),n=[];for(let o=0;o<e&&o<8;o++)n.push((t&1<<o)!==0);return n},Qh=r=>(e,t)=>{const n=wn();Vt(n,pl),n.extend(Xi(e.timestamp)),Ub(n,[e.change.isInsert,e.change.isDelete!=null,e.change.isDelete??!1]),Su(n,e.change.table),n.extend(Oa(e.change.id));const o=Qd(e.change.values);Yi(n,o);for(const[g,S]of o)Su(n,g),Vb(n,S);n.extend(Iy(n.getLength()));const{nonce:l,ciphertext:h}=r.symmetricCrypto.encrypt(n.unwrap(),t);return n.reset(),n.extend(l),Yi(n,h),n.extend(h),n.unwrap()},jb=r=>(e,t)=>{try{const n=wn(e.change),o=n.shiftN(r.symmetricCrypto.nonceLength),l=n.shiftN(Zi(n)),h=r.symmetricCrypto.decrypt(l,t,o);if(!h.ok)return h;n.reset(),n.extend(h.value),Qr(n);const g=Qs(n.shiftN(db));if(!ob(g,e.timestamp))return Se({type:"ProtocolTimestampMismatchError",expected:e.timestamp,timestamp:g});const S=$b(n,Fr.orThrow(3)),E=ku(n),k=qu(n),x=Zi(n),F=rc();for(let J=0;J<x;J++){const Y=ku(n),ve=Hb(n);F[Y]=ve}const H=Wh.orThrow({table:E,id:k,values:F,isInsert:S[0],isDelete:S[1]?S[2]:null});return de(H)}catch(n){return Se({type:"ProtocolInvalidDataError",data:e.change,error:n})}},Vt=(r,e)=>{if(e===0){r.extend([0]);return}let t=BigInt(e);const n=[];for(;t!==0n;){const o=globalThis.Number(t&127n);n.push(o),t>>=7n}for(let o=0;o<n.length-1;o++)n[o]|=128;r.extend(n)},Qr=r=>{let e=0n,t=0n,n;for(let l=0;l<8&&(n=r.shift(),e|=BigInt(n&127)<<t,!!(n&128));l++)t+=7n;const o=Ze.from(globalThis.Number(e));if(!o.ok)throw new Qn(o.error.type);return o.value},Yi=(r,e)=>{Vt(r,Ze.orThrow(e.length))},Zi=Qr,Su=(r,e)=>{const t=Tp(e);Yi(r,t),r.extend(t)},ku=r=>{const e=Zi(r),t=r.shiftN(e);return Cp(t)},Qb=(r,e)=>{r.extend(Zu(e))},zb=r=>{const e=r.shiftN(Ze.orThrow(8));return Dl(e)},zh=r=>r>=0&&r<20,jt={String:Ze.orThrow(20),Number:Ze.orThrow(21),Null:Ze.orThrow(22),Bytes:Ze.orThrow(23),NonNegativeInt:Ze.orThrow(30),EmptyString:Ze.orThrow(31),Base64Url:Ze.orThrow(32),Id:Ze.orThrow(33),Json:Ze.orThrow(34),DateIsoWithNonNegativeTime:Ze.orThrow(35),DateIsoWithNegativeTime:Ze.orThrow(36)},Vb=(r,e)=>{if(e===null){Vt(r,jt.Null);return}switch(typeof e){case"string":{if(e===""){Vt(r,jt.EmptyString);return}const t=xo.fromParent(e);if(t.ok){const h=new Date(t.value).getTime();Ze.is(h)?(Vt(r,jt.DateIsoWithNonNegativeTime),Vt(r,h)):(Vt(r,jt.DateIsoWithNegativeTime),$h(r,h));return}const n=ac.fromParent(e);if(n.ok){Vt(r,jt.Id),r.extend(Oa(n.value));return}const o=ry.fromParent(e);if(o.ok&&JSON.stringify(uf(o.value))===e){const h=hl.pack(uf(o.value));Vt(r,jt.Json),Yi(r,h),r.extend(h);return}const l=Xd.fromParent(e);if(l.ok){Vt(r,jt.Base64Url);const h=oc(l.value);Yi(r,h),r.extend(h);return}Vt(r,jt.String),Su(r,e);return}case"number":{if(Ze.is(e)){if(zh(e)){Vt(r,e);return}Vt(r,jt.NonNegativeInt),Vt(r,e);return}Vt(r,jt.Number),$h(r,e);return}}Vt(r,jt.Bytes),Yi(r,e),r.extend(e)},Hb=r=>{const e=Qr(r);if(zh(e))return e;switch(e){case jt.String:return ku(r);case jt.Number:return jh(r);case jt.Null:return null;case jt.Bytes:{const t=Zi(r);return r.shiftN(t)}case jt.Id:return qu(r);case jt.NonNegativeInt:return Qr(r);case jt.Json:{const t=Zi(r),n=r.shiftN(t);return JSON.stringify(hl.unpack(n))}case jt.DateIsoWithNonNegativeTime:case jt.DateIsoWithNegativeTime:{const t=e===jt.DateIsoWithNonNegativeTime?Qr(r):jh(r),n=xo.fromParent(new Date(t).toISOString());if(!n.ok)throw new Qn(n.error.type);return n.value}case jt.EmptyString:return"";case jt.Base64Url:{const t=Zi(r),n=r.shiftN(t);return Ia(n)}default:throw new Qn("invalid ProtocolValueType")}},Kb=r=>{const[e,t,n]=JSON.parse(r),o=t.map(([h,g])=>h==="b"?Zu(g):g),l=n.length?Object.fromEntries(n):void 0;return{sql:e,parameters:o,...l!==void 0&&{options:l}}},Jb=[],Gb=()=>{const r=new Map;return e=>{let t=r.get(e);if(!t){let n=new Map;t={set:o=>{n=new Map([...n,...o])},get:()=>n},r.set(e,t)}return t}},Vh=r=>(e,t)=>{var S;const n=[];for(const E of t){const k=Kb(E),x=r.sqlite.exec(k);if(!x.ok)return x;n.push([E,x.value.rows]),(S=k.options)!=null&&S.logExplainQueryPlan&&Uy(r)(k)}const o=r.getQueryRowsCache(e),l=o.get();o.set(n);const h=o.get(),g=t.map(E=>({query:E,patches:Xb(l.get(E),h.get(E)??Jb)}));return de(g)},Xb=(r,e)=>{if(r===void 0)return[{op:"replaceAll",value:e}];if(r.length!==e.length)return[{op:"replaceAll",value:e}];const t=r.length,n=[];for(let o=0;o<t;o++){const l=r[o],h=e[o];for(const g in l)if(!Ly(l[g],h[g])){n.push({op:"replaceAt",value:h,index:o});break}}return t>0&&n.length===t?[{op:"replaceAll",value:e}]:n};m_({randomBytes:wf()});const Yb=r=>{let e=!1;const t=new Map,n=new Map,o=new Map,l=new Map,h=r.disposalDelay??100,g=k=>{const x=r.getResourceKey(k),F=l.get(x);if(F&&(clearTimeout(F),l.delete(x)),!t.has(x)){const H=r.createResource(k);t.set(x,H)}},S=k=>{const x=setTimeout(()=>{const F=t.get(k);F&&(F[Symbol.dispose](),t.delete(k)),l.delete(k)},h);l.set(k,x)},E={addConsumer:(k,x)=>{if(e)return;const F=r.getConsumerId(k);o.set(F,k);for(const H of x){g(H);const J=r.getResourceKey(H);let Y=n.get(J);Y||(Y=new Map,n.set(J,Y));const ve=Y.get(F)??0,ke=ve+1;if(Y.set(F,Fr.orThrow(ke)),ve===0&&r.onConsumerAdded){const $e=t.get(J);$e&&r.onConsumerAdded(k,$e,J)}}},removeConsumer:(k,x)=>{if(e)return de();const F=r.getConsumerId(k);for(const H of x){const J=r.getResourceKey(H),Y=n.get(J);if(!Y)return Se({type:"ResourceNotFoundError",resourceKey:J});const ve=Y.get(F);if(ve==null)return Se({type:"ConsumerNotFoundError",consumerId:F,resourceKey:J});if(ve===1){if(Y.delete(F),r.onConsumerRemoved){const ke=t.get(J);ke&&r.onConsumerRemoved(k,ke,J)}Y.size===0&&(n.delete(J),S(J))}else Y.set(F,Fr.orThrow(ve-1))}return E.hasConsumerAnyResource(k)||o.delete(F),de()},getResource:k=>e?null:t.get(k)??null,getConsumersForResource:k=>{if(e)return[];const x=n.get(k);return x?Array.from(x.keys()):[]},hasConsumerAnyResource:k=>{if(e)return!1;const x=r.getConsumerId(k);return Array.from(n.values()).some(F=>F.has(x))},getConsumer:k=>{if(e)return null;const x=o.get(k);return!x||!E.hasConsumerAnyResource(x)?null:x},[Symbol.dispose]:()=>{if(!e){e=!0;for(const k of l.values())clearTimeout(k);l.clear();for(const k of t.values())k[Symbol.dispose]();t.clear(),n.clear(),o.clear()}}};return E},Zb=()=>{const r={now:()=>{const e=r.nowIso();return new globalThis.Date(e).getTime()},nowIso:()=>{const e=new globalThis.Date().toISOString();return Ir(xo.is(e),"System clock returned invalid ISO date"),e}};return r},Eu=r=>{if(typeof r=="number")return r;const e={ms:1,s:1e3,m:6e4,h:36e5,d:864e5};let t=0,n=0;for(;n<r.length;){for(;n<r.length&&r[n]===" ";)n++;if(n>=r.length)break;let o="";for(;n<r.length&&r[n]>="0"&&r[n]<="9";)o+=r[n],n++;if(o==="")break;let l="";if(n<r.length&&(r[n]==="m"&&n+1<r.length&&r[n+1]==="s"?(l="ms",n+=2):(r[n]==="s"||r[n]==="m"||r[n]==="h"||r[n]==="d")&&(l=r[n],n++)),l==="")break;const h=parseInt(o,10);t+=h*e[l]}return Ze.orThrow(t)},Hh=r=>typeof r=="object"&&r!==null&&r.type==="AbortError";typeof AbortSignal.any!="function"&&(AbortSignal.any=function(r){const e=new AbortController,t=o=>{e.abort(o.target.reason),n()},n=()=>{for(const o of r)o.removeEventListener("abort",t)};for(const o of r){if(o.aborted)return e.abort(o.reason),e.signal;o.addEventListener("abort",t)}return e.signal});const Kh=(r,e)=>r!=null&&r.signal?AbortSignal.any([r.signal,e]):e,Au=r=>e=>{const t=e==null?void 0:e.signal;if(!t)return r(e);if(t.aborted)return Promise.resolve(Se({type:"AbortError",reason:t.reason}));const{promise:n,resolve:o}=Promise.withResolvers(),l=()=>{o(Se({type:"AbortError",reason:t.reason}))};return t.addEventListener("abort",l,{once:!0}),Promise.race([n,r(e).then(h=>(t.removeEventListener("abort",l),h))])};typeof AbortSignal.timeout!="function"&&(AbortSignal.timeout=function(r){const e=new AbortController,t=setTimeout(()=>{e.abort()},r);return e.signal.addEventListener("abort",()=>{clearTimeout(t)}),e.signal});const ew=r=>Au(e=>new Promise(t=>{const n=Eu(r),o=AbortSignal.timeout(n);Kh(e,o).addEventListener("abort",()=>{t(de())},{once:!0})})),tw=({retries:r,initialDelay:e="1s",maxDelay:t="30s",factor:n=2,jitter:o=.5,retryable:l=S=>!Hh(S),onRetry:h},g)=>Au(async S=>{const E=Eu(e),k=Eu(t),x=Fr.orThrow(r);let F=0;for(;;){const H=await g(S);if(H.ok)return H;if(Hh(H.error))return Se(H.error);if(F+=1,F>x||!l(H.error))return Se({type:"RetryError",cause:H.error,attempts:F});const J=E*Math.pow(n,F-1),Y=Math.min(J,k),ve=1-o+Math.random()*o*2,ke=Math.floor(Y*ve);h&&h(H.error,F,ke);{const $e=await ew(Ze.orThrow(ke))(S);if(!$e.ok)return $e}}}),rw=r=>{let e=!1,t=r;const n=[],o=new AbortController,l=()=>t>0?(t--,Promise.resolve()):new Promise(g=>{n.push(g)}),h=()=>{Et(n)?Ju(n)():t++};return{withPermit:g=>Au(async S=>{if(await l(),e)return Se({type:"AbortError",reason:"Semaphore disposed"});const E=Kh(S,o.signal),k=await g({signal:E});return h(),k}),[Symbol.dispose]:()=>{if(!e)for(e=!0,o.abort("Semaphore disposed");Et(n);)Ju(n)()}}},nw=()=>{const r=rw(Fr.orThrow(1));return{withLock:r.withPermit,[Symbol.dispose]:r[Symbol.dispose]}},iw=r=>e=>{let t=!1;const n=E=>t?null:g.getConsumer(E),o=sw({...r,getSyncOwner:n})(e);if(!o.ok)return o;const l=o.value,g=Yb({createResource:E=>{const k=Ou(E);return r.console.log("[sync]","createWebSocket",{transportKey:k,url:E.url}),r.createWebSocket(E.url,{binaryType:"arraybuffer",onOpen:()=>{if(t)return;const x=g.getResource(k);if(!x)return;const F=g.getConsumersForResource(k);r.console.log("[sync]","onOpen",{transportKey:k,ownerIds:F});for(const H of F){const J=Bh({storage:l})(H,Uo.Subscribe);J&&(r.console.log("[sync]","send",{message:J}),x.send(J))}},onClose:x=>{r.console.log("[sync]","onClose",{transportKey:k,code:x.code,reason:x.reason,wasClean:x.wasClean})},onError:x=>{r.console.warn("[sync]","onError",{transportKey:k,error:x})},onMessage:x=>{if(t||!(x instanceof ArrayBuffer))return;const F=g.getResource(k);if(!F)return;const H=new Uint8Array(x);r.console.log("[sync]","onMessage",{transportKey:k,message:H}),Wb({storage:l})(H,{getWriteKey:J=>{var Y;return((Y=n(J))==null?void 0:Y.writeKey)??null}}).then(J=>{if(!J.ok){e.onError(J.error);return}switch(J.value.type){case"response":F.send(J.value.message);break}}).catch(J=>{e.onError(As(J))})}})},getResourceKey:Ou,getConsumerId:E=>E.id,disposalDelay:e.disposalDelayMs??100,onConsumerAdded:(E,k)=>{if(r.console.log("[sync]","onConsumerAdded",{ownerId:E.id,isOpen:k.isOpen()}),!k.isOpen())return;const x=Bh({storage:l})(E.id,Uo.Subscribe);x&&k.send(x)},onConsumerRemoved:(E,k)=>{r.console.log("[sync]","onConsumerRemoved",{ownerId:E.id,isOpen:k.isOpen()});const x=Fb(E.id);k.send(x)}});return de({useOwner:(E,k)=>{if(t){r.console.warn("[sync]","useOwner called on disposed Sync instance",{owner:k});return}r.console.log("[sync]","useOwner",{use:E,owner:k});const x=k.transports??e.transports;if(E)g.addConsumer(k,x);else{const F=g.removeConsumer(k,x);F.ok||r.console.warn("[sync]","Failed to remove consumer",{transports:x,ownerId:k.id,error:F.error})}},applyChanges:E=>{r.console.log("[sync]","applyChanges",{changes:E});let k=r.clock.get();const x=new Map;for(const F of E){const H=cb(r)(k);if(!H.ok)return H;k=H.value;const{ownerId:J=e.appOwner.id,...Y}=F,ve={timestamp:k,change:Y},ke=x.get(J);ke?ke.push(ve):x.set(J,[ve])}for(const[F,H]of x){const J=Gh({...r,storage:l})(F,H);if(!J.ok)return J;const Y=n(F);if(!(Y!=null&&Y.writeKey))continue;const ve=Lb(r)({id:Y.id,encryptionKey:Y.encryptionKey,writeKey:Y.writeKey},H),ke=Y.transports??e.transports;for(const $e of ke){const Re=Ou($e),Le=g.getResource(Re);Le&&Le.isOpen()&&(r.console.log("[sync]","send",{transportKey:Re,message:ve}),Le.send(ve))}}return r.clock.save(k)},[Symbol.dispose]:()=>{t||(t=!0,g[Symbol.dispose]())}})},Iu=r=>(e=lb(r))=>{let t=e;return{get:()=>t,save:n=>{t=n;const o=r.sqlite.exec(We.prepared`
          update evolu_config
          set "clock" = ${Xi(n)};
        `);return o.ok?de():o}}},sw=r=>e=>{const t=_b(r)({onStorageError:e.onError,isOwnerWithinQuota:Cy}),n=nw(),o={...t,validateWriteKey:vf,setWriteKey:vf,writeMessages:async(l,h)=>{const g=Wa(l),S=await n.withLock(async()=>{const E=r.getSyncOwner(g);if(!E)return de(!0);const k=[];for(const F of h){const H=jb(r)(F,E.encryptionKey);if(!H.ok)return H;k.push({timestamp:F.timestamp,change:H.value})}const x=r.sqlite.transaction(()=>{let F=r.clock.get();for(const H of k){const J=ub(r)(F,H.timestamp);if(!J.ok)return J;F=J.value}if(At(k)){const H=Gh({...r,storage:o})(E.id,k);if(!H.ok)return H}return r.clock.save(F)});return x.ok?de(!0):x})();return S.ok?(e.onReceive(),de()):(S.error.type!=="AbortError"&&e.onError(S.error),Se({type:"StorageWriteError",ownerId:g}))},readDbChange:(l,h)=>{const g=r.getSyncOwner(Wa(l));if(!g)return null;const S=r.sqlite.exec(We`
          select "table", "id", "column", "value"
          from evolu_history
          where "ownerId" = ${l} and "timestamp" = ${h}
          union all
          select "table", "id", "column", "value"
          from evolu_message_quarantine
          where "ownerId" = ${l} and "timestamp" = ${h};
        `);if(!S.ok)return e.onError(S.error),null;const{rows:E}=S.value;Fl(E,"Every timestamp must have rows");const k=Ri(E),x=rc();let F=!1,H=null;for(const Y of E)switch(Y.column){case"createdAt":F=!0;break;case"updatedAt":F=!1;break;case"isDeleted":Sf.is(Y.value)&&(H=zy(Y.value));break;default:x[Y.column]=Y.value}const J={timestamp:Qs(h),change:Wh.orThrow({table:k.table,id:Ta(k.id),values:x,isInsert:F,isDelete:H})};return Qh(r)(J,g.encryptionKey)}};return de(o)},Ou=r=>`${r.type}:${r.url}`,Jh=(r,e)=>{let t=Qd(r.values);return t=tr(t,[r.isInsert?"createdAt":"updatedAt",e]),r.isDelete!=null&&(t=tr(t,["isDeleted",Qy(r.isDelete)])),t},ow=r=>e=>{if(e.isDelete){const t=r.sqlite.exec(We`
        delete from ${We.identifier(e.table)}
        where id = ${e.id};
      `);if(!t.ok)return t}else{const t=r.appOwner.id,n=Jh(e,r.time.nowIso());for(const[o,l]of n){const h=r.sqlite.exec(We.prepared`
          insert into ${We.identifier(e.table)}
            ("ownerId", "id", ${We.identifier(o)})
          values (${t}, ${e.id}, ${l})
          on conflict ("ownerId", "id") do update
            set ${We.identifier(o)} = ${l};
        `);if(!h.ok)return h}}return de()},Gh=r=>(e,t)=>{const n=Fa(e),o=Tb(r)(n,Xi(Ri(t).timestamp));if(!o.ok)return o;let{firstTimestamp:l,lastTimestamp:h}=o.value;for(const{timestamp:g,change:S}of t){const E=Jh(S,fb(g)),k=Oa(S.id),x=Xi(g);for(const[J,Y]of E)if(Xh(r)(S.table,J,Y)){const ve=Yh(r)(n,e,S.table,k,S.id,J,Y,x);if(!ve.ok)return ve}else{const ve=r.sqlite.exec(We.prepared`
            insert into evolu_message_quarantine
              ("ownerId", "timestamp", "table", "id", "column", "value")
            values
              (
                ${n},
                ${x},
                ${S.table},
                ${k},
                ${J},
                ${Y}
              )
            on conflict do nothing;
          `);if(!ve.ok)return ve}let F;[F,l,h]=gb(x,l,h);const H=r.storage.insertTimestamp(n,x,F);if(!H.ok)return H}return Cb(r)(n,1,l,h)},aw=mu.difference(new Set(["ownerId"])),Xh=r=>(e,t,n)=>{const o=zd(r.dbSchema.tables,e);return o!=null&&(aw.has(t)||o.has(t))},Yh=r=>(e,t,n,o,l,h,g,S)=>{const E=r.sqlite.exec(We.prepared`
      with
        existingTimestamp as (
          select 1
          from evolu_history
          where
            "ownerId" = ${e}
            and "table" = ${n}
            and "id" = ${o}
            and "column" = ${h}
            and "timestamp" >= ${S}
          limit 1
        )
      insert into ${We.identifier(n)}
        ("ownerId", "id", ${We.identifier(h)})
      select ${t}, ${l}, ${g}
      where not exists (select 1 from existingTimestamp)
      on conflict ("ownerId", "id") do update
        set ${We.identifier(h)} = ${g}
        where not exists (select 1 from existingTimestamp);
    `);if(!E.ok)return E;{const k=r.sqlite.exec(We.prepared`
        insert into evolu_history
          ("ownerId", "table", "id", "column", "value", "timestamp")
        values
          (
            ${e},
            ${n},
            ${o},
            ${h},
            ${g},
            ${S}
          )
        on conflict do nothing;
      `);if(!k.ok)return k}return de()},lw=r=>()=>{const e=r.sqlite.exec(We`
      select "ownerId", "timestamp", "table", "id", "column", "value"
      from evolu_message_quarantine;
    `);if(!e.ok)return e;for(const t of e.value.rows){if(!Xh(r)(t.table,t.column,t.value))continue;const n=Yh(r)(t.ownerId,Wa(t.ownerId),t.table,t.id,Ta(t.id),t.column,t.value,t.timestamp);if(!n.ok)return n;{const o=r.sqlite.exec(We`
          delete from evolu_message_quarantine
          where
            "ownerId" = ${t.ownerId}
            and "timestamp" = ${t.timestamp}
            and "table" = ${t.table}
            and "id" = ${t.id}
            and "column" = ${t.column};
        `);if(!o.ok)return o}}return de()};f_.orThrow("Evolu");const cw=r=>Hy({init:async(e,t)=>{r.console.enabled=e.config.enableLogging??!1;const n=await uw(r,e,t);return n.ok?n.value:(t({type:"onError",error:n.error}),null)},handlers:fw}),uw=async(r,e,t)=>{const n=await Fy(r)(e.config.name,{memory:e.config.inMemory??!1,encryptionKey:e.config.encryptionKey??void 0});if(!n.ok)return n;const o={...r,sqlite:n.value};return o.sqlite.transaction(()=>{const l=_u(o)();if(!l.ok)return l;const h="evolu_version"in l.value.tables;let g,S;if(h){const k=o.sqlite.exec(We`select protocolVersion from evolu_version limit 1;`);if(!k.ok)return k;const x=o.sqlite.exec(We`
        select
          clock,
          appOwnerId,
          appOwnerEncryptionKey,
          appOwnerWriteKey,
          appOwnerMnemonic
        from evolu_config
        limit 1;
      `);if(!x.ok)return x;Fl(x.value.rows);const F=Ri(x.value.rows);g={type:"AppOwner",id:F.appOwnerId,encryptionKey:F.appOwnerEncryptionKey,writeKey:F.appOwnerWriteKey,mnemonic:F.appOwnerMnemonic},S=Iu(o)(Qs(F.clock))}else{g=e.config.externalAppOwner??Ef(Yy(r)),S=Iu(o)();const k=Zh(o)(g,S.get());if(!k.ok)return k}{const k=yu(o)(e.dbSchema,l.value);if(!k.ok)return k}{const k=dw(o);if(!k.ok)return k}const E=iw({...o,clock:S,symmetricCrypto:Ey(r),timestampConfig:e.config,dbSchema:e.dbSchema})({appOwner:g,transports:e.config.transports,onError:k=>{t({type:"onError",error:k})},onReceive:()=>{t({type:"refreshQueries"})}});if(!E.ok)return E;{const k=lw({...o,dbSchema:e.dbSchema})();if(!k.ok)return k}return E.value.useOwner(!0,g),de({...o,getQueryRowsCache:Gb(),postMessage:t,sync:E.value,appOwner:g})})},Zh=r=>(e,t)=>{for(const o of[We`
        create table evolu_version (
          "protocolVersion" integer not null
        )
        strict;
      `,We`
        insert into evolu_version ("protocolVersion")
        values (${pl});
      `,We`
        create table evolu_config (
          "clock" blob not null,
          "appOwnerId" text not null,
          "appOwnerEncryptionKey" blob not null,
          "appOwnerWriteKey" blob not null,
          "appOwnerMnemonic" text
        )
        strict;
      `,We`
        insert into evolu_config
          (
            "clock",
            "appOwnerId",
            "appOwnerEncryptionKey",
            "appOwnerWriteKey",
            "appOwnerMnemonic"
          )
        values
          (
            ${Xi(t)},
            ${e.id},
            ${e.encryptionKey},
            ${e.writeKey},
            ${e.mnemonic??null}
          );
      `,We`
        create table evolu_history (
          "ownerId" blob not null,
          "table" text not null,
          "id" blob not null,
          "column" text not null,
          "timestamp" blob not null,
          "value" any
        )
        strict;
      `,We`
        create index evolu_history_ownerId_timestamp on evolu_history (
          "ownerId",
          "timestamp"
        );
      `,We`
        create unique index evolu_history_ownerId_table_id_column_timestampDesc on evolu_history (
          "ownerId",
          "table",
          "id",
          "column",
          "timestamp" desc
        );
      `]){const l=r.sqlite.exec(o);if(!l.ok)return l}const n=yb(r);return n.ok?de():n},dw=r=>{const e=r.sqlite.exec(We`
    create table if not exists evolu_message_quarantine (
      "ownerId" blob not null,
      "timestamp" blob not null,
      "table" text not null,
      "id" blob not null,
      "column" text not null,
      "value" any,
      primary key ("ownerId", "timestamp", "table", "id", "column")
    )
    strict;
  `);return e.ok?de():e},fw={getAppOwner:r=>()=>{r.postMessage({type:"onGetAppOwner",appOwner:r.appOwner})},mutate:r=>e=>{const t=r.sqlite.transaction(()=>{const n=[];for(const l of e.changes)if(l.table.startsWith("_")){const g=ow(r)(l);if(!g.ok)return g}else n.push(l);if(Et(n)){const l=r.sync.applyChanges(n);if(!l.ok)return l}const o=Vh(r)(e.tabId,e.subscribedQueries);return o.ok?(r.postMessage({type:"onQueryPatches",tabId:e.tabId,queryPatches:o.value,onCompleteIds:e.onCompleteIds}),r.postMessage({type:"refreshQueries",tabId:e.tabId}),de()):o});if(!t.ok){r.postMessage({type:"onError",error:t.error});return}},query:r=>e=>{const t=Vh(r)(e.tabId,e.queries);if(!t.ok){r.postMessage({type:"onError",error:t.error});return}r.postMessage({type:"onQueryPatches",tabId:e.tabId,queryPatches:t.value,onCompleteIds:[]})},reset:r=>e=>{const t=r.sqlite.transaction(()=>{const n=_u(r)();if(!n.ok)return n;for(const o in n.value.tables){const l=r.sqlite.exec(We`
          drop table ${We.identifier(o)};
        `);if(!l.ok)return l}if(e.restore){const o=yu(r)(e.restore.dbSchema);if(!o.ok)return o;const l=eg(e.restore.mnemonic),h=Ef(l),g=Iu(r)();return Zh(r)(h,g.get())}return de()});if(!t.ok){r.postMessage({type:"onError",error:t.error});return}r.postMessage({type:"onReset",onCompleteId:e.onCompleteId,reload:e.reload})},ensureDbSchema:r=>e=>{const t=r.sqlite.transaction(()=>yu(r)(e.dbSchema));if(!t.ok){r.postMessage({type:"onError",error:t.error});return}},export:r=>e=>{const t=r.sqlite.export();if(!t.ok){r.postMessage({type:"onError",error:t.error});return}r.postMessage({type:"onExport",onCompleteId:e.onCompleteId,file:t.value})},useOwner:r=>e=>{r.sync.useOwner(e.use,e.owner)}},hw=()=>({next:()=>Math.random()}),pw=(r,{protocols:e,binaryType:t,onOpen:n,onClose:o,onMessage:l,onError:h,retryOptions:g,WebSocketConstructor:S=globalThis.WebSocket}={})=>{let E=!1;const k=new AbortController,x={retries:E_};let F=null;const H=()=>{F&&(F.onopen=null,F.onclose=null,F.onmessage=null,F.onerror=null,F.readyState!==F.CLOSING&&F.readyState!==F.CLOSED&&F.close(),F=null)};let J=null;return tw({...x,...g},()=>new Promise(Y=>{J=()=>{Y(de())},E&&J(),H(),F=new S(r,e),t&&(F.binaryType=t);let ve=!1;F.onopen=()=>{ve=!0,n==null||n()},F.onerror=ke=>{const $e=ve?{type:"WebSocketConnectionError",event:ke}:{type:"WebSocketConnectError",event:ke};h==null||h($e),$e.type==="WebSocketConnectError"&&Y(Se($e))},F.onclose=ke=>{o==null||o(ke),Y(Se({type:"WebSocketConnectionCloseError",event:ke}))},F.onmessage=ke=>{l==null||l(ke.data)}}))(k).then(Y=>{Y.ok||Y.error.type==="AbortError"||h==null||h(Y.error)}),{send:Y=>!F||F.readyState===F.CONNECTING?Se({type:"WebSocketSendError"}):(F.send(Y),de()),getReadyState:()=>F?mw[F.readyState]:"connecting",isOpen:()=>F?F.readyState===F.OPEN:!1,[Symbol.dispose](){E||(E=!0,k.abort(),H(),J==null||J())}}},mw={[WebSocket.CONNECTING]:"connecting",[WebSocket.OPEN]:"open",[WebSocket.CLOSING]:"closing",[WebSocket.CLOSED]:"closed"};var Tu=async function(r={}){var _p;var e,t=r,n=typeof window=="object",o=typeof WorkerGlobalScope<"u";typeof process=="object"&&((_p=process.versions)!=null&&_p.node)&&process.type!="renderer";const l=globalThis.sqlite3InitModuleState||Object.assign(Object.create(null),{debugModule:()=>{}});delete globalThis.sqlite3InitModuleState,l.debugModule("globalThis.location =",globalThis.location);var h="./this.program",g=(i,a)=>{throw a},S=self.location.href,E="";function k(i){return t.locateFile?t.locateFile(i,E):E+i}var x,F;if(n||o){try{E=new URL(".",S).href}catch{}o&&(F=i=>{var a=new XMLHttpRequest;return a.open("GET",i,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),x=async i=>{var a=await fetch(i,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}var H=console.log.bind(console),J=console.error.bind(console),Y,ve=!1,ke,$e,Re,Le,gt,wt,Fe,ze,Qe,ut=!1;function ht(){var i=Re.buffer;t.HEAP8=Le=new Int8Array(i),t.HEAP16=wt=new Int16Array(i),t.HEAPU8=gt=new Uint8Array(i),t.HEAPU16=new Uint16Array(i),t.HEAP32=Fe=new Int32Array(i),t.HEAPU32=ze=new Uint32Array(i),t.HEAP64=Qe=new BigInt64Array(i),t.HEAPU64=new BigUint64Array(i)}function dt(){if(t.wasmMemory)Re=t.wasmMemory;else{var i=t.INITIAL_MEMORY||16777216;Re=new WebAssembly.Memory({initial:i/65536,maximum:32768})}ht()}function W(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)xw(t.preRun.shift());rp(ip)}function ye(){ut=!0,!t.noFSInit&&!_.initialized&&_.init(),yo.__wasm_call_ctors(),_.ignorePermissions=!1}function ce(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Nw(t.postRun.shift());rp(np)}var ie=0,se=null;function Oe(i){var a;ie++,(a=t.monitorRunDependencies)==null||a.call(t,ie)}function pe(i){var d;if(ie--,(d=t.monitorRunDependencies)==null||d.call(t,ie),ie==0&&se){var a=se;se=null,a()}}function Ee(i){var d;(d=t.onAbort)==null||d.call(t,i),i="Aborted("+i+")",J(i),ve=!0,i+=". Build with -sASSERTIONS for more info.";var a=new WebAssembly.RuntimeError(i);throw $e==null||$e(a),a}var Ve;function He(){return t.locateFile?k("sqlite3.wasm"):new URL("/assets/sqlite3-B7imZ2XV.wasm",self.location.href).href}function Kt(i){if(i==Ve&&Y)return new Uint8Array(Y);if(F)return F(i);throw"both async and sync fetching of the wasm failed"}async function wr(i){if(!Y)try{var a=await x(i);return new Uint8Array(a)}catch{}return Kt(i)}async function Lr(i,a){try{var d=await wr(i),c=await WebAssembly.instantiate(d,a);return c}catch(u){J(`failed to asynchronously prepare wasm: ${u}`),Ee(u)}}async function Pi(i,a,d){if(!i&&typeof WebAssembly.instantiateStreaming=="function")try{var c=fetch(a,{credentials:"same-origin"}),u=await WebAssembly.instantiateStreaming(c,d);return u}catch(p){J(`wasm streaming compile failed: ${p}`),J("falling back to ArrayBuffer instantiation")}return Lr(a,d)}function Li(){return{env:mp,wasi_snapshot_preview1:mp}}async function Fi(){function i(p,O){return yo=p.exports,IN(yo),pe(),yo}Oe();function a(p){return i(p.instance)}var d=Li();if(t.instantiateWasm)return new Promise((p,O)=>{t.instantiateWasm(d,(C,ee)=>{p(i(C))})});Ve??(Ve=He());var c=await Pi(Y,Ve,d),u=a(c);return u}class Wi{constructor(a){Ce(this,"name","ExitStatus");this.message=`Program terminated with exit(${a})`,this.status=a}}var rp=i=>{for(;i.length>0;)i.shift()(t)},np=[],Nw=i=>np.push(i),ip=[],xw=i=>ip.push(i),sp=!0,kt={isAbs:i=>i.charAt(0)==="/",splitPath:i=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(i).slice(1)},normalizeArray:(i,a)=>{for(var d=0,c=i.length-1;c>=0;c--){var u=i[c];u==="."?i.splice(c,1):u===".."?(i.splice(c,1),d++):d&&(i.splice(c,1),d--)}if(a)for(;d;d--)i.unshift("..");return i},normalize:i=>{var a=kt.isAbs(i),d=i.slice(-1)==="/";return i=kt.normalizeArray(i.split("/").filter(c=>!!c),!a).join("/"),!i&&!a&&(i="."),i&&d&&(i+="/"),(a?"/":"")+i},dirname:i=>{var a=kt.splitPath(i),d=a[0],c=a[1];return!d&&!c?".":(c&&(c=c.slice(0,-1)),d+c)},basename:i=>i&&i.match(/([^\/]+|\/)\/*$/)[1],join:(...i)=>kt.normalize(i.join("/")),join2:(i,a)=>kt.normalize(i+"/"+a)},vw=()=>i=>crypto.getRandomValues(i),Fu=i=>{(Fu=vw())(i)},mo={resolve:(...i)=>{for(var a="",d=!1,c=i.length-1;c>=-1&&!d;c--){var u=c>=0?i[c]:_.cwd();if(typeof u!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!u)return"";a=u+"/"+a,d=kt.isAbs(u)}return a=kt.normalizeArray(a.split("/").filter(p=>!!p),!d).join("/"),(d?"/":"")+a||"."},relative:(i,a)=>{i=mo.resolve(i).slice(1),a=mo.resolve(a).slice(1);function d(re){for(var _e=0;_e<re.length&&re[_e]==="";_e++);for(var xe=re.length-1;xe>=0&&re[xe]==="";xe--);return _e>xe?[]:re.slice(_e,xe-_e+1)}for(var c=d(i.split("/")),u=d(a.split("/")),p=Math.min(c.length,u.length),O=p,C=0;C<p;C++)if(c[C]!==u[C]){O=C;break}for(var ee=[],C=O;C<c.length;C++)ee.push("..");return ee=ee.concat(u.slice(O)),ee.join("/")}},op=new TextDecoder,oa=(i,a=0,d=NaN)=>{for(var c=a+d,u=a;i[u]&&!(u>=c);)++u;return op.decode(i.buffer?i.subarray(a,u):new Uint8Array(i.slice(a,u)))},Wu=[],Ol=i=>{for(var a=0,d=0;d<i.length;++d){var c=i.charCodeAt(d);c<=127?a++:c<=2047?a+=2:c>=55296&&c<=57343?(a+=4,++d):a+=3}return a},ap=(i,a,d,c)=>{if(!(c>0))return 0;for(var u=d,p=d+c-1,O=0;O<i.length;++O){var C=i.codePointAt(O);if(C<=127){if(d>=p)break;a[d++]=C}else if(C<=2047){if(d+1>=p)break;a[d++]=192|C>>6,a[d++]=128|C&63}else if(C<=65535){if(d+2>=p)break;a[d++]=224|C>>12,a[d++]=128|C>>6&63,a[d++]=128|C&63}else{if(d+3>=p)break;a[d++]=240|C>>18,a[d++]=128|C>>12&63,a[d++]=128|C>>6&63,a[d++]=128|C&63,O++}}return a[d]=0,d-u},Ru=(i,a,d)=>{var c=Ol(i)+1,u=new Array(c),p=ap(i,u,0,u.length);return u.length=p,u},qw=()=>{if(!Wu.length){var i=null;if(typeof window<"u"&&typeof window.prompt=="function"&&(i=window.prompt("Input: "),i!==null&&(i+=`
`)),!i)return null;Wu=Ru(i)}return Wu.shift()},gs={ttys:[],init(){},shutdown(){},register(i,a){gs.ttys[i]={input:[],output:[],ops:a},_.registerDevice(i,gs.stream_ops)},stream_ops:{open(i){var a=gs.ttys[i.node.rdev];if(!a)throw new _.ErrnoError(43);i.tty=a,i.seekable=!1},close(i){i.tty.ops.fsync(i.tty)},fsync(i){i.tty.ops.fsync(i.tty)},read(i,a,d,c,u){if(!i.tty||!i.tty.ops.get_char)throw new _.ErrnoError(60);for(var p=0,O=0;O<c;O++){var C;try{C=i.tty.ops.get_char(i.tty)}catch{throw new _.ErrnoError(29)}if(C===void 0&&p===0)throw new _.ErrnoError(6);if(C==null)break;p++,a[d+O]=C}return p&&(i.node.atime=Date.now()),p},write(i,a,d,c,u){if(!i.tty||!i.tty.ops.put_char)throw new _.ErrnoError(60);try{for(var p=0;p<c;p++)i.tty.ops.put_char(i.tty,a[d+p])}catch{throw new _.ErrnoError(29)}return c&&(i.node.mtime=i.node.ctime=Date.now()),p}},default_tty_ops:{get_char(i){return qw()},put_char(i,a){a===null||a===10?(H(oa(i.output)),i.output=[]):a!=0&&i.output.push(a)},fsync(i){var a;((a=i.output)==null?void 0:a.length)>0&&(H(oa(i.output)),i.output=[])},ioctl_tcgets(i){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(i,a,d){return 0},ioctl_tiocgwinsz(i){return[24,80]}},default_tty1_ops:{put_char(i,a){a===null||a===10?(J(oa(i.output)),i.output=[]):a!=0&&i.output.push(a)},fsync(i){var a;((a=i.output)==null?void 0:a.length)>0&&(J(oa(i.output)),i.output=[])}}},Sw=(i,a)=>gt.fill(0,i,i+a),lp=(i,a)=>Math.ceil(i/a)*a,cp=i=>{i=lp(i,65536);var a=pp(65536,i);return a&&Sw(a,i),a},et={ops_table:null,mount(i){return et.createNode(null,"/",16895,0)},createNode(i,a,d,c){if(_.isBlkdev(d)||_.isFIFO(d))throw new _.ErrnoError(63);et.ops_table||(et.ops_table={dir:{node:{getattr:et.node_ops.getattr,setattr:et.node_ops.setattr,lookup:et.node_ops.lookup,mknod:et.node_ops.mknod,rename:et.node_ops.rename,unlink:et.node_ops.unlink,rmdir:et.node_ops.rmdir,readdir:et.node_ops.readdir,symlink:et.node_ops.symlink},stream:{llseek:et.stream_ops.llseek}},file:{node:{getattr:et.node_ops.getattr,setattr:et.node_ops.setattr},stream:{llseek:et.stream_ops.llseek,read:et.stream_ops.read,write:et.stream_ops.write,mmap:et.stream_ops.mmap,msync:et.stream_ops.msync}},link:{node:{getattr:et.node_ops.getattr,setattr:et.node_ops.setattr,readlink:et.node_ops.readlink},stream:{}},chrdev:{node:{getattr:et.node_ops.getattr,setattr:et.node_ops.setattr},stream:_.chrdev_stream_ops}});var u=_.createNode(i,a,d,c);return _.isDir(u.mode)?(u.node_ops=et.ops_table.dir.node,u.stream_ops=et.ops_table.dir.stream,u.contents={}):_.isFile(u.mode)?(u.node_ops=et.ops_table.file.node,u.stream_ops=et.ops_table.file.stream,u.usedBytes=0,u.contents=null):_.isLink(u.mode)?(u.node_ops=et.ops_table.link.node,u.stream_ops=et.ops_table.link.stream):_.isChrdev(u.mode)&&(u.node_ops=et.ops_table.chrdev.node,u.stream_ops=et.ops_table.chrdev.stream),u.atime=u.mtime=u.ctime=Date.now(),i&&(i.contents[a]=u,i.atime=i.mtime=i.ctime=u.atime),u},getFileDataAsTypedArray(i){return i.contents?i.contents.subarray?i.contents.subarray(0,i.usedBytes):new Uint8Array(i.contents):new Uint8Array(0)},expandFileStorage(i,a){var d=i.contents?i.contents.length:0;if(!(d>=a)){var c=1024*1024;a=Math.max(a,d*(d<c?2:1.125)>>>0),d!=0&&(a=Math.max(a,256));var u=i.contents;i.contents=new Uint8Array(a),i.usedBytes>0&&i.contents.set(u.subarray(0,i.usedBytes),0)}},resizeFileStorage(i,a){if(i.usedBytes!=a)if(a==0)i.contents=null,i.usedBytes=0;else{var d=i.contents;i.contents=new Uint8Array(a),d&&i.contents.set(d.subarray(0,Math.min(a,i.usedBytes))),i.usedBytes=a}},node_ops:{getattr(i){var a={};return a.dev=_.isChrdev(i.mode)?i.id:1,a.ino=i.id,a.mode=i.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=i.rdev,_.isDir(i.mode)?a.size=4096:_.isFile(i.mode)?a.size=i.usedBytes:_.isLink(i.mode)?a.size=i.link.length:a.size=0,a.atime=new Date(i.atime),a.mtime=new Date(i.mtime),a.ctime=new Date(i.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(i,a){for(const d of["mode","atime","mtime","ctime"])a[d]!=null&&(i[d]=a[d]);a.size!==void 0&&et.resizeFileStorage(i,a.size)},lookup(i,a){throw et.doesNotExistError},mknod(i,a,d,c){return et.createNode(i,a,d,c)},rename(i,a,d){var c;try{c=_.lookupNode(a,d)}catch{}if(c){if(_.isDir(i.mode))for(var u in c.contents)throw new _.ErrnoError(55);_.hashRemoveNode(c)}delete i.parent.contents[i.name],a.contents[d]=i,i.name=d,a.ctime=a.mtime=i.parent.ctime=i.parent.mtime=Date.now()},unlink(i,a){delete i.contents[a],i.ctime=i.mtime=Date.now()},rmdir(i,a){var d=_.lookupNode(i,a);for(var c in d.contents)throw new _.ErrnoError(55);delete i.contents[a],i.ctime=i.mtime=Date.now()},readdir(i){return[".","..",...Object.keys(i.contents)]},symlink(i,a,d){var c=et.createNode(i,a,41471,0);return c.link=d,c},readlink(i){if(!_.isLink(i.mode))throw new _.ErrnoError(28);return i.link}},stream_ops:{read(i,a,d,c,u){var p=i.node.contents;if(u>=i.node.usedBytes)return 0;var O=Math.min(i.node.usedBytes-u,c);if(O>8&&p.subarray)a.set(p.subarray(u,u+O),d);else for(var C=0;C<O;C++)a[d+C]=p[u+C];return O},write(i,a,d,c,u,p){if(a.buffer===Le.buffer&&(p=!1),!c)return 0;var O=i.node;if(O.mtime=O.ctime=Date.now(),a.subarray&&(!O.contents||O.contents.subarray)){if(p)return O.contents=a.subarray(d,d+c),O.usedBytes=c,c;if(O.usedBytes===0&&u===0)return O.contents=a.slice(d,d+c),O.usedBytes=c,c;if(u+c<=O.usedBytes)return O.contents.set(a.subarray(d,d+c),u),c}if(et.expandFileStorage(O,u+c),O.contents.subarray&&a.subarray)O.contents.set(a.subarray(d,d+c),u);else for(var C=0;C<c;C++)O.contents[u+C]=a[d+C];return O.usedBytes=Math.max(O.usedBytes,u+c),c},llseek(i,a,d){var c=a;if(d===1?c+=i.position:d===2&&_.isFile(i.node.mode)&&(c+=i.node.usedBytes),c<0)throw new _.ErrnoError(28);return c},mmap(i,a,d,c,u){if(!_.isFile(i.node.mode))throw new _.ErrnoError(43);var p,O,C=i.node.contents;if(!(u&2)&&C&&C.buffer===Le.buffer)O=!1,p=C.byteOffset;else{if(O=!0,p=cp(a),!p)throw new _.ErrnoError(48);C&&((d>0||d+a<C.length)&&(C.subarray?C=C.subarray(d,d+a):C=Array.prototype.slice.call(C,d,d+a)),Le.set(C,p))}return{ptr:p,allocated:O}},msync(i,a,d,c,u){return et.stream_ops.write(i,a,0,c,d,!1),0}}},kw=async i=>{var a=await x(i);return new Uint8Array(a)},Ew=(...i)=>_.createDataFile(...i),up=[],Aw=(i,a,d,c)=>{typeof Browser<"u"&&Browser.init();var u=!1;return up.forEach(p=>{u||p.canHandle(a)&&(p.handle(i,a,d,c),u=!0)}),u},Iw=(i,a,d,c,u,p,O,C,ee,re)=>{var _e=a?mo.resolve(kt.join2(i,a)):i;function xe(X){function $(me){re==null||re(),C||Ew(i,a,me,c,u,ee),p==null||p(),pe()}Aw(X,_e,$,()=>{O==null||O(),pe()})||$(X)}Oe(),typeof d=="string"?kw(d).then(xe,O):xe(d)},Ow=i=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},d=a[i];if(typeof d>"u")throw new Error(`Unknown file open mode: ${i}`);return d},Du=(i,a)=>{var d=0;return i&&(d|=365),a&&(d|=146),d},_={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{constructor(i){Ce(this,"name","ErrnoError");this.errno=i}},FSStream:class{constructor(){Ce(this,"shared",{})}get object(){return this.node}set object(i){this.node=i}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(i){this.shared.flags=i}get position(){return this.shared.position}set position(i){this.shared.position=i}},FSNode:class{constructor(i,a,d,c){Ce(this,"node_ops",{});Ce(this,"stream_ops",{});Ce(this,"readMode",365);Ce(this,"writeMode",146);Ce(this,"mounted",null);i||(i=this),this.parent=i,this.mount=i.mount,this.id=_.nextInode++,this.name=a,this.mode=d,this.rdev=c,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(i){i?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(i){i?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return _.isDir(this.mode)}get isDevice(){return _.isChrdev(this.mode)}},lookupPath(i,a={}){if(!i)throw new _.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),kt.isAbs(i)||(i=_.cwd()+"/"+i);e:for(var d=0;d<40;d++){for(var c=i.split("/").filter(re=>!!re),u=_.root,p="/",O=0;O<c.length;O++){var C=O===c.length-1;if(C&&a.parent)break;if(c[O]!=="."){if(c[O]===".."){if(p=kt.dirname(p),_.isRoot(u)){i=p+"/"+c.slice(O+1).join("/");continue e}else u=u.parent;continue}p=kt.join2(p,c[O]);try{u=_.lookupNode(u,c[O])}catch(re){if((re==null?void 0:re.errno)===44&&C&&a.noent_okay)return{path:p};throw re}if(_.isMountpoint(u)&&(!C||a.follow_mount)&&(u=u.mounted.root),_.isLink(u.mode)&&(!C||a.follow)){if(!u.node_ops.readlink)throw new _.ErrnoError(52);var ee=u.node_ops.readlink(u);kt.isAbs(ee)||(ee=kt.dirname(p)+"/"+ee),i=ee+"/"+c.slice(O+1).join("/");continue e}}}return{path:p,node:u}}throw new _.ErrnoError(32)},getPath(i){for(var a;;){if(_.isRoot(i)){var d=i.mount.mountpoint;return a?d[d.length-1]!=="/"?`${d}/${a}`:d+a:d}a=a?`${i.name}/${a}`:i.name,i=i.parent}},hashName(i,a){for(var d=0,c=0;c<a.length;c++)d=(d<<5)-d+a.charCodeAt(c)|0;return(i+d>>>0)%_.nameTable.length},hashAddNode(i){var a=_.hashName(i.parent.id,i.name);i.name_next=_.nameTable[a],_.nameTable[a]=i},hashRemoveNode(i){var a=_.hashName(i.parent.id,i.name);if(_.nameTable[a]===i)_.nameTable[a]=i.name_next;else for(var d=_.nameTable[a];d;){if(d.name_next===i){d.name_next=i.name_next;break}d=d.name_next}},lookupNode(i,a){var d=_.mayLookup(i);if(d)throw new _.ErrnoError(d);for(var c=_.hashName(i.id,a),u=_.nameTable[c];u;u=u.name_next){var p=u.name;if(u.parent.id===i.id&&p===a)return u}return _.lookup(i,a)},createNode(i,a,d,c){var u=new _.FSNode(i,a,d,c);return _.hashAddNode(u),u},destroyNode(i){_.hashRemoveNode(i)},isRoot(i){return i===i.parent},isMountpoint(i){return!!i.mounted},isFile(i){return(i&61440)===32768},isDir(i){return(i&61440)===16384},isLink(i){return(i&61440)===40960},isChrdev(i){return(i&61440)===8192},isBlkdev(i){return(i&61440)===24576},isFIFO(i){return(i&61440)===4096},isSocket(i){return(i&49152)===49152},flagsToPermissionString(i){var a=["r","w","rw"][i&3];return i&512&&(a+="w"),a},nodePermissions(i,a){return _.ignorePermissions?0:a.includes("r")&&!(i.mode&292)||a.includes("w")&&!(i.mode&146)||a.includes("x")&&!(i.mode&73)?2:0},mayLookup(i){if(!_.isDir(i.mode))return 54;var a=_.nodePermissions(i,"x");return a||(i.node_ops.lookup?0:2)},mayCreate(i,a){if(!_.isDir(i.mode))return 54;try{var d=_.lookupNode(i,a);return 20}catch{}return _.nodePermissions(i,"wx")},mayDelete(i,a,d){var c;try{c=_.lookupNode(i,a)}catch(p){return p.errno}var u=_.nodePermissions(i,"wx");if(u)return u;if(d){if(!_.isDir(c.mode))return 54;if(_.isRoot(c)||_.getPath(c)===_.cwd())return 10}else if(_.isDir(c.mode))return 31;return 0},mayOpen(i,a){return i?_.isLink(i.mode)?32:_.isDir(i.mode)&&(_.flagsToPermissionString(a)!=="r"||a&576)?31:_.nodePermissions(i,_.flagsToPermissionString(a)):44},checkOpExists(i,a){if(!i)throw new _.ErrnoError(a);return i},MAX_OPEN_FDS:4096,nextfd(){for(var i=0;i<=_.MAX_OPEN_FDS;i++)if(!_.streams[i])return i;throw new _.ErrnoError(33)},getStreamChecked(i){var a=_.getStream(i);if(!a)throw new _.ErrnoError(8);return a},getStream:i=>_.streams[i],createStream(i,a=-1){return i=Object.assign(new _.FSStream,i),a==-1&&(a=_.nextfd()),i.fd=a,_.streams[a]=i,i},closeStream(i){_.streams[i]=null},dupStream(i,a=-1){var c,u;var d=_.createStream(i,a);return(u=(c=d.stream_ops)==null?void 0:c.dup)==null||u.call(c,d),d},doSetAttr(i,a,d){var c=i==null?void 0:i.stream_ops.setattr,u=c?i:a;c??(c=a.node_ops.setattr),_.checkOpExists(c,63),c(u,d)},chrdev_stream_ops:{open(i){var d,c;var a=_.getDevice(i.node.rdev);i.stream_ops=a.stream_ops,(c=(d=i.stream_ops).open)==null||c.call(d,i)},llseek(){throw new _.ErrnoError(70)}},major:i=>i>>8,minor:i=>i&255,makedev:(i,a)=>i<<8|a,registerDevice(i,a){_.devices[i]={stream_ops:a}},getDevice:i=>_.devices[i],getMounts(i){for(var a=[],d=[i];d.length;){var c=d.pop();a.push(c),d.push(...c.mounts)}return a},syncfs(i,a){typeof i=="function"&&(a=i,i=!1),_.syncFSRequests++,_.syncFSRequests>1&&J(`warning: ${_.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var d=_.getMounts(_.root.mount),c=0;function u(O){return _.syncFSRequests--,a(O)}function p(O){if(O)return p.errored?void 0:(p.errored=!0,u(O));++c>=d.length&&u(null)}d.forEach(O=>{if(!O.type.syncfs)return p(null);O.type.syncfs(O,i,p)})},mount(i,a,d){var c=d==="/",u=!d,p;if(c&&_.root)throw new _.ErrnoError(10);if(!c&&!u){var O=_.lookupPath(d,{follow_mount:!1});if(d=O.path,p=O.node,_.isMountpoint(p))throw new _.ErrnoError(10);if(!_.isDir(p.mode))throw new _.ErrnoError(54)}var C={type:i,opts:a,mountpoint:d,mounts:[]},ee=i.mount(C);return ee.mount=C,C.root=ee,c?_.root=ee:p&&(p.mounted=C,p.mount&&p.mount.mounts.push(C)),ee},unmount(i){var a=_.lookupPath(i,{follow_mount:!1});if(!_.isMountpoint(a.node))throw new _.ErrnoError(28);var d=a.node,c=d.mounted,u=_.getMounts(c);Object.keys(_.nameTable).forEach(O=>{for(var C=_.nameTable[O];C;){var ee=C.name_next;u.includes(C.mount)&&_.destroyNode(C),C=ee}}),d.mounted=null;var p=d.mount.mounts.indexOf(c);d.mount.mounts.splice(p,1)},lookup(i,a){return i.node_ops.lookup(i,a)},mknod(i,a,d){var c=_.lookupPath(i,{parent:!0}),u=c.node,p=kt.basename(i);if(!p)throw new _.ErrnoError(28);if(p==="."||p==="..")throw new _.ErrnoError(20);var O=_.mayCreate(u,p);if(O)throw new _.ErrnoError(O);if(!u.node_ops.mknod)throw new _.ErrnoError(63);return u.node_ops.mknod(u,p,a,d)},statfs(i){return _.statfsNode(_.lookupPath(i,{follow:!0}).node)},statfsStream(i){return _.statfsNode(i.node)},statfsNode(i){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:_.nextInode,ffree:_.nextInode-1,fsid:42,flags:2,namelen:255};return i.node_ops.statfs&&Object.assign(a,i.node_ops.statfs(i.mount.opts.root)),a},create(i,a=438){return a&=4095,a|=32768,_.mknod(i,a,0)},mkdir(i,a=511){return a&=1023,a|=16384,_.mknod(i,a,0)},mkdirTree(i,a){var d=i.split("/"),c="";for(var u of d)if(u){(c||kt.isAbs(i))&&(c+="/"),c+=u;try{_.mkdir(c,a)}catch(p){if(p.errno!=20)throw p}}},mkdev(i,a,d){return typeof d>"u"&&(d=a,a=438),a|=8192,_.mknod(i,a,d)},symlink(i,a){if(!mo.resolve(i))throw new _.ErrnoError(44);var d=_.lookupPath(a,{parent:!0}),c=d.node;if(!c)throw new _.ErrnoError(44);var u=kt.basename(a),p=_.mayCreate(c,u);if(p)throw new _.ErrnoError(p);if(!c.node_ops.symlink)throw new _.ErrnoError(63);return c.node_ops.symlink(c,u,i)},rename(i,a){var d=kt.dirname(i),c=kt.dirname(a),u=kt.basename(i),p=kt.basename(a),O,C,ee;if(O=_.lookupPath(i,{parent:!0}),C=O.node,O=_.lookupPath(a,{parent:!0}),ee=O.node,!C||!ee)throw new _.ErrnoError(44);if(C.mount!==ee.mount)throw new _.ErrnoError(75);var re=_.lookupNode(C,u),_e=mo.relative(i,c);if(_e.charAt(0)!==".")throw new _.ErrnoError(28);if(_e=mo.relative(a,d),_e.charAt(0)!==".")throw new _.ErrnoError(55);var xe;try{xe=_.lookupNode(ee,p)}catch{}if(re!==xe){var X=_.isDir(re.mode),$=_.mayDelete(C,u,X);if($)throw new _.ErrnoError($);if($=xe?_.mayDelete(ee,p,X):_.mayCreate(ee,p),$)throw new _.ErrnoError($);if(!C.node_ops.rename)throw new _.ErrnoError(63);if(_.isMountpoint(re)||xe&&_.isMountpoint(xe))throw new _.ErrnoError(10);if(ee!==C&&($=_.nodePermissions(C,"w"),$))throw new _.ErrnoError($);_.hashRemoveNode(re);try{C.node_ops.rename(re,ee,p),re.parent=ee}catch(me){throw me}finally{_.hashAddNode(re)}}},rmdir(i){var a=_.lookupPath(i,{parent:!0}),d=a.node,c=kt.basename(i),u=_.lookupNode(d,c),p=_.mayDelete(d,c,!0);if(p)throw new _.ErrnoError(p);if(!d.node_ops.rmdir)throw new _.ErrnoError(63);if(_.isMountpoint(u))throw new _.ErrnoError(10);d.node_ops.rmdir(d,c),_.destroyNode(u)},readdir(i){var a=_.lookupPath(i,{follow:!0}),d=a.node,c=_.checkOpExists(d.node_ops.readdir,54);return c(d)},unlink(i){var a=_.lookupPath(i,{parent:!0}),d=a.node;if(!d)throw new _.ErrnoError(44);var c=kt.basename(i),u=_.lookupNode(d,c),p=_.mayDelete(d,c,!1);if(p)throw new _.ErrnoError(p);if(!d.node_ops.unlink)throw new _.ErrnoError(63);if(_.isMountpoint(u))throw new _.ErrnoError(10);d.node_ops.unlink(d,c),_.destroyNode(u)},readlink(i){var a=_.lookupPath(i),d=a.node;if(!d)throw new _.ErrnoError(44);if(!d.node_ops.readlink)throw new _.ErrnoError(28);return d.node_ops.readlink(d)},stat(i,a){var d=_.lookupPath(i,{follow:!a}),c=d.node,u=_.checkOpExists(c.node_ops.getattr,63);return u(c)},fstat(i){var a=_.getStreamChecked(i),d=a.node,c=a.stream_ops.getattr,u=c?a:d;return c??(c=d.node_ops.getattr),_.checkOpExists(c,63),c(u)},lstat(i){return _.stat(i,!0)},doChmod(i,a,d,c){_.doSetAttr(i,a,{mode:d&4095|a.mode&-4096,ctime:Date.now(),dontFollow:c})},chmod(i,a,d){var c;if(typeof i=="string"){var u=_.lookupPath(i,{follow:!d});c=u.node}else c=i;_.doChmod(null,c,a,d)},lchmod(i,a){_.chmod(i,a,!0)},fchmod(i,a){var d=_.getStreamChecked(i);_.doChmod(d,d.node,a,!1)},doChown(i,a,d){_.doSetAttr(i,a,{timestamp:Date.now(),dontFollow:d})},chown(i,a,d,c){var u;if(typeof i=="string"){var p=_.lookupPath(i,{follow:!c});u=p.node}else u=i;_.doChown(null,u,c)},lchown(i,a,d){_.chown(i,a,d,!0)},fchown(i,a,d){var c=_.getStreamChecked(i);_.doChown(c,c.node,!1)},doTruncate(i,a,d){if(_.isDir(a.mode))throw new _.ErrnoError(31);if(!_.isFile(a.mode))throw new _.ErrnoError(28);var c=_.nodePermissions(a,"w");if(c)throw new _.ErrnoError(c);_.doSetAttr(i,a,{size:d,timestamp:Date.now()})},truncate(i,a){if(a<0)throw new _.ErrnoError(28);var d;if(typeof i=="string"){var c=_.lookupPath(i,{follow:!0});d=c.node}else d=i;_.doTruncate(null,d,a)},ftruncate(i,a){var d=_.getStreamChecked(i);if(a<0||!(d.flags&2097155))throw new _.ErrnoError(28);_.doTruncate(d,d.node,a)},utime(i,a,d){var c=_.lookupPath(i,{follow:!0}),u=c.node,p=_.checkOpExists(u.node_ops.setattr,63);p(u,{atime:a,mtime:d})},open(i,a,d=438){if(i==="")throw new _.ErrnoError(44);a=typeof a=="string"?Ow(a):a,a&64?d=d&4095|32768:d=0;var c,u;if(typeof i=="object")c=i;else{u=i.endsWith("/");var p=_.lookupPath(i,{follow:!(a&131072),noent_okay:!0});c=p.node,i=p.path}var O=!1;if(a&64)if(c){if(a&128)throw new _.ErrnoError(20)}else{if(u)throw new _.ErrnoError(31);c=_.mknod(i,d|511,0),O=!0}if(!c)throw new _.ErrnoError(44);if(_.isChrdev(c.mode)&&(a&=-513),a&65536&&!_.isDir(c.mode))throw new _.ErrnoError(54);if(!O){var C=_.mayOpen(c,a);if(C)throw new _.ErrnoError(C)}a&512&&!O&&_.truncate(c,0),a&=-131713;var ee=_.createStream({node:c,path:_.getPath(c),flags:a,seekable:!0,position:0,stream_ops:c.stream_ops,ungotten:[],error:!1});return ee.stream_ops.open&&ee.stream_ops.open(ee),O&&_.chmod(c,d&511),t.logReadFiles&&!(a&1)&&(i in _.readFiles||(_.readFiles[i]=1)),ee},close(i){if(_.isClosed(i))throw new _.ErrnoError(8);i.getdents&&(i.getdents=null);try{i.stream_ops.close&&i.stream_ops.close(i)}catch(a){throw a}finally{_.closeStream(i.fd)}i.fd=null},isClosed(i){return i.fd===null},llseek(i,a,d){if(_.isClosed(i))throw new _.ErrnoError(8);if(!i.seekable||!i.stream_ops.llseek)throw new _.ErrnoError(70);if(d!=0&&d!=1&&d!=2)throw new _.ErrnoError(28);return i.position=i.stream_ops.llseek(i,a,d),i.ungotten=[],i.position},read(i,a,d,c,u){if(c<0||u<0)throw new _.ErrnoError(28);if(_.isClosed(i))throw new _.ErrnoError(8);if((i.flags&2097155)===1)throw new _.ErrnoError(8);if(_.isDir(i.node.mode))throw new _.ErrnoError(31);if(!i.stream_ops.read)throw new _.ErrnoError(28);var p=typeof u<"u";if(!p)u=i.position;else if(!i.seekable)throw new _.ErrnoError(70);var O=i.stream_ops.read(i,a,d,c,u);return p||(i.position+=O),O},write(i,a,d,c,u,p){if(c<0||u<0)throw new _.ErrnoError(28);if(_.isClosed(i))throw new _.ErrnoError(8);if(!(i.flags&2097155))throw new _.ErrnoError(8);if(_.isDir(i.node.mode))throw new _.ErrnoError(31);if(!i.stream_ops.write)throw new _.ErrnoError(28);i.seekable&&i.flags&1024&&_.llseek(i,0,2);var O=typeof u<"u";if(!O)u=i.position;else if(!i.seekable)throw new _.ErrnoError(70);var C=i.stream_ops.write(i,a,d,c,u,p);return O||(i.position+=C),C},mmap(i,a,d,c,u){if(c&2&&!(u&2)&&(i.flags&2097155)!==2)throw new _.ErrnoError(2);if((i.flags&2097155)===1)throw new _.ErrnoError(2);if(!i.stream_ops.mmap)throw new _.ErrnoError(43);if(!a)throw new _.ErrnoError(28);return i.stream_ops.mmap(i,a,d,c,u)},msync(i,a,d,c,u){return i.stream_ops.msync?i.stream_ops.msync(i,a,d,c,u):0},ioctl(i,a,d){if(!i.stream_ops.ioctl)throw new _.ErrnoError(59);return i.stream_ops.ioctl(i,a,d)},readFile(i,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var d=_.open(i,a.flags),c=_.stat(i),u=c.size,p=new Uint8Array(u);return _.read(d,p,0,u,0),a.encoding==="utf8"&&(p=oa(p)),_.close(d),p},writeFile(i,a,d={}){d.flags=d.flags||577;var c=_.open(i,d.flags,d.mode);if(typeof a=="string"&&(a=new Uint8Array(Ru(a))),ArrayBuffer.isView(a))_.write(c,a,0,a.byteLength,void 0,d.canOwn);else throw new Error("Unsupported data type");_.close(c)},cwd:()=>_.currentPath,chdir(i){var a=_.lookupPath(i,{follow:!0});if(a.node===null)throw new _.ErrnoError(44);if(!_.isDir(a.node.mode))throw new _.ErrnoError(54);var d=_.nodePermissions(a.node,"x");if(d)throw new _.ErrnoError(d);_.currentPath=a.path},createDefaultDirectories(){_.mkdir("/tmp"),_.mkdir("/home"),_.mkdir("/home/web_user")},createDefaultDevices(){_.mkdir("/dev"),_.registerDevice(_.makedev(1,3),{read:()=>0,write:(c,u,p,O,C)=>O,llseek:()=>0}),_.mkdev("/dev/null",_.makedev(1,3)),gs.register(_.makedev(5,0),gs.default_tty_ops),gs.register(_.makedev(6,0),gs.default_tty1_ops),_.mkdev("/dev/tty",_.makedev(5,0)),_.mkdev("/dev/tty1",_.makedev(6,0));var i=new Uint8Array(1024),a=0,d=()=>(a===0&&(Fu(i),a=i.byteLength),i[--a]);_.createDevice("/dev","random",d),_.createDevice("/dev","urandom",d),_.mkdir("/dev/shm"),_.mkdir("/dev/shm/tmp")},createSpecialDirectories(){_.mkdir("/proc");var i=_.mkdir("/proc/self");_.mkdir("/proc/self/fd"),_.mount({mount(){var a=_.createNode(i,"fd",16895,73);return a.stream_ops={llseek:et.stream_ops.llseek},a.node_ops={lookup(d,c){var u=+c,p=_.getStreamChecked(u),O={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>p.path},id:u+1};return O.parent=O,O},readdir(){return Array.from(_.streams.entries()).filter(([d,c])=>c).map(([d,c])=>d.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(i,a,d){i?_.createDevice("/dev","stdin",i):_.symlink("/dev/tty","/dev/stdin"),a?_.createDevice("/dev","stdout",null,a):_.symlink("/dev/tty","/dev/stdout"),d?_.createDevice("/dev","stderr",null,d):_.symlink("/dev/tty1","/dev/stderr"),_.open("/dev/stdin",0),_.open("/dev/stdout",1),_.open("/dev/stderr",1)},staticInit(){_.nameTable=new Array(4096),_.mount(et,{},"/"),_.createDefaultDirectories(),_.createDefaultDevices(),_.createSpecialDirectories(),_.filesystems={MEMFS:et}},init(i,a,d){_.initialized=!0,i??(i=t.stdin),a??(a=t.stdout),d??(d=t.stderr),_.createStandardStreams(i,a,d)},quit(){_.initialized=!1;for(var i of _.streams)i&&_.close(i)},findObject(i,a){var d=_.analyzePath(i,a);return d.exists?d.object:null},analyzePath(i,a){try{var d=_.lookupPath(i,{follow:!a});i=d.path}catch{}var c={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var d=_.lookupPath(i,{parent:!0});c.parentExists=!0,c.parentPath=d.path,c.parentObject=d.node,c.name=kt.basename(i),d=_.lookupPath(i,{follow:!a}),c.exists=!0,c.path=d.path,c.object=d.node,c.name=d.node.name,c.isRoot=d.path==="/"}catch(u){c.error=u.errno}return c},createPath(i,a,d,c){i=typeof i=="string"?i:_.getPath(i);for(var u=a.split("/").reverse();u.length;){var p=u.pop();if(p){var O=kt.join2(i,p);try{_.mkdir(O)}catch(C){if(C.errno!=20)throw C}i=O}}return O},createFile(i,a,d,c,u){var p=kt.join2(typeof i=="string"?i:_.getPath(i),a),O=Du(c,u);return _.create(p,O)},createDataFile(i,a,d,c,u,p){var O=a;i&&(i=typeof i=="string"?i:_.getPath(i),O=a?kt.join2(i,a):i);var C=Du(c,u),ee=_.create(O,C);if(d){if(typeof d=="string"){for(var re=new Array(d.length),_e=0,xe=d.length;_e<xe;++_e)re[_e]=d.charCodeAt(_e);d=re}_.chmod(ee,C|146);var X=_.open(ee,577);_.write(X,d,0,d.length,0,p),_.close(X),_.chmod(ee,C)}},createDevice(i,a,d,c){var C;var u=kt.join2(typeof i=="string"?i:_.getPath(i),a),p=Du(!!d,!!c);(C=_.createDevice).major??(C.major=64);var O=_.makedev(_.createDevice.major++,0);return _.registerDevice(O,{open(ee){ee.seekable=!1},close(ee){var re;(re=c==null?void 0:c.buffer)!=null&&re.length&&c(10)},read(ee,re,_e,xe,X){for(var $=0,me=0;me<xe;me++){var I;try{I=d()}catch{throw new _.ErrnoError(29)}if(I===void 0&&$===0)throw new _.ErrnoError(6);if(I==null)break;$++,re[_e+me]=I}return $&&(ee.node.atime=Date.now()),$},write(ee,re,_e,xe,X){for(var $=0;$<xe;$++)try{c(re[_e+$])}catch{throw new _.ErrnoError(29)}return xe&&(ee.node.mtime=ee.node.ctime=Date.now()),$}}),_.mkdev(u,p,O)},forceLoadFile(i){if(i.isDevice||i.isFolder||i.link||i.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{i.contents=F(i.url),i.usedBytes=i.contents.length}catch{throw new _.ErrnoError(29)}},createLazyFile(i,a,d,c,u){class p{constructor(){Ce(this,"lengthKnown",!1);Ce(this,"chunks",[])}get($){if(!($>this.length-1||$<0)){var me=$%this.chunkSize,I=$/this.chunkSize|0;return this.getter(I)[me]}}setDataGetter($){this.getter=$}cacheLength(){var $=new XMLHttpRequest;if($.open("HEAD",d,!1),$.send(null),!($.status>=200&&$.status<300||$.status===304))throw new Error("Couldn't load "+d+". Status: "+$.status);var me=Number($.getResponseHeader("Content-length")),I,T=(I=$.getResponseHeader("Accept-Ranges"))&&I==="bytes",Q=(I=$.getResponseHeader("Content-Encoding"))&&I==="gzip",z=1024*1024;T||(z=me);var te=(fe,ue)=>{if(fe>ue)throw new Error("invalid range ("+fe+", "+ue+") or no bytes requested!");if(ue>me-1)throw new Error("only "+me+" bytes available! programmer error!");var b=new XMLHttpRequest;if(b.open("GET",d,!1),me!==z&&b.setRequestHeader("Range","bytes="+fe+"-"+ue),b.responseType="arraybuffer",b.overrideMimeType&&b.overrideMimeType("text/plain; charset=x-user-defined"),b.send(null),!(b.status>=200&&b.status<300||b.status===304))throw new Error("Couldn't load "+d+". Status: "+b.status);return b.response!==void 0?new Uint8Array(b.response||[]):Ru(b.responseText||"")},D=this;D.setDataGetter(fe=>{var ue=fe*z,b=(fe+1)*z-1;if(b=Math.min(b,me-1),typeof D.chunks[fe]>"u"&&(D.chunks[fe]=te(ue,b)),typeof D.chunks[fe]>"u")throw new Error("doXHR failed!");return D.chunks[fe]}),(Q||!me)&&(z=me=1,me=this.getter(0).length,z=me,H("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=z,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!o)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var O=new p,C={isDevice:!1,contents:O}}else var C={isDevice:!1,url:d};var ee=_.createFile(i,a,C,c,u);C.contents?ee.contents=C.contents:C.url&&(ee.contents=null,ee.url=C.url),Object.defineProperties(ee,{usedBytes:{get:function(){return this.contents.length}}});var re={},_e=Object.keys(ee.stream_ops);_e.forEach(X=>{var $=ee.stream_ops[X];re[X]=(...me)=>(_.forceLoadFile(ee),$(...me))});function xe(X,$,me,I,T){var Q=X.node.contents;if(T>=Q.length)return 0;var z=Math.min(Q.length-T,I);if(Q.slice)for(var te=0;te<z;te++)$[me+te]=Q[T+te];else for(var te=0;te<z;te++)$[me+te]=Q.get(T+te);return z}return re.read=(X,$,me,I,T)=>(_.forceLoadFile(ee),xe(X,$,me,I,T)),re.mmap=(X,$,me,I,T)=>{_.forceLoadFile(ee);var Q=cp($);if(!Q)throw new _.ErrnoError(48);return xe(X,Le,Q,$,me),{ptr:Q,allocated:!0}},ee.stream_ops=re,ee}},Tw=(i,a)=>{if(!i)return"";for(var d=i+a,c=i;!(c>=d)&&gt[c];)++c;return op.decode(gt.subarray(i,c))},ft={DEFAULT_POLLMASK:5,calculateAt(i,a,d){if(kt.isAbs(a))return a;var c;if(i===-100)c=_.cwd();else{var u=ft.getStreamFromFD(i);c=u.path}if(a.length==0){if(!d)throw new _.ErrnoError(44);return c}return c+"/"+a},writeStat(i,a){Fe[i>>2]=a.dev,Fe[i+4>>2]=a.mode,ze[i+8>>2]=a.nlink,Fe[i+12>>2]=a.uid,Fe[i+16>>2]=a.gid,Fe[i+20>>2]=a.rdev,Qe[i+24>>3]=BigInt(a.size),Fe[i+32>>2]=4096,Fe[i+36>>2]=a.blocks;var d=a.atime.getTime(),c=a.mtime.getTime(),u=a.ctime.getTime();return Qe[i+40>>3]=BigInt(Math.floor(d/1e3)),ze[i+48>>2]=d%1e3*1e3*1e3,Qe[i+56>>3]=BigInt(Math.floor(c/1e3)),ze[i+64>>2]=c%1e3*1e3*1e3,Qe[i+72>>3]=BigInt(Math.floor(u/1e3)),ze[i+80>>2]=u%1e3*1e3*1e3,Qe[i+88>>3]=BigInt(a.ino),0},writeStatFs(i,a){Fe[i+4>>2]=a.bsize,Fe[i+40>>2]=a.bsize,Fe[i+8>>2]=a.blocks,Fe[i+12>>2]=a.bfree,Fe[i+16>>2]=a.bavail,Fe[i+20>>2]=a.files,Fe[i+24>>2]=a.ffree,Fe[i+28>>2]=a.fsid,Fe[i+44>>2]=a.flags,Fe[i+36>>2]=a.namelen},doMsync(i,a,d,c,u){if(!_.isFile(a.node.mode))throw new _.ErrnoError(43);if(c&2)return 0;var p=gt.slice(i,i+d);_.msync(a,p,u,d,c)},getStreamFromFD(i){var a=_.getStreamChecked(i);return a},varargs:void 0,getStr(i){var a=Tw(i);return a}};function Cw(i,a){try{return i=ft.getStr(i),_.chmod(i,a),0}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Pw(i,a,d,c){try{if(a=ft.getStr(a),a=ft.calculateAt(i,a),d&-8)return-28;var u=_.lookupPath(a,{follow:!0}),p=u.node;if(!p)return-44;var O="";return d&4&&(O+="r"),d&2&&(O+="w"),d&1&&(O+="x"),O&&_.nodePermissions(p,O)?-2:0}catch(C){if(typeof _>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Lw(i,a){try{return _.fchmod(i,a),0}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Fw(i,a,d){try{return _.fchown(i,a,d),0}catch(c){if(typeof _>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var Tl=()=>{var i=Fe[+ft.varargs>>2];return ft.varargs+=4,i},_o=Tl;function Ww(i,a,d){ft.varargs=d;try{var c=ft.getStreamFromFD(i);switch(a){case 0:{var u=Tl();if(u<0)return-28;for(;_.streams[u];)u++;var p;return p=_.dupStream(c,u),p.fd}case 1:case 2:return 0;case 3:return c.flags;case 4:{var u=Tl();return c.flags|=u,0}case 12:{var u=_o(),O=0;return wt[u+O>>1]=2,0}case 13:case 14:return 0}return-28}catch(C){if(typeof _>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Rw(i,a){try{return ft.writeStat(a,_.fstat(i))}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}var Dw=9007199254740992,Bw=-9007199254740992,aa=i=>i<Bw||i>Dw?NaN:Number(i);function Mw(i,a){a=aa(a);try{return isNaN(a)?-61:(_.ftruncate(i,a),0)}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}var bs=(i,a,d)=>ap(i,gt,a,d);function Uw(i,a){try{if(a===0)return-28;var d=_.cwd(),c=Ol(d)+1;return a<c?-68:(bs(d,i,a),c)}catch(u){if(typeof _>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function $w(i,a,d){ft.varargs=d;try{var c=ft.getStreamFromFD(i);switch(a){case 21509:return c.tty?0:-59;case 21505:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tcgets){var u=c.tty.ops.ioctl_tcgets(c),p=_o();Fe[p>>2]=u.c_iflag||0,Fe[p+4>>2]=u.c_oflag||0,Fe[p+8>>2]=u.c_cflag||0,Fe[p+12>>2]=u.c_lflag||0;for(var O=0;O<32;O++)Le[p+O+17]=u.c_cc[O]||0;return 0}return 0}case 21510:case 21511:case 21512:return c.tty?0:-59;case 21506:case 21507:case 21508:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tcsets){for(var p=_o(),C=Fe[p>>2],ee=Fe[p+4>>2],re=Fe[p+8>>2],_e=Fe[p+12>>2],xe=[],O=0;O<32;O++)xe.push(Le[p+O+17]);return c.tty.ops.ioctl_tcsets(c.tty,a,{c_iflag:C,c_oflag:ee,c_cflag:re,c_lflag:_e,c_cc:xe})}return 0}case 21519:{if(!c.tty)return-59;var p=_o();return Fe[p>>2]=0,0}case 21520:return c.tty?-28:-59;case 21531:{var p=_o();return _.ioctl(c,a,p)}case 21523:{if(!c.tty)return-59;if(c.tty.ops.ioctl_tiocgwinsz){var X=c.tty.ops.ioctl_tiocgwinsz(c.tty),p=_o();wt[p>>1]=X[0],wt[p+2>>1]=X[1]}return 0}case 21524:return c.tty?0:-59;case 21515:return c.tty?0:-59;default:return-28}}catch($){if(typeof _>"u"||$.name!=="ErrnoError")throw $;return-$.errno}}function jw(i,a){try{return i=ft.getStr(i),ft.writeStat(a,_.lstat(i))}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Qw(i,a,d){try{return a=ft.getStr(a),a=ft.calculateAt(i,a),_.mkdir(a,d,0),0}catch(c){if(typeof _>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function zw(i,a,d,c){try{a=ft.getStr(a);var u=c&256,p=c&4096;return c=c&-6401,a=ft.calculateAt(i,a,p),ft.writeStat(d,u?_.lstat(a):_.stat(a))}catch(O){if(typeof _>"u"||O.name!=="ErrnoError")throw O;return-O.errno}}function Vw(i,a,d,c){ft.varargs=c;try{a=ft.getStr(a),a=ft.calculateAt(i,a);var u=c?Tl():0;return _.open(a,d,u).fd}catch(p){if(typeof _>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}function Hw(i,a,d,c){try{if(a=ft.getStr(a),a=ft.calculateAt(i,a),c<=0)return-28;var u=_.readlink(a),p=Math.min(c,Ol(u)),O=Le[d+p];return bs(u,d,c+1),Le[d+p]=O,p}catch(C){if(typeof _>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Kw(i){try{return i=ft.getStr(i),_.rmdir(i),0}catch(a){if(typeof _>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}function Jw(i,a){try{return i=ft.getStr(i),ft.writeStat(a,_.stat(i))}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Gw(i,a,d){try{if(a=ft.getStr(a),a=ft.calculateAt(i,a),!d)_.unlink(a);else if(d===512)_.rmdir(a);else return-28;return 0}catch(c){if(typeof _>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var dp=i=>ze[i>>2]+Fe[i+4>>2]*4294967296;function Xw(i,a,d,c){try{a=ft.getStr(a),a=ft.calculateAt(i,a,!0);var u=Date.now(),p,O;if(!d)p=u,O=u;else{var C=dp(d),ee=Fe[d+8>>2];ee==1073741823?p=u:ee==1073741822?p=null:p=C*1e3+ee/(1e3*1e3),d+=16,C=dp(d),ee=Fe[d+8>>2],ee==1073741823?O=u:ee==1073741822?O=null:O=C*1e3+ee/(1e3*1e3)}return(O??p)!==null&&_.utime(a,p,O),0}catch(re){if(typeof _>"u"||re.name!=="ErrnoError")throw re;return-re.errno}}var Yw=()=>Ee(""),Zw=i=>i%4===0&&(i%100!==0||i%400===0),eN=[0,31,60,91,121,152,182,213,244,274,305,335],tN=[0,31,59,90,120,151,181,212,243,273,304,334],rN=i=>{var a=Zw(i.getFullYear()),d=a?eN:tN,c=d[i.getMonth()]+i.getDate()-1;return c};function nN(i,a){i=aa(i);var d=new Date(i*1e3);Fe[a>>2]=d.getSeconds(),Fe[a+4>>2]=d.getMinutes(),Fe[a+8>>2]=d.getHours(),Fe[a+12>>2]=d.getDate(),Fe[a+16>>2]=d.getMonth(),Fe[a+20>>2]=d.getFullYear()-1900,Fe[a+24>>2]=d.getDay();var c=rN(d)|0;Fe[a+28>>2]=c,Fe[a+36>>2]=-(d.getTimezoneOffset()*60);var u=new Date(d.getFullYear(),0,1),p=new Date(d.getFullYear(),6,1).getTimezoneOffset(),O=u.getTimezoneOffset(),C=(p!=O&&d.getTimezoneOffset()==Math.min(O,p))|0;Fe[a+32>>2]=C}function iN(i,a,d,c,u,p,O){u=aa(u);try{var C=ft.getStreamFromFD(c),ee=_.mmap(C,i,u,a,d),re=ee.ptr;return Fe[p>>2]=ee.allocated,ze[O>>2]=re,0}catch(_e){if(typeof _>"u"||_e.name!=="ErrnoError")throw _e;return-_e.errno}}function sN(i,a,d,c,u,p){p=aa(p);try{var O=ft.getStreamFromFD(u);d&2&&ft.doMsync(i,O,a,c,p)}catch(C){if(typeof _>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}var oN=(i,a,d,c)=>{var u=new Date().getFullYear(),p=new Date(u,0,1),O=new Date(u,6,1),C=p.getTimezoneOffset(),ee=O.getTimezoneOffset(),re=Math.max(C,ee);ze[i>>2]=re*60,Fe[a>>2]=+(C!=ee);var _e=$=>{var me=$>=0?"-":"+",I=Math.abs($),T=String(Math.floor(I/60)).padStart(2,"0"),Q=String(I%60).padStart(2,"0");return`UTC${me}${T}${Q}`},xe=_e(C),X=_e(ee);ee<C?(bs(xe,d,17),bs(X,c,17)):(bs(xe,c,17),bs(X,d,17))},fp=()=>performance.now(),hp=()=>Date.now(),aN=i=>i>=0&&i<=3;function lN(i,a,d){if(!aN(i))return 28;var c;i===0?c=hp():c=fp();var u=Math.round(c*1e3*1e3);return Qe[d>>3]=BigInt(u),0}var cN=()=>2147483648,uN=i=>{var a=Re.buffer,d=(i-a.byteLength+65535)/65536|0;try{return Re.grow(d),ht(),1}catch{}},dN=i=>{var a=gt.length;i>>>=0;var d=cN();if(i>d)return!1;for(var c=1;c<=4;c*=2){var u=a*(1+.2/c);u=Math.min(u,i+100663296);var p=Math.min(d,lp(Math.max(i,u),65536)),O=uN(p);if(O)return!0}return!1},Bu={},fN=()=>h||"./this.program",la=()=>{if(!la.strings){var i=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:i,_:fN()};for(var d in Bu)Bu[d]===void 0?delete a[d]:a[d]=Bu[d];var c=[];for(var d in a)c.push(`${d}=${a[d]}`);la.strings=c}return la.strings},hN=(i,a)=>{var d=0,c=0;for(var u of la()){var p=a+d;ze[i+c>>2]=p,d+=bs(u,p,1/0)+1,c+=4}return 0},pN=(i,a)=>{var d=la();ze[i>>2]=d.length;var c=0;for(var u of d)c+=Ol(u)+1;return ze[a>>2]=c,0},mN=0,_N=()=>sp||mN>0,yN=i=>{var a;_N()||((a=t.onExit)==null||a.call(t,i),ve=!0),g(i,new Wi(i))},gN=(i,a)=>{yN(i)},bN=gN;function wN(i){try{var a=ft.getStreamFromFD(i);return _.close(a),0}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return d.errno}}function NN(i,a){try{var d=0,c=0,u=0,p=ft.getStreamFromFD(i),O=p.tty?2:_.isDir(p.mode)?3:_.isLink(p.mode)?7:4;return Le[a]=O,wt[a+2>>1]=u,Qe[a+8>>3]=BigInt(d),Qe[a+16>>3]=BigInt(c),0}catch(C){if(typeof _>"u"||C.name!=="ErrnoError")throw C;return C.errno}}var xN=(i,a,d,c)=>{for(var u=0,p=0;p<d;p++){var O=ze[a>>2],C=ze[a+4>>2];a+=8;var ee=_.read(i,Le,O,C,c);if(ee<0)return-1;if(u+=ee,ee<C)break}return u};function vN(i,a,d,c){try{var u=ft.getStreamFromFD(i),p=xN(u,a,d);return ze[c>>2]=p,0}catch(O){if(typeof _>"u"||O.name!=="ErrnoError")throw O;return O.errno}}function qN(i,a,d,c){a=aa(a);try{if(isNaN(a))return 61;var u=ft.getStreamFromFD(i);return _.llseek(u,a,d),Qe[c>>3]=BigInt(u.position),u.getdents&&a===0&&d===0&&(u.getdents=null),0}catch(p){if(typeof _>"u"||p.name!=="ErrnoError")throw p;return p.errno}}function SN(i){var d;try{var a=ft.getStreamFromFD(i);return(d=a.stream_ops)!=null&&d.fsync?a.stream_ops.fsync(a):0}catch(c){if(typeof _>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var kN=(i,a,d,c)=>{for(var u=0,p=0;p<d;p++){var O=ze[a>>2],C=ze[a+4>>2];a+=8;var ee=_.write(i,Le,O,C,c);if(ee<0)return-1;if(u+=ee,ee<C)break}return u};function EN(i,a,d,c){try{var u=ft.getStreamFromFD(i),p=kN(u,a,d);return ze[c>>2]=p,0}catch(O){if(typeof _>"u"||O.name!=="ErrnoError")throw O;return O.errno}}function AN(i,a){try{return Fu(gt.subarray(i,i+a)),0}catch(d){if(typeof _>"u"||d.name!=="ErrnoError")throw d;return d.errno}}_.createPreloadedFile=Iw,_.staticInit(),et.doesNotExistError=new _.ErrnoError(44),et.doesNotExistError.stack="<generic error, no stack>",dt(),t.noExitRuntime&&(sp=t.noExitRuntime),t.preloadPlugins&&(up=t.preloadPlugins),t.print&&(H=t.print),t.printErr&&(J=t.printErr),t.wasmBinary&&(Y=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),t.wasmMemory=Re;var pp;function IN(i){t._sqlite3_status64=i.sqlite3_status64,t._sqlite3_status=i.sqlite3_status,t._sqlite3_db_status=i.sqlite3_db_status,t._sqlite3_msize=i.sqlite3_msize,t._sqlite3_vfs_find=i.sqlite3_vfs_find,t._sqlite3_initialize=i.sqlite3_initialize,t._sqlite3_malloc=i.sqlite3_malloc,t._sqlite3_free=i.sqlite3_free,t._sqlite3_vfs_register=i.sqlite3_vfs_register,t._sqlite3_randomness=i.sqlite3_randomness,t._sqlite3mc_vfs_create=i.sqlite3mc_vfs_create,t._sqlite3_vfs_unregister=i.sqlite3_vfs_unregister,t._sqlite3_malloc64=i.sqlite3_malloc64,t._sqlite3_realloc=i.sqlite3_realloc,t._sqlite3_realloc64=i.sqlite3_realloc64,t._sqlite3_value_text=i.sqlite3_value_text,t._sqlite3_stricmp=i.sqlite3_stricmp,t._sqlite3_strnicmp=i.sqlite3_strnicmp,t._sqlite3_uri_parameter=i.sqlite3_uri_parameter,t._sqlite3_uri_boolean=i.sqlite3_uri_boolean,t._sqlite3_serialize=i.sqlite3_serialize,t._sqlite3_prepare_v2=i.sqlite3_prepare_v2,t._sqlite3_step=i.sqlite3_step,t._sqlite3_column_int64=i.sqlite3_column_int64,t._sqlite3_reset=i.sqlite3_reset,t._sqlite3_exec=i.sqlite3_exec,t._sqlite3_column_int=i.sqlite3_column_int,t._sqlite3_finalize=i.sqlite3_finalize,t._sqlite3_file_control=i.sqlite3_file_control,t._sqlite3_column_name=i.sqlite3_column_name,t._sqlite3_column_text=i.sqlite3_column_text,t._sqlite3_column_type=i.sqlite3_column_type,t._sqlite3_errmsg=i.sqlite3_errmsg,t._sqlite3_deserialize=i.sqlite3_deserialize,t._sqlite3_clear_bindings=i.sqlite3_clear_bindings,t._sqlite3_value_blob=i.sqlite3_value_blob,t._sqlite3_value_bytes=i.sqlite3_value_bytes,t._sqlite3_value_double=i.sqlite3_value_double,t._sqlite3_value_int=i.sqlite3_value_int,t._sqlite3_value_int64=i.sqlite3_value_int64,t._sqlite3_value_subtype=i.sqlite3_value_subtype,t._sqlite3_value_pointer=i.sqlite3_value_pointer,t._sqlite3_value_type=i.sqlite3_value_type,t._sqlite3_value_nochange=i.sqlite3_value_nochange,t._sqlite3_value_frombind=i.sqlite3_value_frombind,t._sqlite3_value_dup=i.sqlite3_value_dup,t._sqlite3_value_free=i.sqlite3_value_free,t._sqlite3_result_blob=i.sqlite3_result_blob,t._sqlite3_result_error_toobig=i.sqlite3_result_error_toobig,t._sqlite3_result_error_nomem=i.sqlite3_result_error_nomem,t._sqlite3_result_double=i.sqlite3_result_double,t._sqlite3_result_error=i.sqlite3_result_error,t._sqlite3_result_int=i.sqlite3_result_int,t._sqlite3_result_int64=i.sqlite3_result_int64,t._sqlite3_result_null=i.sqlite3_result_null,t._sqlite3_result_pointer=i.sqlite3_result_pointer,t._sqlite3_result_subtype=i.sqlite3_result_subtype,t._sqlite3_result_text=i.sqlite3_result_text,t._sqlite3_result_zeroblob=i.sqlite3_result_zeroblob,t._sqlite3_result_zeroblob64=i.sqlite3_result_zeroblob64,t._sqlite3_result_error_code=i.sqlite3_result_error_code,t._sqlite3_user_data=i.sqlite3_user_data,t._sqlite3_context_db_handle=i.sqlite3_context_db_handle,t._sqlite3_vtab_nochange=i.sqlite3_vtab_nochange,t._sqlite3_vtab_in_first=i.sqlite3_vtab_in_first,t._sqlite3_vtab_in_next=i.sqlite3_vtab_in_next,t._sqlite3_aggregate_context=i.sqlite3_aggregate_context,t._sqlite3_get_auxdata=i.sqlite3_get_auxdata,t._sqlite3_set_auxdata=i.sqlite3_set_auxdata,t._sqlite3_column_count=i.sqlite3_column_count,t._sqlite3_data_count=i.sqlite3_data_count,t._sqlite3_column_blob=i.sqlite3_column_blob,t._sqlite3_column_bytes=i.sqlite3_column_bytes,t._sqlite3_column_double=i.sqlite3_column_double,t._sqlite3_column_value=i.sqlite3_column_value,t._sqlite3_column_decltype=i.sqlite3_column_decltype,t._sqlite3_bind_blob=i.sqlite3_bind_blob,t._sqlite3_bind_double=i.sqlite3_bind_double,t._sqlite3_bind_int=i.sqlite3_bind_int,t._sqlite3_bind_int64=i.sqlite3_bind_int64,t._sqlite3_bind_null=i.sqlite3_bind_null,t._sqlite3_bind_pointer=i.sqlite3_bind_pointer,t._sqlite3_bind_text=i.sqlite3_bind_text,t._sqlite3_bind_parameter_count=i.sqlite3_bind_parameter_count,t._sqlite3_bind_parameter_name=i.sqlite3_bind_parameter_name,t._sqlite3_bind_parameter_index=i.sqlite3_bind_parameter_index,t._sqlite3_db_handle=i.sqlite3_db_handle,t._sqlite3_stmt_readonly=i.sqlite3_stmt_readonly,t._sqlite3_stmt_isexplain=i.sqlite3_stmt_isexplain,t._sqlite3_stmt_explain=i.sqlite3_stmt_explain,t._sqlite3_stmt_busy=i.sqlite3_stmt_busy,t._sqlite3_stmt_status=i.sqlite3_stmt_status,t._sqlite3_sql=i.sqlite3_sql,t._sqlite3_expanded_sql=i.sqlite3_expanded_sql,t._sqlite3_preupdate_old=i.sqlite3_preupdate_old,t._sqlite3_preupdate_count=i.sqlite3_preupdate_count,t._sqlite3_preupdate_depth=i.sqlite3_preupdate_depth,t._sqlite3_preupdate_blobwrite=i.sqlite3_preupdate_blobwrite,t._sqlite3_preupdate_new=i.sqlite3_preupdate_new,t._sqlite3_value_numeric_type=i.sqlite3_value_numeric_type,t._sqlite3_set_authorizer=i.sqlite3_set_authorizer,t._sqlite3_strglob=i.sqlite3_strglob,t._sqlite3_strlike=i.sqlite3_strlike,t._sqlite3_auto_extension=i.sqlite3_auto_extension,t._sqlite3_cancel_auto_extension=i.sqlite3_cancel_auto_extension,t._sqlite3_reset_auto_extension=i.sqlite3_reset_auto_extension,t._sqlite3_prepare_v3=i.sqlite3_prepare_v3,t._sqlite3_create_module=i.sqlite3_create_module,t._sqlite3_create_module_v2=i.sqlite3_create_module_v2,t._sqlite3_drop_modules=i.sqlite3_drop_modules,t._sqlite3_declare_vtab=i.sqlite3_declare_vtab,t._sqlite3_vtab_on_conflict=i.sqlite3_vtab_on_conflict,t._sqlite3_vtab_collation=i.sqlite3_vtab_collation,t._sqlite3_vtab_in=i.sqlite3_vtab_in,t._sqlite3_vtab_rhs_value=i.sqlite3_vtab_rhs_value,t._sqlite3_vtab_distinct=i.sqlite3_vtab_distinct,t._sqlite3_keyword_name=i.sqlite3_keyword_name,t._sqlite3_keyword_count=i.sqlite3_keyword_count,t._sqlite3_keyword_check=i.sqlite3_keyword_check,t._sqlite3_complete=i.sqlite3_complete,t._sqlite3_libversion=i.sqlite3_libversion,t._sqlite3_libversion_number=i.sqlite3_libversion_number,t._sqlite3_shutdown=i.sqlite3_shutdown,t._sqlite3mc_vfs_shutdown=i.sqlite3mc_vfs_shutdown,t._sqlite3_last_insert_rowid=i.sqlite3_last_insert_rowid,t._sqlite3_set_last_insert_rowid=i.sqlite3_set_last_insert_rowid,t._sqlite3_changes64=i.sqlite3_changes64,t._sqlite3_changes=i.sqlite3_changes,t._sqlite3_total_changes64=i.sqlite3_total_changes64,t._sqlite3_total_changes=i.sqlite3_total_changes,t._sqlite3_txn_state=i.sqlite3_txn_state,t._sqlite3_close_v2=i.sqlite3_close_v2,t._sqlite3_busy_handler=i.sqlite3_busy_handler,t._sqlite3_progress_handler=i.sqlite3_progress_handler,t._sqlite3_busy_timeout=i.sqlite3_busy_timeout,t._sqlite3_interrupt=i.sqlite3_interrupt,t._sqlite3_is_interrupted=i.sqlite3_is_interrupted,t._sqlite3_create_function=i.sqlite3_create_function,t._sqlite3_create_function_v2=i.sqlite3_create_function_v2,t._sqlite3_create_window_function=i.sqlite3_create_window_function,t._sqlite3_overload_function=i.sqlite3_overload_function,t._sqlite3_trace_v2=i.sqlite3_trace_v2,t._sqlite3_commit_hook=i.sqlite3_commit_hook,t._sqlite3_update_hook=i.sqlite3_update_hook,t._sqlite3_rollback_hook=i.sqlite3_rollback_hook,t._sqlite3_preupdate_hook=i.sqlite3_preupdate_hook,t._sqlite3_error_offset=i.sqlite3_error_offset,t._sqlite3_errcode=i.sqlite3_errcode,t._sqlite3_extended_errcode=i.sqlite3_extended_errcode,t._sqlite3_errstr=i.sqlite3_errstr,t._sqlite3_limit=i.sqlite3_limit,t._sqlite3_open=i.sqlite3_open,t._sqlite3_open_v2=i.sqlite3_open_v2,t._sqlite3_create_collation=i.sqlite3_create_collation,t._sqlite3_create_collation_v2=i.sqlite3_create_collation_v2,t._sqlite3_collation_needed=i.sqlite3_collation_needed,t._sqlite3_get_autocommit=i.sqlite3_get_autocommit,t._sqlite3_table_column_metadata=i.sqlite3_table_column_metadata,t._sqlite3_extended_result_codes=i.sqlite3_extended_result_codes,t._sqlite3_uri_key=i.sqlite3_uri_key,t._sqlite3_uri_int64=i.sqlite3_uri_int64,t._sqlite3_db_name=i.sqlite3_db_name,t._sqlite3_db_filename=i.sqlite3_db_filename,t._sqlite3_db_readonly=i.sqlite3_db_readonly,t._sqlite3_compileoption_used=i.sqlite3_compileoption_used,t._sqlite3_compileoption_get=i.sqlite3_compileoption_get,t._sqlite3session_diff=i.sqlite3session_diff,t._sqlite3session_attach=i.sqlite3session_attach,t._sqlite3session_create=i.sqlite3session_create,t._sqlite3session_delete=i.sqlite3session_delete,t._sqlite3session_table_filter=i.sqlite3session_table_filter,t._sqlite3session_changeset=i.sqlite3session_changeset,t._sqlite3session_changeset_strm=i.sqlite3session_changeset_strm,t._sqlite3session_patchset_strm=i.sqlite3session_patchset_strm,t._sqlite3session_patchset=i.sqlite3session_patchset,t._sqlite3session_enable=i.sqlite3session_enable,t._sqlite3session_indirect=i.sqlite3session_indirect,t._sqlite3session_isempty=i.sqlite3session_isempty,t._sqlite3session_memory_used=i.sqlite3session_memory_used,t._sqlite3session_object_config=i.sqlite3session_object_config,t._sqlite3session_changeset_size=i.sqlite3session_changeset_size,t._sqlite3changeset_start=i.sqlite3changeset_start,t._sqlite3changeset_start_v2=i.sqlite3changeset_start_v2,t._sqlite3changeset_start_strm=i.sqlite3changeset_start_strm,t._sqlite3changeset_start_v2_strm=i.sqlite3changeset_start_v2_strm,t._sqlite3changeset_next=i.sqlite3changeset_next,t._sqlite3changeset_op=i.sqlite3changeset_op,t._sqlite3changeset_pk=i.sqlite3changeset_pk,t._sqlite3changeset_old=i.sqlite3changeset_old,t._sqlite3changeset_new=i.sqlite3changeset_new,t._sqlite3changeset_conflict=i.sqlite3changeset_conflict,t._sqlite3changeset_fk_conflicts=i.sqlite3changeset_fk_conflicts,t._sqlite3changeset_finalize=i.sqlite3changeset_finalize,t._sqlite3changeset_invert=i.sqlite3changeset_invert,t._sqlite3changeset_invert_strm=i.sqlite3changeset_invert_strm,t._sqlite3changeset_apply_v2=i.sqlite3changeset_apply_v2,t._sqlite3changeset_apply=i.sqlite3changeset_apply,t._sqlite3changeset_apply_v2_strm=i.sqlite3changeset_apply_v2_strm,t._sqlite3changeset_apply_strm=i.sqlite3changeset_apply_strm,t._sqlite3changegroup_new=i.sqlite3changegroup_new,t._sqlite3changegroup_add=i.sqlite3changegroup_add,t._sqlite3changegroup_output=i.sqlite3changegroup_output,t._sqlite3changegroup_add_strm=i.sqlite3changegroup_add_strm,t._sqlite3changegroup_output_strm=i.sqlite3changegroup_output_strm,t._sqlite3changegroup_delete=i.sqlite3changegroup_delete,t._sqlite3changeset_concat=i.sqlite3changeset_concat,t._sqlite3changeset_concat_strm=i.sqlite3changeset_concat_strm,t._sqlite3session_config=i.sqlite3session_config,t._sqlite3_sourceid=i.sqlite3_sourceid,t._sqlite3mc_version=i.sqlite3mc_version,t._sqlite3mc_config=i.sqlite3mc_config,t._sqlite3mc_cipher_count=i.sqlite3mc_cipher_count,t._sqlite3mc_cipher_index=i.sqlite3mc_cipher_index,t._sqlite3mc_cipher_name=i.sqlite3mc_cipher_name,t._sqlite3mc_config_cipher=i.sqlite3mc_config_cipher,t._sqlite3mc_codec_data=i.sqlite3mc_codec_data,t._sqlite3_activate_see=i.sqlite3_activate_see,t._sqlite3_key=i.sqlite3_key,t._sqlite3_key_v2=i.sqlite3_key_v2,t._sqlite3_rekey_v2=i.sqlite3_rekey_v2,t._sqlite3_rekey=i.sqlite3_rekey,t._sqlite3mc_vfs_destroy=i.sqlite3mc_vfs_destroy,t._sqlite3__wasm_pstack_ptr=i.sqlite3__wasm_pstack_ptr,t._sqlite3__wasm_pstack_restore=i.sqlite3__wasm_pstack_restore,t._sqlite3__wasm_pstack_alloc=i.sqlite3__wasm_pstack_alloc,t._sqlite3__wasm_pstack_remaining=i.sqlite3__wasm_pstack_remaining,t._sqlite3__wasm_pstack_quota=i.sqlite3__wasm_pstack_quota,t._sqlite3__wasm_db_error=i.sqlite3__wasm_db_error,t._sqlite3__wasm_test_struct=i.sqlite3__wasm_test_struct,t._sqlite3__wasm_enum_json=i.sqlite3__wasm_enum_json,t._sqlite3__wasm_vfs_unlink=i.sqlite3__wasm_vfs_unlink,t._sqlite3__wasm_db_vfs=i.sqlite3__wasm_db_vfs,t._sqlite3__wasm_db_reset=i.sqlite3__wasm_db_reset,t._sqlite3__wasm_db_export_chunked=i.sqlite3__wasm_db_export_chunked,t._sqlite3__wasm_db_serialize=i.sqlite3__wasm_db_serialize,t._sqlite3__wasm_vfs_create_file=i.sqlite3__wasm_vfs_create_file,t._sqlite3__wasm_posix_create_file=i.sqlite3__wasm_posix_create_file,t._sqlite3__wasm_kvvfsMakeKeyOnPstack=i.sqlite3__wasm_kvvfsMakeKeyOnPstack,t._sqlite3__wasm_kvvfs_methods=i.sqlite3__wasm_kvvfs_methods,t._sqlite3__wasm_vtab_config=i.sqlite3__wasm_vtab_config,t._sqlite3__wasm_db_config_ip=i.sqlite3__wasm_db_config_ip,t._sqlite3__wasm_db_config_pii=i.sqlite3__wasm_db_config_pii,t._sqlite3__wasm_db_config_s=i.sqlite3__wasm_db_config_s,t._sqlite3__wasm_config_i=i.sqlite3__wasm_config_i,t._sqlite3__wasm_config_ii=i.sqlite3__wasm_config_ii,t._sqlite3__wasm_config_j=i.sqlite3__wasm_config_j,t._sqlite3__wasm_qfmt_token=i.sqlite3__wasm_qfmt_token,t._sqlite3__wasm_init_wasmfs=i.sqlite3__wasm_init_wasmfs,t._sqlite3__wasm_test_intptr=i.sqlite3__wasm_test_intptr,t._sqlite3__wasm_test_voidptr=i.sqlite3__wasm_test_voidptr,t._sqlite3__wasm_test_int64_max=i.sqlite3__wasm_test_int64_max,t._sqlite3__wasm_test_int64_min=i.sqlite3__wasm_test_int64_min,t._sqlite3__wasm_test_int64_times2=i.sqlite3__wasm_test_int64_times2,t._sqlite3__wasm_test_int64_minmax=i.sqlite3__wasm_test_int64_minmax,t._sqlite3__wasm_test_int64ptr=i.sqlite3__wasm_test_int64ptr,t._sqlite3__wasm_test_stack_overflow=i.sqlite3__wasm_test_stack_overflow,t._sqlite3__wasm_test_str_hello=i.sqlite3__wasm_test_str_hello,t._sqlite3__wasm_SQLTester_strglob=i.sqlite3__wasm_SQLTester_strglob,t._malloc=i.malloc,t._free=i.free,t._realloc=i.realloc,pp=i.emscripten_builtin_memalign,i._emscripten_stack_restore,i._emscripten_stack_alloc,i.emscripten_stack_get_current}var mp={__syscall_chmod:Cw,__syscall_faccessat:Pw,__syscall_fchmod:Lw,__syscall_fchown32:Fw,__syscall_fcntl64:Ww,__syscall_fstat64:Rw,__syscall_ftruncate64:Mw,__syscall_getcwd:Uw,__syscall_ioctl:$w,__syscall_lstat64:jw,__syscall_mkdirat:Qw,__syscall_newfstatat:zw,__syscall_openat:Vw,__syscall_readlinkat:Hw,__syscall_rmdir:Kw,__syscall_stat64:Jw,__syscall_unlinkat:Gw,__syscall_utimensat:Xw,_abort_js:Yw,_localtime_js:nN,_mmap_js:iN,_munmap_js:sN,_tzset_js:oN,clock_time_get:lN,emscripten_date_now:hp,emscripten_get_now:fp,emscripten_resize_heap:dN,environ_get:hN,environ_sizes_get:pN,exit:bN,fd_close:wN,fd_fdstat_get:NN,fd_read:vN,fd_seek:qN,fd_sync:SN,fd_write:EN,memory:Re,random_get:AN},yo=await Fi();function Mu(){if(ie>0){se=Mu;return}if(W(),ie>0){se=Mu;return}function i(){var a;t.calledRun=!0,!ve&&(ye(),ke==null||ke(t),(a=t.onRuntimeInitialized)==null||a.call(t),ce())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),i()},1)):i()}function ON(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()()}return ON(),Mu(),t.runSQLite3PostLoadInit=function(i){if(globalThis.sqlite3ApiBootstrap=function a(d=globalThis.sqlite3ApiConfig||a.defaultConfig){if(a.sqlite3)return(a.sqlite3.config||console).warn("sqlite3ApiBootstrap() called multiple times.","Config and external initializers are ignored on calls after the first."),a.sqlite3;const c=Object.assign(Object.create(null),{exports:void 0,memory:void 0,bigIntEnabled:typeof t<"u"&&t.HEAPU64?!0:!!globalThis.BigInt64Array,debug:console.debug.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console),wasmfsOpfsDir:"/opfs",useStdAlloc:!1},d||{});Object.assign(c,{allocExportName:c.useStdAlloc?"malloc":"sqlite3_malloc",deallocExportName:c.useStdAlloc?"free":"sqlite3_free",reallocExportName:c.useStdAlloc?"realloc":"sqlite3_realloc"},c),["exports","memory","wasmfsOpfsDir"].forEach(f=>{typeof c[f]=="function"&&(c[f]=c[f]())}),delete globalThis.sqlite3ApiConfig,delete a.defaultConfig;const u=Object.create(null),p=Object.create(null),O=f=>u.sqlite3_js_rc_str&&u.sqlite3_js_rc_str(f)||"Unknown result code #"+f,C=f=>typeof f=="number"&&f===(f|0);class ee extends Error{constructor(...y){let q;if(y.length)if(C(y[0]))if(q=y[0],y.length===1)super(O(y[0]));else{const w=O(q);typeof y[1]=="object"?super(w,y[1]):(y[0]=w+":",super(y.join(" ")))}else y.length===2&&typeof y[1]=="object"?super(...y):super(y.join(" "));this.resultCode=q||u.SQLITE_ERROR,this.name="SQLite3Error"}}ee.toss=(...f)=>{throw new ee(...f)};const re=ee.toss;c.wasmfsOpfsDir&&!/^\/[^/]+$/.test(c.wasmfsOpfsDir)&&re("config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.");const _e=f=>typeof f!="bigint"&&f===(f|0)&&f<=2147483647&&f>=-2147483648,xe=function f(y){return f._max||(f._max=BigInt("0x7fffffffffffffff"),f._min=~f._max),y>=f._min&&y<=f._max},X=f=>f>=-0x7fffffffn-1n&&f<=0x7fffffffn,$=function f(y){return f._min||(f._min=Number.MIN_SAFE_INTEGER,f._max=Number.MAX_SAFE_INTEGER),y>=f._min&&y<=f._max},me=f=>f&&f.constructor&&_e(f.constructor.BYTES_PER_ELEMENT)?f:!1,I=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,T=f=>f.buffer instanceof I,Q=(f,y,q)=>T(f)?f.slice(y,q):f.subarray(y,q),z=f=>f&&(f instanceof Uint8Array||f instanceof Int8Array||f instanceof ArrayBuffer),te=f=>f&&(f instanceof Uint8Array||f instanceof Int8Array||f instanceof ArrayBuffer),D=f=>z(f)||re("Value is not of a supported TypedArray type."),fe=new TextDecoder("utf-8"),ue=function(f,y,q){return fe.decode(Q(f,y,q))},b=function(f){return te(f)?ue(f instanceof ArrayBuffer?new Uint8Array(f):f):Array.isArray(f)?f.join(""):(p.isPtr(f)&&(f=p.cstrToJs(f)),f)};class A extends Error{constructor(...y){y.length===2&&typeof y[1]=="object"?super(...y):y.length?super(y.join(" ")):super("Allocation failed."),this.resultCode=u.SQLITE_NOMEM,this.name="WasmAllocError"}}A.toss=(...f)=>{throw new A(...f)},Object.assign(u,{sqlite3_bind_blob:void 0,sqlite3_bind_text:void 0,sqlite3_create_function_v2:(f,y,q,w,U,be,De,it,Ye)=>{},sqlite3_create_function:(f,y,q,w,U,be,De,it)=>{},sqlite3_create_window_function:(f,y,q,w,U,be,De,it,Ye,st)=>{},sqlite3_prepare_v3:(f,y,q,w,U,be)=>{},sqlite3_prepare_v2:(f,y,q,w,U)=>{},sqlite3_exec:(f,y,q,w,U)=>{},sqlite3_randomness:(f,y)=>{}});const P={affirmBindableTypedArray:D,flexibleString:b,bigIntFits32:X,bigIntFits64:xe,bigIntFitsDouble:$,isBindableTypedArray:z,isInt32:_e,isSQLableTypedArray:te,isTypedArray:me,typedArrayToString:ue,isUIThread:()=>globalThis.window===globalThis&&!!globalThis.document,isSharedTypedArray:T,toss:function(...f){throw new Error(f.join(" "))},toss3:re,typedArrayPart:Q,affirmDbHeader:function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));const y="SQLite format 3";y.length>f.byteLength&&re("Input does not contain an SQLite3 database header.");for(let q=0;q<y.length;++q)y.charCodeAt(q)!==f[q]&&re("Input does not contain an SQLite3 database header.")},affirmIsDb:function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));const y=f.byteLength;(y<512||y%512!==0)&&re("Byte array size",y,"is invalid for an SQLite3 db."),P.affirmDbHeader(f)}};Object.assign(p,{ptrSizeof:c.wasmPtrSizeof||4,ptrIR:c.wasmPtrIR||"i32",bigIntEnabled:!!c.bigIntEnabled,exports:c.exports||re("Missing API config.exports (WASM module exports)."),memory:c.memory||c.exports.memory||re("API config object requires a WebAssembly.Memory object","in either config.exports.memory (exported)","or config.memory (imported)."),alloc:void 0,realloc:void 0,dealloc:void 0}),p.allocFromTypedArray=function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f)),D(f);const y=p.alloc(f.byteLength||1);return p.heapForSize(f.constructor).set(f.byteLength?f:[0],y),y};{const f=c.allocExportName,y=c.deallocExportName,q=c.reallocExportName;for(const w of[f,y,q])p.exports[w]instanceof Function||re("Missing required exports[",w,"] function.");p.alloc=function w(U){return w.impl(U)||A.toss("Failed to allocate",U," bytes.")},p.alloc.impl=p.exports[f],p.realloc=function w(U,be){const De=w.impl(U,be);return be?De||A.toss("Failed to reallocate",be," bytes."):0},p.realloc.impl=p.exports[q],p.dealloc=p.exports[y]}p.compileOptionUsed=function f(y){if(arguments.length){if(Array.isArray(y)){const q={};return y.forEach(w=>{q[w]=u.sqlite3_compileoption_used(w)}),q}else if(typeof y=="object")return Object.keys(y).forEach(q=>{y[q]=u.sqlite3_compileoption_used(q)}),y}else{if(f._result)return f._result;f._opt||(f._rx=/^([^=]+)=(.+)/,f._rxInt=/^-?\d+$/,f._opt=function(De,it){const Ye=f._rx.exec(De);it[0]=Ye?Ye[1]:De,it[1]=Ye?f._rxInt.test(Ye[2])?+Ye[2]:Ye[2]:!0});const q={},w=[0,0];let U=0,be;for(;be=u.sqlite3_compileoption_get(U++);)f._opt(be,w),q[w[0]]=w[1];return f._result=q}return typeof y=="string"?!!u.sqlite3_compileoption_used(y):!1},p.pstack=Object.assign(Object.create(null),{restore:p.exports.sqlite3__wasm_pstack_restore,alloc:function(f){return typeof f=="string"&&!(f=p.sizeofIR(f))&&A.toss("Invalid value for pstack.alloc(",arguments[0],")"),p.exports.sqlite3__wasm_pstack_alloc(f)||A.toss("Could not allocate",f,"bytes from the pstack.")},allocChunks:function(f,y){typeof y=="string"&&!(y=p.sizeofIR(y))&&A.toss("Invalid size value for allocChunks(",arguments[1],")");const q=p.pstack.alloc(f*y),w=[];let U=0,be=0;for(;U<f;++U,be+=y)w.push(q+be);return w},allocPtr:(f=1,y=!0)=>f===1?p.pstack.alloc(y?8:p.ptrSizeof):p.pstack.allocChunks(f,y?8:p.ptrSizeof),call:function(f){const y=p.pstack.pointer;try{return f(ge)}finally{p.pstack.restore(y)}}}),Object.defineProperties(p.pstack,{pointer:{configurable:!1,iterable:!0,writeable:!1,get:p.exports.sqlite3__wasm_pstack_ptr},quota:{configurable:!1,iterable:!0,writeable:!1,get:p.exports.sqlite3__wasm_pstack_quota},remaining:{configurable:!1,iterable:!0,writeable:!1,get:p.exports.sqlite3__wasm_pstack_remaining}}),u.sqlite3_randomness=(...f)=>{if(f.length===1&&P.isTypedArray(f[0])&&f[0].BYTES_PER_ELEMENT===1){const y=f[0];if(y.byteLength===0)return p.exports.sqlite3_randomness(0,0),y;const q=p.pstack.pointer;try{let w=y.byteLength,U=0;const be=p.exports.sqlite3_randomness,De=p.heap8u(),it=w<512?w:512,Ye=p.pstack.alloc(it);do{const st=w>it?it:w;be(st,Ye),y.set(Q(De,Ye,Ye+st),U),w-=st,U+=st}while(w>0)}catch(w){console.error("Highly unexpected (and ignored!) exception in sqlite3_randomness():",w)}finally{p.pstack.restore(q)}return y}p.exports.sqlite3_randomness(...f)};let he;if(u.sqlite3_wasmfs_opfs_dir=function(){if(he!==void 0)return he;const f=c.wasmfsOpfsDir;if(!f||!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle)return he="";try{return f&&p.xCallWrapped("sqlite3__wasm_init_wasmfs","i32",["string"],f)===0?he=f:he=""}catch{return he=""}},u.sqlite3_wasmfs_filename_is_persistent=function(f){const y=u.sqlite3_wasmfs_opfs_dir();return y&&f?f.startsWith(y+"/"):!1},u.sqlite3_js_db_uses_vfs=function(f,y,q=0){try{const w=u.sqlite3_vfs_find(y);return w?f?w===u.sqlite3_js_db_vfs(f,q)?w:!1:w===u.sqlite3_vfs_find(0)?w:!1:!1}catch{return!1}},u.sqlite3_js_vfs_list=function(){const f=[];let y=u.sqlite3_vfs_find(0);for(;y;){const q=new u.sqlite3_vfs(y);f.push(p.cstrToJs(q.$zName)),y=q.$pNext,q.dispose()}return f},u.sqlite3_js_db_export=function(f,y=0){f=p.xWrap.testConvertArg("sqlite3*",f),f||re("Invalid sqlite3* argument."),p.bigIntEnabled||re("BigInt64 support is not enabled.");const q=p.scopedAllocPush();let w;try{const U=p.scopedAlloc(8+p.ptrSizeof),be=U+8,De=y?p.isPtr(y)?y:p.scopedAllocCString(""+y):0;let it=p.exports.sqlite3__wasm_db_serialize(f,De,be,U,0);it&&re("Database serialization failed with code",ge.capi.sqlite3_js_rc_str(it)),w=p.peekPtr(be);const Ye=p.peek(U,"i64");return it=Ye?p.heap8u().slice(w,w+Number(Ye)):new Uint8Array,it}finally{w&&p.exports.sqlite3_free(w),p.scopedAllocPop(q)}},u.sqlite3_js_db_vfs=(f,y=0)=>P.sqlite3__wasm_db_vfs(f,y),u.sqlite3_js_aggregate_context=(f,y)=>u.sqlite3_aggregate_context(f,y)||(y?A.toss("Cannot allocate",y,"bytes for sqlite3_aggregate_context()"):0),u.sqlite3_js_posix_create_file=function(f,y,q){let w;y&&p.isPtr(y)?w=y:y instanceof ArrayBuffer||y instanceof Uint8Array?(w=p.allocFromTypedArray(y),(arguments.length<3||!P.isInt32(q)||q<0)&&(q=y.byteLength)):ee.toss("Invalid 2nd argument for sqlite3_js_posix_create_file().");try{(!P.isInt32(q)||q<0)&&ee.toss("Invalid 3rd argument for sqlite3_js_posix_create_file().");const U=P.sqlite3__wasm_posix_create_file(f,w,q);U&&ee.toss("Creation of file failed with sqlite3 result code",u.sqlite3_js_rc_str(U))}finally{p.dealloc(w)}},u.sqlite3_js_vfs_create_file=function(f,y,q,w){c.warn("sqlite3_js_vfs_create_file() is deprecated and","should be avoided because it can lead to C-level crashes.","See its documentation for alternative options.");let U;q?(p.isPtr(q)?U=q:q instanceof ArrayBuffer&&(q=new Uint8Array(q)),q instanceof Uint8Array?(U=p.allocFromTypedArray(q),(arguments.length<4||!P.isInt32(w)||w<0)&&(w=q.byteLength)):ee.toss("Invalid 3rd argument type for sqlite3_js_vfs_create_file().")):U=0,(!P.isInt32(w)||w<0)&&(p.dealloc(U),ee.toss("Invalid 4th argument for sqlite3_js_vfs_create_file()."));try{const be=P.sqlite3__wasm_vfs_create_file(f,y,U,w);be&&ee.toss("Creation of file failed with sqlite3 result code",u.sqlite3_js_rc_str(be))}finally{p.dealloc(U)}},u.sqlite3_js_sql_to_string=f=>{if(typeof f=="string")return f;const y=b(v);return y===v?void 0:y},P.isUIThread()){const f=function(y){const q=Object.create(null);return q.prefix="kvvfs-"+y,q.stores=[],(y==="session"||y==="")&&q.stores.push(globalThis.sessionStorage),(y==="local"||y==="")&&q.stores.push(globalThis.localStorage),q};u.sqlite3_js_kvvfs_clear=function(y=""){let q=0;const w=f(y);return w.stores.forEach(U=>{const be=[];let De;for(De=0;De<U.length;++De){const it=U.key(De);it.startsWith(w.prefix)&&be.push(it)}be.forEach(it=>U.removeItem(it)),q+=be.length}),q},u.sqlite3_js_kvvfs_size=function(y=""){let q=0;const w=f(y);return w.stores.forEach(U=>{let be;for(be=0;be<U.length;++be){const De=U.key(be);De.startsWith(w.prefix)&&(q+=De.length,q+=U.getItem(De).length)}}),q*2}}u.sqlite3_db_config=(function(f,y,...q){switch(y){case u.SQLITE_DBCONFIG_ENABLE_FKEY:case u.SQLITE_DBCONFIG_ENABLE_TRIGGER:case u.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:case u.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:case u.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:case u.SQLITE_DBCONFIG_ENABLE_QPSG:case u.SQLITE_DBCONFIG_TRIGGER_EQP:case u.SQLITE_DBCONFIG_RESET_DATABASE:case u.SQLITE_DBCONFIG_DEFENSIVE:case u.SQLITE_DBCONFIG_WRITABLE_SCHEMA:case u.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:case u.SQLITE_DBCONFIG_DQS_DML:case u.SQLITE_DBCONFIG_DQS_DDL:case u.SQLITE_DBCONFIG_ENABLE_VIEW:case u.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:case u.SQLITE_DBCONFIG_TRUSTED_SCHEMA:case u.SQLITE_DBCONFIG_STMT_SCANSTATUS:case u.SQLITE_DBCONFIG_REVERSE_SCANORDER:case u.SQLITE_DBCONFIG_ENABLE_ATTACH_CREATE:case u.SQLITE_DBCONFIG_ENABLE_ATTACH_WRITE:case u.SQLITE_DBCONFIG_ENABLE_COMMENTS:return this.ip||(this.ip=p.xWrap("sqlite3__wasm_db_config_ip","int",["sqlite3*","int","int","*"])),this.ip(f,y,q[0],q[1]||0);case u.SQLITE_DBCONFIG_LOOKASIDE:return this.pii||(this.pii=p.xWrap("sqlite3__wasm_db_config_pii","int",["sqlite3*","int","*","int","int"])),this.pii(f,y,q[0],q[1],q[2]);case u.SQLITE_DBCONFIG_MAINDBNAME:return this.s||(this.s=p.xWrap("sqlite3__wasm_db_config_s","int",["sqlite3*","int","string:static"])),this.s(f,y,q[0]);default:return u.SQLITE_MISUSE}}).bind(Object.create(null)),u.sqlite3_value_to_js=function(f,y=!0){let q;const w=u.sqlite3_value_type(f);switch(w){case u.SQLITE_INTEGER:p.bigIntEnabled?(q=u.sqlite3_value_int64(f),P.bigIntFitsDouble(q)&&(q=Number(q))):q=u.sqlite3_value_double(f);break;case u.SQLITE_FLOAT:q=u.sqlite3_value_double(f);break;case u.SQLITE_TEXT:q=u.sqlite3_value_text(f);break;case u.SQLITE_BLOB:{const U=u.sqlite3_value_bytes(f),be=u.sqlite3_value_blob(f);U&&!be&&ge.WasmAllocError.toss("Cannot allocate memory for blob argument of",U,"byte(s)"),q=U?p.heap8u().slice(be,be+Number(U)):null;break}case u.SQLITE_NULL:q=null;break;default:y&&re(u.SQLITE_MISMATCH,"Unhandled sqlite3_value_type():",w),q=void 0}return q},u.sqlite3_values_to_js=function(f,y,q=!0){let w;const U=[];for(w=0;w<f;++w)U.push(u.sqlite3_value_to_js(p.peekPtr(y+p.ptrSizeof*w),q));return U},u.sqlite3_result_error_js=function(f,y){y instanceof A?u.sqlite3_result_error_nomem(f):u.sqlite3_result_error(f,""+y,-1)},u.sqlite3_result_js=function(f,y){if(y instanceof Error){u.sqlite3_result_error_js(f,y);return}try{switch(typeof y){case"undefined":break;case"boolean":u.sqlite3_result_int(f,y?1:0);break;case"bigint":P.bigIntFits32(y)?u.sqlite3_result_int(f,Number(y)):P.bigIntFitsDouble(y)?u.sqlite3_result_double(f,Number(y)):p.bigIntEnabled?P.bigIntFits64(y)?u.sqlite3_result_int64(f,y):re("BigInt value",y.toString(),"is too BigInt for int64."):re("BigInt value",y.toString(),"is too BigInt.");break;case"number":{let q;P.isInt32(y)?q=u.sqlite3_result_int:p.bigIntEnabled&&Number.isInteger(y)&&P.bigIntFits64(BigInt(y))?q=u.sqlite3_result_int64:q=u.sqlite3_result_double,q(f,y);break}case"string":{const[q,w]=p.allocCString(y,!0);u.sqlite3_result_text(f,q,w,u.SQLITE_WASM_DEALLOC);break}case"object":if(y===null){u.sqlite3_result_null(f);break}else if(P.isBindableTypedArray(y)){const q=p.allocFromTypedArray(y);u.sqlite3_result_blob(f,q,y.byteLength,u.SQLITE_WASM_DEALLOC);break}default:re("Don't not how to handle this UDF result value:",typeof y,y)}}catch(q){u.sqlite3_result_error_js(f,q)}},u.sqlite3_column_js=function(f,y,q=!0){const w=u.sqlite3_column_value(f,y);return w===0?void 0:u.sqlite3_value_to_js(w,q)};const Z=(function(f,y,q){q=u[q],this.ptr?p.pokePtr(this.ptr,0):this.ptr=p.allocPtr();const w=q(f,y,this.ptr);if(w)return ee.toss(w,arguments[2]+"() failed with code "+w);const U=p.peekPtr(this.ptr);return U?u.sqlite3_value_to_js(U,!0):void 0}).bind(Object.create(null));u.sqlite3_preupdate_new_js=(f,y)=>Z(f,y,"sqlite3_preupdate_new"),u.sqlite3_preupdate_old_js=(f,y)=>Z(f,y,"sqlite3_preupdate_old"),u.sqlite3changeset_new_js=(f,y)=>Z(f,y,"sqlite3changeset_new"),u.sqlite3changeset_old_js=(f,y)=>Z(f,y,"sqlite3changeset_old");const ge={WasmAllocError:A,SQLite3Error:ee,capi:u,util:P,wasm:p,config:c,version:Object.create(null),client:void 0,asyncPostInit:async function f(){if(f.isReady instanceof Promise)return f.isReady;let y=a.initializersAsync;delete a.initializersAsync;const q=async()=>(ge.__isUnderTest||(delete ge.util,delete ge.StructBinder),ge),w=be=>{throw c.error("an async sqlite3 initializer failed:",be),be};if(!y||!y.length)return f.isReady=q().catch(w);y=y.map(be=>be instanceof Function?async De=>be(ge):be),y.push(q);let U=Promise.resolve(ge);for(;y.length;)U=U.then(y.shift());return f.isReady=U.catch(w)},scriptInfo:void 0};try{a.initializers.forEach(f=>{f(ge)})}catch(f){throw console.error("sqlite3 bootstrap initializer threw:",f),f}return delete a.initializers,a.sqlite3=ge,ge},globalThis.sqlite3ApiBootstrap.initializers=[],globalThis.sqlite3ApiBootstrap.initializersAsync=[],globalThis.sqlite3ApiBootstrap.defaultConfig=Object.create(null),globalThis.sqlite3ApiBootstrap.sqlite3=void 0,globalThis.WhWasmUtilInstaller=function(a){a.bigIntEnabled===void 0&&(a.bigIntEnabled=!!globalThis.BigInt64Array);const d=(...b)=>{throw new Error(b.join(" "))};a.exports||Object.defineProperty(a,"exports",{enumerable:!0,configurable:!0,get:()=>a.instance&&a.instance.exports});const c=a.pointerIR||"i32",u=a.ptrSizeof=c==="i32"?4:c==="i64"?8:d("Unhandled ptrSizeof:",c),p=Object.create(null);p.heapSize=0,p.memory=null,p.freeFuncIndexes=[],p.scopedAlloc=[],p.utf8Decoder=new TextDecoder,p.utf8Encoder=new TextEncoder("utf-8"),a.sizeofIR=b=>{switch(b){case"i8":return 1;case"i16":return 2;case"i32":case"f32":case"float":return 4;case"i64":case"f64":case"double":return 8;case"*":return u;default:return(""+b).endsWith("*")?u:void 0}};const O=function(){if(!p.memory)p.memory=a.memory instanceof WebAssembly.Memory?a.memory:a.exports.memory;else if(p.heapSize===p.memory.buffer.byteLength)return p;const b=p.memory.buffer;return p.HEAP8=new Int8Array(b),p.HEAP8U=new Uint8Array(b),p.HEAP16=new Int16Array(b),p.HEAP16U=new Uint16Array(b),p.HEAP32=new Int32Array(b),p.HEAP32U=new Uint32Array(b),a.bigIntEnabled&&(p.HEAP64=new BigInt64Array(b),p.HEAP64U=new BigUint64Array(b)),p.HEAP32F=new Float32Array(b),p.HEAP64F=new Float64Array(b),p.heapSize=b.byteLength,p};a.heap8=()=>O().HEAP8,a.heap8u=()=>O().HEAP8U,a.heap16=()=>O().HEAP16,a.heap16u=()=>O().HEAP16U,a.heap32=()=>O().HEAP32,a.heap32u=()=>O().HEAP32U,a.heapForSize=function(b,A=!0){const P=p.memory&&p.heapSize===p.memory.buffer.byteLength?p:O();switch(b){case Int8Array:return P.HEAP8;case Uint8Array:return P.HEAP8U;case Int16Array:return P.HEAP16;case Uint16Array:return P.HEAP16U;case Int32Array:return P.HEAP32;case Uint32Array:return P.HEAP32U;case 8:return A?P.HEAP8U:P.HEAP8;case 16:return A?P.HEAP16U:P.HEAP16;case 32:return A?P.HEAP32U:P.HEAP32;case 64:if(P.HEAP64)return A?P.HEAP64U:P.HEAP64;break;default:if(a.bigIntEnabled){if(b===globalThis.BigUint64Array)return P.HEAP64U;if(b===globalThis.BigInt64Array)return P.HEAP64;break}}d("Invalid heapForSize() size: expecting 8, 16, 32,","or (if BigInt is enabled) 64.")},a.functionTable=function(){return a.exports.__indirect_function_table},a.functionEntry=function(b){const A=a.functionTable();return b<A.length?A.get(b):void 0},a.jsFuncToWasm=function b(A,P){if(b._||(b._={sigTypes:Object.assign(Object.create(null),{i:"i32",p:"i32",P:"i32",s:"i32",j:"i64",f:"f32",d:"f64"}),typeCodes:Object.assign(Object.create(null),{f64:124,f32:125,i64:126,i32:127}),uleb128Encode:function(ge,f,y){y<128?ge[f](y):ge[f](y%128|128,y>>7)},rxJSig:/^(\w)\((\w*)\)$/,sigParams:function(ge){const f=b._.rxJSig.exec(ge);return f?f[2]:ge.substr(1)},letterType:ge=>b._.sigTypes[ge]||d("Invalid signature letter:",ge),pushSigType:(ge,f)=>ge.push(b._.typeCodes[b._.letterType(f)])}),typeof A=="string"){const ge=P;P=A,A=ge}const he=b._.sigParams(P),Z=[1,96];b._.uleb128Encode(Z,"push",he.length);for(const ge of he)b._.pushSigType(Z,ge);return P[0]==="v"?Z.push(0):(Z.push(1),b._.pushSigType(Z,P[0])),b._.uleb128Encode(Z,"unshift",Z.length),Z.unshift(0,97,115,109,1,0,0,0,1),Z.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array(Z)),{e:{f:A}}).exports.f};const C=function(A,P,he){if(he&&!p.scopedAlloc.length&&d("No scopedAllocPush() scope is active."),typeof A=="string"){const y=P;P=A,A=y}(typeof P!="string"||!(A instanceof Function))&&d("Invalid arguments: expecting (function,signature) or (signature,function).");const Z=a.functionTable(),ge=Z.length;let f;for(;p.freeFuncIndexes.length&&(f=p.freeFuncIndexes.pop(),Z.get(f));){f=null;continue}f||(f=ge,Z.grow(1));try{return Z.set(f,A),he&&p.scopedAlloc[p.scopedAlloc.length-1].push(f),f}catch(y){if(!(y instanceof TypeError))throw f===ge&&p.freeFuncIndexes.push(ge),y}try{const y=a.jsFuncToWasm(A,P);Z.set(f,y),he&&p.scopedAlloc[p.scopedAlloc.length-1].push(f)}catch(y){throw f===ge&&p.freeFuncIndexes.push(ge),y}return f};a.installFunction=(b,A)=>C(b,A,!1),a.scopedInstallFunction=(b,A)=>C(b,A,!0),a.uninstallFunction=function(b){if(!b&&b!==0)return;const A=p.freeFuncIndexes,P=a.functionTable();A.push(b);const he=P.get(b);return P.set(b,null),he},a.peek=function(A,P="i8"){P.endsWith("*")&&(P=c);const he=p.memory&&p.heapSize===p.memory.buffer.byteLength?p:O(),Z=Array.isArray(A)?[]:void 0;let ge;do{switch(Z&&(A=arguments[0].shift()),P){case"i1":case"i8":ge=he.HEAP8[A>>0];break;case"i16":ge=he.HEAP16[A>>1];break;case"i32":ge=he.HEAP32[A>>2];break;case"float":case"f32":ge=he.HEAP32F[A>>2];break;case"double":case"f64":ge=Number(he.HEAP64F[A>>3]);break;case"i64":if(a.bigIntEnabled){ge=BigInt(he.HEAP64[A>>3]);break}default:d("Invalid type for peek():",P)}Z&&Z.push(ge)}while(Z&&arguments[0].length);return Z||ge},a.poke=function(b,A,P="i8"){P.endsWith("*")&&(P=c);const he=p.memory&&p.heapSize===p.memory.buffer.byteLength?p:O();for(const Z of Array.isArray(b)?b:[b])switch(P){case"i1":case"i8":he.HEAP8[Z>>0]=A;continue;case"i16":he.HEAP16[Z>>1]=A;continue;case"i32":he.HEAP32[Z>>2]=A;continue;case"float":case"f32":he.HEAP32F[Z>>2]=A;continue;case"double":case"f64":he.HEAP64F[Z>>3]=A;continue;case"i64":if(he.HEAP64){he.HEAP64[Z>>3]=BigInt(A);continue}default:d("Invalid type for poke(): "+P)}return this},a.peekPtr=(...b)=>a.peek(b.length===1?b[0]:b,c),a.pokePtr=(b,A=0)=>a.poke(b,A,c),a.peek8=(...b)=>a.peek(b.length===1?b[0]:b,"i8"),a.poke8=(b,A)=>a.poke(b,A,"i8"),a.peek16=(...b)=>a.peek(b.length===1?b[0]:b,"i16"),a.poke16=(b,A)=>a.poke(b,A,"i16"),a.peek32=(...b)=>a.peek(b.length===1?b[0]:b,"i32"),a.poke32=(b,A)=>a.poke(b,A,"i32"),a.peek64=(...b)=>a.peek(b.length===1?b[0]:b,"i64"),a.poke64=(b,A)=>a.poke(b,A,"i64"),a.peek32f=(...b)=>a.peek(b.length===1?b[0]:b,"f32"),a.poke32f=(b,A)=>a.poke(b,A,"f32"),a.peek64f=(...b)=>a.peek(b.length===1?b[0]:b,"f64"),a.poke64f=(b,A)=>a.poke(b,A,"f64"),a.getMemValue=a.peek,a.getPtrValue=a.peekPtr,a.setMemValue=a.poke,a.setPtrValue=a.pokePtr,a.isPtr32=b=>typeof b=="number"&&b===(b|0)&&b>=0,a.isPtr=a.isPtr32,a.cstrlen=function(b){if(!b||!a.isPtr(b))return null;const A=O().HEAP8U;let P=b;for(;A[P]!==0;++P);return P-b};const ee=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,re=function(b,A,P){return p.utf8Decoder.decode(b.buffer instanceof ee?b.slice(A,P):b.subarray(A,P))};a.cstrToJs=function(b){const A=a.cstrlen(b);return A?re(O().HEAP8U,b,b+A):A===null?A:""},a.jstrlen=function(b){if(typeof b!="string")return null;const A=b.length;let P=0;for(let he=0;he<A;++he){let Z=b.charCodeAt(he);Z>=55296&&Z<=57343&&(Z=65536+((Z&1023)<<10)|b.charCodeAt(++he)&1023),Z<=127?++P:Z<=2047?P+=2:Z<=65535?P+=3:P+=4}return P},a.jstrcpy=function(b,A,P=0,he=-1,Z=!0){if((!A||!(A instanceof Int8Array)&&!(A instanceof Uint8Array))&&d("jstrcpy() target must be an Int8Array or Uint8Array."),he<0&&(he=A.length-P),!(he>0)||!(P>=0))return 0;let ge=0,f=b.length;const y=P,q=P+he-(Z?1:0);for(;ge<f&&P<q;++ge){let w=b.charCodeAt(ge);if(w>=55296&&w<=57343&&(w=65536+((w&1023)<<10)|b.charCodeAt(++ge)&1023),w<=127){if(P>=q)break;A[P++]=w}else if(w<=2047){if(P+1>=q)break;A[P++]=192|w>>6,A[P++]=128|w&63}else if(w<=65535){if(P+2>=q)break;A[P++]=224|w>>12,A[P++]=128|w>>6&63,A[P++]=128|w&63}else{if(P+3>=q)break;A[P++]=240|w>>18,A[P++]=128|w>>12&63,A[P++]=128|w>>6&63,A[P++]=128|w&63}}return Z&&(A[P++]=0),P-y},a.cstrncpy=function(b,A,P){if((!b||!A)&&d("cstrncpy() does not accept NULL strings."),P<0)P=a.cstrlen(strPtr)+1;else if(!(P>0))return 0;const he=a.heap8u();let Z=0,ge;for(;Z<P&&(ge=he[A+Z]);++Z)he[b+Z]=ge;return Z<P&&(he[b+Z++]=0),Z},a.jstrToUintArray=(b,A=!1)=>p.utf8Encoder.encode(A?b+"\0":b);const _e=(b,A)=>{(!(b.alloc instanceof Function)||!(b.dealloc instanceof Function))&&d("Object is missing alloc() and/or dealloc() function(s)","required by",A+"().")},xe=function(b,A,P,he){if(_e(a,he),typeof b!="string")return null;{const Z=p.utf8Encoder.encode(b),ge=P(Z.length+1),f=O().HEAP8U;return f.set(Z,ge),f[ge+Z.length]=0,A?[ge,Z.length]:ge}};a.allocCString=(b,A=!1)=>xe(b,A,a.alloc,"allocCString()"),a.scopedAllocPush=function(){_e(a,"scopedAllocPush");const b=[];return p.scopedAlloc.push(b),b},a.scopedAllocPop=function(b){_e(a,"scopedAllocPop");const A=arguments.length?p.scopedAlloc.indexOf(b):p.scopedAlloc.length-1;A<0&&d("Invalid state object for scopedAllocPop()."),arguments.length===0&&(b=p.scopedAlloc[A]),p.scopedAlloc.splice(A,1);for(let P;P=b.pop();)a.functionEntry(P)?a.uninstallFunction(P):a.dealloc(P)},a.scopedAlloc=function(b){p.scopedAlloc.length||d("No scopedAllocPush() scope is active.");const A=a.alloc(b);return p.scopedAlloc[p.scopedAlloc.length-1].push(A),A},Object.defineProperty(a.scopedAlloc,"level",{configurable:!1,enumerable:!1,get:()=>p.scopedAlloc.length,set:()=>d("The 'active' property is read-only.")}),a.scopedAllocCString=(b,A=!1)=>xe(b,A,a.scopedAlloc,"scopedAllocCString()");const X=function(b,A){const P=a[b?"scopedAlloc":"alloc"]((A.length+1)*a.ptrSizeof);let he=0;return A.forEach(Z=>{a.pokePtr(P+a.ptrSizeof*he++,a[b?"scopedAllocCString":"allocCString"](""+Z))}),a.pokePtr(P+a.ptrSizeof*he,0),P};a.scopedAllocMainArgv=b=>X(!0,b),a.allocMainArgv=b=>X(!1,b),a.cArgvToJs=(b,A)=>{const P=[];for(let he=0;he<b;++he){const Z=a.peekPtr(A+a.ptrSizeof*he);P.push(Z?a.cstrToJs(Z):null)}return P},a.scopedAllocCall=function(b){a.scopedAllocPush();try{return b()}finally{a.scopedAllocPop()}};const $=function(b,A,P){_e(a,P);const he=A?"i64":c;let Z=a[P](b*(A?8:u));if(a.poke(Z,0,he),b===1)return Z;const ge=[Z];for(let f=1;f<b;++f)Z+=A?8:u,ge[f]=Z,a.poke(Z,0,he);return ge};a.allocPtr=(b=1,A=!0)=>$(b,A,"alloc"),a.scopedAllocPtr=(b=1,A=!0)=>$(b,A,"scopedAlloc"),a.xGet=function(b){return a.exports[b]||d("Cannot find exported symbol:",b)};const me=(b,A)=>d(b+"() requires",A,"argument(s).");a.xCall=function(b,...A){const P=b instanceof Function?b:a.xGet(b);return P instanceof Function||d("Exported symbol",b,"is not a function."),P.length!==A.length&&me(P===b?P.name:b,P.length),arguments.length===2&&Array.isArray(arguments[1])?P.apply(null,arguments[1]):P.apply(null,A)},p.xWrap=Object.create(null),p.xWrap.convert=Object.create(null),p.xWrap.convert.arg=new Map,p.xWrap.convert.result=new Map;const I=p.xWrap.convert.arg,T=p.xWrap.convert.result;a.bigIntEnabled&&I.set("i64",b=>BigInt(b));const Q=c==="i32"?b=>b|0:b=>BigInt(b)|BigInt(0);I.set("i32",Q).set("i16",b=>(b|0)&65535).set("i8",b=>(b|0)&255).set("f32",b=>Number(b).valueOf()).set("float",I.get("f32")).set("f64",I.get("f32")).set("double",I.get("f64")).set("int",I.get("i32")).set("null",b=>b).set(null,I.get("null")).set("**",Q).set("*",Q),T.set("*",Q).set("pointer",Q).set("number",b=>Number(b)).set("void",b=>{}).set("null",b=>b).set(null,T.get("null"));{const b=["i8","i16","i32","int","f32","float","f64","double"];a.bigIntEnabled&&b.push("i64");const A=I.get(c);for(const P of b)I.set(P+"*",A),T.set(P+"*",A),T.set(P,I.get(P)||d("Missing arg converter:",P))}const z=function(b){return typeof b=="string"?a.scopedAllocCString(b):b?Q(b):null};I.set("string",z).set("utf8",z).set("pointer",z),T.set("string",b=>a.cstrToJs(b)).set("utf8",T.get("string")).set("string:dealloc",b=>{try{return b?a.cstrToJs(b):null}finally{a.dealloc(b)}}).set("utf8:dealloc",T.get("string:dealloc")).set("json",b=>JSON.parse(a.cstrToJs(b))).set("json:dealloc",b=>{try{return b?JSON.parse(a.cstrToJs(b)):null}finally{a.dealloc(b)}});const te=class{constructor(b){this.name=b.name||"unnamed adapter"}convertArg(b,A,P){d("AbstractArgAdapter must be subclassed.")}};I.FuncPtrAdapter=class ri extends te{constructor(A){super(A),I.FuncPtrAdapter.warnOnUse&&console.warn("xArg.FuncPtrAdapter is an internal-only API","and is not intended to be invoked from","client-level code. Invoked with:",A),this.name=A.name||"unnamed",this.signature=A.signature,A.contextKey instanceof Function&&(this.contextKey=A.contextKey,A.bindScope||(A.bindScope="context")),this.bindScope=A.bindScope||d("FuncPtrAdapter options requires a bindScope (explicit or implied)."),ri.bindScopes.indexOf(A.bindScope)<0&&d("Invalid options.bindScope ("+A.bindMod+") for FuncPtrAdapter. Expecting one of: ("+ri.bindScopes.join(", ")+")"),this.isTransient=this.bindScope==="transient",this.isContext=this.bindScope==="context",this.isPermanent=this.bindScope==="permanent",this.singleton=this.bindScope==="singleton"?[]:void 0,this.callProxy=A.callProxy instanceof Function?A.callProxy:void 0}contextKey(A,P){return this}contextMap(A){const P=this.__cmap||(this.__cmap=new Map);let he=P.get(A);return he===void 0&&P.set(A,he=[]),he}convertArg(A,P,he){let Z=this.singleton;if(!Z&&this.isContext&&(Z=this.contextMap(this.contextKey(P,he))),Z&&Z[0]===A)return Z[1];if(A instanceof Function){this.callProxy&&(A=this.callProxy(A));const ge=C(A,this.signature,this.isTransient);if(ri.debugFuncInstall&&ri.debugOut("FuncPtrAdapter installed",this,this.contextKey(P,he),"@"+ge,A),Z){if(Z[1]){ri.debugFuncInstall&&ri.debugOut("FuncPtrAdapter uninstalling",this,this.contextKey(P,he),"@"+Z[1],A);try{p.scopedAlloc[p.scopedAlloc.length-1].push(Z[1])}catch{}}Z[0]=A,Z[1]=ge}return ge}else if(a.isPtr(A)||A===null||A===void 0){if(Z&&Z[1]&&Z[1]!==A){ri.debugFuncInstall&&ri.debugOut("FuncPtrAdapter uninstalling",this,this.contextKey(P,he),"@"+Z[1],A);try{p.scopedAlloc[p.scopedAlloc.length-1].push(Z[1])}catch{}Z[0]=Z[1]=A|0}return A||0}else throw new TypeError("Invalid FuncPtrAdapter argument type. Expecting a function pointer or a "+(this.name?this.name+" ":"")+"function matching signature "+this.signature+".")}},I.FuncPtrAdapter.warnOnUse=!1,I.FuncPtrAdapter.debugFuncInstall=!1,I.FuncPtrAdapter.debugOut=console.debug.bind(console),I.FuncPtrAdapter.bindScopes=["transient","context","singleton","permanent"];const D=b=>I.get(b)||d("Argument adapter not found:",b),fe=b=>T.get(b)||d("Result adapter not found:",b);p.xWrap.convertArg=(b,...A)=>D(b)(...A),p.xWrap.convertArgNoCheck=(b,...A)=>I.get(b)(...A),p.xWrap.convertResult=(b,A)=>b===null?A:b?fe(b)(A):void 0,p.xWrap.convertResultNoCheck=(b,A)=>b===null?A:b?T.get(b)(A):void 0,a.xWrap=function(b,A,...P){arguments.length===3&&Array.isArray(arguments[2])&&(P=arguments[2]),a.isPtr(b)&&(b=a.functionEntry(b)||d("Function pointer not found in WASM function table."));const he=b instanceof Function,Z=he?b:a.xGet(b);if(he&&(b=Z.name||"unnamed function"),P.length!==Z.length&&me(b,Z.length),A===null&&Z.length===0)return Z;A!=null&&fe(A);for(const f of P)f instanceof te?I.set(f,(...y)=>f.convertArg(...y)):D(f);const ge=p.xWrap;return Z.length===0?(...f)=>f.length?me(b,Z.length):ge.convertResult(A,Z.call(null)):function(...f){f.length!==Z.length&&me(b,Z.length);const y=a.scopedAllocPush();try{let q=0;for(;q<f.length;++q)f[q]=ge.convertArgNoCheck(P[q],f[q],f,q);return ge.convertResultNoCheck(A,Z.apply(null,f))}finally{a.scopedAllocPop(y)}}};const ue=function(b,A,P,he,Z,ge){if(typeof P=="string"){if(A===1)return ge.get(P);if(A===2){if(he)he instanceof Function||d(Z,"requires a function argument.");else return ge.delete(P),b;return ge.set(P,he),b}}d("Invalid arguments to",Z)};return a.xWrap.resultAdapter=function b(A,P){return ue(b,arguments.length,A,P,"resultAdapter()",T)},a.xWrap.argAdapter=function b(A,P){return ue(b,arguments.length,A,P,"argAdapter()",I)},a.xWrap.FuncPtrAdapter=I.FuncPtrAdapter,a.xCallWrapped=function(b,A,P,...he){return Array.isArray(arguments[3])&&(he=arguments[3]),a.xWrap(b,A,P||[]).apply(null,he||[])},a.xWrap.testConvertArg=p.xWrap.convertArg,a.xWrap.testConvertResult=p.xWrap.convertResult,a},globalThis.WhWasmUtilInstaller.yawl=(function(a){const d=()=>fetch(a.uri,{credentials:"same-origin"}),c=this,u=function(O){if(a.wasmUtilTarget){const C=(...re)=>{throw new Error(re.join(" "))},ee=a.wasmUtilTarget;if(ee.module=O.module,ee.instance=O.instance,ee.instance.exports.memory||(ee.memory=a.imports&&a.imports.env&&a.imports.env.memory||C("Missing 'memory' object!")),!ee.alloc&&O.instance.exports.malloc){const re=O.instance.exports;ee.alloc=function(_e){return re.malloc(_e)||C("Allocation of",_e,"bytes failed.")},ee.dealloc=function(_e){re.free(_e)}}c(ee)}return a.onload&&a.onload(O,a),O};return WebAssembly.instantiateStreaming?function(){return WebAssembly.instantiateStreaming(d(),a.imports||{}).then(u)}:function(){return d().then(C=>C.arrayBuffer()).then(C=>WebAssembly.instantiate(C,a.imports||{})).then(u)}}).bind(globalThis.WhWasmUtilInstaller),globalThis.Jaccwabyt=function a(d){const c=(...N)=>{throw new Error(N.join(" "))};!(d.heap instanceof WebAssembly.Memory)&&!(d.heap instanceof Function)&&c("config.heap must be WebAssembly.Memory instance or a function."),["alloc","dealloc"].forEach(function(N){d[N]instanceof Function||c("Config option '"+N+"' must be a function.")});const u=a,p=d.heap instanceof Function?d.heap:()=>new Uint8Array(d.heap.buffer),O=d.alloc,C=d.dealloc,ee=d.log||console.log.bind(console),re=d.memberPrefix||"",_e=d.memberSuffix||"",xe=d.bigIntEnabled===void 0?!!globalThis.BigInt64Array:!!d.bigIntEnabled,X=globalThis.BigInt,$=globalThis.BigInt64Array,me=d.ptrSizeof||4,I=d.ptrIR||"i32";u.debugFlags||(u.__makeDebugFlags=function(N=null){N&&N.__flags&&(N=N.__flags);const L=function B(V){return arguments.length===0?B.__flags:(V<0?(delete B.__flags.getter,delete B.__flags.setter,delete B.__flags.alloc,delete B.__flags.dealloc):(B.__flags.getter=(1&V)!==0,B.__flags.setter=(2&V)!==0,B.__flags.alloc=(4&V)!==0,B.__flags.dealloc=(8&V)!==0),B._flags)};return Object.defineProperty(L,"__flags",{iterable:!1,writable:!1,value:Object.create(N)}),N||L(0),L},u.debugFlags=u.__makeDebugFlags());const T=function(){const N=new ArrayBuffer(2);return new DataView(N).setInt16(0,256,!0),new Int16Array(N)[0]===256}(),Q=N=>N[1]==="(",z=N=>N==="P",te=N=>Q(N)?"p":N[0],D=function(N){switch(te(N)){case"c":case"C":return"i8";case"i":return"i32";case"p":case"P":case"s":return I;case"j":return"i64";case"f":return"float";case"d":return"double"}c("Unhandled signature IR:",N)},fe=$?()=>!0:()=>c("BigInt64Array is not available."),ue=function(N){switch(te(N)){case"p":case"P":case"s":{switch(me){case 4:return"getInt32";case 8:return fe()&&"getBigInt64"}break}case"i":return"getInt32";case"c":return"getInt8";case"C":return"getUint8";case"j":return fe()&&"getBigInt64";case"f":return"getFloat32";case"d":return"getFloat64"}c("Unhandled DataView getter for signature:",N)},b=function(N){switch(te(N)){case"p":case"P":case"s":{switch(me){case 4:return"setInt32";case 8:return fe()&&"setBigInt64"}break}case"i":return"setInt32";case"c":return"setInt8";case"C":return"setUint8";case"j":return fe()&&"setBigInt64";case"f":return"setFloat32";case"d":return"setFloat64"}c("Unhandled DataView setter for signature:",N)},A=function(N){switch(te(N)){case"i":case"f":case"c":case"C":case"d":return Number;case"j":return fe()&&X;case"p":case"P":case"s":switch(me){case 4:return Number;case 8:return fe()&&X}break}c("Unhandled DataView set wrapper for signature:",N)},P=(N,L)=>N+"::"+L,he=function(N,L){return()=>c(P(N,L),"is read-only.")},Z=new WeakMap,ge="(pointer-is-external)",f=function(N,L,B){if(B||(B=Z.get(L)),B){if(Z.delete(L),Array.isArray(L.ondispose)){let V;for(;V=L.ondispose.shift();)try{V instanceof Function?V.call(L):V instanceof Ne?V.dispose():typeof V=="number"&&C(V)}catch(we){console.warn("ondispose() for",N.structName,"@",B,"threw. NOT propagating it.",we)}}else if(L.ondispose instanceof Function)try{L.ondispose()}catch(V){console.warn("ondispose() for",N.structName,"@",B,"threw. NOT propagating it.",V)}delete L.ondispose,N.debugFlags.__flags.dealloc&&ee("debug.dealloc:",L[ge]?"EXTERNAL":"",N.structName,"instance:",N.structInfo.sizeof,"bytes @"+B),L[ge]||C(B)}},y=N=>({configurable:!1,writable:!1,iterable:!1,value:N}),q=function(N,L,B){let V=!B;B?Object.defineProperty(L,ge,y(B)):(B=O(N.structInfo.sizeof),B||c("Allocation of",N.structName,"structure failed."));try{N.debugFlags.__flags.alloc&&ee("debug.alloc:",V?"":"EXTERNAL",N.structName,"instance:",N.structInfo.sizeof,"bytes @"+B),V&&p().fill(0,B,B+N.structInfo.sizeof),Z.set(L,B)}catch(we){throw f(N,L,B),we}},w=function(){const N=this.pointer;return N?new Uint8Array(p().slice(N,N+this.structInfo.sizeof)):null},be=y(N=>re+N+_e),De=function(N,L,B=!0){let V=N.members[L];if(!V&&(re||_e)){for(const we of Object.values(N.members))if(we.key===L){V=we;break}!V&&B&&c(P(N.name,L),"is not a mapped struct member.")}return V},it=function N(L,B,V=!1){N._||(N._=Te=>Te.replace(/[^vipPsjrdcC]/g,"").replace(/[pPscC]/g,"i"));const we=De(L.structInfo,B,!0);return V?N._(we.signature):we.signature},Ye={configurable:!1,enumerable:!1,get:function(){return Z.get(this)},set:()=>c("Cannot assign the 'pointer' property of a struct.")},st=y(function(){const N=[];for(const L of Object.keys(this.structInfo.members))N.push(this.memberKey(L));return N}),ot=new TextDecoder("utf-8"),tt=new TextEncoder,rt=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,at=function(N,L,B){return ot.decode(N.buffer instanceof rt?N.slice(L,B):N.subarray(L,B))},or=function(N,L,B=!1){const V=De(N.structInfo,L,B);return V&&V.signature.length===1&&V.signature[0]==="s"?V:!1},ar=function(N){N.signature!=="s"&&c("Invalid member type signature for C-string value:",JSON.stringify(N))},j=function(L,B){const V=De(L.structInfo,B,!0);ar(V);const we=L[V.key];if(!we)return null;let Te=we;const Je=p();for(;Je[Te]!==0;++Te);return we===Te?"":at(Je,we,Te)},oe=function(N,...L){N.ondispose?Array.isArray(N.ondispose)||(N.ondispose=[N.ondispose]):N.ondispose=[],N.ondispose.push(...L)},ae=function(N){const L=tt.encode(N),B=O(L.length+1);B||c("Allocation error while duplicating string:",N);const V=p();return V.set(L,B),V[B+L.length]=0,B},Ae=function(N,L,B){const V=De(N.structInfo,L,!0);ar(V);const we=ae(B);return N[V.key]=we,oe(N,we),N},Ne=function(L,B){arguments[2]!==y&&c("Do not call the StructType constructor","from client-level code."),Object.defineProperties(this,{structName:y(L),structInfo:y(B)})};Ne.prototype=Object.create(null,{dispose:y(function(){f(this.constructor,this)}),lookupMember:y(function(N,L=!0){return De(this.structInfo,N,L)}),memberToJsString:y(function(N){return j(this,N)}),memberIsString:y(function(N,L=!0){return or(this,N,L)}),memberKey:be,memberKeys:st,memberSignature:y(function(N,L=!1){return it(this,N,L)}),memoryDump:y(w),pointer:Ye,setMemberCString:y(function(N,L){return Ae(this,N,L)})}),Object.assign(Ne.prototype,{addOnDispose:function(...N){return oe(this,...N),this}}),Object.defineProperties(Ne,{allocCString:y(ae),isA:y(N=>N instanceof Ne),hasExternalPointer:y(N=>N instanceof Ne&&!!N[ge]),memberKey:be});const Ke=N=>Number.isFinite(N)||N instanceof(X||Number),Me=function N(L,B,V){if(!N._){N._={getters:{},setters:{},sw:{}};const mr=["i","c","C","p","P","s","f","d","v()"];xe&&mr.push("j"),mr.forEach(function(Ln){N._.getters[Ln]=ue(Ln),N._.setters[Ln]=b(Ln),N._.sw[Ln]=A(Ln)});const TN=/^[ipPsjfdcC]$/,CN=/^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;N.sigCheck=function(Ln,PN,yp,Uu){Object.prototype.hasOwnProperty.call(Ln,yp)&&c(Ln.structName,"already has a property named",yp+"."),TN.test(Uu)||CN.test(Uu)||c("Malformed signature for",P(Ln.structName,PN)+":",Uu)}}const we=L.memberKey(B);N.sigCheck(L.prototype,B,we,V.signature),V.key=we,V.name=B;const Te=te(V.signature),Je=P(L.prototype.structName,we),lt=L.prototype.debugFlags.__flags,kr=Object.create(null);kr.configurable=!1,kr.enumerable=!1,kr.get=function(){lt.getter&&ee("debug.getter:",N._.getters[Te],"for",D(Te),Je,"@",this.pointer,"+",V.offset,"sz",V.sizeof);let mr=new DataView(p().buffer,this.pointer+V.offset,V.sizeof)[N._.getters[Te]](0,T);return lt.getter&&ee("debug.getter:",Je,"result =",mr),mr},V.readOnly?kr.set=he(L.prototype.structName,we):kr.set=function(mr){if(lt.setter&&ee("debug.setter:",N._.setters[Te],"for",D(Te),Je,"@",this.pointer,"+",V.offset,"sz",V.sizeof,mr),this.pointer||c("Cannot set struct property on disposed instance."),mr===null)mr=0;else for(;!Ke(mr);){if(z(V.signature)&&mr instanceof Ne){mr=mr.pointer||0,lt.setter&&ee("debug.setter:",Je,"resolved to",mr);break}c("Invalid value for pointer-type",Je+".")}new DataView(p().buffer,this.pointer+V.offset,V.sizeof)[N._.setters[Te]](0,N._.sw[Te](mr),T)},Object.defineProperty(L.prototype,we,kr)},G=function N(L,B){arguments.length===1?(B=L,L=B.name):B.name||(B.name=L),L||c("Struct name is required.");let V=!1;Object.keys(B.members).forEach(Je=>{const lt=B.members[Je];lt.sizeof?lt.sizeof===1?lt.signature==="c"||lt.signature==="C"||c("Unexpected sizeof==1 member",P(B.name,Je),"with signature",lt.signature):(lt.sizeof%4!==0&&(console.warn("Invalid struct member description =",lt,"from",B),c(L,"member",Je,"sizeof is not aligned. sizeof="+lt.sizeof)),lt.offset%4!==0&&(console.warn("Invalid struct member description =",lt,"from",B),c(L,"member",Je,"offset is not aligned. offset="+lt.offset))):c(L,"member",Je,"is missing sizeof."),(!V||V.offset<lt.offset)&&(V=lt)}),V?B.sizeof<V.offset+V.sizeof&&c("Invalid struct config:",L,"max member offset ("+V.offset+") ","extends past end of struct (sizeof="+B.sizeof+")."):c("No member property descriptions found.");const we=y(u.__makeDebugFlags(N.debugFlags)),Te=function Je(lt){this instanceof Je?arguments.length?((lt!==(lt|0)||lt<=0)&&c("Invalid pointer value for",L,"constructor."),q(Je,this,lt)):q(Je,this):c("The",L,"constructor may only be called via 'new'.")};return Object.defineProperties(Te,{debugFlags:we,isA:y(Je=>Je instanceof Te),memberKey:be,memberKeys:st,methodInfoForKey:y(function(Je){}),structInfo:y(B),structName:y(L)}),Te.prototype=new Ne(L,B,y),Object.defineProperties(Te.prototype,{debugFlags:we,constructor:y(Te)}),Object.keys(B.members).forEach(Je=>Me(Te,Je,B.members[Je])),Te};return G.StructType=Ne,G.config=d,G.allocCString=ae,G.debugFlags||(G.debugFlags=u.__makeDebugFlags(u.debugFlags)),G},globalThis.sqlite3ApiBootstrap.initializers.push(function(a){const d=(...I)=>{throw new Error(I.join(" "))};a.SQLite3Error.toss;const c=a.capi,u=a.wasm,p=a.util;if(globalThis.WhWasmUtilInstaller(u),delete globalThis.WhWasmUtilInstaller,u.bindingSignatures=[["sqlite3_aggregate_context","void*","sqlite3_context*","int"],["sqlite3_bind_double","int","sqlite3_stmt*","int","f64"],["sqlite3_bind_int","int","sqlite3_stmt*","int","int"],["sqlite3_bind_null",void 0,"sqlite3_stmt*","int"],["sqlite3_bind_parameter_count","int","sqlite3_stmt*"],["sqlite3_bind_parameter_index","int","sqlite3_stmt*","string"],["sqlite3_bind_parameter_name","string","sqlite3_stmt*","int"],["sqlite3_bind_pointer","int","sqlite3_stmt*","int","*","string:static","*"],["sqlite3_busy_handler","int",["sqlite3*",new u.xWrap.FuncPtrAdapter({signature:"i(pi)",contextKey:(I,T)=>I[0]}),"*"]],["sqlite3_busy_timeout","int","sqlite3*","int"],["sqlite3_changes","int","sqlite3*"],["sqlite3_clear_bindings","int","sqlite3_stmt*"],["sqlite3_collation_needed","int","sqlite3*","*","*"],["sqlite3_column_blob","*","sqlite3_stmt*","int"],["sqlite3_column_bytes","int","sqlite3_stmt*","int"],["sqlite3_column_count","int","sqlite3_stmt*"],["sqlite3_column_decltype","string","sqlite3_stmt*","int"],["sqlite3_column_double","f64","sqlite3_stmt*","int"],["sqlite3_column_int","int","sqlite3_stmt*","int"],["sqlite3_column_name","string","sqlite3_stmt*","int"],["sqlite3_column_text","string","sqlite3_stmt*","int"],["sqlite3_column_type","int","sqlite3_stmt*","int"],["sqlite3_column_value","sqlite3_value*","sqlite3_stmt*","int"],["sqlite3_commit_hook","void*",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"sqlite3_commit_hook",signature:"i(p)",contextKey:I=>I[0]}),"*"]],["sqlite3_compileoption_get","string","int"],["sqlite3_compileoption_used","int","string"],["sqlite3_complete","int","string:flexible"],["sqlite3_context_db_handle","sqlite3*","sqlite3_context*"],["sqlite3_data_count","int","sqlite3_stmt*"],["sqlite3_db_filename","string","sqlite3*","string"],["sqlite3_db_handle","sqlite3*","sqlite3_stmt*"],["sqlite3_db_name","string","sqlite3*","int"],["sqlite3_db_readonly","int","sqlite3*","string"],["sqlite3_db_status","int","sqlite3*","int","*","*","int"],["sqlite3_errcode","int","sqlite3*"],["sqlite3_errmsg","string","sqlite3*"],["sqlite3_error_offset","int","sqlite3*"],["sqlite3_errstr","string","int"],["sqlite3_exec","int",["sqlite3*","string:flexible",new u.xWrap.FuncPtrAdapter({signature:"i(pipp)",bindScope:"transient",callProxy:I=>{let T;return(Q,z,te,D)=>{try{const fe=u.cArgvToJs(z,te);return T||(T=u.cArgvToJs(z,D)),I(fe,T)|0}catch(fe){return fe.resultCode||c.SQLITE_ERROR}}}}),"*","**"]],["sqlite3_expanded_sql","string","sqlite3_stmt*"],["sqlite3_extended_errcode","int","sqlite3*"],["sqlite3_extended_result_codes","int","sqlite3*","int"],["sqlite3_file_control","int","sqlite3*","string","int","*"],["sqlite3_finalize","int","sqlite3_stmt*"],["sqlite3_free",void 0,"*"],["sqlite3_get_autocommit","int","sqlite3*"],["sqlite3_get_auxdata","*","sqlite3_context*","int"],["sqlite3_initialize",void 0],["sqlite3_interrupt",void 0,"sqlite3*"],["sqlite3_is_interrupted","int","sqlite3*"],["sqlite3_keyword_count","int"],["sqlite3_keyword_name","int",["int","**","*"]],["sqlite3_keyword_check","int",["string","int"]],["sqlite3_libversion","string"],["sqlite3_libversion_number","int"],["sqlite3_limit","int",["sqlite3*","int","int"]],["sqlite3_malloc","*","int"],["sqlite3_open","int","string","*"],["sqlite3_open_v2","int","string","*","int","string"],["sqlite3_realloc","*","*","int"],["sqlite3_reset","int","sqlite3_stmt*"],["sqlite3_result_blob",void 0,"sqlite3_context*","*","int","*"],["sqlite3_result_double",void 0,"sqlite3_context*","f64"],["sqlite3_result_error",void 0,"sqlite3_context*","string","int"],["sqlite3_result_error_code",void 0,"sqlite3_context*","int"],["sqlite3_result_error_nomem",void 0,"sqlite3_context*"],["sqlite3_result_error_toobig",void 0,"sqlite3_context*"],["sqlite3_result_int",void 0,"sqlite3_context*","int"],["sqlite3_result_null",void 0,"sqlite3_context*"],["sqlite3_result_pointer",void 0,"sqlite3_context*","*","string:static","*"],["sqlite3_result_subtype",void 0,"sqlite3_value*","int"],["sqlite3_result_text",void 0,"sqlite3_context*","string","int","*"],["sqlite3_result_zeroblob",void 0,"sqlite3_context*","int"],["sqlite3_rollback_hook","void*",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"sqlite3_rollback_hook",signature:"v(p)",contextKey:I=>I[0]}),"*"]],["sqlite3_set_auxdata",void 0,["sqlite3_context*","int","*","*"]],["sqlite3_shutdown",void 0],["sqlite3_sourceid","string"],["sqlite3_sql","string","sqlite3_stmt*"],["sqlite3_status","int","int","*","*","int"],["sqlite3_step","int","sqlite3_stmt*"],["sqlite3_stmt_busy","int","sqlite3_stmt*"],["sqlite3_stmt_readonly","int","sqlite3_stmt*"],["sqlite3_stmt_status","int","sqlite3_stmt*","int","int"],["sqlite3_strglob","int","string","string"],["sqlite3_stricmp","int","string","string"],["sqlite3_strlike","int","string","string","int"],["sqlite3_strnicmp","int","string","string","int"],["sqlite3_table_column_metadata","int","sqlite3*","string","string","string","**","**","*","*","*"],["sqlite3_total_changes","int","sqlite3*"],["sqlite3_trace_v2","int",["sqlite3*","int",new u.xWrap.FuncPtrAdapter({name:"sqlite3_trace_v2::callback",signature:"i(ippp)",contextKey:(I,T)=>I[0]}),"*"]],["sqlite3_txn_state","int",["sqlite3*","string"]],["sqlite3_uri_boolean","int","sqlite3_filename","string","int"],["sqlite3_uri_key","string","sqlite3_filename","int"],["sqlite3_uri_parameter","string","sqlite3_filename","string"],["sqlite3_user_data","void*","sqlite3_context*"],["sqlite3_value_blob","*","sqlite3_value*"],["sqlite3_value_bytes","int","sqlite3_value*"],["sqlite3_value_double","f64","sqlite3_value*"],["sqlite3_value_dup","sqlite3_value*","sqlite3_value*"],["sqlite3_value_free",void 0,"sqlite3_value*"],["sqlite3_value_frombind","int","sqlite3_value*"],["sqlite3_value_int","int","sqlite3_value*"],["sqlite3_value_nochange","int","sqlite3_value*"],["sqlite3_value_numeric_type","int","sqlite3_value*"],["sqlite3_value_pointer","*","sqlite3_value*","string:static"],["sqlite3_value_subtype","int","sqlite3_value*"],["sqlite3_value_text","string","sqlite3_value*"],["sqlite3_value_type","int","sqlite3_value*"],["sqlite3_vfs_find","*","string"],["sqlite3_vfs_register","int","sqlite3_vfs*","int"],["sqlite3_vfs_unregister","int","sqlite3_vfs*"]],u.exports.sqlite3_progress_handler&&u.bindingSignatures.push(["sqlite3_progress_handler",void 0,["sqlite3*","int",new u.xWrap.FuncPtrAdapter({name:"xProgressHandler",signature:"i(p)",bindScope:"context",contextKey:(I,T)=>I[0]}),"*"]]),u.exports.sqlite3_stmt_explain&&u.bindingSignatures.push(["sqlite3_stmt_explain","int","sqlite3_stmt*","int"],["sqlite3_stmt_isexplain","int","sqlite3_stmt*"]),u.exports.sqlite3_set_authorizer&&u.bindingSignatures.push(["sqlite3_set_authorizer","int",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"sqlite3_set_authorizer::xAuth",signature:"i(pissss)",contextKey:(I,T)=>I[0],callProxy:I=>(T,Q,z,te,D,fe)=>{try{return z=z&&u.cstrToJs(z),te=te&&u.cstrToJs(te),D=D&&u.cstrToJs(D),fe=fe&&u.cstrToJs(fe),I(T,Q,z,te,D,fe)||0}catch(ue){return ue.resultCode||c.SQLITE_ERROR}}}),"*"]]),u.exports.sqlite3_key_v2 instanceof Function&&u.bindingSignatures.push(["sqlite3_key","int","sqlite3*","string","int"],["sqlite3_key_v2","int","sqlite3*","string","*","int"],["sqlite3_rekey","int","sqlite3*","string","int"],["sqlite3_rekey_v2","int","sqlite3*","string","*","int"],["sqlite3_activate_see",void 0,"string"],["sqlite3mc_cipher_count","int"],["sqlite3mc_cipher_index","int","string"],["sqlite3mc_cipher_name","string","int"],["sqlite3mc_config","int","sqlite3*","string","int"],["sqlite3mc_config_cipher","int","sqlite3*","string","string","int"],["sqlite3mc_codec_data","string","sqlite3*","string","string"],["sqlite3mc_version","string"],["sqlite3mc_vfs_create","int","string","int"],["sqlite3mc_vfs_destroy",void 0,"string"],["sqlite3mc_vfs_shutdown",void 0]),u.bindingSignatures.int64=[["sqlite3_bind_int64","int",["sqlite3_stmt*","int","i64"]],["sqlite3_changes64","i64",["sqlite3*"]],["sqlite3_column_int64","i64",["sqlite3_stmt*","int"]],["sqlite3_deserialize","int","sqlite3*","string","*","i64","i64","int"],["sqlite3_last_insert_rowid","i64",["sqlite3*"]],["sqlite3_malloc64","*","i64"],["sqlite3_msize","i64","*"],["sqlite3_overload_function","int",["sqlite3*","string","int"]],["sqlite3_realloc64","*","*","i64"],["sqlite3_result_int64",void 0,"*","i64"],["sqlite3_result_zeroblob64","int","*","i64"],["sqlite3_serialize","*","sqlite3*","string","*","int"],["sqlite3_set_last_insert_rowid",void 0,["sqlite3*","i64"]],["sqlite3_status64","int","int","*","*","int"],["sqlite3_total_changes64","i64",["sqlite3*"]],["sqlite3_update_hook","*",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"sqlite3_update_hook",signature:"v(iippj)",contextKey:I=>I[0],callProxy:I=>(T,Q,z,te,D)=>{I(T,Q,u.cstrToJs(z),u.cstrToJs(te),D)}}),"*"]],["sqlite3_uri_int64","i64",["sqlite3_filename","string","i64"]],["sqlite3_value_int64","i64","sqlite3_value*"]],u.bigIntEnabled&&u.exports.sqlite3_declare_vtab&&u.bindingSignatures.int64.push(["sqlite3_create_module","int",["sqlite3*","string","sqlite3_module*","*"]],["sqlite3_create_module_v2","int",["sqlite3*","string","sqlite3_module*","*","*"]],["sqlite3_declare_vtab","int",["sqlite3*","string:flexible"]],["sqlite3_drop_modules","int",["sqlite3*","**"]],["sqlite3_vtab_collation","string","sqlite3_index_info*","int"],["sqlite3_vtab_distinct","int","sqlite3_index_info*"],["sqlite3_vtab_in","int","sqlite3_index_info*","int","int"],["sqlite3_vtab_in_first","int","sqlite3_value*","**"],["sqlite3_vtab_in_next","int","sqlite3_value*","**"],["sqlite3_vtab_nochange","int","sqlite3_context*"],["sqlite3_vtab_on_conflict","int","sqlite3*"],["sqlite3_vtab_rhs_value","int","sqlite3_index_info*","int","**"]),u.bigIntEnabled&&u.exports.sqlite3_preupdate_hook&&u.bindingSignatures.int64.push(["sqlite3_preupdate_blobwrite","int","sqlite3*"],["sqlite3_preupdate_count","int","sqlite3*"],["sqlite3_preupdate_depth","int","sqlite3*"],["sqlite3_preupdate_hook","*",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"sqlite3_preupdate_hook",signature:"v(ppippjj)",contextKey:I=>I[0],callProxy:I=>(T,Q,z,te,D,fe,ue)=>{I(T,Q,z,u.cstrToJs(te),u.cstrToJs(D),fe,ue)}}),"*"]],["sqlite3_preupdate_new","int",["sqlite3*","int","**"]],["sqlite3_preupdate_old","int",["sqlite3*","int","**"]]),u.bigIntEnabled&&u.exports.sqlite3changegroup_add&&u.exports.sqlite3session_create&&u.exports.sqlite3_preupdate_hook){const I={signature:"i(ps)",callProxy:T=>(Q,z)=>{try{return T(Q,u.cstrToJs(z))|0}catch(te){return te.resultCode||c.SQLITE_ERROR}}};u.bindingSignatures.int64.push(["sqlite3changegroup_add","int",["sqlite3_changegroup*","int","void*"]],["sqlite3changegroup_add_strm","int",["sqlite3_changegroup*",new u.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3changegroup_delete",void 0,["sqlite3_changegroup*"]],["sqlite3changegroup_new","int",["**"]],["sqlite3changegroup_output","int",["sqlite3_changegroup*","int*","**"]],["sqlite3changegroup_output_strm","int",["sqlite3_changegroup*",new u.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply","int",["sqlite3*","int","void*",new u.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new u.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply_strm","int",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new u.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new u.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply_v2","int",["sqlite3*","int","void*",new u.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new u.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*","**","int*","int"]],["sqlite3changeset_apply_v2_strm","int",["sqlite3*",new u.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new u.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new u.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*","**","int*","int"]],["sqlite3changeset_concat","int",["int","void*","int","void*","int*","**"]],["sqlite3changeset_concat_strm","int",[new u.xWrap.FuncPtrAdapter({name:"xInputA",signature:"i(ppp)",bindScope:"transient"}),"void*",new u.xWrap.FuncPtrAdapter({name:"xInputB",signature:"i(ppp)",bindScope:"transient"}),"void*",new u.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_conflict","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_finalize","int",["sqlite3_changeset_iter*"]],["sqlite3changeset_fk_conflicts","int",["sqlite3_changeset_iter*","int*"]],["sqlite3changeset_invert","int",["int","void*","int*","**"]],["sqlite3changeset_invert_strm","int",[new u.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new u.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_new","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_next","int",["sqlite3_changeset_iter*"]],["sqlite3changeset_old","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_op","int",["sqlite3_changeset_iter*","**","int*","int*","int*"]],["sqlite3changeset_pk","int",["sqlite3_changeset_iter*","**","int*"]],["sqlite3changeset_start","int",["**","int","*"]],["sqlite3changeset_start_strm","int",["**",new u.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3changeset_start_v2","int",["**","int","*","int"]],["sqlite3changeset_start_v2_strm","int",["**",new u.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*","int"]],["sqlite3session_attach","int",["sqlite3_session*","string"]],["sqlite3session_changeset","int",["sqlite3_session*","int*","**"]],["sqlite3session_changeset_size","i64",["sqlite3_session*"]],["sqlite3session_changeset_strm","int",["sqlite3_session*",new u.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3session_config","int",["int","void*"]],["sqlite3session_create","int",["sqlite3*","string","**"]],["sqlite3session_diff","int",["sqlite3_session*","string","string","**"]],["sqlite3session_enable","int",["sqlite3_session*","int"]],["sqlite3session_indirect","int",["sqlite3_session*","int"]],["sqlite3session_isempty","int",["sqlite3_session*"]],["sqlite3session_memory_used","i64",["sqlite3_session*"]],["sqlite3session_object_config","int",["sqlite3_session*","int","void*"]],["sqlite3session_patchset","int",["sqlite3_session*","*","**"]],["sqlite3session_patchset_strm","int",["sqlite3_session*",new u.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3session_table_filter",void 0,["sqlite3_session*",new u.xWrap.FuncPtrAdapter({name:"xFilter",...I,contextKey:(T,Q)=>T[0]}),"*"]])}u.bindingSignatures.wasmInternal=[["sqlite3__wasm_db_reset","int","sqlite3*"],["sqlite3__wasm_db_vfs","sqlite3_vfs*","sqlite3*","string"],["sqlite3__wasm_vfs_create_file","int","sqlite3_vfs*","string","*","int"],["sqlite3__wasm_posix_create_file","int","string","*","int"],["sqlite3__wasm_vfs_unlink","int","sqlite3_vfs*","string"],["sqlite3__wasm_qfmt_token","string:dealloc","string","int"]],a.StructBinder=globalThis.Jaccwabyt({heap:u.heap8u,alloc:u.alloc,dealloc:u.dealloc,bigIntEnabled:u.bigIntEnabled,memberPrefix:"$"}),delete globalThis.Jaccwabyt;{const I=u.xWrap.argAdapter("string");u.xWrap.argAdapter("string:flexible",D=>I(p.flexibleString(D))),u.xWrap.argAdapter("string:static",(function(D){return u.isPtr(D)?D:(D=""+D,this[D]||(this[D]=u.allocCString(D)))}).bind(Object.create(null)));const T=u.xWrap.argAdapter("*"),Q=function(){};u.xWrap.argAdapter("sqlite3_filename",T)("sqlite3_context*",T)("sqlite3_value*",T)("void*",T)("sqlite3_changegroup*",T)("sqlite3_changeset_iter*",T)("sqlite3_session*",T)("sqlite3_stmt*",D=>{var fe;return T(D instanceof(((fe=a==null?void 0:a.oo1)==null?void 0:fe.Stmt)||Q)?D.pointer:D)})("sqlite3*",D=>{var fe;return T(D instanceof(((fe=a==null?void 0:a.oo1)==null?void 0:fe.DB)||Q)?D.pointer:D)})("sqlite3_vfs*",D=>typeof D=="string"?c.sqlite3_vfs_find(D)||a.SQLite3Error.toss(c.SQLITE_NOTFOUND,"Unknown sqlite3_vfs name:",D):T(D instanceof(c.sqlite3_vfs||Q)?D.pointer:D)),u.exports.sqlite3_declare_vtab&&u.xWrap.argAdapter("sqlite3_index_info*",D=>T(D instanceof(c.sqlite3_index_info||Q)?D.pointer:D))("sqlite3_module*",D=>T(D instanceof(c.sqlite3_module||Q)?D.pointer:D));const z=u.xWrap.resultAdapter("*");u.xWrap.resultAdapter("sqlite3*",z)("sqlite3_context*",z)("sqlite3_stmt*",z)("sqlite3_value*",z)("sqlite3_vfs*",z)("void*",z),u.exports.sqlite3_step.length===0&&(u.xWrap.doArgcCheck=!1,a.config.warn("Disabling sqlite3.wasm.xWrap.doArgcCheck due to environmental quirks."));for(const D of u.bindingSignatures)c[D[0]]=u.xWrap.apply(null,D);for(const D of u.bindingSignatures.wasmInternal)p[D[0]]=u.xWrap.apply(null,D);const te=function(D){return()=>d(D+"() is unavailable due to lack","of BigInt support in this build.")};for(const D of u.bindingSignatures.int64)c[D[0]]=u.bigIntEnabled?u.xWrap.apply(null,D):te(D[0]);if(delete u.bindingSignatures,u.exports.sqlite3__wasm_db_error){const D=u.xWrap("sqlite3__wasm_db_error","int","sqlite3*","int","string");p.sqlite3__wasm_db_error=function(fe,ue,b){return ue instanceof a.WasmAllocError?(ue=c.SQLITE_NOMEM,b=0):ue instanceof Error&&(b=b||""+ue,ue=ue.resultCode||c.SQLITE_ERROR),fe?D(fe,ue,b):ue}}else p.sqlite3__wasm_db_error=function(D,fe,ue){return console.warn("sqlite3__wasm_db_error() is not exported.",arguments),fe}}{const I=u.xCall("sqlite3__wasm_enum_json");I||d("Maintenance required: increase sqlite3__wasm_enum_json()'s","static buffer size!"),u.ctype=JSON.parse(u.cstrToJs(I));const T=["access","authorizer","blobFinalizers","changeset","config","dataTypes","dbConfig","dbStatus","encodings","fcntl","flock","ioCap","limits","openFlags","prepareFlags","resultCodes","sqlite3Status","stmtStatus","syncFlags","trace","txnState","udfFlags","version"];u.bigIntEnabled&&T.push("serialize","session","vtab");for(const te of T)for(const D of Object.entries(u.ctype[te]))c[D[0]]=D[1];u.functionEntry(c.SQLITE_WASM_DEALLOC)||d("Internal error: cannot resolve exported function","entry SQLITE_WASM_DEALLOC (=="+c.SQLITE_WASM_DEALLOC+").");const Q=Object.create(null);for(const te of["resultCodes"])for(const D of Object.entries(u.ctype[te]))Q[D[1]]=D[0];c.sqlite3_js_rc_str=te=>Q[te];const z=Object.assign(Object.create(null),{WasmTestStruct:!0,sqlite3_kvvfs_methods:!p.isUIThread(),sqlite3_index_info:!u.bigIntEnabled,sqlite3_index_constraint:!u.bigIntEnabled,sqlite3_index_orderby:!u.bigIntEnabled,sqlite3_index_constraint_usage:!u.bigIntEnabled});for(const te of u.ctype.structs)z[te.name]||(c[te.name]=a.StructBinder(te));if(c.sqlite3_index_info){for(const te of["sqlite3_index_constraint","sqlite3_index_orderby","sqlite3_index_constraint_usage"])c.sqlite3_index_info[te]=c[te],delete c[te];c.sqlite3_vtab_config=u.xWrap("sqlite3__wasm_vtab_config","int",["sqlite3*","int","int"])}}const O=(I,T,Q)=>p.sqlite3__wasm_db_error(I,c.SQLITE_MISUSE,T+"() requires "+Q+" argument"+(Q===1?"":"s")+"."),C=I=>p.sqlite3__wasm_db_error(I,c.SQLITE_FORMAT,"SQLITE_UTF8 is the only supported encoding."),ee=I=>u.xWrap.argAdapter("sqlite3*")(I),re=I=>u.isPtr(I)?u.cstrToJs(I):I,_e=(function(I,T){I=ee(I);let Q=this.dbMap.get(I);if(T)!Q&&T>0&&this.dbMap.set(I,Q=Object.create(null));else return this.dbMap.delete(I),Q;return Q}).bind(Object.assign(Object.create(null),{dbMap:new Map}));_e.addCollation=function(I,T){const Q=_e(I,1);Q.collation||(Q.collation=new Set),Q.collation.add(re(T).toLowerCase())},_e._addUDF=function(I,T,Q,z){T=re(T).toLowerCase();let te=z.get(T);te||z.set(T,te=new Set),te.add(Q<0?-1:Q)},_e.addFunction=function(I,T,Q){const z=_e(I,1);z.udf||(z.udf=new Map),this._addUDF(I,T,Q,z.udf)},u.exports.sqlite3_create_window_function&&(_e.addWindowFunc=function(I,T,Q){const z=_e(I,1);z.wudf||(z.wudf=new Map),this._addUDF(I,T,Q,z.wudf)}),_e.cleanup=function(I){I=ee(I);const T=[I];for(const te of["sqlite3_busy_handler","sqlite3_commit_hook","sqlite3_preupdate_hook","sqlite3_progress_handler","sqlite3_rollback_hook","sqlite3_set_authorizer","sqlite3_trace_v2","sqlite3_update_hook"]){const D=u.exports[te];if(D){T.length=D.length;try{c[te](...T)}catch(fe){a.config.warn("close-time call of",te+"(",T,") threw:",fe)}}}const Q=_e(I,0);if(!Q)return;if(Q.collation){for(const te of Q.collation)try{c.sqlite3_create_collation_v2(I,te,c.SQLITE_UTF8,0,0,0)}catch{}delete Q.collation}let z;for(z=0;z<2;++z){const te=z?Q.wudf:Q.udf;if(!te)continue;const D=z?c.sqlite3_create_window_function:c.sqlite3_create_function_v2;for(const fe of te){const ue=fe[0],b=fe[1],A=[I,ue,0,c.SQLITE_UTF8,0,0,0,0,0];z&&A.push(0);for(const P of b)try{A[2]=P,D.apply(null,A)}catch{}b.clear()}te.clear()}delete Q.udf,delete Q.wudf};{const I=u.xWrap("sqlite3_close_v2","int","sqlite3*");c.sqlite3_close_v2=function(T){if(arguments.length!==1)return O(T,"sqlite3_close_v2",1);if(T)try{_e.cleanup(T)}catch{}return I(T)}}if(c.sqlite3session_create){const I=u.xWrap("sqlite3session_delete",void 0,["sqlite3_session*"]);c.sqlite3session_delete=function(T){if(arguments.length!==1)return O(pDb,"sqlite3session_delete",1);T&&c.sqlite3session_table_filter(T,0,0),I(T)}}{const I=(Q,z)=>"argv["+z+"]:"+Q[0]+":"+u.cstrToJs(Q[1]).toLowerCase(),T=u.xWrap("sqlite3_create_collation_v2","int",["sqlite3*","string","int","*",new u.xWrap.FuncPtrAdapter({name:"xCompare",signature:"i(pipip)",contextKey:I}),new u.xWrap.FuncPtrAdapter({name:"xDestroy",signature:"v(p)",contextKey:I})]);c.sqlite3_create_collation_v2=function(Q,z,te,D,fe,ue){if(arguments.length!==6)return O(Q,"sqlite3_create_collation_v2",6);if(!(te&15))te|=c.SQLITE_UTF8;else if(c.SQLITE_UTF8!==(te&15))return C(Q);try{const b=T(Q,z,te,D,fe,ue);return b===0&&fe instanceof Function&&_e.addCollation(Q,z),b}catch(b){return p.sqlite3__wasm_db_error(Q,b)}},c.sqlite3_create_collation=(Q,z,te,D,fe)=>arguments.length===5?c.sqlite3_create_collation_v2(Q,z,te,D,fe,0):O(Q,"sqlite3_create_collation",5)}{const I=function(te,D){return te[0]+":"+(te[2]<0?-1:te[2])+":"+D+":"+u.cstrToJs(te[1]).toLowerCase()},T=Object.assign(Object.create(null),{xInverseAndStep:{signature:"v(pip)",contextKey:I,callProxy:te=>(D,fe,ue)=>{try{te(D,...c.sqlite3_values_to_js(fe,ue))}catch(b){c.sqlite3_result_error_js(D,b)}}},xFinalAndValue:{signature:"v(p)",contextKey:I,callProxy:te=>D=>{try{c.sqlite3_result_js(D,te(D))}catch(fe){c.sqlite3_result_error_js(D,fe)}}},xFunc:{signature:"v(pip)",contextKey:I,callProxy:te=>(D,fe,ue)=>{try{c.sqlite3_result_js(D,te(D,...c.sqlite3_values_to_js(fe,ue)))}catch(b){c.sqlite3_result_error_js(D,b)}}},xDestroy:{signature:"v(p)",contextKey:I,callProxy:te=>D=>{try{te(D)}catch(fe){console.error("UDF xDestroy method threw:",fe)}}}}),Q=u.xWrap("sqlite3_create_function_v2","int",["sqlite3*","string","int","int","*",new u.xWrap.FuncPtrAdapter({name:"xFunc",...T.xFunc}),new u.xWrap.FuncPtrAdapter({name:"xStep",...T.xInverseAndStep}),new u.xWrap.FuncPtrAdapter({name:"xFinal",...T.xFinalAndValue}),new u.xWrap.FuncPtrAdapter({name:"xDestroy",...T.xDestroy})]),z=u.exports.sqlite3_create_window_function?u.xWrap("sqlite3_create_window_function","int",["sqlite3*","string","int","int","*",new u.xWrap.FuncPtrAdapter({name:"xStep",...T.xInverseAndStep}),new u.xWrap.FuncPtrAdapter({name:"xFinal",...T.xFinalAndValue}),new u.xWrap.FuncPtrAdapter({name:"xValue",...T.xFinalAndValue}),new u.xWrap.FuncPtrAdapter({name:"xInverse",...T.xInverseAndStep}),new u.xWrap.FuncPtrAdapter({name:"xDestroy",...T.xDestroy})]):void 0;c.sqlite3_create_function_v2=function te(D,fe,ue,b,A,P,he,Z,ge){if(te.length!==arguments.length)return O(D,"sqlite3_create_function_v2",te.length);if(!(b&15))b|=c.SQLITE_UTF8;else if(c.SQLITE_UTF8!==(b&15))return C(D);try{const f=Q(D,fe,ue,b,A,P,he,Z,ge);return f===0&&(P instanceof Function||he instanceof Function||Z instanceof Function||ge instanceof Function)&&_e.addFunction(D,fe,ue),f}catch(f){return console.error("sqlite3_create_function_v2() setup threw:",f),p.sqlite3__wasm_db_error(D,f,"Creation of UDF threw: "+f)}},c.sqlite3_create_function=function te(D,fe,ue,b,A,P,he,Z){return te.length===arguments.length?c.sqlite3_create_function_v2(D,fe,ue,b,A,P,he,Z,0):O(D,"sqlite3_create_function",te.length)},z?c.sqlite3_create_window_function=function te(D,fe,ue,b,A,P,he,Z,ge,f){if(te.length!==arguments.length)return O(D,"sqlite3_create_window_function",te.length);if(!(b&15))b|=c.SQLITE_UTF8;else if(c.SQLITE_UTF8!==(b&15))return C(D);try{const y=z(D,fe,ue,b,A,P,he,Z,ge,f);return y===0&&(P instanceof Function||he instanceof Function||Z instanceof Function||ge instanceof Function||f instanceof Function)&&_e.addWindowFunc(D,fe,ue),y}catch(y){return console.error("sqlite3_create_window_function() setup threw:",y),p.sqlite3__wasm_db_error(D,y,"Creation of UDF threw: "+y)}}:delete c.sqlite3_create_window_function,c.sqlite3_create_function_v2.udfSetResult=c.sqlite3_create_function.udfSetResult=c.sqlite3_result_js,c.sqlite3_create_window_function&&(c.sqlite3_create_window_function.udfSetResult=c.sqlite3_result_js),c.sqlite3_create_function_v2.udfConvertArgs=c.sqlite3_create_function.udfConvertArgs=c.sqlite3_values_to_js,c.sqlite3_create_window_function&&(c.sqlite3_create_window_function.udfConvertArgs=c.sqlite3_values_to_js),c.sqlite3_create_function_v2.udfSetError=c.sqlite3_create_function.udfSetError=c.sqlite3_result_error_js,c.sqlite3_create_window_function&&(c.sqlite3_create_window_function.udfSetError=c.sqlite3_result_error_js)}{const I=(Q,z)=>(typeof Q=="string"?z=-1:p.isSQLableTypedArray(Q)?(z=Q.byteLength,Q=p.typedArrayToString(Q instanceof ArrayBuffer?new Uint8Array(Q):Q)):Array.isArray(Q)&&(Q=Q.join(""),z=-1),[Q,z]),T={basic:u.xWrap("sqlite3_prepare_v3","int",["sqlite3*","string","int","int","**","**"]),full:u.xWrap("sqlite3_prepare_v3","int",["sqlite3*","*","int","int","**","**"])};c.sqlite3_prepare_v3=function Q(z,te,D,fe,ue,b){if(Q.length!==arguments.length)return O(z,"sqlite3_prepare_v3",Q.length);const[A,P]=I(te,D);switch(typeof A){case"string":return T.basic(z,A,P,fe,ue,null);case"number":return T.full(z,A,P,fe,ue,b);default:return p.sqlite3__wasm_db_error(z,c.SQLITE_MISUSE,"Invalid SQL argument type for sqlite3_prepare_v2/v3().")}},c.sqlite3_prepare_v2=function Q(z,te,D,fe,ue){return Q.length===arguments.length?c.sqlite3_prepare_v3(z,te,D,0,fe,ue):O(z,"sqlite3_prepare_v2",Q.length)}}{const I=u.xWrap("sqlite3_bind_text","int",["sqlite3_stmt*","int","string","int","*"]),T=u.xWrap("sqlite3_bind_blob","int",["sqlite3_stmt*","int","*","int","*"]);c.sqlite3_bind_text=function Q(z,te,D,fe,ue){if(Q.length!==arguments.length)return O(c.sqlite3_db_handle(z),"sqlite3_bind_text",Q.length);if(u.isPtr(D)||D===null)return I(z,te,D,fe,ue);D instanceof ArrayBuffer?D=new Uint8Array(D):Array.isArray(pMem)&&(D=pMem.join(""));let b,A;try{if(p.isSQLableTypedArray(D))b=u.allocFromTypedArray(D),A=D.byteLength;else if(typeof D=="string")[b,A]=u.allocCString(D);else return p.sqlite3__wasm_db_error(c.sqlite3_db_handle(z),c.SQLITE_MISUSE,"Invalid 3rd argument type for sqlite3_bind_text().");return I(z,te,b,A,c.SQLITE_WASM_DEALLOC)}catch(P){return u.dealloc(b),p.sqlite3__wasm_db_error(c.sqlite3_db_handle(z),P)}},c.sqlite3_bind_blob=function Q(z,te,D,fe,ue){if(Q.length!==arguments.length)return O(c.sqlite3_db_handle(z),"sqlite3_bind_blob",Q.length);if(u.isPtr(D)||D===null)return T(z,te,D,fe,ue);D instanceof ArrayBuffer?D=new Uint8Array(D):Array.isArray(D)&&(D=D.join(""));let b,A;try{if(p.isBindableTypedArray(D))b=u.allocFromTypedArray(D),A=fe>=0?fe:D.byteLength;else if(typeof D=="string")[b,A]=u.allocCString(D);else return p.sqlite3__wasm_db_error(c.sqlite3_db_handle(z),c.SQLITE_MISUSE,"Invalid 3rd argument type for sqlite3_bind_blob().");return T(z,te,b,A,c.SQLITE_WASM_DEALLOC)}catch(P){return u.dealloc(b),p.sqlite3__wasm_db_error(c.sqlite3_db_handle(z),P)}}}c.sqlite3_config=function(I,...T){if(arguments.length<2)return c.SQLITE_MISUSE;switch(I){case c.SQLITE_CONFIG_COVERING_INDEX_SCAN:case c.SQLITE_CONFIG_MEMSTATUS:case c.SQLITE_CONFIG_SMALL_MALLOC:case c.SQLITE_CONFIG_SORTERREF_SIZE:case c.SQLITE_CONFIG_STMTJRNL_SPILL:case c.SQLITE_CONFIG_URI:return u.exports.sqlite3__wasm_config_i(I,T[0]);case c.SQLITE_CONFIG_LOOKASIDE:return u.exports.sqlite3__wasm_config_ii(I,T[0],T[1]);case c.SQLITE_CONFIG_MEMDB_MAXSIZE:return u.exports.sqlite3__wasm_config_j(I,T[0]);case c.SQLITE_CONFIG_GETMALLOC:case c.SQLITE_CONFIG_GETMUTEX:case c.SQLITE_CONFIG_GETPCACHE2:case c.SQLITE_CONFIG_GETPCACHE:case c.SQLITE_CONFIG_HEAP:case c.SQLITE_CONFIG_LOG:case c.SQLITE_CONFIG_MALLOC:case c.SQLITE_CONFIG_MMAP_SIZE:case c.SQLITE_CONFIG_MULTITHREAD:case c.SQLITE_CONFIG_MUTEX:case c.SQLITE_CONFIG_PAGECACHE:case c.SQLITE_CONFIG_PCACHE2:case c.SQLITE_CONFIG_PCACHE:case c.SQLITE_CONFIG_PCACHE_HDRSZ:case c.SQLITE_CONFIG_PMASZ:case c.SQLITE_CONFIG_SERIALIZED:case c.SQLITE_CONFIG_SINGLETHREAD:case c.SQLITE_CONFIG_SQLLOG:case c.SQLITE_CONFIG_WIN32_HEAPSIZE:default:return c.SQLITE_NOTFOUND}};{const I=new Set;c.sqlite3_auto_extension=function(T){if(T instanceof Function)T=u.installFunction("i(ppp)",T);else if(arguments.length!==1||!u.isPtr(T))return c.SQLITE_MISUSE;const Q=u.exports.sqlite3_auto_extension(T);return T!==arguments[0]&&(Q===0?I.add(T):u.uninstallFunction(T)),Q},c.sqlite3_cancel_auto_extension=function(T){return!T||arguments.length!==1||!u.isPtr(T)?0:u.exports.sqlite3_cancel_auto_extension(T)},c.sqlite3_reset_auto_extension=function(){u.exports.sqlite3_reset_auto_extension();for(const T of I)u.uninstallFunction(T);I.clear()}}const xe=c.sqlite3_vfs_find("kvvfs");if(xe)if(p.isUIThread()){const I=new c.sqlite3_kvvfs_methods(u.exports.sqlite3__wasm_kvvfs_methods());delete c.sqlite3_kvvfs_methods;const T=u.exports.sqlite3__wasm_kvvfsMakeKeyOnPstack,Q=u.pstack,z=D=>u.peek(D)===115?sessionStorage:localStorage,te={xRead:(D,fe,ue,b)=>{const A=Q.pointer,P=u.scopedAllocPush();try{const he=T(D,fe);if(!he)return-3;const Z=u.cstrToJs(he),ge=z(D).getItem(Z);if(!ge)return-1;const f=ge.length;if(b<=0)return f;if(b===1)return u.poke(ue,0),f;const y=u.scopedAllocCString(ge);return b>f+1&&(b=f+1),u.heap8u().copyWithin(ue,y,y+b-1),u.poke(ue+b-1,0),b-1}catch(he){return console.error("kvstorageRead()",he),-2}finally{Q.restore(A),u.scopedAllocPop(P)}},xWrite:(D,fe,ue)=>{const b=Q.pointer;try{const A=T(D,fe);if(!A)return 1;const P=u.cstrToJs(A);return z(D).setItem(P,u.cstrToJs(ue)),0}catch(A){return console.error("kvstorageWrite()",A),c.SQLITE_IOERR}finally{Q.restore(b)}},xDelete:(D,fe)=>{const ue=Q.pointer;try{const b=T(D,fe);return b?(z(D).removeItem(u.cstrToJs(b)),0):1}catch(b){return console.error("kvstorageDelete()",b),c.SQLITE_IOERR}finally{Q.restore(ue)}}};for(const D of Object.keys(te))I[I.memberKey(D)]=u.installFunction(I.memberSignature(D),te[D])}else c.sqlite3_vfs_unregister(xe);u.xWrap.FuncPtrAdapter.warnOnUse=!0;const X=a.StructBinder,$=function I(T,Q,z,te=I.installMethodArgcCheck){if(T instanceof X.StructType?!(z instanceof Function)&&!u.isPtr(z)&&d("Usage error: expecting a Function or WASM pointer to one."):d("Usage error: target object is-not-a StructType."),arguments.length===1)return(b,A)=>I(T,b,A,te);I.argcProxy||(I.argcProxy=function(b,A,P,he){return function(...Z){return P.length!==arguments.length&&d("Argument mismatch for",b.structInfo.name+"::"+A+": Native signature is:",he),P.apply(this,Z)}},I.removeFuncList=function(){this.ondispose.__removeFuncList&&(this.ondispose.__removeFuncList.forEach((b,A)=>{if(typeof b=="number")try{u.uninstallFunction(b)}catch{}}),delete this.ondispose.__removeFuncList)});const D=T.memberSignature(Q);D.length<2&&d("Member",Q,"does not have a function pointer signature:",D);const fe=T.memberKey(Q),ue=te&&!u.isPtr(z)?I.argcProxy(T,fe,z,D):z;if(u.isPtr(ue))ue&&!u.functionEntry(ue)&&d("Pointer",ue,"is not a WASM function table entry."),T[fe]=ue;else{const b=u.installFunction(ue,T.memberSignature(Q,!0));T[fe]=b,(!T.ondispose||!T.ondispose.__removeFuncList)&&(T.addOnDispose("ondispose.__removeFuncList handler",I.removeFuncList),T.ondispose.__removeFuncList=[]),T.ondispose.__removeFuncList.push(fe,b)}return(b,A)=>I(T,b,A,te)};$.installMethodArgcCheck=!1;const me=function(I,T,Q=$.installMethodArgcCheck){const z=new Map;for(const te of Object.keys(T)){const D=T[te],fe=z.get(D);if(fe){const ue=I.memberKey(te);I[ue]=I[I.memberKey(fe)]}else $(I,te,D,Q),z.set(D,te)}return I};X.StructType.prototype.installMethod=function(T,Q,z=$.installMethodArgcCheck){return arguments.length<3&&T&&typeof T=="object"?me(this,...arguments):$(this,...arguments)},X.StructType.prototype.installMethods=function(I,T=$.installMethodArgcCheck){return me(this,I,T)}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){a.version={libVersion:"3.50.4",libVersionNumber:3050004,sourceId:"2025-07-30 19:33:53 4d8adfb30e03f9cf27f800a2c1ba3c48fb4ca1b08b0f5ed59a4d5ecbf45e20a3",downloadVersion:3500400}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){const d=(...f)=>{throw new a.SQLite3Error(...f)},c=a.capi,u=a.wasm,p=a.util,O=new WeakMap,C=new WeakMap,ee=(f,y,q)=>{const w=Object.getOwnPropertyDescriptor(f,y);return w?w.value:q},re=function(f,y){return y&&(f instanceof I&&(f=f.pointer),d(y,"sqlite3 result code",y+":",f?c.sqlite3_errmsg(f):c.sqlite3_errstr(y))),arguments[0]},_e=u.installFunction("i(ippp)",(function(f,y,q,w){c.SQLITE_TRACE_STMT===f&&console.log("SQL TRACE #"+ ++this.counter+" via sqlite3@"+y+":",u.cstrToJs(w))}).bind({counter:0})),xe=Object.create(null),X=function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));const y=[],q="0123456789abcdef";for(const w of f)y.push(q[(w&240)>>4],q[w&15]);return y.join("")},$=function(f,y){if(!c.sqlite3_key_v2)return;let q,w;const U=(y.key?1:0)+(y.hexkey?1:0)+(y.textkey?1:0);if(U)U>1&&d(c.SQLITE_MISUSE,"Only ONE of (key, hexkey, textkey) may be provided.");else return;if(y.key)if(q="key",w=y.key,typeof w=="string"&&(w=new TextEncoder("utf-8").encode(w)),w instanceof ArrayBuffer||w instanceof Uint8Array)w=X(w),q="hexkey";else{d(c.SQLITE_MISUSE,"Invalid value for the 'key' option. Expecting a string,","ArrayBuffer, or Uint8Array.");return}else if(y.textkey)q="textkey",w=y.textkey,w instanceof ArrayBuffer&&(w=new Uint8Array(w)),w instanceof Uint8Array?w=new TextDecoder("utf-8").decode(w):typeof w!="string"&&d(c.SQLITE_MISUSE,"Invalid value for the 'textkey' option. Expecting a string,","ArrayBuffer, or Uint8Array.");else if(y.hexkey)q="hexkey",w=y.hexkey,w instanceof ArrayBuffer||w instanceof Uint8Array?w=X(w):typeof w!="string"&&d(c.SQLITE_MISUSE,"Invalid value for the 'hexkey' option. Expecting a string,","ArrayBuffer, or Uint8Array.");else return;let be;try{return be=f.prepare("PRAGMA "+q+"="+p.sqlite3__wasm_qfmt_token(w,1)),be.step(),!0}finally{be&&be.finalize()}},me=function f(...y){if(!f._name2vfs){f._name2vfs=Object.create(null);const tt=typeof importScripts=="function"?rt=>d("The VFS for",rt,"is only available in the main window thread."):!1;f._name2vfs[":localStorage:"]={vfs:"kvvfs",filename:tt||(()=>"local")},f._name2vfs[":sessionStorage:"]={vfs:"kvvfs",filename:tt||(()=>"session")}}const q=f.normalizeArgs(...y);let w=q.filename,U=q.vfs,be=q.flags;(typeof w!="string"&&typeof w!="number"||typeof be!="string"||U&&typeof U!="string"&&typeof U!="number")&&(a.config.error("Invalid DB ctor args",q,arguments),d("Invalid arguments for DB constructor."));let De=typeof w=="number"?u.cstrToJs(w):w;const it=f._name2vfs[De];it&&(U=it.vfs,w=De=it.filename(De));let Ye,st=0;be.indexOf("c")>=0&&(st|=c.SQLITE_OPEN_CREATE|c.SQLITE_OPEN_READWRITE),be.indexOf("w")>=0&&(st|=c.SQLITE_OPEN_READWRITE),st===0&&(st|=c.SQLITE_OPEN_READONLY),st|=c.SQLITE_OPEN_EXRESCODE;const ot=u.pstack.pointer;try{const tt=u.pstack.allocPtr();let rt=c.sqlite3_open_v2(w,tt,st,U||0);Ye=u.peekPtr(tt),re(Ye,rt),c.sqlite3_extended_result_codes(Ye,1),be.indexOf("t")>=0&&c.sqlite3_trace_v2(Ye,c.SQLITE_TRACE_STMT,_e,Ye)}catch(tt){throw Ye&&c.sqlite3_close_v2(Ye),tt}finally{u.pstack.restore(ot)}this.filename=De,O.set(this,Ye),C.set(this,Object.create(null));try{$(this,q);const tt=c.sqlite3_js_db_vfs(Ye)||d("Internal error: cannot get VFS for new db handle."),rt=xe[tt];rt&&(rt instanceof Function?rt(this,a):re(Ye,c.sqlite3_exec(Ye,rt,0,0,0)))}catch(tt){throw this.close(),tt}};me.setVfsPostOpenCallback=function(f,y){y instanceof Function||d("dbCtorHelper.setVfsPostOpenCallback() should not be used with a non-function argument.",arguments),xe[f]=y},me.normalizeArgs=function(f=":memory:",y="c",q=null){const w={};return arguments.length===1&&arguments[0]&&typeof arguments[0]=="object"?(Object.assign(w,arguments[0]),w.flags===void 0&&(w.flags="c"),w.vfs===void 0&&(w.vfs=null),w.filename===void 0&&(w.filename=":memory:")):(w.filename=f,w.flags=y,w.vfs=q),w};const I=function(...f){me.apply(this,f)};I.dbCtorHelper=me;const T={null:1,number:2,string:3,boolean:4,blob:5};T.undefined==T.null,u.bigIntEnabled&&(T.bigint=T.number);const Q=function(){T!==arguments[2]&&d(c.SQLITE_MISUSE,"Do not call the Stmt constructor directly. Use DB.prepare()."),this.db=arguments[0],O.set(this,arguments[1]),this.parameterCount=c.sqlite3_bind_parameter_count(this.pointer)},z=function(f){return f.pointer||d("DB has been closed."),f},te=function(f,y){return(y!==(y|0)||y<0||y>=f.columnCount)&&d("Column index",y,"is out of range."),f},D=function(f,y){const q=Object.create(null);switch(q.opt=Object.create(null),y.length){case 1:typeof y[0]=="string"||p.isSQLableTypedArray(y[0])||Array.isArray(y[0])?q.sql=y[0]:y[0]&&typeof y[0]=="object"&&(q.opt=y[0],q.sql=q.opt.sql);break;case 2:q.sql=y[0],q.opt=y[1];break;default:d("Invalid argument count for exec().")}q.sql=p.flexibleString(q.sql),typeof q.sql!="string"&&d("Missing SQL argument or unsupported SQL value type.");const w=q.opt;switch(w.returnValue){case"resultRows":w.resultRows||(w.resultRows=[]),q.returnVal=()=>w.resultRows;break;case"saveSql":w.saveSql||(w.saveSql=[]),q.returnVal=()=>w.saveSql;break;case void 0:case"this":q.returnVal=()=>f;break;default:d("Invalid returnValue value:",w.returnValue)}if(!w.callback&&!w.returnValue&&w.rowMode!==void 0&&(w.resultRows||(w.resultRows=[]),q.returnVal=()=>w.resultRows),w.callback||w.resultRows)switch(w.rowMode===void 0?"array":w.rowMode){case"object":q.cbArg=(U,be)=>{be.columnNames||(be.columnNames=U.getColumnNames([]));const De=U.get([]),it=Object.create(null);for(const Ye in be.columnNames)it[be.columnNames[Ye]]=De[Ye];return it};break;case"array":q.cbArg=U=>U.get([]);break;case"stmt":Array.isArray(w.resultRows)&&d("exec(): invalid rowMode for a resultRows array: must","be one of 'array', 'object',","a result column number, or column name reference."),q.cbArg=U=>U;break;default:if(p.isInt32(w.rowMode)){q.cbArg=U=>U.get(w.rowMode);break}else if(typeof w.rowMode=="string"&&w.rowMode.length>1&&w.rowMode[0]==="$"){const U=w.rowMode.substr(1);q.cbArg=be=>{const De=be.get(Object.create(null))[U];return De===void 0?d(c.SQLITE_NOTFOUND,"exec(): unknown result column:",U):De};break}d("Invalid rowMode:",w.rowMode)}return q},fe=(f,y,q,...w)=>{const U=f.prepare(y);try{const be=U.bind(q).step()?U.get(...w):void 0;return U.reset(),be}finally{U.finalize()}},ue=(f,y,q,w)=>f.exec({sql:y,bind:q,rowMode:w,returnValue:"resultRows"});I.checkRc=(f,y)=>re(f,y),I.prototype={isOpen:function(){return!!this.pointer},affirmOpen:function(){return z(this)},close:function(){if(this.pointer){if(this.onclose&&this.onclose.before instanceof Function)try{this.onclose.before(this)}catch{}const f=this.pointer;if(Object.keys(C.get(this)).forEach((y,q)=>{if(q&&q.pointer)try{q.finalize()}catch{}}),O.delete(this),C.delete(this),c.sqlite3_close_v2(f),this.onclose&&this.onclose.after instanceof Function)try{this.onclose.after(this)}catch{}delete this.filename}},changes:function(f=!1,y=!1){const q=z(this).pointer;return f?y?c.sqlite3_total_changes64(q):c.sqlite3_total_changes(q):y?c.sqlite3_changes64(q):c.sqlite3_changes(q)},dbFilename:function(f="main"){return c.sqlite3_db_filename(z(this).pointer,f)},dbName:function(f=0){return c.sqlite3_db_name(z(this).pointer,f)},dbVfsName:function(f=0){let y;const q=c.sqlite3_js_db_vfs(z(this).pointer,f);if(q){const w=new c.sqlite3_vfs(q);try{y=u.cstrToJs(w.$zName)}finally{w.dispose()}}return y},prepare:function(f){z(this);const y=u.pstack.pointer;let q,w;try{q=u.pstack.alloc(8),I.checkRc(this,c.sqlite3_prepare_v2(this.pointer,f,-1,q,null)),w=u.peekPtr(q)}finally{u.pstack.restore(y)}w||d("Cannot prepare empty SQL.");const U=new Q(this,w,T);return C.get(this)[w]=U,U},exec:function(){z(this);const f=D(this,arguments);if(!f.sql)return d("exec() requires an SQL string.");const y=f.opt,q=y.callback,w=Array.isArray(y.resultRows)?y.resultRows:void 0;let U,be=y.bind,De=!!(f.cbArg||y.columnNames||w);const it=u.scopedAllocPush(),Ye=Array.isArray(y.saveSql)?y.saveSql:void 0;try{const st=p.isSQLableTypedArray(f.sql);let ot=st?f.sql.byteLength:u.jstrlen(f.sql);const tt=u.scopedAlloc(2*u.ptrSizeof+(ot+1)),rt=tt+u.ptrSizeof;let at=rt+u.ptrSizeof;const or=at+ot;for(st?u.heap8().set(f.sql,at):u.jstrcpy(f.sql,u.heap8(),at,ot,!1),u.poke(at+ot,0);at&&u.peek(at,"i8");){u.pokePtr([tt,rt],0),I.checkRc(this,c.sqlite3_prepare_v3(this.pointer,at,ot,0,tt,rt));const ar=u.peekPtr(tt);if(at=u.peekPtr(rt),ot=or-at,!!ar){if(Ye&&Ye.push(c.sqlite3_sql(ar).trim()),U=new Q(this,ar,T),be&&U.parameterCount&&(U.bind(be),be=null),De&&U.columnCount){let j=Array.isArray(y.columnNames)?0:1;if(De=!1,f.cbArg||w){const oe=Object.create(null);for(;U.step();U._lockedByExec=!1){j++===0&&U.getColumnNames(oe.columnNames=y.columnNames||[]),U._lockedByExec=!0;const ae=f.cbArg(U,oe);if(w&&w.push(ae),q&&q.call(y,ae,U)===!1)break}U._lockedByExec=!1}j===0&&U.getColumnNames(y.columnNames)}else U.step();U.reset().finalize(),U=null}}}finally{u.scopedAllocPop(it),U&&(delete U._lockedByExec,U.finalize())}return f.returnVal()},createFunction:function(y,q,w){const U=oe=>oe instanceof Function;switch(arguments.length){case 1:w=y,y=w.name,q=w.xFunc||0;break;case 2:U(q)||(w=q,q=w.xFunc||0);break}w||(w={}),typeof y!="string"&&d("Invalid arguments: missing function name.");let be=w.xStep||0,De=w.xFinal||0;const it=w.xValue||0,Ye=w.xInverse||0;let st;U(q)?(st=!1,(U(be)||U(De))&&d("Ambiguous arguments: scalar or aggregate?"),be=De=null):U(be)?(U(De)||d("Missing xFinal() callback for aggregate or window UDF."),q=null):U(De)?d("Missing xStep() callback for aggregate or window UDF."):d("Missing function-type properties."),st===!1?(U(it)||U(Ye))&&d("xValue and xInverse are not permitted for non-window UDFs."):U(it)?(U(Ye)||d("xInverse must be provided if xValue is."),st=!0):U(Ye)&&d("xValue must be provided if xInverse is.");const ot=w.pApp;ot!=null&&(typeof ot!="number"||!p.isInt32(ot))&&d("Invalid value for pApp property. Must be a legal WASM pointer value.");const tt=w.xDestroy||0;tt&&!U(tt)&&d("xDestroy property must be a function.");let rt=0;ee(w,"deterministic")&&(rt|=c.SQLITE_DETERMINISTIC),ee(w,"directOnly")&&(rt|=c.SQLITE_DIRECTONLY),ee(w,"innocuous")&&(rt|=c.SQLITE_INNOCUOUS),y=y.toLowerCase();const at=q||be,or=ee(w,"arity"),ar=typeof or=="number"?or:at.length?at.length-1:0;let j;return st?j=c.sqlite3_create_window_function(this.pointer,y,ar,c.SQLITE_UTF8|rt,ot||0,be,De,it,Ye,tt):j=c.sqlite3_create_function_v2(this.pointer,y,ar,c.SQLITE_UTF8|rt,ot||0,q,be,De,tt),I.checkRc(this,j),this},selectValue:function(f,y,q){return fe(this,f,y,0,q)},selectValues:function(f,y,q){const w=this.prepare(f),U=[];try{for(w.bind(y);w.step();)U.push(w.get(0,q));w.reset()}finally{w.finalize()}return U},selectArray:function(f,y){return fe(this,f,y,[])},selectObject:function(f,y){return fe(this,f,y,{})},selectArrays:function(f,y){return ue(this,f,y,"array")},selectObjects:function(f,y){return ue(this,f,y,"object")},openStatementCount:function(){return this.pointer?Object.keys(C.get(this)).length:0},transaction:function(f){let y="BEGIN";arguments.length>1&&(/[^a-zA-Z]/.test(arguments[0])&&d(c.SQLITE_MISUSE,"Invalid argument for BEGIN qualifier."),y+=" "+arguments[0],f=arguments[1]),z(this).exec(y);try{const q=f(this);return this.exec("COMMIT"),q}catch(q){throw this.exec("ROLLBACK"),q}},savepoint:function(f){z(this).exec("SAVEPOINT oo1");try{const y=f(this);return this.exec("RELEASE oo1"),y}catch(y){throw this.exec("ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1"),y}},checkRc:function(f){return re(this,f)}};const b=function(f){return f.pointer||d("Stmt has been closed."),f},A=function(f){let y=T[f==null?"null":typeof f];switch(y){case T.boolean:case T.null:case T.number:case T.string:return y;case T.bigint:if(u.bigIntEnabled)return y;default:return p.isBindableTypedArray(f)?T.blob:void 0}},P=function(f){return A(f)||d("Unsupported bind() argument type:",typeof f)},he=function(f,y){const q=typeof y=="number"?y:c.sqlite3_bind_parameter_index(f.pointer,y);return q===0||!p.isInt32(q)?d("Invalid bind() parameter name: "+y):(q<1||q>f.parameterCount)&&d("Bind index",y,"is out of range."),q},Z=function(f,y){return f._lockedByExec&&d("Operation is illegal when statement is locked:",y),f},ge=function f(y,q,w,U){Z(b(y),"bind()"),f._||(f._tooBigInt=De=>d("BigInt value is too big to store without precision loss:",De),f._={string:function(De,it,Ye,st){const[ot,tt]=u.allocCString(Ye,!0);return(st?c.sqlite3_bind_blob:c.sqlite3_bind_text)(De.pointer,it,ot,tt,c.SQLITE_WASM_DEALLOC)}}),P(U),q=he(y,q);let be=0;switch(U==null?T.null:w){case T.null:be=c.sqlite3_bind_null(y.pointer,q);break;case T.string:be=f._.string(y,q,U,!1);break;case T.number:{let De;p.isInt32(U)?De=c.sqlite3_bind_int:typeof U=="bigint"?p.bigIntFits64(U)?u.bigIntEnabled?De=c.sqlite3_bind_int64:p.bigIntFitsDouble(U)?(U=Number(U),De=c.sqlite3_bind_double):f._tooBigInt(U):f._tooBigInt(U):(U=Number(U),u.bigIntEnabled&&Number.isInteger(U)?De=c.sqlite3_bind_int64:De=c.sqlite3_bind_double),be=De(y.pointer,q,U);break}case T.boolean:be=c.sqlite3_bind_int(y.pointer,q,U?1:0);break;case T.blob:{if(typeof U=="string"){be=f._.string(y,q,U,!0);break}else U instanceof ArrayBuffer?U=new Uint8Array(U):p.isBindableTypedArray(U)||d("Binding a value as a blob requires","that it be a string, Uint8Array, Int8Array, or ArrayBuffer.");const De=u.alloc(U.byteLength||1);u.heap8().set(U.byteLength?U:[0],De),be=c.sqlite3_bind_blob(y.pointer,q,De,U.byteLength,c.SQLITE_WASM_DEALLOC);break}default:a.config.warn("Unsupported bind() argument type:",U),d("Unsupported bind() argument type: "+typeof U)}return be&&I.checkRc(y.db.pointer,be),y._mayGet=!1,y};Q.prototype={finalize:function(){if(this.pointer){Z(this,"finalize()");const f=c.sqlite3_finalize(this.pointer);return delete C.get(this.db)[this.pointer],O.delete(this),delete this._mayGet,delete this.parameterCount,delete this._lockedByExec,delete this.db,f}},clearBindings:function(){return Z(b(this),"clearBindings()"),c.sqlite3_clear_bindings(this.pointer),this._mayGet=!1,this},reset:function(f){Z(this,"reset()"),f&&this.clearBindings();const y=c.sqlite3_reset(b(this).pointer);return this._mayGet=!1,re(this.db,y),this},bind:function(){b(this);let f,y;switch(arguments.length){case 1:f=1,y=arguments[0];break;case 2:f=arguments[0],y=arguments[1];break;default:d("Invalid bind() arguments.")}return y===void 0?this:(this.parameterCount||d("This statement has no bindable parameters."),this._mayGet=!1,y===null?ge(this,f,T.null,y):Array.isArray(y)?(arguments.length!==1&&d("When binding an array, an index argument is not permitted."),y.forEach((q,w)=>ge(this,w+1,P(q),q)),this):(y instanceof ArrayBuffer&&(y=new Uint8Array(y)),typeof y=="object"&&!p.isBindableTypedArray(y)?(arguments.length!==1&&d("When binding an object, an index argument is not permitted."),Object.keys(y).forEach(q=>ge(this,q,P(y[q]),y[q])),this):ge(this,f,P(y),y)))},bindAsBlob:function(f,y){b(this),arguments.length===1&&(y=f,f=1);const q=P(y);return T.string!==q&&T.blob!==q&&T.null!==q&&d("Invalid value type for bindAsBlob()"),ge(this,f,T.blob,y)},step:function(){Z(this,"step()");const f=c.sqlite3_step(b(this).pointer);switch(f){case c.SQLITE_DONE:return this._mayGet=!1;case c.SQLITE_ROW:return this._mayGet=!0;default:this._mayGet=!1,a.config.warn("sqlite3_step() rc=",f,c.sqlite3_js_rc_str(f),"SQL =",c.sqlite3_sql(this.pointer)),I.checkRc(this.db.pointer,f)}},stepReset:function(){return this.step(),this.reset()},stepFinalize:function(){try{const f=this.step();return this.reset(),f}finally{try{this.finalize()}catch{}}},get:function(f,y){if(b(this)._mayGet||d("Stmt.step() has not (recently) returned true."),Array.isArray(f)){let q=0;const w=this.columnCount;for(;q<w;)f[q]=this.get(q++);return f}else if(f&&typeof f=="object"){let q=0;const w=this.columnCount;for(;q<w;)f[c.sqlite3_column_name(this.pointer,q)]=this.get(q++);return f}switch(te(this,f),y===void 0?c.sqlite3_column_type(this.pointer,f):y){case c.SQLITE_NULL:return null;case c.SQLITE_INTEGER:if(u.bigIntEnabled){const q=c.sqlite3_column_int64(this.pointer,f);return q>=Number.MIN_SAFE_INTEGER&&q<=Number.MAX_SAFE_INTEGER?Number(q).valueOf():q}else{const q=c.sqlite3_column_double(this.pointer,f);return(q>Number.MAX_SAFE_INTEGER||q<Number.MIN_SAFE_INTEGER)&&d("Integer is out of range for JS integer range: "+q),p.isInt32(q)?q|0:q}case c.SQLITE_FLOAT:return c.sqlite3_column_double(this.pointer,f);case c.SQLITE_TEXT:return c.sqlite3_column_text(this.pointer,f);case c.SQLITE_BLOB:{const q=c.sqlite3_column_bytes(this.pointer,f),w=c.sqlite3_column_blob(this.pointer,f),U=new Uint8Array(q);return q&&U.set(u.heap8u().slice(w,w+q),0),q&&this.db._blobXfer instanceof Array&&this.db._blobXfer.push(U.buffer),U}default:d("Don't know how to translate","type of result column #"+f+".")}d("Not reached.")},getInt:function(f){return this.get(f,c.SQLITE_INTEGER)},getFloat:function(f){return this.get(f,c.SQLITE_FLOAT)},getString:function(f){return this.get(f,c.SQLITE_TEXT)},getBlob:function(f){return this.get(f,c.SQLITE_BLOB)},getJSON:function(f){const y=this.get(f,c.SQLITE_STRING);return y===null?y:JSON.parse(y)},getColumnName:function(f){return c.sqlite3_column_name(te(b(this),f).pointer,f)},getColumnNames:function(f=[]){te(b(this),0);const y=this.columnCount;for(let q=0;q<y;++q)f.push(c.sqlite3_column_name(this.pointer,q));return f},getParamIndex:function(f){return b(this).parameterCount?c.sqlite3_bind_parameter_index(this.pointer,f):void 0},getParamName:function(f){return b(this).parameterCount?c.sqlite3_bind_parameter_name(this.pointer,f):void 0},isBusy:function(){return c.sqlite3_stmt_busy(b(this))!==0},isReadOnly:function(){return c.sqlite3_stmt_readonly(b(this))!==0}};{const f={enumerable:!0,get:function(){return O.get(this)},set:()=>d("The pointer property is read-only.")};Object.defineProperty(Q.prototype,"pointer",f),Object.defineProperty(I.prototype,"pointer",f)}if(Object.defineProperty(Q.prototype,"columnCount",{enumerable:!1,get:function(){return c.sqlite3_column_count(this.pointer)},set:()=>d("The columnCount property is read-only.")}),a.oo1={DB:I,Stmt:Q},p.isUIThread()){a.oo1.JsStorageDb=function(y="session"){const q=me.normalizeArgs(...arguments);y=q.filename,y!=="session"&&y!=="local"&&d("JsStorageDb db name must be one of 'session' or 'local'."),q.vfs="kvvfs",me.call(this,q)};const f=a.oo1.JsStorageDb;f.prototype=Object.create(I.prototype),f.clearStorage=c.sqlite3_js_kvvfs_clear,f.prototype.clearStorage=function(){return f.clearStorage(z(this).filename)},f.storageSize=c.sqlite3_js_kvvfs_size,f.prototype.storageSize=function(){return f.storageSize(z(this).filename)}}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){const d=a.util;a.initWorker1API=(function(){const c=(...X)=>{throw new Error(X.join(" "))};globalThis.WorkerGlobalScope instanceof Function||c("initWorker1API() must be run from a Worker thread.");const u=this.sqlite3||c("Missing this.sqlite3 object."),p=u.oo1.DB,O=function(X){let $=C.idMap.get(X);return $||($="db#"+ ++C.idSeq+"@"+X.pointer,C.idMap.set(X,$),$)},C={dbList:[],idSeq:0,idMap:new WeakMap,xfer:[],open:function(X){const $=new p(X);return this.dbs[O($)]=$,this.dbList.indexOf($)<0&&this.dbList.push($),$},close:function(X,$){if(X){delete this.dbs[O(X)];const me=X.filename,I=d.sqlite3__wasm_db_vfs(X.pointer,0);X.close();const T=this.dbList.indexOf(X);T>=0&&this.dbList.splice(T,1),$&&me&&I&&d.sqlite3__wasm_vfs_unlink(I,me)}},post:function(X,$){$&&$.length?(globalThis.postMessage(X,Array.from($)),$.length=0):globalThis.postMessage(X)},dbs:Object.create(null),getDb:function(X,$=!0){return this.dbs[X]||($?c("Unknown (or closed) DB ID:",X):void 0)}},ee=function(X=C.dbList[0]){return X&&X.pointer?X:c("DB is not opened.")},re=function(X,$=!0){const me=C.getDb(X.dbId,!1)||C.dbList[0];return $?ee(me):me},_e=function(){return C.dbList[0]&&O(C.dbList[0])},xe={open:function(X){const $=Object.create(null),me=X.args||Object.create(null);me.simulateError&&c("Throwing because of simulateError flag.");const I=Object.create(null);$.vfs=me.vfs,$.filename=me.filename||"";const T=C.open($);return I.filename=T.filename,I.persistent=!!u.capi.sqlite3_js_db_uses_vfs(T.pointer,"opfs"),I.dbId=O(T),I.vfs=T.dbVfsName(),I},close:function(X){const $=re(X,!1),me={filename:$&&$.filename};if($){const I=X.args&&typeof X.args=="object"?!!X.args.unlink:!1;C.close($,I)}return me},exec:function(X){const $=typeof X.args=="string"?{sql:X.args}:X.args||Object.create(null);$.rowMode==="stmt"?c("Invalid rowMode for 'exec': stmt mode","does not work in the Worker API."):$.sql||c("'exec' requires input SQL.");const me=re(X);($.callback||Array.isArray($.resultRows))&&(me._blobXfer=C.xfer);const I=$.callback;let T=0;const Q=!!$.columnNames;typeof I=="string"&&(Q||($.columnNames=[]),$.callback=function(z,te){C.post({type:I,columnNames:$.columnNames,rowNumber:++T,row:z},C.xfer)});try{const z=$.countChanges?me.changes(!0,$.countChanges===64):void 0;me.exec($),z!==void 0&&($.changeCount=me.changes(!0,$.countChanges===64)-z);const te=$.lastInsertRowId?u.capi.sqlite3_last_insert_rowid(me):void 0;te!==void 0&&($.lastInsertRowId=te),$.callback instanceof Function&&($.callback=I,C.post({type:I,columnNames:$.columnNames,rowNumber:null,row:void 0}))}finally{delete me._blobXfer,$.callback&&($.callback=I)}return $},"config-get":function(){const X=Object.create(null),$=u.config;return["bigIntEnabled"].forEach(function(me){Object.getOwnPropertyDescriptor($,me)&&(X[me]=$[me])}),X.version=u.version,X.vfsList=u.capi.sqlite3_js_vfs_list(),X},export:function(X){const $=re(X),me={byteArray:u.capi.sqlite3_js_db_export($.pointer),filename:$.filename,mimetype:"application/x-sqlite3"};return C.xfer.push(me.byteArray.buffer),me},toss:function(X){c("Testing worker exception")}};globalThis.onmessage=async function(X){X=X.data;let $,me=X.dbId,I=X.type;const T=performance.now();try{xe.hasOwnProperty(I)&&xe[I]instanceof Function?$=await xe[I](X):c("Unknown db worker message type:",X.type)}catch(Q){I="error",$={operation:X.type,message:Q.message,errorClass:Q.name,input:X},Q.stack&&($.stack=typeof Q.stack=="string"?Q.stack.split(/\n\s*/):Q.stack)}me||(me=$.dbId||_e()),C.post({type:I,dbId:me,messageId:X.messageId,workerReceivedTime:T,workerRespondTime:performance.now(),departureTime:X.departureTime,result:$},C.xfer)},globalThis.postMessage({type:"sqlite3-api",result:"worker1-ready"})}).bind({sqlite3:a})}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){const d=a.wasm,c=a.capi,u=a.util.toss3,p=Object.create(null);a.vfs=p,c.sqlite3_vfs.prototype.registerVfs=function(O=!1){this instanceof a.capi.sqlite3_vfs||u("Expecting a sqlite3_vfs-type argument.");const C=c.sqlite3_vfs_register(this,O?1:0);return C&&u("sqlite3_vfs_register(",this,") failed with rc",C),this.pointer!==c.sqlite3_vfs_find(this.$zName)&&u("BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS",this),this},p.installVfs=function(O){let C=0;const ee=["io","vfs"];for(const re of ee){const _e=O[re];_e&&(++C,_e.struct.installMethods(_e.methods,!!_e.applyArgcCheck),re==="vfs"&&(!_e.struct.$zName&&typeof _e.name=="string"&&_e.struct.addOnDispose(_e.struct.$zName=d.allocCString(_e.name)),_e.struct.registerVfs(!!_e.asDefault)))}return C||u("Misuse: installVfs() options object requires at least","one of:",ee),this}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){if(!a.wasm.exports.sqlite3_declare_vtab)return;const d=a.wasm,c=a.capi,u=a.util.toss3,p=Object.create(null);a.vtab=p;const O=c.sqlite3_index_info;O.prototype.nthConstraint=function(re,_e=!1){if(re<0||re>=this.$nConstraint)return!1;const xe=this.$aConstraint+O.sqlite3_index_constraint.structInfo.sizeof*re;return _e?xe:new O.sqlite3_index_constraint(xe)},O.prototype.nthConstraintUsage=function(re,_e=!1){if(re<0||re>=this.$nConstraint)return!1;const xe=this.$aConstraintUsage+O.sqlite3_index_constraint_usage.structInfo.sizeof*re;return _e?xe:new O.sqlite3_index_constraint_usage(xe)},O.prototype.nthOrderBy=function(re,_e=!1){if(re<0||re>=this.$nOrderBy)return!1;const xe=this.$aOrderBy+O.sqlite3_index_orderby.structInfo.sizeof*re;return _e?xe:new O.sqlite3_index_orderby(xe)};const C=function(re,_e){return(function(xe,X=!1){if(arguments.length===0&&(xe=new _e),xe instanceof _e)return this.set(xe.pointer,xe),xe;d.isPtr(xe)||a.SQLite3Error.toss("Invalid argument to",re+"()");let $=this.get(xe);return X&&this.delete(xe),$}).bind(new Map)},ee=function(re,_e){const xe=C(re,_e);return Object.assign(Object.create(null),{StructType:_e,create:X=>{const $=xe();return d.pokePtr(X,$.pointer),$},get:X=>xe(X),unget:X=>xe(X,!0),dispose:X=>{const $=xe(X,!0);$&&$.dispose()}})};p.xVtab=ee("xVtab",c.sqlite3_vtab),p.xCursor=ee("xCursor",c.sqlite3_vtab_cursor),p.xIndexInfo=re=>new c.sqlite3_index_info(re),p.xError=function re(_e,xe,X){if(re.errorReporter instanceof Function)try{re.errorReporter("sqlite3_module::"+_e+"(): "+xe.message)}catch{}let $;return xe instanceof a.WasmAllocError?$=c.SQLITE_NOMEM:arguments.length>2?$=X:xe instanceof a.SQLite3Error&&($=xe.resultCode),$||c.SQLITE_ERROR},p.xError.errorReporter=console.error.bind(console),p.xRowid=(re,_e)=>d.poke(re,_e,"i64"),p.setupModule=function(re){let _e=!1;const xe=this instanceof c.sqlite3_module?this:re.struct||(_e=new c.sqlite3_module);try{const X=re.methods||u("Missing 'methods' object.");for(const $ of Object.entries({xConnect:"xCreate",xDisconnect:"xDestroy"})){const me=$[0],I=$[1];X[me]===!0?X[me]=X[I]:X[I]===!0&&(X[I]=X[me])}if(re.catchExceptions){const $=function(T,Q){return["xConnect","xCreate"].indexOf(T)>=0?function(z,te,D,fe,ue,b){try{return Q(...arguments)||0}catch(A){return A instanceof a.WasmAllocError||(d.dealloc(d.peekPtr(b)),d.pokePtr(b,d.allocCString(A.message))),p.xError(T,A)}}:function(...z){try{return Q(...z)||0}catch(te){return p.xError(T,te)}}},me=["xCreate","xConnect","xBestIndex","xDisconnect","xDestroy","xOpen","xClose","xFilter","xNext","xEof","xColumn","xRowid","xUpdate","xBegin","xSync","xCommit","xRollback","xFindFunction","xRename","xSavepoint","xRelease","xRollbackTo","xShadowName"],I=Object.create(null);for(const T of me){const Q=X[T];if(Q instanceof Function)T==="xConnect"&&X.xCreate===Q?I[T]=X.xCreate:T==="xCreate"&&X.xConnect===Q?I[T]=X.xConnect:I[T]=$(T,Q);else continue}xe.installMethods(I,!1)}else xe.installMethods(X,!!re.applyArgcCheck);if(xe.$iVersion===0){let $;typeof re.iVersion=="number"?$=re.iVersion:xe.$xShadowName?$=3:xe.$xSavePoint||xe.$xRelease||xe.$xRollbackTo?$=2:$=1,xe.$iVersion=$}}catch(X){throw _e&&_e.dispose(),X}return xe},c.sqlite3_module.prototype.setupModule=function(re){return p.setupModule.call(this,re)}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){const d=function c(u){var C;if(!globalThis.SharedArrayBuffer||!globalThis.Atomics)return Promise.reject(new Error("Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep"));if(typeof WorkerGlobalScope>"u")return Promise.reject(new Error("The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait()."));if(!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle||!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle||!((C=navigator==null?void 0:navigator.storage)!=null&&C.getDirectory))return Promise.reject(new Error("Missing required OPFS APIs."));(!u||typeof u!="object")&&(u=Object.create(null));const p=new URL(globalThis.location.href).searchParams;return p.has("opfs-disable")?Promise.resolve(a):(u.verbose===void 0&&(u.verbose=p.has("opfs-verbose")?+p.get("opfs-verbose")||2:1),u.sanityChecks===void 0&&(u.sanityChecks=p.has("opfs-sanity-check")),u.proxyUri===void 0&&(u.proxyUri=c.defaultProxyUri),typeof u.proxyUri=="function"&&(u.proxyUri=u.proxyUri()),new Promise(function(ee,re){const _e=[a.config.error,a.config.warn,a.config.log],xe=(j,...oe)=>{u.verbose>j&&_e[j]("OPFS syncer:",...oe)},X=(...j)=>xe(2,...j),$=(...j)=>xe(1,...j),me=(...j)=>xe(0,...j),I=a.util.toss,T=a.capi,Q=a.util,z=a.wasm,te=T.sqlite3_vfs,D=T.sqlite3_file,fe=T.sqlite3_io_methods,ue=Object.create(null),b=()=>{var j;return globalThis.FileSystemHandle&&globalThis.FileSystemDirectoryHandle&&globalThis.FileSystemFileHandle&&globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle&&((j=navigator==null?void 0:navigator.storage)==null?void 0:j.getDirectory)};ue.metrics={dump:function(){let j,oe=0,ae=0,Ae=0;for(j in w.opIds){const Ne=U[j];oe+=Ne.count,ae+=Ne.time,Ae+=Ne.wait,Ne.avgTime=Ne.count&&Ne.time?Ne.time/Ne.count:0,Ne.avgWait=Ne.count&&Ne.wait?Ne.wait/Ne.count:0}a.config.log(globalThis.location.href,"metrics for",globalThis.location.href,":",U,`
Total of`,oe,"op(s) for",ae,"ms (incl. "+Ae+" ms of waiting on the async side)"),a.config.log("Serialization metrics:",U.s11n),f.postMessage({type:"opfs-async-metrics"})},reset:function(){let j;const oe=Ae=>Ae.count=Ae.time=Ae.wait=0;for(j in w.opIds)oe(U[j]=Object.create(null));let ae=U.s11n=Object.create(null);ae=ae.serialize=Object.create(null),ae.count=ae.time=0,ae=U.s11n.deserialize=Object.create(null),ae.count=ae.time=0}};const A=new fe,P=new te().addOnDispose(()=>A.dispose());let he;const Z=j=>(he=!0,P.dispose(),re(j)),ge=()=>(he=!1,ee(a)),f=new Worker(new URL("/assets/sqlite3-opfs-async-proxy-DZdsd1Kz.js",self.location.href));setTimeout(()=>{he===void 0&&Z(new Error("Timeout while waiting for OPFS async proxy worker."))},4e3),f._originalOnError=f.onerror,f.onerror=function(j){me("Error initializing OPFS asyncer:",j),Z(new Error("Loading OPFS async Worker failed for unknown reasons."))};const y=T.sqlite3_vfs_find(null),q=y?new te(y):null;A.$iVersion=1,P.$iVersion=2,P.$szOsFile=T.sqlite3_file.structInfo.sizeof,P.$mxPathname=1024,P.$zName=z.allocCString("opfs"),P.$xDlOpen=P.$xDlError=P.$xDlSym=P.$xDlClose=null,P.addOnDispose("$zName",P.$zName,"cleanup default VFS wrapper",()=>q?q.dispose():null);const w=Object.create(null);w.verbose=u.verbose,w.littleEndian=(()=>{const j=new ArrayBuffer(2);return new DataView(j).setInt16(0,256,!0),new Int16Array(j)[0]===256})(),w.asyncIdleWaitTime=150,w.asyncS11nExceptions=1,w.fileBufferSize=1024*64,w.sabS11nOffset=w.fileBufferSize,w.sabS11nSize=P.$mxPathname*2,w.sabIO=new SharedArrayBuffer(w.fileBufferSize+w.sabS11nSize),w.opIds=Object.create(null);const U=Object.create(null);{let j=0;w.opIds.whichOp=j++,w.opIds.rc=j++,w.opIds.xAccess=j++,w.opIds.xClose=j++,w.opIds.xDelete=j++,w.opIds.xDeleteNoWait=j++,w.opIds.xFileSize=j++,w.opIds.xLock=j++,w.opIds.xOpen=j++,w.opIds.xRead=j++,w.opIds.xSleep=j++,w.opIds.xSync=j++,w.opIds.xTruncate=j++,w.opIds.xUnlock=j++,w.opIds.xWrite=j++,w.opIds.mkdir=j++,w.opIds["opfs-async-metrics"]=j++,w.opIds["opfs-async-shutdown"]=j++,w.opIds.retry=j++,w.sabOP=new SharedArrayBuffer(j*4),ue.metrics.reset()}w.sq3Codes=Object.create(null),["SQLITE_ACCESS_EXISTS","SQLITE_ACCESS_READWRITE","SQLITE_BUSY","SQLITE_CANTOPEN","SQLITE_ERROR","SQLITE_IOERR","SQLITE_IOERR_ACCESS","SQLITE_IOERR_CLOSE","SQLITE_IOERR_DELETE","SQLITE_IOERR_FSYNC","SQLITE_IOERR_LOCK","SQLITE_IOERR_READ","SQLITE_IOERR_SHORT_READ","SQLITE_IOERR_TRUNCATE","SQLITE_IOERR_UNLOCK","SQLITE_IOERR_WRITE","SQLITE_LOCK_EXCLUSIVE","SQLITE_LOCK_NONE","SQLITE_LOCK_PENDING","SQLITE_LOCK_RESERVED","SQLITE_LOCK_SHARED","SQLITE_LOCKED","SQLITE_MISUSE","SQLITE_NOTFOUND","SQLITE_OPEN_CREATE","SQLITE_OPEN_DELETEONCLOSE","SQLITE_OPEN_MAIN_DB","SQLITE_OPEN_READONLY"].forEach(j=>{(w.sq3Codes[j]=T[j])===void 0&&I("Maintenance required: not found:",j)}),w.opfsFlags=Object.assign(Object.create(null),{OPFS_UNLOCK_ASAP:1,OPFS_UNLINK_BEFORE_OPEN:2,defaultUnlockAsap:!1});const be=(j,...oe)=>{const ae=w.opIds[j]||I("Invalid op ID:",j);w.s11n.serialize(...oe),Atomics.store(w.sabOPView,w.opIds.rc,-1),Atomics.store(w.sabOPView,w.opIds.whichOp,ae),Atomics.notify(w.sabOPView,w.opIds.whichOp);const Ae=performance.now();for(;Atomics.wait(w.sabOPView,w.opIds.rc,-1)!=="not-equal";);const Ne=Atomics.load(w.sabOPView,w.opIds.rc);if(U[j].wait+=performance.now()-Ae,Ne&&w.asyncS11nExceptions){const Ke=w.s11n.deserialize();Ke&&me(j+"() async error:",...Ke)}return Ne};ue.debug={asyncShutdown:()=>{$("Shutting down OPFS async listener. The OPFS VFS will no longer work."),be("opfs-async-shutdown")},asyncRestart:()=>{$("Attempting to restart OPFS VFS async listener. Might work, might not."),f.postMessage({type:"opfs-async-restart"})}};const De=()=>{if(w.s11n)return w.s11n;const j=new TextDecoder,oe=new TextEncoder("utf-8"),ae=new Uint8Array(w.sabIO,w.sabS11nOffset,w.sabS11nSize),Ae=new DataView(w.sabIO,w.sabS11nOffset,w.sabS11nSize);w.s11n=Object.create(null);const Ne=Object.create(null);Ne.number={id:1,size:8,getter:"getFloat64",setter:"setFloat64"},Ne.bigint={id:2,size:8,getter:"getBigInt64",setter:"setBigInt64"},Ne.boolean={id:3,size:4,getter:"getInt32",setter:"setInt32"},Ne.string={id:4};const Ke=G=>Ne[typeof G]||I("Maintenance required: this value type cannot be serialized.",G),Me=G=>{switch(G){case Ne.number.id:return Ne.number;case Ne.bigint.id:return Ne.bigint;case Ne.boolean.id:return Ne.boolean;case Ne.string.id:return Ne.string;default:I("Invalid type ID:",G)}};return w.s11n.deserialize=function(G=!1){++U.s11n.deserialize.count;const N=performance.now(),L=ae[0],B=L?[]:null;if(L){const V=[];let we=1,Te,Je,lt;for(Te=0;Te<L;++Te,++we)V.push(Me(ae[we]));for(Te=0;Te<L;++Te){const kr=V[Te];kr.getter?(lt=Ae[kr.getter](we,w.littleEndian),we+=kr.size):(Je=Ae.getInt32(we,w.littleEndian),we+=4,lt=j.decode(ae.slice(we,we+Je)),we+=Je),B.push(lt)}}return G&&(ae[0]=0),U.s11n.deserialize.time+=performance.now()-N,B},w.s11n.serialize=function(...G){const N=performance.now();if(++U.s11n.serialize.count,G.length){const L=[];let B=0,V=1;for(ae[0]=G.length&255;B<G.length;++B,++V)L.push(Ke(G[B])),ae[V]=L[B].id;for(B=0;B<G.length;++B){const we=L[B];if(we.setter)Ae[we.setter](V,G[B],w.littleEndian),V+=we.size;else{const Te=oe.encode(G[B]);Ae.setInt32(V,Te.byteLength,w.littleEndian),V+=4,ae.set(Te,V),V+=Te.byteLength}}}else ae[0]=0;U.s11n.serialize.time+=performance.now()-N},w.s11n},it=function j(oe=16){j._chars||(j._chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789",j._n=j._chars.length);const ae=[];let Ae=0;for(;Ae<oe;++Ae){const Ne=Math.random()*(j._n*64)%j._n|0;ae[Ae]=j._chars[Ne]}return ae.join("")},Ye=Object.create(null),st=Object.create(null);st.op=void 0,st.start=void 0;const ot=j=>{st.start=performance.now(),st.op=j,++U[j].count},tt=()=>U[st.op].time+=performance.now()-st.start,rt={xCheckReservedLock:function(j,oe){return z.poke(oe,0,"i32"),0},xClose:function(j){ot("xClose");let oe=0;const ae=Ye[j];return ae&&(delete Ye[j],oe=be("xClose",j),ae.sq3File&&ae.sq3File.dispose()),tt(),oe},xDeviceCharacteristics:function(j){return T.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN},xFileControl:function(j,oe,ae){return T.SQLITE_NOTFOUND},xFileSize:function(j,oe){ot("xFileSize");let ae=be("xFileSize",j);if(ae==0)try{const Ae=w.s11n.deserialize()[0];z.poke(oe,Ae,"i64")}catch(Ae){me("Unexpected error reading xFileSize() result:",Ae),ae=w.sq3Codes.SQLITE_IOERR}return tt(),ae},xLock:function(j,oe){ot("xLock");const ae=Ye[j];let Ae=0;return ae.lockType?ae.lockType=oe:(Ae=be("xLock",j,oe),Ae===0&&(ae.lockType=oe)),tt(),Ae},xRead:function(j,oe,ae,Ae){ot("xRead");const Ne=Ye[j];let Ke;try{Ke=be("xRead",j,ae,Number(Ae)),(Ke===0||T.SQLITE_IOERR_SHORT_READ===Ke)&&z.heap8u().set(Ne.sabView.subarray(0,ae),oe)}catch(Me){me("xRead(",arguments,") failed:",Me,Ne),Ke=T.SQLITE_IOERR_READ}return tt(),Ke},xSync:function(j,oe){ot("xSync"),++U.xSync.count;const ae=be("xSync",j,oe);return tt(),ae},xTruncate:function(j,oe){ot("xTruncate");const ae=be("xTruncate",j,Number(oe));return tt(),ae},xUnlock:function(j,oe){ot("xUnlock");const ae=Ye[j];let Ae=0;return T.SQLITE_LOCK_NONE===oe&&ae.lockType&&(Ae=be("xUnlock",j,oe)),Ae===0&&(ae.lockType=oe),tt(),Ae},xWrite:function(j,oe,ae,Ae){ot("xWrite");const Ne=Ye[j];let Ke;try{Ne.sabView.set(z.heap8u().subarray(oe,oe+ae)),Ke=be("xWrite",j,ae,Number(Ae))}catch(Me){me("xWrite(",arguments,") failed:",Me,Ne),Ke=T.SQLITE_IOERR_WRITE}return tt(),Ke}},at={xAccess:function(j,oe,ae,Ae){ot("xAccess");const Ne=be("xAccess",z.cstrToJs(oe));return z.poke(Ae,Ne?0:1,"i32"),tt(),0},xCurrentTime:function(j,oe){return z.poke(oe,24405875e-1+new Date().getTime()/864e5,"double"),0},xCurrentTimeInt64:function(j,oe){return z.poke(oe,24405875e-1*864e5+new Date().getTime(),"i64"),0},xDelete:function(j,oe,ae){ot("xDelete");const Ae=be("xDelete",z.cstrToJs(oe),ae,!1);return tt(),Ae},xFullPathname:function(j,oe,ae,Ae){return z.cstrncpy(Ae,oe,ae)<ae?0:T.SQLITE_CANTOPEN},xGetLastError:function(j,oe,ae){return $("OPFS xGetLastError() has nothing sensible to return."),0},xOpen:function(oe,ae,Ae,Ne,Ke){ot("xOpen");let Me=0;ae===0?ae=it():z.isPtr(ae)&&(T.sqlite3_uri_boolean(ae,"opfs-unlock-asap",0)&&(Me|=w.opfsFlags.OPFS_UNLOCK_ASAP),T.sqlite3_uri_boolean(ae,"delete-before-open",0)&&(Me|=w.opfsFlags.OPFS_UNLINK_BEFORE_OPEN),ae=z.cstrToJs(ae));const G=Object.create(null);G.fid=Ae,G.filename=ae,G.sab=new SharedArrayBuffer(w.fileBufferSize),G.flags=Ne,G.readOnly=!(a.SQLITE_OPEN_CREATE&Ne)&&!!(Ne&T.SQLITE_OPEN_READONLY);const N=be("xOpen",Ae,ae,Ne,Me);return N||(G.readOnly&&z.poke(Ke,T.SQLITE_OPEN_READONLY,"i32"),Ye[Ae]=G,G.sabView=w.sabFileBufView,G.sq3File=new D(Ae),G.sq3File.$pMethods=A.pointer,G.lockType=T.SQLITE_LOCK_NONE),tt(),N}};q&&(P.$xRandomness=q.$xRandomness,P.$xSleep=q.$xSleep),P.$xRandomness||(at.xRandomness=function(j,oe,ae){const Ae=z.heap8u();let Ne=0;for(;Ne<oe;++Ne)Ae[ae+Ne]=Math.random()*255e3&255;return Ne}),P.$xSleep||(at.xSleep=function(j,oe){return Atomics.wait(w.sabOPView,w.opIds.xSleep,0,oe),0}),ue.getResolvedPath=function(j,oe){const ae=new URL(j,"file://irrelevant").pathname;return oe?ae.split("/").filter(Ae=>!!Ae):ae},ue.getDirForFilename=async function(oe,ae=!1){const Ae=ue.getResolvedPath(oe,!0),Ne=Ae.pop();let Ke=ue.rootDirectory;for(const Me of Ae)Me&&(Ke=await Ke.getDirectoryHandle(Me,{create:!!ae}));return[Ke,Ne]},ue.mkdir=async function(j){try{return await ue.getDirForFilename(j+"/filepart",!0),!0}catch{return!1}},ue.entryExists=async function(j){try{const[oe,ae]=await ue.getDirForFilename(j);return await oe.getFileHandle(ae),!0}catch{return!1}},ue.randomFilename=it,ue.treeList=async function(){const j=async function ae(Ae,Ne){Ne.name=Ae.name,Ne.dirs=[],Ne.files=[];for await(const Ke of Ae.values())if(Ke.kind==="directory"){const Me=Object.create(null);Ne.dirs.push(Me),await ae(Ke,Me)}else Ne.files.push(Ke.name)},oe=Object.create(null);return await j(ue.rootDirectory,oe),oe},ue.rmfr=async function(){const j=ue.rootDirectory,oe={recurse:!0};for await(const ae of j.values())j.removeEntry(ae.name,oe)},ue.unlink=async function(j,oe=!1,ae=!1){try{const[Ae,Ne]=await ue.getDirForFilename(j,!1);return await Ae.removeEntry(Ne,{recursive:oe}),!0}catch(Ae){if(ae)throw new Error("unlink(",arguments[0],") failed: "+Ae.message,{cause:Ae});return!1}},ue.traverse=async function(j){const oe={recursive:!0,directory:ue.rootDirectory};typeof j=="function"&&(j={callback:j}),j=Object.assign(oe,j||{}),async function Ae(Ne,Ke){for await(const Me of Ne.values()){if(j.callback(Me,Ne,Ke)===!1)return!1;if(j.recursive&&Me.kind==="directory"&&await Ae(Me,Ke+1)===!1)break}}(j.directory,0)};const or=async function(j,oe){const[ae,Ae]=await ue.getDirForFilename(j,!0);let Ke=await(await ae.getFileHandle(Ae,{create:!0})).createSyncAccessHandle(),Me=0,G,N=!1;try{for(Ke.truncate(0);(G=await oe())!==void 0;)G instanceof ArrayBuffer&&(G=new Uint8Array(G)),Me===0&&G.byteLength>=15&&(Q.affirmDbHeader(G),N=!0),Ke.write(G,{at:Me}),Me+=G.byteLength;if((Me<512||Me%512!==0)&&I("Input size",Me,"is not correct for an SQLite database."),!N){const L=new Uint8Array(20);Ke.read(L,{at:0}),Q.affirmDbHeader(L)}return Ke.write(new Uint8Array([1,1]),{at:18}),Me}catch(L){throw await Ke.close(),Ke=void 0,await ae.removeEntry(Ae).catch(()=>{}),L}finally{Ke&&await Ke.close()}};if(ue.importDb=async function(j,oe){if(oe instanceof Function)return or(j,oe);oe instanceof ArrayBuffer&&(oe=new Uint8Array(oe)),Q.affirmIsDb(oe);const ae=oe.byteLength,[Ae,Ne]=await ue.getDirForFilename(j,!0);let Ke,Me=0;try{return Ke=await(await Ae.getFileHandle(Ne,{create:!0})).createSyncAccessHandle(),Ke.truncate(0),Me=Ke.write(oe,{at:0}),Me!=ae&&I("Expected to write "+ae+" bytes but wrote "+Me+"."),Ke.write(new Uint8Array([1,1]),{at:18}),Me}catch(G){throw Ke&&(await Ke.close(),Ke=void 0),await Ae.removeEntry(Ne).catch(()=>{}),G}finally{Ke&&await Ke.close()}},a.oo1){const j=function(...oe){const ae=a.oo1.DB.dbCtorHelper.normalizeArgs(...oe);ae.vfs=P.$zName,a.oo1.DB.dbCtorHelper.call(this,ae)};j.prototype=Object.create(a.oo1.DB.prototype),a.oo1.OpfsDb=j,j.importDb=ue.importDb,a.oo1.DB.dbCtorHelper.setVfsPostOpenCallback(P.pointer,function(oe,ae){ae.capi.sqlite3_busy_timeout(oe,1e4)})}const ar=function(){const j=z.scopedAllocPush(),oe=new D;try{const ae=oe.pointer,Ae=T.SQLITE_OPEN_CREATE|T.SQLITE_OPEN_READWRITE|T.SQLITE_OPEN_MAIN_DB,Ne=z.scopedAlloc(8),Ke="/sanity/check/file"+it(8),Me=z.scopedAllocCString(Ke);let G;if(w.s11n.serialize("This is ä string."),G=w.s11n.deserialize(),X("deserialize() says:",G),G[0]!=="This is ä string."&&I("String d13n error."),at.xAccess(P.pointer,Me,0,Ne),G=z.peek(Ne,"i32"),X("xAccess(",Ke,") exists ?=",G),G=at.xOpen(P.pointer,Me,ae,Ae,Ne),X("open rc =",G,"state.sabOPView[xOpen] =",w.sabOPView[w.opIds.xOpen]),G!==0){me("open failed with code",G);return}at.xAccess(P.pointer,Me,0,Ne),G=z.peek(Ne,"i32"),G||I("xAccess() failed to detect file."),G=rt.xSync(oe.pointer,0),G&&I("sync failed w/ rc",G),G=rt.xTruncate(oe.pointer,1024),G&&I("truncate failed w/ rc",G),z.poke(Ne,0,"i64"),G=rt.xFileSize(oe.pointer,Ne),G&&I("xFileSize failed w/ rc",G),X("xFileSize says:",z.peek(Ne,"i64")),G=rt.xWrite(oe.pointer,Me,10,1),G&&I("xWrite() failed!");const N=z.scopedAlloc(16);G=rt.xRead(oe.pointer,N,6,2),z.poke(N+6,0);let L=z.cstrToJs(N);X("xRead() got:",L),L!=="sanity"&&I("Unexpected xRead() value."),at.xSleep&&(X("xSleep()ing before close()ing..."),at.xSleep(P.pointer,2e3),X("waking up from xSleep()")),G=rt.xClose(ae),X("xClose rc =",G,"sabOPView =",w.sabOPView),X("Deleting file:",Ke),at.xDelete(P.pointer,Me,4660),at.xAccess(P.pointer,Me,0,Ne),G=z.peek(Ne,"i32"),G&&I("Expecting 0 from xAccess(",Ke,") after xDelete()."),$("End of OPFS sanity checks.")}finally{oe.dispose(),z.scopedAllocPop(j)}};f.onmessage=function({data:j}){switch(j.type){case"opfs-unavailable":Z(new Error(j.payload.join(" ")));break;case"opfs-async-loaded":f.postMessage({type:"opfs-async-init",args:w});break;case"opfs-async-inited":{if(he===!0)break;try{a.vfs.installVfs({io:{struct:A,methods:rt},vfs:{struct:P,methods:at}}),w.sabOPView=new Int32Array(w.sabOP),w.sabFileBufView=new Uint8Array(w.sabIO,0,w.fileBufferSize),w.sabS11nView=new Uint8Array(w.sabIO,w.sabS11nOffset,w.sabS11nSize),De(),u.sanityChecks&&($("Running sanity checks because of opfs-sanity-check URL arg..."),ar()),b()?navigator.storage.getDirectory().then(oe=>{f.onerror=f._originalOnError,delete f._originalOnError,a.opfs=ue,ue.rootDirectory=oe,X("End of OPFS sqlite3_vfs setup.",P),ge()}).catch(Z):ge()}catch(oe){me(oe),Z(oe)}break}default:{const oe="Unexpected message from the OPFS async worker: "+JSON.stringify(j);me(oe),Z(new Error(oe));break}}}}))};d.defaultProxyUri="sqlite3-opfs-async-proxy.js",globalThis.sqlite3ApiBootstrap.initializersAsync.push(async c=>{try{let u=d.defaultProxyUri;return c.scriptInfo.sqlite3Dir&&(d.defaultProxyUri=c.scriptInfo.sqlite3Dir+u),d().catch(p=>{c.config.warn("Ignoring inability to install OPFS sqlite3_vfs:",p.message)})}catch(u){return c.config.error("installOpfsVfs() exception:",u),Promise.reject(u)}})}),globalThis.sqlite3ApiBootstrap.initializers.push(function(a){var st,ot,tt,rt,at,or,ar,j,oe,ae,Ae,Ne,Ll,Me;const d=a.util.toss,c=a.util.toss3,u=Object.create(null),p=a.capi,O=a.util,C=a.wasm,ee=4096,re=512,_e=4,xe=8,X=re+_e,$=re,me=X,I=ee,T=p.SQLITE_OPEN_MAIN_DB|p.SQLITE_OPEN_MAIN_JOURNAL|p.SQLITE_OPEN_SUPER_JOURNAL|p.SQLITE_OPEN_WAL,Q=p.SQLITE_OPEN_MEMORY,z=".opaque",te=()=>Math.random().toString(36).slice(2),D=new TextDecoder,fe=new TextEncoder,ue=Object.assign(Object.create(null),{name:"opfs-sahpool",directory:void 0,initialCapacity:6,clearOnInit:!1,verbosity:2,forceReinitIfPreviouslyFailed:!1}),b=[a.config.error,a.config.warn,a.config.log];a.config.log;const A=a.config.warn;a.config.error;const P=new Map,he=G=>P.get(G),Z=(G,N)=>{N?P.set(G,N):P.delete(G)},ge=new Map,f=G=>ge.get(G),y=(G,N)=>{N?ge.set(G,N):ge.delete(G)},q={xCheckReservedLock:function(G,N){const L=f(G);return L.log("xCheckReservedLock"),L.storeErr(),C.poke32(N,1),0},xClose:function(G){const N=f(G);N.storeErr();const L=N.getOFileForS3File(G);if(L)try{N.log(`xClose ${L.path}`),N.mapS3FileToOFile(G,!1),L.sah.flush(),L.flags&p.SQLITE_OPEN_DELETEONCLOSE&&N.deletePath(L.path)}catch(B){return N.storeErr(B,p.SQLITE_IOERR)}return 0},xDeviceCharacteristics:function(G){return p.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN},xFileControl:function(G,N,L){return p.SQLITE_NOTFOUND},xFileSize:function(G,N){const L=f(G);L.log("xFileSize");const V=L.getOFileForS3File(G).sah.getSize()-I;return C.poke64(N,BigInt(V)),0},xLock:function(G,N){const L=f(G);L.log(`xLock ${N}`),L.storeErr();const B=L.getOFileForS3File(G);return B.lockType=N,0},xRead:function(G,N,L,B){const V=f(G);V.storeErr();const we=V.getOFileForS3File(G);V.log(`xRead ${we.path} ${L} @ ${B}`);try{const Te=we.sah.read(C.heap8u().subarray(N,N+L),{at:I+Number(B)});return Te<L?(C.heap8u().fill(0,N+Te,N+L),p.SQLITE_IOERR_SHORT_READ):0}catch(Te){return V.storeErr(Te,p.SQLITE_IOERR)}},xSectorSize:function(G){return ee},xSync:function(G,N){const L=f(G);L.log(`xSync ${N}`),L.storeErr();const B=L.getOFileForS3File(G);try{return B.sah.flush(),0}catch(V){return L.storeErr(V,p.SQLITE_IOERR)}},xTruncate:function(G,N){const L=f(G);L.log(`xTruncate ${N}`),L.storeErr();const B=L.getOFileForS3File(G);try{return B.sah.truncate(I+Number(N)),0}catch(V){return L.storeErr(V,p.SQLITE_IOERR)}},xUnlock:function(G,N){const L=f(G);L.log("xUnlock");const B=L.getOFileForS3File(G);return B.lockType=N,0},xWrite:function(G,N,L,B){const V=f(G);V.storeErr();const we=V.getOFileForS3File(G);V.log(`xWrite ${we.path} ${L} ${B}`);try{const Te=we.sah.write(C.heap8u().subarray(N,N+L),{at:I+Number(B)});return L===Te?0:d("Unknown write() failure.")}catch(Te){return V.storeErr(Te,p.SQLITE_IOERR)}}},w=new p.sqlite3_io_methods;w.$iVersion=1,a.vfs.installVfs({io:{struct:w,methods:q}});const U={xAccess:function(G,N,L,B){const V=he(G);V.storeErr();try{const we=V.getPath(N);C.poke32(B,V.hasFilename(we)?1:0)}catch{C.poke32(B,0)}return 0},xCurrentTime:function(G,N){return C.poke(N,24405875e-1+new Date().getTime()/864e5,"double"),0},xCurrentTimeInt64:function(G,N){return C.poke(N,24405875e-1*864e5+new Date().getTime(),"i64"),0},xDelete:function(G,N,L){const B=he(G);B.log(`xDelete ${C.cstrToJs(N)}`),B.storeErr();try{return B.deletePath(B.getPath(N)),0}catch(V){return B.storeErr(V),p.SQLITE_IOERR_DELETE}},xFullPathname:function(G,N,L,B){return C.cstrncpy(B,N,L)<L?0:p.SQLITE_CANTOPEN},xGetLastError:function(G,N,L){const B=he(G),V=B.popErr();if(B.log(`xGetLastError ${N} e =`,V),V){const we=C.scopedAllocPush();try{const[Te,Je]=C.scopedAllocCString(V.message,!0);C.cstrncpy(L,Te,N),Je>N&&C.poke8(L+N-1,0)}catch{return p.SQLITE_NOMEM}finally{C.scopedAllocPop(we)}}return V?V.sqlite3Rc||p.SQLITE_IOERR:0},xOpen:function(N,L,B,V,we){const Te=he(N);try{V&=~Q,Te.log(`xOpen ${C.cstrToJs(L)} ${V}`);const Je=L&&C.peek8(L)?Te.getPath(L):te();let lt=Te.getSAHForPath(Je);!lt&&V&p.SQLITE_OPEN_CREATE&&(Te.getFileCount()<Te.getCapacity()?(lt=Te.nextAvailableSAH(),Te.setAssociatedPath(lt,Je,V)):d("SAH pool is full. Cannot create file",Je)),lt||d("file not found:",Je);const kr={path:Je,flags:V,sah:lt};Te.mapS3FileToOFile(B,kr),kr.lockType=p.SQLITE_LOCK_NONE;const mr=new p.sqlite3_file(B);return mr.$pMethods=w.pointer,mr.dispose(),C.poke32(we,V),0}catch(Je){return Te.storeErr(Je),p.SQLITE_CANTOPEN}}},be=function(G){a.capi.sqlite3_vfs_find(G)&&c("VFS name is already registered:",G);const N=new p.sqlite3_vfs,L=p.sqlite3_vfs_find(null),B=L?new p.sqlite3_vfs(L):null;return N.$iVersion=2,N.$szOsFile=p.sqlite3_file.structInfo.sizeof,N.$mxPathname=re,N.addOnDispose(N.$zName=C.allocCString(G),()=>Z(N.pointer,0)),B&&(N.$xRandomness=B.$xRandomness,N.$xSleep=B.$xSleep,B.dispose()),!N.$xRandomness&&!U.xRandomness&&(U.xRandomness=function(V,we,Te){const Je=C.heap8u();let lt=0;for(;lt<we;++lt)Je[Te+lt]=Math.random()*255e3&255;return lt}),!N.$xSleep&&!U.xSleep&&(U.xSleep=(V,we)=>0),a.vfs.installVfs({vfs:{struct:N,methods:U}}),N};class De{constructor(N=Object.create(null)){ne(this,Ne);Ce(this,"vfsDir");ne(this,st);ne(this,ot);ne(this,tt);ne(this,rt,new Map);ne(this,at,new Map);ne(this,or,new Set);ne(this,ar,new Map);ne(this,j,new Uint8Array(X));ne(this,oe);ne(this,ae);ne(this,Ae);le(this,Ae,N.verbosity??ue.verbosity),this.vfsName=N.name||ue.name,le(this,ae,be(this.vfsName)),Z(s(this,ae).pointer,this),this.vfsDir=N.directory||"."+this.vfsName,le(this,oe,new DataView(s(this,j).buffer,s(this,j).byteOffset)),this.isReady=this.reset(!!(N.clearOnInit??ue.clearOnInit)).then(()=>{if(this.$error)throw this.$error;return this.getCapacity()?Promise.resolve(void 0):this.addCapacity(N.initialCapacity||ue.initialCapacity)})}log(...N){Ue(this,Ne,Ll).call(this,2,...N)}warn(...N){Ue(this,Ne,Ll).call(this,1,...N)}error(...N){Ue(this,Ne,Ll).call(this,0,...N)}getVfs(){return s(this,ae)}getCapacity(){return s(this,rt).size}getFileCount(){return s(this,at).size}getFileNames(){const N=[];for(const L of s(this,at).keys())N.push(L);return N}async addCapacity(N){for(let L=0;L<N;++L){const B=te(),we=await(await s(this,ot).getFileHandle(B,{create:!0})).createSyncAccessHandle();s(this,rt).set(we,B),this.setAssociatedPath(we,"",0)}return this.getCapacity()}async reduceCapacity(N){let L=0;for(const B of Array.from(s(this,or))){if(L===N||this.getFileCount()===this.getCapacity())break;const V=s(this,rt).get(B);B.close(),await s(this,ot).removeEntry(V),s(this,rt).delete(B),s(this,or).delete(B),++L}return L}releaseAccessHandles(){for(const N of s(this,rt).keys())N.close();s(this,rt).clear(),s(this,at).clear(),s(this,or).clear()}async acquireAccessHandles(N=!1){const L=[];for await(const[B,V]of s(this,ot))V.kind==="file"&&L.push([B,V]);return Promise.all(L.map(async([B,V])=>{try{const we=await V.createSyncAccessHandle();if(s(this,rt).set(we,B),N)we.truncate(I),this.setAssociatedPath(we,"",0);else{const Te=this.getAssociatedPath(we);Te?s(this,at).set(Te,we):s(this,or).add(we)}}catch(we){throw this.storeErr(we),this.releaseAccessHandles(),we}}))}getAssociatedPath(N){N.read(s(this,j),{at:0});const L=s(this,oe).getUint32($);if(s(this,j)[0]&&(L&p.SQLITE_OPEN_DELETEONCLOSE||!(L&T)))return A(`Removing file with unexpected flags ${L.toString(16)}`,s(this,j)),this.setAssociatedPath(N,"",0),"";const B=new Uint32Array(xe/4);N.read(B,{at:me});const V=this.computeDigest(s(this,j),L);if(B.every((we,Te)=>we===V[Te])){const we=s(this,j).findIndex(Te=>Te===0);return we===0&&N.truncate(I),we?D.decode(s(this,j).subarray(0,we)):""}else return A("Disassociating file with bad digest."),this.setAssociatedPath(N,"",0),""}setAssociatedPath(N,L,B){const V=fe.encodeInto(L,s(this,j));re<=V.written+1&&d("Path too long:",L),L&&B&&(B|=Q),s(this,j).fill(0,V.written,re),s(this,oe).setUint32($,B);const we=this.computeDigest(s(this,j),B);N.write(s(this,j),{at:0}),N.write(we,{at:me}),N.flush(),L?(s(this,at).set(L,N),s(this,or).delete(N)):(N.truncate(I),s(this,or).add(N))}computeDigest(N,L){if(L&Q){let B=3735928559,V=1103547991;for(const we of N)B=Math.imul(B^we,2654435761),V=Math.imul(V^we,104729);return new Uint32Array([B>>>0,V>>>0])}else return new Uint32Array([0,0])}async reset(N){await this.isReady;let L=await navigator.storage.getDirectory(),B;for(const V of this.vfsDir.split("/"))V&&(B=L,L=await L.getDirectoryHandle(V,{create:!0}));return le(this,st,L),le(this,tt,B),le(this,ot,await s(this,st).getDirectoryHandle(z,{create:!0})),this.releaseAccessHandles(),this.acquireAccessHandles(N)}getPath(N){return C.isPtr(N)&&(N=C.cstrToJs(N)),(N instanceof URL?N:new URL(N,"file://localhost/")).pathname}deletePath(N){const L=s(this,at).get(N);return L&&(s(this,at).delete(N),this.setAssociatedPath(L,"",0)),!!L}storeErr(N,L){return N&&(N.sqlite3Rc=L||p.SQLITE_IOERR,this.error(N)),this.$error=N,L}popErr(){const N=this.$error;return this.$error=void 0,N}nextAvailableSAH(){const[N]=s(this,or).keys();return N}getOFileForS3File(N){return s(this,ar).get(N)}mapS3FileToOFile(N,L){L?(s(this,ar).set(N,L),y(N,this)):(s(this,ar).delete(N),y(N,!1))}hasFilename(N){return s(this,at).has(N)}getSAHForPath(N){return s(this,at).get(N)}async removeVfs(){if(!s(this,ae).pointer||!s(this,ot))return!1;p.sqlite3_vfs_unregister(s(this,ae).pointer),s(this,ae).dispose(),delete u[this.vfsName];try{this.releaseAccessHandles(),await s(this,st).removeEntry(z,{recursive:!0}),le(this,ot,void 0),await s(this,tt).removeEntry(s(this,st).name,{recursive:!0}),le(this,st,le(this,tt,void 0))}catch(N){a.config.error(this.vfsName,"removeVfs() failed with no recovery strategy:",N)}return!0}pauseVfs(){return s(this,ar).size>0&&a.SQLite3Error.toss(p.SQLITE_MISUSE,"Cannot pause VFS",this.vfsName,"because it has opened files."),s(this,rt).size>0&&(p.sqlite3_vfs_unregister(this.vfsName),this.releaseAccessHandles()),this}isPaused(){return s(this,rt).size===0}async unpauseVfs(){return s(this,rt).size===0?this.acquireAccessHandles(!1).then(()=>p.sqlite3_vfs_register(s(this,ae),0),this):this}exportFile(N){const L=s(this,at).get(N)||d("File not found:",N),B=L.getSize()-I,V=new Uint8Array(B>0?B:0);if(B>0){const we=L.read(V,{at:I});we!=B&&d("Expected to read "+B+" bytes but read "+we+".")}return V}async importDbChunked(N,L){const B=s(this,at).get(N)||this.nextAvailableSAH()||d("No available handles to import to.");B.truncate(0);let V=0,we,Te=!1;try{for(;(we=await L())!==void 0;)we instanceof ArrayBuffer&&(we=new Uint8Array(we)),V===0&&we.byteLength>=15&&(O.affirmDbHeader(we),Te=!0),B.write(we,{at:I+V}),V+=we.byteLength;if((V<512||V%512!==0)&&d("Input size",V,"is not correct for an SQLite database."),!Te){const Je=new Uint8Array(20);B.read(Je,{at:0}),O.affirmDbHeader(Je)}B.write(new Uint8Array([1,1]),{at:I+18})}catch(Je){throw this.setAssociatedPath(B,"",0),Je}return this.setAssociatedPath(B,N,p.SQLITE_OPEN_MAIN_DB),V}importDb(N,L){if(L instanceof ArrayBuffer)L=new Uint8Array(L);else if(L instanceof Function)return this.importDbChunked(N,L);const B=s(this,at).get(N)||this.nextAvailableSAH()||d("No available handles to import to."),V=L.byteLength;(V<512||V%512!=0)&&d("Byte array size is invalid for an SQLite db.");const we="SQLite format 3";for(let Je=0;Je<we.length;++Je)we.charCodeAt(Je)!==L[Je]&&d("Input does not contain an SQLite database header.");const Te=B.write(L,{at:I});return Te!=V?(this.setAssociatedPath(B,"",0),d("Expected to write "+V+" bytes but wrote "+Te+".")):(B.write(new Uint8Array([1,1]),{at:I+18}),this.setAssociatedPath(B,N,p.SQLITE_OPEN_MAIN_DB)),Te}}st=new WeakMap,ot=new WeakMap,tt=new WeakMap,rt=new WeakMap,at=new WeakMap,or=new WeakMap,ar=new WeakMap,j=new WeakMap,oe=new WeakMap,ae=new WeakMap,Ae=new WeakMap,Ne=new WeakSet,Ll=function(N,...L){s(this,Ae)>N&&b[N](this.vfsName+":",...L)};class it{constructor(N){ne(this,Me);le(this,Me,N),this.vfsName=N.vfsName}async addCapacity(N){return s(this,Me).addCapacity(N)}async reduceCapacity(N){return s(this,Me).reduceCapacity(N)}getCapacity(){return s(this,Me).getCapacity(s(this,Me))}getFileCount(){return s(this,Me).getFileCount()}getFileNames(){return s(this,Me).getFileNames()}async reserveMinimumCapacity(N){const L=s(this,Me).getCapacity();return L<N?s(this,Me).addCapacity(N-L):L}exportFile(N){return s(this,Me).exportFile(N)}importDb(N,L){return s(this,Me).importDb(N,L)}async wipeFiles(){return s(this,Me).reset(!0)}unlink(N){return s(this,Me).deletePath(N)}async removeVfs(){return s(this,Me).removeVfs()}pauseVfs(){return s(this,Me).pauseVfs(),this}async unpauseVfs(){return s(this,Me).unpauseVfs().then(()=>this)}isPaused(){return s(this,Me).isPaused()}}Me=new WeakMap;const Ye=async()=>{const G=await navigator.storage.getDirectory(),N=".opfs-sahpool-sync-check-"+te(),V=(await(await G.getFileHandle(N,{create:!0})).createSyncAccessHandle()).close();return await V,await G.removeEntry(N),V!=null&&V.then&&d("The local OPFS API is too old for opfs-sahpool:","it has an async FileSystemSyncAccessHandle.close() method."),!0};a.installOpfsSAHPoolVfs=async function(G=Object.create(null)){var L;G=Object.assign(Object.create(null),ue,G||{});const N=G.name;if(G.$testThrowPhase1)throw G.$testThrowPhase1;if(u[N])try{return await u[N]}catch(B){if(G.forceReinitIfPreviouslyFailed)delete u[N];else throw B}return!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle||!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle||!((L=navigator==null?void 0:navigator.storage)!=null&&L.getDirectory)?u[N]=Promise.reject(new Error("Missing required OPFS APIs.")):u[N]=Ye().then(async function(){if(G.$testThrowPhase2)throw G.$testThrowPhase2;const B=new De(G);return B.isReady.then(async()=>{const V=new it(B);if(a.oo1){const we=a.oo1,Te=B.getVfs(),Je=function(...lt){const kr=we.DB.dbCtorHelper.normalizeArgs(...lt);kr.vfs=Te.$zName,we.DB.dbCtorHelper.call(this,kr)};Je.prototype=Object.create(we.DB.prototype),V.OpfsSAHPoolDb=Je}return B.log("VFS initialized."),V}).catch(async V=>{throw await B.removeVfs().catch(()=>{}),V})}).catch(B=>u[N]=Promise.reject(B))}}),typeof t<"u"){const a=Object.assign(Object.create(null),{exports:typeof yo>"u"?t.asm:yo,memory:t.wasmMemory},globalThis.sqlite3ApiConfig||{});globalThis.sqlite3ApiConfig=a;let d;try{d=globalThis.sqlite3ApiBootstrap()}catch(c){throw console.error("sqlite3ApiBootstrap() error:",c),c}finally{delete globalThis.sqlite3ApiBootstrap,delete globalThis.sqlite3ApiConfig}t.sqlite3=d}else console.warn("This is not running in an Emscripten module context, so","globalThis.sqlite3ApiBootstrap() is _not_ being called due to lack","of config info for the WASM environment.","It must be called manually.")},ut?e=t:e=new Promise((i,a)=>{ke=i,$e=a}),e};Tu=function(){var t,n;const r=Tu;if(!r)throw new Error("Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.");const e=globalThis.sqlite3InitModuleState=Object.assign(Object.create(null),{moduleScript:(t=globalThis==null?void 0:globalThis.document)==null?void 0:t.currentScript,isWorker:typeof WorkerGlobalScope<"u",location:globalThis.location,urlParams:(n=globalThis==null?void 0:globalThis.location)!=null&&n.href?new URL(globalThis.location.href).searchParams:new URLSearchParams});if(e.debugModule=e.urlParams.has("sqlite3.debugModule")?(...o)=>console.warn("sqlite3.debugModule:",...o):()=>{},e.urlParams.has("sqlite3.dir"))e.sqlite3Dir=e.urlParams.get("sqlite3.dir")+"/";else if(e.moduleScript){const o=e.moduleScript.src.split("/");o.pop(),e.sqlite3Dir=o.join("/")+"/"}if(globalThis.sqlite3InitModule=function o(...l){return r(...l).then(h=>{h.runSQLite3PostLoadInit(h);const g=h.sqlite3;g.scriptInfo=e,o.__isUnderTest&&(g.__isUnderTest=!0);const S=g.asyncPostInit;return delete g.asyncPostInit,S()}).catch(h=>{throw console.error("Exception loading sqlite3 module:",h),h})},globalThis.sqlite3InitModule.ready=r.ready,globalThis.sqlite3InitModuleState.moduleScript){const o=globalThis.sqlite3InitModuleState;let l=o.moduleScript.src.split("/");l.pop(),o.scriptDir=l.join("/")+"/"}return e.debugModule("sqlite3InitModuleState =",e),globalThis.sqlite3InitModule}();var _w=Tu;globalThis.sqlite3Worker1Promiser=function r(e=r.defaultConfig){if(arguments.length===1&&typeof arguments[0]=="function"){const x=e;e=Object.assign(Object.create(null),r.defaultConfig),e.onready=x}else e=Object.assign(Object.create(null),r.defaultConfig,e);const t=Object.create(null),n=function(){},o=e.onerror||n,l=e.debug||n,h=e.generateMessageId?void 0:Object.create(null),g=e.generateMessageId||function(x){return x.type+"#"+(h[x.type]=(h[x.type]||0)+1)},S=(...x)=>{throw new Error(x.join(" "))};e.worker||(e.worker=r.defaultConfig.worker),typeof e.worker=="function"&&(e.worker=e.worker());let E,k;return e.worker.onmessage=function(x){x=x.data,l("worker1.onmessage",x);let F=t[x.messageId];if(!F){if(x&&x.type==="sqlite3-api"&&x.result==="worker1-ready"){e.onready&&e.onready(k);return}if(F=t[x.type],F&&F.onrow){F.onrow(x);return}e.onunhandled?e.onunhandled(arguments[0]):o("sqlite3Worker1Promiser() unhandled worker message:",x);return}switch(delete t[x.messageId],x.type){case"error":F.reject(x);return;case"open":E||(E=x.dbId);break;case"close":x.dbId===E&&(E=void 0);break}try{F.resolve(x)}catch(H){F.reject(H)}},k=function(){let x;arguments.length===1?x=arguments[0]:arguments.length===2?(x=Object.create(null),x.type=arguments[0],x.args=arguments[1],x.dbId=x.args.dbId):S("Invalid arguments for sqlite3Worker1Promiser()-created factory."),!x.dbId&&x.type!=="open"&&(x.dbId=E),x.messageId=g(x),x.departureTime=performance.now();const F=Object.create(null);F.message=x;let H;x.type==="exec"&&x.args&&(typeof x.args.callback=="function"?(H=x.messageId+":row",F.onrow=x.args.callback,x.args.callback=H,t[H]=F):typeof x.args.callback=="string"&&S("exec callback may not be a string when using the Promise interface."));let J=new Promise(function(Y,ve){F.resolve=Y,F.reject=ve,t[x.messageId]=F,l("Posting",x.type,"message to Worker dbId="+(E||"default")+":",x),e.worker.postMessage(x)});return H&&(J=J.finally(()=>delete t[H])),J}},globalThis.sqlite3Worker1Promiser.defaultConfig={worker:function(){return new Worker(new URL("/assets/sqlite3-worker1-bundler-friendly-BBDSX8ln.js",self.location.href),{type:"module"})},onerror:(...r)=>console.error("worker1 promiser error",...r)},sqlite3Worker1Promiser.v2=(function(r){let e;typeof r=="function"?(e=r,r={}):typeof(r==null?void 0:r.onready)=="function"&&(e=r.onready,delete r.onready);const t=Object.create(null);r=Object.assign(r||Object.create(null),{onready:async function(o){try{e&&await e(o),t.resolve(o)}catch(l){t.reject(l)}}});const n=new Promise(function(o,l){t.resolve=o,t.reject=l});try{this.original(r)}catch(o){t.reject(o)}return n}).bind({original:sqlite3Worker1Promiser}),sqlite3Worker1Promiser.v2,globalThis.sqlite3ApiConfig={warn:r=>{typeof r=="string"&&r.startsWith("Ignoring inability to install OPFS sqlite3_vfs")||console.warn(r)}};const yw=_w(),gw=async(r,e)=>{const t=await yw;t.capi.sqlite3mc_vfs_create("opfs",1);let n;if(e!=null&&e.memory)n=new t.oo1.DB(":memory:");else if(e!=null&&e.encryptionKey){const g=await t.installOpfsSAHPoolVfs({directory:`.${r}`});n=new g.OpfsSAHPoolDb("file:evolu1.db?vfs=multipleciphers-opfs-sahpool"),n.exec(`
      PRAGMA cipher = 'sqlcipher';
      PRAGMA legacy = 4;
      PRAGMA key = "x'${Dl(e.encryptionKey)}'";
    `)}else{const g=await t.installOpfsSAHPoolVfs({name:r});n=new g.OpfsSAHPoolDb("file:evolu1.db")}let o=!1;const l=Ry(g=>n.prepare(g),g=>{g.finalize()});return{exec:(g,S)=>{const E=l.get(g);if(E){if(E.bind(g.parameters),S)return E.stepReset(),{rows:[],changes:n.changes()};const F=[];for(;E.step();)F.push(E.get({}));return E.reset(),{rows:F,changes:0}}const k=n.exec(g.sql,{returnValue:"resultRows",rowMode:"object",bind:g.parameters}),x=n.changes();return{rows:k,changes:x}},export:()=>t.capi.sqlite3_js_db_export(n),[Symbol.dispose]:()=>{o||(o=!0,l[Symbol.dispose](),n.close())}}},bw=r=>{r.onMessage(e=>{postMessage(e)}),self.onmessage=e=>{r.postMessage(e.data)}},ww=cw({console:ly(),createSqliteDriver:gw,createWebSocket:pw,random:hw(),randomBytes:wf(),time:Zb()});bw(ww)})();
