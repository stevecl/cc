<template>
  <div class="edit-module-goodsScore" :style="[config.style]">
    <list2 :config="config" saleType="score" v-if="config.productConfig.showType === 2"></list2>
    <list3 :config="config" saleType="score" v-if="config.productConfig.showType === 3"></list3>
  </div>
</template>

<script>
import list2 from '../goods/list2.vue';
import list3 from '../goods/list3.vue';

export default {
	props: {
		config: Object
	},
	components: {
		list2,
		list3
	}
}

</script>

<style lang="scss" scoped>
.edit-module-goodsScore {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64rpx;
    font-size: 40rpx;
    margin-bottom: 20rpx;
    .line {
      width: 60rpx;
      height: 2rpx;
      &:is(.line_left) {
        margin-right: 20rpx;
        
      }
      &:is(.line_right) {
        margin-left: 20rpx;
      }
    }
    img {
      width: 32rpx;
      height: 32rpx;
      margin-right: 12rpx;
      margin-top: -2rpx;
    }
  }
}
</style>
