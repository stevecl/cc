<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ marginTop }}<span>px</span></span>
    </configItem>
    <configItem :label="'上边距'" :labelWidth="70">
      <inputNumber v-model="paddingTop"></inputNumber>
      <div class="label2 wid70">左右边距(内)</div>
      <inputNumber v-model="paddingLeft"></inputNumber>
    </configItem>
    <configItem :label="'下边距'" :labelWidth="70">
      <inputNumber v-model="paddingBottom"></inputNumber>
      <div class="label2 wid70">左右边距(外)</div>
      <inputNumber v-model="marginLeft"></inputNumber>
    </configItem>

    <div class="module-edit-title">组件设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.bgColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'背景图片'">
      <input type="text" class="cus-input" v-model="config.style.bgImageUrl">
      <span class="cus-btn" @click="selectBgImage">选择图片</span>
      <span class="cus-btn" @click="config.style.bgImageUrl = ''">清除</span>
    </configItem>
    <div class="diy-edit-line"></div>
    
    <div class="tips-box">图片宽度：建议750像素</div>
    <draggable v-model="config.datas" >
      <template #item="{ element: item }">
        <listBox>
          <template #left>
            <el-image :src="item.url || getDefaultImage(item.defaultIcon)" fit="contain">
              <template #error>
                <div class="image-slot">
                  <el-icon><Picture /></el-icon>
                </div>
              </template>
            </el-image>
          </template>
          <template #default>
            <div class="right-icon">
              <p class="mb10">
                <input class="cus-input" type="text" v-model="item.url" placeholder="请选择图片或输入图片地址">
                <span class="cus-btn" @click="selectImage(item)">选择图片</span>
              </p>
              <p>
                <input class="cus-input" type="text" v-model="item.link" placeholder="请选择链接或输入链接地址">
                <span class="cus-btn" @click="selectLink(item)">选择链接</span>
              </p>
            </div>
            <span class="close" title="删除" @click="handleDelete(item)">
              <el-icon><Close /></el-icon>
            </span>
          </template>
        </listBox>
      </template>
    </draggable>
    <div class="cus-list-btn" @click="handleAdd">添加一个</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import draggable from 'vuedraggable'
import { ElMessage, ElMessageBox } from 'element-plus'

import useDefaultSource from '@/hooks/useDefaultSource'
import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

const { getDefaultImage } = useDefaultSource()
let { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectBgImage = () => Bus.emit('selectImage', res => props.config.style.bgImageUrl = res.picUrl)
const selectImage = item => Bus.emit('selectImage', res => item.url = res.picUrl)
const selectLink = item => Bus.emit('selectLink', link => item.link = link)

const handleAdd = () => {
  let _obj = {
    defaultIcon: 'banner.png',
    url: '',
    link: ''
  }
  props.config.datas.push( _obj )
}

const handleDelete = async item => {
  if (props.config.datas.length === 1) return ElMessage({ message: '至少保留一个', type: 'warning' })
  let res = await ElMessageBox.confirm(`确定删除吗?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning', } )
  if (res === 'confirm') {
    let index = props.config.datas.indexOf(item)
    props.config.datas.splice(index, 1)
  }
}

</script>

<style lang="scss">

</style>
