<template>
  <div class="list list4">
    <div class="list_item" v-for="(item, index) in showData" :key="index" :style="itemStyle">
      <div class="wrap">
        <!-- <img class="img" :src="getDefaultImage('picture.png')" alt=""> -->
        <el-image class="img" :src="item.mainImgUrl || 't'" fit="contain">
          <template #error>
            <div class="image-slot">
              <img :src="getDefaultImage('default_picture.png')" alt="">
            </div>
          </template>
        </el-image>
      </div>
      <div class="detail" :style="{ background: productConfig.bgColor }">
        <div class="name" :style="detailConfig.title.style">{{ item.goodsName }}</div>
        <div class="sale" :style="detailConfig.price.style"><span class="unit">￥</span>{{ item.salePrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useDefaultSource from '@/hooks/useDefaultSource';

const { getDefaultImage } = useDefaultSource()

const props = defineProps({
  config: Object
})

const productConfig = computed(() => (props.config.productConfig || {}))
const detailConfig = computed(() => (productConfig.value.detail || {}))

const itemStyle = computed(() => ({
  '--space': productConfig.value.goodSpace + 'px',
  borderRadius: productConfig.value.goodRadius + 'px'
}))

let defItem = {
  goodsName: "商品标题",
  salePrice: '20',
  marketPrice: '99'
}

const showData = computed(() => {
  let { type, selectList = [], showNum } = props.config.dataConfig || props.config.tabbarConfig.datas[props.config.tabbarIndex]
  if (type === 'product') {
    return selectList.length ? selectList : [ defItem, defItem ]
  } else {
    return new Array(showNum).fill(defItem)
  }
})

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  // justify-content: flex-start;
  // align-items: flex-start;
  .list_item {
    --space: 0;
    display: flex;
    width: calc(50% - var(--space) / 2);
    box-sizing: border-box;
    margin-bottom: calc(var(--space) );
    overflow: hidden;
    &:nth-child(2n + 1) {
      margin-right: calc(var(--space));
    }
    .wrap {
      position: relative;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 4px;
      .name {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .sale {
        flex: 1;
        display: flex;
        align-items: flex-end;
        font-size: 18px;
        color: #FF2F46;
        .unit {
          font-size: 14px;
        }
      }
    }
  }
}
</style>