<!-- 已弃用 -->
<template>
  <el-dialog
    class="diy-select-link-wrapper"
    title="选择链接"
    v-model="state.dialogVisible">
    <div class="diy-select-link-box">
      <div class="link-label-box">
        <span v-for="(item, index) in typeList" :class="{'active': state.activeIndex === index}" @click="switchLabel(index)">{{ item }}</span>
      </div>
      <!-- 商城页面列表 -->
      <linkBase class="link-content-box" v-if="state.activeIndex === 0" @select="handleSubmit"></linkBase>
      <!-- 商品详情页 -->
      <linkProduct class="link-content-box" v-if="state.activeIndex === 1" @select="handleSubmit"></linkProduct>
      <!-- diy页面 -->
      <linkPages class="link-content-box" v-if="state.activeIndex === 2" @select="handleSubmit"></linkPages>
      <linkActivity class="link-content-box" v-if="state.activeIndex === 3" @select="handleSubmit"></linkActivity>
    </div>
    <template #footer>
      <el-button @click="handleClose">关 闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import linkBase from './linkBase.vue'
import linkProduct from './linkProduct.vue'
import linkPages from './linkPages.vue'
import linkActivity from './linkActivity.vue'

const typeList = ref([
  '内部链接',
  '商品',
  '店铺装修',
  '打卡活动',
])

const state = reactive({
  dialogVisible: false,
  activeIndex: 0,
  callback: null
})

const switchLabel = index => {
  if (state.activeIndex === index) return
  state.activeIndex = index
}

const handleSubmit = link => {
  console.log('link', link)
  typeof state.callback === 'function' && state.callback(link)
  handleClose()
}

const handleClose = () => {
  state.dialogVisible = false
}

onMounted(() => {
  Bus.on('selectLink', cb => {
    // 内部selectLink已弃用，统一转用mxlink
    state.activeIndex = 0
    state.dialogVisible = true
    state.callback = cb
  })
})

</script>

<style lang="scss" scoped>
.diy-select-link-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .link-label-box {
    height: 30px;
    line-height: 30px;
    display: flex;
    span {
      padding: 0 10px;
      margin: 0 10px;
      cursor: pointer;
      &.active {
        border-bottom: 2px solid #337ab7;
      }
    }
  }
  .link-content-box {
    flex: 1;
    overflow: auto;
    &.mini {
      margin-top: 50px;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        &.save {
          margin-left: 120px;
        }
        .label {
          width: 100px;
          text-align: right;
        }
        .input {
          width: 300px;
          margin: 0 20px;
        }
        .tip {
          display: flex;
          align-items: center;
          i {
            margin-right: 3px;
            position: relative;
            top: 1px;
          }
        }
      }
    }
  }
}
</style>
