<template>
  <div class="list list4">
    <div class="list_item" v-for="(item, index) in showData" :key="index" :style="[itemStyle]">
      <div class="list_wrap">
        <image class="img" :src="errImgs[index] || item.mainImgUrl || 'error'" @error="dealErrorImg(index, 'picture.png')"></image>
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name" :style="[detailConfig.title.style]">{{ item.goodsName }}</div>
        <div class="sale" :style="[detailConfig.price.style]"><span class="unit">￥</span>{{ item.salePrice }}</div>
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
    itemStyle() {
      let { goodSpace, goodRadius } = this.productConfig
      return {
        '--space': goodSpace * 2 + 'rpx',
        borderRadius: goodRadius * 2 + 'rpx',
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
    width: calc(50% - var(--space) / 2);
    box-sizing: border-box;
    margin-bottom: calc(var(--space) );
    overflow: hidden;
    &:nth-child(2n + 1) {
      margin-right: calc(var(--space));
    }
    .list_wrap {
      position: relative;
      width: 160rpx;
      height: 160rpx;
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
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 8rpx;
      .name {
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
        font-size: 36rpx;
        color: #FF2F46;
        .unit {
          font-size: 28rpx;
        }
      }
    }
  }
}
</style>