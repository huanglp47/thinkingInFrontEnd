webpackJsonp([4],{"56i+":function(t,e){},JnlN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("登录token："+t._s(t.token))]),t._v(" "),n("ul",[n("li",{on:{click:function(e){return t.gotoLoginPage()}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("去登陆页面")])])])])},staticRenderFns:[]};var r=n("C7Lr")({name:"HomePage",data:function(){return{msg:"Welcome to Mixc Manage Systerm"}},computed:{token:function(){return this.$store.state.login.token}},methods:{gotoLoginPage:function(){this.$router.push({path:"/login",query:{a:111}})}}},o,!1,function(t){n("56i+")},"data-v-284f2d7e",null);e.default=r.exports}});