!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="vNOR")}({"+E39":function(e,t,n){e.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(e,t,n){var r=n("lOnJ");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"2DXj":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("WMYY"),o=n("aD+M");n.n(o);t.default={name:"ui-slider",mixins:[r.a],props:{model:{type:Number,default:0},min:{type:[Number,String],default:0},max:{type:[Number,String],default:1},step:{type:[Number,String],default:1},disabled:{type:Boolean,default:!1}},data:function(){return{$slider:null,currentValue:this.model}},computed:{className:function(){return{"mdl-slider":!0,"mdl-js-slider":!0,"mdl-slider--disabled":this.disabled}}},watch:{model:function(e){this.currentValue=e}},methods:{handleChange:function(){var e=+this.$slider.element_.value;this.$slider.change(e),this.$emit("change",e)}},mounted:function(){this.$slider||(this.$mdl.upgradeElement(this.$el,"MaterialSlider"),this.$slider=this.$el.MaterialSlider,this.$slider.value=this.currentValue)}}},"3Eo+":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},"52gC":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"77Pl":function(e,t,n){var r=n("EqjI");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"7KvD":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},Cdx3:function(e,t,n){var r=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(e){return o(r(e))}})},D2L2:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},DuR2:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},EqjI:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},FCHA:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return!!e&&"object"===typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===l}function r(e){return Array.isArray(e)?[]:{}}function o(e,t){return t&&!1===t.clone||!u(e)?e:a(r(e),e,t)}function i(e,t,n){return e.concat(t).map(function(e){return o(e,n)})}function s(e,t,n){var r={};return u(e)&&Object.keys(e).forEach(function(t){r[t]=o(e[t],n)}),Object.keys(t).forEach(function(i){u(t[i])&&e[i]?r[i]=a(e[i],t[i],n):r[i]=o(t[i],n)}),r}function a(e,t,n){var r=Array.isArray(t),a=Array.isArray(e),u=n||{arrayMerge:i};if(r===a)return r?(u.arrayMerge||i)(e,t,n):s(e,t,n);return o(t,n)}var u=function(n){return e(n)&&!t(n)},c="function"===typeof Symbol&&Symbol.for,l=c?Symbol.for("react.element"):60103;return a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return a(e,n,t)},{})},a})},FeBl:function(e,t){var n=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},FyVN:function(e,t,n){"use strict";var r=n("JWkr"),o=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)};t.a=o},Ibhu:function(e,t,n){var r=n("D2L2"),o=n("TcQ7"),i=n("vFc/")(!1),s=n("ax3d")("IE_PROTO");e.exports=function(e,t){var n,a=o(e),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;t.length>u;)r(a,n=t[u++])&&(~i(c,n)||c.push(n));return c}},JWkr:function(e,t,n){"use strict";var r=n("fZjL"),o=n.n(r),i=n("FCHA"),s=n.n(i),a=n("um+A"),u=function(e,t){o()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;if("object"===Object(a.a)(r))return void(e.props[n].default=s()(r,t[n]));e.props[n].default=t[n]}})};t.a=u},MU5D:function(e,t,n){var r=n("R9M2");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},MmMw:function(e,t,n){var r=n("EqjI");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},ON07:function(e,t,n){var r=n("EqjI"),o=n("7KvD").document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},QRG4:function(e,t,n){var r=n("UuGF"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},R9M2:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},S82l:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},SfB7:function(e,t,n){e.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(e,t,n){var r=n("MU5D"),o=n("52gC");e.exports=function(e){return r(o(e))}},UuGF:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"===typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:a,options:c}}},WMYY:function(e,t,n){"use strict";(function(e){var r=n("bjur"),o=(n.n(r),"[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)),i=o&&"test"===e.process.env.NODE_ENV,s=window.componentHandler;i&&(e.componentHandler=s,s=e.componentHandler),t.a={data:function(){return{$mdl:s}},created:function(){this.$mdl||(this.$mdl=s)}}}).call(t,n("DuR2"))},X8DO:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"aD+M":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=e,e.prototype.Constant_={},e.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},e.prototype.onInput_=function(e){this.updateValueStyles_()},e.prototype.onChange_=function(e){this.updateValueStyles_()},e.prototype.onMouseUp_=function(e){e.target.blur()},e.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},e.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},e.prototype.disable=function(){this.element_.disabled=!0},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.element_.disabled=!1},e.prototype.enable=e.prototype.enable,e.prototype.change=function(e){"undefined"!==typeof e&&(this.element_.value=e),this.updateValueStyles_()},e.prototype.change=e.prototype.change,e.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var n=document.createElement("div");n.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(n),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),n.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),n.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},componentHandler.register({constructor:e,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0})}()},ax3d:function(e,t,n){var r=n("e8AB")("keys"),o=n("3Eo+");e.exports=function(e){return r[e]||(r[e]=o(e))}},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<f.length;n++)if(f[n].className===e)return"undefined"!==typeof t&&(f[n]=t),f[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function r(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function o(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var r=0;r<f.length;r++)o(f[r].className,f[r].cssClass);else{var s=t;if("undefined"===typeof n){var a=e(s);a&&(n=a.cssClass)}for(var u=document.querySelectorAll("."+n),c=0;c<u.length;c++)i(u[c],s)}}function i(o,i){if(!("object"===typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var s=r("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(s),!s.defaultPrevented){var a=t(o),u=[];if(i)n(o,i)||u.push(e(i));else{var c=o.classList;f.forEach(function(e){c.contains(e.cssClass)&&-1===u.indexOf(e)&&!n(o,e.className)&&u.push(e)})}for(var l,d=0,m=u.length;d<m;d++){if(!(l=u[d]))throw new Error("Unable to find a registered component for the given class.");a.push(l.className),o.setAttribute("data-upgraded",a.join(","));var v=new l.classConstructor(o);v[h]=l,p.push(v);for(var g=0,_=l.callbacks.length;g<_;g++)l.callbacks[g](o);l.widget&&(o[l.className]=v);var y=r("mdl-componentupgraded",!0,!1);o.dispatchEvent(y)}}}function s(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,r=e.length;n<r;n++)(t=e[n])instanceof HTMLElement&&(i(t),t.children.length>0&&s(t.children))}function a(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,r=!0;n||(r=t.widget||t.widget);var o={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(f.forEach(function(e){if(e.cssClass===o.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===o.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");e(t.classAsString,o)||f.push(o)}function u(t,n){var r=e(t);r&&r.callbacks.push(n)}function c(){for(var e=0;e<f.length;e++)o(f[e].className)}function l(e){if(e){var t=p.indexOf(e);p.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),o=n.indexOf(e[h].classAsString);n.splice(o,1),e.element_.setAttribute("data-upgraded",n.join(","));var i=r("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(i)}}function d(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(l)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var f=[],p=[],h="mdlComponentConfigInternal_";return{upgradeDom:o,upgradeElement:i,upgradeElements:s,upgradeAllRegistered:c,registerUpgradedCallback:u,register:a,downgradeElements:d}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},e8AB:function(e,t,n){var r=n("7KvD"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},evD5:function(e,t,n){var r=n("77Pl"),o=n("SfB7"),i=n("MmMw"),s=Object.defineProperty;t.f=n("+E39")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},fZjL:function(e,t,n){e.exports={default:n("jFbC"),__esModule:!0}},fkB2:function(e,t,n){var r=n("UuGF"),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},hJx8:function(e,t,n){var r=n("evD5"),o=n("X8DO");e.exports=n("+E39")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},jFbC:function(e,t,n){n("Cdx3"),e.exports=n("FeBl").Object.keys},kM2E:function(e,t,n){var r=n("7KvD"),o=n("FeBl"),i=n("+ZMJ"),s=n("hJx8"),a=function(e,t,n){var u,c,l,d=e&a.F,f=e&a.G,p=e&a.S,h=e&a.P,m=e&a.B,v=e&a.W,g=f?o:o[t]||(o[t]={}),_=g.prototype,y=f?r:p?r[t]:(r[t]||{}).prototype;f&&(n=t);for(u in n)(c=!d&&y&&void 0!==y[u])&&u in g||(l=c?y[u]:n[u],g[u]=f&&"function"!=typeof y[u]?n[u]:m&&c?i(l,r):v&&y[u]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[u]=l,e&a.R&&_&&!_[u]&&s(_,u,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},lOnJ:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},lQop:function(e,t,n){var r=n("VU/8"),o=n("2DXj"),i=n("qEt5"),s=r(o,i,!1,null,null,null);e.exports=s.exports},lktj:function(e,t,n){var r=n("Ibhu"),o=n("xnc9");e.exports=Object.keys||function(e){return r(e,o)}},qEt5:function(e,t){var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{class:e.className,attrs:{type:"range",min:e.min,max:e.max,step:e.step,disabled:e.disabled},domProps:{value:e.currentValue},on:{change:e.handleChange}})},r=[];e.exports={render:n,staticRenderFns:r}},sB3e:function(e,t,n){var r=n("52gC");e.exports=function(e){return Object(r(e))}},"um+A":function(e,t,n){"use strict";var r=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};t.a=r},uqUo:function(e,t,n){var r=n("kM2E"),o=n("FeBl"),i=n("S82l");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],s={};s[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},"vFc/":function(e,t,n){var r=n("TcQ7"),o=n("QRG4"),i=n("fkB2");e.exports=function(e){return function(t,n,s){var a,u=r(t),c=o(u.length),l=i(s,c);if(e&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},vNOR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("FyVN"),o=n("lQop"),i=n.n(o);Object(r.a)(i.a),t.default=i.a},xnc9:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}})});