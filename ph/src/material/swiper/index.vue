<template>
  <div class="edit-module-swiper">
    <swiper
      :modules="modules"
      :pagination="paginationSet"
      :autoplay="autoPlaySet"
      :loop="true"
      :speed="1000"
      @swiper="onSwiper"
    >
      <swiper-slide class="swiper-slide" :style="boxStyle" v-for="item in config.datas">
        <el-image :src="item.url || getDefaultImage(item.defaultIcon)" :style="{ borderRadius: config.imgRadius + '%' }">
          <template #error>
            <div class="image-slot">
                <el-icon><Picture /></el-icon>
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

const { getDefaultImage, getImgRatio } = useDefaultSource()

const props = defineProps({
  config: Object
})

const boxStyle = computed(() => {
  let { bgStyle, style } = props.config
  let { imgRadius, imgRatio } = props.config
  bgStyle.background = `rgba(${bgStyle.bgColor.colorRgb()}, ${bgStyle.bgOpacity}) url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
  bgStyle.backgroundSize = '100% 100%'
  console.log('style', style)
  return {
    ...bgStyle,
    ...style,
    height: `calc(${imgWidth.value}px / ${getImgRatio(imgRatio)})`,
  }
})

const imgSize = computed(() => {
  let { imgRadius, imgRatio } = props.config
  return {
    // height: `calc(${imgWidth.value}px / ${getImgRatio(imgRatio)})`,
    // borderRadius: imgRadius + '%'
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
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

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
const imgWidth = ref(1)
onMounted(() => {
  setTimeout(() => {
    imgWidth.value = document.querySelector('.edit-module-swiper .swiper-slide').offsetWidth
    console.log('imgWidth.value', imgWidth.value)
  }, 1000)
})

</script>

<style lang="scss" scoped>
.edit-module-swiper {
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  align-items: center;
  // background-color: #fff;
  box-sizing: border-box;
  .swiper-slide {
    font-size: 0;
    overflow: hidden;
  }
}
</style>