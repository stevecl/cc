<template>
  <div class="edit-module-search" :style="styleObj">
    <span :class="['iconfont', config.left.icon]" :style="leftStyle" v-show="config.left.type"></span>
    <div class="flex-1 search-input">
      <input
        type="text"
        v-model="searchTxt"
        :style="inputStyle"
        @keydown.enter="defaultHandle"
        @focus="init"
        :placeholder="config.input.placeholder"
        >
    </div>
    <span :class="['iconfont', config.right.icon]" :style="rightStyle" v-show="config.right.type" @click="linkPage" ></span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import useStyle from '@/hooks/useStyle'

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { bgColor, bgImageUrl } = props.config?.style || {}
  let background = `${bgColor} url(${bgImageUrl}) center / 100% 100% repeat`
  return {
    ...props.config.style,
    background
  }
})
const inputStyle = computed(() => {
  let { bgColor, bgImageUrl, borderRadius } = props.config?.input || {}
  let background = `${bgColor} url(${bgImageUrl}) center / 100% 100% repeat`
  return {
    ...props.config.input,
    paddingLeft: props.config.left.type === 2 ? '36px' : '12px',
    background,
    borderRadius: borderRadius + 'px'
  }
})

const { paddingLeft } = useStyle(props)
const leftStyle = computed(() => {
  let { type, color } = props.config?.left || {}
  return {
    position: type === 2 ? 'absolute' : 'relative',
    left: type === 2 ? paddingLeft : 'unset',
    color
  }
})
const rightStyle = computed(() => {
  let { type, color } = props.config?.right || {}
  return {
    position: type === 2 ? 'absolute' : 'relative',
    right: type === 2 ? paddingLeft : 'unset',
    color
  }
})

const searchTxt = ref('')

const defaultHandle = () => { // 键盘前往
  console.log('默认跳转行为')
}

const linkPage = () => {
  // 跳转类型 btnType: default link
  let { btnType, link } = props.config.right
  
}
</script>

<style lang="scss" scoped>
.edit-module-search {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  .iconfont {
    font-size: 18px;
    color: #fff;
    margin: 1px 10px 0;
  }
  .search-input {
    height: 36px;
    input{
      width: 100%;
      height: 100%;
      font-size: 14px;
      background-color: #D0D0D0;
      outline: none;
      border: none;
      padding-right: 14px;
    }
  }
}
</style>
