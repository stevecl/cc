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

    <div class="module-edit-title">圆角设置</div>
    <configItem :label="'组件圆角'">
      <el-slider style="width: 250px;" v-model="config.imgRadiusSet.item" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{config.imgRadiusSet.item}}<span>px</span></span>
    </configItem>
    <configItem :label="'门店图片'">
      <el-slider style="width: 250px;" v-model="config.imgRadiusSet.shop" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{config.imgRadiusSet.shop}}<span>px</span></span>
    </configItem>
    <configItem :label="'商品图片'">
      <el-slider style="width: 250px;" v-model="config.imgRadiusSet.product" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{config.imgRadiusSet.product}}<span>px</span></span>
    </configItem>

    <div class="module-edit-title">颜色设置</div>
    <configItem :label="'底部背景'">
      <selectColor v-model="config.contentSet.bg.bgColor" :resetColor="'#F5F8FB'"></selectColor>
    </configItem>
    <configItem :label="'组件背景'">
      <selectColor v-model="config.contentSet.item.bgColor" :resetColor="'#fff'"></selectColor>
    </configItem>
    <configItem :label="'门店名称'">
      <el-checkbox v-model="config.contentSet.name.show" label="显示" size="large" />
      <div style="margin: 0 10px 0 20px;">字号</div>
      <inputNumber v-model="config.contentSet.name.fontSize"></inputNumber>
      <selectColor v-model="config.contentSet.name.color" :resetColor="'#2F3033'" style="margin-left: 20px;"></selectColor>
    </configItem>
    <configItem :label="'门店地址'">
      <el-checkbox v-model="config.contentSet.adress.show" label="显示" size="large" />
      <div style="margin: 0 10px 0 20px;">字号</div>
      <inputNumber v-model="config.contentSet.adress.fontSize"></inputNumber>
      <selectColor v-model="config.contentSet.adress.color" :resetColor="'#626260'" style="margin-left: 20px;"></selectColor>
    </configItem>
    <configItem :label="'星级'">
      <el-checkbox v-model="config.contentSet.star.show" label="显示" size="large" />
      <div style="margin: 0 10px 0 20px;">字号</div>
      <inputNumber v-model="config.contentSet.star.fontSize"></inputNumber>
      <selectColor v-model="config.contentSet.star.color" :resetColor="'#FC6635'" style="margin-left: 20px;"></selectColor>
    </configItem>
    <configItem :label="'评价'">
      <el-checkbox v-model="config.contentSet.appraise.show" label="显示" size="large" />
      <div style="margin: 0 10px 0 20px;">字号</div>
      <inputNumber v-model="config.contentSet.appraise.fontSize"></inputNumber>
      <selectColor v-model="config.contentSet.appraise.color" :resetColor="'#626260'" style="margin-left: 20px;"></selectColor>
    </configItem>
    <configItem :label="'人均'">
      <el-checkbox v-model="config.contentSet.per.show" label="显示" size="large" />
      <div style="margin: 0 10px 0 20px;">字号</div>
      <inputNumber v-model="config.contentSet.per.fontSize"></inputNumber>
      <selectColor v-model="config.contentSet.per.color" :resetColor="'#626260'" style="margin-left: 20px;"></selectColor>
    </configItem>
    <configItem :label="'介绍'">
      <el-checkbox v-model="config.contentSet.intro.show" label="显示" size="large" />
      <div style="margin: 0 10px 0 20px;">字号</div>
      <inputNumber v-model="config.contentSet.intro.fontSize"></inputNumber>
      <selectColor v-model="config.contentSet.intro.color" :resetColor="'#626260'" style="margin-left: 20px;"></selectColor>
    </configItem>
    <!-- 
    <configItem :label="'组件背景'">
      <selectColor v-model="config.colorSet.itemBg" :resetColor="'#fff'"></selectColor>
    </configItem>
    <configItem :label="'门店地址'">
      <selectColor v-model="config.colorSet.adress" :resetColor="'#626260'"></selectColor>
    </configItem> -->
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
