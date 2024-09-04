<template>
  <div>
    <div class="module-edit-title">模块设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.backgroundColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'元素高度'">
      <inputNumber v-model="height" :config="{min: 5, max: 400}"></inputNumber>
    </configItem>
    <configItem :label="'左右边距'">
      <inputNumber v-model="marginLeft"></inputNumber>
      <div class="label2">顶部间距</div>
      <inputNumber v-model="marginTop"></inputNumber>
    </configItem>
  </div>
</template>

<script setup>
import useStyle from '../utils/useStyle';

const props = defineProps({
  config: Object
})

const { height, marginTop, marginLeft } = useStyle(props)

</script>

<style lang="scss">
</style>
