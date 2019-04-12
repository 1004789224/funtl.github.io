(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{314:function(s,e,a){"use strict";a.r(e);var n=a(2),r=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"说说如何设计一个良好的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说如何设计一个良好的-api","aria-hidden":"true"}},[s._v("#")]),s._v(" 说说如何设计一个良好的 API")]),s._v(" "),a("h2",{attrs:{id:"版本号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本号","aria-hidden":"true"}},[s._v("#")]),s._v(" 版本号")]),s._v(" "),a("p",[s._v("在 RESTful API 中，API 接口应该尽量兼容之前的版本。但是，在实际业务开发场景中，可能随着业务需求的不断迭代，现有的 API 接口无法支持旧版本的适配，此时如果强制升级服务端的 API 接口将导致客户端旧有功能出现故障。实际上，Web 端是部署在服务器，因此它可以很容易为了适配服务端的新的 API 接口进行版本升级，然而像 Android 端、IOS 端、PC 端等其他客户端是运行在用户的机器上，因此当前产品很难做到适配新的服务端的 API 接口，从而出现功能故障，这种情况下，用户必须升级产品到最新的版本才能正常使用。")]),s._v(" "),a("p",[s._v("为了解决这个版本不兼容问题，在设计 RESTful API 的一种实用的做法是使用版本号。一般情况下，我们会在 url 中保留版本号，并同时兼容多个版本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】  /v1/users/{user_id}  // 版本 v1 的查询用户列表的 API 接口\n【GET】  /v2/users/{user_id}  // 版本 v2 的查询用户列表的 API 接口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("现在，我们可以不改变版本 v1 的查询用户列表的 API 接口的情况下，新增版本 v2 的查询用户列表的 API 接口以满足新的业务需求，此时，客户端的产品的新功能将请求新的服务端的 API 接口地址。虽然服务端会同时兼容多个版本，但是同时维护太多版本对于服务端而言是个不小的负担，因为服务端要维护多套代码。这种情况下，常见的做法不是维护所有的兼容版本，而是只维护最新的几个兼容版本，例如维护最新的三个兼容版本。在一段时间后，当绝大多数用户升级到较新的版本后，废弃一些使用量较少的服务端的老版本API 接口版本，并要求使用产品的非常旧的版本的用户强制升级。")]),s._v(" "),a("p",[s._v("注意的是，“不改变版本 v1 的查询用户列表的 API 接口”主要指的是对于客户端的调用者而言它看起来是没有改变。而实际上，如果业务变化太大，服务端的开发人员需要对旧版本的 API 接口使用适配器模式将请求适配到新的API 接口上。")]),s._v(" "),a("h3",{attrs:{id:"资源路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源路径","aria-hidden":"true"}},[s._v("#")]),s._v(" 资源路径")]),s._v(" "),a("p",[s._v("RESTful API 的设计以资源为核心，每一个 URI 代表一种资源。因此，URI 不能包含动词，只能是名词。注意的是，形容词也是可以使用的，但是尽量少用。一般来说，不论资源是单个还是多个，API 的名词要以复数进行命名。此外，命名名词的时候，要使用小写、数字及下划线来区分多个单词。这样的设计是为了与 json 对象及属性的命名方案保持一致。例如，一个查询系统标签的接口可以进行如下设计。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】  /v1/tags/{tag_id} \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同时，资源的路径应该从根到子依次如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/{resources}/{resource_id}/{sub_resources}/{sub_resource_id}/{sub_resource_property}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们来看一个“添加用户的角色”的设计，其中“用户”是主资源，“角色”是子资源。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【POST】  /v1/users/{user_id}/roles/{role_id} // 添加用户的角色\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("有的时候，当一个资源变化难以使用标准的 RESTful API 来命名，可以考虑使用一些特殊的 actions 命名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/{resources}/{resource_id}/actions/{action}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("举个例子，“密码修改”这个接口的命名很难完全使用名词来构建路径，此时可以引入 action 命名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【PUT】  /v1/users/{user_id}/password/actions/modify // 密码修改\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"请求方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 请求方式")]),s._v(" "),a("p",[s._v("可以通过 GET、 POST、 PUT、 PATCH、 DELETE 等方式对服务端的资源进行操作。其中：")]),s._v(" "),a("ul",[a("li",[s._v("GET：用于查询资源")]),s._v(" "),a("li",[s._v("POST：用于创建资源")]),s._v(" "),a("li",[s._v("PUT：用于更新服务端的资源的全部信息")]),s._v(" "),a("li",[s._v("PATCH：用于更新服务端的资源的部分信息")]),s._v(" "),a("li",[s._v("DELETE：用于删除服务端的资源。")])]),s._v(" "),a("p",[s._v("这里，使用“用户”的案例进行回顾通过 GET、 POST、 PUT、 PATCH、 DELETE 等方式对服务端的资源进行操作。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】          /users                # 查询用户信息列表\n【GET】          /users/1001           # 查看某个用户信息\n【POST】         /users                # 新建用户信息\n【PUT】          /users/1001           # 更新用户信息(全部字段)\n【PATCH】        /users/1001           # 更新用户信息(部分字段)\n【DELETE】       /users/1001           # 删除用户信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"查询参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 查询参数")]),s._v(" "),a("p",[s._v("RESTful API 接口应该提供参数，过滤返回结果。其中，offset 指定返回记录的开始位置。一般情况下，它会结合 limit 来做分页的查询，这里 limit 指定返回记录的数量。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】  /{version}/{resources}/{resource_id}?offset=0&limit=20\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同时，orderby 可以用来排序，但仅支持单个字符的排序，如果存在多个字段排序，需要业务中扩展其他参数进行支持。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】  /{version}/{resources}/{resource_id}?orderby={field} [asc|desc]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("为了更好地选择是否支持查询总数，我们可以使用 count 字段，count 表示返回数据是否包含总条数，它的默认值为 false。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】  /{version}/{resources}/{resource_id}?count=[true|false]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面介绍的 offset、 limit、 orderby 是一些公共参数。此外，业务场景中还存在许多个性化的参数。我们来看一个例子。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】  /v1/categorys/{category_id}/apps/{app_id}?enable=[1|0]&os_type={field}&device_ids={field,field,…}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意的是，不要过度设计，只返回用户需要的查询参数。此外，需要考虑是否对查询参数创建数据库索引以提高查询性能。")]),s._v(" "),a("h3",{attrs:{id:"状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[s._v("#")]),s._v(" 状态码")]),s._v(" "),a("p",[s._v("使用适合的状态码很重要，而不应该全部都返回状态码 200，或者随便乱使用。这里，列举在实际开发过程中常用的一些状态码，以供参考。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("状态码")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("200")]),s._v(" "),a("td",[s._v("请求成功")])]),s._v(" "),a("tr",[a("td",[s._v("201")]),s._v(" "),a("td",[s._v("创建成功")])]),s._v(" "),a("tr",[a("td",[s._v("400")]),s._v(" "),a("td",[s._v("错误的请求")])]),s._v(" "),a("tr",[a("td",[s._v("401")]),s._v(" "),a("td",[s._v("未验证")])]),s._v(" "),a("tr",[a("td",[s._v("403")]),s._v(" "),a("td",[s._v("被拒绝")])]),s._v(" "),a("tr",[a("td",[s._v("404")]),s._v(" "),a("td",[s._v("无法找到")])]),s._v(" "),a("tr",[a("td",[s._v("409")]),s._v(" "),a("td",[s._v("资源冲突")])]),s._v(" "),a("tr",[a("td",[s._v("500")]),s._v(" "),a("td",[s._v("服务器内部错误")])])])]),s._v(" "),a("h3",{attrs:{id:"异常响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常响应","aria-hidden":"true"}},[s._v("#")]),s._v(" 异常响应")]),s._v(" "),a("p",[s._v("当 RESTful API 接口出现非 2xx 的 HTTP 错误码响应时，采用全局的异常结构响应信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('HTTP/1.1 400 Bad Request\nContent-Type: application/json\n{\n    "code": "INVALID_ARGUMENT",\n    "message": "{error message}",\n    "cause": "{cause message}",\n    "request_id": "01234567-89ab-cdef-0123-456789abcdef",\n    "host_id": "{server identity}",\n    "server_time": "2014-01-01T12:00:00Z"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"请求参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 请求参数")]),s._v(" "),a("p",[s._v("在设计服务端的 RESTful API 的时候，我们还需要对请求参数进行限制说明。例如一个支持批量查询的接口，我们要考虑最大支持查询的数量。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】     /v1/users/batch?user_ids=1001,1002      // 批量查询用户信息\n参数说明\n- user_ids: 用户ID串，最多允许 20 个。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此外，在设计新增或修改接口时，我们还需要在文档中明确告诉调用者哪些参数是必填项，哪些是选填项，以及它们的边界值的限制。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('【POST】     /v1/users                             // 创建用户信息\n请求内容\n{\n    "username": "lusifer",                 // 必填, 用户名称, max 10\n    "realname": "鲁斯菲尔",               // 必填, 用户名称, max 10\n    "password": "123456",              // 必填, 用户密码, max 32\n    "email": "topsale@vip.qq.com",     // 选填, 电子邮箱, max 32\n    "weixin": "Lusifer",            // 选填，微信账号, max 32\n    "sex": 1                           // 必填, 用户性别[1-男 2-女 99-未知]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"响应参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 响应参数")]),s._v(" "),a("p",[s._v("针对不同操作，服务端向用户返回的结果应该符合以下规范。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("【GET】     /{version}/{resources}/{resource_id}      // 返回单个资源对象\n【GET】     /{version}/{resources}                    // 返回资源对象的列表\n【POST】    /{version}/{resources}                    // 返回新生成的资源对象\n【PUT】     /{version}/{resources}/{resource_id}      // 返回完整的资源对象\n【PATCH】   /{version}/{resources}/{resource_id}      // 返回完整的资源对象\n【DELETE】  /{version}/{resources}/{resource_id}      // 状态码 200，返回完整的资源对象。\n                                                      // 状态码 204，返回一个空文档\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果是单条数据，则返回一个对象的 JSON 字符串。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('HTTP/1.1 200 OK\n{\n    "id" : "01234567-89ab-cdef-0123-456789abcdef",\n    "name" : "example",\n    "created_time": 1496676420000,\n    "updated_time": 1496676420000,\n    ...\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果是列表数据，则返回一个封装的结构体。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('HTTP/1.1 200 OK\n{\n    "count":100,\n    "items":[\n        {\n            "id" : "01234567-89ab-cdef-0123-456789abcdef",\n            "name" : "example",\n            "created_time": 1496676420000,\n            "updated_time": 1496676420000,\n            ...\n        },\n        ...\n    ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"一个完整的案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个完整的案例","aria-hidden":"true"}},[s._v("#")]),s._v(" 一个完整的案例")]),s._v(" "),a("p",[s._v("最后，我们使用一个完整的案例将前面介绍的知识整合起来。这里，使用“获取用户列表”的案例。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('【GET】     /v1/users?[&keyword=xxx][&enable=1][&offset=0][&limit=20] 获取用户列表\n功能说明：获取用户列表\n请求方式：GET\n参数说明\n- keyword: 模糊查找的关键字。[选填]\n- enable: 启用状态[1-启用 2-禁用]。[选填]\n- offset: 获取位置偏移，从 0 开始。[选填]\n- limit: 每次获取返回的条数，缺省为 20 条，最大不超过 100。 [选填]\n响应内容\nHTTP/1.1 200 OK\n{\n    "count":100,\n    "items":[\n        {\n            "id" : "01234567-89ab-cdef-0123-456789abcdef",\n            "name" : "example",\n            "created_time": 1496676420000,\n            "updated_time": 1496676420000,\n            ...\n        },\n        ...\n    ]\n}\n失败响应\nHTTP/1.1 403 UC/AUTH_DENIED\nContent-Type: application/json\n{\n    "code": "INVALID_ARGUMENT",\n    "message": "{error message}",\n    "cause": "{cause message}",\n    "request_id": "01234567-89ab-cdef-0123-456789abcdef",\n    "host_id": "{server identity}",\n    "server_time": "2014-01-01T12:00:00Z"\n}\n错误代码\n- 403 UC/AUTH_DENIED    授权受限\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);