<template>
  <div class="edit-module-goodsTabbar" :style="config?.style">
    <div class="tabbar" :style="tabbarStyle">
      <div class="tabbar_item" :class="{active: true}">选项</div>
      <div class="tabbar_item">选项</div>
      <div class="tabbar_item">选项</div>
      <div class="tabbar_item">选项</div>
    </div>
    <list1 :config="config" v-if="config.productConfig.showType === 1"></list1>
    <list2 :config="config" v-if="config.productConfig.showType === 2"></list2>
    <list3 :config="config" v-if="config.productConfig.showType === 3"></list3>
    <list4 :config="config" v-if="config.productConfig.showType === 4"></list4>
    <list5 :config="config" v-if="config.productConfig.showType === 5"></list5>
    <list6 :config="config" v-if="config.productConfig.showType === 6"></list6>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import list1 from '../goods/list1.vue';
import list2 from '../goods/list2.vue';
import list3 from '../goods/list3.vue';
import list4 from '../goods/list4.vue';
import list5 from '../goods/list5.vue';
import list6 from '../goods/list6.vue';

const props = defineProps({
  config: Object
})

const tabbarStyle = computed(() => {
  let { color, activeColor } = props.config.tabbarConfig
  return {
    '--color': color,
    '--activeColor': activeColor
  }
})

</script>

<style lang="scss" scoped>
.edit-module-goodsTabbar {
  .tabbar {
    display: flex;
    align-items: center;
    height: 40px;
    &_item {
      flex-shrink: 0;
      padding: 0 20px;
      color: var(--color);
      &.active {
        color: var(--activeColor);
      }
    }
  }
}
</style>
