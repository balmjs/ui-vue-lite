!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUILite=n():t.BalmUILite=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s="TGVO")}({"+E39":function(t,n,e){t.exports=!e("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,n,e){var r=e("lOnJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"3Eo+":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"52gC":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"5yJQ":function(t,n){var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"mdl-chip__action",attrs:{href:"javascript:void(0);"},on:{click:t.handleClick}},[t._t("default",[e("i",{staticClass:"material-icons"},[t._v("cancel")])])],2)},r=[];t.exports={render:e,staticRenderFns:r}},"77Pl":function(t,n,e){var r=e("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"7NJn":function(t,n){var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",{staticClass:"mdl-chip__contact"},[t._t("default")],2)},r=[];t.exports={render:e,staticRenderFns:r}},"A/6j":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={name:"ui-chip-action",methods:{handleClick:function(t){this.$emit("click",t)}}}},BHxx:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"ui-chip-text"}},Cdx3:function(t,n,e){var r=e("sB3e"),o=e("lktj");e("uqUo")("keys",function(){return function(t){return o(r(t))}})},D2L2:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},EqjI:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},FCHA:function(t,n,e){!function(n,e){t.exports=e()}(0,function(){"use strict";function t(t){return!!t&&"object"===typeof t}function n(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||e(t)}function e(t){return t.$$typeof===s}function r(t){return Array.isArray(t)?[]:{}}function o(t,n){return n&&!1===n.clone||!f(t)?t:c(r(t),t,n)}function i(t,n,e){return t.concat(n).map(function(t){return o(t,e)})}function u(t,n,e){var r={};return f(t)&&Object.keys(t).forEach(function(n){r[n]=o(t[n],e)}),Object.keys(n).forEach(function(i){f(n[i])&&t[i]?r[i]=c(t[i],n[i],e):r[i]=o(n[i],e)}),r}function c(t,n,e){var r=Array.isArray(n),c=Array.isArray(t),f=e||{arrayMerge:i};if(r===c)return r?(f.arrayMerge||i)(t,n,e):u(t,n,e);return o(n,e)}var f=function(e){return t(e)&&!n(e)},a="function"===typeof Symbol&&Symbol.for,s=a?Symbol.for("react.element"):60103;return c.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return c(t,e,n)},{})},c})},FeBl:function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},H9gW:function(t,n,e){"use strict";var r=e("fZjL"),o=e.n(r),i=e("JWkr"),u=function(t,n){o()(n).forEach(function(e){if(void 0!==t[e]){var r=t[e],o=n[e];Object(i.a)(r,o)}})},c=u,f=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(t,n)}}}),"undefined"!==typeof window&&window.Vue)for(var n in t){var e=t[n];window.Vue.component(e.name,e)}};n.a=f},Ibhu:function(t,n,e){var r=e("D2L2"),o=e("TcQ7"),i=e("vFc/")(!1),u=e("ax3d")("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},J3dz:function(t,n,e){var r=e("VU/8"),o=e("ogKM"),i=e("7NJn"),u=r(o,i,!1,null,null,null);t.exports=u.exports},JWkr:function(t,n,e){"use strict";var r=e("fZjL"),o=e.n(r),i=e("FCHA"),u=e.n(i),c=e("um+A"),f=function(t,n){o()(n).forEach(function(e){if(void 0!==t.props[e]){var r=t.props[e].default;if("object"===Object(c.a)(r))return void(t.props[e].default=u()(r,n[e]));t.props[e].default=n[e]}})};n.a=f},MU5D:function(t,n,e){var r=e("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},ON07:function(t,n,e){var r=e("EqjI"),o=e("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},QRG4:function(t,n,e){var r=e("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},R9M2:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},S82l:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,n,e){t.exports=!e("+E39")&&!e("S82l")(function(){return 7!=Object.defineProperty(e("ON07")("div"),"a",{get:function(){return 7}}).a})},TGVO:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("H9gW"),o=e("XjkK"),i=e.n(o),u=e("xdkQ"),c=e.n(u),f=e("Z9rX"),a=e.n(f),s=e("J3dz"),l=e.n(s);e.d(n,"UiChip",function(){return i.a}),e.d(n,"UiChipText",function(){return c.a}),e.d(n,"UiChipAction",function(){return a.a}),e.d(n,"UiChipContact",function(){return l.a});var p={UiChip:i.a,UiChipText:c.a,UiChipAction:a.a,UiChipContact:l.a};Object(r.a)(p),n.default=p},TcQ7:function(t,n,e){var r=e("MU5D"),o=e("52gC");t.exports=function(t){return r(o(t))}},UuGF:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"VU/8":function(t,n){t.exports=function(t,n,e,r,o,i){var u,c=t=t||{},f=typeof t.default;"object"!==f&&"function"!==f||(u=t,c=t.default);var a="function"===typeof c?c.options:c;n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._compiled=!0),e&&(a.functional=!0),o&&(a._scopeId=o);var s;if(i?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},a._ssrRegister=s):r&&(s=r),s){var l=a.functional,p=l?a.render:a.beforeCreate;l?(a._injectStyles=s,a.render=function(t,n){return s.call(n),p(t,n)}):a.beforeCreate=p?[].concat(p,s):[s]}return{esModule:u,exports:c,options:a}}},X8DO:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},XjkK:function(t,n,e){var r=e("VU/8"),o=e("xeFm"),i=e("YhIe"),u=r(o,i,!1,null,null,null);t.exports=u.exports},YhIe:function(t,n){var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",{class:t.className},[t._t("default")],2)},r=[];t.exports={render:e,staticRenderFns:r}},Z9rX:function(t,n,e){var r=e("VU/8"),o=e("A/6j"),i=e("5yJQ"),u=r(o,i,!1,null,null,null);t.exports=u.exports},ax3d:function(t,n,e){var r=e("e8AB")("keys"),o=e("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},bDzr:function(t,n){var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",{staticClass:"mdl-chip__text"},[t._t("default")],2)},r=[];t.exports={render:e,staticRenderFns:r}},e8AB:function(t,n,e){var r=e("7KvD"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},evD5:function(t,n,e){var r=e("77Pl"),o=e("SfB7"),i=e("MmMw"),u=Object.defineProperty;n.f=e("+E39")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},fZjL:function(t,n,e){t.exports={default:e("jFbC"),__esModule:!0}},fkB2:function(t,n,e){var r=e("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},hJx8:function(t,n,e){var r=e("evD5"),o=e("X8DO");t.exports=e("+E39")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},jFbC:function(t,n,e){e("Cdx3"),t.exports=e("FeBl").Object.keys},kM2E:function(t,n,e){var r=e("7KvD"),o=e("FeBl"),i=e("+ZMJ"),u=e("hJx8"),c=function(t,n,e){var f,a,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,x=p?o:o[n]||(o[n]={}),_=x.prototype,b=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(f in e)(a=!l&&b&&void 0!==b[f])&&f in x||(s=a?b[f]:e[f],x[f]=p&&"function"!=typeof b[f]?e[f]:h&&a?i(s,r):y&&b[f]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((x.virtual||(x.virtual={}))[f]=s,t&c.R&&_&&!_[f]&&u(_,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},lOnJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,n,e){var r=e("Ibhu"),o=e("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},ogKM:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"ui-chip-contact"}},sB3e:function(t,n,e){var r=e("52gC");t.exports=function(t){return Object(r(t))}},"um+A":function(t,n,e){"use strict";var r=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};n.a=r},uqUo:function(t,n,e){var r=e("kM2E"),o=e("FeBl"),i=e("S82l");t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},"vFc/":function(t,n,e){var r=e("TcQ7"),o=e("QRG4"),i=e("fkB2");t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},xdkQ:function(t,n,e){var r=e("VU/8"),o=e("BHxx"),i=e("bDzr"),u=r(o,i,!1,null,null,null);t.exports=u.exports},xeFm:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"ui-chip",props:{contact:{type:Boolean,default:!1},action:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-chip":!0,"mdl-chip--contact":this.contact,"mdl-chip--deletable":this.action}}}}},xnc9:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}})});