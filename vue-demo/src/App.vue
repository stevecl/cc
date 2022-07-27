<script setup>
import { ref } from 'vue'
import Materials from './components/Materials.vue';
import PlayGround from './components/PlayGround.vue';
import Test2 from './components/Test.vue'

import globalData from './utils/data'
const refData = ref(globalData)
</script>

<template>
  <div class="flex warp">
    <div class="left">
      <Materials></Materials>
    </div>
    <div class="main">
      <div class="main_title">标题栏</div>
      <div class="main_content">
        <PlayGround v-model="refData"></PlayGround>
      </div>
    </div>
    <div class="right">
      设置栏
      <Test2></Test2>
    </div>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="less" scoped>
.warp {
  width: 100%;
  height: 100%;
  .left, .right {
    width: 100px;
    background-color: #999;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    &_title {
      // color: red;
    }
    &_content {
      flex: 1;
    }
  }
}
</style>
