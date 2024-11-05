import{f as M,h as t,w as n,l as c,k as o,d as a,e as j,a4 as r,q as m,t as O,y as v,Z as U,X as P,B as q}from"./index-0bWp895S.js";import{am as R}from"./index-Dr5618oB.js";import{u as X}from"./useStyle-BdnKRC7I.js";const Z=o("div",{class:"module-edit-title"},"边距设置",-1),z={class:"slide-span--unit"},F=o("span",null,"px",-1),G=o("div",{class:"label2 wid70"},"左右边距(内)",-1),H=o("div",{class:"label2 wid70"},"左右边距(外)",-1),J=o("div",{class:"module-edit-title"},"组件设置",-1),K=o("div",{class:"module-edit-title"},"显示模式",-1),Q=o("div",{class:"label2 wid70",style:{"margin-left":"40px"}},"下标题颜色",-1),Y=o("div",{class:"diy-edit-line"},null,-1),$=o("div",{class:"tips-box"},"建议尺寸: 使用的图片尺寸/比例相同 (大小建议不超过800k，以免影响加载速度)",-1),ee={class:"left-icon"},le={class:"image-slot"},te=["onClick"],oe={class:"right-icon"},ne={class:"mb10"},se=o("span",{class:"label-text"},"上标题",-1),ae=["onUpdate:modelValue"],de=o("span",{class:"label-text"},"下标题",-1),ie=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],ce=["onClick"],me=["onClick"],be={__name:"config",props:{config:Object},setup(s){const g=s;let{getDefaultImage:B}=R(),{marginTop:p,marginLeft:b,paddingTop:_,paddingLeft:V,paddingBottom:x}=X(g);const I=d=>Bus.emit("selectImage",l=>g.config.bgStyle.bgImageUrl=l.picUrl),T=d=>Bus.emit("selectImage",l=>d.icon=l.picUrl),w=d=>Bus.emit("selectLink",l=>d.link=l,d.link),A=()=>{let d={defaultIcon:"default_picture.png",supTitle:"上标题",subTitle:"下标题",icon:"",link:""};g.config.datas.push(d)},D=async d=>{if(g.config.datas.length===1)return ElMessage({message:"至少保留一个",type:"warning"});if(await q.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"){let k=g.config.datas.indexOf(d);g.config.datas.splice(k,1)}};return(d,l)=>{const k=a("el-slider"),i=a("configItem"),y=a("inputNumber"),C=a("selectColor"),f=a("el-radio"),h=a("el-radio-group"),N=a("Picture"),S=a("el-icon"),W=a("el-image"),L=a("Close"),E=a("listBox");return j(),M("div",null,[Z,t(i,{label:"顶部间距"},{default:n(()=>[t(k,{style:{width:"250px"},modelValue:c(p),"onUpdate:modelValue":l[0]||(l[0]=e=>r(p)?p.value=e:p=e),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),o("span",z,[m(O(c(p)),1),F])]),_:1}),t(i,{label:"上边距",labelWidth:70},{default:n(()=>[t(y,{modelValue:c(_),"onUpdate:modelValue":l[1]||(l[1]=e=>r(_)?_.value=e:_=e)},null,8,["modelValue"]),G,t(y,{modelValue:c(V),"onUpdate:modelValue":l[2]||(l[2]=e=>r(V)?V.value=e:V=e)},null,8,["modelValue"])]),_:1}),t(i,{label:"下边距",labelWidth:70},{default:n(()=>[t(y,{modelValue:c(x),"onUpdate:modelValue":l[3]||(l[3]=e=>r(x)?x.value=e:x=e)},null,8,["modelValue"]),H,t(y,{modelValue:c(b),"onUpdate:modelValue":l[4]||(l[4]=e=>r(b)?b.value=e:b=e)},null,8,["modelValue"])]),_:1}),J,t(i,{label:"背景颜色"},{default:n(()=>[t(C,{modelValue:s.config.bgStyle.bgColor,"onUpdate:modelValue":l[5]||(l[5]=e=>s.config.bgStyle.bgColor=e),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),t(i,{label:"背景图片"},{default:n(()=>[v(o("input",{type:"text",class:"cus-input","onUpdate:modelValue":l[6]||(l[6]=e=>s.config.bgStyle.bgImageUrl=e)},null,512),[[U,s.config.bgStyle.bgImageUrl]]),o("span",{class:"cus-btn",onClick:I},"选择图片"),o("span",{class:"cus-btn",onClick:l[7]||(l[7]=e=>s.config.bgStyle.bgImageUrl="")},"清除")]),_:1}),K,t(i,{label:"上标题颜色",labelWidth:70},{default:n(()=>[t(C,{modelValue:s.config.supStyle.color,"onUpdate:modelValue":l[8]||(l[8]=e=>s.config.supStyle.color=e),resetColor:"#666"},null,8,["modelValue"]),Q,t(C,{modelValue:s.config.subStyle.color,"onUpdate:modelValue":l[9]||(l[9]=e=>s.config.subStyle.color=e),resetColor:"#666"},null,8,["modelValue"])]),_:1}),t(i,{label:"上标题对齐",labelWidth:70},{default:n(()=>[t(h,{modelValue:s.config.supStyle.textAlign,"onUpdate:modelValue":l[10]||(l[10]=e=>s.config.supStyle.textAlign=e)},{default:n(()=>[t(f,{value:"left"},{default:n(()=>[m("居左")]),_:1}),t(f,{value:"center"},{default:n(()=>[m("居中")]),_:1}),t(f,{value:"right"},{default:n(()=>[m("居右")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"下标题对齐",labelWidth:70},{default:n(()=>[t(h,{modelValue:s.config.subStyle.textAlign,"onUpdate:modelValue":l[11]||(l[11]=e=>s.config.subStyle.textAlign=e)},{default:n(()=>[t(f,{value:"left"},{default:n(()=>[m("居左")]),_:1}),t(f,{value:"center"},{default:n(()=>[m("居中")]),_:1}),t(f,{value:"right"},{default:n(()=>[m("居右")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Y,$,t(c(P),{modelValue:s.config.datas,"onUpdate:modelValue":l[12]||(l[12]=e=>s.config.datas=e),"item-key":"index"},{item:n(({element:e,index:ge})=>[o("div",null,[t(E,null,{left:n(()=>[o("div",ee,[t(W,{src:e.icon||c(B)(e.defaultIcon),fit:"contain"},{error:n(()=>[o("div",le,[t(S,null,{default:n(()=>[t(N)]),_:1})])]),_:2},1032,["src"]),o("p",{onClick:u=>T(e)},"选择图片",8,te)])]),default:n(()=>[o("div",oe,[o("p",ne,[se,v(o("input",{class:"cus-input",type:"text","onUpdate:modelValue":u=>e.supTitle=u,placeholder:"请输入上标题"},null,8,ae),[[U,e.supTitle]]),de,v(o("input",{class:"cus-input",type:"text","onUpdate:modelValue":u=>e.subTitle=u,placeholder:"请输入下标题"},null,8,ie),[[U,e.subTitle]])]),o("p",null,[v(o("input",{class:"cus-input",type:"text",disabled:"","onUpdate:modelValue":u=>e.link.name=u,placeholder:"请选择链接"},null,8,ue),[[U,e.link.name]]),o("span",{class:"cus-btn",onClick:u=>w(e)},"选择链接",8,ce)])]),o("span",{class:"close",title:"删除",onClick:u=>D(e)},[t(S,null,{default:n(()=>[t(L)]),_:1})],8,me)]),_:2},1024)])]),_:1},8,["modelValue"]),o("div",{class:"cus-list-btn",onClick:A},"添加一个")])}}};export{be as default};
