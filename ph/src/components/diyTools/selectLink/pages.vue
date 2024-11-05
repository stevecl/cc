<template>
  <div class="pages-link">
    <div class="category">
      <div class="category_item" :class="{ active: state.categoryIndex === 0 }" @click="changeCategory(0)">基础页面</div>
      <div class="category_item" :class="{ active: state.categoryIndex === 1 }" @click="changeCategory(1)">装修页面</div>
    </div>
    <div class="main">
      <template v-if="state.categoryIndex === 0">
        <div class="main_page" v-for="item in datas.base">
          <div class="main_page_title">
            <span class="iconfont icon-biaodanyemian"></span>
            {{ item.groupName }}
          </div>
          <div class="main_page_list">
            <div
              class="main_page_list_item"
              :class="{active: state.selectItem.code === listItem.code}"
              v-for="listItem in item.list"
              @click="handleSelect(listItem)">
              {{ listItem.name }}
              <div class="activeIcon">
                <span class="iconfont icon-duihao"></span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="state.categoryIndex === 1">
        <div class="flex main_search">
          <el-select
            class="wid180 mr10"
            v-model="searchQuery.category"
            placeholder="页面类型"
            clearable>
            <el-option
              v-for="item in datas.pageType"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
          <span class="flex-1"></span>
          <el-button type="primary" @click="getPageDatas">查 询</el-button>
        </div>
        <div class="product-list">
          <div
            class="product-list_item"
            :class="{'active': state.selectItem.query?.id === item.id}"
            v-for="(item, index) in datas.pageList"
            @click="handleSelectPage(item)">
            <div class="goods">
              <el-image :src="item.templateImg || 't'" fit="contain">
                <template #error>
                  <div class="image-slot">
                    <img :src="getDefaultImage('default_picture.png')" alt="">
                  </div>
                </template>
              </el-image>
            </div>
            <div class="goods-detail">
              <div class="text-overflow">{{ item.templateName }}</div>
              <div class="activeIcon">
                <span class="iconfont icon-duihao"></span>
              </div>
            </div>
          </div>
          <div class="gray" v-if="!datas.pageList.length" style="margin: 150px 0;text-align: center;width: 100%;">暂无模板数据</div>
        </div>
        <div class="flex-1"></div>
        <el-pagination
          :current-page="searchQuery.pageNum"
          background
          layout="prev, pager, next"
          :total="500"
          @current-change="handlePage"
          />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getDataItem, getItemAll, getModuleList } from '@/api'
import useDefaultSource from '@/hooks/useDefaultSource'

let { getDefaultImage } = useDefaultSource()

// 数据
import baseData from '@/datas/linkPath' // 基础页面
const datas = reactive({
  base: baseData,
  pageList: [],
  pageType: [
    { name: '首页', id: 'HOME' },
    { name: '惠生活', id: 'HSH' },
    { name: '会员中心', id: 'MEMBER_CENTER' },
    { name: '自定义页面', id: 'CUSTOM_PAGE' },
  ]
})

const state = reactive({
  categoryIndex: 0,
  selectItem: {
    code: '',
    name: ''
  },
  dialogVisible: false,
  callback: null,
})

const searchQuery = ref({
  pageNum: 1,
  pageSize: 20,
  searchKey: '',
  category: 'HOME', // 页面分类(首页:HOME,惠生活:HSH,会员中心:MEMBER_CENTER,自定义页面:CUSTOM_PAGE,底部菜单:BOTTOM_MENU,启动广告:HOME_ADVERT)
  sourceType: 'MARKET_APPLETS'
})

const changeCategory = index => {
  if (state.categoryIndex === index) return
  state.categoryIndex = index
}

const init = (value = {}) => {
  state.selectItem = value
  console.log(222222222222222222222, value)
}
const handleSelect = item => {
  state.selectItem = {
    name: `${item.name}【基础页面】`,
    code: item.code,
  }
}
const handleSelectPage = item => {
  state.selectItem = {
    name: `${item.templateName}【装修页面】`,
    code: 'CUSTOM_PAGE',
    query: {
      id: item.id
    }
  }
}
const submit = () => state.selectItem

// 装修页面
const handlePage = page => {
  searchQuery.value.pageNum = page
  getPageDatas()
}

const getPageDatas = async () => {
  let { dataList } = await getModuleList(searchQuery.value)
  datas.pageList = dataList
  console.log('dataList', dataList)
}

onMounted(() => {
  getDataItem({ type: 'BASICS_PAGE_CODE' })
  getPageDatas()
})

defineExpose({
  init,
  submit
})

</script>

<style lang="scss" scoped>
.wid180 {
  width: 180px;
}
.mr10 {
  margin-right: 10px;
}
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
    overflow: auto;
    display: flex;
    flex-direction: column;
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
    .test {
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