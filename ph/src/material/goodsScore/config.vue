<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ marginTop }}<span>px</span></span>
    </configItem>
    <configItem :label="'商品间距'">
      <el-slider style="width: 250px;" v-model="config.itemStyle.goodSpace" :min="0" :max="20" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.itemStyle.goodSpace }}<span>px</span></span>
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
    <configItem :label="'底部背景'">
      <selectColor v-model="config.style.background" :resetColor="'#fff'"></selectColor>
      <div class="label2 wid70">商品背景</div>
      <selectColor v-model="config.itemStyle.goodBgColor"></selectColor>
    </configItem>

    <setGoodsShowType v-model="config.showType" componentName="goodsScore"></setGoodsShowType>
    <setGoodsBuyCar v-model="config.carConfig" :showType="config.showType" componentName="goodsScore"></setGoodsBuyCar>

    <div class="module-edit-title">显示内容</div>
    <div class="content">
      <template v-for="(item, key) in config.detailConfig">
        <div class="content_item" v-if="['商品标题', '商品价格'].includes(item.name) || config.showType <= 3">
          <el-checkbox v-model="item.show"></el-checkbox>
          <div class="name" @click="item.show = !item.show">{{ item.name }}</div>
          <selectColor v-model="item.style.color" :resetColor="item.style.resetColor" v-if="key !== 'tag'"></selectColor>
        </div>
      </template>
    </div>

    <div class="module-edit-title">选择商品 </div>
    <configItem :label="'展示商品'">
      <el-radio-group v-model="config.showType">
        <el-radio :value="1">手动选择</el-radio>
        <el-radio :value="2">商品分类</el-radio>
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

<style lang="scss" scoped>

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  &_item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 18px;
    .name {
      width: 100px;
      margin-left: 4px;
      cursor: pointer;
    }
  }
}
</style>
