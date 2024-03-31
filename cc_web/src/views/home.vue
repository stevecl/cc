<template>
  <div class="txt" @click="addHandle">home page</div>
  <div class="norem-txt1">home page{{count}}</div>
</template>


<script setup>
import { ref, nextTick } from 'vue';
let count = ref(0)
const addHandle = async () => {
  count.value++
  let dom = document.querySelector('.norem-txt1')
  console.log(count.value, dom.textContent)
  await nextTick()
  console.log(count.value, dom.textContent)
}
</script>
<script>
export default {
  mounted() {
    console.log('2222', this)
  }
}
</script>

<style lang="less" scoped>

.txt {
  // font-size: 750px;
  width: 500px;
  border: 1px solid red;
}
.norem-txt1 {
  width: 500px;
  border: 1px solid blue;
}
</style>