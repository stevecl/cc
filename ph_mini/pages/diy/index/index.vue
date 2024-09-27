<template>
  <scroll-view
    class="wrap"
    :style="[pageStyle]"
    :class="{'has-tabbar': hasTabbar}"
    scroll-y="true"
    :scroll-top="scrollTop"
    @scroll="scroll"
    >
    <uni-diy-preview :config="pageConfig.datas" :hasTabbar="hasTabbar"></uni-diy-preview>
    <diy-tabbar :menuConfig="tabbarConfig" v-if="hasTabbar"></diy-tabbar>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
        scrollTop: 0,
				pageConfig: {
          backgroundColor: '#fff',
          templateTitle: '',
          datas: []
        },
        hasTabbar: false,
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
        }
        let res1 = await this.$u.api.getDiy({ category: 'BOTTOM_MENU' })
        this.tabbarConfig = JSON.parse(res1.templateConfigParams)[0].config
        let pages = getCurrentPages();
        let currentPage = pages[pages.length - 1];
        this.hasTabbar = this.tabbarConfig.datas.some(obj => obj.link === `/${currentPage.route}`)
      },
      scroll: function(e) {
        this.scrollTop = e.detail.scrollTop
      },
		},
		mounted() {
      this.$on('onLoginBack', this.init)
      uni.$on('toTop', () => {
        this.scrollTop = 0
      })
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
