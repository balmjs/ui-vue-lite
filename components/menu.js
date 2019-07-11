!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(window,function(){return function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s="mrN/")}({"6aOb":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{class:e.className,attrs:{disabled:e.item.disabled||null},on:{click:e.handleClick}},[e._t("default",[e._v(e._s(e.item[e.label]))])],2)};n._withStripped=!0;var i={name:"ui-menuitem",props:{item:{type:Object,default:function(){return{}}},label:{type:String,default:"label"},divider:{type:Boolean,default:!1}},computed:{hasDivider:function(){return this.divider||this.item.divider},className:function(){return{"mdl-menu__item":!0,"mdl-menu__item--full-bleed-divider":this.hasDivider||!1}}},methods:{handleClick:function(e){this.$emit("click",e)}}},r=s("KHd+"),o=Object(r.a)(i,n,[],!1,null,null,null);o.options.__file="src/scripts/components/menu/menuitem.vue";t.a=o.exports},"72n3":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{if("touchstart"===e.type&&(this.ignoringMouseDown_=!0),this.getFrameCount()>0)return;this.setFrameCount(1);var s,n,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)s=Math.round(i.width/2),n=Math.round(i.height/2);else{var r=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;s=Math.round(r-i.left),n=Math.round(o-i.top)}this.setRippleXY(s,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,n,i="translate("+this.x_+"px, "+this.y_+"px)";t?(n=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(n=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+i+n,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},"KHd+":function(e,t,s){"use strict";function n(e,t,s,n,i,r,o,l){var a,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=a):i&&(a=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(c.functional){c._injectStyles=a;var d=c.render;c.render=function(e,t){return a.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:c}}s.d(t,"a",function(){return n})},L0bC:function(e,t,s){"use strict";(function(e){s("jh+B");var n="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,i=window.componentHandler;n&&(e.componentHandler=i,i=e.componentHandler),t.a={data:function(){return{$mdl:i}},created:function(){this.$mdl||(this.$mdl=i)}}}).call(this,s("yLpj"))},PE4B:function(e,t,s){"use strict";var n=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)};var i="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((s=e,Array.isArray(s)?[]:{}),e,t):e;var s}function o(e,t,s){return e.concat(t).map(function(e){return r(e,s)})}function l(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function a(e,t,s){var n={};return s.isMergeableObject(e)&&l(e).forEach(function(t){n[t]=r(e[t],s)}),l(t).forEach(function(i){s.isMergeableObject(t[i])&&e[i]?n[i]=function(e,t){if(!t.customMerge)return c;var s=t.customMerge(e);return"function"===typeof s?s:c}(i,s)(e[i],t[i],s):n[i]=r(t[i],s)}),n}function c(e,t,s){(s=s||{}).arrayMerge=s.arrayMerge||o,s.isMergeableObject=s.isMergeableObject||n;var i=Array.isArray(t);return i===Array.isArray(e)?i?s.arrayMerge(e,t,s):a(e,t,s):r(t,s)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,s){return c(e,s,t)},{})};var d=c;e.exports=d},PSzo:function(e,t,s){"use strict";var n=s("gVot"),i=function(e,t){Object.keys(t).forEach(function(s){if(void 0!==e[s]){var i=e[s],r=t[s];Object(n.a)(i,r)}})};t.a=function(e){if(Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(e,t)}}}),"undefined"!==typeof window&&window.Vue)for(var t in e){var s=e[t];window.Vue.component(s.name,s)}}},WuiG:function(e,t,s){"use strict";t.a=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},dc3g:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialMenu=e,e.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},e.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},e.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),n=null;s&&(n=document.getElementById(s))&&(this.forElement_=n,n.addEventListener("click",this.handleForClick_.bind(this)),n.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this)));var i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var r=0;r<i.length;r++)i[r].addEventListener("click",this.boundItemClick_),i[r].tabIndex="-1",i[r].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),r=0;r<i.length;r++){var o=i[r],l=document.createElement("span");l.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var a=document.createElement("span");a.classList.add(this.CssClasses_.RIPPLE),l.appendChild(a),o.appendChild(l),o.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},e.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},e.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},e.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var n=new MouseEvent("mousedown");e.target.dispatchEvent(n),n=new MouseEvent("mouseup"),e.target.dispatchEvent(n),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},e.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},e.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},e.prototype.removeAnimationEndListener_=function(t){t.target.classList.remove(e.prototype.CssClasses_.IS_ANIMATING)},e.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},e.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var n=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),r=0;r<i.length;r++){var o=null;o=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-i[r].offsetTop-i[r].offsetHeight)/t*n+"s":i[r].offsetTop/t*n+"s",i[r].style.transitionDelay=o}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var l=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",l),this.hide())}.bind(this);document.addEventListener("click",l)}},e.prototype.show=e.prototype.show,e.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),n=s.height,i=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(n,i),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},e.prototype.hide=e.prototype.hide,e.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},e.prototype.toggle=e.prototype.toggle,componentHandler.register({constructor:e,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0})}()},gVot:function(e,t,s){"use strict";var n=s("PE4B"),i=s.n(n),r=s("WuiG");t.a=function(e,t){Object.keys(t).forEach(function(s){if(void 0!==e.props[s]){var n=e.props[s].default;"object"!==Object(r.a)(n)?e.props[s].default=t[s]:e.props[s].default=i()(n,t[s])}})}},"iGp/":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{class:[e.menuClassName,e.positionClassName],attrs:{"data-mdl-for":e.dropdownId}},[e._t("default",e._l(e.currentMenu,function(t,n){return s("ui-menuitem",{key:n,attrs:{item:"object"===e.getType(t)?t:{}},on:{click:function(s){return e.handleItem(t)}}})}))],2)};n._withStripped=!0;var i=s("L0bC"),r=(s("dc3g"),s("72n3"),s("WuiG")),o=s("6aOb"),l=["top-left","top-right","bottom-left","bottom-right"],a={name:"ui-menu",mixins:[i.a],components:{UiMenuitem:o.a},props:{menu:{type:Array,default:function(){return[]}},dropdownId:{type:String,required:!0},noRipple:{type:Boolean,default:!1},position:{type:[Number,String],default:0}},data:function(){return{getType:r.a,currentMenu:this.menu}},computed:{menuClassName:function(){return{"mdl-menu":!0,"mdl-js-menu":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple}},positionClassName:function(){var e="string"===Object(r.a)(this.position)?l.indexOf(this.position)+1:this.position,t=e>0&&e<=l.length&&l[e-1];return t?"mdl-menu--".concat(t):""}},watch:{menu:function(e){this.currentMenu=e}},methods:{handleItem:function(e){e.disabled||this.$emit("selected",Object.assign({},e))}},mounted:function(){this.$mdl.upgradeElements(this.$el)}},c=s("KHd+"),d=Object(c.a)(a,n,[],!1,null,null,null);d.options.__file="src/scripts/components/menu/menu.vue";t.a=d.exports},"jh+B":function(e,t){var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(s=function(){"use strict";var e=[],t=[],s="mdlComponentConfigInternal_";function n(t,s){for(var n=0;n<e.length;n++)if(e[n].className===t)return"undefined"!==typeof s&&(e[n]=s),e[n];return!1}function i(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function r(e,t){return-1!==i(e).indexOf(t)}function o(e,t,s){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var n=document.createEvent("Events");return n.initEvent(e,t,s),n}function l(t,s){if("undefined"===typeof t&&"undefined"===typeof s)for(var i=0;i<e.length;i++)l(e[i].className,e[i].cssClass);else{var r=t;if("undefined"===typeof s){var o=n(r);o&&(s=o.cssClass)}for(var c=document.querySelectorAll("."+s),d=0;d<c.length;d++)a(c[d],r)}}function a(l,a){if(!("object"===typeof l&&l instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=o("mdl-componentupgrading",!0,!0);if(l.dispatchEvent(c),!c.defaultPrevented){var d=i(l),u=[];if(a)r(l,a)||u.push(n(a));else{var h=l.classList;e.forEach(function(e){h.contains(e.cssClass)&&-1===u.indexOf(e)&&!r(l,e.className)&&u.push(e)})}for(var p,_=0,m=u.length;_<m;_++){if(!(p=u[_]))throw new Error("Unable to find a registered component for the given class.");d.push(p.className),l.setAttribute("data-upgraded",d.join(","));var f=new p.classConstructor(l);f[s]=p,t.push(f);for(var E=0,g=p.callbacks.length;E<g;E++)p.callbacks[E](l);p.widget&&(l[p.className]=f);var C=o("mdl-componentupgraded",!0,!1);l.dispatchEvent(C)}}}function c(e){if(e){var n=t.indexOf(e);t.splice(n,1);var i=e.element_.getAttribute("data-upgraded").split(","),r=i.indexOf(e[s].classAsString);i.splice(r,1),e.element_.setAttribute("data-upgraded",i.join(","));var l=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(l)}}return{upgradeDom:l,upgradeElement:a,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var s,n=0,i=t.length;n<i;n++)(s=t[n])instanceof HTMLElement&&(a(s),s.children.length>0&&e(s.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)l(e[t].className)},registerUpgradedCallback:function(e,t){var s=n(e);s&&s.callbacks.push(t)},register:function(t){var i=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(i=t.widget||t.widget);var r={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===r.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===r.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(s))throw new Error("MDL component classes must not have "+s+" defined as a property.");n(t.classAsString,r)||e.push(r)},downgradeElements:function(e){var s=function(e){t.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)s(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");s(e)}}}}()).ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})})},"mrN/":function(e,t,s){"use strict";s.r(t);var n=s("PSzo"),i=s("iGp/");s.d(t,"UiMenu",function(){return i.a});var r=s("6aOb");s.d(t,"UiMenuitem",function(){return r.a});var o={UiMenu:i.a,UiMenuitem:r.a};Object(n.a)(o),t.default=o},yLpj:function(e,t){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch(n){"object"===typeof window&&(s=window)}e.exports=s}})});