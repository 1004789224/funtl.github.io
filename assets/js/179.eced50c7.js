(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{474:function(s,e,t){"use strict";t.r(e);var n=t(2),a=Object(n.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-配置-dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-配置-dns","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 配置 DNS")]),s._v(" "),t("p",[s._v("如何自定义配置容器的主机名和 DNS 呢？秘诀就是 Docker 利用虚拟文件来挂载容器的 3 个相关配置文件。")]),s._v(" "),t("p",[s._v("在容器中使用 "),t("code",[s._v("mount")]),s._v(" 命令可以看到挂载信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v("\n/dev/disk/by-uuid/1fec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".ebdf on /etc/hostname "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" ext4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n/dev/disk/by-uuid/1fec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".ebdf on /etc/hosts "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" ext4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ntmpfs on /etc/resolv.conf "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" tmpfs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这种机制可以让宿主主机 DNS 信息发生更新后，所有 Docker 容器的 DNS 配置通过 "),t("code",[s._v("/etc/resolv.conf")]),s._v(" 文件立刻得到更新。")]),s._v(" "),t("p",[s._v("配置全部容器的 DNS ，也可以在 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v(" 文件中增加以下内容来设置。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dns"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"114.114.114.114"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.8.8.8"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这样每次启动的容器 DNS 自动配置为 "),t("code",[s._v("114.114.114.114")]),s._v(" 和 "),t("code",[s._v("8.8.8.8")]),s._v("。使用以下命令来证明其已经生效。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -it --rm ubuntu:17.10  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" etc/resolv.conf\n\nnameserver 114.114.114.114\nnameserver 8.8.8.8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如果用户想要手动指定容器的配置，可以在使用 "),t("code",[s._v("docker run")]),s._v(" 命令启动容器时加入如下参数：")]),s._v(" "),t("p",[t("code",[s._v("-h HOSTNAME")]),s._v(" 或者 "),t("code",[s._v("--hostname=HOSTNAME")]),s._v(" 设定容器的主机名，它会被写到容器内的 "),t("code",[s._v("/etc/hostname")]),s._v(" 和 "),t("code",[s._v("/etc/hosts")]),s._v("。但它在容器外部看不到，既不会在 "),t("code",[s._v("docker container ls")]),s._v(" 中显示，也不会在其他的容器的 "),t("code",[s._v("/etc/hosts")]),s._v(" 看到。")]),s._v(" "),t("p",[t("code",[s._v("--dns=IP_ADDRESS")]),s._v(" 添加 DNS 服务器到容器的 "),t("code",[s._v("/etc/resolv.conf")]),s._v(" 中，让容器用这个服务器来解析所有不在 "),t("code",[s._v("/etc/hosts")]),s._v(" 中的主机名。")]),s._v(" "),t("p",[t("code",[s._v("--dns-search=DOMAIN")]),s._v(" 设定容器的搜索域，当设定搜索域为 "),t("code",[s._v(".example.com")]),s._v(" 时，在搜索一个名为 host 的主机时，DNS 不仅搜索 host，还会搜索 "),t("code",[s._v("host.example.com")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：如果在容器启动时没有指定最后两个参数，Docker 会默认用主机上的 "),t("code",[s._v("/etc/resolv.conf")]),s._v(" 来配置容器。")])])])},[],!1,null,null,null);e.default=a.exports}}]);