<template>
  <el-dialog
    class="ph-dialog"
    title="选择链接"
    v-model="state.dialogVisible">
    <div class="content">
      <div class="top">
        <div
          class="top_item"
          :class="{ active: state.typeIndex === item.value }"
          v-for="(item, index) in typeDatas"
          :key="index"
          @click="changeType(item.value)">{{ item.text }}</div>
      </div>
      <pagesVue ref="childDom" v-if="state.typeIndex === 1"></pagesVue>
      <goodsVue ref="childDom" v-if="state.typeIndex === 2"></goodsVue>
      <categoryVue ref="childDom" v-if="state.typeIndex === 3"></categoryVue>
      <marketVue ref="childDom" v-if="state.typeIndex === 4"></marketVue>
    </div>
    <template #footer>
      <el-button plain @click="handleClose">关 闭</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import pagesVue from './pages.vue';
import goodsVue from './goods.vue';
import categoryVue from './category.vue';
import marketVue from './market.vue'

const typeDatas = [
  { text: '店铺', value: 1 },
  { text: '商品', value: 2 },
  { text: '分类', value: 3 },
  { text: '营销中心', value: 4 },
  // { text: '其他', value: 5 },
]

const state = reactive({
  def_value: {},
  typeIndex: 1,
  dialogVisible: false,
  callback: null,
})

const changeType = index => {
  if (state.typeIndex === index) return
  state.typeIndex = index
  nextTick(() => {
    childDom.value?.init?.(state.def_value)
  })
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
  Bus.on('selectLink', (cb, value) => {
    state.def_value = value
    state.typeIndex = 1
    state.dialogVisible = true
    state.callback = cb
    nextTick(() => {
      childDom.value?.init?.(value)
    })
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
