(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{701:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"消息的堆积解决思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息的堆积解决思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 消息的堆积解决思路")]),t._v(" "),r("p",[t._v("如果还没开始投入使用 Kafka，那应该在设计分区数的时候，尽量设置的多点（当然也不要太大，太大影响延迟，具体可以参考我前面提到的文章），从而提升生产和消费的并行度，避免消费太慢导致消费堆积。")]),t._v(" "),r("h2",{attrs:{id:"增大批次"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增大批次","aria-hidden":"true"}},[t._v("#")]),t._v(" 增大批次")]),t._v(" "),r("p",[t._v("瓶颈在消费吞吐量的时候，增加批次也可以改善性能")]),t._v(" "),r("h2",{attrs:{id:"增加线程数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增加线程数","aria-hidden":"true"}},[t._v("#")]),t._v(" 增加线程数")]),t._v(" "),r("p",[t._v("如果一些消费者组中的消费者线程还是有 1 个消费者线程消费多个分区的情况，建议增加消费者线程。尽量 1 个消费者线程对应 1 个分区，从而发挥现有分区数下的最大并行度。")])])},[],!1,null,null,null);a.default=s.exports}}]);