<template>
  <div class="classify">
    <div class="classify_item" :class="{active: item.value === state.type}" v-for="(item, index) in classifyList" :key="index" @click="handleSwitchClassify(item.value)">{{ item.text }}</div>
  </div>
  <div class="goods-link">
    <div class="category">
      <div class="category_item" :class="{active: searchQuery.type === item.code}" v-for="(item, index) in state.typeList" @click="handleType(item.code)">{{ item.value }}</div>
    </div>
    <div class="main">
      <div class="product-list">
        <div
          class="product-list_item"
          :class="{'active': selectList.findIndex(obj => obj.id === item.id) > -1}"
          v-for="(item, index) in state.datas"
          :key="index"
          @click="handleSelect(item)">
          <div class="goods">
            <el-image :src="item.mainImgUrl || 't'" fit="contain">
              <template #error>
                <div class="image-slot">
                  <img :src="getDefaultImage('picture.png')" alt="">
                </div>
              </template>
            </el-image>
          </div>
          <div class="goods-detail">
            <div class="text-overflow">{{ item.goodsName }}</div>
            <div class="flex-between">
              <span class="light">￥{{ item.salePrice }}</span>
              <span class="gray">库存：{{ item.inventoryQuantity }}</span>
            </div>
            <div class="activeIcon">
              <span class="iconfont icon-duihao"></span>
            </div>
          </div>
        </div>
        <div class="gray" v-if="!productDatas.length" style="margin: 150px 0;text-align: center;width: 100%;">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getDataItem } from '@/api'
import useDefaultSource from '@/hooks/useDefaultSource'

let { getDefaultImage } = useDefaultSource()
const classifyList = [
  { text: '代金券', value: 'COUPON_PAGE_CODE' },
  { text: '天天红包雨', value: 'RED_PACKET_PAGE_CODE' },
]

const state = reactive({
  type: 'COUPON_PAGE_CODE', // COUPON_PAGE_CODE: 代金券 RED_PACKET_PAGE_CODE：红包雨
  typeList: [],
  datas: []
})
const searchQuery = reactive({
  type: '',
  name: '', // 搜索名称
  pageNum: 1,
  pageSize: 20
})

const productDatas = ref([]) // 商品列表
const selectList = ref([]) // 已选商品列表
// 二级分类
const handleSwitchClassify = val => {
  if (state.type !== val) {
    state.type = val
    getTypeDatas()
  }
}
const handleType = type => {
  if (searchQuery.type === type) return
  searchQuery.type = type
  // resetSearch()
  // getTypeDatas()
  getAllDatas()
}

const resetSearch = () => {
  searchQuery.value.goodsName = ''
  searchQuery.value.brandId = ''
  searchQuery.value.categoryId = ''
  searchQuery.value.pageNum = 1
}

const getTypeDatas = async () => {
  let { dataList } = await getDataItem({ type: state.type })
  state.typeList = dataList
}

const getAllDatas = async () => {
  let { dataList } = await getDataItem(searchQuery)
  state.datas = dataList
}

const handleSelect = (item) => {
  let index = selectList.value.findIndex(obj => obj.id === item.id)
  if (index > -1) {
    selectList.value.splice(index, 1)
  } else {
    // selectList.value.push(item)
    selectList.value = [ item ]
  }
}

const submit = () => selectList.value.length ? selectList.value[0].id : ''

defineExpose({
  submit
})

onMounted(async () => {
  getTypeDatas()
})

</script>

<style lang="scss" scoped>
.wid160 {
  width: 160px;
}
.mr10 {
  margin-right: 10px;
}

.classify {
  display: flex;
  align-items: flex-start;
  height: 30px;
  padding-left: 20px;
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

.goods-link {
  display: flex;
  height: 100%;
  .category {
    width: 160px;
    flex-shrink: 0;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 10px 0;
    margin-right: 10px;
    &_item {
      height: 36px;
      line-height: 36px;
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 25px;
      cursor: pointer;
      &.active {
        color: var(--primary, #fb6638) !important;
        background: var(--primary-tips, #fff3ef) !important;
      }
      &:hover {
        color: var(--primary, #fb6638);
      }
    }
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 10px;
    overflow-y: auto;
    &_search {
      display: flex;
    }
    .product-list {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      margin-top: 20px;
      &_item {
        cursor: pointer;
        width: 280px;
        height: 76px;
        border-radius: 4px;
        border: 1px solid #ededed;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 8px 12px;
        display: flex;
        position: relative;
        .goods {
          width: 60px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
        .goods-detail {
          padding-top: 10px;
          flex: 1;
          padding-left: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          line-height: 22px;
        }
        &.active {
          border-color: var(--primary, #fb6638);;
          .activeIcon {
            display: unset;
          }
        }
      }
    }
    .list_item {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 42px;
      color: #333;
      cursor: pointer;
      line-height: 40px;
      border-radius: 4px;
      border: 1px solid #ededed;
      margin-bottom: 10px;
      padding: 0 12px;
      &.header {
        cursor: auto;
        background-color: #f7f7f7;
      }
      &.active {
        border-color: var(--primary, #fb6638);
        .activeIcon {
          display: unset;
        }
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