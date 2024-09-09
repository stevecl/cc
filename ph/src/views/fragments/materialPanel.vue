// 模块选择框   页面
<template>
  <div class="module-select-box">
    <div class="module-list" v-if="!['BOTTOM_MENU', 'HOME_ADVERT'].includes(baseInfo.category)">
      <div class="title">基础</div>
      <div class="flex base-module-box">
        <template v-for="(key, index) in selectMaterialList">
          <p
            :class="{'btn-item': true, selected: false}"
            @click="emit('add', materialDatas[key])">
            {{ materialDatas[key].title }}
          </p>
        </template>
      </div>
      <div class="title">全局</div>
      <div class="flex global-module-box">
        <p :class="{'btn-item': true, selected: false}" @click="emit('global')">全局设置</p>
      </div>
    </div>
    <!-- <diy-imageWindow></diy-imageWindow> -->
    <!-- <diy-video></diy-video> -->
     <!-- <diy-swiper></diy-swiper> -->
  </div>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue';
import { useCommonStore } from '@/stores/common'
const { materialDatas } = useCommonStore()

const emit = defineEmits(['add', 'global'])
const baseInfo = inject('baseInfo')

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
  display: flex;
  flex-direction: column;
  width: 206px;
  max-height: 800px;
  margin-left: 160px;
  margin-right: 70px;
  padding-top: 20px;
  .module-list {
    flex: 1;
    .title {
      color: #909399;
      padding-left: 14px;
      margin-bottom: 10px;
    }
    .base-module-box {
      margin-bottom: 30px;
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
