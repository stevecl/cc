import{f as O,h as e,w as n,l as u,k as o,d as s,e as P,a0 as r,q as c,t as k,y as C,V as w,U as W,E as q,B as A}from"./index-BdoJKyZb.js";import{u as z}from"./index-wwZ3BqaF.js";import{u as F}from"./useStyle-iCjjRbJZ.js";const G=o("div",{class:"module-edit-title"},"边距设置",-1),H={class:"slide-span--unit"},J=o("span",null,"px",-1),K=o("div",{class:"label2 wid70"},"左右边距(内)",-1),Q=o("div",{class:"label2 wid70"},"左右边距(外)",-1),X=o("div",{class:"module-edit-title"},"组件设置",-1),Y={class:"slide-span--unit"},Z=o("span",null,"%",-1),ll={class:"slide-span--unit"},el=o("span",null,"%",-1),tl=o("div",{class:"module-edit-title"},"分页器设置",-1),ol=o("div",{class:"diy-edit-line"},null,-1),nl={class:"left-icon"},al={class:"image-slot"},sl={class:"right-icon"},dl={class:"mb10"},il=["onUpdate:modelValue"],ul=["onClick"],cl=["onUpdate:modelValue"],ml=["onClick"],fl=["onClick"],Vl={__name:"config",props:{config:Object},setup(a){const{getDefaultImage:S}=z(),m=a,{marginTop:V,marginLeft:v,paddingTop:U,paddingLeft:x,paddingBottom:y,borderRadius:_}=F(m),R=()=>Bus.emit("selectImage",d=>m.config.bgStyle.bgImageUrl=d.picUrl),T=d=>Bus.emit("selectImage",t=>d.url=t.picUrl),D=d=>Bus.emit("selectLink",t=>d.link=t),N=()=>{let d={defaultIcon:"banner.png",url:"",link:""};m.config.datas.push(d)},E=async d=>{if(m.config.datas.length===1)return q({message:"至少保留一个",type:"warning"});if(await A.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"){let p=m.config.datas.indexOf(d);m.config.datas.splice(p,1)}};return(d,t)=>{const p=s("el-slider"),i=s("configItem"),b=s("inputNumber"),h=s("selectColor"),f=s("el-radio"),B=s("el-radio-group"),L=s("Picture"),I=s("el-icon"),$=s("el-image"),M=s("Close"),j=s("listBox");return P(),O("div",null,[G,e(i,{label:"顶部间距"},{default:n(()=>[e(p,{style:{width:"250px"},modelValue:u(V),"onUpdate:modelValue":t[0]||(t[0]=l=>r(V)?V.value=l:null),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",H,[c(k(u(V)),1),J])]),_:1}),e(i,{label:"上边距",labelWidth:70},{default:n(()=>[e(b,{modelValue:u(U),"onUpdate:modelValue":t[1]||(t[1]=l=>r(U)?U.value=l:null)},null,8,["modelValue"]),K,e(b,{modelValue:u(x),"onUpdate:modelValue":t[2]||(t[2]=l=>r(x)?x.value=l:null)},null,8,["modelValue"])]),_:1}),e(i,{label:"下边距",labelWidth:70},{default:n(()=>[e(b,{modelValue:u(y),"onUpdate:modelValue":t[3]||(t[3]=l=>r(y)?y.value=l:null)},null,8,["modelValue"]),Q,e(b,{modelValue:u(v),"onUpdate:modelValue":t[4]||(t[4]=l=>r(v)?v.value=l:null)},null,8,["modelValue"])]),_:1}),X,e(i,{label:"背景颜色"},{default:n(()=>[e(h,{modelValue:a.config.bgStyle.bgColor,"onUpdate:modelValue":t[5]||(t[5]=l=>a.config.bgStyle.bgColor=l),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),e(i,{label:"背景图片"},{default:n(()=>[C(o("input",{type:"text",class:"cus-input","onUpdate:modelValue":t[6]||(t[6]=l=>a.config.bgStyle.bgImageUrl=l)},null,512),[[w,a.config.bgStyle.bgImageUrl]]),o("span",{class:"cus-btn",onClick:R},"选择图片"),o("span",{class:"cus-btn",onClick:t[7]||(t[7]=l=>a.config.bgStyle.bgImageUrl="")},"清除")]),_:1}),e(i,{label:"组件圆角"},{default:n(()=>[e(p,{style:{width:"250px"},modelValue:u(_),"onUpdate:modelValue":t[8]||(t[8]=l=>r(_)?_.value=l:null),min:0,max:50,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",Y,[c(k(u(_)),1),Z])]),_:1}),e(i,{label:"图片圆角"},{default:n(()=>[e(p,{style:{width:"250px"},modelValue:a.config.imgRadius,"onUpdate:modelValue":t[9]||(t[9]=l=>a.config.imgRadius=l),min:0,max:50,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",ll,[c(k(a.config.imgRadius),1),el])]),_:1}),tl,e(i,{label:"形状"},{default:n(()=>[e(B,{modelValue:a.config.indicator.show,"onUpdate:modelValue":t[10]||(t[10]=l=>a.config.indicator.show=l)},{default:n(()=>[e(f,{value:!0},{default:n(()=>[c("显示")]),_:1}),e(f,{value:!1},{default:n(()=>[c("隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"颜色"},{default:n(()=>[e(h,{modelValue:a.config.indicator.color,"onUpdate:modelValue":t[11]||(t[11]=l=>a.config.indicator.color=l),resetColor:"#ffffff"},null,8,["modelValue"])]),_:1}),e(i,{label:"图片比列"},{default:n(()=>[e(B,{modelValue:a.config.imgRatio,"onUpdate:modelValue":t[12]||(t[12]=l=>a.config.imgRatio=l)},{default:n(()=>[e(f,{value:"1/1"},{default:n(()=>[c("1:1")]),_:1}),e(f,{value:"3/4"},{default:n(()=>[c("3:4")]),_:1}),e(f,{value:"4/3"},{default:n(()=>[c("4:3")]),_:1}),e(f,{value:"16/9"},{default:n(()=>[c("16:9")]),_:1})]),_:1},8,["modelValue"])]),_:1}),ol,e(u(W),{modelValue:a.config.datas,"onUpdate:modelValue":t[13]||(t[13]=l=>a.config.datas=l),"item-key":"index"},{item:n(({element:l})=>[o("div",null,[e(j,null,{left:n(()=>[o("div",nl,[e($,{src:l.url||u(S)(l.defaultIcon),fit:"contain"},{error:n(()=>[o("div",al,[e(I,null,{default:n(()=>[e(L)]),_:1})])]),_:2},1032,["src"])])]),default:n(()=>[o("div",sl,[o("p",dl,[C(o("input",{class:"cus-input",type:"text","onUpdate:modelValue":g=>l.url=g,placeholder:"请选择图片或输入图片地址"},null,8,il),[[w,l.url]]),o("span",{class:"cus-btn",onClick:g=>T(l)},"选择图片",8,ul)]),o("p",null,[C(o("input",{class:"cus-input",type:"text","onUpdate:modelValue":g=>l.link=g,placeholder:"请选择链接或输入链接地址"},null,8,cl),[[w,l.link]]),o("span",{class:"cus-btn",onClick:g=>D(l)},"选择链接",8,ml)])]),o("span",{class:"close",title:"删除",onClick:g=>E(l)},[e(I,null,{default:n(()=>[e(M)]),_:1})],8,fl)]),_:2},1024)])]),_:1},8,["modelValue"]),o("div",{class:"cus-list-btn",onClick:N},"添加一个")])}}};export{Vl as default};
