(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(s,n,a){"use strict";a.r(n);var e=a(2),r=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基于-docker-安装-gitlab-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab-runner","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 Docker 安装 GitLab Runner")]),s._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av34582113",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-持续集成-GitLab Runner"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"gitlab-runner-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-runner-简介","aria-hidden":"true"}},[s._v("#")]),s._v(" GitLab Runner 简介")]),s._v(" "),a("p",[s._v("理解了上面的基本概念之后，有没有觉得少了些什么东西 —— 由谁来执行这些构建任务呢？")]),s._v(" "),a("p",[s._v("答案就是 GitLab Runner 了！")]),s._v(" "),a("p",[s._v("想问为什么不是 GitLab CI 来运行那些构建任务？")]),s._v(" "),a("p",[s._v("一般来说，构建任务都会占用很多的系统资源 (譬如编译代码)，而 GitLab CI 又是 GitLab 的一部分，如果由 GitLab CI 来运行构建任务的话，在执行构建任务的时候，GitLab 的性能会大幅下降。")]),s._v(" "),a("p",[s._v("GitLab CI 最大的作用是管理各个项目的构建状态，因此，运行构建任务这种浪费资源的事情就交给 GitLab Runner 来做拉！")]),s._v(" "),a("p",[s._v("因为 GitLab Runner 可以安装到不同的机器上，所以在构建任务运行期间并不会影响到 GitLab 的性能")]),s._v(" "),a("h2",{attrs:{id:"基于-docker-安装-gitlab-runner-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab-runner-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 Docker 安装 GitLab Runner")]),s._v(" "),a("h3",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备","aria-hidden":"true"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("ul",[a("li",[s._v("创建工作目录 "),a("code",[s._v("/usr/local/docker/runner")])]),s._v(" "),a("li",[s._v("创建构建目录 "),a("code",[s._v("/usr/local/docker/runner/environment")])]),s._v(" "),a("li",[s._v("下载 "),a("code",[s._v("jdk-8u152-linux-x64.tar.gz")]),s._v(" 并复制到 "),a("code",[s._v("/usr/local/docker/runner/environment")])]),s._v(" "),a("li",[s._v("下载 "),a("code",[s._v("apache-maven-3.5.3-bin.tar.gz")]),s._v(" 并复制到 "),a("code",[s._v("/usr/local/docker/runner/environment")])])]),s._v(" "),a("h3",{attrs:{id:"daemon-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemon-json","aria-hidden":"true"}},[s._v("#")]),s._v(" daemon.json")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/local/docker/runner/environment")]),s._v(" 目录下创建 "),a("code",[s._v("daemon.json")]),s._v("，用于配置加速器和仓库地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "registry-mirrors": [\n    "https://registry.docker-cn.com"\n  ],\n  "insecure-registries": [\n    "192.168.10.133:5000"\n  ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/local/docker/runner/environment")]),s._v(" 目录下创建 "),a("code",[s._v("Dockerfile")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("FROM gitlab/gitlab-runner\nMAINTAINER Lusifer <topsale@vip.qq.com>\n\n# 修改软件源\nRUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse' > /etc/apt/sources.list && \\\n    echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse' >> /etc/apt/sources.list && \\\n    echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse' >> /etc/apt/sources.list && \\\n    echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse' >> /etc/apt/sources.list && \\\n    apt-get update -y && \\\n    apt-get clean\n\n# 安装 Docker\nRUN apt-get -y install apt-transport-https ca-certificates curl software-properties-common && \\\n    curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | apt-key add - && \\\n    add-apt-repository \"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable\" && \\\n    apt-get update -y && \\\n    apt-get install -y docker-ce\nCOPY daemon.json /etc/docker/daemon.json\n\n# 安装 Docker Compose\nWORKDIR /usr/local/bin\nRUN wget https://raw.githubusercontent.com/topsale/resources/master/docker/docker-compose\nRUN chmod +x docker-compose\n\n# 安装 Java\nRUN mkdir -p /usr/local/java\nWORKDIR /usr/local/java\nCOPY jdk-8u152-linux-x64.tar.gz /usr/local/java\nRUN tar -zxvf jdk-8u152-linux-x64.tar.gz && \\\n    rm -fr jdk-8u152-linux-x64.tar.gz\n\n# 安装 Maven\nRUN mkdir -p /usr/local/maven\nWORKDIR /usr/local/maven\n# RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz\nCOPY apache-maven-3.5.3-bin.tar.gz /usr/local/maven\nRUN tar -zxvf apache-maven-3.5.3-bin.tar.gz && \\\n    rm -fr apache-maven-3.5.3-bin.tar.gz\n# COPY settings.xml /usr/local/maven/apache-maven-3.5.3/conf/settings.xml\n\n# 配置环境变量\nENV JAVA_HOME /usr/local/java/jdk1.8.0_152\nENV MAVEN_HOME /usr/local/maven/apache-maven-3.5.3\nENV PATH $PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin\n\nWORKDIR /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h3",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/local/docker/runner")]),s._v(" 目录下创建 "),a("code",[s._v("docker-compose.yml")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("version: '3.1'\nservices:\n  gitlab-runner:\n    build: environment\n    restart: always\n    container_name: gitlab-runner\n    privileged: true\n    volumes:\n      - ./config:/etc/gitlab-runner\n      - /var/run/docker.sock:/var/run/docker.sock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"注册-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册-runner","aria-hidden":"true"}},[s._v("#")]),s._v(" 注册 Runner")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it gitlab-runner gitlab-runner register\n\n# 输入 GitLab 地址\nPlease enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):\nhttp://192.168.10.132/\n\n# 输入 GitLab Token\nPlease enter the gitlab-ci token for this runner:\n1Lxq_f1NRfCfeNbE5WRh\n\n# 输入 Runner 的说明\nPlease enter the gitlab-ci description for this runner:\n可以为空\n\n# 设置 Tag，可以用于指定在构建规定的 tag 时触发 ci\nPlease enter the gitlab-ci tags for this runner (comma separated):\ndeploy\n\n# 这里选择 true ，可以用于代码上传后直接执行\nWhether to run untagged builds [true/false]:\ntrue\n\n# 这里选择 false，可以直接回车，默认为 false\nWhether to lock Runner to current project [true/false]:\nfalse\n\n# 选择 runner 执行器，这里我们选择的是 shell\nPlease enter the executor: virtualbox, docker+machine, parallels, shell, ssh, docker-ssh+machine, kubernetes, docker, docker-ssh:\nshell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"使用-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-runner","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 Runner")]),s._v(" "),a("h3",{attrs:{id:"gitlab-ci-地址与令牌参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-地址与令牌参数","aria-hidden":"true"}},[s._v("#")]),s._v(" GitLab CI 地址与令牌参数")]),s._v(" "),a("p",[a("code",[s._v("项目")]),s._v(" –> "),a("code",[s._v("设置")]),s._v(" –> "),a("code",[s._v("CI/CD")]),s._v(" –> "),a("code",[s._v("Runner 设置")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/Lusifer1521043282.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"gitlab-ci-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" .gitlab-ci.yml")]),s._v(" "),a("p",[s._v("在项目工程下编写 "),a("code",[s._v(".gitlab-ci.yml")]),s._v(" 配置文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("stages:\n  - install_deps\n  - test\n  - build\n  - deploy_test\n  - deploy_production\n\ncache:\n  key: ${CI_BUILD_REF_NAME}\n  paths:\n    - node_modules/\n    - dist/\n\n# 安装依赖\ninstall_deps:\n  stage: install_deps\n  only:\n    - develop\n    - master\n  script:\n    - npm install\n\n# 运行测试用例\ntest:\n  stage: test\n  only:\n    - develop\n    - master\n  script:\n    - npm run test\n\n# 编译\nbuild:\n  stage: build\n  only:\n    - develop\n    - master\n  script:\n    - npm run clean\n    - npm run build:client\n    - npm run build:server\n\n# 部署测试服务器\ndeploy_test:\n  stage: deploy_test\n  only:\n    - develop\n  script:\n    - pm2 delete app || true\n    - pm2 start app.js --name app\n\n# 部署生产服务器\ndeploy_production:\n  stage: deploy_production\n  only:\n    - master\n  script:\n    - bash scripts/deploy/deploy.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])]),a("p",[s._v("上面的配置把一次 Pipeline 分成五个阶段：")]),s._v(" "),a("ul",[a("li",[s._v("安装依赖(install_deps)")]),s._v(" "),a("li",[s._v("运行测试(test)")]),s._v(" "),a("li",[s._v("编译(build)")]),s._v(" "),a("li",[s._v("部署测试服务器(deploy_test)")]),s._v(" "),a("li",[s._v("部署生产服务器(deploy_production)")])]),s._v(" "),a("p",[a("strong",[s._v("注意：")]),s._v(" 设置 Job.only 后，只有当 develop 分支和 master 分支有提交的时候才会触发相关的 Jobs。")]),s._v(" "),a("p",[s._v("节点说明：")]),s._v(" "),a("ul",[a("li",[s._v("stages：定义构建阶段，这里只有一个阶段 deploy")]),s._v(" "),a("li",[s._v("deploy：构建阶段 deploy 的详细配置也就是任务配置")]),s._v(" "),a("li",[s._v("script：需要执行的 shell 脚本")]),s._v(" "),a("li",[s._v("only：这里的 master 指在提交到 master 时执行")]),s._v(" "),a("li",[s._v("tags：与注册 runner 时的 tag 匹配")])]),s._v(" "),a("h3",{attrs:{id:"测试集成效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试集成效果","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试集成效果")]),s._v(" "),a("p",[s._v("所有操作完成后 push 代码到服务器，查看是否成功：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://javasite.oss-cn-shenzhen.aliyuncs.com/blog/assets/clipboard1.png",alt:""}})]),s._v(" "),a("p",[s._v("passed 表示执行成功")]),s._v(" "),a("h3",{attrs:{id:"其它命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 其它命令")]),s._v(" "),a("ul",[a("li",[s._v("删除注册信息")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('gitlab-ci-multi-runner unregister --name "名称"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看注册列表")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gitlab-ci-multi-runner list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"附：项目配置-dockerfile-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：项目配置-dockerfile-案例","aria-hidden":"true"}},[s._v("#")]),s._v(" 附：项目配置 Dockerfile 案例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('FROM openjdk:8-jre\n\nMAINTAINER Lusifer <topsale@vip.qq.com>\n\nENV APP_VERSION 1.0.0-SNAPSHOT\nENV DOCKERIZE_VERSION v0.6.1\nRUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\\n    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\\n    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\n\nRUN mkdir /app\n\nCOPY myshop-service-user-provider-$APP_VERSION.jar /app/app.jar\nENTRYPOINT ["dockerize", "-timeout", "5m", "-wait", "tcp://192.168.10.131:3306", "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/app.jar"]\n\nEXPOSE 8501\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])},[],!1,null,null,null);n.default=r.exports}}]);