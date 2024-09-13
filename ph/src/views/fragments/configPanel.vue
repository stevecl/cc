// 模块配置 编辑框
<template>
  <div class="diy-edit-box">
    <div class="edit-config-box">
      <div class="header-info">
        <p class="title">{{ activeItem.title }}</p>
        <template  v-if="baseInfo.category !== 'BOTTOM_MENU'">
          <p class="pointer btn" @click="emit('copy')">
            <span class="iconfont icon-fuzhi1"></span>
            <span>复制</span>
          </p>
          <p class="pointer btn" @click="emit('delete')">
            <span class="iconfont icon-shanchu2"></span>
            <span>删除</span>
          </p>
        </template>
      </div>
      <component
        class="custom-scroll-bar edit-config-module"
        :config="activeItem.config"
        :is="activeItem.configComponent || pageSet">
      </component>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import pageSet from './pageSet.vue';

const emit = defineEmits(['copy', 'delete'])
const props = defineProps({
  activeItem: Object,
})

const baseInfo = inject('baseInfo')
</script>

<style lang="scss" scoped>
.diy-edit-box {
  position: relative;
  width: 500px;
  font-size: 12px;
  background-color: #ffffff;
  transition: all 0.5s ease 0s;
  // padding: 10px 0 20px 10px;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  .edit-config-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    .header-info {
      width: calc(100% - 80px);
      background-color: #fff;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .title {
        flex: 1;
        height: 36px;
        line-height: 36px;
        font-size: 22px;
        font-weight: bold;
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
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
