<template>
  <div class="edit-module-goodsTabbar" :style="[currentConfig.style]">
    <div class="tabbar" :style="[tabbarStyle]">
      <div
        class="tabbar_item"
        :class="{active: currentConfig.tabbarIndex === index}"
        v-for="(item, index) in currentConfig.tabbarConfig.datas"
        @click="currentConfig.tabbarIndex = index"
        >{{ item.text }}</div>
    </div>
    <list1 :config="currentConfig" v-if="currentConfig.productConfig.showType === 1"></list1>
    <list2 :config="currentConfig" v-if="currentConfig.productConfig.showType === 2"></list2>
    <list3 :config="currentConfig" v-if="currentConfig.productConfig.showType === 3"></list3>
    <list4 :config="currentConfig" v-if="currentConfig.productConfig.showType === 4"></list4>
    <list5 :config="currentConfig" v-if="currentConfig.productConfig.showType === 5"></list5>
    <list6 :config="currentConfig" v-if="currentConfig.productConfig.showType === 6"></list6>
  </div>
</template>

<script>
import deepClone from '../../../uview-ui/libs/function/deepClone';
import list1 from '../goods/list1.vue';
import list2 from '../goods/list2.vue';
import list3 from '../goods/list3.vue';
import list4 from '../goods/list4.vue';
import list5 from '../goods/list5.vue';
import list6 from '../goods/list6.vue';

export default {
  props: {
    config: Object,
    default: () => ({ tabbarConfig: {} })
  },
  data() {
    return {
      currentConfig: {}
    }
  },
  components: {
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
  },
  computed: {
    tabbarStyle() {      
      let { color, activeColor } = this.currentConfig.tabbarConfig
      return {
        '--color': color,
        '--activecolor': activeColor
      }
    }
  },
  watch: {
    config: {
      handler(newVal) {
        this.currentConfig = newVal
      },
      deep: true,
      immediate: true
    }
  },
  methods: {}
}


</script>

<style lang="scss" scoped>
.edit-module-goodsTabbar {
  .tabbar {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: auto;
    &_item {
      flex-shrink: 0;
      padding: 0 20px;
      color: var(--color);
      &.active {
        position: relative;
        color: var(--activecolor);
        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: calc(50% - 10px);
          width: 20px;
          height: 4px;
          background-color: var(--activecolor);
        }
      }
    }
  }
}
</style>
