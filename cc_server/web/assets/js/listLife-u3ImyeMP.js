import{r,o as d,f as i,h as t,k as p,b as _,e as f}from"./index-0bWp895S.js";import{p as m,m as g,a as v}from"./moduleList-D67do8aw.js";import{_ as y,g as h}from"./index-MBh0lVgE.js";const x={class:"flex flex-col page-manager-wrap"},L={class:"flex-1 flex flex-col"},S={__name:"listLife",setup(q){const n=new _,e=r([]),a=r({pageNum:1,pageSize:10,searchKey:"",category:"HSH",sourceType:"MARKET_APPLETS"}),c=()=>{n.push({name:"edit",query:{type:"HSH",id:""}})},s=async()=>{let{dataList:o}=await h(a.value);e.value=o,console.log(e.value)};return d(()=>{s()}),(o,l)=>(f(),i("div",x,[t(v,{title:"惠生活"}),p("div",L,[t(m,{query:a.value,"onUpdate:search":l[0]||(l[0]=u=>a.value.nameCn=u),onSearch:s,onAdd:c},null,8,["query"]),t(g,{datas:e.value,onUpdate:s},null,8,["datas"])])]))}},k=y(S,[["__scopeId","data-v-25e0b639"]]);export{k as default};
