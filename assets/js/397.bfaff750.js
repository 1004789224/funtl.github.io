(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{765:function(a,e,r){"use strict";r.r(e);var t=r(2),s=Object(t.a)({},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"防范常见的-web-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#防范常见的-web-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 防范常见的 Web 攻击")]),a._v(" "),r("h2",{attrs:{id:"sql-注入攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" SQL 注入攻击")]),a._v(" "),r("p",[a._v("SQL 注入攻击，这个是最常聊到的话题，使用过 Java 的开发人员，第一个反应就是一定要使用预编译的 PrepareStatement")]),a._v(" "),r("h3",{attrs:{id:"什么是-sql-注入攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sql-注入攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 SQL 注入攻击")]),a._v(" "),r("p",[a._v("攻击者在 HTTP 请求中注入恶意的 SQL 代码，服务器使用参数构建数据库 SQL 命令时，恶意 SQL 被一起构造，并在数据库中执行。")]),a._v(" "),r("p",[a._v("用户登录，输入用户名 Lusifer，密码 "),r("code",[a._v("'or '1' = '1'")]),a._v(" ，如果此时使用参数构造的方式，就会出现")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("select * from user where name = 'Lusifer' and password = '' or '1'='1'\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("不管用户名和密码是什么内容，使查询出来的用户列表不为空。")]),a._v(" "),r("h3",{attrs:{id:"现在还会存在-sql-注入攻击么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#现在还会存在-sql-注入攻击么","aria-hidden":"true"}},[a._v("#")]),a._v(" 现在还会存在 SQL 注入攻击么")]),a._v(" "),r("p",[a._v("这个问题在使用了预编译的 PrepareStatement 后，安全性得到了很大的提高，但是真实情况下，很多同学并不重视，还是会留下漏洞的。举个例子，看看，大家的代码中对 sql 中 in 操作，使用了预编译，还是仍然还是通过字符串拼接呢？")]),a._v(" "),r("h3",{attrs:{id:"如何防范-sql-注入攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何防范-sql-注入攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何防范 SQL 注入攻击")]),a._v(" "),r("p",[a._v("使用预编译的 PrepareStatement 是必须的，但是一般我们会从两个方面同时入手：")]),a._v(" "),r("ol",[r("li",[a._v("Web 端\n"),r("ul",[r("li",[a._v("有效性检验。")]),a._v(" "),r("li",[a._v("限制字符串输入的长度。")])])]),a._v(" "),r("li",[a._v("服务端\n"),r("ul",[r("li",[a._v("不用拼接 SQL 字符串。")]),a._v(" "),r("li",[a._v("使用预编译的 PrepareStatement。")]),a._v(" "),r("li",[a._v("有效性检验。(为什么服务端还要做有效性检验？第一准则，外部都是不可信的，防止攻击者绕过 Web 端请求)")]),a._v(" "),r("li",[a._v("过滤 SQL 需要的参数中的特殊字符。比如单引号、双引号。")])])])]),a._v(" "),r("h2",{attrs:{id:"xss-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" XSS 攻击")]),a._v(" "),r("h3",{attrs:{id:"什么是-xss-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 XSS 攻击")]),a._v(" "),r("p",[a._v("跨站点脚本攻击，指攻击者通过篡改网页，嵌入恶意脚本程序，在用户浏览网页时，控制用户浏览器进行恶意操作的一种攻击方式。")]),a._v(" "),r("p",[a._v("假设页面上有一个表单")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('<input  type="text" name="name" value="Lusifer"/>\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("如果，用户输入的不是一个正常的字符串，而是")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('"/><script>alert("haha")<\/script><!-\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("此时，页面变成下面的内容，在输入框 input 的后面带上了一段脚本代码。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('<input type="text" name="name" value="Lusifer"/><script>alert("haha")<\/script><!-"/>\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("这端脚本程序只是弹出一个消息框，并不会造成什么危害，攻击的威力取决于用户输入了什么样的脚本，只要稍微修改，便可使攻击极具攻击性。")]),a._v(" "),r("h3",{attrs:{id:"如何防范-xss-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何防范-xss-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何防范 XSS 攻击")]),a._v(" "),r("ol",[r("li",[a._v("前端，服务端，同时需要字符串输入的长度限制。")]),a._v(" "),r("li",[a._v("前端，服务端，同时需要对HTML转义处理。将其中的 "),r("code",[a._v("<")]),a._v(" ,"),r("code",[a._v(">")]),a._v(" 等特殊字符进行转义编码。")])]),a._v(" "),r("h2",{attrs:{id:"csrf-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" CSRF 攻击")]),a._v(" "),r("h3",{attrs:{id:"什么是-csrf-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-csrf-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 CSRF 攻击")]),a._v(" "),r("p",[a._v("跨站点请求伪造，指攻击者通过跨站请求，以合法的用户的身份进行非法操作。可以这么理解 CSRF 攻击：攻击者盗用你的身份，以你的名义向第三方网站发送恶意请求。CRSF 能做的事情包括利用你的身份发邮件，发短信，进行交易转账，甚至盗取账号信息。")]),a._v(" "),r("h3",{attrs:{id:"如何防范-csrf-攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何防范-csrf-攻击","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何防范 CSRF 攻击")]),a._v(" "),r("ol",[r("li",[a._v("安全框架，例如 Spring Security。")]),a._v(" "),r("li",[a._v("token 机制。在 HTTP 请求中进行 token 验证，如果请求中没有 token 或者 token 内容不正确，则认为 CSRF 攻击而拒绝该请求。")]),a._v(" "),r("li",[a._v("验证码。通常情况下，验证码能够很好的遏制 CSRF 攻击，但是很多情况下，出于用户体验考虑，验证码只能作为一种辅助手段，而不是最主要的解决方案。")]),a._v(" "),r("li",[a._v("referer 识别。在 HTTP Header 中有一个字段 Referer，它记录了 HTTP 请求的来源地址。如果 Referer 是其他网站，就有可能是 CSRF 攻击，则拒绝该请求。但是，服务器并非都能取到 Referer。很多用户出于隐私保护的考虑，限制了 Referer 的发送。在某些情况下，浏览器也不会发送 Referer，例如 HTTPS 跳转到 HTTP。")])]),a._v(" "),r("h2",{attrs:{id:"文件上传漏洞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件上传漏洞","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件上传漏洞")]),a._v(" "),r("h3",{attrs:{id:"什么是文件上传漏洞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是文件上传漏洞","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是文件上传漏洞")]),a._v(" "),r("p",[a._v("文件上传漏洞，指的是用户上传一个可执行的脚本文件，并通过此脚本文件获得了执行服务端命令的能力。")]),a._v(" "),r("p",[a._v("许多第三方框架、服务，都曾经被爆出文件上传漏洞，比如很早之前的 Struts2，以及富文本编辑器等等，可能被一旦被攻击者上传恶意代码，有可能服务端就被人黑了。")]),a._v(" "),r("h3",{attrs:{id:"如何防范文件上传漏洞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何防范文件上传漏洞","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何防范文件上传漏洞")]),a._v(" "),r("ol",[r("li",[a._v("文件上传的目录设置为不可执行。")]),a._v(" "),r("li",[a._v("判断文件类型。在判断文件类型的时候，可以结合使用 "),r("code",[a._v("MIME Type")]),a._v("，后缀检查等方式。因为对于上传文件，不能简单地通过后缀名称来判断文件的类型，因为攻击者可以将可执行文件的后缀名称改为图片或其他后缀类型，诱导用户执行。")]),a._v(" "),r("li",[a._v("对上传的文件类型进行白名单校验，只允许上传可靠类型。")]),a._v(" "),r("li",[a._v("上传的文件需要进行重新命名，使攻击者无法猜想上传文件的访问路径，将极大地增加攻击成本，同时向 "),r("code",[a._v("shell")]),a._v(", "),r("code",[a._v("php")]),a._v(", "),r("code",[a._v("rar")]),a._v(", "),r("code",[a._v("ara")]),a._v(" 这种文件，因为重命名而无法成功实施攻击。")]),a._v(" "),r("li",[a._v("限制上传文件的大小。")]),a._v(" "),r("li",[a._v("单独设置文件服务器的域名。")])]),a._v(" "),r("h2",{attrs:{id:"访问控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#访问控制","aria-hidden":"true"}},[a._v("#")]),a._v(" 访问控制")]),a._v(" "),r("p",[a._v("一般来说，“基于 URL 的访问控制”是最常见的。")]),a._v(" "),r("h3",{attrs:{id:"垂直权限管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垂直权限管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 垂直权限管理")]),a._v(" "),r("p",[a._v("访问控制实际上是建立用户与权限之间的对应关系，即“基于角色的访问控制”，RBAC。不同角色的权限有高低之分。高权限角色访问低权限角色的资源往往是被允许的，而低权限角色访问高权限的资源往往被禁止的。在配置权限时，应当使用“最小权限原则”，并使用“默认拒绝”的策略，只对有需要的主体单独配置”允许”的策略，这在很多时候能够避免发生“越权访问”。")]),a._v(" "),r("p",[a._v("例如，Spring Security， Apache Shiro 都可以建立垂直权限管理。")]),a._v(" "),r("h3",{attrs:{id:"水平权限管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平权限管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 水平权限管理")]),a._v(" "),r("p",[a._v("水平权限问题在同一个角色上，系统只验证了访问数据的角色，没有对角色内的用户做细分，由于水平权限管理是系统缺乏一个数据级的访问控制所造成的，因此水平权限管理又可以称之为“基于数据的访问控制”。")]),a._v(" "),r("p",[a._v("举个理解，比如我们之前的一个助手产品，客户端用户删除评论功能，如果没有做水平权限管理，即设置只有本人才可以删除自己的评论，那么用户通过修改评论id就可以删除别人的评论这个就存在危险的越权操作。")]),a._v(" "),r("p",[a._v("这个层面，基本需要我们业务层面去处理，但是这个也是最为经常遗落的安全点。")])])},[],!1,null,null,null);e.default=s.exports}}]);