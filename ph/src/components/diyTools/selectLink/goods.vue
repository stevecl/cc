<template>
  <div class="goods-link">
    <div class="category">
      <div class="category_item" :class="{active: searchQuery.type === 'ONLINE'}" @click="handleType('ONLINE')">线上商品</div>
      <div class="category_item" :class="{active: searchQuery.type === 'CITY'}" @click="handleType('CITY')">同城商品</div>
    </div>
    <div class="main">
      <div class="main_search">
        <el-input
          class="wid160 mr10"
          v-model="searchQuery.goodsName"
          placeholder="搜索名称"
          clearable
          :suffix-icon="Search"
          @change="getProductData">
        </el-input>
        <el-select
          class="wid160 mr10"
          v-model="searchQuery.brandId"
          placeholder="商品品牌"
          clearable>
          <el-option
            v-for="item in brandListDatas"
            :key="item.id"
            :label="item.brandName"
            :value="item.id"
          />
        </el-select>
        <el-cascader
          v-model="categorySelectList"
          :options="categoryListDatas"
          :props="propsOptions"
          placeholder="选择分类"
          :value-on-clear="[]"
          clearable />
        <span class="flex-1"></span>
        <el-button type="primary" @click="handleSearch">查 询</el-button>
      </div>
      <div class="product-list">
        <div
          class="product-list_item"
          :class="{'active': selectList.findIndex(obj => obj.id === item.id) > -1}"
          v-for="(item, index) in productDatas"
          :key="index"
          @click="handleSelect(item)">
          <div class="goods">
            <el-image :src="item.mainImgUrl || 't'" fit="contain">
              <template #error>
                <div class="image-slot">
                  <img :src="getDefaultImage('default_picture.png')" alt="">
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
        <div class="gray" v-if="!productDatas.length" style="margin: 150px 0;text-align: center;width: 100%;">暂无商品数据</div>
      </div>
      <el-pagination
        :current-page="searchQuery.pageNum"
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="handlePage"
        />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { getProductList, getDataItem, getProductList2, getBrandList, getProductStateList } from '@/api'
import useDefaultSource from '@/hooks/useDefaultSource'

let { getDefaultImage } = useDefaultSource()

const propsOptions = {
  value: 'id', //	指定选项的值为选项对象的某个属性值	
  label: 'categoryName', //	指定选项标签为选项对象的某个属性值	
  children: 'list', //
  checkStrictly: true, //	是否严格的遵守父子节点不互相关联
}

const categorySelectList = ref([])
const searchQuery = ref({
  type: 'ONLINE', // 同城:CITY 线上：ONLINE
  goodsName: '', // 商品名称/品牌名称/货号
  goodsState: 'PUT_ON_SALE', // PUT_ON_SALE 商品状态,原型上没有这个筛选条件的情况下,前端默认传上架状态
  brandId: '', // 品牌ID
  categoryId: '', // 分类id
  pageNum: 1,
  pageSize: 20
})

const brandListDatas = ref([]) // 品牌列表
const categoryListDatas = ref([]) // 分类列表
const productDatas = ref([]) // 商品列表
const selectList = ref([]) // 已选商品列表

const handleType = type => {
  if (searchQuery.value.type === type) return
  searchQuery.value.type = type
  resetSearch()
  getDatas()
}

const resetSearch = () => {
  searchQuery.value.goodsName = ''
  searchQuery.value.brandId = ''
  searchQuery.value.categoryId = ''
  categorySelectList.value = []
  searchQuery.value.pageNum = 1
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

const handleSearch = () => {
  searchQuery.value.categoryId = categorySelectList.value[categorySelectList.value.length - 1] || ''
  getProductData()
}

const getDatas = async () => {
  let { type } = searchQuery.value
  // 获取品牌数据
  let res = await getBrandList()
  brandListDatas.value = res
  // 获取分类数据
  let categoryTypeParams = type === 'ONLINE' ? 'CATEGORY_ONLINE' : 'CATEGORY_CITY'
  let { dataList } = await getDataItem({ type: categoryTypeParams })
  categoryListDatas.value = dataList
  getProductData()
}

const getProductData = async () => {
  let { dataList } = await getProductList(searchQuery.value)
  productDatas.value = dataList
}

const handlePage = page => {
  searchQuery.value.pageNum = page
  getProductData()
}

const submit = () => selectList.value.length ? selectList.value[0].id : ''

defineExpose({
  submit
})

onMounted(async () => {
  getDatas()
})

</script>

<style lang="scss" scoped>
.wid160 {
  width: 160px;
}
.mr10 {
  margin-right: 10px;
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
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-top: 20px;
      // overflow: hidden;
      flex-grow: 0;
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