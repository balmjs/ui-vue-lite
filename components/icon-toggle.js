!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="h6M0")}({"+MZ2":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"+SdG":function(e,t,n){var r=n("a/OS")("keys"),i=n("GmwO");e.exports=function(e){return r[e]||(r[e]=i(e))}},"+VX5":function(e,t,n){var r=n("W6Rd"),i=Math.max,s=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):s(e,t)}},"30vf":function(e,t,n){var r=n("Wdy1"),i=n("iANj"),s=n("zyKz");e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*s(function(){n(1)}),"Object",o)}},"3fMt":function(e,t,n){var r=n("SWGL");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"8ANE":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9MbE":function(e,t,n){var r=n("8ANE");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},B5V0:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DuR2:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},DvwR:function(e,t,n){var r=n("x//u"),i=n("ksFB"),s=n("PbQV")(!1),o=n("+SdG")("IE_PROTO");e.exports=function(e,t){var n,a=i(e),u=0,c=[];for(n in a)n!=o&&r(a,n)&&c.push(n);for(;t.length>u;)r(a,n=t[u++])&&(~s(c,n)||c.push(n));return c}},FCHA:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){return!!e&&"object"===typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||n(e)}function n(e){return e.$$typeof===l}function r(e){return Array.isArray(e)?[]:{}}function i(e,t){return t&&!1===t.clone||!u(e)?e:a(r(e),e,t)}function s(e,t,n){return e.concat(t).map(function(e){return i(e,n)})}function o(e,t,n){var r={};return u(e)&&Object.keys(e).forEach(function(t){r[t]=i(e[t],n)}),Object.keys(t).forEach(function(s){u(t[s])&&e[s]?r[s]=a(e[s],t[s],n):r[s]=i(t[s],n)}),r}function a(e,t,n){var r=Array.isArray(t),a=Array.isArray(e),u=n||{arrayMerge:s};if(r===a)return r?(u.arrayMerge||s)(e,t,n):o(e,t,n);return i(t,n)}var u=function(n){return e(n)&&!t(n)},c="function"===typeof Symbol&&Symbol.for,l=c?Symbol.for("react.element"):60103;return a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return a(e,n,t)},{})},a})},FKWp:function(e,t,n){var r=n("8ANE");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},FyVN:function(e,t,n){"use strict";var r=n("JWkr"),i=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)};t.a=i},GCs6:function(e,t,n){var r=n("FKWp"),i=n("LocR"),s=n("9MbE"),o=Object.defineProperty;t.f=n("qs+f")?Object.defineProperty:function(e,t,n){if(r(e),t=s(t,!0),r(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},GhAV:function(e,t,n){var r=n("W6Rd"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},GmwO:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},JWkr:function(e,t,n){"use strict";var r=n("fZjL"),i=n.n(r),s=n("FCHA"),o=n.n(s),a=n("um+A"),u=function(e,t){i()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;if("object"===Object(a.a)(r))return void(e.props[n].default=o()(r,t[n]));e.props[n].default=t[n]}})};t.a=u},LocR:function(e,t,n){e.exports=!n("qs+f")&&!n("zyKz")(function(){return 7!=Object.defineProperty(n("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},PY1i:function(e,t,n){var r=n("8ANE"),i=n("YjQv").document,s=r(i)&&r(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},PbQV:function(e,t,n){var r=n("ksFB"),i=n("GhAV"),s=n("+VX5");e.exports=function(e){return function(t,n,o){var a,u=r(t),c=i(u.length),l=s(o,c);if(e&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},SWGL:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"VU/8":function(e,t){e.exports=function(e,t,n,r,i,s){var o,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,a=e.default);var c="function"===typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=r),l){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=l,c.render=function(e,t){return l.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:a,options:c}}},W6Rd:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},WMYY:function(e,t,n){"use strict";(function(e){var r=n("bjur");n.n(r);"[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV&&(e.componentHandler=window.componentHandler),t.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}}).call(t,n("DuR2"))},Wdy1:function(e,t,n){var r=n("YjQv"),i=n("iANj"),s=n("3fMt"),o=n("aLzV"),a=function(e,t,n){var u,c,l,p=e&a.F,d=e&a.G,f=e&a.S,h=e&a.P,m=e&a.B,_=e&a.W,g=d?i:i[t]||(i[t]={}),E=g.prototype,v=d?r:f?r[t]:(r[t]||{}).prototype;d&&(n=t);for(u in n)(c=!p&&v&&void 0!==v[u])&&u in g||(l=c?v[u]:n[u],g[u]=d&&"function"!=typeof v[u]?n[u]:m&&c?s(l,r):_&&v[u]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?s(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[u]=l,e&a.R&&E&&!E[u]&&o(E,u,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},XHyz:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var n,r,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)n=Math.round(i.width/2),r=Math.round(i.height/2);else{var s=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;n=Math.round(s-i.left),r=Math.round(o-i.top)}this.setRippleXY(n,r),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var n,r,i="translate("+this.x_+"px, "+this.y_+"px)";t?(r=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(r=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+r,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},YTz9:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},YUux:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialIconToggle=e,e.prototype.Constant_={TINY_TIMEOUT:.001},e.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},e.prototype.onChange_=function(e){this.updateClasses_()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onMouseUp_=function(e){this.blur_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},e.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},e.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},e.prototype.checkToggleState=e.prototype.checkToggleState,e.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},e.prototype.check=e.prototype.check,e.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},e.prototype.uncheck=e.prototype.uncheck,e.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0})}()},YjQv:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ZhOs:function(e,t,n){n("rZAI"),e.exports=n("iANj").Object.keys},"a/OS":function(e,t,n){var r=n("YjQv"),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return i[e]||(i[e]={})}},aLzV:function(e,t,n){var r=n("GCs6"),i=n("YTz9");e.exports=n("qs+f")?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<d.length;n++)if(d[n].className===e)return"undefined"!==typeof t&&(d[n]=t),d[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function r(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function i(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var r=0;r<d.length;r++)i(d[r].className,d[r].cssClass);else{var o=t;if("undefined"===typeof n){var a=e(o);a&&(n=a.cssClass)}for(var u=document.querySelectorAll("."+n),c=0;c<u.length;c++)s(u[c],o)}}function s(i,s){if(!("object"===typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=r("mdl-componentupgrading",!0,!0);if(i.dispatchEvent(o),!o.defaultPrevented){var a=t(i),u=[];if(s)n(i,s)||u.push(e(s));else{var c=i.classList;d.forEach(function(e){c.contains(e.cssClass)&&-1===u.indexOf(e)&&!n(i,e.className)&&u.push(e)})}for(var l,p=0,m=u.length;p<m;p++){if(!(l=u[p]))throw new Error("Unable to find a registered component for the given class.");a.push(l.className),i.setAttribute("data-upgraded",a.join(","));var _=new l.classConstructor(i);_[h]=l,f.push(_);for(var g=0,E=l.callbacks.length;g<E;g++)l.callbacks[g](i);l.widget&&(i[l.className]=_);var v=r("mdl-componentupgraded",!0,!1);i.dispatchEvent(v)}}}function o(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,r=e.length;n<r;n++)(t=e[n])instanceof HTMLElement&&(s(t),t.children.length>0&&o(t.children))}function a(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,r=!0;n||(r=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(d.forEach(function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");e(t.classAsString,i)||d.push(i)}function u(t,n){var r=e(t);r&&r.callbacks.push(n)}function c(){for(var e=0;e<d.length;e++)i(d[e].className)}function l(e){if(e){var t=f.indexOf(e);f.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),i=n.indexOf(e[h].classAsString);n.splice(i,1),e.element_.setAttribute("data-upgraded",n.join(","));var s=r("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(s)}}function p(e){var t=function(e){f.filter(function(t){return t.element_===e}).forEach(l)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var d=[],f=[],h="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:s,upgradeElements:o,upgradeAllRegistered:c,registerUpgradedCallback:u,register:a,downgradeElements:p}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},fZjL:function(e,t,n){e.exports={default:n("ZhOs"),__esModule:!0}},h6M0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("FyVN"),i=n("zdN2"),s=n.n(i);Object(r.a)(s.a),t.default=s.a},hYTM:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.className},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"mdl-icon-toggle__input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.value,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,e.value)>-1:e.currentValue},on:{change:[function(t){var n=e.currentValue,r=t.target,i=!!r.checked;if(Array.isArray(n)){var s=e.value,o=e._i(n,s);r.checked?o<0&&(e.currentValue=n.concat([s])):o>-1&&(e.currentValue=n.slice(0,o).concat(n.slice(o+1)))}else e.currentValue=i},e.handleChange]}}),e._v(" "),e.icon?n("span",{staticClass:"mdl-icon-toggle__label material-icons"},[e._t("default",[e._v(e._s(e.icon))])],2):n("span",{staticClass:"mdl-icon-toggle__label custom-icons"},[e._t("default")],2)])},r=[];e.exports={render:n,staticRenderFns:r}},iANj:function(e,t){var n=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},ksFB:function(e,t,n){var r=n("wiaE"),i=n("+MZ2");e.exports=function(e){return r(i(e))}},pEGt:function(e,t,n){var r=n("DvwR"),i=n("B5V0");e.exports=Object.keys||function(e){return r(e,i)}},"qs+f":function(e,t,n){e.exports=!n("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rZAI:function(e,t,n){var r=n("wXdB"),i=n("pEGt");n("30vf")("keys",function(){return function(e){return i(r(e))}})},sQMI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("WMYY"),i=n("YUux"),s=(n.n(i),n("XHyz")),o=(n.n(s),n("um+A"));t.default={name:"ui-icon-toggle",mixins:[r.a],props:{model:{type:[Array,String,Number,Boolean],required:!0,default:!1},id:String,name:String,disabled:{type:Boolean,default:!1},value:[String,Number,Boolean],noRipple:{type:Boolean,default:!1},icon:{type:[Boolean,String],default:!1}},data:function(){return{currentValue:this.model}},computed:{className:function(){return{"mdl-icon-toggle":!0,"mdl-js-icon-toggle":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple,"is-upgraded":!0,"is-checked":this.isChecked,"mdl-icon-toggle--disabled":this.disabled}},isChecked:function(){return"array"===Object(o.a)(this.currentValue)?this.currentValue.indexOf(this.value)>-1:this.currentValue==this.value||!0===this.currentValue}},watch:{model:function(e){this.currentValue=e}},methods:{handleChange:function(){this.$emit("change",this.currentValue)}},mounted:function(){this.$mdl.upgradeElements(this.$el)}}},"um+A":function(e,t,n){"use strict";var r=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};t.a=r},wXdB:function(e,t,n){var r=n("+MZ2");e.exports=function(e){return Object(r(e))}},wiaE:function(e,t,n){var r=n("NZra");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},"x//u":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},zdN2:function(e,t,n){var r=n("VU/8"),i=n("sQMI"),s=n("hYTM"),o=r(i,s,!1,null,null,null);e.exports=o.exports},zyKz:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}}})});