import{_ as I}from"./list3-C6kj7vZ4.js";import{_ as S,u as N}from"./index-BSzIHgt9.js";import{U as d,d as z,e as a,f as o,F as P,g as R,R as n,k as e,h as $,w as D,l as V,z as _,t as h,q as B,n as u,s as L,v as U}from"./index-BmUZ1pVW.js";const j=i=>(L("data-v-7d6c621c"),i=i(),U(),i),A={class:"list list1"},F={class:"wrap"},O={class:"image-slot"},q=["src"],E={class:"name"},T={key:0,class:"tag"},G={class:"sale"},H={class:"info"},J={class:"price"},K=j(()=>e("span",{class:"unit"},"￥",-1)),M={__name:"list1",props:{config:Object},setup(i){const{getDefaultImage:x}=N(),y=i,p=d(()=>y.config.productConfig||{}),l=d(()=>p.value.detail||{}),t=d(()=>p.value.car||{}),f=d(()=>{let{goodSpace:v,goodRadius:r}=p.value,{size:s,color:c,carColor:m,bgColor:C,borderRadius:w,borderColor:k}=t.value;return{"--space":v+"px",borderRadius:r+"px","--size":s==="small"?"22px":s==="middle"?"26px":"30px","--color":c,"--carColor":m,"--bgColor":C,"--borderColor":k,"--fs":s==="small"?"12px":s==="middle"?"13px":"14px","--padding":s==="small"?"4px 8px":s==="middle"?"6px 10px":"7px 12px","--borderRadius":w+"px"}});let g={goodsName:"商品标题",salePrice:"20",marketPrice:"99"};const b=d(()=>{let{type:v,selectList:r=[],showNum:s}=y.config.dataConfig;return v==="product"?r.length?r:[g,g]:new Array(s).fill(g)});return(v,r)=>{const s=z("el-image");return a(),o("div",A,[(a(!0),o(P,null,R(b.value,(c,m)=>(a(),o("div",{class:"list_item",key:m,style:n(f.value)},[e("div",F,[$(s,{class:"img",src:c.mainImgUrl||"t",fit:"contain"},{error:D(()=>[e("div",O,[e("img",{src:V(x)("banner.png"),alt:""},null,8,q)])]),_:2},1032,["src"])]),e("div",{class:"detail",style:n({background:p.value.bgColor})},[e("div",E,[l.value.tag.show?(a(),o("span",T,"标题标签")):_("",!0),l.value.title.show?(a(),o("span",{key:1,class:"txt",style:n(l.value.title.style)},h(c.goodsName),5)):_("",!0)]),l.value.subtitle.show?(a(),o("div",{key:0,class:"subtitle",style:n(l.value.subtitle.style)},"这里是副标题",4)):_("",!0),e("div",G,[e("div",H,[l.value.sales.show?(a(),o("div",{key:0,class:"sales",style:n(l.value.sales.style)},"已售0",4)):_("",!0),e("div",J,[l.value.price.show?(a(),o("div",{key:0,class:"sale-price",style:n(l.value.price.style)},[K,B(h(c.salePrice),1)],4)):_("",!0),l.value.oldPrice.show?(a(),o("div",{key:1,class:"old-price",style:n(l.value.oldPrice.style)},"￥"+h(c.marketPrice),5)):_("",!0)])]),t.value.show?(a(),o("div",{key:0,class:u(["btn",[t.value.type,t.value.size]])},[e("span",{class:u([{hide:t.value.type!=="btn1"},"txt"])},h(t.value.text||"购买"),3),e("span",{class:u([{hide:t.value.type!=="btn2"},"add"])},"+",2),e("span",{class:u([{hide:t.value.type!=="btn3"},"iconfont icon-gouwuche icon"])},null,2),e("img",{class:u({hide:t.value.type!=="btn4"}),src:I,alt:""},null,2)],2)):_("",!0)])],4)],4))),128))])}}},ce=S(M,[["__scopeId","data-v-7d6c621c"]]),Q=i=>(L("data-v-3de06c61"),i=i(),U(),i),W={class:"list list5"},X={class:"wrap"},Y={class:"image-slot"},Z=["src"],ee={class:"sale"},se=Q(()=>e("span",{class:"unit"},"￥",-1)),te={__name:"list5",props:{config:Object},setup(i){const{getDefaultImage:x}=N(),y=i,p=d(()=>y.config.productConfig||{}),l=d(()=>p.value.detail||{}),t=d(()=>p.value.car||{}),f=d(()=>{let{goodSpace:v,goodRadius:r}=p.value,{size:s,color:c,carColor:m,bgColor:C,borderRadius:w,borderColor:k}=t.value;return{"--space":v+"px",borderRadius:r+"px","--size":s==="small"?"22px":s==="middle"?"26px":"30px","--color":c,"--carColor":m,"--bgColor":C,"--borderColor":k,"--fs":s==="small"?"12px":s==="middle"?"13px":"14px","--padding":s==="small"?"4px 8px":s==="middle"?"6px 10px":"7px 12px","--borderRadius":w+"px"}});let g={goodsName:"商品标题",salePrice:"20",marketPrice:"99"};const b=d(()=>{let{type:v,selectList:r=[],showNum:s}=y.config.dataConfig;return v==="product"?r.length?r:[g,g]:new Array(s).fill(g)});return(v,r)=>{const s=z("el-image");return a(),o("div",W,[(a(!0),o(P,null,R(b.value,(c,m)=>(a(),o("div",{class:"list_item",key:m,style:n(f.value)},[e("div",X,[$(s,{class:"img",src:c.mainImgUrl||"t",fit:"contain"},{error:D(()=>[e("div",Y,[e("img",{src:V(x)("picture.png"),alt:""},null,8,Z)])]),_:2},1032,["src"])]),e("div",{class:"detail",style:n({background:p.value.bgColor})},[e("div",{class:"name",style:n(l.value.title.style)},h(c.goodsName),5),e("div",ee,[e("div",{class:"price",style:n(l.value.price.style)},[se,B(h(c.salePrice),1)],4),t.value.show?(a(),o("div",{key:0,class:u(["btn",[t.value.type,t.value.size]])},[e("span",{class:u([{hide:t.value.type!=="btn1"},"txt"])},h(t.value.text||"购买"),3),e("span",{class:u([{hide:t.value.type!=="btn2"},"add"])},"+",2),e("span",{class:u([{hide:t.value.type!=="btn3"},"iconfont icon-gouwuche icon"])},null,2),e("img",{class:u({hide:t.value.type!=="btn4"}),src:I,alt:""},null,2)],2)):_("",!0)])],4)],4))),128))])}}},ie=S(te,[["__scopeId","data-v-3de06c61"]]);export{ie as a,ce as l};