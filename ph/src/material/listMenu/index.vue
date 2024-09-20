<template>
  <div class="edit-module-list-nav" :style="styleObj">
      <div
        class="item-box"
        :style="itemStyle"
        v-for="(item, index) in config.datas"
        :key="index"
        >
        <p class="text-overflow text" :style="textStyle">
          <span :class="[item.icon ? `iconfont ${item.icon}` : '']" :style="{'color': config.iconColor, fontSize: config.iconFontSize + 'px'}"></span>
          <span>{{item.text}}</span>
        </p>
        <p class="right-box">
          <span class="alert" :style="rightTextStyle">{{item.alert}}</span>
          <span class="iconfont icon-more" v-show="config.hasIcon" :style="rightIconStyle"></span>
        </p>
      </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { style = {}, textColor, borderRadius } = props.config
  style.background = `${style.bgColor} url(${style.bgImageUrl}) center / 100% 100% repeat`
  style.borderRadius = borderRadius + 'px'
  return style
})

// 行样式
const itemStyle = computed(() => {
  let { height } = props.config
  return {
    height: height + 'px',
    lineHeight: height + 'px',
  }
})

// 主文字样式
const textStyle = computed(() => {
  let { textColor, textAlign, fontWeight } = props.config
  return {
    fontWeight: fontWeight,
    color: textColor,
    justifyContent: textAlign === 'left' ? 'flex-start' : 'center',
  }
})

// 右侧文字样式
const rightTextStyle = computed(() => {
  let { rightStyle } = props.config
  return {
    fontSize: rightStyle.fontSize + 'px',
    color: rightStyle.textColor
  }
})

// 右侧图标样式
const rightIconStyle = computed(() => {
  let { rightStyle } = props.config
  return {
    fontSize: rightStyle.iconSize + 'px',
    color: rightStyle.iconColor
  }
})

</script>

<style lang="scss" scoped>
.edit-module-list-nav {
  display: flex;
  flex-direction: column;
  div.item-box {
    width: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
    min-height: 30px;
    &:last-of-type {
      border-bottom: none!important
    }
    .text {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      span.iconfont {
        margin: 0 10px 0 0;
      }
    }
    .right-box {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
