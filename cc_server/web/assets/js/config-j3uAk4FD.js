import{f as C,h as n,w as d,k as t,y as W,U as $,F as S,g as j,d as i,e as f,l as u,a0 as g,q as c,t as _,i as q,z as T,s as z,v as E}from"./index-DgSdXyB0.js";import{u as M}from"./useStyle-AF18OWlG.js";import{_ as O}from"./index-Do_uFhez.js";const s=o=>(z("data-v-03d21b1e"),o=o(),E(),o),R=s(()=>t("div",{class:"module-edit-title"},"边距设置",-1)),A={class:"slide-span--unit"},H=s(()=>t("span",null,"px",-1)),J={class:"slide-span--unit"},K=s(()=>t("span",null,"px",-1)),P=s(()=>t("div",{class:"label2 wid70"},"左右边距(内)",-1)),Q=s(()=>t("div",{class:"label2 wid70"},"左右边距(外)",-1)),X=s(()=>t("div",{class:"module-edit-title"},"组件设置",-1)),Y=s(()=>t("div",{class:"label2 wid70"},"商品背景",-1)),Z=s(()=>t("div",{class:"module-edit-title"},"标题",-1)),ee={class:"config-wrapper"},le={class:"config-wrapper_item"},oe=s(()=>t("span",{class:"label"},"文字",-1)),te={class:"inner"},ne={class:"config-wrapper_item"},se=s(()=>t("span",{class:"label"},"颜色",-1)),de={class:"inner"},ie={class:"config-wrapper_item"},ae=s(()=>t("span",{class:"label"},"线条颜色",-1)),ue={class:"inner"},ce={class:"config-wrapper_item"},me=s(()=>t("span",{class:"label"},"图片",-1)),fe={class:"flex inner"},ge=s(()=>t("div",{class:"module-edit-title"},"显示内容",-1)),re={class:"content"},pe={key:0,class:"content_item"},Ve=["onClick"],ve=s(()=>t("div",{class:"module-edit-title"},"选择商品 ",-1)),Ce={__name:"config",props:{config:Object},setup(o){const U=o,{marginTop:r,marginLeft:w,paddingTop:y,paddingLeft:h,paddingBottom:b}=M(U),B=I=>Bus.emit("selectImage",l=>U.config.titleConfig.icon=l.picUrl);return(I,l)=>{const x=i("el-slider"),a=i("configItem"),p=i("inputNumber"),m=i("selectColor"),V=i("el-radio"),k=i("el-radio-group"),N=i("el-input"),G=i("setGoodsShowType"),L=i("setGoodsBuyCar"),D=i("el-checkbox");return f(),C("div",null,[R,n(a,{label:"顶部间距"},{default:d(()=>[n(x,{style:{width:"250px"},modelValue:u(r),"onUpdate:modelValue":l[0]||(l[0]=e=>g(r)?r.value=e:null),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",A,[c(_(u(r)),1),H])]),_:1}),n(a,{label:"商品间距"},{default:d(()=>[n(x,{style:{width:"250px"},modelValue:o.config.itemStyle.goodSpace,"onUpdate:modelValue":l[1]||(l[1]=e=>o.config.itemStyle.goodSpace=e),min:0,max:20,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",J,[c(_(o.config.itemStyle.goodSpace),1),K])]),_:1}),n(a,{label:"上边距",labelWidth:70},{default:d(()=>[n(p,{modelValue:u(y),"onUpdate:modelValue":l[2]||(l[2]=e=>g(y)?y.value=e:null)},null,8,["modelValue"]),P,n(p,{modelValue:u(h),"onUpdate:modelValue":l[3]||(l[3]=e=>g(h)?h.value=e:null)},null,8,["modelValue"])]),_:1}),n(a,{label:"下边距",labelWidth:70},{default:d(()=>[n(p,{modelValue:u(b),"onUpdate:modelValue":l[4]||(l[4]=e=>g(b)?b.value=e:null)},null,8,["modelValue"]),Q,n(p,{modelValue:u(w),"onUpdate:modelValue":l[5]||(l[5]=e=>g(w)?w.value=e:null)},null,8,["modelValue"])]),_:1}),X,n(a,{label:"底部背景"},{default:d(()=>[n(m,{modelValue:o.config.style.background,"onUpdate:modelValue":l[6]||(l[6]=e=>o.config.style.background=e),resetColor:"#fff"},null,8,["modelValue"]),Y,n(m,{modelValue:o.config.itemStyle.goodBgColor,"onUpdate:modelValue":l[7]||(l[7]=e=>o.config.itemStyle.goodBgColor=e)},null,8,["modelValue"])]),_:1}),Z,n(k,{modelValue:o.config.titleConfig.show,"onUpdate:modelValue":l[8]||(l[8]=e=>o.config.titleConfig.show=e),style:{"margin-left":"10px"}},{default:d(()=>[n(V,{value:!0},{default:d(()=>[c("显示")]),_:1}),n(V,{value:!1},{default:d(()=>[c("隐藏")]),_:1})]),_:1},8,["modelValue"]),t("div",ee,[t("div",le,[oe,t("div",te,[n(N,{modelValue:o.config.titleConfig.text,"onUpdate:modelValue":l[9]||(l[9]=e=>o.config.titleConfig.text=e),style:{width:"240px"},placeholder:"",maxlength:"8","show-word-limit":""},null,8,["modelValue"])])]),t("div",ne,[se,t("div",de,[n(m,{modelValue:o.config.titleConfig.color,"onUpdate:modelValue":l[10]||(l[10]=e=>o.config.titleConfig.color=e),resetColor:"#333"},null,8,["modelValue"])])]),t("div",ie,[ae,t("div",ue,[n(m,{modelValue:o.config.titleConfig.lineColor,"onUpdate:modelValue":l[11]||(l[11]=e=>o.config.titleConfig.lineColor=e),resetColor:"#333"},null,8,["modelValue"])])]),t("div",ce,[me,t("div",fe,[W(t("input",{type:"text",class:"cus-input","onUpdate:modelValue":l[12]||(l[12]=e=>o.config.titleConfig.icon=e)},null,512),[[$,o.config.titleConfig.icon]]),t("span",{class:"cus-btn",onClick:B},"选择图片"),t("span",{class:"cus-btn",onClick:l[13]||(l[13]=e=>o.config.titleConfig.icon="")},"清除")])])]),n(G,{modelValue:o.config.showType,"onUpdate:modelValue":l[14]||(l[14]=e=>o.config.showType=e),componentName:"goodsLikes"},null,8,["modelValue"]),n(L,{modelValue:o.config.carConfig,"onUpdate:modelValue":l[15]||(l[15]=e=>o.config.carConfig=e),showType:o.config.showType},null,8,["modelValue","showType"]),ge,t("div",re,[(f(!0),C(S,null,j(o.config.detailConfig,(e,F)=>(f(),C(S,null,[["商品标题","商品价格"].includes(e.name)||o.config.showType<=3?(f(),C("div",pe,[n(D,{modelValue:e.show,"onUpdate:modelValue":v=>e.show=v},null,8,["modelValue","onUpdate:modelValue"]),t("div",{class:"name",onClick:v=>e.show=!e.show},_(e.name),9,Ve),F!=="tag"?(f(),q(m,{key:0,modelValue:e.style.color,"onUpdate:modelValue":v=>e.style.color=v,resetColor:e.style.resetColor},null,8,["modelValue","onUpdate:modelValue","resetColor"])):T("",!0)])):T("",!0)],64))),256))]),ve,n(a,{label:"展示商品"},{default:d(()=>[n(k,{modelValue:o.config.showType,"onUpdate:modelValue":l[16]||(l[16]=e=>o.config.showType=e)},{default:d(()=>[n(V,{value:1},{default:d(()=>[c("手动选择")]),_:1}),n(V,{value:2},{default:d(()=>[c("商品分类")]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}},be=O(Ce,[["__scopeId","data-v-03d21b1e"]]);export{be as default};
