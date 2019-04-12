(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{406:function(e,a,s){"use strict";s.r(a);var r=s(2),v=Object(r.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker-machine-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-machine-使用","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Machine 使用")]),e._v(" "),s("p",[e._v("Docker Machine 支持多种后端驱动，包括虚拟机、本地主机和云平台等。")]),e._v(" "),s("h2",{attrs:{id:"创建本地主机实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建本地主机实例","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建本地主机实例")]),e._v(" "),s("h3",{attrs:{id:"virtualbox-驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-驱动","aria-hidden":"true"}},[e._v("#")]),e._v(" Virtualbox 驱动")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("virtualbox")]),e._v(" 类型的驱动，创建一台 Docker 主机，命名为 test。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-machine create -d virtualbox "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("你也可以在创建时加上如下参数，来配置主机或者主机上的 Docker。")]),e._v(" "),s("p",[s("code",[e._v("--engine-opt dns=114.114.114.114")]),e._v(" 配置 Docker 的默认 DNS")]),e._v(" "),s("p",[s("code",[e._v("--engine-registry-mirror https://registry.docker-cn.com")]),e._v(" 配置 Docker 的仓库镜像")]),e._v(" "),s("p",[s("code",[e._v("--virtualbox-memory 2048")]),e._v(" 配置主机内存")]),e._v(" "),s("p",[s("code",[e._v("--virtualbox-cpu-count 2")]),e._v(" 配置主机 CPU")]),e._v(" "),s("p",[e._v("更多参数请使用 "),s("code",[e._v("docker-machine create --driver virtualbox --help")]),e._v(" 命令查看。")]),e._v(" "),s("h3",{attrs:{id:"macos-xhyve-驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-xhyve-驱动","aria-hidden":"true"}},[e._v("#")]),e._v(" macOS xhyve 驱动")]),e._v(" "),s("p",[s("code",[e._v("xhyve")]),e._v(" 驱动 GitHub: https://github.com/zchee/docker-machine-driver-xhyve")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mist64/xhyve",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("xhyve")]),s("OutboundLink")],1),e._v(" 是 macOS 上轻量化的虚拟引擎，使用其创建的 Docker Machine 较 "),s("code",[e._v("VirtualBox")]),e._v(" 驱动创建的运行效率要高。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker-machine-driver-xhyve\n\n$ docker-machine create \\\n      -d xhyve \\\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# --xhyve-boot2docker-url ~/.docker/machine/cache/boot2docker.iso \\")]),e._v("\n      --engine-opt dns"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("114.114.114.114 \\\n      --engine-registry-mirror https://registry.docker-cn.com \\\n      --xhyve-memory-size 2048 \\\n      --xhyve-rawdisk \\\n      --xhyve-cpu-count 2 \\\n      xhyve\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("blockquote",[s("p",[e._v("注意：非首次创建时建议加上 "),s("code",[e._v("--xhyve-boot2docker-url ~/.docker/machine/cache/boot2docker.iso")]),e._v(" 参数，避免每次创建时都从 GitHub 下载 ISO 镜像。")])]),e._v(" "),s("p",[e._v("更多参数请使用 "),s("code",[e._v("docker-machine create --driver xhyve --help")]),e._v(" 命令查看。")]),e._v(" "),s("h3",{attrs:{id:"windows-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-10","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows 10")]),e._v(" "),s("p",[e._v("Windows 10 安装 Docker for Windows 之后不能再安装 VirtualBox，也就不能使用 "),s("code",[e._v("virtualbox")]),e._v(" 驱动来创建 Docker Machine，我们可以选择使用 "),s("code",[e._v("hyperv")]),e._v(" 驱动。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-machine create --driver hyperv vm\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("更多参数请使用 "),s("code",[e._v("docker-machine create --driver hyperv --help")]),e._v(" 命令查看。")]),e._v(" "),s("h2",{attrs:{id:"使用介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用介绍")]),e._v(" "),s("p",[e._v("创建好主机之后，查看主机")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-machine "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\nNAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER       ERRORS\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("      -        virtualbox   Running   tcp://192.168.99.187:2376           v17.10.0-ce\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("创建主机成功后，可以通过 "),s("code",[e._v("env")]),e._v(" 命令来让后续操作对象都是目标主机。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-machine "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("后续根据提示在命令行输入命令之后就可以操作 test 主机。")]),e._v(" "),s("p",[e._v("也可以通过 "),s("code",[e._v("SSH")]),e._v(" 登录到主机。")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-machine "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n\ndocker@test:~$ docker --version\nDocker version 17.10.0-ce, build f4ffd25\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("连接到主机之后你就可以在其上使用 Docker 了。")]),e._v(" "),s("h2",{attrs:{id:"官方支持驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方支持驱动","aria-hidden":"true"}},[e._v("#")]),e._v(" 官方支持驱动")]),e._v(" "),s("p",[e._v("通过 "),s("code",[e._v("-d")]),e._v(" 选项可以选择支持的驱动类型。")]),e._v(" "),s("ul",[s("li",[e._v("amazonec2")]),e._v(" "),s("li",[e._v("azure")]),e._v(" "),s("li",[e._v("digitalocean")]),e._v(" "),s("li",[e._v("exoscale")]),e._v(" "),s("li",[e._v("generic")]),e._v(" "),s("li",[e._v("google")]),e._v(" "),s("li",[e._v("hyperv")]),e._v(" "),s("li",[e._v("none")]),e._v(" "),s("li",[e._v("openstack")]),e._v(" "),s("li",[e._v("rackspace")]),e._v(" "),s("li",[e._v("softlayer")]),e._v(" "),s("li",[e._v("virtualbox")]),e._v(" "),s("li",[e._v("vmwarevcloudair")]),e._v(" "),s("li",[e._v("vmwarefusion")]),e._v(" "),s("li",[e._v("vmwarevsphere")])]),e._v(" "),s("h2",{attrs:{id:"第三方驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方驱动","aria-hidden":"true"}},[e._v("#")]),e._v(" 第三方驱动")]),e._v(" "),s("p",[e._v("请到 "),s("a",{attrs:{href:"https://github.com/docker/docker.github.io/blob/master/machine/AVAILABLE_DRIVER_PLUGINS.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("第三方驱动列表"),s("OutboundLink")],1),e._v(" 查看")]),e._v(" "),s("h2",{attrs:{id:"操作命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 操作命令")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("active")]),e._v("                查看活跃的 Docker 主机")]),e._v(" "),s("li",[s("code",[e._v("config")]),e._v("                输出连接的配置信息")]),e._v(" "),s("li",[s("code",[e._v("create")]),e._v("                创建一个 Docker 主机")]),e._v(" "),s("li",[s("code",[e._v("env")]),e._v("                   显示连接到某个主机需要的环境变量")]),e._v(" "),s("li",[s("code",[e._v("inspect")]),e._v("               输出主机更多信息")]),e._v(" "),s("li",[s("code",[e._v("ip")]),e._v("                    获取主机地址")]),e._v(" "),s("li",[s("code",[e._v("kill")]),e._v("                  停止某个主机")]),e._v(" "),s("li",[s("code",[e._v("ls")]),e._v("                    列出所有管理的主机")]),e._v(" "),s("li",[s("code",[e._v("provision")]),e._v("             重新设置一个已存在的主机")]),e._v(" "),s("li",[s("code",[e._v("regenerate-certs")]),e._v("      为某个主机重新生成 TLS 认证信息")]),e._v(" "),s("li",[s("code",[e._v("restart")]),e._v("               重启主机")]),e._v(" "),s("li",[s("code",[e._v("rm")]),e._v("                    删除某台主机")]),e._v(" "),s("li",[s("code",[e._v("ssh")]),e._v("                   SSH 到主机上执行命令")]),e._v(" "),s("li",[s("code",[e._v("scp")]),e._v("                   在主机之间复制文件")]),e._v(" "),s("li",[s("code",[e._v("mount")]),e._v("                 挂载主机目录到本地")]),e._v(" "),s("li",[s("code",[e._v("start")]),e._v("                 启动一个主机")]),e._v(" "),s("li",[s("code",[e._v("status")]),e._v("                查看主机状态")]),e._v(" "),s("li",[s("code",[e._v("stop")]),e._v("                  停止一个主机")]),e._v(" "),s("li",[s("code",[e._v("upgrade")]),e._v("               更新主机 Docker 版本为最新")]),e._v(" "),s("li",[s("code",[e._v("url")]),e._v("                   获取主机的 URL")]),e._v(" "),s("li",[s("code",[e._v("version")]),e._v("               输出 docker-machine 版本信息")]),e._v(" "),s("li",[s("code",[e._v("help")]),e._v("                  输出帮助信息")])]),e._v(" "),s("p",[e._v("每个命令，又带有不同的参数，可以通过")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker-machine COMMAND --help\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("来查看具体的用法。")])])},[],!1,null,null,null);a.default=v.exports}}]);