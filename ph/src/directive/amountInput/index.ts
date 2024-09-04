import { Directive, DirectiveBinding } from 'vue';

function dealVal(val: any, digit: number = 2) {
  if (val === '') return ''
  val = val.replace(/[^\d|\.]/g, '').replace(/\.\.*/, '.')
  return val[val.length - 1] !== '.' ? parseFloat(parseFloat(val).toFixed(digit)) : val
}

// 金额输入框 限制输入方法
export const amountInput: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const inputDom: HTMLInputElement = el.tagName === 'INPUT' ? el :el.querySelector('input');
    inputDom.oninput = () => {
      inputDom.value = inputDom.value.replace(/[^\d|\.]/g, '')
    };
    inputDom.onblur = () => {
      inputDom.value = dealVal(inputDom.value, binding.value);
      inputDom.dispatchEvent(new Event("input"))
    };
  }
};
