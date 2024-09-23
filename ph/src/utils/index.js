/**
 * @function 获取URL参数列表
 * @returns { Object }
 */
export const getUrlParams = (isHash = true) => {
  let url = isHash ? location.hash : location.search; //获取url中"?"符后的字串
  url = decodeURIComponent(url)
  let theRequest = {};
  if (url.indexOf("?") != -1) {
    let str = url.substr(url.indexOf("?") + 1);
    let strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
};

export const getCookies = (key) => {
  var cookies = document.cookie.split('; ');
  var result = {};

  cookies.forEach(function (cookie) {
    var parts = cookie.split('=');
    var key = decodeURIComponent(parts[0]);
    var value = decodeURIComponent(parts[1]);

    result[key] = value;
  });

  return result[key] || null;
}

export const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

// 深度拷贝
export const deepClone = obj => {
  // let isArr = Object.prototype.toString.call(obj) === '[object Array]';
  let isArr = Array.isArray(obj);
  let isObject = Object.prototype.toString.call(obj) === '[object Object]';
  if (isArr) {
    let newObj = [];
    for (let i = 0; i < obj.length; i++) {
      newObj[i] = deepClone(obj[i]);
    }
    return newObj;
  } else if (isObject) {
    let newObj = {};
    for (let i in obj) {
      newObj[i] = deepClone(obj[i]);
    }
    return newObj;
  }
  return obj;
}

export const deepMerge = (target, source) => {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (!target.hasOwnProperty(key)) target[key] = source[key]
    }
    for (const key in target) {
      if (source.hasOwnProperty(key)) {
        if (!isObject(source[key])) {
          target[key] = source[key]
        } else {
          deepMerge(target[key], source[key])
        }
      }
    }
  }
}

/**
* 参数处理
* @param {*} params  参数
*/
export function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + "=";
    if (value !== null && typeof (value) !== "undefined") {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && typeof (value[key]) !== 'undefined') {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            result += subPart + encodeURIComponent(value[key]) + "&";
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }
  return result
}