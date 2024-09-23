<template>
  <div class="list list4">
    <div class="list_item" v-for="(item, index) in showData" :key="index" :style="itemStyle">
      <div class="wrap">
        <image class="img" :src="item.mainImgUrl || 'error'" @error="dealErrorImg(index, 'picture.png')"></image>
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name" :style="detailConfig.title.style">{{ item.goodsName }}</div>
        <div class="sale" :style="detailConfig.price.style"><span class="unit">￥</span>{{ item.salePrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixins } from '@/common/diyMixins'
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
      return { '--space': this.productConfig.goodSpace + 'px' }
    },
    showData() {
      let { type, selectList = [], showNum } = this.config.dataConfig
      if (type === 'product') {
        return selectList.length ? selectList : [ defItem ]
      } else {
        return new Array(showNum).fill(defItem)
      }
    }
  },
  methods: {
    dealErrorImg(index, file) {
      this.config.dataConfig.selectList[index].mainImgUrl = `${this.defDir}/default_${file}`
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