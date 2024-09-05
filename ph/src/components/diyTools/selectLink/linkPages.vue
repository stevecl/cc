<template>
  <div class="page-link">
    <div class="page-link_item" v-for="(item, index) in dataList" :key="index">
      <el-tag :type="item.tag" effect="dark">{{ item.typeName }}</el-tag>
      <span class="text">{{ item.nameCn }}</span>
      <el-button type="primary" size="small" @click="emit('select', `/pages/index/preview?numberCode=${item.numberCode}`)">选择</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDiyPageList } from '@/api/diyPage'
import { useCommonStore } from '@/stores/common'
const { appCode } = useCommonStore()

const emit = defineEmits(['select'])
const dataList = ref([])

const getDatas = async () => {
  let { data } = await getDiyPageList({ mallCode: appCode })
  let _ = {
    mallHomePage: {
      tag: 'info',
      typeName: '首页'
    },
    memberCenter: {
      tag: '',
      typeName: '个人中心'
    },
    customPage: {
      tag: 'success',
      typeName: '自定义页面'
    }
  }
  dataList.value = data.map(obj => {
    obj.tag = _[obj.type].tag
    obj.typeName = _[obj.type].typeName
    return obj
  })
}

onMounted(() => {
  getDatas()
})

</script>

<style lang="scss" scoped>
.page-link {
  &_item {
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px dashed #ddd;
    .text{
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>