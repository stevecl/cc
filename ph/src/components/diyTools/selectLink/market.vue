<template>
  <div class="pages-link">
    <div class="category">
      <div class="category_item" :class="{ active: state.categoryIndex === 0 }" @click="changeCategory(0)">代金券</div>
      <div class="category_item" :class="{ active: state.categoryIndex === 1 }" @click="changeCategory(1)">天天红包雨</div>
    </div>
    <div class="main">
      <div class="main_page">
        <div class="main_page_title">
          <span class="iconfont icon-biaodanyemian"></span>
          基础页面
        </div>
        <div class="main_page_list">
          <div
            class="main_page_list_item"
            :class="{active: state.code === item.code}"
            v-for="item in state.fixData"
            :key="item.code"
            @click="handleSelect(item.code)">
            {{ item.value }}
            <div class="activeIcon">
              <span class="iconfont icon-duihao"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_page">
        <div class="main_page_title">
          <span class="iconfont icon-biaodanyemian"></span>
          {{ `${state.categoryIndex === 0 ? '代金券' : '红包'}页面` }}
        </div>
        <div class="main_page_list">
          <div
            class="main_page_list_item"
            :class="{active: state.code === item.code}"
            v-for="item in state.datas"
            :key="item.code"
            @click="handleSelect(item.code)">
            {{ item.value }}
            <div class="activeIcon">
              <span class="iconfont icon-duihao"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { getDataItem, getItemAll } from '@/api'

const state = reactive({
  categoryIndex: 0,
  code: '',
  fixData: [],
  datas: [],
  dialogVisible: false,
  callback: null,
})
const searchQuery = reactive({
  searchPrimaryKey: '',
  type: '',
  pageNum: 1,
  pageSize: 20,
})

const changeCategory = index => {
  if (state.categoryIndex === index) return
  state.categoryIndex = index
  getDatasByType(index)
}

const getDatasByType = async index => {
  let { dataList } = await getDataItem({ type: ['COUPON_PAGE_CODE', 'RED_PACKET_PAGE_CODE'][index] })
  state.fixData = dataList
  searchQuery.type = ['COUPON_LIST', 'RED_PACKET_ACTIVITY'][index]
  let { dataList: data2 } = await getDataItem(searchQuery)
  if (index === 0) {
    data2.forEach(item => {
      item.code = item.id
      item.value = item.couponName
    })
  }
  if (index === 1) {
    data2.forEach(item => {
      item.code = item.id
      item.value = item.activityName
    })
  }
  state.datas = data2
}

const handleSelect = code => {
  state.code = code
}
const submit = () => state.link

onMounted(() => {
  getDatasByType(state.categoryIndex)
})

defineExpose({
  submit
})

</script>

<style lang="scss" scoped>
.pages-link {
  display: flex;
  height: 100%;
  .category {
    width: 160px;
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
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 10px;
    &_page {
      &_title {
        height: 43px;
        line-height: 43px;
        .iconfont {
          color: #ffb9a3;
        }
      }
      &_list {
        display: flex;
        flex-wrap: wrap;
        &_item {
          position: relative;
          height: 32px;
          line-height: 32px;
          padding: 0 16px;
          border: 1px solid #ededed;
          border-radius: 4px;
          margin: 5px 9px 5px 0;
          cursor: pointer;
          &.active {
            border-color: var(--primary, #fb6638);
            .activeIcon {
              display: unset;
            }
          }
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