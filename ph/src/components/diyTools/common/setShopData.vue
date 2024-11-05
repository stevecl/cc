<template>
  <div class="module-edit-title">选择门店 </div>
  <el-radio-group v-model="item.type">
    <el-radio :value="'product'">手动选择</el-radio>
    <el-radio :value="'category'">按用户距离</el-radio>
  </el-radio-group>
  <div class="cus-list-btn" @click="handleSelect">选择</div>
  <div class="config-wrapper" v-if="item.type === 'product'">
    <div class="item" v-for="(product, index) in item.selectList" :key="index">
      <el-image :src="product.mainImgUrl || 't'" fit="contain">
        <template #error>
          <div class="image-slot">
            <img :src="getDefaultImage('default_picture.png')" alt="">
          </div>
        </template>
      </el-image>
      <div class="close" @click="handleDelete(index)">
        <el-icon><Close /></el-icon>
      </div>
    </div>
  </div>
  <div class="config-wrapper" v-if="item.type === 'category'">
    <div class="block">
      <div class="label">分类</div>
      <el-input v-model="item.categoryName" disabled style="width: 240px;"></el-input>
    </div>
    <div class="block">
      <div class="label">显示条数</div>
      <div class="flex">
        <el-slider v-model="item.showNum" style="width: 240px;" :min="1" :max="20" :step="1" :show-tooltip="false"></el-slider>
        <span class="slide-span--unit">{{ item.showNum }}<span>个</span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import useDefaultSource from '@/hooks/useDefaultSource'

let { getDefaultImage } = useDefaultSource()

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Object,
})

const item = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const handleSelect = () => {
  // Bus.emit('selectDatas', item.value, (data) => {
  //   if (item.value.type === 'product') {
  //     item.value.selectList = data
  //   } else {
  //     item.value.categoryId = data.id // 所选 商品分类
  //     item.value.categoryName = data.categoryName // 分类名称
  //   }
  // })
}

const handleDelete = (index) => {
  item.value.selectList.splice(index, 1)
  console.log('handleDelete')
}

</script>

<style lang="scss" scoped>
.config-wrapper {
  display: flex;
  flex-wrap: wrap;
  min-height: 48px;
  background-color: #F4F3F7;
  padding: 10px;
  .item {
    width: 46px;
    height: 46px;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      user-select: none;
    }
    .close {
      display: none;
      position: absolute;
      right: -10px;
      top: -10px;
      width: 20px;
      height: 20px;
      line-height: 24px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      background-color: #959090;
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        background-color: #eb5252;
      }
    }
    &:hover .close {
      display: unset;
    }
  }
  .block {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .label {
      width: 60px;
      text-align: right;
      margin-right: 20px;
    }
  }
}
</style>