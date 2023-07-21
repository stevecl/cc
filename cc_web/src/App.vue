<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Materials from './components/Materials.vue';
import PlayGround from './components/PlayGround.vue';
import Test2 from './components/Test.vue'

import globalData from './utils/data'
const refData = ref(globalData)

axios.get('/api/test').then(res => {
  console.log('res', res)
})
axios.post('/api/news').then(res => {
  console.log('res', res)
})

</script>

<template>
  <router-view />
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>