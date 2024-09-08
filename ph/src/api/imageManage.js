import request from '@/utils/request'

/**
 * @function 获取图片分组
 * @param { Object } data 
 * @returns 
 */
export function getImageGroupList() {
  return request({
    url: '/custom/picCategory/getPageList',
    method: 'post',
    data: {
      pageNum: 1,
      pageSize: 999,
      state: 1
    }
  })
}

/**
 * @function 获取图片列表
 * @param { Object } data 
 * @returns 
 */
export function getDiyImage(data) {
  return request({
    url: '/custom/picList/getPageList',
    method: 'post',
    data
  })
}

/**
 * @function 获取图片列表
 * @param { Object } data 
 * @returns 
 */
export function saveDiyImage(data) {
  return request({
    url: '/custom/picList/save',
    method: 'post',
    data
  })
}

/**
 * @function 获取图片列表
 * @param { Object } data 
 * @returns 
 */
export function deleteDiyImage(data) {
  return request({
    url: '/custom/picList/del',
    method: 'post',
    data
  })
}