import { createApp } from 'vue'
import router from '@/router/index.js'
import App from './App.vue'

import '@/assets/style/reset.scss'
import '@/assets/style/base.scss'

const app = createApp(App)
app.use(router)
   .mount('#app')
