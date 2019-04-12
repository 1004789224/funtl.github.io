(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{858:function(s,e,a){"use strict";a.r(e);var n=a(2),r=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"spring-整合-druid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-整合-druid","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring 整合 Druid")]),s._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av24818402/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】MyBatis 数据持久化-Spring 整合 Druid"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom","aria-hidden":"true"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("pom.xml")]),s._v(" 文件中新增 "),a("code",[s._v("com.alibaba:druid")]),s._v(" 和 "),a("code",[s._v("mysql:mysql-connector-java")]),s._v(" 依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>druid</artifactId>\n    <version>1.1.6</version>\n</dependency>\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>5.1.46</version>\n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"配置数据库连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库连接","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置数据库连接")]),s._v(" "),a("p",[s._v("配置数据库连接 "),a("code",[s._v("jdbc.properties")]),s._v(" ，配置代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# JDBC\n# MySQL 8.x: com.mysql.cj.jdbc.Driver\njdbc.driverClass=com.mysql.jdbc.Driver\njdbc.connectionURL=jdbc:mysql://192.168.75.134:3306/myshop?useUnicode=true&characterEncoding=utf-8&useSSL=false\njdbc.username=root\njdbc.password=123456\n\n# JDBC Pool\njdbc.pool.init=1\njdbc.pool.minIdle=3\njdbc.pool.maxActive=20\n\n# JDBC Test\njdbc.testSql=SELECT 'x' FROM DUAL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"spring-集成-druid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-集成-druid","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring 集成 Druid")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("spring-context-druid.xml")]),s._v(" 的 Spring 配置文件，内容如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">\n\n    \x3c!-- 加载配置属性文件 --\x3e\n    <context:property-placeholder ignore-unresolvable="true" location="classpath:jdbc.properties"/>\n\n    \x3c!-- 数据源配置, 使用 Druid 数据库连接池 --\x3e\n    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">\n        \x3c!-- 数据源驱动类可不写，Druid默认会自动根据URL识别DriverClass --\x3e\n        <property name="driverClassName" value="${jdbc.driverClass}"/>\n\n        \x3c!-- 基本属性 url、user、password --\x3e\n        <property name="url" value="${jdbc.connectionURL}"/>\n        <property name="username" value="${jdbc.username}"/>\n        <property name="password" value="${jdbc.password}"/>\n\n        \x3c!-- 配置初始化大小、最小、最大 --\x3e\n        <property name="initialSize" value="${jdbc.pool.init}"/>\n        <property name="minIdle" value="${jdbc.pool.minIdle}"/>\n        <property name="maxActive" value="${jdbc.pool.maxActive}"/>\n\n        \x3c!-- 配置获取连接等待超时的时间 --\x3e\n        <property name="maxWait" value="60000"/>\n\n        \x3c!-- 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 --\x3e\n        <property name="timeBetweenEvictionRunsMillis" value="60000"/>\n\n        \x3c!-- 配置一个连接在池中最小生存的时间，单位是毫秒 --\x3e\n        <property name="minEvictableIdleTimeMillis" value="300000"/>\n\n        <property name="validationQuery" value="${jdbc.testSql}"/>\n        <property name="testWhileIdle" value="true"/>\n        <property name="testOnBorrow" value="false"/>\n        <property name="testOnReturn" value="false"/>\n\n        \x3c!-- 配置监控统计拦截的filters --\x3e\n        <property name="filters" value="stat"/>\n    </bean>\n</beans>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h2",{attrs:{id:"配置-druid-监控中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-druid-监控中心","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 Druid 监控中心")]),s._v(" "),a("p",[s._v("Druid 提供了大量的监控数据，只需要在 "),a("code",[s._v("web.xml")]),s._v(" 中配置一个 Servlet 就可以方便的查看这些信息。")]),s._v(" "),a("p",[s._v("修改 "),a("code",[s._v("web.xml")]),s._v(" 配置文件，增加 Druid 提供的 Servlet")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<servlet>\n    <servlet-name>DruidStatView</servlet-name>\n    <servlet-class>com.alibaba.druid.support.http.StatViewServlet</servlet-class>\n</servlet>\n<servlet-mapping>\n    <servlet-name>DruidStatView</servlet-name>\n    <url-pattern>/druid/*</url-pattern>\n</servlet-mapping>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("打开浏览器，输入：http://localhost:8080/druid/index.html 浏览器显示效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1528842755.png",alt:""}})])])},[],!1,null,null,null);e.default=r.exports}}]);