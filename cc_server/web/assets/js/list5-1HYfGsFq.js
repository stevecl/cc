import{_ as I}from"./list3-B7fP9xeV.js";import{_ as S,af as N}from"./index-Da8joAZN.js";import{H as d,d as z,e as l,f as o,F as P,g as R,S as n,k as e,h as $,w as D,l as V,z as _,t as h,q as B,n as u,s as L,v as j}from"./index-Mzu7L1o1.js";const A=i=>(L("data-v-dfff5b4f"),i=i(),j(),i),F={class:"list list1"},O={class:"wrap"},U={class:"image-slot"},q=["src"],E={class:"name"},H={key:0,class:"tag"},T={class:"sale"},G={class:"info"},J={class:"price"},K=A(()=>e("span",{class:"unit"},"￥",-1)),M={__name:"list1",props:{config:Object},setup(i){const{getDefaultImage:y}=N(),p=i,v=d(()=>p.config.productConfig||{}),a=d(()=>v.value.detail||{}),t=d(()=>v.value.car||{}),b=d(()=>{let{goodSpace:g,goodRadius:r}=v.value,{size:s,color:c,carColor:f,bgColor:C,borderRadius:w,borderColor:k}=t.value;return{"--space":g+"px",borderRadius:r+"px","--size":s==="small"?"22px":s==="middle"?"26px":"30px","--color":c,"--carColor":f,"--bgColor":C,"--borderColor":k,"--fs":s==="small"?"12px":s==="middle"?"13px":"14px","--padding":s==="small"?"4px 8px":s==="middle"?"6px 10px":"7px 12px","--borderRadius":w+"px"}});let m={goodsName:"商品标题",salePrice:"20",marketPrice:"99"};const x=d(()=>{let{type:g,selectList:r=[],showNum:s}=p.config.dataConfig||p.config.tabbarConfig.datas[p.config.tabbarIndex];return g==="product"?r.length?r:[m,m]:new Array(s).fill(m)});return(g,r)=>{const s=z("el-image");return l(),o("div",F,[(l(!0),o(P,null,R(x.value,(c,f)=>(l(),o("div",{class:"list_item",key:f,style:n(b.value)},[e("div",O,[$(s,{class:"img",src:c.mainImgUrl||"t",fit:"contain"},{error:D(()=>[e("div",U,[e("img",{src:V(y)("default_banner.png"),alt:""},null,8,q)])]),_:2},1032,["src"])]),e("div",{class:"detail",style:n({background:v.value.bgColor})},[e("div",E,[a.value.tag.show?(l(),o("span",H,"标题标签")):_("",!0),a.value.title.show?(l(),o("span",{key:1,class:"txt",style:n(a.value.title.style)},h(c.goodsName),5)):_("",!0)]),a.value.subtitle.show?(l(),o("div",{key:0,class:"subtitle",style:n(a.value.subtitle.style)},"这里是副标题",4)):_("",!0),e("div",T,[e("div",G,[a.value.sales.show?(l(),o("div",{key:0,class:"sales",style:n(a.value.sales.style)},"已售0",4)):_("",!0),e("div",J,[a.value.price.show?(l(),o("div",{key:0,class:"sale-price",style:n(a.value.price.style)},[K,B(h(c.salePrice),1)],4)):_("",!0),a.value.oldPrice.show?(l(),o("div",{key:1,class:"old-price",style:n(a.value.oldPrice.style)},"￥"+h(c.marketPrice),5)):_("",!0)])]),t.value.show?(l(),o("div",{key:0,class:u(["btn",[t.value.type,t.value.size]])},[e("span",{class:u([{hide:t.value.type!=="btn1"},"txt"])},h(t.value.text||"购买"),3),e("span",{class:u([{hide:t.value.type!=="btn2"},"add"])},"+",2),e("span",{class:u([{hide:t.value.type!=="btn3"},"iconfont icon-gouwuche icon"])},null,2),e("img",{class:u({hide:t.value.type!=="btn4"}),src:I,alt:""},null,2)],2)):_("",!0)])],4)],4))),128))])}}},ce=S(M,[["__scopeId","data-v-dfff5b4f"]]),Q=i=>(L("data-v-810cccf1"),i=i(),j(),i),W={class:"list list5"},X={class:"wrap"},Y={class:"image-slot"},Z=["src"],ee={class:"sale"},se=Q(()=>e("span",{class:"unit"},"￥",-1)),te={__name:"list5",props:{config:Object},setup(i){const{getDefaultImage:y}=N(),p=i,v=d(()=>p.config.productConfig||{}),a=d(()=>v.value.detail||{}),t=d(()=>v.value.car||{}),b=d(()=>{let{goodSpace:g,goodRadius:r}=v.value,{size:s,color:c,carColor:f,bgColor:C,borderRadius:w,borderColor:k}=t.value;return{"--space":g+"px",borderRadius:r+"px","--size":s==="small"?"22px":s==="middle"?"26px":"30px","--color":c,"--carColor":f,"--bgColor":C,"--borderColor":k,"--fs":s==="small"?"12px":s==="middle"?"13px":"14px","--padding":s==="small"?"4px 8px":s==="middle"?"6px 10px":"7px 12px","--borderRadius":w+"px"}});let m={goodsName:"商品标题",salePrice:"20",marketPrice:"99"};const x=d(()=>{let{type:g,selectList:r=[],showNum:s}=p.config.dataConfig||p.config.tabbarConfig.datas[p.config.tabbarIndex];return g==="product"?r.length?r:[m,m]:new Array(s).fill(m)});return(g,r)=>{const s=z("el-image");return l(),o("div",W,[(l(!0),o(P,null,R(x.value,(c,f)=>(l(),o("div",{class:"list_item",key:f,style:n(b.value)},[e("div",X,[$(s,{class:"img",src:c.mainImgUrl||"t",fit:"contain"},{error:D(()=>[e("div",Y,[e("img",{src:V(y)("default_picture.png"),alt:""},null,8,Z)])]),_:2},1032,["src"])]),e("div",{class:"detail",style:n({background:v.value.bgColor})},[e("div",{class:"name",style:n(a.value.title.style)},h(c.goodsName),5),e("div",ee,[e("div",{class:"price",style:n(a.value.price.style)},[se,B(h(c.salePrice),1)],4),t.value.show?(l(),o("div",{key:0,class:u(["btn",[t.value.type,t.value.size]])},[e("span",{class:u([{hide:t.value.type!=="btn1"},"txt"])},h(t.value.text||"购买"),3),e("span",{class:u([{hide:t.value.type!=="btn2"},"add"])},"+",2),e("span",{class:u([{hide:t.value.type!=="btn3"},"iconfont icon-gouwuche icon"])},null,2),e("img",{class:u({hide:t.value.type!=="btn4"}),src:I,alt:""},null,2)],2)):_("",!0)])],4)],4))),128))])}}},ie=S(te,[["__scopeId","data-v-810cccf1"]]);export{ie as a,ce as l};
