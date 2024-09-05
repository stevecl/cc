// 模块配置 编辑框
<template>
  <div class="diy-edit-box">
    <div class="edit-config-box">
      <div class="header-info">
        <p class="title">{{ activeItem.title }}</p>
        <template  v-if="baseInfo.type !== 'menu'">
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
        :globalConfig="globalConfig"
        :is="activeItem.configComponent || pageSet">
      </component>
    </div>
    <div class="edit-config-done">
      <el-button type="primary" @click="emit('submit')">保存</el-button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import pageSet from './pageSet.vue';

const emit = defineEmits(['copy', 'delete', 'submit'])
const props = defineProps({
  activeItem: Object,
  globalConfig: Object,
})

const baseInfo = inject('baseInfo')
</script>

<style lang="scss" scoped>
.diy-edit-box {
  position: relative;
  // width: 630px;
  width: 700px;
  height: 700px;
  font-size: 12px;
  background-color: #ffffff;
  border-radius: 20px;
  transition: all 0.5s ease 0s;
  padding: 10px 0 20px 40px;
  .edit-config-box {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding-right: 40px;
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
      overflow: scroll;
      padding-right: 80px;
    }
  }
  .edit-config-done {
    text-align: right;
  }
}
</style>
