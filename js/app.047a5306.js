(function(e){function s(s){for(var t,r,o=s[0],f=s[1],i=s[2],j=0,u=[];j<o.length;j++)r=o[j],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);d&&d(s);while(u.length)u.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,s=0;s<c.length;s++){for(var n=c[s],t=!0,o=1;o<n.length;o++){var f=n[o];0!==a[f]&&(t=!1)}t&&(c.splice(s--,1),e=r(r.s=n[0]))}return e}var t={},a={app:0},c=[];function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,s,n){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)r.d(n,t,function(s){return e[s]}.bind(null,t));return n},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],f=o.push.bind(o);o.push=s,o=o.slice();for(var i=0;i<o.length;i++)s(o[i]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,s,n){e.exports=n("56d7")},"034f":function(e,s,n){"use strict";n("85ec")},"1ae6":function(e,s,n){e.exports=n.p+"media/clock.e5c5dfef.mp3"},4678:function(e,s,n){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=c(e);return n(s)}function c(e){if(!n.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,s,n){"use strict";n.r(s);n("e623"),n("e379"),n("5dc8"),n("37e1");var t=n("2b0e"),a=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{attrs:{id:"app"}},[n("Countdown")],1)},c=[],r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"countdown"},[e.show?t("div",[e._v(e._s(e.remainingTime))]):e._e(),e.show?e._e():t("div",[t("h1",{on:{click:e.gogogo}},[e._v("Jez goes live when?")])]),t("audio",{ref:"audio",attrs:{src:n("1ae6")}})])},o=[],f=(n("99af"),n("c1df")),i=n.n(f),d={name:"Countdown",data:function(){return{show:!1,eventTime:null,currentTime:null,interval:1e3}},mounted:function(){var e=this;this.eventTime=i()("16-04-2021 19:30:00 GMT","DD-MM-YYYY HH:mm:ss").unix(),this.interval=1e3,setInterval((function(){e.currentTime=i()().unix(),e.$refs.audio&&e.$refs.audio.currentTime>=3.9&&(e.$refs.audio.currentTime=.5)}),1e3)},computed:{diffTime:function(){return this.eventTime-this.currentTime},remainingTime:function(){var e=i.a.duration(1e3*this.diffTime,"milliseconds");e=i.a.duration(e.asMilliseconds()-this.interval,"milliseconds");var s=i.a.duration(e);return"".concat(s.days(),":").concat(s.hours(),":").concat(s.minutes(),":").concat(s.seconds())}},methods:{setupAudio:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play().then((function(){})).catch((function(e){return console.log(e)}))},gogogo:function(){this.show=!0,this.setupAudio()}}},j=d,u=(n("592f"),n("2877")),b=Object(u["a"])(j,r,o,!1,null,"acd79c3a",null),l=b.exports,m={name:"App",components:{Countdown:l}},h=m,p=(n("034f"),Object(u["a"])(h,a,c,!1,null,null,null)),v=p.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(v)}}).$mount("#app")},"592f":function(e,s,n){"use strict";n("66ec")},"66ec":function(e,s,n){},"85ec":function(e,s,n){}});
//# sourceMappingURL=app.047a5306.js.map