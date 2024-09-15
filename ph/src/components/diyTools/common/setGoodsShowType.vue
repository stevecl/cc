<!-- 商品组件 通用  选择风格 -->
<template>
  <div class="module-edit-title">选择风格</div>
  <div class="select-type">
    <div
      class="select-type_item"
      :class="{active: modelValue === item.value}"
      v-for="(item, index) in typeList"
      :key="index"
      @click="emit('update:modelValue', item.value)">
      <img :src="getIcon(item.icon)" alt="">
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Number,
  componentName: String
})

const typeList = computed(() => {
  let res = []
  if (['goods', 'goodsTabbar'].includes(props.componentName)) {
    res = [
      { value: 1, icon: 'goods,one.png' },
      { value: 2, icon: 'goods,list.png' },
      { value: 3, icon: 'twoGoods,two.png' },
      { value: 4, icon: 'twoGoods,list2.png' },
      { value: 5, icon: 'otherGoods,three3.png' },
      { value: 6, icon: 'otherGoods,three2.png' },
    ]    
  }
  if (['goodsLikes', 'goodsRanking'].includes(props.componentName)) {
    res = [
      { value: 3, icon: 'twoGoods,two.png' },
      { value: 4, icon: 'twoGoods,list2.png' },
      { value: 6, icon: 'otherGoods,three2.png' },
    ]    
  }
  if (['goodsScore'].includes(props.componentName)) {
    res = [
      { value: 2, icon: 'goods,list.png' },
      { value: 3, icon: 'twoGoods,two.png' },
    ]    
  }
  return res
})

const getIcon = file => (new URL(`../../../assets/images/default/${file}`, import.meta.url).href)

</script>

<style lang="scss" scoped>
.select-type {
  display: flex;
  margin-bottom: 20px;
  &_item {
    flex: 1;
    text-align: center;
    border: 1px solid #ededed;
    cursor: pointer;
    &.active {
      border-color: #FE6903;
    }
    &:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }
    img {
      width: 30px;
    }
  }
}
</style>