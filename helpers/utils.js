!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="+/BV")}({"+/BV":function(e,t,n){"use strict";n.r(t),n.d(t,"isEmpty",function(){return u}),n.d(t,"jsonEqual",function(){return i}),n.d(t,"isDeepEqual",function(){return f});var r=n("WuiG"),o=[void 0,null,!1,0,"","0"],u=function(e){var t=!1;switch(Object(r.a)(e)){case"array":t=!e.length;break;case"map":case"set":t=!e.size;break;case"object":t=!Object.keys(e).length;break;default:for(var n=o.length;n--;)if(e===o[n]){t=!0;break}}return t},i=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},f=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t===n)return!0;if("function"===typeof t&&"function"===typeof n)return t.toString()===n.toString();if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();var o=!r||e(Object.getPrototypeOf(t),Object.getPrototypeOf(n),!0),u=Object.getOwnPropertyNames(t),i=Object.getOwnPropertyNames(n);return u.length===i.length&&o&&u.every(function(r){return e(t[r],n[r])})}},WuiG:function(e,t,n){"use strict";t.a=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}}})});