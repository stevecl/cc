<template>
  <div class="content">
    <div class="top">
      <div class="top_item" :class="{active: state.type === 'CATEGORY_ONLINE'}" @click="handleType('CATEGORY_ONLINE')">线上商品</div>
      <div class="top_item" :class="{active: state.type === 'CATEGORY_CITY'}" @click="handleType('CATEGORY_CITY')">同城商品</div>
    </div>
    <categodyBox ref="childDom" :datas="state.datas"></categodyBox>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getDataItem } from '@/api'
import { deepClone } from '@/utils'
import categodyBox from '../common/categoryBox.vue'

const state = reactive({
  type: 'CATEGORY_ONLINE', // CATEGORY_ONLINE 线上；CATEGORY_CITY 同城
  datas: [],
})

const handleType = type => {
  if (state.type === type) return
  state.type = type
  getDatas()
}

const getDatas = async () => {
  let { dataList } = await getDataItem(state.type)
  state.datas = dataList
}

const childDom = ref(null)
const initData = ({ selectList: data }) => selectList.value = deepClone(data)
// const getSelectData = () => ({ id: state.selectId, categoryName: state.selectName })
const getSelectData = () => childDom.value.submit()

defineExpose({
  initData,
  getSelectData
})

onMounted(() => {
  getDatas()
})

</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 500px;

  padding-top: 50px;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 36px;
    display: flex;
    &_item {
      border-radius: 4px;
      margin-right: 10px;
      width: 88px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border: 1px solid #f1f1f1;
      color: #666;
      cursor: pointer;
      &.active {
        border: none;
        background-color: var(--primary, #fb6638);
        color: #fff;
      }
    }
  }
}

</style>