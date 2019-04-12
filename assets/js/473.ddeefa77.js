(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{875:function(e,r,s){"use strict";s.r(r);var t=s(2),n=Object(t.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"部署-docker-registry-webui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-docker-registry-webui","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署 Docker Registry WebUI")]),e._v(" "),s("p",[e._v("私服安装成功后就可以使用 docker 命令行工具对 registry 做各种操作了。然而不太方便的地方是不能直观的查看 registry 中的资源情况。如果可以使用 UI 工具管理镜像就更好了。这里介绍两个 Docker Registry WebUI 工具")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/kwk/docker-registry-frontend",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-registry-frontend"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://hub.docker.com/r/hyper/docker-registry-web/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-registry-web"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("两个工具的功能和界面都差不多，我们以 "),s("code",[e._v("docker-registry-fontend")]),e._v(" 为例讲解")]),e._v(" "),s("h2",{attrs:{id:"docker-registry-frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-frontend","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-registry-frontend")]),e._v(" "),s("p",[e._v("我们使用 docker-compose 来安装和运行，"),s("code",[e._v("docker-compose.yml")]),e._v(" 配置如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("version: '3.1'\nservices:\n  frontend:\n    image: konradkleine/docker-registry-frontend:v2\n    ports:\n      - 8080:80\n    volumes:\n      - ./certs/frontend.crt:/etc/apache2/server.crt:ro\n      - ./certs/frontend.key:/etc/apache2/server.key:ro\n    environment:\n      - ENV_DOCKER_REGISTRY_HOST=192.168.75.133\n      - ENV_DOCKER_REGISTRY_PORT=5000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("blockquote",[s("p",[e._v("注意：请将配置文件中的主机和端口换成自己仓库的地址")])]),e._v(" "),s("p",[e._v("运行成功后在浏览器访问：http://192.168.75.133:5000")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1527005202.png",alt:""}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1527005783.png",alt:""}})])])},[],!1,null,null,null);r.default=n.exports}}]);