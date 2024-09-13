<template>
  <div class="flex layout">
    <div class="layout_left">
      <slideBar></slideBar>
    </div>
    <div class="flex-1 layout_right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import slideBar from './slideBar.vue'
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  &_left {
    // width: 200px;
    // border-right: 1px solid #eee;
  }
}
</style>