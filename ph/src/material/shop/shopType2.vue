<template>
  <div class="shop-item" :style="{ backgroundColor: colorSet.itemBg }">
    <img class="preview" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
    <div class="text-overflow shop-item_name" :style="{ color: colorSet.name }">店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称</div>
    <div class="shop-item_star">
      <starVue></starVue>
      <span>0条</span>
      <span>人均￥10</span>
      <span :style="{ color: colorSet.adress }">渝中区</span>
    </div>
    <div class="shop-item_intro">
      <span class="txt">欢迎光临，如果您在选购或用餐过程中...</span>
      <span>1.1km</span>
    </div>
    <div class="shop-item_product">
      <div class="shop-item_product_item" v-for="n in 42">
        <img class="img" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
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
  colorSet: Object
})

</script>

<style lang="scss" scoped>
.shop-item {
  position: relative;
  margin-top: 10px;
  padding: 10px 10px 10px 80px;
  background-color: #fff;
  border-radius: 10px;
  .preview {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 10px;
    top: 18px;
    border-radius: 4px;
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
    gap: 4px;
    font-size: 12px;
    color: #626260;
    margin-bottom: 10px;
  }
  &_intro {
    display: flex;
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
        border-radius: 4px;
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