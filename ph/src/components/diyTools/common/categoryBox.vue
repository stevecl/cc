<template>
  <div class="main">
    <div class="box" v-for="level in state.currentLevel" >
      <div class="item" :class="{active: state.selectId === item.id}" v-for="item in getDataByLevel(level)"  @click="handleOpen(level, item)">
        <span class="txt">{{ item.categoryName }}</span>
        <span class="light" @click.stop="handleSelect(level, item)">选择</span>
        <span class="iconfont icon-more" v-if="item.list?.length"></span>
        <span class="iconfont" v-else></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

const props = defineProps({
  datas: Array
})

const state = reactive({
  currentLevel: 1,
  selectList: [], // 展开项
  selectId: '',
  selectObj: {}
})

watch(() => props.datas, () => {
  state.currentLevel = 1
  state.selectList = []
  state.selectId = ''
  state.selectObj = {}
})

const handleOpen = (level, item) => {
  if (item.list?.length) {
    if (state.selectList.length < level) {
      state.currentLevel += 1
      state.selectList.push(item.id)
    } else {
      state.currentLevel = level + 1
      state.selectList[level - 1] = item.id
    }
  }
}

const handleSelect = (level, item) => {
  state.currentLevel = level
  state.selectId = item.id
  state.selectObj = item
}

const getDataByLevel = level => {
  if (level === 1) return props.datas
  else return getDataByLevel(level - 1).filter(obj => obj.id === state.selectList[level - 2])[0].list
}

const submit = () => state.selectObj

defineExpose({
  submit
})

</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  display: flex;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 0;
  .box {
    width: 230px;
    height: 100%;
    // border: 1px solid red;
    border-right: 1px solid #eee;
    overflow-y: auto;
    .item {
      display: flex;
      align-items: center;
      height: 36px;
      cursor: pointer;
      .txt {
        flex: 1;
        text-indent: 20px;
      }
      .iconfont {
        margin: 0 5px;
      }
      &.active {
        color: #fb6638;
        background: #fff3ef;
      }
      &:hover {
        color: #fb6638;
      }
    }
  }    
}
</style>