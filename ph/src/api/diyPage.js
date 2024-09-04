import request from '@/utils/request'

/**
 * @function 新增编辑模版
 * @param { Object } data 
 * @returns 
 */
export function editModule(data) {
  return request({
    url: '/custom/new/saveCustomTemplatePage',
    method: 'post',
    data
  })
}

/**
 * @function 查询模版列表数据
 * @returns 
 */
export function getModuleList(data) {
  return request({
    url: '/custom/new/listCustomTemplatePage',
    method: 'post',
    data
  })
}

/**
 * @function 启用模板
 * @returns 
 */
export function editModuleStatus(id) {
  return request({
    url: '/custom/new/startCustomTemplatePage',
    method: 'post',
    data: {
      id
    }
  })
}

/**
 * @function 克隆模板
 * @returns 
 */
export function copyModule(id) {
  return request({
    url: '/custom/new/copyCustomTemplatePage',
    method: 'post',
    data: {
      id
    }
  })
}

/**
 * @function 删除模板
 * @returns 
 */
export function deleteModule(id) {
  return request({
    url: '/custom/new/deleteCustomTemplatePage',
    method: 'post',
    data: {
      id
    }
  })
}
/**
 * @function 获取模板详情
 * @returns 
 */
export function getModuleDetail(id) {
  return request({
    url: '/custom/new/getCustomTemplatePageInfo',
    method: 'post',
    data: {
      id
    }
  })
}