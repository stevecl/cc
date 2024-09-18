<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <!-- <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ marginTop }}<span>px</span></span>
    </configItem> -->
    <configItem :label="'距离顶/底部'" :labelWidth="70">
      <inputNumber v-model="marginTop"></inputNumber>
      <div class="label2 wid70">距离左/右侧</div>
      <inputNumber v-model="marginLeft"></inputNumber>
    </configItem>
    <configItem :label="'图标样式'">
      <el-radio-group v-model="config.showType">
        <el-radio :value="1">图标+文字</el-radio>
        <el-radio :value="2">图片+文字</el-radio>
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
                <img :src="item.img || 'as'" alt="" v-if="config.showType === 2 && item.img">
                <p @click="selectImage(item)" v-if="config.showType === 2">选择图片</p>
                <!-- <el-image :src="item.icon || getDefaultImage(item.defaultIcon)" fit="contain">
                  <template #error>
                    <div class="image-slot">
                      <el-icon><Picture /></el-icon>
                    </div>
                  </template>
                </el-image>
                <p @click="selectImage(item)">选择图片</p> -->
              </div>
            </template>
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
        </div>
      </template>
    </draggable>
    <div class="cus-list-btn" @click="handleAdd">添加一个</div>
  </div>
</template>
        
<script setup>
import draggable from 'vuedraggable'
import { ElMessage, ElMessageBox } from 'element-plus'

import useDefaultSource from '@/hooks/useDefaultSource'
import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

const { getDefaultImage } = useDefaultSource()
const { fontSize, marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectIcon = item => Bus.emit('selectIcon', icon => item.icon = icon)
const selectImage = item => Bus.emit('selectImage', res => item.icon = res.picUrl)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)

const handleAdd = () => {
  let _obj = {
    defaultIcon: 'btn1.png',
    icon: '',
    text: `按钮文字`,
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