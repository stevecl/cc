<template>
  <div class="edit-module-single-chart" :style="styleObj">
    <el-image :src="item.url || getDefaultImage(item.defaultIcon)" v-for="(item, index) in config.datas" :key="index">
      <template #error>
        <div class="image-slot">
          <el-icon><Picture /></el-icon>
        </div>
      </template>
    </el-image>
</div>
</template>

<script setup>
import { computed } from 'vue'

import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let res = props.config?.style || {}
  res.background = `${res.bgColor} url(${res.bgImageUrl}) center / 100% 100% repeat`
  return res
})
</script>

<style lang="scss" scoped>
.edit-module-single-chart {
  display: flex;
  flex-direction: column;
  font-size: 0;
}
</style>