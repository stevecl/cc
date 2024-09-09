<script>
	const app = {
		globalData: {
			device: ""
		},
		async onShow(option) {
			let loginRes = await this.$uni.login({
				provider: 'weixin'
			});

			if (loginRes.code) {
				let getAccessToken = await this.$u.api.getAccessToken({
					code: loginRes.code,
					isApplet: 6
				});
				if (getAccessToken) {
					this.$u.vuex('vuex_openid', getAccessToken.openid);
					this.$u.vuex('vuex_sessionKey', getAccessToken.sessionKey);
					this.$u.vuex('vuex_unionId', getAccessToken.unionId);
				}
			} else {
				this.$u.toast('登录失败!' + loginRes.errMsg);
			}
		},
		async onLaunch() {
			let info = await this.$uni.getSystemInfo();
			this.globalData.device = info.deviceId;
		},
		async onHide() {}
	}

	export default app;
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	.global-background {
		background-color: #f5f5f5;
	}
</style>