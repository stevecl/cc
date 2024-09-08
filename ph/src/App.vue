<template>
  <layoutView></layoutView>
  <registerVue></registerVue>
</template>

<script setup>
import layoutView from './layout/index.vue'
import registerVue from '@/components/diyTools/register.vue';
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
