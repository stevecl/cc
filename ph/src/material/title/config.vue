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
      <div class="label2">不透明度</div>
      <inputNumber v-model="config.bgStyle.bgOpacity" :config="{max: 1, step: .1, unit: ''}"></inputNumber>
    </configItem>
    <configItem :label="'背景图片'">
      <input type="text" class="cus-input" v-model="config.bgStyle.bgImageUrl">
      <span class="cus-btn" @click="selectBgImg">选择图片</span>
      <span class="cus-btn" @click="config.bgStyle.bgImageUrl = ''">清除</span>
    </configItem>
    <configItem :label="'标题链接'">
      <input type="text" class="cus-input" v-model="config.link">
      <span class="cus-btn" @click="selectLink">选择链接</span>
      <span class="cus-btn" @click="config.link = ''">清除</span>
    </configItem>
    <configItem :label="'标题内容'">
      <input type="text" class="cus-input" v-model="config.content" placeholder="请输入标题内容">
      <!-- <span class="cus-btn" @click="selectIcon">选择图标</span> -->
      <!-- <span class="cus-btn" @click="config.icon = ''">清除</span> -->
    </configItem>

    <div class="module-edit-title">文字元素</div>
    <configItem :label="'字体大小'">
      <inputNumber v-model="fontSize"></inputNumber>
      <div class="label2">文字颜色</div>
      <selectColor v-model="config.style.color" :resetColor="'#333333'"></selectColor>
    </configItem>
    <configItem :label="'文字加粗'">
      <el-radio-group v-model="config.style.fontWeight">
        <el-radio :value="'normal'">正常</el-radio>
        <el-radio :value="'bold'">加粗</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'文字对齐'">
      <el-radio-group v-model="config.style.textAlign">
        <el-radio :value="'left'">居左</el-radio>
        <el-radio :value="'center'">居中</el-radio>
        <el-radio :value="'right'">居右</el-radio>
      </el-radio-group>
    </configItem>
  </div>
</template>

<script setup>
import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

let { fontSize, marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectImage = () => Bus.emit('selectImage', res => props.config.bgImageUrl = res.url)
const selectLink = () => Bus.emit('selectLink', link => props.config.link = link)

</script>

<style lang="scss">
</style>
