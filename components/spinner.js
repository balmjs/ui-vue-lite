!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="J37j")}({"+MZ2":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"+SdG":function(e,t,n){var r=n("a/OS")("keys"),o=n("GmwO");e.exports=function(e){return r[e]||(r[e]=o(e))}},"+VX5":function(e,t,n){var r=n("W6Rd"),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},"30vf":function(e,t,n){var r=n("Wdy1"),o=n("iANj"),i=n("zyKz");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],s={};s[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},"3fMt":function(e,t,n){var r=n("SWGL");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"8ANE":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9MbE":function(e,t,n){var r=n("8ANE");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},B5V0:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DuR2:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},DvwR:function(e,t,n){var r=n("x//u"),o=n("ksFB"),i=n("PbQV")(!1),s=n("+SdG")("IE_PROTO");e.exports=function(e,t){var n,a=o(e),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;t.length>c;)r(a,n=t[c++])&&(~i(u,n)||u.push(n));return u}},FCHA:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return!!e&&"object"===typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===f}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return t&&!1===t.clone||!c(e)?e:a(r(e),e,t)}function i(e,t,n){return e.concat(t).map(function(e){return o(e,n)})}function s(e,t,n){var r={};return c(e)&&Object.keys(e).forEach(function(t){r[t]=o(e[t],n)}),Object.keys(t).forEach(function(i){c(t[i])&&e[i]?r[i]=a(e[i],t[i],n):r[i]=o(t[i],n)}),r}function a(e,t,n){var r=Array.isArray(t),a=Array.isArray(e),c=n||{arrayMerge:i};if(r===a)return r?(c.arrayMerge||i)(e,t,n):s(e,t,n);return o(t,n)}var c=function(n){return e(n)&&!t(n)},u="function"===typeof Symbol&&Symbol.for,f=u?Symbol.for("react.element"):60103;return a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return a(e,n,t)},{})},a})},FKWp:function(e,t,n){var r=n("8ANE");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},FyVN:function(e,t,n){"use strict";var r=n("JWkr"),o=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)};t.a=o},GCs6:function(e,t,n){var r=n("FKWp"),o=n("LocR"),i=n("9MbE"),s=Object.defineProperty;t.f=n("qs+f")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},GhAV:function(e,t,n){var r=n("W6Rd"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},GmwO:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},IXB7:function(e,t){var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.className})},r=[];e.exports={render:n,staticRenderFns:r}},J37j:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("FyVN"),o=n("fBjd"),i=n.n(o);Object(r.a)(i.a),t.default=i.a},JWkr:function(e,t,n){"use strict";var r=n("fZjL"),o=n.n(r),i=n("FCHA"),s=n.n(i),a=n("um+A"),c=function(e,t){o()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;if("object"===Object(a.a)(r))return void(e.props[n].default=s()(r,t[n]));e.props[n].default=t[n]}})};t.a=c},LocR:function(e,t,n){e.exports=!n("qs+f")&&!n("zyKz")(function(){return 7!=Object.defineProperty(n("PY1i")("div"),"a",{get:function(){return 7}}).a})},N7H5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("WMYY"),o=n("ujq8");n.n(o);t.default={name:"ui-spinner",mixins:[r.a],props:{active:{type:Boolean,default:!1},singleColor:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-spinner":!0,"mdl-js-spinner":!0,"is-active":this.active,"mdl-spinner--single-color":this.singleColor}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSpinner")}}},NZra:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},PY1i:function(e,t,n){var r=n("8ANE"),o=n("YjQv").document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},PbQV:function(e,t,n){var r=n("ksFB"),o=n("GhAV"),i=n("+VX5");e.exports=function(e){return function(t,n,s){var a,c=r(t),u=o(c.length),f=i(s,u);if(e&&n!=n){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}}},SWGL:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var u="function"===typeof a?a.options:a;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=f):r&&(f=r),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(e,t){return f.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:s,exports:a,options:u}}},W6Rd:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},WMYY:function(e,t,n){"use strict";(function(e){var r=n("bjur");n.n(r);"[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV&&(e.componentHandler=window.componentHandler),t.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}}).call(t,n("DuR2"))},Wdy1:function(e,t,n){var r=n("YjQv"),o=n("iANj"),i=n("3fMt"),s=n("aLzV"),a=function(e,t,n){var c,u,f,l=e&a.F,d=e&a.G,p=e&a.S,v=e&a.P,m=e&a.B,y=e&a.W,h=d?o:o[t]||(o[t]={}),g=h.prototype,_=d?r:p?r[t]:(r[t]||{}).prototype;d&&(n=t);for(c in n)(u=!l&&_&&void 0!==_[c])&&c in h||(f=u?_[c]:n[c],h[c]=d&&"function"!=typeof _[c]?n[c]:m&&u?i(f,r):y&&_[c]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((h.virtual||(h.virtual={}))[c]=f,e&a.R&&g&&!g[c]&&s(g,c,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},YTz9:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},YjQv:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ZhOs:function(e,t,n){n("rZAI"),e.exports=n("iANj").Object.keys},"a/OS":function(e,t,n){var r=n("YjQv"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},aLzV:function(e,t,n){var r=n("GCs6"),o=n("YTz9");e.exports=n("qs+f")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<d.length;n++)if(d[n].className===e)return"undefined"!==typeof t&&(d[n]=t),d[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function r(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function o(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var r=0;r<d.length;r++)o(d[r].className,d[r].cssClass);else{var s=t;if("undefined"===typeof n){var a=e(s);a&&(n=a.cssClass)}for(var c=document.querySelectorAll("."+n),u=0;u<c.length;u++)i(c[u],s)}}function i(o,i){if(!("object"===typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var s=r("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(s),!s.defaultPrevented){var a=t(o),c=[];if(i)n(o,i)||c.push(e(i));else{var u=o.classList;d.forEach(function(e){u.contains(e.cssClass)&&-1===c.indexOf(e)&&!n(o,e.className)&&c.push(e)})}for(var f,l=0,m=c.length;l<m;l++){if(!(f=c[l]))throw new Error("Unable to find a registered component for the given class.");a.push(f.className),o.setAttribute("data-upgraded",a.join(","));var y=new f.classConstructor(o);y[v]=f,p.push(y);for(var h=0,g=f.callbacks.length;h<g;h++)f.callbacks[h](o);f.widget&&(o[f.className]=y);var _=r("mdl-componentupgraded",!0,!1);o.dispatchEvent(_)}}}function s(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,r=e.length;n<r;n++)(t=e[n])instanceof HTMLElement&&(i(t),t.children.length>0&&s(t.children))}function a(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,r=!0;n||(r=t.widget||t.widget);var o={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(d.forEach(function(e){if(e.cssClass===o.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===o.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(v))throw new Error("MDL component classes must not have "+v+" defined as a property.");e(t.classAsString,o)||d.push(o)}function c(t,n){var r=e(t);r&&r.callbacks.push(n)}function u(){for(var e=0;e<d.length;e++)o(d[e].className)}function f(e){if(e){var t=p.indexOf(e);p.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),o=n.indexOf(e[v].classAsString);n.splice(o,1),e.element_.setAttribute("data-upgraded",n.join(","));var i=r("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(i)}}function l(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(f)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var d=[],p=[],v="mdlComponentConfigInternal_";return{upgradeDom:o,upgradeElement:i,upgradeElements:s,upgradeAllRegistered:u,registerUpgradedCallback:c,register:a,downgradeElements:l}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},fBjd:function(e,t,n){var r=n("VU/8"),o=n("N7H5"),i=n("IXB7"),s=r(o,i,!1,null,null,null);e.exports=s.exports},fZjL:function(e,t,n){e.exports={default:n("ZhOs"),__esModule:!0}},iANj:function(e,t){var n=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},ksFB:function(e,t,n){var r=n("wiaE"),o=n("+MZ2");e.exports=function(e){return r(o(e))}},pEGt:function(e,t,n){var r=n("DvwR"),o=n("B5V0");e.exports=Object.keys||function(e){return r(e,o)}},"qs+f":function(e,t,n){e.exports=!n("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rZAI:function(e,t,n){var r=n("wXdB"),o=n("pEGt");n("30vf")("keys",function(){return function(e){return o(r(e))}})},ujq8:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSpinner=e,e.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},e.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},e.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),o.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var i=[n,r,o],s=0;s<i.length;s++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),i[s].appendChild(a)}t.appendChild(n),t.appendChild(r),t.appendChild(o),this.element_.appendChild(t)},e.prototype.createLayer=e.prototype.createLayer,e.prototype.stop=function(){this.element_.classList.remove("is-active")},e.prototype.stop=e.prototype.stop,e.prototype.start=function(){this.element_.classList.add("is-active")},e.prototype.start=e.prototype.start,e.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}()},"um+A":function(e,t,n){"use strict";var r=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};t.a=r},wXdB:function(e,t,n){var r=n("+MZ2");e.exports=function(e){return Object(r(e))}},wiaE:function(e,t,n){var r=n("NZra");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},"x//u":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},zyKz:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}}})});