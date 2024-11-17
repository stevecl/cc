<template>
  <div class="edit-module-goodsLikes" :style="[config.style]">
    <div class="title" v-if="config.titleConfig.show">
      <div class="line line_left" :style="[leftLineStyle]"></div>
      <div class="txt">
        <image class="img" :src="config.titleConfig.icon || getImgByName('title3.png')" alt=""></image>
        <span :style="{color: config.titleConfig.color}">{{ config.titleConfig.text }}</span>
      </div>
      <div class="line line_right" :style="[rightLineStyle]"></div>
    </div>
    <list3 :config="config" v-if="config.productConfig.showType === 3"></list3>
    <list4 :config="config" v-if="config.productConfig.showType === 4"></list4>
    <list6 :config="config" v-if="config.productConfig.showType === 6"></list6>
  </div>
</template>

<script>
import { mixins } from '@/diyPages/utils/diyMixins.js'
import list3 from '../goods/list3.vue';
import list4 from '../goods/list4.vue';
import list6 from '../goods/list6.vue';

export default {
	mixins: [mixins],
	props: {
		config: Object
	},
	computed: {
		leftLineStyle() {
			return { background: `linear-gradient(to left, ${this.config.titleConfig.lineColor}, transparent)` }
		},
		rightLineStyle() {
			return { background: `linear-gradient(to right, ${this.config.titleConfig.lineColor}, transparent)` }
		}
	},
	components: {
		list3,
		list4,
		list6
	},
}

</script>

<style lang="scss" scoped>
.edit-module-goodsLikes {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64rpx;
    font-size: 40rpx;
    margin-bottom: 20rpx;
    .line {
      width: 60rpx;
      height: 1px;
      &:is(.line_left) {
        margin-right: 20rpx;
        
      }
      &:is(.line_right) {
        margin-left: 20rpx;
      }
    }
    .img {
      width: 32rpx;
      height: 32rpx;
      margin-right: 12rpx;
      margin-top: -2rpx;
    }
  }
}
</style>
