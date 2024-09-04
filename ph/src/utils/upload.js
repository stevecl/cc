import { getCookies } from '@/utils'
import slConfig from '@/config'

/**
 * 
 * @param {*} file 
 * @param {*} callback 
 * @param {*} type 
 * @param {*} mimeLimit 文件类型
 * @returns 
 */
export async function uploadFile(file, callback) {
  var qiniuUrl = `${slConfig.baseURL}/common/ossUpload`;
  var errCodeMsg = {
    'code400': '报文构造不正确或者没有完整发送。',
    'code401': '上传凭证无效。',
    'code403': '上传文件格式不正确。',
    'code413': '上传文件过大。',
    'code579': '回调业务服务器失败。',
    'code599': '服务端操作失败。',
    'code614': '目标资源已存在。'
  };
  var _token = "Bearer " + getCookies('Admin-Token')

  //构建xhr上传表单参数
  var form = new FormData();
  //优化自定义文件名模式

  form.append('file', file);
  // form.append('token', _token);

  //构建xhr对象
  var xhr = new XMLHttpRequest();
  xhr.open('POST', qiniuUrl, true);
  // xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
  xhr.setRequestHeader('Authorization', "Bearer " + getCookies('Admin-Token'));
  //上传进度回调
  xhr.upload.onprogress = function (event) {
    //console.log();
  };
  if (xhr.ontimeout) {//暂时不用
    xhr.ontimeout = function (event) {
      //console.log('上传已超时');
    };
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var resultData = xhr.responseText;
        console.log('resultData', resultData.fileName)
        try {
          resultData = eval('(' + xhr.responseText + ')');
        } catch (e) {
          resultData = {
            status: 0,
            msg: '上传失败，返回数据异常'
          };
        }
        if (resultData.content && resultData.content.suffix) {//qiniu处理
          resultData.content.suffix = resultData.content.suffix.replace('.', '');
        }
        callback(resultData);
      } else {
        var resultData = {
          status: 0,
          msg: errCodeMsg['code' + xhr.status] ? errCodeMsg['code' + xhr.status] : xhr.statusText
        };
        callback(resultData);
      }
    }
  };
  xhr.send(form);
}
