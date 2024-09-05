<template>
  <div class="input-number">
    <el-row>
      <el-col :span="20" class="input-number_input">
        <input
          :style="inputStyle"
          :value="modelValue"
          type="number"
          :min="inputConfig.min"
          :max="inputConfig.max"
          :step="inputConfig.step"
          @input="emit('update:modelValue', $event.target.value)"
        />
        <span class="input-number_input--unit">{{ inputConfig.unit }}</span>
      </el-col>
      <el-col :span="4">
        <div class="input-number_icon">
          <div class="input-number_icon--up">
            <el-icon class="op-icon el-icon-arrow-up" @click="changeNumber('add')"><ArrowUp /></el-icon>
          </div>
          <div class="input-number_icon--down">
            <el-icon class="op-icon el-icon-arrow-down" @click="changeNumber('sub')"><ArrowDown /></el-icon>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { computed } from 'vue';

const DEFAULT_CONFIG = {
  borderRadius: 5,
  min: 0, //最小值
  max: 50, //最大值
  step: 1, //步长
  unit: 'px', //单位
};

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: String | Number,
  config: Object
})

watch(() => props.modelValue, newVal => {
    let { max, min } = inputConfig.value
    let val = newVal.toString();
    val = val.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
    // 去除整数前的0和小数点后多余的0，如011.020300 =》 11.0203
    const reg1 = /0*([1-9]\d*|0\.\d+)/;
    //   const reg2 = /(?:\.0*|(\.\d+?)0+)$/;
    // .replace(reg2, '$1')
    val = val.replace(reg1, "$1");
    if (val.indexOf(".") < 0 && val != "") {
      //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      val = parseFloat(val);
    }
    if (val >= max) val = max
    if (val <= min) val = min
    emit("update:modelValue", Number(val));
})

const inputConfig = computed(() => {
  return { ...DEFAULT_CONFIG, ...props.config }
})
const inputStyle = computed(() => ({
    borderRadius: inputConfig.borderRadius + "px",
}))

const changeNumber = (type) => {
  let val = Number(props.modelValue), { max, min } = inputConfig.value
  console.log('type',type, val < max, max, min)
  if (type == "add" && val < max) val += inputConfig.value.step;
  if (type == "sub" && val > min) val -= inputConfig.value.step;
  emit("update:modelValue", val);
}

</script>



<style lang="scss" scoped>
.input-number {
  display: inline-block;
  width: 110px;
  font-size: 12px;
  .active {
    background-color: #f8fafb;
    color: #0081ff;
  }
  &_input {
    position: relative;
    &--unit {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      color: #909399;
    }
    input {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      outline: none;
      padding: 0 22px 0 10px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 84px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
  }
  &_icon {
    &--up,
    &--down {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15px;
      width: 15px;
      border: solid 1px #e4e7ed;
      box-sizing: border-box;
      &:focus, &:hover {
        background-color: #f8fafb;
        color: #0081ff;
      }
    }
    &--up {
      border-radius: 9px 9px 0 0;
      border-bottom: none;
    }
    &--down {
      border-radius: 0 0 9px 9px;
      .el-icon-arrow-down {
        bottom: 1px;
      }
    }
    .op-icon {
      margin-left: 1px;
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>