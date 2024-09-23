<template>
  <div class="edit-module-goodsLikes" :style="[config.style]">
    <div class="title" v-if="config.titleConfig.show">
      <div class="line line_left" :style="[leftLineStyle]"></div>
      <div class="txt">
        <image class="img" :src="config.titleConfig.icon || getImgByName('title3.png')" alt=""></image>
        <span :style="{color: config.titleConfig.color}">{{ config.titleConfig.text }}</span>
      </div>
      <div class="line line_right" :style="[rightLineStyle]"></div>
    </div>
    <list3 :config="config" v-if="config.productConfig.showType === 3"></list3>
    <list4 :config="config" v-if="config.productConfig.showType === 4"></list4>
    <list6 :config="config" v-if="config.productConfig.showType === 6"></list6>
  </div>
</template>

<script>
import { mixins } from '@/common/diyMixins';
import list3 from '../goods/list3.vue';
import list4 from '../goods/list4.vue';
import list6 from '../goods/list6.vue';

export default {
	mixins: [mixins],
	props: {
		config: Object
	},
	computed: {
		leftLineStyle() {
			return { background: `linear-gradient(to left, ${this.config.titleConfig.lineColor}, transparent)` }
		},
		rightLineStyle() {
			return { background: `linear-gradient(to right, ${this.config.titleConfig.lineColor}, transparent)` }
		}
	},
	components: {
		list3,
		list4,
		list6
	},
}

</script>

<style lang="scss" scoped>
.edit-module-goodsLikes {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    font-size: 20px;
    margin-bottom: 10px;
    .line {
      width: 30px;
      height: 1px;
      &:is(.line_left) {
        margin-right: 10px;
        
      }
      &:is(.line_right) {
        margin-left: 10px;
      }
    }
    .img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      margin-top: -1px;
    }
  }
}
</style>
