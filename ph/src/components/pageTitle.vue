<template>
  <div class="positon-box">
    <span class="text">当前位置：</span>
    <span class="posi">{{ title }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
})

</script>

<style lang="scss" scoped>
.positon-box {
  font-size: 12px;
  text-align: left;
  margin-bottom: 20px;
  .text {
    color: #909399;
  }
  .posi {
    color: #606266;
  }
}
</style>