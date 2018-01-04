!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="aFQd")}({"+MZ2":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"+SdG":function(t,e,n){var r=n("a/OS")("keys"),i=n("GmwO");t.exports=function(t){return r[t]||(r[t]=i(t))}},"+VX5":function(t,e,n){var r=n("W6Rd"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},"/Q15":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("WMYY"),i=n("4naK"),o=(n.n(i),n("um+A")),a=["toast","snackbar"];e.default={name:"ui-snackbar",mixins:[r.a],props:{active:{type:Boolean,default:!1},message:{type:String,required:!0},type:{type:[Number,String],default:0},timeout:{type:Number,default:2750},actionHandler:Function,actionText:String},data:function(){return{currentActive:this.active,currentMessage:this.message}},computed:{className:function(){return{"mdl-snackbar":!0,"mdl-js-snackbar":!0,"mdl-snackbar--active":this.active}},isSnackbar:function(){var t="string"===Object(o.a)(this.type)?a[1]:1;return this.type===t}},watch:{active:function(t){!this.currentActive&&t&&(this.currentActive=t,this.show())},message:function(t){this.currentMessage=t}},methods:{show:function(){var t=this,e={message:this.currentMessage,timeout:this.timeout};this.isSnackbar&&(e.actionHandler=this.actionHandler,e.actionText=this.actionText),this.$refs.popup.MaterialSnackbar.showSnackbar(e),setTimeout(function(){t.currentActive=!1,t.$emit("done")},this.timeout)}},created:function(){this.isSnackbar&&(this.actionHandler&&this.actionText||console.warn("`actionHandler` and `actionText` is required in a snackbar."))},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSnackbar")}}},"3fMt":function(t,e,n){var r=n("SWGL");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"4naK":function(t,e){!function(){"use strict";var t=function(t){if(this.element_=t,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=t,t.prototype.Constant_={ANIMATION_LENGTH:250},t.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},t.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},t.prototype.showSnackbar=function(t){if(void 0===t)throw new Error("Please provide a data object with at least a message to display.");if(void 0===t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(t):(this.active=!0,this.message_=t.message,t.timeout?this.timeout_=t.timeout:this.timeout_=2750,t.actionHandler&&(this.actionHandler_=t.actionHandler),t.actionText&&(this.actionText_=t.actionText),this.displaySnackbar_())},t.prototype.showSnackbar=t.prototype.showSnackbar,t.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},t.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},t.prototype.setActionHidden_=function(t){t?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},componentHandler.register({constructor:t,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0})}()},"8ANE":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9MbE":function(t,e,n){var r=n("8ANE");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},B5V0:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},DvwR:function(t,e,n){var r=n("x//u"),i=n("ksFB"),o=n("PbQV")(!1),a=n("+SdG")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},Eif7:function(t,e,n){n("JyN8"),t.exports=n("iANj").Object.assign},FKWp:function(t,e,n){var r=n("8ANE");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},GCs6:function(t,e,n){var r=n("FKWp"),i=n("LocR"),o=n("9MbE"),a=Object.defineProperty;e.f=n("qs+f")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},GhAV:function(t,e,n){var r=n("W6Rd"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},GmwO:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},JyN8:function(t,e,n){var r=n("Wdy1");r(r.S+r.F,"Object",{assign:n("xVc6")})},LocR:function(t,e,n){t.exports=!n("qs+f")&&!n("zyKz")(function(){return 7!=Object.defineProperty(n("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},PY1i:function(t,e,n){var r=n("8ANE"),i=n("YjQv").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},PbQV:function(t,e,n){var r=n("ksFB"),i=n("GhAV"),o=n("+VX5");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=i(c.length),l=o(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},SWGL:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},THEY:function(t,e){e.f=Object.getOwnPropertySymbols},"VU/8":function(t,e){t.exports=function(t,e,n,r,i,o){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"===typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=r),l){var f=u.functional,d=f?u.render:u.beforeCreate;f?(u._injectStyles=l,u.render=function(t,e){return l.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:s,options:u}}},W6Rd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},WMYY:function(t,e,n){"use strict";(function(t){var r=n("bjur");n.n(r);t!==window&&(t.componentHandler=window.componentHandler),e.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}}).call(e,n("DuR2"))},Wdy1:function(t,e,n){var r=n("YjQv"),i=n("iANj"),o=n("3fMt"),a=n("aLzV"),s=function(t,e,n){var c,u,l,f=t&s.F,d=t&s.G,p=t&s.S,h=t&s.P,m=t&s.B,v=t&s.W,g=d?i:i[e]||(i[e]={}),b=g.prototype,_=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(c in n)(u=!f&&_&&void 0!==_[c])&&c in g||(l=u?_[c]:n[c],g[c]=d&&"function"!=typeof _[c]?n[c]:m&&u?o(l,r):v&&_[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&b&&!b[c]&&a(b,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},YTz9:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},YjQv:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"a/OS":function(t,e,n){var r=n("YjQv"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},aFQd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("woOf"),i=n.n(r),o=n("um+A"),a=n("ayiF"),s=n.n(a),c={className:"",message:"",timeout:2750},u={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0,r=i()({},c,e),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};document.querySelector(".mdl-toast")||(n=new t({components:{UiSnackbar:s.a},el:document.createElement("div"),template:'<ui-snackbar\n  :class="[\'mdl-toast\', options.className]"\n  :active="active"\n  :message="options.message"\n  :timeout="options.timeout">\n</ui-snackbar>',data:{active:!1,options:r},created:function(){"string"===Object(o.a)(e)?this.options.message=e:"object"===Object(o.a)(e)&&(this.options=i()({},this.options,e)),this.$nextTick(function(){var t=this;document.body.appendChild(this.$el),setTimeout(function(){t.active=!0},200),setTimeout(function(){t.active=!1,setTimeout(function(){document.body.removeChild(t.$el),n=null},200)},n.options.timeout)})}}))};t.prototype.$toast=a}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(u),e.default=u},aLzV:function(t,e,n){var r=n("GCs6"),i=n("YTz9");t.exports=n("qs+f")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},ayiF:function(t,e,n){var r=n("VU/8"),i=n("/Q15"),o=n("rLfk"),a=r(i,o,!1,null,null,null);t.exports=a.exports},bSeU:function(t,e){e.f={}.propertyIsEnumerable},bjur:function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};n=function(){"use strict";function t(t,e){for(var n=0;n<d.length;n++)if(d[n].className===t)return"undefined"!==typeof e&&(d[n]=e),d[n];return!1}function e(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function n(t,n){return-1!==e(t).indexOf(n)}function r(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var r=document.createEvent("Events");return r.initEvent(t,e,n),r}function i(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var r=0;r<d.length;r++)i(d[r].className,d[r].cssClass);else{var a=e;if("undefined"===typeof n){var s=t(a);s&&(n=s.cssClass)}for(var c=document.querySelectorAll("."+n),u=0;u<c.length;u++)o(c[u],a)}}function o(i,o){if(!("object"===typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var a=r("mdl-componentupgrading",!0,!0);if(i.dispatchEvent(a),!a.defaultPrevented){var s=e(i),c=[];if(o)n(i,o)||c.push(t(o));else{var u=i.classList;d.forEach(function(t){u.contains(t.cssClass)&&-1===c.indexOf(t)&&!n(i,t.className)&&c.push(t)})}for(var l,f=0,m=c.length;f<m;f++){if(!(l=c[f]))throw new Error("Unable to find a registered component for the given class.");s.push(l.className),i.setAttribute("data-upgraded",s.join(","));var v=new l.classConstructor(i);v[h]=l,p.push(v);for(var g=0,b=l.callbacks.length;g<b;g++)l.callbacks[g](i);l.widget&&(i[l.className]=v);var _=r("mdl-componentupgraded",!0,!1);i.dispatchEvent(_)}}}function a(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var e,n=0,r=t.length;n<r;n++)(e=t[n])instanceof HTMLElement&&(o(e),e.children.length>0&&a(e.children))}function s(e){var n="undefined"===typeof e.widget&&"undefined"===typeof e.widget,r=!0;n||(r=e.widget||e.widget);var i={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:r,callbacks:[]};if(d.forEach(function(t){if(t.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===i.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");t(e.classAsString,i)||d.push(i)}function c(e,n){var r=t(e);r&&r.callbacks.push(n)}function u(){for(var t=0;t<d.length;t++)i(d[t].className)}function l(t){if(t){var e=p.indexOf(t);p.splice(e,1);var n=t.element_.getAttribute("data-upgraded").split(","),i=n.indexOf(t[h].classAsString);n.splice(i,1),t.element_.setAttribute("data-upgraded",n.join(","));var o=r("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(o)}}function f(t){var e=function(t){p.filter(function(e){return e.element_===t}).forEach(l)};if(t instanceof Array||t instanceof NodeList)for(var n=0;n<t.length;n++)e(t[n]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");e(t)}}var d=[],p=[],h="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:o,upgradeElements:a,upgradeAllRegistered:u,registerUpgradedCallback:c,register:s,downgradeElements:f}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},iANj:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},ksFB:function(t,e,n){var r=n("wiaE"),i=n("+MZ2");t.exports=function(t){return r(i(t))}},pEGt:function(t,e,n){var r=n("DvwR"),i=n("B5V0");t.exports=Object.keys||function(t){return r(t,i)}},"qs+f":function(t,e,n){t.exports=!n("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rLfk:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popup",class:t.className,attrs:{"aria-live":"assertive","aria-atomic":"true","aria-relevant":"text"}},[n("div",{staticClass:"mdl-snackbar__text"},[t._v(t._s(t.currentMessage))]),t._v(" "),n("button",{staticClass:"mdl-snackbar__action",attrs:{type:"button"}},[t._v(t._s(t.actionText))])])},r=[];t.exports={render:n,staticRenderFns:r}},"um+A":function(t,e,n){"use strict";var r=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};e.a=r},wXdB:function(t,e,n){var r=n("+MZ2");t.exports=function(t){return Object(r(t))}},wiaE:function(t,e,n){var r=n("NZra");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},woOf:function(t,e,n){t.exports={default:n("Eif7"),__esModule:!0}},"x//u":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},xVc6:function(t,e,n){"use strict";var r=n("pEGt"),i=n("THEY"),o=n("bSeU"),a=n("wXdB"),s=n("wiaE"),c=Object.assign;t.exports=!c||n("zyKz")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,u=1,l=i.f,f=o.f;c>u;)for(var d,p=s(arguments[u++]),h=l?r(p).concat(l(p)):r(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(n[d]=p[d]);return n}:c},zyKz:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}})});