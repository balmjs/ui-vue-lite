(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JPst:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var a=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),s=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(s).concat([a]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(var i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="(".concat(o[2],") and (").concat(n,")")),t.push(o))}},t}},LboF:function(e,t,n){"use strict";var r={},a=function(){var e;return function(){return"undefined"===typeof e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e}}(),s=function(){var e={};return function(t){if("undefined"===typeof e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[t]=n}return e[t]}}();function i(e,t){for(var n=[],r={},a=0;a<e.length;a++){var s=e[a],i=t.base?s[0]+t.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(o):n.push(r[i]={id:i,parts:[o]})}return n}function o(e,t){for(var n=0;n<e.length;n++){var a=e[n],s=r[a.id],i=0;if(s){for(s.refs++;i<s.parts.length;i++)s.parts[i](a.parts[i]);for(;i<a.parts.length;i++)s.parts.push(d(a.parts[i],t))}else{for(var o=[];i<a.parts.length;i++)o.push(d(a.parts[i],t));r[a.id]={id:a.id,refs:1,parts:o}}}}function c(e){var t=document.createElement("style");if("undefined"===typeof e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"===typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function l(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}var f=null,p=0;function d(e,t){var n,r,a;if(t.singleton){var s=p++;n=f||(f=c(t)),r=l.bind(null,n,s,!1),a=l.bind(null,n,s,!0)}else n=c(t),r=function(e,t,n){var r=n.css,a=n.media,s=n.sourceMap;if(a&&e.setAttribute("media",a),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).attributes="object"===typeof t.attributes?t.attributes:{},t.singleton||"boolean"===typeof t.singleton||(t.singleton=a());var n=i(e,t);return o(n,t),function(e){for(var a=[],s=0;s<n.length;s++){var c=n[s],u=r[c.id];u&&(u.refs--,a.push(u))}e&&o(i(e,t),t);for(var l=0;l<a.length;l++){var f=a[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete r[f.id]}}}}},PaPr:function(e,t,n){var r=n("q3qi");"string"===typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n("LboF")(r,a);r.locals&&(e.exports=r.locals)},luxq:function(e,t,n){"use strict";var r=n("PaPr");n.n(r).a},q3qi:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"\n.images {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 1em 0 0 1em;\n}\n.images > span {\n  display: -ms-flexbox;\n  display: flex;\n  width: 10%;\n  padding-right: 1em;\n  margin-bottom: 1em;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.images [data-src] {\n  display: block;\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n}\n",""])},re4y:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),s=n("yXPU"),i=n.n(s),o={validations:{name:{label:"Username",validator:"required,customRule1,customRule2,customRule3",customRule1:{validate:function(e){return e.length>6},message:"min length < 6"},customRule2:{validate:function(e){return/^\d+$/g.test(e)},message:function(){return this.msg}}}},data:function(){return{url:"https://jsonplaceholder.typicode.com/posts",files:[],formData:{name:""},msg:"must be numbers",progress:0}},methods:{submit:function(){var e=Object.assign({},this.formData),t=this.$validate(e);console.log(e,t)},upload:function(){var e=i()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$http.post(this.url,{file:t.sourceFile});case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),onChange:function(e){this.files=e}}},c=(n("luxq"),n("KHd+")),u=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page--test"},[n("fieldset",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"form-test"},[n("legend",[e._v("Form test")]),e._v(" "),n("div",{staticClass:"form-item"},[n("ui-textfield",{attrs:{label:"Input..."},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),n("div",{staticClass:"form-action"},[n("ui-button",{on:{click:e.submit}},[e._v("Submit")])],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{width:"50%"}},[n("ui-file",{attrs:{multiple:"",preview:""},on:{change:e.onChange}}),e._v(" "),n("ul",e._l(e.files,function(t){return n("li",{key:t.uid},[n("img",{attrs:{src:t.previewSrc}}),e._v(" "),n("span",[e._v(e._s(t.name)+" -- "+e._s(t.size)+" b")]),e._v(" "),n("span",[e._v(e._s(t.type))])])}),0)],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.progress,expression:"progress"}],attrs:{type:"range"},domProps:{value:e.progress},on:{__r:function(t){e.progress=t.target.value}}}),e._v(" "),n("div",{staticStyle:{width:"200px",height:"200px"}},[n("ui-circle",{attrs:{progress:e.progress,strokeWidth:30,animate:!0}},[e._v(e._s(e.progress)+" %")])],1)])},[],!1,null,null,null);t.default=u.exports}}]);