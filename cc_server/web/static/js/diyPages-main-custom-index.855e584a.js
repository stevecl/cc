(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diyPages-main-custom-index"],{"12eb":function(e,t,a){"use strict";a.r(t);var n=a("618b"),o=a("376f");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("68b2");var r=a("828b"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"7896ede6",null,!1,n["a"],void 0);t["default"]=d.exports},"376f":function(e,t,a){"use strict";a.r(t);var n=a("e408"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"618b":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={diyTabbar:a("a1ce").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"wrap"},[a("v-uni-scroll-view",{staticClass:"wrap_content",style:[e.pageStyle],attrs:{"scroll-y":"true","scroll-top":e.scrollTop},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.scroll.apply(void 0,arguments)}}},[a("showPreivew",{attrs:{config:e.pageConfig.datas,hasTabbar:e.hasTabbar}})],1),e.hasTabbar?a("diy-tabbar",{attrs:{menuConfig:e.tabbarConfig}}):e._e()],1)},i=[]},"62d5":function(e,t,a){var n=a("73e5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("967d").default;o("121b68c4",n,!0,{sourceMap:!1,shadowMode:!1})},"68b2":function(e,t,a){"use strict";var n=a("62d5"),o=a.n(n);o.a},"73e5":function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/**\r\n * 本次开发主题色\r\n */uni-page-body[data-v-7896ede6]{height:100%}.bold[data-v-7896ede6]{font-weight:700}.light[data-v-7896ede6]{color:#fe6903}.gray[data-v-7896ede6]{color:#888992}.fs12[data-v-7896ede6]{font-size:12px}.fs14[data-v-7896ede6]{font-size:14px}.fs16[data-v-7896ede6]{font-size:16px}.fs18[data-v-7896ede6]{font-size:18px}.fs20[data-v-7896ede6]{font-size:20px}.fs22[data-v-7896ede6]{font-size:22px}.fs24[data-v-7896ede6]{font-size:24px}.fs26[data-v-7896ede6]{font-size:26px}.fs28[data-v-7896ede6]{font-size:28px}.fs30[data-v-7896ede6]{font-size:30px}.fs36[data-v-7896ede6]{font-size:36px}.fs42[data-v-7896ede6]{font-size:42px}.ml10[data-v-7896ede6]{margin-left:10px}.mr20[data-v-7896ede6]{margin-right:20px}.mb10[data-v-7896ede6]{margin-bottom:10px}.fl[data-v-7896ede6]{float:left}.fr[data-v-7896ede6]{float:right}.flex[data-v-7896ede6]{display:flex}.flex-col[data-v-7896ede6]{flex-direction:column}.flex-1[data-v-7896ede6]{flex:1}.flex-center[data-v-7896ede6]{display:flex;justify-content:center;align-items:center}.flex-between[data-v-7896ede6]{display:flex;justify-content:space-between}.text-overflow[data-v-7896ede6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.txt_overflow[data-v-7896ede6]{text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;word-break:break-all}.wrap[data-v-7896ede6]{position:relative;width:100%;height:100%;box-sizing:border-box;background-color:#f6f6f6;display:flex;flex-direction:column}.wrap_content[data-v-7896ede6]{flex:1;overflow:hidden}',""]),e.exports=t},e408:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("4626"),a("fd3c"),a("bf0f");var o=n(a("2634")),i=n(a("2fdc")),r=n(a("b62a")),d=a("82b4"),s={data:function(){return{oldScrollTop:0,scrollTop:0,pageConfig:{backgroundColor:"#fff",templateTitle:"",datas:[]},hasTabbar:!0,tabbarConfig:{}}},components:{showPreivew:r.default},computed:{pageStyle:function(){return{background:this.pageConfig.backgroundColor}}},methods:{init:function(e){var t=this;return(0,i.default)((0,o.default)().mark((function a(){var n,i,r,s,l,f,c,u;return(0,o.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$u.api.getCustomTemplatePage({id:e});case 2:return n=a.sent,n&&(i=n.backgroundColor,r=n.templateConfigParams,s=n.templateTitle,t.pageConfig.backgroundColor=i,t.pageConfig.pageTitle=s,t.pageConfig.datas=JSON.parse(r),uni.setNavigationBarTitle({title:s})),a.next=6,t.$u.api.getDiy({category:"BOTTOM_MENU"});case 6:l=a.sent,t.tabbarConfig=JSON.parse(l.templateConfigParams)[0].config,f=getCurrentPages(),c=f[f.length-1],u=c.route,["diyPages/main/custom/index"].includes(u)&&(u=u+"?id="+c.options.id),t.hasTabbar=t.tabbarConfig.datas.some((function(e){return(0,d.getLinkByCode)(e.link)==="".concat(u)}));case 14:case"end":return a.stop()}}),a)})))()},scroll:function(e){this.oldScrollTop=e.detail.scrollTop}},mounted:function(){},onLoad:function(e){var t=this;e.token&&uni.setStorageSync("TESTTOKEN",e.token),this.$on("onLoginBack",(function(){setTimeout((function(){t.init(e.id)}),500)})),uni.$on("toTop",(function(){t.scrollTop=t.oldScrollTop,t.$nextTick((function(){this.scrollTop=0}))})),this.init(e.id)}};t.default=s}}]);