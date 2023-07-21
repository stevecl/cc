// import './style.css'

console.log(1111)

// require('./common')
import('./common')
// require('./libs')
import('./libs')
import('./assets/base.less')
import { createApp } from 'vue'
import App from './views/home.vue'

createApp(App).mount('#app')