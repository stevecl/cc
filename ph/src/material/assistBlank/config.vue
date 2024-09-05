<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <inputNumber v-model="marginTop"></inputNumber>
      <div class="label2">左右边距</div>
      <inputNumber v-model="marginLeft"></inputNumber>
    </configItem>

    <div class="module-edit-title">组件设置</div>
    <configItem :label="'元素高度'">
      <inputNumber v-model="height" :config="{min: 5, max: 200}"></inputNumber>
    </configItem>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.backgroundColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
  </div>
</template>

<script setup>
import useStyle from '@/hooks/useStyle';

const props = defineProps({
  config: Object
})

const { height, marginTop, marginLeft } = useStyle(props)

</script>

<style lang="scss">
</style>
