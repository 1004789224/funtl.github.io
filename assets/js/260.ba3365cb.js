(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{582:function(t,a,s){"use strict";s.r(a);var h=s(2),e=Object(h.a)({},function(){var t=this.$createElement,a=this._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("h1",{attrs:{id:"hashmap-的工作原理及代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-的工作原理及代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" HashMap 的工作原理及代码实现")]),this._v(" "),a("p",[this._v("HashMap 基于 hashing 原理，我们通过 put() 和 get() 方法储存和获取对象。当我们将键值对传递给 put() 方法时，它调用键对象的 hashCode() 方法来计算 hashcode，让后找到 bucket 位置来储存值对象。当获取对象时，通过键对象的 equals() 方法找到正确的键值对，然后返回值对象。HashMap 使用链表来解决碰撞问题，当发生碰撞了，对象将会储存在链表的下一个节点中。 HashMap 在每个链表节点中储存键值对对象。")])])},[],!1,null,null,null);a.default=e.exports}}]);