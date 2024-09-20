<template>
  <div class="list list4">
    <div class="list_item" v-for="n in 3" :style="itemStyle">
      <div class="wrap">
        <img class="img" :src="getDefaultImage('picture.png')" alt="">
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name" :style="detailConfig.title.style">这里是商品标题这里是商品标题这里是商品标题</div>
        <div class="sale" :style="detailConfig.price.style"><span class="unit">￥</span>20</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const productConfig = computed(() => (props.config.productConfig || {}))
const detailConfig = computed(() => (productConfig.value.detail || {}))

const itemStyle = computed(() => ({ '--space': productConfig.value.goodSpace + 'px' }))

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  .list_item {
    --space: 0;
    display: flex;
    width: calc(50% - var(--space) / 2);
    box-sizing: border-box;
    margin-bottom: calc(var(--space) );
    &:nth-child(2n + 1) {
      margin-right: calc(var(--space));
    }
    // &:nth-last-child(1){
    //   margin-bottom: 0;
    // }
    .wrap {
      position: relative;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .detail {
      display: flex;
      flex-direction: column;
      padding: 4px;
      .name {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .sale {
        flex: 1;
        display: flex;
        align-items: flex-end;
        font-size: 18px;
        color: #FF2F46;
        .unit {
          font-size: 14px;
        }
      }
    }
  }
}
</style>