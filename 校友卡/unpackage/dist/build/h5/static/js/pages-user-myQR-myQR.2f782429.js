(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myQR-myQR"],{"21d5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){},methods:{printscreen:function(){this.tis="正在保存";var t=this.$mp.page.$getAppWebview(),e=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick((function(){var n=this;setTimeout((function(){t.draw(e,(function(t){n.showBtn=!0,console.log("bitmap绘制图片成功"),console.log("e: "+JSON.stringify(t)),e.save("_doc/Qr.jpg",{overwrite:!0,quality:100},(function(t){plus.gallery.save(t.target,(function(t){uni.showToast({title:"保存成功"}),n.tis="保存到相册",e.clear()}),(function(t){e.clear()}))}),(function(t){console.log("保存图片失败："+JSON.stringify(t))}))}),(function(t){console.log("bitmap绘制图片失败："+JSON.stringify(t))}))}),200)}))}}};e.default=i},3060:function(t,e,n){"use strict";n.r(e);var i=n("21d5"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"34b4":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"block"}),i("v-uni-view",{staticClass:"QR"},[i("v-uni-image",{attrs:{src:n("f119")}})],1),i("v-uni-view",{staticClass:"title"},[t._v("我的校友二维码")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.printscreen.apply(void 0,arguments)}}},[t._v(t._s(t.tis))]),i("v-uni-view",{staticClass:"logo"})],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"86ef":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2eaae9e0]{background-color:#f06c7a}.block[data-v-2eaae9e0]{width:100%;height:30vh;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.QR[data-v-2eaae9e0]{width:60vw;height:60vw;margin:-40vw auto 0 auto;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.QR uni-image[data-v-2eaae9e0]{width:50vw;height:50vw}.title[data-v-2eaae9e0]{width:100%;margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?36?%;color:#fff}.btn[data-v-2eaae9e0]{width:50%;height:%?80?%;border-radius:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?20?%;margin:0 auto;margin-top:%?50?%;background-color:hsla(0,0%,100%,.8)}.logo[data-v-2eaae9e0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;bottom:%?25?%}.logo uni-image[data-v-2eaae9e0]{width:39.6%}body.?%PAGE?%[data-v-2eaae9e0]{background-color:#f06c7a}',""]),t.exports=e},c75e:function(t,e,n){"use strict";var i=n("e5cf"),a=n.n(i);a.a},e5cf:function(t,e,n){var i=n("86ef");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("521d232a",i,!0,{sourceMap:!1,shadowMode:!1})},e6bd:function(t,e,n){"use strict";n.r(e);var i=n("34b4"),a=n("3060");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c75e");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"2eaae9e0",null,!1,i["a"],s);e["default"]=r.exports},f119:function(t,e,n){t.exports=n.p+"static/img/qr.8a9d9da6.png"}}]);