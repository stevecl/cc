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
  background-color: #666;
  position: relative;
  display: flex;
  height: 60px;
  font-size: 12px;
  overflow: hidden;
  .coupon-num {
    display: flex;
    width: 110px;
    height: 100%;
    font-size: 8px;
    color: #fff;
    flex-direction: column;
    align-items: center;
    background-color: var(--bgColor);

    .cash {
      height: 22px;
      line-height: 22px;
      margin: 10px 0 6px;

      span {
        font-family: PingFang-SC-Heavy;
        font-size: 24px;
        font-weight: 800;
        font-stretch: normal;
        letter-spacing: 0;

        &.unit {
          font-size: 8px;
          letter-spacing: 3px;
        }
      }
    }

    .txt {
      height: 12px;
      line-height: 12px;
      text-align: center;
      border: .6px solid #fff;
      padding: 0 8px;
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
      height: 13px;
      line-height: 13px;
      font-size: 12px;
      margin-left: 10px;
      margin-top: 12px;
      &.name {
        color: var(--color);
      }

      &.txt {
        margin-top: 10px;
        color: var(--bgColor);
      }
    }
  }

  .coupon-btn {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    span {
      width: 50px;
      height: 19px;
      line-height: 20px;
      font-size: 11px;
      text-align: center;
      color: #fff;
      margin-right: 17px;
      background-color: var(--bgColor);
      border-radius: 20px;
    }
  }

  .left-css {
    position: absolute;
    left: -7px;
    top: 0;
    width: 9px;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    span {
      height: 10px;
      border-radius: 50%;
      background-color: var(--couponbgcolor);
    }
  }
}
</style>