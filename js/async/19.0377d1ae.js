(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ERrc:function(t,e){t.exports='<h1 id="balmui-lite-\u8fdb\u9636\u7528\u6cd5">BalmUI Lite \u8fdb\u9636\u7528\u6cd5</h1>\n<ol>\n<li>\u6837\u5f0f\u6a21\u5757\u5316\u65b9\u6848</li>\n<li>\u811a\u672c\u6a21\u5757\u5316\u65b9\u6848</li>\n<li>\u81ea\u52a8\u83b7\u53d6 UI \u6240\u9700\u7684\u56fe\u7247\u548c\u5b57\u4f53\u8d44\u6e90</li>\n</ol>\n<blockquote>\n<p>\u26a0\ufe0f \u4ee5\u4e0b\u914d\u7f6e\u4f9d\u65e7\u57fa\u4e8e <a href="https://github.com/balmjs/balm-cli">Balm CLI</a> \u642d\u5efa\u7684 Vue \u811a\u624b\u67b6</p>\n</blockquote>\n<h2 id="1-\u6837\u5f0f\u6a21\u5757\u5316">1. \u6837\u5f0f\u6a21\u5757\u5316</h2>\n<h3 id="11-sass-\u65b9\u6848\uff08\u63a8\u8350\uff09">1.1 Sass \u65b9\u6848\uff08\u63a8\u8350\uff09</h3>\n<p>\u7f16\u8f91 <code>/path/to/my-project/app/styles/global/_vendor.scss</code>\uff08\u7b2c\u4e09\u65b9 Sass \u5165\u53e3\u6587\u4ef6\u7ba1\u7406\uff09</p>\n<pre><code class="language-css">/* \u65b0\u589e BalmUI Lite \u6837\u5f0f\u5e93 */\n@import &#39;node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss&#39;;</code></pre>\n<blockquote>\n<p>\u7136\u540e\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 <code>/path/to/my-project/app/styles/global/_var.scss</code> \u8bbe\u5b9a\u6307\u5b9a\u7684\u6837\u5f0f\u53d8\u91cf\u6765\u5feb\u901f\u590d\u5199 UI \u6837\u5f0f</p>\n</blockquote>\n<p><strong>\u6a21\u677f\u7edf\u4e00\u683c\u5f0f</strong></p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n\n&lt;head&gt;\n  ...\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/main.css&quot;&gt;\n  &lt;!-- build:css css/plugins.css --&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/path/to/some-plugin.css&quot;&gt;\n  ...\n  &lt;!-- endbuild --&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/lte10.css&quot;&gt;\n  &lt;!--[if IE 9]&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/ie9.css&quot;&gt;\n  &lt;![endif]--&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;!--[if lte IE 9]&gt;\n    &lt;p class=&quot;browserupgrade&quot;&gt;You are using an &lt;strong&gt;outdated&lt;/strong&gt; browser. Please &lt;a href=&quot;https://browsehappy.com/&quot;&gt;upgrade your browser&lt;/a&gt; to improve your experience and security.&lt;/p&gt;\n  &lt;![endif]--&gt;\n  ...\n&lt;/body&gt;\n\n&lt;/html&gt;</code></pre>\n<ul>\n<li><code>main.css</code> \u9879\u76ee\u6837\u5f0f\u5165\u53e3\u6587\u4ef6</li>\n<li><code>css/plugins.css</code> \u6240\u6709\u7b2c\u4e09\u65b9\u6837\u5f0f\u6587\u4ef6\u6253\u5305\u540e\u7684\u6587\u4ef6\u8def\u5f84\uff08\u5982\u679c\u7b2c\u4e09\u65b9\u63d0\u4f9b Sass\uff0c\u4e5f\u53ef\u76f4\u63a5\u5728 <code>/path/to/my-project/app/styles/global/_vendor.scss</code> \u4e2d\u8fdb\u884c\u7ba1\u7406\uff09</li>\n<li><code>lte10.css</code> \u4e3a\u517c\u5bb9 <em>IE10-</em> \u800c\u751f</li>\n<li><code>ie9.css</code> \u4e3a\u5f3a\u884c\u517c\u5bb9 <em>IE</em> \u800c\u751f</li>\n</ul>\n<blockquote>\n<p>\u6ca1\u6709 IE8-\uff0c\u56e0\u4e3a <a href="https://vuejs.org/v2/guide/installation.html">Vue.js</a> \u4e0d\u652f\u6301 IE8 \u53ca\u5176\u4ee5\u4e0b\u7248\u672c</p>\n</blockquote>\n<h3 id="12-\u76f4\u63a5-css-\u65b9\u6848">1.2 \u76f4\u63a5 CSS \u65b9\u6848</h3>\n<pre><code class="language-html">&lt;head&gt;\n  ...\n  &lt;!-- build:css css/vendors.css --&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui-lite/dist/balm-ui-lite.css&quot;&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/path/to/some-plugin.css&quot;&gt;\n  ...\n  &lt;!-- endbuild --&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/main.css&quot;&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/lte10.css&quot;&gt;\n  &lt;!--[if IE 9]&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/ie9.css&quot;&gt;\n  &lt;![endif]--&gt;\n&lt;/head&gt;</code></pre>\n<blockquote>\n<p>\u6ce8\u610f <code>main.css</code> \u7684\u4f4d\u7f6e\u987a\u5e8f</p>\n</blockquote>\n<h2 id="2-\u811a\u672c\u6a21\u5757\u5316">2. \u811a\u672c\u6a21\u5757\u5316</h2>\n<h3 id="21-\u5b8c\u6574\u5f15\u7528">2.1 \u5b8c\u6574\u5f15\u7528</h3>\n<h4 id="211-\u6a21\u5757\u5f15\u5165\uff08\u63a8\u8350\uff09">2.1.1 \u6a21\u5757\u5f15\u5165\uff08\u63a8\u8350\uff09</h4>\n<p>\u7f16\u8f91 <code>/path/to/my-project/app/scripts/main.js</code></p>\n<pre><code class="language-js">import Vue from &#39;vue&#39;;\nimport app from &#39;./views/layouts/app&#39;;\nimport BalmUI from &#39;balm-ui-lite&#39;; // \u5f15\u7528\n\nVue.use(BalmUI); // \u5b89\u88c5\n\nnew Vue({\n  el: &#39;#app&#39;,\n  components: { app },\n  template: &#39;&lt;app/&gt;&#39;\n});</code></pre>\n<h4 id="212-\u6d4f\u89c8\u5668\u5f15\u5165">2.1.2 \u6d4f\u89c8\u5668\u5f15\u5165</h4>\n<p>\u7f16\u8f91 <code>/path/to/my-project/app/index.html</code></p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n\n&lt;head&gt;\n  ...\n  &lt;!-- build:css css/vendors.css --&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui-lite/dist/balm-ui-lite.css&quot;&gt;\n  &lt;!-- endbuild --&gt;\n  ...\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;div id=&quot;app&quot;&gt;\n    &lt;ui-button @click=&quot;$alert(message)&quot;&gt;SayHi&lt;/ui-button&gt;\n  &lt;/div&gt;\n\n  &lt;script src=&quot;https://unpkg.com/vue&quot;&gt;&lt;/script&gt;\n  &lt;!-- build:js js/vendors.js --&gt;\n  &lt;script src=&quot;/node_modules/balm-ui-lite/dist/balm-ui-lite.js&quot;&gt;&lt;/script&gt;\n  &lt;!-- endbuild --&gt;\n  &lt;script&gt;\n  var app = new Vue({\n    el: &#39;#app&#39;,\n    data: {\n      message: &#39;Hello BalmUI&#39;\n    }\n  });\n  &lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;</code></pre>\n<h3 id="22-\u72ec\u7acb\u5f15\u7528">2.2 \u72ec\u7acb\u5f15\u7528</h3>\n<blockquote>\n<p>\u63a8\u8350\u79fb\u52a8\u7aef H5 \u5f00\u53d1\u65f6\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u56e0\u4e3a\u6253\u5305\u4f53\u79ef\u76f8\u5bf9\u66f4\u5c0f</p>\n</blockquote>\n<h4 id="221-\u6a21\u5757\u5f15\u5165">2.2.1 \u6a21\u5757\u5f15\u5165</h4>\n<p>\u7f16\u8f91 <code>/path/to/my-project/app/scripts/main.js</code></p>\n<pre><code class="language-js">import Vue from &#39;vue&#39;;\nimport app from &#39;./views/layouts/app&#39;;\n// \u5f15\u7528UI\u90e8\u5206\u811a\u672c\nimport UiButton from &#39;balm-ui-lite/components/button&#39;;\nimport $alert from &#39;balm-ui-lite/plugins/alert&#39;;\n\n// \u5f15\u7528UI\u90e8\u5206\u6837\u5f0f\nimport &#39;balm-ui-lite/components/core.css&#39;;\nimport &#39;balm-ui-lite/components/button.css&#39;;\nimport &#39;balm-ui-lite/components/dialog.css&#39;;\n\n// \u5b89\u88c5Button\u7ec4\u4ef6\nVue.component(UiButton.name, UiButton);\n// \u5b89\u88c5Alert\u63d2\u4ef6\nVue.use($alert);\n\nnew Vue({\n  el: &#39;#app&#39;,\n  components: { app },\n  template: &#39;&lt;app/&gt;&#39;\n});</code></pre>\n<blockquote>\n<p>\u5173\u4e8e _CSSinJS_\uff0c\u53ef\u901a\u8fc7 BalmJS \u914d\u7f6e\u63d0\u53d6\u6837\u5f0f\uff0c\u4f46 BalmJS \u7684\u601d\u60f3 \u66f4\u63a8\u8350\u5c06\u6837\u5f0f\u548c\u811a\u672c\u5206\u79bb\u7ba1\u7406\uff0c\u4ee5\u8fbe\u6210\u66f4\u52a0\u7075\u6d3b\u7684\u6a21\u5757\u914d\u7f6e\u548c\u7ba1\u7406</p>\n</blockquote>\n<h4 id="222-\u6d4f\u89c8\u5668\u5f15\u5165">2.2.2 \u6d4f\u89c8\u5668\u5f15\u5165</h4>\n<p>\u7f16\u8f91 <code>/path/to/my-project/app/index.html</code></p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n\n&lt;head&gt;\n  ...\n  &lt;!-- build:css css/vendors.css --&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui-lite/components/core.css&quot;&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui-lite/components/button.css&quot;&gt;\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui-lite/components/dialog.css&quot;&gt;\n  &lt;!-- endbuild --&gt;\n  ...\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;div id=&quot;app&quot;&gt;\n    &lt;ui-button @click=&quot;$alert(message)&quot;&gt;SayHi&lt;/ui-button&gt;\n  &lt;/div&gt;\n  &lt;script src=&quot;https://unpkg.com/vue&quot;&gt;&lt;/script&gt;\n  &lt;!-- build:js js/vendors.js --&gt;\n  &lt;script src=&quot;/node_modules/balm-ui-lite/components/button.js&quot;&gt;&lt;/script&gt;\n  &lt;script src=&quot;/node_modules/balm-ui-lite/plugins/alert.js&quot;&gt;&lt;/script&gt;\n  &lt;!-- endbuild --&gt;\n  &lt;script&gt;\n  var app = new Vue({\n    el: &#39;#app&#39;,\n    data: {\n      message: &#39;Hello BalmUI&#39;\n    }\n  });\n  &lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;</code></pre>\n<h3 id="23-\u6e90\u7801\u5f15\u7528">2.3 \u6e90\u7801\u5f15\u7528</h3>\n<blockquote>\n<p>\u6253\u5305\u6548\u679c\u540c <strong>\u5b8c\u6574\u5f15\u7528</strong> \u65b9\u6848</p>\n</blockquote>\n<p>\u7f16\u8f91 <code>/path/to/my-project/app/config/balmrc.js</code>\uff0c\u65b0\u589e\u4e0b\u9762\u51e0\u884c\u4ee3\u7801</p>\n<pre><code class="language-js">var path = require(&#39;path&#39;); // \u5f15\u7528path\u5e93\n\nmodule.exports = {\n  ...\n  scripts: {\n    ...\n    alias: {\n      ...\n      &#39;balm-ui-lite&#39;: &#39;balm-ui-lite/src/scripts/index.js&#39; // \u91cd\u65b0\u6307\u5b9a\u5165\u53e3\u6587\u4ef6\n    },\n    include: [path.resolve(&#39;./node_modules/balm-ui-lite/src/scripts&#39;)] // \u6b64\u6587\u4ef6\u5939\u4e2d\u7684\u811a\u672c\u9700\u8981\u7f16\u8bd1ES6+\n  },\n  ...\n};</code></pre>\n<blockquote>\n<p>\u7136\u540e\u4ee3\u7801\u4e2d\u5f15\u7528\u7684 <code>balm-ui-lite</code> \u5c31\u76f4\u63a5\u6307\u5411\u6e90\u4ee3\u7801\u4e86\uff0c\u53ef\u7528\u4e8e\u8c03\u8bd5 BalmUI Lite \u7684\u6e90\u4ee3\u7801</p>\n</blockquote>\n<h2 id="3-\u81ea\u52a8\u83b7\u53d6-ui-\u6240\u9700\u7684\u56fe\u7247\u548c\u5b57\u4f53\u8d44\u6e90">3. \u81ea\u52a8\u83b7\u53d6 UI \u6240\u9700\u7684\u56fe\u7247\u548c\u5b57\u4f53\u8d44\u6e90</h2>\n<p>\u7f16\u8f91 <code>/path/to/my-project/gulpfile.js</code></p>\n<pre><code class="language-js">...\n\nbalm.go(function(mix) {\n  if (balm.config.production) {\n    ...\n  } else {\n    // \u65b0\u589e\u4e0b\u9762\u4e24\u53e5\n    mix.copy(&#39;./node_modules/balm-ui-lite/img/*&#39;, &#39;./app/images&#39;);\n    mix.copy(&#39;./node_modules/balm-ui-lite/font/*&#39;, &#39;./app/fonts&#39;);\n  }\n});</code></pre>\n'},X81u:function(t,e,n){"use strict";n.r(e);var l=n("ERrc"),o=n.n(l),s={metaInfo:{titleTemplate:"%s - \u8fdb\u9636\u7528\u6cd5"},data:function(){return{docs:o.a}}},u=n("KHd+"),i=Object(u.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page--guide guide-advanced only-md-docs"},[e("ui-markdown",{staticClass:"markdown-page",attrs:{text:this.docs}})],1)},[],!1,null,null,null);e.default=i.exports}}]);