<template>
  <el-dialog
    class="ph-dialog"
    title="预览"
    width="500"
    v-model="state.dialogVisible">
    <div class="content">
      <div class="title">{{ state.title }}</div>
      <canvas class="code" ref="qrcodeCanvas"></canvas>
      <!-- <div></div> -->
    </div>
    <template #footer>
      <el-button plain @click="handleClose">关 闭</el-button>
      <el-button type="primary" >确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import QRCode from 'qrcode'
import { ref, reactive, onMounted, nextTick } from 'vue'

const state = reactive({
  title: '',
  dialogVisible: false,
})

const handleClose = () => state.dialogVisible = false

const qrcodeCanvas = ref(null)
onMounted(() => {
  Bus.on('preview', ({ templateName, id }) => {
    state.title = templateName
    state.dialogVisible = true
    nextTick(() => {
      QRCode.toCanvas(qrcodeCanvas.value, 'this.text水水水水水水水水水水水水水水水水水水水', error => {
        if (error) console.error(error)
      })
    })
  })
})

</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  .title {
    text-align: center;
  }
  .code {
    width: 400px;
    height: 400px;
    margin: 10px auto 0;
    border: 1px solid #ccc;
  }
}
</style>
