!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(window,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="mrN/")}({"29s/":function(t,e,n){var s=n("WEpk"),i=n("5T2Y"),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:s.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var s=n("eaoh");t.exports=function(t,e,n){if(s(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,s){return t.call(e,n,s)};case 3:return function(n,s,i){return t.call(e,n,s,i)}}return function(){return t.apply(e,arguments)}}},"2faE":function(t,e,n){var s=n("5K7Z"),i=n("eUtF"),r=n("G8Mo"),o=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(s(t),e=r(e,!0),s(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"5K7Z":function(t,e,n){var s=n("93I4");t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var s=n("B+OT"),i=n("NsO/"),r=n("W070")(!1),o=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,a=i(t),l=0,c=[];for(n in a)n!=o&&s(a,n)&&c.push(n);for(;e.length>l;)s(a,n=e[l++])&&(~r(c,n)||c.push(n));return c}},"6aOb":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{class:t.className,attrs:{disabled:t.item.disabled||null},on:{click:t.handleClick}},[t._t("default",[t._v(t._s(t.item[t.label]))])],2)};s._withStripped=!0;var i={name:"ui-menuitem",props:{item:{type:Object,default:function(){return{}}},label:{type:String,default:"label"},divider:{type:Boolean,default:!1}},computed:{hasDivider:function(){return this.divider||this.item.divider},className:function(){return{"mdl-menu__item":!0,"mdl-menu__item--full-bleed-divider":this.hasDivider||!1}}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=n("KHd+"),o=Object(r.a)(i,s,[],!1,null,null,null);o.options.__file="src/scripts/components/menu/menuitem.vue";e.a=o.exports},"72n3":function(t,e){!function(){"use strict";var t=function(t){this.element_=t,this.init()};window.MaterialRipple=t,t.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},t.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},t.prototype.downHandler_=function(t){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var e=this.element_.getBoundingClientRect();this.boundHeight=e.height,this.boundWidth=e.width,this.rippleSize_=2*Math.sqrt(e.width*e.width+e.height*e.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===t.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{if("touchstart"===t.type&&(this.ignoringMouseDown_=!0),this.getFrameCount()>0)return;this.setFrameCount(1);var n,s,i=t.currentTarget.getBoundingClientRect();if(0===t.clientX&&0===t.clientY)n=Math.round(i.width/2),s=Math.round(i.height/2);else{var r=void 0!==t.clientX?t.clientX:t.touches[0].clientX,o=void 0!==t.clientY?t.clientY:t.touches[0].clientY;n=Math.round(r-i.left),s=Math.round(o-i.top)}this.setRippleXY(n,s),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},t.prototype.upHandler_=function(t){t&&2!==t.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},t.prototype.init=function(){if(this.element_){var t=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(t){this.frameCount_=t},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(t,e){this.x_=t,this.y_=e},this.setRippleStyles=function(e){if(null!==this.rippleElement_){var n,s,i="translate("+this.x_+"px, "+this.y_+"px)";e?(s=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(s=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",t&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+s,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,e?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:t,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?i((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function s(t,e,s){return t.concat(e).map(function(t){return n(t,s)})}function i(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||s,o.isMergeableObject=o.isMergeableObject||t;var a=Array.isArray(r),l=Array.isArray(e),c=a===l;return c?a?o.arrayMerge(e,r,o):function(t,e,s){var r={};return s.isMergeableObject(t)&&Object.keys(t).forEach(function(e){r[e]=n(t[e],s)}),Object.keys(e).forEach(function(o){s.isMergeableObject(e[o])&&t[o]?r[o]=i(t[o],e[o],s):r[o]=n(e[o],s)}),r}(e,r,o):n(r,o)}return i.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return i(t,n,e)},{})},i}()},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},D8kY:function(t,e,n){var s=n("Ojgd"),i=Math.max,r=Math.min;t.exports=function(t,e){return(t=s(t))<0?i(t+e,0):r(t,e)}},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var s=n("93I4");t.exports=function(t,e){if(!s(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!s(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!s(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!s(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},GQeE:function(t,e,n){t.exports={default:n("iq4v"),__esModule:!0}},Hsns:function(t,e,n){var s=n("93I4"),i=n("5T2Y").document,r=s(i)&&s(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},JB68:function(t,e,n){var s=n("Jes0");t.exports=function(t){return Object(s(t))}},Jes0:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,i,r,o,a){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return s})},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},L0bC:function(t,e,n){"use strict";(function(t){n("jh+B");var s="[object process]"===Object.prototype.toString.call("undefined"!==typeof t.process?t.process:0)&&"test"===t.process.env.NODE_ENV,i=window.componentHandler;s&&(t.componentHandler=i,i=t.componentHandler),e.a={data:function(){return{$mdl:i}},created:function(){this.$mdl||(this.$mdl=i)}}}).call(this,n("yLpj"))},M1xp:function(t,e,n){var s=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==s(t)?t.split(""):Object(t)}},Mqbl:function(t,e,n){var s=n("JB68"),i=n("w6GO");n("zn7N")("keys",function(){return function(t){return i(s(t))}})},NV0k:function(t,e){e.f={}.propertyIsEnumerable},NegM:function(t,e,n){var s=n("2faE"),i=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var s=n("M1xp"),i=n("Jes0");t.exports=function(t){return s(i(t))}},Ojgd:function(t,e){var n=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:n)(t)}},P2sY:function(t,e,n){t.exports={default:n("UbbE"),__esModule:!0}},PSzo:function(t,e,n){"use strict";var s=n("GQeE"),i=n.n(s),r=n("gVot"),o=function(t,e){i()(e).forEach(function(n){if(void 0!==t[n]){var s=t[n],i=e[n];Object(r.a)(s,i)}})};e.a=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(t,e)}}}),"undefined"!==typeof window&&window.Vue)for(var e in t){var n=t[e];window.Vue.component(n.name,n)}}},UbbE:function(t,e,n){n("o8NH"),t.exports=n("WEpk").Object.assign},VVlx:function(t,e,n){var s=n("29s/")("keys"),i=n("YqAc");t.exports=function(t){return s[t]||(s[t]=i(t))}},W070:function(t,e,n){var s=n("NsO/"),i=n("tEej"),r=n("D8kY");t.exports=function(t){return function(e,n,o){var a,l=s(e),c=i(l.length),u=r(o,c);if(t&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},WuiG:function(t,e,n){"use strict";e.a=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},Y7ZC:function(t,e,n){var s=n("5T2Y"),i=n("WEpk"),r=n("2GTP"),o=n("NegM"),a=n("B+OT"),l=function(t,e,n){var c,u,d,p=t&l.F,f=t&l.G,h=t&l.S,_=t&l.P,m=t&l.B,E=t&l.W,g=f?i:i[e]||(i[e]={}),v=g.prototype,y=f?s:h?s[e]:(s[e]||{}).prototype;for(c in f&&(n=e),n)(u=!p&&y&&void 0!==y[c])&&a(g,c)||(d=u?y[c]:n[c],g[c]=f&&"function"!=typeof y[c]?n[c]:m&&u?r(d,s):E&&y[c]==d?function(t){var e=function(e,n,s){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,s)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(d):_&&"function"==typeof d?r(Function.call,d):d,_&&((g.virtual||(g.virtual={}))[c]=d,t&l.R&&v&&!v[c]&&o(v,c,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},YqAc:function(t,e){var n=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+s).toString(36))}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},dc3g:function(t,e){!function(){"use strict";var t=function(t){this.element_=t,this.init()};window.MaterialMenu=t,t.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},t.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},t.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},t.prototype.init=function(){if(this.element_){var t=document.createElement("div");t.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_),this.container_=t;var e=document.createElement("div");e.classList.add(this.CssClasses_.OUTLINE),this.outline_=e,t.insertBefore(e,this.element_);var n=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),s=null;n&&(s=document.getElementById(n))&&(this.forElement_=s,s.addEventListener("click",this.handleForClick_.bind(this)),s.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this)));var i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var r=0;r<i.length;r++)i[r].addEventListener("click",this.boundItemClick_),i[r].tabIndex="-1",i[r].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),r=0;r<i.length;r++){var o=i[r],a=document.createElement("span");a.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var l=document.createElement("span");l.classList.add(this.CssClasses_.RIPPLE),a.appendChild(l),o.appendChild(a),o.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),t.classList.add(this.CssClasses_.IS_UPGRADED)}},t.prototype.handleForClick_=function(t){if(this.element_&&this.forElement_){var e=this.forElement_.getBoundingClientRect(),n=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=n.right-e.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=n.bottom-e.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=n.right-e.right+"px",this.container_.style.bottom=n.bottom-e.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(t)},t.prototype.handleForKeyboardEvent_=function(t){if(this.element_&&this.container_&&this.forElement_){var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");e&&e.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(t.keyCode===this.Keycodes_.UP_ARROW?(t.preventDefault(),e[e.length-1].focus()):t.keyCode===this.Keycodes_.DOWN_ARROW&&(t.preventDefault(),e[0].focus()))}},t.prototype.handleItemKeyboardEvent_=function(t){if(this.element_&&this.container_){var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(e&&e.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var n=Array.prototype.slice.call(e).indexOf(t.target);if(t.keyCode===this.Keycodes_.UP_ARROW)t.preventDefault(),n>0?e[n-1].focus():e[e.length-1].focus();else if(t.keyCode===this.Keycodes_.DOWN_ARROW)t.preventDefault(),e.length>n+1?e[n+1].focus():e[0].focus();else if(t.keyCode===this.Keycodes_.SPACE||t.keyCode===this.Keycodes_.ENTER){t.preventDefault();var s=new MouseEvent("mousedown");t.target.dispatchEvent(s),s=new MouseEvent("mouseup"),t.target.dispatchEvent(s),t.target.click()}else t.keyCode===this.Keycodes_.ESCAPE&&(t.preventDefault(),this.hide())}}},t.prototype.handleItemClick_=function(t){t.target.hasAttribute("disabled")?t.stopPropagation():(this.closing_=!0,window.setTimeout(function(t){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},t.prototype.applyClip_=function(t,e){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+e+"px 0 "+e+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+t+"px 0 "+t+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+t+"px "+e+"px "+t+"px "+e+"px)":this.element_.style.clip=""},t.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(t.prototype.CssClasses_.IS_ANIMATING)},t.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},t.prototype.show=function(t){if(this.element_&&this.container_&&this.outline_){var e=this.element_.getBoundingClientRect().height,n=this.element_.getBoundingClientRect().width;this.container_.style.width=n+"px",this.container_.style.height=e+"px",this.outline_.style.width=n+"px",this.outline_.style.height=e+"px";for(var s=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),r=0;r<i.length;r++){var o=null;o=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(e-i[r].offsetTop-i[r].offsetHeight)/e*s+"s":i[r].offsetTop/e*s+"s",i[r].style.transitionDelay=o}this.applyClip_(e,n),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+n+"px "+e+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var a=function(e){e===t||this.closing_||e.target.parentNode===this.element_||(document.removeEventListener("click",a),this.hide())}.bind(this);document.addEventListener("click",a)}},t.prototype.show=t.prototype.show,t.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),e=0;e<t.length;e++)t[e].style.removeProperty("transition-delay");var n=this.element_.getBoundingClientRect(),s=n.height,i=n.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(s,i),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},t.prototype.hide=t.prototype.hide,t.prototype.toggle=function(t){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(t)},t.prototype.toggle=t.prototype.toggle,componentHandler.register({constructor:t,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0})}()},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},gVot:function(t,e,n){"use strict";var s=n("GQeE"),i=n.n(s),r=n("Aqzh"),o=n.n(r),a=n("WuiG");e.a=function(t,e){i()(e).forEach(function(n){if(void 0!==t.props[n]){var s=t.props[n].default;"object"!==Object(a.a)(s)?t.props[n].default=e[n]:t.props[n].default=o()(s,e[n])}})}},"iGp/":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:[t.menuClassName,t.positionClassName],attrs:{"data-mdl-for":t.dropdownId}},[t._t("default",t._l(t.currentMenu,function(e,s){return n("ui-menuitem",{key:s,attrs:{item:"object"===t.getType(e)?e:{}},on:{click:function(n){t.handleItem(e)}}})}))],2)};s._withStripped=!0;var i=n("P2sY"),r=n.n(i),o=n("L0bC"),a=(n("dc3g"),n("72n3"),n("WuiG")),l=n("6aOb"),c=["top-left","top-right","bottom-left","bottom-right"],u={name:"ui-menu",mixins:[o.a],components:{UiMenuitem:l.a},props:{menu:{type:Array,default:function(){return[]}},dropdownId:{type:String,required:!0},noRipple:{type:Boolean,default:!1},position:{type:[Number,String],default:0}},data:function(){return{getType:a.a,currentMenu:this.menu}},computed:{menuClassName:function(){return{"mdl-menu":!0,"mdl-js-menu":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple}},positionClassName:function(){var t="string"===Object(a.a)(this.position)?c.indexOf(this.position)+1:this.position,e=t>0&&t<=c.length&&c[t-1];return e?"mdl-menu--"+e:""}},watch:{menu:function(t){this.currentMenu=t}},methods:{handleItem:function(t){t.disabled||this.$emit("selected",r()({},t))}},mounted:function(){this.$mdl.upgradeElements(this.$el)}},d=n("KHd+"),p=Object(d.a)(u,s,[],!1,null,null,null);p.options.__file="src/scripts/components/menu/menu.vue";e.a=p.exports},iq4v:function(t,e,n){n("Mqbl"),t.exports=n("WEpk").Object.keys},"jh+B":function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};(n=function(){"use strict";var t=[],e=[],n="mdlComponentConfigInternal_";function s(e,n){for(var s=0;s<t.length;s++)if(t[s].className===e)return"undefined"!==typeof n&&(t[s]=n),t[s];return!1}function i(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function r(t,e){return-1!==i(t).indexOf(e)}function o(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var s=document.createEvent("Events");return s.initEvent(t,e,n),s}function a(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var i=0;i<t.length;i++)a(t[i].className,t[i].cssClass);else{var r=e;if("undefined"===typeof n){var o=s(r);o&&(n=o.cssClass)}for(var c=document.querySelectorAll("."+n),u=0;u<c.length;u++)l(c[u],r)}}function l(a,l){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var u=i(a),d=[];if(l)r(a,l)||d.push(s(l));else{var p=a.classList;t.forEach(function(t){p.contains(t.cssClass)&&-1===d.indexOf(t)&&!r(a,t.className)&&d.push(t)})}for(var f,h=0,_=d.length;h<_;h++){if(!(f=d[h]))throw new Error("Unable to find a registered component for the given class.");u.push(f.className),a.setAttribute("data-upgraded",u.join(","));var m=new f.classConstructor(a);m[n]=f,e.push(m);for(var E=0,g=f.callbacks.length;E<g;E++)f.callbacks[E](a);f.widget&&(a[f.className]=m);var v=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(v)}}}function c(t){if(t){var s=e.indexOf(t);e.splice(s,1);var i=t.element_.getAttribute("data-upgraded").split(","),r=i.indexOf(t[n].classAsString);i.splice(r,1),t.element_.setAttribute("data-upgraded",i.join(","));var a=o("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:l,upgradeElements:function t(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var n,s=0,i=e.length;s<i;s++)(n=e[s])instanceof HTMLElement&&(l(n),n.children.length>0&&t(n.children))},upgradeAllRegistered:function(){for(var e=0;e<t.length;e++)a(t[e].className)},registerUpgradedCallback:function(t,e){var n=s(t);n&&n.callbacks.push(e)},register:function(e){var i=!0;"undefined"===typeof e.widget&&"undefined"===typeof e.widget||(i=e.widget||e.widget);var r={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:i,callbacks:[]};if(t.forEach(function(t){if(t.cssClass===r.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===r.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");s(e.classAsString,r)||t.push(r)},downgradeElements:function(t){var n=function(t){e.filter(function(e){return e.element_===t}).forEach(c)};if(t instanceof Array||t instanceof NodeList)for(var s=0;s<t.length;s++)n(t[s]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(t)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},jmDH:function(t,e,n){t.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kwZ1:function(t,e,n){"use strict";var s=n("w6GO"),i=n("mqlF"),r=n("NV0k"),o=n("JB68"),a=n("M1xp"),l=Object.assign;t.exports=!l||n("KUxP")(function(){var t={},e={},n=Symbol(),s="abcdefghijklmnopqrst";return t[n]=7,s.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=s})?function(t,e){for(var n=o(t),l=arguments.length,c=1,u=i.f,d=r.f;l>c;)for(var p,f=a(arguments[c++]),h=u?s(f).concat(u(f)):s(f),_=h.length,m=0;_>m;)d.call(f,p=h[m++])&&(n[p]=f[p]);return n}:l},mqlF:function(t,e){e.f=Object.getOwnPropertySymbols},"mrN/":function(t,e,n){"use strict";n.r(e);var s=n("PSzo"),i=n("iGp/");n.d(e,"UiMenu",function(){return i.a});var r=n("6aOb");n.d(e,"UiMenuitem",function(){return r.a});var o={UiMenu:i.a,UiMenuitem:r.a};Object(s.a)(o),e.default=o},o8NH:function(t,e,n){var s=n("Y7ZC");s(s.S+s.F,"Object",{assign:n("kwZ1")})},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},tEej:function(t,e,n){var s=n("Ojgd"),i=Math.min;t.exports=function(t){return t>0?i(s(t),9007199254740991):0}},uOPS:function(t,e){t.exports=!0},w6GO:function(t,e,n){var s=n("5vMV"),i=n("FpHa");t.exports=Object.keys||function(t){return s(t,i)}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}t.exports=n},zn7N:function(t,e,n){var s=n("Y7ZC"),i=n("WEpk"),r=n("KUxP");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),s(s.S+s.F*r(function(){n(1)}),"Object",o)}}})});