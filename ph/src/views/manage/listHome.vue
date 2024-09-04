<template>
  <div class="flex flex-col page-manager-wrap">
    <pageTitle :title="'首页'"></pageTitle>
    <div class="flex-1 flex flex-col">
      <pageSearch
        :query="query"
        @update:search="query.nameCn = $event"
        @search="getList"
        @add="handleAdd"
        >
      </pageSearch>
      <moduleList :datas="pagesList" @update="getList" ></moduleList>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import pageTitle from '@/components/pageTitle.vue';
import pageSearch from './components/pageSearch.vue';
import moduleList from './components/moduleList.vue';

import { getModuleList } from '@/api'
import { useCommonStore } from '@/stores/common'
const { appCode } = useCommonStore()

const router = new useRouter()
const pagesList = ref([])
const query = ref({
    pageNum: 1,
    pageSize: 10,
    searchKey: '',
    category: 'HOME',
    sourceType: 'MARKET_APPLETS'
  })

const handleAdd = () => {
  router.push({ name: 'edit', query: { type: 'HOME', id: '' } })
}

const getList = async () => {
  let { dataList } = await getModuleList(query.value)
  pagesList.value = dataList
  console.log(pagesList.value)
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