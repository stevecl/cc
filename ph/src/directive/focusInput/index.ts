import { Directive, DirectiveBinding } from 'vue';

// 输入框获取焦点
export const focus: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const input = el.querySelector('input')  as HTMLInputElement;
    if(input)input.focus()
  }
};
