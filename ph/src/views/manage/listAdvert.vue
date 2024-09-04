<template>
  <div class="flex flex-col page-manager-wrap">
    <pageTitle :title="'启动广告'"></pageTitle>
    <div class="flex-1 flex flex-col">
      <pageSearch :query="query" @update:search="query.nameCn = $event" @search="getList" @add="handleAdd">
      </pageSearch>
      <!-- 表格内容 -->
      <el-table class="" ref="multipleTable" :data="advertList" tooltip-effect="dark" style="width: 100%"
        @selection-change="handleSelectionChange">
        <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
        <el-table-column prop="nameCn" label="广告名称" width="300" align="center">
          <template #default="scope">
            <span class="text-overflow page-title" :title="scope.row.nameCn">
              {{ scope.row.nameCn }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="pageType" label="状态" align="center">
          <template #default="scope">
            <el-switch
              v-model="scope.row.isState"
              :active-value="1"
              :inactive-value="0"
              @change="changeStatus(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 30px;text-align: center;"
        background
        layout="prev, pager, next"
        @current-change="selectPage"
        :current-page="query.pageNum"
        :page-size="query.pageSize"
        :total="total"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'

import pageTitle from '@/components/pageTitle.vue';
import pageSearch from './components/pageSearch.vue';

import { deleteDiyAdvert, getDiyAdvertList, editAdvertStatus } from '@/api/diyAdvert'
import { useCommonStore } from '@/stores/common'
const { appCode } = useCommonStore()
const router = useRouter()

const advertList = ref([])
const total = ref(0)
const query = ref({
  nameCn: '',
  pageNum: 1,
  pageSize: 10,
  mallCode: appCode
})

const handleAdd = () => {
  router.push({ name: 'edit', query: { type: 'advert', id: '' } })
}

const changeStatus = async (item) => {
  await editAdvertStatus(item.numberCode, item.isState)
  getList()
}

const selectPage = page => {
  query.value.pageNum = page
  getList()
}

const getList = async () => {
  let { rows, total: totalCount } = await getDiyAdvertList(query.value)
  advertList.value = rows
  total.value = totalCount
}

const handleSelectionChange = (val) => { }

const handleEdit = (item) => {
  router.push({ name: 'edit', query: { type: 'advert', id: item.id } })
}

const handleDelete = async (item) => {
  let res = await ElMessageBox.confirm(`确定要删除广告【${item.nameCn}】?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning', } )
  if (res === 'confirm') {
    await deleteDiyAdvert(item.id)
    getList()
  }
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.page-manager-wrap {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
}
</style>