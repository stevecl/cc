<template>
  <div class="shop-item" :style="{ backgroundColor: colorSet.itemBg }">
    <img class="preview" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
    <div class="text-overflow shop-item_name" :style="{ color: colorSet.name }">店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称</div>
    <div class="shop-item_star">
      <starVue></starVue>
      <span>人均￥10</span>
    </div>
    <div class="shop-item_adress">
      <span class="adr" :style="{ color: colorSet.adress }">渝中区</span>
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
    gap: 10px;
    font-size: 12px;
    color: #626260;
    margin-bottom: 10px;
  }
  &_adress {
    display: flex;
    font-size: 12px;
    color: #626260;
    .adr {
      margin-right: 5px;
    }
  }
  &_detail {
    --gap: 5px;
    display: flex;
    flex-direction: column;
    &_item {
      display: flex;
      align-items: center;
      font-size: 10px;
      margin-top: 10px;
      .label {
        color: #329CFF;
        background-color: #D2E9FF;
        margin-right: var(--gap);
        padding: 0 4px;
        border-radius: 4px;
      }
      .unit {
        font-size: 12px;
        font-weight: bold;
        color: #DB362D;
      }
      .price {
        font-size: 14px;
        font-weight: bold;
        color: #DB362D;
        margin-right: var(--gap);
      }
      .discount {
        color: #DEAA3C;
        background-color: #FEF2DB;
        margin-right: var(--gap);
        padding: 0 6px;
        border-radius: 20px;
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