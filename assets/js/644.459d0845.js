(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{604:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"bean-的装配方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean-的装配方式","aria-hidden":"true"}},[s._v("#")]),s._v(" Bean 的装配方式")]),s._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av24698287/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Spring Web 与 Bean 装配-容器中 Bean 的作用域"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av24698302/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Spring Web 与 Bean 装配-基于注解的装配方式"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("截止目前为止，咱们 Bean 的装配方式是通过代码 "),t("code",[s._v("getBean()")]),s._v(" 的方式从容器获取指定的 Bean 实例，容器首先会调用 Bean 类的无参构造器，创建空值的实例对象。除了使用 "),t("code",[s._v("getBean()")]),s._v(" 的装配方式外，还可以使用注解的装配方式。")]),s._v(" "),t("h2",{attrs:{id:"容器中-bean-的作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器中-bean-的作用域","aria-hidden":"true"}},[s._v("#")]),s._v(" 容器中 Bean 的作用域")]),s._v(" "),t("p",[s._v("在学习 Bean 的装配方式之前，我们先了解一下 Bean 的作用域。当通过 Spring 容器创建一个 Bean 实例时，不仅可以完成 Bean 的实例化，还可以通过 scope 属性，为 Bean 指定特定的作用域。Spring 支持 5 种作用域。")]),s._v(" "),t("ul",[t("li",[s._v("singleton：单态模式。即在整个 Spring 容器中，使用 singleton 定义的 Bean 将是单例的，只有一个实例。默认为单态的。")]),s._v(" "),t("li",[s._v("prototype：原型模式。即每次使用 getBean 方法获取的同一个 "),t("code",[s._v("<bean />")]),s._v(" 的实例都是一个新的实例。")]),s._v(" "),t("li",[s._v("request：对于每次 HTTP 请求，都将会产生一个不同的 Bean 实例。")]),s._v(" "),t("li",[s._v("session：对于每个不同的 HTTP session，都将产生一个不同的 Bean 实例。")]),s._v(" "),t("li",[s._v("global session：每个全局的 HTTP session 对应一个 Bean 实例。典型情况下，仅在使用 portlet 集群时有效，多个 Web 应用共享一个 session。一般应用中，global-session 与 session 是等同的。")])]),s._v(" "),t("p",[s._v("注意事项：")]),s._v(" "),t("ul",[t("li",[s._v("对于 scope 的值 request、session 与 global session，只有在 Web 应用中使用 Spring 时，该作用域才有效。")]),s._v(" "),t("li",[s._v("对于 scope 为 singleton 的单例模式，该 Bean 是在容器被创建时即被装配好了。")]),s._v(" "),t("li",[s._v("对于 scope 为 prototype 的原型模式，Bean 实例是在代码中使用该 Bean 实例时才进行装配的。")])]),s._v(" "),t("h2",{attrs:{id:"基于注解的装配方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于注解的装配方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于注解的装配方式")]),s._v(" "),t("p",[s._v("对于 DI 使用注解，将不再需要在 Spring 配置文件中声明 Bean 实例。Spring 中使用注解， 需要在原有 Spring 运行环境基础上再做一些改变")]),s._v(" "),t("p",[s._v("需要在 Spring 配置文件中配置组件扫描器，用于在指定的基本包中扫描注解。")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[s._v('<?xml version="1.0" encoding="UTF-8"?>')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("beans")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.springframework.org/schema/beans"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("context")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.springframework.org/schema/context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xsi:")]),s._v("schemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("\n       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd \n       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("context:")]),s._v("annotation-config")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("context:")]),s._v("component-scan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("base-package")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("com.funtl.leeshop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("beans")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"component"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component","aria-hidden":"true"}},[s._v("#")]),s._v(" @Component")]),s._v(" "),t("p",[s._v("需要在类上使用注解 "),t("code",[s._v("@Component")]),s._v("，该注解的 value 属性用于指定该 bean 的 id 值。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Student{"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('", name=\'"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\''")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("Spring 还提供了 3 个功能基本和 "),t("code",[s._v("@Component")]),s._v(" 等效的注解：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("@Repository")]),s._v("：用于对 DAO 实现类进行注解")]),s._v(" "),t("li",[t("code",[s._v("@Service")]),s._v("：用于对 Service 实现类进行注解")]),s._v(" "),t("li",[t("code",[s._v("@Controller")]),s._v("：用于对 Controller 实现类进行注解")])]),s._v(" "),t("h3",{attrs:{id:"scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope","aria-hidden":"true"}},[s._v("#")]),s._v(" @Scope")]),s._v(" "),t("p",[s._v("需要在类上使用注解 "),t("code",[s._v("@Scope")]),s._v("，其 value 属性用于指定作用域。默认为 singleton。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1514921149.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#value","aria-hidden":"true"}},[s._v("#")]),s._v(" @Value")]),s._v(" "),t("p",[s._v("需要在属性上使用注解 "),t("code",[s._v("@Value")]),s._v("，该注解的 value 属性用于指定要注入的值。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1514921245.png",alt:""}})]),s._v(" "),t("p",[s._v("使用该注解完成属性注入时，类中无需 setter。当然，若属性有 setter，则也可将其加到 setter 上。")]),s._v(" "),t("h3",{attrs:{id:"autowired"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autowired","aria-hidden":"true"}},[s._v("#")]),s._v(" @Autowired")]),s._v(" "),t("p",[s._v("需要在域属性上使用注解 "),t("code",[s._v("@Autowired")]),s._v("，该注解默认使用 "),t("strong",[s._v("按类型自动装配 Bean")]),s._v(" 的方式。")]),s._v(" "),t("p",[s._v("使用该注解完成属性注入时，类中无需 setter。当然，若属性有 setter，则也可将其加到 setter 上。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1514921700.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1514921733.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource","aria-hidden":"true"}},[s._v("#")]),s._v(" @Resource")]),s._v(" "),t("p",[s._v("需要在域属性上使用注解 "),t("code",[s._v("@Resource")]),s._v("，该注解有一个 "),t("code",[s._v("name")]),s._v(" 属性，可以创建指定的 bean")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userService"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),s._v(" userService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"postconstruct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postconstruct","aria-hidden":"true"}},[s._v("#")]),s._v(" @PostConstruct")]),s._v(" "),t("p",[s._v("在方法上使用 "),t("code",[s._v("@PostConstruct")]),s._v(" 相当于初始化")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1514922518.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"注解与-xml-配置的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解与-xml-配置的区别","aria-hidden":"true"}},[s._v("#")]),s._v(" 注解与 XML 配置的区别")]),s._v(" "),t("p",[s._v("注解的好处是，配置方便，直观。但其弊端也显而易见：以硬编码的方式写入到了 Java 代码中，其修改是需要重新编译代码的。")]),s._v(" "),t("p",[s._v("XML 配置方式的最大好处是，对其所做修改，无需编译代码，只需重启服务器即可将新的配置加载。")]),s._v(" "),t("p",[s._v("若注解与 XML 同用，XML 的优先级要高于注解。这样做的好处是，需要对某个 Bean 做修改，只需修改配置文件即可。")])])},[],!1,null,null,null);a.default=e.exports}}]);