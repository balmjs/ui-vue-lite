默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-badge> 属性的默认值
  UiBadge: {
    // some props
  },
  // (可选) 复写全局 <ui-badge-link> 属性的默认值
  UiBadgeLink: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiBadgeComponents from 'balm-ui-lite/components/badge';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/badge.css';
import 'balm-ui-lite/components/icon.css'; // 可选

// (可选)
UiBadgeComponents.config({
  // 复写全局 <ui-badge> 属性的默认值
  UiBadge: {
    // some props
  },
  // 复写全局 <ui-badge-link> 属性的默认值
  UiBadgeLink: {
    // some props
  }
});

for (let key in UiBadgeComponents) {
  let Component = UiBadgeComponents[key];
  Vue.component(Component.name, Component);
}
```
