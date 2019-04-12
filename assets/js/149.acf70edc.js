(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{429:function(e,t,r){"use strict";r.r(t);var n=r(2),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"内核命名空间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内核命名空间","aria-hidden":"true"}},[e._v("#")]),e._v(" 内核命名空间")]),e._v(" "),r("p",[e._v("Docker 容器和 LXC 容器很相似，所提供的安全特性也差不多。当用 "),r("code",[e._v("docker run")]),e._v(" 启动一个容器时，在后台 Docker 为容器创建了一个独立的命名空间和控制组集合。")]),e._v(" "),r("p",[e._v("命名空间提供了最基础也是最直接的隔离，在容器中运行的进程不会被运行在主机上的进程和其它容器发现和作用。")]),e._v(" "),r("p",[e._v("每个容器都有自己独有的网络栈，意味着它们不能访问其他容器的 sockets 或接口。不过，如果主机系统上做了相应的设置，容器可以像跟主机交互一样的和其他容器交互。当指定公共端口或使用 links 来连接 2 个容器时，容器就可以相互通信了（可以根据配置来限制通信的策略）。")]),e._v(" "),r("p",[e._v("从网络架构的角度来看，所有的容器通过本地主机的网桥接口相互通信，就像物理机器通过物理交换机通信一样。")]),e._v(" "),r("p",[e._v("那么，内核中实现命名空间和私有网络的代码是否足够成熟？")]),e._v(" "),r("p",[e._v("内核命名空间从 2.6.15 版本（2008 年 7 月发布）之后被引入，数年间，这些机制的可靠性在诸多大型生产系统中被实践验证。")]),e._v(" "),r("p",[e._v("实际上，命名空间的想法和设计提出的时间要更早，最初是为了在内核中引入一种机制来实现 "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/OpenVZ",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVZ"),r("OutboundLink")],1),e._v(" 的特性。\n而 OpenVZ 项目早在 2005 年就发布了，其设计和实现都已经十分成熟。")])])},[],!1,null,null,null);t.default=a.exports}}]);