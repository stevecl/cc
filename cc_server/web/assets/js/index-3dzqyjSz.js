import{H as n,r as l,D as p,o as I,f as g,h as f,w as r,l as i,S as m,d as B,e as c,F as $,g as R,i as V,k as _,Z as C,_ as D,$ as F,a0 as N,a1 as O,I as S}from"./index-DEqbzUmX.js";import{_ as z,af as E}from"./index-BYTKi1BI.js";const L={class:"image-slot"},P=["src"],T={__name:"index",props:{config:Object},setup(u){const{getDefaultImage:w}=E(),a=u,y=n(()=>{let{bgStyle:e,style:t}=a.config;return e.background=`${e.bgColor} url(${e.bgImageUrl}) center / 100% 100% repeat`,e.backgroundSize="100% 100%",{...e,...t}}),b=n(()=>{let{imgRadius:e,imgRatio:t}=a.config;return{paddingTop:100/(t.split("/")[0]/t.split("/")[1])+"%",borderRadius:e+"%"}}),v=l({delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1}),x=n(()=>{let e=a.config.indicator;return{enabled:e.show,clickable:!0,renderBullet:function(t,o){return`<span class="${o}" style="background: ${e.color};"></span>`}}}),h=l([F,N,O]),s=l(null),k=e=>s.value=e;return p(()=>a.config.datas.length,e=>{S(()=>{s.value.slideNext()})}),p(()=>a.config.indicator.color,e=>{S(()=>{a.config.indicator.show&&s.value.pagination.render()})}),I(()=>{}),(e,t)=>{const o=B("el-image");return c(),g("div",{class:"edit-module-swiper",style:m(y.value)},[f(i(D),{modules:h.value,pagination:x.value,autoplay:v.value,loop:!0,speed:1e3,onSwiper:k},{default:r(()=>[(c(!0),g($,null,R(u.config.datas,(d,j)=>(c(),V(i(C),{class:"swiper-slide",style:m(b.value)},{default:r(()=>[f(o,{class:"img",src:d.url||"t"},{error:r(()=>[_("div",L,[_("img",{src:i(w)(d.defaultIcon),alt:""},null,8,P)])]),_:2},1032,["src"])]),_:2},1032,["style"]))),256))]),_:1},8,["modules","pagination","autoplay"])],4)}}},M=z(T,[["__scopeId","data-v-85684f5f"]]);export{M as default};