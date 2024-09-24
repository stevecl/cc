<template>
  <view
    :style="[boxStyle]"
    class="edit-module-picture-show"
    @click="$emit('click', $event)">
      <view
        class="edit-module-picture-show_item"
        v-for="(item, index) in config.datas"
        :key="index">
        <view class="box">
          <img class="img" :src="item.icon || getDefaultImage(item.defaultIcon)">
          <view class="text-overflow sup-title" :style="[config.supStyle]">{{item.supTitle}}</view>
        </view>
        <view class="text-overflow sub-title" :style="[config.subStyle]">{{item.subTitle}}</view>
      </view>
  </view>
</template>

<script>
export default {
  props: {
    config: Object
  },
  computed: {
    boxStyle() {
      let { bgStyle, style } = this.config
      bgStyle.background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
      bgStyle.backgroundSize = '100% 100%'
      return {
        ...bgStyle,
        ...style,
      }
    }
  }
}

</script>

<style lang="scss" scoped>

.edit-module-picture-show {
  display: flex;
  overflow-x: auto;
  &_item {
    &:not(:last-of-type) {
      margin-right: 12px;
    }
    .box {
      position: relative;
      .img {
        width: 128px;
        height: 128px;
      }
      .sup-title {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        padding: 0 6px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
    p.sub-title {
      width: 100%;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      padding: 0 6px;
    }
  }
}

</style>