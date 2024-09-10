<template>
  <div class="edit-module-goods" :class="[`list${config.showType}`]" :style="styleObj">
    <div class="list_item" v-for="n in 3">
      <div class="wrap">
        <img class="img" :src="getDefaultImage('banner.png')" alt="">
      </div>
      <div class="detail" :style="{background: config.style.goodBgColor}">
        <div class="name">
          <span class="tag" v-if="config.detailConfig.tag.show">标题标签</span>
          <span class="txt" :style="config.detailConfig.title.style" v-if="config.detailConfig.title.show">这里是商品标题</span>
        </div>
        <div class="subtitle" :style="config.detailConfig.subtitle.style" v-if="config.detailConfig.subtitle.show">这里是副标题</div>
        <div class="sale">
          <div class="info">
            <div class="sales" :style="config.detailConfig.sales.style" v-if="config.detailConfig.sales.show">已售0</div>
            <div class="price">
              <div class="sale-price" :style="config.detailConfig.price.style" v-if="config.detailConfig.price.show"><span class="unit">￥</span>20</div>
              <div class="old-price" :style="config.detailConfig.oldPrice.style" v-if="config.detailConfig.oldPrice.show">￥20</div>
            </div>
          </div>
          <div class="btn">购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, nextTick, onMounted } from 'vue'

import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let res = props.config?.style || {}
  // res.background = `${res.background} url(${props.config.bgImageUrl}) center / 100% 100% repeat`
  return res
})

const getConfigByName = name => {
  let res = props.config.content.filter(obj => obj.name === name)[0]
  console.log('res', res, props.config.content)
  return res || {}
}

</script>

<style lang="scss" scoped>
.edit-module-goods {
  display: flex;
  flex-direction: column;
  .list_item {
    margin-bottom: 14px;
    .wrap {
      position: relative;
      width: 100%;
      padding-top: 56%;
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
          padding: 4px 8px;
          border-radius: 3px;
          background-color: #FF2F46;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
  &.list2 {
    flex-direction: row;
    flex-wrap: wrap;
    .list_item {
      width: calc(50% - 5px);
      &:nth-child(2n + 1) {
        margin-right: 10px;
      }
      .wrap {
        padding-top: 100%;
        .img {
          object-fit: none;
        }
      }
    }
  }
}
</style>
