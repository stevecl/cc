<template>
  <div class="star" :style="{fontSize: starSet.fontSize * 2 + 'rpx'}">5星</div>
</template>

<script>
	export default {
		props: {
			starSet: Object
		}
	}
</script>

<style lang="scss" scoped>
.star {
  display: inline;
  color: #FC6635;
}
</style>