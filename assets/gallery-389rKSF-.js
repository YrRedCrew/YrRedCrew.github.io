const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery-DHWtBNa8.js","assets/app-DYthNE-R.js","assets/app-D8g-FSOW.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-BhN51dU1.js"])))=>i.map(i=>d[i]);
import{d as b,l as k,o as n,c as r,C as g,ah as P,e as y,g as a,G as V,ai as $,s as G,aj as S,j as m,u as D,v as A,I as E,a7 as O,ab as R,ac as Y,k as j,S as B,ak as I,w as _,r as T,ad as F,f as o,t as N,F as z,aa as K,al as M}from"./app-DYthNE-R.js";import{_ as H}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BhN51dU1.js";const J=b({__name:"YunGallery",props:{photos:{}},setup(h){return(c,s)=>{const e=k("VAGallery");return n(),r(e,{photos:c.photos},null,8,["photos"])}}}),L={key:0,"w-full":"","pt-14":"","pb-10":""},U={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},W={key:1},q=b({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(h){const c=h,s=g(""),e=g(""),i=g(!1),{decrypt:u}=P();async function v(){const l=c.encryptedPhotos;if(l)try{const t=await u(s.value,l);e.value=t||""}catch{i.value=!0}}function f(){e.value="",s.value=""}return(l,t)=>{const p=J;return n(),y("div",null,[e.value?(n(),y("div",W,[m(p,{photos:JSON.parse(e.value)},null,8,["photos"]),a("div",{"w-full":"","text-center":"","mt-8":""},[a("button",{"m-auto":"",class:"btn","font-bold":"",onClick:f}," Encrypt Again ")])])):(n(),y("div",L,[a("div",U,[V(a("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:G(i.value&&"border-red"),onInput:t[1]||(t[1]=d=>i.value=!1),onKeyup:S(v,["enter"])},null,34),[[$,s.value]]),a("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:v})])]))])}}}),Q={text:"center",class:"yun-text-light",p:"2"},X={class:"page-action",text:"center"},Z=["title"],ee=b({__name:"gallery",setup(h){const c=D(),{t:s}=A(),e=E(),i=O(e);R([Y({"@type":"CollectionPage"})]);const u=j(()=>e.value.photos||[]),f=B().value.addons["valaxy-addon-lightgallery"]?I(()=>M(()=>import("./YunGallery-DHWtBNa8.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(l,t)=>{const p=K,d=H,x=q,w=k("RouterView");return n(),y(z,null,[l.$slots["sidebar-child"]?(n(),r(p,{key:0},{default:_(()=>[T(l.$slots,"sidebar-child")]),_:3})):(n(),r(p,{key:1})),m(w,null,{default:_(({Component:C})=>[(n(),r(F(C),null,{"main-header":_(()=>[m(d,{title:o(i)||o(s)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color},null,8,["title","icon","color"])]),"main-content":_(()=>[a("div",Q,N(o(s)("counter.photos",u.value.length)),1),a("div",X,[a("a",{class:"yun-icon-btn",title:o(s)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(c).back())},t[1]||(t[1]=[a("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,Z)]),o(e).encryptedPhotos?(n(),r(x,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(n(),r(o(f),{key:1,photos:u.value},null,8,["photos"])),m(w)]),_:2},1024))]),_:1})],64)}}}),ne=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{J as _,ne as g};