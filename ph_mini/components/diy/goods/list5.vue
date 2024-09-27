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
    carConfig() {
      return this.productConfig.car || {}
    },
    itemStyle() {
      let { goodSpace, goodRadius } = this.productConfig
      let { size, color, carColor, bgColor, borderRadius, borderColor } = this.carConfig
      return {
        '--space': goodSpace + 'px',
        borderRadius: goodRadius + 'px',
        // btn
        '--size': size === 'small' ? '22px' : size === 'middle' ? '26px' : '30px',
        '--color': color,
        '--carcolor': carColor,
        '--bgcolor': bgColor,
        '--bordercolor': borderColor,
        // btn1
        '--fs': size === 'small' ? '12px' : size === 'middle' ? '13px' : '14px',
        '--padding': size === 'small' ? '4px 8px' : size === 'middle' ? '6px 10px' : '7px 12px',
        '--borderradius': borderRadius + 'px',
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
			this.$set(this.errImgs, index, `${this.defDir}/default_${file}`)
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
            background-color: var(--bgcolor);
            border: 1px solid transparent;
            border-color: var(--bordercolor);
            border-radius: var(--borderradius);
          }
          .add {
            width: var(--size);
            height: var(--size);
            line-height: calc(var(--size) - 2px);
            font-size: 20px;
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