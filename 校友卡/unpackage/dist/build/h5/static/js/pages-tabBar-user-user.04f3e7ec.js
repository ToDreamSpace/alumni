(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-user-user"],{"062f":function(t,i,e){"use strict";e.r(i);var a=e("1928"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"0a83":function(t,i,e){"use strict";e.r(i);var a=e("89b8"),n=e("062f");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("ea71");var d,s=e("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5fa3addc",null,!1,a["a"],d);i["default"]=l.exports},1928:function(t,i,e){"use strict";(function(t){var a=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("fc11")),o={data:function(){return{zhuti_id:0,zhutitupian:"../../../static/img/alumni/red.png",zhuti:["../../../static/img/alumni/red.png","../../../static/img/alumni/purple.png","../../../static/img/alumni/yellow.png","../../../static/img/alumni/blue.png","../../../static/img/alumni/cyan.png","../../../static/img/alumni/green.png","../../../static/img/alumni/orange.png"],isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,user:(0,n.default)({id:"00000000000",name:"***",face:"/static/img/face.jpg",signature:"个性签名",is_authentication:"0",sfzh:"",zuigaoxueli:""},"is_authentication",""),viewCollege:{byrq:"2020",college:"***",id:"***",major:"***",rxrq:"***"},zuigaoxueli:"本科"}},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){var i=this;this.statusHeight=0,0==t.islogin()?uni.reLaunch({url:"../../login/login"}):uni.request({url:i.$url+"userinfo/index",method:"POST",header:{token:t.islogin()},success:function(t){if(200==t.statusCode)switch(i.user=t.data.data,i.zuigaoxueli=t.data.data.zuigaoxueli,i.zuigaoxueli){case"本科":i.viewCollege=t.data.data.benke;break;case"专科":i.viewCollege=t.data.data.zhuanke;break;case"硕士":i.viewCollege=t.data.data.shuoshi;break;case"博士":i.viewCollege=t.data.data.boshi;break}},complete:function(t){0==t.data.code&&uni.reLaunch({url:"../../login/login"})}})},onReady:function(){uni.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var t=this;uni.getStorage({key:"UserInfo",success:function(i){i.data?t.user=i.data:t.isfirst},fail:function(t){}})},methods:{toMsg:function(){uni.navigateTo({url:"../../msg/msg"})},toOrderList:function(t){uni.setStorageSync("tbIndex",t),uni.navigateTo({url:"../../user/order_list/order_list?tbIndex="+t})},toSetting:function(){uni.navigateTo({url:"../../user/Improveinfo/Improveinfo"})},toMyQR:function(){uni.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){uni.showToast({title:"请登录",icon:"none"}),uni.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var t=uni.getStorageSync("UserInfo");return!!t},toDeposit:function(){uni.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(t){t?uni.navigateTo({url:t}):uni.showToast({title:"模板未包含此页面",icon:"none"})},toChangezhuti:function(){this.zhuti_id<this.zhuti.length-1?this.zhuti_id++:this.zhuti_id=0,this.zhutitupian=this.zhuti[this.zhuti_id]}}};i.default=o}).call(this,e("c8ba"))},"4bc6":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5fa3addc]{position:relative;background-color:#fff}.status[data-v-5fa3addc]{width:100%;height:0;position:fixed;z-index:10;background-color:#f06c7a;top:0}.header[data-v-5fa3addc]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#f06c7a}.header .icon-btn[data-v-5fa3addc]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-5fa3addc]{color:#fff;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.place[data-v-5fa3addc]{background-color:#f06c7a;height:%?100?%}.place-bottom[data-v-5fa3addc]{height:%?300?%}.user[data-v-5fa3addc]{width:92%;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-gradient(linear,left top,left bottom,from(#f06c7a),to(#7f010a));background:-webkit-linear-gradient(top,#f06c7a,#7f010a);background:linear-gradient(180deg,#f06c7a 0,#7f010a);padding-bottom:%?120?%}.user .left[data-v-5fa3addc]{width:20vw;height:20vw;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?20?%;border:solid %?1?% #fff;border-radius:100%}.user .left uni-image[data-v-5fa3addc]{width:20vw;height:20vw;border-radius:100%}.user .right[data-v-5fa3addc]{width:100%}.user .right .username[data-v-5fa3addc]{font-size:%?36?%;color:#fff}.user .right .signature[data-v-5fa3addc]{color:#eee;font-size:%?28?%}.user .erweima[data-v-5fa3addc]{-webkit-flex-shrink:0;flex-shrink:0;width:10vw;height:10vw;margin-left:5vw;border-radius:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-gradient(linear,right top,left top,from(#fbbb37),color-stop(105%,#fcf0d0));background:-webkit-linear-gradient(right,#fbbb37,#fcf0d0 105%);background:linear-gradient(270deg,#fbbb37 0,#fcf0d0 105%)}.user .erweima .icon[data-v-5fa3addc]{color:#7b6335;font-size:%?42?%}.order[data-v-5fa3addc]{width:84%;margin:%?30?% 4% %?30?% 4%;padding:%?30?% 4% %?20?% 4%;background-color:#fff;-webkit-box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);border-radius:%?15?%}.order .list[data-v-5fa3addc]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:solid %?1?% #17e6a1;padding-bottom:%?10?%}.order .list .box[data-v-5fa3addc]{width:20%}.order .list .box .img[data-v-5fa3addc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.order .list .box .img .icon[data-v-5fa3addc]{font-size:%?50?%;color:#464646}.order .list .box .text[data-v-5fa3addc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#3d3d3d}.order .balance-info[data-v-5fa3addc]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% 0}.order .balance-info .left[data-v-5fa3addc]{width:75%;display:-webkit-box;display:-webkit-flex;display:flex}.order .balance-info .left .box[data-v-5fa3addc]{width:50%;font-size:%?28?%}.order .balance-info .left .box .num[data-v-5fa3addc]{width:100%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:#f9a453}.order .balance-info .left .box .text[data-v-5fa3addc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3d3d3d;font-size:%?28?%}.order .balance-info .right[data-v-5fa3addc]{border-left:solid %?1?% #17e6a1;width:25%}.order .balance-info .right .box .img[data-v-5fa3addc]{width:100%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.order .balance-info .right .box .img .icon[data-v-5fa3addc]{font-size:%?45?%;color:#e78901}.order .balance-info .right .box .text[data-v-5fa3addc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#3d3d3d}.VIP[data-v-5fa3addc]{width:92%;margin:%?-65?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.2);box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.2);border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.VIP uni-image[data-v-5fa3addc]{border-radius:%?8?%;width:100%}.VIP .face[data-v-5fa3addc]{margin-top:%?80?%;border-radius:%?5?%;width:%?160?%;height:%?160?%}.VIP .title[data-v-5fa3addc]{width:100%;color:#796335;font-size:%?30?%}.VIP .tis[data-v-5fa3addc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;color:#fcf0d0;font-size:%?26?%}.VIP .hassfzh[data-v-5fa3addc]{position:absolute;width:40%;height:%?60?%;top:35%;left:30%;vertical-align:middle;background-color:#7f010a;border-radius:%?10?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-shadow:2px 2px 2px #888;box-shadow:2px 2px 2px #888}.VIP .info[data-v-5fa3addc]{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%}.VIP .bankuai1[data-v-5fa3addc]{padding-top:10px;text-align:center;width:35%;height:100%}.VIP .bankuai1 .NO[data-v-5fa3addc]{position:relative;top:78%;left:10%;font-size:small;font-family:KaiTi;text-align:left;display:block}.VIP .bankuai2[data-v-5fa3addc]{padding-top:10px;text-align:center;width:30%;height:100%}.VIP .bankuai3[data-v-5fa3addc]{padding-top:10px;text-align:center;width:35%;height:100%}.VIP .bankuai3 .infotxt uni-text[data-v-5fa3addc]{font-size:small;font-family:KaiTi;display:block;text-align:left}.toolbar[data-v-5fa3addc]{width:92%;margin:0 4% 0 4%;padding:0 0 %?20?% 0;background-color:#fff;-webkit-box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);border-radius:%?15?%}.toolbar .title[data-v-5fa3addc]{padding-top:%?10?%;margin:0 0 %?10?% 3%;font-size:%?30?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.toolbar .list[data-v-5fa3addc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.toolbar .list .box[data-v-5fa3addc]{width:25%;margin-bottom:%?30?%}.toolbar .list .box .img[data-v-5fa3addc]{width:23vw;height:10.5vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.toolbar .list .box .img uni-image[data-v-5fa3addc]{width:9vw;height:9vw}.toolbar .list .box .text[data-v-5fa3addc]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#3d3d3d}body.?%PAGE?%[data-v-5fa3addc]{background-color:#fff}',""]),t.exports=i},"6d81":function(t,i,e){var a=e("4bc6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("b650a83a",a,!0,{sourceMap:!1,shadowMode:!1})},"89b8":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.showHeader?e("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop}}):t._e(),t.showHeader?e("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop}},[e("v-uni-view",{staticClass:"addr"}),e("v-uni-view",{staticClass:"input-box"}),e("v-uni-view",{staticClass:"icon-btn"},[e("v-uni-view",{staticClass:"icon setting",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}})],1)],1):t._e(),t.showHeader?e("v-uni-view",{staticClass:"place"}):t._e(),e("v-uni-view",{staticClass:"user"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:t.user.face},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"username",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}},[t._v(t._s(t.user.name))]),e("v-uni-view",{staticClass:"signature",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSetting.apply(void 0,arguments)}}},[t._v(t._s(t.user.signature))])],1),e("v-uni-view",{staticClass:"erweima",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toMyQR.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon qr"})],1)],1),e("v-uni-view",{staticClass:"VIP"},[e("v-uni-image",{attrs:{src:t.zhutitupian,mode:"scaleToFill"}}),e("v-uni-view",{staticClass:"info"},[null==t.user.sfzh||""==t.user.sfzh?e("v-uni-navigator",{staticClass:"hassfzh",attrs:{url:"../../user/Improveinfo/Improveinfo"}},[e("v-uni-text",[t._v("请完善资料")])],1):t._e(),e("v-uni-view",{staticClass:"bankuai1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toChangezhuti.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"NO"},[t._v("NO"+t._s(t.user.id))])],1),e("v-uni-view",{staticClass:"bankuai2",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toChangezhuti.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"bankuai3",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toChangezhuti.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"face",attrs:{src:t.user.face,mode:"scaleToFill"}}),e("v-uni-view",{staticClass:"infotxt"},[e("v-uni-text",[t._v("姓名："+t._s(t.user.name))]),e("v-uni-text",[t._v("学院："+t._s(t.viewCollege.college))]),e("v-uni-text",[t._v("年级："+t._s(t.viewCollege.rxrq)+"级")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"place-bottom"})],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},ea71:function(t,i,e){"use strict";var a=e("6d81"),n=e.n(a);n.a}}]);