import{r as l,o as u,f as p,h as s,k as i,b as _,e as f}from"./index-0bWp895S.js";import{p as m,m as g,a as v}from"./moduleList-BgdkAEbM.js";import{_ as y,g as h}from"./index-BJcRcYVb.js";const x={class:"flex flex-col page-manager-wrap"},A={class:"flex-1 flex flex-col"},E={__name:"listAdvert",setup(L){const n=new _,e=l([]),a=l({pageNum:1,pageSize:10,searchKey:"",category:"HOME_ADVERT",sourceType:"MARKET_APPLETS"}),c=()=>{n.push({name:"edit",query:{type:"HOME_ADVERT",id:""}})},t=async()=>{let{dataList:o}=await h(a.value);e.value=o,console.log(e.value)};return u(()=>{t()}),(o,r)=>(f(),p("div",x,[s(v,{title:"启用广告"}),i("div",A,[s(m,{query:a.value,"onUpdate:search":r[0]||(r[0]=d=>a.value.nameCn=d),onSearch:t,onAdd:c},null,8,["query"]),s(g,{datas:e.value,onUpdate:t},null,8,["datas"])])]))}},R=y(E,[["__scopeId","data-v-19cf02f5"]]);export{R as default};