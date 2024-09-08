<template>
  <!-- 搜索条件 -->
  <div class="search-box">
    <span class="cur-title">我的模版</span>
    <el-input class="mr20 search-input" v-model="searchVal" placeholder="输入名称查询"></el-input>
    <el-button type="primary" @click="emit('search')">搜索</el-button>
    <el-button type="primary" :icon="Plus" @click="emit('add')">添加</el-button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Plus } from '@element-plus/icons-vue'

const emit = defineEmits(['search', 'add'])

const searchVal = ref('')
watch(() => searchVal.value, newVal => {
  emit('update:search', newVal)
})

</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  align-items: center;
  margin: 0 0 20px;
  text-align: left;
  .cur-title {
    font-size: 24px;
    color: #303133;
    margin-right: 20px;
    font-weight: 600;
  }
  .search-input {
    width: 380px;
  }
}
</style>