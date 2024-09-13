<template>
  <ul class="menu-wrapper">
    <li
      class="menu-item"
      :class="{active: currentPageName === item.pathName}"
      v-for="(item, index) in menuData" :key="index"
      @click="handleClick(item)">
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import menuData from '@/datas/menu'

const route = useRoute()
const router = useRouter()

const currentPageName = ref('')
const handleClick = (item) => {
  currentPageName.value = item.pathName
  router.push({ name: item.pathName })
}

onMounted(async () => {
  setTimeout(() => {
    // console.log(888, route.name)
    currentPageName.value = route.name
  }, 500)
})

</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
  background: linear-gradient(to bottom,#f7f8fa,#fef3ea);
}

.menu-wrapper {
  height: 100%;
  width: 140px;
  border-right: 1px solid #eee;
  background: linear-gradient(to bottom,#f7f8fa,#fef3ea);
  .menu-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    box-sizing: border-box;
    padding-left: 20px;
    cursor: pointer;
    .el-icon {
      margin-right: 10px;
    }
    &.active {
      color: #FE6903;
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        content: '';
        width: 3px;
        height: 100%;
        background-color: #FE6903;
      }
    }
  }
}
</style>

<style lang="scss">
.el-menu-vertical {
  --el-menu-active-color: #FE6903
}
</style>