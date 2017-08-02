import UiSnackbar from '../components/dialog/snackbar';
import {isString, isObject} from '../helpers';

const DEFAULT_OPTIONS = {
  className: '',
  message: '',
  timeout: 2750
};
const DELAY = 200;

const template =
`<ui-snackbar
  :class="['mdl-toast', options.className]"
  :active="active"
  :message="options.message"
  :timeout="options.timeout">
</ui-snackbar>`;

export default {
  install(Vue) {
    let vm;

    const toast = (options = '') => {
      if (!document.querySelector('.mdl-toast')) {
        vm = new Vue({
          components: {
            UiSnackbar
          },
          el: document.createElement('div'),
          template,
          data: {
            active: false,
            options: DEFAULT_OPTIONS
          },
          created() {
            if (isString(options)) {
              this.options.message = options;
            } else if (isObject(options)) {
              this.options = Object.assign(DEFAULT_OPTIONS, options);
            }
          }
        });

        document.body.appendChild(vm.$el);
        setTimeout(() => {
          vm.active = true;
        }, DELAY);

        setTimeout(() => {
          vm.active = false;
          setTimeout(() => {
            document.body.removeChild(vm.$el);
            vm = null;
          }, DELAY);
        }, vm.options.timeout);
      }
    };

    Vue.prototype.$toast = toast;
  }
};
