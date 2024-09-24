<template>
  <div class="common-list">
    <div class="product-list">
      <div class="product-list_item" :class="{ 'active': selectList.findIndex(obj => obj.id === item.id) > -1 }"
        v-for="(item, index) in datas" :key="index" @click="handleSelect(item)">
        <div class="goods">
          <el-image :src="item.imgUrl || 't'" fit="contain">
            <template #error>
              <div class="image-slot">
                <img :src="getDefaultImage('picture.png')" alt="">
              </div>
            </template>
          </el-image>
        </div>
        <div class="goods-detail">
          <div class="text-overflow">{{ item.categoryName }}</div>
          <div class="gray">{{ item.gmtCreate }}</div>
          <!-- <div class="flex-between">
            <span class="light">￥{{ item.salePrice }}</span>
            <span class="gray">库存：{{ item.inventoryQuantity }}</span>
          </div> -->
          <div class="activeIcon">
            <span class="iconfont icon-duihao"></span>
          </div>
        </div>
      </div>
      <div class="gray" v-if="!datas.length" style="margin-top: 150px;text-align: center;width: 100%;">暂无商品数据</div>
    </div>
    <!-- <el-pagination
      :current-page="searchQuery.pageNum"
      background
      layout="prev, pager, next"
      :total="1000"
      @current-change="handlePage" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useDefaultSource from '@/hooks/useDefaultSource'

let { getDefaultImage } = useDefaultSource()

const props = defineProps({
  datas: Array
})

const selectList = ref([])

const handleSelect = (item) => {
  let index = selectList.value.findIndex(obj => obj.id === item.id)
  if (index > -1) {
    selectList.value.splice(index, 1)
  } else {
    // selectList.value.push(item)
    selectList.value = [item]
  }
}

const submit = () => selectList.value[0]

defineExpose({
  submit
})

</script>

<style lang="scss" scoped>
.common-list {
  flex: 1;
  overflow: auto;
  border-radius: 4px;
  padding: 10px 0;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  flex-shrink: 0;
  &_item {
    cursor: pointer;
    width: 280px;
    height: 76px;
    border-radius: 4px;
    border: 1px solid #ededed;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px 12px;
    display: flex;
    position: relative;

    .goods {
      width: 60px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    .goods-detail {
      padding-top: 10px;
      flex: 1;
      padding-left: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;
      line-height: 22px;
    }

    &.active {
      border-color: var(--primary, #fb6638);
      ;

      .activeIcon {
        display: unset;
      }
    }
  }
}

.activeIcon {
  display: none;
  width: 14px;
  height: 14px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  background: var(--primary, #fb6638);
  color: #fff;

  .iconfont {
    display: inline-block;
    height: 14px;
    line-height: 14px;
    position: absolute;
    left: 0;
    top: -1px;
  }
}</style>