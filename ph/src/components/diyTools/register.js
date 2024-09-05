import { defineAsyncComponent } from 'vue'

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

export default {
  install(app) {
    // 模块渲染组件
    const renderComponents = import.meta.glob('../../material/*/index.vue')
    for (const [key, value] of Object.entries(renderComponents)) {
      const componentName = 'diy-' + key.replace('../../material/', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(value))
    }
    // 模块配置面板
    const configComponents = import.meta.glob('../../material/*/config.vue')
    for (const [key, value] of Object.entries(configComponents)) {
      const componentName = 'conf-' + key.replace('../../material/', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(value))
    }
    // 模块配置面板 工具组件
    const utilsComponents = import.meta.glob('./common/*.vue')
    for (const [key, value] of Object.entries(utilsComponents)) {
      const componentName = key.replace('./common/', '').replace('.vue', '')
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}