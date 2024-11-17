<template>
  <div class="shop-item" :style="{ backgroundColor: contentSet.item.bgColor, borderRadius: imgRadiusSet.item + 'px' }">
    <img class="preview" :style="{ borderRadius: imgRadiusSet.shop + 'px' }" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
    <div class="text-overflow shop-item_name" :style="{ color: contentSet.name.color, fontSize: contentSet.name.fontSize + 'px' }">店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称</div>
    <div class="shop-item_star">
      <starVue v-if="contentSet.star.show" :starSet="contentSet.star"></starVue>
      <span v-if="contentSet.appraise.show" :style="{ color: contentSet.appraise.color, fontSize: contentSet.appraise.fontSize + 'px' }">0条</span>
      <span v-if="contentSet.per.show" :style="{ color: contentSet.per.color, fontSize: contentSet.per.fontSize + 'px' }">人均￥10</span>
      <span v-if="contentSet.adress.show" :style="{ color: contentSet.adress.color, fontSize: contentSet.adress.fontSize + 'px' }">渝中区</span>
    </div>
    <div class="shop-item_intro">
      <span class="txt" v-if="contentSet.intro.show" :style="{ fontSize: contentSet.intro.fontSize + 'px' }">欢迎光临，如果您在选购或用餐过程中...</span>
      <span>1.1km</span>
    </div>
    <div class="shop-item_product">
      <div class="shop-item_product_item" v-for="n in 42">
        <img class="img" :style="{ borderRadius: imgRadiusSet.product + 'px' }" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
        <div class="name">雪糕</div>
        <div>
          <span class="price">￥2</span>
          <span class="del-price">￥3.5</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import starVue from './star.vue';

const props = defineProps({
  contentSet: Object,
  imgRadiusSet: Object,
})

</script>

<style lang="scss" scoped>
.shop-item {
  position: relative;

  margin-top: 10px;
  padding: 10px 10px 10px 80px;
  background-color: #fff;
  .preview {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 10px;
    top: 18px;
    overflow: hidden;
    border: 1px solid #eee;
  }
  &_name {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 8px;
  }
  &_star {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #626260;
    margin-bottom: 10px;
  }
  &_intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: #626260;
    margin-bottom: 10px;
    .txt {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 5px;
    }
  }
  &_product {
    display: flex;
    gap: 10px;
    overflow: hidden;
    &_item {
      display: flex;
      flex-direction: column;
      .img {
        width: 60px;
        height: 60px;
        margin-bottom: 6px;
      }
      .name {
        font-size: 14px;
        margin-bottom: 6px;
      }
      .price {
        font-size: 14px;
        color: #DB362D;
      }
      .del-price {
        font-size: 10px;
        color: #626260;
        text-decoration: line-through;
      }
    }
  }
}
</style>