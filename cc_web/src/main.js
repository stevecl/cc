import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import './assets/reset.less'
import './assets/base.less'

let app = createApp(App)
  .use(router)
  .mount('#app')

  console.log('main js')