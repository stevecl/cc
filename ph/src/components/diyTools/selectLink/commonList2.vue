<template>
  <div class="goods-link">
    <div class="category" v-if="!['SHOP_ONLINE', 'SHOP_CITY'].includes(type)">
      <div class="category_item" :class="{active: searchQuery.searchPrimaryKey === item.id}" v-for="(item, index) in leftDatas" @click="handleType(item.id)">{{ item.categoryName }}</div>
    </div>
    <div class="main">
      <div class="product-list">
        <div
          class="product-list_item"
          :class="{'active': selectList.findIndex(obj => obj.id === item.id) > -1}"
          v-for="(item, index) in mainDatas"
          :key="index"
          @click="handleSelect(item)">
          <div class="goods">
            <el-image :src="item.imgUrl || 't'" fit="contain">
              <template #error>
                <div class="image-slot">
                  <img :src="getDefaultImage('default_picture.png')" alt="">
                </div>
              </template>
            </el-image>
          </div>
          <div class="goods-detail">
            <div class="">{{ item.title }}</div>
            <div class="flex-between" v-if="type === 'BRAND_CLASS'">
              <span class="light">￥{{ item.salePrice }}</span>
              <span class="gray">库存：{{ item.inventoryQuantity }}</span>
            </div>
            <div class="activeIcon">
              <span class="iconfont icon-duihao"></span>
            </div>
          </div>
        </div>
        <div class="gray" v-if="!mainDatas.length" style="margin: 150px 0;text-align: center;width: 100%;">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getDataItem } from '@/api'
import useDefaultSource from '@/hooks/useDefaultSource'
import { computed } from 'vue';

let { getDefaultImage } = useDefaultSource()

const props = defineProps({
  datas: Array,
  type: String
})

const dataList = ref([])
const selectList = ref([]) // 已选商品列表
const searchQuery = reactive({
  searchPrimaryKey: '',
  type: '', // 根据 props.type 来定
  pageNum: 1,
  pageSize: 20
})

const leftDatas = computed(() => {
  return props.datas
})
const mainDatas = computed(() => {
  return ['SHOP_ONLINE', 'SHOP_CITY'].includes(props.type) ? props.datas.map(obj => {
    obj.title = obj.categoryName
    return obj
  }) : dataList.value
})

const handleType = searchPrimaryKey => {
  if (searchQuery.searchPrimaryKey === searchPrimaryKey) return
  searchQuery.searchPrimaryKey = searchPrimaryKey
  getAllDatas()
}

const getAllDatas = async () => {
  let _ = {
    STRATEGY_CLASS: 'STRATEGY',
    PROMOTION_ACTIVITY_CLASS: 'PROMOTION_ACTIVITY',
    BRAND_CLASS: 'GOODS',
  }
  searchQuery.type = _[props.type]
  let { dataList: data } = await getDataItem(searchQuery)
  if (props.type === 'PROMOTION_ACTIVITY_CLASS') {
    data.forEach(obj => {
      obj.title = obj.activityTitle
    })
  }
  if (props.type === 'BRAND_CLASS') {
    data.forEach(obj => {
      obj.title = obj.goodsName
      obj.imgUrl = obj.mainImgUrl
    })
  }
  dataList.value = data
}

const handleSelect = (item) => {
  let index = selectList.value.findIndex(obj => obj.id === item.id)
  if (index > -1) {
    selectList.value.splice(index, 1)
  } else {
    selectList.value = [ item ]
  }
}

const submit = () => selectList.value.length ? selectList.value[0].id : ''

defineExpose({
  submit
})

onMounted(async () => {
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
  // height: 100%;
  flex: 1;
  overflow: hidden;
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
      flex: 0 1;
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