import { useRouter } from 'vue-router'

import { useCommonStore } from '@/stores/common'
const { materialDatas } = useCommonStore()

import { getModuleDetail, editModule } from '@/api'

import { ElMessage } from 'element-plus'

export default function(baseInfo, setting, activeIndex) {
  const router = useRouter()

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

    setting.value = JSON.parse(templateConfigParams)
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

  const submitData = async () => {
    return console.log('setting', setting.value)
    let params = { ...baseInfo.value }
    params.templateConfigParams = JSON.stringify(setting.value)
    await editModule(params)
    ElMessage({ type: 'success', message: '保存成功' })
  }
  return {
    initData,
    submitData
  }
}