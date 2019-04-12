(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{677:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如何理解-restful-api-的幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-restful-api-的幂等性","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何理解 RESTful API 的幂等性")]),t._v(" "),s("h2",{attrs:{id:"什么是幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是幂等性","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是幂等性")]),t._v(" "),s("p",[t._v("HTTP 幂等方法，是指无论调用多少次都不会有不同结果的 HTTP 方法。不管你调用一次，还是调用一百次，一千次，结果都是相同的。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET     /tickets       # 获取ticket列表\nGET     /tickets/12    # 查看某个具体的ticket\nPOST    /tickets       # 新建一个ticket\nPUT     /tickets/12    # 更新ticket 12\nPATCH   /tickets/12    # 更新ticket 12\nDELETE  /tickets/12    # 删除ticekt 12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"http-get-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-get-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP GET 方法")]),t._v(" "),s("p",[t._v("HTTP GET 方法，用于获取资源，不管调用多少次接口，结果都不会改变，所以是幂等的。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET     /tickets       # 获取ticket列表\nGET     /tickets/12    # 查看某个具体的ticket\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("只是查询数据，不会影响到资源的变化，因此我们认为它幂等。")]),t._v(" "),s("p",[t._v("值得注意，幂等性指的是作用于结果而非资源本身。怎么理解呢？例如，这个 HTTP GET 方法可能会每次得到不同的返回内容，但并不影响资源。")]),t._v(" "),s("p",[t._v("可能你会问有这种情况么？当然有咯。例如，我们有一个接口获取当前时间，我们就应该设计成")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET     /service_time # 获取服务器当前时间\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("它本身不会对资源本身产生影响，因此满足幂等性。")]),t._v(" "),s("h3",{attrs:{id:"http-post-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-post-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP POST 方法")]),t._v(" "),s("p",[t._v("HTTP POST 方法是一个非幂等方法，因为调用多次，都将产生新的资源。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST    /tickets       # 新建一个ticket\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("因为它会对资源本身产生影响，每次调用都会有新的资源产生，因此不满足幂等性。")]),t._v(" "),s("h3",{attrs:{id:"http-put-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-put-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP PUT 方法")]),t._v(" "),s("p",[t._v("HTTP PUT 方法是不是幂等的呢？我们来看下")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PUT     /tickets/12    # 更新ticket 12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("因为它直接把实体部分的数据替换到服务器的资源，我们多次调用它，只会产生一次影响，但是有相同结果的 HTTP 方法，所以满足幂等性。")]),t._v(" "),s("h3",{attrs:{id:"http-patch-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-patch-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP PATCH 方法")]),t._v(" "),s("p",[t._v("HTTP PATCH 方法是非幂等的。HTTP POST 方法和 HTTP PUT 方法可能比较好理解，但是 HTTP PATCH 方法只是更新部分资源，怎么是非幂等的呢?")]),t._v(" "),s("p",[t._v("因为，PATCH 提供的实体则需要根据程序或其它协议的定义，解析后在服务器上执行，以此来修改服务器上的资源。换句话说，PATCH 请求是会执行某个程序的，如果重复提交，程序可能执行多次，对服务器上的资源就可能造成额外的影响，这就可以解释它为什么是非幂等的了。")]),t._v(" "),s("p",[t._v("可能你还不能理解这点。我们举个例子")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PATCH   /tickets/12    # 更新ticket 12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("此时，我们服务端对方法的处理是，当调用一次方法，更新部分字段，将这条 ticket 记录的操作记录加一，这次，每次调用的资源是不是变了呢，所以它是有可能是非幂等的操作。")]),t._v(" "),s("h3",{attrs:{id:"http-delete-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-delete-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP DELETE 方法")]),t._v(" "),s("p",[t._v("HTTP DELETE 方法用于删除资源，会将资源删除。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DELETE  /tickets/12    # 删除ticekt 12\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("调用一次和多次对资源产生影响是相同的，所以也满足幂等性。")]),t._v(" "),s("h2",{attrs:{id:"如何设计符合幂等性的高质量-restful-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何设计符合幂等性的高质量-restful-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何设计符合幂等性的高质量 RESTful API")]),t._v(" "),s("h3",{attrs:{id:"http-get-vs-http-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-get-vs-http-post","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP GET vs HTTP POST")]),t._v(" "),s("p",[t._v("也许，你会想起一个面试题。"),s("strong",[t._v("HTTP 请求的 GET 与 POST 方式有什么区别？")]),t._v(" 你可能会回答到：GET 方式通过 URL 提交数据，数据在 URL 中可以看到；POST 方式，数据放置在 HTML HEADER 内提交。但是，我们现在从 RESTful 的资源角度来看待问题，HTTP GET 方法是幂等的，所以它适合作为查询操作，HTTP POST 方法是非幂等的，所以用来表示新增操作。")]),t._v(" "),s("p",[t._v("但是，也有例外，我们有的时候可能需要把查询方法改造成 HTTP POST 方法。比如，超长（1k）的 GET URL 使用 POST 方法来替代，因为 GET 受到 URL 长度的限制。虽然，它不符合幂等性，但是它是一种折中的方案。")]),t._v(" "),s("h3",{attrs:{id:"http-post-vs-http-put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-post-vs-http-put","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP POST vs HTTP PUT")]),t._v(" "),s("p",[t._v("对于 HTTP POST 方法和 HTTP PUT 方法，我们一般的理解是 POST 表示创建资源，PUT 表示更新资源。当然，这个是正确的理解。")]),t._v(" "),s("p",[t._v("但是，实际上，两个方法都用于创建资源，更为本质的差别是在幂等性。HTTP POST 方法是非幂等，所以用来表示创建资源，HTTP PUT 方法是幂等的，因此表示更新资源更加贴切。")]),t._v(" "),s("h3",{attrs:{id:"http-put-vs-http-patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-put-vs-http-patch","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP PUT vs HTTP PATCH")]),t._v(" "),s("p",[t._v("此时，你看会有另外一个问题。HTTP PUT 方法和 HTTP PATCH 方法，都是用来表述更新资源，它们之间有什么区别呢？我们一般的理解是 PUT 表示更新全部资源，PATCH 表示更新部分资源。首先，这个是我们遵守的第一准则。根据上面的描述，PATCH 方法是非幂等的，因此我们在设计我们服务端的 RESTful API 的时候，也需要考虑。如果，我们想要明确的告诉调用者我们的资源是幂等的，我的设计更倾向于使用 HTTP PUT 方法。")])])},[],!1,null,null,null);a.default=r.exports}}]);