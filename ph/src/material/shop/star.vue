<template>
  <div class="star" :style="{fontSize: starSet.fontSize + 'px'}">5星</div>
</template>

<script setup>
const props = defineProps({
  starSet: Object
})
</script>

<style lang="scss" scoped>
.star {
  display: inline;
  color: #FC6635;
}
</style>