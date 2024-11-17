<template>
  <div class="shop-item" :style="{ backgroundColor: contentSet.item.bgColor, borderRadius: imgRadiusSet.item * 2 + 'rpx' }">
    <img class="preview" :style="{ borderRadius: imgRadiusSet.shop * 2 + 'rpx' }" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
    <div class="text-overflow shop-item_name" :style="{ color: contentSet.name.color, fontSize: contentSet.name.fontSize * 2 + 'rpx' }">店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称</div>
    <div class="shop-item_star">
      <starVue v-if="contentSet.star.show" :starSet="contentSet.star"></starVue>
      <span v-if="contentSet.appraise.show" :style="{ color: contentSet.appraise.color, fontSize: contentSet.appraise.fontSize * 2 + 'rpx' }">0条</span>
      <span v-if="contentSet.per.show" :style="{ color: contentSet.per.color, fontSize: contentSet.per.fontSize * 2 + 'rpx' }">人均￥10</span>
      <span v-if="contentSet.adress.show" :style="{ color: contentSet.adress.color, fontSize: contentSet.adress.fontSize * 2 + 'rpx' }">渝中区</span>
    </div>
    <div class="shop-item_intro">
      <span class="txt" v-if="contentSet.intro.show" :style="{ fontSize: contentSet.intro.fontSize * 2 + 'rpx' }">欢迎光临，如果您在选购或用餐过程中...</span>
      <span>1.1km</span>
    </div>
    <div class="shop-item_product">
      <div class="shop-item_product_item" v-for="n in 42">
        <img class="img" :style="{ borderRadius: imgRadiusSet.product * 2 + 'rpx' }" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
        <div class="name">雪糕</div>
        <div>
          <span class="price">￥2</span>
          <span class="del-price">￥3.5</span>
        </div>
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
  background-color: #fff;
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
    gap: 8rpx;
    font-size: 24rpx;
    color: #626260;
    margin-bottom: 20rpx;
  }
  &_intro {
    display: flex;
    justify-content: space-between;
    font-size: 26rpx;
    color: #626260;
    margin-bottom: 20rpx;
    .txt {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 10rpx;
    }
  }
  &_product {
    display: flex;
    gap: 20rpx;
    overflow: hidden;
    &_item {
      display: flex;
      flex-direction: column;
      .img {
        width: 120rpx;
        height: 120rpx;
        margin-bottom: 12rpx;
      }
      .name {
        font-size: 28rpx;
        margin-bottom: 12rpx;
      }
      .price {
        font-size: 28rpx;
        color: #DB362D;
      }
      .del-price {
        font-size: 20rpx;
        color: #626260;
        text-decoration: line-through;
      }
    }
  }
}
</style>