<template>
  <div class="page--snackbar">
    <div class="component-title">
      <h2>
        Snackbar 提示框（一般情况下推荐直接使用<router-link to="/plugins/toast"
          >Toast插件</router-link
        >）
      </h2>
      <p>短暂的通知弹框。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

    <div class="snippet-demo">
      <ui-button raised colored @click="balmUI.onShow('snackbar.active')"
        >Show Snackbar</ui-button
      >
      <ui-snackbar
        :type="1"
        v-model="snackbar.active"
        :message="snackbar.message"
        :timeout="3000"
        :actionHandler="actionHandler"
        actionText="Undo"
      ></ui-snackbar>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <div class="snippet-demo">
      <ui-button raised colored @click="balmUI.onShow('toast.active')"
        >Show Toast</ui-button
      >
      <ui-snackbar
        v-model="toast.active"
        :message="toast.message"
      ></ui-snackbar>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[2]"></ui-markdown>
    </ui-accordion>

    <ui-apidoc name="snackbar"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-snackbar>'
  },
  data() {
    return {
      toast: {
        active: false,
        message: 'Hello Toast'
      },
      snackbar: {
        active: false,
        message: 'Hello Snackbar'
      }
    };
  },
  methods: {
    actionHandler() {
      this.snackbar.active = false;
    }
  },
  created() {
    this.showCode('snackbar', 2);
  }
};
</script>
