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
    <configItem :label="'优惠券间距'" :labelWidth="70">
      <el-slider style="width: 250px;" v-model="config.style.itemSpace" :min="0" :max="20" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.style.itemSpace }}<span>px</span></span>
    </configItem>

    <div class="module-edit-title">组件设置</div>
    <configItem :label="'背景颜色'">
      <selectColor v-model="config.style.bgColor" :resetColor="'#ededed'"></selectColor>
    </configItem>
    <configItem :label="'背景图片'">
      <input type="text" class="cus-input" v-model="config.style.bgImageUrl">
      <span class="cus-btn" @click="selectBgImage">选择图片</span>
      <span class="cus-btn" @click="config.style.bgImageUrl = ''">清除</span>
    </configItem>
    <configItem :label="'样式'">
      <el-radio-group v-model="config.type">
        <el-radio :value="1">样式一</el-radio>
        <el-radio :value="2">样式二</el-radio>
      </el-radio-group>
    </configItem>
    <div class="diy-edit-line"></div>

    <div class="module-edit-title">优惠券设置</div>
    <draggable v-model="config.datas" itemKey="index">
      <template #item="{ element: item, index }">
        <div>
          <listBox :left="false">
            <div class="right-icon">
              <p class="mb10">
                <span class="label-text" style="width: 90px">优惠券名称</span>
                <input class="cus-input" type="text" v-model="item.couponName" disabled placeholder="请选择优惠券">
                <span class="label-text pointer" @click="selectCoupon(item)" style="border-right: 1px solid #dcdfe6;">选择</span>
                <selectColor class="style1" v-model="item.color" :resetColor="'#fff'"></selectColor>
              </p>
              <p class="mb10">
                <span class="label-text">价值</span>
                <input class="cus-input" type="text" v-model="item.couponInterval" disabled placeholder="">
                <span class="label-text">使用条件</span>
                <input class="cus-input" type="text" v-model="item.quotaScope" disabled placeholder="">
              </p>
              <p class="mb10">
                <span class="label-text">色调</span>
                <el-radio-group class="cus-input" v-model="item.bgColor" style="line-height: 30px;">
                  <el-radio :value="'#55B5FF'">蓝</el-radio>
                  <el-radio :value="'#FF5555'">红</el-radio>
                  <el-radio :value="'#FF913F'">橙</el-radio>
                  <el-radio :value="'#FD72D4'">粉</el-radio>
                </el-radio-group>
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
let { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const selectBgImage = () => Bus.emit('selectImage', res => props.config.style.bgImageUrl = res.picUrl)

const selectCoupon = (item) => {
  return console.log('选择优惠券')
  Bus.$emit('selectCoupon', obj => {
    item.numberCode = obj.numberCode
    item.couponName = obj.couponName
    item.couponType = obj.couponType
    item.quotaScope = obj.isQuota === 0 ? '无限制' : `满${obj.quotaScope}元可用`
    item.couponInterval = obj.couponInterval
  })
}

const handleAdd = () => {
  let _obj = {
    id: '',
    couponName: '优惠券名称',
    couponInterval: 10,
    couponType: 'quota', // 满减  discount 折扣
    quotaScope: '无限制',
    color: '#000',
    bgColor: '#55B5FF'
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

<style lang="scss" scoped>
.cus-coupon-style {
  :deep(.left-box) {
    display: none;
  }
}
</style>
