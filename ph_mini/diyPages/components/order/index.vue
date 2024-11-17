<template>
  <div class="edit-module-order" :style="[styleObj]">
    <div class="edit-module-order_item" v-for="(item, index) in config.datas" :key="index">
      <span class="iconfont" :class="item.icon" :style="{color: config.style.iconColor, fontSize: config.style.iconSize * 2 + 'rpx' }"></span>
      <p class="txt" :style="{ fontSize: config.style.txtSize * 2 + 'rpx' }">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		config: Object
	},
	computed: {
		styleObj() {
			let { bgStyle, style } = this.config
			bgStyle.background = `${bgStyle.bgColor} url(${bgStyle.bgImageUrl}) center / 100% 100% repeat`
			bgStyle.backgroundSize = '100% 100%'
			return {
				...bgStyle,
				...style,
				color: style.txtColor	
			}
		}
	}
}

</script>

<style lang="scss" scoped>
.edit-module-order {
  display: flex;
  // height: 132rpx;
  &_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .iconfont {
      font-size: 40rpx;
      margin-bottom: 20rpx;
    }
    .txt {
      font-size: 26rpx;
    }
  }
  // word-break: break-all;
}
</style>
