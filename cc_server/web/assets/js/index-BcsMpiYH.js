import{U as l,r as i,D as d,o as R,f as g,h as p,w as r,l as c,R as f,d as B,e as u,F as $,g as I,i as V,k as m,Y as C,Z as D,_ as F,$ as N,a0 as O,H as _}from"./index-BmUZ1pVW.js";import{_ as z,u as E}from"./index-BSzIHgt9.js";const L={class:"image-slot"},P=["src"],T={__name:"index",props:{config:Object},setup(n){const{getDefaultImage:w}=E(),a=n,y=l(()=>{let{bgStyle:e,style:t}=a.config;return e.background=`${e.bgColor} url(${e.bgImageUrl}) center / 100% 100% repeat`,e.backgroundSize="100% 100%",{...e,...t}}),S=l(()=>{let{imgRadius:e,imgRatio:t}=a.config;return{paddingTop:100/(t.split("/")[0]/t.split("/")[1])+"%",borderRadius:e+"%"}}),b=i({delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1}),v=l(()=>{let e=a.config.indicator;return{enabled:e.show,clickable:!0,renderBullet:function(t,s){return`<span class="${s}" style="background: ${e.color};"></span>`}}}),x=i([F,N,O]),o=i(null),h=e=>o.value=e;return d(()=>a.config.datas.length,e=>{_(()=>{o.value.slideNext()})}),d(()=>a.config.indicator.color,e=>{_(()=>{a.config.indicator.show&&o.value.pagination.render()})}),R(()=>{}),(e,t)=>{const s=B("el-image");return u(),g("div",{class:"edit-module-swiper",style:f(y.value)},[p(c(D),{modules:x.value,pagination:v.value,autoplay:b.value,loop:!0,speed:1e3,onSwiper:h},{default:r(()=>[(u(!0),g($,null,I(n.config.datas,(k,U)=>(u(),V(c(C),{class:"swiper-slide",style:f(S.value)},{default:r(()=>[p(s,{class:"img",src:k.url||"t",fit:"contain"},{error:r(()=>[m("div",L,[m("img",{src:c(w)(n.config.imgRatio==="1/1"?"picture.png":"banner.png"),alt:""},null,8,P)])]),_:2},1032,["src"])]),_:2},1032,["style"]))),256))]),_:1},8,["modules","pagination","autoplay"])],4)}}},H=z(T,[["__scopeId","data-v-c921211d"]]);export{H as default};