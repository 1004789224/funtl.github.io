(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{784:function(e,a,r){"use strict";r.r(a);var t=r(2),i=Object(t.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rabbitmq-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-简介","aria-hidden":"true"}},[e._v("#")]),e._v(" RabbitMQ 简介")]),e._v(" "),r("h2",{attrs:{id:"本节视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av29725875",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】项目实战-iToken-消息队列-RabbitMQ 简介"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"rabbitmq-的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-的优点","aria-hidden":"true"}},[e._v("#")]),e._v(" RabbitMQ 的优点")]),e._v(" "),r("ul",[r("li",[e._v("基于 ErLang 语言开发具有高可用高并发的优点，适合集群服务器")]),e._v(" "),r("li",[e._v("健壮、稳定、易用、跨平台、支持多种语言、文档齐全")]),e._v(" "),r("li",[e._v("有消息确认机制和持久化机制，可靠性高")]),e._v(" "),r("li",[e._v("开源")])]),e._v(" "),r("h2",{attrs:{id:"rabbitmq-的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-的概念","aria-hidden":"true"}},[e._v("#")]),e._v(" RabbitMQ 的概念")]),e._v(" "),r("h3",{attrs:{id:"生产者和消费者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生产者和消费者","aria-hidden":"true"}},[e._v("#")]),e._v(" 生产者和消费者")]),e._v(" "),r("ul",[r("li",[e._v("Producer：消息的生产者")]),e._v(" "),r("li",[e._v("Consumer：消息的消费者")])]),e._v(" "),r("h3",{attrs:{id:"queue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#queue","aria-hidden":"true"}},[e._v("#")]),e._v(" Queue")]),e._v(" "),r("ul",[r("li",[e._v("消息队列，提供了 FIFO 的处理机制，具有缓存消息的能力。RabbitMQ 中，队列消息可以设置为持久化，临时或者自动删除。")]),e._v(" "),r("li",[e._v("设置为持久化的队列，Queue 中的消息会在 Server 本地硬盘存储一份，防止系统 Crash，数据丢失")]),e._v(" "),r("li",[e._v("设置为临时队列，Queue 中的数据在系统重启之后就会丢失")]),e._v(" "),r("li",[e._v("设置为自动删除的队列，当不存在用户连接到 Server，队列中的数据会被自动删除")])]),e._v(" "),r("h3",{attrs:{id:"exchange"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exchange","aria-hidden":"true"}},[e._v("#")]),e._v(" ExChange")]),e._v(" "),r("p",[e._v("Exchange 类似于数据通信网络中的交换机，提供消息路由策略。RabbitMQ 中，Producer 不是通过信道直接将消息发送给 Queue，而是先发送给 ExChange。一个 ExChange 可以和多个 Queue 进行绑定，Producer 在传递消息的时候，会传递一个 ROUTING_KEY，ExChange 会根据这个 ROUTING_KEY 按照特定的路由算法，将消息路由给指定的 Queue。和 Queue 一样，ExChange 也可设置为持久化，临时或者自动删除")]),e._v(" "),r("h3",{attrs:{id:"exchange-的-4-种类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exchange-的-4-种类型","aria-hidden":"true"}},[e._v("#")]),e._v(" ExChange 的 4 种类型")]),e._v(" "),r("ul",[r("li",[e._v("direct（默认）：直接交换器，工作方式类似于单播，ExChange 会将消息发送完全匹配 ROUTING_KEY 的 Queue（key 就等于 queue）")]),e._v(" "),r("li",[e._v("fanout：广播是式交换器，不管消息的 ROUTING_KEY 设置为什么，ExChange 都会将消息转发给所有绑定的 Queue（无视 key，给所有的 queue 都来一份）")]),e._v(" "),r("li",[e._v("topic：主题交换器，工作方式类似于组播，ExChange 会将消息转发和 ROUTING_KEY 匹配模式相同的所有队列（key 可以用“宽字符”模糊匹配 queue），比如，ROUTING_KEY 为 "),r("code",[e._v("user.stock")]),e._v(" 的 Message 会转发给绑定匹配模式为 "),r("code",[e._v("* .stock,user.stock")]),e._v("， "),r("code",[e._v("* . *")]),e._v(" 和 "),r("code",[e._v("#.user.stock.#")]),e._v(" 的队列。（ * 表是匹配一个任意词组，# 表示匹配 0 个或多个词组）")]),e._v(" "),r("li",[e._v("headers：消息体的 header 匹配，无视 key，通过查看消息的头部元数据来决定发给那个 queue（AMQP 头部元数据非常丰富而且可以自定义）")])]),e._v(" "),r("h3",{attrs:{id:"binding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#binding","aria-hidden":"true"}},[e._v("#")]),e._v(" Binding")]),e._v(" "),r("p",[e._v("所谓绑定就是将一个特定的 ExChange 和一个特定的 Queue 绑定起来。ExChange 和 Queue 的绑定可以是多对多的关系")]),e._v(" "),r("h3",{attrs:{id:"virtual-host"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtual-host","aria-hidden":"true"}},[e._v("#")]),e._v(" Virtual Host")]),e._v(" "),r("p",[e._v("在 RabbitMQ Server 上可以创建多个虚拟的 Message Broker，又叫做 Virtual Hosts (vhosts)。每一个 vhost 本质上是一个 mini-rabbitmq server，分别管理各自的 ExChange，和 bindings。vhost 相当于物理的 Server，可以为不同 app 提供边界隔离，使得应用安全的运行在不同的 vhost 实例上，相互之间不会干扰。Producer 和 Consumer 连接 rabbit server 需要指定一个 vhost")]),e._v(" "),r("h2",{attrs:{id:"rabbitmq-的使用过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-的使用过程","aria-hidden":"true"}},[e._v("#")]),e._v(" RabbitMQ 的使用过程")]),e._v(" "),r("ul",[r("li",[e._v("客户端连接到消息队列服务器，打开一个 Channel。")]),e._v(" "),r("li",[e._v("客户端声明一个 ExChange，并设置相关属性。")]),e._v(" "),r("li",[e._v("客户端声明一个 Queue，并设置相关属性。")]),e._v(" "),r("li",[e._v("客户端使用 Routing Key，在 ExChange 和 Queue 之间建立好绑定关系。")]),e._v(" "),r("li",[e._v("客户端投递消息到 ExChange。")]),e._v(" "),r("li",[e._v("ExChange 接收到消息后，就根据消息的 key 和已经设置的 binding，进行消息路由，将消息投递到一个或多个队列里")])])])},[],!1,null,null,null);a.default=i.exports}}]);