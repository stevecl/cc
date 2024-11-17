<template>
  <div class="edit-module-single-chart" :style="[styleObj]">
    <image
      class="img"
      :style="{ height: imgSizeList[index]}"
      :src="item.url || getImgByName(item.defaultIcon)"
      v-for="(item, index) in config.datas"
      :key="index"
			@click="handleClick(item.link)">
    </image>
</div>
</template>

<script>
import { mixins } from '@/diyPages/utils/diyMixins.js'
export default {
  mixins: [mixins],
  props: {
    config: Object
  },
  data() {
    return {
      imgSizeList: []
    }
  },
  computed: {
    styleObj() {
      let res = this.config?.style || {}
      res.background = `${res.bgColor} url(${res.bgImageUrl}) center / 100% 100% repeat`
      return res
    }
  },
  methods: {
    getImgSize(url) {
      return new Promise((resolve, reject) => {
        if (!url) return resolve(null)
        uni.getImageInfo({
          src: url,
          success(image) {
            resolve(image)
          },
          fail(image) {
            console.log('errr')
            resolve(null)
          }
        });
      })
    }
  },
  mounted() {
    const query = uni.createSelectorQuery().in(this);
    let that = this
    this.imgSizeList = new Array(this.config.datas.length).fill('240px')
    query.select(`.edit-module-single-chart`).boundingClientRect(async (data) => {
      let result = await Promise.all(this.config.datas.map(obj => this.getImgSize(obj.url)))
      result.forEach((item, index) => {
        that.$set(that.imgSizeList, index, item ? (item.height / item.width) * data.width + 'px' : '240px')
      })
    }).exec();
  }
}

</script>

<style lang="scss" scoped>
.edit-module-single-chart {
  display: flex;
  flex-direction: column;
  font-size: 0;
  .img {
    width: 100%;
  }
}
</style>