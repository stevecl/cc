function debounce(fn, wait) {
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


export const mixins = {
  data() {
    return {
      defDir: '/static/images/'
    };
  },
  methods: {
    handleClick: debounce(function(path) {
      console.log('click:', path)
    }, 500),
  },
};