<template>
  <div class="wrap">
    <div class="flex wrap_header">
      <div class="menu-toggle">MENU</div>
      <img class="logo" src="@/assets/images/logo.png" alt="">
      <div class="search-toggle">SEARCH</div>
    </div>
    <div class="wrap_left">
      <menuVue></menuVue>
    </div>
    <div class="wrap_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import menuVue from '../menu/index.vue'

</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 120px 1fr; // 定义每一行的行高
  grid-template-columns: 100px 1fr; // 定义每一列的列宽
  gap: 10px; // 设置行、列间隔
  background: url('@/assets/images/poster.jpg') no-repeat;
  background-size: cover;
  // place-items: end end;
  // place-content: center start;
  // grid-auto-flow：设置子元素的排列顺序
  // grid-auto-columns：设置浏览器自动创建的多余网格（留白）的列宽
  // grid-auto-rows：设置浏览器自动创建的多余网格（留白）的行高
  &_header {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    grid-column: 1 / span 2;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 213px;
      margin-top: 40px;
    }
    .menu-toggle, .search-toggle {
      font-size: 11px;
      font-family: 'Gotham-Bold', sans-serif;
      font-weight: 700;
      color: #fff;
      letter-spacing: 2px;
      transition: color 0.5s;
      cursor: pointer;
      &:hover {
        color: #e27b5b;
      }
    }
  }
  &_left {
    grid-row: 2 / 3;
  }
  &_main {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}
</style>