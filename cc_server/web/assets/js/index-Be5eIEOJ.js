import{_ as k}from"./index-wwZ3BqaF.js";import{T as y,f as n,F as m,g as p,Q as a,e as t,k as r,n as C,z as i,t as x}from"./index-BdoJKyZb.js";const v=["onClick"],h=["src"],_=["src"],T={__name:"index",props:{config:Object},setup(c){const s=c,u=y(()=>({backgroundColor:s.config.bgColor})),d=e=>({color:l(e.link)?s.config.iconActiveColor:s.config.iconColor}),g=e=>({color:l(e.link)?s.config.textActiveColor:s.config.textColor}),l=e=>e==="defaultIndex";return(e,w)=>(t(),n("div",{class:"edit-module-menu",style:a(u.value)},[(t(!0),n(m,null,p(c.config.datas,(o,f)=>(t(),n("div",{key:f,onClick:I=>e.linkHandle(o),style:{}},[r("p",{class:"icon",style:a(d(o))},[c.config.showType===1?(t(),n("span",{key:0,class:C(["iconfont",o.icon])},null,2)):i("",!0),c.config.showType===2&&!l(o.link)?(t(),n("img",{key:1,src:o.img,alt:""},null,8,h)):i("",!0),c.config.showType===2&&l(o.link)?(t(),n("img",{key:2,src:o.activeImg,alt:""},null,8,_)):i("",!0)],4),r("p",{class:"text text-overflow",style:a(g(o))},[r("span",null,x(o.text),1)],4)],8,v))),128))],4))}},A=k(T,[["__scopeId","data-v-ad002f27"]]);export{A as default};
