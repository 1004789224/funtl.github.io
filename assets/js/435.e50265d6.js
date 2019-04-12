(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{821:function(a,e,t){"use strict";t.r(e);var v=t(2),r=Object(v.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"maven-快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven-快照","aria-hidden":"true"}},[a._v("#")]),a._v(" Maven 快照")]),a._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[a._v("#")]),a._v(" 本节视频")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av24455373/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【视频】使用 Maven 构建应用-Maven 快照"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("大型应用软件一般由多个模块组成，一般它是多个团队开发同一个应用程序的不同模块，这是比较常见的场景。例如，一个团队正在对应用程序的应用程序，用户界面项目("),t("code",[a._v("app-ui.jar:1.0")]),a._v(") 的前端进行开发，他们使用的是数据服务工程 ("),t("code",[a._v("data-service.jar:1.0")]),a._v(")。")]),a._v(" "),t("p",[a._v("现在，它可能会有这样的情况发生，工作在数据服务团队开发人员快速地开发 bug 修复或增强功能，他们几乎每隔一天就要释放出库到远程仓库。")]),a._v(" "),t("p",[a._v("现在，如果数据服务团队上传新版本后，会出现下面的问题：")]),a._v(" "),t("ul",[t("li",[a._v("数据服务团队应该发布更新时每次都告诉应用程序 UI 团队，他们已经发布更新了代码。")]),a._v(" "),t("li",[a._v("UI 团队需要经常更新自己 "),t("code",[a._v("pom.xml")]),a._v(" 以获得更新应用程序的版本。")])]),a._v(" "),t("p",[a._v("为了处理这类情况，引入快照的概念，并发挥作用。")]),a._v(" "),t("h2",{attrs:{id:"什么是快照？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是快照？","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是快照？")]),a._v(" "),t("p",[a._v("快照（SNAPSHOT）是一个特殊版本，指出目前开发拷贝。不同于常规版本，Maven 每生成一个远程存储库都会检查新的快照版本。")]),a._v(" "),t("p",[a._v("现在，数据服务团队将在每次发布代码后更新快照存储库为："),t("code",[a._v("data-service:1.0-SNAPSHOT")]),a._v(" 替换旧的 SNAPSHOT jar。")]),a._v(" "),t("h2",{attrs:{id:"快照与版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快照与版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 快照与版本")]),a._v(" "),t("p",[a._v("在使用版本时，如果 Maven 下载所提到的版本为 "),t("code",[a._v("data-service:1.0")]),a._v("，那么它永远不会尝试在库中下载已经更新的版本 1.0。要下载更新的代码，data-service 的版本必须要升级到 1.1。")]),a._v(" "),t("p",[a._v("在使用快照（SNAPSHOT）时，Maven 会在每次应用程序 UI 团队建立自己的项目时自动获取最新的快照（"),t("code",[a._v("data-service:1.0-SNAPSHOT")]),a._v("）。")])])},[],!1,null,null,null);e.default=r.exports}}]);