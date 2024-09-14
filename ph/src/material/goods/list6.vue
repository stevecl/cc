<template>
  <div class="list list6">
    <div class="list_item" v-for="n in 5">
      <div class="wrap">
        <img class="img" :src="getDefaultImage('picture.png')" alt="">
      </div>
      <div class="detail" :style="{ background: config.style.goodBgColor }">
        <div class="name">这里是商品标题</div>
        <div class="sale">
          <div class="price">
            <span class="unit">￥</span>20
          </div>
          <div class="btn">买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  // flex-wrap: wrap;
  .list_item {
    display: flex;
    flex-direction: column;
    width: 100px;
    .wrap {
      position: relative;
      width: 100%;
      padding-top: 100%;
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
        height: 36px;
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
        justify-content: space-between;
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