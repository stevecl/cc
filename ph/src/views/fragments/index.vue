<template>
  <div class="wrapper">
    <pageTitle :title="'編輯'"></pageTitle>
    <div class="content-box">
      <materialPanel :activeIndex="activeIndex" @add="handleAddModule" @global="activeIndex = -1"></materialPanel>
      <engine :pageConfig="globalConfig" @select="selectCurrentModule(-1)">
        <draggable
          :style="{ height: baseInfo.type === 'advert' ? '100%' : 'unset' }"
          v-model="setting"
          :move="handleMove"
          @update="handleMoveModule"
          item-key="index">
          <template #item="{ element: item, index: index }">
            <component
              :item-key="index"
              :class="{'editing': true, 'selected': index === activeIndex}"
              :config="item.config"
              :is="item.componentName"
              @click="selectCurrentModule(index)">
            </component>
          </template>
        </draggable>
      </engine>
      <div class="c_line"></div>
      <configPanel
        :activeItem="activeItem"
        :globalConfig="globalConfig"
        @copy="handleCopy"
        @delete="handleDelete"
        @submit="handleSubmit"
        >
      </configPanel>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ref, onMounted, computed, watch, nextTick, provide } from 'vue';
import { useRoute } from 'vue-router'

import materialPanel from './materialPanel.vue';
import engine from './renderEngine.vue'
import configPanel from './configPanel.vue';
import pageTitle from '@/components/pageTitle.vue';
import { ElMessageBox } from 'element-plus'

import { deepClone } from '@/utils'


import { useCommonStore } from '@/stores/common'
import useEditHook from './editHook'
const { appCode } = useCommonStore()

const route = useRoute()

const baseInfo = ref({
  id: '',
  category: 'HOME', // 页面分类(首页:HOME,惠生活:HSH,会员中心:MEMBER_CENTER,自定义页面:CUSTOM_PAGE,底部菜单:BOTTOM_MENU,启动广告:HOME_ADVERT)
  sourceType: 'MARKET_APPLETS', // 终端类型SourceTypeEnum(普惠空间的店:MARKET_APPLETS)
  templateName: '页面名称', // 页面名称
  templateTitle: '页面标题', // 页面标题
  templateImg: 'https://img0.baidu.com/it/u=3773090653,2338589126&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500', // 封面图片
  backgroundColor: '#666', // 背景颜色
  searchKey: '首页', // 关键字
  templateConfigParams: '[]', // 配置信息
  componentIds: '', // 组件id
})
const globalConfig = ref({

})
provide('baseInfo', baseInfo.value)
provide('globalConfig', globalConfig.value)

const setting = ref([])
const activeIndex = ref(-1) // -1 全局设置 0-~ 高亮模块序列号
const activeItem = computed(() => {
  return setting.value[activeIndex.value] || {
    title: '全局设置',
    isGlobal: true,
    config: baseInfo.value
  }
})

const { initData, submitData } = useEditHook(baseInfo, globalConfig, setting, activeIndex)

// 添加模块
const handleAddModule = item => {
  let newItem = deepClone(item)
  newItem.config = deepClone(newItem.defConfig)
  if (activeIndex.value === -1) {
    setting.value.push(newItem)
    activeIndex.value = setting.value.length - 1
  } else {
    setting.value.splice(activeIndex.value + 1, 0 , newItem)
    activeIndex.value = activeIndex.value + 1
  }
}
const handleMove = e => {
  return activeIndex.value >= 0
}
const handleMoveModule = e => {
  activeIndex.value = e.newIndex
}
// 切换选中模块
const selectCurrentModule = index => {
  activeIndex.value = index
}
// 复制
const handleCopy = () => {
  let targetIndex = activeIndex.value
  if (targetIndex === -1) return
  let newModule = deepClone(setting.value[targetIndex])
  setting.value.splice(targetIndex + 1, 0 , newModule)
  activeIndex.value += 1;
}
// 删除
const handleDelete = async () => {
  let targetIndex = activeIndex.value
  if (targetIndex === -1) return
  let res = await ElMessageBox.confirm(`确定删除吗?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' })
  if (res === 'confirm') {
    setting.value.splice(targetIndex, 1)
    if (targetIndex >= setting.value.length - 1) activeIndex.value = setting.value.length - 1
  }
}
// 保存
const handleSubmit = () => {
  let { type } = baseInfo.value
  submitData(type)
}

onMounted(() => {
  let { type, id = '' } = route.query
  setTimeout(() => {
    initData(type, id)
    // let initMethods = {
    //   menu: initMenuDatas,
    //   advert: initAdvertDatas,
    //   page: initPageDatas
    // }
    // initMethods[type] ? initMethods[type](id) : initMethods['page'](id)
  }, 500)
})

</script>

<style lang="scss" scoped>
.mr70 {
  margin-right: 70px;
}

.mr40 {
  margin-right: 40px;
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  // width: 100%;
  padding: 20px 20px 0 20px;
  text-align: left;

  .content-box {
    flex: 1;
    display: flex;
    padding-top: 50px;
    background-color: #fff;
    overflow: auto;

    &>div {
      flex-shrink: 0;
    }

    &>.c_line {
      margin-top: 10px;
      height: calc(100% - 10px);
      width: 1px;
      background-color: #eaedf0;
    }

    .editing {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        min-height: 10px;
        z-index: 22;
        cursor: move;
      }

      &:hover::after {
        border: 2px dashed #00a0e9;
      }

      &.selected::after {
        border: 2px dashed #00a0e9;
      }
    }
  }
}
</style>
