import{_ as f}from"./index-wwZ3BqaF.js";import{T as m,r,f as n,k as s,z as v,Q as _,e as l}from"./index-BdoJKyZb.js";const g={class:"main"},p=["src"],y=["src"],k={__name:"index",props:{config:Object},setup(o){const i=o,d=m(()=>{let{bgStyle:e,style:a}=i.config;return e.background=`${e.bgColor} url(${e.bgImageUrl}) center / 100% 100% repeat`,e.backgroundSize="100% 100%",{...e,...a}}),t=r(null),c=r(!0),u=()=>{c.value=!1,t.value.play()};return(e,a)=>(l(),n("div",{class:"edit-module-video",style:_(d.value)},[s("div",g,[s("video",{class:"main_video",ref_key:"video",ref:t,src:o.config.videoSrc},null,8,p),o.config.poster&&c.value?(l(),n("div",{key:0,class:"poster-wrap",onClick:u},[s("img",{src:o.config.poster,alt:""},null,8,y)])):v("",!0)])],4))}},x=f(k,[["__scopeId","data-v-47df01d0"]]);export{x as default};
