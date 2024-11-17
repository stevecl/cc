<template>
  <div class="coupon-item">
    <div class="coupon-num">
      <p class="cash">
        <span>9</span>.
        <span style="font-size: 10px;">88</span>
        <span class="unit">元</span>
      </p>
      <p class="txt">优惠券</p>
    </div>
    <div class="coupon-info">
      <p class="text-overflow name">优惠券名称</p>
      <p class="txt">限制？</p>
    </div>
    <div class="coupon-btn">
      <span>去领取</span>
    </div>
    <div class="left-css">
      <span v-for="n in 6" :key="n"></span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.coupon-item {
  position: relative;
  display: flex;
  height: 120rpx;
  font-size: 24px;
  overflow: hidden;

  .coupon-num {
    display: flex;
    width: 220rpx;
    height: 100%;
    font-size: 16rpx;
    color: #fff;
    flex-direction: column;
    align-items: center;
    background-color: var(--bgcolor);

    .cash {
      height: 44rpx;
      line-height: 44rpx;
      margin: 20rpx 0 12rpx;

      span {
        font-family: PingFang-SC-Heavy;
        font-size: 48rpx;
        font-weight: 800;
        font-stretch: normal;
        letter-spacing: 0;

        &.unit {
          font-size: 16rpx;
          letter-spacing: 6rpx;
        }
      }
    }

    .txt {
      height: 24rpx;
      line-height: 24rpx;
      text-align: center;
      border: 2rpx solid #fff;
      padding: 0 16rpx;
    }
  }

  .coupon-info {
    flex: 1;
    text-align: left;
    overflow: hidden;
    height: 100%;
    flex-shrink: 0;
    color: #545454;
    background-color: #fff;

    .name,
    .txt {
      height: 26rpx;
      line-height: 26rpx;
      font-size: 24rpx;
      margin-left: 20rpx;
      margin-top: 24rpx;
      &.name {
        color: var(--color);
      }

      &.txt {
        margin-top: 20rpx;
        color: var(--bgcolor);
      }
    }
  }

  .coupon-btn {
    width: 140rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    span {
      width: 100rpx;
      height: 38rpx;
      line-height: 40rpx;
      font-size: 22rpx;
      text-align: center;
      color: #fff;
      margin-right: 34rpx;
      background-color: var(--bgcolor);
      border-radius: 40rpx;
    }
  }

  .left-css {
    position: absolute;
    left: -14rpx;
    top: 0;
    width: 18rpx;
    height: 100%;
    display: flex;
    flex-direction: column;

    span {
      height: 20rpx;
      border-radius: 50%;
			background-color: var(--couponbgcolor);
    }
  }
}
</style>