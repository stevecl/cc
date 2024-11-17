<template>
  <div class="edit-module-shop" :style="[styleObj]">
    <div class="sort">
      <div class="sort_item active">综合排序</div>
      <div class="sort_item">销量</div>
      <div class="sort_item">距离</div>
    </div>
    <template v-if="config.type === 1">
      <shopType1 :contentSet="config.contentSet" :imgRadiusSet="config.imgRadiusSet" v-for="item in 4"></shopType1>
    </template>
    <template v-if="config.type === 2">
      <shopType2 :contentSet="config.contentSet" :imgRadiusSet="config.imgRadiusSet" v-for="item in 4"></shopType2>
    </template>
  </div>
</template>

<script>
import shopType1 from './shopType1.vue';
import shopType2 from './shopType2.vue';

export default {
	props: {
		config: Object
	},
	components: {
		shopType1,
		shopType2
	},
	computed: {
		styleObj() {
			let { style = {}, contentSet = {} } = this.config
			return {
			  ...style,
				background: contentSet.bg.bgColor
			}
		}
	}
}

</script>

<style lang="scss" scoped>
.edit-module-shop {
  // height: 500px;
  .sort {
    display: flex;
    align-items: center;
    height: 80rpx;
    font-size: 24rpx;
    background-color: #F5F5F5;
    padding-left: 20rpx;
    &_item {
      margin-right: 40rpx;
      &.active {
        color: red;
      }
    }
  }
}
</style>
