!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/lib/",e(e.s=107)}([,function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(3),o=e(26),i=e(16),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(8),o=e(28);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(11),o=e(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(36)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(10),i=e(9),u=e(15)("src"),c=e(37),f=(""+c).split("toString");e(11).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},,function(t,n,e){var r=e(14)("wks"),o=e(15),i=e(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(40),o=e(6);t.exports=function(t){return r(o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(38);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(7),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(1),o=e(11),i=e(10),u=e(17),c=e(22),f=function(t,n,e){var s,a,p,l,d=t&f.F,h=t&f.G,v=t&f.S,y=t&f.P,b=t&f.B,m=h?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,x=h?o:o[n]||(o[n]={}),_=x.prototype||(x.prototype={});for(s in h&&(e=n),e)p=((a=!d&&m&&void 0!==m[s])?m:e)[s],l=b&&a?c(p,r):y&&"function"==typeof p?c(Function.call,p):p,m&&u(m,s,p,t&f.U),x[s]!=p&&i(x,s,l),y&&_[s]!=p&&(_[s]=p)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){"use strict";function r(t,n,e,r,o,i,u,c){var f,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(s.functional){s._injectStyles=f;var a=s.render;s.render=function(t,n){return f.call(n),a(t,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:s}}e.d(n,"a",function(){return r})},function(t,n,e){t.exports=!e(2)&&!e(5)(function(){return 7!=Object.defineProperty(e(27)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(4),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},,,function(t,n,e){var r=e(55),o=e(28),i=e(20),u=e(16),c=e(9),f=e(26),s=Object.getOwnPropertyDescriptor;n.f=e(2)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(9),o=e(20),i=e(57)(!1),u=e(33)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(14)("keys"),o=e(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},,function(t,n){t.exports=!1},function(t,n,e){t.exports=e(14)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},,function(t,n,e){var r=e(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},,,,,,,,,,,,function(t,n,e){"use strict";var r=e(1),o=e(9),i=e(13),u=e(53),c=e(16),f=e(5),s=e(56).f,a=e(31).f,p=e(8).f,l=e(59).trim,d=r.Number,h=d,v=d.prototype,y="Number"==i(e(61)(v)),b="trim"in String.prototype,m=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,i=(n=b?n.trim():l(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var u,f=n.slice(2),s=0,a=f.length;s<a;s++)if((u=f.charCodeAt(s))<48||u>o)return NaN;return parseInt(f,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(y?f(function(){v.valueOf.call(e)}):"Number"!=i(e))?u(new h(m(n)),e,d):m(n)};for(var x,_=e(2)?s(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;_.length>g;g++)o(h,x=_[g])&&!o(d,x)&&p(d,x,a(h,x));d.prototype=v,v.constructor=d,e(17)(r,"Number",d)}},function(t,n,e){var r=e(4),o=e(54).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(4),o=e(3),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(22)(Function.call,e(31).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(32),o=e(21).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(20),o=e(23),i=e(58);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(7),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(24),o=e(6),i=e(5),u=e(60),c="["+u+"]",f=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),a=function(t,n,e){var o={},c=i(function(){return!!u[t]()||"​"!="​"[t]()}),f=o[t]=c?n(p):u[t];e&&(o[e]=f),r(r.P+r.F*c,"String",o)},p=a.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(s,"")),t};t.exports=a},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(3),o=e(62),i=e(21),u=e(33)("IE_PROTO"),c=function(){},f=function(){var t,n=e(27)("iframe"),r=i.length;for(n.style.display="none",e(64).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(8),o=e(3),i=e(63);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(32),o=e(21);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n){t.exports=function(t,n){if(t!==n)throw new TypeError("Cannot instantiate an arrow function")}},,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r=e(78),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n.default=o.a},function(t,n,e){"use strict";var r=e(12);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e(85),e(52);var o=r(e(65)),i={name:"myCheckboxGroup",data:function(){return{options:[]}},props:{value:{type:Array,default:function(){return(0,o.default)(this,void 0),[]}.bind(void 0)},disabled:{type:Boolean,default:!1},max:{type:Number,default:-1},min:{type:Number,default:-1},button:{type:Boolean,default:!1}},watch:{value:{handler:function(t){this.initValue()},immediate:!0},disabled:{handler:function(t){this.syncOptionsDisable(t)},immediate:!0},button:{handler:function(t){this.syncOptionsButtonStyle(t)},immediate:!0}},created:function(){var t=this;this.$on("on-checkbox-add",function(n){(0,o.default)(this,t),this.options.push(n),this.initValue(),this.syncOptionsDisable(this.disabled),this.syncOptionsButtonStyle(this.button)}.bind(this)),this.$on("on-checkbox-remove",function(n){(0,o.default)(this,t),this.options.splice(this.options.indexOf(n),1),this.syncValue()}.bind(this)),this.$on("on-checkbox-select",function(){(0,o.default)(this,t),this.syncValue()}.bind(this))},methods:{initValue:function(){var t=this;this.options.forEach(function(n){var e=this;(0,o.default)(this,t),n.checked=this.value.find(function(t){return(0,o.default)(this,e),t===n.label}.bind(this))}.bind(this)),this.$nextTick(function(){(0,o.default)(this,t),this.optionsLimit()}.bind(this))},syncValue:function(){var t=this,n=this.options.reduce(function(n,e){return(0,o.default)(this,t),e.checked&&n.push(e.label),n}.bind(this),[]);this.$emit("input",n),this.$emit("change",n),this.optionsLimit()},syncOptionsDisable:function(t){var n=this;this.options.forEach(function(e){(0,o.default)(this,n),e.myDisabled=t}.bind(this))},optionsLimit:function(){var t=this;this.$nextTick(function(){var n=this;(0,o.default)(this,t),this.options.forEach(function(t){(0,o.default)(this,n),t.limitDisabled=!1}.bind(this));var e=this.value.length;e>=this.max&&this.max>-1&&this.options.forEach(function(t){(0,o.default)(this,n),t.checked||(t.limitDisabled=!0)}.bind(this)),e<=this.min&&this.min>-1&&this.options.forEach(function(t){(0,o.default)(this,n),t.checked&&(t.limitDisabled=!0)}.bind(this))}.bind(this))},syncOptionsButtonStyle:function(t){var n=this;this.options.forEach(function(e){(0,o.default)(this,n),e.button=t}.bind(this))}}};n.default=i},,,,,,,function(t,n,e){"use strict";var r=e(24),o=e(86)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(90)("find")},function(t,n,e){var r=e(22),o=e(40),i=e(34),u=e(23),c=e(87);t.exports=function(t,n){var e=1==t,f=2==t,s=3==t,a=4==t,p=6==t,l=5==t||p,d=n||c;return function(n,c,h){for(var v,y,b=i(n),m=o(b),x=r(c,h,3),_=u(m.length),g=0,O=e?d(n,_):f?d(n,0):void 0;_>g;g++)if((l||g in m)&&(y=x(v=m[g],g,b),t))if(e)O[g]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return g;case 2:O.push(v)}else if(a)return!1;return p?-1:s||a?a:O}}},function(t,n,e){var r=e(88);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(4),o=e(89),i=e(19)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(19)("unscopables"),o=Array.prototype;null==o[r]&&e(10)(o,r,{}),t.exports=function(t){o[r][t]=!0}},,,,,,function(t,n,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-checkbox-group"},[this._t("default")],2)},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},,,,,,,,,,,function(t,n,e){"use strict";var r=e(12);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e(108)).default;n.default=o},function(t,n,e){"use strict";e.r(n);var r=e(96),o=e(77);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);var u=e(25),c=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);n.default=c.exports}])});
//# sourceMappingURL=checkbox-group.js.map