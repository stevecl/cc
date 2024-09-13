<template>
  <div class="config-list-box">
    <div class="left-box" v-if="left !== false">
      <slot name="left"></slot>
    </div>
    <div class="right-box">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  left: true
})
</script>

<style lang="scss">
.config-list-box {
  position: relative;
  display: flex;
  width: 94%;
  height: auto;
  background: #F8FAFB;
  border: 1px solid #e7eaec;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  .left-box {
    position: relative;
    width: 70px;
    height: 70px;
    text-align: center;
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid #E7EAEC;
    border-radius: 5px;
    // overflow: hidden;
    .left-icon {
      position: relative;
      height: 68px;
      line-height: 48px;
      text-align: center;
      // overflow: hidden;
      p {
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        // background-color: #8f8f8f;
        background-color: rgba(0, 0, 0, .2);
        cursor: pointer;
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: top;
    }
  }
  .right-box {
    flex: 1;
    .input-no-border {
      border-left: none;
      border-right: none;
    }
    .right-icon {
      flex: 1;
      p {
        width: 100%;
        height: 30px;
        display: flex;
      }
      .label-text {
        flex-shrink: 0;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        color: #5D5D5D;
        border: 1px solid #dcdfe6;
        border-left: none;
        border-right: none;
        &:first-of-type{
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border-left: 1px solid #dcdfe6;
        }
        & ~ .cus-input {
          border-radius: 0;
          &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }
  }
  // 默认样式 right-icon left-icon
  .close {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    line-height: 24px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background-color: #959090;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #eb5252;
    }
  }
}
</style>