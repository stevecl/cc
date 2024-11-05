import{f as P,h as t,w as n,l as u,k as o,d,e as W,a4 as r,q as c,t as k,y,Z as h,X as q,E as A,B as X}from"./index-0bWp895S.js";import{am as Z}from"./index-MBh0lVgE.js";import{u as z}from"./useStyle-BdnKRC7I.js";const F=o("div",{class:"module-edit-title"},"边距设置",-1),G={class:"slide-span--unit"},H=o("span",null,"px",-1),J=o("div",{class:"label2 wid70"},"左右边距(内)",-1),K=o("div",{class:"label2 wid70"},"左右边距(外)",-1),Q=o("div",{class:"module-edit-title"},"组件设置",-1),Y={class:"slide-span--unit"},ll=o("span",null,"%",-1),el={class:"slide-span--unit"},tl=o("span",null,"%",-1),ol=o("div",{class:"module-edit-title"},"分页器设置",-1),nl=o("div",{class:"diy-edit-line"},null,-1),al={class:"left-icon"},sl={class:"image-slot"},dl={class:"right-icon"},il={class:"mb10"},ul=["onUpdate:modelValue"],cl=["onClick"],ml=["onUpdate:modelValue"],fl=["onClick"],gl=["onClick"],_l={__name:"config",props:{config:Object},setup(a){const{getDefaultImage:S}=Z(),m=a,R=s=>{m.config.datas.forEach(e=>{e.defaultIcon=s==="1/1"?"default_picture.png":"default_banner.png"})},{marginTop:V,marginLeft:v,paddingTop:x,paddingLeft:U,paddingBottom:C,borderRadius:_}=z(m),T=()=>Bus.emit("selectImage",s=>m.config.bgStyle.bgImageUrl=s.picUrl),D=s=>Bus.emit("selectImage",e=>s.url=e.picUrl),E=s=>Bus.emit("selectLink",e=>s.link=e,s.link),N=()=>{let s={defaultIcon:m.config.imgRatio==="1/1"?"default_picture":"default_banner.png",url:"",link:""};m.config.datas.push(s)},L=async s=>{if(m.config.datas.length===1)return A({message:"至少保留一个",type:"warning"});if(await X.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"){let p=m.config.datas.indexOf(s);m.config.datas.splice(p,1)}};return(s,e)=>{const p=d("el-slider"),i=d("configItem"),b=d("inputNumber"),w=d("selectColor"),f=d("el-radio"),B=d("el-radio-group"),$=d("Picture"),I=d("el-icon"),M=d("el-image"),j=d("Close"),O=d("listBox");return W(),P("div",null,[F,t(i,{label:"顶部间距"},{default:n(()=>[t(p,{style:{width:"250px"},modelValue:u(V),"onUpdate:modelValue":e[0]||(e[0]=l=>r(V)?V.value=l:null),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",G,[c(k(u(V)),1),H])]),_:1}),t(i,{label:"上边距",labelWidth:70},{default:n(()=>[t(b,{modelValue:u(x),"onUpdate:modelValue":e[1]||(e[1]=l=>r(x)?x.value=l:null)},null,8,["modelValue"]),J,t(b,{modelValue:u(U),"onUpdate:modelValue":e[2]||(e[2]=l=>r(U)?U.value=l:null)},null,8,["modelValue"])]),_:1}),t(i,{label:"下边距",labelWidth:70},{default:n(()=>[t(b,{modelValue:u(C),"onUpdate:modelValue":e[3]||(e[3]=l=>r(C)?C.value=l:null)},null,8,["modelValue"]),K,t(b,{modelValue:u(v),"onUpdate:modelValue":e[4]||(e[4]=l=>r(v)?v.value=l:null)},null,8,["modelValue"])]),_:1}),Q,t(i,{label:"背景颜色"},{default:n(()=>[t(w,{modelValue:a.config.bgStyle.bgColor,"onUpdate:modelValue":e[5]||(e[5]=l=>a.config.bgStyle.bgColor=l),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),t(i,{label:"背景图片"},{default:n(()=>[y(o("input",{type:"text",class:"cus-input","onUpdate:modelValue":e[6]||(e[6]=l=>a.config.bgStyle.bgImageUrl=l)},null,512),[[h,a.config.bgStyle.bgImageUrl]]),o("span",{class:"cus-btn",onClick:T},"选择图片"),o("span",{class:"cus-btn",onClick:e[7]||(e[7]=l=>a.config.bgStyle.bgImageUrl="")},"清除")]),_:1}),t(i,{label:"组件圆角"},{default:n(()=>[t(p,{style:{width:"250px"},modelValue:u(_),"onUpdate:modelValue":e[8]||(e[8]=l=>r(_)?_.value=l:null),min:0,max:50,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",Y,[c(k(u(_)),1),ll])]),_:1}),t(i,{label:"图片圆角"},{default:n(()=>[t(p,{style:{width:"250px"},modelValue:a.config.imgRadius,"onUpdate:modelValue":e[9]||(e[9]=l=>a.config.imgRadius=l),min:0,max:50,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",el,[c(k(a.config.imgRadius),1),tl])]),_:1}),ol,t(i,{label:"形状"},{default:n(()=>[t(B,{modelValue:a.config.indicator.show,"onUpdate:modelValue":e[10]||(e[10]=l=>a.config.indicator.show=l)},{default:n(()=>[t(f,{value:!0},{default:n(()=>[c("显示")]),_:1}),t(f,{value:!1},{default:n(()=>[c("隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"颜色"},{default:n(()=>[t(w,{modelValue:a.config.indicator.color,"onUpdate:modelValue":e[11]||(e[11]=l=>a.config.indicator.color=l),resetColor:"#ffffff"},null,8,["modelValue"])]),_:1}),t(i,{label:"图片比列"},{default:n(()=>[t(B,{modelValue:a.config.imgRatio,"onUpdate:modelValue":e[12]||(e[12]=l=>a.config.imgRatio=l),onChange:R},{default:n(()=>[t(f,{value:"1/1"},{default:n(()=>[c("1:1")]),_:1}),t(f,{value:"3/4"},{default:n(()=>[c("3:4")]),_:1}),t(f,{value:"4/3"},{default:n(()=>[c("4:3")]),_:1}),t(f,{value:"16/9"},{default:n(()=>[c("16:9")]),_:1})]),_:1},8,["modelValue"])]),_:1}),nl,t(u(q),{modelValue:a.config.datas,"onUpdate:modelValue":e[13]||(e[13]=l=>a.config.datas=l),"item-key":"index"},{item:n(({element:l})=>[o("div",null,[t(O,null,{left:n(()=>[o("div",al,[t(M,{src:l.url||u(S)(l.defaultIcon),fit:"contain"},{error:n(()=>[o("div",sl,[t(I,null,{default:n(()=>[t($)]),_:1})])]),_:2},1032,["src"])])]),default:n(()=>[o("div",dl,[o("p",il,[y(o("input",{class:"cus-input",type:"text","onUpdate:modelValue":g=>l.url=g,placeholder:"请选择图片"},null,8,ul),[[h,l.url]]),o("span",{class:"cus-btn",onClick:g=>D(l)},"选择图片",8,cl)]),o("p",null,[y(o("input",{class:"cus-input",type:"text",disabled:"","onUpdate:modelValue":g=>l.link.name=g,placeholder:"请选择链接"},null,8,ml),[[h,l.link.name]]),o("span",{class:"cus-btn",onClick:g=>E(l)},"选择链接",8,fl)])]),o("span",{class:"close",title:"删除",onClick:g=>L(l)},[t(I,null,{default:n(()=>[t(j)]),_:1})],8,gl)]),_:2},1024)])]),_:1},8,["modelValue"]),o("div",{class:"cus-list-btn",onClick:N},"添加一个")])}}};export{_l as default};
