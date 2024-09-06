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

    <div class="module-edit-title">视频设置</div>
    <configItem :label="'视频链接'">
      <input v-model="config.videoSrc" class="cus-input" type="" name="" id="">
      <span class="cus-btn" @click="$refs.upload.click()">选择视频</span>
    </configItem>
    <input type="file" style="display: none;" @change="uploadVideo" ref="upload" multiple="true" accept="video/*">
    <configItem :label="'视频封面'">
      <input v-model="config.poster" class="cus-input" type="" name="" id="">
      <span class="cus-btn" @click="selectPoster">选择图片</span>
      <span class="cus-btn" @click="config.poster = ''">清除</span>
    </configItem>
    <configItem :label="''">
      <div class="test">
        <img v-if="config.poster" :src="config.poster" alt="">
      </div>
    </configItem>
  </div>
</template>

<script setup>
import { uploadFile } from '@/utils/upload'
import { ElMessage } from 'element-plus'
import useStyle from '@/hooks/useStyle';

const props = defineProps({
  config: Object
})

const { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectPoster = () => {
  Bus.emit('selectImage', res => props.config.poster = res.url)
}

// 上传视频
const uploadVideo = e => {
  let maxSize = 100 * 1024 * 1024 // 最大一百M视频
  let files = e.target.files
  if (files.length > 1) return ElMessage ({ message: '只能选择一个视频', type: 'warning' })

  for (var i = 0; i < files.length; i++) {
    if (files[i].size > maxSize) return ElMessage ({ message: '视频文件太大，请选择100MB以内的文件', type: 'warning' })
    uploadFile(files[i], function (result) {
      if (result.code === 200) {
        props.config.videoSrc = result.url
      } else {
        ElMessage ({ message: '视频上传失败,请重试', type: 'error' })
      }
    });
  }
}

</script>

<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #eee;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
}
</style>
