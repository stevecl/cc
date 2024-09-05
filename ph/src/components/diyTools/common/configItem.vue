<template>
  <div class="config-edit-item">
    <div class="label" :style="{color: color, width: labelWidth +'px' }">
      <span style="color: red;" v-if="isRequire">*</span>
      {{label}}
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: '#5D5D5D'
  },
  isRequire: {
    type: Boolean,
    default: () => false
  }
})
</script>

<style lang="scss" >
.config-edit-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #606266;
  margin-bottom: 15px;
  .label {
    width: 50px;
    margin: 0 10px 0 16px;
  }
  .label2 {
    width: 50px;
    margin: 0 10px 0 60px;
    &.wid70 {
      width: 70px;
    }
  }
}
</style>