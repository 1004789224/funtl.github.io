(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{567:function(t,e,n){"use strict";n.r(e);var a=n(2),o=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"aba-问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aba-问题","aria-hidden":"true"}},[t._v("#")]),t._v(" ABA 问题")]),t._v(" "),n("p",[t._v("CAS 会导致“ABA问题”。")]),t._v(" "),n("p",[t._v("CAS 算法实现一个重要前提需要取出内存中某时刻的数据，而在下时刻比较并替换，那么在这个时间差类会导致数据的变化。")]),t._v(" "),n("p",[t._v("比如说一个线程 one 从内存位置 V 中取出 A，这时候另一个线程 two 也从内存中取出 A，并且 two 进行了一些操作变成了 B，然后 two 又将 V 位置的数据变成 A，这时候线程 one 进行 CAS 操作发现内存中仍然是 A，然后 one 操作成功。尽管线程 one 的 CAS 操作成功，但是不代表这个过程就是没有问题的。")]),t._v(" "),n("p",[t._v("部分乐观锁的实现是通过版本号（version）的方式来解决 ABA 问题，乐观锁每次在执行数据的修改操作时，都会带上一个版本号，一旦版本号和数据的版本号一致就可以执行修改操作并对版本号执行 +1 操作，否则就执行失败。因为每次操作的版本号都会随之增加，所以不会出现 ABA 问题，因为版本号只会增加不会减少。")])])},[],!1,null,null,null);e.default=o.exports}}]);