import{_ as y,u as b}from"./index-BSzIHgt9.js";import{U as n,f as c,F as k,g as S,R as a,e as r,k as o,l as _,t as u}from"./index-BmUZ1pVW.js";const v=["onClick"],x={class:"box"},h=["src"],w={__name:"index",props:{config:Object},setup(i){const{getDefaultImage:d}=b(),l=i,g=n(()=>{let{bgStyle:e,style:s}=l.config;return e.background=`${e.bgColor} url(${e.bgImageUrl}) center / 100% 100% repeat`,e.backgroundSize="100% 100%",{...e,...s}}),p=n(()=>l.config.supStyle),f=n(()=>l.config.subStyle);return(e,s)=>(r(),c("div",{style:a(g.value),class:"edit-module-picture-show",onClick:s[0]||(s[0]=t=>e.$emit("click",t))},[(r(!0),c(k,null,S(i.config.datas,(t,m)=>(r(),c("div",{class:"edit-module-picture-show_item",key:m,onClick:C=>e.linkTo(t.link)},[o("div",x,[o("img",{class:"img",src:t.icon||_(d)(t.defaultIcon)},null,8,h),o("p",{class:"text-overflow sup-title",style:a(p.value)},u(t.supTitle),5)]),o("p",{class:"text-overflow sub-title",style:a(f.value)},u(t.subTitle),5)],8,v))),128))],4))}},B=y(w,[["__scopeId","data-v-68086786"]]);export{B as default};