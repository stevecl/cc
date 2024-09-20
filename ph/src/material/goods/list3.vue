<template>
  <div class="list list3">
    <div class="list_item" v-for="n in 3" :style="itemStyle">
      <div class="wrap">
        <img class="img" :src="getDefaultImage('picture.png')" alt="">
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name">
          <span class="tag" v-if="detailConfig.tag.show">标题标签</span>
          <span class="txt" :style="detailConfig.title.style" v-if="detailConfig.title.show">这里是商品标题</span>
        </div>
        <div class="subtitle" :style="detailConfig.subtitle.style" v-if="detailConfig.subtitle.show">
          这里是副标题</div>
        <div class="sale">
          <div class="info">
            <div class="sales" :style="detailConfig.sales.style" v-if="detailConfig.sales.show">已售0</div>
            <div class="price">
              <div class="sale-price" :style="detailConfig.price.style" v-if="detailConfig.price.show">
                <span class="unit">￥</span>20</div>
              <div class="old-price" :style="detailConfig.oldPrice.style"
                v-if="detailConfig.oldPrice.show">￥20</div>
            </div>
          </div>
          <div class="btn" :class="[carConfig.type, carConfig.size]" :style="btnStyle" v-if="carConfig.show">
            <span :class="{hide: carConfig.type !== 'btn1'}" class="txt">{{ carConfig.text || '购买' }}</span>
            <span :class="{hide: carConfig.type !== 'btn2'}" class="add">+</span>
            <span :class="{hide: carConfig.type !== 'btn3'}" class="iconfont icon-gouwuche icon"></span>
            <img :class="{hide: carConfig.type !== 'btn4'}" src="../../assets/images/default/car4.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})
const productConfig = computed(() => (props.config.productConfig || {}))
const detailConfig = computed(() => (productConfig.value.detail || {}))
const carConfig = computed(() => (productConfig.value.car || {}))

const itemStyle = computed(() => ({ '--space': productConfig.value.goodSpace + 'px' }))
const btnStyle = computed(() => {
  let { size, color, carColor, bgColor, borderRadius, borderColor } = carConfig.value
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
  flex-wrap: wrap;
  .list_item {
    --space: 0;
    width: calc(50% - var(--space) / 2);
    margin-bottom: calc(var(--space) );
    box-sizing: border-box;
    &:nth-child(2n + 1) {
      margin-right: calc(var(--space));
    }
    .wrap {
      position: relative;
      width: 100%;
      padding-top: 100%;
  
      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  
    .detail {
      padding: 10px 12px;
  
      .name {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
  
        .tag {
          padding: 0 4px;
          line-height: 18px;
          font-size: 10px;
          font-weight: 400;
          border-radius: 2px;
          margin-right: 2px;
          display: inline-block;
          color: #fff;
          background-color: #FF2F46;
        }
  
        .txt {
          flex: 1;
          font-size: 16px;
          font-weight: 700;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
  
      .subtitle {
        font-size: 14px;
        height: 20px;
        line-height: 20rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 4px;
      }
  
      .sale {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
  
        .info {
          font-size: 14px;
          font-weight: 700;
          color: #FF2F46;
  
          .sales {
            margin-bottom: 4px;
          }
  
          .price {
            display: flex;
            align-items: flex-end;
            font-size: 18px;
  
            .unit {
              font-size: 14px;
            }
  
            .old-price {
              text-decoration: line-through;
            }
          }
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