(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{363:function(e,t,r){"use strict";r.r(t);var o=r(2),_=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker 容器")]),e._v(" "),r("p",[e._v("镜像（"),r("code",[e._v("Image")]),e._v("）和容器（"),r("code",[e._v("Container")]),e._v("）的关系，就像是面向对象程序设计中的 "),r("code",[e._v("类")]),e._v(" 和 "),r("code",[e._v("实例")]),e._v(" 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),e._v(" "),r("p",[e._v("容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("命名空间"),r("OutboundLink")],1),e._v("。因此容器可以拥有自己的 "),r("code",[e._v("root")]),e._v(" 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。也因为这种隔离的特性，很多人初学 Docker 时常常会混淆容器和虚拟机。")]),e._v(" "),r("p",[e._v("前面讲过镜像使用的是分层存储，容器也是如此。每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为"),r("strong",[e._v("容器存储层")]),e._v("。")]),e._v(" "),r("p",[e._v("容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。")]),e._v(" "),r("p",[e._v("按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 "),r("code",[e._v("数据卷（Volume）")]),e._v("、或者绑定宿主目录，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。")]),e._v(" "),r("p",[e._v("数据卷的生存周期独立于容器，容器消亡，数据卷不会消亡。因此，使用数据卷后，容器删除或者重新运行之后，数据却不会丢失。")])])},[],!1,null,null,null);t.default=_.exports}}]);