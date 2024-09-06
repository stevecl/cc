<template>
  <div class="edit-module-title" :style="styleObj">
    {{config.content}}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { bgStyle, style } = props.config
  bgStyle.background = `rgba(${bgStyle.bgColor.colorRgb()}, ${bgStyle.bgOpacity}) url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
  bgStyle.backgroundSize = '100% 100%'
  return {
    ...bgStyle,
    ...style
  }
})

</script>

<style lang="scss" scoped>
.edit-module-title {
  word-break: break-all;
}
</style>
