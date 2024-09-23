<template>
  <scroll-view class="wrap" scroll-y="true" :style="[pageStyle]" :class="{'has-tabbar': true}">
    <uni-diy-preview :config="pageConfig.datas"></uni-diy-preview>
    <diy-tabbar :menuConfig="tabbarConfig"></diy-tabbar>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				pageConfig: {
          backgroundColor: '#fff',
          templateTitle: '',
          datas: []
        },
        tabbarConfig: {}
			}
		},
    computed: {
      pageStyle() {
        return {
          background: this.pageConfig.backgroundColor
        }
      }
    },
		methods: {
			async init() {
        let res = await this.$u.api.getDiy({ category: 'HOME' })
        if (res) {
          let { backgroundColor, templateConfigParams, templateTitle } = res
          this.pageConfig.backgroundColor = backgroundColor
          this.pageConfig.pageTitle = templateTitle
          this.pageConfig.datas = JSON.parse(templateConfigParams)
          uni.setNavigationBarTitle({ title: templateTitle })
          console.log('this.pageConfig', this.pageConfig.datas)
        }
        let res1 = await this.$u.api.getDiy({ category: 'BOTTOM_MENU' })
        this.tabbarConfig = JSON.parse(res1.templateConfigParams)[0].config
        console.log('this.tabbarConfig', this.tabbarConfig)
      }
		},
		mounted() {
      this.$on('onLoginBack', this.init)
      this.init()
		},
	}
</script>

<style lang="scss" >
page {
  height: 100%;
}
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #F6F6F6;
  &.has-tabbar {
    height: calc(100% - 160rpx);
  }
}
</style>
