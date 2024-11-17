<template>
  <view class="edit-module-menu" :style="[menuStyle]">
    <view
      class="menu-item"
      v-for="(item, index) in menuConfig.datas"
      :key="index"
      @click="linkHandle(item)"
      style="">
      <view class="icon" :style="[getIconColor(item)]">
        <text v-if="menuConfig.showType === 1" :class="['iconfont', item.icon]"></text>
        <image class="image" v-if="menuConfig.showType === 2 && !isActivePath(item.link)" :src="item.img" alt=""></image>
        <image class="image" v-if="menuConfig.showType === 2 && isActivePath(item.link)" :src="item.activeImg" alt=""></image>
      </view>
      <view class="text text-overflow" :style="[getTextColor(item)]">
        <text>{{item.text}}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { getLinkByCode } from '../../utils/linkCode'
import { mixins } from '@/diyPages/utils/diyMixins.js'

export default {
	mixins: [mixins],
  props: {
    menuConfig: Object
  },
  data() {
    return { }
  },
  computed: {
    menuStyle() {
      return {
        backgroundColor: this.menuConfig.bgColor
      }
    }
  },
  methods: {
    getIconColor(item) {
      return {
        color: this.isActivePath(item.link) ? this.menuConfig.iconActiveColor : this.menuConfig.iconColor
      }
    },
    getTextColor(item) {
      return {
        color: this.isActivePath(item.link) ? this.menuConfig.textActiveColor : this.menuConfig.textColor
      }
    },
    isActivePath(linkObj) {
      let pages = getCurrentPages();
      let currentPage = pages[pages.length - 1];
      let currentRoute = currentPage.route
      if (['diyPages/main/custom/index'].includes(currentRoute)) {
        currentRoute = currentRoute + '?id=' + currentPage.options.id
      }
      return getLinkByCode(linkObj) === currentRoute
    },
    async linkHandle(item) {
      if (!item.link) return
			console.log('getLinkByCode(item.link)', getLinkByCode(item.link))
			await this.verfiyPage()
      uni.redirectTo({
        url: '/' + getLinkByCode(item.link)
      })
    }
  },
  mounted() {
    // menuConfig.value = app.globalData.diyConfig.menu.content[0].config
  }
}

</script>

<style lang="scss" scoped>
.edit-module-menu {
  width: 100%;
  height: 160rpx;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  padding-top: 20rpx;
  box-sizing: border-box;
  box-shadow: 0rpx 6rpx 30rpx 0rpx rgba(135, 102, 220, .2);
  .menu-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24rpx;
    text-align: center;
    overflow: hidden;
    .icon {
      width: 50rpx;
      height: 50rpx;
      margin-bottom: 2rpx;
      .iconfont {
        font-size: 40rpx
      }
      .image {
        width: 50rpx;
        height: 50rpx;
        max-width: 100%;
      }
    }
    .text {
      flex: 1;
    }
  }
}
</style>
