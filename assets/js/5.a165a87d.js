(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,s,e){},213:function(t,s,e){},214:function(t,s,e){},215:function(t,s,e){},216:function(t,s,e){},226:function(t,s,e){"use strict";var i=e(212);e.n(i).a},227:function(t,s,e){"use strict";var i=e(213);e.n(i).a},228:function(t,s,e){"use strict";var i=e(214);e.n(i).a},229:function(t,s,e){"use strict";var i=e(215);e.n(i).a},230:function(t,s,e){"use strict";var i=e(216);e.n(i).a},239:function(t,s,e){"use strict";var i={name:"ViContent"},n=(e(226),e(1)),a=Object(n.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},[],!1,null,"1b352c9c",null);a.options.__file="content.vue";s.a=a.exports},240:function(t,s,e){"use strict";var i={name:"ViFooter"},n=(e(227),e(1)),a=Object(n.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"1f22aa8c",null);a.options.__file="footer.vue";s.a=a.exports},241:function(t,s,e){"use strict";var i={name:"ViHeader"},n=(e(228),e(1)),a=Object(n.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"90e3b228",null);a.options.__file="header.vue";s.a=a.exports},242:function(t,s,e){"use strict";var i={name:"ViSider",data:function(){return{show:!0}},methods:{isShow:function(){this.show=!this.show}}},n=(e(230),e(1)),a=Object(n.a)(i,function(){var t=this.$createElement,s=this._self._c||t;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"sider"},[this._t("default"),this._v(" "),s("button",{on:{click:this.isShow}},[this._v("关闭")])],2)])},[],!1,null,"250a4ffb",null);a.options.__file="sider.vue";s.a=a.exports},243:function(t,s,e){"use strict";e(48),e(13);var i={name:"ViLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(s){"ViSider"===s.$options.name&&(t.layoutClass.hasSider=!0)})}},n=(e(229),e(1)),a=Object(n.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"26d61bec",null);a.options.__file="layout.vue";s.a=a.exports},257:function(t,s,e){},311:function(t,s,e){"use strict";var i=e(257);e.n(i).a},355:function(t,s,e){"use strict";e.r(s);var i=e(239),n=e(240),a=e(241),o=e(243),r=e(242),c={components:{"vi-content":i.a,"vi-footer":n.a,"vi-header":a.a,"vi-layout":o.a,"vi-sider":r.a}},u=(e(311),e(1)),l=Object(u.a)(c,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"demo"},[s("vi-layout",{staticClass:"layout"},[s("vi-header",{staticClass:"header"},[this._v("header")]),this._v(" "),s("vi-layout",{staticClass:"layout"},[s("vi-sider",{staticClass:"sider"},[this._v("sider")]),this._v(" "),s("vi-content",{staticClass:"content"},[this._v("content")])],1),this._v(" "),s("vi-footer",{staticClass:"footer"},[this._v("footer")])],1)],1)},[],!1,null,"9f379b32",null);l.options.__file="container-demo-3.vue";s.default=l.exports}}]);