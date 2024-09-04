<template>
  <el-dialog
    v-model="dialogVisible"
    class="diy-select-image-wrapper"
    title=""
    :before-close="handleClose">
    <template #header>
      <category></category>
    </template>
    <groupSearch
      :query="query"
      :selectImgList="selectImgList"
      @search="handleSearch"
      @update="getImageList"
      @deleteSelected="handleDeleteImage">
    </groupSearch>
    <div class="image-content-box">
      <div class="custom-scroll-bar left-slide">
        <groupVue :currentGroup="query.groupId" @select="handleSelectGroup"></groupVue>
      </div>
      <div class="right-box" v-loading="isLoading">
        <div class="gray" v-if="!imageList.length" style="margin: 180px 0 0 300px;">暂无图片</div>
        <div
          class="right-image-item"
          v-for="(item, index) in imageList"
          :key="index"
          @click="checkImage(item.id)">
          <img :src="item.url" alt="">
          <div class="text-overflow image-title">{{ item.nameCn }}</div>
          <div class="delete-box"><span class="iconfont icon-shanchu2" @click="handleDeleteImage(item.id)"></span></div>
          <div class="image-mask" v-show="selectImgList.includes(item.id)">
            <span class="iconfont icon-xuanzhong"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      style="margin-left: 400px;"
      background
      @current-change="selectPage"
      :current-page="query.pageNum"
      layout="prev, pager, next"
      :page-size="query.pageSize"
      :total="listTotal"
      v-if="listTotal">
    </el-pagination>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleSubmit" :disabled="!selectImgList.length">确定</el-button>
        <el-button @click="handleClose">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import category from './category.vue'
import groupVue from './group.vue'
import groupSearch from './search.vue'
// import imageMenu from './components/imageMenu.vue'
import { uploadFile } from '@/utils/upload'
import { getDiyImage, deleteDiyImage } from '@/api/imageManage'

import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const query = ref({
  nameCn: '',
  startDate: '',
  endDate: '',
  groupId: '',
  pageNum: 1,
  pageSize: 8
})

const state = reactive({
  selectType: 'local',
  isMultiple: false, // 是否多选
  callback: null
})

const isLoading = ref(false)
const listTotal = ref(0)
const imageList = ref([])
const selectImgList = ref([])

const init = (cb, multiple) => {
  state.callback = cb
  state.isMultiple = multiple
  selectImgList.value = []
  dialogVisible.value = true
}

// 查询
const handleSearch = () => {
  query.value.pageNum = 1
  getImageList()
}

// 分组查询
const handleSelectGroup = groupId => {
  query.value.groupId = groupId
  query.value.pageNum = 1
  getImageList()
}

// 选中图片
const checkImage = id => {
  let _index = selectImgList.value.indexOf(id)
  _index > -1 ? selectImgList.value.splice(_index, 1) : selectImgList.value.push(id)
}

// 删除图片
const handleDeleteImage = async id => {
  id = id || selectImgList.value.join(',')
  let res = await ElMessageBox.confirm(`此操作将永久删除图片, 是否继续?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning', } )
  if (res === 'confirm') {
    await deleteDiyImage(id)
    getImageList()
  }
}

const handleSubmit = () => {
  console.log('handleSubmit', selectImgList)
  let resultList = selectImgList.value.map((id) => {
    return imageList.value.filter(obj => obj.id === id)[0]
  })
  // let res = '',name=""
  if (state.isMultiple) {
    typeof state.callback === 'function' && state.callback(resultList)
  } else {
    typeof state.callback === 'function' && state.callback(resultList[0])
  }
  handleClose()
}

// 获取图片列表
const getImageList = async () => {
  isLoading.value = true
  let { rows, total } = await getDiyImage(query.value)
  isLoading.value = false
  imageList.value = rows
  listTotal.value = total
  selectImgList.value = []
}

const selectPage = page => {
  query.value.pageNum = page
  getImageList()
}

const handleClose = () => {
  dialogVisible.value = false
}

onMounted(() => {
  Bus.on('selectImage', (cb, multiple = false) => init(cb, multiple))
  getImageList()
})
</script>

<style lang="scss" scoped>

.image-content-box {
    display: flex;
    height: 380px;
    margin-top: 20px;
    margin-bottom: 30px;
    .left-slide {
      width: 180px;
      height: 100%;
      margin-bottom: 20px;
      & > div {
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }
      }
      .add-image-group {
        color: #3296FA;
        background-color: #fff;
        border: 1px solid #F4F5F9;
      }
      .image-group-item {
        position: relative;
        text-align: left;
        display: flex;
        align-items: center;
        padding-right: 10px;
        span.file {
          color: #EDCE86;
          margin-left: 10px;
          margin-right: 4px;
        }
        span.item-input {
          flex: 1;
          input {
            width: 100%;
            height: 30px;
            &:disabled {
              cursor: pointer;
              background-color: unset;
              border: 0;
            }
          }
        }
        span.edit, span.delete {
          color: #3296FA;
          display: none;
          &.delete {
            color: red
          }
        }
        &:hover span.edit, &:hover span.delete {
          display: block;
        }
        &.active {
          color: #000;
          background-color: #fff;
        }
      }
    }
    .right-box {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 10px;
      .right-image-item {
        position: relative;
        width: 160px;
        height: 160px;
        margin: 10px;
        border: 2px solid transparent;
        border-radius: 8px;
        overflow: hidden;
        img{
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
        .image-title {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          color: #fff;
          text-align: left;
          padding: 0 20px;
          background: rgba(0, 0, 0, .35);
        }
        .delete-box {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 30px;
          height: 30px;
          line-height: 30px;
          color: #fff;
          background-color: #428BCA;
          cursor: pointer;
          z-index: -1;
          text-align: center;
        }
        .image-mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .5);
          display: flex;
          align-items: center;
          color: #fff;
          justify-content: center;
          span.iconxuanzhong {
            font-size: 40px;
          }
        }
        &:hover {
          border: 2px solid #428bca;
          .delete-box {
            z-index: 3;
          }
        }
      }
    }
  }

</style>