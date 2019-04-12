(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{373:function(a,t,s){"use strict";s.r(t);var e=s(2),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker-构建-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-构建-tomcat","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker 构建 Tomcat")]),a._v(" "),s("h2",{attrs:{id:"查找-docker-hub-上的-tomcat-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找-docker-hub-上的-tomcat-镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 查找 Docker Hub 上的 Tomcat 镜像")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('root@UbuntuBase:/usr/local/docker/tomcat# docker search tomcat\nNAME                           DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\ntomcat                         Apache Tomcat is an open source implementa...   1550                [OK]                \ndordoka/tomcat                 Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 ba...   43                                      [OK]\ntomee                          Apache TomEE is an all-Apache Java EE cert...   42                  [OK]                \ndavidcaste/alpine-tomcat       Apache Tomcat 7/8 using Oracle Java 7/8 wi...   21                                      [OK]\nconsol/tomcat-7.0              Tomcat 7.0.57, 8080, "admin/admin"              16                                      [OK]\ncloudesire/tomcat              Tomcat server, 6/7/8                            15                                      [OK]\nmaluuba/tomcat7                                                                9                                       [OK]\ntutum/tomcat                   Base docker image to run a Tomcat applicat...   8                                       \njeanblanchard/tomcat           Minimal Docker image with Apache Tomcat         8                                       \nandreptb/tomcat                Debian Jessie based image with Apache Tomc...   7                                       [OK]\nbitnami/tomcat                 Bitnami Tomcat Docker Image                     5                                       [OK]\naallam/tomcat-mysql            Debian, Oracle JDK, Tomcat & MySQL              4                                       [OK]\nantoineco/tomcat-mod_cluster   Apache Tomcat with JBoss mod_cluster            1                                       [OK]\nmaluuba/tomcat7-java8          Tomcat7 with java8.                             1                                       \namd64/tomcat                   Apache Tomcat is an open source implementa...   1                                       \nprimetoninc/tomcat             Apache tomcat 8.5, 8.0, 7.0                     1                                       [OK]\ntrollin/tomcat                                                                 0                                       \nfabric8/tomcat-8               Fabric8 Tomcat 8 Image                          0                                       [OK]\nawscory/tomcat                 tomcat                                          0                                       \noobsri/tomcat8                 Testing CI Jobs with different names.           0                                       \nhegand/tomcat                  docker-tomcat                                   0                                       [OK]\ns390x/tomcat                   Apache Tomcat is an open source implementa...   0                                       \nppc64le/tomcat                 Apache Tomcat is an open source implementa...   0                                       \n99taxis/tomcat7                Tomcat7                                         0                                       [OK]\nqminderapp/tomcat7             Tomcat 7                                        0\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br")])]),s("p",[a._v("这里我们拉取官方的镜像")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker pull tomcat\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 tomcat 的镜像。")]),a._v(" "),s("h2",{attrs:{id:"运行容器："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行容器：","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行容器：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker run --name tomcat -p 8080:8080 -v $PWD/test:/usr/local/tomcat/webapps/test -d tomcat\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("命令说明：")]),a._v(" "),s("ul",[s("li",[a._v("-p 8080:8080：将容器的8080端口映射到主机的8080端口")]),a._v(" "),s("li",[a._v("-v $PWD/test:/usr/local/tomcat/webapps/test：将主机中当前目录下的test挂载到容器的/test")])]),a._v(" "),s("p",[a._v("查看容器启动情况")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('root@UbuntuBase:/usr/local/docker/tomcat/webapps# docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES\n38498e53128c        tomcat              "catalina.sh run"   2 minutes ago       Up 2 minutes        0.0.0.0:8080->8080/tcp   tomcat\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("通过浏览器访问")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20171103174843.png",alt:""}})])])},[],!1,null,null,null);t.default=n.exports}}]);