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
      <selectColor v-model="config.bgStyle.bgColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'背景图片'">
      <input type="text" class="cus-input" v-model="config.bgStyle.bgImageUrl">
      <span class="cus-btn" @click="selectBgImg">选择图片</span>
      <span class="cus-btn" @click="config.bgStyle.bgImageUrl = ''">清除</span>
    </configItem>

    <div class="module-edit-title">颜色设置</div>
    <configItem :label="'文字颜色'">
      <selectColor v-model="config.style.txtColor" :resetColor="'#333333'"></selectColor>
      <div class="label2 wid70">图标颜色</div>
      <selectColor v-model="config.style.iconColor" :resetColor="'#333333'"></selectColor>
    </configItem>

    <draggable v-model="config.datas" item-key="index">
      <template #item="{ element: item }">
        <listBox class="cus-list-nav-style">
          <template #left>
            <div class="left-icon" slot="left">
              <!-- <img :src="item.icon" :onerror="defaultImg(item)" alt=""> -->
              <span :class="['iconfont', item.icon]" style="font-size: 26px"></span>
              <p @click="selectIcon(item)">选择图标</p>
            </div>
          </template>
          <template #default>
            <div class="right-icon">
              <p class="mb10">
                <span class="label-text">文字</span>
                <input class="cus-input" type="text" maxlength="5" v-model="item.text" placeholder="留空则不展示">
              </p>
              <p>
                <input class="cus-input" disabled type="text" v-model="item.link.name" placeholder="请选择链接">
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
import draggable from 'vuedraggable'
import { ElMessage, ElMessageBox } from 'element-plus'

import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

let { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectBgImg = () => Bus.emit('selectImage', res => props.config.bgStyle.bgImageUrl = res.picUrl)
const selectIcon = item => Bus.emit('selectIcon', icon => item.icon = icon)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)

const handleAdd = () => {
  if (props.config.datas.length === 5) return ElMessage({ message: '订单组最多展示5个', type: 'warning' })
  let _obj = {
    text: '全部订单',
    icon: 'icon-quanbudingdan',
    link: {
      name: '',
      code: ''
    }
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
