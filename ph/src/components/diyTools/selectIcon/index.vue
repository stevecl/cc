<template>
  <el-dialog
    class="ph-dialog"
    title="选择图标"
    v-model="state.dialogVisible"
    width="30%">
    <div class="diy-select-icon-box">
      <div
        v-for="(item, index) in list"
        @click="selectIcon(item)"
        :key="index">
        <span class="iconfont" :class="item"></span>
        <span class="text-overflow">{{ item.replace('icon-', '') }}</span>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button plain @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import list from './datas'

const state = reactive({
  dialogVisible: false,
  callback: null
})

const selectIcon = name => {
  typeof state.callback === 'function' && state.callback(name)
  handleClose()
}

const handleClose = () => {
  state.dialogVisible = false
}

onMounted(() => {
  Bus.on('selectIcon', cb => {
    console.log('selectIcon',)
    state.dialogVisible = true
    state.callback = cb
  })
})

</script>

<style lang="scss" scoped>
.diy-select-icon-box {
  display: flex;
  align-items: flex-start;
  // justify-content: flex-start;
  flex-wrap: wrap;
  height: 400px;
  overflow: auto;
  & > div {
    height: 60px;
    width: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5px 0;
    cursor: pointer;
    span.iconfont {
      font-size: 30px;
      height: 40px;
      line-height: 40px;
    }
    &:hover {
      background: #f6f6f6;
    }
  }
}
</style>
