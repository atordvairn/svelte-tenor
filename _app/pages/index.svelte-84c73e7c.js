import{S as re,i as fe,s as ae,e as q,c as S,L as Te,b as h,g as G,K as x,d as g,w as oe,k as C,a as V,x as ue,m as P,f as K,y as ce,J as y,M as X,q as U,o as F,B as _e,N as ge,O as Pe,n as ie,P as Fe,p as se,Q as we,R as He,l as ee,v as pe,T as Le,U as Z,V as le,t as L,h as W,j as he,W as me,X as ne,Y as We,Z as Ke,E as Qe,_ as Ye,$ as Je}from"../chunks/vendor-9771abdf.js";const Y=i=>async e=>{const t=new URL(`https://g.tenor.com/v1/${i}`);for(const[n,s]of Object.entries(e))s!==void 0&&t.searchParams.set(n,s.toString());const l=await fetch(t.toString());if(l.status>=400){const n=await l.json();throw new Error(`${n.code}: ${n.error}`)}return l.json()},Ae={gifs:Y("gifs"),search:Y("search"),trending:Y("trending"),random:Y("random"),searchSuggestions:Y("search_suggestions"),autocomplete:Y("autocomplete"),trendingTerms:Y("trending_terms"),categories:Y("categories"),registerShare:Y("registershare"),anonid:Y("anonid")};async function Xe(i){return Ae.search(i)}async function Ze(i){return Ae.registerShare(i)}const xe=({results:i,next:e},t="medium")=>({results:i.map(({id:l,title:n,content_description:s,media:r})=>{const f={low:"nano",medium:"tiny",high:""}[t];return{id:l,description:n.length>0?n:s,width:r[0][`${f}gif`].dims[0],height:r[0][`${f}gif`].dims[1],gif:r[0][`${f}gif`].url}}),next:e}),$e=async({key:i,q:e,locale:t,quality:l,safety:n,ratio:s,limit:r,page:f})=>xe(await Xe({key:i,q:e,locale:t,contentfilter:n,ar_range:s,limit:r,pos:f,media_filter:"basic"}),l),et=async i=>Ze(i);function tt(i){let e,t;return{c(){e=q("img"),this.h()},l(l){e=S(l,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),this.h()},h(){Te(e.src,t=i[0])||h(e,"src",t),h(e,"alt",i[3]),h(e,"width",i[2]),h(e,"height",i[1]),h(e,"class","gif svelte-15brbhl")},m(l,n){G(l,e,n)},p(l,[n]){n&1&&!Te(e.src,t=l[0])&&h(e,"src",t),n&8&&h(e,"alt",l[3]),n&4&&h(e,"width",l[2]),n&2&&h(e,"height",l[1])},i:x,o:x,d(l){l&&g(e)}}}function lt(i,e,t){let l,n,s,r,{gif:f}=e;return i.$$set=a=>{"gif"in a&&t(4,f=a.gif)},i.$$.update=()=>{i.$$.dirty&16&&t(3,{description:l,width:n,height:s,gif:r}=f,l,(t(2,n),t(4,f)),(t(1,s),t(4,f)),(t(0,r),t(4,f)))},[r,s,n,l,f]}class Ce extends re{constructor(e){super();fe(this,e,lt,tt,ae,{gif:4})}}function Ve(i,e,t){const l=i.slice();return l[8]=e[t],l}function De(i,e){let t,l,n,s=`span ${Math.ceil(e[0]*e[8].height/e[8].width/(be+e[1]))}`,r,f,a;l=new Ce({props:{gif:e[8]}});function v(){return e[7](e[8])}return{key:i,first:null,c(){t=q("button"),oe(l.$$.fragment),n=C(),this.h()},l(c){t=S(c,"BUTTON",{type:!0,class:!0});var o=V(t);ue(l.$$.fragment,o),n=P(o),o.forEach(g),this.h()},h(){h(t,"type","button"),h(t,"class","svelte-120xjz0"),K(t,"grid-row-end",s,!1),this.first=t},m(c,o){G(c,t,o),ce(l,t,null),y(t,n),r=!0,f||(a=X(t,"click",v),f=!0)},p(c,o){e=c;const u={};o&8&&(u.gif=e[8]),l.$set(u),o&11&&s!==(s=`span ${Math.ceil(e[0]*e[8].height/e[8].width/(be+e[1]))}`)&&K(t,"grid-row-end",s,!1)},i(c){r||(U(l.$$.fragment,c),r=!0)},o(c){F(l.$$.fragment,c),r=!1},d(c){c&&g(t),_e(l),f=!1,a()}}}function nt(i){let e,t=[],l=new Map,n=`${i[0]}px`,s=`${i[4]}px`,r=`${i[1]}px`,f,a,v,c=i[3];const o=u=>u[8].id;for(let u=0;u<c.length;u+=1){let d=Ve(i,c,u),p=o(d);l.set(p,t[u]=De(p,d))}return{c(){e=q("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=S(u,"DIV",{class:!0});var d=V(e);for(let p=0;p<t.length;p+=1)t[p].l(d);d.forEach(g),this.h()},h(){h(e,"class","grid svelte-120xjz0"),ge(e,"inline",i[2]),K(e,"--column",n,!1),K(e,"--row",s,!1),K(e,"--gap",r,!1)},m(u,d){G(u,e,d);for(let p=0;p<t.length;p+=1)t[p].m(e,null);f=!0,a||(v=Pe(i[6].call(null,e)),a=!0)},p(u,[d]){d&43&&(c=u[3],ie(),t=Fe(t,d,o,1,u,c,l,e,He,De,null,Ve),se()),d&4&&ge(e,"inline",u[2]),d&1&&n!==(n=`${u[0]}px`)&&K(e,"--column",n,!1),d&16&&s!==(s=`${u[4]}px`)&&K(e,"--row",s,!1),d&2&&r!==(r=`${u[1]}px`)&&K(e,"--gap",r,!1)},i(u){if(!f){for(let d=0;d<c.length;d+=1)U(t[d]);f=!0}},o(u){for(let d=0;d<t.length;d+=1)F(t[d]);f=!1},d(u){u&&g(e);for(let d=0;d<t.length;d+=1)t[d].d();a=!1,v()}}}const be=8;function it(i,e,t){let{columnSize:l=160}=e,n=be,{gap:s=8}=e,{inline:r=!1}=e,{gifs:f=[]}=e;const a=we(),v=o=>{let u=[-1,-1];const d=new ResizeObserver(()=>{if(o.offsetWidth===u[0])return;u=[u[1],o.offsetWidth];const p=window.getComputedStyle(o).getPropertyValue("grid-template-columns").split(" ").length,D=o.offsetWidth-(p-1)*s;t(4,n=D/p*(be+s)/l-s)});return d.observe(o),{destroy(){d.unobserve(o)}}},c=o=>a("click",o);return i.$$set=o=>{"columnSize"in o&&t(0,l=o.columnSize),"gap"in o&&t(1,s=o.gap),"inline"in o&&t(2,r=o.inline),"gifs"in o&&t(3,f=o.gifs)},[l,s,r,f,n,a,v,c]}class st extends re{constructor(e){super();fe(this,e,it,nt,ae,{columnSize:0,gap:1,inline:2,gifs:3})}}function Me(i){let e,t;return e=new st({props:{gifs:i[0],columnSize:i[1],gap:i[2],inline:i[3]}}),e.$on("click",i[15]),{c(){oe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,n){ce(e,l,n),t=!0},p(l,n){const s={};n&1&&(s.gifs=l[0]),n&2&&(s.columnSize=l[1]),n&4&&(s.gap=l[2]),n&8&&(s.inline=l[3]),e.$set(s)},i(l){t||(U(e.$$.fragment,l),t=!0)},o(l){F(e.$$.fragment,l),t=!1},d(l){_e(e,l)}}}function rt(i){let e,t,l=i[0]!==void 0&&Me(i);return{c(){l&&l.c(),e=ee()},l(n){l&&l.l(n),e=ee()},m(n,s){l&&l.m(n,s),G(n,e,s),t=!0},p(n,[s]){n[0]!==void 0?l?(l.p(n,s),s&1&&U(l,1)):(l=Me(n),l.c(),U(l,1),l.m(e.parentNode,e)):l&&(ie(),F(l,1,1,()=>{l=null}),se())},i(n){t||(U(l),t=!0)},o(n){F(l),t=!1},d(n){l&&l.d(n),n&&g(e)}}}function ft(i,e,t){let{key:l}=e,{q:n}=e,{locale:s=void 0}=e,{quality:r=void 0}=e,{safety:f=void 0}=e,{ratio:a=void 0}=e,{limit:v=void 0}=e,{page:c=1}=e,{columnSize:o=void 0}=e,{gap:u=void 0}=e,{inline:d=void 0}=e,{retry:p=!1}=e,{loading:D=!0}=e,{gifs:z=void 0}=e,H,E=[];const Q=we(),N=async()=>{for(var m;E.length<c;){t(6,D=!0);let T=$e({key:l,q:n,locale:s,quality:r,safety:f,ratio:a,limit:v,page:(m=E[E.length-1])===null||m===void 0?void 0:m.next});H=T;let b=await T;if(H!==T)return;E=[...E,b]}t(0,z=E.slice(0,c).flatMap(({results:T})=>T)),t(6,D=!1)};let R=!1;pe(()=>{t(14,R=!0)});function J(m){Le.call(this,i,m)}return i.$$set=m=>{"key"in m&&t(7,l=m.key),"q"in m&&t(8,n=m.q),"locale"in m&&t(9,s=m.locale),"quality"in m&&t(10,r=m.quality),"safety"in m&&t(11,f=m.safety),"ratio"in m&&t(12,a=m.ratio),"limit"in m&&t(13,v=m.limit),"page"in m&&t(4,c=m.page),"columnSize"in m&&t(1,o=m.columnSize),"gap"in m&&t(2,u=m.gap),"inline"in m&&t(3,d=m.inline),"retry"in m&&t(5,p=m.retry),"loading"in m&&t(6,D=m.loading),"gifs"in m&&t(0,z=m.gifs)},i.$$.update=()=>{i.$$.dirty&256&&(t(4,c=1),E=[]),i.$$.dirty&16688&&(R||p)&&(t(5,p=!1),N().catch(m=>{t(0,z=void 0),Q("error",m)}))},[z,o,u,d,c,p,D,l,n,s,r,f,a,v,R,J]}class at extends re{constructor(e){super();fe(this,e,ft,rt,ae,{key:7,q:8,locale:9,quality:10,safety:11,ratio:12,limit:13,page:4,columnSize:1,gap:2,inline:3,retry:5,loading:6,gifs:0})}}function Ne(i){let e;function t(s,r){return s[13]!==void 0?ut:ot}let l=t(i),n=l(i);return{c(){n.c(),e=ee()},l(s){n.l(s),e=ee()},m(s,r){n.m(s,r),G(s,e,r)},p(s,r){l===(l=t(s))&&n?n.p(s,r):(n.d(1),n=l(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&g(e)}}}function ot(i){let e,t;return{c(){e=q("div"),t=q("div"),this.h()},l(l){e=S(l,"DIV",{class:!0});var n=V(e);t=S(n,"DIV",{class:!0,"aria-label":!0}),V(t).forEach(g),n.forEach(g),this.h()},h(){h(t,"class","spinner svelte-1wsgavz"),h(t,"aria-label","Loading"),h(e,"class","placeholder svelte-1wsgavz")},m(l,n){G(l,e,n),y(e,t)},p:x,d(l){l&&g(e)}}}function ut(i){let e,t;function l(f,a){if(f[12].error===!0)return _t;if(f[12].error!==!1)return ct}let n=l(i),s=n&&n(i),r=i[12].retry!==!1&&Oe(i);return{c(){e=q("div"),s&&s.c(),t=C(),r&&r.c(),this.h()},l(f){e=S(f,"DIV",{class:!0});var a=V(e);s&&s.l(a),t=P(a),r&&r.l(a),a.forEach(g),this.h()},h(){h(e,"class","placeholder svelte-1wsgavz")},m(f,a){G(f,e,a),s&&s.m(e,null),y(e,t),r&&r.m(e,null)},p(f,a){n===(n=l(f))&&s?s.p(f,a):(s&&s.d(1),s=n&&n(f),s&&(s.c(),s.m(e,t))),f[12].retry!==!1?r?r.p(f,a):(r=Oe(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(f){f&&g(e),s&&s.d(),r&&r.d()}}}function ct(i){let e=i[12].error+"",t;return{c(){t=L(e)},l(l){t=W(l,e)},m(l,n){G(l,t,n)},p(l,n){n&4096&&e!==(e=l[12].error+"")&&he(t,e)},d(l){l&&g(t)}}}function _t(i){let e=i[13].message+"",t;return{c(){t=L(e)},l(l){t=W(l,e)},m(l,n){G(l,t,n)},p(l,n){n&8192&&e!==(e=l[13].message+"")&&he(t,e)},d(l){l&&g(t)}}}function Oe(i){let e,t=i[12].retry+"",l,n,s;return{c(){e=q("button"),l=L(t),this.h()},l(r){e=S(r,"BUTTON",{type:!0});var f=V(e);l=W(f,t),f.forEach(g),this.h()},h(){h(e,"type","button")},m(r,f){G(r,e,f),y(e,l),n||(s=X(e,"click",i[18]),n=!0)},p(r,f){f&4096&&t!==(t=r[12].retry+"")&&he(l,t)},d(r){r&&g(e),n=!1,s()}}}function Ge(i){let e,t=i[12].close+"",l,n,s;return{c(){e=q("button"),l=L(t),this.h()},l(r){e=S(r,"BUTTON",{type:!0});var f=V(e);l=W(f,t),f.forEach(g),this.h()},h(){h(e,"type","button")},m(r,f){G(r,e,f),y(e,l),n||(s=X(e,"click",i[25]),n=!0)},p(r,f){f&4096&&t!==(t=r[12].close+"")&&he(l,t)},d(r){r&&g(e),n=!1,s()}}}function ht(i){let e,t,l,n,s,r,f,a,v,c,o,u,d=`${i[10]}px`,p=`${i[11]}px`,D,z,H,E=i[3]===void 0&&Ne(i);function Q(b){i[19](b)}function N(b){i[20](b)}function R(b){i[21](b)}function J(b){i[22](b)}let m={key:i[4],q:i[0],locale:i[5],quality:i[6],safety:i[7],ratio:i[8],limit:i[9],columnSize:i[10],gap:i[11],inline:!0};i[1]!==void 0&&(m.page=i[1]),i[2]!==void 0&&(m.loading=i[2]),i[3]!==void 0&&(m.gifs=i[3]),i[14]!==void 0&&(m.retry=i[14]),l=new at({props:m}),Z.push(()=>le(l,"page",Q)),Z.push(()=>le(l,"loading",N)),Z.push(()=>le(l,"gifs",R)),Z.push(()=>le(l,"retry",J)),l.$on("click",i[23]),l.$on("error",i[24]);let T=i[12].close!==!1&&Ge(i);return{c(){e=q("div"),E&&E.c(),t=C(),oe(l.$$.fragment),a=C(),v=q("div"),T&&T.c(),c=C(),o=q("input"),this.h()},l(b){e=S(b,"DIV",{class:!0});var k=V(e);E&&E.l(k),t=P(k),ue(l.$$.fragment,k),a=P(k),v=S(k,"DIV",{class:!0});var I=V(v);T&&T.l(I),c=P(I),o=S(I,"INPUT",{type:!0,placeholder:!0,class:!0}),I.forEach(g),k.forEach(g),this.h()},h(){h(o,"type","search"),h(o,"placeholder",u=i[12].placeholder),h(o,"class","svelte-1wsgavz"),h(v,"class","row svelte-1wsgavz"),h(e,"class","mobile-keyboard svelte-1wsgavz"),K(e,"--column",d,!1),K(e,"--gap",p,!1)},m(b,k){G(b,e,k),E&&E.m(e,null),y(e,t),ce(l,e,null),y(e,a),y(e,v),T&&T.m(v,null),y(v,c),y(v,o),me(o,i[0]),i[27](o),D=!0,z||(H=X(o,"input",i[26]),z=!0)},p(b,[k]){b[3]===void 0?E?E.p(b,k):(E=Ne(b),E.c(),E.m(e,t)):E&&(E.d(1),E=null);const I={};k&16&&(I.key=b[4]),k&1&&(I.q=b[0]),k&32&&(I.locale=b[5]),k&64&&(I.quality=b[6]),k&128&&(I.safety=b[7]),k&256&&(I.ratio=b[8]),k&512&&(I.limit=b[9]),k&1024&&(I.columnSize=b[10]),k&2048&&(I.gap=b[11]),!n&&k&2&&(n=!0,I.page=b[1],ne(()=>n=!1)),!s&&k&4&&(s=!0,I.loading=b[2],ne(()=>s=!1)),!r&&k&8&&(r=!0,I.gifs=b[3],ne(()=>r=!1)),!f&&k&16384&&(f=!0,I.retry=b[14],ne(()=>f=!1)),l.$set(I),b[12].close!==!1?T?T.p(b,k):(T=Ge(b),T.c(),T.m(v,c)):T&&(T.d(1),T=null),(!D||k&4096&&u!==(u=b[12].placeholder))&&h(o,"placeholder",u),k&1&&me(o,b[0]),k&1024&&d!==(d=`${b[10]}px`)&&K(e,"--column",d,!1),k&2048&&p!==(p=`${b[11]}px`)&&K(e,"--gap",p,!1)},i(b){D||(U(l.$$.fragment,b),D=!0)},o(b){F(l.$$.fragment,b),D=!1},d(b){b&&g(e),E&&E.d(),_e(l),T&&T.d(),i[27](null),z=!1,H()}}}function dt(i,e,t){let{key:l}=e,{q:n=""}=e,{locale:s=void 0}=e,{quality:r=void 0}=e,{safety:f=void 0}=e,{ratio:a=void 0}=e,{limit:v=void 0}=e,{page:c=1}=e,{columnSize:o=140}=e,{gap:u=4}=e,{autofocus:d=!0}=e,{messages:p={placeholder:"Search Tenor",close:"Close",error:"Tenor is currently unavailable",retry:"Retry"}}=e,{loading:D=!0}=e,{gifs:z=void 0}=e,H,E=!1;const Q=we();let N;pe(()=>{N&&d&&N.focus()});const R=()=>{t(13,H=void 0),t(14,E=!0)};function J(_){c=_,t(1,c)}function m(_){D=_,t(2,D)}function T(_){z=_,t(3,z)}function b(_){E=_,t(14,E)}const k=({detail:_})=>{Q("click",_),et({key:l,id:_.id,q:n,locale:s})},I=({detail:_})=>{t(13,H=_)},M=()=>{Q("close")};function ve(){n=this.value,t(0,n)}function de(_){Z[_?"unshift":"push"](()=>{N=_,t(15,N)})}return i.$$set=_=>{"key"in _&&t(4,l=_.key),"q"in _&&t(0,n=_.q),"locale"in _&&t(5,s=_.locale),"quality"in _&&t(6,r=_.quality),"safety"in _&&t(7,f=_.safety),"ratio"in _&&t(8,a=_.ratio),"limit"in _&&t(9,v=_.limit),"page"in _&&t(1,c=_.page),"columnSize"in _&&t(10,o=_.columnSize),"gap"in _&&t(11,u=_.gap),"autofocus"in _&&t(17,d=_.autofocus),"messages"in _&&t(12,p=_.messages),"loading"in _&&t(2,D=_.loading),"gifs"in _&&t(3,z=_.gifs)},[n,c,D,z,l,s,r,f,a,v,o,u,p,H,E,N,Q,d,R,J,m,T,b,k,I,M,ve,de]}class gt extends re{constructor(e){super();fe(this,e,dt,ht,ae,{key:4,q:0,locale:5,quality:6,safety:7,ratio:8,limit:9,page:1,columnSize:10,gap:11,autofocus:17,messages:12,loading:2,gifs:3})}}function Re(i,e,t){const l=i.slice();return l[13]=e[t],l}function Be(i){let e,t;return{c(){e=q("h1"),t=L("svelte-tenor"),this.h()},l(l){e=S(l,"H1",{class:!0});var n=V(e);t=W(n,"svelte-tenor"),n.forEach(g),this.h()},h(){h(e,"class","svelte-s7wsv")},m(l,n){G(l,e,n),y(e,t)},d(l){l&&g(e)}}}function mt(i){let e,t=i[13].body.replaceAll("  ","\xA0 ")+"",l;return{c(){e=q("div"),l=L(t),this.h()},l(n){e=S(n,"DIV",{class:!0});var s=V(e);l=W(s,t),s.forEach(g),this.h()},h(){h(e,"class","message text svelte-s7wsv")},m(n,s){G(n,e,s),y(e,l)},p(n,s){s&1&&t!==(t=n[13].body.replaceAll("  ","\xA0 ")+"")&&he(l,t)},i:x,o:x,d(n){n&&g(e)}}}function bt(i){let e,t,l;return t=new Ce({props:{gif:i[13].body}}),{c(){e=q("div"),oe(t.$$.fragment),this.h()},l(n){e=S(n,"DIV",{class:!0});var s=V(e);ue(t.$$.fragment,s),s.forEach(g),this.h()},h(){h(e,"class","message svelte-s7wsv")},m(n,s){G(n,e,s),ce(t,e,null),l=!0},p(n,s){const r={};s&1&&(r.gif=n[13].body),t.$set(r)},i(n){l||(U(t.$$.fragment,n),l=!0)},o(n){F(t.$$.fragment,n),l=!1},d(n){n&&g(e),_e(t)}}}function Ue(i){let e,t,l,n;const s=[bt,mt],r=[];function f(a,v){return a[13].gif?0:1}return e=f(i),t=r[e]=s[e](i),{c(){t.c(),l=ee()},l(a){t.l(a),l=ee()},m(a,v){r[e].m(a,v),G(a,l,v),n=!0},p(a,v){let c=e;e=f(a),e===c?r[e].p(a,v):(ie(),F(r[c],1,1,()=>{r[c]=null}),se(),t=r[e],t?t.p(a,v):(t=r[e]=s[e](a),t.c()),U(t,1),t.m(l.parentNode,l))},i(a){n||(U(t),n=!0)},o(a){F(t),n=!1},d(a){r[e].d(a),a&&g(l)}}}function vt(i){let e,t,l,n,s,r,f,a,v,c;return{c(){e=q("form"),t=q("button"),l=L("GIF"),n=C(),s=q("input"),r=C(),f=q("button"),a=L("\u25B6"),this.h()},l(o){e=S(o,"FORM",{class:!0});var u=V(e);t=S(u,"BUTTON",{type:!0});var d=V(t);l=W(d,"GIF"),d.forEach(g),n=P(u),s=S(u,"INPUT",{type:!0,class:!0}),r=P(u),f=S(u,"BUTTON",{class:!0});var p=V(f);a=W(p,"\u25B6"),p.forEach(g),u.forEach(g),this.h()},h(){h(t,"type","button"),h(s,"type","text"),h(s,"class","text-input svelte-s7wsv"),h(f,"class","icon svelte-s7wsv"),h(e,"class","form svelte-s7wsv")},m(o,u){G(o,e,u),y(e,t),y(t,l),y(e,n),y(e,s),me(s,i[4]),y(e,r),y(e,f),y(f,a),v||(c=[X(t,"click",i[10]),X(s,"input",i[11]),X(e,"submit",Ye(i[12]))],v=!0)},p(o,u){u&16&&s.value!==o[4]&&me(s,o[4])},i:x,o:x,d(o){o&&g(e),v=!1,Je(c)}}}function kt(i){let e,t,l,n;function s(f){i[7](f)}let r={key:"OY94CH1Q77WO"};return i[4]!==void 0&&(r.q=i[4]),t=new gt({props:r}),Z.push(()=>le(t,"q",s)),t.$on("click",i[8]),t.$on("close",i[9]),{c(){e=q("div"),oe(t.$$.fragment),this.h()},l(f){e=S(f,"DIV",{class:!0});var a=V(e);ue(t.$$.fragment,a),a.forEach(g),this.h()},h(){h(e,"class","keyboard svelte-s7wsv")},m(f,a){G(f,e,a),ce(t,e,null),n=!0},p(f,a){const v={};!l&&a&16&&(l=!0,v.q=f[4],ne(()=>l=!1)),t.$set(v)},i(f){n||(U(t.$$.fragment,f),n=!0)},o(f){F(t.$$.fragment,f),n=!1},d(f){f&&g(e),_e(t)}}}function je(i){let e,t,l,n,s;return{c(){e=q("footer"),t=q("p"),l=L("Made with \u{1F9E1} and Svelte by "),n=q("a"),s=L("Gautier"),this.h()},l(r){e=S(r,"FOOTER",{class:!0});var f=V(e);t=S(f,"P",{});var a=V(t);l=W(a,"Made with \u{1F9E1} and Svelte by "),n=S(a,"A",{href:!0,class:!0});var v=V(n);s=W(v,"Gautier"),v.forEach(g),a.forEach(g),f.forEach(g),this.h()},h(){h(n,"href","https://gautier.dev"),h(n,"class","svelte-s7wsv"),h(e,"class","svelte-s7wsv")},m(r,f){G(r,e,f),y(e,t),y(t,l),y(t,n),y(n,s)},d(r){r&&g(e)}}}function yt(i){let e,t,l,n,s,r,f,a,v,c,o,u,d,p,D,z,H,E,Q,N,R,J,m,T,b,k=!i[3]&&Be(),I=i[0],M=[];for(let w=0;w<I.length;w+=1)M[w]=Ue(Re(i,I,w));const ve=w=>F(M[w],1,1,()=>{M[w]=null}),de=[kt,vt],_=[];function Ee(w,B){return w[1]?0:1}N=Ee(i),R=_[N]=de[N](i);let j=!i[3]&&je();return{c(){e=C(),t=q("main"),k&&k.c(),l=C(),n=q("div"),s=q("div"),r=q("label"),f=q("input"),a=L(`
        Fullscreen view`),v=C(),c=q("div"),o=q("div"),u=q("a"),d=L("Back to GitHub"),p=C(),D=q("div"),z=q("a"),H=L("Check out the storybook!"),E=C();for(let w=0;w<M.length;w+=1)M[w].c();Q=C(),R.c(),J=C(),j&&j.c(),this.h()},l(w){We('[data-svelte="svelte-1arxumj"]',document.head).forEach(g),e=P(w),t=S(w,"MAIN",{class:!0});var A=V(t);k&&k.l(A),l=P(A),n=S(A,"DIV",{class:!0});var O=V(n);s=S(O,"DIV",{class:!0});var te=V(s);r=S(te,"LABEL",{for:!0});var ke=V(r);f=S(ke,"INPUT",{id:!0,type:!0}),a=W(ke,`
        Fullscreen view`),ke.forEach(g),te.forEach(g),v=P(O),c=S(O,"DIV",{class:!0});var $=V(c);o=S($,"DIV",{class:!0});var qe=V(o);u=S(qe,"A",{href:!0,rel:!0,class:!0});var Se=V(u);d=W(Se,"Back to GitHub"),Se.forEach(g),qe.forEach(g),p=P($),D=S($,"DIV",{class:!0});var ze=V(D);z=S(ze,"A",{href:!0,rel:!0,class:!0});var Ie=V(z);H=W(Ie,"Check out the storybook!"),Ie.forEach(g),ze.forEach(g),E=P($);for(let ye=0;ye<M.length;ye+=1)M[ye].l($);$.forEach(g),Q=P(O),R.l(O),O.forEach(g),J=P(A),j&&j.l(A),A.forEach(g),this.h()},h(){document.title="svelte-tenor",h(f,"id","fullscreen"),h(f,"type","checkbox"),h(r,"for","fullscreen"),h(s,"class","center svelte-s7wsv"),h(u,"href","https://github.com/gauben/svelte-tenor"),h(u,"rel","external"),h(u,"class","svelte-s7wsv"),h(o,"class","message text svelte-s7wsv"),h(z,"href","https://gauben.github.io/svelte-tenor/storybook/"),h(z,"rel","external"),h(z,"class","svelte-s7wsv"),h(D,"class","message text svelte-s7wsv"),h(c,"class","messages svelte-s7wsv"),h(n,"class","phone svelte-s7wsv"),h(t,"class","svelte-s7wsv"),ge(t,"desktop",!i[3])},m(w,B){G(w,e,B),G(w,t,B),k&&k.m(t,null),y(t,l),y(t,n),y(n,s),y(s,r),y(r,f),f.checked=i[3],y(r,a),y(n,v),y(n,c),y(c,o),y(o,u),y(u,d),y(c,p),y(c,D),y(D,z),y(z,H),y(c,E);for(let A=0;A<M.length;A+=1)M[A].m(c,null);i[6](c),y(n,Q),_[N].m(n,null),y(t,J),j&&j.m(t,null),m=!0,T||(b=X(f,"change",i[5]),T=!0)},p(w,[B]){if(w[3]?k&&(k.d(1),k=null):k||(k=Be(),k.c(),k.m(t,l)),B&8&&(f.checked=w[3]),B&1){I=w[0];let O;for(O=0;O<I.length;O+=1){const te=Re(w,I,O);M[O]?(M[O].p(te,B),U(M[O],1)):(M[O]=Ue(te),M[O].c(),U(M[O],1),M[O].m(c,null))}for(ie(),O=I.length;O<M.length;O+=1)ve(O);se()}let A=N;N=Ee(w),N===A?_[N].p(w,B):(ie(),F(_[A],1,1,()=>{_[A]=null}),se(),R=_[N],R?R.p(w,B):(R=_[N]=de[N](w),R.c()),U(R,1),R.m(n,null)),w[3]?j&&(j.d(1),j=null):j||(j=je(),j.c(),j.m(t,null)),B&8&&ge(t,"desktop",!w[3])},i(w){if(!m){for(let B=0;B<I.length;B+=1)U(M[B]);U(R),m=!0}},o(w){M=M.filter(Boolean);for(let B=0;B<M.length;B+=1)F(M[B]);F(R),m=!1},d(w){w&&g(e),w&&g(t),k&&k.d(),Ke(M,w),i[6](null),_[N].d(),j&&j.d(),T=!1,b()}}}function wt(i,e,t){let l=!0,n=[],s=!1,r="",f;pe(()=>{t(3,l=window.matchMedia("(max-width: 600px)").matches)});function a(){l=this.checked,t(3,l)}function v(z){Z[z?"unshift":"push"](()=>{f=z,t(2,f)})}function c(z){r=z,t(4,r)}const o=({detail:z})=>{t(0,n=[...n,{gif:!0,body:z}]),t(1,s=!1),t(4,r="")},u=()=>{t(1,s=!1)},d=()=>{t(1,s=!0)};function p(){r=this.value,t(4,r)}const D=()=>{!r||(t(0,n=[...n,{gif:!1,body:r}]),t(4,r=""))};return i.$$.update=()=>{i.$$.dirty&7&&Qe().then(()=>{f==null||f.scrollTo({top:f.scrollHeight})})},[n,s,f,l,r,a,v,c,o,u,d,p,D]}class Et extends re{constructor(e){super();fe(this,e,wt,yt,ae,{})}}export{Et as default};