<template>
  <el-menu
    :default-active="def_active_path"
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      v-for="(item, index) in menuData"
      :key="index"
      :index="item.pathName"
      @click="handleClick">
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const menuData = [
  {
    name: '首页',
    icon: 'House',
    pathName: 'home'
  },
  {
    name: '惠生活',
    icon: 'House',
    pathName: 'hlife'
  },
  {
    name: '个人中心',
    icon: 'User',
    pathName: 'person'
  },
  {
    name: '自定义页面',
    icon: 'Tickets',
    pathName: 'custom'
  },
  {
    name: '底部菜单',
    icon: 'setting',
    pathName: 'tabbar'
  },
  {
    name: '启动广告',
    icon: 'setting',
    pathName: 'advert'
  },
]

const route = useRoute()
const router = useRouter()

const def_active_path = ref('')
const setDefaultActive = () => {
  setTimeout(() => {
    console.log(888, route.name)
    def_active_path.value = route.name
  }, 1000)
}

const handleOpen = () => {}
const handleClose = () => {}
const handleClick = (e) => {
  console.log('click', e.index, route)
  router.push(e.index)
}

onMounted(async () => {
  setDefaultActive()
})

</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
}
</style>

<style lang="scss">
.el-menu-vertical {
  --el-menu-active-color: #FE6903
}
</style>