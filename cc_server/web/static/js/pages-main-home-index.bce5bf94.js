(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-home-index"],{"0c87":function(n,t,e){var a=e("61c4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("967d").default;i("af58d78a",a,!0,{sourceMap:!1,shadowMode:!1})},"0f8c":function(n,t,e){"use strict";e.r(t);var a=e("c41a"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"3a98":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-textarea",{staticClass:"ele",attrs:{name:"",id:"",cols:"10",rows:"10",placeholder:"token",maxlength:"-1"},model:{value:n.token,callback:function(t){n.token=t},expression:"token"}}),e("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.handleUpdate.apply(void 0,arguments)}}},[n._v("更新TOKEN")]),e("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.handleClick.apply(void 0,arguments)}}},[n._v("跳转")])],1)},i=[]},"42a5":function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{token:""}},mounted:function(){this.token=uni.getStorageSync("TESTTOKEN")},methods:{handleUpdate:function(){uni.setStorageSync("TESTTOKEN",this.token)},handleClick:function(){uni.navigateTo({url:"/diyPages/main/index/index"})}}};t.default=a},"5cf7":function(n,t,e){var a=e("c86c");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/**\r\n * 本次开发主题色\r\n */.custom-container .title[data-v-2a00775d]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);white-space:nowrap;text-align:center}',""]),n.exports=t},"61c4":function(n,t,e){var a=e("c86c");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n/**\r\n * 本次开发主题色\r\n */.wrap[data-v-6a22426b]{width:100%;display:flex;flex-direction:column;align-items:center;margin-top:%?100?%}.wrap .ele[data-v-6a22426b]{width:100%;border:1px solid red;box-sizing:border-box;padding:%?20?%}.wrap .btn[data-v-6a22426b]{width:100px;height:30px;line-height:30px;text-align:center;border:1px solid #eee;border-radius:4px;margin-top:%?50?%}',""]),n.exports=t},8911:function(n,t,e){"use strict";e.r(t);var a=e("d557"),i=e("0f8c");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("ef18");var u=e("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"2a00775d",null,!1,a["a"],void 0);t["default"]=c.exports},"9bfa":function(n,t,e){"use strict";e.r(t);var a=e("3a98"),i=e("c612");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("a9d6");var u=e("828b"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6a22426b",null,!1,a["a"],void 0);t["default"]=c.exports},a9d6:function(n,t,e){"use strict";var a=e("0c87"),i=e.n(a);i.a},bcb5:function(n,t,e){var a=e("5cf7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("967d").default;i("3042dd7a",a,!0,{sourceMap:!1,shadowMode:!1})},c41a:function(n,t,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("9bfa")),o={data:function(){return{isLogin:!1}},onShow:function(){this.isLogin=!!this.vuex_tel},onLoad:function(){},onReachBottom:function(){},onPullDownRefresh:function(){},onPageScroll:function(n){},components:{testVue:i.default},methods:{loginHandle:function(){uni.navigateTo({url:"/pages/main/base/login/login"})},logoutHandle:function(){var n=this;uni.showModal({title:"温馨提示",content:"确定要退出登录吗？",success:function(t){if(t.confirm){for(var e=0,a=["vuex_userId","vuex_accountId","vuex_avatar","vuex_nickname","vuex_token","vuex_accountType"];e<a.length;e++){var i=a[e];n.$u.vuex(i,"")}n.isLogin=!1}}})}}};t.default=o},c612:function(n,t,e){"use strict";e.r(t);var a=e("42a5"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},d557:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"custom-container safe-area-inset-bottom"},[n.isLogin?e("v-uni-view",{staticClass:"title",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.logoutHandle.apply(void 0,arguments)}}},[e("v-uni-view",[n._v("您已登录，账号为"+n._s(n.vuex_tel))]),e("v-uni-view",[n._v("点击我，退出登录")])],1):e("v-uni-view",{staticClass:"title",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.loginHandle.apply(void 0,arguments)}}},[n._v("点击我，跳转登录")]),e("testVue")],1)},i=[]},ef18:function(n,t,e){"use strict";var a=e("bcb5"),i=e.n(a);i.a}}]);