import{u as _}from"./useStyle-BJk7n3YZ.js";import{_ as R}from"./index-BSzIHgt9.js";import{f as r,h as t,w as u,k as n,F as U,g as D,d as a,e as c,l as i,a1 as m,q as x,t as V,i as L,z as k,s as F,v as W}from"./index-BmUZ1pVW.js";const d=e=>(F("data-v-1d314e99"),e=e(),W(),e),j=d(()=>n("div",{class:"module-edit-title"},"边距设置",-1)),q={class:"slide-span--unit"},z=d(()=>n("span",null,"px",-1)),E={class:"slide-span--unit"},O=d(()=>n("span",null,"px",-1)),$={class:"slide-span--unit"},A=d(()=>n("span",null,"px",-1)),H=d(()=>n("div",{class:"label2 wid70"},"左右边距(内)",-1)),J=d(()=>n("div",{class:"label2 wid70"},"左右边距(外)",-1)),K=d(()=>n("div",{class:"module-edit-title"},"组件设置",-1)),M=d(()=>n("div",{class:"label2 wid70"},"商品背景",-1)),P=d(()=>n("div",{class:"module-edit-title"},"显示内容",-1)),Q={class:"content"},X={key:0,class:"content_item"},Y=["onClick"],Z={__name:"config",props:{config:Object},setup(e){const S=e,{marginTop:f,marginLeft:C,paddingTop:w,paddingLeft:y,paddingBottom:b}=_(S);return(oo,l)=>{const v=a("el-slider"),s=a("configItem"),g=a("inputNumber"),h=a("selectColor"),T=a("setGoodsShowType"),N=a("setGoodsData"),B=a("setGoodsBuyCar"),G=a("el-checkbox");return c(),r("div",null,[j,t(s,{label:"顶部间距"},{default:u(()=>[t(v,{style:{width:"250px"},modelValue:i(f),"onUpdate:modelValue":l[0]||(l[0]=o=>m(f)?f.value=o:null),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),n("span",q,[x(V(i(f)),1),z])]),_:1}),t(s,{label:"商品间距"},{default:u(()=>[t(v,{style:{width:"250px"},modelValue:e.config.productConfig.goodSpace,"onUpdate:modelValue":l[1]||(l[1]=o=>e.config.productConfig.goodSpace=o),min:0,max:20,step:1,"show-tooltip":!1},null,8,["modelValue"]),n("span",E,[x(V(e.config.productConfig.goodSpace),1),O])]),_:1}),t(s,{label:"商品圆角"},{default:u(()=>[t(v,{style:{width:"250px"},modelValue:e.config.productConfig.goodRadius,"onUpdate:modelValue":l[2]||(l[2]=o=>e.config.productConfig.goodRadius=o),min:0,max:30,step:1,"show-tooltip":!1},null,8,["modelValue"]),n("span",$,[x(V(e.config.productConfig.goodRadius),1),A])]),_:1}),t(s,{label:"上边距",labelWidth:70},{default:u(()=>[t(g,{modelValue:i(w),"onUpdate:modelValue":l[3]||(l[3]=o=>m(w)?w.value=o:null)},null,8,["modelValue"]),H,t(g,{modelValue:i(y),"onUpdate:modelValue":l[4]||(l[4]=o=>m(y)?y.value=o:null)},null,8,["modelValue"])]),_:1}),t(s,{label:"下边距",labelWidth:70},{default:u(()=>[t(g,{modelValue:i(b),"onUpdate:modelValue":l[5]||(l[5]=o=>m(b)?b.value=o:null)},null,8,["modelValue"]),J,t(g,{modelValue:i(C),"onUpdate:modelValue":l[6]||(l[6]=o=>m(C)?C.value=o:null)},null,8,["modelValue"])]),_:1}),K,t(s,{label:"底部背景"},{default:u(()=>[t(h,{modelValue:e.config.style.background,"onUpdate:modelValue":l[7]||(l[7]=o=>e.config.style.background=o),resetColor:"#fff"},null,8,["modelValue"]),M,t(h,{modelValue:e.config.productConfig.bgColor,"onUpdate:modelValue":l[8]||(l[8]=o=>e.config.productConfig.bgColor=o)},null,8,["modelValue"])]),_:1}),t(T,{modelValue:e.config.productConfig.showType,"onUpdate:modelValue":l[9]||(l[9]=o=>e.config.productConfig.showType=o),componentName:"goodsScore"},null,8,["modelValue"]),t(N,{modelValue:e.config.dataConfig,"onUpdate:modelValue":l[10]||(l[10]=o=>e.config.dataConfig=o)},null,8,["modelValue"]),t(B,{modelValue:e.config.productConfig.car,"onUpdate:modelValue":l[11]||(l[11]=o=>e.config.productConfig.car=o),showType:e.config.productConfig.showType,componentName:"goodsScore"},null,8,["modelValue","showType"]),P,n("div",Q,[(c(!0),r(U,null,D(e.config.productConfig.detail,(o,I)=>(c(),r(U,null,[["商品标题","商品价格"].includes(o.name)||e.config.productConfig.showType<=3?(c(),r("div",X,[t(G,{modelValue:o.show,"onUpdate:modelValue":p=>o.show=p},null,8,["modelValue","onUpdate:modelValue"]),n("div",{class:"name",onClick:p=>o.show=!o.show},V(o.name),9,Y),I!=="tag"?(c(),L(h,{key:0,modelValue:o.style.color,"onUpdate:modelValue":p=>o.style.color=p,resetColor:o.style.resetColor},null,8,["modelValue","onUpdate:modelValue","resetColor"])):k("",!0)])):k("",!0)],64))),256))])])}}},no=R(Z,[["__scopeId","data-v-1d314e99"]]);export{no as default};
