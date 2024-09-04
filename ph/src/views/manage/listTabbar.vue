<template>
  <div class="flex flex-col page-manager-wrap">
    <pageTitle :title="'底部菜单'"></pageTitle>
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
import moduleList from './components/menuList.vue';

import { useCommonStore } from '@/stores/common'
const { appCode } = useCommonStore()

const router = new useRouter()
const pagesList = ref([])
const query = ref({
  nameCn: '',
  mallCode: appCode
})

const handleAdd = () => {
  router.push({ name: 'edit', query: { type: 'menu', id: '' } })
}

const getList = async () => {
  // let { code, data } = await getDiyMenuList(query.value)
  // pagesList.value = data
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