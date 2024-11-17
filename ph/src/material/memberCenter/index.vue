<template>
  <div class="edit-module-member-center" :style="styleObj">
    <div class="member-info">
      <div class="avatar" :style="{borderRadius: config.base.avatar === 'circle' ? '50%' : '8px' }">
        <img class="img" src="https://img1.baidu.com/it/u=2931243091,718249849&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1730826000&t=45f5e4715aacf31c255483a0177d472c" alt="">
      </div>
      <div class="name">
        <span class="txt" :style="{ fontSize: config.detail.memberName.fontSize + 'px', color: config.detail.memberName.color }">昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称</span>
        <span class="iconfont icon-setting" :class="[config.clickItem.signin.icon]" :style="{ color: config.clickItem.signin.iconColor }" v-if="config.clickItem.signin.show"></span>
        <span class="iconfont icon-setting" :class="[config.clickItem.setting.icon]" :style="{ color: config.clickItem.setting.iconColor }" v-if="config.clickItem.setting.show"></span>
      </div>
      <div class="level" v-if="config.detail.memberLevel.show" :style="{ fontSize: config.detail.memberLevel.fontSize + 'px', color: config.detail.memberLevel.color }">普通会员</div>
      <div class="progress" v-if="config.detail.grow.show" :style="{ fontSize: config.detail.grow.fontSize + 'px', color: config.detail.grow.color }">成长值：152/500</div>
    </div>
    <div class="score-info" :style="detailStyle">
      <div class="txt">绿积分<img class="help" src="../../assets/images/member/help.png" alt=""></div>
      <div class="score">1254.3</div>
      <div class="score_detail" :style="{color: config.clickItem.look.color }">{{ config.clickItem.look.text || '查看明细' }}<img class="right" src="../../assets/images/member/right.png" alt=""></div>
      <div class="detail">
        <div class="detail_item" v-if="config.detail.withdraw.show">
          <p class="name" :style="{ fontSize: config.detail.withdraw.fontSize + 'px', color: config.detail.withdraw.color }">可提现<img class="help" src="../../assets/images/member/help.png" alt=""></p>
          <p class="num" :style="{ fontSize: config.detail.withdraw.fontSize + 4 + 'px'}">582</p>
        </div>
        <div class="detail_item" v-if="config.detail.integral.show">
          <p class="name" :style="{ fontSize: config.detail.integral.fontSize + 'px', color: config.detail.integral.color }">待入账绿积分<img class="help" src="../../assets/images/member/help.png" alt=""></p>
          <p class="num" :style="{ fontSize: config.detail.integral.fontSize + 4 + 'px'}">582</p>
        </div>
        <div class="detail_item" v-if="config.detail.deductible.show">
          <p class="name" :style="{ fontSize: config.detail.deductible.fontSize + 'px', color: config.detail.deductible.color }">绿积分可抵<img class="help" src="../../assets/images/member/help.png" alt=""></p>
          <p class="num" :style="{ fontSize: config.detail.deductible.fontSize + 4 + 'px'}">582</p>
        </div>
        <div class="detail_item" v-if="config.detail.contribution.show">
          <p class="name" :style="{ fontSize: config.detail.contribution.fontSize + 'px', color: config.detail.contribution.color }">贡献值<img class="help" src="../../assets/images/member/help.png" alt=""></p>
          <p class="num" :style="{ fontSize: config.detail.contribution.fontSize + 4 + 'px'}">582</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  config: Object
})

const styleObj = computed(() => {
  let { bgStyle, style } = props.config
  return {
    ...style
  }
})

const detailStyle = computed(() => {
  let { bgStyle, style } = props.config
  return {
    margin: style.padding
  }
})

</script>

<style lang="scss" scoped>
.edit-module-member-center {
  display: flex;
  flex-direction: column;
  height: 300px;
  background: url('../../assets/images/member/bg_mine.png') 0 0 no-repeat;
  background-size: 100% auto;
  box-sizing: content-box;
  .member-info {
    flex-shrink: 0;
    position: relative;
    height: 60px;
    color: #ffffff;
    margin-top: 80px!important;
    padding-left: 84px;
    padding-right: 20px;
    .avatar {
      position: absolute;
      left: 11px;
      top: 0;
      width: 60px;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
      overflow: hidden;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 13px;
      .txt {
        flex: 1;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .iconfont {
        margin-left: 10px;
      }
    }
    .level {
      display: inline-block;
      // width: auto;
      // height: 15px;
      // line-height: 15px;
      font-size: 9px;
      font-weight: 800;
      text-align: right;
      background: #fb9b83;
      border-radius: 7.5px;
      padding: 2px 10px;
      margin-top: 8px;
    }
    .progress {
      // width: 88.5px;
      // height: 10.5px;
      // font-size: 11px;
      font-weight: 500;
      margin-top: 8px;
    }
  }
  .score-info {
    position: relative;
    background: url('../../assets/images/member/bg_wallet.png') 0 0 no-repeat;
    background-size: 100% 100%;
    margin-top: 23px!important;
    padding: 10px 7.5px;
    .txt {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #B67A56;
      padding-left: 14px;
      .help {
        width: 9px;
        height: 9px;
        margin-left: 2px;
      }
    }
    .score {
      font-size: 30px;
      color: #713318;
      padding-left: 14px;
      margin: 6px 0 10px;
    }
    .score_detail {
      position: absolute;
      top: 17px;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      // width: 77px;
      height: 25px;
      font-size: 12px;
      font-weight: 800;
      color: #713318;
      background: #fcecd5;
      border-radius: 12.5px 0px 0px 12.5px;
      padding-left: 10px;
      .right {
        width: 6px;
        margin: -2px 7.5px 0 8.5px;
      }
    }
    .detail {
      display: flex;
      border-top: 1px solid rgba(255, 255, 255, .5);
      &_item {
        flex: 1;
        text-align: center;
        .name {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #AD7850;
          margin: 10px 0 9px;
          .help {
            width: 9px;
            height: 9px;
            margin-left: 2px;
          }
        }
        .num {
          font-size: 15px;
          color: #F3622D;
        }
      }
    }
  }
}
</style>
