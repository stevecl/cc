import{H as r,f as i,F as h,g as S,S as o,e as a,k as n,n as m,t as f,y as v,A as b}from"./index-Mzu7L1o1.js";import{_ as z}from"./index-Da8joAZN.js";const C={class:"right-box"},k={__name:"index",props:{config:Object},setup(l){const s=l,g=r(()=>{let{style:t={},textColor:c,borderRadius:e}=s.config;return t.background=`${t.bgColor} url(${t.bgImageUrl}) center / 100% 100% repeat`,t.borderRadius=e+"px",t}),u=r(()=>{let{height:t}=s.config;return{height:t+"px",lineHeight:t+"px"}}),x=r(()=>{let{textColor:t,textAlign:c,fontWeight:e}=s.config;return{fontWeight:e,color:t,justifyContent:c==="left"?"flex-start":"center"}}),d=r(()=>{let{rightStyle:t}=s.config;return{fontSize:t.fontSize+"px",color:t.textColor}}),y=r(()=>{let{rightStyle:t}=s.config;return{fontSize:t.iconSize+"px",color:t.iconColor}});return(t,c)=>(a(),i("div",{class:"edit-module-list-nav",style:o(g.value)},[(a(!0),i(h,null,S(l.config.datas,(e,p)=>(a(),i("div",{class:"item-box",style:o(u.value),key:p},[n("p",{class:"text-overflow text",style:o(x.value)},[n("span",{class:m([e.icon?`iconfont ${e.icon}`:""]),style:o({color:l.config.iconColor,fontSize:l.config.iconFontSize+"px"})},null,6),n("span",null,f(e.text),1)],4),n("p",C,[n("span",{class:"alert",style:o(d.value)},f(e.alert),5),v(n("span",{class:"iconfont icon-more",style:o(y.value)},null,4),[[b,l.config.hasIcon]])])],4))),128))],4))}},j=z(k,[["__scopeId","data-v-3168f09d"]]);export{j as default};
