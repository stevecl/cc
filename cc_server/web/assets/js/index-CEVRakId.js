const __vite__fileDeps=["./listHome-uaEt_O6m.js","./index-DlEFUHLL.js","../css/index-DO2swxSY.css","./pageTitle-PNUMLZpy.js","../css/pageTitle-BnCSENNs.css","./moduleList-CdPcutur.js","../css/moduleList-N2Sp48Zs.css","../css/listHome-BUvubmyi.css","./listLife-J4enwXxl.js","../css/listLife-BeEpXOgu.css","./listPerson-DqaXwR-K.js","../css/listPerson-Bk9w8cCU.css","./listCustom-CuQJkvEN.js","../css/listCustom-BaJuLOAx.css","./listTabbar-tqJoTnbX.js","../css/listTabbar-B6LmergY.css","./listAdvert-i7S_U51c.js","../css/listAdvert-CI8tCdbm.css","./index-neN0_bCx.js","../css/index-BBWGDkZs.css","./index-S2eHQ6ec.js","./index-DUk9-qTT.js","../css/index-w2BgrEEm.css","./index-BYGvW5Z0.js","./useDefaultSource-DisbG1SY.js","../css/index-DPNRKBUo.css","./index-Dz5dyDHv.js","../css/index-Dq_vK8k9.css","./index-oQT_LgcF.js","../css/index-CHv_NoNb.css","./index-CeayCP4L.js","./useStyle-U28ieFMf.js","../css/index-BjC9RI0v.css","./index-BL4Gi6Ay.js","../css/index-Bv3afxri.css","./index-BSeql8Fz.js","../css/index-fydtjVaD.css","./index-Dt3KjZeT.js","../css/index-CGPXDU1V.css","./index-C0cfqwz5.js","../css/index-c7b1NIyt.css","./index-k8X7mbYo.js","../css/index-CDn0lyfS.css","./config-xdDxn9Bn.js","./config-6YGgnb0H.js","../css/config-B0-VKSr8.css","./config-ByG0Uwj2.js","./config-P2iYmjJ8.js","../css/config-SwM3Xjr8.css","./config-B-YTndX6.js","./config-ywY8Uxsp.js","../css/config-D7a_4Lqf.css","./config-R_XREdVY.js","./config-DQI2WvVy.js","./config-DW-z_NUW.js","../css/config-BMgVt8ow.css","./config-DL81F_GC.js","./config-Dp7eswgc.js","../css/config-EpFTntW0.css","./configItem-CCQ6uhH_.js","../css/configItem-HW9DFBQu.css","./inputNumber-BW8_VLzH.js","../css/inputNumber-CQcF0DzH.css","./listBox-DSej_5dD.js","../css/listBox-CRf6xi0I.css","./selectColor-Buk9YeVG.js","../css/selectColor-DOpjerL3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as createRouter,a as createWebHashHistory,u as useRoute,b as useRouter,r as ref,o as onMounted,d as resolveComponent,e as openBlock,f as createBlock,w as withCtx,g as createElementBlock,F as Fragment,h as renderList,i as createVNode,j as resolveDynamicComponent,k as createBaseVNode,t as toDisplayString,n as normalizeClass,l as axios,E as ElMessage,m as reactive,p as createTextVNode,q as pushScopeId,s as popScopeId,v as resolveDirective,x as withDirectives,y as createCommentVNode,z as vShow,A as ElMessageBox,B as unref,C as defineStore,D as defineAsyncComponent,G as createPinia,H as createApp,I as ElementPlusIconsVue,J as installer,K as ColorPicker}from"./index-DlEFUHLL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const scriptRel="modulepreload",assetsURL=function(e,o){return new URL(e,o).href},seen={},__vitePreload=function(o,t,a){let n=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(t.map(l=>{if(l=assetsURL(l,a),l in seen)return;seen[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!a)for(let p=s.length-1;p>=0;p--){const u=s[p];if(u.href===l&&(!d||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${m}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":scriptRel,d||(v.as="script",v.crossOrigin=""),v.href=l,r&&v.setAttribute("nonce",r),document.head.appendChild(v),d)return new Promise((p,u)=>{v.addEventListener("load",p),v.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}return n.then(()=>o()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},routes=[{path:"/",name:"main",redirect:"home",component:()=>__vitePreload(()=>import("./listHome-uaEt_O6m.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)},{path:"/home",name:"home",component:()=>__vitePreload(()=>import("./listHome-uaEt_O6m.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)},{path:"/hlife",name:"hlife",component:()=>__vitePreload(()=>import("./listLife-J4enwXxl.js"),__vite__mapDeps([8,1,2,3,4,5,6,9]),import.meta.url)},{path:"/person",name:"person",component:()=>__vitePreload(()=>import("./listPerson-DqaXwR-K.js"),__vite__mapDeps([10,1,2,3,4,5,6,11]),import.meta.url)},{path:"/custom",name:"custom",component:()=>__vitePreload(()=>import("./listCustom-CuQJkvEN.js"),__vite__mapDeps([12,1,2,3,4,5,6,13]),import.meta.url)},{path:"/tabbar",name:"tabbar",component:()=>__vitePreload(()=>import("./listTabbar-tqJoTnbX.js"),__vite__mapDeps([14,1,2,3,4,5,6,15]),import.meta.url)},{path:"/advert",name:"advert",component:()=>__vitePreload(()=>import("./listAdvert-i7S_U51c.js"),__vite__mapDeps([16,1,2,3,4,5,6,17]),import.meta.url)},{path:"/edit",name:"edit",component:()=>__vitePreload(()=>import("./index-neN0_bCx.js"),__vite__mapDeps([18,1,2,3,4,19]),import.meta.url)}],router=createRouter({history:createWebHashHistory(),routes}),_export_sfc=(e,o)=>{const t=e.__vccOpts||e;for(const[a,n]of o)t[a]=n;return t},_sfc_main$c={__name:"index",setup(e){const o=[{name:"首页",icon:"House",pathName:"home"},{name:"惠生活",icon:"House",pathName:"hlife"},{name:"个人中心",icon:"User",pathName:"person"},{name:"自定义页面",icon:"Tickets",pathName:"custom"},{name:"底部菜单",icon:"setting",pathName:"tabbar"},{name:"启动广告",icon:"setting",pathName:"advert"}],t=useRoute(),a=useRouter(),n=ref(""),s=()=>{setTimeout(()=>{console.log(888,t.name),n.value=t.name},1e3)},i=()=>{},r=()=>{},l=d=>{console.log("click",d.index,t),a.push(d.index)};return onMounted(async()=>{s()}),(d,m)=>{const _=resolveComponent("el-icon"),v=resolveComponent("el-menu-item"),p=resolveComponent("el-menu");return openBlock(),createBlock(p,{"default-active":n.value,class:"el-menu-vertical",onOpen:i,onClose:r},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(o,(u,y)=>createVNode(v,{key:y,index:u.pathName,onClick:l},{default:withCtx(()=>[createVNode(_,null,{default:withCtx(()=>[(openBlock(),createBlock(resolveDynamicComponent(u.icon)))]),_:2},1024),createBaseVNode("span",null,toDisplayString(u.name),1)]),_:2},1032,["index"])),64))]),_:1},8,["default-active"])}}},slideBar=_export_sfc(_sfc_main$c,[["__scopeId","data-v-062d81a7"]]),_hoisted_1$9={class:"flex layout"},_hoisted_2$8={class:"layout_left"},_hoisted_3$6={class:"flex-1 layout_right"},_sfc_main$b={__name:"index",setup(e){return(o,t)=>{const a=resolveComponent("router-view");return openBlock(),createElementBlock("div",_hoisted_1$9,[createBaseVNode("div",_hoisted_2$8,[createVNode(slideBar)]),createBaseVNode("div",_hoisted_3$6,[createVNode(a)])])}}},layoutView=_export_sfc(_sfc_main$b,[["__scopeId","data-v-26d556b2"]]),_hoisted_1$8={class:"custom-headers-style"},_sfc_main$a={__name:"category",setup(e){const o=ref("local"),t=a=>{o.value!==a&&(o.value=a)};return(a,n)=>(openBlock(),createElementBlock("div",_hoisted_1$8,[createBaseVNode("span",{class:normalizeClass({active:o.value==="local"}),onClick:n[0]||(n[0]=s=>t("local"))},"图片公库",2)]))}},category=_export_sfc(_sfc_main$a,[["__scopeId","data-v-dc426aa8"]]),getUrlParams=(e=!0)=>{let o=e?location.hash:location.search;o=decodeURIComponent(o);let t={};if(o.indexOf("?")!=-1){let n=o.substr(o.indexOf("?")+1).split("&");for(let s=0;s<n.length;s++)t[n[s].split("=")[0]]=unescape(n[s].split("=")[1])}return t},getCookies=e=>{var o=document.cookie.split("; "),t={};return o.forEach(function(a){var n=a.split("="),s=decodeURIComponent(n[0]),i=decodeURIComponent(n[1]);t[s]=i}),t[e]||null},deepClone=e=>{let o=Array.isArray(e),t=Object.prototype.toString.call(e)==="[object Object]";if(o){let a=[];for(let n=0;n<e.length;n++)a[n]=deepClone(e[n]);return a}else if(t){let a={};for(let n in e)a[n]=deepClone(e[n]);return a}return e};function tansParams(e){let o="";for(const n of Object.keys(e)){const s=e[n];var t=encodeURIComponent(n)+"=";if(s!==null&&typeof s<"u")if(typeof s=="object"){for(const i of Object.keys(s))if(s[i]!==null&&typeof s[i]<"u"){let r=n+"["+i+"]";var a=encodeURIComponent(r)+"=";o+=a+encodeURIComponent(s[i])+"&"}}else o+=t+encodeURIComponent(s)+"&"}return o}const sessionCache={set(e,o){sessionStorage&&e!=null&&o!=null&&sessionStorage.setItem(e,o)},get(e){return!sessionStorage||e==null?null:sessionStorage.getItem(e)},setJSON(e,o){o!=null&&this.set(e,JSON.stringify(o))},getJSON(e){const o=this.get(e);if(o!=null)return JSON.parse(o)},remove(e){sessionStorage.removeItem(e)}},localCache={set(e,o){localStorage&&e!=null&&o!=null&&localStorage.setItem(e,o)},get(e){return!localStorage||e==null?null:localStorage.getItem(e)},setJSON(e,o){o!=null&&this.set(e,JSON.stringify(o))},getJSON(e){const o=this.get(e);if(o!=null)return JSON.parse(o)},remove(e){localStorage.removeItem(e)}},cache={session:sessionCache,local:localCache},slConfig={domain:"http://192.168.50.15",baseURL:"/api"};axios.defaults.headers["Content-Type"]="application/json;charset=utf-8";console.log("222222222",!1);const service=axios.create({baseURL:"",timeout:1e5});service.interceptors.request.use(e=>{const o=(e.headers||{}).repeatSubmit===!1;if(e.headers.token=localStorage.getItem("token"),e.method==="get"&&e.params){let t=e.url+"?"+tansParams(e.params);t=t.slice(0,-1),e.params={},e.url=t}if(!o&&(e.method==="post"||e.method==="put")){const t={url:e.url,data:typeof e.data=="object"?JSON.stringify(e.data):e.data,time:new Date().getTime()},a=cache.session.getJSON("sessionObj");if(a==null||a==="")cache.session.setJSON("sessionObj",t);else{const n=a.url,s=a.data,i=a.time;if(s===t.data&&t.time-i<1e3&&n===t.url)return Promise.reject(new Error("数据正在处理，请勿重复提交"));cache.session.setJSON("sessionObj",t)}}return e},e=>{console.log(e),Promise.reject(e)});service.interceptors.response.use(e=>{let{code:o=200,message:t,result:a}=e.data;return o!==200?(ElMessage({message:t,type:"error"}),Promise.reject(t)):a},e=>{let{message:o,response:t}=e;return ElMessage({message:t.data.message,type:"error"}),Promise.reject(e)});function getImageGroupList(){return service({url:"/custom/picCategory/getPageList",method:"post",data:{pageNum:1,pageSize:999,state:1}})}function getDiyImage(e){return service({url:"/custom/picList/getPageList",method:"post",data:e})}function deleteDiyImage(e){return service({url:"/custom/picList/del",method:"post",data:e})}const _withScopeId$2=e=>(pushScopeId("data-v-fbdcaee4"),e=e(),popScopeId(),e),_hoisted_1$7={class:"wrap"},_hoisted_2$7=_withScopeId$2(()=>createBaseVNode("span",{class:"ml10 name"},"添加分组",-1)),_hoisted_3$5=_withScopeId$2(()=>createBaseVNode("span",{class:"flex-1 name"},"全部",-1)),_hoisted_4$3=[_hoisted_3$5],_hoisted_5$2=["onClick"],_hoisted_6$2={class:"flex-1 text-overflow name"},_hoisted_7$1=["onClick"],_hoisted_8$1=["onClick"],_hoisted_9$1={class:"dialog-footer"},_sfc_main$9={__name:"group",props:{currentGroup:String},emits:["select"],setup(e,{emit:o}){const t=o,a=ref([]),n=ref(!1),s=ref(null),i=reactive({picCategoryId:"",picCategoryName:""}),r=async()=>{let{dataList:p}=await getImageGroupList();console.log("dataList",p),a.value=p},l=()=>{i.picCategoryId="",i.picCategoryName="",v()},d=p=>{s.value=p,i.picCategoryId=p.picCategoryId,i.picCategoryName=p.picCategoryName,v(),console.log("edit:",p)},m=async p=>{await deleteImageGroup(p.id),v(!1),r()},_=async()=>{if(!i.picCategoryName)return ElMessage({message:"分组名称不能为空",type:"warning"});i.picCategoryId?await editImageGroup({...s.value,picCategoryName:i.picCategoryName}):await addImageGroup(i.picCategoryName),v(!1),r(),console.log("submit",i.picCategoryName)},v=(p=!0)=>{n.value=p};return onMounted(async()=>{r()}),(p,u)=>{const y=resolveComponent("Plus"),C=resolveComponent("el-icon"),c=resolveComponent("el-input"),f=resolveComponent("el-form-item"),k=resolveComponent("el-button"),V=resolveComponent("el-dialog");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",_hoisted_1$7,[createBaseVNode("div",{class:"group-item add",onClick:l},[createVNode(C,null,{default:withCtx(()=>[createVNode(y)]),_:1}),_hoisted_2$7]),createBaseVNode("div",{class:normalizeClass(["group-item",{active:!e.currentGroup}]),onClick:u[0]||(u[0]=g=>t("select",""))},_hoisted_4$3,2),(openBlock(!0),createElementBlock(Fragment,null,renderList(a.value,(g,x)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["group-item",{active:e.currentGroup===g.picCategoryId}]),key:x,onClick:h=>t("select",g.picCategoryId)},[createBaseVNode("span",_hoisted_6$2,toDisplayString(g.picCategoryName),1),createBaseVNode("span",{title:"编辑",class:"iconfont icon-edit1 edit",onClick:h=>d(g)},null,8,_hoisted_7$1),createBaseVNode("span",{title:"删除",class:"iconfont icon-delete1 delete",onClick:h=>m(g)},null,8,_hoisted_8$1)],10,_hoisted_5$2))),128))]),createVNode(V,{modelValue:n.value,"onUpdate:modelValue":u[3]||(u[3]=g=>n.value=g),title:i.picCategoryId?"编辑分组":"添加分组",width:"400","append-to-body":""},{footer:withCtx(()=>[createBaseVNode("span",_hoisted_9$1,[createVNode(k,{onClick:u[2]||(u[2]=g=>n.value=!1)},{default:withCtx(()=>[createTextVNode("取消")]),_:1}),createVNode(k,{type:"primary",onClick:_},{default:withCtx(()=>[createTextVNode("确定")]),_:1})])]),default:withCtx(()=>[createVNode(f,{label:"分组名称"},{default:withCtx(()=>[createVNode(c,{modelValue:i.picCategoryName,"onUpdate:modelValue":u[1]||(u[1]=g=>i.picCategoryName=g),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","title"])],64)}}},groupVue=_export_sfc(_sfc_main$9,[["__scopeId","data-v-fbdcaee4"]]);async function uploadFile(file,callback){var qiniuUrl=`${slConfig.baseURL}/common/ossUpload`,errCodeMsg={code400:"报文构造不正确或者没有完整发送。",code401:"上传凭证无效。",code403:"上传文件格式不正确。",code413:"上传文件过大。",code579:"回调业务服务器失败。",code599:"服务端操作失败。",code614:"目标资源已存在。"};""+getCookies("Admin-Token");var form=new FormData;form.append("file",file);var xhr=new XMLHttpRequest;xhr.open("POST",qiniuUrl,!0),xhr.setRequestHeader("Authorization","Bearer "+getCookies("Admin-Token")),xhr.upload.onprogress=function(e){},xhr.ontimeout&&(xhr.ontimeout=function(e){}),xhr.onreadystatechange=function(){if(xhr.readyState==4)if(xhr.status==200){var resultData=xhr.responseText;console.log("resultData",resultData.fileName);try{resultData=eval("("+xhr.responseText+")")}catch(e){resultData={status:0,msg:"上传失败，返回数据异常"}}resultData.content&&resultData.content.suffix&&(resultData.content.suffix=resultData.content.suffix.replace(".","")),callback(resultData)}else{var resultData={status:0,msg:errCodeMsg["code"+xhr.status]?errCodeMsg["code"+xhr.status]:xhr.statusText};callback(resultData)}},xhr.send(form)}const _hoisted_1$6={class:"diy-select-image-box"},_hoisted_2$6={class:"image-search-box"},_sfc_main$8={__name:"search",props:{query:Object,selectImgList:Array},emits:["search","update","delete"],setup(e,{emit:o}){const t=ref(null),a=o,n=e,s=i=>{let r=i.target.files;for(var l=0;l<r.length;l++)uploadFile(r[l],async function(d){d.code==200?(await addDiyImage(d.url,d.fileName,n.query.groupId),a("update"),console.log(d.url)):ElMessage({message:"图片上传失败,请重试",type:"error"})})};return(i,r)=>{const l=resolveComponent("el-date-picker"),d=resolveComponent("el-input"),m=resolveComponent("el-button");return openBlock(),createElementBlock("div",_hoisted_1$6,[createBaseVNode("div",_hoisted_2$6,[createVNode(l,{modelValue:e.query.startDate,"onUpdate:modelValue":r[0]||(r[0]=_=>e.query.startDate=_),style:{width:"140px"},type:"date","value-format":"YYYY-MM-DD",placeholder:"选择日期"},null,8,["modelValue"]),createTextVNode(" - "),createVNode(l,{modelValue:e.query.endDate,"onUpdate:modelValue":r[1]||(r[1]=_=>e.query.endDate=_),style:{width:"140px","margin-right":"10px"},type:"date","value-format":"YYYY-MM-DD",placeholder:"选择日期"},null,8,["modelValue"]),createVNode(d,{modelValue:e.query.nameCn,"onUpdate:modelValue":r[2]||(r[2]=_=>e.query.nameCn=_),placeholder:"请输入图片名称",style:{width:"120px","margin-right":"20px"}},null,8,["modelValue"]),createVNode(m,{type:"primary",onClick:r[3]||(r[3]=_=>a("search"))},{default:withCtx(()=>[createTextVNode("查询")]),_:1}),createVNode(m,{class:"fr",type:"primary",onClick:r[4]||(r[4]=_=>t.value.click())},{default:withCtx(()=>[createTextVNode("上传图片")]),_:1}),createVNode(m,{class:"fr",type:"danger",onClick:r[5]||(r[5]=_=>a("deleteSelected")),disabled:!e.selectImgList.length},{default:withCtx(()=>[createTextVNode("删除")]),_:1},8,["disabled"]),createBaseVNode("input",{type:"file",style:{display:"none"},onChange:s,ref_key:"upload",ref:t,multiple:"true",accept:"image/jpg,image/jpeg,image/png,image/gif,image/bmp"},null,544)])])}}},_withScopeId$1=e=>(pushScopeId("data-v-cb24a23c"),e=e(),popScopeId(),e),_hoisted_1$5={class:"image-content-box"},_hoisted_2$5={class:"custom-scroll-bar left-slide"},_hoisted_3$4={class:"right-box"},_hoisted_4$2={key:0,class:"gray",style:{margin:"180px 0 0 300px"}},_hoisted_5$1=["onClick"],_hoisted_6$1=["src"],_hoisted_7={class:"text-overflow image-title"},_hoisted_8={class:"delete-box"},_hoisted_9=["onClick"],_hoisted_10={class:"image-mask"},_hoisted_11=_withScopeId$1(()=>createBaseVNode("span",{class:"iconfont icon-xuanzhong"},null,-1)),_hoisted_12=[_hoisted_11],_hoisted_13={class:"dialog-footer"},_sfc_main$7={__name:"index",setup(e){const o=ref(!1),t=ref({nameCn:"",startDate:"",endDate:"",picCategoryId:"",pageNum:1,pageSize:8}),a=reactive({selectType:"local",isMultiple:!1,callback:null}),n=ref(!1),s=ref(999),i=ref([]),r=ref([]),l=(c,f)=>{a.callback=c,a.isMultiple=f,r.value=[],o.value=!0},d=()=>{t.value.pageNum=1,u()},m=c=>{t.value.picCategoryId=c,t.value.pageNum=1,u()},_=c=>{let f=r.value.indexOf(c);f>-1?r.value.splice(f,1):r.value.push(c)},v=async c=>{c=c||r.value.join(","),await ElMessageBox.confirm("此操作将永久删除图片, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"&&(await deleteDiyImage(c),u())},p=()=>{let c=r.value.map(f=>i.value.filter(k=>k.picId===f)[0]);a.isMultiple?typeof a.callback=="function"&&a.callback(c):typeof a.callback=="function"&&a.callback(c[0]),C()},u=async()=>{n.value=!0;let{dataList:c}=await getDiyImage(t.value);n.value=!1,i.value=c,r.value=[]},y=c=>{t.value.pageNum=c,u()},C=()=>{o.value=!1};return onMounted(()=>{Bus.on("selectImage",(c,f=!1)=>l(c,f)),u()}),(c,f)=>{const k=resolveComponent("el-pagination"),V=resolveComponent("el-button"),g=resolveComponent("el-dialog"),x=resolveDirective("loading");return openBlock(),createBlock(g,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=h=>o.value=h),class:"diy-select-image-wrapper",title:"","before-close":C},{header:withCtx(()=>[createVNode(category)]),footer:withCtx(()=>[createBaseVNode("span",_hoisted_13,[createVNode(V,{plain:"",onClick:C},{default:withCtx(()=>[createTextVNode("取消")]),_:1}),createVNode(V,{type:"primary",onClick:p,disabled:!r.value.length},{default:withCtx(()=>[createTextVNode("确定")]),_:1},8,["disabled"])])]),default:withCtx(()=>[createVNode(_sfc_main$8,{query:t.value,selectImgList:r.value,onSearch:d,onUpdate:u,onDeleteSelected:v},null,8,["query","selectImgList"]),createBaseVNode("div",_hoisted_1$5,[createBaseVNode("div",_hoisted_2$5,[createVNode(groupVue,{currentGroup:t.value.picCategoryId,onSelect:m},null,8,["currentGroup"])]),withDirectives((openBlock(),createElementBlock("div",_hoisted_3$4,[i.value.length?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_4$2,"暂无图片")),(openBlock(!0),createElementBlock(Fragment,null,renderList(i.value,(h,b)=>(openBlock(),createElementBlock("div",{class:"right-image-item",key:b,onClick:E=>_(h.picId)},[createBaseVNode("img",{src:h.picUrl,alt:""},null,8,_hoisted_6$1),createBaseVNode("div",_hoisted_7,toDisplayString(h.picName),1),createBaseVNode("div",_hoisted_8,[createBaseVNode("span",{class:"iconfont icon-shanchu2",onClick:E=>v(h.picId)},null,8,_hoisted_9)]),withDirectives(createBaseVNode("div",_hoisted_10,_hoisted_12,512),[[vShow,r.value.includes(h.picId)]])],8,_hoisted_5$1))),128))])),[[x,n.value]])]),s.value?(openBlock(),createBlock(k,{key:0,style:{"margin-left":"400px"},background:"",onCurrentChange:y,"current-page":t.value.pageNum,layout:"prev, pager, next","page-size":t.value.pageSize,total:s.value},null,8,["current-page","page-size","total"])):createCommentVNode("",!0)]),_:1},8,["modelValue"])}}},selectImage=_export_sfc(_sfc_main$7,[["__scopeId","data-v-cb24a23c"]]),list=["icon-a-lujing13","icon-a-lujing11","icon-a-lujing12","icon-a-memo-circle-check1","icon-_01_align_center","icon-interrogation","icon-a-fenzu6","icon-marker","icon-zhuye","icon-iconfontdizhi","icon-weizhi","icon-dingdanzhuangtai","icon-cha","icon-zaixiankefu","icon-appreciate_2","icon-icon-test1","icon-gengduo","icon-shijian","icon-shouye","icon-location1","icon-pengyou","icon-erweima1","icon-sousuo","icon-heilongjiangtubiao","icon-comment1","icon-help","icon-tel","icon-gouwuche","icon-huangguan","icon-more_android","icon-dianhua-","icon-fenxiang-","icon-shuaxin","icon-zu","icon-yishoucang-","icon-pic","icon-favor","icon-deliver","icon-discover","icon-living","icon-haibaozujian","icon-edit1","icon-delete1","icon-more1","icon-xuanzhong","icon-shanchu2","icon-bi","icon-fuzhi1","icon-qiyong1","icon-kelong_huaban1","icon-yulan","icon-shezhi1"],_hoisted_1$4={class:"diy-select-icon-box"},_hoisted_2$4=["onClick"],_hoisted_3$3={class:"text-overflow"},_hoisted_4$1={slot:"footer",class:"dialog-footer"},_sfc_main$6={__name:"index",setup(e){const o=reactive({dialogVisible:!1,callback:null}),t=n=>{typeof o.callback=="function"&&o.callback(n),a()},a=()=>{o.dialogVisible=!1};return onMounted(()=>{Bus.on("selectIcon",n=>{console.log("selectIcon"),o.dialogVisible=!0,o.callback=n})}),(n,s)=>{const i=resolveComponent("el-button"),r=resolveComponent("el-dialog");return openBlock(),createBlock(r,{class:"diy-select-icon-wrapper",title:"选择图标",modelValue:o.dialogVisible,"onUpdate:modelValue":s[0]||(s[0]=l=>o.dialogVisible=l),width:"30%"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$4,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(list),(l,d)=>(openBlock(),createElementBlock("div",{onClick:m=>t(l),key:d},[createBaseVNode("span",{class:normalizeClass(["iconfont",l])},null,2),createBaseVNode("span",_hoisted_3$3,toDisplayString(l.replace("icon-","")),1)],8,_hoisted_2$4))),128))]),createBaseVNode("span",_hoisted_4$1,[createVNode(i,{onClick:a},{default:withCtx(()=>[createTextVNode("取 消")]),_:1})])]),_:1},8,["modelValue"])}}},selectIcon=_export_sfc(_sfc_main$6,[["__scopeId","data-v-b899864b"]]),_hoisted_1$3={class:"shopping-link-tem"},_hoisted_2$3={class:"title"},_hoisted_3$2={class:"page-select-box"},_sfc_main$5={__name:"linkBase",emits:["select"],setup(e,{emit:o}){const t=o,a=ref({商城:[{name:"商城首页",link:"/pages/index/index"}],商品:[{name:"商品列表页",link:"/pages/product/product"}],个人中心:[{name:"我的",link:"/pages/mine/mine"}]}),n=s=>{t("select",s)};return(s,i)=>{const r=resolveComponent("el-tag");return openBlock(),createElementBlock("div",_hoisted_1$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.value,(l,d)=>(openBlock(),createElementBlock("div",{key:d},[createBaseVNode("div",_hoisted_2$3,toDisplayString(d),1),createBaseVNode("div",_hoisted_3$2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(l,(m,_)=>(openBlock(),createBlock(r,{type:"info",key:_,title:m.name,onClick:v=>n(m.link)},{default:withCtx(()=>[createTextVNode(toDisplayString(m.name),1)]),_:2},1032,["title","onClick"]))),128))])]))),128))])}}},linkBase=_export_sfc(_sfc_main$5,[["__scopeId","data-v-324d6edb"]]),_withScopeId=e=>(pushScopeId("data-v-dfe5e984"),e=e(),popScopeId(),e),_hoisted_1$2={class:"goods-link-template"},_hoisted_2$2={class:"search"},_hoisted_3$1={class:"search-type"},_hoisted_4=_withScopeId(()=>createBaseVNode("span",{class:"label"},"商品类型",-1)),_hoisted_5={class:"link-select-box"},_hoisted_6={style:{color:"#999","margin-top":"-170px"}},_sfc_main$4={__name:"linkProduct",emits:["select"],setup(e,{emit:o}){const t=o,a=ref({all:"全部",goods:"实物",ticket:"票券",collect:"勋章"}),n=ref({type:"all",nameCn:""}),s=reactive({datas:[{nameCn:"测试商品",numberCode:1},{nameCn:"测试商品2",numberCode:2},{nameCn:"测试商品3",numberCode:3}],queryField:"nameCn",isLoading:!1,textShow:!1}),i=async()=>{s.textShow=!1,s.isLoading=!0,s.datas=[];let{type:r,nameCn:l}=n.value;await getProductList({appId:sessionStorage.getItem("appCode"),categoryCode:r==="all"?"":r,searchValue:l})};return onMounted(()=>{}),(r,l)=>{const d=resolveComponent("el-radio"),m=resolveComponent("el-radio-group"),_=resolveComponent("el-option"),v=resolveComponent("el-select"),p=resolveComponent("el-button"),u=resolveComponent("el-input"),y=resolveComponent("el-tag"),C=resolveDirective("loading");return openBlock(),createElementBlock("div",_hoisted_1$2,[createBaseVNode("div",_hoisted_2$2,[createBaseVNode("div",_hoisted_3$1,[_hoisted_4,createVNode(m,{modelValue:n.value.type,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value.type=c),onChange:i},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.value,(c,f)=>(openBlock(),createBlock(d,{key:f,value:f},{default:withCtx(()=>[createTextVNode(toDisplayString(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),createVNode(u,{modelValue:n.value.nameCn,"onUpdate:modelValue":l[2]||(l[2]=c=>n.value.nameCn=c),onFocus:l[3]||(l[3]=c=>r.textShow=!1),placeholder:"请输入内容进行搜索",class:"input-with-select"},{default:withCtx(()=>[createVNode(v,{modelValue:r.queryField,"onUpdate:modelValue":l[1]||(l[1]=c=>r.queryField=c),slot:"prepend",placeholder:"请选择",style:{width:"100px"}},{default:withCtx(()=>[createVNode(_,{label:"商品名称",value:"nameCn"}),createVNode(_,{label:"商品编号",value:"numberCode"}),createVNode(_,{label:"商品城市",value:"destination"})]),_:1},8,["modelValue"]),createVNode(p,{slot:"append",icon:"el-icon-search",onClick:r.getGoodList},null,8,["onClick"])]),_:1},8,["modelValue"])]),withDirectives((openBlock(),createElementBlock("div",_hoisted_5,[(openBlock(!0),createElementBlock(Fragment,null,renderList(s.datas,(c,f)=>(openBlock(),createBlock(y,{type:"info",key:f,title:c.nameCn,onClick:k=>t("select",`/pages/product/detail?numberCode=${c.numberCode}`)},{default:withCtx(()=>[createTextVNode(toDisplayString(c.nameCn),1)]),_:2},1032,["title","onClick"]))),128))])),[[C,s.isLoading]]),withDirectives(createBaseVNode("div",_hoisted_6,"查询结果为空",512),[[vShow,s.textShow]])])}}},linkProduct=_export_sfc(_sfc_main$4,[["__scopeId","data-v-dfe5e984"]]),useCommonStore=defineStore("common",()=>{const e=ref({}),o=Object.assign({"../material/assistBlank/config.js":()=>__vitePreload(()=>import("./config-6mH-mRtp.js"),[],import.meta.url),"../material/assistLine/config.js":()=>__vitePreload(()=>import("./config-DVat-B7F.js"),[],import.meta.url),"../material/buttons/config.js":()=>__vitePreload(()=>import("./config-C0YbOK9R.js"),[],import.meta.url),"../material/goods/config.js":()=>__vitePreload(()=>import("./config-D6hMiTLt.js"),[],import.meta.url),"../material/pictureShow/config.js":()=>__vitePreload(()=>import("./config-Cl_Z_cVx.js"),[],import.meta.url),"../material/search/config.js":()=>__vitePreload(()=>import("./config-xnz2TaiJ.js"),[],import.meta.url),"../material/singleChart/config.js":()=>__vitePreload(()=>import("./config-D08McHrW.js"),[],import.meta.url),"../material/swiper/config.js":()=>__vitePreload(()=>import("./config-Ck4necI8.js"),[],import.meta.url),"../material/tabbar/config.js":()=>__vitePreload(()=>import("./config-Bjxhfm_1.js"),[],import.meta.url),"../material/title/config.js":()=>__vitePreload(()=>import("./config-Cj1FeDHi.js"),[],import.meta.url),"../material/video/config.js":()=>__vitePreload(()=>import("./config-CBE_wplw.js"),[],import.meta.url)});console.log("Object.keys(datas)",Object.keys(o)),Object.keys(o).forEach(async a=>{let n=a.replace(/\/config.js/,"").replace(/.*\//,"");e.value[n]={name:n,componentName:"diy-"+n,configComponent:"conf-"+n,getDefaultConfig:o[a]}});const t=ref(getUrlParams().appCode||sessionStorage.getItem("appCode")||"");return sessionStorage.setItem("appCode",t.value),{appCode:t,materialDatas:e}}),_hoisted_1$1={class:"page-link"},_hoisted_2$1={class:"text"},_sfc_main$3={__name:"linkPages",emits:["select"],setup(e,{emit:o}){useCommonStore();const t=o,a=ref([]);return onMounted(()=>{}),(n,s)=>{const i=resolveComponent("el-tag"),r=resolveComponent("el-button");return openBlock(),createElementBlock("div",_hoisted_1$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.value,(l,d)=>(openBlock(),createElementBlock("div",{class:"page-link_item",key:d},[createVNode(i,{type:l.tag,effect:"dark"},{default:withCtx(()=>[createTextVNode(toDisplayString(l.typeName),1)]),_:2},1032,["type"]),createBaseVNode("span",_hoisted_2$1,toDisplayString(l.nameCn),1),createVNode(r,{type:"primary",size:"small",onClick:m=>t("select",`/pages/index/preview?numberCode=${l.numberCode}`)},{default:withCtx(()=>[createTextVNode("选择")]),_:2},1032,["onClick"])]))),128))])}}},linkPages=_export_sfc(_sfc_main$3,[["__scopeId","data-v-bf20325c"]]),_hoisted_1={class:"diy-select-link-box"},_hoisted_2={class:"link-label-box"},_hoisted_3=["onClick"],_sfc_main$2={__name:"index",setup(e){const o=ref(["内部链接","商品","店铺装修","打卡活动"]),t=reactive({dialogVisible:!1,activeIndex:0,callback:null}),a=i=>{t.activeIndex!==i&&(t.activeIndex=i)},n=i=>{console.log("link",i),typeof t.callback=="function"&&t.callback(i),s()},s=()=>{t.dialogVisible=!1};return onMounted(()=>{Bus.on("selectLink",i=>{t.activeIndex=0,t.dialogVisible=!0,t.callback=i})}),(i,r)=>{const l=resolveComponent("el-button"),d=resolveComponent("el-dialog");return openBlock(),createBlock(d,{class:"diy-select-link-wrapper",title:"选择链接",modelValue:t.dialogVisible,"onUpdate:modelValue":r[0]||(r[0]=m=>t.dialogVisible=m)},{footer:withCtx(()=>[createVNode(l,{onClick:s},{default:withCtx(()=>[createTextVNode("关 闭")]),_:1})]),default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.value,(m,_)=>(openBlock(),createElementBlock("span",{class:normalizeClass({active:t.activeIndex===_}),onClick:v=>a(_)},toDisplayString(m),11,_hoisted_3))),256))]),t.activeIndex===0?(openBlock(),createBlock(linkBase,{key:0,class:"link-content-box",onSelect:n})):createCommentVNode("",!0),t.activeIndex===1?(openBlock(),createBlock(linkProduct,{key:1,class:"link-content-box",onSelect:n})):createCommentVNode("",!0),t.activeIndex===2?(openBlock(),createBlock(linkPages,{key:2,class:"link-content-box",onSelect:n})):createCommentVNode("",!0)])]),_:1},8,["modelValue"])}}},selectLink=_export_sfc(_sfc_main$2,[["__scopeId","data-v-0c2c7987"]]),_sfc_main$1={__name:"register",setup(e){return(o,t)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(selectImage),createVNode(selectIcon),createVNode(selectLink)],64))}},_sfc_main={__name:"App",setup(e){return(o,t)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(layoutView),createVNode(_sfc_main$1)],64))}};String.prototype.colorRgb=function(){var e=this.toLowerCase(),o=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(e&&o.test(e)){if(e.length===4){for(var t="#",a=1;a<4;a+=1)t+=e.slice(a,a+1).concat(e.slice(a,a+1));e=t}for(var n=[],a=1;a<7;a+=2)n.push(parseInt("0x"+e.slice(a,a+2)));return n.join(",")}return e};const autoRegister={install(e){const o=Object.assign({"../../material/assistBlank/index.vue":()=>__vitePreload(()=>import("./index-S2eHQ6ec.js"),__vite__mapDeps([20,1,2]),import.meta.url),"../../material/assistLine/index.vue":()=>__vitePreload(()=>import("./index-DUk9-qTT.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),"../../material/buttons/index.vue":()=>__vitePreload(()=>import("./index-BYGvW5Z0.js"),__vite__mapDeps([23,24,1,2,25]),import.meta.url),"../../material/goods/index.vue":()=>__vitePreload(()=>import("./index-Dz5dyDHv.js"),__vite__mapDeps([26,24,1,2,27]),import.meta.url),"../../material/pictureShow/index.vue":()=>__vitePreload(()=>import("./index-oQT_LgcF.js"),__vite__mapDeps([28,24,1,2,29]),import.meta.url),"../../material/search/index.vue":()=>__vitePreload(()=>import("./index-CeayCP4L.js"),__vite__mapDeps([30,1,2,31,32]),import.meta.url),"../../material/singleChart/index.vue":()=>__vitePreload(()=>import("./index-BL4Gi6Ay.js"),__vite__mapDeps([33,24,1,2,34]),import.meta.url),"../../material/swiper/index.vue":()=>__vitePreload(()=>import("./index-BSeql8Fz.js"),__vite__mapDeps([35,1,2,24,36]),import.meta.url),"../../material/tabbar/index.vue":()=>__vitePreload(()=>import("./index-Dt3KjZeT.js"),__vite__mapDeps([37,1,2,38]),import.meta.url),"../../material/title/index.vue":()=>__vitePreload(()=>import("./index-C0cfqwz5.js"),__vite__mapDeps([39,1,2,40]),import.meta.url),"../../material/video/index.vue":()=>__vitePreload(()=>import("./index-k8X7mbYo.js"),__vite__mapDeps([41,1,2,42]),import.meta.url)});for(const[n,s]of Object.entries(o)){const i="diy-"+n.replace("../../material/","").split("/")[0];e.component(i,defineAsyncComponent(s))}const t=Object.assign({"../../material/assistBlank/config.vue":()=>__vitePreload(()=>import("./config-xdDxn9Bn.js"),__vite__mapDeps([43,31,1,2]),import.meta.url),"../../material/assistLine/config.vue":()=>__vitePreload(()=>import("./config-6YGgnb0H.js"),__vite__mapDeps([44,31,1,2,45]),import.meta.url),"../../material/buttons/config.vue":()=>__vitePreload(()=>import("./config-ByG0Uwj2.js"),__vite__mapDeps([46,1,2,24,31]),import.meta.url),"../../material/goods/config.vue":()=>__vitePreload(()=>import("./config-P2iYmjJ8.js"),__vite__mapDeps([47,31,1,2,48]),import.meta.url),"../../material/pictureShow/config.vue":()=>__vitePreload(()=>import("./config-B-YTndX6.js"),__vite__mapDeps([49,1,2,24,31]),import.meta.url),"../../material/search/config.vue":()=>__vitePreload(()=>import("./config-ywY8Uxsp.js"),__vite__mapDeps([50,1,2,31,51]),import.meta.url),"../../material/singleChart/config.vue":()=>__vitePreload(()=>import("./config-R_XREdVY.js"),__vite__mapDeps([52,1,2,24,31]),import.meta.url),"../../material/swiper/config.vue":()=>__vitePreload(()=>import("./config-DQI2WvVy.js"),__vite__mapDeps([53,1,2,24,31]),import.meta.url),"../../material/tabbar/config.vue":()=>__vitePreload(()=>import("./config-DW-z_NUW.js"),__vite__mapDeps([54,1,2,55]),import.meta.url),"../../material/title/config.vue":()=>__vitePreload(()=>import("./config-DL81F_GC.js"),__vite__mapDeps([56,1,2,31]),import.meta.url),"../../material/video/config.vue":()=>__vitePreload(()=>import("./config-Dp7eswgc.js"),__vite__mapDeps([57,1,2,31,58]),import.meta.url)});for(const[n,s]of Object.entries(t)){const i="conf-"+n.replace("../../material/","").split("/")[0];e.component(i,defineAsyncComponent(s))}const a=Object.assign({"./common/configItem.vue":()=>__vitePreload(()=>import("./configItem-CCQ6uhH_.js"),__vite__mapDeps([59,1,2,60]),import.meta.url),"./common/inputNumber.vue":()=>__vitePreload(()=>import("./inputNumber-BW8_VLzH.js"),__vite__mapDeps([61,1,2,62]),import.meta.url),"./common/listBox.vue":()=>__vitePreload(()=>import("./listBox-DSej_5dD.js"),__vite__mapDeps([63,1,2,64]),import.meta.url),"./common/selectColor.vue":()=>__vitePreload(()=>import("./selectColor-Buk9YeVG.js"),__vite__mapDeps([65,1,2,66]),import.meta.url)});for(const[n,s]of Object.entries(a)){const i=n.replace("./common/","").replace(".vue","");e.component(i,defineAsyncComponent(s))}}};function EventEmitter(){this._events={}}EventEmitter.prototype.on=function(e,o){this._events||(this._events={}),(this._events[e]||(this._events[e]=[])).push(o)};EventEmitter.prototype.emit=function(e,...o){this._events[e]&&this._events[e].forEach(t=>t(...o))};EventEmitter.prototype.off=function(e,o){this._events||(this._events={}),this._events[e]&&(this._events[e]=this._events[e].filter(t=>t!=o&&t.cb!==o))};EventEmitter.prototype.once=function(e,o){const t=(...a)=>{o(...a),this.off(e,t)};t.cb=o,this.on(e,t)};const copyText={beforeMount(e,{value:o,arg:t}){if(t==="callback")e.$copyCallback=o;else{e.$copyValue=o;const a=()=>{copyTextToClipboard(e.$copyValue),e.$copyCallback&&e.$copyCallback(e.$copyValue)};e.addEventListener("click",a),e.$destroyCopy=()=>e.removeEventListener("click",a)}}};function copyTextToClipboard(e,{target:o=document.body}={}){const t=document.createElement("textarea"),a=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const n=document.getSelection();let s;n&&(s=(n==null?void 0:n.rangeCount)>0&&n.getRangeAt(0)),o.append(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(r){console.error(r)}return t.remove(),s&&(n==null||n.removeAllRanges(),n==null||n.addRange(s)),a&&a.focus(),i}function dealVal(e,o=2){return e===""?"":(e=e.replace(/[^\d|\.]/g,"").replace(/\.\.*/,"."),e[e.length-1]!=="."?parseFloat(parseFloat(e).toFixed(o)):e)}const amountInput={mounted(e,o){const t=e.tagName==="INPUT"?e:e.querySelector("input");t.oninput=()=>{t.value=t.value.replace(/[^\d|\.]/g,"")},t.onblur=()=>{t.value=dealVal(t.value,o.value),t.dispatchEvent(new Event("input"))}}},focus={mounted(e,o){const t=e.querySelector("input");t&&t.focus()}},directive=e=>{e.directive("copyText",copyText),e.directive("amountInput",amountInput),e.directive("focus",focus)};window.Bus=new EventEmitter;const pinia=createPinia(),app=createApp(_sfc_main);directive(app);for(const[e,o]of Object.entries(ElementPlusIconsVue))app.component(e,o);app.use(installer);app.use(pinia);app.use(router);app.use(autoRegister);app.use(ColorPicker);app.mount("#app");export{_export_sfc as _,uploadFile as a,deepClone as d,service as s,useCommonStore as u};
