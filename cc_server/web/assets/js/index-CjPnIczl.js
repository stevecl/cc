import{O as f,r,L as m,o as R,g as _,i as s,w as l,B as u,d,e as g,F as I,h as O,f as V,Q as y,k as $,V as P,W as C,X as F,Y as L,Z as N,_ as b}from"./index-DlEFUHLL.js";import{u as z}from"./useDefaultSource-DisbG1SY.js";import{_ as D}from"./index-8SwY1-S-.js";const E={class:"edit-module-swiper"},T={class:"image-slot"},j={__name:"index",props:{config:Object},setup(i){const{getDefaultImage:w}=z(),a=i,S=f(()=>{let{bgStyle:e,style:o}=a.config,{imgRadius:n,imgRatio:t}=a.config;return e.background=`rgba(${e.bgColor.colorRgb()}, ${e.bgOpacity}) url(${e.bgImageUrl}) center / 100% 100% repeat`,e.backgroundSize="100% 100%",console.log("style",o,t),{...e,...o,paddingTop:100/(t.split("/")[0]/t.split("/")[1])+"%"}}),v=r({delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1}),x=f(()=>{let e=a.config.indicator;return{enabled:e.show,clickable:!0,renderBullet:function(o,n){return`<span class="${n}" style="background: ${e.color};"></span>`}}}),h=r([F,L,N]),c=r(null),k=e=>c.value=e;return m(()=>a.config.datas.length,e=>{b(()=>{c.value.slideNext()})}),m(()=>a.config.indicator.color,e=>{b(()=>{a.config.indicator.show&&c.value.pagination.render()})}),R(()=>{}),(e,o)=>{const n=d("Picture"),t=d("el-icon"),B=d("el-image");return g(),_("div",E,[s(u(C),{modules:h.value,pagination:x.value,autoplay:v.value,loop:!0,speed:1e3,onSwiper:k},{default:l(()=>[(g(!0),_(I,null,O(i.config.datas,(p,A)=>(g(),V(u(P),{class:"swiper-slide",style:y(S.value)},{default:l(()=>[s(B,{class:"img",src:p.url||u(w)(p.defaultIcon),style:y({borderRadius:i.config.imgRadius+"%"})},{error:l(()=>[$("div",T,[s(t,null,{default:l(()=>[s(n)]),_:1})])]),_:2},1032,["src","style"])]),_:2},1032,["style"]))),256))]),_:1},8,["modules","pagination","autoplay"])])}}},W=D(j,[["__scopeId","data-v-7380a440"]]);export{W as default};
