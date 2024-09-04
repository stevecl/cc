<template>
  <div class="diy-edit-colorpick">
    <!-- <colorPicker class="color-pick-custom" v-model="value" @change="handleChangeColor"></colorPicker> -->
    <color-picker v-model:hex="currentColor" :btnStyle="{ width: '80px', height: '30px' }" defaultColor="'#ededed'" :show-opacity="false"></color-picker>
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
  width: 130px;
  display: flex;
  // style1  按钮组
  &.style1 .color-pick-custom.m-colorPicker {
    border-left: none;
    border-radius: 0!important;;
  }
  // colorPicker style
  .color-pick-custom.m-colorPicker {
    width: 80px;
    height: 30px;
    padding: 5px;
    border: 1px solid #dcdfe6;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    .colorBtn {
      width: 100% !important;
      height: 100% !important;
      border: 1px solid #eee;
      border-radius: 3px;
    }
    .box{
      z-index: 1111;
      box-sizing: content-box;
    }
    & + .diy-button {
      border-color: #dcdfe6;
      border-left: none;
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
