/** 获取请求对象 */
function getRequests(vm, apis, requests = {}) {
	Object.keys(apis).forEach(key =>
		requests[key] = (params = {}) => vm.$u.post(apis[key], params));
	return requests;
}

const install = (Vue, vm) => {
	/** 自定义用到的接口，写到以下这个对象 */
	let customInterfaceUrl = {
		getHome: '/request?cmd=loadCustomTemplatePage'
	};

	/** 登录、权限 */
	const loginRelatedUrl = {
		getAccessToken: '/request?cmd=getAccessToken',
		captchaVerify: '/request?cmd=captchaVerify',
		checkToken: '/request?cmd=checkToken',
		userLogin: '/request?cmd=userLogin/v1'
	}

	/** 自定义 */
	const customInterface = {};
	getRequests(vm, customInterfaceUrl, customInterface);

	/**登录、权限*/
	const loginRelated = {};
	getRequests(vm, loginRelatedUrl, loginRelated);

	vm.$u.api = {
		...loginRelated, // 登录
		...customInterface, // 自定义
	};
}
export default {
	install
}