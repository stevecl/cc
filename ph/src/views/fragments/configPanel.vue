// 模块配置 编辑框
<template>
  <div class="diy-edit-box">
    <div class="header-info">
      <p class="title">
        <img :src="getIconUrl(activeItem.name)" alt="">
        {{ activeItem.title }}
      </p>
      <!-- <template  v-if="baseInfo.category !== 'BOTTOM_MENU'">
        <p class="pointer btn" @click="emit('copy')">
          <span class="iconfont icon-fuzhi1"></span>
          <span>复制</span>
        </p>
        <p class="pointer btn" @click="emit('delete')">
          <span class="iconfont icon-shanchu2"></span>
          <span>删除</span>
        </p>
      </template> -->
    </div>
    <div class="custom-scroll-bar edit-config-module">
      <component
        :config="activeItem.config"
        :is="activeItem.configComponent || pageSet">
      </component>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import pageSet from './pageSet.vue';
import materialConfig from '@/datas/material'


let materialList = materialConfig.reduce((res, cur)=> { return [...res, ...cur.data] }, [])


const emit = defineEmits(['copy', 'delete'])
const props = defineProps({
  activeItem: Object,
})

const baseInfo = inject('baseInfo')

const getIconUrl = name => {
  let iconName = materialList.filter(obj => obj.component === name)[0]?.icon
  return new URL(`../../assets/images/default/${iconName || 'course.png'}`, import.meta.url).href
}

</script>

<style lang="scss" scoped>
.diy-edit-box {
  position: relative;
  width: 500px;
  font-size: 12px;
  background-color: #ffffff;
  transition: all 0.5s ease 0s;
  box-sizing: border-box;
  .header-info {
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 10px;
    .title {
      position: relative;
      flex: 1;
      height: 36px;
      line-height: 36px;
      font-size: 22px;
      font-weight: bold;
      padding-left: 50px;
      img {
        position: absolute;
        top: -10px;
        left: -13px;
        width: 70px;
      }
    }
    .btn {
      width: 78px;
      height: 30px;
      line-height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      margin-left: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
      .iconfont {
        font-size: 20px;
        margin-right: 6px;
      }
    }
  }
  .edit-config-module {
    height: calc(100% - 56px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 20px;
  }
}
</style>
