window["a-layoutpc"]=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.Vue},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(10).default)("e0cf0406",i,!0,{})},function(e,t,n){(t=n(3)(!0)).push([e.i,".eb-layout-container-pc {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #343D46;\n  white-space: nowrap;\n}\n.eb-layout-container-pc .eb-layout-header:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 100%;\n  top: 100%;\n  bottom: auto;\n  height: 10px;\n  pointer-events: none;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), color-stop(40%, rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(80%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n}\n.eb-layout-container-pc .eb-layout-header .title {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  /* if set, the width not expand automatically */\n  /* min-width: 180px; */\n  color: #C3D4E7;\n  font-size: 30px;\n  font-weight: 700;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.eb-layout-container-pc .eb-layout-header .tabs {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  height: 100%;\n  background-color: #343D46 !important;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link {\n  color: #C3D4E7;\n  max-width: 200px;\n  align-items: flex-start;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link .close {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 8px;\n  visibility: hidden;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n  background-color: hsla(0, 0%, 100%, 0.12);\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover .close {\n  visibility: visible;\n}\n.eb-layout-container-pc .eb-layout-header .tabs:after {\n  display: none;\n}\n.eb-layout-container-pc .eb-layout-header .buttons {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-right: 1px solid #414D5B;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a {\n  color: #C3D4E7;\n  padding: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-header .mine {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  color: #C3D4E7;\n  padding-left: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine .item {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine a {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .mine:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-groups {\n  position: relative;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-group {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views .eb-layout-view {\n  position: absolute;\n}\n.device-ios .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-android .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-windowsPhone .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close {\n  visibility: visible;\n}\n","",{version:3,sources:["/Users/yangjian/Documents/data/cabloy/egg-born-demo/src/module/a-layoutpc/front/src/assets/css/module.less","module.less"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;ACCF;ADLA;EAOI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;ACCJ;ADCI;EACE,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,yNAAA;EACA,6JAAA;EACA,2JAAA;ACCN;AD3BA;EA8BM,aAAA;EACA,mBAAA;EACA,YAAA;ECAJ,+CAA+C;EAC/C,sBAAsB;EDElB,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;ACAN;ADvCA;EA2CM,aAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,oCAAA;ACDN;AD9CA;EAkDQ,cAAA;EACA,gBAAA;EACA,uBAAA;ACDR;ADnDA;EAuDU,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;ACDV;ADhEA;EAsEQ,gEAAA;ACHR;ADnEA;EA4EQ,gEAAA;EACA,yCAAA;ACNR;ADvEA;EAgFU,mBAAA;ACNV;ADUM;EACE,aAAA;ACRR;AD7EA;EA0FM,aAAA;EACA,mBAAA;EACA,YAAA;EACA,+BAAA;EACA,iBAAA;EACA,kBAAA;ACVN;ADrFA;EAkGQ,cAAA;EACA,YAAA;ACVR;ADzFA;EAuGQ,yCAAA;EACA,kBAAA;ACXR;AD7FA;EA6GM,aAAA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;ACbN;ADpGA;EAoHQ,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ACbR;AD1GA;EA2HQ,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;ACdR;ADiBM;EACE,yCAAA;EACA,kBAAA;ACfR;ADpHA;EAyII,kBAAA;AClBJ;ADvHA;EA4IM,kBAAA;EACA,YAAA;AClBN;AD3HA;EAiJM,kBAAA;EACA,YAAA;ACnBN;AD/HA;EAqJQ,kBAAA;ACnBR;ADyBA;;;EAQY,mBAAA;AC5BZ",file:"module.less",sourcesContent:[".eb-layout-container-pc {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #C3D4E7;\n\n  .eb-layout-header {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: #343D46;\n    white-space: nowrap;\n\n    &:after {\n      content: '';\n      position: absolute;\n      right: 0;\n      width: 100%;\n      top: 100%;\n      bottom: auto;\n      height: 10px;\n      pointer-events: none;\n      background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), color-stop(40%, rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(80%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n    }\n\n    .title {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      /* if set, the width not expand automatically */\n      /* min-width: 180px; */\n      color: #C3D4E7;\n      font-size: 30px;\n      font-weight: 700;\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .tabs {\n      display: flex;\n      align-items: center;\n      flex-grow: 1;\n      height: 100%;\n      background-color: #343D46 !important;\n\n      .tab-link {\n        color: #C3D4E7;\n        max-width: 200px;\n        align-items: flex-start;\n\n        .close {\n          position: absolute;\n          left: 0;\n          top: 0;\n          width: 16px;\n          height: 16px;\n          line-height: 16px;\n          font-size: 16px;\n          background-color: hsla(0, 0%, 100%, .12);\n          border-radius: 8px;\n          visibility: hidden;\n          color: #C3D4E7;\n        }\n      }\n\n      .tab-link.tab-link-active {\n        color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n\n        .close {}\n      }\n\n      .tab-link:hover {\n        color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n        background-color: hsla(0, 0%, 100%, .12);\n\n        .close {\n          visibility: visible;\n        }\n      }\n\n      &:after {\n        display: none;\n      }\n    }\n\n    .buttons {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      border-right: 1px solid #414D5B;\n      padding-left: 6px;\n      padding-right: 6px;\n\n      a {\n        color: #C3D4E7;\n        padding: 6px;\n      }\n\n      a:hover {\n        background-color: hsla(0, 0%, 100%, .12);\n        border-radius: 4px;\n      }\n    }\n\n    .mine {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      color: #C3D4E7;\n      padding-left: 12px;\n\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        padding-right: 12px;\n      }\n\n      a {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        color: #C3D4E7;\n      }\n\n      &:hover {\n        background-color: hsla(0, 0%, 100%, .12);\n        border-radius: 4px;\n      }\n    }\n  }\n\n  .eb-layout-groups {\n    position: relative;\n\n    .eb-layout-group {\n      position: relative;\n      height: 100%;\n    }\n\n    .eb-layout-views {\n      position: relative;\n      height: 100%;\n\n      .eb-layout-view {\n        position: absolute;\n      }\n    }\n  }\n}\n\n.device-ios,\n.device-android,\n.device-windowsPhone {\n  .eb-layout-container-pc {\n    .eb-layout-header {\n      .tabs {\n        .tab-link.tab-link-active {\n          .close {\n            visibility: visible;\n          }\n        }\n      }\n    }\n  }\n}\n",".eb-layout-container-pc {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #343D46;\n  white-space: nowrap;\n}\n.eb-layout-container-pc .eb-layout-header:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 100%;\n  top: 100%;\n  bottom: auto;\n  height: 10px;\n  pointer-events: none;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), color-stop(40%, rgba(0, 0, 0, 0.1)), color-stop(50%, rgba(0, 0, 0, 0.05)), color-stop(80%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0)));\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%);\n}\n.eb-layout-container-pc .eb-layout-header .title {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  /* if set, the width not expand automatically */\n  /* min-width: 180px; */\n  color: #C3D4E7;\n  font-size: 30px;\n  font-weight: 700;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.eb-layout-container-pc .eb-layout-header .tabs {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  height: 100%;\n  background-color: #343D46 !important;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link {\n  color: #C3D4E7;\n  max-width: 200px;\n  align-items: flex-start;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link .close {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 8px;\n  visibility: hidden;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover {\n  color: var(--f7-tabbar-link-active-color, var(--f7-theme-color));\n  background-color: hsla(0, 0%, 100%, 0.12);\n}\n.eb-layout-container-pc .eb-layout-header .tabs .tab-link:hover .close {\n  visibility: visible;\n}\n.eb-layout-container-pc .eb-layout-header .tabs:after {\n  display: none;\n}\n.eb-layout-container-pc .eb-layout-header .buttons {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-right: 1px solid #414D5B;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a {\n  color: #C3D4E7;\n  padding: 6px;\n}\n.eb-layout-container-pc .eb-layout-header .buttons a:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-header .mine {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  color: #C3D4E7;\n  padding-left: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine .item {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n.eb-layout-container-pc .eb-layout-header .mine a {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  color: #C3D4E7;\n}\n.eb-layout-container-pc .eb-layout-header .mine:hover {\n  background-color: hsla(0, 0%, 100%, 0.12);\n  border-radius: 4px;\n}\n.eb-layout-container-pc .eb-layout-groups {\n  position: relative;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-group {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views {\n  position: relative;\n  height: 100%;\n}\n.eb-layout-container-pc .eb-layout-groups .eb-layout-views .eb-layout-view {\n  position: absolute;\n}\n.device-ios .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-android .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close,\n.device-windowsPhone .eb-layout-container-pc .eb-layout-header .tabs .tab-link.tab-link-active .close {\n  visibility: visible;\n}\n"]}]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var r,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),t.default=[]},function(e,t,n){"use strict";n.r(t),t.default=function(e){return{state:{},getters:{},mutations:{},actions:{}}}},function(e,t,n){"use strict";n.r(t),t.default={layout:{login:"/a/login/login",loginOnStart:!0,header:{buttons:[{name:"Home",iconMaterial:"dashboard",url:"/a/base/menu/list",scene:"tool",sceneName:"home"},{name:"Atom",iconMaterial:"group_work",url:"/a/base/atom/list"}],mine:{name:"Mine",iconMaterial:"person",url:"/a/user/user/mine"}},size:{small:320,top:60,spacing:8}}}},function(e,t,n){"use strict";n.r(t),t.default={"zh-cn":n(8).default}},function(e,t,n){"use strict";n.r(t),t.default={Home:"首页",Atom:"原子",Mine:"我的",Theme:"主题","Not LoggedIn":"未登录","Sign in":"登录","Log Out":"退出登录"}},function(e,t,n){"use strict";function i(e,t,n,i,o,a,r,s){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}n.r(t);var o,a=i({render:function(e){var t=this,n=[],i=!0,o=!1,a=void 0;try{for(var r,s=function(){var i=r.value,o=e("div",{domProps:{innerText:i.title}}),a=e("f7-icon",{staticClass:"close",attrs:{material:"close"},nativeOn:{click:function(e){t.groups.removeGroup(i.id),e.stopPropagation(),e.preventDefault()}}});n.push(e("eb-link",{ref:i.id,key:i.id,attrs:{tabLink:"#".concat(i.id)},props:{onPerform:function(){t.groups.switchGroup(i.id)}}},[o,a]))},l=this.layout.groups[Symbol.iterator]();!(i=(r=l.next()).done);i=!0)s()}catch(e){o=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(o)throw a}}return e("f7-toolbar",{ref:"toolbar",attrs:{top:!0,tabbar:!0,scrollable:!0}},n)},computed:{layout:function(){return this.$parent.$parent},groups:function(){return this.layout.$refs.groups}},methods:{isTabActive:function(e){return this.$$(this.$refs[e].$el).hasClass("tab-link-active")}}},void 0,void 0,!1,null,"329a6449",null).exports,r=n(0),s=n.n(r),l=i({render:function(e){var t=this,n=[];this.layout.groups.length>2&&n.push(e("f7-link",{props:{iconMaterial:"expand_more",popoverOpen:"#".concat(this.popoverId)}}));var i=!0,o=!1,a=void 0;try{for(var r,s=function(){var i=r.value,o={iconMaterial:i.iconMaterial};n.push(e("eb-link",{key:i.name,props:o,nativeOn:{click:function(e){t.layout.navigate(i.url,{_scene:i.scene,_sceneName:i.sceneName}),e.stopPropagation(),e.preventDefault()}}}))},l=this.$config.layout.header.buttons[Symbol.iterator]();!(i=(r=l.next()).done);i=!0)s()}catch(e){o=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(o)throw a}}var u=[],c=!0,d=!1,p=void 0;try{for(var h,A=function(){var n=h.value;u.push(e("eb-list-item",{key:n.id,props:{link:"#",popoverClose:!0,title:n.title},on:{click:function(e){t.groups.switchGroup(n.id)}}}))},b=this.layout.groups[Symbol.iterator]();!(c=(h=b.next()).done);c=!0)A()}catch(e){d=!0,p=e}finally{try{c||null==b.return||b.return()}finally{if(d)throw p}}var f=e("f7-list",{attrs:{inset:!0}},u);return n.push(e("f7-popover",{attrs:{id:this.popoverId}},[f])),e("div",n)},data:function(){return{popoverId:s.a.prototype.$meta.util.nextId("popover")}},computed:{layout:function(){return this.$parent.$parent},groups:function(){return this.layout.$refs.groups}}},void 0,void 0,!1,null,"7cc04db0",null).exports,u=i({data:function(){return{popoverId:s.a.prototype.$meta.util.nextId("popover")}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},user:function(){return this.$store.state.auth.user},userName:function(){var e=this.user.op.userName;return this.user.op.id!==this.user.agent.id&&(e="".concat(e,"(").concat(this.$text("Agent"),")")),e},userAvatar:function(){var e=this.user.op.avatar;e||(e=this.$meta.config.modules["a-base"].user.avatar.default);return this.$meta.util.combineImageUrl(e,48)}},methods:{onSignin:function(){this.$meta.vueLayout.openLogin()},onLogout:function(){var e=this;this.$f7.dialog.confirm(this.$text("Are you sure to perform this operation?"),(function(){e.$api.post("/a/base/auth/logout").then((function(){e.$meta.vueApp.reload({echo:!0})})).catch((function(t){e.$f7.notification.create({icon:'<i class="material-icons">error</i>',title:t.message,closeTimeout:3e3}).open()}))}))},onTheme:function(){this.$meta.vueLayout.navigate("/a/user/theme")}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("f7-link",{attrs:{"popover-open":"#"+e.popoverId}},[e.loggedIn?n("div",{staticClass:"item"},[n("img",{staticClass:"avatar avatar24",attrs:{src:e.userAvatar}})]):e._e(),e._v(" "),e.loggedIn?n("div",{staticClass:"item name"},[e._v(e._s(e.userName))]):e._e(),e._v(" "),e.loggedIn?e._e():n("div",{staticClass:"item status"},[e._v(e._s(e.$text("Not LoggedIn")))])]),e._v(" "),n("f7-popover",{attrs:{id:e.popoverId}},[n("f7-list",{attrs:{inset:""}},[n("eb-list-item",{attrs:{"popover-close":"",title:e.$text("Mine"),link:"#","eb-href":e.$config.layout.header.mine.url}},[n("f7-icon",{attrs:{slot:"media",material:e.$config.layout.header.mine.iconMaterial},slot:"media"})],1),e._v(" "),n("eb-list-item",{attrs:{"popover-close":"",link:"#",onPerform:e.onTheme}},[e._v(e._s(e.$text("Theme")))]),e._v(" "),e.loggedIn?e._e():n("eb-list-item",{attrs:{"popover-close":"",link:"#",onPerform:e.onSignin}},[e._v(e._s(e.$text("Sign in")))]),e._v(" "),e.loggedIn?n("eb-list-item",{attrs:{"popover-close":"",link:"#",onPerform:e.onLogout}},[e._v(e._s(e.$text("Log Out")))]):e._e()],1)],1)],1)}),[],!1,null,"5dd7c636",null),c=i({components:{ebTabs:a,ebButtons:l,ebMine:u.exports},render:function(e){var t=e("div",{staticClass:"title",domProps:{innerText:this.title}}),n=e("eb-tabs",{ref:"tabs",staticClass:"tabs"}),i=e("eb-buttons",{staticClass:"buttons"}),o=e("eb-mine",{staticClass:"mine"});return e("div",{staticClass:"eb-layout-header"},[t,n,i,o])},computed:{title:function(){return this.$store.getters["auth/title"]}},methods:{isTabActive:function(e){return this.$refs.tabs.isTabActive(e)}}},void 0,void 0,!1,null,"38fddd74",null).exports,d=i({render:function(e){var t=this,n=[];if(this.views)for(var i=0;i<this.views.length;i++){var o=this.views[i],a={id:o.id,name:o.id,init:!1,pushState:!1,stackPages:!0,pushStateOnLoad:!1,preloadPreviousPage:!1,"data-index":i,"data-size":o.size};n.push(e("eb-view",{ref:o.id,id:o.id,key:o.id,staticClass:"eb-layout-view eb-layout-view-size-".concat(o.size),attrs:a,props:{size:o.size,sizeExtent:o.sizeExtent},on:{"view:ready":function(e){t.onViewReady(e)},"view:title":function(e){t.onViewTitle(e)}}}))}return e("div",n)},props:{groupId:{type:String},views:{type:Array}},computed:{groups:function(){return this.$parent.$parent.$parent},layout:function(){return this.groups.layout},size:function(){return this.layout.size}},methods:{onViewReady:function(e){var t=this,n=this.views.find((function(t){return t.id===e.id}));this.$meta.vueLayout._patchRouter.loadRoute(n.url,(function(i){if(!i)throw new Error("not found route: ".concat(n.url));var o,a=i.route.component.meta,r=a&&a.size||"small",s=t.size[r];t.$$(e.$el).css({width:"".concat(s,"px")}),0===parseInt(t.$$(e.$el).data("index"))&&(o=a&&a.title)&&(o=t.$text(o)),n.size=r,n.sizeExtent={width:t.size[r],height:t.size.main},t.reLayout(),n.callback({view:e,title:o}),delete n.callback}))},resize:function(){var e=this;this.$nextTick((function(){e._resize(),e._reLayout()}))},_resize:function(){var e=!0,t=!1,n=void 0;try{for(var i,o=this.views[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;a.sizeExtent={width:this.size[a.size],height:this.size.main},this.$$(this.$refs[a.id].$el).css({width:"".concat(a.sizeExtent.width,"px")})}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}},reLayout:function(){var e=this;this.$nextTick((function(){e._reLayout()}))},_reLayout:function(){for(var e=this.size.width,t=0,n=this.views.length-1;n>=0;n--){var i=this.$refs[this.views[n].id],o=e-this.$$(i.$el).width()-t;if(!(o>0))break;e=o,t=this.size.spacing}var a=parseInt(this.size.width-e/2);t=0;for(var r=null,s=this.views.length-1;s>=0;s--){var l=this.$refs[this.views[s].id],u=this.$$(l.$el).width();if(a-=u+t,t=this.size.spacing,a<0&&null===r){var c=this.views[s+1];r=a+u+t<2*t&&"small"!==c.size}a<0&&a+u>0&&(a-=a+u),!0!==r?this.$$(l.$el).show():this.$$(l.$el).hide();var d=this.$$(l.$el).css("left");"auto"===d||"0px"===d?this.$$(l.$el).css({left:"".concat(a,"px")}):parseInt(d)!==a&&this.$$(l.$el).animate({left:a},{duration:600})}},onViewTitle:function(e){this.groups.onViewTitle(this.groupId,e)},getView:function(e){return this.$refs[e]}}},void 0,void 0,!1,null,"443c5b4b",null),p=i({components:{ebGroup:d.exports},render:function(e){var t=[],n=!0,i=!1,o=void 0;try{for(var a,r=this.groups[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){var s=a.value,l=e("eb-group",{ref:s.id,staticClass:"eb-layout-views",props:{groupId:s.id,views:s.views}});t.push(e("f7-tab",{key:s.id,staticClass:"eb-layout-group".concat(s.scene?" eb-layout-scene eb-layout-scene-".concat(s.scene):""),attrs:{id:s.id,"data-groupId":s.id},on:{"tab:show":this.onTabShow}},[l]))}}catch(e){i=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(i)throw o}}return e("f7-tabs",{staticClass:"eb-layout-groups"},t)},data:function(){return{}},computed:{layout:function(){return this.$parent},header:function(){return this.layout.$refs.header},groups:function(){return this.layout.groups}},methods:{reLayout:function(e){this.$refs[e].reLayout()},resize:function(){var e=!0,t=!1,n=void 0;try{for(var i,o=this.groups[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;this.$refs[a.id].resize()}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}},getView:function(e,t){return this.$refs[e].getView(t)},onTabShow:function(e){var t=this;this.$nextTick((function(){var n=t.$$(e).data("groupId"),i=t.layout.$refs.header.$refs.tabs.$refs[n];i&&i.$el.scrollIntoView(!1)}))},getGroup:function(e){var t=e.id,n=e.url;return t?this.groups.find((function(e){return e.id===t})):this.groups.find((function(e){return e.url===n}))},createView:function(e){var t=this,n=e.ctx,i=e.groupId,o=e.groupForceNew,a=e.url,r=e.scene,s=e.sceneName;return new Promise((function(e){var l=o?null:t.getGroup({id:i,url:a});if(l||(l={id:t.$meta.util.nextId("layoutgroup"),url:a,title:"",scene:r,sceneName:s,views:[]},"home"===s?t.groups.unshift(l):t.groups.push(l)),l.url===a&&l.views.length>0)t.switchGroup(l.id),e(null);else{var u=-1;if(n&&n.$view&&(u=parseInt(t.$$(n.$view.$el).data("index")))>=l.views.length-1&&(u=-1),-1===u)l.views.push({id:t.$meta.util.nextId("layoutgroupview"),url:a,size:"small",sizeExtent:{width:t.layout.size.small,height:t.layout.size.main},callback:function(n){var i=n.view,o=n.title;o&&(l.title=o),t.$nextTick((function(){t.switchGroup(l.id),e({view:i,options:null})}))}});else{for(var c=u+1,d=l.views.length-1;d>=0;d--)d>c&&l.views.splice(d,1);t.reLayout(l.id);var p=t.getView(l.id,l.views[c].id);e({view:p,options:{reloadAll:!0}})}}}))},switchGroup:function(e){this.$f7.tab.show("#".concat(e))},removeGroup:function(e){var t,n=this,i=this.groups.findIndex((function(t){return t.id===e})),o=this.groups[i];this.header.isTabActive(e)&&(this.groups.length-1>i?t=this.groups[i+1].id:i>0&&(t=this.groups[i-1].id)),this.groups.splice(i,1),this.$nextTick((function(){t&&n.switchGroup(t),0===n.groups.length&&"home"!==o.sceneName&&n.layout.openHome()}))},closeView:function(e){for(var t=parseInt(this.$$(e.$el).data("index")),n=this.$$(e.$el).parents(".eb-layout-group").data("groupId"),i=this.getGroup({id:n}),o=i.views.length-1;o>=0;o--)o>=t&&i.views.splice(o,1);0===i.views.length?this.removeGroup(n):this.reLayout(n)},onViewTitle:function(e,t){if(0===parseInt(this.$$(t.page.$view.$el).data("index"))){var n=this.groups.find((function(t){return t.id===e}));t.title&&(n.title=t.title)}}}},void 0,void 0,!1,null,"529c6ebe",null),h=i({meta:{global:!1},components:{ebHeader:c,ebGroups:p.exports},render:function(e){var t=e("eb-header",{ref:"header",style:{height:"".concat(this.size.top,"px")}}),n=e("eb-groups",{ref:"groups",style:{height:"".concat(this.size.height-this.size.top-2*this.size.spacing,"px"),top:"".concat(this.size.spacing,"px")}});return e("div",{staticClass:"eb-layout-container eb-layout-container-pc"},[t,n])},data:function(){return{started:!1,size:{width:0,height:0,small:0,middle:0,large:0,top:0,main:0,spacing:0},groups:[]}},mounted:function(){var e=this;this.$f7ready((function(){e.start()}))},methods:{onResize:function(){this.started&&(this.setSize(),this.$refs.groups.resize())},setSize:function(){var e=this.size.width=this.$$(this.$el).width(),t=this.size.height=this.$$(this.$el).height(),n=this.size.spacing=this.$config.layout.size.spacing,i=!0,o=!0,a=parseInt((e-4*n)/3);a<this.$config.layout.size.small&&(i=!1,(a=parseInt((e-3*n)/2))<this.$config.layout.size.small&&(o=!1,a=parseInt(e-2*n))),this.size.small=a,this.size.middle=o?2*a+(i?n:0):a,this.size.large=i?3*a+2*n:this.size.middle,this.size.top=this.$config.layout.size.top,this.size.main=t-this.size.top-2*n},start:function(){var e=this;this.setSize();var t=this.$meta.vueApp;if(t.checkIfNeedOpenLogin())this.openLogin();else{var n=t.popupHashInit();n?this.navigate(n):this.openHome()}this.$nextTick((function(){e.started=!0}))},openHome:function(){var e=this.$config.layout.header.buttons.find((function(e){return"home"===e.sceneName}));e&&this.navigate(e.url,{_scene:e.scene,_sceneName:e.sceneName})},navigate:function(e,t){var n=this;if(e){if(0===e.indexOf("https://")||0===e.indexOf("http://"))return location.assign(e);var i=(t=t||{}).ctx,o=t.target;if("_self"===o)i.$view.f7View.router.navigate(e,t);else{var a,r,s=i&&i.$view&&this.$$(i.$view.$el);"_view"===o&&s&&s.hasClass("eb-layout-view")?a=s.parents(".eb-layout-group").data("groupId"):window.event&&(window.event.metaKey||window.event.ctrlKey||1===window.event.button)?(a=null,r=!0):!s||s.parents(".eb-layout-scene").length>0?(a=null,r=!1):a=s.parents(".eb-layout-group").data("groupId"),this.$refs.groups.createView({ctx:i,groupId:a,groupForceNew:r,url:e,scene:t._scene,sceneName:t._sceneName}).then((function(i){i&&(i.options&&(t=n.$utils.extend({},t,i.options)),i.view.f7View.router.navigate(e,t))}))}}},openLogin:function(e){var t=e&&"string"!=typeof e?e.url.url:e;t&&"/"!==t&&this.$store.commit("auth/setHashInit",t),this.navigate(this.$config.layout.login)},closeView:function(e){this.$refs.groups.closeView(e)},backLink:function(e){var t=!1;if(this.$meta.util.historyUrlEmpty(e.$f7router.history[e.$f7router.history.length-1])){var n=e.$$(e.$el).parents(".eb-layout-view");parseInt(n.data("index"))>0&&(t=!0)}else t=!0;return t}}},void 0,void 0,!1,null,"3e4ed72a",null).exports;n(1);t.default={install:function(e,t){return o?console.error("already installed."):(o=e,t({routes:n(4).default,store:n(5).default(o),config:n(6).default,locales:n(7).default,components:{layout:h}}))}}},function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},o=0;o<t.length;o++){var a=t[o],r=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};i[r]?i[r].parts.push(s):n.push(i[r]={id:r,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},d=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){u=n,d=o||{};var r=i(e,t);return A(r),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o];(l=a[s.id]).refs--,n.push(l)}t?A(r=i(e,t)):r=[];for(o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete a[l.id]}}}}function A(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(f(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(f(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:r}}}}function b(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function f(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(u)return c;i.parentNode.removeChild(i)}if(p){var o=l++;i=s||(s=b()),t=y.bind(null,i,o,!1),n=y.bind(null,i,o,!0)}else i=b(),t=m.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var g,v=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function m(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]);