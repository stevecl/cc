import{u as p}from"./useDefaultSource-DVO3jfZ-.js";import{_ as u}from"./index-Do_uFhez.js";import{S as g,e as o,f as a,F as y,g as C,k as e,l as v,P as s,q as x,s as h,v as b,n as i,t as k,z as w}from"./index-DgSdXyB0.js";import{_ as z}from"./list3-DLQGiOwT.js";const $=t=>(h("data-v-00db9ed1"),t=t(),b(),t),B={class:"list list4"},D={class:"wrap"},N=["src"],V=$(()=>e("span",{class:"unit"},"￥",-1)),j={__name:"list4",props:{config:Object},setup(t){const{getDefaultImage:n}=p(),l=t,d=g(()=>({"--space":l.config.itemStyle.goodSpace+"px"}));return(f,c)=>(o(),a("div",B,[(o(),a(y,null,C(3,r=>e("div",{class:"list_item",style:s(d.value)},[e("div",D,[e("img",{class:"img",src:v(n)("picture.png"),alt:""},null,8,N)]),e("div",{class:"detail",style:s({background:t.config.itemStyle.goodBgColor})},[e("div",{class:"name",style:s(t.config.detailConfig.title.style)},"这里是商品标题这里是商品标题这里是商品标题",4),e("div",{class:"sale",style:s(t.config.detailConfig.price.style)},[V,x("20")],4)],4)],4)),64))]))}},J=u(j,[["__scopeId","data-v-00db9ed1"]]),F=t=>(h("data-v-ffed77c9"),t=t(),b(),t),O={class:"list list6"},R={class:"wrap"},q=["src"],E={class:"sale"},L=F(()=>e("span",{class:"unit"},"￥",-1)),P={__name:"list6",props:{config:Object},setup(t){const{getDefaultImage:n}=p(),l=t,d=g(()=>({"--space":l.config.itemStyle.goodSpace+"px"})),f=g(()=>{let{size:c,color:r,carColor:m,bgColor:S,borderRadius:_,borderColor:I}=l.config.carConfig;return{"--size":c==="small"?"22px":c==="middle"?"26px":"30px","--color":r,"--carColor":m,"--bgColor":S,"--borderColor":I,"--fs":c==="small"?"12px":c==="middle"?"13px":"14px","--padding":c==="small"?"4px 8px":c==="middle"?"6px 10px":"7px 12px","--borderRadius":_+"px"}});return(c,r)=>(o(),a("div",O,[(o(),a(y,null,C(7,m=>e("div",{class:"list_item",style:s(d.value)},[e("div",R,[e("img",{class:"img",src:v(n)("picture.png"),alt:""},null,8,q)]),e("div",{class:"detail",style:s({background:t.config.itemStyle.goodBgColor})},[e("div",{class:"name",style:s(t.config.detailConfig.title.style)},"这里是商品标题",4),e("div",E,[e("div",{class:"price",style:s(t.config.detailConfig.price.style)},[L,x("20 ")],4),t.config.carConfig.show?(o(),a("div",{key:0,class:i(["btn",[t.config.carConfig.type,t.config.carConfig.size]]),style:s(f.value)},[e("span",{class:i([{hide:t.config.carConfig.type!=="btn1"},"txt"])},k(t.config.carConfig.text||"购买"),3),e("span",{class:i([{hide:t.config.carConfig.type!=="btn2"},"add"])},"+",2),e("span",{class:i([{hide:t.config.carConfig.type!=="btn3"},"iconfont icon-gouwuche icon"])},null,2),e("img",{class:i({hide:t.config.carConfig.type!=="btn4"}),src:z,alt:""},null,2)],6)):w("",!0)])],4)],4)),64))]))}},K=u(P,[["__scopeId","data-v-ffed77c9"]]);export{K as a,J as l};