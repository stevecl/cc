<template>
  <div class="edit-module-order" :style="styleObj">
    <div class="edit-module-order_item" v-for="item in config.datas">
      <span class="iconfont" :class="item.icon" :style="{color: config.style.iconColor }"></span>
      <p class="txt">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { bgStyle, style } = props.config
  bgStyle.background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
  bgStyle.backgroundSize = '100% 100%'
  return {
    ...bgStyle,
    ...style,
    color: style.txtColor
  }
})

</script>

<style lang="scss" scoped>
.edit-module-order {
  display: flex;
  height: 68px;
  &_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .iconfont {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .txt {
      flex-grow: 0;
      font-size: 13px;
    }
  }
}
</style>
