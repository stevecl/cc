<template>
  <div class="edit-module-video" :style="styleObj">
    <div class="main">
      <video class="main_video" ref="video" :src="config.videoSrc"></video>
      <div class="poster-wrap" v-if="config.poster && isShowPoster" @click="handlePlay">
        <img :src="config.poster" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { bgStyle, style } = props.config
  bgStyle.background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
  bgStyle.backgroundSize = '100% 100%'
  return {
    ...bgStyle,
    ...style
  }
})

const video = ref(null)
const isShowPoster = ref(true)
const handlePlay = () => {
  isShowPoster.value = false
  video.value.play()
}
</script>

<style lang="scss" scoped>

.edit-module-video {
  display: flex;
  align-items: center;
  justify-content: center;
  .main {
    position: relative;
    width: 100%;
    height: 211px;
    &_video {
      width: 100%;
      height: 100%;
    }
    .poster-wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('../../assets/images/default/play.png');
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 60px;
        z-index: 2;
      }
    }
  }
}
</style>
