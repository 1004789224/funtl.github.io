(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{527:function(n,s,t){"use strict";t.r(s);var a=t(2),e=Object(a.a)({},function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"httpservletutils"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#httpservletutils","aria-hidden":"true"}},[n._v("#")]),n._v(" HttpServletUtils")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('package com.funtl.itoken.common.utils;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.util.Iterator;\nimport java.util.Map;\nimport java.util.Set;\n\npublic class HttpServletUtils {\n\n    /**\n     * 获取完整请求路径，带请求参数\n     *\n     * @param request\n     * @return\n     */\n    public static String getFullPath(HttpServletRequest request) {\n        StringBuffer uri = request.getRequestURL();\n        String url = uri.toString();\n        // 获取所有请求,返回 Map 集合\n        Map<String, String[]> map = request.getParameterMap();\n        Set<Map.Entry<String, String[]>> entry = map.entrySet();\n        Iterator<Map.Entry<String, String[]>> iterator = entry.iterator();\n\n        // 遍历集合\n        StringBuffer sb = new StringBuffer();\n        while (iterator.hasNext()) {\n            Map.Entry<String, String[]> item = iterator.next();\n            //请求名\n            String key = item.getKey();\n            //请求值\n            for (String value : item.getValue()) {\n                // 拼接每个请求参数 key=value&\n                sb.append(key + "=" + value + "&");\n            }\n        }\n\n        String string = sb.toString();\n        // 拼接 URL, URL?key=value&key=value& 并且去掉最后一个 &\n        url = url + "?" + string.substring(0, string.lastIndexOf("&"));\n        return url;\n    }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);