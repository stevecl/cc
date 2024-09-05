import { computed, watch, nextTick } from 'vue'
const DEFAULT_CONFIG = {
  height: '0',
  fontSize: '14px',
  margin: '0 0 0 0',
  padding: '0 0 0 0',
  borderRadius: '0'
}


export default function (props) {

  const currentStyle = computed(() => (props.config?.style || { ...DEFAULT_CONFIG }))
  
  const height = computed({
    get() {
      return Number(parseInt(currentStyle.value.height))
    },
    set(val) {
      currentStyle.value.height = val ? val + 'px' : 0
    }
  })
  
  const fontSize = computed({
    get() {
      return Number(parseInt(currentStyle.value.fontSize))
    },
    set(val) {
      currentStyle.value.fontSize = val ? val + 'px' : 0
    }
  })

  const marginTop = computed({
    get() {
      return Number(parseInt(currentStyle.value.margin.split(' ')[0]))
    },
    set(val) {
      let list = currentStyle.value.margin.split(' ')
      list[0] = val ? val + 'px' : 0
      currentStyle.value.margin = list.join(' ')
    }
  })

  const marginLeft = computed({
    get() {
      return Number(parseInt(currentStyle.value.margin.split(' ')[1]))
    },
    set(val) {
      let list = currentStyle.value.margin.split(' ')
      list[1] = list[3] = val ? val + 'px' : 0
      currentStyle.value.margin = list.join(' ')
    }
  })

  const paddingTop = computed({
    get() {
      return Number(parseInt(currentStyle.value.padding.split(' ')[0]))
    },
    set(val) {
      let list = currentStyle.value.padding.split(' ')
      list[0] = val ? val + 'px' : 0
      currentStyle.value.padding = list.join(' ')
    }
  })
  
  const paddingLeft = computed({
    get() {
      return Number(parseInt(currentStyle.value.padding.split(' ')[1]))
    },
    set(val) {
      let list = currentStyle.value.padding.split(' ')
      list[1] = list[3] = val ? val + 'px' : 0
      currentStyle.value.padding = list.join(' ')
    }
  })

  const paddingBottom = computed({
    get() {
      return Number(parseInt(currentStyle.value.padding.split(' ')[2]))
    },
    set(val) {
      let list = currentStyle.value.padding.split(' ')
      list[2] = val ? val + 'px' : 0
      currentStyle.value.padding = list.join(' ')
    }
  })

  const borderRadius = computed({
    get() {
      return Number(parseInt(currentStyle.value.borderRadius))
    },
    set(val) {
      currentStyle.value.borderRadius = val ? val + '%' : 0
    }
  })

  return {
    height,
    fontSize,
    marginTop,
    marginLeft,
    paddingTop,
    paddingLeft,
    paddingBottom,
    borderRadius
  }
}