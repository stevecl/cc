import { computed } from "vue"
import { debounce } from '@/common/js/utils'

/**
 * @function防抖
 * @param { Function } fn 
 * @param { Number } wait 
 * @returns 
 */
export const debounce = (fn, wait) => {
  let timer = null;
  return function() {
    let context = this, args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

const needLoginPageList = [
  '/pages/activity/activity',
  '/pages/medal/medal',
  '/pages/order/order',
  '/pages/adress/adress',
  '/pages/mine/updateUser',
]

export default function useDiy () {
  const app = getApp()
  const handleClick = debounce(async (path) => {
    return console.log('path', path)
  }, 500)
  
  const getImgRatio = (str, def = 1) => {
    if (!str) return def
    let arr = str.replace(/[^0-9:]/g, '').split(':')
    if (arr.length !== 2) return def
    return arr[0] / arr[1]
  }
  
  return {
    handleClick,
    getImgRatio
  }
}