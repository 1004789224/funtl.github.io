(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{490:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"swarm-mode-部署服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swarm-mode-部署服务","aria-hidden":"true"}},[s._v("#")]),s._v(" Swarm mode 部署服务")]),s._v(" "),n("p",[s._v("我们使用 "),n("code",[s._v("docker service")]),s._v(" 命令来管理 "),n("code",[s._v("Swarm")]),s._v(" 集群中的服务，该命令只能在管理节点运行。")]),s._v(" "),n("h2",{attrs:{id:"新建服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 新建服务")]),s._v(" "),n("p",[s._v("现在我们在上一节创建的 "),n("code",[s._v("Swarm")]),s._v(" 集群中运行一个名为 "),n("code",[s._v("nginx")]),s._v(" 服务。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" create --replicas 3 -p 80:80 --name nginx nginx:1.13.7-alpine\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("现在我们使用浏览器，输入任意节点 IP ,即可看到 nginx 默认页面。")]),s._v(" "),n("h2",{attrs:{id:"查看服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看服务")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("docker service ls")]),s._v(" 来查看当前 "),n("code",[s._v("Swarm")]),s._v(" 集群运行的服务。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nID                  NAME                MODE                REPLICAS            IMAGE                 PORTS\nkc57xffvhul5        nginx               replicated          3/3                 nginx:1.13.7-alpine   *:80-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("80/tcp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("使用 "),n("code",[s._v("docker service ps")]),s._v(" 来查看某个服务的详情。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" nginx\nID                  NAME                IMAGE                 NODE                DESIRED STATE       CURRENT STATE                ERROR               PORTS\npjfzd39buzlt        nginx.1             nginx:1.13.7-alpine   swarm2              Running             Running about a minute ago\nhy9eeivdxlaa        nginx.2             nginx:1.13.7-alpine   swarm1              Running             Running about a minute ago\n36wmpiv7gmfo        nginx.3             nginx:1.13.7-alpine   swarm3              Running             Running about a minute ago\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("使用 "),n("code",[s._v("docker service logs")]),s._v(" 来查看某个服务的日志。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" logs nginx\nnginx.3.36wmpiv7gmfo@swarm3    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 10.255.0.4 - - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("25/Nov/2017:02:10:30 +0000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET / HTTP/1.1"')]),s._v(" 200 612 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.3.36wmpiv7gmfo@swarm3    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 10.255.0.4 - - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("25/Nov/2017:02:10:30 +0000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /favicon.ico HTTP/1.1"')]),s._v(" 404 169 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.3.36wmpiv7gmfo@swarm3    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 2017/11/25 02:10:30 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 5"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#5: *1 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 10.255.0.4, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "192.168.99.102"')]),s._v("\nnginx.1.pjfzd39buzlt@swarm2    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 10.255.0.2 - - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("25/Nov/2017:02:10:26 +0000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET / HTTP/1.1"')]),s._v(" 200 612 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.1.pjfzd39buzlt@swarm2    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 10.255.0.2 - - "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("25/Nov/2017:02:10:27 +0000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /favicon.ico HTTP/1.1"')]),s._v(" 404 169 "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nnginx.1.pjfzd39buzlt@swarm2    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 2017/11/25 02:10:27 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 5"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#5: *1 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 10.255.0.2, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "192.168.99.101"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"删除服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除服务")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("docker service rm")]),s._v(" 来从 "),n("code",[s._v("Swarm")]),s._v(" 集群移除某个服务。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);