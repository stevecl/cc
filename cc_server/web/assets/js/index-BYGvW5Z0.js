import{u as g}from"./useDefaultSource-DisbG1SY.js";import{_ as f}from"./index-CEVRakId.js";import{O as m,g as s,F as b,h as p,Q as r,e as a,k as n,B as y,t as x}from"./index-DlEFUHLL.js";const _=["src"],k={__name:"index",props:{config:Object},setup(t){const{getDefaultImage:l}=g(),u=t,i=m(()=>{let{style:e={},borderRadius:c}=u.config;return e.background=`rgba(${e.bgColor.colorRgb()}, ${e.bgOpacity}) url(${e.bgImageUrl}) center / 100% 100% repeat`,e.borderRadius=c+"px",e});return(e,c)=>(a(),s("div",{class:"edit-module-button",style:r(i.value)},[(a(!0),s(b,null,p(t.config.datas,(o,d)=>(a(),s("div",{style:r({width:100/t.config.lineNum+"%"}),key:d},[n("img",{src:o.icon||y(l)(o.defaultIcon),style:r({borderRadius:t.config.imgBorderRadius+"px"})},null,12,_),n("p",{class:"text-overflow",style:r({color:o.color})},x(o.text),5)],4))),128))],4))}},h=f(k,[["__scopeId","data-v-66431b29"]]);export{h as default};
