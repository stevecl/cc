<template>
  <div class="edit-module-floatButtons" :style="boxStyle">
    <div class="item" v-for="(item, index) in config.datas">
      <span class="iconfont" :class="[item.icon]" v-if="config.showType === 1"></span>
      <img :src="item.img || getDefaultImage('picture.png')" alt="" v-if="config.showType === 2">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import useDefaultSource from '@/hooks/useDefaultSource'

const { getDefaultImage } = useDefaultSource()
const props = defineProps({
  config: Object
})

const pagePosi = ref({
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
})

const boxStyle = computed(() => {
  let { top, bottom, left, right } = pagePosi.value
  let { iconSpace, iconColor, bgColor, marginTop, marginLeft } = props.config
  top = top + marginTop + 'px'
  bottom = bottom + marginTop + 'px'
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
    ..._[props.config.showPosi],
    '--space': iconSpace + 'px',
    '--color': iconColor,
    '--bgColor': bgColor,
  }
})

const updatePosi = () => {
  let { top, left, right, bottom, width } = document.querySelector('.phone-body').getBoundingClientRect()
  pagePosi.value.left = left
  pagePosi.value.top = top
  pagePosi.value.right = document.body.clientWidth - right
  pagePosi.value.bottom = document.body.clientHeight - bottom
  console.log('updatePosi')
}

onMounted(() => {
  updatePosi()
  window.addEventListener('resize', updatePosi)
})
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
    background-color: var(--bgColor);
    overflow: hidden;
    &:not(:last-of-type) {
      margin-bottom: var(--space)
    }
    .iconfont {
      font-size: 22px;
    }
  }
}
</style>