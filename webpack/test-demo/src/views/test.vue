<template>
  <div class="test">test cc{{ num }}</div>
</template>

<script setup>
import { ref } from 'vue'
import { test } from '../libs/utils'
import { add } from 'lodash'
test(2)
const num = ref(0)
console.log('lodash,', add(.1, .2))
setInterval(() => {
  num.value += 1
}, 1000)
</script>

<style scoped lang="less">
.test {
  color: red;
}
</style>