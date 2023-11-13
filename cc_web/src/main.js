import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import './assets/reset.less'
import './assets/base.less'

let app = createApp(App)
  .use(router)
  .mount('#app')


  app.config.errorHandler = (err) => {
    /* 处理错误 */
    console.log('error: ', err)
  }