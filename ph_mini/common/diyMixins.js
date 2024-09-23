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
			errImgs: {}, // 错误图片集合，存放 默认图片
      defDir: '/static/images/', // 图片路径
    };
  },
  methods: {
    handleClick: debounce(function(path) {
      console.log('click:', path)
    }, 500),
		getImgByName(file) {
			return `/static/images/${file}`
		}
  },
};