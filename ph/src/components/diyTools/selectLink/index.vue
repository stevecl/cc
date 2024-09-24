<template>
  <el-dialog
    class="ph-dialog"
    title="选择链接"
    v-model="state.dialogVisible">
    <div class="content">
      <div class="top">
        <div class="top_item" :class="{ active: state.typeIndex === 0 }" @click="changeType(0)">店铺</div>
        <div class="top_item" :class="{ active: state.typeIndex === 1 }" @click="changeType(1)">商品</div>
        <div class="top_item" :class="{ active: state.typeIndex === 2 }" @click="changeType(2)">分类</div>
      </div>
      <pagesVue ref="childDom" v-if="state.typeIndex === 0"></pagesVue>
      <goodsVue ref="childDom" v-if="state.typeIndex === 1"></goodsVue>
      <categoryVue ref="childDom" v-if="state.typeIndex === 2"></categoryVue>
    </div>
    <template #footer>
      <el-button plain @click="handleClose">关 闭</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import pagesVue from './pages.vue';
import goodsVue from './goods.vue';
import categoryVue from './category.vue';

const state = reactive({
  typeIndex: 0,
  dialogVisible: false,
  callback: null,
})

const changeType = index => {
  if (state.typeIndex === index) return
  state.typeIndex = index
}

const childDom = ref(null)
const handleSubmit = () => {
  let data = childDom.value.submit()
  console.log('select link:', data)
  typeof state.callback === 'function' && state.callback(data)
  handleClose()
}

const handleClose = () => state.dialogVisible = false

onMounted(() => {
  Bus.on('selectLink', cb => {
    state.typeIndex = 0
    state.dialogVisible = true
    state.callback = cb
  })
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
