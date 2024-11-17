// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
const install = (Vue, vm) => {
	// #ifdef H5
		let __wxConfig = {
			envVersion: "develop"
		}
	// #endif
	Vue.prototype.$u.http.setConfig({

		baseUrl: __wxConfig.envVersion == "release" ?
			'https://bxj.beixiaoji.com' : // 生产线，不要改
			'https://bxj.beixiaoji.cn/test', // 测试环境
			// 'https://bxj.beixiaoji.com',

		h5Url: __wxConfig.envVersion == "release" ?
			'https://h5.beixiaoji.com' : // 生产线，不要改
			'https://h5.beixiaoji.com',

		imUrl: __wxConfig.envVersion == "release" ?
			'https://customer-mph5.shang-cloud.com' : // 生产线，暂时是hztest环境
			'https://customer-mph5.shang-cloud.com',
	});
	// #ifdef H5
		Vue.prototype.$u.http.setConfig({
			baseUrl: __wxConfig.envVersion == "release" ?
				'https://bxj.beixiaoji.com' : // 生产线，不要改
				'/test', // 测试环境
				// 'https://bxj.beixiaoji.com',

			h5Url: __wxConfig.envVersion == "release" ?
				'https://h5.beixiaoji.com' : // 生产线，不要改
				'https://h5.beixiaoji.com',

			imUrl: __wxConfig.envVersion == "release" ?
				'https://customer-mph5.shang-cloud.com' : // 生产线，暂时是hztest环境
				'https://customer-mph5.shang-cloud.com',
		});
	// #endif
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// config.header.token = vm.vuex_token;
		config.header.token = uni.getStorageSync('TESTTOKEN');
		config.header.sourceType = vm.vuex_sideType;
		config.data.source_type = vm.vuex_sideType;
		config.data.buyerId = vm.vuex_userId;
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式，见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		return config;
	}

	let isRefreshing = false;

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = async (res) => {
		// 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
		// 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
		if (res.errCode == 0) {
			// 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
			return res.result;
			// return (res.result && res.result != null && res.result != undefined) ? res.result : true;
		} else if ((res.errCode + '')[0] == "3") {
			// token 过期，自动刷新
			if (res.errCode === 3004) {
				let options = JSON.parse(JSON.stringify(Vue.prototype.$u.http.options));
				let token = await Vue.prototype.$u.api.refreshToken({
					token: Vue.prototype.$store.state.vuex_token,
					loginId: Vue.prototype.$store.state.vuex_userId
				});
				Vue.prototype.$u.vuex('vuex_token', token);

				if (options.method === 'POST') {
					return await Vue.prototype.$u.http.post(options.url, options.data);
				}
				if (options.method === 'GET') {
					return await Vue.prototype.$u.http.get(options.url);
				}
			}

			const pages = getCurrentPages()
			const currentPage = pages[pages.length - 1];
			if (currentPage.route == 'pages/main/base/login/login') return

			uni.navigateTo({
				url: '/pages/main/base/login/login'
			});
			return false;
		} else {
			uni.showToast({
				icon: 'none',
				title: res.errDesc || res.errName,
				duration: 2000
			});
			return false;
		}
	}
}

export default {
	install
}