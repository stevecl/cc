import{S as u,f as p,h as m,k as i,d as V,e as _}from"./index-DgSdXyB0.js";const f={class:"diy-edit-colorpick"},C={__name:"selectColor",props:{modelValue:String,resetColor:String},emits:["update:modelValue"],setup(a,{emit:r}){const e=r,o=a,t=u({get(){return o.modelValue},set(l){e("update:modelValue",l)}}),n=()=>{e("update:modelValue",o.resetColor||"#fff")};return(l,s)=>{const c=V("el-color-picker");return _(),p("div",f,[m(c,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=d=>t.value=d),"show-alpha":""},null,8,["modelValue"]),i("span",{class:"diy-button",onClick:n},"重置")])}}};export{C as default};
