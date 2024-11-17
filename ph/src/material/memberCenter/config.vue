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

    <div class="module-edit-title">显示模式</div>
    <configItem :label="'图标'">
      <el-radio-group v-model="config.base.avatar">
        <el-radio :value="'circle'">圆形</el-radio>
        <el-radio :value="'round'">圆角</el-radio>
      </el-radio-group>
    </configItem>
    <configItem :label="'文字颜色'">
      <selectColor v-model="config.base.color" :resetColor="'#fff'"></selectColor>
      <div class="label2" style="margin-left: 45px;">高亮颜色</div>
      <selectColor v-model="config.base.lightColor" :resetColor="'#fff'"></selectColor>
    </configItem>


    <div class="module-edit-title">显示内容</div>
    <template v-for="(item, key) in config.detail">
      <!-- <div class="content_item">
        <el-checkbox v-model="item.show"></el-checkbox>
        <div class="name" @click="item.show = !item.show">{{ item.name }}</div>
      </div> -->
      <configItem :label="item.name" :labelWidth="80">
        <el-checkbox v-model="item.show" label="显示" size="large" :disabled="item.name === '会员昵称'" />
        <div style="margin: 0 10px 0 20px;">字号</div>
        <inputNumber v-model="item.fontSize"></inputNumber>
        <selectColor v-model="item.color" :resetColor="item.resetColor" style="margin-left: 20px;"></selectColor>
      </configItem>
    </template>


    <div class="content">
      <template v-for="(item, key) in config.detail">
        <div class="content_item">
          <el-checkbox v-model="item.show"></el-checkbox>
          <div class="name" @click="item.show = !item.show">{{ item.name }}</div>
        </div>
      </template>
    </div>

    <div class="module-edit-title">点击元素</div>
    <listBox class="cus-list-nav-style">
      <template #left>
        <div class="left-icon">
          <span :class="[config.clickItem.setting.icon ? `iconfont ${config.clickItem.setting.icon}` : '']" style="font-size: 26px;"></span>
          <p @click="selectIcon(config.clickItem.setting)">选择图标</p>
          <span class="close" title="删除" @click="config.clickItem.setting.icon = ''">
            <el-icon><Close /></el-icon>
          </span>
        </div>
      </template>
      <template #default>
        <div class="right-icon">
          <p class="flex mb10">
            <span class="mr20 label-text" style="border: none;margin-top: 2px;">设置按钮</span>
            <selectColor v-model="config.clickItem.setting.iconColor" :resetColor="'#ededed'" class="flex-1"></selectColor>
            <el-radio-group v-model="config.clickItem.setting.show">
              <el-radio :value="true">显示</el-radio>
              <el-radio :value="false">隐藏</el-radio>
            </el-radio-group>
          </p>
          <p>
            <input class="cus-input" type="text" disabled v-model="config.clickItem.setting.link.name" placeholder="请选择链接">
            <span class="cus-btn" @click="selectLink(config.clickItem.setting)">选择链接</span>
          </p>
        </div>
      </template>
    </listBox>
    <listBox class="cus-list-nav-style">
      <template #left>
        <div class="left-icon">
          <span :class="[config.clickItem.signin.icon ? `iconfont ${config.clickItem.signin.icon}` : '']" style="font-size: 26px;"></span>
          <p @click="selectIcon(config.clickItem.signin)">选择图标</p>
          <span class="close" title="删除" @click="config.clickItem.signin.icon = ''">
            <el-icon><Close /></el-icon>
          </span>
        </div>
      </template>
      <template #default>
        <div class="right-icon">
          <p class="mb10">
            <span class="mr20 label-text" style="border: none;margin-top: 2px;">签到按钮</span>
            <selectColor v-model="config.clickItem.signin.iconColor" :resetColor="'#ededed'" class="flex-1"></selectColor>
            <el-radio-group v-model="config.clickItem.signin.show">
              <el-radio :value="true">显示</el-radio>
              <el-radio :value="false">隐藏</el-radio>
            </el-radio-group>
          </p>
          <p>
            <input class="cus-input" type="text" disabled v-model="config.clickItem.signin.link.name" placeholder="请选择链接">
            <span class="cus-btn" @click="selectLink(config.clickItem.signin)">选择链接</span>
          </p>
        </div>
      </template>
    </listBox>
    <listBox class="cus-list-nav-style" :left="false">
      <template #default>
        <div class="right-icon">
          <p class="mb10">
            <span class="label-text" style="border: none;margin-top: 2px;">查看明细</span>
            <input class="cus-input mr10 " type="text" v-model="config.clickItem.look.text" placeholder="查看明细" style="width: 90px;border-radius: 5px;flex: unset;">
            <selectColor v-model="config.clickItem.look.color" :resetColor="'#ededed'" class="flex-1"></selectColor>
            <el-radio-group v-model="config.clickItem.look.show">
              <el-radio :value="true">显示</el-radio>
              <el-radio :value="false">隐藏</el-radio>
            </el-radio-group>
          </p>
          <p>
            <input class="cus-input" type="text" disabled v-model="config.clickItem.look.link.name" placeholder="请选择链接">
            <span class="cus-btn" @click="selectLink(config.clickItem.look)">选择链接</span>
          </p>
        </div>
      </template>
    </listBox>
  </div>
</template>

<script setup>
import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

let { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectIcon = item => Bus.emit('selectIcon', icon => item.icon = icon)
const selectLink = item => Bus.emit('selectLink', link => item.link = link, item.link)

</script>

<style lang="scss">
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  &_item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 18px;
    .name {
      width: 100px;
      margin-left: 4px;
      cursor: pointer;
    }
  }
}
</style>
