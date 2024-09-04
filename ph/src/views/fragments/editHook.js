import { useRouter } from 'vue-router'

import { useCommonStore } from '@/stores/common'
const { materialDatas } = useCommonStore()

import { getModuleDetail, editModule } from '@/api'

import { ElMessage } from 'element-plus'

export default function(baseInfo, globalConfig, setting, activeIndex) {
  const router = useRouter()

  const initData = async (type, id) => {
    baseInfo.value.id = id
    baseInfo.value.type = type
    if (!id) return
    // let { category, sourceType, templateTitle, templateName, templateImg, backgroundColor, searchKey, templateConfigParams, componentIds } = await getModuleDetail(id)
    let res = await getModuleDetail(id)
    baseInfo.value = res
  }

  const submitData = async () => {
    await editModule(baseInfo.value)
  }
  return {
    initData,
    submitData
  }
}