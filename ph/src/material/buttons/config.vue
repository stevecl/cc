<template>
  <div>
    <div class="module-edit-title">模块设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.bgColor" :resetColor="'#ededed'"></selectColor>
      <div class="label2">不透明度</div>
      <inputNumber v-model="config.style.bgOpacity" :config="{max: 1, step: .1, unit: ''}"></inputNumber>
    </configItem>
    <configItem :label="'背景图片'">
      <input type="text" class="cus-input" v-model="config.style.bgImageUrl">
      <span class="cus-btn" @click="selectBgImage">选择图片</span>
      <span class="cus-btn" @click="config.style.bgImageUrl = ''">清除</span>
    </configItem>
    <configItem :label="'模块圆角'">
      <el-slider style="width: 250px;" v-model="config.borderRadius" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{config.borderRadius}}<span>%</span></span>
    </configItem>
    <configItem :label="'图片圆角'">
      <el-slider style="width: 250px;" v-model="config.imgBorderRadius" :min="0" :max="50" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{config.imgBorderRadius}}<span>%</span></span>
    </configItem>
    <configItem :label="'左右边距(内)'" :labelWidth="70">
      <inputNumber v-model="paddingLeft"></inputNumber>
      <div class="label2 wid70">上下边距(内)</div>
      <inputNumber v-model="paddingTop"></inputNumber>
    </configItem>
    <configItem :label="'左右边距(外)'" :labelWidth="70">
      <inputNumber v-model="marginLeft"></inputNumber>
      <div class="label2 wid70">顶部间距</div>
      <inputNumber v-model="marginTop" :config="{ min: -50 }"></inputNumber>
    </configItem>
    <configItem :label="'字体大小'"  :labelWidth="70">
      <inputNumber v-model="fontSize" :config="{ min: 10 }"></inputNumber>
    </configItem>
    <configItem :label="'每行数量'">
      <el-radio-group v-model="config.lineNum">
        <el-radio :value="3">3个</el-radio>
        <el-radio :value="4">4个</el-radio>
        <el-radio :value="5">5个</el-radio>
      </el-radio-group>
    </configItem>
    
    <div class="tips-box">建议尺寸: 80 * 80 (大小建议不超过800k，以免影响加载速度)</div>
    <draggable v-model="config.datas">
      <template #item="{ element: item }">
        <listBox >
          <template #left>
            <div class="left-icon">
              <el-image :src="item.icon || getDefaultImage(item.defaultIcon)" fit="contain">
                <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template>
              </el-image>
              <p @click="selectImage(item)">选择图片</p>
            </div>
          </template>
            <!-- <mxImg :src="item.icon" :error="item.defaultIcon" :styleObj="{'minHeight': '20px'}"></mxImg> -->
          <!-- </div> -->
          <div class="right-icon">
            <p class="mb10">
              <span class="label-text">文字</span>
              <input class="cus-input" type="text" v-model="item.text" placeholder="留空则不展示">
              <selectColor class="style1" v-model="item.color" :resetColor="'#666'"></selectColor>
            </p>
            <p>
              <input class="cus-input" type="text" v-model="item.link" placeholder="请选择链接或输入链接地址">
              <span class="cus-btn" @click="selectLink(item)">选择链接</span>
            </p>
          </div>
          <span class="close" title="删除" @click="handleDelete(item)"><el-icon><Close /></el-icon></span>
        </listBox>
      </template>
    </draggable>
    <div class="cus-list-btn" @click="handleAdd">添加一个</div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ElMessage, ElMessageBox } from 'element-plus'

import useCommon from '../utils/useCommon'
import useStyle from '../utils/useStyle'

const props = defineProps({
  config: Object
})

const { getDefaultImage } = useCommon()
const { fontSize, marginTop, marginLeft, paddingTop, paddingLeft } = useStyle(props)

const selectBgImage = () => Bus.emit('selectImage', res => props.config.style.bgImageUrl = res.url)
const selectImage = item => Bus.emit('selectImage', res => item.icon = res.url)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)

const handleAdd = () => {
  let _obj = {
    defaultIcon: 'icon-4.png',
    icon: '',
    text: `按钮文字${props.config.datas.length + 1}`,
    color: '#666',
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
</style>