<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" color="red" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ marginTop }}<span>px</span></span>
    </configItem>
    <configItem :label="'上边距'" :labelWidth="70">
      <inputNumber v-model="paddingTop"></inputNumber>
      <div class="label2 wid70">左右边距(内)</div>
      <inputNumber v-model="paddingLeft"></inputNumber>
    </configItem>
    <configItem :label="'下边距'" :labelWidth="70">
      <inputNumber v-model="paddingBottom"></inputNumber>
      <div class="label2 wid70">左右边距(外)</div>
      <inputNumber v-model="marginLeft"></inputNumber>
    </configItem>

    <div class="module-edit-title">组件设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.backgroundColor" :resetColor="'#ededed'"></selectColor>
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
import useStyle from '@/hooks/useStyle';

const props = defineProps({
  config: Object
})

const { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

</script>

<style lang="scss">
.mr10 .el-radio {
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
}
</style>
