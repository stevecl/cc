// 手机容器
<template>
  <div class="diy-phone">
    <div class="text-overflow phone-title" @click="emit('select')" :style="titleStyleObj">
      <div class="phone-head"></div>
      <div class="phone-icon"></div>
      {{ pageConfig.title }}
    </div>
    <div class="custom-scroll-bar phone-body" :style="{'background-color': pageConfig.bgColor}">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['select'])
const props = defineProps({
  pageConfig: Object
})

const titleStyleObj = computed(() => {
  let { titleColor, titleBgColor, titleBgImg } = props.pageConfig || {}
  return {
    color: titleColor,
    background: `${titleBgColor} url(${titleBgImg}) center / 100% 100% repeat`
  }
})
</script>

<style lang="scss" scoped>
.diy-phone{
  position: relative;
  $width: 382px;
  $height: 760px;
  width: $width;
  height: $height;
  background: url('@/assets/images/phone.png') no-repeat;
  background-size: 100% 100%;
  .phone-title{
    position: relative;
    height: 60px;
    line-height: 80px;
    font-size: 15px;
    color: #303133;
    font-weight: bold;
    text-align: center;
    padding: 0 50px;
    margin: 35px 44px 0 43px;
    border-top-left-radius: 22px;
    border-top-right-radius: 20px;
    cursor: default;
    .phone-head{
      position: absolute;
      left: 12px;
      top: 10px;
      width: 276px;
      height: 13px;
      background: url('@/assets/images/phone_top.png') no-repeat;
      background-size: 100% 100%;
      // margin-top: 30px;
    }
    .phone-icon{
      position: absolute;
      left: calc(50% - 75px);
      top: 0px;
      width: 148px;
      height: 26px;
      background: url('@/assets/images/phone_icon.png') no-repeat;
      background-size: 100% 100%;
      // margin-top: 30px;
    }
  }
  .phone-body{
    position: relative;
    width: $width - 87px;
    height: $height - 146px;
    margin-left: 43px;
    background-color: #F1F1F1;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    overflow: scroll;
  }
  .phone-footer{
    height: 24px;
    width: 60px;
    border: 1px solid #ddd;
    margin: 15px auto 5px;
  }
}

.custom-scroll-bar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
// .custom-scroll-bar::-webkit-scrollbar-thumb {
//   background-color: transparent;
// }
// .custom-scroll-bar:hover::-webkit-scrollbar-thumb {
//   background-color: #F2F2F3;
// }

</style>
