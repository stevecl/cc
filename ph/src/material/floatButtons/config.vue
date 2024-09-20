<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'图标间距'" :labelWidth="70">
      <el-slider style="width: 250px;" v-model="config.iconSpace" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.iconSpace }}<span>px</span></span>
    </configItem>
    <configItem :label="'距顶/底部'" :labelWidth="70">
      <el-slider style="width: 250px;" v-model="config.marginTop" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.marginTop }}<span>px</span></span>
    </configItem>
    <configItem :label="'距左/右侧'" :labelWidth="70">
      <el-slider style="width: 250px;" v-model="config.marginLeft" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.marginLeft }}<span>px</span></span>
    </configItem>

    <div class="module-edit-title">组件设置</div>
    <configItem :label="'图标样式'">
      <el-radio-group v-model="config.showType">
        <el-radio :value="1">图标</el-radio>
        <el-radio :value="2">图片</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'图标颜色'" v-show="config.showType === 1">
      <selectColor v-model="config.iconColor" :resetColor="'#fff'"></selectColor>
      <div class="label2">背景颜色</div>
      <selectColor v-model="config.bgColor" :resetColor="'#FD463E'"></selectColor>
    </configItem>
    <configItem :label="'显示位置'">
      <el-radio-group v-model="config.showPosi">
        <el-radio :value="1">左上角</el-radio>
        <el-radio :value="2">右上角</el-radio>
        <el-radio :value="3">右下角</el-radio>
        <el-radio :value="4">左下角</el-radio>
      </el-radio-group>
    </configItem>
    
    <div class="tips-box">建议尺寸: 80 * 80 (大小建议不超过800k，以免影响加载速度)</div>
    <draggable v-model="config.datas" itemKey="index">
      <template #item="{ element: item, index }">
        <div>
          <listBox >
            <template #left>
              <div class="left-icon">
                <span :class="['iconfont', item.icon]" style="font-size: 26px" v-if="config.showType === 1"></span>
                <p @click="selectIcon(item)" v-if="config.showType === 1">选择图标</p>
                <img :src="item.img || getDefaultImage('picture.png')" alt="" v-if="config.showType === 2 && item.img">
                <p @click="selectImage(item)" v-if="config.showType === 2">选择图片</p>
              </div>
            </template>
            <div class="right-icon">
              <p style="margin-top: 20px;">
                <input class="cus-input" type="text" v-model="item.link" placeholder="请选择链接或输入链接地址">
                <span class="cus-btn" @click="selectLink(item)">选择链接</span>
              </p>
            </div>
            <span class="close" title="删除" @click="handleDelete(item)"><el-icon><Close /></el-icon></span>
          </listBox>
        </div>
      </template>
    </draggable>
    <div class="cus-list-btn" @click="handleAdd">添加一个</div>
    <div class="cus-list-btn" @click="handleAdd('top')">添加返回顶部</div>
  </div>
</template>
        
<script setup>
import draggable from 'vuedraggable'
import { ElMessage, ElMessageBox } from 'element-plus'

import useDefaultSource from '@/hooks/useDefaultSource'

const props = defineProps({
  config: Object
})

const { getDefaultImage } = useDefaultSource()

const selectIcon = item => Bus.emit('selectIcon', icon => item.icon = icon)
const selectImage = item => Bus.emit('selectImage', res => item.img = res.picUrl)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)

const handleAdd = (type = '') => {
  if (props.config.datas.length >= 4) return ElMessage({ message: '最多展示4个', type: 'warning' })
  let _obj = {
    icon: 'icon-shouye',
    img: '',
    link: ''
  }
  props.config.datas.push( _obj )
}

const handleDelete = async item => {
  if (props.config.datas.length === 1) return ElMessage({ message: '至少保留一个', type: 'warning' })
  let res = await ElMessageBox.confirm(`确定删除吗?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' })
  if (res === 'confirm') {
    let index = props.config.datas.indexOf(item)
    props.config.datas.splice(index, 1)
  }
}

</script>

<style lang="scss" scoped>
.cus-list-btn {
  margin-bottom: 20px;
}
</style>