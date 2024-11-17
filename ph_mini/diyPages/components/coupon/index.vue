<template>
  <div class="edit-module-coupon" :class="[`type${config.type}`]" :style="[styleObj]" @click="$emit('click', $event)">
    <template v-if="config.type === 1">
      <couponType1 v-for="(item, index) in config.datas" :style="[getColor(item, config.type)]" :key="index"></couponType1>
    </template>
    <template v-if="config.type === 2">
      <couponType2 v-for="(item, index) in config.datas" :style="[getColor(item, config.type)]" :key="index"></couponType2>
    </template>
  </div>
</template>

<script>
import couponType1 from './couponType1.vue'
import couponType2 from './couponType2.vue'

export default {
	props: {
		config: Object
	},
	components: {
		couponType1,
		couponType2
	},
	computed: {
		styleObj() {
			let res = this.config?.style || {}
			res.background = `${res.bgColor} url(${res.bgImageUrl}) center / 100% 100% repeat`
			return {
			  ...res,
			  '--itemspace': res.itemSpace + 'px',
			}
		}
	},
	methods: {
		getColor({ color, bgColor }, type) {
		  return {
				width: type === 2 ? 'calc(50% - var(--itemspace) / 2)' : '',
				'--couponbgcolor': this.config?.style?.bgColor,
		    '--color': color,
		    '--bgcolor': bgColor
		  }
		}
	}
}

</script>

<style lang="scss" scoped>
.edit-module-coupon {
  overflow: hidden;
  border-radius: 10rpx;
  &.type1 {
		display: flex;
		flex-direction: column;
		gap: var(--itemspace);
  }
  &.type2 {
    display: flex;
    flex-wrap: wrap;
    gap: var(--itemspace);
  }
}
</style>
