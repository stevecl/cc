import Vue from 'vue';

/**
 * 获取 openid 和 sessionKey
 * */
export const login = async () => {
	let loginRes = await uni.login({
		provider: 'weixin'
	});
	if (loginRes.code) {
		let getAccessToken = await uni.$u.api.getAccessToken({
			code: loginRes.code,
			isApplet: 6
		});

		// if (getAccessToken) {
		// 	this.$u.vuex('vuex_openid', getAccessToken.openid)
		// 	this.$u.vuex('vuex_sessionKey', getAccessToken.sessionKey)
		// 	this.$u.vuex('vuex_unionId', getAccessToken.unionId)
		// }
	} else {
		uni.$u.toast('登录失败!' + loginRes.errMsg);
	}
}

uni.$util = {
	login
}