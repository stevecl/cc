<template>
  <div class="edit-module-swiper" :style="boxStyle">
    <swiper
      :modules="modules"
      :pagination="paginationSet"
      :autoplay="autoPlaySet"
      :loop="true"
      :speed="1000"
      @swiper="onSwiper"
    >
      <swiper-slide class="swiper-slide" :style="itemStyle" v-for="(item, index) in config.datas">
        <el-image class="img" :src="item.url || 't'" fit="contain">
          <template #error>
            <div class="image-slot">
              <img :src="getDefaultImage(config.imgRatio === '1/1' ? 'picture.png' : 'banner.png')" alt="">
            </div>
          </template>
        </el-image>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, watch, computed, nextTick, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const boxStyle = computed(() => {
  let { bgStyle, style } = props.config
  bgStyle.background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
  bgStyle.backgroundSize = '100% 100%'
  return {
    ...bgStyle,
    ...style,
  }
})

const itemStyle = computed(() => {
  let { imgRadius, imgRatio } = props.config
  return {
    paddingTop: 100 / (imgRatio.split('/')[0] / imgRatio.split('/')[1] )+ '%',
    borderRadius: imgRadius + '%'
  }
})

const autoPlaySet = ref({
  delay: 2000,
  stopOnLastSlide: false,
  disableOnInteraction: false,
})
const paginationSet = computed(() => {
  let config = props.config.indicator
  return {
    enabled: config.show,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" style="background: ${config.color};"></span>`;
    }
  }
})

const modules = ref([ Autoplay, Pagination, EffectFade ])

const swiperRef = ref(null)
const onSwiper = swiper => swiperRef.value = swiper

watch(() => props.config.datas.length, newVal => {
  nextTick(() => {
    swiperRef.value.slideNext()
  })
})

watch(() => props.config.indicator.color, newVal => {
  nextTick(() => {
    props.config.indicator.show && swiperRef.value.pagination.render()
  })
})
onMounted(() => {

})

</script>

<style lang="scss" scoped>
.edit-module-swiper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  .swiper-slide {
    display: flex;
    position: relative;
    font-size: 0;
    overflow: hidden;
    min-height: 100px;
    border: 1px solid transparent;
    .img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>