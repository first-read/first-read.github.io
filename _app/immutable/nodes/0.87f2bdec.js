import{s as m,c as p,u as d,g as h,d as g}from"../chunks/scheduler.e108d1fd.js";import{S as y,i as v,g as $,s as b,h as M,x as S,c as j,k as x,a as c,d as T,t as E,f as u}from"../chunks/index.38a092e6.js";import{j as J}from"../chunks/singletons.924788a5.js";const L=!0,N=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));const P=J("after_navigate");function k(a){let s,i='<a href="/">Posts</a>',l,n;const o=a[1].default,t=p(o,a,a[0],null);return{c(){s=$("div"),s.innerHTML=i,l=b(),t&&t.c(),this.h()},l(e){s=M(e,"DIV",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-89nan6"&&(s.innerHTML=i),l=j(e),t&&t.l(e),this.h()},h(){x(s,"class","nav svelte-5baz1e")},m(e,r){c(e,s,r),c(e,l,r),t&&t.m(e,r),n=!0},p(e,[r]){t&&t.p&&(!n||r&1)&&d(t,o,e,e[0],n?g(o,e[0],r,null):h(e[0]),null)},i(e){n||(T(t,e),n=!0)},o(e){E(t,e),n=!1},d(e){e&&(u(s),u(l)),t&&t.d(e)}}}async function _(){try{await MathJax.typesetPromise()}catch(a){console.log("Typeset failed: "+a.message)}}function f(){document.querySelectorAll('mjx-mtext[style="color: red;"]').length>0?(console.error("MathJax rendering failed. Retrying..."),_().then(()=>{f()})):console.log("No MathJax rendering errors found.")}function q(a,s,i){let{$$slots:l={},$$scope:n}=s;return P(()=>{_().then(()=>{f()})}),a.$$set=o=>{"$$scope"in o&&i(0,n=o.$$scope)},[n,l]}class O extends y{constructor(s){super(),v(this,s,q,k,m,{})}}export{O as component,N as universal};