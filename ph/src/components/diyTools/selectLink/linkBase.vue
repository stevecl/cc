<template>
  <div class="shopping-link-tem">
    <div v-for="(value, key) in datas" :key="key">
      <div class="title">{{key}}</div>
      <div class="page-select-box">
        <el-tag 
          type="info"
          v-for="(item, l_index) in value"
          :key="l_index"
          :title="item.name"
          @click="selectLink(item.link)">
          {{item.name}}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['select'])

const datas = ref({
  '商城': [
    {
      name: '商城首页',
      link: '/pages/index/index'
    }
  ],
  '商品': [
    {
      name: '商品列表页',
      link: '/pages/product/product'
    }
  ],
  '个人中心': [
    {
      name: '我的',
      link: '/pages/mine/mine'
    },
  ],
})

const selectLink = link => {
  emit('select', link)
}

</script>

<style lang="scss" scoped>
.shopping-link-tem {
  .title {
    font-size: 18px;
    text-align: left;
    margin: 20px 10px 10px;
  }
  .page-select-box {
    text-align: left;
    padding-left: 10px;
    span {
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}
</style>