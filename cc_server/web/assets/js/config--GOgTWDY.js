import{f as N,h as o,w as a,l as u,k as t,d as c,e as E,a4 as r,q as L,t as D,y as U,Z as k,n as M,X as j,E as v,B as q}from"./index-0bWp895S.js";import{u as O}from"./useStyle-BdnKRC7I.js";const W=t("div",{class:"module-edit-title"},"边距设置",-1),A={class:"slide-span--unit"},R=t("span",null,"px",-1),X=t("div",{class:"label2 wid70"},"左右边距(内)",-1),Z=t("div",{class:"label2 wid70"},"左右边距(外)",-1),F=t("div",{class:"module-edit-title"},"组件设置",-1),G=t("div",{class:"module-edit-title"},"颜色设置",-1),H=t("div",{class:"label2 wid70"},"图标颜色",-1),J=t("div",{class:"module-edit-title"},"大小设置",-1),K=t("div",{class:"label2 wid70"},"图标大小",-1),P={class:"left-icon",slot:"left"},Q=["onClick"],Y={class:"right-icon"},$={class:"mb10"},ee=t("span",{class:"label-text"},"文字",-1),le=["onUpdate:modelValue"],te=["onUpdate:modelValue"],oe=["onClick"],ne=["onClick"],ie={__name:"config",props:{config:Object},setup(n){const i=n;let{marginTop:f,marginLeft:p,paddingTop:V,paddingLeft:b,paddingBottom:x}=O(i);const _=()=>Bus.emit("selectImage",s=>i.config.bgStyle.bgImageUrl=s.picUrl),B=s=>Bus.emit("selectIcon",l=>s.icon=l),w=s=>Bus.emit("selectLink",l=>s.link=l,s.link),S=()=>{if(i.config.datas.length===5)return v({message:"订单组最多展示5个",type:"warning"});let s={text:"全部订单",icon:"icon-quanbudingdan",link:{name:"",code:""}};i.config.datas.push(s)},h=async s=>{if(i.config.datas.length===1)return v({message:"至少保留一个",type:"warning"});if(await q.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"){let y=i.config.datas.indexOf(s);i.config.datas.splice(y,1)}};return(s,l)=>{const y=c("el-slider"),d=c("configItem"),m=c("inputNumber"),C=c("selectColor"),I=c("Close"),z=c("el-icon"),T=c("listBox");return E(),N("div",null,[W,o(d,{label:"顶部间距"},{default:a(()=>[o(y,{style:{width:"250px"},modelValue:u(f),"onUpdate:modelValue":l[0]||(l[0]=e=>r(f)?f.value=e:f=e),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),t("span",A,[L(D(u(f)),1),R])]),_:1}),o(d,{label:"上边距",labelWidth:70},{default:a(()=>[o(m,{modelValue:u(V),"onUpdate:modelValue":l[1]||(l[1]=e=>r(V)?V.value=e:V=e)},null,8,["modelValue"]),X,o(m,{modelValue:u(b),"onUpdate:modelValue":l[2]||(l[2]=e=>r(b)?b.value=e:b=e)},null,8,["modelValue"])]),_:1}),o(d,{label:"下边距",labelWidth:70},{default:a(()=>[o(m,{modelValue:u(x),"onUpdate:modelValue":l[3]||(l[3]=e=>r(x)?x.value=e:x=e)},null,8,["modelValue"]),Z,o(m,{modelValue:u(p),"onUpdate:modelValue":l[4]||(l[4]=e=>r(p)?p.value=e:p=e)},null,8,["modelValue"])]),_:1}),F,o(d,{label:"背景颜色"},{default:a(()=>[o(C,{modelValue:n.config.bgStyle.bgColor,"onUpdate:modelValue":l[5]||(l[5]=e=>n.config.bgStyle.bgColor=e),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),o(d,{label:"背景图片"},{default:a(()=>[U(t("input",{type:"text",class:"cus-input","onUpdate:modelValue":l[6]||(l[6]=e=>n.config.bgStyle.bgImageUrl=e)},null,512),[[k,n.config.bgStyle.bgImageUrl]]),t("span",{class:"cus-btn",onClick:_},"选择图片"),t("span",{class:"cus-btn",onClick:l[7]||(l[7]=e=>n.config.bgStyle.bgImageUrl="")},"清除")]),_:1}),G,o(d,{label:"文字颜色"},{default:a(()=>[o(C,{modelValue:n.config.style.txtColor,"onUpdate:modelValue":l[8]||(l[8]=e=>n.config.style.txtColor=e),resetColor:"#333333"},null,8,["modelValue"]),H,o(C,{modelValue:n.config.style.iconColor,"onUpdate:modelValue":l[9]||(l[9]=e=>n.config.style.iconColor=e),resetColor:"#333333"},null,8,["modelValue"])]),_:1}),J,o(d,{label:"文字大小"},{default:a(()=>[o(m,{modelValue:n.config.style.txtSize,"onUpdate:modelValue":l[10]||(l[10]=e=>n.config.style.txtSize=e)},null,8,["modelValue"]),K,o(m,{modelValue:n.config.style.iconSize,"onUpdate:modelValue":l[11]||(l[11]=e=>n.config.style.iconSize=e)},null,8,["modelValue"])]),_:1}),o(u(j),{modelValue:n.config.datas,"onUpdate:modelValue":l[12]||(l[12]=e=>n.config.datas=e),"item-key":"index"},{item:a(({element:e})=>[o(T,{class:"cus-list-nav-style"},{left:a(()=>[t("div",P,[t("span",{class:M(["iconfont",e.icon]),style:{"font-size":"26px"}},null,2),t("p",{onClick:g=>B(e)},"选择图标",8,Q)])]),default:a(()=>[t("div",Y,[t("p",$,[ee,U(t("input",{class:"cus-input",type:"text",maxlength:"5","onUpdate:modelValue":g=>e.text=g,placeholder:"留空则不展示"},null,8,le),[[k,e.text]])]),t("p",null,[U(t("input",{class:"cus-input",disabled:"",type:"text","onUpdate:modelValue":g=>e.link.name=g,placeholder:"请选择链接"},null,8,te),[[k,e.link.name]]),t("span",{class:"cus-btn",onClick:g=>w(e)},"选择链接",8,oe)])]),t("span",{class:"close",title:"删除",onClick:g=>h(e)},[o(z,null,{default:a(()=>[o(I)]),_:1})],8,ne)]),_:2},1024)]),_:1},8,["modelValue"]),t("div",{class:"cus-list-btn",onClick:S},"添加一个")])}}};export{ie as default};
