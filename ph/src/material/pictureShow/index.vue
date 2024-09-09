<template>
  <div
    :style="boxStyle"
    class="edit-module-picture-show"
    @click="$emit('click', $event)">
      <div
        class="edit-module-picture-show_item"
        v-for="(item, index) in config.datas"
        :key="index"
        @click="linkTo(item.link)">
        <div class="box">
          <img class="img" :src="item.icon || getDefaultImage(item.defaultIcon)">
          <p class="text-overflow sup-title" :style="getSupStyle">{{item.supTitle}}</p>
        </div>
        <p class="text-overflow sub-title" :style="getSubStyle">{{item.subTitle}}</p>
      </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import useDefaultSource from '@/hooks/useDefaultSource'
const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const boxStyle = computed(() => {
  let { bgStyle, style } = props.config
  bgStyle.background = `rgba(${bgStyle.bgColor.colorRgb()}, ${bgStyle.bgOpacity}) url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
  bgStyle.backgroundSize = '100% 100%'
  return {
    ...bgStyle,
    ...style,
  }
})

const getSupStyle = computed(() => props.config.supStyle)
const getSubStyle = computed(() => props.config.subStyle)

</script>

<style lang="scss" scoped>

.edit-module-picture-show {
  display: flex;
  overflow: hidden;
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
  // .btn-page {
  //   width: 100%!important;
  //   display: flex;
  //   flex-wrap: wrap;
  //   & > div {
  //     position: relative;
  //     div.image {
  //       position: relative;
  //       font-size: 0;
  //       width: 100%;
  //       height: 100%;
  //       img {
  //         width: 100%;
  //         // height: 100%;
  //       }

  //     }

  //   }
  // }
}

</style>