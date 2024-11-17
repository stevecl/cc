<template>
  <view class="edit-module-goods" :style="[config.style]">
    <list1 :config="config" v-if="config.productConfig.showType === 1"></list1>
    <list2 :config="config" v-if="config.productConfig.showType === 2"></list2>
    <list3 :config="config" v-if="config.productConfig.showType === 3"></list3>
    <list4 :config="config" v-if="config.productConfig.showType === 4"></list4>
    <list5 :config="config" v-if="config.productConfig.showType === 5"></list5>
    <list6 :config="config" v-if="config.productConfig.showType === 6"></list6>
  </view>
</template>

<script>
import list1 from './list1.vue';
import list2 from './list2.vue';
import list3 from './list3.vue';
import list4 from './list4.vue';
import list5 from './list5.vue';
import list6 from './list6.vue';

export default {
  props: {
    config: Object
  },
  data() {
    return {}
  },
  components: {
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
  },
  mounted() {
  }
}

</script>