<template>
  <div class="classify">
    <div class="classify_item" :class="{active: item.value === state.type}" v-for="(item, index) in classifyList" :key="index" @click="handleSwitchClassify(item.value)">{{ item.text }}</div>
  </div>
  <categoryBox ref="childDom" :datas="state.datas" v-if="['CATEGORY_ONLINE', 'CATEGORY_CITY'].includes(state.type)"></categoryBox>
  <categoryCommonList ref="childDom" :datas="state.datas" v-else></categoryCommonList>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getDataItem } from '@/api'
import categoryCommonList from './categoryCommonList.vue'

const classifyList = [
  { text: '商品分类(线上)', value: 'CATEGORY_ONLINE' },
  { text: '商品分类(同城)', value: 'CATEGORY_CITY' },
  { text: '攻略分类', value: 'STRATEGY_CLASS' },
  { text: '促销活动分类', value: 'PROMOTION_ACTIVITY_CLASS' },
  { text: '品牌分类', value: 'BRAND_CLASS' },
  { text: '店铺列表(线上)', value: 'CATEGORY_CITY' },
  { text: '店铺列表(同城)', value: 'CATEGORY_CITY' },
]
const state = reactive({
  type: 'CATEGORY_ONLINE', // CATEGORY_ONLINE 线上；CATEGORY_CITY 同城
})

// 二级分类
const handleSwitchClassify = val => {
  if (state.type !== val) {
    state.type = val
    getDatas()
  }
}

const getDatas = async () => {
  let { dataList } = await getDataItem(state.type)
  // 攻略
  if (state.type === 'STRATEGY_CLASS') {
    dataList.forEach(obj => obj.categoryName = obj.className)
  }
  // 促销活动
  if (state.type === 'PROMOTION_ACTIVITY_CLASS') {
    dataList.forEach(obj => {
      obj.categoryName = obj.value
      obj.id = obj.code
    })
  }
  // 品牌
  if (state.type === 'BRAND_CLASS') {
    dataList.forEach(obj => {
      obj.categoryName = obj.brandName
      obj.imgUrl = obj.logoUrl
    })
  }

  state.datas = dataList
}

const childDom = ref(null)
const submit = () => childDom.value.submit()?.id || ''

defineExpose({
  submit
})

onMounted(() => {
  getDatas()
})

</script>

<style lang="scss" scoped>
.classify {
  display: flex;
  align-items: flex-start;
  height: 30px;
  &_item {
    padding: 0 10px;
    cursor: pointer;
    &.active {
      position: relative;
      color: #fb6638;
      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: calc(50% - 10px);
        width: 20px;
        height: 2px;
        background-color: #fb6638;
      }
    }
  }
}

</style>