<template>
  <div class="list list2">
    <div class="list_item" v-for="(item, index) in showData" :key="index" :style="[itemStyle]">
      <div class="list_wrap">
        <image class="img" :src="errImgs[index] || item.mainImgUrl || 'error'" @error="dealErrorImg(index, 'picture.png')"></image>
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name">
          <span class="tag" v-if="detailConfig.tag.show">标题标签</span>
          <span class="txt" :style="[detailConfig.title.style]" v-if="detailConfig.title.show">{{ item.goodsName }}</span>
        </div>
        <div class="subtitle" :style="[detailConfig.subtitle.style]" v-if="detailConfig.subtitle.show">这里是副标题</div>
        <div class="flex-1"></div>
        <div class="sale">
          <div class="info">
            <div class="sales" :style="[detailConfig.sales.style]" v-if="detailConfig.sales.show">已售0</div>
            <div class="price" v-if="saleType === 'cash'">
              <div class="sale-price" :style="[detailConfig.price.style]" v-if="detailConfig.price.show">
                <span class="unit">￥</span>{{ item.salePrice }}
              </div>
              <div class="old-price" :style="[detailConfig.oldPrice.style]" v-if="detailConfig.oldPrice.show">￥{{ item.marketPrice }}</div>
            </div>
						<div class="price" v-if="saleType === 'score'">
							<div class="sale-price" :style="detailConfig.price.style" v-if="detailConfig.price.show">
								2000<span class="unit" style="font-size: 12px;">积分</span>
							</div>
						</div>
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
    config: Object,
		saleType: {
			type: String,
			default: 'cash', // cash 常规支付；score 积分兑换
		}
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
.flex-1 {
	flex: 1;
}
.list {
  .list_item {
    --space: 0;
    display: flex;
    overflow: hidden;
    &:not(:last-of-type) {
      margin-bottom: var(--space);
    }
    .list_wrap {
      position: relative;
      width: 130px;
      height: 130px;
      padding: 0;
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
      padding: 8px 12px;
      flex-direction: column;
      padding: 10px 12px;
      overflow: hidden;
      .name {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        overflow: hidden;

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
        line-height: 20px;
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