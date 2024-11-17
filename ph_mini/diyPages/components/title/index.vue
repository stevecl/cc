<template>
  <view class="edit-module-title" :style="[styleObj]" @click="handleClick(config.link)">
    {{config.content}}
  </view>
</template>

<script>
import { mixins } from '@/diyPages/utils/diyMixins.js'
export default {
	mixins: [ mixins ],
  props: {
    config: Object
  },
  computed: {
    styleObj() {
      let { style, bgStyle } = this.config
      let background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
      return {
        ...style,
        background
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.edit-module-title {
  word-break: break-all;
}
</style>
