!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="T0n0")}({"+MZ2":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"+SdG":function(t,e,n){var r=n("a/OS")("keys"),o=n("GmwO");t.exports=function(t){return r[t]||(r[t]=o(t))}},"+VX5":function(t,e,n){var r=n("W6Rd"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"30vf":function(t,e,n){var r=n("Wdy1"),o=n("iANj"),i=n("zyKz");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},"3fMt":function(t,e,n){var r=n("SWGL");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"8ANE":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9MbE":function(t,e,n){var r=n("8ANE");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},B5V0:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},DvwR:function(t,e,n){var r=n("x//u"),o=n("ksFB"),i=n("PbQV")(!1),s=n("+SdG")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(c,n)||c.push(n));return c}},FCHA:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return!!t&&"object"===typeof t}function e(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||n(t)}function n(t){return t.$$typeof===l}function r(t){return Array.isArray(t)?[]:{}}function o(t,e){return e&&!1===e.clone||!u(t)?t:a(r(t),t,e)}function i(t,e,n){return t.concat(e).map(function(t){return o(t,n)})}function s(t,e,n){var r={};return u(t)&&Object.keys(t).forEach(function(e){r[e]=o(t[e],n)}),Object.keys(e).forEach(function(i){u(e[i])&&t[i]?r[i]=a(t[i],e[i],n):r[i]=o(e[i],n)}),r}function a(t,e,n){var r=Array.isArray(e),a=Array.isArray(t),u=n||{arrayMerge:i};if(r===a)return r?(u.arrayMerge||i)(t,e,n):s(t,e,n);return o(e,n)}var u=function(n){return t(n)&&!e(n)},c="function"===typeof Symbol&&Symbol.for,l=c?Symbol.for("react.element"):60103;return a.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return a(t,n,e)},{})},a})},FKWp:function(t,e,n){var r=n("8ANE");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},FyVN:function(t,e,n){"use strict";var r=n("JWkr"),o=function(t){Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(t,e)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(t.name,t)};e.a=o},GCs6:function(t,e,n){var r=n("FKWp"),o=n("LocR"),i=n("9MbE"),s=Object.defineProperty;e.f=n("qs+f")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},GhAV:function(t,e,n){var r=n("W6Rd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},GmwO:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},JWkr:function(t,e,n){"use strict";var r=n("fZjL"),o=n.n(r),i=n("FCHA"),s=n.n(i),a=n("um+A"),u=function(t,e){o()(e).forEach(function(n){if(void 0!==t.props[n]){var r=t.props[n].default;if("object"===Object(a.a)(r))return void(t.props[n].default=s()(r,e[n]));t.props[n].default=e[n]}})};e.a=u},LocR:function(t,e,n){t.exports=!n("qs+f")&&!n("zyKz")(function(){return 7!=Object.defineProperty(n("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},PY1i:function(t,e,n){var r=n("8ANE"),o=n("YjQv").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},PbQV:function(t,e,n){var r=n("ksFB"),o=n("GhAV"),i=n("+VX5");t.exports=function(t){return function(e,n,s){var a,u=r(e),c=o(u.length),l=i(s,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},SWGL:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},T0n0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("FyVN"),o=n("wh2H"),i=n.n(o);Object(r.a)(i.a),e.default=i.a},"VU/8":function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"===typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=r),l){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(t,e){return l.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:s,exports:a,options:c}}},W6Rd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},WMYY:function(t,e,n){"use strict";(function(t){var r=n("bjur");n.n(r);t!==window&&(t.componentHandler=window.componentHandler),e.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}}).call(e,n("DuR2"))},Wdy1:function(t,e,n){var r=n("YjQv"),o=n("iANj"),i=n("3fMt"),s=n("aLzV"),a=function(t,e,n){var u,c,l,f=t&a.F,d=t&a.G,p=t&a.S,m=t&a.P,h=t&a.B,v=t&a.W,g=d?o:o[e]||(o[e]={}),y=g.prototype,_=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(u in n)(c=!f&&_&&void 0!==_[u])&&u in g||(l=c?_[u]:n[u],g[u]=d&&"function"!=typeof _[u]?n[u]:h&&c?i(l,r):v&&_[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?i(Function.call,l):l,m&&((g.virtual||(g.virtual={}))[u]=l,t&a.R&&y&&!y[u]&&s(y,u,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},YTz9:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},YjQv:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ZTyV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("WMYY"),o=n("svKz"),i=(n.n(o),n("um+A")),s=["","top","right","bottom","left"],a=function(t){for(var e="";e.length<t;e+=Math.random().toString(36).substr(2));return e.substr(0,t)};e.default={name:"ui-tooltip",mixins:[r.a],props:{name:{type:String,default:function(){return a(8)}},title:String,large:{type:Boolean,default:!1},position:{type:[Number,String],default:0}},computed:{className:function(){return{"mdl-tooltip":!0,"mdl-tooltip--large":this.large}},positionClassName:function(){var t=this.position;"string"===Object(i.a)(t)&&(t=s.indexOf(t));var e=t>0&&t<s.length?s[t]:"";return e?"mdl-tooltip--"+e:""}},mounted:function(){this.$mdl.upgradeElement(this.$refs.tooltip,"MaterialTooltip")}}},ZhOs:function(t,e,n){n("rZAI"),t.exports=n("iANj").Object.keys},"a/OS":function(t,e,n){var r=n("YjQv"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},aLzV:function(t,e,n){var r=n("GCs6"),o=n("YTz9");t.exports=n("qs+f")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},bjur:function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};n=function(){"use strict";function t(t,e){for(var n=0;n<d.length;n++)if(d[n].className===t)return"undefined"!==typeof e&&(d[n]=e),d[n];return!1}function e(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function n(t,n){return-1!==e(t).indexOf(n)}function r(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var r=document.createEvent("Events");return r.initEvent(t,e,n),r}function o(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var r=0;r<d.length;r++)o(d[r].className,d[r].cssClass);else{var s=e;if("undefined"===typeof n){var a=t(s);a&&(n=a.cssClass)}for(var u=document.querySelectorAll("."+n),c=0;c<u.length;c++)i(u[c],s)}}function i(o,i){if(!("object"===typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var s=r("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(s),!s.defaultPrevented){var a=e(o),u=[];if(i)n(o,i)||u.push(t(i));else{var c=o.classList;d.forEach(function(t){c.contains(t.cssClass)&&-1===u.indexOf(t)&&!n(o,t.className)&&u.push(t)})}for(var l,f=0,h=u.length;f<h;f++){if(!(l=u[f]))throw new Error("Unable to find a registered component for the given class.");a.push(l.className),o.setAttribute("data-upgraded",a.join(","));var v=new l.classConstructor(o);v[m]=l,p.push(v);for(var g=0,y=l.callbacks.length;g<y;g++)l.callbacks[g](o);l.widget&&(o[l.className]=v);var _=r("mdl-componentupgraded",!0,!1);o.dispatchEvent(_)}}}function s(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var e,n=0,r=t.length;n<r;n++)(e=t[n])instanceof HTMLElement&&(i(e),e.children.length>0&&s(e.children))}function a(e){var n="undefined"===typeof e.widget&&"undefined"===typeof e.widget,r=!0;n||(r=e.widget||e.widget);var o={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:r,callbacks:[]};if(d.forEach(function(t){if(t.cssClass===o.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===o.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(m))throw new Error("MDL component classes must not have "+m+" defined as a property.");t(e.classAsString,o)||d.push(o)}function u(e,n){var r=t(e);r&&r.callbacks.push(n)}function c(){for(var t=0;t<d.length;t++)o(d[t].className)}function l(t){if(t){var e=p.indexOf(t);p.splice(e,1);var n=t.element_.getAttribute("data-upgraded").split(","),o=n.indexOf(t[m].classAsString);n.splice(o,1),t.element_.setAttribute("data-upgraded",n.join(","));var i=r("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(i)}}function f(t){var e=function(t){p.filter(function(e){return e.element_===t}).forEach(l)};if(t instanceof Array||t instanceof NodeList)for(var n=0;n<t.length;n++)e(t[n]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");e(t)}}var d=[],p=[],m="mdlComponentConfigInternal_";return{upgradeDom:o,upgradeElement:i,upgradeElements:s,upgradeAllRegistered:c,registerUpgradedCallback:u,register:a,downgradeElements:f}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},fZjL:function(t,e,n){t.exports={default:n("ZhOs"),__esModule:!0}},iANj:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},ksFB:function(t,e,n){var r=n("wiaE"),o=n("+MZ2");t.exports=function(t){return r(o(t))}},pEGt:function(t,e,n){var r=n("DvwR"),o=n("B5V0");t.exports=Object.keys||function(t){return r(t,o)}},"qs+f":function(t,e,n){t.exports=!n("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rZAI:function(t,e,n){var r=n("wXdB"),o=n("pEGt");n("30vf")("keys",function(){return function(t){return o(r(t))}})},sS6b:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{attrs:{id:"tt-"+t.name}},[t._t("default")],2),t._v(" "),n("div",{ref:"tooltip",class:[t.className,t.positionClassName],attrs:{"data-mdl-for":"tt-"+t.name}},[t._t("title",[t._v(t._s(t.title))])],2)])},r=[];t.exports={render:n,staticRenderFns:r}},svKz:function(t,e){!function(){"use strict";var t=function(t){this.element_=t,this.init()};window.MaterialTooltip=t,t.prototype.Constant_={},t.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},t.prototype.handleMouseEnter_=function(t){var e=t.target.getBoundingClientRect(),n=e.left+e.width/2,r=e.top+e.height/2,o=this.element_.offsetWidth/2*-1,i=this.element_.offsetHeight/2*-1;this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(n=e.width/2,r+i<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=r+"px",this.element_.style.marginTop=i+"px")):n+o<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=n+"px",this.element_.style.marginLeft=o+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=e.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=e.left+e.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=e.left-this.element_.offsetWidth-10+"px":this.element_.style.top=e.top+e.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},t.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},t.prototype.init=function(){if(this.element_){var t=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");t&&(this.forElement_=document.getElementById(t)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},componentHandler.register({constructor:t,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"})}()},"um+A":function(t,e,n){"use strict";var r=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};e.a=r},wXdB:function(t,e,n){var r=n("+MZ2");t.exports=function(t){return Object(r(t))}},wh2H:function(t,e,n){var r=n("VU/8"),o=n("ZTyV"),i=n("sS6b"),s=r(o,i,!1,null,null,null);t.exports=s.exports},wiaE:function(t,e,n){var r=n("NZra");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"x//u":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},zyKz:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}})});