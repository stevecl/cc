import{O as i}from"./index-DlEFUHLL.js";const m={height:"0",fontSize:"14px",margin:"0 0 0 0",padding:"0 0 0 0",borderRadius:"0"};function v(r){const t=i(()=>{var e;return((e=r.config)==null?void 0:e.style)||{...m}}),a=i({get(){return Number(parseInt(t.value.height))},set(e){t.value.height=e?e+"px":0}}),s=i({get(){return Number(parseInt(t.value.fontSize))},set(e){t.value.fontSize=e?e+"px":0}}),u=i({get(){return Number(parseInt(t.value.margin.split(" ")[0]))},set(e){let n=t.value.margin.split(" ");n[0]=e?e+"px":0,t.value.margin=n.join(" ")}}),p=i({get(){return Number(parseInt(t.value.margin.split(" ")[1]))},set(e){let n=t.value.margin.split(" ");n[1]=n[3]=e?e+"px":0,t.value.margin=n.join(" ")}}),l=i({get(){return Number(parseInt(t.value.padding.split(" ")[0]))},set(e){let n=t.value.padding.split(" ");n[0]=e?e+"px":0,t.value.padding=n.join(" ")}}),d=i({get(){return Number(parseInt(t.value.padding.split(" ")[1]))},set(e){let n=t.value.padding.split(" ");n[1]=n[3]=e?e+"px":0,t.value.padding=n.join(" ")}}),g=i({get(){return Number(parseInt(t.value.padding.split(" ")[2]))},set(e){let n=t.value.padding.split(" ");n[2]=e?e+"px":0,t.value.padding=n.join(" ")}}),o=i({get(){return Number(parseInt(t.value.borderRadius))},set(e){t.value.borderRadius=e?e+"%":0}});return{height:a,fontSize:s,marginTop:u,marginLeft:p,paddingTop:l,paddingLeft:d,paddingBottom:g,borderRadius:o}}export{v as u};
