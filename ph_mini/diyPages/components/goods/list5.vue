<template>
  <div class="list list5">
    <div class="list_item" v-for="(item, index) in showData" :key="index" :style="[itemStyle]">
      <div class="list_wrap">
        <image class="img" :src="errImgs[index] || item.mainImgUrl || 'error'" @error="dealErrorImg(index, 'picture.png')"></image>
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name" :style="[detailConfig.title.style]">{{ item.goodsName }}</div>
        <div class="sale">
          <div class="price" :style="[detailConfig.price.style]">
            <span class="unit">￥</span>{{ item.salePrice }}
          </div>
          <div class="btn" :class="[carConfig.type, carConfig.size]" v-if="carConfig.show">
            <span :class="{hide: carConfig.type !== 'btn1'}" class="txt">{{ carConfig.text || '购买' }}</span>
            <span :class="{hide: carConfig.type !== 'btn2'}" class="add">+</span>
            <span :class="{hide: carConfig.type !== 'btn3'}" class="iconfont icon-gouwuche icon"></span>
            <image class="img" :class="{hide: carConfig.type !== 'btn4'}" src="/static/images/car4.png" alt=""></image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '@/diyPages/utils/diyMixins.js'
let defItem = {
  goodsName: "商品标题",
  salePrice: '20',
  marketPrice: '99'
}

export default {
  mixins: [ mixins ],
  props: {
    config: Object
  },
  computed: {
    productConfig() {
      return this.config.productConfig
    },
    detailConfig() {
      return this.productConfig.detail || {}
    },
    carConfig() {
      return this.productConfig.car || {}
    },
    itemStyle() {
      let { goodSpace, goodRadius } = this.productConfig
      let { size, color, carColor, bgColor, borderRadius, borderColor } = this.carConfig
      return {
        '--space': goodSpace * 2 + 'rpx',
        borderRadius: goodRadius * 2 + 'rpx',
        // btn
        '--size': size === 'small' ? '44rpx' : size === 'middle' ? '52rpx' : '60rpx',
        '--color': color,
        '--carcolor': carColor,
        '--bgcolor': bgColor,
        '--bordercolor': borderColor,
        // btn1
        '--fs': size === 'small' ? '24rpx' : size === 'middle' ? '26rpx' : '28rpx',
        '--padding': size === 'small' ? '8rpx 16rpx' : size === 'middle' ? '12rpx 20rpx' : '14rpx 24rpx',
        '--borderradius': borderRadius * 2 + 'rpx',
      }
    },
    showData() {
      let { type, selectList = [], showNum } = this.config.dataConfig || this.config.tabbarConfig.datas[this.config.tabbarIndex]
      if (type === 'product') {
        return selectList.length ? selectList : [ defItem, defItem ]
      } else {
        return new Array(showNum).fill(defItem)
      }
    }
  },
  methods: {
    dealErrorImg(index, file) {
			this.$set(this.errImgs, index, `${this.defDir}default_${file}`)
    }
  }
}

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  .list_item {
    --space: 0;
    display: flex;
    flex-direction: column;
    width: calc((100% - var(--space) * 2) / 3);
    overflow: hidden;
    &:nth-child(3n + 1), &:nth-child(3n + 2) {
      margin-right: var(--space);
      margin-bottom: var(--space);
    }
    .list_wrap {
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
      padding: 8rpx;
      .name {
        height: 72rpx;
        font-size: 28rpx;
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
        font-size: 36rpx;
        color: #FF2F46;
        .unit {
          font-size: 28rpx;
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
            background-color: var(--bgcolor);
            border: 1px solid transparent;
            border-color: var(--bordercolor);
            border-radius: var(--borderradius);
          }
          .add {
            width: var(--size);
            height: var(--size);
            line-height: calc(var(--size) - 4rpx);
            font-size: 40rpx;
            // font-weight: 700;
            text-align: center;
            color: var(--color);
            background-color: var(--bgcolor);
            border-radius: 50%;
            border: 1px solid transparent;
            border-color: var(--bordercolor);
          }
          .iconfont {
            color: var(--carcolor);
            font-size: var(--size);
          }
          .img {
            width: var(--size);
            height: var(--size);
          }
        }
      }
    }
  }
}
</style>