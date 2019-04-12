(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{310:function(s,e,t){"use strict";t.r(e);var a=t(2),r=Object(a.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"zookeeper-如何实现分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-如何实现分布式锁","aria-hidden":"true"}},[s._v("#")]),s._v(" Zookeeper 如何实现分布式锁")]),s._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av34137962/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-Zookeeper-如何实现分布式锁"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"什么是临时顺序节点？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是临时顺序节点？","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是临时顺序节点？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810170010.png",alt:""}})]),s._v(" "),t("p",[s._v("Zookeeper 的数据存储结构就像一棵树，这棵树由节点组成，这种节点叫做 Znode。")]),s._v(" "),t("p",[s._v("Znode 分为四种类型：")]),s._v(" "),t("h3",{attrs:{id:"持久节点（persistent）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久节点（persistent）","aria-hidden":"true"}},[s._v("#")]),s._v(" 持久节点（PERSISTENT）")]),s._v(" "),t("p",[s._v("默认的节点类型。创建节点的客户端与 Zookeeper 断开连接后，该节点依旧存在。")]),s._v(" "),t("h3",{attrs:{id:"持久节点顺序节点（persistent-sequential）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久节点顺序节点（persistent-sequential）","aria-hidden":"true"}},[s._v("#")]),s._v(" 持久节点顺序节点（PERSISTENT_SEQUENTIAL）")]),s._v(" "),t("p",[s._v("所谓顺序节点，就是在创建节点时，Zookeeper 根据创建的时间顺序给该节点名称进行编号：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190001.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"临时节点（ephemeral）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临时节点（ephemeral）","aria-hidden":"true"}},[s._v("#")]),s._v(" 临时节点（EPHEMERAL）")]),s._v(" "),t("p",[s._v("和持久节点相反，当创建节点的客户端与 Zookeeper 断开连接后，临时节点会被删除：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190002.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190003.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190004.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"临时顺序节点（ephemeral-sequential）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临时顺序节点（ephemeral-sequential）","aria-hidden":"true"}},[s._v("#")]),s._v(" 临时顺序节点（EPHEMERAL_SEQUENTIAL）")]),s._v(" "),t("p",[s._v("顾名思义，临时顺序节点结合和临时节点和顺序节点的特点：在创建节点时，Zookeeper 根据创建的时间顺序给该节点名称进行编号；当创建节点的客户端与 Zookeeper 断开连接后，临时节点会被删除。")]),s._v(" "),t("h2",{attrs:{id:"zookeeper-分布式锁的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-分布式锁的原理","aria-hidden":"true"}},[s._v("#")]),s._v(" Zookeeper 分布式锁的原理")]),s._v(" "),t("p",[s._v("Zookeeper 分布式锁恰恰应用了临时顺序节点。具体如何实现呢？让我们来看一看详细步骤：")]),s._v(" "),t("h3",{attrs:{id:"获取锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取锁","aria-hidden":"true"}},[s._v("#")]),s._v(" 获取锁")]),s._v(" "),t("p",[s._v("首先，在 Zookeeper 当中创建一个持久节点 ParentLock。当第一个客户端想要获得锁时，需要在 ParentLock 这个节点下面创建一个"),t("strong",[s._v("临时顺序节点")]),s._v(" Lock1。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190005.png",alt:""}})]),s._v(" "),t("p",[s._v("之后，Client1 查找 ParentLock 下面所有的临时顺序节点并排序，判断自己所创建的节点 Lock1 是不是顺序最靠前的一个。如果是第一个节点，则成功获得锁。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190006.png",alt:""}})]),s._v(" "),t("p",[s._v("这时候，如果再有一个客户端 Client2 前来获取锁，则在 ParentLock 下载再创建一个临时顺序节点 Lock2。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190007.png",alt:""}})]),s._v(" "),t("p",[s._v("Client2 查找 ParentLock 下面所有的临时顺序节点并排序，判断自己所创建的节点 Lock2 是不是顺序最靠前的一个，结果发现节点 Lock2 并不是最小的。")]),s._v(" "),t("p",[s._v("于是，Client2 向排序仅比它靠前的节点 Lock1 注册 Watcher，用于监听 Lock1 节点是否存在。这意味着 Client2 抢锁失败，进入了等待状态。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190008.png",alt:""}})]),s._v(" "),t("p",[s._v("这时候，如果又有一个客户端 Client3 前来获取锁，则在 ParentLock 下载再创建一个临时顺序节点 Lock3。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190009.png",alt:""}})]),s._v(" "),t("p",[s._v("Client3 查找 ParentLock 下面所有的临时顺序节点并排序，判断自己所创建的节点 Lock3 是不是顺序最靠前的一个，结果同样发现节点 Lock3 并不是最小的。")]),s._v(" "),t("p",[s._v("于是，Client3 向排序仅比它靠前的节点 Lock2 注册 Watcher，用于监听 Lock2 节点是否存在。这意味着 Client3 同样抢锁失败，进入了等待状态。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190010.png",alt:""}})]),s._v(" "),t("p",[s._v("这样一来，Client1 得到了锁，Client2 监听了 Lock1，Client3 监听了 Lock2。这恰恰形成了一个等待队列，")]),s._v(" "),t("h3",{attrs:{id:"释放锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#释放锁","aria-hidden":"true"}},[s._v("#")]),s._v(" 释放锁")]),s._v(" "),t("p",[s._v("释放锁分为两种情况：")]),s._v(" "),t("h4",{attrs:{id:"任务完成，客户端显示释放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务完成，客户端显示释放","aria-hidden":"true"}},[s._v("#")]),s._v(" 任务完成，客户端显示释放")]),s._v(" "),t("p",[s._v("当任务完成时，Client1 会显示调用删除节点 Lock1 的指令。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190011.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"任务执行过程中，客户端崩溃"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务执行过程中，客户端崩溃","aria-hidden":"true"}},[s._v("#")]),s._v(" 任务执行过程中，客户端崩溃")]),s._v(" "),t("p",[s._v("获得锁的 Client1 在任务执行过程中，如果崩溃，则会断开与 Zookeeper 服务端的链接。根据临时节点的特性，相关联的节点 Lock1 会随之自动删除。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190012.png",alt:""}})]),s._v(" "),t("p",[s._v("由于 Client2 一直监听着 Lock1 的存在状态，当 Lock1 节点被删除，Client2 会立刻收到通知。这时候 Client2 会再次查询 ParentLock 下面的所有节点，确认自己创建的节点 Lock2 是不是目前最小的节点。如果是最小，则 Client2 顺理成章获得了锁。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190013.png",alt:""}})]),s._v(" "),t("p",[s._v("同理，如果 Client2 也因为任务完成或者节点崩溃而删除了节点 Lock2，那么 Client3 就会接到通知。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190014.png",alt:""}})]),s._v(" "),t("p",[s._v("最终，Client3 成功得到了锁。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201810190015.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"zookeeper-和-redis-分布式锁的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-和-redis-分布式锁的比较","aria-hidden":"true"}},[s._v("#")]),s._v(" Zookeeper 和 Redis 分布式锁的比较")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20181019070014.jpg",alt:""}})])])},[],!1,null,null,null);e.default=r.exports}}]);