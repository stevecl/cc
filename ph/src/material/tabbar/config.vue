<template>
  <div>
    <div class="module-edit-title">模块设置</div>
    {{baseInfo}}
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.bgColor" :resetColor="'#fff'"></selectColor>
    </configItem>
    <configItem :label="'菜单名称'" style="margin-bottom: 20px;">
      <el-input
        style="flex: 1;"
        :maxlength="12"
        v-model="baseInfo.templateName"
        placeholder="请输入菜单名称">
      </el-input>
      <p class="tips-info">注意：菜单名称是便于后台查找。</p>
    </configItem>
    <configItem :label="'封面图'" :isRequire="true">
      <div class="upload-image" @click="selectPosterImage">
        <el-image :src="baseInfo.templateImg" v-show="baseInfo.templateImg"></el-image>
        <span v-show="!baseInfo.templateImg">+</span>
      </div>
    </configItem>
    <div class="diy-edit-line"></div>


    <configItem :label="'图标样式'">
      <el-radio-group v-model="config.showType">
        <el-radio :value="1">图标+文字</el-radio>
        <el-radio :value="2">图片+文字</el-radio>
      </el-radio-group>
    </configItem>

    <configItem :label="'文字颜色'">
      <selectColor v-model="config.textColor" :resetColor="'#666'"></selectColor>
      <div class="label2">激活颜色</div>
      <selectColor v-model="config.textActiveColor" :resetColor="'#3676FC'"></selectColor>
    </configItem>
    <template v-if="config.showType === 1">
      <configItem :label="'图标颜色'">
        <selectColor v-model="config.iconColor" :resetColor="'#999'"></selectColor>
        <div class="label2">激活颜色</div>
        <selectColor v-model="config.iconActiveColor" :resetColor="'#3676FC'"></selectColor>
      </configItem>
    </template>
    <!-- <configItem :label="'边框颜色'">
      <selectColor v-model="config.borderColor" :resetColor="'#fff'"></selectColor>
    </configItem> -->
    <div class="diy-edit-line"></div>

    <div class="tips-box">建议尺寸: 80 * 80 (大小建议不超过800k，以免影响加载速度)</div>
    <div style="margin-bottom: 10px;color: #aaa;">
      <span style="margin: 0 30px 0 10px;">未选中样式</span>
      <span>选中样式</span>
    </div>
    <draggable v-model="config.datas">
      <template #item="{ element: item }">
        <div>
          <listBox class="cus-mx-menu-style">
            <template #left>
              <div class="left-icon">
                <span :class="['iconfont', item.icon]" style="font-size: 26px" v-if="config.showType === 1"></span>
                <p @click="selectIcon(item)" v-if="config.showType === 1">选择图标</p>
                <img :src="item.img || 'as'" alt="" v-if="config.showType === 2 && item.img">
                <p @click="selectImage(item)" v-if="config.showType === 2">选择图片</p>
              </div>
              <div class="left-icon" v-if="config.showType === 2">
                <img :src="item.activeImg" alt="" v-show="item.activeImg">
                <p @click="selectActiveImage(item)">选择图片</p>
              </div>
            </template>
            <template #default>
              <div class="right-icon">
                <p class="mb10">
                  <span class="label-text">文字</span>
                  <input class="cus-input" type="text" v-model="item.text" placeholder="留空则不展示">
                </p>
                <p>
                  <input class="cus-input" type="text" v-model="item.link" placeholder="请选择链接或输入链接地址">
                  <span class="cus-btn" @click="selectLink(item)">选择链接</span>
                </p>
              </div>
              <span class="close" title="删除" @click="handleDelete(item)"><el-icon><Close /></el-icon></span>
            </template>
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
import { uploadFile } from '@/utils/upload'
import { inject } from 'vue'

const baseInfo = inject('baseInfo')
const props = defineProps({
  config: Object
})

const selectPosterImage = () => Bus.emit('selectImage', res => baseInfo.value.templateImg = res.picUrl)
const selectIcon = item => Bus.emit('selectIcon', icon => item.icon = icon)
const selectImage = item => Bus.emit('selectImage', res => item.img = res.url)
const selectActiveImage = item => Bus.emit('selectImage', res => item.activeImg = res.url)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)

const handleAdd = () => {
  if (props.config.datas.length >= 5) return ElMessage({ message: '最多只能添加5个', type: 'warning' });
  let _obj = {
    text: '菜单文字',
    icon: 'icongoods',
    img: '',
    activeImg: '',
    defaultIcon: '',
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

// 上传图片
const uploadImage = e => {
  let files = e.target.files
  for (var i = 0; i < files.length; i++) {
    uploadFile(files[i], function (result) {
      console.log('result', result)
      if (result.code === 200) {
        props.config.images = result.url
      } else {
        alert('图片上传失败,请重试');
        return;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.upload-image {
  width: 215px;
  height: 215px;
  line-height: 215px;
  font-size: 50px;
  text-align: center;
  background-color: #F5F7FA;
  cursor: pointer;
  .el-image {
    width: 100%;
    height: 100%;
  }
}
.cus-mx-menu-style {
  :deep(.left-box) {
    width: auto;
    display: flex;
    background-color: unset;
    border: unset;
  }
  .left-icon {
    position: relative;
    width: 68px;
    height: 68px;
    line-height: 48px;
    text-align: center;
    margin-right: 10px;
    border: 1px solid #E7EAEC;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #fff;
      background-color: #767676;
      cursor: pointer;
    }
  }
}
</style>
