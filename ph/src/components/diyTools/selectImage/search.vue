<template>
  <div class="diy-select-image-box">
    <div class="flex">
      <!-- <el-date-picker
        v-model="query.startDate"
        style="width: 140px;"
        type="date"
        value-format="YYYY-MM-DD"
        placeholder="选择日期">
      </el-date-picker>
      -
      <el-date-picker
        v-model="query.endDate"
        style="width: 140px;margin-right: 10px;"
        type="date"
        value-format="YYYY-MM-DD"
        placeholder="选择日期">
      </el-date-picker>
      <el-input v-model="query.nameCn" placeholder="请输入图片名称" style="width: 120px;margin-right: 20px;"></el-input> -->
      <!-- <el-button type="primary" @click="emit('search')">查询</el-button> -->
      <span class="flex-1"></span>
      <el-button type="danger" @click="emit('deleteSelected')" :disabled="!selectImgList.length">删除</el-button>
      <el-button type="primary" @click="upload.click()">上传图片</el-button>
      <input type="file" style="display: none;" @change="uploadImage" ref="upload" multiple="true" accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { uploadFile } from '@/utils/upload.js'
import { ElMessage } from 'element-plus'
// import { addDiyImage } from '@/api/imageManage'

const upload = ref(null)
const emit = defineEmits(['search', 'update', 'delete'])
const props = defineProps({
  query: Object,
  selectImgList: Array
})

const uploadImage = (e) => {
  let files = e.target.files
  for (var i = 0; i < files.length; i++) {
    uploadFile(files[i], async function (result) {
      if (result.code == 200) {
        await addDiyImage(result.url, result.fileName, props.query.groupId)
        emit('update')
        console.log(result.url)
      } else {
        ElMessage ({ message: '图片上传失败,请重试', type: 'error' })
      }
    });
  }
}

</script>

<style lang="scss" scoped>

</style>