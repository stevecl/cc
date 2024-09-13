// 模块选择框   页面
<template>
  <div class="module-select-box">
    <div class="module-list" v-for="(item, index) in materialConfig" :key="index">
      <div class="module-list_type">{{ item.name }}({{ item.data.length }})</div>
      <div class="module-list_data">
        <div
          class="module-list_data_item"
          :style="bgStyle(com.icon)"
          v-for="(com, c_index) in item.data"
          :key="'c_'+c_index"
          @click="emit('add', materialDatas[com.component])">
          <p class="title">{{ com.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue';
import { useCommonStore } from '@/stores/common'
import materialConfig from '@/datas/material'

const { materialDatas } = useCommonStore()

const emit = defineEmits(['add', 'global'])
const baseInfo = inject('baseInfo')

const bgStyle = file => ({ backgroundImage: `url(${new URL(`../../assets/images/default/${file}`, import.meta.url).href})` })

const selectMaterialList = computed(() => {
  let arr = Object.keys(materialDatas).filter(key => !['advert', 'tabbar'].includes(key))
  return arr
})

onMounted(async () => {
  if (Object.keys(materialDatas).some(key => !materialDatas[key].title)) {
    for (const key in materialDatas) {
      let defConfig = (await materialDatas[key].getDefaultConfig()).default
      materialDatas[key].title = defConfig.title
      materialDatas[key].defConfig = defConfig
      delete materialDatas[key].getDefaultConfig
    }
  }
})

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.module-select-box{
  width: 300px;
  height: 100%;
  padding: 16px;
  .module-list {
    // flex: 1;
    border: 1px solid #EEEEEE;
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
    &_type {
      display: flex;
      align-items: center;
      height: 40px;
      font-size: 13px;
      font-weight: 700;
      color: #666;
      padding: 0 12px;
      background-color: #F7F7FA;
      border-bottom: 1px solid #EEEEEE;
      cursor: pointer;
    }
    &_data {
      display: flex;
      flex-wrap: wrap;
      padding-left: 7px;
      &_item {
        position: relative;
        width: 76px;
        height: 76px;
        margin: 7px 7px 7px 0;
        border: 1px solid #fff;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          border-color: #FE6903;
        }
        .title {
          font-size: 12px;
          text-align: center;
          line-height: 28px;
          color: #333;
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 0;
        }
      }
    }
  }

  .btn-item {
    width: 98px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #606266;
    text-align: center;
    background-color: #f2f2f3;
    border-radius: 5px;
    opacity: 0.99;
    cursor: pointer;
    margin-bottom: 10px;
    &.selected {
      color: #fff;
      background-color: #409EFF;
    }
    &:hover {
      color: #0081ff;
      background-color: #e7f1fb;
    }
    &:nth-child(2n + 1) {
      margin-right: 10px;
    }
  }
}
</style>
