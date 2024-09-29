import{f as C,h as n,w as i,k as t,y as F,W as $,F as k,g as j,d,e as m,l as u,a1 as f,q as g,t as v,i as q,z as T,s as z,v as E}from"./index-BmUZ1pVW.js";import{u as M}from"./useStyle-BJk7n3YZ.js";import{_ as O}from"./index-hNsWhbGy.js";const s=l=>(z("data-v-3520973a"),l=l(),E(),l),A=s(()=>t("div",{class:"module-edit-title"},"边距设置",-1)),H={class:"slide-span--unit"},J=s(()=>t("span",null,"px",-1)),K={class:"slide-span--unit"},P=s(()=>t("span",null,"px",-1)),Q={class:"slide-span--unit"},X=s(()=>t("span",null,"px",-1)),Y=s(()=>t("div",{class:"label2 wid70"},"左右边距(内)",-1)),Z=s(()=>t("div",{class:"label2 wid70"},"左右边距(外)",-1)),oo=s(()=>t("div",{class:"module-edit-title"},"组件设置",-1)),eo=s(()=>t("div",{class:"label2 wid70"},"商品背景",-1)),lo=s(()=>t("div",{class:"module-edit-title"},"标题",-1)),to={class:"config-wrapper"},no={class:"config-wrapper_item"},so=s(()=>t("span",{class:"label"},"文字",-1)),io={class:"inner"},ao={class:"config-wrapper_item"},uo=s(()=>t("span",{class:"label"},"颜色",-1)),co={class:"inner"},mo={class:"config-wrapper_item"},fo=s(()=>t("span",{class:"label"},"线条颜色",-1)),go={class:"inner"},ro={class:"config-wrapper_item"},po=s(()=>t("span",{class:"label"},"图片",-1)),Vo={class:"flex inner"},Co=s(()=>t("div",{class:"module-edit-title"},"显示内容",-1)),vo={class:"content"},wo={key:0,class:"content_item"},ho=["onClick"],bo={__name:"config",props:{config:Object},setup(l){const U=l,{marginTop:r,marginLeft:w,paddingTop:h,paddingLeft:b,paddingBottom:y}=M(U),S=B=>Bus.emit("selectImage",e=>U.config.titleConfig.icon=e.picUrl);return(B,e)=>{const x=d("el-slider"),a=d("configItem"),p=d("inputNumber"),c=d("selectColor"),_=d("el-radio"),I=d("el-radio-group"),N=d("el-input"),G=d("setGoodsShowType"),R=d("setGoodsData"),D=d("setGoodsBuyCar"),L=d("el-checkbox");return m(),C("div",null,[A,n(a,{label:"顶部间距"},{default:i(()=>[n(x,{style:{width:"250px"},modelValue:u(r),"onUpdate:modelValue":e[0]||(e[0]=o=>f(r)?r.value=o:null),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",H,[g(v(u(r)),1),J])]),_:1}),n(a,{label:"商品间距"},{default:i(()=>[n(x,{style:{width:"250px"},modelValue:l.config.productConfig.goodSpace,"onUpdate:modelValue":e[1]||(e[1]=o=>l.config.productConfig.goodSpace=o),min:0,max:20,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",K,[g(v(l.config.productConfig.goodSpace),1),P])]),_:1}),n(a,{label:"商品圆角"},{default:i(()=>[n(x,{style:{width:"250px"},modelValue:l.config.productConfig.goodRadius,"onUpdate:modelValue":e[2]||(e[2]=o=>l.config.productConfig.goodRadius=o),min:0,max:30,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",Q,[g(v(l.config.productConfig.goodRadius),1),X])]),_:1}),n(a,{label:"上边距",labelWidth:70},{default:i(()=>[n(p,{modelValue:u(h),"onUpdate:modelValue":e[3]||(e[3]=o=>f(h)?h.value=o:null)},null,8,["modelValue"]),Y,n(p,{modelValue:u(b),"onUpdate:modelValue":e[4]||(e[4]=o=>f(b)?b.value=o:null)},null,8,["modelValue"])]),_:1}),n(a,{label:"下边距",labelWidth:70},{default:i(()=>[n(p,{modelValue:u(y),"onUpdate:modelValue":e[5]||(e[5]=o=>f(y)?y.value=o:null)},null,8,["modelValue"]),Z,n(p,{modelValue:u(w),"onUpdate:modelValue":e[6]||(e[6]=o=>f(w)?w.value=o:null)},null,8,["modelValue"])]),_:1}),oo,n(a,{label:"底部背景"},{default:i(()=>[n(c,{modelValue:l.config.style.background,"onUpdate:modelValue":e[7]||(e[7]=o=>l.config.style.background=o),resetColor:"#fff"},null,8,["modelValue"]),eo,n(c,{modelValue:l.config.productConfig.bgColor,"onUpdate:modelValue":e[8]||(e[8]=o=>l.config.productConfig.bgColor=o)},null,8,["modelValue"])]),_:1}),lo,n(I,{modelValue:l.config.titleConfig.show,"onUpdate:modelValue":e[9]||(e[9]=o=>l.config.titleConfig.show=o),style:{"margin-left":"10px"}},{default:i(()=>[n(_,{value:!0},{default:i(()=>[g("显示")]),_:1}),n(_,{value:!1},{default:i(()=>[g("隐藏")]),_:1})]),_:1},8,["modelValue"]),t("div",to,[t("div",no,[so,t("div",io,[n(N,{modelValue:l.config.titleConfig.text,"onUpdate:modelValue":e[10]||(e[10]=o=>l.config.titleConfig.text=o),style:{width:"240px"},placeholder:"",maxlength:"8","show-word-limit":""},null,8,["modelValue"])])]),t("div",ao,[uo,t("div",co,[n(c,{modelValue:l.config.titleConfig.color,"onUpdate:modelValue":e[11]||(e[11]=o=>l.config.titleConfig.color=o),resetColor:"#333"},null,8,["modelValue"])])]),t("div",mo,[fo,t("div",go,[n(c,{modelValue:l.config.titleConfig.lineColor,"onUpdate:modelValue":e[12]||(e[12]=o=>l.config.titleConfig.lineColor=o),resetColor:"#333"},null,8,["modelValue"])])]),t("div",ro,[po,t("div",Vo,[F(t("input",{type:"text",class:"cus-input","onUpdate:modelValue":e[13]||(e[13]=o=>l.config.titleConfig.icon=o)},null,512),[[$,l.config.titleConfig.icon]]),t("span",{class:"cus-btn",onClick:S},"选择图片"),t("span",{class:"cus-btn",onClick:e[14]||(e[14]=o=>l.config.titleConfig.icon="")},"清除")])])]),n(G,{modelValue:l.config.productConfig.showType,"onUpdate:modelValue":e[15]||(e[15]=o=>l.config.productConfig.showType=o),componentName:"goodsRanking"},null,8,["modelValue"]),n(R,{modelValue:l.config.dataConfig,"onUpdate:modelValue":e[16]||(e[16]=o=>l.config.dataConfig=o)},null,8,["modelValue"]),n(D,{modelValue:l.config.productConfig.car,"onUpdate:modelValue":e[17]||(e[17]=o=>l.config.productConfig.car=o),showType:l.config.productConfig.showType},null,8,["modelValue","showType"]),Co,t("div",vo,[(m(!0),C(k,null,j(l.config.productConfig.detail,(o,W)=>(m(),C(k,null,[["商品标题","商品价格"].includes(o.name)||l.config.productConfig.showType<=3?(m(),C("div",wo,[n(L,{modelValue:o.show,"onUpdate:modelValue":V=>o.show=V},null,8,["modelValue","onUpdate:modelValue"]),t("div",{class:"name",onClick:V=>o.show=!o.show},v(o.name),9,ho),W!=="tag"?(m(),q(c,{key:0,modelValue:o.style.color,"onUpdate:modelValue":V=>o.style.color=V,resetColor:o.style.resetColor},null,8,["modelValue","onUpdate:modelValue","resetColor"])):T("",!0)])):T("",!0)],64))),256))])])}}},_o=O(bo,[["__scopeId","data-v-3520973a"]]);export{_o as default};
