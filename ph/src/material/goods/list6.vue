<template>
  <div class="list list6">
    <div class="list_item" v-for="n in 7" :style="itemStyle">
      <div class="wrap">
        <img class="img" :src="getDefaultImage('picture.png')" alt="">
      </div>
      <div class="detail" :style="{ background: config.itemStyle.goodBgColor }">
        <div class="name" :style="config.detailConfig.title.style">这里是商品标题</div>
        <div class="sale">
          <div class="price" :style="config.detailConfig.price.style">
            <span class="unit">￥</span>20
          </div>
          <div class="btn" :class="[config.carConfig.type, config.carConfig.size]" :style="btnStyle" v-if="config.carConfig.show">
            <span :class="{hide: config.carConfig.type !== 'btn1'}" class="txt">{{ config.carConfig.text || '购买' }}</span>
            <span :class="{hide: config.carConfig.type !== 'btn2'}" class="add">+</span>
            <span :class="{hide: config.carConfig.type !== 'btn3'}" class="iconfont icon-gouwuche icon"></span>
            <img :class="{hide: config.carConfig.type !== 'btn4'}" src="../../assets/images/default/car4.png" alt="">
          </div>
        </div>
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

const itemStyle = computed(() => ({ '--space': props.config.itemStyle.goodSpace + 'px' }))
const btnStyle = computed(() => {
  let { size, color, carColor, bgColor, borderRadius, borderColor } = props.config.carConfig
  return {
    '--size': size === 'small' ? '22px' : size === 'middle' ? '26px' : '30px',
    '--color': color,
    '--carColor': carColor,
    '--bgColor': bgColor,
    '--borderColor': borderColor,
    // btn1
    '--fs': size === 'small' ? '12px' : size === 'middle' ? '13px' : '14px',
    '--padding': size === 'small' ? '4px 8px' : size === 'middle' ? '6px 10px' : '7px 12px',
    '--borderRadius': borderRadius + 'px',
  }
})

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  .list_item {
    --space: 0;
    display: flex;
    flex-direction: column;
    width: 100px;
    flex-shrink: 0;
    &:not(:last-of-type) {
      margin-right: var(--space);
    }
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
        .btn {
          display: flex;
          .hide {
            display: none;
          }
          .txt {
            padding: var(--padding);
            font-size: var(--fs);
            color: var(--color);
            background-color: var(--bgColor);
            border-radius: var(--borderRadius);
            border: 1px solid transparent;
            border-color: var(--borderColor);
          }
          .add {
            width: var(--size);
            height: var(--size);
            line-height: calc(var(--size) - 2px);
            font-size: 20px;
            // font-weight: 700;
            text-align: center;
            color: var(--color);
            background-color: var(--bgColor);
            border-radius: 50%;
            border: 1px solid transparent;
            border-color: var(--borderColor);
          }
          .iconfont {
            color: var(--carColor);
            font-size: var(--size);
          }
          img {
            width: var(--size);
          }
        }
      }
    }
  }
}
</style>