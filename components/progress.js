!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}("undefined"!==typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="AvWe")}({"+E39":function(e,t,n){e.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(e,t,n){var r=n("lOnJ");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"3Eo+":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},"52gC":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"77Pl":function(e,t,n){var r=n("EqjI");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"7KvD":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},AvWe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("FyVN"),o=n("WMYY"),i=(n("JiyB"),{name:"ui-progress",mixins:[o.a],props:{active:{type:Boolean,default:!1},progress:{type:[Number,String],default:0},buffer:{type:[Number,String],default:0}},data:function(){return{$progress:null}},watch:{progress:function(e){this.$progress.setProgress(e)},buffer:function(e){this.$progress.setBuffer(e)}},computed:{className:function(){return{"mdl-progress":!0,"mdl-js-progress":!0,"mdl-progress--indeterminate":this.active}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialProgress"),this.$progress||(this.$progress=this.$el.MaterialProgress,this.progress&&this.$progress.setProgress(this.progress),this.buffer&&this.$progress.setBuffer(this.buffer))}}),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.className})},u=[],a=n("XyMi"),c=Object(a.a)(i,s,u,!1,null,null,null),f=c.exports;Object(r.a)(f);t.default=f},Cdx3:function(e,t,n){var r=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(e){return o(r(e))}})},D2L2:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},DuR2:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},EqjI:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},FCHA:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return!!e&&"object"===typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===f}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return t&&!1===t.clone||!a(e)?e:u(r(e),e,t)}function i(e,t,n){return e.concat(t).map(function(e){return o(e,n)})}function s(e,t,n){var r={};return a(e)&&Object.keys(e).forEach(function(t){r[t]=o(e[t],n)}),Object.keys(t).forEach(function(i){a(t[i])&&e[i]?r[i]=u(e[i],t[i],n):r[i]=o(t[i],n)}),r}function u(e,t,n){var r=Array.isArray(t),u=Array.isArray(e),a=n||{arrayMerge:i};if(r===u)return r?(a.arrayMerge||i)(e,t,n):s(e,t,n);return o(t,n)}var a=function(n){return e(n)&&!t(n)},c="function"===typeof Symbol&&Symbol.for,f=c?Symbol.for("react.element"):60103;return u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return u(e,n,t)},{})},u})},FeBl:function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},FyVN:function(e,t,n){"use strict";var r=n("JWkr"),o=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)};t.a=o},Ibhu:function(e,t,n){var r=n("D2L2"),o=n("TcQ7"),i=n("vFc/")(!1),s=n("ax3d")("IE_PROTO");e.exports=function(e,t){var n,u=o(e),a=0,c=[];for(n in u)n!=s&&r(u,n)&&c.push(n);for(;t.length>a;)r(u,n=t[a++])&&(~i(c,n)||c.push(n));return c}},JWkr:function(e,t,n){"use strict";var r=n("fZjL"),o=n.n(r),i=n("FCHA"),s=n.n(i),u=n("um+A"),a=function(e,t){o()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;if("object"===Object(u.a)(r))return void(e.props[n].default=s()(r,t[n]));e.props[n].default=t[n]}})};t.a=a},JiyB:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialProgress=e,e.prototype.Constant_={},e.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},e.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},e.prototype.setProgress=e.prototype.setProgress,e.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},e.prototype.setBuffer=e.prototype.setBuffer,e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})}()},MU5D:function(e,t,n){var r=n("R9M2");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},MmMw:function(e,t,n){var r=n("EqjI");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},ON07:function(e,t,n){var r=n("EqjI"),o=n("7KvD").document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},QRG4:function(e,t,n){var r=n("UuGF"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},R9M2:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},S82l:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},SfB7:function(e,t,n){e.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(e,t,n){var r=n("MU5D"),o=n("52gC");e.exports=function(e){return r(o(e))}},UuGF:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},WMYY:function(e,t,n){"use strict";(function(e){var r=n("bjur"),o=(n.n(r),"[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)),i=o&&"test"===e.process.env.NODE_ENV,s=window.componentHandler;i&&(e.componentHandler=s,s=e.componentHandler),t.a={data:function(){return{$mdl:s}},created:function(){this.$mdl||(this.$mdl=s)}}}).call(t,n("DuR2"))},X8DO:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},XyMi:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,u){e=e||{};var a=typeof e.default;"object"!==a&&"function"!==a||(e=e.default);var c="function"===typeof e?e.options:e;t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i);var f;if(s?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(c.functional){c._injectStyles=f;var l=c.render;c.render=function(e,t){return f.call(t),l(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,f):[f]}return{exports:e,options:c}}t.a=r},ax3d:function(e,t,n){var r=n("e8AB")("keys"),o=n("3Eo+");e.exports=function(e){return r[e]||(r[e]=o(e))}},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<p.length;n++)if(p[n].className===e)return"undefined"!==typeof t&&(p[n]=t),p[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function r(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function o(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var r=0;r<p.length;r++)o(p[r].className,p[r].cssClass);else{var s=t;if("undefined"===typeof n){var u=e(s);u&&(n=u.cssClass)}for(var a=document.querySelectorAll("."+n),c=0;c<a.length;c++)i(a[c],s)}}function i(o,i){if(!("object"===typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var s=r("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(s),!s.defaultPrevented){var u=t(o),a=[];if(i)n(o,i)||a.push(e(i));else{var c=o.classList;p.forEach(function(e){c.contains(e.cssClass)&&-1===a.indexOf(e)&&!n(o,e.className)&&a.push(e)})}for(var f,l=0,m=a.length;l<m;l++){if(!(f=a[l]))throw new Error("Unable to find a registered component for the given class.");u.push(f.className),o.setAttribute("data-upgraded",u.join(","));var v=new f.classConstructor(o);v[g]=f,d.push(v);for(var h=0,y=f.callbacks.length;h<y;h++)f.callbacks[h](o);f.widget&&(o[f.className]=v);var b=r("mdl-componentupgraded",!0,!1);o.dispatchEvent(b)}}}function s(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,r=e.length;n<r;n++)(t=e[n])instanceof HTMLElement&&(i(t),t.children.length>0&&s(t.children))}function u(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,r=!0;n||(r=t.widget||t.widget);var o={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(p.forEach(function(e){if(e.cssClass===o.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===o.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(g))throw new Error("MDL component classes must not have "+g+" defined as a property.");e(t.classAsString,o)||p.push(o)}function a(t,n){var r=e(t);r&&r.callbacks.push(n)}function c(){for(var e=0;e<p.length;e++)o(p[e].className)}function f(e){if(e){var t=d.indexOf(e);d.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),o=n.indexOf(e[g].classAsString);n.splice(o,1),e.element_.setAttribute("data-upgraded",n.join(","));var i=r("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(i)}}function l(e){var t=function(e){d.filter(function(t){return t.element_===e}).forEach(f)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var p=[],d=[],g="mdlComponentConfigInternal_";return{upgradeDom:o,upgradeElement:i,upgradeElements:s,upgradeAllRegistered:c,registerUpgradedCallback:a,register:u,downgradeElements:l}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},e8AB:function(e,t,n){var r=n("7KvD"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},evD5:function(e,t,n){var r=n("77Pl"),o=n("SfB7"),i=n("MmMw"),s=Object.defineProperty;t.f=n("+E39")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},fZjL:function(e,t,n){e.exports={default:n("jFbC"),__esModule:!0}},fkB2:function(e,t,n){var r=n("UuGF"),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},hJx8:function(e,t,n){var r=n("evD5"),o=n("X8DO");e.exports=n("+E39")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},jFbC:function(e,t,n){n("Cdx3"),e.exports=n("FeBl").Object.keys},kM2E:function(e,t,n){var r=n("7KvD"),o=n("FeBl"),i=n("+ZMJ"),s=n("hJx8"),u=function(e,t,n){var a,c,f,l=e&u.F,p=e&u.G,d=e&u.S,g=e&u.P,m=e&u.B,v=e&u.W,h=p?o:o[t]||(o[t]={}),y=h.prototype,b=p?r:d?r[t]:(r[t]||{}).prototype;p&&(n=t);for(a in n)(c=!l&&b&&void 0!==b[a])&&a in h||(f=c?b[a]:n[a],h[a]=p&&"function"!=typeof b[a]?n[a]:m&&c?i(f,r):v&&b[a]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):g&&"function"==typeof f?i(Function.call,f):f,g&&((h.virtual||(h.virtual={}))[a]=f,e&u.R&&y&&!y[a]&&s(y,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},lOnJ:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},lktj:function(e,t,n){var r=n("Ibhu"),o=n("xnc9");e.exports=Object.keys||function(e){return r(e,o)}},sB3e:function(e,t,n){var r=n("52gC");e.exports=function(e){return Object(r(e))}},"um+A":function(e,t,n){"use strict";var r=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};t.a=r},uqUo:function(e,t,n){var r=n("kM2E"),o=n("FeBl"),i=n("S82l");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],s={};s[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},"vFc/":function(e,t,n){var r=n("TcQ7"),o=n("QRG4"),i=n("fkB2");e.exports=function(e){return function(t,n,s){var u,a=r(t),c=o(a.length),f=i(s,c);if(e&&n!=n){for(;c>f;)if((u=a[f++])!=u)return!0}else for(;c>f;f++)if((e||f in a)&&a[f]===n)return e||f||0;return!e&&-1}}},xnc9:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}})});