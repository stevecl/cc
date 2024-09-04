import request from '@/utils/request'

/**
 * @function 上传文件
 * @param { Object } data 
 * @returns 
 */
export function ossUpload(file) {
  return request({
    url: '/common/ossUpload',
    method: 'post',
    data: {
      file
    }
  })
}