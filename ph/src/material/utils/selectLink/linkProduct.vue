<template>
  <div class="goods-link-template">
    <div class="search">
      <div class="search-type">
        <span class="label">商品类型</span>
        <el-radio-group v-model="query.type" @change="initSearch">
          <el-radio v-for="(value, key) in goodsTypeObj" :key="key" :value="key">{{value}}</el-radio>
        </el-radio-group>
      </div>
      <el-input 
        v-model="query.nameCn"
        @focus="textShow = false"
        placeholder="请输入内容进行搜索"
        class="input-with-select">
        <el-select v-model="queryField" slot="prepend" placeholder="请选择" style="width: 100px;">
          <el-option label="商品名称" value="nameCn"></el-option>
          <el-option label="商品编号" value="numberCode"></el-option>
          <el-option label="商品城市" value="destination"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="getGoodList"></el-button>
      </el-input>
    </div>
    <div class="link-select-box" v-loading="state.isLoading">
      <el-tag 
        type="info"
        v-for="(goods, l_index) in state.datas"
        :key="l_index"
        :title="goods.nameCn"
        @click="emit('select', `/pages/product/detail?numberCode=${goods.numberCode}`)">
        {{ goods.nameCn }}
      </el-tag>
    </div>
    <div v-show="state.textShow" style="color: #999;margin-top: -170px;">查询结果为空</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getProductList } from '@/api/product'

const emit = defineEmits(['select'])

const goodsTypeObj = ref({
  all: '全部',
  goods: '实物',
  ticket: '票券',
  collect: '勋章',
})

const query = ref({
  type: 'all',
  nameCn: ''
})
const state = reactive({
  datas: [{
    nameCn: '测试商品',
    numberCode: 1
  },
  {
    nameCn: '测试商品2',
    numberCode: 2
  },{
    nameCn: '测试商品3',
    numberCode: 3
  }],
  queryField: 'nameCn',
  isLoading: false,
  textShow: false,
})

const initSearch = async () => {
  state.textShow = false
  state.isLoading = true
  state.datas = []
  let { type, nameCn } = query.value
  let res = await getProductList({
    appId: sessionStorage.getItem('appCode'),
    categoryCode: type === 'all' ? '' : type,
    searchValue: nameCn
  })
}

onMounted(() => {
  // getProductList()
})


</script>

<style lang="scss" scoped>
.goods-link-template {
  .search {
    margin: 20px 10px;
    .search-type {
      text-align: left;
      margin-bottom: 20px;
      .label {
        margin-right: 20px;
      }
    }
  }
  .link-select-box {
    height: 300px;
    overflow: auto;
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