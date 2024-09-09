<template>
  <div class="edit-module-menu" :style="menuStyle">
    <div
      v-for="(item, index) in config.datas"
      :key="index"
      @click="linkHandle(item)"
      style="">
      <p class="icon" :style="getIconColor(item)">
        <span v-if="config.showType === 1" :class="['iconfont', item.icon]"></span>
        <img v-if="config.showType === 2 && !isActivePath(item.link)" :src="item.img" alt="">
        <img v-if="config.showType === 2 && isActivePath(item.link)" :src="item.activeImg" alt="">
      </p>
      <p class="text text-overflow" :style="getTextColor(item)">
        <span>{{item.text}}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  config: Object
})

const menuStyle = computed(() => {
  return {
    backgroundColor: props.config.bgColor
  }
})

const getIconColor = item => ({ color: isActivePath(item.link) ? props.config.iconActiveColor : props.config.iconColor })
const getTextColor = item => ({ color: isActivePath(item.link) ? props.config.textActiveColor : props.config.textColor })

const isActivePath = path => {
  return path === 'defaultIndex'
}

</script>

<style lang="scss" scoped>
.edit-module-menu {
  position: absolute!important;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2C2C2C;
  height: 50px;
  &.editing {
    height: 50px;
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    p.icon {
      margin-bottom: 5px;
      &.icon {
        width: 20px;
        height: 20px;
        span.iconfont {
          font-size: 20px;
        }
        img {
          width: auto;
          height: 100%;
          max-width: 100%;
        }
      }
    }
    p.text {
      flex: 1;
    }
  }
}
</style>
