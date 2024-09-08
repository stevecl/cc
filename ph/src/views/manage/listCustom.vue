<template>
  <div class="flex flex-col page-manager-wrap">
    <pageTitle :title="'自定义页面'"></pageTitle>
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

const router = new useRouter()
const pagesList = ref([])
const query = ref({
    pageNum: 1,
    pageSize: 10,
    searchKey: '',
    category: 'CUSTOM_PAGE', // 页面分类(首页:HOME,惠生活:HSH,会员中心:MEMBER_CENTER,自定义页面:CUSTOM_PAGE,底部菜单:BOTTOM_MENU,启动广告:HOME_ADVERT)
    sourceType: 'MARKET_APPLETS'
  })

const handleAdd = () => {
  router.push({ name: 'edit', query: { type: 'CUSTOM_PAGE', id: '' } })
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