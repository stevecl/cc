<template>
  <div class="coupon-item">
    <div class="inner">
      <p class="text-overflow name">优惠券</p>
      <p class="btn">立即领取</p>
      <p class="text-overflow limit">(限制啊)</p>
      <p class="lft"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.coupon-item {
  background-color: var(--bgcolor);
  padding: 20rpx;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2rpx solid #fff;
    .name {
      height: 40rpx;
      line-height: 40rpx;
      position: relative;
      font-size: 36rpx;
      color: var(--color);
      margin-top: 10rpx;
    }
    .limit {
      width: 90%;
      font-size: 20rpx;
      margin-bottom: 10rpx;
      text-align: center;
      color: var(--color);
    }
    .btn {
      height: 40rpx;
      line-height: 40rpx;
      font-size: 20rpx;
      margin: 8rpx 0;
      padding: 0 20rpx;
      color: var(--bgcolor);
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 40rpx;
    }
  }
}
</style>