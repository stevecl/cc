<template>
  <div class="edit-module-member-center" :style="[config.style]">
		<image class="bg" src="@/diyPages/static/images/bg_mine.png" mode="widthFix"></image>
    <div class="member-info" :style="[infoStyle]">
      <div class="avatar" :style="{borderRadius: config.base.avatar === 'circle' ? '50%' : '8px' }">
        <image class="img" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt=""></image>
      </div>
      <div class="name">
        <span class="txt" :style="[getStyle(config.detail.memberName)]">昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称</span>
        <span class="iconfont icon-setting" :class="[config.clickItem.signin.icon]" :style="{ color: config.clickItem.signin.iconColor }" v-if="config.clickItem.signin.show"></span>
        <span class="iconfont icon-setting" :class="[config.clickItem.setting.icon]" :style="{ color: config.clickItem.setting.iconColor }" v-if="config.clickItem.setting.show"></span>
      </div>
      <div class="level" v-if="config.detail.memberLevel.show" :style="[getStyle(config.detail.memberLevel)]">普通会员</div>
      <div class="progress" v-if="config.detail.grow.show" :style="[getStyle(config.detail.grow)]">成长值：152/500</div>
    </div>
    <div class="score-info" :style="[detailStyle]">
			<image class="bg" src="@/diyPages/static/images/bg_wallet.png"></image>
      <div class="txt">绿积分<image class="help" src="@/diyPages/static/images/help.png" alt=""></image></div>
      <div class="score">1254.3</div>
      <div class="score_detail" :style="{color: config.clickItem.look.color }">{{ config.clickItem.look.text || '查看明细' }}<image class="right" src="@/diyPages/static/images/right.png" alt=""></image></div>
      <div class="detail">
        <div class="detail_item" v-if="config.detail.withdraw.show">
          <p class="name" :style="[getStyle(config.detail.withdraw)]">可提现<image class="help" src="@/diyPages/static/images/help.png" alt=""></image></p>
          <p class="num" :style="[getNumStyle(config.detail.withdraw)]">582</p>
        </div>
        <div class="detail_item" v-if="config.detail.integral.show">
          <p class="name" :style="[getStyle(config.detail.integral)]">待入账绿积分<image class="help" src="@/diyPages/static/images/help.png" alt=""></image></p>
          <p class="num" :style="[getNumStyle(config.detail.integral)]">582</p>
        </div>
        <div class="detail_item" v-if="config.detail.deductible.show">
          <p class="name" :style="[getStyle(config.detail.deductible)]">绿积分可抵<image class="help" src="@/diyPages/static/images/help.png" alt=""></image></p>
          <p class="num" :style="[getNumStyle(config.detail.deductible)]">582</p>
        </div>
        <div class="detail_item" v-if="config.detail.contribution.show">
          <p class="name" :style="[getStyle(config.detail.contribution)]">贡献值<image class="help" src="@/diyPages/static/images/help.png" alt=""></image></p>
          <p class="num" :style="[getNumStyle(config.detail.contribution)]">582</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
export default {
	props: {
		config: Object
	},
	data() {
		return {
			top: 60
		}
	},
	computed: {
		detailStyle() {
			return {
				margin: this.config.style.padding
			}
		},
		infoStyle() {
			return {
				marginTop: this.top + 10 + 'px'
			}
		}
	},
	mounted() {
		this.getSysInfo()
	},
	methods: {
		getSysInfo(){
			const info = uni.getSystemInfoSync();
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			let navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			// 状态栏高度 + 胶囊高度
			this.top = info.statusBarHeight + navBarHeight
		},
		getStyle(item) {
			return {
				fontSize: item.fontSize * 2 + 'rpx',
				color: item.color,
			}
		},
		getNumStyle(item) {
			return {
				fontSize: item.fontSize * 2 + 8 + 'rpx',
			}
		}
	}
}

</script>

<style lang="scss" scoped>
	@import url('../../static/style/base.scss');
.bg {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.edit-module-member-center {
	position: relative;
  display: flex;
  flex-direction: column;
	box-sizing: content-box;
  .member-info {
		flex-shrink: 0;
    position: relative;
    height: 120rpx;
    color: #ffffff;
    padding-left: 168rpx;
    padding-right: 40rpx;
    .avatar {
      position: absolute;
      left: 22rpx;
      top: 0;
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      background-color: #fff;
			overflow: hidden;
			.img {
				width: 100%;
				height: 100%;
			}
    }
    .icon_sign {
      position: absolute;
      right: 120rpx;
      width: 30rpx;
      height: 30rpx;
    }
    .icon_set {
      position: absolute;
      right: 56rpx;
    }
    .name {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 26rpx;
      .txt {
        flex: 1;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .iconfont {
        margin-left: 20rpx;
      }
    }
    .level {
			display: inline-block;
      // width: 147rpx;
      // height: 30rpx;
      // line-height: 30rpx;
      font-size: 18rpx;
      font-weight: 800;
      background: #fb9b83;
      border-radius: 15rpx;
      text-align: right;
      padding: 4rpx 20rpx;
      margin: 16rpx 0 12rpx;
    }
    .progress {
      // width: 177rpx;
      // height: 21rpx;
      // font-size: 22rpx;
      font-weight: 500;
    }
  }
  .score-info {
    position: relative;
    margin-top: 46rpx!important;
    padding: 20rpx 15rpx;
    .txt {
			position: relative;
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: #B67A56;
      padding-left: 28rpx;
      .help {
        width: 18rpx;
        height: 18rpx;
        margin-left: 2rpx;
      }
    }
    .score {
			position: relative;
      font-size: 60rpx;
      color: #713318;
      padding-left: 28rpx;
      margin: 12rpx 0 16rpx;
    }
    .score_detail {
			position: relative;
      position: absolute;
      top: 34rpx;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      // width: 154rpx;
      height: 50rpx;
      font-size: 24rpx;
      font-weight: 800;
      color: #713318;
      background: #fcecd5;
      border-radius: 25rpx 0rpx 0rpx 25rpx;
			padding-left: 20rpx;
      .right {
        width: 9rpx;
				height: 15rpx;
        margin: 0 15rpx 0 17rpx;
      }
    }
    .detail {
			position: relative;
      display: flex;
      border-top: 1rpx solid rgba(255, 255, 255, .5);
      &_item {
				flex: 1;
        text-align: center;
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22rpx;
          color: #AD7850;
          margin: 20rpx 0 14rpx;
          .help {
            width: 18rpx;
            height: 18rpx;
            margin-left: 4rpx;
          }
        }
        .num {
          font-size: 30rpx;
          color: #F3622D;
        }
      }
    }
  }
}
</style>
