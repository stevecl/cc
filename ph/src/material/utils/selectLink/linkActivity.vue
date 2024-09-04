<template>
  <div class="activity-link">
    <div class="activity-link_item" v-for="(item, index) in dataList" :key="index">
      <el-tag type="success" effect="dark">活动</el-tag>
      <span class="text">{{ item.activityName }}</span>
      <el-button type="primary" size="small" @click="emit('select', `/pages/activity/activity?numberCode=${item.numberCode}`)">选择</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCommonStore } from '@/stores/common'
import { getActivityList } from '@/api/diyLink'
const { appCode } = useCommonStore()

const emit = defineEmits(['select'])
const dataList = ref([])

const getDatas = async () => {
  let res = await getActivityList({ mallCode: appCode })
  dataList.value = res.rows
  console.log('res', res)
}

onMounted(() => {
  getDatas()
})

</script>

<style lang="scss" scoped>
.activity-link {
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