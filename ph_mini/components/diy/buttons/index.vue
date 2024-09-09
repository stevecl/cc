<template>
  <div class="edit-module-button" :style="[styleObj]">
    <div 
      :style="{'width': 100 / config.lineNum + '%'}"
      v-for="(item, index) in config.datas"
      :key="index"
      >
      <img :src="item.icon || getDefaultImage(item.defaultIcon)" :style="{borderRadius: config.imgBorderRadius + 'px'}">
      <p class="text-overflow" :style="{'color': item.color }">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			config: Object
		},
		data() {
			return { }
		},
		computed: {
			styleObj() {
			  let { style = {}, borderRadius } = this.config
			  // style.background = `rgba(${style.bgColor.colorRgb()}, ${style.bgOpacity}) url(${style.bgImageUrl}) center / 100% 100% repeat`
			  style.borderRadius = borderRadius + 'px'
			  return style
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.edit-module-button {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      width: 100%;
      text-align: center;
      margin-top: 8px;
      padding: 0 5px;
    }
  }
}

</style>