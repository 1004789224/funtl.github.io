(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{357:function(e,a,s){"use strict";s.r(a);var t=s(2),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"删除容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除容器")]),e._v(" "),s("p",[e._v("可以使用 "),s("code",[e._v("docker container rm")]),e._v(" 来删除一个处于终止状态的容器。例如")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker container "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v("  trusting_newton\ntrusting_newton\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("如果要删除一个运行中的容器，可以添加 "),s("code",[e._v("-f")]),e._v(" 参数。Docker 会发送 "),s("code",[e._v("SIGKILL")]),e._v(" 信号给容器。")]),e._v(" "),s("h2",{attrs:{id:"清理所有处于终止状态的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理所有处于终止状态的容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 清理所有处于终止状态的容器")]),e._v(" "),s("p",[e._v("用 "),s("code",[e._v("docker container ls -a")]),e._v(" 命令可以查看所有已经创建的包括终止状态的容器，如果数量太多要一个个删除可能会很麻烦，用下面的命令可以清理掉所有处于终止状态的容器。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker container prune\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);