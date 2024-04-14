<template>
  <div v-for="item in data" :key="item.path" @click="handleClick(item)">
    {{ item.text }}
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const data = [
  {
    text: '缓存计算方法',
    path: '/hooks'
  }
]

const handleClick = (item) => {
  console.log('item', item)
  router.push({ path: item.path })
}
</script>