import { debounce } from './utils'
import { getLinkByCode } from './linkCode';

export const mixins = {
  data() {
    return {
			errImgs: {}, // 错误图片集合，存放 默认图片
      defDir: '/diyPages/static/images/', // 图片路径
    };
  },
  methods: {
    handleClick: debounce(async function(linkObj) {
			let linkpath = getLinkByCode(linkObj)
      console.log('click:', linkObj, linkpath)
			await this.verfiyPage()
			if (linkpath) {
				uni.navigateTo({
					url: `/${linkpath}`
				})
			}
    }, 300),
		verfiyPage() {
			return new Promise((resolve, reject) => {
				let pages = getCurrentPages();
				let currentPage = pages[pages.length - 1];
				let currentRoute = currentPage.route
				if (currentPage.options.isPreview == 1) {
					reject()
				} else {
					resolve()
				}
			})
		},
		getImgRatio(str, def = 1) {
		  if (!str) return def
		  let arr = str.replace(/[^0-9/]/g, '').split('/')
		  if (arr.length !== 2) return def
		  return arr[0] / arr[1]
		},
		getImgByName(file) {
			return `/diyPages/static/images/${file}`
		}
  },
};