import{r as v,o as l,c as w,w as S,a as i,b as a,n as I,u as g,p as _,d as p,e as k,f as A,g as C,h,i as M,j as y,v as x,t as m,k as $,l as P,m as R,q as V,V as H}from"./vendor.5b26b128.js";const j=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};j();var d=(t,s)=>{const o=t.__vccOpts||t;for(const[n,e]of s)o[n]=e;return o};const F={};function L(t,s){const o=v("router-view");return l(),w(o)}var O=d(F,[["render",L]]);const B=t=>(_("data-v-74e1e2a2"),t=t(),p(),t),T={class:"p-2 p-md-3"},q={class:"container"},D={class:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"},U={class:"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"},W=B(()=>a("li",null,[a("a",{href:"/about",target:"_blank",class:"nav-link px-2"},"\u5173\u4E8E")],-1)),z={props:{currentRoutePath:String},setup(t){const s=t;let o=!1;S(()=>{o=s.currentRoutePath==="/"});function n(){alert("\u52AA\u529B\u5F00\u53D1\u4E2D~")}return(e,r)=>(l(),i("header",T,[a("div",q,[a("div",D,[a("ul",U,[a("li",null,[a("a",{href:"/",class:I(["nav-link px-2",{active:g(o)}])},"\u9996\u9875",2)]),a("li",null,[a("a",{class:"nav-link px-2",onClick:r[0]||(r[0]=c=>n())},"\u5DE5\u5177\u96C6")]),W])])])]))}};var E=d(z,[["__scopeId","data-v-74e1e2a2"]]);const G={},K=t=>(_("data-v-db9c156a"),t=t(),p(),t),J={class:""},Q=K(()=>a("p",{class:"footer-p text-center text-muted"},"\xA9 2021 GuTool \u80A1\u7968\u4EA4\u6613\u5DE5\u5177\u96C6",-1)),X=[Q];function Y(t,s){return l(),i("div",J,X)}var Z=d(G,[["render",Y],["__scopeId","data-v-db9c156a"]]);const tt={class:"frame"},et={class:"header"},st={class:"body"},ot={class:"footer"},rt={setup(t){let s="";const o=k();return A(),C(()=>o,()=>{s=o.path,console.log("\u6D4B\u8BD5",o.path)},{immediate:!0,deep:!0}),(n,e)=>{const r=v("router-view");return l(),i("div",tt,[a("div",et,[h(E,{currentRoutePath:g(s)},null,8,["currentRoutePath"])]),a("div",st,[h(r)]),a("div",ot,[h(Z)])])}}};const at={},nt={class:"container"},ct=M('<div class="my-3 my-md-4 px-md-2" data-v-658393f2><h5 data-v-658393f2><span class="title-flag" data-v-658393f2># </span><span class="title-text" data-v-658393f2>\u5DE5\u5177\u5217\u8868</span></h5></div><div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 px-md-2" data-v-658393f2><div class="col" data-v-658393f2><a href="/increase-calculator" class="text-decoration-none" data-v-658393f2><div class="card" data-v-658393f2><div class="card-body" data-v-658393f2>\u6DA8\u5E45\u8BA1\u7B97\u5668</div></div></a></div></div>',2),lt=[ct];function it(t,s){return l(),i("div",nt,lt)}var dt=d(at,[["render",it],["__scopeId","data-v-658393f2"]]);const ut={name:"About"},_t=t=>(_("data-v-55c48f9d"),t=t(),p(),t),pt={class:"body"},ht=_t(()=>a("h1",null,"\u5173\u4E8E, \u8FDB\u884C\u4E2D",-1)),mt=[ht];function ft(t,s,o,n,e,r){return l(),i("div",pt,mt)}var vt=d(ut,[["render",ft],["__scopeId","data-v-55c48f9d"]]);function gt(t,s){var o,n,e;try{o=t.toString().split(".")[1].length}catch{o=0}try{n=s.toString().split(".")[1].length}catch{n=0}return e=Math.pow(10,Math.max(o,n)),(u(t,e)+u(s,e))/e}function yt(t,s){var o,n,e;try{o=t.toString().split(".")[1].length}catch{o=0}try{n=s.toString().split(".")[1].length}catch{n=0}return e=Math.pow(10,Math.max(o,n)),(u(t,e)-u(s,e))/e}function u(t,s){var o=0,n=t.toString(),e=s.toString();try{o+=n.split(".")[1].length}catch{}try{o+=e.split(".")[1].length}catch{}return Number(n.replace(".",""))*Number(e.replace(".",""))/Math.pow(10,o)}function xt(t,s){var o,n,e=0,r=0;try{e=t.toString().split(".")[1].length}catch{}try{r=s.toString().split(".")[1].length}catch{}return o=Number(t.toString().replace(".","")),n=Number(s.toString().replace(".","")),u(o/n,Math.pow(10,r-e))}let f={add:gt,sub:yt,mul:u,div:xt};function N(t,s){console.log(t,s);let o=f.mul(f.div(f.sub(s,t),t),100).toFixed(3);return console.log(o),o}const $t={name:"IncreaseCalculator",data(){return{startNum:10,endNum:20,resultNum:"100.000",startNumShow:10,endNumShow:20}},watch:{startNum:function(t){t===""?(this.resultNum="---",this.startNumShow="\u8BF7\u8F93\u5165"):this.endNum===""?this.startNumShow=t:(this.resultNum=N(t,this.endNum),this.startNumShow=t)},endNum:function(t){t===""?(this.resultNum="---",this.endNumShow="\u8BF7\u8F93\u5165"):this.startNum===""?this.endNumShow=t:(this.resultNum=N(this.startNum,t),this.endNumShow=t)}}},b=t=>(_("data-v-61a097d2"),t=t(),p(),t),Nt={class:"container"},bt=b(()=>a("div",{class:"my-3 my-md-4 px-md-2"},[a("h5",null,[a("span",{class:"title-flag"},"# "),a("span",{class:"title-text"},"\u6DA8\u5E45\u8BA1\u7B97\u5668")])],-1)),wt={class:"row g-3 p-md-5 pt-4"},St={class:"col-md-6"},It={class:"col-md-6"},kt={class:"result text-center p-md-4 px-1 py-4"},At=$("\u6DA8\u5E45: "),Ct=b(()=>a("br",null,null,-1));function Mt(t,s,o,n,e,r){return l(),i("div",Nt,[bt,a("div",wt,[a("div",St,[y(a("input",{type:"number",class:"form-control",id:"inputEmail4",placeholder:"\u8BF7\u8F93\u5165\u8D77\u59CB\u503C","onUpdate:modelValue":s[0]||(s[0]=c=>e.startNum=c)},null,512),[[x,e.startNum]])]),a("div",It,[y(a("input",{type:"number",class:"form-control",id:"inputPassword4",placeholder:"\u8BF7\u8F93\u5165\u7ED3\u675F\u503C","onUpdate:modelValue":s[1]||(s[1]=c=>e.endNum=c)},null,512),[[x,e.endNum]])])]),a("div",null,[a("p",kt,[At,a("span",null,m(e.resultNum)+"%",1),Ct,$(" \uFF08\u8D77\u59CB\u503C\uFF1A"+m(e.startNumShow)+"\uFF0C\u7ED3\u675F\u503C\uFF1A"+m(e.endNumShow)+"\uFF09",1)])])])}var Pt=d($t,[["render",Mt],["__scopeId","data-v-61a097d2"]]);const Rt=[{path:"/",redirect:{name:"Home"},component:rt,children:[{path:"/",name:"Home",component:dt,meta:{title:"\u9996\u9875"}},{path:"/increase-calculator",name:"IncreaseCalculator",component:Pt,meta:{title:"\u6DA8\u5E45\u8BA1\u7B97\u5668"}}]},{path:"/About",name:"About",component:vt,meta:{title:"\u5173\u4E8E"}}],Vt=P({history:R(),routes:Rt});V(O).use(Vt).use(H).mount("#app");
