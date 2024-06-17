// import './style.css'
import('./assets/base.less')

import { createApp } from 'vue'
import App from './views/home.vue'

createApp(App).mount('#app')

import * as _ from 'lodash'
console.log(_)

require('jquery')