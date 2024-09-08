import { useRouter } from 'vue-router'

import { useCommonStore } from '@/stores/common'
const { materialDatas } = useCommonStore()

import { getModuleDetail, editModule } from '@/api'

import { ElMessage } from 'element-plus'

export default function(baseInfo, globalConfig, setting, activeIndex) {
  const router = useRouter()

  const initData = async (type, id) => {
    baseInfo.value.id = id
    baseInfo.value.category = type
    if (!id) return
    // let { category, sourceType, templateTitle, templateName, templateImg, backgroundColor, searchKey, templateConfigParams, componentIds } = await getModuleDetail(id)
    let res = await getModuleDetail(id)
    // return console.log('res', res)
    setting.value = JSON.parse(res.templateConfigParams)
    baseInfo.value = res
  }

  const submitData = async () => {
    // return console.log('setting', setting)
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