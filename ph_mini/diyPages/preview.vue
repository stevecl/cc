<template>
  <view>
    <view v-for="(item, index) in config" :key="index">
      <diy-assistBlank v-if="judgeShow(item.name, 'assistBlank')" :config="item.config"></diy-assistBlank>
      <diy-assistLine v-if="judgeShow(item.name, 'assistLine')" :config="item.config"></diy-assistLine>
      <diy-buttons v-if="judgeShow(item.name, 'buttons')" :config="item.config"></diy-buttons>
      <diy-pictureShow v-if="judgeShow(item.name, 'pictureShow')" :config="item.config"></diy-pictureShow>
      <diy-search v-if="judgeShow(item.name, 'search')" :config="item.config"></diy-search>
      <diy-singleChart v-if="judgeShow(item.name, 'singleChart')" :config="item.config"></diy-singleChart>
      <diy-swiper v-if="judgeShow(item.name, 'swiper')" :config="item.config"></diy-swiper>
      <diy-title v-if="judgeShow(item.name, 'title')" :config="item.config"></diy-title>
      <diy-video v-if="judgeShow(item.name, 'video')" :config="item.config"></diy-video>
      <diy-goods v-if="judgeShow(item.name, 'goods')" :config="item.config"></diy-goods>
      <diy-goodsLikes v-if="judgeShow(item.name, 'goodsLikes')" :config="item.config"></diy-goodsLikes>
      <diy-goodsRanking v-if="judgeShow(item.name, 'goodsRanking')" :config="item.config"></diy-goodsRanking>
      <diy-goodsScore v-if="judgeShow(item.name, 'goodsScore')" :config="item.config"></diy-goodsScore>
      <diy-goodsTabbar v-if="judgeShow(item.name, 'goodsTabbar')" :config="item.config"></diy-goodsTabbar>
      <diy-listMenu v-if="judgeShow(item.name, 'listMenu')" :config="item.config"></diy-listMenu>
      <diy-floatButtons v-if="judgeShow(item.name, 'floatButtons')" :config="item.config" :hasTabbar="hasTabbar"></diy-floatButtons>
      <diy-memberCenter v-if="judgeShow(item.name, 'memberCenter')" :config="item.config" :hasTabbar="hasTabbar"></diy-memberCenter>
      <diy-order v-if="judgeShow(item.name, 'order')" :config="item.config" :hasTabbar="hasTabbar"></diy-order>
      <diy-coupon v-if="judgeShow(item.name, 'coupon')" :config="item.config" :hasTabbar="hasTabbar"></diy-coupon>
      <diy-shop v-if="judgeShow(item.name, 'shop')" :config="item.config" :hasTabbar="hasTabbar"></diy-shop>
    </view>
  </view>
</template>

<script>

export default {
  props: {
    config: {
      type: Array,
      default: () => []
    },
    hasTabbar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    judgeShow(name, currentName) {
      return name === currentName;
    }
  }
};
</script>

<style></style>
