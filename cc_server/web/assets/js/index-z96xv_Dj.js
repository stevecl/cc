import{R as dt,r as j,S as X,o as Q,e as f,f as b,F as A,g as F,l as O,k as o,q as R,t as w,n as Y,T as q,z as M,U as rt,d as D,h as p,w as k,y as K,A as J,s as H,v as z,i as G,j as Z,E as P,V as ct,H as pt,W as ft,u as vt,b as bt,B as ht,X as Et}from"./index-0bWp895S.js";import{a as m,_ as x,b as ee,f as te,h as ae,i as se,j as oe,k as ne,l as le,m as ie,n as ge,o as _e,p as ue,q as me,r as de,s as re,t as ce,u as pe,v as fe,w as ve,x as be,y as he,z as Ee,A as ye,B as ke,C as Ce,D as Ie,E as Te,F as De,G as Oe,H as we,I as Ve,J as je,K as Re,L as $e,M as xe,N as Le,O as Ae,P as Pe,Q as Me,R as Se,S as Ne,T as Be,U as Ge,V as Ue,W as qe,X as He,Y as ze,Z as Fe,$ as Ke,a0 as Je,a1 as We,a2 as Xe,a3 as Qe,a4 as Ye,a5 as Ze,a6 as et,a7 as tt,a8 as at,a9 as st,aa as ot,ab as nt,ac as lt,ad as it,ae as gt,af as _t,ag as ut,ah as yt,ai as kt,aj as $,ak as Ct,al as It}from"./index-Dr5618oB.js";const mt=dt("common",()=>{const e=j({}),r=Object.assign({"../material/assistBlank/config.js":()=>m(()=>import("./config-6mH-mRtp.js"),[],import.meta.url),"../material/assistLine/config.js":()=>m(()=>import("./config-DVat-B7F.js"),[],import.meta.url),"../material/buttons/config.js":()=>m(()=>import("./config-64o6n3zH.js"),[],import.meta.url),"../material/coupon/config.js":()=>m(()=>import("./config-B8gpgxka.js"),[],import.meta.url),"../material/floatButtons/config.js":()=>m(()=>import("./config-B3cqXnKf.js"),[],import.meta.url),"../material/goods/config.js":()=>m(()=>import("./config-DNdpgWls.js"),[],import.meta.url),"../material/goodsLikes/config.js":()=>m(()=>import("./config-CxGGstuq.js"),[],import.meta.url),"../material/goodsRanking/config.js":()=>m(()=>import("./config-FkYGNhZh.js"),[],import.meta.url),"../material/goodsScore/config.js":()=>m(()=>import("./config-DBIqUa65.js"),[],import.meta.url),"../material/goodsTabbar/config.js":()=>m(()=>import("./config-CxU5YkRA.js"),[],import.meta.url),"../material/listMenu/config.js":()=>m(()=>import("./config-Dc0rDWKo.js"),[],import.meta.url),"../material/memberCenter/config.js":()=>m(()=>import("./config-DKmKHg5x.js"),[],import.meta.url),"../material/order/config.js":()=>m(()=>import("./config-BHolnAJR.js"),[],import.meta.url),"../material/pictureShow/config.js":()=>m(()=>import("./config-CLiev0JT.js"),[],import.meta.url),"../material/search/config.js":()=>m(()=>import("./config-X6HfCMdb.js"),[],import.meta.url),"../material/shop/config.js":()=>m(()=>import("./config-DCnUXF7j.js"),[],import.meta.url),"../material/singleChart/config.js":()=>m(()=>import("./config-BJnqfvFa.js"),[],import.meta.url),"../material/swiper/config.js":()=>m(()=>import("./config-IMxg-2Lq.js"),[],import.meta.url),"../material/tabbar/config.js":()=>m(()=>import("./config-Cp0HuyK0.js"),[],import.meta.url),"../material/title/config.js":()=>m(()=>import("./config-C44-TJ-5.js"),[],import.meta.url),"../material/video/config.js":()=>m(()=>import("./config-DPJ3dUps.js"),[],import.meta.url)});return Object.keys(r).forEach(async g=>{let l=g.replace(/\/config.js/,"").replace(/.*\//,"");e.value[l]={name:l,componentName:"diy-"+l,configComponent:"conf-"+l,getDefaultConfig:r[g]}}),{materialDatas:e}}),Tt={name:"商品类",data:[{name:"商品组",icon:"goods.png",component:"goods"},{name:"选项卡",icon:"tabbar.png",component:"goodsTabbar"},{name:"猜你喜欢",icon:"guess.png",component:"goodsLikes"},{name:"商品排行",icon:"goodsRanking.png",component:"goodsRanking"},{name:"积分商城",icon:"creditshop.png",component:"goodsScore"}]},Dt={name:"图文类 ",data:[{name:"搜索框",icon:"search.png",component:"search"},{name:"图片轮播",icon:"banner.png",component:"swiper"},{name:"图片(热区)",icon:"picture.png",component:"singleChart"},{name:"图片展播",icon:"pictures.png",component:"pictureShow"},{name:"列表导航",icon:"listmenu.png",component:"listMenu"},{name:"辅助线",icon:"line.png",component:"assistLine"},{name:"标题栏",icon:"title.png",component:"title"},{name:"辅助空白",icon:"blank.png",component:"assistBlank"},{name:"按钮组",icon:"menu.png",component:"buttons"},{name:"视频播放",icon:"video.png",component:"video"},{name:"浮动按钮",icon:"float.png",unique:!0,component:"floatButtons"}]},Ot={name:"会员中心",permission:["MEMBER_CENTER"],data:[{name:"用户信息组",icon:"member.png",unique:!0,component:"memberCenter"},{name:"订单组",icon:"search.png",component:"order"},{name:"店铺组",icon:"search.png",component:"shop"},{name:"优惠券",icon:"coupon.png",component:"coupon"}]},U=[Tt,Dt,Ot],wt={class:"module-select-box"},Vt={key:0,class:"module-list"},jt=["onClick"],Rt={key:0,class:"module-list_data"},$t=["onClick"],xt={class:"title"},Lt={__name:"materialPanel",emits:["add","global"],setup(e,{emit:r}){const{materialDatas:g}=mt();console.log("materialDatas",U);const l=r,a=X("baseInfo"),t=s=>({backgroundImage:`url(${new URL(Object.assign({"../../assets/images/default/audio.png":ee,"../../assets/images/default/banner.png":te,"../../assets/images/default/bannerGoods.png":ae,"../../assets/images/default/bargain.png":se,"../../assets/images/default/blank.png":oe,"../../assets/images/default/car1.png":ne,"../../assets/images/default/car2.png":le,"../../assets/images/default/car3.png":ie,"../../assets/images/default/car4.png":ge,"../../assets/images/default/channelvideo.png":_e,"../../assets/images/default/copyright.png":ue,"../../assets/images/default/countdown.png":me,"../../assets/images/default/coupon.png":de,"../../assets/images/default/couponbag.png":re,"../../assets/images/default/course.png":ce,"../../assets/images/default/creditshop.png":pe,"../../assets/images/default/creditsign.png":fe,"../../assets/images/default/cube.png":ve,"../../assets/images/default/default_banner.png":be,"../../assets/images/default/default_btn1.png":he,"../../assets/images/default/default_btn2.png":Ee,"../../assets/images/default/default_btn3.png":ye,"../../assets/images/default/default_btn4.png":ke,"../../assets/images/default/default_img.jpg":Ce,"../../assets/images/default/default_picture.png":Ie,"../../assets/images/default/default_video.png":Te,"../../assets/images/default/fixedsearch.png":De,"../../assets/images/default/float.png":Oe,"../../assets/images/default/form.png":we,"../../assets/images/default/giftcard.png":Ve,"../../assets/images/default/goods,list.png":je,"../../assets/images/default/goods,one.png":Re,"../../assets/images/default/goods.png":$e,"../../assets/images/default/goodsRanking.png":xe,"../../assets/images/default/groups.png":Le,"../../assets/images/default/groupscashback.png":Ae,"../../assets/images/default/guess.png":Pe,"../../assets/images/default/guide.png":Me,"../../assets/images/default/home-b.png":Se,"../../assets/images/default/hotel.png":Ne,"../../assets/images/default/lecturer.png":Be,"../../assets/images/default/line.png":Ge,"../../assets/images/default/listmenu.png":Ue,"../../assets/images/default/live.png":qe,"../../assets/images/default/member.png":He,"../../assets/images/default/menu.png":ze,"../../assets/images/default/note.png":Fe,"../../assets/images/default/notice.png":Ke,"../../assets/images/default/otherGoods,three.png":Je,"../../assets/images/default/otherGoods,three2.png":We,"../../assets/images/default/otherGoods,three3.png":Xe,"../../assets/images/default/picture.png":Qe,"../../assets/images/default/pictures.png":Ye,"../../assets/images/default/presell.png":Ze,"../../assets/images/default/richtext.png":et,"../../assets/images/default/room.png":tt,"../../assets/images/default/search.png":at,"../../assets/images/default/seckill.png":st,"../../assets/images/default/tabbar.png":ot,"../../assets/images/default/title.png":nt,"../../assets/images/default/title3.png":lt,"../../assets/images/default/twoGoods,list2.png":it,"../../assets/images/default/twoGoods,two.png":gt,"../../assets/images/default/video.png":_t,"../../assets/images/default/wxlive.png":ut})[`../../assets/images/default/${s}`],import.meta.url).href})`}),n=j([]),u=s=>{let i=n.value.indexOf(s.name);console.log("asd",s.name,i),i>-1?n.value.splice(i,1):n.value.push(s.name)};return Q(async()=>{if(Object.keys(g).some(s=>!g[s].title))for(const s in g){let i=(await g[s].getDefaultConfig()).default;g[s].title=i.title,g[s].defConfig=i,delete g[s].getDefaultConfig}}),(s,i)=>(f(),b("div",wt,[(f(!0),b(A,null,F(O(U),(c,C)=>{var y;return f(),b(A,{key:C},[!c.permission||(y=c.permission)!=null&&y.includes(O(a).category)?(f(),b("div",Vt,[o("div",{class:"module-list_type",onClick:h=>u(c)},[R(w(c.name)+"("+w(c.data.length)+")"+w(c.open),1),o("span",{class:Y(["iconfont icon-3101jiantou3",{up:n.value.includes(c.name)}])},null,2)],8,jt),n.value.includes(c.name)?M("",!0):(f(),b("div",Rt,[(f(!0),b(A,null,F(c.data,(h,I)=>(f(),b("div",{class:"module-list_data_item",style:q(t(h.icon)),key:"c_"+I,onClick:L=>l("add",O(g)[h.component],h.unique)},[o("p",xt,w(h.name),1)],12,$t))),128))]))])):M("",!0)],64)}),128))]))}},At=x(Lt,[["__scopeId","data-v-7fa5297c"]]),Pt={class:"phone-wrapper"},Mt={class:"diy-phone"},St={class:"phone_title"},Nt={__name:"renderEngine",props:{pageConfig:Object},emits:["select"],setup(e,{emit:r}){const g=r;return(l,a)=>(f(),b("div",Pt,[o("div",Mt,[o("div",{class:"text-overflow phone-header",onClick:a[0]||(a[0]=t=>g("select"))},[o("div",St,w(e.pageConfig.templateTitle),1)]),o("div",{class:"custom-scroll-bar phone-body",style:q({"background-color":e.pageConfig.backgroundColor})},[rt(l.$slots,"default",{},void 0,!0)],4)])]))}},Bt=x(Nt,[["__scopeId","data-v-06ef4988"]]),S=e=>(H("data-v-64696a76"),e=e(),z(),e),Gt=S(()=>o("div",{class:"module-edit-title"},"页面设置",-1)),Ut=S(()=>o("p",{class:"tips-info"},"注意：页面名称是便于后台查找。",-1)),qt=S(()=>o("div",{class:"tips-info",style:{margin:"-10px 0 10px 78px"}},"建议尺寸256 * 414 (大小建议不超过800k，以免影响加载速度)",-1)),Ht=S(()=>o("div",{class:"diy-edit-line"},null,-1)),zt={__name:"pageSet",props:{config:Object},setup(e){const r=e,g=async l=>{let a=l.target.files;for(var t=0;t<a.length;t++){let n=await yt(a[t]);r.config.templateImg=n}};return(l,a)=>{const t=D("el-input"),n=D("configItem"),u=D("selectColor"),s=D("el-image");return f(),b("div",null,[Gt,p(n,{label:"页面名称",style:{"margin-bottom":"20px"}},{default:k(()=>[p(t,{class:"flex-full",maxlength:12,modelValue:e.config.templateName,"onUpdate:modelValue":a[0]||(a[0]=i=>e.config.templateName=i),placeholder:"请输入页面名称"},null,8,["modelValue"]),Ut]),_:1}),p(n,{label:"页面标题"},{default:k(()=>[p(t,{class:"flex-full",modelValue:e.config.templateTitle,"onUpdate:modelValue":a[1]||(a[1]=i=>e.config.templateTitle=i),placeholder:"请输入页面标题"},null,8,["modelValue"])]),_:1}),p(n,{label:"页面背景"},{default:k(()=>[p(u,{modelValue:e.config.backgroundColor,"onUpdate:modelValue":a[2]||(a[2]=i=>e.config.backgroundColor=i),resetColor:"#ededed"},null,8,["modelValue"])]),_:1}),p(n,{label:"封面图",isRequire:!0},{default:k(()=>[o("div",{class:"upload-image",onClick:a[3]||(a[3]=i=>l.$refs.upload.click())},[K(p(s,{src:e.config.templateImg},null,8,["src"]),[[J,e.config.templateImg]]),K(o("span",null,"+",512),[[J,!e.config.templateImg]]),o("input",{type:"file",style:{display:"none"},onChange:g,ref:"upload",multiple:"true",accept:"image/jpg,image/jpeg,image/png,image/gif,image/bmp"},null,544)])]),_:1}),qt,Ht])}}},Ft=x(zt,[["__scopeId","data-v-64696a76"]]),N=e=>(H("data-v-cf49f297"),e=e(),z(),e),Kt={class:"diy-edit-box"},Jt={class:"header-info"},Wt={class:"title"},Xt=["src"],Qt=N(()=>o("span",{class:"iconfont icon-fuzhi1"},null,-1)),Yt=N(()=>o("span",null,"复制",-1)),Zt=[Qt,Yt],ea=N(()=>o("span",{class:"iconfont icon-shanchu2"},null,-1)),ta=N(()=>o("span",null,"删除",-1)),aa=[ea,ta],sa={class:"custom-scroll-bar edit-config-module"},oa={__name:"configPanel",props:{activeItem:Object},emits:["copy","delete"],setup(e,{emit:r}){let g=U.reduce((n,u)=>[...n,...u.data],[]);const l=r,a=X("baseInfo"),t=n=>{var s;let u=(s=g.filter(i=>i.component===n)[0])==null?void 0:s.icon;return new URL(Object.assign({"../../assets/images/default/audio.png":ee,"../../assets/images/default/banner.png":te,"../../assets/images/default/bannerGoods.png":ae,"../../assets/images/default/bargain.png":se,"../../assets/images/default/blank.png":oe,"../../assets/images/default/car1.png":ne,"../../assets/images/default/car2.png":le,"../../assets/images/default/car3.png":ie,"../../assets/images/default/car4.png":ge,"../../assets/images/default/channelvideo.png":_e,"../../assets/images/default/copyright.png":ue,"../../assets/images/default/countdown.png":me,"../../assets/images/default/coupon.png":de,"../../assets/images/default/couponbag.png":re,"../../assets/images/default/course.png":ce,"../../assets/images/default/creditshop.png":pe,"../../assets/images/default/creditsign.png":fe,"../../assets/images/default/cube.png":ve,"../../assets/images/default/default_banner.png":be,"../../assets/images/default/default_btn1.png":he,"../../assets/images/default/default_btn2.png":Ee,"../../assets/images/default/default_btn3.png":ye,"../../assets/images/default/default_btn4.png":ke,"../../assets/images/default/default_img.jpg":Ce,"../../assets/images/default/default_picture.png":Ie,"../../assets/images/default/default_video.png":Te,"../../assets/images/default/fixedsearch.png":De,"../../assets/images/default/float.png":Oe,"../../assets/images/default/form.png":we,"../../assets/images/default/giftcard.png":Ve,"../../assets/images/default/goods,list.png":je,"../../assets/images/default/goods,one.png":Re,"../../assets/images/default/goods.png":$e,"../../assets/images/default/goodsRanking.png":xe,"../../assets/images/default/groups.png":Le,"../../assets/images/default/groupscashback.png":Ae,"../../assets/images/default/guess.png":Pe,"../../assets/images/default/guide.png":Me,"../../assets/images/default/home-b.png":Se,"../../assets/images/default/hotel.png":Ne,"../../assets/images/default/lecturer.png":Be,"../../assets/images/default/line.png":Ge,"../../assets/images/default/listmenu.png":Ue,"../../assets/images/default/live.png":qe,"../../assets/images/default/member.png":He,"../../assets/images/default/menu.png":ze,"../../assets/images/default/note.png":Fe,"../../assets/images/default/notice.png":Ke,"../../assets/images/default/otherGoods,three.png":Je,"../../assets/images/default/otherGoods,three2.png":We,"../../assets/images/default/otherGoods,three3.png":Xe,"../../assets/images/default/picture.png":Qe,"../../assets/images/default/pictures.png":Ye,"../../assets/images/default/presell.png":Ze,"../../assets/images/default/richtext.png":et,"../../assets/images/default/room.png":tt,"../../assets/images/default/search.png":at,"../../assets/images/default/seckill.png":st,"../../assets/images/default/tabbar.png":ot,"../../assets/images/default/title.png":nt,"../../assets/images/default/title3.png":lt,"../../assets/images/default/twoGoods,list2.png":it,"../../assets/images/default/twoGoods,two.png":gt,"../../assets/images/default/video.png":_t,"../../assets/images/default/wxlive.png":ut})[`../../assets/images/default/${u||"course.png"}`],import.meta.url).href};return(n,u)=>(f(),b("div",Kt,[o("div",Jt,[o("p",Wt,[o("img",{src:t(e.activeItem.name),alt:""},null,8,Xt),R(" "+w(e.activeItem.title),1)]),O(a).category!=="BOTTOM_MENU"?(f(),b(A,{key:0},[o("p",{class:"pointer btn",onClick:u[0]||(u[0]=s=>l("copy"))},Zt),o("p",{class:"pointer btn",onClick:u[1]||(u[1]=s=>l("delete"))},aa)],64)):M("",!0)]),o("div",sa,[(f(),G(Z(e.activeItem.configComponent||Ft),{config:e.activeItem.config},null,8,["config"]))])]))}},na=x(oa,[["__scopeId","data-v-cf49f297"]]),{materialDatas:W}=mt();function la(e,r,g){return{initData:async(t,n)=>{if(e.value.id=n,e.value.category=t,!n)if(["BOTTOM_MENU","HOME_ADVERT"].includes(t)){const d={BOTTOM_MENU:[{name:"tabbar"}],HOME_ADVERT:[{name:"advert"}]};r.value=d[t].map(v=>{let E=W[v.name];return E.config=Object.assign({},E.defConfig,v.config||{}),E}),g.value=0;return}else return;let{category:u,sourceType:s,templateTitle:i,templateName:c,templateImg:C,backgroundColor:y,searchKey:h,templateConfigParams:I,componentIds:L}=await kt(n),_=JSON.parse(I).map(d=>{let v=$(d.config),E=W[d.name],V=$(E.defConfig);return Ct(V,v),E.config=V,E});console.log("testData",_),r.value=_,e.value.category=u,e.value.sourceType=s,e.value.templateName=c,e.value.templateTitle=i,e.value.templateImg=C,e.value.backgroundColor=y,e.value.searchKey=h,e.value.componentIds=L,["BOTTOM_MENU","HOME_ADVERT"].includes(u)&&(g.value=0)},submitData:async(t=!1)=>{let n=r.value.map(({name:y,title:h,config:I})=>({name:y,title:h,config:I})),u={...e.value},{id:s,templateName:i,templateImg:c}=u;if(!i)return P({type:"warning",message:"模板名称不能为空 "});if(!c)return P({type:"warning",message:"模板封面不能为空 "});u.templateConfigParams=JSON.stringify(n),console.log("params",n);let C=await It(u);if(s&&t)return Bus.emit("preview",{templateName:i,id:s});console.log("返回 result:",C,t),P({type:"success",message:"保存成功"})}}}const ia=e=>(H("data-v-8242c358"),e=e(),z(),e),ga={class:"wrapper"},_a={class:"wrapper-header"},ua=ia(()=>o("div",{class:"flex-1"},null,-1)),ma={__name:"index",setup(e){const r=vt(),g=bt(),l=j({id:"",category:"HOME",sourceType:"MARKET_APPLETS",templateName:"",templateTitle:"",templateImg:"",backgroundColor:"#ffffff",searchKey:"v",templateConfigParams:"[]",componentIds:""});ct("baseInfo",l.value);const a=j([]),t=j(-1),n=pt(()=>a.value[t.value]||{title:"全局设置",isGlobal:!0,config:l.value}),{initData:u,submitData:s}=la(l,a,t),i=(_,d=!1)=>{if(d&&a.value.some(E=>E.name===_.name))return P({message:`${_.title}组件只能添加一个`,type:"warning"});let v=$(_);v.config=$(v.defConfig),t.value===-1?(a.value.push(v),t.value=a.value.length-1):(a.value.splice(t.value+1,0,v),t.value=t.value+1)},c=_=>t.value>=0,C=_=>{t.value=_.newIndex},y=_=>{t.value=_},h=()=>{let _=t.value;if(_===-1)return;let d=$(a.value[_]);a.value.splice(_+1,0,d),t.value+=1},I=async()=>{let _=t.value;if(_===-1)return;await ht.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})==="confirm"&&(a.value.splice(_,1),_>=a.value.length-1&&(t.value=a.value.length-1))},L=()=>g.back();return Q(()=>{let{type:_,id:d=""}=r.query;const v=ft.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{u(_,d),v.close()},1e3)}),(_,d)=>{const v=D("ArrowLeft"),E=D("el-icon"),V=D("el-button");return f(),b("div",ga,[o("div",_a,[o("div",{class:"left-back",onClick:L},[p(E,null,{default:k(()=>[p(v)]),_:1}),R("返回 ")]),ua,l.value.id?(f(),G(V,{key:0,type:"primary",onClick:d[0]||(d[0]=T=>O(s)(!0))},{default:k(()=>[R("保存并预览")]),_:1})):M("",!0),p(V,{type:"primary",onClick:d[1]||(d[1]=T=>O(s)(!1))},{default:k(()=>[R("保存")]),_:1})]),p(At,{activeIndex:t.value,onAdd:i},null,8,["activeIndex"]),p(Bt,{pageConfig:l.value,onSelect:d[3]||(d[3]=T=>y(-1))},{default:k(()=>[p(O(Et),{style:q({height:l.value.category==="advert"?"100%":"unset"}),modelValue:a.value,"onUpdate:modelValue":d[2]||(d[2]=T=>a.value=T),move:c,onUpdate:C,"item-key":"index"},{item:k(({element:T,index:B})=>[o("div",null,[(f(),G(Z(T.componentName),{"item-key":B,class:Y({editing:!0,selected:B===t.value}),config:T.config,onClick:da=>y(B)},null,8,["item-key","class","config","onClick"]))])]),_:1},8,["style","modelValue"])]),_:1},8,["pageConfig"]),p(na,{activeItem:n.value,onCopy:h,onDelete:I},null,8,["activeItem"])])}}},pa=x(ma,[["__scopeId","data-v-8242c358"]]);export{pa as default};
