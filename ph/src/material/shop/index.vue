<template>
  <div class="edit-module-shop" :style="styleObj">
    <div class="sort">
      <div class="sort_item active">综合排序</div>
      <div class="sort_item">销量</div>
      <div class="sort_item">距离</div>
    </div>
    <template v-if="config.type === 1">
      <shopType1 :contentSet="config.contentSet" :imgRadiusSet="config.imgRadiusSet" v-for="item in 4"></shopType1>
    </template>
    <template v-if="config.type === 2">
      <shopType2 :contentSet="config.contentSet" :imgRadiusSet="config.imgRadiusSet" v-for="item in 4"></shopType2>
    </template>
  </div>
</template>

<script setup>
import shopType1 from './shopType1.vue';
import shopType2 from './shopType2.vue';
import { computed } from 'vue';

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { style = {}, contentSet = {} } = props.config
  return {
    ...style,
    background: contentSet.bg.bgColor
  }
})

</script>

<style lang="scss" scoped>
.edit-module-shop {
  // height: 500px;
  .sort {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 12px;
    background-color: #F5F5F5;
    padding-left: 10px;
    &_item {
      margin-right: 20px;
      &.active {
        color: red;
      }
    }
  }
}
</style>
