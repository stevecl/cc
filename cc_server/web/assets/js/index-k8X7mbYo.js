import{_ as g}from"./index-CEVRakId.js";import{O as m,r,g as l,k as t,y as f,Q as v,e as n}from"./index-DlEFUHLL.js";const p={class:"main"},_=["src"],b=["src"],y={__name:"index",props:{config:Object},setup(o){const i=o,d=m(()=>{let{bgStyle:e,style:a}=i.config;return e.background=`rgba(${e.bgColor.colorRgb()}, ${e.bgOpacity}) url(${e.bgImageUrl}) center / 100% 100% repeat`,e.backgroundSize="100% 100%",{...e,...a}}),s=r(null),c=r(!0),u=()=>{c.value=!1,s.value.play()};return(e,a)=>(n(),l("div",{class:"edit-module-video",style:v(d.value)},[t("div",p,[t("video",{class:"main_video",ref_key:"video",ref:s,src:o.config.videoSrc},null,8,_),o.config.poster&&c.value?(n(),l("div",{key:0,class:"poster-wrap",onClick:u},[t("img",{src:o.config.poster,alt:""},null,8,b)])):f("",!0)])],4))}},x=g(y,[["__scopeId","data-v-640b79c2"]]);export{x as default};
