import{S as ae,i as oe,s as ue,e as S,c as I,L as Ve,b as m,g as M,M as X,K as $,d as g,N as Ce,O as pe,w as ce,k as C,a as T,x as _e,m as F,f as Y,y as he,J as y,q as U,o as P,B as de,P as me,Q as He,n as re,R as Le,p as fe,T as we,U as We,l as te,v as qe,V as x,W as ne,t as H,h as L,j as le,X as be,Y as se,Z as Ke,_ as Qe,E as Ye,$ as Je}from"../chunks/vendor-0bfb85a1.js";const J=n=>async e=>{const t=new URL(`https://g.tenor.com/v1/${n}`);for(const[i,s]of Object.entries(e))s!==void 0&&t.searchParams.set(i,s.toString());const l=await fetch(t.toString());if(l.status>=400){const i=await l.json();throw new Error(`${i.code}: ${i.error}`)}return l.json()},Fe={gifs:J("gifs"),search:J("search"),trending:J("trending"),random:J("random"),searchSuggestions:J("search_suggestions"),autocomplete:J("autocomplete"),trendingTerms:J("trending_terms"),categories:J("categories"),registerShare:J("registershare"),anonid:J("anonid")};async function Xe(n){return Fe.search(n)}async function Ze(n){return Fe.registerShare(n)}const xe=({results:n,next:e},t="medium")=>({results:n.map(({id:l,title:i,content_description:s,media:r})=>{const f={low:"nano",medium:"tiny",high:""}[t];return{id:l,description:i.length>0?i:s,width:r[0][`${f}gif`].dims[0],height:r[0][`${f}gif`].dims[1],gif:r[0][`${f}gif`].url}}),next:e}),$e=async({key:n,q:e,locale:t,quality:l,safety:i,ratio:s,limit:r,page:f})=>xe(await Xe({key:n,q:e,locale:t,contentfilter:i,ar_range:s,limit:r,pos:f,media_filter:"basic"}),l),et=async n=>Ze(n);function tt(n){let e,t,l,i;return{c(){e=S("img"),this.h()},l(s){e=I(s,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),this.h()},h(){Ve(e.src,t=n[0])||m(e,"src",t),m(e,"alt",n[3]),m(e,"width",n[2]),m(e,"height",n[1]),m(e,"class","gif svelte-fvba7j")},m(s,r){M(s,e,r),l||(i=[X(e,"load",n[5]),X(e,"error",n[6])],l=!0)},p(s,[r]){r&1&&!Ve(e.src,t=s[0])&&m(e,"src",t),r&8&&m(e,"alt",s[3]),r&4&&m(e,"width",s[2]),r&2&&m(e,"height",s[1])},i:$,o:$,d(s){s&&g(e),l=!1,Ce(i)}}}function lt(n,e,t){let l,i,s,r,{gif:f}=e;function a(c){pe.call(this,n,c)}function v(c){pe.call(this,n,c)}return n.$$set=c=>{"gif"in c&&t(4,f=c.gif)},n.$$.update=()=>{n.$$.dirty&16&&t(3,{description:l,width:i,height:s,gif:r}=f,l,(t(2,i),t(4,f)),(t(1,s),t(4,f)),(t(0,r),t(4,f)))},[r,s,i,l,f,a,v]}class Pe extends ae{constructor(e){super();oe(this,e,lt,tt,ue,{gif:4})}}function De(n,e,t){const l=n.slice();return l[8]=e[t],l}function Me(n,e){let t,l,i,s=`span ${Math.ceil(e[0]*e[8].height/e[8].width/(ve+e[1]))}`,r,f,a;l=new Pe({props:{gif:e[8]}});function v(){return e[7](e[8])}return{key:n,first:null,c(){t=S("button"),ce(l.$$.fragment),i=C(),this.h()},l(c){t=I(c,"BUTTON",{type:!0,class:!0});var o=T(t);_e(l.$$.fragment,o),i=F(o),o.forEach(g),this.h()},h(){m(t,"type","button"),m(t,"class","svelte-120xjz0"),Y(t,"grid-row-end",s,!1),this.first=t},m(c,o){M(c,t,o),he(l,t,null),y(t,i),r=!0,f||(a=X(t,"click",v),f=!0)},p(c,o){e=c;const u={};o&8&&(u.gif=e[8]),l.$set(u),o&11&&s!==(s=`span ${Math.ceil(e[0]*e[8].height/e[8].width/(ve+e[1]))}`)&&Y(t,"grid-row-end",s,!1)},i(c){r||(U(l.$$.fragment,c),r=!0)},o(c){P(l.$$.fragment,c),r=!1},d(c){c&&g(t),de(l),f=!1,a()}}}function it(n){let e,t=[],l=new Map,i=`${n[0]}px`,s=`${n[4]}px`,r=`${n[1]}px`,f,a,v,c=n[3];const o=u=>u[8].id;for(let u=0;u<c.length;u+=1){let b=De(n,c,u),q=o(b);l.set(q,t[u]=Me(q,b))}return{c(){e=S("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=I(u,"DIV",{class:!0});var b=T(e);for(let q=0;q<t.length;q+=1)t[q].l(b);b.forEach(g),this.h()},h(){m(e,"class","grid svelte-120xjz0"),me(e,"inline",n[2]),Y(e,"--column",i,!1),Y(e,"--row",s,!1),Y(e,"--gap",r,!1)},m(u,b){M(u,e,b);for(let q=0;q<t.length;q+=1)t[q].m(e,null);f=!0,a||(v=He(n[6].call(null,e)),a=!0)},p(u,[b]){b&43&&(c=u[3],re(),t=Le(t,b,o,1,u,c,l,e,We,Me,null,De),fe()),b&4&&me(e,"inline",u[2]),b&1&&i!==(i=`${u[0]}px`)&&Y(e,"--column",i,!1),b&16&&s!==(s=`${u[4]}px`)&&Y(e,"--row",s,!1),b&2&&r!==(r=`${u[1]}px`)&&Y(e,"--gap",r,!1)},i(u){if(!f){for(let b=0;b<c.length;b+=1)U(t[b]);f=!0}},o(u){for(let b=0;b<t.length;b+=1)P(t[b]);f=!1},d(u){u&&g(e);for(let b=0;b<t.length;b+=1)t[b].d();a=!1,v()}}}const ve=8;function nt(n,e,t){let{columnSize:l=160}=e,i=ve,{gap:s=8}=e,{inline:r=!1}=e,{gifs:f=[]}=e;const a=we(),v=o=>{let u=[-1,-1];const b=new ResizeObserver(()=>{if(o.offsetWidth===u[0])return;u=[u[1],o.offsetWidth];const q=window.getComputedStyle(o).getPropertyValue("grid-template-columns").split(" ").length,V=o.offsetWidth-(q-1)*s;t(4,i=V/q*(ve+s)/l-s)});return b.observe(o),{destroy(){b.unobserve(o)}}},c=o=>a("click",o);return n.$$set=o=>{"columnSize"in o&&t(0,l=o.columnSize),"gap"in o&&t(1,s=o.gap),"inline"in o&&t(2,r=o.inline),"gifs"in o&&t(3,f=o.gifs)},[l,s,r,f,i,a,v,c]}class st extends ae{constructor(e){super();oe(this,e,nt,it,ue,{columnSize:0,gap:1,inline:2,gifs:3})}}function Ne(n){let e,t;return e=new st({props:{gifs:n[0],columnSize:n[1],gap:n[2],inline:n[3]}}),e.$on("click",n[15]),{c(){ce(e.$$.fragment)},l(l){_e(e.$$.fragment,l)},m(l,i){he(e,l,i),t=!0},p(l,i){const s={};i&1&&(s.gifs=l[0]),i&2&&(s.columnSize=l[1]),i&4&&(s.gap=l[2]),i&8&&(s.inline=l[3]),e.$set(s)},i(l){t||(U(e.$$.fragment,l),t=!0)},o(l){P(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function rt(n){let e,t,l=n[0]!==void 0&&n[0].length>0&&Ne(n);return{c(){l&&l.c(),e=te()},l(i){l&&l.l(i),e=te()},m(i,s){l&&l.m(i,s),M(i,e,s),t=!0},p(i,[s]){i[0]!==void 0&&i[0].length>0?l?(l.p(i,s),s&1&&U(l,1)):(l=Ne(i),l.c(),U(l,1),l.m(e.parentNode,e)):l&&(re(),P(l,1,1,()=>{l=null}),fe())},i(i){t||(U(l),t=!0)},o(i){P(l),t=!1},d(i){l&&l.d(i),i&&g(e)}}}function ft(n,e,t){let{key:l}=e,{q:i}=e,{locale:s=void 0}=e,{quality:r=void 0}=e,{safety:f=void 0}=e,{ratio:a=void 0}=e,{limit:v=void 0}=e,{page:c=1}=e,{columnSize:o=void 0}=e,{gap:u=void 0}=e,{inline:b=void 0}=e,{retry:q=!1}=e,{loading:V=!0}=e,{gifs:z=void 0}=e,W,G=[];const B=we(),p=async()=>{for(var k;G.length<c;){t(6,V=!0);let K=$e({key:l,q:i,locale:s,quality:r,safety:f,ratio:a,limit:v,page:(k=G[G.length-1])===null||k===void 0?void 0:k.next});W=K;let Q=await K;if(W!==K)return;G=[...G,Q]}t(0,z=G.slice(0,c).flatMap(({results:K})=>K)),t(6,V=!1)};let O=!1;qe(()=>{t(14,O=!0)});function Z(k){pe.call(this,n,k)}return n.$$set=k=>{"key"in k&&t(7,l=k.key),"q"in k&&t(8,i=k.q),"locale"in k&&t(9,s=k.locale),"quality"in k&&t(10,r=k.quality),"safety"in k&&t(11,f=k.safety),"ratio"in k&&t(12,a=k.ratio),"limit"in k&&t(13,v=k.limit),"page"in k&&t(4,c=k.page),"columnSize"in k&&t(1,o=k.columnSize),"gap"in k&&t(2,u=k.gap),"inline"in k&&t(3,b=k.inline),"retry"in k&&t(5,q=k.retry),"loading"in k&&t(6,V=k.loading),"gifs"in k&&t(0,z=k.gifs)},n.$$.update=()=>{n.$$.dirty&256&&(t(4,c=1),G=[]),n.$$.dirty&16688&&(O||q)&&(t(5,q=!1),p().catch(k=>{t(0,z=void 0),B("error",k)}))},[z,o,u,b,c,q,V,l,i,s,r,f,a,v,O,Z]}class at extends ae{constructor(e){super();oe(this,e,ft,rt,ue,{key:7,q:8,locale:9,quality:10,safety:11,ratio:12,limit:13,page:4,columnSize:1,gap:2,inline:3,retry:5,loading:6,gifs:0})}}function ot(n){let e,t=n[12].empty&&Oe(n);return{c(){e=S("div"),t&&t.c(),this.h()},l(l){e=I(l,"DIV",{class:!0});var i=T(e);t&&t.l(i),i.forEach(g),this.h()},h(){m(e,"class","placeholder svelte-1dkqtq4")},m(l,i){M(l,e,i),t&&t.m(e,null)},p(l,i){l[12].empty?t?t.p(l,i):(t=Oe(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&g(e),t&&t.d()}}}function ut(n){let e;function t(s,r){return s[13]!==void 0?_t:ct}let l=t(n),i=l(n);return{c(){i.c(),e=te()},l(s){i.l(s),e=te()},m(s,r){i.m(s,r),M(s,e,r)},p(s,r){l===(l=t(s))&&i?i.p(s,r):(i.d(1),i=l(s),i&&(i.c(),i.m(e.parentNode,e)))},d(s){i.d(s),s&&g(e)}}}function Oe(n){let e=n[12].empty+"",t;return{c(){t=H(e)},l(l){t=L(l,e)},m(l,i){M(l,t,i)},p(l,i){i&4096&&e!==(e=l[12].empty+"")&&le(t,e)},d(l){l&&g(t)}}}function ct(n){let e,t;return{c(){e=S("div"),t=S("div"),this.h()},l(l){e=I(l,"DIV",{class:!0});var i=T(e);t=I(i,"DIV",{class:!0,"aria-label":!0}),T(t).forEach(g),i.forEach(g),this.h()},h(){m(t,"class","spinner svelte-1dkqtq4"),m(t,"aria-label","Loading"),m(e,"class","placeholder svelte-1dkqtq4")},m(l,i){M(l,e,i),y(e,t)},p:$,d(l){l&&g(e)}}}function _t(n){let e,t;function l(f,a){if(f[12].error===!0)return dt;if(f[12].error!==!1)return ht}let i=l(n),s=i&&i(n),r=n[12].retry!==!1&&Ge(n);return{c(){e=S("div"),s&&s.c(),t=C(),r&&r.c(),this.h()},l(f){e=I(f,"DIV",{class:!0});var a=T(e);s&&s.l(a),t=F(a),r&&r.l(a),a.forEach(g),this.h()},h(){m(e,"class","placeholder svelte-1dkqtq4")},m(f,a){M(f,e,a),s&&s.m(e,null),y(e,t),r&&r.m(e,null)},p(f,a){i===(i=l(f))&&s?s.p(f,a):(s&&s.d(1),s=i&&i(f),s&&(s.c(),s.m(e,t))),f[12].retry!==!1?r?r.p(f,a):(r=Ge(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(f){f&&g(e),s&&s.d(),r&&r.d()}}}function ht(n){let e=n[12].error+"",t;return{c(){t=H(e)},l(l){t=L(l,e)},m(l,i){M(l,t,i)},p(l,i){i&4096&&e!==(e=l[12].error+"")&&le(t,e)},d(l){l&&g(t)}}}function dt(n){let e=n[13].message+"",t;return{c(){t=H(e)},l(l){t=L(l,e)},m(l,i){M(l,t,i)},p(l,i){i&8192&&e!==(e=l[13].message+"")&&le(t,e)},d(l){l&&g(t)}}}function Ge(n){let e,t=n[12].retry+"",l,i,s;return{c(){e=S("button"),l=H(t),this.h()},l(r){e=I(r,"BUTTON",{type:!0});var f=T(e);l=L(f,t),f.forEach(g),this.h()},h(){m(e,"type","button")},m(r,f){M(r,e,f),y(e,l),i||(s=X(e,"click",n[18]),i=!0)},p(r,f){f&4096&&t!==(t=r[12].retry+"")&&le(l,t)},d(r){r&&g(e),i=!1,s()}}}function Re(n){let e,t=n[12].close+"",l,i,s;return{c(){e=S("button"),l=H(t),this.h()},l(r){e=I(r,"BUTTON",{type:!0});var f=T(e);l=L(f,t),f.forEach(g),this.h()},h(){m(e,"type","button")},m(r,f){M(r,e,f),y(e,l),i||(s=X(e,"click",n[25]),i=!0)},p(r,f){f&4096&&t!==(t=r[12].close+"")&&le(l,t)},d(r){r&&g(e),i=!1,s()}}}function gt(n){let e,t,l,i,s,r,f,a,v,c,o,u,b=`${n[10]}px`,q=`${n[11]}px`,V,z,W;function G(h,_){if(h[3]===void 0)return ut;if(h[3].length===0)return ot}let B=G(n),p=B&&B(n);function O(h){n[19](h)}function Z(h){n[20](h)}function k(h){n[21](h)}function K(h){n[22](h)}let Q={key:n[4],q:n[0],locale:n[5],quality:n[6],safety:n[7],ratio:n[8],limit:n[9],columnSize:n[10],gap:n[11],inline:!0};n[1]!==void 0&&(Q.page=n[1]),n[2]!==void 0&&(Q.loading=n[2]),n[3]!==void 0&&(Q.gifs=n[3]),n[14]!==void 0&&(Q.retry=n[14]),l=new at({props:Q}),x.push(()=>ne(l,"page",O)),x.push(()=>ne(l,"loading",Z)),x.push(()=>ne(l,"gifs",k)),x.push(()=>ne(l,"retry",K)),l.$on("click",n[23]),l.$on("error",n[24]);let E=n[12].close!==!1&&Re(n);return{c(){e=S("div"),p&&p.c(),t=C(),ce(l.$$.fragment),a=C(),v=S("div"),E&&E.c(),c=C(),o=S("input"),this.h()},l(h){e=I(h,"DIV",{class:!0});var _=T(e);p&&p.l(_),t=F(_),_e(l.$$.fragment,_),a=F(_),v=I(_,"DIV",{class:!0});var D=T(v);E&&E.l(D),c=F(D),o=I(D,"INPUT",{type:!0,placeholder:!0,class:!0}),D.forEach(g),_.forEach(g),this.h()},h(){m(o,"type","search"),m(o,"placeholder",u=n[12].placeholder),m(o,"class","svelte-1dkqtq4"),m(v,"class","row svelte-1dkqtq4"),m(e,"class","mobile-keyboard svelte-1dkqtq4"),Y(e,"--column",b,!1),Y(e,"--gap",q,!1)},m(h,_){M(h,e,_),p&&p.m(e,null),y(e,t),he(l,e,null),y(e,a),y(e,v),E&&E.m(v,null),y(v,c),y(v,o),be(o,n[0]),n[27](o),V=!0,z||(W=X(o,"input",n[26]),z=!0)},p(h,[_]){B===(B=G(h))&&p?p.p(h,_):(p&&p.d(1),p=B&&B(h),p&&(p.c(),p.m(e,t)));const D={};_&16&&(D.key=h[4]),_&1&&(D.q=h[0]),_&32&&(D.locale=h[5]),_&64&&(D.quality=h[6]),_&128&&(D.safety=h[7]),_&256&&(D.ratio=h[8]),_&512&&(D.limit=h[9]),_&1024&&(D.columnSize=h[10]),_&2048&&(D.gap=h[11]),!i&&_&2&&(i=!0,D.page=h[1],se(()=>i=!1)),!s&&_&4&&(s=!0,D.loading=h[2],se(()=>s=!1)),!r&&_&8&&(r=!0,D.gifs=h[3],se(()=>r=!1)),!f&&_&16384&&(f=!0,D.retry=h[14],se(()=>f=!1)),l.$set(D),h[12].close!==!1?E?E.p(h,_):(E=Re(h),E.c(),E.m(v,c)):E&&(E.d(1),E=null),(!V||_&4096&&u!==(u=h[12].placeholder))&&m(o,"placeholder",u),_&1&&be(o,h[0]),_&1024&&b!==(b=`${h[10]}px`)&&Y(e,"--column",b,!1),_&2048&&q!==(q=`${h[11]}px`)&&Y(e,"--gap",q,!1)},i(h){V||(U(l.$$.fragment,h),V=!0)},o(h){P(l.$$.fragment,h),V=!1},d(h){h&&g(e),p&&p.d(),de(l),E&&E.d(),n[27](null),z=!1,W()}}}function mt(n,e,t){let{key:l}=e,{q:i=""}=e,{locale:s=void 0}=e,{quality:r=void 0}=e,{safety:f=void 0}=e,{ratio:a=void 0}=e,{limit:v=void 0}=e,{page:c=1}=e,{columnSize:o=140}=e,{gap:u=4}=e,{autofocus:b=!0}=e,{messages:q={placeholder:"Search Tenor",close:"Close",error:"Tenor is currently unavailable",retry:"Retry",empty:"No GIFs match your search... Try something else!"}}=e,{loading:V=!0}=e,{gifs:z=void 0}=e,W,G=!1;const B=we();let p;qe(()=>{p&&b&&p.focus()});const O=()=>{t(13,W=void 0),t(14,G=!0)};function Z(d){c=d,t(1,c)}function k(d){V=d,t(2,V)}function K(d){z=d,t(3,z)}function Q(d){G=d,t(14,G)}const E=({detail:d})=>{B("click",d),et({key:l,id:d.id,q:i,locale:s})},h=({detail:d})=>{t(13,W=d)},_=()=>{B("close")};function D(){i=this.value,t(0,i)}function ge(d){x[d?"unshift":"push"](()=>{p=d,t(15,p)})}return n.$$set=d=>{"key"in d&&t(4,l=d.key),"q"in d&&t(0,i=d.q),"locale"in d&&t(5,s=d.locale),"quality"in d&&t(6,r=d.quality),"safety"in d&&t(7,f=d.safety),"ratio"in d&&t(8,a=d.ratio),"limit"in d&&t(9,v=d.limit),"page"in d&&t(1,c=d.page),"columnSize"in d&&t(10,o=d.columnSize),"gap"in d&&t(11,u=d.gap),"autofocus"in d&&t(17,b=d.autofocus),"messages"in d&&t(12,q=d.messages),"loading"in d&&t(2,V=d.loading),"gifs"in d&&t(3,z=d.gifs)},[i,c,V,z,l,s,r,f,a,v,o,u,q,W,G,p,B,b,O,Z,k,K,Q,E,h,_,D,ge]}class bt extends ae{constructor(e){super();oe(this,e,mt,gt,ue,{key:4,q:0,locale:5,quality:6,safety:7,ratio:8,limit:9,page:1,columnSize:10,gap:11,autofocus:17,messages:12,loading:2,gifs:3})}}function Be(n,e,t){const l=n.slice();return l[13]=e[t],l}function Ue(n){let e,t;return{c(){e=S("h1"),t=H("svelte-tenor"),this.h()},l(l){e=I(l,"H1",{class:!0});var i=T(e);t=L(i,"svelte-tenor"),i.forEach(g),this.h()},h(){m(e,"class","svelte-s7wsv")},m(l,i){M(l,e,i),y(e,t)},d(l){l&&g(e)}}}function vt(n){let e,t=n[13].body.replaceAll("  ","\xA0 ")+"",l;return{c(){e=S("div"),l=H(t),this.h()},l(i){e=I(i,"DIV",{class:!0});var s=T(e);l=L(s,t),s.forEach(g),this.h()},h(){m(e,"class","message text svelte-s7wsv")},m(i,s){M(i,e,s),y(e,l)},p(i,s){s&1&&t!==(t=i[13].body.replaceAll("  ","\xA0 ")+"")&&le(l,t)},i:$,o:$,d(i){i&&g(e)}}}function kt(n){let e,t,l;return t=new Pe({props:{gif:n[13].body}}),{c(){e=S("div"),ce(t.$$.fragment),this.h()},l(i){e=I(i,"DIV",{class:!0});var s=T(e);_e(t.$$.fragment,s),s.forEach(g),this.h()},h(){m(e,"class","message svelte-s7wsv")},m(i,s){M(i,e,s),he(t,e,null),l=!0},p(i,s){const r={};s&1&&(r.gif=i[13].body),t.$set(r)},i(i){l||(U(t.$$.fragment,i),l=!0)},o(i){P(t.$$.fragment,i),l=!1},d(i){i&&g(e),de(t)}}}function je(n){let e,t,l,i;const s=[kt,vt],r=[];function f(a,v){return a[13].gif?0:1}return e=f(n),t=r[e]=s[e](n),{c(){t.c(),l=te()},l(a){t.l(a),l=te()},m(a,v){r[e].m(a,v),M(a,l,v),i=!0},p(a,v){let c=e;e=f(a),e===c?r[e].p(a,v):(re(),P(r[c],1,1,()=>{r[c]=null}),fe(),t=r[e],t?t.p(a,v):(t=r[e]=s[e](a),t.c()),U(t,1),t.m(l.parentNode,l))},i(a){i||(U(t),i=!0)},o(a){P(t),i=!1},d(a){r[e].d(a),a&&g(l)}}}function yt(n){let e,t,l,i,s,r,f,a,v,c;return{c(){e=S("form"),t=S("button"),l=H("GIF"),i=C(),s=S("input"),r=C(),f=S("button"),a=H("\u25B6"),this.h()},l(o){e=I(o,"FORM",{class:!0});var u=T(e);t=I(u,"BUTTON",{type:!0});var b=T(t);l=L(b,"GIF"),b.forEach(g),i=F(u),s=I(u,"INPUT",{type:!0,class:!0}),r=F(u),f=I(u,"BUTTON",{class:!0});var q=T(f);a=L(q,"\u25B6"),q.forEach(g),u.forEach(g),this.h()},h(){m(t,"type","button"),m(s,"type","text"),m(s,"class","text-input svelte-s7wsv"),m(f,"class","icon svelte-s7wsv"),m(e,"class","form svelte-s7wsv")},m(o,u){M(o,e,u),y(e,t),y(t,l),y(e,i),y(e,s),be(s,n[4]),y(e,r),y(e,f),y(f,a),v||(c=[X(t,"click",n[10]),X(s,"input",n[11]),X(e,"submit",Je(n[12]))],v=!0)},p(o,u){u&16&&s.value!==o[4]&&be(s,o[4])},i:$,o:$,d(o){o&&g(e),v=!1,Ce(c)}}}function pt(n){let e,t,l,i;function s(f){n[7](f)}let r={key:"OY94CH1Q77WO"};return n[4]!==void 0&&(r.q=n[4]),t=new bt({props:r}),x.push(()=>ne(t,"q",s)),t.$on("click",n[8]),t.$on("close",n[9]),{c(){e=S("div"),ce(t.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0});var a=T(e);_e(t.$$.fragment,a),a.forEach(g),this.h()},h(){m(e,"class","keyboard svelte-s7wsv")},m(f,a){M(f,e,a),he(t,e,null),i=!0},p(f,a){const v={};!l&&a&16&&(l=!0,v.q=f[4],se(()=>l=!1)),t.$set(v)},i(f){i||(U(t.$$.fragment,f),i=!0)},o(f){P(t.$$.fragment,f),i=!1},d(f){f&&g(e),de(t)}}}function Ae(n){let e,t,l,i,s;return{c(){e=S("footer"),t=S("p"),l=H("Made with \u{1F9E1} and Svelte by "),i=S("a"),s=H("Gautier"),this.h()},l(r){e=I(r,"FOOTER",{class:!0});var f=T(e);t=I(f,"P",{});var a=T(t);l=L(a,"Made with \u{1F9E1} and Svelte by "),i=I(a,"A",{href:!0,class:!0});var v=T(i);s=L(v,"Gautier"),v.forEach(g),a.forEach(g),f.forEach(g),this.h()},h(){m(i,"href","https://gautier.dev"),m(i,"class","svelte-s7wsv"),m(e,"class","svelte-s7wsv")},m(r,f){M(r,e,f),y(e,t),y(t,l),y(t,i),y(i,s)},d(r){r&&g(e)}}}function wt(n){let e,t,l,i,s,r,f,a,v,c,o,u,b,q,V,z,W,G,B,p,O,Z,k,K,Q,E=!n[3]&&Ue(),h=n[0],_=[];for(let w=0;w<h.length;w+=1)_[w]=je(Be(n,h,w));const D=w=>P(_[w],1,1,()=>{_[w]=null}),ge=[pt,yt],d=[];function Ee(w,R){return w[1]?0:1}p=Ee(n),O=d[p]=ge[p](n);let j=!n[3]&&Ae();return{c(){e=C(),t=S("main"),E&&E.c(),l=C(),i=S("div"),s=S("div"),r=S("label"),f=S("input"),a=H(`
        Fullscreen view`),v=C(),c=S("div"),o=S("div"),u=S("a"),b=H("Back to GitHub"),q=C(),V=S("div"),z=S("a"),W=H("Check out the storybook!"),G=C();for(let w=0;w<_.length;w+=1)_[w].c();B=C(),O.c(),Z=C(),j&&j.c(),this.h()},l(w){Ke('[data-svelte="svelte-1arxumj"]',document.head).forEach(g),e=F(w),t=I(w,"MAIN",{class:!0});var A=T(t);E&&E.l(A),l=F(A),i=I(A,"DIV",{class:!0});var N=T(i);s=I(N,"DIV",{class:!0});var ie=T(s);r=I(ie,"LABEL",{for:!0});var ke=T(r);f=I(ke,"INPUT",{id:!0,type:!0}),a=L(ke,`
        Fullscreen view`),ke.forEach(g),ie.forEach(g),v=F(N),c=I(N,"DIV",{class:!0});var ee=T(c);o=I(ee,"DIV",{class:!0});var Se=T(o);u=I(Se,"A",{href:!0,rel:!0,class:!0});var Ie=T(u);b=L(Ie,"Back to GitHub"),Ie.forEach(g),Se.forEach(g),q=F(ee),V=I(ee,"DIV",{class:!0});var ze=T(V);z=I(ze,"A",{href:!0,rel:!0,class:!0});var Te=T(z);W=L(Te,"Check out the storybook!"),Te.forEach(g),ze.forEach(g),G=F(ee);for(let ye=0;ye<_.length;ye+=1)_[ye].l(ee);ee.forEach(g),B=F(N),O.l(N),N.forEach(g),Z=F(A),j&&j.l(A),A.forEach(g),this.h()},h(){document.title="svelte-tenor",m(f,"id","fullscreen"),m(f,"type","checkbox"),m(r,"for","fullscreen"),m(s,"class","center svelte-s7wsv"),m(u,"href","https://github.com/gauben/svelte-tenor"),m(u,"rel","external"),m(u,"class","svelte-s7wsv"),m(o,"class","message text svelte-s7wsv"),m(z,"href","https://gauben.github.io/svelte-tenor/storybook/"),m(z,"rel","external"),m(z,"class","svelte-s7wsv"),m(V,"class","message text svelte-s7wsv"),m(c,"class","messages svelte-s7wsv"),m(i,"class","phone svelte-s7wsv"),m(t,"class","svelte-s7wsv"),me(t,"desktop",!n[3])},m(w,R){M(w,e,R),M(w,t,R),E&&E.m(t,null),y(t,l),y(t,i),y(i,s),y(s,r),y(r,f),f.checked=n[3],y(r,a),y(i,v),y(i,c),y(c,o),y(o,u),y(u,b),y(c,q),y(c,V),y(V,z),y(z,W),y(c,G);for(let A=0;A<_.length;A+=1)_[A].m(c,null);n[6](c),y(i,B),d[p].m(i,null),y(t,Z),j&&j.m(t,null),k=!0,K||(Q=X(f,"change",n[5]),K=!0)},p(w,[R]){if(w[3]?E&&(E.d(1),E=null):E||(E=Ue(),E.c(),E.m(t,l)),R&8&&(f.checked=w[3]),R&1){h=w[0];let N;for(N=0;N<h.length;N+=1){const ie=Be(w,h,N);_[N]?(_[N].p(ie,R),U(_[N],1)):(_[N]=je(ie),_[N].c(),U(_[N],1),_[N].m(c,null))}for(re(),N=h.length;N<_.length;N+=1)D(N);fe()}let A=p;p=Ee(w),p===A?d[p].p(w,R):(re(),P(d[A],1,1,()=>{d[A]=null}),fe(),O=d[p],O?O.p(w,R):(O=d[p]=ge[p](w),O.c()),U(O,1),O.m(i,null)),w[3]?j&&(j.d(1),j=null):j||(j=Ae(),j.c(),j.m(t,null)),R&8&&me(t,"desktop",!w[3])},i(w){if(!k){for(let R=0;R<h.length;R+=1)U(_[R]);U(O),k=!0}},o(w){_=_.filter(Boolean);for(let R=0;R<_.length;R+=1)P(_[R]);P(O),k=!1},d(w){w&&g(e),w&&g(t),E&&E.d(),Qe(_,w),n[6](null),d[p].d(),j&&j.d(),K=!1,Q()}}}function qt(n,e,t){let l=!0,i=[],s=!1,r="",f;qe(()=>{t(3,l=window.matchMedia("(max-width: 600px)").matches)});function a(){l=this.checked,t(3,l)}function v(z){x[z?"unshift":"push"](()=>{f=z,t(2,f)})}function c(z){r=z,t(4,r)}const o=({detail:z})=>{t(0,i=[...i,{gif:!0,body:z}]),t(1,s=!1),t(4,r="")},u=()=>{t(1,s=!1)},b=()=>{t(1,s=!0)};function q(){r=this.value,t(4,r)}const V=()=>{!r||(t(0,i=[...i,{gif:!1,body:r}]),t(4,r=""))};return n.$$.update=()=>{n.$$.dirty&7&&Ye().then(()=>{f==null||f.scrollTo({top:f.scrollHeight})})},[i,s,f,l,r,a,v,c,o,u,b,q,V]}class St extends ae{constructor(e){super();oe(this,e,qt,wt,ue,{})}}export{St as default};