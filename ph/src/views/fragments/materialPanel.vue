// 模块选择框   页面
<template>
  <div class="module-select-box">
    <template v-for="(item, index) in materialConfig" :key="index">
      <div class="module-list" v-if="!item.permission || item.permission?.includes(baseInfo.category)">
        <div class="module-list_type" @click="handleClick(item)">{{ item.name }}({{ item.data.length }}){{ item.open }}<span class="iconfont icon-3101jiantou3" :class="{up: hideList.includes(item.name)}"></span></div>
        <div class="module-list_data" v-if="!hideList.includes(item.name)">
          <div
            class="module-list_data_item"
            :style="bgStyle(com.icon)"
            v-for="(com, c_index) in item.data"
            :key="'c_'+c_index"
            @click="emit('add', materialDatas[com.component], com.unique)">
            <p class="title">{{ com.name }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted } from 'vue';
import { useCommonStore } from '@/stores/common'
import materialConfig from '@/datas/material'

const { materialDatas } = useCommonStore()
console.log('materialDatas', materialConfig)

const emit = defineEmits(['add', 'global'])
const baseInfo = inject('baseInfo')

const bgStyle = file => ({ backgroundImage: `url(${new URL(`../../assets/images/default/${file}`, import.meta.url).href})` })

const hideList = ref([])
const handleClick = (item) => {
  let index = hideList.value.indexOf(item.name)
  console.log('asd', item.name, index)
  if (index > -1) {
    hideList.value.splice(index, 1)
  } else {
    hideList.value.push(item.name)
  }
}

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
  overflow: auto;
  .module-list {
    // flex: 1;
    border: 1px solid #EEEEEE;
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
    &_type {
      position: relative;
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
      .iconfont {
        position: absolute;
        right: 10px;
        &.up {
          transform: rotate(180deg);
        }
      }
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
