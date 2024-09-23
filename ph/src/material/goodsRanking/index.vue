<template>
  <div class="edit-module-goodsRanking" :style="config?.style">
    <div class="title" v-if="config.titleConfig.show">
      <div class="line line_left" :style="leftLineStyle"></div>
      <div class="txt">
        <img :src="config.titleConfig.icon || getIcon('goodsRanking.png')" alt="">
        <span :style="{color: config.titleConfig.color}">{{ config.titleConfig.text }}</span>
      </div>
      <div class="line line_right" :style="rightLineStyle"></div>
    </div>
    <list3 :config="config" v-if="config.productConfig.showType === 3"></list3>
    <list4 :config="config" v-if="config.productConfig.showType === 4"></list4>
    <list6 :config="config" v-if="config.productConfig.showType === 6"></list6>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import list3 from '../goods/list3.vue';
import list4 from '../goods/list4.vue';
import list6 from '../goods/list6.vue';

const props = defineProps({
  config: Object
})

const leftLineStyle = computed(() => ({ background: `linear-gradient(to left, ${props.config.titleConfig.lineColor}, transparent)` }))
const rightLineStyle = computed(() => ({ background: `linear-gradient(to right, ${props.config.titleConfig.lineColor}, transparent)` }))

const getIcon = file => (new URL(`../../assets/images/default/${file}`, import.meta.url).href)

</script>

<style lang="scss" scoped>
.edit-module-goodsRanking {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    font-size: 20px;
    margin-bottom: 10px;
    .line {
      width: 30px;
      height: 1px;
      &:is(.line_left) {
        margin-right: 10px;
        
      }
      &:is(.line_right) {
        margin-left: 10px;
      }
    }
    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      margin-top: -1px;
    }
  }
}
</style>
