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
  
  width: calc(50% - var(--itemSpace) / 2);
  background-color: var(--bgColor);
  padding: 10px;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #fff;
    .name {
      height: 20px;
      line-height: 20px;
      position: relative;
      font-size: 18px;
      color: var(--color);
      margin-top: 5px;
    }
    .limit {
      width: 90%;
      font-size: 10px;
      margin-bottom: 5px;
      text-align: center;
      color: var(--color);
    }
    .btn {
      height: 20px;
      line-height: 20px;
      font-size: 10px;
      margin: 4px 0;
      padding: 0 10px;
      color: var(--bgColor);
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 20px;
    }
  }
}
</style>