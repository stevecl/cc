<template>
  <div class="edit-module-floatButtons" :style="boxStyle">
    浮动按钮{{ pagePosi.left }}
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const pagePosi = ref({
  left: 0,
  top: 0
})

const boxStyle = computed(() => {
  return {
    left: pagePosi.value.left + 'px',
    top: pagePosi.value.top + 'px'
  }
})

const updatePosi = () => {
  let { top, left } = document.querySelector('.phone-body').getBoundingClientRect()
  pagePosi.value.left = left
  pagePosi.value.top = top
  console.log('updatePosi')
}

onMounted(() => {
  updatePosi()
  window.addEventListener('resize', updatePosi)
})
</script>

<style lang="scss" scoped>
.edit-module-floatButtons {
  position: fixed!important;
  z-index: 2;
}
</style>