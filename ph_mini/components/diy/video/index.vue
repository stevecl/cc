<template>
  <div class="edit-module-video" :style="[config.style]">
    <video
      controls
      :src="config.videoSrc"
      :autoplay="false"
      :poster="config.poster"
      object-fit="cover"
      :play-btn-position="'center'"
      style="width: 100%;"
      >
    </video>
  </div>
</template>

<script>
export default {
  props: {
    config: Object
  }
}

</script>

<style lang="scss" scoped>
.edit-module-video {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #2C2C2C;
}
</style>
