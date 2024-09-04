import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUrlParams } from '@/utils'

export const useCommonStore = defineStore('common', () => {
  const materialDatas = ref({})
  const datas = import.meta.glob('../material/*/config.js')
  console.log('Object.keys(datas)', Object.keys(datas))
  Object.keys(datas).forEach(async key => {
    let _key = key.replace(/\/config.js/, '').replace(/.*\//, '')
    materialDatas.value[_key] = {
      name: _key,
      componentName: 'diy-' + _key,
      configComponent: 'conf-' + _key,
      getDefaultConfig: datas[key],
    }
  })

  const appCode = ref(getUrlParams().appCode || sessionStorage.getItem('appCode') || '')
  sessionStorage.setItem('appCode', appCode.value)

  return {
    appCode,
    materialDatas
  }
})