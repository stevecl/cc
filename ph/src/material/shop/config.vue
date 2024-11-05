<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
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

    <div class="module-edit-title">门店设置</div>
    <setShopData v-model="config.dataConfig"></setShopData>
    <configItem :label="'样式'">
      <el-radio-group v-model="config.type">
        <el-radio :value="1">样式一</el-radio>
        <el-radio :value="2">样式二</el-radio>
      </el-radio-group>
    </configItem>

    <div class="module-edit-title">颜色设置</div>
    <configItem :label="'底部背景'">
      <selectColor v-model="config.colorSet.background" :resetColor="'#F5F8FB'"></selectColor>
    </configItem>
    <configItem :label="'组件背景'">
      <selectColor v-model="config.colorSet.itemBg" :resetColor="'#fff'"></selectColor>
    </configItem>
    <configItem :label="'门店名称'">
      <selectColor v-model="config.colorSet.name" :resetColor="'#2F3033'"></selectColor>
    </configItem>
    <configItem :label="'门店地址'">
      <selectColor v-model="config.colorSet.adress" :resetColor="'#626260'"></selectColor>
    </configItem>
    <div class="diy-edit-line"></div>
  </div>
</template>

<script setup>
import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

let { fontSize, marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectBgImg = () => Bus.emit('selectImage', res => props.config.bgStyle.bgImageUrl = res.picUrl)
const selectLink = () => Bus.emit('selectLink', link => props.config.link = link)

</script>

<style lang="scss">
</style>
