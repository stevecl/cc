<template>
	<view class="custom-container safe-area-inset-bottom">
		<view v-if="!isLogin" class="title" @click="loginHandle">点击我，跳转登录</view>
		<view v-else class="title" @click="logoutHandle">
			<view>您已登录，账号为{{vuex_tel}}</view>
			<view>点击我，退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false
			};
		},
		onShow() {
			this.isLogin = this.vuex_tel ? true : false;
		},
		onLoad() {},
		onReachBottom() {},
		onPullDownRefresh() {},
		onPageScroll(e) {},
		methods: {
			loginHandle() {
				uni.navigateTo({
					url: '/pages/main/base/login/login'
				})
			},
			logoutHandle() {
				uni.showModal({
					title: '温馨提示',
					content: '确定要退出登录吗？',
					success: (res) => {
						if (res.confirm) {
							const list = [
								'vuex_userId',
								'vuex_accountId',
								'vuex_avatar',
								'vuex_nickname',
								'vuex_token',
								'vuex_accountType'
							];
							for (let i of list) {
								this.$u.vuex(i, "");
							};
							this.isLogin = false;
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.custom-container {
		.title {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			white-space: nowrap;
			text-align: center;
		}
	}
</style>