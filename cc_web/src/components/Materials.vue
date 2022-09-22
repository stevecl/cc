<template>
  <div class="material-wrap">
    <div class="title">物料库</div>
    <div v-for="item in material.materialList" :key="item.key">
      <div
        draggable="true"
        @dragstart="handleDragStart($event, item.key)"
        >
        <component :is="item.render()"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { material } from '../utils/options';

const handleDragStart = (event, key) => {
  event.dataTransfer.setData('key', key)
  console.log(key, event)
}
// console.log('material', material)
</script>

<style lang="less">
.material-wrap {
  width: 200px;
}
</style>