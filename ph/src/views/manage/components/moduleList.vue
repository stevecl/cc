// 机构模版列表
<template>
  <div class="flex-1 module-list">
    <div class="gray no-data-txt" v-if="!datas.length">暂无数据</div>
    <div :class="{'selected': item.state == 1, 'module-list-item': true}" v-for="(item) in datas" :key="item">
      <div class="img-box">
        <el-image :src="item.templateImg" fit="contain"></el-image>
        <div class="cover">
          <div>
            <p @click="handleOpen(item)" v-if="item.state == 0">
              <i class="iconfont icon-qiyong1"></i>
              <span>启用</span>
            </p>
            <p @click="handleEdit(item)">
              <i class="iconfont icon-bi"></i>
              <span>编辑</span>
            </p>
            <p @click="handleClone(item)">
              <i class="iconfont icon-kelong_huaban1"></i>
              <span>克隆</span>
            </p>
            <p @click="handleDelete(item)">
              <i class="iconfont icon-shanchu2"></i>
              <span>删除</span>
            </p>
          </div>
        </div>
      </div>
      <p class="label" v-if="item.state == 1">使用中</p>
      <p class="nameCn text-overflow">{{ item.templateName }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import { editModuleStatus, copyModule, deleteModule } from '@/api'

const router = useRouter()
const emit = defineEmits(['update'])
const props = defineProps({
  datas: Array
})

const handleOpen = async ({ id }) => {
  await editModuleStatus(id)
  emit('update')
}

const handleDelete = async ({ id }) => {
  let res = await ElMessageBox.confirm(`确定删除吗?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' } )
  if (res === 'confirm') {
    await deleteModule(id)
    emit('update')
  }
}

const handleEdit = ({ type, id }) => router.push({ name: 'edit', query: { type, id } })
const handleClone = async ({ id }) => {
  await copyModule(id)
  emit('update')
}

</script>

<style lang="scss" scoped>
.module-list {
  display: flex;
  flex-wrap: wrap;
  &-item {
    position: relative;
    width: 258px;
    height: 470px;
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 0;
    background-color: #ffffff;
    border-radius: 8px;
    border: solid 1px #e4e7ed;
    overflow: hidden;
    &.selected {
      border-color: var(--lightColor);
    }
    .img-box {
      position: relative;
      width: 100%;
      height: 414px;
      background-color: #F5F7FA;
      .el-image {
        width: 100%;
        height: 100%;
        :deep(img) {
          width: 100%;
          height: auto;
        }
      }
      &:hover .cover {
        display: flex;
      }
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
          display: flex;
          width: 150px;
          flex-wrap: wrap;
          &.center {
            justify-content: center;
          }
          p {
            width: 68px;
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #fff;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 10px;
            cursor: pointer;
            margin: 0 14px 14px 0;
            &.cancel {
              width: 100%;
              height: 36px;
              margin-right: 0;
            }
            &:nth-child(2n + 2) {
              margin-right: 0;
            }
            i {
              font-size: 26px;
              margin-bottom: 6px;
            }
          }
        }
        button {
          width: 100px;
          margin: 0 0 10px;
        }
      }
    }
    p.nameCn {
      height: 54px;
      line-height: 54px;
      font-size: 14px;
      text-align: center;
      border-top: solid 1px #e4e7ed;;
      padding: 0 10px;
    }
    p.label {
      position: absolute;
      left: 0;
      top: 0;
      width: 80px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      text-align: center;
      padding: 0 10px 0 5px;
      border-radius: 6px 0px 20px 0px;
      background-color: var(--lightColor);
    }
  }
}

.no-data-txt {
  width: 100%;
  text-align: center;
  padding-top: 300px;
}
</style>