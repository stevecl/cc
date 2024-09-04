import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 模块渲染组件
    const renderComponents = import.meta.glob('../*/index.vue')
    for (const [key, value] of Object.entries(renderComponents)) {
      const componentName = 'diy-' + key.replace('../', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(value))
    }
    // 模块配置面板
    const configComponents = import.meta.glob('../*/config.vue')
    for (const [key, value] of Object.entries(configComponents)) {
      const componentName = 'conf-' + key.replace('../', '').split('/')[0]
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