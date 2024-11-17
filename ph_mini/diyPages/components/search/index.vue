<template>
  <div class="edit-module-search" :style="[styleObj]">
    <span :class="['iconfont', config.left.icon]" :style="[leftStyle]" v-show="config.left.type" @click="handleClick(config.left.link)"></span>
    <div class="search-input">
      <input
        type="text"
        v-model="searchTxt"
        :style="[inputStyle]"
        @keydown.enter="defaultHandle"
        :placeholder="config.input.placeholder"
        >
    </div>
    <span :class="['iconfont', config.right.icon]" :style="[rightStyle]" v-show="config.right.type" @click="linkPage" ></span>
  </div>
</template>

<script>
import { mixins } from '@/diyPages/utils/diyMixins.js'

export default {
  mixins: [mixins],
  props: {
    config: Object
  },
  data() {
    return {
      searchTxt: ''
    }
  },
  computed: {
    styleObj() {
      let { bgColor, bgImageUrl } = this.config?.style || {}
      let background = `${bgColor} url(${bgImageUrl}) center / 100% 100% repeat`
      return {
        ...this.config.style,
        background
      }
    },
    inputStyle(){
      let { bgColor, borderRadius } = this.config?.input || {}
      let background = `${bgColor}`
      return {
        ...this.config.input,
        paddingLeft: this.config.left.type === 2 ? '72rpx' : '24rpx',
        background,
        borderRadius: borderRadius * 2 + 'rpx'
      }
    },
    leftStyle() {
      let { type, color } = this.config?.left || {}
      return {
        position: type === 2 ? 'absolute' : 'relative',
        left: type === 2 ? this.config.style.padding.split(' ')[1] : 'unset',
        color
      }
    },
    rightStyle() {
      let { type, color } = this.config?.right || {}
      return {
        position: type === 2 ? 'absolute' : 'relative',
        right: type === 2 ? this.config.style.padding.split(' ')[1] : 'unset',
        color
      }
    }
  },
  methods: {
    defaultHandle() { // 键盘前往
      console.log('默认跳转行为')
    },
    linkPage() {
      // 跳转类型 btnType: default link
      let { btnType, link } = this.config.right
      if (btnType === 'link') this.handleClick(link)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-module-search {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .iconfont {
    font-size: 36rpx;
    color: #fff;
    margin: 2rpx 20rpx 0;
  }
  .search-input {
    flex: 1;
    height: 72rpx;
    input{
      width: 100%;
      height: 100%;
      font-size: 28rpx;
      background-color: #D0D0D0;
      outline: none;
      border: none;
      padding-right: 28rpx;
      box-sizing: border-box;
    }
  }
}
</style>
