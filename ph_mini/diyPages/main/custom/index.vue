<template>
  <view class="wrap">
		<scroll-view
		  class="wrap_content"
		  :style="[pageStyle]"
		  scroll-y="true"
		  :scroll-top="scrollTop"
		  @scroll="scroll"
		  >
		  <showPreivew :config="pageConfig.datas" :hasTabbar="hasTabbar"></showPreivew>
		</scroll-view>
		<diy-tabbar :menuConfig="tabbarConfig" v-if="hasTabbar"></diy-tabbar>
	</view>
</template>

<script>
	import preivew from '@/diyPages/preview.vue'
	import { getLinkByCode } from '../../utils/linkCode'

	export default {
		data() {
			return {
				oldScrollTop: 0,
        scrollTop: 0,
				pageConfig: {
          backgroundColor: '#fff',
          templateTitle: '',
          datas: []
        },
        hasTabbar: true,
        tabbarConfig: {}
			}
		},
		components: {
			showPreivew: preivew
		},
    computed: {
      pageStyle() {
        return {
          background: this.pageConfig.backgroundColor
        }
      }
    },
		methods: {
			async init(id) {
        let res = await this.$u.api.getCustomTemplatePage({ id })
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
				let currentRoute = currentPage.route
				if (['diyPages/main/custom/index'].includes(currentRoute)) {
					currentRoute = currentRoute + '?id=' + currentPage.options.id
				}
				console.log('currentRoute', currentRoute, this.tabbarConfig.datas.map(obj => getLinkByCode(obj.link)))
        this.hasTabbar = this.tabbarConfig.datas.some(obj => getLinkByCode(obj.link) === `${currentRoute}`)
    // isTabPage.value = (menuConfig.value?.datas || []).some(obj => obj.link === `/${currentRoute}`)
				// console.log('this.tabbarConfig.datas', currentPage.route, this.hasTabbar)
      },
      scroll: function(e) {
        this.oldScrollTop = e.detail.scrollTop
      },
		},
		mounted() {
      
		},
		onLoad(params) {
			if (params.token) uni.setStorageSync('TESTTOKEN', params.token)
			this.$on('onLoginBack', () => {
				setTimeout(() => {
					this.init(params.id)
				}, 500)
			})
			uni.$on('toTop', () => {
				this.scrollTop = this.oldScrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			})
			this.init(params.id)
		}
	}
</script>

<style lang="scss" >
@import url('@/diyPages/static/style/base.scss');

.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #F6F6F6;
	display: flex;
	flex-direction: column;
	&_content {
		flex: 1;
		overflow: hidden;
	}
}
</style>
