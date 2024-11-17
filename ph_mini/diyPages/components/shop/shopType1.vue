<template>
  <div class="shop-item" :style="{ backgroundColor: contentSet.item.bgColor, borderRadius: imgRadiusSet.item * 2 + 'rpx' }">
    <img class="preview" :style="{ borderRadius: imgRadiusSet.shop * 2 + 'rpx' }" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
    <div class="text-overflow shop-item_name" :style="{ color: contentSet.name.color, fontSize: contentSet.name.fontSize * 2 + 'rpx' }">店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称</div>
    <div class="shop-item_star">
      <starVue v-if="contentSet.star.show" :starSet="contentSet.star"></starVue>
      <span v-if="contentSet.per.show" :style="{ color: contentSet.per.color, fontSize: contentSet.per.fontSize * 2 + 'rpx' }">人均￥10</span>
    </div>
    <div class="shop-item_adress">
      <span class="adr" v-if="contentSet.adress.show" :style="{ color: contentSet.adress.color, fontSize: contentSet.adress.fontSize * 2 + 'rpx' }">渝中区</span>
      <span>已售544</span>
      <span class="flex-1"></span>
      <span>1.1km</span>
    </div>
    <div class="shop-item_detail">
      <div class="shop-item_detail_item">
        <span class="label">惠</span>
        <span class="unit">￥</span>
        <span class="price">2</span>
        <span class="discount">5.7折</span>
        <span class="del-price">￥3.5</span>
        <span class="text-overflow name">雪糕</span>
      </div>
      <div class="shop-item_detail_item">
        <span class="label">惠</span>
        <span class="unit">￥</span>
        <span class="price">2</span>
        <span class="discount">5.7折</span>
        <span class="del-price">￥3.5</span>
        <span class="text-overflow name">冰淇淋</span>
      </div>
    </div>
  </div>
</template>

<script>
import starVue from './star.vue';

export default {
	props: {
		contentSet: Object,
		imgRadiusSet: Object,
	},
	components: {
		starVue
	}
}

</script>

<style lang="scss" scoped>
.shop-item {
  position: relative;
  margin-top: 20rpx;
  padding: 20rpx 20rpx 20rpx 160rpx;
  .preview {
    position: absolute;
    width: 120rpx;
    height: 120rpx;
    left: 20rpx;
    top: 36rpx;
    overflow: hidden;
    border: 1px solid #eee;
  }
  &_name {
    font-size: 40rpx;
    font-weight: 900;
    margin-bottom: 16rpx;
  }
  &_star {
    display: flex;
    gap: 20rpx;
    font-size: 24rpx;
    color: #626260;
    margin-bottom: 20rpx;
  }
  &_adress {
    display: flex;
    font-size: 24rpx;
    color: #626260;
    .adr {
      margin-right: 10rpx;
    }
  }
  &_detail {
    --gap: 10rpx;
    display: flex;
    flex-direction: column;
    &_item {
      display: flex;
      align-items: center;
      font-size: 20rpx;
      margin-top: 20rpx;
      .label {
        color: #329CFF;
        background-color: #D2E9FF;
        margin-right: var(--gap);
        padding: 0 8rpx;
        border-radius: 8rpx;
      }
      .unit {
        font-size: 24rpx;
        font-weight: bold;
        color: #DB362D;
      }
      .price {
        font-size: 28rpx;
        font-weight: bold;
        color: #DB362D;
        margin-right: var(--gap);
      }
      .discount {
        color: #DEAA3C;
        background-color: #FEF2DB;
        margin-right: var(--gap);
        padding: 0 12rpx;
        border-radius: 40rpx;
      }
      .del-price {
        color: #626260;
        text-decoration: line-through;
        margin-right: var(--gap);
      }
      .name {
        flex: 1;
      }
    }
  }
}
</style>