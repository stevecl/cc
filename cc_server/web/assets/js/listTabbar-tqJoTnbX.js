import{r as l,o as p,g as u,i as s,k as i,b as _,e as m}from"./index-DlEFUHLL.js";import{g as f,p as g}from"./pageTitle-PNUMLZpy.js";import{p as T,m as v}from"./moduleList-CdPcutur.js";import{_ as y}from"./index-CEVRakId.js";const x={class:"flex flex-col page-manager-wrap"},h={class:"flex-1 flex flex-col"},M={__name:"listTabbar",setup(L){const n=new _,e=l([]),a=l({pageNum:1,pageSize:10,searchKey:"",category:"BOTTOM_MENU",sourceType:"MARKET_APPLETS"}),c=()=>{n.push({name:"edit",query:{type:"BOTTOM_MENU",id:""}})},t=async()=>{let{dataList:o}=await f(a.value);e.value=o,console.log(e.value)};return p(()=>{t()}),(o,r)=>(m(),u("div",x,[s(g,{title:"底部菜单"}),i("div",h,[s(T,{query:a.value,"onUpdate:search":r[0]||(r[0]=d=>a.value.nameCn=d),onSearch:t,onAdd:c},null,8,["query"]),s(v,{datas:e.value,onUpdate:t},null,8,["datas"])])]))}},q=y(M,[["__scopeId","data-v-d9d6e825"]]);export{q as default};
