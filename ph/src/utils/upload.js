import slConfig from '@/config'

/**
 * @function 单文件上传
 * @param {*} file 
 */
export async function uploadFile(file) {
  var form = new FormData();
  form.append('file', file);
  form.append('token', await getToken());
  form.append('fname', file.name);
  form.append('key', createUuid());
  console.log('form', form)
  let res = await fetch(slConfig.uploadUrl, {
    method: 'post',
    body: form
  })
  let data = await res.json()
  console.log(222222, data.key)

  let res1 = await fetch(`${slConfig.domain}/api/qiniu/getUrl/${data.key}`, {
    method: 'post',
    headers: {
      token: localStorage.getItem('token')
    }
  })
  let t = await res1.json()
  console.log(333333333, t.result)
  return t.result
}


let getToken = async function () {
  let res = await fetch(`${slConfig.domain}/api/qiniu/uploadImgToken`, {
    method: 'post',
    headers: {
      token: localStorage.getItem('token')
    }
  })
  let data = await res.json()
  return data.result
}

// 生成UUID唯一值函数
const createUuid = () => {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';
  var uuid = s.join('');
  return uuid;
}