<template>
  <view>
    <view v-for="(item, index) in config" :key="item.name + index">
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
      
      <!-- <diy-advert v-if="judgeShow(item.componentName, 'advert')" :config="item.config"></diy-advert> -->
      <!-- <diy-editor v-if="judgeShow(item.componentName, 'editor')" :config="item.config"></diy-editor> -->
      <!-- <diy-imageWindow v-if="judgeShow(item.componentName, 'imageWindow')" :config="item.config"></diy-imageWindow> -->
      <!-- <diy-listNav v-if="judgeShow(item.componentName, 'listNav')" :config="item.config"></diy-listNav> -->
      <!-- <diy-memberInfo v-if="judgeShow(item.componentName, 'memberInfo')" :config="item.config"></diy-memberInfo> -->
      <!-- <diy-productList v-if="judgeShow(item.componentName, 'productList')" :config="item.config"></diy-productList> -->
      <!-- <diy-tabbar v-if="judgeShow(item.componentName, 'tabbar')" :config="item.config"></diy-tabbar> -->
    </view>
  </view>
</template>

<script>

export default {
  props: {
    config: Array,
    default: () => []
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
