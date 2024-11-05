<template>
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
      <span class="cus-btn" @click="selectImage">选择图片</span>
      <span class="cus-btn" @click="config.style.bgImageUrl = ''">清除</span>
    </configItem>

    <div class="module-edit-title">输入框</div>
    <configItem :label="'圆角大小'">
      <el-slider style="width: 250px;" v-model="config.input.borderRadius" :min="0" :max="20" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.input.borderRadius }}<span>px</span></span>
    </configItem>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.input.bgColor"></selectColor>
    </configItem>
    <configItem :label="'文字颜色'" style="margin-bottom: 20px;">
      <selectColor v-model="config.input.color" :resetColor="'#000'"></selectColor>
      <!-- <p class='tips-info'>提示:搜索框输入的文字颜色，并不是提示文字颜色</p> -->
    </configItem>
    <configItem :label="'提示文字'">
      <el-input v-model="config.input.placeholder" placeholder="输入关键字进行搜索" style="width: 100px;flex: 1;" ></el-input>
    </configItem>

    <!-- 左侧按钮 -->
    <div class="module-edit-title">左侧按钮</div>
    <configItem :label="'位置'">
      <el-radio-group v-model="config.left.type">
        <el-radio :value="0">不显示</el-radio>
        <el-radio :value="1">搜索框外</el-radio>
        <el-radio :value="2">搜索框内</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'图标'">
      <div class="diy-button no-pointer"><span class="iconfont" :class="config.left.icon"></span></div>
      <div class="diy-button" @click="selectLeftIcon">选择图标</div>
      <div class="label2">图标颜色</div>
      <selectColor v-model="config.left.color" :resetColor="'#ffffff'"></selectColor>
    </configItem>
    <configItem :label="'链接'">
      <el-input style="flex: 1;" disabled v-model="config.left.link.name">
        <template #append>
          <el-button @click="selectLeftLink">选择链接</el-button>
        </template>
      </el-input>
    </configItem>

    <!-- 右侧按钮 -->
    <div class="module-edit-title">右侧按钮</div>
    <configItem :label="'位置'">
      <el-radio-group v-model="config.right.type">
        <el-radio :value="0">不显示</el-radio>
        <el-radio :value="1">搜索框外</el-radio>
        <el-radio :value="2">搜索框内</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'图标'">
      <div class="diy-button no-pointer"><span class="iconfont" :class="config.right.icon"></span></div>
      <div class="diy-button" @click="selectRightIcon">选择图标</div>
      <div class="label2">图标颜色</div>
      <selectColor v-model="config.right.color" :resetColor="'#ffffff'"></selectColor>
    </configItem>
    <configItem :label="'点击事件'">
      <el-radio-group v-model="config.right.btnType">
        <el-radio :value="'link'">跳转链接</el-radio>
        <el-radio :value="'default'">提交搜索</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'链接'" v-if="config.right.btnType === 'link'">
      <el-input style="flex: 1;" disabled v-model="config.right.link.name">
        <template #append>
          <el-button @click="selectRightLink">选择链接</el-button>
        </template>
      </el-input>
    </configItem>
</template>

<script setup>
import useStyle from '@/hooks/useStyle'
const props = defineProps({
  config: Object
})

const { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectImage = () => Bus.emit('selectImage', res => props.config.style.bgImageUrl = res.url)
const selectLeftIcon = () => Bus.emit('selectIcon', icon => props.config.left.icon = icon)
const selectRightIcon = () => Bus.emit('selectIcon', icon => props.config.right.icon = icon)
const selectLeftLink = () => Bus.emit('selectLink', linkItem => props.config.left.link = linkItem, props.config.left.link)
const selectRightLink = () => Bus.emit('selectLink', linkItem => props.config.right.link = linkItem, props.config.right.link)

</script>

<style lang="scss">
.m-colorPicker .box{
  box-sizing: content-box;
}
.color-pick-custom.m-colorPicker {
  width: 80px;
  height: 30px;
  padding: 5px;
  border: 1px solid #dcdfe6;
  border-radius: 0 5px 5px 0;
  border-left: none;
  cursor: pointer;
  .colorBtn {
    width: 100% !important;
    height: 100% !important;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .box{
    z-index: 1111;
    box-sizing: content-box;
  }
  & + .diy-button {
    border-color: #dcdfe6;
    border-left: none;
    border-radius: 0 5px 5px 0;
  }
}
</style>
