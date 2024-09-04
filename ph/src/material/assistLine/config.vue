<template>
  <div>
    <div class="module-edit-title">模块设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.backgroundColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'左右边距(内)'" :labelWidth="70">
      <inputNumber v-model="paddingLeft"></inputNumber>
      <div class="label2">上下边距</div>
      <inputNumber v-model="paddingTop"></inputNumber>
    </configItem>
    <configItem :label="'左右边距(外)'" :labelWidth="70">
      <inputNumber v-model="marginLeft"></inputNumber>
      <div class="label2">顶部间距</div>
      <inputNumber v-model="marginTop"></inputNumber>
    </configItem>

    <div class="module-edit-title">线条元素</div>
    <configItem :label="'高度'">
      <inputNumber v-model="config.height"></inputNumber>
      <div class="label2">颜色</div>
      <selectColor v-model="config.lineColor" :resetColor="'#000'"></selectColor>
    </configItem>
    <configItem :label="'线条样式'">
      <el-radio-group v-model="config.type" class="mr10">
        <el-radio :value="'solid'">实线</el-radio>
        <el-radio :value="'dashed'">虚线(矩形)</el-radio>
        <el-radio :value="'dotted'">虚线(圆点)</el-radio>
        <el-radio :value="'double'">双实线</el-radio>
      </el-radio-group>
    </configItem>
  </div>
</template>

<script setup>
import useStyle from '../utils/useStyle';

const props = defineProps({
  config: Object
})

const { marginTop, marginLeft, paddingTop, paddingLeft } = useStyle(props)

</script>

<style lang="scss">
.mr10 .el-radio {
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
}
</style>
