<template>
  <div class="edit-module-button" :style="[styleObj]">
    <div 
      :style="{'width': 100 / config.lineNum + '%'}"
      v-for="(item, index) in config.datas"
      :key="index"
      @click="handleClick(item.link)"
      >
      <image class="img" :src="errImgs[index] || item.icon || 'error'" @error="dealErrorImg(index, item.defaultIcon)" :style="{width: config.style.iconSize * 2 + 'rpx', height: config.style.iconSize * 2 + 'rpx', borderRadius: config.imgBorderRadius + 'px'}"></image>
      <p class="text-overflow" :style="{'color': item.color }">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
  import { mixins } from '@/diyPages/utils/diyMixins.js'
	export default {
    mixins: [ mixins ],
		props: {
			config: Object
		},
		data() {
			return {}
		},
		computed: {
			styleObj() {
			  let { style = {}, borderRadius } = this.config
			  style.background = `${style.bgColor} url(${style.bgImageUrl}) center / 100% 100% repeat`
			  style.borderRadius = borderRadius + 'px'
			  return {
					...style,
					fontSize: parseInt(style.fontSize) * 2 + 'rpx'
				}
			},
		},
		methods: {
			dealErrorImg(index, file) {
				this.$set(this.errImgs, index, `${this.defDir}${file}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
.edit-module-button {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img {
      width: 80rpx;
      height: 80rpx;
    }
    p {
      width: 100%;
      text-align: center;
      margin-top: 16rpx;
      padding: 0 10rpx;
    }
  }
}

</style>