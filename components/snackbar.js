!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="LtWh")}({"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"/Q15":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("WMYY"),o=n("4naK"),i=(n.n(o),n("um+A")),a=["toast","snackbar"];e.default={name:"ui-snackbar",mixins:[r.a],props:{active:{type:Boolean,default:!1},message:{type:String,required:!0},type:{type:[Number,String],default:0},timeout:{type:Number,default:2750},actionHandler:Function,actionText:String},data:function(){return{currentActive:this.active,currentMessage:this.message}},computed:{className:function(){return{"mdl-snackbar":!0,"mdl-js-snackbar":!0,"mdl-snackbar--active":this.active}},isSnackbar:function(){var t="string"===Object(i.a)(this.type)?a[1]:1;return this.type===t}},watch:{active:function(t){!this.currentActive&&t&&(this.currentActive=t,this.show())},message:function(t){this.currentMessage=t}},methods:{show:function(){var t=this,e={message:this.currentMessage,timeout:this.timeout};this.isSnackbar&&(e.actionHandler=this.actionHandler,e.actionText=this.actionText),this.$refs.popup.MaterialSnackbar.showSnackbar(e),setTimeout(function(){t.currentActive=!1,t.$emit("done")},this.timeout)}},created:function(){this.isSnackbar&&(this.actionHandler&&this.actionText||console.warn("`actionHandler` and `actionText` is required in a snackbar."))},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSnackbar")}}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"4naK":function(t,e){!function(){"use strict";var t=function(t){if(this.element_=t,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=t,t.prototype.Constant_={ANIMATION_LENGTH:250},t.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},t.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},t.prototype.showSnackbar=function(t){if(void 0===t)throw new Error("Please provide a data object with at least a message to display.");if(void 0===t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(t):(this.active=!0,this.message_=t.message,t.timeout?this.timeout_=t.timeout:this.timeout_=2750,t.actionHandler&&(this.actionHandler_=t.actionHandler),t.actionText&&(this.actionText_=t.actionText),this.displaySnackbar_())},t.prototype.showSnackbar=t.prototype.showSnackbar,t.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},t.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},t.prototype.setActionHidden_=function(t){t?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},componentHandler.register({constructor:t,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0})}()},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},Cdx3:function(t,e,n){var r=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(t){return o(r(t))}})},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},EqjI:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},FCHA:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return!!t&&"object"===typeof t}function e(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||n(t)}function n(t){return t.$$typeof===f}function r(t){return Array.isArray(t)?[]:{}}function o(t,e){return e&&!1===e.clone||!c(t)?t:s(r(t),t,e)}function i(t,e,n){return t.concat(e).map(function(t){return o(t,n)})}function a(t,e,n){var r={};return c(t)&&Object.keys(t).forEach(function(e){r[e]=o(t[e],n)}),Object.keys(e).forEach(function(i){c(e[i])&&t[i]?r[i]=s(t[i],e[i],n):r[i]=o(e[i],n)}),r}function s(t,e,n){var r=Array.isArray(e),s=Array.isArray(t),c=n||{arrayMerge:i};if(r===s)return r?(c.arrayMerge||i)(t,e,n):a(t,e,n);return o(e,n)}var c=function(n){return t(n)&&!e(n)},u="function"===typeof Symbol&&Symbol.for,f=u?Symbol.for("react.element"):60103;return s.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return s(t,n,e)},{})},s})},FeBl:function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},FyVN:function(t,e,n){"use strict";var r=n("JWkr"),o=function(t){Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(t,e)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(t.name,t)};e.a=o},Ibhu:function(t,e,n){var r=n("D2L2"),o=n("TcQ7"),i=n("vFc/")(!1),a=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},JWkr:function(t,e,n){"use strict";var r=n("fZjL"),o=n.n(r),i=n("FCHA"),a=n.n(i),s=n("um+A"),c=function(t,e){o()(e).forEach(function(n){if(void 0!==t.props[n]){var r=t.props[n].default;if("object"===Object(s.a)(r))return void(t.props[n].default=a()(r,e[n]));t.props[n].default=e[n]}})};e.a=c},LtWh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("FyVN"),o=n("ayiF"),i=n.n(o);Object(r.a)(i.a),e.default=i.a},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},ON07:function(t,e,n){var r=n("EqjI"),o=n("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},QRG4:function(t,e,n){var r=n("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,e,n){var r=n("MU5D"),o=n("52gC");t.exports=function(t){return r(o(t))}},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"VU/8":function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"===typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=f):r&&(f=r),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(t,e){return f.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:s,options:u}}},WMYY:function(t,e,n){"use strict";(function(t){var r=n("bjur"),o=(n.n(r),"[object process]"===Object.prototype.toString.call("undefined"!==typeof t.process?t.process:0)),i=o&&"test"===t.process.env.NODE_ENV,a=window.componentHandler;i&&(t.componentHandler=a,a=t.componentHandler),e.a={data:function(){return{$mdl:a}},created:function(){this.$mdl||(this.$mdl=a)}}}).call(e,n("DuR2"))},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},ax3d:function(t,e,n){var r=n("e8AB")("keys"),o=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},ayiF:function(t,e,n){var r=n("VU/8"),o=n("/Q15"),i=n("rLfk"),a=r(o,i,!1,null,null,null);t.exports=a.exports},bjur:function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};n=function(){"use strict";function t(t,e){for(var n=0;n<d.length;n++)if(d[n].className===t)return"undefined"!==typeof e&&(d[n]=e),d[n];return!1}function e(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function n(t,n){return-1!==e(t).indexOf(n)}function r(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var r=document.createEvent("Events");return r.initEvent(t,e,n),r}function o(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var r=0;r<d.length;r++)o(d[r].className,d[r].cssClass);else{var a=e;if("undefined"===typeof n){var s=t(a);s&&(n=s.cssClass)}for(var c=document.querySelectorAll("."+n),u=0;u<c.length;u++)i(c[u],a)}}function i(o,i){if(!("object"===typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var a=r("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(a),!a.defaultPrevented){var s=e(o),c=[];if(i)n(o,i)||c.push(t(i));else{var u=o.classList;d.forEach(function(t){u.contains(t.cssClass)&&-1===c.indexOf(t)&&!n(o,t.className)&&c.push(t)})}for(var f,l=0,m=c.length;l<m;l++){if(!(f=c[l]))throw new Error("Unable to find a registered component for the given class.");s.push(f.className),o.setAttribute("data-upgraded",s.join(","));var v=new f.classConstructor(o);v[h]=f,p.push(v);for(var g=0,b=f.callbacks.length;g<b;g++)f.callbacks[g](o);f.widget&&(o[f.className]=v);var y=r("mdl-componentupgraded",!0,!1);o.dispatchEvent(y)}}}function a(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var e,n=0,r=t.length;n<r;n++)(e=t[n])instanceof HTMLElement&&(i(e),e.children.length>0&&a(e.children))}function s(e){var n="undefined"===typeof e.widget&&"undefined"===typeof e.widget,r=!0;n||(r=e.widget||e.widget);var o={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:r,callbacks:[]};if(d.forEach(function(t){if(t.cssClass===o.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===o.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");t(e.classAsString,o)||d.push(o)}function c(e,n){var r=t(e);r&&r.callbacks.push(n)}function u(){for(var t=0;t<d.length;t++)o(d[t].className)}function f(t){if(t){var e=p.indexOf(t);p.splice(e,1);var n=t.element_.getAttribute("data-upgraded").split(","),o=n.indexOf(t[h].classAsString);n.splice(o,1),t.element_.setAttribute("data-upgraded",n.join(","));var i=r("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(i)}}function l(t){var e=function(t){p.filter(function(e){return e.element_===t}).forEach(f)};if(t instanceof Array||t instanceof NodeList)for(var n=0;n<t.length;n++)e(t[n]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");e(t)}}var d=[],p=[],h="mdlComponentConfigInternal_";return{upgradeDom:o,upgradeElement:i,upgradeElements:a,upgradeAllRegistered:u,registerUpgradedCallback:c,register:s,downgradeElements:l}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},e8AB:function(t,e,n){var r=n("7KvD"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},evD5:function(t,e,n){var r=n("77Pl"),o=n("SfB7"),i=n("MmMw"),a=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},fkB2:function(t,e,n){var r=n("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},hJx8:function(t,e,n){var r=n("evD5"),o=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},kM2E:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),i=n("+ZMJ"),a=n("hJx8"),s=function(t,e,n){var c,u,f,l=t&s.F,d=t&s.G,p=t&s.S,h=t&s.P,m=t&s.B,v=t&s.W,g=d?o:o[e]||(o[e]={}),b=g.prototype,y=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(u=!l&&y&&void 0!==y[c])&&c in g||(f=u?y[c]:n[c],g[c]=d&&"function"!=typeof y[c]?n[c]:m&&u?i(f,r):v&&y[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[c]=f,t&s.R&&b&&!b[c]&&a(b,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),o=n("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},rLfk:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popup",class:t.className,attrs:{"aria-live":"assertive","aria-atomic":"true","aria-relevant":"text"}},[n("div",{staticClass:"mdl-snackbar__text"},[t._v(t._s(t.currentMessage))]),t._v(" "),n("button",{staticClass:"mdl-snackbar__action",attrs:{type:"button"}},[t._v(t._s(t.actionText))])])},r=[];t.exports={render:n,staticRenderFns:r}},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},"um+A":function(t,e,n){"use strict";var r=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};e.a=r},uqUo:function(t,e,n){var r=n("kM2E"),o=n("FeBl"),i=n("S82l");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},"vFc/":function(t,e,n){var r=n("TcQ7"),o=n("QRG4"),i=n("fkB2");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=o(c.length),f=i(a,u);if(t&&n!=n){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}})});