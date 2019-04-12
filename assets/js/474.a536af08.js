(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{876:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"配置-docker-registry-客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker-registry-客户端","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 Docker Registry 客户端")]),s._v(" "),e("h2",{attrs:{id:"本节视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/av27624593",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】平台即服务-Registry-配置 WebUI 与客户端"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("我们的教学案例使用的是 Ubuntu Server 16.04 LTS 版本，属于 "),e("code",[s._v("systemd")]),s._v(" 系统，需要在 "),e("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中增加如下内容（如果文件不存在请新建该文件）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "registry-mirrors": [\n    "https://registry.docker-cn.com"\n  ],\n  "insecure-registries": [\n    "ip:5000"\n  ]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("blockquote",[e("p",[s._v("注意：该文件必须符合 json 规范，否则 Docker 将不能启动。")])]),s._v(" "),e("p",[s._v("之后重新启动服务。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ sudo systemctl daemon-reload\n$ sudo systemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"检查客户端配置是否生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查客户端配置是否生效","aria-hidden":"true"}},[s._v("#")]),s._v(" 检查客户端配置是否生效")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("docker info")]),s._v(" 命令手动检查，如果从配置中看到如下内容，说明配置成功（192.168.75.133 为教学案例 IP）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Insecure Registries:\n 192.168.75.133:5000\n 127.0.0.0/8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"测试镜像上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试镜像上传","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试镜像上传")]),s._v(" "),e("p",[s._v("我们以 Nginx 为例测试镜像上传功能")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## 拉取一个镜像\ndocker pull nginx\n\n## 查看全部镜像\ndocker images\n\n## 标记本地镜像并指向目标仓库（ip:port/image_name:tag，该格式为标记版本号）\ndocker tag nginx 192.168.75.133:5000/nginx\n\n## 提交镜像到仓库\ndocker push 192.168.75.133:5000/nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h2",{attrs:{id:"查看全部镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看全部镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看全部镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -XGET http://192.168.75.133:5000/v2/_catalog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看指定镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看指定镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看指定镜像")]),s._v(" "),e("p",[s._v("以 Nginx 为例，查看已提交的列表")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -XGET http://192.168.75.133:5000/v2/nginx/tags/list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"测试拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试拉取镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试拉取镜像")]),s._v(" "),e("ul",[e("li",[s._v("先删除镜像")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker rmi nginx\ndocker rmi 192.168.75.133:5000/nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("再拉取镜像")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull 192.168.75.133:5000/nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])},[],!1,null,null,null);a.default=r.exports}}]);