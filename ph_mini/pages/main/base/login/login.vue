<template>
	<view class="content">
		<view class="logo">
			<image src="https://online-avatar.daily-talk.com/phkj-logo.png" mode=" aspectFit"></image>
		</view>
		<view>
			<view class="tab-box">
				<view class="tab" :class="{active: type == 1}" @click="type = 1">快捷登录</view>
				<view class="fg"></view>
				<view class="tab" :class="{active: type == 0}" @click="type = 0">手机号登录</view>
			</view>
			<view v-if="type == 0" class="phone-box">
				<view class="form-list">
					<view class="form-item">
						<image class="icon" src="https://onlineavatar.xingqiuxiuchang.com/icon-phone-bxj.png"
							mode="aspectFit"></image>
						<input v-model="form.tel" class="input" type="number" placeholder="手机号"
							placeholder-style="color: #999999">
					</view>
					<view class="form-item">
						<image class="icon" src="https://onlineavatar.xingqiuxiuchang.com/icon-pass-bxj.png"
							mode="aspectFit"></image>
						<input v-if="isPwdLogin" v-model="form.password" class="input" type="password"
							placeholder="请输入密码" placeholder-style="color: #999999">
						<input v-else v-model="form.telCaptcha" class="input" type="number" placeholder="请输入验证码"
							placeholder-style="color: #999999" />

						<u-button size="mini" type="error" :style="isPwdLogin?'width:0;overflow:hidden':''"
							@click="getCode">
							<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange" />
							{{codeTip}}
						</u-button>
					</view>
				</view>
				<view class="action">
					<view class="login-type" @click="isPwdLogin=!isPwdLogin">{{isPwdLogin?'验证码登录':'账号密码登录'}}</view>
					<view v-if="isPwdLogin" class="forget" @click="toForget">忘记密码？</view>
				</view>
				<view class="btn-box">
					<button :disabled="!canSubmit" @click="handleLogin">登录</button>
				</view>
			</view>
			<view v-else>
				<button v-if="checked" class="auth_login" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber"
					shape="circle">授权登录</button>
				<button v-else class="auth_login" shape="circle" @click="showLogin">授权登录</button>
			</view>
		</view>

		<view class="agreement" v-if="type == 0">
			<u-checkbox-group>
				<u-checkbox size="26rpx" labelSize="22rpx" active-color="red" v-model="checked" shape="circle">
					请阅读并同意<text @click="toAgreement" class="link">《商城用户注册协议》</text>与<text @click="toPrivacy"
						class="link">《隐私政策》</text>
				</u-checkbox>
			</u-checkbox-group>
		</view>
		<view class="agreement" v-if="type == 1">
			<u-checkbox-group>
				<u-checkbox size="26rpx" labelSize="22rpx" active-color="red" v-model="checked" shape="circle">
					请阅读并同意<text @click="toAgreement" class="link">《商城用户注册协议》</text>与<text @click="toPrivacy"
						class="link">《隐私政策》</text>
				</u-checkbox>
			</u-checkbox-group>
		</view>

		<u-modal v-model="ifAgreement" content="请仔细阅读并同意《商城用户注册协议》和《隐私政策》" title="提示"
			:title-style="{'color': '#333333','font-weight':'600'}"></u-modal>

		<view class="changeEv_box">
			<change-env></change-env>
		</view>

		<ne-captcha id="captcha" captcha-id="13a76d3983614c06b598ff0599a93744" width="640rpx" @verify="sendCode" />

		<u-modal v-model="showCheckLogin" showCancelButton :showTitle="false" :showConfirmButton="false"
			:showCancelButton="false">
			<view class="check-login">
				<view class="content">
					我已阅读并同意
					<text @click="toAgreement" class="link">《商城用户注册协议》</text>
					与
					<text @click="toPrivacy" class="link">《隐私政策》</text>
					，未注册手机号验证成功后将自动注册
				</view>
				<view class="action">
					<view class="btn" @click="cancelLogin">再想想</view>
					<view class="split"></view>
					<view v-if="type===0" class="btn sure" @click="handleLogin">同意并登录</view>
					<button v-else class="btn sure" open-type="getPhoneNumber"
						@getphonenumber="onGetPhoneNumber">同意并登录</button>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		login
	} from '@/common/util.js';
	import md5Libs from "uview-ui/libs/function/md5";

	export default {
		created() {
			if (this.vuex_avatar !== '' && this.vuex_nickname !== '') {
				this.userInfo = false;
			} else {
				this.userInfo = true;
			}
		},
		data() {
			return {
				userInfo: true,
				code: '',
				ifAgreement: false,
				err: false,
				isSend: false,
				seconds: 60,
				tips: '',
				phone: '',
				checked: false,
				type: 1,
				form: {
					tel: '',
					password: '',
					telCaptcha: '',
				},
				isPwdLogin: false,
				codeTip: '',
				showCheckLogin: false
			}
		},
		computed: {
			canSubmit() {
				if (!this.form.tel) return false;
				if (this.isPwdLogin && !this.form.password) return false;
				if (!this.isPwdLogin && !this.form.telCaptcha) return false;
				// if (!this.checked) return false;
				return true;
			}
		},
		methods: {
			goback() {
				uni.$emit('UNLOGIN');
				uni.navigateBack({
					delta: 1
				})
			},
			toAgreement() {
				uni.navigateTo({
					url: `../richText/common?api=getContract&params=${JSON.stringify({contractName: "USER_PROTOCOL"})}&title=contactName&html=context`
				})
			},
			toPrivacy() {
				uni.navigateTo({
					url: `../richText/common?api=getContract&params=${JSON.stringify({contractName: "PRIVACY_POLICY"})}&title=contactName&html=context`
				})
			},

			handlerVerify(e) {
				const [_, data] = e.detail;
				if (data) {
					this.getCode(data);
				}
			},
			async getCode() {
				let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
				if (!myreg.test(this.form.tel)) return this.$u.toast('请输入正确的手机号');

				if (this.$refs.uCode.canGetCode) {
					this.selectComponent('#captcha').reset();
					this.selectComponent('#captcha').popup();
				}
			},
			codeChange(text) {
				this.codeTip = text;
			},

			async sendCode(e) {
				const [_, validate] = e.detail;

				const res = await this.$u.api.captchaVerify({
					validate,
					smsPhoneNumber: this.form.tel,
					captchaType: 'LOGIN' //LOGIN:注册
				});
				if (res.result == 1) {
					this.$refs.uCode.start();
				}
			},

			auth() {
				if (!this.checked) {
					this.ifAgreement = true;
				}
			},
			/**
			 * 获取用户手机号
			 * 
			 * */
			async onGetPhoneNumber(e) {
				if (e.detail.errMsg != "getPhoneNumber:ok") return; //如果用户拒绝授权则阻断
				this.showCheckLogin = false;
				

				let checkSession = await this.$uni.checkSession();
				if (checkSession.errMsg == "checkSession:ok") {
					let res = await this.$u.api.userLogin({
						sideType: this.vuex_sideType,
						password: md5Libs.md5(this.form.password),
						loginType: 'APPLETS_AUTO_LOGIN',
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv,
						sessionKey: this.vuex_sessionKey,
						openid: this.vuex_openid,
						unionId: this.vuex_unionId,
						isAutoRegister: 0,
						shareId: this.vuex_shareId ? this.vuex_shareId : '',
						serviceId: this.vuex_shareShopId ? this.vuex_shareShopId : '',
						shareUnionId: this.vuex_shareUnionId ? this.vuex_shareUnionId : '',
						
					})
					if (res) {
						this.$u.vuex('vuex_token', res.token);
						this.$u.vuex('vuex_userId', res.id);
						this.$u.vuex('vuex_accountId', res.id);
						this.$u.vuex('vuex_tel', res.tel);
						this.$u.vuex('vuex_nickname', res.nickname);
						this.$u.vuex('vuex_accountType', res.accountType);
						uni.$emit('LOGIN');
						this.loginBack();
						uni.navigateBack();
					}
				} else {
					this.$u.toast('登录已失效，请重新授权');
					login(); //重新登录
				}
			},
			/**
			 * 获取用户基本信息方法
			 * 
			 * */
			async onGetUserProfile(e) {
				uni.getUserProfile({
					desc: '更新用户默认信息',
					success: (res) => {
						this.userInfo = false;
						this.$u.vuex('vuex_avatar', res.userInfo.avatarUrl)
						this.$u.vuex('vuex_nickname', res.userInfo.nickName)
					},
					fail: (e) => {
						this.$u.toast('获取用户头像失败');
					}
				})
			},
			toForget() {
				uni.navigateTo({
					url: '/pages/main/base/login/forget'
				})
			},
			showLogin() {
				this.checked = true;
				this.showCheckLogin = true;
			},
			cancelLogin() {
				this.checked = false;
				this.showCheckLogin = false;
			},
			async handleLogin() {
				if (this.showCheckLogin) this.showCheckLogin = false;
				if (!this.checked) return this.showLogin();

				let myreg = /^[1][3,4,5,7,8,9,6][0-9]{9}$/;
				if (!myreg.test(this.form.tel)) {
					return this.$u.toast('请输入正确的手机号');
				}
				let res = await this.$u.api.userLogin({
					...this.form,
					sideType: 'MARKET_APPLETS',
					password: md5Libs.md5(this.form.password),
					loginType: this.isPwdLogin ? 'PASSWORD' : 'CAPTCHA',
					openid: this.vuex_openid,
					unionId: this.vuex_unionId,
					isAutoRegister: 0,
					shareId: this.vuex_shareId ? this.vuex_shareId : '',
					serviceId: this.vuex_shareShopId ? this.vuex_shareShopId : '',
					shareUnionId: this.vuex_shareUnionId ? this.vuex_shareUnionId : ''
				})
				if (res) {
					this.$u.vuex('vuex_token', res.token);
					this.$u.vuex('vuex_userId', res.id);
					this.$u.vuex('vuex_accountId', res.id);
					this.$u.vuex('vuex_tel', res.tel);
					this.$u.vuex('vuex_nickname', res.nickname);
					this.$u.vuex('vuex_accountType', res.accountType);
					uni.$emit('LOGIN');
					this.loginBack();
					uni.navigateBack();
				}
			},
			loginBack() {
				const pages = getCurrentPages();
				pages[pages.length - 2]?.$vm.$emit('onLoginBack');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {

		padding: 0 30rpx;
	}

	.tab-box {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;

		.tab {
			font-size: 32rpx;
			font-weight: bold;
			line-height: 45rpx;
			color: #999;
			margin: 0 40rpx;

			&.active {
				color: #333;
			}
		}

		.fg {
			width: 3rpx;
			height: 30rpx;
			background: #d8d8d8;
			border-radius: 2rpx;
		}
	}

	.phone-box {
		margin-top: 30rpx;

		.form-item {
			display: flex;
			margin-top: 70rpx;

			.icon {
				width: 38rpx;
				height: 38rpx;
				margin: 5rpx 30rpx 0 30rpx;
			}

			.input {
				flex: 1;
				font-size: 32rpx;
				line-height: 45rpx;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #ededed;
			}
		}

		.action {
			height: 80rpx;
			padding-left: 98rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.login-type {
			font-size: 28rpx;
			color: #006EF1;
		}

		.forget {
			font-size: 24rpx;
			color: #666666;
			text-align: right;
		}

		.btn-box {
			margin-top: 47rpx;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 90rpx;
				font-size: 30rpx;
				color: #fff;
				background: linear-gradient(136deg, #f30500 0%, #fe4915 100%);
				border-radius: 45rpx;

				&[disabled] {
					opacity: .5;
				}
			}
		}

		.reg {
			margin-top: 40rpx;
			font-size: 28rpx;
			color: #FF3B30;
			text-align: center;
		}
	}

	.goback {
		color: #8F8F94;
		text-align: center;
		margin-top: 30rpx;
	}

	.logo {
		margin-top: 44rpx;
		text-align: center;

		image {
			width: 150rpx;
			height: 150rpx;
		}

		.app_name {
			width: 100%;

			opacity: 1;
			font-size: 40rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			color: #333333;
			letter-spacing: 0px;
			margin-top: 32rpx;
		}

		&.active {
			margin-top: 44rpx;
		}

	}

	.phone_logo {
		padding: 0 45rpx;
		margin-top: 128rpx;
		display: flex;
		align-items: center;
		font-size: 40rpx;
		font-weight: 600;
		color: #333333;

		image {
			width: 70rpx;
			height: 70rpx;
			border-radius: 16rpx;
			margin-right: 30rpx;
		}

	}

	.login_btn {
		margin-top: 220rpx;
	}

	.yunxu {
		background: linear-gradient(136deg, #f30500 0%, #fe4915 100%) !important;
	}

	.jujue {
		background: #FFFFFF;
	}

	.phone_login {
		margin-top: 30rpx;
		color: $u-mian-text;
		border-radius: 50rpx;
	}

	.phone {
		margin-top: 115rpx;
		background: #f7f7f7;
		padding: 0 40rpx;
		border-radius: 40rpx;
	}

	.code {
		margin-top: 40rpx;
		background: #f7f7f7;
		padding: 0 40rpx;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		text {
			color: #F30500;
		}

		.code_dis {
			opacity: 0.3;
		}
	}

	.mes_text {
		margin: 0 auto;
		margin-top: 60rpx;
		width: 432rpx;
		height: 68rpx;
		opacity: 1;
		font-size: 26rpx;
		font-weight: 400;
		text-align: center;
		color: #666666;
	}

	.err_tps {
		padding: 10rpx 0 0 16rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #ff3b30;
	}

	.auth_login {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90rpx;
		margin-top: 220rpx;
		background: #01AE19;
		font-size: 30rpx;
		color: #FFFFFF;
		border-radius: 45rpx;

		&::after {
			border: none !important;
		}
	}

	.phone_login_box {
		margin-top: 120rpx;

		button {
			color: #FFFFFF;
			background: linear-gradient(136deg, #f30500 0%, #fe4915 100%);
		}
	}

	.agreement {
		width: 100%;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		bottom: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333333;
		font-size: 22rpx;

		u-checkbox-group {
			display: flex;
			align-items: center;
		}

		.link {
			color: #F11B19;
		}

	}

	.loginTypeChange {
		margin-top: 54rpx;
		color: #006EF1;
		font-size: 30rpx;
		font-weight: 600;
		text-decoration: underline;
		text-align: center;
	}

	.changeEv_box {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.check-login {
		.content {
			padding: 40rpx;
			font-size: 28rpx;
		}

		.action {
			position: relative;
			display: flex;
			border-top: 1rpx solid rgb(214, 215, 217);
			height: 96rpx;

			.split {
				width: 1rpx;
				height: 100%;
				background-color: rgb(214, 215, 217);
			}

			.btn {
				width: 50%;
				height: 96rpx;
				line-height: 90rpx;
				text-align: center;
				flex: 1;
				font-size: 32rpx;
				color: #606266;
				border-radius: 0;
				background-color: #fff;

				&::after {
					display: none;
				}

				&:active {
					background-color: #f3f4f6;
				}

				&.sure {
					color: rgb(41, 121, 255);
				}
			}
		}

		text {
			color: red;
		}
	}
</style>