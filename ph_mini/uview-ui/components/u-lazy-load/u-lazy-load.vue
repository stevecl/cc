<template>
	<view class="u-wrap" :style="{
			  opacity: Number(opacity),
			  borderRadius: borderRadius + 'rpx',
			  // 因为time值需要改变,所以不直接用duration值(不能改变父组件prop传过来的值)
			  transition: `opacity ${time / 1000}s ease-in-out`
		   }"
	 :class="'u-lazy-item-' + elIndex">
		<view :class="'u-lazy-item-' + elIndex">
			<image :style="{borderRadius: borderRadius + 'rpx', height: imgHeight}" v-if="!isError" class="u-lazy-item"
			 :src="isShow ? image : loadingImg" :mode="imgMode" @load="imgLoaded" @error="loadError" @tap="clickImg"></image>
			<image :style="{borderRadius: borderRadius + 'rpx', height: imgHeight}" class="u-lazy-item error" v-else :src="errorImg"
			 :mode="imgMode" @load="errorImgLoaded" @tap="clickImg"></image>
		</view>
	</view>
</template>

<script>
	/**
	 * lazyLoad 懒加载
	 * @description 懒加载使用的场景为：页面有很多图片时，APP会同时加载所有的图片，导致页面卡顿，各个位置的图片出现前后不一致等.
	 * @tutorial https://www.uviewui.com/components/lazyLoad.html
	 * @property {String Number} index 用户自定义值，在事件触发时回调，用以区分是哪个图片
	 * @property {String} image 图片路径
	 * @property {String} loading-img 预加载时的占位图
	 * @property {String} error-img 图片加载出错时的占位图
	 * @property {String} threshold 触发加载时的位置，见上方说明，单位 rpx（默认300）
	 * @property {String Number} duration 图片加载成功时，淡入淡出时间，单位ms（默认）
	 * @property {String} effect 图片加载成功时，淡入淡出的css动画效果（默认ease-in-out）
	 * @property {Boolean} is-effect 图片加载成功时，是否启用淡入淡出效果（默认true）
	 * @property {String Number} border-radius 图片圆角值，单位rpx（默认0）
	 * @property {String Number} height 图片高度，注意：实际高度可能受img-mode参数影响（默认450）
	 * @property {String Number} mg-mode 图片的裁剪模式，详见image组件裁剪模式（默认widthFix）
	 * @event {Function} click 点击图片时触发
	 * @event {Function} load 图片加载成功时触发
	 * @event {Function} error 图片加载失败时触发
	 * @example <u-lazy-load :image="image" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load>
	 */
	export default {
		name: 'u-lazy-load',
		props: {
			index: {
				type: [Number, String]
			},
			// 要显示的图片
			image: {
				type: String,
				default: ''
			},
			// 图片裁剪模式
			imgMode: {
				type: String,
				default: 'widthFix'
			},
			// 占位图片路径
			loadingImg: {
				type: String,
				default:'https://onlineavatar.xingqiuxiuchang.com/err-img-bxj.png'
			},
			// 加载失败的错误占位图
			errorImg: {
				type: String,
				default:'https://onlineavatar.xingqiuxiuchang.com/err-img-bxj.png'
			},
			// 图片进入可见区域前多少像素时，单位rpx，开始加载图片
			// 负数为图片超出屏幕底部多少距离后触发懒加载，正数为图片顶部距离屏幕底部多少距离时触发(图片还没出现在屏幕上)
			threshold: {
				type: [Number, String],
				default: 100
			},
			// 淡入淡出动画的过渡时间
			duration: {
				type: [Number, String],
				default: 500
			},
			// 渡效果的速度曲线，各个之间差别不大，因为这是淡入淡出，且时间很短，不是那些变形或者移动的情况，会明显
			// linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
			effect: {
				type: String,
				default: 'ease-in-out'
			},
			// 是否使用过渡效果
			isEffect: {
				type: Boolean,
				default: true
			},
			// 圆角值
			borderRadius: {
				type: [Number, String],
				default: 0
			},
			// 图片高度，单位rpx
			height: {
				type: [Number, String],
				default: '450'
			}
		},
		data() {
			return {
				isShow: false,
				opacity: 1,
				time: this.duration,
				loadStatus: '', // 默认是懒加载中的状态
				isError: false, // 图片加载失败
				elIndex: this.$u.guid()
			}
		},
		computed: {
			// 将threshold从rpx转为px
			getThreshold() {
				// 先取绝对值，因为threshold可能是负数，最后根据this.threshold是正数或者负数，重新还原
				let thresholdPx = uni.upx2px(Math.abs(this.threshold));
				return this.threshold < 0 ? -thresholdPx : thresholdPx;
			},
			// 计算图片的高度，可能为auto，带%，或者直接数值
			imgHeight() {
				return this.$u.addUnit(this.height);
			}
		},
		created() {
			// 由于一些特殊原因，不能将此变量放到data中定义
			this.observer = {};
		},
		watch: {
			isShow(nVal) {
				// 如果是不开启过渡效果，直接返回
				if (!this.isEffect) return;
				this.time = 0;
				// 原来opacity为1(不透明，是为了显示占位图)，改成0(透明，意味着该元素显示的是背景颜色，默认的白色)，再改成1，是为了获得过渡效果
				this.opacity = 0;
				// 延时30ms，否则在浏览器H5，过渡效果无效
				setTimeout(() => {
					this.time = this.duration;
					this.opacity = 1;
				}, 30)
			},
			// 图片路径发生变化时，需要重新标记一些变量，否则会一直卡在某一个状态，比如isError
			image(n) {
				if(!n) {
					// 如果传入null或者''，或者undefined，标记为错误状态
					this.isError = true;
				} else {
					this.init();
					this.isError = false;
				}
			}
		},
		methods: {
			// 用于重新初始化
			init() {
				this.isError = false;
				this.loadStatus = '';
			},
			// 点击图片触发的事件,loadlazy-还是懒加载中状态，loading-图片正在加载，loaded-图片加加载完成
			clickImg() {
				let whichImg = '';
				// 如果isShow为false，意味着图片还没开始加载，点击的只能是最开始的占位图
				if (this.isShow == false) whichImg = 'lazyImg';
				// 如果isError为true，意味着图片加载失败，这是只剩下错误的占位图，所以点击的只能是错误占位图
				// 当然，也可以给错误的占位图元素绑定点击事件，看你喜欢~
				else if (this.isError == true) whichImg = 'errorImg';
				// 总共三张图片，除了两个占位图，剩下的只能是正常的那张图片了
				else whichImg = 'realImg';
				// 只通知当前图片的index
				this.$emit('click', this.index);
			},
			// 图片加载完成事件，可能是加载占位图时触发，也可能是加载真正的图片完成时触发，通过isShow区分
			imgLoaded() {
				// 占位图加载完成
				if (this.loadStatus == '') {
					this.loadStatus = 'lazyed';
				}
				// 真正的图片加载完成 
				else if (this.loadStatus == 'lazyed') {
					this.loadStatus = 'loaded';
					this.$emit('load', this.index);
				}
			},
			// 错误的图片加载完成
			errorImgLoaded() {
				this.$emit('error', this.index);
			},
			// 图片加载失败
			loadError() {
				this.isError = true;
			},
			disconnectObserver(observerName) {
				const observer = this[observerName];
				observer && observer.disconnect();
			},
		},
		beforeDestroy() {
			// 销毁页面时，可能还没触发某张很底部的懒加载图片，所以把这个事件给去掉
			//observer.disconnect();
		},
		mounted() {
			// 此uOnReachBottom事件由mixin.js发出，目的是让页面到底时，保证所有图片都进行加载，做到绝对稳定且可靠
			this.$nextTick(() => {
				uni.$once('uOnReachBottom', () => {
					if (!this.isShow) this.isShow = true;
				});
			})
			// mounted的时候，不一定挂载了这个元素，延时30ms，否则会报错或者不报错，但是也没有效果
			setTimeout(() => {
				// 这里是组件内获取布局状态，不能用uni.createIntersectionObserver，而必须用this.createIntersectionObserver
				this.disconnectObserver('contentObserver');
				const contentObserver = uni.createIntersectionObserver(this);
				// 要理解这里怎么计算的，请看这个：
				// https://blog.csdn.net/qq_25324335/article/details/83687695
				contentObserver.relativeToViewport({
					bottom: this.getThreshold,
				}).observe('.u-lazy-item-' + this.elIndex, (res) => {
					if (res.intersectionRatio > 0) {
						// 懒加载状态改变
						this.isShow = true;
						// 如果图片已经加载，去掉监听，减少性能的消耗
						this.disconnectObserver('contentObserver');
					}
				})
				this.contentObserver = contentObserver;
			}, 30)
		}
	}
</script>

<style scoped lang="scss">
	@import "../../libs/css/style.components.scss";
	
	.u-wrap {
		background-color: #eee;
		overflow: hidden;
	}

	.u-lazy-item {
		width: 100%;
		// 骗系统开启硬件加速
		transform: transition3d(0, 0, 0);
		// 防止图片加载“闪一下”
		will-change: transform;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>
