(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{502:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"实例：创建一个点到点连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例：创建一个点到点连接","aria-hidden":"true"}},[s._v("#")]),s._v(" 实例：创建一个点到点连接")]),s._v(" "),t("p",[s._v("默认情况下，Docker 会将所有容器连接到由 "),t("code",[s._v("docker0")]),s._v(" 提供的虚拟子网中。")]),s._v(" "),t("p",[s._v("用户有时候需要两个容器之间可以直连通信，而不用通过主机网桥进行桥接。")]),s._v(" "),t("p",[s._v("解决办法很简单：创建一对 "),t("code",[s._v("peer")]),s._v(" 接口，分别放到两个容器中，配置成点到点链路类型即可。")]),s._v(" "),t("p",[s._v("首先启动 2 个容器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -i -t --rm --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none base /bin/bash\nroot@1f1f4c1f931a:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n$ docker run -i -t --rm --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none base /bin/bash\nroot@12e343489d2f:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("找到进程号，然后创建网络命名空间的跟踪文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker inspect -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.State.Pid}}'")]),s._v(" 1f1f4c1f931a\n2989\n$ docker inspect -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.State.Pid}}'")]),s._v(" 12e343489d2f\n3004\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/run/netns\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /proc/2989/ns/net /var/run/netns/2989\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /proc/3004/ns/net /var/run/netns/3004\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("创建一对 "),t("code",[s._v("peer")]),s._v(" 接口，然后配置路由")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" A "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" veth peer name B\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" A netns 2989\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" 2989 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 10.1.1.1/32 dev A\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" 2989 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" A up\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" 2989 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 10.1.1.2/32 dev A\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" B netns 3004\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" 3004 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 10.1.1.2/32 dev B\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" 3004 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" B up\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),s._v(" 3004 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 10.1.1.1/32 dev B\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("现在这 2 个容器就可以相互 ping 通，并成功建立连接。点到点链路不需要子网和子网掩码。")]),s._v(" "),t("p",[s._v("此外，也可以不指定 "),t("code",[s._v("--net=none")]),s._v(" 来创建点到点链路。这样容器还可以通过原先的网络来通信。")]),s._v(" "),t("p",[s._v("利用类似的办法，可以创建一个只跟主机通信的容器。但是一般情况下，更推荐使用 "),t("code",[s._v("--icc=false")]),s._v(" 来关闭容器之间的通信。")])])},[],!1,null,null,null);n.default=e.exports}}]);