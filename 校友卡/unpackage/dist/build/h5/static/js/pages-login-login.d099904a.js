(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0774":function(e,t,i){var r=i("9830");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("643f7aa8",r,!0,{sourceMap:!1,shadowMode:!1})},"115e":function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__("c19f"),__webpack_require__("82da"),__webpack_require__("ace4"),__webpack_require__("d3b7"),__webpack_require__("ac1f"),__webpack_require__("25f0"),__webpack_require__("1276"),__webpack_require__("5cc6"),__webpack_require__("fb2c"),__webpack_require__("9a8c"),__webpack_require__("a975"),__webpack_require__("735e"),__webpack_require__("c1ac"),__webpack_require__("d139"),__webpack_require__("3a7b"),__webpack_require__("d5d6"),__webpack_require__("82f8"),__webpack_require__("e91f"),__webpack_require__("60bd"),__webpack_require__("5f96"),__webpack_require__("3280"),__webpack_require__("3fcc"),__webpack_require__("ca91"),__webpack_require__("25a1"),__webpack_require__("cd26"),__webpack_require__("3c5d"),__webpack_require__("2954"),__webpack_require__("649e"),__webpack_require__("219c"),__webpack_require__("170b"),__webpack_require__("b39a"),__webpack_require__("72f7"),function(){"use strict";function t(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var b=function(e){return function(i){return new t(!0).update(i)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var i=0;i<c.length;++i){var r=c[i];e[r]=b(r)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(e){if(!this.finalized){var t,i=typeof e;if("string"!==i){if("object"!==i)throw r;if(null===e)throw r;if(a&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||a&&ArrayBuffer.isView(e)))throw r;t=!0}for(var n,s,o=0,c=e.length,u=this.blocks,f=this.buffer8;o<c;){if(this.hashed&&(this.hashed=!1,u[0]=u[16],u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),t)if(a)for(s=this.start;o<c&&s<64;++o)f[s++]=e[o];else for(s=this.start;o<c&&s<64;++o)u[s>>2]|=e[o]<<y[3&s++];else if(a)for(s=this.start;o<c&&s<64;++o)(n=e.charCodeAt(o))<128?f[s++]=n:n<2048?(f[s++]=192|n>>6,f[s++]=128|63&n):n<55296||n>=57344?(f[s++]=224|n>>12,f[s++]=128|n>>6&63,f[s++]=128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++o)),f[s++]=240|n>>18,f[s++]=128|n>>12&63,f[s++]=128|n>>6&63,f[s++]=128|63&n);else for(s=this.start;o<c&&s<64;++o)(n=e.charCodeAt(o))<128?u[s>>2]|=n<<y[3&s++]:n<2048?(u[s>>2]|=(192|n>>6)<<y[3&s++],u[s>>2]|=(128|63&n)<<y[3&s++]):n<55296||n>=57344?(u[s>>2]|=(224|n>>12)<<y[3&s++],u[s>>2]|=(128|n>>6&63)<<y[3&s++],u[s>>2]|=(128|63&n)<<y[3&s++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++o)),u[s>>2]|=(240|n>>18)<<y[3&s++],u[s>>2]|=(128|n>>12&63)<<y[3&s++],u[s>>2]|=(128|n>>6&63)<<y[3&s++],u[s>>2]|=(128|63&n)<<y[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=u[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var e,t,i,r,n,a,s=this.blocks;this.first?t=((t=((e=((e=s[0]-680876937)<<7|e>>>25)-271733879<<0)^(i=((i=(-271733879^(r=((r=(-1732584194^2004318071&e)+s[1]-117830708)<<12|r>>>20)+e<<0)&(-271733879^e))+s[2]-1126478375)<<17|i>>>15)+r<<0)&(r^e))+s[3]-1316259209)<<22|t>>>10)+i<<0:(e=this.h0,t=this.h1,i=this.h2,t=((t+=((e=((e+=((r=this.h3)^t&(i^r))+s[0]-680876936)<<7|e>>>25)+t<<0)^(i=((i+=(t^(r=((r+=(i^e&(t^i))+s[1]-389564586)<<12|r>>>20)+e<<0)&(e^t))+s[2]+606105819)<<17|i>>>15)+r<<0)&(r^e))+s[3]-1044525330)<<22|t>>>10)+i<<0),t=((t+=((e=((e+=(r^t&(i^r))+s[4]-176418897)<<7|e>>>25)+t<<0)^(i=((i+=(t^(r=((r+=(i^e&(t^i))+s[5]+1200080426)<<12|r>>>20)+e<<0)&(e^t))+s[6]-1473231341)<<17|i>>>15)+r<<0)&(r^e))+s[7]-45705983)<<22|t>>>10)+i<<0,t=((t+=((e=((e+=(r^t&(i^r))+s[8]+1770035416)<<7|e>>>25)+t<<0)^(i=((i+=(t^(r=((r+=(i^e&(t^i))+s[9]-1958414417)<<12|r>>>20)+e<<0)&(e^t))+s[10]-42063)<<17|i>>>15)+r<<0)&(r^e))+s[11]-1990404162)<<22|t>>>10)+i<<0,t=((t+=((e=((e+=(r^t&(i^r))+s[12]+1804603682)<<7|e>>>25)+t<<0)^(i=((i+=(t^(r=((r+=(i^e&(t^i))+s[13]-40341101)<<12|r>>>20)+e<<0)&(e^t))+s[14]-1502002290)<<17|i>>>15)+r<<0)&(r^e))+s[15]+1236535329)<<22|t>>>10)+i<<0,t=((t+=((r=((r+=(t^i&((e=((e+=(i^r&(t^i))+s[1]-165796510)<<5|e>>>27)+t<<0)^t))+s[6]-1069501632)<<9|r>>>23)+e<<0)^e&((i=((i+=(e^t&(r^e))+s[11]+643717713)<<14|i>>>18)+r<<0)^r))+s[0]-373897302)<<20|t>>>12)+i<<0,t=((t+=((r=((r+=(t^i&((e=((e+=(i^r&(t^i))+s[5]-701558691)<<5|e>>>27)+t<<0)^t))+s[10]+38016083)<<9|r>>>23)+e<<0)^e&((i=((i+=(e^t&(r^e))+s[15]-660478335)<<14|i>>>18)+r<<0)^r))+s[4]-405537848)<<20|t>>>12)+i<<0,t=((t+=((r=((r+=(t^i&((e=((e+=(i^r&(t^i))+s[9]+568446438)<<5|e>>>27)+t<<0)^t))+s[14]-1019803690)<<9|r>>>23)+e<<0)^e&((i=((i+=(e^t&(r^e))+s[3]-187363961)<<14|i>>>18)+r<<0)^r))+s[8]+1163531501)<<20|t>>>12)+i<<0,t=((t+=((r=((r+=(t^i&((e=((e+=(i^r&(t^i))+s[13]-1444681467)<<5|e>>>27)+t<<0)^t))+s[2]-51403784)<<9|r>>>23)+e<<0)^e&((i=((i+=(e^t&(r^e))+s[7]+1735328473)<<14|i>>>18)+r<<0)^r))+s[12]-1926607734)<<20|t>>>12)+i<<0,t=((t+=((a=(r=((r+=((n=t^i)^(e=((e+=(n^r)+s[5]-378558)<<4|e>>>28)+t<<0))+s[8]-2022574463)<<11|r>>>21)+e<<0)^e)^(i=((i+=(a^t)+s[11]+1839030562)<<16|i>>>16)+r<<0))+s[14]-35309556)<<23|t>>>9)+i<<0,t=((t+=((a=(r=((r+=((n=t^i)^(e=((e+=(n^r)+s[1]-1530992060)<<4|e>>>28)+t<<0))+s[4]+1272893353)<<11|r>>>21)+e<<0)^e)^(i=((i+=(a^t)+s[7]-155497632)<<16|i>>>16)+r<<0))+s[10]-1094730640)<<23|t>>>9)+i<<0,t=((t+=((a=(r=((r+=((n=t^i)^(e=((e+=(n^r)+s[13]+681279174)<<4|e>>>28)+t<<0))+s[0]-358537222)<<11|r>>>21)+e<<0)^e)^(i=((i+=(a^t)+s[3]-722521979)<<16|i>>>16)+r<<0))+s[6]+76029189)<<23|t>>>9)+i<<0,t=((t+=((a=(r=((r+=((n=t^i)^(e=((e+=(n^r)+s[9]-640364487)<<4|e>>>28)+t<<0))+s[12]-421815835)<<11|r>>>21)+e<<0)^e)^(i=((i+=(a^t)+s[15]+530742520)<<16|i>>>16)+r<<0))+s[2]-995338651)<<23|t>>>9)+i<<0,t=((t+=((r=((r+=(t^((e=((e+=(i^(t|~r))+s[0]-198630844)<<6|e>>>26)+t<<0)|~i))+s[7]+1126891415)<<10|r>>>22)+e<<0)^((i=((i+=(e^(r|~t))+s[14]-1416354905)<<15|i>>>17)+r<<0)|~e))+s[5]-57434055)<<21|t>>>11)+i<<0,t=((t+=((r=((r+=(t^((e=((e+=(i^(t|~r))+s[12]+1700485571)<<6|e>>>26)+t<<0)|~i))+s[3]-1894986606)<<10|r>>>22)+e<<0)^((i=((i+=(e^(r|~t))+s[10]-1051523)<<15|i>>>17)+r<<0)|~e))+s[1]-2054922799)<<21|t>>>11)+i<<0,t=((t+=((r=((r+=(t^((e=((e+=(i^(t|~r))+s[8]+1873313359)<<6|e>>>26)+t<<0)|~i))+s[15]-30611744)<<10|r>>>22)+e<<0)^((i=((i+=(e^(r|~t))+s[6]-1560198380)<<15|i>>>17)+r<<0)|~e))+s[13]+1309151649)<<21|t>>>11)+i<<0,t=((t+=((r=((r+=(t^((e=((e+=(i^(t|~r))+s[4]-145523070)<<6|e>>>26)+t<<0)|~i))+s[11]-1120210379)<<10|r>>>22)+e<<0)^((i=((i+=(e^(r|~t))+s[2]+718787259)<<15|i>>>17)+r<<0)|~e))+s[9]-343485551)<<21|t>>>11)+i<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=i-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+i<<0,this.h3=this.h3+r<<0)},t.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,r=this.h3;return n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,r=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var e,t,i,r="",n=this.array(),a=0;a<15;)e=n[a++],t=n[a++],i=n[a++],r+=p[e>>>2]+p[63&(e<<4|t>>>4)]+p[63&(t<<2|i>>>6)]+p[63&i];return e=n[a],r+(p[e>>>2]+p[e<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"3c35":function(e,t){(function(t){e.exports=t}).call(this,{})},4362:function(e,t,i){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=i("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},4550:function(e,t,i){"use strict";i.r(t);var r=i("e036"),n=i("c4d5");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("dfe1");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"fe8830e8",null,!1,r["a"],s);t["default"]=c.exports},"82da":function(e,t,i){var r=i("23e7"),n=i("ebb5"),a=n.NATIVE_ARRAY_BUFFER_VIEWS;r({target:"ArrayBuffer",stat:!0,forced:!a},{isView:n.isView})},9830:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-fe8830e8]{background:-webkit-linear-gradient(top,#f06c7a,#f06c7a);background:linear-gradient(180deg,#f06c7a 0,#f06c7a);height:100%}.icon[data-v-fe8830e8]{color:#fff}.logo[data-v-fe8830e8]{width:100%;height:45vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.logo .img[data-v-fe8830e8]{width:25%;height:25vw}.logo .img uni-image[data-v-fe8830e8]{width:100%;border-radius:100%}.form[data-v-fe8830e8]{width:86%;padding:0 7%;font-size:%?30?%}.form .username[data-v-fe8830e8],\n  .form .password[data-v-fe8830e8],\n  .form .code[data-v-fe8830e8]{width:calc(100% - %?90?%);height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?45?%;background-color:hsla(0,0%,100%,.1);padding:0 %?45?%;margin-bottom:%?26?%}.form .username uni-input[data-v-fe8830e8],\n    .form .password uni-input[data-v-fe8830e8],\n    .form .code uni-input[data-v-fe8830e8]{width:100%;height:%?50?%;color:hsla(0,0%,100%,.8);font-weight:200}.form .btn[data-v-fe8830e8]{color:#f06c7a;width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?45?%;background-color:#fff;font-size:%?40?%}.re .username[data-v-fe8830e8]{position:relative}.re .username .get-code[data-v-fe8830e8]{position:absolute;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;right:0;padding:0 %?40?%;z-index:3}.re .username .get-code[data-v-fe8830e8]:after{content:" ";width:%?1?%;height:%?50?%;background-color:#fff;position:absolute;z-index:3;margin-right:100%;left:0;top:%?20?%}.re .res[data-v-fe8830e8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;color:hsla(0,0%,100%,.8)}.form .res[data-v-fe8830e8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;color:hsla(0,0%,100%,.8)}.oauth[data-v-fe8830e8]{position:absolute;bottom:%?50?%;width:100%}@media (max-height:150vw){.oauth[data-v-fe8830e8]{display:none}}.oauth .text[data-v-fe8830e8]{width:100%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:hsla(0,0%,100%,.8);font-size:%?28?%}.oauth .list[data-v-fe8830e8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 0}.oauth .list .icon[data-v-fe8830e8]{font-size:%?80?%;margin:0 %?30?%}body.?%PAGE?%[data-v-fe8830e8]{background:-webkit-linear-gradient(top,#f06c7a,#f06c7a);background:linear-gradient(180deg,#f06c7a 0,#f06c7a)}',""]),e.exports=t},c4d5:function(e,t,i){"use strict";i.r(t);var r=i("cce6"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},cce6:function(e,t,i){"use strict";var r=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("115e")),a={data:function(){return{phoneNumber:"",passwd:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1}}},onShow:function(){},onLoad:function(){this.getProvider()},methods:{oauthLogin:function(e){uni.showLoading(),uni.login({provider:e,success:function(t){console.log("success: "+JSON.stringify(t)),uni.getUserInfo({provider:e,success:function(e){console.log("用户信息："+JSON.stringify(e.userInfo)),uni.setStorage({key:"UserInfo",data:{username:e.userInfo.nickName,face:e.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){uni.hideLoading(),uni.showToast({title:"登录成功",icon:"success"}),setTimeout((function(){uni.navigateBack()}),300)}})}})},fail:function(e){console.log("fail: "+JSON.stringify(e))}})},getProvider:function(){var e=this;uni.getProvider({service:"oauth",success:function(t){for(var i=t.provider.length,r=0;r<i;r++)e.showProvider[t.provider[r]]=!0;0==t.provider.length&&(e.isShowOauth=!1)}})},toPage:function(e){uni.hideKeyboard(),uni.navigateTo({url:e})},doLogin:function(){uni.hideKeyboard();var e=this;if(uni.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return uni.showToast({title:"请填写正确手机号码",icon:"none"}),!1;""!=e.passwd&&null!=e.passwd&&void 0!=e.passwd||uni.showToast({title:"请输入密码",icon:"none"}),uni.showLoading({title:"提交中..."});uni.request({url:e.$url+"login/login",data:{username:e.phoneNumber,password:(0,n.default)(e.passwd)},method:"POST",success:function(e){1==e.data.code?(uni.setStorageSync("token",e.data.token),uni.reLaunch({url:"../tabBar/user/user"})):uni.showToast({title:e.data.msg,icon:"none"})}})}}};t.default=a},df7c:function(e,t,i){(function(e){function i(e,t){for(var i=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),i++):i&&(e.splice(r,1),i--)}if(t)for(;i--;i)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,i=0,r=-1,n=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!n){i=t+1;break}}else-1===r&&(n=!1,r=t+1);return-1===r?"":e.slice(i,r)}function n(e,t){if(e.filter)return e.filter(t);for(var i=[],r=0;r<e.length;r++)t(e[r],r,e)&&i.push(e[r]);return i}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var s=a>=0?arguments[a]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=i(n(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===a(e,-1);return e=i(n(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,i){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var i=e.length-1;i>=0;i--)if(""!==e[i])break;return t>i?[]:e.slice(t,i-t+1)}e=t.resolve(e).substr(1),i=t.resolve(i).substr(1);for(var n=r(e.split("/")),a=r(i.split("/")),s=Math.min(n.length,a.length),o=s,c=0;c<s;c++)if(n[c]!==a[c]){o=c;break}var u=[];for(c=o;c<n.length;c++)u.push("..");return u=u.concat(a.slice(o)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),i=47===t,r=-1,n=!0,a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),47===t){if(!n){r=a;break}}else n=!1;return-1===r?i?"/":".":i&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var i=r(e);return t&&i.substr(-1*t.length)===t&&(i=i.substr(0,i.length-t.length)),i},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,i=0,r=-1,n=!0,a=0,s=e.length-1;s>=0;--s){var o=e.charCodeAt(s);if(47!==o)-1===r&&(n=!1,r=s+1),46===o?-1===t?t=s:1!==a&&(a=1):-1!==t&&(a=-1);else if(!n){i=s+1;break}}return-1===t||-1===r||0===a||1===a&&t===r-1&&t===i+1?"":e.slice(t,r)};var a="b"==="ab".substr(-1)?function(e,t,i){return e.substr(t,i)}:function(e,t,i){return t<0&&(t=e.length+t),e.substr(t,i)}}).call(this,i("4362"))},dfe1:function(e,t,i){"use strict";var r=i("0774"),n=i.n(r);n.a},e036:function(e,t,i){"use strict";var r,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"logo"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{mode:"widthFix",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF//////NxTz08/HlRmtzPfHJq5evssrCmR4PFPwAADilJREFUeNrsnY124yoMhIkbSe//xtuk7caxwWgAJ0Dma/eec8+GxWg8QuCfhEAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhMyHfmNqr/xVTR6Lo22y9RRqmMjyBiwaVPM1FjGdVY3lXUjkeJCjmVGTN8oRVcTAf8Ams8db5fiOp9Yf0EwmseXdbE9wbfBvUI8KtIVlZRI95P167FJW2UEJ/XFSxio9KqEep5W91kjZ4eqryErr1Vii8nMwX621GZLddyNeS/pkCfnGtllAyVQGGXLBu9lisHkMIjrFKKYxiAycfm0Wi8gs06HMYRGbMvfadOeVDvMTPbfGtYhGDKKXwTgYywwGuYzHPBaJnFQ6oCC6P73GrE/UEIOILGKO8Hyv0kRcgbyt53yfvNw+adNbBDHI72DFE7obviDfe3Z/8iujiI5ewiMG+S+cL3YORfyftGznc1gEMcgjPWeC94jIpdknJftJncIitt80yUdvccYOEGRp8MkZLKKRpW02aeRylrkFsRJBAIuMtzFne387Tvz3OkRyFhl4/wQxiCsk5YK4C4Uj7YafRRCDuDPWKnbWTpCPsAhkEHfGWn3yy107IWbKTutri0xrEH/GAiYGRBCXQwe3iOyvozfIWEge8hdkUM6yMQstRQwiTZcMBXWvz01DWwTad1/OWFwUprfFprSInWSQy0mC+M6JgS0CGQQQBJkXkPkGWYqMuH+CXZhaCrYBPYIgH3blrHEtcpZBMIdImZ1kPotEDHJpI8hpDnEexX7Rq4NN6Y5bG5aizOK4DgjZyZCcNZhFYvfLtDEIsnMCllm+82LMC1XIhanixGKtBUFy1lgWwUosW8qm3sulbd3r3b8Z0CKlBlkubxXEOZftB9n7Iy/QvjuYsUBBsATnOzXGm0WgXRMwY1mpIHJpbZFhFofFBsGSkLxNkNEsghkEWoSAKwv4486TYzCLYAaxpTDN+27ZxeyH5axBLAIaBMxY1oMgY1kEMwiYscCyCa17wZylIywOnwyiWT2sOGI+h5QLOItFwCemwIwFB7h8zvEIMsC1XHAGQTMWOifAgngdO4xFQIOgGQudE2BBKiwy/r0/BRkLdoiVd3Cs4CAWEWhbEc9YsCA1Ctr4FkGfuZXycMnldAU9Fun8Wi76ULqcnoHgScd9TCNYBH4oHc5YX7BDsEu+SJ0xgEUMnEFgg+BFU0GL8mldRjdIn4J4j6r/XXgDZxA8Y8EL9ZIyAMxZT9dyR74wVTJDF5zvBZ14z5PeLYLumqxm6AJBDA9vc9U7XxyiBkEvxz7H6gIL4u7EvJ1o17vw6K7JBXkXyS687ug+wuvvxH1c+9ygXWYsp0H+h9cfKv8rg3bhtQss+wUXxLoUxGmQe3wFCu7l56VaWJPbt16d1MkuW3d0WUSwReEc7E7GLgWxj9HjT5EeJxFdPlgQlQ4nkc8URDdnYz/f5KYUpLO6t0QQvdxeHY3liMIm0MtpgePqNmUVOGR1MoFVTQDe/lvTSfDOIVM45FlPMFLe+NY2UTRlDeuQ3ZmEBtclYn0naMoa1iH7fwANlTuh1DVRLGWN6pAAx0rxJqFJk4+osh46rr5BzReqp+9c80l4ZieTVFlPFxldXyvyF5/716X93zHyRPfnCwEsIE1kvcb7gCprc9HXP/L/u0bqju5fJ4J34jiuSaqs7X6kwaeiY0d5uxN7SieTVFnbJuKNldV3Ek7oZBKH6DZWClwJKoiVZmcqXBCdaQ7ZXdbJO6RGEHeWE/hE6XL7/dxYhUSsCgqgbCVnDTrpIGUBsdJVOeqMVSg9eQ127n4kAeiky2vquWEkb+QCzsSCWDk7CQvs3C6vqQPne7EgyO31yU6CX3V8JB3dKWf+59P3A8+d7/s+shruMmlWQ012Evxzej8O8aeTSHRzp+I+urlYHXSibk/hI+noRrnIo0R6uIG3HngmvLHoZsIb7UQdnWisk+DtJHQkiPde0mh05WjvL0SbeDp58lQmvIedqE/Crp6hMt/IowY5DG+InruPsxHvJKR3k7edYCPp6nEEjT1tp6lrFLYkRh6SodpE9yC8KQnTnaQkXJ3zHt/29UxbrDzZKBJV73jkISnh6nzEO9EzOunsqU9d4udK7ProLlRPdtfYfT/7FhLrRKs6iTTRSJPESHp7LlqW1OuK9JL+ZGI4lwO1fZ1YrImFgyaeTlTTYw69kR6HI1SHU6LGWxx0ogWdCNpJdJ3T6SySPr7EuI+CZakW6WAZ3ImmWqQjLUvXBtmG2kA9UvHdnOzndBJqO+nynXKbkyxyc/4mUrL9/8hmkG2Co9n4btPV9v/zneyPK9tJn6+U2yaKzUBU9ks1WY4kUZNd/LOdLNlO5LiT7ySlS+a4lhH0iKXu75Ho7XkAtXiRr5EWdr9T7buFRPNNopOfJkts8RFZkki6k/txWfy47jfR2cEKpzcSlcrB/JqeTCP/jh1VUAdTxtGkkjguvJORFImOIlcQpUskgUOleCc2hR7+YFlqRl3y9afbI49QacFxTaGHdxzmrFIT4z6tE0vXXhmnd6yIoCeVJ1iCd2LwmVJwXCN812d2HPuVQC6+kZWAwJlE8U5s8HTlGnp0EMfTQvTugeNOLNpJ2+OSgb5QPRmt9bD1qp6h21MTXyerJs+dCNyJJeXQMBKxsW/GcL1e9TlxRVZwz0vk7yZ1nagK3CSuooTReLr3Sm4r3bAN7kaR+8pZfhaSt3ck2SYnXKNNZNXkZzm97eS670SWRyf54wqPJiMLsr6FbGfv6x/bv7lvg5juW2iqxX1r5reJ+proqglwXKY2h0PSwY3GN0Tn16Mm8QNYtyhocrzMGtohmjoN3fHVTYt8E9XaTmJNZnTIdtiOaEWaZCTRgiae47KhloQOh8QClYlWugkU29JOdEqH6GGcDsKlx20KWtQ1mWoOyejxO/j1Oxiu11OaFHUyoUN8Q++VD3VIt0zmkAkFMTqEKYtzyFwpi3MI5xCmLDqEcwirLDpkviqLKWsYh1jBTxxr+POpc4ggd0Gvb0rYq7E0JdLDJzhEigNmzf4lbw+fsA6pOatP9UekhxmqrLC9O24rSFVOOdkge4uM75DH7bcSBhREpktZj5ylFKQPfu/B1NMFWc4XZIaUFW4PSK7um6VDetNnKkFsZkEk+bP9zaYsqfyZOmW5BVEnknWIBa0hCFNW6gUvsXBZVpDah2iMggCCqGVTVm1mF6asFoK0cwhTVuOUZS9LWfZpggRgUmfKGnVS19yjs8OnLM39vngOsWw+EmuTsnp8qd/92dQcnq2TdlWWOoKtk6Ys7xt2/p+S9XNIlUMMe9PocA4B3gqmXcwhrgJJxq2ygMum0iplVVVZUiVI/ykL2GHNXsJ9yToEy2vDpSzoPYa/o3nBHKJnOaR/QaAbBgoEab6XNXnK6kqQdg4ZN2VZgSDa/xwybpUFCSKN5hCpWRjWOeQ6kEO+JP4jmbr3HIfcXj8d+w3PlxWjvyNfMVwd+VeKTN17zl6W4/pv+kOfIshysiALKAh+1b7/lLXKWG5Bwgv2svRDHaKYIIYLUjyHOE7+gDuk9yrrLYJ49rLOckjvKcs8gsjxQuRtDimZQ3QuQQQXhHNI8yJrXfc6BXl+tdhZVVbJHHKdS5DFJYjdbq79u+SrdEiZIF9fX4ULke3f2vMqsvM5xMYrsnJl1kYQ21YArLLeK8hmD725Q8xzs/2oKcveIkjVHPK4xmkTPo7gFOS47n0WRDerluZV1t/pbyVPoPSessxVZGXq3qQgeso65P71lmZzPrDjq3rXDtEGDqmbQ36/c7TsGa3eqyxf1Zupe/E5pKrKqnukre+UpYKmrNgG/Osdog0d0pcgC+wQAwQ5bQ6Z9qFPO1eQs6qsGodc5xDksO49ZR0Sfu9yKPvP+A6RdoJsHhcom0OkljGrLLdDDm882QjyWElX7GV96MtnvFUvJMifIlZzxfAzXz7jrnqP6979Ez33lXTVfVkfKsiCOyRSZsUu4WrlfVmfmbJOFKT2mjod8uUts1BB3j2H2EBVlpUIsq97292XdYYgI71I2b0MOd6Ab+eQExSRkV6k7C+yDjfg280h7RWx66SCHG3At7v7/ec98u2wwb6uwj+FHC5E2grywV9XoWWCWLUgoSdBbFBBpFSQAG2Of/Q37FiVQ3QSh4wqyMFChHPIG4qso4XIUIJc5xNkwQQJdAi++f6FpKzdQoRVVvMpBGO7EGm3l/XZKctKtymsVhBWWW0dggnCOQSf09EN1M2sziqLgtAhTQVhlXXKHKLlcwirrMzeYlHZG1hlnbcyLDDII9RVc4i+mr5vlIMlkf37vesEef/tBKEnXM/hPz3XdGi0gnUIBUmH0+LfVKG5SbtqDnm7IN29+z37ks+cA0LVXhYdgguyCrjiDgmdO0Smc0jm73X/wzmkmUN2G8byVKjJ7cmn5z+LbL4U9f67Ltuk9o/Ev5DKjlotUzrkjFtxl7q1Eb7ImmgO6UePyLcfSbmWozpEl46w4o26eeYQ60mQrUWmECT1jQQjCLIUX1uw4QR5pCzp2CHFKas7QTQ9MW4HZy02i19UZpWXA71Y5ODIpDZPv9wg/ntqevyy6PuxS/bLTq140G9YhjgN3KE/7sdupo5PaGSbynpAE5cW8g371KNGyg5+Kw6QEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIVH+CTAA2PXaRL7YfsgAAAAASUVORK5CYII="}})],1)],1),i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"username"},[i("v-uni-input",{attrs:{placeholder:"请输入手机号","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),i("v-uni-view",{staticClass:"password"},[i("v-uni-input",{attrs:{placeholder:"请输入密码",password:"true","placeholder-style":"color: rgba(255,255,255,0.8);"},model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}})],1),i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.doLogin.apply(void 0,arguments)}}},[e._v("登 录")]),i("v-uni-view",{staticClass:"res"},[i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage("register")}}},[e._v("用户注册")]),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPage("resetpasswd")}}},[e._v("忘记密码")])],1)],1),e.isShowOauth?i("v-uni-view",{staticClass:"oauth"},[i("v-uni-view",{staticClass:"text"},[e._v("— 快速登录 —")]),i("v-uni-view",{staticClass:"list"},[e.showProvider.weixin?i("v-uni-view",{staticClass:"icon weixin",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.oauthLogin("weixin")}}}):e._e(),e.showProvider.qq?i("v-uni-view",{staticClass:"icon qq",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.oauthLogin("qq")}}}):e._e(),e.showProvider.sinaweibo?i("v-uni-view",{staticClass:"icon sinaweibo",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.oauthLogin("sinaweibo")}}}):e._e()],1)],1):e._e()],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},fb2c:function(e,t,i){var r=i("74e8");r("Uint32",(function(e){return function(t,i,r){return e(this,t,i,r)}}))}}]);