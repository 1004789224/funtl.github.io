(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{669:function(e,t,n){"use strict";n.r(t);var a=n(2),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"如何保证接口的幂等性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何保证接口的幂等性","aria-hidden":"true"}},[e._v("#")]),e._v(" 如何保证接口的幂等性")]),e._v(" "),n("p",[e._v("当通过调用创建实例接口在负载均衡中创建云服务器时，如果遇到了请求超时或服务器内部错误时，客户端可能会尝试重发请求，这时客户端可以通过提供可选参数 ClientToken 避免服务器创建出比预期要多的实例，也就是通过提供 ClientToken 参数保证请求的幂等性。ClientToken 是一个由客户端生成的唯一的、大小写敏感、不超过 64 个 ASCII 字符的字符串。")]),e._v(" "),n("p",[e._v("如果用户使用同一个 ClientToken 值调用创建实例接口，则服务端会返回相同的请求结果，包含相同的 InstanceId。因此用户在遇到错误进行重试的时候，可以通过提供相同的 ClientToken 值，来确保负载均衡只创建一个实例，并得到这个实例的 InstanceId。")]),e._v(" "),n("p",[e._v("如果用户提供了一个已经使用过的 ClientToken，但其他请求参数不同，则负载均衡会返回 IdempotentParameterMismatch 的错误代码。但需要注意的是，SignatureNonce、Timestamp 和 Signature 参数在重试时是需要变化的，因为负载均衡使用 SignatureNonce 来防止重放攻击，使用 Timestamp 来标记每次请求时间，所以再次请求必须提供不同的 SignatureNonce 和 Timestamp 参数值，这同时也会导致 Signature 值的变化。")]),e._v(" "),n("p",[e._v("通常，客户端只需要在 500（InternetError）或 503（ServiceUnavailable）错误、或者无法得到响应结果的情况下进行重试操作。返回结果是 200 时，重试可以得到上次相同的结果，但不会对服务端状态带来任何影响。而对 4xx 的返回错误，通常重试也是不能成功的。")])])},[],!1,null,null,null);t.default=r.exports}}]);