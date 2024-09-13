// 手机容器
<template>
  <div class="phone-wrapper">
    <div class="diy-phone">
      <div class="text-overflow phone-header" @click="emit('select')">
        <div class="phone_title">{{ pageConfig.templateTitle }}</div>
      </div>
      <div class="custom-scroll-bar phone-body" :style="{'background-color': pageConfig.backgroundColor}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['select'])
const props = defineProps({
  pageConfig: Object
})

</script>

<style lang="scss" scoped>
.phone-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #F2F4F7;
}
.diy-phone{
  position: relative;
  $width: 375px;
  $height: 738px;
  width: $width;
  height: $height;
  border: 1px solid #ddd;
  margin-right: 20px;
  box-sizing: border-box;
  .phone-header{
    position: relative;
    height: 88px;
    background-image: url('../../assets/images/default/home-b.png');
    cursor: pointer;    
    .phone_title {
      position: absolute;
      width: 160px;
      height: 30px;
      left: calc(50% - 80px);
      top: calc(50% + 7px);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      mix-blend-mode: normal;
    }
  }
  .phone-body{
    position: relative;
    width: 100%;
    height: calc(100% - 88px);
    background-color: #F1F1F1;
    overflow: scroll;
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
