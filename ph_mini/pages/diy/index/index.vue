<template>
	<view>
    <uni-diy-preview :config="pageConfig"></uni-diy-preview>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageConfig: [],
			}
		},
		methods: {
			async init() {
        let res = await this.$u.api.getHome({ category: 'HOME' })
        if (res) {
          let pageTitle = res.templateTitle
          this.pageConfig = JSON.parse(res.templateConfigParams)
          uni.setNavigationBarTitle({
            title: res.templateTitle
          })
          console.log('this.pageConfig', this.pageConfig)
        }
      }
		},
		mounted() {
      this.$on('onLoginBack', this.init)
      this.init()
		},
	}
</script>

<style>

</style>
