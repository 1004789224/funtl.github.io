(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{320:function(a,t,r){"use strict";r.r(t);var s=r(2),e=Object(s.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"性能调优的常见手段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能调优的常见手段","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能调优的常见手段")]),a._v(" "),r("p",[a._v("常见的互联网架构中，一般都能看到 Spring + MyBatis + MySQL + Redis搭配的身影。一般来说，应用内部的接口都是直接调用的，所谓的面向接口编程，应用间的调用直接调或者通过类似 Dubbo 之类的服务框架来执行，数据格式往往采用 JSON，即统一也方便各数据间做转换和取值，缓存一般使用 Redis 或 Memcached，存储一些对象或 JSON 格式的字符串。对外提供的接口，一般都需要进行压力测试，以便估算其性能，并为后续的调优提供指导方向，以下接口便是在压测过程中出现的各种“奇怪现象”，所谓奇怪，指的是从表象上看与我们正常的逻辑思路不符，但其本质还是我们对压力下程序的表现出来的特征不熟悉，用惯用的知识结构试图去解释，这根本是行不通的。下文是我在一次全面压测过程后对数据进行的分析汇总，其中的现象是很多压测常见的，里面的分析过程及改进措施我认为有很大的参考意义。具体内容如下：（部分接口为了安全我省略了其名称，但不影响我们的分析，另外形如 "),r("code",[a._v("1N3T")]),a._v(" 之类的表示的是 1 台 Nginx，3 台 Tomcat，具体的 TPS 数值只是为了说明优化前后的比照，没有实际意义）")]),a._v(" "),r("h2",{attrs:{id:"名词解释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#名词解释","aria-hidden":"true"}},[a._v("#")]),a._v(" 名词解释")]),a._v(" "),r("h3",{attrs:{id:"tps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tps","aria-hidden":"true"}},[a._v("#")]),a._v(" TPS")]),a._v(" "),r("p",[a._v("每秒钟处理完的事务次数，一般 TPS 是对整个系统来讲的。一个应用系统 1s 能完成多少事务处理，一个事务在分布式处理中，可能会对应多个请求，对于衡量单个接口服务的处理能力，用 QPS 比较多。")]),a._v(" "),r("h3",{attrs:{id:"qps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qps","aria-hidden":"true"}},[a._v("#")]),a._v(" QPS")]),a._v(" "),r("p",[a._v("每秒钟处理完请求的次数；注意这里是处理完。具体是指发出请求到服务器处理完成功返回结果。可以理解在 Server 中有个 Counter，每处理一个请求加 1，1 秒后 Counter = QPS。")]),a._v(" "),r("h3",{attrs:{id:"rt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rt","aria-hidden":"true"}},[a._v("#")]),a._v(" RT")]),a._v(" "),r("p",[a._v("响应时间，处理一次请求所需要的平均处理时间")]),a._v(" "),r("h3",{attrs:{id:"并发量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发量","aria-hidden":"true"}},[a._v("#")]),a._v(" 并发量")]),a._v(" "),r("p",[a._v("系统能同时处理的请求数")]),a._v(" "),r("h2",{attrs:{id:"真实调优案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#真实调优案例","aria-hidden":"true"}},[a._v("#")]),a._v(" 真实调优案例")]),a._v(" "),r("h3",{attrs:{id:"接口：获取列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：获取列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：获取列表")]),a._v(" "),r("h4",{attrs:{id:"压测现象：单台-tps-700-多，应用-cpu-高负载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：单台-tps-700-多，应用-cpu-高负载","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：单台 TPS 700 多，应用 CPU 高负载")]),a._v(" "),r("h4",{attrs:{id:"问题分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("旧框架，平均响应时间长，应用 CPU 高，程序内部有大量的 BEAN 到 MAP 到 JSON 之间的转换，修改数据库连接数后，TPS 没有提升。")]),a._v(" "),r("h4",{attrs:{id:"改进措施"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("重构系统，用 MyBatis 替代之前的 DAO 操作，减少 BEAN - MAP - JSON 之间的内部数据转换，减少程序内部的无用操作。")]),a._v(" "),r("h4",{attrs:{id:"改进效果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("TPS 改进后能到 3000 左右，有较大提升，但压测时应用 CPU 几乎跑满，还有改善空间。")]),a._v(" "),r("h4",{attrs:{id:"压测现象：数据库资源利用率高"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：数据库资源利用率高","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：数据库资源利用率高")]),a._v(" "),r("h4",{attrs:{id:"问题分析-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("单台应用，数据库资源 CPU 都能到 50%，10 台 TOMCAT 在 1万 并发下数据库 CPU 跑满，LOAD 值 700 多，但 DB 的 QPS 也不过 11554，并不算多，因此怀疑是 SQL 执行耗费了 CPU，可能是某条 SQL 没有按索引查找或者索引失效。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("查看 SQL 文件发现如下 sql："),r("code",[a._v("select count(1) from orders where order_status_id !=40")]),a._v(" ，将其改为 "),r("code",[a._v("select order_id from orders")]),a._v(" 然后通过程序把 "),r("code",[a._v("order_status_id != 40")]),a._v(" 的过滤掉。通过 list.size() 来获取。order_status_id 即使加了索引，由于是 "),r("code",[a._v("!=")]),a._v(" 比较，所以不会去按索引查找，导致 CPU 高")]),a._v(" "),r("h4",{attrs:{id:"改进效果-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("相同环境下(1台 Nginx，10 台 Tomcat，1000 并发)，TPS 由 3000 变成 3727，略有增长，但是 DB 的 CPU 明显下降，变为 30%，效果明显")]),a._v(" "),r("h4",{attrs:{id:"压测现象：1n15t，tps-4552；10n15t，tps-9608"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：1n15t，tps-4552；10n15t，tps-9608","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：1N15T，TPS 4552；10N15T，TPS 9608")]),a._v(" "),r("h4",{attrs:{id:"问题分析-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("后端都是 15 台 Tomcat，前端 1 台 Nginx 时 TPS 为 4552,通过 LVS 挂 10 台 Nginx 时为 9608，增长不明显，其 Nginx 和 Tomcat 都压力不大，集群结果不合理，怀疑是 Nginx 转发配置的问题；")]),a._v(" "),r("h4",{attrs:{id:"改进措施-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("未进一步改进：可能是需要调整 Nginx 的参数，之前发现过 Nginx 不同的配置对后端集群环境的 TPS 影响很大")]),a._v(" "),r("h4",{attrs:{id:"改进效果-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("无")]),a._v(" "),r("h3",{attrs:{id:"接口：信息查询"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：信息查询","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：信息查询")]),a._v(" "),r("h4",{attrs:{id:"压测现象：单台-tps-2000-多，应用-cpu-高，db-的-qps-15000-左右"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：单台-tps-2000-多，应用-cpu-高，db-的-qps-15000-左右","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：单台 TPS 2000 多，应用 CPU 高，DB 的 QPS 15000 左右")]),a._v(" "),r("h4",{attrs:{id:"问题分析-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("旧框架，程序内部有很多 Bean - Map - Json 相互的转换")]),a._v(" "),r("h4",{attrs:{id:"改进措施-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("删除冗余代码、更换连接池包，使用 MyBatis")]),a._v(" "),r("h4",{attrs:{id:"改进效果-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-4","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("TPS 由 2000 多增长为 8000 多，DB 的 QPS 为 9000 左右，优化后压测应用的 CPU 占用高，几乎跑满。")]),a._v(" "),r("h4",{attrs:{id:"压测现象：数据库无压力，应用增加多台后-tps-不变"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：数据库无压力，应用增加多台后-tps-不变","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：数据库无压力，应用增加多台后 TPS 不变")]),a._v(" "),r("h4",{attrs:{id:"问题分析-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("1N1T 和 1N10T 的 TPS 一样，都为 5000，增大并发时错误数增多，应用 CPU 耗费 70%，DB 无压力，Nginx 单台通过 "),r("code",[a._v("ss –s")]),a._v(" 发现端口占满，即 Nginx 到 Tomcat 之间转发的连接端口 "),r("code",[a._v("time-wait")]),a._v(" 状态 6 万多。Nginx 存在瓶颈。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("调优 Nginx 参数，将短连接改为长连接")]),a._v(" "),r("h4",{attrs:{id:"改进效果-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-5","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("1N3T 的 TPS 能到 17376，Tomat 的 CPU 压力 84%，DB 的 QPS 18000，CPU 69%，应用的资源基本使用到量。")]),a._v(" "),r("h3",{attrs:{id:"接口：获取详情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：获取详情","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：获取详情")]),a._v(" "),r("h4",{attrs:{id:"压测现象：单台应用-tps-2600，10-台-tomcat-才-3700"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：单台应用-tps-2600，10-台-tomcat-才-3700","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：单台应用 TPS 2600，10 台 Tomcat 才 3700")]),a._v(" "),r("h4",{attrs:{id:"问题分析-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("增加应用服务器，TPS 增长不明显，且 Nginx、Tomcat、DB 的负载都不高，说明服务器本身不是瓶颈，考虑是不是网络的问题，通过监控网卡包流量发现网络数据跑满，因为此接口会有大量数据的输出，因此瓶颈在网络上。另外，测试过程中发现 Redis 有报错，Redis 服务器是虚机，可能服务能力有限。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("开启 Tomcat 的 gzip 压缩。")]),a._v(" "),r("h4",{attrs:{id:"改进效果-6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-6","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("同等并发下(1 台 Nginx，10 台 Tomcat，1000 并发)，TPS 由 3727 增长到 10022，增长了近 3 倍，效果显著。")]),a._v(" "),r("h4",{attrs:{id:"压测现象：1n10t-集群下-nginx-参数调优对-tps-提升效果明显"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：1n10t-集群下-nginx-参数调优对-tps-提升效果明显","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：1N10T 集群下 Nginx 参数调优对 TPS 提升效果明显")]),a._v(" "),r("h4",{attrs:{id:"问题分析-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("经过 Tomcat 的启用 gzip 后，1N10T 下 TPS 为 10022，需进一步提升。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("优化 Nginx：")]),a._v(" "),r("ul",[r("li",[a._v("Nginx 日志关闭")]),a._v(" "),r("li",[a._v("Nginx 进程数量 worker，由 "),r("code",[a._v("24")]),a._v(" 改为 "),r("code",[a._v("16")])]),a._v(" "),r("li",[a._v("nginx keepalive 数量由 "),r("code",[a._v("256")]),a._v(" 改为 "),r("code",[a._v("2048")])])]),a._v(" "),r("h4",{attrs:{id:"改进效果-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-7","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("TPS 由 10022 提升为 13270。")]),a._v(" "),r("h4",{attrs:{id:"压测现象：1n5t-和-1n10t-的-tps-相差不大"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：1n5t-和-1n10t-的-tps-相差不大","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：1N5T 和 1N10T 的 TPS 相差不大")]),a._v(" "),r("h4",{attrs:{id:"问题分析-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("1N10T 的 TPS 为 1万3千多，1N5T 的 TPS 为 1万2千多，相差不大，应用的 Tomcat 资源利用没满，CPU 为 65%，DB 的 QPS 已经到 2万多了，单台服务器 DB 基本上到量了，因此再增加应用也没效果，只会导致响应的时间变长。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("单台 DB 已经无法改进了，要不提升服务器硬件，要不读写分离。")]),a._v(" "),r("h4",{attrs:{id:"改进效果-8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-8","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("无")]),a._v(" "),r("h3",{attrs:{id:"接口：促销"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：促销","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：促销")]),a._v(" "),r("h4",{attrs:{id:"压测现象：通过-redis-存取数据，tps-才-1000-多，cpu-有压力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：通过-redis-存取数据，tps-才-1000-多，cpu-有压力","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：通过 Redis 存取数据，TPS 才 1000 多，CPU 有压力")]),a._v(" "),r("h4",{attrs:{id:"问题分析-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("此接口通过 Redis 取数据，TPS 不高才 1000 多，但 CPU 占用了 80%，说明程序内部有大量序列化反序列化的操作，可能是 JSON 序列化的问题。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("将 "),r("code",[a._v("net.sf.json")]),a._v(" 改成 "),r("code",[a._v("alibaba")]),a._v(" 的 "),r("code",[a._v("fastjson")])]),a._v(" "),r("h4",{attrs:{id:"改进效果-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-9","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("同等并发条件下 TPS 由 1000 多提升为 5000 多，提高了近5倍。")]),a._v(" "),r("h4",{attrs:{id:"压测现象：参数多时-tps-下降明显"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：参数多时-tps-下降明显","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：参数多时 TPS 下降明显")]),a._v(" "),r("h4",{attrs:{id:"问题分析-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("此接口根据参数从 Redis 中获取数据，每个参数与 Redis 交互一次，当一组参数时 TPS 5133，五组参数时 TPS 1169，多次交互影响了处理性能。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("将从 Redis 获取数据的 get 改为 mget，减少交互次数。")]),a._v(" "),r("h4",{attrs:{id:"改进效果-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-10","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("五组参数时 1N3T 压测 TPS 9707，据此估算即使是单台 Tomcat，TPS 也能有三四千，性能比单次 get 的调用方式提升了 3,4 倍。")]),a._v(" "),r("h4",{attrs:{id:"压测现象：1n3t-tps-1万多，在增大-tomcat-可能-tps-增长不会明显"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：1n3t-tps-1万多，在增大-tomcat-可能-tps-增长不会明显","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：1N3T TPS 1万多，在增大 Tomcat 可能 TPS 增长不会明显")]),a._v(" "),r("h4",{attrs:{id:"问题分析-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("此处说的是可能，因为 Nginx 服务器的 CPU 虽然不高，但 QPS 已经 8000 多，此时应该是 Nginx 的服务器网络流量成为了瓶颈。(只是猜测)")]),a._v(" "),r("h4",{attrs:{id:"改进措施-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("可以增加多台 Nginx 负载，前端加 LVS")]),a._v(" "),r("h3",{attrs:{id:"接口：追踪接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：追踪接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：追踪接口")]),a._v(" "),r("h4",{attrs:{id:"压测现象：1n10t-的-tps-低于-1n3t-的-tps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：1n10t-的-tps-低于-1n3t-的-tps","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：1N10T 的 TPS 低于 1N3T 的 TPS")]),a._v(" "),r("h4",{attrs:{id:"问题分析-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-12","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("1N3T 在 2000 并发下 TPS 为 9849，此时 DB 的 QPS 为 90000，CPU 80%，将 Tomcat 增到 10 台，5000 并发下，TPS 为 7813，DB 的 QPS 为 19000，CPU 75%，load 1，说明压力增大情况下 DB 的压力反而下来了，注意到 Nginx 服务器的网卡流量达到 885M，说明是压力过大情况下，网络满了，发生丢包，导致 DB 端压力反而下来了。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-12","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("注意压测情况下部分接口由于数据量传输较大，会出现网络瓶颈。")]),a._v(" "),r("h3",{attrs:{id:"接口：回填接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：回填接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：回填接口")]),a._v(" "),r("h4",{attrs:{id:"压测现象：tps-不到-500，db-的-qps-3500"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：tps-不到-500，db-的-qps-3500","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：TPS 不到 500，DB 的 QPS 3500")]),a._v(" "),r("h4",{attrs:{id:"问题分析-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-13","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("虽然缺少应用的 CPU 及 DB 的 CPU 利用率数据，较低的 TPS 应该是应用的瓶颈，且需要关注是不是 DB 在处理查询的时候缓慢。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-13","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("ol",[r("li",[a._v("连接池由 "),r("code",[a._v("DBCP")]),a._v(" 改为 "),r("code",[a._v("HIKAR")])]),a._v(" "),r("li",[a._v("减少了日志打印输出")]),a._v(" "),r("li",[a._v("SQL 优化，将部分条件过滤改为在 Java 代码中执行")])]),a._v(" "),r("h4",{attrs:{id:"改进效果-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-11","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("TPS 由不到 500 增长为 1300 多")]),a._v(" "),r("h3",{attrs:{id:"接口：券查询"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：券查询","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：券查询")]),a._v(" "),r("h4",{attrs:{id:"压测现象：集群结果与单台应用结果相比不合理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：集群结果与单台应用结果相比不合理","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：集群结果与单台应用结果相比不合理")]),a._v(" "),r("h4",{attrs:{id:"问题分析-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-14","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("查看是否存在瓶颈资源，可以看到 5 台 Tomcat 集群下，TPS 为 9952，但 DB 的 QPS 为 5-6 万，CPU 利用率为 37%，说明对数据库进行了大量的主键或索引查询，一般单台 DB 的 QPS 也就 4万左右，再增加应用的集群数量，对 TPS 也不会有太大影响。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-14"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-14","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("可以考虑分库")]),a._v(" "),r("h3",{attrs:{id:"接口：推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：推荐","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：推荐")]),a._v(" "),r("h4",{attrs:{id:"压测现象：nginx-长短连接差异"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：nginx-长短连接差异","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：Nginx 长短连接差异")]),a._v(" "),r("h4",{attrs:{id:"问题分析-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-15","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("18 台 Nginx，2 Tomcat 时 TPS 8100，此时应用服务器的端口数满，一般来说，Nginx 短连接在高并发下容易导致端口占满的问题。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-15","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("将 Nginx 改为长连接")]),a._v(" "),r("h4",{attrs:{id:"改进效果-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-12","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("TPS 增长为 10733，TPS 稳定，起伏减少，但是 CPU 耗尽。说明 CPU 打满了，此时如果还要优化就的进行代码调优了。")]),a._v(" "),r("h3",{attrs:{id:"接口：查询"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口：查询","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口：查询")]),a._v(" "),r("h4",{attrs:{id:"压测现象：18n20t-的-tps-才-6842"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压测现象：18n20t-的-tps-才-6842","aria-hidden":"true"}},[a._v("#")]),a._v(" 压测现象：18N20T 的 TPS 才 6842")]),a._v(" "),r("h4",{attrs:{id:"问题分析-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题分析-16","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题分析")]),a._v(" "),r("p",[a._v("18 台 Nginx，20 台 Tomcat，TPS 才 6842，此时应用 CPU 利用率 85%，说明 CPU 存在瓶颈，但检查此接口并未做大计算量的工作，有可能是日志的级别问题，CPU 在频繁的打日志。")]),a._v(" "),r("h4",{attrs:{id:"改进措施-16"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进措施-16","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进措施")]),a._v(" "),r("p",[a._v("将日志级别由 DEBUG 级改为 INFO 级")]),a._v(" "),r("h4",{attrs:{id:"改进效果-13"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改进效果-13","aria-hidden":"true"}},[a._v("#")]),a._v(" 改进效果")]),a._v(" "),r("p",[a._v("同等环境 TPS 由 6842 增长为 23592")])])},[],!1,null,null,null);t.default=e.exports}}]);