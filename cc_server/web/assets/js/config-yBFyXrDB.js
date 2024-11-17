import{f as M,h as o,w as n,l as u,k as t,d,e as j,a4 as g,q as r,t as k,y as C,Z as B,X as O,E as P,B as q}from"./index-0bWp895S.js";import{am as A}from"./index-BJcRcYVb.js";import{u as K}from"./useStyle-BdnKRC7I.js";const X=t("div",{class:"module-edit-title"},"边距设置",-1),Z={class:"slide-span--unit"},F=t("span",null,"px",-1),G=t("div",{class:"label2 wid70"},"左右边距(内)",-1),H=t("div",{class:"label2 wid70"},"左右边距(外)",-1),J=t("div",{class:"module-edit-title"},"组件设置",-1),Q={class:"slide-span--unit"},Y=t("span",null,"%",-1),ee={class:"slide-span--unit"},le=t("span",null,"%",-1),oe=t("div",{class:"tips-box"},"建议尺寸: 80 * 80 (大小建议不超过800k，以免影响加载速度)",-1),te={class:"left-icon"},ne={class:"image-slot"},ae=["onClick"],se={class:"right-icon"},de={class:"mb10"},ie=t("span",{class:"label-text"},"文字",-1),ue=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],me=["onClick"],fe=["onClick"],be={__name:"config",props:{config:Object},setup(a){const m=a,{getDefaultImage:I}=A(),{fontSize:b,marginTop:V,marginLeft:_,paddingTop:x,paddingLeft:v,paddingBottom:U}=K(m),N=()=>Bus.emit("selectImage",s=>m.config.style.bgImageUrl=s.picUrl),R=s=>Bus.emit("selectImage",l=>s.icon=l.picUrl),S=s=>Bus.emit("selectLink",l=>s.link=l,s.link),T=()=>{let s={defaultIcon:"default_btn1.png",icon:"",text:"按钮文字",color:"#666",link:""};m.config.datas.push(s)},D=async s=>{if(m.config.datas.length===1)return P({message:"至少保留一个",type:"warning"});if(await q.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"){let p=m.config.datas.indexOf(s);m.config.datas.splice(p,1)}};return(s,l)=>{const p=d("el-slider"),i=d("configItem"),f=d("inputNumber"),h=d("selectColor"),y=d("el-radio"),E=d("el-radio-group"),L=d("Picture"),w=d("el-icon"),W=d("el-image"),$=d("Close"),z=d("listBox");return j(),M("div",null,[X,o(i,{label:"顶部间距"},{default:n(()=>[o(p,{style:{width:"250px"},modelValue:u(V),"onUpdate:modelValue":l[0]||(l[0]=e=>g(V)?V.value=e:null),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",Z,[r(k(u(V)),1),F])]),_:1}),o(i,{label:"上边距",labelWidth:70},{default:n(()=>[o(f,{modelValue:u(x),"onUpdate:modelValue":l[1]||(l[1]=e=>g(x)?x.value=e:null)},null,8,["modelValue"]),G,o(f,{modelValue:u(v),"onUpdate:modelValue":l[2]||(l[2]=e=>g(v)?v.value=e:null)},null,8,["modelValue"])]),_:1}),o(i,{label:"下边距",labelWidth:70},{default:n(()=>[o(f,{modelValue:u(U),"onUpdate:modelValue":l[3]||(l[3]=e=>g(U)?U.value=e:null)},null,8,["modelValue"]),H,o(f,{modelValue:u(_),"onUpdate:modelValue":l[4]||(l[4]=e=>g(_)?_.value=e:null)},null,8,["modelValue"])]),_:1}),J,o(i,{label:"背景颜色"},{default:n(()=>[o(h,{modelValue:a.config.style.bgColor,"onUpdate:modelValue":l[5]||(l[5]=e=>a.config.style.bgColor=e),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),o(i,{label:"背景图片"},{default:n(()=>[C(t("input",{type:"text",class:"cus-input","onUpdate:modelValue":l[6]||(l[6]=e=>a.config.style.bgImageUrl=e)},null,512),[[B,a.config.style.bgImageUrl]]),t("span",{class:"cus-btn",onClick:N},"选择图片"),t("span",{class:"cus-btn",onClick:l[7]||(l[7]=e=>a.config.style.bgImageUrl="")},"清除")]),_:1}),o(i,{label:"模块圆角"},{default:n(()=>[o(p,{style:{width:"250px"},modelValue:a.config.borderRadius,"onUpdate:modelValue":l[8]||(l[8]=e=>a.config.borderRadius=e),min:0,max:50,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",Q,[r(k(a.config.borderRadius),1),Y])]),_:1}),o(i,{label:"图片圆角"},{default:n(()=>[o(p,{style:{width:"250px"},modelValue:a.config.imgBorderRadius,"onUpdate:modelValue":l[9]||(l[9]=e=>a.config.imgBorderRadius=e),min:0,max:50,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",ee,[r(k(a.config.imgBorderRadius),1),le])]),_:1}),o(i,{label:"字体大小",labelWidth:70},{default:n(()=>[o(f,{modelValue:u(b),"onUpdate:modelValue":l[10]||(l[10]=e=>g(b)?b.value=e:null),config:{min:10,max:20}},null,8,["modelValue"])]),_:1}),o(i,{label:"图片大小",labelWidth:70},{default:n(()=>[o(f,{modelValue:a.config.style.iconSize,"onUpdate:modelValue":l[11]||(l[11]=e=>a.config.style.iconSize=e),config:{min:40,max:80}},null,8,["modelValue"])]),_:1}),o(i,{label:"每行数量"},{default:n(()=>[o(E,{modelValue:a.config.lineNum,"onUpdate:modelValue":l[12]||(l[12]=e=>a.config.lineNum=e)},{default:n(()=>[o(y,{value:3},{default:n(()=>[r("3个")]),_:1}),o(y,{value:4},{default:n(()=>[r("4个")]),_:1}),o(y,{value:5},{default:n(()=>[r("5个")]),_:1})]),_:1},8,["modelValue"])]),_:1}),oe,o(u(O),{modelValue:a.config.datas,"onUpdate:modelValue":l[13]||(l[13]=e=>a.config.datas=e),itemKey:"index"},{item:n(({element:e,index:ge})=>[t("div",null,[o(z,null,{left:n(()=>[t("div",te,[o(W,{src:e.icon||u(I)(e.defaultIcon),fit:"contain"},{error:n(()=>[t("div",ne,[o(w,null,{default:n(()=>[o(L)]),_:1})])]),_:2},1032,["src"]),t("p",{onClick:c=>R(e)},"选择图片",8,ae)])]),default:n(()=>[t("div",se,[t("p",de,[ie,C(t("input",{class:"cus-input",type:"text","onUpdate:modelValue":c=>e.text=c,placeholder:"留空则不展示"},null,8,ue),[[B,e.text]]),o(h,{class:"style1",modelValue:e.color,"onUpdate:modelValue":c=>e.color=c,resetColor:"#666"},null,8,["modelValue","onUpdate:modelValue"])]),t("p",null,[C(t("input",{class:"cus-input",type:"text",disabled:"","onUpdate:modelValue":c=>e.link.name=c,placeholder:"请选择链接"},null,8,ce),[[B,e.link.name]]),t("span",{class:"cus-btn",onClick:c=>S(e)},"选择链接",8,me)])]),t("span",{class:"close",title:"删除",onClick:c=>D(e)},[o(w,null,{default:n(()=>[o($)]),_:1})],8,fe)]),_:2},1024)])]),_:1},8,["modelValue"]),t("div",{class:"cus-list-btn",onClick:T},"添加一个")])}}};export{be as default};
