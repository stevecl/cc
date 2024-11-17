<template>
	<view class="wrap">
		<textarea v-model="token" class="ele" name="" id="" cols="10" rows="10" placeholder="token" maxlength="-1"></textarea>
		<view class="btn" @click="handleUpdate">更新TOKEN</view>
		<view class="btn" @click="handleClick">跳转</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				token: ''
			}
		},
		mounted() {
			this.token = uni.getStorageSync('TESTTOKEN')
		},
		methods: {
			handleUpdate() {
				uni.setStorageSync('TESTTOKEN', this.token)
			},
			handleClick() {
				uni.navigateTo({
					url: '/diyPages/main/index/index'
				})
				console.log('click', this.token)
			}
		}
	}
</script>

<style lang="scss">
	.wrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 100rpx;
		.ele {
			width: 100%;
			border: 1px solid red;
			box-sizing: border-box;
			padding: 20rpx;
		}
		.btn {
			width: 100px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border: 1px solid #eee;
			border-radius: 4px;
			margin-top: 50rpx;
		}
	}
</style>