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

    <div class="module-edit-title">显示模式</div>
    <configItem :label="'上标题颜色'" :labelWidth="70">
      <selectColor v-model="config.supStyle.color" :resetColor="'#666'"></selectColor>
      <div class="label2 wid70">下标题颜色</div>
      <selectColor v-model="config.subStyle.color" :resetColor="'#666'"></selectColor>
    </configItem>
    <configItem :label="'上标题对齐'" :labelWidth="70">
      <el-radio-group v-model="config.supStyle.textAlign">
        <el-radio :value="'left'">居左</el-radio>
        <el-radio :value="'center'">居中</el-radio>
        <el-radio :value="'right'">居右</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'下标题对齐'" :labelWidth="70">
      <el-radio-group v-model="config.subStyle.textAlign">
        <el-radio :value="'left'">居左</el-radio>
        <el-radio :value="'center'">居中</el-radio>
        <el-radio :value="'right'">居右</el-radio>
      </el-radio-group>
    </configItem>
    <div class="diy-edit-line"></div>
    
    <div class="tips-box">建议尺寸: 使用的图片尺寸/比例相同 (大小建议不超过800k，以免影响加载速度)</div>
    <draggable v-model="config.datas" item-key="index">
      <template #item="{ element: item, index }">
        <div>
          <listBox class="cus-picture-style">
            <template #left>
              <div class="left-icon" slot="left">
                <img :src="item.icon" :data-default="item.defaultIcon">
              </div>
            </template>
            <template #default>
              <div class="right-icon">
              <p class="mb10">
                <span class="label-text">上标题</span>
                <input class="cus-input" type="text" v-model="item.supTitle" placeholder="请输入上标题">
                <span class="label-text">下标题</span>
                <input class="cus-input" type="text" v-model="item.subTitle" placeholder="请输入下标题">
              </p>
              <p class="mb10">
                <input class="cus-input" type="text" v-model="item.icon" placeholder="请选择图片或输入图片地址">
                <span class="cus-btn" @click="selectImage(item)">选择图片</span>
              </p>
              <p>
                <input class="cus-input" type="text" v-model="item.link" placeholder="请选择链接或输入链接地址">
                <span class="cus-btn" @click="selectLink(item)">选择链接</span>
              </p>
            </div>
            <span class="close" title="删除" @click="deleteHandle(index)"><i class="el-icon-error"></i></span>
            </template>
          </listBox>
        </div>
      </template>
    </draggable>
    <div class="cus-list-btn" @click="addBtnHandle">添加一个</div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import useStyle from '@/hooks/useStyle'


const props = defineProps({
  config: Object
})
let { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

</script>

<style lang="scss" scoped>
</style>