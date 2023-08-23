<template>
  <div class="red">hello cc</div>
  <testVue></testVue>
</template>

<script setup>
import testVue from './test.vue';
import { test } from '../libs/utils'
import { add } from 'lodash'
test(1)
add(3, 4)
</script>

<style lang="less" scoped>
.red {
  color: blue;
}
</style>