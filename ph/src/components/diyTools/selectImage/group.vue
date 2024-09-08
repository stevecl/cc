<template>
  <div class="wrap">
    <div class="group-item add" @click="handleAdd">
      <el-icon><Plus /></el-icon>
      <span class="ml10 name">添加分组</span>
    </div>
    <div class="group-item" :class="{'active': !currentGroup}" @click="emit('select', '')">
      <span class="flex-1 name">全部</span>
    </div>
    <div
      class="group-item"
      :class="{'active': currentGroup === item.picCategoryId}"
      v-for="(item, index) in groupList"
      :key="index"
      @click="emit('select', item.picCategoryId)">
      <span class="flex-1 text-overflow name">{{ item.picCategoryName }}</span>
      <span title="编辑" class="iconfont icon-edit1 edit" @click="handleEdit(item)"></span>
      <span title="删除" class="iconfont icon-delete1 delete" @click="handleDelete(item)"></span>
    </div>
  </div>
  <el-dialog
    v-model="editDialogVisible"
    :title="editGroup.picCategoryId ? '编辑分组' : '添加分组'"
    width="400"
    append-to-body>
      <el-form-item label="分组名称">
        <el-input v-model="editGroup.picCategoryName" autocomplete="off" />
      </el-form-item>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
// import { getImageGroupList, addImageGroup, editImageGroup, deleteImageGroup } from '@/api/imageManage'
import { getImageGroupList } from '@/api'
import { ElMessage } from 'element-plus'

const emit = defineEmits(['select'])
const props = defineProps({
  currentGroup: String
})

const groupList = ref([])
const editDialogVisible = ref(false)
const selectGroup = ref(null)
const editGroup = reactive({
  picCategoryId: '',
  picCategoryName: ''
})

const getGroupList = async () => {
  let { dataList } = await getImageGroupList()
  console.log('dataList', dataList)
  groupList.value = dataList
}
const handleAdd = () => {
  editGroup.picCategoryId = ''
  editGroup.picCategoryName = ''
  changeEditDialogVisible()
}
const handleEdit = item => {
  selectGroup.value = item
  editGroup.picCategoryId = item.picCategoryId
  editGroup.picCategoryName = item.picCategoryName
  changeEditDialogVisible()
  console.log('edit:', item)
}
const handleDelete = async item => {
  await deleteImageGroup(item.id)
  changeEditDialogVisible(false)
  getGroupList()
}
const handleSubmit = async () => {
  if (!editGroup.picCategoryName) return ElMessage ({ message: '分组名称不能为空', type: 'warning' })
  editGroup.picCategoryId ? await editImageGroup({ ...selectGroup.value, picCategoryName: editGroup.picCategoryName }) : await addImageGroup(editGroup.picCategoryName)
  changeEditDialogVisible(false)
  getGroupList()
  console.log('submit', editGroup.picCategoryName)
}

const changeEditDialogVisible = (isOpen = true) => {
  editDialogVisible.value = isOpen
}

onMounted(async () => {
  getGroupList()
})

</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  overflow: auto;
  .group-item {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    border: 1px solid #F4F5F9;
    padding: 0 10px;
    cursor: pointer;
    &:first-of-type {
      border-bottom: none;
    }
    &.add {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--lightColor);

    }
    .iconfont {
      display: none;
    }
    &.active {
      background-color: #F5F7FA;
    }
    &:hover {
      background-color: #F5F7FA;
      .iconfont {
        display: unset;
      }
    }
    .iconfont.edit {
      color: #429FFF;
      margin: 0 10px;
    }
    .iconfont.delete {
      color: #FF0000;
      margin-right: 10px;
    }
  }
}
</style>