<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ marginTop }}<span>px</span></span>
    </configItem>
    <configItem :label="'商品间距'">
      <el-slider style="width: 250px;" v-model="config.productConfig.goodSpace" :min="0" :max="20" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.productConfig.goodSpace }}<span>px</span></span>
    </configItem>
    <configItem :label="'商品圆角'">
      <el-slider style="width: 250px;" v-model="config.productConfig.goodRadius" :min="0" :max="30" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.productConfig.goodRadius }}<span>px</span></span>
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
      <selectColor v-model="config.productConfig.bgColor"></selectColor>
    </configItem>

    <div class="module-edit-title">标题</div>
    <el-radio-group v-model="config.titleConfig.show" style="margin-left: 10px;">
      <el-radio :value="true">显示</el-radio>
      <el-radio :value="false">隐藏</el-radio>
    </el-radio-group>
    <div class="config-wrapper">
      <div class="config-wrapper_item">
        <span class="label">文字</span>
        <div class="inner">
          <el-input v-model="config.titleConfig.text" style="width: 240px" placeholder="" maxlength="8" show-word-limit />
        </div>
      </div>
      <div class="config-wrapper_item">
        <span class="label">颜色</span>
        <div class="inner">
          <selectColor v-model="config.titleConfig.color" :resetColor="'#333'"></selectColor>
        </div>
      </div>
      <div class="config-wrapper_item">
        <span class="label">线条颜色</span>
        <div class="inner">
          <selectColor v-model="config.titleConfig.lineColor" :resetColor="'#333'"></selectColor>
        </div>
      </div>
      <div class="config-wrapper_item">
        <span class="label">图片</span>
        <div class="flex inner">
          <input type="text" class="cus-input" v-model="config.titleConfig.icon">
          <span class="cus-btn" @click="selectTitleImg">选择图片</span>
          <span class="cus-btn" @click="config.titleConfig.icon = ''">清除</span>
        </div>
      </div>
    </div>

    <setGoodsShowType v-model="config.productConfig.showType" componentName="goodsRanking"></setGoodsShowType>
    <setGoodsData v-model="config.dataConfig"></setGoodsData>
    <setGoodsBuyCar v-model="config.productConfig.car" :showType="config.productConfig.showType"></setGoodsBuyCar>

    <div class="module-edit-title">显示内容</div>
    <div class="content">
      <template v-for="(item, key) in config.productConfig.detail">
        <div class="content_item" v-if="['商品标题', '商品价格'].includes(item.name) || config.productConfig.showType <= 3">
          <el-checkbox v-model="item.show"></el-checkbox>
          <div class="name" @click="item.show = !item.show">{{ item.name }}</div>
          <selectColor v-model="item.style.color" :resetColor="item.style.resetColor" v-if="key !== 'tag'"></selectColor>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import useStyle from '@/hooks/useStyle';

const props = defineProps({
  config: Object
})

const { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectTitleImg = item => Bus.emit('selectImage', res => props.config.titleConfig.icon = res.picUrl)

</script>

<style lang="scss" scoped>
.config-wrapper {
  position: relative;
  color: #999;
  padding: 10px 20px 10px 10px;
  border-radius: 4px;
  &_item {
    display: flex;
    align-items: center;
    height: 30px;
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
    .label {
      width: 100px;
      text-indent: 10px;
    }
    .inner {
      flex: 1;
      height: 100%;
    }
  }
}

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
