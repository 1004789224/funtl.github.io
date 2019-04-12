(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{667:function(s,e,n){"use strict";n.r(e);var a=n(2),r=Object(a.a)({},function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"spring-mvc-responsebody"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-responsebody","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring MVC @ResponseBody")]),s._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("p",[n("code",[s._v("@ResponseBody")]),s._v(" 注解表示该方法的返回的结果直接写入 HTTP 响应正文（ResponseBody）中，一般在异步获取数据时使用，通常是在使用 "),n("code",[s._v("@RequestMapping")]),s._v(" 后，返回值通常解析为跳转路径，加上 "),n("code",[s._v("@ResponseBody")]),s._v(" 后返回结果不会被解析为跳转路径，而是直接写入HTTP 响应正文中。")]),s._v(" "),n("h2",{attrs:{id:"作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),n("p",[s._v("该注解用于将 "),n("code",[s._v("Controller")]),s._v(" 的方法返回的对象，通过适当的 "),n("code",[s._v("HttpMessageConverter")]),s._v(" 转换为指定格式后，写入到 "),n("code",[s._v("Response")]),s._v(" 对象的 "),n("code",[s._v("body")]),s._v(" 数据区。")]),s._v(" "),n("h2",{attrs:{id:"使用时机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用时机","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用时机")]),s._v(" "),n("p",[s._v("返回的数据不是 html 标签的页面，而是其他某种格式的数据时（如json、xml等）使用")]),s._v(" "),n("h2",{attrs:{id:"处理自定义类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理自定义类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 处理自定义类型")]),s._v(" "),n("p",[s._v("如果需要返回自定义对象为 JSON 数据类型，需要增加 "),n("code",[s._v("jackson")]),s._v(" 依赖，"),n("code",[s._v("pom.xml")]),s._v(" 配置文件如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\x3c!-- Json Begin --\x3e\n<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-core</artifactId>\n    <version>2.9.5</version>\n</dependency>\n<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-databind</artifactId>\n    <version>2.9.5</version>\n</dependency>\n<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-annotations</artifactId>\n    <version>${jackson.version}</version>\n</dependency>\n\x3c!-- Json End --\x3e\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);