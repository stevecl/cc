import{_ as V}from"./index-CEVRakId.js";import{L as N,O as v,g as $,i as a,w as l,d as u,e as C,k as i,Q as k,t as A}from"./index-DlEFUHLL.js";const S={class:"input-number"},h=["value","min","max","step"],y={class:"input-number_input--unit"},D={class:"input-number_icon"},O={class:"input-number_icon--up"},B={class:"input-number_icon--down"},F={__name:"inputNumber",props:{modelValue:String|Number,config:Object},emits:["update:modelValue"],setup(m,{emit:b}){const f={borderRadius:5,min:0,max:50,step:1,unit:"px"},p=b,c=m;N(()=>c.modelValue,s=>{let{max:t,min:o}=n.value,e=s.toString();e=e.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3");const r=/0*([1-9]\d*|0\.\d+)/;e=e.replace(r,"$1"),e.indexOf(".")<0&&e!=""&&(e=parseFloat(e)),e>=t&&(e=t),e<=o&&(e=o),p("update:modelValue",Number(e))});const n=v(()=>({...f,...c.config})),w=v(()=>({borderRadius:n.borderRadius+"px"})),_=s=>{let t=Number(c.modelValue),{max:o,min:e}=n.value;console.log("type",s,t<o,o,e),s=="add"&&t<o&&(t+=n.value.step),s=="sub"&&t>e&&(t-=n.value.step),p("update:modelValue",t)};return(s,t)=>{const o=u("el-col"),e=u("ArrowUp"),r=u("el-icon"),x=u("ArrowDown"),g=u("el-row");return C(),$("div",S,[a(g,null,{default:l(()=>[a(o,{span:20,class:"input-number_input"},{default:l(()=>[i("input",{style:k(w.value),value:m.modelValue,type:"number",min:n.value.min,max:n.value.max,step:n.value.step,onInput:t[0]||(t[0]=d=>p("update:modelValue",d.target.value))},null,44,h),i("span",y,A(n.value.unit),1)]),_:1}),a(o,{span:4},{default:l(()=>[i("div",D,[i("div",O,[a(r,{class:"op-icon el-icon-arrow-up",onClick:t[1]||(t[1]=d=>_("add"))},{default:l(()=>[a(e)]),_:1})]),i("div",B,[a(r,{class:"op-icon el-icon-arrow-down",onClick:t[2]||(t[2]=d=>_("sub"))},{default:l(()=>[a(x)]),_:1})])])]),_:1})]),_:1})])}}},U=V(F,[["__scopeId","data-v-54317b9e"]]);export{U as default};
