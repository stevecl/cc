<template>
  <div
    class="full relation wrap"
    @drop="handleDrop"
    @dragenter="handleDragEnter"
    @dragover="handleDragover"
    >
      <component class="absolute" v-for="item in data" :key="item.key" :style="item.style" :is="material.materialMap[item.index]"></component>
    </div>
</template>

<script setup>
import _ from 'lodash'
import { computed, onMounted } from 'vue'
import { material } from '../utils/options'
import { setRem, setTitle } from 'commonjs-cc'
// console.log(33223, setRem)

const props = defineProps({
  modelValue: {
    type: Array
  }
})

const emit = defineEmits(['update:modelValue'])
const data = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', _.cloneDeep(value))
  }
})

// html5 中的ondrop 事件，必须要给同一个元素添加 ondragover 事件
// 并组织 ondragover 事件的默认行为，才能看到 ondrop 事件的效果
const handleDrop = (event) => {
  console.log(event)
  event.preventDefault()
  event.stopPropagation();
  const index = event.dataTransfer.getData('key')
  // 
  data.value = [
    ...data.value,
    {
      index,
      key: index + Math.random(),
      style: {
        left: event.offsetX + 'px',
        top: event.offsetY + 'px'
      }
    }
  ]
}

const handleDragover = (event) => {
  event.preventDefault()
}

const handleDragEnter = (event) => {
  // event.dataTransfer.dropEffect = 'move'
}

onMounted(() => {
  let audio = document.createElement('audio')
  audio.setAttribute('autoplay', true)
  audio.setAttribute('src', 'https://file.maytek.cn/default/20211118/f_size11954492/lqp__QjS424y2hHdZv3GDkzWUPly.mp3')
  audio.setAttribute('controls', true)
  document.querySelector('.relation').appendChild(audio)
  setTimeout(() => audio.play(), 1000)
  console.log('onMounted', )

})
</script>

<style lang="less" scoped>
.wrap {
  color: red;
}

</style>