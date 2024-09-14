<template>
  <div class="edit-module-goods" :style="config?.style">
    <list1 :config="config" v-if="config.showType === 1"></list1>
    <list2 :config="config" v-if="config.showType === 2"></list2>
    <list3 :config="config" v-if="config.showType === 3"></list3>
    <list4 :config="config" v-if="config.showType === 4"></list4>
    <list5 :config="config" v-if="config.showType === 5"></list5>
    <list6 :config="config" v-if="config.showType === 6"></list6>
  </div>
</template>

<script setup>
// import { ref, watch, computed, nextTick, onMounted } from 'vue'
import list1 from './list1.vue';
import list2 from './list2.vue';
import list3 from './list3.vue';
import list4 from './list4.vue';
import list5 from './list5.vue';
import list6 from './list6.vue';

const props = defineProps({
  config: Object
})

// const getConfigByName = name => {
//   let res = props.config.content.filter(obj => obj.name === name)[0]
//   console.log('res', res, props.config.content)
//   return res || {}
// }

</script>

<style lang="scss" scoped></style>
