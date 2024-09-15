<template>
  <el-dialog
    class="ph-dialog"
    title="选择商品"
    v-model="state.dialogVisible">
    <div class="content">
      <div class="top">
        <div class="top_item">商品</div>
      </div>
      <template v-if="state.selectType === 'product'">
        <div class="category">
          <div class="category_item active">全部商品</div>
        </div>
        <div class="main">
          <el-input placeholder="搜索名称" :suffix-icon="Search" style="width: 160px;"></el-input>
          <div class="product-list">
            <div class="product-list_item" :class="{active: n == state.selectVal}" v-for="n in 20" @click="handleSelect(n)">
              <div class="goods">
                <img src="https://img2.baidu.com/it/u=1544882228,2394903552&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1726506000&t=940b921541807b46d87149e3ba42db46" alt="">
              </div>
              <div class="goods-detail">
                <div class="text-overflow">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</div>
                <div class="flex-between">
                  <span class="light">￥9.99</span>
                  <span class="gray">库存：100</span>
                </div>
                <div class="activeIcon">
                  <span class="iconfont icon-duihao"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="state.selectType === 'category'">
        <div class="category">
          <div class="category_item active">商品分类</div>
        </div>
        <div class="main">
          <div class="list_item header">
            <span>分类名称</span>
            <span>商品数</span>
          </div>
          <div class="list_item" :class="{active: n === state.selectVal}" v-for="n in 10" @click="handleSelect(n)">
            <span>食物</span>
            <span>222</span>
            <div class="activeIcon">
              <span class="iconfont icon-duihao"></span>
            </div>
          </div>
        </div>
      </template>
    </div>
    <template #footer>
      <el-button plain @click="handleClose">关 闭</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

const state = reactive({
  selectVal: '',
  selectType: 'product', // goods: 选择商品 category: 选择商品分类
  dialogVisible: false,
  callback: null,
})

const handleSelect = index => state.selectVal = index

const handleSubmit = () => {
  typeof state.callback === 'function' && state.callback(state.link)
  handleClose()
}

const handleClose = () => {
  state.dialogVisible = false
}

onMounted(() => {
  Bus.on('selectDatas', (type, cb) => {
    console.log('type, cb', type, cb)
    state.selectType = type
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
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 170px;
    right: 0;
    bottom: 0;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 10px;
    overflow-y: auto;
    .product-list {
      flex: 1;
      margin-top: 20px;
      &_item {
        cursor: pointer;
        float: left;
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
