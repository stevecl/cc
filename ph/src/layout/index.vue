<template>
  <div class="flex layout">
    <!-- <div class="layout_left">
      <slideBar></slideBar>
    </div>
    <div class="flex-1 layout_right">
      <router-view></router-view>
    </div> -->
    <div class="test">
      <div class="test_level1">
        <div class="item" :class="{active: item.id === selectVal}" v-for="item in getDataByLevel(1)">
          <span class="txt">{{ item.categoryName }}</span>
          <span class="light" @click.stop="selectVal = item.id">选择</span>
          <span class="iconfont icon-more" ></span>
        </div>
      </div>
      <div class="test_level1">
        <div class="item" :class="{active: item.id === selectVal}" v-for="item in getDataByLevel(2)">
          <span class="txt">{{ item.categoryName }}</span>
          <span class="light" @click.stop="selectVal = item.id">选择</span>
          <span class="iconfont icon-more" ></span>
        </div>
      </div>
      <div class="test_level1">
        <div class="item" :class="{active: item.id === selectVal}" v-for="item in getDataByLevel(3)">
          <span class="txt">{{ item.categoryName }}</span>
          <span class="light" @click.stop="selectVal = item.id">选择</span>
          <span class="iconfont icon-more" ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import slideBar from './slideBar.vue'
import testData from './data'
import { reactive } from 'vue';

console.log(testData)

const state = reactive({
  currentLevel: 1,
  idList: [1929642608787330, 1929644095642790, 1929660956558240],
  id: '',
})

const getDataByLevel = level => {
  if (level === 1) return testData
  // if (level === 2) return getDataByLevel(level - 1).filter(obj => obj.id === state.idList[level - 2])[0].list
  else return getDataByLevel(level - 1).filter(obj => obj.id === state.idList[level - 2])[0].list
}

</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  &_left {
    // width: 200px;
    // border-right: 1px solid #eee;
  }
}

.test {
  display: flex;
  width: 600px;
  height: 800px;
  border: 1px solid #ccc;
  margin: 100px 300px;
  &_level1 {
    width: 240px;
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