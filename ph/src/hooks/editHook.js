import { useRouter } from 'vue-router'

import { useCommonStore } from '@/stores/common'
const { materialDatas } = useCommonStore()

import { getModuleDetail, editModule } from '@/api'

import { ElMessage } from 'element-plus'
import { deepClone, deepMerge } from '../utils'

export default function(baseInfo, setting, activeIndex) {
  const initData = async (type, id) => {
    baseInfo.value.id = id
    baseInfo.value.category = type
    if (!id) {
      if (['BOTTOM_MENU', 'HOME_ADVERT'].includes(type)) {
        const DEF_LIST = {
          BOTTOM_MENU: [{ name: 'tabbar' }],
          HOME_ADVERT: [{ name: 'advert' }] 
        }
        setting.value = DEF_LIST[type].map(obj => {
          let item = materialDatas[obj.name]
          item.config = Object.assign({}, item.defConfig, obj.config || {})
          return item
        })
        activeIndex.value = 0
        return
      }
      else {
        return   
      }
    }
    let { category, sourceType, templateTitle, templateName, templateImg, backgroundColor, searchKey, templateConfigParams, componentIds } = await getModuleDetail(id)
    let testData = JSON.parse(templateConfigParams).map(item => {
      let _config = deepClone(item.config)
      let res = materialDatas[item.name]
      let defaultConfig = deepClone(res.defConfig)
      deepMerge(defaultConfig, _config)
      res.config = defaultConfig
      return res
    })
    console.log('testData', testData)
    setting.value = testData
    baseInfo.value.category = category
    baseInfo.value.sourceType = sourceType
    baseInfo.value.templateName = templateName
    baseInfo.value.templateTitle = templateTitle
    baseInfo.value.templateImg = templateImg
    baseInfo.value.backgroundColor = backgroundColor
    baseInfo.value.searchKey = searchKey
    baseInfo.value.componentIds = componentIds
    if (['BOTTOM_MENU', 'HOME_ADVERT'].includes(category)) activeIndex.value = 0
  }

  const submitData = async (isPreview = false) => {
    let templateConfigParams = setting.value.map(({ name, title, config }) => ({ name, title, config }))
    let params = { ...baseInfo.value }
    let { id, templateName, templateImg } = params
    if (!templateName) return ElMessage({ type: 'warning', message: '模板名称不能为空 ' })
    if (!templateImg) return ElMessage({ type: 'warning', message: '模板封面不能为空 ' })
    params.templateConfigParams = JSON.stringify(templateConfigParams)
    console.log('params', templateConfigParams)
    let res = await editModule(params)
    if (id && isPreview) {
      return Bus.emit('preview', { templateName, id })
    }
    console.log('返回 result:', res, isPreview)
    ElMessage({ type: 'success', message: '保存成功' })
  }
  return {
    initData,
    submitData
  }
}