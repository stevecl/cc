<template>
  <div class="edit-module-floatButtons" :style="[boxStyle]">
    <div class="item" v-for="(item, index) in config.datas" :key="index" @click="handleButtonClick(item)">
      <span class="iconfont" :class="[item.icon]" v-if="config.showType === 1"></span>
      <img :src="item.img || getImgByName('default_picture.png')" alt="" v-if="config.showType === 2">
    </div>
  </div>
</template>

<script>
import { mixins } from '@/diyPages/utils/diyMixins.js'
export default {
  mixins: [mixins],
  props: {
    config: Object,
    hasTabbar: Boolean
  },
  data() {
    return {
      pagePosi:{
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }
    }
  },
  computed: {
    boxStyle() {
      let { top, bottom, left, right } = this.pagePosi
      let { iconSpace, iconColor, bgColor, marginTop, marginLeft } = this.config
      top = top + marginTop + 'px'
      // bottom = bottom + marginTop + 'px'
      bottom = this.hasTabbar ? `calc(160rpx + ${marginTop}px)` : bottom + marginTop + 'px'
      left = left + marginLeft + 'px'
      right = right + marginLeft + 'px'
      let _ = {
        // 左上角
        1: { top, left },
        // 右上角
        2: { top, right },
        // 右下角
        3: { bottom, right },
        // 左下角
        4: { bottom, left },
      }
      return {
        ..._[this.config.showPosi],
        '--space': iconSpace + 'px',
        '--color': iconColor,
        '--bgcolor': bgColor,
      }
    }
  },
  methods: {
    handleButtonClick(item) {
      console.log('item', item)
			if (item.link.name === '返回顶部') {
				uni.$emit('toTop')
			} else {
				this.handleClick(item.link)
			}
    }
  },
  mounted() {}
}

</script>

<style lang="scss" scoped>
.edit-module-floatButtons {
  position: fixed!important;
  z-index: 222;
  .item {
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 45px;
    font-size: 0;
    color: var(--color);
    background-color: var(--bgcolor);
    overflow: hidden;
    &:not(:last-of-type) {
      margin-bottom: var(--space)
    }
    .iconfont {
      font-size: 22px;
      &.icon-fanhuidingbunew {
        font-size: 28px;
      }
    }
  }
}
</style>