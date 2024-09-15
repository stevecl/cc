<template>
  <el-dialog
    class="ph-dialog"
    title="选择链接"
    v-model="state.dialogVisible">
    <div class="content">
      <div class="top">
        <div class="top_item" :class="{ active: state.typeIndex === 0 }" @click="changeType(0)">店铺</div>
        <div class="top_item" :class="{ active: state.typeIndex === 1 }" @click="changeType(1)">商品</div>
        <div class="top_item" :class="{ active: state.typeIndex === 2 }" @click="changeType(2)">酒店</div>
      </div>
      <div class="category">
        <div class="category_item" :class="{ active: state.categoryIndex === 0 }" @click="changeCategory(0)">基础页面</div>
        <div class="category_item" :class="{ active: state.categoryIndex === 1 }" @click="changeCategory(1)">装修页面</div>
      </div>
      <div class="main">
        <div class="main_page">
          <div class="main_page_title">
            <span class="iconfont icon-biaodanyemian"></span>
            基础链接
          </div>
          <div class="main_page_list">
            <div class="main_page_list_item" :class="{active: state.link === '/pages/index/index'}" @click="handleSelect('/pages/index/index')">
              店铺首页
              <div class="activeIcon">
                <span class="iconfont icon-duihao"></span>
              </div>
            </div>
            <div class="main_page_list_item" :class="{active: state.link === '/pages/product/index'}" @click="handleSelect('/pages/product/index')">
              全部商品
              <div class="activeIcon">
                <span class="iconfont icon-duihao"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="main_page">
          <div class="main_page_title">
            <span class="iconfont icon-biaodanyemian"></span>
            会员中心
          </div>
          <div class="main_page_list">
            <div class="main_page_list_item" :class="{active: state.link === '/pages/mine/index'}" @click="handleSelect('/pages/mine/index')">
              个人中心
              <div class="activeIcon">
                <span class="iconfont icon-duihao"></span>
              </div>
            </div>
            <div class="main_page_list_item" :class="{active: state.link === '/pages/order/index'}" @click="handleSelect('/pages/order/index')">
              我的订单
              <div class="activeIcon">
                <span class="iconfont icon-duihao"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <el-button plain @click="handleClose">关 闭</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const state = reactive({
  typeIndex: 0,
  categoryIndex: 0,
  link: '',
  dialogVisible: false,
  callback: null,
})

const changeType = index => {
  if (state.typeIndex === index) return
  state.typeIndex = index
}

const changeCategory = index => {
  if (state.categoryIndex === index) return
  state.categoryIndex = index
}

const handleSelect = link => state.link = link

const handleSubmit = () => {
  typeof state.callback === 'function' && state.callback(state.link)
  handleClose()
}

const handleClose = () => {
  state.dialogVisible = false
}

onMounted(() => {
  Bus.on('selectLink', cb => {
    state.typeIndex = 0
    state.categoryIndex = 0
    state.link = ''
    state.dialogVisible = true
    state.callback = cb
  })
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
  .category {
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    width: 160px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 10px 0;
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
    position: absolute;
    top: 50px;
    left: 170px;
    right: 0;
    bottom: 0;
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
