<template>
  <div class="edit-module-assist-blank" :style="[config.style]"></div>
</template>

<script>
  export default {
    props: {
      config: Object,
      default: () => ({})
    },
    data() {
      return {}
    }
  }

</script>

<style lang="scss" scoped>
</style>
