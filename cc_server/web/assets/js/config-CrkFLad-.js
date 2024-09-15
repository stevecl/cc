import{f as N,h as t,w as n,k as a,d as i,e as L,l as u,a0 as s,q as m,t as T,y as k,U as x}from"./index-DgSdXyB0.js";import{u as W}from"./useStyle-AF18OWlG.js";const A=a("div",{class:"module-edit-title"},"边距设置",-1),D={class:"slide-span--unit"},j=a("span",null,"px",-1),q=a("div",{class:"label2 wid70"},"左右边距(内)",-1),z=a("div",{class:"label2 wid70"},"左右边距(外)",-1),E=a("div",{class:"module-edit-title"},"组件设置",-1),M=a("div",{class:"module-edit-title"},"文字元素",-1),O=a("div",{class:"label2"},"文字颜色",-1),G={__name:"config",props:{config:Object},setup(o){const v=o;let{fontSize:V,marginTop:g,marginLeft:b,paddingTop:r,paddingLeft:p,paddingBottom:y}=W(v);const I=()=>Bus.emit("selectImage",U=>v.config.bgStyle.bgImageUrl=U.picUrl),w=()=>Bus.emit("selectLink",U=>v.config.link=U);return(U,e)=>{const B=i("el-slider"),d=i("configItem"),f=i("inputNumber"),C=i("selectColor"),c=i("el-radio"),S=i("el-radio-group");return L(),N("div",null,[A,t(d,{label:"顶部间距"},{default:n(()=>[t(B,{style:{width:"250px"},modelValue:u(g),"onUpdate:modelValue":e[0]||(e[0]=l=>s(g)?g.value=l:g=l),min:-100,max:100,step:1,"show-tooltip":!1},null,8,["modelValue"]),a("span",D,[m(T(u(g)),1),j])]),_:1}),t(d,{label:"上边距",labelWidth:70},{default:n(()=>[t(f,{modelValue:u(r),"onUpdate:modelValue":e[1]||(e[1]=l=>s(r)?r.value=l:r=l)},null,8,["modelValue"]),q,t(f,{modelValue:u(p),"onUpdate:modelValue":e[2]||(e[2]=l=>s(p)?p.value=l:p=l)},null,8,["modelValue"])]),_:1}),t(d,{label:"下边距",labelWidth:70},{default:n(()=>[t(f,{modelValue:u(y),"onUpdate:modelValue":e[3]||(e[3]=l=>s(y)?y.value=l:y=l)},null,8,["modelValue"]),z,t(f,{modelValue:u(b),"onUpdate:modelValue":e[4]||(e[4]=l=>s(b)?b.value=l:b=l)},null,8,["modelValue"])]),_:1}),E,t(d,{label:"背景颜色"},{default:n(()=>[t(C,{modelValue:o.config.bgStyle.bgColor,"onUpdate:modelValue":e[5]||(e[5]=l=>o.config.bgStyle.bgColor=l),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),t(d,{label:"背景图片"},{default:n(()=>[k(a("input",{type:"text",class:"cus-input","onUpdate:modelValue":e[6]||(e[6]=l=>o.config.bgStyle.bgImageUrl=l)},null,512),[[x,o.config.bgStyle.bgImageUrl]]),a("span",{class:"cus-btn",onClick:I},"选择图片"),a("span",{class:"cus-btn",onClick:e[7]||(e[7]=l=>o.config.bgStyle.bgImageUrl="")},"清除")]),_:1}),t(d,{label:"标题链接"},{default:n(()=>[k(a("input",{type:"text",class:"cus-input","onUpdate:modelValue":e[8]||(e[8]=l=>o.config.link=l)},null,512),[[x,o.config.link]]),a("span",{class:"cus-btn",onClick:w},"选择链接"),a("span",{class:"cus-btn",onClick:e[9]||(e[9]=l=>o.config.link="")},"清除")]),_:1}),t(d,{label:"标题内容"},{default:n(()=>[k(a("input",{type:"text",class:"cus-input","onUpdate:modelValue":e[10]||(e[10]=l=>o.config.content=l),placeholder:"请输入标题内容"},null,512),[[x,o.config.content]])]),_:1}),M,t(d,{label:"字体大小"},{default:n(()=>[t(f,{modelValue:u(V),"onUpdate:modelValue":e[11]||(e[11]=l=>s(V)?V.value=l:V=l)},null,8,["modelValue"]),O,t(C,{modelValue:o.config.style.color,"onUpdate:modelValue":e[12]||(e[12]=l=>o.config.style.color=l),resetColor:"#333333"},null,8,["modelValue"])]),_:1}),t(d,{label:"文字加粗"},{default:n(()=>[t(S,{modelValue:o.config.style.fontWeight,"onUpdate:modelValue":e[13]||(e[13]=l=>o.config.style.fontWeight=l)},{default:n(()=>[t(c,{value:"normal"},{default:n(()=>[m("正常")]),_:1}),t(c,{value:"bold"},{default:n(()=>[m("加粗")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"文字对齐"},{default:n(()=>[t(S,{modelValue:o.config.style.textAlign,"onUpdate:modelValue":e[14]||(e[14]=l=>o.config.style.textAlign=l)},{default:n(()=>[t(c,{value:"left"},{default:n(()=>[m("居左")]),_:1}),t(c,{value:"center"},{default:n(()=>[m("居中")]),_:1}),t(c,{value:"right"},{default:n(()=>[m("居右")]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}};export{G as default};
