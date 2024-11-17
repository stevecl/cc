<template>
  <div class="edit-module-assist-line" :style="[styleObj]">
    <div :style="[lineStyle]"></div>
  </div>
</template>

<script>
export default {
  props: {
    config: Object
  },
  computed: {
    styleObj() {
      let res = this.config?.style || {}
      delete res.backgroundColor
      res.background = `${res.backgroundColor}`
      return res
      
    },
    lineStyle() {
      let conf = this.config
      return {
        borderTop: `${conf.height}px ${conf.type} ${conf.lineColor}`
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.edit-module-assist-line {
  display: flex;
  align-items: center;
  min-height: 10px;
  div {
    width: 100%;
    height: 100%;
  }
}
</style>
