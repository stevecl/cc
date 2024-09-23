<template>
  <div class="content">
    <div class="top">
      <div class="top_item" :class="{active: searchQuery.type === 'ONLINE'}" @click="handleType('ONLINE')">线上商品</div>
      <div class="top_item" :class="{active: searchQuery.type === 'CITY'}" @click="handleType('CITY')">同城商品</div>
    </div>
    <div class="main">
      <el-tree
        style="max-width: 600px"
        :data="categoryListDatas"
        :props="defaultProps"
        current-node-key="1929642608787330"
        accordion
        @node-click="handleNodeClick"
        />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getProductList, getDataItem, getProductList2, getBrandList, getProductStateList } from '@/api'
import { deepClone } from '@/utils'

const defaultProps = {
  label: 'categoryName',
  children: 'list',
  class: 'test'
}
const searchQuery = ref({
  type: 'ONLINE', // 同城:CITY 线上：ONLINE
})

let selectObj = null
const categoryListDatas = ref([])

const handleNodeClick = data => selectObj = data
const handleType = type => {
  if (searchQuery.value.type === type) return
  searchQuery.value.type = type
  getDatas()
}

const getDatas = async () => {
  let { type } = searchQuery.value
  // 获取分类数据
  let categoryTypeParams = type === 'ONLINE' ? 'CATEGORY_ONLINE' : 'CATEGORY_CITY'
  let { dataList } = await getDataItem(categoryTypeParams)
  categoryListDatas.value = dataList
}

const initData = ({ selectList: data }) => selectList.value = deepClone(data)
const getSelectData = () => selectObj

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
  position: relative;
  width: 100%;
  height: 500px;
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
  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0px;
    right: 0;
    bottom: 0;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 10px;
    overflow-y: auto;
    :deep() {
      .test {
      }
    }
    
  }
}

.activeIcon {
  display: none;
  width: 14px;
  height: 14px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  background: var(--primary, #fb6638);
  color: #fff;
  .iconfont {
    display: inline-block;
    height: 14px;
    line-height: 14px;
    position: absolute;
    left: 0;
    top: -1px;
  }
}
</style>