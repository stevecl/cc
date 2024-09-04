import { createApp } from 'vue'
import { createPinia } from "pinia";
import router from './router'
import App from './App.vue'

// 通用样式
import '@/assets/style/reset.scss'
import '@/assets/style/base.scss'
import '@/assets/style/diy-config.scss'
import '@/assets/style/element-cover.scss'
// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import colorpicker from 'colorpicker-v3'
import 'colorpicker-v3/style.css'

// 动态注入所有装修模块
import autoRegister from './material/utils/register.js'
// 注册eventEmitter事件
import EventEmitter from './utils/EventEmitter.js';
window.Bus = new EventEmitter()

const pinia = createPinia()
const app = createApp(App)

// 自定义指令
import directive from './directive';
directive(app);

// register element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(autoRegister)
app.use(colorpicker)
app.mount('#app')

// 颜色处理
String.prototype.colorRgb = function(){
  var sColor = this.toLowerCase();
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i=1; i<4; i+=1) {
          sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    
      }
      sColor = sColorNew;
      }
      //处理六位的颜色值
      var sColorChange = [];
      for (var i=1; i<7; i+=2) {
      sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    
      }
      return sColorChange.join(",");
  }
  return sColor;
};
