(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4/F1":function(t,n,e){"use strict";e.r(n);var l=e("aW9s"),o=e.n(l),i={metaInfo:{titleTemplate:"%s - Kill IE"},data:function(){return{docs:o.a}}},s=e("KHd+"),a=Object(s.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page--guide guide-kill-ie only-md-docs"},[n("ui-markdown",{staticClass:"markdown-page",attrs:{text:this.docs}})],1)},[],!1,null,null,null);n.default=a.exports},aW9s:function(t,n){t.exports='<h2 id="\u62b5\u5236-ie-\u65b9\u6848">\u62b5\u5236 IE \u65b9\u6848</h2>\n<blockquote>\n<p>\u76f4\u63a5 <code>Copy</code> +<code>Paste</code> \u5957\u8def\u5373\u53ef</p>\n</blockquote>\n<pre><code class="language-js">// \u6587\u4ef6\uff1a/path/to/app/scripts/kill-ie.js\nimport { helpers } from &#39;balm-ui-lite&#39;;\n\nconst IE = helpers.detectIE();\n\nconst isIE = IE &amp;&amp; IE &lt; 10; // \u9879\u76ee\u517c\u5bb9\u5230IE10+\n\nconst killIE = () =&gt; {\n  let body = document.getElementsByTagName(&#39;body&#39;)[0];\n  let template = `&lt;div class=&quot;kill-ie&quot;&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div class=&quot;content&quot;&gt;\n          &lt;h1&gt;\u60a8\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u8bf7\u70b9\u51fb&lt;a href=&quot;https://browsehappy.com/&quot;&gt;\u94fe\u63a5&lt;/a&gt;\u5347\u7ea7\u60a8\u7684\u6d4f\u89c8\u5668&lt;/h1&gt;\n          &lt;p&gt;\n            PS\uff1a\u63a8\u8350\u4f7f\u7528&lt;a href=&quot;https://www.google.cn/intl/zh-CN/chrome/&quot;&gt;\u8c37\u6b4c\u6d4f\u89c8\u5668&lt;/a&gt;\uff1b\u5982\u679c\u662f\u53cc\u6838\u6d4f\u89c8\u5668\uff0c\u8bf7\u5207\u6362\u81f3&lt;b&gt;\u6025\u901f\u6a21\u5f0f&lt;/b&gt;\n          &lt;/p&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;`;\n\n  document.getElementsByTagName(&#39;html&#39;)[0].style.height = &#39;100%&#39;;\n  body.style.height = &#39;100%&#39;;\n\n  body.innerHTML = template;\n};\n\nexport { isIE, killIE };</code></pre>\n<pre><code class="language-js">// \u6587\u4ef6\uff1a/path/to/app/scripts/main.js\nimport { isIE, killIE } from &#39;./kill-ie&#39;;\n\nif (isIE) {\n  killIE();\n} else {\n  // your code\n}</code></pre>\n<pre><code class="language-css">/* \u6587\u4ef6\uff1a/path/to/app/styles/global/kill-ie.scss */\n.kill-ie {\n  display: table;\n  width: 100%;\n  height: 80%;\n  a {\n    text-decoration: none;\n    color: red;\n  }\n  b {\n    border-bottom: 1px solid;\n  }\n  .container {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n  }\n  .content {\n    display: inline-block;\n    text-align: center;\n  }\n}</code></pre>\n'}}]);