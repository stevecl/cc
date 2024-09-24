<template>
  <view class="edit-module-swiper" :style="[boxStyle]">
    <swiper
      class="swiper"
      :style="[imgSize]"
      circular
      :indicator-dots="state.indicatorDots"
      :indicator-color="state.indicatorColor"
      :indicator-active-color="state.indicatorActiveColor"
      :autoplay="state.autoplay"
      :interval="state.interval"
      :duration="state.duration">
      <swiper-item
        class="flex slide-box"
        v-for="(item, index) in config.datas"
        :key="index"
        @click="handleClick(item.link)">
        <image class="image" :src="item.url" :style="{ borderRadius: config.imgRadius + '%' }"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { mixins } from '@/common/diyMixins'
export default {
  mixins: [mixins],
  props: {
    config: Object
  },
  data() {
    return {
      imgWidth: 200,
      state: {
        indicatorDots: this.config.indicator.show,
        indicatorColor: `${this.config.indicator.color}`,
        indicatorActiveColor: this.config.indicator.color,
        autoplay: true,
        interval: 2000,
        duration: 500
      }
    }
  },
  computed: {
    boxStyle() {
      let { bgStyle, style } = this.config
      bgStyle.background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
      bgStyle.backgroundSize = '100% 100%'
      return {
        ...bgStyle,
        ...style
      }
    },
    imgSize() {
      return {
        height: `calc(${this.imgWidth}px / ${ 1 / 1 })`
      }
    }
  },
  mounted() {
    uni.createSelectorQuery().in(this)
      .select('.slide-box') // 获取界面元素，也可以传id
      .boundingClientRect((data) => {
        const nodeInfo = data
        this.imgWidth = data.width
      })
      .exec()
  }
}

</script>

<style lang="scss" scoped>
.swiper {
  .slide-box {
    width: 100%;
    box-sizing: border-box;
    .image {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
    .image-box {
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>