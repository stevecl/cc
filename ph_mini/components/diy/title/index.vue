<template>
  <view class="edit-module-title" :style="[styleObj]" @click="handleClick(props.config.link)">
    {{config.content}}
  </view>
</template>

<script>
export default {
  props: {
    config: Object
  },
  computed: {
    styleObj() {
      let res = this.config?.style || {}
      res.background = `${res.backgroundColor} url(${this.config.bgImageUrl}) center / 100% 100% repeat`
      return res      
    }
  }
}

</script>

<style lang="scss" scoped>
.edit-module-title {
  word-break: break-all;
}
</style>
