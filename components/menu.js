!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="xcvc")}({"+MZ2":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"+SdG":function(e,t,n){var s=n("a/OS")("keys"),i=n("GmwO");e.exports=function(e){return s[e]||(s[e]=i(e))}},"+VX5":function(e,t,n){var s=n("W6Rd"),i=Math.max,r=Math.min;e.exports=function(e,t){return e=s(e),e<0?i(e+t,0):r(e,t)}},"+e3c":function(e,t){var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{class:e.className,attrs:{disabled:e.item.disabled||null}},[e._t("default",[e._v(e._s(e.item[e.label]))])],2)},s=[];e.exports={render:n,staticRenderFns:s}},"/Tr3":function(e,t,n){var s=n("VU/8"),i=n("lz4A"),r=n("AByx"),o=s(i,r,!1,null,null,null);e.exports=o.exports},"3fMt":function(e,t,n){var s=n("SWGL");e.exports=function(e,t,n){if(s(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,s){return e.call(t,n,s)};case 3:return function(n,s,i){return e.call(t,n,s,i)}}return function(){return e.apply(t,arguments)}}},"8ANE":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9MbE":function(e,t,n){var s=n("8ANE");e.exports=function(e,t){if(!s(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!s(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!s(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!s(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},AByx:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{class:[e.menuClassName,e.positionClassName],attrs:{"data-mdl-for":e.btnId}},[e._t("default",e._l(e.currentMenu,function(t,s){return n("ui-menuitem",{key:s,attrs:{item:"object"===e.getType(t)?t:{}},nativeOn:{click:function(n){e.handleItem(t)}}})}))],2)},s=[];e.exports={render:n,staticRenderFns:s}},B5V0:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DvwR:function(e,t,n){var s=n("x//u"),i=n("ksFB"),r=n("PbQV")(!1),o=n("+SdG")("IE_PROTO");e.exports=function(e,t){var n,l=i(e),a=0,c=[];for(n in l)n!=o&&s(l,n)&&c.push(n);for(;t.length>a;)s(l,n=t[a++])&&(~r(c,n)||c.push(n));return c}},Eif7:function(e,t,n){n("JyN8"),e.exports=n("iANj").Object.assign},FKWp:function(e,t,n){var s=n("8ANE");e.exports=function(e){if(!s(e))throw TypeError(e+" is not an object!");return e}},GCs6:function(e,t,n){var s=n("FKWp"),i=n("LocR"),r=n("9MbE"),o=Object.defineProperty;t.f=n("qs+f")?Object.defineProperty:function(e,t,n){if(s(e),t=r(t,!0),s(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},GhAV:function(e,t,n){var s=n("W6Rd"),i=Math.min;e.exports=function(e){return e>0?i(s(e),9007199254740991):0}},GmwO:function(e,t){var n=0,s=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+s).toString(36))}},HvOH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ui-menuitem",props:{item:{type:Object,default:function(){return{}}},label:{type:String,default:"label"},divider:{type:Boolean,default:!1}},computed:{hasDivider:function(){return this.divider||this.item.divider},className:function(){return{"mdl-menu__item":!0,"mdl-menu__item--full-bleed-divider":this.hasDivider||!1}}}}},IMsp:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialMenu=e,e.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},e.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},e.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var n=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),s=null;n&&(s=document.getElementById(n))&&(this.forElement_=s,s.addEventListener("click",this.handleForClick_.bind(this)),s.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this)));var i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var r=0;r<i.length;r++)i[r].addEventListener("click",this.boundItemClick_),i[r].tabIndex="-1",i[r].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),r=0;r<i.length;r++){var o=i[r],l=document.createElement("span");l.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var a=document.createElement("span");a.classList.add(this.CssClasses_.RIPPLE),l.appendChild(a),o.appendChild(l),o.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},e.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),n=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=n.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=n.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=n.right-t.right+"px",this.container_.style.bottom=n.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},e.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},e.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var n=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),n>0?t[n-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>n+1?t[n+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var s=new MouseEvent("mousedown");e.target.dispatchEvent(s),s=new MouseEvent("mouseup"),e.target.dispatchEvent(s),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},e.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},e.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},e.prototype.removeAnimationEndListener_=function(t){t.target.classList.remove(e.prototype.CssClasses_.IS_ANIMATING)},e.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},e.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,n=this.element_.getBoundingClientRect().width;this.container_.style.width=n+"px",this.container_.style.height=t+"px",this.outline_.style.width=n+"px",this.outline_.style.height=t+"px";for(var s=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),r=0;r<i.length;r++){var o=null;o=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-i[r].offsetTop-i[r].offsetHeight)/t*s+"s":i[r].offsetTop/t*s+"s",i[r].style.transitionDelay=o}this.applyClip_(t,n),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+n+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var l=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",l),this.hide())}.bind(this);document.addEventListener("click",l)}},e.prototype.show=e.prototype.show,e.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var n=this.element_.getBoundingClientRect(),s=n.height,i=n.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(s,i),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},e.prototype.hide=e.prototype.hide,e.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},e.prototype.toggle=e.prototype.toggle,componentHandler.register({constructor:e,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0})}()},JyN8:function(e,t,n){var s=n("Wdy1");s(s.S+s.F,"Object",{assign:n("xVc6")})},LocR:function(e,t,n){e.exports=!n("qs+f")&&!n("zyKz")(function(){return 7!=Object.defineProperty(n("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},PY1i:function(e,t,n){var s=n("8ANE"),i=n("YjQv").document,r=s(i)&&s(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},PbQV:function(e,t,n){var s=n("ksFB"),i=n("GhAV"),r=n("+VX5");e.exports=function(e){return function(t,n,o){var l,a=s(t),c=i(a.length),u=r(o,c);if(e&&n!=n){for(;c>u;)if((l=a[u++])!=l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}}},SWGL:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},THEY:function(e,t){t.f=Object.getOwnPropertySymbols},"VU/8":function(e,t){e.exports=function(e,t,n,s,i,r){var o,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,l=e.default);var c="function"===typeof l?l.options:l;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):s&&(u=s),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:o,exports:l,options:c}}},W6Rd:function(e,t){var n=Math.ceil,s=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?s:n)(e)}},WMYY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("bjur"),t.default={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},Wdy1:function(e,t,n){var s=n("YjQv"),i=n("iANj"),r=n("3fMt"),o=n("aLzV"),l=function(e,t,n){var a,c,u,d=e&l.F,f=e&l.G,p=e&l.S,h=e&l.P,_=e&l.B,m=e&l.W,E=f?i:i[t]||(i[t]={}),v=E.prototype,C=f?s:p?s[t]:(s[t]||{}).prototype;f&&(n=t);for(a in n)(c=!d&&C&&void 0!==C[a])&&a in E||(u=c?C[a]:n[a],E[a]=f&&"function"!=typeof C[a]?n[a]:_&&c?r(u,s):m&&C[a]==u?function(e){var t=function(t,n,s){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,s)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):h&&"function"==typeof u?r(Function.call,u):u,h&&((E.virtual||(E.virtual={}))[a]=u,e&l.R&&v&&!v[a]&&o(v,a,u)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},XHyz:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var n,s,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)n=Math.round(i.width/2),s=Math.round(i.height/2);else{var r=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;n=Math.round(r-i.left),s=Math.round(o-i.top)}this.setRippleXY(n,s),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var n,s,i="translate("+this.x_+"px, "+this.y_+"px)";t?(s=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(s=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+s,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},YTz9:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},YjQv:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"a/OS":function(e,t,n){var s=n("YjQv"),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});e.exports=function(e){return i[e]||(i[e]={})}},aLzV:function(e,t,n){var s=n("GCs6"),i=n("YTz9");e.exports=n("qs+f")?function(e,t,n){return s.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},bSeU:function(e,t){t.f={}.propertyIsEnumerable},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<f.length;n++)if(f[n].className===e)return"undefined"!==typeof t&&(f[n]=t),f[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function s(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var s=document.createEvent("Events");return s.initEvent(e,t,n),s}function i(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var s=0;s<f.length;s++)i(f[s].className,f[s].cssClass);else{var o=t;if("undefined"===typeof n){var l=e(o);l&&(n=l.cssClass)}for(var a=document.querySelectorAll("."+n),c=0;c<a.length;c++)r(a[c],o)}}function r(i,r){if(!("object"===typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=s("mdl-componentupgrading",!0,!0);if(i.dispatchEvent(o),!o.defaultPrevented){var l=t(i),a=[];if(r)n(i,r)||a.push(e(r));else{var c=i.classList;f.forEach(function(e){c.contains(e.cssClass)&&-1===a.indexOf(e)&&!n(i,e.className)&&a.push(e)})}for(var u,d=0,_=a.length;d<_;d++){if(!(u=a[d]))throw new Error("Unable to find a registered component for the given class.");l.push(u.className),i.setAttribute("data-upgraded",l.join(","));var m=new u.classConstructor(i);m[h]=u,p.push(m);for(var E=0,v=u.callbacks.length;E<v;E++)u.callbacks[E](i);u.widget&&(i[u.className]=m);var C=s("mdl-componentupgraded",!0,!1);i.dispatchEvent(C)}}}function o(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,s=e.length;n<s;n++)(t=e[n])instanceof HTMLElement&&(r(t),t.children.length>0&&o(t.children))}function l(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,s=!0;n||(s=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:s,callbacks:[]};if(f.forEach(function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");e(t.classAsString,i)||f.push(i)}function a(t,n){var s=e(t);s&&s.callbacks.push(n)}function c(){for(var e=0;e<f.length;e++)i(f[e].className)}function u(e){if(e){var t=p.indexOf(e);p.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),i=n.indexOf(e[h].classAsString);n.splice(i,1),e.element_.setAttribute("data-upgraded",n.join(","));var r=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(r)}}function d(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var f=[],p=[],h="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:r,upgradeElements:o,upgradeAllRegistered:c,registerUpgradedCallback:a,register:l,downgradeElements:d}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},iANj:function(e,t){var n=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},ksFB:function(e,t,n){var s=n("wiaE"),i=n("+MZ2");e.exports=function(e){return s(i(e))}},lz4A:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("woOf"),r=s(i),o=n("WMYY"),l=s(o);n("IMsp"),n("XHyz");var a=n("um+A"),c=s(a),u=n("tGWO"),d=s(u),f=["top-left","top-right","bottom-left","bottom-right"];t.default={name:"ui-menu",mixins:[l.default],components:{UiMenuitem:d.default},props:{btnId:{type:String,required:!0},menu:{type:Array,default:function(){return[]}},noRipple:{type:Boolean,default:!1},position:{type:[Number,String],default:0}},data:function(){return{getType:c.default,currentMenu:this.menu}},computed:{menuClassName:function(){return{"mdl-menu":!0,"mdl-js-menu":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple}},positionClassName:function(){var e="string"===(0,c.default)(this.position)?f.indexOf(this.position)+1:this.position,t=e>0&&e<=f.length&&f[e-1];return t?"mdl-menu--"+t:""}},watch:{menu:function(e){this.currentMenu=e}},methods:{handleItem:function(e){e.disabled||this.$emit("selected",(0,r.default)({},e))}},mounted:function(){this.$mdl.upgradeElements(this.$el)}}},pEGt:function(e,t,n){var s=n("DvwR"),i=n("B5V0");e.exports=Object.keys||function(e){return s(e,i)}},"qs+f":function(e,t,n){e.exports=!n("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},tGWO:function(e,t,n){var s=n("VU/8"),i=n("HvOH"),r=n("+e3c"),o=s(i,r,!1,null,null,null);e.exports=o.exports},"um+A":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};t.default=s},wXdB:function(e,t,n){var s=n("+MZ2");e.exports=function(e){return Object(s(e))}},wiaE:function(e,t,n){var s=n("NZra");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==s(e)?e.split(""):Object(e)}},woOf:function(e,t,n){e.exports={default:n("Eif7"),__esModule:!0}},"x//u":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},xVc6:function(e,t,n){"use strict";var s=n("pEGt"),i=n("THEY"),r=n("bSeU"),o=n("wXdB"),l=n("wiaE"),a=Object.assign;e.exports=!a||n("zyKz")(function(){var e={},t={},n=Symbol(),s="abcdefghijklmnopqrst";return e[n]=7,s.split("").forEach(function(e){t[e]=e}),7!=a({},e)[n]||Object.keys(a({},t)).join("")!=s})?function(e,t){for(var n=o(e),a=arguments.length,c=1,u=i.f,d=r.f;a>c;)for(var f,p=l(arguments[c++]),h=u?s(p).concat(u(p)):s(p),_=h.length,m=0;_>m;)d.call(p,f=h[m++])&&(n[f]=p[f]);return n}:a},xcvc:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("/Tr3"),r=s(i),o=n("tGWO"),l=s(o),a={UiMenu:r.default,UiMenuitem:l.default};if("undefined"!==typeof window&&window.Vue)for(var c in a){var u=a[c];window.Vue.component(u.name,u)}t.default=a},zyKz:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}}})});