(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{700:function(t,a,r){"use strict";r.r(a);var s=r(2),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"使用熔断器仪表盘监控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器仪表盘监控","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用熔断器仪表盘监控")]),t._v(" "),r("h2",{attrs:{id:"本节视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 本节视频")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av27864692",target:"_blank",rel:"noopener noreferrer"}},[t._v("【视频】微服务框架-SpringCloud-使用熔断器仪表盘监控"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("在 Ribbon 和 Feign 项目增加 Hystrix 仪表盘功能，两个项目的改造方式相同")]),t._v(" "),r("h2",{attrs:{id:"在-pom-xml-中增加依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-pom-xml-中增加依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 "),r("code",[t._v("pom.xml")]),t._v(" 中增加依赖")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>\n</dependency>\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("h2",{attrs:{id:"在-application-中增加-enablehystrixdashboard-注解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-application-中增加-enablehystrixdashboard-注解","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 Application 中增加 "),r("code",[t._v("@EnableHystrixDashboard")]),t._v(" 注解")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("package com.funtl.hello.spring.cloud.web.admin.ribbon;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.client.discovery.EnableDiscoveryClient;\nimport org.springframework.cloud.netflix.hystrix.EnableHystrix;\nimport org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;\n\n@SpringBootApplication\n@EnableDiscoveryClient\n@EnableHystrix\n@EnableHystrixDashboard\npublic class WebAdminRibbonApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(WebAdminRibbonApplication.class, args);\n    }\n}\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br"),r("span",{staticClass:"line-number"},[t._v("14")]),r("br"),r("span",{staticClass:"line-number"},[t._v("15")]),r("br"),r("span",{staticClass:"line-number"},[t._v("16")]),r("br"),r("span",{staticClass:"line-number"},[t._v("17")]),r("br")])]),r("h2",{attrs:{id:"创建-hystrix-stream-的-servlet-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建-hystrix-stream-的-servlet-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 "),r("code",[t._v("hystrix.stream")]),t._v(" 的 Servlet 配置")]),t._v(" "),r("p",[t._v("Spring Boot 2.x 版本开启 Hystrix Dashboard 与 Spring Boot 1.x 的方式略有不同，需要增加一个 "),r("code",[t._v("HystrixMetricsStreamServlet")]),t._v(" 的配置，代码如下：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('package com.funtl.hello.spring.cloud.web.admin.ribbon.config;\n\nimport com.netflix.hystrix.contrib.metrics.eventstream.HystrixMetricsStreamServlet;\nimport org.springframework.boot.web.servlet.ServletRegistrationBean;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class HystrixDashboardConfiguration {\n\n    @Bean\n    public ServletRegistrationBean getServlet() {\n        HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();\n        ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);\n        registrationBean.setLoadOnStartup(1);\n        registrationBean.addUrlMappings("/hystrix.stream");\n        registrationBean.setName("HystrixMetricsStreamServlet");\n        return registrationBean;\n    }\n}\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br"),r("span",{staticClass:"line-number"},[t._v("14")]),r("br"),r("span",{staticClass:"line-number"},[t._v("15")]),r("br"),r("span",{staticClass:"line-number"},[t._v("16")]),r("br"),r("span",{staticClass:"line-number"},[t._v("17")]),r("br"),r("span",{staticClass:"line-number"},[t._v("18")]),r("br"),r("span",{staticClass:"line-number"},[t._v("19")]),r("br"),r("span",{staticClass:"line-number"},[t._v("20")]),r("br")])]),r("h2",{attrs:{id:"测试-hystrix-dashboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试-hystrix-dashboard","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试 Hystrix Dashboard")]),t._v(" "),r("p",[t._v("浏览器端访问 http://localhost:8764/hystrix 界面如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201805292246009.png",alt:""}})]),t._v(" "),r("p",[t._v("点击 Monitor Stream，进入下一个界面，访问 http://localhost:8764/hi?message=HelloRibbon 此时会出现监控界面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer201805292246010.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"附：hystrix-说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附：hystrix-说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 附：Hystrix 说明")]),t._v(" "),r("h3",{attrs:{id:"什么情况下会触发-fallback-方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下会触发-fallback-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么情况下会触发 "),r("code",[t._v("fallback")]),t._v(" 方法")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("名字")]),t._v(" "),r("th",[t._v("描述")]),t._v(" "),r("th",[t._v("触发fallback")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("EMIT")]),t._v(" "),r("td",[t._v("值传递")]),t._v(" "),r("td",[t._v("NO")])]),t._v(" "),r("tr",[r("td",[t._v("SUCCESS")]),t._v(" "),r("td",[t._v("执行完成，没有错误")]),t._v(" "),r("td",[t._v("NO")])]),t._v(" "),r("tr",[r("td",[t._v("FAILURE")]),t._v(" "),r("td",[t._v("执行抛出异常")]),t._v(" "),r("td",[t._v("YES")])]),t._v(" "),r("tr",[r("td",[t._v("TIMEOUT")]),t._v(" "),r("td",[t._v("执行开始，但没有在允许的时间内完成")]),t._v(" "),r("td",[t._v("YES")])]),t._v(" "),r("tr",[r("td",[t._v("BAD_REQUEST")]),t._v(" "),r("td",[t._v("执行抛出HystrixBadRequestException")]),t._v(" "),r("td",[t._v("NO")])]),t._v(" "),r("tr",[r("td",[t._v("SHORT_CIRCUITED")]),t._v(" "),r("td",[t._v("断路器打开，不尝试执行")]),t._v(" "),r("td",[t._v("YES")])]),t._v(" "),r("tr",[r("td",[t._v("THREAD_POOL_REJECTED")]),t._v(" "),r("td",[t._v("线程池拒绝，不尝试执行")]),t._v(" "),r("td",[t._v("YES")])]),t._v(" "),r("tr",[r("td",[t._v("SEMAPHORE_REJECTED")]),t._v(" "),r("td",[t._v("信号量拒绝，不尝试执行")]),t._v(" "),r("td",[t._v("YES")])])])]),t._v(" "),r("h3",{attrs:{id:"fallback-方法在什么情况下会抛出异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fallback-方法在什么情况下会抛出异常","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("code",[t._v("fallback")]),t._v(" 方法在什么情况下会抛出异常")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("名字")]),t._v(" "),r("th",[t._v("描述")]),t._v(" "),r("th",[t._v("抛异常")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("FALLBACK_EMIT")]),t._v(" "),r("td",[t._v("Fallback值传递")]),t._v(" "),r("td",[t._v("NO")])]),t._v(" "),r("tr",[r("td",[t._v("FALLBACK_SUCCESS")]),t._v(" "),r("td",[t._v("Fallback执行完成，没有错误")]),t._v(" "),r("td",[t._v("NO")])]),t._v(" "),r("tr",[r("td",[t._v("FALLBACK_FAILURE")]),t._v(" "),r("td",[t._v("Fallback执行抛出出错")]),t._v(" "),r("td",[t._v("YES")])]),t._v(" "),r("tr",[r("td",[t._v("FALLBACK_REJECTED")]),t._v(" "),r("td",[t._v("Fallback信号量拒绝，不尝试执行")]),t._v(" "),r("td",[t._v("YES")])]),t._v(" "),r("tr",[r("td",[t._v("FALLBACK_MISSING")]),t._v(" "),r("td",[t._v("没有Fallback实例")]),t._v(" "),r("td",[t._v("YES")])])])]),t._v(" "),r("h3",{attrs:{id:"hystrix-dashboard-界面监控参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-dashboard-界面监控参数","aria-hidden":"true"}},[t._v("#")]),t._v(" Hystrix Dashboard 界面监控参数")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/20171123110838020.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"hystrix-常用配置信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-常用配置信息","aria-hidden":"true"}},[t._v("#")]),t._v(" Hystrix 常用配置信息")]),t._v(" "),r("h4",{attrs:{id:"超时时间（默认1000ms，单位：ms）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超时时间（默认1000ms，单位：ms）","aria-hidden":"true"}},[t._v("#")]),t._v(" 超时时间（默认1000ms，单位：ms）")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds")]),t._v("：在调用方配置，被该调用方的所有方法的超时时间都是该值，优先级低于下边的指定配置")]),t._v(" "),r("li",[r("code",[t._v("hystrix.command.HystrixCommandKey.execution.isolation.thread.timeoutInMilliseconds")]),t._v("：在调用方配置，被该调用方的指定方法（HystrixCommandKey 方法名）的超时时间是该值")])]),t._v(" "),r("h4",{attrs:{id:"线程池核心线程数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程池核心线程数","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程池核心线程数")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("hystrix.threadpool.default.coreSize")]),t._v("：默认为 10")])]),t._v(" "),r("h4",{attrs:{id:"queue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#queue","aria-hidden":"true"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("hystrix.threadpool.default.maxQueueSize")]),t._v("：最大排队长度。默认 -1，使用 "),r("code",[t._v("SynchronousQueue")]),t._v("。其他值则使用 "),r("code",[t._v("LinkedBlockingQueue")]),t._v("。如果要从 -1 换成其他值则需重启，即该值不能动态调整，若要动态调整，需要使用到下边这个配置")]),t._v(" "),r("li",[r("code",[t._v("hystrix.threadpool.default.queueSizeRejectionThreshold")]),t._v("：排队线程数量阈值，默认为 5，达到时拒绝，如果配置了该选项，队列的大小是该队列")])]),t._v(" "),r("p",[r("strong",[t._v("注意：")]),t._v(" 如果 "),r("code",[t._v("maxQueueSize=-1")]),t._v(" 的话，则该选项不起作用")]),t._v(" "),r("h4",{attrs:{id:"断路器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#断路器","aria-hidden":"true"}},[t._v("#")]),t._v(" 断路器")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("hystrix.command.default.circuitBreaker.requestVolumeThreshold")]),t._v("：当在配置时间窗口内达到此数量的失败后，进行短路。默认 20 个（10s 内请求失败数量达到 20 个，断路器开）")]),t._v(" "),r("li",[r("code",[t._v("hystrix.command.default.circuitBreaker.sleepWindowInMilliseconds")]),t._v("：短路多久以后开始尝试是否恢复，默认 5s")]),t._v(" "),r("li",[r("code",[t._v("hystrix.command.default.circuitBreaker.errorThresholdPercentage")]),t._v("：出错百分比阈值，当达到此阈值后，开始短路。默认 50%")])]),t._v(" "),r("h4",{attrs:{id:"fallback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fallback","aria-hidden":"true"}},[t._v("#")]),t._v(" fallback")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("hystrix.command.default.fallback.isolation.semaphore.maxConcurrentRequests")]),t._v("：调用线程允许请求 "),r("code",[t._v("HystrixCommand.GetFallback()")]),t._v(" 的最大数量，默认 10。超出时将会有异常抛出，注意：该项配置对于 THREAD 隔离模式也起作用")])]),t._v(" "),r("h4",{attrs:{id:"属性配置参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性配置参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性配置参数")]),t._v(" "),r("ul",[r("li",[t._v("参数说明：https://github.com/Netflix/Hystrix/wiki/Configuration")]),t._v(" "),r("li",[t._v("HystrixProperty 参考代码：http://www.programcreek.com/java-api-examples/index.php?source_dir=Hystrix-master/hystrix-contrib/hystrix-javanica/src/test/java/com/netflix/hystrix/contrib/javanica/test/common/configuration/command/BasicCommandPropertiesTest.java")])])])},[],!1,null,null,null);a.default=e.exports}}]);