import copyText from './common/copyText';
import { App } from 'vue';
import { amountInput } from './amountInput';
import { focus } from './focusInput';

export default (app: App) => {
  app.directive('copyText', copyText);
  app.directive('amountInput', amountInput);
  app.directive('focus', focus);
};
