<template>
  <div>
    <div class="module-edit-title">边距设置</div>
    <configItem :label="'顶部间距'">
      <el-slider style="width: 250px;" v-model="marginTop" :min="-100" :max="100" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ marginTop }}<span>px</span></span>
    </configItem>
    <configItem :label="'商品间距'">
      <el-slider style="width: 250px;" v-model="config.productConfig.goodSpace" :min="0" :max="20" :step="1" :show-tooltip="false"></el-slider>
      <span class="slide-span--unit">{{ config.productConfig.goodSpace }}<span>px</span></span>
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
    <configItem :label="'底部背景'">
      <selectColor v-model="config.style.background" :resetColor="'#fff'"></selectColor>
      <div class="label2 wid70">商品背景</div>
      <selectColor v-model="config.productConfig.bgColor"></selectColor>
    </configItem>

    <div class="module-edit-title">选项设置</div>
    <draggable v-model="config.tabbarConfig.datas" item-key="index">
      <template #item="{ element: item, index }">
        <div>
          <listBox :left="false">
            <template #default>
              <div class="right-icon">
              <p class="" @click="config.tabbarIndex = index">
                <span class="label-text">选项文字</span>
                <input class="cus-input" type="text" v-model="item.text" placeholder="请输入上标题">
              </p>
            </div>
            <span class="close" title="删除" @click="handleDelete(item)">
              <el-icon><Close /></el-icon>
            </span>
            </template>
          </listBox>
        </div>
      </template>
    </draggable>
    <div class="cus-list-btn" @click="handleAdd">添加一个</div>


    <div class="module-edit-title">选项卡样式</div>
    <configItem :label="'标题未选'">
      <selectColor v-model="config.tabbarConfig.color" :resetColor="'#666'"></selectColor>
      <div class="label2 wid70">标题选中</div>
      <selectColor v-model="config.tabbarConfig.activeColor" :resetColor="'#EF4F4F'"></selectColor>
    </configItem>

    <setGoodsData v-model="config.tabbarConfig.datas[config.tabbarIndex]" v-if="config.tabbarIndex !== -1"></setGoodsData>
    <setGoodsShowType v-model="config.productConfig.showType" componentName="goodsTabbar"></setGoodsShowType>
    <setGoodsBuyCar v-model="config.productConfig.car" :showType="config.productConfig.showType"></setGoodsBuyCar>

    <div class="module-edit-title">显示内容</div>
    <div class="content">
      <template v-for="(item, key) in config.productConfig.detail">
        <div class="content_item" v-if="['商品标题', '商品价格'].includes(item.name) || config.productConfig.showType <= 3">
          <el-checkbox v-model="item.show"></el-checkbox>
          <div class="name" @click="item.show = !item.show">{{ item.name }}</div>
          <selectColor v-model="item.style.color" :resetColor="item.style.resetColor" v-if="key !== 'tag'"></selectColor>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ElMessageBox } from 'element-plus'
import useStyle from '@/hooks/useStyle';

const props = defineProps({
  config: Object
})

const { marginTop, marginLeft, paddingTop, paddingLeft, paddingBottom } = useStyle(props)

const handleAdd = () => {
  let _obj = {
    text: '选项',
    type: 'product', // product: 固定商品 category: 分类商品
    selectList: [], // 固定商品 所选商品列表
    category: '', // 所选 商品分类
    showNum: 1, // 商品分类 显示商品个数
  }
  props.config.tabbarConfig.datas.push(_obj)
}

const handleDelete = async item => {
  if (props.config.tabbarConfig.datas.length === 1) return ElMessage({ message: '至少保留一个', type: 'warning' })
  let res = await ElMessageBox.confirm(`确定删除吗?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning', } )
  if (res === 'confirm') {
    let index = props.config.tabbarConfig.datas.indexOf(item)
    if (props.config.tabbarIndex === index) props.config.tabbarIndex = 0
    props.config.tabbarConfig.datas.splice(index, 1)
  }
}

</script>

<style lang="scss" scoped>
.config-wrapper {
  position: relative;
  color: #999;
  padding: 10px 20px 10px 10px;
  border-radius: 4px;
  &_item {
    display: flex;
    align-items: center;
    height: 30px;
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
    .label {
      width: 100px;
      text-indent: 10px;
    }
    .inner {
      flex: 1;
      height: 100%;
    }
  }
}

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
