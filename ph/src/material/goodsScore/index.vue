<template>
  <div class="edit-module-goodsScore" :style="config?.style">
    <list2 :config="config" v-if="config.productConfig.showType === 2"></list2>
    <list3 :config="config" v-if="config.productConfig.showType === 3"></list3>
  </div>
</template>

<script setup>
import list2 from '../goods/list2.vue';
import list3 from '../goods/list3.vue';

const props = defineProps({
  config: Object
})

</script>

<style lang="scss" scoped>
.edit-module-goodsScore {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    font-size: 20px;
    margin-bottom: 10px;
    .line {
      width: 30px;
      height: 1px;
      &:is(.line_left) {
        margin-right: 10px;
        
      }
      &:is(.line_right) {
        margin-left: 10px;
      }
    }
    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      margin-top: -1px;
    }
  }
}
</style>
