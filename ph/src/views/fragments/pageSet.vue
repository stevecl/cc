<template>
  <div>
    <div class="module-edit-title">页面设置</div>
    <configItem :label="'页面名称'" style="margin-bottom: 20px;">
      <el-input class="flex-full" :maxlength="12" v-model="config.templateName" placeholder="请输入页面名称">
      </el-input>
      <p class="tips-info">注意：页面名称是便于后台查找。</p>
    </configItem>
    <configItem :label="'页面标题'">
      <el-input class="flex-full" v-model="config.templateTitle" placeholder="请输入页面标题">
      </el-input>
    </configItem>
    <configItem :label="'页面背景'">
      <selectColor v-model="config.backgroundColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'封面图'" :isRequire="true">
      <div class="upload-image" @click="selectBgImg">
        <el-image :src="config.templateImg" v-show="config.templateImg"></el-image>
        <span v-show="!config.templateImg">+</span>
      </div>
    </configItem>
    <div class="tips-info" style="margin: -10px 0 10px 78px;">建议尺寸256 * 414 (大小建议不超过800k，以免影响加载速度)</div>
    <div class="diy-edit-line"></div>
  </div>
</template>

<script setup>

const props = defineProps({
  config: Object
})

const selectBgImg = () => Bus.emit('selectImage', res => props.config.images = res.url)
const selectImage = () => Bus.emit('selectImage', res => props.config.titleBgImg = res.url)

</script>

<style lang="scss" scoped>
.upload-image {
  width: 120px;
  height: 192px;
  line-height: 192px;
  font-size: 50px;
  text-align: center;
  background-color: #F5F7FA;
  cursor: pointer;
  overflow: hidden;

  .el-image {
    width: 100%;
    height: auto;
  }
}
</style>