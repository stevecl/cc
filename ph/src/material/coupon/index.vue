<template>
  <div class="edit-module-coupon" :class="[`type${config.type}`]" :style="styleObj" @click="$emit('click', $event)">
    <template v-if="config.type === 1">
      <couponType1 v-for="item in config.datas" :style="getColor(item)"></couponType1>
    </template>
    <template v-if="config.type === 2">
      <couponType2 v-for="item in config.datas" :style="getColor(item)"></couponType2>
    </template>
  </div>
</template>

<script setup>
import couponType1 from './couponType1.vue'
import couponType2 from './couponType2.vue'
import { computed } from 'vue'

import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let res = props.config?.style || {}
  res.background = `${res.bgColor} url(${res.bgImageUrl}) center / 100% 100% repeat`
  return {
    ...res,
    '--itemSpace': res.itemSpace + 'px',
  }
})

const getColor = ({ color, bgColor }) => {
  return {
    '--couponbgcolor': props.config?.style?.bgColor,
    '--color': color,
    '--bgColor': bgColor
  }
}

</script>

<style lang="scss" scoped>
.edit-module-coupon {
  overflow: hidden;
  border-radius: .1rem;
  &.type1 {
    .coupon-item:not(:last-of-type) {
      margin-bottom: var(--itemSpace);
    }
  }
  &.type2 {
    display: flex;
    flex-wrap: wrap;
    gap: var(--itemSpace);
  }
}
</style>
