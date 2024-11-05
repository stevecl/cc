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

    <div class="module-edit-title">模块设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.bgColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'背景图片'">
      <input type="text" class="cus-input" v-model="config.style.bgImageUrl">
      <span class="cus-btn" @click="selectBgImg">选择图片</span>
      <span class="cus-btn" @click="config.style.bgImageUrl = ''">清除</span>
    </configItem>
    <configItem :label="'行高'">
      <el-slider style="width: 250px;" v-model="config.height" :min="20" :max="60" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{config.height}}<span>px</span></span>
    </configItem>
    <div class="diy-edit-line"></div>

    <div class="module-edit-title">文字图标元素</div>
    <configItem :label="'文字颜色'">
      <selectColor v-model="config.style.color" :resetColor="'#000'"></selectColor>
      <div class="label2" style="margin-left: 45px;">文字大小</div>
      <inputNumber v-model="fontSize"></inputNumber>
    </configItem>
    <configItem :label="'图标颜色'">
      <selectColor v-model="config.iconColor" :resetColor="'#666'"></selectColor>
      <div class="label2" style="margin-left: 45px;">图标大小</div>
      <inputNumber v-model="config.iconFontSize"></inputNumber>
    </configItem>

    <configItem :label="'文字对齐'">
      <el-radio-group v-model="config.textAlign">
        <el-radio :value="'left'">居左</el-radio>
        <el-radio :value="'center'">居中</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'文字加粗'">
      <el-radio-group v-model="config.fontWeight">
        <el-radio :value="'normal'">正常</el-radio>
        <el-radio :value="'bold'">加粗</el-radio>
      </el-radio-group>
    </configItem>
    <div class="diy-edit-line"></div>
    
    <div class="module-edit-title">右侧提示元素</div>
    <configItem :label="'图标'">
      <el-radio-group v-model="config.hasIcon">
        <el-radio :value="true">展示</el-radio>
        <el-radio :value="false">隐藏</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'文字颜色'">
      <selectColor v-model="config.rightStyle.textColor" :resetColor="'#666'"></selectColor>
      <div class="label2" style="margin-left: 45px;">文字大小</div>
      <inputNumber v-model="config.rightStyle.fontSize"></inputNumber>
    </configItem>
    <configItem :label="'图标颜色'">
      <selectColor v-model="config.rightStyle.iconColor" :resetColor="'#666'"></selectColor>
      <div class="label2" style="margin-left: 45px;">图标大小</div>
      <inputNumber v-model="config.rightStyle.iconSize"></inputNumber>
    </configItem>
    <div class="diy-edit-line"></div>

    <draggable v-model="config.datas" item-key="index">
      <template #item="{ element: item }">
        <listBox class="cus-list-nav-style">
          <template #left>
            <div class="left-icon">
              <span :class="[item.icon ? `iconfont ${item.icon}` : '']" style="font-size: 26px;"></span>
              <p @click="selectIcon(item)">选择图标</p>
              <span class="close" title="删除" @click="item.icon = ''">
                <el-icon><Close /></el-icon>
              </span>
            </div>
          </template>
          <template #default>
            <div class="right-icon">
              <p class="mb10">
                <span class="label-text">文字</span>
                <input class="cus-input" type="text" v-model="item.text" placeholder="留空则不展示">
                <span class="label-text">提示</span>
                <input class="cus-input" type="text" v-model="item.alert" placeholder="留空则不展示">
              </p>
              <p>
                <input class="cus-input" type="text" disabled v-model="item.link.name" placeholder="请选择链接">
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

const { fontSize, marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectBgImg = () => Bus.emit('selectImage', res => props.config.style.bgImageUrl = res.picUrl, false)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)
const selectIcon = item => Bus.emit('selectIcon', icon => item.icon = icon)

const handleAdd = () => {
  let _obj = {
    text: '文字',
    alert: '提示',
    icon: '',
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