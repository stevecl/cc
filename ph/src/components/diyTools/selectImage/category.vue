<template>
  <div class="custom-headers-style">
    <span :class="{'active': selectType === 'local'}" @click="switchType('local')">图片公库</span>
    <!-- <span :class="{'active': selectType === 'net'}" @click="switchType('net')">提取网络图片</span> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectType = ref('local')
const switchType = type => {
  if (selectType.value === type) return
  selectType.value = type
}

</script>

<style lang="scss" scoped>
.custom-headers-style {
  font-size: 14px;
  text-align: left;
  span {
    position: relative;
    margin-right: 20px;
    padding: 0 10px;
    cursor: pointer;
    &::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: -11px;
      width: 100%;
      height: 2px;
      background-color: transparent;
      z-index: 22;
    }
    &:hover {
      color: var(--lightColor);
      &::after {
        display: none;
        background-color: var(--lightColor);
      }
    }
  }
  span.active {
    font-size: 18px;
    color: var(--lightColor);
    &::after{
      display: block;
      background-color: var(--lightColor);
    }
  }
}
</style>