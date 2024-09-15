<!-- 通用  颜色选择器 -->
<template>
  <div class="diy-edit-colorpick">
    <el-color-picker v-model="currentColor" show-alpha/>
    <span class="diy-button" @click="reset">重置</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: String,
  resetColor: String
})

const currentColor = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const reset = () => {
  emit('update:modelValue', props.resetColor || '#fff')
}


</script>


<style lang="scss">
.diy-edit-colorpick {
  // width: 130px;
  display: flex;
  .el-color-picker {
    margin-right: 10px;
    .el-color-picker__trigger {
      width: 70px;
      height: 30px;
      border-color: #ededed;
      .el-icon {
        display: none;
      }
    }
    & + .diy-button {
      // border-left: none;
      // border-top-right-radius: 4px;
      // border-bottom-right-radius: 4px;
      border-radius: 4px;
      &:hover {
        // border-left: ;
        border-color: #c0c4cc
      }
    }
  }
}
</style>
