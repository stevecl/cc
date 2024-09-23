<template>
  <el-dialog
    class="ph-dialog"
    title="选择商品"
    v-model="state.dialogVisible">
    <selectProduct ref="childProduct" v-if="state.selectType === 'product'"></selectProduct>
    <selectCategory ref="childCategory" v-if="state.selectType === 'category'"></selectCategory>
    <template #footer>
      <el-button plain @click="handleClose">关 闭</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import selectCategory from './selectCategory.vue';
import selectProduct from './selectProduct.vue';

const state = reactive({
  selectType: 'product', // goods: 选择商品 category: 选择商品分类
  dialogVisible: false,
  callback: null,
})

const childProduct = ref(null)
const childCategory = ref(null)

const handleClose = () => state.dialogVisible = false
const handleSubmit = () => {
  let data = state.selectType === 'product' ? childProduct.value.getSelectData() : childCategory.value.getSelectData()
  console.log('data', data)
  typeof state.callback === 'function' && state.callback(data)
  handleClose()
}

onMounted(() => {
  Bus.on('selectDatas', (opt, cb) => {
    console.log(222222, opt)
    let { type } = opt
    state.selectType = type
    state.dialogVisible = true
    state.callback = cb
    nextTick(() => {
      type === 'product' && childProduct.value.initData(opt)
    })
  })
})

</script>

<style lang="scss" scoped>

</style>
