export const debounce = function(fn, wait) {
  let timer = false;
  return function() {
    clearTimeout(timer);
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = false;
      fn.apply(this, arguments); // 把参数传进去
    }, wait);
  };
}