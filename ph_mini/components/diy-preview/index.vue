<template>
  <view>
    <view v-for="(item, index) in config" :key="item.componentName + index">
      <diy-assistBlank v-if="judgeShow(item.componentName, 'assistBlank')" :config="item.config"></diy-assistBlank>
      <diy-assistLine v-if="judgeShow(item.componentName, 'assistLine')" :config="item.config"></diy-assistLine>
      <diy-buttons v-if="judgeShow(item.componentName, 'buttons')" :config="item.config"></diy-buttons>
      <diy-pictureShow v-if="judgeShow(item.componentName, 'pictureShow')" :config="item.config"></diy-pictureShow>
      <diy-search v-if="judgeShow(item.componentName, 'search')" :config="item.config"></diy-search>
      <diy-singleChart v-if="judgeShow(item.componentName, 'singleChart')" :config="item.config"></diy-singleChart>
      <diy-swiper v-if="judgeShow(item.componentName, 'swiper')" :config="item.config"></diy-swiper>
      <diy-title v-if="judgeShow(item.componentName, 'title')" :config="item.config"></diy-title>
      <diy-video v-if="judgeShow(item.componentName, 'video')" :config="item.config"></diy-video>
      
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
// 颜色处理
String.prototype.colorRgb = function () {
  var sColor = this.toLowerCase();
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return sColorChange.join(',');
  }
  return sColor;
};

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
      return name === 'diy-' + currentName;
    }
  }
};
</script>

<style></style>
