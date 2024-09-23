import{f as M,h as o,w as s,l as d,k as t,d as a,e as S,a0 as r,q as j,t as O,y as U,V as k,U as P,E as W,B as q}from"./index-BdoJKyZb.js";import{u as A}from"./index-wwZ3BqaF.js";import{u as R}from"./useStyle-iCjjRbJZ.js";const z=t("div",{class:"module-edit-title"},"边距设置",-1),F={class:"slide-span--unit"},G=t("span",null,"px",-1),H=t("div",{class:"label2 wid70"},"左右边距(内)",-1),J=t("div",{class:"label2 wid70"},"左右边距(外)",-1),K=t("div",{class:"module-edit-title"},"组件设置",-1),Q=t("div",{class:"diy-edit-line"},null,-1),X=t("div",{class:"tips-box"},"图片宽度：建议750像素",-1),Y={class:"image-slot"},Z={class:"right-icon"},$={class:"mb10"},ee=["onUpdate:modelValue"],le=["onClick"],te=["onUpdate:modelValue"],oe=["onClick"],se=["onClick"],de={__name:"config",props:{config:Object},setup(i){const u=i,{getDefaultImage:v}=A();let{marginTop:m,marginLeft:g,paddingTop:f,paddingLeft:_,paddingBottom:V}=R(u);const y=()=>Bus.emit("selectImage",n=>u.config.style.bgImageUrl=n.picUrl),B=n=>Bus.emit("selectImage",l=>n.url=l.picUrl),h=n=>Bus.emit("selectLink",l=>n.link=l),I=()=>{let n={defaultIcon:"banner.png",url:"",link:""};u.config.datas.push(n)},w=async n=>{if(u.config.datas.length===1)return W({message:"至少保留一个",type:"warning"});if(await q.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"){let x=u.config.datas.indexOf(n);u.config.datas.splice(x,1)}};return(n,l)=>{const x=a("el-slider"),p=a("configItem"),b=a("inputNumber"),T=a("selectColor"),D=a("Picture"),C=a("el-icon"),N=a("el-image"),E=a("Close"),L=a("listBox");return S(),M("div",null,[z,o(p,{label:"顶部间距"},{default:s(()=>[o(x,{style:{width:"250px"},modelValue:d(m),"onUpdate:modelValue":l[0]||(l[0]=e=>r(m)?m.value=e:m=e),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",F,[j(O(d(m)),1),G])]),_:1}),o(p,{label:"上边距",labelWidth:70},{default:s(()=>[o(b,{modelValue:d(f),"onUpdate:modelValue":l[1]||(l[1]=e=>r(f)?f.value=e:f=e)},null,8,["modelValue"]),H,o(b,{modelValue:d(_),"onUpdate:modelValue":l[2]||(l[2]=e=>r(_)?_.value=e:_=e)},null,8,["modelValue"])]),_:1}),o(p,{label:"下边距",labelWidth:70},{default:s(()=>[o(b,{modelValue:d(V),"onUpdate:modelValue":l[3]||(l[3]=e=>r(V)?V.value=e:V=e)},null,8,["modelValue"]),J,o(b,{modelValue:d(g),"onUpdate:modelValue":l[4]||(l[4]=e=>r(g)?g.value=e:g=e)},null,8,["modelValue"])]),_:1}),K,o(p,{label:"背景颜色"},{default:s(()=>[o(T,{modelValue:i.config.style.bgColor,"onUpdate:modelValue":l[5]||(l[5]=e=>i.config.style.bgColor=e),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),o(p,{label:"背景图片"},{default:s(()=>[U(t("input",{type:"text",class:"cus-input","onUpdate:modelValue":l[6]||(l[6]=e=>i.config.style.bgImageUrl=e)},null,512),[[k,i.config.style.bgImageUrl]]),t("span",{class:"cus-btn",onClick:y},"选择图片"),t("span",{class:"cus-btn",onClick:l[7]||(l[7]=e=>i.config.style.bgImageUrl="")},"清除")]),_:1}),Q,X,o(d(P),{modelValue:i.config.datas,"onUpdate:modelValue":l[8]||(l[8]=e=>i.config.datas=e)},{item:s(({element:e})=>[o(L,null,{left:s(()=>[o(N,{src:e.url||d(v)(e.defaultIcon),fit:"contain"},{error:s(()=>[t("div",Y,[o(C,null,{default:s(()=>[o(D)]),_:1})])]),_:2},1032,["src"])]),default:s(()=>[t("div",Z,[t("p",$,[U(t("input",{class:"cus-input",type:"text","onUpdate:modelValue":c=>e.url=c,placeholder:"请选择图片或输入图片地址"},null,8,ee),[[k,e.url]]),t("span",{class:"cus-btn",onClick:c=>B(e)},"选择图片",8,le)]),t("p",null,[U(t("input",{class:"cus-input",type:"text","onUpdate:modelValue":c=>e.link=c,placeholder:"请选择链接或输入链接地址"},null,8,te),[[k,e.link]]),t("span",{class:"cus-btn",onClick:c=>h(e)},"选择链接",8,oe)])]),t("span",{class:"close",title:"删除",onClick:c=>w(e)},[o(C,null,{default:s(()=>[o(E)]),_:1})],8,se)]),_:2},1024)]),_:1},8,["modelValue"]),t("div",{class:"cus-list-btn",onClick:I},"添加一个")])}}};export{de as default};
