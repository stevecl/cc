<template>
  <div class="edit-module-assist-line" :style="styleObj">
    <div :style="lineStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let res = props.config?.style || {}
  // res.background = `${res.background} url(${props.config.bgImageUrl}) center / 100% 100% repeat`
  return res
})

const lineStyle = computed(() => {
  let conf = props.config
  return {
    borderTop: `${conf.height}px ${conf.type} ${conf.lineColor}`
  }
})

</script>

<style lang="scss" scoped>
.edit-module-assist-line {
  display: flex;
  align-items: center;
  min-height: 10px;
  div {
    width: 100%;
    height: 100%;
  }
}
</style>
