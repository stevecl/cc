<!-- 商品组件 通用  购物车按钮设置 -->
<template>
  <div v-if="showType !== 4">
    <div class="module-edit-title">{{ titleTxt }}</div>
    <el-radio-group v-model="item.show" style="margin-left: 10px;">
      <el-radio :value="true">显示</el-radio>
      <el-radio :value="false">隐藏</el-radio>
    </el-radio-group>
    <div class="config-wrapper">
      <div class="config-wrapper_item">
        <span class="label">样式</span>
        <div class="flex inner cars">
          <div class="cars_item" :class="{active: item.type === 'btn1'}" @click="item.type = 'btn1'" v-if="[1,2,3].includes(showType)">
            <img :src="getIcon('car1.png')" alt="">
          </div>
          <template v-if="componentName !== 'goodsScore'">
            <div class="cars_item" :class="{active: item.type === 'btn2'}" @click="item.type = 'btn2'">
              <img :src="getIcon('car2.png')" alt="">
            </div>
            <div class="cars_item" :class="{active: item.type === 'btn3'}" @click="item.type = 'btn3'">
              <img :src="getIcon('car3.png')" alt="">
            </div>
            <div class="cars_item" :class="{active: item.type === 'btn4'}" @click="item.type = 'btn4'">
              <img :src="getIcon('car4.png')" alt="">
            </div>
          </template>
        </div>
      </div>
      <div class="config-wrapper_item" v-if="['btn1'].includes(item.type)">
        <span class="label">文字</span>
        <div class="inner">
          <el-input v-model="item.text" style="width: 240px" placeholder="" maxlength="4" show-word-limit/>
        </div>
      </div>
      <div class="config-wrapper_item" v-if="['btn1', 'btn2'].includes(item.type)">
        <span class="label">颜色</span>
        <div class="inner">
          <selectColor v-model="item.color" :resetColor="'#ffffff'"></selectColor>
        </div>
      </div>
      <div class="config-wrapper_item" v-if="['btn1'].includes(item.type)">
        <span class="label">圆角</span>
        <div class="flex inner">
          <el-slider style="width: 240px;" v-model="item.borderRadius" :min="0" :max="20" :step="1" :show-tooltip="false"></el-slider>
          <span class="slide-span--unit">{{ item.borderRadius }}<span>px</span></span>
        </div>
      </div>
      <div class="config-wrapper_item" v-if="['btn1', 'btn2'].includes(item.type)">
        <span class="label">背景</span>
        <div class="inner">
          <selectColor v-model="item.bgColor" :resetColor="'#FF5555'"></selectColor>
        </div>
      </div>
      <div class="config-wrapper_item" v-if="['btn1', 'btn2'].includes(item.type)">
        <span class="label">边框</span>
        <div class="inner">
          <selectColor v-model="item.borderColor" :resetColor="'rgba(255,255,255,0)'"></selectColor>
        </div>
      </div>
      <div class="config-wrapper_item" v-if="['btn3'].includes(item.type)">
        <span class="label">颜色</span>
        <div class="inner">
          <selectColor v-model="item.carColor" :resetColor="'#ffffff'"></selectColor>
        </div>
      </div>
      <div class="config-wrapper_item">
        <span class="label">尺寸</span>
        <div class="inner">
          <el-radio-group v-model="item.size">
            <el-radio :value="'small'">小</el-radio>
            <el-radio :value="'middle'">中</el-radio>
            <el-radio :value="'big'">大</el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Object,
  showType: Number,
  componentName: String
})

const item = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const titleTxt = computed(() => props.componentName === 'goodsScore' ? '兑换按钮' : '购物车按钮')

watch(() => props.showType, newType => item.value.type = [1,2,3].includes(newType) ? 'btn1' : 'btn2')

const getIcon = file => (new URL(`../../../assets/images/default/${file}`, import.meta.url).href)

</script>

<style lang="scss" scoped>
.config-wrapper {
  position: relative;
  color: #999;
  padding: 10px 20px 10px 10px;
  // background: #f4f3f7;
  border-radius: 4px;
  // margin-top: 10px;
  // margin-bottom: 20px;
  &_item {
    display: flex;
    align-items: center;
    height: 30px;
    &:has(.cars) {
      margin-bottom: 20px!important;
    }
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
      .cars_item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
        margin-right: 20px;
        &.active {
          border-color: #FE6903;
        }
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}
</style>